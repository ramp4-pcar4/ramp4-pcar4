import {
    BaseGeometry,
    GeoJsonGeomType,
    GeometryType,
    LineString,
    MultiPoint,
    Point,
    PointSet,
    SpatialReference
} from '@/geo/api';
import type { SrDef, IdDef } from '@/geo/api';
import { EsriPolyline } from '@/geo/esri';
import type GeoJson from 'geojson';

export class MultiLineString extends BaseGeometry {
    protected rawArray: Array<Array<Array<number>>>;

    /**
     * Constructs a MultiLineString from the given source of lines
     *
     * @param {String | Integer} id An identifier for the MultiLineString
     * @param {Array | MultiLineString} geometry A MultiLineString or an array of lines. Each array element must be parseable as a line.
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[[number, number],...],...] and we can skip data validations and parsing.
     */
    // from existing geometry that can be interpreted as a set of lines
    constructor(id: IdDef, multiLine: MultiLineString);
    // from existing geometry that can be interpreted as a single-line set
    constructor(id: IdDef, line: LineString);
    constructor(id: IdDef, multiPoint: MultiPoint);
    // from arrays of lines that can be interpreted as a set of lines
    constructor(
        id: IdDef,
        listOfListOfCoords: Array<Array<Array<number>>>,
        sr?: SrDef,
        raw?: boolean
    );
    constructor(id: IdDef, listOfLines: Array<LineString>, sr?: SrDef);
    constructor(id: IdDef, listOfMultiPoints: Array<MultiPoint>, sr?: SrDef);
    constructor(id: IdDef, listOfListOfPoints: Array<Array<Point>>, sr?: SrDef);
    constructor(id: IdDef, listOfListOfXY: Array<Array<object>>, sr?: SrDef);
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    constructor(id: IdDef, geometry: any, sr?: SrDef, raw?: boolean) {
        super(id, geometry.sr || sr);

        // TODO expand this to allow single line structures to be passed to the constructor? a set of 1 lines should be valid.
        //      possibly dont. the parsing logic becomes more complex when trying to descern if the contents of arrays are lines or points.
        //      and we've already disabled this from other constructor signatures (see Polygon).
        //      a good policy seem to be "accept singletons if its stored in a single API geometry. arrays of stuff should be properly formatted for multi".

        // the non-raw logic here could be moved to a static .parseMultiLines, similar to Point.parseXY, MultiPoint.parsePointSet
        // since currently nothing else but this constructor needs the logic, will keep it here. port to static if that changes.

        if (raw) {
            this.rawArray = MultiLineString.arrayDeepCopy(geometry);
        } else if (geometry instanceof MultiLineString) {
            this.rawArray = geometry.toArray();
        } else if (geometry instanceof PointSet) {
            // will handle LineString, MultiPoint, LinearRing
            this.rawArray = [geometry.toArray()];
        } else if (Array.isArray(geometry)) {
            if (geometry.length === 0) {
                throw new Error('no lines provided');
            }

            // process each element, as they could be any format of varying quality
            this.rawArray = geometry.map(l => PointSet.parsePointSet(l));
        } else {
            throw new Error('invalid lines format for MulitLineString');
        }
    }

    /** Returns an array of the contained lines formatted as API LineString objects. A new array is returned each time this is called. */
    get lineArray(): Array<LineString> {
        return this.rawArray.map(
            (line, i) =>
                new LineString(this.childIdGenerator(i), line, this.sr, true)
        );
    }

    /** Returns a copy of the n-th contained line. */
    getAt(n: number): LineString {
        return new LineString(
            this.childIdGenerator(n),
            this.rawArray[n],
            this.sr,
            true
        );
    }

    /** Will update the n-th contained line with the values of the line parameter. It is assumed the line is in the same spatial reference as the Multipoint */
    updateAt(
        line:
            | PointSet
            | Array<Array<Point>>
            | Array<Array<number>>
            | Array<Array<object>>,
        n: number
    ) {
        // TODO probably want some type of "my geometry has updated" event triggering on the multilinestring. if on a map would need to redraw itself.
        this.rawArray[n] = PointSet.parsePointSet(line);
    }

    /** Returns the number of contained lines. */
    get length(): number {
        return this.rawArray.length;
    }

    /** Returns the string 'MultiLineString'. */
    get type(): GeometryType {
        return GeometryType.MULTILINESTRING;
    }

    /**
     * Returns an array of line arrays (e.g. [[[x1, y1], [x2, y2]], [[x3, y3], [x4, y4]]] )
     */
    toArray(): Array<Array<Array<number>>> {
        return MultiLineString.arrayDeepCopy(this.rawArray);
    }

    private static arrayDeepCopy(
        a: Array<Array<Array<number>>>
    ): Array<Array<Array<number>>> {
        // speed tests show loops & slice is 3x faster than JSON parse/stringify
        return a.map(l => l.map(p => p.slice()));
    }

    static fromESRI(
        esriLine: EsriPolyline,
        id?: number | string
    ): MultiLineString {
        return new MultiLineString(
            id,
            esriLine.paths,
            SpatialReference.fromESRI(esriLine.spatialReference),
            true
        );
    }

    toESRI(): EsriPolyline {
        return new EsriPolyline({
            paths: this.toArray(),
            spatialReference: this.sr.toESRI()
        });
    }

    static fromGeoJSON(
        geoJsonMultiLine: GeoJson.MultiLineString,
        id?: number | string
    ): MultiLineString {
        return new MultiLineString(
            id,
            geoJsonMultiLine.coordinates,
            SpatialReference.fromGeoJSON(geoJsonMultiLine.crs),
            true
        );
    }

    toGeoJSON(): GeoJson.MultiLineString {
        return <GeoJson.MultiLineString>(
            this.geoJsonFactory(GeoJsonGeomType.MULTILINESTRING, this.toArray())
        );
    }
}
