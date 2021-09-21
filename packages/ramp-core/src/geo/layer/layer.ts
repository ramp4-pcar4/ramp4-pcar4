// layers api and other public, general layer things.

import { APIScope, FileUtils, InstanceAPI, OgcUtils } from '@/api/internal';
import {
    AttributeSet,
    Extent,
    FieldDefinition,
    GetGraphicParams,
    GetGraphicResult,
    IdentifyParameters,
    IdentifyResultSet,
    LayerState,
    LegendSymbology,
    ScaleSet,
    TabularAttributeSet,
    TreeNode
} from '@/geo/api';
import { LayerStore } from '@/store/modules/layer';

// CUSTOM-LAYER
// A constructor returning an object implementing LayerBase interface.
// type ILayerBase = new (config: any, iApi: InstanceAPI) => LayerBase;

// TODO revist how useful this is. LayerInstance implements LayerBase so its very similar to ILayerBase.
//      look at the Base vs Instance stuff in the fixtures section. does it still make sense?
//      This TODO becomes irrelevant if we don't go forward with custom layers and drop LayerBase for good.
/**
 * A constructor returning an instance of LayerInstance class.
 */
type ILayerInstance = new (config: any, iApi: InstanceAPI) => LayerInstance;

// this probably becomes the vuex store object if we convert?
// metadata to store and track our layer definitions
class LayerDef {
    // layerConstructor: ILayerBase | undefined; // CUSTOM-LAYER
    strongLayerConstructor: ILayerInstance | undefined; // would be a layer def from inside RAMP
    rawBase: boolean = false; // true if constructor is from outside the core and requires updateBaseToInstance
    loadPromise: Promise<any> | undefined; // resolves when layer definition has loaded
    id: string;
    private api: InstanceAPI;

    constructor(id: string, api: InstanceAPI) {
        this.id = id;
        this.api = api;
        this.loadPromise = Promise.resolve();
    }

    // TODO figure out the config. if we have the config present for instantiation of the layer object, or we
    //      push it off to a "load layer" function which could be used for reloads as well.
    async generateLayer(config: any): Promise<LayerInstance> {
        await this.loadPromise;

        // CUSTOM-LAYER
        /*
        if (this.rawBase && this.layerConstructor) {
            return LayerInstance.updateBaseToInstance(
                new this.layerConstructor(config, this.api),
                this.id,
                this.api
            );
        } else */

        if (this.strongLayerConstructor) {
            return new this.strongLayerConstructor(config, this.api);
        } else {
            throw new Error(
                `Layer Definition bug. A definition promise resolved but no definition exists. Definition id ${this.id}`
            );
        }
    }
}

// this class represents the functions that exist on rampApi.geo.layer
export class LayerAPI extends APIScope {
    // stores any layer definitions that have been added. this would migrate to a vuex store if we apply that here
    // NOTE probably want to change this from LayerBase to ILayerBase.
    //      we want to store constructors, not instances of layers.
    _layerDefStore: { [key: string]: LayerDef } = {};

    files: FileUtils;
    ogc: OgcUtils;

    constructor(iApi: InstanceAPI) {
        super(iApi);
        this.files = new FileUtils(iApi);
        this.ogc = new OgcUtils(iApi);
    }

    // NOTE also might want to store the Promises that get generated when creating these definitions.
    //      when we request a new layer, would be good to be able to see if a definition request
    //      is pending, instead of just failing on a "no definition found" case.

    // CUSTOM-LAYER
    // stuff removed from addLayerDef params & jsdoc
    //
    // * Loads a (built-in) layer definition or adds supplied layer definition into the R4MP instance.
    // * @param {ILayereBase} [constructor]
    // async addLayerDef(id: string, constructor?: ILayerBase): Promise<string> {

    /**
     * Loads a (built-in) layer definition into the R4MP instance.
     *
     * @param {string} id
     * @returns {Promise<string>} the id, resolves after definition is loaded
     * @memberof LayerAPI
     */
    async addLayerDef(id: string): Promise<string> {
        // TODO revisit if the return value should be LayerBase. This is registering a layer definition
        //      (i.e. a blueprint), so the layer id might be more appropriate, or void. Person would
        //      use the create layer on LayerAPI to make an actual layer.
        //      Also might consider changing the type to ILayerBase, as returning the constructor makes a bit more sense.
        //      This TODO would become irrelevant if custom layers are not implemented.

        // if the layer def already exist, do nothing and just return it
        // TODO in vuex world, would be a store check
        // if (id in this.$vApp.$store.get<FixtureBaseSet>(`fixture/items`)!) {
        if (this._layerDefStore[id]) {
            console.warn(`Encountered duplicate layer registration for ${id}`);
            return id;
        }

        const layerDef = new LayerDef(id, this.$iApi);

        // CUSTOM-LAYER
        // only need to provide fixture constructors for external fixtures since internal ones are loaded automatically
        /*
        if (constructor) {
            if (typeof constructor !== 'function') {
                throw new Error('malformed layer definition constructor');
            }

            layerDef.layerConstructor = constructor;
            layerDef.rawBase = true;
            layerDef.loadPromise = Promise.resolve();
            this._layerDefStore[id] = layerDef;

        } else { */

        // trickery. when the promise resolves, we know layerDef.layerConstructor will have a value.
        layerDef.loadPromise = this.magicLoader(layerDef);

        // store the def in the registry before blocking
        this._layerDefStore[id] = layerDef;
        await layerDef.loadPromise;

        return id;
    }

    private async magicLoader(layerDef: LayerDef): Promise<void> {
        // TODO might need some magic in the webpack to copy stuff over.
        //      we might also need to structure our layers folder to be by-id
        // perform a dynamic webpack import of a internal fixture (allows for code splitting)
        layerDef.strongLayerConstructor = (
            await import(/* webpackChunkName: "[request]" */ `@/geo/layer/${layerDef.id}/index.ts`)
        ).default;
    }

    layerDefExists(id: string): boolean {
        return !!this._layerDefStore[id];
    }

    async createLayer(config: any): Promise<LayerInstance> {
        // TODO update the type of config? want to type it as RampLayerConfig but we could have 3rd party random thing passed in
        if (!this.layerDefExists(config.layerType)) {
            throw new Error(`No layer definition loaded for layer type ${config.layerType}`);
        }
        // console.log('CreateLayer - this is the layer def from the store')

        return this._layerDefStore[config.layerType].generateLayer(config);
    }

    /**
     * Access an instantiated layer object.
     *
     * @param layerId layer id or uid of the layer
     */
    getLayer(layerId: string): LayerInstance {
        // since this would be a fairly common thing to want to do via the instance API,
        // this function acts as a nice / obvious endpoint and saves caller
        // from figuring out how to use the store.

        let layer: LayerInstance | undefined;

        // test if param is layer id
        layer = this.$iApi.$vApp.$store.get(LayerStore.getLayerById, layerId);
        if (!layer) {
            // test if layer is a string uid
            layer = this.$iApi.$vApp.$store.get(LayerStore.getLayerByUid, layerId);
        }

        if (!layer) {
            // TODO better to return undefined and console.error?
            //      Returning undefined means function has two return types,
            //      and makes caller always validate/cast to shut up typescript.
            throw new Error(`Could not find layer associated with '${layerId}'`);
        }

        return layer;
    }

    // TODO consider if we need a defaulting scenario. This might tie in with
    //      people wanting to override core layer types; they would omit then provide
    //      the custom layer definition class.
    //      see fixture api, addDefaultFixtures method
}

// TODO put in a separate file?

// CUSTOM-LAYER
// stuff removed from class doc and signature
//
//  * @implements {LayerBase}
// export class LayerInstance extends APIScope implements LayerBase {

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
    get layerType(): string {
        return '';
    }
    config: any = {};

    // CUSTOM-LAYER
    /**
     * Adds missing functions and properties to the object implementing FixtureBase interface.
     * This is only needed for external fixtures as they can't inherit from FixtureInstance.
     *
     * TODO: If you know a better way to deep-mixin props/getters/functions from a class into another class instance, please tell me. I honestly don't know 🤷‍♂️.
     *
     * @static
     * @param {LayerBase} value
     * @param {string} id
     * @param {InstanceAPI} $iApi
     * @returns {LayerInstance}
     * @memberof LayerInstance
     */
    /*
    static updateBaseToInstance(
        value: LayerBase,
        config: any,
        $iApi: InstanceAPI
    ): LayerInstance {
        const instance = new LayerInstance(config, $iApi);

        Object.defineProperties(value, {
            config: { value: config },
            $iApi: { value: $iApi },
            $vApp: {
                get(): Vue {
                    return instance.$vApp;
                }
            },
            getFeatureCount: {
                value: value.getFeatureCount
                    ? value.getFeatureCount
                    : instance.getFeatureCount
            },
            getGraphic: {
                value: value.getGraphic ? value.getGraphic : instance.getGraphic
            },
            getIcon: {
                value: value.getIcon ? value.getIcon : instance.getIcon
            },
            getOidField: {
                value: value.getOidField
                    ? value.getOidField
                    : instance.getOidField
            },
            getNameField: {
                value: value.getNameField
                    ? value.getNameField
                    : instance.getNameField
            },
            getGeomType: {
                value: value.getGeomType
                    ? value.getGeomType
                    : instance.getGeomType
            },
            getFields: {
                value: value.getFields ? value.getFields : instance.getFields
            },
            getAttributes: {
                value: value.getAttributes
                    ? value.getAttributes
                    : instance.getAttributes
            },
            getTabularAttributes: {
                value: value.getTabularAttributes
                    ? value.getTabularAttributes
                    : instance.getTabularAttributes
            },
            abortAttributeLoad: {
                value: value.abortAttributeLoad
                    ? value.abortAttributeLoad
                    : instance.abortAttributeLoad
            },
            destroyAttributes: {
                value: value.destroyAttributes
                    ? value.destroyAttributes
                    : instance.destroyAttributes
            },
            applySqlFilter: {
                value: value.applySqlFilter
                    ? value.applySqlFilter
                    : instance.applySqlFilter
            },
            getFilterOIDs: {
                value: value.getFilterOIDs
                    ? value.getFilterOIDs
                    : instance.getFilterOIDs
            },
            getSqlFilter: {
                value: value.getSqlFilter
                    ? value.getSqlFilter
                    : instance.getSqlFilter
            },
            setSqlFilter: {
                value: value.setSqlFilter
                    ? value.setSqlFilter
                    : instance.setSqlFilter
            }
            // remove: { value: instance.remove },
            // extend: { value: instance.extend },
        });

        return value as LayerInstance;
    }
    */

    /**
     * ID of this fixture.
     *
     * @type {string}
     * @memberof FixtureInstance
     */
    id: string;

    uid: string;

    supportsIdentify: boolean;

    state: LayerState;

    isFile: boolean;

    initialized: boolean;

    /**
     * Creates an instance of LayerInstance.
     *
     * @param {string} id
     * @param {InstanceAPI} iApi
     * @memberof FixtureInstance
     */
    constructor(config: any, iApi: InstanceAPI) {
        super(iApi);
        this.id = ''; // take from config here?
        this.uid = ''; // shutting up typescript. will get set somewhere else. // TODO verify setting, move here if that is smarter.
        this.supportsIdentify = false; // this is updated by subclasses as they will know the real deal.
        this.state = LayerState.NEW;
        this.config = config;
        this.isFile = false;
        this.initialized = false;
    }

    esriLayer: __esri.Layer | undefined;
    esriView: __esri.LayerView | undefined;

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
     * @method isLayerLoaded
     * @returns {Promise} resolves when the layer has finished loading
     */
    isLayerLoaded(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Provides a tree structure describing the layer and any sublayers,
     * including uid values. Should only be called after isLayerLoaded resolves.
     *
     * @method getLayerTree
     * @returns {TreeNode} the root of the layer tree
     */
    getLayerTree(): TreeNode {
        return new TreeNode(0, 'Fake tree', 'getLayerTree() was not implemented in layer');
    }

    /**
     * Indicates if the layer is in a state that is makes sense to interact with.
     * I.e. False if layer has not done it's initial load, or is in error state.
     *
     * @method isValidState
     * @returns {Boolean} true if layer is in an interactive state
     */
    isValidState(): boolean {
        return false;
    }

    /**
     * Returns the name of the layer/sublayer.
     *
     * @function getName
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the name for. Uses first/only if omitted.
     * @returns {String} name of the layer/sublayer
     */
    getName(layerIdx: number | string | undefined = undefined): string {
        return 'error';
    }

    /**
     * Returns the visibility of the layer/sublayer.
     *
     * @function getVisibility
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get visibility for. Uses first/only if omitted.
     * @returns {Boolean} visibility of the layer/sublayer
     */
    getVisibility(layerIdx: number | string | undefined = undefined): boolean {
        return false;
    }

    /**
     * Applies visibility to feature class.
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get visibility for. Uses first/only if omitted.
     */
    setVisibility(value: boolean, layerIdx: number | string | undefined = undefined): void {}

    /**
     * Returns the opacity of the layer/sublayer.
     *
     * @function getOpacity
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get opacity for. Uses first/only if omitted.
     * @returns {Boolean} opacity of the layer/sublayer
     */
    getOpacity(layerIdx: number | string | undefined = undefined): number {
        return 0;
    }

    /**
     * Applies opacity to feature class.
     *
     * @function setOpacity
     * @param {Decimal} value the new opacity setting. Valid value is anything between 0 and 1, inclusive.
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get opacity for. Uses first/only if omitted.
     */
    setOpacity(value: number, layerIdx: number | string | undefined = undefined): void {}

    /**
     * Returns the scale set (min and max visible scale) of the layer/sublayer.
     *
     * @function getScaleSet
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the scale set for. Uses first/only if omitted.
     * @returns {ScaleSet} scale set of the layer/sublayer
     */
    getScaleSet(layerIdx: number | string | undefined = undefined): ScaleSet {
        return new ScaleSet();
    }

    /**
     * Indicates if the layer/sublayer is not in a visible scale range.
     *
     * @function isOffscale
     * @param {Integer | String} [layerIdx] targets a layer index or uid to check offscale status for. Uses first/only if omitted.
     * @param {Integer} [testScale] optional scale to test against. if not provided, current map scale is used.
     * @returns {Boolean} true if the layer/sublayer is outside of a visible scale range
     */
    isOffscale(
        layerIdx: number | string | undefined = undefined,
        testScale: number | undefined = undefined
    ): boolean {
        return false;
    }

    /**
     * Cause the map to zoom to a scale level where the layer is visible.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to check offscale status for. Uses first/only if omitted.
     * @returns {Promise} resolves when map has finished zooming
     */
    zoomToVisibleScale(layerIdx: number | string | undefined = undefined): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Indicates if a feature class supports features (false would be an image/raster/etc)
     *
     * @function supportsFeatures
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get visibility for. Uses first/only if omitted.
     * @returns {Boolean} if the layer/sublayer supports features
     */
    supportsFeatures(layerIdx: number | string | undefined = undefined): boolean {
        return false;
    }

    getLegend(layerIdx: number | string | undefined = undefined): Array<LegendSymbology> {
        return [];
    }

    /**
     * Baseline identify function for layers that do not support identify.
     * Will return an empty result. Layers that support identify should override this method.
     *
     * @param options not used, present for nice signature of overrided function
     * @returns {IdentifyResultSet} an empty result set
     */
    identify(options: IdentifyParameters): IdentifyResultSet {
        return {
            results: [],
            done: Promise.resolve(),
            parentUid: this.uid
        };
    }

    /**
     * Gets information on a graphic in the most efficient way possible. Options object properties:
     * - getGeom ; a boolean to indicate if the result should include graphic geometry
     * - getAttribs ; a boolean to indicate if the result should include graphic attributes
     *
     * @param {Integer} objectId the object id of the graphic to find
     * @param {Object} options options object for the request, see above
     * @param {Integer | String} [layerIdx] targets a layer index or uid to find the graphic in. Uses first/only if omitted.
     * @returns {Promise} resolves with a fake graphic containing the requested information
     */
    getGraphic(
        objectId: number,
        options: GetGraphicParams,
        layerIdx: number | string | undefined = undefined
    ): Promise<GetGraphicResult> {
        return Promise.resolve({});
    }

    /**
     * Gets the icon for a specific feature, as an SVG string.
     *
     * @param {Integer} objectId the object id of the feature to find
     * @param {Integer | String} [layerIdx] targets a layer index or uid to find the icon in. Uses first/only if omitted.
     * @returns {Promise} resolves with an svg string encoding of the icon
     */
    getIcon(objectId: number, layerIdx: number | string | undefined = undefined): Promise<string> {
        return Promise.resolve('');
    }

    /**
     * Invokes the process to get the full set of attribute values for the given sublayer.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get attributes for. Uses first/only if omitted.
     * @returns {Promise} resolves with set of attribute values
     */
    getAttributes(layerIdx: number | string | undefined = undefined): Promise<AttributeSet> {
        return Promise.resolve({
            features: [],
            oidIndex: {}
        });
    }

    /**
     * Returns an array of field definitions about the given sublayer's fields. Raster layers will have empty arrays.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get fields for. Uses first/only if omitted.
     * @returns {Array} list of field definitions
     */
    getFields(layerIdx: number | string | undefined = undefined): Array<FieldDefinition> {
        return [];
    }

    /**
     * Returns the geometry type of the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the geometry type of. Uses first/only if omitted.
     * @returns {Array} list of field definitions
     */
    getGeomType(layerIdx: number | string | undefined = undefined): string {
        return 'error';
    }

    /**
     * Returns the name field of the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the name field of. Uses first/only if omitted.
     * @returns {string} name field
     */
    getNameField(layerIdx: number | string | undefined = undefined): string {
        return 'error';
    }

    /**
     * Returns the OID field of the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the OID field of. Uses first/only if omitted.
     * @returns {string} OID field
     */
    getOidField(layerIdx: number | string | undefined = undefined): string {
        return 'error';
    }

    /**
     * Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to stop loading attributes for. Uses first/only if omitted.
     */
    abortAttributeLoad(layerIdx: number | string | undefined = undefined): void {}

    /**
     * Requests that any downloaded attribute sets be removed from memory. The next getAttributes request will pull from the server again.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to detroy attributes for. Uses first/only if omitted.
     */
    destroyAttributes(layerIdx: number | string | undefined = undefined): void {}

    // formerly known as getFormattedAttributes
    /**
     * Invokes the process to get the full set of attribute values for the given sublayer,
     * formatted in a tabular format. Additional data properties are also included.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get tabular attributes for. Uses first/only if omitted.
     * @returns {Promise} resolves with set of tabular attribute values
     */
    getTabularAttributes(
        layerIdx: number | string | undefined = undefined
    ): Promise<TabularAttributeSet> {
        return Promise.resolve({
            columns: [],
            rows: [],
            fields: [],
            oidField: 'error',
            oidIndex: 0 // TODO determine if we need this anymore
        });
    }

    /**
     * Get the feature count for the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the feature count for. Uses first/only if omitted.
     * @returns {Integer} number of features in the sublayer
     */
    getFeatureCount(layerIdx: number | string | undefined = undefined): number {
        return -1;
    }

    /**
     * Returns the value of a named SQL filter for a given sublayer.
     *
     * @param {String} filterKey the filter key / named filter to view
     * @param {Integer | String} [layerIdx] targets a layer index or uid that has the filter. Uses first/only if omitted.
     * @returns {String} the value of the where clause for the filter. Empty string if not defined.
     */
    getSqlFilter(filterKey: string, layerIdx: number | string | undefined = undefined): string {
        return '';
    }

    /**
     * Applies an SQL filter to the layer. Will overwrite any existing filter for the given key.
     * Use `1=2` for a "hide all" where clause.
     *
     * @param {String} filterKey the filter key / named filter to apply the SQL to
     * @param {String} whereClause the WHERE clause of the filter
     * @param {Integer | String} [layerIdx] targets a layer index or uid to apply the filter to. Uses first/only if omitted.
     */
    setSqlFilter(
        filterKey: string,
        whereClause: string,
        layerIdx: number | string | undefined = undefined
    ): void {}

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     * @param {Integer | String} [layerIdx] targets a layer index or uid to update. Uses first/only if omitted.
     */
    applySqlFilter(
        exclusions: Array<string> = [],
        layerIdx: number | string | undefined = undefined
    ): void {}

    /**
     * Gets array of object ids that currently pass any filters for the given sublayer
     *
     * @param {Array} [exclusions] list of any filters keys to exclude from the result. omission includes all filters
     * @param {Extent} [extent] if provided, the result list will only include features intersecting the extent
     * @param {Integer | String} [layerIdx] targets a layer index or uid to inspect. Uses first/only if omitted.
     * @returns {Promise} resolves with array of object ids that pass the filter. if no filters are active, resolves with undefined.
     */
    getFilterOIDs(
        exclusions: Array<string> = [],
        extent: Extent | undefined = undefined,
        layerIdx: number | string | undefined = undefined
    ): Promise<Array<number> | undefined> {
        return Promise.resolve(undefined);
    }

    /**
     * Removes the specified fixture from R4MP instance.
     * This is a proxy to `RAMP.fixture.remove(...)`.
     *
     * @returns {this}
     * @memberof FixtureInstance
     */
    // TODO re-add this if we support removal
    /*
    remove(): this {
        this.$iApi.fixture.remove(this);
        return this;
    }
    */

    /**
     * A helper function to create a "subclass" of the base Vue constructor
     *
     * @param {VueConstructor<Vue>} vueConstructor
     * @param {ComponentOptions<Vue>} [options={}]
     * @param {boolean} [mount=true]
     * @returns {Vue}
     * @memberof FixtureInstance
     */
    // TODO i have no idea what this does, but since layers are not vue componets like fixtures are,
    //      will assume we don't need this
    /*
    extend(vueConstructor: VueConstructor<Vue>, options: ComponentOptions<Vue> = {}, mount: boolean = true): Vue {
        const component = new (Vue.extend(vueConstructor))({
            iApi: this.$iApi,
            ...options,
            propsData: {
                ...options.propsData,
                fixture: this
            }
        });

        component.$mount();

        return component;
    }
    */

    // added?(): void;
    // removed?(): void;
    // initialized?(): void;
    // terminated?(): void;

    /**
     * Returns the fixture config section (JSON) taken from the global config.
     *
     * @readonly
     * @type {*}
     * @memberof FixtureInstance
     */
    // this might return if we vuex thing. for now, config is normal local property
    /*
    get config(): any {
        return this.$vApp.$store.get('config/getFixtureConfig', this.id);
    }
    */
}
