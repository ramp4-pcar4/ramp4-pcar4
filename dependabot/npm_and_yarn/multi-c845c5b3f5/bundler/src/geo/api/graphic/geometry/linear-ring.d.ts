import { GeometryType, LineString, MultiPoint, Point, PointSet, SrDef, IdDef } from '../..';
import { EsriPolygon } from '../../../esri';
import { default as GeoJson } from 'geojson';
export declare class LinearRing extends PointSet {
    /**
     * Constructs a LinearRing from the given source of a line. Will close the line if it's not already closed
     *
     * @param {String | Integer} id An identifier for the LineString
     * @param {Array | LineString | MultiPoint} geometry A LineString or MultiPoint geometry, or an array of verticies. Each array element must be parseable as a point. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[number, number],...,[samenumber, samenumber]] and we can skip data validations and parsing.
     */
    constructor(id: IdDef, linearRing: LinearRing);
    constructor(id: IdDef, line: LineString);
    constructor(id: IdDef, multiPoint: MultiPoint);
    constructor(id: IdDef, listOfCoords: Array<Array<number>>, sr?: SrDef, raw?: boolean);
    constructor(id: IdDef, listOfPoints: Array<Point>, sr?: SrDef);
    constructor(id: IdDef, listOfXY: Array<object>, sr?: SrDef);
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    /** Returns the string 'LinearRing'. */
    get type(): GeometryType;
    /** Will update the n-th contained point with the values of the point parameter. It is assumed the point is in the same spatial reference as the Multipoint */
    updateAt(point: Point | Array<number> | object, n: number): void;
    /**
     * Will inspect an array of verticies. If the last vertex is different than the first vertex,
     * will add a copy of the first vertex to the end, thus closing the line.
     * The array parameter will be modified
     *
     * @param {Array} points An array of 2-element arrays of verticies.
     */
    static closeRing(points: Array<Array<number>>): void;
    static fromESRI(esriPoly: EsriPolygon, id?: number | string): LinearRing;
    toESRI(): EsriPolygon;
    static fromGeoJSON(geoJsonLine: GeoJson.LineString, id?: number | string): LinearRing;
    toGeoJSON(): GeoJson.Polygon;
}
