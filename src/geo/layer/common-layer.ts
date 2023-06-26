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
    TreeNode
} from '@/geo/api';

import type {
    AttributeSet,
    GetGraphicParams,
    RampLayerConfig,
    TabularAttributeSet
} from '@/geo/api';
import to from 'await-to-js';

const enum TimerType {
    DRAW = 'draw',
    LOAD = 'load'
}

/**
 * A common layer class which is inherited by all layer classes.
 */
export class CommonLayer extends LayerInstance {
    // common layer properties
    timers: {
        draw: number | undefined;
        load: number | undefined;
    };

    protected origRampConfig: RampLayerConfig;

    protected loadDefProm: DefPromise; // a deferred promise that resolves when layer is fully ready and safe to use. for convenience of caller

    protected loadPromFulfilled: boolean; // a boolean to track whether the promise has fulfilled or not
    protected layerTree: TreeNode;

    // ----------- LAYER CONSTRUCTION AND INITIALIZAION -----------

    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);

        // initialize common layer properties
        this.name = rampConfig.name || '';

        this.geomType = GeometryType.NONE;
        this.dataFormat = DataFormat.UNKNOWN;
        this.layerType = LayerType.UNKNOWN;
        this.layerFormat = LayerFormat.UNKNOWN;
        this.expectedTime.draw = rampConfig.expectedDrawTime ?? 10000;
        this.expectedTime.load = rampConfig.expectedLoadTime ?? 4000;
        this.timers = {
            draw: undefined,
            load: undefined
        };
        this.origRampConfig = rampConfig;
        this.id = rampConfig.id || '';
        this.uid = this.$iApi.geo.shared.generateUUID();
        this.isCosmetic = rampConfig.cosmetic || false;
        this.isRemoved = false;
        this.isSublayer = false;
        this.supportsIdentify = false; // default state.
        this.mapLayer = true;
        this.identifyMode = LayerIdentifyMode.NONE;
        this.supportsFeatures = false; // default state. featurish layers should set to true when the load
        this.hovertips = false;
        this.supportsSublayers = false; // by default layers do not support sublayers
        this.isFile = false; // default state.
        this.extent = rampConfig.extent
            ? Extent.fromConfig(`${this.id}_extent`, rampConfig.extent)
            : undefined;
        this.layerState = LayerState.NEW;
        this.initiationState = InitiationState.NEW;
        this.drawState = DrawState.NOT_LOADED;
        this.loadDefProm = new DefPromise();

        this.loadPromFulfilled = false;

        this.layerTree = new TreeNode(0, this.uid, this.name, true); // is a layer with layer index 0 by default. subclasses will change this when they load
        this.maxLoadTime = rampConfig.maxLoadTime ?? 20000;
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
        if (this.isSublayer) {
            // early back out, we don't want the below code to run for sublayers
            console.warn('Attempted to initiate a sublayer as a CommonLayer');
            return Promise.resolve();
        }

        if (this.initiationState === InitiationState.INITIATED) {
            console.error(
                `Encountered layer initialize while already initiated, layer id ${this.id}`
            );
        }
    }

    async terminate(): Promise<void> {
        // terminate sublayers first (bottom up termination)
        this.updateInitiationState(InitiationState.TERMINATING);
        await Promise.all(this.sublayers.map(s => s.terminate()));

        this.loadDefProm = new DefPromise();
        this.loadPromFulfilled = false;

        this.updateLayerState(LayerState.NEW);
        this.updateDrawState(DrawState.NOT_LOADED);
        this.updateInitiationState(InitiationState.TERMINATED);
    }

    // ----------- LAYER LOAD -----------

    // When esri layer or data layer loads, this will perform any additional layer setup.
    // The layer status will be set to loaded once everything has finished.
    onLoad(): void {
        // magic happens here. other layers will override onLoadActions,
        // meaning this will run the function appropriate for the layer who inherited LayerBase
        let timedOut = false;
        const loadTimeout = setTimeout(() => {
            // if timeout is not 0, layer will go into error state after loading past timeout
            // otherwise timeout is turned off (0), and layer can load forever
            if (this.maxLoadTime) {
                timedOut = true;
                this.onError();
            }
        }, this.maxLoadTime); // configurable time limit for actions to execute
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
        // currently nothing, but we have the option to insert
        // an async setup that is global for all layers
        return [];
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
     * Provides a tree structure describing the layer and any sublayers,
     * including uid values. Should only be called after loadPromise resolves.
     *
     * @method getLayerTree
     * @returns {TreeNode} the root of the layer tree
     */
    getLayerTree(): TreeNode {
        return this.layerTree;
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
     * Gets the extent where the provided object id is on the map.
     * Can only be used on feature layers with multipoint, polyline, polygon geometry.
     *
     * @param objectId the object id to query
     * @returns {Promise} resolves with the extent where the object id is present
     */
    getGraphicExtent(objectId: number): Promise<Extent> {
        this.stubError();
        return Promise.resolve(Extent.fromParams('fake', 0, 0, 0, 0));
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
                        // layer.longload or layer.longdraw
                        this.$iApi.$i18n.t(`layer.long${type}`, {
                            id: this.name || this.id
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
