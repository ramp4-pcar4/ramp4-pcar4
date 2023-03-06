import type GeoJson from 'geojson';
import {
    BaseGeometry,
    BaseStyle,
    Extent,
    GeoJsonGeomType,
    GeometryType,
    Graphic,
    LinearRing,
    LineString,
    MultiLineString,
    MultiPoint,
    MultiPolygon,
    Point,
    PointStyle,
    Polygon,
    SpatialReference
} from '@/geo/api';
import type { MapClick, MapMove } from '@/geo/api';
import {
    EsriExtent,
    EsriGeometry,
    EsriGraphic,
    EsriMultipoint,
    EsriPictureMarkerSymbol,
    EsriPoint,
    EsriPolygon,
    EsriPolyline,
    EsriSimpleFillSymbol,
    EsriSimpleLineSymbol,
    EsriSimpleMarkerSymbol,
    EsriSymbol
} from '@/geo/esri';
import { LineStyle } from '../style/line-style';
import { PolygonStyle } from '../style/polygon-style';

export class GeometryAPI {
    // expose our common classes, so they can be grabbed from iApi.geo.geom easily
    Extent = Extent;
    Graphic = Graphic;
    // Hover = Hover;
    LineString = LineString;
    LineStyle = LineStyle;
    LinearRing = LinearRing;
    MultiLineString = MultiLineString;
    MultiPoint = MultiPoint;
    MultiPolygon = MultiPolygon;
    Point = Point;
    PointStyle = PointStyle;
    Polygon = Polygon;
    PolygonStyle = PolygonStyle;
    SpatialReference = SpatialReference;

    /**
     * Convert an ESRI map click event object to a generic RAMPish map click event object
     *
     * @param {ViewClickEvent | ViewDoubleClickEvent} esriMapClick an event param from an esri 2D map click or double-click event
     * @param {String | Number} [id] optional id for the map point geometry on the result
     * @returns {MapClick} a generic bundle of data matching a subset of the incoming esri data
     */
    esriMapClickToRamp(
        esriMapClick: __esri.ViewClickEvent | __esri.ViewDoubleClickEvent,
        id?: number | string
    ): MapClick {
        return {
            mapPoint: Point.fromESRI(esriMapClick.mapPoint, id),
            screenX: esriMapClick.x,
            screenY: esriMapClick.y,
            button: esriMapClick.button,
            input: esriMapClick.native.pointerType,
            clickTime: esriMapClick.timestamp
        };
    }

    /**
     * Convert an ESRI map click event object to a generic RAMPish map click event object
     *
     * @param {ViewPointerMoveEvent} esriMapMove an event param from an esri 2D map click or double-click event
     * @returns {MapMove} a generic bundle of data matching a subset of the incoming esri data
     */
    esriMapMouseToRamp(esriMapMove: __esri.ViewPointerMoveEvent): MapMove {
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
    geomRampToEsri(rampApiGeom: BaseGeometry): EsriGeometry {
        return rampApiGeom.toESRI();
    }

    /**
     * Converts any ESRI geometry to a corresponding RAMP API geometry
     *
     * @param {Geometry} esriGeometry an ESRI geometry
     * @param {String | Number} [id] optional id for the result geometry
     * @returns {BaseGeometry} a RAMP API geometry
     */
    geomEsriToRamp(
        esriGeometry: EsriGeometry,
        id?: number | string
    ): BaseGeometry {
        switch (esriGeometry.type) {
            case 'point':
                return Point.fromESRI(<EsriPoint>esriGeometry, id);
            case 'polyline': {
                const esriLine: EsriPolyline = <EsriPolyline>esriGeometry;

                if (esriLine.paths.length === 1) {
                    return LineString.fromESRI(esriLine, id);
                } else {
                    return MultiLineString.fromESRI(esriLine, id);
                }
            }
            case 'polygon':
                return Polygon.fromESRI(<EsriPolygon>esriGeometry, id);
            case 'extent':
                return Extent.fromESRI(<EsriExtent>esriGeometry, id);
            case 'multipoint':
                return MultiPoint.fromESRI(<EsriMultipoint>esriGeometry, id);
            default:
                throw new Error(
                    `Encountered unhandled geometry type ${esriGeometry.type}`
                );
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
            case GeoJsonGeomType.POINT:
                return Point.fromGeoJSON(<GeoJson.Point>geoJsonGeometry, id);
            case GeoJsonGeomType.LINESTRING:
                return LineString.fromGeoJSON(
                    <GeoJson.LineString>geoJsonGeometry,
                    id
                );
            case GeoJsonGeomType.POLYGON:
                return Polygon.fromGeoJSON(
                    <GeoJson.Polygon>geoJsonGeometry,
                    id
                );
            case GeoJsonGeomType.MULTIPOINT:
                return MultiPoint.fromGeoJSON(
                    <GeoJson.MultiPoint>geoJsonGeometry,
                    id
                );
            case GeoJsonGeomType.MULTILINESTRING:
                return MultiLineString.fromGeoJSON(
                    <GeoJson.MultiLineString>geoJsonGeometry,
                    id
                );
            case GeoJsonGeomType.MULTIPOLYGON:
                return MultiPolygon.fromGeoJSON(
                    <GeoJson.MultiPolygon>geoJsonGeometry,
                    id
                );
            default:
                throw new Error(
                    `Encountered unhandled geometry type ${geoJsonGeometry.type}`
                );
        }
    }

    /**
     * Converts any RAMP API geometry to a corresponding GeoJson geometry
     *
     * @param {BaseGeometry} geoJsonGeometry a RAMP API geometry
     * @returns {GeoJson.DirectGeometryObject} a GeoJson geometry
     */
    geomRampToGeoJson(rampApiGeom: BaseGeometry): GeoJson.DirectGeometryObject {
        return rampApiGeom.toGeoJSON();
    }

    /**
     * Converts any RAMP API Graphic to a GeoJson Feature. Any styles or ids will be excluded from the result.
     *
     * @param {Graphic} rampGraphic a RAMP API graphic
     * @returns {any} a GeoJson Feature
     */
    graphicRampToGeoJson(rampGraphic: Graphic): any {
        // the geojson Feature interface is being crabby.
        const typescriptIsDumb: any = {}; // freaks out assigning random keys to .properties without an explicit `any`
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

    /**
     * Converts any GeoJson Feature to a RAMP API Graphic
     *
     * @param {any} geoJsonFeature a GeoJson Feature
     * @param {number | string } [geomId] an id to apply to the geometry of the graphic
     * @returns {Graphic} a RAMP API Graphic
     */
    graphicGeoJsonToRamp(
        geoJsonFeature: any,
        geomId?: number | string
    ): Graphic {
        if (geoJsonFeature.type !== 'Feature') {
            throw new Error(
                'Expected input parameter of graphicGeoJsonToRamp to be a GeoJson feature'
            );
        }

        const geom = this.geomGeoJsonToRamp(geoJsonFeature.geometry, geomId);
        const attrib: any = {};
        Object.keys(
            geoJsonFeature.properties.forEach(
                (k: any) => (attrib[k] = geoJsonFeature.properties[k])
            )
        );

        // TODO we are just using default id for the graphic. do we want a second optional function
        //      param to set this as well? double optionals are messy. Caller can override the result.
        const g = new Graphic(geom, '', attrib);

        return g;
    }

    /**
     * Converts any RAMP API Graphic to an ESRI Graphic
     * @param {Graphic} rampGraphic a RAMP API Graphic
     * @returns {EsriGraphic} an ESRI Graphic
     */
    graphicRampToEsri(rampGraphic: Graphic): EsriGraphic {
        // would be nice to use __esri.GraphicProperties as the type, but since we
        // need to tack on an id, that would anger the interface.
        const gConf: any = {
            attributes: {},
            id: rampGraphic.id
        };

        gConf.geometry = this.geomRampToEsri(rampGraphic.geometry);

        Object.keys(rampGraphic.attributes).forEach(
            k => (gConf.attributes[k] = rampGraphic.attributes[k])
        );

        if (rampGraphic.style) {
            // convert style to esri style
            gConf.symbol = this.styleRampToEsri(rampGraphic.style);
        } else {
            // TODO default? check if a raw new class has defaults. would need to check geom and pick correct class
            // or don't style and let caller figure it out. have warning on graphic layer.
            // COUDL BE that esri makes a default symbol if none is provided, thats best choice.
        }

        return new EsriGraphic(gConf);
    }

    styleRampToEsri(rampStyle: BaseStyle): EsriSymbol {
        return rampStyle.toESRI();
    }

    styleEsriToRamp(esriSymbol: EsriSymbol): BaseStyle {
        switch (esriSymbol.type) {
            case 'picture-marker':
            case 'simple-marker':
                return PointStyle.fromESRI(
                    <EsriSimpleMarkerSymbol | EsriPictureMarkerSymbol>esriSymbol
                );
            case 'simple-line':
                return LineStyle.fromESRI(<EsriSimpleLineSymbol>esriSymbol);
            case 'simple-fill':
                return PolygonStyle.fromESRI(<EsriSimpleFillSymbol>esriSymbol);
            default:
                console.error(
                    `Unsupported ESRI symbol type encountered: ${esriSymbol.type}`
                );

                // Should we hard error? Returning a point to a non-point requestor might be more chaotic.
                return new PointStyle();
        }
    }

    // converts an arcgis server geometry type to ramp geometry type
    serverGeomTypeToRampGeomType(serverType: string): GeometryType {
        if (!serverType) {
            // falsy case, pass it on thru
            // this would handle a MIL raster sublayer
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
                console.error(
                    `Unrecognized server geometry type encountered: ${serverType}`
                );
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
                console.error(
                    `Unrecognized client geometry type encountered: ${clientType}`
                );
                return GeometryType.UNKNOWN;
        }
    }

    // converts a geojson geometry type to an esri geometry type that can support it
    geoJsonGeomTypeToEsriGeomType(
        geoJsonGeomType: GeoJsonGeomType
    ): 'point' | 'multipoint' | 'polyline' | 'polygon' {
        switch (geoJsonGeomType) {
            case GeoJsonGeomType.POINT:
                return 'point';
            case GeoJsonGeomType.LINESTRING:
            case GeoJsonGeomType.MULTILINESTRING:
                return 'polyline';
            case GeoJsonGeomType.POLYGON:
            case GeoJsonGeomType.MULTIPOLYGON:
                return 'polygon';
            case GeoJsonGeomType.MULTIPOINT:
                return 'multipoint';

            default:
                throw new Error(
                    `Encountered unhandled geometry type ${geoJsonGeomType}`
                );
        }
    }

    /**
     * Check to see if text provided is a valid image / data URL based on extension type or format.
     *
     * @function isImageUrl
     * @param {String} text                      string to be matched against valid image types / data url format
     * @returns {Boolean}                        true if valid image extension
     */
    isImageUrl(text: string): boolean {
        return PointStyle.isImageUrl(text);
    }
}
