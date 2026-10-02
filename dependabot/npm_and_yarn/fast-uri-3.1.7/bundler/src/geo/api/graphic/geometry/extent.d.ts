import { BaseGeometry, GeometryType, Point, Polygon, RampExtentConfig, SrDef, IdDef } from '../..';
import { EsriExtent } from '../../../esri';
import { default as GeoJson } from 'geojson';
export declare class Extent extends BaseGeometry {
    protected rawMin: Array<number>;
    protected rawMax: Array<number>;
    /**
     * Constructs an Extent from the given source of verticies
     *
     * @param {String | Integer} id An identifier for the Extent
     * @param {Array | Point | Object} minGeometry A point equivalent marking the minimal value corner of the extent. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {Array | Point | Object} maxGeometry A point equivalent marking the maximal value corner of the extent. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     */
    constructor(id: IdDef, minPoint: Point, maxPoint: Point, sr?: SrDef);
    constructor(id: IdDef, minCoords: Array<number>, maxCoords: Array<number>, sr?: SrDef);
    constructor(id: IdDef, minXY: object, maxXY: object, sr?: SrDef);
    constructor(id: IdDef, minAnyFormat: any, maxAnyFormat: any, sr?: SrDef);
    /** Returns the string 'Extent'. */
    get type(): GeometryType;
    get xmin(): number;
    get ymin(): number;
    get xmax(): number;
    get ymax(): number;
    center(): Point;
    expand(factor: number): Extent;
    clone(): Extent;
    /**
     * Reports if a point is within the boundary of the extent.
     * For performance reasons, the point must be in the same spatial reference as the extent.
     *
     * @param {Point} testPoint
     * @returns {boolean} if point was within the extent or not
     */
    contains(testPoint: Point): boolean;
    /**
     * Returns an array of point arrays (e.g. [[x1, y1], [x2, y2]] )
     */
    toArray(): Array<Array<number>>;
    toPolygonArray(): Array<Array<Array<number>>>;
    toPolygon(): Polygon;
    static fromParams(id: IdDef, xmin: string | number, ymin: string | number, xmax: string | number, ymax: string | number, sr?: SrDef): Extent;
    static fromConfig(id: IdDef, configExtent: RampExtentConfig): Extent;
    isEqual(e: Extent | undefined): boolean;
    static fromESRI(esriExtent: EsriExtent, id?: number | string): Extent;
    toESRI(): EsriExtent;
    static fromArcServer(serverExtent: any, id?: number | string): Extent;
    static fromGeoJSON(geoJsonExtent: GeoJson.Polygon, id?: number | string): Extent;
    toGeoJSON(): GeoJson.Polygon;
}
