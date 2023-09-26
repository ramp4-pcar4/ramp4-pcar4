// wraps and represents a 2D esri map

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
    InitiationState,
    LayerIdentifyMode,
    LayerState,
    Point,
    ScaleSet
} from '@/geo/api';
import type {
    GraphicHitResult,
    IdentifyParameters,
    IdentifyResult,
    MapClick,
    MapIdentifyResult,
    RampBasemapConfig,
    RampExtentSetConfig,
    RampLodSetConfig,
    RampMapConfig,
    RampTileSchemaConfig,
    ScreenPoint,
    Screenshot
} from '@/geo/api';
import { EsriLOD, EsriMapView } from '@/geo/esri';
import { useLayerStore } from '@/stores/layer';
import { MapCaptionAPI } from './caption';
import { markRaw, toRaw } from 'vue';
import { useConfigStore } from '@/stores/config';
import { debounce, throttle } from 'throttle-debounce';
import { Colour } from '@/geo/api';

export class MapAPI extends CommonMapAPI {
    // API for managing the maptip
    maptip: MaptipAPI;

    // API for managing map caption
    caption: MapCaptionAPI;

    /**
     * The throttle level for map mouse move events
     * @private
     */
    private mapMouseThrottle: number;

    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);

        this.maptip = new MaptipAPI(iApi);
        this.caption = new MapCaptionAPI(iApi);
        this.mapMouseThrottle = 0; // default to 0 (no throttle)
    }

    /**
     * Will generate the actual Map control objects and construct it on the page
     * @param {RampMapConfig} config the config for the map
     * @param {string | HTMLDivElement} targetDiv the div to be used for the map view
     */
    createMap(config: RampMapConfig, targetDiv: string | HTMLDivElement): void {
        this.setMapMouseThrottle(config.mapMouseThrottle ?? 0);
        this.trackFirstBasemap = true; // we do this here (in this class) to prevent the overview map from tracking
        super.createMap(config, targetDiv);

        this.viewPromise.then(() => {
            // Timing issues beginning at ESRI v4.26 make us need to wait until the initial view gets created.
            // Note that we don't want to have this raised in the view creation method, since
            // the view can get rebuild during a MAP_REFRESH event, so would be disrespectful
            // to raise an incorrect MAP_CREATED
            this.$iApi.event.emit(GlobalEvents.MAP_CREATED);
        });
    }

    /**
     * Destroys the ESRI map. Typically called by internal system, use at your own risk.
     */
    public destroyMap(): void {
        if (!this.esriMap || !this.esriView) {
            this.noMapErr();
            return;
        }

        // remove all layers (need to use uid so we don't mutate layers collection when looping)
        this.$iApi.geo.layer
            .allLayersOnMap(false)
            .map(l => l.uid)
            .forEach(l => this.removeLayer(l));

        // now destroy the map
        super.destroyMap();
        this.$iApi.event.emit(GlobalEvents.MAP_DESTROYED);
    }

    /**
     * Will generate a ESRI map view and add it to the page
     * Can optionally provide the basemap or basemap id to be used when creating the map view
     *
     * @protected
     * @param {string | Basemap | undefined} basemap the id of the basemap that should be used when creating the map view
     */
    protected createMapView(basemap?: string | Basemap): void {
        // get the config from the store
        const configStore = useConfigStore(this.$vApp.$pinia);
        const config: RampMapConfig = configStore.config.map;
        if (!config) {
            throw new Error(
                'Attempted to create map view without a map config'
            );
        }

        const bm: Basemap =
            (typeof basemap === 'string'
                ? this.findBasemap(basemap)
                : basemap) || this.findBasemap(config.initialBasemapId);

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
                },
                background: { color: bm.backgroundColour }
            })
        );

        // Remove all ui components
        this.esriView.ui.components = [];

        this.handlers.push({
            type: 'extent',
            handler: this.esriView.watch('extent', (newval: __esri.Extent) => {
                // NOTE: yes, double events. rationale is a block of code dealing with filters will not
                //       want to have two event handlers (one on filter, one on extent change) and synch
                //       between them. They can subscribe to the filter event and get all the info they need.

                if (newval) {
                    const newExtent = <Extent>(
                        this.$iApi.geo.geom.geomEsriToRamp(
                            newval,
                            'map_extent_event'
                        )
                    );
                    this.$iApi.event.emit(
                        GlobalEvents.MAP_EXTENTCHANGE,
                        newExtent
                    );
                    this.$iApi.event.emit(GlobalEvents.FILTER_CHANGE, {
                        extent: newExtent,
                        filterKey: CoreFilter.EXTENT
                    });
                }
            })
        });

        this.handlers.push({
            type: 'scale',
            handler: this.esriView.watch('scale', (newval: number) => {
                this.$iApi.event.emit(GlobalEvents.MAP_SCALECHANGE, newval);
            })
        });

        this.handlers.push({
            type: 'resize',
            handler: this.esriView.on('resize', esriResize => {
                this.$iApi.event.emit(GlobalEvents.MAP_RESIZED, {
                    height: esriResize.height,
                    width: esriResize.width
                });
            })
        });

        this.handlers.push({
            type: 'click',
            handler: this.esriView.on('click', esriClick => {
                this.$iApi.event.emit(
                    GlobalEvents.MAP_CLICK,
                    this.$iApi.geo.geom.esriMapClickToRamp(
                        esriClick,
                        'map_click_point'
                    )
                );
            })
        });

        this.handlers.push({
            type: 'double-click',
            handler: this.esriView.on('double-click', esriClick => {
                this.$iApi.event.emit(
                    GlobalEvents.MAP_DOUBLECLICK,
                    this.$iApi.geo.geom.esriMapClickToRamp(
                        esriClick,
                        'map_doubleclick_point'
                    )
                );
            })
        });

        this.handlers.push({
            type: 'pointer-move',
            handler: this.esriView.on(
                'pointer-move',
                this.createMouseMoveHandler()
            )
        });

        this.handlers.push({
            type: 'pointer-move-start', // emulate mouse move start event using debounce
            handler: this.esriView.on(
                'pointer-move',
                debounce(100, true, esriMouseMove => {
                    this.$iApi.event.emit(
                        GlobalEvents.MAP_MOUSEMOVE_START,
                        this.$iApi.geo.geom.esriMapMouseToRamp(esriMouseMove)
                    );
                })
            )
        });

        this.handlers.push({
            type: 'pointer-move-end', // emulate mouse move end event using debounce
            handler: this.esriView.on(
                'pointer-move',
                debounce(100, esriMouseMove => {
                    this.$iApi.event.emit(
                        GlobalEvents.MAP_MOUSEMOVE_END,
                        this.$iApi.geo.geom.esriMapMouseToRamp(esriMouseMove)
                    );
                })
            )
        });

        this.handlers.push({
            type: 'pointer-leave',
            handler: this.esriView.on('pointer-leave', esriMouseLeave => {
                // guarantee that no mouse move start/end event fires after the mouse leave event
                setTimeout(() => {
                    this.$iApi.event.emit(
                        GlobalEvents.MAP_MOUSELEAVE,
                        esriMouseLeave.native
                    );
                }, Math.max(this.mapMouseThrottle, 100) + 1);
            })
        });

        this.handlers.push({
            type: 'pointer-down',
            handler: this.esriView.on('pointer-down', esriMouseDown => {
                // .native is a DOM pointer event
                this.$iApi.event.emit(
                    GlobalEvents.MAP_MOUSEDOWN,
                    esriMouseDown.native
                );
            })
        });

        this.handlers.push({
            type: 'key-down',
            handler: this.esriView.on('key-down', esriKeyDown => {
                // .native is a DOM keyboard event
                this.$iApi.event.emit(
                    GlobalEvents.MAP_KEYDOWN,
                    esriKeyDown.native
                );
                esriKeyDown.stopPropagation();
            })
        });

        this.handlers.push({
            type: 'key-up',
            handler: this.esriView.on('key-up', esriKeyUp => {
                // .native is a DOM keyboard event
                this.$iApi.event.emit(GlobalEvents.MAP_KEYUP, esriKeyUp.native);
                esriKeyUp.stopPropagation();
            })
        });

        this.handlers.push({
            type: 'focus',
            handler: this.esriView.on('focus', esriFocus => {
                // .native is a DOM keyboard event
                this.$iApi.event.emit(GlobalEvents.MAP_FOCUS, esriFocus.native);
            })
        });

        this.handlers.push({
            type: 'blur',
            handler: this.esriView.on('blur', esriBlur => {
                // .native is a DOM keyboard event
                this.$iApi.event.emit(GlobalEvents.MAP_BLUR, esriBlur.native);
            })
        });

        this.esriView.container.addEventListener('touchmove', e => {
            // need this for panning and zooming to work on mobile devices / touchscreens
            // touchmove stops the drag event (what the MapView reacts to) from firing properly
            e.preventDefault();
        });

        // most browsers have a webgl context limit of 16 (one instance of RAMP can use 2 - map and overview map).
        // once the number of contexts is higher than the limit, the oldest context will be lost.
        // when instance is visible on screen, if its map context is lost then recover it.
        this.esriView.watch('fatalError', () => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.esriView?.tryFatalErrorRecovery();
                        observer.disconnect();
                    }
                });
            });
            observer.observe(this.esriView!.container);
        });

        // as of ESRI v4.26, we need to marinate until .when() is done.
        // otherwise, something happens too fast and the initial calls to view.goTo() grouse quite a lot.
        this.esriView.when(() => {
            this._viewPromise.resolveMe();
            this.created = true;

            // it appears calling this before the when() check causes the esriView promise to block,
            // which then blocks our layer loading even though the map is capable of handling the layers.
            // so set the basemap after we unblock the ramp view promise.
            this.applyBasemap(bm);

            // if we have a fallback basemap, set up a failure timeout if desired.
            if (tileSchemaConfig.recoveryBasemap?.basemapId) {
                // 8 second default. 0 is no waiting.
                const waitTime =
                    tileSchemaConfig.recoveryBasemap.timeout ?? 8000;
                if (waitTime > 0) {
                    setTimeout(() => {
                        // check if we're still waiting for a first basemap. Otherwise do nothing.
                        if (this.trackFirstBasemap) {
                            this.recoverBasemap(tileSchemaConfig.id);
                        }
                    }, waitTime);
                }
            }
        });
    }

    /**
     * Destroys the ESRI map view
     *
     * @protected
     */
    protected destroyMapView(): void {
        // override the method to remove this listener
        this.esriView?.container.removeEventListener('touchmove', e => {
            e.preventDefault();
        });
        super.destroyMapView();
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
        const configStore = useConfigStore(this.$vApp.$pinia);
        configStore.activeBasemapConfig = bm.config;
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
        if (!this.esriView || !this.esriMap) {
            this.noMapErr();
            return false;
        }

        const configStore = useConfigStore(this.$vApp.$pinia);
        const bm: Basemap = this.findBasemap(basemapId);
        const currentBasemp: RampBasemapConfig =
            configStore.activeBasemapConfig as RampBasemapConfig;

        const schemaChanged: boolean =
            currentBasemp.tileSchemaId !== bm.tileSchemaId;

        if (schemaChanged) {
            // destroy the map view
            // reset the view promise and created flag before firing the event

            // store extent prior to reprojection
            const center = this.getExtent().center();
            const scale = this.getScale();

            this._viewPromise = new DefPromise();
            this.created = false;
            this.$iApi.event.emit(GlobalEvents.MAP_REFRESH_START);
            this.destroyMapView();

            // recreate the map view
            this.createMapView(bm);

            this.viewPromise.then(() => {
                this.$iApi.event.emit(GlobalEvents.MAP_REFRESH_END);

                const newScale = this.findClosestScale(scale);

                // go to equivalent extent in new projection
                this.$iApi.geo.proj
                    .projectGeometry(this._rampSR!, center)
                    .then(projPoint =>
                        this.zoomMapTo(projPoint, newScale, false)
                    );
            });
        } else {
            // change the basemap
            this.applyBasemap(bm);
            this.esriView.set(
                'background.color',
                new Colour(bm.backgroundColour).toESRI()
            );
        }

        // fire the basemap change event
        this.$iApi.event.emit(GlobalEvents.MAP_BASEMAPCHANGE, {
            basemapId: basemapId,
            schemaChanged: schemaChanged
        });

        return schemaChanged;
    }

    /**
     * Will attempt to change to another basemap if the very first basemap failed.
     * If nothing is defined, will do nothing but manage our watching state.
     *
     * @param {string} basemapSchemaId the basemap schema id (where the fallback is defined)
     */
    recoverBasemap(basemapSchemaId: string): void {
        // no hard errors in the method. Just because layer is failing doesn't mean
        // we need to brick the app. Failed layer > brick party.

        if (!this.esriMap) {
            this.noMapErr();
        }

        // turn off trackers regardless of what our config is.
        // if fallback fails we don't have cascade; just no basemap and buckets of tears.
        this.trackFirstBasemap = false;

        // see if we have a fallback
        const configStore = useConfigStore(this.$vApp.$pinia);
        const config: RampMapConfig = configStore.config.map;
        if (config) {
            // get the current tile schema we are in
            const tileSchemaConfig = config.tileSchemas.find(
                ts => ts.id === basemapSchemaId
            );

            if (tileSchemaConfig?.recoveryBasemap?.basemapId) {
                // there's a fallback, apply it.
                const fallbackBM = this.findBasemap(
                    tileSchemaConfig.recoveryBasemap.basemapId
                );
                this.applyBasemap(fallbackBM);
            }
        }
    }

    /**
     * Adds a layer to the map. The layer is considered "registered" with RAMP until it is removed.
     * Optionally can specify the layer order index for map layers.
     *
     * @param {LayerInstance} layer the Ramp layer to add
     * @param {number | undefined} index optional order index to add the layer to
     * @returns {Promise<void>} a promise that resolves when the layer has been added to the map
     */
    addLayer(
        layer: LayerInstance,
        index: number | undefined = undefined
    ): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.esriMap) {
                this.noMapErr();
                reject();
            }
            if (
                layer.initiationState !== InitiationState.INITIATING &&
                layer.initiationState !== InitiationState.INITIATED &&
                layer.layerState !== LayerState.ERROR
            ) {
                // could also await for this but its technically not necessary thanks to the watcher.
                layer.initiate();
            }

            // figure out insertion position if not provided. We do this before inserting in the store;
            // afterwards any re-orders and such that happen before the layerWatcher awakes is handled by
            // the store, and we avoid a race.
            if (layer.mapLayer && index === undefined) {
                const currentMapOrder = this.$iApi.geo.layer.layerOrderIds();
                if (layer.isCosmetic) {
                    // to the top
                    index = currentMapOrder.length;
                } else {
                    // insert beneath the top-most swath of cosmetic layers
                    const layerParty = this.$iApi.geo.layer.allLayers();
                    let searching = true;

                    for (
                        let i = currentMapOrder.length - 1;
                        i >= 0 && searching;
                        i--
                    ) {
                        // go backwards down the layer order. Find each layer, test the type
                        const lTest = layerParty.find(
                            l => l.id === currentMapOrder[i]
                        );
                        if (lTest && !lTest.isCosmetic) {
                            // found topmost non-cosmetic. insert our incoming layer 1 above
                            index = i + 1;
                            searching = false;
                        }
                    }

                    if (searching) {
                        // no friends were found in the for loop.
                        // can conclude this layer is first non-cosmetic layer. To the bottom with you!
                        index = 0;
                    }
                }
            }

            // register with the store.
            const layerStore = useLayerStore(this.$vApp.$pinia);
            layerStore.addLayer(layer, index);

            let timeElapsed = 0;
            // This interval waits for layer initiation, and has a kickout for layers that initiate forever.
            // After it initiates the callback will start the next step in the loading pipeline.
            // Alternative to this: use event API and watch for layer initiated and layer error events??
            const layerWatcher = setInterval(() => {
                timeElapsed += 250;
                if (
                    timeElapsed >= 20000 ||
                    layer.layerState === LayerState.ERROR
                ) {
                    // Layer took too long to initiate. Move to error to avoid infinite load animation.
                    // Issue #1491 Ponders making the 20 second timeout configurable.
                    clearInterval(layerWatcher);
                    layer.onError(); // need this thanks to an edge case where the legend sometimes doesnt update
                    console.error(`Failed to add layer: ${layer.id}.`);
                    reject();
                } else if (
                    layer.initiationState === InitiationState.INITIATED &&
                    (layer.esriLayer || !layer.mapLayer)
                ) {
                    // we have initiated, and confirm either the map layer exists or layer doesn't live on the map.
                    // carry on with resolution steps.
                    clearInterval(layerWatcher);
                    if (layer.mapLayer) {
                        // ramp layer is map ready, add it at the correct position
                        this.insertToEsriMap(layer);
                    } else {
                        // data layer
                        // there is no esri layer "load" first, so we trigger
                        // the data layer load now.
                        layer.onLoad();
                    }

                    // layer has been added to the map, fire layer registered event
                    this.$iApi.event.emit(GlobalEvents.LAYER_REGISTERED, layer);
                    resolve();
                }
            }, 250);
        });
    }

    /**
     * Utility method to insert a Map Layer into the ESRI map. The position in ESRI map
     * is derived from global order and what layers are currently in the map.
     *
     * @param {LayerInstance} layer the RAMP layer to insert. Must be a Map layer
     */
    insertToEsriMap(layer: LayerInstance): void {
        // need to re-grab global position from store. This utility is usually called after some
        // Promise sleeps, so order may have changed in that time.

        let esriNewIndex = 0;

        const globalInsertIndex =
            this.$iApi.geo.layer.getLayerPosition(layer.id) ?? -1;

        // if global is 0, it will be at bottom of esri map. no need to run the position hunter.
        if (globalInsertIndex > 0) {
            // find appropriate position in esri map stack to insert at. Some layers in global order
            // may not be in the map yet.
            // we do this by walking backwards down the global order, from layer's index-1 to 0
            // then attempt to find each "lower" layer in the esri stack. The first one we find
            // should be directly below where we insert the layer in esri-map-land

            // global positions may have changed since this layer started loading. Get up-to-date
            const globalPositions = this.$iApi.geo.layer.layerOrderIds();

            // load the layers array to do searches on, instead of using getLayer() on each id.
            // getLayer() will do BFS into children, and thus slower (children have same "order" as parent)
            const allLayers = this.$iApi.geo.layer.allLayers();

            for (let i = globalInsertIndex - 1; i > -1; i--) {
                const testLayerId = globalPositions[i];
                const matchLayer = allLayers.find(fl => fl.id === testLayerId);
                if (matchLayer && matchLayer.esriLayer) {
                    // this layer exists in esri form.
                    const testEsriIndex = this.esriMap!.layers.indexOf(
                        matchLayer.esriLayer
                    );
                    if (testEsriIndex > -1) {
                        // it also exists in the map stack. can conclude it is the layer in the
                        // esri map stack that is immediately below where we want to insert our
                        // added layer. Our result is + 1, donethanks.

                        esriNewIndex = testEsriIndex + 1;
                        break; // stop the hunt
                    }
                } else if (!matchLayer) {
                    // this should never happen. report and skip this layer test.
                    console.error(
                        'ESRI Layer insert encountered bad state. Layer likely inserted at bottom of map.'
                    );
                }
            }
        }

        // this check is incase the layer no longer existed in the store after it finished loading.
        // maybe possible if someone did a fast delete and a promise was still running.
        if (globalInsertIndex > -1) {
            this.esriMap?.add(layer.esriLayer!, esriNewIndex);
        }
    }

    /**
     * Reorders a layer on the map. The position is based on the instance layer order state
     * maintained by the LayerAPI.
     * If ignoreCosmetic is set, the index changes to a different basis. Essentially the
     * as if cosmetic layers did not exists in the layer order state.
     *
     * @param {LayerInstance} layer the RAMP layer to be moved. If a sublayer is passed, the parent will be reordered.
     * @param {number} index the RAMP layer index where the layer will be moved to
     * @param {boolean} ignoreCosmetic indicates if the index should ignore cosmetic layers
     */
    reorder(
        layer: LayerInstance,
        index: number,
        ignoreCosmetic: boolean = false
    ): void {
        if (index < 0) {
            // alternative: can set to 0 and continue
            console.error('Negative index passed to map reorder');
            return;
        }
        if (!this.esriMap) {
            this.noMapErr();
            return;
        }

        if (layer.isSublayer) {
            layer = layer.parentLayer!;
        }

        if (!layer.mapLayer) {
            console.error('Attempted to reorder a data layer');
            return;
        }

        // load the layers array to do searches on, instead of using getLayer() on each id.
        // getLayer() will do BFS into children, and thus slower (can't reorder children)
        const allLayers = this.$iApi.geo.layer.allLayers();
        let globalPositions = this.$iApi.geo.layer.layerOrderIds();

        if (ignoreCosmetic) {
            if (layer.isCosmetic) {
                // trying to reorder a cosmetic layer when ignore cosmetic is true
                return;
            } else if (index > 0) {
                // if 0, bottom is bottom. only grind if non-zero;
                // derive actual layer position in map stack. i.e. reverse collapsed index

                const squashedLayers = globalPositions.filter(testId => {
                    const matchLayer = allLayers.find(fl => fl.id === testId);
                    if (matchLayer) {
                        return !matchLayer.isCosmetic;
                    } else {
                        // this should never happen.
                        console.error('Layer reorder had critical error');
                        return false;
                    }
                });

                // find the non-cosmetic layer at our "ignoreCosmetic" index
                if (index >= squashedLayers.length) {
                    // report problem but just set to "top".
                    console.error('non-cosmetic reorder index was too high');
                    index = squashedLayers.length - 1;
                }

                // map to where that layer is in the actual order index.
                // squashedLayers[index] is the layerid of the non-cosmetic layer currently sitting at
                // our fake "non-cosmetic" index.  Then find that id's index in the real order.
                index = globalPositions.indexOf(squashedLayers[index]);

                // at this point, index is no longer in "non-cosmetic" units.
            }
        } else if (index >= globalPositions.length) {
            // report problem but just set to "top".
            console.error('reorder index was too high');
            index = globalPositions.length - 1;
        }

        // need to derive if the layer is going up or down the stack. Find old position before changing the store.
        const oldIndex = globalPositions.indexOf(layer.id);

        if (oldIndex === index) {
            // position didn't change
            return;
        }

        const layerStore = useLayerStore(this.$vApp.$pinia);
        // sync layer store order with map order
        layerStore.reorderLayer(layer, index);

        if (
            layer.esriLayer &&
            this.esriMap.layers.indexOf(layer.esriLayer) > -1
        ) {
            // the global order is up to date. But the layer is also in the esri map.
            // need to reorder that as well, taking into account that layers "lower"
            // on the map may not have loaded yet.

            let esriNewIndex = 0;

            if (index > 0) {
                // find appropriate position in esri map stack to move to. some layers in global order
                // may not be in the map yet.
                // we do this by walking backwards down the global order, from index-1 to 0
                // then attempt to find each "lower" layer in the esri stack. The first one we find
                // should be directly below our reordered layer after we reorder the esri map

                // our store has been re-ordered, get again
                globalPositions = this.$iApi.geo.layer.layerOrderIds();

                for (let i = index - 1; i > -1; i--) {
                    const testId = globalPositions[i];
                    const matchLayer = allLayers.find(fl => fl.id === testId);
                    if (matchLayer && matchLayer.esriLayer) {
                        // this layer exists in esri form.
                        const testEsriIndex = this.esriMap.layers.indexOf(
                            matchLayer.esriLayer
                        );
                        if (testEsriIndex > -1) {
                            // it also exists in the map stack. can conclude it is the layer in the
                            // esri map stack that is immediately below our reordered layer.
                            //
                            // the esri insertion index in relation to the test layer depends
                            // if we were moving down or up the stack
                            const upDownOffset = index < oldIndex ? 1 : 0;
                            esriNewIndex = testEsriIndex + upDownOffset;
                            break; // stop the hunt
                        }
                    } else if (!matchLayer) {
                        // this should never happen. report and skip this layer test.
                        console.error('Layer reorder had critical error');
                    }
                }
            }

            // move our target esri layer to the desired position in the esri map stack
            this.esriMap.reorder(layer.esriLayer, esriNewIndex);
        }

        // spread the good word
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
        let layer: LayerInstance | undefined;
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

        // Error checking
        if (!layer) {
            throw new Error('Sublayer could not be found for removal.');
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
     * Removes a layer from the map and fires the layer remove event.
     * This will also unregister the layer from the Ramp instance.
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
            throw new Error('Layer could not be found for removal.');
        }

        // If layer is a sublayer, pass the call to removeSublayer
        if (layerInstance.isSublayer) {
            this.removeSublayer(layerInstance);
            return;
        }

        if (layerInstance.mapLayer && !layerInstance.esriLayer) {
            throw new Error(
                'Attempted to remove layer from the map without an esri layer. Likely layer.initiate() was not called or had not finished.'
            );
        }

        // if layer is parent layer, then remove all its sublayers first if there is at least one active sublayer
        if (
            layerInstance.supportsSublayers &&
            layerInstance.sublayers.some(sl => !sl.isRemoved)
        ) {
            layerInstance.sublayers.forEach(sl => this.removeSublayer(sl));
        }

        // Now we start the layer removal process
        // Clean up layer
        layerInstance.terminate();

        const layerStore = useLayerStore(this.$vApp.$pinia);
        layerStore.removeLayer(layerInstance);

        // Clean up the layer config store
        layerStore.removeLayerConfig(layerInstance.id);

        // Remove the layer from the map
        if (layerInstance.mapLayer) {
            this.esriMap.remove(layerInstance.esriLayer!);
        }

        layerInstance.isRemoved = true;

        // Fire the layer removal event
        this.$iApi.event.emit(GlobalEvents.LAYER_REMOVE, layerInstance);
    }

    /**
     * Set's the map's mapMouseThrottle value to newThrottle.
     * If newThrottle is not a positive number, a console error is thrown.
     *
     * The returned boolean indicates if the value has been successfully set.
     *
     * @param {number} newThrottle the new mapMouseThrottle value, which must be a positive number
     * @returns {boolean} indicates if the value was set successfully
     */
    setMapMouseThrottle(newThrottle: number): boolean {
        if (newThrottle < 0) {
            console.error(
                'Cannot set map mouse throttle to value that is less than 0.'
            );
            return false;
        }
        this.mapMouseThrottle = newThrottle;

        // remove the current ESRI map mouse move handler
        const currIdx = this.handlers.findIndex(h => h.type === 'pointer-move');
        if (currIdx !== -1) {
            const currHandler = this.handlers[currIdx];
            this.handlers.splice(currIdx, 1);
            currHandler.handler.remove();
        }

        // create a new handler (only if it was added before)
        if (currIdx !== -1 && this.esriView) {
            this.handlers.push({
                type: 'pointer-move',
                handler: this.esriView.on(
                    'pointer-move',
                    this.createMouseMoveHandler()
                )
            });
        }

        return true;
    }

    /**
     * Creates a throttled map mouse move handler.
     * Uses mapMouseThrottle for the throttle delay
     *
     * @returns the throttled handler function
     */
    private createMouseMoveHandler(): any {
        if (!this.esriView) {
            this.noMapErr();
            return;
        }
        return throttle(this.mapMouseThrottle, (esriMouseMove: any) => {
            this.$iApi.event.emit(
                GlobalEvents.MAP_MOUSEMOVE,
                this.$iApi.geo.geom.esriMapMouseToRamp(esriMouseMove)
            );
        });
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
     * Finds the tile scale (level of detail) closest to the provided scale.
     * If using a map with no scale levels, will return the given scale.
     *
     * @function findClosestScale
     * @param  {Number} scale   scale value to search for in the levels of detail
     * @return {Number}         the level of detail scale closest to the input
     */
    findClosestScale(scale: number): number {
        const lods = this.esriView?.constraints.lods;

        if (!lods) {
            return scale;
        }
        // array of "distance" between LODs and given scale
        const diffs = lods.map(lod => Math.abs(lod.scale - scale));

        // find closest LOD, return scale
        const lodIdx = diffs.indexOf(Math.min(...diffs));
        return lods[lodIdx].scale;
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
        const layers = this.$iApi.geo.layer
            .allLayersOnMap(false)
            .filter(l => l.canIdentify());

        let mapClick: MapClick;
        if (targetPoint instanceof Point) {
            // construct MapClick if only point is given
            const screenPoint = this.mapPointToScreenPoint(targetPoint);
            mapClick = {
                mapPoint: targetPoint,
                screenX: screenPoint.screenX,
                screenY: screenPoint.screenY,
                button: 0,
                input: 'mouse',
                clickTime: Date.now()
            };
        } else {
            mapClick = targetPoint;
        }

        // Don't perform an identify request if the layers array hasn't been established yet.
        if (layers === undefined) {
            return { click: mapClick, results: [] };
        }

        // if any layers want symbolic identify, initiate the hit test now.
        // the promise will resolve in an array of any hits, providing layerid and objectid of hits
        let hitTestProm: Promise<Array<GraphicHitResult>> = Promise.resolve([]);
        if (
            layers.some(l => {
                return (
                    l.identifyMode === LayerIdentifyMode.HYBRID ||
                    l.identifyMode === LayerIdentifyMode.SYMBOLIC
                );
            })
        ) {
            hitTestProm = this.esriView!.hitTest({
                x: mapClick.screenX,
                y: mapClick.screenY
            }).then(hitResults => {
                return hitResults.results.map(hr => {
                    return {
                        layerId: hr.layer.id,
                        layerIdx: 0, // not required for this process, default rather than expensive lookup
                        oid: (hr as __esri.GraphicHit).graphic.getObjectId()
                    };
                });
            });
        }

        const p: IdentifyParameters = {
            geometry: mapClick.mapPoint,
            hitTest: hitTestProm
        };

        // Perform an identify request on each layer. Does not perform the request on layers that do not have an identify function (layers that do not support identify).
        const identifyResults = layers
            .filter(layer => layer.supportsIdentify)
            .map(layer => {
                // set identify tolerance based on input source
                p.tolerance =
                    mapClick.input == 'touch'
                        ? layer.touchTolerance
                        : layer.mouseTolerance;
                return layer.runIdentify(p);
            })
            .flat();

        // update each item with current timestamp
        const timestamp = Date.now();
        identifyResults.forEach((item: IdentifyResult) => {
            item.requestTime = timestamp;
        });

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

        // Get a copy of all layers from the layer store (this will be in reverse order)
        const layers = this.$iApi.geo.layer.allLayersOnMap(true);

        // Don't perform a hittest request if the layers array hasn't been established yet.
        if (layers === undefined) {
            return;
        }

        // reverse to respect layer order
        layers.reverse();

        const hitTest = await this.esriView.hitTest({
            x: screenPoint.screenX,
            y: screenPoint.screenY
        });
        const hitResults = hitTest.results as Array<__esri.GraphicHit>;

        if (hitTest.results.length === 0) return;

        let hitLayer: LayerInstance | undefined;

        // find the top-most layer that has a hit
        // graphics are un-ordered
        layers.some(layer => {
            const matchedResult: any = hitResults.find(result => {
                return result.graphic.layer.id === layer.id;
            });
            if (matchedResult) {
                if (layer.isCosmetic || !layer.supportsFeatures) {
                    // means topmost thing was in a cosmetic layer, or the layer doesn't support features.
                    // we currently can't do a hovertip on these.
                    // Acually it's graphic layers that are the problem, but
                    // cosmetics shouldnt be interactive anyways. if someone decides
                    // to use a graphic layer as non-cosmetic we will need more code
                    // here. Reason is graphic layers have no feature schema, so there
                    // is no order-by / draw order, so we can't figure out which is
                    // top-most. More ideas in the big comment block below for work-arounds.
                    // Returning true without setting hitLayer exits the loop and acts like
                    // nothing was hit.
                    return true;
                }
                hitLayer = layer;
                // esriGraphic = matchedResult.graphic;
            }

            // stops the .some() loop when we get a hit
            return matchedResult !== undefined;
        });
        if (hitLayer) {
            if (hitLayer.sublayers.length > 1) {
                console.warn('Found layer with sublayers during hitTest');
            }

            // TODO what to do if topmost is a graphic layer?
            //      no schema so no orderBy. Also no "object id"
            //
            //      return first for now, acknowledge limitation until esri fixes their return value?
            //      this would require changing function return value to have RampGraphic instead of oid.
            //      alternate is use graphic "id", but that is a string.
            //
            //      additional boolean on parameter indicating if graphic/feature, then handle appropriately?
            //      could also turn off / return nothing, but eventually we may want to support hover on
            //      graphics layer; ramp2 did, though it was easier, no hitTest nonsense.
            //
            //      For something like the feature highlighter, we want the graphic to have the tooltip.
            //      We don't support tips on Ramp Graphics yet. We could remove any graphic layers from this
            //      algo, but then we don't know the highlighted thing is also the topmost in normal layer so
            //      could be more confusing since tip name won't match.

            if (hitLayer.drawOrder.length === 0) {
                console.warn('Found layer with no draw order during hitTest');
                // TODO return first item here?
            }
            // find all hit results that exists for this layer
            let hits = hitResults.filter(
                hit => hit.graphic.layer.id === hitLayer!.id
            );

            // comparitor that works of string and number
            // both inputs should be same type
            // returns 0 (equal), 1 (val1 bigger), -1 (val1 smaller)
            const genericComparitor = (val1: any, val2: any): number => {
                if (val1 === val2) {
                    return 0;
                } else {
                    return val1 > val2 ? 1 : -1;
                }
            };

            // leverage drawing order to determine top-most item.
            // TODO esri has hinted they will be improving hitTest to order it's results by drawing order.
            //      as of now (v4.24) it does not. If that gets implemented, would suggest removing this
            //      routine and just use array order, as it should be accurate and more efficient.
            // NOTE also as of now (v4.24), esri only supports ordering by one field. this routine
            //      will support many so that it will work if esri api starts supporting many fields
            let topBucket: Array<__esri.GraphicHit> = []; // list of current top contenders
            let topValue: any; // current "highest/lowest value found" of order field for a given loop

            hitLayer.drawOrder.some((dr, i) => {
                // algo here
                // return true/false to exit or conitnue the .some

                // initialize top trackers to the first item. current winner by default;
                topBucket = [hits.pop()!];
                topValue = topBucket[0].graphic.attributes[dr.field];

                // inspect the rest of the hits, bubbling winners into top trackers
                hits.forEach(h => {
                    const hitVal = h.graphic.attributes[dr.field];
                    const diff = genericComparitor(topValue, hitVal);
                    if (diff === 0) {
                        // on par with our current top. add to set of top values
                        topBucket.push(h);
                    } else if (
                        (dr.ascending && diff > 0) ||
                        (!dr.ascending && diff < 0)
                    ) {
                        // this hit is better than our current top. all hail the new top.
                        // remeber, ascending means smaller values are on top (this is ESRI's convention/language)
                        topBucket = [h];
                        topValue = hitVal;
                    }
                });

                if (
                    topBucket.length === 1 ||
                    i === hitLayer!.drawOrder.length - 1
                ) {
                    // we have found the best, or  can no longer differentiate. exit
                    return true;
                }

                // prepare hits array for next draw order critera. Only consider the ones currently at the top
                hits = topBucket;
                return false; // continues the .some loop
            });

            if (topBucket.length === 0) {
                console.error(
                    'Hit test failed to find topmost item using draw order'
                );
                return; // act like nothing was hit. ideally this never happens
            }

            // at this point we should have a winner in the top bucket.
            // If there are more than one, it means we could not differentiate, so pick the first.
            const topGraphic = topBucket[0].graphic;

            // TODO consider changing this object. oid + uid? oid + layerinstance? RampGraphic + layerInstance?
            //      oid + uid is cleanest; only risk is layer has been removed from registry, but then it shouldnt be on the map anyway
            return {
                oid: topGraphic.getObjectId(),
                layerId: hitLayer.id,
                layerIdx: hitLayer.getLayerTree().layerIdx
            };
        }
    }

    // -------
    // Key Handler Fun
    // -------

    // list of keys that are currently pressed
    private _activeKeys: string[] = [];

    // ID of pan interval
    private _panInterval: any;

    // true if map is focused using mouse click
    private _mouseFocus: boolean = false;

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
        } else if (payload.key === 'Tab') {
            // used to distinguish keyboard/mouse focus
            this._activeKeys.push(payload.key);
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
     * Sets the map focus source from the mouse
     *
     * @memberof MapAPI
     */
    setMouseFocus() {
        this._mouseFocus = true;
    }

    /**
     * Stops panning and deactivates all keys
     *
     * @memberof MapAPI
     */
    stopKeyPan() {
        // prevents crosshairs appearing when reentering tab/window when mouse focused
        if (this._activeKeys.includes('Tab')) {
            this._mouseFocus = false;
        }
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
     * Returns if map focus is caused by mouse click
     *
     * @memberof MapAPI
     * @returns {boolean}
     */
    get mouseFocus(): boolean {
        return this._mouseFocus;
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
