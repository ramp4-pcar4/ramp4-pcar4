import type { ICustomSource } from "./store";

export interface IGenericObjectType {
    [key: string]: string;
}

/**
 * FSA / NTS / Address / Name / LatLon
 */
export type FlavourKey = 'fsa' | 'nts' | 'add' | 'nme' | 'llg';

/**
 * Config object is used by all query classes.
 * this is a flattened version from the actual RAMP config. Easier to bind to.
 */
export interface IGeosearchConfig {
    geoNameUrl: string;
    geoLocateUrl: string;
    fsaUrl: string;
    categories: string[];
    /**
     * These are concise codes in a priority order. Anything not in the list will come after codes in the list.
     * If empty list, the levenshtein sort is used.
     */
    sortOrder: string[];
    disabledSearchTypes: string[];
    maxResults: number;
    officialOnly: boolean;
    language: string;
    types: ITypes;
    provinces: IProvinces;
    customSources?: ICustomSource[];
}

/**
 * Individual record from the geoname service
 */
export interface INameResponse {
    name: string;
    location: string;
    province: { code: string };
    concise: { code: string };
    latitude: number;
    longitude: number;
    bbox: number[];
}

export interface ITypes {
    allTypes: IGenericObjectType;
    validTypes: IGenericObjectType;
    typesFetched: boolean;
    filterValidTypes(exclude?: string | string[]): IGenericObjectType;
}

export interface IProvinces {
    provinceList: Array<IProvinceInfo>;
    listFetched: boolean;
    fsaToProvince(fsa: string): IProvinceInfo;
    codeToProvince(provCode: number): IProvinceInfo;
    nameToProvince(provName: string): IProvinceInfo;
    abbrToProvince(provAbbr: string): IProvinceInfo;
}

/**
 * Custom geosearch search source structure
 *
 * @interface ICustomSource
 * @property {String} code Unique code identifier for the type
 * @property {String} catName Category name for the type
 * @property {(term: string) => Promise<ISearchResult[]>} onSearch Function that searches by a term and returns matching results
 */

export interface ICustomSource {
    code: string;
    catName: string;
    onSearch: (term: string) => Promise<ISearchResult[]>;
}

/**
 * Query result object from geoname service
 */
export interface IRawNameResult {
    items: INameResponse[];
}

/**
 * Individual record from the geolocation service
 */
export interface ILocationResponse {
    title: string;
    type?: string;
    bbox?: number[];
    geometry: { coordinates: number[] };
}

export type LocationResponseList = ILocationResponse[];

// used for injecting the desired code in the fsa query url
export const FSATOKEN = '~FSA~';

export interface IProvinceInfo {
    /**
     * Numeric province code
     */
    code: number;
    /**
     * Province abbreviation
     */
    abbr: string;

    /**
     * Full name
     */
    name: string;
}

export interface ISearchResult {
    /**
     * Primary display name
     */
    name: string;

    /**
     * What shows on the second line.
     */
    type: string;

    /**
     * Bounding box to zoom to, in Latlon
     */
    bbox: Array<number>;

    /**
     * What the source of this entry was
     */
    flav: FlavourKey;

    /**
     * Encodes a position (usually a centroid) in Latlon
     */
    position: [number, number];
    location: {
        /**
         * Not always an actual city. Name of appropriate sub-province location, if one exists
         */
        city?: string;

        /**
         * Province information object
         */
        province?: IProvinceInfo;
    };

    /**
     * Lower number appears higher in the list
     */
    order: number;
}

export type SearchResultList = Array<ISearchResult>;
