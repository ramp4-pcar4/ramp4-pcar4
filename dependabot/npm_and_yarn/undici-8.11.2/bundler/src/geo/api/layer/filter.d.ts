import { Extent } from '..';
/**
 * @class Filter
 */
export declare class Filter {
    private sql;
    private cache;
    private extent;
    constructor(permanentWhereClause?: string, initialWhereClause?: string);
    /**
     * Returns list of filter keys that have active filters
     *
     * @method sqlActiveFilters
     * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
     * @returns {Array} list of filter keys with active filter sql
     */
    sqlActiveFilters(exclusions?: Array<string>): Array<string>;
    /**
     * Indicates if any filters are active. A Permanent filter does not influence the result.
     *
     * @method isActive
     * @returns {Boolean} indicates if any non-permanent filters are active
     */
    isActive(): boolean;
    /**
     * Returns a SQL WHERE condition that is combination of active filters.
     *
     * @method getCombinedSql
     * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
     * @returns {String} all non-excluded sql statements connected with AND operators.
     */
    getCombinedSql(exclusions?: Array<string>): string;
    /**
     * Updates a SQL filter clause.
     *
     * @method setSql
     * @param {String} filterKey key of the filter to update (can be a new value)
     * @param {String} whereClause clause defining the active filters on symbols. Use '' for no filter. Use '1=2' for everything filtered.
     */
    setSql(filterKey: string, whereClause: string): void;
    /**
     * Returns current SQL for a filter key
     *
     * @method getSql
     * @param {String} filterKey key string indicating what filter the sql belongs to
     * @returns {String} the SQL, if any, that matches the filter type
     */
    getSql(filterKey: string): string;
    /**
     * Registers a new extent for cache tracking.
     *
     * @method setExtent
     * @param {Extent} extent the extent to filter against
     */
    setExtent(extent: Extent): void;
    /**
     * Returns cache key depending on the situation we are in.
     *
     * @method getCacheKey
     * @private
     * @param {Array} sqlFilters list of filter keys influencing this cache
     * @param {Boolean} includeExtent if the cache includes extent based filters
     * @returns {String} the cache key to use
     */
    private getCacheKey;
    /**
     * Returns cache for a specific filtering scenario.
     *
     * @method getCache
     * @param {Array} sqlFilters list of filter keys influencing this cache
     * @param {Boolean} includeExtent if the cache includes extent based filters
     * @returns {Promise} resolves in a filter result appropriate for the parameters. returns undefined if no cache exists.
     */
    getCache(sqlFilters: Array<string>, includeExtent: boolean): Promise<Array<number>>;
    /**
     * Sets a filter query in a cache, so repeated identical requests will only hit the server once
     *
     * @method setCache
     * @param {Promise} queryPromise the query we want to cache
     * @param {Array} sqlFilters list of filter keys influencing this cache
     * @param {Boolean} includeExtent if the cache includes extent based filters
     */
    setCache(queryPromise: Promise<Array<number>>, sqlFilters: Array<string>, includeExtent: boolean): void;
    /**
     * Returns list of cache keys that have caches
     *
     * @method cacheActiveKeys
     * @returns {Array} list of cache keys with active caches
     */
    private cacheActiveKeys;
    /**
     * Resets all internal caches.
     *
     * @method clearAllCaches
     */
    private clearAllCaches;
    /**
     * Resets all internal caches related to a filter.
     *
     * @method clearCacheSet
     * @param {String} filterName filter that has changed and needs its caches wiped
     */
    private clearCacheSet;
    /**
     * Resets all internal filter settings to have no filter applied.
     *
     * @method clearAll
     */
    clearAll(): void;
}
