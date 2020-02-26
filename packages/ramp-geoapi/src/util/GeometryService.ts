// TODO fancy up the docs

import esri = __esri;
import { InfoBundle, QueryFeaturesArcServerParams, QueryFeaturesGeoJsonParams, GetGraphicResult } from '../gapiTypes';
import * as RampAPI from '../api/api';
import BaseGeometry from '../api/geometry/BaseGeometry'; // this is a bit wonky. could expose on RampAPI, but dont want clients using the baseclass
import BaseBase from '../BaseBase';
import { GeometryType } from '../api/apiDefs';

export default class GeometryService extends BaseBase {
    constructor (infoBundle: InfoBundle) {
        super(infoBundle);
    }

    // these converters are public, but we should discourage use by 3rd party individuals for the ESRI specific stuff
    // TODO doc this in docs.

    // converts any ramp api geom to corresponding esri geometry
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

    // converts any esri geometry to corresponding ramp api geom
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

    // TODO add geojson conversion fun

    convEsriSrToSr(esriSR: esri.SpatialReference): RampAPI.SpatialReference {
        if (esriSR.wkt) {
            return new RampAPI.SpatialReference(esriSR.wkt);
        } else {
            // TODO lol well looks like esri is now pretending latestWkid doesnt exist.
            //      so will need to look into what this actually means, and maybe we have to support
            //      some type of hardcoded mapping of values to stop things from breaking.
            // TODO run some basic in-browser tests, see what the SR guts of 102100 look like, if it still has latestWkid lurking inside it
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
            esriExtent.xmax, esriExtent.ymin, this.convEsriSrToSr(esriExtent.spatialReference));
    }

    convEsriMultiPointToRamp(esriMultiPoint: esri.Multipoint, id?: number | string): RampAPI.MultiPoint {
        return new RampAPI.MultiPoint(id, esriMultiPoint.points, this.convEsriSrToSr(esriMultiPoint.spatialReference), true);
    }
}