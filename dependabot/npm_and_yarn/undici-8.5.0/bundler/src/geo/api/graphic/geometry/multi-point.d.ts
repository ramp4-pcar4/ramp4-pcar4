import { GeometryType, Point, PointSet, SrDef, IdDef } from '../..';
import { EsriMultipoint } from '../../../esri';
import { default as GeoJson } from 'geojson';
export declare class MultiPoint extends PointSet {
    /**
     * Constructs a MultiPoint from the given source of verticies
     *
     * @param {String | Integer} id An identifier for the MultiPoint
     * @param {Array | MultiPoint} geometry A MultiPoint geometry or an array of verticies. Each array element must be parseable as a point. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[number, number],...] and we can skip data validations and parsing.
     */
    constructor(id: IdDef, multiPoint: MultiPoint);
    constructor(id: IdDef, listOfCoords: Array<Array<number>>, sr?: SrDef, raw?: boolean);
    constructor(id: IdDef, listOfPoints: Array<Point>, sr?: SrDef);
    constructor(id: IdDef, listOfXY: Array<object>, sr?: SrDef);
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    /** Returns the string 'MultiPoint'. */
    get type(): GeometryType;
    static fromESRI(esriMultiPoint: EsriMultipoint, id?: number | string): MultiPoint;
    toESRI(): EsriMultipoint;
    static fromGeoJSON(geoJsonMultiPoint: GeoJson.MultiPoint, id?: number | string): MultiPoint;
    toGeoJSON(): GeoJson.MultiPoint;
}
