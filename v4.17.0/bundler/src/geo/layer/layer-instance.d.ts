import { APIScope, InstanceAPI, IdentifyResult } from '../../api/internal';
import { DataFormat, DrawState, Extent, GeometryType, Graphic, InitiationState, LayerControl, LayerFormat, LayerIdentifyMode, LayerState, LayerType, ScaleSet, SpatialReference, TreeNode, Attributes, AttributeSet, BaseGeometry, DrawOrder, FieldDefinition, GetGraphicParams, IdentifyParameters, LayerTimes, LegendSymbology, TabularAttributeSet } from '../api';
/**
 * A base class for Layer subclasses. It provides some utility functions to Layer and also gives access to `$iApi` and `$vApp` globals.
 * Mostly it exposes stub methods; this is because layer subclasses can be wildly different, so we don't
 * have a pile of common things to put here. The stubs will help debugging as they will alert devs when they have not
 * implemented something. The stubs also allow us to get intellisense / typescript happiness when dealing with common
 * layer variables typed as LayerInstance.
 *
 * @export
 * @class LayerInstance
 * @extends {APIScope}
 */
export declare class LayerInstance extends APIScope {
    config: any;
    /**
     * ID of this layer. Also known as the layerId.
     *
     * @type {string}
     * @memberof LayerInstance
     */
    id: string;
    /**
     * Unique identifier for this layer. Randomly generated at runtime.
     */
    uid: string;
    /**
     * The name of the layer.
     */
    name: string;
    /**
     * State of the actual layer on the map, such as loading, loaded, error'd.
     */
    layerState: LayerState;
    /**
     * State of the initiation / termination process of the layer
     */
    initiationState: InitiationState;
    /**
     * State of drawing / refreshing data for a layer
     */
    drawState: DrawState;
    /**
     * Index of the layer. Aligns to index of arcgis server source, or defaults to 0 on other layers.
     * Map Image Layers and layers that do not support attributes have a value of -1
     */
    layerIdx: number;
    /**
     * Type of layer this is (describes the overall layer)
     */
    layerType: LayerType;
    /**
     * How the layer is instantiated in the map stack
     */
    layerFormat: LayerFormat;
    /**
     * The type of spatial data used to generate layer content
     */
    dataFormat: DataFormat;
    /**
     * If the layer type can support an identify request
     */
    supportsIdentify: boolean;
    /**
     * If the layer type can support Feature type requests and operations
     */
    supportsFeatures: boolean;
    /**
     * If the layer type can exist on the map
     */
    mapLayer: boolean;
    /**
     * Feature count
     */
    featureCount: number;
    /**
     * Array of field definitions about the given layer's fields. Attribute-less layers will have empty arrays.
     */
    fields: Array<FieldDefinition>;
    /**
     * Comma delimited string of field names (or '*' for all). Useful for numerous ESRI api calls. Attribute-less layers will return empty string;
     */
    fieldList: string;
    /**
     * Field name that contains value considered the name of a feature. Not applicable for attribute-less layers. Ignored if nameArcade is set.
     */
    nameField: string;
    /**
     * Arcade formula to derive name of feature. Empty string indicates no formula in use. Not applicable for attribute-less layers.
     */
    get nameArcade(): string;
    /**
     * Sets a new arcade formula for the name value.
     *
     * @param formula
     * @returns Promise that resolves when the arcade executor has been generated.
     */
    setNameArcade(formula: string): Promise<void>;
    /**
     * DEPRECIATED #2595
     * Use maptipField
     */
    get tooltipField(): string;
    /**
     * DEPRECIATED #2595
     * Use maptipField
     */
    set tooltipField(val: string);
    /**
     * Field name that contains value considered the maptip of a feature. Not applicable for attribute-less layers.
     * Ignored if maptipArcade is set. nameValue is used if neither are set.
     */
    maptipField: string;
    /**
     * DEPRECIATED #2595
     * Use maptipArcade
     */
    get tooltipArcade(): string;
    /**
     * DEPRECIATED #2595
     * Use setMaptipArcade
     */
    setTooltipArcade(formula: string): Promise<void>;
    /**
     * Arcade formula to derive maptip of the feature. Empty string indicates no formula in use. Not applicable for attribute-less layers.
     */
    get maptipArcade(): string;
    /**
     * Sets a new arcade formula for the maptip value.
     *
     * @param formula
     * @returns Promise that resolves when the arcade executor has been generated.
     */
    setMaptipArcade(formula: string): Promise<void>;
    /**
     * Field name that contains the object ID of a feature. Not applicable for attribute-less layers.
     */
    oidField: string;
    /**
     * Object that contains values for the expected draw/response time.
     */
    expectedTime: LayerTimes;
    /**
     * Timecode value for the start of most recent cancel request.
     * Used to avoid races between async things returning after layers cancel or reload.
     */
    lastCancel: number;
    /**
     * If the layer has Sublayers
     */
    supportsSublayers: boolean;
    /**
     * If the layer is a Sublayer
     */
    isSublayer: boolean;
    /**
     * Tracks if layer is removed from map. Is false during the period "before" the layer gets added to map.
     */
    isRemoved: boolean;
    /**
     * If the layer was sourced from a file or a WFS source (which disconnects after load).
     */
    isFile: boolean;
    /**
     * If the layer is non-interactive and only displays content on the map
     */
    isCosmetic: boolean;
    /**
     * If the layer is being managed by a RAMP functionality
     */
    isSystem: boolean;
    /**
     * If the layer was added by user interaction during the session
     */
    userAdded: boolean;
    /**
     * If the layer is set to participate in identify requests
     */
    identify: boolean;
    /**
     * The type of logic used to identify items on the layer
     */
    identifyMode: LayerIdentifyMode;
    /**
     * DEPRECIATED #2595
     * Use maptips
     */
    get hovertips(): boolean;
    /**
     * DEPRECIATED #2595
     * Use maptips
     */
    set hovertips(val: boolean);
    /**
     * If the layer should show maptips on the map
     */
    maptips: boolean;
    /**
     * The geometry type of the layer.
     */
    geomType: GeometryType;
    /**
     * Legend symbols of the layer
     */
    legend: Array<LegendSymbology>;
    /**
     *  The internal ESRI API layer
     */
    esriLayer: __esri.Layer | undefined;
    /**
     *  The internal ESRI API sublayer. Valid only by sublayers
     */
    esriSubLayer: __esri.Sublayer | undefined;
    /**
     * The internal ESRI API layer view
     */
    esriView: __esri.LayerView | undefined;
    /**
     * The extent of the layer on the map
     */
    extent: Extent | undefined;
    /**
     * The spatial reference of the source of geometry (e.g. map server). Undefined for non-ArcServer and non-spatial layers.
     */
    sourceSR: SpatialReference | undefined;
    /**
     * Indicates if the layer can be modified with filters.
     */
    canModifyLayer: boolean;
    /**
     * Indicates if the layer can be reloaded.
     */
    canReload: boolean;
    /**
     * url of the service
     */
    url: string;
    protected _parentLayer: LayerInstance | undefined;
    protected _sublayers: Array<LayerInstance>;
    /**
     * Creates an instance of LayerInstance.
     *
     * @param {string} id
     * @param {InstanceAPI} iApi
     * @memberof FixtureInstance
     */
    constructor(config: any, iApi: InstanceAPI);
    /**
     * Sets up the internal layer object (ESRI) and initiates the loading process.
     * The promise returned resolves when the object exists (i.e. .esriLayer is populated).
     * This means the layer can be added to the map.
     */
    initiate(): Promise<void>;
    /**
     * Resets the layer class to the state it was in "pre-initialize". Implementers can decide if they want
     * to retain any state (e.g. UIDs/layerTree would be a good idea).
     * Also an appropriate function to remove any event listeners/triggers.
     * This would be called in situations like a layer getting deleted, or in a layer reload (initialize would be called again afterwards).
     * Note this does not remove any layers from the map stack, that must be done by the caller.
     */
    terminate(): Promise<void>;
    /**
     * Attempts to reload the internal layer object (ESRI).
     * Effectively doing a terminate then initiate, and removing/re-adding layer to the map.
     */
    reload(): Promise<void>;
    /**
     * Cancels an in-progress initialize or load of the layer and places it in an Error state.
     * Has no effect on a layer that is loaded, has been terminated, or never initiazed.
     */
    cancelLoad(): void;
    /**
     * If layer is map bound, and has an esri layer in the esri map, remove it from esri map.
     * Typically should only be called by RAMP internals.
     */
    removeEsriLayer(): void;
    /**
     * Provides a promise that resolves when the layer has finished loading. If accessing layer properties that
     * depend on the layer being loaded, wait on this promise before accessing them.
     *
     * @method loadPromise
     * @returns {Promise} resolves when the layer has finished loading
     */
    loadPromise(): Promise<void>;
    /**
     * Provides a promise that resolves when the layer view has been created.
     *
     * @method viewPromise
     * @returns {Promise} resolves when the layer view is created
     */
    viewPromise(): Promise<void>;
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
     * Indicates if the Esri map layer or data layer equivalent exists.
     */
    get layerExists(): boolean;
    /**
     * Gets the fields whose string values should be trimmed.
     * @returns {Array<string>} the field names.
     */
    getFieldsToTrim(): Array<string>;
    /**
     * Provides a tree structure describing the layer and any sublayers,
     * including uid values. Should only be called after loadPromise resolves.
     *
     * @method getLayerTree
     * @returns {TreeNode} the root of the layer tree
     */
    getLayerTree(): TreeNode;
    /**
     * Provides the spatial reference of the layer
     *
     * @returns {SpatialReference} the layer spatial reference in RAMP API format
     */
    getSR(): SpatialReference;
    /**
     * Returns the visibility of the layer.
     *
     * @returns {Boolean} visibility of the layer
     */
    get visibility(): boolean;
    /**
     * Applies visibility to layer.
     *
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean);
    /**
     * Returns the opacity of the layer.
     *
     * @returns {Boolean} opacity of the layer
     */
    get opacity(): number;
    /**
     * Applies opacity to layer.
     *
     * @param {Boolean} value the new opacity setting
     */
    set opacity(value: number);
    /**
     * Returns the scale set (min and max visible scale) of the layer.
     *
     * @returns {ScaleSet} scale set of the layer
     */
    get scaleSet(): ScaleSet;
    /**
     * Set the scale set (min and max visible scale) of the layer.
     *
     * @param {ScaleSet} scaleSet the new scale set of the layer
     */
    set scaleSet(scaleSet: ScaleSet);
    /**
     * Indicates if the layer is not in a visible scale range.
     *
     * @function isOffscale
     * @param {Integer} [testScale] optional scale to test against. if not provided, current map scale is used.
     * @returns {Boolean} true if the layer is outside of a visible scale range
     */
    isOffscale(testScale?: number | undefined): boolean;
    /**
     * Cause the map to zoom to a scale level where the layer is visible.
     *
     * @returns {Promise} resolves when map has finished zooming
     */
    zoomToVisibleScale(): Promise<void>;
    /**
     * Cause the map to zoom to this layer's boundary extent
     *
     * @returns {Promise} resolves when map has finished zooming
     */
    zoomToLayerBoundary(): Promise<void>;
    /**
     * Get the click tolerance in pixels for this layer
     *
     * @returns {number} the mouse tolerance of this layer
     */
    get mouseTolerance(): number;
    /**
     * Set the mouse tolerance for this layer in pixels
     *
     * @param {Integer} tolerance the new mouse tolerance
     */
    set mouseTolerance(tolerance: number);
    /**
     * Get the touch tolerance in pixels for this layer
     *
     * @returns {number} the touch tolerance of this layer
     */
    get touchTolerance(): number;
    /**
     * Set the touch tolerance in pixels for this layer
     *
     * @param {Integer} tolerance the new touch tolerance
     */
    set touchTolerance(tolerance: number);
    /**
     * Return the draw order for the layer, if applicable
     */
    get drawOrder(): Array<DrawOrder>;
    /**
     * Indicates if layer should participate in an identify request.
     */
    canIdentify(): boolean;
    /**
     * Given the attributes of a feature of this layer, returns the name of that feature.
     * Valid only for layers that support attributes.
     *
     * @param attributes attribute values
     * @returns the name
     */
    nameValue(attributes: Attributes): string;
    /**
     * DEPRECIATED #2595
     * Use maptipValue
     */
    tooltipValue(attributes: Attributes): string;
    /**
     * Given the attributes of a feature of this layer, returns the maptip of that feature.
     * Valid only for layers that support attributes.
     *
     * @param attributes attribute values
     * @returns the name
     */
    maptipValue(attributes: Attributes): string;
    /**
     * Baseline identify function for layers that do not support identify.
     * Will return an empty result. Layers that support identify should override this method.
     * Note: implementations that return real data must make that data reactive()
     *
     * @param options not used, present for nice signature of overrided function
     * @returns {Array} an empty result set
     */
    runIdentify(options: IdentifyParameters): Array<IdentifyResult>;
    /**
     * Invokes the process to get the full set of attribute values for the layer.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of attribute values
     */
    getAttributes(): Promise<AttributeSet>;
    /**
     * Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.
     */
    abortAttributeLoad(): void;
    /**
     * Requests that any downloaded attribute sets or cached geometry be removed from memory. The next requests will pull from the server again.
     */
    clearFeatureCache(): void;
    /**
     * The number of attributes currently downloaded (will update as download progresses)
     * @returns current download count
     */
    downloadedAttributes(): number;
    /**
     * Indicates if the attribute load has been aborted.
     * @returns boolean if the process has been stopped
     */
    attribLoadAborted(): boolean;
    /**
     * Invokes the process to get the full set of attribute values for the layer,
     * formatted in a tabular format. Additional data properties are also included.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of tabular attribute values
     */
    getTabularAttributes(): Promise<TabularAttributeSet>;
    /**
     * Gets information on a graphic in the most efficient way possible. Options object properties (each defaults to false):
     * - getGeom ; a boolean to indicate if the result should include graphic geometry
     * - getAttribs ; a boolean to indicate if the result should include graphic attributes
     * - getStyle ; a boolean to indicate if the result should graphical styling information
     * - forZoom ; a boolean to indicate if the geometry is for zooming. Only used for Point / Multipoint geometries.
     *
     * All option properties are optional and default to false
     *
     * @param {Integer} objectId the object id of the graphic to find
     * @param {GetGraphicParams} options options object for the request, see above
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
     * Returns the value of a named SQL filter for the layer.
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
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions?: Array<string>): void;
    /**
     * Gets array of object ids that currently pass any filters for the layer
     *
     * @param {Array} [exclusions] list of any filters keys to exclude from the result. omission includes all filters
     * @param {Extent} [extent] if provided, the result list will only include features intersecting the extent
     * @returns {Promise} resolves with array of object ids that pass the filter. if no filters are active, resolves with undefined.
     */
    getFilterOIDs(exclusions?: Array<string>, extent?: Extent | undefined): Promise<Array<number> | undefined>;
    /**
     * Gets the extent of the geometry for a given object id.
     * Only valid for feature layers. Not applicable to point geometry.
     *
     * @param objectId the object id of the feature in question
     * @returns {Promise} resolves with the extent of the desired feature's geometry. Undefined for invalid requests
     */
    getGraphicExtent(objectId: number): Promise<Extent | undefined>;
    /**
     * Attempts to find the local (client side) geometry for a given object id.
     * Only valid for feature layers.
     *
     * @param objectId the object id of the feature in question
     * @returns {Promise} resolves with the geometry of the desired feature. Undefined if the feature is not local or request is invalid.
     */
    getLocalGeometry(objectId: number): Promise<BaseGeometry | undefined>;
    /**
     * Will zoom the map to the geometry for a given object id.
     * Only valid for layers that support features
     *
     * @param objectId the object id of the feature in question
     * @returns {Promise} resolves with a boolean when the zoom finishes. The value indicates if the zoom was successful
     */
    zoomToFeature(objectId: number): Promise<boolean>;
    /**
     * Get the parent layer for this layer
     * Only supported for sublayers
     *
     * @returns {LayerInstance | undefined} the parent layer of this layer
     */
    get parentLayer(): LayerInstance | undefined;
    /**
     * Set the parent layer for this layer
     * Only supported for sublayers
     *
     * @param {LayerInstance | undefined} layer the new parent layer for this layer
     */
    set parentLayer(layer: LayerInstance | undefined);
    /**
     * Get the sublayers for this layer
     *
     * @returns {Array<LayerInstance>} the sublayers of this layer
     */
    get sublayers(): Array<LayerInstance>;
    /**
     * Initiates actions after layer load.
     * Should generally only be called internally by the RAMP core.
     */
    onLoad(): void;
    /**
     * Initiates actions after layer load error.
     * Should generally only be called internally by the RAMP core.
     * @param {boolean} [genuineError=true] Flag to detect error setting due to manual cancellation. Only genuine errors will raise notifications.
     */
    onError(genuineError?: boolean): void;
    /**
     * Updates layer load state and raises events.
     * Should generally only be called internally by the RAMP core.
     * @param {LayerState} newState load state the layer is entering
     * @param {Boolean} [userCancel=false] optional flag to indicate if an error state was intentional due to a user cancel request
     */
    updateLayerState(newState: LayerState, userCancel?: boolean): void;
    /**
     * Updates layer draw state and raises events.
     * Should generally only be called internally by the RAMP core.
     */
    updateDrawState(newState: DrawState): void;
    /**
     * Updates layer layer state and raises events.
     * Should generally only be called internally by the RAMP core.
     */
    updateInitiationState(newState: InitiationState): void;
    /**
     * Finds an sublayer index corresponding to the given uid.
     * -1 indicates the uid targets the root layer
     *
     * @private
     * @param {string} uid the uid we want the index for
     * @returns {number} the integer index of the uid
     */
    private uidToIdx;
    /**
     * Attempts to get an sublayer based on the index or uid provided.
     *
     * @private
     * @param {number | string} layerIdx the uid or numeric index of the item we are interested in
     * @returns {LayerInstance | undefined} the matching feature class object, or undefined if the root was requested
     */
    getSublayer(layerIdx: number | string): LayerInstance | undefined;
    /**
     * Check if layer controls is available on this layer.
     *
     * @param {LayerControl} control the layer control to check
     * @returns {boolean} Indicates if the given control is enabled on this layer
     */
    controlAvailable(control: LayerControl): boolean;
}
