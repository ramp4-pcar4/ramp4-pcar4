import type { IGeosearchConfig } from '../definitions';
import type { Query } from './query';
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
export declare class GeoSearchUI {
    config: IGeosearchConfig;
    constructor(language: string, uConfig: any);
    get provinceList(): any;
    get typeList(): any;
    set provinceList(val: any);
    set typeList(val: any);
    levenshteinDistance(q: Query, result: string): number;
    /**
     * Find and return the province object in the province list
     *
     * @param {string} province the target province
     * @return {Object}         associated province object
     */
    findProvinceObj(province: string): any;
    /**
     * Given some string query, returns a promise that resolves as a formatted location object
     *
     * @param {string} q the search string this query is based on
     * @return {Promise}
     */
    query(q: string): any;
    /**
     * Return a promise that resolves to a list of formatted province objects
     *
     * @return {Promise<Array>} a promise that resolves to a list of formatted province objects
     */
    fetchProvinces(): Promise<Array<any>>;
    /**
     * Return a promise that resolves to a list of formatted type objects
     *
     * @return {Promise<Array>} a promise that resolves to a list of formatted type objects
     */
    fetchTypes(): Promise<Array<any>>;
}
declare const _default: {
    feature: string;
    GeoSearchUI: typeof GeoSearchUI;
};
export default _default;
