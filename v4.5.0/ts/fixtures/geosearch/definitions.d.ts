export interface IGenericObjectType {
    [key: string]: string;
}
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
    province: {
        code: string;
    };
    concise: {
        code: string;
    };
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
    fsa: string;
    code: string;
    desc: string;
    province: string;
    _provinces: IGenericObjectType;
    LatLon: ILatLon;
}
export interface INTSResult {
    nts: string;
    location: string;
    code: string;
    desc: string;
    LatLon: ILatLon;
    bbox: number[];
}
export interface IAddressResult {
    name: string;
    city: string;
    province: string;
    desc: string;
    LatLon: ILatLon;
    bbox: number[];
}
export interface ILatLongResult {
    latlong: string;
    desc: string;
    LatLon: ILatLon;
    bbox: number[];
}
export interface INameResult {
    name: string;
    location: string;
    province: string;
    type: string;
    LatLon: ILatLon;
    bbox: number[];
    order: number;
}
export interface ILocateResponse {
    title: string;
    type?: string;
    bbox?: number[];
    geometry: {
        coordinates: number[];
    };
}
export declare type LocateResponseList = ILocateResponse[];
export declare type NameResultList = INameResult[];
export declare type NTSResultList = INTSResult[];
export declare type AddressResultList = IAddressResult[];
export declare type ResultList = (INameResult | IAddressResult)[];
export declare type queryFeatureResults = IFSAResult | INTSResult | IAddressResult | ILatLongResult | undefined;
