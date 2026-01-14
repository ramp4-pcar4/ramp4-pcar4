import { BaseGeometry, GeometryType, LineString, MultiPoint, Point, PointSet, SrDef, IdDef } from '../..';
import { EsriPolyline } from '../../../esri';
import { default as GeoJson } from 'geojson';
export declare class MultiLineString extends BaseGeometry {
    protected rawArray: Array<Array<Array<number>>>;
    /**
     * Constructs a MultiLineString from the given source of lines
     *
     * @param {String | Integer} id An identifier for the MultiLineString
     * @param {Array | MultiLineString} geometry A MultiLineString or an array of lines. Each array element must be parseable as a line.
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[[number, number],...],...] and we can skip data validations and parsing.
     */
    constructor(id: IdDef, multiLine: MultiLineString);
    constructor(id: IdDef, line: LineString);
    constructor(id: IdDef, multiPoint: MultiPoint);
    constructor(id: IdDef, listOfListOfCoords: Array<Array<Array<number>>>, sr?: SrDef, raw?: boolean);
    constructor(id: IdDef, listOfLines: Array<LineString>, sr?: SrDef);
    constructor(id: IdDef, listOfMultiPoints: Array<MultiPoint>, sr?: SrDef);
    constructor(id: IdDef, listOfListOfPoints: Array<Array<Point>>, sr?: SrDef);
    constructor(id: IdDef, listOfListOfXY: Array<Array<object>>, sr?: SrDef);
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    /** Returns an array of the contained lines formatted as API LineString objects. A new array is returned each time this is called. */
    get lineArray(): Array<LineString>;
    /** Returns a copy of the n-th contained line. */
    getAt(n: number): LineString;
    /** Will update the n-th contained line with the values of the line parameter. It is assumed the line is in the same spatial reference as the Multipoint */
    updateAt(line: PointSet | Array<Array<Point>> | Array<Array<number>> | Array<Array<object>>, n: number): void;
    /** Returns the number of contained lines. */
    get length(): number;
    /** Returns the string 'MultiLineString'. */
    get type(): GeometryType;
    /**
     * Returns an array of line arrays (e.g. [[[x1, y1], [x2, y2]], [[x3, y3], [x4, y4]]] )
     */
    toArray(): Array<Array<Array<number>>>;
    private static arrayDeepCopy;
    static fromESRI(esriLine: EsriPolyline, id?: number | string): MultiLineString;
    toESRI(): EsriPolyline;
    static fromGeoJSON(geoJsonMultiLine: GeoJson.MultiLineString, id?: number | string): MultiLineString;
    toGeoJSON(): GeoJson.MultiLineString;
}
