import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { GeosearchState } from './geosearch-state';
import { RootState } from '@/store/state';
// TODO: temporary import for map zoom call
import { ApiBundle } from 'ramp-geoapi';

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
        provs.sort((provA: any, provB: any) => (provA.name > provB.name ? 1 : -1));
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
        types.sort((typeA: any, typeB: any) => (typeA.name > typeB.name ? 1 : -1));
        return types;
    }
};

const mutations = {
    RUN_QUERY: (state: GeosearchState) => {
        // no search value is specified
        if (!state.searchVal) {
            state.searchResults = [];
            return state.searchResults;
        }

        // run new query if different search term is entered
        if (state.searchVal && state.searchVal !== state.lastSearchVal) {
            return state.GSservice.query(`${state.searchVal}*`).then((data: any) => {
                // store data for current search term
                state.lastSearchVal = state.searchVal;
                state.savedResults = data;
                state.resultsVisible = true;

                // replace old saved results
                let filteredData = filter(state.queryParams, state.savedResults);
                state.searchResults = filteredData || [];

                return data;
            });
        } else {
            // otherwise no new search term so we only need to filter on query param values
            let filteredData = filter(state.queryParams, state.savedResults);
            state.searchResults = filteredData || [];
            return state.searchResults;
        }
    },
    SET_QUERY_PARAM: (state: GeosearchState, queryParam: any) => {
        const paramName = queryParam.paramName;
        const value = queryParam.value;

        switch (paramName) {
            case 'type': {
                state.queryParams.type = value;
                if (typeof state.queryParams.type === 'undefined') {
                    state.queryParams.type = '';
                }
                break;
            }
            case 'province': {
                state.queryParams.province = value;
                if (typeof state.queryParams.province === 'undefined') {
                    state.queryParams.province = '';
                }
                break;
            }
            case 'searchTerm': {
                // save last search val
                state.lastSearchVal = state.searchVal;
                state.searchVal = value;
                break;
            }
        }
    },
    ZOOM_TO: (state: GeosearchState, mapResult: any) => {
        // TODO: replace with ramp api once complete - new RAMP.GEO.Point()?
        let zoomPoint = new ApiBundle.Point(mapResult.result.name, mapResult.result.position);
        mapResult.map.zoomMapTo(zoomPoint, 50000);
    }
};

const actions = {
    /**
     * Runs geosearch query and returns the results or suggestions.
     *
     * @function runQuery
     * @return {Promise} promise resolving with results (when results are found - { results: [] }) or suggestions (when results are not found - { suggestions: [] }) or nothing (when search value is not specified - {});
     */
    runQuery: function(context: GeosearchContext): void {
        context.commit('RUN_QUERY');
    },
    /**
     * Include results in the given province. Passing a value of undefined clears the province.
     *
     * @function setProvince
     * @param   {string}    province   the province code all results must be in
     */
    setProvince: function(context: GeosearchContext, province: string): void {
        const queryParam = {
            paramName: 'province',
            value: province
        };
        context.commit('SET_QUERY_PARAM', queryParam);
    },
    /**
     * Include results with the given type. Passing a value of undefined clears the type.
     *
     * @function setType
     * @param   {string}    type   the type code all results must have
     */
    setType: function(context: GeosearchContext, type: string): void {
        const queryParam = {
            paramName: 'type',
            value: type
        };
        context.commit('SET_QUERY_PARAM', queryParam);
    },
    /**
     * Include results with the given search term.
     *
     * @function setSearchTerm
     * @param   {string}    searchTerm  current geosearch search value term
     */
    setSearchTerm: function(context: GeosearchContext, searchTerm: any): void {
        const queryParam = {
            paramName: 'searchTerm',
            value: searchTerm
        };
        context.commit('SET_QUERY_PARAM', queryParam);
    },
    /**
     * @function zoomTo
     * @param {Object} result a search result to zoom to
     */
    zoomTo: function(context: GeosearchContext, mapResult: any): void {
        context.commit('ZOOM_TO', mapResult);
    }
};

/**
 * Helper function that filters based on query parameters.
 *
 * @function filter (potentially rename)
 * @param {Object}  queryParams Contains which filter to process
 * @param {Array}   data        An array of locations from the query
 */
function filter(queryParams: any, data: Array<any>) {
    if (queryParams.extent) {
        // TODO: handle filter by extent
    }
    if (queryParams.province && queryParams.province !== '...') {
        data = data.filter(r => r.location.province.name && r.location.province.name === queryParams.province);
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
     * (Action) setExtent: (extent: any)
     */
    setSearchTerm = 'geosearch/setSearchTerm'
}

export function geosearch() {
    const state = new GeosearchState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
