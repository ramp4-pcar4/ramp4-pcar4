import { IGeosearchConfig, IProvinceInfo, ISearchResult } from '../definitions';
/**
 * A class/interface that wraps around a GeoSearch object and provides additional services.
 * Can consume an optional config object upon creation.
 * The config structure can be found in schema.json, look for #/$defs/geosearch
 */
export declare class GeoSearchUI {
    config: IGeosearchConfig;
    constructor(language: string, uConfig: any);
    get typeList(): any;
    set typeList(val: any);
    /**
     * Tests a string against a goal string and returns a levenshtein distance number.
     * The lower the number, the better the match.
     *
     * @param goalText gold standard text we are comparing against
     * @param testText text to evaluate against the goal
     * @returns a weight number
     */
    levenshteinDistance(goalText: string, testText: string): number;
    /**
     * Given some string query, returns a promise that resolves as an array of search results
     * and a report of any service failures
     *
     * @param {string} userInput the search string this query is based on
     * @return {Promise}
     */
    query(userInput: string): Promise<{
        results: ISearchResult[];
        failedServs: string[];
    }>;
    /**
     * Waits for the download of province data from geogratis, then returns it
     *
     * @return {Promise<Array>} resolves to a list of formatted province objects
     */
    fetchProvinces(): Promise<Array<IProvinceInfo>>;
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
