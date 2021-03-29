import Vue from 'vue';
import GapiLoader, { GeoApi, ApiBundle as GeoApiBundle } from 'ramp-geoapi';

import { InstanceAPI, AppVersion } from './internal';
import mixin from './mixin';

export * from './internal';
declare const __VERSION__: AppVersion;

// install/register mixin plugin with Vue, so it's available on all Vue instances
Vue.use(mixin);

export interface RampGeo {
    Extent: typeof GeoApiBundle.Extent;
    Graphic: typeof GeoApiBundle.Graphic;
    Hover: typeof GeoApiBundle.Hover;
    LineString: typeof GeoApiBundle.LineString;
    LineStyleOptions: typeof GeoApiBundle.LineStyleOptions;
    LinearRing: typeof GeoApiBundle.LinearRing;
    MultiLineString: typeof GeoApiBundle.MultiLineString;
    MultiPoint: typeof GeoApiBundle.MultiPoint;
    MultiPolygon: typeof GeoApiBundle.MultiPolygon;
    Point: typeof GeoApiBundle.Point;
    PointStyleOptions: typeof GeoApiBundle.PointStyleOptions;
    Polygon: typeof GeoApiBundle.Polygon;
    PolygonStyleOptions: typeof GeoApiBundle.PolygonStyleOptions;
    SpatialReference: typeof GeoApiBundle.SpatialReference;
}

export interface APIInterface {
    Instance: typeof InstanceAPI;
    geoapi: GeoApi;
    gapiPromise: Promise<GeoApi>;

    /**
     * Version information of R4MP.
     *
     * @type {AppVersion}
     * @memberof APIInterface
     */
    version: AppVersion;

    GEO: RampGeo;
}

// Load geoapi
// moved from `main-build` since it was being attached to the api object anyways
let geoapi: GeoApi;
let rampgeo: RampGeo;

const gapiPromise = GapiLoader(window);
gapiPromise.then((gapi: GeoApi) => {
    geoapi = gapi;
    rampgeo = {
        Extent: GeoApiBundle.Extent,
        Graphic: GeoApiBundle.Graphic,
        Hover: GeoApiBundle.Hover,
        LineString: GeoApiBundle.LineString,
        LineStyleOptions: GeoApiBundle.LineStyleOptions,
        LinearRing: GeoApiBundle.LinearRing,
        MultiLineString: GeoApiBundle.MultiLineString,
        MultiPoint: GeoApiBundle.MultiPoint,
        MultiPolygon: GeoApiBundle.MultiPolygon,
        Point: GeoApiBundle.Point,
        PointStyleOptions: GeoApiBundle.PointStyleOptions,
        Polygon: GeoApiBundle.Polygon,
        PolygonStyleOptions: GeoApiBundle.PolygonStyleOptions,
        SpatialReference: GeoApiBundle.SpatialReference
    };
});

const api: APIInterface = {
    Instance: InstanceAPI,
    gapiPromise,
    get geoapi(): GeoApi {
        if (typeof geoapi === 'undefined') {
            throw new Error("Attempting to access `geoapi` before it's resolved. Use `initRamp` global function instead.");
        }

        return geoapi;
    },
    version: __VERSION__, // this is populated by the build process; see `vue.config.js`

    get GEO(): RampGeo {
        if (typeof rampgeo === 'undefined') {
            throw new Error("Attempting to access `GEO` before it's resolved. Use `initRamp` global function instead.");
        }

        return rampgeo;
    }
};

// export `InstanceApi` as `Instance` on global RAMP interface
export default api as APIInterface;
