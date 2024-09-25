/* eslint-disable @typescript-eslint/no-unused-vars */

import { CommonLayer, GlobalEvents, InstanceAPI } from '@/api/internal';
import { DefPromise, DrawState, Extent, InitiationState, LayerState, ScaleSet, SpatialReference } from '@/geo/api';

import type { DrawOrder, RampLayerConfig } from '@/geo/api';

/**
 * A common layer class which is inherited by layer classes that implement map-based layers.
 */
export class MapLayer extends CommonLayer {
    // common layer properties

    _serverVisibility: boolean | undefined;
    _scaleSet: ScaleSet;
    _mouseTolerance: number;
    _touchTolerance: number;
    _drawOrder: Array<DrawOrder>;
    // used to manage debouncing when applying filter updates against a layer. Private! but needs to be seen by FCs.
    _lastFilterUpdate = '';

    protected viewDefProm: DefPromise; // a deferred promise that resolves when a layer view has been created on the map. helps bridge the view handler with the layer load handler

    esriWatches: Array<__esri.WatchHandle>;

    // ----------- LAYER CONSTRUCTION AND INITIALIZAION -----------

    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);

        // initialize common layer properties

        this._scaleSet = new ScaleSet();

        this._mouseTolerance = rampConfig.mouseTolerance != undefined ? rampConfig.mouseTolerance : 5; // use default value of 5 if mouse tolerance is undefined
        this._touchTolerance = rampConfig.touchTolerance != undefined ? rampConfig.touchTolerance : 15; // use default value of 15 if touch tolerance is undefined

        this._drawOrder = [];

        this._serverVisibility = undefined;

        this.isCosmetic = rampConfig.cosmetic || false;
        this.extent = rampConfig.extent ? Extent.fromConfig(`${this.id}_extent`, rampConfig.extent) : undefined;

        this.viewDefProm = new DefPromise();

        this.esriWatches = [];
    }

    protected noLayerErr(): void {
        console.error(
            'Attempted to manipulate the layer but no layer found. Likely .initiate() was not finished or failed. Layer id ' +
                this.id
        );
        console.trace();
    }

    protected notLoadedErr(): void {
        console.error('Attempted to manipulate the layer before it was loaded. Layer id ' + this.id);
        console.trace();
    }

    protected async onInitiate(): Promise<void> {
        // NOTE MapLayer is a superclass and this method should be called via super.initiate()
        //      in subclass.onInitiate() at the appropriate time. A general rule is that at
        //      minimum the subclass should instantiate the Esri layer object and assign it
        //      to .esriLayer before calling this.

        // loading stuff
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#loadStatus
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#loaded

        // NOTE current limitation: the event setup here only support one layer view. Any attempt to make
        //      RAMP have two map views rendering the same Layer will require some major refactoring.

        // all this super call does is some safety checks.
        await super.onInitiate();

        if (!this.esriLayer) {
            this.noLayerErr();
            return;
        }

        this.esriWatches.push(
            this.esriLayer.watch('visible', (newval: boolean) => {
                // TODO re-evaluate the event parameter. This is common routine. Need to think about how sublayer would factor in to this.
                //      might need a secondary sublayer event, triggered on the sublayer? Sublayer visibility can change without affecting
                //      overall layer. TRICKY.
                this.$iApi.event.emit(GlobalEvents.LAYER_VISIBILITYCHANGE, {
                    visibility: newval,
                    layer: this
                });
            })
        );

        this.esriWatches.push(
            this.esriLayer.watch('opacity', (newval: number) => {
                // TODO re-evaluate the event parameter. This is common routine. Need to think about how sublayer would factor in to this.
                //      might need a secondary sublayer event, triggered on the sublayer? Sublayer opacity can change without affecting
                //      overall layer opacity. TRICKY.
                this.$iApi.event.emit(GlobalEvents.LAYER_OPACITYCHANGE, {
                    opacity: newval,
                    layer: this
                });
            })
        );

        this.esriWatches.push(
            this.esriLayer.watch('loadStatus', (newval: string) => {
                const statemap: any = {
                    'not-loaded': LayerState.LOADING,
                    loading: LayerState.LOADING,
                    loaded: LayerState.LOADED,
                    failed: LayerState.ERROR
                };

                if (newval === 'loaded') {
                    // loaded is a special case. this layer may need to do
                    // additional asynch work to fully set things up, so we
                    // trigger that process now. it will fire the RAMP event
                    // when it's done done.
                    // Re: load cancel. If we cancelled earlier the esri layer shouldn't hit this state.
                    //     If we cancelled later, the onLoad stuff will deal with it.
                    this.onLoad();
                } else if (newval === 'failed') {
                    this.onError();
                } else {
                    this.updateLayerState(statemap[newval]);
                }
            })
        );

        this.esriLayer.on('layerview-create', (e: __esri.LayerLayerviewCreateEvent) => {
            this.esriView = e.layerView;
            this.esriWatches.push(
                e.layerView.watch('updating', (newval: boolean) => {
                    this.updateDrawState(newval ? DrawState.REFRESH : DrawState.UP_TO_DATE);
                })
            );
            this.viewDefProm.resolveMe();
        });

        // initiate sublayers last (top down intiation)
        this.sublayers.forEach(s => s.initiate());
    }

    async terminate(): Promise<void> {
        this.esriLayer = undefined;

        await super.terminate();

        this.viewDefProm = new DefPromise();

        this.esriWatches.forEach(w => w.remove());
        this.esriWatches = [];
    }

    async reload(): Promise<void> {
        if (!this.$iApi.geo.map.esriMap) {
            console.error('Attempted layer reload when no map exists');
            return;
        }

        // must be called before terminate()
        this.removeEsriLayer();

        // If we ever consider restoring layer state to look the same as it was prior to re-loading,
        // could do that here. Alternative is to not, and let whomever is calling this save state before
        // and restore state after. Might be more flexible.

        const startTime = Date.now();

        this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_START, this);
        this.sublayers.forEach(sublayer => this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_START, sublayer));

        // need to terminate even if initiation failed. Termination
        // does cleanups that are required.
        await this.terminate();

        await this.initiate();

        if (this.lastCancel > startTime) {
            // layer was cancelled before it could initiate.
            // exit. No warnings since it was deliberate.
            return;
        }

        if (!this.esriLayer) {
            console.error('ESRI layer failed to re-create during reload.');
            return;
        }

        // put back in the ESRI map.
        // we use this method, since global position of this layer may have changed
        // during the async terminates and awaits in this method.
        this.$iApi.geo.map.insertToEsriMap(this);

        this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_END, this);
        this.sublayers.forEach(sublayer => this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_END, sublayer));
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): any {
        const esriConfig: any = {
            id: rampLayerConfig.id,
            url: rampLayerConfig.url,
            opacity: rampLayerConfig?.state?.opacity ?? 1,
            visible: rampLayerConfig?.state?.visibility ?? true
        };

        // NOTE careful now. seems setting this willy nilly, even if undefined value, causes layer to keep pinging the server.
        //      issue #1018 is tracking the possibility of adding this back.
        // if (typeof rampLayerConfig.refreshInterval !== 'undefined') {
        //     esriConfig.refreshInterval = rampLayerConfig.refreshInterval;
        // }

        return esriConfig;
    }

    removeEsriLayer(): void {
        if (this.esriLayer && this.$iApi.geo.map.esriMap) {
            // attempt to find esri layer in esri map. remove if found
            const tempPosition = this.$iApi.geo.map.esriMap.layers.findIndex(l => l.id === this.id);
            if (tempPosition > -1) {
                this.$iApi.geo.map.esriMap.layers.remove(this.esriLayer);
            }
        }
    }

    // ----------- LAYER LOAD -----------

    protected onLoadActions(): Array<Promise<void>> {
        const proms = super.onLoadActions();
        if (!this.name) {
            // no name from config. attempt layer name
            // if not layer name, use id instead
            this.name = this.esriLayer?.title || this.id;
        }

        if (!this.isCosmetic) {
            this.identify = this.config.state?.identify ?? this.supportsIdentify;
        }

        // layer base class doesnt have spatial ref, but we will assume all our layers do.
        // consider adding fancy checks if its missing, and if so just promise.resolve .
        // given the layer is dead without a success, we don't bother with any cancel-checking here.
        const lookupPromise = this.$iApi.geo.proj.checkProj(this.getSR()).then(goodSR => {
            if (goodSR) {
                return Promise.resolve();
            } else {
                return Promise.reject();
            }
        });

        proms.push(lookupPromise);

        return proms;
    }

    // ----------- LAYER MANAGEMENT -----------

    /**
     * Wraps an error test for when someone calls a map dependent function too early
     * @private
     */
    protected mapCheck(): boolean {
        // Map Check Hah ha-ha-Hah
        // I be the anti-map rhythm rock shocker

        if (this.$iApi.geo.map.created) {
            return true;
        } else {
            console.error('Attempting to use map-dependent logic before the layer has been added to the map');
            console.trace();
            return false;
        }
    }

    /**
     * Returns the scale set (min and max visible scale) of the layer.
     *
     * @returns {ScaleSet} scale set of the layer
     */
    get scaleSet(): ScaleSet {
        return this._scaleSet;
    }

    /**
     * Set the scale set (min and max visible scale) of the layer.
     *
     * @param {ScaleSet} scaleSet the new scale set of the layer
     */
    set scaleSet(scaleSet: ScaleSet) {
        this._scaleSet = scaleSet;
    }

    /**
     * Indicates if the layer is not in a visible scale range.
     *
     * @function isOffscale
     * @param {Integer} [testScale] optional scale to test against. if not provided, current map scale is used.
     * @returns {Boolean} true if the layer is outside of a visible scale range
     */
    isOffscale(testScale: number | undefined = undefined): boolean {
        let mahScale: number;
        if (typeof testScale === 'undefined') {
            if (this.mapCheck()) {
                mahScale = this.$iApi.geo.map.getScale();
            } else {
                // default due to no map, ideally does nothing.
                return false;
            }
        } else {
            mahScale = testScale;
        }

        return this.scaleSet.isOffScale(mahScale).offScale;
    }

    /**
     * Cause the map to zoom to a scale level where the layer is visible.
     *
     * @returns {Promise} resolves when map has finished zooming
     */
    zoomToVisibleScale(): Promise<void> {
        if (this.mapCheck()) {
            // TODO consider enhancing to bring in the old "pan to data" step from RAMP2.
            //      was never a great function; only worked well if data was in a condensed area.
            //      if we do it, we would wait for zoom promise, then check if map center is
            //      inside the layer extent. if not, pan the map to layer extent center.
            //      would need to add an extra boolean flag parameter to indicate if we do the pan or not.
            //      alternate idea is make a separate pan-to-extent function and let caller make two calls. hmmm. nice.
            return this.$iApi.geo.map.zoomToVisibleScale(this.scaleSet);
        } else {
            return Promise.resolve();
        }
    }

    /**
     * Cause the map to zoom to this layer's boundary extent
     *
     * @returns {Promise} resolves when map has finished zooming
     */
    zoomToLayerBoundary(): Promise<void> {
        if (!this.extent) {
            console.error(`Attempted to zoom to boundary of a layer with no extent (Layer Id: ${this.id})`);
            return Promise.resolve();
        }

        if (this.mapCheck()) {
            return this.$iApi.geo.map.zoomMapTo(this.extent);
        } else {
            return Promise.resolve();
        }
    }

    /**
     * Get the mouse tolerance in pixels for this layer
     *
     * @returns {number} the mouse tolerance of this layer
     */
    get mouseTolerance() {
        return this._mouseTolerance;
    }

    /**
     * Set the mouse tolerance for this layer in pixels
     *
     * @param {number} tolerance the new mouse tolerance
     */
    set mouseTolerance(tolerance: number) {
        if (!this.supportsIdentify) {
            console.warn("Attempted to set click tolerance on a layer that doesn't support identify");
            return;
        }

        // should not happen, but we never know
        if (tolerance < 0) {
            console.error('Attempted to set a negative click tolerance');
            return;
        }

        this._mouseTolerance = tolerance;
    }

    /**
     * Get the touch tolerance in pixels for this layer
     *
     * @returns {number} the touch tolerance of this layer
     */
    get touchTolerance() {
        return this._touchTolerance;
    }

    /**
     * Set the touch tolerance in pixels for this layer
     *
     * @param {number} tolerance the new touch tolerance
     */
    set touchTolerance(tolerance: number) {
        if (!this.supportsIdentify) {
            console.warn("Attempted to set touch tolerance on a layer that doesn't support identify");
            return;
        }

        if (tolerance < 0) {
            console.error('Attempted to set a negative touch tolerance');
            return;
        }

        this._touchTolerance = tolerance;
    }

    /**
     * Indicates if the Esri map layer exists
     */
    get layerExists(): boolean {
        return this.initiationState === InitiationState.INITIATED && !!this.esriLayer;
    }

    /**
     * Returns an array describing the draw order of features, if applicable.
     */
    get drawOrder(): Array<DrawOrder> {
        return this._drawOrder;
    }

    /**
     * Returns the visibility of the layer.
     *
     * @returns {Boolean} visibility of the layer
     */
    get visibility(): boolean {
        // basic case - esri layer vis === layer vis
        if (this.layerExists) {
            return this.esriLayer!.visible;
        } else {
            return false;
        }
    }

    /**
     * Applies visibility to layer.
     *
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean) {
        // basic case - set layer visibility
        if (this.layerExists) {
            this.esriLayer!.visible = value;
        } else {
            this.noLayerErr();
        }
    }

    /**
     * Checks the visibility of the sublayers
     * If all sublayers are invisible, then this layer is also set to invisible
     *
     * @function checkVisibility
     */
    checkVisibility(): void {
        if (this.supportsSublayers && this.layerExists) {
            this.visibility = this.sublayers.some(sublayer => sublayer.visibility);
        }
    }

    /**
     * Returns the opacity of the layer.
     *
     * @returns {number} opacity of the layer (range between 0 and 1)
     */
    get opacity(): number {
        // basic case - esri layer opac === layer opac
        if (this.layerExists) {
            return this.esriLayer!.opacity;
        } else {
            return 0;
        }
    }

    /**
     * Applies opacity to layer.
     *
     * @param {number} value the new opacity setting (range between 0 and 1)
     */
    set opacity(value: number) {
        // basic case - set layer opacity
        if (this.layerExists) {
            this.esriLayer!.opacity = value;
        } else {
            this.noLayerErr();
        }
    }

    /**
     * Provides the spatial reference of how the underlying ESRI layer is encoding geometry on the client.
     *
     * @returns {SpatialReference} the layer spatial reference in RAMP API format
     */
    getSR(): SpatialReference {
        if (this.esriLayer) {
            return SpatialReference.fromESRI((<any>this.esriLayer).spatialReference!);
        } else {
            this.noLayerErr();
            return SpatialReference.latLongSR();
        }
    }
}
