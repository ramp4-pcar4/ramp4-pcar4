// TODO add proper documentation

import BaseGeometry from './BaseGeometry';
import { GeometryType, SrDef, IdDef } from '../apiDefs';

export default class Point extends BaseGeometry {

    // for now, trying out storing raw geometry in array format.
    // thinking is that it will be in native format for geojson and for
    // feeding into other ramp geometry types (i.e. arrays of points like [[x1,y1],[x2,y2]])
    protected rawArray: Array<number>;

    /**
     * Constructs a Point from the given XY or XYLiteral.
     *
     * @param {String | Integer} id An identifier for the Point
     * @param {Array | Object} geometry An encoding of the co-ordinate values. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {SpatialReference | number | string} [sr] A spatial reference for the co-ordinates. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the xy value is in the pure format of [number, number] and we can skip data validations and parsing.
     */
    constructor(id: IdDef, point: Point)
    constructor(id: IdDef, coords: Array<number>, sr?: SrDef, raw?: boolean)
    constructor(id: IdDef, xy: object, sr?: SrDef)
    constructor(id: IdDef, geometry: any, sr?: SrDef, raw?: boolean) {
        super(id, geometry.sr || sr);

        if (raw) {
            this.rawArray = geometry.slice();
        } else {
            this.rawArray = Point.parseXY(geometry);
        }
    }

    /** Returns the string 'Point'. */
    get type(): GeometryType {
        return GeometryType.POINT;
    }

    get x(): number {
        return this.rawArray[0];
    }
    set x(val: number) {
        // TODO some kind of 'i updated' event?
        this.rawArray[0] = val;
    }
    get y(): number {
        return this.rawArray[1];
    }
    set y(val: number) {
        // TODO some kind of 'i updated' event?
        this.rawArray[1] = val;
    }

    /**
     * Returns a 2-element array with values x and y (i.e. [x, y])
     */
    toArray(): Array<number> {
        // this makes a copy
        // TODO decide if it should be a copy. document choice
        return this.rawArray.slice();
    }

    static parseXY(input: any): Array<number> {

        let buffer: Array<any>;

        // test for various supported formats
        // do array first, as it's fastest. also use arrays are recommended syntax and use in samples
        if (Array.isArray(input) && input.length === 2) {
            // two element array
            buffer = input;

        /*
        // TODO for the moment, favoring offloading the geojson support to a converter function in geoapi.
        //      would make everything much more efficient (i.e. not checking every input; the geojson converter will expect proper input)
        } else if (input.type === 'Feature' && input.geometry && input.geometry.type === 'Point') {
            // geojson point feature
            buffer = input.geometry.coordinates;
        } else if (input.type === 'Point') {
            // geojson point geometry
            buffer = input.coordinates;
        */
        } else if (input instanceof Point) {
            // fast return, it's already pure
            return input.toArray();
        } else {
            // attempt to find x and y properties
            buffer = [input.x, input.y];
        }

        // check that point values are numeric
        if (isNaN(buffer[0]) || isNaN(buffer[1])) {
            // TODO once converter endpoints for esri, geojson are available, add those to the error message
            throw new Error('Unsupported point format detected. Supported formats are two element array of numbers, or object with x and y properties containing numbers');
        } else {
            // TODO if we find things are slow, consider dropping the "text number to number number" casting we provide here. add more errors
            // TODO see if testing if buffer val is string first prior to parseFloating it is more efficient than parseFloating everything
            return [parseFloat(buffer[0]), parseFloat(buffer[1])];
        }
    }

    /* // this is passing the contents of raw array by reference, thus linking stuff we dont want linked
    // purely for efficiency.
    // we can often have the use case in other geometry items where the input is an array of points (e.g. a polygon ring).
    // since we want to encode these minimally, in number arrays, we want to convert from fancy objects to raw data.
    // this function lives here so we can access the protected raw guts and just use them, instead of
    // having to go through .x and .y and constructing arrays for every point.
    static fastArray(listOfPoints: Array<Point>): Array<Array<number>> {
        // the error trick here is to detect impure arrays. hiding it in a function lets us tack it on the back
        // of a || operator, so standard case should be nice and fast as there will always be a raw array.
        // caller should handle the error and use a slower conversion.
        const trick = () => { throw new Error('non-point element found'); };
        return listOfPoints.map(p => p.rawArray || trick());
    }
    */
}