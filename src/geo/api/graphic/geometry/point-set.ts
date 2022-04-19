import { BaseGeometry, Point } from '@/geo/api';
import type { SrDef, IdDef } from '@/geo/api';

// this is a generic class for sets of points. Abstracting to avoid collisions of the various
// subtypes, since they can be very similar but different enough to be grousy.

export class PointSet extends BaseGeometry {
    // for now, keeping raw for efficiency (not having object padding around every vertex)
    protected rawArray: Array<Array<number>>;

    /**
     * General constructor from a given source of verticies
     *
     * @param {String | Integer} id An identifier for the MultiPoint
     * @param {Array} geometry An array of verticies. Each array element must be parseable as a point. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[number, number],...] and we can skip data validations and parsing.
     */
    // from a RAMP class that is a set of points
    constructor(id: IdDef, pointSet: PointSet);
    // from arrays of verticies that can be interpreted as a set of points
    constructor(
        id: IdDef,
        listOfCoords: Array<Array<number>>,
        sr?: SrDef,
        raw?: boolean
    );
    constructor(id: IdDef, listOfPoints: Array<Point>, sr?: SrDef);
    constructor(id: IdDef, listOfXY: Array<object>, sr?: SrDef);
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    constructor(id: IdDef, geometry: any, sr?: SrDef, raw?: boolean) {
        super(id, geometry.sr || sr);

        if (raw) {
            this.rawArray = PointSet.arrayDeepCopy(geometry);
        } else if (geometry instanceof PointSet) {
            this.rawArray = geometry.toArray();
        } else {
            this.rawArray = PointSet.parsePointSet(geometry);
        }
    }

    /** Returns an array of the contained lines formatted as API Point objects. A new array is returned each time this is called. */
    get pointArray(): Array<Point> {
        return this.rawArray.map(
            (p, i) => new Point(this.childIdGenerator(i), p, this.sr, true)
        );
    }

    /** Returns a copy of the n-th contained point. */
    getAt(n: number): Point {
        return new Point(
            this.childIdGenerator(n),
            this.rawArray[n],
            this.sr,
            true
        );
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

    // TODO make an .addPoint? .removePoint?

    /**
     * Returns an array of point arrays (e.g. [[x1, y1], [x2, y2]] )
     */
    toArray(): Array<Array<number>> {
        // using private underscore property to avoid copying the array
        // cannot just slice on rawArray, as it will have pointers to the inner vertex arrays
        // speed tests show loops & slice is 3x faster than JSON parse/stringify
        return PointSet.arrayDeepCopy(this.rawArray);
    }

    static parsePointSet(input: any): Array<Array<number>> {
        if (Array.isArray(input)) {
            if (input.length === 0) {
                throw new Error('no verticies provided');
            }
            return input.map(v => Point.parseXY(v));
        } else {
            // parameter was garbage
            throw new Error('Bad geometry input encountered');
        }
    }

    private static arrayDeepCopy(
        a: Array<Array<number>>
    ): Array<Array<number>> {
        // speed tests show loops & slice is 3x faster than JSON parse/stringify
        return a.map(p => p.slice());
    }
}
