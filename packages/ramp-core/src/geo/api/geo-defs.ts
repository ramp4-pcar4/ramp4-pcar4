import { BaseGeometry, Extent, Point, SpatialReference } from '@/geo/api';

export interface RampLodConfig {
    level: number;
    resolution: number;
    scale: number;
}

export interface ColourParams {
    r: number;
    g: number;
    b: number;
    a?: number;
}

// TODO add support for PATH type?
//      would allow person to define a sybmol using svg. would need to enhance our style params to allow for svg path.
//      alternately we can hotwire the .icon field. so if PATH, use .icon. might also make sense to add ICON to the enum,
//      and have it be a special case just for the constructor and minimize confusion of callers.
export enum PointStyle {
    CIRCLE = 'circle',
    CROSS = 'cross',
    DIAMOND = 'diamond',
    SQUARE = 'square',
    TRIANGLE = 'triangle',
    X = 'x'
}

export enum LineStyle {
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

export enum FillStyle {
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

export interface StyleParams {
    style?: string;
    colour?: Array<number> | string | ColourParams;
    width?: number;
}

export interface PointStyleParams extends StyleParams {
    style?: PointStyle;
    icon?: string;
    height?: number;
    xOffset?: number;
    yOffset?: number;
}

// essentially just pretties up the name. no new params
export interface LineStyleParams extends StyleParams {
    style?: LineStyle;
}

// TODO document the funnybusiness of this.
// because we extend interfaces, this param object has an extra set of things
export interface PolygonStyleParams extends StyleParams {
    outlineColor?: Array<number> | string | ColourParams;
    outlineWidth?: number;
    outlineStyle?: LineStyle;

    // the above 3 are for flexibility and backwards compatibility. the property below allows a shortcut by just supplying a line style
    outlineParams?: LineStyleParams;

    // again, mostly for backwards compatibility. opacity can now be provided on the colour itself. and we can use inherited style and colour for the fills as default
    // (these params will have priority)
    fillColor?: Array<number> | string | ColourParams;
    fillOpacity?: number;
    fillStyle?: FillStyle;
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
export enum LayerType {
    // ESRI
    FEATURE = 'esriFeature',
    MAPIMAGE = 'esriMapImage',
    TILE = 'esriTile',
    IMAGERY = 'esriImagery',

    // OGS
    WMS = 'ogcWms',
    WFS = 'ogcWfs', // TODO proposing this should not be a part of this enum. WFS = Feature

    UNKNOWN = 'unknown'
}

// Format indicates what form the spatial data is encoded in.
// TODO add more as we support more formats
export enum DataFormat {
    ESRI_FEATURE = 'esriFeature',
    ESRI_RASTER = 'esriRaster',
    ESRI_TILE = 'esriTile',
    OGC_RASTER = 'ogcRaster',
    UNKNOWN = 'unknown'
}

export enum IdentifyMode {
    /**
     * Runs the identify query and pipes the available results through the `identify` API endpoint.
     */
    Query = 'query',

    /**
     * Display the identify results in the details panel.
     * This option only works in conjunction with the `Query` option. Without `Query`, there will be no results to display in the details panel.
     */
    Details = 'details',

    /**
     * Highlight the identify results on the map. If the `Marker` mode is set, highlighted features will replace the marker.
     * Only works when `Query` is set.
     */
    Highlight = 'highlight',

    /**
     * Adds a graphic marker at the point of a mouse click. The marker will be set on the map even if the `Query` option is not set.
     */
    Marker = 'marker',

    /**
     * Dehighlights all other layers and features except the identify results (if `Highlight` is set) or the marker (if `Marker` is set`).
     * The haze will not be applied if neither `Marker` nor `Highlight` is set.
     */
    Haze = 'haze'
}

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
    // I don't think we need this anymore. The map is now effectively a singleton on the instance API. no more layers holding pointers to the map they live in.
    // unboundMap?: MapAPI;
}

export interface GetGraphicServiceDetails {
    includeGeometry?: boolean; // indicates if the feature geometry should be included in the result
    attribs?: string; // comma delimited list of attributes to download. '*' for all
    serviceUrl: string; // feature layer endpoint on an arcgis server
    maxOffset?: number; // indicates detail level required of geometry. can be critical if service is in different projection than the map
    mapSR?: string; // stringified spatial reference of the map
    oid: number; // oid of the feature to find
}

export interface GetGraphicResult {
    // TODO replace all this with a RAMPAPI.Graphic?
    attributes?: Attributes;
    geometry?: BaseGeometry;
}

export interface QueryFeaturesParams {
    filterGeometry?: BaseGeometry; // filter by geometry
    filterSql?: string; // filter by sql query
    includeGeometry?: boolean; // if geometry should be included in the result
    outFields?: string; // comma separated list of attributes to restrict what is downloaded
    sourceSR?: SpatialReference; // the spatial reference of the web service. providing helps avoid some reprojection issues

    // don't think we need this anymore. map is now a singleton on the instance api
    // map?: RampMap; // needed if querying geometry against a web service
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

// TODO for the identify structure, currently using uid to tie back to layers/sublayers. should we also include layerid / layerindex for completeness?

export interface IdentifyItem {
    data: any; // TODO figure out how we want to do this. we want the pipeline to be flexible and handle anything
    format: IdentifyResultFormat;
    // See https://github.com/ramp4-pcar4/r4design/issues/11
    // name: string;
    // id: string;
    // symbol: string; // SVG code. does this need to be more flexible to handle WMS image symbols? would a symbol stack-ish thing be more appropriate?
}

export interface IdentifyResult {
    items: Array<IdentifyItem>;
    uid: string; // this would match to the FC. TODO might want to name the property something more specific to that, like sublayerUid? indexUid? childUid? might be ok with uid as the parentUid is different name
    loadPromise: Promise<void>; // TODO confirm we still need this. the .done of IdentifyResultSet should provide the same information. maybe it's a binding thing (bind to bool > bind to promise?)
}

export interface IdentifyResultSet {
    results: Array<IdentifyResult>;
    done: Promise<void>;
    parentUid: string; // this would be the parent layer's uid.
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
}

export interface RampLayerFieldInfoConfig {
    data: string; // TODO data is such a confusing word. name or fieldName makes way more sense
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
    controls?: any;
    stateOnly?: any;
    table?: any;
    fieldMetadata?: RampLayerFieldMetadataConfig;
}

// i.e. a wms layer child
export interface RampLayerWmsLayerEntryConfig {
    id?: string; // this is the "name" on the service
    name?: string; // this is display name in ramp. would override "title" on the service
    state?: RampLayerStateConfig;
    // following items need to be flushed out
    controls?: any;
    currentStyle?: string; // style to be used
    styleLegends?: Array<{ name: string; url: string }>; // map of styles to legend graphic url. overrides service urls.
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
    layerEntries?: Array<RampLayerMapImageLayerEntryConfig> | Array<RampLayerWmsLayerEntryConfig>;
    rawData?: any; // used for static data, like geojson string, shapefile guts
    latField?: string; // csv coord field
    longField?: string; // csv coord field
}

export interface RampExtentConfig {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
    spatialReference: RampSpatialReference;
}

export interface RampBasemapLayerConfig {
    layerType: string;
    url: string;
    // TODO figure out if we need extra flag to mark as baselayer or referencelayer
}

export interface RampBasemapConfig {
    id: string;
    tileSchemaId: string;
    name?: string;
    description?: string;
    altText?: string;
    attribution?: Attribution;
    layers: Array<RampBasemapLayerConfig>;
    wkid?: number;
}

export interface RampTileSchemaConfig {
    id: string;
    name: string;
    extentSetId: string;
    lodSetId: string;
    thumbnailTileUrls: Array<string>;
    hasNorthPole?: boolean;
}

// Contains properties for compoents on the map caption bar
export interface MapCaptionConfig {
    mouseCoords: { disabled?: boolean; formatter?: string };
    scaleBar: { disabled?: boolean; imperialScale?: boolean };
}

// TODO actual ramp config is kinda wonky, split over lots of classes
//      for now this will just serve as a nice type for the config
export interface RampMapConfig {
    lods: Array<RampLodConfig>;
    extent: RampExtentConfig;
    basemaps: Array<RampBasemapConfig>;
    tileSchemas: Array<RampTileSchemaConfig>;
    initialBasemapId: string;
    caption?: MapCaptionConfig;
}
