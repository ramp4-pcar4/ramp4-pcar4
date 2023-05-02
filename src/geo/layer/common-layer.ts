// put things here that would be common to all layers
// used for layer types defined by Core RAMP.
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
    GlobalEvents,
    InstanceAPI,
    LayerInstance,
    NotificationType
} from '@/api/internal';
import {
    DataFormat,
    DefPromise,
    DrawState,
    Extent,
    GeometryType,
    Graphic,
    InitiationState,
    LayerFormat,
    LayerIdentifyMode,
    LayerState,
    LayerType,
    NoGeometry,
    ScaleSet,
    TreeNode
} from '@/geo/api';

import type {
    AttributeSet,
    DrawOrder,
    GetGraphicParams,
    RampLayerConfig,
    TabularAttributeSet
} from '@/geo/api';
import to from 'await-to-js';

const enum TimerType {
    DRAW = 'draw',
    LOAD = 'load'
}

export class CommonLayer extends LayerInstance {
    // common layer properties
    timers: {
        draw: number | undefined;
        load: number | undefined;
    };
    _serverVisibility: boolean | undefined;
    _scaleSet: ScaleSet;
    _mouseTolerance: number;
    _touchTolerance: number;
    _drawOrder: Array<DrawOrder>;
    // used to manage debouncing when applying filter updates against a layer. Private! but needs to be seen by FCs.
    _lastFilterUpdate = '';

    protected origRampConfig: RampLayerConfig;

    protected loadDefProm: DefPromise; // a deferred promise that resolves when layer is fully ready and safe to use. for convenience of caller
    protected viewDefProm: DefPromise; // a deferred promise that resolves when a layer view has been created on the map. helps bridge the view handler with the layer load handler

    protected loadPromFulfilled: boolean; // a boolean to track whether the promise has fulfilled or not
    protected layerTree: TreeNode;

    esriWatches: Array<__esri.WatchHandle>;

    // ----------- LAYER CONSTRUCTION AND INITIALIZAION -----------

    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);

        // initialize common layer properties
        this.name = rampConfig.name || '';
        this._scaleSet = new ScaleSet();

        this._mouseTolerance =
            rampConfig.mouseTolerance != undefined
                ? rampConfig.mouseTolerance
                : 5; // use default value of 5 if mouse tolerance is undefined
        this._touchTolerance =
            rampConfig.touchTolerance != undefined
                ? rampConfig.touchTolerance
                : 15; // use default value of 15 if touch tolerance is undefined

        this.geomType = GeometryType.NONE;
        this.dataFormat = DataFormat.UNKNOWN;
        this.layerType = LayerType.UNKNOWN;
        this.layerFormat = LayerFormat.UNKNOWN;
        this._drawOrder = [];
        this.expectedTime.draw = rampConfig.expectedDrawTime ?? 10000;
        this.expectedTime.load = rampConfig.expectedLoadTime ?? 4000;
        this.timers = {
            draw: undefined,
            load: undefined
        };
        this.origRampConfig = rampConfig;
        this.id = rampConfig.id || '';
        this.uid = this.$iApi.geo.shared.generateUUID();
        this.isRemoved = false;
        this.isSublayer = false;
        this.supportsIdentify = false; // default state.
        this.identifyMode = LayerIdentifyMode.NONE;
        this.supportsFeatures = false; // default state. featurish layers should set to true when the load
        this.supportsSublayers = false; // by default layers do not support sublayers
        this._serverVisibility = undefined;
        this.isFile = false; // default state.
        this.extent = rampConfig.extent
            ? Extent.fromConfig(`${this.id}_extent`, rampConfig.extent)
            : undefined;
        this.layerState = LayerState.NEW;
        this.initiationState = InitiationState.NEW;
        this.drawState = DrawState.NOT_LOADED;
        this.loadDefProm = new DefPromise();
        this.viewDefProm = new DefPromise();
        this.loadPromFulfilled = false;
        this.esriWatches = [];
        this.layerTree = new TreeNode(0, this.uid, this.name, true); // is a layer with layer index 0 by default. subclasses will change this when they load
    }

    protected noLayerErr(): void {
        console.error(
            'Attempted to manipulate the layer but no layer found. Likely .initiate() was not finished or failed.'
        );
        console.trace();
    }

    updateInitiationState(newState: InitiationState): void {
        this.initiationState = newState;
        this.$iApi.event.emit(GlobalEvents.LAYER_INITIATIONSTATECHANGE, {
            state: newState,
            layer: this
        });
    }

    updateLayerState(newState: LayerState): void {
        this.layerState = newState;
        this.$iApi.event.emit(GlobalEvents.LAYER_LAYERSTATECHANGE, {
            state: newState,
            layer: this
        });
    }

    updateDrawState(newState: DrawState): void {
        this.drawState = newState;
        if (newState === DrawState.REFRESH) {
            this.startTimer(TimerType.DRAW);
        } else if (newState === DrawState.UP_TO_DATE) {
            this.stopTimer(TimerType.DRAW);
        }
        this.$iApi.event.emit(GlobalEvents.LAYER_DRAWSTATECHANGE, {
            state: newState,
            layer: this
        });
    }

    // need this so initiate encapsulates the entire initiation process regardless of which inherited layer type is being initiated
    async initiate(): Promise<void> {
        this.updateInitiationState(InitiationState.INITIATING);
        this.startTimer(TimerType.LOAD);
        const [initiateErr] = await to(this.onInitiate()); // Need this because some layers don't do error handling things
        if (this.drawState !== DrawState.UP_TO_DATE) {
            this.startTimer(TimerType.DRAW);
        }
        if (initiateErr) {
            console.error(initiateErr.message);
            this.onError();
        }
        this.updateInitiationState(InitiationState.INITIATED);
    }

    protected async onInitiate(): Promise<void> {
        // NOTE CommonLayer a superclass and this method should be called via super.initiate()
        //      in subclass.initiate() at the appropriate time. A general rule is that at
        //      minimum the subclass should instantiate the Esri layer object and assign it
        //      to .esriLayer before calling this.

        // loading stuff
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#loadStatus
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#loaded

        // NOTE current limitation: the event setup here only support one layer view. Any attempt to make
        //      RAMP have two map views rendering the same Layer will require some major refactoring.

        if (this.isSublayer) {
            // early back out, we don't want the below code to run for sublayers
            console.warn('Attempted to initiate a sublayer as a CommonLayer');
            return Promise.resolve();
        }

        if (!this.esriLayer) {
            this.noLayerErr();
            return;
        }

        if (this.initiationState === InitiationState.INITIATED) {
            console.error(
                `Encountered layer initialize while already initiated, layer id ${this.id}`
            );
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
                    // loaded is a special case. the Layer object (subclasses of BaseLayer) need to do
                    // additional asynch work to fully set things up, so we delay firing the event until
                    // that is done.
                    this.onLoad();
                } else if (newval === 'failed') {
                    this.onError();
                } else {
                    this.updateLayerState(statemap[newval]);
                }
            })
        );

        this.esriLayer.on(
            'layerview-create',
            (e: __esri.LayerLayerviewCreateEvent) => {
                this.esriView = e.layerView;
                this.esriWatches.push(
                    e.layerView.watch('updating', (newval: boolean) => {
                        this.updateDrawState(
                            newval ? DrawState.REFRESH : DrawState.UP_TO_DATE
                        );
                    })
                );
                this.viewDefProm.resolveMe();
            }
        );

        // initiate sublayers last (top down intiation)
        this.sublayers.forEach(s => s.initiate());
    }

    async terminate(): Promise<void> {
        // TODO null out esrilayer objects? or make orchestrator handle that stuff.

        // terminate sublayers first (bottom up termination)
        this.updateInitiationState(InitiationState.TERMINATING);
        this.sublayers.forEach(s => s.terminate());

        this.loadDefProm = new DefPromise();
        this.loadPromFulfilled = false;
        this.viewDefProm = new DefPromise();

        this.esriWatches.forEach(w => w.remove());
        this.esriWatches = [];

        this.updateLayerState(LayerState.NEW);
        this.updateDrawState(DrawState.NOT_LOADED);
        this.updateInitiationState(InitiationState.TERMINATED);
    }

    async reload(): Promise<void> {
        if (!this.$iApi.geo.map.esriMap) {
            console.error('Attempted layer reload when no map exists');
            return;
        }

        // TODO verify best default if we can't find actual old position.
        // top of the stack seems correct? top of data layer stack (to avoid covering north arrow)?
        let mapStackPosition = 0;

        if (this.initiationState === InitiationState.INITIATED) {
            if (this.esriLayer) {
                // attempt to find esri layer in esri map
                const tempPosition =
                    this.$iApi.geo.map.esriMap.layers.findIndex(
                        l => l.id === this.id
                    );
                if (tempPosition > -1) {
                    mapStackPosition = tempPosition;
                    this.$iApi.geo.map.esriMap.layers.remove(this.esriLayer);
                }
            }

            // TODO might need to store layer state. If we want layer to look the same as it was prior to re-loading,
            //      could do that here. Alternative is to not, and let whomever is calling this save state before
            //      and restore state after. Might be more flexible.
            this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_START, this);
            this.sublayers.forEach(sublayer =>
                this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_START, sublayer)
            );
            await this.terminate();
        }

        await this.initiate();

        if (!this.esriLayer) {
            console.error('ESRI layer failed to re-create during reload.');
            return;
        }

        this.$iApi.geo.map.esriMap.layers.add(this.esriLayer, mapStackPosition);

        this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_END, this);
        this.sublayers.forEach(sublayer =>
            this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_END, sublayer)
        );
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

        // NOTE careful now. seems setting this willy nilly, even if undefined value, causes layer to keep pinging the server
        //      revisit issue #1018 after v4.0.0
        // if (typeof rampLayerConfig.refreshInterval !== 'undefined') {
        //     esriConfig.refreshInterval = rampLayerConfig.refreshInterval;
        // }

        return esriConfig;
    }

    // ----------- LAYER LOAD -----------

    // When esri layer loads, this will perform any additional layer setup.
    // The layer status will be set to loaded once everything has finished.
    onLoad(): void {
        // magic happens here. other layers will override onLoadActions,
        // meaning this will run the function appropriate for the layer who inherited LayerBase
        let timedOut = false;
        const loadTimeout = setTimeout(() => {
            timedOut = true;
            this.onError();
        }, 20000); // 20 second time limit for actions to execute
        const loadPromises: Array<Promise<void>> = this.onLoadActions();
        Promise.all(loadPromises)
            .then(() => {
                clearTimeout(loadTimeout);
                if (!timedOut) {
                    // if promise was previously not in pending status, make a new one
                    // otherwise we're trying to resolve a resolved/rejected promise
                    if (this.loadPromFulfilled) {
                        this.loadDefProm = new DefPromise();
                    }
                    this.loadDefProm.resolveMe();
                    this.loadPromFulfilled = true;
                    this.stopTimer(TimerType.LOAD);
                    // This will just trigger the above statements for each sublayer
                    this.sublayers.forEach(sublayer => sublayer.onLoad());
                    this.updateLayerState(LayerState.LOADED);
                } else {
                    this.visibility = false;
                }
            })
            .catch(() => {
                clearTimeout(loadTimeout);
                this.onError();
            });
    }

    // TODO what happens if the error state is hit after the layer is loaded?
    //      Probably ok (rejecting a resolved promise that nobody is listening for).
    //      Putting the layer in error status is what is important.
    // when esri layer load errors
    onError(): void {
        // if promise was previously not in pending status, make a new one
        // otherwise we're trying to resolve a resolved/rejected promise
        if (this.loadPromFulfilled) {
            this.loadDefProm = new DefPromise();
        }
        this.loadDefProm.rejectMe();
        this.loadPromFulfilled = true;
        this.sublayers.forEach(sublayer => sublayer.onError());
        this.$iApi.notify.show(
            NotificationType.ERROR,
            this.$iApi.$i18n.t('layer.error', {
                id: this.id
            })
        );
        this.stopTimer(TimerType.DRAW);
        this.stopTimer(TimerType.LOAD);
        this.updateLayerState(LayerState.ERROR);
    }

    // performs setup on the layer that needs to occur after the esri layer
    // exists, but before we mark the layer as loaded. Any async tasks must
    // include their promise in the return array.
    protected onLoadActions(): Array<Promise<void>> {
        if (!this.name) {
            // no name from config. attempt layer name
            // if not layer name, use id instead
            this.name = this.esriLayer?.title || this.id;
        }

        if (!this.isCosmetic) {
            this.identify =
                this.config.state?.identify ?? this.supportsIdentify;
        }

        // layer base class doesnt have spatial ref, but we will assume all our layers do.
        // consider adding fancy checks if its missing, and if so just promise.resolve
        const lookupPromise = this.$iApi.geo.proj
            .checkProj((<any>this.esriLayer).spatialReference)
            .then(goodSR => {
                if (goodSR) {
                    return Promise.resolve();
                } else {
                    return Promise.reject();
                }
            });

        return [lookupPromise];
    }

    /**
     * Provides a promise that resolves when the layer has finished loading. If accessing layer properties that
     * depend on the layer being loaded, wait on this promise before accessing them.
     *
     * @method loadPromise
     * @returns {Promise} resolves when the layer has finished loading
     */
    loadPromise(): Promise<void> {
        return this.loadDefProm.getPromise();
    }

    /**
     * Indicates if the layer is in a state that is makes sense to interact with.
     * I.e. False if layer has not done it's initial load, or is in error state.
     * Acts as a handy shortcut to inspecting the layerState.
     *
     * @method isLoaded
     * @returns {Boolean} true if layer is loaded
     */
    get isLoaded(): boolean {
        return this.layerState === LayerState.LOADED;
    }

    /**
     * Indicates if the Esri map layer exists
     */
    get layerExists(): boolean {
        return this.esriLayer ? true : false;
    }

    // ----------- LAYER MANAGEMENT -----------

    /**
     * Wraps an error test for when someone calls a map dependend function too early
     * @private
     */
    protected mapCheck(): boolean {
        // Map Check Hah ha-ha-Hah
        // I be the anti-map rhythm rock shocker

        if (this.$iApi.geo.map.created) {
            return true;
        } else {
            console.error(
                'Attempting to use map-dependent logic before the layer has been added to the map'
            );
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
     * Indicates if layer should participate in an identify request.
     */
    canIdentify(): boolean {
        return (
            this.supportsIdentify &&
            this.isLoaded &&
            this.visibility &&
            this.identify &&
            !this.scaleSet.isOffScale(this.$iApi.geo.map.getScale()).offScale
        );
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
            console.error(
                `Attempted to zoom to boundary of a layer with no extent (Layer Id: ${this.id})`
            );
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
            console.warn(
                "Attempted to set click tolerance on a layer that doesn't support identify"
            );
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
            console.warn(
                "Attempted to set touch tolerance on a layer that doesn't support identify"
            );
            return;
        }

        if (tolerance < 0) {
            console.error('Attempted to set a negative touch tolerance');
            return;
        }

        this._touchTolerance = tolerance;
    }

    /**
     * Returns an array describing the draw order of features. Raster layers will have empty arrays
     */
    get drawOrder(): Array<DrawOrder> {
        return this._drawOrder;
    }

    /**
     * Provides a tree structure describing the layer and any sublayers,
     * including uid values. Should only be called after loadPromise resolves.
     *
     * @method getLayerTree
     * @returns {TreeNode} the root of the layer tree
     */
    getLayerTree(): TreeNode {
        if (this.layerTree) {
            return this.layerTree;
        } else {
            this.noLayerErr();
            return new TreeNode(
                0,
                'YOU DID AN ERROR',
                'Error, check your console pls'
            );
        }
    }

    /**
     * Returns the visibility of the layer.
     *
     * @returns {Boolean} visibility of the layer
     */
    get visibility(): boolean {
        // basic case - sublayer vis === layer vis
        if (this.esriLayer) {
            return this.esriLayer.visible;
        } else {
            this.noLayerErr();
            return false; // default to chill things.
        }
    }

    /**
     * Applies visibility to layer.
     *
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean) {
        // basic case - set layer visibility
        if (this.esriLayer) {
            this.esriLayer.visible = value;
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
        if (this.supportsSublayers) {
            this.visibility = this.sublayers.some(
                sublayer => sublayer.visibility
            );
        }
    }

    /**
     * Returns the opacity of the layer.
     *
     * @returns {Boolean} opacity of the layer
     */
    get opacity(): number {
        // basic case - sublayer opac === layer opac
        if (this.esriLayer) {
            return this.esriLayer.opacity;
        } else {
            this.noLayerErr();
            return 0; // default to chill things.
        }
    }

    /**
     * Applies opacity to layer.
     *
     * @param {Boolean} value the new opacity setting
     */
    set opacity(value: number) {
        // basic case - set layer opacity
        if (this.esriLayer) {
            this.esriLayer.opacity = value;
        } else {
            this.noLayerErr();
        }
    }

    // ----------- STUB METHODS -----------
    // these are here to provide a consistant method interface when calling methods are
    // dealing with vars typed as BaseLayer. Layer classes that actually use these
    // methods will override the stubs.

    protected stubError(): void {
        throw new Error(
            `Attempted to use a method not valid for ${this.layerType}`
        );
    }

    /**
     * Invokes the process to get the full set of attribute values for the layer.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of attribute values
     */
    getAttributes(): Promise<AttributeSet> {
        this.stubError();
        return Promise.resolve({
            features: [],
            oidIndex: {}
        });
    }

    /**
     * Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.
     *
     */
    abortAttributeLoad(): void {
        this.stubError();
    }

    /**
     * Requests that any downloaded attribute sets or cached geometry be removed from memory. The next requests will pull from the server again.
     *
     */
    clearFeatureCache(): void {
        this.stubError();
    }

    // formerly known as getFormattedAttributes
    /**
     * Invokes the process to get the full set of attribute values for the layer,
     * formatted in a tabular format. Additional data properties are also included.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of tabular attribute values
     */
    getTabularAttributes(): Promise<TabularAttributeSet> {
        this.stubError();

        // nonsense to shut up typescript
        return Promise.resolve({
            columns: [],
            rows: [],
            fields: [],
            oidField: 'error'
        });
    }

    /**
     * Gets information on a graphic in the most efficient way possible. Options object properties:
     * - getGeom ; a boolean to indicate if the result should include graphic geometry
     * - getAttribs ; a boolean to indicate if the result should include graphic attributes
     * - getStyle ; a boolean to indicate if the result should include symbol styling information
     *
     * @param {Integer} objectId the object id of the graphic to find
     * @param {Object} options options object for the request, see above
     * @returns {Promise} resolves with a Graphic containing the requested information
     */
    getGraphic(objectId: number, options: GetGraphicParams): Promise<Graphic> {
        this.stubError();
        return Promise.resolve(new Graphic(new NoGeometry()));
    }

    /**
     * Gets the icon for a specific feature, as an SVG string.
     *
     * @param {Integer} objectId the object id of the feature to find
     * @returns {Promise} resolves with an svg string encoding of the icon
     */
    getIcon(objectId: number): Promise<string> {
        this.stubError();
        return Promise.resolve('');
    }

    /**
     * Returns the value of a named SQL filter on a layer.
     *
     * @param {String} filterKey the filter key / named filter to view
     * @returns {String} the value of the where clause for the filter. Empty string if not defined.
     */
    getSqlFilter(filterKey: string): string {
        this.stubError();
        return '';
    }

    /**
     * Applies an SQL filter to the layer. Will overwrite any existing filter for the given key.
     * Use `1=2` for a "hide all" where clause.
     *
     * @param {String} filterKey the filter key / named filter to apply the SQL to
     * @param {String} whereClause the WHERE clause of the filter
     */
    setSqlFilter(filterKey: string, whereClause: string): void {
        this.stubError();
    }

    /**
     * Gets array of object ids that currently pass any filters for the layer
     *
     * @param {Array} [exclusions] list of any filters keys to exclude from the result. omission includes all filters
     * @param {Extent} [extent] if provided, the result list will only include features intersecting the extent
     * @returns {Promise} resolves with array of object ids that pass the filter. if no filters are active, resolves with undefined.
     */
    getFilterOIDs(
        exclusions: Array<string> = [],
        extent: Extent | undefined = undefined
    ): Promise<Array<number> | undefined> {
        this.stubError();
        return Promise.resolve(undefined);
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {
        this.stubError();
    }

    /**
     * Add a WMS layer parameter, maybe even refresh the layer
     *
     * @function setCustomParameter
     * @param {String} key name of the key to be created or updated
     * @param {String} value value of the key
     * @param {Boolean} forceRefresh show the new fancy version of the layer or not
     */
    setCustomParameter(key: string, value: string, forceRefresh = true): void {
        this.stubError();
    }

    /**
     * Start the draw/load timer for the layer, after which is a slow to load/draw notification is shown.
     * @param type the type of timer to start (load or draw)
     */
    protected startTimer(type: TimerType): void {
        this.stopTimer(type); // reset the timer if a timing is already in progress.
        if (this.expectedTime[type] > 0) {
            this.timers[type] = setTimeout(
                () =>
                    this.$iApi.notify.show(
                        NotificationType.WARNING,
                        this.$iApi.$i18n.t(`layer.long${type}`, {
                            id: this.id
                        })
                    ),
                this.expectedTime[type]
            );
        }
    }

    /**
     * Stop the draw/load timer for the layer, if it was started.
     * @param type the type of timer to stop (load or draw)
     */
    protected stopTimer(type: TimerType): void {
        if (this.timers[type]) {
            clearTimeout(this.timers[type]);
        }
    }
}
