// TODO add proper documentation

import { GeometryType, MultiPoint, Point, SrDef, IdDef } from '@/geo/api';

export class LineString extends MultiPoint {
    /**
     * Constructs a LineString from the given source of a line
     *
     * @param {String | Integer} id An identifier for the LineString
     * @param {Array | LineString | MultiPoint} geometry A LineString or MultiPoint geometry, or an array of verticies. Each array element must be parseable as a point. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[number, number],...] and we can skip data validations and parsing.
     */
    // from existing geometry that can be interpreted as a line
    constructor(id: IdDef, line: LineString);
    constructor(id: IdDef, multiPoint: MultiPoint);
    // from arrays of verticies that can be interpreted as a line
    constructor(id: IdDef, listOfCoords: Array<Array<number>>, sr?: SrDef, raw?: boolean);
    constructor(id: IdDef, listOfPoints: Array<Point>, sr?: SrDef);
    constructor(id: IdDef, listOfXY: Array<object>, sr?: SrDef);
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    constructor(id: IdDef, geometry: any, sr?: SrDef, raw?: boolean) {
        if (raw) {
            // the first IF here is a bit silly; required to satisfy typescript (as we are extending MultiPoint).
            // we could adjust the constructor guides to avoid it, but then would confuse users of IDEs in thinking the raw flag
            // is applicable to non-raw array vertex formats
            super(id, <Array<Array<number>>>geometry, sr, true);
        } else if (geometry instanceof MultiPoint) {
            // LineString classes will also satisfy instanceof
            super(id, geometry);
        } else {
            super(id, geometry, sr);
            if (this.rawArray.length < 2) {
                throw new Error('lines require at least two verticies');
            }
        }
    }

    /** Returns the string 'LineString'. */
    get type(): GeometryType {
        return GeometryType.LINESTRING;
    }
}
