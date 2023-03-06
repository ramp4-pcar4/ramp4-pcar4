import { CoreFilter, Extent } from '@/geo/api';

/**
 * @class Filter
 */
export class Filter {
    // Handles state and result caches for data filters on feature classes.
    // Instances of this class are private within layers, so any public facing calls or event
    // raising is done at the layer level.

    private sql: { [key: string]: string }; // object mapping string to string
    private cache: { [key: string]: Promise<Array<number>> }; // object mapping string to promise of array of ints
    private extent: Extent | undefined;

    constructor(
        permanentWhereClause: string = '',
        initialWhereClause: string = ''
    ) {
        this.sql = {
            [CoreFilter.PERMANENT]: permanentWhereClause,
            [CoreFilter.INITIAL]: initialWhereClause
        };
        this.extent = undefined;
        this.cache = {};
    }

    /**
     * Returns list of filter keys that have active filters
     *
     * @method sqlActiveFilters
     * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
     * @returns {Array} list of filter keys with active filter sql
     */
    sqlActiveFilters(exclusions: Array<string> = []): Array<string> {
        const s = this.sql;
        // find filter keys that have content
        const rawActive = Object.keys(s).filter(k => s[k]);
        if (exclusions.length === 0) {
            return rawActive;
        } else {
            return rawActive.filter(k => exclusions.indexOf(k) === -1);
        }
    }

    /**
     * Indicates if any filters are active. A Permanent filter does not influence the result.
     *
     * @method isActive
     * @returns {Boolean} indicates if any non-permanent filters are active
     */
    isActive(): boolean {
        // TODO clear up and make note of why there are no extent filters being considered here.
        //      is this because extent is considered map level? anyways clarify the jsdoc once known.
        return this.sqlActiveFilters([CoreFilter.PERMANENT]).length > 0;
    }

    /**
     * Returns a SQL WHERE condition that is combination of active filters.
     *
     * @method getCombinedSql
     * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
     * @returns {String} all non-excluded sql statements connected with AND operators.
     */
    getCombinedSql(exclusions: Array<string> = []): string {
        // list of active, non-excluded filters
        const keys = this.sqlActiveFilters(exclusions);

        const l = keys.length;
        if (l === 0) {
            return '';
        } else if (l === 1) {
            // no need for fancy brackets
            return this.sql[keys[0]];
        } else {
            // wrap each nugget in bracket, connect with AND
            return keys.map(k => `(${this.sql[k]})`).join(' AND ');
        }
    }

    /**
     * Updates a SQL filter clause.
     *
     * @method setSql
     * @param {String} filterKey key of the filter to update (can be a new value)
     * @param {String} whereClause clause defining the active filters on symbols. Use '' for no filter. Use '1=2' for everything filtered.
     */
    setSql(filterKey: string, whereClause: string): void {
        if (filterKey === CoreFilter.PERMANENT) {
            console.error(
                'Attempted to overwrite a permanent filter. Not allowed.'
            );
        } else {
            this.sql[filterKey] = whereClause;

            // invalidate affected caches
            this.clearCacheSet(filterKey);
        }
    }

    /**
     * Returns current SQL for a filter key
     *
     * @method getSql
     * @param {String} filterKey key string indicating what filter the sql belongs to
     * @returns {String} the SQL, if any, that matches the filter type
     */
    getSql(filterKey: string): string {
        return this.sql[filterKey] || '';
    }

    /**
     * Registers a new extent for cache tracking.
     *
     * @method setExtent
     * @param {Extent} extent the extent to filter against
     */
    setExtent(extent: Extent): void {
        // NOTE while technically we can support other geometries (for server based layers)
        //      only extent works for file layers. for now, limit to extent.
        //      we can add fancier things later when we need them

        // if our extent is different than our last request, clear the cache
        // and update our tracker
        if (!extent.isEqual(this.extent)) {
            this.extent = extent;

            // clear caches that care about extent.
            this.clearCacheSet(CoreFilter.EXTENT);

            // We don't raise an event here. EXTENT event is a map-level thing, so a layer should not be raising it
            // (we'd have each layer shooting off an event every pan if we did)
        }
    }

    /**
     * Returns cache key depending on the situation we are in.
     *
     * @method getCacheKey
     * @private
     * @param {Array} sqlFilters list of filter keys influencing this cache
     * @param {Boolean} includeExtent if the cache includes extent based filters
     * @returns {String} the cache key to use
     */
    private getCacheKey(
        sqlFilters: Array<string>,
        includeExtent: boolean
    ): string {
        const sqlKey = sqlFilters.sort().join('$');
        return `_cache$${sqlKey}${
            includeExtent ? '$' + CoreFilter.EXTENT : ''
        }$`;
    }

    /**
     * Returns cache for a specific filtering scenario.
     *
     * @method getCache
     * @param {Array} sqlFilters list of filter keys influencing this cache
     * @param {Boolean} includeExtent if the cache includes extent based filters
     * @returns {Promise} resolves in a filter result appropriate for the parameters. returns undefined if no cache exists.
     */
    getCache(
        sqlFilters: Array<string>,
        includeExtent: boolean
    ): Promise<Array<number>> {
        const key = this.getCacheKey(sqlFilters, includeExtent);
        return this.cache[key];
    }

    /**
     * Sets a filter query in a cache, so repeated identical requests will only hit the server once
     *
     * @method setCache
     * @param {Promise} queryPromise the query we want to cache
     * @param {Array} sqlFilters list of filter keys influencing this cache
     * @param {Boolean} includeExtent if the cache includes extent based filters
     */
    setCache(
        queryPromise: Promise<Array<number>>,
        sqlFilters: Array<string>,
        includeExtent: boolean
    ): void {
        const key = this.getCacheKey(sqlFilters, includeExtent);
        this.cache[key] = queryPromise;
    }

    /**
     * Returns list of cache keys that have caches
     *
     * @method cacheActiveKeys
     * @returns {Array} list of cache keys with active caches
     */
    private cacheActiveKeys(): Array<string> {
        const c = this.cache;
        return Object.keys(c).filter(k => c[k]);
    }

    /**
     * Resets all internal caches.
     *
     * @method clearAllCaches
     */
    private clearAllCaches(): void {
        // lol
        this.cache = {};
    }

    /**
     * Resets all internal caches related to a filter.
     *
     * @method clearCacheSet
     * @param {String} filterName filter that has changed and needs its caches wiped
     */
    private clearCacheSet(filterName: string): void {
        // the keys are wrapped in $ chars to avoid matching similarly named filter keys.
        // e.g. 'plugin' would also match 'plugin1' in an indexOf call, but '$plugin$' won't match '$plugin1$'
        this.cacheActiveKeys().forEach(c => {
            if (c.indexOf(`$${filterName}$`) > -1) {
                delete this.cache[c];
            }
        });
    }

    /**
     * Resets all internal filter settings to have no filter applied.
     *
     * @method clearAll
     */
    clearAll(): void {
        // clear everything except permanent, which must remain
        this.sql = { [CoreFilter.PERMANENT]: this.sql[CoreFilter.PERMANENT] };
        this.extent = undefined;
        this.clearAllCaches();
    }
}
