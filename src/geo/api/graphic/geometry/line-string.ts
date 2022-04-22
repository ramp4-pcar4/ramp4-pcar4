import {
    GeoJsonGeomType,
    GeometryType,
    MultiPoint,
    Point,
    PointSet,
    SpatialReference
} from '@/geo/api';

import type { SrDef, IdDef } from '@/geo/api';
import { EsriPolyline } from '@/geo/esri';
import type GeoJson from 'geojson';

export class LineString extends PointSet {
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
        if (this.rawArray.length < 2) {
            throw new Error('lines require at least two verticies');
        }
    }

    /** Returns the string 'LineString'. */
    get type(): GeometryType {
        return GeometryType.LINESTRING;
    }

    static fromESRI(esriLine: EsriPolyline, id?: number | string): LineString {
        // TODO warn/error if mulitline is provided?
        return new LineString(
            id,
            esriLine.paths[0],
            SpatialReference.fromESRI(esriLine.spatialReference),
            true
        );
    }

    toESRI(): EsriPolyline {
        return new EsriPolyline({
            paths: [this.toArray()],
            spatialReference: this.sr.toESRI()
        });
    }

    static fromGeoJSON(
        geoJsonLine: GeoJson.LineString,
        id?: number | string
    ): LineString {
        return new LineString(
            id,
            geoJsonLine.coordinates,
            SpatialReference.fromGeoJSON(geoJsonLine.crs),
            true
        );
    }

    toGeoJSON(): GeoJson.LineString {
        return <GeoJson.LineString>(
            this.geoJsonFactory(GeoJsonGeomType.LINESTRING, this.toArray())
        );
    }
}
