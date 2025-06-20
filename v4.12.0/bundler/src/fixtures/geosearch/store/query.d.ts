import { IGeosearchConfig, ISearchResult, SearchResultList } from '../definitions';
/**
 * Houses all the data for an active geosearch query
 */
export declare class QueryPayload {
    /**
     * Collection of goodness
     */
    config: IGeosearchConfig;
    /**
     * What the user typed
     */
    query: string;
    /**
     * Error messages
     */
    failedServs: string[];
    /**
     * Results list
     */
    results: SearchResultList;
    constructor(config: IGeosearchConfig, query?: string);
    addResult(result: ISearchResult | SearchResultList): void;
}
export declare function runQuery(config: IGeosearchConfig, query: string): Promise<QueryPayload>;
/**
 * Runs a url that expects a JSON return value. Returns the result when it arrives
 * @param url
 * @returns
 */
export declare const jsonRequest: (url: string) => Promise<any>;
