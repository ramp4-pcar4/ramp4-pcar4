import { BaseGeometry, GeometryType, LinearRing, LineString, MultiLineString, MultiPoint, Point, Polygon, SrDef, IdDef } from '../..';
import { EsriPolygon } from '../../../esri';
import { default as GeoJson } from 'geojson';
export declare class MultiPolygon extends BaseGeometry {
    protected rawArray: Array<Array<Array<Array<number>>>>;
    /**
     * Constructs a MultiPolygon from the given source of polygons.
     *
     * @param {String | Integer} id An identifier for the MultiPolygon
     * @param {Array | Polygon | MultiLineString | LineString | MultiPoint} geometry A geometry that equates to a line or set of lines, or an array of things that equate to a set of lines. Each array element must be parseable as a line.
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[[number, number],...,[samenumber, samenumber]],...] and we can skip data validations and parsing.
     */
    constructor(id: IdDef, multiPolygon: MultiPolygon);
    constructor(id: IdDef, polygon: Polygon);
    constructor(id: IdDef, multiLine: MultiLineString);
    constructor(id: IdDef, linearRing: LinearRing);
    constructor(id: IdDef, line: LineString);
    constructor(id: IdDef, multiPoint: MultiPoint);
    constructor(id: IdDef, listOflistOfListOfCoords: Array<Array<Array<Array<number>>>>, sr?: SrDef, raw?: boolean);
    constructor(id: IdDef, listOflistOfListOfPoints: Array<Array<Array<Point>>>, sr?: SrDef);
    constructor(id: IdDef, listOflistOfListOfXY: Array<Array<Array<object>>>, sr?: SrDef);
    constructor(id: IdDef, listOfPolygons: Array<Polygon>, sr?: SrDef);
    constructor(id: IdDef, listOflistOfLinearRings: Array<Array<LinearRing>>, sr?: SrDef);
    constructor(id: IdDef, listOflistOfLines: Array<Array<LineString>>, sr?: SrDef);
    constructor(id: IdDef, listOflistOfMultiPoints: Array<Array<MultiPoint>>, sr?: SrDef);
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    addPolygon(polygon: Polygon): void;
    /** Returns an array of the contained polygons. A new array is returned each time this is called. */
    get polygonArray(): Array<Polygon>;
    /** Returns the string 'MultiPolygon'. */
    get type(): GeometryType;
    /**
     * Returns an array of polygon arrays (e.g. [[[[x1, y1], [x2, y2], [x3, y3], [x1, y1]], [<another ring>]], [<another polygon>]] )
     */
    toArray(): Array<Array<Array<Array<number>>>>;
    static parseMultiPolygon(input: any): Array<Array<Array<Array<number>>>>;
    static arrayDeepCopy(a: Array<Array<Array<Array<number>>>>): Array<Array<Array<Array<number>>>>;
    static fromESRI(esriPoly: EsriPolygon, id?: number | string): MultiPolygon;
    toESRI(): EsriPolygon;
    static fromGeoJSON(geoJsonMultiPoly: GeoJson.MultiPolygon, id?: number | string): MultiPolygon;
    toGeoJSON(): GeoJson.MultiPolygon;
}
