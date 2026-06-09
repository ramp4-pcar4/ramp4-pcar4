import { BaseGeometry, GeometryType, SrDef, IdDef } from '../..';
import { EsriPoint } from '../../../esri';
import { default as GeoJson } from 'geojson';
export declare class Point extends BaseGeometry {
    protected rawArray: Array<number>;
    /**
     * Constructs a Point from the given XY or XYLiteral.
     *
     * @param {String | Integer} id An identifier for the Point
     * @param {Array | Object} geometry An encoding of the co-ordinate values. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {SpatialReference | number | string} [sr] A spatial reference for the co-ordinates. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the xy value is in the pure format of [number, number] and we can skip data validations and parsing.
     */
    constructor(id: IdDef, point: Point);
    constructor(id: IdDef, coords: Array<number>, sr?: SrDef, raw?: boolean);
    constructor(id: IdDef, xy: object, sr?: SrDef);
    /** Returns the string 'Point'. */
    get type(): GeometryType;
    get x(): number;
    set x(val: number);
    get y(): number;
    set y(val: number);
    /**
     * Returns a 2-element array with values x and y (i.e. [x, y])
     */
    toArray(): Array<number>;
    static parseXY(input: any): Array<number>;
    static fromESRI(esriPoint: EsriPoint, id?: number | string): Point;
    toESRI(): EsriPoint;
    static fromGeoJSON(geoJsonPoint: GeoJson.Point, id?: number | string): Point;
    toGeoJSON(): GeoJson.Point;
}
