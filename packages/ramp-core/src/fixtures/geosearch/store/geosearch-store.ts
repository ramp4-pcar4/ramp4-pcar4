import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { GeosearchState } from './geosearch-state';
import { RootState } from '@/store/state';

type GeosearchContext = ActionContext<GeosearchState, RootState>;

// temporary use (once hardcoded data replaced this should no longer be needed)
const ABBR_TO_PROV = {
    NL: 'Newfoundland and Labrador',
    PE: 'Prince Edward Island',
    NS: 'Nova Scotia',
    NB: 'New Brunswick',
    QC: 'Quebec',
    ON: 'Ontario',
    MB: 'Manitoba',
    SK: 'Saskatchewan',
    AB: 'Alberta',
    BC: 'British Columbia',
    YU: 'Yukon',
    NT: 'Northwest Territories',
    NU: 'Nunavut',
    UF: 'Undersea Feature',
    IW: 'International Waters'
};

const getters = {
    /**
     * Fetches the list of all possible provinces in a geoName query.
     *
     * @function getProvinces
     * @return   {Array}    a list of all provinces in the form
     */
    getProvinces: (state: GeosearchState): [] => {
        // province objects contain the following properties:
        // code: numeric province code (i.e. ontario is 35)
        // abbr: short hand notation (Ontario is ON)
        // name: full province name
        return state.GSservice.fetchProvinces();
    },

    /**
     * Fetches the list of all possible types in a geoName query.
     *
     * @function getTypes
     * @return   {Array}    a list of all types in the form
     */
    getTypes: (state: GeosearchState): [] => {
        // returned type objects contain the following properties:
        // code: short form code (i.e. TERR)
        // name: full type name (i.e. Territory)
        return state.GSservice.fetchTypes();
    }
};

const mutations = {
    RUN_QUERY: (state: GeosearchState) => {
        // return empty promise if there is no search value is specified
        // uncomment once GSService query implemented
        // if (!state.searchVal) {
        //     state.searchResults = [];
        //     // return Promise.resolve();
        //     return state.searchResults;
        // }

        // only run new query if a different search term is entered
        if (state.searchVal && state.searchVal !== state.lastSearchVal) {
            // TODO: GSservice query yet to be implemented
        } else {
            // discard any old results
            let filteredData = filter(state.queryParams, state.savedResults);
            state.searchResults = filteredData || [];

            // return data for optional processing further down the promise chain
            // return Promise.resolve(state.searchResults);
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
                    delete state.queryParams.type;
                }
                break;
            }
            case 'province': {
                state.queryParams.province = value;
                if (typeof state.queryParams.province === 'undefined') {
                    delete state.queryParams.province;
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
    ZOOM_TO: (state: GeosearchState, result: any) => {
        // TODO: implementation
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
    zoomTo: function(context: GeosearchContext, result: any): void {
        context.commit('ZOOM_TO', result);
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
        data = data.filter(r => r.province && (<any>ABBR_TO_PROV)[r.province] === queryParams.province);
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
