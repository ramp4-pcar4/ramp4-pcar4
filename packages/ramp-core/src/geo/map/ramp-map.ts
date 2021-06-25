// wraps and represents a 2D esri map
// TODO add proper comments

import {
    CommonMapAPI,
    GlobalEvents,
    InstanceAPI,
    LayerInstance,
    MaptipAPI
} from '@/api/internal';
import {
    Attribution,
    BaseGeometry,
    CoreFilterKey,
    DefPromise,
    Extent,
    GeometryType,
    GraphicHitResult,
    IdentifyMode,
    IdentifyParameters,
    IdentifyResult,
    IdentifyResultSet,
    MapClick,
    Point,
    RampMapConfig,
    ScreenPoint,
    Screenshot,
    ScaleBarProperties,
    ScaleSet,
    SpatialReference
} from '@/geo/api';
import { EsriGraphic, EsriLOD, EsriMapView } from '@/geo/esri';
import { LayerStore } from '@/store/modules/layer';
import { MapCaptionStore } from '@/store/modules/map-caption';

// TODO bring in the map actions code

export class MapAPI extends CommonMapAPI {
    // NOTE unlike ESRI3, the map view doesnt have a custom event, it uses property watches.
    //      so if we want to detect scale change we'll need to have another event, it won't be
    //      a big bundle of properties like ESRI3 provided

    // NOTE while having this var be protected makes sense, there are also cases where other parts of the geoapi need to access this.
    //      being public will also to allow hacking, which can be useful in a pinch. use underscore to make it clear this in not for playtimes.
    /**
     * The internal esri map view. Avoid referencing outside of geoapi.
     * @private
     */
    esriView: __esri.MapView | undefined;
    protected _viewPromise: DefPromise;

    // a promise that resolves when a layer view has been created on the map. helps bridge the view handler with the layer load handler
    get viewPromise(): Promise<void> {
        return this._viewPromise.getPromise();
    }

    /**
     * The map spatial reference in RAMP API Spatial Reference format.
     * Saves us from converting from ESRI format every time it is needed
     * @private
     */
    private _rampSR: SpatialReference | undefined;

    // API for managing the maptip
    maptip: MaptipAPI;

    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);

        this.maptip = new MaptipAPI(iApi);
        this._viewPromise = new DefPromise();
    }

    /**
     * Will generate the actual Map control objects and construct it on the page
     * @param {RampMapConfig} config configuration data for the map
     * @param {string | HTMLDivElement} targetDiv the page div or the div id that the map should be created in
     */
    createMap(config: RampMapConfig, targetDiv: string | HTMLDivElement): void {
        super.createMap(config, targetDiv);

        // TODO if .esriMap or .esriView exists, do we want to do any cleanup on it? E.g. remove event handlers?

        this._rampSR = SpatialReference.fromConfig(
            config.extent.spatialReference
        );

        const esriViewConfig: __esri.MapViewProperties = {
            map: this.esriMap,
            container: targetDiv,
            constraints: {
                lods: <Array<EsriLOD>>config.lods,
                rotationEnabled: false // TODO make rotation a config option?
            },
            spatialReference: this.$iApi.geo.utils.geom._convSrToEsri(
                this._rampSR
            ), // internal, so we will sneak an internal call
            extent: config.extent,
            navigation: {
                browserTouchPanEnabled: false
            }
        };

        // TODO extract more from config and set appropriate view properties (e.g. intial extent, initial projection, LODs)
        this.esriView = new EsriMapView(esriViewConfig);

        this.esriView.watch('extent', (newval: __esri.Extent) => {
            // NOTE: yes, double events. rationale is a block of code dealing with filters will not
            //       want to have two event handlers (one on filter, one on extent change) and synch
            //       between them. They can subscribe to the filter event and get all the info they need.

            const newExtent = <Extent>(
                this.$iApi.geo.utils.geom.geomEsriToRamp(
                    newval,
                    'map_extent_event'
                )
            );
            this.$iApi.event.emit(GlobalEvents.MAP_EXTENTCHANGE, newExtent);
            this.$iApi.event.emit(GlobalEvents.FILTER_CHANGE, {
                extent: newExtent,
                filterKey: CoreFilterKey.EXTENT
            });
        });

        this.esriView.watch('scale', (newval: number) => {
            this.$iApi.event.emit(GlobalEvents.MAP_SCALECHANGE, newval);
        });

        this.esriView.on('click', esriClick => {
            this.$iApi.event.emit(
                GlobalEvents.MAP_CLICK,
                this.$iApi.geo.utils.geom.esriMapClickToRamp(
                    esriClick,
                    'map_click_point'
                )
            );
        });

        this.esriView.on('double-click', esriClick => {
            this.$iApi.event.emit(
                GlobalEvents.MAP_DOUBLECLICK,
                this.$iApi.geo.utils.geom.esriMapClickToRamp(
                    esriClick,
                    'map_doubleclick_point'
                )
            );
        });

        this.esriView.on('pointer-move', esriMouseMove => {
            // TODO debounce here? the map event fires pretty much every change in pixel value.
            this.$iApi.event.emit(
                GlobalEvents.MAP_MOUSEMOVE,
                this.$iApi.geo.utils.geom.esriMapMouseToRamp(esriMouseMove)
            );
        });

        this.esriView.on('pointer-down', esriMouseDown => {
            // .native is a DOM pointer event
            this.$iApi.event.emit(
                GlobalEvents.MAP_MOUSEDOWN,
                esriMouseDown.native
            );
        });

        this.esriView.on('key-down', esriKeyDown => {
            // .native is a DOM keyboard event
            this.$iApi.event.emit(GlobalEvents.MAP_KEYDOWN, esriKeyDown.native);
            esriKeyDown.stopPropagation();
        });

        this.esriView.on('key-up', esriKeyUp => {
            // .native is a DOM keyboard event
            this.$iApi.event.emit(GlobalEvents.MAP_KEYUP, esriKeyUp.native);
            esriKeyUp.stopPropagation();
        });

        this.esriView.on('blur', esriBlur => {
            // .native is a DOM keyboard event
            this.$iApi.event.emit(GlobalEvents.MAP_BLUR, esriBlur.native);
        });

        this.esriView.container.addEventListener('touchmove', e => {
            // need this for panning and zooming to work on mobile devices / touchscreens
            // touchmove stops the drag event (what the MapView reacts to) from firing properly
            e.preventDefault();
        });

        this._viewPromise.resolveMe();

        // emit basemap changed event
        this.$iApi.event.emit(
            GlobalEvents.MAP_BASEMAPCHANGE,
            config.initialBasemapId
        );
    }

    /**
     * Projects a geometry to the map's spatial reference
     *
     * @private
     * @param {BaseGeometry} geom the RAMP API geometry to project
     * @returns {Promise<BaseGeometry>} the geometry projected to the map's projection, in RAMP API Geometry format
     */
    private geomToMapSR(geom: BaseGeometry): Promise<BaseGeometry> {
        if (!this._rampSR) {
            throw new Error(
                'call to map.geomToMapSR before the map spatial ref was created'
            );
        }
        if (this._rampSR.isEqual(geom.sr)) {
            return Promise.resolve(geom);
        } else {
            return this.$iApi.geo.utils.proj.projectGeometry(
                this._rampSR,
                geom
            );
        }
    }

    /**
     * Adds a layer to the map
     *
     * @param {LayerInstance} layer the Ramp layer to add
     * @returns {Promise<void>} a promise that resolves when the layer has been added to the map
     */
    addLayer(layer: LayerInstance): void {
        if (!this.esriMap) {
            this.noMapErr();
            return;
        }
        // await layer.isReadyForMap();
        if (layer.esriLayer) {
            this.esriMap.add(layer.esriLayer);
        } else {
            // TODO maybe we should call layer.initiate() and block? Could be a nice shortcut. But also might have unintended effects.
            console.error(
                'Layer added to map without an esri layer. Likely layer.initiate() was not called or had not finished.'
            );
        }
    }

    /**
     * Reorders a layer on the map
     *
     * @param {LayerInstance} layer the RAMP layer to be moved
     * @param {number} index the RAMP layer index for placing the layer
     */
    reorder(layer: LayerInstance, index: number): void {
        if (!this.esriMap) {
            this.noMapErr();
            return;
        }
        if (layer.esriLayer) {
            const layers = this.$vApp.$store.get<LayerInstance[]>(
                LayerStore.layers
            )!;
            // number of layers in store but not on map, probably errored (up to target index)
            const notLoaded: number = layers
                .slice(0, index + 1)
                .filter(
                    layer => !this.esriMap!.layers.find(l => l.id === layer.id)
                ).length;
            // calculate corresponding map layer index
            const esriLayerIndex: number = this.esriMap.layers.indexOf(
                this.esriMap.layers
                    .filter(
                        esrilayer => !!layers.find(l => l.id === esrilayer.id) // ignore layers not in store (e.g. pole marker)
                    )
                    .slice(0, index + 1 - notLoaded) // adjust for layers not on map
                    .pop()
            );
            // set map order
            this.esriMap.reorder(layer.esriLayer, esriLayerIndex);
        } else {
            console.error(
                'Attempted reorder without an esri layer. Likely layer.initiate() was not called or had not finished.'
            );
        }
        // sync layer store order with map order
        this.$vApp.$store.set(LayerStore.reorderLayer, { layer, index });
    }

    /**
     * Removes a layer from the map and fires the LAYER_REMOVE event
     *
     * @param {LayerInstance | string} layer the Ramp layer or layer id/uid to remove
     * @returns {Promise<void>} a promise that resolves when the layer has been removed from the map
     */
    removeLayer(layer: LayerInstance | string): void {
        if (!this.esriMap) {
            this.noMapErr();
            return;
        }

        let layerInstance: LayerInstance | undefined = undefined;

        if (layer instanceof LayerInstance) {
            layerInstance = layer;
        } else {
            // Layer is a string id
            layerInstance = this.$iApi.geo.layer.getLayer(layer);
        }

        // Error checking
        if (!layerInstance) {
            console.error('Layer could not be found for removal.');
            return;
        }
        if (!layerInstance.esriLayer) {
            console.error(
                'Attempted to remove layer from the map without an esri layer. Likely layer.initiate() was not called or had not finished.'
            );
            return;
        }

        // Now we start the layer removal process
        // Clean up layer
        layerInstance.terminate();

        // Clean up the layer store
        this.$iApi.$vApp.$store.set(LayerStore.removeLayer, layerInstance);

        // Clean up the layer config store
        this.$iApi.$vApp.$store.set(
            LayerStore.removeLayerConfig,
            layerInstance.id
        );

        // Remove the layer from the map
        this.esriMap.remove(layerInstance.esriLayer);

        // Fire the layer removal event
        this.$iApi.event.emit(GlobalEvents.LAYER_REMOVE, layerInstance);
    }

    /**
     * Adds a highlight layer to the map
     *
     * @param {HighlightLayer} highlightLayer the highlight
     */
    // TODO make a decision to re-add or remove after we figure out what highlight layers are dong
    /*
    addHighlightLayer (highlightLayer: HighlightLayer): void {
        this.esriMap.add(highlightLayer.esriLayer);
    }
    */

    // TODO passthrough functions, either by aly magic or make them hardcoded

    /**
     * Zooms the map to a given geometry.
     *
     * @param {BaseGeometry} geom A RAMP API geometry to zoom the map to
     * @param {number} [scale] An optional scale value of the map. Is ignored for non-Point geometries
     * @param {boolean} [animate] An optional animation setting. On by default
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    async zoomMapTo(
        geom: BaseGeometry,
        scale?: number,
        animate: boolean = true
    ): Promise<void> {
        // TODO technically this can accept any geometry. should we open up the suggested signatures to allow various things?
        if (this.esriView) {
            const g = await this.geomToMapSR(geom);
            // TODO investigate the `snapTo` parameter if we have an extent / poly coming in
            //      see how it compares to the old "fit to view" parameter of ESRI3
            const zoomP: any = {
                target: this.$iApi.geo.utils.geom.geomRampToEsri(g)
            };
            if (g.type === GeometryType.POINT) {
                zoomP.scale = scale || 50000;
            }
            const opts: any = { animate: animate };
            if (this.esriView) {
                return this.esriView.goTo(zoomP, opts);
            }
        } else {
            this.noMapErr();
        }
    }

    /**
     * Zooms the map to a given zoom level. The center point will not change.
     * In the rare case where there is no basemap, this will likely do nothing
     *
     * @param {number} zoomLevel An integer matching the level of detail / zoom level the map should adjust to
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    async zoomToLevel(zoomLevel: number): Promise<void> {
        if (this.esriView) {
            return this.esriView.goTo({ zoom: zoomLevel });
        } else {
            this.noMapErr();
        }
    }

    /**
     * Zooms the map to the next zoom level in towards the earth. The center point will not change.
     * In the rare case where there is no basemap, this will likely do nothing
     *
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    async zoomIn(): Promise<void> {
        // TODO fancy it up and add some bounds checking
        if (this.esriView) {
            return this.zoomToLevel(this.esriView.zoom + 1);
        } else {
            this.noMapErr();
        }
    }

    /**
     * Zooms the map to the next zoom level out away from the earth. The center point will not change.
     * In the rare case where there is no basemap, this will likely do nothing
     *
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    async zoomOut(): Promise<void> {
        // TODO fancy it up and add some bounds checking
        if (this.esriView) {
            return this.zoomToLevel(this.esriView.zoom - 1);
        } else {
            this.noMapErr();
        }
    }

    /**
     * Zooms the map to the closest zoom level that will be visible for a given scale set.
     * Does nothing if scale set is already visible for the map.
     *
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    async zoomToVisibleScale(scaleSet: ScaleSet): Promise<void> {
        if (!this.esriView) {
            this.noMapErr();
            return;
        }

        const offStatus = scaleSet.isOffScale(this.getScale());

        if (!offStatus.offScale) {
            return;
        }

        const lods = this.esriView.constraints.lods;

        if (!lods) {
            // handle case with no tiles / lods
            return this.zoomMapTo(
                this.getExtent().center(),
                offStatus.zoomIn ? scaleSet.minScale : scaleSet.minScale
            );
        }

        // the lods array is ordered largest scale to smallest scale.  e.g. world view to city view
        // if zoomOut is false, we reverse the array so we search it in the other direction.
        const modLods = offStatus.zoomIn ? lods : [...lods].reverse();

        // scan for appropriate LOD that will make scale set visible, or pick last LOD if no boundary was found
        const scaleLod =
            modLods.find(currentLod =>
                offStatus.zoomIn
                    ? currentLod.scale < scaleSet.minScale
                    : currentLod.scale > scaleSet.maxScale
            ) || modLods[modLods.length - 1];

        return this.zoomToLevel(scaleLod.level);
    }

    /**
     * Create a screenshot of the current view.
     *
     * Possible ESRI takeScreenshot() options:
     * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#takeScreenshot
     * Will default to quality = 1 and format = 'png'.
     *
     * @param {__esri.MapViewTakeScreenshotOptions} options ESRI takeScreenshot() options
     * @returns {Promise<Screenshot>} a promise that resolves with a Screenshot
     */
    async takeScreenshot(
        options: __esri.MapViewTakeScreenshotOptions
    ): Promise<Screenshot> {
        if (this.esriView) {
            if (!options.quality) {
                options.quality = 1;
            }
            if (!options.format) {
                options.format = 'png';
            }
            return this.esriView.takeScreenshot(options);
        } else {
            throw new Error('Export attempted without a map view available');
        }
    }

    /**
     * Updates the attribution on the map-caption bar
     * Applies default ESRI attribution if incoming attribution is disabled or has undefined elements
     *
     * Updates map-caption store to notify map-caption component observer
     *
     * @param {Attribution} newAttribution incoming new attribution
     */
    updateAttribution(newAttribution: Attribution): void {
        if (!newAttribution) {
            return;
        }

        // Reset the attribution
        let attribution: Attribution = {
            text: { value: 'Powered by ESRI' },
            logo: {
                altText: 'ESRI logo',
                link: 'http://www.esri.com/',
                value:
                    'data:image/png;base64,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'
            }
        };

        // Check if attribution text is enabled
        // Need to add OR (||) incase newAttribution value is undefined/empty
        if (!newAttribution.text.disabled) {
            attribution.text.value =
                newAttribution.text.value || attribution.text.value;
        }

        // Need to add OR (||) incase newAttribution values are undefined/empty
        if (!newAttribution.logo.disabled) {
            attribution.logo.altText =
                newAttribution.logo.altText || attribution.logo.altText;
            attribution.logo.link =
                newAttribution.logo.link || attribution.logo.link;
            attribution.logo.value =
                newAttribution.logo.value || attribution.logo.value;
        }

        this.$iApi.$vApp.$store.set(
            MapCaptionStore.setAttribution,
            attribution
        );
    }

    /**
     * Calculates a scale bar for the current resolution
     * Updates map-caption store to notify map-caption component observer
     */
    updateScale(): void {
        const isImperialScale: boolean = (this.$iApi.$vApp.$store.get(
            MapCaptionStore.scale
        ) as ScaleBarProperties).isImperialScale;

        // the starting length of the scale line in pixels
        // reduce the length of the bar on extra small layouts
        const factor = window.innerWidth > 600 ? 70 : 35;
        const mapResolution = this.$iApi.geo.map.getResolution();

        // distance in meters
        const meters = mapResolution * factor;
        const metersInAMile = 1609.34;
        const metersInAFoot = 3.28084;

        let distance, pixels, unit;

        // If meters < 1Km, then use different scaling
        if (meters > 1000) {
            // get the distance in units, either miles or kilometers
            const units =
                (mapResolution * factor) /
                (isImperialScale ? metersInAMile : 1000);
            unit = isImperialScale ? 'mi' : 'km';

            // length of the distance number
            const len = Math.round(units).toString().length;
            const div = Math.pow(10, len - 1);

            // we want to round the distance to the ceiling of the highest position and display a nice number
            // 45.637km => 50.00km; 4.368km => 5.00km
            // 28.357mi => 30.00mi; 2.714mi => 3.00mi
            distance = Math.ceil(units / div) * div;

            // calcualte length of the scale line in pixels based on the round distance
            pixels =
                (distance * (isImperialScale ? metersInAMile : 1000)) /
                mapResolution;
        } else {
            // Round the meters up
            distance = Math.ceil(
                isImperialScale ? meters * metersInAFoot : meters
            );
            pixels = meters / mapResolution;
            unit = isImperialScale ? 'ft' : 'm';
        }

        this.$iApi.$vApp.$store.set(MapCaptionStore.setScale, {
            width: `${pixels}px`,
            label: `${distance}${unit}`,
            isImperialScale: isImperialScale
        });
    }

    /**
     * Provides the zoom level of the map
     *
     * @returns {number} the map zoom level
     */
    getZoomLevel(): number {
        if (this.esriView) {
            return this.esriView.zoom;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Provides the scale of the map (the scale denominator as integer)
     *
     * @returns {number} the map scale
     */
    getScale(): number {
        if (this.esriView) {
            return this.esriView.scale;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Provides the resolution of the map. This means the number of map units that is covered by one pixel.
     *
     * @returns {number} the map resolution
     */
    getResolution(): number {
        if (this.esriView) {
            return this.esriView.resolution;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Provides the extent of the map
     *
     * @returns {Extent} the map extent in RAMP API Extent format
     */
    getExtent(): Extent {
        if (this.esriView) {
            return this.$iApi.geo.utils.geom._convEsriExtentToRamp(
                this.esriView.extent
            );
        } else {
            this.noMapErr();
            return Extent.fromParams('i_am_error', 0, 1, 0, 1); // default fake value. avoids us having undefined checks everywhere.
        }
    }

    /**
     * Provides the spatial reference of the map
     *
     * @returns {SpatialReference} the map spatial reference in RAMP API format
     */
    getSR(): SpatialReference {
        if (this._rampSR) {
            return this._rampSR.clone();
        } else {
            this.noMapErr();
            return SpatialReference.latLongSR(); // default fake value. avoids us having undefined checks everywhere.
        }
    }

    /**
     * Get the height of the map on the screen in pixels
     *
     * @returns {Number} pixel height
     */
    getPixelHeight(): number {
        if (this.esriView) {
            return this.esriView.height;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Get the width of the map on the screen in pixels
     *
     * @returns {Number} pixel width
     */
    getPixelWidth(): number {
        if (this.esriView) {
            return this.esriView.width;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Get the id of the currently used basemap
     * Returns undefined if there is no map
     * @returns {string | undefined} current basemap id
     */
    getCurrentBasemapId(): string | undefined {
        if (this.esriMap) {
            return this.esriMap.basemap.id;
        } else {
            this.noMapErr();
        }
    }

    /**
     * Get a point in map co-ordinates corresponding to a pixel in screen co-ordinates.
     *
     * @param {ScreenPoint} screenPoint pixel screen co-ord of the point on the map
     * @returns {Point} the map point analagous to the screen point
     */
    screenPointToMapPoint(screenPoint: ScreenPoint): Point {
        if (this.esriView) {
            return this.$iApi.geo.utils.geom._convEsriPointToRamp(
                this.esriView.toMap({
                    x: screenPoint.screenX,
                    y: screenPoint.screenY
                }),
                'mappoint'
            );
        } else {
            this.noMapErr();
            return new Point('i_am_error', [0, 0], undefined, true); //  default fake value. avoids us having undefined checks everywhere.
        }
    }

    /**
     * Get a pixel in screen co-ordinates corresponding to a point in map co-ordinates.
     *
     * @param {Point} mapPoint point on the map
     * @returns {ScreenPoint} the screen point analagous to the map point
     */
    mapPointToScreenPoint(mapPoint: Point): ScreenPoint {
        if (this.esriView) {
            const esriPoint = this.esriView.toScreen(
                this.$iApi.geo.utils.geom._convPointToEsri(mapPoint)
            );
            return { screenX: esriPoint.x, screenY: esriPoint.y };
        } else {
            this.noMapErr();
            return { screenX: 1, screenY: 1 }; //  default fake value. avoids us having undefined checks everywhere.
        }
    }

    // TODO function to allow a second Map to be shot out, that shares this map but has a different scene

    // TODO basemap generation stuff (might need to be delayed due to lack of dojo dijit)

    _identifyMode: IdentifyMode[] = [
        IdentifyMode.Query,
        IdentifyMode.Marker,
        IdentifyMode.Highlight,
        IdentifyMode.Haze,
        IdentifyMode.Details
    ];

    // a note about modes and events.
    // depending if we choose to implement the old modes are come up with a new scheme,
    // there are two event handlers that are running stuff (see events.ts).
    // there is a map click event that then triggers the identify routine below
    // and there is the identify event, raised by the routine below, that then opens the details panel.
    // so the solution may need to either do some on/off'ing of the event handlers,
    // or we introduce some global flag variables that get referenced
    // (e.g. dont run identify could be a first line in the function below: if api.noIdentify then return )
    // global flags MIGHT be safer, as it doesn't have to assume the default handlers are in play.
    // i.e. if someone did some event modding for custom results, and we have core code then swapping
    //      default event handlers, would be a mess.

    /**
     * Performs an identify request on all layers that support identify, and combines the results into an object that is readable by the details panel.
     *
     * @param {*} payload
     * @memberof DetailsFixture
     */

    identify(payload: MapClick | Point) {
        let layers: LayerInstance[] | undefined = this.$vApp.$store.get(
            LayerStore.layers
        );

        // Don't perform an identify request if the layers array hasn't been established yet.
        if (layers === undefined) return;

        let p: IdentifyParameters = {
            geometry: payload instanceof Point ? payload : payload.mapPoint
        };

        // Perform an identify request on each layer. Does not perform the request on layers that do not have an identify function (layers that do not support identify).
        const identifyInstances: IdentifyResultSet[] = layers
            // This will filter out all MapImageLayers that are not visible, regardless of the visibility of the MapImageFCs (sublayers)
            .filter(layer => layer.supportsIdentify && layer.getVisibility())
            .map(layer => {
                return layer.identify(p);
            });

        // Merge all results received by the identify into one array.
        const identifyResults: IdentifyResult[] = ([] as IdentifyResult[]).concat(
            ...identifyInstances.map(({ results }) => results)
        );

        let mapClick: MapClick;
        if (payload instanceof Point) {
            // construct MapClick if only point is given
            const screenPoint = this.mapPointToScreenPoint(payload);
            mapClick = {
                mapPoint: payload,
                screenX: screenPoint.screenX,
                screenY: screenPoint.screenY,
                button: 0,
                clickTime: Date.now()
            };
        } else {
            mapClick = payload;
        }

        // TODO make the event payload an interface? should there be a public area with all event payload interfaces?
        this.$iApi.event.emit(GlobalEvents.MAP_IDENTIFY, {
            results: identifyResults,
            click: mapClick
        });
    }

    /**
     * Get the top-most graphic at the given screen point
     * Returns undefined if there is no point
     *
     * @param {ScreenPoint} screenPoint The screen coordinates
     * @returns {Promise<GraphicHitResult | undefined>} a promise that resolves when a graphic is hit (undefined if no graphic was hit)
     */
    async getGraphicAtCoord(
        screenPoint: ScreenPoint
    ): Promise<GraphicHitResult | undefined> {
        if (!this.esriView) {
            this.noMapErr();
            return;
        }

        // Sync with layer store to get the top-most layer with respect to order of layers in the store
        const layers: LayerInstance[] | undefined = this.$vApp.$store.get<
            LayerInstance[]
        >(LayerStore.layers);

        // Don't perform a hittest request if the layers array hasn't been established yet.
        if (layers === undefined) return;

        const response: __esri.HitTestResult = await this.esriView.hitTest({
            x: screenPoint.screenX,
            y: screenPoint.screenY
        });

        if (response.results.length === 0) return;

        let esriGraphic: EsriGraphic | undefined;
        let hitLayer: LayerInstance | undefined;

        layers.some(layer => {
            // breaks in the first match hit, preserving the layer order
            const matchedResult: any = response.results.find(result => {
                return result.graphic.layer.id === layer.id;
            });
            if (matchedResult) {
                hitLayer = layer;
                esriGraphic = matchedResult.graphic;
            }
            return matchedResult !== undefined;
        });
        if (esriGraphic && hitLayer) {
            if (hitLayer.getLayerTree().children.length > 1) {
                console.warn(
                    'Found layer with more than one child during hitTest'
                );
            }
            return {
                oid: esriGraphic.getObjectId(),
                layerId: esriGraphic.layer.id,
                layerIdx: hitLayer.getLayerTree().children[0].layerIdx
            };
        }
    }

    // list of keys that are currently pressed
    private _activeKeys: string[] = [];

    // ID of pan interval
    private _panInterval: any;

    /**
     * Processes keydown event on map and initiates panning/zooming
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     */
    mapKeyDown(payload: KeyboardEvent) {
        const zoomKeys = ['=', '-'];
        const panKeys = [
            'Shift',
            'Control',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp'
        ];

        if (
            panKeys.includes(payload.key) &&
            !this._activeKeys.includes(payload.key)
        ) {
            this._activeKeys.push(payload.key);
            // don't pan in middle of zoom animation
            if (!this._activeKeys.some(k => zoomKeys.includes(k))) {
                this.keyPan();
            }
        } else if (
            zoomKeys.includes(payload.key) &&
            !this._activeKeys.includes(payload.key)
        ) {
            this._activeKeys.push(payload.key);
            this.keyZoom(payload);
        } else if (payload.key === 'Enter') {
            this.identify(this.getExtent().center());
        }
    }

    /**
     * Processes keyup event on map and deactivates key
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     */
    mapKeyUp(payload: KeyboardEvent) {
        const zoomKeys = ['=', '-'];

        // ignore zoom keys, manually deactivate them when zoom finishes so keyup won't interrupt zoom animation
        if (
            this._activeKeys.includes(payload.key) &&
            !zoomKeys.includes(payload.key)
        ) {
            this._activeKeys.splice(this._activeKeys.indexOf(payload.key), 1);
            // don't pan in middle of zoom animation
            if (!this._activeKeys.some(k => zoomKeys.includes(k))) {
                this.keyPan();
            }
        }
    }

    /**
     * Stops panning and deactivates all keys
     *
     * @memberof MapAPI
     */
    stopKeyPan() {
        this._activeKeys = [];
        clearInterval(this._panInterval);
    }

    /**
     * Returns if keys are active on map
     *
     * @memberof MapAPI
     * @returns {boolean} - true if any pan/zoom keys are active
     */
    get keysActive(): boolean {
        return (
            this._activeKeys.filter(k => !['Control', 'Shift'].includes(k))
                .length !== 0
        );
    }

    /**
     * Pauses pan interval to process zoom from keyboard
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     * @private
     */
    private async keyZoom(payload: KeyboardEvent) {
        clearInterval(this._panInterval);
        if (payload.key === '=') {
            await this.zoomIn();
        } else if (payload.key === '-') {
            await this.zoomOut();
        }
        this._activeKeys.splice(this._activeKeys.indexOf(payload.key), 1);
        this.keyPan();
    }

    /**
     * Starts/restarts panning with active keys
     *
     * @memberof MapAPI
     * @private
     */
    private keyPan() {
        clearInterval(this._panInterval);
        if (!this.keysActive) {
            return;
        }

        const center = this.getExtent().center();

        // calculate pan velocity based on constant pixel value that won't change based on zoom
        const screenCenter = this.mapPointToScreenPoint(center);
        const p = this.screenPointToMapPoint({
            screenX: screenCenter.screenX + 5,
            screenY: screenCenter.screenY + 5
        });
        const xDiff = Math.abs(p.x - center.x);
        const yDiff = Math.abs(p.y - center.y);

        let dx = 0;
        let dy = 0;
        let multiplier = 1;

        for (let i = 0; i < this._activeKeys.length; ++i) {
            switch (this._activeKeys[i]) {
                case 'ArrowLeft':
                    dx -= xDiff;
                    break;
                case 'ArrowRight':
                    dx += xDiff;
                    break;
                case 'ArrowUp':
                    dy += yDiff;
                    break;
                case 'ArrowDown':
                    dy -= yDiff;
                    break;
                case 'Shift':
                    multiplier = 2;
                    break;
                case 'Control':
                    multiplier = 0.25;
                    break;
            }
        }

        const scale = this.getScale();

        this._panInterval = setInterval(() => {
            center.x += multiplier * dx;
            center.y += multiplier * dy;
            this.zoomMapTo(center, scale, false);
        }, 25);
    }
}
