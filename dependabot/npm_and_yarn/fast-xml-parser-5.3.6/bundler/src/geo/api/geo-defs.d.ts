import { BaseGeometry, Extent, Graphic, Point, SpatialReference } from '.';
import { EsriFeatureReductionCluster, EsriRenderer } from '../esri';
export declare const enum FieldType {
    BLOB = "blob",
    DATE = "date",
    DOUBLE = "double",
    GEOMETRY = "geometry",
    GLOBAL_ID = "global-id",
    GUID = "guid",
    INTEGER = "integer",
    LONG = "long",
    OID = "oid",
    RASTER = "raster",
    SINGLE = "single",
    SMALL_INTEGER = "small-integer",
    STRING = "string",
    XML = "xml"
}
export interface ColourParams {
    r: number;
    g: number;
    b: number;
    a?: number;
}
export declare enum PointStyleType {
    CIRCLE = "circle",
    CROSS = "cross",
    DIAMOND = "diamond",
    ICON = "icon",// this one is special, not an esri type. denotes a picture marker instead of simple marker
    PATH = "path",
    SQUARE = "square",
    TRIANGLE = "triangle",
    X = "x"
}
export declare const enum LineStyleType {
    DASH = "dash",
    DASHDOT = "dash-dot",
    DASHDOTDOT = "short-dash-dot-dot",// for backwards compatibility
    DOT = "dot",
    LONGDASH = "long-dash",
    LONGDASHDOT = "long-dash-dot",
    LONGDASHDOTDOT = "long-dash-dot-dot",
    NONE = "none",
    NULL = "none",// for backwards compatibility
    SHORTDASH = "short-dash",
    SHORTDASHDOT = "short-dash-dot",
    SHORTDASHDOTDOT = "short-dash-dot-dot",
    SHORTDOT = "short-dot",
    SOLID = "solid"
}
export declare const enum LineJoinType {
    BEVEL = "bevel",
    MITER = "miter",
    ROUND = "round"
}
export declare const enum LineCapType {
    ROUND = "round",
    BUTT = "butt",// round butt lol
    SQUARE = "square"
}
export declare const enum FillStyleType {
    BDIAG = "backward-diagonal",
    CROSS = "cross",
    DIAG_CROSS = "diagonal-cross",
    FDIAG = "forward-diagonal",
    HORIZONTAL = "horizontal",
    NONE = "none",
    NULL = "none",// for backwards compatibility
    SOLID = "solid",
    VERTICAL = "vertical"
}
export declare const enum GeometryType {
    POINT = "Point",
    MULTIPOINT = "MultiPoint",
    LINESTRING = "LineString",
    MULTILINESTRING = "MultiLineString",
    POLYGON = "Polygon",
    MULTIPOLYGON = "MultiPolygon",
    LINEARRING = "LinearRing",
    EXTENT = "Extent",
    NONE = "None",// useful for raster sublayers who need to populate a geom type field.
    UNKNOWN = "Unknown"
}
export declare const enum RendererType {
    Simple = "simple",
    Unique = "uniqueValue",
    ClassBreaks = "classBreaks",
    Unknown = "unknown"
}
export interface LineStyleOptions {
    style?: LineStyleType;
    colour?: Array<number> | string | ColourParams;
    width?: number | string;
    miter?: number;
    cap?: LineCapType;
    join?: LineJoinType;
}
export interface PointStyleOptions {
    style: PointStyleType;
    xOffset?: number | string;
    yOffset?: number | string;
    angle?: number;
}
export interface PointMarkerStyleOptions extends PointStyleOptions {
    size?: number | string;
    colour?: Array<number> | string | ColourParams;
    outline?: LineStyleOptions;
    path?: string;
}
export interface PointIconStyleOptions extends PointStyleOptions {
    icon?: string;
    height?: number | string;
    width?: number | string;
}
export interface PolygonStyleOptions {
    outline?: LineStyleOptions;
    fill?: {
        colour?: Array<number> | string | ColourParams;
        style?: FillStyleType;
    };
}
export type SrDef = SpatialReference | string | number;
export type IdDef = string | number | undefined;
export interface Attributes {
    [key: string]: any;
}
export declare const enum LayerType {
    FEATURE = "esri-feature",
    MAPIMAGE = "esri-map-image",
    TILE = "esri-tile",
    VECTORTILE = "esri-vector-tile",
    IMAGERY = "esri-imagery",
    IMAGERYTILE = "esri-imagery-tile",
    GRAPHIC = "esri-graphic",
    WMS = "ogc-wms",
    WFS = "ogc-wfs",
    GEOJSON = "file-geojson",
    GEOJSONZIPPED = "file-zip-geojson",
    CSV = "file-csv",
    SHAPEFILE = "file-shape",
    FLATGEOBUF = "file-fgb",
    FLATGEOBUFZIPPED = "file-zip-fgb",
    OSM = "osm-tile",// open street map
    DATACSV = "data-csv",
    DATAJSON = "data-json",
    DATATABLE = "data-esri-table",
    UNKNOWN = "unknown",
    SUBLAYER = "sublayer"
}
export declare const enum LayerFormat {
    FEATURE = "feature",
    GRAPHIC = "graphic",
    IMAGERY = "imagery",
    IMAGERYTILE = "imagery-tile",
    MAPIMAGE = "map-image",
    NOLAYER = "no-layer",
    OSM = "osm-tile",
    TILE = "tile",
    UNKNOWN = "unknown",
    VECTORTILE = "vector-tile",
    WMS = "wms"
}
export declare const enum DataFormat {
    ESRI_FEATURE = "esriFeature",
    ESRI_RASTER = "esriRaster",
    ESRI_TILE = "esriTile",
    OSM_TILE = "osmTile",
    OGC_RASTER = "ogcRaster",
    UNKNOWN = "unknown"
}
export declare const enum GeoJsonGeomType {
    POINT = "Point",
    MULTIPOINT = "MultiPoint",
    LINESTRING = "LineString",
    MULTILINESTRING = "MultiLineString",
    POLYGON = "Polygon",
    MULTIPOLYGON = "MultiPolygon"
}
export interface GeoJsonField {
    name: string;
    type: string;
}
export declare const enum LayerIdentifyMode {
    GEOMETRIC = "geometric",// uses geometric intersection; feature symbology is not considered
    SYMBOLIC = "symbolic",// uses symbol intersection; not applicable for raster layers
    HYBRID = "hybrid",// combines geometric and symbolic results
    NONE = "none"
}
export interface EpsgLookup {
    (code: string | number): Promise<string>;
}
export declare const enum InitiationState {
    NEW = "new",
    INITIATING = "initiating",
    INITIATED = "initiated",
    TERMINATING = "terminating",
    TERMINATED = "terminated"
}
export declare const enum LayerState {
    NEW = "new",// this means ramp layer class exists but needs to be initiate() 'd
    LOADING = "loading",
    LOADED = "loaded",
    ERROR = "error"
}
export declare const enum DrawState {
    NOT_LOADED = "not-loaded",
    NOT_VISUAL = "not-visual",
    REFRESH = "refresh",
    UP_TO_DATE = "up-to-date"
}
export interface DrawOrder {
    field?: string;
    arcade?: string;
    ascending: boolean;
}
export declare const enum IdentifyResultFormat {
    ESRI = "esri",
    TEXT = "text",
    IMAGE = "image",// TODO does this need to be split out into image formats like jpg, png?
    HTML = "html",
    XML = "xml",
    JSON = "json",
    UNKNOWN = "unknown"
}
/**
 * Event payload for a Map Click
 */
export interface MapClick {
    mapPoint: Point;
    screenX: number;
    screenY: number;
    button: number;
    input: string;
    clickTime: number;
}
/**
 * Event payload for a Map Move
 */
export interface MapMove {
    screenX: number;
    screenY: number;
    button: number;
    moveTime: number;
}
/**
 * Event payload for a Basemap Change
 */
export interface BasemapChange {
    /**
     * New basemap id
     */
    basemapId: string;
    /**
     * True if new basemap caused the map schema to change
     */
    schemaChanged: boolean;
}
export interface LayerTimes {
    /**
     * Expected time to draw
     */
    draw: number;
    /**
     * Expected time to load
     */
    load: number;
    /**
     * Max load time until forced failure
     */
    fail: number;
}
export type ZoomEasing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
export interface ScreenPoint {
    screenX: number;
    screenY: number;
}
export interface Screenshot {
    dataUrl: string;
    data: ImageData;
}
export interface AttributeSet {
    features: Array<Attributes>;
    oidIndex: {
        [key: number]: number;
    };
}
export interface FieldDefinition {
    name: string;
    alias?: string;
    type: string;
    length?: number;
    trim?: boolean;
}
export interface TabularAttributeSet {
    columns: Array<{
        data: string;
        title: string;
    }>;
    rows: Array<Attributes>;
    fields: Array<FieldDefinition>;
    oidField: string;
}
export interface LegendSymbology {
    uid: string;
    label: string;
    definitionClause?: string;
    svgcode: string;
    imgUrl?: string;
    drawPromise: Promise<string | void>;
    esriStandard: boolean;
    imgHeight?: string;
    imgWidth?: string;
    visibility?: boolean;
    lastVisbility?: boolean;
}
export interface ArcGisServerUrl {
    rootUrl: string;
    index: number | undefined;
}
export interface ArcGisServerMetadata {
    geometryType: GeometryType;
    minScale: number;
    maxScale: number;
    canModifyLayer: boolean;
    extent?: Extent;
    defaultVisibility: boolean;
    fields: Array<FieldDefinition>;
    displayField: string;
    objectIdField: string;
    renderer?: EsriRenderer;
    currentVersion: number;
    name: string;
    dataFormat: DataFormat;
    mapLayer: boolean;
    sourceSR?: SpatialReference;
}
export interface GetGraphicParams {
    getGeom?: boolean;
    getAttribs?: boolean;
    getStyle?: boolean;
}
export interface GetGraphicServiceDetails {
    includeGeometry?: boolean;
    attribs?: string;
    serviceUrl: string;
    maxOffset?: number;
    mapSR?: string;
    geometryPrecision?: number;
    oid: number;
    fieldsToTrim?: Array<string>;
}
export interface DiscreteGraphicResult {
    oid: number;
    graphic: Promise<Graphic>;
}
export interface QueryFeaturesParams {
    /**
     * A geometry to spatially filter by.
     */
    filterGeometry?: BaseGeometry;
    /**
     * A sql query to filtery by
     */
    filterSql?: string;
    /**
     * List of object ids to filter by
     */
    filterOIDs?: Array<number>;
    /**
     * If geometry should be included in the result
     */
    includeGeometry?: boolean;
    /**
     * Spatial reference of the data source. Providing helps avoid some reprojection issues
     */
    sourceSR?: SpatialReference;
}
export interface QueryFeaturesArcServerParams extends QueryFeaturesParams {
    /**
     * Url of service to query
     */
    url: string;
}
export interface IdentifyParameters {
    geometry: BaseGeometry;
    tolerance?: number;
    sublayerIds?: Array<string | number>;
    hitTest?: Promise<Array<GraphicHitResult>>;
}
export interface GraphicHitResult {
    /**
     * graphic Object ID value
     */
    oid: number;
    /**
     * layer index of the layer the graphic lives in
     */
    layerIdx: number;
    /**
     * layer id of layer the graphic lives in
     */
    layerId: string;
}
export interface MaptipProperties {
    screenPoint: ScreenPoint;
    mapPoint: Point;
    graphicHit: GraphicHitResult;
}
export interface FilterEventParam {
    filterKey: string;
    uid?: string;
    extent?: Extent;
    extraData?: any;
}
export declare const enum CoreFilter {
    SYMBOL = "symbol",// used for symbol visibililty filters in the legend
    GRID = "grid",// used to apply grid filters to a layer
    EXTENT = "extent",// captures a filter based on an extent. leveraged by the grid to only show rows visible on screen
    INITIAL = "initial",// used to track an initial filter provided by the layer config
    API = "api",// this would be a default api key. e.g. if someone just does an API filter set with no key parameter, it would use this.
    PERMANENT = "permanent"
}
export interface ScaleHelper {
    units: string;
    isImperialScale: boolean;
    pixels: number;
    distance: number;
}
export interface MapCoords {
    disabled?: boolean;
    formattedString?: string;
}
export interface UrlQueryMap {
    [name: string]: string;
}
/**
 * Options for converting GeoJson to EsriJson
 */
export interface GeoJsonOptions {
    /**
     * Will use this layerid on the EsriJson
     */
    layerId?: string;
    /**
     * Will use this colour in the basic default symbol
     */
    colour?: string;
    /**
     * Any layer fieldMetadata configuration to apply
     */
    fieldMetadata?: RampLayerFieldMetadataConfig;
    /**
     * Projection of incoming GeoJson. If missing, will use geojson crs, LatLong if no crs.
     */
    sourceProjection?: string | number | SpatialReference;
    /**
     * Spatial Reference of output Esri Json geometry
     */
    targetSR?: string | number | SpatialReference;
    /**
     * Latitude field name if exists in the GeoJson. Typically from a CSV conversion. Ensures field gets encoded as a number.
     */
    latField?: string;
    /**
     * Longitude field name if exists in the GeoJson. Typically from a CSV conversion. Ensures field gets encoded as a number.
     */
    lonField?: string;
}
export interface LoadLayerMetadataOptions {
    /**
     * renderer in ESRI JS API format
     */
    customRenderer?: EsriRenderer;
}
export interface CsvOptions {
    latfield?: string;
    lonfield?: string;
    delimiter?: string;
}
export interface CompactJson {
    fields: Array<string>;
    data: Array<Array<any>>;
}
export declare const enum LayerControl {
    BoundaryZoom = "boundaryZoom",
    Datatable = "datatable",
    Identify = "identify",
    Metadata = "metadata",
    Opacity = "opacity",
    Refresh = "refresh",
    Reload = "reload",
    Remove = "remove",
    Settings = "settings",
    Symbology = "symbology",
    Visibility = "visibility"
}
export interface Attribution {
    text?: {
        disabled?: boolean;
        value?: string;
    };
    logo?: {
        disabled?: boolean;
        altText?: string;
        value?: string;
        link?: string;
    };
}
export interface ScaleBar {
    disabled?: boolean;
    label?: string;
    width?: string;
    isImperialScale?: boolean;
}
export interface LangToggle {
    disabled?: boolean;
}
export interface RampSpatialReference {
    wkid?: number;
    latestWkid?: number;
    wkt?: string;
}
export interface RampLayerStateConfig {
    visibility?: boolean;
    opacity?: number;
    identify?: boolean;
    /**
     * DEPRECATED #2595
     * Use maptips
     */
    hovertips?: boolean;
    maptips?: boolean;
}
export interface RampLayerFieldInfoConfig {
    name: string;
    alias?: string;
    trim?: boolean;
}
export interface RampLayerFieldMetadataConfig {
    fieldInfo?: Array<RampLayerFieldInfoConfig>;
    exclusiveFields?: boolean;
    enforceOrder?: boolean;
}
export interface RampLabelsConfig {
    visible?: boolean;
}
export interface RampLayerMapImageSublayerConfig {
    index: number;
    name?: string;
    nameField?: string;
    nameArcade?: string;
    state?: RampLayerStateConfig;
    extent?: RampExtentConfig;
    controls?: Array<LayerControl>;
    disabledControls?: Array<LayerControl>;
    cosmetic?: boolean;
    fieldMetadata?: RampLayerFieldMetadataConfig;
    initialFilteredQuery?: string;
    permanentFilteredQuery?: string;
    customRenderer?: any;
    labels?: RampLabelsConfig;
    fixtures?: any;
    id: string;
    layerType: LayerType;
    /**
     * DEPRECATED #2595
     * Use maptipField
     */
    tooltipField?: string;
    /**
     * DEPRECATED #2595
     * Use maptipArcade
     */
    tooltipArcade?: string;
    maptipField?: string;
    maptipArcade?: string;
}
export interface RampLayerWmsSublayerConfig {
    id: string;
    name?: string;
    state?: RampLayerStateConfig;
    controls?: Array<LayerControl>;
    disabledControls?: Array<LayerControl>;
    currentStyle?: string;
    styleLegends?: Array<{
        name: string;
        url: string;
    }>;
    fixtures?: any;
}
export interface RampLayerConfig {
    id: string;
    layerType: LayerType;
    url: string;
    name?: string;
    state?: RampLayerStateConfig;
    customRenderer?: any;
    expectedDrawTime?: number;
    expectedLoadTime?: number;
    fieldMetadata?: RampLayerFieldMetadataConfig;
    nameField?: string;
    nameArcade?: string;
    /**
     * DEPRECATED #2595
     * Use maptipField
     */
    tooltipField?: string;
    /**
     * DEPRECATED #2595
     * Use maptipArcade
     */
    tooltipArcade?: string;
    maptipField?: string;
    maptipArcade?: string;
    featureInfoMimeType?: string;
    controls?: Array<LayerControl>;
    disabledControls?: Array<LayerControl>;
    sublayers?: Array<RampLayerMapImageSublayerConfig> | Array<RampLayerWmsSublayerConfig>;
    extent?: RampExtentConfig;
    latField?: string;
    longField?: string;
    mouseTolerance?: number;
    touchTolerance?: number;
    metadata?: {
        url: string;
        name?: string;
        xmlType?: string;
        treatXmlAsMarkdown?: boolean;
    };
    catalogueUrl?: string;
    fixtures?: any;
    cosmetic?: boolean;
    system?: boolean;
    colour?: string;
    imageFormat?: string;
    initialFilteredQuery?: string;
    permanentFilteredQuery?: string;
    drawOrder?: Array<DrawOrder>;
    identifyMode?: LayerIdentifyMode;
    caching?: boolean;
    rawData?: any;
    maxLoadTime?: number;
    labels?: RampLabelsConfig;
    geomClustering?: EsriFeatureReductionCluster;
}
export interface RampExtentConfig {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
    spatialReference: RampSpatialReference;
}
export interface RampExtentSetConfig {
    id: string;
    default: RampExtentConfig;
    full?: RampExtentConfig;
    maximum?: RampExtentConfig;
}
export interface RampBasemapLayerConfig {
    id: string;
    layerType: LayerType;
    url: string;
    opacity?: number;
}
export interface RampBasemapConfig {
    id: string;
    name: string;
    description: string;
    altText: string;
    hideThumbnail?: boolean;
    thumbnailUrl?: string;
    tileSchemaId: string;
    layers: Array<RampBasemapLayerConfig>;
    attribution?: Attribution;
    backgroundColour?: string;
}
export interface RampTileSchemaConfig {
    id: string;
    name: string;
    extentSetId: string;
    lodSetId: string;
    thumbnailTileUrls: Array<string>;
    hasNorthPole?: boolean;
    recoveryBasemap?: {
        basemapId: string;
        timeout?: number;
    };
}
export interface RampLodSetConfig {
    id: string;
    lods: Array<RampLodConfig>;
}
export interface RampLodConfig {
    level: number;
    resolution: number;
    scale: number;
}
export interface MapCaptionConfig {
    mapCoords?: {
        disabled?: boolean;
        formatter?: string;
    };
    scaleBar?: {
        disabled?: boolean;
        imperialScale?: boolean;
    };
    langToggle?: LangToggle;
}
export interface RampMapConfig {
    lodSets: Array<RampLodSetConfig>;
    extentSets: Array<RampExtentSetConfig>;
    basemaps: Array<RampBasemapConfig>;
    tileSchemas: Array<RampTileSchemaConfig>;
    initialBasemapId: string;
    caption?: MapCaptionConfig;
    pointZoomScale?: number;
    mapMouseThrottle?: number;
    labelsDefault?: RampLabelsConfig;
    layerTimeDefault?: {
        expectedDrawTime?: number;
        expectedLoadTime?: number;
        maxLoadTime?: number;
    };
}
