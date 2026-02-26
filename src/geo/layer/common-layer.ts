// put things here that would be common to all layers
// used for layer types defined by Core RAMP.
/* eslint-disable @typescript-eslint/no-unused-vars */

import { GlobalEvents, InstanceAPI, LayerInstance, NotificationType } from '@/api/internal';
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
    Attributes,
    AttributeSet,
    GetGraphicParams,
    RampLayerConfig,
    RampLayerMapImageSublayerConfig,
    TabularAttributeSet
} from '@/geo/api';
import { EsriAPI } from '@/geo/esri';
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

    /**
     * Tracks load and draw elapsed time
     */
    timers: {
        draw: number | undefined;
        load: number | undefined;
    };

    protected origRampConfig: RampLayerConfig;

    protected loadDefProm: DefPromise<void>; // a deferred promise that resolves when layer is fully ready and safe to use. for convenience of caller

    /**
     * A boolean to track whether the promise is pending (false) or fulfilled/rejected (true)
     */
    protected loadPromDone: boolean;
    protected layerTree: TreeNode;

    /**
     * Internally tracks any arcade formula for the name value.
     */
    protected nameArcadeFormula: string;

    /**
     * The name arcade executor if a name formula is defined
     */
    protected nameArcadeExecutor: __esri.ArcadeExecutor | undefined;

    /**
     * Internally tracks any arcade formula for the maptip value.
     */
    protected maptipArcadeFormula: string;

    /**
     * The maptip arcade executor if a maptip formula is defined
     */
    protected maptipArcadeExecutor: __esri.ArcadeExecutor | undefined;

    // ----------- LAYER CONSTRUCTION AND INITIALIZAION -----------

    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);

        // initialize common layer properties
        this.name = rampConfig.name || '';

        this.geomType = GeometryType.NONE;
        this.dataFormat = DataFormat.UNKNOWN;
        this.layerType = LayerType.UNKNOWN;
        this.layerFormat = LayerFormat.UNKNOWN;

        const defaultTimes = $iApi.geo.map.layerDefaultTimes;
        this.expectedTime.draw = rampConfig.expectedDrawTime ?? defaultTimes.draw;
        this.expectedTime.load = rampConfig.expectedLoadTime ?? defaultTimes.load;

        // falsey || , 0 means defer to map default
        this.expectedTime.fail = rampConfig.maxLoadTime || defaultTimes.fail;

        this.lastCancel = 0;
        this.timers = {
            draw: undefined,
            load: undefined
        };
        this.origRampConfig = rampConfig;
        this.id = rampConfig.id || '';
        this.uid = this.$iApi.geo.shared.generateUUID();
        this.isCosmetic = false;
        this.isSystem = rampConfig.system || false;
        this.isRemoved = false;
        this.isSublayer = false;
        this.supportsIdentify = false; // default state.
        this.mapLayer = true;
        this.identifyMode = LayerIdentifyMode.NONE;
        this.supportsFeatures = false; // default state. featurish layers should set to true when the load
        this.maptips = false;
        this.supportsSublayers = false; // by default layers do not support sublayers
        this.isFile = false; // default state.
        this.layerState = LayerState.NEW;
        this.initiationState = InitiationState.NEW;
        this.drawState = DrawState.NOT_LOADED;
        this.loadDefProm = new DefPromise();
        this.url = this.origRampConfig.url;
        this.canReload = !!(this.url || this.origRampConfig.caching);
        this.loadPromDone = false;
        this.nameArcadeFormula = '';
        this.maptipArcadeFormula = '';

        this.layerTree = new TreeNode(0, this.uid, this.name, true); // is a layer with layer index 0 by default. subclasses will change this when they load
    }

    updateInitiationState(newState: InitiationState): void {
        this.initiationState = newState;

        this.$iApi.event.emit(GlobalEvents.LAYER_INITIATIONSTATECHANGE, {
            state: newState,
            layer: this
        });
    }

    updateLayerState(newState: LayerState, userCancel: boolean = false): void {
        this.layerState = newState;

        this.$iApi.event.emit(GlobalEvents.LAYER_LAYERSTATECHANGE, {
            state: newState,
            layer: this,
            userCancel
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

        const failStepsHelper = (consoleMessage: string) => {
            // state check is for saftey. Typically will be in initializing state
            // when this gets called. But if someone decides to force a layer
            // into error via API, could get a timeout error doubling at a later time without
            // the check.
            if (this.layerState !== LayerState.ERROR) {
                console.error(consoleMessage);
                this.onError();
            }
        };

        const startTime = Date.now();

        // this timer is different than the one in MapAPI.addLayer() .
        // that one is tracking "did I get added to the map" for the return value of addLayer.
        // this timer works in tandem with the similar timer in onLoad() of this class.
        // they share the same timer value, but typically a layer is all work in initiation or all work in load
        const initTimeout = setTimeout(() => {
            // took too long to init, send layer into error state

            // need to ensure this timeout didn't keep running after a real cancel.
            // if it was cancelled, stuffs already handled. We do nothing
            if (startTime > this.lastCancel) {
                // using lastCancel is a bit of trickery. We are timing out but server processes can still be running.
                // if they return much later, the layer will flicker into existence on the map.
                // doing this prevents that (everything async in init-load is respecting this var).
                // However we do treat the error as genuine, so the notification will ping.
                this.lastCancel = Date.now();
                failStepsHelper('Layer timed out during initialize. Id: ' + this.id);
            }
        }, this.expectedTime.fail);

        const [initiateErr] = await to(this.onInitiate()); // Need this because some layers don't do error handling things

        // we're done timing regardless. a) already timed out. b) init ok. c) init errored so already errored.
        clearTimeout(initTimeout);

        if (startTime > this.lastCancel) {
            if (this.drawState !== DrawState.UP_TO_DATE) {
                this.startTimer(TimerType.DRAW);
            }
            if (initiateErr) {
                failStepsHelper(`Init error on layer id: ${this.id} . ${initiateErr.message}`);
            } else {
                this.updateInitiationState(InitiationState.INITIATED);
            }
        }
    }

    protected async onInitiate(): Promise<void> {
        if (this.isSublayer) {
            // early back out, we don't want the below code to run for sublayers
            console.warn('Attempted to initiate a sublayer as a CommonLayer');
            return Promise.resolve();
        }

        if (this.initiationState === InitiationState.INITIATED) {
            console.error(`Encountered layer initialize while already initiated, layer id ${this.id}`);
        }
    }

    async terminate(): Promise<void> {
        // terminate sublayers first (bottom up termination)
        this.updateInitiationState(InitiationState.TERMINATING);
        await Promise.all(this.sublayers.map(s => s.terminate()));

        this.loadDefProm = new DefPromise();
        this.loadPromDone = false;

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

        const startTime = Date.now();

        let timedOut = false;

        // this timer is different than the one in MapAPI.addLayer() .
        // that one is tracking "did I get added to the map" for the return value of addLayer.
        // this timer works in tandem with the similar timer in initiate() of this class.
        // they share the same timer value, but typically a layer is all work in initiation or all work in load
        const loadTimeout = setTimeout(() => {
            // took too long to load, send layer into error state
            timedOut = true;
            this.onError();
        }, this.expectedTime.fail);

        // handling for any errors that are thrown when executing layer onLoadActions call
        // For issue https://github.com/ramp4-pcar4/ramp4-pcar4/issues/2103, without proper error handling here any subsequent
        // layer that is added will not trigger its esriLayer.loadStatus watcher, meaning onLoadActions is never called
        // resulting in this issue. Can attempt a deeper analysis of why this is the case in the future (possible race condition).
        try {
            const loadPromises: Array<Promise<void>> = this.onLoadActions();
            Promise.all(loadPromises)
                .then(() => {
                    clearTimeout(loadTimeout);
                    if (!timedOut) {
                        this.stopTimer(TimerType.LOAD);

                        // only finalize if this load was not cancelled
                        if (startTime > this.lastCancel) {
                            // if promise was previously not in pending status, make a new one
                            // otherwise we're trying to resolve a resolved/rejected promise.
                            // Anything watching the old promise already handled it. This ensures
                            // anything looking at it going forward will get a resolved promise.
                            if (this.loadPromDone) {
                                this.loadDefProm = new DefPromise();
                            }
                            this.loadDefProm.resolveMe();
                            this.loadPromDone = true;

                            // This will just trigger the above statements for each sublayer
                            this.sublayers.forEach(sublayer => sublayer.onLoad());
                            this.updateLayerState(LayerState.LOADED);
                        }
                    } else {
                        this.visibility = false;
                    }
                })
                .catch(() => {
                    clearTimeout(loadTimeout);
                    this.onError();
                });
        } catch (err) {
            console.error('Encountered error on layer load: ', err);
            // set layer to error status if unsuccessful load attempt
            clearTimeout(loadTimeout);
            this.onError();
        }
    }

    onError(genuineError: boolean = true): void {
        if (this.layerState === LayerState.ERROR) {
            // we're already in Error. Different handlers are reporting the same scenario.
            // do nothing to avoid event spam and conflicting event states from user cancel
            // that has funny timing.
            return;
        }

        if (this.initiationState === InitiationState.INITIATING) {
            // something happened while initiating. push back to New
            this.updateInitiationState(InitiationState.NEW);
        }

        // if promise was previously not in pending status, make a new one
        // otherwise we're trying to reject a resolved promise
        if (this.loadPromDone) {
            this.loadDefProm = new DefPromise();
        }
        this.loadDefProm.rejectMe();
        this.loadPromDone = true;
        this.sublayers.forEach(sublayer => sublayer.onError(genuineError));

        // manually cancelling a loading layer will put in error state. We don't
        // want to ping the user; they did the cancel click.
        if (genuineError) {
            this.$iApi.notify.show(
                NotificationType.ERROR,
                this.$iApi.$i18n.t('layer.error', {
                    id: this.id
                })
            );
        }

        this.stopTimer(TimerType.DRAW);
        this.stopTimer(TimerType.LOAD);
        this.updateLayerState(LayerState.ERROR, !genuineError);
    }

    /**
     * Performs setup on the layer that needs to occur after initialization and
     * the esri layer (if a map layer) loads, but before we mark the layer as loaded.
     * Any async tasks must include their promise in the return array.
     *
     * @private
     * @returns {Array<Promise<void>>} List of things to wait on.
     */
    protected onLoadActions(): Array<Promise<void>> {
        // currently nothing, but we have the option to insert
        // an async setup that is global for all layers

        return [];
    }

    cancelLoad(): void {
        if (
            this.isLoaded ||
            this.initiationState === InitiationState.NEW ||
            this.initiationState === InitiationState.TERMINATING ||
            this.initiationState === InitiationState.TERMINATED
        ) {
            // we are loaded, terminating, terminated, or never initiated.
            // do nothing.
            return;
        }

        // set flag for other async load stuff to see
        this.lastCancel = Date.now();

        if (this.esriLayer && this.esriLayer.loadStatus === 'loading') {
            // ESRI API is doing something. stop it.
            this.esriLayer.cancelLoad();
        }

        // remove layer from map if it was there. this prevents cancelled layer
        // that actually loaded (and its the ramp stuff thats slow/broken holding up LOAD)
        // from showing when legend says Error.
        this.removeEsriLayer();

        // put layer in Errorland, flag to stop notification from pinging
        this.onError(false);
    }

    loadPromise(): Promise<void> {
        return this.loadDefProm.getPromise();
    }

    get isLoaded(): boolean {
        return this.layerState === LayerState.LOADED;
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
        throw new Error(`Attempted to use a method not valid for ${this.layerType}`);
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

    abortAttributeLoad(): void {
        this.stubError();
    }

    clearFeatureCache(): void {
        this.stubError();
    }

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

    getIcon(objectId: number): Promise<string> {
        this.stubError();
        return Promise.resolve('');
    }

    getSqlFilter(filterKey: string): string {
        this.stubError();
        return '';
    }

    setSqlFilter(filterKey: string, whereClause: string): void {
        this.stubError();
    }

    getFilterOIDs(
        exclusions: Array<string> = [],
        extent: Extent | undefined = undefined
    ): Promise<Array<number> | undefined> {
        this.stubError();
        return Promise.resolve(undefined);
    }

    getGraphicExtent(objectId: number): Promise<Extent | undefined> {
        this.stubError();
        return Promise.resolve(undefined);
    }

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
    setCustomParameter(key: string, value: string, forceRefresh: boolean = true): void {
        this.stubError();
    }

    /**
     * Start the draw/load timer for the layer, after which is a slow to load/draw notification is shown.
     * @param type the type of timer to start (load or draw)
     */
    protected startTimer(type: TimerType): void {
        this.stopTimer(type); // reset the timer if a timing is already in progress.
        if (this.expectedTime[type] > 0) {
            this.timers[type] = window.setTimeout(
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
            this.timers[type] = undefined;
        }
    }

    /**
     * Will create an arcade formula executor valid for this layer
     *
     * @param formula an arcade formula
     * @returns resolves with an arcade executor object
     */
    private async arcadeGenerator(formula: string): Promise<__esri.ArcadeExecutor> {
        const arcadeProfile: __esri.Profile = {
            variables: [
                {
                    name: '$attr',
                    type: 'dictionary',
                    properties: this.fields
                        .map(fd => {
                            const arcardeType = this.$iApi.geo.attributes.fieldTypeToArcade(fd.type);
                            if (arcardeType) {
                                return { name: fd.name, type: arcardeType };
                            } else {
                                console.error(`Encountered field type with no arcade support: ${fd.type} [${fd.name}]`);
                                return undefined;
                            }
                        })
                        .filter(f => !!f)
                }
            ]
        };

        return EsriAPI.ArcadeExecutor(formula, arcadeProfile);
    }

    get nameArcade(): string {
        return this.nameArcadeFormula;
    }

    async setNameArcade(formula: string): Promise<void> {
        if (this.supportsFeatures) {
            if (formula.trim() === '') {
                this.nameArcadeFormula = '';
                this.nameArcadeExecutor = undefined;
            } else {
                this.nameArcadeFormula = formula;

                this.nameArcadeExecutor = await this.arcadeGenerator(formula);
            }
        } else {
            console.error("Attempted to set a name arcade function on a layer that doesn't support it.");
        }
    }

    /**
     * Handles initialization logic for feature names.
     * Only valid for layers that support attributes.
     * Typically called by internal processes.
     *
     * @param config a ramp layer configuration object. Can pass empty object if n/a.
     * @param serviceDefault name field as defined by the layer service. Not required
     */
    async nameInitializer(
        config: RampLayerConfig | RampLayerMapImageSublayerConfig,
        serviceDefault: string = ''
    ): Promise<void> {
        if (this.supportsFeatures) {
            const trimArcade = (config?.nameArcade || '').trim();
            if (trimArcade) {
                // build executor, store formula
                await this.setNameArcade(trimArcade);
            }

            // we still assign name field even if an arcade exists. This is for
            // fallback support of any old templates/custom fixtures that are not using
            // nameValue(). Any `attribute[nameField]` code will still work / not explode.

            this.nameField = (config?.nameField || '').trim() || serviceDefault || this.oidField;
        } else {
            console.error('Attempted to init a name field on an unsupported layer.');
        }
    }

    nameValue(attributes: Attributes): string {
        // NOTE idea was to also support OID as parameter, and do a feature lookup
        //      in here. But that forces the method to be async, which causes
        //      problems with a stuff that wants an instant value.
        //      So the convention anything that wants async needs to run the oid -> feature
        //      part themselves and pass the result to this badboy.

        if (attributes) {
            // TODO decide if we return error strings (to make visually obvious)
            //      or return empty string + console errors
            if (this.nameArcade) {
                const arcadePayload = {
                    $attr: attributes
                };

                return this.nameArcadeExecutor?.execute(arcadePayload) ?? 'Arcade Error';
            } else {
                return this.nameField ? (attributes[this.nameField] ?? 'Name Field Error') : '';
            }
        } else {
            return '';
        }
    }

    get maptipArcade(): string {
        return this.maptipArcadeFormula;
    }

    async setMaptipArcade(formula: string): Promise<void> {
        if (this.supportsFeatures) {
            if (formula.trim() === '') {
                this.maptipArcadeFormula = '';
                this.maptipArcadeExecutor = undefined;
            } else {
                this.maptipArcadeFormula = formula;
                this.maptipArcadeExecutor = await this.arcadeGenerator(formula);
            }
        } else {
            console.error("Attempted to set a maptip arcade function on a layer that doesn't support it.");
        }
    }

    /**
     * DEPRECIATED #2595
     * Use maptipInitializer
     */
    async tooltipInitializer(config: RampLayerConfig | RampLayerMapImageSublayerConfig): Promise<void> {
        console.warn('tooltipInitializer layer method is deprecated. Please adjust to use maptipInitializer instead');
        return this.maptipInitializer(config);
    }

    /**
     * Handles initialization logic for feature maptips.
     * Only valid for layers that support attributes.
     * Needs to be called after nameInitializer to ensure correct fallback defaults.
     * Typically called by internal processes.
     *
     * @param config a ramp layer configuration object. Can pass empty object if n/a.
     */
    async maptipInitializer(config: RampLayerConfig | RampLayerMapImageSublayerConfig): Promise<void> {
        if (this.supportsFeatures) {
            if (config.tooltipField) {
                console.warn(
                    'tooltipField layer configuration property is deprecated. Please adjust to use maptipField instead'
                );
            }

            if (config.tooltipArcade) {
                console.warn(
                    'tooltipArcade layer configuration property is deprecated. Please adjust to use maptipArcade instead'
                );
            }

            const trimArcade = (config?.maptipArcade || config?.tooltipArcade || '').trim();
            if (trimArcade) {
                // build executor, store formula
                await this.setMaptipArcade(trimArcade);
            }

            this.maptipField = (config?.maptipField || config?.tooltipField || '').trim();
        } else {
            console.error('Attempted to init a maptip field on an unsupported layer.');
        }
    }

    maptipValue(attributes: Attributes): string {
        if (attributes) {
            // TODO decide if we return error strings (to make visually obvious)
            //      or return empty string + console errors
            if (this.maptipArcade) {
                const arcadePayload = {
                    $attr: attributes
                };

                return this.maptipArcadeExecutor?.execute(arcadePayload) ?? 'Arcade Error';
            } else {
                return this.maptipField
                    ? (attributes[this.maptipField] ?? this.nameValue(attributes))
                    : this.nameValue(attributes);
            }
        } else {
            return '';
        }
    }
}
