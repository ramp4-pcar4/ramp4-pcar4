import type { MapExtent, QueryParams } from './geosearch-state';
import { defineStore } from 'pinia';
import { GeoSearchUI } from './geosearch.feature';
import { computed, ref } from 'vue';

/**
 * Helper function that filters based on query parameters.
 *
 * @function filter
 * @param {Boolean} visibleOnly Apply map extent filters
 * @param {Object}  queryParams Contains which filter to process
 * @param {Array}   data        An array of results from the query
 */
function filter(
    visibleOnly: boolean,
    queryParams: QueryParams,
    data: Array<any>
) {
    if (visibleOnly && queryParams.extent) {
        // ensure bbox boundaries are within the current map extent properties
        data = data.filter(
            r =>
                r.bbox[0] <= queryParams.extent!.xmax &&
                r.bbox[1] <= queryParams.extent!.ymax &&
                r.bbox[2] >= queryParams.extent!.xmin &&
                r.bbox[3] >= queryParams.extent!.ymin
        );
    }
    if (queryParams.province && queryParams.province !== '...') {
        data = data.filter(
            r =>
                r.location.province?.name &&
                r.location.province.name === queryParams.province
        );
    }
    if (queryParams.type && queryParams.type !== '...') {
        data = data.filter(r => r.type === queryParams.type);
    }
    return data;
}

export const useGeosearchStore = defineStore('geosearch', () => {
    const GSservice = ref<GeoSearchUI>(new GeoSearchUI('en', undefined));
    const queryParams = ref<QueryParams>({
        type: '',
        province: '',
        extent: undefined
    });
    const resultsVisible = ref<boolean>(false);
    const searchVal = ref<string>('');
    const lastSearchVal = ref<string>('');
    const searchResults = ref<Array<any>>([]);
    const savedResults = ref<Array<any>>([]);
    const loadingResults = ref<boolean>(false);
    const failedServices = ref<Array<string>>([]);

    /**
     * Fetches the list of all possible provinces in a geoName query. Province objects contain the following properties:
     * code: numeric province code (i.e. ontario is 35)
     * abbr: short hand notation (Ontario is ON)
     * name: full province name
     *
     * @return {Promise<Array>} a promise that resolves to a list of all provinces in the form
     */
    const getProvinces = computed<Promise<Array<any>>>(
        () =>
            new Promise(resolve => {
                GSservice.value.fetchProvinces().then((provs: Array<any>) => {
                    provs.sort((provA: any, provB: any) =>
                        provA.name > provB.name ? 1 : -1
                    );
                    resolve(provs);
                });
            })
    );

    /**
     * Fetches the list of all possible types in a geoName query. Returned type objects contain the following properties:
     * code: short form code (i.e. TERR)
     * name: full type name (i.e. Territory)
     *
     * @function getTypes
     * @return {Promise<Array>} a promise that resolves to a list of all types in the form
     */
    const getTypes = computed<Promise<Array<any>>>(
        () =>
            new Promise(resolve => {
                GSservice.value.fetchTypes().then((types: Array<any>) => {
                    types.sort((typeA: any, typeB: any) =>
                        typeA.name > typeB.name ? 1 : -1
                    );
                    resolve(types);
                });
            })
    );

    function initService(lang: string, config: any) {
        GSservice.value = new GeoSearchUI(lang, config);
    }

    /**
     * Runs geosearch query to update search and saved results.
     *
     * @function runQuery
     * @param {boolean} forceReRun whether to force the query to run again
     */
    function runQuery(forceReRun?: boolean): void {
        // set loading flag to true and turn off when reach return
        loadingResults.value = true;
        // when no search value is specified
        if (!searchVal.value) {
            searchResults.value = [];
            savedResults.value = [];
            loadingResults.value = false;
        } else {
            // run new query if different search term is entered
            if (
                (searchVal.value && searchVal.value !== lastSearchVal.value) ||
                forceReRun
            ) {
                // watch for provinces and types to finish loading
                const watcher = setInterval(() => {
                    if (
                        GSservice.value.config.provinces.listFetched &&
                        GSservice.value.config.types.typesFetched
                    ) {
                        clearInterval(watcher);
                        GSservice.value
                            .query(`${searchVal.value}*`)
                            .then((data: any) => {
                                failedServices.value = data.failedServs;
                                // store data for current search term
                                lastSearchVal.value = searchVal.value;
                                savedResults.value = data.results;

                                // replace old saved results
                                const filteredData = filter(
                                    resultsVisible.value,
                                    //@ts-ignore
                                    queryParams.value,
                                    savedResults.value
                                );
                                searchResults.value = filteredData || [];
                                loadingResults.value = false;
                            });
                    }
                }, 250);
            } else {
                // otherwise no new search term so we only need to filter on query param values
                const filteredData = filter(
                    resultsVisible.value,
                    //@ts-ignore
                    queryParams.value,
                    savedResults.value
                );
                searchResults.value = filteredData || [];
                loadingResults.value = false;
            }
        }
    }

    /**
     * Update province filter value.
     *
     * @function setProvince
     * @param   {object}   payload an object with two properties - province (the province to set) and
     * forceReRun (whether to force the query to run again)
     */
    function setProvince(payload: {
        province?: string;
        forceReRun?: boolean;
    }): void {
        queryParams.value.province =
            typeof payload.province === 'undefined' ? '' : payload.province;
        // run query after province filter changes
        runQuery(payload.forceReRun);
    }

    /**
     * Update type filter value.
     *
     * @function setType
     * @param   {object}    payload   an object with two properties - type (the type to set) and
     * forceReRun (whether to force the query to run again)
     */
    function setType(payload: { type?: string; forceReRun?: boolean }): void {
        queryParams.value.type =
            typeof payload.type === 'undefined' ? '' : payload.type;
        // run query after type filter changes
        runQuery(payload.forceReRun);
    }

    /**
     * Update current search val and last search val.
     *
     * @function setSearchTerm
     * @param   {string}    searchTerm  current geosearch search value term
     */
    function setSearchTerm(searchTerm: string): void {
        lastSearchVal.value = searchVal.value;
        searchVal.value = searchTerm;
        // run query after search term changes
        runQuery();
    }

    /**
     * Toggle map extent filter.
     *
     * @function setMapExtent
     * @param {MapExtent} mapExtent current map extent info
     */
    function setMapExtent(mapExtent: MapExtent): void {
        // if results should be filtered by current map view
        if (mapExtent.visible !== undefined) {
            resultsVisible.value = mapExtent.visible;
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
        queryParams.value.extent = mapExtent.extent;
        // run query after toggling map extent filters
        runQuery();
    }

    return {
        GSservice,
        queryParams,
        resultsVisible,
        searchVal,
        lastSearchVal,
        searchResults,
        savedResults,
        loadingResults,
        failedServices,
        getProvinces,
        getTypes,
        initService,
        runQuery,
        setProvince,
        setType,
        setSearchTerm,
        setMapExtent
    };
});
