// TODO add proper comments
// TODO after all the stuff has been dumped in here, re-organize the order into logical sections
// TODO revist the definitions. things that are exposed on the API might be better defined in the ApiTypes files.
//      this file should have stuff that relatively GAPI agnostic and frequently used in outsider code.
//      May need an overall re-hash of how definitions are exported in general; what way makes most sense
//      and leads to cleanest imports for consumers of GAPI

import esri = __esri; // magic command to get ESRI JS API type definitions.
import BaseGeometry from './api/geometry/BaseGeometry'; // this is a bit wonky. could expose on RampAPI, but dont want clients using the baseclass
import { Attributes } from './api/apiDefs';
import MapModule from './map/MapModule';
import RampMap from './map/RampMap';
import LayerModule from './layer/LayerModule';
import UtilModule from './util/UtilModule';
import GeoJsonLayer from './layer/GeoJsonLayer';

// gapi loader needs to be a oneshot default due to magic (something about module load being dependant on dojo script load [waves hands, points at Aly]).
// so putting the types here so they can be shared around

export interface EpsgLookup {
    (code: string | number): Promise<string>;
}

export interface GeoApiOptions {
    apiUrl?: string;
    epsgLookup?: EpsgLookup;
}

export interface DojoWindow extends Window {
    require?: any;  // require is both a function, and has event handlers. probably a way to define in typescript interface, not going to right now.
}

// contains the dojo modules
// Uppercase properties are classes
// Lowercase properties are utility modules
export class EsriBundle {
    // MAPS
    Basemap: esri.BasemapConstructor;
    BasemapGallery: esri.BasemapGalleryConstructor;
    Map: esri.MapConstructor;
    MapView: esri.MapViewConstructor;
    ScaleBar: esri.ScaleBarConstructor;

    // LAYERS
    FeatureLayer: esri.FeatureLayerConstructor;
    Field: esri.FieldConstructor;
    GraphicsLayer: esri.GraphicsLayerConstructor;
    ImageParameters: esri.ImageParametersConstructor;
    ImageryLayer: esri.ImageryLayerConstructor; // formerly known as ArcGISImageServiceLayer
    MapImageLayer: esri.MapImageLayerConstructor; // formerly known as ArcGISDynamicMapServiceLayer
    Sublayer: esri.SublayerConstructor; // formerly known as LayerDrawingOptions
    TileLayer: esri.TileLayerConstructor; // formerly known as ArcGISTiledMapServiceLayer
    WMSLayer: esri.WMSLayerConstructor;
    WMSSublayer: esri.WMSSublayerConstructor;

    // GEOMETRY & GRAPHICS
    Extent: esri.ExtentConstructor;
    Graphic: esri.GraphicConstructor;
    Multipoint: esri.MultipointConstructor;
    Point: esri.PointConstructor;
    Polygon: esri.PolygonConstructor;
    Polyline: esri.PolylineConstructor;
    SpatialReference: esri.SpatialReferenceConstructor;

    // SYMBOLS & RENDERERS
    ClassBreaksRenderer: esri.ClassBreaksRendererConstructor;
    PictureMarkerSymbol: esri.PictureMarkerSymbolConstructor;
    rendererUtils: esri.supportJsonUtils; // bad naming on esri's part here
    SimpleFillSymbol: esri.SimpleFillSymbolConstructor;
    SimpleLineSymbol: esri.SimpleLineSymbolConstructor;
    SimpleMarkerSymbol: esri.SimpleMarkerSymbolConstructor;
    SimpleRenderer: esri.SimpleRendererConstructor;
    symbolJsonUtils: esri.symbolsSupportJsonUtils;
    UniqueValueRenderer: esri.UniqueValueRendererConstructor;

    // SERVICES
    GeometryService: esri.GeometryServiceConstructor;
    IdentifyParameters: esri.IdentifyParametersConstructor;
    IdentifyTask: esri.IdentifyTaskConstructor;
    PrintParameters: esri.PrintParametersConstructor;
    PrintTask: esri.PrintTaskConstructor;
    PrintTemplate: esri.PrintTemplateConstructor;
    ProjectParameters: esri.ProjectParametersConstructor;
    Query: esri.QueryConstructor;
    QueryTask: esri.QueryTaskConstructor;

    // MISC. ESRI & DOJO
    Color: esri.ColorConstructor;
    dojoQuery: dojo.query;
    esriConfig: esri.config;
    esriRequest: (url: string, opts: esri.RequestOptions) => Promise<esri.RequestResponse>; // esri.request; // TODO figure out how to do this.  the esri.request doesn't align right with what dojo spits back. if it has to be a function, add the types to the signature
}

// TODO might be worth making this a class or a generator function with defaults.  dont know what the impact of making all properties optonal is.
// TODO figure out best way of managing classes.  e.g. fakeNewsMaps needs to import that file, but that file imports this.
// Might also make sense to have this interface in it's own file?  Its the more public of interfaces.
export interface GeoApi {
    esriBundle: EsriBundle; // push inside a dev module?
    maps: MapModule;
    layers: LayerModule;
    utils: UtilModule;
    dev?: any;
    // agol?: any;
    // shared?: any;
    // query?: any;
    // events?: any;
    // TODO add module names as we import them

    // fakeNewsMaps?: any; // TODO remove after real maps are implemented
}

// used to pass reference information into class constructors. saves us from having two parameters. value!
export interface InfoBundle {
    esriBundle: EsriBundle;
    api: GeoApi;
    window: DojoWindow;
}

export enum LayerState { // these are used as css classes; hence the `rv` prefix
    NEW = 'rv-new',
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

// a collection of attributes
// TODO consider changin .features to .attributes or .attribs.
//      features would be back-compatible, but it's confusing as we now have a Graphic class, which would be more
//      aligned with the word "feature"
export interface AttributeSet {
    features: Array<Attributes>;
    oidIndex: {[key: number]: number};
}

export interface LegendSymbology {
    label: string;
    definitionClause: string;
    svgcode: string;
    drawPromise: Promise<void>;
    // TODO might need to add something to support image-based legends we find in WMS or custom stacks from the config
}

export interface ArcGisServerUrl {
    rootUrl: string;
    index: number;
}

export interface GetGraphicParams {
    getGeom?: boolean;
    getAttribs?: boolean;
    map?: RampMap;
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
    // TODO strongly type if we can find types that dont freak out
    //      we may also want to consider some esri-neutral types, since this appears to be used in the client
    //      quite a lot in RAMP2.
    //      alternately, using a real graphic may be needed for things like toggling visibility
    //      of a result graphic (or a real graphic hiding inside a wrapper?).
    //      Fuuurthermore, we often use this result to just get the attribute or the geometry
    //      (omitting unrequired things if fetching from the server), thus making internal hidden
    //      stuff tricky if it's not valid.
    //      perhaps we get very fancy with a wrapper, that can have hidden internals if valid,
    //      and error checking if people say request just attributes then attempt to change visibility
    // TODO replace all this with a RAMPAPI.Graphic?
    attributes?: Attributes;
    geometry?: BaseGeometry;
}

// TODO convert the SR param to our API SR class?
export interface QueryFeaturesParams {
    filterGeometry?: BaseGeometry; // filter by geometry
    filterSql?: string; // filter by sql query
    includeGeometry?: boolean; // if geometry should be included in the result
    outFields?: string; // comma separated list of attributes to restrict what is downloaded
    sourceSR?: esri.SpatialReference; // the spatial reference of the web service. providing helps avoid some reprojection issues
    map?: RampMap; // needed if querying geometry against a web service
}

export interface QueryFeaturesArcServerParams extends QueryFeaturesParams {
    url: string;
}

export interface QueryFeaturesGeoJsonParams extends QueryFeaturesParams {
    layer: GeoJsonLayer;
}

export interface IdentifyParameters {
    // TODO will need a larger thinking session on how we expose any esri native types on our interfaces.
    //      if not esri, needs to be converted inside geoapi to esri, so we need some type of strict interface.
    geometry: BaseGeometry; // esri.Geometry; // TODO figure out how to manage this. typescript gets angry about supertypes.
    map: RampMap; // TODO see if we can make this optional. could be only required if returnGeometry is true. revist after tolerance buffers are implemented. NOTE will also be required for WMS
    tolerance?: number;
    returnGeometry?: boolean; // TODO revisit this. might make more sense to offload geom to a followup request. if we keep, we may need to add property to IdentifyItem for the geom to live in
    // TODO think about adding more options to facilitate more flexible identification.
    //      e.g. for MapImageLayer, an overriding list of child layers to query
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
    isLoading: boolean; // TODO confirm we still need this. the .done of IdentifyResultSet should provide the same information. maybe it's a binding thing (bind to bool > bind to promise?)

}

export interface IdentifyResultSet {
    results: Array<IdentifyResult>;
    done: Promise<void>;
    parentUid: string; // this would be the parent layer's uid.
}

export interface FilterEventParam {
    filter: string;
    uid: string;
}

// ----------------------- CLIENT CONFIG INTERFACES -----------------------------------

export interface RampSpatialReference {
    wkid?: number;
    latestWkid?: number;
    wkt?: string;
}

export interface RampLayerStateConfig {
    visibility?: boolean;
    opacity?: number;
}

export interface RampLayerFieldMetadataConfig {
    data?: string;
    alias?: string;
}

// i.e. a dynamic layer child
export interface RampLayerMapImageLayerEntryConfig { // A+ name
    index?: number;
    name?: string;
    nameField?: string;
    outfields?: string; // TODO tbd if we keep this
    state?: RampLayerStateConfig;
    // following items need to be flushed out
    extent?: any;
    controls?:  any;
    stateOnly?:  any;
    table?:  any;
    fieldMetadata?:  any;
}

// i.e. a wms layer child
export interface RampLayerWmsLayerEntryConfig {
    id?: string; // this is the "name" on the service
    name?: string; // this is display name in ramp. would override "title" on the service
    state?: RampLayerStateConfig;
    // following items need to be flushed out
    controls?:  any;
    currentStyle?: string;
    // more...
}

// TODO investigate if we want to make a fancy interface heirarchy instead of pile-of-?-properties
export interface RampLayerConfig {
    id: string;
    layerType: string;
    fileType?: string;
    url: string;
    name?: string;
    state?: RampLayerStateConfig;
    customRenderer?: any; // TODO expand, if worth it. fairly complex object
    refreshInterval?: number;
    initialFilteredQuery?: string;
    fieldMetadata?: Array<RampLayerFieldMetadataConfig>;
    nameField?: string;
    tooltipField?: string;
    featureInfoMimeType?: string;
    layerEntries?: Array<RampLayerMapImageLayerEntryConfig> | Array<RampLayerWmsLayerEntryConfig>;
}

export interface RampExtentConfig {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
    spatialReference: RampSpatialReference;
}

export interface RampLodConfig {
    level: number;
    resolution: number;
    scale: number;
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
    attribution?: any; // TODO flush out object later
    layers: Array<RampBasemapLayerConfig>;
}

// TODO actual ramp config is kinda wonky, split over lots of classes
//      for now this will just serve as a nice type for the config
export interface RampMapConfig {
    lods: Array<RampLodConfig>;
    extent: RampExtentConfig;
    basemaps: Array<RampBasemapConfig>;
    initialBasemapId: string;
}