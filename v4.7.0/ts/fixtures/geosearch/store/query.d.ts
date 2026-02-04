import type { AddressResultList, IFSAResult, IGeosearchConfig, INameResponse, INTSResult, LocateResponseList, NameResultList, NTSResultList, queryFeatureResults, ResultList } from '../definitions';
export declare function make(config: IGeosearchConfig, query: string): Query;
export declare class Query {
    config: IGeosearchConfig;
    query: string | undefined;
    failedServs: string[];
    results: ResultList;
    onComplete: any;
    latLongResult: any;
    featureResults: queryFeatureResults[];
    resultType: string;
    constructor(config: IGeosearchConfig, query?: string);
    search(): Promise<NameResultList>;
    private getUrl;
    normalizeNameItems(items: INameResponse[]): NameResultList;
    jsonRequest(url: string): Promise<unknown>;
    locateByQuery(): Promise<LocateResponseList>;
    nameByLatLon(lat: number, lon: number, restrict?: number[]): any;
}
export declare class LatLongQuery extends Query {
    constructor(config: IGeosearchConfig, query: string);
}
export declare class FSAQuery extends Query {
    constructor(config: IGeosearchConfig, query: string);
    formatLocationResult(): Promise<IFSAResult | undefined>;
}
/**
 * National Topographic System (NTS)
 *
 * The following definitions have the form "name (value constraints) - description"
 *
 * Sheet (two or three digits)      - aka "Map Numbers" are blocks of approximately 4,915,200 hectares.
 * Map Units Subdivision ([A-P])    - each sheet is subdivided further into 16 blocks, approximately 307,200 hectares
 * Map Sheet Unit ([1-16])          - each map unit is subdivided further into 16 blocks, approximately 19,200 hectares
 * Blocks ([A-L])                   - each map sheet unit is subdivided further into 12 blocks, approximately 1600 hectares
 * Units ([1-100]*)                 - each block is finally divided into 100 units, approximately 64 hectares
 *
 * Two subsets of the complete NTS format is supported:
 *     - Sheet and Map Unit Subdivision
 *     - Sheet, Map Unit Subdivision, and Map Sheet Unit
 *
 * Note that "Blocks" and "Units" are currently not supported on geogratis and are ignored on the query.
 */
export declare class NTSQuery extends Query {
    unitName: string;
    unit: INTSResult;
    mapSheets: NTSResultList;
    constructor(config: IGeosearchConfig, query: string);
    locateToResult(lrl: LocateResponseList): NTSResultList;
    equals(otherQ: NTSQuery): boolean;
}
export declare class AddressQuery extends Query {
    constructor(config: IGeosearchConfig, query: string);
    locateToResult(lrl: LocateResponseList): AddressResultList;
}
