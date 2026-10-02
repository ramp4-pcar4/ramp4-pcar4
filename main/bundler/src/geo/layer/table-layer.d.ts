import { DataLayer, InstanceAPI } from '../../api/internal';
import { Filter, Graphic, DiscreteGraphicResult, QueryFeaturesParams, RampLayerConfig } from '../api';
/**
 * A layer class which implements a Data Layer with data from a ESRI Table service.
 */
export declare class TableLayer extends DataLayer {
    protected filter: Filter;
    serviceUrl: string;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
    protected onLoadActions(): Array<Promise<void>>;
    getGraphic(objectId: number): Promise<Graphic>;
    abortAttributeLoad(): void;
    clearFeatureCache(): void;
    downloadedAttributes(): number;
    attribLoadAborted(): boolean;
    setSqlFilter(filterKey: string, whereClause: string): void;
    getSqlFilter(filterKey: string): string;
    /**
     * Returns a SQL WHERE condition that is combination of active filters.
     *
     * @method getCombinedSqlFilter
     * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
     * @returns {String} all non-excluded sql statements connected with AND operators.
     */
    getCombinedSqlFilter(exclusions?: string[]): string;
    getFilterOIDs(exclusions?: Array<string>): Promise<Array<number> | undefined>;
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
