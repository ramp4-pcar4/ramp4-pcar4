/**
 * @namespace geoSearch
 * @description A feature that provides geo location search
 */
import Provinces from './provinces';
import Types from './types';
import * as GeoSearchQuery from './query';
import type { ICustomSource, IGeosearchConfig, IProvinceInfo, ISearchResult } from '../definitions';
import { FSATOKEN } from '../definitions';
import { useGeosearchStore } from './geosearch-store';

// geosearch query services
// note "geolocation" is a service for looking up locations in canada. It is not a geolocator for the browser's location.
const GEO_LOCATE_URL = 'https://geogratis.gc.ca/services/geolocation/@{language}/locate';
const GEO_NAMES_URL = 'https://geogratis.gc.ca/services/geoname/@{language}/geonames.json';
const GEO_PROVINCES_URL = 'https://geogratis.gc.ca/services/geoname/@{language}/codes/province.json';
const GEO_TYPES_URL = 'https://geogratis.gc.ca/services/geoname/@{language}/codes/concise.json';

/**
 * A class/interface that wraps around a GeoSearch object and provides additional services.
 * Can consume an optional config object upon creation.
 * The config structure can be found in schema.json, look for #/$defs/geosearch
 */
export class GeoSearchUI {
    config: IGeosearchConfig;

    constructor(language: string, uConfig: any) {
        // If there's a geosearch config in the configuration file, set the URLs if they are provided.
        let geoLocateUrl: string;
        let geoNameUrl: string;
        let geoProvinceUrl: string;
        let geoTypesUrl: string;

        const services: any = uConfig?.serviceUrls;
        if (services) {
            geoLocateUrl = services.geoLocation ? services.geoLocation : GEO_LOCATE_URL;
            geoNameUrl = services.geoNames ? services.geoNames : GEO_NAMES_URL;
            geoProvinceUrl = services.geoProvince ? services.geoProvince : GEO_PROVINCES_URL;
            geoTypesUrl = services.geoTypes ? services.geoTypes : GEO_TYPES_URL;
        } else {
            // If the URLs are not provided, set them to be defaults.
            geoLocateUrl = GEO_LOCATE_URL;
            geoNameUrl = GEO_NAMES_URL;
            geoProvinceUrl = GEO_PROVINCES_URL;
            geoTypesUrl = GEO_TYPES_URL;
        }

        geoLocateUrl = geoLocateUrl.replace('@{language}', language);
        geoNameUrl = geoNameUrl.replace('@{language}', language);
        geoProvinceUrl = geoProvinceUrl.replace('@{language}', language);
        geoTypesUrl = geoTypesUrl.replace('@{language}', language);

        // construct a query url with a token for the FSA

        let fsaUrl = '';
        const fsaLookup: any = uConfig?.fsaBoundaries;
        if (fsaLookup && fsaLookup.serviceUrl) {
            const fsaField = fsaLookup.keyField || 'CFSAUID';

            fsaUrl = `${fsaLookup.serviceUrl}/query/?where=${fsaField}%3D'${FSATOKEN}'&outFields=${fsaField}&returnGeometry=true&f=json`;
        }

        // set default config values, if settings object is provided
        const settings: any = uConfig?.settings;
        let categories: Array<string>;
        let sortOrder: Array<string>;
        let disabledSearchTypes: Array<string>;
        let maxResults: number;
        let officialOnly: boolean;
        let customSources: ICustomSource[];

        if (settings) {
            categories = settings.categories ? settings.categories : [];
            sortOrder = settings.sortOrder ? settings.sortOrder : [];
            disabledSearchTypes = settings.disabledSearchTypes ? settings.disabledSearchTypes : [];
            maxResults = settings.maxResults > 0 ? settings.maxResults : 100; // > will fail on undefined, defaulting
            officialOnly = !!settings.officialOnly;
        } else {
            categories = [];
            sortOrder = [];
            disabledSearchTypes = [];
            maxResults = 100;
            officialOnly = false;
        }
        customSources = uConfig?.customSources ?? [];
        customSources = customSources.map(src => ({
            ...src,
            onSearch: async (searchTerm: string): Promise<ISearchResult[]> => {
                const data: Array<any> = (src as any).data ?? [];
                const geosearchStore = useGeosearchStore();
                const cleanedTerm = geosearchStore.cleanVal(searchTerm).replace('*', '');
                return data
                    .filter(item => item.name.toLowerCase().includes(cleanedTerm))
                    .map<ISearchResult>(item => ({
                        name: item.name,
                        type: src.catName,
                        bbox: item.bbox,
                        flav: 'nme',
                        position: [0, 0],
                        location: {
                            province: this.config.provinces.abbrToProvince(item.prov),
                            city: item.city
                        },
                        order: sortOrder.indexOf(src.code) >= 0 ? sortOrder.indexOf(src.code) : sortOrder.length
                    }));
            }
        }));

        // match a new config object with the one defined in definitions.ts
        this.config = {
            language,
            geoNameUrl,
            geoLocateUrl,
            fsaUrl,
            types: Types(language, geoTypesUrl), // list of type filters
            provinces: Provinces(geoProvinceUrl), // list of province filters
            categories,
            sortOrder,
            disabledSearchTypes,
            maxResults,
            officialOnly,
            customSources
        };
        // remove any types to be excluded from config
        this.config.types.filterValidTypes(uConfig?.excludeTypes);

        (<any>this)._typeList = [];
        (<any>this)._excludedTypes = uConfig?.excludeTypes || [];
    }

    get typeList() {
        return (<any>this)._typeList;
    }

    set typeList(val) {
        (<any>this)._typeList = val;
    }

    /**
     * Tests a string against a goal string and returns a levenshtein distance number.
     * The lower the number, the better the match.
     *
     * @param goalText gold standard text we are comparing against
     * @param testText text to evaluate against the goal
     * @returns a weight number
     */
    levenshteinDistance(goalText: string, testText: string) {
        // sanitize strings
        testText = testText.toLowerCase().trim();
        goalText = decodeURI(goalText.toLowerCase().replace('*', ''));

        /* Use a modified levenshtein distance algorithm to compute the 'distance' between the query and the result.
         The distance is computed by assessing each letter where:
         - insertion costs 0.2
         - deletion, substitution cost 1
        */
        const levDistance = [];
        for (let i = 0; i <= testText.length; i++) {
            levDistance[i] = [i];
            for (let j = 1; j <= goalText.length; j++) {
                levDistance[i][j] =
                    i === 0
                        ? j
                        : Math.min(
                              levDistance[i][j - 1] + 1, // delete
                              levDistance[i - 1][j] + 0.2, // insert
                              levDistance[i - 1][j - 1] + (goalText[j - 1] === testText[i - 1] ? 0 : 1) // substitute
                          );
            }
        }
        return levDistance[testText.length][goalText.length];
    }

    /**
     * Given some string query, returns a promise that resolves as an array of search results
     * and a report of any service failures
     *
     * @param {string} userInput the search string this query is based on
     * @return {Promise}
     */
    async query(userInput: string) {
        /*
        Potential improvement for later.
        Bulk of this methods work is to sort results by priority and then chop off at the max results.
        This happens BEFORE any of the top-filters get applied (province, type, probably "visible on map").
        So lets say we have 200 raw results, 20 are in Ontario. Then we chop to the top 100, leaving 10 Ontario
        records in the return value.
        The UI gets this, applies an Ontario filter, and shows 10 records. A better scenario would be to filter here
        before the chop, then we would show all 20 records.
        There is a trade-off to this. Doing the filters afterwards means we can change the filters without
        re-running the server hits. The geosearch store maintains an array called savedResults, possibly
        we could start putting the queryPayload.results in there instead of the sorted and clipped list.
        Would then need to abstract the sort & clip to its own method, so it could be called here and
        when a top-filter changes.
        Also worth noting, queries against the name server are already capped at the max limit (see `getUrl()` ).
        This "doubling" scenario only affects standard text searches, where you get a pile of name results,
        and also a pile of address results. Might be a nothingburger, but could be helpful when user doesn't
        have a very precise search word and it spams lots of results.
        Becomes worse if max results is config'd to a lower value.
        */

        // run query based on search string input
        const queryPayload = await GeoSearchQuery.runQuery(this.config, userInput.toUpperCase());

        // anything with an order property lower than this has a defined priority (from config, or is very special)
        const priorityLimit = this.config.sortOrder.length;
        const priorityResults = queryPayload.results.filter(vr => vr.order < priorityLimit);
        const normalResults = queryPayload.results.filter(vr => vr.order >= priorityLimit); // technically should never be greater

        priorityResults.sort((a, b) => a.order - b.order);

        // very fancy future enhancement. take the sorted priority results. split into buckets of same order values
        // apply a levenshtein to each bucket. then recombine.
        // e.g. if ADDR is priority 0 (top), they will come first, but be in random order. this will put best address
        // matches first.

        const maxRes = this.config.maxResults;
        let final: Array<ISearchResult>;

        if (priorityResults.length >= maxRes) {
            // already enough hits in priority. givver.
            final = priorityResults.slice(0, maxRes);
        } else {
            // levenshtein the rest.
            // store calc in order field to avoid running it every sort operation
            normalResults.forEach(vr => (vr.order = this.levenshteinDistance(queryPayload.query, vr.name)));
            normalResults.sort((a, b) => a.order - b.order);

            final = priorityResults.concat(normalResults.slice(0, maxRes - priorityResults.length));
        }

        return {
            results: final,
            failedServs: queryPayload.failedServs
        };
    }

    /**
     * Waits for the download of province data from geogratis, then returns it
     *
     * @return {Promise<Array>} resolves to a list of formatted province objects
     */
    fetchProvinces(): Promise<Array<IProvinceInfo>> {
        // uses an interval to watch for the flag on the .provinces object.
        // when the flag hits, it signals the download is done.

        return new Promise(resolve => {
            const provsWatcher = setInterval(() => {
                if (this.config.provinces.listFetched) {
                    clearInterval(provsWatcher);
                    resolve(this.config.provinces.provinceList);
                }
            }, 100);
        });
    }

    /**
     * Return a promise that resolves to a list of formatted type objects
     *
     * @return {Promise<Array>} a promise that resolves to a list of formatted type objects
     */
    fetchTypes(): Promise<Array<any>> {
        return new Promise(resolve => {
            const typesWatcher = setInterval(() => {
                if (this.config.types.typesFetched) {
                    clearInterval(typesWatcher);
                    const typeList: { code: any; name: any }[] = [];
                    // add a '...' option as a way to clear province filter
                    const reset = {
                        code: -1,
                        name: '...'
                    };
                    typeList.push(reset);
                    // obtain the type filters stored in config
                    const rawTypes = this.config.types.allTypes;
                    for (const type in rawTypes) {
                        if (!(<any>this)._excludedTypes.includes(type)) {
                            typeList.push({
                                code: type,
                                name: rawTypes[type]
                            });
                        }
                    }
                    if (this.config.customSources.length) {
                        this.config.customSources.forEach(src => {
                            if (!typeList.some(t => t.code === src.code)) {
                                typeList.push({
                                    code: src.code,
                                    name: src.catName
                                });
                            }
                        });
                    }
                    this.typeList = typeList;
                    resolve(this.typeList);
                }
            }, 100);
        });
    }
}

export default {
    feature: 'geoSearch',
    GeoSearchUI
};
