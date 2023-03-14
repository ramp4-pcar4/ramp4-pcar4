import { BaseGeometry, GeoJsonGeomType, GeometryType } from '@/geo/api';
import type { SrDef, IdDef } from '@/geo/api';
import { EsriPoint } from '@/geo/esri';
import { SpatialReference } from './spatial-reference';
import type GeoJson from 'geojson';

export class Point extends BaseGeometry {
    // storing raw geometry in array format.
    // it will be in native format for geojson and for feeding into other
    // ramp geometry types (i.e. arrays of points like [[x1,y1],[x2,y2]])
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
        return this.rawArray.slice();
    }

    static parseXY(input: any): Array<number> {
        let buffer: Array<any>;

        // test for various supported formats
        // do array first, as it's fastest. also use arrays are recommended syntax and use in samples
        if (Array.isArray(input) && input.length === 2) {
            // two element array
            buffer = input;
        } else if (input instanceof Point) {
            // fast return, it's already pure
            return input.toArray();
        } else {
            // attempt to find x and y properties
            buffer = [input.x, input.y];
        }

        // check that point values are numeric
        if (isNaN(buffer[0]) || isNaN(buffer[1])) {
            throw new Error(
                'Unsupported point format detected. Supported formats are two element array of numbers, or object with x and y properties containing numbers'
            );
        } else {
            // TODO if we find things are slow, consider dropping the "text number to number number" casting we provide here. add more errors
            // TODO see if testing if buffer val is string first prior to parseFloating it is more efficient than parseFloating everything
            return [parseFloat(buffer[0]), parseFloat(buffer[1])];
        }
    }

    static fromESRI(esriPoint: EsriPoint, id?: number | string): Point {
        return new Point(
            id,
            [esriPoint.x, esriPoint.y],
            SpatialReference.fromESRI(esriPoint.spatialReference),
            true
        );
    }

    toESRI(): EsriPoint {
        return new EsriPoint({
            x: this.x,
            y: this.y,
            spatialReference: this.sr.toESRI()
        });
    }

    static fromGeoJSON(
        geoJsonPoint: GeoJson.Point,
        id?: number | string
    ): Point {
        return new Point(
            id,
            geoJsonPoint.coordinates,
            SpatialReference.fromGeoJSON(geoJsonPoint.crs),
            true
        );
    }

    toGeoJSON(): GeoJson.Point {
        return <GeoJson.Point>(
            this.geoJsonFactory(GeoJsonGeomType.POINT, this.toArray())
        );
    }
}
