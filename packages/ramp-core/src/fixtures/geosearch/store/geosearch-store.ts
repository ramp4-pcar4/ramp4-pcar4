import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { GeosearchState } from './geosearch-state';
import { RootState } from '@/store/state';

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
    SET_PROVINCE: (state: GeosearchState, province: string) => {
        state.queryParams.province = province;
    },
    SET_TYPE: (state: GeosearchState, type: string) => {
        state.queryParams.type = type;
    }
};

const actions = {
    /**
     * Runs geosearch query to update search and saved results.
     *
     * @function runQuery
     */
    runQuery: function(context: GeosearchContext): void {
        // set loading flag to true and turn off when reach return
        context.commit('SET_LOADING_RESULTS', true);
        // when no search value is specified
        if (!context.state.searchVal) {
            context.commit('SET_SEARCH_RESULTS', []);
            context.commit('SET_LOADING_RESULTS', false);
        }

        // run new query if different search term is entered
        if (context.state.searchVal && context.state.searchVal !== context.state.lastSearchVal) {
            context.state.GSservice.query(`${context.state.searchVal}*`).then((data: any) => {
                // store data for current search term
                context.commit('SET_LAST_SEARCH_VAL', context.state.searchVal);
                context.commit('SET_SAVED_RESULTS', data);

                // replace old saved results
                let filteredData = filter(context.state.queryParams, context.state.savedResults);
                context.commit('SET_SEARCH_RESULTS', filteredData || []);
                context.commit('SET_LOADING_RESULTS', false);
            });
        } else {
            // otherwise no new search term so we only need to filter on query param values
            let filteredData = filter(context.state.queryParams, context.state.savedResults);
            context.commit('SET_SEARCH_RESULTS', filteredData || []);
            context.commit('SET_LOADING_RESULTS', false);
        }
    },
    /**
     * Update province filter value.
     *
     * @function setProvince
     * @param   {string}    province   the province code all results must be in
     */
    setProvince: function(context: GeosearchContext, province: string): void {
        context.commit('SET_PROVINCE', typeof province === 'undefined' ? '' : province);
        // run query after province filter changes
        context.dispatch('runQuery');
    },
    /**
     * Update type filter value.
     *
     * @function setType
     * @param   {string}    type   the type code all results must have
     */
    setType: function(context: GeosearchContext, type: string): void {
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
    setSearchTerm: function(context: GeosearchContext, searchTerm: any): void {
        context.commit('SET_LAST_SEARCH_VAL', context.state.searchVal);
        context.commit('SET_SEARCH_VAL', searchTerm);
        // run query after search term changes
        context.dispatch('runQuery');
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
     * (State) resultsVisible: boolean
     */
    resultsVisible = 'geosearch/resultsVisible',
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
