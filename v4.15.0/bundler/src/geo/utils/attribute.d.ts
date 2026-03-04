import { APIScope, InstanceAPI, LayerInstance } from '../../api/internal';
import { Attributes, AttributeSet, BaseGeometry, CompactJson, Extent, FieldDefinition, GetGraphicServiceDetails, RampLayerFieldInfoConfig, RampLayerFieldMetadataConfig, TabularAttributeSet, GeometryType, Graphic } from '../api';
export interface AttributeLoaderDetails {
    supportsLimit?: boolean;
    attribs?: string;
    serviceUrl?: string;
    sourceGraphics?: __esri.Collection<__esri.Graphic>;
    sourceDataJson?: CompactJson;
    maxId?: number;
    batchSize: number;
    oidField: string;
    permanentFilter?: string;
    fieldsToTrim?: Array<string>;
}
/**
 * Arcade data types we are currenlty supporting
 */
type EsriArcadeVarType = 'geometry' | 'number' | 'text' | 'date';
/**
 * Provides methods for handling ESRI-style attributes
 */
export declare class AttributeAPI extends APIScope {
    /**
     * Will populate the object id index for an attribute set.
     *
     * @param attSet attribute set that has features populated
     * @param oidField name of the object id field in the attribute set
     */
    private oidIndexer;
    /**
     * Will load an attribute set from an ArcGIS Server, recursively batching to work around maximum result limits.
     *
     * @param details defines the parameters for what to load
     * @param controller the controller which provides asyncronous hooks into the load, including loaded count and ability to abort
     */
    private arcGisBatchLoad;
    /**
     * Will load an attribute set from an ArcGIS Server layer source.
     *
     * @param details defines the parameters for what to load
     * @param controller the controller which provides asyncronous hooks into the load, including loaded count and ability to abort
     */
    loadArcGisServerAttributes(details: AttributeLoaderDetails, controller: AsynchAttribController): Promise<AttributeSet>;
    /**
     * Will generate an attribute set from a feature layer with local data (i.e. a file layer).
     *
     * @param details defines the parameters for what to load
     * @param controller the controller which provides asyncronous hooks into the load, including loaded count and ability to abort
     */
    loadGraphicsAttributes(details: AttributeLoaderDetails, controller: AsynchAttribController): Promise<AttributeSet>;
    /**
     * Will generate an attribute set from a compact json object. This is our base format for
     * DataLayer sources that are not hosted on ArcGIS server. Provided sourceDataJson on the details
     * parameter has already been cleaned and has object ids inserted.
     *
     * @param details defines the parameters for what to load
     * @param controller the controller which provides asyncronous hooks into the load, including loaded count and ability to abort
     */
    loadCompactJsonAttributes(details: AttributeLoaderDetails, controller: AsynchAttribController): Promise<AttributeSet>;
    loadSingleFeature(details: GetGraphicServiceDetails): Promise<Graphic>;
    /**
     * Trims the desired attribute values for a feature set's attribute groups.
     * @param features The featureset to be trimmed.
     * @param fieldsToTrim Array of string names of the attributes to be trimmed.
     * @returns The featureset, trimmed.
     */
    trimFeatureSetAttributes(features: Array<any>, fieldsToTrim: Array<string>): Array<any>;
    /**
     * Will order the fields of a layer based on its fieldInfo.
     *
     * @param currentFields the current order of the fields
     * @param orderInfo the fieldInfo config that contains the order the fields should be displayed in
     */
    orderFields(currentFields: Array<FieldDefinition>, orderInfo: Array<RampLayerFieldInfoConfig>): Array<FieldDefinition>;
    /**
     * Will apply any field config metadata to a layer.
     * Should be used after loading process has populated .fields property of the layer
     *
     * @param layer the layer to apply the additional configuration to. Will be modified.
     * @param fieldMetadata field settings from the config object. can be undefined
     */
    applyFieldMetadata(layer: LayerInstance, fieldMetadata?: RampLayerFieldMetadataConfig | undefined): void;
    /**
     * Util function to manage trickery. Non-Arcgis layer sources can have field names that are bad keys.
     * Our loader will have corrected them, but the ramp layer config may still be referencing the original names
     * (e.g. nameField, maptipField).
     * This function will attempt to return the valid field name for a given original field name.
     *
     * @param fields array of valid fields for the layer
     * @param originalName field name as defined in the source
     * @returns a valid field name to use. Empty string if none found
     */
    fieldValidator(fields: Array<FieldDefinition>, originalName: string): string;
    /**
     * Will generate the tabular transformation of an attribute set for a layer.
     * The result will also be cached in the attribute source.
     * If the result is already cached, it will be returned.
     * The layer must be the owner of the attribute source.
     * This method is generally called from an internal call within a layer.
     * It exists as a public API to allow re-use across diverging layer types.
     *
     * @param layer the layer owning the attributes and the attribute source
     * @param attSource the attribute source for the attributes to transform
     */
    generateTabularAttributes(layer: LayerInstance, attSource: AttribSource): Promise<TabularAttributeSet>;
    /**
     * Worker method for the above generateTabularAttributes call.
     * Separating allows us to use async syntax for the heavy lifting,
     * but provides a promise via method that can easily be assigned to the
     * cache. Difficult to save your own async promise within your own method.
     *
     * @param layer the layer owning the attributes and the attribute source
     * @param attSource the attribute source for the attributes to transform
     */
    private generateTabularAttributesWorker;
    /**
     * Gives an arcade variable type that corresponds to a field type.
     *
     * @param {string} fieldType a RAMP field type (same as ESRI field type)
     * @returns {EsriArcadeVarType | undefined} matching arcade type, or undefined if a valid mapping could not be derived
     */
    fieldTypeToArcade(fieldType: string): EsriArcadeVarType | undefined;
}
/**
 * Bundles all the attribute managing objects together and provides getters that avoid
 * undefined checks.
 * @internal
 */
export declare class AttribSource {
    /**
     * Actual attribute loader, if exists
     */
    private _attribLoader;
    /**
     * Actual quick cache, if exists
     */
    private _quickCache;
    /**
     * Used to access the attribute loader in layer classes
     */
    get attLoader(): AttributeLoaderBase;
    set attLoader(v: AttributeLoaderBase);
    /**
     * Used to access the quick cache in layer classes
     */
    get quickCache(): QuickCache;
    set quickCache(v: QuickCache);
    /**
     * Erase all local data in this object
     */
    clearAll(): void;
}
/**
 * An object that is passed into the asynch attribute loader. The loader can read and update these properties on each iteration
 * @internal
 */
export declare class AsynchAttribController {
    loadedCount: number;
    loadAbortFlag: boolean;
    loadIsDone: boolean;
    constructor();
}
/**
 * Manages the downloading of an entire attribute set (feature class).
 * The base class contains common definitions, but is expected to be inherited.
 * @internal
 */
export declare class AttributeLoaderBase extends APIScope {
    protected aac: AsynchAttribController;
    protected loadPromise: Promise<AttributeSet> | undefined;
    protected details: AttributeLoaderDetails;
    tabularAttributesCache: Promise<TabularAttributeSet> | undefined;
    protected constructor(iApi: InstanceAPI, details: AttributeLoaderDetails);
    /**
     * Allows the list of field names to download to be updated. Allows support for divergant loading
     * flows between different layers.
     *
     * @param {string} newList
     */
    updateFieldList(newList: string): void;
    updateFieldsToTrim(newFieldsToTrim: Array<string>): void;
    getAttribs(): Promise<AttributeSet>;
    abortAttribLoad(): void;
    destroyAttribs(): void;
    loadCount(): number;
    isLoaded(): boolean;
    isLoadAborted(): boolean;
    protected loadPromiseGenerator(): Promise<AttributeSet>;
}
/**
 * Manages the downloading of an entire attribute set (feature class) from an
 * ArcGIS Server.
 * @internal
 */
export declare class ArcServerAttributeLoader extends AttributeLoaderBase {
    constructor(iApi: InstanceAPI, details: AttributeLoaderDetails);
    protected loadPromiseGenerator(): Promise<AttributeSet>;
}
/**
 * Manages the extraction of an entire attribute set (feature class) from a
 * "File" type layer (something with data fully contained in the local layer).
 * @internal
 */
export declare class FileLayerAttributeLoader extends AttributeLoaderBase {
    constructor(iApi: InstanceAPI, details: AttributeLoaderDetails);
    protected loadPromiseGenerator(): Promise<AttributeSet>;
}
/**
 * Manages the extraction of an entire attribute set (feature class) from a
 * Data Layer that is not hosted in an ArcGIS Table service (something with data fully loaded upfront).
 * @internal
 */
export declare class DataLayerAttributeLoader extends AttributeLoaderBase {
    constructor(iApi: InstanceAPI, details: AttributeLoaderDetails);
    protected loadPromiseGenerator(): Promise<AttributeSet>;
}
/**
 * Manages the quick lookup of attributes and geometries for individual features.
 * Used when it makes sense to just download a small set of data instead of the entire layer.
 * @internal
 */
export declare class QuickCache {
    private attribs;
    private geoms;
    private extents;
    /**
     * Used to determine if we need to cache geometry at different scales.
     */
    readonly isPoint: boolean;
    constructor(geomType: GeometryType);
    private getScaleStore;
    private getGeomStore;
    getAttribs(key: number): Attributes;
    setAttribs(key: number, atts: Attributes): void;
    getGeom(key: number, scale?: number | undefined): BaseGeometry;
    setGeom(key: number, geom: BaseGeometry, scale?: number | undefined): void;
    getExtent(key: number): Extent;
    setExtent(key: number, extent: Extent): void;
    clearAll(): void;
}
export {};
