import { DataLayer, InstanceAPI } from '@/api/internal';
import { Extent, Filter, Graphic } from '@/geo/api';
import type { DiscreteGraphicResult, GetGraphicParams, QueryFeaturesParams, RampLayerConfig } from '@/geo/api';
/**
 * A layer class which implements a Data Layer with data from a ESRI Table service.
 */
export declare class TableLayer extends DataLayer {
    protected filter: Filter;
    serviceUrl: string;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions(): Array<Promise<void>>;
    getGraphic(objectId: number, opts: GetGraphicParams): Promise<Graphic>;
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
     * Applies an SQL filter to the layer. Will overwrite any existing filter for the given key.
     * Use `1=2` for a "hide all" where clause.
     *
     * @param {String} filterKey the filter key / named filter to apply the SQL to
     * @param {String} whereClause the WHERE clause of the filter
     */
    setSqlFilter(filterKey: string, whereClause: string): void;
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
     * @param {Extent} [extent] ignored for Data Layer. param exists for consistency.
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
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves in an array of object ids and promises resolving in each feature
     */
    queryFeaturesDiscrete(options: QueryFeaturesParams): Promise<Array<DiscreteGraphicResult>>;
    /**
     * Requests a set of features for this layer that match the criteria of the options
     * - filterSql : a where clause to apply against feature attributes
     * - outFields : a string of comma separated field names. will restrict fields included in the output
     *
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves with an array of features that satisfy the criteria
     */
    queryFeatures(options: QueryFeaturesParams): Promise<Array<Graphic>>;
}
