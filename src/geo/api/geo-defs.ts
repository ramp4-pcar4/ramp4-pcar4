import type {
    BaseGeometry,
    Extent,
    Graphic,
    Point,
    SpatialReference
} from '@/geo/api';

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
export enum LineStyleType {
    DASH = 'dash',
    DASHDOT = 'dash-dot',
    DASHDOTDOT = 'short-dash-dot-dot', // for backwards compatibility
    DOT = 'dot',
    LONGDASH = 'long-dash',
    LONGDASHDOT = 'long-dash-dot',
    LONGDASHDOTDOT = 'long-dash-dot-dot',
    NONE = 'none',
    NULL = 'none', // for backwards compatibility
    SHORTDASH = 'short-dash',
    SHORTDASHDOT = 'short-dash-dot',
    SHORTDASHDOTDOT = 'short-dash-dot-dot',
    SHORTDOT = 'short-dot',
    SOLID = 'solid'
}

export enum LineJoinType {
    BEVEL = 'bevel',
    MITER = 'miter',
    ROUND = 'round'
}

export enum LineCapType {
    ROUND = 'round',
    BUTT = 'butt', // round butt lol
    SQUARE = 'square'
}

export enum FillStyleType {
    BDIAG = 'backward-diagonal',
    CROSS = 'cross',
    DIAG_CROSS = 'diagonal-cross',
    FDIAG = 'forward-diagonal',
    HORIZONTAL = 'horizontal',
    NONE = 'none',
    NULL = 'none', // for backwards compatibility
    SOLID = 'solid',
    VERTICAL = 'vertical'
}

export enum GeometryType {
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

export enum RendererType {
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

// TODO revisit what this actually means now. Is the .layerType value on a layer config?
//      or is it the type of ESRI layer that lives in the map.
//      if the first, we might need to be careful as we can have custom values now.
//      will enum cause a problem?
//      ^ Mar 2022 whatever it means, it drives what layer class is used to construct the layer.
//      So it's the value of the config item, and figures out what do generate from that.
//      See https://github.com/ramp4-pcar4/ramp4-pcar4/discussions/338
export enum LayerType {
    // ESRI
    FEATURE = 'esri-feature',
    MAPIMAGE = 'esri-map-image',
    TILE = 'esri-tile',
    IMAGERY = 'esri-imagery',
    GRAPHIC = 'esri-graphic',

    // OGS
    WMS = 'ogc-wms',
    WFS = 'ogc-wfs',

    // File Based
    GEOJSON = 'file-geojson',
    CSV = 'file-csv',
    SHAPEFILE = 'file-shape',

    // Other
    OSM = 'osm-tile', // open street map

    UNKNOWN = 'unknown',

    SUBLAYER = 'sublayer'
}

// Format indicates what form the spatial data is encoded in.
// This refers to what the client is dealing with. So there is no "csv" format,
// as that data gets converted into esri feature format.
// TODO add more as we support more formats
export enum DataFormat {
    ESRI_FEATURE = 'esriFeature',
    ESRI_RASTER = 'esriRaster',
    ESRI_TILE = 'esriTile',
    OSM_TILE = 'osmTile',
    OGC_RASTER = 'ogcRaster',
    UNKNOWN = 'unknown'
}

// GeoJson geometry types
export enum GeoJsonGeomType {
    POINT = 'Point',
    MULTIPOINT = 'MultiPoint',
    LINESTRING = 'LineString',
    MULTILINESTRING = 'MultiLineString',
    POLYGON = 'Polygon',
    MULTIPOLYGON = 'MultiPolygon'
}

// pending https://github.com/ramp4-pcar4/ramp4-pcar4/issues/130
// commenting out to avoid any undecided constants being exposed

//export enum IdentifyMode {
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

export interface EpsgLookup {
    (code: string | number): Promise<string>;
}

export interface DojoWindow extends Window {
    require?: any; // require is both a function, and has event handlers. probably a way to define in typescript interface, not going to right now.
}

export enum LayerState { // these are used as css classes; hence the `rv` prefix
    NEW = 'rv-new', // this means layer class exists but needs to be initialized()
    REFRESH = 'rv-refresh',
    LOADING = 'rv-loading',
    LOADED = 'rv-loaded',
    ERROR = 'rv-error'
}

export enum IdentifyResultFormat {
    ESRI = 'esri',
    TEXT = 'text',
    IMAGE = 'image', // TODO does this need to be split out into image formats like jpg, png?
    HTML = 'html',
    XML = 'xml',
    JSON = 'json',
    UNKNOWN = 'unknown'
}

export enum LayerControls {
    BoundaryZoom = 'boundaryZoom',
    Boundingbox = 'boundingBox',
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

// TODO since MapClick and MapMove are payloads on public events, is there a proper
//      way they should be exposed from the main app as well (like, exported? in one of those .d.ts files?)?
//      same question probably applies to a number of other interfaces here.

export interface MapClick {
    mapPoint: Point;
    screenX: number;
    screenY: number;
    button: number;
    clickTime: number;
}

export interface MapMove {
    screenX: number;
    screenY: number;
    button: number;
    moveTime: number;
}

export interface ScreenPoint {
    screenX: number;
    screenY: number;
}

export interface Screenshot {
    dataUrl: string;
    data: ImageData;
}

// a collection of attributes
// TODO consider changin .features to .attributes or .attribs.
//      features would be back-compatible, but it's confusing as we now have a Graphic class, which would be more
//      aligned with the word "feature"
export interface AttributeSet {
    features: Array<Attributes>;
    oidIndex: { [key: number]: number };
}

export interface FieldDefinition {
    name: string;
    alias: string;
    type: string;
    length?: number;
}

export interface TabularAttributeSet {
    columns: Array<{ data: string; title: string }>;
    rows: Array<Attributes>;
    fields: Array<FieldDefinition>;
    oidField: string;
    // oidIndex: number; // TODO determine if we need this anymore
    // renderer: BaseRenderer; // TODO determine if we need this anymore
}

export interface LegendSymbology {
    uid: string;
    label: string;
    definitionClause?: string;
    svgcode: string;
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

export interface GetGraphicParams {
    getGeom?: boolean;
    getAttribs?: boolean;
}

export interface GetGraphicServiceDetails {
    includeGeometry?: boolean; // indicates if the feature geometry should be included in the result
    attribs?: string; // comma delimited list of attributes to download. '*' for all
    serviceUrl: string; // feature layer endpoint on an arcgis server
    maxOffset?: number; // indicates detail level required of geometry. can be critical if service is in different projection than the map
    mapSR?: string; // stringified spatial reference of the map
    oid: number; // oid of the feature to find
}

export interface DiscreteGraphicResult {
    oid: number; // oid of the result
    graphic: Promise<Graphic>;
}

export interface QueryFeaturesParams {
    filterGeometry?: BaseGeometry; // filter by geometry
    filterSql?: string; // filter by sql query
    includeGeometry?: boolean; // if geometry should be included in the result
    outFields?: string; // comma separated list of attributes to restrict what is downloaded
    sourceSR?: SpatialReference; // the spatial reference of the web service. providing helps avoid some reprojection issues
}

export interface QueryFeaturesArcServerParams extends QueryFeaturesParams {
    url: string;
}

export interface IdentifyParameters {
    geometry: BaseGeometry;
    tolerance?: number;
    returnGeometry?: boolean; // TODO revisit this. might make more sense to offload geom to a followup request. if we keep, we may need to add property to IdentifyItem for the geom to live in
    sublayerIds?: Array<string | number>; // Optional array of sublayer uids or server indices. When defined, the given sublayers are queried for instead of the default (visible, queryable, on-scale sublayers)
}

export interface IdentifyItem {
    data: any;
    format: IdentifyResultFormat;
    loaded: boolean;
    loading: Promise<void>;
    // See https://github.com/ramp4-pcar4/ramp4-pcar4/discussions/334
    // name: string;
    // id: string;
    // symbol: string; // SVG code. does this need to be more flexible to handle WMS image symbols? would a symbol stack-ish thing be more appropriate?
}

// the result of identifying against a logical layer ( a feature class or WMS )
export interface IdentifyResult {
    items: Array<IdentifyItem>;
    uid: string; // this would match to the logical layer.
    loaded: boolean;
    loading: Promise<void>; // represents the list of results has been found, but the content of items in the array may still be resolving
    requestTime: number; // tracks timestamp of identify request
}

export interface MapIdentifyResult {
    results: IdentifyResult[];
    click: MapClick;
}

//TODO: Enhance this when a RAMP Graphic is properly defined
export interface GraphicHitResult {
    oid: number; // graphic OBJECTID
    layerIdx: number; // layer index of the graphic
    layerId: string; // graphic layer id
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
export enum CoreFilter {
    SYMBOL = 'symbol',
    GRID = 'grid',
    EXTENT = 'extent',
    API = 'api' // this would be a default api key. e.g. if someone just does an API filter set with no key parameter, it would use this.
}

// Attribution interface that contains all the core attributes of the attribution node
export interface Attribution {
    text: { disabled?: boolean; value?: string };
    logo: {
        disabled?: boolean;
        altText?: string;
        value?: string;
        link?: string;
    };
}

export interface ScaleHelper {
    units: string;
    isImperialScale: boolean;
    pixels: number;
    distance: number;
}

// Contains properties needed to display scale on the map-caption bar
export interface ScaleBar {
    disabled?: boolean;
    label?: string;
    width?: string;
    isImperialScale?: boolean;
}

// Contains properties needed to display mouse co-ords on the map-caption bar
export interface MouseCoords {
    disabled?: boolean;
    formattedString?: string;
}

export interface UrlQueryMap {
    [name: string]: string;
}

// ----------------------- CLIENT CONFIG INTERFACES -----------------------------------

// TODO migrate these to /geo/api/geo-common ? if we need config interfaces before creating an instance,
//      having them defined here might cause circular reference.

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
}

export interface RampLayerFieldMetadataConfig {
    fieldInfo?: Array<RampLayerFieldInfoConfig>;
    exclusiveFields?: boolean; // default to false. if true, means we only recognize and download field in fieldInfo. if false, we download all fields, and fieldInfo provides additional data as needed
}

// i.e. a dynamic layer child
export interface RampLayerMapImageLayerEntryConfig {
    // A+ name
    index?: number;
    name?: string;
    nameField?: string;
    // outfields?: string; // TODO tbd if we keep this
    state?: RampLayerStateConfig;
    // following items need to be flushed out
    extent?: any;
    controls?: Array<LayerControls>;
    disabledControls?: Array<LayerControls>;
    stateOnly?: any;
    table?: any;
    fieldMetadata?: RampLayerFieldMetadataConfig;
    customRenderer?: any;
    fixtures?: any; // layer-based fixture config
}

// i.e. a wms layer child
export interface RampLayerWmsLayerEntryConfig {
    id?: string; // this is the "name" on the service
    name?: string; // this is display name in ramp. would override "title" on the service
    state?: RampLayerStateConfig;
    // following items need to be flushed out
    controls?: Array<LayerControls>;
    disabledControls?: Array<LayerControls>;
    currentStyle?: string; // style to be used
    styleLegends?: Array<{ name: string; url: string }>; // map of styles to legend graphic url. overrides service urls.
    fixtures?: any; // layer-based fixture config
    // more...
}

// TODO investigate if we want to make a fancy interface heirarchy instead of pile-of-?-properties
export interface RampLayerConfig {
    id: string;
    layerType: string;
    url: string;
    name?: string;
    state?: RampLayerStateConfig;
    customRenderer?: any; // TODO expand, if worth it. fairly complex object
    refreshInterval?: number;
    initialFilteredQuery?: string;
    fieldMetadata?: RampLayerFieldMetadataConfig;
    nameField?: string;
    tooltipField?: string;
    featureInfoMimeType?: string;
    controls?: Array<LayerControls>;
    disabledControls?: Array<LayerControls>;
    layerEntries?:
        | Array<RampLayerMapImageLayerEntryConfig>
        | Array<RampLayerWmsLayerEntryConfig>;
    rawData?: any; // used for static data, like geojson string, shapefile guts
    latField?: string; // csv coord field
    longField?: string; // csv coord field
    tolerance?: number; // click tolerance
    metadata?: { url: string; name?: string };
    fixtures?: any; // layer-based fixture config
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
    id?: string;
    layerType: string;
    url: string;
    opacity?: number;
}

export interface RampBasemapConfig {
    id: string;
    tileSchemaId: string;
    name?: string;
    description?: string;
    altText?: string;
    thumbnailUrl?: string;
    attribution?: Attribution;
    layers: Array<RampBasemapLayerConfig>;
}

export interface RampTileSchemaConfig {
    id: string;
    name: string;
    extentSetId: string;
    lodSetId: string;
    thumbnailTileUrls: Array<string>;
    hasNorthPole?: boolean;
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
    mouseCoords: { disabled?: boolean; formatter?: string };
    scaleBar: { disabled?: boolean; imperialScale?: boolean };
}

// TODO actual ramp config is kinda wonky, split over lots of classes
//      for now this will just serve as a nice type for the config
export interface RampMapConfig {
    lodSets: Array<RampLodSetConfig>;
    extentSets: Array<RampExtentSetConfig>;
    basemaps: Array<RampBasemapConfig>;
    tileSchemas: Array<RampTileSchemaConfig>;
    initialBasemapId: string;
    caption?: MapCaptionConfig;
}
