// the structure of the geo element of the RAMP API

import {
    APIScope,
    InstanceAPI,
    LayerAPI,
    MapAPI,
    UtilsAPI
} from '@/api/internal';

import {
    Extent,
    Graphic,
    LinearRing,
    LineString,
    LineStyle,
    MultiLineString,
    MultiPoint,
    MultiPolygon,
    Point,
    PointStyle,
    Polygon,
    PolygonStyle,
    SpatialReference
} from '@/geo/api';

import { EsriConfig } from '@/geo/esri';

export class GeoAPI extends APIScope {
    map: MapAPI;
    layer: LayerAPI;
    utils: UtilsAPI;

    // how to best expose the geometery/graphic stuff?
    // This is not a huge deal as it's also available via RAMP.GEO.
    // this provides more of a convenience if someone is already working against iApi.
    // Decided on putting it at the root for now, can re-arrange before v1

    // Other options:
    //      .graphic would be proper, but thats a long word.
    //      split things out? geo.geom for geometry, geo.graphic for others?
    //      everything under .geom?
    //      note we have .geo.utils.geom already.
    //      .shapes?
    //      Remove .utils from geo, hoist up what is inside there to here,
    //      so we have geo.proj, geo.geom, geo.attributes, etc
    //      and then we can put the stuff into geo.geom?

    Extent = Extent;
    Graphic = Graphic;
    // Hover = Hover;
    LineString = LineString;
    LineStyle = LineStyle;
    LinearRing = LinearRing;
    MultiLineString = MultiLineString;
    MultiPoint = MultiPoint;
    MultiPolygon = MultiPolygon;
    Point = Point;
    PointStyle = PointStyle;
    Polygon = Polygon;
    PolygonStyle = PolygonStyle;
    SpatialReference = SpatialReference;

    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);

        this.map = new MapAPI(iApi);
        this.utils = new UtilsAPI(iApi);
        this.layer = new LayerAPI(iApi);
    }

    /**
     * Set a proxy service to allow consumption of cross-domain non-CORS resources.
     *
     * @param {string} proxyUrl Url to proxy or empty string to clear. Must be relative url on host domain, or full url to CORS supported server
     */
    set proxy(proxyUrl: string) {
        EsriConfig.request.proxyUrl = proxyUrl;
    }

    /**
     * Read the current proxy setting, returns url string, empty string if no proxy
     */
    get proxy(): string {
        return EsriConfig.request.proxyUrl || '';
    }
}
