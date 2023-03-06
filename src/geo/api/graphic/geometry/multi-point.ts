import {
    GeoJsonGeomType,
    GeometryType,
    Point,
    PointSet,
    SpatialReference
} from '@/geo/api';
import type { SrDef, IdDef } from '@/geo/api';
import { EsriMultipoint } from '@/geo/esri';
import type GeoJson from 'geojson';

export class MultiPoint extends PointSet {
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
    }

    /** Returns the string 'MultiPoint'. */
    get type(): GeometryType {
        return GeometryType.MULTIPOINT;
    }

    // TODO make an .addPoint? .removePoint?

    static fromESRI(
        esriMultiPoint: EsriMultipoint,
        id?: number | string
    ): MultiPoint {
        return new MultiPoint(
            id,
            esriMultiPoint.points,
            SpatialReference.fromESRI(esriMultiPoint.spatialReference),
            true
        );
    }

    toESRI(): EsriMultipoint {
        return new EsriMultipoint({
            points: this.toArray(),
            spatialReference: this.sr.toESRI()
        });
    }

    static fromGeoJSON(
        geoJsonMultiPoint: GeoJson.MultiPoint,
        id?: number | string
    ): MultiPoint {
        return new MultiPoint(
            id,
            geoJsonMultiPoint.coordinates,
            SpatialReference.fromGeoJSON(geoJsonMultiPoint.crs),
            true
        );
    }

    toGeoJSON(): GeoJson.MultiPoint {
        return <GeoJson.MultiPoint>(
            this.geoJsonFactory(GeoJsonGeomType.MULTIPOINT, this.toArray())
        );
    }
}
