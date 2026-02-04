import { InstanceAPI, LayerInstance } from '../../api/internal';
import { DefPromise, DrawState, Extent, Graphic, InitiationState, LayerState, TreeNode, Attributes, AttributeSet, GetGraphicParams, RampLayerConfig, RampLayerMapImageSublayerConfig, TabularAttributeSet } from '../api';
declare const enum TimerType {
    DRAW = "draw",
    LOAD = "load"
}
/**
 * A common layer class which is inherited by all layer classes.
 */
export declare class CommonLayer extends LayerInstance {
    /**
     * Tracks load and draw elapsed time
     */
    timers: {
        draw: number | undefined;
        load: number | undefined;
    };
    protected origRampConfig: RampLayerConfig;
    protected loadDefProm: DefPromise<void>;
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
    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    updateInitiationState(newState: InitiationState): void;
    updateLayerState(newState: LayerState, userCancel?: boolean): void;
    updateDrawState(newState: DrawState): void;
    initiate(): Promise<void>;
    protected onInitiate(): Promise<void>;
    terminate(): Promise<void>;
    onLoad(): void;
    onError(genuineError?: boolean): void;
    /**
     * Performs setup on the layer that needs to occur after initialization and
     * the esri layer (if a map layer) loads, but before we mark the layer as loaded.
     * Any async tasks must include their promise in the return array.
     *
     * @private
     * @returns {Array<Promise<void>>} List of things to wait on.
     */
    protected onLoadActions(): Array<Promise<void>>;
    cancelLoad(): void;
    loadPromise(): Promise<void>;
    get isLoaded(): boolean;
    /**
     * Indicates if layer should participate in an identify request.
     */
    canIdentify(): boolean;
    /**
     * Provides a tree structure describing the layer and any sublayers,
     * including uid values. Should only be called after loadPromise resolves.
     *
     * @method getLayerTree
     * @returns {TreeNode} the root of the layer tree
     */
    getLayerTree(): TreeNode;
    protected stubError(): void;
    /**
     * Invokes the process to get the full set of attribute values for the layer.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of attribute values
     */
    getAttributes(): Promise<AttributeSet>;
    abortAttributeLoad(): void;
    clearFeatureCache(): void;
    getTabularAttributes(): Promise<TabularAttributeSet>;
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
    getGraphic(objectId: number, options: GetGraphicParams): Promise<Graphic>;
    getIcon(objectId: number): Promise<string>;
    getSqlFilter(filterKey: string): string;
    setSqlFilter(filterKey: string, whereClause: string): void;
    getFilterOIDs(exclusions?: Array<string>, extent?: Extent | undefined): Promise<Array<number> | undefined>;
    /**
     * Gets the extent where the provided object id is on the map.
     * Can only be used on feature layers with multipoint, polyline, polygon geometry.
     *
     * @param objectId the object id to query
     * @returns {Promise} resolves with the extent where the object id is present
     */
    getGraphicExtent(objectId: number): Promise<Extent>;
    applySqlFilter(exclusions?: Array<string>): void;
    /**
     * Add a WMS layer parameter, maybe even refresh the layer
     *
     * @function setCustomParameter
     * @param {String} key name of the key to be created or updated
     * @param {String} value value of the key
     * @param {Boolean} forceRefresh show the new fancy version of the layer or not
     */
    setCustomParameter(key: string, value: string, forceRefresh?: boolean): void;
    /**
     * Start the draw/load timer for the layer, after which is a slow to load/draw notification is shown.
     * @param type the type of timer to start (load or draw)
     */
    protected startTimer(type: TimerType): void;
    /**
     * Stop the draw/load timer for the layer, if it was started.
     * @param type the type of timer to stop (load or draw)
     */
    protected stopTimer(type: TimerType): void;
    /**
     * Will create an arcade formula executor valid for this layer
     *
     * @param formula an arcade formula
     * @returns resolves with an arcade executor object
     */
    private arcadeGenerator;
    get nameArcade(): string;
    setNameArcade(formula: string): Promise<void>;
    /**
     * Handles initialization logic for feature names.
     * Only valid for layers that support attributes.
     * Typically called by internal processes.
     *
     * @param config a ramp layer configuration object. Can pass empty object if n/a.
     * @param serviceDefault name field as defined by the layer service. Not required
     */
    nameInitializer(config: RampLayerConfig | RampLayerMapImageSublayerConfig, serviceDefault?: string): Promise<void>;
    nameValue(attributes: Attributes): string;
    get maptipArcade(): string;
    setMaptipArcade(formula: string): Promise<void>;
    /**
     * DEPRECIATED #2595
     * Use maptipInitializer
     */
    tooltipInitializer(config: RampLayerConfig | RampLayerMapImageSublayerConfig): Promise<void>;
    /**
     * Handles initialization logic for feature maptips.
     * Only valid for layers that support attributes.
     * Needs to be called after nameInitializer to ensure correct fallback defaults.
     * Typically called by internal processes.
     *
     * @param config a ramp layer configuration object. Can pass empty object if n/a.
     */
    maptipInitializer(config: RampLayerConfig | RampLayerMapImageSublayerConfig): Promise<void>;
    maptipValue(attributes: Attributes): string;
}
export {};
