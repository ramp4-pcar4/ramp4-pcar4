import { TinyEmitter as ns } from "tiny-emitter";
import { defineStore as U, createPinia as as } from "pinia";
import { ref as h, computed as P, markRaw as ie, defineComponent as O, inject as Ae, reactive as ve, watch as Et, onBeforeUnmount as ct, resolveDirective as k, withDirectives as M, openBlock as y, createElementBlock as A, withKeys as ls, withModifiers as Zt, onMounted as He, normalizeClass as re, normalizeStyle as Li, createVNode as se, Transition as $i, withCtx as X, createBlock as j, resolveDynamicComponent as cs, mergeProps as us, TransitionGroup as Ri, Fragment as je, renderList as ut, unref as _, nextTick as $t, renderSlot as Oe, createElementVNode as m, vShow as ps, resolveComponent as Z, createTextVNode as it, toDisplayString as G, createCommentVNode as D, onUpdated as ds, Teleport as hs, getCurrentInstance as fs, useTemplateRef as li, createApp as Ci, toRaw as xe, h as ms, render as Dt, defineAsyncComponent as gs } from "vue";
import ys from "@arcgis/core/Basemap";
import xt from "@arcgis/core/Color";
import dt from "@arcgis/core/config";
import ci from "@arcgis/core/geometry/Extent";
import vs from "@arcgis/core/geometry/Multipoint";
import bs from "@arcgis/core/geometry/Point";
import Kt from "@arcgis/core/geometry/Polygon";
import Oi from "@arcgis/core/geometry/Polyline";
import As from "@arcgis/core/geometry/SpatialReference";
import { fromJSON as ws } from "@arcgis/core/geometry/support/jsonUtils";
import Es from "@arcgis/core/Graphic";
import ki from "@arcgis/core/layers/FeatureLayer";
import xs from "@arcgis/core/layers/GraphicsLayer";
import Ss from "@arcgis/core/layers/ImageryLayer";
import Mi from "@arcgis/core/layers/MapImageLayer";
import Pi from "@arcgis/core/layers/OpenStreetMapLayer";
import Ni from "@arcgis/core/layers/TileLayer";
import _s from "@arcgis/core/layers/WMSLayer";
import Is from "@arcgis/core/layers/support/Field";
import Ts from "@arcgis/core/Map";
import Ls from "@arcgis/core/renderers/SimpleRenderer";
import { fromJSON as at } from "@arcgis/core/renderers/support/jsonUtils";
import Ue from "@arcgis/core/request";
import { executeForIds as $s } from "@arcgis/core/rest/query";
import ui from "@arcgis/core/rest/support/Query";
import Rs from "@arcgis/core/symbols/PictureMarkerSymbol";
import Cs from "@arcgis/core/symbols/SimpleFillSymbol";
import Os from "@arcgis/core/symbols/SimpleLineSymbol";
import jt from "@arcgis/core/symbols/SimpleMarkerSymbol";
import { fromJSON as Qt } from "@arcgis/core/symbols/support/jsonUtils";
import ks from "@arcgis/core/layers/support/FeatureFilter";
import Ms from "@arcgis/core/views/MapView";
import Ps from "@arcgis/core/webmap/background/ColorBackground";
import Fi from "deepmerge";
import { Tools as Ns } from "terraformer";
import ne from "proj4";
import { debounce as St, throttle as ft } from "throttle-debounce";
import { createI18n as Fs, useI18n as q } from "vue-i18n";
import we from "screenfull";
import pi from "lodash.clonedeep";
import Ds, { setDefaultProps as Gs, useTippy as Us } from "vue-tippy";
import Bs from "linkify-html";
import { createPopper as zs, detectOverflow as Vs } from "@popperjs/core";
import Rt from "redaxios";
import js from "terraformer-arcgis-parser";
import { dsv as di, csv2geojson as qs } from "csv2geojson";
import qe from "await-to-js";
import Qe from "svg.js";
import Di from "animejs";
import "tippy.js/animations/scale.css";
var $e = /* @__PURE__ */ ((r) => (r.BLOB = "blob", r.DATE = "date", r.DOUBLE = "double", r.GEOMETRY = "geometry", r.GLOBAL_ID = "global-id", r.GUID = "guid", r.INTEGER = "integer", r.LONG = "long", r.OID = "oid", r.RASTER = "raster", r.SINGLE = "single", r.SMALL_INTEGER = "small-integer", r.STRING = "string", r.XML = "xml", r))($e || {}), Le = /* @__PURE__ */ ((r) => (r.CIRCLE = "circle", r.CROSS = "cross", r.DIAMOND = "diamond", r.ICON = "icon", r.PATH = "path", r.SQUARE = "square", r.TRIANGLE = "triangle", r.X = "x", r))(Le || {}), le = /* @__PURE__ */ ((r) => (r.DASH = "dash", r.DASHDOT = "dash-dot", r.DASHDOTDOT = "short-dash-dot-dot", r.DOT = "dot", r.LONGDASH = "long-dash", r.LONGDASHDOT = "long-dash-dot", r.LONGDASHDOTDOT = "long-dash-dot-dot", r.NONE = "none", r.NULL = "none", r.SHORTDASH = "short-dash", r.SHORTDASHDOT = "short-dash-dot", r.SHORTDASHDOTDOT = "short-dash-dot-dot", r.SHORTDOT = "short-dot", r.SOLID = "solid", r))(le || {}), Gi = /* @__PURE__ */ ((r) => (r.BEVEL = "bevel", r.MITER = "miter", r.ROUND = "round", r))(Gi || {}), Ui = /* @__PURE__ */ ((r) => (r.ROUND = "round", r.BUTT = "butt", r.SQUARE = "square", r))(Ui || {}), Bi = /* @__PURE__ */ ((r) => (r.BDIAG = "backward-diagonal", r.CROSS = "cross", r.DIAG_CROSS = "diagonal-cross", r.FDIAG = "forward-diagonal", r.HORIZONTAL = "horizontal", r.NONE = "none", r.NULL = "none", r.SOLID = "solid", r.VERTICAL = "vertical", r))(Bi || {}), T = /* @__PURE__ */ ((r) => (r.POINT = "Point", r.MULTIPOINT = "MultiPoint", r.LINESTRING = "LineString", r.MULTILINESTRING = "MultiLineString", r.POLYGON = "Polygon", r.MULTIPOLYGON = "MultiPolygon", r.LINEARRING = "LinearRing", r.EXTENT = "Extent", r.NONE = "None", r.UNKNOWN = "Unknown", r))(T || {}), Ct = /* @__PURE__ */ ((r) => (r.Simple = "simple", r.Unique = "uniqueValue", r.ClassBreaks = "classBreaks", r.Unknown = "unknown", r))(Ct || {}), x = /* @__PURE__ */ ((r) => (r.FEATURE = "esri-feature", r.MAPIMAGE = "esri-map-image", r.TILE = "esri-tile", r.IMAGERY = "esri-imagery", r.GRAPHIC = "esri-graphic", r.WMS = "ogc-wms", r.WFS = "ogc-wfs", r.GEOJSON = "file-geojson", r.GEOJSONZIPPED = "file-zip-geojson", r.CSV = "file-csv", r.SHAPEFILE = "file-shape", r.FLATGEOBUF = "file-fgb", r.FLATGEOBUFZIPPED = "file-zip-fgb", r.OSM = "osm-tile", r.DATACSV = "data-csv", r.DATAJSON = "data-json", r.DATATABLE = "data-esri-table", r.UNKNOWN = "unknown", r.SUBLAYER = "sublayer", r))(x || {}), me = /* @__PURE__ */ ((r) => (r.FEATURE = "feature", r.GRAPHIC = "graphic", r.IMAGERY = "imagery", r.MAPIMAGE = "map-image", r.NOLAYER = "no-layer", r.OSM = "osm-tile", r.TILE = "tile", r.UNKNOWN = "unknown", r.WMS = "wms", r))(me || {}), Q = /* @__PURE__ */ ((r) => (r.ESRI_FEATURE = "esriFeature", r.ESRI_RASTER = "esriRaster", r.ESRI_TILE = "esriTile", r.OSM_TILE = "osmTile", r.OGC_RASTER = "ogcRaster", r.UNKNOWN = "unknown", r))(Q || {}), B = /* @__PURE__ */ ((r) => (r.POINT = "Point", r.MULTIPOINT = "MultiPoint", r.LINESTRING = "LineString", r.MULTILINESTRING = "MultiLineString", r.POLYGON = "Polygon", r.MULTIPOLYGON = "MultiPolygon", r))(B || {}), K = /* @__PURE__ */ ((r) => (r.GEOMETRIC = "geometric", r.SYMBOLIC = "symbolic", r.HYBRID = "hybrid", r.NONE = "none", r))(K || {}), N = /* @__PURE__ */ ((r) => (r.NEW = "new", r.INITIATING = "initiating", r.INITIATED = "initiated", r.TERMINATING = "terminating", r.TERMINATED = "terminated", r))(N || {}), z = /* @__PURE__ */ ((r) => (r.NEW = "new", r.LOADING = "loading", r.LOADED = "loaded", r.ERROR = "error", r))(z || {}), ce = /* @__PURE__ */ ((r) => (r.NOT_LOADED = "not-loaded", r.NOT_VISUAL = "not-visual", r.REFRESH = "refresh", r.UP_TO_DATE = "up-to-date", r))(ce || {}), st = /* @__PURE__ */ ((r) => (r.ESRI = "esri", r.TEXT = "text", r.IMAGE = "image", r.HTML = "html", r.XML = "xml", r.JSON = "json", r.UNKNOWN = "unknown", r))(st || {}), ae = /* @__PURE__ */ ((r) => (r.SYMBOL = "symbol", r.GRID = "grid", r.EXTENT = "extent", r.INITIAL = "initial", r.API = "api", r.PERMANENT = "permanent", r))(ae || {}), V = /* @__PURE__ */ ((r) => (r.BoundaryZoom = "boundaryZoom", r.Datatable = "datatable", r.Identify = "identify", r.Metadata = "metadata", r.Opacity = "opacity", r.Refresh = "refresh", r.Reload = "reload", r.Remove = "remove", r.Settings = "settings", r.Symbology = "symbology", r.Visibility = "visibility", r))(V || {});
class be {
  attributes;
  geometry;
  style;
  id;
  constructor(e, t, i) {
    this.geometry = e, t ? this.id = t : this.id = nt.sharedUtils.generateUUID(), i ? this.attributes = i : this.attributes = {};
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
class I {
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
    const e = new I("");
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
    return new I(4326);
  }
  /**
   * Returns a spatial ref object from a config typed object
   * @param srObject config spatial reference object
   * @returns spatial reference object with same settings as input
   */
  static fromConfig(e) {
    if (e.wkt)
      return new I(e.wkt);
    if (e.wkid)
      return new I(e.wkid, e.latestWkid);
    throw new Error("Could not parse config spatial reference object");
  }
  /**
   * Parse the typical RAMP formats for spatial references into an RAMP SpatialReference object
   * @param {SpatialReference | string | number} sr can be RAMP SpatialReference, WKID integer, WKT string, or ESPG:#### string
   * @returns {SpatialReference} Spatial Reference object
   */
  static parseSR(e) {
    return e ? e instanceof I ? e.clone() : typeof e == "string" && e.startsWith("EPSG:") ? new I(parseInt(e.substring(5).trim())) : new I(e) : I.latLongSR();
  }
  static fromESRI(e) {
    if (e.wkt)
      return new I(e.wkt);
    {
      const t = e.toJSON().latestWkid, i = new I(e.wkid);
      return t && (i.latestWkid = t), i;
    }
  }
  toESRI() {
    return new As(this.lean());
  }
  static fromGeoJSON(e) {
    const t = I.parseGeoJsonCrs(e);
    return t.substring(0, 5) === "EPSG:" ? new I(parseInt(t.slice(5))) : new I(t);
  }
  /**
   * Convert a GeoJSON styled co-ord reference to an EPSG styled string
   * @param {GeoJson.CoordinateReferenceSystem} crs GeoJSON crs object
   * @returns {string} A proj4 friendly projection, in the form EPSG:#### or a WKT
   */
  static parseGeoJsonCrs(e) {
    if (e) {
      if (e.type === "name") {
        const t = /urn:ogc:def:crs:EPSG::(\d+)/, i = e.properties.name, s = i.match(t);
        if (s)
          return "EPSG:" + s[1];
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
class Ye {
  /** Spatial Reference of the geometry */
  sr;
  /** Id of the geometry */
  id;
  constructor(e, t) {
    this.id = e ? e.toString() : "", this.sr = I.parseSR(t);
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
class Be extends Ye {
  constructor() {
    super("no_geometry");
  }
  get type() {
    return T.NONE;
  }
}
class H extends Ye {
  // storing raw geometry in array format.
  // it will be in native format for geojson and for feeding into other
  // ramp geometry types (i.e. arrays of points like [[x1,y1],[x2,y2]])
  rawArray;
  constructor(e, t, i, s) {
    super(e, t.sr || i), s ? this.rawArray = t.slice() : this.rawArray = H.parseXY(t);
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
      if (e instanceof H)
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
    return new H(t, [e.x, e.y], I.fromESRI(e.spatialReference), !0);
  }
  toESRI() {
    return new bs({
      x: this.x,
      y: this.y,
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new H(t, e.coordinates, I.fromGeoJSON(e.crs), !0);
  }
  toGeoJSON() {
    return this.geoJsonFactory(B.POINT, this.toArray());
  }
}
class pe extends Ye {
  // for now, keeping raw for efficiency (not having object padding around every vertex)
  rawArray;
  constructor(e, t, i, s) {
    super(e, t.sr || i), s ? this.rawArray = pe.arrayDeepCopy(t) : t instanceof pe ? this.rawArray = t.toArray() : this.rawArray = pe.parsePointSet(t);
  }
  /** Returns an array of the contained lines formatted as API Point objects. A new array is returned each time this is called. */
  get pointArray() {
    return this.rawArray.map((e, t) => new H(this.childIdGenerator(t), e, this.sr, !0));
  }
  /** Returns a copy of the n-th contained point. */
  getAt(e) {
    return new H(this.childIdGenerator(e), this.rawArray[e], this.sr, !0);
  }
  /** Will update the n-th contained point with the values of the point parameter. It is assumed the point is in the same spatial reference as the Multipoint */
  updateAt(e, t) {
    this.rawArray[t] = H.parseXY(e);
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
    return pe.arrayDeepCopy(this.rawArray);
  }
  static parsePointSet(e) {
    if (Array.isArray(e)) {
      if (e.length === 0)
        throw new Error("no verticies provided");
      return e.map((t) => H.parseXY(t));
    } else
      throw new Error("Bad geometry input encountered");
  }
  static arrayDeepCopy(e) {
    return e.map((t) => t.slice());
  }
}
class rt extends pe {
  constructor(e, t, i, s) {
    super(e, t, i, s);
  }
  /** Returns the string 'MultiPoint'. */
  get type() {
    return T.MULTIPOINT;
  }
  // TODO make an .addPoint? .removePoint?
  static fromESRI(e, t) {
    return new rt(
      t,
      e.points,
      I.fromESRI(e.spatialReference),
      !0
    );
  }
  toESRI() {
    return new vs({
      points: this.toArray(),
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new rt(
      t,
      e.coordinates,
      I.fromGeoJSON(e.crs),
      !0
    );
  }
  toGeoJSON() {
    return this.geoJsonFactory(B.MULTIPOINT, this.toArray());
  }
}
class Ge extends pe {
  constructor(e, t, i, s) {
    if (super(e, t, i, s), this.rawArray.length < 2)
      throw new Error("lines require at least two verticies");
  }
  /** Returns the string 'LineString'. */
  get type() {
    return T.LINESTRING;
  }
  static fromESRI(e, t) {
    return new Ge(t, e.paths[0], I.fromESRI(e.spatialReference), !0);
  }
  toESRI() {
    return new Oi({
      paths: [this.toArray()],
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new Ge(t, e.coordinates, I.fromGeoJSON(e.crs), !0);
  }
  toGeoJSON() {
    return this.geoJsonFactory(B.LINESTRING, this.toArray());
  }
}
class ye extends Ye {
  rawArray;
  constructor(e, t, i, s) {
    if (super(e, t.sr || i), s)
      this.rawArray = ye.arrayDeepCopy(t);
    else if (t instanceof ye)
      this.rawArray = t.toArray();
    else if (t instanceof pe)
      this.rawArray = [t.toArray()];
    else if (Array.isArray(t)) {
      if (t.length === 0)
        throw new Error("no lines provided");
      this.rawArray = t.map((o) => pe.parsePointSet(o));
    } else
      throw new Error("invalid lines format for MulitLineString");
  }
  /** Returns an array of the contained lines formatted as API LineString objects. A new array is returned each time this is called. */
  get lineArray() {
    return this.rawArray.map((e, t) => new Ge(this.childIdGenerator(t), e, this.sr, !0));
  }
  /** Returns a copy of the n-th contained line. */
  getAt(e) {
    return new Ge(this.childIdGenerator(e), this.rawArray[e], this.sr, !0);
  }
  /** Will update the n-th contained line with the values of the line parameter. It is assumed the line is in the same spatial reference as the Multipoint */
  updateAt(e, t) {
    this.rawArray[t] = pe.parsePointSet(e);
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
    return ye.arrayDeepCopy(this.rawArray);
  }
  static arrayDeepCopy(e) {
    return e.map((t) => t.map((i) => i.slice()));
  }
  static fromESRI(e, t) {
    return new ye(t, e.paths, I.fromESRI(e.spatialReference), !0);
  }
  toESRI() {
    return new Oi({
      paths: this.toArray(),
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new ye(
      t,
      e.coordinates,
      I.fromGeoJSON(e.crs),
      !0
    );
  }
  toGeoJSON() {
    return this.geoJsonFactory(B.MULTILINESTRING, this.toArray());
  }
}
class Ve extends pe {
  constructor(e, t, i, s) {
    if (super(e, t, i, s), Ve.closeRing(this.rawArray), this.length < 4)
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
    return new Ve(t, e.rings[0], I.fromESRI(e.spatialReference), !0);
  }
  toESRI() {
    return new Kt({
      rings: [this.toArray()],
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new Ve(t, e.coordinates, I.fromGeoJSON(e.crs), !0);
  }
  toGeoJSON() {
    return this.geoJsonFactory(B.POLYGON, [this.toArray()]);
  }
}
class te extends Ye {
  rawArray;
  // from arrays of verticies (i.e. one line) that can be interpreted as a single-ring polygon
  // for now, not allowing these as it increases parsing logic quite a bit.
  // constructor(id: IdDef, polygon: Array<Point>, sr?: SpatialReference)
  // constructor(id: IdDef, polygon: Array<Array<number>>, sr?: SpatialReference)
  // constructor(id: IdDef, polygon: Array<object>, sr?: SpatialReference)
  constructor(e, t, i, s) {
    super(e, t.sr || i), s ? this.rawArray = te.arrayDeepCopy(t) : this.rawArray = te.parsePolygon(t);
  }
  addLinearRings(e) {
    e.forEach((t) => this.rawArray.push(t.toArray()));
  }
  // TODO make a .getAt, .updateAt for rings?
  // TODO make a .removeLinearRings?
  /** Returns an array of the contained rings. A new array is returned each time this is called. */
  get ringArray() {
    return this.rawArray.map((e, t) => new Ve(this.childIdGenerator(t), e, this.sr, !0));
  }
  /** Returns the string 'Polygon'. */
  get type() {
    return T.POLYGON;
  }
  /**
   * Returns an array of ring arrays (e.g. [[[x1, y1], [x2, y2], [x3, y3], [x1, y1]], [<another ring>]] )
   */
  toArray() {
    return te.arrayDeepCopy(this.rawArray);
  }
  static parsePolygon(e) {
    let t = [];
    if (e instanceof te)
      return e.toArray();
    if (e instanceof ye)
      t = e.toArray();
    else if (e instanceof pe)
      t = [e.toArray()];
    else if (Array.isArray(e)) {
      if (e.length === 0)
        throw new Error("no rings provided");
      t = e.map((i) => pe.parsePointSet(i));
    } else
      throw new Error("invalid input format for parsePolygon");
    return t.forEach((i) => Ve.closeRing(i)), t;
  }
  static arrayDeepCopy(e) {
    return e.map((t) => t.map((i) => i.slice()));
  }
  static fromESRI(e, t) {
    return new te(t, e.rings, I.fromESRI(e.spatialReference), !0);
  }
  toESRI() {
    return new Kt({
      rings: this.toArray(),
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new te(t, e.coordinates, I.fromGeoJSON(e.crs), !0);
  }
  toGeoJSON() {
    return this.geoJsonFactory(B.POLYGON, this.toArray());
  }
}
class Re extends Ye {
  rawArray;
  constructor(e, t, i, s) {
    super(e, t.sr || i), s ? this.rawArray = Re.arrayDeepCopy(t) : this.rawArray = Re.parseMultiPolygon(t);
  }
  addPolygon(e) {
    this.rawArray.push(e.toArray());
  }
  // TODO make a .getAt, .updateAt for polygons?
  // TODO make a .removePolygon?
  /** Returns an array of the contained polygons. A new array is returned each time this is called. */
  get polygonArray() {
    return this.rawArray.map((e, t) => new te(this.childIdGenerator(t), e, this.sr, !0));
  }
  /** Returns the string 'MultiPolygon'. */
  get type() {
    return T.MULTIPOLYGON;
  }
  /**
   * Returns an array of polygon arrays (e.g. [[[[x1, y1], [x2, y2], [x3, y3], [x1, y1]], [<another ring>]], [<another polygon>]] )
   */
  toArray() {
    return Re.arrayDeepCopy(this.rawArray);
  }
  static parseMultiPolygon(e) {
    if (e instanceof Re)
      return e.toArray();
    if (e instanceof te)
      return [e.toArray()];
    if (e instanceof ye || e instanceof pe)
      return [te.parsePolygon(e)];
    if (Array.isArray(e)) {
      if (e.length === 0)
        throw new Error("no polygons provided");
      return e.map((t) => te.parsePolygon(t));
    } else
      throw new Error("invalid input format for parseMultiPolygon");
  }
  // sing this function definition. epic chorus.
  static arrayDeepCopy(e) {
    return e.map((t) => t.map((i) => i.map((s) => s.slice())));
  }
  static fromESRI(e, t) {
    return new Re(t, [e.rings], I.fromESRI(e.spatialReference), !0);
  }
  toESRI() {
    const e = [];
    return this.toArray().forEach((t) => {
      t.forEach((i) => e.push(i));
    }), new Kt({
      rings: e,
      spatialReference: this.sr.toESRI()
    });
  }
  static fromGeoJSON(e, t) {
    return new Re(
      t,
      e.coordinates,
      I.fromGeoJSON(e.crs),
      !0
    );
  }
  toGeoJSON() {
    return this.geoJsonFactory(B.MULTIPOLYGON, this.toArray());
  }
}
class F extends Ye {
  // doing things a bit different for Extents.
  // tried array of arrays to be consistent with other geometeries, but
  // was more extra coding and overhead of unrequired array
  rawMin;
  rawMax;
  constructor(e, t, i, s) {
    super(e, t.sr || s), this.rawMin = H.parseXY(t), this.rawMax = H.parseXY(i);
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
    return new H(
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
    return new te(this.id, this.toPolygonArray(), this.sr, !0);
  }
  static fromParams(e, t, i, s, o, n) {
    return new F(e, [t, i], [s, o], n);
  }
  static fromConfig(e, t) {
    return new F(
      e,
      [t.xmin, t.ymin],
      [t.xmax, t.ymax],
      I.fromConfig(t.spatialReference)
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
      I.fromESRI(e.spatialReference)
    );
  }
  toESRI() {
    return new ci({
      xmin: this.xmin,
      ymin: this.ymin,
      xmax: this.xmax,
      ymax: this.ymax,
      spatialReference: this.sr.toESRI()
    });
  }
  static fromArcServer(e, t) {
    return F.fromESRI(ci.fromJSON(e), t);
  }
  // TODO for GeoJSON, we are converting to Polygon.
  //      However the spec also supports bbox string
  //      Not sure which is best. Have a second set of to/from functions?
  static fromGeoJSON(e, t) {
    if (e.coordinates.length !== 5)
      throw new Error("Extent expected a four vertex polygon from GeoJSON");
    const i = e.coordinates[0].slice(), s = i.slice();
    return [1, 2, 3].forEach((o) => {
      [0, 1].forEach((n) => {
        const l = e.coordinates[o];
        i[n] > l[n] && (i[n] = l[n]), s[n] < l[n] && (s[n] = l[n]);
      });
    }), new F(t, i, s, I.fromGeoJSON(e.crs));
  }
  toGeoJSON() {
    return this.geoJsonFactory(B.POLYGON, this.toPolygonArray());
  }
}
class ke {
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
      this.c = e.map((i, s) => s === 3 ? i : parseInt(i)), t === 3 && this.c.push(1);
    } else if (typeof e == "string") {
      const t = e.substring(0, 1) === "#" ? e.substring(1) : e;
      this.c = [0, 2, 4, 6].map((i) => {
        const s = t.substring(i, i + 2);
        return ke.hexToInt(s);
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
    return e[3] = e[3] * 255, `#${e.map((t) => ke.intToHex(t)).join("")}`;
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
    return new xt(this.rgba);
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
class Ce {
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
        const s = e.substring(i - 2);
        return s === "px" ? t = parseFloat(e.substring(0, i - 2)) * 1.333333 : s === "pt" ? t = parseFloat(e.substring(0, i - 2)) : t = parseFloat(e), t;
      } else
        return e;
  }
}
class Fe extends Ce {
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
    if (e = e || { style: Le.CIRCLE }, super(), this._style = e.style || Le.CIRCLE, e.style === Le.ICON) {
      const t = e;
      this._icon = t.icon || "", this._height = Ce.convToPoints(t.height) || 16.5, this._width = Ce.convToPoints(t.width) || 16.5, this._size = 0, this._colour = new ke(), this._outline = new _e(), this._path = "";
    } else {
      const t = e;
      this._size = Ce.convToPoints(t.size) || 12, this._colour = new ke(t.colour ?? "#ffffff40"), this._outline = new _e(t.outline), this._path = this._style === Le.PATH && t.path || "", this._height = 0, this._width = 0, this._icon = "";
    }
    this._xOffset = Ce.convToPoints(e.xOffset) || 0, this._yOffset = Ce.convToPoints(e.yOffset) || 0, this._angle = e.angle || 0;
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
    this._style === Le.ICON !== e && console.warn(`Accessed a point style property that is invalid for the style type ${this._style}`);
  }
  toOptions() {
    const e = {
      style: this.styleType,
      yOffset: this.yOffset,
      xOffset: this.xOffset,
      angle: this.angle
    };
    return this._style === Le.ICON ? {
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
    return this.styleType === Le.ICON ? Fe.isImageUrl(this.icon) ? (e = new Rs(), e.url = this.icon, e.width = this.width, e.height = this.height, e.xoffset = this.xOffset, e.yoffset = this.yOffset, e.angle = this.angle) : (e = new jt(), e.color = new xt(this.colour.rgba), e.size = this.width, e.xoffset = this.xOffset, e.yoffset = this.yOffset, e.angle = this.angle) : (e = new jt(), e.color = new xt(this.colour.rgba), e.size = this.size, e.xoffset = this.xOffset, e.yoffset = this.yOffset, e.angle = this.angle, e.path = this.path, e.style = this.styleType, e.outline = this.outline.toESRI()), e;
  }
  static fromESRI(e) {
    const t = {
      xOffset: e.xoffset,
      yOffset: e.yoffset,
      angle: e.angle
    };
    if (e.type === "simple-marker") {
      const i = t;
      i.style = e.style, i.colour = e.color.toRgba(), i.size = e.size, i.path = e.path, i.outline = _e.fromESRI(e.outline).toOptions();
    } else {
      const i = t;
      i.style = Le.ICON, i.width = e.width, i.height = e.height, i.icon = e.url;
    }
    return new Fe(t);
  }
  static fromArcServer(e) {
    return Fe.fromESRI(Qt(e));
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
      //eslint-disable-line
    );
  }
}
class _e extends Ce {
  _style;
  _width;
  _miter;
  _cap;
  _join;
  _colour;
  constructor(e) {
    e = e || {}, super(), this._style = e.style || le.SOLID;
    const t = Ce.convToPoints(e.width);
    this._width = typeof t > "u" || t < 0 ? 0.75 : t, this._colour = new ke(e.colour), this._miter = e.miter ?? 2, this._cap = e.cap || Ui.ROUND, this._join = e.join || Gi.ROUND;
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
    const e = new Os();
    return e.width = this.width, e.color = this.colour.toESRI(), e.style = this.styleType, e.cap = this.cap, e.miterLimit = this.miter, e.join = this.join, e;
  }
  static fromESRI(e) {
    const t = {
      width: e.width,
      colour: e.color.toRgba(),
      style: e.style
    };
    return new _e(t);
  }
  static fromArcServer(e) {
    return _e.fromESRI(Qt(e));
  }
}
class mt extends Ce {
  _outlineStyle;
  _fillColour;
  _fillStyle;
  constructor(e) {
    super(), e = e || {}, e.fill || (e.fill = {}), this._fillColour = new ke(e.fill.colour), this._fillStyle = e.fill.style || Bi.SOLID, this._outlineStyle = new _e(e.outline);
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
    const e = this.outline.toESRI(), t = new xt(this.fillColour.rgba), i = new Cs();
    return i.style = this.fillStyleType, i.color = t, i.outline = e, i;
  }
  static fromESRI(e) {
    const t = {
      fill: {
        colour: e.color.toRgba(),
        style: e.style
      },
      outline: _e.fromESRI(e.outline).toOptions()
    };
    return new mt(t);
  }
  static fromArcServer(e) {
    return mt.fromESRI(Qt(e));
  }
}
class Ws {
  // expose our common classes, so they can be grabbed from iApi.geo.geom easily
  Extent = F;
  Graphic = be;
  // Hover = Hover;
  LineString = Ge;
  LineStyle = _e;
  LinearRing = Ve;
  MultiLineString = ye;
  MultiPoint = rt;
  MultiPolygon = Re;
  Point = H;
  PointStyle = Fe;
  Polygon = te;
  PolygonStyle = mt;
  SpatialReference = I;
  /**
   * Convert an ESRI map click event object to a generic RAMPish map click event object
   *
   * @param {ViewClickEvent | ViewDoubleClickEvent} esriMapClick an event param from an esri 2D map click or double-click event
   * @param {String | Number} [id] optional id for the map point geometry on the result
   * @returns {MapClick} a generic bundle of data matching a subset of the incoming esri data
   */
  esriMapClickToRamp(e, t) {
    return {
      mapPoint: H.fromESRI(e.mapPoint, t),
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
        return H.fromESRI(e, t);
      case "polyline": {
        const i = e;
        return i.paths.length === 1 ? Ge.fromESRI(i, t) : ye.fromESRI(i, t);
      }
      case "polygon":
        return te.fromESRI(e, t);
      case "extent":
        return F.fromESRI(e, t);
      case "multipoint":
        return rt.fromESRI(e, t);
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
      case B.POINT:
        return H.fromGeoJSON(e, t);
      case B.LINESTRING:
        return Ge.fromGeoJSON(e, t);
      case B.POLYGON:
        return te.fromGeoJSON(e, t);
      case B.MULTIPOINT:
        return rt.fromGeoJSON(e, t);
      case B.MULTILINESTRING:
        return ye.fromGeoJSON(e, t);
      case B.MULTIPOLYGON:
        return Re.fromGeoJSON(e, t);
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
    return Object.keys(e.attributes).forEach((s) => i.properties[s] = e.attributes[s]), i;
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
    const i = this.geomGeoJsonToRamp(e.geometry, t), s = {};
    return Object.keys(e.properties.forEach((n) => s[n] = e.properties[n])), new be(i, "", s);
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
    return t.geometry = this.geomRampToEsri(e.geometry), Object.keys(e.attributes).forEach((i) => t.attributes[i] = e.attributes[i]), e.style && (t.symbol = this.styleRampToEsri(e.style)), new Es(t);
  }
  styleRampToEsri(e) {
    return e.toESRI();
  }
  styleEsriToRamp(e) {
    switch (e.type) {
      case "picture-marker":
      case "simple-marker":
        return Fe.fromESRI(e);
      case "simple-line":
        return _e.fromESRI(e);
      case "simple-fill":
        return mt.fromESRI(e);
      default:
        return console.error(`Unsupported ESRI symbol type encountered: ${e.type}`), new Fe();
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
      case B.POINT:
        return "point";
      case B.LINESTRING:
      case B.MULTILINESTRING:
        return "polyline";
      case B.POLYGON:
      case B.MULTIPOLYGON:
        return "polygon";
      case B.MULTIPOINT:
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
    return Fe.isImageUrl(e);
  }
}
class _t {
  layerIdx;
  name;
  children;
  uid;
  isRoot;
  constructor(e, t, i = "", s = !0) {
    this.layerIdx = e, this.name = i, this.isRoot = s, this.children = [], this.uid = t;
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
class zi {
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
class Vi {
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
      [ae.PERMANENT]: e,
      [ae.INITIAL]: t
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
    const t = this.sql, i = Object.keys(t).filter((s) => t[s]);
    return e.length === 0 ? i : i.filter((s) => e.indexOf(s) === -1);
  }
  /**
   * Indicates if any filters are active. A Permanent filter does not influence the result.
   *
   * @method isActive
   * @returns {Boolean} indicates if any non-permanent filters are active
   */
  isActive() {
    return this.sqlActiveFilters([ae.PERMANENT]).length > 0;
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
    return i === 0 ? "" : i === 1 ? this.sql[t[0]] : t.map((s) => `(${this.sql[s]})`).join(" AND ");
  }
  /**
   * Updates a SQL filter clause.
   *
   * @method setSql
   * @param {String} filterKey key of the filter to update (can be a new value)
   * @param {String} whereClause clause defining the active filters on symbols. Use '' for no filter. Use '1=2' for everything filtered.
   */
  setSql(e, t) {
    e === ae.PERMANENT ? console.error("Attempted to overwrite a permanent filter. Not allowed.") : (this.sql[e] = t, this.clearCacheSet(e));
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
    e.isEqual(this.extent) || (this.extent = e, this.clearCacheSet(ae.EXTENT));
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
    return `_cache$${e.sort().join("$")}${t ? "$" + ae.EXTENT : ""}$`;
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
    const s = this.getCacheKey(t, i);
    this.cache[s] = e;
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
    this.sql = { [ae.PERMANENT]: this.sql[ae.PERMANENT] }, this.extent = void 0, this.clearAllCaches();
  }
}
class gt {
  id;
  sr;
  _defaultExtent;
  _fullExtent;
  _maximumExtent;
  constructor(e, t, i = void 0, s = void 0) {
    this.id = e, this.sr = t.sr.clone(), this._defaultExtent = t.clone(), this._fullExtent = i?.clone(), this._maximumExtent = s?.clone(), i && !i.sr.isEqual(this.sr) && console.error(`Full extent provided in extent set has a mismatching spatial reference: ${i.sr}`), s && !s.sr.isEqual(this.sr) && console.error(
      `Maximum extent provided in extent set has a mismatching spatial reference: ${s.sr}`
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
class Y {
  realPromise;
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
class Hs {
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
    const s = t ?? document.createElement("canvas"), o = document.createElement("img");
    i && (o.crossOrigin = "anonymous");
    const n = new Promise((l, a) => {
      o.addEventListener("load", () => {
        s.width = o.width, s.height = o.height, s.getContext("2d")?.drawImage(o, 0, 0), l(s);
      }), o.addEventListener("error", (c) => a(c));
    });
    return o.src = e, n;
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
    }, i = /\/(\d+)\/?$/, s = e.match(i);
    if (s) {
      const o = s[1];
      t.index = isNaN(parseInt(o)) ? void 0 : parseInt(o), t.rootUrl = e.substr(0, e.length - s[0].length);
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
class It {
  _url;
  _base;
  _query;
  _queryMap = {};
  constructor(e) {
    this._url = e, [this._base, this._query] = e.split("?").concat(""), this._queryMap = this._query.split("&").reduce((t, i) => {
      const [s, o] = i.split("=");
      return t[s] = o, t;
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
    const t = Fi.all([{}, this.queryMap, e]);
    return `${this.base}${Object.entries(t).filter(([, s]) => s !== void 0).map(([s, o], n) => `${n === 0 ? "?" : ""}${s}=${o}`).join("&")}`;
  }
}
const Ys = "EPSG:4326";
class Js {
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
    const t = /urn:ogc:def:crs:EPSG::(\d+)/, i = /EPSG:(\d+)/, s = String(e).match(t) || String(e).match(i) || [];
    if (s.length < 2)
      throw new Error("Invalid code provided.");
    return new Promise((o, n) => {
      const l = `https://epsg.io/${s[1]}.proj4`;
      Ue(l, {
        responseType: "text"
      }).then(
        (u) => {
          u.data ? o(u.data) : n();
        },
        (u) => {
          n(u);
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
    const s = (a, c) => {
      a !== c && ne.defs(c, ne.defs(a));
    };
    if (ne.defs(t))
      return !0;
    if (i && ne.defs(i))
      return s(i, t), !0;
    const o = async (a) => {
      try {
        const c = await this.epsgLookup(a);
        return c === null || c === "" ? !1 : (ne.defs(a, c), !0);
      } catch {
        return !1;
      }
    };
    return await (i ? o(i) : Promise.resolve(!1)) ? (s(i, t), !0) : o(t);
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
    let s, o;
    if (t ? s = this.normalizeProj(t) : s = I.parseGeoJsonCrs(e.crs), i ? o = this.normalizeProj(i) : o = Ys, o === s)
      return e;
    await this.checkProjBomber([s, o]);
    const n = ne(s, o).forward;
    return Ns.applyConverter(e, n);
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
    const i = t.toGeoJSON(), s = await this.projectGeoJson(i, this.normalizeProj(t.sr), this.normalizeProj(e)), o = nt.geom.geomGeoJsonToRamp(s, t.id);
    return o.sr = I.parseSR(e), o;
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
    const i = (f, w, v) => {
      if (v === 0)
        return [f, w];
      const R = [(f[0] + w[0]) / 2, (f[1] + w[1]) / 2];
      if (v === 1)
        return [f, R, w];
      if (v > 1) {
        const L = i(f, R, v - 1), $ = i(R, w, v - 1);
        return L.concat($.slice(1));
      }
      return [[]];
    }, s = t.toPolygonArray().pop() || [];
    let o = [];
    [0, 1, 2, 3].map((f) => i(s[f], s[f + 1], 3).slice(1)).forEach((f) => o = o.concat(f));
    const n = new te("warpy", [o], t.sr, !0), l = await this.projectGeometry(e, n), a = l.toArray().pop() || [], c = a.map((f) => f[0]), u = a.map((f) => f[1]), p = Math.min.apply(null, c), d = Math.max.apply(null, c), b = Math.min.apply(null, u), g = Math.max.apply(null, u);
    return F.fromParams(t.id + "_projected", p, b, d, g, l.sr);
  }
}
class Zs {
  // useful functions
  DEFAULT_MERCATOR = "DEFAULT_ESRI_World_AuxMerc_3857";
  DEFAULT_LAMBERT = "DEFAULT_NRCAN_Lambert_3978";
  proj;
  geom;
  sharedUtils;
  constructor() {
    this.proj = new Js(), this.geom = new Ws(), this.sharedUtils = new Hs();
  }
  defaultTileSchemas() {
    return [this.DEFAULT_LAMBERT, this.DEFAULT_MERCATOR];
  }
  defaultLODs(e) {
    const t = (i) => i.map((s) => ({
      level: s[0],
      resolution: s[1],
      scale: s[2]
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
function Ks(r) {
  return typeof r == "function" && r.render && typeof r.render == "function";
}
function Qs(r) {
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
  return typeof r == "object" && !r.functional && e.some((t) => r[t] !== void 0);
}
function ji(r) {
  return typeof r == "object" && Object.keys(r).every((e) => typeof e == "string") && Object.values(r).every((e) => e instanceof HTMLElement);
}
function Xs(r) {
  return typeof r == "object" && r.default !== void 0;
}
const Tt = U("appbar", () => {
  const r = h({}), e = h([]), t = h([]), i = P(
    () => e.value.map(
      (n) => n.map((l) => r.value[l]).filter((l) => {
        if (typeof l == "string" || l.componentId)
          return !0;
      })
    ).filter((n) => n.length > 0)
  );
  function s(n) {
    t.value.includes(n) || t.value.push(n);
  }
  function o(n) {
    const l = t.value.indexOf(n);
    l !== -1 && t.value.splice(l, 1), n in r.value && delete r.value[n], e.value.forEach((a) => {
      const c = a.indexOf(n);
      c !== -1 && a.splice(c, 1);
    });
  }
  return { items: r, order: e, temporary: t, visible: i, addTempButton: s, removeButton: o };
}), qt = U("grid", () => {
  const r = h({}), e = h(), t = h();
  function i(l) {
    r.value = { ...r.value, [l.id]: l };
  }
  function s(l) {
    r.value[l] !== void 0 && delete r.value[l];
  }
  function o(l) {
    return Object.keys(r.value).find((a) => r.value[a].layerIds.includes(l));
  }
  function n(l, a) {
    r.value[l].layerIds = r.value[l].layerIds.filter((c) => c !== a);
  }
  return {
    grids: r,
    panel: e,
    currentId: t,
    addGrid: i,
    removeGrid: s,
    getGridId: o,
    removeLayer: n
  };
}), De = U("map-caption", () => {
  const r = h({ text: {}, logo: {} }), e = h({}), t = h({}), i = h({});
  function s(n) {
    n !== void 0 ? e.value.isImperialScale = n : e.value.isImperialScale = !e.value.isImperialScale;
  }
  function o(n) {
    r.value.text.value = n.text.value, r.value.text.disabled = n.text.disabled, r.value.logo.altText = n.logo.altText, r.value.logo.link = n.logo.link, r.value.logo.value = n.logo.value, r.value.logo.disabled = n.logo.disabled;
  }
  return {
    attribution: r,
    scale: e,
    coords: t,
    langtoggle: i,
    toggleScale: s,
    setAttribution: o
  };
}), Gt = (r, e) => {
  const t = [...r];
  for (; t.length > 0; ) {
    const i = t.shift();
    if (e(i))
      return i;
    i && t.push(...i.sublayers);
  }
}, Se = U("layer", () => {
  const r = h([]), e = h([]), t = h([]);
  function i(p) {
    return Gt(r.value, (d) => d?.uid === p);
  }
  function s(p) {
    return Gt(r.value, (d) => d?.id === p);
  }
  function o(p) {
    return Gt(
      r.value,
      (d) => d !== void 0 && (d.id === p || d.uid === p)
    );
  }
  function n(p) {
    e.value = [...e.value, p];
  }
  function l(p, d = void 0) {
    r.value = [...r.value, p], p.mapLayer && ((d === void 0 || d < 0) && (console.error("Map layer added to store with invalid index!"), d = t.value.length), t.value.splice(d, 0, p.id), t.value = [...t.value]);
  }
  function a(p, d) {
    if (!p.mapLayer) {
      console.error("Data layer passed to layer store reorder");
      return;
    }
    if (d < 0) {
      console.error("Negative index passed to layer store reorder");
      return;
    }
    d >= t.value.length && (d = t.value.length - 1);
    const b = t.value.findIndex((g) => g === p.id);
    b !== -1 && b !== d && (t.value.splice(b, 1), t.value.splice(d, 0, p.id), t.value = [...t.value]);
  }
  function c(p) {
    const d = r.value.filter((b) => b.id !== p.id || b.uid !== p.uid);
    if (r.value = d, p.mapLayer) {
      const b = t.value.filter((g) => g !== p.id);
      t.value = b;
    }
  }
  function u(p) {
    const d = e.value.filter((b) => b.id !== p);
    e.value = d;
  }
  return {
    /**
     * All layers registered with the instance (aka the "map")
     */
    layers: r,
    /**
     * Layer ids of map layers (regardless of layer state), in order of map stack.
     */
    mapOrder: t,
    layerConfigs: e,
    getLayerByUid: i,
    getLayerById: s,
    getLayerByAny: o,
    addLayerConfig: n,
    addLayer: l,
    reorderLayer: a,
    removeLayer: c,
    removeLayerConfig: u
  };
}), ue = U("config", () => {
  const r = h({
    map: {
      lodSets: [],
      extentSets: [],
      tileSchemas: [],
      basemaps: [],
      initialBasemapId: ""
    },
    fixtures: {},
    layers: []
  }), e = h([]), t = h(), i = h({}), s = h({});
  function o(a) {
    if (i.value[s.value[a]] === void 0)
      throw new Error("Unsupported language or no registered config exists for requested language");
    return i.value[s.value[a]];
  }
  function n(a) {
    const c = { ...r.value, ...a };
    if (r.value = c, Array.isArray(r.value.layers)) {
      const u = Se();
      u.layerConfigs = [...u.layerConfigs, r.value.layers];
    }
  }
  function l(a) {
    const c = a.configLangs, u = a.config, p = a.allLangs;
    c !== void 0 && c.length > 0 && c.forEach((d) => {
      i.value[d] = u, s.value[d] = d;
    }), p !== void 0 && p.length > 0 && p.forEach((d) => {
      s.value[d] = Object.keys(i.value)[0];
    });
  }
  return {
    config: r,
    startingFixtures: e,
    activeBasemapConfig: t,
    registeredConfigs: i,
    registeredLangs: s,
    getActiveConfig: o,
    newConfig: n,
    registerConfig: l
  };
}), qi = U("details", () => {
  const r = h([]), e = h({}), t = h({}), i = h(), s = h(0), o = h(0), n = h(!0), l = h();
  function a(u) {
    const p = r.value.findIndex((d) => d.uid === u.uid);
    p !== -1 && r.value.splice(p, 1);
  }
  function c(u) {
    e.value = { ...e.value, [u.id]: u };
  }
  return {
    payload: r,
    properties: e,
    defaultTemplates: t,
    currentFeatureId: i,
    activeGreedy: s,
    lastHilight: o,
    hilightToggle: n,
    origin: l,
    removeLayer: a,
    addConfigProperty: c
  };
}), ge = U("fixture", () => {
  const r = h({}), e = h({});
  function t(n) {
    return n.map((l) => e.value[l].getPromise());
  }
  function i(n) {
    if (r.value = { ...r.value, [n.id]: ie(n) }, n.id in e.value)
      e.value[n.id].resolveMe(ie(n));
    else {
      const l = new Y();
      l.resolveMe(ie(n)), e.value = {
        ...e.value,
        [n.id]: l
      };
    }
    typeof n.added == "function" && n.added();
  }
  function s(n) {
    delete r.value[n.id], r.value = { ...r.value }, delete e.value[n.id], e.value = { ...e.value }, typeof n.removed == "function" && n.removed();
  }
  function o(n) {
    e.value = {
      ...e.value,
      [n]: new Y()
    };
  }
  return {
    items: r,
    loadPromises: e,
    getLoadPromises: t,
    addFixture: i,
    removeFixture: s,
    addLoadPromise: o
  };
});
var E = /* @__PURE__ */ ((r) => (r.APPBAR_BUTTON_CLICK = "appbar/click", r.COMPONENT = "ramp/component", r.CONFIG_CHANGE = "config/configchanged", r.DETAILS_TOGGLE = "details/toggle", r.FILTER_CHANGE = "filter/change", r.FIXTURE_ADDED = "fixture/added", r.FIXTURE_REMOVED = "fixture/removed", r.GRID_TOGGLE = "grid/toggle", r.HELP_TOGGLE = "help/toggle", r.LANG_CHANGE = "lang/change", r.LAYER_DRAWSTATECHANGE = "layer/drawstatechange", r.LAYER_INITIATIONSTATECHANGE = "layer/initiationStatechange", r.LAYER_LAYERSTATECHANGE = "layer/layerstatechange", r.LAYER_OPACITYCHANGE = "layer/opacitychange", r.LAYER_REGISTERED = "layer/registered", r.LAYER_RELOAD_END = "layer/reloadend", r.LAYER_RELOAD_START = "layer/reloadstart", r.LAYER_REMOVE = "layer/remove", r.LAYER_VISIBILITYCHANGE = "layer/visibilitychange", r.MAP_BASEMAPCHANGE = "map/basemapchanged", r.MAP_BLUR = "map/blur", r.MAP_CLICK = "map/click", r.MAP_CREATED = "map/created", r.MAP_DESTROYED = "map/destroyed", r.MAP_DOUBLECLICK = "map/doubleclick", r.MAP_EXTENTCHANGE = "map/extentchanged", r.MAP_FOCUS = "map/focus", r.MAP_GRAPHICHIT = "map/graphichit", r.MAP_IDENTIFY = "map/identify", r.MAP_KEYDOWN = "map/keydown", r.MAP_KEYUP = "map/keyup", r.MAP_MOUSEDOWN = "map/mousedown", r.MAP_MOUSELEAVE = "map/mouseleave", r.MAP_MOUSEMOVE = "map/mousemove", r.MAP_MOUSEMOVE_END = "map/mousemoveend", r.MAP_MOUSEMOVE_START = "map/mousemovestart", r.MAP_REFRESH_END = "map/refreshend", r.MAP_REFRESH_START = "map/refreshstart", r.MAP_REORDER = "map/reorder", r.MAP_RESIZED = "map/resized", r.MAP_SCALECHANGE = "map/scalechanged", r.MAP_START = "map/start", r.METADATA_TOGGLE = "metadata/toggle", r.PANEL_CLOSED = "panel/closed", r.PANEL_MINIMIZED = "panel/minimized", r.PANEL_OPENED = "panel/opened", r.RAMP_MOBILEVIEW_CHANGE = "ramp/mobileviewchange", r.REORDER_TOGGLE = "reorder/toggle", r.SETTINGS_TOGGLE = "settings/toggle", r.USER_LAYER_ADDED = "user/layeradded", r.WIZARD_TOGGLE = "wizard/toggle", r))(E || {}), Wt = /* @__PURE__ */ ((r) => (r.CONFIG_CHANGE_UPDATES_MAP_ATTRIBS = "ramp_config_change_updates_map_attribs", r.LAYER_ERROR_UPDATES_LEGEND = "ramp_layer_error_updates_legend", r.LAYER_REGISTER_BINDS_LEGEND = "ramp_layer_register_binds_legend", r.LAYER_RELOAD_END_BINDS_LEGEND = "ramp_layer_reload_end_binds_legend", r.LAYER_RELOAD_START_UPDATES_LEGEND = "ramp_layer_reload_start_updates_legend", r.LAYER_REMOVE_UPDATES_DETAILS = "ramp_layer_remove_updates_details", r.LAYER_REMOVE_CHECKS_GRID = "ramp_layer_remove_checks_grid", r.LAYER_REMOVE_UPDATES_LEGEND = "ramp_layer_remove_updates_legend", r.LAYER_USERADD_UPDATES_LEGEND = "ramp_layer_useradd_updates_legend", r.MAP_BASEMAP_CHECKS_TILE_PROJ = "ramp_map_basemap_checks_tile_proj", r.MAP_BASEMAP_UPDATES_MAP_ATTRIBS = "ramp_map_basemap_updates_map_attribs", r.MAP_BLUR_UPDATES_KEY_HANDLER = "ramp_map_blur_updates_key_handler", r.MAP_CLICK_RUNS_IDENTIFY = "ramp_map_click_runs_identify", r.MAP_CREATED_INITIALIZES_FIXTURES = "ramp_map_created_initializes_fixtures", r.MAP_CREATED_UPDATES_MAP_ATTRIBS = "ramp_map_created_updates_map_attribs", r.MAP_EXTENT_UPDATES_MAPTIP = "ramp_map_extent_updates_maptip", r.MAP_GRAPHICHIT_CREATES_MAPTIP = "ramp_map_graphichit_creates_maptip", r.MAP_IDENTIFY_OPENS_IDENTIFY_RESULTS = "ramp_map_identify_opens_identify_results", r.MAP_KEYDOWN_UPDATES_COORDS = "ramp_map_keydown_updates_coords", r.MAP_KEYDOWN_UPDATES_KEY_HANDLER = "ramp_map_keydown_updates_key_handler", r.MAP_KEYUP_UPDATES_KEY_HANDLER = "ramp_map_keyup_updates_key_handler", r.MAP_MOUSE_UPDATES_COORDS = "ramp_map_mouse_updates_coords", r.MAP_MOUSE_UPDATES_MAPTIP = "ramp_map_mouse_updates_maptip", r.MAP_MOUSELEAVE_REMOVES_MAPTIP = "ramp_map_mouseleave_removes_maptip", r.MAP_RESIZE_UPDATES_SCALEBAR = "ramp_map_resize_updates_scalebar", r.MAP_SCALE_UPDATES_SCALEBAR = "ramp_map_scale_updates_scalebar", r.PANEL_CLOSE_UPDATES_APPBAR = "ramp_panel_close_updates_appbar", r.PANEL_OPEN_UPDATES_APPBAR = "ramp_panel_open_updates_appbar", r.TOGGLE_DETAILS = "ramp_toggle_details", r.TOGGLE_GRID = "ramp_toggle_grid", r.TOGGLE_HELP = "ramp_toggle_help", r.TOGGLE_METADATA = "ramp_toggle_metadata", r.TOGGLE_REORDER = "ramp_toggle_reorder", r.TOGGLE_SETTINGS = "ramp_toggle_settings", r.TOGGLE_WIZARD = "ramp_toggle_wizard", r))(Wt || {});
class er {
  eventName;
  handlerName;
  handlerFunc;
  constructor(e, t, i) {
    this.eventName = e, this.handlerName = t, this.handlerFunc = i;
  }
}
class tr extends J {
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
    super(e), this._eventBus = new ns(), this._eventRegister = [], this._funCounter = 1, this._nameRegister = Object.values(E).filter((t) => typeof t == "string" && t.indexOf("/") > -1);
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
    const s = new er(e, i, t);
    return this._eventRegister.push(s), this._eventBus.on(e, t), i;
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
    Object.values(Wt).forEach((e) => {
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
    const s = (...o) => {
      t(...o), this.off(i);
    };
    return this.on(e, s, i);
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
    return (!Array.isArray(e) || e.length === 0) && (e = Object.values(Wt)), e.map((t) => this.defaultHandlerFactory(t));
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
      case "ramp_config_change_updates_map_attribs":
        t = (i) => {
          const s = i.map.basemaps.find(
            (o) => o.id === this.$iApi.geo.map.getCurrentBasemapId()
          );
          this.$iApi.geo.map.caption.updateAttribution(s?.attribution);
        }, this.$iApi.event.on("config/configchanged", t, e);
        break;
      case "ramp_layer_error_updates_legend":
        t = (i) => {
          if (i.layer.layerState === z.ERROR) {
            const s = this.$iApi.fixture.get("legend");
            s && s.updateLegend(i.layer);
          }
        }, this.$iApi.event.on("layer/layerstatechange", t, e);
        break;
      case "ramp_layer_register_binds_legend":
        t = (i) => {
          const s = this.$iApi.fixture.get("legend");
          s && s.updateLegend(i);
        }, this.$iApi.event.on("layer/registered", t, e);
        break;
      case "ramp_layer_reload_end_binds_legend":
        t = (i) => {
          const s = this.$iApi.fixture.get("legend");
          s && s.updateLegend(i);
        }, this.$iApi.event.on("layer/reloadend", t, e);
        break;
      case "ramp_layer_reload_start_updates_legend":
        t = (i) => {
          if (!i.isSublayer) {
            const s = this.$iApi.fixture.get("legend");
            s && s.reloadLayerItem(i.uid);
          }
        }, this.$iApi.event.on("layer/reloadstart", t, e);
        break;
      case "ramp_layer_remove_checks_grid":
        t = (i) => {
          if (this.$iApi.fixture.get("grid")) {
            const s = qt(this.$vApp.$pinia), o = s.getGridId(i.id);
            if (o === void 0) return;
            if (s.removeLayer(o, i.id), s.grids[o].layerIds.length === 0) {
              s.removeGrid(o);
              const n = s.currentId;
              if (o === n) {
                const l = this.$iApi.panel.get("grid");
                this.$iApi.panel.close(l), s.currentId = void 0;
              }
            }
          }
        }, this.$iApi.event.on("layer/remove", t, e);
        break;
      case "ramp_layer_remove_updates_details":
        t = (i) => {
          const s = qi(this.$vApp.$pinia);
          this.$iApi.fixture.get("details") && s.removeLayer(i);
        }, this.$iApi.event.on("layer/remove", t, e);
        break;
      case "ramp_layer_remove_updates_legend":
        t = (i) => {
          const s = this.$iApi.fixture.get("legend");
          s && (s.removeLayerItem(i), this.$iApi.updateAlert(
            this.$iApi.$i18n.t("legend.alert.layerRemoved", {
              name: i.name
            })
          ));
        }, this.$iApi.event.on("layer/remove", t, e);
        break;
      case "ramp_layer_useradd_updates_legend":
        t = (i) => {
          const s = this.$iApi.fixture.get("legend");
          s && s.addLayerItem(i);
        }, this.$iApi.event.on("user/layeradded", t, e);
        break;
      case "ramp_map_basemap_checks_tile_proj":
        t = (i) => {
          i.schemaChanged && this.$iApi.geo.layer.allLayers().filter((s) => s.layerType === x.TILE).forEach((s) => {
            s.checkProj();
          });
        }, this.$iApi.event.on("map/basemapchanged", t, e);
        break;
      case "ramp_map_basemap_updates_map_attribs":
        t = () => {
          this.$iApi.geo.map.caption.updateAttribution(
            ue(this.$vApp.$pinia).activeBasemapConfig?.attribution
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
          const i = ge(this.$vApp.$pinia).items;
          Object.keys(i).forEach((s) => {
            i[s].initialized?.();
          });
        }, this.$iApi.geo.map.created && t(), this.$iApi.event.on("map/created", t, e);
        break;
      case "ramp_map_created_updates_map_attribs":
        t = () => {
          this.$iApi.geo.map.caption.updateAttribution(
            ue(this.$vApp.$pinia).activeBasemapConfig?.attribution
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
          ft(50, !0, () => t()),
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
          const s = this.$iApi.fixture.get("details");
          s && s.openDetails(i.results);
        }, this.on("map/identify", t, e);
        break;
      case "ramp_map_keydown_updates_coords":
        this.$iApi.event.on(
          "map/keydown",
          ft(50, () => {
            const i = De(this.$vApp.$pinia);
            i.coords?.disabled || !this.$iApi.geo.map.keysActive || this.$iApi.geo.map.caption.formatPoint(this.$iApi.geo.map.getExtent().center()).then((o) => {
              i.coords = {
                formattedString: o
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
          ft(50, (i) => {
            const s = De(this.$vApp.$pinia);
            s.coords?.disabled || this.$iApi.geo.map.caption.formatPoint(this.$iApi.geo.map.screenPointToMapPoint(i)).then((n) => {
              s.coords = {
                formattedString: n
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
          ft(50, (i) => t(i)),
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
          St(100, () => this.$iApi.geo.map.caption.updateScale()),
          e
        );
        break;
      case "ramp_map_scale_updates_scalebar":
        this.$iApi.event.on(
          "map/scalechanged",
          St(300, () => this.$iApi.geo.map.caption.updateScale()),
          e
        );
        break;
      case "ramp_panel_close_updates_appbar":
        t = (i) => {
          const s = Tt(this.$vApp.$pinia);
          this.$iApi.fixture.get("appbar") && !s.order.flat().find((o) => o === i.id) && s.removeButton(i.id);
        }, this.on("panel/closed", t, e);
        break;
      case "ramp_panel_open_updates_appbar":
        t = (i) => {
          const s = Tt(this.$vApp.$pinia);
          this.$iApi.fixture.get("appbar") && (!i.teleport || i.teleport?.showAppbarButton) && !s.order.flat().find((o) => o === i.id) && s.addTempButton(i.id);
        }, this.on("panel/opened", t, e);
        break;
      case "ramp_toggle_details":
        t = (i, s) => {
          const o = this.$iApi.fixture.get("details");
          o && o.toggleFeature(i, s);
        }, this.$iApi.event.on("details/toggle", t, e);
        break;
      case "ramp_toggle_grid":
        t = (i, s) => {
          const o = this.$iApi.fixture.get("grid");
          o && o.toggleGrid(i.id, s);
        }, this.$iApi.event.on("grid/toggle", t, e);
        break;
      case "ramp_toggle_help":
        t = (i) => {
          const s = this.$iApi.fixture.get("help");
          s && s.toggleHelp(i);
        }, this.$iApi.event.on("help/toggle", t, e);
        break;
      case "ramp_toggle_metadata":
        t = (i, s) => {
          const o = this.$iApi.fixture.get("metadata");
          o && o.toggleMetadata(i, s);
        }, this.$iApi.event.on("metadata/toggle", t, e);
        break;
      case "ramp_toggle_reorder":
        t = (i) => {
          const s = this.$iApi.fixture.get("layer-reorder");
          s && s.toggleLayerReorder(i);
        }, this.$iApi.event.on("reorder/toggle", t, e);
        break;
      case "ramp_toggle_settings":
        t = (i, s) => {
          const o = this.$iApi.fixture.get("settings");
          o && o.toggleSettings(i, s);
        }, this.$iApi.event.on("settings/toggle", t, e);
        break;
      case "ramp_toggle_wizard":
        t = (i) => {
          const s = this.$iApi.fixture.get("wizard");
          s && s.toggleWizard(i);
        }, this.$iApi.event.on("wizard/toggle", t, e);
        break;
      default:
        return console.error(`Unrecognized default event handler name encountered: ${e}`), `ERROR_NOT_REGISTERED__${e}`;
    }
    return e;
  }
}
const ir = { en: { "lang-code": "en", "lang-dir": "ltr", "lang-en": "English", "lang-fr": "anglais", "lang-native": "English", "ramp.about.open": "Open About RAMP", "ramp.about": "About RAMP", "keyboardInstructions.title": "Keyboard Instructions", "keyboardInstructions.open": "Open keyboard instructions", "keyboardInstructions.app": "Use 'Tab' to navigate between sections of the application.", "keyboardInstructions.lists": "Use the arrow keys to move between items in lists. With a list item selected you can press 'Space' or 'Enter' to click the item. You can also navigate within the list item using 'Tab'.", "keyboardInstructions.map": "When the map is selected, use the arrow keys to move around and 'Enter' to select a point.", "keyboardInstructions.OK": "OK", "map.toggleScaleToMetric": "Switch to metric map scale", "map.toggleScaleToImperial": "Switch to imperial map scale", "map.coordinates.east": "E", "map.coordinates.west": "W", "map.coordinates.north": "N", "map.coordinates.south": "S", "map.changeLanguage": "Change Language", "map.language.short": "EN-CA", "map.language.en": "English", "map.language.fr": "Français", "map.language.curr": "current", "map.export": "export map", "notifications.open": "Open Notifications Panel", "notifications.title": "Notifications", "notifications.empty": "No new notifications.", "notifications.controls.dismiss": "Dismiss", "notifications.controls.expand": "Expand", "notifications.controls.collapse": "Collapse", "notifications.controls.clearAll": "Clear All", "panels.access": "Press enter or space to access the panel", "panels.controls.close": "Close", "panels.controls.pin": "Pin", "panels.controls.unpin": "Unpin", "panels.controls.back": "Back", "panels.controls.optionsMenu": "More", "panels.controls.minimize": "Minimize", "panels.controls.expand": "Expand", "panels.controls.collapse": "Collapse", "panels.controls.moveRight": "Move Right", "panels.controls.moveLeft": "Move Left", "panels.controls.items": "Use the arrow keys to navigate the items", "panels.alert.open": "{name} panel opened", "panels.alert.close": "{name} panel closed", "panels.alert.minimize": "{name} panel minimized", "layer.error": "{id} failed to load", "layer.longload": "{id} is taking longer than expected to load", "layer.longdraw": "{id} is taking longer than expected to draw", "layer.mismatch": "{name} cannot be displayed in the current projection", "layer.filtersdisabled": "Filters have been disabled for {name}", "layer.filterwarning": "You are attempting to use a grid that contains unmodifiable layers. Filtering will be partially disabled.", "layer.noexportmap": "{name} was attempted to be added as a Map Image Layer but Map Export is not enabled for the service", "caption.attributionDefaultText": "Powered by ESRI", "caption.attributionLogoAltText": "ESRI logo", "caption.attributionLink": "https://www.esri.com/", "select.items": " Use Arrow-up/down to select a value. Use Alt+Shift+Arrow-up/down to toggle the select menu" }, fr: { "lang-code": "fr", "lang-dir": "ltr", "lang-en": "French", "lang-fr": "français", "lang-native": "Français", "ramp.about.open": "Ouvrir À propos de PCAR", "ramp.about": "À propos de PCAR", "keyboardInstructions.title": "Instructions clavier", "keyboardInstructions.open": "Instructions clavier ouvert", "keyboardInstructions.app": "Utilisez la touche Tab pour vous déplacer entre les sections de l'application.", "keyboardInstructions.lists": "Lorsqu'un élément de la liste est sélectionné, vous pouvez appuyer sur « Espace » ou « Entrée » pour cliquer sur l'élément. Vous pouvez également vous déplacer au sein de l'élément de la liste au moyen de la touche « Tab ».", "keyboardInstructions.map": "Lorsque la carte est sélectionnée, utilisez le pavé curseur pour vous déplacer et appuyez sur « Entrée »  pour sélectionner un point.", "keyboardInstructions.OK": "OK", "map.toggleScaleToMetric": "Passer à l'échelle métrique", "map.toggleScaleToImperial": "Passer à l'échelle impériale", "map.coordinates.east": "E", "map.coordinates.west": "O", "map.coordinates.north": "N", "map.coordinates.south": "S", "map.changeLanguage": "Changer de langue", "map.language.short": "FR-CA", "map.language.en": "English", "map.language.fr": "Français", "map.language.curr": "actuel", "map.export": "exporter la carte", "notifications.open": "Ouvrir la fenêtre des notifications", "notifications.title": "Notifications", "notifications.empty": "Aucune nouvelle notification.", "notifications.controls.dismiss": "Rejeter", "notifications.controls.expand": "Développer", "notifications.controls.collapse": "Réduire", "notifications.controls.clearAll": "Effacer tout", "panels.access": "Appuyez sur Entrée ou sur la barre d'espacement pour accéder au panneau", "panels.controls.close": "Fermer", "panels.controls.pin": "Épingler", "panels.controls.unpin": "Désépingler", "panels.controls.back": "Retour", "panels.controls.optionsMenu": "Plus", "panels.controls.minimize": "Réduire", "panels.controls.expand": "Développer", "panels.controls.collapse": "Réduire", "panels.controls.moveRight": "Aller à droite", "panels.controls.moveLeft": "Aller à gauche", "panels.controls.items": "Utilisez les touches fléchées pour naviguer entre les éléments", "panels.alert.open": "Fenêtre {name} ouverte", "panels.alert.close": "Fenêtre {name} fermée", "panels.alert.minimize": "Fenêtre {name} réduite", "layer.error": "Échec du chargement de {id}", "layer.longload": "Le chargement de {id} met plus de temps que prévu", "layer.longdraw": "{id} prend plus de temps que prévu à extraire", "layer.mismatch": "{id} ne peut pas s'afficher dans la projection actuelle", "layer.filtersdisabled": "Les filtres ont été désactivés pour {name}", "layer.filterwarning": "Vous essayez d'utiliser une grille qui contient des couches non modifiables. Le filtrage sera partiellement désactivé.", "layer.noexportmap": "La tentative d’ajouter {name} comme couche d’imagerie cartographique a échouée car elle n’a pu être activé pour ce service", "caption.attributionDefaultText": "Propulsé par ESRI", "caption.attributionLogoAltText": "Logo ESRI", "caption.attributionLink": "https://www.esri.com/fr-fr/home", "select.items": "Utilisez Flèche haut/bas pour sélectionner une valeur. Utilisez Alt+Shift+Flèche haut/bas pour basculer le menu de sélection" } }, hi = "en", sr = {
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
function rr() {
  return Fs({
    legacy: !1,
    // get the language of the page from the root `html` node
    locale: document.documentElement.getAttribute("lang") || hi,
    fallbackLocale: hi,
    globalInjection: !0,
    //@ts-ignore
    messages: ir,
    numberFormats: sr
  });
}
const Lt = U("maptip", () => {
  const r = h(void 0), e = h(void 0), t = h("");
  function i(n) {
    r.value = n;
  }
  function s(n) {
    e.value = n;
  }
  function o(n) {
    t.value = n;
  }
  return {
    maptipInstance: r,
    maptipPoint: e,
    content: t,
    setMaptipInstance: i,
    setMaptipPoint: s,
    setMaptipContent: o
  };
}), or = /* @__PURE__ */ O({
  __name: "esri-map",
  setup(r) {
    const e = Lt(), t = Ae("iApi"), i = P(() => e.maptipPoint), s = P(() => e.maptipInstance), o = P(() => e.content), n = ve([]);
    n.push(
      Et(i, () => {
        if (i.value) {
          let a, c;
          const u = t.geo.map.getPixelWidth() / 2, p = 0, d = t.geo.map.mapPointToScreenPoint(i.value);
          a = d.screenX - u, c = p - d.screenY, s.value.setProps({
            offset: [a, c]
          }), o.value && o.value !== "" && s.value.show();
        } else
          s.value.hide();
      })
    ), n.push(
      Et(o, (a) => {
        a && a !== "" && i ? (s.value.setContent(a), s.value.show()) : s.value.hide();
      })
    ), ct(() => {
      n.forEach((a) => a());
    });
    const l = () => {
      t.geo.map.setMouseFocus();
    };
    return (a, c) => {
      const u = k("tippy");
      return M((y(), A("div", {
        name: "esriMap",
        id: "esriMap",
        class: "h-full overflow-hidden",
        onMousedown: l,
        onKeydown: c[0] || (c[0] = ls(Zt(() => {
        }, ["prevent"]), ["up", "down", "left", "right"]))
      }, null, 544)), [
        [u, {
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
});
class Wi {
  resizeObserver;
  constructor(e) {
    this.resizeObserver = "ResizeObserver" in self ? new ResizeObserver(function(t) {
      const i = {
        xs: 200,
        sm: 576,
        md: 768,
        lg: 960
      };
      t.forEach(function(s) {
        const o = s.target.dataset.breakpoints ? JSON.parse(s.target.dataset.breakpoints) : e ?? i;
        Object.keys(o).forEach(function(n) {
          const l = o[n];
          s.contentRect.width >= l ? s.target.classList.add(n) : s.target.classList.remove(n);
        });
      });
    }) : void 0;
  }
  observe(e) {
    this.resizeObserver?.observe(e);
  }
}
const nr = ["data-cy"], Hi = /* @__PURE__ */ O({
  __name: "panel-container",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(r) {
    const e = h(null), t = r, i = h(!1);
    He(() => {
      t.panel.teleport && new Wi(
        // only need default breakpoints for mobile vs non mobile
        // TODO: Iron out defaulting. Should this be a complete override instead?
        { xs: 0, sm: 461, ...t.panel.teleport.breakpoints }
      ).observe(e.value);
    });
    const s = (a, c, u) => {
      if (i.value)
        return c();
      Di({
        targets: a,
        opacity: {
          value: u,
          duration: 400,
          easing: "cubicBezier(.5, .05, .1, .3)"
        },
        complete: c
      });
    }, o = (a, c) => {
      s(a, c, [0, 1]);
    }, n = (a) => {
      a.classList.contains("screen-spinner") || (i.value = t.panel.isScreenLoaded(t.panel.route.screen), e.value.querySelectorAll("[focus-item").forEach((c) => c.classList.remove("default-focus-style")));
    }, l = (a, c) => {
      s(a, c, [0, 1]);
    };
    return (a, c) => {
      const u = k("focus-container");
      return y(), A("div", {
        class: re(["shadow-tm bg-white h-full xs:mr-0 sm:mr-12 last:mr-0 pointer-events-auto min-w-0 shrink-0", r.panel.expanded ? "flex-grow max-w-full" : ""]),
        style: Li(r.panel.style),
        "data-cy": r.panel.id,
        ref_key: "componentEl",
        ref: e
      }, [
        se($i, {
          onBeforeLeave: n,
          onLeave: l,
          onEnter: o
        }, {
          default: X(() => [
            M((y(), j(cs(r.panel.route.screen), us({ class: "h-full" }, r.panel.route.props, { panel: r.panel }), null, 16, ["panel"])), [
              [u]
            ])
          ]),
          _: 1
        })
      ], 14, nr);
    };
  }
}), We = U("panel", () => {
  const r = h(void 0), e = h(void 0), t = h(0), i = h(0), s = h(!1), o = h(!0), n = h({}), l = h({}), a = h([]), c = h([]), u = h([]), p = P(() => i.value);
  function d(S) {
    return S === "xs" && u.value.length > 0 ? [u.value.slice().pop()] : u.value;
  }
  function b(S) {
    const C = [];
    return S.forEach((oe) => {
      oe in l.value && C.push(l.value[oe].getPromise());
    }), C;
  }
  function g(S) {
    de(S), $(), e.value = void 0;
  }
  function f(S) {
    pt(S), $();
  }
  function w(S, C) {
    Mt(S, C), $();
  }
  function v(S) {
    Pt(S), $();
  }
  function R(S) {
    t.value = S, $();
  }
  function L(S) {
    s.value = S;
  }
  function $() {
    let S = t.value;
    const C = [], oe = 350, he = 12, ni = 600;
    for (let Pe = a.value.length - 1; Pe >= 0; Pe--) {
      const Ke = a.value[Pe];
      let Te = Ke.width || oe;
      if (s.value ? Te = S : Te += he, Ke.id === "grid" && (Te = Math.max(Math.min(Te, S), ni)), (S >= Te && !s.value || C.length === 0) && (S -= Te, C.unshift(Ke)), Ke.id === "grid" && S < ni)
        break;
    }
    if (r.value && //@ts-ignore
    !C.includes(r.value) && !s.value) {
      let Pe;
      for (let ai = 0; ai < C.length - 1 && S < (r.value.width || oe) + he; ai++)
        Pe = C.shift(), S += Pe.width || oe;
      S >= (r.value.width || oe) ? C.unshift(r.value) : e.value || (Pe = C.shift(), C.unshift(r.value));
      const Ke = a.value.indexOf(r.value), Te = a.value.indexOf(Pe), Ft = a.value.slice();
      Te > -1 && (Ft.splice(Ke, 1), Ft.splice(Te, 0, r.value)), a.value = Ft;
    }
    i.value = S, u.value = C;
  }
  function W(S) {
    if (n.value = { ...n.value, [S.id]: S }, S.id in l.value)
      l.value[S.id].resolveMe(S);
    else {
      const C = new Y();
      C.resolveMe(S), l.value = {
        ...l.value,
        [S.id]: C
      };
    }
  }
  function de(S) {
    S.teleport ? c.value = [...c.value, S] : (a.value = [...a.value, S], e.value = S);
  }
  function pt(S) {
    if (S.teleport) {
      const C = c.value.indexOf(S);
      C !== -1 && (c.value = [...c.value.slice(0, C), ...c.value.slice(C + 1)]);
    } else {
      const C = a.value.indexOf(S);
      C !== -1 && (a.value = [...a.value.slice(0, C), ...a.value.slice(C + 1)]);
    }
  }
  function Mt(S, C) {
    const oe = a.value.indexOf(S), he = C === "right" ? 1 : -1;
    u.value.includes(a.value[oe + he]) && ([a.value[oe], a.value[oe + he]] = [
      a.value[oe + he],
      a.value[oe]
    ]);
  }
  function Pt(S) {
    n.value[S.id] !== void 0 && delete n.value[S.id], l.value[S.id] !== void 0 && delete l.value[S.id];
    const C = u.value.indexOf(S);
    C !== -1 && (u.value = [...u.value.slice(0, C), ...u.value.slice(C + 1)]), r.value && r.value.id == S.id && (r.value = void 0);
  }
  function Nt(S) {
    l.value = {
      ...l.value,
      [S]: new Y()
    };
  }
  return {
    items: n,
    regPromises: l,
    orderedItems: a,
    pinned: r,
    priority: e,
    visible: u,
    stackWidth: t,
    remWidth: i,
    mobileView: s,
    reorderable: o,
    teleported: c,
    getRemainingWidth: p,
    getVisible: d,
    getRegPromises: b,
    openPanel: g,
    closePanel: f,
    movePanel: w,
    removePanel: v,
    setStackWidth: R,
    setMobileView: L,
    updateVisible: $,
    registerPanel: W,
    addRegPromise: Nt
  };
}), ar = /* @__PURE__ */ O({
  __name: "panel-stack",
  setup(r) {
    const e = We(), t = Ae("iApi"), i = h(), s = P(() => e.mobileView);
    He(() => {
      new ResizeObserver((u) => {
        const p = !(t?.$vApp.$root?.$refs["app-size"]).classList.contains("sm");
        s.value !== p && (e.mobileView = p, t?.event.emit(E.RAMP_MOBILEVIEW_CHANGE, p)), e.setStackWidth(u[0].contentRect.width);
      }).observe(i.value?.$el);
    });
    const o = (c) => (
      //@ts-ignore
      e.getVisible(c)
    ), n = (c, u) => {
      a(c, u, [
        [6, 0],
        [0, 1]
      ]);
    }, l = (c, u) => {
      const [p, d] = [c.children[0].getBoundingClientRect(), c.parentElement.getBoundingClientRect()];
      c.style.width = `${p.width}px`, c.style.height = `${p.height}px`, c.style.left = `${p.left - d.left}px`, c.style.position = "absolute", a(c, u, [
        [0, -6],
        [1, 0]
      ]);
    }, a = (c, u, p) => {
      Di({
        targets: c,
        duration: 300,
        translateY: {
          value: p[0],
          easing: "cubicBezier(.5, .05, .1, .3)"
        },
        opacity: {
          value: p[1],
          duration: 250,
          easing: "cubicBezier(.5, .05, .1, .3)"
        },
        complete: u
      });
    };
    return (c, u) => (y(), j(Ri, {
      onEnter: n,
      onLeave: l,
      name: "panel-container",
      tag: "div",
      ref_key: "el",
      ref: i
    }, {
      default: X(() => [
        (y(!0), A(je, null, ut(o(_(t).screenSize), (p) => (y(), j(Hi, {
          key: `${p.id}`,
          panel: p
        }, null, 8, ["panel"]))), 128))
      ]),
      _: 1
    }, 512));
  }
}), Me = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [i, s] of e)
    t[i] = s;
  return t;
}, lr = /* @__PURE__ */ Me(ar, [["__scopeId", "data-v-11f38702"]]), cr = ["content", "aria-label"], Xt = /* @__PURE__ */ O({
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
  setup(r) {
    const e = h(!1), t = h(null), i = ve([]), s = h(), o = h(), n = h(), l = r;
    i.push(
      Et(e, () => {
        t.value.update();
      })
    );
    const a = () => {
      e.value = !e.value, n.value._tippy.hide();
    }, c = () => {
      n.value._tippy.setProps({
        placement: e.value ? l.tooltipPlacementAlt : l.tooltipPlacement
      }), n.value._tippy.show();
    }, u = () => {
      n.value._tippy.hide();
    };
    return He(() => {
      window.addEventListener(
        "click",
        (p) => {
          (!s.value || !s.value.contains(p.target)) && (e.value = !1);
        },
        { capture: !0 }
      ), window.addEventListener("blur", () => {
        e.value = !1;
      }), window.addEventListener("focusin", (p) => {
        (!s.value || !s.value.contains(p.target)) && (e.value = !1);
      }), n.value.addEventListener("focus", c), n.value.addEventListener("blur", u), n.value.addEventListener("mouseover", c), n.value.addEventListener("mouseleave", u), $t(() => {
        const p = {
          name: "overflowScroll",
          enabled: !0,
          phase: "main",
          fn({ state: d }) {
            const { bottom: b } = Vs(d);
            b > 0 ? (d.styles.popper.overflowY = b > 100 ? "auto" : void 0, d.styles.popper.overflowX = "hidden", d.styles.popper.height = `${d.rects.popper.height - b - 8}px`) : d.styles.popper.height = "auto";
          }
        };
        n.value && o.value && (t.value = zs(n.value, o.value, {
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
    }), ct(() => {
      i.forEach((p) => p()), window.removeEventListener(
        "click",
        (p) => {
          (!s.value || !s.value.contains(p.target)) && (e.value = !1);
        },
        { capture: !0 }
      ), window.removeEventListener("blur", () => {
        e.value = !1;
      }), window.removeEventListener("focusin", (p) => {
        (!s.value || !s.value.contains(p.target)) && (e.value = !1);
      }), n.value.removeEventListener("focus", c), n.value.removeEventListener("blur", u), n.value.removeEventListener("mouseover", c), n.value.removeEventListener("mouseleave", u), e.value = !1;
    }), (p, d) => {
      const b = k("tippy");
      return y(), A("div", {
        ref_key: "el",
        ref: s
      }, [
        M((y(), A("button", {
          type: "button",
          class: "text-gray-500 hover:text-black dropdown-button",
          onClick: a,
          content: r.tooltip,
          "aria-label": r.ariaLabel ? String(r.ariaLabel) : String(r.tooltip),
          ref_key: "dropdownTrigger",
          ref: n
        }, [
          Oe(p.$slots, "header")
        ], 8, cr)), [
          [b, {
            placement: r.tooltipPlacement,
            theme: r.tooltipTheme,
            animation: r.tooltipAnimation,
            appendTo: "parent",
            trigger: "manual"
          }]
        ]),
        M(m("div", {
          onClick: d[0] || (d[0] = (g) => t.value.update()),
          class: re(["rv-dropdown shadow-md border border-gray:200 py-8 bg-white rounded z-10", { "text-center": r.centered }]),
          ref_key: "dropdown",
          ref: o
        }, [
          Oe(p.$slots, "default", {
            close: () => e.value = !e.value
          })
        ], 2), [
          [ps, e.value]
        ])
      ], 512);
    };
  }
}), Ie = U("notification", () => {
  const r = h([]), e = h({}), t = P(() => r.value.length >= 99 ? 99 : r.value.length);
  function i(c) {
    r.value = [c, ...r.value];
  }
  function s(c) {
    if (r.value.includes(c)) {
      const u = r.value.indexOf(c);
      c instanceof Yi && a(c), u > -1 && r.value.splice(u, 1);
    }
  }
  function o(c) {
    e.value[c.id] = c;
  }
  function n(c, u) {
    e.value[c] && (e.value[c].messageList.push(u), r.value.includes(e.value[c]) || (r.value = [e.value[c], ...r.value]));
  }
  function l() {
    Object.values(e.value).forEach((c) => a(c)), r.value = [];
  }
  function a(c) {
    const u = r.value.indexOf(c);
    u > -1 && r.value.splice(u, 1), c.messageList = [];
  }
  return {
    notificationStack: r,
    groups: e,
    notificationNumber: t,
    showNotification: i,
    removeNotification: s,
    registerGroup: o,
    addToGroup: n,
    clearAll: l
  };
}), ur = { class: "h-full flex flex-col" }, pr = { class: "w-full flex mb-6" }, dr = ["content", "aria-label"], hr = /* @__PURE__ */ O({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(r) {
    const e = Ie(), { t } = q(), i = P(() => e.notificationNumber), s = () => e.clearAll();
    return (o, n) => {
      const l = Z("panel-screen"), a = k("tippy");
      return y(), j(l, { panel: r.panel }, {
        header: X(() => [
          it(G(_(t)("notifications.title")), 1)
        ]),
        content: X(() => [
          m("div", ur, [
            m("div", pr, [
              M((y(), A("button", {
                type: "button",
                onClick: s,
                class: re(["p-4 ml-auto", [
                  i.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default pointer-events-none"
                ]]),
                content: _(t)("notifications.controls.clearAll"),
                "aria-label": _(t)("notifications.controls.clearAll")
              }, n[0] || (n[0] = [
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
              ]), 10, dr)), [
                [a, {
                  placement: "bottom",
                  theme: "ramp4",
                  animation: "scale"
                }]
              ])
            ]),
            se(Ji, { class: "overflow-y-auto" })
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
var fe = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.INFO = "info", r.WARNING = "warning", r))(fe || {});
class fr extends J {
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
          "notifications-screen": ie(hr)
        },
        alertName: "notifications.title"
      }
    }), this.notificationStore = Ie(this.$vApp.$pinia);
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
    const s = new Yi(this.$iApi, e, t, i);
    return this.notificationStore.registerGroup(s), s;
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
class Yi extends J {
  notificationStore = Ie(this.$vApp.$pinia);
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
  constructor(e, t, i, s) {
    super(e), this.id = t, this.type = i, this.message = s;
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
const mr = ["content"], gr = { class: "flex items-center text-left" }, yr = { class: "select-text cursor-text" }, vr = ["content"], br = {
  key: 0,
  class: "text-left"
}, Ar = /* @__PURE__ */ O({
  __name: "notification-item",
  props: {
    notification: {
      type: Object,
      required: !0
    }
  },
  setup(r) {
    const e = Ie(), { t } = q(), i = r, s = h(!1), o = ve({
      [fe.WARNING]: "⚠",
      [fe.INFO]: "ℹ️",
      [fe.ERROR]: "❌"
    }), n = (a) => {
      e.removeNotification(a);
    }, l = () => {
      if (!i.notification.messageList)
        return !1;
    };
    return (a, c) => {
      const u = k("tippy");
      return M((y(), A("li", {
        class: re(["flex-col default-focus-style p-4", r.notification.messageList ? "cursor-pointer" : ""]),
        content: _(t)(s.value ? "notifications.controls.collapse" : "notifications.controls.expand"),
        onClick: c[1] || (c[1] = (p) => s.value = !s.value)
      }, [
        m("div", gr, [
          m("span", null, [
            it(G(o[r.notification.type]) + " ", 1),
            m("span", yr, G(r.notification.message), 1)
          ]),
          c[4] || (c[4] = m("span", { class: "flex-grow" }, null, -1)),
          r.notification.messageList ? (y(), A("div", {
            key: 0,
            class: re(["dropdown-icon p-4 pointer-events-none", { "transform -rotate-180": s.value }])
          }, c[2] || (c[2] = [
            m("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "24",
              viewBox: "0 0 24 24",
              width: "24"
            }, [
              m("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
            ], -1)
          ]), 2)) : D("", !0),
          M((y(), A("button", {
            type: "button",
            onClick: c[0] || (c[0] = Zt((p) => n(r.notification), ["stop"])),
            class: "mx-4 p-4 text-gray-500 hover:text-black",
            content: _(t)("notifications.controls.dismiss")
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
          ]), 8, vr)), [
            [u, { theme: "ramp4", animation: "scale" }]
          ])
        ]),
        r.notification.messageList && s.value ? (y(), A("div", br, [
          (y(!0), A(je, null, ut(r.notification.messageList, (p, d) => (y(), A("p", {
            key: r.notification.id + p + d
          }, G(p), 1))), 128))
        ])) : D("", !0)
      ], 10, mr)), [
        [u, { onShow: l, theme: "ramp4", animation: "scale" }]
      ]);
    };
  }
}), wr = ["content"], Er = {
  key: 0,
  class: "w-full border-b border-black"
}, xr = {
  key: 1,
  class: "flex flex-col items-center h-full"
}, Ji = /* @__PURE__ */ O({
  __name: "notification-list",
  setup(r) {
    const e = Ie(), { t } = q(), i = h(), s = () => {
      i.value._tippy.hide();
    }, o = (l) => {
      l.key === "Tab" && i.value?.matches(":focus") && i.value._tippy.show();
    };
    He(() => {
      i.value?.addEventListener("blur", s), i.value?.addEventListener("keyup", o);
    }), ct(() => {
      i.value?.removeEventListener("blur", s), i.value?.removeEventListener("keyup", o);
    });
    const n = P(() => e.notificationStack);
    return (l, a) => {
      const c = k("focus-item"), u = k("focus-list"), p = k("tippy");
      return y(), A("div", null, [
        n.value.length > 0 ? M((y(), A("ul", {
          key: 0,
          content: _(t)("panels.controls.items"),
          ref_key: "el",
          ref: i
        }, [
          (y(!0), A(je, null, ut(n.value, (d, b) => (y(), A(je, {
            key: d.message + b
          }, [
            b > 0 ? (y(), A("div", Er)) : D("", !0),
            M(se(Ar, {
              class: re([d.type]),
              notification: d
            }, null, 8, ["class", "notification"]), [
              [c]
            ])
          ], 64))), 128))
        ], 8, wr)), [
          [u],
          [p, { trigger: "manual", placement: "top-start", touch: !1 }]
        ]) : (y(), A("div", xr, [
          a[0] || (a[0] = m("span", { class: "flex-grow" }, null, -1)),
          a[1] || (a[1] = m("svg", {
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
          m("span", null, G(_(t)("notifications.empty")), 1),
          a[2] || (a[2] = m("span", { style: { "flex-grow": "6" } }, null, -1))
        ]))
      ]);
    };
  }
}), Sr = { class: "flex items-center hover:text-white" }, _r = ["aria-label"], Ir = {
  key: 0,
  class: "number rounded-full w-18 text-white"
}, Tr = { class: "notification-dropdown pointer-events-auto bg-white rounded text-center text-black w-500 h-256 flex flex-col p-0" }, Lr = { class: "pb-8 border-b border-gray-600" }, $r = { class: "absolute flex right-3 top-3" }, Rr = ["content", "aria-label"], Cr = /* @__PURE__ */ O({
  __name: "caption-button",
  setup(r) {
    const e = Ie(), { t } = q(), i = P(() => e.notificationNumber), s = () => e.clearAll();
    return (o, n) => {
      const l = Z("close"), a = k("tippy");
      return y(), j(Xt, {
        position: "top-start",
        tooltip: _(t)("notifications.title"),
        tooltipPlacement: "top",
        class: "pointer-events-auto sm:flex ml-4 mr-8"
      }, {
        header: X(() => [
          m("div", Sr, [
            (y(), A("svg", {
              class: "fill-current w-24 h-24",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-label": _(t)("notifications.open")
            }, n[0] || (n[0] = [
              m("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" }, null, -1)
            ]), 8, _r)),
            i.value && i.value > 0 ? (y(), A("span", Ir, G(i.value), 1)) : D("", !0)
          ])
        ]),
        default: X((c) => [
          m("div", Tr, [
            m("div", null, [
              m("h4", Lr, G(_(t)("notifications.title")), 1),
              m("div", $r, [
                M((y(), A("button", {
                  type: "button",
                  onClick: s,
                  class: re(["p-4 mr-6", [
                    i.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default pointer-events-none"
                  ]]),
                  content: _(t)("notifications.controls.clearAll"),
                  "aria-label": _(t)("notifications.controls.clearAll")
                }, n[1] || (n[1] = [
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
                ]), 10, Rr)), [
                  [a, {
                    placement: "bottom",
                    theme: "ramp4",
                    animation: "scale",
                    appendTo: "parent"
                  }]
                ]),
                se(l, {
                  onClick: c.close
                }, null, 8, ["onClick"])
              ])
            ]),
            se(Ji, { class: "overflow-y-auto h-230" })
          ])
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), Or = /* @__PURE__ */ Me(Cr, [["__scopeId", "data-v-3623a7d2"]]), kr = { class: "flex hover:text-white" }, Mr = ["aria-label"], Pr = { class: "about-ramp-dropdown pointer-events-auto bg-white rounded w-256 h-50" }, Nr = { class: "pb-8 border-b border-gray-600 mb-10" }, Fr = { class: "absolute right-5 top-5" }, Dr = { class: "select-text" }, Gr = { class: "font-bold cursor-text" }, Ur = { class: "text-sm cursor-text" }, Br = { class: "text-sm cursor-text" }, zr = /* @__PURE__ */ O({
  __name: "about-ramp-dropdown",
  props: {
    position: {
      type: String,
      default: "top-start"
    }
  },
  setup(r) {
    const { t: e } = q(), t = P(() => `${ht.major}.${ht.minor}.${ht.patch}`), i = P(() => ht.hash.slice(0, 9)), s = P(() => {
      let o = new Date(ht.timestamp);
      if (isNaN(o))
        return "dev mode, no date";
      {
        const n = (l) => l < 10 ? "0" + l.toString() : l.toString();
        return `${o.getFullYear()}-${o.getMonth() + 1}-${o.getDate()} ${o.getHours()}:${n(
          o.getMinutes()
        )}:${n(o.getSeconds())}`;
      }
    });
    return (o, n) => {
      const l = Z("close"), a = Z("dropdown-menu"), c = k("focus-item");
      return M((y(), j(a, {
        class: "pointer-events-auto sm:flex",
        position: r.position,
        tooltip: _(e)("ramp.about"),
        tooltipPlacement: r.position
      }, {
        header: X(() => [
          m("div", kr, [
            (y(), A("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-20 h-20",
              "aria-label": _(e)("ramp.about.open")
            }, n[0] || (n[0] = [
              m("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }, null, -1)
            ]), 8, Mr))
          ])
        ]),
        default: X((u) => [
          m("div", Pr, [
            m("div", null, [
              m("h4", Nr, G(_(e)("ramp.about")), 1),
              m("div", Fr, [
                se(l, {
                  onClick: u.close
                }, null, 8, ["onClick"])
              ]),
              m("div", Dr, [
                m("div", null, [
                  m("span", Gr, G(t.value), 1),
                  m("span", Ur, " [" + G(i.value) + "] ", 1)
                ]),
                m("div", null, [
                  m("span", Br, G(s.value), 1)
                ]),
                n[1] || (n[1] = m("div", { class: "mt-5" }, [
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
                    it(" ramp4-pcar4 ")
                  ])
                ], -1))
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["position", "tooltip", "tooltipPlacement"])), [
        [c]
      ]);
    };
  }
}), Vr = /* @__PURE__ */ Me(zr, [["__scopeId", "data-v-dd0345a4"]]), jr = { class: "map-caption absolute bottom-0 h-29 sm:h-38 flex justify-end pointer-events-auto cursor-default select-none text-gray-200 bg-black-75 left-0 right-0 py-2 sm:py-6" }, qr = {
  key: 0,
  class: "relative top-2 sm:top-1 ml-4 sm:ml-0 shrink-0"
}, Wr = ["href", "aria-label"], Hr = ["src", "alt"], Yr = {
  key: 1,
  class: "relative ml-10 top-2 text-sm sm:text-base"
}, Jr = { class: "flex min-w-fit justify-end" }, Zr = {
  key: 0,
  class: "pl-8 px-14 sm:block display-none relative top-2"
}, Kr = ["aria-pressed", "aria-label", "content"], Qr = { class: "relative top-1 text-sm sm:text-base" }, Xr = { class: "text-gray-200 hover:text-white text-sm sm:text-base pb-5" }, eo = ["onClick"], to = {
  key: 0,
  class: "sr-only"
}, io = /* @__PURE__ */ O({
  __name: "map-caption",
  setup(r) {
    const e = De(), t = ue(), { t: i } = q(), s = Ae("iApi"), o = P(() => e.scale), n = P(() => e.attribution), l = P(() => e.coords), a = P(() => e.langtoggle), c = P(() => t.config.map), u = h([]), p = ve([]);
    p.push(
      Et(c, (f) => {
        f && s.geo.map.caption.createCaption(c.value?.caption);
      })
    ), ct(() => {
      p.forEach((f) => f());
    }), ds(() => {
      $t(() => {
        s.$i18n.locale.value && u.value.length == 0 && (u.value = s.$i18n.availableLocales);
      });
    });
    const d = (f) => {
      s.$i18n.locale.value != f && s.setLanguage(f);
    }, b = () => {
      e.toggleScale(), s.geo.map.caption.updateScale();
    }, g = (f = !1) => i(f ? "map.toggleScaleToMetric" : "map.toggleScaleToImperial");
    return (f, w) => {
      const v = Z("dropdown-menu"), R = k("truncate"), L = k("tippy");
      return y(), A("div", jr, [
        se(Vr, {
          class: "sm:block display-none ml-8 mr-4",
          position: "top-end"
        }),
        se(Or, { class: "sm:block display-none" }),
        n.value?.logo.disabled ? D("", !0) : (y(), A("span", qr, [
          m("a", {
            class: "pointer-events-auto cursor-pointer",
            href: n.value?.logo.link,
            target: "_blank",
            "aria-label": n.value?.logo.altText
          }, [
            m("img", {
              class: "object-contain h-18 sm:h-26",
              src: n.value?.logo.value,
              alt: n.value?.logo.altText
            }, null, 8, Hr)
          ], 8, Wr)
        ])),
        n.value?.text.disabled ? D("", !0) : M((y(), A("span", Yr, [
          it(G(n.value?.text.value), 1)
        ])), [
          [R, {
            options: {
              placement: "top",
              hideOnClick: !1,
              theme: "ramp4",
              animation: "scale"
            }
          }]
        ]),
        w[0] || (w[0] = m("span", { class: "flex-grow w-15" }, null, -1)),
        m("div", Jr, [
          l.value?.disabled ? D("", !0) : M((y(), A("div", Zr, [
            it(G(l.value?.formattedString), 1)
          ])), [
            [R, {
              options: {
                hideOnClick: !1,
                theme: "ramp4",
                animation: "scale"
              }
            }]
          ]),
          o.value?.disabled ? D("", !0) : M((y(), A("button", {
            key: 1,
            type: "button",
            class: "flex-shrink-0 mx-2 sm:mx-10 px-4 pointer-events-auto cursor-pointer border-none",
            onClick: b,
            "aria-pressed": o.value?.isImperialScale,
            "aria-label": `
                    ${o.value?.label} - ${g(o.value?.isImperialScale)}
                `,
            content: g(o.value?.isImperialScale)
          }, [
            m("span", {
              class: "border-solid border-2 border-white border-t-0 h-5 mr-4 inline-block",
              style: Li({ width: o.value?.width })
            }, null, 4),
            m("span", Qr, G(o.value?.label), 1)
          ], 8, Kr)), [
            [L, {
              delay: [300, 0],
              placement: "top",
              hideOnClick: !1,
              theme: "ramp4",
              animation: "scale",
              touch: ["hold", 200]
            }]
          ]),
          a.value?.disabled ? D("", !0) : (y(), j(v, {
            key: 2,
            class: "flex-shrink-0 pointer-events-auto focus:outline-none px-4 mr-4 relative top-2",
            position: "top-end",
            tooltip: _(i)("map.changeLanguage"),
            ariaLabel: `${_(i)("map.language.short")} - ${_(i)("map.changeLanguage")}`,
            tooltipPlacement: "top-start",
            tooltipPlacementAlt: "left-end"
          }, {
            header: X(() => [
              m("span", Xr, G(_(i)("map.language.short")), 1)
            ]),
            default: X(() => [
              (y(!0), A(je, null, ut(u.value, ($, W) => (y(), A("a", {
                key: `${$}-${W}`,
                class: re(["flex-auto items-center text-sm sm:text-base cursor-pointer", { "font-bold": $ === _(s).$i18n.locale.value }]),
                href: "javascript:;",
                onClick: (de) => d($)
              }, [
                it(G(_(i)("map.language." + $)) + " ", 1),
                $ === _(s).$i18n.locale.value ? (y(), A("span", to, G(_(i)("map.language.curr")), 1)) : D("", !0)
              ], 10, eo))), 128))
            ]),
            _: 1
          }, 8, ["tooltip", "ariaLabel"]))
        ])
      ]);
    };
  }
}), so = ["content", "aria-label"], ro = {
  key: 0,
  class: "number absolute -top-2 -right-2 text-white w-18 rounded-full"
}, oo = /* @__PURE__ */ O({
  __name: "floating-button",
  setup(r) {
    const e = Ie(), t = Ae("iApi"), { t: i } = q(), s = P(() => e.notificationNumber);
    return (o, n) => {
      const l = k("tippy");
      return M((y(), A("button", {
        type: "button",
        onClick: n[0] || (n[0] = (a) => _(t).panel.get("notifications").open()),
        class: "pointer-events-auto items-center absolute left-8 bottom-36 p-6 block sm:display-none bg-black-75 rounded-full text-gray-400 hover:text-white",
        content: _(i)("notifications.title"),
        "aria-label": _(i)("notifications.title")
      }, [
        n[1] || (n[1] = m("svg", {
          class: "fill-current w-24 h-24",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24"
        }, [
          m("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })
        ], -1)),
        s.value && s.value > 0 ? (y(), A("span", ro, G(s.value), 1)) : D("", !0)
      ], 8, so)), [
        [l]
      ]);
    };
  }
}), no = /* @__PURE__ */ Me(oo, [["__scopeId", "data-v-a451db5c"]]), ao = { class: "flex items-center mb-20" }, lo = { class: "text-xl" }, co = /* @__PURE__ */ O({
  __name: "keyboard-instructions",
  setup(r) {
    const e = Ae("iApi"), { t } = q(), i = h(!1), s = h(["app", "lists", "map"]), o = h([]), n = h(null), l = h(null);
    He(() => {
      o.value.push(
        e.event.on("openKeyboardInstructions", () => {
          i.value = !0, $t(() => {
            n.value.focus();
          });
        })
      );
    }), ct(() => {
      o.value.forEach((c) => e?.event.off(c));
    });
    const a = (c) => {
      c.key === "Tab" ? c.shiftKey && c.target === n.value ? (c.preventDefault(), l.value.focus()) : !c.shiftKey && c.target === l.value && (c.preventDefault(), n.value.focus()) : c.key === "Escape" && (c.preventDefault(), i.value = !1);
    };
    return (c, u) => {
      const p = Z("close");
      return i.value ? (y(), A("div", {
        key: 0,
        class: "absolute inset-0 flex justify-center items-center bg-opacity-30 bg-black z-50 pointer-events-auto",
        onClick: u[3] || (u[3] = (d) => i.value = !1),
        onKeydown: a
      }, [
        m("div", {
          class: "bg-white w-500 pointer-events-auto shadow-2xl p-20 flex flex-col",
          onClick: u[2] || (u[2] = Zt(() => {
          }, ["stop", "prevent"])),
          tabindex: "0",
          ref_key: "firstEl",
          ref: n
        }, [
          m("div", ao, [
            m("h2", lo, G(_(t)("keyboardInstructions.title")), 1),
            se(p, {
              class: "ml-auto",
              onClick: u[0] || (u[0] = (d) => i.value = !1)
            })
          ]),
          (y(!0), A(je, null, ut(s.value, (d) => (y(), A("p", {
            class: "whitespace-pre-line pb-10",
            key: d
          }, G(_(t)(`keyboardInstructions.${d}`)), 1))), 128)),
          m("button", {
            type: "button",
            class: "mt-auto self-end mr-10 mb-10 px-20 py-10",
            onClick: u[1] || (u[1] = (d) => i.value = !1),
            ref_key: "lastEl",
            ref: l
          }, G(_(t)("keyboardInstructions.OK")), 513)
        ], 512)
      ], 32)) : D("", !0);
    };
  }
}), Xe = U("instance", () => ({ started: h(!1) })), uo = { class: "h-full relative" }, po = { class: "inner-shell absolute top-0 left-0 h-full w-full pointer-events-none" }, ho = { class: "absolute top-8 w-full flex justify-center" }, fo = {
  key: 1,
  class: "w-full h-full"
}, mo = /* @__PURE__ */ O({
  __name: "shell",
  setup(r) {
    const e = Ae("iApi"), t = Xe(), i = ge(), s = We(), { t: o } = q(), n = P(() => i.items.appbar), l = () => {
      e?.event.emit("openKeyboardInstructions");
    }, a = () => (
      // @ts-ignore
      s.teleported
    );
    return (c, u) => (y(), A("div", uo, [
      m("div", po, [
        u[0] || (u[0] = m("div", { class: "sr-only screen-reader-alert" }, null, -1)),
        m("div", ho, [
          m("button", {
            type: "button",
            class: "bg-white hidden-until-focus z-50 shadow-md px-10",
            onClick: l
          }, G(_(o)("keyboardInstructions.open")), 1)
        ]),
        se(co),
        se(lr, { class: "panel-stack sm:flex absolute inset-0 overflow-hidden sm:p-12 z-10 sm:pl-80 xs:pl-40 sm:pb-48 xs:pb-28 xs:pr-0 sm:pr-40" }),
        n.value ? D("", !0) : (y(), j(no, { key: 0 })),
        se(io, { class: "z-30" })
      ]),
      _(t).started ? (y(), j(or, { key: 0 })) : (y(), A("div", fo, u[1] || (u[1] = [
        m("div", { class: "spinner relative inset-x-1/2 inset-y-9/20" }, null, -1)
      ]))),
      (y(!0), A(je, null, ut(a(), (p) => (y(), j(hs, {
        to: p.teleport?.target,
        key: p.id
      }, [
        (y(), j(Hi, {
          key: `${p.id}`,
          panel: p
        }, null, 8, ["panel"]))
      ], 8, ["to"]))), 128))
    ]));
  }
}), go = /* @__PURE__ */ Me(mo, [["__scopeId", "data-v-6c131943"]]), yo = O({
  name: "App",
  components: { Shell: go },
  setup() {
    const r = fs();
    He(() => {
      new Wi().observe(r?.proxy?.$refs["app-size"]), Gs({
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
}), vo = ["lang"], bo = {
  class: "h-full",
  ref: "app-size"
};
function Ao(r, e, t, i, s, o) {
  const n = Z("shell");
  return y(), A("div", {
    class: "ramp-app ramp-styles animation-enabled",
    lang: r.$i18n.locale
  }, [
    m("div", bo, [
      se(n)
    ], 512)
  ], 8, vo);
}
const wo = /* @__PURE__ */ Me(yo, [["render", Ao]]), Ee = "focus-list", ze = "focus-item", Eo = "focus-icon", xo = "focus-container", ot = `[${Ee}],[${xo}]`, vt = "truncate-text", bt = "show-truncate", tt = "focused", Ht = `button,input,select,a,textarea,[contenteditable],[${Ee}],[${Eo}],[tabIndex]`, So = {
  mounted(r, e) {
    +r.getAttribute("tabindex") <= 0 && r.setAttribute("tabindex", "0"), r.toggleAttribute(Ee, !0), new _o(r, e.value);
  },
  updated(r) {
    Zi(r);
  }
};
function Zi(r) {
  r.querySelectorAll(Ht).forEach((t) => {
    if (t.closest(ot) === r || t.closest(ot) === t && t.parentElement.closest(ot) === r)
      if (t.closest(`[${Ee}],.${tt}`).classList.contains(tt))
        t.setAttribute("tabindex", "0");
      else {
        t.setAttribute("tabindex", "-1");
        return;
      }
  });
}
class _o {
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
    e.addEventListener("keydown", function(s) {
      i.onKeydown(s);
    }), e.addEventListener("focus", function() {
      i.onFocus();
    }), e.addEventListener("blur", function() {
      i.onBlur();
    }), e.addEventListener("mousedown", function() {
      i.onMousedown();
    }), e.addEventListener("touchstart", function() {
      i.onTouchstart();
    }), document.addEventListener("click", function(s) {
      e.contains(s.target) ? i.onClick(s) : i.defocusItem(i.highlightedItem);
    });
  }
  /**
   * Sets `tabindex` to `value` for every tabbable thing under `focusItem` (or the list if not specified)
   *
   * @param {Number} value the value to give `tabindex` on each tabbable item
   * @param {Element} focusItem the element containing the tabbable items, defaults to the focus list
   */
  setTabIndex(e, t = this.element) {
    t.querySelectorAll(Ht).forEach((s) => {
      (e === -1 || s.closest(ot) === this.element || s.closest(ot) === s && s.parentElement.closest(ot) === this.element || s.closest(`[${Ee}],.${tt}`).classList.contains(tt)) && s.setAttribute("tabindex", e.toString());
    });
  }
  /**
   * Removes 'focused' to the class list of `item` then updates the tabIndex on subitems (setting them to -1).
   *
   * @param {Element} item The element to defocus
   */
  defocusItem(e) {
    e.classList.remove(tt), this.setTabIndex(-1, e), e._tippy && e._tippy.hide(), e.getAttribute(ze) === bt && e.querySelector(`[${vt}]`)?._tippy?.hide();
  }
  /**
   * Adds 'focused' to the class list of `item` then updates the tabIndex on subitems (setting them to 0).
   *
   * @param {Element} item The element to focus
   */
  focusItem(e) {
    e.classList.add(tt), this.setAriaActiveDescendant(e), this.setTabIndex(0, e), e.scrollIntoView({ block: "nearest" }), e._tippy && !this.isTapped && e._tippy.show(), e.getAttribute(ze) === bt && e.querySelector(`[${vt}]`)?._tippy?.show(), this.isTapped = !1;
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
      this.element.querySelectorAll(`[${ze}]`),
      (s) => s.closest(`[${Ee}]`) === t.element && !!s.offsetParent
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
          this.highlightedItem !== this.element && (this.highlightedItem.querySelectorAll(Ht).length === 0 && this.defocusItem(this.highlightedItem), e.shiftKey && (e.preventDefault(), e.stopPropagation(), this.defocusItem(this.highlightedItem), this.highlightedItem = this.element, this.element.removeAttribute("aria-activedescendant"), this.element.focus()));
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
    if (!t.hasAttribute(Ee))
      for (; t.parentElement.closest(`[${Ee}]`) !== this.element; )
        t = t.parentElement.closest(`[${Ee}]`);
    this.highlightedItem = t.closest(`[${ze}]`) || t.closest(`[${Ee}]`) || this.highlightedItem, t.hasAttribute(`${ze}`) && this.element.focus(), this.highlightedItem !== this.element ? this.focusItem(this.highlightedItem) : this.element.removeAttribute("aria-activedescendant");
  }
  /**
   * Callback for the focus event listener on the focus list element.
   * NOTE: this is only called when the LIST ELEMENT is focused, not any descendant
   *
   * This is used to pull back the `focusedItem` id and the aria-activedescendant attribute when a list is focused
   */
  onFocus() {
    this.highlightedItem && !this.isClicked && (this.highlightedItem._tippy && this.highlightedItem._tippy.show(), this.highlightedItem.getAttribute(ze) === bt && this.highlightedItem.querySelector(`[${vt}]`)?._tippy?.show()), this.isClicked = !1, this.element.hasAttribute("aria-activedescendant") || this.highlightedItem === this.element ? this.highlightedItem !== this.element && this.focusItem(this.highlightedItem) : this.setAriaActiveDescendant(this.highlightedItem), Zi(this.element), this.highlightedItem && this.highlightedItem !== this.element && this.highlightedItem.setAttribute("tabindex", "-1");
  }
  /**
   * Callback for the BLUR event listener on the focus list element.
   * NOTE: this is only called when the list element stops being focused, not a descendant
   */
  onBlur() {
    this.highlightedItem && (this.highlightedItem._tippy && this.highlightedItem._tippy.hide(), this.highlightedItem.getAttribute(ze) === bt && this.highlightedItem.querySelector(`[${vt}]`)?._tippy?.hide());
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
const fi = "focus-item", Io = {
  beforeMount(r, e) {
    r.hasAttribute("id") || r.setAttribute("id", To()), e.value ? r.setAttribute(fi, e.value) : r.toggleAttribute(fi, !0);
  }
};
function To() {
  let r;
  do
    r = "focus-item-" + Math.random().toString(36).substring(2, 9);
  while (document.getElementById(r) !== null);
  return r;
}
const ei = "focus-container", Ki = "focus-list", Lo = "focus-icon", Ut = `[${Ki}],[${ei}]`, mi = `button,input,select,a,textarea,[contenteditable],.ag-tab-guard,[${Ki}],[${ei}],[${Lo}],[tabIndex]`;
let Bt = [];
const $o = {
  mounted(r) {
    [...document.querySelectorAll(".inner-shell")].some((t) => t.contains(r)) && Bt.push(new Ro(r));
  },
  beforeUnmount(r) {
    Bt = Bt.filter((e) => e.element === r ? (e.removeEventListeners(), !1) : !0);
  }
};
class Ro {
  element;
  /**
   * Creates an instance of FocusContainerManager
   *
   * @param element The HTMLElement the directive was placed on
   * @param options The options provided to the directive
   */
  constructor(e) {
    this.element = e, this.element.toggleAttribute(ei, !0), this.element.tabIndex = 0, setTimeout(() => this.disableTabbing(), 600);
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
    Array.prototype.filter.call(this.element.querySelectorAll(mi), () => !0).forEach((t) => {
      t.tabIndex = -1;
    });
  }
  /**
   * Sets tabindex to 0 for every VISIBLE element not under a different focus container or list.
   * @return {HTMLElement} the first valid element
   */
  enableTabbing() {
    let e;
    return Array.prototype.map.call(this.element.querySelectorAll(mi), (t) => {
      (t.closest(Ut) === this.element || t.closest(Ut) === t && t.parentElement.closest(Ut) === this.element) && t.offsetParent && (t.tabIndex = 0, e === void 0 && (e = t));
    }), e;
  }
}
const Co = "truncate-text", Oo = "truncate-trigger", ko = {
  beforeMount(r, e) {
    !r.classList.contains("truncate") && !e.value?.noTruncateClass && r.classList.add("truncate"), r.toggleAttribute(Co, !0);
  },
  mounted(r, e) {
    let t;
    e.value && e.value.externalTrigger && (t = r.closest(`[${Oo}]`)), Us(r, {
      content: gi(r.textContent),
      onShow: Mo,
      allowHTML: !0,
      placement: "bottom-start",
      maxWidth: 320,
      //flip: false, // can't find a replacement for Vue3
      //boundary: 'window',
      triggerTarget: t,
      ...e.value?.options || {}
    });
  },
  updated(r, e) {
    r._tippy && (r._tippy.setContent(gi(r.textContent)), e.value && e.value.options && r._tippy.setProps(e.value.options));
  },
  unmounted(r) {
    r._tippy && r._tippy.destroy();
  }
};
function Mo(r) {
  if (!(r.reference.clientWidth < r.reference.scrollWidth || r.reference.clientHeight < r.reference.scrollHeight))
    return !1;
}
function gi(r) {
  if (r === null)
    return "";
  let e = Bs(r, {
    target: "_blank",
    validate: {
      url: (t) => /^https?:\/\//.test(t)
      // only links that begin with a protocol will be hyperlinked
    }
  });
  return e = `<div style='word-break: break-word;'>${e}</div>`, e;
}
const Po = ["content"], No = {
  key: 0,
  class: "flex flex-shrink-0 items-center border-b border-solid border-gray-600 px-8 h-48 overflow-hidden"
}, Fo = {
  class: "flex-grow text-lg py-16 pl-8 min-w-0",
  tabIndex: "0"
}, Do = { key: 1 }, Go = {
  key: 0,
  class: "flex"
}, Uo = ["innerHTML"], Bo = {
  key: 2,
  class: "px-8 py-16 border-t border-gray-400 default-focus-style"
}, zo = /* @__PURE__ */ O({
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
  setup(r, { expose: e }) {
    const { t } = q(), i = We(), s = Tt(), o = Ae("iApi"), n = li("el"), l = li("contentEl"), a = h();
    e({ el: n });
    const c = r, u = P(() => o?.fixture.get("appbar") ? s.temporary : []), p = P(() => i.mobileView), d = P(() => i.reorderable), b = (v) => v.scrollHeight > v.clientHeight, g = () => !p.value && !c.panel.teleport, f = (v) => {
      c.panel.move(v), v === "left" && $t(() => {
        (n.value?.querySelector(".move-left")).focus();
      });
    }, w = P(() => c.screenId ? c.panel.screens[c.screenId][o?.$i18n.locale.value ?? "en"] : null);
    return He(() => {
      n.value?.addEventListener("blur", () => {
        n.value._tippy.hide();
      }), n.value?.addEventListener("keyup", (v) => {
        v.key === "Tab" && n.value?.matches(":focus") && n.value._tippy.show();
      }), a.value = new ResizeObserver(() => {
        b(l.value) ? l.value?.setAttribute("tabIndex", "0") : l.value?.removeAttribute("tabIndex");
      }), a.value.observe(l.value);
    }), ct(() => {
      n.value?.removeEventListener("blur", () => {
        n.value._tippy.hide();
      }), n.value?.removeEventListener("keyup", (v) => {
        v.key === "Tab" && n.value?.matches(":focus") && n.value._tippy.show();
      }), a.value.disconnect();
    }), (v, R) => {
      const L = Z("back"), $ = Z("panel-options-menu"), W = Z("left"), de = Z("right"), pt = Z("pin"), Mt = Z("expand"), Pt = Z("minimize"), Nt = Z("close"), S = k("truncate"), C = k("focus-item"), oe = k("tippy");
      return M((y(), A("div", {
        class: "h-full flex flex-col items-stretch",
        content: `<div style='word-break: break-word;'>${_(t)(r.panel.alertName) + ". " + _(t)("panels.access")}</div>`,
        ref_key: "el",
        ref: n
      }, [
        r.header ? (y(), A("header", No, [
          se(L, {
            class: re(r.panel.teleport ? "display-none" : "block sm:display-none"),
            onClick: R[0] || (R[0] = (he) => r.panel.close())
          }, null, 8, ["class"]),
          M((y(), A("h2", Fo, [
            v.$slots.header ? Oe(v.$slots, "header", { key: 0 }) : (y(), A("div", Do, G(_(t)(r.panel.alertName)), 1))
          ])), [
            [S]
          ]),
          v.$slots.controls ? (y(), j($, { key: 0 }, {
            default: X(() => [
              Oe(v.$slots, "controls")
            ]),
            _: 3
          })) : D("", !0),
          m("div", {
            class: re(r.panel.teleport ? "flex" : "display-none sm:flex")
          }, [
            r.panel.teleport ? D("", !0) : (y(), A("div", Go, [
              d.value ? (y(), j(W, {
                key: 0,
                onClick: R[1] || (R[1] = (he) => f("left")),
                active: !r.panel.isLeftMostPanel
              }, null, 8, ["active"])) : D("", !0),
              d.value ? (y(), j(de, {
                key: 1,
                onClick: R[2] || (R[2] = (he) => f("right")),
                active: !r.panel.isRightMostPanel
              }, null, 8, ["active"])) : D("", !0),
              se(pt, {
                onClick: R[3] || (R[3] = (he) => r.panel.pin()),
                active: r.panel.isPinned
              }, null, 8, ["active"]),
              r.panel.controls && r.panel.controls.expand ? (y(), j(Mt, {
                key: 2,
                onClick: R[4] || (R[4] = (he) => r.panel.expand()),
                active: r.panel.expanded
              }, null, 8, ["active"])) : D("", !0)
            ])),
            r.panel.button && u.value?.includes(r.panel.id) ? (y(), j(Pt, {
              key: 1,
              onClick: R[5] || (R[5] = (he) => r.panel.minimize())
            })) : D("", !0),
            se(Nt, {
              onClick: R[6] || (R[6] = (he) => r.panel.close())
            })
          ], 2)
        ])) : D("", !0),
        r.content ? (y(), A("div", {
          key: 1,
          class: "p-8 flex-grow overflow-y-auto",
          ref_key: "contentEl",
          ref: l
        }, [
          v.$slots.content ? Oe(v.$slots, "content", { key: 0 }) : w.value ? (y(), A("div", {
            key: 1,
            innerHTML: w.value.innerHTML
          }, null, 8, Uo)) : D("", !0)
        ], 512)) : D("", !0),
        r.footer ? M((y(), A("div", Bo, [
          Oe(v.$slots, "footer")
        ])), [
          [C]
        ]) : D("", !0)
      ], 8, Po)), [
        [oe, {
          trigger: "manual",
          touch: !1,
          onShow: g,
          allowHTML: !0,
          maxWidth: r.panel.style["flex-basis"] ?? 350,
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
}), Vo = { class: "relative" }, jo = ["content", "aria-label"], qo = ["transform"], Wo = /* @__PURE__ */ O({
  __name: "pin",
  props: {
    active: Boolean
  },
  setup(r) {
    const { t: e } = q();
    return (t, i) => {
      const s = k("tippy");
      return y(), A("div", Vo, [
        M((y(), A("button", {
          type: "button",
          class: re(["text-gray-500 hover:text-black focus:text-black p-8", { "text-gray-700": r.active }]),
          content: _(e)(r.active ? "panels.controls.unpin" : "panels.controls.pin"),
          "aria-label": _(e)(r.active ? "panels.controls.unpin" : "panels.controls.pin")
        }, [
          (y(), A("svg", {
            class: "fill-current w-16 h-16",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512",
            transform: `rotate(${r.active ? 30 : 0})`
          }, i[0] || (i[0] = [
            m("path", { d: "M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z" }, null, -1)
          ]), 8, qo))
        ], 10, jo)), [
          [s, { placement: "bottom", hideOnClick: !1 }]
        ])
      ]);
    };
  }
}), Ho = { class: "relative" }, Yo = ["content", "aria-label"], Jo = /* @__PURE__ */ O({
  __name: "close",
  props: {
    active: Boolean
  },
  setup(r) {
    const { t: e } = q();
    return (t, i) => {
      const s = k("tippy");
      return y(), A("div", Ho, [
        M((y(), A("button", {
          type: "button",
          class: re(["text-gray-500 hover:text-black focus:text-black p-8", { "text-gray-700": r.active }]),
          content: _(e)("panels.controls.close"),
          "aria-label": _(e)("panels.controls.close")
        }, i[0] || (i[0] = [
          m("svg", {
            class: "fill-current w-16 h-16",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 352 512"
          }, [
            m("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" })
          ], -1)
        ]), 10, Yo)), [
          [s, {
            placement: "bottom",
            theme: "ramp4",
            animation: "scale"
          }]
        ])
      ]);
    };
  }
}), Zo = { class: "relative" }, Ko = ["content", "aria-label"], Qo = /* @__PURE__ */ O({
  __name: "back",
  props: {
    active: Boolean
  },
  setup(r) {
    const { t: e } = q();
    return (t, i) => {
      const s = k("tippy");
      return y(), A("div", Zo, [
        M((y(), A("button", {
          type: "button",
          class: re(["text-gray-500 hover:text-black focus:text-black p-8", { "text-gray-700": r.active }]),
          content: _(e)("panels.controls.back"),
          "aria-label": _(e)("panels.controls.back")
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
        ]), 10, Ko)), [
          [s, {
            placement: "bottom",
            theme: "ramp4",
            animation: "scale"
          }]
        ])
      ]);
    };
  }
}), Xo = { class: "w-32 h-32" }, en = ["content"], tn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "h-24 w-24 fill-current transform rotate-90"
}, sn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "h-24 w-24 fill-current transform rotate-90"
}, rn = /* @__PURE__ */ O({
  __name: "expand",
  props: {
    active: Boolean
  },
  setup(r) {
    const { t: e } = q();
    return (t, i) => {
      const s = k("tippy");
      return y(), A("div", Xo, [
        M((y(), A("button", {
          type: "button",
          class: "text-gray-500 hover:text-black focus:text-black w-full h-full flex justify-center items-center",
          content: _(e)(`panels.controls.${r.active ? "collapse" : "expand"}`)
        }, [
          r.active ? (y(), A("svg", sn, i[1] || (i[1] = [
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
          ]))) : (y(), A("svg", tn, i[0] || (i[0] = [
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
        ], 8, en)), [
          [s, {
            placement: "bottom",
            theme: "ramp4",
            animation: "scale",
            hideOnClick: !1
          }]
        ])
      ]);
    };
  }
}), on = { class: "relative" }, nn = ["content", "aria-label"], an = /* @__PURE__ */ O({
  __name: "minimize",
  props: {
    active: Boolean
  },
  setup(r) {
    const { t: e } = q();
    return (t, i) => {
      const s = k("tippy");
      return y(), A("div", on, [
        M((y(), A("button", {
          type: "button",
          class: re(["text-gray-500 hover:text-black focus:text-black p-6", { "text-gray-700": r.active }]),
          content: _(e)("panels.controls.minimize"),
          "aria-label": _(e)("panels.controls.minimize")
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
        ]), 10, nn)), [
          [s, {
            placement: "bottom",
            theme: "ramp4",
            animation: "scale"
          }]
        ])
      ]);
    };
  }
}), ln = { class: "relative" }, cn = ["content", "aria-label"], un = /* @__PURE__ */ O({
  __name: "right",
  props: {
    active: Boolean
  },
  setup(r) {
    const { t: e } = q();
    return (t, i) => {
      const s = k("tippy");
      return y(), A("div", ln, [
        M((y(), A("button", {
          type: "button",
          class: re(["p-8", {
            "text-gray-500 hover:text-black focus:text-black": r.active,
            "text-gray-300": !r.active
          }]),
          content: _(e)("panels.controls.moveRight"),
          "aria-label": _(e)("panels.controls.moveRight")
        }, i[0] || (i[0] = [
          m("svg", {
            class: "fill-current w-16 h-16",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "4 4 16 16"
          }, [
            m("path", { d: "M 8.59 16.34 L 13.17 11.75 L 8.59 7.16 L 10 5.75 L 16 11.75 L 10 17.75 Z" })
          ], -1)
        ]), 10, cn)), [
          [s, {
            placement: "bottom",
            theme: "ramp4",
            animation: "scale"
          }]
        ])
      ]);
    };
  }
}), pn = { class: "relative" }, dn = ["content", "aria-label"], hn = /* @__PURE__ */ O({
  __name: "left",
  props: {
    active: Boolean
  },
  setup(r) {
    const { t: e } = q();
    return (t, i) => {
      const s = k("tippy");
      return y(), A("div", pn, [
        M((y(), A("button", {
          type: "button",
          class: re(["p-8 move-left", {
            "text-gray-500 hover:text-black focus:text-black": r.active,
            "text-gray-300": !r.active
          }]),
          content: _(e)("panels.controls.moveLeft"),
          "aria-label": _(e)("panels.controls.moveLeft")
        }, i[0] || (i[0] = [
          m("svg", {
            class: "fill-current w-16 h-16",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "4 4 16 16"
          }, [
            m("path", { d: "M 15.41 16.09 L 10.83 11.5 L 15.41 6.91 L 14 5.5 L 8 11.5 L 14 17.5 Z" })
          ], -1)
        ]), 10, dn)), [
          [s, {
            placement: "bottom",
            theme: "ramp4",
            animation: "scale"
          }]
        ])
      ]);
    };
  }
}), fn = /* @__PURE__ */ O({
  __name: "panel-options-menu",
  setup(r) {
    const { t: e } = q();
    return (t, i) => (y(), j(Xt, {
      class: "flex",
      tooltip: _(e)("panels.controls.optionsMenu"),
      popperOptions: { strategy: "fixed" },
      position: "bottom-end"
    }, {
      header: X(() => i[0] || (i[0] = [
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
      default: X(() => [
        Oe(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["tooltip"]));
  }
}), mn = /* @__PURE__ */ Me(fn, [["__scopeId", "data-v-51e22a4a"]]), gn = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-32 h-20"
}, yn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-32 h-20"
}, vn = /* @__PURE__ */ O({
  __name: "fullscreen-nav",
  setup(r) {
    const { t: e } = q(), t = Ae("iApi"), i = () => {
      t.toggleFullscreen();
    };
    return (s, o) => {
      const n = Z("mapnav-button");
      return y(), j(n, {
        onClickFunction: i,
        tooltip: _(e)("mapnav.fullscreen")
      }, {
        default: X(() => [
          _(t).isFullscreen ? (y(), A("svg", gn, o[0] || (o[0] = [
            m("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }, null, -1),
            m("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }, null, -1)
          ]))) : (y(), A("svg", yn, o[1] || (o[1] = [
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
}), bn = /* @__PURE__ */ O({
  __name: "geolocator-nav",
  setup(r) {
    const { t: e } = q(), t = Ae("iApi");
    let i = ve([]);
    const s = async () => {
      if (i.length)
        o(i);
      else {
        const l = await n({
          maximumAge: 1 / 0,
          timeout: 5e3
        }).catch((a) => {
          a.code === GeolocationPositionError.PERMISSION_DENIED ? t.notify.show(fe.ERROR, e("mapnav.geolocator.error.permission")) : t.notify.show(fe.ERROR, e("mapnav.geolocator.error.internal"));
        });
        l && (i = [l.coords.longitude, l.coords.latitude], o(i));
      }
    }, o = (l) => {
      let a = new H("geolocation", l, I.latLongSR(), !0);
      t.geo.map.zoomMapTo(a);
    }, n = (l) => new Promise((a, c) => navigator.geolocation.getCurrentPosition(a, c, l));
    return (l, a) => {
      const c = Z("mapnav-button");
      return y(), j(c, {
        onClickFunction: s,
        tooltip: _(e)("mapnav.geolocator")
      }, {
        default: X(() => a[0] || (a[0] = [
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
}), An = /* @__PURE__ */ O({
  __name: "home-nav",
  setup(r) {
    const { t: e } = q(), t = Ae("iApi"), i = () => {
      const s = t.geo.map.getExtentSet();
      t.geo.map.zoomMapTo(s.fullExtent);
    };
    return (s, o) => {
      const n = Z("mapnav-button");
      return y(), j(n, {
        onClickFunction: i,
        tooltip: _(e)("mapnav.home")
      }, {
        default: X(() => o[0] || (o[0] = [
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
}), wn = {
  class: "relative w-32 h-32 text-gray-600 hover:text-black",
  tabindex: "-1"
}, En = ["content", "aria-label"], xn = /* @__PURE__ */ O({
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
  setup(r) {
    return (e, t) => {
      const i = k("focus-item"), s = k("tippy");
      return y(), A("div", wn, [
        M((y(), A("button", {
          type: "button",
          class: "w-full h-full default-focus-style focus:outline-none",
          onClick: t[0] || (t[0] = (o) => r.onClickFunction()),
          content: r.tooltip,
          "aria-label": typeof r.tooltip == "string" ? r.tooltip : ""
        }, [
          Oe(e.$slots, "default")
        ], 8, En)), [
          [i],
          [s, { placement: "left" }]
        ])
      ]);
    };
  }
}), Sn = {
  class: "relative",
  tabindex: "-1"
}, _n = ["aria-label", "content"], In = /* @__PURE__ */ O({
  __name: "button",
  props: {
    onClickFunction: {
      type: Function,
      required: !0
    },
    id: {
      type: String,
      required: !0
    },
    tooltip: {
      type: [String, Boolean],
      default: !1
    }
  },
  setup(r) {
    const e = Ae("iApi"), t = r, i = () => e?.event.emit(E.APPBAR_BUTTON_CLICK, t.id);
    return (s, o) => {
      const n = k("focus-item"), l = k("tippy");
      return y(), A("div", Sn, [
        M((y(), A("button", {
          type: "button",
          class: "py-6 w-full h-full",
          onClick: o[0] || (o[0] = () => {
            r.onClickFunction(), i();
          }),
          "aria-label": String(r.tooltip),
          content: `<div style='word-break: break-word;'>${r.tooltip}</div>`
        }, [
          Oe(s.$slots, "default", {}, void 0, !0)
        ], 8, _n)), [
          [n],
          [l, {
            allowHTML: !0,
            placement: "right"
          }]
        ])
      ]);
    };
  }
}), Tn = /* @__PURE__ */ Me(In, [["__scopeId", "data-v-457cd2d4"]]), Ln = U("areas-of-interest", () => ({ areas: h([]) })), $n = U("export", () => {
  const r = h({
    title: !0,
    map: !0,
    mapElements: !0,
    legend: !0,
    footnote: !0,
    timestamp: !0
  }), e = h("");
  function t(i) {
    if (r.value[i.name] !== void 0) {
      const s = r.value[i.name];
      r.value[i.name] = i.selected !== void 0 ? i.selected : !s;
    }
  }
  return { componentSelectedState: r, fileName: e, toggleSelected: t };
}), Rn = U("extentguard", () => {
  const r = h(!1);
  function e(a) {
    r.value = a;
  }
  const t = h(!1);
  function i(a) {
    t.value = a;
  }
  const s = h(!1);
  function o(a) {
    s.value = a;
  }
  const n = h([]);
  function l(a) {
    n.value = a;
  }
  return {
    active: r,
    setActive: e,
    enforcing: t,
    setEnforcing: i,
    alwaysOn: s,
    setAlwaysOn: o,
    extentSetIds: n,
    setExtentSetIds: l
  };
}), Cn = {
  A: 10,
  B: 12,
  C: 11,
  E: 13,
  G: 24,
  H: 24,
  J: 24,
  K: 35,
  L: 35,
  M: 35,
  N: 35,
  P: 35,
  R: 46,
  S: 47,
  T: 48,
  V: 59,
  X: [62, 61],
  Y: 60
}, zt = {
  en: {},
  fr: {}
};
class On {
  list = {};
  listFetched = !1;
  constructor(e, t) {
    Rt.get(t).then((i) => {
      i.data.definitions.forEach((s) => zt[e][s.code] = s.description), Object.keys(zt[e]).forEach((s) => {
        this.list[s] = zt[e][s];
      }), this.listFetched = !0;
    });
  }
  // return list of province codes based on FSA search input query
  fsaToProvinces(e) {
    const t = {};
    let i = Cn[e.substring(0, 1).toUpperCase()];
    return typeof i == "number" && (i = [i]), i.forEach((s) => {
      t[s] = this.list[s];
    }), t;
  }
}
function kn(r, e) {
  return new On(r, e);
}
const At = {
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
class Mn {
  allTypes = {};
  validTypes = {};
  filterComplete = !1;
  typesFetched = !1;
  constructor(e, t) {
    Rt.get(t).then((i) => {
      i.data.definitions.forEach((s) => {
        At[e][s.code] = s.term.split(`${s.code}-`)[1];
      }), Object.keys(At[e]).forEach((s) => {
        this.allTypes[s] = At[e][s], this.validTypes[s] = At[e][s];
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
function Pn(r, e) {
  return new Mn(r, e);
}
function Nn(r, e) {
  const t = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)(\s*[,|;\s]\s*)[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)[*]$/, i = /^\d{2,3}[A-P]/, s = /^[ABCEGHJKLMNPRSTVXY]\d[A-Z]/;
  if (t.test(e) && !r.disabledSearchTypes.includes("LAT/LNG")) {
    const o = e.slice(0, -1);
    return new Fn(r, o);
  } else return s.test(e) && !r.disabledSearchTypes.includes("FSA") ? new Dn(r, e) : i.test(e) && !r.disabledSearchTypes.includes("NTS") ? new Gn(r, e.substring(0, 6).toUpperCase()) : new Un(r, e);
}
class Ot {
  config;
  query;
  failedServs = [];
  results = [];
  onComplete;
  latLongResult;
  featureResults = [];
  resultType = "geoname";
  constructor(e, t) {
    this.query = t, this.config = e;
  }
  search() {
    return this.jsonRequest(this.getUrl()).then((e) => this.normalizeNameItems(e.items)).catch(() => (console.error("Geoname service failed"), this.failedServs.push("geoname"), this.normalizeNameItems([])));
  }
  getUrl(e, t, i, s) {
    let o = "";
    return e ? o = this.config.geoLocateUrl + "?q=" + this.query : (i && s ? o = `${this.config.geoNameUrl}?lat=${i}&lon=${s}&num=${this.config.maxResults}` : o = `${this.config.geoNameUrl}?q=${this.query}&num=${this.config.maxResults}`, this.config.categories.length > 0 && (o += `&concise=${this.config.categories.join(",")}`), this.config.officialOnly && (o += "&category=O")), o;
  }
  normalizeNameItems(e) {
    return e.filter((t) => this.config.types.validTypes[t.concise.code]).map((t) => ({
      name: t.name,
      location: t.location,
      province: this.config.provinces.list[t.province.code],
      type: this.config.types.allTypes[t.concise.code],
      LatLon: { lat: t.latitude, lon: t.longitude },
      bbox: t.bbox,
      order: this.config.sortOrder.indexOf(t.concise.code) >= 0 ? this.config.sortOrder.indexOf(t.concise.code) : this.config.sortOrder.length
    }));
  }
  jsonRequest(e) {
    return new Promise((t, i) => {
      const s = new XMLHttpRequest();
      s.open("GET", e, !0), s.responseType = "json", s.onload = () => {
        if (s.status === 200) {
          const o = typeof s.response == "string" ? JSON.parse(s.response) : s.response;
          t(o);
        } else
          i("Could not load results from remote service.");
      }, s.send();
    });
  }
  locateByQuery() {
    return this.jsonRequest(this.getUrl(!0, void 0));
  }
  nameByLatLon(e, t, i) {
    return this.jsonRequest(this.getUrl(!1, i, e, t)).then((s) => this.normalizeNameItems(s.items)).catch(() => (console.error("LatLon service failed"), this.failedServs.push("geoname"), this.normalizeNameItems([])));
  }
}
class Fn extends Ot {
  constructor(e, t) {
    super(e, t), this.resultType = "latlong";
    const s = t.split(/[\s|,|;|]/).filter((l) => !isNaN(l) && l !== "").map((l) => parseFloat(l)), o = 0.015, n = [s[1] - o, s[0] - o, s[1] + o, s[0] + o];
    this.latLongResult = {
      name: `${s[0]},${s[1]}`,
      location: {
        latitude: s[0],
        longitude: s[1]
      },
      type: "Latitude/Longitude",
      position: [s[1], s[0]],
      bbox: n
    }, this.onComplete = new Promise((l, a) => {
      this.nameByLatLon(s[0], s[1]).then((c) => {
        c ? (this.results = c, l(this)) : a("Given lat lon coordinates cannot be found");
      });
    });
  }
}
class Dn extends Ot {
  constructor(e, t) {
    t = t.substring(0, 3).toUpperCase(), super(e, t), this.resultType = "fsa", this.onComplete = new Promise((i) => {
      this.formatLocationResult().then((s) => {
        s ? (this.featureResults.push(s), this.nameByLatLon(
          s.LatLon.lat,
          s.LatLon.lon,
          Object.keys(s._provinces).map((o) => parseInt(o))
        ).then((o) => {
          this.results = o, i(this);
        })) : (console.log("FSA code given cannot be found."), i(this));
      });
    });
  }
  formatLocationResult() {
    return this.locateByQuery().then((e) => {
      if (e.length === 1 && this.query) {
        const t = this.config.provinces.fsaToProvinces(this.query);
        return {
          fsa: this.query,
          code: "FSA",
          desc: this.config.types.allTypes.FSA,
          province: Object.keys(t).map((i) => t[i]).join(","),
          _provinces: t,
          LatLon: {
            lat: e[0].geometry.coordinates[1],
            lon: e[0].geometry.coordinates[0]
          }
        };
      }
    }).catch(() => {
      console.error("FSA service failed"), this.failedServs.push("geolocation");
    });
  }
}
class Gn extends Ot {
  unitName;
  unit;
  mapSheets = [];
  constructor(e, t) {
    super(e, t), this.resultType = "nts", t = isNaN(parseInt(t[2])) ? "0" + t : t, this.unitName = t, this.onComplete = new Promise((i) => {
      this.locateByQuery().then((s) => {
        if (s.length > 0 && this.query) {
          const o = this.locateToResult(s);
          this.unit = o[0], this.mapSheets = o, this.featureResults.push(this.unit), this.nameByLatLon(this.unit.LatLon.lat, this.unit.LatLon.lon).then((n) => {
            this.results = n, i(this);
          });
        } else
          console.log("Given NTS code not found"), i(this);
      }).catch(() => {
        console.error("NTS service failed"), this.failedServs.push("geolocation"), i(this);
      });
    });
  }
  locateToResult(e) {
    return e.map((i) => {
      const s = i.title.split(" ");
      return {
        nts: s.shift() || "",
        // 064D or 064D06
        location: s.join(" "),
        // "NUMABIN BAY"
        code: "NTS",
        // "NTS"
        desc: this.config.types.allTypes.NTS,
        // "National Topographic System"
        LatLon: {
          lat: i.geometry.coordinates[1],
          lon: i.geometry.coordinates[0]
        },
        bbox: i.bbox
      };
    });
  }
  equals(e) {
    return this.unitName === e.unitName;
  }
}
class Un extends Ot {
  constructor(e, t) {
    t = encodeURIComponent(t.trim()), super(e, t), this.resultType = "address", this.onComplete = new Promise((i) => {
      this.locateByQuery().then((s) => {
        this.featureResults = this.locateToResult(s), this.search().then((o) => {
          this.results = o, i(this);
        });
      }).catch(() => {
        this.failedServs.push("geolocation"), console.error("Address service failed"), this.search().then((s) => {
          this.results = s, i(this);
        });
      });
    });
  }
  locateToResult(e) {
    return this.config.categories.length > 0 && !this.config.categories.includes("ADDR") ? [] : e.filter((i) => i.type?.includes("Street")).map((i) => {
      const [s, o, n] = i.title.split(", ");
      return {
        name: s,
        city: o.split(" Of ").pop(),
        // prevents redundant label i.e. 'City Of Kingston'
        province: n,
        desc: this.config.types.allTypes.ADDRESS,
        LatLon: {
          lat: i.geometry.coordinates[1],
          lon: i.geometry.coordinates[0]
        }
      };
    });
  }
}
const yi = "https://geogratis.gc.ca/services/geolocation/@{language}/locate", vi = "https://geogratis.gc.ca/services/geoname/@{language}/geonames.json", bi = "https://geogratis.gc.ca/services/geoname/@{language}/codes/province.json", Ai = "https://geogratis.gc.ca/services/geoname/@{language}/codes/concise.json", Bn = {
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
class wi {
  config;
  constructor(e, t) {
    let i, s, o, n;
    const l = t?.serviceUrls;
    l ? (i = l.geoLocation ? l.geoLocation : yi, s = l.geoNames ? l.geoNames : vi, o = l.geoProvince ? l.geoProvince : bi, n = l.geoTypes ? l.geoTypes : Ai) : (i = yi, s = vi, o = bi, n = Ai), i = i.replace("@{language}", e), s = s.replace("@{language}", e), o = o.replace("@{language}", e), n = n.replace("@{language}", e);
    const a = t?.settings;
    let c, u, p, d, b;
    a ? (c = a.categories ? a.categories : [], u = a.sortOrder ? a.sortOrder : [], p = a.disabledSearchTypes ? a.disabledSearchTypes : [], d = a.maxResults > 0 ? a.maxResults : 100, b = !!a.officialOnly) : (c = [], u = [], p = [], d = 100, b = !1), this.config = {
      language: e,
      geoNameUrl: s,
      geoLocateUrl: i,
      types: Pn(e, n),
      // list of type filters
      provinces: kn(e, o),
      // list of province filters
      categories: c,
      sortOrder: u,
      disabledSearchTypes: p,
      maxResults: d,
      officialOnly: b
    }, this.config.types.filterValidTypes(t?.excludeTypes), this._provinceList = [], this._typeList = [], this._excludedTypes = t?.excludeTypes || [];
  }
  get provinceList() {
    return this._provinceList;
  }
  get typeList() {
    return this._typeList;
  }
  set provinceList(e) {
    this._provinceList = e;
  }
  set typeList(e) {
    this._typeList = e;
  }
  levenshteinDistance(e, t) {
    t = t.toLowerCase().trim();
    const i = decodeURI(e.query.toLowerCase().replace("*", "")), s = [];
    for (let o = 0; o <= t.length; o++) {
      s[o] = [o];
      for (let n = 1; n <= i.length; n++)
        s[o][n] = o === 0 ? n : Math.min(
          s[o][n - 1] + 1,
          // delete
          s[o - 1][n] + 0.2,
          // insert
          s[o - 1][n - 1] + (i[n - 1] === t[o - 1] ? 0 : 1)
          // substitute
        );
    }
    return s[t.length][i.length];
  }
  /**
   * Find and return the province object in the province list
   *
   * @param {string} province the target province
   * @return {Object}         associated province object
   */
  findProvinceObj(e) {
    return this.provinceList.find((t) => t.name === e);
  }
  /**
   * Given some string query, returns a promise that resolves as a formatted location object
   *
   * @param {string} q the search string this query is based on
   * @return {Promise}
   */
  query(e) {
    return Nn(this.config, e.toUpperCase()).onComplete.then((t) => {
      let i = [];
      t.featureResults.length > 0 ? t.resultType === "fsa" ? i = t.featureResults.map((o) => ({
        name: o.fsa,
        bbox: [
          o.LatLon.lon + 0.02,
          o.LatLon.lat - 0.02,
          o.LatLon.lon - 0.02,
          o.LatLon.lat + 0.02
        ],
        type: o.desc,
        position: [o.LatLon.lon, o.LatLon.lat],
        location: {
          latitude: o.LatLon.lat,
          longitude: o.LatLon.lon,
          province: this.findProvinceObj(o.province)
        },
        order: -1
      })) : t.resultType === "nts" ? i = t.featureResults.map((o) => ({
        name: o.nts,
        bbox: o.bbox ?? [
          o.LatLon.lon + 0.02,
          o.LatLon.lat - 0.02,
          o.LatLon.lon - 0.02,
          o.LatLon.lat + 0.02
        ],
        type: o.desc,
        position: [o.LatLon.lon, o.LatLon.lat],
        location: {
          city: o.location,
          latitude: o.LatLon.lat,
          longitude: o.LatLon.lon
        },
        order: -1
      })) : t.resultType === "address" && (i = t.featureResults.map((o) => ({
        name: o.name,
        bbox: [
          o.LatLon.lon + 2e-3,
          o.LatLon.lat - 2e-3,
          o.LatLon.lon - 2e-3,
          o.LatLon.lat + 2e-3
        ],
        type: o.desc,
        position: [o.LatLon.lon, o.LatLon.lat],
        location: {
          city: o.city,
          latitude: o.LatLon.lat,
          longitude: o.LatLon.lon,
          province: this.findProvinceObj(o.province)
        },
        order: this.config.sortOrder.indexOf("ADDR") >= 0 ? this.config.sortOrder.indexOf("ADDR") : this.config.sortOrder.length
      })), this.config.sortOrder.length > 0 && (i = i.sort((o, n) => this.levenshteinDistance(t, o.name) > this.levenshteinDistance(t, n.name) ? 1 : -1))) : t.resultType === "latlong" && (i = [t.latLongResult], i[0].order = -1);
      const s = t.results.map((o) => ({
        name: o.name,
        bbox: o.bbox,
        type: o.type,
        position: [o.LatLon.lon, o.LatLon.lat],
        location: {
          city: o.location,
          latitude: o.LatLon.lat,
          longitude: o.LatLon.lon,
          province: this.findProvinceObj(o.province)
        },
        order: o.order
      }));
      return {
        results: i.concat(s).slice(0, this.config.maxResults).sort((o, n) => this.config.sortOrder.length > 0 ? o.order > n.order ? 1 : -1 : this.levenshteinDistance(t, o.name) > this.levenshteinDistance(t, n.name) ? 1 : -1),
        failedServs: t.failedServs
      };
    });
  }
  /**
   * Return a promise that resolves to a list of formatted province objects
   *
   * @return {Promise<Array>} a promise that resolves to a list of formatted province objects
   */
  fetchProvinces() {
    return new Promise((e) => {
      const t = setInterval(() => {
        if (this.config.provinces.listFetched) {
          clearInterval(t);
          const i = [], s = {
            code: -1,
            abbr: "...",
            name: "..."
          };
          i.push(s);
          const o = this.config.provinces.list;
          for (const n in o)
            i.push({
              code: n,
              abbr: Bn[n],
              name: o[n]
            });
          this.provinceList = i, e(this.provinceList);
        }
      });
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
          const i = [], s = {
            code: -1,
            name: "..."
          };
          i.push(s);
          const o = this.config.types.allTypes;
          for (const n in o)
            this._excludedTypes.includes(n) || i.push({
              code: n,
              name: o[n]
            });
          this.typeList = i, e(this.typeList);
        }
      }, 250);
    });
  }
}
function Ei(r, e, t) {
  return r && e.extent && (t = t.filter(
    (i) => i.bbox[0] <= e.extent.xmax && i.bbox[1] <= e.extent.ymax && i.bbox[2] >= e.extent.xmin && i.bbox[3] >= e.extent.ymin
  )), e.province && e.province !== "..." && (t = t.filter((i) => i.location.province?.name && i.location.province.name === e.province)), e.type && e.type !== "..." && (t = t.filter((i) => i.type === e.type)), t;
}
const zn = U("geosearch", () => {
  const r = h(new wi("en", void 0)), e = h({
    type: "",
    province: "",
    extent: void 0
  }), t = h(!1), i = h(""), s = h(""), o = h(""), n = h([]), l = h([]), a = h(!1), c = h([]), u = P(
    () => new Promise((L) => {
      r.value.fetchProvinces().then(($) => {
        $.sort((W, de) => W.name > de.name ? 1 : -1), L($);
      });
    })
  ), p = P(
    () => new Promise((L) => {
      r.value.fetchTypes().then(($) => {
        $.sort((W, de) => W.name > de.name ? 1 : -1), L($);
      });
    })
  );
  function d(L, $) {
    r.value = new wi(L, $);
  }
  function b(L) {
    a.value = !0;
    const $ = i.value.replace(/["!*$+?^{}()|[\]\\]/g, "").trim();
    if (!$)
      n.value = [], l.value = [], a.value = !1;
    else if ($ && $ !== o.value || L) {
      const W = setInterval(() => {
        r.value.config.provinces.listFetched && r.value.config.types.typesFetched && (clearInterval(W), r.value.query(`${$}*`).then((de) => {
          c.value = de.failedServs, o.value = $, l.value = de.results;
          const pt = Ei(
            t.value,
            //@ts-ignore
            e.value,
            l.value
          );
          n.value = pt || [], a.value = !1;
        }));
      }, 250);
    } else {
      const W = Ei(
        t.value,
        //@ts-ignore
        e.value,
        l.value
      );
      n.value = W || [], a.value = !1;
    }
  }
  function g(L) {
    e.value.province = typeof L.province > "u" ? "" : L.province, b(L.forceReRun);
  }
  function f(L) {
    e.value.type = typeof L.type > "u" ? "" : L.type, b(L.forceReRun);
  }
  function w(L) {
    o.value = i.value.replace(/["!*$+?^{}()|[\]\\]/g, "").trim(), i.value = L, b();
  }
  function v(L) {
    const $ = {
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
    L = L.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), s.value = Array.from(L).map((W) => Object.keys($).includes(W) ? "[" + W + $[W] + "]" : W.replace(/["$!*+?^{}()|[\]\\]/g, "").replace(/[.\\]/g, "\\$&").trim()).join("");
  }
  function R(L) {
    if (L.visible !== void 0 && (t.value = L.visible), L.extent.sr.wkid !== 4326)
      throw new Error("an extent that was not projected to wkid 4326 was passed to the geosearch store");
    e.value.extent = L.extent, b();
  }
  return {
    GSservice: r,
    queryParams: e,
    resultsVisible: t,
    searchVal: i,
    searchRegex: s,
    lastSearchVal: o,
    searchResults: n,
    savedResults: l,
    loadingResults: a,
    failedServices: c,
    getProvinces: u,
    getTypes: p,
    initService: d,
    runQuery: b,
    setProvince: g,
    setType: f,
    setSearchTerm: w,
    setSearchRegex: v,
    setMapExtent: R
  };
}), Vn = U("help", () => ({ location: h("./help/") }));
var Qi = /* @__PURE__ */ ((r) => (r.Visibility = "visibilityButton", r.Expand = "expandButton", r))(Qi || {}), Yt = /* @__PURE__ */ ((r) => (r.Item = "item", r.Placeholder = "placeholder", r.Error = "error", r))(Yt || {});
class Xi extends J {
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
    super(e), this._uid = nt.sharedUtils.generateUUID(), this._name = t.name, this._type = t.type ?? "placeholder", this._parent = i, this._children = [], this._loadPromise = new Y(), this._hidden = t.hidden ?? !1, this._expanded = t.expanded ?? !0, this._visibility = !0, this._exclusive = t.exclusive ?? !1, this._controls = t.controls?.slice() ?? [
      "visibilityButton",
      "expandButton"
      /* Expand */
    ], this._disabledControls = t.disabledControls?.slice(), this._lastVisible, this._visibleChildren = [];
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
        if (this._lastVisible && (!(this._lastVisible instanceof Ne) || this._lastVisible.layerControlAvailable(V.Visibility)))
          this._lastVisible.toggleVisibility(!0);
        else {
          const i = this.children.find(
            (s) => !(s instanceof Ne) || s.layerControlAvailable(V.Visibility)
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
    this instanceof Ne && !this.layerControlAvailable(V.Visibility) || (this.exclusive ? e.visibility ? (this.children.forEach((t) => {
      t.uid !== e.uid && t.toggleVisibility(!1, !1);
    }), this._lastVisible = e, this._visibility = !0, this instanceof Ne && this.layer && this.layer.layerExists && (this.layer.visibility = !0)) : (this._visibility = !1, this instanceof Ne && this.layer && this.layer.layerExists && (this.layer.visibility = !1), this._lastVisible = e) : this.children.some((t) => t.visibility) ? (this._visibility = !0, this._visibleChildren = this.children.filter((t) => t.visibility), this instanceof Ne && this.layer && this.layer.layerExists && (this.layer.visibility = !0)) : (this._visibility = !1, this._visibleChildren = [], this instanceof Ne && this.layer && this.layer.layerExists && (this.layer.visibility = !1)), this.parent && this.parent.checkVisibility(this));
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
    this._type = "placeholder", this._loadPromise = new Y();
  }
  /**
   * Sets legend item to an error state
   */
  error() {
    this._type !== "error" && (this._type = "error", this._loadPromise.getPromise().catch(() => {
    }), this._loadPromise.rejectMe(), this.checkVisibilityRules());
  }
}
class Ne extends Xi {
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
    super(e, t, i), this._type = Yt.Placeholder, this._layerId = t.layerId, this._layerIdx = t.sublayerIndex, this._isSublayer = t.sublayerIndex !== void 0, this._layerControls = t.layerControls ?? [], this._origLayerControls = t.layerControls, this._layerDisabledControls = t.disabledLayerControls ?? [], this._origLayerDisabledControls = t.disabledLayerControls, this._layerRedrawing = !1, this._symbologyExpanded = t.symbologyExpanded || !1, t.coverIcon && (this._coverIcon = t.coverIcon), t.description && (this._description = t.description), this._symbologyRenderStyle = t.symbologyRenderStyle ?? "icons", this._customSymbology = !!t.symbologyStack, this._symbologyStack = t.symbologyStack?.map((s) => ({
      uid: this.$iApi.geo.shared.generateUUID(),
      label: s.text,
      definitionClause: s.sqlQuery,
      imgUrl: s.image ?? "",
      drawPromise: Promise.resolve(),
      visibility: !0,
      // just a placeholder
      lastVisibility: !0
    })), this._maxLines = t.maxLines && [1, 2, 3, 4, 5, 6].includes(t.maxLines) ? t.maxLines : void 0;
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
    if (!(!this.layerControlAvailable(V.Visibility) && !i) && (super.toggleVisibility(e, t), this.layer && this.layer.layerExists)) {
      this.layer.visibility = this.visibility;
      const s = this._symbologyStack.some((o) => o.lastVisbility);
      this._symbologyStack.forEach((o) => {
        s || (o.lastVisbility = !0), o.visibility = this.visibility ? o.lastVisbility : !1;
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
  // @ts-ignore
  load(e) {
    const t = e instanceof ti ? e : this.$iApi.geo.layer.getLayer(this._layerId ?? this._layerUid);
    t && (this.layer = t, this._layerRedrawing = t.mapLayer && t.drawState !== ce.UP_TO_DATE, t.loadPromise().then(() => {
      this._layerInitVis = typeof this._layerInitVis < "u" ? this._visibility : t.visibility, super.load(), this.toggleVisibility(this._layerInitVis, !0, !0), t.visibility || this.setSymbologyVisibility(void 0, !1), this.handlers.push(
        this.$iApi.event.on(
          E.LAYER_VISIBILITYCHANGE,
          (i) => {
            i.layer.uid === this.layer.uid && this._type === Yt.Item && this.toggleVisibility(i.visibility, !0, !0);
          }
        )
      ), this.handlers.push(
        this.$iApi.event.on(
          E.LAYER_DRAWSTATECHANGE,
          (i) => {
            this.layer.uid === i.layer.uid && (i.layer.drawState === ce.REFRESH ? this.layerRedrawing = !0 : setTimeout(() => {
              this.layerRedrawing = i.layer.drawState === ce.REFRESH;
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
var jn = /* @__PURE__ */ ((r) => (r.Title = "title", r.Text = "text", r.Image = "image", r.Markdown = "markdown", r.Template = "template", r))(jn || {});
class xi extends Xi {
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
    }), (t.infoType || t.content) && (this._controls = t.controls?.slice() ?? [Qi.Expand]), super.load();
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
const qn = U("legend", () => {
  const r = h(), e = h([]), t = h([]), i = h(!0), s = h(3);
  function o(a) {
    if (a.parent === void 0)
      e.value.push(a.item);
    else {
      if (!(a.item instanceof xi) && !(a.item instanceof Ne)) {
        console.error("attempted to add an unsupported legend item type");
        return;
      }
      a.parent.children.push(a.item);
    }
  }
  function n(a) {
    const c = (u) => (u = u.filter((p) => (p === a && !p.children.length && p.onRemoved(), p !== a)), u.forEach((p) => {
      p.children = c(p.children);
    }), u = u.filter(
      (p) => !(p instanceof xi && !p.children.length && p.content === "")
    ), u);
    e.value = c(e.value);
  }
  function l(a) {
    if (a.oldItem.parent === void 0) {
      const c = e.value, u = c.indexOf(a.oldItem);
      u > -1 && (e.value[u] = a.newItem), e.value = c;
    } else {
      const c = a.oldItem.parent.children, u = c.indexOf(a.oldItem);
      u > -1 && (c[u] = a.newItem), a.oldItem.parent.children = c;
    }
  }
  return {
    legendConfig: r,
    multilineItems: i,
    maxLines: s,
    children: e,
    headerControls: t,
    addItem: o,
    removeItem: n,
    replaceItem: l
  };
}), Wn = U("mapnav", () => {
  const r = h({}), e = h([]);
  function t(i) {
    i in r.value && delete r.value[i];
    const s = e.value.indexOf(i);
    s !== -1 && e.value.splice(s, 1);
  }
  return { items: r, order: e, removeItem: t };
}), Hn = U("metadata", () => {
  const r = h(""), e = h({ type: "LineString", coordinates: [] });
  return { status: r, response: e };
}), Yn = U("northarrow", () => {
  const r = h(""), e = h("");
  return { arrowIcon: r, poleIcon: e };
}), Jn = U("overviewmap", () => {
  const r = h({
    lodSets: [],
    extentSets: [],
    basemaps: [],
    tileSchemas: [],
    initialBasemapId: ""
  }), e = h({}), t = h(!0), i = h(1.5), s = h("#FF0000"), o = h(1), n = h("#000000"), l = h(0.25);
  function a(c) {
    r.value.initialBasemapId = c;
  }
  return {
    mapConfig: r,
    basemaps: e,
    startMinimized: t,
    expandFactor: i,
    borderColour: s,
    borderWidth: o,
    areaColour: n,
    areaOpacity: l,
    updateInitialBasemap: a
  };
}), Zn = U("scrollguard", () => {
  const r = h(!1);
  function e(t) {
    r.value = t;
  }
  return { enabled: r, setEnabled: e };
});
var ee = /* @__PURE__ */ ((r) => (r[r.UPLOAD = 0] = "UPLOAD", r[r.FORMAT = 1] = "FORMAT", r[r.CONFIGURE = 2] = "CONFIGURE", r))(ee || {});
const Kn = U("wizard", () => {
  const r = {
    id: "Placeholder",
    layerType: x.UNKNOWN,
    url: ""
  }, e = h(), t = h(""), i = h(""), s = h(!0), o = h(null), n = h({
    config: r,
    configOptions: []
  }), l = h(ee.UPLOAD);
  function a(c) {
    switch (l.value) {
      case ee.UPLOAD:
        c === ee.UPLOAD ? t.value = "" : c === ee.FORMAT && (l.value = ee.FORMAT);
        break;
      case ee.FORMAT:
        c === ee.UPLOAD ? (o.value && (t.value = "", o.value = null), i.value = "", l.value = ee.UPLOAD) : c === ee.CONFIGURE && (l.value = ee.CONFIGURE);
        break;
      case ee.CONFIGURE:
        c === ee.UPLOAD ? (t.value = "", i.value = "", o.value = null, s.value = !0, n.value = {
          config: r,
          configOptions: []
        }, l.value = ee.UPLOAD) : c === ee.FORMAT && (n.value = {
          config: r,
          configOptions: []
        }, s.value = !0, l.value = ee.FORMAT);
        break;
    }
  }
  return {
    layerSource: e,
    url: t,
    typeSelection: i,
    nested: s,
    fileData: o,
    layerInfo: n,
    currStep: l,
    goToStep: a
  };
});
class Qn {
  fixture;
  panel;
  event;
  geo;
  notify;
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
    this.event = new tr(this);
    const s = Xn(e, this);
    this.$vApp = s.app, this.$element = s.element, this.$i18n = s.i18n, this.$rootEl = s.app.$root?.$el, this.fixture = new Ha(this), this.panel = new Ya(this), this.geo = new qa(this), this.ui = {
      maptip: this.geo.map.maptip,
      exposeOids: !1,
      exposeMeasurements: !0,
      getZoomIcon: () => "",
      formatNumber: () => "",
      scrollToInstance: !1,
      suppressNumberLocalization: !1,
      escapeHtml: () => "",
      isPlainText: () => !0
    }, this.notify = new fr(this), this._isFullscreen = we.isEnabled && !!this.$vApp.$root && we.isFullscreen && we.element === this.$vApp.$root.$el, we.isEnabled && we.onchange(() => {
      this._isFullscreen = we.isEnabled && !!this.$vApp.$root && we.isFullscreen && we.element === this.$vApp.$root.$el;
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
    const s = ue(this.$vApp.$pinia), o = We(this.$vApp.$pinia), n = Lt(this.$vApp.$pinia);
    if (t?.configs !== void 0) {
      const a = t.configs, c = a[this.$i18n.locale.value] ?? a[Object.keys(a)[0]];
      s.newConfig(c), s.registerConfig({
        config: c,
        configLangs: Object.keys(a),
        // @ts-ignore
        allLangs: Object.keys(this.$i18n.messages.value)
      });
      for (const g in a)
        s.registerConfig({
          config: a[g],
          configLangs: [g]
        });
      s.activeBasemapConfig = c.map.basemaps.find(
        (g) => g.id === c.map.initialBasemapId
      );
      const u = setInterval(() => {
        const g = this.$vApp.$el.querySelector("#esriMap");
        if (g && (clearInterval(u), this.geo.map.createMap(c.map, g), g._tippy.hide(0), n.setMaptipInstance(g._tippy), c.layers && c.layers.length > 0)) {
          let f = 0;
          c.layers.forEach((w) => {
            const v = this.geo.layer.createLayer(w);
            this.geo.map.addLayer(v, f).catch(() => {
            }), v.mapLayer && f++;
          });
        }
      }, 100);
      if (c.panels) {
        if (c.panels.open && c.panels.open.length > 0) {
          const g = c.panels.open.map((f) => f.id);
          this.panel.isRegistered(g).then(() => {
            c.panels?.open?.forEach((f) => {
              this.panel.open({
                id: f.id,
                screen: f.screen
              }), f.pin && this.panel.pin(f.id);
            });
          });
        }
        o.reorderable = c.panels.reorderable ?? !0;
      }
      !c.system?.animate && this.$element._container && this.$element._container.children[0] && this.$element._container.children[0].classList.remove("animation-enabled"), c.system?.proxyUrl && (this.geo.proxy = c.system.proxyUrl), c.system?.exposeOid && (this.ui.exposeOids = c.system.exposeOid), c.system?.exposeMeasurements != null && (this.ui.exposeMeasurements = c.system.exposeMeasurements), c.system?.scrollToInstance && (this.ui.scrollToInstance = c.system?.scrollToInstance), c.system?.suppressNumberLocalization && (this.ui.suppressNumberLocalization = c.system?.suppressNumberLocalization);
      const p = {
        magnify: '<svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" /></svg>',
        globe: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="16" height="16" viewBox="0 0 16 16" xml:space="preserve"><g transform="matrix(0.67 0 0 0.67 8 8)"><path style=" stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: #979797; fill-rule: nonzero; opacity: 1;" transform=" translate(-12, -12)" d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 z M 11 19.93 C 7.05 19.44 4 16.08 4 12 C 4 11.38 4.08 10.79 4.21 10.21 L 9 15 L 9 16 C 9 17.1 9.9 18 11 18 L 11 19.93 z M 17.9 17.39 C 17.639999999999997 16.580000000000002 16.9 16 15.999999999999998 16 L 14.999999999999998 16 L 14.999999999999998 13 C 14.999999999999998 12.45 14.549999999999999 12 13.999999999999998 12 L 8 12 L 8 10 L 10 10 C 10.55 10 11 9.55 11 9 L 11 7 L 13 7 C 14.1 7 15 6.1 15 5 L 15 4.59 C 17.93 5.779999999999999 20 8.649999999999999 20 12 C 20 14.08 19.2 15.97 17.9 17.39 z" stroke-linecap="round" /></g></svg>'
      }, d = c.system?.zoomIcon || "globe", b = p[d] || d;
      this.ui.getZoomIcon = () => b, this.ui.formatNumber = (g) => this.ui.suppressNumberLocalization ? g.toString() : this.$i18n.n(g, "number"), this.ui.escapeHtml = (g) => {
        const f = {
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        };
        return g.replace(/[<>"']/g, (w) => f[w]);
      }, this.ui.isPlainText = (g) => typeof g == "string" ? !this.containsValidHtml(g) && !this.representsObject(g) : !1;
    }
    i || (i = {});
    const l = Xe(this.$vApp.$pinia);
    i?.startRequired ? (this.startRequired = !0, l.started = !1) : (this.startRequired = !1, l.started = !0, this.event.emit(E.MAP_START)), e && (i.loadDefaultFixtures !== !1 || t?.startingFixtures !== void 0) ? this.fixture.addDefaultFixtures(t?.startingFixtures) : e || this.fixture.restore(), i.loadDefaultEvents !== !1 && !this._eventsOn && (this.event.addDefaultEvents(), this._eventsOn = !0);
  }
  /**
   * Reloads Vue R4MP instance with a new config
   *
   * @param {RampConfigs} configs language-keyed R4MP config
   * @param {RampOptions} options startup options for this R4MP instance
   */
  reload(e, t) {
    const i = Xe(this.$vApp.$pinia), s = Ie(this.$vApp.$pinia), o = ue(this.$vApp.$pinia), n = ge(this.$vApp.$pinia), l = Se(this.$vApp.$pinia), a = qt(this.$vApp.$pinia), c = !!e;
    c ? Object.keys(n.items).forEach((d) => {
      this.fixture.exists(d) && this.fixture.remove(d);
    }) : this.fixture.flush(), Object.keys(a.grids).forEach((p) => {
      a.removeGrid(p);
    }), i.started = !1, this.geo.map.destroyMap(), l.$reset(), t?.loadDefaultEvents === !1 && (this.event.removeDefaultEvents(), this._eventsOn = !1), e === void 0 && (e = JSON.parse(
      JSON.stringify({
        startingFixtures: o.startingFixtures,
        configs: o.registeredConfigs
      })
    )), s.clearAll(), this.geo.map.maptip.clear(), this.initialize(c, e, t);
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
    const e = ue(this.$vApp.$pinia);
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
          return Tt(this.$vApp.$pinia);
        case "areas-of-interest":
          return Ln(this.$vApp.$pinia);
        case "details":
          return qi(this.$vApp.$pinia);
        case "export":
          return $n(this.$vApp.$pinia);
        case "extentguard":
          return Rn(this.$vApp.$pinia);
        case "geosearch":
          return zn(this.$vApp.$pinia);
        case "grid":
          return qt(this.$vApp.$pinia);
        case "help":
          return Vn(this.$vApp.$pinia);
        case "legend":
          return qn(this.$vApp.$pinia);
        case "mapnav":
          return Wn(this.$vApp.$pinia);
        case "metadata":
          return Hn(this.$vApp.$pinia);
        case "northarrow":
          return Yn(this.$vApp.$pinia);
        case "overviewmap":
          return Jn(this.$vApp.$pinia);
        case "scrollguard":
          return Zn(this.$vApp.$pinia);
        case "wizard":
          return Kn(this.$vApp.$pinia);
        // core stores
        case "config":
          return ue(this.$vApp.$pinia);
        case "fixture":
          return ge(this.$vApp.$pinia);
        case "instance":
          return Xe(this.$vApp.$pinia);
        case "layer":
          return Se(this.$vApp.$pinia);
        case "map-caption":
          return De(this.$vApp.$pinia);
        case "maptip":
          return Lt(this.$vApp.$pinia);
        case "notification":
          return Ie(this.$vApp.$pinia);
        case "panel":
          return We(this.$vApp.$pinia);
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
    const t = ue(this.$vApp.$pinia), i = Ie(this.$vApp.$pinia), s = t.registeredLangs;
    Object.keys(t.registeredConfigs).length === 1 && i.clearAll();
    const o = this.$i18n.locale.value;
    this.$i18n.locale.value = e;
    const n = this.getConfig();
    s[o] !== s[e] && (this.event.emit(E.CONFIG_CHANGE, n), this.reload()), this.event.emit(E.LANG_CHANGE, {
      oldLang: o,
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
    we.isEnabled && we.toggle(this.$element._container || void 0);
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
    return Xe(this.$vApp.$pinia).started;
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
    const s = document.createTextNode(e);
    i.appendChild(s), t.insertBefore(i, null);
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
    const e = Xe(this.$vApp.$pinia);
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
function Xn(r, e) {
  const t = as();
  t.use(({ store: n }) => {
    const l = pi(n.$state);
    n.$reset = () => n.$patch(pi(l));
  });
  const i = rr(), s = Ci(wo).use(i).use(Ds, {
    directive: "tippy",
    // => v-tippy
    component: "tippy"
    // => <tippy/>
  }).use(t);
  s.directive("focus-container", $o), s.directive("focus-list", So), s.directive("focus-item", Io), s.directive("truncate", ko), s.component("panel-screen", zo), s.component("pin", Wo), s.component("close", Jo), s.component("back", Qo), s.component("expand", rn), s.component("panel-options-menu", mn), s.component("dropdown-menu", Xt), s.component("minimize", an), s.component("right", un), s.component("left", hn), s.component("fullscreen-nav-button", vn), s.component("geolocator-nav-button", bn), s.component("home-nav-button", An), s.component("mapnav-button", xn), s.component("appbar-button", Tn), s.component("transition", $i), s.component("transition-group", Ri), s.config.globalProperties.$iApi = e, s.config.globalProperties.$pinia = t, s.provide("iApi", e);
  const o = s.mount(r);
  return { element: s, app: o, i18n: i.global };
}
class ea {
  esriBasemap;
  config;
  constructor(e) {
    this.config = e, this.esriBasemap = new ys({
      // TODO split by type if we have to populate referenceLayers
      // TODO we can technically support most layer types. Might want to expand a bit.
      //      Feature would be easy.
      //      File based trickier but useful. Would throw asynch wrench into this.
      //      ESRI Image Server would make sense.
      baseLayers: e.layers.map((t) => {
        if (t.layerType === x.TILE)
          return new Ni({
            url: t.url,
            opacity: t.opacity
          });
        if (t.layerType === x.MAPIMAGE)
          return new Mi({
            url: t.url,
            opacity: t.opacity
          });
        if (t.layerType === x.OSM)
          return new Pi({
            opacity: t.opacity
          });
        throw new Error(`Unsupported layer type provided to basemap config: ${t.layerType}`);
      }),
      title: e.name || "",
      id: e.id
    });
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
class ta extends J {
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
  constructor(e) {
    super(e), this.esriMap = void 0, this._basemapStore = [], this._viewPromise = new Y(), this.handlers = [], this.pointZoomScale = 5e4;
  }
  noMapErr() {
    console.error("Attempted to manipulate the map before calling createMap()");
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
   */
  createMap(e, t) {
    this._basemapStore = e.basemaps.map((s) => {
      const o = new ea(s);
      return o.esriBasemap.baseLayers.forEach((n) => {
        n.watch("loadStatus", () => {
          n.loadStatus === "loaded" ? this.trackFirstBasemap = !1 : n.loadStatus === "failed" && (this.$iApi.notify.show(
            fe.ERROR,
            this.$iApi.$i18n.t("layer.error", {
              id: o.name
            })
          ), this.trackFirstBasemap && this.recoverBasemap(o.tileSchemaId));
        });
      }), o;
    }), e.labelsDefault && (this.labelsDefault.visible = e.labelsDefault.visible);
    const i = {};
    this.esriMap = ie(new Ts(i)), this.pointZoomScale = e.pointZoomScale && e.pointZoomScale > 0 ? e.pointZoomScale : 5e4, this._targetDiv = t, this.createMapView(e.initialBasemapId);
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
   * Reloads the map with the given map config and target div
   *
   * @param {RampMapConfig} config the config for the map
   * @param {string | HTMLDivElement | undefined} targetDiv the div to be used for the map view
   */
  reloadMap(e, t) {
    if (!this.esriMap || !this.esriView) {
      this.noMapErr();
      return;
    }
    this.destroyMap(), this.createMap(e, t);
  }
  /**
   * Will generate a ESRI map view and add it to the page
   * Can optionally provide the basemap or basemap id to be used when creating the map view
   *
   * This method should be overidden by child map classes
   *
   * @param {string | Basemap | undefined} basemap the id of the basemap that should be used when creating the map view
   * @protected
   */
  createMapView(e) {
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
    this._viewPromise = new Y(), this.created = !1, this.handlers.forEach((e) => e.handler.remove()), this.handlers = [], this.esriView.map = null, this.esriView.container = null, this.esriView.spatialReference = null, this.esriView.extent = null, this.esriView.navigation = null, this.esriView.destroy(), delete this.esriView;
  }
  /**
   * Searches the local basemap list for a basemap with the given id
   * Throws error if basemap could not be found
   *
   * @param {string} id basemap id
   * @returns {Basemap} the found basemap
   * @protected
   */
  findBasemap(e) {
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
   * @protected
   */
  applyBasemap(e) {
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    const t = typeof e == "string" ? this.findBasemap(e) : e;
    this.esriMap.basemap = xe(t.esriBasemap);
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
   * @returns {boolean} indicates if the schema has changed
   * @abstract
   */
  setBasemap(e) {
    return this.abstractError(), !1;
  }
  /**
   * Will attempt to change to another basemap if the very first basemap failed.
   * If nothing is defined, will do nothing but manage our watching state.
   *
   * This method is overidden as needed
   *
   * @param {string} basemapSchemaId the basemap schema id (where the fallback is defined)
   */
  recoverBasemap(e) {
  }
  /**
   * Get the id of the currently used basemap
   * Returns undefined if there is no map
   * @returns {string | undefined} current basemap id
   */
  getCurrentBasemapId() {
    if (this.esriMap)
      return this.esriMap.basemap.id;
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
  async zoomMapTo(e, t, i = !0, s = 200, o = "ease") {
    if (this.esriView) {
      if (e.invalid())
        throw new Error("attempt to zoom to invalid geometry");
      const n = await this.geomToMapSR(e), l = {
        target: this.$iApi.geo.geom.geomRampToEsri(n)
      };
      n.type === T.POINT && (l.scale = t || this.pointZoomScale);
      const a = { animate: i, duration: s, easing: o };
      return this.viewPromise.then(() => this.esriView.goTo(l, a));
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
    return this._rampSR ? this._rampSR.clone() : (this.noMapErr(), I.latLongSR());
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
class ia extends J {
  maptipStore;
  /**
   * @constructor
   * @param {InstanceAPI} iApi the RAMP instance
   */
  constructor(e) {
    super(e), this.maptipStore = Lt(this.$vApp.$pinia);
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
      this.clear();
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
    const s = await i.getIcon(t.oid), o = await i.getGraphic(t.oid, {
      getAttribs: !0
    });
    this.setPoint(this.$iApi.geo.map.screenPointToMapPoint(e)), this.$iApi.event.emit(E.MAP_GRAPHICHIT, {
      layer: i,
      graphicHit: t,
      attributes: o.attributes,
      icon: s,
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
      `<div class="flex items-center space-x-5"><span>${e.icon}</span><span class="line-clamp-3">${e.attributes[e.layer.config.tooltipField || e.layer.nameField]}</span></div>`
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
class sa extends J {
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
    const t = De(this.$vApp.$pinia);
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
    }, s = {
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
    if (e ? (e.logo ? e.logo.disabled ? s.logo.disabled = !0 : (s.logo.altText = e.logo.altText || i.altText, s.logo.link = e.logo.link || i.link, s.logo.value = e.logo.value || i.value) : (s.logo.altText = i.altText, s.logo.link = i.link, s.logo.value = i.value), e.text ? e.text.disabled ? s.text.disabled = !0 : s.text.value = e.text.value || t.value : s.text.value = t.value, De(this.$vApp.$pinia).setAttribution(s)) : (s.logo.altText = i.altText, s.logo.link = i.link, s.logo.value = i.value, s.text.value = t.value), !e || e.text?.disabled || !e.text) {
      if (!this.$iApi.geo.map.esriMap) {
        console.warn("Attempted to fetch map attribution with undefined map");
        return;
      }
      let o = "";
      const n = 5e3, l = 20, a = this.$iApi.geo.map.esriMap.basemap.baseLayers.map((c) => new Promise((u) => {
        let p = 0;
        const d = n / l, b = setInterval(function() {
          c.loaded && !c.loadError ? (clearInterval(b), u(c)) : p > d && (clearInterval(b), u(null)), p++;
        }, l);
      })).toArray();
      Promise.all(a).then((c) => {
        o = c.filter((p) => p?.copyright).map((p) => p.copyright).join(" | "), s.text.value = o || s.text.value || t.value, De(this.$vApp.$pinia).setAttribution(s);
      });
    }
  }
  /**
   * Calculates a scale bar for the current resolution
   * Updates map-caption store to notify map-caption component observer
   *
   * @function updateScale
   */
  updateScale() {
    const e = De(this.$vApp.$pinia), t = e.scale;
    if (t?.disabled)
      return;
    const i = t?.isImperialScale || !1, s = this.scaleHelper().find((o) => o.isImperialScale === i) ?? {
      isImperialScale: !1,
      units: "error",
      pixels: 1,
      distance: 1
    };
    e.scale = {
      width: `${s.pixels}px`,
      label: `${this.$iApi.$i18n.n(s.distance, "number")}${s.units}`,
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
    const e = window.innerWidth > 600 ? 70 : 35, t = this.$iApi.geo.map.getResolution(), i = [], s = t * e, o = 1609.34, n = 3.28084, l = s > 1e3 ? ["km", "mi"] : ["m", "ft"];
    for (let a = 0; a < 2; a++) {
      const c = a === 1;
      if (i.push({
        isImperialScale: c,
        units: l[a],
        pixels: 0,
        distance: 0
      }), s > 1e3) {
        const u = t * e / (c ? o : 1e3), p = Math.round(u).toString().length, d = Math.pow(10, p - 1);
        i[a].distance = Math.ceil(u / d) * d, i[a].pixels = i[a].distance * (c ? o : 1e3) / t;
      } else
        i[a].distance = Math.ceil(c ? s * n : s), i[a].pixels = s / t;
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
    const t = await this.$iApi.geo.proj.projectGeometry(4326, e), i = this.wrapValue(t.y, -90, 90), s = this.wrapValue(t.x, -180, 180), o = "°", n = Math.floor(Math.abs(i)) * (i < 0 ? -1 : 1), l = Math.floor(Math.abs((i - n) * 60)), a = Math.floor((Math.abs(i) - Math.abs(n) - l / 60) * 3600), c = Math.floor(Math.abs(s)) * (s < 0 ? -1 : 1), u = Math.floor(Math.abs((s - c) * 60)), p = Math.floor((Math.abs(s) - Math.abs(c) - u / 60) * 3600);
    return `${this.$iApi.$i18n.n(Math.abs(n), "number")}${o} ${this.$iApi.$i18n.n(l, "number", {
      minimumIntegerDigits: 2
    })}' ${this.$iApi.$i18n.n(a, "number", {
      minimumIntegerDigits: 2
    })}" ${this.$iApi.$i18n.t("map.coordinates." + (i > 0 ? "north" : "south"))} | ${this.$iApi.$i18n.n(
      Math.abs(c),
      "number"
    )}${o} ${this.$iApi.$i18n.n(u, "number", {
      minimumIntegerDigits: 2
    })}' ${this.$iApi.$i18n.n(p, "number", {
      minimumIntegerDigits: 2
    })}" ${this.$iApi.$i18n.t("map.coordinates." + (0 > s ? "west" : "east"))}`;
  }
  /**
   * Formats a lat/long DDM string using mouse map point coordinates
   *
   * @function formatLatLongDDM
   * @param {Point | undefined} p the cursor map point
   * @returns {Promise<string>} the formatted string using given cursor map coordinates
   */
  async formatLatLongDDM(e) {
    const t = await this.$iApi.geo.proj.projectGeometry(4326, e), i = this.wrapValue(t.y, -90, 90), s = this.wrapValue(t.x, -180, 180), o = "°", n = Math.floor(Math.abs(i)) * (i < 0 ? -1 : 1), l = Math.abs((i - n) * 60), a = Math.floor(Math.abs(s)) * (s < 0 ? -1 : 1), c = Math.abs((s - a) * 60);
    return `${this.$iApi.$i18n.n(Math.abs(n), "number")}${o} ${this.$iApi.$i18n.n(l, "number", {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 5,
      maximumFractionDigits: 5
    })} ${this.$iApi.$i18n.t("map.coordinates." + (i > 0 ? "north" : "south"))} | ${this.$iApi.$i18n.n(
      Math.abs(a),
      "number"
    )}${o} ${this.$iApi.$i18n.n(c, "number", {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 5,
      maximumFractionDigits: 5
    })} ${this.$iApi.$i18n.t("map.coordinates." + (0 > s ? "west" : "east"))}`;
  }
  /**
   * Formats a lat/long DD string using mouse map point coordinates
   *
   * @function formatLatLongDD
   * @param {Point | undefined} p the cursor map point
   * @returns {Promise<string>} the formatted string using given cursor map coordinates
   */
  async formatLatLongDD(e) {
    const t = await this.$iApi.geo.proj.projectGeometry(4326, e), i = this.wrapValue(t.y, -90, 90), s = this.wrapValue(t.x, -180, 180), o = "°", n = Math.abs(i), l = Math.abs(s);
    return `${this.$iApi.$i18n.n(n, "number", {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 5,
      maximumFractionDigits: 5
    })}${o} ${this.$iApi.$i18n.t(
      "map.coordinates." + (i > 0 ? "north" : "south")
    )} | ${this.$iApi.$i18n.n(l, "number", {
      minimumIntegerDigits: 2,
      minimumFractionDigits: 5,
      maximumFractionDigits: 5
    })}${o} ${this.$iApi.$i18n.t("map.coordinates." + (0 > s ? "west" : "east"))}`;
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
    const t = await this.$iApi.geo.proj.projectGeometry(4326, e), i = this.wrapValue(t.y, -90, 90), s = this.wrapValue(t.x, -180, 180), o = Math.ceil((s + 180) / 6), n = await this.$iApi.geo.proj.projectGeometry(parseInt("326" + o), e);
    return `${this.$iApi.$i18n.n(o, "number", {
      minimumIntegerDigits: 2
    })} ${this.$iApi.$i18n.t("map.coordinates." + (i > 0 ? "north" : "south"))} ${this.$iApi.$i18n.n(
      Math.floor(n.x),
      "number"
    )} m${this.$iApi.$i18n.t("map.coordinates.east")} | ${this.$iApi.$i18n.n(
      Math.abs(Math.floor(n.y)),
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
class ra extends ta {
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
    // DEV NOTE these values get updated in createMap(). Using 0 here to avoid having defaults in two spots.
    draw: 0,
    load: 0,
    fail: 0
  };
  /**
   * @constructor
   * @param {InstanceAPI} iApi the RAMP instance
   */
  constructor(e) {
    super(e), this.maptip = new ia(e), this.caption = new sa(e), this.mapMouseThrottle = 0;
  }
  /**
   * Will generate the actual Map control objects and construct it on the page
   * @param {RampMapConfig} config the config for the map
   * @param {string | HTMLDivElement} targetDiv the div to be used for the map view
   */
  createMap(e, t) {
    this.setMapMouseThrottle(e.mapMouseThrottle ?? 0), this.trackFirstBasemap = !0, super.createMap(e, t), this.layerDefaultTimes.draw = e.layerTimeDefault?.expectedDrawTime ?? 1e4, this.layerDefaultTimes.load = e.layerTimeDefault?.expectedLoadTime ?? 1e4, this.layerDefaultTimes.fail = e.layerTimeDefault?.maxLoadTime || 9e4, this.viewPromise.then(() => {
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
   */
  createMapView(e) {
    const i = ue(this.$vApp.$pinia).config.map;
    if (!i)
      throw new Error("Attempted to create map view without a map config");
    const s = (typeof e == "string" ? this.findBasemap(e) : e) || this.findBasemap(i.initialBasemapId), o = i.tileSchemas.find(
      (a) => a.id === s.tileSchemaId
    );
    if (!o)
      throw new Error(`Could not find tile schema for the given basemap id: ${s.id}`);
    const n = i.extentSets.find(
      (a) => a.id === o.extentSetId
    );
    if (!n)
      throw new Error(`Could not find extent set with the given id: ${o.extentSetId}`);
    this._rampExtentSet = gt.fromConfig(n), this._rampSR = this._rampExtentSet.sr.clone();
    const l = i.lodSets.find(
      (a) => a.id === o.lodSetId
    );
    if (!l)
      throw new Error(`Could not find lod set with the given id: ${o.lodSetId}`);
    this.esriView = ie(
      new Ms({
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
        background: { color: s.backgroundColour }
      })
    ), this.esriView.ui.components = [], this.handlers.push({
      type: "extent",
      handler: this.esriView.watch("extent", (a) => {
        if (a) {
          const c = this.$iApi.geo.geom.geomEsriToRamp(a, "map_extent_event");
          this.$iApi.event.emit(E.MAP_EXTENTCHANGE, c), this.$iApi.event.emit(E.FILTER_CHANGE, {
            extent: c,
            filterKey: ae.EXTENT
          });
        }
      })
    }), this.handlers.push({
      type: "scale",
      handler: this.esriView.watch("scale", (a) => {
        this.$iApi.event.emit(E.MAP_SCALECHANGE, a);
      })
    }), this.handlers.push({
      type: "resize",
      handler: this.esriView.on("resize", (a) => {
        this.$iApi.event.emit(E.MAP_RESIZED, {
          height: a.height,
          width: a.width
        });
      })
    }), this.handlers.push({
      type: "click",
      handler: this.esriView.on("click", (a) => {
        this.$iApi.event.emit(
          E.MAP_CLICK,
          this.$iApi.geo.geom.esriMapClickToRamp(a, "map_click_point")
        );
      })
    }), this.handlers.push({
      type: "double-click",
      handler: this.esriView.on("double-click", (a) => {
        this.$iApi.event.emit(
          E.MAP_DOUBLECLICK,
          this.$iApi.geo.geom.esriMapClickToRamp(a, "map_doubleclick_point")
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
        St(100, !0, (a) => {
          this.$iApi.event.emit(
            E.MAP_MOUSEMOVE_START,
            this.$iApi.geo.geom.esriMapMouseToRamp(a)
          );
        })
      )
    }), this.handlers.push({
      type: "pointer-move-end",
      // emulate mouse move end event using debounce
      handler: this.esriView.on(
        "pointer-move",
        St(100, (a) => {
          this.$iApi.event.emit(
            E.MAP_MOUSEMOVE_END,
            this.$iApi.geo.geom.esriMapMouseToRamp(a)
          );
        })
      )
    }), this.handlers.push({
      type: "pointer-leave",
      handler: this.esriView.on("pointer-leave", (a) => {
        setTimeout(
          () => {
            this.$iApi.event.emit(E.MAP_MOUSELEAVE, a.native);
          },
          Math.max(this.mapMouseThrottle, 100) + 1
        );
      })
    }), this.handlers.push({
      type: "pointer-down",
      handler: this.esriView.on("pointer-down", (a) => {
        this.$iApi.event.emit(E.MAP_MOUSEDOWN, a.native);
      })
    }), this.handlers.push({
      type: "key-down",
      handler: this.esriView.on("key-down", (a) => {
        this.$iApi.event.emit(E.MAP_KEYDOWN, a.native), a.stopPropagation();
      })
    }), this.handlers.push({
      type: "key-up",
      handler: this.esriView.on("key-up", (a) => {
        this.$iApi.event.emit(E.MAP_KEYUP, a.native), a.stopPropagation();
      })
    }), this.handlers.push({
      type: "focus",
      handler: this.esriView.on("focus", (a) => {
        this.$iApi.event.emit(E.MAP_FOCUS, a.native);
      })
    }), this.handlers.push({
      type: "blur",
      handler: this.esriView.on("blur", (a) => {
        this.$iApi.event.emit(E.MAP_BLUR, a.native);
      })
    }), this.esriView.container.addEventListener("touchmove", (a) => {
      a.preventDefault();
    }), this.esriView.watch("fatalError", () => {
      const a = new IntersectionObserver((c) => {
        c.forEach((u) => {
          u.isIntersecting && (this.esriView?.tryFatalErrorRecovery(), a.disconnect());
        });
      });
      a.observe(this.esriView.container);
    }), this.esriView.when(() => {
      if (this._viewPromise.resolveMe(), this.created = !0, this.applyBasemap(s), o.recoveryBasemap?.basemapId) {
        const a = o.recoveryBasemap.timeout ?? 8e3;
        a > 0 && setTimeout(() => {
          this.trackFirstBasemap && this.recoverBasemap(o.id);
        }, a);
      }
    });
  }
  /**
   * Destroys the ESRI map view
   *
   * @protected
   */
  destroyMapView() {
    this.esriView?.container.removeEventListener("touchmove", (e) => {
      e.preventDefault();
    }), super.destroyMapView();
  }
  /**
   * Sets the basemap to the basemap with the given id or the basemap object
   * Throws error if basemap could not be found
   *
   * @param {string | basemap} basemap the basemap id or object
   * @protected
   */
  applyBasemap(e) {
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    const t = typeof e == "string" ? this.findBasemap(e) : e;
    this.esriMap.basemap = xe(t.esriBasemap);
    const i = ue(this.$vApp.$pinia);
    i.activeBasemapConfig = t.config;
  }
  /**
   * Set the map's basemap to the basemap with the given id.
   * If the new basemap's tile schema differs from the current one, the map view will be refreshed
   *
   * The returned boolean indicates if the schema has changed.
   *
   * @param {string} basemapId the basemap id
   * @returns {boolean} indicates if the schema has changed
   */
  setBasemap(e) {
    if (!this.esriView || !this.esriMap)
      return this.noMapErr(), !1;
    const t = ue(this.$vApp.$pinia), i = this.findBasemap(e), o = t.activeBasemapConfig.tileSchemaId !== i.tileSchemaId;
    if (o) {
      const n = this.getExtent().center(), l = this.getScale();
      this._viewPromise = new Y(), this.created = !1, this.$iApi.event.emit(E.MAP_REFRESH_START), this.destroyMapView(), this.createMapView(i), this.viewPromise.then(() => {
        this.$iApi.event.emit(E.MAP_REFRESH_END), this.$iApi.event.emit(E.MAP_BASEMAPCHANGE, {
          basemapId: e,
          schemaChanged: o
        });
        const a = this.findClosestScale(l);
        this.$iApi.geo.proj.projectGeometry(this._rampSR, n).then((c) => this.zoomMapTo(c, a, !1));
      });
    } else
      this.applyBasemap(i), this.esriView.background = new Ps({
        color: new ke(i.backgroundColour).toESRI()
      }), this.$iApi.event.emit(E.MAP_BASEMAPCHANGE, {
        basemapId: e,
        schemaChanged: o
      });
    return o;
  }
  /**
   * Will attempt to change to another basemap if the very first basemap failed.
   * If nothing is defined, will do nothing but manage our watching state.
   *
   * @param {string} basemapSchemaId the basemap schema id (where the fallback is defined)
   */
  recoverBasemap(e) {
    this.esriMap || this.noMapErr(), this.trackFirstBasemap = !1;
    const i = ue(this.$vApp.$pinia).config.map;
    if (i) {
      const s = i.tileSchemas.find((o) => o.id === e);
      if (s?.recoveryBasemap?.basemapId) {
        const o = this.findBasemap(s.recoveryBasemap.basemapId);
        this.applyBasemap(o);
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
    return new Promise((i, s) => {
      if (this.esriMap || (this.noMapErr(), s()), e.initiationState !== N.INITIATING && e.initiationState !== N.INITIATED && e.layerState !== z.ERROR && e.initiate(), e.mapLayer && t === void 0) {
        const c = this.$iApi.geo.layer.layerOrderIds();
        if (e.isCosmetic)
          t = c.length;
        else {
          const u = this.$iApi.geo.layer.allLayers();
          let p = !0;
          for (let d = c.length - 1; d >= 0 && p; d--) {
            const b = u.find((g) => g.id === c[d]);
            b && !b.isCosmetic && (t = d + 1, p = !1);
          }
          p && (t = 0);
        }
      }
      Se(this.$vApp.$pinia).addLayer(e, t), this.$iApi.event.emit(E.LAYER_REGISTERED, e);
      const n = Date.now();
      let l = 0;
      const a = setInterval(() => {
        l += 250, l >= e.expectedTime.fail || e.layerState === z.ERROR ? (clearInterval(a), e.lastCancel < n && console.error(`Failed to add layer: ${e.id}.`), s()) : e.initiationState === N.INITIATED && (e.esriLayer || !e.mapLayer) && (clearInterval(a), e.mapLayer ? this.insertToEsriMap(e) : e.onLoad(), i());
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
      const s = this.$iApi.geo.layer.layerOrderIds(), o = this.$iApi.geo.layer.allLayers();
      for (let n = i - 1; n > -1; n--) {
        const l = s[n], a = o.find((c) => c.id === l);
        if (a && a.esriLayer) {
          const c = this.esriMap.layers.indexOf(a.esriLayer);
          if (c > -1) {
            t = c + 1;
            break;
          }
        } else a || console.error("ESRI Layer insert encountered bad state. Layer likely inserted at bottom of map.");
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
    const s = this.$iApi.geo.layer.allLayers();
    let o = this.$iApi.geo.layer.layerOrderIds();
    if (i) {
      if (e.isCosmetic)
        return;
      if (t > 0) {
        const a = o.filter((c) => {
          const u = s.find((p) => p.id === c);
          return u ? !u.isCosmetic : (console.error("Layer reorder had critical error"), !1);
        });
        t >= a.length && (console.error("non-cosmetic reorder index was too high"), t = a.length - 1), t = o.indexOf(a[t]);
      }
    } else t >= o.length && (console.error("reorder index was too high"), t = o.length - 1);
    const n = o.indexOf(e.id);
    if (n === t)
      return;
    if (Se(this.$vApp.$pinia).reorderLayer(e, t), e.esriLayer && this.esriMap.layers.indexOf(e.esriLayer) > -1) {
      let a = 0;
      if (t > 0) {
        o = this.$iApi.geo.layer.layerOrderIds();
        for (let c = t - 1; c > -1; c--) {
          const u = o[c], p = s.find((d) => d.id === u);
          if (p && p.esriLayer) {
            const d = this.esriMap.layers.indexOf(p.esriLayer);
            if (d > -1) {
              const b = t < n ? 1 : 0;
              a = d + b;
              break;
            }
          } else p || console.error("Layer reorder had critical error");
        }
      }
      this.esriMap.reorder(e.esriLayer, a);
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
    i.visibility = !1, i.isRemoved = !0, this.$iApi.event.emit(E.LAYER_REMOVE, e), i.parentLayer?.sublayers.every((s) => s.isRemoved) && this.removeLayer(i.parentLayer);
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
    if (e instanceof ti ? t = e : t = this.$iApi.geo.layer.getLayer(e), !t)
      throw new Error("Layer could not be found for removal.");
    if (t.isSublayer) {
      this.removeSublayer(t);
      return;
    }
    t.supportsSublayers && t.sublayers.forEach((s) => {
      s.isRemoved || this.removeSublayer(s);
    });
    const i = Se(this.$vApp.$pinia);
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
    return ft(this.mapMouseThrottle, (e) => {
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
    const s = t.zoomIn ? i : [...i].reverse(), o = s.find(
      (n) => t.zoomIn ? n.scale < e.minScale : n.scale > e.maxScale
    ) || s[s.length - 1];
    return this.zoomToLevel(o.level);
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
    const i = t.map((o) => Math.abs(o.scale - e)), s = i.indexOf(Math.min(...i));
    return t[s].scale;
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
    return this.esriView ? H.fromESRI(
      this.esriView.toMap({
        x: e.screenX,
        y: e.screenY
      }),
      "mappoint"
    ) : (this.noMapErr(), new H("i_am_error", [0, 0], void 0, !0));
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
    const t = this.$iApi.geo.layer.allLayersOnMap(!1).filter((c) => c.canIdentify());
    let i;
    if (e instanceof H) {
      const c = this.mapPointToScreenPoint(e);
      i = {
        mapPoint: e,
        screenX: c.screenX,
        screenY: c.screenY,
        button: 0,
        input: "mouse",
        clickTime: Date.now()
      };
    } else
      i = e;
    if (t === void 0)
      return { click: i, results: [] };
    let s = Promise.resolve([]);
    t.some((c) => c.identifyMode === K.HYBRID || c.identifyMode === K.SYMBOLIC) && (s = this.esriView.hitTest({
      x: i.screenX,
      y: i.screenY
    }).then((c) => c.results.map((u) => ({
      layerId: u.layer.id,
      layerIdx: 0,
      // not required for this process, default rather than expensive lookup
      oid: u.graphic.getObjectId()
    }))));
    const o = {
      geometry: i.mapPoint,
      hitTest: s
    }, n = t.filter((c) => c.supportsIdentify).map((c) => (o.tolerance = i.input == "touch" ? c.touchTolerance : c.mouseTolerance, c.runIdentify(o))).flat(), l = Date.now();
    n.forEach((c) => {
      c.requestTime = l;
    });
    const a = {
      results: n,
      click: i
    };
    return this.$iApi.event.emit(E.MAP_IDENTIFY, a), a;
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
    const t = this.$iApi.geo.layer.allLayersOnMap(!1).filter((a) => a.supportsFeatures || a.layerType === x.GRAPHIC);
    if (t.length === 0)
      return;
    const i = await this.esriView.hitTest({
      x: e.screenX,
      y: e.screenY
    });
    if (i.results.length === 0)
      return;
    const s = i.results;
    let o, n;
    const l = /* @__PURE__ */ new Set();
    if (s.some((a) => {
      if (l.has(a.layer.id))
        return !1;
      const c = t.find((u) => u.id === a.layer.id);
      return c ? (!c.isCosmetic && c.layerType !== x.GRAPHIC && (o = c, n = a.graphic), !0) : (l.add(a.layer.id), !1);
    }), o && n)
      return {
        oid: n.getObjectId(),
        layerId: o.id,
        layerIdx: o.layerIdx
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
    ["Shift", "Control", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp"].includes(e.key) && !this._activeKeys.includes(e.key) ? (this._activeKeys.push(e.key), this._activeKeys.some((s) => t.includes(s)) || this.keyPan()) : t.includes(e.key) && !this._activeKeys.includes(e.key) ? (this._activeKeys.push(e.key), this.keyZoom(e)) : e.key === "Enter" ? this.runIdentify(this.getExtent().center()) : e.key === "Tab" && this._activeKeys.push(e.key);
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
    }), s = Math.abs(i.x - e.x), o = Math.abs(i.y - e.y);
    let n = 0, l = 0, a = 1;
    for (let u = 0; u < this._activeKeys.length; ++u)
      switch (this._activeKeys[u]) {
        case "ArrowLeft":
          n -= s;
          break;
        case "ArrowRight":
          n += s;
          break;
        case "ArrowUp":
          l += o;
          break;
        case "ArrowDown":
          l -= o;
          break;
        case "Shift":
          a = 2;
          break;
        case "Control":
          a = 0.25;
          break;
      }
    const c = this.getScale();
    this._panInterval = setInterval(() => {
      e.x += a * n, e.y += a * l, this.zoomMapTo(e, c, !1);
    }, 25);
  }
}
const oa = { geometryType: "point", renderer: { type: "simple", symbol: { type: "esriSMS", style: "esriSMSCircle", color: [67, 100, 255, 200], size: 7, outline: { color: [0, 0, 0, 255], width: 1 } } } }, na = { geometryType: "polyline", renderer: { type: "simple", symbol: { type: "esriSLS", style: "esriSLSSolid", color: [90, 90, 90, 200], width: 2 } } }, aa = { geometryType: "polygon", renderer: { type: "simple", symbol: { type: "esriSFS", style: "esriSFSSolid", color: [76, 76, 125, 200], outline: { type: "esriSLS", style: "esriSLSSolid", color: [110, 110, 110, 255], width: 1 } } } }, la = { geometryType: "polygon", renderer: { type: "simple", symbol: { type: "esriSFS", style: "esriSFSSolid", color: [255, 0, 0, 64], outline: { type: "esriSLS", style: "esriSLSSolid", color: [240, 128, 128, 255], width: 1 } } } }, ca = {
  circlePoint: oa,
  solidLine: na,
  outlinedPoly: aa,
  boundingBoxPoly: la
}, ua = {
  Point: "circlePoint",
  MultiPoint: "circlePoint",
  LineString: "solidLine",
  MultiLineString: "solidLine",
  Polygon: "outlinedPoly",
  MultiPolygon: "outlinedPoly"
};
function pa(r) {
  if (r.type !== "FeatureCollection")
    throw new Error("GeoJSON is not in FeatureCollection format");
  let e = !0, t = !0;
  for (let i = 0; i < r.features.length; i++) {
    const s = r.features[i];
    Object.assign(s.properties, { ID_FILE: "", OBJECTID_FILE: "" }), "id" in s && typeof s.id < "u" && (s.properties.ID_FILE = s.id, e = !1), "OBJECTID" in s.properties && (s.properties.OBJECTID_FILE = s.properties.OBJECTID, delete s.properties.OBJECTID, t = !1), s.id = i + 1;
  }
  if (e)
    for (let i = 0; i < r.features.length; i++)
      delete r.features[i].properties.ID_FILE;
  if (t)
    for (let i = 0; i < r.features.length; i++)
      delete r.features[i].properties.OBJECTID_FILE;
}
function da(r, e) {
  const t = (i) => i.indexOf(" ") > -1;
  e.fields?.forEach((i) => {
    if (i.name && t(i.name)) {
      const s = i.name;
      let o, n = "_", l;
      do
        o = s.replace(/ /g, n), l = e.fields?.find((a) => a.name === o), l && (n += "_");
      while (l);
      i.alias = s, i.name = o;
      for (let a = 0; a < r.features.length; a++) {
        const c = r.features[a];
        c.properties[o] = c.properties[s], delete c.properties[s];
      }
    }
  });
}
function ha(r, e) {
  const t = r.features[e].geometry.geometries;
  if (t.length === 1)
    r.features[e].geometry = {
      type: t[0].type,
      coordinates: t[0].coordinates
    };
  else {
    const i = t.map((s) => s.coordinates);
    r.features[e].geometry = {
      type: `Multi${t[0].type}`,
      coordinates: i
    };
  }
}
function fa(r) {
  return r === "MultiLineString" ? "LineString" : r === "MultiPolygon" ? "Polygon" : r;
}
class ma extends J {
  /**
   * Fetch file data from remote URL.
   * @param url the URL to get the data from
   * @param fileType the type of the file layer (csv, shape, or geoJson)
   */
  async fetchFileData(e, t) {
    const i = await Rt.get(e, {
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
    for (let n = 0; n < e.features.length; n++) {
      const l = e.features[n];
      if (l.geometry.type === "GeometryCollection") {
        const u = l.geometry.geometries;
        if (u === void 0 || u.length === 0)
          throw new Error("GeoJSON file has geometry collection with missing/incomplete geometries");
        const p = u[0].type;
        for (let d = 0; d < u.length; d++)
          if (u[d].type !== p)
            throw new Error("GeoJSON file has geometry collection containing multiple geometry types");
        ha(e, n);
      }
      const c = fa(l.geometry.type);
      if (t === "")
        t = c;
      else if (t !== c)
        throw new Error("GeoJSON file contains multiple geometry types");
    }
    const i = Object.keys(e.features[0].properties).map((n) => ({ name: n, type: "string" }));
    let s = 0;
    const o = Object.keys(e.features[0].properties);
    for (; s < e.features.length; ) {
      const n = e.features[s];
      if (n.properties && Object.keys(n.properties).filter((l) => o.includes(l)).forEach((l) => {
        const a = n.properties[l];
        if (a != null) {
          const c = i.findIndex((u) => u.name === l);
          i[c] = {
            name: l,
            type: this.inferType(a)
          }, o.splice(o.indexOf(l), 1);
        }
      }), o.length === 0)
        break;
      s++;
    }
    return i;
  }
  /**
   * Extracts fields from csv file does no guesswork on property types and calls everything a string.
   */
  extractCsvFields(e, t = ",") {
    return di.dsvFormat(t).parseRows(e)[0].map((s) => ({ name: s, type: $e.STRING }));
  }
  /**
   * Returns all the fields from csv file that can be possible lat/long fields
   * @param csvData the csv file data
   * @param delimiter the delimiter in the data
   */
  filterCsvLatLonFields(e, t = ",") {
    const i = di.dsvFormat(t).parseRows(e), s = i[0], o = {
      lat: JSON.parse(JSON.stringify(s)),
      lon: JSON.parse(JSON.stringify(s))
    };
    for (let n = 0; n < s.length; n++)
      for (let l = 1; l < i.length; l++) {
        const a = Number(i[l][n]), c = o.lat.indexOf(s[n]), u = o.lon.indexOf(s[n]);
        if ((isNaN(a) || a < -90 || a > 90) && c !== -1 && o.lat.splice(c, 1), (isNaN(a) || a < -180 || a > 180) && u !== -1 && o.lon.splice(u, 1), c === -1 && u === -1)
          break;
      }
    return o;
  }
  /**
   * Convert GeoJSON to Esri json, a format that can be read by a feature layer constructor
   *
   * @param geoJson {Object} a GeoJSON object
   * @param options {GeoJsonOptions} any options for the transformation
   * @returns {Object} feature layer constructor object
   */
  async geoJsonToEsriJson(e, t) {
    let i, s = "", o;
    const n = {
      objectIdField: "OBJECTID",
      fields: [
        {
          name: "OBJECTID",
          type: $e.OID
        }
      ]
    };
    pa(e);
    const l = e.features[0].geometry.type, a = ua[l], c = JSON.parse(
      // @ts-ignore
      JSON.stringify(ca[a])
    );
    if (t) {
      if (t.sourceProjection && (s = this.$iApi.geo.proj.normalizeProj(t.sourceProjection)), t.targetSR)
        i = t.targetSR;
      else
        throw new Error("geoJsonToEsriJson - missing opts.targetSR arguement");
      t.layerId ? o = t.layerId : o = this.$iApi.geo.shared.generateUUID(), t.colour && (c.renderer.symbol.color = new ke(t.colour).toArcServer());
    } else
      throw new Error("geoJsonToEsriJson - missing opts arguement");
    s || (s = I.parseGeoJsonCrs(e.crs)), n.renderer = Ls.fromJSON(c.renderer), n.fields = (n.fields || []).concat(
      t.fieldMetadata?.exclusiveFields ? this.extractGeoJsonFields(e).filter(
        (f) => t.fieldMetadata?.fieldInfo?.find((w) => w.name === f.name)
      ) : this.extractGeoJsonFields(e)
    ), t.fieldMetadata?.enforceOrder && t.fieldMetadata?.fieldInfo && t.fieldMetadata?.fieldInfo.length > 0 && (n.fields = this.$iApi.geo.attributes.orderFields(
      n.fields,
      t.fieldMetadata?.fieldInfo
    )), da(e, n);
    const u = this.$iApi.geo.proj.normalizeProj(i);
    if (t) {
      if (t.latField) {
        const f = n.fields.find(
          (w) => w.name === t.latField || w.alias === t.latField
        );
        f && (f.type = $e.DOUBLE);
      }
      if (t.lonField) {
        const f = n.fields.find(
          (w) => w.name === t.lonField || w.alias === t.lonField
        );
        f && (f.type = $e.DOUBLE);
      }
    }
    await this.$iApi.geo.proj.checkProjBomber([s, i]);
    const p = I.parseSR(i).toESRI();
    await this.$iApi.geo.proj.projectGeoJson(e, s, u);
    const d = js.convert(e, { sr: 8888 });
    n.geometryType = this.$iApi.geo.geom.geoJsonGeomTypeToEsriGeomType(l);
    const b = n.fields.map((f) => f.name);
    for (let f = 0; f < d.length; f++) {
      const w = d[f];
      w.geometry.spatialReference = p, w.geometry.type = n.geometryType, Object.keys(w.attributes).forEach((v) => {
        b.includes(v) ? (Array.isArray(w.attributes[v]) || typeof w.attributes[v] == "object") && w.attributes[v] != null && (w.attributes[v] = JSON.stringify(w.attributes[v])) : delete w.attributes[v];
      });
    }
    return (t.fieldMetadata?.fieldInfo && t.fieldMetadata?.fieldInfo.length > 0 ? t.fieldMetadata.fieldInfo.filter((f) => f.trim && b.includes(f.name)).map((f) => f.name) : []).forEach((f) => {
      for (let w = 0; w < d.length; w++) {
        const v = d[w].attributes;
        typeof v[f] == "string" && (v[f] = v[f].trim());
      }
    }), n.source = d, n.spatialReference = p, n.id = o, n;
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
    return t && (t.latfield && (i.latfield = t.latfield), t.lonfield && (i.lonfield = t.lonfield), t.delimiter && (i.delimiter = t.delimiter)), new Promise((s, o) => {
      qs(e, i, (n, l) => {
        n ? (console.error("csv conversion error"), console.error(n), o(n)) : (l.features.map((a) => {
          a.properties[i.lonfield] = a.geometry.coordinates[0], a.properties[i.latfield] = a.geometry.coordinates[1];
        }), s(l));
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
    return import("flatgeobuf").then(({ geojson: s }) => new Promise((o) => {
      let n = !1, l = null;
      const a = s.deserialize(new Uint8Array(e), void 0, (p) => {
        l = p.crs, n = !0;
      });
      let c = 0;
      const u = setInterval(() => {
        if (a && n) {
          clearInterval(u);
          let p;
          l && (l.code && l.code !== 4326 && l.org === "EPSG" ? p = new I(l.code) : l.wkt ? p = new I(l.wkt) : console.error("Encountered FlatGeobuf with non-EPSG org: ", l)), p && (a.crs = p.toGeoJSON()), o(a);
        } else
          c += 60, c > t && (clearInterval(u), o({}));
      }, 60);
    }));
  }
  /**
   * Attempt to infers the type of a given value
   * Will check if the value's type is one of int, double
   * Defaults to string type if not
   */
  inferType(e) {
    return typeof e == "number" ? $e.DOUBLE : $e.STRING;
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
    const t = await import("jszip"), s = await new t.default().loadAsync(e), o = Object.keys(s.files)[0];
    if (o && s.file(o))
      return await s.file(o).async("arraybuffer");
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
const ga = JSON.parse("[4326,4269,4258,31467,31468,31469,2166,2167,2168,2036,2044,2045,2065,2081,2082,2083,2085,2086,2091,2092,2093,2096,2097,2098,2105,2106,2107,2108,2109,2110,2111,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2169,2170,2171,2172,2173,2174,2175,2176,2177,2178,2179,2180,2193,2199,2200,2206,2207,2208,2209,2210,2211,2212,2319,2320,2321,2322,2323,2324,2325,2326,2327,2328,2329,2330,2331,2332,2333,2334,2335,2336,2337,2338,2339,2340,2341,2342,2343,2344,2345,2346,2347,2348,2349,2350,2351,2352,2353,2354,2355,2356,2357,2358,2359,2360,2361,2362,2363,2364,2365,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2384,2385,2386,2387,2388,2389,2390,2391,2392,2393,2394,2395,2396,2397,2398,2399,2400,2401,2402,2403,2404,2405,2406,2407,2408,2409,2410,2411,2412,2413,2414,2415,2416,2417,2418,2419,2420,2421,2422,2423,2424,2425,2426,2427,2428,2429,2430,2431,2432,2433,2434,2435,2436,2437,2438,2439,2440,2441,2442,2443,2444,2445,2446,2447,2448,2449,2450,2451,2452,2453,2454,2455,2456,2457,2458,2459,2460,2461,2462,2463,2464,2465,2466,2467,2468,2469,2470,2471,2472,2473,2474,2475,2476,2477,2478,2479,2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,2490,2491,2492,2493,2494,2495,2496,2497,2498,2499,2500,2501,2502,2503,2504,2505,2506,2507,2508,2509,2510,2511,2512,2513,2514,2515,2516,2517,2518,2519,2520,2521,2522,2523,2524,2525,2526,2527,2528,2529,2530,2531,2532,2533,2534,2535,2536,2537,2538,2539,2540,2541,2542,2543,2544,2545,2546,2547,2548,2549,2551,2552,2553,2554,2555,2556,2557,2558,2559,2560,2561,2562,2563,2564,2565,2566,2567,2568,2569,2570,2571,2572,2573,2574,2575,2576,2577,2578,2579,2580,2581,2582,2583,2584,2585,2586,2587,2588,2589,2590,2591,2592,2593,2594,2595,2596,2597,2598,2599,2600,2601,2602,2603,2604,2605,2606,2607,2608,2609,2610,2611,2612,2613,2614,2615,2616,2617,2618,2619,2620,2621,2622,2623,2624,2625,2626,2627,2628,2629,2630,2631,2632,2633,2634,2635,2636,2637,2638,2639,2640,2641,2642,2643,2644,2645,2646,2647,2648,2649,2650,2651,2652,2653,2654,2655,2656,2657,2658,2659,2660,2661,2662,2663,2664,2665,2666,2667,2668,2669,2670,2671,2672,2673,2674,2675,2676,2677,2678,2679,2680,2681,2682,2683,2684,2685,2686,2687,2688,2689,2690,2691,2692,2693,2694,2695,2696,2697,2698,2699,2700,2701,2702,2703,2704,2705,2706,2707,2708,2709,2710,2711,2712,2713,2714,2715,2716,2717,2718,2719,2720,2721,2722,2723,2724,2725,2726,2727,2728,2729,2730,2731,2732,2733,2734,2735,2738,2739,2740,2741,2742,2743,2744,2745,2746,2747,2748,2749,2750,2751,2752,2753,2754,2755,2756,2757,2758,2935,2936,2937,2938,2939,2940,2941,2953,2963,3006,3007,3008,3009,3010,3011,3012,3013,3014,3015,3016,3017,3018,3019,3020,3021,3022,3023,3024,3025,3026,3027,3028,3029,3030,3034,3035,3038,3039,3040,3041,3042,3043,3044,3045,3046,3047,3048,3049,3050,3051,3058,3059,3068,3114,3115,3116,3117,3118,3120,3126,3127,3128,3129,3130,3131,3132,3133,3134,3135,3136,3137,3138,3139,3140,3146,3147,3150,3151,3152,3300,3301,3328,3329,3330,3331,3332,3333,3334,3335,3346,3350,3351,3352,3366,3386,3387,3388,3389,3390,3396,3397,3398,3399,3407,3414,3416,3764,3788,3789,3790,3791,3793,3795,3796,3819,3821,3823,3824,3833,3834,3835,3836,3837,3838,3839,3840,3841,3842,3843,3844,3845,3846,3847,3848,3849,3850,3851,3852,3854,3873,3874,3875,3876,3877,3878,3879,3880,3881,3882,3883,3884,3885,3888,3889,3906,3907,3908,3909,3910,3911,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016,4017,4018,4019,4020,4021,4022,4023,4024,4025,4026,4027,4028,4029,4030,4031,4032,4033,4034,4035,4036,4037,4038,4040,4041,4042,4043,4044,4045,4046,4047,4052,4053,4054,4055,4074,4075,4080,4081,4120,4121,4122,4123,4124,4125,4126,4127,4128,4129,4130,4131,4132,4133,4134,4135,4136,4137,4138,4139,4140,4141,4142,4143,4144,4145,4146,4147,4148,4149,4150,4151,4152,4153,4154,4155,4156,4157,4158,4159,4160,4161,4162,4163,4164,4165,4166,4167,4168,4169,4170,4171,4172,4173,4174,4175,4176,4178,4179,4180,4181,4182,4183,4184,4185,4188,4189,4190,4191,4192,4193,4194,4195,4196,4197,4198,4199,4200,4201,4202,4203,4204,4205,4206,4207,4208,4209,4210,4211,4212,4213,4214,4215,4216,4218,4219,4220,4221,4222,4223,4224,4225,4226,4227,4228,4229,4230,4231,4232,4233,4234,4235,4236,4237,4238,4239,4240,4241,4242,4243,4244,4245,4246,4247,4248,4249,4250,4251,4252,4253,4254,4255,4256,4257,4259,4260,4261,4262,4263,4264,4265,4266,4267,4268,4270,4271,4272,4273,4274,4275,4276,4277,4278,4279,4280,4281,4282,4283,4284,4285,4286,4287,4288,4289,4291,4292,4293,4294,4295,4296,4297,4298,4299,4300,4301,4302,4303,4304,4306,4307,4308,4309,4310,4311,4312,4313,4314,4315,4316,4317,4318,4319,4322,4324,4327,4329,4339,4341,4343,4345,4347,4349,4351,4353,4355,4357,4359,4361,4363,4365,4367,4369,4371,4373,4375,4377,4379,4381,4383,4386,4388,4417,4434,4463,4466,4469,4470,4472,4475,4480,4482,4483,4490,4491,4492,4493,4494,4495,4496,4497,4498,4499,4500,4501,4502,4503,4504,4505,4506,4507,4508,4509,4510,4511,4512,4513,4514,4515,4516,4517,4518,4519,4520,4521,4522,4523,4524,4525,4526,4527,4528,4529,4530,4531,4532,4533,4534,4535,4536,4537,4538,4539,4540,4541,4542,4543,4544,4545,4546,4547,4548,4549,4550,4551,4552,4553,4554,4555,4557,4558,4568,4569,4570,4571,4572,4573,4574,4575,4576,4577,4578,4579,4580,4581,4582,4583,4584,4585,4586,4587,4588,4589,4600,4601,4602,4603,4604,4605,4606,4607,4608,4609,4610,4611,4612,4613,4614,4615,4616,4617,4618,4619,4620,4621,4622,4623,4624,4625,4626,4627,4628,4629,4630,4631,4632,4633,4634,4635,4636,4637,4638,4639,4640,4641,4642,4643,4644,4645,4646,4652,4653,4654,4655,4656,4657,4658,4659,4660,4661,4662,4663,4664,4665,4666,4667,4668,4669,4670,4671,4672,4673,4674,4675,4676,4677,4678,4679,4680,4681,4682,4683,4684,4685,4686,4687,4688,4689,4690,4691,4692,4693,4694,4695,4696,4697,4698,4699,4700,4701,4702,4703,4704,4705,4706,4707,4708,4709,4710,4711,4712,4713,4714,4715,4716,4717,4718,4719,4720,4721,4722,4723,4724,4725,4726,4727,4728,4729,4730,4731,4732,4733,4734,4735,4736,4737,4738,4739,4740,4741,4742,4743,4744,4745,4746,4747,4748,4749,4750,4751,4752,4753,4754,4755,4756,4757,4758,4759,4760,4761,4762,4763,4764,4765,4766,4767,4768,4769,4770,4771,4772,4773,4774,4775,4776,4777,4778,4779,4780,4781,4782,4783,4784,4785,4786,4787,4788,4789,4790,4791,4792,4793,4794,4795,4796,4797,4798,4799,4800,4801,4802,4803,4804,4805,4806,4807,4808,4809,4810,4811,4812,4813,4814,4815,4816,4817,4818,4819,4820,4821,4822,4823,4824,4839,4855,4856,4857,4858,4859,4860,4861,4862,4863,4864,4865,4866,4867,4868,4869,4870,4871,4872,4873,4874,4875,4876,4877,4878,4879,4880,4883,4885,4887,4889,4891,4893,4895,4898,4900,4901,4902,4903,4904,4907,4909,4921,4923,4925,4927,4929,4931,4933,4935,4937,4939,4941,4943,4945,4947,4949,4951,4953,4955,4957,4959,4961,4963,4965,4967,4969,4971,4973,4975,4977,4979,4981,4983,4985,4987,4989,4991,4993,4995,4997,4999,5012,5013,5017,5048,5105,5106,5107,5108,5109,5110,5111,5112,5113,5114,5115,5116,5117,5118,5119,5120,5121,5122,5123,5124,5125,5126,5127,5128,5129,5130,5132,5167,5168,5169,5170,5171,5172,5173,5174,5175,5176,5177,5178,5179,5180,5181,5182,5183,5184,5185,5186,5187,5188,5224,5228,5229,5233,5245,5246,5251,5252,5253,5254,5255,5256,5257,5258,5259,5263,5264,5269,5270,5271,5272,5273,5274,5275,5801,5802,5803,5804,5808,5809,5810,5811,5812,5813,5814,5815,5816,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019,20020,20021,20022,20023,20024,20025,20026,20027,20028,20029,20030,20031,20032,20064,20065,20066,20067,20068,20069,20070,20071,20072,20073,20074,20075,20076,20077,20078,20079,20080,20081,20082,20083,20084,20085,20086,20087,20088,20089,20090,20091,20092,21413,21414,21415,21416,21417,21418,21419,21420,21421,21422,21423,21453,21454,21455,21456,21457,21458,21459,21460,21461,21462,21463,21473,21474,21475,21476,21477,21478,21479,21480,21481,21482,21483,21896,21897,21898,21899,22171,22172,22173,22174,22175,22176,22177,22181,22182,22183,22184,22185,22186,22187,22191,22192,22193,22194,22195,22196,22197,25884,27205,27206,27207,27208,27209,27210,27211,27212,27213,27214,27215,27216,27217,27218,27219,27220,27221,27222,27223,27224,27225,27226,27227,27228,27229,27230,27231,27232,27391,27392,27393,27394,27395,27396,27397,27398,27492,28402,28403,28404,28405,28406,28407,28408,28409,28410,28411,28412,28413,28414,28415,28416,28417,28418,28419,28420,28421,28422,28423,28424,28425,28426,28427,28428,28429,28430,28431,28432,28462,28463,28464,28465,28466,28467,28468,28469,28470,28471,28472,28473,28474,28475,28476,28477,28478,28479,28480,28481,28482,28483,28484,28485,28486,28487,28488,28489,28490,28491,28492,29701,29702,30161,30162,30163,30164,30165,30166,30167,30168,30169,30170,30171,30172,30173,30174,30175,30176,30177,30178,30179,30800,31251,31252,31253,31254,31255,31256,31257,31258,31259,31275,31276,31277,31278,31279,31281,31282,31283,31284,31285,31286,31287,31288,31289,31290,31466,31700]");
class ya extends J {
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
  async loadWfsData(e, t = -1, i = 0, s = 1e3, o = {
    type: "FeatureCollection",
    features: []
  }, n = !1) {
    let l = {
      offset: i.toString(),
      limit: s.toString()
    };
    t === -1 && (l = {
      resulttype: "hits"
    });
    const c = new It(e).updateQuery(l), [u, p] = await qe(Rt.get(c));
    if (!p)
      return console.error(`WFS data failed to load for ${e}`, u), Promise.reject(u);
    const d = p.data;
    if (t === -1)
      return t = p.data.numberMatched, this.loadWfsData(e, t, i, s, o, n);
    if (o.features = o.features.concat(d.features), d.features.length < t - i) {
      const b = Math.min(s, t - i - d.features.length);
      return this.loadWfsData(
        c,
        t,
        d.features.length + i,
        b,
        o,
        n
      );
    } else
      return n && o.features.length > 0 && o.features[0].geometry.type === B.POINT && o.features.forEach((b) => {
        const g = b.geometry.coordinates;
        b.properties.rvInternalCoordX = g[0], b.properties.rvInternalCoordY = g[1];
      }), o;
  }
  /**
   * Provides list of spatial references that are encoded in [y,x] format.
   *
   * @returns array of wkids that have reversed axis
   */
  reversedAxisWKIDs() {
    return ga;
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
      let n = e;
      if (e.indexOf("?") === -1)
        n += "?service=WMS&request=GetCapabilities";
      else {
        const l = new It(e.toUpperCase());
        "SERVICE" in l.queryMap || (n += "&service=WMS"), "REQUEST" in l.queryMap || (n += "&request=GetCapabilities");
      }
      return Ue(n, {
        responseType: "xml"
      }).then((l) => l.data);
    }, i = new Promise((n) => {
      t().then((l) => n(l)).catch(() => {
        console.error("Get capabilities failed; trying the second time;"), n(t());
      });
    }), s = (n) => {
      let l = n.Layer;
      return l ? (Array.isArray(l) || (l = [l]), l.map((a) => {
        const c = a.Name, u = a.Title;
        let p = a.Style;
        const d = [], b = {};
        return p && (Array.isArray(p) || (p = [p]), p.forEach((g) => {
          const f = g.Name;
          if (d.push(f), g.LegendURL) {
            const v = g.LegendURL.OnlineResource["@_xlink:href"];
            b[f] = v.replaceAll("&amp;", "&");
          }
        })), {
          // typecast to string as number IDs need to be stringified in the wms sublayer config
          // TODO: What if this ends up being null? Does layer explode?
          // If yes, consider adding a warning or notification of some sort.
          name: c?.toString() ?? null,
          title: u,
          queryable: a["@_queryable"] === "1",
          layers: s(a),
          allStyles: d,
          styleToURL: b,
          currentStyle: d[0]
        };
      })) : [];
    }, o = (n) => {
      let l = n.Format;
      return Array.isArray(l) || (l = [l]), l;
    };
    return import("fast-xml-parser").then(({ XMLParser: n }) => i.then((l) => {
      if (!l)
        return [];
      const a = new XMLSerializer().serializeToString(l), c = {
        ignoreAttributes: !1
        // check for tag attributes
      }, u = new n(c).parse(a);
      if ("ServiceExceptionReport" in u)
        return console.error(u.ServiceExceptionReport.ServiceException), [];
      const p = u.WMS_Capabilities.Capability;
      return {
        layers: s(p),
        queryTypes: o(p.Request.GetFeatureInfo)
      };
    }));
  }
}
class yt {
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
    return ve({
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
    const i = new Y(), s = {
      format: st.ESRI,
      data: void 0,
      started: !1,
      loaded: !1,
      loading: i.getPromise(),
      async load() {
        if (!this.started) {
          this.started = !0;
          const o = await t.getGraphic(e, {
            getAttribs: !0
          });
          this.data = o.attributes, this.loaded = !0, i.resolveMe();
        }
        return i.getPromise();
      }
    };
    return ve(s);
  }
}
class va extends J {
  files;
  ogc;
  constructor(e) {
    super(e), this.files = new ma(e), this.ogc = new ya(e);
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
        t = Ta;
        break;
      case x.MAPIMAGE:
        t = La;
        break;
      case x.GRAPHIC:
        t = Aa;
        break;
      case x.TILE:
        t = Oa;
        break;
      case x.WFS:
        t = Ma;
        break;
      case x.DATATABLE:
        t = Na;
        break;
      case x.WMS:
        t = ka;
        break;
      case x.GEOJSON:
        t = wa;
        break;
      case x.GEOJSONZIPPED:
        t = Sa;
        break;
      case x.FLATGEOBUFZIPPED:
        t = Ia;
        break;
      case x.CSV:
        t = xa;
        break;
      case x.DATAJSON:
        t = Pa;
        break;
      case x.IMAGERY:
        t = Ca;
        break;
      case x.SHAPEFILE:
        t = Ea;
        break;
      case x.FLATGEOBUF:
        t = _a;
        break;
      case x.OSM:
        t = Ra;
        break;
      default:
        throw new Error("Unsupported Layer Type " + e.layerType);
    }
    return new t(e, this.$iApi);
  }
  /**
   * Access a registered layer object.
   *
   * @param {string} layerId layer id or uid of the layer
   * @returns {LayerInstance | undefined} The layer instance with the given id. Returns undefined if layer is not found.
   */
  getLayer(e) {
    return Se(this.$vApp.$pinia).getLayerByAny(e);
  }
  /**
   * Access a registered sublayer object.
   *
   * @param {string} layerId layer id of the layer
   * @param {number} index index of the sublayer
   * @returns {LayerInstance | undefined} The sublayer instance matching the parameters. Returns undefined if sublayer is not found.
   */
  getSublayer(e, t) {
    const i = Se(this.$vApp.$pinia).getLayerById(e);
    if (i && i.supportsSublayers && t < i.sublayers.length)
      return i.sublayers[t];
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
      const i = t.isSublayer ? t.parentLayer.id : t.id, s = this.layerOrderIds().findIndex((o) => o === i);
      return s === -1 ? void 0 : s;
    } else
      return;
  }
  /**
   * Return the Layer IDs of all registered map layers in the order they occupy,
   * or will occupy, the map stack.
   * @returns {Array<string>} layer ids, from bottom to top
   */
  layerOrderIds() {
    return Se(this.$vApp.$pinia).mapOrder.slice(0) || [];
  }
  /**
   * Return all registered layers.
   * @returns {Array<LayerInstance>} all registered layers
   */
  allLayers() {
    return Se(this.$vApp.$pinia).layers || [];
  }
  /**
   * Returns all layers that have initiated successfully and that have not errored.
   * @returns {Array<LayerInstance>} all layers that have initiated and not errored
   */
  allActiveLayers() {
    return this.allLayers().filter(
      (e) => e.layerState !== z.ERROR && e.initiationState === N.INITIATED
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
    let t = this.allLayers().filter((i) => i.mapLayer && i.initiationState === N.INITIATED);
    if (e) {
      const i = this.layerOrderIds(), s = new Map(i.map((o, n) => [o, n]));
      t.sort((o, n) => s.get(o.id) - s.get(n.id));
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
    return this.allLayers().filter((e) => e.layerState === z.ERROR);
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
      V.BoundaryZoom,
      V.Datatable,
      V.Identify,
      V.Metadata,
      V.Opacity,
      V.Refresh,
      V.Reload,
      V.Remove,
      V.Settings,
      V.Symbology,
      V.Visibility
    ], s = [];
    return t.supportsFeatures || s.push(V.Datatable), t.extent === void 0 && s.push(V.BoundaryZoom), (t.config?.metadata || (t.isSublayer ? t.parentLayer?.config?.metadata : {}) || {}).url || s.push(V.Metadata), !t.mapLayer && !t.config.controls?.includes(V.Settings) && s.push(V.Settings), s.forEach((n) => {
      const l = i?.indexOf(n) ?? -1;
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
    const [t, i] = await qe(Ue(e, { query: { f: "json" } }));
    if (!i)
      throw console.error(`Service metadata load error: ${e}`, t), new Error(`Service metadata load error: ${e}`);
    if (!i.data)
      throw console.error(`Service metadata load error: ${e}`), new Error(`Service metadata load error: ${e}`);
    const s = i.data, o = {
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
      dataFormat: Q.UNKNOWN,
      mapLayer: !0
    };
    if (o.name = s.name || "", o.currentVersion = s.currentVersion || -1, o.minScale = s.effectiveMinScale || s.minScale || 0, o.maxScale = s.effectiveMaxScale || s.maxScale || 0, o.extent = s.extent ? F.fromArcServer(s.extent, "layer_extent") : void 0, o.defaultVisibility = s.defaultVisibility ?? !0, o.canModifyLayer = s.canModifyLayer ?? !0, s.type === "Feature Layer" || s.type === "Table") {
      if (o.dataFormat = Q.ESRI_FEATURE, o.displayField = s.displayField || "", Array.isArray(s.fields)) {
        const n = s.fields.map((a) => Is.fromJSON(a));
        o.fields = n.map((a) => ({
          name: a.name,
          alias: a.alias,
          type: a.type,
          length: a.length
        })), n.every((a) => a.type === "oid" ? (o.objectIdField = a.name, !1) : !0) && (o.objectIdField = s.objectIdField || (console.error(`Encountered service with no OID defined: ${e}`), "")), s.type === "Feature Layer" ? (o.geometryType = this.$iApi.geo.geom.serverGeomTypeToRampGeomType(s.geometryType), s.drawingInfo?.renderer && (o.renderer = at(s.drawingInfo.renderer)), s.sourceSpatialReference && (o.sourceSR = I.fromConfig(s.sourceSpatialReference))) : o.mapLayer = !1;
      }
    } else
      o.dataFormat = Q.ESRI_RASTER;
    return o;
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
    }, [s, o] = await qe(Ue(`${e}/query`, i));
    return o ? o.data ? Number.isInteger(o.data.count) ? o.data.count : (console.error(`Funny result (${o.data.count}) during feature count: ${e}`), 0) : (console.error(`Unable to load feature count: ${e}`), 0) : (console.error(`Feature count request unsuccessful: ${e}`, s), 0);
  }
}
class ti extends J {
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
   * Array of field definitions about the given layer's fields. Non-feature layers will have empty arrays.
   */
  fields;
  /**
   * Comma delimited string of field names (or '*' for all). Useful for numerous ESRI api calls. Non-feature layers will return empty string;
   */
  fieldList;
  /**
   * Field name that contains value considered the name of a feature. Not applicable for non-feature layers.
   */
  nameField;
  /**
   * Field name that contains the object ID of a feature. Not applicable for non-feature layers.
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
    super(t), this.config = e, this.id = "", this.uid = "", this.name = "error", this.layerState = z.NEW, this.drawState = ce.NOT_LOADED, this.initiationState = N.NEW, this.layerIdx = -1, this.layerFormat = me.UNKNOWN, this.layerType = x.UNKNOWN, this.dataFormat = Q.UNKNOWN, this.supportsIdentify = !1, this.identifyMode = K.NONE, this.supportsFeatures = !1, this.mapLayer = !0, this.featureCount = 0, this.fields = [], this.fieldList = "", this.nameField = "", this.oidField = "", this.supportsSublayers = !1, this.isSublayer = !1, this.isRemoved = !1, this.isFile = !1, this.isCosmetic = !1, this.userAdded = !1, this.identify = !1, this.hovertips = !1, this.geomType = T.UNKNOWN, this.legend = [], this._sublayers = [], this.expectedTime = { draw: 0, load: 0, fail: 0 }, this.lastCancel = 0, this.canModifyLayer = !0, this.canReload = !0, this.url = "";
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
    return new _t(0, "Fake tree", "getLayerTree() was not implemented in layer");
  }
  /**
   * Provides the spatial reference of the layer
   *
   * @returns {SpatialReference} the layer spatial reference in RAMP API format
   */
  getSR() {
    return I.latLongSR();
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
    return new zi();
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
    return Promise.resolve(new be(new Be()));
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
class es extends ti {
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
  // ----------- LAYER CONSTRUCTION AND INITIALIZAION -----------
  constructor(e, t) {
    super(e, t), this.name = e.name || "", this.geomType = T.NONE, this.dataFormat = Q.UNKNOWN, this.layerType = x.UNKNOWN, this.layerFormat = me.UNKNOWN;
    const i = t.geo.map.layerDefaultTimes;
    this.expectedTime.draw = e.expectedDrawTime ?? i.draw, this.expectedTime.load = e.expectedLoadTime ?? i.load, this.expectedTime.fail = e.maxLoadTime || i.fail, this.lastCancel = 0, this.timers = {
      draw: void 0,
      load: void 0
    }, this.origRampConfig = e, this.id = e.id || "", this.uid = this.$iApi.geo.shared.generateUUID(), this.isCosmetic = !1, this.isRemoved = !1, this.isSublayer = !1, this.supportsIdentify = !1, this.mapLayer = !0, this.identifyMode = K.NONE, this.supportsFeatures = !1, this.hovertips = !1, this.supportsSublayers = !1, this.isFile = !1, this.layerState = z.NEW, this.initiationState = N.NEW, this.drawState = ce.NOT_LOADED, this.loadDefProm = new Y(), this.url = this.origRampConfig.url, this.canReload = !!(this.url || this.origRampConfig.caching), this.loadPromDone = !1, this.layerTree = new _t(0, this.uid, this.name, !0);
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
    this.drawState = e, e === ce.REFRESH ? this.startTimer(
      "draw"
      /* DRAW */
    ) : e === ce.UP_TO_DATE && this.stopTimer(
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
    const e = (o) => {
      this.layerState !== z.ERROR && (console.error(o), this.onError());
    }, t = Date.now(), i = setTimeout(() => {
      t > this.lastCancel && (this.lastCancel = Date.now(), e("Layer timed out during initialize. Id: " + this.id));
    }, this.expectedTime.fail), [s] = await qe(this.onInitiate());
    clearTimeout(i), t > this.lastCancel && (this.drawState !== ce.UP_TO_DATE && this.startTimer(
      "draw"
      /* DRAW */
    ), s ? e(`Init error on layer id: ${this.id} . ${s.message}`) : this.updateInitiationState(N.INITIATED));
  }
  async onInitiate() {
    if (this.isSublayer)
      return console.warn("Attempted to initiate a sublayer as a CommonLayer"), Promise.resolve();
    this.initiationState === N.INITIATED && console.error(`Encountered layer initialize while already initiated, layer id ${this.id}`);
  }
  async terminate() {
    this.updateInitiationState(N.TERMINATING), await Promise.all(this.sublayers.map((e) => e.terminate())), this.loadDefProm = new Y(), this.loadPromDone = !1, this.updateLayerState(z.NEW), this.updateDrawState(ce.NOT_LOADED), this.updateInitiationState(N.TERMINATED);
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
      const s = this.onLoadActions();
      Promise.all(s).then(() => {
        clearTimeout(i), t ? this.visibility = !1 : (this.stopTimer(
          "load"
          /* LOAD */
        ), e > this.lastCancel && (this.loadPromDone && (this.loadDefProm = new Y()), this.loadDefProm.resolveMe(), this.loadPromDone = !0, this.sublayers.forEach((o) => o.onLoad()), this.updateLayerState(z.LOADED)));
      }).catch(() => {
        clearTimeout(i), this.onError();
      });
    } catch (s) {
      console.error("Encountered error on layer load: ", s), clearTimeout(i), this.onError();
    }
  }
  onError(e = !0) {
    this.layerState !== z.ERROR && (this.initiationState === N.INITIATING && this.updateInitiationState(N.NEW), this.loadPromDone && (this.loadDefProm = new Y()), this.loadDefProm.rejectMe(), this.loadPromDone = !0, this.sublayers.forEach((t) => t.onError(e)), e && this.$iApi.notify.show(
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
    ), this.updateLayerState(z.ERROR, !e));
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
    return this.layerState === z.LOADED;
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
    return this.stubError(), Promise.resolve(new be(new Be()));
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
}
class Je extends es {
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
    super(e, t), this._scaleSet = new zi(), this._mouseTolerance = e.mouseTolerance != null ? e.mouseTolerance : 5, this._touchTolerance = e.touchTolerance != null ? e.touchTolerance : 15, this._drawOrder = [], this._serverVisibility = void 0, this.isCosmetic = e.cosmetic || !1, this.extent = e.extent ? F.fromConfig(`${this.id}_extent`, e.extent) : void 0, this.viewDefProm = new Y(), this.esriWatches = [];
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
      this.esriLayer.watch("visible", (e) => {
        this.$iApi.event.emit(E.LAYER_VISIBILITYCHANGE, {
          visibility: e,
          layer: this
        });
      })
    ), this.esriWatches.push(
      this.esriLayer.watch("opacity", (e) => {
        this.$iApi.event.emit(E.LAYER_OPACITYCHANGE, {
          opacity: e,
          layer: this
        });
      })
    ), this.esriWatches.push(
      this.esriLayer.watch("loadStatus", (e) => {
        const t = {
          "not-loaded": z.LOADING,
          loading: z.LOADING,
          loaded: z.LOADED,
          failed: z.ERROR
        };
        e === "loaded" ? this.onLoad() : e === "failed" ? this.onError() : this.updateLayerState(t[e]);
      })
    ), this.esriLayer.on("layerview-create", (e) => {
      this.esriView = e.layerView, this.esriWatches.push(
        e.layerView.watch("updating", (t) => {
          this.updateDrawState(t ? ce.REFRESH : ce.UP_TO_DATE);
        })
      ), this.viewDefProm.resolveMe();
    }), this.sublayers.forEach((e) => e.initiate());
  }
  async terminate() {
    this.esriLayer = void 0, await super.terminate(), this.viewDefProm = new Y(), this.esriWatches.forEach((e) => e.remove()), this.esriWatches = [];
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
    this.name || (this.name = this.esriLayer?.title || this.id), this.isCosmetic || (this.identify = this.config.state?.identify ?? this.supportsIdentify);
    const t = this.$iApi.geo.proj.checkProj(this.getSR()).then((i) => i ? Promise.resolve() : Promise.reject());
    return e.push(t), e;
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
    return this.esriLayer ? I.fromESRI(this.esriLayer.spatialReference) : (this.noLayerErr(), I.latLongSR());
  }
}
class ii extends Je {
  attribs;
  renderer;
  serviceUrl;
  canModifyLayer;
  filter;
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !0, this.geomType = T.UNKNOWN, this.serviceUrl = "", this.fieldList = "", this.canModifyLayer = !0, this.filter = new Vi(e.permanentFilteredQuery || "", e.initialFilteredQuery || ""), this.hovertips = e.state?.hovertips ?? !0, this.attribs = new is();
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
      if (this.geomType = i.geometryType, this.attribs.quickCache = new rs(this.geomType), this.scaleSet.minScale = i.minScale, this.scaleSet.maxScale = i.maxScale, this.dataFormat = i.dataFormat, this.extent = this.extent ?? i.extent, this._serverVisibility = i.defaultVisibility, this.dataFormat === Q.ESRI_FEATURE) {
        this.supportsFeatures = !0, this.canModifyLayer = this.layerType === x.SUBLAYER ? i.canModifyLayer : !0, this.fields = i.fields, this.nameField = i.displayField, this.oidField = i.objectIdField, this.sourceSR = i.sourceSR, this.drawOrder.forEach((n) => {
          n.field && this.fields.findIndex((l) => l.name === n.field) === -1 && console.error(`Draw order for layer ${this.id} references invalid field ${n.field}`);
        });
        const s = e && e.customRenderer && e.customRenderer.type ? e.customRenderer : i.renderer;
        this.renderer = this.$iApi.geo.symbology.makeRenderer(s, this.fields), this.legend = this.$iApi.geo.symbology.rendererToLegend(this.renderer);
        const o = {
          // version number is only provided on 10.0 SP1 servers and up.
          // servers 10.1 and higher support the query limit flag
          supportsLimit: (i.currentVersion || 1) >= 10.1,
          serviceUrl: this.serviceUrl,
          oidField: this.oidField,
          batchSize: -1,
          attribs: "*",
          // NOTE we set to * here for generic case. Some subclasses will later call updateFieldList() after parsing config field settings
          permanentFilter: this.getSqlFilter(ae.PERMANENT)
        };
        this.attribs.attLoader = new ss(this.$iApi, o), this.origRampConfig.name || (this.name = i.name ?? this.id);
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
    let i = {}, s = new Be();
    const o = this.$iApi.geo.map;
    let n = !1, l = !1, a = 0;
    if (t.getAttribs || t.getStyle) {
      const u = this.attribs.quickCache.getAttribs(e);
      if (u)
        i = u;
      else if (this.attribs.attLoader.isLoaded() || this.isFile) {
        const p = await this.attribs.attLoader.getAttribs();
        i = p.features[p.oidIndex[e]];
      } else
        n = !0;
    }
    if (t.getGeom) {
      a = o.getScale();
      const u = this.attribs.quickCache.getGeom(e, a);
      u ? s = u : l = !0;
    }
    if (n || l) {
      const u = {
        oid: e,
        serviceUrl: this.serviceUrl,
        includeGeometry: l,
        attribs: this.fieldList,
        fieldsToTrim: this.getFieldsToTrim()
      };
      l && (u.mapSR = o.getSR().wkid?.toString(), this.attribs.quickCache.isPoint || (u.maxOffset = o.esriView?.resolution));
      const p = await this.$iApi.geo.attributes.loadSingleFeature(u);
      l && (this.attribs.quickCache.setGeom(e, p.geometry, a), s = p.geometry), (n || typeof this.attribs.quickCache.getAttribs(e) > "u") && (this.attribs.quickCache.setAttribs(e, p.attributes), n && (i = p.attributes));
    }
    const c = new be(s, "", t.getAttribs ? i : void 0);
    if (t.getStyle) {
      const u = xe(this.renderer.getGraphicSymbol(i));
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
    const s = `${this.uid}-${e}-${t}`;
    this._lastFilterUpdate = s, setTimeout(() => {
      this._lastFilterUpdate === s && this.applySqlFilter();
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
    const i = this.filter.getCombinedSql(e), s = !!t;
    if (!(i || s))
      return;
    t && this.filter.setExtent(t);
    const o = this.filter.sqlActiveFilters(e);
    let n = this.filter.getCache(o, s);
    if (!n) {
      const l = {
        filterGeometry: t,
        filterSql: i,
        includeGeometry: !1,
        sourceSR: this.sourceSR
      };
      n = this.queryOIDs(l), this.filter.setCache(n, o, s);
    }
    return n;
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
    return t.map((s) => ({
      oid: s,
      graphic: this.getGraphic(s, i)
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
      const s = i.ascending ?? !0 ? "ascending" : "descending";
      return i.field ? {
        field: i.field,
        order: s
      } : {
        valueExpression: i.arcade,
        order: s
      };
    }), this._drawOrder = e.drawOrder.slice());
  }
}
class ba extends Je {
  constructor(e, t) {
    super(e, t), this.dataFormat = Q.ESRI_FEATURE, this.layerFormat = me.GRAPHIC, this.hovertips = !1;
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
    const i = t.filter((a) => this._graphics.findIndex((u) => u.id === a.id) === -1 ? (this._graphics.push(a), !0) : (console.error(`Attempting to add graphic with id '${a.id}' that has already been added.`), !1)), s = this.$iApi.geo.map.getSR(), o = i.map((a) => this.$iApi.geo.proj.projectGeometry(s, a.geometry)), n = await Promise.all(o), l = i.map((a, c) => {
      const u = new be(n[c], a.id, a.attributes);
      return u.style = a.style, this.$iApi.geo.geom.graphicRampToEsri(u);
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
    Array.isArray(e) ? t = e : t = [e], t.map((s) => typeof s == "string" ? s : s.id).forEach((s) => {
      const o = this.esriLayer.graphics.findIndex((l) => l.id === s);
      o > -1 && this.esriLayer.graphics.removeAt(o);
      const n = this._graphics.findIndex((l) => l.id === s);
      n > -1 && this._graphics.splice(n, 1);
    });
  }
}
class Aa extends ba {
  constructor(e, t) {
    super(e, t), this.layerType = x.GRAPHIC;
  }
  async onInitiate() {
    this.esriLayer = ie(new xs(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
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
    return this.layerTree.name = this.name, this.updateDrawState(ce.UP_TO_DATE), e;
  }
  // ----------- LAYER ACTIONS -----------
}
class Ze extends ii {
  esriJson;
  // used as temp var to get around typescript parameter grousing. will be undefined after initLayer()
  // temporarily stores GeoJSON. acts as a nice way for subclasses to parse their random sources to GeoJSON, drop it here,
  // and have the generic initiation code in this file just grab it.
  sourceGeoJson;
  tooltipField;
  // if we end up having more things that are shared with FeatureLayer, consider making a FeatureBaseLayer class for both to inherit from
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !0, this.isFile = !0, this.dataFormat = Q.ESRI_FEATURE, this.layerFormat = me.FEATURE, this.tooltipField = "", this.layerIdx = 0, e.identifyMode && e.identifyMode !== K.NONE ? this.identifyMode = e.identifyMode : this.identifyMode = K.HYBRID;
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
    this.esriJson = await this.$iApi.geo.layer.files.geoJsonToEsriJson(this.sourceGeoJson, e), this.esriLayer = ie(new ki(this.makeEsriLayerConfig(this.origRampConfig))), this.esriJson = void 0, this.origRampConfig.caching || delete this.origRampConfig.rawData, delete this.sourceGeoJson, await super.onInitiate();
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
    ].forEach((o) => {
      t[o] = this.esriJson[o];
    }), this.origRampConfig.nameField ? t.displayField = this.$iApi.geo.attributes.fieldValidator(
      t.fields,
      this.origRampConfig.nameField
    ) || i : t.displayField = i, t.outFields = ["*"], delete t.url, this.configDrawOrder(e, t), t;
  }
  onLoadActions() {
    const e = super.onLoadActions();
    return this.esriLayer && this.origRampConfig.customRenderer?.type && (this.esriLayer.renderer = at(this.config.customRenderer)), this.layerTree.name = this.name, this.extractLayerMetadata(), this.origRampConfig.tooltipField ? this.tooltipField = this.$iApi.geo.attributes.fieldValidator(this.fields, this.origRampConfig.tooltipField) || this.nameField : this.tooltipField = this.nameField, this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.attribs.attLoader.updateFieldList(this.fieldList), this.featureCount = this.esriLayer?.source.length || 0, e.push(this.viewDefProm.getPromise()), this.filter.getCombinedSql() && Promise.all(e).then(() => {
      this.applySqlFilter();
    }), e;
  }
  // ----------- LAYER ACTIONS -----------
  runIdentify(e) {
    if (!this.canIdentify())
      return [];
    const t = new Y(), i = ve({
      items: [],
      loading: t.getPromise(),
      loaded: !1,
      errored: !1,
      uid: this.uid,
      layerId: this.id,
      requestTime: Date.now()
    });
    let s = Promise.resolve(), o = Promise.resolve(), n = [], l = [];
    if (this.identifyMode === K.HYBRID || this.identifyMode === K.GEOMETRIC) {
      const a = {
        includeGeometry: !1
      };
      this.geomType !== T.POLYGON && e.geometry.type === T.POINT ? a.filterGeometry = this.$iApi.geo.query.makeClickBuffer(e.geometry, e.tolerance) : a.filterGeometry = e.geometry, a.filterSql = this.getCombinedSqlFilter(), o = this.queryFeatures(a).then((c) => {
        n = c;
      });
    }
    return e.hitTest && (this.identifyMode === K.HYBRID || this.identifyMode === K.SYMBOLIC) && (s = o.then(async () => {
      const a = await e.hitTest;
      l = await Promise.all(
        a.filter(
          (c) => c.layerId === this.id && n.findIndex((u) => c.oid === u.attributes[this.oidField]) === -1
        ).map((c) => c.oid)
      );
    })), Promise.all([s, o]).then(() => {
      n.forEach((a) => {
        i.items.push(yt.makeRawItem(st.ESRI, a.attributes));
      }), l.forEach((a) => {
        i.items.push(yt.makeOidItem(a, this));
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
    const t = ie(e.fields.slice());
    this.fields = t.map((s) => ({
      name: s.name,
      alias: s.alias,
      type: s.type,
      length: s.length
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
    this.attribs.attLoader = new Da(this.$iApi, i);
  }
  async getGraphic(e, t) {
    let i;
    if (!t.getGeom && this.attribs.attLoader.isLoaded()) {
      const s = await this.attribs.attLoader.getAttribs();
      i = new be(new Be(), "", s.features[s.oidIndex[e]]);
    } else {
      const s = {
        filterOIDs: [e],
        includeGeometry: !!t.getGeom
      }, o = await this.queryFeatures(s);
      if (o.length === 0)
        throw new Error(`Could not find object id ${e}`);
      o.length !== 1 && console.warn("did not get a single result on a query for a specific object id"), i = o[0];
    }
    if (t.getStyle) {
      const s = xe(this.renderer.getGraphicSymbol(i.attributes));
      i.style = this.$iApi.geo.geom.styleEsriToRamp(s);
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
    return (await this.$iApi.geo.query.geoJsonQuery(t)).map((s) => s.attributes ? s.attributes[this.oidField] : -1);
  }
  applySqlFilter(e = []) {
    if (!this.esriView) {
      this.noLayerErr();
      return;
    }
    const t = this.filter.getCombinedSql(e);
    xe(this.esriView).filter = new ks({
      where: t
    });
  }
}
class wa extends Ze {
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
class Ea extends Ze {
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
class xa extends Ze {
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
class Sa extends Ze {
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
class _a extends Ze {
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
class Ia extends Ze {
  constructor(e, t) {
    super(e, t), this.layerType = x.FLATGEOBUFZIPPED;
  }
  async onInitiate() {
    const e = Date.now(), t = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);
    if (e > this.lastCancel) {
      const i = await this.$iApi.geo.layer.files.unzipSingleFile(t);
      if (e > this.lastCancel) {
        const s = await this.$iApi.geo.layer.files.fgbToGeoJson(i, this.expectedTime.fail + 1e3);
        e > this.lastCancel && (this.sourceGeoJson = s, await super.onInitiate());
      }
    }
  }
}
class Ta extends ii {
  tooltipField;
  constructor(e, t) {
    super(e, t), this.dataFormat = Q.ESRI_FEATURE, this.tooltipField = "", this.supportsIdentify = !0, this.layerType = x.FEATURE, this.layerFormat = me.FEATURE, e.identifyMode && e.identifyMode !== K.NONE ? this.identifyMode = e.identifyMode : this.identifyMode = K.HYBRID;
  }
  async onInitiate() {
    ie(this.esriLayer = new ki(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
  }
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    const t = super.makeEsriLayerConfig(e);
    return (e.initialFilteredQuery || e.permanentFilteredQuery) && (t.definitionExpression = this.filter.getCombinedSql()), this.configDrawOrder(e, t), t;
  }
  onLoadActions() {
    const e = Date.now(), t = super.onLoadActions(), i = this.esriLayer && this.origRampConfig.customRenderer?.type;
    i && (this.esriLayer.renderer = at(this.origRampConfig.customRenderer));
    const s = this.esriLayer.parsedUrl.path, n = this.$iApi.geo.shared.parseUrlIndex(s).index || 0;
    this.layerIdx = n, this.serviceUrl = s;
    const l = this.loadLayerMetadata(
      i ? { customRenderer: this.esriLayer?.renderer } : {}
    ).then(() => {
      e > this.lastCancel && (this.visibility = this.origRampConfig?.state?.visibility ?? this._serverVisibility ?? !0, this.nameField = this.origRampConfig.nameField || this.nameField || "", this.tooltipField = this.origRampConfig.tooltipField || this.nameField, this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.attribs.attLoader.updateFieldList(this.fieldList), this.attribs.attLoader.updateFieldsToTrim(this.getFieldsToTrim()));
    }), a = this.$iApi.geo.layer.loadFeatureCount(this.serviceUrl, this.getSqlFilter(ae.PERMANENT)).then((c) => {
      e > this.lastCancel && (this.featureCount = c);
    });
    return this.layerTree.name = this.name, this.layerTree.layerIdx = n, t.push(l, a), t;
  }
  // ----------- LAYER ACTIONS -----------
  runIdentify(e) {
    if (!this.canIdentify())
      return [];
    const t = new Y(), i = ve({
      items: [],
      loading: t.getPromise(),
      loaded: !1,
      errored: !1,
      uid: this.uid,
      layerId: this.id,
      requestTime: Date.now()
    });
    let s = Promise.resolve(), o = Promise.resolve(), n = [];
    if (this.identifyMode === K.HYBRID || this.identifyMode === K.GEOMETRIC) {
      const l = {
        includeGeometry: !1,
        sourceSR: this.sourceSR
      };
      this.geomType !== T.POLYGON && e.geometry.type === T.POINT ? l.filterGeometry = this.$iApi.geo.query.makeClickBuffer(e.geometry, e.tolerance) : l.filterGeometry = e.geometry, l.filterSql = this.getCombinedSqlFilter(), o = this.queryOIDs(l).then((a) => {
        n = a;
      });
    }
    return e.hitTest && (this.identifyMode === K.HYBRID || this.identifyMode === K.SYMBOLIC) && (s = o.then(async () => {
      (await e.hitTest).filter(
        (a) => a.layerId === this.id && n.findIndex((c) => a.oid === c) === -1
      ).forEach((a) => {
        n.push(a.oid);
      });
    })), Promise.all([s, o]).then(() => {
      n.forEach((l) => {
        i.items.push(yt.makeOidItem(l, this));
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
        const s = this.attribs.quickCache.getExtent(e);
        s ? t(s) : this.esriLayer.queryExtent({
          objectIds: [e],
          outSpatialReference: this.$iApi.geo.map.getSR().toESRI()
        }).then((o) => {
          const n = F.fromESRI(o.extent);
          this.attribs.quickCache.setExtent(e, n), t(n);
        }).catch(() => {
          console.error(`Extent querying failed for ${e}.`), i();
        });
      }
    });
  }
}
class La extends Je {
  // indicates if sublayers can have opacity adjusted
  isDynamic;
  // used to remember state after load
  origState;
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !0, this.supportsSublayers = !0, this.layerType = x.MAPIMAGE, this.layerFormat = me.MAPIMAGE, this.isDynamic = !1, this.hovertips = !1, this.layerTree.layerIdx = -1, this.identifyMode = K.GEOMETRIC;
  }
  async onInitiate() {
    this.esriLayer = ie(new Mi(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
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
    const i = (a) => {
      const c = this.esriLayer?.allSublayers.find((u) => u.id === a);
      if (!c)
        throw new Error("attempt to find map image sublayer failed");
      return c;
    }, s = {};
    this.origRampConfig.sublayers.forEach(
      (a) => {
        s[a.index || 0] = a;
      }
    );
    const o = [], n = (a, c) => {
      const u = a.id, p = s[u];
      if (a.sublayers && a.sublayers.length > 0) {
        const d = (p ? p.name : "") || a.title || "", b = new _t(u, "", d, !1);
        c.findChildByIdx(u) || c.children.push(b), a.sublayers.reverse().forEach((g) => {
          n(g, b);
        });
      } else {
        this._sublayers[u] || (this._sublayers[u] = new $a(
          {
            id: `${this.id}-${u}`,
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
        if (d.name = p?.name || a.title || "", o.push(d), !c.children.map((b) => b.layerIdx).includes(u)) {
          const b = new _t(u, d.uid, d.name, !1);
          c.children.push(b);
        }
        d.esriWatches.push(
          a.watch("visible", () => {
            this.$iApi.event.emit(E.LAYER_VISIBILITYCHANGE, {
              visibility: d.visibility,
              layer: d
            }), d.parentLayer?.checkVisibility();
          }),
          a.watch("opacity", (b) => {
            this.$iApi.event.emit(E.LAYER_OPACITYCHANGE, {
              opacity: b,
              layer: d
            });
          })
        );
      }
    };
    this.origRampConfig.sublayers.forEach((a) => {
      if (!a.cosmetic) {
        const c = i(a.index || 0);
        n(c, this.layerTree);
      }
    });
    const l = o.map(async (a) => {
      const c = i(a.layerIdx), u = s[a.layerIdx];
      if (a.serviceUrl = c.url, a.fetchEsriSublayer(this), await a.initiate(), t < this.lastCancel)
        return;
      const p = a.esriSubLayer && u?.customRenderer?.type;
      if (p && (a.esriSubLayer.renderer = at(u.customRenderer)), await a.loadLayerMetadata(p ? { customRenderer: a.esriSubLayer?.renderer } : {}), t < this.lastCancel)
        return;
      const d = s[a.layerIdx];
      if (d ? (a.visibility = a.isRemoved ? !1 : d.state?.visibility ?? (this.origState.visibility ? a._serverVisibility ?? this.origState.visibility : this.origState.visibility ?? a._serverVisibility) ?? !0, a.opacity = d.state?.opacity ?? this.origState.opacity ?? 1, a.nameField = d.nameField || a.nameField || "", this.$iApi.geo.attributes.applyFieldMetadata(a, d.fieldMetadata), a.canModifyLayer || this.$iApi.notify.show(
        fe.WARNING,
        this.$iApi.$i18n.t("layer.filtersdisabled", {
          name: a.name || a.id
        })
      )) : this.$iApi.geo.attributes.applyFieldMetadata(a), a.supportsFeatures) {
        a.updateFieldList(), a.updateFieldsToTrim();
        const b = await this.$iApi.geo.layer.loadFeatureCount(
          a.serviceUrl,
          a.getSqlFilter(ae.PERMANENT)
        );
        t > this.lastCancel && (a.featureCount = b);
      }
    });
    return e.push(...l), this.esriLayer.allSublayers.forEach((a) => {
      !a.sublayers && !o.find((c) => c.layerIdx === a.id) ? (a.visible = !1, a.opacity = 0) : a.sublayers && (a.visible = !0);
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
    e.sublayerIds && (e.sublayerIds = e.sublayerIds.map((s) => typeof s == "number" ? this.layerTree?.findChildByIdx(s)?.uid : s));
    const t = e.sublayerIds ? this._sublayers.filter((s) => e.sublayerIds?.includes(s.uid)) : this._sublayers.filter((s) => s.canIdentify());
    if (t.length === 0)
      return [];
    let i;
    return e.geometry.type === T.POINT && (i = this.$iApi.geo.query.makeClickBuffer(e.geometry, e.tolerance)), t.map((s) => {
      const o = new Y(), n = {}, l = ve({
        items: [],
        loading: o.getPromise(),
        loaded: !1,
        errored: !1,
        uid: s.uid,
        layerId: s.id,
        requestTime: Date.now()
      });
      return s.geomType !== T.POLYGON && i ? n.filterGeometry = i : n.filterGeometry = e.geometry, n.filterSql = s.getCombinedSqlFilter(), n.sourceSR = s.sourceSR, s.queryOIDs(n).then((a) => {
        a.forEach((c) => {
          l.items.push(yt.makeOidItem(c, s));
        }), l.loaded = !0, o.resolveMe();
      }).catch(() => {
        l.errored = !0, o.resolveMe();
      }), l;
    });
  }
}
class $a extends ii {
  tooltipField;
  constructor(e, t, i) {
    if (super(e, t), this.layerType = x.SUBLAYER, this.layerFormat = me.MAPIMAGE, this.isSublayer = !0, this.layerIdx = e.index, this.parentLayer = i, this.dataFormat = Q.ESRI_FEATURE, this.supportsFeatures = !0, this.tooltipField = "", this.hovertips = !1, this.url = this.parentLayer?.url, this.canReload = !!(this.url || this.origRampConfig.caching), !i.esriLayer)
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
    this.esriSubLayer = ie(
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
    return this.parentLayer?.esriLayer ? I.fromESRI(this._parentLayer?.esriLayer?.spatialReference) : (this.noLayerErr(), I.latLongSR());
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
class Ra extends Je {
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !1, this.layerType = x.OSM, this.layerFormat = me.OSM, this.dataFormat = Q.OSM_TILE, this.supportsFeatures = !1;
  }
  async onInitiate() {
    this.esriLayer = ie(new Pi(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
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
class Ca extends Je {
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !1, this.layerType = x.IMAGERY, this.layerFormat = me.IMAGERY, this.dataFormat = Q.ESRI_RASTER;
  }
  async onInitiate() {
    this.esriLayer = ie(new Ss(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
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
    const t = Date.now(), i = this.$iApi.geo.symbology.mapServerToLocalLegend(this.origRampConfig.url).then((s) => {
      t > this.lastCancel && (this.legend = s);
    });
    return e.push(i), e;
  }
}
class Oa extends Je {
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !1, this.layerType = x.TILE, this.layerFormat = me.TILE, this.dataFormat = Q.ESRI_TILE;
  }
  async onInitiate() {
    this.esriLayer = ie(new Ni(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
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
    const i = this.$iApi.geo.symbology.mapServerToLocalLegend(this.origRampConfig.url).then((s) => {
      t > this.lastCancel && (this.legend = s);
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
    if (this.layerState === z.LOADED && !i)
      this.$iApi.notify.show(
        fe.WARNING,
        this.$iApi.$i18n.t("layer.mismatch", {
          name: this.name || this.id
        })
      ), this.onError();
    else if (this.layerState === z.ERROR && i)
      this.reload();
    else if (this.layerState !== z.ERROR && !i)
      return this.$iApi.notify.show(
        fe.WARNING,
        this.$iApi.$i18n.t("layer.mismatch", {
          name: this.name || this.id
        })
      ), Promise.reject();
    return Promise.resolve();
  }
}
class ka extends Je {
  sublayerNames;
  mimeType;
  constructor(e, t) {
    super(e, t), this.supportsIdentify = !0, this.layerType = x.WMS, this.layerFormat = me.WMS, this.mimeType = e.featureInfoMimeType || "", this.sublayerNames = [], this.dataFormat = Q.OGC_RASTER, this.identifyMode = K.GEOMETRIC;
  }
  async onInitiate() {
    this.esriLayer = ie(new _s(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
  }
  /**
   * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
   *
   * @param rampLayerConfig snippet from RAMP for this layer
   * @returns configuration object for the ESRI layer representing this layer
   */
  makeEsriLayerConfig(e) {
    const t = super.makeEsriLayerConfig(e), i = e.sublayers;
    this.sublayerNames = i.map((o) => o.id || "error_no_wms_id");
    const s = i.map((o) => o.currentStyle).join();
    return t.customParameters = {
      styles: s
    }, e.url.indexOf("/geomet") !== -1 && (t.customParameters.layers = i[0].id), t;
  }
  onLoadActions() {
    const e = super.onLoadActions();
    this.layerTree.name = this.name;
    const t = (i) => {
      let s = !1;
      return i.forEach((o) => {
        this.sublayerNames.indexOf(o.name) > -1 || o.sublayers && o.sublayers.length > 0 && t(o.sublayers) ? s = !0 : o.visible = !1;
      }), s;
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
    const t = new Y(), i = ve({
      items: [],
      loading: t.getPromise(),
      loaded: !1,
      errored: !1,
      uid: this.uid,
      layerId: this.id,
      requestTime: Date.now()
    });
    return this.getFeatureInfo(this.sublayerNames, e.geometry, this.mimeType).then((s) => {
      if (s) {
        let o = !0, n;
        typeof s != "string" ? n = st.JSON : s.indexOf("Search returned no results") === -1 && s !== "" ? n = st.TEXT : (o = !1, n = st.UNKNOWN), o && i.items.push(yt.makeRawItem(n, s));
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
    const s = this.$iApi.geo.map, o = this.esriLayer;
    if (!s.esriView)
      throw new Error("WMS get feature, no map view exists. Cannot derive click coords");
    if (!o)
      throw this.noLayerErr(), new Error("wms get feature failed, no layer");
    let n, l;
    const a = s.getExtent(), c = o.spatialReferences, u = e.join(","), p = s.esriView.toScreen(t.toESRI()), d = Math.floor(p.x), b = Math.floor(p.y), f = {
      "application/json": "json",
      "text/html": "text",
      "text/plain": "text"
    }[i] || "text", w = s.getSR();
    w.wkid ? n = w.wkid : (n = 4326, console.error("Map is likely in a WKT projection. WMS Identify request will likely fail.")), c && c.length > 1 ? c.indexOf(n) === -1 && (w.latestWkid && c.indexOf(w.latestWkid) > -1 ? n = w.latestWkid : console.error(
      "WMS service does not support the maps projection. Identify request will likely fail."
    )) : console.error("No supported wkid/epsg code found for WMS service. Identify request will likely fail."), o.version === "1.3" || o.version === "1.3.0" ? (l = {
      CRS: "EPSG:" + n,
      I: d,
      J: b,
      STYLES: "",
      FORMAT: o.imageFormat
    }, this.$iApi.geo.layer.ogc.reversedAxisWKIDs().indexOf(n) > -1 && (l.BBOX = `${a.ymin},${a.xmin},${a.ymax},${a.xmax}`)) : l = { SRS: "EPSG:" + n, X: d, Y: b }, Object.prototype.hasOwnProperty.call(l, "BBOX") || (l.BBOX = `${a.xmin},${a.ymin},${a.xmax},${a.ymax}`);
    const v = {
      SERVICE: "WMS",
      REQUEST: "GetFeatureInfo",
      VERSION: o.version,
      WIDTH: s.getPixelWidth(),
      HEIGHT: s.getPixelHeight(),
      QUERY_LAYERS: u,
      LAYERS: u,
      INFO_FORMAT: i
    }, R = o.customLayerParameters;
    return R && Object.keys(R).forEach((L) => {
      L.toLowerCase() !== "styles" && (v[L] = R[L]);
    }), Object.keys(v).forEach((L) => l[L] = v[L]), Ue(o.url.split("?")[0], {
      query: l,
      responseType: f
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
    this.esriLayer.allSublayers.forEach((s) => {
      s.visible && (s.legendUrl && this.origRampConfig.sublayers?.forEach((o) => {
        if (o.id && o.currentStyle && o.id === s.name) {
          const n = new It(s.legendUrl);
          "STYLE" in n.queryMap && n.queryMap.STYLE !== o.currentStyle && (s.legendUrl = n.updateQuery({
            STYLE: o.currentStyle
          }));
        }
      }), t.set(s.name, s.legendUrl));
    });
    const i = e.map(
      (s) => s.styleLegends && s.currentStyle ? s.styleLegends.find((o) => o.name === s.currentStyle).url : void 0
    );
    return i.forEach((s, o) => {
      s || (i[o] = t.get(e[o].id));
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
    return this.esriLayer.allSublayers.some((i) => {
      if (i.name === e)
        return t = i.title, !0;
    }), t || "";
  }
  /**
   * Download or refresh the internal symbology for the sublayer.
   *
   * @function loadSymbology
   */
  loadSymbology() {
    const e = Date.now(), t = this.config.sublayers, i = this.getLegendUrls(
      t.map((s) => ({
        id: s.id,
        styleLegends: s.styleLegends,
        currentStyle: s.currentStyle
      }))
    ).map((s, o) => {
      const n = t[o].name || this.getWMSLayerTitle(t[o].id) || t[o].id, l = {
        uid: this.$iApi.geo.shared.generateUUID(),
        label: n,
        svgcode: "",
        esriStandard: !1,
        // is an image
        drawPromise: this.$iApi.geo.symbology.generateWMSSymbology(s).then((a) => {
          e > this.lastCancel && (l.svgcode = a.svgcode, l.imgHeight = a.imgHeight, l.imgWidth = a.imgWidth);
        })
      };
      return l;
    });
    this.legend = i;
  }
}
class Ma extends Ze {
  constructor(e, t) {
    super(e, t), this.layerType = x.WFS;
  }
  async onInitiate() {
    const e = Date.now(), t = new It(this.config.url), { offset: i, limit: s } = t.queryMap, o = await this.$iApi.geo.layer.ogc.loadWfsData(
      this.config.url,
      -1,
      parseInt(i) || 0,
      parseInt(s) || 1e3,
      void 0,
      this.config.xyInAttribs
    );
    e > this.lastCancel && (this.sourceGeoJson = o, await super.onInitiate());
  }
}
class ts extends es {
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
    super(e, t), this.dataFormat = Q.ESRI_FEATURE, this.layerFormat = me.NOLAYER, this.drawState = ce.NOT_VISUAL, this.attribs = new is(), this.supportsFeatures = !0, this.mapLayer = !1, this.isFile = !1, this._visibility = e.state?.visibility ?? !0, this.expectedTime.draw = 0;
  }
  async onInitiate() {
    if (this.sourceJson) {
      const e = this.sourceJson;
      if (e.data.length === 0 || e.fields.length === 0)
        throw new Error("Data layer with no columns or now rows.");
      const t = e.fields.slice(), i = e.data[0].slice(), s = / /gi;
      this.fields = t.map((n, l) => {
        let a = "", c = n;
        n.indexOf(" ") > -1 && (a = n, c = n.trim().replace(s, "-"), e.fields[l] = c);
        const u = this.$iApi.geo.layer.files.inferType(i[l]);
        return {
          name: c,
          alias: a,
          type: u,
          length: u === $e.STRING ? 256 : void 0
        };
      }), this.oidField = "rampOID", this.fields.push({ name: this.oidField, type: $e.OID }), e.fields.push(this.oidField), e.data.forEach((n, l) => n.push(l + 1)), this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.fieldList = "*";
      const o = {
        batchSize: -1,
        // mandatory to avoid easy bugs in server process; not used here
        sourceDataJson: e,
        oidField: this.oidField,
        attribs: "*",
        // even required?
        fieldsToTrim: this.getFieldsToTrim()
      };
      this.attribs.attLoader = new Ga(this.$iApi, o), await this.attribs.attLoader.getAttribs(), this.featureCount = e.data.length, this.origRampConfig.nameField ? this.nameField = this.$iApi.geo.attributes.fieldValidator(this.fields, this.origRampConfig.nameField) || this.oidField : this.nameField = this.oidField, this.sourceJson = void 0, this.origRampConfig.caching || delete this.origRampConfig.rawData;
    } else
      throw new Error("Attempted to initiate file based data layer, sourceJson is missing");
  }
  async terminate() {
    await super.terminate();
  }
  async reload() {
    this.$iApi.event.emit(E.LAYER_RELOAD_START, this), await this.terminate(), await this.initiate(), this.layerState !== z.ERROR && this.onLoad(), setTimeout(() => {
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
      const s = await this.attribs.attLoader.getAttribs();
      i = s.features[s.oidIndex[e]];
    } else
      throw new Error("Non ESRI data layer did not have attributes populated.");
    return new be(new Be(), "", i);
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
class Pa extends ts {
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
class Na extends ts {
  // TODO if we add AQL filtering to the file based data layers, this prop and the appropriate initializers/methods should migrate to DataLayer
  filter;
  serviceUrl;
  constructor(e, t) {
    super(e, t), this.layerType = x.DATATABLE, this.serviceUrl = e.url, this.filter = new Vi(e.permanentFilteredQuery || "", e.initialFilteredQuery || "");
  }
  async onInitiate() {
  }
  onLoadActions() {
    const e = super.onLoadActions(), t = Date.now(), s = this.$iApi.geo.shared.parseUrlIndex(this.serviceUrl).index || 0, o = this.$iApi.geo.layer.loadLayerMetadata(this.serviceUrl).then((l) => {
      if (t < this.lastCancel)
        return;
      this.name || (this.name = l.name), this.layerTree.name = this.name, this.oidField = l.objectIdField, this.nameField = this.origRampConfig.nameField || l.displayField || this.oidField, this.fields = l.fields, this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata);
      const a = {
        // version number is only provided on 10.0 SP1 servers and up.
        // servers 10.1 and higher support the query limit flag
        supportsLimit: (l.currentVersion || 1) >= 10.1,
        serviceUrl: this.serviceUrl,
        oidField: this.oidField,
        batchSize: -1,
        attribs: this.fieldList,
        permanentFilter: this.getSqlFilter(ae.PERMANENT),
        fieldsToTrim: this.getFieldsToTrim()
      };
      this.attribs.attLoader = new ss(this.$iApi, a), this.attribs.quickCache = new rs(this.geomType);
    }), n = this.$iApi.geo.layer.loadFeatureCount(this.serviceUrl, this.getSqlFilter(ae.PERMANENT)).then((l) => {
      t > this.lastCancel && (this.featureCount = l);
    });
    return this.layerTree.layerIdx = s, e.push(o, n), e;
  }
  async getGraphic(e, t) {
    let i = {};
    const s = this.attribs.quickCache.getAttribs(e);
    if (s)
      i = s;
    else if (this.attribs.attLoader.isLoaded()) {
      const n = await this.attribs.attLoader.getAttribs();
      i = n.features[n.oidIndex[e]];
    } else {
      const n = {
        oid: e,
        serviceUrl: this.serviceUrl,
        includeGeometry: !1,
        attribs: this.fieldList
      }, l = await this.$iApi.geo.attributes.loadSingleFeature(n);
      this.attribs.quickCache.setAttribs(e, l.attributes), i = l.attributes;
    }
    return new be(new Be(), "", i);
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
  async getFilterOIDs(e = [], t = void 0) {
    const i = this.filter.getCombinedSql(e);
    if (!i)
      return;
    const s = this.filter.sqlActiveFilters(e);
    let o = this.filter.getCache(s, !1);
    if (!o) {
      const n = {
        filterSql: i,
        includeGeometry: !1
      };
      o = this.queryOIDs(n), this.filter.setCache(o, s, !1);
    }
    return o;
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
    const t = await this.queryOIDs(e), i = {
      getAttribs: !0
    };
    return t.map((s) => ({
      oid: s,
      graphic: this.getGraphic(s, i)
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
class Fa extends J {
  /**
   * Will populate the object id index for an attribute set.
   *
   * @param attSet attribute set that has features populated
   * @param oidField name of the object id field in the attribute set
   */
  oidIndexer(e, t) {
    e.features.forEach((i, s) => {
      e.oidIndex[i[t]] = s;
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
    const i = e.permanentFilter ? ` AND ${e.permanentFilter}` : "", s = {
      query: {
        where: `${e.oidField}>${e.maxId}${i}`,
        outFields: e.attribs,
        orderByFields: e.oidField,
        returnGeometry: "false",
        f: "json"
      }
    }, [o, n] = await qe(
      Ue(e.serviceUrl + "/query", s)
    );
    if (!n)
      return console.error(`ArcGIS batch load error: ${e.serviceUrl}`, o), Promise.reject(new Error(`ArcGIS batch load error: ${e.serviceUrl}`));
    if (!n.data || !n.data.features)
      return console.error(`ArcGIS batch load gave no data/features: ${e.serviceUrl}`), Promise.reject(new Error(`ArcGIS batch load gave no data/features: ${e.serviceUrl}`));
    let l = n.data.features;
    const a = l.length;
    if (a > 0) {
      t.loadedCount += a;
      let c;
      if (e.supportsLimit ? c = n.data.exceededTransferLimit : (e.batchSize === -1 && (e.batchSize = a), c = a >= e.batchSize), l = this.trimFeatureSetAttributes(l, e.fieldsToTrim ?? []), c) {
        e.maxId = l[a - 1].attributes[e.oidField];
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
    const s = {
      features: (await this.arcGisBatchLoad(e, t)).map((o) => o.attributes),
      oidIndex: {}
    };
    return this.oidIndexer(s, e.oidField), t.loadIsDone = !0, s;
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
    const s = {
      features: e.sourceGraphics.map((o) => xe(o).attributes).toArray(),
      oidIndex: {}
    };
    return this.oidIndexer(s, e.oidField), t.loadIsDone = !0, t.loadedCount = s.features.length, s;
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
    const i = e.sourceDataJson.fields, s = e.fieldsToTrim ?? [], n = {
      features: e.sourceDataJson.data.map((l) => {
        const a = {};
        return l.forEach((c, u) => {
          a[i[u]] = typeof c == "string" && s.includes(i[u]) ? c.trim() : c;
        }), a;
      }),
      oidIndex: {}
    };
    return this.oidIndexer(n, e.oidField), t.loadIsDone = !0, t.loadedCount = n.features.length, e.sourceDataJson = void 0, n;
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
    const [i, s] = await qe(
      Ue(e.serviceUrl + "/query", t)
    );
    if (!s)
      return console.error(`ArcGIS single feature load error: ${e.serviceUrl}`, i), Promise.reject(new Error(`ArcGIS single feature load error: ${e.serviceUrl}`));
    if (!s.data || !s.data.features)
      return console.error(`Could not locate feature ${e.oid} for layer ${e.serviceUrl}`), Promise.reject(new Error(`Could not locate feature ${e.oid} for layer ${e.serviceUrl}`));
    const o = s.data.features;
    if (o.length > 0) {
      let n, l = this.trimFeatureSetAttributes([o[0]], e.fieldsToTrim ?? [])[0];
      if (e.includeGeometry) {
        l.geometry.spatialReference = s.data.spatialReference;
        const a = ws(l.geometry);
        n = this.$iApi.geo.geom.geomEsriToRamp(a);
      } else
        n = new Be();
      return new be(n, "", l.attributes);
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
      e.forEach((s) => {
        typeof s.attributes[i] == "string" && (s.attributes[i] = s.attributes[i].trim());
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
    const i = (o, n) => o.findIndex((l) => l.name === n), s = (o, n) => {
      const l = i(t, o.name), a = i(t, n.name);
      return l === -1 && a === -1 ? i(e, o.name) - i(e, n.name) : l === -1 ? 1 : a === -1 ? -1 : l - a;
    };
    return e.slice().sort(s);
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
    let i = t.fieldInfo.filter((s) => s.trim).map((s) => s.name);
    if (e.fields.forEach((s) => {
      i.includes(s.name) && (s.trim = !0);
    }), t?.enforceOrder && t?.fieldInfo && t?.fieldInfo.length > 0 && (e.fields = this.orderFields(e.fields, t.fieldInfo), e.fieldList = t.fieldInfo.map((s) => s.name).join(",")), t.exclusiveFields) {
      t.fieldInfo.find((o) => o.name === e.oidField) || t.fieldInfo.push({ name: e.oidField }), e.fieldList = t.fieldInfo.map((o) => o.name).join(",");
      const s = t.fieldInfo;
      e.fields = e.fields.filter((o) => s.find((n) => n.name === o.name));
    } else
      e.fieldList = "*";
    t.fieldInfo.forEach((s) => {
      if (s.alias) {
        const o = e.fields.find((n) => n.name === s.name);
        o && (o.alias = s.alias);
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
      const i = e.find((s) => s.alias === t);
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
    if (e.dataFormat === Q.ESRI_RASTER)
      throw new Error("Attempting to get attributes on a raster layer.");
    const i = await t.attLoader.getAttribs();
    if (!i.features || i.features.length === 0)
      return {
        columns: [],
        rows: [],
        fields: [],
        oidField: ""
      };
    const s = e.fields.filter(
      (n) => (
        // assuming there is at least one attribute - empty attribute bundle promises should be rejected, so it never even gets this far
        // filter out fields where there is no corresponding attribute data
        Object.prototype.hasOwnProperty.call(i.features[0], xe(n).name)
      )
    ).map((n) => ({
      data: xe(n).name,
      // TODO calling this data is really unintuitive. consider global rename to fieldName, name, attribName, etc.
      title: xe(n).alias || xe(n).name
    })), o = i.features.map((n) => {
      const l = Fi({}, n);
      return l.rvInteractive = "", l.rvSymbol = e.getIcon(n[e.oidField]), l.rvUid = e.uid, l;
    });
    return s.forEach((n) => {
      if (n.data.slice(-2) === "()") {
        const l = function() {
          return this[n.data];
        }, a = n.data.slice(0, -2);
        o.forEach((c) => {
          c[a] = l;
        });
      }
    }), {
      columns: s,
      rows: o,
      fields: e.fields,
      // keep fields for reference ...
      oidField: e.oidField
      // ... keep a reference to id field ...
    };
  }
}
class is {
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
class Si {
  loadedCount;
  loadAbortFlag;
  loadIsDone;
  constructor() {
    this.loadedCount = 0, this.loadAbortFlag = !1, this.loadIsDone = !1;
  }
}
class si extends J {
  aac;
  loadPromise;
  details;
  tabularAttributesCache;
  constructor(e, t) {
    super(e), this.aac = new Si(), this.details = t;
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
    return this.loadPromise || (this.aac = new Si(), this.loadPromise = this.loadPromiseGenerator()), this.loadPromise;
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
class ss extends si {
  constructor(e, t) {
    super(e, t);
  }
  loadPromiseGenerator() {
    return this.$iApi.geo.attributes.loadArcGisServerAttributes(this.details, this.aac);
  }
}
class Da extends si {
  constructor(e, t) {
    super(e, t);
  }
  loadPromiseGenerator() {
    return this.$iApi.geo.attributes.loadGraphicsAttributes(this.details, this.aac);
  }
}
class Ga extends si {
  constructor(e, t) {
    super(e, t);
  }
  loadPromiseGenerator() {
    return this.$iApi.geo.attributes.loadCompactJsonAttributes(this.details, this.aac);
  }
}
class rs {
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
    const s = this.getGeomStore(i);
    s[e] = t;
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
class ri {
  innerRenderer;
  symbolUnits;
  defaultUnit;
  type;
  falseRenderer;
  // falseRenderer is set to true when we are creating a fake renderer to facilitate generating a legend from
  // a non-feature service, like a tile layer or imagery layer.
  constructor(e, t, i = !1) {
    this.innerRenderer = e, this.symbolUnits = [], this.falseRenderer = i, this.type = Ct.Unknown;
  }
  // this function takes a set of attributes and extracts a value that can be used to match the owner of the attributes
  // to a part of a renderer. Use `any` result as the type can vary between renderers.
  makeSearchParams(e) {
    return e;
  }
  searchRenderer(e) {
    const t = this.makeSearchParams(e), i = this.symbolUnits.find((o) => o.match(t));
    if (i)
      return i;
    if (this.defaultUnit)
      return this.defaultUnit;
    console.error(`renderer search could not find match for ${t}`);
    const s = new kt(this);
    return s.svgCode = "", s;
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
    const s = t.find((o) => o.name === e);
    return s && s.type && s.type !== "string" && (i = ""), i;
  }
  // worker function
  // corrects for any character-case discrepancy for field names in the renderer vs on the layer
  cleanFieldName(e, t) {
    if (!e)
      return e;
    let i = t.find((s) => s.name === e);
    if (i)
      return e;
    {
      const s = e.toLowerCase();
      return i = t.find((o) => o.name.toLowerCase() === s), i ? i.name : e;
    }
  }
  makeElseClause() {
    return this.falseRenderer ? "" : `(NOT (${this.symbolUnits.map((t) => t.definitionClause).join(" OR ")}))`;
  }
}
class kt {
  isDefault = !1;
  svgCode = "";
  symbol;
  definitionClause = "";
  label = "";
  parent;
  constructor(e) {
    this.parent = e, this.symbol = new jt();
  }
  match(e) {
    return !!e;
  }
}
class Ua extends ri {
  constructor(e, t) {
    super(e, t), this.type = Ct.Simple;
    const i = new kt(this);
    i.label = e.label || "", i.symbol = e.symbol, i.definitionClause = "", this.symbolUnits.push(i);
  }
}
class Ba extends ri {
  delim;
  keyFields;
  constructor(e, t, i = !1) {
    super(e, t, i), this.type = Ct.Unique, this.delim = e.fieldDelimiter || ", ";
    const s = (n) => n.replace(/'/g, "''");
    this.keyFields = [e.field, e.field2, e.field3].filter((n) => n).map((n) => this.cleanFieldName(n, t));
    const o = this.keyFields.map((n) => this.getFieldDelimiter(n, t));
    if (e.uniqueValueInfos.forEach((n) => {
      const l = new _i(this, n.value);
      if (l.label = n.label || "", l.symbol = n.symbol, !this.falseRenderer) {
        const a = l.matchValue.split(this.delim), c = this.keyFields.map(
          (u, p) => a[p] === "<Null>" ? `${u} IS NULL` : `${u} = ${o[p]}${s(a[p])}${o[p]}`
        ).join(" AND ");
        l.definitionClause = `(${c})`, l.matchValue = l.matchValue.replace(/<Null>/g, "");
      }
      this.symbolUnits.push(l);
    }), e.defaultSymbol) {
      const n = new _i(this, "");
      n.isDefault = !0, n.label = e.defaultLabel || "", n.symbol = e.defaultSymbol, n.definitionClause = this.makeElseClause(), this.defaultUnit = n;
    }
  }
  makeSearchParams(e) {
    return this.keyFields.map((t) => {
      let i = e[t] === null ? "" : e[t];
      return typeof i != "string" && (i = i.toString()), i;
    }).join(this.delim);
  }
}
class _i extends kt {
  matchValue;
  constructor(e, t) {
    super(e), typeof t == "number" ? this.matchValue = t.toString() : this.matchValue = t;
  }
  match(e) {
    return this.matchValue === e;
  }
}
class za extends ri {
  valField;
  constructor(e, t, i = !1) {
    if (super(e, t, i), this.valField = this.cleanFieldName(e.field, t), e.classBreakInfos.forEach((s, o) => {
      const n = o === 0, l = new Ii(this, s.minValue, s.maxValue, n);
      l.label = s.label || "", l.symbol = s.symbol, this.falseRenderer || (l.definitionClause = `(${this.valField} >${n ? "=" : ""}  ${s.minValue} AND ${this.valField} <= ${s.maxValue})`), this.symbolUnits.push(l);
    }), e.defaultSymbol) {
      const s = new Ii(this, 0, 0, !1);
      s.isDefault = !0, s.label = e.defaultLabel || "", s.symbol = e.defaultSymbol, s.definitionClause = this.makeElseClause(), this.defaultUnit = s;
    }
  }
  makeSearchParams(e) {
    return parseFloat(e[this.valField]);
  }
}
class Ii extends kt {
  /** min is exclusive, unless first class break */
  minValue;
  /** max is inclusive */
  maxValue;
  firstBreak;
  constructor(e, t, i, s) {
    super(e), this.minValue = t, this.maxValue = i, this.firstBreak = s;
  }
  match(e) {
    return this.minValue === this.maxValue ? this.maxValue === e : this.firstBreak ? this.minValue <= e && this.maxValue >= e : this.minValue < e && this.maxValue >= e;
  }
}
class Va extends J {
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
        return new Ua(e, t);
      case this.CLASS_BREAKS:
        return new za(e, t, i);
      case this.UNIQUE_VALUE:
        return new Ba(e, t, i);
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
    const t = Qe(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, 0, 0), i = {
      svgcode: "",
      imgHeight: "",
      imgWidth: ""
    };
    if (e) {
      const s = await this.renderSymbologyImage(e);
      if (s) {
        i.svgcode = s;
        const o = document.createElement("span");
        o.innerHTML = s;
        const n = o.firstElementChild?.lastElementChild;
        i.imgHeight = n?.getAttribute("height") || "", i.imgWidth = n?.getAttribute("width") || "";
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
   * @param {Function} conversionFunction a conversion function to wrap the supplied image into an image or an icon style symbology container
   * @param {Array} list a list of config-supplied symbology items in the form of [ { text: <String>, image: <String> }, ... ] wher `image` can be dataURL or an actual url
   * @return {Array} an array of converted symbology symbols in the form of [ { name: <String>, image: <String>, svgcode: <String> }, ... ]; items will be populated async as conversions are done
   */
  listToSymbology(e, t) {
    return t.map(({ text: s, image: o }) => {
      const n = {
        name: s,
        image: o,
        // url
        svgcode: ""
      };
      return e(o).then((l) => {
        n.svgcode = l;
      }), n;
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
    t === null && (t = Qe(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, 0, 0));
    const i = await this.$iApi.geo.shared.convertImagetoDataURL(e);
    if (i === e)
      return "";
    const { loader: s } = await this.svgDrawImage(t, i);
    return t.viewbox(0, 0, s.width, s.height), t.svg();
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
      const o = document.createElement("div");
      o.setAttribute("style", "opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"), document.body.appendChild(o), t = Qe(o).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE);
    }
    const i = await this.$iApi.geo.shared.convertImagetoDataURL(e), { image: s } = await this.svgDrawImage(t, i);
    return s.center(this.CONTAINER_CENTER, this.CONTAINER_CENTER), this.fitInto(s, this.CONTENT_IMAGE_SIZE), t.svg();
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
    const i = Qe(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE);
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
    return Qe(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).svg();
  }
  /**
   * Generate an SVG string for an ESRI symbol.
   * @private
   * @param  {Object} symbol an ESRI symbol object in JS API format
   * @return {Promise} resolves to an SVG string representing the symbol
   */
  async symbolToSvg(e) {
    const t = this, i = 1.33333, s = document.createElement("div");
    s.setAttribute("style", "opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"), document.body.appendChild(s);
    const o = Qe(s).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE), n = {
      // @ts-ignore
      path({ size: g, path: f }) {
        return o.path(f).size(g * i);
      },
      // @ts-ignore
      circle({ size: g }) {
        return o.circle(g * i);
      },
      // @ts-ignore
      cross({ size: g }) {
        return o.path("M 0,10 L 20,10 M 10,0 L 10,20").size(g * i);
      },
      // @ts-ignore
      x({ size: g }) {
        return o.path("M 0,0 L 20,20 M 20,0 L 0,20").size(g * i);
      },
      // @ts-ignore
      triangle({ size: g }) {
        return o.path("M 20,20 L 10,0 0,20 Z").size(g * i);
      },
      // @ts-ignore
      diamond({ size: g }) {
        return o.path("M 20,10 L 10,0 0,10 10,20 Z").size(g * i);
      },
      // @ts-ignore
      square({ size: g }) {
        return o.path("M 0,0 20,0 20,20 0,20 Z").size(g * i);
      }
    }, l = {
      [le.SOLID]: "none",
      // esriSLSSolid
      [le.NONE]: "none",
      // esriSLSNull
      [le.DASH]: "5.333,4",
      // esriSLSDash
      [le.DOT]: "1.333,4",
      // esriSLSDot
      [le.DASHDOT]: "5.333,4,1.333,4",
      // esriSLSDashDot
      [le.LONGDASH]: "10.666,4",
      // esriSLSLongDash
      [le.LONGDASHDOT]: "10.666,4,1.333,4",
      // esriSLSLongDashDot
      [le.LONGDASHDOTDOT]: "10.666,4,1.333,4,1.333,4",
      // esriSLSLongDashDotDot
      [le.SHORTDOT]: "1.333,1.333",
      // esriSLSShortDot
      [le.SHORTDASH]: "5.333,1.333",
      // esriSLSShortDash
      [le.SHORTDASHDOT]: "5.333,1.333,1.333,1.333",
      // esriSLSShortDashDot
      [le.SHORTDASHDOTDOT]: "5.333,1.333,1.333,1.333,1.333,1.333"
      // esriSLSShortDashDotDot
    }, a = {
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
      solid: (g) => ({
        color: g.colour,
        opacity: g.opacity
      }),
      none: () => "transparent",
      // esriSFSNull
      horizontal: (g, f) => o.pattern(5, 5, (v) => v.line(0, 5 / 2, 5, 5 / 2)).stroke(f),
      vertical: (g, f) => o.pattern(5, 5, (v) => v.line(5 / 2, 0, 5 / 2, 5)).stroke(f),
      "forward-diagonal": (g, f) => o.pattern(5, 5, (v) => {
        v.line(0, 0, 5, 5).stroke(f), v.line(0, 0, 5, 5).move(0, 5).stroke(f), v.line(0, 0, 5, 5).move(5, 0).stroke(f);
      }),
      "backward-diagonal": (g, f) => o.pattern(5, 5, (v) => {
        v.line(5, 0, 0, 5).stroke(f), v.line(5, 0, 0, 5).move(5 / 2, 5 / 2).stroke(f), v.line(5, 0, 0, 5).move(-5 / 2, -5 / 2).stroke(f);
      }),
      cross: (g, f) => o.pattern(5, 5, (v) => {
        v.line(5 / 2, 0, 5 / 2, 5).stroke(f), v.line(0, 5 / 2, 5, 5 / 2).stroke(f);
      }),
      "diagonal-cross": (g, f) => o.pattern(7, 7, (v) => {
        v.line(0, 0, 7, 7).stroke(f), v.line(7, 0, 0, 7).stroke(f);
      })
    }, p = {
      "simple-marker"() {
        const g = b(e.color);
        e.outline = e.outline || c;
        const f = b(e.outline.color), w = d({
          color: f.colour,
          opacity: f.opacity,
          width: e.outline.width,
          // @ts-ignore
          dasharray: l[e.outline.style]
        }), v = n[e.style](e).fill({
          color: g.colour,
          opacity: g.opacity
        }).stroke(w).center(t.CONTAINER_CENTER, t.CONTAINER_CENTER).rotate(e.angle || 0);
        t.fitInto(v, t.CONTENT_SIZE);
      },
      "simple-line"() {
        const g = b(e.color), f = d({
          color: g.colour,
          opacity: g.opacity,
          width: e.width,
          linecap: "butt",
          // @ts-ignore
          dasharray: l[e.style]
        }), w = t.CONTENT_PADDING, v = t.CONTAINER_SIZE - t.CONTENT_PADDING;
        o.line(w, w, v, v).stroke(f);
      },
      // cartographic line style. internet is hinting that it is not supported on JS API
      esriCLS() {
        this["simple-line"]();
      },
      "simple-fill"() {
        const g = b(e.color), f = d({
          color: g.colour,
          opacity: g.opacity
        }), w = u[e.style](g, f);
        e.outline = e.outline || c;
        const v = b(e.outline.color), R = d({
          color: v.colour,
          opacity: v.opacity,
          width: e.outline.width,
          linecap: "butt",
          // @ts-ignore
          dasharray: l[e.outline.style]
        });
        o.rect(t.CONTENT_SIZE, t.CONTENT_SIZE).center(t.CONTAINER_CENTER, t.CONTAINER_CENTER).fill(w).stroke(R);
      },
      text() {
        console.error("no support for feature service legend of text symbols");
      },
      "picture-fill"() {
        const g = e.imageData ? `data:${e.contentType};base64,${e.imageData}` : e.url, f = e.width * e.xscale, w = e.height * e.yscale;
        e.outline = e.outline || c;
        const v = b(e.outline.color), R = d({
          color: v.colour,
          opacity: v.opacity,
          width: e.outline.width,
          // @ts-ignore
          dasharray: l[e.outline.style]
        });
        return t.$iApi.geo.shared.convertImagetoDataURL(g).then(($) => {
          const W = o.pattern(
            f,
            w,
            (de) => (
              // there was a 4th argument 'true' here before, but maximum 3 are accepted. may need to look into this
              de.image($, f, w)
            )
          );
          o.rect(t.CONTENT_SIZE, t.CONTENT_SIZE).center(t.CONTAINER_CENTER, t.CONTAINER_CENTER).fill(W).stroke(R);
        });
      },
      "picture-marker"() {
        const g = e.source, f = g && g.imageData ? `data:${g.contentType};base64,${g.imageData}` : e.url;
        return t.$iApi.geo.shared.convertImagetoDataURL(f).then((v) => t.svgDrawImage(o, v)).then(({ image: v }) => {
          v.center(t.CONTAINER_CENTER, t.CONTAINER_CENTER).rotate(e.angle || 0), t.fitInto(v, t.CONTENT_IMAGE_SIZE);
        });
      }
    };
    try {
      return await Promise.resolve(p[e.type]()), document.body.removeChild(s), o.svg();
    } catch (g) {
      return console.error(g), this.generateBlankSymbology();
    }
    function d(g) {
      return Object.assign({}, a, g);
    }
    function b(g) {
      return g ? {
        colour: `rgb(${g.r},${g.g},${g.b})`,
        opacity: g.a
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
  async svgDrawImage(e, t, i = 0, s = 0, o = !0) {
    return new Promise((n, l) => {
      const a = e.image(t, i, s, o).loaded((c) => n({ image: a, loader: c })).error((c) => {
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
    const i = e.node.getBoundingClientRect(), s = t / Math.max(i.width, i.height);
    s < 1 && e.scale(s);
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
      t = i.map((s) => [s]);
    else {
      const s = /* @__PURE__ */ new Map();
      i.forEach((o) => {
        const n = s.get(o.label);
        n ? n.push(o) : s.set(o.label, [o]);
      }), t = [], s.forEach((o) => t.push(o));
    }
    return t.map((s) => {
      const o = s[0], n = {
        uid: this.$iApi.geo.shared.generateUUID(),
        label: o.label || "",
        definitionClause: s.length === 1 ? o.definitionClause : `(${s.map((l) => l.definitionClause).join(" OR ")})`,
        svgcode: "",
        // TODO is '' ok? maybe we need white square svg? or some loading icon?
        esriStandard: !0,
        // is ESRI standard symbology
        visibility: !0,
        lastVisbility: !0,
        drawPromise: this.symbolToSvg(o.symbol).then((l) => {
          n.svgcode = l, s.forEach((a) => {
            a.svgCode = l;
          });
        })
      };
      return n;
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
    }, i = { layers: [] }, [s, o] = await qe(Ue(`${e}/legend`, t));
    return o ? o.data ? o.data : (console.error(`Error loading legend data for ${e}`), i) : (console.error(`Error loading legend for ${e}`, s), i);
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
   * @returns {Object} a fake unique value renderer based off the legend
   *
   */
  mapServerLegendToRenderer(e, t) {
    const i = e.layers.find((o) => o.layerId === t);
    let s;
    if (typeof i < "u")
      return s = {
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
      }, this.makeRenderer(at(s), [], !0);
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
   * @returns {Object} a fake unique value renderer based off the legend
   */
  mapServerLegendToRendererAll(e) {
    const t = e.layers.map(
      (s) => s.legend.map((o) => ({
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
    };
    return this.makeRenderer(at(i), [], !0);
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
    let s, o;
    return typeof t > "u" ? (o = 0, s = this.mapServerLegendToRendererAll(i)) : (o = parseInt(t), s = this.mapServerLegendToRenderer(i, o)), this.rendererToLegend(s);
  }
}
class ja extends J {
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
    const t = new ui();
    t.returnGeometry = !1, e.filterSql && (t.where = e.filterSql), e.filterGeometry && (t.geometry = await this.queryGeometryHelper(
      e.filterGeometry,
      !1,
      this.$iApi.geo.map.getScale(),
      e.sourceSR
    ), t.spatialRelationship = "intersects");
    const i = await $s(e.url, t);
    return Array.isArray(i) ? i : [];
  }
  /**
   * Gets an array of graphics from a locally stored feature layer (file, geojson) that satisfy a query
   *
   * @param options contains properties that define the query and specificy request particulars.
   * @returns resolves with array of graphic result objects.
   */
  async geoJsonQuery(e) {
    const t = new ui();
    if (t.returnGeometry = !!e.includeGeometry, t.outFields = ["*"], e.filterGeometry && (t.geometry = await this.queryGeometryHelper(e.filterGeometry, !0), t.spatialRelationship = "intersects"), e.filterSql && (t.where = e.filterSql), e.filterOIDs && (t.objectIds = e.filterOIDs), await e.layer.loadPromise(), !e.layer.esriLayer)
      throw new Error("file layer being queried contains no ESRI layer");
    return (await e.layer.esriLayer.queryFeatures(t)).features.map((s, o) => {
      let n;
      return t.returnGeometry ? n = this.$iApi.geo.geom.geomEsriToRamp(s.geometry, `queryResult${o}`) : n = new Be(), new be(n, "", s.attributes);
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
  async queryGeometryHelper(e, t, i, s) {
    return !t && e.type === T.EXTENT && s && !s.isEqual(e.sr) && !(i && i > 2e7 && e.sr.wkid === 3978 && s.wkid === 4326) ? (await this.$iApi.geo.proj.projectExtent(s, e)).toESRI() : e.toESRI();
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
    const i = this.$iApi.geo.map, s = i.getExtent(), o = t * (s.xmax - s.xmin) / i.getPixelWidth();
    return new F(
      "ze_buffer",
      [e.x - o, e.y - o],
      [e.x + o, e.y + o],
      e.sr
    );
  }
}
class qa extends J {
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
    super(e), this.geom = nt.geom, this.proj = nt.proj, this.shared = nt.sharedUtils, this.map = new ra(e), this.layer = new va(e), this.attributes = new Fa(e), this.query = new ja(e), this.symbology = new Va(e), Array.isArray(dt.request.interceptors) || (dt.request.interceptors = []), dt.request.interceptors.push({
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
    dt.request.proxyUrl = e;
  }
  /**
   * Read the current proxy setting, returns url string, empty string if no proxy
   */
  get proxy() {
    return dt.request.proxyUrl || "";
  }
}
const Wa = /* @__PURE__ */ Object.assign({ "../fixtures/appbar/index.ts": () => import("./index-9RLKW6NA.js"), "../fixtures/areas-of-interest/index.ts": () => import("./index-BTDB7AC7.js"), "../fixtures/basemap/index.ts": () => import("./index-WZ-l1D3Q.js"), "../fixtures/crosshairs/index.ts": () => import("./index-DmmqccCI.js"), "../fixtures/details/index.ts": () => import("./index-Crr6jBwk.js"), "../fixtures/export-footnote/index.ts": () => import("./index-D1SUCQmS.js"), "../fixtures/export-legend/index.ts": () => import("./index-aEogG9SP.js"), "../fixtures/export-map/index.ts": () => import("./index-DVwih5i9.js"), "../fixtures/export-northarrow/index.ts": () => import("./index-Dftm8Rti.js"), "../fixtures/export-scalebar/index.ts": () => import("./index-UABKBTeV.js"), "../fixtures/export-timestamp/index.ts": () => import("./index-DSiUEP74.js"), "../fixtures/export-title/index.ts": () => import("./index-iOjgCh6-.js"), "../fixtures/export/index.ts": () => import("./index-bctwDn5G.js"), "../fixtures/extentguard/index.ts": () => import("./index-BeYb9nqZ.js"), "../fixtures/gazebo/index.ts": () => import("./index-s607bCKs.js"), "../fixtures/geosearch/index.ts": () => import("./index-CaUZCSCm.js"), "../fixtures/grid/index.ts": () => import("./index-CwWBxm8K.js"), "../fixtures/help/index.ts": () => import("./index-xm-uTKKL.js"), "../fixtures/hilight/index.ts": () => import("./index-SIYmk2c2.js"), "../fixtures/layer-reorder/index.ts": () => import("./index-BKSBMdBg.js"), "../fixtures/legend/index.ts": () => import("./index-CKQ6-KmB.js"), "../fixtures/mapnav/index.ts": () => import("./index-BL3OSSJF.js"), "../fixtures/metadata/index.ts": () => import("./index-947r8yCQ.js"), "../fixtures/northarrow/index.ts": () => import("./index-DNm2Mc46.js"), "../fixtures/overviewmap/index.ts": () => import("./index-dKdjmR1v.js"), "../fixtures/panguard/index.ts": () => import("./index-D7g0tISU.js"), "../fixtures/scrollguard/index.ts": () => import("./index-DACtQrOY.js"), "../fixtures/settings/index.ts": () => import("./index-BOeto6tx.js"), "../fixtures/snowman/index.ts": () => import("./index-BvPYPcD4.js"), "../fixtures/wizard/index.ts": () => import("./index-Bk7eEbY-.js") });
class Ha extends J {
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
    return e in ge(this.$vApp.$pinia).items;
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
    if (e in ge(this.$vApp.$pinia).items)
      return this.get(e);
    if (t) {
      if (typeof t != "function")
        throw new Error("malformed fixture constructor");
      i = oi.updateBaseToInstance(new t(), e, this.$iApi);
    } else {
      const s = (await Wa[`../fixtures/${e}/index.ts`]()).default;
      i = new s(e, this.$iApi);
    }
    return ge(this.$vApp.$pinia).addFixture(i), this.$iApi.event.emit(E.FIXTURE_ADDED, i), this.$iApi.geo.map.created && i.initialized?.(), i;
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
    return ge(this.$vApp.$pinia).removeFixture(t), this.$iApi.event.emit(E.FIXTURE_REMOVED, t), t;
  }
  // See https://github.com/ramp4-pcar4/ramp4-pcar4/issues/2296#issuecomment-2262964384 for background of flush and restore.
  /**
   * Remove every fixture whose persist flag is set to false from the R4MP instance.
   * For all other fixtures, simply call their removed hook.
   */
  flush() {
    const e = ge(this.$vApp.$pinia);
    Object.keys(e.items).forEach((i) => {
      const s = this.get(i);
      s?.persist && typeof s?.removed == "function" ? s.removed() : s && this.remove(i);
    });
  }
  /**
   * Restores every remaining fixture by calling its added/initialized hooks.
   */
  restore() {
    const e = ge(this.$vApp.$pinia);
    Object.keys(e.items).forEach((i) => {
      const s = e.items[i];
      typeof s.added == "function" && s.added(), this.$iApi.geo.map.created && typeof s.initialized == "function" && s.initialized();
    });
  }
  get(e) {
    const t = [];
    typeof e == "string" ? t.push(e) : Array.isArray(e) ? t.push(...e) : t.push(e.id);
    const i = t.map((s) => {
      const o = ge(this.$vApp.$pinia).items[s];
      if (o)
        return o;
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
    const t = ge(this.$vApp.$pinia), i = Array.isArray(e) ? e : [e];
    i.forEach((o) => {
      t.loadPromises[o] === void 0 && t.addLoadPromise(o);
    });
    const s = t.getLoadPromises(i);
    return Array.isArray(e) ? Promise.all(s) : s[0];
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
    (!Array.isArray(e) || e.length === 0) && (e = [
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
    const t = ue(this.$vApp.$pinia);
    return t.startingFixtures = e, Promise.all(e.map((i) => this.add(i)));
  }
}
class oi extends J {
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
    const s = new oi(t, i);
    return Object.defineProperties(e, {
      id: { value: t },
      $iApi: { value: i },
      persist: { value: e.persist ?? !0 },
      $vApp: {
        get() {
          return s.$vApp;
        }
      },
      remove: { value: s.remove },
      extend: { value: s.extend },
      config: {
        get() {
          return s.config;
        }
      },
      mount: { value: s.mount }
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
    }), s = Ci(i), { el: o } = this.mount(i, {
      props: { ...t.propsData },
      app: s
    });
    return o;
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
  mount(e, { props: t, children: i, element: s, app: o } = {}) {
    let n = s, l = ms(e, t, i);
    return o && o._context && (l.appContext = o._context), n ? Dt(l, n) : Dt(l, n = document.createElement("div")), { vNode: l, destroy: () => {
      n && Dt(null, n), n = null, l = null;
    }, el: n };
  }
  /**
   * Returns the fixture config section (JSON) taken from the global config.
   *
   * @readonly
   * @type {*}
   * @memberof FixtureInstance
   */
  get config() {
    return ue(this.$vApp.$pinia).config.fixtures[this.id];
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
    const e = {}, t = (i, s = void 0) => {
      if (i.fixtures && i.fixtures[this.id] !== void 0) {
        let o = i.id;
        s !== void 0 && (o = `${s.id}-${i.index}`), e[o] = i.fixtures[this.id];
      }
      i.sublayers && i.sublayers.forEach((o) => t(o, i));
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
      typeof this.config?.panelWidth == "number" && (this.config.panelWidth = {
        default: this.config?.panelWidth
      }), this.config.panelWidth.default && e.forEach((i) => {
        t[i] = this.config.panelWidth.default;
      });
      for (const i in this.config.panelWidth)
        i != "default" && (t[i] = this.config.panelWidth[i]);
      for (const i in t) {
        const s = this.$iApi.panel.get(i);
        this.$iApi.panel.setStyle(s, {
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
      const t = We(this.$vApp.$pinia), i = !!this.config.panelTeleport.target;
      e.forEach((s) => {
        t.items[s].teleport = i ? this.config.panelTeleport : this.config.panelTeleport[s], t.items[s].style.width = "100%";
      });
    }
  }
}
class Ya extends J {
  panelStore = We(this.$vApp.$pinia);
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
    const s = this.get(e), o = i ? s.screens[i] : Object.values(s.screens)[0];
    if (ji(o))
      for (const n in t)
        o[n].innerHTML = t[n] instanceof HTMLElement ? t[n].outerHTML : t[n];
    else
      console.error("Screen must be an HTML object");
  }
  /**
   * Helper for `registerHTML()`. Creates and returns the `PanelConfigSet` required to register the HTML panel
   *
   * @param {HTMLPanelInstance} htmlPanel a `HTMLPanelInstance` object, excluding its `options` (if it exists), corresponding
   * to the new html panel
   * @returns {PanelConfigSet} The `PanelConfigSet` corresponding to the panel that is to be created
   * @memberof PanelAPI
   */
  registerHTMLConfig(e) {
    for (const i in e.content)
      if (typeof e.content[i] == "string") {
        const s = document.createElement("div");
        s.innerHTML = e.content[i], e.content[i] = s;
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
      return console.error("panel already exist"), t;
    const i = this.registerHTMLConfig(e);
    return this.register(i, e.options);
  }
  register(e, t) {
    const i = Ja(e) ? { [e.id]: e.config } : e;
    if (t) {
      const o = t.i18n || {}, n = this.$iApi.$i18n;
      Object.entries(o.messages || {}).forEach((l) => n.mergeLocaleMessage(...l)), Object.entries(o.dateTimeFormats || {}).forEach((l) => n.mergeDateTimeFormat(...l)), Object.entries(o.numberFormats || {}).forEach((l) => n.mergeNumberFormat(...l));
    }
    const s = Object.entries(i).reduce((o, [n, l]) => (o.push(new wt(this.$iApi, n, l)), o), []);
    return s.forEach((o) => this.panelStore.registerPanel(o)), s.length === 1 ? s[0] : s.reduce((o, n) => (o[n.id] = n, o), {});
  }
  /**
   * Provides a promise that resolves when the panel(s) have finished registration.
   *
   * @param {(string | string[])} panelId the panel ID(s) for which the promise is requested
   * @memberof PanelAPI
   */
  async isRegistered(e) {
    const t = Array.isArray(e) ? e : [e];
    t.forEach((s) => {
      this.panelStore.regPromises[s] === void 0 && this.panelStore.addRegPromise(s);
    });
    const i = this.panelStore.getRegPromises(t);
    return Array.isArray(e) ? Promise.all(i) : i[0];
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
    let t, i, s;
    if (typeof e == "string" || e instanceof wt ? t = this.get(e) : (t = this.get(e.id), { screen: i, props: s } = e), !t)
      return t;
    if (t.isOpen && !t.isVisible)
      t.minimize();
    else if (t.isOpen)
      return t;
    return i || (t.route && !s ? { screen: i, props: s } = t.route : i = Object.keys(t.screens).pop()), this.show(t, { screen: i, props: s }) ? (this.panelStore.openPanel(t), this.$iApi.updateAlert(
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
    return typeof e == "string" || e instanceof wt ? i = this.get(e) : i = this.get(e.id), i && (t = typeof t < "u" ? t : !i.isVisible, t !== i.isVisible && (t ? this.open(e) : this.close(i)), i);
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
    return typeof e == "string" || e instanceof wt ? i = this.get(e) : i = this.get(e.id), i && (t = typeof t < "u" ? t : !i.isVisible, t !== i.isVisible && (t ? this.open(i) : this.minimize(i)), i);
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
        const s = Object.keys(i.screens[t.screen]?.props).filter((n) => n !== "panel"), o = t.props ? Object.keys(t.props) : [];
        for (let n = 0; n < s.length; n++)
          if (!o.includes(s[n]) && i.screens[t.screen].props[s[n]].required)
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
    const s = this.get(e);
    return s && (this.panelStore.items[s.id].style = i ? t : { ...s.style, ...t }, s);
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
function Ja(r) {
  return r.id !== void 0 && typeof r.id == "string" && r.config !== void 0;
}
const Za = {};
function Ka(r, e) {
  const t = Z("panel-screen");
  return y(), j(t, {
    header: !1,
    class: "screen-spinner"
  }, {
    content: X(() => e[0] || (e[0] = [
      m("div", { class: "loader" }, null, -1)
    ])),
    _: 1
  });
}
const Qa = /* @__PURE__ */ Me(Za, [["render", Ka], ["__scopeId", "data-v-a3c61802"]]), Xa = /* @__PURE__ */ Object.assign({ "../fixtures/areas-of-interest/screen.vue": () => import("./screen-sHmgFYMx.js"), "../fixtures/basemap/screen.vue": () => import("./screen-C8LxGt1k.js"), "../fixtures/export/screen.vue": () => import("./screen-5bt6fouH.js"), "../fixtures/geosearch/screen.vue": () => import("./screen-BCo7lqzd.js"), "../fixtures/grid/screen.vue": () => import("./screen-CBc8v-W8.js"), "../fixtures/help/screen.vue": () => import("./screen-DmwilWh3.js"), "../fixtures/layer-reorder/screen.vue": () => import("./screen-j9sFkyI5.js"), "../fixtures/legend/screen.vue": () => import("./screen-CffD13yc.js"), "../fixtures/metadata/screen.vue": () => import("./screen-QznGBKcL.js"), "../fixtures/settings/screen.vue": () => import("./screen-B7X_W8yX.js"), "../fixtures/wizard/screen.vue": () => import("./screen-ZEXHBFZO.js") });
class wt extends J {
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
    if (Qs(t) || Ks(t))
      i = t, this.loadedScreens.push(e);
    else if (ji(t))
      i = {
        template: `<panel-screen :panel="this" :screenId="'${e}'">
                           </panel-screen>`
      };
    else {
      let s;
      typeof t == "string" ? s = Xa[`../fixtures/${t}`]() : s = t();
      const o = new Promise((n, l) => {
        s.then((a) => {
          this.loadedScreens.push(e), n(Xs(a) ? a.default : a);
        }), s.catch((a) => l(a));
      });
      i = gs({
        // The component to load (should be a Promise)
        loader: () => o,
        // A component to use while the async component is loading
        loadingComponent: Qa,
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
function el(r) {
  const e = {};
  (Array.isArray(r) ? r : [r]).forEach((n) => {
    n.language || (console.warn("RAMP2 config with no language supplied. Defaulting to English"), n.language = "en");
    const l = tl(n);
    e[n.language] = l;
  });
  const i = Object.entries(e).map((n) => {
    const l = n[1].fixturesEnabled;
    return delete n[1].fixturesEnabled, l;
  });
  let s = !1;
  const o = i.reduce(
    (n, l) => n.filter((a) => {
      const c = l.includes(a);
      return s = s || !c, c;
    })
  );
  return s && console.warn(
    "Configs attempted to load different sets of fixtures. Only common fixtures will be loaded (all configs must load the same fixtures)."
  ), o.push("grid", "crosshairs", "scrollguard", "panguard", "wizard", "layer-reorder", "details"), {
    startingFixtures: o,
    configs: e
  };
}
function tl(r) {
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
  return sl(r.services, e), il(r.map, e), rl(r.ui, e), r.plugins && ol(r.plugins, e), e;
}
function il(r, e) {
  if (r.layers && r.layers.forEach((t) => {
    e.layers.unshift(os(t));
  }), r.initialBasemapId && (e.map.initialBasemapId = r.initialBasemapId), r.components) {
    if (r.components.geoSearch && (r.components.geoSearch.enabled && e.fixturesEnabled.push("geosearch"), typeof r.components.geoSearch.showGraphic < "u" && console.warn(
      "showGraphic property provided in geoSearch map component cannot be mapped and will be skipped."
    ), typeof r.components.geoSearch.showInfo < "u" && console.warn(
      "showInfo property provided in geoSearch map component cannot be mapped and will be skipped."
    )), r.components.overviewMap && r.components.overviewMap.enabled && (e.fixtures.overviewmap || (e.fixtures.overviewmap = {
      basemaps: {}
    }, e.fixturesEnabled.push("overviewmap")), e.fixtures.overviewmap.startMinimized = !r.components.overviewMap.initiallyExpanded, e.fixtures.overviewmap.expandFactor = r.components.overviewMap.expandFactor ?? 1.5), r.components.northArrow && r.components.northArrow.enabled) {
      const t = {};
      r.components.northArrow.arrowIcon && (t.arrowIcon = r.components.northArrow.arrowIcon), r.components.northArrow.poleIcon && (t.poleIcon = r.components.northArrow.poleIcon), t && (e.fixtures.northarrow = t, e.fixturesEnabled.push("northarrow"));
    }
    if (r.components.scaleBar && r.components.scaleBar.enabled) {
      switch (e.map.caption = {
        mapCoords: {
          disabled: !1
        },
        scaleBar: {
          disabled: !1,
          imperialScale: r?.components?.scaleBar?.scalebarUnit === "english" || r?.components?.scaleBar?.scalebarUnit === "dual" && Math.floor(Math.random() * 2) === 0
        }
      }, r.components?.mouseInfo?.spatialReference?.wkid) {
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
      r.components.scaleBar.attachTo && console.warn(
        "attachTo property provided in scaleBar map component cannot be mapped and will be skipped."
      );
    }
    r.components.basemap && r.components.basemap.enabled && e.fixturesEnabled.push("basemap");
  }
  r.extentSets && (e.map.extentSets = [], r.extentSets.forEach((t) => {
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
  })), r.lodSets && (e.map.lodSets = r.lodSets), r.tileSchemas && (e.map.tileSchemas = [], r.tileSchemas.forEach((t) => {
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
  })), r.baseMaps && (e.map.basemaps = [], r.baseMaps.forEach((t) => {
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
    }, t.attribution.text && (i.attribution.text.disabled = !t.attribution.text.enabled, i.attribution.text.value = t.attribution.text.value), t.attribution.logo && (i.attribution.logo.disabled = !t.attribution.logo.enabled, i.attribution.logo.altText = t.attribution.logo.altText, i.attribution.logo.value = t.attribution.logo.value, i.attribution.logo.link = t.attribution.logo.link)), t.layers.forEach((s, o) => {
      const n = {
        id: s.id || `${t.id}-${o}`,
        layerType: s.layerType === "esriDynamic" ? x.MAPIMAGE : x.TILE,
        url: s.url,
        opacity: s.opacity ?? 1
      };
      i.layers.push(n);
    }), e.map.basemaps.push(i);
  })), r.legend && (e.fixturesEnabled.push("legend"), r.legend.type === "autopopulate" ? (e.fixtures.legend = {
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
      t.sublayers.forEach((s) => {
        const o = {
          layerId: t.id
        };
        s.name && (o.name = s.name), s.controls && (o.controls = s.controls), s.disabledControls && (o.disabledControls = s.disabledControls), t.type === "esri-map-image" ? o.sublayerIndex = s.index : (o.sublayerId = s.id, console.warn(
          `sublayerId property defined in legend entry ${o.layerId} is currently not supported.`
        )), i.children.push(o);
      }), e.fixtures.legend.root.children.push(i);
    } else {
      const i = {
        layerId: t.id
      };
      t.controls && (i.controls = t.controls), t.disabledControls && (i.disabledControls = t.disabledControls), e.fixtures.legend.root.children.push(i);
    }
  })) : e.fixtures.legend = {
    root: Jt(r.legend.root)
  });
}
function Jt(r) {
  const e = { name: r.name, children: [] };
  typeof r.hidden < "u" && (e.hidden = r.hidden), typeof r.expanded < "u" && (e.expanded = r.expanded);
  const t = ["identify", "opacity", "reload", "remove", "settings", "symbology", "visibility"];
  return r.controls && r.controls.length > 0 && (e.controls = lt(r.controls, t), r.controls.includes("visibility") && e.controls.push("visibilityButton"), (r.controls.length !== 1 || r.controls[0] !== "visibility") && console.warn(
    "Legend entry groups currently support only the visibility control. All other controls are currently not supported."
  ), e.controls.push("expandButton")), r.disabledControls && r.disabledControls.length > 0 && (e.disabledControls = lt(r.disabledControls, t), r.disabledControls.includes("visibility") && e.disabledControls.push("visibilityButton"), (r.disabledControls.length !== 1 || r.disabledControls[0] !== "visibility") && console.warn(
    "Legend entry groups currently support only the visibility control. All other controls are currently not supported."
  )), r.children.forEach((i) => {
    if (i.layerId)
      e.children.push(Ti(i));
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
      const s = {
        name: "Visibility Set",
        children: [],
        exclusive: !0
      };
      typeof i.collapse < "u" && console.warn(
        `collapse property in visibilitySet in children list of legend entry group ${e.name} cannot be mapped and will be skipped.`
      ), i.exclusiveVisibility.forEach((o) => {
        o.layerId ? s.children.push(Ti(o)) : s.children.push(Jt(o));
      }), e.children.push(s);
    } else
      e.children.push(Jt(i));
  }), e;
}
function Ti(r) {
  const e = r, t = [
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
  return r.controls && r.controls.length > 0 && (e.layerControls = lt(r.controls, t), e.layerControls.push("symbology")), r.disabledControls && r.disabledControls.length > 0 && (e.disabledLayerControls = lt(r.disabledControls, t)), r.controlledIds && (console.warn(
    `controlledIds property defined in legend entry ${r.layerId} cannot be mapped and will be skipped.`
  ), delete e.controlledIds), r.entryIndex && (e.sublayerIndex = r.entryIndex, delete r.entryIndex), r.entryId && console.warn(
    `entryId property defined in legend entry ${r.layerId} cannot be mapped and will be skipped.`
  ), e;
}
function os(r) {
  const e = Vt(r);
  switch (e.id = r.id, e.url = r.url, r.refreshInterval && (e.refreshInterval = r.refreshInterval, console.warn("Property refreshInterval in layer is currently not supported.")), r.expectedResponseTime && (e.expectedLoadTime = r.expectedResponseTime), r.metadataUrl && (e.metadata = {
    url: r.metadataUrl
  }), r.catalogueUrl && (e.catalogueUrl = r.catalogueUrl), typeof r.enableStructuredDelete < "u" && console.warn(
    `enableStructuredDelete property provided in layer ${r.id} cannot be mapped and will be skipped.`
  ), r.tooltipField && (e.tooltipField = r.tooltipField), r.tolerance && (e.mouseTolerance = r.tolerance, r.layerType === "esriDynamic" && (e.touchTolerance = r.tolerance + 10)), r.customRenderer && (e.customRenderer = r.customRenderer), r.layerType) {
    case "esriDynamic":
      e.layerType = "esri-map-image", typeof r.singleEntryCollapse < "u" && (e.singleEntryCollapse = r.singleEntryCollapse), r.imageFormat && (e.imageFormat = r.imageFormat), r.layerEntries && (e.sublayers = [], r.layerEntries.forEach((t) => {
        const i = Vt(t);
        i.index = t.index, e.sublayers.push(i);
      }));
      break;
    case "esriFeature":
      e.layerType = "esri-feature", r.fileType && (e.layerType = r.fileType === "shapefile" ? "file-shape" : `file-${r.fileType}`, r.colour && (e.colour = r.colour), r.latField && (e.latField = r.latField), r.longField && (e.longField = r.longField));
      break;
    case "ogcWfs":
      e.layerType = "ogc-wfs", r.colour && (e.colour = r.colour), typeof r.xyInAttribs < "u" && (e.xyInAttribs = r.xyInAttribs);
      break;
    case "ogcWms":
      e.layerType = "ogc-wms", r.suppressGetCapabilities && console.warn(
        `suppressGetCapabilities property provided in layer ${r.id} cannot be mapped and will be skipped.`
      ), r.featureInfoMimeType && (r.featureInfoMimeType === "text/html;fgpv=summary" ? e.featureInfoMimeType = "text/html" : e.featureInfoMimeType = r.featureInfoMimeType), r.legendMimeType && console.warn(
        `legendMimeType property provided in layer ${r.id} cannot be mapped and will be skipped.`
      ), r.layerEntries && (e.sublayers = [], r.layerEntries.forEach((t) => {
        const i = Vt(t);
        i.id = t.id, t.currentStyle && (i.currentStyle = t.currentStyle, console.warn(
          `currentStyle property provided in layer entry ${t.id} of layer ${r.id} is currently not supported.`
        )), t.allStyles && console.warn(
          `allStyles property provided in layer entry ${t.id} of layer ${r.id} cannot be mapped and will be skipped.`
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
      console.warn(`Unhandled layer type in ramp 2 config ${r.layerType}`);
  }
  return r.details && console.warn(`Details config provided in layer ${r.id} cannot be mapped and will be skipped.`), e;
}
function Vt(r) {
  const e = {};
  r.name && (e.name = r.name), r.nameField && (e.nameField = r.nameField), r.extent && (e.extent = r.extent);
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
  return r.controls && r.controls.length > 0 && (e.controls = lt(r.controls, t), e.controls.push("symbology")), r.disabledControls && r.disabledControls.length > 0 && (e.disabledControls = lt(r.disabledControls, t)), r.state && (e.state = {
    opacity: r.state.opacity ?? 1,
    visibility: r.state.visibility ?? !0,
    identify: r.state.query ?? !0,
    hovertips: r.state.hovertips ?? !0
  }, typeof r.state.snapshot < "u" && console.warn(
    `snapshot property provided in initialLayer settings in layer ${r.id} cannot be mapped and will be skipped.`
  ), typeof r.state.boundingBox < "u" && console.warn(
    `boundingBox property provided in initialLayer settings in layer ${r.id} cannot be mapped and will be skipped.`
  )), typeof r.stateOnly < "u" && (e.cosmetic = r.stateOnly), r.initialFilteredQuery && (e.initialFilteredQuery = r.initialFilteredQuery), nl(r, e), (typeof r.toggleSymbology < "u" || r.table) && (e.fixtures = {}, typeof r.toggleSymbology < "u" && (e.fixtures.legend = {
    toggleSymbology: r.toggleSymbology
  }), r.table && (e.fixtures.grid = {}, r.table.title && (e.fixtures.grid.title = r.table.title), r.table.description && console.warn(
    `description property provided in table property in layer ${r.id} cannot be mapped and will be skipped.`
  ), typeof r.table.maximize < "u" && console.warn(
    `maximize property provided in table property in layer ${r.id} cannot be mapped and will be skipped.`
  ), r.table.search && (r.table.search.enabled && (e.fixtures.grid.search = r.table.search.enabled), r.table.search.value && (e.fixtures.grid.searchFilter = r.table.search.value)), typeof r.table.lazyFilter < "u" && console.warn(
    `lazyFilter property provided in table property in layer ${r.id} cannot be mapped and will be skipped.`
  ), typeof r.table.applyMap < "u" && (e.fixtures.grid.applyMap = r.table.applyMap), typeof r.table.showFilter < "u" && (e.fixtures.grid.showFilter = r.table.showFilter), typeof r.table.filterByExtent < "u" && (e.fixtures.grid.filterByExtent = r.table.filterByExtent), typeof r.table.searchStrictMatch < "u" && console.warn(
    `searchStrictMatch property provided in table property in layer ${r.id} cannot be mapped and will be skipped.`
  ), typeof r.table.printEnabled < "u" && console.warn(
    `printEnabled property provided in table property in layer ${r.id} cannot be mapped and will be skipped.`
  ), r.table.columns && (e.fixtures.grid.columns = [], r.table.columns.forEach((i) => {
    const s = {
      field: i.data
    };
    i.title && (s.title = i.title), i.description && console.warn(
      `description property provided in column property in table property in layer ${r.id} cannot be mapped and will be skipped.`
    ), typeof i.visible < "u" && (s.visible = i.visible), i.width && (s.width = i.width), i.sort && (s.sort = i.sort), typeof i.searchable < "u" && (s.searchable = i.searchable), i.filter && (s.filter = i.filter), e.fixtures.grid.columns.push(s);
  })))), e;
}
function lt(r, e) {
  const t = [];
  return r.forEach((i) => {
    e.includes("identify") && i === "query" ? t.push("identify") : e.includes("datatable") && i === "data" ? t.push("datatable") : e.includes(i) ? t.push(i) : console.warn(`Ignored invalid control: ${i}`);
  }), t;
}
function sl(r, e) {
  if (!r)
    return;
  r.search && (e.fixtures.geosearch = {}, e.fixtures.geosearch.serviceUrls = {
    geoNames: r.search.serviceUrls.geoNames,
    geoLocation: r.search.serviceUrls.geoLocation,
    geoProvince: r.search.serviceUrls.provinces,
    geoTypes: r.search.serviceUrls.types
  }, r.search.serviceUrls.geoSuggest && console.warn(
    "geoSuggest property provided in serviceUrls of search service cannot be mapped and will be skipped."
  ), r.search.settings && (e.fixtures.geosearch.settings = r.search.settings), r.search.disabledSearches && (e.fixtures.geosearch.settings.disabledSearchTypes = r.search.disabledSearches.filter(
    (i) => i !== "SCALE"
  ))), r.export && (e.fixtures.export || (e.fixtures.export = {}, e.fixturesEnabled.push("export")), r.export.title && (e.fixtures.export.title = {
    selected: r.export.title.isSelected ?? !0,
    selectable: r.export.title.isSelectable ?? !0,
    value: r.export.title.value ?? "RAMP-Map / PCAR-Carte"
  }), r.export.map && (e.fixtures.export.map = {
    selected: r.export.map.isSelected ?? !0,
    selectable: r.export.map.isSelectable ?? !0
  }, r.export.map.value && console.warn("value property provided in map export component cannot be mapped and will be skipped.")), r.export.mapElements && (e.fixtures.export.mapElements = {
    selected: r.export.mapElements.isSelected ?? !0,
    selectable: r.export.mapElements.isSelectable ?? !0
  }, r.export.mapElements.value && console.warn(
    "value property provided in mapElements export component cannot be mapped and will be skipped."
  )), r.export.legend && (e.fixtures.export.legend = {
    selected: r.export.legend.isSelected ?? !0,
    selectable: r.export.legend.isSelectable ?? !0
  }, r.export.legend.columnWidth && (e.fixtures.export.legend.columnWidth = r.export.legend.columnWidth), r.export.legend.value && console.warn(
    "value property provided in legend export component cannot be mapped and will be skipped."
  ), typeof r.export.legend.showInfoSymbology < "u" && console.warn(
    "showInfoSymbology property provided in legend export component cannot be mapped and will be skipped."
  ), typeof r.export.legend.showControlledSymbology < "u" && console.warn(
    "showControlledSymbology property provided in legend export component cannot be mapped and will be skipped."
  )), r.export.footnote && (e.fixtures.export.footnote = {
    selected: r.export.footnote.isSelected ?? !0,
    selectable: r.export.footnote.isSelectable ?? !0,
    value: r.export.footnote.value ?? ""
  }), r.export.timestamp && (e.fixtures.export.timestamp = {
    selected: r.export.timestamp.isSelected ?? !0,
    selectable: r.export.timestamp.isSelectable ?? !0
  }, r.export.timestamp.value && console.warn(
    "value property provided in timestamp export component cannot be mapped and will be skipped."
  )), r.export.timeout && console.warn(
    "timeout property provided in export property of services config cannot be mapped and will be skipped."
  ), typeof r.cleanCanvas < "u" && console.warn(
    "cleanCanvas property provided in export property of services config cannot be mapped and will be skipped."
  )), r.proxyUrl && (e.system.proxyUrl = r.proxyUrl), [
    "corsEverywhere",
    "exportMapUrl",
    "geometryUrl",
    "googleAPIKey",
    "esriLibUrl",
    "geolocation",
    "coordInfo",
    "print"
  ].forEach((i) => {
    typeof r[i] < "u" && console.warn(`${i} property provided in services config cannot be mapped and will be skipped.`);
  });
}
function rl(r, e) {
  if (r.navBar) {
    e.fixtures.mapnav = {
      zoomOption: r.navBar.zoom || "buttons",
      items: []
    };
    const s = [
      "geolocator",
      "zoom",
      "home",
      "basemap",
      "help",
      "fullscreen",
      "geosearch",
      "legend"
    ];
    r.navBar.extra.forEach((o) => {
      const n = o.toLowerCase();
      s.includes(n) ? e.fixtures.mapnav.items.push(n) : console.warn(`Ignored invalid mapnav item: ${o}`);
    }), e.fixturesEnabled.push("mapnav");
  }
  if (r.help && (e.fixtures.help = {
    location: r.help.folderName && r.help.folderName !== "default" ? `./${r.help.folderName}` : "./help",
    panelWidth: 350
  }, e.fixturesEnabled.push("help")), r.legend) {
    const s = ["groupToggle", "visibilityToggle"];
    r.legend.reorderable && s.push("layerReorder"), r.legend.allowImport && s.push("wizard"), e.fixtures.legend ? e.fixtures.legend.headerControls = s : (e.fixturesEnabled.push("legend"), e.fixtures.legend = {
      headerControls: s,
      root: {}
    }), r.legend.isOpen && r.legend.isOpen.large && e.panels.open.push({ id: "legend" });
  }
  e.fixtures.appbar = { items: [] }, e.fixturesEnabled.push("appbar");
  const t = ["layers", "basemap", "export", "help", "geoSearch"];
  r.appBar ? (r.appBar.layers !== !1 && (e.fixtures.appbar.items.push("legend"), e.fixturesEnabled.includes("legend") || e.fixturesEnabled.push("legend")), r.appBar.geoSearch !== !1 && e.fixturesEnabled.includes("geosearch") && e.fixtures.appbar.items.push("geosearch"), r.appBar.basemap !== !1 && e.fixtures.appbar.items.push("basemap")) : (e.fixtures.appbar.items.push("legend"), e.fixturesEnabled.includes("legend") || e.fixturesEnabled.push("legend"), e.fixtures.appbar.items.push("geosearch"), e.fixtures.appbar.items.push("basemap")), r.sideMenu && r.sideMenu.items && r.sideMenu.items.length > 0 && r.sideMenu.items.forEach((s) => {
    s.forEach((o) => {
      o === "layers" && !e.fixtures.appbar.items.includes("legend") ? (e.fixtures.appbar.items.push("legend"), e.fixturesEnabled.includes("legend") || e.fixturesEnabled.push("legend")) : o !== "layers" && t.includes(o) && !e.fixtures.appbar.items.includes(o.toLowerCase()) && (e.fixtures.appbar.items.push(o.toLowerCase()), (o.toLowerCase() === "help" || o.toLowerCase() === "export" && !e.fixturesEnabled.includes(o.toLowerCase())) && e.fixturesEnabled.push(o.toLowerCase()));
    });
  }), r.tableIsOpen && // r2ui.tableIsOpen.id &&
  r.tableIsOpen.large, [
    "fullscreen",
    "theme",
    "logoUrl",
    "failureFeedback",
    "title",
    "restrictNavigation",
    "about"
  ].forEach((s) => {
    typeof r[s] < "u" && console.warn(`${s} property provided in services config cannot be mapped and will be skipped.`);
  });
}
function ol(r, e) {
  r.areasOfInterest.enable && (e.fixturesEnabled.includes("areas-of-interest") || e.fixturesEnabled.push("areas-of-interest"), r.areasOfInterest.areas && (e.fixtures["areas-of-interest"] = {
    areas: r.areasOfInterest.areas.map((t) => ({
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
function nl(r, e) {
  const t = r.outfields && r.outfields !== "*";
  if (!t && !r.fieldMetadata)
    return;
  const i = {
    fieldInfo: [],
    exclusiveFields: !1,
    enforceOrder: !1
  };
  r.fieldMetadata ? (i.fieldInfo = r.fieldMetadata.map((s) => {
    const o = {
      name: s.data
    };
    return s.alias && (o.alias = s.alias), o;
  }), t && (r.outfields.split(",").map((o) => o.trim()).forEach((o) => {
    i.fieldInfo.findIndex((n) => n.name === o) === -1 && i.fieldInfo.push({ name: o });
  }), i.exclusiveFields = !0)) : t && (i.fieldInfo = r.outfields.split(",").map((s) => ({ name: s.trim() })), i.exclusiveFields = !0), e.fieldMetadata = i;
}
var et = { major: "4", minor: "10", patch: "0", timestamp: "Thu Dec 19 14:34:34 2024 -0500", hash: "1f32f5c4dedad7ac35a7895e7f740d9e48359903" };
console.info(
  `RAMP v${et.major}.${et.minor}.${et.patch} [${et.hash.slice(0, 9)}] (Built on ${new Date(
    et.timestamp.toString()
  ).toLocaleString()})`
);
const ht = et;
function nc(r) {
  return el(r);
}
function ac(r) {
  return os(r);
}
const lc = (r, e, t) => new Qn(r, e, t), nt = new Zs();
export {
  ee as $,
  Vr as A,
  ea as B,
  ba as C,
  Zn as D,
  F as E,
  oi as F,
  E as G,
  Kn as H,
  te as I,
  I as J,
  st as K,
  x as L,
  Se as M,
  T as N,
  wt as O,
  H as P,
  $e as Q,
  yt as R,
  xi as S,
  Oa as T,
  It as U,
  fe as V,
  ae as W,
  Y as X,
  z as Y,
  V as Z,
  Me as _,
  We as a,
  Yt as a0,
  Qi as a1,
  jn as a2,
  N as a3,
  ht as a4,
  nc as a5,
  ac as a6,
  lc as a7,
  nt as a8,
  Tt as b,
  Ln as c,
  Wn as d,
  qi as e,
  $n as f,
  Rn as g,
  zn as h,
  qt as i,
  Vn as j,
  J as k,
  ue as l,
  Aa as m,
  qn as n,
  Ne as o,
  Xi as p,
  ti as q,
  Hn as r,
  Yn as s,
  Le as t,
  Ie as u,
  be as v,
  Fe as w,
  ta as x,
  Jn as y,
  mt as z
};
