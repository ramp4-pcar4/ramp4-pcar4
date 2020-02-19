/**
 * @namespace geoSearch
 * @description A feature that provides geo location search
 */

import { GeoSearch } from './geosearch';

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
 *      settings: Object,
 *      geoLocateUrl: string,
 *      geoNameUrl: string
 * }
 */
export class GeoSearchUI {
    constructor(config = {}) {
        // initialize geosearch object and default config properties if not provided
        (<any>this)._geoSearchObj = new GeoSearch(config);
        (<any>this)._lang = (<any>config).language || 'en';
        (<any>this)._provinceList = [];
        (<any>this)._typeList = [];
        (<any>this)._excludedTypes = (<any>config).excludeTypes || [];
        (<any>this)._settings = (<any>config).settings || {};
    }

    get lang() {
        return (<any>this)._lang;
    }
    get provinceList() {
        return (<any>this)._provinceList;
    }
    get typeList() {
        return (<any>this)._typeList;
    }
    get settings() {
        return (<any>this)._settings;
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
        return this.fetchProvinces().find((p: any) => {
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
        // TODO: return empty promise for now
        return Promise.resolve();
    }

    /**
     * Return a list of formatted province objects
     *
     * @return {Array} list of formatted province objects
     */
    fetchProvinces() {
        let provinceList = [];
        // add a '...' option as a way to clear province filter
        const reset = {
            code: -1,
            abbr: '...',
            name: '...'
        };
        provinceList.push(reset);

        // obtain the province filter data from stored geosearch object
        let rawProvinces = (<any>this)._geoSearchObj.config.provinces.list;
        for (let code in rawProvinces) {
            provinceList.push({
                code: code,
                abbr: (<any>CODE_TO_ABBR)[code],
                name: rawProvinces[code]
            });
        }
        this.provinceList = provinceList;
        return this.provinceList;
    }

    /**
     * Return a list of formatted type objects
     *
     * @return {Array} a list of a formatted type objects
     */
    fetchTypes() {
        let typeList = [];
        // add a '...' option as a way to clear province filter
        const reset = {
            code: -1,
            name: '...'
        };
        typeList.push(reset);

        // obtain the type filter data from stored geosearch object
        let rawTypes = (<any>this)._geoSearchObj.config.types.allTypes;
        for (let type in rawTypes) {
            if (!(<any>this)._excludedTypes.includes(type)) {
                typeList.push({
                    code: type,
                    name: rawTypes[type]
                });
            }
        }
        this.typeList = typeList;
        return this.typeList;
    }
}

export default {
    feature: 'geoSearch',
    GeoSearchUI
};
