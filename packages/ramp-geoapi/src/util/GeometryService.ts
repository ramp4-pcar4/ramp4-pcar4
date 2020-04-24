// TODO fancy up the docs

import esri = __esri;
import GeoJson from 'geojson'; // this is a @types thing, no idea if this import is correct. cannot do the = GeoJSON global namespace like how __esri works
import { InfoBundle, MapClick } from '../gapiTypes';
import * as RampAPI from '../api/api';
import BaseGeometry from '../api/geometry/BaseGeometry'; // this is a bit wonky. could expose on RampAPI, but dont want clients using the baseclass
import BaseBase from '../BaseBase';
import { GeometryType } from '../api/apiDefs';
import { Geometry } from 'esri/geometry';

enum gjType {
    POINT = 'Point',
    MULTIPOINT = 'MultiPoint',
    LINESTRING = 'LineString',
    MULTILINESTRING = 'MultiLineString',
    POLYGON = 'Polygon',
    MULTIPOLYGON = 'MultiPolygon'
}

export default class GeometryService extends BaseBase {
    constructor (infoBundle: InfoBundle) {
        super(infoBundle);
    }

    // these converters are public, but we should discourage use by 3rd party individuals for the ESRI specific stuff
    // TODO doc this in docs.

    /**
     * Convert an ESRI map click event object to a generic RAMPish map click event object
     *
     * @param {MapViewClickEvent | MapViewDoubleClickEvent} esriMapClick an event param from an esri 2D map click or double-click event
     * @param {String | Number} [id] optional id for the map point geometry on the result
     * @returns {MapClick} a generic bundle of data matching the incoming esri data
     */
    esriMapClickToRamp(esriMapClick: esri.MapViewClickEvent | esri.MapViewDoubleClickEvent, id?: number | string): MapClick {
        return {
            mapPoint: this.convEsriPointToRamp(esriMapClick.mapPoint, id),
            screenX: esriMapClick.x,
            screenY: esriMapClick.y,
            button: esriMapClick.button,
            clickTime: esriMapClick.timestamp
        };
    }

    /**
     * Converts any RAMP API geometry to a corresponding ESRI geometry
     *
     * @param {BaseGeometry} rampApiGeom a RAMP API geometry
     * @returns {Geometry} an ESRI geometry
     */
    geomRampToEsri(rampApiGeom: BaseGeometry): esri.Geometry {

        switch (rampApiGeom.type) {
            case GeometryType.POINT:
                return this.convPointToEsri(<RampAPI.Point>rampApiGeom);
            case GeometryType.LINESTRING:
                return this.convLineToEsri(<RampAPI.LineString>rampApiGeom);
            case GeometryType.POLYGON:
                return this.convPolygonToEsri(<RampAPI.Polygon>rampApiGeom);
            case GeometryType.EXTENT:
                return this.convExtentToEsri(<RampAPI.Extent>rampApiGeom);
            case GeometryType.MULTIPOINT:
                return this.convMultiPointToEsri(<RampAPI.MultiPoint>rampApiGeom);
            case GeometryType.MULTILINESTRING:
                return this.convMultiLineToEsri(<RampAPI.MultiLineString>rampApiGeom);
            case GeometryType.MULTIPOLYGON:
                return this.convMultiPolygonToEsri(<RampAPI.MultiPolygon>rampApiGeom);
            case GeometryType.LINEARRING:
                return this.convLinearRingToEsri(<RampAPI.LinearRing>rampApiGeom);
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
    geomEsriToRamp(esriGeometry: esri.Geometry, id?: number | string): BaseGeometry {

        switch (esriGeometry.type) {
            case 'point':
                return this.convEsriPointToRamp(<esri.Point>esriGeometry, id);
            case 'polyline':
                return this.convEsriLineToRamp(<esri.Polyline>esriGeometry, id);
            case 'polygon':
                return this.convEsriPolygonToRamp(<esri.Polygon>esriGeometry, id);
            case 'extent':
                return this.convEsriExtentToRamp(<esri.Extent>esriGeometry, id);
            case 'multipoint':
                return this.convEsriMultiPointToRamp(<esri.Multipoint>esriGeometry, id);
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
    geomGeoJsonToRamp(geoJsonGeometry: GeoJson.DirectGeometryObject, id?: number | string): BaseGeometry {

        switch (geoJsonGeometry.type) {
            case gjType.POINT:
                return this.convGeoJsonPointToRamp(<GeoJson.Point>geoJsonGeometry, id);
            case gjType.LINESTRING:
                return this.convGeoJsonLineToRamp(<GeoJson.LineString>geoJsonGeometry, id);
            case gjType.POLYGON:
                return this.convGeoJsonPolygonToRamp(<GeoJson.Polygon>geoJsonGeometry, id);
            case gjType.MULTIPOINT:
                return this.convGeoJsonMultiPointToRamp(<GeoJson.MultiPoint>geoJsonGeometry, id);
            case gjType.MULTILINESTRING:
                return this.convGeoJsonMultiLineToRamp(<GeoJson.MultiLineString>geoJsonGeometry, id);
            case gjType.MULTIPOLYGON:
                return this.convGeoJsonMultiPolygonToRamp(<GeoJson.MultiPolygon>geoJsonGeometry, id);
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
                return this.convPointToGeoJson(<RampAPI.Point>rampApiGeom);
            case GeometryType.LINESTRING:
                return this.convLineToGeoJson(<RampAPI.LineString>rampApiGeom);
            case GeometryType.POLYGON:
                return this.convPolygonToGeoJson(<RampAPI.Polygon>rampApiGeom);
            case GeometryType.EXTENT:
                return this.convExtentToGeoJson(<RampAPI.Extent>rampApiGeom);
            case GeometryType.MULTIPOINT:
                return this.convMultiPointToGeoJson(<RampAPI.MultiPoint>rampApiGeom);
            case GeometryType.MULTILINESTRING:
                return this.convMultiLineToGeoJson(<RampAPI.MultiLineString>rampApiGeom);
            case GeometryType.MULTIPOLYGON:
                return this.convMultiPolygonToGeoJson(<RampAPI.MultiPolygon>rampApiGeom);
            case GeometryType.LINEARRING:
                return this.convLinearRingToGeoJson(<RampAPI.LinearRing>rampApiGeom);
            default:
                throw new Error(`Encountered unhandled geometry type ${rampApiGeom.type}`);
        }
    }

    graphicRampToGeoJson(rampGraphic: RampAPI.Graphic): any { // the geojson Feature interface is being crabby.
        const f = {
            type: 'Feature',
            geometry: this.geomRampToGeoJson(rampGraphic.geometry),
            properties: {}
        };

        Object.keys(rampGraphic.attributes).forEach(k => f.properties[k] = rampGraphic.attributes[k]);

        return f;
    }

    graphicGeoJsonToRamp(geoJsonFeature: any, geomId?: number | string): RampAPI.Graphic {
        if (geoJsonFeature.type !== 'Feature') {
            throw new Error('Expected input parameter of graphicGeoJsonToRamp to be a GeoJson feature');
        }
        const g = new RampAPI.Graphic();
        g.geometry = this.geomGeoJsonToRamp(geoJsonFeature.geometry, geomId);
        Object.keys(geoJsonFeature.properties).forEach(k => g.attributes[k] = geoJsonFeature.properties[k]);

        return g;
    }

    // everything below is worker functions for the main hawggies above.
    // they can be used by outside callers, but in most cases, use the standard things ^

    parseGeoJsonCrs(crs: GeoJson.CoordinateReferenceSystem): string {
        if (!crs) {
            return 'EPSG:4326';
        } else if (crs.type === 'name') {
            const urnRegex = /urn:ogc:def:crs:EPSG::(\d+)/;

            // no input SR given, and geojson has some spatial ref info on it
            const val: string = crs.properties.name;
            const matches = val.match( urnRegex );
            if (matches) {
                return 'EPSG:' + matches[1];
            } else if (val.substr(0, 7) !== 'urn:ogc') {
                 // we will assume its wkt and hope for the best
                 return val;
            }
        }

        // if we get this far, things are not happy
        console.error('Encountered unsupported GeoJSON CRS format. Defaulting to lat-long, parsed data is likely wrong', crs);
        return 'EPSG:4326';
    }

    convSrToEsri(rampSR: RampAPI.SpatialReference): esri.SpatialReference {
        return new this.esriBundle.SpatialReference(rampSR.lean());
    }

    convPointToEsri(rampPoint: RampAPI.Point): esri.Point {
        return new this.esriBundle.Point({
            x: rampPoint.x,
            y: rampPoint.y,
            spatialReference: this.convSrToEsri(rampPoint.sr)
        });
    }

    convMultiPointToEsri(rampMultiPoint: RampAPI.MultiPoint): esri.Multipoint {
        return new this.esriBundle.Multipoint({
            points: rampMultiPoint.toArray(),
            spatialReference: this.convSrToEsri(rampMultiPoint.sr)
        });
    }

    private polylineFactory(coords: Array<Array<Array<number>>>, sr: RampAPI.SpatialReference): esri.Polyline {
        return new this.esriBundle.Polyline({
            paths: coords,
            spatialReference: this.convSrToEsri(sr)
        });
    }

    convLineToEsri(rampLine: RampAPI.LineString): esri.Polyline {
        return this.polylineFactory([rampLine.toArray()], rampLine.sr);
    }

    convMultiLineToEsri(rampMultiLine: RampAPI.MultiLineString): esri.Polyline {
        return this.polylineFactory(rampMultiLine.toArray(), rampMultiLine.sr);
    }

    private polygonFactory(coords: Array<Array<Array<number>>>, sr: RampAPI.SpatialReference): esri.Polygon {
        return new this.esriBundle.Polygon({
            rings: coords,
            spatialReference: this.convSrToEsri(sr)
        });
    }

    convLinearRingToEsri(rampRing: RampAPI.LinearRing): esri.Polygon {
        return this.polygonFactory([rampRing.toArray()], rampRing.sr);
    }

    convPolygonToEsri(rampPolygon: RampAPI.Polygon): esri.Polygon {
        return this.polygonFactory(rampPolygon.toArray(), rampPolygon.sr);
    }

    convMultiPolygonToEsri(rampMultiPolygon: RampAPI.MultiPolygon): esri.Polygon {
        // esri doesn't support multipolygons. instead all polygons become one polygon that has all the rings in it
        const ringMerger: Array<Array<Array<number>>> = [];

        // TODO is there a more efficient way to do this than with pushes? use concats?
        // concat will keep re-copying all known rings with each new polygon encountered, so probably worse
        rampMultiPolygon.toArray().forEach(poly => {
            poly.forEach(ring => ringMerger.push(ring));
        });
        return this.polygonFactory(ringMerger, rampMultiPolygon.sr);
    }

    convExtentToEsri(rampExtent: RampAPI.Extent): esri.Extent {
        return new this.esriBundle.Extent({
            xmin: rampExtent.xmin,
            ymin: rampExtent.ymin,
            xmax: rampExtent.xmax,
            ymax: rampExtent.ymax,
            spatialReference: this.convSrToEsri(rampExtent.sr)
        });
    }

    convEsriSrToSr(esriSR: esri.SpatialReference): RampAPI.SpatialReference {
        if (esriSR.wkt) {
            return new RampAPI.SpatialReference(esriSR.wkt);
        } else {
            // TODO lol well looks like esri is now pretending latestWkid doesnt exist.
            //      so will need to look into what this actually means, and maybe we have to support
            //      some type of hardcoded mapping of values to stop things from breaking.
            // TODO run some basic in-browser tests, see what the SR guts of 102100 look like, if it still has latestWkid lurking inside it
            //      ^ result: it does. funny-business going on. revist.
            return new RampAPI.SpatialReference(esriSR.wkid);
        }
    }

    convEsriPointToRamp(esriPoint: esri.Point, id?: number | string): RampAPI.Point {
        return new RampAPI.Point(id, [esriPoint.x, esriPoint.y], this.convEsriSrToSr(esriPoint.spatialReference), true);
    }

    // this will shoot back a LineString or MultiLineString, depending on the guts
    convEsriLineToRamp(esriLine: esri.Polyline, id?: number | string): BaseGeometry {
        const sr: RampAPI.SpatialReference = this.convEsriSrToSr(esriLine.spatialReference);
        if (esriLine.paths.length === 1) {
            return new RampAPI.LineString(id, esriLine.paths[0], sr, true);
        } else {
            return new RampAPI.MultiLineString(id, esriLine.paths, sr, true);
        }
    }

    convEsriPolygonToRamp(esriPoly: esri.Polygon, id?: number | string): RampAPI.Polygon {
        return new RampAPI.Polygon(id, esriPoly.rings, this.convEsriSrToSr(esriPoly.spatialReference), true);
    }

    convEsriExtentToRamp(esriExtent: esri.Extent, id?: number | string): RampAPI.Extent {
        return RampAPI.Extent.fromParams(id, esriExtent.xmin, esriExtent.ymin,
            esriExtent.xmax, esriExtent.ymax, this.convEsriSrToSr(esriExtent.spatialReference));
    }

    convEsriMultiPointToRamp(esriMultiPoint: esri.Multipoint, id?: number | string): RampAPI.MultiPoint {
        return new RampAPI.MultiPoint(id, esriMultiPoint.points, this.convEsriSrToSr(esriMultiPoint.spatialReference), true);
    }

    // we could abstract all these functions to a generalized, slightly riskier, function.
    // effectively, map the rampapi type to the geojson type (they are currently aligned, and we
    // are taking a risk they never diverge), do geom.toarray(), and add some extra checks for unsupported
    // types if that exists

    protected gjFactory(type: string, coords: Array<any>, sr: RampAPI.SpatialReference): GeoJson.DirectGeometryObject {
        const gj: any = {
            type,
            coordinates: coords
        };
        if (sr) {
            gj.crs = this.convSrToGeoJson(sr);
        }
        return gj;
    }

    // TODO all geoms have optional .crs property.
    //      we may want to have logic to leave it undefined if crs is latlong
    //      also might want to consider various magics for feature sets to remove all the crs
    //      from the geoms and just define once on the feature set.

    convSrToGeoJson(rampSR: RampAPI.SpatialReference): GeoJson.NamedCoordinateReferenceSystem {
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

    convPointToGeoJson(rampPoint: RampAPI.Point): GeoJson.Point {
        return <GeoJson.Point>this.gjFactory(gjType.POINT, rampPoint.toArray(), rampPoint.sr);
    }

    convMultiPointToGeoJson(rampMultiPoint: RampAPI.MultiPoint): GeoJson.MultiPoint {
        return <GeoJson.MultiPoint>this.gjFactory(gjType.MULTIPOINT, rampMultiPoint.toArray(), rampMultiPoint.sr);
    }

    convLineToGeoJson(rampLine: RampAPI.LineString): GeoJson.LineString {
        return <GeoJson.LineString>this.gjFactory(gjType.LINESTRING, rampLine.toArray(), rampLine.sr);
    }

    convMultiLineToGeoJson(rampMultiLine: RampAPI.MultiLineString): GeoJson.MultiLineString {
        return <GeoJson.MultiLineString>this.gjFactory(gjType.MULTILINESTRING, rampMultiLine.toArray(), rampMultiLine.sr);
    }

    convLinearRingToGeoJson(rampLR: RampAPI.LinearRing): GeoJson.Polygon {
        // convert to polygon
        return <GeoJson.Polygon>this.gjFactory(gjType.POLYGON, [rampLR.toArray()], rampLR.sr);
    }

    convPolygonToGeoJson(rampPolygon: RampAPI.Polygon): GeoJson.Polygon {
        return <GeoJson.Polygon>this.gjFactory(gjType.POLYGON, rampPolygon.toArray(), rampPolygon.sr);
    }

    convMultiPolygonToGeoJson(rampMultiPolygon: RampAPI.MultiPolygon): GeoJson.MultiPolygon {
        return <GeoJson.MultiPolygon>this.gjFactory(gjType.MULTIPOLYGON, rampMultiPolygon.toArray(), rampMultiPolygon.sr);
    }

    // TODO figure out if we want a Polygon or a bbox string
    convExtentToGeoJson(rampExtent: RampAPI.Extent): GeoJson.Polygon {
        return <GeoJson.Polygon>this.gjFactory(gjType.POLYGON, rampExtent.toPolygonArray(), rampExtent.sr);
    }

    convGeoJsonSrToSr(crs: GeoJson.CoordinateReferenceSystem): RampAPI.SpatialReference {
        const p: string = this.parseGeoJsonCrs(crs);
        if (p.substr(0, 5) === 'EPSG:') {
            return new RampAPI.SpatialReference(parseInt(p.substr(5)));
        } else {
            // assuming wkt, hope for the best
            return new RampAPI.SpatialReference(p);
        }
    }

    convGeoJsonPointToRamp(geoJsonPoint: GeoJson.Point, id?: number | string): RampAPI.Point {
        return new RampAPI.Point(id, geoJsonPoint.coordinates, this.convGeoJsonSrToSr(geoJsonPoint.crs), true);
    }

    convGeoJsonLineToRamp(geoJsonLine: GeoJson.LineString, id?: number | string): RampAPI.LineString {
        return new RampAPI.LineString(id, geoJsonLine.coordinates, this.convGeoJsonSrToSr(geoJsonLine.crs), true);

    }

    convGeoJsonPolygonToRamp(geoJsonPoly: GeoJson.Polygon, id?: number | string): RampAPI.Polygon {
        return new RampAPI.Polygon(id, geoJsonPoly.coordinates, this.convGeoJsonSrToSr(geoJsonPoly.crs), true);
    }

    convGeoJsonMultiPolygonToRamp(geoJsonMultiPoly: GeoJson.MultiPolygon, id?: number | string): RampAPI.MultiPolygon {
        return new RampAPI.MultiPolygon(id, geoJsonMultiPoly.coordinates, this.convGeoJsonSrToSr(geoJsonMultiPoly.crs), true);
    }

    convGeoJsonMultiLineToRamp(geoJsonMultiLine: GeoJson.MultiLineString, id?: number | string): RampAPI.MultiLineString {
        return new RampAPI.MultiLineString(id, geoJsonMultiLine.coordinates, this.convGeoJsonSrToSr(geoJsonMultiLine.crs), true);
    }

    convGeoJsonMultiPointToRamp(geoJsonMultiPoint: GeoJson.MultiPoint, id?: number | string): RampAPI.MultiPoint {
        return new RampAPI.MultiPoint(id, geoJsonMultiPoint.coordinates, this.convGeoJsonSrToSr(geoJsonMultiPoint.crs), true);
    }

}