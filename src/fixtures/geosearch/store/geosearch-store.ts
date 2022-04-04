import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { GeosearchState } from './geosearch-state';
import type { RootState } from '@/store/state';

type GeosearchContext = ActionContext<GeosearchState, RootState>;

const getters = {
    /**
     * Fetches the list of all possible provinces in a geoName query. Province objects contain the following properties:
     * code: numeric province code (i.e. ontario is 35)
     * abbr: short hand notation (Ontario is ON)
     * name: full province name
     *
     * @function getProvinces
     * @return   {Array}    a list of all provinces in the form
     */
    getProvinces: (state: GeosearchState): [] => {
        const provs = state.GSservice.fetchProvinces();
        // sort the province filters in alphabetical order
        provs.sort((provA: any, provB: any) =>
            provA.name > provB.name ? 1 : -1
        );
        return provs;
    },

    /**
     * Fetches the list of all possible types in a geoName query. Returned type objects contain the following properties:
     * code: short form code (i.e. TERR)
     * name: full type name (i.e. Territory)
     *
     * @function getTypes
     * @return   {Array}    a list of all types in the form
     */
    getTypes: (state: GeosearchState): [] => {
        const types = state.GSservice.fetchTypes();
        // sort the type filters in alphabetical order
        types.sort((typeA: any, typeB: any) =>
            typeA.name > typeB.name ? 1 : -1
        );
        return types;
    }
};

const mutations = {
    SET_PROVINCE: (state: GeosearchState, province: string) => {
        state.queryParams.province = province;
    },
    SET_TYPE: (state: GeosearchState, type: string) => {
        state.queryParams.type = type;
    },
    SET_EXTENT: (state: GeosearchState, extent: any) => {
        state.queryParams.extent = extent;
    }
};

const actions = {
    /**
     * Runs geosearch query to update search and saved results.
     *
     * @function runQuery
     */
    runQuery: function (context: GeosearchContext): void {
        // set loading flag to true and turn off when reach return
        context.commit('SET_LOADING_RESULTS', true);
        // when no search value is specified
        if (!context.state.searchVal) {
            context.commit('SET_SEARCH_RESULTS', []);
            context.commit('SET_SAVED_RESULTS', []);
            context.commit('SET_LOADING_RESULTS', false);
        } else {
            // run new query if different search term is entered
            if (
                context.state.searchVal &&
                context.state.searchVal !== context.state.lastSearchVal
            ) {
                context.state.GSservice.query(
                    `${context.state.searchVal}*`
                ).then((data: any) => {
                    // store data for current search term
                    context.commit(
                        'SET_LAST_SEARCH_VAL',
                        context.state.searchVal
                    );
                    context.commit('SET_SAVED_RESULTS', data);

                    // replace old saved results
                    const filteredData = filter(
                        context.state.resultsVisible,
                        context.state.queryParams,
                        context.state.savedResults
                    );
                    context.commit('SET_SEARCH_RESULTS', filteredData || []);
                    context.commit('SET_LOADING_RESULTS', false);
                });
            } else {
                // otherwise no new search term so we only need to filter on query param values
                const filteredData = filter(
                    context.state.resultsVisible,
                    context.state.queryParams,
                    context.state.savedResults
                );
                context.commit('SET_SEARCH_RESULTS', filteredData || []);
                context.commit('SET_LOADING_RESULTS', false);
            }
        }
    },
    /**
     * Update province filter value.
     *
     * @function setProvince
     * @param   {string}    province   the province code all results must be in
     */
    setProvince: function (context: GeosearchContext, province: string): void {
        context.commit(
            'SET_PROVINCE',
            typeof province === 'undefined' ? '' : province
        );
        // run query after province filter changes
        context.dispatch('runQuery');
    },
    /**
     * Update type filter value.
     *
     * @function setType
     * @param   {string}    type   the type code all results must have
     */
    setType: function (context: GeosearchContext, type: string): void {
        context.commit('SET_TYPE', typeof type === 'undefined' ? '' : type);
        // run query after type filter changes
        context.dispatch('runQuery');
    },
    /**
     * Update current search val and last search val.
     *
     * @function setSearchTerm
     * @param   {string}    searchTerm  current geosearch search value term
     */
    setSearchTerm: function (context: GeosearchContext, searchTerm: any): void {
        context.commit('SET_LAST_SEARCH_VAL', context.state.searchVal);
        context.commit('SET_SEARCH_VAL', searchTerm);
        // run query after search term changes
        context.dispatch('runQuery');
    },
    /**
     * Toggle map extent filter.
     *
     * @function setMapExtent
     * @param   {any}    mapExtent   current map extent info // TODO what is this? add strong types? has .visible and .extent
     */
    setMapExtent: function (context: GeosearchContext, mapExtent: any): void {
        // if results should be filtered by current map view
        if (mapExtent.visible !== undefined) {
            context.commit('SET_RESULTS_VISIBLE', mapExtent.visible);
        }
        // re-project current extent object with lat/lon WKID number
        // NOTE: after removal of geoapi, the projection code is now accessed via the instance api.
        //       since no one could answer if we are allowed to reference the api in the store, we instead
        //       have the caller pre-project to lat long and add a rule that only lat long extents
        //       can be provided to the store.

        if (mapExtent.extent.sr.wkid !== 4326) {
            throw new Error(
                'an extent that was not projected to wkid 4326 was passed to the geosearch store'
            );
        }
        context.commit('SET_EXTENT', mapExtent.extent);
        // run query after toggling map extent filters
        context.dispatch('runQuery');
    }
};

/**
 * Helper function that filters based on query parameters.
 *
 * @function filter
 * @param {Boolean} visibleOnly Apply map extent filters
 * @param {Object}  queryParams Contains which filter to process
 * @param {Array}   data        An array of results from the query
 */
function filter(visibleOnly: boolean, queryParams: any, data: Array<any>) {
    if (visibleOnly && queryParams.extent) {
        // ensure bbox boundaries are within the current map extent properties
        data = data.filter(
            r =>
                r.bbox[0] <= queryParams.extent.xmax &&
                r.bbox[1] <= queryParams.extent.ymax &&
                r.bbox[2] >= queryParams.extent.xmin &&
                r.bbox[3] >= queryParams.extent.ymin
        );
    }
    if (queryParams.province && queryParams.province !== '...') {
        data = data.filter(
            r =>
                r.location.province.name &&
                r.location.province.name === queryParams.province
        );
    }
    if (queryParams.type && queryParams.type !== '...') {
        data = data.filter(r => r.type === queryParams.type);
    }
    return data;
}

export enum GeosearchStore {
    /**
     * (Getter) getProvinces: () => Array<any>
     */
    getProvinces = 'geosearch/getProvinces',
    /**
     * (Getter) getTypes: () => Array<any>
     */
    getTypes = 'geosearch/getTypes',
    /**
     * (State) queryParams: any
     */
    queryParams = 'geosearch/queryParams',
    /**
     * (State) searchVal: string
     */
    searchVal = 'geosearch/searchVal',
    /**
     * (State) searchResults: Array<any>
     */
    searchResults = 'geosearch/searchResults',
    /**
     * (State) resultsVisible: boolean
     */
    resultsVisible = 'geosearch/resultsVisible',
    /**
     * (State) loadingResults: boolean
     */
    loadingResults = 'geosearch/loadingResults',
    /**
     * (Action) runQuery: () => Promise
     */
    runQuery = 'geosearch/runQuery',
    /**
     * (Action) setProvince: (province: string)
     */
    setProvince = 'geosearch/setProvince',
    /**
     * (Action) setType: (type: string)
     */
    setType = 'geosearch/setType',
    /**
     * (Action) setSearchTerm: (searchTerm: string)
     */
    setSearchTerm = 'geosearch/setSearchTerm',
    /**
     * (Action) setMapExtent: (mapExtent: any)
     */
    setMapExtent = 'geosearch/setMapExtent'
}

export function geosearch(config: any) {
    const state = new GeosearchState(config);

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
