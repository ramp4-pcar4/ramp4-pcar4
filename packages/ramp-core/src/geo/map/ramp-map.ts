// wraps and represents a 2D esri map
// TODO add proper comments

import {
    Basemap,
    CommonMapAPI,
    GlobalEvents,
    InstanceAPI,
    LayerInstance,
    MaptipAPI
} from '@/api/internal';
import {
    CoreFilter,
    DefPromise,
    Extent,
    ExtentSet,
    GraphicHitResult,
    // IdentifyMode,
    IdentifyParameters,
    IdentifyResult,
    IdentifyResultSet,
    MapClick,
    MapIdentifyResult,
    Point,
    RampBasemapConfig,
    RampExtentSetConfig,
    RampLodSetConfig,
    RampMapConfig,
    RampTileSchemaConfig,
    ScreenPoint,
    Screenshot,
    ScaleSet
} from '@/geo/api';
import { EsriGraphic, EsriLOD, EsriMapView } from '@/geo/esri';
import { LayerStore } from '@/store/modules/layer';
import { MapCaptionAPI } from './caption';
import { markRaw, toRaw } from 'vue';
import { ConfigStore } from '@/store/modules/config';

export class MapAPI extends CommonMapAPI {
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
    }

    /**
     * Will generate a ESRI map view and add it to the page
     * Can optionally provide the basemap or basemap id to be used when creating the map view
     *
     * @param {string | Basemap | undefined} basemap the id of the basemap that should be used when creating the map view
     * @private
     */
    protected createMapView(basemap?: string | Basemap): void {
        // get the config from the store
        const config: RampMapConfig | undefined = this.$iApi.$vApp.$store.get(
            ConfigStore.getMapConfig
        );
        if (!config) {
            throw new Error(
                'Attempted to create map view without a map config'
            );
        }

        const bm: Basemap =
            (typeof basemap === 'string'
                ? this.findBasemap(basemap)
                : basemap) || this.findBasemap(config.initialBasemapId);
        this.applyBasemap(bm);

        // get the current tile schema we are in
        const tileSchemaConfig: RampTileSchemaConfig | undefined =
            config.tileSchemas.find(ts => ts.id === bm.tileSchemaId);

        if (!tileSchemaConfig) {
            throw new Error(
                `Could not find tile schema for the given basemap id: ${bm.id}`
            );
        }

        const extentSetConfig: RampExtentSetConfig | undefined =
            config.extentSets.find(
                es => es.id === tileSchemaConfig.extentSetId
            );

        if (!extentSetConfig) {
            throw new Error(
                `Could not find extent set with the given id: ${tileSchemaConfig.extentSetId}`
            );
        }

        this._rampExtentSet = ExtentSet.fromConfig(extentSetConfig);
        this._rampSR = this._rampExtentSet.sr.clone();

        const lodSetConfig: RampLodSetConfig | undefined = config.lodSets.find(
            ls => ls.id === tileSchemaConfig.lodSetId
        );

        if (!lodSetConfig) {
            throw new Error(
                `Could not find lod set with the given id: ${tileSchemaConfig.lodSetId}`
            );
        }

        // create esri view with config
        this.esriView = markRaw(
            new EsriMapView({
                map: this.esriMap,
                container: this._targetDiv,
                constraints: {
                    lods: <Array<EsriLOD>>lodSetConfig.lods,
                    rotationEnabled: false
                },
                spatialReference: this._rampSR.toESRI(),
                extent: this._rampExtentSet.defaultExtent.toESRI(),
                navigation: {
                    browserTouchPanEnabled: false
                }
            })
        );

        // Remove all ui components
        this.esriView.ui.components = [];

        this.handlers.push(
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
                    filterKey: CoreFilter.EXTENT
                });
            })
        );

        this.handlers.push(
            this.esriView.watch('scale', (newval: number) => {
                this.$iApi.event.emit(GlobalEvents.MAP_SCALECHANGE, newval);
            })
        );

        this.handlers.push(
            this.esriView.on('resize', esriResize => {
                this.$iApi.event.emit(GlobalEvents.MAP_RESIZED, {
                    height: esriResize.height,
                    width: esriResize.width
                });
            })
        );

        this.handlers.push(
            this.esriView.on('click', esriClick => {
                this.$iApi.event.emit(
                    GlobalEvents.MAP_CLICK,
                    this.$iApi.geo.utils.geom.esriMapClickToRamp(
                        esriClick,
                        'map_click_point'
                    )
                );
            })
        );

        this.handlers.push(
            this.esriView.on('double-click', esriClick => {
                this.$iApi.event.emit(
                    GlobalEvents.MAP_DOUBLECLICK,
                    this.$iApi.geo.utils.geom.esriMapClickToRamp(
                        esriClick,
                        'map_doubleclick_point'
                    )
                );
            })
        );

        this.handlers.push(
            this.esriView.on('pointer-move', esriMouseMove => {
                // TODO debounce here? the map event fires pretty much every change in pixel value.
                this.$iApi.event.emit(
                    GlobalEvents.MAP_MOUSEMOVE,
                    this.$iApi.geo.utils.geom.esriMapMouseToRamp(esriMouseMove)
                );
            })
        );

        this.handlers.push(
            this.esriView.on('pointer-down', esriMouseDown => {
                // .native is a DOM pointer event
                this.$iApi.event.emit(
                    GlobalEvents.MAP_MOUSEDOWN,
                    esriMouseDown.native
                );
            })
        );

        this.handlers.push(
            this.esriView.on('key-down', esriKeyDown => {
                // .native is a DOM keyboard event
                this.$iApi.event.emit(
                    GlobalEvents.MAP_KEYDOWN,
                    esriKeyDown.native
                );
                esriKeyDown.stopPropagation();
            })
        );

        this.handlers.push(
            this.esriView.on('key-up', esriKeyUp => {
                // .native is a DOM keyboard event
                this.$iApi.event.emit(GlobalEvents.MAP_KEYUP, esriKeyUp.native);
                esriKeyUp.stopPropagation();
            })
        );

        this.handlers.push(
            this.esriView.on('blur', esriBlur => {
                // .native is a DOM keyboard event
                this.$iApi.event.emit(GlobalEvents.MAP_BLUR, esriBlur.native);
            })
        );

        this.esriView.container.addEventListener('touchmove', e => {
            // need this for panning and zooming to work on mobile devices / touchscreens
            // touchmove stops the drag event (what the MapView reacts to) from firing properly
            e.preventDefault();
        });

        this._viewPromise.resolveMe();
        this.created = true;
    }

    /**
     * Refreshes the map view by destroying it first and then recreating it
     * Can optionally provide the basemap or basemap id to be used when creating the map
     *
     * @param {string | Basemap | undefined} basemap the basemap or basemap id that should be used when recreating the map view
     */
    refreshMap(basemap?: string | Basemap): void {
        if (!this.esriView || !this.esriMap) {
            this.noMapErr();
            return;
        }

        this._viewPromise = new DefPromise();
        this.created = false;

        this.$iApi.event.emit(GlobalEvents.MAP_REFRESH_START);

        // Clean up map view
        this.handlers.forEach(h => h.remove());
        this.handlers = [];

        // Destroy the current map view
        // @ts-ignore
        this.esriView.map = null;
        // @ts-ignore
        this.esriView.container = null;
        // @ts-ignore
        this.esriView.spatialReference = null;
        // @ts-ignore
        this.esriView.extent = null;
        // @ts-ignore
        this.esriView.navigation = null;
        this.esriView.destroy();
        delete this.esriView;

        // recreate the map view
        this.createMapView(basemap);

        this.$iApi.event.emit(GlobalEvents.MAP_REFRESH_END);
    }

    /**
     * Sets the basemap to the basemap with the given id or the basemap object
     * Throws error if basemap could not be found
     *
     * @param {string | basemap} basemap the basemap id or object
     * @protected
     */
    protected applyBasemap(basemap: string | Basemap): void {
        if (!this.esriMap) {
            this.noMapErr();
            return;
        }

        const bm: Basemap =
            typeof basemap === 'string' ? this.findBasemap(basemap) : basemap;
        this.esriMap.basemap = toRaw(bm.esriBasemap);

        // update the store
        this.$iApi.$vApp.$store.set(ConfigStore.setActiveBasemap, bm.config);
    }

    /**
     * Set the map's basemap to the basemap with the given id.
     * If the new basemap's tile schema differs from the current one, the map view will be refreshed
     *
     * The returned boolean indicates if the schema has changed.
     *
     * @param {string} basemapId the basemap id
     * @returns {boolean} indicates if the schema has changed
     */
    setBasemap(basemapId: string): boolean {
        const bm: Basemap = this.findBasemap(basemapId);
        const currentBasemp: RampBasemapConfig = this.$iApi.$vApp.$store.get(
            ConfigStore.getActiveBasemapConfig
        )! as RampBasemapConfig;

        const schemaChanged: boolean =
            currentBasemp.tileSchemaId !== bm.tileSchemaId;

        if (schemaChanged) {
            // reproject the map
            this.refreshMap(bm);
        } else {
            // change the basemap
            this.applyBasemap(bm);
        }

        // fire the basemap change event
        this.$iApi.event.emit(GlobalEvents.MAP_BASEMAPCHANGE, {
            basemapId: basemapId,
            schemaChanged: schemaChanged
        });

        return schemaChanged;
    }

    /**
     * Adds a layer to the map
     * Optionally can specify the layer order index
     *
     * @param {LayerInstance} layer the Ramp layer to add
     * @param {number | undefined} index optional order index to add the layer to
     * @returns {Promise<void>} a promise that resolves when the layer has been added to the map
     */
    addLayer(
        layer: LayerInstance,
        index: number | undefined = undefined
    ): void {
        if (!this.esriMap) {
            this.noMapErr();
            return;
        }
        // await layer.isReadyForMap();
        if (layer.esriLayer) {
            this.esriMap.add(layer.esriLayer);
            this.$iApi.$vApp.$store.set(LayerStore.addLayers, [layer]);

            // if index is provided, reorder the layer to the given index
            // use the reorder method so that the esri map-stack and the layer store can stay in sync
            if (index !== undefined) {
                this.reorder(layer, index);
            }

            // layer has been added to the map, fire layer registered event
            this.$iApi.event.emit(GlobalEvents.LAYER_REGISTERED, layer);
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
     * @param {boolean} ignoreCosmetic indicates if cosmetic layers should be ignored during reordering
     */
    reorder(
        layer: LayerInstance,
        index: number,
        ignoreCosmetic: boolean = false
    ): void {
        if (!this.esriMap) {
            this.noMapErr();
            return;
        }
        if (layer.esriLayer) {
            if (ignoreCosmetic && layer.isCosmetic) {
                // trying to reorder a cosmetic layer when ignore cosmetic is true
                return;
            }

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
                    .filter(esrilayer => {
                        const l: LayerInstance | undefined = layers.find(
                            l => l.id === esrilayer.id
                        );
                        return !!l && !(ignoreCosmetic && l!.isCosmetic);
                    })
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
        this.$iApi.event.emit(GlobalEvents.MAP_REORDER, {
            layer,
            newIndex: index
        });
    }

    /**
     * Removes a sublayer from the map
     *
     * @param {LayerInstance | string} layer the Ramp sublayer or sublayer id/uid to remove
     * @returns {Promise<void>} a promise that resolves when the layer has been removed from the map
     */
    removeSublayer(sublayer: LayerInstance | string): void {
        let uid: string;
        let layer: LayerInstance;
        if (typeof sublayer === 'string') {
            uid = sublayer;
            layer = this.$iApi.geo.layer.getLayer(uid);
        } else {
            if (!sublayer.isSublayer) {
                throw new Error(
                    `Attempted to call removeSublayer on a non-sublayer object: ${sublayer}`
                );
            }
            uid = sublayer.uid;
            layer = sublayer;
        }
        this.$iApi.event.emit(GlobalEvents.LAYER_REMOVE, sublayer);
        layer.visibility = false; // make the sublayer invisible
        layer.isRemoved = true; // mark sublayer as removed

        // If this sublayer is the last removed layer, then remove the parent layer as well
        if (
            layer.parentLayer?.sublayers.every(
                (sub: LayerInstance) => sub.isRemoved
            )
        ) {
            // all sublayers have been marked for removal
            // delete the parent
            this.removeLayer(layer.parentLayer!);
        }
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

        // If layer is a sublayer, pass the call to removeSublayer
        if (layerInstance.isSublayer) {
            this.removeSublayer(layerInstance);
            return;
        }

        // Error checking
        if (!layerInstance) {
            throw new Error('Layer could not be found for removal.');
        }
        if (!layerInstance.esriLayer) {
            throw new Error(
                'Attempted to remove layer from the map without an esri layer. Likely layer.initiate() was not called or had not finished.'
            );
        }

        // Now we start the layer removal process
        // Clean up layer
        layerInstance.terminate();

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
     * Get a point in map co-ordinates corresponding to a pixel in screen co-ordinates.
     *
     * @param {ScreenPoint} screenPoint pixel screen co-ord of the point on the map
     * @returns {Point} the map point analagous to the screen point
     */
    screenPointToMapPoint(screenPoint: ScreenPoint): Point {
        if (this.esriView) {
            return Point.fromESRI(
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
            const esriPoint = this.esriView.toScreen(mapPoint.toESRI());
            return { screenX: esriPoint.x, screenY: esriPoint.y };
        } else {
            this.noMapErr();
            return { screenX: 1, screenY: 1 }; //  default fake value. avoids us having undefined checks everywhere.
        }
    }

    // pending https://github.com/ramp4-pcar4/ramp4-pcar4/issues/130
    // commenting out to avoid any undecided constants being exposed
    /*
    _identifyMode: IdentifyMode[] = [
        IdentifyMode.Query,
        IdentifyMode.Marker,
        IdentifyMode.Highlight,
        IdentifyMode.Haze,
        IdentifyMode.Details
    ];
    */

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
     * Performs an identify request on all layers that support identify, and combines the results.
     *
     * @param {MapClick | Point} targetPoint the place on the map to execute the identify
     * @memberof MapAPI
     * @returns MapIdentifyResult
     */

    runIdentify(targetPoint: MapClick | Point): MapIdentifyResult {
        let layers: LayerInstance[] | undefined = this.$vApp.$store.get(
            LayerStore.layers
        );

        let mapClick: MapClick;
        if (targetPoint instanceof Point) {
            // construct MapClick if only point is given
            const screenPoint = this.mapPointToScreenPoint(targetPoint);
            mapClick = {
                mapPoint: targetPoint,
                screenX: screenPoint.screenX,
                screenY: screenPoint.screenY,
                button: 0,
                clickTime: Date.now()
            };
        } else {
            mapClick = targetPoint;
        }

        // Don't perform an identify request if the layers array hasn't been established yet.
        if (layers === undefined) {
            return { click: mapClick, results: [] };
        }

        let p: IdentifyParameters = {
            geometry: mapClick.mapPoint
        };

        // Perform an identify request on each layer. Does not perform the request on layers that do not have an identify function (layers that do not support identify).
        const identifyInstances: IdentifyResultSet[] = layers
            // This will filter out all MapImageLayers that are not visible, regardless of the visibility of the MapImageFCs (sublayers)
            .filter(layer => layer.supportsIdentify)
            .map(layer => {
                p.tolerance = layer.clickTolerance;
                return layer.runIdentify(p);
            });

        // Merge all results received by the identify into one array.
        const identifyResults: IdentifyResult[] = (
            [] as IdentifyResult[]
        ).concat(...identifyInstances.map(({ results }) => results));

        const fullResult: MapIdentifyResult = {
            results: identifyResults,
            click: mapClick
        };

        this.$iApi.event.emit(GlobalEvents.MAP_IDENTIFY, fullResult);

        return fullResult;
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
            if (hitLayer.sublayers.length > 1) {
                console.warn('Found layer with sublayers during hitTest');
            }
            return {
                oid: esriGraphic.getObjectId(),
                layerId: esriGraphic.layer.id,
                layerIdx: hitLayer.getLayerTree().layerIdx
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
            this.runIdentify(this.getExtent().center());
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
