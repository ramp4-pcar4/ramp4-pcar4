import {
    BaseGeometry,
    GeoJsonGeomType,
    GeometryType,
    LinearRing,
    LineString,
    MultiLineString,
    MultiPoint,
    Point,
    PointSet,
    SpatialReference
} from '@/geo/api';
import type { SrDef, IdDef } from '@/geo/api';
import { EsriPolygon } from '@/geo/esri';
import type GeoJson from 'geojson';

export class Polygon extends BaseGeometry {
    protected rawArray: Array<Array<Array<number>>>;

    /**
     * Constructs a LinearRing from the given source of a line. Will close the line if it's not already closed
     *
     * @param {String | Integer} id An identifier for the LineString
     * @param {Array | Polygon | MultiLineString | LineString | MultiPoint} geometry A geometry that equates to a line or set of lines, or an array of things that equate to a set of lines. Each array element must be parseable as a line.
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[[number, number],...,[samenumber, samenumber]],...] and we can skip data validations and parsing.
     */
    // from existing geometry that can be interpreted as a multi-ring polygon
    constructor(id: IdDef, polygon: Polygon);
    constructor(id: IdDef, multiLine: MultiLineString);
    // from existing geometry that can be interpreted as a single-ring polygon
    constructor(id: IdDef, linearRing: LinearRing);
    constructor(id: IdDef, line: LineString);
    constructor(id: IdDef, multiPoint: MultiPoint);
    // from arrays of single line structures that can be interpreted as a multi-ring polygon
    constructor(
        id: IdDef,
        listOfListOfCoords: Array<Array<Array<number>>>,
        sr?: SrDef,
        raw?: boolean
    );
    constructor(id: IdDef, listOfListOfPoints: Array<Array<Point>>, sr?: SrDef);
    constructor(id: IdDef, listOfListOfXY: Array<Array<object>>, sr?: SrDef);
    constructor(id: IdDef, listOfLinearRings: Array<LinearRing>, sr?: SrDef);
    constructor(id: IdDef, listOfLines: Array<LineString>, sr?: SrDef);
    constructor(id: IdDef, listOfMultiPoints: Array<MultiPoint>, sr?: SrDef);
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    // from arrays of verticies (i.e. one line) that can be interpreted as a single-ring polygon
    // for now, not allowing these as it increases parsing logic quite a bit.
    // constructor(id: IdDef, polygon: Array<Point>, sr?: SpatialReference)
    // constructor(id: IdDef, polygon: Array<Array<number>>, sr?: SpatialReference)
    // constructor(id: IdDef, polygon: Array<object>, sr?: SpatialReference)
    constructor(id: IdDef, geometry: any, sr?: SrDef, raw?: boolean) {
        super(id, geometry.sr || sr);

        if (raw) {
            this.rawArray = Polygon.arrayDeepCopy(geometry);
        } else {
            this.rawArray = Polygon.parsePolygon(geometry);
        }
    }

    addLinearRings(linearRings: Array<LinearRing>): void {
        // TODO consider to make this of any of the wacky types and apply the parser
        linearRings.forEach(lr => this.rawArray.push(lr.toArray()));
    }

    // TODO make a .getAt, .updateAt for rings?
    // TODO make a .removeLinearRings?

    /** Returns an array of the contained rings. A new array is returned each time this is called. */
    get ringArray(): Array<LinearRing> {
        return this.rawArray.map(
            (lra, i) =>
                new LinearRing(this.childIdGenerator(i), lra, this.sr, true)
        );
    }

    /** Returns the string 'Polygon'. */
    get type(): GeometryType {
        return GeometryType.POLYGON;
    }

    /**
     * Returns an array of ring arrays (e.g. [[[x1, y1], [x2, y2], [x3, y3], [x1, y1]], [<another ring>]] )
     */
    toArray(): Array<Array<Array<number>>> {
        return Polygon.arrayDeepCopy(this.rawArray);
    }

    static parsePolygon(input: any): Array<Array<Array<number>>> {
        let arrOfLines = [];

        if (input instanceof Polygon) {
            // fast return, it's already pure
            return input.toArray();
        } else if (input instanceof MultiLineString) {
            arrOfLines = input.toArray();
        } else if (input instanceof PointSet) {
            // will also handle LineString, MultiPoint, LinearRing
            arrOfLines = [input.toArray()];
        } else if (Array.isArray(input)) {
            if (input.length === 0) {
                throw new Error('no rings provided');
            }
            arrOfLines = input.map(l => PointSet.parsePointSet(l));
        } else {
            throw new Error('invalid input format for parsePolygon');
        }

        // ensure each line in our collection of lines is closed
        arrOfLines.forEach(l => LinearRing.closeRing(l));
        return arrOfLines;
    }

    static arrayDeepCopy(
        a: Array<Array<Array<number>>>
    ): Array<Array<Array<number>>> {
        // speed tests show loops & slice is 3x faster than JSON parse/stringify
        return a.map(l => l.map(p => p.slice()));
    }

    static fromESRI(esriPoly: EsriPolygon, id?: number | string): Polygon {
        return new Polygon(
            id,
            esriPoly.rings,
            SpatialReference.fromESRI(esriPoly.spatialReference),
            true
        );
    }

    toESRI(): EsriPolygon {
        return new EsriPolygon({
            rings: this.toArray(),
            spatialReference: this.sr.toESRI()
        });
    }

    static fromGeoJSON(
        geoJsonPoly: GeoJson.Polygon,
        id?: number | string
    ): Polygon {
        return new Polygon(
            id,
            geoJsonPoly.coordinates,
            SpatialReference.fromGeoJSON(geoJsonPoly.crs),
            true
        );
    }

    toGeoJSON(): GeoJson.Polygon {
        return <GeoJson.Polygon>(
            this.geoJsonFactory(GeoJsonGeomType.POLYGON, this.toArray())
        );
    }
}
