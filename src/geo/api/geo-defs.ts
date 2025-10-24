import type { BaseGeometry, Extent, Graphic, Point, SpatialReference } from '@/geo/api';
import type { EsriFeatureReductionCluster, EsriRenderer } from '@/geo/esri';

// From the supported ESRI field types
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#type
export const enum FieldType {
    BLOB = 'blob',
    DATE = 'date',
    DOUBLE = 'double',
    GEOMETRY = 'geometry',
    GLOBAL_ID = 'global-id',
    GUID = 'guid',
    INTEGER = 'integer',
    LONG = 'long',
    OID = 'oid',
    RASTER = 'raster',
    SINGLE = 'single',
    SMALL_INTEGER = 'small-integer',
    STRING = 'string',
    XML = 'xml'
}

export interface ColourParams {
    r: number;
    g: number;
    b: number;
    a?: number;
}

export enum PointStyleType {
    CIRCLE = 'circle',
    CROSS = 'cross',
    DIAMOND = 'diamond',
    ICON = 'icon', // this one is special, not an esri type. denotes a picture marker instead of simple marker
    PATH = 'path',
    SQUARE = 'square',
    TRIANGLE = 'triangle',
    X = 'x'
}

// These need to match the ESRI style constants
// https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleLineSymbol.html#style
export const enum LineStyleType {
    DASH = 'dash',
    DASHDOT = 'dash-dot',
    DASHDOTDOT = 'short-dash-dot-dot', // for backwards compatibility
    DOT = 'dot',
    LONGDASH = 'long-dash',
    LONGDASHDOT = 'long-dash-dot',
    LONGDASHDOTDOT = 'long-dash-dot-dot',
    NONE = 'none',
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    NULL = 'none', // for backwards compatibility
    SHORTDASH = 'short-dash',
    SHORTDASHDOT = 'short-dash-dot',
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    SHORTDASHDOTDOT = 'short-dash-dot-dot',
    SHORTDOT = 'short-dot',
    SOLID = 'solid'
}

export const enum LineJoinType {
    BEVEL = 'bevel',
    MITER = 'miter',
    ROUND = 'round'
}

export const enum LineCapType {
    ROUND = 'round',
    BUTT = 'butt', // round butt lol
    SQUARE = 'square'
}

export const enum FillStyleType {
    BDIAG = 'backward-diagonal',
    CROSS = 'cross',
    DIAG_CROSS = 'diagonal-cross',
    FDIAG = 'forward-diagonal',
    HORIZONTAL = 'horizontal',
    NONE = 'none',
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    NULL = 'none', // for backwards compatibility
    SOLID = 'solid',
    VERTICAL = 'vertical'
}

export const enum GeometryType {
    POINT = 'Point',
    MULTIPOINT = 'MultiPoint',
    LINESTRING = 'LineString',
    MULTILINESTRING = 'MultiLineString',
    POLYGON = 'Polygon',
    MULTIPOLYGON = 'MultiPolygon',
    LINEARRING = 'LinearRing',
    EXTENT = 'Extent',
    NONE = 'None', // useful for raster sublayers who need to populate a geom type field.
    UNKNOWN = 'Unknown'
}

export const enum RendererType {
    Simple = 'simple',
    Unique = 'uniqueValue',
    ClassBreaks = 'classBreaks',
    Unknown = 'unknown'
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

// aligns with config values
// describes the source of the layer
export const enum LayerType {
    // ESRI
    FEATURE = 'esri-feature',
    MAPIMAGE = 'esri-map-image',
    TILE = 'esri-tile',
    IMAGERY = 'esri-imagery',
    IMAGERYTILE = 'esri-imagery-tile',
    GRAPHIC = 'esri-graphic',

    // OGS
    WMS = 'ogc-wms',
    WFS = 'ogc-wfs',

    // File Based
    GEOJSON = 'file-geojson',
    GEOJSONZIPPED = 'file-zip-geojson',
    CSV = 'file-csv',
    SHAPEFILE = 'file-shape',
    FLATGEOBUF = 'file-fgb',
    FLATGEOBUFZIPPED = 'file-zip-fgb',

    // Other
    OSM = 'osm-tile', // open street map

    // Data
    DATACSV = 'data-csv',
    DATAJSON = 'data-json',
    DATATABLE = 'data-esri-table',

    UNKNOWN = 'unknown',

    SUBLAYER = 'sublayer'
}

// describes how the layer is implemented in the map stack (i.e. hints at the ESRI Layer class)
export const enum LayerFormat {
    FEATURE = 'feature',
    GRAPHIC = 'graphic',
    IMAGERY = 'imagery',
    IMAGERYTILE = 'imagery-tile',
    MAPIMAGE = 'map-image',
    NOLAYER = 'no-layer',
    OSM = 'osm-tile',
    TILE = 'tile',
    UNKNOWN = 'unknown',
    WMS = 'wms'
}

// Format indicates what form the spatial data is encoded in.
// This refers to what the client is dealing with. So there is no "csv" format,
// as that data gets converted into esri feature format.
// Add more as we support more formats
export const enum DataFormat {
    ESRI_FEATURE = 'esriFeature',
    ESRI_RASTER = 'esriRaster',
    ESRI_TILE = 'esriTile',
    OSM_TILE = 'osmTile',
    OGC_RASTER = 'ogcRaster',
    UNKNOWN = 'unknown'
}

// GeoJson geometry types
export const enum GeoJsonGeomType {
    POINT = 'Point',
    MULTIPOINT = 'MultiPoint',
    LINESTRING = 'LineString',
    MULTILINESTRING = 'MultiLineString',
    POLYGON = 'Polygon',
    MULTIPOLYGON = 'MultiPolygon'
}

export interface GeoJsonField {
    name: string;
    type: string;
}

// pending https://github.com/ramp4-pcar4/ramp4-pcar4/issues/130
// commenting out to avoid any undecided constants being exposed

//export const enum IdentifyMode {
//    /**
//     * Runs the identify query and pipes the available results through the `identify` API endpoint.
//     */
//    Query = 'query',
//
//    /**
//     * Display the identify results in the details panel.
//     * This option only works in conjunction with the `Query` option. Without `Query`, there will be no results to display in the details panel.
//     */
//    Details = 'details',
//
//    /**
//     * Highlight the identify results on the map. If the `Marker` mode is set, highlighted features will replace the marker.
//     * Only works when `Query` is set.
//     */
//    Highlight = 'highlight',
//
//    /**
//     * Adds a graphic marker at the point of a mouse click. The marker will be set on the map even if the `Query` option is not set.
//     */
//    Marker = 'marker',
//
//    /**
//     * Dehighlights all other layers and features except the identify results (if `Highlight` is set) or the marker (if `Marker` is set`).
//     * The haze will not be applied if neither `Marker` nor `Highlight` is set.
//     */
//    Haze = 'haze'
//}

export const enum LayerIdentifyMode {
    GEOMETRIC = 'geometric', // uses geometric intersection; feature symbology is not considered
    SYMBOLIC = 'symbolic', // uses symbol intersection; not applicable for raster layers
    HYBRID = 'hybrid', // combines geometric and symbolic results
    NONE = 'none' // value for layers that don't support identify
}

export interface EpsgLookup {
    (code: string | number): Promise<string>;
}

export const enum InitiationState {
    NEW = 'new',
    INITIATING = 'initiating',
    INITIATED = 'initiated',
    TERMINATING = 'terminating',
    TERMINATED = 'terminated'
}

export const enum LayerState {
    NEW = 'new', // this means ramp layer class exists but needs to be initiate() 'd
    LOADING = 'loading',
    LOADED = 'loaded',
    ERROR = 'error'
}

export const enum DrawState {
    NOT_LOADED = 'not-loaded',
    NOT_VISUAL = 'not-visual',
    REFRESH = 'refresh',
    UP_TO_DATE = 'up-to-date'
}

export interface DrawOrder {
    field?: string;
    arcade?: string;
    ascending: boolean; // true means smaller values are drawn ON TOP of larger values. false is the opposite
}

export const enum IdentifyResultFormat {
    ESRI = 'esri',
    TEXT = 'text',
    IMAGE = 'image', // TODO does this need to be split out into image formats like jpg, png?
    HTML = 'html',
    XML = 'xml',
    JSON = 'json',
    UNKNOWN = 'unknown'
}

// Since MapClick and MapMove are payloads on public events, is there a proper
// way they should be exposed from the main app as well (like, exported? in one of those .d.ts files?)?
// same question probably applies to a number of other interfaces here.

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

// needs to align to esri values for GoToOptions2D.easing
export type ZoomEasing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

export interface ScreenPoint {
    screenX: number;
    screenY: number;
}

export interface Screenshot {
    dataUrl: string;
    data: ImageData;
}

// a collection of attributes
export interface AttributeSet {
    features: Array<Attributes>;
    oidIndex: { [key: number]: number };
}

// the type field values are aligned with the ESRI API values.
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#type
export interface FieldDefinition {
    name: string;
    alias?: string;
    type: string;
    length?: number;
    trim?: boolean;
}

export interface TabularAttributeSet {
    columns: Array<{ data: string; title: string }>;
    rows: Array<Attributes>;
    fields: Array<FieldDefinition>;
    oidField: string;
}

export interface LegendSymbology {
    uid: string;
    label: string;
    definitionClause?: string;
    svgcode: string;
    imgUrl?: string; // for custom symbology stack
    drawPromise: Promise<string | void>;
    esriStandard: boolean; // indicates if this symbol is ESRI standard symbology or an image
    imgHeight?: string; // height of the original legend graphic (for wms layers)
    imgWidth?: string; // width of the original legend graphic (for wms layers)
    // TODO: Reduce this to one visibility flag (or move visibility state management another place altogether)
    visibility?: boolean; // Used by the checkbox in the legend
    lastVisbility?: boolean; // Used to create SQL definition and remembers the visibility value even after the parent layer is toggled off
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
    typeIdField?: string;
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
    includeGeometry?: boolean; // indicates if the feature geometry should be included in the result
    attribs?: string; // comma delimited list of attributes to download. '*' for all
    serviceUrl: string; // feature layer endpoint on an arcgis server
    maxOffset?: number; // indicates detail level required of geometry. can be critical if service is in different projection than the map
    mapSR?: string; // stringified spatial reference of the map
    geometryPrecision?: number; // number of decimal places to keep in result geometry
    oid: number; // oid of the feature to find
    fieldsToTrim?: Array<string>; // list of fields to trim
}

export interface DiscreteGraphicResult {
    oid: number; // oid of the result
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
    sublayerIds?: Array<string | number>; // Optional array of sublayer uids or server indices. When defined, the given sublayers are queried for instead of the default (visible, queryable, on-scale sublayers)
    hitTest?: Promise<Array<GraphicHitResult>>; // Optional results of local hits to incorporate in the identify
}

// this would need to expand if we start supporting hits from Graphic Layers (they have no concept of OID)
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
    screenPoint: ScreenPoint; // screen xy coords
    mapPoint: Point; // map xy coords
    graphicHit: GraphicHitResult; // the graphic object the maptip is hovering over
}

export interface FilterEventParam {
    filterKey: string;
    uid?: string;
    extent?: Extent;
    extraData?: any;
}

// these represent filter keys that the core reserves. the above interface does not use it for typing as
// 3rd parties can define their own keys.
export const enum CoreFilter {
    SYMBOL = 'symbol', // used for symbol visibililty filters in the legend
    GRID = 'grid', // used to apply grid filters to a layer
    EXTENT = 'extent', // captures a filter based on an extent. leveraged by the grid to only show rows visible on screen
    INITIAL = 'initial', // used to track an initial filter provided by the layer config
    API = 'api', // this would be a default api key. e.g. if someone just does an API filter set with no key parameter, it would use this.
    PERMANENT = 'permanent' // a filter that is always on and will influence server calls (i.e. prevent data from being downloaded). can only be set via layer config
}

export interface ScaleHelper {
    units: string;
    isImperialScale: boolean;
    pixels: number;
    distance: number;
}

// Contains properties needed to display mouse/crosshairs co-ords on the map-caption bar
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

// payload format for Data Layer in json form
export interface CompactJson {
    fields: Array<string>; // field names
    data: Array<Array<any>>; // each inner array containts the attribute values per feature. order matches fields array
}

// ----------------------- CLIENT CONFIG INTERFACES -----------------------------------

// TODO migrate these to /geo/api/geo-common ? if we need config interfaces before creating an instance,
//      having them defined here might cause circular reference.

export const enum LayerControl {
    BoundaryZoom = 'boundaryZoom',
    Datatable = 'datatable',
    Identify = 'identify',
    Metadata = 'metadata',
    Opacity = 'opacity',
    Refresh = 'refresh',
    Reload = 'reload',
    Remove = 'remove',
    Settings = 'settings',
    Symbology = 'symbology',
    Visibility = 'visibility'
}

// Attribution interface that contains all the core attributes of the attribution node
export interface Attribution {
    text?: { disabled?: boolean; value?: string };
    logo?: {
        disabled?: boolean;
        altText?: string;
        value?: string;
        link?: string;
    };
}

// Contains properties needed to display scale on the map-caption bar
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
    hovertips?: boolean;
}

export interface RampLayerFieldInfoConfig {
    name: string;
    alias?: string;
    trim?: boolean;
}

export interface RampLayerFieldMetadataConfig {
    fieldInfo?: Array<RampLayerFieldInfoConfig>;
    exclusiveFields?: boolean; // default to false. if true, means we only recognize and download field in fieldInfo. if false, we download all fields, and fieldInfo provides additional data as needed
    enforceOrder?: boolean; //default to false. if true, then order the fields in the same order as fieldInfo. if false, randomize ordering of field array
}

// object to support future properties, like label field, style
export interface RampLabelsConfig {
    visible?: boolean;
}

// i.e. a dynamic layer child
export interface RampLayerMapImageSublayerConfig {
    // A+ name
    index: number;
    name?: string;
    nameField?: string;
    nameArcade?: string;
    legendField?: string;
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
    fixtures?: any; // layer-based fixture config

    // the following don't exist on the actual config object, but are needed by the layer class
    id: string;
    layerType: LayerType;
    tooltipField?: string;
    tooltipArcade?: string;
}

// i.e. a wms layer child
export interface RampLayerWmsSublayerConfig {
    id: string; // this is the "name" on the service
    name?: string; // this is display name in ramp. would override "title" on the service
    state?: RampLayerStateConfig;
    // following items need to be flushed out
    controls?: Array<LayerControl>;
    disabledControls?: Array<LayerControl>;
    currentStyle?: string; // style to be used
    styleLegends?: Array<{ name: string; url: string }>; // map of styles to legend graphic url. overrides service urls.
    fixtures?: any; // layer-based fixture config
}

// TODO investigate if we want to make a fancy interface heirarchy instead of pile-of-?-properties
export interface RampLayerConfig {
    id: string;
    layerType: LayerType;
    url: string; // really this should be optional. Graphic layers & raw geojson don't use it. But then we would need undefined checks in majority of code.
    name?: string;
    state?: RampLayerStateConfig;
    customRenderer?: any;
    // NOTE would uncomment if issue #1019 gets done
    // refreshInterval?: number;
    expectedDrawTime?: number;
    expectedLoadTime?: number;
    fieldMetadata?: RampLayerFieldMetadataConfig;
    nameField?: string;
    nameArcade?: string;
    tooltipField?: string;
    tooltipArcade?: string;
    legendField?: string;
    featureInfoMimeType?: string; // used by WMS layer
    controls?: Array<LayerControl>;
    disabledControls?: Array<LayerControl>;
    sublayers?: Array<RampLayerMapImageSublayerConfig> | Array<RampLayerWmsSublayerConfig>;
    extent?: RampExtentConfig;
    latField?: string; // csv coord field
    longField?: string; // csv coord field
    mouseTolerance?: number; // mouse tolerance
    touchTolerance?: number; // touch tolerance
    metadata?: { url: string; name?: string, xmlType?: string, treatXmlAsMarkdown?: boolean };
    catalogueUrl?: string;
    fixtures?: any; // layer-based fixture config
    cosmetic?: boolean;
    system?: boolean;
    colour?: string;
    imageFormat?: string;
    initialFilteredQuery?: string;
    permanentFilteredQuery?: string;
    drawOrder?: Array<DrawOrder>; // feature drawing order
    identifyMode?: LayerIdentifyMode;
    caching?: boolean; // whether to preserve raw data in file and WFS layers
    rawData?: any; // used for static data, like geojson string, shapefile guts
    maxLoadTime?: number; // how long layer can load before error
    labels?: RampLabelsConfig; // label config. for now only valid on MILSublayer but needs to be here due to inheritance fun
    geomClustering?: EsriFeatureReductionCluster; // spatially groups geometries into clusters
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

// Contains properties for compoents on the map caption bar
export interface MapCaptionConfig {
    mapCoords?: { disabled?: boolean; formatter?: string };
    scaleBar?: { disabled?: boolean; imperialScale?: boolean };
    langToggle?: LangToggle;
}

// actual ramp config is kinda wonky, split over lots of classes
// for now this will just serve as a nice type for the config
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
