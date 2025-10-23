import { Point } from '../../geo/api';
export declare const useMaptipStore: import('pinia').StoreDefinition<"maptip", import('pinia')._UnwrapAll<Pick<{
    maptipInstance: import('../../../vue/dist/vue.esm-bundler.js').Ref<any, any>;
    maptipPoint: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        readonly type: import('../../geo/api').GeometryType;
        x: number;
        y: number;
        toArray: () => Array<number>;
        toESRI: () => __esri.Point;
        toGeoJSON: () => import('geojson').Point;
        sr: {
            wkid: number | undefined;
            latestWkid: number | undefined;
            wkt: string | undefined;
            isEqual: (otherSR: import('../../geo/api').SpatialReference) => boolean;
            clone: () => import('../../geo/api').SpatialReference;
            lean: () => object;
            isWebMercator: () => boolean;
            toESRI: () => __esri.SpatialReference;
            toGeoJSON: () => import('geojson').NamedCoordinateReferenceSystem;
        };
        readonly id: string;
        invalid: () => boolean;
    } | undefined, Point | {
        readonly type: import('../../geo/api').GeometryType;
        x: number;
        y: number;
        toArray: () => Array<number>;
        toESRI: () => __esri.Point;
        toGeoJSON: () => import('geojson').Point;
        sr: {
            wkid: number | undefined;
            latestWkid: number | undefined;
            wkt: string | undefined;
            isEqual: (otherSR: import('../../geo/api').SpatialReference) => boolean;
            clone: () => import('../../geo/api').SpatialReference;
            lean: () => object;
            isWebMercator: () => boolean;
            toESRI: () => __esri.SpatialReference;
            toGeoJSON: () => import('geojson').NamedCoordinateReferenceSystem;
        };
        readonly id: string;
        invalid: () => boolean;
    } | undefined>;
    content: import('../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    setMaptipInstance: (value: any) => void;
    setMaptipPoint: (value: Point) => void;
    setMaptipContent: (value: string) => void;
}, "content" | "maptipInstance" | "maptipPoint">>, Pick<{
    maptipInstance: import('../../../vue/dist/vue.esm-bundler.js').Ref<any, any>;
    maptipPoint: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        readonly type: import('../../geo/api').GeometryType;
        x: number;
        y: number;
        toArray: () => Array<number>;
        toESRI: () => __esri.Point;
        toGeoJSON: () => import('geojson').Point;
        sr: {
            wkid: number | undefined;
            latestWkid: number | undefined;
            wkt: string | undefined;
            isEqual: (otherSR: import('../../geo/api').SpatialReference) => boolean;
            clone: () => import('../../geo/api').SpatialReference;
            lean: () => object;
            isWebMercator: () => boolean;
            toESRI: () => __esri.SpatialReference;
            toGeoJSON: () => import('geojson').NamedCoordinateReferenceSystem;
        };
        readonly id: string;
        invalid: () => boolean;
    } | undefined, Point | {
        readonly type: import('../../geo/api').GeometryType;
        x: number;
        y: number;
        toArray: () => Array<number>;
        toESRI: () => __esri.Point;
        toGeoJSON: () => import('geojson').Point;
        sr: {
            wkid: number | undefined;
            latestWkid: number | undefined;
            wkt: string | undefined;
            isEqual: (otherSR: import('../../geo/api').SpatialReference) => boolean;
            clone: () => import('../../geo/api').SpatialReference;
            lean: () => object;
            isWebMercator: () => boolean;
            toESRI: () => __esri.SpatialReference;
            toGeoJSON: () => import('geojson').NamedCoordinateReferenceSystem;
        };
        readonly id: string;
        invalid: () => boolean;
    } | undefined>;
    content: import('../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    setMaptipInstance: (value: any) => void;
    setMaptipPoint: (value: Point) => void;
    setMaptipContent: (value: string) => void;
}, never>, Pick<{
    maptipInstance: import('../../../vue/dist/vue.esm-bundler.js').Ref<any, any>;
    maptipPoint: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        readonly type: import('../../geo/api').GeometryType;
        x: number;
        y: number;
        toArray: () => Array<number>;
        toESRI: () => __esri.Point;
        toGeoJSON: () => import('geojson').Point;
        sr: {
            wkid: number | undefined;
            latestWkid: number | undefined;
            wkt: string | undefined;
            isEqual: (otherSR: import('../../geo/api').SpatialReference) => boolean;
            clone: () => import('../../geo/api').SpatialReference;
            lean: () => object;
            isWebMercator: () => boolean;
            toESRI: () => __esri.SpatialReference;
            toGeoJSON: () => import('geojson').NamedCoordinateReferenceSystem;
        };
        readonly id: string;
        invalid: () => boolean;
    } | undefined, Point | {
        readonly type: import('../../geo/api').GeometryType;
        x: number;
        y: number;
        toArray: () => Array<number>;
        toESRI: () => __esri.Point;
        toGeoJSON: () => import('geojson').Point;
        sr: {
            wkid: number | undefined;
            latestWkid: number | undefined;
            wkt: string | undefined;
            isEqual: (otherSR: import('../../geo/api').SpatialReference) => boolean;
            clone: () => import('../../geo/api').SpatialReference;
            lean: () => object;
            isWebMercator: () => boolean;
            toESRI: () => __esri.SpatialReference;
            toGeoJSON: () => import('geojson').NamedCoordinateReferenceSystem;
        };
        readonly id: string;
        invalid: () => boolean;
    } | undefined>;
    content: import('../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    setMaptipInstance: (value: any) => void;
    setMaptipPoint: (value: Point) => void;
    setMaptipContent: (value: string) => void;
}, "setMaptipInstance" | "setMaptipPoint" | "setMaptipContent">>;
