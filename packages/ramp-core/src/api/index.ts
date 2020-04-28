import Vue from 'vue';
import GapiLoader, { GeoApi, ApiBundle } from 'ramp-geoapi';

import { InstanceAPI, AppVersion } from './internal';
import mixin from './mixin';

export * from './internal';

declare const __VERSION__: AppVersion;

// install/register mixin plugin with Vue, so it's available on all Vue instances
Vue.use(mixin);

export interface RampGeo {
    Extent: typeof ApiBundle.Extent;
    Graphic: typeof ApiBundle.Graphic;
    Hover: typeof ApiBundle.Hover;
    LineString: typeof ApiBundle.LineString;
    LineStyleOptions: typeof ApiBundle.LineStyleOptions;
    LinearRing: typeof ApiBundle.LinearRing;
    MultiLineString: typeof ApiBundle.MultiLineString;
    MultiPoint: typeof ApiBundle.MultiPoint;
    MultiPolygon: typeof ApiBundle.MultiPolygon;
    Point: typeof ApiBundle.Point;
    PointStyleOptions: typeof ApiBundle.PointStyleOptions;
    Polygon: typeof ApiBundle.Polygon;
    PolygonStyleOptions: typeof ApiBundle.PolygonStyleOptions;
    SpatialReference: typeof ApiBundle.SpatialReference;
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
        Extent: ApiBundle.Extent,
        Graphic: ApiBundle.Graphic,
        Hover: ApiBundle.Hover,
        LineString: ApiBundle.LineString,
        LineStyleOptions: ApiBundle.LineStyleOptions,
        LinearRing: ApiBundle.LinearRing,
        MultiLineString: ApiBundle.MultiLineString,
        MultiPoint: ApiBundle.MultiPoint,
        MultiPolygon: ApiBundle.MultiPolygon,
        Point: ApiBundle.Point,
        PointStyleOptions: ApiBundle.PointStyleOptions,
        Polygon: ApiBundle.Polygon,
        PolygonStyleOptions: ApiBundle.PolygonStyleOptions,
        SpatialReference: ApiBundle.SpatialReference
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
