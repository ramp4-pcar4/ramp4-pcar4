import { default as GeoJson } from 'geojson';
import { BaseGeometry, BaseStyle, Extent, GeoJsonGeomType, GeometryType, Graphic, LinearRing, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, PointStyle, Polygon, SpatialReference, MapClick, MapMove } from '../..';
import { EsriGeometry, EsriSymbol, EsriGraphic } from '../../../esri';
import { LineStyle } from '../style/line-style';
import { PolygonStyle } from '../style/polygon-style';
export declare class GeometryAPI {
    Extent: typeof Extent;
    Graphic: typeof Graphic;
    LineString: typeof LineString;
    LineStyle: typeof LineStyle;
    LinearRing: typeof LinearRing;
    MultiLineString: typeof MultiLineString;
    MultiPoint: typeof MultiPoint;
    MultiPolygon: typeof MultiPolygon;
    Point: typeof Point;
    PointStyle: typeof PointStyle;
    Polygon: typeof Polygon;
    PolygonStyle: typeof PolygonStyle;
    SpatialReference: typeof SpatialReference;
    /**
     * Convert an ESRI map click event object to a generic RAMPish map click event object
     *
     * @param {ViewClickEvent | ViewDoubleClickEvent} esriMapClick an event param from an esri 2D map click or double-click event
     * @param {String | Number} [id] optional id for the map point geometry on the result
     * @returns {MapClick} a generic bundle of data matching a subset of the incoming esri data
     */
    esriMapClickToRamp(esriMapClick: __esri.ViewClickEvent | __esri.ViewDoubleClickEvent, id?: number | string): MapClick;
    /**
     * Convert an ESRI map click event object to a generic RAMPish map click event object
     *
     * @param {ViewPointerMoveEvent} esriMapMove an event param from an esri 2D map click or double-click event
     * @returns {MapMove} a generic bundle of data matching a subset of the incoming esri data
     */
    esriMapMouseToRamp(esriMapMove: __esri.ViewPointerMoveEvent): MapMove;
    /**
     * Converts any RAMP API geometry to a corresponding ESRI geometry
     *
     * @param {BaseGeometry} rampApiGeom a RAMP API geometry
     * @returns {Geometry} an ESRI geometry
     */
    geomRampToEsri(rampApiGeom: BaseGeometry): EsriGeometry;
    /**
     * Converts any ESRI geometry to a corresponding RAMP API geometry
     *
     * @param {Geometry} esriGeometry an ESRI geometry
     * @param {String | Number} [id] optional id for the result geometry
     * @returns {BaseGeometry} a RAMP API geometry
     */
    geomEsriToRamp(esriGeometry: EsriGeometry, id?: number | string): BaseGeometry;
    /**
     * Converts any GeoJson geometry to a corresponding RAMP API geometry
     *
     * @param {GeoJson.DirectGeometryObject} geoJsonGeometry a GeoJson geometry
     * @param {String | Number} [id] optional id for the result geometry
     * @returns {BaseGeometry} a RAMP API geometry
     */
    geomGeoJsonToRamp(geoJsonGeometry: GeoJson.DirectGeometryObject, id?: number | string): BaseGeometry;
    /**
     * Converts any RAMP API geometry to a corresponding GeoJson geometry
     *
     * @param {BaseGeometry} geoJsonGeometry a RAMP API geometry
     * @returns {GeoJson.DirectGeometryObject} a GeoJson geometry
     */
    geomRampToGeoJson(rampApiGeom: BaseGeometry): GeoJson.DirectGeometryObject;
    /**
     * Converts any RAMP API Graphic to a GeoJson Feature. Any styles or ids will be excluded from the result.
     *
     * @param {Graphic} rampGraphic a RAMP API graphic
     * @returns {any} a GeoJson Feature
     */
    graphicRampToGeoJson(rampGraphic: Graphic): any;
    /**
     * Converts any GeoJson Feature to a RAMP API Graphic
     *
     * @param {any} geoJsonFeature a GeoJson Feature
     * @param {number | string } [geomId] an id to apply to the geometry of the graphic
     * @returns {Graphic} a RAMP API Graphic
     */
    graphicGeoJsonToRamp(geoJsonFeature: any, geomId?: number | string): Graphic;
    /**
     * Converts any RAMP API Graphic to an ESRI Graphic
     * @param {Graphic} rampGraphic a RAMP API Graphic
     * @returns {EsriGraphic} an ESRI Graphic
     */
    graphicRampToEsri(rampGraphic: Graphic): EsriGraphic;
    styleRampToEsri(rampStyle: BaseStyle): EsriSymbol;
    styleEsriToRamp(esriSymbol: EsriSymbol): BaseStyle;
    serverGeomTypeToRampGeomType(serverType: string): GeometryType;
    clientGeomTypeToRampGeomType(clientType: string): GeometryType;
    geoJsonGeomTypeToEsriGeomType(geoJsonGeomType: GeoJsonGeomType): 'point' | 'multipoint' | 'polyline' | 'polygon';
    /**
     * Check to see if text provided is a valid image / data URL based on extension type or format.
     *
     * @function isImageUrl
     * @param {String} text                      string to be matched against valid image types / data url format
     * @returns {Boolean}                        true if valid image extension
     */
    isImageUrl(text: string): boolean;
}
