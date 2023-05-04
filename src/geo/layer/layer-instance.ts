/* eslint-disable @typescript-eslint/no-unused-vars */

import { APIScope, InstanceAPI } from '@/api/internal';
import {
    DataFormat,
    DrawState,
    Extent,
    GeometryType,
    Graphic,
    InitiationState,
    LayerControl,
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
    FieldDefinition,
    GetGraphicParams,
    IdentifyParameters,
    IdentifyResult,
    LegendSymbology,
    TabularAttributeSet
} from '@/geo/api';

/**
 * A base class for Layer subclasses. It provides some utility functions to Layer and also gives access to `$iApi` and `$vApp` globals.
 * Mostly it exposes stub methods on LayerBase; this is because layer subclasses can be wildly different, so we don't
 * have a pile of common things to put here. The stubs will help debugging as they will alert devs when they have not
 * implemented something. The stubs also allow us to get intellisense / typescript happiness when dealing with common
 * layer variables typed as LayerInstance.
 *
 * @export
 * @class LayerInstance
 * @extends {APIScope}
 */
export class LayerInstance extends APIScope {
    config: any = {};

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
     * Index of the layer. Aligns to index of arcgis server, or defaults to 0 on other layers
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
     * Feature count (-1 represents undefined / unknown)
     */
    featureCount: number;

    /**
     * Array of field definitions about the given layer's fields. Non-feature layers will have empty arrays.
     */
    fields: Array<FieldDefinition>;

    /**
     * Field name that contains value considered the name of a feature. Not applicable for non-feature layers.
     */
    nameField: string;

    /**
     * Field name that contains the object ID of a feature. Not applicable for non-feature layers.
     */
    oidField: string;

    /**
     * Object that contains values for the expected draw/response time.
     */
    expectedTime: {
        draw: number;
        load: number;
    };

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
     * If the layer should show hovertips on the map
     */
    hovertips: boolean;

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
    extent: Extent | undefined; // layer extent

    protected _parentLayer: LayerInstance | undefined;
    protected _sublayers: Array<LayerInstance>;

    /**
     * Creates an instance of LayerInstance.
     *
     * @param {string} id
     * @param {InstanceAPI} iApi
     * @memberof FixtureInstance
     */
    constructor(config: any, iApi: InstanceAPI) {
        super(iApi);

        this.config = config;

        this.id = ''; // take from config here?
        this.uid = ''; // shutting up typescript. will get set somewhere else.
        this.name = 'error';
        this.layerState = LayerState.NEW;
        this.drawState = DrawState.NOT_LOADED;
        this.initiationState = InitiationState.NEW;
        this.layerIdx = -1; // default value
        this.layerFormat = LayerFormat.UNKNOWN;
        this.layerType = LayerType.UNKNOWN;
        this.dataFormat = DataFormat.UNKNOWN;
        this.supportsIdentify = false; // this is updated by subclasses as they will know the real deal.
        this.identifyMode = LayerIdentifyMode.NONE;
        this.supportsFeatures = false;
        this.featureCount = -1;
        this.fields = [];
        this.nameField = '';
        this.oidField = '';
        this.supportsSublayers = false;
        this.isSublayer = false;
        this.isRemoved = false;
        this.isFile = false;
        this.isCosmetic = config.cosmetic || false;
        this.userAdded = false;
        this.identify = false; // will be updated later based on config/supportsIdentify value
        this.hovertips = config.state?.hovertips ?? true;
        this.geomType = GeometryType.UNKNOWN;
        this.legend = [];
        this._sublayers = [];
        this.expectedTime = { draw: 0, load: 0 };
    }

    /**
     * Sets up the internal layer object (ESRI) and initiates the loading process.
     * The promise returned resolves when the object exists (i.e. .esriLayer is populated).
     * This means the layer can be added to the map.
     */
    async initiate(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Resets the layer class to the state it was in "pre-initialize". Implementers can decide if they want
     * to retain any state (e.g. UIDs/layerTree would be a good idea).
     * Also an appropriate function to remove any event listeners/triggers.
     * This would be called in situations like a layer getting deleted, or in a layer reload (initialize would be called again afterwards).
     * Note this does not remove any layers from the map stack, that must be done by the caller.
     */
    async terminate(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Attempts to reload the internal layer object (ESRI).
     * Effectively doing a terminate then initiate, and removing/re-adding layer to the map.
     */
    async reload(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Provides a promise that resolves when the layer has finished loading. If accessing layer properties that
     * depend on the layer being loaded, wait on this promise before accessing them.
     *
     * @method loadPromise
     * @returns {Promise} resolves when the layer has finished loading
     */
    loadPromise(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Indicates if the layer is in a state that is makes sense to interact with.
     * I.e. False if layer has not done it's initial load, or is in error state.
     *
     * @returns {Boolean} true if layer is in an interactive state
     */
    get isLoaded(): boolean {
        return false;
    }

    /**
     * Indicates if the Esri map layer exists.
     */
    get layerExists(): boolean {
        return false;
    }

    /**
     * Provides a tree structure describing the layer and any sublayers,
     * including uid values. Should only be called after loadPromise resolves.
     *
     * @method getLayerTree
     * @returns {TreeNode} the root of the layer tree
     */
    getLayerTree(): TreeNode {
        return new TreeNode(
            0,
            'Fake tree',
            'getLayerTree() was not implemented in layer'
        );
    }

    /**
     * Returns the visibility of the layer.
     *
     * @returns {Boolean} visibility of the layer
     */
    get visibility(): boolean {
        return false;
    }

    /**
     * Applies visibility to layer.
     *
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean) {}

    /**
     * Returns the opacity of the layer.
     *
     * @returns {Boolean} opacity of the layer
     */
    get opacity(): number {
        return 0;
    }

    /**
     * Applies opacity to layer.
     *
     * @param {Boolean} value the new opacity setting
     */
    set opacity(value: number) {}

    /**
     * Returns the scale set (min and max visible scale) of the layer.
     *
     * @returns {ScaleSet} scale set of the layer
     */
    get scaleSet(): ScaleSet {
        return new ScaleSet();
    }

    /**
     * Set the scale set (min and max visible scale) of the layer.
     *
     * @param {ScaleSet} scaleSet the new scale set of the layer
     */
    set scaleSet(scaleSet: ScaleSet) {}

    /**
     * Indicates if the layer is not in a visible scale range.
     *
     * @function isOffscale
     * @param {Integer} [testScale] optional scale to test against. if not provided, current map scale is used.
     * @returns {Boolean} true if the layer is outside of a visible scale range
     */
    isOffscale(testScale: number | undefined = undefined): boolean {
        return false;
    }

    /**
     * Cause the map to zoom to a scale level where the layer is visible.
     *
     * @returns {Promise} resolves when map has finished zooming
     */
    zoomToVisibleScale(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Cause the map to zoom to this layer's boundary extent
     *
     * @returns {Promise} resolves when map has finished zooming
     */
    zoomToLayerBoundary(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Get the click tolerance in pixels for this layer
     *
     * @returns {number} the mouse tolerance of this layer
     */
    get mouseTolerance(): number {
        return 0;
    }

    /**
     * Set the mouse tolerance for this layer in pixels
     *
     * @param {Integer} tolerance the new mouse tolerance
     */
    set mouseTolerance(tolerance: number) {}

    /**
     * Get the touch tolerance in pixels for this layer
     *
     * @returns {number} the touch tolerance of this layer
     */
    get touchTolerance(): number {
        return 0;
    }

    /**
     * Set the touch tolerance in pixels for this layer
     *
     * @param {Integer} tolerance the new touch tolerance
     */
    set touchTolerance(tolerance: number) {}

    /**
     * Return the draw order for the layer, if applicable
     */
    get drawOrder(): Array<DrawOrder> {
        return [];
    }

    /**
     * Indicates if layer should participate in an identify request.
     */
    canIdentify(): boolean {
        return false;
    }

    /**
     * Baseline identify function for layers that do not support identify.
     * Will return an empty result. Layers that support identify should override this method.
     * Note: implementations that return real data must make that data reactive()
     *
     * @param options not used, present for nice signature of overrided function
     * @returns {Array} an empty result set
     */
    runIdentify(options: IdentifyParameters): Array<IdentifyResult> {
        return [];
    }

    /**
     * Invokes the process to get the full set of attribute values for the layer.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get attributes for. Uses first/only if omitted.
     * @returns {Promise} resolves with set of attribute values
     */
    getAttributes(
        layerIdx: number | string | undefined = undefined
    ): Promise<AttributeSet> {
        return Promise.resolve({
            features: [],
            oidIndex: {}
        });
    }

    /**
     * Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.
     *
     */
    abortAttributeLoad(): void {}

    /**
     * Requests that any downloaded attribute sets or cached geometry be removed from memory. The next requests will pull from the server again.
     *
     */
    clearFeatureCache(): void {}

    // formerly known as getFormattedAttributes
    /**
     * Invokes the process to get the full set of attribute values for the layer,
     * formatted in a tabular format. Additional data properties are also included.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of tabular attribute values
     */
    getTabularAttributes(): Promise<TabularAttributeSet> {
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
     *
     * @param {Integer} objectId the object id of the graphic to find
     * @param {Object} options options object for the request, see above
     * @returns {Promise} resolves with a Graphic containing the requested information
     */
    getGraphic(objectId: number, options: GetGraphicParams): Promise<Graphic> {
        return Promise.resolve(new Graphic(new NoGeometry()));
    }

    /**
     * Gets the icon for a specific feature, as an SVG string.
     *
     * @param {Integer} objectId the object id of the feature to find
     * @returns {Promise} resolves with an svg string encoding of the icon
     */
    getIcon(objectId: number): Promise<string> {
        return Promise.resolve('');
    }

    /**
     * Returns the value of a named SQL filter for the layer.
     *
     * @param {String} filterKey the filter key / named filter to view
     * @returns {String} the value of the where clause for the filter. Empty string if not defined.
     */
    getSqlFilter(filterKey: string): string {
        return '';
    }

    /**
     * Applies an SQL filter to the layer. Will overwrite any existing filter for the given key.
     * Use `1=2` for a "hide all" where clause.
     *
     * @param {String} filterKey the filter key / named filter to apply the SQL to
     * @param {String} whereClause the WHERE clause of the filter
     */
    setSqlFilter(filterKey: string, whereClause: string): void {}

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {}

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
        return Promise.resolve(undefined);
    }

    /**
     * Get the parent layer for this layer
     * Only supported for sublayers
     *
     * @returns {LayerInstance | undefined} the parent layer of this layer
     */
    get parentLayer(): LayerInstance | undefined {
        if (!this.isSublayer) {
            throw new Error(
                'Attempted to get parent layer of a non-sublayer object'
            );
        } else {
            return this._parentLayer;
        }
    }

    /**
     * Set the parent layer for this layer
     * Only supported for sublayers
     *
     * @param {LayerInstance | undefined} layer the new parent layer for this layer
     */
    set parentLayer(layer: LayerInstance | undefined) {
        if (!this.isSublayer && layer) {
            throw new Error(
                'Attempted to set parent layer for a non-sublayer object'
            );
        } else {
            this._parentLayer = layer;
        }
    }

    /**
     * Get the sublayers for this layer
     *
     * @returns {Array<LayerInstance>} the sublayers of this layer
     */
    get sublayers(): Array<LayerInstance> {
        return this._sublayers;
    }

    /**
     * Initiates actions after layer load.
     * Should generally only be called internally by the RAMP core.
     */
    onLoad(): void {}

    /**
     * Initiates actions after layer load error.
     * Should generally only be called internally by the RAMP core.
     */
    onError(): void {}

    /**
     * Updates layer load state and raises events.
     * Should generally only be called internally by the RAMP core.
     */
    updateLayerState(newState: LayerState): void {}

    /**
     * Updates layer draw state and raises events.
     * Should generally only be called internally by the RAMP core.
     */
    updateDrawState(newState: DrawState): void {}

    /**
     * Updates layer layer state and raises events.
     * Should generally only be called internally by the RAMP core.
     */
    updateInitiationState(newState: InitiationState): void {}

    /**
     * Finds an sublayer index corresponding to the given uid.
     * -1 indicates the uid targets the root layer
     *
     * @private
     * @param {string} uid the uid we want the index for
     * @returns {number} the integer index of the uid
     */
    private uidToIdx(uid: string): number {
        if (uid === this.uid) {
            return -1;
        } else {
            const sublayerIdx: number = this._sublayers.findIndex(
                sublayer => sublayer?.uid === uid
            );
            if (sublayerIdx === -1) {
                // no match
                throw new Error(
                    `Attempt to access non-existing unique id [layerid ${this.id}, uid ${uid}]`
                );
            } else {
                return sublayerIdx;
            }
        }
    }

    /**
     * Attempts to get an sublayer based on the index or uid provided.
     *
     * @private
     * @param {number | string} layerIdx the uid or numeric index of the item we are interested in
     * @returns {LayerInstance | undefined} the matching feature class object, or undefined if the root was requested
     */
    getSublayer(layerIdx: number | string): LayerInstance | undefined {
        // highscool cs IF party

        // check if this layer supports sublayers
        if (!this.supportsSublayers) {
            console.warn(
                `Attempted to call getSublayer on a layer (layer id: ${this.id}) that does not support FCs`
            );
            return undefined;
        }

        let workingIdx: number;
        if (typeof layerIdx === 'string') {
            // uid request
            workingIdx = this.uidToIdx(layerIdx);
        } else {
            // index request
            workingIdx = layerIdx;
        }

        if (this._sublayers[workingIdx] === undefined) {
            // passed a non-existing index/uid
            throw new Error(
                `Attempt to access non-existing layer index [layerid ${this.id}, lookup value ${layerIdx}]`
            );
        }

        return this._sublayers[workingIdx];
    }

    /**
     * Check if layer controls is available on this layer.
     *
     * @param {LayerControl} control the layer control to check
     * @returns {boolean} Indicates if the given control is enabled on this layer
     */
    controlAvailable(control: LayerControl): boolean {
        const controls:
            | {
                  controls: Array<string>;
                  disabledControls: Array<string>;
              }
            | undefined = this.$iApi.geo.layer.getLayerControls(this.id);

        // check disabled controls first
        if (controls?.disabledControls?.includes(control)) {
            return false;
        }
        return controls?.controls.includes(control) ?? false;
    }
}
