/**
 * @namespace geoSearch
 * @description A feature that provides geo location search
 */
import Provinces from './provinces';
import Types from './types';
import * as Q from './query';
import type { IGeosearchConfig } from '../definitions';

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
        let maxResults: number;
        let officialOnly: boolean;
        if (settings) {
            categories = settings.categories ? settings.categories : [];
            sortOrder = settings.sortOrder ? settings.sortOrder : [];
            maxResults = settings.maxResults > 0 ? settings.maxResults : 100; // > will fail on undefined, defaulting
            officialOnly = !!settings.officialOnly;
        } else {
            categories = [];
            sortOrder = [];
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
            (q: any) => {
                // any feature result requires a manual first entry
                let featureResult: any[] = [];
                if (q.featureResults) {
                    if (q.featureResults.fsa) {
                        // add first geosearch result as location of FSA itself
                        const bboxRange = 0.02;
                        featureResult = [
                            {
                                name: q.featureResults.fsa,
                                bbox: [
                                    q.featureResults.LatLon.lon + bboxRange,
                                    q.featureResults.LatLon.lat - bboxRange,
                                    q.featureResults.LatLon.lon - bboxRange,
                                    q.featureResults.LatLon.lat + bboxRange
                                ],
                                type: q.featureResults.desc,
                                position: [
                                    q.featureResults.LatLon.lon,
                                    q.featureResults.LatLon.lat
                                ],
                                location: {
                                    latitude: q.featureResults.LatLon.lat,
                                    longitude: q.featureResults.LatLon.lon,
                                    province: this.findProvinceObj(
                                        q.featureResults.province
                                    )
                                }
                            }
                        ];
                    } else if (q.featureResults.nts) {
                        // add first geosearch result as location of NTS map number
                        featureResult = [
                            {
                                name: q.featureResults.nts,
                                bbox: q.featureResults.bbox,
                                type: q.featureResults.desc,
                                position: [
                                    q.featureResults.LatLon.lon,
                                    q.featureResults.LatLon.lat
                                ],
                                location: {
                                    city: q.featureResults.location,
                                    latitude: q.featureResults.LatLon.lat,
                                    longitude: q.featureResults.LatLon.lon
                                }
                            }
                        ];
                    }
                } else if (q.latLongResult !== undefined) {
                    // add first geosearch result as location of lat/lon coordinates
                    featureResult = [q.latLongResult];
                }
                // console.log("first feature result: ", featureResult);

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
                    }
                }));
                // console.log("remaining query results: ", queryResult);
                return featureResult.concat(queryResult);
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
