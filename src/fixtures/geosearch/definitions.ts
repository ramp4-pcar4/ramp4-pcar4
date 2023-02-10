export interface IGenericObjectType {
    [key: string]: string;
}

// config object is used by all query classes
// this is a flattened version from the actual RAMP config. Easier to bind to.
export interface IGeosearchConfig {
    geoNameUrl: string;
    geoLocateUrl: string;
    categories: string[];
    sortOrder: string[];
    disabledSearchTypes: string[];
    maxResults: number;
    officialOnly: boolean;
    language: string;
    types: ITypes;
    provinces: IProvinces;
}

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
    list: IGenericObjectType;
    listFetched: boolean;
    fsaToProvinces(fsa: string): IGenericObjectType;
}

export interface ILatLon {
    lat: number;
    lon: number;
}

export interface IRawNameResult {
    items: INameResponse[];
}

export interface IFSAResult {
    fsa: string; // "H0H"
    code: string; // "FSA"
    desc: string; // "Forward Sortation Area"
    province: string; // Ontario
    _provinces: IGenericObjectType; // {ON: "Ontario"} or {ON: "Ontario", MB: "Manitoba"}
    LatLon: ILatLon;
}

export interface INTSResult {
    nts: string; // 064D or 064D06
    location: string; // "NUMABIN BAY"
    code: string; // "NTS"
    desc: string; // "National Topographic System"
    LatLon: ILatLon;
    bbox: number[];
}

export interface IAddressResult {
    name: string; // "123 Yonge Street"
    city: string; // "Toronto"
    province: string; // "ON"
    desc: string; // "Street Address"
    LatLon: ILatLon;
    bbox: number[];
}

export interface ILatLongResult {
    latlong: string; // "54.54,-91.45"
    desc: string; // "Latitude/Longitude",
    LatLon: ILatLon;
    bbox: number[];
}

// defines results from a geoNames search
export interface INameResult {
    name: string;
    location: string;
    province: string; // "Ontario"
    type: string; // "Lake"
    LatLon: ILatLon;
    bbox: number[];
    order: number;
}

export interface ILocateResponse {
    title: string;
    type?: string;
    bbox?: number[];
    geometry: { coordinates: number[] };
}

export type LocateResponseList = ILocateResponse[];
export type NameResultList = INameResult[];
export type NTSResultList = INTSResult[];
export type AddressResultList = IAddressResult[];
export type ResultList = (INameResult | IAddressResult)[];
export type queryFeatureResults =
    | IFSAResult
    | INTSResult
    | IAddressResult
    | ILatLongResult
    | undefined;
