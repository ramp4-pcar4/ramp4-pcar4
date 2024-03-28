import type { Point } from '@/geo/api';
export declare const useMaptipStore: import("pinia").StoreDefinition<"maptip", import("pinia")._UnwrapAll<Pick<{
    maptipInstance: any;
    maptipPoint: import("vue").Ref<{
        readonly type: import("@/geo/api").GeometryType;
        x: number;
        y: number;
        toArray: () => number[];
        toESRI: () => __esri.Point;
        toGeoJSON: () => import("geojson").Point;
        sr: {
            wkid: number | undefined;
            latestWkid: number | undefined;
            wkt: string | undefined;
            isEqual: (otherSR: import("@/geo/api").SpatialReference) => boolean;
            clone: () => import("@/geo/api").SpatialReference;
            lean: () => object;
            isWebMercator: () => boolean;
            toESRI: () => __esri.SpatialReference;
            toGeoJSON: () => import("geojson").NamedCoordinateReferenceSystem;
        };
        readonly id: string;
        invalid: () => boolean;
    } | undefined>;
    content: import("vue").Ref<string>;
    setMaptipInstance: (value: any) => void;
    setMaptipPoint: (value: Point) => void;
    setMaptipContent: (value: string) => void;
}, "content" | "maptipInstance" | "maptipPoint">>, Pick<{
    maptipInstance: any;
    maptipPoint: import("vue").Ref<{
        readonly type: import("@/geo/api").GeometryType;
        x: number;
        y: number;
        toArray: () => number[];
        toESRI: () => __esri.Point;
        toGeoJSON: () => import("geojson").Point;
        sr: {
            wkid: number | undefined;
            latestWkid: number | undefined;
            wkt: string | undefined;
            isEqual: (otherSR: import("@/geo/api").SpatialReference) => boolean;
            clone: () => import("@/geo/api").SpatialReference;
            lean: () => object;
            isWebMercator: () => boolean;
            toESRI: () => __esri.SpatialReference;
            toGeoJSON: () => import("geojson").NamedCoordinateReferenceSystem;
        };
        readonly id: string;
        invalid: () => boolean;
    } | undefined>;
    content: import("vue").Ref<string>;
    setMaptipInstance: (value: any) => void;
    setMaptipPoint: (value: Point) => void;
    setMaptipContent: (value: string) => void;
}, "maptipInstance">, Pick<{
    maptipInstance: any;
    maptipPoint: import("vue").Ref<{
        readonly type: import("@/geo/api").GeometryType;
        x: number;
        y: number;
        toArray: () => number[];
        toESRI: () => __esri.Point;
        toGeoJSON: () => import("geojson").Point;
        sr: {
            wkid: number | undefined;
            latestWkid: number | undefined;
            wkt: string | undefined;
            isEqual: (otherSR: import("@/geo/api").SpatialReference) => boolean;
            clone: () => import("@/geo/api").SpatialReference;
            lean: () => object;
            isWebMercator: () => boolean;
            toESRI: () => __esri.SpatialReference;
            toGeoJSON: () => import("geojson").NamedCoordinateReferenceSystem;
        };
        readonly id: string;
        invalid: () => boolean;
    } | undefined>;
    content: import("vue").Ref<string>;
    setMaptipInstance: (value: any) => void;
    setMaptipPoint: (value: Point) => void;
    setMaptipContent: (value: string) => void;
}, "maptipInstance" | "setMaptipInstance" | "setMaptipPoint" | "setMaptipContent">>;
