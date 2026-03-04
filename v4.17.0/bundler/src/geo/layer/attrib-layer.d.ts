import { AttribSource, BaseRenderer, InstanceAPI, MapLayer } from '../../api/internal';
import { Extent, Filter, Graphic, AttributeSet, DiscreteGraphicResult, GetGraphicParams, LoadLayerMetadataOptions, QueryFeaturesParams, RampLayerConfig, TabularAttributeSet } from '../api';
/**
 * A common layer class which is inherited by layer classes that implement map-based layers that support ESRI style attributes.
 */
export declare class AttribLayer extends MapLayer {
    protected attribs: AttribSource;
    renderer: BaseRenderer | undefined;
    serviceUrl: string;
    canModifyLayer: boolean;
    protected filter: Filter;
    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): any;
    /**
     * Will load and apply metadata from the ArcGIS Server endpoint to this layer.
     *
     * @param options loading options. Currently only supports custom renderer override
     */
    loadLayerMetadata(options?: LoadLayerMetadataOptions): Promise<void>;
    /**
     * Invokes the process to get the full set of attribute values for the layer.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of attribute values
     */
    getAttributes(): Promise<AttributeSet>;
    abortAttributeLoad(): void;
    clearFeatureCache(): void;
    downloadedAttributes(): number;
    attribLoadAborted(): boolean;
    getFieldsToTrim(): Array<string>;
    /**
     * Invokes the process to get the full set of attribute values for the layer,
     * formatted in a tabular format. Additional data properties are also included.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of tabular attribute values
     */
    getTabularAttributes(): Promise<TabularAttributeSet>;
    getGraphic(objectId: number, options: GetGraphicParams): Promise<Graphic>;
    zoomToFeature(objectId: number): Promise<boolean>;
    getIcon(objectId: number): Promise<string>;
    setSqlFilter(filterKey: string, whereClause: string): void;
    applySqlFilter(exclusions?: Array<string>): void;
    getSqlFilter(filterKey: string): string;
    /**
     * Returns a SQL WHERE condition that is combination of active filters.
     *
     * @method getCombinedSqlFilter
     * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
     * @returns {String} all non-excluded sql statements connected with AND operators.
     */
    getCombinedSqlFilter(exclusions?: string[]): string;
    getFilterOIDs(exclusions?: Array<string>, extent?: Extent | undefined): Promise<Array<number> | undefined>;
    /**
     * Will return an array of object ids for features in the layer that satisfy the conditions of the query options parameter.
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves with an array of numbers (object ids)
     */
    queryOIDs(options: QueryFeaturesParams): Promise<Array<number>>;
    /**
     * Requests a set of features for this layer that match the criteria of the options
     * - filterGeometry : a RAMP API geometry to restrict results to
     * - filterSql : a where clause to apply against feature attributes
     * - includeGeometry : a boolean to indicate if result features should include the geometry
     * - sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution
     *
     * Each result item is loaded independently. This will capitalize on caching, but will be expensive
     * when expecting a large result set and nothing currently cached.
     *
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves in an array of object ids and promises resolving in each feature
     */
    queryFeaturesDiscrete(options: QueryFeaturesParams): Promise<Array<DiscreteGraphicResult>>;
    /**
     * Requests a set of features for this layer that match the criteria of the options
     * - filterGeometry : a RAMP API geometry to restrict results to
     * - filterSql : a where clause to apply against feature attributes
     * - includeGeometry : a boolean to indicate if result features should include the geometry
     * - outFields : a string of comma separated field names. will restrict fields included in the output
     * - sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution
     *
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves with an array of features that satisfy the criteria
     */
    queryFeatures(options: QueryFeaturesParams): Promise<Array<Graphic>>;
    /**
     * Processes any layer order configuration and modifies the passed ESRI layer config
     * with ESRI-friendly definitions
     *
     * @param rampConfig {RampLayerConfig} Ramp layer configuration object.
     * @param rampConfig {Object} ESRI Feature Layer configuration object
     */
    protected configDrawOrder(rampConfig: RampLayerConfig, esriConfig: __esri.FeatureLayerProperties): void;
}
