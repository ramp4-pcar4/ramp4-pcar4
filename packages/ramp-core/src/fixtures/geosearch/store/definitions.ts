export interface GenericObjectType {
    [key: string]: string;
}

// config object is used by all query classes
export interface MainConfig {
    geoNameUrl: string;
    geoLocateUrl: string;
    categories: string[];
    sortOrder: string[];
    maxResults: number;
    officialOnly: boolean;
    language: string;
    types: Types;
    provinces: Provinces;
}

export interface NameResponse {
    name: string;
    location: string;
    province: { code: string };
    concise: { code: string };
    latitude: number;
    longitude: number;
    bbox: number[];
}

export interface Types {
    allTypes: GenericObjectType;
    validTypes: GenericObjectType;
    filterValidTypes(exclude?: string | string[]): GenericObjectType;
}

export interface Provinces {
    list: GenericObjectType;
}

export interface LatLon {
    lat: number;
    lon: number;
}

export interface RawNameResult {
    items: NameResponse[];
}

// defines results from a geoNames search
export interface NameResult {
    name: string;
    location: string;
    province: string; // "Ontario"
    type: string; // "Lake"
    LatLon: LatLon;
    bbox: number[];
}

export type NameResultList = NameResult[];
