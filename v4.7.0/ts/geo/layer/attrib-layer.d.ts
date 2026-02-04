import { AttribSource, BaseRenderer, InstanceAPI, MapLayer } from '@/api/internal';
import { Extent, Filter, Graphic } from '@/geo/api';
import type { AttributeSet, DiscreteGraphicResult, GetGraphicParams, LoadLayerMetadataOptions, QueryFeaturesParams, RampLayerConfig, TabularAttributeSet } from '@/geo/api';
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
    protected notLoadedErr(): void;
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
     * Gets information on a graphic in the most efficient way possible. Options object properties:
     * - getGeom ; a boolean to indicate if the result should include graphic geometry
     * - getAttribs ; a boolean to indicate if the result should include graphic attributes
     * - getStyle ; a boolean to indicate if the result should graphical styling information
     *
     * @param {Integer} objectId the object id of the graphic to find
     * @param {Object} options options object for the request, see above
     * @returns {Promise} resolves with a Graphic containing the requested information
     */
    getGraphic(objectId: number, opts: GetGraphicParams): Promise<Graphic>;
    /**
     * Gets the icon for a specific feature, as an SVG string.
     *
     * @param {Integer} objectId the object id of the feature to find
     * @returns {Promise} resolves with an svg string encoding of the icon
     */
    getIcon(objectId: number): Promise<string>;
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
     * Returns the value of a named SQL filter on the layer.
     *
     * @param {String} filterKey the filter key / named filter to view
     * @returns {String} the value of the where clause for the filter. Empty string if not defined.
     */
    getSqlFilter(filterKey: string): string;
    /**
     * Returns a SQL WHERE condition that is combination of active filters.
     *
     * @method getCombinedSqlFilter
     * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
     * @returns {String} all non-excluded sql statements connected with AND operators.
     */
    getCombinedSqlFilter(exclusions?: string[]): string;
    /**
     * Gets array of object ids that currently pass any filters
     *
     * @function getFilterOIDs
     *
     * @param {Array} [exclusions] list of any filters keys to exclude from the result. omission includes all filters
     * @param {Extent} [extent] if provided, the result list will only include features intersecting the extent
     * @returns {Promise} resolves with array of object ids that pass the filter. if no filters are active, resolves with undefined.
     */
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
