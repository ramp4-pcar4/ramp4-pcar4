import {
    GeoJsonGeomType,
    GeometryType,
    LineString,
    MultiPoint,
    Point,
    PointSet,
    SpatialReference
} from '@/geo/api';

import type { SrDef, IdDef } from '@/geo/api';

import { EsriPolygon } from '@/geo/esri';
import type GeoJson from 'geojson';

export class LinearRing extends PointSet {
    /**
     * Constructs a LinearRing from the given source of a line. Will close the line if it's not already closed
     *
     * @param {String | Integer} id An identifier for the LineString
     * @param {Array | LineString | MultiPoint} geometry A LineString or MultiPoint geometry, or an array of verticies. Each array element must be parseable as a point. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     * @param {Boolean} [raw] An efficiency flag. If set, it means the verticies is in the pure format of [[number, number],...,[samenumber, samenumber]] and we can skip data validations and parsing.
     */
    // from existing geometry that can be interpreted as a ring
    constructor(id: IdDef, linearRing: LinearRing);
    constructor(id: IdDef, line: LineString);
    constructor(id: IdDef, multiPoint: MultiPoint);
    // from arrays of verticies that can be interpreted as a ring
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
        super(id, geometry, sr, raw);

        // apply closing logic to the now-constructed internal geometry
        LinearRing.closeRing(this.rawArray);

        if (this.length < 4) {
            throw new Error(
                'Linear Ring must have at least 3 distinct vertices.'
            );
        }
    }

    /** Returns the string 'LinearRing'. */
    get type(): GeometryType {
        return GeometryType.LINEARRING;
    }

    /** Will update the n-th contained point with the values of the point parameter. It is assumed the point is in the same spatial reference as the Multipoint */
    updateAt(point: Point | Array<number> | object, n: number) {
        // add extra logic to ensure ring remains a ring
        const l = this.length - 1;
        if (n === 0) {
            super.updateAt(point, l);
        } else if (n === l) {
            super.updateAt(point, 0);
        }
        // TODO probably want some type of "my geometry has updated" event triggering on the multipoint. if on a map would need to redraw itself.
        //      may also need to supress if we have the end case; it would trigger the event twice, and in the first time the ring would not be a ring.
        //      super.updateAt is very basic, might make more sense to copy the logic here and control the event from this function.

        super.updateAt(point, n);
    }

    /**
     * Will inspect an array of verticies. If the last vertex is different than the first vertex,
     * will add a copy of the first vertex to the end, thus closing the line.
     * The array parameter will be modified
     *
     * @param {Array} points An array of 2-element arrays of verticies.
     */
    static closeRing(points: Array<Array<number>>): void {
        const first = points[0];
        const last = points[points.length - 1];
        if (first[0] !== last[0] || first[1] !== last[1]) {
            // 0 = x, 1 = y
            points.push(first.slice());
        }
    }

    static fromESRI(esriPoly: EsriPolygon, id?: number | string): LinearRing {
        // TODO warn/error if poly has more than one ring?
        return new LinearRing(
            id,
            esriPoly.rings[0],
            SpatialReference.fromESRI(esriPoly.spatialReference),
            true
        );
    }

    toESRI(): EsriPolygon {
        return new EsriPolygon({
            rings: [this.toArray()],
            spatialReference: this.sr.toESRI()
        });
    }

    static fromGeoJSON(
        geoJsonLine: GeoJson.LineString,
        id?: number | string
    ): LinearRing {
        return new LinearRing(
            id,
            geoJsonLine.coordinates,
            SpatialReference.fromGeoJSON(geoJsonLine.crs),
            true
        );
    }

    toGeoJSON(): GeoJson.Polygon {
        // GeoJson has no Linear Ring.
        return <GeoJson.Polygon>(
            this.geoJsonFactory(GeoJsonGeomType.POLYGON, [this.toArray()])
        );
    }
}
