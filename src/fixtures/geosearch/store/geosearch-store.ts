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
     * @return {Promise<Array>} a promise that resolves to a list of all provinces in the form
     */
    getProvinces: (state: GeosearchState): Promise<Array<any>> => {
        return new Promise(resolve => {
            state.GSservice.fetchProvinces().then((provs: Array<any>) => {
                provs.sort((provA: any, provB: any) =>
                    provA.name > provB.name ? 1 : -1
                );
                resolve(provs);
            });
        });
    },

    /**
     * Fetches the list of all possible types in a geoName query. Returned type objects contain the following properties:
     * code: short form code (i.e. TERR)
     * name: full type name (i.e. Territory)
     *
     * @function getTypes
     * @return {Promise<Array>} a promise that resolves to a list of all types in the form
     */
    getTypes: (state: GeosearchState): Promise<Array<any>> => {
        return new Promise(resolve => {
            state.GSservice.fetchTypes().then((types: Array<any>) => {
                types.sort((typeA: any, typeB: any) =>
                    typeA.name > typeB.name ? 1 : -1
                );
                resolve(types);
            });
        });
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
    },
    SET_GSSERVICE: (state: GeosearchState, newGSservice: any) => {
        state.GSservice = newGSservice;
    },
    SET_FAILED_SERVICES: (state: GeosearchState, service: string[]) => {
        state.failedServices = service;
    }
};

const actions = {
    /**
     * Runs geosearch query to update search and saved results.
     *
     * @function runQuery
     * @param {boolean} forceReRun whether to force the query to run again
     */
    runQuery: function (context: GeosearchContext, forceReRun?: boolean): void {
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
                (context.state.searchVal &&
                    context.state.searchVal !== context.state.lastSearchVal) ||
                forceReRun
            ) {
                // watch for provinces and types to finish loading
                const watcher = setInterval(() => {
                    if (
                        context.state.GSservice.config.provinces.listFetched &&
                        context.state.GSservice.config.types.typesFetched
                    ) {
                        clearInterval(watcher);
                        context.state.GSservice.query(
                            `${context.state.searchVal}*`
                        ).then((data: any) => {
                            context.commit(
                                'SET_FAILED_SERVICES',
                                data.failedServs
                            );
                            // store data for current search term
                            context.commit(
                                'SET_LAST_SEARCH_VAL',
                                context.state.searchVal
                            );
                            context.commit('SET_SAVED_RESULTS', data.results);

                            // replace old saved results
                            const filteredData = filter(
                                context.state.resultsVisible,
                                context.state.queryParams,
                                context.state.savedResults
                            );
                            context.commit(
                                'SET_SEARCH_RESULTS',
                                filteredData || []
                            );
                            context.commit('SET_LOADING_RESULTS', false);
                        });
                    }
                }, 250);
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
     * @param   {object}   payload an object with two properties - province (the province to set) and
     * forceReRun (whether to force the query to run again)
     */
    setProvince: function (
        context: GeosearchContext,
        payload: { province: string; forceReRun?: boolean }
    ): void {
        context.commit(
            'SET_PROVINCE',
            typeof payload.province === 'undefined' ? '' : payload.province
        );
        // run query after province filter changes
        context.dispatch('runQuery', payload.forceReRun);
    },
    /**
     * Update type filter value.
     *
     * @function setType
     * @param   {object}    payload   an object with two properties - type (the type to set) and
     * forceReRun (whether to force the query to run again)
     */
    setType: function (
        context: GeosearchContext,
        payload: { type: string; forceReRun?: boolean }
    ): void {
        context.commit(
            'SET_TYPE',
            typeof payload.type === 'undefined' ? '' : payload.type
        );
        // run query after type filter changes
        context.dispatch('runQuery', payload.forceReRun);
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
     * (State) failedServices: string[]
     */
    failedServices = 'geosearch/failedServices',
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
    setMapExtent = 'geosearch/setMapExtent',
    /**
     * (Action) setGSserivce: (config: any)
     */
    setGSservice = 'geosearch/setGSservice',
    /**
     * (Action) setFailedService: (service: string)
     */
    setFailedService = 'geosearch/setFailedService'
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
