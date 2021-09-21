// TODO add proper documentation

import { BaseGeometry, GeometryType, Point, SrDef, IdDef } from '@/geo/api';

export class MultiPoint extends BaseGeometry {
    // for now, keeping raw for efficiency (not having object padding around every vertex)
    // TODO think later on pros/cons of changing this to Array<Point>
    protected rawArray: Array<Array<number>>;

    /**
     * Constructs a MultiPoint from the given source of verticies
     *
     * @param {String | Integer} id An identifier for the MultiPoint
     * @param {Array | MultiPoint} geometry A MultiPoint geometry or an array of verticies. Each array element must be parseable as a point. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[number, number],...] and we can skip data validations and parsing.
     */
    // from existing geometry that can be interpreted as a set of points
    constructor(id: IdDef, multiPoint: MultiPoint);
    // from arrays of verticies that can be interpreted as a set of points
    constructor(id: IdDef, listOfCoords: Array<Array<number>>, sr?: SrDef, raw?: boolean);
    constructor(id: IdDef, listOfPoints: Array<Point>, sr?: SrDef);
    constructor(id: IdDef, listOfXY: Array<object>, sr?: SrDef);
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    constructor(id: IdDef, geometry: any, sr?: SrDef, raw?: boolean) {
        super(id, geometry.sr || sr);

        // TODO we could extend to have a constructor that takes a Point class, casting to [Point.toArray()].
        //      leaving out for now, as Multipoint is at the bottom of a lot of big loops,
        //      so want to avoid an extra IF check in parsePointSet

        if (raw) {
            this.rawArray = MultiPoint.arrayDeepCopy(geometry);
        } else {
            this.rawArray = MultiPoint.parsePointSet(geometry);
        }

        /*
        // was a valiant effort but our fastArray was copying verticies byref and causing uninteded linking.
        // instead have made .parseXY more efficient for Point class input and will live with that.
        } else if (geometry[0] instanceof Point) {
            // longshot that its array of API points
            // use instanceof, as checking .type could pass if someone dumps geojson in here
            try {
                this.rawArray = Point.fastArray(<Array<Point>>geometry);
                fastDone = true;
            } catch (e) {
                // do nothing, we will do an element-by-element parse of the array below
            }
        }
        */
    }

    /** Returns an array of the contained lines formatted as API Point objects. A new array is returned each time this is called. */
    get pointArray(): Array<Point> {
        return this.rawArray.map((p, i) => new Point(this.childIdGenerator(i), p, this.sr, true));
    }

    /** Returns a copy of the n-th contained point. */
    getAt(n: number): Point {
        return new Point(this.childIdGenerator(n), this.rawArray[n], this.sr, true);
    }

    /** Will update the n-th contained point with the values of the point parameter. It is assumed the point is in the same spatial reference as the Multipoint */
    updateAt(point: Point | Array<number> | object, n: number) {
        // TODO probably want some type of "my geometry has updated" event triggering on the multipoint. if on a map would need to redraw itself.
        this.rawArray[n] = Point.parseXY(point);
    }

    /** Returns the number of contained points. */
    get length(): number {
        return this.rawArray.length;
    }

    /** Returns the string 'MultiPoint'. */
    get type(): GeometryType {
        return GeometryType.MULTIPOINT;
    }

    // TODO make an .addPoint? .removePoint?

    /**
     * Returns an array of point arrays (e.g. [[x1, y1], [x2, y2]] )
     */
    toArray(): Array<Array<number>> {
        // using private underscore property to avoid copying the array
        // cannot just slice on rawArray, as it will have pointers to the inner vertex arrays
        // speed tests show loops & slice is 3x faster than JSON parse/stringify
        return MultiPoint.arrayDeepCopy(this.rawArray);
    }

    static parsePointSet(input: any): Array<Array<number>> {
        if (input instanceof MultiPoint) {
            // fast return, it's already pure
            // this will also work for LineString and LinearRing
            return input.toArray();
        } else if (Array.isArray(input)) {
            if (input.length === 0) {
                throw new Error('no verticies provided');
            }
            return input.map(v => Point.parseXY(v));
        } else {
            throw new Error('invalid input format for parsePointSet');
        }
    }

    private static arrayDeepCopy(a: Array<Array<number>>): Array<Array<number>> {
        // speed tests show loops & slice is 3x faster than JSON parse/stringify
        return a.map(p => p.slice());
    }
}
