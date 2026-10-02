import { BaseGeometry, GeometryType, LinearRing, LineString, MultiLineString, MultiPoint, Point, SrDef, IdDef } from '../..';
import { EsriPolygon } from '../../../esri';
import { default as GeoJson } from 'geojson';
export declare class Polygon extends BaseGeometry {
    protected rawArray: Array<Array<Array<number>>>;
    /**
     * Constructs a LinearRing from the given source of a line. Will close the line if it's not already closed
     *
     * @param {String | Integer} id An identifier for the LineString
     * @param {Array | Polygon | MultiLineString | LineString | MultiPoint} geometry A geometry that equates to a line or set of lines, or an array of things that equate to a set of lines. Each array element must be parseable as a line.
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[[number, number],...,[samenumber, samenumber]],...] and we can skip data validations and parsing.
     */
    constructor(id: IdDef, polygon: Polygon);
    constructor(id: IdDef, multiLine: MultiLineString);
    constructor(id: IdDef, linearRing: LinearRing);
    constructor(id: IdDef, line: LineString);
    constructor(id: IdDef, multiPoint: MultiPoint);
    constructor(id: IdDef, listOfListOfCoords: Array<Array<Array<number>>>, sr?: SrDef, raw?: boolean);
    constructor(id: IdDef, listOfListOfPoints: Array<Array<Point>>, sr?: SrDef);
    constructor(id: IdDef, listOfListOfXY: Array<Array<object>>, sr?: SrDef);
    constructor(id: IdDef, listOfLinearRings: Array<LinearRing>, sr?: SrDef);
    constructor(id: IdDef, listOfLines: Array<LineString>, sr?: SrDef);
    constructor(id: IdDef, listOfMultiPoints: Array<MultiPoint>, sr?: SrDef);
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    addLinearRings(linearRings: Array<LinearRing>): void;
    /** Returns an array of the contained rings. A new array is returned each time this is called. */
    get ringArray(): Array<LinearRing>;
    /** Returns the string 'Polygon'. */
    get type(): GeometryType;
    /**
     * Returns an array of ring arrays (e.g. [[[x1, y1], [x2, y2], [x3, y3], [x1, y1]], [<another ring>]] )
     */
    toArray(): Array<Array<Array<number>>>;
    static parsePolygon(input: any): Array<Array<Array<number>>>;
    static arrayDeepCopy(a: Array<Array<Array<number>>>): Array<Array<Array<number>>>;
    static fromESRI(esriPoly: EsriPolygon, id?: number | string): Polygon;
    toESRI(): EsriPolygon;
    static fromGeoJSON(geoJsonPoly: GeoJson.Polygon, id?: number | string): Polygon;
    toGeoJSON(): GeoJson.Polygon;
}
