import { TinyEmitter as cs } from "tiny-emitter";
import { defineStore as B, createPinia as us } from "pinia";
import { ref as f, computed as P, markRaw as ee, defineComponent as O, inject as ge, reactive as we, watch as It, onBeforeUnmount as dt, resolveDirective as k, withDirectives as M, openBlock as v, createElementBlock as A, withKeys as ps, withModifiers as Qt, onMounted as Ye, normalizeClass as oe, normalizeStyle as Mi, createVNode as ae, Transition as Pi, withCtx as ie, createBlock as W, resolveDynamicComponent as ds, mergeProps as hs, useCssVars as fs, TransitionGroup as Ni, Fragment as We, renderList as ht, unref as I, nextTick as Ot, renderSlot as Me, createElementVNode as m, vShow as ms, resolveComponent as Z, createTextVNode as ot, toDisplayString as D, createCommentVNode as U, onUpdated as ys, Teleport as gs, getCurrentInstance as vs, useTemplateRef as mi, createApp as Fi, toRaw as Ie, h as bs, render as Vt, defineAsyncComponent as ws } from "vue";
import _t from "@arcgis/core/Color";
import ft from "@arcgis/core/config";
import { watch as be } from "@arcgis/core/core/reactiveUtils.js";
import yi from "@arcgis/core/geometry/Extent";
import As from "@arcgis/core/geometry/Multipoint";
import Es from "@arcgis/core/geometry/Point";
import ei from "@arcgis/core/geometry/Polygon";
import Di from "@arcgis/core/geometry/Polyline";
import xs from "@arcgis/core/geometry/SpatialReference";
import { fromJSON as Ss } from "@arcgis/core/geometry/support/jsonUtils";
import Is from "@arcgis/core/Graphic";
import Ve from "@arcgis/core/request";
import _s from "@arcgis/core/symbols/PictureMarkerSymbol";
import Ts from "@arcgis/core/symbols/SimpleFillSymbol";
import Ls from "@arcgis/core/symbols/SimpleLineSymbol";
import Ht from "@arcgis/core/symbols/SimpleMarkerSymbol";
import { fromJSON as ti } from "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import Gi from "deepmerge";
import { applyConverter as Rs } from "@terraformer/spatial";
import ne from "proj4";
import { debounce as Tt, throttle as it } from "throttle-debounce";
import { createI18n as $s, useI18n as Y } from "vue-i18n";
import xe from "screenfull";
import gi from "lodash.clonedeep";
import Cs, { setDefaultProps as Os, useTippy as ks } from "vue-tippy";
import Ms from "linkify-html";
import { createPopper as Ps, detectOverflow as Ns } from "@popperjs/core";
import bt from "redaxios";
import Ae from "await-to-js";
import { geojsonToArcGIS as Fs } from "@terraformer/arcgis";
import { dsv as vi, csv2geojson as Ds } from "csv2geojson";
import tt from "svg.js";
import Ui from "animejs";
import "tippy.js/animations/scale.css";
var Ce = /* @__PURE__ */ ((s) => (s.BLOB = "blob", s.DATE = "date", s.DOUBLE = "double", s.GEOMETRY = "geometry", s.GLOBAL_ID = "global-id", s.GUID = "guid", s.INTEGER = "integer", s.LONG = "long", s.OID = "oid", s.RASTER = "raster", s.SINGLE = "single", s.SMALL_INTEGER = "small-integer", s.STRING = "string", s.XML = "xml", s))(Ce || {}), $e = /* @__PURE__ */ ((s) => (s.CIRCLE = "circle", s.CROSS = "cross", s.DIAMOND = "diamond", s.ICON = "icon", s.PATH = "path", s.SQUARE = "square", s.TRIANGLE = "triangle", s.X = "x", s))($e || {}), ce = /* @__PURE__ */ ((s) => (s.DASH = "dash", s.DASHDOT = "dash-dot", s.DASHDOTDOT = "short-dash-dot-dot", s.DOT = "dot", s.LONGDASH = "long-dash", s.LONGDASHDOT = "long-dash-dot", s.LONGDASHDOTDOT = "long-dash-dot-dot", s.NONE = "none", s.NULL = "none", s.SHORTDASH = "short-dash", s.SHORTDASHDOT = "short-dash-dot", s.SHORTDASHDOTDOT = "short-dash-dot-dot", s.SHORTDOT = "short-dot", s.SOLID = "solid", s))(ce || {}), Bi = /* @__PURE__ */ ((s) => (s.BEVEL = "bevel", s.MITER = "miter", s.ROUND = "round", s))(Bi || {}), Vi = /* @__PURE__ */ ((s) => (s.ROUND = "round", s.BUTT = "butt", s.SQUARE = "square", s))(Vi || {}), zi = /* @__PURE__ */ ((s) => (s.BDIAG = "backward-diagonal", s.CROSS = "cross", s.DIAG_CROSS = "diagonal-cross", s.FDIAG = "forward-diagonal", s.HORIZONTAL = "horizontal", s.NONE = "none", s.NULL = "none", s.SOLID = "solid", s.VERTICAL = "vertical", s))(zi || {}), T = /* @__PURE__ */ ((s) => (s.POINT = "Point", s.MULTIPOINT = "MultiPoint", s.LINESTRING = "LineString", s.MULTILINESTRING = "MultiLineString", s.POLYGON = "Polygon", s.MULTIPOLYGON = "MultiPolygon", s.LINEARRING = "LinearRing", s.EXTENT = "Extent", s.NONE = "None", s.UNKNOWN = "Unknown", s))(T || {}), kt = /* @__PURE__ */ ((s) => (s.Simple = "simple", s.Unique = "uniqueValue", s.ClassBreaks = "classBreaks", s.Unknown = "unknown", s))(kt || {}), x = /* @__PURE__ */ ((s) => (s.FEATURE = "esri-feature", s.MAPIMAGE = "esri-map-image", s.TILE = "esri-tile", s.IMAGERY = "esri-imagery", s.GRAPHIC = "esri-graphic", s.WMS = "ogc-wms", s.WFS = "ogc-wfs", s.GEOJSON = "file-geojson", s.GEOJSONZIPPED = "file-zip-geojson", s.CSV = "file-csv", s.SHAPEFILE = "file-shape", s.FLATGEOBUF = "file-fgb", s.FLATGEOBUFZIPPED = "file-zip-fgb", s.OSM = "osm-tile", s.DATACSV = "data-csv", s.DATAJSON = "data-json", s.DATATABLE = "data-esri-table", s.UNKNOWN = "unknown", s.SUBLAYER = "sublayer", s))(x || {}), me = /* @__PURE__ */ ((s) => (s.FEATURE = "feature", s.GRAPHIC = "graphic", s.IMAGERY = "imagery", s.MAPIMAGE = "map-image", s.NOLAYER = "no-layer", s.OSM = "osm-tile", s.TILE = "tile", s.UNKNOWN = "unknown", s.WMS = "wms", s))(me || {}), te = /* @__PURE__ */ ((s) => (s.ESRI_FEATURE = "esriFeature", s.ESRI_RASTER = "esriRaster", s.ESRI_TILE = "esriTile", s.OSM_TILE = "osmTile", s.OGC_RASTER = "ogcRaster", s.UNKNOWN = "unknown", s))(te || {}), z = /* @__PURE__ */ ((s) => (s.POINT = "Point", s.MULTIPOINT = "MultiPoint", s.LINESTRING = "LineString", s.MULTILINESTRING = "MultiLineString", s.POLYGON = "Polygon", s.MULTIPOLYGON = "MultiPolygon", s))(z || {}), X = /* @__PURE__ */ ((s) => (s.GEOMETRIC = "geometric", s.SYMBOLIC = "symbolic", s.HYBRID = "hybrid", s.NONE = "none", s))(X || {}), N = /* @__PURE__ */ ((s) => (s.NEW = "new", s.INITIATING = "initiating", s.INITIATED = "initiated", s.TERMINATING = "terminating", s.TERMINATED = "terminated", s))(N || {}), q = /* @__PURE__ */ ((s) => (s.NEW = "new", s.LOADING = "loading", s.LOADED = "loaded", s.ERROR = "error", s))(q || {}), ue = /* @__PURE__ */ ((s) => (s.NOT_LOADED = "not-loaded", s.NOT_VISUAL = "not-visual", s.REFRESH = "refresh", s.UP_TO_DATE = "up-to-date", s))(ue || {}), nt = /* @__PURE__ */ ((s) => (s.ESRI = "esri", s.TEXT = "text", s.IMAGE = "image", s.HTML = "html", s.XML = "xml", s.JSON = "json", s.UNKNOWN = "unknown", s))(nt || {}), le = /* @__PURE__ */ ((s) => (s.SYMBOL = "symbol", s.GRID = "grid", s.EXTENT = "extent", s.INITIAL = "initial", s.API = "api", s.PERMANENT = "permanent", s))(le || {}), j = /* @__PURE__ */ ((s) => (s.BoundaryZoom = "boundaryZoom", s.Datatable = "datatable", s.Identify = "identify", s.Metadata = "metadata", s.Opacity = "opacity", s.Refresh = "refresh", s.Reload = "reload", s.Remove = "remove", s.Settings = "settings", s.Symbology = "symbology", s.Visibility = "visibility", s))(j || {});
class Ee {
  attributes;
  geometry;
  style;
  id;
  constructor(e, t, i) {
    this.geometry = e, t ? this.id = t : this.id = ut.sharedUtils.generateUUID(), i ? this.attributes = i : this.attributes = {};
  }
  _hover;
  // TODO event system to be decided
  // _hoverRemoved: Subject<string> = new Subject();
  /** Returns the hovertip for the graphic, if any. */
  get hover() {
    return this._hover;
  }
  /** Adds a hovertip to the graphic. If one already exists, replace it. */
  set hover(e) {
    e && this._hover && this._hover.id !== e.id && this.removeHover(), this._hover = e;
  }
  /** Removes the hovertip from the graphic if it exists. */
  removeHover() {
    this._hover && (this._hover = void 0);
  }
}
class C {
  // --- Maps ---
  static async Basemap(e) {
    const t = await import("@arcgis/core/Basemap");
    return Reflect.construct(t.default, [e]);
  }
  static async Map(e) {
    const t = await import("@arcgis/core/Map");
    return Reflect.construct(t.default, [e]);
  }
  static async MapView(e) {
    const t = await import("@arcgis/core/views/MapView");
    return Reflect.construct(t.default, [e]);
  }
  // --- Layers ---
  static async FeatureLayer(e) {
    const t = await import("@arcgis/core/layers/FeatureLayer");
    return Reflect.construct(t.default, [e]);
  }
  static async GraphicsLayer(e) {
    const t = await import("@arcgis/core/layers/GraphicsLayer");
    return Reflect.construct(t.default, [e]);
  }
  static async ImageryLayer(e) {
    const t = await import("@arcgis/core/layers/ImageryLayer");
    return Reflect.construct(t.default, [e]);
  }
  static async MapImageLayer(e) {
    const t = await import("@arcgis/core/layers/MapImageLayer");
    return Reflect.construct(t.default, [e]);
  }
  static async OpenStreetMapLayer(e) {
    const t = await import("@arcgis/core/layers/OpenStreetMapLayer");
    return Reflect.construct(t.default, [e]);
  }
  static async TileLayer(e) {
    const t = await import("@arcgis/core/layers/TileLayer");
    return Reflect.construct(t.default, [e]);
  }
  static async WMSLayer(e) {
    const t = await import("@arcgis/core/layers/WMSLayer");
    return Reflect.construct(t.default, [e]);
  }
  // --- Utils ---
  static async ArcadeExecutor(e, t) {
    const { createArcadeExecutor: i } = await import("@arcgis/core/arcade");
    return await i(e, t);
  }
  /*
  // This returns pre-canned esri profiles. I don't think we actually want that.
  static async ArcadeProfile(esriKey: string): Promise<__esri.Profile> {
      const { createArcadeProfile } = await import('@arcgis/core/arcade');
      return  createArcadeProfile(esriKey);
  }
  */
  static async ColorBackground(e) {
    const t = await import("@arcgis/core/webmap/background/ColorBackground");
    return Reflect.construct(t.default, [e]);
  }
  static async FeatureFilter(e) {
    const t = await import("@arcgis/core/layers/support/FeatureFilter");
    return Reflect.construct(t.default, [e]);
  }
  static async FieldFromJson(e) {
    return (await import("@arcgis/core/layers/support/Field")).default.fromJSON(e);
  }
  static async Query() {
    const e = await import("@arcgis/core/rest/support/Query");
    return Reflect.construct(e.default, []);
  }
  static async QueryByIds(e, t, i) {
    const { executeForIds: r } = await import("@arcgis/core/rest/query");
    return r(e, t, i);
  }
  static async RendererFromJson(e) {
    const { fromJSON: t } = await import("@arcgis/core/renderers/support/jsonUtils");
    return t(e);
  }
}
class _ {
  /** Well known id. This generally corresponds to an EPSG code or an ESRI wkid number */
  wkid;
  /** Latest well known id. This optional property allows updated wkid values to be leveraged when standards change */
  latestWkid;
  /** Well known type. */
  wkt;
  constructor(e, t) {
    typeof e == "string" ? this.wkt = e : (this.wkid = e, this.latestWkid = t);
  }
  /**
   * Returns the another spatial reference is the same as this one
   *
   * @method isEqual
   * @param {SpatialReference} otherSR spatial reference to compare to
   * @returns {Boolean} result of the comparison
   */
  isEqual(e) {
    return !!(this.isWebMercator() && e.isWebMercator() || this.wkid && e.wkid && this.wkid === e.wkid || this.wkt && e.wkt && this.wkt === e.wkt || this.latestWkid && e.latestWkid && this.latestWkid === e.latestWkid);
  }
  clone() {
    const e = new _("");
    return e.latestWkid = this.latestWkid, e.wkid = this.wkid, e.wkt = this.wkt, e;
  }
  lean() {
    const e = {};
    return this.wkt ? e.wkt = this.wkt : (e.wkid = this.wkid, this.latestWkid && (e.latestWkid = this.latestWkid)), e;
  }
  isWebMercator() {
    const e = [900913, 3587, 54004, 41001, 102113, 102100, 3785];
    return !!(this.wkid && e.includes(this.wkid) || this.latestWkid && e.includes(this.latestWkid));
  }
  /**
   * Returns a spatial reference for Lat Long projection
   *
   * @static
   * @method latLongSR
   * @returns {SpatialReference} the initialized spatial reference
   */
  static latLongSR() {
    return new _(4326);
  }
  /**
   * Returns a spatial ref object from a config typed object
   * @param srObject config spatial reference object
   * @returns spatial reference object with same settings as input
   */
  static fromConfig(e) {
    if (e.wkt)
      return new _(e.wkt);
    if (e.wkid)
      return new _(e.wkid, e.latestWkid);
    throw new Error("Could not parse config spatial reference object");
  }
  /**
   * Parse the typical RAMP formats for spatial references into an RAMP SpatialReference object
   * @param {SpatialReference | string | number} sr can be RAMP SpatialReference, WKID integer, WKT string, or ESPG:#### string
   * @returns {SpatialReference} Spatial Reference object
   */
  static parseSR(e) {
    return e ? e instanceof _ ? e.clone() : typeof e == "string" && e.startsWith("EPSG:") ? new _(parseInt(e.substring(5).trim())) : new _(e) : _.latLongSR();
  }
  static fromESRI(e) {
    if (e.wkt)
      return new _(e.wkt);
    {
      const t = e.toJSON().latestWkid, i = new _(e.wkid);
      return t && (i.latestWkid = t), i;
    }
  }
  toESRI() {
    return new xs(this.lean());
  }
  static fromGeoJSON(e) {
    const t = _.parseGeoJsonCrs(e);
    return t.substring(0, 5) === "EPSG:" ? new _(parseInt(t.slice(5))) : new _(t);
  }
  /**
   * Convert a GeoJSON styled co-ord reference to an EPSG styled string
   * @param {GeoJson.CoordinateReferenceSystem} crs GeoJSON crs object
   * @returns {string} A proj4 friendly projection, in the form EPSG:#### or a WKT
   */
  static parseGeoJsonCrs(e) {
    if (e) {
      if (e.type === "name") {
        const t = /urn:ogc:def:crs:EPSG::(\d+)/, i = e.properties.name, r = i.match(t);
        if (r)
          return "EPSG:" + r[1];
        if (i.substring(0, 7) !== "urn:ogc")
          return i;
      }
    } else return "EPSG:4326";
    return console.error(
      "Encountered unsupported GeoJSON CRS format. Defaulting to lat-long, resuling conversion is likely wrong",
      e
    ), "EPSG:4326";
  }
  // TODO all geoms have optional .crs property.
  //      Since this function will likely be called on every geom in a set,
  //      we may want to have logic to leave it undefined if crs is latlong
  //      also might want to consider various magics for feature sets to remove all the crs
  //      from the geoms and just define once on the feature set.
  //      Tricky because it depends on the orchestrator knowing what the deal is.
  //      As implemented now, it is the safest option, but most bulky
  toGeoJSON() {
    const e = {
      type: "name",
      properties: {
        name: ""
      }
    };
    return this.wkt ? e.properties.name = this.wkt : e.properties.name = "urn:ogc:def:crs:EPSG::" + (this.latestWkid || this.wkid), e;
  }
}
class Je {
  /** Spatial Reference of the geometry */
  sr;
  /** Id of the geometry */
  id;
  constructor(e, t) {
    this.id = e ? e.toString() : "", this.sr = _.parseSR(t);
  }
  /**
   * Returns the type of the geometry object.
   * Function implementation in subclasses.
   */
  get type() {
    return T.UNKNOWN;
  }
  childIdGenerator(e) {
    return `${this.id}-${e}`;
  }
  toESRI() {
    throw new Error(`.toESRI not implemented on geometry type ${this.type}`);
  }
  toGeoJSON() {
    throw new Error(`.toGeoJSON not implemented on geometry type ${this.type}`);
  }
  invalid() {
    return this.type === T.NONE || this.type === T.UNKNOWN;
  }
  geoJsonFactory(e, t) {
    const i = {
      type: e,
      coordinates: t
    };
    return this.sr && (i.crs = this.sr.toGeoJSON()), i;
  }
}
class ze extends Je {
  constructor() {
    super("no_geometry");
  }
  get type() {
    return T.NONE;
  }
}
class K extends Je {
  // storing raw geometry in array format.
  // it will be in native format for geojson and for feeding into other
  // ramp geometry types (i.e. arrays of points like [[x1,y1],[x2,y2]])
  rawArray;
  constructor(e, t, i, r) {
    super(e, t.sr || i), r ? this.rawArray = t.slice() : this.rawArray = K.parseXY(t);
  }
  /** Returns the string 'Point'. */
  get type() {
    return T.POINT;
  }
  get x() {
    return this.rawArray[0];
  }
  set x(e) {
    this.rawArray[0] = e;
  }
  get y() {
    return this.rawArray[1];
  }
  set y(e) {
    this.rawArray[1] = e;
  }
  /**
   * Returns a 2-element array with values x and y (i.e. [x, y])
   */
  toArray() {
    return this.rawArray.slice();
  }
  static parseXY(e) {
    let t;
    if (Array.isArray(e) && e.length === 2)
      t = e;
    else {
      if (e instanceof K)
        return e.toArray();
      t = [e.x, e.y];
    }
    if (isNaN(t[0]) || isNaN(t[1]))
      throw new Error(
        "Unsupported point format detected. Supported formats are two element array of numbers, or object with x and y properties containing numbers"
      );
    return [parseFloat(t[0]), parseFloat(t[1])];
  }
  static fromESRI(e, t) {
    return new K(t, [e.x, e.y], _.fromESRI(e.spatialReference), !0);
  }
  toESRI() {
    return new Es({
      x: this.x,
      y: this.y,
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new K(t, e.coordinates, _.fromGeoJSON(e.crs), !0);
  }
  toGeoJSON() {
    return this.geoJsonFactory(z.POINT, this.toArray());
  }
}
class de extends Je {
  // for now, keeping raw for efficiency (not having object padding around every vertex)
  rawArray;
  constructor(e, t, i, r) {
    super(e, t.sr || i), r ? this.rawArray = de.arrayDeepCopy(t) : t instanceof de ? this.rawArray = t.toArray() : this.rawArray = de.parsePointSet(t);
  }
  /** Returns an array of the contained lines formatted as API Point objects. A new array is returned each time this is called. */
  get pointArray() {
    return this.rawArray.map((e, t) => new K(this.childIdGenerator(t), e, this.sr, !0));
  }
  /** Returns a copy of the n-th contained point. */
  getAt(e) {
    return new K(this.childIdGenerator(e), this.rawArray[e], this.sr, !0);
  }
  /** Will update the n-th contained point with the values of the point parameter. It is assumed the point is in the same spatial reference as the Multipoint */
  updateAt(e, t) {
    this.rawArray[t] = K.parseXY(e);
  }
  /** Returns the number of contained points. */
  get length() {
    return this.rawArray.length;
  }
  // TODO make an .addPoint? .removePoint?
  /**
   * Returns an array of point arrays (e.g. [[x1, y1], [x2, y2]] )
   */
  toArray() {
    return de.arrayDeepCopy(this.rawArray);
  }
  static parsePointSet(e) {
    if (Array.isArray(e)) {
      if (e.length === 0)
        throw new Error("no verticies provided");
      return e.map((t) => K.parseXY(t));
    } else
      throw new Error("Bad geometry input encountered");
  }
  static arrayDeepCopy(e) {
    return e.map((t) => t.slice());
  }
}
class lt extends de {
  constructor(e, t, i, r) {
    super(e, t, i, r);
  }
  /** Returns the string 'MultiPoint'. */
  get type() {
    return T.MULTIPOINT;
  }
  // TODO make an .addPoint? .removePoint?
  static fromESRI(e, t) {
    return new lt(
      t,
      e.points,
      _.fromESRI(e.spatialReference),
      !0
    );
  }
  toESRI() {
    return new As({
      points: this.toArray(),
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new lt(
      t,
      e.coordinates,
      _.fromGeoJSON(e.crs),
      !0
    );
  }
  toGeoJSON() {
    return this.geoJsonFactory(z.MULTIPOINT, this.toArray());
  }
}
class Be extends de {
  constructor(e, t, i, r) {
    if (super(e, t, i, r), this.rawArray.length < 2)
      throw new Error("lines require at least two verticies");
  }
  /** Returns the string 'LineString'. */
  get type() {
    return T.LINESTRING;
  }
  static fromESRI(e, t) {
    return new Be(t, e.paths[0], _.fromESRI(e.spatialReference), !0);
  }
  toESRI() {
    return new Di({
      paths: [this.toArray()],
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new Be(t, e.coordinates, _.fromGeoJSON(e.crs), !0);
  }
  toGeoJSON() {
    return this.geoJsonFactory(z.LINESTRING, this.toArray());
  }
}
class ve extends Je {
  rawArray;
  constructor(e, t, i, r) {
    if (super(e, t.sr || i), r)
      this.rawArray = ve.arrayDeepCopy(t);
    else if (t instanceof ve)
      this.rawArray = t.toArray();
    else if (t instanceof de)
      this.rawArray = [t.toArray()];
    else if (Array.isArray(t)) {
      if (t.length === 0)
        throw new Error("no lines provided");
      this.rawArray = t.map((a) => de.parsePointSet(a));
    } else
      throw new Error("invalid lines format for MulitLineString");
  }
  /** Returns an array of the contained lines formatted as API LineString objects. A new array is returned each time this is called. */
  get lineArray() {
    return this.rawArray.map((e, t) => new Be(this.childIdGenerator(t), e, this.sr, !0));
  }
  /** Returns a copy of the n-th contained line. */
  getAt(e) {
    return new Be(this.childIdGenerator(e), this.rawArray[e], this.sr, !0);
  }
  /** Will update the n-th contained line with the values of the line parameter. It is assumed the line is in the same spatial reference as the Multipoint */
  updateAt(e, t) {
    this.rawArray[t] = de.parsePointSet(e);
  }
  /** Returns the number of contained lines. */
  get length() {
    return this.rawArray.length;
  }
  /** Returns the string 'MultiLineString'. */
  get type() {
    return T.MULTILINESTRING;
  }
  /**
   * Returns an array of line arrays (e.g. [[[x1, y1], [x2, y2]], [[x3, y3], [x4, y4]]] )
   */
  toArray() {
    return ve.arrayDeepCopy(this.rawArray);
  }
  static arrayDeepCopy(e) {
    return e.map((t) => t.map((i) => i.slice()));
  }
  static fromESRI(e, t) {
    return new ve(t, e.paths, _.fromESRI(e.spatialReference), !0);
  }
  toESRI() {
    return new Di({
      paths: this.toArray(),
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new ve(
      t,
      e.coordinates,
      _.fromGeoJSON(e.crs),
      !0
    );
  }
  toGeoJSON() {
    return this.geoJsonFactory(z.MULTILINESTRING, this.toArray());
  }
}
class je extends de {
  constructor(e, t, i, r) {
    if (super(e, t, i, r), je.closeRing(this.rawArray), this.length < 4)
      throw new Error("Linear Ring must have at least 3 distinct vertices.");
  }
  /** Returns the string 'LinearRing'. */
  get type() {
    return T.LINEARRING;
  }
  /** Will update the n-th contained point with the values of the point parameter. It is assumed the point is in the same spatial reference as the Multipoint */
  updateAt(e, t) {
    const i = this.length - 1;
    t === 0 ? super.updateAt(e, i) : t === i && super.updateAt(e, 0), super.updateAt(e, t);
  }
  /**
   * Will inspect an array of verticies. If the last vertex is different than the first vertex,
   * will add a copy of the first vertex to the end, thus closing the line.
   * The array parameter will be modified
   *
   * @param {Array} points An array of 2-element arrays of verticies.
   */
  static closeRing(e) {
    const t = e[0], i = e[e.length - 1];
    (t[0] !== i[0] || t[1] !== i[1]) && e.push(t.slice());
  }
  static fromESRI(e, t) {
    return new je(t, e.rings[0], _.fromESRI(e.spatialReference), !0);
  }
  toESRI() {
    return new ei({
      rings: [this.toArray()],
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new je(t, e.coordinates, _.fromGeoJSON(e.crs), !0);
  }
  toGeoJSON() {
    return this.geoJsonFactory(z.POLYGON, [this.toArray()]);
  }
}
class re extends Je {
  rawArray;
  // from arrays of verticies (i.e. one line) that can be interpreted as a single-ring polygon
  // for now, not allowing these as it increases parsing logic quite a bit.
  // constructor(id: IdDef, polygon: Array<Point>, sr?: SpatialReference)
  // constructor(id: IdDef, polygon: Array<Array<number>>, sr?: SpatialReference)
  // constructor(id: IdDef, polygon: Array<object>, sr?: SpatialReference)
  constructor(e, t, i, r) {
    super(e, t.sr || i), r ? this.rawArray = re.arrayDeepCopy(t) : this.rawArray = re.parsePolygon(t);
  }
  addLinearRings(e) {
    e.forEach((t) => this.rawArray.push(t.toArray()));
  }
  // TODO make a .getAt, .updateAt for rings?
  // TODO make a .removeLinearRings?
  /** Returns an array of the contained rings. A new array is returned each time this is called. */
  get ringArray() {
    return this.rawArray.map((e, t) => new je(this.childIdGenerator(t), e, this.sr, !0));
  }
  /** Returns the string 'Polygon'. */
  get type() {
    return T.POLYGON;
  }
  /**
   * Returns an array of ring arrays (e.g. [[[x1, y1], [x2, y2], [x3, y3], [x1, y1]], [<another ring>]] )
   */
  toArray() {
    return re.arrayDeepCopy(this.rawArray);
  }
  static parsePolygon(e) {
    let t = [];
    if (e instanceof re)
      return e.toArray();
    if (e instanceof ve)
      t = e.toArray();
    else if (e instanceof de)
      t = [e.toArray()];
    else if (Array.isArray(e)) {
      if (e.length === 0)
        throw new Error("no rings provided");
      t = e.map((i) => de.parsePointSet(i));
    } else
      throw new Error("invalid input format for parsePolygon");
    return t.forEach((i) => je.closeRing(i)), t;
  }
  static arrayDeepCopy(e) {
    return e.map((t) => t.map((i) => i.slice()));
  }
  static fromESRI(e, t) {
    return new re(t, e.rings, _.fromESRI(e.spatialReference), !0);
  }
  toESRI() {
    return new ei({
      rings: this.toArray(),
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new re(t, e.coordinates, _.fromGeoJSON(e.crs), !0);
  }
  toGeoJSON() {
    return this.geoJsonFactory(z.POLYGON, this.toArray());
  }
}
class Oe extends Je {
  rawArray;
  constructor(e, t, i, r) {
    super(e, t.sr || i), r ? this.rawArray = Oe.arrayDeepCopy(t) : this.rawArray = Oe.parseMultiPolygon(t);
  }
  addPolygon(e) {
    this.rawArray.push(e.toArray());
  }
  // TODO make a .getAt, .updateAt for polygons?
  // TODO make a .removePolygon?
  /** Returns an array of the contained polygons. A new array is returned each time this is called. */
  get polygonArray() {
    return this.rawArray.map((e, t) => new re(this.childIdGenerator(t), e, this.sr, !0));
  }
  /** Returns the string 'MultiPolygon'. */
  get type() {
    return T.MULTIPOLYGON;
  }
  /**
   * Returns an array of polygon arrays (e.g. [[[[x1, y1], [x2, y2], [x3, y3], [x1, y1]], [<another ring>]], [<another polygon>]] )
   */
  toArray() {
    return Oe.arrayDeepCopy(this.rawArray);
  }
  static parseMultiPolygon(e) {
    if (e instanceof Oe)
      return e.toArray();
    if (e instanceof re)
      return [e.toArray()];
    if (e instanceof ve || e instanceof de)
      return [re.parsePolygon(e)];
    if (Array.isArray(e)) {
      if (e.length === 0)
        throw new Error("no polygons provided");
      return e.map((t) => re.parsePolygon(t));
    } else
      throw new Error("invalid input format for parseMultiPolygon");
  }
  // sing this function definition. epic chorus.
  static arrayDeepCopy(e) {
    return e.map((t) => t.map((i) => i.map((r) => r.slice())));
  }
  static fromESRI(e, t) {
    return new Oe(t, [e.rings], _.fromESRI(e.spatialReference), !0);
  }
  toESRI() {
    const e = [];
    return this.toArray().forEach((t) => {
      t.forEach((i) => e.push(i));
    }), new ei({
      rings: e,
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new Oe(
      t,
      e.coordinates,
      _.fromGeoJSON(e.crs),
      !0
    );
  }
  toGeoJSON() {
    return this.geoJsonFactory(z.MULTIPOLYGON, this.toArray());
  }
}
class F extends Je {
  // doing things a bit different for Extents.
  // tried array of arrays to be consistent with other geometeries, but
  // was more extra coding and overhead of unrequired array
  rawMin;
  rawMax;
  constructor(e, t, i, r) {
    super(e, t.sr || r), this.rawMin = K.parseXY(t), this.rawMax = K.parseXY(i);
  }
  // TODO setters for individul values? classic [x|y][min|max] set
  /** Returns the string 'Extent'. */
  get type() {
    return T.EXTENT;
  }
  get xmin() {
    return this.rawMin[0];
  }
  get ymin() {
    return this.rawMin[1];
  }
  get xmax() {
    return this.rawMax[0];
  }
  get ymax() {
    return this.rawMax[1];
  }
  center() {
    return new K(
      this.id + "_centerPoint",
      [(this.xmax - this.xmin) / 2 + this.xmin, (this.ymax - this.ymin) / 2 + this.ymin],
      this.sr,
      !0
    );
  }
  expand(e) {
    return F.fromESRI(this.toESRI().expand(e), `${this.id}-expanded`);
  }
  clone() {
    return new F(this.id, this.rawMin, this.rawMax, this.sr);
  }
  /**
   * Reports if a point is within the boundary of the extent.
   * For performance reasons, the point must be in the same spatial reference as the extent.
   *
   * @param {Point} testPoint
   * @returns {boolean} if point was within the extent or not
   */
  contains(e) {
    return this.sr.isEqual(e.sr) ? this.xmin <= e.x && this.xmax >= e.x && this.ymin <= e.y && this.ymax >= e.y : (console.error("Extent.contains(point) must have point in same spatial reference as the extent."), !1);
  }
  /**
   * Returns an array of point arrays (e.g. [[x1, y1], [x2, y2]] )
   */
  toArray() {
    return [this.rawMin.slice(), this.rawMax.slice()];
  }
  toPolygonArray() {
    return [
      [
        this.rawMin.slice(),
        [this.xmin, this.ymax],
        this.rawMax.slice(),
        [this.xmax, this.ymin],
        this.rawMin.slice()
      ]
    ];
  }
  toPolygon() {
    return new re(this.id, this.toPolygonArray(), this.sr, !0);
  }
  static fromParams(e, t, i, r, a, o) {
    return new F(e, [t, i], [r, a], o);
  }
  static fromConfig(e, t) {
    return new F(
      e,
      [t.xmin, t.ymin],
      [t.xmax, t.ymax],
      _.fromConfig(t.spatialReference)
    );
  }
  isEqual(e) {
    return e ? this.xmin === e.xmin && this.ymin === e.ymin && this.xmax === e.xmax && this.ymax === e.ymax : !1;
  }
  static fromESRI(e, t) {
    return F.fromParams(
      t,
      e.xmin,
      e.ymin,
      e.xmax,
      e.ymax,
      _.fromESRI(e.spatialReference)
    );
  }
  toESRI() {
    return new yi({
      xmin: this.xmin,
      ymin: this.ymin,
      xmax: this.xmax,
      ymax: this.ymax,
      spatialReference: this.sr.toESRI()
    });
  }
  static fromArcServer(e, t) {
    return F.fromESRI(yi.fromJSON(e), t);
  }
  // TODO for GeoJSON, we are converting to Polygon.
  //      However the spec also supports bbox string
  //      Not sure which is best. Have a second set of to/from functions?
  static fromGeoJSON(e, t) {
    if (e.coordinates.length !== 5)
      throw new Error("Extent expected a four vertex polygon from GeoJSON");
    const i = e.coordinates[0].slice(), r = i.slice();
    return [1, 2, 3].forEach((a) => {
      [0, 1].forEach((o) => {
        const l = e.coordinates[a];
        i[o] > l[o] && (i[o] = l[o]), r[o] < l[o] && (r[o] = l[o]);
      });
    }), new F(t, i, r, _.fromGeoJSON(e.crs));
  }
  toGeoJSON() {
    return this.geoJsonFactory(z.POLYGON, this.toPolygonArray());
  }
}
class Pe {
  c;
  // 4 numbers. R,G,B (0-255), A (0-1). This is ESRI and SVG standard
  constructor(e) {
    if (!e) {
      this.c = [0, 0, 0, 1];
      return;
    }
    if (Array.isArray(e)) {
      const t = e.length;
      if (t < 3 || t > 4) {
        console.error("Invalid colour value array passed to Colour class"), this.c = [0, 0, 0, 1];
        return;
      }
      this.c = e.map((i, r) => r === 3 ? i : parseInt(i)), t === 3 && this.c.push(1);
    } else if (typeof e == "string") {
      const t = e.substring(0, 1) === "#" ? e.substring(1) : e;
      this.c = [0, 2, 4, 6].map((i) => {
        const r = t.substring(i, i + 2);
        return Pe.hexToInt(r);
      });
    } else
      this.c = [e.r, e.g, e.b, e.a ?? 1];
    this.c.forEach((t, i) => {
      t < 0 && (console.error("Negative value passed to colour"), this.c[i] = 0), t > 255 && (console.error("Rotund value passed to colour"), this.c[i] = 255);
    }), this.c[3] > 1 && (this.c[3] = this.c[3] / 255);
  }
  get rgba() {
    return this.c.slice();
  }
  get hex() {
    const e = this.rgba;
    return e[3] = e[3] * 255, `#${e.map((t) => Pe.intToHex(t)).join("")}`;
  }
  get r() {
    return this.c[0];
  }
  get g() {
    return this.c[1];
  }
  get b() {
    return this.c[2];
  }
  get a() {
    return this.c[3];
  }
  toESRI() {
    return new _t(this.rgba);
  }
  toArcServer() {
    return [this.c[0], this.c[1], this.c[2], 255 * this.c[3]];
  }
  static hexToInt(e) {
    return e.length === 0 ? 255 : parseInt(e, 16);
  }
  static intToHex(e) {
    const t = e.toString(16);
    return t.length === 1 ? `0${t}` : t;
  }
}
class ke {
  toOptions() {
    throw new Error(".toOptions called on BaseStyle. Likely was not implemented on subclass.");
  }
  toESRI() {
    throw new Error(".toESRI called on BaseStyle. Likely was not implemented on subclass.");
  }
  // takes any "measurement" type option and converts to points units.
  // numbers === points
  // text number === points
  // text number + 'pt' === points
  // text number + 'px' === pixels, gets converted
  // undefined === undefined
  // empty string === undefined
  static convToPoints(e) {
    if (!(typeof e > "u"))
      if (typeof e == "string") {
        let t;
        const i = e.length;
        if (i === 0)
          return;
        const r = e.substring(i - 2);
        return r === "px" ? t = parseFloat(e.substring(0, i - 2)) * 1.333333 : r === "pt" ? t = parseFloat(e.substring(0, i - 2)) : t = parseFloat(e), t;
      } else
        return e;
  }
}
class Ge extends ke {
  _height;
  _xOffset;
  _yOffset;
  _icon;
  _width;
  _size;
  _colour;
  _style;
  _outline;
  _path;
  _angle;
  constructor(e) {
    if (e = e || { style: $e.CIRCLE }, super(), this._style = e.style || $e.CIRCLE, e.style === $e.ICON) {
      const t = e;
      this._icon = t.icon || "", this._height = ke.convToPoints(t.height) || 16.5, this._width = ke.convToPoints(t.width) || 16.5, this._size = 0, this._colour = new Pe(), this._outline = new Te(), this._path = "";
    } else {
      const t = e;
      this._size = ke.convToPoints(t.size) || 12, this._colour = new Pe(t.colour ?? "#ffffff40"), this._outline = new Te(t.outline), this._path = this._style === $e.PATH && t.path || "", this._height = 0, this._width = 0, this._icon = "";
    }
    this._xOffset = ke.convToPoints(e.xOffset) || 0, this._yOffset = ke.convToPoints(e.yOffset) || 0, this._angle = e.angle || 0;
  }
  /** Returns the specified colour */
  get colour() {
    return this.propGrouse(!1), this._colour;
  }
  /** Returns the specified style type */
  get styleType() {
    return this._style;
  }
  /** Returns the specified width */
  get width() {
    return this.propGrouse(!0), this._width;
  }
  /** Returns the specified height */
  get height() {
    return this.propGrouse(!0), this._height;
  }
  /** Returns the specified size, in points units (not pixels) */
  get size() {
    return this.propGrouse(!1), this._size;
  }
  /** Returns the specified x offset */
  get xOffset() {
    return this._xOffset;
  }
  /** Returns the specified y offset */
  get yOffset() {
    return this._yOffset;
  }
  /** Returns the specified angle, in degrees */
  get angle() {
    return this._angle;
  }
  /** Returns the specified icon. Can be image url, svg image */
  get icon() {
    return this.propGrouse(!0), this._icon;
  }
  /** Returns the outline style */
  get outline() {
    return this.propGrouse(!1), this._outline;
  }
  /** Returns the SVG path */
  get path() {
    return this.propGrouse(!1), this._path;
  }
  propGrouse(e) {
    this._style === $e.ICON !== e && console.warn(`Accessed a point style property that is invalid for the style type ${this._style}`);
  }
  toOptions() {
    const e = {
      style: this.styleType,
      yOffset: this.yOffset,
      xOffset: this.xOffset,
      angle: this.angle
    };
    return this._style === $e.ICON ? {
      ...e,
      icon: this.icon,
      width: this.width,
      height: this.height
    } : {
      ...e,
      size: this.size,
      colour: this.colour.hex,
      path: this.path
    };
  }
  toESRI() {
    let e;
    return this.styleType === $e.ICON ? Ge.isImageUrl(this.icon) ? (e = new _s(), e.url = this.icon, e.width = this.width, e.height = this.height, e.xoffset = this.xOffset, e.yoffset = this.yOffset, e.angle = this.angle) : (e = new Ht(), e.color = new _t(this.colour.rgba), e.size = this.width, e.xoffset = this.xOffset, e.yoffset = this.yOffset, e.angle = this.angle) : (e = new Ht(), e.color = new _t(this.colour.rgba), e.size = this.size, e.xoffset = this.xOffset, e.yoffset = this.yOffset, e.angle = this.angle, e.path = this.path, e.style = this.styleType, e.outline = this.outline.toESRI()), e;
  }
  static fromESRI(e) {
    const t = {
      xOffset: e.xoffset,
      yOffset: e.yoffset,
      angle: e.angle
    };
    if (e.type === "simple-marker") {
      const i = t;
      i.style = e.style, i.colour = e.color.toRgba(), i.size = e.size, i.path = e.path, i.outline = Te.fromESRI(e.outline).toOptions();
    } else {
      const i = t;
      i.style = $e.ICON, i.width = e.width, i.height = e.height, i.icon = e.url;
    }
    return new Ge(t);
  }
  static fromArcServer(e) {
    return Ge.fromESRI(ti(e));
  }
  /**
   * Check to see if text provided is a valid image / data URL based on extension type or format.
   *
   * @function isImageUrl
   * @param {String} text                      string to be matched against valid image types / data url format
   * @returns {Boolean}                        true if valid image extension
   */
  static isImageUrl(e) {
    return !!e.match(/\.(jpeg|jpg|gif|png|swf|svg)$/) || !!e.match(
      /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+\=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
    );
  }
}
class Te extends ke {
  _style;
  _width;
  _miter;
  _cap;
  _join;
  _colour;
  constructor(e) {
    e = e || {}, super(), this._style = e.style || ce.SOLID;
    const t = ke.convToPoints(e.width);
    this._width = typeof t > "u" || t < 0 ? 0.75 : t, this._colour = new Pe(e.colour), this._miter = e.miter ?? 2, this._cap = e.cap || Vi.ROUND, this._join = e.join || Bi.ROUND;
  }
  /** Returns the specified style type (e.g. solid, dashed, dotted) */
  get styleType() {
    return this._style;
  }
  /** Returns the specified width */
  get width() {
    return this._width;
  }
  /** Returns the specified colour */
  get colour() {
    return this._colour;
  }
  /** Returns the specified miter limit */
  get miter() {
    return this._miter;
  }
  /** Returns the specified line cap style */
  get cap() {
    return this._cap;
  }
  /** Returns the specified line join style */
  get join() {
    return this._join;
  }
  toOptions() {
    return {
      style: this.styleType,
      width: this.width,
      colour: this.colour.hex,
      miter: this.miter,
      cap: this.cap,
      join: this.join
    };
  }
  toESRI() {
    const e = new Ls();
    return e.width = this.width, e.color = this.colour.toESRI(), e.style = this.styleType, e.cap = this.cap, e.miterLimit = this.miter, e.join = this.join, e;
  }
  static fromESRI(e) {
    const t = {
      width: e.width,
      colour: e.color.toRgba(),
      style: e.style
    };
    return new Te(t);
  }
  static fromArcServer(e) {
    return Te.fromESRI(ti(e));
  }
}
class yt extends ke {
  _outlineStyle;
  _fillColour;
  _fillStyle;
  constructor(e) {
    super(), e = e || {}, e.fill || (e.fill = {}), this._fillColour = new Pe(e.fill.colour), this._fillStyle = e.fill.style || zi.SOLID, this._outlineStyle = new Te(e.outline);
  }
  /** Returns the specified colour */
  get fillColour() {
    return this._fillColour;
  }
  /** Returns the fill style type (solid, transparent, hatching, etc) */
  get fillStyleType() {
    return this._fillStyle;
  }
  /** Returns the outline style */
  get outline() {
    return this._outlineStyle;
  }
  toOptions() {
    return {
      fill: {
        style: this.fillStyleType,
        colour: this.fillColour.hex
      },
      outline: this.outline.toOptions()
    };
  }
  toESRI() {
    const e = this.outline.toESRI(), t = new _t(this.fillColour.rgba), i = new Ts();
    return i.style = this.fillStyleType, i.color = t, i.outline = e, i;
  }
  static fromESRI(e) {
    const t = {
      fill: {
        colour: e.color.toRgba(),
        style: e.style
      },
      outline: Te.fromESRI(e.outline).toOptions()
    };
    return new yt(t);
  }
  static fromArcServer(e) {
    return yt.fromESRI(ti(e));
  }
}
class Gs {
  // expose our common classes, so they can be grabbed from iApi.geo.geom easily
  Extent = F;
  Graphic = Ee;
  // Hover = Hover;
  LineString = Be;
  LineStyle = Te;
  LinearRing = je;
  MultiLineString = ve;
  MultiPoint = lt;
  MultiPolygon = Oe;
  Point = K;
  PointStyle = Ge;
  Polygon = re;
  PolygonStyle = yt;
  SpatialReference = _;
  /**
   * Convert an ESRI map click event object to a generic RAMPish map click event object
   *
   * @param {ViewClickEvent | ViewDoubleClickEvent} esriMapClick an event param from an esri 2D map click or double-click event
   * @param {String | Number} [id] optional id for the map point geometry on the result
   * @returns {MapClick} a generic bundle of data matching a subset of the incoming esri data
   */
  esriMapClickToRamp(e, t) {
    return {
      mapPoint: K.fromESRI(e.mapPoint, t),
      screenX: e.x,
      screenY: e.y,
      button: e.button,
      input: e.native.pointerType,
      clickTime: e.timestamp
    };
  }
  /**
   * Convert an ESRI map click event object to a generic RAMPish map click event object
   *
   * @param {ViewPointerMoveEvent} esriMapMove an event param from an esri 2D map click or double-click event
   * @returns {MapMove} a generic bundle of data matching a subset of the incoming esri data
   */
  esriMapMouseToRamp(e) {
    return {
      screenX: e.x,
      screenY: e.y,
      button: e.button,
      moveTime: e.timestamp
    };
  }
  /**
   * Converts any RAMP API geometry to a corresponding ESRI geometry
   *
   * @param {BaseGeometry} rampApiGeom a RAMP API geometry
   * @returns {Geometry} an ESRI geometry
   */
  geomRampToEsri(e) {
    return e.toESRI();
  }
  /**
   * Converts any ESRI geometry to a corresponding RAMP API geometry
   *
   * @param {Geometry} esriGeometry an ESRI geometry
   * @param {String | Number} [id] optional id for the result geometry
   * @returns {BaseGeometry} a RAMP API geometry
   */
  geomEsriToRamp(e, t) {
    switch (e.type) {
      case "point":
        return K.fromESRI(e, t);
      case "polyline": {
        const i = e;
        return i.paths.length === 1 ? Be.fromESRI(i, t) : ve.fromESRI(i, t);
      }
      case "polygon":
        return re.fromESRI(e, t);
      case "extent":
        return F.fromESRI(e, t);
      case "multipoint":
        return lt.fromESRI(e, t);
      default:
        throw new Error(`Encountered unhandled geometry type ${e.type}`);
    }
  }
  /**
   * Converts any GeoJson geometry to a corresponding RAMP API geometry
   *
   * @param {GeoJson.DirectGeometryObject} geoJsonGeometry a GeoJson geometry
   * @param {String | Number} [id] optional id for the result geometry
   * @returns {BaseGeometry} a RAMP API geometry
   */
  geomGeoJsonToRamp(e, t) {
    switch (e.type) {
      case z.POINT:
        return K.fromGeoJSON(e, t);
      case z.LINESTRING:
        return Be.fromGeoJSON(e, t);
      case z.POLYGON:
        return re.fromGeoJSON(e, t);
      case z.MULTIPOINT:
        return lt.fromGeoJSON(e, t);
      case z.MULTILINESTRING:
        return ve.fromGeoJSON(e, t);
      case z.MULTIPOLYGON:
        return Oe.fromGeoJSON(e, t);
      default:
        throw new Error(`Encountered unhandled geometry type ${e.type}`);
    }
  }
  /**
   * Converts any RAMP API geometry to a corresponding GeoJson geometry
   *
   * @param {BaseGeometry} geoJsonGeometry a RAMP API geometry
   * @returns {GeoJson.DirectGeometryObject} a GeoJson geometry
   */
  geomRampToGeoJson(e) {
    return e.toGeoJSON();
  }
  /**
   * Converts any RAMP API Graphic to a GeoJson Feature. Any styles or ids will be excluded from the result.
   *
   * @param {Graphic} rampGraphic a RAMP API graphic
   * @returns {any} a GeoJson Feature
   */
  graphicRampToGeoJson(e) {
    const t = {}, i = {
      type: "Feature",
      geometry: this.geomRampToGeoJson(e.geometry),
      properties: t
    };
    return Object.keys(e.attributes).forEach((r) => i.properties[r] = e.attributes[r]), i;
  }
  /**
   * Converts any GeoJson Feature to a RAMP API Graphic
   *
   * @param {any} geoJsonFeature a GeoJson Feature
   * @param {number | string } [geomId] an id to apply to the geometry of the graphic
   * @returns {Graphic} a RAMP API Graphic
   */
  graphicGeoJsonToRamp(e, t) {
    if (e.type !== "Feature")
      throw new Error("Expected input parameter of graphicGeoJsonToRamp to be a GeoJson feature");
    const i = this.geomGeoJsonToRamp(e.geometry, t), r = {};
    return Object.keys(e.properties.forEach((o) => r[o] = e.properties[o])), new Ee(i, "", r);
  }
  /**
   * Converts any RAMP API Graphic to an ESRI Graphic
   * @param {Graphic} rampGraphic a RAMP API Graphic
   * @returns {EsriGraphic} an ESRI Graphic
   */
  graphicRampToEsri(e) {
    const t = {
      attributes: {},
      id: e.id
    };
    return t.geometry = this.geomRampToEsri(e.geometry), Object.keys(e.attributes).forEach((i) => t.attributes[i] = e.attributes[i]), e.style && (t.symbol = this.styleRampToEsri(e.style)), new Is(t);
  }
  styleRampToEsri(e) {
    return e.toESRI();
  }
  styleEsriToRamp(e) {
    switch (e.type) {
      case "picture-marker":
      case "simple-marker":
        return Ge.fromESRI(e);
      case "simple-line":
        return Te.fromESRI(e);
      case "simple-fill":
        return yt.fromESRI(e);
      default:
        return console.error(`Unsupported ESRI symbol type encountered: ${e.type}`), new Ge();
    }
  }
  // converts an arcgis server geometry type to ramp geometry type
  serverGeomTypeToRampGeomType(e) {
    if (!e)
      return T.NONE;
    switch (e) {
      case "esriGeometryPolygon":
        return T.POLYGON;
      case "esriGeometryPolyline":
        return T.LINESTRING;
      case "esriGeometryPoint":
        return T.POINT;
      case "esriGeometryMultipoint":
        return T.MULTIPOINT;
      case "esriGeometryEnvelope":
        return T.EXTENT;
      default:
        return console.error(`Unrecognized server geometry type encountered: ${e}`), T.UNKNOWN;
    }
  }
  // converts an esri client geometry type to ramp geometry type
  clientGeomTypeToRampGeomType(e) {
    if (!e)
      return T.NONE;
    switch (e) {
      case "polygon":
        return T.POLYGON;
      case "polyline":
        return T.LINESTRING;
      case "point":
        return T.POINT;
      case "multipoint":
        return T.MULTIPOINT;
      default:
        return console.error(`Unrecognized client geometry type encountered: ${e}`), T.UNKNOWN;
    }
  }
  // converts a geojson geometry type to an esri geometry type that can support it
  geoJsonGeomTypeToEsriGeomType(e) {
    switch (e) {
      case z.POINT:
        return "point";
      case z.LINESTRING:
      case z.MULTILINESTRING:
        return "polyline";
      case z.POLYGON:
      case z.MULTIPOLYGON:
        return "polygon";
      case z.MULTIPOINT:
        return "multipoint";
      default:
        throw new Error(`Encountered unhandled geometry type ${e}`);
    }
  }
  /**
   * Check to see if text provided is a valid image / data URL based on extension type or format.
   *
   * @function isImageUrl
   * @param {String} text                      string to be matched against valid image types / data url format
   * @returns {Boolean}                        true if valid image extension
   */
  isImageUrl(e) {
    return Ge.isImageUrl(e);
  }
}
class Lt {
  layerIdx;
  name;
  children;
  uid;
  isRoot;
  constructor(e, t, i = "", r = !0) {
    this.layerIdx = e, this.name = i, this.isRoot = r, this.children = [], this.uid = t;
  }
  // returns a tree node in the tree that has the given uid.
  // returns undefined if nothing found
  findChildByUid(e) {
    if (this.uid === e)
      return this;
    {
      let t;
      return this.children.some((i) => t = i.findChildByUid(e)), t;
    }
  }
  // returns a tree node in the tree that has the given layer index.
  // returns undefined if nothing found
  findChildByIdx(e) {
    if (this.layerIdx === e)
      return this;
    {
      let t;
      return this.children.some((i) => t = i.findChildByIdx(e)), t;
    }
  }
  /**
   * Returns whether this node is bound to a logical layer.
   *
   * @method isLogicalLayer
   * @returns {boolean} true if the layer is bound to a logical layer.
   */
  get isLogicalLayer() {
    return this.layerIdx > -1 && this.children.length === 0;
  }
  /**
   * Returns whether this node is a root node.
   *
   * @method isLayerRoot
   * @returns {boolean} true if this node is a root node for this layer.
   */
  get isLayerRoot() {
    return this.isRoot;
  }
}
class qi {
  minScale;
  maxScale;
  constructor(e = 0, t = 0) {
    this.minScale = e, this.maxScale = t;
  }
  /**
   * Indicates if the feature class is not visible at the given scale,
   * and if so, if we need to zoom in to see it or zoom out
   *
   * @function isOffScale
   * @param {Integer}  mapScale the scale to test against
   * @returns {Object} has boolean properties `offScale` and `zoomIn`
   */
  isOffScale(e) {
    const t = {
      offScale: !1,
      zoomIn: !1
    };
    return e < this.maxScale && this.maxScale !== 0 ? (t.offScale = !0, t.zoomIn = !1) : e > this.minScale && this.minScale !== 0 && (t.offScale = !0, t.zoomIn = !0), t;
  }
}
class ji {
  // Handles state and result caches for data filters on feature classes.
  // Instances of this class are private within layers, so any public facing calls or event
  // raising is done at the layer level.
  sql;
  // object mapping string to string
  cache;
  // object mapping string to promise of array of ints
  extent;
  constructor(e = "", t = "") {
    this.sql = {
      [le.PERMANENT]: e,
      [le.INITIAL]: t
    }, this.extent = void 0, this.cache = {};
  }
  /**
   * Returns list of filter keys that have active filters
   *
   * @method sqlActiveFilters
   * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
   * @returns {Array} list of filter keys with active filter sql
   */
  sqlActiveFilters(e = []) {
    const t = this.sql, i = Object.keys(t).filter((r) => t[r]);
    return e.length === 0 ? i : i.filter((r) => e.indexOf(r) === -1);
  }
  /**
   * Indicates if any filters are active. A Permanent filter does not influence the result.
   *
   * @method isActive
   * @returns {Boolean} indicates if any non-permanent filters are active
   */
  isActive() {
    return this.sqlActiveFilters([le.PERMANENT]).length > 0;
  }
  /**
   * Returns a SQL WHERE condition that is combination of active filters.
   *
   * @method getCombinedSql
   * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
   * @returns {String} all non-excluded sql statements connected with AND operators.
   */
  getCombinedSql(e = []) {
    const t = this.sqlActiveFilters(e), i = t.length;
    return i === 0 ? "" : i === 1 ? this.sql[t[0]] : t.map((r) => `(${this.sql[r]})`).join(" AND ");
  }
  /**
   * Updates a SQL filter clause.
   *
   * @method setSql
   * @param {String} filterKey key of the filter to update (can be a new value)
   * @param {String} whereClause clause defining the active filters on symbols. Use '' for no filter. Use '1=2' for everything filtered.
   */
  setSql(e, t) {
    e === le.PERMANENT ? console.error("Attempted to overwrite a permanent filter. Not allowed.") : (this.sql[e] = t, this.clearCacheSet(e));
  }
  /**
   * Returns current SQL for a filter key
   *
   * @method getSql
   * @param {String} filterKey key string indicating what filter the sql belongs to
   * @returns {String} the SQL, if any, that matches the filter type
   */
  getSql(e) {
    return this.sql[e] || "";
  }
  /**
   * Registers a new extent for cache tracking.
   *
   * @method setExtent
   * @param {Extent} extent the extent to filter against
   */
  setExtent(e) {
    e.isEqual(this.extent) || (this.extent = e, this.clearCacheSet(le.EXTENT));
  }
  /**
   * Returns cache key depending on the situation we are in.
   *
   * @method getCacheKey
   * @private
   * @param {Array} sqlFilters list of filter keys influencing this cache
   * @param {Boolean} includeExtent if the cache includes extent based filters
   * @returns {String} the cache key to use
   */
  getCacheKey(e, t) {
    return `_cache$${e.sort().join("$")}${t ? "$" + le.EXTENT : ""}$`;
  }
  /**
   * Returns cache for a specific filtering scenario.
   *
   * @method getCache
   * @param {Array} sqlFilters list of filter keys influencing this cache
   * @param {Boolean} includeExtent if the cache includes extent based filters
   * @returns {Promise} resolves in a filter result appropriate for the parameters. returns undefined if no cache exists.
   */
  getCache(e, t) {
    const i = this.getCacheKey(e, t);
    return this.cache[i];
  }
  /**
   * Sets a filter query in a cache, so repeated identical requests will only hit the server once
   *
   * @method setCache
   * @param {Promise} queryPromise the query we want to cache
   * @param {Array} sqlFilters list of filter keys influencing this cache
   * @param {Boolean} includeExtent if the cache includes extent based filters
   */
  setCache(e, t, i) {
    const r = this.getCacheKey(t, i);
    this.cache[r] = e;
  }
  /**
   * Returns list of cache keys that have caches
   *
   * @method cacheActiveKeys
   * @returns {Array} list of cache keys with active caches
   */
  cacheActiveKeys() {
    const e = this.cache;
    return Object.keys(e).filter((t) => e[t]);
  }
  /**
   * Resets all internal caches.
   *
   * @method clearAllCaches
   */
  clearAllCaches() {
    this.cache = {};
  }
  /**
   * Resets all internal caches related to a filter.
   *
   * @method clearCacheSet
   * @param {String} filterName filter that has changed and needs its caches wiped
   */
  clearCacheSet(e) {
    this.cacheActiveKeys().forEach((t) => {
      t.indexOf(`$${e}$`) > -1 && delete this.cache[t];
    });
  }
  /**
   * Resets all internal filter settings to have no filter applied.
   *
   * @method clearAll
   */
  clearAll() {
    this.sql = { [le.PERMANENT]: this.sql[le.PERMANENT] }, this.extent = void 0, this.clearAllCaches();
  }
}
class gt {
  id;
  sr;
  _defaultExtent;
  _fullExtent;
  _maximumExtent;
  constructor(e, t, i = void 0, r = void 0) {
    this.id = e, this.sr = t.sr.clone(), this._defaultExtent = t.clone(), this._fullExtent = i?.clone(), this._maximumExtent = r?.clone(), i && !i.sr.isEqual(this.sr) && console.error(`Full extent provided in extent set has a mismatching spatial reference: ${i.sr}`), r && !r.sr.isEqual(this.sr) && console.error(
      `Maximum extent provided in extent set has a mismatching spatial reference: ${r.sr}`
    );
  }
  get defaultExtent() {
    return this._defaultExtent;
  }
  set defaultExtent(e) {
    this._defaultExtent = e.clone();
  }
  /**
   * @return {Extent} the full extent (returns default extent if not provided)
   */
  get fullExtent() {
    return this._fullExtent ? this._fullExtent : this.defaultExtent;
  }
  set fullExtent(e) {
    this._fullExtent = e.clone();
  }
  /**
   * @return {Extent} the maximum extent (returns full extent if not provided)
   */
  get maximumExtent() {
    return this._maximumExtent ? this._maximumExtent : this.fullExtent;
  }
  set maximumExtent(e) {
    this._maximumExtent = e.clone();
  }
  /**
   * Parses a RAMP API Extent Set config into an ExtentSet object
   * @param {RampExtentSetConfig} extentSetConfig the extent set config
   * @returns {ExtentSet} the parsed ExtentSet object
   */
  static fromConfig(e) {
    return new gt(
      e.id,
      F.fromConfig(`${e.id}-extent-default`, e.default),
      e.full !== void 0 ? F.fromConfig(`${e.id}-extent-full`, e.full) : void 0,
      e.maximum !== void 0 ? F.fromConfig(`${e.id}-extent-maximum`, e.maximum) : void 0
    );
  }
  clone() {
    return new gt(this.id, this._defaultExtent, this._fullExtent, this._maximumExtent);
  }
}
class H {
  realPromise;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resolveMe(e) {
  }
  rejectMe() {
  }
  getPromise() {
    return this.realPromise;
  }
  constructor() {
    this.realPromise = new Promise((e, t) => {
      this.resolveMe = (i) => {
        e(i);
      }, this.rejectMe = t;
    });
  }
}
class Us {
  /**
   * Get a 'good enough' uuid. For backup purposes if client does not supply its own
   * unique layer id
   *
   * @method  generateUUID
   * @returns {String} a uuid
   */
  generateUUID() {
    let e = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
      const i = (e + Math.random() * 16) % 16 | 0;
      return e = Math.floor(e / 16), (t === "x" ? i : i & 3 | 8).toString(16);
    });
  }
  // TODO see who is using this. Should it be somewhere more specific?
  /**
   * Convert an image to a canvas element
   *
   * @param {String} url image url to convert (result from the esri print task)
   * @param {Object} canvas [optional = undefined] canvas to draw the image upon; if not supplied, a new canvas will be made
   * @param {Boolean} crossOrigin [optional = true] when set, tries to fetch an image with crossOrigin = anonymous
   * @return {Promise} conversion promise resolving into a canvas of the image
   */
  convertImageToCanvas(e, t, i = !0) {
    const r = t ?? document.createElement("canvas"), a = document.createElement("img");
    i && (a.crossOrigin = "anonymous");
    const o = new Promise((l, n) => {
      a.addEventListener("load", () => {
        r.width = a.width, r.height = a.height, r.getContext("2d")?.drawImage(a, 0, 0), l(r);
      }), a.addEventListener("error", (c) => n(c));
    });
    return a.src = e, o;
  }
  /**
   * Loads an image (as crossing) and converts it to dataURL. If a supplied imageUri is already a dataURL, just return it.
   * If an image fails to load with the crossing attribute, return the original imageUri
   *
   * @function convertImagetoDataURL
   * @param {String} imageUri url of the image to load and convert
   * @param {String} imageType [optional = 'image/png'] format of the image representation
   * @return {Promise} promise resolving with the dataURL of the image
   */
  async convertImagetoDataURL(e, t = "image/png") {
    return e.startsWith("data") ? e : this.convertImageToCanvas(e).then((i) => i.toDataURL(t)).catch((i) => (console.error("Failed to load crossorigin image", e, i), e));
  }
  /**
   * Splits an indexed map server url into an object with .rootUrl and .index
   * properties.
   *
   * @function parseUrlIndex
   * @param  {String} url    an indexed map server url
   * @returns {Object}  the url split into the server root and the index.
   */
  parseUrlIndex(e) {
    const t = {
      rootUrl: e,
      index: 0
    }, i = /\/(\d+)\/?$/, r = e.match(i);
    if (r) {
      const a = r[1];
      t.index = isNaN(parseInt(a)) ? void 0 : parseInt(a), t.rootUrl = e.substr(0, e.length - r[0].length);
    } else
      console.warn("Cannot extract layer index from url " + e);
    return t;
  }
  /**
   * Determines whether the provided control is enabled for the bound layer, based on the config provided
   * @param control the control we want to determine the availability of
   * @param config an object containing information regarding enabled/disabled controls for the bound layer
   * @returns whether the control is available
   */
  controlAvailable(e, t) {
    return t?.disabledControls?.includes(e) ? !1 : t?.controls ? t?.controls?.includes(e) : !0;
  }
}
class Rt {
  _url;
  _base;
  _query;
  _queryMap = {};
  constructor(e) {
    this._url = e, [this._base, this._query] = e.split("?").concat(""), this._queryMap = this._query.split("&").reduce((t, i) => {
      const [r, a] = i.split("=");
      return t[r] = a, t;
    }, {});
  }
  get query() {
    return this._query;
  }
  get base() {
    return this._base;
  }
  get queryMap() {
    return this._queryMap;
  }
  /**
   * Updates the query part of the url with passed in values.
   *
   * For example:
   *  - orginal url: http://example?flag=red&demohell=true
   *  - queryMapUpdate: {
   *     flag: undefined,
   *     demohell: false,
   *     acid: cat
   * }
   * - resulting url: http://example?demohell=false&acid=cat
   *
   *
   * @param {UrlQueryMap} queryMapUpdate an object of values to be added or replaced on the query of the url; if any values are undefined, their corresponding keys will be removed from the query.
   * @returns {string} updated url
   * @memberof UrlWrapper
   */
  updateQuery(e) {
    const t = Gi.all([{}, this.queryMap, e]);
    return `${this.base}${Object.entries(t).filter(([, r]) => r !== void 0).map(([r, a], o) => `${o === 0 ? "?" : ""}${r}=${a}`).join("&")}`;
  }
}
const Bs = "EPSG:4326";
class Vs {
  espgWorker;
  constructor() {
    this.espgWorker = this.defaultEpsgLookup, ne.defs(
      "EPSG:3978",
      "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
    ), ne.defs(
      "EPSG:3979",
      "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
    ), ne.defs("EPSG:54004", "+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"), ne.defs("EPSG:102100", ne.defs("EPSG:3857")), ne.defs(
      "EPSG:102187",
      "+proj=tmerc +lat_0=0 +lon_0=-114 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
    ), ne.defs(
      "EPSG:102190",
      "+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
    );
    let e = 1;
    for (; e <= 60; ) {
      const t = e < 10 ? `0${e}` : e;
      ne.defs(`EPSG:326${t}`, `+proj=utm +zone=${e} +ellps=WGS84 +datum=WGS84 +units=m +no_defs`), e++;
    }
  }
  /**
   * Add a projection definition.
   * @param {number | string} code the projection code to add.
   * @param {string} proj4formula the formula for the projection.
   */
  addProjection(e, t) {
    e = typeof e == "number" ? `EPSG:${e}` : e, ne.defs(e, t);
  }
  // default for lazyness. uses official epsg website, hardcoded for extra style points.
  defaultEpsgLookup(e) {
    const t = /urn:ogc:def:crs:EPSG::(\d+)/, i = /EPSG:(\d+)/, r = String(e).match(t) || String(e).match(i) || [];
    if (r.length < 2)
      throw new Error("Invalid code provided.");
    return new Promise((a, o) => {
      const l = `https://epsg.io/${r[1]}.proj4`;
      Ve(l, {
        responseType: "text"
      }).then(
        (u) => {
          u.data ? a(u.data) : o();
        },
        (u) => {
          o(u);
        }
      );
    });
  }
  /**
   * Fetch a projection string from an EPSG service
   * @param { String | Number } code an EPSG projection code to look up
   * @returns { Promise<String> } resolves with proj4 projection string, or rejects if not found
   */
  epsgLookup(e) {
    return this.espgWorker(e);
  }
  /**
   * Provide an alternate lookup function to find proj4 projection strings based off EPSG codes. Be aware this setting
   * is page-wide, and will impact any instance of RAMP running.
   * Function signature should be `f(code: string | number): Promise<string>`.
   * The function should be able to parse codes that are
   * - just the integer part of an EPSG code (e.g. 1234)
   * - a string in EPSG format (e.g. 'EPSG:1234')
   * - a string in URN format (e.g. 'urn:ogc:def:crs:EPSG::1234')
   * @param lookupFunction
   */
  setEpsgLookup(e) {
    this.espgWorker = e;
  }
  /**
   * Convert a projection to an string that is compatible with proj4.  If it is an SpatialReference or an integer it will be converted.
   * @param {SpatialReference|Integer|String} proj an SpatialReference, integer or string.  Strings will be unchanged and unchecked,
   * ints and SpatialReference objects will be converted.
   * @return {String} A proj4 friendly projection, in the form EPSG:#### or a WKT
   */
  normalizeProj(e) {
    if (typeof e == "object") {
      if (e.wkid)
        return "EPSG:" + e.wkid;
      if (e.wkt)
        return e.wkt;
    } else {
      if (typeof e == "number")
        return "EPSG:" + e;
      if (typeof e == "string")
        return e;
    }
    throw new Error("Bad argument type, please provide a string, integer or SpatialReference object.");
  }
  /**
   * Check whether or not a spatialReference is supported by proj4 library. Attempt to load from epsg source if not.
   *
   * @param {SpatialReference | string | number} spatialReference to be checked to see if it's supported by proj4. Can be ESRI SR object, WKID integer, EPSG string or WKT.
   * @returns {Promise<boolean>} true if proj was defined or was able to download definition. false if out of luck
   */
  async checkProj(e) {
    let t, i = "";
    try {
      t = this.normalizeProj(e);
    } catch {
      return !1;
    }
    if (!t.startsWith("EPSG:"))
      return !0;
    typeof e == "object" && e.latestWkid && (i = this.normalizeProj(e.latestWkid));
    const r = (n, c) => {
      n !== c && ne.defs(c, ne.defs(n));
    };
    if (ne.defs(t))
      return !0;
    if (i && ne.defs(i))
      return r(i, t), !0;
    const a = async (n) => {
      try {
        const c = await this.epsgLookup(n);
        return c === null || c === "" ? !1 : (ne.defs(n, c), !0);
      } catch {
        return !1;
      }
    };
    return await (i ? a(i) : Promise.resolve(!1)) ? (r(i, t), !0) : a(t);
  }
  /**
   * Utility for checking a set of spatial references, rejects if one cannot be used
   *
   * @param {Array<SpatialReference | string | number>} spatialReferences set of Spatial references to be checked. Can be ESRI SR object, WKID integer, EPSG string or WKT.
   * @returns {Promise<void>} resolves after all references succeed the check. rejects if any test fails.
   */
  async checkProjBomber(e) {
    if (e.length > 0) {
      const t = e.pop();
      if (await this.checkProj(t))
        return this.checkProjBomber(e);
      throw console.error("Unable to parse or locate projection information for this item:", t), new Error("Could not find projection information, see console for details");
    }
  }
  /**
   * Reproject a GeoJSON object in place.
   * Note the .crs of the object will not be updated or corrected.
   * Valid formats for the spatial reference parameters are: RAMP SpatialReference, WKID number,
   * WKT string, or EPSG:#### string
   *
   * @param {Object} geojson the GeoJSON to be reprojected, this will be modified in place
   * @param {SpatialReference | String | Number} inputSR spatial reference of the GeoJSON. If missing it will attempt to use any crs data in the GeoJSON, defaulting to Lat Long.
   * @param {SpatialReference | String | Number} outputSR spatial reference to project to. If missing, will use Lat Long.
   * @returns {Promise<Object>} resolves with projected geoJson
   */
  async projectGeoJson(e, t, i) {
    let r, a;
    if (t ? r = this.normalizeProj(t) : r = _.parseGeoJsonCrs(e.crs), i ? a = this.normalizeProj(i) : a = Bs, a === r)
      return e;
    await this.checkProjBomber([r, a]);
    const o = ne(r, a).forward;
    return Rs(e, o);
  }
  /**
   * Project a geometry using local calculations (proj4)
   *
   * @param {SpatialReference | Integer | String} destProj the spatial reference of the result (as SpatialReference, integer WKID or an EPSG string)
   * @param {BaseGeometry} geometry a RAMP API Geometry object
   * @return {Promise} resolve in a RAMP API Geometry object with co-ordinates in the destination projection
   */
  async projectGeometry(e, t) {
    if (t.type === T.EXTENT)
      return this.projectExtent(e, t);
    await this.checkProjBomber([e, t.sr]);
    const i = t.toGeoJSON(), r = await this.projectGeoJson(i, this.normalizeProj(t.sr), this.normalizeProj(e)), a = ut.geom.geomGeoJsonToRamp(r, t.id);
    return a.sr = _.parseSR(e), a;
  }
  /**
   * Reproject an Extent object on the client.  Does not require network traffic,
   * but may not handle conversion between projection types as well.
   * Internally it tests 8 points along each edge and takes the max extent of the result.
   * To project an extent without warping, convert to a polygon and do a standard geometry projection
   * (result will not be guaranteed to retain Extent characteristics)
   *
   * @param {SpatialReference | Integer | String} destProj the spatial reference of the result (as SpatialReference, integer WKID or an EPSG string)
   * @param {Extent} extent to reproject
   * @returns {Promise} resolves with the reprojected extent
   */
  async projectExtent(e, t) {
    const i = (y, w, b) => {
      if (b === 0)
        return [y, w];
      const $ = [(y[0] + w[0]) / 2, (y[1] + w[1]) / 2];
      if (b === 1)
        return [y, $, w];
      if (b > 1) {
        const L = i(y, $, b - 1), G = i($, w, b - 1);
        return L.concat(G.slice(1));
      }
      return [[]];
    }, r = t.toPolygonArray().pop() || [];
    let a = [];
    [0, 1, 2, 3].map((y) => i(r[y], r[y + 1], 3).slice(1)).forEach((y) => a = a.concat(y));
    const o = new re("warpy", [a], t.sr, !0), l = await this.projectGeometry(e, o), n = l.toArray().pop() || [], c = n.map((y) => y[0]), u = n.map((y) => y[1]), p = Math.min.apply(null, c), d = Math.max.apply(null, c), g = Math.min.apply(null, u), h = Math.max.apply(null, u);
    return F.fromParams(t.id + "_projected", p, g, d, h, l.sr);
  }
}
class zs {
  // useful functions
  DEFAULT_MERCATOR = "DEFAULT_ESRI_World_AuxMerc_3857";
  DEFAULT_LAMBERT = "DEFAULT_NRCAN_Lambert_3978";
  proj;
  geom;
  sharedUtils;
  constructor() {
    this.proj = new Vs(), this.geom = new Gs(), this.sharedUtils = new Us();
  }
  defaultTileSchemas() {
    return [this.DEFAULT_LAMBERT, this.DEFAULT_MERCATOR];
  }
  defaultLODs(e) {
    const t = (i) => i.map((r) => ({
      level: r[0],
      resolution: r[1],
      scale: r[2]
    }));
    if (e === this.DEFAULT_LAMBERT)
      return t([
        [0, 38364.660062653464, 145e6],
        [1, 22489.62831258996, 85e6],
        [2, 13229.193125052918, 5e7],
        [3, 7937.5158750317505, 3e7],
        [4, 4630.2175937685215, 175e5],
        [5, 2645.8386250105837, 1e7],
        [6, 1587.5031750063501, 6e6],
        [7, 926.0435187537042, 35e5],
        [8, 529.1677250021168, 2e6],
        [9, 317.50063500127004, 12e5],
        [10, 185.20870375074085, 7e5],
        [11, 111.12522225044451, 42e4],
        [12, 66.1459656252646, 25e4],
        [13, 38.36466006265346, 145e3],
        [14, 22.48962831258996, 85e3],
        [15, 13.229193125052918, 5e4],
        [16, 7.9375158750317505, 3e4],
        [17, 4.6302175937685215, 17500]
      ]);
    if (e === this.DEFAULT_MERCATOR)
      return t([
        [0, 19567.87924099992, 73957190948944e-6],
        [1, 9783.93962049996, 36978595474472e-6],
        [2, 4891.96981024998, 18489297737236e-6],
        [3, 2445.98490512499, 9244648868618e-6],
        [4, 1222.992452562495, 4622324434309e-6],
        [5, 611.4962262813797, 2311162217155e-6],
        [6, 305.74811314055756, 1155581108577e-6],
        [7, 152.87405657041106, 577790.554289],
        [8, 76.43702828507324, 288895.277144],
        [9, 38.21851414253662, 144447.638572],
        [10, 19.10925707126831, 72223.819286],
        [11, 9.554628535634155, 36111.909643],
        [12, 4.77731426794937, 18055.954822],
        [13, 2.388657133974685, 9027.977411],
        [14, 1.1943285668550503, 4513.988705],
        [15, 0.5971642835598172, 2256.994353],
        [16, 0.29858214164761665, 1128.497176],
        [17, 0.14929107082380833, 564.248588],
        [18, 0.07464553541190416, 282.124294],
        [19, 0.03732276770595208, 141.062147],
        [20, 0.01866138385297604, 70.5310735]
      ]);
    throw new Error(`Unknown tile schema key passed to LOD defaulter ${e}`);
  }
}
class J {
  /**
   * The instance of RampMap API scoped to a single Vue R4MP application.
   *
   * @type {InstanceAPI}
   * @memberof APIScope
   */
  $iApi;
  /**
   * The instance of Vue R4MP application controlled by this InstanceAPI.
   * This is just a shorthand for `this.$iApi.$vApp`.
   *
   * @readonly
   * @type {Vue}
   * @memberof APIScope
   */
  get $vApp() {
    return this.$iApi.$vApp;
  }
  get $element() {
    return this.$iApi.$element;
  }
  /**
   * Creates an instance of APIScope.
   *
   * @param {InstanceAPI} iApi
   * @memberof APIScope
   */
  constructor(e) {
    this.$iApi = e;
  }
}
function qs(s) {
  return typeof s == "function" && s.render && typeof s.render == "function";
}
function js(s) {
  const e = [
    "data",
    "props",
    "propsData",
    "computed",
    "methods",
    "watch",
    "template",
    "render",
    "components",
    "model"
  ];
  return typeof s == "object" && !s.functional && e.some((t) => s[t] !== void 0);
}
function Wi(s) {
  return typeof s == "object" && Object.keys(s).every((e) => typeof e == "string") && Object.values(s).every((e) => e instanceof HTMLElement);
}
function Ws(s) {
  return typeof s == "object" && s.default !== void 0;
}
const $t = B("appbar", () => {
  const s = f({}), e = f([]), t = f([]), i = P(
    () => e.value.map(
      (o) => o.map((l) => s.value[l]).filter((l) => {
        if (typeof l == "string" || l.componentId)
          return !0;
      })
    ).filter((o) => o.length > 0)
  );
  function r(o) {
    t.value.includes(o) || t.value.push(o);
  }
  function a(o) {
    const l = t.value.indexOf(o);
    l !== -1 && t.value.splice(l, 1), o in s.value && delete s.value[o], e.value.forEach((n) => {
      const c = n.indexOf(o);
      c !== -1 && n.splice(c, 1);
    });
  }
  return { items: s, order: e, temporary: t, visible: i, addTempButton: r, removeButton: a };
}), Yt = B("grid", () => {
  const s = f({}), e = f(), t = f();
  function i(l) {
    s.value = { ...s.value, [l.id]: l };
  }
  function r(l) {
    s.value[l] !== void 0 && delete s.value[l];
  }
  function a(l) {
    return Object.keys(s.value).find((n) => s.value[n].layerIds.includes(l));
  }
  function o(l, n) {
    s.value[l].layerIds = s.value[l].layerIds.filter((c) => c !== n);
  }
  return {
    grids: s,
    panel: e,
    currentId: t,
    addGrid: i,
    removeGrid: r,
    getGridId: a,
    removeLayer: o
  };
}), Ue = B("map-caption", () => {
  const s = f({ text: {}, logo: {} }), e = f({}), t = f({}), i = f({});
  function r(o) {
    o !== void 0 ? e.value.isImperialScale = o : e.value.isImperialScale = !e.value.isImperialScale;
  }
  function a(o) {
    s.value.text.value = o.text.value, s.value.text.disabled = o.text.disabled, s.value.logo.altText = o.logo.altText, s.value.logo.link = o.logo.link, s.value.logo.value = o.logo.value, s.value.logo.disabled = o.logo.disabled;
  }
  return {
    attribution: s,
    scale: e,
    coords: t,
    langtoggle: i,
    toggleScale: r,
    setAttribution: a
  };
}), zt = (s, e) => {
  const t = [...s];
  for (; t.length > 0; ) {
    const i = t.shift();
    if (e(i))
      return i;
    i && t.push(...i.sublayers);
  }
}, _e = B("layer", () => {
  const s = f([]), e = f([]), t = f([]);
  function i(p) {
    return zt(s.value, (d) => d?.uid === p);
  }
  function r(p) {
    return zt(s.value, (d) => d?.id === p);
  }
  function a(p) {
    return zt(
      s.value,
      (d) => d !== void 0 && (d.id === p || d.uid === p)
    );
  }
  function o(p) {
    e.value = [...e.value, p];
  }
  function l(p, d = void 0) {
    s.value = [...s.value, p], p.mapLayer && ((d === void 0 || d < 0) && (console.error("Map layer added to store with invalid index!"), d = t.value.length), t.value.splice(d, 0, p.id), t.value = [...t.value]);
  }
  function n(p, d) {
    if (!p.mapLayer) {
      console.error("Data layer passed to layer store reorder");
      return;
    }
    if (d < 0) {
      console.error("Negative index passed to layer store reorder");
      return;
    }
    d >= t.value.length && (d = t.value.length - 1);
    const g = t.value.findIndex((h) => h === p.id);
    g !== -1 && g !== d && (t.value.splice(g, 1), t.value.splice(d, 0, p.id), t.value = [...t.value]);
  }
  function c(p) {
    const d = s.value.filter((g) => g.id !== p.id || g.uid !== p.uid);
    if (s.value = d, p.mapLayer) {
      const g = t.value.filter((h) => h !== p.id);
      t.value = g;
    }
  }
  function u(p) {
    const d = e.value.filter((g) => g.id !== p);
    e.value = d;
  }
  return {
    /**
     * All layers registered with the instance (aka the "map")
     */
    layers: s,
    /**
     * Layer ids of map layers (regardless of layer state), in order of map stack.
     */
    mapOrder: t,
    layerConfigs: e,
    getLayerByUid: i,
    getLayerById: r,
    getLayerByAny: a,
    addLayerConfig: o,
    addLayer: l,
    reorderLayer: n,
    removeLayer: c,
    removeLayerConfig: u
  };
}), pe = B("config", () => {
  const s = f({
    map: {
      lodSets: [],
      extentSets: [],
      tileSchemas: [],
      basemaps: [],
      initialBasemapId: ""
    },
    fixtures: {},
    layers: []
  }), e = f([]), t = f(), i = f({}), r = f({});
  function a(c) {
    if (i.value[r.value[c]] === void 0)
      throw new Error("Unsupported language or no registered config exists for requested language");
    return i.value[r.value[c]];
  }
  function o(c) {
    const u = { ...s.value, ...c };
    if (s.value = u, Array.isArray(s.value.layers)) {
      const p = _e();
      p.layerConfigs = [...p.layerConfigs, s.value.layers];
    }
  }
  function l(c, u) {
    i.value[u] = c, r.value[u] = u;
  }
  function n(c, u) {
    const p = c.configs, d = Object.keys(p);
    if (d.length) {
      const g = d[0];
      u.forEach((h) => {
        const y = d.includes(h) ? h : g;
        i.value[h] = p[y], r.value[h] = y;
      });
    } else
      console.error("Nothingburger config set was registered", c);
  }
  return {
    activeBasemapConfig: t,
    config: s,
    registeredConfigs: i,
    registeredLangs: r,
    startingFixtures: e,
    getActiveConfig: a,
    newConfig: o,
    registerAllConfigs: n,
    registerConfig: l
  };
}), Hi = B("details", () => {
  const s = f([]), e = f({}), t = f({}), i = f(), r = f(0), a = f(0), o = f(!0), l = f();
  function n(u) {
    const p = s.value.findIndex((d) => d.uid === u.uid);
    p !== -1 && s.value.splice(p, 1);
  }
  function c(u) {
    e.value = { ...e.value, [u.id]: u };
  }
  return {
    payload: s,
    properties: e,
    defaultTemplates: t,
    currentFeatureId: i,
    activeGreedy: r,
    lastHilight: a,
    hilightToggle: o,
    origin: l,
    removeLayer: n,
    addConfigProperty: c
  };
}), ye = B("fixture", () => {
  const s = f({}), e = f({});
  function t(o) {
    return o.map((l) => e.value[l].getPromise());
  }
  function i(o) {
    if (s.value = { ...s.value, [o.id]: ee(o) }, o.id in e.value)
      e.value[o.id].resolveMe(ee(o));
    else {
      const l = new H();
      l.resolveMe(ee(o)), e.value = {
        ...e.value,
        [o.id]: l
      };
    }
    typeof o.added == "function" && o.added();
  }
  function r(o) {
    delete s.value[o.id], s.value = { ...s.value }, delete e.value[o.id], e.value = { ...e.value }, typeof o.removed == "function" && o.removed();
  }
  function a(o) {
    e.value = {
      ...e.value,
      [o]: new H()
    };
  }
  return {
    items: s,
    loadPromises: e,
    getLoadPromises: t,
    addFixture: i,
    removeFixture: r,
    addLoadPromise: a
  };
});
var E = /* @__PURE__ */ ((s) => (s.APPBAR_BUTTON_CLICK = "appbar/click", s.COMPONENT = "ramp/component", s.CONFIG_CHANGE = "config/configchanged", s.DETAILS_TOGGLE = "details/toggle", s.FILTER_CHANGE = "filter/change", s.FIXTURE_ADDED = "fixture/added", s.FIXTURE_REMOVED = "fixture/removed", s.GRID_TOGGLE = "grid/toggle", s.HELP_TOGGLE = "help/toggle", s.LANG_CHANGE = "lang/change", s.LAYER_DRAWSTATECHANGE = "layer/drawstatechange", s.LAYER_INITIATIONSTATECHANGE = "layer/initiationStatechange", s.LAYER_LAYERSTATECHANGE = "layer/layerstatechange", s.LAYER_OPACITYCHANGE = "layer/opacitychange", s.LAYER_REGISTERED = "layer/registered", s.LAYER_RELOAD_END = "layer/reloadend", s.LAYER_RELOAD_START = "layer/reloadstart", s.LAYER_REMOVE = "layer/remove", s.LAYER_VISIBILITYCHANGE = "layer/visibilitychange", s.MAP_BASEMAPCHANGE = "map/basemapchanged", s.MAP_BLUR = "map/blur", s.MAP_CLICK = "map/click", s.MAP_CREATED = "map/created", s.MAP_DESTROYED = "map/destroyed", s.MAP_DOUBLECLICK = "map/doubleclick", s.MAP_EXTENTCHANGE = "map/extentchanged", s.MAP_FOCUS = "map/focus", s.MAP_GRAPHICHIT = "map/graphichit", s.MAP_IDENTIFY = "map/identify", s.MAP_KEYDOWN = "map/keydown", s.MAP_KEYUP = "map/keyup", s.MAP_MOUSEDOWN = "map/mousedown", s.MAP_MOUSELEAVE = "map/mouseleave", s.MAP_MOUSEMOVE = "map/mousemove", s.MAP_MOUSEMOVE_END = "map/mousemoveend", s.MAP_MOUSEMOVE_START = "map/mousemovestart", s.MAP_REFRESH_END = "map/refreshend", s.MAP_REFRESH_START = "map/refreshstart", s.MAP_REORDER = "map/reorder", s.MAP_RESIZED = "map/resized", s.MAP_SCALECHANGE = "map/scalechanged", s.MAP_START = "map/start", s.METADATA_TOGGLE = "metadata/toggle", s.PANEL_CLOSED = "panel/closed", s.PANEL_MINIMIZED = "panel/minimized", s.PANEL_OPENED = "panel/opened", s.RAMP_MOBILEVIEW_CHANGE = "ramp/mobileviewchange", s.RAMP_RELOAD = "ramp/reload", s.REORDER_TOGGLE = "reorder/toggle", s.SETTINGS_TOGGLE = "settings/toggle", s.USER_LAYER_ADDED = "user/layeradded", s.WIZARD_TOGGLE = "wizard/toggle", s))(E || {}), Jt = /* @__PURE__ */ ((s) => (s.LAYER_ERROR_UPDATES_LEGEND = "ramp_layer_error_updates_legend", s.LAYER_REGISTER_BINDS_LEGEND = "ramp_layer_register_binds_legend", s.LAYER_RELOAD_END_BINDS_LEGEND = "ramp_layer_reload_end_binds_legend", s.LAYER_RELOAD_START_UPDATES_LEGEND = "ramp_layer_reload_start_updates_legend", s.LAYER_REMOVE_UPDATES_DETAILS = "ramp_layer_remove_updates_details", s.LAYER_REMOVE_CHECKS_GRID = "ramp_layer_remove_checks_grid", s.LAYER_REMOVE_UPDATES_LEGEND = "ramp_layer_remove_updates_legend", s.LAYER_USERADD_UPDATES_LEGEND = "ramp_layer_useradd_updates_legend", s.MAP_BASEMAP_CHECKS_TILE_PROJ = "ramp_map_basemap_checks_tile_proj", s.MAP_BASEMAP_UPDATES_MAP_ATTRIBS = "ramp_map_basemap_updates_map_attribs", s.MAP_BLUR_UPDATES_KEY_HANDLER = "ramp_map_blur_updates_key_handler", s.MAP_CLICK_RUNS_IDENTIFY = "ramp_map_click_runs_identify", s.MAP_CREATED_INITIALIZES_FIXTURES = "ramp_map_created_initializes_fixtures", s.MAP_CREATED_UPDATES_MAP_ATTRIBS = "ramp_map_created_updates_map_attribs", s.MAP_EXTENT_UPDATES_MAPTIP = "ramp_map_extent_updates_maptip", s.MAP_GRAPHICHIT_CREATES_MAPTIP = "ramp_map_graphichit_creates_maptip", s.MAP_IDENTIFY_OPENS_IDENTIFY_RESULTS = "ramp_map_identify_opens_identify_results", s.MAP_KEYDOWN_UPDATES_COORDS = "ramp_map_keydown_updates_coords", s.MAP_KEYDOWN_UPDATES_KEY_HANDLER = "ramp_map_keydown_updates_key_handler", s.MAP_KEYUP_UPDATES_KEY_HANDLER = "ramp_map_keyup_updates_key_handler", s.MAP_MOUSE_UPDATES_COORDS = "ramp_map_mouse_updates_coords", s.MAP_MOUSE_UPDATES_MAPTIP = "ramp_map_mouse_updates_maptip", s.MAP_MOUSEDOWN_UPDATES_MAPTIP = "ramp_map_mousedown_updates_maptip", s.MAP_MOUSELEAVE_REMOVES_MAPTIP = "ramp_map_mouseleave_removes_maptip", s.MAP_RESIZE_UPDATES_SCALEBAR = "ramp_map_resize_updates_scalebar", s.MAP_SCALE_UPDATES_SCALEBAR = "ramp_map_scale_updates_scalebar", s.PANEL_CLOSE_UPDATES_APPBAR = "ramp_panel_close_updates_appbar", s.PANEL_OPEN_UPDATES_APPBAR = "ramp_panel_open_updates_appbar", s.TOGGLE_DETAILS = "ramp_toggle_details", s.TOGGLE_GRID = "ramp_toggle_grid", s.TOGGLE_HELP = "ramp_toggle_help", s.TOGGLE_METADATA = "ramp_toggle_metadata", s.TOGGLE_REORDER = "ramp_toggle_reorder", s.TOGGLE_SETTINGS = "ramp_toggle_settings", s.TOGGLE_WIZARD = "ramp_toggle_wizard", s))(Jt || {});
class Hs {
  eventName;
  handlerName;
  handlerFunc;
  constructor(e, t, i) {
    this.eventName = e, this.handlerName = t, this.handlerFunc = i;
  }
}
class Ys extends J {
  /**
   * A vue instance that provides an event bus for all events.
   *
   * @private
   * @type {Vue}
   * @memberof EventAPI
   */
  _eventBus;
  // tracks active event handlers: event name, handler name, and the actual handler function
  _eventRegister;
  // a helpful register of event names that have been declared by the app and fixtures.
  _nameRegister;
  // for autonamer
  _funCounter;
  constructor(e) {
    super(e), this._eventBus = new cs(), this._eventRegister = [], this._funCounter = 1, this._nameRegister = Object.values(E).filter((t) => typeof t == "string" && t.indexOf("/") > -1);
  }
  /**
   * Locates a registered handler by name, or undefined if not found
   *
   * @param {string} handlerName the name of the event handler
   * @returns {EventHandler | undefined} handler information or undefined
   * @memberof EventAPI
   * @private
   */
  findHandler(e) {
    return this._eventRegister.find((t) => t.handlerName === e);
  }
  /**
   * Generates an event handler name. Used when caller doesnt provide one.
   *
   * @param {string} eventName the name of the event the handler is handling
   * @returns {String} a handler name
   * @memberof EventAPI
   * @private
   */
  handlerNamer(e) {
    return this._funCounter++, e.replace(/\//g, "_") + this._funCounter.toString();
  }
  /**
   * Adds event names to the names registry of the event bus.
   *
   * @param {string | Array} names event names or names to register
   * @memberof EventAPI
   */
  registerEventName(e) {
    (Array.isArray(e) ? e : [e]).forEach((i) => {
      this._nameRegister.indexOf(i) === -1 && this._nameRegister.push(i);
    });
  }
  /**
   * A list of event names that have been registered with the bus.
   *
   * @returns {Array} list of event names
   * @memberof EventAPI
   */
  eventNames() {
    return this._nameRegister.slice();
  }
  // TODO provide a method to unregister an event name? would that ever really need to happen?
  /**
   * Adds an event handler to an event.
   *
   * @param {string} event name of the event to react to
   * @param {Function} callback function to execute when event triggers
   * @param {string} [handlerName] name of the handler (for reference). a name will be generated if not provided.
   * @returns {string} the handler name
   * @memberof EventAPI
   */
  on(e, t, i = "") {
    if (this.findHandler(i))
      throw new Error("Duplicate handler name registration: " + i);
    i || (i = this.handlerNamer(e));
    const r = new Hs(e, i, t);
    return this._eventRegister.push(r), this._eventBus.on(e, t), i;
  }
  /**
   * Removes an event handler from an event.
   *
   * @param {string} handlerName name of the handler to remove
   * @memberof EventAPI
   */
  off(e) {
    const t = this.findHandler(e);
    t && (this._eventRegister.splice(this._eventRegister.indexOf(t), 1), this._eventBus.off(t.eventName, t.handlerFunc));
  }
  /**
   * Removes all event handlers, filtered to an event name if desired.
   * @param {string} [event] name of the event. Omission will remove all handlers for all events
   */
  offAll(e = "") {
    this.activeHandlers(e).forEach((i) => this.off(i));
  }
  /**
   * Removes all default event handlers.
   */
  removeDefaultEvents() {
    Object.values(Jt).forEach((e) => {
      this.off(e);
    });
  }
  /**
   * Triggers an event.
   *
   * @param {string} event the name of the event
   * @param {...any[]} args any arguements the event is expecting
   * @memberof EventAPI
   */
  emit(e, ...t) {
    this._eventBus.emit(e, ...t);
  }
  /**
   * Adds an event handler to an event that will be respected once. After the handler
   * reacts to the event, it will be removed.
   *
   * @param {string} event name of the event to react to once
   * @param {Function} callback function to execute when event triggers
   * @param {string} [handlerName] name of the handler (for reference). a name will be generated if not provided.
   * @returns {string} the handler name
   * @memberof EventAPI
   */
  once(e, t, i = "") {
    i || (i = this.handlerNamer(e));
    const r = (...a) => {
      t(...a), this.off(i);
    };
    return this.on(e, r, i);
  }
  /**
   * Returns any active event handlers, filtered to an event name if desired.
   *
   * @param {string} [event] name of the event. Omission will return all active handlers
   * @returns {Array} list of handler names
   * @memberof EventAPI
   */
  activeHandlers(e = "") {
    return e === "" ? this._eventRegister.map((t) => t.handlerName) : this._eventRegister.filter((t) => t.eventName === e).map((t) => t.handlerName);
  }
  /**
   * Loads the set of standard, built-in event handlers to the R4MP Vue instance.
   * This will quickly set up the vanilla version of RAMP.
   * Note this function is automatically run by the instance startup unless the loadDefaultEvents option is
   * set to false. The function is exposed to allow custom pages the ability to call it at a different point
   * in the startup. Also, a subset of standard event handlers can be provided on the optional parameter if one
   * wishes to omit some of the standard handlers.
   *
   * @param {Array<string>} [eventHandlerNames] list of built-in event handler names to add. omission means all built-in event handlers will be added
   * @returns {Array<string>} resolves with array of event handler names
   * @memberof EventAPI
   */
  addDefaultEvents(e) {
    return (!Array.isArray(e) || e.length === 0) && (e = Object.values(Jt)), e.map((t) => this.defaultHandlerFactory(t));
  }
  /**
   * Will apply the implementation of default events handlers
   *
   * @param {string} handlerName the name of the default event handler to create
   * @returns {String} name of the event handler
   * @memberof EventAPI
   * @private
   */
  defaultHandlerFactory(e) {
    let t;
    switch (e) {
      case "ramp_layer_error_updates_legend":
        t = (i) => {
          if (i.layer.layerState === q.ERROR) {
            const r = this.$iApi.fixture.get("legend");
            r && r.updateLegend(i.layer);
          }
        }, this.$iApi.event.on("layer/layerstatechange", t, e);
        break;
      case "ramp_layer_register_binds_legend":
        t = (i) => {
          const r = this.$iApi.fixture.get("legend");
          r && r.updateLegend(i);
        }, this.$iApi.event.on("layer/registered", t, e);
        break;
      case "ramp_layer_reload_end_binds_legend":
        t = (i) => {
          const r = this.$iApi.fixture.get("legend");
          r && r.updateLegend(i);
        }, this.$iApi.event.on("layer/reloadend", t, e);
        break;
      case "ramp_layer_reload_start_updates_legend":
        t = (i) => {
          if (!i.isSublayer) {
            const r = this.$iApi.fixture.get("legend");
            r && r.reloadLayerItem(i.uid);
          }
        }, this.$iApi.event.on("layer/reloadstart", t, e);
        break;
      case "ramp_layer_remove_checks_grid":
        t = (i) => {
          if (this.$iApi.fixture.get("grid")) {
            const r = Yt(this.$vApp.$pinia), a = r.getGridId(i.id);
            if (a === void 0) return;
            if (r.removeLayer(a, i.id), r.grids[a].layerIds.length === 0) {
              r.removeGrid(a);
              const o = r.currentId;
              if (a === o) {
                const l = this.$iApi.panel.get("grid");
                this.$iApi.panel.close(l), r.currentId = void 0;
              }
            }
          }
        }, this.$iApi.event.on("layer/remove", t, e);
        break;
      case "ramp_layer_remove_updates_details":
        t = (i) => {
          const r = Hi(this.$vApp.$pinia);
          this.$iApi.fixture.get("details") && r.removeLayer(i);
        }, this.$iApi.event.on("layer/remove", t, e);
        break;
      case "ramp_layer_remove_updates_legend":
        t = (i) => {
          const r = this.$iApi.fixture.get("legend");
          r && (r.removeLayerItem(i), this.$iApi.updateAlert(
            this.$iApi.$i18n.t("legend.alert.layerRemoved", {
              name: i.name
            })
          ));
        }, this.$iApi.event.on("layer/remove", t, e);
        break;
      case "ramp_layer_useradd_updates_legend":
        t = (i) => {
          const r = this.$iApi.fixture.get("legend");
          r && r.addLayerItem(i);
        }, this.$iApi.event.on("user/layeradded", t, e);
        break;
      case "ramp_map_basemap_checks_tile_proj":
        t = (i) => {
          i.schemaChanged && this.$iApi.geo.layer.allLayers().filter((r) => r.layerType === x.TILE).forEach((r) => {
            r.checkProj();
          });
        }, this.$iApi.event.on("map/basemapchanged", t, e);
        break;
      case "ramp_map_basemap_updates_map_attribs":
        t = () => {
          this.$iApi.geo.map.caption.updateAttribution(
            pe(this.$vApp.$pinia).activeBasemapConfig?.attribution
          );
        }, this.$iApi.event.on("map/basemapchanged", t, e);
        break;
      case "ramp_map_blur_updates_key_handler":
        t = () => {
          this.$iApi.geo.map.stopKeyPan();
        }, this.$iApi.event.on("map/blur", t, e);
        break;
      case "ramp_map_click_runs_identify":
        t = (i) => {
          i.button === 0 && this.$iApi.geo.map.runIdentify(i);
        }, this.on("map/click", t, e);
        break;
      case "ramp_map_created_initializes_fixtures":
        t = () => {
          const i = ye(this.$vApp.$pinia).items;
          Object.keys(i).forEach((r) => {
            i[r].initialized?.();
          });
        }, this.$iApi.geo.map.created && t(), this.$iApi.event.on("map/created", t, e);
        break;
      case "ramp_map_created_updates_map_attribs":
        t = () => {
          this.$iApi.geo.map.caption.updateAttribution(
            pe(this.$vApp.$pinia).activeBasemapConfig?.attribution
          );
        }, this.$iApi.geo.map.created && t(), this.$iApi.event.on("map/created", t, e);
        break;
      case "ramp_map_extent_updates_maptip":
        t = () => {
          if (this.$iApi.geo.map.keysActive) {
            const i = this.$iApi.geo.map.mapPointToScreenPoint(
              this.$iApi.geo.map.getExtent().center()
            );
            this.$iApi.geo.map.maptip.checkAtCoord(i);
          } else
            this.$iApi.geo.map.maptip.clear();
        }, this.$iApi.event.on(
          "map/extentchanged",
          it(50, !0, () => t()),
          // Smaller throttle because extent change is intervalled
          e
        );
        break;
      case "ramp_map_graphichit_creates_maptip":
        t = (i) => {
          this.$iApi.geo.map.maptip.generateDefaultMaptip(i);
        }, this.$iApi.event.on("map/graphichit", t, e);
        break;
      case "ramp_map_identify_opens_identify_results":
        t = (i) => {
          const r = this.$iApi.fixture.get("details");
          r && r.openDetails(i.results);
        }, this.on("map/identify", t, e);
        break;
      case "ramp_map_keydown_updates_coords":
        this.$iApi.event.on(
          "map/keydown",
          it(50, () => {
            const i = Ue(this.$vApp.$pinia);
            i.coords?.disabled || !this.$iApi.geo.map.keysActive || this.$iApi.geo.map.caption.formatPoint(this.$iApi.geo.map.getExtent().center()).then((a) => {
              i.coords = {
                formattedString: a
              };
            });
          }),
          e
        );
        break;
      case "ramp_map_keydown_updates_key_handler":
        t = (i) => {
          this.$iApi.geo.map.mapKeyDown(i);
        }, this.$iApi.event.on("map/keydown", t, e);
        break;
      case "ramp_map_keyup_updates_key_handler":
        t = (i) => {
          this.$iApi.geo.map.mapKeyUp(i);
        }, this.$iApi.event.on("map/keyup", t, e);
        break;
      case "ramp_map_mouse_updates_coords":
        this.$iApi.event.on(
          "map/mousemove",
          it(50, (i) => {
            const r = Ue(this.$vApp.$pinia);
            r.coords?.disabled || this.$iApi.geo.map.caption.formatPoint(this.$iApi.geo.map.screenPointToMapPoint(i)).then((o) => {
              r.coords = {
                formattedString: o
              };
            });
          }),
          e
        );
        break;
      case "ramp_map_mouse_updates_maptip":
        t = (i) => {
          this.$iApi.geo.map.maptip.checkAtCoord({
            screenX: i.screenX,
            screenY: i.screenY
          });
        }, this.$iApi.event.on(
          "map/mousemove",
          it(50, (i) => t(i)),
          e
        );
        break;
      case "ramp_map_mousedown_updates_maptip":
        t = (i) => {
          this.$iApi.geo.map.maptip.checkAtCoord({
            screenX: i.screenX,
            screenY: i.screenY
          });
        }, this.$iApi.event.on(
          "map/mousedown",
          it(50, (i) => {
            const r = {
              screenX: i.offsetX,
              screenY: i.offsetY,
              button: i.button,
              moveTime: 0
            };
            t(r);
          }),
          e
        );
        break;
      case "ramp_map_mouseleave_removes_maptip":
        t = () => {
          this.$iApi.geo.map.maptip.clear();
        }, this.$iApi.event.on("map/mouseleave", t);
        break;
      case "ramp_map_resize_updates_scalebar":
        this.$iApi.event.on(
          "map/resized",
          Tt(100, () => this.$iApi.geo.map.caption.updateScale()),
          e
        );
        break;
      case "ramp_map_scale_updates_scalebar":
        this.$iApi.event.on(
          "map/scalechanged",
          Tt(300, () => this.$iApi.geo.map.caption.updateScale()),
          e
        );
        break;
      case "ramp_panel_close_updates_appbar":
        t = (i) => {
          const r = $t(this.$vApp.$pinia);
          this.$iApi.fixture.get("appbar") && !r.order.flat().find((a) => a === i.id) && r.removeButton(i.id);
        }, this.on("panel/closed", t, e);
        break;
      case "ramp_panel_open_updates_appbar":
        t = (i) => {
          const r = $t(this.$vApp.$pinia);
          this.$iApi.fixture.get("appbar") && (!i.teleport || i.teleport?.showAppbarButton) && !r.order.flat().find((a) => a === i.id) && r.addTempButton(i.id);
        }, this.on("panel/opened", t, e);
        break;
      case "ramp_toggle_details":
        t = (i, r) => {
          const a = this.$iApi.fixture.get("details");
          a && a.toggleFeature(i, r);
        }, this.$iApi.event.on("details/toggle", t, e);
        break;
      case "ramp_toggle_grid":
        t = (i, r) => {
          const a = this.$iApi.fixture.get("grid");
          a && a.toggleGrid(i.id, r);
        }, this.$iApi.event.on("grid/toggle", t, e);
        break;
      case "ramp_toggle_help":
        t = (i) => {
          const r = this.$iApi.fixture.get("help");
          r && r.toggleHelp(i);
        }, this.$iApi.event.on("help/toggle", t, e);
        break;
      case "ramp_toggle_metadata":
        t = (i, r) => {
          const a = this.$iApi.fixture.get("metadata");
          a && a.toggleMetadata(i, r);
        }, this.$iApi.event.on("metadata/toggle", t, e);
        break;
      case "ramp_toggle_reorder":
        t = (i) => {
          const r = this.$iApi.fixture.get("layer-reorder");
          r && r.toggleLayerReorder(i);
        }, this.$iApi.event.on("reorder/toggle", t, e);
        break;
      case "ramp_toggle_settings":
        t = (i, r) => {
          const a = this.$iApi.fixture.get("settings");
          a && a.toggleSettings(i, r);
        }, this.$iApi.event.on("settings/toggle", t, e);
        break;
      case "ramp_toggle_wizard":
        t = (i) => {
          const r = this.$iApi.fixture.get("wizard");
          r && r.toggleWizard(i);
        }, this.$iApi.event.on("wizard/toggle", t, e);
        break;
      default:
        return console.error(`Unrecognized default event handler name encountered: ${e}`), `ERROR_NOT_REGISTERED__${e}`;
    }
    return e;
  }
}
const Js = { en: { "lang-code": "en", "lang-dir": "ltr", "lang-en": "English", "lang-fr": "anglais", "lang-native": "English", "ramp.about.open": "Open About RAMP", "ramp.about": "About RAMP", "ramp.reload": "Reload RAMP", "keyboardInstructions.title": "Keyboard Instructions", "keyboardInstructions.open": "Open keyboard instructions", "keyboardInstructions.app": "Use 'Tab' to navigate between sections of the application.", "keyboardInstructions.lists": "Use the arrow keys to move between items in lists. With a list item selected you can press 'Space' or 'Enter' to click the item. You can also navigate within the list item using 'Tab'.", "keyboardInstructions.map": "When the map is selected, use the arrow keys to move around and 'Enter' to select a point.", "keyboardInstructions.OK": "OK", "map.toggleScaleToMetric": "Switch to metric map scale", "map.toggleScaleToImperial": "Switch to imperial map scale", "map.coordinates.east": "E", "map.coordinates.west": "W", "map.coordinates.north": "N", "map.coordinates.south": "S", "map.changeLanguage": "Change Language", "map.language.short": "EN-CA", "map.language.en": "English", "map.language.fr": "Français", "map.language.curr": "current", "map.export": "export map", "map.layerSwipe.drag": "Drag and slide to move", "map.layerSwipe.label": "Layer swipe", "notifications.open": "Open Notifications Panel", "notifications.title": "Notifications", "notifications.empty": "No new notifications.", "notifications.controls.dismiss": "Dismiss", "notifications.controls.expand": "Expand", "notifications.controls.collapse": "Collapse", "notifications.controls.clearAll": "Clear All", "panels.access": "Press enter or space to access the panel", "panels.controls.close": "Close", "panels.controls.pin": "Pin", "panels.controls.unpin": "Unpin", "panels.controls.back": "Back", "panels.controls.optionsMenu": "More", "panels.controls.minimize": "Minimize", "panels.controls.expand": "Expand", "panels.controls.collapse": "Collapse", "panels.controls.moveRight": "Move Right", "panels.controls.moveLeft": "Move Left", "panels.controls.items": "Use the arrow keys to navigate the items", "panels.alert.open": "{name} panel opened", "panels.alert.close": "{name} panel closed", "panels.alert.minimize": "{name} panel minimized", "layer.error": "{id} failed to load", "layer.longload": "{id} is taking longer than expected to load", "layer.longdraw": "{id} is taking longer than expected to draw", "layer.mismatch": "{name} cannot be displayed in the current projection", "layer.filtersdisabled": "Filters have been disabled for {name}", "layer.filterwarning": "You are attempting to use a grid that contains unmodifiable layers. Filtering will be partially disabled.", "layer.noexportmap": "{name} was attempted to be added as a Map Image Layer but Map Export is not enabled for the service", "caption.attributionDefaultText": "Powered by ESRI", "caption.attributionLogoAltText": "ESRI logo", "caption.attributionLink": "https://www.esri.com/" }, fr: { "lang-code": "fr", "lang-dir": "ltr", "lang-en": "French", "lang-fr": "français", "lang-native": "Français", "ramp.about.open": "Ouvrir À propos de PCAR", "ramp.about": "À propos de PCAR", "ramp.reload": "Recharger PCAR", "keyboardInstructions.title": "Instructions clavier", "keyboardInstructions.open": "Instructions clavier ouvert", "keyboardInstructions.app": "Utilisez la touche Tab pour vous déplacer entre les sections de l'application.", "keyboardInstructions.lists": "Lorsqu'un élément de la liste est sélectionné, vous pouvez appuyer sur « Espace » ou « Entrée » pour cliquer sur l'élément. Vous pouvez également vous déplacer au sein de l'élément de la liste au moyen de la touche « Tab ».", "keyboardInstructions.map": "Lorsque la carte est sélectionnée, utilisez le pavé curseur pour vous déplacer et appuyez sur « Entrée »  pour sélectionner un point.", "keyboardInstructions.OK": "OK", "map.toggleScaleToMetric": "Passer à l'échelle métrique", "map.toggleScaleToImperial": "Passer à l'échelle impériale", "map.coordinates.east": "E", "map.coordinates.west": "O", "map.coordinates.north": "N", "map.coordinates.south": "S", "map.changeLanguage": "Changer de langue", "map.language.short": "FR-CA", "map.language.en": "English", "map.language.fr": "Français", "map.language.curr": "actuel", "map.export": "exporter la carte", "map.layerSwipe.drag": "Faites glisser et glissez pour déplacer", "map.layerSwipe.label": "Glissement de calque", "notifications.open": "Ouvrir la fenêtre des notifications", "notifications.title": "Notifications", "notifications.empty": "Aucune nouvelle notification.", "notifications.controls.dismiss": "Rejeter", "notifications.controls.expand": "Développer", "notifications.controls.collapse": "Réduire", "notifications.controls.clearAll": "Effacer tout", "panels.access": "Appuyez sur Entrée ou sur la barre d'espacement pour accéder au panneau", "panels.controls.close": "Fermer", "panels.controls.pin": "Épingler", "panels.controls.unpin": "Désépingler", "panels.controls.back": "Retour", "panels.controls.optionsMenu": "Plus", "panels.controls.minimize": "Réduire", "panels.controls.expand": "Développer", "panels.controls.collapse": "Réduire", "panels.controls.moveRight": "Aller à droite", "panels.controls.moveLeft": "Aller à gauche", "panels.controls.items": "Utilisez les touches fléchées pour naviguer entre les éléments", "panels.alert.open": "Fenêtre {name} ouverte", "panels.alert.close": "Fenêtre {name} fermée", "panels.alert.minimize": "Fenêtre {name} réduite", "layer.error": "Échec du chargement de {id}", "layer.longload": "Le chargement de {id} met plus de temps que prévu", "layer.longdraw": "{id} prend plus de temps que prévu à extraire", "layer.mismatch": "{id} ne peut pas s'afficher dans la projection actuelle", "layer.filtersdisabled": "Les filtres ont été désactivés pour {name}", "layer.filterwarning": "Vous essayez d'utiliser une grille qui contient des couches non modifiables. Le filtrage sera partiellement désactivé.", "layer.noexportmap": "La tentative d’ajouter {name} comme couche d’imagerie cartographique a échouée car elle n’a pu être activé pour ce service", "caption.attributionDefaultText": "Propulsé par ESRI", "caption.attributionLogoAltText": "Logo ESRI", "caption.attributionLink": "https://www.esri.com/fr-fr/home" } }, bi = "en", Ks = {
  en: {
    number: {
      style: "decimal",
      useGrouping: !1,
      maximumFractionDigits: 20
    }
  },
  fr: {
    number: {
      style: "decimal",
      useGrouping: !1,
      maximumFractionDigits: 20
    }
  }
};
function Zs() {
  return $s({
    legacy: !1,
    // get the language of the page from the root `html` node
    locale: document.documentElement.getAttribute("lang") || bi,
    fallbackLocale: bi,
    globalInjection: !0,
    messages: Js,
    numberFormats: Ks
  });
}
const Ct = B("maptip", () => {
  const s = f(void 0), e = f(void 0), t = f("");
  function i(o) {
    s.value = o;
  }
  function r(o) {
    e.value = o;
  }
  function a(o) {
    t.value = o;
  }
  return {
    maptipInstance: s,
    maptipPoint: e,
    content: t,
    setMaptipInstance: i,
    setMaptipPoint: r,
    setMaptipContent: a
  };
}), Xs = /* @__PURE__ */ O({
  __name: "esri-map",
  setup(s) {
    const e = Ct(), t = ge("iApi"), i = P(() => e.maptipPoint), r = P(() => e.maptipInstance), a = P(() => e.content), o = we([]), l = f(!1);
    o.push(
      It(i, () => {
        if (i.value) {
          const c = t.geo.map.getPixelWidth() / 2, u = 0, p = t.geo.map.mapPointToScreenPoint(i.value), d = p.screenX - c, g = u - p.screenY;
          r.value.setProps({
            // Offset more for touch devices so tooltip is visible above finger
            offset: l.value ? [d, g + 25] : [d, g]
          }), a.value && a.value !== "" && r.value.show();
        } else
          r.value.hide();
      })
    ), o.push(
      It(a, (c) => {
        c && c !== "" && i ? (r.value.setContent(c), r.value.show()) : r.value.hide();
      })
    ), dt(() => {
      o.forEach((c) => c());
    });
    const n = () => {
      t.geo.map.setMouseFocus();
    };
    return (c, u) => {
      const p = k("tippy");
      return M((v(), A("div", {
        name: "esriMap",
        id: "esriMap",
        class: "h-full overflow-hidden",
        onMousedown: n,
        onTouchstart: u[0] || (u[0] = (d) => l.value = !0),
        onTouchend: u[1] || (u[1] = (d) => l.value = !1),
        onKeydown: u[2] || (u[2] = ps(Qt(() => {
        }, ["prevent"]), ["up", "down", "left", "right"]))
      }, null, 544)), [
        [p, {
          allowHTML: !0,
          zIndex: 150,
          theme: "ramp4",
          trigger: "manual",
          appendTo: "parent",
          arrow: !1,
          delay: 200,
          duration: [200, 200]
        }]
      ]);
    };
  }
}), Qs = {
  xs: 200,
  sm: 576,
  md: 768,
  lg: 960
};
class Yi {
  resizeObserver;
  constructor(e) {
    this.resizeObserver = new ResizeObserver((t) => {
      t.length && window.requestAnimationFrame(() => {
        t.forEach((i) => {
          const r = i.target.dataset.breakpoints, a = r ? JSON.parse(r) : e ?? Qs;
          Object.keys(a).forEach((o) => {
            const l = a[o];
            i.contentRect.width >= l ? i.target.classList.add(o) : i.target.classList.remove(o);
          });
        });
      });
    });
  }
  observe(e) {
    this.resizeObserver?.observe(e);
  }
}
const er = ["data-cy"], Ji = /* @__PURE__ */ O({
  __name: "panel-container",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const e = f(null), t = s, i = f(!1);
    Ye(() => {
      t.panel.teleport && new Yi(
        // only need default breakpoints for mobile vs non mobile
        // TODO: Iron out defaulting. Should this be a complete override instead?
        { xs: 0, sm: 461, ...t.panel.teleport.breakpoints }
      ).observe(e.value);
    });
    const r = (n, c, u) => {
      if (i.value)
        return c();
      Ui({
        targets: n,
        opacity: {
          value: u,
          duration: 400,
          easing: "cubicBezier(.5, .05, .1, .3)"
        },
        complete: c
      });
    }, a = (n, c) => {
      r(n, c, [0, 1]);
    }, o = (n) => {
      n.classList.contains("screen-spinner") || (i.value = t.panel.isScreenLoaded(t.panel.route.screen), e.value.querySelectorAll("[focus-item").forEach((c) => c.classList.remove("default-focus-style")));
    }, l = (n, c) => {
      r(n, c, [0, 1]);
    };
    return (n, c) => {
      const u = k("focus-container");
      return v(), A("div", {
        class: oe(["shadow-tm bg-white h-full xs:mr-0 sm:mr-12 last:mr-0 pointer-events-auto min-w-0 shrink-0", s.panel.expanded ? "flex-grow max-w-full" : ""]),
        style: Mi(s.panel.style),
        "data-cy": s.panel.id,
        ref_key: "componentEl",
        ref: e
      }, [
        ae(Pi, {
          onBeforeLeave: o,
          onLeave: l,
          onEnter: a
        }, {
          default: ie(() => [
            M((v(), W(ds(s.panel.route.screen), hs({ class: "h-full" }, s.panel.route.props, { panel: s.panel }), null, 16, ["panel"])), [
              [u]
            ])
          ]),
          _: 1
        })
      ], 14, er);
    };
  }
}), He = B("panel", () => {
  const s = f(void 0), e = f(void 0), t = f(0), i = f(0), r = f(!1), a = f(!0), o = f({}), l = f({}), n = f([]), c = f([]), u = f([]), p = f(1), d = P(() => i.value);
  function g(S) {
    return S === "xs" && u.value.length > 0 ? [u.value.slice().pop()] : u.value;
  }
  function h(S) {
    const R = [];
    return S.forEach((he) => {
      he in l.value && R.push(l.value[he].getPromise());
    }), R;
  }
  function y(S) {
    Nt(S), Q(), e.value = void 0;
  }
  function w(S) {
    Ft(S), Q();
  }
  function b(S, R) {
    Dt(S, R), Q();
  }
  function $(S) {
    Gt(S), Q();
  }
  function L(S) {
    p.value = S;
  }
  function G(S) {
    t.value = S, Q();
  }
  function V(S) {
    r.value = S;
  }
  function Q() {
    let S = t.value;
    const R = [], he = 350, Qe = 12, hi = 600;
    for (let Fe = n.value.length - 1; Fe >= 0; Fe--) {
      const et = n.value[Fe];
      let Re = et.width || he;
      if (r.value ? Re = S : Re += Qe, et.id === "grid" && (Re = Math.max(Math.min(Re, S), hi)), (S >= Re && !r.value || R.length === 0) && (S -= Re, R.unshift(et)), et.id === "grid" && S < hi)
        break;
    }
    if (s.value && //@ts-expect-error TODO: explain why this is needed or remove
    !R.includes(s.value) && !r.value) {
      let Fe;
      for (let fi = 0; fi < R.length - 1 && S < (s.value.width || he) + Qe; fi++)
        Fe = R.shift(), S += Fe.width || he;
      S >= (s.value.width || he) ? R.unshift(s.value) : e.value || (Fe = R.shift(), R.unshift(s.value));
      const et = n.value.indexOf(s.value), Re = n.value.indexOf(Fe), Bt = n.value.slice();
      Re > -1 && (Bt.splice(et, 1), Bt.splice(Re, 0, s.value)), n.value = Bt;
    }
    i.value = S, u.value = R;
  }
  function Xe(S) {
    if (o.value = { ...o.value, [S.id]: S }, S.id in l.value)
      l.value[S.id].resolveMe(S);
    else {
      const R = new H();
      R.resolveMe(S), l.value = {
        ...l.value,
        [S.id]: R
      };
    }
  }
  function Nt(S) {
    S.teleport ? c.value = [...c.value, S] : (n.value = [...n.value, S], e.value = S);
  }
  function Ft(S) {
    if (S.teleport) {
      const R = c.value.indexOf(S);
      R !== -1 && (c.value = [...c.value.slice(0, R), ...c.value.slice(R + 1)]);
    } else {
      const R = n.value.indexOf(S);
      R !== -1 && (n.value = [...n.value.slice(0, R), ...n.value.slice(R + 1)]);
    }
  }
  function Dt(S, R) {
    const he = n.value.indexOf(S), Qe = R === "right" ? 1 : -1;
    u.value.includes(n.value[he + Qe]) && ([n.value[he], n.value[he + Qe]] = [
      n.value[he + Qe],
      n.value[he]
    ]);
  }
  function Gt(S) {
    o.value[S.id] !== void 0 && delete o.value[S.id], l.value[S.id] !== void 0 && delete l.value[S.id];
    const R = u.value.indexOf(S);
    R !== -1 && (u.value = [...u.value.slice(0, R), ...u.value.slice(R + 1)]), s.value && s.value.id == S.id && (s.value = void 0);
  }
  function Ut(S) {
    l.value = {
      ...l.value,
      [S]: new H()
    };
  }
  return {
    items: o,
    regPromises: l,
    orderedItems: n,
    pinned: s,
    priority: e,
    visible: u,
    opacity: p,
    stackWidth: t,
    remWidth: i,
    mobileView: r,
    reorderable: a,
    teleported: c,
    getRemainingWidth: d,
    getVisible: g,
    getRegPromises: h,
    openPanel: y,
    closePanel: w,
    movePanel: b,
    removePanel: $,
    setOpacity: L,
    setStackWidth: G,
    setMobileView: V,
    updateVisible: Q,
    registerPanel: Xe,
    addRegPromise: Ut
  };
}), tr = /* @__PURE__ */ O({
  __name: "panel-stack",
  setup(s) {
    fs((u) => ({
      "3d36ee4c": r.value
    }));
    const e = He(), t = ge("iApi"), i = f(), r = P(() => e.opacity), a = P(() => e.mobileView);
    Ye(() => {
      new ResizeObserver((p) => {
        const d = !(t.$vApp.$root?.$refs["app-size"]).classList.contains("sm");
        a.value !== d && (e.mobileView = d, t.event.emit(E.RAMP_MOBILEVIEW_CHANGE, d)), e.setStackWidth(p[0].contentRect.width);
      }).observe(i.value?.$el);
    });
    const o = (u) => (
      //@ts-expect-error TODO: explain why this is needed or remove
      e.getVisible(u)
    ), l = (u, p) => {
      c(u, p, [
        [6, 0],
        [0, 1]
      ]);
    }, n = (u, p) => {
      const [d, g] = [u.children[0].getBoundingClientRect(), u.parentElement.getBoundingClientRect()];
      u.style.width = `${d.width}px`, u.style.height = `${d.height}px`, u.style.left = `${d.left - g.left}px`, u.style.position = "absolute", c(u, p, [
        [0, -6],
        [1, 0]
      ]);
    }, c = (u, p, d) => {
      Ui({
        targets: u,
        duration: 300,
        translateY: {
          value: d[0],
          easing: "cubicBezier(.5, .05, .1, .3)"
        },
        opacity: {
          value: d[1],
          duration: 250,
          easing: "cubicBezier(.5, .05, .1, .3)"
        },
        complete: p
      });
    };
    return (u, p) => (v(), W(Ni, {
      onEnter: l,
      onLeave: n,
      name: "panel-container",
      tag: "div",
      ref_key: "el",
      ref: i,
      class: "panel-container"
    }, {
      default: ie(() => [
        (v(!0), A(We, null, ht(o(I(t).screenSize), (d) => (v(), W(Ji, {
          key: `${d.id}`,
          panel: d
        }, null, 8, ["panel"]))), 128))
      ]),
      _: 1
    }, 512));
  }
}), Ne = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [i, r] of e)
    t[i] = r;
  return t;
}, ir = /* @__PURE__ */ Ne(tr, [["__scopeId", "data-v-717e4bd7"]]), sr = ["content", "aria-label"], ii = /* @__PURE__ */ O({
  __name: "dropdown-menu",
  props: {
    position: {
      type: String,
      default: "bottom"
    },
    popperOptions: {
      type: Object,
      default() {
        return {};
      }
    },
    tooltip: { type: String },
    tooltipPlacement: { type: String, default: "bottom" },
    tooltipPlacementAlt: { type: String, default: "top" },
    tooltipTheme: { type: String, default: "ramp4" },
    tooltipAnimation: { type: String, default: "scale" },
    centered: { type: Boolean, default: !0 },
    ariaLabel: { type: String }
  },
  setup(s) {
    const e = f(!1), t = f(null), i = we([]), r = f(), a = f(), o = f(), l = s;
    i.push(
      It(e, () => {
        t.value.update();
      })
    );
    const n = () => {
      e.value = !e.value, o.value._tippy.hide();
    }, c = () => {
      o.value._tippy.setProps({
        placement: e.value ? l.tooltipPlacementAlt : l.tooltipPlacement
      }), o.value._tippy.show();
    }, u = () => {
      o.value._tippy.hide();
    };
    return Ye(() => {
      window.addEventListener(
        "click",
        (p) => {
          (!r.value || !r.value.contains(p.target)) && (e.value = !1);
        },
        { capture: !0 }
      ), window.addEventListener("blur", () => {
        e.value = !1;
      }), window.addEventListener("focusin", (p) => {
        (!r.value || !r.value.contains(p.target)) && (e.value = !1);
      }), o.value.addEventListener("focus", c), o.value.addEventListener("blur", u), o.value.addEventListener("mouseover", c), o.value.addEventListener("mouseleave", u), Ot(() => {
        const p = {
          name: "overflowScroll",
          enabled: !0,
          phase: "main",
          fn({ state: d }) {
            const { bottom: g } = Ns(d);
            g > 0 ? (d.styles.popper.overflowY = g > 100 ? "auto" : void 0, d.styles.popper.overflowX = "hidden", d.styles.popper.height = `${d.rects.popper.height - g - 8}px`) : d.styles.popper.height = "auto";
          }
        };
        o.value && a.value && (t.value = Ps(o.value, a.value, {
          placement: l.position || "bottom",
          modifiers: [
            p,
            {
              name: "offset",
              options: {
                offset: [0, 5]
              }
            }
          ],
          ...l.popperOptions
        }));
      });
    }), dt(() => {
      i.forEach((p) => p()), window.removeEventListener(
        "click",
        (p) => {
          (!r.value || !r.value.contains(p.target)) && (e.value = !1);
        },
        { capture: !0 }
      ), window.removeEventListener("blur", () => {
        e.value = !1;
      }), window.removeEventListener("focusin", (p) => {
        (!r.value || !r.value.contains(p.target)) && (e.value = !1);
      }), o.value.removeEventListener("focus", c), o.value.removeEventListener("blur", u), o.value.removeEventListener("mouseover", c), o.value.removeEventListener("mouseleave", u), e.value = !1;
    }), (p, d) => {
      const g = k("tippy");
      return v(), A("div", {
        ref_key: "el",
        ref: r
      }, [
        M((v(), A("button", {
          type: "button",
          class: "text-gray-500 hover:text-black dropdown-button",
          onClick: n,
          content: s.tooltip,
          "aria-label": s.ariaLabel ? String(s.ariaLabel) : String(s.tooltip),
          ref_key: "dropdownTrigger",
          ref: o
        }, [
          Me(p.$slots, "header")
        ], 8, sr)), [
          [g, {
            placement: s.tooltipPlacement,
            theme: s.tooltipTheme,
            animation: s.tooltipAnimation,
            trigger: "manual"
          }]
        ]),
        M(m("div", {
          onClick: d[0] || (d[0] = (h) => t.value.update()),
          class: oe(["rv-dropdown shadow-md border border-gray:200 py-8 bg-white rounded z-10", { "text-center": s.centered }]),
          ref_key: "dropdown",
          ref: a
        }, [
          Me(p.$slots, "default", {
            close: () => e.value = !e.value
          })
        ], 2), [
          [ms, e.value]
        ])
      ], 512);
    };
  }
}), Le = B("notification", () => {
  const s = f([]), e = f({}), t = P(() => s.value.length >= 99 ? 99 : s.value.length);
  function i(c) {
    s.value = [c, ...s.value];
  }
  function r(c) {
    if (s.value.includes(c)) {
      const u = s.value.indexOf(c);
      c instanceof Ki && n(c), u > -1 && s.value.splice(u, 1);
    }
  }
  function a(c) {
    e.value[c.id] = c;
  }
  function o(c, u) {
    e.value[c] && (e.value[c].messageList.push(u), s.value.includes(e.value[c]) || (s.value = [e.value[c], ...s.value]));
  }
  function l() {
    Object.values(e.value).forEach((c) => n(c)), s.value = [];
  }
  function n(c) {
    const u = s.value.indexOf(c);
    u > -1 && s.value.splice(u, 1), c.messageList = [];
  }
  return {
    notificationStack: s,
    groups: e,
    notificationNumber: t,
    showNotification: i,
    removeNotification: r,
    registerGroup: a,
    addToGroup: o,
    clearAll: l
  };
}), rr = { class: "h-full flex flex-col" }, ar = { class: "w-full flex mb-6" }, or = ["content", "aria-label"], nr = /* @__PURE__ */ O({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const e = Le(), { t } = Y(), i = P(() => e.notificationNumber), r = () => e.clearAll();
    return (a, o) => {
      const l = Z("panel-screen"), n = k("tippy");
      return v(), W(l, { panel: s.panel }, {
        header: ie(() => [
          ot(D(I(t)("notifications.title")), 1)
        ]),
        content: ie(() => [
          m("div", rr, [
            m("div", ar, [
              M((v(), A("button", {
                type: "button",
                onClick: r,
                class: oe(["p-4 ml-auto", [
                  i.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default pointer-events-none"
                ]]),
                content: I(t)("notifications.controls.clearAll"),
                "aria-label": I(t)("notifications.controls.clearAll")
              }, o[0] || (o[0] = [
                m("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "fill-current h-20 w-20",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  m("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  m("path", { d: "M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" }),
                  m("path", { d: "M9 17v1a3 3 0 0 0 4.194 2.753" }),
                  m("path", { d: "M22 22l-5 -5" }),
                  m("path", { d: "M17 22l5 -5" })
                ], -1)
              ]), 10, or)), [
                [n, {
                  placement: "bottom",
                  theme: "ramp4",
                  animation: "scale"
                }]
              ])
            ]),
            ae(Zi, { class: "overflow-y-auto" })
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
var fe = /* @__PURE__ */ ((s) => (s.ERROR = "error", s.INFO = "info", s.WARNING = "warning", s))(fe || {});
class lr extends J {
  notificationStore;
  /**
   * Creates an instance of Notification API
   *
   * @param iApi The instance API for the RAMP that this should be associated with.
   */
  constructor(e) {
    super(e), this.$iApi.panel.register({
      id: "notifications",
      config: {
        screens: {
          "notifications-screen": ee(nr)
        },
        alertName: "notifications.title"
      }
    }), this.notificationStore = Le(this.$vApp.$pinia);
  }
  /**
   * Shows a notification with the type and message provided
   *
   * @param {NotificationType} type The type of notification to display
   * @param {string} message The message to display in the notification
   * @memberof NotificationAPI
   */
  show(e, t) {
    this.notificationStore.showNotification({ type: e, message: t });
  }
  /**
   * Adds a notification group, which can be used to hold multiple messages.
   *
   * @param {string} id The id for the group
   * @param {NotificationType} type The type of notification the group will hold, 'error' 'warning' or 'info'
   * @param {string} message The "main" message for the notification, describing the grouped messages
   * @memberof NotificationAPI
   */
  addGroup(e, t, i) {
    if (this.getGroup(e))
      throw new Error("Duplicate notification group id registration: " + e);
    const r = new Ki(this.$iApi, e, t, i);
    return this.notificationStore.registerGroup(r), r;
  }
  /**
   * Returns the group with the id provided, returns `undefined` if there is no such group
   *
   * @param {string} id The id of the group wanted
   * @returns {NotificationGroup | undefined}
   * @memberof NotificationAPI
   */
  getGroup(e) {
    return this.notificationStore.groups[e];
  }
}
class Ki extends J {
  notificationStore = Le(this.$vApp.$pinia);
  id;
  message;
  type;
  messageList = [];
  /**
   * Creates an instance of Notification Group
   *
   * @param $iApi
   * @param id The id for the group
   * @param type The type of notification the group will show
   * @param message The main message for the group
   */
  constructor(e, t, i, r) {
    super(e), this.id = t, this.type = i, this.message = r;
  }
  /**
   * Shows a message under the group
   *
   * @param {string} message The message to show
   * @memberof NotificationGroup
   */
  show(e) {
    this.notificationStore.addToGroup(this.id, e);
  }
}
const cr = ["content"], ur = { class: "flex items-center text-left" }, pr = { class: "select-text cursor-text" }, dr = ["content"], hr = {
  key: 0,
  class: "text-left"
}, fr = /* @__PURE__ */ O({
  __name: "notification-item",
  props: {
    notification: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const e = Le(), { t } = Y(), i = s, r = f(!1), a = we({
      [fe.WARNING]: "⚠",
      [fe.INFO]: "ℹ️",
      [fe.ERROR]: "❌"
    }), o = (n) => {
      e.removeNotification(n);
    }, l = () => {
      if (!i.notification.messageList)
        return !1;
    };
    return (n, c) => {
      const u = k("tippy");
      return M((v(), A("li", {
        class: oe(["flex-col default-focus-style p-4", s.notification.messageList ? "cursor-pointer" : ""]),
        content: I(t)(r.value ? "notifications.controls.collapse" : "notifications.controls.expand"),
        onClick: c[1] || (c[1] = (p) => r.value = !r.value)
      }, [
        m("div", ur, [
          m("span", null, [
            ot(D(a[s.notification.type]) + " ", 1),
            m("span", pr, D(s.notification.message), 1)
          ]),
          c[4] || (c[4] = m("span", { class: "flex-grow" }, null, -1)),
          s.notification.messageList ? (v(), A("div", {
            key: 0,
            class: oe(["dropdown-icon p-4 pointer-events-none", { "transform -rotate-180": r.value }])
          }, c[2] || (c[2] = [
            m("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24"
            }, [
              m("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
            ], -1)
          ]), 2)) : U("", !0),
          M((v(), A("button", {
            type: "button",
            onClick: c[0] || (c[0] = Qt((p) => o(s.notification), ["stop"])),
            class: "mx-4 p-4 text-gray-500 hover:text-black",
            content: I(t)("notifications.controls.dismiss")
          }, c[3] || (c[3] = [
            m("svg", {
              class: "fill-current",
              height: "16",
              width: "16",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 105.16 122.88",
              "fill-rule": "evenodd"
            }, [
              m("path", { d: "M11.17,37.16H94.65a8.4,8.4,0,0,1,2,.16,5.93,5.93,0,0,1,2.88,1.56,5.43,5.43,0,0,1,1.64,3.34,7.65,7.65,0,0,1-.06,1.44L94,117.31v0l0,.13,0,.28v0a7.06,7.06,0,0,1-.2.9v0l0,.06v0a5.89,5.89,0,0,1-5.47,4.07H17.32a6.17,6.17,0,0,1-1.25-.19,6.17,6.17,0,0,1-1.16-.48h0a6.18,6.18,0,0,1-3.08-4.88l-7-73.49a7.69,7.69,0,0,1-.06-1.66,5.37,5.37,0,0,1,1.63-3.29,6,6,0,0,1,3-1.58,8.94,8.94,0,0,1,1.79-.13ZM5.65,8.8H37.12V6h0a2.44,2.44,0,0,1,0-.27,6,6,0,0,1,1.76-4h0A6,6,0,0,1,43.09,0H62.46l.3,0a6,6,0,0,1,5.7,6V6h0V8.8h32l.39,0a4.7,4.7,0,0,1,4.31,4.43c0,.18,0,.32,0,.5v9.86a2.59,2.59,0,0,1-2.59,2.59H2.59A2.59,2.59,0,0,1,0,23.62V13.53H0a1.56,1.56,0,0,1,0-.31v0A4.72,4.72,0,0,1,3.88,8.88,10.4,10.4,0,0,1,5.65,8.8Zm42.1,52.7a4.77,4.77,0,0,1,9.49,0v37a4.77,4.77,0,0,1-9.49,0v-37Zm23.73-.2a4.58,4.58,0,0,1,5-4.06,4.47,4.47,0,0,1,4.51,4.46l-2,37a4.57,4.57,0,0,1-5,4.06,4.47,4.47,0,0,1-4.51-4.46l2-37ZM25,61.7a4.46,4.46,0,0,1,4.5-4.46,4.58,4.58,0,0,1,5,4.06l2,37a4.47,4.47,0,0,1-4.51,4.46,4.57,4.57,0,0,1-5-4.06l-2-37Z" })
            ], -1)
          ]), 8, dr)), [
            [u, { theme: "ramp4", animation: "scale" }]
          ])
        ]),
        s.notification.messageList && r.value ? (v(), A("div", hr, [
          (v(!0), A(We, null, ht(s.notification.messageList, (p, d) => (v(), A("p", {
            key: s.notification.id + p + d
          }, D(p), 1))), 128))
        ])) : U("", !0)
      ], 10, cr)), [
        [u, { onShow: l, theme: "ramp4", animation: "scale" }]
      ]);
    };
  }
}), mr = ["content"], yr = {
  key: 0,
  class: "w-full border-b border-black"
}, gr = {
  key: 1,
  class: "flex flex-col items-center h-full"
}, Zi = /* @__PURE__ */ O({
  __name: "notification-list",
  setup(s) {
    const e = Le(), { t } = Y(), i = f(), r = () => {
      i.value._tippy.hide();
    }, a = (l) => {
      l.key === "Tab" && i.value?.matches(":focus") && i.value._tippy.show();
    };
    Ye(() => {
      i.value?.addEventListener("blur", r), i.value?.addEventListener("keyup", a);
    }), dt(() => {
      i.value?.removeEventListener("blur", r), i.value?.removeEventListener("keyup", a);
    });
    const o = P(() => e.notificationStack);
    return (l, n) => {
      const c = k("focus-item"), u = k("focus-list"), p = k("tippy");
      return v(), A("div", null, [
        o.value.length > 0 ? M((v(), A("ul", {
          key: 0,
          content: I(t)("panels.controls.items"),
          ref_key: "el",
          ref: i,
          class: "h-full overflow-y-auto"
        }, [
          (v(!0), A(We, null, ht(o.value, (d, g) => (v(), A(We, {
            key: d.message + g
          }, [
            g > 0 ? (v(), A("div", yr)) : U("", !0),
            M(ae(fr, {
              class: oe([d.type]),
              notification: d
            }, null, 8, ["class", "notification"]), [
              [c]
            ])
          ], 64))), 128))
        ], 8, mr)), [
          [u],
          [p, { trigger: "manual", placement: "top-start", touch: !1 }]
        ]) : (v(), A("div", gr, [
          n[0] || (n[0] = m("span", { class: "flex-grow" }, null, -1)),
          n[1] || (n[1] = m("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            class: "h-48 w-48 fill-current"
          }, [
            m("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            m("path", { d: "M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" })
          ], -1)),
          m("span", null, D(I(t)("notifications.empty")), 1),
          n[2] || (n[2] = m("span", { style: { "flex-grow": "6" } }, null, -1))
        ]))
      ]);
    };
  }
}), vr = { class: "flex items-center hover:text-white" }, br = ["aria-label"], wr = {
  key: 0,
  class: "number rounded-full w-18 text-white"
}, Ar = { class: "notification-dropdown pointer-events-auto bg-white rounded text-center text-black w-500 h-256 flex flex-col p-0" }, Er = { class: "pb-8 border-b border-gray-600" }, xr = { class: "absolute flex right-3 top-3" }, Sr = ["content", "aria-label"], Ir = /* @__PURE__ */ O({
  __name: "caption-button",
  setup(s) {
    const e = Le(), { t } = Y(), i = P(() => e.notificationNumber), r = () => e.clearAll();
    return (a, o) => {
      const l = Z("close"), n = k("tippy");
      return v(), W(ii, {
        position: "top-start",
        tooltip: I(t)("notifications.title"),
        tooltipPlacement: "top",
        class: "pointer-events-auto sm:flex ml-4 mr-8"
      }, {
        header: ie(() => [
          m("div", vr, [
            (v(), A("svg", {
              class: "fill-current w-24 h-24",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-label": I(t)("notifications.open")
            }, o[0] || (o[0] = [
              m("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" }, null, -1)
            ]), 8, br)),
            i.value && i.value > 0 ? (v(), A("span", wr, D(i.value), 1)) : U("", !0)
          ])
        ]),
        default: ie((c) => [
          m("div", Ar, [
            m("div", null, [
              m("h4", Er, D(I(t)("notifications.title")), 1),
              m("div", xr, [
                M((v(), A("button", {
                  type: "button",
                  onClick: r,
                  class: oe(["p-4 mr-6", [
                    i.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default pointer-events-none"
                  ]]),
                  content: I(t)("notifications.controls.clearAll"),
                  "aria-label": I(t)("notifications.controls.clearAll")
                }, o[1] || (o[1] = [
                  m("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "fill-current h-20 w-20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    m("path", {
                      stroke: "none",
                      d: "M0 0h24v24H0z",
                      fill: "none"
                    }),
                    m("path", { d: "M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" }),
                    m("path", { d: "M9 17v1a3 3 0 0 0 4.194 2.753" }),
                    m("path", { d: "M22 22l-5 -5" }),
                    m("path", { d: "M17 22l5 -5" })
                  ], -1)
                ]), 10, Sr)), [
                  [n, {
                    placement: "bottom",
                    theme: "ramp4",
                    animation: "scale",
                    appendTo: "parent"
                  }]
                ]),
                ae(l, {
                  onClick: c.close
                }, null, 8, ["onClick"])
              ])
            ]),
            ae(Zi, { class: "overflow-y-auto h-230" })
          ])
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), _r = /* @__PURE__ */ Ne(Ir, [["__scopeId", "data-v-3623a7d2"]]), Tr = { class: "flex hover:text-white" }, Lr = ["aria-label"], Rr = { class: "about-ramp-dropdown pointer-events-auto bg-white rounded w-256 h-50" }, $r = ["aria-label", "content"], Cr = { class: "pb-8 border-b border-gray-600 mb-10" }, Or = { class: "absolute right-5 top-5" }, kr = { class: "select-text" }, Mr = { class: "font-bold cursor-text" }, Pr = { class: "text-sm cursor-text" }, Nr = { class: "font-bold cursor-text" }, Fr = { class: "ml-5 cursor-text" }, Dr = /* @__PURE__ */ O({
  __name: "about-ramp-dropdown",
  props: {
    position: {
      type: String,
      default: "top-start"
    }
  },
  setup(s) {
    const { t: e } = Y(), t = ge("iApi"), i = () => {
      t.reload();
    }, r = P(() => `${mt.major}.${mt.minor}.${mt.patch}`), a = P(() => mt.hash.slice(0, 9)), o = P(() => {
      const l = new Date(mt.timestamp);
      if (isNaN(l.getTime()))
        return ["dev mode", "no date"];
      {
        const n = (c) => c < 10 ? "0" + c.toString() : c.toString();
        return [
          `${l.getFullYear()}-${l.getMonth() + 1}-${l.getDate()}`,
          `${l.getHours()}:${n(l.getMinutes())}:${n(l.getSeconds())}`
        ];
      }
    });
    return (l, n) => {
      const c = Z("close"), u = Z("dropdown-menu"), p = k("tippy"), d = k("focus-item");
      return M((v(), W(u, {
        class: "pointer-events-auto sm:flex",
        position: s.position,
        tooltip: I(e)("ramp.about"),
        tooltipPlacement: s.position
      }, {
        header: ie(() => [
          m("div", Tr, [
            (v(), A("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-20 h-20",
              "aria-label": I(e)("ramp.about.open")
            }, n[0] || (n[0] = [
              m("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }, null, -1)
            ]), 8, Lr))
          ])
        ]),
        default: ie((g) => [
          m("div", Rr, [
            m("div", null, [
              M((v(), A("button", {
                class: "absolute left-5 top-5 text-gray-500 hover:text-black focus:text-black p-8",
                onClick: i,
                "aria-label": I(e)("ramp.reload"),
                content: I(e)("ramp.reload")
              }, n[1] || (n[1] = [
                m("svg", {
                  class: "fill-current w-16 h-16",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  m("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
                ], -1)
              ]), 8, $r)), [
                [p, {
                  placement: "bottom-start",
                  theme: "ramp4",
                  animation: "scale"
                }]
              ]),
              m("h4", Cr, D(I(e)("ramp.about")), 1),
              m("div", Or, [
                ae(c, {
                  onClick: g.close
                }, null, 8, ["onClick"])
              ]),
              m("div", kr, [
                m("div", null, [
                  m("span", Mr, D(r.value), 1),
                  m("span", Pr, " [" + D(a.value) + "] ", 1)
                ]),
                m("div", null, [
                  m("span", Nr, D(o.value[0]), 1),
                  m("span", Fr, D(o.value[1]), 1)
                ]),
                n[2] || (n[2] = m("div", { class: "mt-5" }, [
                  m("a", {
                    class: "text-sm underline text-blue-600",
                    href: "https://github.com/ramp4-pcar4/ramp4-pcar4",
                    target: "_blank"
                  }, [
                    m("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      class: "inline-block fill-black w-16 h-16"
                    }, [
                      m("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
                    ]),
                    ot(" ramp4-pcar4 ")
                  ])
                ], -1))
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["position", "tooltip", "tooltipPlacement"])), [
        [d]
      ]);
    };
  }
}), Gr = /* @__PURE__ */ Ne(Dr, [["__scopeId", "data-v-24f3a9dc"]]), Ur = { class: "map-caption absolute bottom-0 h-29 sm:h-38 flex justify-end pointer-events-auto cursor-default select-none text-gray-200 bg-black-75 left-0 right-0 py-2 sm:py-6" }, Br = {
  key: 0,
  class: "relative top-2 sm:top-1 ml-4 sm:ml-0 shrink-0"
}, Vr = ["href", "aria-label"], zr = ["src", "alt"], qr = {
  key: 1,
  class: "relative ml-10 top-2 text-sm sm:text-base"
}, jr = { class: "flex min-w-fit justify-end" }, Wr = {
  key: 0,
  class: "pl-8 px-14 sm:block display-none relative top-2"
}, Hr = ["aria-pressed", "aria-label", "content"], Yr = { class: "relative top-1 text-sm sm:text-base" }, Jr = { class: "text-gray-200 hover:text-white text-sm sm:text-base pb-5" }, Kr = ["onClick"], Zr = {
  key: 0,
  class: "sr-only"
}, Xr = /* @__PURE__ */ O({
  __name: "map-caption",
  setup(s) {
    const e = Ue(), t = pe(), { t: i } = Y(), r = ge("iApi"), a = P(() => e.scale), o = P(() => e.attribution), l = P(() => e.coords), n = P(() => e.langtoggle), c = P(() => t.config.map), u = f([]), p = we([]);
    p.push(
      It(c, (w) => {
        w && r.geo.map.caption.createCaption(c.value?.caption);
      })
    ), dt(() => {
      p.forEach((w) => w());
    }), ys(() => {
      Ot(() => {
        r.$i18n.locale.value && u.value.length == 0 && (u.value = r.$i18n.availableLocales);
      });
    });
    const d = () => o.value?.logo?.link && o.value?.logo?.value && !o.value?.logo?.disabled, g = (w) => {
      r.$i18n.locale.value != w && r.setLanguage(w);
    }, h = () => {
      e.toggleScale(), r.geo.map.caption.updateScale();
    }, y = (w = !1) => i(w ? "map.toggleScaleToMetric" : "map.toggleScaleToImperial");
    return (w, b) => {
      const $ = Z("dropdown-menu"), L = k("truncate"), G = k("tippy");
      return v(), A("div", Ur, [
        ae(Gr, {
          class: "sm:block display-none ml-8 mr-4",
          position: "top-end"
        }),
        ae(_r, { class: "sm:block display-none" }),
        d() ? (v(), A("span", Br, [
          m("a", {
            class: "pointer-events-auto cursor-pointer",
            href: o.value?.logo.link,
            target: "_blank",
            "aria-label": o.value?.logo.altText
          }, [
            m("img", {
              class: "object-contain h-18 sm:h-26",
              src: o.value?.logo.value,
              alt: o.value?.logo.altText
            }, null, 8, zr)
          ], 8, Vr)
        ])) : U("", !0),
        o.value?.text.disabled ? U("", !0) : M((v(), A("span", qr, [
          ot(D(o.value?.text.value), 1)
        ])), [
          [L, {
            options: {
              placement: "top",
              hideOnClick: !1,
              theme: "ramp4",
              animation: "scale"
            }
          }]
        ]),
        b[0] || (b[0] = m("span", { class: "flex-grow w-15" }, null, -1)),
        m("div", jr, [
          l.value?.disabled ? U("", !0) : M((v(), A("div", Wr, [
            ot(D(l.value?.formattedString), 1)
          ])), [
            [L, {
              options: {
                hideOnClick: !1,
                theme: "ramp4",
                animation: "scale"
              }
            }]
          ]),
          a.value?.disabled ? U("", !0) : M((v(), A("button", {
            key: 1,
            type: "button",
            class: "flex-shrink-0 mx-2 sm:mx-10 px-4 pointer-events-auto cursor-pointer border-none",
            onClick: h,
            "aria-pressed": a.value?.isImperialScale,
            "aria-label": `
                    ${a.value?.label} - ${y(a.value?.isImperialScale)}
                `,
            content: y(a.value?.isImperialScale)
          }, [
            m("span", {
              class: "border-solid border-2 border-white border-t-0 h-5 mr-4 inline-block",
              style: Mi({ width: a.value?.width })
            }, null, 4),
            m("span", Yr, D(a.value?.label), 1)
          ], 8, Hr)), [
            [G, {
              delay: [300, 0],
              placement: "top",
              hideOnClick: !1,
              theme: "ramp4",
              animation: "scale",
              touch: ["hold", 200]
            }]
          ]),
          n.value?.disabled ? U("", !0) : (v(), W($, {
            key: 2,
            class: "flex-shrink-0 pointer-events-auto focus:outline-none px-4 mr-4 relative top-2",
            position: "top-end",
            tooltip: I(i)("map.changeLanguage"),
            ariaLabel: `${I(i)("map.language.short")} - ${I(i)("map.changeLanguage")}`,
            tooltipPlacement: "top-start",
            tooltipPlacementAlt: "left-end"
          }, {
            header: ie(() => [
              m("span", Jr, D(I(i)("map.language.short")), 1)
            ]),
            default: ie(() => [
              (v(!0), A(We, null, ht(u.value, (V, Q) => (v(), A("a", {
                key: `${V}-${Q}`,
                class: oe(["flex-auto items-center text-sm sm:text-base cursor-pointer", { "font-bold": V === I(r).$i18n.locale.value }]),
                href: "javascript:;",
                onClick: (Xe) => g(V)
              }, [
                ot(D(I(i)("map.language." + V)) + " ", 1),
                V === I(r).$i18n.locale.value ? (v(), A("span", Zr, D(I(i)("map.language.curr")), 1)) : U("", !0)
              ], 10, Kr))), 128))
            ]),
            _: 1
          }, 8, ["tooltip", "ariaLabel"]))
        ])
      ]);
    };
  }
}), Qr = ["content", "aria-label"], ea = {
  key: 0,
  class: "number absolute -top-2 -right-2 text-white w-18 rounded-full"
}, ta = /* @__PURE__ */ O({
  __name: "floating-button",
  setup(s) {
    const e = Le(), t = ge("iApi"), { t: i } = Y(), r = P(() => e.notificationNumber);
    return (a, o) => {
      const l = k("tippy");
      return M((v(), A("button", {
        type: "button",
        onClick: o[0] || (o[0] = (n) => I(t).panel.get("notifications").open()),
        class: "pointer-events-auto items-center absolute left-8 bottom-36 p-6 block sm:display-none bg-black-75 rounded-full text-gray-400 hover:text-white",
        content: I(i)("notifications.title"),
        "aria-label": I(i)("notifications.title")
      }, [
        o[1] || (o[1] = m("svg", {
          class: "fill-current w-24 h-24",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24"
        }, [
          m("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })
        ], -1)),
        r.value && r.value > 0 ? (v(), A("span", ea, D(r.value), 1)) : U("", !0)
      ], 8, Qr)), [
        [l]
      ]);
    };
  }
}), ia = /* @__PURE__ */ Ne(ta, [["__scopeId", "data-v-a451db5c"]]), sa = { class: "flex items-center mb-20" }, ra = { class: "text-xl" }, aa = /* @__PURE__ */ O({
  __name: "keyboard-instructions",
  setup(s) {
    const e = ge("iApi"), { t } = Y(), i = f(!1), r = f(["app", "lists", "map"]), a = f([]), o = f(null), l = f(null);
    Ye(() => {
      a.value.push(
        e.event.on("openKeyboardInstructions", () => {
          i.value = !0, Ot(() => {
            o.value.focus();
          });
        })
      );
    }), dt(() => {
      a.value.forEach((c) => e.event.off(c));
    });
    const n = (c) => {
      c.key === "Tab" ? c.shiftKey && c.target === o.value ? (c.preventDefault(), l.value.focus()) : !c.shiftKey && c.target === l.value && (c.preventDefault(), o.value.focus()) : c.key === "Escape" && (c.preventDefault(), i.value = !1);
    };
    return (c, u) => {
      const p = Z("close");
      return i.value ? (v(), A("div", {
        key: 0,
        class: "absolute inset-0 flex justify-center items-center bg-opacity-30 bg-black z-50 pointer-events-auto",
        onClick: u[3] || (u[3] = (d) => i.value = !1),
        onKeydown: n
      }, [
        m("div", {
          class: "bg-white w-500 pointer-events-auto shadow-2xl p-20 flex flex-col",
          onClick: u[2] || (u[2] = Qt(() => {
          }, ["stop", "prevent"])),
          tabindex: "0",
          ref_key: "firstEl",
          ref: o
        }, [
          m("div", sa, [
            m("h2", ra, D(I(t)("keyboardInstructions.title")), 1),
            ae(p, {
              class: "ml-auto",
              onClick: u[0] || (u[0] = (d) => i.value = !1)
            })
          ]),
          (v(!0), A(We, null, ht(r.value, (d) => (v(), A("p", {
            class: "whitespace-pre-line pb-10",
            key: d
          }, D(I(t)(`keyboardInstructions.${d}`)), 1))), 128)),
          m("button", {
            type: "button",
            class: "mt-auto self-end mr-10 mb-10 px-20 py-10",
            onClick: u[1] || (u[1] = (d) => i.value = !1),
            ref_key: "lastEl",
            ref: l
          }, D(I(t)("keyboardInstructions.OK")), 513)
        ], 512)
      ], 32)) : U("", !0);
    };
  }
}), st = B("instance", () => ({ started: f(!1) })), oa = { class: "h-full relative" }, na = { class: "inner-shell absolute top-0 left-0 h-full w-full pointer-events-none" }, la = { class: "absolute top-8 w-full flex justify-center" }, ca = {
  key: 1,
  class: "w-full h-full"
}, ua = /* @__PURE__ */ O({
  __name: "shell",
  setup(s) {
    const e = ge("iApi"), t = st(), i = ye(), r = He(), { t: a } = Y(), o = P(() => i.items.appbar), l = () => {
      e.event.emit("openKeyboardInstructions");
    }, n = () => r.teleported;
    return (c, u) => (v(), A("div", oa, [
      m("div", na, [
        u[0] || (u[0] = m("div", { class: "sr-only screen-reader-alert" }, null, -1)),
        m("div", la, [
          m("button", {
            type: "button",
            class: "bg-white hidden-until-focus z-50 shadow-md px-10",
            onClick: l
          }, D(I(a)("keyboardInstructions.open")), 1)
        ]),
        ae(aa),
        ae(ir, { class: "panel-stack sm:flex absolute inset-0 overflow-hidden sm:p-12 z-10 sm:pl-80 xs:pl-40 sm:pb-48 xs:pb-28 xs:pr-0 sm:pr-40" }),
        o.value ? U("", !0) : (v(), W(ia, { key: 0 })),
        ae(Xr, { class: "z-30" })
      ]),
      I(t).started ? (v(), W(Xs, { key: 0 })) : (v(), A("div", ca, u[1] || (u[1] = [
        m("div", { class: "spinner relative inset-x-1/2 inset-y-9/20" }, null, -1)
      ]))),
      (v(!0), A(We, null, ht(n(), (p) => (v(), W(gs, {
        to: p.teleport?.target,
        key: p.id
      }, [
        (v(), W(Ji, {
          key: `${p.id}`,
          panel: p
        }, null, 8, ["panel"]))
      ], 8, ["to"]))), 128))
    ]));
  }
}), pa = /* @__PURE__ */ Ne(ua, [["__scopeId", "data-v-7bc0478f"]]), da = O({
  name: "App",
  components: { Shell: pa },
  setup() {
    const s = vs();
    Ye(() => {
      new Yi().observe(s?.proxy?.$refs["app-size"]), Os({
        aria: {
          content: "labelledby"
        },
        theme: "ramp4",
        animation: "scale",
        inertia: !0,
        trigger: "mouseenter manual focus",
        touch: ["hold", 200],
        delay: [300, 0],
        appendTo: () => document.fullscreenElement || document.body
      });
    });
  }
}), ha = ["lang"], fa = {
  class: "h-full",
  ref: "app-size"
};
function ma(s, e, t, i, r, a) {
  const o = Z("shell");
  return v(), A("div", {
    class: "ramp-app ramp-styles animation-enabled",
    lang: s.$i18n.locale
  }, [
    m("div", fa, [
      ae(o)
    ], 512)
  ], 8, ha);
}
const ya = /* @__PURE__ */ Ne(da, [["render", ma]]), Se = "focus-list", qe = "focus-item", ga = "focus-icon", va = "focus-container", ct = `[${Se}],[${va}]`, wt = "truncate-text", At = "show-truncate", at = "focused", Kt = `button,input,select,a,textarea,[contenteditable],[${Se}],[${ga}],[tabIndex]`, ba = {
  mounted(s, e) {
    +s.getAttribute("tabindex") <= 0 && s.setAttribute("tabindex", "0"), s.toggleAttribute(Se, !0), new wa(s, e.value);
  },
  updated(s) {
    Xi(s);
  }
};
function Xi(s) {
  s.querySelectorAll(Kt).forEach((t) => {
    if (t.closest(ct) === s || t.closest(ct) === t && t.parentElement.closest(ct) === s)
      if (t.closest(`[${Se}],.${at}`).classList.contains(at))
        t.setAttribute("tabindex", "0");
      else {
        t.setAttribute("tabindex", "-1");
        return;
      }
  });
}
class wa {
  element;
  highlightedItem;
  isHorizontal;
  isClicked;
  isTapped;
  /**
   * Creates an instance of FocusListManager
   *
   * @param {HTMLElement} element The focus list's element
   * @param {string} attributeValue The value of the `v-focus-list` attribute which tells the focus list manager the orientation of the list. 'horizontal' means the list should be traversed horizontally, and other value will make the list vertical (including no value).
   */
  constructor(e, t) {
    this.element = e, this.highlightedItem = this.element, this.isHorizontal = t === "horizontal", this.isClicked = !1, this.isTapped = !1, this.setTabIndex(-1), this.element.setAttribute("role", "group");
    const i = this;
    e.addEventListener("keydown", function(r) {
      i.onKeydown(r);
    }), e.addEventListener("focus", function() {
      i.onFocus();
    }), e.addEventListener("blur", function() {
      i.onBlur();
    }), e.addEventListener("mousedown", function() {
      i.onMousedown();
    }), e.addEventListener("touchstart", function() {
      i.onTouchstart();
    }), e.addEventListener("refocusLegendItem", (r) => {
      const o = r.detail.focusItem;
      i.element.focus(), i.focusItem(o), this.highlightedItem = o;
    }), document.addEventListener("click", function(r) {
      r.target && e.contains(r.target) ? i.onClick(r) : i.defocusItem(i.highlightedItem);
    });
  }
  /**
   * Sets `tabindex` to `value` for every tabbable thing under `focusItem` (or the list if not specified)
   *
   * @param {Number} value the value to give `tabindex` on each tabbable item
   * @param {Element} focusItem the element containing the tabbable items, defaults to the focus list
   */
  setTabIndex(e, t = this.element) {
    t.querySelectorAll(Kt).forEach((r) => {
      (e === -1 || r.closest(ct) === this.element || r.closest(ct) === r && r.parentElement.closest(ct) === this.element || r.closest(`[${Se}],.${at}`).classList.contains(at)) && r.setAttribute("tabindex", e.toString());
    });
  }
  /**
   * Removes 'focused' to the class list of `item` then updates the tabIndex on subitems (setting them to -1).
   *
   * @param {Element} item The element to defocus
   */
  defocusItem(e) {
    e.classList.remove(at), this.setTabIndex(-1, e), e._tippy && e._tippy.hide(), e.getAttribute(qe) === At && e.querySelector(`[${wt}]`)?._tippy?.hide();
  }
  /**
   * Adds 'focused' to the class list of `item` then updates the tabIndex on subitems (setting them to 0).
   *
   * @param {Element} item The element to focus
   */
  focusItem(e) {
    e.classList.add(at), this.setAriaActiveDescendant(e), this.setTabIndex(0, e), e.scrollIntoView({ block: "nearest" }), e._tippy && !this.isTapped && e._tippy.show(), e.getAttribute(qe) === At && e.querySelector(`[${wt}]`)?._tippy?.show(), this.isTapped = !1;
  }
  /**
   * Updates the list's `aria-activedescendant` to be `item`
   *
   * @param item The element that should be the active descendant
   */
  setAriaActiveDescendant(e) {
    this.element.setAttribute("aria-activedescendant", e.getAttribute("id"));
  }
  /**
   * Moves the highlight through the `listOfItems` forward (or backward) 1 spot
   *
   * @param {HTMLElement[]}listOfItems The list of items being moved through
   * @param {boolean} reverse true iff the highlight should move back one spot
   */
  shiftHighlight(e, t = !1) {
    if (this.defocusItem(this.highlightedItem), t)
      if (this.highlightedItem === this.element)
        this.highlightedItem = e[e.length - 1];
      else {
        const i = Array.prototype.indexOf.call(e, this.highlightedItem);
        this.highlightedItem = e[i - 1] || e[e.length - 1];
      }
    else if (this.highlightedItem === this.element)
      this.highlightedItem = e[0];
    else {
      const i = Array.prototype.indexOf.call(e, this.highlightedItem);
      this.highlightedItem = e[i + 1] || e[0];
    }
    this.element.focus(), this.focusItem(this.highlightedItem);
  }
  /**
   * Callback for the keydown event listener on the focus list element
   *
   * @param {KeyboardEvent} event keydown event
   */
  onKeydown(e) {
    const t = this, i = Array.prototype.filter.call(
      this.element.querySelectorAll(`[${qe}]`),
      (r) => r.closest(`[${Se}]`) === t.element && !!r.offsetParent
    );
    if (i.length !== 0)
      switch (e.key) {
        case "Up":
        case "ArrowUp":
          if (this.isHorizontal)
            break;
          e.preventDefault(), e.stopPropagation(), this.shiftHighlight(i, !0);
          break;
        case "Down":
        case "ArrowDown":
          if (this.isHorizontal)
            break;
          e.preventDefault(), e.stopPropagation(), this.shiftHighlight(i);
          break;
        case "Left":
        case "ArrowLeft":
          if (!this.isHorizontal)
            break;
          e.preventDefault(), e.stopPropagation(), this.shiftHighlight(i, !0);
          break;
        case "Right":
        case "ArrowRight":
          if (!this.isHorizontal)
            break;
          e.preventDefault(), e.stopPropagation(), this.shiftHighlight(i);
          break;
        case "Esc":
        case "Escape":
          this.highlightedItem !== this.element && (e.preventDefault(), e.stopPropagation(), this.defocusItem(this.highlightedItem), this.highlightedItem = this.element, this.element.removeAttribute("aria-activedescendant"), this.element.focus());
          break;
        case "Enter":
        case " ":
          e.target === this.element && this.highlightedItem !== this.element && (e.preventDefault(), e.stopPropagation(), this.highlightedItem.click());
          break;
        case "Tab":
          const r = this.highlightedItem.querySelectorAll(Kt).length === 0, a = this.element.isEqualNode(e.target);
          this.highlightedItem !== this.element && a && (r && this.defocusItem(this.highlightedItem), e.shiftKey && (e.preventDefault(), e.stopPropagation(), this.defocusItem(this.highlightedItem), this.highlightedItem = this.element, this.element.removeAttribute("aria-activedescendant"), this.element.focus()));
      }
  }
  /**
   * Callback for the click event listener on the focus list element
   *
   * @param {MouseEvent} event click event
   */
  onClick(e) {
    this.defocusItem(this.highlightedItem);
    let t = e.target;
    if (!t.hasAttribute(Se))
      for (; t.parentElement.closest(`[${Se}]`) !== this.element; )
        t = t.parentElement.closest(`[${Se}]`);
    this.highlightedItem = t.closest(`[${qe}]`) || t.closest(`[${Se}]`) || this.highlightedItem, t.hasAttribute(`${qe}`) && this.element.focus(), this.highlightedItem !== this.element ? this.focusItem(this.highlightedItem) : this.element.removeAttribute("aria-activedescendant");
  }
  /**
   * Callback for the focus event listener on the focus list element.
   * NOTE: this is only called when the LIST ELEMENT is focused, not any descendant
   *
   * This is used to pull back the `focusedItem` id and the aria-activedescendant attribute when a list is focused
   */
  onFocus() {
    this.highlightedItem && !this.isClicked && (this.highlightedItem._tippy && this.highlightedItem._tippy.show(), this.highlightedItem.getAttribute(qe) === At && this.highlightedItem.querySelector(`[${wt}]`)?._tippy?.show()), this.isClicked = !1, this.element.hasAttribute("aria-activedescendant") || this.highlightedItem === this.element ? this.highlightedItem !== this.element && this.focusItem(this.highlightedItem) : this.setAriaActiveDescendant(this.highlightedItem), Xi(this.element), this.highlightedItem && this.highlightedItem !== this.element && this.highlightedItem.setAttribute("tabindex", "-1");
  }
  /**
   * Callback for the BLUR event listener on the focus list element.
   * NOTE: this is only called when the list element stops being focused, not a descendant
   */
  onBlur() {
    this.highlightedItem && (this.highlightedItem._tippy && this.highlightedItem._tippy.hide(), this.highlightedItem.getAttribute(qe) === At && this.highlightedItem.querySelector(`[${wt}]`)?._tippy?.hide());
  }
  /**
   * Callback for the MOUSEDOWN event listener on the focus list element.
   */
  onMousedown() {
    this.isClicked = !0;
  }
  /**
   * Callback for the TOUCHSTART event listener on the focus list element.
   */
  onTouchstart() {
    this.isTapped = !0;
  }
}
const wi = "focus-item", Aa = {
  beforeMount(s, e) {
    s.hasAttribute("id") || s.setAttribute("id", Ea()), e.value ? s.setAttribute(wi, e.value) : s.toggleAttribute(wi, !0);
  }
};
function Ea() {
  let s;
  do
    s = "focus-item-" + Math.random().toString(36).substring(2, 9);
  while (document.getElementById(s) !== null);
  return s;
}
const si = "focus-container", Qi = "focus-list", xa = "focus-icon", qt = `[${Qi}],[${si}]`, Ai = `button,input,select,a,textarea,[contenteditable],.ag-tab-guard,[${Qi}],[${si}],[${xa}],[tabIndex]`;
let jt = [];
const Sa = {
  mounted(s) {
    [...document.querySelectorAll(".inner-shell")].some((t) => t.contains(s)) && jt.push(new Ia(s));
  },
  beforeUnmount(s) {
    jt = jt.filter((e) => e.element === s ? (e.removeEventListeners(), !1) : !0);
  }
};
class Ia {
  element;
  /**
   * Creates an instance of FocusContainerManager
   *
   * @param element The HTMLElement the directive was placed on
   * @param options The options provided to the directive
   */
  constructor(e) {
    this.element = e, this.element.toggleAttribute(si, !0), this.element.tabIndex = 0, setTimeout(() => this.disableTabbing(), 600);
    const t = this;
    this.element.addEventListener("keypress", function(i) {
      t.onKeypress(i);
    }), this.element.addEventListener("click", function() {
      t.onClick();
    }), this.element.addEventListener("focusout", function(i) {
      t.onFocusOut(i);
    }), this.element.addEventListener("focus", function() {
      t.onFocus();
    });
  }
  /**
   * Removes all of the event listeners on the container element.
   */
  removeEventListeners() {
    const e = this;
    this.element.removeEventListener("keypress", function(t) {
      e.onKeypress(t);
    }), this.element.removeEventListener("click", function() {
      e.onClick();
    }), this.element.removeEventListener("focusout", function(t) {
      e.onFocusOut(t);
    }), this.element.removeEventListener("focus", function() {
      e.onFocus();
    });
  }
  /**
   * Callback for the `keypress` event on the container element
   *
   * @param event The keyboard event
   */
  onKeypress(e) {
    e.target === this.element && (e.key === "Enter" || e.key === " ") && this.enableTabbing().focus();
  }
  /**
   * Callback for the `click` event on the container element
   */
  onClick() {
    this.enableTabbing();
  }
  /**
   * Callback for the `focusout` event on the container element
   *
   * @param event The focus event
   */
  onFocusOut(e) {
    this.element.contains(e.relatedTarget) || this.disableTabbing();
  }
  /**
   * Callback for the `focus` event on the container element
   */
  onFocus() {
    this.disableTabbing();
  }
  /**
   * Sets tabindex to -1 for EVERY element under the container element
   */
  disableTabbing() {
    Array.prototype.filter.call(this.element.querySelectorAll(Ai), () => !0).forEach((t) => {
      t.tabIndex = -1;
    });
  }
  /**
   * Sets tabindex to 0 for every VISIBLE element not under a different focus container or list.
   * @return {HTMLElement} the first valid element
   */
  enableTabbing() {
    let e;
    return Array.prototype.map.call(this.element.querySelectorAll(Ai), (t) => {
      (t.closest(qt) === this.element || t.closest(qt) === t && t.parentElement.closest(qt) === this.element) && t.offsetParent && (t.tabIndex = 0, e === void 0 && (e = t));
    }), e;
  }
}
const _a = "truncate-text", Ta = "truncate-trigger", La = {
  beforeMount(s, e) {
    !s.classList.contains("truncate") && !e.value?.noTruncateClass && s.classList.add("truncate"), s.toggleAttribute(_a, !0);
  },
  mounted(s, e) {
    let t;
    e.value && e.value.externalTrigger && (t = s.closest(`[${Ta}]`)), ks(s, {
      content: Ei(s.textContent),
      onShow: Ra,
      allowHTML: !0,
      placement: "bottom-start",
      maxWidth: 320,
      //flip: false, // can't find a replacement for Vue3
      //boundary: 'window',
      triggerTarget: t,
      ...e.value?.options || {}
    });
  },
  updated(s, e) {
    s._tippy && (s._tippy.setContent(Ei(s.textContent)), e.value && e.value.options && s._tippy.setProps(e.value.options));
  },
  unmounted(s) {
    s._tippy && s._tippy.destroy();
  }
};
function Ra(s) {
  if (!(s.reference.clientWidth < s.reference.scrollWidth || s.reference.clientHeight < s.reference.scrollHeight))
    return !1;
}
function Ei(s) {
  if (s === null)
    return "";
  let e = Ms(s, {
    target: "_blank",
    validate: {
      url: (t) => /^https?:\/\//.test(t)
      // only links that begin with a protocol will be hyperlinked
    }
  });
  return e = `<div style='word-break: break-word;'>${e}</div>`, e;
}
const $a = ["content"], Ca = {
  key: 0,
  class: "flex flex-shrink-0 items-center border-b border-solid border-gray-600 px-8 h-48 overflow-hidden"
}, Oa = {
  class: "flex-grow text-lg py-16 pl-8 min-w-0",
  tabIndex: "0"
}, ka = { key: 1 }, Ma = {
  key: 0,
  class: "flex"
}, Pa = ["innerHTML"], Na = {
  key: 2,
  class: "px-8 py-16 border-t border-gray-400 default-focus-style"
}, Fa = /* @__PURE__ */ O({
  __name: "panel-screen",
  props: {
    // prop indicating if the `header` slot should be rendered
    header: {
      type: Boolean,
      default: !0
    },
    // prop indicating if the `content` slot should be rendered
    content: {
      type: Boolean,
      default: !0
    },
    // prop indicating if the `footer` slot should be rendered
    footer: {
      type: Boolean,
      default: !1
    },
    panel: {
      type: Object,
      required: !0
    },
    screenId: {
      type: String,
      required: !1
    }
  },
  setup(s, { expose: e }) {
    const { t } = Y(), i = He(), r = $t(), a = ge("iApi"), o = mi("el"), l = mi("contentEl"), n = f();
    e({ el: o });
    const c = s, u = P(() => a.fixture.get("appbar") ? r.temporary : []), p = P(() => i.mobileView), d = P(() => i.reorderable), g = (b) => b.scrollHeight > b.clientHeight, h = () => !p.value && !c.panel.teleport, y = (b) => {
      c.panel.move(b), b === "left" && Ot(() => {
        (o.value?.querySelector(".move-left")).focus();
      });
    }, w = P(() => c.screenId ? c.panel.screens[c.screenId][a.$i18n.locale.value ?? "en"] : null);
    return Ye(() => {
      o.value?.addEventListener("blur", () => {
        o.value._tippy.hide();
      }), o.value?.addEventListener("keyup", (b) => {
        b.key === "Tab" && o.value?.matches(":focus") && o.value._tippy.show();
      }), n.value = new ResizeObserver(() => {
        g(l.value) ? l.value?.setAttribute("tabIndex", "0") : l.value?.removeAttribute("tabIndex");
      }), n.value.observe(l.value);
    }), dt(() => {
      o.value?.removeEventListener("blur", () => {
        o.value._tippy.hide();
      }), o.value?.removeEventListener("keyup", (b) => {
        b.key === "Tab" && o.value?.matches(":focus") && o.value._tippy.show();
      }), n.value.disconnect();
    }), (b, $) => {
      const L = Z("back"), G = Z("panel-options-menu"), V = Z("left"), Q = Z("right"), Xe = Z("pin"), Nt = Z("expand"), Ft = Z("minimize"), Dt = Z("close"), Gt = k("truncate"), Ut = k("focus-item"), S = k("tippy");
      return M((v(), A("div", {
        class: "h-full flex flex-col items-stretch",
        content: `<div style='word-break: break-word;'>${I(t)(s.panel.alertName) + ". " + I(t)("panels.access")}</div>`,
        ref_key: "el",
        ref: o
      }, [
        s.header ? (v(), A("header", Ca, [
          ae(L, {
            class: oe(s.panel.teleport ? "display-none" : "block sm:display-none"),
            onClick: $[0] || ($[0] = (R) => s.panel.close())
          }, null, 8, ["class"]),
          M((v(), A("h2", Oa, [
            b.$slots.header ? Me(b.$slots, "header", { key: 0 }) : (v(), A("div", ka, D(I(t)(s.panel.alertName)), 1))
          ])), [
            [Gt]
          ]),
          b.$slots.controls ? (v(), W(G, { key: 0 }, {
            default: ie(() => [
              Me(b.$slots, "controls")
            ]),
            _: 3
          })) : U("", !0),
          m("div", {
            class: oe(s.panel.teleport ? "flex" : "display-none sm:flex")
          }, [
            s.panel.teleport ? U("", !0) : (v(), A("div", Ma, [
              d.value ? (v(), W(V, {
                key: 0,
                onClick: $[1] || ($[1] = (R) => y("left")),
                active: !s.panel.isLeftMostPanel
              }, null, 8, ["active"])) : U("", !0),
              d.value ? (v(), W(Q, {
                key: 1,
                onClick: $[2] || ($[2] = (R) => y("right")),
                active: !s.panel.isRightMostPanel
              }, null, 8, ["active"])) : U("", !0),
              ae(Xe, {
                onClick: $[3] || ($[3] = (R) => s.panel.pin()),
                active: s.panel.isPinned
              }, null, 8, ["active"]),
              s.panel.controls && s.panel.controls.expand ? (v(), W(Nt, {
                key: 2,
                onClick: $[4] || ($[4] = (R) => s.panel.expand()),
                active: s.panel.expanded
              }, null, 8, ["active"])) : U("", !0)
            ])),
            s.panel.button && u.value?.includes(s.panel.id) ? (v(), W(Ft, {
              key: 1,
              onClick: $[5] || ($[5] = (R) => s.panel.minimize())
            })) : U("", !0),
            ae(Dt, {
              onClick: $[6] || ($[6] = (R) => s.panel.close())
            })
          ], 2)
        ])) : U("", !0),
        s.content ? (v(), A("div", {
          key: 1,
          class: "p-8 flex-grow overflow-y-auto",
          ref_key: "contentEl",
          ref: l
        }, [
          b.$slots.content ? Me(b.$slots, "content", { key: 0 }) : w.value ? (v(), A("div", {
            key: 1,
            innerHTML: w.value.innerHTML
          }, null, 8, Pa)) : U("", !0)
        ], 512)) : U("", !0),
        s.footer ? M((v(), A("div", Na, [
          Me(b.$slots, "footer")
        ])), [
          [Ut]
        ]) : U("", !0)
      ], 8, $a)), [
        [S, {
          trigger: "manual",
          touch: !1,
          onShow: h,
          allowHTML: !0,
          maxWidth: s.panel.style["flex-basis"] ?? 350,
          popperOptions: {
            placement: "top",
            modifiers: [
              { name: "preventOverflow", options: { altAxis: !0 } },
              { name: "flip", options: { fallbackPlacements: ["top"] } }
            ]
          }
        }]
      ]);
    };
  }
}), Da = { class: "relative" }, Ga = ["content", "aria-label"], Ua = ["transform"], Ba = /* @__PURE__ */ O({
  __name: "pin",
  props: {
    active: Boolean
  },
  setup(s) {
    const { t: e } = Y();
    return (t, i) => {
      const r = k("tippy");
      return v(), A("div", Da, [
        M((v(), A("button", {
          type: "button",
          class: oe(["text-gray-500 hover:text-black focus:text-black p-8", { "text-gray-700": s.active }]),
          content: I(e)(s.active ? "panels.controls.unpin" : "panels.controls.pin"),
          "aria-label": I(e)(s.active ? "panels.controls.unpin" : "panels.controls.pin")
        }, [
          (v(), A("svg", {
            class: "fill-current w-16 h-16",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512",
            transform: `rotate(${s.active ? 30 : 0})`
          }, i[0] || (i[0] = [
            m("path", { d: "M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z" }, null, -1)
          ]), 8, Ua))
        ], 10, Ga)), [
          [r, { placement: "bottom", hideOnClick: !1 }]
        ])
      ]);
    };
  }
}), Va = { class: "relative" }, za = ["content", "aria-label"], qa = /* @__PURE__ */ O({
  __name: "close",
  props: {
    active: Boolean
  },
  setup(s) {
    const { t: e } = Y();
    return (t, i) => {
      const r = k("tippy");
      return v(), A("div", Va, [
        M((v(), A("button", {
          type: "button",
          class: oe(["text-gray-500 hover:text-black focus:text-black p-8", { "text-gray-700": s.active }]),
          content: I(e)("panels.controls.close"),
          "aria-label": I(e)("panels.controls.close")
        }, i[0] || (i[0] = [
          m("svg", {
            class: "fill-current w-16 h-16",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 352 512"
          }, [
            m("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" })
          ], -1)
        ]), 10, za)), [
          [r, {
            placement: "bottom",
            theme: "ramp4",
            animation: "scale"
          }]
        ])
      ]);
    };
  }
}), ja = { class: "relative" }, Wa = ["content", "aria-label"], Ha = /* @__PURE__ */ O({
  __name: "back",
  props: {
    active: Boolean
  },
  setup(s) {
    const { t: e } = Y();
    return (t, i) => {
      const r = k("tippy");
      return v(), A("div", ja, [
        M((v(), A("button", {
          type: "button",
          class: oe(["text-gray-500 hover:text-black focus:text-black p-8", { "text-gray-700": s.active }]),
          content: I(e)("panels.controls.back"),
          "aria-label": I(e)("panels.controls.back")
        }, i[0] || (i[0] = [
          m("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "fill-current w-16 h-16",
            viewBox: "0 0 16 16"
          }, [
            m("path", {
              d: "M20.485784919653916,7.578491965389372h-14.170000000000005l3.5800000000000054,-3.589999999999997l-1.409999999999993,-1.4099999999999984l-6.000000000000008,6.0000000000000275l6.000000000000008,6l1.409999999999993,-1.4100000000000001l-3.58,-3.59h14.170000000000007Z",
              transform: "matrix(0.865803 0 0 0.865803 -1.99071 0.638058)"
            })
          ], -1)
        ]), 10, Wa)), [
          [r, {
            placement: "bottom",
            theme: "ramp4",
            animation: "scale"
          }]
        ])
      ]);
    };
  }
}), Ya = { class: "w-32 h-32" }, Ja = ["content", "aria-label"], Ka = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "h-24 w-24 fill-current transform rotate-90"
}, Za = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "h-24 w-24 fill-current transform rotate-90"
}, Xa = /* @__PURE__ */ O({
  __name: "expand",
  props: {
    active: Boolean
  },
  setup(s) {
    const { t: e } = Y();
    return (t, i) => {
      const r = k("tippy");
      return v(), A("div", Ya, [
        M((v(), A("button", {
          type: "button",
          class: "text-gray-500 hover:text-black focus:text-black w-full h-full flex justify-center items-center",
          content: I(e)(`panels.controls.${s.active ? "collapse" : "expand"}`),
          "aria-label": I(e)(`panels.controls.${s.active ? "collapse" : "expand"}`)
        }, [
          s.active ? (v(), A("svg", Za, i[1] || (i[1] = [
            m("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }, null, -1),
            m("path", {
              d: "M0 0h24v24H0V0z",
              fill: "none"
            }, null, -1),
            m("path", { d: "M8 19h3v3h2v-3h3l-4-4-4 4zm8-15h-3V1h-2v3H8l4 4 4-4zM4 9v2h16V9H4z" }, null, -1),
            m("path", { d: "M4 12h16v2H4z" }, null, -1)
          ]))) : (v(), A("svg", Ka, i[0] || (i[0] = [
            m("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }, null, -1),
            m("path", {
              d: "M0 0h24v24H0V0z",
              fill: "none"
            }, null, -1),
            m("path", { d: "M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z" }, null, -1)
          ])))
        ], 8, Ja)), [
          [r, {
            placement: "bottom",
            theme: "ramp4",
            animation: "scale",
            hideOnClick: !1
          }]
        ])
      ]);
    };
  }
}), Qa = { class: "relative" }, eo = ["content", "aria-label"], to = /* @__PURE__ */ O({
  __name: "minimize",
  props: {
    active: Boolean
  },
  setup(s) {
    const { t: e } = Y();
    return (t, i) => {
      const r = k("tippy");
      return v(), A("div", Qa, [
        M((v(), A("button", {
          type: "button",
          class: oe(["text-gray-500 hover:text-black focus:text-black p-6", { "text-gray-700": s.active }]),
          content: I(e)("panels.controls.minimize"),
          "aria-label": I(e)("panels.controls.minimize")
        }, i[0] || (i[0] = [
          m("svg", {
            class: "fill-current w-20 h-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            m("path", {
              d: "M0 0h24v24H0V0z",
              fill: "none"
            }),
            m("path", { d: "M6 19h12v2H6z" })
          ], -1)
        ]), 10, eo)), [
          [r, {
            placement: "bottom",
            theme: "ramp4",
            animation: "scale"
          }]
        ])
      ]);
    };
  }
}), io = { class: "relative" }, so = ["content", "aria-label"], ro = /* @__PURE__ */ O({
  __name: "right",
  props: {
    active: Boolean
  },
  setup(s) {
    const { t: e } = Y();
    return (t, i) => {
      const r = k("tippy");
      return v(), A("div", io, [
        M((v(), A("button", {
          type: "button",
          class: oe(["p-8", {
            "text-gray-500 hover:text-black focus:text-black": s.active,
            "text-gray-300": !s.active
          }]),
          content: I(e)("panels.controls.moveRight"),
          "aria-label": I(e)("panels.controls.moveRight")
        }, i[0] || (i[0] = [
          m("svg", {
            class: "fill-current w-16 h-16",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "4 4 16 16"
          }, [
            m("path", { d: "M 8.59 16.34 L 13.17 11.75 L 8.59 7.16 L 10 5.75 L 16 11.75 L 10 17.75 Z" })
          ], -1)
        ]), 10, so)), [
          [r, {
            placement: "bottom",
            theme: "ramp4",
            animation: "scale"
          }]
        ])
      ]);
    };
  }
}), ao = { class: "relative" }, oo = ["content", "aria-label"], no = /* @__PURE__ */ O({
  __name: "left",
  props: {
    active: Boolean
  },
  setup(s) {
    const { t: e } = Y();
    return (t, i) => {
      const r = k("tippy");
      return v(), A("div", ao, [
        M((v(), A("button", {
          type: "button",
          class: oe(["p-8 move-left", {
            "text-gray-500 hover:text-black focus:text-black": s.active,
            "text-gray-300": !s.active
          }]),
          content: I(e)("panels.controls.moveLeft"),
          "aria-label": I(e)("panels.controls.moveLeft")
        }, i[0] || (i[0] = [
          m("svg", {
            class: "fill-current w-16 h-16",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "4 4 16 16"
          }, [
            m("path", { d: "M 15.41 16.09 L 10.83 11.5 L 15.41 6.91 L 14 5.5 L 8 11.5 L 14 17.5 Z" })
          ], -1)
        ]), 10, oo)), [
          [r, {
            placement: "bottom",
            theme: "ramp4",
            animation: "scale"
          }]
        ])
      ]);
    };
  }
}), lo = /* @__PURE__ */ O({
  __name: "panel-options-menu",
  setup(s) {
    const { t: e } = Y();
    return (t, i) => (v(), W(ii, {
      class: "flex",
      tooltip: I(e)("panels.controls.optionsMenu"),
      popperOptions: { strategy: "fixed" },
      position: "bottom-end"
    }, {
      header: ie(() => i[0] || (i[0] = [
        m("div", { class: "p-6" }, [
          m("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            class: "fill-current w-20 h-20"
          }, [
            m("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
          ])
        ], -1)
      ])),
      default: ie(() => [
        Me(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["tooltip"]));
  }
}), co = /* @__PURE__ */ Ne(lo, [["__scopeId", "data-v-51e22a4a"]]), uo = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-32 h-20"
}, po = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-32 h-20"
}, ho = /* @__PURE__ */ O({
  __name: "fullscreen-nav",
  setup(s) {
    const { t: e } = Y(), t = ge("iApi"), i = () => {
      t.toggleFullscreen();
    };
    return (r, a) => {
      const o = Z("mapnav-button");
      return v(), W(o, {
        onClickFunction: i,
        tooltip: I(e)("mapnav.fullscreen")
      }, {
        default: ie(() => [
          I(t).isFullscreen ? (v(), A("svg", uo, a[0] || (a[0] = [
            m("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }, null, -1),
            m("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }, null, -1)
          ]))) : (v(), A("svg", po, a[1] || (a[1] = [
            m("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }, null, -1),
            m("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }, null, -1)
          ])))
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), fo = /* @__PURE__ */ O({
  __name: "geolocator-nav",
  setup(s) {
    const { t: e } = Y(), t = ge("iApi");
    let i = we([]);
    const r = async () => {
      if (i.length)
        a(i);
      else {
        const l = await o({
          maximumAge: 1 / 0,
          timeout: 5e3
        }).catch((n) => {
          n.code === GeolocationPositionError.PERMISSION_DENIED ? t.notify.show(fe.ERROR, e("mapnav.geolocator.error.permission")) : t.notify.show(fe.ERROR, e("mapnav.geolocator.error.internal"));
        });
        l && (i = [l.coords.longitude, l.coords.latitude], a(i));
      }
    }, a = (l) => {
      const n = new K("geolocation", l, _.latLongSR(), !0);
      t.geo.map.zoomMapTo(n);
    }, o = (l) => new Promise((n, c) => navigator.geolocation.getCurrentPosition(n, c, l));
    return (l, n) => {
      const c = Z("mapnav-button");
      return v(), W(c, {
        onClickFunction: r,
        tooltip: I(e)("mapnav.geolocator")
      }, {
        default: ie(() => n[0] || (n[0] = [
          m("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            class: "fill-current w-32 h-20"
          }, [
            m("path", { d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), mo = /* @__PURE__ */ O({
  __name: "home-nav",
  setup(s) {
    const { t: e } = Y(), t = ge("iApi"), i = () => {
      const r = t.geo.map.getExtentSet();
      t.geo.map.zoomMapTo(r.fullExtent);
    };
    return (r, a) => {
      const o = Z("mapnav-button");
      return v(), W(o, {
        onClickFunction: i,
        tooltip: I(e)("mapnav.home")
      }, {
        default: ie(() => a[0] || (a[0] = [
          m("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            class: "fill-current w-32 h-20"
          }, [
            m("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }),
            m("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), yo = {
  class: "relative w-32 h-32 text-gray-600 hover:text-black",
  tabindex: "-1"
}, go = ["content", "aria-label"], vo = /* @__PURE__ */ O({
  __name: "button",
  props: {
    onClickFunction: {
      type: Function,
      required: !0
    },
    tooltip: {
      type: [String, Boolean],
      default: !1
    }
  },
  setup(s) {
    return (e, t) => {
      const i = k("focus-item"), r = k("tippy");
      return v(), A("div", yo, [
        M((v(), A("button", {
          type: "button",
          class: "w-full h-full default-focus-style focus:outline-none",
          onClick: t[0] || (t[0] = (a) => s.onClickFunction()),
          content: s.tooltip,
          "aria-label": typeof s.tooltip == "string" ? s.tooltip : ""
        }, [
          Me(e.$slots, "default")
        ], 8, go)), [
          [i],
          [r, { placement: "left" }]
        ])
      ]);
    };
  }
}), bo = {
  class: "relative",
  tabindex: "-1"
}, wo = ["aria-label", "content"], Ao = /* @__PURE__ */ O({
  __name: "button",
  props: {
    onClickFunction: {
      type: Function,
      required: !0
    },
    buttonId: {
      type: String,
      required: !0
    },
    tooltip: {
      type: [String, Boolean],
      default: !1
    }
  },
  setup(s) {
    const e = ge("iApi"), t = s, i = () => e.event.emit(E.APPBAR_BUTTON_CLICK, t.buttonId);
    return (r, a) => {
      const o = k("focus-item"), l = k("tippy");
      return v(), A("div", bo, [
        M((v(), A("button", {
          type: "button",
          class: "py-6 w-full h-full",
          onClick: a[0] || (a[0] = () => {
            s.onClickFunction(), i();
          }),
          "aria-label": String(s.tooltip),
          content: `<div style='word-break: break-word;'>${s.tooltip}</div>`
        }, [
          Me(r.$slots, "default", {}, void 0, !0)
        ], 8, wo)), [
          [o],
          [l, {
            allowHTML: !0,
            placement: "right"
          }]
        ])
      ]);
    };
  }
}), Eo = /* @__PURE__ */ Ne(Ao, [["__scopeId", "data-v-1cb84ae1"]]), xo = B("areas-of-interest", () => ({ areas: f([]) })), So = B("export", () => {
  const s = f({
    title: !0,
    map: !0,
    mapElements: !0,
    legend: !0,
    footnote: !0,
    timestamp: !0
  }), e = f("");
  function t(i) {
    if (s.value[i.name] !== void 0) {
      const r = s.value[i.name];
      s.value[i.name] = i.selected !== void 0 ? i.selected : !r;
    }
  }
  return { componentSelectedState: s, fileName: e, toggleSelected: t };
}), Io = B("extentguard", () => {
  const s = f(!1);
  function e(n) {
    s.value = n;
  }
  const t = f(!1);
  function i(n) {
    t.value = n;
  }
  const r = f(!1);
  function a(n) {
    r.value = n;
  }
  const o = f([]);
  function l(n) {
    o.value = n;
  }
  return {
    active: s,
    setActive: e,
    enforcing: t,
    setEnforcing: i,
    alwaysOn: r,
    setAlwaysOn: a,
    extentSetIds: o,
    setExtentSetIds: l
  };
}), _o = {
  A: 10,
  // NL
  B: 12,
  // NS
  C: 11,
  // PEI
  E: 13,
  // NB
  G: 24,
  // QB
  H: 24,
  // QB
  J: 24,
  // QB
  K: 35,
  // ON
  L: 35,
  // ON
  M: 35,
  // ON
  N: 35,
  // ON
  P: 35,
  // ON
  R: 46,
  // MB
  S: 47,
  // SK (good alignment, well done)
  T: 48,
  // AB
  V: 59,
  // BC
  Y: 60
  //  YT (another winner)
  //  X: [62, 61], // NWT / NV
  // this split was not working (nothing would actually show on screen)
  // fsaToProvince() is now handling X in a custom manner
}, To = {
  10: "NL",
  11: "PE",
  12: "NS",
  13: "NB",
  24: "QC",
  35: "ON",
  46: "MB",
  47: "SK",
  48: "AB",
  59: "BC",
  60: "YU",
  61: "NT",
  62: "NU",
  72: "UF",
  73: "IW"
};
class Lo {
  /**
   * List of downloaded province items.
   */
  provinceList = [];
  /**
   * Indicates if we've finished downloading the prov li
   */
  listFetched = !1;
  constructor(e) {
    bt.get(e).then((t) => {
      this.provinceList = t.data.definitions.map((r) => {
        const a = parseInt(r.code);
        return {
          code: a,
          abbr: To[a],
          name: r.description
        };
      });
      const i = {
        code: -1,
        abbr: "...",
        name: "..."
      };
      this.provinceList.push(i), this.provinceList.sort((r, a) => r.name > a.name ? 1 : -1), this.listFetched = !0;
    });
  }
  /**
   * Get the province information for a province code
   * @param provCode numeric prov code
   */
  codeToProvince(e) {
    return this.provinceList.find((t) => t.code === e);
  }
  /**
   * Get the province information for a province name
   * @param provName the name in the active language
   */
  nameToProvince(e) {
    return this.provinceList.find((t) => t.name === e);
  }
  /**
   * Get the province information belonging to an FSA
   * @param fsa three-char FSA
   */
  fsaToProvince(e) {
    let t;
    const i = e.toUpperCase(), r = i.substring(0, 1);
    return r === "X" ? i === "X0A" || i === "X0B" || i === "X0C" ? t = 62 : t = 61 : t = _o[r], this.codeToProvince(t);
  }
}
function Ro(s) {
  return new Lo(s);
}
const Et = {
  en: {
    ADDRESS: "Street Address",
    FSA: "Forward Sortation Area",
    NTS: "National Topographic System",
    COORD: "Latitude/Longitude",
    SCALE: "Scale"
  },
  fr: {
    ADDRESS: "Adresse Municipale",
    FSA: "Région De Tri D'Acheminement",
    NTS: "Système National De Référence Cartographique",
    COORD: "Latitude/Longitude",
    SCALE: "Échelle"
  }
};
class $o {
  allTypes = {};
  validTypes = {};
  filterComplete = !1;
  typesFetched = !1;
  constructor(e, t) {
    bt.get(t).then((i) => {
      i.data.definitions.forEach((r) => {
        Et[e][r.code] = r.term.split(`${r.code}-`)[1];
      }), Object.keys(Et[e]).forEach((r) => {
        this.allTypes[r] = Et[e][r], this.validTypes[r] = Et[e][r];
      }), this.typesFetched = !0;
    });
  }
  // remove any excluded types indicated by config
  filterValidTypes(e) {
    if (this.filterComplete)
      return this.validTypes;
    if (e = typeof e == "string" ? [e] : e, e && e.length > 0)
      for (const t of e)
        delete this.validTypes[t];
    return this.filterComplete = !0, this.validTypes;
  }
}
function Co(s, e) {
  return new $o(s, e);
}
class xt {
  /**
   * Collection of goodness
   */
  config;
  /**
   * What the user typed
   */
  query;
  /**
   * Error messages
   */
  failedServs = [];
  /**
   * Results list
   */
  results = [];
  constructor(e, t = "") {
    this.query = t, this.config = e;
  }
  addResult(e) {
    Array.isArray(e) ? this.results = this.results.concat(e) : this.results.push(e);
  }
}
async function Oo(s, e) {
  let t, i;
  const r = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)(\s*[,|;\s]\s*)[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)[*]$/, a = /^\d{2,3}[A-P]/, o = /^[ABCEGHJKLMNPRSTVXY]\d[A-Z]/;
  return r.test(e) && !s.disabledSearchTypes.includes("LAT/LNG") ? (i = e.slice(0, -1), t = new xt(s, i), await Po(t)) : o.test(e) && !s.disabledSearchTypes.includes("FSA") ? (i = e.substring(0, 3).toUpperCase(), t = new xt(s, i), await No(t)) : a.test(e) && !s.disabledSearchTypes.includes("NTS") ? (i = e.substring(0, 6).toUpperCase(), t = new xt(s, i), await Fo(t)) : (i = encodeURIComponent(e.trim()), t = new xt(s, i), await Do(t)), t;
}
const ri = async (s) => {
  const [e, t] = await Ae(bt.get(s));
  return e ? (console.error("Request error from " + s), console.error(e), Promise.reject("Could not load results from remote service.")) : t.data;
}, Mt = (s, e, t) => [
  s + t,
  e - t,
  s - t,
  e + t
], ai = (s, e, t, i) => {
  let r = "";
  const a = s.config;
  return e ? r = a.geoLocateUrl + "?q=" + s.query : (t && i ? r = `${a.geoNameUrl}?lat=${t}&lon=${i}&num=${a.maxResults}` : r = `${a.geoNameUrl}?q=${s.query}&num=${a.maxResults}`, a.categories.length > 0 && (r += `&concise=${a.categories.join(",")}`), a.officialOnly && (r += "&category=O")), r;
}, es = (s, e) => e.filter((t) => s.types.validTypes[t.concise.code]).map((t) => ({
  name: t.name,
  flav: "nme",
  bbox: t.bbox,
  type: s.types.allTypes[t.concise.code],
  position: [t.longitude, t.latitude],
  location: {
    city: t.location,
    province: s.provinces.codeToProvince(parseInt(t.province.code))
  },
  order: s.sortOrder.indexOf(t.concise.code) >= 0 ? s.sortOrder.indexOf(t.concise.code) : s.sortOrder.length
})), oi = async (s) => {
  const [e, t] = await Ae(ri(ai(s, !0)));
  return e ? (console.error("Geolocation service failed"), s.failedServs.push("geolocation"), []) : t;
}, ko = async (s) => {
  const [e, t] = await Ae(ri(ai(s, !1)));
  let i;
  e ? (console.error("GeoName service targeting Name failed"), s.failedServs.push("geoname"), i = []) : i = t.items, s.addResult(es(s.config, i));
}, Mo = async (s, e, t) => {
  const [i, r] = await Ae(ri(ai(s, !1, e, t)));
  let a;
  i ? (console.error("GeoName service targeting Lat Lon failed"), s.failedServs.push("geoname"), a = []) : a = r.items, s.addResult(es(s.config, a));
}, Po = async (s) => {
  const e = s.query.split(/[\s|,|;|]/).filter((a) => !isNaN(a) && a !== "").map((a) => parseFloat(a)), t = e[0], i = e[1], r = {
    name: `${t},${i}`,
    flav: "llg",
    location: {},
    type: "Latitude/Longitude",
    position: [i, t],
    bbox: Mt(i, t, 0.015),
    order: -1
  };
  await Mo(s, t, i), s.addResult(r);
}, No = async (s) => {
  const e = s.config, t = await oi(s);
  if (t.length) {
    const r = t[0].geometry.coordinates, a = r[1], o = r[0], l = {
      name: s.query,
      flav: "fsa",
      bbox: Mt(o, a, 0.03),
      type: e.types.allTypes.FSA,
      position: [o, a],
      location: {
        province: e.provinces.fsaToProvince(s.query)
      },
      order: -1
    };
    s.addResult(l);
  }
}, Fo = async (s) => {
  const e = s.config, t = await oi(s);
  if (t.length) {
    const i = t[0], r = i.title.split(" "), a = r.shift() || "", o = r.join(" "), l = i.geometry.coordinates, n = l[1], c = l[0], u = {
      name: a,
      flav: "nts",
      bbox: i.bbox ?? Mt(c, n, 0.03),
      type: e.types.allTypes.NTS,
      // "National Topographic System"
      position: [c, n],
      location: {
        city: o
      },
      order: -1
    };
    s.addResult(u);
  }
}, Do = async (s) => {
  const e = s.config;
  if (await ko(s), e.categories.length === 0 || e.categories.includes("ADDR")) {
    const t = await oi(s), i = e.sortOrder.indexOf("ADDR"), r = i >= 0 ? i : e.sortOrder.length, a = t.filter((o) => o.type?.includes("Street")).map((o) => {
      const [l, n, c] = o.title.split(", "), u = o.geometry.coordinates, p = u[1], d = u[0];
      return {
        name: l,
        flav: "add",
        bbox: Mt(d, p, 2e-3),
        type: e.types.allTypes.ADDRESS,
        position: [d, p],
        location: {
          city: n.split(" Of ").pop(),
          // prevents redundant label i.e. 'City Of Kingston'
          province: e.provinces.nameToProvince(c)
        },
        order: r
      };
    });
    s.addResult(a);
  }
}, Go = "~FSA~", xi = "https://geogratis.gc.ca/services/geolocation/@{language}/locate", Si = "https://geogratis.gc.ca/services/geoname/@{language}/geonames.json", Ii = "https://geogratis.gc.ca/services/geoname/@{language}/codes/province.json", _i = "https://geogratis.gc.ca/services/geoname/@{language}/codes/concise.json";
class Ti {
  config;
  constructor(e, t) {
    let i, r, a, o;
    const l = t?.serviceUrls;
    l ? (i = l.geoLocation ? l.geoLocation : xi, r = l.geoNames ? l.geoNames : Si, a = l.geoProvince ? l.geoProvince : Ii, o = l.geoTypes ? l.geoTypes : _i) : (i = xi, r = Si, a = Ii, o = _i), i = i.replace("@{language}", e), r = r.replace("@{language}", e), a = a.replace("@{language}", e), o = o.replace("@{language}", e);
    let n = "";
    const c = t?.fsaBoundaries;
    if (c && c.serviceUrl) {
      const w = c.keyField || "CFSAUID";
      n = `${c.serviceUrl}/query/?where=${w}%3D'${Go}'&outFields=${w}&returnGeometry=true&f=json`;
    }
    const u = t?.settings;
    let p, d, g, h, y;
    u ? (p = u.categories ? u.categories : [], d = u.sortOrder ? u.sortOrder : [], g = u.disabledSearchTypes ? u.disabledSearchTypes : [], h = u.maxResults > 0 ? u.maxResults : 100, y = !!u.officialOnly) : (p = [], d = [], g = [], h = 100, y = !1), this.config = {
      language: e,
      geoNameUrl: r,
      geoLocateUrl: i,
      fsaUrl: n,
      types: Co(e, o),
      // list of type filters
      provinces: Ro(a),
      // list of province filters
      categories: p,
      sortOrder: d,
      disabledSearchTypes: g,
      maxResults: h,
      officialOnly: y
    }, this.config.types.filterValidTypes(t?.excludeTypes), this._typeList = [], this._excludedTypes = t?.excludeTypes || [];
  }
  get typeList() {
    return this._typeList;
  }
  set typeList(e) {
    this._typeList = e;
  }
  /**
   * Tests a string against a goal string and returns a levenshtein distance number.
   * The lower the number, the better the match.
   *
   * @param goalText gold standard text we are comparing against
   * @param testText text to evaluate against the goal
   * @returns a weight number
   */
  levenshteinDistance(e, t) {
    t = t.toLowerCase().trim(), e = decodeURI(e.toLowerCase().replace("*", ""));
    const i = [];
    for (let r = 0; r <= t.length; r++) {
      i[r] = [r];
      for (let a = 1; a <= e.length; a++)
        i[r][a] = r === 0 ? a : Math.min(
          i[r][a - 1] + 1,
          // delete
          i[r - 1][a] + 0.2,
          // insert
          i[r - 1][a - 1] + (e[a - 1] === t[r - 1] ? 0 : 1)
          // substitute
        );
    }
    return i[t.length][e.length];
  }
  /**
   * Given some string query, returns a promise that resolves as an array of search results
   * and a report of any service failures
   *
   * @param {string} userInput the search string this query is based on
   * @return {Promise}
   */
  async query(e) {
    const t = await Oo(this.config, e.toUpperCase()), i = this.config.sortOrder.length, r = t.results.filter((n) => n.order < i), a = t.results.filter((n) => n.order >= i);
    r.sort((n, c) => n.order - c.order);
    const o = this.config.maxResults;
    let l;
    return r.length >= o ? l = r.slice(0, o) : (a.forEach((n) => n.order = this.levenshteinDistance(t.query, n.name)), a.sort((n, c) => n.order - c.order), l = r.concat(a.slice(0, o - r.length))), {
      results: l,
      failedServs: t.failedServs
    };
  }
  /**
   * Waits for the download of province data from geogratis, then returns it
   *
   * @return {Promise<Array>} resolves to a list of formatted province objects
   */
  fetchProvinces() {
    return new Promise((e) => {
      const t = setInterval(() => {
        this.config.provinces.listFetched && (clearInterval(t), e(this.config.provinces.provinceList));
      }, 100);
    });
  }
  /**
   * Return a promise that resolves to a list of formatted type objects
   *
   * @return {Promise<Array>} a promise that resolves to a list of formatted type objects
   */
  fetchTypes() {
    return new Promise((e) => {
      const t = setInterval(() => {
        if (this.config.types.typesFetched) {
          clearInterval(t);
          const i = [], r = {
            code: -1,
            name: "..."
          };
          i.push(r);
          const a = this.config.types.allTypes;
          for (const o in a)
            this._excludedTypes.includes(o) || i.push({
              code: o,
              name: a[o]
            });
          this.typeList = i, e(this.typeList);
        }
      }, 100);
    });
  }
}
function Li(s, e, t) {
  return s && e.extent && (t = t.filter(
    (i) => i.bbox[0] <= e.extent.xmax && i.bbox[1] <= e.extent.ymax && i.bbox[2] >= e.extent.xmin && i.bbox[3] >= e.extent.ymin
  )), e.province && e.province !== "..." && (t = t.filter((i) => i.location.province?.name && i.location.province.name === e.province)), e.type && e.type !== "..." && (t = t.filter((i) => i.type === e.type)), t;
}
const Uo = B("geosearch", () => {
  const s = f(new Ti("en", void 0)), e = f({
    type: "",
    province: "",
    extent: void 0
  }), t = f(!1), i = f(""), r = f(""), a = f(""), o = f([]), l = f([]), n = f(!1), c = f([]), u = P(() => s.value.fetchProvinces()), p = P(
    () => new Promise((L) => {
      s.value.fetchTypes().then((G) => {
        G.sort((V, Q) => V.name > Q.name ? 1 : -1), L(G);
      });
    })
  );
  function d(L, G) {
    s.value = new Ti(L, G);
  }
  function g(L) {
    n.value = !0;
    const G = i.value.replace(/["!*$+?^{}()|[\]\\]/g, "").trim();
    if (!G)
      o.value = [], l.value = [], n.value = !1;
    else if (G && G !== a.value || L) {
      const V = setInterval(() => {
        s.value.config.provinces.listFetched && s.value.config.types.typesFetched && (clearInterval(V), s.value.query(`${G}*`).then((Q) => {
          c.value = Q.failedServs, a.value = G, l.value = Q.results;
          const Xe = Li(
            t.value,
            //@ts-expect-error TODO: explain why this is needed or remove
            e.value,
            l.value
          );
          o.value = Xe || [], n.value = !1;
        }));
      }, 250);
    } else {
      const V = Li(
        t.value,
        //@ts-expect-error TODO: explain why this is needed or remove
        e.value,
        l.value
      );
      o.value = V || [], n.value = !1;
    }
  }
  function h(L) {
    e.value.province = typeof L.province > "u" ? "" : L.province, g(L.forceReRun);
  }
  function y(L) {
    e.value.type = typeof L.type > "u" ? "" : L.type, g(L.forceReRun);
  }
  function w(L) {
    a.value = i.value.replace(/["!*$+?^{}()|[\]\\]/g, "").trim(), i.value = L, g();
  }
  function b(L) {
    const G = {
      a: "àáâãäåāăąǎȁȃȧạảấầẩẫậắằẳẵặ",
      b: "ḃɓḅḇ",
      c: "çćĉċč",
      d: "ďḋḍḏḑḓ",
      e: "èéêëēĕėęěȅȇẹẻẽếềểễệ",
      f: "ƒḟ",
      g: "ĝğġģǧǵḡ",
      h: "ĥȟḣḥḧḩḫẖ",
      i: "ìíîïĩīĭįıȉȋịỉĩ",
      j: "ĵǰɉ",
      k: "ķĸƙḳḵ",
      l: "ĺļľŀłḷḹḻḽ",
      m: "ḿṁṃ",
      n: "ñńņňŉŋǹṅṇṉṋ",
      o: "òóôõöōŏőơǒǫǭȍȏȯọỏốồổỗộớờởỡợ",
      p: "ṕṗ",
      r: "ŕŗřȑȓṛṝṟ",
      s: "śŝşšșṡṣṥṧṩ",
      t: "ţťŧțṫṭṯṱẗ",
      u: "ùúûüũūŭůűųưǔǖǘǚǜȕȗụủứừửữự",
      v: "ṽṿ",
      w: "ẁẃŵẅẇẉẋ",
      x: "ẋẍ",
      y: "ỳýŷÿỹȳẏẙỵỷỹ",
      z: "źżžẑẓẕ"
    };
    L = L.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), r.value = Array.from(L).map((V) => Object.keys(G).includes(V) ? "[" + V + G[V] + "]" : V.replace(/["$!*+?^{}()|[\]\\]/g, "").replace(/[.\\]/g, "\\$&").trim()).join("");
  }
  function $(L) {
    if (L.visible !== void 0 && (t.value = L.visible), L.extent.sr.wkid !== 4326)
      throw new Error("an extent that was not projected to wkid 4326 was passed to the geosearch store");
    e.value.extent = L.extent, g();
  }
  return {
    GSservice: s,
    queryParams: e,
    resultsVisible: t,
    searchVal: i,
    searchRegex: r,
    lastSearchVal: a,
    searchResults: o,
    savedResults: l,
    loadingResults: n,
    failedServices: c,
    getProvinces: u,
    getTypes: p,
    initService: d,
    runQuery: g,
    setProvince: h,
    setType: y,
    setSearchTerm: w,
    setSearchRegex: b,
    setMapExtent: $
  };
}), Bo = B("help", () => ({ location: f("./help/") }));
var ts = /* @__PURE__ */ ((s) => (s.Visibility = "visibilityButton", s.Expand = "expandButton", s))(ts || {}), Zt = /* @__PURE__ */ ((s) => (s.Item = "item", s.Placeholder = "placeholder", s.Error = "error", s))(Zt || {});
class is extends J {
  _uid;
  _name;
  _type;
  _children = [];
  // list of child legend items
  _parent = void 0;
  // parent of legend item
  _loadPromise;
  // deferred promise that resolves when legend item is loaded
  _hidden;
  // indicates if item (and its children) should be hidden from the legend
  _expanded;
  // expanded state of item
  _visibility;
  // visibility state of item
  _exclusive;
  // indicates if children should follow 'exclusive set' behavior (à la radio buttons)
  _controls;
  // will use layer controls if undefined
  _disabledControls;
  // will use layer's disabled controls if undefined
  _lastVisible;
  // keeps track of last visible legend item, used for exclusive sets
  _visibleChildren;
  // keeps track of last visible child items
  /**
   * Create a new legend item with defaulting for all properties given config snippet, id is required.
   * @param {InstanceAPI} iApi instance API for the RAMP that this is associated with
   * @param {any} config the config for the given legend item
   * @param {LegendItem} parent a legend item that this item is a child of
   */
  constructor(e, t, i) {
    super(e), this._uid = ut.sharedUtils.generateUUID(), this._name = t.name, this._type = t.type ?? "placeholder", this._parent = i, this._children = [], this._loadPromise = new H(), this._hidden = t.hidden ?? !1, this._expanded = t.expanded ?? !0, this._visibility = !0, this._exclusive = t.exclusive ?? !1, this._controls = t.controls?.slice() ?? [
      "visibilityButton",
      "expandButton"
      /* Expand */
    ], this._disabledControls = t.disabledControls?.slice(), this._visibleChildren = [];
  }
  /** Returns the item's uid */
  get uid() {
    return this._uid;
  }
  /** Returns the item's name */
  get name() {
    return this._name;
  }
  /** Sets the item's name
   * @param {string} name new item name
   */
  set name(e) {
    this._name = e;
  }
  /** Returns the item's type */
  get type() {
    return this._type;
  }
  /** Returns children of the legend item */
  get children() {
    return this._children;
  }
  /** Sets new children for the legend item
   * @param {Array<LegendItem>} children new child legend items
   */
  set children(e) {
    this._children = e;
  }
  /** Returns item's parent - not yet initialized */
  get parent() {
    return this._parent;
  }
  /**Sets new parent for the legend item */
  set parent(e) {
    this._parent = e;
  }
  /** Returns the load promise for this legend item */
  get loadPromise() {
    return this._loadPromise.getPromise();
  }
  /** Returns if item is hidden */
  get hidden() {
    return this._hidden;
  }
  /** Returns if item is expanded */
  get expanded() {
    return this._expanded;
  }
  /** Returns if item has visibility */
  get visibility() {
    return this._visibility;
  }
  /** Returns if item follows "exclusive set" behaviour */
  get exclusive() {
    return this._exclusive;
  }
  /**
   * Check if a control is available for the legend item.
   * Returns:
   *  - true if the control is included in legend item's available controls
   *  - false if control is not included, or if control is disabled
   *  - undefined if controls are not defined
   * @param {LegendControl} control name of the control
   * @return {boolean | undefined}
   */
  controlAvailable(e) {
    return this._disabledControls?.includes(e) ? !1 : this._controls?.includes(e);
  }
  /**
   * Enable a disabled control, or disable an enabled control.
   * @param {LegendControl} control name of the control
   * @param {boolean} enable true for enabling, false for disabling
   */
  setControl(e, t) {
    t && this._disabledControls?.includes(e) ? (this._disabledControls = this._disabledControls.filter((i) => i !== e), this._controls?.push(e)) : !t && this._controls?.includes(e) && (this._controls = this._controls.filter((i) => i !== e), this._disabledControls?.push(e));
  }
  /**
   * Toggle hidden state of a legend item.
   * @param {boolean} hidden set legend item to hidden/not hidden if given, otherwise toggle
   */
  toggleHidden(e) {
    this._hidden = e ?? !this.hidden;
  }
  /**
   * Toggle expand state of a legend item.
   * @param {boolean} expanded set legend item to expanded/not expanded if given, otherwise toggle
   */
  toggleExpanded(e) {
    this._expanded = e ?? !this.expanded;
  }
  /**
   * Toggle visibility state of a legend item. Needs to verify parent visibility is updated.
   * @param {boolean} visibility set legend item to visible/not visible if given, otherwise toggle
   * @param {boolean} updateParent whether or not toggleVisibiliity should 'bubble-up' the legend tree
   */
  toggleVisibility(e, t = !0) {
    if (this.visibility !== e) {
      if (this._visibility = e ?? !this.visibility, !this.exclusive)
        this.visibility ? this._visibleChildren.length > 0 ? this._visibleChildren.forEach((i) => i.toggleVisibility(!0, !1)) : this.children.forEach((i) => i.toggleVisibility(!0, !1)) : this.children.forEach((i) => i.toggleVisibility(!1, !1));
      else if (this.visibility)
        if (this._lastVisible && (!(this._lastVisible instanceof De) || this._lastVisible.layerControlAvailable(j.Visibility)))
          this._lastVisible.toggleVisibility(!0);
        else {
          const i = this.children.find(
            (r) => !(r instanceof De) || r.layerControlAvailable(j.Visibility)
          );
          i && i.toggleVisibility(!0);
        }
      else
        this._lastVisible = this.children.find((i) => i.visibility), this._lastVisible?.toggleVisibility(!1);
      this.parent && t && this.parent.checkVisibility(this);
    }
  }
  /**
   * Ensures visibility rules are followed if legend item is nested in another item on initialization.
   */
  checkVisibilityRules() {
    this.parent && !this.parent.visibility ? this.toggleVisibility(!1, !1) : this.parent?.exclusive && this.parent.children.some(
      (t) => t.visibility && t !== this && t.type === "item"
      /* Item */
    ) && this.toggleVisibility(!1, !1);
  }
  /**
   * Updates parent visibility after a child item's visibility toggles.
   * @param {LegendItem} toggledChild given child legend item
   */
  checkVisibility(e) {
    this instanceof De && !this.layerControlAvailable(j.Visibility) || (this.exclusive ? e.visibility ? (this.children.forEach((t) => {
      t.uid !== e.uid && t.toggleVisibility(!1, !1);
    }), this._lastVisible = e, this._visibility = !0, this instanceof De && this.layer && this.layer.layerExists && (this.layer.visibility = !0)) : (this._visibility = !1, this instanceof De && this.layer && this.layer.layerExists && (this.layer.visibility = !1), this._lastVisible = e) : this.children.some((t) => t.visibility) ? (this._visibility = !0, this._visibleChildren = this.children.filter((t) => t.visibility), this instanceof De && this.layer && this.layer.layerExists && (this.layer.visibility = !0)) : (this._visibility = !1, this._visibleChildren = [], this instanceof De && this.layer && this.layer.layerExists && (this.layer.visibility = !1)), this.parent && this.parent.checkVisibility(this));
  }
  /**
   * Returns a legend config representation of this item.
   */
  getConfig() {
    const e = {
      name: this._name,
      hidden: this._hidden,
      expanded: this._expanded,
      exclusive: this._exclusive,
      controls: this._controls,
      disabledControls: this._disabledControls
    }, t = [];
    return this.children.forEach((i) => {
      t.push(i.getConfig());
    }), this.exclusive ? e.exclusiveVisibility = t : e.children = t, e;
  }
  /**
   * Runs right after legend item is added
   */
  onAdded() {
  }
  /**
   * Runs right before legend item is removed
   */
  onRemoved() {
    this.toggleVisibility(!1);
  }
  /**
   * Sets legend item to a loaded state.
   */
  load() {
    this._type = "item", this._loadPromise.resolveMe(), this.checkVisibilityRules();
  }
  /**
   * Sets legend item back to a loading/placeholder state
   */
  reload() {
    this._type = "placeholder", this._loadPromise = new H();
  }
  /**
   * Sets legend item to an error state
   */
  error() {
    this._type !== "error" && (this._type = "error", this._loadPromise.getPromise().catch(() => {
    }), this._loadPromise.rejectMe(), this.checkVisibilityRules());
  }
}
class De extends is {
  _layerId;
  _layerIdx;
  _layerUid = "";
  _isSublayer = !1;
  _layer;
  _layerInitVis;
  _layerRedrawing = !1;
  _layerOffscale = !1;
  _treeGrown = !1;
  _customSymbology = !1;
  _coverIcon;
  _description;
  _symbologyExpanded;
  _origLayerControls;
  _origLayerDisabledControls;
  _layerControls;
  _layerDisabledControls;
  _maxLines;
  // number of lines this item can take up
  _symbologyRenderStyle;
  _symbologyStack;
  handlers = [];
  /**
   * Creates a new single layer item.
   */
  constructor(e, t, i) {
    if (super(e, t, i), this._type = Zt.Placeholder, this._layerId = t.layerId, this._layerIdx = t.sublayerIndex, this._isSublayer = t.sublayerIndex !== void 0, this._layerControls = t.layerControls ?? [], this._origLayerControls = t.layerControls, this._layerDisabledControls = t.disabledLayerControls ?? [], this._origLayerDisabledControls = t.disabledLayerControls, this._layerRedrawing = !1, this._symbologyExpanded = t.symbologyExpanded || !1, t.coverIcon && (this._coverIcon = t.coverIcon), t.description && (this._description = t.description), this._symbologyRenderStyle = t.symbologyRenderStyle ?? "icons", this._customSymbology = !!t.symbologyStack, this._symbologyStack = t.symbologyStack?.map((r) => ({
      uid: this.$iApi.geo.shared.generateUUID(),
      label: r.text,
      definitionClause: r.sqlQuery,
      imgUrl: r.image ?? "",
      drawPromise: Promise.resolve(),
      visibility: !0,
      // just a placeholder
      lastVisibility: !0
    })), this._maxLines = t.maxLines && [1, 2, 3, 4, 5, 6].includes(t.maxLines) ? t.maxLines : void 0, !this._name) {
      const r = this.$iApi.getConfig()?.layers;
      if (r && Array.isArray(r)) {
        const a = r.find((o) => o.id === this._layerId);
        if (a)
          if (this._isSublayer) {
            if (a.sublayers && Array.isArray(a.sublayers)) {
              const o = a.sublayers.find((l) => l.index === this._layerIdx);
              o && o.name && (this._name = o.name);
            }
          } else a.name && (this._name = a.name);
      }
    }
  }
  /** Returns the id of the parent layer if this item is a sublayer. Otherwise undefined */
  get parentLayerId() {
    return this._isSublayer ? this._layerId.slice(0, this._layerId.length - `-${this._layerIdx}`.length) : void 0;
  }
  /** Returns the id of the layer */
  get layerId() {
    return this._layerId;
  }
  /** Returns layer index only if the layer item is a sublayer. Otherwise returns undefined */
  get layerIdx() {
    return this._layerIdx;
  }
  /** Returns if the layer is a sublayer */
  get isSublayer() {
    return this._isSublayer;
  }
  /** Returns UID of the layer */
  get layerUid() {
    return this._layerUid;
  }
  /** Returns Ramp Layer associated with legend item. */
  get layer() {
    return this._layer;
  }
  set layer(e) {
    this._layer = e, this._layerId = e.id, this._layerIdx = e.isSublayer ? e.layerIdx : void 0, this._layerUid = e.uid, this._name = this._name || e.name, this._symbologyStack = this._customSymbology ? this._symbologyStack : e.legend, this.updateLayerControls();
  }
  get layerOffscale() {
    return this._layerOffscale;
  }
  set layerOffscale(e) {
    this._layerOffscale = e;
  }
  get layerRedrawing() {
    return this._layerRedrawing;
  }
  set layerRedrawing(e) {
    this._layerRedrawing = e;
  }
  get coverIcon() {
    return this._coverIcon;
  }
  set coverIcon(e) {
    this._coverIcon = e;
  }
  get description() {
    return this._description;
  }
  set description(e) {
    this._description = e;
  }
  /** Returns true if symbology stack is expanded. */
  get symbologyExpanded() {
    return this._symbologyExpanded;
  }
  get treeGrown() {
    return this._treeGrown;
  }
  set treeGrown(e) {
    this._treeGrown = e;
  }
  get origLayerControls() {
    return this._origLayerControls;
  }
  get origDisabledLayerControls() {
    return this._origLayerDisabledControls;
  }
  set symbologyRenderStyle(e) {
    this._symbologyRenderStyle = e;
  }
  get symbologyRenderStyle() {
    return this._symbologyRenderStyle;
  }
  set symbologyStack(e) {
    this._symbologyStack = e;
  }
  get symbologyStack() {
    return this._symbologyStack;
  }
  get maxLines() {
    return this._maxLines;
  }
  /**
   * Returns a legend config representation of this item.
   */
  getConfig() {
    const e = {
      layerId: this._layerId,
      sublayerIndex: this._layerIdx,
      layerControls: this._layerControls,
      disabledLayerControls: this._layerDisabledControls,
      symbologyExpanded: this._symbologyExpanded,
      coverIcon: this._coverIcon,
      description: this._description,
      maxLines: this._maxLines
    };
    return { ...super.getConfig(), ...e };
  }
  /**
   * Toggle visibility state of a layer item. Needs to verify parent visibility is updated.
   * @param {boolean} visibility set legend item to visible/not visible if given, otherwise toggle
   * @param {boolean} updateParent whether or not toggleVisibility should 'bubble-up' the legend tree
   * @param {boolean} forceUpdate ignore control check, used when visibility is changed outside of legend fixture
   */
  toggleVisibility(e, t = !0, i = !1) {
    if (!(!this.layerControlAvailable(j.Visibility) && !i) && (super.toggleVisibility(e, t), this.layer && this.layer.layerExists)) {
      this.layer.visibility = this.visibility;
      const r = this._symbologyStack.some((a) => a.lastVisbility);
      this._symbologyStack.forEach((a) => {
        r || (a.lastVisbility = !0), a.visibility = this.visibility ? a.lastVisbility : !1;
      });
    }
  }
  /**
   * Toggles the symbology expand and returns the new value
   *
   * @param {boolean} expanded optional parameter to toggle expanded to a certain value
   */
  toggleSymbology(e) {
    return this._symbologyExpanded = e ?? !this._symbologyExpanded, this._symbologyExpanded;
  }
  /**
   * Sets the visibility of the symbology with the given uid
   * If the provided UID is undefined, set the visibility of all symbols
   *
   * @param {uid | undefined} uid the uid of the legend symbology
   * @param visible The new visibility value
   */
  setSymbologyVisibility(e, t) {
    this._symbologyStack.some((i) => ((e === void 0 || i.uid === e) && (i.visibility = t, i.lastVisbility = t), e !== void 0 && i.uid === e));
  }
  /**
   * Have the item adapt and update to the given layer as it loads.
   * Is either called in the constructor, or through the legend api
   *
   * @param {LayerInstance | undefined} layer the layer to load. If undefined, layer will be fetched via instance API using id/uid.
   */
  // TS complaining as usual. Can maybe remove the parameter and expect caller to set the layer first?
  // @ts-expect-error TODO: explain why this is needed or remove
  load(e) {
    const t = e instanceof li ? e : this.$iApi.geo.layer.getLayer(this._layerId ?? this._layerUid);
    t && (this.layer = t, this._layerRedrawing = t.mapLayer && t.drawState !== ue.UP_TO_DATE, t.loadPromise().then(() => {
      this._layerInitVis = typeof this._layerInitVis < "u" ? this._visibility : t.visibility, super.load(), this.toggleVisibility(this._layerInitVis, !0, !0), t.visibility || this.setSymbologyVisibility(void 0, !1), this.handlers.push(
        this.$iApi.event.on(
          E.LAYER_VISIBILITYCHANGE,
          (i) => {
            i.layer.uid === this.layer.uid && this._type === Zt.Item && this.toggleVisibility(i.visibility, !0, !0);
          }
        )
      ), this.handlers.push(
        this.$iApi.event.on(
          E.LAYER_DRAWSTATECHANGE,
          (i) => {
            this.layer.uid === i.layer.uid && (i.layer.drawState === ue.REFRESH ? this.layerRedrawing = !0 : setTimeout(() => {
              this.layerRedrawing = i.layer.drawState === ue.REFRESH;
            }, 500));
          }
        )
      ), this._layerOffscale = this.$iApi.geo.map.created ? t.isOffscale() : !1, this.handlers.push(
        this.$iApi.event.on(E.MAP_SCALECHANGE, () => {
          this.$iApi.geo.map.created && (this._layerOffscale = this.layer?.isOffscale());
        })
      );
    }).catch(() => {
      this.error();
    }));
  }
  error() {
    this.updateLayerControls(), super.error();
  }
  /**
   * Check if a control is available for the layer item.
   *
   * @param {LayerControl} control name of the control
   * @return {boolean} Indicates if control is enabled on this legend item or layer
   */
  layerControlAvailable(e) {
    return this._layerDisabledControls?.includes(e) ? !1 : !!this._layerControls?.includes(e);
  }
  // Update layer controls and disabled controls for this layer item.
  updateLayerControls() {
    const e = this.$iApi.geo.layer.getLayerControls(this.layerId) ?? this.$iApi.geo.layer.getLayerControls(this.parentLayerId ?? "");
    this._origLayerControls || (this._layerControls = e?.controls ?? []), this._origLayerDisabledControls || (this._layerDisabledControls = e?.disabledControls ?? []);
  }
}
var Vo = /* @__PURE__ */ ((s) => (s.Title = "title", s.Text = "text", s.Image = "image", s.Markdown = "markdown", s.Template = "template", s))(Vo || {});
class Ri extends is {
  _infoType;
  // the type of info displayed on this SectionItem
  _content;
  // the content to be displayed for this SectionItem
  /**
   * Create a new SectionItem.
   * @param {InstanceAPI} iApi instance API for the RAMP that this is associated with
   * @param {any} config the config for the given SectionItem
   * @param {LegendItem} parent a legend item that this item is a child of
   */
  constructor(e, t, i) {
    super(e, t, i), this._infoType = t.infoType ?? "title", this._content = t.content ?? "", t.infoType === "template" && this.$element.component(`${this._uid}-info-section`, {
      template: this._content
    }), (t.infoType || t.content) && (this._controls = t.controls?.slice() ?? [ts.Expand]), super.load();
  }
  /** Returns the info type of this SectionItem */
  get infoType() {
    return this._infoType;
  }
  /** Returns the content of this SectionItem */
  get content() {
    return this._content;
  }
  /** Sets new content for this SectionItem
   * @param {string} content new content
   */
  set content(e) {
    this._content = e;
  }
  /**
   * Returns a legend config representation of this item.
   */
  getConfig() {
    const e = {
      infoType: this._infoType,
      content: this._content
    };
    return { ...super.getConfig(), ...e };
  }
}
const zo = B("legend", () => {
  const s = f(), e = f([]), t = f([]), i = f(!0), r = f(3);
  function a(n) {
    if (n.parent === void 0)
      e.value.push(n.item);
    else {
      if (!(n.item instanceof Ri) && !(n.item instanceof De)) {
        console.error("attempted to add an unsupported legend item type");
        return;
      }
      n.parent.children.push(n.item);
    }
  }
  function o(n) {
    const c = (u) => (u = u.filter((p) => (p === n && !p.children.length && p.onRemoved(), p !== n)), u.forEach((p) => {
      p.children = c(p.children);
    }), u = u.filter(
      (p) => !(p instanceof Ri && !p.children.length && p.content === "")
    ), u);
    e.value = c(e.value);
  }
  function l(n) {
    if (n.oldItem.parent === void 0) {
      const c = e.value, u = c.indexOf(n.oldItem);
      u > -1 && (e.value[u] = n.newItem), e.value = c;
    } else {
      const c = n.oldItem.parent.children, u = c.indexOf(n.oldItem);
      u > -1 && (c[u] = n.newItem), n.oldItem.parent.children = c;
    }
  }
  return {
    legendConfig: s,
    multilineItems: i,
    maxLines: r,
    children: e,
    headerControls: t,
    addItem: a,
    removeItem: o,
    replaceItem: l
  };
}), qo = B("mapnav", () => {
  const s = f({}), e = f([]);
  function t(i) {
    i in s.value && delete s.value[i];
    const r = e.value.indexOf(i);
    r !== -1 && e.value.splice(r, 1);
  }
  return { items: s, order: e, removeItem: t };
}), jo = B("metadata", () => {
  const s = f(""), e = f({ type: "LineString", coordinates: [] });
  return { status: s, response: e };
}), Wo = B("northarrow", () => {
  const s = f(""), e = f("");
  return { arrowIcon: s, poleIcon: e };
}), Ho = B("overviewmap", () => {
  const s = f({
    lodSets: [],
    extentSets: [],
    basemaps: [],
    tileSchemas: [],
    initialBasemapId: ""
  }), e = f({}), t = f(!0), i = f(1.5), r = f("#FF0000"), a = f(1), o = f("#000000"), l = f(0.25);
  function n(c) {
    s.value.initialBasemapId = c;
  }
  return {
    mapConfig: s,
    basemaps: e,
    startMinimized: t,
    expandFactor: i,
    borderColour: r,
    borderWidth: a,
    areaColour: o,
    areaOpacity: l,
    updateInitialBasemap: n
  };
}), Yo = B("scrollguard", () => {
  const s = f(!1);
  function e(t) {
    s.value = t;
  }
  return { enabled: s, setEnabled: e };
});
var se = /* @__PURE__ */ ((s) => (s[s.UPLOAD = 0] = "UPLOAD", s[s.FORMAT = 1] = "FORMAT", s[s.CONFIGURE = 2] = "CONFIGURE", s))(se || {});
const Jo = B("wizard", () => {
  const s = {
    id: "Placeholder",
    layerType: x.UNKNOWN,
    url: ""
  }, e = f(), t = f(""), i = f(""), r = f(!0), a = f(null), o = f({
    config: s,
    configOptions: []
  }), l = f(se.UPLOAD);
  function n(c) {
    switch (l.value) {
      case se.UPLOAD:
        c === se.UPLOAD ? t.value = "" : c === se.FORMAT && (l.value = se.FORMAT);
        break;
      case se.FORMAT:
        c === se.UPLOAD ? (a.value && (t.value = "", a.value = null), i.value = "", l.value = se.UPLOAD) : c === se.CONFIGURE && (l.value = se.CONFIGURE);
        break;
      case se.CONFIGURE:
        c === se.UPLOAD ? (t.value = "", i.value = "", a.value = null, r.value = !0, o.value = {
          config: s,
          configOptions: []
        }, l.value = se.UPLOAD) : c === se.FORMAT && (o.value = {
          config: s,
          configOptions: []
        }, r.value = !0, l.value = se.FORMAT);
        break;
    }
  }
  return {
    layerSource: e,
    url: t,
    typeSelection: i,
    nested: r,
    fileData: a,
    layerInfo: o,
    currStep: l,
    goToStep: n
  };
});
class Ko {
  fixture;
  panel;
  event;
  geo;
  notify;
  dev;
  ui;
  startRequired = !1;
  _eventsOn = !1;
  // internal tracker that indicates whether default event handlers are on.
  /**
   * The instance of Vue R4MP application controlled by this InstanceAPI.
   *
   * @type {VueInstance}
   * @memberof InstanceAPI
   */
  $vApp;
  /**
   * An object of type `VueApp<Element>` that represents the RAMP instance within the Vue app
   */
  $element;
  $i18n;
  /**
   * An object of type `Element` that represents the root DOM element for the RAMP instance
   */
  $rootEl;
  _isFullscreen;
  constructor(e, t, i) {
    this.event = new Ys(this);
    const r = Zo(e, this);
    this.$vApp = r.app, this.$element = r.element, this.$i18n = r.i18n, this.$rootEl = r.app.$root?.$el, this.fixture = new Wn(this), this.panel = new Hn(this), this.geo = new qn(this), this.dev = new Qn(this), this.ui = {
      maptip: this.geo.map.maptip,
      exposeOids: !1,
      exposeMeasurements: !0,
      getZoomIcon: () => "",
      formatNumber: () => "",
      scrollToInstance: !1,
      suppressNumberLocalization: !1,
      escapeHtml: () => "",
      isPlainText: () => !0
    }, this.notify = new lr(this), this._isFullscreen = xe.isEnabled && !!this.$vApp.$root && xe.isFullscreen && xe.element === this.$vApp.$root.$el, xe.isEnabled && xe.onchange(() => {
      this._isFullscreen = xe.isEnabled && !!this.$vApp.$root && xe.isFullscreen && xe.element === this.$vApp.$root.$el;
    }), this.initialize(!0, t, i);
  }
  /**
   * Initializes a Vue R4MP instance with the given config and options
   *
   * @private
   * @param {boolean} first whether this is the first time initialize is being called for this R4MP instance
   * @param {RampConfigs | undefined} configs language-keyed R4MP config
   * @param {RampOptions | undefined} options startup options for this R4MP instance
   */
  initialize(e, t, i) {
    const r = pe(this.$vApp.$pinia), a = He(this.$vApp.$pinia), o = Ct(this.$vApp.$pinia);
    if (t?.configs !== void 0) {
      const n = Object.keys(this.$i18n.messages.value);
      r.registerAllConfigs(t, n);
      const c = r.registeredConfigs[r.registeredLangs[this.$i18n.locale.value]];
      r.newConfig(c), r.activeBasemapConfig = c.map.basemaps.find(
        (h) => h.id === c.map.initialBasemapId
      );
      const u = setInterval(() => {
        const h = this.$vApp.$el.querySelector("#esriMap");
        h && (clearInterval(u), this.geo.map.createMap(c.map, h).then(() => {
          if (h._tippy.hide(0), o.setMaptipInstance(h._tippy), c.layers && c.layers.length > 0) {
            let y = 0;
            c.layers.forEach((w) => {
              const b = this.geo.layer.createLayer(w);
              this.geo.map.addLayer(b, y).catch(() => {
              }), b.mapLayer && y++;
            });
          }
        }));
      }, 100);
      if (c.panels) {
        if (c.panels.open && c.panels.open.length > 0) {
          const h = c.panels.open.map((y) => y.id);
          this.panel.isRegistered(h).then(() => {
            c.panels?.open?.forEach((y) => {
              this.panel.open({
                id: y.id,
                screen: y.screen
              }), y.pin && this.panel.pin(y.id);
            });
          });
        }
        a.reorderable = c.panels.reorderable ?? !0;
      }
      !c.system?.animate && this.$element._container && this.$element._container.children[0] && this.$element._container.children[0].classList.remove("animation-enabled"), c.system?.proxyUrl && (this.geo.proxy = c.system.proxyUrl), c.system?.exposeOid && (this.ui.exposeOids = c.system.exposeOid), c.system?.exposeMeasurements != null && (this.ui.exposeMeasurements = c.system.exposeMeasurements), c.system?.scrollToInstance && (this.ui.scrollToInstance = c.system?.scrollToInstance), c.system?.suppressNumberLocalization && (this.ui.suppressNumberLocalization = c.system?.suppressNumberLocalization);
      const p = {
        magnify: '<svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" /></svg>',
        globe: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="16" height="16" viewBox="0 0 16 16" xml:space="preserve"><g transform="matrix(0.67 0 0 0.67 8 8)"><path style=" stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: #979797; fill-rule: nonzero; opacity: 1;" transform=" translate(-12, -12)" d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 z M 11 19.93 C 7.05 19.44 4 16.08 4 12 C 4 11.38 4.08 10.79 4.21 10.21 L 9 15 L 9 16 C 9 17.1 9.9 18 11 18 L 11 19.93 z M 17.9 17.39 C 17.639999999999997 16.580000000000002 16.9 16 15.999999999999998 16 L 14.999999999999998 16 L 14.999999999999998 13 C 14.999999999999998 12.45 14.549999999999999 12 13.999999999999998 12 L 8 12 L 8 10 L 10 10 C 10.55 10 11 9.55 11 9 L 11 7 L 13 7 C 14.1 7 15 6.1 15 5 L 15 4.59 C 17.93 5.779999999999999 20 8.649999999999999 20 12 C 20 14.08 19.2 15.97 17.9 17.39 z" stroke-linecap="round" /></g></svg>'
      }, d = c.system?.zoomIcon || "globe", g = p[d] || d;
      this.ui.getZoomIcon = () => g, this.ui.formatNumber = (h) => this.ui.suppressNumberLocalization ? h.toString() : this.$i18n.n(h, "number"), this.ui.escapeHtml = (h) => {
        const y = {
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        };
        return h.replace(/[<>"']/g, (w) => y[w]);
      }, this.ui.isPlainText = (h) => typeof h == "string" ? !this.containsValidHtml(h) && !this.representsObject(h) : !1;
    }
    i || (i = {});
    const l = st(this.$vApp.$pinia);
    i?.startRequired ? (this.startRequired = !0, l.started = !1) : (this.startRequired = !1, l.started = !0, this.event.emit(E.MAP_START)), e && (i.loadDefaultFixtures !== !1 || t?.startingFixtures !== void 0) ? this.fixture.addDefaultFixtures(t?.startingFixtures) : e || this.fixture.restore(), i.loadDefaultEvents !== !1 && !this._eventsOn && (this.event.addDefaultEvents(), this._eventsOn = !0);
  }
  /**
   * Encapsulates the steps required to reload the instance. Utility to be called
   * by other orchestrator methods.
   *
   * @param {RampConfigs} configs language-keyed R4MP config
   * @param {RampOptions} options startup options for this R4MP instance
   */
  reloadWorker(e, t) {
    const i = st(this.$vApp.$pinia), r = Le(this.$vApp.$pinia), a = pe(this.$vApp.$pinia), o = ye(this.$vApp.$pinia), l = _e(this.$vApp.$pinia), n = Yt(this.$vApp.$pinia), c = !!e;
    c ? Object.keys(o.items).forEach((d) => {
      this.fixture.exists(d) && this.fixture.remove(d);
    }) : this.fixture.flush(), Object.keys(n.grids).forEach((p) => {
      n.removeGrid(p);
    }), i.started = !1, this.geo.map.destroyMap(), l.$reset(), t?.loadDefaultEvents === !1 && (this.event.removeDefaultEvents(), this._eventsOn = !1), c || (e = JSON.parse(
      JSON.stringify({
        startingFixtures: a.startingFixtures,
        configs: a.registeredConfigs
      })
    )), r.clearAll(), this.geo.map.maptip.clear(), this.initialize(c, e, t), c && this.event.emit(E.CONFIG_CHANGE, this.getConfig());
  }
  /**
   * Reloads Vue R4MP instance, with the option of providing a new config
   *
   * @param {RampConfigs} configs language-keyed R4MP config. if missing, the existing configs will be used
   * @param {RampOptions} options startup options for this R4MP instance
   */
  reload(e, t) {
    this.reloadWorker(e, t), this.event.emit(E.RAMP_RELOAD);
  }
  component(e, t) {
    if (t) {
      const i = this.$element.component(e, t);
      return this.event.emit(E.COMPONENT, e), i;
    }
    return this.$element.component(e);
  }
  /**
   * The 'screen' size for the app. Returns the largest screen class on the element; 'lg', 'md', 'sm' or 'xs'.
   *
   * @readonly
   * @type string | null
   * @memberof InstanceAPI
   */
  get screenSize() {
    if (!this.$vApp?.$root || !this.$vApp.$root.$refs["app-size"])
      return null;
    const e = this.$vApp.$root.$refs["app-size"].classList;
    return e.contains("lg") ? "lg" : e.contains("md") ? "md" : e.contains("sm") ? "sm" : "xs";
  }
  /**
   * Gets the [cloned] config linked to the current language of the app.
   *
   * @memberof InstanceAPI
   */
  getConfig() {
    const e = pe(this.$vApp.$pinia);
    return JSON.parse(JSON.stringify(e.getActiveConfig(this.language)));
  }
  /**
   * Returns the pinia store of the specified id, if it exists, else returns undefined.
   *
   * @param id the id of the store to return
   * @memberof InstanceAPI
   */
  useStore(e) {
    if (!([
      "appbar",
      "areas-of-interest",
      "details",
      "export",
      "extentguard",
      "geosearch",
      "grid",
      "help",
      "legend",
      "mapnav",
      "metadata",
      "northarrow",
      "overviewmap",
      "scrollguard",
      "wizard"
    ].includes(e) && !this.fixture.exists(e)))
      switch (e) {
        // Fixture stores
        case "appbar":
          return $t(this.$vApp.$pinia);
        case "areas-of-interest":
          return xo(this.$vApp.$pinia);
        case "details":
          return Hi(this.$vApp.$pinia);
        case "export":
          return So(this.$vApp.$pinia);
        case "extentguard":
          return Io(this.$vApp.$pinia);
        case "geosearch":
          return Uo(this.$vApp.$pinia);
        case "grid":
          return Yt(this.$vApp.$pinia);
        case "help":
          return Bo(this.$vApp.$pinia);
        case "legend":
          return zo(this.$vApp.$pinia);
        case "mapnav":
          return qo(this.$vApp.$pinia);
        case "metadata":
          return jo(this.$vApp.$pinia);
        case "northarrow":
          return Wo(this.$vApp.$pinia);
        case "overviewmap":
          return Ho(this.$vApp.$pinia);
        case "scrollguard":
          return Yo(this.$vApp.$pinia);
        case "wizard":
          return Jo(this.$vApp.$pinia);
        // core stores
        case "config":
          return pe(this.$vApp.$pinia);
        case "fixture":
          return ye(this.$vApp.$pinia);
        case "instance":
          return st(this.$vApp.$pinia);
        case "layer":
          return _e(this.$vApp.$pinia);
        case "map-caption":
          return Ue(this.$vApp.$pinia);
        case "maptip":
          return Ct(this.$vApp.$pinia);
        case "notification":
          return Le(this.$vApp.$pinia);
        case "panel":
          return He(this.$vApp.$pinia);
        default:
          console.error(`The store ${e} does not exist.`);
          return;
      }
  }
  /**
   * Sets the language of the app to the specified string (e.g. 'en' or 'fr').
   *
   * @param {string} language The locale string to switch to
   * @memberof InstanceAPI
   */
  setLanguage(e) {
    if (this.$i18n.locale.value === e)
      return;
    const t = pe(this.$vApp.$pinia), i = Le(this.$vApp.$pinia), r = t.registeredLangs;
    Object.keys(t.registeredConfigs).length === 1 && i.clearAll();
    const a = this.$i18n.locale.value;
    this.$i18n.locale.value = e;
    const o = this.getConfig();
    r[a] !== r[e] && (this.reloadWorker(), this.event.emit(E.CONFIG_CHANGE, o)), this.event.emit(E.LANG_CHANGE, {
      oldLang: a,
      newLang: e
    });
  }
  /**
   * The current locale string for the app.
   *
   * @readonly
   * @type string
   * @memberof InstanceAPI
   */
  get language() {
    return this.$vApp.$i18n.locale;
  }
  /**
   * The current animation status.
   *
   * @readonly
   * @type boolean
   * @memberof InstanceAPI
   */
  get animate() {
    return !!(this.$element._container && this.$element._container.children[0] && this.$element._container.children[0].classList.contains("animation-enabled"));
  }
  /**
   * Toggles fullscreen for the app.
   *
   * @memberof InstanceAPI
   */
  toggleFullscreen() {
    xe.isEnabled && xe.toggle(this.$element._container || void 0);
  }
  /**
   * Whether the app is fullscreen.
   *
   * @readonly
   * @type boolean
   * @memberof InstanceAPI
   */
  get isFullscreen() {
    return this._isFullscreen;
  }
  /**
   * Whether the app has been started.
   *
   * @readonly
   * @type boolean
   * @memberof InstanceAPI
   */
  get started() {
    return st(this.$vApp.$pinia).started;
  }
  /**
   * Updates the screen reader alert. Use this to inform screen reader users of visual changes in the app (pieces of ui appearing/leaving).
   *
   * @param alert the alert to make available to screen readers
   * @memberof InstanceAPI
   */
  updateAlert(e) {
    const t = this.$vApp.$el.querySelector(".screen-reader-alert");
    t.childNodes.length > 0 && (t.innerHTML = "");
    const i = document.createElement("span");
    i.setAttribute("role", "alert");
    const r = document.createTextNode(e);
    i.appendChild(r), t.insertBefore(i, null);
  }
  /**
   * If `scrollToInstance` is set to true in the configuration file, scrolls the browser to this RAMP component.
   *
   * @memberof InstanceAPI
   */
  scrollToInstance() {
    this.ui.scrollToInstance && this.$element._container?.scrollIntoView({
      behavior: "smooth"
    });
  }
  start() {
    const e = st(this.$vApp.$pinia);
    !e.started && this.startRequired ? (this.event.emit(E.MAP_START), e.started = !0) : e.started && console.warn("start has already been called");
  }
  /**
   * Return whether the string contains valid html content (i.e. a html element with opening and closing tags)
   */
  containsValidHtml(e) {
    return /<(\w+)([^>]*)>(.*?)<\/\1>/.test(e);
  }
  /**
   * Return whether the string represents an object or array
   */
  representsObject(e) {
    return /^(?:\[\s*(?:[\s\S]*?)\s*\]|\{\s*(?:[\s\S]*?)\s*\})$/.test(e);
  }
}
function Zo(s, e) {
  const t = us();
  t.use(({ store: o }) => {
    const l = gi(o.$state);
    o.$reset = () => o.$patch(gi(l));
  });
  const i = Zs(), r = Fi(ya).use(i).use(Cs, {
    directive: "tippy",
    // => v-tippy
    component: "tippy"
    // => <tippy/>
  }).use(t);
  r.directive("focus-container", Sa), r.directive("focus-list", ba), r.directive("focus-item", Aa), r.directive("truncate", La), r.component("panel-screen", Fa), r.component("pin", Ba), r.component("close", qa), r.component("back", Ha), r.component("expand", Xa), r.component("panel-options-menu", co), r.component("dropdown-menu", ii), r.component("minimize", to), r.component("right", ro), r.component("left", no), r.component("fullscreen-nav-button", ho), r.component("geolocator-nav-button", fo), r.component("home-nav-button", mo), r.component("mapnav-button", vo), r.component("appbar-button", Eo), r.component("transition", Pi), r.component("transition-group", Ni), r.config.globalProperties.$iApi = e, r.config.globalProperties.$pinia = t, r.config.idPrefix = `ramp-${s.id || e.geo.shared.generateUUID()}`, r.provide("iApi", e);
  const a = r.mount(s);
  return { element: r, app: a, i18n: i.global };
}
class ni {
  /**
   * The inner ESRI basemap class
   */
  esriBasemap;
  /**
   * Configuration source object
   */
  config;
  /**
   * Used to inform the instance of any construction errors
   */
  createErr = !1;
  /**
   * This constructor should not be called directly, as it will not populate the
   * underlying ESRI basemap.
   * Use static method Basemap.create(rampConfig)
   */
  constructor(e) {
    this.config = e;
  }
  /**
   * Will generate a populated basemap
   *
   * @param rampConfig configuration object for the basemap
   * @returns {Promise<Basemap>} resolves with generated basemap
   */
  static async create(e) {
    const t = new ni(e), i = e.layers.map((o) => {
      if (o.layerType === x.TILE)
        return C.TileLayer({
          url: o.url,
          opacity: o.opacity
        });
      if (o.layerType === x.MAPIMAGE)
        return C.MapImageLayer({
          url: o.url,
          opacity: o.opacity
        });
      if (o.layerType === x.OSM)
        return C.OpenStreetMapLayer({
          opacity: o.opacity
        });
      throw new Error(`Unsupported layer type provided to basemap config: ${o.layerType}`);
    }), a = (await Promise.allSettled(i)).filter((o) => o.status === "rejected" ? (console.error(o.reason), t.createErr = !0, !1) : !0).map((o) => {
      if (o.status === "fulfilled")
        return o.value;
      throw new Error("TS is fun");
    });
    return t.esriBasemap = await C.Basemap({
      baseLayers: a,
      title: e.name || "",
      id: e.id
    }), t;
  }
  /**
   * Returns the tile schema id from the config
   */
  get tileSchemaId() {
    return this.config.tileSchemaId;
  }
  /**
   * Returns the basemap id from the config
   */
  get id() {
    return this.config.id;
  }
  /**
   * Get this basemap's name from the config
   */
  get name() {
    return this.config.name;
  }
  /**
   * Set this basemap's name
   */
  set name(e) {
    this.config.name = e || "";
  }
  /**
   * Get this basemap's description from the config
   */
  get description() {
    return this.config.description;
  }
  /**
   * Set this basemap's description
   */
  set description(e) {
    this.config.description = e || "";
  }
  /**
   * Get this basemap's alt text from the config
   */
  get altText() {
    return this.config.altText;
  }
  /**
   * Set this basemap's alt text
   */
  set altText(e) {
    this.config.altText = e || "";
  }
  /**
   * Get this basemap's attribution config
   */
  get attribution() {
    return this.config.attribution;
  }
  /**
   * Set this basemap's attribution
   */
  set attribution(e) {
    this.config.attribution = e;
  }
  /**
   * Get this basemap's background colour
   */
  get backgroundColour() {
    return this.config.backgroundColour ?? "#FFFFFF";
  }
}
class Xo extends J {
  /**
   * The internal esri map. Avoid referencing outside of geoapi.
   * @private
   */
  esriMap;
  /**
   * Local storage of Basemap objects
   * @private
   */
  _basemapStore;
  /**
   * Indicates if the map has been created
   * @public
   */
  created = !1;
  /**
   * Identifies the map. Primarily used for debugging.
   */
  name;
  /**
   * Tracks if we are watching for the first basemap to load.
   * @private
   */
  trackFirstBasemap = !1;
  /**
   * The internal esri map view. Changes from outside of RAMP may break the instance. Use caution.
   */
  esriView;
  /**
   * Internal deferred managing the view promise
   * @private
   */
  _viewPromise;
  /**
   * A promise that resolves when the map view has been created
   */
  get viewPromise() {
    return this._viewPromise.getPromise();
  }
  /**
   * The map spatial reference in RAMP API Spatial Reference format.
   * Saves us from converting from ESRI format every time it is needed
   * @private
   */
  _rampSR;
  /**
   * The active extent set in RAMP API Extent Set format.
   * Allows a quick reference to the available extents if needed.
   * @private
   */
  _rampExtentSet;
  /**
   * The viewDiv for the ESRI MapView
   * The map will be rendered using this div object
   * @private
   */
  _targetDiv;
  /**
   * List of ESRI watch handlers
   * @private
   */
  handlers;
  /**
   * The default zoom level when zooming to a point feature
   * @private
   */
  pointZoomScale;
  constructor(e, t = "") {
    super(e), this.esriMap = void 0, this._basemapStore = [], this._viewPromise = new H(), this.handlers = [], this.pointZoomScale = 5e4, this.name = t;
  }
  noMapErr() {
    console.error(`Attempted to manipulate the ${this.name} map before calling createMap()`), console.trace();
  }
  abstractError() {
    throw new Error("Attempted to call an abstract method in the parent CommonMapAPI");
  }
  /**
   * Any map labels defaulting
   */
  labelsDefault = {
    visible: void 0
  };
  /**
   * Will generate the actual Map control objects and construct it on the page
   * @param {RampMapConfig} config the config for the map
   * @param {string | HTMLDivElement} targetDiv the div to be used for the map view
   * @returns {Promise} resolves when the map has been created
   */
  async createMap(e, t) {
    const i = (n) => {
      this.$iApi.notify.show(
        fe.ERROR,
        this.$iApi.$i18n.t("layer.error", {
          id: n.name
        })
      );
    }, r = e.basemaps.map((n) => ni.create(n)), o = (await Promise.all(r)).filter((n) => (n.createErr && i(n), n.esriBasemap.baseLayers.length > 0));
    o.forEach((n) => {
      n.esriBasemap.baseLayers.forEach((c) => {
        be(
          () => c.loadStatus,
          () => {
            c.loadStatus === "loaded" ? this.trackFirstBasemap = !1 : c.loadStatus === "failed" && (i(n), this.trackFirstBasemap && this.recoverBasemap(n.tileSchemaId));
          }
        );
      });
    }), this._basemapStore = o, e.labelsDefault && (this.labelsDefault.visible = e.labelsDefault.visible);
    const l = {};
    this.esriMap = ee(await C.Map(l)), this.pointZoomScale = e.pointZoomScale && e.pointZoomScale > 0 ? e.pointZoomScale : 5e4, this._targetDiv = t, this.createMapView(e.initialBasemapId);
  }
  /**
   * Destroys the ESRI map
   *
   * @protected
   */
  destroyMap() {
    if (!this.esriMap || !this.esriView) {
      this.noMapErr();
      return;
    }
    this.destroyMapView(), this.esriMap.destroy(), delete this.esriMap, this._basemapStore.forEach((e) => e.esriBasemap.destroy()), this._basemapStore = [];
  }
  /**
   * Reloads the map with the given map config and target div.
   * This breaks down and re-creates the internal map state.
   *
   * @param {RampMapConfig} config the config for the map
   * @param {string | HTMLDivElement | undefined} targetDiv the div to be used for the map view
   * @returns {Promise} resolves when the map has been re-created. Layers may still be loading.
   */
  async reloadMap(e, t) {
    if (!this.esriMap || !this.esriView) {
      this.noMapErr();
      return;
    }
    this.destroyMap(), await this.createMap(e, t);
  }
  /**
   * Will generate a ESRI map view and add it to the page
   * Can optionally provide the basemap or basemap id to be used when creating the map view
   *
   * This method should be overidden by other map sub-classes
   *
   * @param {string | Basemap | undefined} basemap the id of the basemap that should be used when creating the map view
   * @returns {Promise} resolves when the map view has been created.
   * @protected
   */
  async createMapView(e) {
    this.abstractError();
  }
  /**
   * Destroys the ESRI map view
   *
   * @protected
   */
  destroyMapView() {
    if (!this.esriView) {
      this.noMapErr();
      return;
    }
    this._viewPromise = new H(), this.created = !1, this.handlers.forEach((e) => e.handler.remove()), this.handlers = [], this.esriView.map = null, this.esriView.container = null, this.esriView.spatialReference = null, this.esriView.extent = null, this.esriView.navigation = null, this.esriView.destroy(), delete this.esriView;
  }
  /**
   * Searches the local basemap list for a basemap with the given id
   * Throws error if basemap could not be found
   *
   * @param {string} id basemap id
   * @returns {Promise<Basemap>} resolves with the found basemap
   * @protected
   */
  async findBasemap(e) {
    const t = this._basemapStore.find((i) => i.id === e);
    if (t)
      return t;
    throw new Error(`Invalid basemap id requested: ${e}`);
  }
  /**
   * Applies the given basemap (or basemap with given id) to the esri map
   * Throws error if basemap could not be found with the given id
   *
   * @param {string | basemap} basemap the basemap id or object
   * @returns {Promise} resolves when the basemap has been applied
   * @protected
   */
  async applyBasemap(e) {
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    const t = typeof e == "string" ? await this.findBasemap(e) : e;
    this.esriMap.basemap = Ie(t.esriBasemap);
  }
  /**
   * Set the map's basemap to the basemap with the given id.
   * If the new basemap's tile schema differs from the current one, the map view will be refreshed
   *
   * The returned boolean indicates if the schema has changed.
   *
   * This method should be overidden by child map classes
   *
   * @param {string} basemapId the basemap id
   * @returns {Promise<boolean>} resolves with boolean indicates if the schema has changed
   * @abstract
   */
  async setBasemap(e) {
    return this.abstractError(), !1;
  }
  /**
   * Will attempt to change to another basemap if the very first basemap failed.
   * If nothing is defined, will do nothing but manage our watching state.
   *
   * This method is overidden as needed
   *
   * @param {string} basemapSchemaId the basemap schema id (where the fallback is defined)
   * @returns {Promise<void>} resolves after recovery has initiated
   */
  async recoverBasemap(e) {
  }
  /**
   * Get the id of the currently used basemap
   * Returns undefined if there is no map
   * @returns {string | undefined} current basemap id
   */
  getCurrentBasemapId() {
    if (this.esriMap)
      return this.esriMap.basemap?.id ?? void 0;
    this.noMapErr();
  }
  /**
   * Projects a geometry to the map's spatial reference
   *
   * @private
   * @param {BaseGeometry} geom the RAMP API geometry to project
   * @returns {Promise<BaseGeometry>} the geometry projected to the map's projection, in RAMP API Geometry format
   */
  geomToMapSR(e) {
    if (!this._rampSR)
      throw new Error("call to map.geomToMapSR before the map spatial ref was created");
    return this._rampSR.isEqual(e.sr) ? Promise.resolve(e) : this.$iApi.geo.proj.projectGeometry(this._rampSR, e);
  }
  /**
   * Zooms the map to a given geometry.
   *
   * @param {BaseGeometry} geom A RAMP API geometry to zoom the map to
   * @param {number} [scale] An optional scale value of the map. Is ignored for non-Point geometries
   * @param {boolean} [animate] Option to turn off the zoom animation. On by default
   * @param {number} [duration] Option to change animation duration (in milliseconds). Default of 200. Ignored if animate is off.
   * @param {ZoomEasing} [easing] Option to change animation easing function. Default of 'ease'. Ignored if animate is off.
   * @returns {Promise<void>} A promise that resolves when the map has finished zooming
   */
  async zoomMapTo(e, t, i = !0, r = 200, a = "ease") {
    if (this.esriView) {
      if (e.invalid())
        throw new Error("attempt to zoom to invalid geometry");
      const o = await this.geomToMapSR(e), l = {
        target: this.$iApi.geo.geom.geomRampToEsri(o)
      };
      o.type === T.POINT && (l.scale = t || this.pointZoomScale);
      const n = { animate: i, duration: r, easing: a };
      return this.viewPromise.then(() => this.esriView.goTo(l, n));
    } else
      this.noMapErr();
  }
  /**
   * Provides the zoom level of the map
   *
   * @returns {number} the map zoom level
   */
  getZoomLevel() {
    return this.esriView ? this.esriView.zoom : (this.noMapErr(), 1);
  }
  /**
   * Provides the scale of the map (the scale denominator as integer)
   *
   * @returns {number} the map scale
   */
  getScale() {
    return this.esriView ? this.esriView.scale : (this.noMapErr(), 1);
  }
  /**
   * Provides the resolution of the map. This means the number of map units that is covered by one pixel.
   *
   * @returns {number} the map resolution
   */
  getResolution() {
    return this.esriView ? this.esriView.resolution : (this.noMapErr(), 1);
  }
  /**
   * Provides the extent of the map
   *
   * @returns {Extent} the map extent in RAMP API Extent format
   */
  getExtent() {
    return this.esriView ? F.fromESRI(this.esriView.extent) : (this.noMapErr(), F.fromParams("i_am_error", 0, 1, 0, 1));
  }
  /**
   * Provides the active extent set of the map
   *
   * @returns {ExtentSet} the active extent set of the map
   */
  getExtentSet() {
    return this._rampExtentSet ? this._rampExtentSet : (this.noMapErr(), gt.fromConfig({
      id: "i_am_error_extent_set",
      default: {
        xmin: 0,
        xmax: 1,
        ymin: 0,
        ymax: 1,
        spatialReference: {
          wkid: 4326
        }
      }
    }));
  }
  /**
   * Provides the spatial reference of the map
   *
   * @returns {SpatialReference} the map spatial reference in RAMP API format
   */
  getSR() {
    return this._rampSR ? this._rampSR.clone() : (this.noMapErr(), _.latLongSR());
  }
  /**
   * Get the height of the map on the screen in pixels
   *
   * @returns {Number} pixel height
   */
  getPixelHeight() {
    return this.esriView ? this.esriView.height : (this.noMapErr(), 1);
  }
  /**
   * Get the width of the map on the screen in pixels
   *
   * @returns {Number} pixel width
   */
  getPixelWidth() {
    return this.esriView ? this.esriView.width : (this.noMapErr(), 1);
  }
  /**
   * Set's the map's pointZoomScale value to newScale.
   * If newScale is not a positive number, a console error is thrown.
   *
   * The returned boolean indicates if the value has been successfully set.
   *
   * @param {number} newScale the new pointZoomScale value, which must be a positive number
   * @returns {boolean} indicates if the value was set successfully
   */
  setPointZoomScale(e) {
    return e > 0 ? (this.pointZoomScale = e, !0) : (console.error(`Cannot set pointZoomScale to non-positive number: ${e}.`), !1);
  }
}
class Qo extends J {
  maptipStore;
  /**
   * @constructor
   * @param {InstanceAPI} iApi the RAMP instance
   */
  constructor(e) {
    super(e), this.maptipStore = Ct(this.$vApp.$pinia);
  }
  // # makes variables private outside of typescript and lets us hide things on the API
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
  #e = void 0;
  #t = void 0;
  /**
   * Checks for a graphic at the given screen coordinates.
   * On a graphic hit the point is put in the maptip store and the `map/graphichit` event is fired.
   *
   * @param {ScreenPoint} screenPoint The screen coordinates for the hitTest
   * @returns {Promise<void>} resolves after the event is fired or no new graphic is hit.
   */
  async checkAtCoord(e) {
    this.#t = e;
    const t = await this.$iApi.geo.map.getGraphicAtCoord(e);
    if (this.#t !== e)
      return;
    if (!t) {
      this.clear(), this.maptipStore.maptipInstance.disable();
      return;
    }
    const i = this.$iApi.geo.layer.getLayer(t.layerId);
    if (i?.geomType != T.POLYGON && this.#e && this.#e.layerId === t.layerId && this.#e.oid === t.oid && this.#e.layerIdx === t.layerIdx)
      return;
    if (this.clear(), this.#e = t, !i) {
      console.error(`graphic hit test returned non-existent layer id: ${t.layerId}`);
      return;
    }
    if (!i.hovertips)
      return;
    const r = await i.getIcon(t.oid), a = await i.getGraphic(t.oid, {
      getAttribs: !0
    });
    this.maptipStore.maptipInstance.enable(), this.setPoint(this.$iApi.geo.map.screenPointToMapPoint(e)), this.$iApi.event.emit(E.MAP_GRAPHICHIT, {
      layer: i,
      graphicHit: t,
      attributes: a.attributes,
      icon: r,
      screenPoint: e
    });
  }
  /**
   * Generates and sets the "default" maptip.
   *
   * @param info the tooltip info payload
   */
  generateDefaultMaptip(e) {
    this.setContent(
      `<div class="flex items-center space-x-5"><span>${e.icon}</span><span class="line-clamp-3">${e.layer.tooltipValue(
        e.attributes
      )}</span></div>`
    );
  }
  /**
   * Clears the maptip from the map
   */
  clear() {
    this.#e = void 0, this.maptipStore.setMaptipPoint(void 0), this.maptipStore.setMaptipContent("");
  }
  /**
   * Get the `tippy` maptip instance
   * Documentation: https://kabbouchi.github.io/tippyjs-v4-docs/tippy-instance/
   *
   * @returns {any} the `tippy` tooltip instance
   */
  getInstance() {
    return this.maptipStore.maptipInstance;
  }
  /**
   * Get the current point for the maptip
   *
   * @returns {Point} the current maptip map point
   */
  getPoint() {
    return this.maptipStore.maptipPoint;
  }
  /**
   * Set the current maptip point. Undefined = maptip wont be shown.
   *
   * @param {Point | undefined} maptipPoint
   */
  setPoint(e) {
    this.maptipStore.setMaptipPoint(e);
  }
  /**
   * Set the html string for the maptip
   * If empty string is provided, the maptip will use the default content
   *
   * @param {string} content the new maptip html content
   */
  setContent(e) {
    this.maptipStore.setMaptipContent(e);
  }
}
class en extends J {
  // Default point formatters
  DEFAULT_POINT_FORMATTERS = {
    LAT_LONG_DMS: this.formatLatLongDMS,
    LAT_LONG_DD: this.formatLatLongDD,
    LAT_LONG_DDM: this.formatLatLongDDM,
    WEB_MERCATOR: this.formatMercator,
    CANADA_ATLAS_LAMBERT: this.formatLambert,
    UTM: this.formatUTM,
    BASEMAP: this.formatBasemap
  };
  // The currently selected point-formatting function
  pointFormatter;
  /**
   * @constructor
   * @param {InstanceAPI} iApi the RAMP instance
   */
  constructor(e) {
    super(e), this.pointFormatter = this.DEFAULT_POINT_FORMATTERS.LAT_LONG_DMS;
  }
  /**
   * Configure the map caption using the given config
   *
   * @param captionConfig The map caption config
   */
  createCaption(e) {
    if (!e)
      return;
    const t = Ue(this.$vApp.$pinia);
    if (t.coords.disabled = !1, t.scale.disabled = !1, t.scale.isImperialScale = !1, e.mapCoords)
      if (e.mapCoords.disabled)
        t.coords.disabled = !0;
      else {
        const i = e.mapCoords.formatter;
        i !== void 0 && this.setPointFormatter(i);
      }
    if (e.scaleBar)
      if (e.scaleBar.disabled)
        t.scale.disabled = !0;
      else {
        const i = e.scaleBar.imperialScale;
        i !== void 0 && (t.toggleScale(i), this.$iApi.geo.map.viewPromise.then(() => {
          this.updateScale();
        }));
      }
    t.langtoggle = {
      disabled: e?.langToggle?.disabled ?? !1
    };
  }
  /**
   * Updates the attribution on the map-caption bar
   * Applies default ESRI attribution if incoming attribution is disabled or has undefined elements
   *
   * Updates map-caption store to notify map-caption component observer
   *
   * @function updateAttribution
   * @param {Attribution} newAttribution incoming new attribution
   */
  updateAttribution(e) {
    const t = {
      disabled: !1,
      value: this.$iApi.$i18n.t("caption.attributionDefaultText")
    }, i = {
      disabled: !1,
      altText: this.$iApi.$i18n.t("caption.attributionLogoAltText"),
      link: this.$iApi.$i18n.t("caption.attributionLink"),
      value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAkCAYAAADWzlesAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADO9JREFUeNq0Wgl0jlca/pfvzyo6qNBSmhLLKE1kKEUtB9NTat+OYnBacwwJY19DZRC7sR41th60lWaizFSqRTOEw0lsrQSJGFIESSxJ/uRfv3nef+7Vt9f3p2E695z3fMt97/3ufe+7PO+9n9n0UzELsjKyiHdUdMZnVHTl2VyFe9nO7Kc/Io+4epUxmpWxeVkbr3hvUebgFf15GL9XUwZHndtAAYI09jGvIghOuoEwLOLeYiBoXrwGfZjYYOWAvWyMGlsk2YebXeV3NUEW1qcT5BBX4jUbCYEmHwwKEfdW1gEXgoWtiIlNRFeezcrkrQaTNSuraRYDdImrR1ylAALZBPnkXIJ0wRskeG2Cj3jsoFI2HhcfDDFWA9UBNdZZyc/PP4Z3HZYsWTLGbrffond0Xb9+/Qy6P3jw4F+HDx8+mu7XrVs3c+7cuX+i+3nz5o3n/Rw4cGAdf/7hhx9SZ8yYEcffHT9+/G/8uaSkJGvDhg3D8P3moNdXrlw5UtYVFxfnXL9+/V8PHz68grr2N2/eTC4tLb2E+9+Cotq1a/dOenr6njt37nxPdOrUqd0dO3bsjromoHBQKBPkEyFUB71MH6SPbNy4cRqfkMvlenzixImtqO/x3XffbXc6nSW5ubnpOTk5J1NTU/cQH91//fXXu3/88ccLy5cvj6d34B8gaBA9JyQk/OWjjz5aIu8Fz2DiWbZs2QLx/A4m0Qf9f/n48eNsPEeDfrdly5Y/U31UVNT7dJ04ceIsGseNGzfS6DkuLq4v8YE6Y/G+93g8XKZ6QUHBRVHfAPQC0xJfCRAv65EkeUP6gFx11JEkfw/qTc8ff/zxKofDUXrv3r08rOIBeU9CWbx48SLej5y4LGlpaf9YuHDhUv5OtqH+6Vty0riPAbWjheH8n3322VYpuG+//Xa5mGB7CGM8hKN7vV5dLfHx8WNI20E1aN4WP97YZyc7d+6MM5vNHRs2bDg3NjY23e12l5w8eZJWzIUJ9IdmlI4bNy4tICAgtHbt2hGdOnXaSe3oftu2bWmBgYFOn3MwmwcQLViwIJOeYVYJGGAZVuW2zWZzCZ6hoIGapnmknUMTQnr16vUeTOKydHqyHrx9t27dunro0KEfzJw5M4Pe3bp166Z0pHXr1g0Fj2EYCw8PD+N+SjNwUuSAKnxexOkswOWxZN63b9/MAQMGzIUwx5WXl99eunTpFLx+hJU/K9o/yM7OPhgZGdk5KSkpp0WLFv+Vrq7/na5nz57dR1dM6t7hw4e3DRkyJG7WrFlxgudzukIw58TzV3SF3Z+ByUzFbTk5O9j8fVH/JV3PnTv3uRijSdSR5/empKRkT5kypQxCC+UTxMKVQXuyWBT5WbiS4VFjIZLHWQsLN1ZFgFbm0U1KSNWUUMlDp9kAh0iNdCkRwiva2FjUsjJeJ5sYRYQwCGIYNGk8tC1UCuDQoUOb+vbtuxuPRUJ4FVwIFhZ7pUD45OXEbUpo9DIz8hgAFk0BORblWypm8BiQzkKnpoRnM+PxsEWhiYfFxMTUHTx4cDOYhg7tzM7IyLhNCiYEUEbCMxsAGYuCGjl4ClKE4GY+xCnIw95zBKqxvmyCOJqT7dws5ntZzLcoaJEjQiPUahMaESzudWEqhBEeiSuZvUvzA1+lxIMEhbD7QGYKUl0rBAgxC9vlq6IzNZZ9BYt+rMw8pBDLmSZZFBPQmBC8imaofo1roa5oKH82aQaaIH0CDTZM0sCBAxvBKbZ+7bXXGr3yyisN4ZjMDx48uAeAkofQdHbt2rUXhIpJKevMJwSLfqq3bt365enTp3eFh365SZMmBGpMFRUVZcAV1wFmzs2ZMyddtCkXk9ESExOjq1Wr9iLCbwAilA9xwrnlwimS4G2ffvppj1atWrWoWbNmbWCKAtj9V5MnT84cMWJEvTfeeKM+wqSFzCEoKMgJ3HEVgO6SkTlKMwgUgImwArn2DpMmTYrDALP0XyjEA9sbjTZtQZGij7qghqBWoK4AWPswkbLK+qHIsWPHjoXgfwvUhsZAAEflg+dfg0kuBlosUuvoO2jXl65qXWZm5g7UNRPIOIQLQqpcmECMJIAuRp1UVmiCACmTxAReFx+LhnPqV1hY+O9n6evIkSObSXCEHI0WASDtMMJ0uVHb7du3E6p9HxpxQK0DjN4r0Gc9kSZYeZiSNkuaUOv06dPTO3fuPNj0DAWgKWTFihVL+vfvT0J8kfohAsobV6tWrYbP0hf460pnLE2AF2jB21DvIKO2gO6FNB+ERJtaB+xjY37NN3+LogmkHi9s2rTp3bZt277LG8NuK5AopXbv3n0O7Gtsjx49ZmNye6GOD1RBwD9MFUKoSQSc30UdzJUrV26uWrVqP7D/lt27d+9/9OhRMas7gjYbhROzkv9R2wcHBwdWshjkYL1G7SBQTXGwTwQQLLIqWsGeGFAhVyFSO6C7Naj7ADRUJENDQGMjIiLmQl0LVLUbNWrUItSPhBNcodYhFyFklwAiYf0RNKZZs2YfFhUVXYcAvhFm0FFc++fl5eX4Mxto7JnRo0cvID4yHWSz70dHRw+khAxZ6yGVH8ndftS9DWokciWNx15fTN2zZ0+f6tWr1+LS279/fwYgcz4LPzJvdyGVLUFidFiVOIRAqx8KlQysZCdKboJUXL58uRAmMLFp06aLRbh1cGhrVEiD3nzzzTXIcU5R6gC6vXfv3kuIGgSIyq1Wq6cqpmdhiNAXFtu0adNeZVq9enUWA0xywyVECC4AicwttQ2SrvpkYnfv3i1X6xo0aPAiJv2H+fPnt27UqFEN4YsCDBCk33Lt2rW8kSNHJuP2LqUc4kq+4KFAgg6LxeKtSl+a4hMC6tSp85QD27VrVy9I1U2SJaKYS/ZG8Rf5uhVXq91ud4aEhATINo0bN46glUQMv4aQV46MMpj3iRVvsGjRohFEENQtygCRmZ5B6DsqNNPFANJT5cyZM5RoPRBE/qREaJYEYm4aZ1WFwDG9ppoClebNm9czPV/xYXOo6J4xY8Z84I8Jgq9HBCDVfsKECR+mpqZ+gSQnRVQHGTm4CxcuXBP9l4qrneUNPtheVSFYKtkF/jUKqWbx2LFjUxBJViA82asSZvv06TPq+PHjE/D4GzI70jiVT+xDyBzDo8DhZyoWNXsD4Cn/FYVQLKgIofCfMIkhgKyr4bhO8pBoVGgvsEuXLq+SEIw0Qayyl5H+vIPUmJf2ZYOwz5twXE05U/369TfBZu+wvMBpkH7L3dwyYZ+l4uoRPL50FzCcQuAJstvIyMjacG5Rw4YN64b7V9XBxcbGdgJq/cZIE4TT0/2ceTyzJsiMj0JSxfnz50+rTECBUUq2aGd2WC7Izib+WFwdLJs0sczT1w+Q3d34+PhTSKQ2w4GeVL9LTtefY1Q2YEz/qxC8LIe3f/LJJ2kqU79+/WIGDRpUj+0L8N0lG7B6N+QGiS1btgxR9ha8gi949uzZ0UiENgBSR4iQyFNiL0zkrh+V/78XfjJDq1aWnJx85dixY8kqRE1KSopNSUkZ0K1btwjhsGpMmzatbVZW1nTy/JQbQHUXA26HMRul/gOQHkcBUK1BBGiJFHgtcMV7YqeXeEM7dOhQB4lXh6dCS1kZaZbDSBjinV6ZhsBkdAMz0o00SO4hhIrUl7K/7vfv37+hP0eBw8tBftFRpNNNExMThyMqlKp8SEXsADy5t1GM+qF6CHwe+hifm5t7Ta1PSEiYj7rWIhsMZaCPEkDyL+2PHj36hdqO3lGd4KkuYbN0jC5h22TPRT179pwCZ5j9rKqF0FWtd+/eL0kBA9Y2kRudvBB4og2al1CM+iFsgQFfJTCkaZrboL2DhUfd4NjAadROvHPyvUsLayxNghxaMWw0D1EhFiguqSrxXWZ/EN7IyZMnX5QHn127dk0Gxo+nnd6q9EHf2rx58zJgC1oxSrQKgR1cKl9YWJhdOFg329TlC1oBM3YYZJ8OubcozVZTJPjkzEEwOBGr1yIr+xz23xX23i48PPxVjiqRQV6GRuetXLkSbiPpCsPuTulzEAYPAh+cnzp1ao+YmJi31D5gevkwo3sZGRmn0M+RzMzMAhFtaGG0ixcvfpmfn39WbpNBC1zILK8KHqdykCsXszQ7O/sE8WMBNKGlbrxLF1HsSeQyV5JQBSrJUghLdDQmKB46ywTJFTKzfqqxftScwM1OjGXY/Vl0UU7IHcq3XMrutkz0QsX3bOwEWo5TfsNj9hMxjP5VCFR2fPl/AS4xMH7u71X6CWR92JQjer5t72AHLrpyKGRRhKbCZrNybhJg8HvBU+385Qv8DMKi/BjBEaKuHJK42YDU/x789cFhu1s5cFH/hTAp3/UqhzMm5cTM6G8br/qnyi8lTWYDoZiUP1TUEyc1Ble1D5OSA+gG7U0GR3b+fhUy+kVIN0Kb/xFgANrk0XIqRaL0AAAAAElFTkSuQmCC"
    }, r = {
      text: {
        value: "",
        disabled: !1
      },
      logo: {
        disabled: !1,
        altText: "",
        link: "",
        value: ""
      }
    };
    if (e ? (e.logo ? e.logo.disabled ? r.logo.disabled = !0 : (r.logo.altText = e.logo.altText || i.altText, r.logo.link = e.logo.link || i.link, r.logo.value = e.logo.value || i.value) : (r.logo.altText = i.altText, r.logo.link = i.link, r.logo.value = i.value), e.text ? e.text.disabled ? r.text.disabled = !0 : r.text.value = e.text.value || t.value : r.text.value = t.value, Ue(this.$vApp.$pinia).setAttribution(r)) : (r.logo.altText = i.altText, r.logo.link = i.link, r.logo.value = i.value, r.text.value = t.value), !e || e.text?.disabled || !e.text) {
      if (!this.$iApi.geo.map.esriMap) {
        console.warn("Attempted to fetch map attribution with undefined map");
        return;
      }
      let a = "";
      const o = 5e3, l = 20, n = this.$iApi.geo.map.esriMap.basemap;
      if (n) {
        const c = n.baseLayers.map((u) => new Promise((p) => {
          let d = 0;
          const g = o / l, h = setInterval(function() {
            u.loaded && !u.loadError ? (clearInterval(h), p(u)) : d > g && (clearInterval(h), p(null)), d++;
          }, l);
        })).toArray();
        Promise.all(c).then((u) => {
          a = u.filter((d) => d?.copyright).map((d) => d.copyright).join(" | "), r.text.value = a || r.text.value || t.value, Ue(this.$vApp.$pinia).setAttribution(r);
        });
      }
    }
  }
  /**
   * Calculates a scale bar for the current resolution
   * Updates map-caption store to notify map-caption component observer
   *
   * @function updateScale
   */
  updateScale() {
    const e = Ue(this.$vApp.$pinia), t = e.scale;
    if (t?.disabled)
      return;
    const i = t?.isImperialScale || !1, r = this.scaleHelper().find((a) => a.isImperialScale === i) ?? {
      isImperialScale: !1,
      units: "error",
      pixels: 1,
      distance: 1
    };
    e.scale = {
      width: `${r.pixels}px`,
      label: `${this.$iApi.$i18n.n(r.distance, "number")}${r.units}`,
      isImperialScale: i
    };
  }
  /**
   * Formats the map point using the selected formatting function
   * Returns empty string if point is undefined
   *
   * @param { Point | undefined } p the cursor map point
   * @returns { Promise<string> } the formatted string of the map point
   */
  async formatPoint(e) {
    return e ? await this.pointFormatter(e) : "";
  }
  /**
   * Sets the current point formatter
   * Will accept the string id of a default formatter, or a new formatter with the correct formatter signature
   *
   * If given string id is not valid, then the point formatter is not changed
   *
   * @function setPointFormatter
   * @param {string | ((p: Point) => Promise<string>)} value
   */
  setPointFormatter(e) {
    if (typeof e == "string") {
      if (!(e in this.DEFAULT_POINT_FORMATTERS)) {
        console.warn(`Could not find point formatter with id: ${e}`);
        return;
      }
      this.pointFormatter = this.DEFAULT_POINT_FORMATTERS[e];
    } else
      this.pointFormatter = e;
  }
  /**
   * Generates helpful information to be used when constructing scale bars.
   * @returns { Array<ScaleHelper> } two objects with information for metric and imperial
   */
  scaleHelper() {
    const e = window.innerWidth > 600 ? 70 : 35, t = this.$iApi.geo.map.getResolution(), i = [], r = t * e, a = 1609.34, o = 3.28084, l = r > 1e3 ? ["km", "mi"] : ["m", "ft"];
    for (let n = 0; n < 2; n++) {
      const c = n === 1;
      if (i.push({
        isImperialScale: c,
        units: l[n],
        pixels: 0,
        distance: 0
      }), r > 1e3) {
        const u = t * e / (c ? a : 1e3), p = Math.round(u).toString().length, d = Math.pow(10, p - 1);
        i[n].distance = Math.ceil(u / d) * d, i[n].pixels = i[n].distance * (c ? a : 1e3) / t;
      } else
        i[n].distance = Math.ceil(c ? r * o : r), i[n].pixels = r / t;
    }
    return i;
  }
  /**
   * Wraps value between the minimum and maximum value
   * If value is between bounds, it will be returned as it is
   *
   * @function wrapValue
   * @private
   * @param {Number} val value to be wrapped
   * @param {Number} min minimum value
   * @param {Number} max maximum value
   * @return {Number} the wrapped value
   */
  wrapValue(e, t, i) {
    return ((e - t) % (i - t) + (i - t)) % (i - t) + t;
  }
  /**
   * Formats a lat/long DMS string using mouse map point coordinates
   *
   * @function formatLatLongDMSString
   * @param {Point | undefined} p the cursor map point
   * @returns {Promise<string>} the formatted string using given cursor map coordinates
   */
  async formatLatLongDMS(e) {
    const t = await this.$iApi.geo.proj.projectGeometry(4326, e), i = this.wrapValue(t.y, -90, 90), r = this.wrapValue(t.x, -180, 180), a = "°", o = Math.floor(Math.abs(i)) * (i < 0 ? -1 : 1), l = Math.floor(Math.abs((i - o) * 60)), n = Math.floor((Math.abs(i) - Math.abs(o) - l / 60) * 3600), c = Math.floor(Math.abs(r)) * (r < 0 ? -1 : 1), u = Math.floor(Math.abs((r - c) * 60)), p = Math.floor((Math.abs(r) - Math.abs(c) - u / 60) * 3600);
    return `${this.$iApi.$i18n.n(Math.abs(o), "number")}${a} ${this.$iApi.$i18n.n(l, "number", {
      minimumIntegerDigits: 2
    })}' ${this.$iApi.$i18n.n(n, "number", {
      minimumIntegerDigits: 2
    })}" ${this.$iApi.$i18n.t("map.coordinates." + (i > 0 ? "north" : "south"))} | ${this.$iApi.$i18n.n(
      Math.abs(c),
      "number"
    )}${a} ${this.$iApi.$i18n.n(u, "number", {
      minimumIntegerDigits: 2
    })}' ${this.$iApi.$i18n.n(p, "number", {
      minimumIntegerDigits: 2
    })}" ${this.$iApi.$i18n.t("map.coordinates." + (0 > r ? "west" : "east"))}`;
  }
  /**
   * Formats a lat/long DDM string using mouse map point coordinates
   *
   * @function formatLatLongDDM
   * @param {Point | undefined} p the cursor map point
   * @returns {Promise<string>} the formatted string using given cursor map coordinates
   */
  async formatLatLongDDM(e) {
    const t = await this.$iApi.geo.proj.projectGeometry(4326, e), i = this.wrapValue(t.y, -90, 90), r = this.wrapValue(t.x, -180, 180), a = "°", o = Math.floor(Math.abs(i)) * (i < 0 ? -1 : 1), l = Math.abs((i - o) * 60), n = Math.floor(Math.abs(r)) * (r < 0 ? -1 : 1), c = Math.abs((r - n) * 60);
    return `${this.$iApi.$i18n.n(Math.abs(o), "number")}${a} ${this.$iApi.$i18n.n(l, "number", {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 5,
      maximumFractionDigits: 5
    })} ${this.$iApi.$i18n.t("map.coordinates." + (i > 0 ? "north" : "south"))} | ${this.$iApi.$i18n.n(
      Math.abs(n),
      "number"
    )}${a} ${this.$iApi.$i18n.n(c, "number", {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 5,
      maximumFractionDigits: 5
    })} ${this.$iApi.$i18n.t("map.coordinates." + (0 > r ? "west" : "east"))}`;
  }
  /**
   * Formats a lat/long DD string using mouse map point coordinates
   *
   * @function formatLatLongDD
   * @param {Point | undefined} p the cursor map point
   * @returns {Promise<string>} the formatted string using given cursor map coordinates
   */
  async formatLatLongDD(e) {
    const t = await this.$iApi.geo.proj.projectGeometry(4326, e), i = this.wrapValue(t.y, -90, 90), r = this.wrapValue(t.x, -180, 180), a = "°", o = Math.abs(i), l = Math.abs(r);
    return `${this.$iApi.$i18n.n(o, "number", {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 5,
      maximumFractionDigits: 5
    })}${a} ${this.$iApi.$i18n.t(
      "map.coordinates." + (i > 0 ? "north" : "south")
    )} | ${this.$iApi.$i18n.n(l, "number", {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 5,
      maximumFractionDigits: 5
    })}${a} ${this.$iApi.$i18n.t("map.coordinates." + (0 > r ? "west" : "east"))}`;
  }
  /**
   * Formats a mercator point string using mouse map point coordinates
   *
   * @function formatMercator
   * @param {Point | undefined} p the cursor map point
   * @returns {Promise<string>} the formatted string using given cursor map coordinates
   */
  async formatMercator(e) {
    const t = await this.$iApi.geo.proj.projectGeometry(102100, e);
    return `${this.$iApi.$i18n.n(
      Math.floor(t.x),
      "number"
    )} m | ${this.$iApi.$i18n.n(Math.floor(t.y), "number")} m`;
  }
  /**
   * Formats a lambert point string using mouse map point coordinates
   *
   * @function formatLambert
   * @param {Point | undefined} p the cursor map point
   * @returns {Promise<string>} the formatted string using given cursor map coordinates
   */
  async formatLambert(e) {
    const t = await this.$iApi.geo.proj.projectGeometry(3978, e);
    return `${this.$iApi.$i18n.n(Math.abs(Math.floor(t.x)), "number")} m ${this.$iApi.$i18n.t(
      "map.coordinates." + (0 > t.x ? "west" : "east")
    )} | ${this.$iApi.$i18n.n(Math.abs(Math.floor(t.y)), "number")} m ${this.$iApi.$i18n.t(
      "map.coordinates." + (t.y > 0 ? "north" : "south")
    )}`;
  }
  /**
   * Formats a UTM string using mouse map point coordinates
   *
   * @function formatUTM
   * @param {Point | undefined} p the cursor map point
   * @returns {Promise<string>} the formatted string using given cursor map coordinates
   */
  async formatUTM(e) {
    const t = await this.$iApi.geo.proj.projectGeometry(4326, e), i = this.wrapValue(t.y, -90, 90), r = this.wrapValue(t.x, -180, 180), a = Math.ceil((r + 180) / 6), o = await this.$iApi.geo.proj.projectGeometry(parseInt("326" + a), e);
    return `${this.$iApi.$i18n.n(a, "number", {
      minimumIntegerDigits: 2
    })} ${this.$iApi.$i18n.t("map.coordinates." + (i > 0 ? "north" : "south"))} ${this.$iApi.$i18n.n(
      Math.floor(o.x),
      "number"
    )} m${this.$iApi.$i18n.t("map.coordinates.east")} | ${this.$iApi.$i18n.n(
      Math.abs(Math.floor(o.y)),
      "number"
    )} m${this.$iApi.$i18n.t("map.coordinates.north")}`;
  }
  /**
   * Formats a string based on the current basemap projection using mouse map point coordinates
   *
   * @function formatBasemap
   * @param {Point | undefined} p the cursor map point
   * @returns {Promise<string>} the formatted string using given cursor map coordinates
   */
  async formatBasemap(e) {
    const t = await this.$iApi.geo.proj.projectGeometry(this.$iApi.geo.map.getSR(), e);
    return `${this.$iApi.$i18n.n(t.x, "number")} | ${this.$iApi.$i18n.n(t.y, "number")}`;
  }
}
class tn extends Xo {
  // API for managing the maptip
  maptip;
  // API for managing map caption
  caption;
  /**
   * The throttle level for map mouse move events
   * @private
   */
  mapMouseThrottle;
  /**
   * Map wide defaults for layer times. Layers can override.
   */
  layerDefaultTimes = {
    // DEV NOTE these values get updated with any config overrides in createMap().
    //          But need to init values here on the chance layers start initializing prior to map
    //          getting "created". Affects overview map layers in particular.
    draw: 1e4,
    load: 1e4,
    fail: 9e4
  };
  /**
   * @constructor
   * @param {InstanceAPI} iApi the RAMP instance
   */
  constructor(e) {
    super(e, "main"), this.maptip = new Qo(e), this.caption = new en(e), this.mapMouseThrottle = 0;
  }
  async createMap(e, t) {
    this.setMapMouseThrottle(e.mapMouseThrottle ?? 0), this.trackFirstBasemap = !0, this.layerDefaultTimes.draw = e.layerTimeDefault?.expectedDrawTime ?? 1e4, this.layerDefaultTimes.load = e.layerTimeDefault?.expectedLoadTime ?? 1e4, this.layerDefaultTimes.fail = e.layerTimeDefault?.maxLoadTime || 9e4, await super.createMap(e, t), this.viewPromise.then(() => {
      this.$iApi.event.emit(E.MAP_CREATED);
    });
  }
  /**
   * Destroys the ESRI map. Typically called by internal system, use at your own risk.
   */
  destroyMap() {
    if (!this.esriMap || !this.esriView) {
      this.noMapErr();
      return;
    }
    this.$iApi.geo.layer.allLayersOnMap(!1).map((e) => e.uid).forEach((e) => this.removeLayer(e)), super.destroyMap(), this.$iApi.event.emit(E.MAP_DESTROYED);
  }
  /**
   * Will generate a ESRI map view and add it to the page
   * Can optionally provide the basemap or basemap id to be used when creating the map view
   *
   * @protected
   * @param {string | Basemap | undefined} basemap the id of the basemap that should be used when creating the map view
   * @returns {Promise} resolves when the map view has been created.
   */
  async createMapView(e) {
    const i = pe(this.$vApp.$pinia).config.map;
    if (!i)
      throw new Error("Attempted to create map view without a map config");
    const r = (typeof e == "string" ? await this.findBasemap(e) : e) || await this.findBasemap(i.initialBasemapId), a = i.tileSchemas.find(
      (n) => n.id === r.tileSchemaId
    );
    if (!a)
      throw new Error(`Could not find tile schema for the given basemap id: ${r.id}`);
    const o = i.extentSets.find(
      (n) => n.id === a.extentSetId
    );
    if (!o)
      throw new Error(`Could not find extent set with the given id: ${a.extentSetId}`);
    this._rampExtentSet = gt.fromConfig(o), this._rampSR = this._rampExtentSet.sr.clone();
    const l = i.lodSets.find(
      (n) => n.id === a.lodSetId
    );
    if (!l)
      throw new Error(`Could not find lod set with the given id: ${a.lodSetId}`);
    this.esriView = ee(
      await C.MapView({
        map: this.esriMap,
        container: this._targetDiv,
        constraints: {
          lods: l.lods,
          rotationEnabled: !1
        },
        spatialReference: this._rampSR.toESRI(),
        extent: this._rampExtentSet.defaultExtent.toESRI(),
        navigation: {
          browserTouchPanEnabled: !1
        },
        background: { color: r.backgroundColour }
      })
    ), this.esriView.ui.components = [], this.handlers.push({
      type: "extent",
      handler: be(
        () => this.esriView.extent,
        (n) => {
          if (n) {
            const c = this.$iApi.geo.geom.geomEsriToRamp(n, "map_extent_event");
            this.$iApi.event.emit(E.MAP_EXTENTCHANGE, c), this.$iApi.event.emit(E.FILTER_CHANGE, {
              extent: c,
              filterKey: le.EXTENT
            });
          }
        }
      )
    }), this.handlers.push({
      type: "scale",
      handler: be(
        () => this.esriView.scale,
        (n) => {
          this.$iApi.event.emit(E.MAP_SCALECHANGE, n);
        }
      )
    }), this.handlers.push({
      type: "resize",
      handler: this.esriView.on("resize", (n) => {
        this.$iApi.event.emit(E.MAP_RESIZED, {
          height: n.height,
          width: n.width
        });
      })
    }), this.handlers.push({
      type: "click",
      handler: this.esriView.on("click", (n) => {
        this.$iApi.event.emit(
          E.MAP_CLICK,
          this.$iApi.geo.geom.esriMapClickToRamp(n, "map_click_point")
        );
      })
    }), this.handlers.push({
      type: "double-click",
      handler: this.esriView.on("double-click", (n) => {
        this.$iApi.event.emit(
          E.MAP_DOUBLECLICK,
          this.$iApi.geo.geom.esriMapClickToRamp(n, "map_doubleclick_point")
        );
      })
    }), this.handlers.push({
      type: "pointer-move",
      handler: this.esriView.on("pointer-move", this.createMouseMoveHandler())
    }), this.handlers.push({
      type: "pointer-move-start",
      // emulate mouse move start event using debounce
      handler: this.esriView.on(
        "pointer-move",
        Tt(100, !0, (n) => {
          this.$iApi.event.emit(
            E.MAP_MOUSEMOVE_START,
            this.$iApi.geo.geom.esriMapMouseToRamp(n)
          );
        })
      )
    }), this.handlers.push({
      type: "pointer-move-end",
      // emulate mouse move end event using debounce
      handler: this.esriView.on(
        "pointer-move",
        Tt(100, (n) => {
          this.$iApi.event.emit(
            E.MAP_MOUSEMOVE_END,
            this.$iApi.geo.geom.esriMapMouseToRamp(n)
          );
        })
      )
    }), this.handlers.push({
      type: "pointer-leave",
      handler: this.esriView.on("pointer-leave", (n) => {
        setTimeout(
          () => {
            this.$iApi.event.emit(E.MAP_MOUSELEAVE, n.native);
          },
          Math.max(this.mapMouseThrottle, 100) + 1
        );
      })
    }), this.handlers.push({
      type: "pointer-down",
      handler: this.esriView.on("pointer-down", (n) => {
        this.$iApi.event.emit(E.MAP_MOUSEDOWN, n.native);
      })
    }), this.handlers.push({
      type: "key-down",
      handler: this.esriView.on("key-down", (n) => {
        this.$iApi.event.emit(E.MAP_KEYDOWN, n.native), n.stopPropagation();
      })
    }), this.handlers.push({
      type: "key-up",
      handler: this.esriView.on("key-up", (n) => {
        this.$iApi.event.emit(E.MAP_KEYUP, n.native), n.stopPropagation();
      })
    }), this.handlers.push({
      type: "focus",
      handler: this.esriView.on("focus", (n) => {
        this.$iApi.event.emit(E.MAP_FOCUS, n.native);
      })
    }), this.handlers.push({
      type: "blur",
      handler: this.esriView.on("blur", (n) => {
        this.$iApi.event.emit(E.MAP_BLUR, n.native);
      })
    }), this.esriView.container ? this.esriView.container.addEventListener("touchmove", (n) => {
      n.preventDefault();
    }) : console.error("ESRI Map View is missing its container"), be(
      () => this.esriView.fatalError,
      () => {
        const n = new IntersectionObserver((c) => {
          c.forEach((u) => {
            u.isIntersecting && (this.esriView?.tryFatalErrorRecovery(), n.disconnect());
          });
        });
        n.observe(this.esriView.container);
      }
    ), this.esriView.when(() => {
      if (this._viewPromise.resolveMe(), this.created = !0, this.applyBasemap(r), a.recoveryBasemap?.basemapId) {
        const n = a.recoveryBasemap.timeout ?? 8e3;
        n > 0 && setTimeout(() => {
          this.trackFirstBasemap && this.recoverBasemap(a.id);
        }, n);
      }
    });
  }
  /**
   * Destroys the ESRI map view
   *
   * @protected
   */
  destroyMapView() {
    this.esriView?.container?.removeEventListener("touchmove", (e) => {
      e.preventDefault();
    }), super.destroyMapView();
  }
  /**
   * Sets the basemap to the basemap with the given id or the basemap object
   * Throws error if basemap could not be found
   *
   * @param {string | basemap} basemap the basemap id or object
   * @returns {Promise} resolves when the basemap has been applied
   * @protected
   */
  async applyBasemap(e) {
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    const t = typeof e == "string" ? await this.findBasemap(e) : e;
    this.esriMap.basemap = Ie(t.esriBasemap);
    const i = pe(this.$vApp.$pinia);
    i.activeBasemapConfig = t.config;
  }
  /**
   * Set the map's basemap to the basemap with the given id.
   * If the new basemap's tile schema differs from the current one, the map view will be refreshed
   *
   * The returned boolean indicates if the schema has changed.
   *
   * @param {string} basemapId the basemap id
   * @returns {Promise<boolean>} resolves with boolean indicates if the schema has changed
   */
  async setBasemap(e) {
    if (!this.esriView || !this.esriMap)
      return this.noMapErr(), !1;
    const t = pe(this.$vApp.$pinia), i = await this.findBasemap(e), a = t.activeBasemapConfig.tileSchemaId !== i.tileSchemaId;
    if (a) {
      const o = this.getExtent().center(), l = this.getScale();
      this._viewPromise = new H(), this.created = !1, this.$iApi.event.emit(E.MAP_REFRESH_START), this.destroyMapView(), this.createMapView(i), await this.viewPromise.then(() => {
        this.$iApi.event.emit(E.MAP_REFRESH_END), this.$iApi.event.emit(E.MAP_BASEMAPCHANGE, {
          basemapId: e,
          schemaChanged: a
        });
        const n = this.findClosestScale(l);
        this.$iApi.geo.proj.projectGeometry(this._rampSR, o).then((c) => this.zoomMapTo(c, n, !1));
      });
    } else {
      await this.applyBasemap(i);
      const o = await C.ColorBackground({
        color: new Pe(i.backgroundColour).toESRI()
      });
      this.esriView.background = o, this.$iApi.event.emit(E.MAP_BASEMAPCHANGE, {
        basemapId: e,
        schemaChanged: a
      });
    }
    return a;
  }
  /**
   * Will attempt to change to another basemap if the very first basemap failed.
   * If nothing is defined, will do nothing but manage our watching state.
   *
   * @param {string} basemapSchemaId the basemap schema id (where the fallback is defined)
   * @returns {Promise<void>} resolves after recovery has initiated
   */
  async recoverBasemap(e) {
    this.esriMap || this.noMapErr(), this.trackFirstBasemap = !1;
    const i = pe(this.$vApp.$pinia).config.map;
    if (i) {
      const r = i.tileSchemas.find((a) => a.id === e);
      if (r?.recoveryBasemap?.basemapId) {
        const a = await this.findBasemap(r.recoveryBasemap.basemapId);
        await this.applyBasemap(a);
      }
    }
  }
  /**
   * Registers a layer with the instance and attempts to add it to the the map.
   * The return value provides an async indicator if the map add was successful,
   * but the layer is registered regardless.
   * Optionally can specify the layer order index for map layers.
   *
   * @param {LayerInstance} layer the Ramp layer to add
   * @param {number | undefined} index optional order index to add the layer to
   * @returns {Promise<void>} a promise that resolves when the layer has been added to the map
   */
  addLayer(e, t = void 0) {
    return new Promise((i, r) => {
      if (this.esriMap || (this.noMapErr(), r()), e.initiationState !== N.INITIATING && e.initiationState !== N.INITIATED && e.layerState !== q.ERROR && e.initiate(), e.mapLayer && t === void 0) {
        const c = this.$iApi.geo.layer.layerOrderIds();
        if (e.isCosmetic)
          t = c.length;
        else {
          const u = this.$iApi.geo.layer.allLayers();
          let p = !0;
          for (let d = c.length - 1; d >= 0 && p; d--) {
            const g = u.find((h) => h.id === c[d]);
            g && !g.isCosmetic && (t = d + 1, p = !1);
          }
          p && (t = 0);
        }
      }
      _e(this.$vApp.$pinia).addLayer(e, t), this.$iApi.event.emit(E.LAYER_REGISTERED, e);
      const o = Date.now();
      let l = 0;
      const n = setInterval(() => {
        l += 250, l >= e.expectedTime.fail || e.layerState === q.ERROR ? (clearInterval(n), e.lastCancel < o && console.error(`Failed to add layer: ${e.id}.`), r()) : e.initiationState === N.INITIATED && (e.esriLayer || !e.mapLayer) && (clearInterval(n), e.mapLayer ? this.insertToEsriMap(e) : e.onLoad(), i());
      }, 250);
    });
  }
  /**
   * Utility method to insert a Map Layer into the ESRI map. The position in ESRI map
   * is derived from global order and what layers are currently in the map.
   *
   * @param {LayerInstance} layer the RAMP layer to insert. Must be a Map layer
   */
  insertToEsriMap(e) {
    let t = 0;
    const i = this.$iApi.geo.layer.getLayerPosition(e.id) ?? -1;
    if (i > 0) {
      const r = this.$iApi.geo.layer.layerOrderIds(), a = this.$iApi.geo.layer.allLayers();
      for (let o = i - 1; o > -1; o--) {
        const l = r[o], n = a.find((c) => c.id === l);
        if (n && n.esriLayer) {
          const c = this.esriMap.layers.indexOf(n.esriLayer);
          if (c > -1) {
            t = c + 1;
            break;
          }
        } else n || console.error("ESRI Layer insert encountered bad state. Layer likely inserted at bottom of map.");
      }
    }
    i > -1 && this.esriMap?.add(e.esriLayer, t);
  }
  /**
   * Reorders a layer on the map. The position is based on the instance layer order state
   * maintained by the LayerAPI.
   * If ignoreCosmetic is set, the index changes to a different basis. Essentially the
   * as if cosmetic layers did not exists in the layer order state.
   *
   * @param {LayerInstance} layer the RAMP layer to be moved. If a sublayer is passed, the parent will be reordered.
   * @param {number} index the RAMP layer index where the layer will be moved to
   * @param {boolean} ignoreCosmetic indicates if the index should ignore cosmetic layers
   */
  reorder(e, t, i = !1) {
    if (t < 0) {
      console.error("Negative index passed to map reorder");
      return;
    }
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    if (e.isSublayer && (e = e.parentLayer), !e.mapLayer) {
      console.error("Attempted to reorder a data layer");
      return;
    }
    const r = this.$iApi.geo.layer.allLayers();
    let a = this.$iApi.geo.layer.layerOrderIds();
    if (i) {
      if (e.isCosmetic)
        return;
      if (t > 0) {
        const n = a.filter((c) => {
          const u = r.find((p) => p.id === c);
          return u ? !u.isCosmetic : (console.error("Layer reorder had critical error"), !1);
        });
        t >= n.length && (console.error("non-cosmetic reorder index was too high"), t = n.length - 1), t = a.indexOf(n[t]);
      }
    } else t >= a.length && (console.error("reorder index was too high"), t = a.length - 1);
    const o = a.indexOf(e.id);
    if (o === t)
      return;
    if (_e(this.$vApp.$pinia).reorderLayer(e, t), e.esriLayer && this.esriMap.layers.indexOf(e.esriLayer) > -1) {
      let n = 0;
      if (t > 0) {
        a = this.$iApi.geo.layer.layerOrderIds();
        for (let c = t - 1; c > -1; c--) {
          const u = a[c], p = r.find((d) => d.id === u);
          if (p && p.esriLayer) {
            const d = this.esriMap.layers.indexOf(p.esriLayer);
            if (d > -1) {
              const g = t < o ? 1 : 0;
              n = d + g;
              break;
            }
          } else p || console.error("Layer reorder had critical error");
        }
      }
      this.esriMap.reorder(e.esriLayer, n);
    }
    this.$iApi.event.emit(E.MAP_REORDER, {
      layer: e,
      newIndex: t
    });
  }
  /**
   * Removes a sublayer from the map
   *
   * @param {LayerInstance | string} layer the Ramp sublayer or sublayer id/uid to remove
   * @returns {Promise<void>} a promise that resolves when the layer has been removed from the map
   */
  removeSublayer(e) {
    let t, i;
    if (typeof e == "string")
      t = e, i = this.$iApi.geo.layer.getLayer(t);
    else {
      if (!e.isSublayer)
        throw new Error(`Attempted to call removeSublayer on a non-sublayer object: ${e}`);
      t = e.uid, i = e;
    }
    if (!i)
      throw new Error("Sublayer could not be found for removal.");
    i.visibility = !1, i.isRemoved = !0, this.$iApi.event.emit(E.LAYER_REMOVE, e), i.parentLayer?.sublayers.every((r) => r.isRemoved) && this.removeLayer(i.parentLayer);
  }
  /**
   * Removes a layer from the map and fires the layer remove event.
   * This will also unregister the layer from the Ramp instance.
   *
   * @param {LayerInstance | string} layer the Ramp layer or layer id/uid to remove
   * @returns {Promise<void>} a promise that resolves when the layer has been removed from the map
   */
  removeLayer(e) {
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    let t;
    if (e instanceof li ? t = e : t = this.$iApi.geo.layer.getLayer(e), !t)
      throw new Error("Layer could not be found for removal.");
    if (t.isSublayer) {
      this.removeSublayer(t);
      return;
    }
    t.supportsSublayers && t.sublayers.forEach((r) => {
      r.isRemoved || this.removeSublayer(r);
    });
    const i = _e(this.$vApp.$pinia);
    i.removeLayer(t), i.removeLayerConfig(t.id), t.removeEsriLayer(), t.initiationState === N.INITIATED && t.terminate(), t.isRemoved = !0, this.$iApi.event.emit(E.LAYER_REMOVE, t);
  }
  /**
   * Set's the map's mapMouseThrottle value to newThrottle.
   * If newThrottle is not a positive number, a console error is thrown.
   *
   * The returned boolean indicates if the value has been successfully set.
   *
   * @param {number} newThrottle the new mapMouseThrottle value, which must be a positive number
   * @returns {boolean} indicates if the value was set successfully
   */
  setMapMouseThrottle(e) {
    if (e < 0)
      return console.error("Cannot set map mouse throttle to value that is less than 0."), !1;
    this.mapMouseThrottle = e;
    const t = this.handlers.findIndex((i) => i.type === "pointer-move");
    if (t !== -1) {
      const i = this.handlers[t];
      this.handlers.splice(t, 1), i.handler.remove();
    }
    return t !== -1 && this.esriView && this.handlers.push({
      type: "pointer-move",
      handler: this.esriView.on("pointer-move", this.createMouseMoveHandler())
    }), !0;
  }
  /**
   * Creates a throttled map mouse move handler.
   * Uses mapMouseThrottle for the throttle delay
   *
   * @returns the throttled handler function
   */
  createMouseMoveHandler() {
    if (!this.esriView) {
      this.noMapErr();
      return;
    }
    return it(this.mapMouseThrottle, (e) => {
      this.$iApi.event.emit(E.MAP_MOUSEMOVE, this.$iApi.geo.geom.esriMapMouseToRamp(e));
    });
  }
  /**
   * Zooms the map to a given zoom level. The center point will not change.
   * In the rare case where there is no basemap, this will likely do nothing
   *
   * @param {number} zoomLevel An integer matching the level of detail / zoom level the map should adjust to
   * @returns {Promise<void>} A promise that resolves when the map has finished zooming
   */
  async zoomToLevel(e) {
    if (this.esriView)
      return this.esriView.goTo({ zoom: e });
    this.noMapErr();
  }
  /**
   * Zooms the map to the next zoom level in towards the earth. The center point will not change.
   * In the rare case where there is no basemap, this will likely do nothing
   *
   * @returns {Promise<void>} A promise that resolves when the map has finished zooming
   */
  async zoomIn() {
    if (this.esriView)
      return this.zoomToLevel(this.esriView.zoom + 1);
    this.noMapErr();
  }
  /**
   * Zooms the map to the next zoom level out away from the earth. The center point will not change.
   * In the rare case where there is no basemap, this will likely do nothing
   *
   * @returns {Promise<void>} A promise that resolves when the map has finished zooming
   */
  async zoomOut() {
    if (this.esriView)
      return this.zoomToLevel(this.esriView.zoom - 1);
    this.noMapErr();
  }
  /**
   * Zooms the map to the closest zoom level that will be visible for a given scale set.
   * Does nothing if scale set is already visible for the map.
   *
   * @returns {Promise<void>} A promise that resolves when the map has finished zooming
   */
  async zoomToVisibleScale(e) {
    if (!this.esriView) {
      this.noMapErr();
      return;
    }
    const t = e.isOffScale(this.getScale());
    if (!t.offScale)
      return;
    const i = this.esriView.constraints.lods;
    if (!i)
      return this.zoomMapTo(this.getExtent().center(), (t.zoomIn, e.minScale));
    const r = t.zoomIn ? i : [...i].reverse(), a = r.find(
      (o) => t.zoomIn ? o.scale < e.minScale : o.scale > e.maxScale
    ) || r[r.length - 1];
    return this.zoomToLevel(a.level);
  }
  /**
   * Finds the tile scale (level of detail) closest to the provided scale.
   * If using a map with no scale levels, will return the given scale.
   *
   * @function findClosestScale
   * @param  {Number} scale   scale value to search for in the levels of detail
   * @return {Number}         the level of detail scale closest to the input
   */
  findClosestScale(e) {
    const t = this.esriView?.constraints.lods;
    if (!t)
      return e;
    const i = t.map((a) => Math.abs(a.scale - e)), r = i.indexOf(Math.min(...i));
    return t[r].scale;
  }
  /**
   * Create a screenshot of the current view.
   *
   * Possible ESRI takeScreenshot() options:
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#takeScreenshot
   * Will default to quality = 1 and format = 'png'.
   *
   * @param {__esri.MapViewTakeScreenshotOptions} options ESRI takeScreenshot() options
   * @returns {Promise<Screenshot>} a promise that resolves with a Screenshot
   */
  async takeScreenshot(e) {
    if (this.esriView)
      return e.quality || (e.quality = 1), e.format || (e.format = "png"), this.esriView.takeScreenshot(e);
    throw new Error("Export attempted without a map view available");
  }
  /**
   * Get a point in map co-ordinates corresponding to a pixel in screen co-ordinates.
   *
   * @param {ScreenPoint} screenPoint pixel screen co-ord of the point on the map
   * @returns {Point} the map point analagous to the screen point
   */
  screenPointToMapPoint(e) {
    return this.esriView ? K.fromESRI(
      this.esriView.toMap({
        x: e.screenX,
        y: e.screenY
      }),
      "mappoint"
    ) : (this.noMapErr(), new K("i_am_error", [0, 0], void 0, !0));
  }
  /**
   * Get a pixel in screen co-ordinates corresponding to a point in map co-ordinates.
   *
   * @param {Point} mapPoint point on the map
   * @returns {ScreenPoint} the screen point analagous to the map point
   */
  mapPointToScreenPoint(e) {
    if (this.esriView) {
      const t = this.esriView.toScreen(e.toESRI());
      return { screenX: t.x, screenY: t.y };
    } else
      return this.noMapErr(), { screenX: 1, screenY: 1 };
  }
  /**
   * Determines any client-side symbol hits at a map pixel. Handles any declustering.
   *
   * @param screenX
   * @param screenY
   * @returns promise resolving in all graphic hits under the pixel
   */
  async symbolIdentify(e, t) {
    await this.viewPromise;
    const r = (await this.esriView.hitTest({
      x: e,
      y: t
    })).results.filter((o) => o.type === "graphic").map(async (o) => {
      const l = o.layer;
      if (o.graphic.isAggregate === !0) {
        const n = await this.esriView.whenLayerView(l), c = n.createQuery();
        return c.aggregateIds = [o.graphic.getObjectId()], (await n.queryFeatures(c)).features.map((p) => ({
          layerId: l.id,
          layerIdx: 0,
          oid: p.getObjectId()
        }));
      } else
        return {
          layerId: l.id,
          layerIdx: 0,
          // not required for this process, default rather than expensive lookup
          oid: o.graphic.getObjectId()
        };
    });
    return (await Promise.all(r)).flat();
  }
  // pending https://github.com/ramp4-pcar4/ramp4-pcar4/issues/130
  // commenting out to avoid any undecided constants being exposed
  /*
  _identifyMode: IdentifyMode[] = [
      IdentifyMode.Query,
      IdentifyMode.Marker,
      IdentifyMode.Highlight,
      IdentifyMode.Haze,
      IdentifyMode.Details
  ];
  */
  // a note about modes and events.
  // depending if we choose to implement the old modes are come up with a new scheme,
  // there are two event handlers that are running stuff (see events.ts).
  // there is a map click event that then triggers the identify routine below
  // and there is the identify event, raised by the routine below, that then opens the details panel.
  // so the solution may need to either do some on/off'ing of the event handlers,
  // or we introduce some global flag variables that get referenced
  // (e.g. dont run identify could be a first line in the function below: if api.noIdentify then return )
  // global flags MIGHT be safer, as it doesn't have to assume the default handlers are in play.
  // i.e. if someone did some event modding for custom results, and we have core code then swapping
  //      default event handlers, would be a mess.
  /**
   * Performs an identify request on all layers that support identify, and combines the results.
   *
   * @param {MapClick | Point} targetPoint the place on the map to execute the identify
   * @memberof MapAPI
   * @returns {MapIdentifyResult} results of the identify
   */
  runIdentify(e) {
    const t = this.$iApi.geo.layer.allLayersOnMap(!1).filter((u) => u.canIdentify());
    let i;
    if (e instanceof K) {
      const u = this.mapPointToScreenPoint(e);
      i = {
        mapPoint: e,
        screenX: u.screenX,
        screenY: u.screenY,
        button: 0,
        input: "mouse",
        clickTime: Date.now()
      };
    } else
      i = e;
    const r = this.$iApi.fixture.get("draw");
    if (r && this.esriView && (r.store.activeTool || r.store.selectedGraphicId !== null))
      return { click: i, results: [] };
    if (t === void 0)
      return { click: i, results: [] };
    let a = Promise.resolve([]);
    t.some((u) => u.identifyMode === X.HYBRID || u.identifyMode === X.SYMBOLIC) && (a = this.symbolIdentify(i.screenX, i.screenY));
    const o = {
      geometry: i.mapPoint,
      hitTest: a
    }, l = t.filter((u) => u.supportsIdentify).map((u) => (o.tolerance = i.input == "touch" ? u.touchTolerance : u.mouseTolerance, u.runIdentify(o))).flat(), n = Date.now();
    l.forEach((u) => {
      u.requestTime = n;
    });
    const c = {
      results: l,
      click: i
    };
    return this.$iApi.event.emit(E.MAP_IDENTIFY, c), c;
  }
  /**
   * Get the top-most graphic at the given screen point
   * Returns undefined if there is no graphic
   *
   * @param {ScreenPoint} screenPoint The screen coordinates to inspect
   * @returns {Promise<GraphicHitResult | undefined>} resolves with topmost graphic or undefined
   */
  async getGraphicAtCoord(e) {
    if (!this.esriView) {
      this.noMapErr();
      return;
    }
    const t = this.$iApi.geo.layer.allLayersOnMap(!1).filter((n) => n.supportsFeatures || n.layerType === x.GRAPHIC);
    if (t.length === 0)
      return;
    const i = await this.esriView.hitTest({
      x: e.screenX,
      y: e.screenY
    });
    if (i.results.length === 0)
      return;
    const r = i.results.filter((n) => n.type === "graphic");
    let a, o;
    const l = /* @__PURE__ */ new Set();
    if (r.some((n) => {
      if (!n.layer || l.has(n.layer.id))
        return !1;
      const c = t.find((u) => u.id === n.layer.id);
      return c ? (c.isCosmetic || c.layerType === x.GRAPHIC || n.graphic.isAggregate || (a = c, o = n.graphic), !0) : (l.add(n.layer.id), !1);
    }), a && o)
      return {
        oid: o.getObjectId(),
        layerId: a.id,
        layerIdx: a.layerIdx
      };
  }
  // -------
  // Key Handler Fun
  // -------
  // list of keys that are currently pressed
  _activeKeys = [];
  // ID of pan interval
  _panInterval;
  // true if map is focused using mouse click
  _mouseFocus = !1;
  /**
   * Processes keydown event on map and initiates panning/zooming
   *
   * @param {KeyboardEvent} payload
   * @memberof MapAPI
   */
  mapKeyDown(e) {
    const t = ["=", "-"];
    ["Shift", "Control", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp"].includes(e.key) && !this._activeKeys.includes(e.key) ? (this._activeKeys.push(e.key), this._activeKeys.some((r) => t.includes(r)) || this.keyPan()) : t.includes(e.key) && !this._activeKeys.includes(e.key) ? (this._activeKeys.push(e.key), this.keyZoom(e)) : e.key === "Enter" ? this.runIdentify(this.getExtent().center()) : e.key === "Tab" && this._activeKeys.push(e.key);
  }
  /**
   * Processes keyup event on map and deactivates key
   *
   * @param {KeyboardEvent} payload
   * @memberof MapAPI
   */
  mapKeyUp(e) {
    const t = ["=", "-"];
    this._activeKeys.includes(e.key) && !t.includes(e.key) && (this._activeKeys.splice(this._activeKeys.indexOf(e.key), 1), this._activeKeys.some((i) => t.includes(i)) || this.keyPan());
  }
  /**
   * Sets the map focus source from the mouse
   *
   * @memberof MapAPI
   */
  setMouseFocus() {
    this._mouseFocus = !0;
  }
  /**
   * Stops panning and deactivates all keys
   *
   * @memberof MapAPI
   */
  stopKeyPan() {
    this._activeKeys.includes("Tab") && (this._mouseFocus = !1), this._activeKeys = [], clearInterval(this._panInterval);
  }
  /**
   * Returns if keys are active on map
   *
   * @memberof MapAPI
   * @returns {boolean} - true if any pan/zoom keys are active
   */
  get keysActive() {
    return this._activeKeys.filter((e) => !["Control", "Shift"].includes(e)).length !== 0;
  }
  /**
   * Returns if map focus is caused by mouse click
   *
   * @memberof MapAPI
   * @returns {boolean}
   */
  get mouseFocus() {
    return this._mouseFocus;
  }
  /**
   * Pauses pan interval to process zoom from keyboard
   *
   * @param {KeyboardEvent} payload
   * @memberof MapAPI
   * @private
   */
  async keyZoom(e) {
    clearInterval(this._panInterval), e.key === "=" ? await this.zoomIn() : e.key === "-" && await this.zoomOut(), this._activeKeys.splice(this._activeKeys.indexOf(e.key), 1), this.keyPan();
  }
  /**
   * Starts/restarts panning with active keys
   *
   * @memberof MapAPI
   * @private
   */
  keyPan() {
    if (clearInterval(this._panInterval), !this.keysActive)
      return;
    const e = this.getExtent().center(), t = this.mapPointToScreenPoint(e), i = this.screenPointToMapPoint({
      screenX: t.screenX + 5,
      screenY: t.screenY + 5
    }), r = Math.abs(i.x - e.x), a = Math.abs(i.y - e.y);
    let o = 0, l = 0, n = 1;
    for (let u = 0; u < this._activeKeys.length; ++u)
      switch (this._activeKeys[u]) {
        case "ArrowLeft":
          o -= r;
          break;
        case "ArrowRight":
          o += r;
          break;
        case "ArrowUp":
          l += a;
          break;
        case "ArrowDown":
          l -= a;
          break;
        case "Shift":
          n = 2;
          break;
        case "Control":
          n = 0.25;
          break;
      }
    const c = this.getScale();
    this._panInterval = setInterval(() => {
      e.x += n * o, e.y += n * l, this.zoomMapTo(e, c, !1);
    }, 25);
  }
}
const sn = { geometryType: "point", renderer: { type: "simple", symbol: { type: "esriSMS", style: "esriSMSCircle", color: [67, 100, 255, 200], size: 7, outline: { color: [0, 0, 0, 255], width: 1 } } } }, rn = { geometryType: "polyline", renderer: { type: "simple", symbol: { type: "esriSLS", style: "esriSLSSolid", color: [90, 90, 90, 200], width: 2 } } }, an = { geometryType: "polygon", renderer: { type: "simple", symbol: { type: "esriSFS", style: "esriSFSSolid", color: [76, 76, 125, 200], outline: { type: "esriSLS", style: "esriSLSSolid", color: [110, 110, 110, 255], width: 1 } } } }, on = { geometryType: "polygon", renderer: { type: "simple", symbol: { type: "esriSFS", style: "esriSFSSolid", color: [255, 0, 0, 64], outline: { type: "esriSLS", style: "esriSLSSolid", color: [240, 128, 128, 255], width: 1 } } } }, nn = {
  circlePoint: sn,
  solidLine: rn,
  outlinedPoly: an,
  boundingBoxPoly: on
}, ln = {
  Point: "circlePoint",
  MultiPoint: "circlePoint",
  LineString: "solidLine",
  MultiLineString: "solidLine",
  Polygon: "outlinedPoly",
  MultiPolygon: "outlinedPoly"
};
function cn(s) {
  if (s.type !== "FeatureCollection")
    throw new Error("GeoJSON is not in FeatureCollection format");
  let e = !0, t = !0;
  for (let i = 0; i < s.features.length; i++) {
    const r = s.features[i];
    Object.assign(r.properties, { ID_FILE: "", OBJECTID_FILE: "" }), "id" in r && typeof r.id < "u" && (r.properties.ID_FILE = r.id, e = !1), "OBJECTID" in r.properties && (r.properties.OBJECTID_FILE = r.properties.OBJECTID, delete r.properties.OBJECTID, t = !1), r.id = i + 1;
  }
  if (e)
    for (let i = 0; i < s.features.length; i++)
      delete s.features[i].properties.ID_FILE;
  if (t)
    for (let i = 0; i < s.features.length; i++)
      delete s.features[i].properties.OBJECTID_FILE;
}
function un(s, e) {
  const t = (i) => i.indexOf(" ") > -1;
  e.fields?.forEach((i) => {
    if (i.name && t(i.name)) {
      const r = i.name;
      let a, o = "_", l;
      do
        a = r.replace(/ /g, o), l = e.fields?.find((n) => n.name === a), l && (o += "_");
      while (l);
      i.alias = r, i.name = a;
      for (let n = 0; n < s.features.length; n++) {
        const c = s.features[n];
        c.properties[a] = c.properties[r], delete c.properties[r];
      }
    }
  });
}
function pn(s, e) {
  const t = s.features[e].geometry.geometries;
  if (t.length === 1)
    s.features[e].geometry = {
      type: t[0].type,
      coordinates: t[0].coordinates
    };
  else {
    const i = t.map((r) => r.coordinates);
    s.features[e].geometry = {
      type: `Multi${t[0].type}`,
      coordinates: i
    };
  }
}
function dn(s) {
  return s === "MultiLineString" ? "LineString" : s === "MultiPolygon" ? "Polygon" : s;
}
class hn extends J {
  /**
   * Fetch file data from remote URL.
   * @param url the URL to get the data from
   * @param fileType the type of the file layer (csv, shape, or geoJson)
   */
  async fetchFileData(e, t) {
    const i = await bt.get(e, {
      responseType: "arrayBuffer"
    });
    switch (t) {
      case x.GEOJSON:
      case x.DATAJSON:
        return JSON.parse(this.arbToStr(i.data));
      case x.SHAPEFILE:
      case x.GEOJSONZIPPED:
      case x.FLATGEOBUF:
      case x.FLATGEOBUFZIPPED:
        return i.data;
      case x.CSV:
      case x.DATACSV:
        return this.arbToStr(i.data);
      default:
        console.error(`Unsupported file type passed to fetchFileData- '${t}'`);
    }
  }
  /**
   * Extracts fields from the first feature in the feature collection
   */
  extractGeoJsonFields(e) {
    if (e.features.length < 1)
      throw new Error("GeoJSON field extraction requires at least one feature");
    let t = "";
    for (let o = 0; o < e.features.length; o++) {
      const l = e.features[o];
      if (l.geometry.type === "GeometryCollection") {
        const u = l.geometry.geometries;
        if (u === void 0 || u.length === 0)
          throw new Error("GeoJSON file has geometry collection with missing/incomplete geometries");
        const p = u[0].type;
        for (let d = 0; d < u.length; d++)
          if (u[d].type !== p)
            throw new Error("GeoJSON file has geometry collection containing multiple geometry types");
        pn(e, o);
      }
      const c = dn(l.geometry.type);
      if (t === "")
        t = c;
      else if (t !== c)
        throw new Error("GeoJSON file contains multiple geometry types");
    }
    const i = Object.keys(e.features[0].properties).map((o) => ({ name: o, type: "string" }));
    let r = 0;
    const a = Object.keys(e.features[0].properties);
    for (; r < e.features.length; ) {
      const o = e.features[r];
      if (o.properties && Object.keys(o.properties).filter((l) => a.includes(l)).forEach((l) => {
        const n = o.properties[l];
        if (n != null) {
          const c = i.findIndex((u) => u.name === l);
          i[c] = {
            name: l,
            type: this.inferType(n)
          }, a.splice(a.indexOf(l), 1);
        }
      }), a.length === 0)
        break;
      r++;
    }
    return i;
  }
  /**
   * Extracts fields from csv file does no guesswork on property types and calls everything a string.
   */
  extractCsvFields(e, t = ",") {
    return vi.dsvFormat(t).parseRows(e)[0].map((r) => ({ name: r, type: Ce.STRING }));
  }
  /**
   * Returns all the fields from csv file that can be possible lat/long fields
   * @param csvData the csv file data
   * @param delimiter the delimiter in the data
   */
  filterCsvLatLonFields(e, t = ",") {
    const i = vi.dsvFormat(t).parseRows(e), r = i[0], a = {
      lat: JSON.parse(JSON.stringify(r)),
      lon: JSON.parse(JSON.stringify(r))
    };
    for (let o = 0; o < r.length; o++)
      for (let l = 1; l < i.length; l++) {
        const n = Number(i[l][o]), c = a.lat.indexOf(r[o]), u = a.lon.indexOf(r[o]);
        if ((isNaN(n) || n < -90 || n > 90) && c !== -1 && a.lat.splice(c, 1), (isNaN(n) || n < -180 || n > 180) && u !== -1 && a.lon.splice(u, 1), c === -1 && u === -1)
          break;
      }
    return a;
  }
  /**
   * Convert GeoJSON to Esri json, a format that can be read by a feature layer constructor
   *
   * @param geoJson {Object} a GeoJSON object
   * @param options {GeoJsonOptions} any options for the transformation
   * @returns {Object} feature layer constructor object
   */
  async geoJsonToEsriJson(e, t) {
    let i, r = "", a;
    const o = {
      objectIdField: "OBJECTID",
      fields: [
        {
          name: "OBJECTID",
          type: Ce.OID
        }
      ]
    };
    cn(e);
    const l = e.features[0].geometry.type, n = ln[l], c = JSON.parse(
      // @ts-expect-error TODO: explain why this is needed or remove
      JSON.stringify(nn[n])
    );
    if (t) {
      if (t.sourceProjection && (r = this.$iApi.geo.proj.normalizeProj(t.sourceProjection)), t.targetSR)
        i = t.targetSR;
      else
        throw new Error("geoJsonToEsriJson - missing opts.targetSR arguement");
      t.layerId ? a = t.layerId : a = this.$iApi.geo.shared.generateUUID(), t.colour && (c.renderer.symbol.color = new Pe(t.colour).toArcServer());
    } else
      throw new Error("geoJsonToEsriJson - missing opts arguement");
    r || (r = _.parseGeoJsonCrs(e.crs)), o.renderer = await C.RendererFromJson(c.renderer), o.fields = (o.fields || []).concat(
      t.fieldMetadata?.exclusiveFields ? this.extractGeoJsonFields(e).filter(
        (y) => t.fieldMetadata?.fieldInfo?.find((w) => w.name === y.name)
      ) : this.extractGeoJsonFields(e)
    ), t.fieldMetadata?.enforceOrder && t.fieldMetadata?.fieldInfo && t.fieldMetadata?.fieldInfo.length > 0 && (o.fields = this.$iApi.geo.attributes.orderFields(
      o.fields,
      t.fieldMetadata?.fieldInfo
    )), un(e, o);
    const u = this.$iApi.geo.proj.normalizeProj(i);
    if (t) {
      if (t.latField) {
        const y = o.fields.find(
          (w) => w.name === t.latField || w.alias === t.latField
        );
        y && (y.type = Ce.DOUBLE);
      }
      if (t.lonField) {
        const y = o.fields.find(
          (w) => w.name === t.lonField || w.alias === t.lonField
        );
        y && (y.type = Ce.DOUBLE);
      }
    }
    await this.$iApi.geo.proj.checkProjBomber([r, i]);
    const p = _.parseSR(i).toESRI();
    await this.$iApi.geo.proj.projectGeoJson(e, r, u);
    const d = Fs(e, { sr: 8888 });
    o.geometryType = this.$iApi.geo.geom.geoJsonGeomTypeToEsriGeomType(l);
    const g = o.fields.map((y) => y.name);
    for (let y = 0; y < d.length; y++) {
      const w = d[y];
      w.geometry.spatialReference = p, w.geometry.type = o.geometryType, Object.keys(w.attributes).forEach((b) => {
        g.includes(b) ? (Array.isArray(w.attributes[b]) || typeof w.attributes[b] == "object") && w.attributes[b] != null && (w.attributes[b] = JSON.stringify(w.attributes[b])) : delete w.attributes[b];
      });
    }
    return (t.fieldMetadata?.fieldInfo && t.fieldMetadata?.fieldInfo.length > 0 ? t.fieldMetadata.fieldInfo.filter((y) => y.trim && g.includes(y.name)).map((y) => y.name) : []).forEach((y) => {
      for (let w = 0; w < d.length; w++) {
        const b = d[w].attributes;
        typeof b[y] == "string" && (b[y] = b[y].trim());
      }
    }), o.source = d, o.spatialReference = p, o.id = a, o;
  }
  // converts csv file in string format to geojson object
  // options
  //     - latfield: a string identifying the field containing latitude values ('Lat' by default)
  //     - lonfield: a string identifying the field containing longitude values ('Long' by default)
  //     - delimiter: a string defining the delimiter character of the file (',' by default)
  async csvToGeoJson(e, t) {
    const i = {
      // default values
      latfield: "Lat",
      lonfield: "Long",
      delimiter: ","
    };
    return t && (t.latfield && (i.latfield = t.latfield), t.lonfield && (i.lonfield = t.lonfield), t.delimiter && (i.delimiter = t.delimiter)), new Promise((r, a) => {
      Ds(e, i, (o, l) => {
        o ? (console.error("csv conversion error"), console.error(o), a(o)) : (l.features.map((n) => {
          n.properties[i.lonfield] = n.geometry.coordinates[0], n.properties[i.latfield] = n.geometry.coordinates[1];
        }), r(l));
      });
    });
  }
  /**
   * Converts Shapefile data to geojson.
   *
   * @param {ArrayBuffer} shapeData an ArrayBuffer of the Shapefile in zip format
   * @returns {Promise} a promise resolving with geojson
   */
  async shapefileToGeoJson(e) {
    return (await import("shpjs/dist/shp.min.js")).default(e);
  }
  /**
   * Converts FlatGeobuf data to geojson.
   *
   * @param {ArrayBuffer} fgbData an ArrayBuffer of a FlatGeobuf file
   * @param {number} maxLoadTime how long we are will permit this to run, in milliseconds
   * @returns {Promise} a promise resolving with geojson
   */
  fgbToGeoJson(e, t) {
    return import("flatgeobuf").then(({ geojson: r }) => new Promise((a) => {
      let o = !1, l = null;
      const n = r.deserialize(new Uint8Array(e), void 0, (p) => {
        l = p.crs, o = !0;
      });
      let c = 0;
      const u = setInterval(() => {
        if (n && o) {
          clearInterval(u);
          let p;
          l && (l.code && l.code !== 4326 && l.org === "EPSG" ? p = new _(l.code) : l.wkt ? p = new _(l.wkt) : console.error("Encountered FlatGeobuf with non-EPSG org: ", l)), p && (n.crs = p.toGeoJSON()), a(n);
        } else
          c += 60, c > t && (clearInterval(u), a({}));
      }, 60);
    }));
  }
  /**
   * Attempt to infers the type of a given value
   * Will check if the value's type is one of int, double
   * Defaults to string type if not
   */
  inferType(e) {
    return typeof e == "number" ? Ce.DOUBLE : Ce.STRING;
  }
  /**
   * Will property convert json-based raw data (on a layer config) to a json object
   * while respecting caching considerations.
   *
   * @param {String | Object} rawData json-compatible payload from config
   * @param {Boolean} [caching=false] if layer is concerned about caching the payload
   * @returns {Object} data as a Json object
   */
  rawDataJsonParser(e, t = !1) {
    let i;
    return typeof e == "string" ? i = JSON.parse(e) : t ? i = structuredClone(e) : i = e, i;
  }
  /**
   * Unzip a single zipped file.
   *
   * @param {ArrayBuffer} zippedData zipped file as ArrayBuffer
   * @returns {Promise<ArrayBuffer>} contents of the unzipped file as ArrayBuffer
   */
  async unzipSingleFile(e) {
    const t = await import("jszip"), r = await new t.default().loadAsync(e), a = Object.keys(r.files)[0];
    if (a && r.file(a))
      return await r.file(a).async("arraybuffer");
    throw new Error("Could not find file in zipfile data.");
  }
  /**
   * Helper method for extracting binary-encoded file source from a layer config.
   *
   * @param {RampLayerConfig} layerConfig a ramp layer config. Should be layer type that is a binary format.
   */
  async binaryInitHelper(e) {
    if (e.rawData && e.rawData instanceof ArrayBuffer)
      return e.rawData;
    if (e.url)
      return this.$iApi.geo.layer.files.fetchFileData(e.url, e.layerType);
    throw new Error(`${e.layerType} config contains no url or invalid/missing raw data`);
  }
  /**
   * Convert an ArrayBuffer to a UTF-8 string
   *
   * @param {ArrayBuffer} input binary input
   * @returns {string} input in string form
   */
  arbToStr(e) {
    return new TextDecoder("utf-8").decode(new Uint8Array(e));
  }
}
const fn = /* @__PURE__ */ JSON.parse("[4326,4269,4258,31467,31468,31469,2166,2167,2168,2036,2044,2045,2065,2081,2082,2083,2085,2086,2091,2092,2093,2096,2097,2098,2105,2106,2107,2108,2109,2110,2111,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2169,2170,2171,2172,2173,2174,2175,2176,2177,2178,2179,2180,2193,2199,2200,2206,2207,2208,2209,2210,2211,2212,2319,2320,2321,2322,2323,2324,2325,2326,2327,2328,2329,2330,2331,2332,2333,2334,2335,2336,2337,2338,2339,2340,2341,2342,2343,2344,2345,2346,2347,2348,2349,2350,2351,2352,2353,2354,2355,2356,2357,2358,2359,2360,2361,2362,2363,2364,2365,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2384,2385,2386,2387,2388,2389,2390,2391,2392,2393,2394,2395,2396,2397,2398,2399,2400,2401,2402,2403,2404,2405,2406,2407,2408,2409,2410,2411,2412,2413,2414,2415,2416,2417,2418,2419,2420,2421,2422,2423,2424,2425,2426,2427,2428,2429,2430,2431,2432,2433,2434,2435,2436,2437,2438,2439,2440,2441,2442,2443,2444,2445,2446,2447,2448,2449,2450,2451,2452,2453,2454,2455,2456,2457,2458,2459,2460,2461,2462,2463,2464,2465,2466,2467,2468,2469,2470,2471,2472,2473,2474,2475,2476,2477,2478,2479,2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,2490,2491,2492,2493,2494,2495,2496,2497,2498,2499,2500,2501,2502,2503,2504,2505,2506,2507,2508,2509,2510,2511,2512,2513,2514,2515,2516,2517,2518,2519,2520,2521,2522,2523,2524,2525,2526,2527,2528,2529,2530,2531,2532,2533,2534,2535,2536,2537,2538,2539,2540,2541,2542,2543,2544,2545,2546,2547,2548,2549,2551,2552,2553,2554,2555,2556,2557,2558,2559,2560,2561,2562,2563,2564,2565,2566,2567,2568,2569,2570,2571,2572,2573,2574,2575,2576,2577,2578,2579,2580,2581,2582,2583,2584,2585,2586,2587,2588,2589,2590,2591,2592,2593,2594,2595,2596,2597,2598,2599,2600,2601,2602,2603,2604,2605,2606,2607,2608,2609,2610,2611,2612,2613,2614,2615,2616,2617,2618,2619,2620,2621,2622,2623,2624,2625,2626,2627,2628,2629,2630,2631,2632,2633,2634,2635,2636,2637,2638,2639,2640,2641,2642,2643,2644,2645,2646,2647,2648,2649,2650,2651,2652,2653,2654,2655,2656,2657,2658,2659,2660,2661,2662,2663,2664,2665,2666,2667,2668,2669,2670,2671,2672,2673,2674,2675,2676,2677,2678,2679,2680,2681,2682,2683,2684,2685,2686,2687,2688,2689,2690,2691,2692,2693,2694,2695,2696,2697,2698,2699,2700,2701,2702,2703,2704,2705,2706,2707,2708,2709,2710,2711,2712,2713,2714,2715,2716,2717,2718,2719,2720,2721,2722,2723,2724,2725,2726,2727,2728,2729,2730,2731,2732,2733,2734,2735,2738,2739,2740,2741,2742,2743,2744,2745,2746,2747,2748,2749,2750,2751,2752,2753,2754,2755,2756,2757,2758,2935,2936,2937,2938,2939,2940,2941,2953,2963,3006,3007,3008,3009,3010,3011,3012,3013,3014,3015,3016,3017,3018,3019,3020,3021,3022,3023,3024,3025,3026,3027,3028,3029,3030,3034,3035,3038,3039,3040,3041,3042,3043,3044,3045,3046,3047,3048,3049,3050,3051,3058,3059,3068,3114,3115,3116,3117,3118,3120,3126,3127,3128,3129,3130,3131,3132,3133,3134,3135,3136,3137,3138,3139,3140,3146,3147,3150,3151,3152,3300,3301,3328,3329,3330,3331,3332,3333,3334,3335,3346,3350,3351,3352,3366,3386,3387,3388,3389,3390,3396,3397,3398,3399,3407,3414,3416,3764,3788,3789,3790,3791,3793,3795,3796,3819,3821,3823,3824,3833,3834,3835,3836,3837,3838,3839,3840,3841,3842,3843,3844,3845,3846,3847,3848,3849,3850,3851,3852,3854,3873,3874,3875,3876,3877,3878,3879,3880,3881,3882,3883,3884,3885,3888,3889,3906,3907,3908,3909,3910,3911,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016,4017,4018,4019,4020,4021,4022,4023,4024,4025,4026,4027,4028,4029,4030,4031,4032,4033,4034,4035,4036,4037,4038,4040,4041,4042,4043,4044,4045,4046,4047,4052,4053,4054,4055,4074,4075,4080,4081,4120,4121,4122,4123,4124,4125,4126,4127,4128,4129,4130,4131,4132,4133,4134,4135,4136,4137,4138,4139,4140,4141,4142,4143,4144,4145,4146,4147,4148,4149,4150,4151,4152,4153,4154,4155,4156,4157,4158,4159,4160,4161,4162,4163,4164,4165,4166,4167,4168,4169,4170,4171,4172,4173,4174,4175,4176,4178,4179,4180,4181,4182,4183,4184,4185,4188,4189,4190,4191,4192,4193,4194,4195,4196,4197,4198,4199,4200,4201,4202,4203,4204,4205,4206,4207,4208,4209,4210,4211,4212,4213,4214,4215,4216,4218,4219,4220,4221,4222,4223,4224,4225,4226,4227,4228,4229,4230,4231,4232,4233,4234,4235,4236,4237,4238,4239,4240,4241,4242,4243,4244,4245,4246,4247,4248,4249,4250,4251,4252,4253,4254,4255,4256,4257,4259,4260,4261,4262,4263,4264,4265,4266,4267,4268,4270,4271,4272,4273,4274,4275,4276,4277,4278,4279,4280,4281,4282,4283,4284,4285,4286,4287,4288,4289,4291,4292,4293,4294,4295,4296,4297,4298,4299,4300,4301,4302,4303,4304,4306,4307,4308,4309,4310,4311,4312,4313,4314,4315,4316,4317,4318,4319,4322,4324,4327,4329,4339,4341,4343,4345,4347,4349,4351,4353,4355,4357,4359,4361,4363,4365,4367,4369,4371,4373,4375,4377,4379,4381,4383,4386,4388,4417,4434,4463,4466,4469,4470,4472,4475,4480,4482,4483,4490,4491,4492,4493,4494,4495,4496,4497,4498,4499,4500,4501,4502,4503,4504,4505,4506,4507,4508,4509,4510,4511,4512,4513,4514,4515,4516,4517,4518,4519,4520,4521,4522,4523,4524,4525,4526,4527,4528,4529,4530,4531,4532,4533,4534,4535,4536,4537,4538,4539,4540,4541,4542,4543,4544,4545,4546,4547,4548,4549,4550,4551,4552,4553,4554,4555,4557,4558,4568,4569,4570,4571,4572,4573,4574,4575,4576,4577,4578,4579,4580,4581,4582,4583,4584,4585,4586,4587,4588,4589,4600,4601,4602,4603,4604,4605,4606,4607,4608,4609,4610,4611,4612,4613,4614,4615,4616,4617,4618,4619,4620,4621,4622,4623,4624,4625,4626,4627,4628,4629,4630,4631,4632,4633,4634,4635,4636,4637,4638,4639,4640,4641,4642,4643,4644,4645,4646,4652,4653,4654,4655,4656,4657,4658,4659,4660,4661,4662,4663,4664,4665,4666,4667,4668,4669,4670,4671,4672,4673,4674,4675,4676,4677,4678,4679,4680,4681,4682,4683,4684,4685,4686,4687,4688,4689,4690,4691,4692,4693,4694,4695,4696,4697,4698,4699,4700,4701,4702,4703,4704,4705,4706,4707,4708,4709,4710,4711,4712,4713,4714,4715,4716,4717,4718,4719,4720,4721,4722,4723,4724,4725,4726,4727,4728,4729,4730,4731,4732,4733,4734,4735,4736,4737,4738,4739,4740,4741,4742,4743,4744,4745,4746,4747,4748,4749,4750,4751,4752,4753,4754,4755,4756,4757,4758,4759,4760,4761,4762,4763,4764,4765,4766,4767,4768,4769,4770,4771,4772,4773,4774,4775,4776,4777,4778,4779,4780,4781,4782,4783,4784,4785,4786,4787,4788,4789,4790,4791,4792,4793,4794,4795,4796,4797,4798,4799,4800,4801,4802,4803,4804,4805,4806,4807,4808,4809,4810,4811,4812,4813,4814,4815,4816,4817,4818,4819,4820,4821,4822,4823,4824,4839,4855,4856,4857,4858,4859,4860,4861,4862,4863,4864,4865,4866,4867,4868,4869,4870,4871,4872,4873,4874,4875,4876,4877,4878,4879,4880,4883,4885,4887,4889,4891,4893,4895,4898,4900,4901,4902,4903,4904,4907,4909,4921,4923,4925,4927,4929,4931,4933,4935,4937,4939,4941,4943,4945,4947,4949,4951,4953,4955,4957,4959,4961,4963,4965,4967,4969,4971,4973,4975,4977,4979,4981,4983,4985,4987,4989,4991,4993,4995,4997,4999,5012,5013,5017,5048,5105,5106,5107,5108,5109,5110,5111,5112,5113,5114,5115,5116,5117,5118,5119,5120,5121,5122,5123,5124,5125,5126,5127,5128,5129,5130,5132,5167,5168,5169,5170,5171,5172,5173,5174,5175,5176,5177,5178,5179,5180,5181,5182,5183,5184,5185,5186,5187,5188,5224,5228,5229,5233,5245,5246,5251,5252,5253,5254,5255,5256,5257,5258,5259,5263,5264,5269,5270,5271,5272,5273,5274,5275,5801,5802,5803,5804,5808,5809,5810,5811,5812,5813,5814,5815,5816,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019,20020,20021,20022,20023,20024,20025,20026,20027,20028,20029,20030,20031,20032,20064,20065,20066,20067,20068,20069,20070,20071,20072,20073,20074,20075,20076,20077,20078,20079,20080,20081,20082,20083,20084,20085,20086,20087,20088,20089,20090,20091,20092,21413,21414,21415,21416,21417,21418,21419,21420,21421,21422,21423,21453,21454,21455,21456,21457,21458,21459,21460,21461,21462,21463,21473,21474,21475,21476,21477,21478,21479,21480,21481,21482,21483,21896,21897,21898,21899,22171,22172,22173,22174,22175,22176,22177,22181,22182,22183,22184,22185,22186,22187,22191,22192,22193,22194,22195,22196,22197,25884,27205,27206,27207,27208,27209,27210,27211,27212,27213,27214,27215,27216,27217,27218,27219,27220,27221,27222,27223,27224,27225,27226,27227,27228,27229,27230,27231,27232,27391,27392,27393,27394,27395,27396,27397,27398,27492,28402,28403,28404,28405,28406,28407,28408,28409,28410,28411,28412,28413,28414,28415,28416,28417,28418,28419,28420,28421,28422,28423,28424,28425,28426,28427,28428,28429,28430,28431,28432,28462,28463,28464,28465,28466,28467,28468,28469,28470,28471,28472,28473,28474,28475,28476,28477,28478,28479,28480,28481,28482,28483,28484,28485,28486,28487,28488,28489,28490,28491,28492,29701,29702,30161,30162,30163,30164,30165,30166,30167,30168,30169,30170,30171,30172,30173,30174,30175,30176,30177,30178,30179,30800,31251,31252,31253,31254,31255,31256,31257,31258,31259,31275,31276,31277,31278,31279,31281,31282,31283,31284,31285,31286,31287,31288,31289,31290,31466,31700]");
class mn extends J {
  /**
   * Will load a WFS 3 feature set and return as GeoJSON object.
   * Data will be downloaded in batches (based on limit parameter) to
   * avoid massive requests that may timeout.
   *
   * @param {string} url the current url to the wfs service. Should be a /collections/id/items/ endpoint with optional params after the question operator
   * @param {number} [totalCount=-1] the total number of features available on that service. If not provided, the service will be interrogated for the count.
   * @param {number} [offset=0] the feature index to start the querying from. default 0
   * @param {number} [limit=1000] the limit of how many results we want returned per server request. default 1000
   * @param {WFSData} [wfsData={
   *                 type: 'FeatureCollection',
   *                 features: []
   *             }] the resulting GeoJSON being populated as we receive layer information. Undefined for initial request.
   * @param {boolean} [xyInAttribs=false] true if point co-ords should be copied to attribute values
   * @returns {Promise<any>} a promise resolving with the layer GeoJSON
   * @memberof WFSServiceSource
   */
  async loadWfsData(e, t = -1, i = 0, r = 1e3, a = {
    type: "FeatureCollection",
    features: []
  }, o = !1) {
    let l = {
      offset: i.toString(),
      limit: r.toString()
    };
    t === -1 && (l = {
      resulttype: "hits"
    });
    const c = new Rt(e).updateQuery(l), [u, p] = await Ae(bt.get(c));
    if (!p)
      return console.error(`WFS data failed to load for ${e}`, u), Promise.reject(u);
    const d = p.data;
    if (t === -1)
      return t = p.data.numberMatched, this.loadWfsData(e, t, i, r, a, o);
    if (a.features = a.features.concat(d.features), d.features.length < t - i) {
      const g = Math.min(r, t - i - d.features.length);
      return this.loadWfsData(
        c,
        t,
        d.features.length + i,
        g,
        a,
        o
      );
    } else
      return o && a.features.length > 0 && a.features[0].geometry.type === z.POINT && a.features.forEach((g) => {
        const h = g.geometry.coordinates;
        g.properties.rvInternalCoordX = h[0], g.properties.rvInternalCoordY = h[1];
      }), a;
  }
  /**
   * Provides list of spatial references that are encoded in [y,x] format.
   *
   * @returns array of wkids that have reversed axis
   */
  reversedAxisWKIDs() {
    return fn;
  }
  // NOTE this function is currently used by the wizard only in RAMP2
  /**
   * Fetch layer data from a WMS endpoint.  This method will execute a WMS GetCapabilities
   * request against the specified URL, it requests WMS 1.3 and it is capable of parsing
   * 1.3 or 1.1.1 responses.  It returns a promise which will resolve with basic layer
   * metadata and querying information.
   *
   * metadata response format:
   *   { queryTypes: [mimeType(str)],
   *     layers: [
   *       {name(str), desc(str), queryable(bool), layers:[recursive] }
   *     ] }
   *
   * @param {string} wmsEndpoint a URL pointing to a WMS server (it must not include a query string)
   * @return {Promise} a promise resolving with a metadata object (as specified above)
   */
  parseCapabilities(e) {
    const t = () => {
      let o = e;
      if (e.indexOf("?") === -1)
        o += "?service=WMS&request=GetCapabilities";
      else {
        const l = new Rt(e.toUpperCase());
        "SERVICE" in l.queryMap || (o += "&service=WMS"), "REQUEST" in l.queryMap || (o += "&request=GetCapabilities");
      }
      return Ve(o, {
        responseType: "xml"
      }).then((l) => l.data);
    }, i = new Promise((o) => {
      t().then((l) => o(l)).catch(() => {
        console.error("Get capabilities failed; trying the second time;"), o(t());
      });
    }), r = (o) => {
      let l = o.Layer;
      return l ? (Array.isArray(l) || (l = [l]), l.map((n) => {
        const c = n.Name, u = n.Title;
        let p = n.Style;
        const d = [], g = {};
        return p && (Array.isArray(p) || (p = [p]), p.forEach((h) => {
          const y = h.Name;
          if (d.push(y), h.LegendURL) {
            const b = h.LegendURL.OnlineResource["@_xlink:href"];
            g[y] = b.replaceAll("&amp;", "&");
          }
        })), {
          // typecast to string as number IDs need to be stringified in the wms sublayer config
          // TODO: What if this ends up being null? Does layer explode?
          // If yes, consider adding a warning or notification of some sort.
          name: c?.toString() ?? null,
          title: u,
          queryable: n["@_queryable"] === "1",
          layers: r(n),
          allStyles: d,
          styleToURL: g,
          currentStyle: d[0]
        };
      })) : [];
    }, a = (o) => {
      let l = o.Format;
      return Array.isArray(l) || (l = [l]), l;
    };
    return import("fast-xml-parser").then(({ XMLParser: o }) => i.then((l) => {
      if (!l)
        return [];
      const n = new XMLSerializer().serializeToString(l), c = {
        ignoreAttributes: !1
        // check for tag attributes
      }, u = new o(c).parse(n);
      if ("ServiceExceptionReport" in u)
        return console.error(u.ServiceExceptionReport.ServiceException), [];
      const p = u.WMS_Capabilities.Capability;
      return {
        layers: r(p),
        queryTypes: a(p.Request.GetFeatureInfo)
      };
    }));
  }
}
class vt {
  /**
   * Generates a reactive Identify Item that sources its content via pre-existing content.
   * Contains the information for a specific result and appropriate methods.
   *
   * @param {IdentifyResultFormat} format the result format of the item
   * @param {any} payload the data for the item
   * @returns {IdentifyItem} a loaded identify item
   */
  static makeRawItem(e, t) {
    const i = Promise.resolve();
    return we({
      format: e,
      data: t,
      started: !0,
      loaded: !0,
      loading: i,
      load() {
        return i;
      }
    });
  }
  /**
   * Generates a reactive Identify Item that sources its content via an object id.
   * Contains the information for a specific result and mechanisms to assist in loading the data.
   *
   * @param {number} oid objectId for the item
   * @param {LayerInstance} layer the logical layer hosting the item
   * @returns {IdentifyItem} an unloaded identify item
   */
  static makeOidItem(e, t) {
    const i = new H(), r = {
      format: nt.ESRI,
      data: void 0,
      started: !1,
      loaded: !1,
      loading: i.getPromise(),
      async load() {
        if (!this.started) {
          this.started = !0;
          const a = await t.getGraphic(e, {
            getAttribs: !0
          });
          this.data = a.attributes, this.loaded = !0, i.resolveMe();
        }
        return i.getPromise();
      }
    };
    return we(r);
  }
}
class yn extends J {
  files;
  ogc;
  constructor(e) {
    super(e), this.files = new hn(e), this.ogc = new mn(e);
  }
  /**
   * Will generate a RAMP Layer based on the supplied config object.
   *
   * @param {Object} config a valid layer configuration object
   * @returns {LayerInstance} Layer in uninitialized load state
   */
  createLayer(e) {
    let t;
    switch (e.layerType) {
      case x.FEATURE:
        t = In;
        break;
      case x.MAPIMAGE:
        t = _n;
        break;
      case x.GRAPHIC:
        t = vn;
        break;
      case x.TILE:
        t = $n;
        break;
      case x.WFS:
        t = On;
        break;
      case x.DATATABLE:
        t = Mn;
        break;
      case x.WMS:
        t = Cn;
        break;
      case x.GEOJSON:
        t = bn;
        break;
      case x.GEOJSONZIPPED:
        t = En;
        break;
      case x.FLATGEOBUFZIPPED:
        t = Sn;
        break;
      case x.CSV:
        t = An;
        break;
      case x.DATAJSON:
        t = kn;
        break;
      case x.IMAGERY:
        t = Rn;
        break;
      case x.SHAPEFILE:
        t = wn;
        break;
      case x.FLATGEOBUF:
        t = xn;
        break;
      case x.OSM:
        t = Ln;
        break;
      default:
        throw new Error("Unsupported Layer Type " + e.layerType);
    }
    return new t(e, this.$iApi);
  }
  /**
   * Returns a standardized sublayer id for a parent id and sublayer index
   *
   * @param {string} parentLayerId layer id of the layer hosting the sublayer
   * @param {number} sublayerIndex index of the sublayer
   * @returns {string} standardized sublayer id
   */
  sublayerId(e, t) {
    return `${e}-${t}`;
  }
  /**
   * Access a registered layer object.
   *
   * @param {string} layerId layer id or uid of the layer
   * @returns {LayerInstance | undefined} The layer instance with the given id. Returns undefined if layer is not found.
   */
  getLayer(e) {
    return _e(this.$vApp.$pinia).getLayerByAny(e);
  }
  /**
   * Access a registered sublayer object.
   *
   * @param {string} layerId layer id of the layer
   * @param {number} index index of the sublayer
   * @returns {LayerInstance | undefined} The sublayer instance matching the parameters. Returns undefined if sublayer is not found.
   */
  getSublayer(e, t) {
    const i = _e(this.$vApp.$pinia).getLayerById(e);
    if (i && i.supportsSublayers && t < i.sublayers.length)
      return i.sublayers[t];
  }
  /**
   * Waits for a layer to register, then returns it.
   *
   * @param {string} layerId layer id or uid of the layer
   * @param {boolean} waitForView determines whether we should wait for the layer's `esriView` to be defined
   * @returns {Promise<LayerInstance>} The layer instance with the given id.
   */
  async awaitLayer(e, t = !1) {
    let i = this.getLayer(e);
    if (!i) {
      const r = new H();
      let a = 0;
      const o = 300, l = setInterval(() => {
        a += o;
        const n = this.getLayer(e);
        if (n)
          clearInterval(l), r.resolveMe(n);
        else if (a > 8e3) {
          clearInterval(l);
          const c = setInterval(() => {
            const u = this.getLayer(e);
            u && (clearInterval(c), r.resolveMe(u));
          }, 1500);
        }
      }, o);
      i = await r.getPromise();
    }
    return t && await i.viewPromise(), i;
  }
  /**
   * Waits for a sublayer to register, then returns it.
   *
   * @param {string} layerId layer id of the layer.
   * @param {number} index index of the sublayer
   * @returns {Promise<LayerInstance>} The sublayer instance.
   */
  async awaitSublayer(e, t) {
    return this.awaitLayer(this.sublayerId(e, t));
  }
  /**
   * Get the current map stack position of a given map layer
   *
   * @param {string} layerId layer id or uid of the layer
   * @returns {number | undefined} The layer position in the map stack. Undefined if a data layer or layer not found
   */
  getLayerPosition(e) {
    const t = this.getLayer(e);
    if (t && t.mapLayer) {
      const i = t.isSublayer ? t.parentLayer.id : t.id, r = this.layerOrderIds().findIndex((a) => a === i);
      return r === -1 ? void 0 : r;
    } else
      return;
  }
  /**
   * Return the Layer IDs of all registered map layers in the order they occupy,
   * or will occupy, the map stack.
   * @returns {Array<string>} layer ids, from bottom to top
   */
  layerOrderIds() {
    return _e(this.$vApp.$pinia).mapOrder.slice(0) || [];
  }
  /**
   * Return all registered layers.
   * @returns {Array<LayerInstance>} all registered layers
   */
  allLayers() {
    return _e(this.$vApp.$pinia).layers || [];
  }
  /**
   * Returns all layers that have initiated successfully and that have not errored.
   * @returns {Array<LayerInstance>} all layers that have initiated and not errored
   */
  allActiveLayers() {
    return this.allLayers().filter(
      (e) => e.layerState !== q.ERROR && e.initiationState === N.INITIATED
    );
  }
  /**
   * Returns all map-based layers currently on the map.
   * Result can be ordered in map stack order. Unordered is more performant.
   *
   * @param {boolean} [inMapOrder=true] if result array should be sorted by map order.
   * @returns {Array<LayerInstance>} all layers on the map
   */
  allLayersOnMap(e = !0) {
    const t = this.allLayers().filter((i) => i.mapLayer && i.initiationState === N.INITIATED);
    if (e) {
      const i = this.layerOrderIds(), r = new Map(i.map((a, o) => [a, o]));
      t.sort((a, o) => r.get(a.id) - r.get(o.id));
    }
    return t;
  }
  /**
   * Returns all initialized data-based layers currently registered with the map.
   * @returns {Array<LayerInstance>} all loaded data layers
   */
  allDataLayers() {
    return this.allLayers().filter((e) => !e.mapLayer && e.initiationState === N.INITIATED);
  }
  /**
   * Return all layers in an error state.
   * @returns {Array<LayerInstance>} all errored layers
   */
  allErrorLayers() {
    return this.allLayers().filter((e) => e.layerState === q.ERROR);
  }
  /**
   * Returns all layers currently undergoing initiation process.
   * @returns {Array<LayerInstance>} all initiating layers
   */
  allInitiatingLayers() {
    return this.allLayers().filter((e) => e.initiationState === N.INITIATING);
  }
  /**
   * Get controls and disabled controls configuration of the layer with the given id.
   *
   * @param {string} layerId layer id or uid of the layer
   * @returns {Object | undefined} The layer's controls and disabled controls configuration. Returns undefined if layer is not found.
   */
  getLayerControls(e) {
    const t = this.getLayer(e);
    if (!t)
      return;
    const i = t.config.controls?.slice() ?? [
      j.BoundaryZoom,
      j.Datatable,
      j.Identify,
      j.Metadata,
      j.Opacity,
      j.Refresh,
      j.Reload,
      j.Remove,
      j.Settings,
      j.Symbology,
      j.Visibility
    ], r = [];
    return t.supportsFeatures || r.push(j.Datatable), t.extent === void 0 && r.push(j.BoundaryZoom), (t.config?.metadata || (t.isSublayer ? t.parentLayer?.config?.metadata : {}) || {}).url || r.push(j.Metadata), !t.mapLayer && !t.config.controls?.includes(j.Settings) && r.push(j.Settings), r.forEach((o) => {
      const l = i?.indexOf(o) ?? -1;
      l !== -1 && i?.splice(l, 1);
    }), {
      controls: i,
      disabledControls: t.config.disabledControls ?? []
    };
  }
  /**
   * Will fetch metadata about a layer service endpoint on an ArcGIS server
   *
   * @param url the server url of the layer
   * @returns {Promise} resolves with relevant information about the layer service
   */
  async loadLayerMetadata(e) {
    if (!e.trim())
      throw new Error("url missing on layer server metadata request.");
    const [t, i] = await Ae(Ve(e, { query: { f: "json" } }));
    if (!i)
      throw console.error(`Service metadata load error: ${e}`, t), new Error(`Service metadata load error: ${e}`);
    if (!i.data)
      throw console.error(`Service metadata load error: ${e}`), new Error(`Service metadata load error: ${e}`);
    const r = i.data, a = {
      geometryType: T.NONE,
      minScale: 0,
      maxScale: 0,
      canModifyLayer: !0,
      extent: void 0,
      defaultVisibility: !0,
      fields: [],
      displayField: "",
      objectIdField: "",
      renderer: void 0,
      currentVersion: 0,
      name: "",
      dataFormat: te.UNKNOWN,
      mapLayer: !0
    };
    if (a.name = r.name || "", a.currentVersion = r.currentVersion || -1, a.minScale = r.effectiveMinScale || r.minScale || 0, a.maxScale = r.effectiveMaxScale || r.maxScale || 0, a.extent = r.extent ? F.fromArcServer(r.extent, "layer_extent") : void 0, a.defaultVisibility = r.defaultVisibility ?? !0, a.canModifyLayer = r.canModifyLayer ?? !0, r.type === "Feature Layer" || r.type === "Table") {
      if (a.dataFormat = te.ESRI_FEATURE, a.displayField = r.displayField || "", Array.isArray(r.fields)) {
        const o = await Promise.all(
          r.fields.map((n) => C.FieldFromJson(n))
        );
        a.fields = o.map((n) => ({
          name: n.name,
          alias: n.alias,
          type: n.type,
          length: n.length
        })), o.every((n) => n.type === "oid" ? (a.objectIdField = n.name, !1) : !0) && (a.objectIdField = r.objectIdField || (console.error(`Encountered service with no OID defined: ${e}`), "")), r.type === "Feature Layer" ? (a.geometryType = this.$iApi.geo.geom.serverGeomTypeToRampGeomType(r.geometryType), r.drawingInfo?.renderer && (a.renderer = await C.RendererFromJson(r.drawingInfo.renderer)), r.sourceSpatialReference && (a.sourceSR = _.fromConfig(r.sourceSpatialReference))) : a.mapLayer = !1;
      }
    } else
      a.dataFormat = te.ESRI_RASTER;
    return a;
  }
  /**
   * Will fetch the feature count for an ArcGIS Server layer
   *
   * @param serviceUrl url of the layer to count
   * @param permanentFilter optional filter to apply to the count
   * @returns {Promise} that resolves with the feature count, -1 if error
   */
  async loadFeatureCount(e, t = "") {
    if (!e)
      return console.error("A layer without a url attempted to run the server based feature count routine."), 0;
    const i = {
      query: {
        f: "json",
        where: t || "1=1",
        // apparently the 1=1 is required to make the count call work on entire dataset
        returnCountOnly: !0,
        returnGeometry: !1
      }
    }, [r, a] = await Ae(Ve(`${e}/query`, i));
    return a ? a.data ? Number.isInteger(a.data.count) ? a.data.count : (console.error(`Funny result (${a.data.count}) during feature count: ${e}`), 0) : (console.error(`Unable to load feature count: ${e}`), 0) : (console.error(`Feature count request unsuccessful: ${e}`, r), 0);
  }
}
class li extends J {
  config = {};
  /**
   * ID of this layer. Also known as the layerId.
   *
   * @type {string}
   * @memberof LayerInstance
   */
  id;
  /**
   * Unique identifier for this layer. Randomly generated at runtime.
   */
  uid;
  /**
   * The name of the layer.
   */
  name;
  /**
   * State of the actual layer on the map, such as loading, loaded, error'd.
   */
  layerState;
  /**
   * State of the initiation / termination process of the layer
   */
  initiationState;
  /**
   * State of drawing / refreshing data for a layer
   */
  drawState;
  /**
   * Index of the layer. Aligns to index of arcgis server source, or defaults to 0 on other layers.
   * Map Image Layers and layers that do not support attributes have a value of -1
   */
  layerIdx;
  /**
   * Type of layer this is (describes the overall layer)
   */
  layerType;
  /**
   * How the layer is instantiated in the map stack
   */
  layerFormat;
  /**
   * The type of spatial data used to generate layer content
   */
  dataFormat;
  /**
   * If the layer type can support an identify request
   */
  supportsIdentify;
  /**
   * If the layer type can support Feature type requests and operations
   */
  supportsFeatures;
  /**
   * If the layer type can exist on the map
   */
  mapLayer;
  /**
   * Feature count
   */
  featureCount;
  /**
   * Array of field definitions about the given layer's fields. Attribute-less layers will have empty arrays.
   */
  fields;
  /**
   * Comma delimited string of field names (or '*' for all). Useful for numerous ESRI api calls. Attribute-less layers will return empty string;
   */
  fieldList;
  /**
   * Field name that contains value considered the name of a feature. Not applicable for attribute-less layers. Ignored if nameArcade is set.
   */
  nameField;
  /**
   * Arcade formula to derive name of feature. Empty string indicates no formula in use. Not applicable for attribute-less layers.
   */
  get nameArcade() {
    return "";
  }
  /**
   * Sets a new arcade formula for the name value.
   *
   * @param formula
   * @returns Promise that resolves when the arcade executor has been generated.
   */
  async setNameArcade(e) {
  }
  /**
   * Field name that contains value considered the maptip of a feature. Not applicable for attribute-less layers.
   * Ignored if tooltipArcade is set. nameValue is used if neither are set.
   */
  tooltipField;
  /**
   * Arcade formula to derive maptip of the feature. Empty string indicates no formula in use. Not applicable for attribute-less layers.
   */
  get tooltipArcade() {
    return "";
  }
  /**
   * Sets a new arcade formula for the maptip value.
   *
   * @param formula
   * @returns Promise that resolves when the arcade executor has been generated.
   */
  async setTooltipArcade(e) {
  }
  /**
   * Field name that contains the object ID of a feature. Not applicable for attribute-less layers.
   */
  oidField;
  /**
   * Object that contains values for the expected draw/response time.
   */
  expectedTime;
  /**
   * Timecode value for the start of most recent cancel request.
   * Used to avoid races between async things returning after layers cancel or reload.
   */
  lastCancel;
  /**
   * If the layer has Sublayers
   */
  supportsSublayers;
  /**
   * If the layer is a Sublayer
   */
  isSublayer;
  /**
   * Tracks if layer is removed from map. Is false during the period "before" the layer gets added to map.
   */
  isRemoved;
  /**
   * If the layer was sourced from a file or a WFS source (which disconnects after load).
   */
  isFile;
  /**
   * If the layer is non-interactive and only displays content on the map
   */
  isCosmetic;
  /**
   * If the layer is being managed by a RAMP functionality
   */
  isSystem;
  /**
   * If the layer was added by user interaction during the session
   */
  userAdded;
  /**
   * If the layer is set to participate in identify requests
   */
  identify;
  /**
   * The type of logic used to identify items on the layer
   */
  identifyMode;
  /**
   * If the layer should show hovertips on the map
   */
  hovertips;
  /**
   * The geometry type of the layer.
   */
  geomType;
  /**
   * Legend symbols of the layer
   */
  legend;
  /**
   *  The internal ESRI API layer
   */
  esriLayer;
  /**
   *  The internal ESRI API sublayer. Valid only by sublayers
   */
  esriSubLayer;
  /**
   * The internal ESRI API layer view
   */
  esriView;
  /**
   * The extent of the layer on the map
   */
  extent;
  // layer extent
  /**
   * The spatial reference of the source of geometry (e.g. map server). Undefined for non-ArcServer and non-spatial layers.
   */
  sourceSR;
  /**
   * Indicates if the layer can be modified with filters.
   */
  canModifyLayer;
  /**
   * Indicates if the layer can be reloaded.
   */
  canReload;
  /**
   * url of the service
   */
  url;
  _parentLayer;
  _sublayers;
  /**
   * Creates an instance of LayerInstance.
   *
   * @param {string} id
   * @param {InstanceAPI} iApi
   * @memberof FixtureInstance
   */
  constructor(e, t) {
    super(t), this.config = e, this.id = "", this.uid = "", this.name = "error", this.layerState = q.NEW, this.drawState = ue.NOT_LOADED, this.initiationState = N.NEW, this.layerIdx = -1, this.layerFormat = me.UNKNOWN, this.layerType = x.UNKNOWN, this.dataFormat = te.UNKNOWN, this.supportsIdentify = !1, this.identifyMode = X.NONE, this.supportsFeatures = !1, this.mapLayer = !0, this.featureCount = 0, this.fields = [], this.fieldList = "", this.nameField = "", this.tooltipField = "", this.oidField = "", this.supportsSublayers = !1, this.isSublayer = !1, this.isRemoved = !1, this.isFile = !1, this.isCosmetic = !1, this.isSystem = !1, this.userAdded = !1, this.identify = !1, this.hovertips = !1, this.geomType = T.UNKNOWN, this.legend = [], this._sublayers = [], this.expectedTime = { draw: 0, load: 0, fail: 0 }, this.lastCancel = 0, this.canModifyLayer = !0, this.canReload = !0, this.url = "";
  }
  /**
   * Sets up the internal layer object (ESRI) and initiates the loading process.
   * The promise returned resolves when the object exists (i.e. .esriLayer is populated).
   * This means the layer can be added to the map.
   */
  async initiate() {
    return Promise.resolve();
  }
  /**
   * Resets the layer class to the state it was in "pre-initialize". Implementers can decide if they want
   * to retain any state (e.g. UIDs/layerTree would be a good idea).
   * Also an appropriate function to remove any event listeners/triggers.
   * This would be called in situations like a layer getting deleted, or in a layer reload (initialize would be called again afterwards).
   * Note this does not remove any layers from the map stack, that must be done by the caller.
   */
  async terminate() {
    return Promise.resolve();
  }
  /**
   * Attempts to reload the internal layer object (ESRI).
   * Effectively doing a terminate then initiate, and removing/re-adding layer to the map.
   */
  async reload() {
    return Promise.resolve();
  }
  /**
   * Cancels an in-progress initialize or load of the layer and places it in an Error state.
   * Has no effect on a layer that is loaded, has been terminated, or never initiazed.
   */
  cancelLoad() {
  }
  /**
   * If layer is map bound, and has an esri layer in the esri map, remove it from esri map.
   * Typically should only be called by RAMP internals.
   */
  removeEsriLayer() {
  }
  /**
   * Provides a promise that resolves when the layer has finished loading. If accessing layer properties that
   * depend on the layer being loaded, wait on this promise before accessing them.
   *
   * @method loadPromise
   * @returns {Promise} resolves when the layer has finished loading
   */
  loadPromise() {
    return Promise.resolve();
  }
  /**
   * Provides a promise that resolves when the layer view has been created.
   *
   * @method viewPromise
   * @returns {Promise} resolves when the layer view is created
   */
  viewPromise() {
    return Promise.resolve();
  }
  /**
   * Indicates if the layer is in a state that is makes sense to interact with.
   * I.e. False if layer has not done it's initial load, or is in error state.
   * Acts as a handy shortcut to inspecting the layerState.
   *
   * @method isLoaded
   * @returns {Boolean} true if layer is loaded
   */
  get isLoaded() {
    return !1;
  }
  /**
   * Indicates if the Esri map layer or data layer equivalent exists.
   */
  get layerExists() {
    return !1;
  }
  /**
   * Gets the fields whose string values should be trimmed.
   * @returns {Array<string>} the field names.
   */
  getFieldsToTrim() {
    return [];
  }
  /**
   * Provides a tree structure describing the layer and any sublayers,
   * including uid values. Should only be called after loadPromise resolves.
   *
   * @method getLayerTree
   * @returns {TreeNode} the root of the layer tree
   */
  getLayerTree() {
    return new Lt(0, "Fake tree", "getLayerTree() was not implemented in layer");
  }
  /**
   * Provides the spatial reference of the layer
   *
   * @returns {SpatialReference} the layer spatial reference in RAMP API format
   */
  getSR() {
    return _.latLongSR();
  }
  /**
   * Returns the visibility of the layer.
   *
   * @returns {Boolean} visibility of the layer
   */
  get visibility() {
    return !1;
  }
  /**
   * Applies visibility to layer.
   *
   * @param {Boolean} value the new visibility setting
   */
  set visibility(e) {
  }
  /**
   * Returns the opacity of the layer.
   *
   * @returns {Boolean} opacity of the layer
   */
  get opacity() {
    return 0;
  }
  /**
   * Applies opacity to layer.
   *
   * @param {Boolean} value the new opacity setting
   */
  set opacity(e) {
  }
  /**
   * Returns the scale set (min and max visible scale) of the layer.
   *
   * @returns {ScaleSet} scale set of the layer
   */
  get scaleSet() {
    return new qi();
  }
  /**
   * Set the scale set (min and max visible scale) of the layer.
   *
   * @param {ScaleSet} scaleSet the new scale set of the layer
   */
  set scaleSet(e) {
  }
  /**
   * Indicates if the layer is not in a visible scale range.
   *
   * @function isOffscale
   * @param {Integer} [testScale] optional scale to test against. if not provided, current map scale is used.
   * @returns {Boolean} true if the layer is outside of a visible scale range
   */
  isOffscale(e = void 0) {
    return !1;
  }
  /**
   * Cause the map to zoom to a scale level where the layer is visible.
   *
   * @returns {Promise} resolves when map has finished zooming
   */
  zoomToVisibleScale() {
    return Promise.resolve();
  }
  /**
   * Cause the map to zoom to this layer's boundary extent
   *
   * @returns {Promise} resolves when map has finished zooming
   */
  zoomToLayerBoundary() {
    return Promise.resolve();
  }
  /**
   * Get the click tolerance in pixels for this layer
   *
   * @returns {number} the mouse tolerance of this layer
   */
  get mouseTolerance() {
    return 0;
  }
  /**
   * Set the mouse tolerance for this layer in pixels
   *
   * @param {Integer} tolerance the new mouse tolerance
   */
  set mouseTolerance(e) {
  }
  /**
   * Get the touch tolerance in pixels for this layer
   *
   * @returns {number} the touch tolerance of this layer
   */
  get touchTolerance() {
    return 0;
  }
  /**
   * Set the touch tolerance in pixels for this layer
   *
   * @param {Integer} tolerance the new touch tolerance
   */
  set touchTolerance(e) {
  }
  /**
   * Return the draw order for the layer, if applicable
   */
  get drawOrder() {
    return [];
  }
  /**
   * Indicates if layer should participate in an identify request.
   */
  canIdentify() {
    return !1;
  }
  /**
   * Given the attributes of a feature of this layer, returns the name of that feature.
   * Valid only for layers that support attributes.
   *
   * @param attributes attribute values
   * @returns the name
   */
  nameValue(e) {
    return "";
  }
  /**
   * Given the attributes of a feature of this layer, returns the maptip of that feature.
   * Valid only for layers that support attributes.
   *
   * @param attributes attribute values
   * @returns the name
   */
  tooltipValue(e) {
    return "";
  }
  /**
   * Baseline identify function for layers that do not support identify.
   * Will return an empty result. Layers that support identify should override this method.
   * Note: implementations that return real data must make that data reactive()
   *
   * @param options not used, present for nice signature of overrided function
   * @returns {Array} an empty result set
   */
  runIdentify(e) {
    return [];
  }
  /**
   * Invokes the process to get the full set of attribute values for the layer.
   * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
   *
   * @returns {Promise} resolves with set of attribute values
   */
  getAttributes() {
    return Promise.resolve({
      features: [],
      oidIndex: {}
    });
  }
  /**
   * Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.
   */
  abortAttributeLoad() {
  }
  /**
   * Requests that any downloaded attribute sets or cached geometry be removed from memory. The next requests will pull from the server again.
   */
  clearFeatureCache() {
  }
  /**
   * The number of attributes currently downloaded (will update as download progresses)
   * @returns current download count
   */
  downloadedAttributes() {
    return 0;
  }
  /**
   * Indicates if the attribute load has been aborted.
   * @returns boolean if the process has been stopped
   */
  attribLoadAborted() {
    return !1;
  }
  // formerly known as getFormattedAttributes
  /**
   * Invokes the process to get the full set of attribute values for the layer,
   * formatted in a tabular format. Additional data properties are also included.
   * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
   *
   * @returns {Promise} resolves with set of tabular attribute values
   */
  getTabularAttributes() {
    return Promise.resolve({
      columns: [],
      rows: [],
      fields: [],
      oidField: "error"
    });
  }
  /**
   * Gets information on a graphic in the most efficient way possible. Options object properties:
   * - getGeom ; a boolean to indicate if the result should include graphic geometry
   * - getAttribs ; a boolean to indicate if the result should include graphic attributes
   * - getStyle ; a boolean to indicate if the result should graphical styling information
   *
   * All option properties are optional and default to false
   *
   * @param {Integer} objectId the object id of the graphic to find
   * @param {Object} options options object for the request, see above
   * @returns {Promise} resolves with a Graphic containing the requested information
   */
  getGraphic(e, t) {
    return Promise.resolve(new Ee(new ze()));
  }
  /**
   * Gets the icon for a specific feature, as an SVG string.
   *
   * @param {Integer} objectId the object id of the feature to find
   * @returns {Promise} resolves with an svg string encoding of the icon
   */
  getIcon(e) {
    return Promise.resolve("");
  }
  /**
   * Returns the value of a named SQL filter for the layer.
   *
   * @param {String} filterKey the filter key / named filter to view
   * @returns {String} the value of the where clause for the filter. Empty string if not defined.
   */
  getSqlFilter(e) {
    return "";
  }
  /**
   * Applies an SQL filter to the layer. Will overwrite any existing filter for the given key.
   * Use `1=2` for a "hide all" where clause.
   *
   * @param {String} filterKey the filter key / named filter to apply the SQL to
   * @param {String} whereClause the WHERE clause of the filter
   */
  setSqlFilter(e, t) {
  }
  /**
   * Applies the current filter settings to the physical map layer.
   *
   * @function applySqlFilter
   * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
   */
  applySqlFilter(e = []) {
  }
  /**
   * Gets array of object ids that currently pass any filters for the layer
   *
   * @param {Array} [exclusions] list of any filters keys to exclude from the result. omission includes all filters
   * @param {Extent} [extent] if provided, the result list will only include features intersecting the extent
   * @returns {Promise} resolves with array of object ids that pass the filter. if no filters are active, resolves with undefined.
   */
  getFilterOIDs(e = [], t = void 0) {
    return Promise.resolve(void 0);
  }
  /**
   * Gets the extent where the provided object id is on the map.
   * Can only be used on feature layers. Not applicable to point geometry.
   *
   * @param objectId the object id to query
   * @returns {Promise} resolves with the extent where the object id is present
   */
  getGraphicExtent(e) {
    return Promise.resolve(F.fromParams("fake", 0, 0, 0, 0));
  }
  /**
   * Get the parent layer for this layer
   * Only supported for sublayers
   *
   * @returns {LayerInstance | undefined} the parent layer of this layer
   */
  get parentLayer() {
    if (this.isSublayer)
      return this._parentLayer;
    throw new Error("Attempted to get parent layer of a non-sublayer object");
  }
  /**
   * Set the parent layer for this layer
   * Only supported for sublayers
   *
   * @param {LayerInstance | undefined} layer the new parent layer for this layer
   */
  set parentLayer(e) {
    if (!this.isSublayer && e)
      throw new Error("Attempted to set parent layer for a non-sublayer object");
    this._parentLayer = e;
  }
  /**
   * Get the sublayers for this layer
   *
   * @returns {Array<LayerInstance>} the sublayers of this layer
   */
  get sublayers() {
    return this._sublayers;
  }
  /**
   * Initiates actions after layer load.
   * Should generally only be called internally by the RAMP core.
   */
  onLoad() {
  }
  /**
   * Initiates actions after layer load error.
   * Should generally only be called internally by the RAMP core.
   * @param {boolean} [genuineError=true] Flag to detect error setting due to manual cancellation. Only genuine errors will raise notifications.
   */
  onError(e = !0) {
  }
  /**
   * Updates layer load state and raises events.
   * Should generally only be called internally by the RAMP core.
   * @param {LayerState} newState load state the layer is entering
   * @param {Boolean} [userCancel=false] optional flag to indicate if an error state was intentional due to a user cancel request
   */
  updateLayerState(e, t = !1) {
  }
  /**
   * Updates layer draw state and raises events.
   * Should generally only be called internally by the RAMP core.
   */
  updateDrawState(e) {
  }
  /**
   * Updates layer layer state and raises events.
   * Should generally only be called internally by the RAMP core.
   */
  updateInitiationState(e) {
  }
  /**
   * Finds an sublayer index corresponding to the given uid.
   * -1 indicates the uid targets the root layer
   *
   * @private
   * @param {string} uid the uid we want the index for
   * @returns {number} the integer index of the uid
   */
  uidToIdx(e) {
    if (e === this.uid)
      return -1;
    {
      const t = this._sublayers.findIndex((i) => i?.uid === e);
      if (t === -1)
        throw new Error(`Attempt to access non-existing unique id [layerid ${this.id}, uid ${e}]`);
      return t;
    }
  }
  /**
   * Attempts to get an sublayer based on the index or uid provided.
   *
   * @private
   * @param {number | string} layerIdx the uid or numeric index of the item we are interested in
   * @returns {LayerInstance | undefined} the matching feature class object, or undefined if the root was requested
   */
  getSublayer(e) {
    if (!this.supportsSublayers) {
      console.warn(`Attempted to call getSublayer on a layer (layer id: ${this.id}) that does not support FCs`);
      return;
    }
    let t;
    if (typeof e == "string" ? t = this.uidToIdx(e) : t = e, this._sublayers[t] === void 0)
      throw new Error(
        `Attempt to access non-existing layer index [layerid ${this.id}, lookup value ${e}]`
      );
    return this._sublayers[t];
  }
  /**
   * Check if layer controls is available on this layer.
   *
   * @param {LayerControl} control the layer control to check
   * @returns {boolean} Indicates if the given control is enabled on this layer
   */
  controlAvailable(e) {
    const t = this.$iApi.geo.layer.getLayerControls(this.id);
    return this.$iApi.geo.shared.controlAvailable(e, t);
  }
}
class ss extends li {
  // common layer properties
  /**
   * Tracks load and draw elapsed time
   */
  timers;
  origRampConfig;
  loadDefProm;
  // a deferred promise that resolves when layer is fully ready and safe to use. for convenience of caller
  /**
   * A boolean to track whether the promise is pending (false) or fulfilled/rejected (true)
   */
  loadPromDone;
  layerTree;
  /**
   * Internally tracks any arcade formula for the name value.
   */
  nameArcadeFormula;
  /**
   * The name arcade executor if a name formula is defined
   */
  nameArcadeExecutor;
  /**
   * Internally tracks any arcade formula for the maptip value.
   */
  tooltipArcadeFormula;
  /**
   * The maptip arcade executor if a maptip formula is defined
   */
  tooltipArcadeExecutor;
  // ----------- LAYER CONSTRUCTION AND INITIALIZAION -----------
  constructor(e, t) {
    super(e, t), this.name = e.name || "", this.geomType = T.NONE, this.dataFormat = te.UNKNOWN, this.layerType = x.UNKNOWN, this.layerFormat = me.UNKNOWN;
    const i = t.geo.map.layerDefaultTimes;
    this.expectedTime.draw = e.expectedDrawTime ?? i.draw, this.expectedTime.load = e.expectedLoadTime ?? i.load, this.expectedTime.fail = e.maxLoadTime || i.fail, this.lastCancel = 0, this.timers = {
      draw: void 0,
      load: void 0
    }, this.origRampConfig = e, this.id = e.id || "", this.uid = this.$iApi.geo.shared.generateUUID(), this.isCosmetic = !1, this.isSystem = e.system || !1, this.isRemoved = !1, this.isSublayer = !1, this.supportsIdentify = !1, this.mapLayer = !0, this.identifyMode = X.NONE, this.supportsFeatures = !1, this.hovertips = !1, this.supportsSublayers = !1, this.isFile = !1, this.layerState = q.NEW, this.initiationState = N.NEW, this.drawState = ue.NOT_LOADED, this.loadDefProm = new H(), this.url = this.origRampConfig.url, this.canReload = !!(this.url || this.origRampConfig.caching), this.loadPromDone = !1, this.nameArcadeFormula = "", this.tooltipArcadeFormula = "", this.layerTree = new Lt(0, this.uid, this.name, !0);
  }
  updateInitiationState(e) {
    this.initiationState = e, this.$iApi.event.emit(E.LAYER_INITIATIONSTATECHANGE, {
      state: e,
      layer: this
    });
  }
  updateLayerState(e, t = !1) {
    this.layerState = e, this.$iApi.event.emit(E.LAYER_LAYERSTATECHANGE, {
      state: e,
      layer: this,
      userCancel: t
    });
  }
  updateDrawState(e) {
    this.drawState = e, e === ue.REFRESH ? this.startTimer(
      "draw"
      /* DRAW */
    ) : e === ue.UP_TO_DATE && this.stopTimer(
      "draw"
      /* DRAW */
    ), this.$iApi.event.emit(E.LAYER_DRAWSTATECHANGE, {
      state: e,
      layer: this
    });
  }
  // need this so initiate encapsulates the entire initiation process regardless of which inherited layer type is being initiated
  async initiate() {
    this.updateInitiationState(N.INITIATING), this.startTimer(
      "load"
      /* LOAD */
    );
    const e = (a) => {
      this.layerState !== q.ERROR && (console.error(a), this.onError());
    }, t = Date.now(), i = setTimeout(() => {
      t > this.lastCancel && (this.lastCancel = Date.now(), e("Layer timed out during initialize. Id: " + this.id));
    }, this.expectedTime.fail), [r] = await Ae(this.onInitiate());
    clearTimeout(i), t > this.lastCancel && (this.drawState !== ue.UP_TO_DATE && this.startTimer(
      "draw"
      /* DRAW */
    ), r ? e(`Init error on layer id: ${this.id} . ${r.message}`) : this.updateInitiationState(N.INITIATED));
  }
  async onInitiate() {
    if (this.isSublayer)
      return console.warn("Attempted to initiate a sublayer as a CommonLayer"), Promise.resolve();
    this.initiationState === N.INITIATED && console.error(`Encountered layer initialize while already initiated, layer id ${this.id}`);
  }
  async terminate() {
    this.updateInitiationState(N.TERMINATING), await Promise.all(this.sublayers.map((e) => e.terminate())), this.loadDefProm = new H(), this.loadPromDone = !1, this.updateLayerState(q.NEW), this.updateDrawState(ue.NOT_LOADED), this.updateInitiationState(N.TERMINATED);
  }
  // ----------- LAYER LOAD -----------
  // When esri layer or data layer loads, this will perform any additional layer setup.
  // The layer status will be set to loaded once everything has finished.
  onLoad() {
    const e = Date.now();
    let t = !1;
    const i = setTimeout(() => {
      t = !0, this.onError();
    }, this.expectedTime.fail);
    try {
      const r = this.onLoadActions();
      Promise.all(r).then(() => {
        clearTimeout(i), t ? this.visibility = !1 : (this.stopTimer(
          "load"
          /* LOAD */
        ), e > this.lastCancel && (this.loadPromDone && (this.loadDefProm = new H()), this.loadDefProm.resolveMe(), this.loadPromDone = !0, this.sublayers.forEach((a) => a.onLoad()), this.updateLayerState(q.LOADED)));
      }).catch(() => {
        clearTimeout(i), this.onError();
      });
    } catch (r) {
      console.error("Encountered error on layer load: ", r), clearTimeout(i), this.onError();
    }
  }
  onError(e = !0) {
    this.layerState !== q.ERROR && (this.initiationState === N.INITIATING && this.updateInitiationState(N.NEW), this.loadPromDone && (this.loadDefProm = new H()), this.loadDefProm.rejectMe(), this.loadPromDone = !0, this.sublayers.forEach((t) => t.onError(e)), e && this.$iApi.notify.show(
      fe.ERROR,
      this.$iApi.$i18n.t("layer.error", {
        id: this.id
      })
    ), this.stopTimer(
      "draw"
      /* DRAW */
    ), this.stopTimer(
      "load"
      /* LOAD */
    ), this.updateLayerState(q.ERROR, !e));
  }
  /**
   * Performs setup on the layer that needs to occur after initialization and
   * the esri layer (if a map layer) loads, but before we mark the layer as loaded.
   * Any async tasks must include their promise in the return array.
   *
   * @private
   * @returns {Array<Promise<void>>} List of things to wait on.
   */
  onLoadActions() {
    return [];
  }
  cancelLoad() {
    this.isLoaded || this.initiationState === N.NEW || this.initiationState === N.TERMINATING || this.initiationState === N.TERMINATED || (this.lastCancel = Date.now(), this.esriLayer && this.esriLayer.loadStatus === "loading" && this.esriLayer.cancelLoad(), this.removeEsriLayer(), this.onError(!1));
  }
  loadPromise() {
    return this.loadDefProm.getPromise();
  }
  get isLoaded() {
    return this.layerState === q.LOADED;
  }
  // ----------- LAYER MANAGEMENT -----------
  /**
   * Indicates if layer should participate in an identify request.
   */
  canIdentify() {
    return this.supportsIdentify && this.isLoaded && this.visibility && this.identify && !this.scaleSet.isOffScale(this.$iApi.geo.map.getScale()).offScale;
  }
  /**
   * Provides a tree structure describing the layer and any sublayers,
   * including uid values. Should only be called after loadPromise resolves.
   *
   * @method getLayerTree
   * @returns {TreeNode} the root of the layer tree
   */
  getLayerTree() {
    return this.layerTree;
  }
  // ----------- STUB METHODS -----------
  // these are here to provide a consistant method interface when calling methods are
  // dealing with vars typed as BaseLayer. Layer classes that actually use these
  // methods will override the stubs.
  stubError() {
    throw new Error(`Attempted to use a method not valid for ${this.layerType}`);
  }
  /**
   * Invokes the process to get the full set of attribute values for the layer.
   * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
   *
   * @returns {Promise} resolves with set of attribute values
   */
  getAttributes() {
    return this.stubError(), Promise.resolve({
      features: [],
      oidIndex: {}
    });
  }
  abortAttributeLoad() {
    this.stubError();
  }
  clearFeatureCache() {
    this.stubError();
  }
  getTabularAttributes() {
    return this.stubError(), Promise.resolve({
      columns: [],
      rows: [],
      fields: [],
      oidField: "error"
    });
  }
  /**
   * Gets information on a graphic in the most efficient way possible. Options object properties:
   * - getGeom ; a boolean to indicate if the result should include graphic geometry
   * - getAttribs ; a boolean to indicate if the result should include graphic attributes
   * - getStyle ; a boolean to indicate if the result should include symbol styling information
   *
   * @param {Integer} objectId the object id of the graphic to find
   * @param {Object} options options object for the request, see above
   * @returns {Promise} resolves with a Graphic containing the requested information
   */
  getGraphic(e, t) {
    return this.stubError(), Promise.resolve(new Ee(new ze()));
  }
  getIcon(e) {
    return this.stubError(), Promise.resolve("");
  }
  getSqlFilter(e) {
    return this.stubError(), "";
  }
  setSqlFilter(e, t) {
    this.stubError();
  }
  getFilterOIDs(e = [], t = void 0) {
    return this.stubError(), Promise.resolve(void 0);
  }
  /**
   * Gets the extent where the provided object id is on the map.
   * Can only be used on feature layers with multipoint, polyline, polygon geometry.
   *
   * @param objectId the object id to query
   * @returns {Promise} resolves with the extent where the object id is present
   */
  getGraphicExtent(e) {
    return this.stubError(), Promise.resolve(F.fromParams("fake", 0, 0, 0, 0));
  }
  applySqlFilter(e = []) {
    this.stubError();
  }
  /**
   * Add a WMS layer parameter, maybe even refresh the layer
   *
   * @function setCustomParameter
   * @param {String} key name of the key to be created or updated
   * @param {String} value value of the key
   * @param {Boolean} forceRefresh show the new fancy version of the layer or not
   */
  setCustomParameter(e, t, i = !0) {
    this.stubError();
  }
  /**
   * Start the draw/load timer for the layer, after which is a slow to load/draw notification is shown.
   * @param type the type of timer to start (load or draw)
   */
  startTimer(e) {
    this.stopTimer(e), this.expectedTime[e] > 0 && (this.timers[e] = window.setTimeout(
      () => this.$iApi.notify.show(
        fe.WARNING,
        // layer.longload or layer.longdraw
        this.$iApi.$i18n.t(`layer.long${e}`, {
          id: this.name || this.id
        })
      ),
      this.expectedTime[e]
    ));
  }
  /**
   * Stop the draw/load timer for the layer, if it was started.
   * @param type the type of timer to stop (load or draw)
   */
  stopTimer(e) {
    this.timers[e] && (clearTimeout(this.timers[e]), this.timers[e] = void 0);
  }
  /**
   * Will create an arcade formula executor valid for this layer
   *
   * @param formula an arcade formula
   * @returns resolves with an arcade executor object
   */
  async arcadeGenerator(e) {
    const t = {
      variables: [
        {
          name: "$attr",
          type: "dictionary",
          properties: this.fields.map((i) => {
            const r = this.$iApi.geo.attributes.fieldTypeToArcade(i.type);
            return r ? { name: i.name, type: r } : (console.error(`Encountered field type with no arcade support: ${i.type} [${i.name}]`), r);
          }).filter((i) => !!i)
        }
      ]
    };
    return C.ArcadeExecutor(e, t);
  }
  get nameArcade() {
    return this.nameArcadeFormula;
  }
  async setNameArcade(e) {
    this.supportsFeatures ? e.trim() === "" ? (this.nameArcadeFormula = "", this.nameArcadeExecutor = void 0) : (this.nameArcadeFormula = e, this.nameArcadeExecutor = await this.arcadeGenerator(e)) : console.error("Attempted to set a name arcade function on a layer that doesn't support it.");
  }
  /**
   * Handles initialization logic for feature names.
   * Only valid for layers that support attributes.
   * Typically called by internal processes.
   *
   * @param config a ramp layer configuration object. Can pass empty object if n/a.
   * @param serviceDefault name field as defined by the layer service. Not required
   */
  async nameInitializer(e, t = "") {
    if (this.supportsFeatures) {
      const i = (e?.nameArcade || "").trim();
      i && await this.setNameArcade(i), this.nameField = (e?.nameField || "").trim() || t || this.oidField;
    } else
      console.error("Attempted to init a name field on an unsupported layer.");
  }
  nameValue(e) {
    if (e)
      if (this.nameArcade) {
        const t = {
          $attr: e
        };
        return this.nameArcadeExecutor?.execute(t) ?? "Arcade Error";
      } else
        return this.nameField ? e[this.nameField] ?? "Name Field Error" : "";
    else
      return "";
  }
  get tooltipArcade() {
    return this.tooltipArcadeFormula;
  }
  async setTooltipArcade(e) {
    this.supportsFeatures ? e.trim() === "" ? (this.tooltipArcadeFormula = "", this.tooltipArcadeExecutor = void 0) : (this.tooltipArcadeFormula = e, this.tooltipArcadeExecutor = await this.arcadeGenerator(e)) : console.error("Attempted to set a tooltip arcade function on a layer that doesn't support it.");
  }
  /**
   * Handles initialization logic for feature tooltips.
   * Only valid for layers that support attributes.
   * Needs to be called after nameInitializer to ensure correct fallback defaults.
   * Typically called by internal processes.
   *
   * @param config a ramp layer configuration object. Can pass empty object if n/a.
   */
  async tooltipInitializer(e) {
    if (this.supportsFeatures) {
      const t = (e?.tooltipArcade || "").trim();
      t && await this.setTooltipArcade(t), this.tooltipField = (e?.tooltipField || "").trim();
    } else
      console.error("Attempted to init a tooltip field on an unsupported layer.");
  }
  tooltipValue(e) {
    if (e)
      if (this.tooltipArcade) {
        const t = {
          $attr: e
        };
        return this.tooltipArcadeExecutor?.execute(t) ?? "Arcade Error";
      } else
        return this.tooltipField ? e[this.tooltipField] ?? this.nameValue(e) : this.nameValue(e);
    else
      return "";
  }
}
class Ke extends ss {
  // common layer properties
  _serverVisibility;
  _scaleSet;
  _mouseTolerance;
  _touchTolerance;
  _drawOrder;
  // used to manage debouncing when applying filter updates against a layer. Private! but needs to be seen by FCs.
  _lastFilterUpdate = "";
  viewDefProm;
  // a deferred promise that resolves when a layer view has been created on the map. helps bridge the view handler with the layer load handler
  esriWatches;
  // ----------- LAYER CONSTRUCTION AND INITIALIZAION -----------
  constructor(e, t) {
    super(e, t), this._scaleSet = new qi(), this._mouseTolerance = e.mouseTolerance != null ? e.mouseTolerance : 5, this._touchTolerance = e.touchTolerance != null ? e.touchTolerance : 15, this._drawOrder = [], this._serverVisibility = void 0, this.isCosmetic = e.cosmetic || !1, this.extent = e.extent ? F.fromConfig(`${this.id}_extent`, e.extent) : void 0, this.viewDefProm = new H(), this.esriWatches = [];
  }
  noLayerErr() {
    console.error(
      "Attempted to manipulate the layer but no layer found. Likely .initiate() was not finished or failed. Layer id " + this.id
    ), console.trace();
  }
  notLoadedErr() {
    console.error("Attempted to manipulate the layer before it was loaded. Layer id " + this.id), console.trace();
  }
  async onInitiate() {
    if (await super.onInitiate(), !this.esriLayer) {
      this.noLayerErr();
      return;
    }
    this.esriWatches.push(
      be(
        () => this.esriLayer.visible,
        (e) => {
          this.$iApi.event.emit(E.LAYER_VISIBILITYCHANGE, {
            visibility: e,
            layer: this
          });
        }
      )
    ), this.esriWatches.push(
      be(
        () => this.esriLayer.opacity,
        (e) => {
          this.$iApi.event.emit(E.LAYER_OPACITYCHANGE, {
            opacity: e,
            layer: this
          });
        }
      )
    ), this.esriWatches.push(
      be(
        () => this.esriLayer.loadStatus,
        (e) => {
          const t = {
            "not-loaded": q.LOADING,
            loading: q.LOADING,
            loaded: q.LOADED,
            failed: q.ERROR
          };
          e === "loaded" ? this.onLoad() : e === "failed" ? this.onError() : this.updateLayerState(t[e]);
        }
      )
    ), this.esriLayer.on("layerview-create", (e) => {
      this.esriView = ee(e.layerView), this.esriWatches.push(
        be(
          () => e.layerView.updating,
          (t) => {
            this.updateDrawState(t ? ue.REFRESH : ue.UP_TO_DATE);
          }
        )
      ), this.viewDefProm.resolveMe();
    }), this.sublayers.forEach((e) => e.initiate());
  }
  async terminate() {
    this.esriLayer = void 0, await super.terminate(), this.viewDefProm = new H(), this.esriWatches.forEach((e) => e.remove()), this.esriWatches = [];
  }
  async reload() {
    if (!this.$iApi.geo.map.esriMap) {
      console.error("Attempted layer reload when no map exists");
      return;
    }
    this.removeEsriLayer();
    const e = Date.now();
    if (this.$iApi.event.emit(E.LAYER_RELOAD_START, this), this.sublayers.forEach((t) => this.$iApi.event.emit(E.LAYER_RELOAD_START, t)), await this.terminate(), await this.initiate(), !(this.lastCancel > e)) {
      if (!this.esriLayer) {
        console.error("ESRI layer failed to re-create during reload.");
        return;
      }
      this.$iApi.geo.map.insertToEsriMap(this), this.$iApi.event.emit(E.LAYER_RELOAD_END, this), this.sublayers.forEach((t) => this.$iApi.event.emit(E.LAYER_RELOAD_END, t));
    }
  }
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    return {
      id: e.id,
      url: e.url,
      opacity: e?.state?.opacity ?? 1,
      visible: e?.state?.visibility ?? !0
    };
  }
  removeEsriLayer() {
    this.esriLayer && this.$iApi.geo.map.esriMap && this.$iApi.geo.map.esriMap.layers.findIndex((t) => t.id === this.id) > -1 && this.$iApi.geo.map.esriMap.layers.remove(this.esriLayer);
  }
  // ----------- LAYER LOAD -----------
  onLoadActions() {
    const e = super.onLoadActions();
    if (this.name || (this.name = this.esriLayer?.title || this.id), this.isCosmetic || (this.identify = this.config.state?.identify ?? this.supportsIdentify), this.layerType !== x.WMS) {
      const t = this.$iApi.geo.proj.checkProj(this.getSR()).then((i) => i ? Promise.resolve() : Promise.reject());
      e.push(t);
    }
    return e;
  }
  viewPromise() {
    return this.viewDefProm.getPromise();
  }
  // ----------- LAYER MANAGEMENT -----------
  /**
   * Wraps an error test for when someone calls a map dependent function too early
   * @private
   */
  mapCheck() {
    return this.$iApi.geo.map.created ? !0 : (console.error("Attempting to use map-dependent logic before the layer has been added to the map"), console.trace(), !1);
  }
  /**
   * Returns the scale set (min and max visible scale) of the layer.
   *
   * @returns {ScaleSet} scale set of the layer
   */
  get scaleSet() {
    return this._scaleSet;
  }
  /**
   * Set the scale set (min and max visible scale) of the layer.
   *
   * @param {ScaleSet} scaleSet the new scale set of the layer
   */
  set scaleSet(e) {
    this._scaleSet = e;
  }
  /**
   * Indicates if the layer is not in a visible scale range.
   *
   * @function isOffscale
   * @param {Integer} [testScale] optional scale to test against. if not provided, current map scale is used.
   * @returns {Boolean} true if the layer is outside of a visible scale range
   */
  isOffscale(e = void 0) {
    let t;
    if (typeof e > "u")
      if (this.mapCheck())
        t = this.$iApi.geo.map.getScale();
      else
        return !1;
    else
      t = e;
    return this.scaleSet.isOffScale(t).offScale;
  }
  /**
   * Cause the map to zoom to a scale level where the layer is visible.
   *
   * @returns {Promise} resolves when map has finished zooming
   */
  zoomToVisibleScale() {
    return this.mapCheck() ? this.$iApi.geo.map.zoomToVisibleScale(this.scaleSet) : Promise.resolve();
  }
  /**
   * Cause the map to zoom to this layer's boundary extent
   *
   * @returns {Promise} resolves when map has finished zooming
   */
  zoomToLayerBoundary() {
    return this.extent ? this.mapCheck() ? this.$iApi.geo.map.zoomMapTo(this.extent) : Promise.resolve() : (console.error(`Attempted to zoom to boundary of a layer with no extent (Layer Id: ${this.id})`), Promise.resolve());
  }
  /**
   * Get the mouse tolerance in pixels for this layer
   *
   * @returns {number} the mouse tolerance of this layer
   */
  get mouseTolerance() {
    return this._mouseTolerance;
  }
  /**
   * Set the mouse tolerance for this layer in pixels
   *
   * @param {number} tolerance the new mouse tolerance
   */
  set mouseTolerance(e) {
    if (!this.supportsIdentify) {
      console.warn("Attempted to set click tolerance on a layer that doesn't support identify");
      return;
    }
    if (e < 0) {
      console.error("Attempted to set a negative click tolerance");
      return;
    }
    this._mouseTolerance = e;
  }
  /**
   * Get the touch tolerance in pixels for this layer
   *
   * @returns {number} the touch tolerance of this layer
   */
  get touchTolerance() {
    return this._touchTolerance;
  }
  /**
   * Set the touch tolerance in pixels for this layer
   *
   * @param {number} tolerance the new touch tolerance
   */
  set touchTolerance(e) {
    if (!this.supportsIdentify) {
      console.warn("Attempted to set touch tolerance on a layer that doesn't support identify");
      return;
    }
    if (e < 0) {
      console.error("Attempted to set a negative touch tolerance");
      return;
    }
    this._touchTolerance = e;
  }
  /**
   * Indicates if the Esri map layer exists
   */
  get layerExists() {
    return this.initiationState === N.INITIATED && !!this.esriLayer;
  }
  /**
   * Returns an array describing the draw order of features, if applicable.
   */
  get drawOrder() {
    return this._drawOrder;
  }
  /**
   * Returns the visibility of the layer.
   *
   * @returns {Boolean} visibility of the layer
   */
  get visibility() {
    return this.layerExists ? this.esriLayer.visible : !1;
  }
  /**
   * Applies visibility to layer.
   *
   * @param {Boolean} value the new visibility setting
   */
  set visibility(e) {
    this.layerExists ? this.esriLayer.visible = e : this.noLayerErr();
  }
  /**
   * Checks the visibility of the sublayers
   * If all sublayers are invisible, then this layer is also set to invisible
   *
   * @function checkVisibility
   */
  checkVisibility() {
    this.supportsSublayers && this.layerExists && (this.visibility = this.sublayers.some((e) => e.visibility));
  }
  /**
   * Returns the opacity of the layer.
   *
   * @returns {number} opacity of the layer (range between 0 and 1)
   */
  get opacity() {
    return this.layerExists ? this.esriLayer.opacity : 0;
  }
  /**
   * Applies opacity to layer.
   *
   * @param {number} value the new opacity setting (range between 0 and 1)
   */
  set opacity(e) {
    this.layerExists ? this.esriLayer.opacity = e : this.noLayerErr();
  }
  /**
   * Provides the spatial reference of how the underlying ESRI layer is encoding geometry on the client.
   *
   * @returns {SpatialReference} the layer spatial reference in RAMP API format
   */
  getSR() {
    return this.esriLayer ? _.fromESRI(this.esriLayer.spatialReference) : (this.noLayerErr(), _.latLongSR());
  }
}
class ci extends Ke {
  attribs;
  renderer;
  serviceUrl;
  canModifyLayer;
  filter;
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !0, this.geomType = T.UNKNOWN, this.serviceUrl = "", this.fieldList = "", this.canModifyLayer = !0, this.filter = new ji(e.permanentFilteredQuery || "", e.initialFilteredQuery || ""), this.hovertips = e.state?.hovertips ?? !0, this.attribs = new as();
  }
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    return super.makeEsriLayerConfig(e);
  }
  // NOTE this logic is for ArcGIS Server sourced things.
  //      other sourced attribute layers should override this function.
  /**
   * Will load and apply metadata from the ArcGIS Server endpoint to this layer.
   *
   * @param options loading options. Currently only supports custom renderer override
   */
  async loadLayerMetadata(e = {}) {
    if (!this.serviceUrl)
      return;
    const t = Date.now(), i = await this.$iApi.geo.layer.loadLayerMetadata(this.serviceUrl);
    if (!(t < this.lastCancel))
      if (this.geomType = i.geometryType, this.attribs.quickCache = new ns(this.geomType), this.scaleSet.minScale = i.minScale, this.scaleSet.maxScale = i.maxScale, this.dataFormat = i.dataFormat, this.extent = this.extent ?? i.extent, this._serverVisibility = i.defaultVisibility, this.origRampConfig.name || (this.name = i.name ?? this.id), this.dataFormat === te.ESRI_FEATURE) {
        this.supportsFeatures = !0, this.canModifyLayer = this.layerType === x.SUBLAYER ? i.canModifyLayer : !0, this.fields = i.fields, this.nameField = i.displayField, this.oidField = i.objectIdField, this.sourceSR = i.sourceSR, this.drawOrder.forEach((o) => {
          o.field && this.fields.findIndex((l) => l.name === o.field) === -1 && console.error(`Draw order for layer ${this.id} references invalid field ${o.field}`);
        });
        const r = e && e.customRenderer && e.customRenderer.type ? e.customRenderer : i.renderer;
        this.renderer = this.$iApi.geo.symbology.makeRenderer(r, this.fields), this.legend = this.$iApi.geo.symbology.rendererToLegend(this.renderer);
        const a = {
          // version number is only provided on 10.0 SP1 servers and up.
          // servers 10.1 and higher support the query limit flag
          supportsLimit: (i.currentVersion || 1) >= 10.1,
          serviceUrl: this.serviceUrl,
          oidField: this.oidField,
          batchSize: -1,
          attribs: "*",
          // NOTE we set to * here for generic case. Some subclasses will later call updateFieldList() after parsing config field settings
          permanentFilter: this.getSqlFilter(le.PERMANENT)
        };
        this.attribs.attLoader = new os(this.$iApi, a);
      } else
        this.supportsFeatures = !1, this.supportsIdentify = !1;
  }
  /**
   * Invokes the process to get the full set of attribute values for the layer.
   * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
   *
   * @returns {Promise} resolves with set of attribute values
   */
  getAttributes() {
    return this.attribs.attLoader.getAttribs();
  }
  abortAttributeLoad() {
    this.attribs.attLoader.abortAttribLoad();
  }
  clearFeatureCache() {
    this.attribs.clearAll();
  }
  downloadedAttributes() {
    return this.isLoaded ? this.attribs.attLoader.loadCount() : 0;
  }
  attribLoadAborted() {
    return this.isLoaded ? this.attribs.attLoader.isLoadAborted() : !1;
  }
  getFieldsToTrim() {
    return this.fields.filter((e) => e.trim).map((e) => e.name);
  }
  /**
   * Invokes the process to get the full set of attribute values for the layer,
   * formatted in a tabular format. Additional data properties are also included.
   * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
   *
   * @returns {Promise} resolves with set of tabular attribute values
   */
  getTabularAttributes() {
    return this.$iApi.geo.attributes.generateTabularAttributes(this, this.attribs);
  }
  async getGraphic(e, t) {
    let i = {}, r = new ze();
    const a = this.$iApi.geo.map;
    let o = !1, l = !1, n = 0;
    if (t.getAttribs || t.getStyle) {
      const u = this.attribs.quickCache.getAttribs(e);
      if (u)
        i = u;
      else if (this.attribs.attLoader.isLoaded() || this.isFile) {
        const p = await this.attribs.attLoader.getAttribs();
        i = p.features[p.oidIndex[e]];
      } else
        o = !0;
    }
    if (t.getGeom) {
      n = a.getScale();
      const u = this.attribs.quickCache.getGeom(e, n);
      if (u)
        r = u;
      else if (this.layerType === x.FEATURE) {
        await this.viewPromise(), this.esriView.updating && await new Promise((g) => {
          const h = be(
            () => this.esriView.updating,
            (y) => {
              y || (h.remove(), g());
            }
          );
        });
        const p = await C.Query();
        p.objectIds = [e], p.returnGeometry = !0;
        const d = await this.esriView.queryFeatures(p);
        if (d.features.length) {
          const g = d.features[0], h = this.$iApi.geo.geom.geomEsriToRamp(g.geometry);
          this.attribs.quickCache.setGeom(e, h, n), r = h;
        } else
          l = !0;
      } else
        l = !0;
    }
    if (o || l) {
      const u = {
        oid: e,
        serviceUrl: this.serviceUrl,
        includeGeometry: l,
        attribs: this.fieldList,
        fieldsToTrim: this.getFieldsToTrim()
      };
      l && (u.mapSR = a.getSR().wkid?.toString(), this.attribs.quickCache.isPoint || (u.maxOffset = a.esriView?.resolution));
      const p = await this.$iApi.geo.attributes.loadSingleFeature(u);
      l && (this.attribs.quickCache.setGeom(e, p.geometry, n), r = p.geometry), (o || typeof this.attribs.quickCache.getAttribs(e) > "u") && (this.attribs.quickCache.setAttribs(e, p.attributes), o && (i = p.attributes));
    }
    const c = new Ee(r, "", t.getAttribs ? i : void 0);
    if (t.getStyle) {
      const u = Ie(this.renderer.getGraphicSymbol(i));
      c.style = this.$iApi.geo.geom.styleEsriToRamp(u);
    }
    return c;
  }
  async getIcon(e) {
    if (!this.renderer)
      throw new Error("getIcon called before renderer is defined");
    const t = await this.getGraphic(e, { getAttribs: !0 });
    return this.$iApi.geo.symbology.getGraphicIcon(t.attributes || {}, this.renderer);
  }
  setSqlFilter(e, t) {
    const i = this.filter.getSql(e);
    if (t === i)
      return;
    this.filter.setSql(e, t), this.$iApi.event.emit(E.FILTER_CHANGE, {
      uid: this.uid,
      filterKey: e
    });
    const r = `${this.uid}-${e}-${t}`;
    this._lastFilterUpdate = r, setTimeout(() => {
      this._lastFilterUpdate === r && this.applySqlFilter();
    }, 100);
  }
  applySqlFilter(e = []) {
    throw new Error(
      `attempted to apply sql filter ${e} to a layer not equipped for it. likely a new subclass of AttribLayer did not override applySqlFilter`
    );
  }
  getSqlFilter(e) {
    return this.filter.getSql(e);
  }
  /**
   * Returns a SQL WHERE condition that is combination of active filters.
   *
   * @method getCombinedSqlFilter
   * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
   * @returns {String} all non-excluded sql statements connected with AND operators.
   */
  getCombinedSqlFilter(e) {
    return this.filter.getCombinedSql(e);
  }
  async getFilterOIDs(e = [], t = void 0) {
    const i = this.filter.getCombinedSql(e), r = !!t;
    if (!(i || r))
      return;
    t && this.filter.setExtent(t);
    const a = this.filter.sqlActiveFilters(e);
    let o = this.filter.getCache(a, r);
    if (!o) {
      const l = {
        filterGeometry: t,
        filterSql: i,
        includeGeometry: !1,
        sourceSR: this.sourceSR
      };
      o = this.queryOIDs(l), this.filter.setCache(o, a, r);
    }
    return o;
  }
  /**
   * Will return an array of object ids for features in the layer that satisfy the conditions of the query options parameter.
   * @param options {Object} options to provide filters and helpful information.
   * @returns {Promise} resolves with an array of numbers (object ids)
   */
  queryOIDs(e) {
    this.isFile && (console.error("a file layer called a server based query function"), console.trace());
    const t = {
      url: this.serviceUrl,
      ...e
    };
    return this.$iApi.geo.query.arcGisServerQueryIds(t);
  }
  /**
   * Requests a set of features for this layer that match the criteria of the options
   * - filterGeometry : a RAMP API geometry to restrict results to
   * - filterSql : a where clause to apply against feature attributes
   * - includeGeometry : a boolean to indicate if result features should include the geometry
   * - sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution
   *
   * Each result item is loaded independently. This will capitalize on caching, but will be expensive
   * when expecting a large result set and nothing currently cached.
   *
   * @param options {Object} options to provide filters and helpful information.
   * @returns {Promise} resolves in an array of object ids and promises resolving in each feature
   */
  async queryFeaturesDiscrete(e) {
    const t = await this.queryOIDs(e), i = {
      getGeom: !!e.includeGeometry,
      getAttribs: !0
    };
    return t.map((r) => ({
      oid: r,
      graphic: this.getGraphic(r, i)
    }));
  }
  /**
   * Requests a set of features for this layer that match the criteria of the options
   * - filterGeometry : a RAMP API geometry to restrict results to
   * - filterSql : a where clause to apply against feature attributes
   * - includeGeometry : a boolean to indicate if result features should include the geometry
   * - outFields : a string of comma separated field names. will restrict fields included in the output
   * - sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution
   *
   * @param options {Object} options to provide filters and helpful information.
   * @returns {Promise} resolves with an array of features that satisfy the criteria
   */
  async queryFeatures(e) {
    const t = await this.queryFeaturesDiscrete(e);
    return Promise.all(t.map((i) => i.graphic));
  }
  /**
   * Processes any layer order configuration and modifies the passed ESRI layer config
   * with ESRI-friendly definitions
   *
   * @param rampConfig {RampLayerConfig} Ramp layer configuration object.
   * @param rampConfig {Object} ESRI Feature Layer configuration object
   */
  configDrawOrder(e, t) {
    Array.isArray(e.drawOrder) && e.drawOrder.length > 0 && (t.orderBy = e.drawOrder.map((i) => {
      const r = i.ascending ?? !0 ? "ascending" : "descending";
      return i.field ? {
        field: i.field,
        order: r
      } : {
        valueExpression: i.arcade,
        order: r
      };
    }), this._drawOrder = e.drawOrder.slice());
  }
}
class gn extends Ke {
  constructor(e, t) {
    super(e, t), this.dataFormat = te.ESRI_FEATURE, this.layerFormat = me.GRAPHIC, this.hovertips = !1;
  }
  _graphics = [];
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    return super.makeEsriLayerConfig(e);
  }
  /**
   * Get the number of graphics in the layer.
   *
   * @returns {Integer} number of graphics in the layer
   */
  getGraphicCount() {
    return this._graphics.length;
  }
  /**
   * Gets a graphic from the layer, if it exists.
   *
   * @param {string} graphicId id of the graphic to find
   * @returns {Graphic} the graphic, undefined if no matching id is found.
   */
  getLocalGraphic(e) {
    return this._graphics.find((t) => t.id === e);
  }
  /**
   * Gets the ESRI graphic from the layer, if it exists, that is rendering the Graphic with the
   * provided id.
   *
   * @param {string} graphicId id of the graphic to find
   * @returns {ESRIGraphic} the graphic, undefined if no matching id is found.
   */
  getEsriGraphic(e) {
    return this.esriLayer?.graphics.find((t) => t.id === e);
  }
  /** Returns a copy of the graphics in the layer. */
  get graphics() {
    return this._graphics.slice();
  }
  /**
   * Adds graphics to the layer. Once added, the Graphic is not tightly bound to the layer.
   * Updating the Graphic object will not automatically update what is on the layer.
   *
   * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to add to the layer
   * @returns {Promise} resolves when graphics have been added
   */
  async addGraphic(e) {
    if (!this.layerExists) {
      this.noLayerErr();
      return;
    }
    let t;
    e instanceof Array ? t = e : t = [e];
    const i = t.filter((n) => this._graphics.findIndex((u) => u.id === n.id) === -1 ? (this._graphics.push(n), !0) : (console.error(`Attempting to add graphic with id '${n.id}' that has already been added.`), !1)), r = this.$iApi.geo.map.getSR(), a = i.map((n) => this.$iApi.geo.proj.projectGeometry(r, n.geometry)), o = await Promise.all(a), l = i.map((n, c) => {
      const u = new Ee(o[c], n.id, n.attributes);
      return u.style = n.style, this.$iApi.geo.geom.graphicRampToEsri(u);
    });
    this.esriLayer.addMany(l);
  }
  /**
   * If Graphics are specified, removes those graphics from the layer. Passing no parameter removes all Graphics.
   *
   * @param {Graphic | string | Array<Graphic | string>} graphics Valid formats: A Graphic object, a graphic ID in string form, or an array of Graphic objects and/or graphic ID strings
   */
  removeGraphic(e) {
    if (!this.layerExists) {
      this.noLayerErr();
      return;
    }
    if (typeof e > "u") {
      this.esriLayer.removeAll(), this._graphics = [];
      return;
    }
    let t;
    Array.isArray(e) ? t = e : t = [e], t.map((r) => typeof r == "string" ? r : r.id).forEach((r) => {
      const a = this.esriLayer.graphics.findIndex((l) => l.id === r);
      a > -1 && this.esriLayer.graphics.removeAt(a);
      const o = this._graphics.findIndex((l) => l.id === r);
      o > -1 && this._graphics.splice(o, 1);
    });
  }
}
class vn extends gn {
  constructor(e, t) {
    super(e, t), this.layerType = x.GRAPHIC;
  }
  async onInitiate() {
    this.esriLayer = ee(await C.GraphicsLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
  }
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    return super.makeEsriLayerConfig(e);
  }
  onLoadActions() {
    const e = super.onLoadActions();
    return this.layerTree.name = this.name, this.updateDrawState(ue.UP_TO_DATE), e;
  }
  // ----------- LAYER ACTIONS -----------
}
class Ze extends ci {
  esriJson;
  // used as temp var to get around typescript parameter grousing. will be undefined after initLayer()
  // temporarily stores GeoJSON. acts as a nice way for subclasses to parse their random sources to GeoJSON, drop it here,
  // and have the generic initiation code in this file just grab it.
  sourceGeoJson;
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !0, this.isFile = !0, this.dataFormat = te.ESRI_FEATURE, this.layerFormat = me.FEATURE, this.layerIdx = 0, e.identifyMode && e.identifyMode !== X.NONE ? this.identifyMode = e.identifyMode : this.identifyMode = X.HYBRID;
  }
  async reload() {
    if (this.origRampConfig.caching !== !0 && !this.origRampConfig.url) {
      console.error("Attempted to reload file layer from non server source without caching enabled.");
      return;
    }
    await super.reload();
  }
  async onInitiate() {
    if (!this.sourceGeoJson)
      throw new Error("File Layer is missing source data.");
    const e = {
      layerId: this.origRampConfig.id || "",
      targetSR: this.$iApi.geo.map.getSR(),
      colour: this.origRampConfig.colour,
      fieldMetadata: this.origRampConfig.fieldMetadata,
      latField: this.origRampConfig.latField || "",
      lonField: this.origRampConfig.longField || ""
    };
    this.esriJson = await this.$iApi.geo.layer.files.geoJsonToEsriJson(this.sourceGeoJson, e), this.esriLayer = ee(await C.FeatureLayer(this.makeEsriLayerConfig(this.origRampConfig))), this.esriJson = void 0, this.origRampConfig.caching || delete this.origRampConfig.rawData, delete this.sourceGeoJson, await super.onInitiate();
  }
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    const t = super.makeEsriLayerConfig(e), i = "OBJECTID";
    return [
      "source",
      "objectIdField",
      "id",
      "fields",
      "renderer",
      "spatialReference",
      "geometryType"
    ].forEach((a) => {
      t[a] = this.esriJson[a];
    }), this.origRampConfig.nameField ? t.displayField = this.$iApi.geo.attributes.fieldValidator(
      t.fields,
      this.origRampConfig.nameField
    ) || i : t.displayField = i, t.outFields = ["*"], delete t.url, this.configDrawOrder(e, t), e.geomClustering && (t.featureReduction = e.geomClustering), t;
  }
  onLoadActions() {
    const e = super.onLoadActions(), t = async () => {
      this.esriLayer && this.origRampConfig.customRenderer?.type && (this.esriLayer.renderer = await C.RendererFromJson(this.config.customRenderer)), this.layerTree.name = this.name, this.extractLayerMetadata(), this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.attribs.attLoader.updateFieldList(this.fieldList), await this.nameInitializer(
        { nameArcade: this.origRampConfig.nameArcade },
        this.nameField
      );
      const i = this.origRampConfig.tooltipField ? this.$iApi.geo.attributes.fieldValidator(this.fields, this.origRampConfig.tooltipField) : "";
      await this.tooltipInitializer({
        tooltipArcade: this.origRampConfig.tooltipArcade,
        tooltipField: i
      }), this.featureCount = this.esriLayer?.source.length || 0;
    };
    return e.push(t()), e.push(this.viewDefProm.getPromise()), this.filter.getCombinedSql() && Promise.all(e).then(() => {
      this.applySqlFilter();
    }), e;
  }
  // ----------- LAYER ACTIONS -----------
  runIdentify(e) {
    if (!this.canIdentify())
      return [];
    const t = new H(), i = we({
      items: [],
      loading: t.getPromise(),
      loaded: !1,
      errored: !1,
      uid: this.uid,
      layerId: this.id,
      requestTime: Date.now()
    });
    let r = Promise.resolve(), a = Promise.resolve(), o = [], l = [];
    if (this.identifyMode === X.HYBRID || this.identifyMode === X.GEOMETRIC) {
      const n = {
        includeGeometry: !1
      };
      this.geomType !== T.POLYGON && e.geometry.type === T.POINT ? n.filterGeometry = this.$iApi.geo.query.makeClickBuffer(e.geometry, e.tolerance) : n.filterGeometry = e.geometry, n.filterSql = this.getCombinedSqlFilter(), a = this.queryFeatures(n).then((c) => {
        o = c;
      });
    }
    return e.hitTest && (this.identifyMode === X.HYBRID || this.identifyMode === X.SYMBOLIC) && (r = a.then(async () => {
      const n = await e.hitTest;
      l = await Promise.all(
        n.filter(
          (c) => c.layerId === this.id && o.findIndex((u) => c.oid === u.attributes[this.oidField]) === -1
        ).map((c) => c.oid)
      );
    })), Promise.all([r, a]).then(() => {
      o.forEach((n) => {
        i.items.push(vt.makeRawItem(nt.ESRI, n.attributes));
      }), l.forEach((n) => {
        i.items.push(vt.makeOidItem(n, this));
      }), i.loaded = !0, t.resolveMe();
    }).catch(() => {
      i.errored = !0, t.resolveMe();
    }), [i];
  }
  extractLayerMetadata() {
    const e = this.esriLayer;
    if (!e)
      throw new Error("file layer attempted to extract data from esri layer, esri layer did not exist");
    this.supportsFeatures = !0, this.geomType = this.$iApi.geo.geom.clientGeomTypeToRampGeomType(e.geometryType), this.scaleSet.minScale = e.minScale || 0, this.scaleSet.maxScale = e.maxScale || 0, this.extent = this.extent ?? F.fromESRI(e.fullExtent, this.id + "_extent");
    const t = ee(e.fields.slice());
    this.fields = t.map((r) => ({
      name: r.name,
      alias: r.alias,
      type: r.type,
      length: r.length
    })), this.nameField = e.displayField, this.oidField = e.objectIdField, this.renderer = this.$iApi.geo.symbology.makeRenderer(e.renderer, this.fields), this.legend = this.$iApi.geo.symbology.rendererToLegend(this.renderer);
    const i = {
      sourceGraphics: e.source,
      oidField: this.oidField,
      attribs: "*",
      // * as default. layer loader may update after processing config overrides
      batchSize: -1,
      fieldsToTrim: []
      // fields already trimmed at layer initiation
    };
    this.attribs.attLoader = new Fn(this.$iApi, i);
  }
  async getGraphic(e, t) {
    let i;
    if (!t.getGeom && this.attribs.attLoader.isLoaded()) {
      const r = await this.attribs.attLoader.getAttribs();
      i = new Ee(new ze(), "", r.features[r.oidIndex[e]]);
    } else {
      const r = {
        filterOIDs: [e],
        includeGeometry: !!t.getGeom
      }, a = await this.queryFeatures(r);
      if (a.length === 0)
        throw new Error(`Could not find object id ${e}`);
      a.length !== 1 && console.warn("did not get a single result on a query for a specific object id"), i = a[0];
    }
    if (t.getStyle) {
      const r = Ie(this.renderer.getGraphicSymbol(i.attributes));
      i.style = this.$iApi.geo.geom.styleEsriToRamp(r);
    }
    return i;
  }
  /**
   * Requests a set of features for this layer that match the criteria of the options
   * - filterGeometry : a RAMP API geometry to restrict results to
   * - filterSql : a where clause to apply against feature attributes
   * - filterOIDs : an array of Object IDs to filter against (more performant than SQL)
   * - includeGeometry : a boolean to indicate if result features should include the geometry
   * - outFields : a string of comma separated field names. will restrict fields included in the output
   * - sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution
   *
   * @param options {Object} options to provide filters and helpful information.
   * @returns {Promise} resolves with an array of features that satisfy the criteria
   */
  async queryFeatures(e) {
    const t = {
      layer: this,
      ...e
    };
    return this.$iApi.geo.query.geoJsonQuery(t);
  }
  /**
   * Will return an array of object ids for features in the layer that satisfy the conditions of the query options parameter.
   * @param options
   * @returns {Promise} resolving with an array of numbers (object ids)
   */
  async queryOIDs(e) {
    const t = {
      layer: this,
      ...e
    };
    return (await this.$iApi.geo.query.geoJsonQuery(t)).map((r) => r.attributes ? r.attributes[this.oidField] : -1);
  }
  applySqlFilter(e = []) {
    if (!this.esriView) {
      this.noLayerErr();
      return;
    }
    const t = this.filter.getCombinedSql(e);
    C.FeatureFilter({
      where: t
    }).then((i) => {
      Ie(this.esriView).filter = i;
    });
  }
}
class bn extends Ze {
  constructor(e, t) {
    super(e, t), this.layerType = x.GEOJSON;
  }
  async onInitiate() {
    let e;
    const t = Date.now();
    if (this.origRampConfig.rawData)
      e = this.$iApi.geo.layer.files.rawDataJsonParser(this.origRampConfig.rawData, this.origRampConfig.caching);
    else if (this.origRampConfig.url)
      e = await this.$iApi.geo.layer.files.fetchFileData(this.origRampConfig.url, this.layerType);
    else
      throw new Error("GeoJson layer config contains no raw data or url");
    t > this.lastCancel && (this.sourceGeoJson = e, await super.onInitiate());
  }
}
class wn extends Ze {
  constructor(e, t) {
    super(e, t), this.layerType = x.SHAPEFILE;
  }
  async onInitiate() {
    const e = Date.now(), t = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);
    if (e > this.lastCancel) {
      const i = await this.$iApi.geo.layer.files.shapefileToGeoJson(t);
      e > this.lastCancel && (this.sourceGeoJson = i, await super.onInitiate());
    }
  }
}
class An extends Ze {
  constructor(e, t) {
    super(e, t), this.layerType = x.CSV;
  }
  async onInitiate() {
    if (!this.origRampConfig.latField || !this.origRampConfig.longField)
      throw new Error("csv file config missing lat or long field names");
    let e;
    const t = Date.now();
    if (this.origRampConfig.rawData && typeof this.origRampConfig.rawData == "string")
      e = this.origRampConfig.rawData;
    else if (this.origRampConfig.url)
      e = await this.$iApi.geo.layer.files.fetchFileData(this.origRampConfig.url, this.layerType);
    else
      throw new Error("Csv file config contains no raw data or url");
    if (t > this.lastCancel) {
      const i = await this.$iApi.geo.layer.files.csvToGeoJson(e, {
        latfield: this.origRampConfig.latField,
        lonfield: this.origRampConfig.longField
      });
      t > this.lastCancel && (this.sourceGeoJson = i, await super.onInitiate());
    }
  }
}
class En extends Ze {
  constructor(e, t) {
    super(e, t), this.layerType = x.GEOJSONZIPPED;
  }
  async onInitiate() {
    const e = Date.now(), t = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);
    if (e > this.lastCancel) {
      const i = await this.$iApi.geo.layer.files.unzipSingleFile(t);
      e > this.lastCancel && (this.sourceGeoJson = JSON.parse(this.$iApi.geo.layer.files.arbToStr(i)), await super.onInitiate());
    }
  }
}
class xn extends Ze {
  constructor(e, t) {
    super(e, t), this.layerType = x.FLATGEOBUF;
  }
  async onInitiate() {
    const e = Date.now(), t = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);
    if (e > this.lastCancel) {
      const i = await this.$iApi.geo.layer.files.fgbToGeoJson(t, this.expectedTime.fail + 1e3);
      e > this.lastCancel && (this.sourceGeoJson = i, await super.onInitiate());
    }
  }
}
class Sn extends Ze {
  constructor(e, t) {
    super(e, t), this.layerType = x.FLATGEOBUFZIPPED;
  }
  async onInitiate() {
    const e = Date.now(), t = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);
    if (e > this.lastCancel) {
      const i = await this.$iApi.geo.layer.files.unzipSingleFile(t);
      if (e > this.lastCancel) {
        const r = await this.$iApi.geo.layer.files.fgbToGeoJson(i, this.expectedTime.fail + 1e3);
        e > this.lastCancel && (this.sourceGeoJson = r, await super.onInitiate());
      }
    }
  }
}
class In extends ci {
  constructor(e, t) {
    super(e, t), this.dataFormat = te.ESRI_FEATURE, this.supportsIdentify = !0, this.layerType = x.FEATURE, this.layerFormat = me.FEATURE, e.identifyMode && e.identifyMode !== X.NONE ? this.identifyMode = e.identifyMode : this.identifyMode = X.HYBRID;
  }
  async onInitiate() {
    ee(this.esriLayer = await C.FeatureLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
  }
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    const t = super.makeEsriLayerConfig(e);
    return (e.initialFilteredQuery || e.permanentFilteredQuery) && (t.definitionExpression = this.filter.getCombinedSql()), this.configDrawOrder(e, t), e.geomClustering && (t.featureReduction = e.geomClustering), t;
  }
  onLoadActions() {
    const e = Date.now(), t = super.onLoadActions(), i = this.esriLayer.parsedUrl.path, a = this.$iApi.geo.shared.parseUrlIndex(i).index || 0;
    this.layerIdx = a, this.serviceUrl = i;
    const o = async () => {
      let n;
      if (this.esriLayer && this.origRampConfig.customRenderer?.type) {
        const c = await C.RendererFromJson(this.origRampConfig.customRenderer);
        this.esriLayer.renderer = c, n = { customRenderer: c };
      } else
        n = {};
      await this.loadLayerMetadata(n), e > this.lastCancel && (this.layerTree.name = this.name, this.visibility = this.origRampConfig?.state?.visibility ?? this._serverVisibility ?? !0, this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.attribs.attLoader.updateFieldList(this.fieldList), this.attribs.attLoader.updateFieldsToTrim(this.getFieldsToTrim()), await this.nameInitializer(this.origRampConfig, this.nameField), await this.tooltipInitializer(this.origRampConfig));
    }, l = this.$iApi.geo.layer.loadFeatureCount(this.serviceUrl, this.getSqlFilter(le.PERMANENT)).then((n) => {
      e > this.lastCancel && (this.featureCount = n);
    });
    return this.layerTree.layerIdx = a, t.push(l, o()), t;
  }
  // ----------- LAYER ACTIONS -----------
  runIdentify(e) {
    if (!this.canIdentify())
      return [];
    const t = new H(), i = we({
      items: [],
      loading: t.getPromise(),
      loaded: !1,
      errored: !1,
      uid: this.uid,
      layerId: this.id,
      requestTime: Date.now()
    });
    let r = Promise.resolve(), a = Promise.resolve(), o = [];
    if (this.identifyMode === X.HYBRID || this.identifyMode === X.GEOMETRIC) {
      const l = {
        includeGeometry: !1,
        sourceSR: this.sourceSR
      };
      this.geomType !== T.POLYGON && e.geometry.type === T.POINT ? l.filterGeometry = this.$iApi.geo.query.makeClickBuffer(e.geometry, e.tolerance) : l.filterGeometry = e.geometry, l.filterSql = this.getCombinedSqlFilter(), a = this.queryOIDs(l).then((n) => {
        o = n;
      });
    }
    return e.hitTest && (this.identifyMode === X.HYBRID || this.identifyMode === X.SYMBOLIC) && (r = a.then(async () => {
      (await e.hitTest).filter(
        (n) => n.layerId === this.id && o.findIndex((c) => n.oid === c) === -1
      ).forEach((n) => {
        o.push(n.oid);
      });
    })), Promise.all([r, a]).then(() => {
      o.forEach((l) => {
        i.items.push(vt.makeOidItem(l, this));
      }), i.loaded = !0, t.resolveMe();
    }).catch(() => {
      i.errored = !0, t.resolveMe();
    }), [i];
  }
  applySqlFilter(e = []) {
    if (this.layerExists) {
      const t = this.filter.getCombinedSql(e);
      this.esriLayer.definitionExpression = t;
    } else
      this.noLayerErr();
  }
  /**
   * Gets the extent where the provided object id is on the map.
   * Can only be used on feature layers. Not applicable to point geometry.
   *
   * @param objectId the object id to query
   * @returns {Promise} resolves with the extent where the object id is present, rejects if geometry type is invalid or esri layer does not exist
   */
  getGraphicExtent(e) {
    return new Promise((t, i) => {
      if (!this.layerExists)
        this.noLayerErr(), i();
      else if (!["multipoint", "polyline", "polygon"].includes(this.esriLayer.geometryType))
        console.error(`Attempted to query extent for invalid geometry type ${this.esriLayer.geometryType}.`), i();
      else {
        const r = this.attribs.quickCache.getExtent(e);
        r ? t(r) : this.esriLayer.queryExtent({
          objectIds: [e],
          outSpatialReference: this.$iApi.geo.map.getSR().toESRI()
        }).then((a) => {
          const o = F.fromESRI(a.extent);
          this.attribs.quickCache.setExtent(e, o), t(o);
        }).catch(() => {
          console.error(`Extent querying failed for ${e}.`), i();
        });
      }
    });
  }
}
class _n extends Ke {
  // indicates if sublayers can have opacity adjusted
  isDynamic;
  // used to remember state after load
  origState;
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !0, this.supportsSublayers = !0, this.layerType = x.MAPIMAGE, this.layerFormat = me.MAPIMAGE, this.isDynamic = !1, this.hovertips = !1, this.layerTree.layerIdx = -1, this.identifyMode = X.GEOMETRIC;
  }
  async onInitiate() {
    this.esriLayer = ee(await C.MapImageLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
  }
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    const t = super.makeEsriLayerConfig(e);
    return this.origState = {
      visibility: t.visible,
      opacity: t.opacity
    }, t.visible = !1, e.imageFormat && (t.imageFormat = e.imageFormat), t;
  }
  onLoadActions() {
    const e = super.onLoadActions();
    if (!this.layerExists)
      return this.noLayerErr(), e;
    const t = Date.now();
    if (this.layerTree.name = this.name, !this.esriLayer.capabilities.exportMap)
      throw this.$iApi.notify.show(
        fe.WARNING,
        this.$iApi.$i18n.t("layer.noexportmap", {
          name: this.name || this.id
        })
      ), new Error("Service does not support Map Image Layer, Map Export is not enabled");
    this.isDynamic = this.esriLayer.capabilities.exportMap.supportsDynamicLayers, this.extent = this.extent ?? F.fromESRI(this.esriLayer.fullExtent, this.id + "_extent");
    const i = (n) => {
      const c = this.esriLayer?.allSublayers.find((u) => u.id === n);
      if (!c)
        throw new Error("attempt to find map image sublayer failed");
      return c;
    }, r = {};
    this.origRampConfig.sublayers.forEach(
      (n) => {
        r[n.index || 0] = n;
      }
    );
    const a = [], o = (n, c) => {
      const u = n.id, p = r[u];
      if (n.sublayers && n.sublayers.length > 0) {
        const d = (p ? p.name : "") || n.title || "", g = new Lt(u, "", d, !1);
        c.findChildByIdx(u) || c.children.push(g), n.sublayers.reverse().forEach((h) => {
          o(h, g);
        });
      } else {
        this._sublayers[u] || (this._sublayers[u] = new Tn(
          {
            id: this.$iApi.geo.layer.sublayerId(this.id, u),
            index: u,
            // TODO: Revisit once issue #961 is implemented.
            // See https://github.com/ramp4-pcar4/ramp4-pcar4/pull/1045#pullrequestreview-977116071
            // ^ update: issue 961 seems to have nothing to do with this. The PR link implies this
            //   comment is related to the parent state default line below. Best guess is that
            //   issue #1394 was the impacted issue. It appears that the code in the leaf initializer
            //   below is handling things, but leaving this here for now incase someone wants to
            //   dig deeper (or a problem arises)
            layerType: x.SUBLAYER,
            name: p?.name,
            // If the state isn't defined, use the same state as the parent.
            state: p?.state ?? {
              opacity: this.opacity,
              visibility: this.visibility,
              hovertips: this.hovertips,
              identify: this.identify
            },
            extent: p?.extent,
            controls: p?.controls,
            disabledControls: p?.disabledControls,
            initialFilteredQuery: p?.initialFilteredQuery,
            permanentFilteredQuery: p?.permanentFilteredQuery,
            labels: p?.labels
          },
          this.$iApi,
          this
        ));
        const d = this._sublayers[u];
        if (d.isRemoved)
          return;
        if (d.name = p?.name || n.title || "", a.push(d), !c.children.map((g) => g.layerIdx).includes(u)) {
          const g = new Lt(u, d.uid, d.name, !1);
          c.children.push(g);
        }
        d.esriWatches.push(
          be(
            () => n.visible,
            () => {
              this.$iApi.event.emit(E.LAYER_VISIBILITYCHANGE, {
                visibility: d.visibility,
                layer: d
              }), d.parentLayer?.checkVisibility();
            }
          ),
          be(
            () => n.opacity,
            (g) => {
              this.$iApi.event.emit(E.LAYER_OPACITYCHANGE, {
                opacity: g,
                layer: d
              });
            }
          )
        );
      }
    };
    this.origRampConfig.sublayers.forEach((n) => {
      if (!n.cosmetic) {
        const c = i(n.index || 0);
        o(c, this.layerTree);
      }
    });
    const l = a.map(async (n) => {
      const c = i(n.layerIdx), u = r[n.layerIdx];
      if (n.serviceUrl = c.url, n.fetchEsriSublayer(this), await n.initiate(), t < this.lastCancel)
        return;
      const p = {};
      if (n.esriSubLayer && u?.customRenderer?.type) {
        const g = await C.RendererFromJson(u.customRenderer);
        n.esriSubLayer.renderer = g, p.customRenderer = g;
      }
      if (await n.loadLayerMetadata(p), t < this.lastCancel)
        return;
      const d = r[n.layerIdx];
      if (d ? (n.visibility = n.isRemoved ? !1 : d.state?.visibility ?? (this.origState.visibility ? n._serverVisibility ?? this.origState.visibility : this.origState.visibility ?? n._serverVisibility) ?? !0, n.opacity = d.state?.opacity ?? this.origState.opacity ?? 1, this.$iApi.geo.attributes.applyFieldMetadata(n, d.fieldMetadata), n.canModifyLayer || this.$iApi.notify.show(
        fe.WARNING,
        this.$iApi.$i18n.t("layer.filtersdisabled", {
          name: n.name || n.id
        })
      )) : this.$iApi.geo.attributes.applyFieldMetadata(n), n.supportsFeatures) {
        n.updateFieldList(), n.updateFieldsToTrim(), await n.nameInitializer(d, n.nameField);
        const g = await this.$iApi.geo.layer.loadFeatureCount(
          n.serviceUrl,
          n.getSqlFilter(le.PERMANENT)
        );
        t > this.lastCancel && (n.featureCount = g);
      }
    });
    return e.push(...l), this.esriLayer.allSublayers.forEach((n) => {
      !n.sublayers && !a.find((c) => c.layerIdx === n.id) ? (n.visible = !1, n.opacity = 0) : n.sublayers && (n.visible = !0);
    }), this.visibility = this.origState.visibility ?? !0, e;
  }
  updateLayerState(e, t = !1) {
    super.updateLayerState(e, t), this.sublayers.forEach((i) => i.updateLayerState(e, t));
  }
  updateDrawState(e) {
    super.updateDrawState(e), this.sublayers.forEach((t) => t.updateDrawState(e));
  }
  // ----------- LAYER ACTIONS -----------
  runIdentify(e) {
    if (!this.canIdentify())
      return [];
    e.sublayerIds && (e.sublayerIds = e.sublayerIds.map((r) => typeof r == "number" ? this.layerTree?.findChildByIdx(r)?.uid : r));
    const t = e.sublayerIds ? this._sublayers.filter((r) => e.sublayerIds?.includes(r.uid)) : this._sublayers.filter((r) => r.canIdentify());
    if (t.length === 0)
      return [];
    let i;
    return e.geometry.type === T.POINT && (i = this.$iApi.geo.query.makeClickBuffer(e.geometry, e.tolerance)), t.map((r) => {
      const a = new H(), o = {}, l = we({
        items: [],
        loading: a.getPromise(),
        loaded: !1,
        errored: !1,
        uid: r.uid,
        layerId: r.id,
        requestTime: Date.now()
      });
      return r.geomType !== T.POLYGON && i ? o.filterGeometry = i : o.filterGeometry = e.geometry, o.filterSql = r.getCombinedSqlFilter(), o.sourceSR = r.sourceSR, r.queryOIDs(o).then((n) => {
        n.forEach((c) => {
          l.items.push(vt.makeOidItem(c, r));
        }), l.loaded = !0, a.resolveMe();
      }).catch(() => {
        l.errored = !0, a.resolveMe();
      }), l;
    });
  }
}
class Tn extends ci {
  constructor(e, t, i) {
    if (super(e, t), this.layerType = x.SUBLAYER, this.layerFormat = me.MAPIMAGE, this.isSublayer = !0, this.layerIdx = e.index, this.parentLayer = i, this.isSystem = i.isSystem, this.dataFormat = te.ESRI_FEATURE, this.supportsFeatures = !0, this.hovertips = !1, this.url = this.parentLayer?.url, this.canReload = !!(this.url || this.origRampConfig.caching), !i.esriLayer)
      throw new Error("Map Image Layer with no internal esri layer encountered in sublayer creation");
    this.fetchEsriSublayer(i), (e.initialFilteredQuery || e.permanentFilteredQuery) && this.applySqlFilter();
  }
  /**
   * Set the ESRI sublayer using the parent's sublayer list
   *
   * @param {MapImageLayer} parent: Parent MapImageLayer object
   */
  fetchEsriSublayer(e) {
    if (!e.esriLayer) {
      console.error("Attempted to fetch the ESRI sublayer when parent has no ESRI layer");
      return;
    }
    this.esriSubLayer = ee(
      e.esriLayer.allSublayers.find((t) => t.id === this.layerIdx)
    );
  }
  /**
   * Load actions for a MapImage sublayer
   */
  onLoadActions() {
    return this.layerTree = this.parentLayer.getLayerTree().findChildByUid(this.uid), this.layerTree.name = this.name, this.layerTree.layerIdx = this.layerIdx, this.identify = this.config.state.identify != null ? this.config.state.identify : this.supportsIdentify, [];
  }
  /**
   * Initiate this sublayer
   *
   * This is called after the parent layer is initiated
   */
  async onInitiate() {
    this.initiationState = N.INITIATED;
    const e = this.labelVizOverride();
    e !== void 0 && (this.labelVisibility = e);
  }
  async reload() {
    if (!this.$iApi.geo.map.esriMap) {
      console.error("Attempted layer reload when no map exists");
      return;
    }
    this.parentLayer?.reload();
  }
  cancelLoad() {
    this.parentLayer?.cancelLoad();
  }
  /**
   * Indicates if the Esri map sublayer and the parent's Esri map layer exist.
   */
  get layerExists() {
    return !!(this.parentLayer?.layerExists && this.esriSubLayer && this.initiationState === N.INITIATED);
  }
  /**
   * Returns the visibility of the sublayer.
   *
   * @function getVisibility
   * @returns {Boolean} visibility of the sublayer
   */
  get visibility() {
    return this.layerExists ? this.esriSubLayer.visible : !1;
  }
  /**
   * Applies visibility to sublayer.
   *
   * @function setVisibility
   * @param {Boolean} value the new visibility setting
   */
  set visibility(e) {
    this.layerExists ? this.esriSubLayer.visible = e : this.noLayerErr();
  }
  /**
   * Returns the opacity of the sublayer.
   *
   * @function getOpacity
   * @returns {Boolean} opacity of the sublayer
   */
  get opacity() {
    return this.layerExists ? this.esriSubLayer.opacity : 0;
  }
  /**
   * Applies opacity to sublayer.
   *
   * @function setOpacity
   * @param {Boolean} value the new opacity setting
   */
  set opacity(e) {
    if (!this.layerExists) {
      this.noLayerErr();
      return;
    }
    this.parentLayer.isDynamic || console.warn(
      `Opacity of a Map Image Sublayer was set. The service does not support sublayer opacity. LayerId ${this.id}`
    ), this.esriSubLayer.opacity = e;
  }
  /**
   * Get the mouse tolerance in pixels for this sublayer's parent layer
   *
   * @returns {number} the mouse tolerance of the parent layer
   */
  get mouseTolerance() {
    return this.layerExists ? this.parentLayer.mouseTolerance : 0;
  }
  /**
   * Set the mouse tolerance for this sublayer's parent layer in pixels
   *
   * @param {number} tolerance the new mouse tolerance
   */
  set mouseTolerance(e) {
    this.layerExists ? this.parentLayer.mouseTolerance = e : this.noLayerErr();
  }
  /**
   * Get the touch tolerance in pixels for this sublayer's parent layer
   *
   * @returns {number} the touch tolerance of the parent layer
   */
  get touchTolerance() {
    return this.layerExists ? this.parentLayer.touchTolerance : 0;
  }
  /**
   * Set the touch tolerance in pixels for this sublayer's parent layer
   *
   * @param {number} tolerance the new touch tolerance of the parent layer
   */
  set touchTolerance(e) {
    this.layerExists ? this.parentLayer.touchTolerance = e : this.noLayerErr();
  }
  applySqlFilter(e = []) {
    if (this.parentLayer?.layerExists && this.esriSubLayer)
      if (this.supportsFeatures) {
        const t = this.filter.getCombinedSql(e);
        this.esriSubLayer.definitionExpression = t;
      } else
        console.error(
          "Attempted to apply an SQL filter to a sublayer that does not support it (likely Raster datatype)"
        );
    else
      this.noLayerErr();
  }
  /**
   * Provides the spatial reference of the parent MIL.
   *
   * @returns {SpatialReference} the layer spatial reference in RAMP API format
   */
  getSR() {
    if (this.parentLayer?.esriLayer) {
      const e = this._parentLayer?.esriLayer?.spatialReference;
      return e ? _.fromESRI(e) : _.latLongSR();
    } else
      return this.noLayerErr(), _.latLongSR();
  }
  /**
   * A utility method to allow a parent layer to request this layer to
   * update its internal attribute loader after field data has been
   * properly processed.
   * Generally should only be called internally.
   */
  updateFieldList() {
    this.attribs.attLoader.updateFieldList(this.fieldList);
  }
  /**
   * A utility method to allow a parent layer to request this layer to
   * update its fields to be trimmed after field data is processed.
   * Generally should only be called internally.
   */
  updateFieldsToTrim() {
    this.attribs.attLoader.updateFieldsToTrim(this.getFieldsToTrim());
  }
  /**
   * Visibility of labels on this layer
   */
  get labelVisibility() {
    return this.layerExists ? this.esriSubLayer.labelsVisible : !1;
  }
  set labelVisibility(e) {
    this.layerExists ? this.esriSubLayer.labelsVisible = e : this.noLayerErr();
  }
  /**
   * Does any config override calculating for label visibility.
   *
   * @private
   * @returns {boolean | undefined} undefined if no overrides, otherwise the override value
   */
  labelVizOverride() {
    let e = this.origRampConfig.labels?.visible;
    if (e !== void 0 || (e = this.$iApi.geo.map.labelsDefault?.visible, e !== void 0))
      return e;
  }
}
class Ln extends Ke {
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !1, this.layerType = x.OSM, this.layerFormat = me.OSM, this.dataFormat = te.OSM_TILE, this.supportsFeatures = !1;
  }
  async onInitiate() {
    this.esriLayer = ee(await C.OpenStreetMapLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
  }
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    return super.makeEsriLayerConfig(e);
  }
  onLoadActions() {
    const e = super.onLoadActions();
    this.layerTree.name = this.name;
    const t = this.$iApi.geo.symbology.generatePlaceholderSymbology("O", "#03fc4e"), i = {
      uid: this.$iApi.geo.shared.generateUUID(),
      label: "OpenStreetMap",
      // product name, same in Fr
      svgcode: t.svgcode,
      esriStandard: !0,
      drawPromise: Promise.resolve()
    };
    return this.legend.push(i), e;
  }
}
class Rn extends Ke {
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !1, this.layerType = x.IMAGERY, this.layerFormat = me.IMAGERY, this.dataFormat = te.ESRI_RASTER;
  }
  async onInitiate() {
    this.esriLayer = ee(await C.ImageryLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
  }
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    return super.makeEsriLayerConfig(e);
  }
  onLoadActions() {
    const e = super.onLoadActions();
    this.layerTree.name = this.name;
    const t = Date.now(), i = this.$iApi.geo.symbology.mapServerToLocalLegend(this.origRampConfig.url).then((r) => {
      t > this.lastCancel && (this.legend = r);
    });
    return e.push(i), e;
  }
}
class $n extends Ke {
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !1, this.layerType = x.TILE, this.layerFormat = me.TILE, this.dataFormat = te.ESRI_TILE;
  }
  async onInitiate() {
    this.esriLayer = ee(await C.TileLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
  }
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    return super.makeEsriLayerConfig(e);
  }
  onLoadActions() {
    const e = super.onLoadActions(), t = Date.now();
    this.layerTree.name = this.name;
    const i = this.$iApi.geo.symbology.mapServerToLocalLegend(this.origRampConfig.url).then((r) => {
      t > this.lastCancel && (this.legend = r);
    });
    return e.push(i), e.push(this.checkProj()), e;
  }
  /**
   * Check if the layer's projection matches the current basemap's.
   * If they do not match the layer will enter the error state and the user will receive a warning notification
   * If the layers do match and the layer was previously in the error state, it will reload.
   */
  checkProj() {
    const e = this.getSR(), i = this.$iApi.geo.map.getSR().isEqual(e);
    if (this.layerState === q.LOADED && !i)
      this.$iApi.notify.show(
        fe.WARNING,
        this.$iApi.$i18n.t("layer.mismatch", {
          name: this.name || this.id
        })
      ), this.onError();
    else if (this.layerState === q.ERROR && i)
      this.reload();
    else if (this.layerState !== q.ERROR && !i)
      return this.$iApi.notify.show(
        fe.WARNING,
        this.$iApi.$i18n.t("layer.mismatch", {
          name: this.name || this.id
        })
      ), Promise.reject();
    return Promise.resolve();
  }
}
class Cn extends Ke {
  sublayerNames;
  mimeType;
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !0, this.layerType = x.WMS, this.layerFormat = me.WMS, this.mimeType = e.featureInfoMimeType || "", this.sublayerNames = [], this.dataFormat = te.OGC_RASTER, this.identifyMode = X.GEOMETRIC;
  }
  async onInitiate() {
    this.esriLayer = ee(await C.WMSLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
  }
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    const t = super.makeEsriLayerConfig(e), i = e.sublayers;
    this.sublayerNames = i.map((a) => a.id || "error_no_wms_id");
    const r = i.map((a) => a.currentStyle).join();
    return t.customParameters = {
      styles: r
    }, e.url.indexOf("/geomet") !== -1 && (t.customParameters.layers = i[0].id), t;
  }
  onLoadActions() {
    const e = super.onLoadActions();
    this.layerTree.name = this.name;
    const t = (i) => {
      let r = !1;
      return i.forEach((a) => {
        this.sublayerNames.indexOf(a.name) > -1 || a.sublayers && a.sublayers.length > 0 && t(a.sublayers) ? r = !0 : a.visible = !1;
      }), r;
    };
    return this.layerExists ? t(this.esriLayer.sublayers) : this.noLayerErr(), this.loadSymbology(), e;
  }
  // ----------- LAYER ACTIONS -----------
  canIdentify() {
    return super.canIdentify();
  }
  /**
   * Run a getFeatureInfo on a WMS layer, return the result as a promise.
   * Options: specs to be added once finalized
   *
   * @param {Object} options     additional arguemets, see above.
   * @returns {Object} an object with identify results array and identify promise resolving when identify is complete; if an empty object is returned, it will be skipped
   */
  runIdentify(e) {
    if (e.geometry.type !== T.POINT)
      throw new Error("a point must be used for WMS Identify");
    if (!this.canIdentify())
      return [];
    const t = new H(), i = we({
      items: [],
      loading: t.getPromise(),
      loaded: !1,
      errored: !1,
      uid: this.uid,
      layerId: this.id,
      requestTime: Date.now()
    });
    return this.getFeatureInfo(this.sublayerNames, e.geometry, this.mimeType).then((r) => {
      if (r) {
        let a = !0, o;
        typeof r != "string" ? o = nt.JSON : r.indexOf("Search returned no results") === -1 && r !== "" ? o = nt.TEXT : (a = !1, o = nt.UNKNOWN), a && i.items.push(vt.makeRawItem(o, r));
      }
      i.loaded = !0, t.resolveMe();
    }).catch(() => {
      i.errored = !0, t.resolveMe();
    }), [i];
  }
  /**
   * Add a WMS layer parameter, maybe even refresh the layer
   *
   * @function setCustomParameter
   * @param {String} key name of the key to be created or updated
   * @param {String} value value of the key
   * @param {Boolean} forceRefresh show the new fancy version of the layer or not
   */
  setCustomParameter(e, t, i = !0) {
    this.layerExists ? (this.esriLayer.customLayerParameters || (this.esriLayer.customLayerParameters = {}), this.esriLayer.customLayerParameters[e] = t, i && this.esriLayer.refresh()) : this.noLayerErr();
  }
  /**
   * Handles click events for WMS layers (makes a WMS GetFeatureInfo call behind the scenes).
   *
   * @param {Array} layerList a list of strings identifying the WMS sublayers to be queried
   * @param {Point} point a RAMP Point indicating where the user clicked
   * @param {String} mimeType the format to be requested for the response
   * @returns {Promise} a promise which resolves with the GetFeatureInfo response
   */
  getFeatureInfo(e, t, i) {
    const r = this.$iApi.geo.map, a = this.esriLayer;
    if (!r.esriView)
      throw new Error("WMS get feature, no map view exists. Cannot derive click coords");
    if (!a)
      throw this.noLayerErr(), new Error("wms get feature failed, no layer");
    let o, l;
    const n = r.getExtent(), c = a.spatialReferences, u = e.join(","), p = r.esriView.toScreen(t.toESRI()), d = Math.floor(p.x), g = Math.floor(p.y), y = {
      "application/json": "json",
      "text/html": "text",
      "text/plain": "text"
    }[i] || "text", w = r.getSR();
    w.wkid ? o = w.wkid : (o = 4326, console.error("Map is likely in a WKT projection. WMS Identify request will likely fail.")), c && c.length > 1 ? c.indexOf(o) === -1 && (w.latestWkid && c.indexOf(w.latestWkid) > -1 ? o = w.latestWkid : console.error(
      "WMS service does not support the maps projection. Identify request will likely fail."
    )) : console.error("No supported wkid/epsg code found for WMS service. Identify request will likely fail."), a.version === "1.3" || a.version === "1.3.0" ? (l = {
      CRS: "EPSG:" + o,
      I: d,
      J: g,
      STYLES: "",
      FORMAT: a.imageFormat
    }, this.$iApi.geo.layer.ogc.reversedAxisWKIDs().indexOf(o) > -1 && (l.BBOX = `${n.ymin},${n.xmin},${n.ymax},${n.xmax}`)) : l = { SRS: "EPSG:" + o, X: d, Y: g }, Object.prototype.hasOwnProperty.call(l, "BBOX") || (l.BBOX = `${n.xmin},${n.ymin},${n.xmax},${n.ymax}`);
    const b = {
      SERVICE: "WMS",
      REQUEST: "GetFeatureInfo",
      VERSION: a.version,
      WIDTH: r.getPixelWidth(),
      HEIGHT: r.getPixelHeight(),
      QUERY_LAYERS: u,
      LAYERS: u,
      INFO_FORMAT: i
    }, $ = a.customLayerParameters;
    return $ && Object.keys($).forEach((L) => {
      L.toLowerCase() !== "styles" && (b[L] = $[L]);
    }), Object.keys(b).forEach((L) => l[L] = b[L]), Ve(a.url.split("?")[0], {
      query: l,
      responseType: y
    });
  }
  /**
   * Finds the appropriate legend URLs for WMS layers.
   *
   * @param {Array} layerList a list of objects identifying the WMS layers to be queried
   * @returns {Array} a list of strings containing URLs for specified layers (order is preserved)
   */
  getLegendUrls(e) {
    if (!this.layerExists)
      return this.noLayerErr(), [];
    const t = /* @__PURE__ */ new Map();
    this.esriLayer.allSublayers.forEach((r) => {
      r.visible && (r.legendUrl && this.origRampConfig.sublayers?.forEach((a) => {
        if (a.id && a.currentStyle && a.id === r.name) {
          const o = new Rt(r.legendUrl);
          "STYLE" in o.queryMap && o.queryMap.STYLE !== a.currentStyle && (r.legendUrl = o.updateQuery({
            STYLE: a.currentStyle
          }));
        }
      }), t.set(r.name, r.legendUrl));
    });
    const i = e.map(
      (r) => r.styleLegends && r.currentStyle ? r.styleLegends.find((a) => a.name === r.currentStyle).url : void 0
    );
    return i.forEach((r, a) => {
      r || (i[a] = t.get(e[a].id));
    }), i;
  }
  /**
   * Searches for a layer title defined by a wms.
   * @function getWMSLayerTitle
   * @private
   * @param  {String} wmsLayerId   layer id as defined in the wms (i.e. not wmsLayer.id)
   * @return {String}              layer title as defined on the service, '' if no title defined
   */
  getWMSLayerTitle(e) {
    if (!this.esriLayer)
      return "";
    let t;
    return this.esriLayer.allSublayers.some((i) => i.name === e ? (t = i.title, !0) : !1), t || "";
  }
  /**
   * Download or refresh the internal symbology for the sublayer.
   *
   * @function loadSymbology
   */
  loadSymbology() {
    const e = Date.now(), t = this.config.sublayers, i = this.getLegendUrls(
      t.map((r) => ({
        id: r.id,
        styleLegends: r.styleLegends,
        currentStyle: r.currentStyle
      }))
    ).map((r, a) => {
      const o = t[a].name || this.getWMSLayerTitle(t[a].id) || t[a].id, l = {
        uid: this.$iApi.geo.shared.generateUUID(),
        label: o,
        svgcode: "",
        esriStandard: !1,
        // is an image
        drawPromise: this.$iApi.geo.symbology.generateWMSSymbology(r).then((n) => {
          e > this.lastCancel && (l.svgcode = n.svgcode, l.imgHeight = n.imgHeight, l.imgWidth = n.imgWidth);
        })
      };
      return l;
    });
    this.legend = i;
  }
}
class On extends Ze {
  constructor(e, t) {
    super(e, t), this.layerType = x.WFS;
  }
  async onInitiate() {
    const e = Date.now(), t = new Rt(this.config.url), { offset: i, limit: r } = t.queryMap, a = await this.$iApi.geo.layer.ogc.loadWfsData(
      this.config.url,
      -1,
      parseInt(i) || 0,
      parseInt(r) || 1e3,
      void 0,
      this.config.xyInAttribs
    );
    e > this.lastCancel && (this.sourceGeoJson = a, await super.onInitiate());
  }
}
class rs extends ss {
  /**
   * This represents a file content transformed to our common consumption format.
   * The implementation classes will handle that transformation, and common routines in this class can process
   * it onInitiate.
   */
  sourceJson;
  attribs;
  // since this is a mapless layer, only applies to visibility of layer in the grid
  _visibility;
  // ----------- LAYER CONSTRUCTION AND INITIALIZAION -----------
  constructor(e, t) {
    super(e, t), this.dataFormat = te.ESRI_FEATURE, this.layerFormat = me.NOLAYER, this.drawState = ue.NOT_VISUAL, this.attribs = new as(), this.supportsFeatures = !0, this.mapLayer = !1, this.isFile = !1, this._visibility = e.state?.visibility ?? !0, this.expectedTime.draw = 0;
  }
  async onInitiate() {
    if (this.sourceJson) {
      const e = this.sourceJson;
      if (e.data.length === 0 || e.fields.length === 0)
        throw new Error("Data layer with no columns or now rows.");
      const t = e.fields.slice(), i = e.data[0].slice(), r = / /gi;
      this.fields = t.map((c, u) => {
        let p = "", d = c;
        c.indexOf(" ") > -1 && (p = c, d = c.trim().replace(r, "-"), e.fields[u] = d);
        const g = this.$iApi.geo.layer.files.inferType(i[u]);
        return {
          name: d,
          alias: p,
          type: g,
          length: g === Ce.STRING ? 256 : void 0
        };
      }), this.oidField = "rampOID", this.fields.push({ name: this.oidField, type: Ce.OID }), e.fields.push(this.oidField), e.data.forEach((c, u) => c.push(u + 1)), this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.fieldList = "*";
      const a = {
        batchSize: -1,
        // mandatory to avoid easy bugs in server process; not used here
        sourceDataJson: e,
        oidField: this.oidField,
        attribs: "*",
        // even required?
        fieldsToTrim: this.getFieldsToTrim()
      };
      this.attribs.attLoader = new Dn(this.$iApi, a), await this.attribs.attLoader.getAttribs(), this.featureCount = e.data.length;
      const o = this.origRampConfig.nameField, n = {
        nameField: o ? this.$iApi.geo.attributes.fieldValidator(this.fields, o) : "",
        nameArcade: this.origRampConfig.nameArcade
      };
      await this.nameInitializer(n, ""), this.sourceJson = void 0, this.origRampConfig.caching || delete this.origRampConfig.rawData;
    } else
      throw new Error("Attempted to initiate file based data layer, sourceJson is missing");
  }
  async terminate() {
    await super.terminate();
  }
  async reload() {
    this.$iApi.event.emit(E.LAYER_RELOAD_START, this), await this.terminate(), await this.initiate(), this.layerState !== q.ERROR && this.onLoad(), setTimeout(() => {
      this.$iApi.event.emit(E.LAYER_RELOAD_END, this);
    }, 300);
  }
  onLoadActions() {
    const e = super.onLoadActions();
    return this.legend = [
      {
        uid: this.$iApi.geo.shared.generateUUID(),
        label: "",
        svgcode: "",
        esriStandard: !0,
        visibility: !0,
        lastVisbility: !0,
        drawPromise: this.getIcon(0).then((t) => {
          this.legend[0].svgcode = t;
        })
      }
    ], e;
  }
  // ----------- Attribute Methods -----------
  /**
   * Invokes the process to get the full set of attribute values for the layer.
   * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
   *
   * @returns {Promise} resolves with set of attribute values
   */
  getAttributes() {
    return this.attribs.attLoader.getAttribs();
  }
  getTabularAttributes() {
    return this.$iApi.geo.attributes.generateTabularAttributes(this, this.attribs);
  }
  async getGraphic(e, t) {
    let i = {};
    if (this.attribs.attLoader.isLoaded()) {
      const r = await this.attribs.attLoader.getAttribs();
      i = r.features[r.oidIndex[e]];
    } else
      throw new Error("Non ESRI data layer did not have attributes populated.");
    return new Ee(new ze(), "", i);
  }
  async getIcon(e) {
    return '<svg id="SvgjsSvg1012" width="32" height="32" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 32 32">                      <defs id="SvgjsDefs1013"></defs>                      <rect id="SvgjsRect1014" width="28"  height="28" x="2" y="2" fill="#2e8b57"></rect>                      <text id="SvgjsText1015" font-family="Roboto" font-size="23" fill="#ffffff" font-weight="bold" x="7.6875" y="-6.40000057220459" svgjs:data="{&quot;leading&quot;:&quot;1.3&quot;}">                          <tspan id="SvgjsTspan1016" class="grid-icons" dy="29.900000000000002" x="7.6875" svgjs:data="{&quot;newLined&quot;:true}">D</tspan>                      </text>                </svg>';
  }
  async getFilterOIDs(e = [], t = void 0) {
  }
  // Since data layers (except table layers) do not have asynch attribute loading, there is nothing to do in the following methods.
  // However, we have it there just so that calling this method for a giant list is peaceful, and filtering
  // by layer type is not required.
  abortAttributeLoad() {
  }
  attribLoadAborted() {
    return !1;
  }
  clearFeatureCache() {
  }
  downloadedAttributes() {
    return this.featureCount;
  }
  get layerExists() {
    return this.isLoaded;
  }
  /**
   * Returns the visibility of the layer data
   *
   * @returns {Boolean} visibility of the layer data
   */
  get visibility() {
    return this._visibility;
  }
  /**
   * Applies visibility to layer data.
   *
   * @param {Boolean} value the new visibility setting
   */
  set visibility(e) {
    this._visibility !== e && (this._visibility = e, this.$iApi.event.emit(E.LAYER_VISIBILITYCHANGE, {
      visibility: e,
      layer: this
    }));
  }
}
class kn extends rs {
  constructor(e, t) {
    super(e, t), this.layerType = x.DATAJSON;
  }
  async onInitiate() {
    const e = Date.now();
    let t;
    if (this.origRampConfig.rawData)
      t = this.$iApi.geo.layer.files.rawDataJsonParser(this.origRampConfig.rawData, this.origRampConfig.caching);
    else if (this.origRampConfig.url)
      t = await this.$iApi.geo.layer.files.fetchFileData(this.origRampConfig.url, this.layerType);
    else
      throw new Error("Json Data layer config contains no raw data or url");
    e > this.lastCancel && (this.sourceJson = t, await super.onInitiate());
  }
}
class Mn extends rs {
  // TODO if we add AQL filtering to the file based data layers, this prop and the appropriate initializers/methods should migrate to DataLayer
  filter;
  serviceUrl;
  constructor(e, t) {
    super(e, t), this.layerType = x.DATATABLE, this.serviceUrl = e.url, this.filter = new ji(e.permanentFilteredQuery || "", e.initialFilteredQuery || "");
  }
  async onInitiate() {
  }
  onLoadActions() {
    const e = super.onLoadActions(), t = Date.now(), r = this.$iApi.geo.shared.parseUrlIndex(this.serviceUrl).index || 0, a = this.$iApi.geo.layer.loadLayerMetadata(this.serviceUrl).then((l) => {
      if (t < this.lastCancel)
        return;
      this.name || (this.name = l.name), this.layerTree.name = this.name, this.oidField = l.objectIdField, this.fields = l.fields, this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.nameInitializer(this.origRampConfig, l.displayField);
      const n = {
        // version number is only provided on 10.0 SP1 servers and up.
        // servers 10.1 and higher support the query limit flag
        supportsLimit: (l.currentVersion || 1) >= 10.1,
        serviceUrl: this.serviceUrl,
        oidField: this.oidField,
        batchSize: -1,
        attribs: this.fieldList,
        permanentFilter: this.getSqlFilter(le.PERMANENT),
        fieldsToTrim: this.getFieldsToTrim()
      };
      this.attribs.attLoader = new os(this.$iApi, n), this.attribs.quickCache = new ns(this.geomType);
    }), o = this.$iApi.geo.layer.loadFeatureCount(this.serviceUrl, this.getSqlFilter(le.PERMANENT)).then((l) => {
      t > this.lastCancel && (this.featureCount = l);
    });
    return this.layerTree.layerIdx = r, e.push(a, o), e;
  }
  async getGraphic(e) {
    let t = {};
    const i = this.attribs.quickCache.getAttribs(e);
    if (i)
      t = i;
    else if (this.attribs.attLoader.isLoaded()) {
      const a = await this.attribs.attLoader.getAttribs();
      t = a.features[a.oidIndex[e]];
    } else {
      const a = {
        oid: e,
        serviceUrl: this.serviceUrl,
        includeGeometry: !1,
        attribs: this.fieldList
      }, o = await this.$iApi.geo.attributes.loadSingleFeature(a);
      this.attribs.quickCache.setAttribs(e, o.attributes), t = o.attributes;
    }
    return new Ee(new ze(), "", t);
  }
  abortAttributeLoad() {
    this.attribs.attLoader.abortAttribLoad();
  }
  clearFeatureCache() {
    this.attribs.clearAll();
  }
  downloadedAttributes() {
    return this.isLoaded ? this.attribs.attLoader.loadCount() : 0;
  }
  attribLoadAborted() {
    return this.isLoaded ? this.attribs.attLoader.isLoadAborted() : !1;
  }
  // -- filter stuff --
  // A lot of overlap & duplication with AttribLayer. Currently don't have a good sharing mechansim.
  // Most of these methods are small so abstracting to geo.attribs seems equally pointless.
  // Making a common class between data and attribute layers adds in other duplications for the non-attribute-layer stuff.
  // This set of methods is more streamlined since there are no layer/extent stuff to deal with.
  setSqlFilter(e, t) {
    const i = this.filter.getSql(e);
    t !== i && (this.filter.setSql(e, t), this.$iApi.event.emit(E.FILTER_CHANGE, {
      uid: this.uid,
      filterKey: e
    }));
  }
  getSqlFilter(e) {
    return this.filter.getSql(e);
  }
  /**
   * Returns a SQL WHERE condition that is combination of active filters.
   *
   * @method getCombinedSqlFilter
   * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
   * @returns {String} all non-excluded sql statements connected with AND operators.
   */
  getCombinedSqlFilter(e) {
    return this.filter.getCombinedSql(e);
  }
  async getFilterOIDs(e = []) {
    const t = this.filter.getCombinedSql(e);
    if (!t)
      return;
    const i = this.filter.sqlActiveFilters(e);
    let r = this.filter.getCache(i, !1);
    if (!r) {
      const a = {
        filterSql: t,
        includeGeometry: !1
      };
      r = this.queryOIDs(a), this.filter.setCache(r, i, !1);
    }
    return r;
  }
  /**
   * Will return an array of object ids for features in the layer that satisfy the conditions of the query options parameter.
   * @param options {Object} options to provide filters and helpful information.
   * @returns {Promise} resolves with an array of numbers (object ids)
   */
  queryOIDs(e) {
    const t = {
      url: this.serviceUrl,
      ...e
    };
    return this.$iApi.geo.query.arcGisServerQueryIds(t);
  }
  /**
   * Requests a set of features for this layer that match the criteria of the options
   * - filterGeometry : a RAMP API geometry to restrict results to
   * - filterSql : a where clause to apply against feature attributes
   * - includeGeometry : a boolean to indicate if result features should include the geometry
   * - sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution
   *
   * @param options {Object} options to provide filters and helpful information.
   * @returns {Promise} resolves in an array of object ids and promises resolving in each feature
   */
  async queryFeaturesDiscrete(e) {
    return (await this.queryOIDs(e)).map((i) => ({
      oid: i,
      graphic: this.getGraphic(i)
    }));
  }
  /**
   * Requests a set of features for this layer that match the criteria of the options
   * - filterSql : a where clause to apply against feature attributes
   * - outFields : a string of comma separated field names. will restrict fields included in the output
   *
   * @param options {Object} options to provide filters and helpful information.
   * @returns {Promise} resolves with an array of features that satisfy the criteria
   */
  async queryFeatures(e) {
    const t = await this.queryFeaturesDiscrete(e);
    return Promise.all(t.map((i) => i.graphic));
  }
}
const Pn = /* @__PURE__ */ new Map([
  ["integer", "number"],
  ["small-integer", "number"],
  ["big-integer", "number"],
  ["single", "number"],
  ["double", "number"],
  ["long", "number"],
  ["oid", "number"],
  ["string", "text"],
  ["geometry", "geometry"],
  ["date", "date"]
]);
class Nn extends J {
  /**
   * Will populate the object id index for an attribute set.
   *
   * @param attSet attribute set that has features populated
   * @param oidField name of the object id field in the attribute set
   */
  oidIndexer(e, t) {
    e.features.forEach((i, r) => {
      e.oidIndex[i[t]] = r;
    });
  }
  /**
   * Will load an attribute set from an ArcGIS Server, recursively batching to work around maximum result limits.
   *
   * @param details defines the parameters for what to load
   * @param controller the controller which provides asyncronous hooks into the load, including loaded count and ability to abort
   */
  async arcGisBatchLoad(e, t) {
    if (t.loadAbortFlag)
      return [];
    const i = e.permanentFilter ? ` AND ${e.permanentFilter}` : "", r = {
      query: {
        where: `${e.oidField}>${e.maxId}${i}`,
        outFields: e.attribs,
        orderByFields: e.oidField,
        returnGeometry: "false",
        f: "json"
      }
    }, [a, o] = await Ae(
      Ve(e.serviceUrl + "/query", r)
    );
    if (!o)
      return console.error(`ArcGIS batch load error: ${e.serviceUrl}`, a), Promise.reject(new Error(`ArcGIS batch load error: ${e.serviceUrl}`));
    if (!o.data || !o.data.features)
      return console.error(`ArcGIS batch load gave no data/features: ${e.serviceUrl}`), Promise.reject(new Error(`ArcGIS batch load gave no data/features: ${e.serviceUrl}`));
    let l = o.data.features;
    const n = l.length;
    if (n > 0) {
      t.loadedCount += n;
      let c;
      if (e.supportsLimit ? c = o.data.exceededTransferLimit : (e.batchSize === -1 && (e.batchSize = n), c = n >= e.batchSize), l = this.trimFeatureSetAttributes(l, e.fieldsToTrim ?? []), c) {
        e.maxId = l[n - 1].attributes[e.oidField];
        const u = await this.arcGisBatchLoad(e, t);
        return t.loadAbortFlag ? [] : l.concat(u);
      } else
        return t.loadAbortFlag ? [] : l;
    } else
      return [];
  }
  /**
   * Will load an attribute set from an ArcGIS Server layer source.
   *
   * @param details defines the parameters for what to load
   * @param controller the controller which provides asyncronous hooks into the load, including loaded count and ability to abort
   */
  async loadArcGisServerAttributes(e, t) {
    e.maxId = -1, e.batchSize = -1;
    const r = {
      features: (await this.arcGisBatchLoad(e, t)).map((a) => a.attributes),
      oidIndex: {}
    };
    return this.oidIndexer(r, e.oidField), t.loadIsDone = !0, r;
  }
  /**
   * Will generate an attribute set from a feature layer with local data (i.e. a file layer).
   *
   * @param details defines the parameters for what to load
   * @param controller the controller which provides asyncronous hooks into the load, including loaded count and ability to abort
   */
  async loadGraphicsAttributes(e, t) {
    if (!e.sourceGraphics)
      throw new Error("No .sourceGraphics provided to file layer attribute loader");
    const r = {
      features: e.sourceGraphics.map((a) => Ie(a).attributes).toArray(),
      oidIndex: {}
    };
    return this.oidIndexer(r, e.oidField), t.loadIsDone = !0, t.loadedCount = r.features.length, r;
  }
  /**
   * Will generate an attribute set from a compact json object. This is our base format for
   * DataLayer sources that are not hosted on ArcGIS server. Provided sourceDataJson on the details
   * parameter has already been cleaned and has object ids inserted.
   *
   * @param details defines the parameters for what to load
   * @param controller the controller which provides asyncronous hooks into the load, including loaded count and ability to abort
   */
  async loadCompactJsonAttributes(e, t) {
    if (!e.sourceDataJson)
      throw new Error("No .sourceDataJson provided to file data-layer attribute loader");
    const i = e.sourceDataJson.fields, r = e.fieldsToTrim ?? [], o = {
      features: e.sourceDataJson.data.map((l) => {
        const n = {};
        return l.forEach((c, u) => {
          n[i[u]] = typeof c == "string" && r.includes(i[u]) ? c.trim() : c;
        }), n;
      }),
      oidIndex: {}
    };
    return this.oidIndexer(o, e.oidField), t.loadIsDone = !0, t.loadedCount = o.features.length, e.sourceDataJson = void 0, o;
  }
  async loadSingleFeature(e) {
    const t = {
      query: {
        f: "json",
        objectIds: e.oid,
        returnGeometry: e.includeGeometry,
        outFields: e.attribs
      }
    };
    typeof e.maxOffset < "u" && (t.query.maxAllowableOffset = e.maxOffset), typeof e.mapSR < "u" && (t.query.outSR = e.mapSR), typeof e.geometryPrecision < "u" && e.geometryPrecision >= 0 && (t.query.geometryPrecision = e.geometryPrecision);
    const [i, r] = await Ae(
      Ve(e.serviceUrl + "/query", t)
    );
    if (!r)
      return console.error(`ArcGIS single feature load error: ${e.serviceUrl}`, i), Promise.reject(new Error(`ArcGIS single feature load error: ${e.serviceUrl}`));
    if (!r.data || !r.data.features)
      return console.error(`Could not locate feature ${e.oid} for layer ${e.serviceUrl}`), Promise.reject(new Error(`Could not locate feature ${e.oid} for layer ${e.serviceUrl}`));
    const a = r.data.features;
    if (a.length > 0) {
      let o;
      const l = this.trimFeatureSetAttributes([a[0]], e.fieldsToTrim ?? [])[0];
      if (e.includeGeometry) {
        l.geometry.spatialReference = r.data.spatialReference;
        const n = Ss(l.geometry);
        o = this.$iApi.geo.geom.geomEsriToRamp(n);
      } else
        o = new ze();
      return new Ee(o, "", l.attributes);
    }
    return Promise.reject(new Error(`Could not locate feature ${e.oid} for layer ${e.serviceUrl}`));
  }
  /**
   * Trims the desired attribute values for a feature set's attribute groups.
   * @param features The featureset to be trimmed.
   * @param fieldsToTrim Array of string names of the attributes to be trimmed.
   * @returns The featureset, trimmed.
   */
  trimFeatureSetAttributes(e, t) {
    return t.forEach((i) => {
      e.forEach((r) => {
        typeof r.attributes[i] == "string" && (r.attributes[i] = r.attributes[i].trim());
      });
    }), e;
  }
  /**
   * Will order the fields of a layer based on its fieldInfo.
   *
   * @param currentFields the current order of the fields
   * @param orderInfo the fieldInfo config that contains the order the fields should be displayed in
   */
  orderFields(e, t) {
    const i = (a, o) => a.findIndex((l) => l.name === o), r = (a, o) => {
      const l = i(t, a.name), n = i(t, o.name);
      return l === -1 && n === -1 ? i(e, a.name) - i(e, o.name) : l === -1 ? 1 : n === -1 ? -1 : l - n;
    };
    return e.slice().sort(r);
  }
  /**
   * Will apply any field config metadata to a layer.
   * Should be used after loading process has populated .fields property of the layer
   *
   * @param layer the layer to apply the additional configuration to. Will be modified.
   * @param fieldMetadata field settings from the config object. can be undefined
   */
  applyFieldMetadata(e, t = void 0) {
    if (!t || !t.fieldInfo) {
      e.fieldList = "*";
      return;
    }
    const i = t.fieldInfo.filter((r) => r.trim).map((r) => r.name);
    if (e.fields.forEach((r) => {
      i.includes(r.name) && (r.trim = !0);
    }), t?.enforceOrder && t?.fieldInfo && t?.fieldInfo.length > 0 && (e.fields = this.orderFields(e.fields, t.fieldInfo), e.fieldList = t.fieldInfo.map((r) => r.name).join(",")), t.exclusiveFields) {
      t.fieldInfo.find((a) => a.name === e.oidField) || t.fieldInfo.push({ name: e.oidField }), e.fieldList = t.fieldInfo.map((a) => a.name).join(",");
      const r = t.fieldInfo;
      e.fields = e.fields.filter((a) => r.find((o) => o.name === a.name));
    } else
      e.fieldList = "*";
    t.fieldInfo.forEach((r) => {
      if (r.alias) {
        const a = e.fields.find((o) => o.name === r.name);
        a && (a.alias = r.alias);
      }
    });
  }
  /**
   * Util function to manage trickery. Non-Arcgis layer sources can have field names that are bad keys.
   * Our loader will have corrected them, but the ramp layer config may still be referencing the original names
   * (e.g. nameField, tooltipField).
   * This function will attempt to return the valid field name for a given original field name.
   *
   * @param fields array of valid fields for the layer
   * @param originalName field name as defined in the source
   * @returns a valid field name to use. Empty string if none found
   */
  fieldValidator(e, t) {
    if (e.findIndex((i) => i.name === t) === -1) {
      const i = e.find((r) => r.alias === t);
      return i ? i.name : (console.warn(`Cannot find name field in layer field list: ${t}`), "");
    } else
      return t;
  }
  /**
   * Will generate the tabular transformation of an attribute set for a layer.
   * The result will also be cached in the attribute source.
   * If the result is already cached, it will be returned.
   * The layer must be the owner of the attribute source.
   * This method is generally called from an internal call within a layer.
   * It exists as a public API to allow re-use across diverging layer types.
   *
   * @param layer the layer owning the attributes and the attribute source
   * @param attSource the attribute source for the attributes to transform
   */
  async generateTabularAttributes(e, t) {
    return t.attLoader.tabularAttributesCache || (t.attLoader.tabularAttributesCache = this.$iApi.geo.attributes.generateTabularAttributesWorker(
      e,
      t
    )), t.attLoader.tabularAttributesCache;
  }
  /**
   * Worker method for the above generateTabularAttributes call.
   * Separating allows us to use async syntax for the heavy lifting,
   * but provides a promise via method that can easily be assigned to the
   * cache. Difficult to save your own async promise within your own method.
   *
   * @param layer the layer owning the attributes and the attribute source
   * @param attSource the attribute source for the attributes to transform
   */
  async generateTabularAttributesWorker(e, t) {
    if (e.dataFormat === te.ESRI_RASTER)
      throw new Error("Attempting to get attributes on a raster layer.");
    const i = await t.attLoader.getAttribs();
    if (!i.features || i.features.length === 0)
      return {
        columns: [],
        rows: [],
        fields: [],
        oidField: ""
      };
    const r = e.fields.filter(
      (o) => (
        // assuming there is at least one attribute - empty attribute bundle promises should be rejected, so it never even gets this far
        // filter out fields where there is no corresponding attribute data
        Object.prototype.hasOwnProperty.call(i.features[0], Ie(o).name)
      )
    ).map((o) => ({
      data: Ie(o).name,
      // TODO calling this data is really unintuitive. consider global rename to fieldName, name, attribName, etc.
      title: Ie(o).alias || Ie(o).name
    })), a = i.features.map((o) => {
      const l = Gi({}, o);
      return l.rvInteractive = "", l.rvSymbol = e.getIcon(o[e.oidField]), l.rvUid = e.uid, l;
    });
    return r.forEach((o) => {
      if (o.data.slice(-2) === "()") {
        const l = function() {
          return this[o.data];
        }, n = o.data.slice(0, -2);
        a.forEach((c) => {
          c[n] = l;
        });
      }
    }), {
      columns: r,
      rows: a,
      fields: e.fields,
      // keep fields for reference ...
      oidField: e.oidField
      // ... keep a reference to id field ...
    };
  }
  /**
   * Gives an arcade variable type that corresponds to a field type.
   *
   * @param {string} fieldType a RAMP field type (same as ESRI field type)
   * @returns {EsriArcadeVarType | undefined} matching arcade type, or undefined if a valid mapping could not be derived
   */
  fieldTypeToArcade(e) {
    return Pn.get(e);
  }
}
class as {
  /**
   * Actual attribute loader, if exists
   */
  _attribLoader;
  /**
   * Actual quick cache, if exists
   */
  _quickCache;
  /**
   * Used to access the attribute loader in layer classes
   */
  get attLoader() {
    if (this._attribLoader)
      return this._attribLoader;
    throw console.trace(), new Error("Attempted to load attributes prior to layer being loaded.");
  }
  set attLoader(e) {
    this._attribLoader = e;
  }
  /**
   * Used to access the quick cache in layer classes
   */
  get quickCache() {
    if (this._quickCache)
      return this._quickCache;
    throw console.trace(), new Error("Attempted to access attribute cache prior to layer being loaded.");
  }
  set quickCache(e) {
    this._quickCache = e;
  }
  /**
   * Erase all local data in this object
   */
  clearAll() {
    this._attribLoader && this._attribLoader.destroyAttribs(), this._quickCache && this._quickCache.clearAll();
  }
}
class $i {
  loadedCount;
  loadAbortFlag;
  loadIsDone;
  constructor() {
    this.loadedCount = 0, this.loadAbortFlag = !1, this.loadIsDone = !1;
  }
}
class ui extends J {
  aac;
  loadPromise;
  details;
  tabularAttributesCache;
  constructor(e, t) {
    super(e), this.aac = new $i(), this.details = t;
  }
  /**
   * Allows the list of field names to download to be updated. Allows support for divergant loading
   * flows between different layers.
   *
   * @param {string} newList
   */
  updateFieldList(e) {
    this.details.attribs = e;
  }
  updateFieldsToTrim(e) {
    this.details.fieldsToTrim = e;
  }
  getAttribs() {
    return this.loadPromise || (this.aac = new $i(), this.loadPromise = this.loadPromiseGenerator()), this.loadPromise;
  }
  abortAttribLoad() {
    this.aac.loadAbortFlag = !0;
  }
  destroyAttribs() {
    this.loadPromise = void 0, this.tabularAttributesCache = void 0, this.aac.loadIsDone = !1, this.aac.loadedCount = 0;
  }
  loadCount() {
    return this.aac.loadedCount;
  }
  isLoaded() {
    return this.aac.loadIsDone;
  }
  isLoadAborted() {
    return this.aac.loadAbortFlag;
  }
  // this will be overrideable.
  // so one function for arcgis server. another for baked featurelayer. another for json file source
  loadPromiseGenerator() {
    return Promise.reject(new Error("Subclass of AttributeLoaderBase did not implement loadPromiseGenerator"));
  }
}
class os extends ui {
  constructor(e, t) {
    super(e, t);
  }
  loadPromiseGenerator() {
    return this.$iApi.geo.attributes.loadArcGisServerAttributes(this.details, this.aac);
  }
}
class Fn extends ui {
  constructor(e, t) {
    super(e, t);
  }
  loadPromiseGenerator() {
    return this.$iApi.geo.attributes.loadGraphicsAttributes(this.details, this.aac);
  }
}
class Dn extends ui {
  constructor(e, t) {
    super(e, t);
  }
  loadPromiseGenerator() {
    return this.$iApi.geo.attributes.loadCompactJsonAttributes(this.details, this.aac);
  }
}
class ns {
  attribs;
  // the "any" type here is funny. for points, its BaseGeometry, for line/poly based, it's an object indexed by scale,
  // which then containts an object indexed by key (likely oid) and returns BaseGeometry.
  // will keep as any since it's private and the interfaces are casting to BaseGeometry. otherwise would need type shenannigans.
  geoms;
  // extents for feature layer graphics that do not have a point geometry
  extents;
  /**
   * Used to determine if we need to cache geometry at different scales.
   */
  isPoint;
  constructor(e) {
    this.attribs = {}, this.geoms = {}, this.extents = {}, this.isPoint = e === T.POINT || e === T.MULTIPOINT;
  }
  getScaleStore(e) {
    return this.geoms[e] || (this.geoms[e] = {}), this.geoms[e];
  }
  getGeomStore(e = void 0) {
    if (this.isPoint)
      return this.geoms;
    if (typeof e > "u")
      throw new Error("Attempted to access geometry store for non-point layer without providing a map scale");
    return this.getScaleStore(e);
  }
  getAttribs(e) {
    return this.attribs[e];
  }
  setAttribs(e, t) {
    this.attribs[e] = t;
  }
  getGeom(e, t = void 0) {
    return this.getGeomStore(t)[e];
  }
  setGeom(e, t, i = void 0) {
    const r = this.getGeomStore(i);
    r[e] = t;
  }
  getExtent(e) {
    return this.extents[e];
  }
  setExtent(e, t) {
    this.extents[e] = t;
  }
  clearAll() {
    this.attribs = {}, this.geoms = {}, this.extents = {};
  }
}
class pi {
  innerRenderer;
  symbolUnits;
  defaultUnit;
  type;
  falseRenderer;
  // falseRenderer is set to true when we are creating a fake renderer to facilitate generating a legend from
  // a non-feature service, like a tile layer or imagery layer.
  constructor(e, t, i = !1) {
    this.innerRenderer = e, this.symbolUnits = [], this.falseRenderer = i, this.type = kt.Unknown;
  }
  // this function takes a set of attributes and extracts a value that can be used to match the owner of the attributes
  // to a part of a renderer. Use `any` result as the type can vary between renderers.
  makeSearchParams(e) {
    return e;
  }
  searchRenderer(e) {
    const t = this.makeSearchParams(e), i = this.symbolUnits.find((a) => a.match(t));
    if (i)
      return i;
    if (this.defaultUnit)
      return this.defaultUnit;
    console.error(`renderer search could not find match for ${t}`);
    const r = new Pt(this);
    return r.svgCode = "", r;
  }
  getGraphicIcon(e) {
    return this.searchRenderer(e).svgCode;
  }
  getGraphicSymbol(e) {
    return this.searchRenderer(e).symbol;
  }
  // worker function. determines if a field value should be wrapped in
  // any character and returns the character. E.g. string would return ', numbers return empty string.
  getFieldDelimiter(e, t) {
    let i = "'";
    if (!t || t.length === 0)
      return i;
    const r = t.find((a) => a.name === e);
    return r && r.type && r.type !== "string" && (i = ""), i;
  }
  // worker function
  // corrects for any character-case discrepancy for field names in the renderer vs on the layer
  cleanFieldName(e, t) {
    if (!e)
      return e;
    let i = t.find((r) => r.name === e);
    if (i)
      return e;
    {
      const r = e.toLowerCase();
      return i = t.find((a) => a.name.toLowerCase() === r), i ? i.name : e;
    }
  }
  makeElseClause() {
    return this.falseRenderer ? "" : `(NOT (${this.symbolUnits.map((t) => t.definitionClause).join(" OR ")}))`;
  }
}
class Pt {
  isDefault = !1;
  svgCode = "";
  symbol;
  definitionClause = "";
  label = "";
  parent;
  constructor(e) {
    this.parent = e, this.symbol = new Ht();
  }
  match(e) {
    return !!e;
  }
}
class Gn extends pi {
  constructor(e, t) {
    super(e, t), this.type = kt.Simple;
    const i = new Pt(this);
    i.label = e.label || "", i.symbol = e.symbol, i.definitionClause = "", this.symbolUnits.push(i);
  }
}
class Un extends pi {
  delim;
  keyFields;
  constructor(e, t, i = !1) {
    super(e, t, i), this.type = kt.Unique, this.delim = e.fieldDelimiter || ", ";
    const r = (o) => o.replace(/'/g, "''");
    this.keyFields = [e.field, e.field2, e.field3].filter((o) => o).map((o) => this.cleanFieldName(o, t));
    const a = this.keyFields.map((o) => this.getFieldDelimiter(o, t));
    if (e.uniqueValueInfos.forEach((o) => {
      const l = new Ci(this, o.value);
      if (l.label = o.label || "", l.symbol = o.symbol, !this.falseRenderer) {
        const n = l.matchValue.split(this.delim), c = this.keyFields.map(
          (u, p) => n[p] === "<Null>" ? `${u} IS NULL` : `${u} = ${a[p]}${r(n[p])}${a[p]}`
        ).join(" AND ");
        l.definitionClause = `(${c})`, l.matchValue = l.matchValue.replace(/<Null>/g, "");
      }
      this.symbolUnits.push(l);
    }), e.defaultSymbol) {
      const o = new Ci(this, "");
      o.isDefault = !0, o.label = e.defaultLabel || "", o.symbol = e.defaultSymbol, o.definitionClause = this.makeElseClause(), this.defaultUnit = o;
    }
  }
  makeSearchParams(e) {
    return this.keyFields.map((t) => {
      let i = e[t] === null ? "" : e[t];
      return typeof i != "string" && (i = i.toString()), i;
    }).join(this.delim);
  }
}
class Ci extends Pt {
  matchValue;
  constructor(e, t) {
    super(e), typeof t == "number" ? this.matchValue = t.toString() : this.matchValue = t;
  }
  match(e) {
    return this.matchValue === e;
  }
}
class Bn extends pi {
  valField;
  constructor(e, t, i = !1) {
    if (super(e, t, i), this.valField = this.cleanFieldName(e.field, t), e.classBreakInfos.forEach((r, a) => {
      const o = a === 0, l = new Oi(this, r.minValue, r.maxValue, o);
      l.label = r.label || "", l.symbol = r.symbol, this.falseRenderer || (l.definitionClause = `(${this.valField} >${o ? "=" : ""}  ${r.minValue} AND ${this.valField} <= ${r.maxValue})`), this.symbolUnits.push(l);
    }), e.defaultSymbol) {
      const r = new Oi(this, 0, 0, !1);
      r.isDefault = !0, r.label = e.defaultLabel || "", r.symbol = e.defaultSymbol, r.definitionClause = this.makeElseClause(), this.defaultUnit = r;
    }
  }
  makeSearchParams(e) {
    return parseFloat(e[this.valField]);
  }
}
class Oi extends Pt {
  /** min is exclusive, unless first class break */
  minValue;
  /** max is inclusive */
  maxValue;
  firstBreak;
  constructor(e, t, i, r) {
    super(e), this.minValue = t, this.maxValue = i, this.firstBreak = r;
  }
  match(e) {
    return this.minValue === this.maxValue ? this.maxValue === e : this.firstBreak ? this.minValue <= e && this.maxValue >= e : this.minValue < e && this.maxValue >= e;
  }
}
class Vn extends J {
  constructor(e) {
    super(e);
  }
  // layer renderer types
  SIMPLE = "simple";
  UNIQUE_VALUE = "unique-value";
  CLASS_BREAKS = "class-breaks";
  NONE = "none";
  CONTAINER_SIZE = 32;
  // size of the symbology item container
  CONTENT_SIZE = 24;
  // size of the symbology graphic
  CONTENT_IMAGE_SIZE = 28;
  // size of the symbology graphic if it's an image (images tend to already have a white boarder around them)
  CONTAINER_CENTER = this.CONTAINER_SIZE / 2;
  CONTENT_PADDING = (this.CONTAINER_SIZE - this.CONTENT_SIZE) / 2;
  /**
   * Given feature attributes, return the image URL for that feature/graphic object.
   *
   * @method getGraphicIcon
   * @param {Object} attributes object of feature attribute key value pairs
   * @param {Object} renderer an enhanced renderer (see function enhanceRenderer)
   * @return {String} svgcode Url to the features symbology image
   */
  getGraphicIcon(e, t) {
    return t.getGraphicIcon(e);
  }
  /**
   * Given feature attributes, return the symbol for that feature/graphic object.
   *
   * @method getGraphicSymbol
   * @param {Object} attributes object of feature attribute key value pairs
   * @param {Object} renderer an enhanced renderer (see function enhanceRenderer)
   * @return {Object} an ESRI Symbol object in server format
   */
  getGraphicSymbol(e, t) {
    return t.getGraphicSymbol(e);
  }
  makeRenderer(e, t, i = !1) {
    switch (e.type) {
      case this.SIMPLE:
        return new Gn(e, t);
      case this.CLASS_BREAKS:
        return new Bn(e, t, i);
      case this.UNIQUE_VALUE:
        return new Un(e, t, i);
      default:
        throw new Error(`Unknown renderer type encountered - ${e.type}`);
    }
  }
  /**
   * Generates svg symbology for WMS layers.
   * @function generateWMSSymbology
   * @param {String} name label for the symbology item (it's not used right now, but is required to be consistent with other symbology generating functions)
   * @param {String} imageUri url or dataUrl of the legend image
   * @return {Promise} a promise resolving with symbology svg code and its label
   */
  async generateWMSSymbology(e) {
    const t = tt(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, 0, 0), i = {
      svgcode: "",
      imgHeight: "",
      imgWidth: ""
    };
    if (e) {
      const r = await this.renderSymbologyImage(e);
      if (r) {
        i.svgcode = r;
        const a = document.createElement("span");
        a.innerHTML = r;
        const o = a.firstElementChild?.lastElementChild;
        i.imgHeight = o?.getAttribute("height") || "", i.imgWidth = o?.getAttribute("width") || "";
      } else
        i.svgcode = t.svg();
    } else
      i.svgcode = t.svg();
    return i;
  }
  /**
   * Converts a config-supplied list of symbology to the format used by layer records.
   *
   * @private
   * @function _listToSymbology
   * @param {(image: string) => Promise<string>} conversionFunction a conversion function to wrap the supplied image into an image or an icon style symbology container
   * @param {Array} list a list of config-supplied symbology items in the form of [ { text: <String>, image: <String> }, ... ] wher `image` can be dataURL or an actual url
   * @return {Array} an array of converted symbology symbols in the form of [ { name: <String>, image: <String>, svgcode: <String> }, ... ]; items will be populated async as conversions are done
   */
  listToSymbology(e, t) {
    return t.map(({ text: r, image: a }) => {
      const o = {
        name: r,
        image: a,
        // url
        svgcode: ""
      };
      return e(a).then((l) => {
        o.svgcode = l;
      }), o;
    });
  }
  // these two functions called by legend ui to make symbol stacks.
  // may need to adjust stuff with new UI
  listToIconSymbology(e) {
    return this.listToSymbology(this.renderSymbologyIcon, e);
  }
  listToImageSymbology(e) {
    return this.listToSymbology(this.renderSymbologyImage, e);
  }
  /**
   * Renders a supplied image as an image-style symbology item (preserving the true image dimensions).
   *
   * @function renderSymbologyImage
   * @param {String} imageUri a image dataUrl or a regular url
   * @param {Object} draw [optional=null] an svg container to draw the image on; if not supplied, a new one is created
   */
  async renderSymbologyImage(e, t = null) {
    t === null && (t = tt(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, 0, 0));
    const i = await this.$iApi.geo.shared.convertImagetoDataURL(e);
    if (i === e)
      return "";
    const { loader: r } = await this.svgDrawImage(t, i);
    return t.viewbox(0, 0, r.width, r.height), t.svg();
  }
  /**
   * Renders a supplied image as an icon-style symbology item (fitting an image inside an icon container, usually 32x32 pixels).
   *
   * @function renderSymbologyIcon
   * @param {String} imageUri a image dataUrl or a regular url
   * @param {Object} draw [optional=null] an svg container to draw the image on; if not supplied, a new one is created
   */
  async renderSymbologyIcon(e, t = null) {
    if (t === null) {
      const a = document.createElement("div");
      a.setAttribute("style", "opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"), document.body.appendChild(a), t = tt(a).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE);
    }
    const i = await this.$iApi.geo.shared.convertImagetoDataURL(e), { image: r } = await this.svgDrawImage(t, i);
    return r.center(this.CONTAINER_CENTER, this.CONTAINER_CENTER), this.fitInto(r, this.CONTENT_IMAGE_SIZE), t.svg();
  }
  /**
   * Generates a placeholder symbology graphic.
   * @function generatePlaceholderSymbology
   * @private
   * @param  {String} name label symbology label
   * @param  {String} colour colour to use in the graphic
   * @return {Object} symbology svg code and its label
   */
  generatePlaceholderSymbology(e, t = "#000") {
    const i = tt(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE);
    return i.rect(this.CONTENT_IMAGE_SIZE, this.CONTENT_IMAGE_SIZE).center(this.CONTAINER_CENTER, this.CONTAINER_CENTER).fill(t), i.text(e[0].toUpperCase()).size(23).fill("#fff").attr({
      "font-weight": "bold",
      "font-family": "Roboto"
    }).center(this.CONTAINER_CENTER, this.CONTAINER_CENTER).tspan(e[0].toUpperCase()).addClass("grid-icons").attr({
      dy: "29.900000000000002",
      x: "7.6875"
    }), {
      name: e,
      svgcode: i.svg()
    };
  }
  async generateBlankSymbology() {
    return tt(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).svg();
  }
  /**
   * Generate an SVG string for an ESRI symbol.
   * @private
   * @param  {Object} symbol an ESRI symbol object in JS API format
   * @return {Promise} resolves to an SVG string representing the symbol
   */
  async symbolToSvg(e) {
    const t = this, i = 1.33333, r = document.createElement("div");
    r.setAttribute("style", "opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"), document.body.appendChild(r);
    const a = tt(r).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE), o = {
      // @ts-expect-error TODO: explain why this is needed or remove
      path({ size: h, path: y }) {
        return a.path(y).size(h * i);
      },
      // @ts-expect-error TODO: explain why this is needed or remove
      circle({ size: h }) {
        return a.circle(h * i);
      },
      // @ts-expect-error TODO: explain why this is needed or remove
      cross({ size: h }) {
        return a.path("M 0,10 L 20,10 M 10,0 L 10,20").size(h * i);
      },
      // @ts-expect-error TODO: explain why this is needed or remove
      x({ size: h }) {
        return a.path("M 0,0 L 20,20 M 20,0 L 0,20").size(h * i);
      },
      // @ts-expect-error TODO: explain why this is needed or remove
      triangle({ size: h }) {
        return a.path("M 20,20 L 10,0 0,20 Z").size(h * i);
      },
      // @ts-expect-error TODO: explain why this is needed or remove
      diamond({ size: h }) {
        return a.path("M 20,10 L 10,0 0,10 10,20 Z").size(h * i);
      },
      // @ts-expect-error TODO: explain why this is needed or remove
      square({ size: h }) {
        return a.path("M 0,0 20,0 20,20 0,20 Z").size(h * i);
      }
    }, l = {
      [ce.SOLID]: "none",
      // esriSLSSolid
      [ce.NONE]: "none",
      // esriSLSNull
      [ce.DASH]: "5.333,4",
      // esriSLSDash
      [ce.DOT]: "1.333,4",
      // esriSLSDot
      [ce.DASHDOT]: "5.333,4,1.333,4",
      // esriSLSDashDot
      [ce.LONGDASH]: "10.666,4",
      // esriSLSLongDash
      [ce.LONGDASHDOT]: "10.666,4,1.333,4",
      // esriSLSLongDashDot
      [ce.LONGDASHDOTDOT]: "10.666,4,1.333,4,1.333,4",
      // esriSLSLongDashDotDot
      [ce.SHORTDOT]: "1.333,1.333",
      // esriSLSShortDot
      [ce.SHORTDASH]: "5.333,1.333",
      // esriSLSShortDash
      [ce.SHORTDASHDOT]: "5.333,1.333,1.333,1.333",
      // esriSLSShortDashDot
      [ce.SHORTDASHDOTDOT]: "5.333,1.333,1.333,1.333,1.333,1.333"
      // esriSLSShortDashDotDot
    }, n = {
      color: "#000",
      opacity: 1,
      width: 1,
      linecap: "square",
      linejoin: "miter",
      miterlimit: 4
    }, c = {
      color: [0, 0, 0, 0],
      width: 0,
      style: l.none
    }, u = {
      solid: (h) => ({
        color: h.colour,
        opacity: h.opacity
      }),
      none: () => "transparent",
      // esriSFSNull
      horizontal: (h, y) => a.pattern(5, 5, (b) => b.line(0, 5 / 2, 5, 5 / 2)).stroke(y),
      vertical: (h, y) => a.pattern(5, 5, (b) => b.line(5 / 2, 0, 5 / 2, 5)).stroke(y),
      "forward-diagonal": (h, y) => a.pattern(5, 5, (b) => {
        b.line(0, 0, 5, 5).stroke(y), b.line(0, 0, 5, 5).move(0, 5).stroke(y), b.line(0, 0, 5, 5).move(5, 0).stroke(y);
      }),
      "backward-diagonal": (h, y) => a.pattern(5, 5, (b) => {
        b.line(5, 0, 0, 5).stroke(y), b.line(5, 0, 0, 5).move(5 / 2, 5 / 2).stroke(y), b.line(5, 0, 0, 5).move(-5 / 2, -5 / 2).stroke(y);
      }),
      cross: (h, y) => a.pattern(5, 5, (b) => {
        b.line(5 / 2, 0, 5 / 2, 5).stroke(y), b.line(0, 5 / 2, 5, 5 / 2).stroke(y);
      }),
      "diagonal-cross": (h, y) => a.pattern(7, 7, (b) => {
        b.line(0, 0, 7, 7).stroke(y), b.line(7, 0, 0, 7).stroke(y);
      })
    }, p = {
      "simple-marker"() {
        const h = g(e.color);
        e.outline = e.outline || c;
        const y = g(e.outline.color), w = d({
          color: y.colour,
          opacity: y.opacity,
          width: e.outline.width,
          // @ts-expect-error TODO: explain why this is needed or remove
          dasharray: l[e.outline.style]
        }), b = o[e.style](e).fill({
          color: h.colour,
          opacity: h.opacity
        }).stroke(w).center(t.CONTAINER_CENTER, t.CONTAINER_CENTER).rotate(e.angle || 0);
        t.fitInto(b, t.CONTENT_SIZE);
      },
      "simple-line"() {
        const h = g(e.color), y = d({
          color: h.colour,
          opacity: h.opacity,
          width: e.width,
          linecap: "butt",
          // @ts-expect-error TODO: explain why this is needed or remove
          dasharray: l[e.style]
        }), w = t.CONTENT_PADDING, b = t.CONTAINER_SIZE - t.CONTENT_PADDING;
        a.line(w, w, b, b).stroke(y);
      },
      // cartographic line style. internet is hinting that it is not supported on JS API
      esriCLS() {
        this["simple-line"]();
      },
      "simple-fill"() {
        const h = g(e.color), y = d({
          color: h.colour,
          opacity: h.opacity
        }), w = u[e.style](h, y);
        e.outline = e.outline || c;
        const b = g(e.outline.color), $ = d({
          color: b.colour,
          opacity: b.opacity,
          width: e.outline.width,
          linecap: "butt",
          // @ts-expect-error TODO: explain why this is needed or remove
          dasharray: l[e.outline.style]
        });
        a.rect(t.CONTENT_SIZE, t.CONTENT_SIZE).center(t.CONTAINER_CENTER, t.CONTAINER_CENTER).fill(w).stroke($);
      },
      text() {
        console.error("no support for feature service legend of text symbols");
      },
      "picture-fill"() {
        const h = e.imageData ? `data:${e.contentType};base64,${e.imageData}` : e.url, y = e.width * e.xscale, w = e.height * e.yscale;
        e.outline = e.outline || c;
        const b = g(e.outline.color), $ = d({
          color: b.colour,
          opacity: b.opacity,
          width: e.outline.width,
          // @ts-expect-error TODO: explain why this is needed or remove
          dasharray: l[e.outline.style]
        });
        return t.$iApi.geo.shared.convertImagetoDataURL(h).then((G) => {
          const V = a.pattern(
            y,
            w,
            (Q) => (
              // there was a 4th argument 'true' here before, but maximum 3 are accepted. may need to look into this
              Q.image(G, y, w)
            )
          );
          a.rect(t.CONTENT_SIZE, t.CONTENT_SIZE).center(t.CONTAINER_CENTER, t.CONTAINER_CENTER).fill(V).stroke($);
        });
      },
      "picture-marker"() {
        const h = e.source, y = h && h.imageData ? `data:${h.contentType};base64,${h.imageData}` : e.url;
        return t.$iApi.geo.shared.convertImagetoDataURL(y).then((b) => t.svgDrawImage(a, b)).then(({ image: b }) => {
          b.center(t.CONTAINER_CENTER, t.CONTAINER_CENTER).rotate(e.angle || 0), t.fitInto(b, t.CONTENT_IMAGE_SIZE);
        });
      }
    };
    try {
      return await Promise.resolve(p[e.type]()), document.body.removeChild(r), a.svg();
    } catch (h) {
      return console.error(h), this.generateBlankSymbology();
    }
    function d(h) {
      return Object.assign({}, n, h);
    }
    function g(h) {
      return h ? {
        colour: `rgb(${h.r},${h.g},${h.b})`,
        opacity: h.a
      } : {
        colour: "rgb(0, 0, 0)",
        opacity: 0
      };
    }
  }
  /**
   * Renders a specified image on an svg element. This is a helper function that wraps around async `draw.image` call in the svg library.
   *
   * @function svgDrawImage
   * @private
   * @param {Object} draw svg element to render the image onto
   * @param {String} imageUri image url or dataURL of the image to render
   * @param {Number} width [optional = 0] width of the image
   * @param {Number} height [optional = 0] height of the image
   * @param {Boolean} crossOrigin [optional = true] specifies if the image should be loaded as crossOrigin
   * @return {Promise} promise resolving with the loaded image and its loader object (see svg.js http://documentup.com/wout/svg.js#image for details)
   */
  async svgDrawImage(e, t, i = 0, r = 0, a = !0) {
    return new Promise((o, l) => {
      const n = e.image(t, i, r, a).loaded((c) => o({ image: n, loader: c })).error((c) => {
        l(c), console.error(c);
      });
    });
  }
  /**
   * Fits svg element in the size specified
   * @param {Object} element svg element to fit
   * @param {Number} CONTAINER_SIZE width/height of a container to fit the element into
   */
  fitInto(e, t) {
    const i = e.node.getBoundingClientRect(), r = t / Math.max(i.width, i.height);
    r < 1 && e.scale(r);
  }
  /**
   * Generate a legend object based on an ESRI renderer.
   *
   * @param  {Object} renderer an ESRI renderer object in server JSON form
   * @return {Array} list of legend symbologies
   */
  rendererToLegend(e) {
    let t;
    const i = e.symbolUnits.slice(0);
    if (e.defaultUnit && i.push(e.defaultUnit), e.falseRenderer)
      t = i.map((r) => [r]);
    else {
      const r = /* @__PURE__ */ new Map();
      i.forEach((a) => {
        const o = r.get(a.label);
        o ? o.push(a) : r.set(a.label, [a]);
      }), t = [], r.forEach((a) => t.push(a));
    }
    return t.map((r) => {
      const a = r[0], o = {
        uid: this.$iApi.geo.shared.generateUUID(),
        label: a.label || "",
        definitionClause: r.length === 1 ? a.definitionClause : `(${r.map((l) => l.definitionClause).join(" OR ")})`,
        svgcode: "",
        // TODO is '' ok? maybe we need white square svg? or some loading icon?
        esriStandard: !0,
        // is ESRI standard symbology
        visibility: !0,
        lastVisbility: !0,
        drawPromise: this.symbolToSvg(a.symbol).then((l) => {
          o.svgcode = l, r.forEach((n) => {
            n.svgCode = l;
          });
        })
      };
      return o;
    });
  }
  /**
   * Returns the legend information of an ESRI map service.
   *
   * @function getMapServerLegend
   * @private
   * @param  {String} layerUrl service url (root service, not indexed endpoint)
   * @returns {Promise} resolves in an array of legend data in arcgis server json format
   *
   */
  async getMapServerLegend(e) {
    if (!e)
      throw new Error("Legend server request is missing the required url.");
    const t = {
      query: { f: "json" }
    }, i = { layers: [] }, [r, a] = await Ae(Ve(`${e}/legend`, t));
    return a ? a.data ? a.data : (console.error(`Error loading legend data for ${e}`), i) : (console.error(`Error loading legend for ${e}`, r), i);
  }
  /**
   * Our symbology engine works off of renderers. When dealing with layers with no renderers,
   * we need to take server-side legend and convert it to a fake renderer, which lets us
   * leverage all the existing symbology code.
   *
   * @function mapServerLegendToRenderer
   * @private
   * @param {Object} serverLegend legend json from an esri map server
   * @param {Integer} layerIndex  the index of the layer in the legend we are interested in
   * @returns {Promise<BaseRenderer>} resolves with a fake unique value renderer based off the legend
   *
   */
  async mapServerLegendToRenderer(e, t) {
    const i = e.layers.find((a) => a.layerId === t);
    let r;
    if (typeof i < "u") {
      r = {
        type: "uniqueValue",
        field: "fakefield",
        uniqueValueInfos: i.legend.map((o) => ({
          label: o.label,
          value: o.label,
          symbol: {
            type: "esriPMS",
            imageData: o.imageData,
            contentType: o.contentType
          }
        }))
      };
      const a = await C.RendererFromJson(r);
      return this.makeRenderer(a, [], !0);
    } else
      throw new Error("attempted to make renderer from non-existing legend data");
  }
  /**
   * Our symbology engine works off of renderers. When dealing with layers with no renderers,
   * we need to take server-side legend and convert it to a fake renderer, which lets us
   * leverage all the existing symbology code.
   *
   * Same as mapServerLegendToRenderer function but combines all layer renderers.
   *
   * @function mapServerLegendToRendererAll
   * @private
   * @param {Object} serverLegend legend json from an esri map server
   * @returns {Promise<BaseRenderer>} resolves with a fake unique value renderer based off the legend
   */
  async mapServerLegendToRendererAll(e) {
    const t = e.layers.map(
      (a) => a.legend.map((o) => ({
        label: o.label,
        value: o.label,
        symbol: {
          type: "esriPMS",
          imageData: o.imageData,
          contentType: o.contentType
        }
      }))
    ), i = {
      type: "uniqueValue",
      field1: "fakefield",
      uniqueValueInfos: [].concat(...t)
    }, r = await C.RendererFromJson(i);
    return this.makeRenderer(r, [], !0);
  }
  /**
   * Orchestrator function that will:
   * - Fetch a legend from an esri map server
   * - Extract legend for a specific sub layer
   * - Convert server legend to a temporary renderer
   * - Convert temporary renderer to a viewer-formatted legend (return value)
   *
   * @function mapServerToLocalLegend
   * @param {String}    mapServerUrl  service url (root service, not indexed endpoint)
   * @param {Integer}   [layerIndex]  the index of the layer in the legend we are interested in. If not provided, all layers will be collapsed into a single legend
   * @returns {Promise} resolves in a viewer-compatible legend for the given server and layer index
   *
   */
  async mapServerToLocalLegend(e, t = void 0) {
    const i = await this.getMapServerLegend(e);
    let r, a;
    return typeof t > "u" ? (a = 0, r = await this.mapServerLegendToRendererAll(i)) : (a = parseInt(t), r = await this.mapServerLegendToRenderer(i, a)), this.rendererToLegend(r);
  }
}
class zn extends J {
  constructor(e) {
    super(e);
  }
  /**
   * Gets an array of OIDs from an arcgis server feature source that satisfy a query
   *
   * @param options contains properties that define the query and specificy request particulars.
   * @returns resolves with array of object ids.
   */
  async arcGisServerQueryIds(e) {
    if (!(e.filterGeometry || e.filterSql))
      return console.error("arcGisServerQueryIds called without any filter"), [];
    const t = await C.Query();
    t.returnGeometry = !1, e.filterSql && (t.where = e.filterSql), e.filterGeometry && (t.geometry = await this.queryGeometryHelper(
      e.filterGeometry,
      !1,
      this.$iApi.geo.map.getScale(),
      e.sourceSR
    ), t.spatialRelationship = "intersects");
    const i = await C.QueryByIds(e.url, t);
    return Array.isArray(i) ? i : [];
  }
  /**
   * Gets an array of graphics from a locally stored feature layer (file, geojson) that satisfy a query
   *
   * @param options contains properties that define the query and specificy request particulars.
   * @returns resolves with array of graphic result objects.
   */
  async geoJsonQuery(e) {
    const t = await C.Query();
    if (t.returnGeometry = !!e.includeGeometry, t.outFields = ["*"], e.filterGeometry && (t.geometry = await this.queryGeometryHelper(e.filterGeometry, !0), t.spatialRelationship = "intersects"), e.filterSql && (t.where = e.filterSql), e.filterOIDs && (t.objectIds = e.filterOIDs), await e.layer.loadPromise(), !e.layer.esriLayer)
      throw new Error("file layer being queried contains no ESRI layer");
    return (await e.layer.esriLayer.queryFeatures(t)).features.map((r, a) => {
      let o;
      return t.returnGeometry ? o = this.$iApi.geo.geom.geomEsriToRamp(r.geometry, `queryResult${a}`) : o = new ze(), new Ee(o, "", r.attributes);
    });
  }
  /**
   * Helper function to modify input geometries for queries. Will attempt to avoid various pitfalls,
   * usually around projections
   *
   * @private
   * @param {BaseGeometry} geometry the geometry to be used in a query as a filter
   * @param {Boolean} isFileLayer true if layer is not tied to an arcgis server
   * @param {Integer} [mapScale] optional scale value of the map to help detect problem situations
   * @param {SpatialReference} [sourceSR] optional spatial reference of the layer being queried to help detect problem situations
   * @return {Promise<Geometry>} resolves the input geometry in the most appropriate form based on the inputs
   */
  async queryGeometryHelper(e, t, i, r) {
    return !t && e.type === T.EXTENT && r && !r.isEqual(e.sr) && !(i && i > 2e7 && e.sr.wkid === 3978 && r.wkid === 4326) ? (await this.$iApi.geo.proj.projectExtent(r, e)).toESRI() : e.toESRI();
  }
  /**
   * Create an extent centered around a point, that is appropriate for the current map scale.
   *
   * @function makeClickBuffer
   * @param {Point} point         point on the map for extent center
   * @param {Integer} tolerance   optional. distance in pixels from mouse point that qualifies as a hit. default is 5
   * @return {Extent} an extent of desired size and location
   */
  makeClickBuffer(e, t = 5) {
    const i = this.$iApi.geo.map, r = i.getExtent(), a = t * (r.xmax - r.xmin) / i.getPixelWidth();
    return new F(
      "ze_buffer",
      [e.x - a, e.y - a],
      [e.x + a, e.y + a],
      e.sr
    );
  }
}
class qn extends J {
  attributes;
  geom;
  layer;
  map;
  proj;
  query;
  shared;
  symbology;
  /**
   * @constructor
   * @param {InstanceAPI} iApi the RAMP instance
   */
  constructor(e) {
    super(e), this.geom = ut.geom, this.proj = ut.proj, this.shared = ut.sharedUtils, this.map = new tn(e), this.layer = new yn(e), this.attributes = new Nn(e), this.query = new zn(e), this.symbology = new Vn(e), Array.isArray(ft.request.interceptors) || (ft.request.interceptors = []), ft.request.interceptors.push({
      before: (t) => {
        t.url.includes("?blankTile=false") && (t.url = t.url.replace("?blankTile=false", "?blankTile=true"));
      }
    });
  }
  /**
   * Set a proxy service to allow consumption of cross-domain non-CORS resources.
   *
   * @param {string} proxyUrl Url to proxy or empty string to clear. Must be relative url on host domain, or full url to CORS supported server
   */
  set proxy(e) {
    ft.request.proxyUrl = e;
  }
  /**
   * Read the current proxy setting, returns url string, empty string if no proxy
   */
  get proxy() {
    return ft.request.proxyUrl || "";
  }
}
const jn = /* @__PURE__ */ Object.assign({ "../fixtures/appbar/index.ts": () => import("./index-CyhHnRi6.js"), "../fixtures/areas-of-interest/index.ts": () => import("./index-eroJGOjA.js"), "../fixtures/basemap/index.ts": () => import("./index-62f1qri8.js"), "../fixtures/crosshairs/index.ts": () => import("./index-F06RW2fD.js"), "../fixtures/details/index.ts": () => import("./index-l_a5ysj1.js"), "../fixtures/draw/index.ts": () => import("./index-ClrPuPlH.js"), "../fixtures/export-footnote/index.ts": () => import("./index-PFlSyffG.js"), "../fixtures/export-legend/index.ts": () => import("./index-cgdod4-8.js"), "../fixtures/export-map/index.ts": () => import("./index-CRhk-Zq9.js"), "../fixtures/export-northarrow/index.ts": () => import("./index-BHIX8CAr.js"), "../fixtures/export-scalebar/index.ts": () => import("./index-Dl3wvB1u.js"), "../fixtures/export-timestamp/index.ts": () => import("./index-udyZtk_x.js"), "../fixtures/export-title/index.ts": () => import("./index-CiRfQ8i8.js"), "../fixtures/export/index.ts": () => import("./index-DqhhmJe_.js"), "../fixtures/extentguard/index.ts": () => import("./index-CGBi8Lf9.js"), "../fixtures/gazebo/index.ts": () => import("./index-BF7-XmSl.js"), "../fixtures/geosearch/index.ts": () => import("./index-D-oWAEYx.js"), "../fixtures/grid/index.ts": () => import("./index-1TRCTfOP.js"), "../fixtures/help/index.ts": () => import("./index-l8cSEH4Z.js"), "../fixtures/hilight/index.ts": () => import("./index-DRSev_OR.js"), "../fixtures/layer-reorder/index.ts": () => import("./index-B2XqGB8L.js"), "../fixtures/legend/index.ts": () => import("./index-BC3R0cYT.js"), "../fixtures/mapnav/index.ts": () => import("./index-B7u_Etyp.js"), "../fixtures/metadata/index.ts": () => import("./index-BGXiebRq.js"), "../fixtures/northarrow/index.ts": () => import("./index-C1la4nsX.js"), "../fixtures/overviewmap/index.ts": () => import("./index-B6guMA7K.js"), "../fixtures/panguard/index.ts": () => import("./index--NvTIilL.js"), "../fixtures/scrollguard/index.ts": () => import("./index-DkUM_JBF.js"), "../fixtures/settings/index.ts": () => import("./index-6GKNbgnQ.js"), "../fixtures/snowman/index.ts": () => import("./index-Ng-39PZI.js"), "../fixtures/swipe/index.ts": () => import("./index-jMf8gq6Z.js"), "../fixtures/wizard/index.ts": () => import("./index-DhbgCmSf.js") });
class Wn extends J {
  /**
   * Creates an instance of FixtureAPI.
   *
   * @param {InstanceAPI} iApi
   * @memberof FixtureAPI
   */
  constructor(e) {
    super(e);
  }
  /**
   * Returns whether a given fixture exists.
   *
   * @param {string} id the fixture ID to be checked
   * @returns {boolean} whether the fixture identified by 'id' exists
   * @memberof FixtureAPI
   */
  exists(e) {
    return e in ye(this.$vApp.$pinia).items;
  }
  /**
   * Loads a (built-in) fixture or adds supplied fixture into the R4MP Vue instance.
   *
   * @param {string} id
   * @param {IFixtureBase} [constructor]
   * @returns {Promise<FixtureBase>}
   * @memberof FixtureAPI
   */
  // TODO: implement overload to add a list of features
  async add(e, t) {
    let i;
    if (e in ye(this.$vApp.$pinia).items)
      return this.get(e);
    if (t) {
      if (typeof t != "function")
        throw new Error("malformed fixture constructor");
      i = di.updateBaseToInstance(new t(), e, this.$iApi);
    } else {
      const r = (await jn[`../fixtures/${e}/index.ts`]()).default;
      i = new r(e, this.$iApi);
    }
    return ye(this.$vApp.$pinia).addFixture(i), this.$iApi.event.emit(E.FIXTURE_ADDED, i), this.$iApi.geo.map.created && i.initialized?.(), i;
  }
  /**
   * Removes the specified fixture from R4MP instance.
   *
   * @template T
   * @param {(FixtureBase | string)} fixtureOrId
   * @returns {T}
   * @memberof FixtureAPI
   */
  remove(e) {
    const t = this.get(e);
    if (!t)
      throw new Error(`Could not find fixture ${e} for removal`);
    return ye(this.$vApp.$pinia).removeFixture(t), this.$iApi.event.emit(E.FIXTURE_REMOVED, t), t;
  }
  // See https://github.com/ramp4-pcar4/ramp4-pcar4/issues/2296#issuecomment-2262964384 for background of flush and restore.
  /**
   * Remove every fixture whose persist flag is set to false from the R4MP instance.
   * For all other fixtures, simply call their removed hook.
   */
  flush() {
    const e = ye(this.$vApp.$pinia);
    Object.keys(e.items).forEach((i) => {
      const r = this.get(i);
      r?.persist && typeof r?.removed == "function" ? r.removed() : r && this.remove(i);
    });
  }
  /**
   * Restores every remaining fixture by calling its added/initialized hooks.
   */
  restore() {
    const e = ye(this.$vApp.$pinia);
    Object.keys(e.items).forEach((i) => {
      const r = e.items[i];
      typeof r.added == "function" && r.added(), this.$iApi.geo.map.created && typeof r.initialized == "function" && r.initialized();
    });
  }
  get(e) {
    const t = [];
    typeof e == "string" ? t.push(e) : Array.isArray(e) ? t.push(...e) : t.push(e.id);
    const i = t.map((r) => {
      const a = ye(this.$vApp.$pinia).items[r];
      if (a)
        return a;
    });
    return i.length === 1 ? i[0] : i;
  }
  /**
   * Provides a promise that resolves when the fixture(s) have finished loading.
   *
   * @param {(string | string[])} fixtureId the fixture ID(s) for which the promise is requested
   * @memberof FixtureAPI
   */
  isLoaded(e) {
    const t = ye(this.$vApp.$pinia), i = Array.isArray(e) ? e : [e];
    i.forEach((a) => {
      t.loadPromises[a] === void 0 && t.addLoadPromise(a);
    });
    const r = t.getLoadPromises(i);
    return Array.isArray(e) ? Promise.all(r) : r[0];
  }
  /**
   * Loads the set of standard, built-in fixtures to the R4MP Vue instance.
   * This will quickly set up the vanilla version of RAMP.
   * Note this function is automatically run by the instance startup unless the loadDefaultFixtures option is
   * set to false. The function is exposed to allow custom pages the ability to call it at a different point
   * in the startup. Also, a subset of standard fixtures can be provided on the optional parameter if one
   * wishes to omit some of the standard fixtures.
   *
   * @param {Array<string>} [fixtureNames] list of built-in fixtures names to add. omission means all built-in fixtures will be added
   * @returns {Promise<Array<FixtureBase>>} resolves with array of default fixtures
   * @memberof FixtureAPI
   */
  addDefaultFixtures(e) {
    Array.isArray(e) || (e = [
      "appbar",
      "basemap",
      "crosshairs",
      "details",
      "geosearch",
      "grid",
      "help",
      "hilight",
      "layer-reorder",
      "legend",
      "mapnav",
      "northarrow",
      "overviewmap",
      "panguard",
      "scrollguard",
      "settings",
      "wizard"
    ]);
    const t = pe(this.$vApp.$pinia);
    return t.startingFixtures = e, Promise.all(e.map((i) => this.add(i)));
  }
}
class di extends J {
  /**
   * Adds missing functions and properties to the object implementing FixtureBase interface.
   * This is only needed for external fixtures as they can't inherit from FixtureInstance.
   *
   * TODO: If you know a better way to deep-mixin props/getters/functions from a class into another class instance, please tell me. I honestly don't know 🤷‍♂️.
   *
   * @static
   * @param {FixtureBase} value
   * @param {string} id
   * @param {InstanceAPI} $iApi
   * @returns {FixtureInstance}
   * @memberof FixtureInstance
   */
  static updateBaseToInstance(e, t, i) {
    const r = new di(t, i);
    return Object.defineProperties(e, {
      id: { value: t },
      $iApi: { value: i },
      persist: { value: e.persist ?? !0 },
      $vApp: {
        get() {
          return r.$vApp;
        }
      },
      remove: { value: r.remove },
      extend: { value: r.extend },
      config: {
        get() {
          return r.config;
        }
      },
      mount: { value: r.mount }
    }), e;
  }
  /**
   * ID of this fixture.
   *
   * @type {string}
   * @memberof FixtureInstance
   */
  id;
  persist;
  /**
   * Creates an instance of FixtureInstance.
   *
   * @param {string} id
   * @param {InstanceAPI} iApi
   * @memberof FixtureInstance
   */
  constructor(e, t) {
    super(t), this.id = e, this.persist = !0;
  }
  /**
   * Removes the specified fixture from R4MP instance.
   * This is a proxy to `rInstance.fixture.remove(...)`.
   *
   * @returns {this}
   * @memberof FixtureInstance
   */
  remove() {
    return this.$iApi.fixture.remove(this), this;
  }
  /**
   * A helper function to create a "subclass" of the base Vue constructor
   *
   * @param {VueConstructor<Vue>} vueComponent
   * @param {ComponentOptions<Vue>} [options={}]
   * @returns {Vue}
   * @memberof FixtureInstance
   */
  extend(e, t = {}) {
    const i = O({
      extends: e,
      iApi: this.$iApi,
      data() {
        return {
          ...t
        };
      }
    }), r = Fi(i), { el: a } = this.mount(i, {
      props: { ...t.propsData },
      app: r
    });
    return a;
  }
  /**
   * Helper with programatically creating a component in Vue 3 (replaces the deprecated Vue.extend)
   *
   * @param {Component} component
   * @param {object} props
   * @param {any} children
   * @param {HTMLElement} element
   * @param {App} app
   * @returns {VNode, function, HTMLElement}
   * @memberof FixtureInstance
   */
  mount(e, { props: t, children: i, element: r, app: a } = {}) {
    let o = r, l = bs(e, t, i);
    return a && a._context && (l.appContext = a._context), o ? Vt(l, o) : (o = document.createElement("div"), Vt(l, o)), { vNode: l, destroy: () => {
      o && Vt(null, o), o = null, l = null;
    }, el: o };
  }
  /**
   * Returns the fixture config section (JSON) taken from the global config.
   *
   * @readonly
   * @type {*}
   * @memberof FixtureInstance
   */
  get config() {
    return pe(this.$vApp.$pinia).config.fixtures[this.id];
  }
  /**
   * Get this fixture's config from the layer config with the given layer id
   * Will return `undefined` if layer config did not specify a config for this fixture
   *
   * @param {string} layerId The layer's id
   * @returns {any} This fixture's config for the given layer
   */
  getLayerFixtureConfig(e) {
    return this.getLayerFixtureConfigs()[e];
  }
  /**
   * Combines this fixtures configs from layer configs into an indexed-dictionary
   *
   * @returns {{ [layerId: string]: any }} Dictionary where key is the layer id and the value is this fixture's config for that layer
   */
  getLayerFixtureConfigs() {
    const e = {}, t = (i, r = void 0) => {
      if (i.fixtures && i.fixtures[this.id] !== void 0) {
        let a = i.id;
        r !== void 0 && (a = this.$iApi.geo.layer.sublayerId(r.id, i.index)), e[a] = i.fixtures[this.id];
      }
      i.sublayers && i.sublayers.forEach((a) => t(a, i));
    };
    return this.$iApi.geo.layer.allLayers().forEach((i) => t(i.config)), e;
  }
  /**
   * If the `panelWidth` property is provided, handle default and specified panel widths for the given fixture.
   *
   * @param {Array<string>} panels list of panel names for the calling fixture
   */
  handlePanelWidths(e) {
    if (this.config?.panelWidth) {
      const t = {};
      if (typeof this.config.panelWidth == "number")
        e.forEach((i) => {
          t[i] = this.config.panelWidth;
        });
      else {
        this.config.panelWidth.default && e.forEach((i) => {
          t[i] = this.config.panelWidth.default;
        });
        for (const i in this.config.panelWidth)
          i != "default" && (t[i] = this.config.panelWidth[i]);
      }
      for (const i in t) {
        const r = this.$iApi.panel.get(i);
        this.$iApi.panel.setStyle(r, {
          "flex-basis": `${t[i]}px`
        });
      }
    }
  }
  /**
   * If the `panelTeleport` property is provided, handle specified panelTeleport for the given fixture.
   *
   * @param {Array<string>} panels list of panel names for the calling fixture
   */
  handlePanelTeleports(e) {
    if (this.config?.panelTeleport) {
      const t = He(this.$vApp.$pinia), i = !!this.config.panelTeleport.target;
      e.forEach((r) => {
        t.items[r].teleport = i ? this.config.panelTeleport : this.config.panelTeleport[r], t.items[r].style.width = "100%";
      });
    }
  }
}
class Hn extends J {
  panelStore = He(this.$vApp.$pinia);
  /** Updates the content of a specific HTML-based screen of a panel, using HTML content
   *
   * @param {PanelInstance | string} panel The `PanelInstance` object, or its respective id, that corresponds to
   * the panel whose content is to be updated.
   * @param {{ [key: string]: string | HTMLElement }} html keyed language object containing HTML content for each
   * language, represented as an HTMLElement object or a string.
   * @param {string} [screenId] id of the screen to be updated. If not provided, it will update the first screen in the panel
   * @memberof PanelAPI
   */
  updateHTML(e, t, i) {
    const r = this.get(e), a = i ? r.screens[i] : Object.values(r.screens)[0];
    if (Wi(a))
      for (const o in t)
        a[o].innerHTML = t[o] instanceof HTMLElement ? t[o].outerHTML : t[o];
    else
      console.error("Screen must be an HTML object");
  }
  /**
   * Helper for `registerHTML()`. Creates and returns the `PanelConfigSet` required to register the HTML panel
   *
   * @param {HTMLPanelInstance} htmlPanel a `HTMLPanelInstance` object, excluding its `i18nMap` (if it exists),
   * corresponding to the new html panel
   * @returns {PanelConfigSet} The `PanelConfigSet` corresponding to the panel that is to be created
   * @memberof PanelAPI
   */
  registerHTMLConfig(e) {
    for (const i in e.content)
      if (typeof e.content[i] == "string") {
        const r = document.createElement("div");
        r.innerHTML = e.content[i], e.content[i] = r;
      }
    const t = {};
    return t[e.id] = {
      screens: {},
      style: e.style ?? {
        width: "350px"
      },
      alertName: e.alertName
    }, t[e.id].screens[e.id] = e.content, t;
  }
  /** Registers a new panel containing a screen of HTML content and returns the PanelInstance
   *
   * @param {HTMLPanelInstance} htmlPanel a HTMLPanelInstance object corresponding to the new html panel
   * @memberof PanelAPI
   */
  registerHTML(e) {
    const t = this.get(e.id);
    if (t)
      return console.error("Panel already exist"), t;
    const i = this.registerHTMLConfig(e), r = {
      i18n: {
        messages: e.i18nMap
      }
    };
    return this.register(i, r);
  }
  register(e, t) {
    const i = Yn(e) ? { [e.id]: e.config } : e;
    if (t) {
      const a = t.i18n || {}, o = this.$iApi.$i18n;
      Object.entries(a.messages || {}).forEach((l) => o.mergeLocaleMessage(...l)), Object.entries(a.dateTimeFormats || {}).forEach((l) => o.mergeDateTimeFormat(...l)), Object.entries(a.numberFormats || {}).forEach((l) => o.mergeNumberFormat(...l));
    }
    const r = Object.entries(i).reduce((a, [o, l]) => (a.push(new St(this.$iApi, o, l)), a), []);
    return r.forEach((a) => this.panelStore.registerPanel(a)), r.length === 1 ? r[0] : r.reduce((a, o) => (a[o.id] = o, a), {});
  }
  /**
   * Provides a promise that resolves when the panel(s) have finished registration.
   *
   * @param {(string | string[])} panelId the panel ID(s) for which the promise is requested
   * @memberof PanelAPI
   */
  async isRegistered(e) {
    const t = Array.isArray(e) ? e : [e];
    t.forEach((r) => {
      this.panelStore.regPromises[r] === void 0 && this.panelStore.addRegPromise(r);
    });
    const i = this.panelStore.getRegPromises(t);
    return Array.isArray(e) ? Promise.all(i) : i[0];
  }
  /**
   * Returns the panel ids of all currently registered panels
   *
   * @returns {Array<string>}
   * @memberof PanelAPI
   */
  allRegistered() {
    return Object.keys(this.panelStore.items);
  }
  /**
   * Removes a panel instance
   *
   * @param {(string | PanelInstance)} value
   * @memberof PanelAPI
   */
  remove(e) {
    const t = this.get(e);
    t && (t.isOpen && this.close(t), this.panelStore.removePanel(t));
  }
  /**
   * Finds and returns a panel with the id specified.
   *
   * @param {(string | PanelInstance)} value
   * @returns {PanelInstance}
   * @memberof PanelAPI
   */
  // TODO: implement overload to get a list of panels, similar to `feature.get([...])`
  get(e) {
    const t = typeof e == "string" ? e : e.id;
    return this.panelStore.items[t];
  }
  /**
   * Opens a registered panel in the panel stack.
   *
   *  - `rInstance.panel.open('panel-id')` -- opens the 'panel-id' panel on the first screen in the set
   *  - `rInstance.panel.open(<PanelInstance>)` -- opens the provided `PanelInstance` object on the first screen in the set
   *  - `rInstance.panel.open({ id: 'panel-id', screen: 'screen-id' })` -- opens the 'panel-id' panel on the 'screen-id' screen
   *  - `rInstance.panel.open({ id: 'panel-id', screen: 'screen-id', props: {... } })` -- opens the 'panel-id' panel on the 'screen-id' screen passing supplied `props` to it
   *
   * @param {(string | PanelInstance | PanelInstancePath)} value a panel id, a `PanelInstance` object or an object of the form `{ id: <panel-id>, screen: <id>, props: <object> }`.
   * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
   * @memberof PanelAPI
   */
  open(e) {
    let t, i, r;
    if (typeof e == "string" || e instanceof St ? t = this.get(e) : (t = this.get(e.id), { screen: i, props: r } = e), !t)
      return t;
    if (t.isOpen && !t.isVisible)
      t.minimize();
    else if (t.isOpen)
      return t;
    return i || (t.route && !r ? { screen: i, props: r } = t.route : i = Object.keys(t.screens).pop()), this.show(t, { screen: i, props: r }) ? (this.panelStore.openPanel(t), this.$iApi.updateAlert(
      this.$iApi.$i18n.t("panels.alert.open", {
        name: t.alertName ? this.$iApi.$i18n.t(t.alertName) : t.id
      })
    ), this.$iApi.event.emit(E.PANEL_OPENED, t)) : console.error(`Failed to open ${t.id} panel.`), t;
  }
  /**
   * Returns an array of open `PanelInstance` objects.
   *
   * @readonly
   * @type {PanelInstance[]}
   * @memberof PanelAPI
   */
  get opened() {
    return this.panelStore.orderedItems.concat(this.panelStore.teleported);
  }
  /**
   * Returns an array of visible `PanelInstance` object.
   * This is not every *open* panel, only the ones currently visible to the user.
   *
   * @readonly
   * @type {PanelInstance[]}
   * @memberof PanelAPI
   */
  get visible() {
    return this.panelStore.visible.concat(this.panelStore.teleported);
  }
  /**
   * Closes the panel specified.
   *
   * @param {(string | PanelInstance)} value
   * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
   * @memberof PanelAPI
   */
  close(e) {
    const t = this.get(e);
    return t && (t.isPinned && t.pin(!1), this.panelStore.closePanel(t), this.$iApi.updateAlert(
      this.$iApi.$i18n.t("panels.alert.close", {
        name: t.alertName ? this.$iApi.$i18n.t(t.alertName) : t.id
      })
    ), this.$iApi.event.emit(E.PANEL_CLOSED, t), t);
  }
  /**
   * Minimizes the panel specified, mechanically the same as closing however it does not emit the close event so that temporary appbar buttons stay.
   *
   * @param {(string | PanelInstance)} value
   * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
   * @memberof PanelAPI
   */
  minimize(e) {
    const t = this.get(e);
    return t && (t.isPinned && t.pin(!1), this.panelStore.closePanel(t), this.$iApi.updateAlert(
      this.$iApi.$i18n.t("panels.alert.minimize", {
        name: t.alertName ? this.$iApi.$i18n.t(t.alertName) : t.id
      })
    ), this.$iApi.event.emit(E.PANEL_MINIMIZED, t), t);
  }
  /**
   * Moves the specifed visible panel to the left or right.
   *
   * @param {(string | PanelInstance)} value
   * @param {PanelDirection} direction the direction of movement, either "left" or "right".
   * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
   * @memberof PanelAPI
   */
  move(e, t) {
    const i = this.get(e);
    return i && (this.panelStore.movePanel(i, t), i);
  }
  /**
   * Toggle panel.
   *
   * @param {string | PanelInstance | PanelInstancePath} [value]
   * @param {boolean} toggle Optional param. True forces a panel open, false forces the panel to close.
   * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
   * @memberof PanelAPI
   */
  toggle(e, t) {
    let i;
    return typeof e == "string" || e instanceof St ? i = this.get(e) : i = this.get(e.id), i && (t = typeof t < "u" ? t : !i.isVisible, t !== i.isVisible ? t ? this.open(e) : this.close(i) : i);
  }
  /**
   * Toggle panel's minimized state
   *
   * @param {string | PanelInstance | PanelInstancePath} [value]
   * @param {boolean} toggle Optional param. True forces a panel open, false forces the panel to minimize.
   * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
   * @memberof PanelAPI
   */
  toggleMinimize(e, t) {
    let i;
    return typeof e == "string" || e instanceof St ? i = this.get(e) : i = this.get(e.id), i && (t = typeof t < "u" ? t : !i.isVisible, t !== i.isVisible ? t ? this.open(i) : this.minimize(i) : i);
  }
  /**
   * Pin/unpin/toggle (if no value provided) pin status of the provided panel. When pinning, automatically unpins any previous pinned panel if exists.
   *
   * @param {(string | PanelInstance)} value
   * @param {boolean} [pin]
   * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
   * @memberof PanelAPI
   */
  pin(e, t) {
    const i = this.get(e);
    return !i || (t = typeof t < "u" ? t : !i.isPinned, !i.isPinned && !t) || (this.panelStore.pinned = t ? i : void 0), i;
  }
  /**
   * Returns the currently pinned panel instance, if exists.
   *
   * @readonly
   * @type {(PanelInstance | undefined)}
   * @memberof PanelAPI
   */
  get pinned() {
    return this.panelStore.pinned || void 0;
  }
  /**
   * Sets route to the specified screen id and pass props to the panel screen components.
   *
   * @param {(string | PanelInstance)} value
   * @param {PanelConfigRoute} route
   * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered and the specified screen exists, undefined otherwise.
   * @memberof PanelAPI
   */
  // TODO: implement panel route history
  show(e, t) {
    const i = this.get(e);
    if (!i)
      return i;
    if (i.screens[t.screen]) {
      if (i.screens[t.screen]?.props) {
        const r = Object.keys(i.screens[t.screen]?.props).filter((o) => o !== "panel"), a = t.props ? Object.keys(t.props) : [];
        for (let o = 0; o < r.length; o++)
          if (!a.includes(r[o]) && i.screens[t.screen].props[r[o]].required)
            return;
      }
      return t.screen in this.$element._context.components || i.registerScreen(t.screen), i.teleport && (t.props = {
        header: !!i.teleport?.showHeader,
        ...t.props
      }), this.panelStore.items[i.id].route = t, i;
    }
  }
  /**
   * Sets the styles of the specified panel by using a provided CSS styles object.
   *
   * @param {(string | PanelInstance)} value
   * @param {object} style
   * @param {boolean} [replace=false] merge with existing styles if `false`; replace if `true`
   * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
   * @memberof PanelAPI
   */
  setStyle(e, t, i = !1) {
    const r = this.get(e);
    return r && (this.panelStore.items[r.id].style = i ? t : { ...r.style, ...t }, r);
  }
  /**
   * Expands/collapses the expand state of the panel. Toggles whether the panel expands if no expand value is given.
   *
   * @param {(string | PanelInstance)} value
   * @param {boolean} expand Optional. Whether the panel should expand, toggles the value if not set
   * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
   * @memberof PanelAPI
   */
  expand(e, t) {
    const i = this.get(e);
    return i && (this.panelStore.items[i.id].expanded = t !== void 0 ? t : !i.expanded, i);
  }
}
function Yn(s) {
  return s.id !== void 0 && typeof s.id == "string" && s.config !== void 0;
}
const Jn = {};
function Kn(s, e) {
  const t = Z("panel-screen");
  return v(), W(t, {
    header: !1,
    class: "screen-spinner"
  }, {
    content: ie(() => e[0] || (e[0] = [
      m("div", { class: "loader" }, null, -1)
    ])),
    _: 1
  });
}
const Zn = /* @__PURE__ */ Ne(Jn, [["render", Kn], ["__scopeId", "data-v-a3c61802"]]), Xn = /* @__PURE__ */ Object.assign({ "../fixtures/areas-of-interest/screen.vue": () => import("./screen-CRTtfklp.js"), "../fixtures/basemap/screen.vue": () => import("./screen-Ce9st9me.js"), "../fixtures/export/screen.vue": () => import("./screen-Cs_6Ieod.js"), "../fixtures/geosearch/screen.vue": () => import("./screen-Dh9yllNi.js"), "../fixtures/grid/screen.vue": () => import("./screen-DN5bhJhJ.js"), "../fixtures/help/screen.vue": () => import("./screen-MjCjoX9J.js"), "../fixtures/layer-reorder/screen.vue": () => import("./screen-093tSUz5.js"), "../fixtures/legend/screen.vue": () => import("./screen-sSFwbkmq.js"), "../fixtures/metadata/screen.vue": () => import("./screen-1N34g2aS.js"), "../fixtures/settings/screen.vue": () => import("./screen-ZmMz2bod.js"), "../fixtures/wizard/screen.vue": () => import("./screen-BsiyJq-Q.js") });
class St extends J {
  /**
   * ID of this panel.
   *
   * @type {string}
   * @memberof PanelInstance
   */
  id;
  /**
   * A collection of panel screens to be displayed inside the panel.
   *
   * @type {PanelConfigScreens}
   * @memberof PanelInstance
   */
  screens;
  /**
   * A list of screen component ids which are loaded and ready to be rendered.
   *
   * @private
   * @type {string[]}
   * @memberof PanelInstance
   */
  loadedScreens = [];
  alertName;
  /**
   * The config for the element to render the panel screen in (instead of its usual spot in the panel stack).
   */
  teleport;
  controls;
  button;
  /**
   * Checks if a given screen component id is already loaded and ready to render.
   *
   * @param {string} id
   * @returns {boolean}
   * @memberof PanelInstance
   */
  isScreenLoaded(e) {
    return this.loadedScreens.indexOf(e) !== -1;
  }
  /**
   * Loads and register panel screen components.
   * This function should be called just before the screen is to be shown; this will avoid needlessly loading components upfront
   * (sometimes certain screens might not get used at all).
   *
   * @param {string} id
   * @memberof PanelInstance
   */
  registerScreen(e) {
    const t = this.screens[e];
    let i;
    if (js(t) || qs(t))
      i = t, this.loadedScreens.push(e);
    else if (Wi(t))
      i = {
        template: `<panel-screen :panel="this" :screenId="'${e}'">
                           </panel-screen>`
      };
    else {
      let r;
      typeof t == "string" ? r = Xn[`../fixtures/${t}`]() : r = t();
      const a = new Promise((o, l) => {
        r.then((n) => {
          this.loadedScreens.push(e), o(Ws(n) ? n.default : n);
        }), r.catch((n) => l(n));
      });
      i = ws({
        // The component to load (should be a Promise)
        loader: () => a,
        // A component to use while the async component is loading
        loadingComponent: Zn,
        // A component to use if the load fails
        // TODO: add error component
        // error: ErrorComponent,
        // Delay before showing the loading component. Default: 200ms.
        delay: 200
        // The error component will be displayed if a timeout is
        // provided and exceeded. Default: Infinity.
        // TODO: restore the error timeout
        // timeout: 3000,
      });
    }
    this.$iApi.$element.component(e, i);
  }
  /**
   * The style object applied to the panel.
   *
   * @type {PanelConfigStyle}
   * @memberof PanelInstance
   */
  style;
  /**
   * Whether the panel expands to fill empty space.
   *
   * @type {boolean}
   * @memberof PanelInstance
   */
  expanded;
  /**
   * Returns the width of the panel in pixels or undefined if not set.
   *
   * @readonly
   * @type {(number | undefined)}
   * @memberof PanelInstance
   */
  get width() {
    if (!(!this.style.width || this.style.width.slice(-2) !== "px"))
      return parseInt(this.style.width);
  }
  /**
   * Specifies which panel screen to display and optional props to be passed to the screen panel component.
   *
   * @type {PanelConfigRoute}
   * @memberof PanelConfig
   */
  route;
  /**
   * Creates an instance of PanelInstance.
   *
   * @param {InstanceAPI} iApi
   * @param {string} id
   * @param {PanelConfig} config
   * @param {PanelRegistrationOptions} [options={}]
   * @memberof PanelInstance
   */
  constructor(e, t, i) {
    if (super(e), {
      id: this.id,
      screens: this.screens,
      style: this.style,
      expanded: this.expanded,
      alertName: this.alertName,
      button: this.button,
      controls: this.controls
    } = {
      id: t,
      style: {},
      expanded: !1,
      controls: {
        expand: !1,
        ...i.controls
      },
      ...i
    }, Object.keys(this.screens).length === 0)
      throw new Error("panel must have at least a single screen");
    this.route = { screen: Object.keys(this.screens).pop() }, this.style["flex-basis"] || (this.style["flex-basis"] = this.style.width || "350px"), this.style.width = "80%";
  }
  /**
   * Opens a registered panel in the panel stack.
   * This is a proxy to `InstanceAPI.panel.open(...)`.
   *
   *  - `somePanel.open()` -- opens the panel on the first screen in the set
   *  - `somePanel.open('screen-id')` -- opens the panel on the 'screen-id' screen
   *  - `somePanel.open({ screen: 'screen-id', props: {... } })` -- opens the panel on the 'screen-id' screen passing supplied `props` to it
   *
   * @param {(string | { screen: string; props?: object })} value a screen id, or an object of the form `{ screen: <id>, props: <object> }`.
   * @returns {this}
   * @memberof PanelInstance
   */
  open(e) {
    return typeof e > "u" ? this.$iApi.panel.open(this) : this.$iApi.panel.open({
      id: this.id,
      ...typeof e == "string" ? { screen: e } : e
    }), this;
  }
  /**
   * Checks if the panel is open or not.
   *
   * @readonly
   * @type {boolean}
   * @memberof PanelInstance
   */
  get isOpen() {
    return this.$iApi.panel.opened.indexOf(this) !== -1;
  }
  /**
   * true if the panel is currently visible
   *
   * @readonly
   * @type {boolean}
   * @memberof PanelInstance
   */
  get isVisible() {
    return this.$iApi.panel.visible.indexOf(this) !== -1;
  }
  /**
   * Close this panel.
   * This is a proxy to `InstanceAPI.panel.close(...)`.
   *
   * @returns {this}
   * @memberof PanelInstance
   */
  close() {
    return this.$iApi.panel.close(this), this;
  }
  /**
   * Minimize this panel.
   * This is a proxy to `InstanceAPI.panel.minimize(...)`.
   *
   * @returns {this}
   * @memberof PanelInstance
   */
  minimize() {
    return this.$iApi.panel.minimize(this), this;
  }
  /**
   * Move this panel left or right in the stack.
   * This is a proxy to `InstanceAPI.panel.move(...)`.
   *
   * @param {PanelDirection} direction the direction of movement, either "left" or "right".
   * @returns {this}
   * @memberof PanelInstance
   */
  move(e) {
    return this.$iApi.panel.move(this, e), this;
  }
  /**
   * Checks if this panel is the leftmost visible and not-teleported panel.
   *
   * @readonly
   * @type {boolean}
   * @memberof PanelInstance
   */
  get isLeftMostPanel() {
    if (this.$iApi.panel.visible.length > 0) {
      for (const e of this.$iApi.panel.visible)
        if (!e.teleport)
          return this.id === e.id;
    }
    return !1;
  }
  /**
   * Checks if this panel is the rightmost visible and non-teleported panel.
   * Note that a traditional for each loop is used due to reverse traversal of the array.
   *
   * @readonly
   * @type {boolean}
   * @memberof PanelInstance
   */
  get isRightMostPanel() {
    if (this.$iApi.panel.visible.length > 0) {
      for (let e = this.$iApi.panel.visible.length - 1; e >= 0; e--)
        if (!this.$iApi.panel.visible[e].teleport)
          return this.id === this.$iApi.panel.visible[e].id;
    }
    return !1;
  }
  /**
   * Remove this panel.
   * This is a proxy to `InstanceAPI.panel.remove(...)`.
   *
   * @returns {this}
   * @memberof PanelInstance
   */
  remove() {
    return this.$iApi.panel.remove(this), this;
  }
  /**
   * Toggle panel.
   * This is a proxy to `InstanceAPI.panel.toggle(...)`.
   *
   * @param {(boolean | { screen: string; props?: object; toggle?: boolean })} [value]
   * @returns {this}
   * @memberof PanelInstance
   */
  toggle(e) {
    return typeof e > "u" ? this.$iApi.panel.toggle(this, !this.isOpen) : typeof e == "boolean" ? e !== this.isOpen && this.$iApi.panel.toggle(this, e) : this.$iApi.panel.toggle(
      { id: this.id, screen: e.screen, props: e.props },
      typeof e.toggle < "u" ? e.toggle : !this.isOpen
    ), this;
  }
  /**
   * Toggle panel's minimize state.
   * This is a proxy to `InstanceAPI.panel.toggleMinimize(...)`.
   *
   * @param {(boolean | { screen: string; props?: object; toggle?: boolean })} [value]
   * @returns {this}
   * @memberof PanelInstance
   */
  toggleMinimize(e) {
    return typeof e > "u" || typeof e == "boolean" ? this.$iApi.panel.toggleMinimize(this, e) : this.$iApi.panel.toggleMinimize(
      { id: this.id, screen: e.screen, props: e.props },
      typeof e.toggle < "u" ? e.toggle : !this.isOpen
    ), this;
  }
  /**
   * Pin/unpin/toggle (if no value provided) pin status of this panel. When pinning, automatically unpins any previous pinned panel if exists.
   * This is a proxy to `InstanceAPI.panel.pin(...)`.
   *
   *
   * @param {boolean} [value]
   * @returns {this}
   * @memberof PanelInstance
   */
  pin(e) {
    return e = typeof e < "u" ? e : !this.isPinned, this.$iApi.panel.pin(this, e), this;
  }
  /**
   * Checks if this panel is pinned or not.
   *
   * @readonly
   * @type {boolean}
   * @memberof PanelInstance
   */
  get isPinned() {
    return !!this.$iApi.panel.pinned && this.$iApi.panel.pinned.id === this.id;
  }
  /**
   * Sets route to the specified screen id and pass props to the panel screen components.
   * This is a proxy to `InstanceAPI.panel.route(...)`.
   *
   * @param {(string | PanelConfigRoute)} value
   * @returns {this}
   * @memberof PanelInstance
   */
  show(e) {
    const t = typeof e == "string" ? { screen: e } : e;
    return this.route = t, this.$iApi.panel.show(this, t), this;
  }
  /**
   * Sets the styles of the specified panel by using a provided CSS styles object.
   * This is a proxy to `InstanceAPI.panel.setStyles(...)`.
   *
   * @param {object} style
   * @param {boolean} [replace=false]
   * @returns {this}
   * @memberof PanelInstance
   */
  setStyles(e, t = !1) {
    return this.$iApi.panel.setStyle(this, e, t), this;
  }
  /**
   * Expands/collapses/toggles the expand state of the panel. Panels set to expand fill empty space.
   * This is a proxy to `InstanceAPI.panel.expand(...)`.
   *
   * @param {boolean} expand Optional. Whether the panel should expand. Toggles if no value is given.
   * @returns {this}
   * @memberof PanelInstance
   */
  expand(e) {
    return this.$iApi.panel.expand(this, e), this;
  }
}
class Qn extends J {
  constructor(e) {
    super(e);
  }
  /**
   * Add a layer to the map and legend (if legend exists)
   *
   * @param layerConfig a RAMP layer configuration object
   * @param [legendConfig] optional legend block configuration object. If not provided, a default layer block will be created
   * @returns resolves with the layer instance
   */
  async easyLayer(e, t) {
    const i = this.$iApi.geo.layer.createLayer(e);
    await this.$iApi.geo.map.addLayer(i);
    const r = this.$iApi.fixture.get("legend");
    return r && (t ? r.addItem(t) : await r.addLayerItem(i)), i;
  }
}
function el(s) {
  const e = {};
  (Array.isArray(s) ? s : [s]).forEach((o) => {
    o.language || (console.warn("RAMP2 config with no language supplied. Defaulting to English"), o.language = "en");
    const l = tl(o);
    e[o.language] = l;
  });
  const i = Object.entries(e).map((o) => {
    const l = o[1].fixturesEnabled;
    return delete o[1].fixturesEnabled, l;
  });
  let r = !1;
  const a = i.reduce(
    (o, l) => o.filter((n) => {
      const c = l.includes(n);
      return r = r || !c, c;
    })
  );
  return r && console.warn(
    "Configs attempted to load different sets of fixtures. Only common fixtures will be loaded (all configs must load the same fixtures)."
  ), a.push("grid", "crosshairs", "scrollguard", "panguard", "wizard", "layer-reorder", "details"), {
    startingFixtures: a,
    configs: e
  };
}
function tl(s) {
  const e = {
    // TODO is there a current version variable anywhere? I can see us forgetting to update this.
    //      on the other hand, any updates to the target version will need to edit this file.
    version: "4.0",
    fixtures: {},
    layers: [],
    map: {},
    panels: { open: [] },
    system: { animate: !0, exposeOid: !1, exposeMeasurements: !0 },
    fixturesEnabled: []
    // this will be removed in the final step of configUpgrade2to4
  };
  return sl(s.services, e), il(s.map, e), rl(s.ui, e), s.plugins && al(s.plugins, e), e;
}
function il(s, e) {
  if (s.layers && s.layers.forEach((t) => {
    e.layers.unshift(ls(t));
  }), s.initialBasemapId && (e.map.initialBasemapId = s.initialBasemapId), s.components) {
    if (s.components.geoSearch && (s.components.geoSearch.enabled && e.fixturesEnabled.push("geosearch"), typeof s.components.geoSearch.showGraphic < "u" && console.warn(
      "showGraphic property provided in geoSearch map component cannot be mapped and will be skipped."
    ), typeof s.components.geoSearch.showInfo < "u" && console.warn(
      "showInfo property provided in geoSearch map component cannot be mapped and will be skipped."
    )), s.components.overviewMap && s.components.overviewMap.enabled && (e.fixtures.overviewmap || (e.fixtures.overviewmap = {
      basemaps: {}
    }, e.fixturesEnabled.push("overviewmap")), e.fixtures.overviewmap.startMinimized = !s.components.overviewMap.initiallyExpanded, e.fixtures.overviewmap.expandFactor = s.components.overviewMap.expandFactor ?? 1.5), s.components.northArrow && s.components.northArrow.enabled) {
      const t = {};
      s.components.northArrow.arrowIcon && (t.arrowIcon = s.components.northArrow.arrowIcon), s.components.northArrow.poleIcon && (t.poleIcon = s.components.northArrow.poleIcon), t && (e.fixtures.northarrow = t, e.fixturesEnabled.push("northarrow"));
    }
    if (s.components.scaleBar && s.components.scaleBar.enabled) {
      switch (e.map.caption = {
        mapCoords: {
          disabled: !1
        },
        scaleBar: {
          disabled: !1,
          imperialScale: s?.components?.scaleBar?.scalebarUnit === "english" || s?.components?.scaleBar?.scalebarUnit === "dual" && Math.floor(Math.random() * 2) === 0
        }
      }, s.components?.mouseInfo?.spatialReference?.wkid) {
        case 4326:
          e.map.caption.mapCoords.formatter = "LAT_LONG_DMS";
          break;
        case 3978:
          e.map.caption.mapCoords.formatter = "CANADA_ATLAS_LAMBERT";
          break;
        case 102100:
          e.map.caption.mapCoords.formatter = "WEB_MERCATOR";
          break;
        default:
          e.map.caption.mapCoords.formatter = "LAT_LONG_DMS";
          break;
      }
      s.components.scaleBar.attachTo && console.warn(
        "attachTo property provided in scaleBar map component cannot be mapped and will be skipped."
      );
    }
    s.components.basemap && s.components.basemap.enabled && e.fixturesEnabled.push("basemap");
  }
  s.extentSets && (e.map.extentSets = [], s.extentSets.forEach((t) => {
    const i = {
      id: t.id,
      default: {
        xmin: t.default.xmin,
        xmax: t.default.xmax,
        ymin: t.default.ymin,
        ymax: t.default.ymax,
        spatialReference: t.spatialReference
      }
    };
    t.full && (i.full = {
      xmin: t.full.xmin,
      xmax: t.full.xmax,
      ymin: t.full.ymin,
      ymax: t.full.ymax,
      spatialReference: t.spatialReference
    }), t.maximum && (i.maximum = {
      xmin: t.maximum.xmin,
      xmax: t.maximum.xmax,
      ymin: t.maximum.ymin,
      ymax: t.maximum.ymax,
      spatialReference: t.spatialReference
    }), e.map.extentSets.push(i);
  })), s.lodSets && (e.map.lodSets = s.lodSets), s.tileSchemas && (e.map.tileSchemas = [], s.tileSchemas.forEach((t) => {
    const i = {
      id: t.id,
      name: t.name,
      extentSetId: t.extentSetId,
      lodSetId: t.lodSetId,
      thumbnailTileUrls: [],
      // TODO: use some defaulting here?
      hasNorthPole: t.hasNorthPole || !1
    };
    t.overviewUrl && (e.fixtures.overviewmap || (e.fixtures.overviewmap = {
      basemaps: {}
    }, e.fixturesEnabled.push("overviewmap")), e.fixtures.overviewmap.basemaps[t.id] = {
      id: t.overviewUrl.id || `overviewmap-basemap-${t.id}`,
      tileSchemaId: t.id,
      layers: [
        {
          id: t.overviewUrl.id || `overviewmap-basemap-${t.id}-0`,
          layerType: t.overviewUrl.layerType === "esriDynamic" ? x.MAPIMAGE : x.TILE,
          url: t.overviewUrl.url,
          opacity: t.overviewUrl.opacity ?? 1
        }
      ]
    }), e.map.tileSchemas.push(i);
  })), s.baseMaps && (e.map.basemaps = [], s.baseMaps.forEach((t) => {
    const i = {
      id: t.id,
      tileSchemaId: t.tileSchemaId,
      name: t.name,
      description: t.description,
      altText: t.altText,
      thumbnailUrl: t.thumbnailUrl,
      layers: []
      // populated later
    };
    t.attribution && (i.attribution = {
      text: {},
      logo: {}
    }, t.attribution.text && (i.attribution.text.disabled = !t.attribution.text.enabled, i.attribution.text.value = t.attribution.text.value), t.attribution.logo && (i.attribution.logo.disabled = !t.attribution.logo.enabled, i.attribution.logo.altText = t.attribution.logo.altText, i.attribution.logo.value = t.attribution.logo.value, i.attribution.logo.link = t.attribution.logo.link)), t.layers.forEach((r, a) => {
      const o = {
        id: r.id || `${t.id}-${a}`,
        layerType: r.layerType === "esriDynamic" ? x.MAPIMAGE : x.TILE,
        url: r.url,
        opacity: r.opacity ?? 1
      };
      i.layers.push(o);
    }), e.map.basemaps.push(i);
  })), s.legend && (e.fixturesEnabled.push("legend"), s.legend.type === "autopopulate" ? (e.fixtures.legend = {
    root: {
      name: "I'm root",
      children: []
    }
  }, e.layers && e.layers.toReversed().forEach((t) => {
    if (t.type === "esri-map-image" || t.type === "ogc-wms") {
      const i = {
        name: t.name ?? `${t.id} Group`,
        children: []
      };
      t.sublayers.forEach((r) => {
        const a = {
          layerId: t.id
        };
        r.name && (a.name = r.name), r.controls && (a.controls = r.controls), r.disabledControls && (a.disabledControls = r.disabledControls), t.type === "esri-map-image" ? a.sublayerIndex = r.index : (a.sublayerId = r.id, console.warn(
          `sublayerId property defined in legend entry ${a.layerId} is currently not supported.`
        )), i.children.push(a);
      }), e.fixtures.legend.root.children.push(i);
    } else {
      const i = {
        layerId: t.id
      };
      t.controls && (i.controls = t.controls), t.disabledControls && (i.disabledControls = t.disabledControls), e.fixtures.legend.root.children.push(i);
    }
  })) : e.fixtures.legend = {
    root: Xt(s.legend.root)
  });
}
function Xt(s) {
  const e = { name: s.name, children: [] };
  typeof s.hidden < "u" && (e.hidden = s.hidden), typeof s.expanded < "u" && (e.expanded = s.expanded);
  const t = ["identify", "opacity", "reload", "remove", "settings", "symbology", "visibility"];
  return s.controls && s.controls.length > 0 && (e.controls = pt(s.controls, t), s.controls.includes("visibility") && e.controls.push("visibilityButton"), (s.controls.length !== 1 || s.controls[0] !== "visibility") && console.warn(
    "Legend entry groups currently support only the visibility control. All other controls are currently not supported."
  ), e.controls.push("expandButton")), s.disabledControls && s.disabledControls.length > 0 && (e.disabledControls = pt(s.disabledControls, t), s.disabledControls.includes("visibility") && e.disabledControls.push("visibilityButton"), (s.disabledControls.length !== 1 || s.disabledControls[0] !== "visibility") && console.warn(
    "Legend entry groups currently support only the visibility control. All other controls are currently not supported."
  )), s.children.forEach((i) => {
    if (i.layerId)
      e.children.push(ki(i));
    else if (i.infoType)
      i.infoType === "unboundLayer" ? console.warn(
        `unboundLayer infoType in infoSection in children list of legend entry group ${e.name} cannot be mapped and will be skipped.`
      ) : (e.children.push({
        infoType: i.infoType,
        content: i.content
      }), typeof i.export < "u" && console.warn(
        `export property in infoSection in children list of legend entry group ${e.name} cannot be mapped and will be skipped.`
      ));
    else if (i.exclusiveVisibility) {
      const r = {
        name: "Visibility Set",
        children: [],
        exclusive: !0
      };
      typeof i.collapse < "u" && console.warn(
        `collapse property in visibilitySet in children list of legend entry group ${e.name} cannot be mapped and will be skipped.`
      ), i.exclusiveVisibility.forEach((a) => {
        a.layerId ? r.children.push(ki(a)) : r.children.push(Xt(a));
      }), e.children.push(r);
    } else
      e.children.push(Xt(i));
  }), e;
}
function ki(s) {
  const e = s, t = [
    "boundaryZoom",
    "datatable",
    "identify",
    "metadata",
    "opacity",
    "refresh",
    "reload",
    "remove",
    "settings",
    "symbology",
    "visibility"
  ];
  return s.controls && s.controls.length > 0 && (e.layerControls = pt(s.controls, t), e.layerControls.push("symbology")), s.disabledControls && s.disabledControls.length > 0 && (e.disabledLayerControls = pt(s.disabledControls, t)), s.controlledIds && (console.warn(
    `controlledIds property defined in legend entry ${s.layerId} cannot be mapped and will be skipped.`
  ), delete e.controlledIds), s.entryIndex && (e.sublayerIndex = s.entryIndex, delete s.entryIndex), s.entryId && console.warn(
    `entryId property defined in legend entry ${s.layerId} cannot be mapped and will be skipped.`
  ), e;
}
function ls(s) {
  const e = Wt(s);
  switch (e.id = s.id, e.url = s.url, s.refreshInterval && (e.refreshInterval = s.refreshInterval, console.warn("Property refreshInterval in layer is currently not supported.")), s.expectedResponseTime && (e.expectedLoadTime = s.expectedResponseTime), s.metadataUrl && (e.metadata = {
    url: s.metadataUrl
  }), s.catalogueUrl && (e.catalogueUrl = s.catalogueUrl), typeof s.enableStructuredDelete < "u" && console.warn(
    `enableStructuredDelete property provided in layer ${s.id} cannot be mapped and will be skipped.`
  ), s.tooltipField && (e.tooltipField = s.tooltipField), s.tolerance && (e.mouseTolerance = s.tolerance, s.layerType === "esriDynamic" && (e.touchTolerance = s.tolerance + 10)), s.customRenderer && (e.customRenderer = s.customRenderer), s.layerType) {
    case "esriDynamic":
      e.layerType = "esri-map-image", typeof s.singleEntryCollapse < "u" && (e.singleEntryCollapse = s.singleEntryCollapse), s.imageFormat && (e.imageFormat = s.imageFormat), s.layerEntries && (e.sublayers = [], s.layerEntries.forEach((t) => {
        const i = Wt(t);
        i.index = t.index, e.sublayers.push(i);
      }));
      break;
    case "esriFeature":
      e.layerType = "esri-feature", s.fileType && (e.layerType = s.fileType === "shapefile" ? "file-shape" : `file-${s.fileType}`, s.colour && (e.colour = s.colour), s.latField && (e.latField = s.latField), s.longField && (e.longField = s.longField));
      break;
    case "ogcWfs":
      e.layerType = "ogc-wfs", s.colour && (e.colour = s.colour), typeof s.xyInAttribs < "u" && (e.xyInAttribs = s.xyInAttribs);
      break;
    case "ogcWms":
      e.layerType = "ogc-wms", s.suppressGetCapabilities && console.warn(
        `suppressGetCapabilities property provided in layer ${s.id} cannot be mapped and will be skipped.`
      ), s.featureInfoMimeType && (s.featureInfoMimeType === "text/html;fgpv=summary" ? e.featureInfoMimeType = "text/html" : e.featureInfoMimeType = s.featureInfoMimeType), s.legendMimeType && console.warn(
        `legendMimeType property provided in layer ${s.id} cannot be mapped and will be skipped.`
      ), s.layerEntries && (e.sublayers = [], s.layerEntries.forEach((t) => {
        const i = Wt(t);
        i.id = t.id, t.currentStyle && (i.currentStyle = t.currentStyle, console.warn(
          `currentStyle property provided in layer entry ${t.id} of layer ${s.id} is currently not supported.`
        )), t.allStyles && console.warn(
          `allStyles property provided in layer entry ${t.id} of layer ${s.id} cannot be mapped and will be skipped.`
        ), e.sublayers.push(i);
      }));
      break;
    case "esriImage":
      e.layerType = "esri-imagery";
      break;
    case "esriTile":
      e.layerType = "esri-tile";
      break;
    default:
      console.warn(`Unhandled layer type in ramp 2 config ${s.layerType}`);
  }
  return s.details && console.warn(`Details config provided in layer ${s.id} cannot be mapped and will be skipped.`), e;
}
function Wt(s) {
  const e = {};
  s.name && (e.name = s.name), s.nameField && (e.nameField = s.nameField), s.extent && (e.extent = s.extent);
  const t = [
    "boundaryZoom",
    "datatable",
    "identify",
    "metadata",
    "opacity",
    "refresh",
    "reload",
    "remove",
    "settings",
    "symbology",
    "visibility"
  ];
  return s.controls && s.controls.length > 0 && (e.controls = pt(s.controls, t), e.controls.push("symbology")), s.disabledControls && s.disabledControls.length > 0 && (e.disabledControls = pt(s.disabledControls, t)), s.state && (e.state = {
    opacity: s.state.opacity ?? 1,
    visibility: s.state.visibility ?? !0,
    identify: s.state.query ?? !0,
    hovertips: s.state.hovertips ?? !0
  }, typeof s.state.snapshot < "u" && console.warn(
    `snapshot property provided in initialLayer settings in layer ${s.id} cannot be mapped and will be skipped.`
  ), typeof s.state.boundingBox < "u" && console.warn(
    `boundingBox property provided in initialLayer settings in layer ${s.id} cannot be mapped and will be skipped.`
  )), typeof s.stateOnly < "u" && (e.cosmetic = s.stateOnly), s.initialFilteredQuery && (e.initialFilteredQuery = s.initialFilteredQuery), ol(s, e), (typeof s.toggleSymbology < "u" || s.table) && (e.fixtures = {}, typeof s.toggleSymbology < "u" && (e.fixtures.legend = {
    toggleSymbology: s.toggleSymbology
  }), s.table && (e.fixtures.grid = {}, s.table.title && (e.fixtures.grid.title = s.table.title), s.table.description && console.warn(
    `description property provided in table property in layer ${s.id} cannot be mapped and will be skipped.`
  ), typeof s.table.maximize < "u" && console.warn(
    `maximize property provided in table property in layer ${s.id} cannot be mapped and will be skipped.`
  ), s.table.search && (s.table.search.enabled && (e.fixtures.grid.search = s.table.search.enabled), s.table.search.value && (e.fixtures.grid.searchFilter = s.table.search.value)), typeof s.table.lazyFilter < "u" && console.warn(
    `lazyFilter property provided in table property in layer ${s.id} cannot be mapped and will be skipped.`
  ), typeof s.table.applyMap < "u" && (e.fixtures.grid.applyMap = s.table.applyMap), typeof s.table.showFilter < "u" && (e.fixtures.grid.showFilter = s.table.showFilter), typeof s.table.filterByExtent < "u" && (e.fixtures.grid.filterByExtent = s.table.filterByExtent), typeof s.table.searchStrictMatch < "u" && console.warn(
    `searchStrictMatch property provided in table property in layer ${s.id} cannot be mapped and will be skipped.`
  ), typeof s.table.printEnabled < "u" && console.warn(
    `printEnabled property provided in table property in layer ${s.id} cannot be mapped and will be skipped.`
  ), s.table.columns && (e.fixtures.grid.columns = [], s.table.columns.forEach((i) => {
    const r = {
      field: i.data
    };
    i.title && (r.title = i.title), i.description && console.warn(
      `description property provided in column property in table property in layer ${s.id} cannot be mapped and will be skipped.`
    ), typeof i.visible < "u" && (r.visible = i.visible), i.width && (r.width = i.width), i.sort && (r.sort = i.sort), typeof i.searchable < "u" && (r.searchable = i.searchable), i.filter && (r.filter = i.filter), e.fixtures.grid.columns.push(r);
  })))), e;
}
function pt(s, e) {
  const t = [];
  return s.forEach((i) => {
    e.includes("identify") && i === "query" ? t.push("identify") : e.includes("datatable") && i === "data" ? t.push("datatable") : e.includes(i) ? t.push(i) : console.warn(`Ignored invalid control: ${i}`);
  }), t;
}
function sl(s, e) {
  if (!s)
    return;
  s.search && (e.fixtures.geosearch = {}, e.fixtures.geosearch.serviceUrls = {
    geoNames: s.search.serviceUrls.geoNames,
    geoLocation: s.search.serviceUrls.geoLocation,
    geoProvince: s.search.serviceUrls.provinces,
    geoTypes: s.search.serviceUrls.types
  }, s.search.serviceUrls.geoSuggest && console.warn(
    "geoSuggest property provided in serviceUrls of search service cannot be mapped and will be skipped."
  ), s.search.settings && (e.fixtures.geosearch.settings = s.search.settings), s.search.disabledSearches && (e.fixtures.geosearch.settings.disabledSearchTypes = s.search.disabledSearches.filter(
    (i) => i !== "SCALE"
  ))), s.export && (e.fixtures.export || (e.fixtures.export = {}, e.fixturesEnabled.push("export")), s.export.title && (e.fixtures.export.title = {
    selected: s.export.title.isSelected ?? !0,
    selectable: s.export.title.isSelectable ?? !0,
    value: s.export.title.value ?? "RAMP-Map / PCAR-Carte"
  }), s.export.map && (e.fixtures.export.map = {
    selected: s.export.map.isSelected ?? !0,
    selectable: s.export.map.isSelectable ?? !0
  }, s.export.map.value && console.warn("value property provided in map export component cannot be mapped and will be skipped.")), s.export.mapElements && (e.fixtures.export.mapElements = {
    selected: s.export.mapElements.isSelected ?? !0,
    selectable: s.export.mapElements.isSelectable ?? !0
  }, s.export.mapElements.value && console.warn(
    "value property provided in mapElements export component cannot be mapped and will be skipped."
  )), s.export.legend && (e.fixtures.export.legend = {
    selected: s.export.legend.isSelected ?? !0,
    selectable: s.export.legend.isSelectable ?? !0
  }, s.export.legend.columnWidth && (e.fixtures.export.legend.columnWidth = s.export.legend.columnWidth), s.export.legend.value && console.warn(
    "value property provided in legend export component cannot be mapped and will be skipped."
  ), typeof s.export.legend.showInfoSymbology < "u" && console.warn(
    "showInfoSymbology property provided in legend export component cannot be mapped and will be skipped."
  ), typeof s.export.legend.showControlledSymbology < "u" && console.warn(
    "showControlledSymbology property provided in legend export component cannot be mapped and will be skipped."
  )), s.export.footnote && (e.fixtures.export.footnote = {
    selected: s.export.footnote.isSelected ?? !0,
    selectable: s.export.footnote.isSelectable ?? !0,
    value: s.export.footnote.value ?? ""
  }), s.export.timestamp && (e.fixtures.export.timestamp = {
    selected: s.export.timestamp.isSelected ?? !0,
    selectable: s.export.timestamp.isSelectable ?? !0
  }, s.export.timestamp.value && console.warn(
    "value property provided in timestamp export component cannot be mapped and will be skipped."
  )), s.export.timeout && console.warn(
    "timeout property provided in export property of services config cannot be mapped and will be skipped."
  ), typeof s.cleanCanvas < "u" && console.warn(
    "cleanCanvas property provided in export property of services config cannot be mapped and will be skipped."
  )), s.proxyUrl && (e.system.proxyUrl = s.proxyUrl), [
    "corsEverywhere",
    "exportMapUrl",
    "geometryUrl",
    "googleAPIKey",
    "esriLibUrl",
    "geolocation",
    "coordInfo",
    "print"
  ].forEach((i) => {
    typeof s[i] < "u" && console.warn(`${i} property provided in services config cannot be mapped and will be skipped.`);
  });
}
function rl(s, e) {
  if (s.navBar) {
    e.fixtures.mapnav = {
      zoomOption: s.navBar.zoom || "buttons",
      items: []
    };
    const r = [
      "geolocator",
      "zoom",
      "home",
      "basemap",
      "help",
      "fullscreen",
      "geosearch",
      "legend"
    ];
    s.navBar.extra.forEach((a) => {
      const o = a.toLowerCase();
      r.includes(o) ? e.fixtures.mapnav.items.push(o) : console.warn(`Ignored invalid mapnav item: ${a}`);
    }), e.fixturesEnabled.push("mapnav");
  }
  if (s.help && (e.fixtures.help = {
    location: s.help.folderName && s.help.folderName !== "default" ? `./${s.help.folderName}` : "./help",
    panelWidth: 350
  }, e.fixturesEnabled.push("help")), s.legend) {
    const r = ["groupToggle", "visibilityToggle"];
    s.legend.reorderable && r.push("layerReorder"), s.legend.allowImport && r.push("wizard"), e.fixtures.legend ? e.fixtures.legend.headerControls = r : (e.fixturesEnabled.push("legend"), e.fixtures.legend = {
      headerControls: r,
      root: {}
    }), s.legend.isOpen && s.legend.isOpen.large && e.panels.open.push({ id: "legend" });
  }
  e.fixtures.appbar = { items: [] }, e.fixturesEnabled.push("appbar");
  const t = ["layers", "basemap", "export", "help", "geoSearch"];
  s.appBar ? (s.appBar.layers !== !1 && (e.fixtures.appbar.items.push("legend"), e.fixturesEnabled.includes("legend") || e.fixturesEnabled.push("legend")), s.appBar.geoSearch !== !1 && e.fixturesEnabled.includes("geosearch") && e.fixtures.appbar.items.push("geosearch"), s.appBar.basemap !== !1 && e.fixtures.appbar.items.push("basemap")) : (e.fixtures.appbar.items.push("legend"), e.fixturesEnabled.includes("legend") || e.fixturesEnabled.push("legend"), e.fixtures.appbar.items.push("geosearch"), e.fixtures.appbar.items.push("basemap")), s.sideMenu && s.sideMenu.items && s.sideMenu.items.length > 0 && s.sideMenu.items.forEach((r) => {
    r.forEach((a) => {
      a === "layers" && !e.fixtures.appbar.items.includes("legend") ? (e.fixtures.appbar.items.push("legend"), e.fixturesEnabled.includes("legend") || e.fixturesEnabled.push("legend")) : a !== "layers" && t.includes(a) && !e.fixtures.appbar.items.includes(a.toLowerCase()) && (e.fixtures.appbar.items.push(a.toLowerCase()), (a.toLowerCase() === "help" || a.toLowerCase() === "export" && !e.fixturesEnabled.includes(a.toLowerCase())) && e.fixturesEnabled.push(a.toLowerCase()));
    });
  }), s.tableIsOpen && // r2ui.tableIsOpen.id &&
  s.tableIsOpen.large, [
    "fullscreen",
    "theme",
    "logoUrl",
    "failureFeedback",
    "title",
    "restrictNavigation",
    "about"
  ].forEach((r) => {
    typeof s[r] < "u" && console.warn(`${r} property provided in services config cannot be mapped and will be skipped.`);
  });
}
function al(s, e) {
  s.areasOfInterest.enable && (e.fixturesEnabled.includes("areas-of-interest") || e.fixturesEnabled.push("areas-of-interest"), s.areasOfInterest.areas && (e.fixtures["areas-of-interest"] = {
    areas: s.areasOfInterest.areas.map((t) => ({
      title: `${t["title-en-CA"]} / ${t["title-fr-CA"]}`,
      thumbnail: t.thumbnailUrl,
      altText: t.altText ?? "",
      description: t.description ?? "",
      extent: {
        xmin: t.xmin,
        xmax: t.xmax,
        ymin: t.ymin,
        ymax: t.ymax,
        spatialReference: {
          wkid: t.wkid
        }
      }
    }))
  }));
}
function ol(s, e) {
  const t = s.outfields && s.outfields !== "*";
  if (!t && !s.fieldMetadata)
    return;
  const i = {
    fieldInfo: [],
    exclusiveFields: !1,
    enforceOrder: !1
  };
  s.fieldMetadata ? (i.fieldInfo = s.fieldMetadata.map((r) => {
    const a = {
      name: r.data
    };
    return r.alias && (a.alias = r.alias), a;
  }), t && (s.outfields.split(",").map((a) => a.trim()).forEach((a) => {
    i.fieldInfo.findIndex((o) => o.name === a) === -1 && i.fieldInfo.push({ name: a });
  }), i.exclusiveFields = !0)) : t && (i.fieldInfo = s.outfields.split(",").map((r) => ({ name: r.trim() })), i.exclusiveFields = !0), e.fieldMetadata = i;
}
var rt = { major: "4", minor: "12", patch: "0", timestamp: "Thu Jun 12 13:16:15 2025 -0400", hash: "b18fca47734e151941e929697c0855530a97469c" };
console.info(
  `RAMP v${rt.major}.${rt.minor}.${rt.patch} [${rt.hash.slice(0, 9)}] (Built on ${new Date(
    rt.timestamp.toString()
  ).toLocaleString()})`
);
const mt = rt;
function jl(s) {
  return el(s);
}
function Wl(s) {
  return ls(s);
}
const Hl = (s, e, t) => new Ko(s, e, t), ut = new zs();
export {
  H as $,
  Gr as A,
  yt as B,
  gn as C,
  ni as D,
  F as E,
  di as F,
  E as G,
  Yo as H,
  Jo as I,
  Go as J,
  ri as K,
  x as L,
  re as M,
  _ as N,
  nt as O,
  K as P,
  _e as Q,
  vt as R,
  Ri as S,
  $n as T,
  Rt as U,
  T as V,
  St as W,
  Ce as X,
  fe as Y,
  le as Z,
  Ne as _,
  He as a,
  q as a0,
  j as a1,
  se as a2,
  Zt as a3,
  ts as a4,
  Vo as a5,
  N as a6,
  mt as a7,
  jl as a8,
  Wl as a9,
  Hl as aa,
  ut as ab,
  $t as b,
  xo as c,
  qo as d,
  Hi as e,
  So as f,
  Io as g,
  Uo as h,
  Yt as i,
  Bo as j,
  J as k,
  pe as l,
  vn as m,
  zo as n,
  De as o,
  is as p,
  li as q,
  jo as r,
  Wo as s,
  $e as t,
  Le as u,
  Ee as v,
  Ge as w,
  Xo as x,
  Ho as y,
  C as z
};
