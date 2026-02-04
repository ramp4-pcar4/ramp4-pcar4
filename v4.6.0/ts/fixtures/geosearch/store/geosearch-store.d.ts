import type { MapExtent } from './geosearch-state';
export declare const useGeosearchStore: import("pinia").StoreDefinition<"geosearch", import("pinia")._UnwrapAll<Pick<{
    GSservice: import("vue").Ref<{
        config: {
            geoNameUrl: string;
            geoLocateUrl: string;
            categories: string[];
            sortOrder: string[];
            disabledSearchTypes: string[];
            maxResults: number;
            officialOnly: boolean;
            language: string;
            types: {
                allTypes: import("../definitions").IGenericObjectType;
                validTypes: import("../definitions").IGenericObjectType;
                typesFetched: boolean;
                filterValidTypes: (exclude?: string | string[] | undefined) => import("../definitions").IGenericObjectType;
            };
            provinces: {
                list: import("../definitions").IGenericObjectType;
                listFetched: boolean;
                fsaToProvinces: (fsa: string) => import("../definitions").IGenericObjectType;
            };
        };
        provinceList: any;
        typeList: any;
        levenshteinDistance: (q: import("./query").Query, result: string) => number;
        findProvinceObj: (province: string) => any;
        query: (q: string) => any;
        fetchProvinces: () => Promise<any[]>;
        fetchTypes: () => Promise<any[]>;
    }>;
    queryParams: import("vue").Ref<{
        type: string;
        province: string;
        extent: {
            readonly type: import("../../../geo/api").GeometryType;
            readonly xmin: number;
            readonly ymin: number;
            readonly xmax: number;
            readonly ymax: number;
            center: () => import("../../../geo/api").Point;
            expand: (factor: number) => import("../../../geo/api").Extent;
            clone: () => import("../../../geo/api").Extent;
            contains: (testPoint: import("../../../geo/api").Point) => boolean;
            toArray: () => number[][];
            toPolygonArray: () => number[][][];
            toPolygon: () => import("../../../geo/api").Polygon;
            isEqual: (e: import("../../../geo/api").Extent | undefined) => boolean;
            toESRI: () => __esri.Extent;
            toGeoJSON: () => import("geojson").Polygon;
            sr: {
                wkid: number | undefined;
                latestWkid: number | undefined;
                wkt: string | undefined;
                isEqual: (otherSR: import("../../../geo/api").SpatialReference) => boolean;
                clone: () => import("../../../geo/api").SpatialReference;
                lean: () => object;
                isWebMercator: () => boolean;
                toESRI: () => __esri.SpatialReference;
                toGeoJSON: () => import("geojson").NamedCoordinateReferenceSystem;
            };
            readonly id: string;
            invalid: () => boolean;
        } | undefined;
    }>;
    resultsVisible: import("vue").Ref<boolean>;
    searchVal: import("vue").Ref<string>;
    lastSearchVal: import("vue").Ref<string>;
    searchResults: import("vue").Ref<any[]>;
    savedResults: import("vue").Ref<any[]>;
    loadingResults: import("vue").Ref<boolean>;
    failedServices: import("vue").Ref<string[]>;
    getProvinces: import("vue").ComputedRef<Promise<any[]>>;
    getTypes: import("vue").ComputedRef<Promise<any[]>>;
    initService: (lang: string, config: any) => void;
    runQuery: (forceReRun?: boolean | undefined) => void;
    setProvince: (payload: {
        province?: string;
        forceReRun?: boolean;
    }) => void;
    setType: (payload: {
        type?: string;
        forceReRun?: boolean;
    }) => void;
    setSearchTerm: (searchTerm: string) => void;
    setMapExtent: (mapExtent: MapExtent) => void;
}, "GSservice" | "queryParams" | "resultsVisible" | "searchVal" | "lastSearchVal" | "searchResults" | "savedResults" | "loadingResults" | "failedServices">>, Pick<{
    GSservice: import("vue").Ref<{
        config: {
            geoNameUrl: string;
            geoLocateUrl: string;
            categories: string[];
            sortOrder: string[];
            disabledSearchTypes: string[];
            maxResults: number;
            officialOnly: boolean;
            language: string;
            types: {
                allTypes: import("../definitions").IGenericObjectType;
                validTypes: import("../definitions").IGenericObjectType;
                typesFetched: boolean;
                filterValidTypes: (exclude?: string | string[] | undefined) => import("../definitions").IGenericObjectType;
            };
            provinces: {
                list: import("../definitions").IGenericObjectType;
                listFetched: boolean;
                fsaToProvinces: (fsa: string) => import("../definitions").IGenericObjectType;
            };
        };
        provinceList: any;
        typeList: any;
        levenshteinDistance: (q: import("./query").Query, result: string) => number;
        findProvinceObj: (province: string) => any;
        query: (q: string) => any;
        fetchProvinces: () => Promise<any[]>;
        fetchTypes: () => Promise<any[]>;
    }>;
    queryParams: import("vue").Ref<{
        type: string;
        province: string;
        extent: {
            readonly type: import("../../../geo/api").GeometryType;
            readonly xmin: number;
            readonly ymin: number;
            readonly xmax: number;
            readonly ymax: number;
            center: () => import("../../../geo/api").Point;
            expand: (factor: number) => import("../../../geo/api").Extent;
            clone: () => import("../../../geo/api").Extent;
            contains: (testPoint: import("../../../geo/api").Point) => boolean;
            toArray: () => number[][];
            toPolygonArray: () => number[][][];
            toPolygon: () => import("../../../geo/api").Polygon;
            isEqual: (e: import("../../../geo/api").Extent | undefined) => boolean;
            toESRI: () => __esri.Extent;
            toGeoJSON: () => import("geojson").Polygon;
            sr: {
                wkid: number | undefined;
                latestWkid: number | undefined;
                wkt: string | undefined;
                isEqual: (otherSR: import("../../../geo/api").SpatialReference) => boolean;
                clone: () => import("../../../geo/api").SpatialReference;
                lean: () => object;
                isWebMercator: () => boolean;
                toESRI: () => __esri.SpatialReference;
                toGeoJSON: () => import("geojson").NamedCoordinateReferenceSystem;
            };
            readonly id: string;
            invalid: () => boolean;
        } | undefined;
    }>;
    resultsVisible: import("vue").Ref<boolean>;
    searchVal: import("vue").Ref<string>;
    lastSearchVal: import("vue").Ref<string>;
    searchResults: import("vue").Ref<any[]>;
    savedResults: import("vue").Ref<any[]>;
    loadingResults: import("vue").Ref<boolean>;
    failedServices: import("vue").Ref<string[]>;
    getProvinces: import("vue").ComputedRef<Promise<any[]>>;
    getTypes: import("vue").ComputedRef<Promise<any[]>>;
    initService: (lang: string, config: any) => void;
    runQuery: (forceReRun?: boolean | undefined) => void;
    setProvince: (payload: {
        province?: string;
        forceReRun?: boolean;
    }) => void;
    setType: (payload: {
        type?: string;
        forceReRun?: boolean;
    }) => void;
    setSearchTerm: (searchTerm: string) => void;
    setMapExtent: (mapExtent: MapExtent) => void;
}, "getProvinces" | "getTypes">, Pick<{
    GSservice: import("vue").Ref<{
        config: {
            geoNameUrl: string;
            geoLocateUrl: string;
            categories: string[];
            sortOrder: string[];
            disabledSearchTypes: string[];
            maxResults: number;
            officialOnly: boolean;
            language: string;
            types: {
                allTypes: import("../definitions").IGenericObjectType;
                validTypes: import("../definitions").IGenericObjectType;
                typesFetched: boolean;
                filterValidTypes: (exclude?: string | string[] | undefined) => import("../definitions").IGenericObjectType;
            };
            provinces: {
                list: import("../definitions").IGenericObjectType;
                listFetched: boolean;
                fsaToProvinces: (fsa: string) => import("../definitions").IGenericObjectType;
            };
        };
        provinceList: any;
        typeList: any;
        levenshteinDistance: (q: import("./query").Query, result: string) => number;
        findProvinceObj: (province: string) => any;
        query: (q: string) => any;
        fetchProvinces: () => Promise<any[]>;
        fetchTypes: () => Promise<any[]>;
    }>;
    queryParams: import("vue").Ref<{
        type: string;
        province: string;
        extent: {
            readonly type: import("../../../geo/api").GeometryType;
            readonly xmin: number;
            readonly ymin: number;
            readonly xmax: number;
            readonly ymax: number;
            center: () => import("../../../geo/api").Point;
            expand: (factor: number) => import("../../../geo/api").Extent;
            clone: () => import("../../../geo/api").Extent;
            contains: (testPoint: import("../../../geo/api").Point) => boolean;
            toArray: () => number[][];
            toPolygonArray: () => number[][][];
            toPolygon: () => import("../../../geo/api").Polygon;
            isEqual: (e: import("../../../geo/api").Extent | undefined) => boolean;
            toESRI: () => __esri.Extent;
            toGeoJSON: () => import("geojson").Polygon;
            sr: {
                wkid: number | undefined;
                latestWkid: number | undefined;
                wkt: string | undefined;
                isEqual: (otherSR: import("../../../geo/api").SpatialReference) => boolean;
                clone: () => import("../../../geo/api").SpatialReference;
                lean: () => object;
                isWebMercator: () => boolean;
                toESRI: () => __esri.SpatialReference;
                toGeoJSON: () => import("geojson").NamedCoordinateReferenceSystem;
            };
            readonly id: string;
            invalid: () => boolean;
        } | undefined;
    }>;
    resultsVisible: import("vue").Ref<boolean>;
    searchVal: import("vue").Ref<string>;
    lastSearchVal: import("vue").Ref<string>;
    searchResults: import("vue").Ref<any[]>;
    savedResults: import("vue").Ref<any[]>;
    loadingResults: import("vue").Ref<boolean>;
    failedServices: import("vue").Ref<string[]>;
    getProvinces: import("vue").ComputedRef<Promise<any[]>>;
    getTypes: import("vue").ComputedRef<Promise<any[]>>;
    initService: (lang: string, config: any) => void;
    runQuery: (forceReRun?: boolean | undefined) => void;
    setProvince: (payload: {
        province?: string;
        forceReRun?: boolean;
    }) => void;
    setType: (payload: {
        type?: string;
        forceReRun?: boolean;
    }) => void;
    setSearchTerm: (searchTerm: string) => void;
    setMapExtent: (mapExtent: MapExtent) => void;
}, "initService" | "runQuery" | "setProvince" | "setType" | "setSearchTerm" | "setMapExtent">>;
