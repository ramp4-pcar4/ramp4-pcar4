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
    Polygon,
    SpatialReference
} from '@/geo/api';
import type { SrDef, IdDef } from '@/geo/api';
import { EsriPolygon } from '@/geo/esri';
import type GeoJson from 'geojson';

export class MultiPolygon extends BaseGeometry {
    protected rawArray: Array<Array<Array<Array<number>>>>;

    /**
     * Constructs a MultiPolygon from the given source of polygons.
     *
     * @param {String | Integer} id An identifier for the MultiPolygon
     * @param {Array | Polygon | MultiLineString | LineString | MultiPoint} geometry A geometry that equates to a line or set of lines, or an array of things that equate to a set of lines. Each array element must be parseable as a line.
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[[number, number],...,[samenumber, samenumber]],...] and we can skip data validations and parsing.
     */
    // from existing geometry that can be interpreted as a multi polygon
    constructor(id: IdDef, multiPolygon: MultiPolygon);
    // from existing geometry that can be interpreted as a single polygon
    constructor(id: IdDef, polygon: Polygon);
    constructor(id: IdDef, multiLine: MultiLineString);
    constructor(id: IdDef, linearRing: LinearRing);
    constructor(id: IdDef, line: LineString);
    constructor(id: IdDef, multiPoint: MultiPoint);
    // from arrays of arrays of single line structures that can be interpreted as a multi polygon
    constructor(
        id: IdDef,
        listOflistOfListOfCoords: Array<Array<Array<Array<number>>>>,
        sr?: SrDef,
        raw?: boolean
    );
    constructor(
        id: IdDef,
        listOflistOfListOfPoints: Array<Array<Array<Point>>>,
        sr?: SrDef
    );
    constructor(
        id: IdDef,
        listOflistOfListOfXY: Array<Array<Array<object>>>,
        sr?: SrDef
    );
    constructor(id: IdDef, listOfPolygons: Array<Polygon>, sr?: SrDef);
    constructor(
        id: IdDef,
        listOflistOfLinearRings: Array<Array<LinearRing>>,
        sr?: SrDef
    );
    constructor(
        id: IdDef,
        listOflistOfLines: Array<Array<LineString>>,
        sr?: SrDef
    );
    constructor(
        id: IdDef,
        listOflistOfMultiPoints: Array<Array<MultiPoint>>,
        sr?: SrDef
    );
    constructor(id: IdDef, listOfMixedFormats: Array<any>, sr?: SrDef);
    constructor(id: IdDef, geometry: any, sr?: SrDef, raw?: boolean) {
        super(id, geometry.sr || sr);

        // TODO update all the geometry signatures to have a listOfMixedFormats Array<any> to indicate we can mix & match

        if (raw) {
            this.rawArray = MultiPolygon.arrayDeepCopy(geometry);
        } else {
            this.rawArray = MultiPolygon.parseMultiPolygon(geometry);
        }
    }

    addPolygon(polygon: Polygon): void {
        // TODO consider to make this of any of the wacky types and apply the parser
        this.rawArray.push(polygon.toArray());
    }

    // TODO make a .getAt, .updateAt for polygons?
    // TODO make a .removePolygon?

    /** Returns an array of the contained polygons. A new array is returned each time this is called. */
    get polygonArray(): Array<Polygon> {
        return this.rawArray.map(
            (p, i) => new Polygon(this.childIdGenerator(i), p, this.sr, true)
        );
    }

    /** Returns the string 'MultiPolygon'. */
    get type(): GeometryType {
        return GeometryType.MULTIPOLYGON;
    }

    /**
     * Returns an array of polygon arrays (e.g. [[[[x1, y1], [x2, y2], [x3, y3], [x1, y1]], [<another ring>]], [<another polygon>]] )
     */
    toArray(): Array<Array<Array<Array<number>>>> {
        return MultiPolygon.arrayDeepCopy(this.rawArray);
    }

    static parseMultiPolygon(input: any): Array<Array<Array<Array<number>>>> {
        if (input instanceof MultiPolygon) {
            // fast return, it's already pure
            return input.toArray();
        } else if (input instanceof Polygon) {
            // fast return, it's already pure
            return [input.toArray()];
        } else if (
            input instanceof MultiLineString ||
            input instanceof PointSet
        ) {
            // PointSet will also be true for LineString, LinearRing, MultiPoint
            // use polygon parser to ensure rings are closed
            return [Polygon.parsePolygon(input)];
        } else if (Array.isArray(input)) {
            if (input.length === 0) {
                throw new Error('no polygons provided');
            }
            return input.map(p => Polygon.parsePolygon(p));
        } else {
            throw new Error('invalid input format for parseMultiPolygon');
        }
    }

    // sing this function definition. epic chorus.
    static arrayDeepCopy(
        a: Array<Array<Array<Array<number>>>>
    ): Array<Array<Array<Array<number>>>> {
        // speed tests show loops & slice is 3x faster than JSON parse/stringify
        // array of polyGons to array of Lines(rings) to array of Points, copy each point
        return a.map(g => g.map(l => l.map(p => p.slice())));
    }

    static fromESRI(esriPoly: EsriPolygon, id?: number | string): MultiPolygon {
        return new MultiPolygon(
            id,
            [esriPoly.rings],
            SpatialReference.fromESRI(esriPoly.spatialReference),
            true
        );
    }

    toESRI(): EsriPolygon {
        // esri doesn't support multipolygons. instead all polygons become one polygon that has all the rings in it
        const ringMerger: Array<Array<Array<number>>> = [];

        // TODO is there a more efficient way to do this than with pushes? use concats?
        // concat will keep re-copying all known rings with each new polygon encountered,
        // so probably worse (internet tends to agree)
        this.toArray().forEach(poly => {
            poly.forEach(ring => ringMerger.push(ring));
        });

        return new EsriPolygon({
            rings: ringMerger,
            spatialReference: this.sr.toESRI()
        });
    }

    static fromGeoJSON(
        geoJsonMultiPoly: GeoJson.MultiPolygon,
        id?: number | string
    ): MultiPolygon {
        return new MultiPolygon(
            id,
            geoJsonMultiPoly.coordinates,
            SpatialReference.fromGeoJSON(geoJsonMultiPoly.crs),
            true
        );
    }

    toGeoJSON(): GeoJson.MultiPolygon {
        return <GeoJson.MultiPolygon>(
            this.geoJsonFactory(GeoJsonGeomType.MULTIPOLYGON, this.toArray())
        );
    }
}
