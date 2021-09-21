// TODO fancy up the docs

import GeoJson from 'geojson';
import {
    Graphic,
    BaseGeometry,
    Extent,
    GeometryType,
    LinearRing,
    LineString,
    MapClick,
    MapMove,
    MultiLineString,
    MultiPoint,
    MultiPolygon,
    Point,
    Polygon,
    SpatialReference
} from '@/geo/api';
import {
    EsriExtent,
    EsriMultipoint,
    EsriPoint,
    EsriPolygon,
    EsriPolyline,
    EsriSpatialReference
} from '@/geo/esri';

// import * as RampAPI from '../api/api';
// import BaseGeometry from '../api/geometry/BaseGeometry'; // this is a bit wonky. could expose on RampAPI, but dont want clients using the baseclass

// import { GeometryType } from '../api/apiDefs';

// GeoJson geometry types
enum gjType {
    POINT = 'Point',
    MULTIPOINT = 'MultiPoint',
    LINESTRING = 'LineString',
    MULTILINESTRING = 'MultiLineString',
    POLYGON = 'Polygon',
    MULTIPOLYGON = 'MultiPolygon'
}

export class GeometryAPI {
    /*
    constructor (infoBundle: InfoBundle) {
        super(infoBundle);
    }
    */

    // these converters are public, but we should discourage use by 3rd party individuals for the ESRI specific stuff
    // TODO doc this in docs.

    /**
     * Convert an ESRI map click event object to a generic RAMPish map click event object
     *
     * @param {MapViewClickEvent | MapViewDoubleClickEvent} esriMapClick an event param from an esri 2D map click or double-click event
     * @param {String | Number} [id] optional id for the map point geometry on the result
     * @returns {MapClick} a generic bundle of data matching a subset of the incoming esri data
     */
    esriMapClickToRamp(
        esriMapClick: __esri.MapViewClickEvent | __esri.MapViewDoubleClickEvent,
        id?: number | string
    ): MapClick {
        return {
            mapPoint: this._convEsriPointToRamp(esriMapClick.mapPoint, id),
            screenX: esriMapClick.x,
            screenY: esriMapClick.y,
            button: esriMapClick.button,
            clickTime: esriMapClick.timestamp
        };
    }

    /**
     * Convert an ESRI map click event object to a generic RAMPish map click event object
     *
     * @param {MapViewPointerMoveEvent} esriMapMove an event param from an esri 2D map click or double-click event
     * @returns {MapMove} a generic bundle of data matching a subset of the incoming esri data
     */
    esriMapMouseToRamp(esriMapMove: __esri.MapViewPointerMoveEvent): MapMove {
        return {
            screenX: esriMapMove.x,
            screenY: esriMapMove.y,
            button: esriMapMove.button,
            moveTime: esriMapMove.timestamp
        };
    }

    /**
     * Converts any RAMP API geometry to a corresponding ESRI geometry
     *
     * @param {BaseGeometry} rampApiGeom a RAMP API geometry
     * @returns {Geometry} an ESRI geometry
     */
    geomRampToEsri(rampApiGeom: BaseGeometry): __esri.Geometry {
        switch (rampApiGeom.type) {
            case GeometryType.POINT:
                return this._convPointToEsri(<Point>rampApiGeom);
            case GeometryType.LINESTRING:
                return this._convLineToEsri(<LineString>rampApiGeom);
            case GeometryType.POLYGON:
                return this._convPolygonToEsri(<Polygon>rampApiGeom);
            case GeometryType.EXTENT:
                return this._convExtentToEsri(<Extent>rampApiGeom);
            case GeometryType.MULTIPOINT:
                return this._convMultiPointToEsri(<MultiPoint>rampApiGeom);
            case GeometryType.MULTILINESTRING:
                return this._convMultiLineToEsri(<MultiLineString>rampApiGeom);
            case GeometryType.MULTIPOLYGON:
                return this._convMultiPolygonToEsri(<MultiPolygon>rampApiGeom);
            case GeometryType.LINEARRING:
                return this._convLinearRingToEsri(<LinearRing>rampApiGeom);
            default:
                throw new Error(`Encountered unhandled geometry type ${rampApiGeom.type}`);
        }
    }

    /**
     * Converts any ESRI geometry to a corresponding RAMP API geometry
     *
     * @param {Geometry} esriGeometry an ESRI geometry
     * @param {String | Number} [id] optional id for the result geometry
     * @returns {BaseGeometry} a RAMP API geometry
     */
    geomEsriToRamp(esriGeometry: __esri.Geometry, id?: number | string): BaseGeometry {
        switch (esriGeometry.type) {
            case 'point':
                return this._convEsriPointToRamp(<__esri.Point>esriGeometry, id);
            case 'polyline':
                return this._convEsriLineToRamp(<__esri.Polyline>esriGeometry, id);
            case 'polygon':
                return this._convEsriPolygonToRamp(<__esri.Polygon>esriGeometry, id);
            case 'extent':
                return this._convEsriExtentToRamp(<__esri.Extent>esriGeometry, id);
            case 'multipoint':
                return this._convEsriMultiPointToRamp(<__esri.Multipoint>esriGeometry, id);
            default:
                throw new Error(`Encountered unhandled geometry type ${esriGeometry.type}`);
        }
    }

    /**
     * Converts any GeoJson geometry to a corresponding RAMP API geometry
     *
     * @param {GeoJson.DirectGeometryObject} geoJsonGeometry a GeoJson geometry
     * @param {String | Number} [id] optional id for the result geometry
     * @returns {BaseGeometry} a RAMP API geometry
     */
    geomGeoJsonToRamp(
        geoJsonGeometry: GeoJson.DirectGeometryObject,
        id?: number | string
    ): BaseGeometry {
        switch (geoJsonGeometry.type) {
            case gjType.POINT:
                return this._convGeoJsonPointToRamp(<GeoJson.Point>geoJsonGeometry, id);
            case gjType.LINESTRING:
                return this._convGeoJsonLineToRamp(<GeoJson.LineString>geoJsonGeometry, id);
            case gjType.POLYGON:
                return this._convGeoJsonPolygonToRamp(<GeoJson.Polygon>geoJsonGeometry, id);
            case gjType.MULTIPOINT:
                return this._convGeoJsonMultiPointToRamp(<GeoJson.MultiPoint>geoJsonGeometry, id);
            case gjType.MULTILINESTRING:
                return this._convGeoJsonMultiLineToRamp(
                    <GeoJson.MultiLineString>geoJsonGeometry,
                    id
                );
            case gjType.MULTIPOLYGON:
                return this._convGeoJsonMultiPolygonToRamp(
                    <GeoJson.MultiPolygon>geoJsonGeometry,
                    id
                );
            default:
                throw new Error(`Encountered unhandled geometry type ${geoJsonGeometry.type}`);
        }
    }

    /**
     * Converts any RAMP API geometry to a corresponding GeoJson geometry
     *
     * @param {BaseGeometry} geoJsonGeometry a RAMP API geometry
     * @returns {GeoJson.DirectGeometryObject} a GeoJson geometry
     */
    geomRampToGeoJson(rampApiGeom: BaseGeometry): GeoJson.DirectGeometryObject {
        switch (rampApiGeom.type) {
            case GeometryType.POINT:
                return this._convPointToGeoJson(<Point>rampApiGeom);
            case GeometryType.LINESTRING:
                return this._convLineToGeoJson(<LineString>rampApiGeom);
            case GeometryType.POLYGON:
                return this._convPolygonToGeoJson(<Polygon>rampApiGeom);
            case GeometryType.EXTENT:
                return this._convExtentToGeoJson(<Extent>rampApiGeom);
            case GeometryType.MULTIPOINT:
                return this._convMultiPointToGeoJson(<MultiPoint>rampApiGeom);
            case GeometryType.MULTILINESTRING:
                return this._convMultiLineToGeoJson(<MultiLineString>rampApiGeom);
            case GeometryType.MULTIPOLYGON:
                return this._convMultiPolygonToGeoJson(<MultiPolygon>rampApiGeom);
            case GeometryType.LINEARRING:
                return this._convLinearRingToGeoJson(<LinearRing>rampApiGeom);
            default:
                throw new Error(`Encountered unhandled geometry type ${rampApiGeom.type}`);
        }
    }

    graphicRampToGeoJson(rampGraphic: Graphic): any {
        // the geojson Feature interface is being crabby.
        let typescriptIsDumb: any = {}; // freaks out assigning random keys to .properties without an explicit `any`
        const f = {
            type: 'Feature',
            geometry: this.geomRampToGeoJson(rampGraphic.geometry),
            properties: typescriptIsDumb
        };

        Object.keys(rampGraphic.attributes).forEach(
            k => (f.properties[k] = rampGraphic.attributes[k])
        );

        return f;
    }

    graphicGeoJsonToRamp(geoJsonFeature: any, geomId?: number | string): Graphic {
        if (geoJsonFeature.type !== 'Feature') {
            throw new Error(
                'Expected input parameter of graphicGeoJsonToRamp to be a GeoJson feature'
            );
        }
        const g = new Graphic();
        g.geometry = this.geomGeoJsonToRamp(geoJsonFeature.geometry, geomId);
        Object.keys(geoJsonFeature.properties).forEach(
            k => (g.attributes[k] = geoJsonFeature.properties[k])
        );

        return g;
    }

    // converts an arcgis server geometry type to ramp geometry type
    serverGeomTypeToRampGeomType(serverType: string): GeometryType {
        if (!serverType) {
            // falsy case, pass it on thru
            return GeometryType.NONE;
        }
        switch (serverType) {
            case 'esriGeometryPolygon':
                return GeometryType.POLYGON;
            case 'esriGeometryPolyline':
                return GeometryType.LINESTRING;
            case 'esriGeometryPoint':
                return GeometryType.POINT;
            case 'esriGeometryMultipoint':
                return GeometryType.MULTIPOINT;
            case 'esriGeometryEnvelope':
                return GeometryType.EXTENT;
            default:
                console.error(`Unrecognized server geometry type encountered: ${serverType}`);
                return GeometryType.UNKNOWN;
        }
    }

    // converts an esri client geometry type to ramp geometry type
    clientGeomTypeToRampGeomType(clientType: string): GeometryType {
        if (!clientType) {
            // falsy case, pass it on thru
            return GeometryType.NONE;
        }
        switch (clientType) {
            case 'polygon':
                return GeometryType.POLYGON;
            case 'polyline':
                return GeometryType.LINESTRING;
            case 'point':
                return GeometryType.POINT;
            case 'multipoint':
                return GeometryType.MULTIPOINT;
            default:
                // "multipatch" and "mesh" are valid values but we have no equivalent currently
                console.error(`Unrecognized client geometry type encountered: ${clientType}`);
                return GeometryType.UNKNOWN;
        }
    }

    // everything below is worker functions for the main hawggies above.
    // they can be used by outside callers, but in most cases, use the standard things ^

    _parseGeoJsonCrs(crs: GeoJson.CoordinateReferenceSystem | undefined): string {
        if (!crs) {
            return 'EPSG:4326';
        } else if (crs.type === 'name') {
            const urnRegex = /urn:ogc:def:crs:EPSG::(\d+)/;

            // no input SR given, and geojson has some spatial ref info on it
            const val: string = crs.properties.name;
            const matches = val.match(urnRegex);
            if (matches) {
                return 'EPSG:' + matches[1];
            } else if (val.substr(0, 7) !== 'urn:ogc') {
                // we will assume its wkt and hope for the best
                return val;
            }
        }

        // if we get this far, things are not happy
        console.error(
            'Encountered unsupported GeoJSON CRS format. Defaulting to lat-long, parsed data is likely wrong',
            crs
        );
        return 'EPSG:4326';
    }

    _convSrToEsri(rampSR: SpatialReference): EsriSpatialReference {
        return new EsriSpatialReference(rampSR.lean());
    }

    _convPointToEsri(rampPoint: Point): EsriPoint {
        return new EsriPoint({
            x: rampPoint.x,
            y: rampPoint.y,
            spatialReference: this._convSrToEsri(rampPoint.sr)
        });
    }

    _convMultiPointToEsri(rampMultiPoint: MultiPoint): EsriMultipoint {
        return new EsriMultipoint({
            points: rampMultiPoint.toArray(),
            spatialReference: this._convSrToEsri(rampMultiPoint.sr)
        });
    }

    private polylineFactory(
        coords: Array<Array<Array<number>>>,
        sr: SpatialReference
    ): EsriPolyline {
        return new EsriPolyline({
            paths: coords,
            spatialReference: this._convSrToEsri(sr)
        });
    }

    _convLineToEsri(rampLine: LineString): EsriPolyline {
        return this.polylineFactory([rampLine.toArray()], rampLine.sr);
    }

    _convMultiLineToEsri(rampMultiLine: MultiLineString): EsriPolyline {
        return this.polylineFactory(rampMultiLine.toArray(), rampMultiLine.sr);
    }

    private polygonFactory(coords: Array<Array<Array<number>>>, sr: SpatialReference): EsriPolygon {
        return new EsriPolygon({
            rings: coords,
            spatialReference: this._convSrToEsri(sr)
        });
    }

    _convLinearRingToEsri(rampRing: LinearRing): EsriPolygon {
        return this.polygonFactory([rampRing.toArray()], rampRing.sr);
    }

    _convPolygonToEsri(rampPolygon: Polygon): EsriPolygon {
        return this.polygonFactory(rampPolygon.toArray(), rampPolygon.sr);
    }

    _convMultiPolygonToEsri(rampMultiPolygon: MultiPolygon): EsriPolygon {
        // esri doesn't support multipolygons. instead all polygons become one polygon that has all the rings in it
        const ringMerger: Array<Array<Array<number>>> = [];

        // TODO is there a more efficient way to do this than with pushes? use concats?
        // concat will keep re-copying all known rings with each new polygon encountered, so probably worse
        rampMultiPolygon.toArray().forEach(poly => {
            poly.forEach(ring => ringMerger.push(ring));
        });
        return this.polygonFactory(ringMerger, rampMultiPolygon.sr);
    }

    _convExtentToEsri(rampExtent: Extent): EsriExtent {
        return new EsriExtent({
            xmin: rampExtent.xmin,
            ymin: rampExtent.ymin,
            xmax: rampExtent.xmax,
            ymax: rampExtent.ymax,
            spatialReference: this._convSrToEsri(rampExtent.sr)
        });
    }

    _convEsriSrToSr(esriSR: EsriSpatialReference): SpatialReference {
        if (esriSR.wkt) {
            return new SpatialReference(esriSR.wkt);
        } else {
            // TODO lol well looks like esri is now pretending latestWkid doesnt exist.
            //      so will need to look into what this actually means, and maybe we have to support
            //      some type of hardcoded mapping of values to stop things from breaking.
            // TODO run some basic in-browser tests, see what the SR guts of 102100 look like, if it still has latestWkid lurking inside it
            //      ^ result: it does. funny-business going on. revist.
            return new SpatialReference(esriSR.wkid);
        }
    }

    _convEsriPointToRamp(esriPoint: EsriPoint, id?: number | string): Point {
        return new Point(
            id,
            [esriPoint.x, esriPoint.y],
            this._convEsriSrToSr(esriPoint.spatialReference),
            true
        );
    }

    // this will shoot back a LineString or MultiLineString, depending on the guts
    _convEsriLineToRamp(esriLine: EsriPolyline, id?: number | string): BaseGeometry {
        const sr: SpatialReference = this._convEsriSrToSr(esriLine.spatialReference);
        if (esriLine.paths.length === 1) {
            return new LineString(id, esriLine.paths[0], sr, true);
        } else {
            return new MultiLineString(id, esriLine.paths, sr, true);
        }
    }

    _convEsriPolygonToRamp(esriPoly: EsriPolygon, id?: number | string): Polygon {
        return new Polygon(
            id,
            esriPoly.rings,
            this._convEsriSrToSr(esriPoly.spatialReference),
            true
        );
    }

    _convEsriExtentToRamp(esriExtent: EsriExtent, id?: number | string): Extent {
        return Extent.fromParams(
            id,
            esriExtent.xmin,
            esriExtent.ymin,
            esriExtent.xmax,
            esriExtent.ymax,
            this._convEsriSrToSr(esriExtent.spatialReference)
        );
    }

    _convEsriMultiPointToRamp(esriMultiPoint: EsriMultipoint, id?: number | string): MultiPoint {
        return new MultiPoint(
            id,
            esriMultiPoint.points,
            this._convEsriSrToSr(esriMultiPoint.spatialReference),
            true
        );
    }

    // we could abstract all these functions to a generalized, slightly riskier, function.
    // effectively, map the rampapi type to the geojson type (they are currently aligned, and we
    // are taking a risk they never diverge), do geom.toarray(), and add some extra checks for unsupported
    // types if that exists

    protected gjFactory(
        type: string,
        coords: Array<any>,
        sr: SpatialReference
    ): GeoJson.DirectGeometryObject {
        const gj: any = {
            type,
            coordinates: coords
        };
        if (sr) {
            gj.crs = this._convSrToGeoJson(sr);
        }
        return gj;
    }

    // TODO all geoms have optional .crs property.
    //      we may want to have logic to leave it undefined if crs is latlong
    //      also might want to consider various magics for feature sets to remove all the crs
    //      from the geoms and just define once on the feature set.

    _convSrToGeoJson(rampSR: SpatialReference): GeoJson.NamedCoordinateReferenceSystem {
        const crs = {
            type: 'name',
            properties: {
                name: ''
            }
        };
        if (rampSR.wkt) {
            crs.properties.name = rampSR.wkt; // this is probably wrong, but i dont see a way to hardcode wkt in these rediculous geojson specs
        } else {
            crs.properties.name = 'urn:ogc:def:crs:EPSG::' + (rampSR.latestWkid || rampSR.wkid);
        }
        return crs;
    }

    _convPointToGeoJson(rampPoint: Point): GeoJson.Point {
        return <GeoJson.Point>this.gjFactory(gjType.POINT, rampPoint.toArray(), rampPoint.sr);
    }

    _convMultiPointToGeoJson(rampMultiPoint: MultiPoint): GeoJson.MultiPoint {
        return <GeoJson.MultiPoint>(
            this.gjFactory(gjType.MULTIPOINT, rampMultiPoint.toArray(), rampMultiPoint.sr)
        );
    }

    _convLineToGeoJson(rampLine: LineString): GeoJson.LineString {
        return <GeoJson.LineString>(
            this.gjFactory(gjType.LINESTRING, rampLine.toArray(), rampLine.sr)
        );
    }

    _convMultiLineToGeoJson(rampMultiLine: MultiLineString): GeoJson.MultiLineString {
        return <GeoJson.MultiLineString>(
            this.gjFactory(gjType.MULTILINESTRING, rampMultiLine.toArray(), rampMultiLine.sr)
        );
    }

    _convLinearRingToGeoJson(rampLR: LinearRing): GeoJson.Polygon {
        // convert to polygon
        return <GeoJson.Polygon>this.gjFactory(gjType.POLYGON, [rampLR.toArray()], rampLR.sr);
    }

    _convPolygonToGeoJson(rampPolygon: Polygon): GeoJson.Polygon {
        return <GeoJson.Polygon>(
            this.gjFactory(gjType.POLYGON, rampPolygon.toArray(), rampPolygon.sr)
        );
    }

    _convMultiPolygonToGeoJson(rampMultiPolygon: MultiPolygon): GeoJson.MultiPolygon {
        return <GeoJson.MultiPolygon>(
            this.gjFactory(gjType.MULTIPOLYGON, rampMultiPolygon.toArray(), rampMultiPolygon.sr)
        );
    }

    // TODO figure out if we want a Polygon or a bbox string
    _convExtentToGeoJson(rampExtent: Extent): GeoJson.Polygon {
        return <GeoJson.Polygon>(
            this.gjFactory(gjType.POLYGON, rampExtent.toPolygonArray(), rampExtent.sr)
        );
    }

    _convGeoJsonSrToSr(crs: GeoJson.CoordinateReferenceSystem | undefined): SpatialReference {
        const p: string = this._parseGeoJsonCrs(crs);
        if (p.substr(0, 5) === 'EPSG:') {
            return new SpatialReference(parseInt(p.substr(5)));
        } else {
            // assuming wkt, hope for the best
            return new SpatialReference(p);
        }
    }

    _convGeoJsonPointToRamp(geoJsonPoint: GeoJson.Point, id?: number | string): Point {
        return new Point(
            id,
            geoJsonPoint.coordinates,
            this._convGeoJsonSrToSr(geoJsonPoint.crs),
            true
        );
    }

    _convGeoJsonLineToRamp(geoJsonLine: GeoJson.LineString, id?: number | string): LineString {
        return new LineString(
            id,
            geoJsonLine.coordinates,
            this._convGeoJsonSrToSr(geoJsonLine.crs),
            true
        );
    }

    _convGeoJsonPolygonToRamp(geoJsonPoly: GeoJson.Polygon, id?: number | string): Polygon {
        return new Polygon(
            id,
            geoJsonPoly.coordinates,
            this._convGeoJsonSrToSr(geoJsonPoly.crs),
            true
        );
    }

    _convGeoJsonMultiPolygonToRamp(
        geoJsonMultiPoly: GeoJson.MultiPolygon,
        id?: number | string
    ): MultiPolygon {
        return new MultiPolygon(
            id,
            geoJsonMultiPoly.coordinates,
            this._convGeoJsonSrToSr(geoJsonMultiPoly.crs),
            true
        );
    }

    _convGeoJsonMultiLineToRamp(
        geoJsonMultiLine: GeoJson.MultiLineString,
        id?: number | string
    ): MultiLineString {
        return new MultiLineString(
            id,
            geoJsonMultiLine.coordinates,
            this._convGeoJsonSrToSr(geoJsonMultiLine.crs),
            true
        );
    }

    _convGeoJsonMultiPointToRamp(
        geoJsonMultiPoint: GeoJson.MultiPoint,
        id?: number | string
    ): MultiPoint {
        return new MultiPoint(
            id,
            geoJsonMultiPoint.coordinates,
            this._convGeoJsonSrToSr(geoJsonMultiPoint.crs),
            true
        );
    }
}
