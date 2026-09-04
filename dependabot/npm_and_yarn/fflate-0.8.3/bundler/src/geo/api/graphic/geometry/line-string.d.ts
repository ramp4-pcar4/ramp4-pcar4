import { GeometryType, MultiPoint, Point, PointSet, SrDef, IdDef } from '../..';
import { EsriPolyline } from '../../../esri';
import { default as GeoJson } from 'geojson';
export declare class LineString extends PointSet {
    /**
     * Constructs a LineString from the given source of a line
     *
     * @param {String | Integer} id An identifier for the LineString
     * @param {Array | LineString | MultiPoint} geometry A LineString or MultiPoint geometry, or an array of verticies. Each array element must be parseable as a point. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[number, number],...] and we can skip data validations and parsing.
     */
    constructor(id: IdDef, line: LineString);
    constructor(id: IdDef, multiPoint: MultiPoint);
    constructor(id: IdDef, listOfCoords: Array<Array<number>>, sr?: SrDef, raw?: boolean);
    constructor(id: IdDef, listOfPoints: Array<Point>, sr?: SrDef);
    constructor(id: IdDef, listOfXY: Array<object>, sr?: SrDef);
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    /** Returns the string 'LineString'. */
    get type(): GeometryType;
    static fromESRI(esriLine: EsriPolyline, id?: number | string): LineString;
    toESRI(): EsriPolyline;
    static fromGeoJSON(geoJsonLine: GeoJson.LineString, id?: number | string): LineString;
    toGeoJSON(): GeoJson.LineString;
}
