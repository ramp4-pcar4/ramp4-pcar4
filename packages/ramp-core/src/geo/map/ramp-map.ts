// wraps and represents a 2D esri map
// TODO add proper comments

import { CommonMapAPI, GlobalEvents, InstanceAPI, LayerInstance, MaptipAPI } from '@/api/internal';
import {
    BaseGeometry,
    CoreFilter,
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
    ScaleSet,
    SpatialReference
} from '@/geo/api';
import { EsriGraphic, EsriLOD, EsriMapView } from '@/geo/esri';
import { LayerStore } from '@/store/modules/layer';
import { MapCaptionAPI } from './caption';
import { markRaw } from 'vue';

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

    // API for managing map caption
    caption: MapCaptionAPI;

    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);

        this.maptip = new MaptipAPI(iApi);
        this.caption = new MapCaptionAPI(iApi);
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

        this._rampSR = SpatialReference.fromConfig(config.extent.spatialReference);

        const esriViewConfig: __esri.MapViewProperties = {
            map: this.esriMap,
            container: targetDiv,
            constraints: {
                lods: <Array<EsriLOD>>config.lods,
                rotationEnabled: false // TODO make rotation a config option?
            },
            spatialReference: this.$iApi.geo.utils.geom._convSrToEsri(this._rampSR), // internal, so we will sneak an internal call
            extent: config.extent,
            navigation: {
                browserTouchPanEnabled: false
            }
        };

        // TODO extract more from config and set appropriate view properties (e.g. intial extent, initial projection, LODs)
        this.esriView = markRaw(new EsriMapView(esriViewConfig));

        this.esriView.watch('extent', (newval: __esri.Extent) => {
            // NOTE: yes, double events. rationale is a block of code dealing with filters will not
            //       want to have two event handlers (one on filter, one on extent change) and synch
            //       between them. They can subscribe to the filter event and get all the info they need.

            const newExtent = <Extent>(
                this.$iApi.geo.utils.geom.geomEsriToRamp(newval, 'map_extent_event')
            );
            this.$iApi.event.emit(GlobalEvents.MAP_EXTENTCHANGE, newExtent);
            this.$iApi.event.emit(GlobalEvents.FILTER_CHANGE, {
                extent: newExtent,
                filterKey: CoreFilter.EXTENT
            });
        });

        // Rewove all ui components
        this.esriView.ui.components = [];

        this.esriView.watch('scale', (newval: number) => {
            this.$iApi.event.emit(GlobalEvents.MAP_SCALECHANGE, newval);
        });

        this.esriView.on('resize', esriResize => {
            this.$iApi.event.emit(GlobalEvents.MAP_RESIZE, {
                height: esriResize.height,
                width: esriResize.width
            });
        });

        this.esriView.on('click', esriClick => {
            this.$iApi.event.emit(
                GlobalEvents.MAP_CLICK,
                this.$iApi.geo.utils.geom.esriMapClickToRamp(esriClick, 'map_click_point')
            );
        });

        this.esriView.on('double-click', esriClick => {
            this.$iApi.event.emit(
                GlobalEvents.MAP_DOUBLECLICK,
                this.$iApi.geo.utils.geom.esriMapClickToRamp(esriClick, 'map_doubleclick_point')
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
            this.$iApi.event.emit(GlobalEvents.MAP_MOUSEDOWN, esriMouseDown.native);
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
        this.$iApi.event.emit(GlobalEvents.MAP_BASEMAPCHANGE, config.initialBasemapId);
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
            throw new Error('call to map.geomToMapSR before the map spatial ref was created');
        }
        if (this._rampSR.isEqual(geom.sr)) {
            return Promise.resolve(geom);
        } else {
            return this.$iApi.geo.utils.proj.projectGeometry(this._rampSR, geom);
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
            const layers = this.$vApp.$store.get<LayerInstance[]>(LayerStore.layers)!;
            // number of layers in store but not on map, probably errored (up to target index)
            const notLoaded: number = layers
                .slice(0, index + 1)
                .filter(layer => !this.esriMap!.layers.find(l => l.id === layer.id)).length;
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
        this.$iApi.$vApp.$store.set(LayerStore.removeLayerConfig, layerInstance.id);

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
    async zoomMapTo(geom: BaseGeometry, scale?: number, animate: boolean = true): Promise<void> {
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
    async takeScreenshot(options: __esri.MapViewTakeScreenshotOptions): Promise<Screenshot> {
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
            return this.$iApi.geo.utils.geom._convEsriExtentToRamp(this.esriView.extent);
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
        let layers: LayerInstance[] | undefined = this.$vApp.$store.get(LayerStore.layers);

        // Don't perform an identify request if the layers array hasn't been established yet.
        if (layers === undefined) return;

        let p: IdentifyParameters = {
            geometry: payload instanceof Point ? payload : payload.mapPoint
        };

        // Perform an identify request on each layer. Does not perform the request on layers that do not have an identify function (layers that do not support identify).
        const identifyInstances: IdentifyResultSet[] = layers
            // This will filter out all MapImageLayers that are not visible, regardless of the visibility of the MapImageFCs (sublayers)
            .filter(layer => layer.supportsIdentify)
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
    async getGraphicAtCoord(screenPoint: ScreenPoint): Promise<GraphicHitResult | undefined> {
        if (!this.esriView) {
            this.noMapErr();
            return;
        }

        // Sync with layer store to get the top-most layer with respect to order of layers in the store
        const layers: LayerInstance[] | undefined = this.$vApp.$store.get<LayerInstance[]>(
            LayerStore.layers
        );

        // Don't perform a hittest request if the layers array hasn't been established yet.
        if (layers === undefined) {
            return;
        }

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
                console.warn('Found layer with more than one child during hitTest');
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
        const panKeys = ['Shift', 'Control', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'];

        if (panKeys.includes(payload.key) && !this._activeKeys.includes(payload.key)) {
            this._activeKeys.push(payload.key);
            // don't pan in middle of zoom animation
            if (!this._activeKeys.some(k => zoomKeys.includes(k))) {
                this.keyPan();
            }
        } else if (zoomKeys.includes(payload.key) && !this._activeKeys.includes(payload.key)) {
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
        if (this._activeKeys.includes(payload.key) && !zoomKeys.includes(payload.key)) {
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
        return this._activeKeys.filter(k => !['Control', 'Shift'].includes(k)).length !== 0;
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
