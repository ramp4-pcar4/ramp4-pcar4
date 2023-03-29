/**
 * @namespace geoSearch
 * @description A feature that provides geo location search
 */
import Provinces from './provinces';
import Types from './types';
import * as Q from './query';
import type { IGeosearchConfig } from '../definitions';
import type { Query } from './query';

// geosearch query services
// note "geolocation" is a service for looking up locations in canada. It is not a geolocator for the browser's location.
const GEO_LOCATE_URL =
    'https://geogratis.gc.ca/services/geolocation/@{language}/locate';
const GEO_NAMES_URL =
    'https://geogratis.gc.ca/services/geoname/@{language}/geonames.json';
const GEO_PROVINCES_URL =
    'https://geogratis.gc.ca/services/geoname/@{language}/codes/province.json';
const GEO_TYPES_URL =
    'https://geogratis.gc.ca/services/geoname/@{language}/codes/concise.json';

// translates codes from json file to province abbreviations
const CODE_TO_ABBR = {
    10: 'NL',
    11: 'PE',
    12: 'NS',
    13: 'NB',
    24: 'QC',
    35: 'ON',
    46: 'MB',
    47: 'SK',
    48: 'AB',
    59: 'BC',
    60: 'YU',
    61: 'NT',
    62: 'NU',
    72: 'UF',
    73: 'IW'
};

/**
 * A class/interface that wraps around a GeoSearch object and provides additional services.
 * Can consume an optional config object upon creation.
 *
 * The following are valid config object properties:
 * {
 *      excludeTypes: string | Array<string>,
 *      language: string,
 *      geoNames: string,
 *      geoLocation: string
 * }
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
            geoLocateUrl = services.geoLocation
                ? services.geoLocation
                : GEO_LOCATE_URL;
            geoNameUrl = services.geoNames ? services.geoNames : GEO_NAMES_URL;
            geoProvinceUrl = services.geoProvince
                ? services.geoProvince
                : GEO_PROVINCES_URL;
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

        // set default config values, if settings object is provided
        const settings: any = uConfig?.settings;
        let categories: Array<string>;
        let sortOrder: Array<string>;
        let disabledSearchTypes: Array<string>;
        let maxResults: number;
        let officialOnly: boolean;
        if (settings) {
            categories = settings.categories ? settings.categories : [];
            sortOrder = settings.sortOrder ? settings.sortOrder : [];
            disabledSearchTypes = settings.disabledSearchTypes
                ? settings.disabledSearchTypes
                : [];
            maxResults = settings.maxResults > 0 ? settings.maxResults : 100; // > will fail on undefined, defaulting
            officialOnly = !!settings.officialOnly;
        } else {
            categories = [];
            sortOrder = [];
            disabledSearchTypes = [];
            maxResults = 100;
            officialOnly = false;
        }

        // match a new config object with the one defined in definitions.ts
        this.config = {
            language,
            geoNameUrl,
            geoLocateUrl,
            types: Types(language, geoTypesUrl), // list of type filters
            provinces: Provinces(language, geoProvinceUrl), // list of province filters
            categories,
            sortOrder,
            disabledSearchTypes,
            maxResults,
            officialOnly
        };
        // remove any types to be excluded from config
        this.config.types.filterValidTypes(uConfig?.excludeTypes);
        (<any>this)._provinceList = [];
        (<any>this)._typeList = [];
        (<any>this)._excludedTypes = uConfig?.excludeTypes || [];
    }

    get provinceList() {
        return (<any>this)._provinceList;
    }
    get typeList() {
        return (<any>this)._typeList;
    }
    set provinceList(val) {
        (<any>this)._provinceList = val;
    }
    set typeList(val) {
        (<any>this)._typeList = val;
    }

    levenshteinDistance(q: Query, result: string) {
        // sanitize strings
        result = result.toLowerCase().trim();
        const query = decodeURI(q.query!.toLowerCase().replace('*', ''));

        /* Use a modified levenshtein distance algorithm to compute the 'distance' between the query and the result.
         The distance is computed by assessing each letter where:
         - insertion costs 0.2
         - deletion, substitution cost 1
        */
        const levDistance = [];
        for (let i = 0; i <= result.length; i++) {
            levDistance[i] = [i];
            for (let j = 1; j <= query.length; j++) {
                levDistance[i][j] =
                    i === 0
                        ? j
                        : Math.min(
                              levDistance[i][j - 1] + 1, // delete
                              levDistance[i - 1][j] + 0.2, // insert
                              levDistance[i - 1][j - 1] +
                                  (query[j - 1] === result[i - 1] ? 0 : 1) // substitute
                          );
            }
        }
        return levDistance[result.length][query.length];
    }

    /**
     * Find and return the province object in the province list
     *
     * @param {string} province the target province
     * @return {Object}         associated province object
     */
    findProvinceObj(province: string) {
        return this.provinceList.find((p: any) => {
            return p.name === province;
        });
    }

    /**
     * Given some string query, returns a promise that resolves as a formatted location object
     *
     * @param {string} q the search string this query is based on
     * @return {Promise}
     */
    query(q: string) {
        // run query based on search string input
        return Q.make(this.config, q.toUpperCase()).onComplete.then(
            (q: Query) => {
                // any feature result requires a manual first entry
                let featureResult: any[] = [];
                if (q.featureResults.length > 0) {
                    if (q.resultType === 'fsa') {
                        // add first geosearch result as location of FSA itself
                        featureResult = q.featureResults.map((fsa: any) => ({
                            name: fsa.fsa,
                            bbox: [
                                fsa.LatLon.lon + 0.02,
                                fsa.LatLon.lat - 0.02,
                                fsa.LatLon.lon - 0.02,
                                fsa.LatLon.lat + 0.02
                            ],
                            type: fsa.desc,
                            position: [fsa.LatLon.lon, fsa.LatLon.lat],
                            location: {
                                latitude: fsa.LatLon.lat,
                                longitude: fsa.LatLon.lon,
                                province: this.findProvinceObj(fsa.province)
                            },
                            order: -1
                        }));
                    } else if (q.resultType === 'nts') {
                        // add first geosearch result as location of NTS map number
                        featureResult = q.featureResults.map((nts: any) => ({
                            name: nts.nts,
                            bbox: nts.bbox,
                            type: nts.desc,
                            position: [nts.LatLon.lon, nts.LatLon.lat],
                            location: {
                                city: nts.location,
                                latitude: nts.LatLon.lat,
                                longitude: nts.LatLon.lon
                            },
                            order: -1
                        }));
                    } else if (q.resultType === 'address') {
                        featureResult = q.featureResults.map(
                            (address: any) => ({
                                name: address.name,
                                bbox: [
                                    address.LatLon.lon + 0.002,
                                    address.LatLon.lat - 0.002,
                                    address.LatLon.lon - 0.002,
                                    address.LatLon.lat + 0.002
                                ],
                                type: address.desc,
                                position: [
                                    address.LatLon.lon,
                                    address.LatLon.lat
                                ],
                                location: {
                                    city: address.city,
                                    latitude: address.LatLon.lat,
                                    longitude: address.LatLon.lon,
                                    province: this.findProvinceObj(
                                        address.province
                                    )
                                },
                                order:
                                    this.config.sortOrder.indexOf('ADDR') >= 0
                                        ? this.config.sortOrder.indexOf('ADDR')
                                        : this.config.sortOrder.length
                            })
                        );
                        if (this.config.sortOrder.length > 0) {
                            // if custom sorting in place, apply lev only to street addresses
                            featureResult = featureResult.sort(
                                (a: any, b: any) => {
                                    return this.levenshteinDistance(q, a.name) >
                                        this.levenshteinDistance(q, b.name)
                                        ? 1
                                        : -1;
                                }
                            );
                        }
                    }
                } else if (q.resultType === 'latlong') {
                    // add first geosearch result as location of lat/lon coordinates
                    featureResult = [q.latLongResult];
                    featureResult[0].order = -1;
                }
                // console.log('first feature result: ', featureResult);
                // format returned query results appropriately to support zoom/extent functionality
                const queryResult = q.results.map((item: any) => ({
                    name: item.name,
                    bbox: item.bbox,
                    type: item.type,
                    position: [item.LatLon.lon, item.LatLon.lat],
                    location: {
                        city: item.location,
                        latitude: item.LatLon.lat,
                        longitude: item.LatLon.lon,
                        province: this.findProvinceObj(item.province)
                    },
                    order: item.order
                }));

                // console.log('remaining query results: ', queryResult);
                return {
                    results: featureResult
                        .concat(queryResult)
                        .slice(0, this.config.maxResults)
                        .sort((a: any, b: any) => {
                            // use custom sort order if provided, otherwise lev sort by default
                            if (this.config.sortOrder.length > 0) {
                                return a.order > b.order ? 1 : -1;
                            } else {
                                return this.levenshteinDistance(q, a.name) >
                                    this.levenshteinDistance(q, b.name)
                                    ? 1
                                    : -1;
                            }
                        }),
                    failedServs: q.failedServs
                };
            }
        );
    }

    /**
     * Return a promise that resolves to a list of formatted province objects
     *
     * @return {Promise<Array>} a promise that resolves to a list of formatted province objects
     */
    fetchProvinces(): Promise<Array<any>> {
        return new Promise(resolve => {
            const provsWatcher = setInterval(() => {
                if (this.config.provinces.listFetched) {
                    clearInterval(provsWatcher);
                    const provinceList = [];
                    // add a '...' option as a way to clear province filter
                    const reset = {
                        code: -1,
                        abbr: '...',
                        name: '...'
                    };
                    provinceList.push(reset);

                    // obtain province filters stored in config
                    const rawProvinces = this.config.provinces.list;
                    for (const code in rawProvinces) {
                        provinceList.push({
                            code: code,
                            abbr: (<any>CODE_TO_ABBR)[code],
                            name: rawProvinces[code]
                        });
                    }
                    this.provinceList = provinceList;
                    resolve(this.provinceList);
                }
            });
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
                    const typeList = [];
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
                    this.typeList = typeList;
                    resolve(this.typeList);
                }
            }, 250);
        });
    }
}

export default {
    feature: 'geoSearch',
    GeoSearchUI
};
