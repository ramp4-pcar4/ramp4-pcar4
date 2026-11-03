import { BaseGeometry, Point, SrDef, IdDef } from '../..';
export declare class PointSet extends BaseGeometry {
    protected rawArray: Array<Array<number>>;
    /**
     * General constructor from a given source of verticies
     *
     * @param {String | Integer} id An identifier for the MultiPoint
     * @param {Array} geometry An array of verticies. Each array element must be parseable as a point. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[number, number],...] and we can skip data validations and parsing.
     */
    constructor(id: IdDef, pointSet: PointSet);
    constructor(id: IdDef, listOfCoords: Array<Array<number>>, sr?: SrDef, raw?: boolean);
    constructor(id: IdDef, listOfPoints: Array<Point>, sr?: SrDef);
    constructor(id: IdDef, listOfXY: Array<object>, sr?: SrDef);
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    /** Returns an array of the contained lines formatted as API Point objects. A new array is returned each time this is called. */
    get pointArray(): Array<Point>;
    /** Returns a copy of the n-th contained point. */
    getAt(n: number): Point;
    /** Will update the n-th contained point with the values of the point parameter. It is assumed the point is in the same spatial reference as the Multipoint */
    updateAt(point: Point | Array<number> | object, n: number): void;
    /** Returns the number of contained points. */
    get length(): number;
    /**
     * Returns an array of point arrays (e.g. [[x1, y1], [x2, y2]] )
     */
    toArray(): Array<Array<number>>;
    static parsePointSet(input: any): Array<Array<number>>;
    private static arrayDeepCopy;
}
