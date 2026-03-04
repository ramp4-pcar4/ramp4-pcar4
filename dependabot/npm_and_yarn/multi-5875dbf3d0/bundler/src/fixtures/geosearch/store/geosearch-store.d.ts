import { MapExtent, QueryParams } from './geosearch-state';
import { GeoSearchUI } from './geosearch.feature';
import { IProvinceInfo, ISearchResult } from '../definitions';
export declare const useGeosearchStore: import('pinia').StoreDefinition<"geosearch", Pick<{
    GSservice: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        config: {
            geoNameUrl: string;
            geoLocateUrl: string;
            fsaUrl: string;
            categories: string[];
            sortOrder: string[];
            disabledSearchTypes: string[];
            maxResults: number;
            officialOnly: boolean;
            language: string;
            types: {
                allTypes: import('../definitions').IGenericObjectType;
                validTypes: import('../definitions').IGenericObjectType;
                typesFetched: boolean;
                filterValidTypes: (exclude?: string | string[]) => import('../definitions').IGenericObjectType;
            };
            provinces: {
                provinceList: {
                    code: number;
                    abbr: string;
                    name: string;
                }[];
                listFetched: boolean;
                fsaToProvince: (fsa: string) => IProvinceInfo;
                codeToProvince: (provCode: number) => IProvinceInfo;
                nameToProvince: (provName: string) => IProvinceInfo;
                abbrToProvince: (provAbbr: string) => IProvinceInfo;
            };
            customSources: {
                code: string;
                catName: string;
                onSearch: (term: string) => Promise<ISearchResult[]>;
            }[];
        };
        typeList: any;
        levenshteinDistance: (goalText: string, testText: string) => number;
        query: (userInput: string) => Promise<{
            results: ISearchResult[];
            failedServs: string[];
        }>;
        fetchProvinces: () => Promise<Array<IProvinceInfo>>;
        fetchTypes: () => Promise<Array<any>>;
    }, GeoSearchUI | {
        config: {
            geoNameUrl: string;
            geoLocateUrl: string;
            fsaUrl: string;
            categories: string[];
            sortOrder: string[];
            disabledSearchTypes: string[];
            maxResults: number;
            officialOnly: boolean;
            language: string;
            types: {
                allTypes: import('../definitions').IGenericObjectType;
                validTypes: import('../definitions').IGenericObjectType;
                typesFetched: boolean;
                filterValidTypes: (exclude?: string | string[]) => import('../definitions').IGenericObjectType;
            };
            provinces: {
                provinceList: {
                    code: number;
                    abbr: string;
                    name: string;
                }[];
                listFetched: boolean;
                fsaToProvince: (fsa: string) => IProvinceInfo;
                codeToProvince: (provCode: number) => IProvinceInfo;
                nameToProvince: (provName: string) => IProvinceInfo;
                abbrToProvince: (provAbbr: string) => IProvinceInfo;
            };
            customSources: {
                code: string;
                catName: string;
                onSearch: (term: string) => Promise<ISearchResult[]>;
            }[];
        };
        typeList: any;
        levenshteinDistance: (goalText: string, testText: string) => number;
        query: (userInput: string) => Promise<{
            results: ISearchResult[];
            failedServs: string[];
        }>;
        fetchProvinces: () => Promise<Array<IProvinceInfo>>;
        fetchTypes: () => Promise<Array<any>>;
    }>;
    queryParams: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        type: string;
        province: string;
        extent: {
            readonly type: import('../../../geo/api').GeometryType;
            readonly xmin: number;
            readonly ymin: number;
            readonly xmax: number;
            readonly ymax: number;
            center: () => import('../../../geo/api').Point;
            expand: (factor: number) => import('../../../geo/api').Extent;
            clone: () => import('../../../geo/api').Extent;
            contains: (testPoint: import('../../../geo/api').Point) => boolean;
            toArray: () => Array<Array<number>>;
            toPolygonArray: () => Array<Array<Array<number>>>;
            toPolygon: () => import('../../../geo/api').Polygon;
            isEqual: (e: import('../../../geo/api').Extent | undefined) => boolean;
            toESRI: () => __esri.Extent;
            toGeoJSON: () => import('geojson').Polygon;
            sr: {
                wkid: number | undefined;
                latestWkid: number | undefined;
                wkt: string | undefined;
                isEqual: (otherSR: import('../../../geo/api').SpatialReference) => boolean;
                clone: () => import('../../../geo/api').SpatialReference;
                lean: () => object;
                isWebMercator: () => boolean;
                toESRI: () => __esri.SpatialReference;
                toGeoJSON: () => import('geojson').NamedCoordinateReferenceSystem;
            };
            readonly id: string;
            invalid: () => boolean;
        } | undefined;
    }, QueryParams | {
        type: string;
        province: string;
        extent: {
            readonly type: import('../../../geo/api').GeometryType;
            readonly xmin: number;
            readonly ymin: number;
            readonly xmax: number;
            readonly ymax: number;
            center: () => import('../../../geo/api').Point;
            expand: (factor: number) => import('../../../geo/api').Extent;
            clone: () => import('../../../geo/api').Extent;
            contains: (testPoint: import('../../../geo/api').Point) => boolean;
            toArray: () => Array<Array<number>>;
            toPolygonArray: () => Array<Array<Array<number>>>;
            toPolygon: () => import('../../../geo/api').Polygon;
            isEqual: (e: import('../../../geo/api').Extent | undefined) => boolean;
            toESRI: () => __esri.Extent;
            toGeoJSON: () => import('geojson').Polygon;
            sr: {
                wkid: number | undefined;
                latestWkid: number | undefined;
                wkt: string | undefined;
                isEqual: (otherSR: import('../../../geo/api').SpatialReference) => boolean;
                clone: () => import('../../../geo/api').SpatialReference;
                lean: () => object;
                isWebMercator: () => boolean;
                toESRI: () => __esri.SpatialReference;
                toGeoJSON: () => import('geojson').NamedCoordinateReferenceSystem;
            };
            readonly id: string;
            invalid: () => boolean;
        } | undefined;
    }>;
    resultsVisible: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    searchVal: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    searchRegex: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    lastSearchVal: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    searchResults: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        name: string;
        type: string;
        bbox: Array<number>;
        flav: import('../definitions').FlavourKey;
        location: {
            city?: string;
            province?: {
                code: number;
                abbr: string;
                name: string;
            } | undefined;
        };
        order: number;
    }[], ISearchResult[] | {
        name: string;
        type: string;
        bbox: Array<number>;
        flav: import('../definitions').FlavourKey;
        location: {
            city?: string;
            province?: {
                code: number;
                abbr: string;
                name: string;
            } | undefined;
        };
        order: number;
    }[]>;
    savedResults: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        name: string;
        type: string;
        bbox: Array<number>;
        flav: import('../definitions').FlavourKey;
        location: {
            city?: string;
            province?: {
                code: number;
                abbr: string;
                name: string;
            } | undefined;
        };
        order: number;
    }[], ISearchResult[] | {
        name: string;
        type: string;
        bbox: Array<number>;
        flav: import('../definitions').FlavourKey;
        location: {
            city?: string;
            province?: {
                code: number;
                abbr: string;
                name: string;
            } | undefined;
        };
        order: number;
    }[]>;
    loadingResults: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    failedServices: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string[], string[]>;
    getProvinces: import('../../../../vue/dist/vue.esm-bundler.js').ComputedRef<Promise<IProvinceInfo[]>>;
    getTypes: import('../../../../vue/dist/vue.esm-bundler.js').ComputedRef<Promise<any[]>>;
    initService: (lang: string, config: any) => void;
    runQuery: (forceReRun?: boolean) => void;
    setProvince: (payload: {
        province?: string;
        forceReRun?: boolean;
    }) => void;
    setType: (payload: {
        type?: string;
        forceReRun?: boolean;
    }) => void;
    setSearchTerm: (searchTerm: string) => void;
    setSearchRegex: (searchTerm: string) => void;
    setMapExtent: (mapExtent: MapExtent) => void;
    cleanVal: (val: string) => string;
}, "GSservice" | "queryParams" | "resultsVisible" | "searchVal" | "searchRegex" | "lastSearchVal" | "searchResults" | "savedResults" | "loadingResults" | "failedServices">, Pick<{
    GSservice: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        config: {
            geoNameUrl: string;
            geoLocateUrl: string;
            fsaUrl: string;
            categories: string[];
            sortOrder: string[];
            disabledSearchTypes: string[];
            maxResults: number;
            officialOnly: boolean;
            language: string;
            types: {
                allTypes: import('../definitions').IGenericObjectType;
                validTypes: import('../definitions').IGenericObjectType;
                typesFetched: boolean;
                filterValidTypes: (exclude?: string | string[]) => import('../definitions').IGenericObjectType;
            };
            provinces: {
                provinceList: {
                    code: number;
                    abbr: string;
                    name: string;
                }[];
                listFetched: boolean;
                fsaToProvince: (fsa: string) => IProvinceInfo;
                codeToProvince: (provCode: number) => IProvinceInfo;
                nameToProvince: (provName: string) => IProvinceInfo;
                abbrToProvince: (provAbbr: string) => IProvinceInfo;
            };
            customSources: {
                code: string;
                catName: string;
                onSearch: (term: string) => Promise<ISearchResult[]>;
            }[];
        };
        typeList: any;
        levenshteinDistance: (goalText: string, testText: string) => number;
        query: (userInput: string) => Promise<{
            results: ISearchResult[];
            failedServs: string[];
        }>;
        fetchProvinces: () => Promise<Array<IProvinceInfo>>;
        fetchTypes: () => Promise<Array<any>>;
    }, GeoSearchUI | {
        config: {
            geoNameUrl: string;
            geoLocateUrl: string;
            fsaUrl: string;
            categories: string[];
            sortOrder: string[];
            disabledSearchTypes: string[];
            maxResults: number;
            officialOnly: boolean;
            language: string;
            types: {
                allTypes: import('../definitions').IGenericObjectType;
                validTypes: import('../definitions').IGenericObjectType;
                typesFetched: boolean;
                filterValidTypes: (exclude?: string | string[]) => import('../definitions').IGenericObjectType;
            };
            provinces: {
                provinceList: {
                    code: number;
                    abbr: string;
                    name: string;
                }[];
                listFetched: boolean;
                fsaToProvince: (fsa: string) => IProvinceInfo;
                codeToProvince: (provCode: number) => IProvinceInfo;
                nameToProvince: (provName: string) => IProvinceInfo;
                abbrToProvince: (provAbbr: string) => IProvinceInfo;
            };
            customSources: {
                code: string;
                catName: string;
                onSearch: (term: string) => Promise<ISearchResult[]>;
            }[];
        };
        typeList: any;
        levenshteinDistance: (goalText: string, testText: string) => number;
        query: (userInput: string) => Promise<{
            results: ISearchResult[];
            failedServs: string[];
        }>;
        fetchProvinces: () => Promise<Array<IProvinceInfo>>;
        fetchTypes: () => Promise<Array<any>>;
    }>;
    queryParams: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        type: string;
        province: string;
        extent: {
            readonly type: import('../../../geo/api').GeometryType;
            readonly xmin: number;
            readonly ymin: number;
            readonly xmax: number;
            readonly ymax: number;
            center: () => import('../../../geo/api').Point;
            expand: (factor: number) => import('../../../geo/api').Extent;
            clone: () => import('../../../geo/api').Extent;
            contains: (testPoint: import('../../../geo/api').Point) => boolean;
            toArray: () => Array<Array<number>>;
            toPolygonArray: () => Array<Array<Array<number>>>;
            toPolygon: () => import('../../../geo/api').Polygon;
            isEqual: (e: import('../../../geo/api').Extent | undefined) => boolean;
            toESRI: () => __esri.Extent;
            toGeoJSON: () => import('geojson').Polygon;
            sr: {
                wkid: number | undefined;
                latestWkid: number | undefined;
                wkt: string | undefined;
                isEqual: (otherSR: import('../../../geo/api').SpatialReference) => boolean;
                clone: () => import('../../../geo/api').SpatialReference;
                lean: () => object;
                isWebMercator: () => boolean;
                toESRI: () => __esri.SpatialReference;
                toGeoJSON: () => import('geojson').NamedCoordinateReferenceSystem;
            };
            readonly id: string;
            invalid: () => boolean;
        } | undefined;
    }, QueryParams | {
        type: string;
        province: string;
        extent: {
            readonly type: import('../../../geo/api').GeometryType;
            readonly xmin: number;
            readonly ymin: number;
            readonly xmax: number;
            readonly ymax: number;
            center: () => import('../../../geo/api').Point;
            expand: (factor: number) => import('../../../geo/api').Extent;
            clone: () => import('../../../geo/api').Extent;
            contains: (testPoint: import('../../../geo/api').Point) => boolean;
            toArray: () => Array<Array<number>>;
            toPolygonArray: () => Array<Array<Array<number>>>;
            toPolygon: () => import('../../../geo/api').Polygon;
            isEqual: (e: import('../../../geo/api').Extent | undefined) => boolean;
            toESRI: () => __esri.Extent;
            toGeoJSON: () => import('geojson').Polygon;
            sr: {
                wkid: number | undefined;
                latestWkid: number | undefined;
                wkt: string | undefined;
                isEqual: (otherSR: import('../../../geo/api').SpatialReference) => boolean;
                clone: () => import('../../../geo/api').SpatialReference;
                lean: () => object;
                isWebMercator: () => boolean;
                toESRI: () => __esri.SpatialReference;
                toGeoJSON: () => import('geojson').NamedCoordinateReferenceSystem;
            };
            readonly id: string;
            invalid: () => boolean;
        } | undefined;
    }>;
    resultsVisible: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    searchVal: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    searchRegex: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    lastSearchVal: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    searchResults: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        name: string;
        type: string;
        bbox: Array<number>;
        flav: import('../definitions').FlavourKey;
        location: {
            city?: string;
            province?: {
                code: number;
                abbr: string;
                name: string;
            } | undefined;
        };
        order: number;
    }[], ISearchResult[] | {
        name: string;
        type: string;
        bbox: Array<number>;
        flav: import('../definitions').FlavourKey;
        location: {
            city?: string;
            province?: {
                code: number;
                abbr: string;
                name: string;
            } | undefined;
        };
        order: number;
    }[]>;
    savedResults: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        name: string;
        type: string;
        bbox: Array<number>;
        flav: import('../definitions').FlavourKey;
        location: {
            city?: string;
            province?: {
                code: number;
                abbr: string;
                name: string;
            } | undefined;
        };
        order: number;
    }[], ISearchResult[] | {
        name: string;
        type: string;
        bbox: Array<number>;
        flav: import('../definitions').FlavourKey;
        location: {
            city?: string;
            province?: {
                code: number;
                abbr: string;
                name: string;
            } | undefined;
        };
        order: number;
    }[]>;
    loadingResults: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    failedServices: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string[], string[]>;
    getProvinces: import('../../../../vue/dist/vue.esm-bundler.js').ComputedRef<Promise<IProvinceInfo[]>>;
    getTypes: import('../../../../vue/dist/vue.esm-bundler.js').ComputedRef<Promise<any[]>>;
    initService: (lang: string, config: any) => void;
    runQuery: (forceReRun?: boolean) => void;
    setProvince: (payload: {
        province?: string;
        forceReRun?: boolean;
    }) => void;
    setType: (payload: {
        type?: string;
        forceReRun?: boolean;
    }) => void;
    setSearchTerm: (searchTerm: string) => void;
    setSearchRegex: (searchTerm: string) => void;
    setMapExtent: (mapExtent: MapExtent) => void;
    cleanVal: (val: string) => string;
}, "getProvinces" | "getTypes">, Pick<{
    GSservice: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        config: {
            geoNameUrl: string;
            geoLocateUrl: string;
            fsaUrl: string;
            categories: string[];
            sortOrder: string[];
            disabledSearchTypes: string[];
            maxResults: number;
            officialOnly: boolean;
            language: string;
            types: {
                allTypes: import('../definitions').IGenericObjectType;
                validTypes: import('../definitions').IGenericObjectType;
                typesFetched: boolean;
                filterValidTypes: (exclude?: string | string[]) => import('../definitions').IGenericObjectType;
            };
            provinces: {
                provinceList: {
                    code: number;
                    abbr: string;
                    name: string;
                }[];
                listFetched: boolean;
                fsaToProvince: (fsa: string) => IProvinceInfo;
                codeToProvince: (provCode: number) => IProvinceInfo;
                nameToProvince: (provName: string) => IProvinceInfo;
                abbrToProvince: (provAbbr: string) => IProvinceInfo;
            };
            customSources: {
                code: string;
                catName: string;
                onSearch: (term: string) => Promise<ISearchResult[]>;
            }[];
        };
        typeList: any;
        levenshteinDistance: (goalText: string, testText: string) => number;
        query: (userInput: string) => Promise<{
            results: ISearchResult[];
            failedServs: string[];
        }>;
        fetchProvinces: () => Promise<Array<IProvinceInfo>>;
        fetchTypes: () => Promise<Array<any>>;
    }, GeoSearchUI | {
        config: {
            geoNameUrl: string;
            geoLocateUrl: string;
            fsaUrl: string;
            categories: string[];
            sortOrder: string[];
            disabledSearchTypes: string[];
            maxResults: number;
            officialOnly: boolean;
            language: string;
            types: {
                allTypes: import('../definitions').IGenericObjectType;
                validTypes: import('../definitions').IGenericObjectType;
                typesFetched: boolean;
                filterValidTypes: (exclude?: string | string[]) => import('../definitions').IGenericObjectType;
            };
            provinces: {
                provinceList: {
                    code: number;
                    abbr: string;
                    name: string;
                }[];
                listFetched: boolean;
                fsaToProvince: (fsa: string) => IProvinceInfo;
                codeToProvince: (provCode: number) => IProvinceInfo;
                nameToProvince: (provName: string) => IProvinceInfo;
                abbrToProvince: (provAbbr: string) => IProvinceInfo;
            };
            customSources: {
                code: string;
                catName: string;
                onSearch: (term: string) => Promise<ISearchResult[]>;
            }[];
        };
        typeList: any;
        levenshteinDistance: (goalText: string, testText: string) => number;
        query: (userInput: string) => Promise<{
            results: ISearchResult[];
            failedServs: string[];
        }>;
        fetchProvinces: () => Promise<Array<IProvinceInfo>>;
        fetchTypes: () => Promise<Array<any>>;
    }>;
    queryParams: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        type: string;
        province: string;
        extent: {
            readonly type: import('../../../geo/api').GeometryType;
            readonly xmin: number;
            readonly ymin: number;
            readonly xmax: number;
            readonly ymax: number;
            center: () => import('../../../geo/api').Point;
            expand: (factor: number) => import('../../../geo/api').Extent;
            clone: () => import('../../../geo/api').Extent;
            contains: (testPoint: import('../../../geo/api').Point) => boolean;
            toArray: () => Array<Array<number>>;
            toPolygonArray: () => Array<Array<Array<number>>>;
            toPolygon: () => import('../../../geo/api').Polygon;
            isEqual: (e: import('../../../geo/api').Extent | undefined) => boolean;
            toESRI: () => __esri.Extent;
            toGeoJSON: () => import('geojson').Polygon;
            sr: {
                wkid: number | undefined;
                latestWkid: number | undefined;
                wkt: string | undefined;
                isEqual: (otherSR: import('../../../geo/api').SpatialReference) => boolean;
                clone: () => import('../../../geo/api').SpatialReference;
                lean: () => object;
                isWebMercator: () => boolean;
                toESRI: () => __esri.SpatialReference;
                toGeoJSON: () => import('geojson').NamedCoordinateReferenceSystem;
            };
            readonly id: string;
            invalid: () => boolean;
        } | undefined;
    }, QueryParams | {
        type: string;
        province: string;
        extent: {
            readonly type: import('../../../geo/api').GeometryType;
            readonly xmin: number;
            readonly ymin: number;
            readonly xmax: number;
            readonly ymax: number;
            center: () => import('../../../geo/api').Point;
            expand: (factor: number) => import('../../../geo/api').Extent;
            clone: () => import('../../../geo/api').Extent;
            contains: (testPoint: import('../../../geo/api').Point) => boolean;
            toArray: () => Array<Array<number>>;
            toPolygonArray: () => Array<Array<Array<number>>>;
            toPolygon: () => import('../../../geo/api').Polygon;
            isEqual: (e: import('../../../geo/api').Extent | undefined) => boolean;
            toESRI: () => __esri.Extent;
            toGeoJSON: () => import('geojson').Polygon;
            sr: {
                wkid: number | undefined;
                latestWkid: number | undefined;
                wkt: string | undefined;
                isEqual: (otherSR: import('../../../geo/api').SpatialReference) => boolean;
                clone: () => import('../../../geo/api').SpatialReference;
                lean: () => object;
                isWebMercator: () => boolean;
                toESRI: () => __esri.SpatialReference;
                toGeoJSON: () => import('geojson').NamedCoordinateReferenceSystem;
            };
            readonly id: string;
            invalid: () => boolean;
        } | undefined;
    }>;
    resultsVisible: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    searchVal: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    searchRegex: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    lastSearchVal: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    searchResults: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        name: string;
        type: string;
        bbox: Array<number>;
        flav: import('../definitions').FlavourKey;
        location: {
            city?: string;
            province?: {
                code: number;
                abbr: string;
                name: string;
            } | undefined;
        };
        order: number;
    }[], ISearchResult[] | {
        name: string;
        type: string;
        bbox: Array<number>;
        flav: import('../definitions').FlavourKey;
        location: {
            city?: string;
            province?: {
                code: number;
                abbr: string;
                name: string;
            } | undefined;
        };
        order: number;
    }[]>;
    savedResults: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        name: string;
        type: string;
        bbox: Array<number>;
        flav: import('../definitions').FlavourKey;
        location: {
            city?: string;
            province?: {
                code: number;
                abbr: string;
                name: string;
            } | undefined;
        };
        order: number;
    }[], ISearchResult[] | {
        name: string;
        type: string;
        bbox: Array<number>;
        flav: import('../definitions').FlavourKey;
        location: {
            city?: string;
            province?: {
                code: number;
                abbr: string;
                name: string;
            } | undefined;
        };
        order: number;
    }[]>;
    loadingResults: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    failedServices: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string[], string[]>;
    getProvinces: import('../../../../vue/dist/vue.esm-bundler.js').ComputedRef<Promise<IProvinceInfo[]>>;
    getTypes: import('../../../../vue/dist/vue.esm-bundler.js').ComputedRef<Promise<any[]>>;
    initService: (lang: string, config: any) => void;
    runQuery: (forceReRun?: boolean) => void;
    setProvince: (payload: {
        province?: string;
        forceReRun?: boolean;
    }) => void;
    setType: (payload: {
        type?: string;
        forceReRun?: boolean;
    }) => void;
    setSearchTerm: (searchTerm: string) => void;
    setSearchRegex: (searchTerm: string) => void;
    setMapExtent: (mapExtent: MapExtent) => void;
    cleanVal: (val: string) => string;
}, "initService" | "runQuery" | "setProvince" | "setType" | "setSearchTerm" | "setSearchRegex" | "setMapExtent" | "cleanVal">>;
