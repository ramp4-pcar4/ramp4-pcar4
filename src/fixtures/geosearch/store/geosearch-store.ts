import type { MapExtent, QueryParams } from './geosearch-state';
import { defineStore } from 'pinia';
import { GeoSearchUI } from './geosearch.feature';
import { computed, ref } from 'vue';
import type { IProvinceInfo, ISearchResult } from '../definitions';

/**
 * Helper function that filters based on query parameters.
 *
 * @function filter
 * @param {Boolean} visibleOnly Apply map extent filters
 * @param {Object}  queryParams Contains which filter to process
 * @param {Array}   data        An array of results from the query
 */
function filter(visibleOnly: boolean, queryParams: QueryParams, data: Array<any>) {
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
        data = data.filter(r => r.location.province?.name && r.location.province.name === queryParams.province);
    }
    if (queryParams.type && queryParams.type !== '...') {
        data = data.filter(r => r.type === queryParams.type);
    }
    return data;
}

export const useGeosearchStore = defineStore('geosearch', () => {
    // NOTE this is just defining the reactive instance of GSUI. The lang gets properly set in .initService()
    const GSservice = ref<GeoSearchUI>(new GeoSearchUI('en', undefined));
    const queryParams = ref<QueryParams>({
        type: '',
        province: '',
        extent: undefined
    });
    const resultsVisible = ref<boolean>(false);
    const searchVal = ref<string>('');
    const searchRegex = ref<string>('');
    const lastSearchVal = ref<string>('');

    /**
     * This represents the active, visible search (typed words and any filters)
     */
    const searchResults = ref<Array<ISearchResult>>([]);

    /**
     * This is the contents of the last server search result from the current search term.
     * Is used as input for local filters (like bounding box, province, etc) without re-querying the services.
     */
    const savedResults = ref<Array<ISearchResult>>([]);

    /**
     * When true, shows the loading indicator
     */
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
    const getProvinces = computed<Promise<Array<IProvinceInfo>>>(() =>
        GSservice.value.fetchProvinces().then(provs => {
            provs.sort((provA, provB) => provA.name.localeCompare(provB.name, undefined, { sensitivity: 'case' }));
            return provs;
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
                        typeA.name.localeCompare(typeB.name, undefined, { sensitivity: 'case' })
                    );
                    resolve(types);
                });
            })
    );

    function initService(lang: string, config: any) {
        GSservice.value = new GeoSearchUI(lang, config);
    }

    /**
     * Runs the geosearch query to update visible search and the saved results.
     *
     * @function runQuery
     * @param {boolean} forceReRun whether to force the server query (i.e. the typed-in search) to run again
     */
    function runQuery(forceReRun?: boolean): void {
        // set loading flag to true and turn off when reach return
        loadingResults.value = true;
        // Replace bad characters with empty string because the default geocratis service
        // returns rubbish results if any of these characters are used, so we ignore them.
        const cleanedSearchVal = searchVal.value.replace(/["!*$+?^{}()|[\]\\]/g, '').trim();
        if (!cleanedSearchVal) {
            searchResults.value = [];
            savedResults.value = [];
            loadingResults.value = false;
        } else {
            // run new query if different search term is entered
            if ((cleanedSearchVal && cleanedSearchVal !== lastSearchVal.value) || forceReRun) {
                // watch for provinces and types to finish loading
                const watcher = setInterval(() => {
                    if (GSservice.value.config.provinces.listFetched && GSservice.value.config.types.typesFetched) {
                        clearInterval(watcher);
                        GSservice.value.query(`${cleanedSearchVal}*`).then((data: any) => {
                            failedServices.value = data.failedServs;
                            // store data for current search term
                            lastSearchVal.value = cleanedSearchVal;
                            savedResults.value = data.results;

                            // replace old saved results
                            const filteredData = filter(
                                resultsVisible.value,
                                //@ts-expect-error TODO: explain why this is needed or remove
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
                    //@ts-expect-error TODO: explain why this is needed or remove
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
    function setProvince(payload: { province?: string; forceReRun?: boolean }): void {
        queryParams.value.province = typeof payload.province === 'undefined' ? '' : payload.province;
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
        queryParams.value.type = typeof payload.type === 'undefined' ? '' : payload.type;
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
        lastSearchVal.value = searchVal.value.replace(/["!*$+?^{}()|[\]\\]/g, '').trim();
        searchVal.value = searchTerm;
        // run query after search term changes
        runQuery();
    }

    /**
     * Update the regex that search result items use for determining what to highlight
     * (accounting for character accents).
     *
     *
     * @function setSearchRegex
     * @param {string} searchTerm current geosearch search value term
     */
    function setSearchRegex(searchTerm: string): void {
        // List of all character accents
        // (NOTE: probably not a comprehensive list, add more as encountered)
        const accentedChars: { [key: string]: string } = {
            a: 'àáâãäåāăąǎȁȃȧạảấầẩẫậắằẳẵặ',
            b: 'ḃɓḅḇ',
            c: 'çćĉċč',
            d: 'ďḋḍḏḑḓ',
            e: 'èéêëēĕėęěȅȇẹẻẽếềểễệ',
            f: 'ƒḟ',
            g: 'ĝğġģǧǵḡ',
            h: 'ĥȟḣḥḧḩḫẖ',
            i: 'ìíîïĩīĭįıȉȋịỉĩ',
            j: 'ĵǰɉ',
            k: 'ķĸƙḳḵ',
            l: 'ĺļľŀłḷḹḻḽ',
            m: 'ḿṁṃ',
            n: 'ñńņňŉŋǹṅṇṉṋ',
            o: 'òóôõöōŏőơǒǫǭȍȏȯọỏốồổỗộớờởỡợ',
            p: 'ṕṗ',
            r: 'ŕŗřȑȓṛṝṟ',
            s: 'śŝşšșṡṣṥṧṩ',
            t: 'ţťŧțṫṭṯṱẗ',
            u: 'ùúûüũūŭůűųưǔǖǘǚǜȕȗụủứừửữự',
            v: 'ṽṿ',
            w: 'ẁẃŵẅẇẉẋ',
            x: 'ẋẍ',
            y: 'ỳýŷÿỹȳẏẙỵỷỹ',
            z: 'źżžẑẓẕ'
        };

        // Strip out all accents first, to make life easier
        // For highlighting purposes, we want to treat accented characters as normal ones & vice versa
        searchTerm = searchTerm
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();

        searchRegex.value = Array.from(searchTerm)
            .map(c => {
                // If character has accents, add them as equivalent replacements to the regex
                if (Object.keys(accentedChars).includes(c)) {
                    return '[' + c + accentedChars[c] + ']';
                }

                // Replace bad characters with empty string
                // Escape special regex characters (like '.'), so the string isn't broken
                return c
                    .replace(/["$!*+?^{}()|[\]\\]/g, '')
                    .replace(/[.\\]/g, '\\$&')
                    .trim();
            })
            .join('');
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
            throw new Error('an extent that was not projected to wkid 4326 was passed to the geosearch store');
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
        searchRegex,
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
        setSearchRegex,
        setMapExtent
    };
});
