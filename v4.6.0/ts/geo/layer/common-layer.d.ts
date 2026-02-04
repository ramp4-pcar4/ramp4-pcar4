import { InstanceAPI, LayerInstance } from '@/api/internal';
import { DefPromise, DrawState, Extent, Graphic, InitiationState, LayerState, TreeNode } from '@/geo/api';
import type { AttributeSet, GetGraphicParams, RampLayerConfig, TabularAttributeSet } from '@/geo/api';
declare const enum TimerType {
    DRAW = "draw",
    LOAD = "load"
}
/**
 * A common layer class which is inherited by all layer classes.
 */
export declare class CommonLayer extends LayerInstance {
    timers: {
        draw: number | undefined;
        load: number | undefined;
    };
    protected origRampConfig: RampLayerConfig;
    protected loadDefProm: DefPromise;
    protected loadPromFulfilled: boolean;
    protected layerTree: TreeNode;
    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    updateInitiationState(newState: InitiationState): void;
    updateLayerState(newState: LayerState): void;
    updateDrawState(newState: DrawState): void;
    initiate(): Promise<void>;
    protected onInitiate(): Promise<void>;
    terminate(): Promise<void>;
    onLoad(): void;
    onError(): void;
    protected onLoadActions(): Array<Promise<void>>;
    /**
     * Provides a promise that resolves when the layer has finished loading. If accessing layer properties that
     * depend on the layer being loaded, wait on this promise before accessing them.
     *
     * @method loadPromise
     * @returns {Promise} resolves when the layer has finished loading
     */
    loadPromise(): Promise<void>;
    /**
     * Indicates if the layer is in a state that is makes sense to interact with.
     * I.e. False if layer has not done it's initial load, or is in error state.
     * Acts as a handy shortcut to inspecting the layerState.
     *
     * @method isLoaded
     * @returns {Boolean} true if layer is loaded
     */
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
    /**
     * Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.
     *
     */
    abortAttributeLoad(): void;
    /**
     * Requests that any downloaded attribute sets or cached geometry be removed from memory. The next requests will pull from the server again.
     *
     */
    clearFeatureCache(): void;
    /**
     * Invokes the process to get the full set of attribute values for the layer,
     * formatted in a tabular format. Additional data properties are also included.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of tabular attribute values
     */
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
    /**
     * Gets the icon for a specific feature, as an SVG string.
     *
     * @param {Integer} objectId the object id of the feature to find
     * @returns {Promise} resolves with an svg string encoding of the icon
     */
    getIcon(objectId: number): Promise<string>;
    /**
     * Returns the value of a named SQL filter on a layer.
     *
     * @param {String} filterKey the filter key / named filter to view
     * @returns {String} the value of the where clause for the filter. Empty string if not defined.
     */
    getSqlFilter(filterKey: string): string;
    /**
     * Applies an SQL filter to the layer. Will overwrite any existing filter for the given key.
     * Use `1=2` for a "hide all" where clause.
     *
     * @param {String} filterKey the filter key / named filter to apply the SQL to
     * @param {String} whereClause the WHERE clause of the filter
     */
    setSqlFilter(filterKey: string, whereClause: string): void;
    /**
     * Gets array of object ids that currently pass any filters for the layer
     *
     * @param {Array} [exclusions] list of any filters keys to exclude from the result. omission includes all filters
     * @param {Extent} [extent] if provided, the result list will only include features intersecting the extent
     * @returns {Promise} resolves with array of object ids that pass the filter. if no filters are active, resolves with undefined.
     */
    getFilterOIDs(exclusions?: Array<string>, extent?: Extent | undefined): Promise<Array<number> | undefined>;
    /**
     * Gets the extent where the provided object id is on the map.
     * Can only be used on feature layers with multipoint, polyline, polygon geometry.
     *
     * @param objectId the object id to query
     * @returns {Promise} resolves with the extent where the object id is present
     */
    getGraphicExtent(objectId: number): Promise<Extent>;
    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
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
}
export {};
