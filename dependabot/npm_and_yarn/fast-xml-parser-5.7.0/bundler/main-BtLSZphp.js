import { n as e, t } from "./config-qfRoNiJ2.js";
import { t as n } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { t as r } from "./keyboard-Ccb6hpvS.js";
import { t as i } from "./store-BSbISna5.js";
import a from "@arcgis/core/Color";
import o from "@arcgis/core/config";
import { watch as s } from "@arcgis/core/core/reactiveUtils";
import c from "@arcgis/core/Graphic";
import l from "@arcgis/core/geometry/Extent";
import u from "@arcgis/core/geometry/Multipoint";
import d from "@arcgis/core/geometry/Point";
import f from "@arcgis/core/geometry/Polygon";
import p from "@arcgis/core/geometry/Polyline";
import m from "@arcgis/core/geometry/SpatialReference";
import { fromJSON as h } from "@arcgis/core/geometry/support/jsonUtils";
import ee from "@arcgis/core/request";
import g from "@arcgis/core/symbols/PictureMarkerSymbol";
import te from "@arcgis/core/symbols/SimpleFillSymbol";
import ne from "@arcgis/core/symbols/SimpleLineSymbol";
import re from "@arcgis/core/symbols/SimpleMarkerSymbol";
import { fromJSON as ie } from "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-sketch";
import "@arcgis/map-components/components/arcgis-swipe";
import { merge as ae } from "es-toolkit";
import { applyConverter as oe } from "@terraformer/spatial";
import _ from "proj4";
import { TinyEmitter as se } from "tiny-emitter";
import { createPinia as ce, defineStore as v, storeToRefs as le } from "pinia";
import { Fragment as ue, Teleport as de, Transition as fe, TransitionGroup as pe, computed as y, createApp as me, createBlock as b, createCommentVNode as x, createElementBlock as S, createElementVNode as C, createTextVNode as he, createVNode as w, defineAsyncComponent as ge, defineComponent as T, getCurrentInstance as _e, h as ve, inject as ye, markRaw as E, mergeProps as be, nextTick as xe, normalizeClass as D, normalizeStyle as Se, onBeforeUnmount as Ce, onMounted as we, onUpdated as Te, openBlock as O, reactive as Ee, ref as k, render as De, renderList as Oe, renderSlot as ke, resolveComponent as A, resolveDirective as j, resolveDynamicComponent as Ae, toDisplayString as M, toRaw as je, unref as N, useCssVars as Me, useTemplateRef as Ne, vShow as Pe, watch as Fe, withCtx as P, withDirectives as F, withKeys as Ie, withModifiers as Le } from "vue";
import { debounce as Re, throttle as ze } from "es-toolkit/function";
import { createI18n as Be, useI18n as I } from "vue-i18n";
import Ve from "screenfull";
import { cloneDeep as He } from "es-toolkit/object";
import Ue from "animejs";
import { createPopper as We, detectOverflow as Ge } from "@popperjs/core";
import "tippy.js/animations/scale.css";
import Ke, { setDefaultProps as qe, useTippy as Je } from "vue-tippy";
import Ye from "linkify-html";
import Xe from "redaxios";
import Ze from "await-to-js";
import { geojsonToArcGIS as Qe } from "@terraformer/arcgis";
import { csv2geojson as $e, dsv as et } from "csv2geojson";
import tt from "svg.js";
//#region src/geo/api/geo-defs.ts
var nt = /* @__PURE__ */ function(e) {
	return e.BLOB = "blob", e.DATE = "date", e.DOUBLE = "double", e.GEOMETRY = "geometry", e.GLOBAL_ID = "global-id", e.GUID = "guid", e.INTEGER = "integer", e.LONG = "long", e.OID = "oid", e.RASTER = "raster", e.SINGLE = "single", e.SMALL_INTEGER = "small-integer", e.STRING = "string", e.XML = "xml", e;
}({}), rt = /* @__PURE__ */ function(e) {
	return e.CIRCLE = "circle", e.CROSS = "cross", e.DIAMOND = "diamond", e.ICON = "icon", e.PATH = "path", e.SQUARE = "square", e.TRIANGLE = "triangle", e.X = "x", e;
}({}), it = /* @__PURE__ */ function(e) {
	return e.DASH = "dash", e.DASHDOT = "dash-dot", e.DASHDOTDOT = "short-dash-dot-dot", e.DOT = "dot", e.LONGDASH = "long-dash", e.LONGDASHDOT = "long-dash-dot", e.LONGDASHDOTDOT = "long-dash-dot-dot", e.NONE = "none", e.NULL = "none", e.SHORTDASH = "short-dash", e.SHORTDASHDOT = "short-dash-dot", e.SHORTDASHDOTDOT = "short-dash-dot-dot", e.SHORTDOT = "short-dot", e.SOLID = "solid", e;
}({}), at = /* @__PURE__ */ function(e) {
	return e.BEVEL = "bevel", e.MITER = "miter", e.ROUND = "round", e;
}({}), ot = /* @__PURE__ */ function(e) {
	return e.ROUND = "round", e.BUTT = "butt", e.SQUARE = "square", e;
}({}), st = /* @__PURE__ */ function(e) {
	return e.BDIAG = "backward-diagonal", e.CROSS = "cross", e.DIAG_CROSS = "diagonal-cross", e.FDIAG = "forward-diagonal", e.HORIZONTAL = "horizontal", e.NONE = "none", e.NULL = "none", e.SOLID = "solid", e.VERTICAL = "vertical", e;
}({}), L = /* @__PURE__ */ function(e) {
	return e.POINT = "Point", e.MULTIPOINT = "MultiPoint", e.LINESTRING = "LineString", e.MULTILINESTRING = "MultiLineString", e.POLYGON = "Polygon", e.MULTIPOLYGON = "MultiPolygon", e.LINEARRING = "LinearRing", e.EXTENT = "Extent", e.NONE = "None", e.UNKNOWN = "Unknown", e;
}({}), ct = /* @__PURE__ */ function(e) {
	return e.Simple = "simple", e.Unique = "uniqueValue", e.ClassBreaks = "classBreaks", e.Unknown = "unknown", e;
}({}), R = /* @__PURE__ */ function(e) {
	return e.FEATURE = "esri-feature", e.MAPIMAGE = "esri-map-image", e.TILE = "esri-tile", e.VECTORTILE = "esri-vector-tile", e.IMAGERY = "esri-imagery", e.IMAGERYTILE = "esri-imagery-tile", e.GRAPHIC = "esri-graphic", e.WMS = "ogc-wms", e.WFS = "ogc-wfs", e.GEOJSON = "file-geojson", e.GEOJSONZIPPED = "file-zip-geojson", e.CSV = "file-csv", e.SHAPEFILE = "file-shape", e.FLATGEOBUF = "file-fgb", e.FLATGEOBUFZIPPED = "file-zip-fgb", e.OSM = "osm-tile", e.DATACSV = "data-csv", e.DATAJSON = "data-json", e.DATATABLE = "data-esri-table", e.UNKNOWN = "unknown", e.SUBLAYER = "sublayer", e;
}({}), lt = /* @__PURE__ */ function(e) {
	return e.FEATURE = "feature", e.GRAPHIC = "graphic", e.IMAGERY = "imagery", e.IMAGERYTILE = "imagery-tile", e.MAPIMAGE = "map-image", e.NOLAYER = "no-layer", e.OSM = "osm-tile", e.TILE = "tile", e.UNKNOWN = "unknown", e.VECTORTILE = "vector-tile", e.WMS = "wms", e;
}({}), z = /* @__PURE__ */ function(e) {
	return e.ESRI_FEATURE = "esriFeature", e.ESRI_RASTER = "esriRaster", e.ESRI_TILE = "esriTile", e.OSM_TILE = "osmTile", e.OGC_RASTER = "ogcRaster", e.UNKNOWN = "unknown", e;
}({}), B = /* @__PURE__ */ function(e) {
	return e.POINT = "Point", e.MULTIPOINT = "MultiPoint", e.LINESTRING = "LineString", e.MULTILINESTRING = "MultiLineString", e.POLYGON = "Polygon", e.MULTIPOLYGON = "MultiPolygon", e;
}({}), V = /* @__PURE__ */ function(e) {
	return e.GEOMETRIC = "geometric", e.SYMBOLIC = "symbolic", e.HYBRID = "hybrid", e.NONE = "none", e;
}({}), H = /* @__PURE__ */ function(e) {
	return e.NEW = "new", e.INITIATING = "initiating", e.INITIATED = "initiated", e.TERMINATING = "terminating", e.TERMINATED = "terminated", e;
}({}), U = /* @__PURE__ */ function(e) {
	return e.NEW = "new", e.LOADING = "loading", e.LOADED = "loaded", e.ERROR = "error", e;
}({}), ut = /* @__PURE__ */ function(e) {
	return e.NOT_LOADED = "not-loaded", e.NOT_VISUAL = "not-visual", e.REFRESH = "refresh", e.UP_TO_DATE = "up-to-date", e;
}({}), dt = /* @__PURE__ */ function(e) {
	return e.ESRI = "esri", e.TEXT = "text", e.IMAGE = "image", e.HTML = "html", e.XML = "xml", e.JSON = "json", e.UNKNOWN = "unknown", e;
}({}), W = /* @__PURE__ */ function(e) {
	return e.SYMBOL = "symbol", e.GRID = "grid", e.EXTENT = "extent", e.INITIAL = "initial", e.API = "api", e.MIL_FLICKER_ERASER = "mileraser", e.PERMANENT = "permanent", e;
}({}), G = /* @__PURE__ */ function(e) {
	return e.BoundaryZoom = "boundaryZoom", e.Datatable = "datatable", e.Identify = "identify", e.Metadata = "metadata", e.Opacity = "opacity", e.Refresh = "refresh", e.Reload = "reload", e.Remove = "remove", e.Settings = "settings", e.Symbology = "symbology", e.Visibility = "visibility", e;
}({}), ft = class {
	attributes;
	geometry;
	style;
	id;
	constructor(e, t, n) {
		this.geometry = e, t ? this.id = t : this.id = Is.sharedUtils.generateUUID(), n ? this.attributes = n : this.attributes = {};
	}
	_hover;
	get hover() {
		return this._hover;
	}
	set hover(e) {
		e && this._hover && this._hover.id !== e.id && this.removeHover(), this._hover = e;
	}
	removeHover() {
		this._hover &&= void 0;
	}
}, K = class {
	static async Basemap(e) {
		let t = await import("@arcgis/core/Basemap");
		return Reflect.construct(t.default, [e]);
	}
	static async Map(e) {
		let t = await import("@arcgis/core/Map");
		return Reflect.construct(t.default, [e]);
	}
	static async MapView(e) {
		let t = await import("@arcgis/core/views/MapView");
		return Reflect.construct(t.default, [e]);
	}
	static async FeatureLayer(e) {
		let t = await import("@arcgis/core/layers/FeatureLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async GraphicsLayer(e) {
		let t = await import("@arcgis/core/layers/GraphicsLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async ImageryLayer(e) {
		let t = await import("@arcgis/core/layers/ImageryLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async ImageryTileLayer(e) {
		let t = await import("@arcgis/core/layers/ImageryTileLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async MapImageLayer(e) {
		let t = await import("@arcgis/core/layers/MapImageLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async OpenStreetMapLayer(e) {
		let t = await import("@arcgis/core/layers/OpenStreetMapLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async TileLayer(e) {
		let t = await import("@arcgis/core/layers/TileLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async VectorTileLayer(e) {
		let t = await import("@arcgis/core/layers/VectorTileLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async WMSLayer(e) {
		let t = await import("@arcgis/core/layers/WMSLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async ArcadeExecutor(e, t) {
		let { createArcadeExecutor: n } = await import("@arcgis/core/arcade");
		return await n(e, t);
	}
	static async ColorBackground(e) {
		let t = await import("@arcgis/core/webmap/background/ColorBackground");
		return Reflect.construct(t.default, [e]);
	}
	static async FeatureFilter(e) {
		let t = await import("@arcgis/core/layers/support/FeatureFilter");
		return Reflect.construct(t.default, [e]);
	}
	static async FieldFromJson(e) {
		return (await import("@arcgis/core/layers/support/Field")).default.fromJSON(e);
	}
	static async Query() {
		let e = await import("@arcgis/core/rest/support/Query");
		return Reflect.construct(e.default, []);
	}
	static async QueryByIds(e, t, n) {
		let { executeForIds: r } = await import("@arcgis/core/rest/query");
		return r(e, t, n);
	}
	static async RendererFromJson(e) {
		let { fromJSON: t } = await import("@arcgis/core/renderers/support/jsonUtils");
		return t(e);
	}
}, q = class e {
	wkid;
	latestWkid;
	wkt;
	constructor(e, t) {
		typeof e == "string" ? this.wkt = e : (this.wkid = e, this.latestWkid = t);
	}
	isEqual(e) {
		return !!(this.isWebMercator() && e.isWebMercator() || this.wkid && e.wkid && this.wkid === e.wkid || this.wkt && e.wkt && this.wkt === e.wkt || this.latestWkid && e.latestWkid && this.latestWkid === e.latestWkid);
	}
	clone() {
		let t = new e("");
		return t.latestWkid = this.latestWkid, t.wkid = this.wkid, t.wkt = this.wkt, t;
	}
	lean() {
		let e = {};
		return this.wkt ? e.wkt = this.wkt : (e.wkid = this.wkid, this.latestWkid && (e.latestWkid = this.latestWkid)), e;
	}
	isWebMercator() {
		let e = [
			900913,
			3587,
			54004,
			41001,
			102113,
			102100,
			3785
		];
		return !!(this.wkid && e.includes(this.wkid) || this.latestWkid && e.includes(this.latestWkid));
	}
	static latLongSR() {
		return new e(4326);
	}
	static fromConfig(t) {
		if (t.wkt) return new e(t.wkt);
		if (t.wkid) return new e(t.wkid, t.latestWkid);
		throw Error("Could not parse config spatial reference object");
	}
	static parseSR(t) {
		return t ? t instanceof e ? t.clone() : typeof t == "string" && t.startsWith("EPSG:") ? new e(parseInt(t.substring(5).trim())) : new e(t) : e.latLongSR();
	}
	static fromESRI(t) {
		if (t.wkt) return new e(t.wkt);
		{
			let n = t.toJSON().latestWkid, r = new e(t.wkid);
			return n && (r.latestWkid = n), r;
		}
	}
	toESRI() {
		return new m(this.lean());
	}
	static fromGeoJSON(t) {
		let n = e.parseGeoJsonCrs(t);
		return n.substring(0, 5) === "EPSG:" ? new e(parseInt(n.slice(5))) : new e(n);
	}
	static parseGeoJsonCrs(e) {
		if (!e) return "EPSG:4326";
		if (e.type === "name") {
			let t = /urn:ogc:def:crs:EPSG::(\d+)/, n = e.properties.name, r = n.match(t);
			if (r) return "EPSG:" + r[1];
			if (n.substring(0, 7) !== "urn:ogc") return n;
		}
		return console.error("Encountered unsupported GeoJSON CRS format. Defaulting to lat-long, resuling conversion is likely wrong", e), "EPSG:4326";
	}
	toGeoJSON() {
		let e = {
			type: "name",
			properties: { name: "" }
		};
		return this.wkt ? e.properties.name = this.wkt : e.properties.name = "urn:ogc:def:crs:EPSG::" + (this.latestWkid || this.wkid), e;
	}
}, pt = class {
	sr;
	id;
	constructor(e, t) {
		this.id = e ? e.toString() : "", this.sr = q.parseSR(t);
	}
	get type() {
		return L.UNKNOWN;
	}
	childIdGenerator(e) {
		return `${this.id}-${e}`;
	}
	toESRI() {
		throw Error(`.toESRI not implemented on geometry type ${this.type}`);
	}
	toGeoJSON() {
		throw Error(`.toGeoJSON not implemented on geometry type ${this.type}`);
	}
	invalid() {
		return this.type === L.NONE || this.type === L.UNKNOWN;
	}
	geoJsonFactory(e, t) {
		let n = {
			type: e,
			coordinates: t
		};
		return this.sr && (n.crs = this.sr.toGeoJSON()), n;
	}
}, mt = class extends pt {
	constructor() {
		super("no_geometry");
	}
	get type() {
		return L.NONE;
	}
}, J = class e extends pt {
	rawArray;
	constructor(t, n, r, i) {
		super(t, n.sr || r), i ? this.rawArray = n.slice() : this.rawArray = e.parseXY(n);
	}
	get type() {
		return L.POINT;
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
	toArray() {
		return this.rawArray.slice();
	}
	static parseXY(t) {
		let n;
		if (Array.isArray(t) && t.length === 2) n = t;
		else if (t instanceof e) return t.toArray();
		else n = [t.x, t.y];
		if (isNaN(n[0]) || isNaN(n[1])) throw Error("Unsupported point format detected. Supported formats are two element array of numbers, or object with x and y properties containing numbers");
		return [parseFloat(n[0]), parseFloat(n[1])];
	}
	static fromESRI(t, n) {
		return new e(n, [t.x, t.y], q.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		return new d({
			x: this.x,
			y: this.y,
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, q.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(B.POINT, this.toArray());
	}
}, ht = class e extends pt {
	rawArray;
	constructor(t, n, r, i) {
		super(t, n.sr || r), i ? this.rawArray = e.arrayDeepCopy(n) : n instanceof e ? this.rawArray = n.toArray() : this.rawArray = e.parsePointSet(n);
	}
	get pointArray() {
		return this.rawArray.map((e, t) => new J(this.childIdGenerator(t), e, this.sr, !0));
	}
	getAt(e) {
		return new J(this.childIdGenerator(e), this.rawArray[e], this.sr, !0);
	}
	updateAt(e, t) {
		this.rawArray[t] = J.parseXY(e);
	}
	get length() {
		return this.rawArray.length;
	}
	toArray() {
		return e.arrayDeepCopy(this.rawArray);
	}
	static parsePointSet(e) {
		if (Array.isArray(e)) {
			if (e.length === 0) throw Error("no verticies provided");
			return e.map((e) => J.parseXY(e));
		} else throw Error("Bad geometry input encountered");
	}
	static arrayDeepCopy(e) {
		return e.map((e) => e.slice());
	}
}, gt = class e extends ht {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	get type() {
		return L.MULTIPOINT;
	}
	static fromESRI(t, n) {
		return new e(n, t.points, q.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		return new u({
			points: this.toArray(),
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, q.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(B.MULTIPOINT, this.toArray());
	}
}, _t = class e extends ht {
	constructor(e, t, n, r) {
		if (super(e, t, n, r), this.rawArray.length < 2) throw Error("lines require at least two verticies");
	}
	get type() {
		return L.LINESTRING;
	}
	static fromESRI(t, n) {
		return new e(n, t.paths[0], q.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		return new p({
			paths: [this.toArray()],
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, q.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(B.LINESTRING, this.toArray());
	}
}, vt = class e extends pt {
	rawArray;
	constructor(t, n, r, i) {
		if (super(t, n.sr || r), i) this.rawArray = e.arrayDeepCopy(n);
		else if (n instanceof e) this.rawArray = n.toArray();
		else if (n instanceof ht) this.rawArray = [n.toArray()];
		else if (Array.isArray(n)) {
			if (n.length === 0) throw Error("no lines provided");
			this.rawArray = n.map((e) => ht.parsePointSet(e));
		} else throw Error("invalid lines format for MulitLineString");
	}
	get lineArray() {
		return this.rawArray.map((e, t) => new _t(this.childIdGenerator(t), e, this.sr, !0));
	}
	getAt(e) {
		return new _t(this.childIdGenerator(e), this.rawArray[e], this.sr, !0);
	}
	updateAt(e, t) {
		this.rawArray[t] = ht.parsePointSet(e);
	}
	get length() {
		return this.rawArray.length;
	}
	get type() {
		return L.MULTILINESTRING;
	}
	toArray() {
		return e.arrayDeepCopy(this.rawArray);
	}
	static arrayDeepCopy(e) {
		return e.map((e) => e.map((e) => e.slice()));
	}
	static fromESRI(t, n) {
		return new e(n, t.paths, q.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		return new p({
			paths: this.toArray(),
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, q.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(B.MULTILINESTRING, this.toArray());
	}
}, yt = class e extends ht {
	constructor(t, n, r, i) {
		if (super(t, n, r, i), e.closeRing(this.rawArray), this.length < 4) throw Error("Linear Ring must have at least 3 distinct vertices.");
	}
	get type() {
		return L.LINEARRING;
	}
	updateAt(e, t) {
		let n = this.length - 1;
		t === 0 ? super.updateAt(e, n) : t === n && super.updateAt(e, 0), super.updateAt(e, t);
	}
	static closeRing(e) {
		let t = e[0], n = e[e.length - 1];
		(t[0] !== n[0] || t[1] !== n[1]) && e.push(t.slice());
	}
	static fromESRI(t, n) {
		return new e(n, t.rings[0], q.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		return new f({
			rings: [this.toArray()],
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, q.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(B.POLYGON, [this.toArray()]);
	}
}, bt = class e extends pt {
	rawArray;
	constructor(t, n, r, i) {
		super(t, n.sr || r), i ? this.rawArray = e.arrayDeepCopy(n) : this.rawArray = e.parsePolygon(n);
	}
	addLinearRings(e) {
		e.forEach((e) => this.rawArray.push(e.toArray()));
	}
	get ringArray() {
		return this.rawArray.map((e, t) => new yt(this.childIdGenerator(t), e, this.sr, !0));
	}
	get type() {
		return L.POLYGON;
	}
	toArray() {
		return e.arrayDeepCopy(this.rawArray);
	}
	static parsePolygon(t) {
		let n = [];
		if (t instanceof e) return t.toArray();
		if (t instanceof vt) n = t.toArray();
		else if (t instanceof ht) n = [t.toArray()];
		else if (Array.isArray(t)) {
			if (t.length === 0) throw Error("no rings provided");
			n = t.map((e) => ht.parsePointSet(e));
		} else throw Error("invalid input format for parsePolygon");
		return n.forEach((e) => yt.closeRing(e)), n;
	}
	static arrayDeepCopy(e) {
		return e.map((e) => e.map((e) => e.slice()));
	}
	static fromESRI(t, n) {
		return new e(n, t.rings, q.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		return new f({
			rings: this.toArray(),
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, q.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(B.POLYGON, this.toArray());
	}
}, xt = class e extends pt {
	rawArray;
	constructor(t, n, r, i) {
		super(t, n.sr || r), i ? this.rawArray = e.arrayDeepCopy(n) : this.rawArray = e.parseMultiPolygon(n);
	}
	addPolygon(e) {
		this.rawArray.push(e.toArray());
	}
	get polygonArray() {
		return this.rawArray.map((e, t) => new bt(this.childIdGenerator(t), e, this.sr, !0));
	}
	get type() {
		return L.MULTIPOLYGON;
	}
	toArray() {
		return e.arrayDeepCopy(this.rawArray);
	}
	static parseMultiPolygon(t) {
		if (t instanceof e) return t.toArray();
		if (t instanceof bt) return [t.toArray()];
		if (t instanceof vt || t instanceof ht) return [bt.parsePolygon(t)];
		if (Array.isArray(t)) {
			if (t.length === 0) throw Error("no polygons provided");
			return t.map((e) => bt.parsePolygon(e));
		} else throw Error("invalid input format for parseMultiPolygon");
	}
	static arrayDeepCopy(e) {
		return e.map((e) => e.map((e) => e.map((e) => e.slice())));
	}
	static fromESRI(t, n) {
		return new e(n, [t.rings], q.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		let e = [];
		return this.toArray().forEach((t) => {
			t.forEach((t) => e.push(t));
		}), new f({
			rings: e,
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, q.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(B.MULTIPOLYGON, this.toArray());
	}
}, St = class e extends pt {
	rawMin;
	rawMax;
	constructor(e, t, n, r) {
		super(e, t.sr || r), this.rawMin = J.parseXY(t), this.rawMax = J.parseXY(n);
	}
	get type() {
		return L.EXTENT;
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
		return new J(this.id + "_centerPoint", [(this.xmax - this.xmin) / 2 + this.xmin, (this.ymax - this.ymin) / 2 + this.ymin], this.sr, !0);
	}
	expand(t) {
		return e.fromESRI(this.toESRI().expand(t), `${this.id}-expanded`);
	}
	clone() {
		return new e(this.id, this.rawMin, this.rawMax, this.sr);
	}
	contains(e) {
		return this.sr.isEqual(e.sr) ? this.xmin <= e.x && this.xmax >= e.x && this.ymin <= e.y && this.ymax >= e.y : (console.error("Extent.contains(point) must have point in same spatial reference as the extent."), !1);
	}
	toArray() {
		return [this.rawMin.slice(), this.rawMax.slice()];
	}
	toPolygonArray() {
		return [[
			this.rawMin.slice(),
			[this.xmin, this.ymax],
			this.rawMax.slice(),
			[this.xmax, this.ymin],
			this.rawMin.slice()
		]];
	}
	toPolygon() {
		return new bt(this.id, this.toPolygonArray(), this.sr, !0);
	}
	static fromParams(t, n, r, i, a, o) {
		return new e(t, [n, r], [i, a], o);
	}
	static fromConfig(t, n) {
		return new e(t, [n.xmin, n.ymin], [n.xmax, n.ymax], q.fromConfig(n.spatialReference));
	}
	isEqual(e) {
		return e ? this.xmin === e.xmin && this.ymin === e.ymin && this.xmax === e.xmax && this.ymax === e.ymax : !1;
	}
	static fromESRI(t, n) {
		return e.fromParams(n, t.xmin, t.ymin, t.xmax, t.ymax, q.fromESRI(t.spatialReference));
	}
	toESRI() {
		return new l({
			xmin: this.xmin,
			ymin: this.ymin,
			xmax: this.xmax,
			ymax: this.ymax,
			spatialReference: this.sr.toESRI()
		});
	}
	static fromArcServer(t, n) {
		return e.fromESRI(l.fromJSON(t), n);
	}
	static fromGeoJSON(t, n) {
		if (t.coordinates.length !== 5) throw Error("Extent expected a four vertex polygon from GeoJSON");
		let r = t.coordinates[0].slice(), i = r.slice();
		return [
			1,
			2,
			3
		].forEach((e) => {
			[0, 1].forEach((n) => {
				let a = t.coordinates[e];
				r[n] > a[n] && (r[n] = a[n]), i[n] < a[n] && (i[n] = a[n]);
			});
		}), new e(n, r, i, q.fromGeoJSON(t.crs));
	}
	toGeoJSON() {
		return this.geoJsonFactory(B.POLYGON, this.toPolygonArray());
	}
}, Ct = class e {
	c;
	constructor(t) {
		if (!t) {
			this.c = [
				0,
				0,
				0,
				1
			];
			return;
		}
		if (Array.isArray(t)) {
			let e = t.length;
			if (e < 3 || e > 4) {
				console.error("Invalid colour value array passed to Colour class"), this.c = [
					0,
					0,
					0,
					1
				];
				return;
			}
			this.c = t.map((e, t) => t === 3 ? e : parseInt(e)), e === 3 && this.c.push(1);
		} else if (typeof t == "string") {
			let n = t.substring(0, 1) === "#" ? t.substring(1) : t;
			this.c = [
				0,
				2,
				4,
				6
			].map((t) => {
				let r = n.substring(t, t + 2);
				return e.hexToInt(r);
			});
		} else this.c = [
			t.r,
			t.g,
			t.b,
			t.a ?? 1
		];
		this.c.forEach((e, t) => {
			e < 0 && (console.error("Negative value passed to colour"), this.c[t] = 0), e > 255 && (console.error("Rotund value passed to colour"), this.c[t] = 255);
		}), this.c[3] > 1 && (this.c[3] = this.c[3] / 255);
	}
	get rgba() {
		return this.c.slice();
	}
	get hex() {
		let t = this.rgba;
		return t[3] *= 255, `#${t.map((t) => e.intToHex(t)).join("")}`;
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
		return new a(this.rgba);
	}
	toArcServer() {
		return [
			this.c[0],
			this.c[1],
			this.c[2],
			255 * this.c[3]
		];
	}
	static hexToInt(e) {
		return e.length === 0 ? 255 : parseInt(e, 16);
	}
	static intToHex(e) {
		let t = e.toString(16);
		return t.length === 1 ? `0${t}` : t;
	}
}, wt = class {
	toOptions() {
		throw Error(".toOptions called on BaseStyle. Likely was not implemented on subclass.");
	}
	toESRI() {
		throw Error(".toESRI called on BaseStyle. Likely was not implemented on subclass.");
	}
	static convToPoints(e) {
		if (e !== void 0) if (typeof e == "string") {
			let t, n = e.length;
			if (n === 0) return;
			let r = e.substring(n - 2);
			return t = r === "px" ? parseFloat(e.substring(0, n - 2)) * 1.333333 : parseFloat(r === "pt" ? e.substring(0, n - 2) : e), t;
		} else return e;
	}
}, Tt = class e extends wt {
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
		if (e ||= { style: rt.CIRCLE }, super(), this._style = e.style || rt.CIRCLE, e.style === rt.ICON) {
			let t = e;
			this._icon = t.icon || "", this._height = wt.convToPoints(t.height) || 16.5, this._width = wt.convToPoints(t.width) || 16.5, this._size = 0, this._colour = new Ct(), this._outline = new Et(), this._path = "";
		} else {
			let t = e;
			this._size = wt.convToPoints(t.size) || 12, this._colour = new Ct(t.colour ?? "#ffffff40"), this._outline = new Et(t.outline), this._path = this._style === rt.PATH && t.path || "", this._height = 0, this._width = 0, this._icon = "";
		}
		this._xOffset = wt.convToPoints(e.xOffset) || 0, this._yOffset = wt.convToPoints(e.yOffset) || 0, this._angle = e.angle || 0;
	}
	get colour() {
		return this.propGrouse(!1), this._colour;
	}
	get styleType() {
		return this._style;
	}
	get width() {
		return this.propGrouse(!0), this._width;
	}
	get height() {
		return this.propGrouse(!0), this._height;
	}
	get size() {
		return this.propGrouse(!1), this._size;
	}
	get xOffset() {
		return this._xOffset;
	}
	get yOffset() {
		return this._yOffset;
	}
	get angle() {
		return this._angle;
	}
	get icon() {
		return this.propGrouse(!0), this._icon;
	}
	get outline() {
		return this.propGrouse(!1), this._outline;
	}
	get path() {
		return this.propGrouse(!1), this._path;
	}
	propGrouse(e) {
		this._style === rt.ICON !== e && console.warn(`Accessed a point style property that is invalid for the style type ${this._style}`);
	}
	toOptions() {
		let e = {
			style: this.styleType,
			yOffset: this.yOffset,
			xOffset: this.xOffset,
			angle: this.angle
		};
		return this._style === rt.ICON ? {
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
		let t;
		return this.styleType === rt.ICON ? e.isImageUrl(this.icon) ? (t = new g(), t.url = this.icon, t.width = this.width, t.height = this.height, t.xoffset = this.xOffset, t.yoffset = this.yOffset, t.angle = this.angle) : (t = new re(), t.color = new a(this.colour.rgba), t.size = this.width, t.xoffset = this.xOffset, t.yoffset = this.yOffset, t.angle = this.angle) : (t = new re(), t.color = new a(this.colour.rgba), t.size = this.size, t.xoffset = this.xOffset, t.yoffset = this.yOffset, t.angle = this.angle, t.path = this.path, t.style = this.styleType, t.outline = this.outline.toESRI()), t;
	}
	static fromESRI(t) {
		let n = {
			xOffset: t.xoffset,
			yOffset: t.yoffset,
			angle: t.angle
		};
		if (t.type === "simple-marker") {
			let e = n;
			e.style = t.style, e.colour = t.color.toRgba(), e.size = t.size, e.path = t.path, e.outline = Et.fromESRI(t.outline).toOptions();
		} else {
			let e = n;
			e.style = rt.ICON, e.width = t.width, e.height = t.height, e.icon = t.url;
		}
		return new e(n);
	}
	static fromArcServer(t) {
		return e.fromESRI(ie(t));
	}
	static isImageUrl(e) {
		return !!e.match(/\.(jpeg|jpg|gif|png|swf|svg)$/) || !!e.match(/^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+\=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i);
	}
}, Et = class e extends wt {
	_style;
	_width;
	_miter;
	_cap;
	_join;
	_colour;
	constructor(e) {
		e ||= {}, super(), this._style = e.style || it.SOLID;
		let t = wt.convToPoints(e.width);
		this._width = t === void 0 || t < 0 ? .75 : t, this._colour = new Ct(e.colour), this._miter = e.miter ?? 2, this._cap = e.cap || ot.ROUND, this._join = e.join || at.ROUND;
	}
	get styleType() {
		return this._style;
	}
	get width() {
		return this._width;
	}
	get colour() {
		return this._colour;
	}
	get miter() {
		return this._miter;
	}
	get cap() {
		return this._cap;
	}
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
		let e = new ne();
		return e.width = this.width, e.color = this.colour.toESRI(), e.style = this.styleType, e.cap = this.cap, e.miterLimit = this.miter, e.join = this.join, e;
	}
	static fromESRI(t) {
		return new e({
			width: t.width,
			colour: t.color.toRgba(),
			style: t.style
		});
	}
	static fromArcServer(t) {
		return e.fromESRI(ie(t));
	}
}, Dt = class e extends wt {
	_outlineStyle;
	_fillColour;
	_fillStyle;
	constructor(e) {
		super(), e ||= {}, e.fill ||= {}, this._fillColour = new Ct(e.fill.colour), this._fillStyle = e.fill.style || st.SOLID, this._outlineStyle = new Et(e.outline);
	}
	get fillColour() {
		return this._fillColour;
	}
	get fillStyleType() {
		return this._fillStyle;
	}
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
		let e = this.outline.toESRI(), t = new a(this.fillColour.rgba), n = new te();
		return n.style = this.fillStyleType, n.color = t, n.outline = e, n;
	}
	static fromESRI(t) {
		return new e({
			fill: {
				colour: t.color.toRgba(),
				style: t.style
			},
			outline: Et.fromESRI(t.outline).toOptions()
		});
	}
	static fromArcServer(t) {
		return e.fromESRI(ie(t));
	}
}, Ot = class {
	Extent = St;
	Graphic = ft;
	LineString = _t;
	LineStyle = Et;
	LinearRing = yt;
	MultiLineString = vt;
	MultiPoint = gt;
	MultiPolygon = xt;
	Point = J;
	PointStyle = Tt;
	Polygon = bt;
	PolygonStyle = Dt;
	SpatialReference = q;
	esriMapClickToRamp(e, t) {
		return {
			mapPoint: J.fromESRI(e.mapPoint, t),
			screenX: e.x,
			screenY: e.y,
			button: e.button,
			input: e.native.pointerType,
			clickTime: e.timestamp
		};
	}
	esriMapMouseToRamp(e) {
		return {
			screenX: e.x,
			screenY: e.y,
			button: e.button,
			moveTime: e.timestamp
		};
	}
	geomRampToEsri(e) {
		return e.toESRI();
	}
	geomEsriToRamp(e, t) {
		switch (e.type) {
			case "point": return J.fromESRI(e, t);
			case "polyline": {
				let n = e;
				return n.paths.length === 1 ? _t.fromESRI(n, t) : vt.fromESRI(n, t);
			}
			case "polygon": return bt.fromESRI(e, t);
			case "extent": return St.fromESRI(e, t);
			case "multipoint": return gt.fromESRI(e, t);
			default: throw Error(`Encountered unhandled geometry type ${e.type}`);
		}
	}
	geomGeoJsonToRamp(e, t) {
		switch (e.type) {
			case B.POINT: return J.fromGeoJSON(e, t);
			case B.LINESTRING: return _t.fromGeoJSON(e, t);
			case B.POLYGON: return bt.fromGeoJSON(e, t);
			case B.MULTIPOINT: return gt.fromGeoJSON(e, t);
			case B.MULTILINESTRING: return vt.fromGeoJSON(e, t);
			case B.MULTIPOLYGON: return xt.fromGeoJSON(e, t);
			default: throw Error(`Encountered unhandled geometry type ${e.type}`);
		}
	}
	geomRampToGeoJson(e) {
		return e.toGeoJSON();
	}
	graphicRampToGeoJson(e) {
		let t = {
			type: "Feature",
			geometry: this.geomRampToGeoJson(e.geometry),
			properties: {}
		};
		return Object.keys(e.attributes).forEach((n) => t.properties[n] = e.attributes[n]), t;
	}
	graphicGeoJsonToRamp(e, t) {
		if (e.type !== "Feature") throw Error("Expected input parameter of graphicGeoJsonToRamp to be a GeoJson feature");
		let n = this.geomGeoJsonToRamp(e.geometry, t), r = {};
		return Object.keys(e.properties.forEach((t) => r[t] = e.properties[t])), new ft(n, "", r);
	}
	graphicRampToEsri(e) {
		let t = {
			attributes: {},
			id: e.id
		};
		return t.geometry = this.geomRampToEsri(e.geometry), Object.keys(e.attributes).forEach((n) => t.attributes[n] = e.attributes[n]), e.style && (t.symbol = this.styleRampToEsri(e.style)), new c(t);
	}
	styleRampToEsri(e) {
		return e.toESRI();
	}
	styleEsriToRamp(e) {
		switch (e.type) {
			case "picture-marker":
			case "simple-marker": return Tt.fromESRI(e);
			case "simple-line": return Et.fromESRI(e);
			case "simple-fill": return Dt.fromESRI(e);
			default: return console.error(`Unsupported ESRI symbol type encountered: ${e.type}`), new Tt();
		}
	}
	serverGeomTypeToRampGeomType(e) {
		if (!e) return L.NONE;
		switch (e) {
			case "esriGeometryPolygon": return L.POLYGON;
			case "esriGeometryPolyline": return L.LINESTRING;
			case "esriGeometryPoint": return L.POINT;
			case "esriGeometryMultipoint": return L.MULTIPOINT;
			case "esriGeometryEnvelope": return L.EXTENT;
			default: return console.error(`Unrecognized server geometry type encountered: ${e}`), L.UNKNOWN;
		}
	}
	clientGeomTypeToRampGeomType(e) {
		if (!e) return L.NONE;
		switch (e) {
			case "polygon": return L.POLYGON;
			case "polyline": return L.LINESTRING;
			case "point": return L.POINT;
			case "multipoint": return L.MULTIPOINT;
			default: return console.error(`Unrecognized client geometry type encountered: ${e}`), L.UNKNOWN;
		}
	}
	geoJsonGeomTypeToEsriGeomType(e) {
		switch (e) {
			case B.POINT: return "point";
			case B.LINESTRING:
			case B.MULTILINESTRING: return "polyline";
			case B.POLYGON:
			case B.MULTIPOLYGON: return "polygon";
			case B.MULTIPOINT: return "multipoint";
			default: throw Error(`Encountered unhandled geometry type ${e}`);
		}
	}
	isImageUrl(e) {
		return Tt.isImageUrl(e);
	}
}, kt = class {
	layerIdx;
	name;
	children;
	uid;
	isRoot;
	constructor(e, t, n = "", r = !0) {
		this.layerIdx = e, this.name = n, this.isRoot = r, this.children = [], this.uid = t;
	}
	findChildByUid(e) {
		if (this.uid === e) return this;
		{
			let t;
			return this.children.some((n) => t = n.findChildByUid(e)), t;
		}
	}
	findChildByIdx(e) {
		if (this.layerIdx === e) return this;
		{
			let t;
			return this.children.some((n) => t = n.findChildByIdx(e)), t;
		}
	}
	get isLogicalLayer() {
		return this.layerIdx > -1 && this.children.length === 0;
	}
	get isLayerRoot() {
		return this.isRoot;
	}
}, At = class {
	minScale;
	maxScale;
	constructor(e = 0, t = 0) {
		this.minScale = e, this.maxScale = t;
	}
	isOffScale(e) {
		let t = {
			offScale: !1,
			zoomIn: !1
		};
		return e < this.maxScale && this.maxScale !== 0 ? (t.offScale = !0, t.zoomIn = !1) : e > this.minScale && this.minScale !== 0 && (t.offScale = !0, t.zoomIn = !0), t;
	}
}, jt = class {
	sql;
	cache;
	extent;
	constructor(e = "", t = "") {
		this.sql = {
			[W.PERMANENT]: e,
			[W.INITIAL]: t
		}, this.extent = void 0, this.cache = {};
	}
	sqlActiveFilters(e = []) {
		let t = this.sql, n = Object.keys(t).filter((e) => t[e]);
		return e.length === 0 ? n : n.filter((t) => e.indexOf(t) === -1);
	}
	isActive() {
		return this.sqlActiveFilters([W.PERMANENT]).length > 0;
	}
	getCombinedSql(e = []) {
		let t = this.sqlActiveFilters(e), n = t.length;
		return n === 0 ? "" : n === 1 ? this.sql[t[0]] : t.map((e) => `(${this.sql[e]})`).join(" AND ");
	}
	setSql(e, t) {
		e === W.PERMANENT ? console.error("Attempted to overwrite a permanent filter. Not allowed.") : (this.sql[e] = t, this.clearCacheSet(e));
	}
	getSql(e) {
		return this.sql[e] || "";
	}
	setExtent(e) {
		e.isEqual(this.extent) || (this.extent = e, this.clearCacheSet(W.EXTENT));
	}
	getCacheKey(e, t) {
		return `_cache$${e.sort().join("$")}${t ? "$" + W.EXTENT : ""}$`;
	}
	getCache(e, t) {
		let n = this.getCacheKey(e, t);
		return this.cache[n];
	}
	setCache(e, t, n) {
		let r = this.getCacheKey(t, n);
		this.cache[r] = e;
	}
	cacheActiveKeys() {
		let e = this.cache;
		return Object.keys(e).filter((t) => e[t]);
	}
	clearAllCaches() {
		this.cache = {};
	}
	clearCacheSet(e) {
		this.cacheActiveKeys().forEach((t) => {
			t.indexOf(`$${e}$`) > -1 && delete this.cache[t];
		});
	}
	clearAll() {
		this.sql = { [W.PERMANENT]: this.sql[W.PERMANENT] }, this.extent = void 0, this.clearAllCaches();
	}
}, Mt = class e {
	id;
	sr;
	_defaultExtent;
	_fullExtent;
	_maximumExtent;
	constructor(e, t, n = void 0, r = void 0) {
		this.id = e, this.sr = t.sr.clone(), this._defaultExtent = t.clone(), this._fullExtent = n?.clone(), this._maximumExtent = r?.clone(), n && !n.sr.isEqual(this.sr) && console.error(`Full extent provided in extent set has a mismatching spatial reference: ${n.sr}`), r && !r.sr.isEqual(this.sr) && console.error(`Maximum extent provided in extent set has a mismatching spatial reference: ${r.sr}`);
	}
	get defaultExtent() {
		return this._defaultExtent;
	}
	set defaultExtent(e) {
		this._defaultExtent = e.clone();
	}
	get fullExtent() {
		return this._fullExtent ? this._fullExtent : this.defaultExtent;
	}
	set fullExtent(e) {
		this._fullExtent = e.clone();
	}
	get maximumExtent() {
		return this._maximumExtent ? this._maximumExtent : this.fullExtent;
	}
	set maximumExtent(e) {
		this._maximumExtent = e.clone();
	}
	static fromConfig(t) {
		return new e(t.id, St.fromConfig(`${t.id}-extent-default`, t.default), t.full === void 0 ? void 0 : St.fromConfig(`${t.id}-extent-full`, t.full), t.maximum === void 0 ? void 0 : St.fromConfig(`${t.id}-extent-maximum`, t.maximum));
	}
	clone() {
		return new e(this.id, this._defaultExtent, this._fullExtent, this._maximumExtent);
	}
}, Y = class {
	realPromise;
	resolveMe(e) {}
	rejectMe() {}
	getPromise() {
		return this.realPromise;
	}
	constructor() {
		this.realPromise = new Promise((e, t) => {
			this.resolveMe = (t) => {
				e(t);
			}, this.rejectMe = t;
		});
	}
}, Nt = class {
	generateUUID() {
		let e = Date.now();
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
			let n = (e + Math.random() * 16) % 16 | 0;
			return e = Math.floor(e / 16), (t === "x" ? n : n & 3 | 8).toString(16);
		});
	}
	convertImageToCanvas(e, t, n = !0) {
		let r = t ?? document.createElement("canvas"), i = document.createElement("img");
		n && (i.crossOrigin = "anonymous");
		let a = new Promise((e, t) => {
			i.addEventListener("load", () => {
				r.width = i.width, r.height = i.height, r.getContext("2d")?.drawImage(i, 0, 0), e(r);
			}), i.addEventListener("error", (e) => t(e));
		});
		return i.src = e, a;
	}
	async convertImagetoDataURL(e, t = "image/png") {
		return e.startsWith("data") ? e : this.convertImageToCanvas(e).then((e) => e.toDataURL(t)).catch((t) => (console.error("Failed to load crossorigin image", e, t), e));
	}
	parseUrlIndex(e) {
		let t = {
			rootUrl: e,
			index: 0
		}, n = e.match(/\/(\d+)\/?$/);
		if (n) {
			let r = n[1];
			t.index = isNaN(parseInt(r)) ? void 0 : parseInt(r), t.rootUrl = e.substr(0, e.length - n[0].length);
		} else console.warn("Cannot extract layer index from url " + e);
		return t;
	}
	controlAvailable(e, t) {
		return t?.disabledControls?.includes(e) ? !1 : t?.controls ? t?.controls?.includes(e) : !0;
	}
}, Pt = class {
	_url;
	_base;
	_query;
	_queryMap = {};
	constructor(e) {
		this._url = e, [this._base, this._query] = e.split("?").concat(""), this._queryMap = this._query.split("&").reduce((e, t) => {
			let [n, r] = t.split("=");
			return e[n] = r, e;
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
	updateQuery(e) {
		let t = ae({}, this.queryMap);
		return ae(t, e), `${this.base}${Object.entries(t).filter(([, e]) => e !== void 0).map(([e, t], n) => `${n === 0 ? "?" : ""}${e}=${t}`).join("&")}`;
	}
}, Ft = "EPSG:4326", It = class {
	espgWorker;
	constructor() {
		this.espgWorker = this.defaultEpsgLookup, _.defs("EPSG:3978", "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"), _.defs("EPSG:3979", "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"), _.defs("EPSG:54004", "+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"), _.defs("EPSG:102100", _.defs("EPSG:3857")), _.defs("EPSG:102187", "+proj=tmerc +lat_0=0 +lon_0=-114 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"), _.defs("EPSG:102190", "+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
		let e = 1;
		for (; e <= 60;) {
			let t = e < 10 ? `0${e}` : e;
			_.defs(`EPSG:326${t}`, `+proj=utm +zone=${e} +ellps=WGS84 +datum=WGS84 +units=m +no_defs`), e++;
		}
	}
	addProjection(e, t) {
		e = typeof e == "number" ? `EPSG:${e}` : e, _.defs(e, t);
	}
	defaultEpsgLookup(e) {
		let t = String(e).match(/urn:ogc:def:crs:EPSG::(\d+)/) || String(e).match(/EPSG:(\d+)/) || [];
		if (t.length < 2) throw Error("Invalid code provided.");
		return new Promise((e, n) => {
			ee(`https://epsg.io/${t[1]}.proj4`, { responseType: "text" }).then((t) => {
				t.data ? e(t.data) : n();
			}, (e) => {
				n(e);
			});
		});
	}
	epsgLookup(e) {
		return this.espgWorker(e);
	}
	setEpsgLookup(e) {
		this.espgWorker = e;
	}
	normalizeProj(e) {
		if (typeof e == "object") {
			if (e.wkid) return "EPSG:" + e.wkid;
			if (e.wkt) return e.wkt;
		} else if (typeof e == "number") return "EPSG:" + e;
		else if (typeof e == "string") return e;
		throw Error("Bad argument type, please provide a string, integer or SpatialReference object.");
	}
	async checkProj(e) {
		let t, n = "";
		try {
			t = this.normalizeProj(e);
		} catch {
			return !1;
		}
		if (!t.startsWith("EPSG:")) return !0;
		typeof e == "object" && e.latestWkid && (n = this.normalizeProj(e.latestWkid));
		let r = (e, t) => {
			e !== t && _.defs(t, _.defs(e));
		};
		if (_.defs(t)) return !0;
		if (n && _.defs(n)) return r(n, t), !0;
		let i = async (e) => {
			try {
				let t = await this.epsgLookup(e);
				return t === null || t === "" ? !1 : (_.defs(e, t), !0);
			} catch {
				return !1;
			}
		};
		return await (n ? i(n) : Promise.resolve(!1)) ? (r(n, t), !0) : i(t);
	}
	async checkProjBomber(e) {
		if (e.length > 0) {
			let t = e.pop();
			if (await this.checkProj(t)) return this.checkProjBomber(e);
			throw console.error("Unable to parse or locate projection information for this item:", t), Error("Could not find projection information, see console for details");
		}
	}
	async projectGeoJson(e, t, n) {
		let r, i;
		if (r = t ? this.normalizeProj(t) : q.parseGeoJsonCrs(e.crs), i = n ? this.normalizeProj(n) : Ft, i === r) return e;
		await this.checkProjBomber([r, i]);
		let a = _(r, i).forward;
		return oe(e, a);
	}
	async projectGeometry(e, t) {
		if (t.type === L.EXTENT) return this.projectExtent(e, t);
		await this.checkProjBomber([e, t.sr]);
		let n = t.toGeoJSON(), r = await this.projectGeoJson(n, this.normalizeProj(t.sr), this.normalizeProj(e)), i = Is.geom.geomGeoJsonToRamp(r, t.id);
		return i.sr = q.parseSR(e), i;
	}
	async projectExtent(e, t) {
		let n = (e, t, r) => {
			if (r === 0) return [e, t];
			let i = [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2];
			if (r === 1) return [
				e,
				i,
				t
			];
			if (r > 1) {
				let a = n(e, i, r - 1), o = n(i, t, r - 1);
				return a.concat(o.slice(1));
			}
			return [[]];
		}, r = t.toPolygonArray().pop() || [], i = [];
		[
			0,
			1,
			2,
			3
		].map((e) => n(r[e], r[e + 1], 3).slice(1)).forEach((e) => i = i.concat(e));
		let a = new bt("warpy", [i], t.sr, !0), o = await this.projectGeometry(e, a), s = o.toArray().pop() || [], c = s.map((e) => e[0]), l = s.map((e) => e[1]), u = Math.min.apply(null, c), d = Math.max.apply(null, c), f = Math.min.apply(null, l), p = Math.max.apply(null, l);
		return St.fromParams(t.id + "_projected", u, f, d, p, o.sr);
	}
}, Lt = class {
	DEFAULT_MERCATOR = "DEFAULT_ESRI_World_AuxMerc_3857";
	DEFAULT_LAMBERT = "DEFAULT_NRCAN_Lambert_3978";
	proj;
	geom;
	sharedUtils;
	constructor() {
		this.proj = new It(), this.geom = new Ot(), this.sharedUtils = new Nt();
	}
	defaultTileSchemas() {
		return [this.DEFAULT_LAMBERT, this.DEFAULT_MERCATOR];
	}
	defaultLODs(e) {
		let t = (e) => e.map((e) => ({
			level: e[0],
			resolution: e[1],
			scale: e[2]
		}));
		if (e === this.DEFAULT_LAMBERT) return t([
			[
				0,
				38364.660062653464,
				145e6
			],
			[
				1,
				22489.62831258996,
				85e6
			],
			[
				2,
				13229.193125052918,
				5e7
			],
			[
				3,
				7937.5158750317505,
				3e7
			],
			[
				4,
				4630.2175937685215,
				175e5
			],
			[
				5,
				2645.8386250105837,
				1e7
			],
			[
				6,
				1587.5031750063501,
				6e6
			],
			[
				7,
				926.0435187537042,
				35e5
			],
			[
				8,
				529.1677250021168,
				2e6
			],
			[
				9,
				317.50063500127004,
				12e5
			],
			[
				10,
				185.20870375074085,
				7e5
			],
			[
				11,
				111.12522225044451,
				42e4
			],
			[
				12,
				66.1459656252646,
				25e4
			],
			[
				13,
				38.36466006265346,
				145e3
			],
			[
				14,
				22.48962831258996,
				85e3
			],
			[
				15,
				13.229193125052918,
				5e4
			],
			[
				16,
				7.9375158750317505,
				3e4
			],
			[
				17,
				4.6302175937685215,
				17500
			]
		]);
		if (e === this.DEFAULT_MERCATOR) return t([
			[
				0,
				19567.87924099992,
				73957190.948944
			],
			[
				1,
				9783.93962049996,
				36978595.474472
			],
			[
				2,
				4891.96981024998,
				18489297.737236
			],
			[
				3,
				2445.98490512499,
				9244648.868618
			],
			[
				4,
				1222.992452562495,
				4622324.434309
			],
			[
				5,
				611.4962262813797,
				2311162.217155
			],
			[
				6,
				305.74811314055756,
				1155581.108577
			],
			[
				7,
				152.87405657041106,
				577790.554289
			],
			[
				8,
				76.43702828507324,
				288895.277144
			],
			[
				9,
				38.21851414253662,
				144447.638572
			],
			[
				10,
				19.10925707126831,
				72223.819286
			],
			[
				11,
				9.554628535634155,
				36111.909643
			],
			[
				12,
				4.77731426794937,
				18055.954822
			],
			[
				13,
				2.388657133974685,
				9027.977411
			],
			[
				14,
				1.1943285668550503,
				4513.988705
			],
			[
				15,
				.5971642835598172,
				2256.994353
			],
			[
				16,
				.29858214164761665,
				1128.497176
			],
			[
				17,
				.14929107082380833,
				564.248588
			],
			[
				18,
				.07464553541190416,
				282.124294
			],
			[
				19,
				.03732276770595208,
				141.062147
			],
			[
				20,
				.01866138385297604,
				70.5310735
			]
		]);
		throw Error(`Unknown tile schema key passed to LOD defaulter ${e}`);
	}
}, X = class {
	$iApi;
	get $vApp() {
		return this.$iApi.$vApp;
	}
	get $element() {
		return this.$iApi.$element;
	}
	constructor(e) {
		this.$iApi = e;
	}
};
function Rt(e) {
	return typeof e == "function" && e.render && typeof e.render == "function";
}
function zt(e) {
	return typeof e == "object" && !e.functional && [
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
	].some((t) => e[t] !== void 0);
}
function Bt(e) {
	return typeof e == "object" && Object.keys(e).every((e) => typeof e == "string") && Object.values(e).every((e) => e instanceof HTMLElement);
}
function Vt(e) {
	return typeof e == "object" && e.default !== void 0;
}
//#endregion
//#region src/fixtures/appbar/store/appbar-state.ts
var Ht = class {
	id;
	options;
	componentId;
	constructor(e) {
		let t = {
			options: {},
			...e
		};
		({id: this.id, options: this.options, componentId: this.componentId} = t);
	}
}, Ut = v("appbar", () => {
	let e = k({}), t = k([]), n = k([]), r = y(() => t.value.map((t) => t.map((t) => e.value[t]).filter((e) => {
		if (typeof e == "string" || e.componentId) return !0;
	})).filter((e) => e.length > 0));
	function i(e) {
		n.value.includes(e) || n.value.push(e);
	}
	function a(r) {
		let i = n.value.indexOf(r);
		i !== -1 && n.value.splice(i, 1), r in e.value && delete e.value[r], t.value.forEach((e) => {
			let t = e.indexOf(r);
			t !== -1 && e.splice(t, 1);
		});
	}
	return {
		items: e,
		order: t,
		temporary: n,
		visible: r,
		addTempButton: i,
		removeButton: a
	};
}), Wt = v("grid", () => {
	let e = k({}), t = k(), n = k();
	function r(t) {
		e.value = {
			...e.value,
			[t.id]: t
		};
	}
	function i(t) {
		e.value[t] !== void 0 && delete e.value[t];
	}
	function a(t) {
		return Object.keys(e.value).find((n) => e.value[n].layerIds.includes(t));
	}
	function o(t, n) {
		e.value[t].layerIds = e.value[t].layerIds.filter((e) => e !== n);
	}
	return {
		grids: e,
		panel: t,
		currentId: n,
		addGrid: r,
		removeGrid: i,
		getGridId: a,
		removeLayer: o
	};
}), Gt = v("map-caption", () => {
	let e = k({ text: {} }), t = k({}), n = k({}), r = k({});
	function i(e) {
		e === void 0 ? t.value.isImperialScale = !t.value.isImperialScale : t.value.isImperialScale = e;
	}
	function a(t) {
		e.value.text.value = t.text.value, e.value.text.disabled = t.text.disabled;
	}
	return {
		attribution: e,
		scale: t,
		coords: n,
		langtoggle: r,
		toggleScale: i,
		setAttribution: a
	};
}), Kt = class {
	id;
	name;
	template;
	priority;
	fields;
	componentId;
	constructor(e) {
		let t = { ...typeof e == "string" ? {
			id: e,
			template: "",
			name: "",
			priority: 50
		} : e };
		({template: this.template, id: this.id, name: this.name, fields: this.fields, priority: this.priority} = t);
	}
}, qt = v("details", () => {
	let e = k([]), t = k({}), n = k({}), r = k(), i = k(0), a = k(0), o = k(!0), s = k();
	function c(t) {
		let n = e.value.findIndex((e) => e.uid === t.uid);
		n !== -1 && e.value.splice(n, 1);
	}
	function l(e) {
		t.value = {
			...t.value,
			[e.id]: e
		};
	}
	return {
		payload: e,
		properties: t,
		defaultTemplates: n,
		currentFeatureId: r,
		activeGreedy: i,
		lastHilight: a,
		hilightToggle: o,
		origin: s,
		removeLayer: c,
		addConfigProperty: l
	};
}), Jt = v("fixture", () => {
	let e = k({}), t = k({});
	function n(e) {
		return e.map((e) => t.value[e].getPromise());
	}
	function r(n) {
		if (e.value = {
			...e.value,
			[n.id]: E(n)
		}, n.id in t.value) t.value[n.id].resolveMe(E(n));
		else {
			let e = new Y();
			e.resolveMe(E(n)), t.value = {
				...t.value,
				[n.id]: e
			};
		}
		typeof n.added == "function" && n.added();
	}
	function i(n) {
		delete e.value[n.id], e.value = { ...e.value }, delete t.value[n.id], t.value = { ...t.value }, typeof n.removed == "function" && n.removed();
	}
	function a(e) {
		t.value = {
			...t.value,
			[e]: new Y()
		};
	}
	return {
		items: e,
		loadPromises: t,
		getLoadPromises: n,
		addFixture: r,
		removeFixture: i,
		addLoadPromise: a
	};
}), Z = /* @__PURE__ */ function(e) {
	return e.APPBAR_BUTTON_CLICK = "appbar/click", e.COMPONENT = "ramp/component", e.CONFIG_CHANGE = "config/configchanged", e.DETAILS_TOGGLE = "details/toggle", e.FILTER_CHANGE = "filter/change", e.FIXTURE_ADDED = "fixture/added", e.FIXTURE_REMOVED = "fixture/removed", e.GRID_TOGGLE = "grid/toggle", e.HELP_TOGGLE = "help/toggle", e.LANG_CHANGE = "lang/change", e.LAYER_DRAWSTATECHANGE = "layer/drawstatechange", e.LAYER_INITIATIONSTATECHANGE = "layer/initiationStatechange", e.LAYER_LAYERSTATECHANGE = "layer/layerstatechange", e.LAYER_OPACITYCHANGE = "layer/opacitychange", e.LAYER_REGISTERED = "layer/registered", e.LAYER_RELOAD_END = "layer/reloadend", e.LAYER_RELOAD_START = "layer/reloadstart", e.LAYER_REMOVE = "layer/remove", e.LAYER_VISIBILITYCHANGE = "layer/visibilitychange", e.MAP_BASEMAPCHANGE = "map/basemapchanged", e.MAP_BLUR = "map/blur", e.MAP_CLICK = "map/click", e.MAP_CREATED = "map/created", e.MAP_DESTROYED = "map/destroyed", e.MAP_DOUBLECLICK = "map/doubleclick", e.MAP_EXTENTCHANGE = "map/extentchanged", e.MAP_FOCUS = "map/focus", e.MAP_GRAPHICHIT = "map/graphichit", e.MAP_IDENTIFY = "map/identify", e.MAP_KEYDOWN = "map/keydown", e.MAP_KEYUP = "map/keyup", e.MAP_MOUSEDOWN = "map/mousedown", e.MAP_MOUSELEAVE = "map/mouseleave", e.MAP_MOUSEMOVE = "map/mousemove", e.MAP_MOUSEMOVE_END = "map/mousemoveend", e.MAP_MOUSEMOVE_START = "map/mousemovestart", e.MAP_REFRESH_END = "map/refreshend", e.MAP_REFRESH_START = "map/refreshstart", e.MAP_REORDER = "map/reorder", e.MAP_RESIZED = "map/resized", e.MAP_SCALECHANGE = "map/scalechanged", e.MAP_START = "map/start", e.METADATA_TOGGLE = "metadata/toggle", e.PANEL_CLOSED = "panel/closed", e.PANEL_MINIMIZED = "panel/minimized", e.PANEL_OPENED = "panel/opened", e.RAMP_MOBILEVIEW_CHANGE = "ramp/mobileviewchange", e.RAMP_RELOAD = "ramp/reload", e.REORDER_TOGGLE = "reorder/toggle", e.SETTINGS_TOGGLE = "settings/toggle", e.USER_LAYER_ADDED = "user/layeradded", e.WIZARD_TOGGLE = "wizard/toggle", e;
}({}), Q = /* @__PURE__ */ function(e) {
	return e.LAYER_ERROR_UPDATES_LEGEND = "ramp_layer_error_updates_legend", e.LAYER_REGISTER_BINDS_LEGEND = "ramp_layer_register_binds_legend", e.LAYER_RELOAD_END_BINDS_LEGEND = "ramp_layer_reload_end_binds_legend", e.LAYER_RELOAD_START_UPDATES_LEGEND = "ramp_layer_reload_start_updates_legend", e.LAYER_REMOVE_UPDATES_DETAILS = "ramp_layer_remove_updates_details", e.LAYER_REMOVE_CHECKS_GRID = "ramp_layer_remove_checks_grid", e.LAYER_REMOVE_UPDATES_LEGEND = "ramp_layer_remove_updates_legend", e.LAYER_USERADD_UPDATES_LEGEND = "ramp_layer_useradd_updates_legend", e.MAP_BASEMAP_CHECKS_TILE_PROJ = "ramp_map_basemap_checks_tile_proj", e.MAP_BASEMAP_UPDATES_MAP_ATTRIBS = "ramp_map_basemap_updates_map_attribs", e.MAP_BLUR_UPDATES_KEY_HANDLER = "ramp_map_blur_updates_key_handler", e.MAP_CLICK_RUNS_IDENTIFY = "ramp_map_click_runs_identify", e.MAP_CREATED_INITIALIZES_FIXTURES = "ramp_map_created_initializes_fixtures", e.MAP_CREATED_UPDATES_MAP_ATTRIBS = "ramp_map_created_updates_map_attribs", e.MAP_EXTENT_UPDATES_MAPTIP = "ramp_map_extent_updates_maptip", e.MAP_GRAPHICHIT_CREATES_MAPTIP = "ramp_map_graphichit_creates_maptip", e.MAP_IDENTIFY_OPENS_IDENTIFY_RESULTS = "ramp_map_identify_opens_identify_results", e.MAP_KEYDOWN_UPDATES_COORDS = "ramp_map_keydown_updates_coords", e.MAP_KEYDOWN_UPDATES_KEY_HANDLER = "ramp_map_keydown_updates_key_handler", e.MAP_KEYUP_UPDATES_KEY_HANDLER = "ramp_map_keyup_updates_key_handler", e.MAP_MOUSE_UPDATES_COORDS = "ramp_map_mouse_updates_coords", e.MAP_MOUSE_UPDATES_MAPTIP = "ramp_map_mouse_updates_maptip", e.MAP_MOUSEDOWN_UPDATES_MAPTIP = "ramp_map_mousedown_updates_maptip", e.MAP_MOUSELEAVE_REMOVES_MAPTIP = "ramp_map_mouseleave_removes_maptip", e.MAP_RESIZE_UPDATES_SCALEBAR = "ramp_map_resize_updates_scalebar", e.MAP_SCALE_UPDATES_SCALEBAR = "ramp_map_scale_updates_scalebar", e.PANEL_CLOSE_UPDATES_APPBAR = "ramp_panel_close_updates_appbar", e.PANEL_OPEN_UPDATES_APPBAR = "ramp_panel_open_updates_appbar", e.TOGGLE_DETAILS = "ramp_toggle_details", e.TOGGLE_GRID = "ramp_toggle_grid", e.TOGGLE_HELP = "ramp_toggle_help", e.TOGGLE_METADATA = "ramp_toggle_metadata", e.TOGGLE_REORDER = "ramp_toggle_reorder", e.TOGGLE_SETTINGS = "ramp_toggle_settings", e.TOGGLE_WIZARD = "ramp_toggle_wizard", e;
}(Q || {}), Yt = class {
	eventName;
	handlerName;
	handlerFunc;
	constructor(e, t, n) {
		this.eventName = e, this.handlerName = t, this.handlerFunc = n;
	}
}, Xt = class extends X {
	_eventBus;
	_eventRegister;
	_nameRegister;
	_funCounter;
	constructor(e) {
		super(e), this._eventBus = new se(), this._eventRegister = [], this._funCounter = 1, this._nameRegister = Object.values(Z).filter((e) => typeof e == "string" && e.indexOf("/") > -1);
	}
	findHandler(e) {
		return this._eventRegister.find((t) => t.handlerName === e);
	}
	handlerNamer(e) {
		return this._funCounter++, e.replace(/\//g, "_") + this._funCounter.toString();
	}
	registerEventName(e) {
		(Array.isArray(e) ? e : [e]).forEach((e) => {
			this._nameRegister.indexOf(e) === -1 && this._nameRegister.push(e);
		});
	}
	eventNames() {
		return this._nameRegister.slice();
	}
	on(e, t, n = "") {
		if (this.findHandler(n)) throw Error("Duplicate handler name registration: " + n);
		n ||= this.handlerNamer(e);
		let r = new Yt(e, n, t);
		return this._eventRegister.push(r), this._eventBus.on(e, t), n;
	}
	off(e) {
		let t = this.findHandler(e);
		t && (this._eventRegister.splice(this._eventRegister.indexOf(t), 1), this._eventBus.off(t.eventName, t.handlerFunc));
	}
	offAll(e = "") {
		this.activeHandlers(e).forEach((e) => this.off(e));
	}
	removeDefaultEvents() {
		Object.values(Q).forEach((e) => {
			this.off(e);
		});
	}
	emit(e, ...t) {
		this._eventBus.emit(e, ...t);
	}
	once(e, t, n = "") {
		return n ||= this.handlerNamer(e), this.on(e, (...e) => {
			t(...e), this.off(n);
		}, n);
	}
	activeHandlers(e = "") {
		return e === "" ? this._eventRegister.map((e) => e.handlerName) : this._eventRegister.filter((t) => t.eventName === e).map((e) => e.handlerName);
	}
	addDefaultEvents(e) {
		return (!Array.isArray(e) || e.length === 0) && (e = Object.values(Q)), e.map((e) => this.defaultHandlerFactory(e));
	}
	defaultHandlerFactory(e) {
		let n;
		switch (e) {
			case Q.LAYER_ERROR_UPDATES_LEGEND:
				n = (e) => {
					if (e.layer.layerState === U.ERROR) {
						let t = this.$iApi.fixture.get("legend");
						t && t.updateLegend(e.layer);
					}
				}, this.$iApi.event.on(Z.LAYER_LAYERSTATECHANGE, n, e);
				break;
			case Q.LAYER_REGISTER_BINDS_LEGEND:
				n = (e) => {
					let t = this.$iApi.fixture.get("legend");
					t && t.updateLegend(e);
				}, this.$iApi.event.on(Z.LAYER_REGISTERED, n, e);
				break;
			case Q.LAYER_RELOAD_END_BINDS_LEGEND:
				n = (e) => {
					let t = this.$iApi.fixture.get("legend");
					t && t.updateLegend(e);
				}, this.$iApi.event.on(Z.LAYER_RELOAD_END, n, e);
				break;
			case Q.LAYER_RELOAD_START_UPDATES_LEGEND:
				n = (e) => {
					if (!e.isSublayer) {
						let t = this.$iApi.fixture.get("legend");
						t && t.reloadLayerItem(e.uid);
					}
				}, this.$iApi.event.on(Z.LAYER_RELOAD_START, n, e);
				break;
			case Q.LAYER_REMOVE_CHECKS_GRID:
				n = (e) => {
					if (this.$iApi.fixture.get("grid")) {
						let t = Wt(this.$vApp.$pinia), n = t.getGridId(e.id);
						if (n === void 0) return;
						if (t.removeLayer(n, e.id), t.grids[n].layerIds.length === 0 && (t.removeGrid(n), n === t.currentId)) {
							let e = this.$iApi.panel.get("grid");
							this.$iApi.panel.close(e), t.currentId = void 0;
						}
					}
				}, this.$iApi.event.on(Z.LAYER_REMOVE, n, e);
				break;
			case Q.LAYER_REMOVE_UPDATES_DETAILS:
				n = (e) => {
					let t = qt(this.$vApp.$pinia);
					this.$iApi.fixture.get("details") && t.removeLayer(e);
				}, this.$iApi.event.on(Z.LAYER_REMOVE, n, e);
				break;
			case Q.LAYER_REMOVE_UPDATES_LEGEND:
				n = (e) => {
					let t = this.$iApi.fixture.get("legend");
					t && (t.removeLayerItem(e), this.$iApi.updateAlert(this.$iApi.$i18n.t("legend.alert.layerRemoved", { name: e.name })));
				}, this.$iApi.event.on(Z.LAYER_REMOVE, n, e);
				break;
			case Q.LAYER_USERADD_UPDATES_LEGEND:
				n = (e) => {
					let t = this.$iApi.fixture.get("legend");
					t && t.addLayerItem(e);
				}, this.$iApi.event.on(Z.USER_LAYER_ADDED, n, e);
				break;
			case Q.MAP_BASEMAP_CHECKS_TILE_PROJ:
				n = (e) => {
					e.schemaChanged && this.$iApi.geo.layer.allLayers().filter((e) => e.dataFormat === z.ESRI_TILE && e.schemaLocked).forEach((e) => {
						e.checkProj();
					});
				}, this.$iApi.event.on(Z.MAP_BASEMAPCHANGE, n, e);
				break;
			case Q.MAP_BASEMAP_UPDATES_MAP_ATTRIBS:
				n = () => {
					this.$iApi.geo.map.caption.updateAttribution(t(this.$vApp.$pinia).activeBasemapConfig?.attribution);
				}, this.$iApi.event.on(Z.MAP_BASEMAPCHANGE, n, e);
				break;
			case Q.MAP_BLUR_UPDATES_KEY_HANDLER:
				n = () => {
					this.$iApi.geo.map.stopKeyPan();
				}, this.$iApi.event.on(Z.MAP_BLUR, n, e);
				break;
			case Q.MAP_CLICK_RUNS_IDENTIFY:
				n = (e) => {
					e.button === 0 && this.$iApi.geo.map.runIdentify(e);
				}, this.on(Z.MAP_CLICK, n, e);
				break;
			case Q.MAP_CREATED_INITIALIZES_FIXTURES:
				n = () => {
					let e = Jt(this.$vApp.$pinia).items;
					Object.keys(e).forEach((t) => {
						e[t].initialized?.();
					});
				}, this.$iApi.geo.map.created && n(), this.$iApi.event.on(Z.MAP_CREATED, n, e);
				break;
			case Q.MAP_CREATED_UPDATES_MAP_ATTRIBS:
				n = () => {
					this.$iApi.geo.map.caption.updateAttribution(t(this.$vApp.$pinia).activeBasemapConfig?.attribution);
				}, this.$iApi.geo.map.created && n(), this.$iApi.event.on(Z.MAP_CREATED, n, e);
				break;
			case Q.MAP_EXTENT_UPDATES_MAPTIP:
				n = () => {
					if (this.$iApi.geo.map.keysActive) {
						let e = this.$iApi.geo.map.mapPointToScreenPoint(this.$iApi.geo.map.getExtent().center());
						this.$iApi.geo.map.maptip.checkAtCoord(e);
					} else this.$iApi.geo.map.maptip.clear();
				}, this.$iApi.event.on(Z.MAP_EXTENTCHANGE, ze(() => n(), 50, { edges: ["leading"] }), e);
				break;
			case Q.MAP_GRAPHICHIT_CREATES_MAPTIP:
				n = (e) => {
					this.$iApi.geo.map.maptip.generateDefaultMaptip(e);
				}, this.$iApi.event.on(Z.MAP_GRAPHICHIT, n, e);
				break;
			case Q.MAP_IDENTIFY_OPENS_IDENTIFY_RESULTS:
				n = (e) => {
					let t = this.$iApi.fixture.get("details");
					t && t.openDetails(e.results);
				}, this.on(Z.MAP_IDENTIFY, n, e);
				break;
			case Q.MAP_KEYDOWN_UPDATES_COORDS:
				this.$iApi.event.on(Z.MAP_KEYDOWN, ze(() => {
					let e = Gt(this.$vApp.$pinia);
					e.coords?.disabled || !this.$iApi.geo.map.keysActive || this.$iApi.geo.map.caption.formatPoint(this.$iApi.geo.map.getExtent().center()).then((t) => {
						e.coords = { formattedString: t };
					});
				}, 50), e);
				break;
			case Q.MAP_KEYDOWN_UPDATES_KEY_HANDLER:
				n = (e) => {
					this.$iApi.geo.map.mapKeyDown(e);
				}, this.$iApi.event.on(Z.MAP_KEYDOWN, n, e);
				break;
			case Q.MAP_KEYUP_UPDATES_KEY_HANDLER:
				n = (e) => {
					this.$iApi.geo.map.mapKeyUp(e);
				}, this.$iApi.event.on(Z.MAP_KEYUP, n, e);
				break;
			case Q.MAP_MOUSE_UPDATES_COORDS:
				this.$iApi.event.on(Z.MAP_MOUSEMOVE, ze((e) => {
					let t = Gt(this.$vApp.$pinia);
					t.coords?.disabled || this.$iApi.geo.map.caption.formatPoint(this.$iApi.geo.map.screenPointToMapPoint(e)).then((e) => {
						t.coords = { formattedString: e };
					});
				}, 50), e);
				break;
			case Q.MAP_MOUSE_UPDATES_MAPTIP:
				n = (e) => {
					this.$iApi.geo.map.maptip.checkAtCoord({
						screenX: e.screenX,
						screenY: e.screenY
					});
				}, this.$iApi.event.on(Z.MAP_MOUSEMOVE, ze((e) => n(e), 50), e);
				break;
			case Q.MAP_MOUSEDOWN_UPDATES_MAPTIP:
				n = (e) => {
					this.$iApi.geo.map.maptip.checkAtCoord({
						screenX: e.screenX,
						screenY: e.screenY
					});
				}, this.$iApi.event.on(Z.MAP_MOUSEDOWN, ze((e) => {
					let t = {
						screenX: e.offsetX,
						screenY: e.offsetY,
						button: e.button,
						moveTime: 0
					};
					n(t);
				}, 50), e);
				break;
			case Q.MAP_MOUSELEAVE_REMOVES_MAPTIP:
				n = () => {
					this.$iApi.geo.map.maptip.clear();
				}, this.$iApi.event.on(Z.MAP_MOUSELEAVE, n);
				break;
			case Q.MAP_RESIZE_UPDATES_SCALEBAR:
				this.$iApi.event.on(Z.MAP_RESIZED, Re(() => this.$iApi.geo.map.caption.updateScale(), 100), e);
				break;
			case Q.MAP_SCALE_UPDATES_SCALEBAR:
				this.$iApi.event.on(Z.MAP_SCALECHANGE, Re(() => this.$iApi.geo.map.caption.updateScale(), 300), e);
				break;
			case Q.PANEL_CLOSE_UPDATES_APPBAR:
				n = (e) => {
					let t = Ut(this.$vApp.$pinia);
					this.$iApi.fixture.get("appbar") && !t.order.flat().find((t) => t === e.id) && t.removeButton(e.id);
				}, this.on(Z.PANEL_CLOSED, n, e);
				break;
			case Q.PANEL_OPEN_UPDATES_APPBAR:
				n = (e) => {
					let t = Ut(this.$vApp.$pinia);
					this.$iApi.fixture.get("appbar") && (!e.teleport || e.teleport?.showAppbarButton) && !t.order.flat().find((t) => t === e.id) && t.addTempButton(e.id);
				}, this.on(Z.PANEL_OPENED, n, e);
				break;
			case Q.TOGGLE_DETAILS:
				n = (e, t) => {
					let n = this.$iApi.fixture.get("details");
					n && n.toggleFeature(e, t);
				}, this.$iApi.event.on(Z.DETAILS_TOGGLE, n, e);
				break;
			case Q.TOGGLE_GRID:
				n = (e, t) => {
					let n = this.$iApi.fixture.get("grid");
					n && n.toggleGrid(e.id, t);
				}, this.$iApi.event.on(Z.GRID_TOGGLE, n, e);
				break;
			case Q.TOGGLE_HELP:
				n = (e) => {
					let t = this.$iApi.fixture.get("help");
					t && t.toggleHelp(e);
				}, this.$iApi.event.on(Z.HELP_TOGGLE, n, e);
				break;
			case Q.TOGGLE_METADATA:
				n = (e, t) => {
					let n = this.$iApi.fixture.get("metadata");
					n && n.toggleMetadata(e, t);
				}, this.$iApi.event.on(Z.METADATA_TOGGLE, n, e);
				break;
			case Q.TOGGLE_REORDER:
				n = (e) => {
					let t = this.$iApi.fixture.get("layer-reorder");
					t && t.toggleLayerReorder(e);
				}, this.$iApi.event.on(Z.REORDER_TOGGLE, n, e);
				break;
			case Q.TOGGLE_SETTINGS:
				n = (e, t) => {
					let n = this.$iApi.fixture.get("settings");
					n && n.toggleSettings(e, t);
				}, this.$iApi.event.on(Z.SETTINGS_TOGGLE, n, e);
				break;
			case Q.TOGGLE_WIZARD:
				n = (e) => {
					let t = this.$iApi.fixture.get("wizard");
					t && t.toggleWizard(e);
				}, this.$iApi.event.on(Z.WIZARD_TOGGLE, n, e);
				break;
			default: return console.error(`Unrecognized default event handler name encountered: ${e}`), `ERROR_NOT_REGISTERED__${e}`;
		}
		return e;
	}
}, Zt = {
	en: {
		"lang-code": "en",
		"lang-dir": "ltr",
		"lang-en": "English",
		"lang-fr": "anglais",
		"lang-native": "English",
		"ramp.about.open": "Open About RAMP",
		"ramp.about": "About RAMP",
		"ramp.about.esriLegal": "Powered by ESRI",
		"ramp.about.esriLink": "https://www.esri.com/",
		"ramp.reload": "Reload RAMP",
		"keyboardInstructions.title": "Keyboard Instructions",
		"keyboardInstructions.open": "Open keyboard instructions",
		"keyboardInstructions.app": "Use 'Tab' to navigate between sections of the application.",
		"keyboardInstructions.lists": "Use the arrow keys to move between items in lists. With a list item selected you can press 'Space' or 'Enter' to click the item. You can also navigate within the list item using 'Tab'.",
		"keyboardInstructions.map": "When the map is selected, use the arrow keys to move around and 'Enter' to select a point.",
		"keyboardInstructions.keyboardNav": "Press the key 'S' then 'H' to view available keyboard shortcuts",
		"keyboardInstructions.OK": "OK",
		"map.toggleScaleToMetric": "Switch to metric map scale",
		"map.toggleScaleToImperial": "Switch to imperial map scale",
		"map.coordinates.east": "E",
		"map.coordinates.west": "W",
		"map.coordinates.north": "N",
		"map.coordinates.south": "S",
		"map.changeLanguage": "Change Language",
		"map.language.short": "EN-CA",
		"map.language.en": "English",
		"map.language.fr": "Français",
		"map.language.curr": "current",
		"map.export": "export map",
		"map.layerSwipe.drag": "Drag and slide to move",
		"map.layerSwipe.label": "Layer swipe",
		"notifications.open": "Open Notifications Panel",
		"notifications.title": "Notifications",
		"notifications.empty": "No new notifications.",
		"notifications.controls.dismiss": "Dismiss",
		"notifications.controls.expand": "Expand",
		"notifications.controls.collapse": "Collapse",
		"notifications.controls.clearAll": "Clear All",
		"panels.access": "Press enter or space to access the panel",
		"panels.controls.close": "Close",
		"panels.controls.pin": "Pin",
		"panels.controls.unpin": "Unpin",
		"panels.controls.back": "Back",
		"panels.controls.optionsMenu": "More",
		"panels.controls.minimize": "Minimize",
		"panels.controls.expand": "Expand",
		"panels.controls.collapse": "Collapse",
		"panels.controls.moveRight": "Move Right",
		"panels.controls.moveLeft": "Move Left",
		"panels.controls.items": "Use the arrow keys to navigate the items",
		"panels.alert.open": "{name} panel opened",
		"panels.alert.close": "{name} panel closed",
		"panels.alert.minimize": "{name} panel minimized",
		"layer.error": "{id} failed to load",
		"layer.longload": "{id} is taking longer than expected to load",
		"layer.longdraw": "{id} is taking longer than expected to draw",
		"layer.mismatch": "{name} cannot be displayed in the current projection",
		"layer.filtersdisabled": "Filters have been disabled for {name}",
		"layer.filterwarning": "You are attempting to use a grid that contains unmodifiable layers. Filtering will be partially disabled.",
		"layer.noexportmap": "{name} was attempted to be added as a Map Image Layer but Map Export is not enabled for the service",
		"caption.attributionDefaultText": "Powered by ESRI",
		"": ""
	},
	fr: {
		"lang-code": "fr",
		"lang-dir": "ltr",
		"lang-en": "French",
		"lang-fr": "français",
		"lang-native": "Français",
		"ramp.about.open": "Ouvrir À propos de PCAR",
		"ramp.about": "À propos de PCAR",
		"ramp.about.esriLegal": "Propulsé par ESRI",
		"ramp.about.esriLink": "https://www.esri.com/fr-fr/home",
		"ramp.reload": "Recharger PCAR",
		"keyboardInstructions.title": "Instructions clavier",
		"keyboardInstructions.open": "Instructions clavier ouvert",
		"keyboardInstructions.app": "Utilisez la touche Tab pour vous déplacer entre les sections de l'application.",
		"keyboardInstructions.lists": "Lorsqu'un élément de la liste est sélectionné, vous pouvez appuyer sur « Espace » ou « Entrée » pour cliquer sur l'élément. Vous pouvez également vous déplacer au sein de l'élément de la liste au moyen de la touche « Tab ».",
		"keyboardInstructions.map": "Lorsque la carte est sélectionnée, utilisez le pavé curseur pour vous déplacer et appuyez sur « Entrée »  pour sélectionner un point.",
		"keyboardInstructions.keyboardNav": "Appuyez sur la touche « S » puis « H » pour afficher les raccourcis clavier disponibles",
		"keyboardInstructions.OK": "OK",
		"map.toggleScaleToMetric": "Passer à l'échelle métrique",
		"map.toggleScaleToImperial": "Passer à l'échelle impériale",
		"map.coordinates.east": "E",
		"map.coordinates.west": "O",
		"map.coordinates.north": "N",
		"map.coordinates.south": "S",
		"map.changeLanguage": "Changer de langue",
		"map.language.short": "FR-CA",
		"map.language.en": "English",
		"map.language.fr": "Français",
		"map.language.curr": "actuel",
		"map.export": "exporter la carte",
		"map.layerSwipe.drag": "Faites glisser et glissez pour déplacer",
		"map.layerSwipe.label": "Glissement de calque",
		"notifications.open": "Ouvrir la fenêtre des notifications",
		"notifications.title": "Notifications",
		"notifications.empty": "Aucune nouvelle notification.",
		"notifications.controls.dismiss": "Rejeter",
		"notifications.controls.expand": "Développer",
		"notifications.controls.collapse": "Réduire",
		"notifications.controls.clearAll": "Effacer tout",
		"panels.access": "Appuyez sur Entrée ou sur la barre d'espacement pour accéder au panneau",
		"panels.controls.close": "Fermer",
		"panels.controls.pin": "Épingler",
		"panels.controls.unpin": "Désépingler",
		"panels.controls.back": "Retour",
		"panels.controls.optionsMenu": "Plus",
		"panels.controls.minimize": "Réduire",
		"panels.controls.expand": "Développer",
		"panels.controls.collapse": "Réduire",
		"panels.controls.moveRight": "Aller à droite",
		"panels.controls.moveLeft": "Aller à gauche",
		"panels.controls.items": "Utilisez les touches fléchées pour naviguer entre les éléments",
		"panels.alert.open": "Fenêtre {name} ouverte",
		"panels.alert.close": "Fenêtre {name} fermée",
		"panels.alert.minimize": "Fenêtre {name} réduite",
		"layer.error": "Échec du chargement de {id}",
		"layer.longload": "Le chargement de {id} met plus de temps que prévu",
		"layer.longdraw": "{id} prend plus de temps que prévu à extraire",
		"layer.mismatch": "{id} ne peut pas s'afficher dans la projection actuelle",
		"layer.filtersdisabled": "Les filtres ont été désactivés pour {name}",
		"layer.filterwarning": "Vous essayez d'utiliser une grille qui contient des couches non modifiables. Le filtrage sera partiellement désactivé.",
		"layer.noexportmap": "La tentative d’ajouter {name} comme couche d’imagerie cartographique a échouée car elle n’a pu être activé pour ce service",
		"caption.attributionDefaultText": "Propulsé par ESRI",
		"": ""
	}
}, Qt = "en", $t = ["en", "fr"], en = {
	en: { number: {
		style: "decimal",
		useGrouping: !1,
		maximumFractionDigits: 20
	} },
	fr: { number: {
		style: "decimal",
		useGrouping: !1,
		maximumFractionDigits: 20
	} }
};
function tn() {
	let e = document.documentElement.getAttribute("lang") || Qt;
	return $t.includes(e) || (e = Qt), Be({
		legacy: !1,
		locale: e,
		fallbackLocale: Qt,
		globalInjection: !0,
		messages: Zt,
		numberFormats: en
	});
}
//#endregion
//#region src/stores/maptip/maptip-store.ts
var nn = v("maptip", () => {
	let e = k(void 0), t = k(void 0), n = k("");
	function r(t) {
		e.value = t;
	}
	function i(e) {
		t.value = e;
	}
	function a(e) {
		n.value = e;
	}
	return {
		maptipInstance: e,
		maptipPoint: t,
		content: n,
		setMaptipInstance: r,
		setMaptipPoint: i,
		setMaptipContent: a
	};
}), rn = /* @__PURE__ */ T({
	__name: "esri-map",
	setup(e) {
		let t = nn(), n = ye("iApi"), r = y(() => t.maptipPoint), i = y(() => t.maptipInstance), a = y(() => t.content), o = Ee([]), s = k(!1);
		o.push(Fe(r, () => {
			if (r.value) {
				let e = n.geo.map.getPixelWidth() / 2, t = n.geo.map.mapPointToScreenPoint(r.value), o = t.screenX - e, c = 0 - t.screenY;
				i.value.setProps({ offset: s.value ? [o, c + 25] : [o, c] }), a.value && a.value !== "" && i.value.show();
			} else i.value.hide();
		})), o.push(Fe(a, (e) => {
			e && e !== "" && r ? (i.value.setContent(e), i.value.show()) : i.value.hide();
		})), Ce(() => {
			o.forEach((e) => e());
		});
		let c = () => {
			n.geo.map.setMouseFocus();
		};
		return (e, t) => {
			let n = j("tippy");
			return F((O(), S("div", {
				name: "esriMap",
				id: "esriMap",
				class: "h-full overflow-hidden",
				onMousedown: c,
				onTouchstart: t[0] ||= (e) => s.value = !0,
				onTouchend: t[1] ||= (e) => s.value = !1,
				onKeydown: t[2] ||= Ie(Le(() => {}, ["prevent"]), [
					"up",
					"down",
					"left",
					"right"
				])
			}, null, 544)), [[n, {
				allowHTML: !0,
				zIndex: 150,
				theme: "ramp4",
				trigger: "manual",
				appendTo: "parent",
				arrow: !1,
				delay: 200,
				duration: [200, 200]
			}]]);
		};
	}
}), an = {
	xs: 200,
	sm: 576,
	md: 768,
	lg: 960
}, on = class {
	resizeObserver;
	constructor(e) {
		this.resizeObserver = new ResizeObserver((t) => {
			t.length && window.requestAnimationFrame(() => {
				t.forEach((t) => {
					let n = t.target.dataset.breakpoints, r = n ? JSON.parse(n) : e ?? an;
					Object.keys(r).forEach((e) => {
						let n = r[e];
						t.contentRect.width >= n ? t.target.classList.add(e) : t.target.classList.remove(e);
					});
				});
			});
		});
	}
	observe(e) {
		this.resizeObserver?.observe(e);
	}
}, sn = ["data-cy"], cn = /* @__PURE__ */ T({
	__name: "panel-container",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = k(null), n = e, r = k(!1);
		we(() => {
			n.panel.teleport && new on({
				xs: 0,
				sm: 461,
				...n.panel.teleport.breakpoints
			}).observe(t.value);
		});
		let i = (e, t, n) => {
			if (r.value) return t();
			Ue({
				targets: e,
				opacity: {
					value: n,
					duration: 400,
					easing: "cubicBezier(.5, .05, .1, .3)"
				},
				complete: t
			});
		}, a = (e, t) => {
			i(e, t, [0, 1]);
		}, o = (e) => {
			e.classList.contains("screen-spinner") || (r.value = n.panel.isScreenLoaded(n.panel.route.screen), t.value.querySelectorAll("[focus-item").forEach((e) => e.classList.remove("default-focus-style")));
		}, s = (e, t) => {
			i(e, t, [0, 1]);
		};
		return (n, r) => {
			let i = j("focus-container");
			return O(), S("div", {
				class: D(["shadow-tm bg-white h-full xs:mr-0 sm:mr-12 last:mr-0 pointer-events-auto min-w-0 shrink-0", e.panel.expanded ? "flex-grow max-w-full" : ""]),
				style: Se(e.panel.style),
				"data-cy": e.panel.id,
				ref_key: "componentEl",
				ref: t
			}, [w(fe, {
				onBeforeLeave: o,
				onLeave: s,
				onEnter: a
			}, {
				default: P(() => [F((O(), b(Ae(e.panel.route.screen), be({ class: "h-full" }, e.panel.route.props, { panel: e.panel }), null, 16, ["panel"])), [[i]])]),
				_: 1
			})], 14, sn);
		};
	}
}), ln = v("panel", () => {
	let e = k(void 0), t = k(void 0), n = k(0), r = k(0), i = k(!1), a = k(!0), o = k({}), s = k({}), c = k([]), l = k([]), u = k([]), d = k(1), f = y(() => r.value);
	function p(e) {
		return e === "xs" && u.value.length > 0 ? [u.value.slice().pop()] : u.value;
	}
	function m(e) {
		let t = [];
		return e.forEach((e) => {
			e in s.value && t.push(s.value[e].getPromise());
		}), t;
	}
	function h(e) {
		_(e), ae(), t.value = void 0;
	}
	function ee(e) {
		se(e), ae();
	}
	function g(e, t) {
		ce(e, t), ae();
	}
	function te(e) {
		v(e), ae();
	}
	function ne(e) {
		d.value = e;
	}
	function re(e) {
		n.value = e, ae();
	}
	function ie(e) {
		i.value = e;
	}
	function ae() {
		let a = n.value, o = [];
		for (let e = c.value.length - 1; e >= 0; e--) {
			let t = c.value[e], n = t.width || 350;
			if (i.value ? n = a : n += 12, t.id === "grid" && (n = Math.max(Math.min(n, a), 600)), (a >= n && !i.value || o.length === 0) && (a -= n, o.unshift(t)), t.id === "grid" && a < 600) break;
		}
		if (e.value && !o.includes(e.value) && !i.value) {
			let n;
			for (let t = 0; t < o.length - 1 && a < (e.value.width || 350) + 12; t++) n = o.shift(), a += n.width || 350;
			a >= (e.value.width || 350) ? o.unshift(e.value) : t.value || (n = o.shift(), o.unshift(e.value));
			let r = c.value.indexOf(e.value), i = c.value.indexOf(n), s = c.value.slice();
			i > -1 && (s.splice(r, 1), s.splice(i, 0, e.value)), c.value = s;
		}
		r.value = a, u.value = o;
	}
	function oe(e) {
		if (o.value = {
			...o.value,
			[e.id]: e
		}, e.id in s.value) s.value[e.id].resolveMe(e);
		else {
			let t = new Y();
			t.resolveMe(e), s.value = {
				...s.value,
				[e.id]: t
			};
		}
	}
	function _(e) {
		e.teleport ? l.value = [...l.value, e] : (c.value = [...c.value, e], t.value = e);
	}
	function se(e) {
		if (e.teleport) {
			let t = l.value.indexOf(e);
			t !== -1 && (l.value = [...l.value.slice(0, t), ...l.value.slice(t + 1)]);
		} else {
			let t = c.value.indexOf(e);
			t !== -1 && (c.value = [...c.value.slice(0, t), ...c.value.slice(t + 1)]);
		}
	}
	function ce(e, t) {
		let n = c.value.indexOf(e), r = t === "right" ? 1 : -1;
		u.value.includes(c.value[n + r]) && ([c.value[n], c.value[n + r]] = [c.value[n + r], c.value[n]]);
	}
	function v(t) {
		o.value[t.id] !== void 0 && delete o.value[t.id], s.value[t.id] !== void 0 && delete s.value[t.id];
		let n = u.value.indexOf(t);
		n !== -1 && (u.value = [...u.value.slice(0, n), ...u.value.slice(n + 1)]), e.value && e.value.id == t.id && (e.value = void 0);
	}
	function le(e) {
		s.value = {
			...s.value,
			[e]: new Y()
		};
	}
	return {
		items: o,
		regPromises: s,
		orderedItems: c,
		pinned: e,
		priority: t,
		visible: u,
		opacity: d,
		stackWidth: n,
		remWidth: r,
		mobileView: i,
		reorderable: a,
		teleported: l,
		getRemainingWidth: f,
		getVisible: p,
		getRegPromises: m,
		openPanel: h,
		closePanel: ee,
		movePanel: g,
		removePanel: te,
		setOpacity: ne,
		setStackWidth: re,
		setMobileView: ie,
		updateVisible: ae,
		registerPanel: oe,
		addRegPromise: le
	};
}), un = /* @__PURE__ */ n(/* @__PURE__ */ T({
	__name: "panel-stack",
	setup(e) {
		Me((e) => ({ v3d36ee4c: i.value }));
		let t = ln(), n = ye("iApi"), r = k(), i = y(() => t.opacity), a = y(() => t.mobileView);
		we(() => {
			new ResizeObserver((e) => {
				let r = !(n.$vApp.$root?.$refs["app-size"]).classList.contains("sm");
				a.value !== r && (t.mobileView = r, n.event.emit(Z.RAMP_MOBILEVIEW_CHANGE, r)), t.setStackWidth(e[0].contentRect.width);
			}).observe(r.value?.$el);
		});
		let o = (e) => t.getVisible(e), s = (e, t) => {
			l(e, t, [[6, 0], [0, 1]]);
		}, c = (e, t) => {
			let [n, r] = [e.children[0].getBoundingClientRect(), e.parentElement.getBoundingClientRect()];
			e.style.width = `${n.width}px`, e.style.height = `${n.height}px`, e.style.left = `${n.left - r.left}px`, e.style.position = "absolute", l(e, t, [[0, -6], [1, 0]]);
		}, l = (e, t, n) => {
			Ue({
				targets: e,
				duration: 300,
				translateY: {
					value: n[0],
					easing: "cubicBezier(.5, .05, .1, .3)"
				},
				opacity: {
					value: n[1],
					duration: 250,
					easing: "cubicBezier(.5, .05, .1, .3)"
				},
				complete: t
			});
		};
		return (e, t) => (O(), b(pe, {
			onEnter: s,
			onLeave: c,
			name: "panel-container",
			tag: "div",
			ref_key: "el",
			ref: r,
			class: "panel-container"
		}, {
			default: P(() => [(O(!0), S(ue, null, Oe(o(N(n).screenSize), (e) => (O(), b(cn, {
				key: `${e.id}`,
				panel: e
			}, null, 8, ["panel"]))), 128))]),
			_: 1
		}, 512));
	}
}), [["__scopeId", "data-v-717e4bd7"]]), dn = ["content", "aria-label"], fn = /* @__PURE__ */ T({
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
		tooltipPlacement: {
			type: String,
			default: "bottom"
		},
		tooltipPlacementAlt: {
			type: String,
			default: "top"
		},
		tooltipTheme: {
			type: String,
			default: "ramp4"
		},
		tooltipAnimation: {
			type: String,
			default: "scale"
		},
		centered: {
			type: Boolean,
			default: !0
		},
		ariaLabel: { type: String }
	},
	setup(e) {
		let t = k(!1), n = k(null), r = Ee([]), i = k(), a = k(), o = k(), s = e;
		r.push(Fe(t, () => {
			n.value.update();
		}));
		let c = () => {
			t.value = !t.value, o.value._tippy.hide();
		}, l = () => {
			o.value._tippy.setProps({ placement: t.value ? s.tooltipPlacementAlt : s.tooltipPlacement }), o.value._tippy.show();
		}, u = () => {
			o.value._tippy.hide();
		};
		return we(() => {
			window.addEventListener("click", (e) => {
				(!i.value || !i.value.contains(e.target)) && (t.value = !1);
			}, { capture: !0 }), window.addEventListener("blur", () => {
				t.value = !1;
			}), window.addEventListener("focusin", (e) => {
				(!i.value || !i.value.contains(e.target)) && (t.value = !1);
			}), o.value.addEventListener("focus", l), o.value.addEventListener("blur", u), o.value.addEventListener("mouseover", l), o.value.addEventListener("mouseleave", u), xe(() => {
				o.value && a.value && (n.value = We(o.value, a.value, {
					placement: s.position || "bottom",
					modifiers: [{
						name: "overflowScroll",
						enabled: !0,
						phase: "main",
						fn({ state: e }) {
							let { bottom: t } = Ge(e);
							t > 0 ? (e.styles.popper.overflowY = t > 100 ? "auto" : void 0, e.styles.popper.overflowX = "hidden", e.styles.popper.height = `${e.rects.popper.height - t - 8}px`) : e.styles.popper.height = "auto";
						}
					}, {
						name: "offset",
						options: { offset: [0, 5] }
					}],
					...s.popperOptions
				}));
			});
		}), Ce(() => {
			r.forEach((e) => e()), window.removeEventListener("click", (e) => {
				(!i.value || !i.value.contains(e.target)) && (t.value = !1);
			}, { capture: !0 }), window.removeEventListener("blur", () => {
				t.value = !1;
			}), window.removeEventListener("focusin", (e) => {
				(!i.value || !i.value.contains(e.target)) && (t.value = !1);
			}), o.value.removeEventListener("focus", l), o.value.removeEventListener("blur", u), o.value.removeEventListener("mouseover", l), o.value.removeEventListener("mouseleave", u), t.value = !1;
		}), (r, s) => {
			let l = j("tippy");
			return O(), S("div", {
				ref_key: "el",
				ref: i
			}, [F((O(), S("button", {
				type: "button",
				class: "text-gray-500 hover:text-black dropdown-button",
				onClick: c,
				content: e.tooltip,
				"aria-label": e.ariaLabel ? String(e.ariaLabel) : String(e.tooltip),
				ref_key: "dropdownTrigger",
				ref: o
			}, [ke(r.$slots, "header")], 8, dn)), [[l, {
				placement: e.tooltipPlacement,
				theme: e.tooltipTheme,
				animation: e.tooltipAnimation,
				trigger: "manual"
			}]]), F(C("div", {
				onClick: s[0] ||= (e) => n.value.update(),
				class: D(["rv-dropdown shadow-md border border-gray:200 py-8 bg-white rounded z-10", { "text-center": e.centered }]),
				ref_key: "dropdown",
				ref: a
			}, [ke(r.$slots, "default", { close: () => t.value = !t.value })], 2), [[Pe, t.value]])], 512);
		};
	}
}), pn = v("notification", () => {
	let e = 0, t = k([]), n = k({}), r = y(() => t.value.length >= 99 ? 99 : t.value.length);
	function i(n) {
		t.value = [{
			...n,
			id: `notif-${e++}`
		}, ...t.value];
	}
	function a(e) {
		if (t.value.includes(e)) {
			let n = t.value.indexOf(e);
			e instanceof bn && l(e), n > -1 && t.value.splice(n, 1);
		}
	}
	function o(e) {
		n.value[e.id] = e;
	}
	function s(e, r) {
		n.value[e] && (n.value[e].messageList.push(r), t.value.includes(n.value[e]) || (t.value = [n.value[e], ...t.value]));
	}
	function c() {
		Object.values(n.value).forEach((e) => l(e)), t.value = [];
	}
	function l(e) {
		let n = t.value.indexOf(e);
		n > -1 && t.value.splice(n, 1), e.messageList = [];
	}
	return {
		notificationStack: t,
		groups: n,
		notificationNumber: r,
		showNotification: i,
		removeNotification: a,
		registerGroup: o,
		addToGroup: s,
		clearAll: c
	};
}), mn = { class: "h-full flex flex-col" }, hn = { class: "w-full flex mb-6" }, gn = ["content", "aria-label"], _n = /* @__PURE__ */ T({
	__name: "screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = pn(), { t: n } = I(), r = y(() => t.notificationNumber), i = () => t.clearAll();
		return (t, a) => {
			let o = A("panel-screen"), s = j("tippy");
			return O(), b(o, { panel: e.panel }, {
				header: P(() => [he(M(N(n)("notifications.title")), 1)]),
				content: P(() => [C("div", mn, [C("div", hn, [F((O(), S("button", {
					type: "button",
					onClick: i,
					class: D(["p-4 ml-auto", [r.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default pointer-events-none"]]),
					content: N(n)("notifications.controls.clearAll"),
					"aria-label": N(n)("notifications.controls.clearAll")
				}, [...a[0] ||= [C("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					class: "fill-current h-20 w-20",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, [
					C("path", {
						stroke: "none",
						d: "M0 0h24v24H0z",
						fill: "none"
					}),
					C("path", { d: "M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" }),
					C("path", { d: "M9 17v1a3 3 0 0 0 4.194 2.753" }),
					C("path", { d: "M22 22l-5 -5" }),
					C("path", { d: "M17 22l5 -5" })
				], -1)]], 10, gn)), [[s, {
					placement: "bottom",
					theme: "ramp4",
					animation: "scale"
				}]])]), w(An, { class: "overflow-y-auto" })])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), vn = /* @__PURE__ */ function(e) {
	return e.ERROR = "error", e.INFO = "info", e.WARNING = "warning", e;
}({}), yn = class extends X {
	notificationStore;
	constructor(e) {
		super(e), this.$iApi.panel.register({
			id: "notifications",
			config: {
				screens: { "notifications-screen": E(_n) },
				alertName: "notifications.title"
			}
		}), this.notificationStore = pn(this.$vApp.$pinia);
	}
	show(e, t) {
		this.notificationStore.showNotification({
			type: e,
			message: t
		});
	}
	addGroup(e, t, n) {
		if (this.getGroup(e)) throw Error("Duplicate notification group id registration: " + e);
		let r = new bn(this.$iApi, e, t, n);
		return this.notificationStore.registerGroup(r), r;
	}
	getGroup(e) {
		return this.notificationStore.groups[e];
	}
}, bn = class extends X {
	notificationStore = pn(this.$vApp.$pinia);
	id;
	message;
	type;
	messageList = [];
	constructor(e, t, n, r) {
		super(e), this.id = t, this.type = n, this.message = r;
	}
	show(e) {
		this.notificationStore.addToGroup(this.id, e);
	}
}, xn = ["content"], Sn = { class: "flex items-center text-left" }, Cn = { class: "select-text cursor-text" }, wn = ["content", "aria-label"], Tn = {
	key: 0,
	class: "text-left"
}, En = /* @__PURE__ */ T({
	__name: "notification-item",
	props: { notification: {
		type: Object,
		required: !0
	} },
	emits: ["remove"],
	setup(e, { emit: t }) {
		let { t: n } = I(), r = t, i = e, a = k(!1), o = Ee({
			[vn.WARNING]: "⚠",
			[vn.INFO]: "ℹ️",
			[vn.ERROR]: "❌"
		}), s = () => {
			if (!i.notification.messageList) return !1;
		};
		return (t, i) => {
			let c = j("tippy");
			return F((O(), S("li", {
				class: D(["flex-col default-focus-style p-4", e.notification.messageList ? "cursor-pointer" : ""]),
				content: N(n)(a.value ? "notifications.controls.collapse" : "notifications.controls.expand"),
				onClick: i[1] ||= (e) => a.value = !a.value
			}, [C("div", Sn, [
				C("span", null, [he(M(o[e.notification.type]) + " ", 1), C("span", Cn, M(e.notification.message), 1)]),
				i[4] ||= C("span", { class: "flex-grow" }, null, -1),
				e.notification.messageList ? (O(), S("div", {
					key: 0,
					class: D(["dropdown-icon p-4 pointer-events-none", { "transform -rotate-180": a.value }])
				}, [...i[2] ||= [C("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					height: "24",
					viewBox: "0 0 24 24",
					width: "24"
				}, [C("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })], -1)]], 2)) : x("", !0),
				F((O(), S("button", {
					type: "button",
					onClick: i[0] ||= Le(() => r("remove"), ["stop"]),
					class: "mx-4 p-4 text-gray-500 hover:text-black",
					content: N(n)("notifications.controls.dismiss"),
					"aria-label": N(n)("notifications.controls.dismiss")
				}, [...i[3] ||= [C("svg", {
					class: "fill-current",
					height: "16",
					width: "16",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 105.16 122.88",
					"fill-rule": "evenodd"
				}, [C("path", { d: "M11.17,37.16H94.65a8.4,8.4,0,0,1,2,.16,5.93,5.93,0,0,1,2.88,1.56,5.43,5.43,0,0,1,1.64,3.34,7.65,7.65,0,0,1-.06,1.44L94,117.31v0l0,.13,0,.28v0a7.06,7.06,0,0,1-.2.9v0l0,.06v0a5.89,5.89,0,0,1-5.47,4.07H17.32a6.17,6.17,0,0,1-1.25-.19,6.17,6.17,0,0,1-1.16-.48h0a6.18,6.18,0,0,1-3.08-4.88l-7-73.49a7.69,7.69,0,0,1-.06-1.66,5.37,5.37,0,0,1,1.63-3.29,6,6,0,0,1,3-1.58,8.94,8.94,0,0,1,1.79-.13ZM5.65,8.8H37.12V6h0a2.44,2.44,0,0,1,0-.27,6,6,0,0,1,1.76-4h0A6,6,0,0,1,43.09,0H62.46l.3,0a6,6,0,0,1,5.7,6V6h0V8.8h32l.39,0a4.7,4.7,0,0,1,4.31,4.43c0,.18,0,.32,0,.5v9.86a2.59,2.59,0,0,1-2.59,2.59H2.59A2.59,2.59,0,0,1,0,23.62V13.53H0a1.56,1.56,0,0,1,0-.31v0A4.72,4.72,0,0,1,3.88,8.88,10.4,10.4,0,0,1,5.65,8.8Zm42.1,52.7a4.77,4.77,0,0,1,9.49,0v37a4.77,4.77,0,0,1-9.49,0v-37Zm23.73-.2a4.58,4.58,0,0,1,5-4.06,4.47,4.47,0,0,1,4.51,4.46l-2,37a4.57,4.57,0,0,1-5,4.06,4.47,4.47,0,0,1-4.51-4.46l2-37ZM25,61.7a4.46,4.46,0,0,1,4.5-4.46,4.58,4.58,0,0,1,5,4.06l2,37a4.47,4.47,0,0,1-4.51,4.46,4.57,4.57,0,0,1-5-4.06l-2-37Z" })], -1)]], 8, wn)), [[c, {
					theme: "ramp4",
					animation: "scale"
				}]])
			]), e.notification.messageList && a.value ? (O(), S("div", Tn, [(O(!0), S(ue, null, Oe(e.notification.messageList, (t, n) => (O(), S("p", { key: e.notification.id + t + n }, M(t), 1))), 128))])) : x("", !0)], 10, xn)), [[c, {
				onShow: s,
				theme: "ramp4",
				animation: "scale"
			}]]);
		};
	}
}), Dn = ["content"], On = {
	key: 0,
	class: "w-full border-b border-black"
}, kn = {
	key: 1,
	class: "flex flex-col items-center h-full"
}, An = /* @__PURE__ */ T({
	__name: "notification-list",
	setup(e) {
		let t = pn(), { t: n } = I(), r = k(), i = k({}), a = () => {
			r.value._tippy.hide();
		}, o = (e) => {
			e.key === "Tab" && r.value?.matches(":focus") && r.value._tippy.show();
		}, s = (e) => {
			let n = e < c.value.length - 1 ? e : e - 1;
			t.removeNotification(c.value[e]);
			let r = c.value[n];
			r && xe(() => {
				let e = i.value[r.id].$el ?? i.value[r.id];
				if (e) {
					let t = new CustomEvent("switchFocusItem", {
						detail: { focusItem: e },
						bubbles: !0
					});
					e.dispatchEvent(t);
				}
			});
		};
		we(() => {
			r.value?.addEventListener("blur", a), r.value?.addEventListener("keyup", o);
		}), Ce(() => {
			r.value?.removeEventListener("blur", a), r.value?.removeEventListener("keyup", o);
		});
		let c = y(() => t.notificationStack);
		return (e, t) => {
			let a = j("focus-item"), o = j("focus-list"), l = j("tippy");
			return O(), S("div", null, [c.value.length > 0 ? F((O(), S("ul", {
				key: 0,
				content: N(n)("panels.controls.items"),
				ref_key: "el",
				ref: r,
				class: "h-full overflow-y-auto"
			}, [(O(!0), S(ue, null, Oe(c.value, (e, t) => (O(), S(ue, { key: e.id }, [t > 0 ? (O(), S("div", On)) : x("", !0), F(w(En, {
				ref_for: !0,
				ref: (t) => t ? i.value[e.id] = t : delete i.value[e.id],
				class: D([e.type]),
				notification: e,
				onRemove: (e) => s(t)
			}, null, 8, [
				"class",
				"notification",
				"onRemove"
			]), [[a]])], 64))), 128))], 8, Dn)), [[o], [l, {
				trigger: "manual",
				placement: "top-start",
				touch: !1
			}]]) : (O(), S("div", kn, [
				t[0] ||= C("span", { class: "flex-grow" }, null, -1),
				t[1] ||= C("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					class: "h-48 w-48 fill-current"
				}, [C("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}), C("path", { d: "M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" })], -1),
				C("span", null, M(N(n)("notifications.empty")), 1),
				t[2] ||= C("span", { style: { "flex-grow": "6" } }, null, -1)
			]))]);
		};
	}
}), jn = { class: "flex items-center hover:text-white" }, Mn = ["aria-label"], Nn = {
	key: 0,
	class: "number rounded-full w-18 text-white"
}, Pn = { class: "notification-dropdown pointer-events-auto bg-white rounded text-center text-black w-500 h-256 flex flex-col p-0" }, Fn = { class: "pb-8 border-b border-gray-600" }, In = { class: "absolute flex right-3 top-3" }, Ln = ["content", "aria-label"], Rn = /* @__PURE__ */ n(/* @__PURE__ */ T({
	__name: "caption-button",
	setup(e) {
		let t = pn(), { t: n } = I(), r = y(() => t.notificationNumber), i = () => t.clearAll();
		return (e, t) => {
			let a = A("close"), o = j("tippy");
			return O(), b(fn, {
				position: "top-start",
				tooltip: N(n)("notifications.title"),
				tooltipPlacement: "top",
				class: "pointer-events-auto sm:flex ml-4 mr-8"
			}, {
				header: P(() => [C("div", jn, [(O(), S("svg", {
					class: "fill-current w-24 h-24",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					"aria-label": N(n)("notifications.open")
				}, [...t[0] ||= [C("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" }, null, -1)]], 8, Mn)), r.value && r.value > 0 ? (O(), S("span", Nn, M(r.value), 1)) : x("", !0)])]),
				default: P((e) => [C("div", Pn, [C("div", null, [C("h4", Fn, M(N(n)("notifications.title")), 1), C("div", In, [F((O(), S("button", {
					type: "button",
					onClick: i,
					class: D(["p-4 mr-6", [r.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default pointer-events-none"]]),
					content: N(n)("notifications.controls.clearAll"),
					"aria-label": N(n)("notifications.controls.clearAll")
				}, [...t[1] ||= [C("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					class: "fill-current h-20 w-20",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, [
					C("path", {
						stroke: "none",
						d: "M0 0h24v24H0z",
						fill: "none"
					}),
					C("path", { d: "M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" }),
					C("path", { d: "M9 17v1a3 3 0 0 0 4.194 2.753" }),
					C("path", { d: "M22 22l-5 -5" }),
					C("path", { d: "M17 22l5 -5" })
				], -1)]], 10, Ln)), [[o, {
					placement: "bottom",
					theme: "ramp4",
					animation: "scale",
					appendTo: "parent"
				}]]), w(a, { onClick: e.close }, null, 8, ["onClick"])])]), w(An, { class: "overflow-y-auto h-230" })])]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), [["__scopeId", "data-v-3623a7d2"]]), zn = { class: "flex hover:text-white" }, Bn = ["aria-label"], Vn = { class: "about-ramp-dropdown pointer-events-auto bg-white rounded w-256 h-50" }, Hn = ["aria-label", "content"], Un = { class: "pb-8 pt-1 border-b border-gray-600 mb-10" }, Wn = { class: "absolute right-5 top-5" }, Gn = { class: "select-text" }, Kn = { class: "font-bold cursor-text" }, qn = { class: "text-sm cursor-text" }, Jn = { class: "font-bold cursor-text" }, Yn = { class: "ml-5 cursor-text" }, Xn = { class: "mt-5" }, Zn = ["href"], Qn = /* @__PURE__ */ n(/* @__PURE__ */ T({
	__name: "about-ramp-dropdown",
	props: { position: {
		type: String,
		default: "top-start"
	} },
	setup(e) {
		let { t } = I(), n = ye("iApi"), r = () => {
			n.reload();
		}, i = y(() => `${Ms.major}.${Ms.minor}.${Ms.patch}`), a = y(() => Ms.hash.slice(0, 9)), o = y(() => {
			let e = new Date(Ms.timestamp);
			if (isNaN(e.getTime())) return ["dev mode", "no date"];
			{
				let t = (e) => e < 10 ? "0" + e.toString() : e.toString();
				return [`${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`, `${e.getHours()}:${t(e.getMinutes())}:${t(e.getSeconds())}`];
			}
		});
		return (n, s) => {
			let c = A("close"), l = A("dropdown-menu"), u = j("tippy"), d = j("focus-item");
			return F((O(), b(l, {
				class: "pointer-events-auto sm:flex",
				position: e.position,
				tooltip: N(t)("ramp.about"),
				tooltipPlacement: e.position
			}, {
				header: P(() => [C("div", zn, [(O(), S("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					class: "fill-current w-20 h-20",
					"aria-label": N(t)("ramp.about.open")
				}, [...s[0] ||= [C("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }, null, -1)]], 8, Bn))])]),
				default: P((e) => [C("div", Vn, [C("div", null, [
					F((O(), S("button", {
						class: "absolute left-5 top-5 text-gray-500 hover:text-black focus:text-black p-8",
						onClick: r,
						"aria-label": N(t)("ramp.reload"),
						content: N(t)("ramp.reload")
					}, [...s[1] ||= [C("svg", {
						class: "fill-current w-16 h-16",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24"
					}, [C("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })], -1)]], 8, Hn)), [[u, {
						placement: "bottom-start",
						theme: "ramp4",
						animation: "scale"
					}]]),
					C("h4", Un, M(N(t)("ramp.about")), 1),
					C("div", Wn, [w(c, { onClick: e.close }, null, 8, ["onClick"])]),
					C("div", Gn, [
						C("div", null, [C("span", Kn, M(i.value), 1), C("span", qn, " [" + M(a.value) + "] ", 1)]),
						C("div", null, [C("span", Jn, M(o.value[0]), 1), C("span", Yn, M(o.value[1]), 1)]),
						s[3] ||= C("div", { class: "mt-5" }, [C("a", {
							class: "text-sm underline text-blue-600",
							href: "https://github.com/ramp4-pcar4/ramp4-pcar4",
							target: "_blank"
						}, [C("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 24 24",
							class: "inline-block fill-black w-16 h-16 mb-4"
						}, [C("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })]), he(" ramp4-pcar4 ")])], -1),
						C("div", Xn, [C("a", {
							class: "text-sm underline text-blue-600",
							href: N(t)("ramp.about.esriLink"),
							target: "_blank"
						}, [s[2] ||= C("svg", {
							viewBox: "0 0 24 24",
							xmlns: "http://www.w3.org/2000/svg",
							class: "inline-block fill-black w-16 h-16 mb-4"
						}, [C("path", { d: "M11.64.003C10.057.04 8.595.448 7.103 1.065c-2.07.873-4.706 2.881-6.312 6.67-.375 1.057-1.878 6.091.792 10.413 2.167 3.507 4.957 5.177 8.371 5.654 3.407.475 5.255.064 7.41-.893 5.039-2.236 8.887-10.634 5.038-16.72-1.519-2.81-5.498-5.274-9.855-5.084v.002c-1.03-.032-1.637.102-2.246.22-.182-.047-.525.003-.545.4 0 .213.069.38.204.477s1.264.93 2.094 1.813c-.398.044-.83.116-1.274.208-.495-1.07-2.086-.097-3.144-.055-.123.007-.242.024-.365.03-.116-.894-.2-1.821-.178-2.473C8.464.951 11.115.378 12.915.35l.315-.008c.264-.003.285-.212.036-.246q-.838-.114-1.627-.093m-.193 1.53c3.912-.017 7.35 1.641 8.925 3.57-.56-.291-1.767-.707-2.258-.816-.265-.27-.599-.49-.888-.676-.229-.146-.514-.092-.396.163.045.1.22.267.362.435-.835-.23-3.055-.407-4.111-.31-.69-.775-1.477-1.716-2.423-2.34q.396-.024.79-.026m-4.856.426c-.013.339.074 1.328.186 2.282q-.725.072-1.433.177A10.2 10.2 0 0 0 2.707 7.88c-.1-.892-.152-1.635-.113-2.092C3.705 4.231 5.214 2.715 6.59 1.96m8.418 2.65c.488.016.988.051 1.466.1-.859.307-1.237 1.062-1.658 1.662-.008.013-.024.023-.034.034a20 20 0 0 0-1.165-1.787c.426-.025.903-.027 1.391-.01m-2.375.12a13.3 13.3 0 0 1 1.48 2.153c-.681.33-1.59.582-1.96 1.11-.153.22-.19.519-.196.842a20 20 0 0 0-3.283 1.089 35 35 0 0 1-.951-3.253c1.097-1.048 2.38-1.217 2.91-1.628a15 15 0 0 1 2-.313m6.89.634c.45.171 1.029.408 1.486.657.347.437 1.34 1.418 1.871 4.165.478 2.474-.05 4.354-.212 4.898l-.163.64a15 15 0 0 1-.705 1.882c.077-.561.145-2.019.125-2.312.136.042.425-.122.473-.286.048-.165-.477-.42-.477-.42a18 18 0 0 0-.145-2.286c.12-.195.242-.383.367-.555a10 10 0 0 0-.157-1.333c.106.035.202.062.273.063.24.003.24-.161.163-.253-.049-.059-.278-.2-.545-.355a10.2 10.2 0 0 0-2.354-4.505M1.869 7.005s.051.896.095 1.55c0 0-.662.751-1 1.347.135-1.221.423-1.85.905-2.897m5.352.232c.198 1 .436 1.829.751 2.978-1.187.524-3.286 1.818-4.213 2.516-.168-.425-.343-1.028-.5-1.647.212-.624.643-1.06 1.25-1.121 1.04-.104 1.93-1.652 2.664-2.665.016-.023.033-.04.048-.06M2.07 9.478l.014.111a10.2 10.2 0 0 0-.34 2.294c.314.33.683.88 1.09 1.446-.262.195-.767.543-.886.628-.347.247-.342.636-.095.858.137.122.417.07.52-.01.303-.242.555-.433.902-.65.127.332.247.632.363.918-.148.16-.253.37-.288.677-.115.992.828 1.77 1.623 1.997.03.01.05.013.079.02.042.064.08.124.125.19a5 5 0 0 0-.888.898c-.112.146-.237.365-.136.408.104.042.454 0 .61-.028.395-.077.699-.514.971-.675.328.452.861 1.032 1.416 1.591.024.102.046.21.074.3.106.34.25.679.42 1.01.4.187.815.34 1.24.475a7 7 0 0 0-.527.61c-3.426-1.073-5.963-3.96-6.869-6.988a14.8 14.8 0 0 1-.551-5.48c.047.01.157.061.32.016.115-.079.524-.363.813-.616m9.891.182c-.006.282-.037.55-.153.765-.166.31-.09 1.209.113 1.503.639.93 1.701.412 2.5.747.366.153.61.407.815.71a13.6 13.6 0 0 0-4.832 1.196c-.781-1.66-1.455-3.83-1.455-3.83v-.003A16.4 16.4 0 0 1 11.96 9.66m-3.757 1.418c.423 1.262 1.028 2.95 1.447 3.852l-.183.093a35 35 0 0 0-2.757-.66c-.842-.173-.873-.128-1.82.147q-.203.057-.392.113a31 31 0 0 1-.376-1.018 23 23 0 0 1 4.08-2.527m13.136 1.976c.051.463.087.916.109 1.325a8 8 0 0 0-.656-.249c.166-.344.35-.712.547-1.076m-5.611 1.175c.16.28.34.56.585.81.641.655-.372 1.595-.08 3.449h-.003c-.3.032-.597.069-.86.109-.652.102-1.492.322-2.273.613-.449-.713-1.65-2.448-2.258-3.757 1.221-.6 2.926-1.104 4.889-1.224m4.755.556c.354.1.686.207.975.325.036.521.035 2.31-.067 3.184a3.5 3.5 0 0 1-.537.757 8 8 0 0 0-1.076-.32c.066-.079.139-.153.204-.235.227-1.52-.286-2.007.355-3.398zm-9.67 2.378c.482.811 1.057 1.693 1.502 2.383-.693.336-1.499.856-2.26 1.427.052-.878.07-1.746.247-2.209.248-.647.44-1.128.511-1.6m8.545 2.053c.463.054.926.131 1.208.202-.627.793-1.492 1.454-2.413 2.028.02-.345.033-.78.044-1.182.412-.32.802-.668 1.161-1.048m-2.952.01a6.5 6.5 0 0 0 .378.927c.16.324.347.56.549.721.072-.045.139-.096.21-.143-.005.355-.015.716-.036 1.064-.243.16-1.41.688-1.868.836a20 20 0 0 1-2.066-2.71c.715-.3 1.815-.567 2.833-.694m-3.628 1.002c.34.533 1.46 2.123 1.91 2.635-.815.142-1.956.249-2.86.21 0 0-1.356-.9-1.7-1.246.68-.565 1.781-1.235 2.65-1.599m-3.156 2.053c.396.263.82.564 1.157.758-.52-.06-1.131-.074-1.585-.229.131-.171.265-.383.428-.529" })], -1), he(" " + M(N(t)("ramp.about.esriLegal")), 1)], 8, Zn)])
					])
				])])]),
				_: 1
			}, 8, [
				"position",
				"tooltip",
				"tooltipPlacement"
			])), [[d]]);
		};
	}
}), [["__scopeId", "data-v-cf71f458"]]), $n = "__HELP__", er = v("keyboardnav", () => {
	let e = k(), t = k({}), n = k(!1), r = k([]), i = k(), a = k("idle"), o = ["H", "?"];
	function s() {
		for (let e of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") if (!t.value[e] && !o.includes(e)) return e;
	}
	function c(e, n) {
		let r = e.toUpperCase();
		if (o.includes(r) || t.value[r]) {
			let e = s();
			e ? r = e : console.error("No available keyboard namespace letters");
		}
		if (!n.handler) for (let e of n.keys) e.handler || console.error(`Keyboardnav registration for ${r} requires handlers for all keys or a parent handler`);
		return t.value[r] = n, r;
	}
	function l(e) {
		n.value !== e && (n.value = e);
	}
	function u(n) {
		e.value === n && (e.value = void 0), delete t.value[n];
	}
	function d(e, t, n) {
		if (e) {
			if (e === "clear") {
				h({
					event: t,
					suppressHandler: !0
				});
				return;
			}
			if (e === "reset") {
				let e = n ?? oe.activeNamespace ?? oe.keyChain[1];
				if (!e) {
					h({ suppressHandler: !0 });
					return;
				}
				ee(["S", e]), ne(void 0), re("awaitAction"), oe.activeNamespace = e;
			}
		}
	}
	function f(n, r, i) {
		e.value = n, !i?.suppressHandler && t.value[n]?.activeHandler?.(oe, r);
	}
	function p(n, r) {
		e.value && !r?.suppressHandler && t.value[e.value]?.deactiveHandler?.(oe, n), e.value = void 0;
	}
	function m(n, r) {
		let i = e.value;
		if (!i) return;
		let a = t.value[i];
		if (!a) return;
		if (a.handler) {
			let e = a.handler(oe, r, n);
			return d(e, r, i), {
				namespace: i,
				key: n,
				chainAction: e ?? void 0
			};
		}
		let o = a.keys.find((e) => e.key === n);
		if (!o) return;
		let s = o.handler?.(oe, r);
		return d(s, r, i), {
			namespace: i,
			key: o.key,
			chainAction: s ?? void 0
		};
	}
	function h(e) {
		p(e?.event, { suppressHandler: e?.suppressHandler }), e?.preserveChain || (r.value = []), e?.preserveLastAction || (i.value = void 0), a.value = "idle";
	}
	function ee(e) {
		r.value = [...e];
	}
	function g(e) {
		r.value = [...r.value, e];
	}
	function te() {
		if (!r.value.length) return;
		let e = [...r.value], t = e.pop();
		return r.value = e, t;
	}
	function ne(e) {
		i.value = e;
	}
	function re(e) {
		a.value = e;
	}
	function ie(e) {
		p(e?.event, { suppressHandler: !0 }), a.value = "complete";
	}
	let ae = {
		activeNamespace: e,
		namespaces: t,
		helpVisible: n,
		keyChain: r,
		lastAction: i,
		chainState: a,
		register: c,
		unregister: u,
		activate: f,
		deactivate: p,
		trigger: m,
		setHelpVisible: l,
		resetChain: h,
		setChain: ee,
		appendKey: g,
		popChain: te,
		setLastAction: ne,
		setChainState: re,
		finalizeChain: ie
	}, oe = ae;
	return ae;
}), tr = { class: "map-caption absolute bottom-0 h-29 sm:h-38 flex justify-end pointer-events-auto cursor-default select-none text-gray-200 bg-black-75 left-0 right-0 py-2 sm:py-6" }, nr = {
	key: 0,
	class: "relative ml-10 top-2 text-sm sm:text-base font-mono flex items-center gap-2",
	"aria-live": "polite"
}, rr = { class: "chain-content" }, ir = { class: "chain-keys" }, ar = {
	key: 0,
	class: "chain-cursor"
}, or = {
	key: 1,
	class: "chain-options"
}, sr = { key: 0 }, cr = {
	key: 1,
	class: "relative ml-10 top-2 text-sm sm:text-base"
}, lr = { class: "flex min-w-fit justify-end" }, ur = {
	key: 0,
	class: "pl-8 px-14 sm:block display-none relative top-2"
}, dr = [
	"aria-pressed",
	"aria-label",
	"content"
], fr = { class: "relative top-1 text-sm sm:text-base" }, pr = { class: "text-gray-200 hover:text-white text-sm sm:text-base pb-5" }, mr = ["onClick"], hr = {
	key: 0,
	class: "sr-only"
}, gr = /* @__PURE__ */ T({
	__name: "map-caption",
	setup(e) {
		let n = Gt(), r = er(), i = t(), { t: a } = I(), o = ye("iApi"), s = y(() => n.scale), c = y(() => n.attribution), l = y(() => n.coords), u = y(() => n.langtoggle), d = y(() => i.config.map), { keyChain: f, lastAction: p, chainState: m, namespaces: h, activeNamespace: ee } = le(r), g = y(() => {
			if (!f.value.length) return;
			let e = f.value.join(" "), t = m.value === "awaitNamespace" || m.value === "awaitAction", n, r = p.value;
			if (r) if (r.namespace === "__HELP__") n = a("keyboardnav.chain.help");
			else {
				let e = `keyboardnav.key.${r.namespace}.${r.key}`, t = a(e);
				t !== e && (n = t);
			}
			let i;
			if (m.value === "awaitNamespace") i = `[${[`H - ${a("keyboardnav.chain.help")}`, ...Object.keys(h.value).map((e) => {
				let t = `keyboardnav.ns.${e}`, n = a(t);
				return `${e} - ${n === t ? e : n}`;
			})].join(", ")}]`;
			else if (m.value === "awaitAction") {
				let e = ee.value ?? f.value[1], t = e ? h.value[e] : void 0;
				t && t.keys?.length && (i = `[${t.keys.map((t) => {
					let n = `keyboardnav.key.${e}.${t.key}`, r = a(n), i = r === n ? t.key : r;
					return `${t.key} - ${i}`;
				}).join(", ")}]`);
			}
			return {
				keys: e,
				options: i,
				description: n,
				cursor: t && !!i
			};
		}), te = k([]), ne = Ee([]);
		ne.push(Fe(d, (e) => {
			e && o.geo.map.caption.createCaption(d.value?.caption);
		})), Ce(() => {
			ne.forEach((e) => e());
		}), Te(() => {
			xe(() => {
				o.$i18n.locale.value && te.value.length == 0 && (te.value = o.$i18n.availableLocales);
			});
		});
		let re = (e) => {
			o.$i18n.locale.value != e && o.setLanguage(e);
		}, ie = () => {
			n.toggleScale(), o.geo.map.caption.updateScale();
		}, ae = (e = !1) => a(e ? "map.toggleScaleToMetric" : "map.toggleScaleToImperial");
		return (e, t) => {
			let n = A("dropdown-menu"), r = j("truncate"), i = j("tippy");
			return O(), S("div", tr, [
				w(Qn, {
					class: "sm:block display-none ml-8 mr-4",
					position: "top-end"
				}),
				w(Rn, { class: "sm:block display-none" }),
				g.value ? (O(), S("span", nr, [C("span", rr, [
					t[0] ||= C("span", { class: "chain-colon" }, ":", -1),
					C("span", ir, M(g.value.keys), 1),
					g.value.cursor ? (O(), S("span", ar, "_")) : x("", !0),
					g.value.options ? (O(), S("span", or, M(g.value.options), 1)) : x("", !0)
				]), g.value.description ? (O(), S("span", sr, "- " + M(g.value.description) + "...", 1)) : x("", !0)])) : c.value?.text.disabled ? x("", !0) : F((O(), S("span", cr, [he(M(c.value?.text.value), 1)])), [[r, { options: {
					placement: "top",
					hideOnClick: !1,
					theme: "ramp4",
					animation: "scale"
				} }]]),
				t[1] ||= C("span", { class: "flex-grow w-15" }, null, -1),
				C("div", lr, [
					l.value?.disabled ? x("", !0) : F((O(), S("div", ur, [he(M(l.value?.formattedString), 1)])), [[r, { options: {
						hideOnClick: !1,
						theme: "ramp4",
						animation: "scale"
					} }]]),
					s.value?.disabled ? x("", !0) : F((O(), S("button", {
						key: 1,
						type: "button",
						class: "flex-shrink-0 mx-2 sm:mx-10 px-4 pointer-events-auto cursor-pointer border-none",
						onClick: ie,
						"aria-pressed": s.value?.isImperialScale,
						"aria-label": `
                    ${s.value?.label} - ${ae(s.value?.isImperialScale)}
                `,
						content: ae(s.value?.isImperialScale)
					}, [C("span", {
						class: "border-solid border-2 border-white border-t-0 h-5 mr-4 inline-block",
						style: Se({ width: s.value?.width })
					}, null, 4), C("span", fr, M(s.value?.label), 1)], 8, dr)), [[i, {
						delay: [300, 0],
						placement: "top",
						hideOnClick: !1,
						theme: "ramp4",
						animation: "scale",
						touch: ["hold", 200]
					}]]),
					u.value?.disabled ? x("", !0) : (O(), b(n, {
						key: 2,
						class: "flex-shrink-0 pointer-events-auto focus:outline-none px-4 mr-4 relative top-2",
						position: "top-end",
						tooltip: N(a)("map.changeLanguage"),
						ariaLabel: `${N(a)("map.language.short")} - ${N(a)("map.changeLanguage")}`,
						tooltipPlacement: "top-start",
						tooltipPlacementAlt: "left-end"
					}, {
						header: P(() => [C("span", pr, M(N(a)("map.language.short")), 1)]),
						default: P(() => [(O(!0), S(ue, null, Oe(te.value, (e, t) => (O(), S("a", {
							key: `${e}-${t}`,
							class: D(["flex-auto items-center text-sm sm:text-base cursor-pointer", { "font-bold": e === N(o).$i18n.locale.value }]),
							href: "javascript:;",
							onClick: (t) => re(e)
						}, [he(M(N(a)("map.language." + e)) + " ", 1), e === N(o).$i18n.locale.value ? (O(), S("span", hr, M(N(a)("map.language.curr")), 1)) : x("", !0)], 10, mr))), 128))]),
						_: 1
					}, 8, ["tooltip", "ariaLabel"]))
				])
			]);
		};
	}
}), _r = ["content", "aria-label"], vr = {
	key: 0,
	class: "number absolute -top-2 -right-2 text-white w-18 rounded-full"
}, yr = /* @__PURE__ */ n(/* @__PURE__ */ T({
	__name: "floating-button",
	setup(e) {
		let t = pn(), n = ye("iApi"), { t: r } = I(), i = y(() => t.notificationNumber);
		return (e, t) => {
			let a = j("tippy");
			return F((O(), S("button", {
				type: "button",
				onClick: t[0] ||= (e) => N(n).panel.get("notifications").open(),
				class: "pointer-events-auto items-center absolute left-8 bottom-36 p-6 block sm:display-none bg-black-75 rounded-full text-gray-400 hover:text-white",
				content: N(r)("notifications.title"),
				"aria-label": N(r)("notifications.title")
			}, [t[1] ||= C("svg", {
				class: "fill-current w-24 h-24",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, [C("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })], -1), i.value && i.value > 0 ? (O(), S("span", vr, M(i.value), 1)) : x("", !0)], 8, _r)), [[a]]);
		};
	}
}), [["__scopeId", "data-v-a451db5c"]]), br = { class: "flex items-center mb-20" }, xr = { class: "text-xl" }, Sr = /* @__PURE__ */ T({
	__name: "keyboard-instructions",
	setup(e) {
		let t = ye("iApi"), { t: n } = I(), r = k(!1), i = k([
			"app",
			"lists",
			"map",
			"keyboardNav"
		]), a = k([]), o = k(null), s = k(null);
		we(() => {
			a.value.push(t.event.on("openKeyboardInstructions", () => {
				r.value = !0, xe(() => {
					o.value.focus();
				});
			}));
		}), Ce(() => {
			a.value.forEach((e) => t.event.off(e));
		});
		let c = (e) => {
			e.key === "Tab" ? e.shiftKey && e.target === o.value ? (e.preventDefault(), s.value.focus()) : !e.shiftKey && e.target === s.value && (e.preventDefault(), o.value.focus()) : e.key === "Escape" && (e.preventDefault(), r.value = !1);
		};
		return (e, t) => {
			let a = A("close");
			return r.value ? (O(), S("div", {
				key: 0,
				class: "absolute inset-0 flex justify-center items-center bg-opacity-30 bg-black z-50 pointer-events-auto",
				onClick: t[3] ||= (e) => r.value = !1,
				onKeydown: c
			}, [C("div", {
				class: "bg-white w-500 pointer-events-auto shadow-2xl p-20 flex flex-col keyboard-instructions-modal-content",
				onClick: t[2] ||= Le(() => {}, ["stop", "prevent"]),
				tabindex: "0",
				ref_key: "firstEl",
				ref: o
			}, [
				C("div", br, [C("h2", xr, M(N(n)("keyboardInstructions.title")), 1), w(a, {
					class: "ml-auto",
					onClick: t[0] ||= (e) => r.value = !1
				})]),
				(O(!0), S(ue, null, Oe(i.value, (e) => (O(), S("p", {
					class: "whitespace-pre-line pb-10",
					key: e
				}, M(N(n)(`keyboardInstructions.${e}`)), 1))), 128)),
				C("button", {
					type: "button",
					class: "mt-auto self-end mr-10 mb-10 px-20 py-10",
					onClick: t[1] ||= (e) => r.value = !1,
					ref_key: "lastEl",
					ref: s
				}, M(N(n)("keyboardInstructions.OK")), 513)
			], 512)], 32)) : x("", !0);
		};
	}
}), Cr = v("instance", () => ({ started: k(!1) })), wr = { class: "h-full relative" }, Tr = { class: "inner-shell absolute top-0 left-0 h-full w-full pointer-events-none" }, Er = { class: "absolute top-8 w-full flex justify-center" }, Dr = {
	key: 1,
	class: "w-full h-full"
}, Or = T({
	name: "App",
	components: { Shell: /* @__PURE__ */ n(/* @__PURE__ */ T({
		__name: "shell",
		setup(e) {
			let t = ye("iApi"), n = Cr(), r = Jt(), i = ln(), { t: a } = I(), o = y(() => r.items.appbar), s = () => {
				t.event.emit("openKeyboardInstructions");
			}, c = () => i.teleported;
			return (e, t) => (O(), S("div", wr, [
				C("div", Tr, [
					t[0] ||= C("div", { class: "sr-only screen-reader-alert" }, null, -1),
					C("div", Er, [C("button", {
						type: "button",
						class: "bg-white hidden-until-focus z-50 shadow-md px-10",
						onClick: s
					}, M(N(a)("keyboardInstructions.open")), 1)]),
					w(Sr, { class: "keyboard-instructions-modal" }),
					w(un, { class: "panel-stack sm:flex absolute inset-0 overflow-hidden sm:p-12 z-10 sm:pl-80 xs:pl-40 sm:pb-48 xs:pb-28 xs:pr-0 sm:pr-40" }),
					o.value ? x("", !0) : (O(), b(yr, { key: 0 })),
					w(gr, { class: "z-30" })
				]),
				N(n).started ? (O(), b(rn, { key: 0 })) : (O(), S("div", Dr, [...t[1] ||= [C("div", { class: "spinner relative inset-x-1/2 inset-y-9/20" }, null, -1)]])),
				(O(!0), S(ue, null, Oe(c(), (e) => (O(), b(de, {
					to: e.teleport?.target,
					key: e.id
				}, [(O(), b(cn, {
					key: `${e.id}`,
					panel: e
				}, null, 8, ["panel"]))], 8, ["to"]))), 128))
			]));
		}
	}), [["__scopeId", "data-v-3d441124"]]) },
	setup() {
		let e = _e();
		we(() => {
			new on().observe(e?.proxy?.$refs["app-size"]), qe({
				aria: { content: "labelledby" },
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
}), kr = ["lang"], Ar = {
	class: "h-full",
	ref: "app-size"
};
function jr(e, t, n, r, i, a) {
	let o = A("shell");
	return O(), S("div", {
		class: "ramp-app ramp-styles animation-enabled",
		lang: e.$i18n.locale
	}, [C("div", Ar, [w(o)], 512)], 8, kr);
}
var Mr = /* @__PURE__ */ n(Or, [["render", jr]]), Nr = /* @__PURE__ */ function(e) {
	return e.ArrowDown = "ArrowDown", e.ArrowDownIE = "Down", e.ArrowLeft = "ArrowLeft", e.ArrowLeftIE = "Left", e.ArrowUp = "ArrowUp", e.ArrowUpIE = "Up", e.ArrowRight = "ArrowRight", e.ArrowRightIE = "Right", e.Escape = "Escape", e.EscapeIE = "Esc", e.Enter = "Enter", e.Space = " ", e.Tab = "Tab", e;
}(Nr || {}), Pr = "focus-list", Fr = "focus-item", Ir = "focus-icon", Lr = `[${Pr}],[focus-container]`, Rr = "truncate-text", zr = "show-truncate", Br = "focused", Vr = `button,input,select,a,textarea,[contenteditable],[${Pr}],[${Ir}],[tabindex]`, Hr = {
	mounted(e, t) {
		+e.getAttribute("tabindex") <= 0 && e.setAttribute("tabindex", "0"), e.toggleAttribute(Pr, !0), new Wr(e, t.value);
	},
	updated(e) {
		Ur(e);
	}
};
function Ur(e) {
	e.querySelectorAll(Vr).forEach((t) => {
		if (t.closest(Lr) === e || t.closest(Lr) === t && t.parentElement.closest(Lr) === e) if (t.closest(`[${Pr}],.${Br}`).classList.contains(Br)) t.setAttribute("tabindex", "0");
		else {
			t.setAttribute("tabindex", "-1");
			return;
		}
	});
}
var Wr = class {
	element;
	highlightedItem;
	isHorizontal;
	isClicked;
	isTapped;
	constructor(e, t) {
		this.element = e, this.highlightedItem = this.element, this.isHorizontal = t === "horizontal", this.isClicked = !1, this.isTapped = !1, this.setTabIndex(-1), this.element.setAttribute("role", "group");
		let n = this;
		e.addEventListener("keydown", function(e) {
			n.onKeydown(e);
		}), e.addEventListener("focus", function() {
			n.onFocus();
		}), e.addEventListener("blur", function() {
			n.onBlur();
		}), e.addEventListener("mousedown", function() {
			n.onMousedown();
		}), e.addEventListener("touchstart", function() {
			n.onTouchstart();
		}), e.addEventListener("switchFocusItem", (e) => {
			let t = e.detail.focusItem;
			n.element.focus(), n.focusItem(t), this.highlightedItem = t;
		}), document.addEventListener("click", function(t) {
			t.target && e.contains(t.target) ? n.onClick(t) : n.defocusItem(n.highlightedItem);
		});
	}
	setTabIndex(e, t = this.element) {
		t.querySelectorAll(Vr).forEach((t) => {
			(e === -1 || t.closest(Lr) === this.element || t.closest(Lr) === t && t.parentElement.closest(Lr) === this.element || t.closest(`[${Pr}],.${Br}`).classList.contains(Br)) && t.setAttribute("tabindex", e.toString());
		});
	}
	defocusItem(e) {
		e.classList.remove(Br), this.setTabIndex(-1, e), e._tippy && e._tippy.hide(), e.getAttribute(Fr) === zr && e.querySelector(`[${Rr}]`)?._tippy?.hide();
	}
	focusItem(e) {
		e.classList.add(Br), this.setAriaActiveDescendant(e), this.setTabIndex(0, e), e.scrollIntoView({ block: "nearest" }), e._tippy && !this.isTapped && e._tippy.show(), e.getAttribute(Fr) === zr && e.querySelector(`[${Rr}]`)?._tippy?.show(), this.isTapped = !1;
	}
	setAriaActiveDescendant(e) {
		this.element.setAttribute("aria-activedescendant", e.getAttribute("id"));
	}
	shiftHighlight(e, t = !1) {
		this.defocusItem(this.highlightedItem), t ? this.highlightedItem === this.element ? this.highlightedItem = e[e.length - 1] : this.highlightedItem = e[Array.prototype.indexOf.call(e, this.highlightedItem) - 1] || e[e.length - 1] : this.highlightedItem === this.element ? this.highlightedItem = e[0] : this.highlightedItem = e[Array.prototype.indexOf.call(e, this.highlightedItem) + 1] || e[0], this.element.focus(), this.focusItem(this.highlightedItem);
	}
	onKeydown(e) {
		let t = this, n = Array.prototype.filter.call(this.element.querySelectorAll(`[${Fr}]`), (e) => e.closest(`[${Pr}]`) === t.element && !!e.offsetParent);
		if (n.length !== 0) switch (e.key) {
			case Nr.ArrowUpIE:
			case Nr.ArrowUp:
				if (this.isHorizontal) break;
				e.preventDefault(), e.stopPropagation(), this.shiftHighlight(n, !0);
				break;
			case Nr.ArrowDownIE:
			case Nr.ArrowDown:
				if (this.isHorizontal) break;
				e.preventDefault(), e.stopPropagation(), this.shiftHighlight(n);
				break;
			case Nr.ArrowLeftIE:
			case Nr.ArrowLeft:
				if (!this.isHorizontal) break;
				e.preventDefault(), e.stopPropagation(), this.shiftHighlight(n, !0);
				break;
			case Nr.ArrowRightIE:
			case Nr.ArrowRight:
				if (!this.isHorizontal) break;
				e.preventDefault(), e.stopPropagation(), this.shiftHighlight(n);
				break;
			case Nr.EscapeIE:
			case Nr.Escape:
				this.highlightedItem !== this.element && n.length > 1 && (e.preventDefault(), e.stopPropagation(), this.defocusItem(this.highlightedItem), this.highlightedItem = this.element, this.element.removeAttribute("aria-activedescendant"), this.element.focus());
				break;
			case Nr.Enter:
			case Nr.Space:
				e.target === this.element && this.highlightedItem !== this.element && (e.preventDefault(), e.stopPropagation(), this.highlightedItem.click());
				break;
			case Nr.Tab:
				let t = this.highlightedItem.querySelectorAll(Vr).length === 0, r = this.element.isEqualNode(e.target);
				this.highlightedItem !== this.element && r && (t && this.defocusItem(this.highlightedItem), e.shiftKey && n.length > 1 && (e.preventDefault(), e.stopPropagation(), this.defocusItem(this.highlightedItem), this.highlightedItem = this.element, this.element.removeAttribute("aria-activedescendant"), this.element.focus()));
		}
	}
	onClick(e) {
		this.defocusItem(this.highlightedItem);
		let t = e.target;
		if (!t.hasAttribute(Pr)) for (; t.parentElement.closest(`[${Pr}]`) !== this.element;) t = t.parentElement.closest(`[${Pr}]`);
		this.highlightedItem = t.closest(`[${Fr}]`) || t.closest(`[${Pr}]`) || this.highlightedItem, t.hasAttribute(`${Fr}`) && this.element.focus(), this.highlightedItem === this.element ? this.element.removeAttribute("aria-activedescendant") : this.focusItem(this.highlightedItem);
	}
	onFocus() {
		if (this.highlightedItem === this.element) {
			let e = this.element.querySelectorAll(`[${Fr}]`);
			if (e.length === 1) {
				this.defocusItem(this.highlightedItem), this.highlightedItem = e[0], this.focusItem(e[0]);
				return;
			}
		}
		this.highlightedItem && !this.isClicked && (this.highlightedItem._tippy && this.highlightedItem._tippy.show(), this.highlightedItem.getAttribute(Fr) === zr && this.highlightedItem.querySelector(`[${Rr}]`)?._tippy?.show()), this.isClicked = !1, this.element.hasAttribute("aria-activedescendant") || this.highlightedItem === this.element ? this.highlightedItem !== this.element && this.focusItem(this.highlightedItem) : this.setAriaActiveDescendant(this.highlightedItem), Ur(this.element), this.highlightedItem && this.highlightedItem !== this.element && this.highlightedItem.setAttribute("tabindex", "-1");
	}
	onBlur() {
		this.highlightedItem && (this.highlightedItem._tippy && this.highlightedItem._tippy.hide(), this.highlightedItem.getAttribute(Fr) === zr && this.highlightedItem.querySelector(`[${Rr}]`)?._tippy?.hide());
	}
	onMousedown() {
		this.isClicked = !0;
	}
	onTouchstart() {
		this.isTapped = !0;
	}
}, Gr = "focus-item", Kr = { beforeMount(e, t) {
	e.hasAttribute("id") || e.setAttribute("id", qr()), t.value ? e.setAttribute(Gr, t.value) : e.toggleAttribute(Gr, !0);
} };
function qr() {
	let e;
	do
		e = "focus-item-" + Math.random().toString(36).substring(2, 9);
	while (document.getElementById(e) !== null);
	return e;
}
//#endregion
//#region src/directives/focus-list/focus-container.ts
var Jr = /* @__PURE__ */ function(e) {
	return e.Enter = "Enter", e.Space = " ", e.Tab = "Tab", e;
}(Jr || {}), Yr = "focus-container", Xr = "focus-container-active", Zr = "focus-list", Qr = "focus-icon", $r = `[${Zr}],[${Yr}]`, ei = `button,input,select,a,textarea,[contenteditable],.ag-tab-guard,[${Zr}],[${Yr}],[${Qr}],[tabindex]`, ti = {
	childList: !0,
	subtree: !0,
	attributes: !0,
	attributeFilter: [
		"tabindex",
		Zr,
		Yr,
		Qr
	]
}, ni = [], ri = {
	mounted(e) {
		[...document.querySelectorAll(".inner-shell")].some((t) => t.contains(e)) && ni.push(new ii(e));
	},
	beforeUnmount(e) {
		ni = ni.filter((t) => t.element === e ? (t.removeEventListeners(), !1) : !0);
	}
}, ii = class {
	element;
	isTabbingEnabled;
	initialDisableTimeout;
	mutationObserver;
	keypressHandler;
	clickHandler;
	focusOutHandler;
	focusHandler;
	constructor(e) {
		this.element = e, this.isTabbingEnabled = !1, this.element.toggleAttribute(Yr, !0), this.element.toggleAttribute(Xr, !1), this.element.tabIndex = 0, this.initialDisableTimeout = setTimeout(() => this.disableTabbing(), 600), this.keypressHandler = (e) => {
			this.onKeypress(e);
		}, this.clickHandler = () => {
			this.onClick();
		}, this.focusOutHandler = (e) => {
			this.onFocusOut(e);
		}, this.focusHandler = () => {
			this.onFocus();
		}, this.element.addEventListener("keypress", this.keypressHandler), this.element.addEventListener("click", this.clickHandler), this.element.addEventListener("focusout", this.focusOutHandler), this.element.addEventListener("focus", this.focusHandler), this.mutationObserver = new MutationObserver(() => {
			this.isTabbingEnabled || this.disableTabbing();
		}), this.observeMutations();
	}
	removeEventListeners() {
		this.initialDisableTimeout && clearTimeout(this.initialDisableTimeout), this.setTabbingEnabled(!1), this.mutationObserver?.disconnect(), this.element.removeEventListener("keypress", this.keypressHandler), this.element.removeEventListener("click", this.clickHandler), this.element.removeEventListener("focusout", this.focusOutHandler), this.element.removeEventListener("focus", this.focusHandler);
	}
	onKeypress(e) {
		e.target === this.element && (e.key === Jr.Enter || e.key === Jr.Space) && this.enableTabbing()?.focus();
	}
	onClick() {
		this.enableTabbing();
	}
	onFocusOut(e) {
		this.element.contains(e.relatedTarget) || this.disableTabbing();
	}
	onFocus() {
		this.disableTabbing();
	}
	disableTabbing() {
		let e = document.activeElement;
		if (e && e !== this.element && this.element.contains(e)) return;
		this.setTabbingEnabled(!1);
		let t = Array.prototype.filter.call(this.element.querySelectorAll(ei), () => !0);
		this.withPausedObserver(() => {
			t.forEach((e) => {
				e.tabIndex !== -1 && (e.tabIndex = -1);
			});
		});
	}
	enableTabbing() {
		this.setTabbingEnabled(!0);
		let e;
		return this.withPausedObserver(() => {
			Array.prototype.map.call(this.element.querySelectorAll(ei), (t) => {
				(t.closest($r) === this.element || t.closest($r) === t && t.parentElement.closest($r) === this.element) && t.offsetParent && (t.tabIndex !== 0 && (t.tabIndex = 0), e === void 0 && (e = t));
			});
		}), e;
	}
	setTabbingEnabled(e) {
		this.isTabbingEnabled = e, this.element.toggleAttribute(Xr, e);
	}
	observeMutations() {
		this.mutationObserver?.observe(this.element, ti);
	}
	withPausedObserver(e) {
		this.mutationObserver?.disconnect();
		try {
			e();
		} finally {
			this.observeMutations();
		}
	}
}, ai = "truncate-text", oi = "truncate-trigger", si = {
	beforeMount(e, t) {
		!e.classList.contains("truncate") && !t.value?.noTruncateClass && e.classList.add("truncate"), e.toggleAttribute(ai, !0);
	},
	mounted(e, t) {
		let n;
		t.value && t.value.externalTrigger && (n = e.closest(`[${oi}]`)), Je(e, {
			content: ui(e.textContent),
			onShow: ci,
			allowHTML: !0,
			placement: "bottom-start",
			maxWidth: 320,
			triggerTarget: n,
			...t.value?.options || {}
		});
	},
	updated(e, t) {
		e._tippy && (e._tippy.setContent(ui(e.textContent)), t.value && t.value.options && e._tippy.setProps(t.value.options));
	},
	unmounted(e) {
		e._tippy && e._tippy.destroy();
	}
};
function ci(e) {
	if (!(e.reference.clientWidth < e.reference.scrollWidth || e.reference.clientHeight < e.reference.scrollHeight)) return !1;
}
var li = (e) => {
	let t = {
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#039;"
	};
	return e.replace(/[<>"']/g, (e) => t[e]);
};
function ui(e) {
	if (e === null) return "";
	let t = Ye(li(e), {
		target: "_blank",
		validate: { url: (e) => /^https?:\/\//.test(e) }
	});
	return t = `<div style='word-break: break-word;'>${t}</div>`, t;
}
//#endregion
//#region src/components/panel-stack/panel-screen.vue?vue&type=script&setup=true&lang.ts
var di = ["content"], fi = {
	key: 0,
	class: "flex flex-shrink-0 items-center border-b border-solid border-gray-600 px-8 h-48 overflow-hidden"
}, pi = {
	class: "flex-grow text-lg py-16 pl-8 min-w-0",
	tabIndex: "0"
}, mi = { key: 1 }, hi = {
	key: 0,
	class: "flex"
}, gi = ["innerHTML"], _i = {
	key: 2,
	class: "px-8 py-16 border-t border-gray-400 default-focus-style"
}, vi = "focus-container", yi = "focus-container-active", bi = /* @__PURE__ */ T({
	__name: "panel-screen",
	props: {
		header: {
			type: Boolean,
			default: !0
		},
		content: {
			type: Boolean,
			default: !0
		},
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
	setup(e, { expose: t }) {
		let { t: n } = I(), i = ln(), a = Ut(), o = ye("iApi"), s = Ne("el"), c = Ne("contentEl"), l = k(), u = k(), d = k();
		t({ el: s });
		let f = e, p = y(() => o.fixture.get("appbar") ? a.temporary : []), m = y(() => i.mobileView), h = y(() => i.reorderable), ee = `[focus-list], [${vi}]`, g = (e) => e.scrollHeight > e.clientHeight, te = (e) => e.querySelector(ee), ne = () => {
			if (!c.value) return "-1";
			let e = c.value.closest(`[${vi}]`);
			if (e && !e.hasAttribute(yi)) return "-1";
			let t = !!te(c.value);
			return g(c.value) && !t ? "0" : "-1";
		}, re = () => {
			if (!c.value) return;
			let e = ne();
			c.value.getAttribute("tabindex") !== e && c.value.setAttribute("tabindex", e);
		}, ie = (e) => {
			if (e.target !== c.value || !c.value) return;
			let t = te(c.value);
			if (!t) return;
			let n = e.relatedTarget;
			n && c.value.contains(n) || t.focus();
		}, ae = () => {
			s.value?._tippy?.hide();
		}, oe = (e) => {
			r(e, s.value) && s.value?._tippy?.show();
		}, _ = () => !m.value && !f.panel.teleport, se = (e) => {
			f.panel.move(e), e === "left" && xe(() => {
				(s.value?.querySelector(".move-left")).focus();
			});
		}, ce = y(() => f.screenId ? f.panel.screens[f.screenId][o.$i18n.locale.value ?? "en"] : null);
		return we(() => {
			s.value?.addEventListener("blur", ae), s.value?.addEventListener("keyup", oe), c.value && (c.value.addEventListener("focus", ie), l.value = new ResizeObserver(re), l.value.observe(c.value), u.value = new MutationObserver(re), u.value.observe(c.value, {
				childList: !0,
				subtree: !0,
				attributes: !0,
				attributeFilter: ["focus-list", "focus-container"]
			}), d.value = new MutationObserver(re), d.value.observe(c.value, {
				attributes: !0,
				attributeFilter: ["tabindex"]
			}), re());
		}), Ce(() => {
			s.value?.removeEventListener("blur", ae), s.value?.removeEventListener("keyup", oe), c.value?.removeEventListener("focus", ie), l.value?.disconnect(), u.value?.disconnect(), d.value?.disconnect();
		}), (t, r) => {
			let i = A("back"), a = A("panel-options-menu"), o = A("left"), l = A("right"), u = A("pin"), d = A("expand"), f = A("minimize"), m = A("close"), ee = j("truncate"), g = j("focus-item"), te = j("tippy");
			return F((O(), S("div", {
				class: "h-full flex flex-col items-stretch",
				content: `<div style='word-break: break-word;'>${N(n)(e.panel.alertName) + ". " + N(n)("panels.access")}</div>`,
				ref_key: "el",
				ref: s
			}, [
				e.header ? (O(), S("header", fi, [
					w(i, {
						class: D(e.panel.teleport ? "display-none" : "block sm:display-none"),
						onClick: r[0] ||= (t) => e.panel.close()
					}, null, 8, ["class"]),
					F((O(), S("h2", pi, [t.$slots.header ? ke(t.$slots, "header", { key: 0 }) : (O(), S("div", mi, M(N(n)(e.panel.alertName)), 1))])), [[ee]]),
					t.$slots.controls ? (O(), b(a, { key: 0 }, {
						default: P(() => [ke(t.$slots, "controls")]),
						_: 3
					})) : x("", !0),
					C("div", { class: D(e.panel.teleport ? "flex" : "display-none sm:flex") }, [
						e.panel.teleport ? x("", !0) : (O(), S("div", hi, [
							h.value ? (O(), b(o, {
								key: 0,
								onClick: r[1] ||= (e) => se("left"),
								active: !e.panel.isLeftMostPanel
							}, null, 8, ["active"])) : x("", !0),
							h.value ? (O(), b(l, {
								key: 1,
								onClick: r[2] ||= (e) => se("right"),
								active: !e.panel.isRightMostPanel
							}, null, 8, ["active"])) : x("", !0),
							w(u, {
								onClick: r[3] ||= (t) => e.panel.pin(),
								active: e.panel.isPinned
							}, null, 8, ["active"]),
							e.panel.controls && e.panel.controls.expand ? (O(), b(d, {
								key: 2,
								onClick: r[4] ||= (t) => e.panel.expand(),
								active: e.panel.expanded
							}, null, 8, ["active"])) : x("", !0)
						])),
						e.panel.button && p.value?.includes(e.panel.id) ? (O(), b(f, {
							key: 1,
							onClick: r[5] ||= (t) => e.panel.minimize()
						})) : x("", !0),
						w(m, { onClick: r[6] ||= (t) => e.panel.close() })
					], 2)
				])) : x("", !0),
				e.content ? (O(), S("div", {
					key: 1,
					class: "p-8 flex-grow overflow-y-auto",
					ref_key: "contentEl",
					ref: c,
					tabindex: "-1"
				}, [t.$slots.content ? ke(t.$slots, "content", { key: 0 }) : ce.value ? (O(), S("div", {
					key: 1,
					innerHTML: ce.value.innerHTML
				}, null, 8, gi)) : x("", !0)], 512)) : x("", !0),
				e.footer ? F((O(), S("div", _i, [ke(t.$slots, "footer")])), [[g]]) : x("", !0)
			], 8, di)), [[te, {
				trigger: "manual",
				touch: !1,
				onShow: _,
				allowHTML: !0,
				maxWidth: e.panel.style["flex-basis"] ?? 350,
				popperOptions: {
					placement: "top",
					modifiers: [{
						name: "preventOverflow",
						options: { altAxis: !0 }
					}, {
						name: "flip",
						options: { fallbackPlacements: ["top"] }
					}]
				}
			}]]);
		};
	}
}), xi = { class: "relative" }, Si = ["content", "aria-label"], Ci = ["transform"], wi = /* @__PURE__ */ T({
	__name: "pin",
	props: { active: Boolean },
	setup(e) {
		let { t } = I();
		return (n, r) => {
			let i = j("tippy");
			return O(), S("div", xi, [F((O(), S("button", {
				type: "button",
				class: D(["text-gray-500 hover:text-black focus:text-black p-8", { "text-gray-700": e.active }]),
				content: N(t)(e.active ? "panels.controls.unpin" : "panels.controls.pin"),
				"aria-label": N(t)(e.active ? "panels.controls.unpin" : "panels.controls.pin")
			}, [(O(), S("svg", {
				class: "fill-current w-16 h-16",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 384 512",
				transform: `rotate(${e.active ? 30 : 0})`
			}, [...r[0] ||= [C("path", { d: "M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z" }, null, -1)]], 8, Ci))], 10, Si)), [[i, {
				placement: "bottom",
				hideOnClick: !1
			}]])]);
		};
	}
}), Ti = { class: "relative" }, Ei = ["content", "aria-label"], Di = /* @__PURE__ */ T({
	__name: "close",
	props: { active: Boolean },
	setup(e) {
		let { t } = I();
		return (n, r) => {
			let i = j("tippy");
			return O(), S("div", Ti, [F((O(), S("button", {
				type: "button",
				class: D(["text-gray-500 hover:text-black focus:text-black p-8", { "text-gray-700": e.active }]),
				content: N(t)("panels.controls.close"),
				"aria-label": N(t)("panels.controls.close")
			}, [...r[0] ||= [C("svg", {
				class: "fill-current w-16 h-16",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 352 512"
			}, [C("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" })], -1)]], 10, Ei)), [[i, {
				placement: "bottom",
				theme: "ramp4",
				animation: "scale"
			}]])]);
		};
	}
}), Oi = { class: "relative" }, ki = ["content", "aria-label"], Ai = /* @__PURE__ */ T({
	__name: "back",
	props: { active: Boolean },
	setup(e) {
		let { t } = I();
		return (n, r) => {
			let i = j("tippy");
			return O(), S("div", Oi, [F((O(), S("button", {
				type: "button",
				class: D(["text-gray-500 hover:text-black focus:text-black p-8", { "text-gray-700": e.active }]),
				content: N(t)("panels.controls.back"),
				"aria-label": N(t)("panels.controls.back")
			}, [...r[0] ||= [C("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				class: "fill-current w-16 h-16",
				viewBox: "0 0 16 16"
			}, [C("path", {
				d: "M20.485784919653916,7.578491965389372h-14.170000000000005l3.5800000000000054,-3.589999999999997l-1.409999999999993,-1.4099999999999984l-6.000000000000008,6.0000000000000275l6.000000000000008,6l1.409999999999993,-1.4100000000000001l-3.58,-3.59h14.170000000000007Z",
				transform: "matrix(0.865803 0 0 0.865803 -1.99071 0.638058)"
			})], -1)]], 10, ki)), [[i, {
				placement: "bottom",
				theme: "ramp4",
				animation: "scale"
			}]])]);
		};
	}
}), ji = { class: "w-32 h-32" }, Mi = ["content", "aria-label"], Ni = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	class: "h-24 w-24 fill-current transform rotate-90"
}, Pi = {
	key: 1,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	class: "h-24 w-24 fill-current transform rotate-90"
}, Fi = /* @__PURE__ */ T({
	__name: "expand",
	props: { active: Boolean },
	setup(e) {
		let { t } = I();
		return (n, r) => {
			let i = j("tippy");
			return O(), S("div", ji, [F((O(), S("button", {
				type: "button",
				class: "text-gray-500 hover:text-black focus:text-black w-full h-full flex justify-center items-center",
				content: N(t)(`panels.controls.${e.active ? "collapse" : "expand"}`),
				"aria-label": N(t)(`panels.controls.${e.active ? "collapse" : "expand"}`)
			}, [e.active ? (O(), S("svg", Pi, [...r[1] ||= [
				C("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}, null, -1),
				C("path", {
					d: "M0 0h24v24H0V0z",
					fill: "none"
				}, null, -1),
				C("path", { d: "M8 19h3v3h2v-3h3l-4-4-4 4zm8-15h-3V1h-2v3H8l4 4 4-4zM4 9v2h16V9H4z" }, null, -1),
				C("path", { d: "M4 12h16v2H4z" }, null, -1)
			]])) : (O(), S("svg", Ni, [...r[0] ||= [
				C("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}, null, -1),
				C("path", {
					d: "M0 0h24v24H0V0z",
					fill: "none"
				}, null, -1),
				C("path", { d: "M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z" }, null, -1)
			]]))], 8, Mi)), [[i, {
				placement: "bottom",
				theme: "ramp4",
				animation: "scale",
				hideOnClick: !1
			}]])]);
		};
	}
}), Ii = { class: "relative" }, Li = ["content", "aria-label"], Ri = /* @__PURE__ */ T({
	__name: "minimize",
	props: { active: Boolean },
	setup(e) {
		let { t } = I();
		return (n, r) => {
			let i = j("tippy");
			return O(), S("div", Ii, [F((O(), S("button", {
				type: "button",
				class: D(["text-gray-500 hover:text-black focus:text-black p-6", { "text-gray-700": e.active }]),
				content: N(t)("panels.controls.minimize"),
				"aria-label": N(t)("panels.controls.minimize")
			}, [...r[0] ||= [C("svg", {
				class: "fill-current w-20 h-20",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, [C("path", {
				d: "M0 0h24v24H0V0z",
				fill: "none"
			}), C("path", { d: "M6 19h12v2H6z" })], -1)]], 10, Li)), [[i, {
				placement: "bottom",
				theme: "ramp4",
				animation: "scale"
			}]])]);
		};
	}
});
//#endregion
//#region src/components/panel-stack/controls/use-panel-move-tooltip.ts
function zi(e, t) {
	let n = null, r = null, i = () => {
		n &&= (clearTimeout(n), null), r?.(), r = null;
	};
	return Ce(() => {
		i();
	}), { syncTooltipAfterKeyboardMove: (a) => {
		if (a.detail !== 0 || !t()) return;
		let o = e.value, s = o?._tippy;
		if (!o || !s) return;
		i(), s.disable(), s.hide();
		let c = () => {
			i(), s.enable(), document.activeElement === o && s.show();
		}, l = o.closest("[data-cy]");
		if (l) {
			let e = (e) => {
				e.target === l && e.propertyName === "transform" && c();
			};
			l.addEventListener("transitionend", e), r = () => l.removeEventListener("transitionend", e);
		}
		n = setTimeout(c, l ? 350 : 0);
	} };
}
//#endregion
//#region src/components/panel-stack/controls/right.vue?vue&type=script&setup=true&lang.ts
var Bi = { class: "relative" }, Vi = ["content", "aria-label"], Hi = /* @__PURE__ */ T({
	__name: "right",
	props: { active: Boolean },
	setup(e) {
		let { t } = I(), n = e, r = k(null), { syncTooltipAfterKeyboardMove: i } = zi(r, () => !!n.active);
		return (n, a) => {
			let o = j("tippy");
			return O(), S("div", Bi, [F((O(), S("button", {
				ref_key: "buttonRef",
				ref: r,
				type: "button",
				class: D(["p-8", {
					"text-gray-500 hover:text-black focus:text-black": e.active,
					"text-gray-300": !e.active
				}]),
				onClick: a[0] ||= (...e) => N(i) && N(i)(...e),
				content: N(t)("panels.controls.moveRight"),
				"aria-label": N(t)("panels.controls.moveRight")
			}, [...a[1] ||= [C("svg", {
				class: "fill-current w-16 h-16",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "4 4 16 16"
			}, [C("path", { d: "M 8.59 16.34 L 13.17 11.75 L 8.59 7.16 L 10 5.75 L 16 11.75 L 10 17.75 Z" })], -1)]], 10, Vi)), [[o, {
				placement: "bottom",
				theme: "ramp4",
				animation: "scale"
			}]])]);
		};
	}
}), Ui = { class: "relative" }, Wi = ["content", "aria-label"], Gi = /* @__PURE__ */ T({
	__name: "left",
	props: { active: Boolean },
	setup(e) {
		let t = e, { t: n } = I(), r = k(null), { syncTooltipAfterKeyboardMove: i } = zi(r, () => !!t.active);
		return (t, a) => {
			let o = j("tippy");
			return O(), S("div", Ui, [F((O(), S("button", {
				ref_key: "buttonRef",
				ref: r,
				type: "button",
				class: D(["p-8 move-left", {
					"text-gray-500 hover:text-black focus:text-black": e.active,
					"text-gray-300": !e.active
				}]),
				onClick: a[0] ||= (...e) => N(i) && N(i)(...e),
				content: N(n)("panels.controls.moveLeft"),
				"aria-label": N(n)("panels.controls.moveLeft")
			}, [...a[1] ||= [C("svg", {
				class: "fill-current w-16 h-16",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "4 4 16 16"
			}, [C("path", { d: "M 15.41 16.09 L 10.83 11.5 L 15.41 6.91 L 14 5.5 L 8 11.5 L 14 17.5 Z" })], -1)]], 10, Wi)), [[o, {
				placement: "bottom",
				theme: "ramp4",
				animation: "scale"
			}]])]);
		};
	}
}), Ki = /* @__PURE__ */ n(/* @__PURE__ */ T({
	__name: "panel-options-menu",
	setup(e) {
		let { t } = I();
		return (e, n) => (O(), b(fn, {
			class: "flex",
			tooltip: N(t)("panels.controls.optionsMenu"),
			popperOptions: { strategy: "fixed" },
			position: "bottom-end"
		}, {
			header: P(() => [...n[0] ||= [C("div", { class: "p-6" }, [C("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				class: "fill-current w-20 h-20"
			}, [C("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })])], -1)]]),
			default: P(() => [ke(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["tooltip"]));
	}
}), [["__scopeId", "data-v-51e22a4a"]]), qi = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	class: "fill-current w-32 h-20"
}, Ji = {
	key: 1,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	class: "fill-current w-32 h-20"
}, Yi = /* @__PURE__ */ T({
	__name: "fullscreen-nav",
	setup(e) {
		let { t } = I(), n = ye("iApi"), r = () => {
			n.toggleFullscreen();
		};
		return (e, i) => {
			let a = A("mapnav-button");
			return O(), b(a, {
				onClickFunction: r,
				tooltip: N(t)("mapnav.fullscreen")
			}, {
				default: P(() => [N(n).isFullscreen ? (O(), S("svg", qi, [...i[0] ||= [C("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}, null, -1), C("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }, null, -1)]])) : (O(), S("svg", Ji, [...i[1] ||= [C("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}, null, -1), C("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }, null, -1)]]))]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), Xi = /* @__PURE__ */ T({
	__name: "geolocator-nav",
	setup(e) {
		let { t } = I(), n = ye("iApi"), r = Ee([]), i = async () => {
			if (r.length) a(r);
			else {
				let e = await o({
					maximumAge: Infinity,
					timeout: 5e3
				}).catch((e) => {
					e.code === GeolocationPositionError.PERMISSION_DENIED ? n.notify.show(vn.ERROR, t("mapnav.geolocator.error.permission")) : n.notify.show(vn.ERROR, t("mapnav.geolocator.error.internal"));
				});
				e && (r = [e.coords.longitude, e.coords.latitude], a(r));
			}
		}, a = (e) => {
			let t = new J("geolocation", e, q.latLongSR(), !0);
			n.geo.map.zoomMapTo(t);
		}, o = (e) => new Promise((t, n) => navigator.geolocation.getCurrentPosition(t, n, e));
		return (e, n) => {
			let r = A("mapnav-button");
			return O(), b(r, {
				onClickFunction: i,
				tooltip: N(t)("mapnav.geolocator")
			}, {
				default: P(() => [...n[0] ||= [C("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					class: "fill-current w-32 h-20"
				}, [C("path", { d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" })], -1)]]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), Zi = /* @__PURE__ */ T({
	__name: "home-nav",
	setup(e) {
		let { t } = I(), n = ye("iApi"), r = () => {
			let e = n.geo.map.getExtentSet();
			n.geo.map.zoomMapTo(e.fullExtent);
		};
		return (e, n) => {
			let i = A("mapnav-button");
			return O(), b(i, {
				onClickFunction: r,
				tooltip: N(t)("mapnav.home")
			}, {
				default: P(() => [...n[0] ||= [C("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					class: "fill-current w-32 h-20"
				}, [C("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }), C("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				})], -1)]]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), Qi = {
	class: "relative w-32 h-32 text-gray-600 hover:text-black",
	tabindex: "-1"
}, $i = ["content", "aria-label"], ea = /* @__PURE__ */ T({
	__name: "button",
	props: {
		onClickFunction: {
			type: Function,
			required: !0
		},
		tooltip: {
			type: [String, Boolean],
			default: !1
		},
		showOutline: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (t, n) => {
			let r = j("focus-item"), i = j("tippy");
			return O(), S("div", Qi, [F((O(), S("button", {
				type: "button",
				class: D(["w-full h-full default-focus-style", [e.showOutline ? "focus:outline focus:outline-2 focus:outline-blue-400 focus:absolute focus:z-50" : "focus:outline-none"]]),
				onClick: n[0] ||= (t) => e.onClickFunction(),
				content: e.tooltip,
				"aria-label": typeof e.tooltip == "string" ? e.tooltip : ""
			}, [ke(t.$slots, "default")], 10, $i)), [[r], [i, { placement: "left" }]])]);
		};
	}
}), ta = {
	class: "relative",
	tabindex: "-1"
}, na = ["aria-label", "content"], ra = /* @__PURE__ */ n(/* @__PURE__ */ T({
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
	setup(e) {
		let t = ye("iApi"), n = e, r = () => t.event.emit(Z.APPBAR_BUTTON_CLICK, n.buttonId);
		return (t, n) => {
			let i = j("focus-item"), a = j("tippy");
			return O(), S("div", ta, [F((O(), S("button", {
				type: "button",
				class: "py-6 w-full h-full",
				onClick: n[0] ||= () => {
					e.onClickFunction(), r();
				},
				"aria-label": String(e.tooltip),
				content: `<div style='word-break: break-word;'>${e.tooltip}</div>`
			}, [ke(t.$slots, "default", {}, void 0, !0)], 8, na)), [[i], [a, {
				allowHTML: !0,
				placement: "right"
			}]])]);
		};
	}
}), [["__scopeId", "data-v-1cb84ae1"]]), ia = v("areas-of-interest", () => ({ areas: k([]) })), aa = v("export", () => {
	let e = k({
		title: !0,
		map: !0,
		mapElements: !0,
		legend: !0,
		footnote: !0,
		timestamp: !0
	}), t = k("");
	function n(t) {
		if (e.value[t.name] !== void 0) {
			let n = e.value[t.name];
			e.value[t.name] = t.selected === void 0 ? !n : t.selected;
		}
	}
	return {
		componentSelectedState: e,
		fileName: t,
		toggleSelected: n
	};
}), oa = v("extentguard", () => {
	let e = k(!1);
	function t(t) {
		e.value = t;
	}
	let n = k(!1);
	function r(e) {
		n.value = e;
	}
	let i = k(!1);
	function a(e) {
		i.value = e;
	}
	let o = k([]);
	function s(e) {
		o.value = e;
	}
	return {
		active: e,
		setActive: t,
		enforcing: n,
		setEnforcing: r,
		alwaysOn: i,
		setAlwaysOn: a,
		extentSetIds: o,
		setExtentSetIds: s
	};
}), sa = {
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
	Y: 60
}, ca = {
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
}, la = class {
	provinceList = [];
	listFetched = !1;
	constructor(e) {
		Xe.get(e).then((e) => {
			this.provinceList = e.data.definitions.map((e) => {
				let t = parseInt(e.code);
				return {
					code: t,
					abbr: ca[t],
					name: e.description
				};
			}), this.provinceList.push({
				code: -1,
				abbr: "...",
				name: "..."
			}), this.provinceList.sort((e, t) => e.name > t.name ? 1 : -1), this.listFetched = !0;
		});
	}
	codeToProvince(e) {
		return this.provinceList.find((t) => t.code === e);
	}
	nameToProvince(e) {
		return this.provinceList.find((t) => t.name === e);
	}
	abbrToProvince(e) {
		return this.provinceList.find((t) => t.abbr === e);
	}
	fsaToProvince(e) {
		let t, n = e.toUpperCase(), r = n.substring(0, 1);
		return t = r === "X" ? n === "X0A" || n === "X0B" || n === "X0C" ? 62 : 61 : sa[r], this.codeToProvince(t);
	}
};
function ua(e) {
	return new la(e);
}
//#endregion
//#region src/fixtures/geosearch/store/types.ts
var da = {
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
}, fa = class {
	allTypes = {};
	validTypes = {};
	filterComplete = !1;
	typesFetched = !1;
	constructor(e, t) {
		Xe.get(t).then((t) => {
			t.data.definitions.forEach((t) => {
				da[e][t.code] = t.term.split(`${t.code}-`)[1];
			}), Object.keys(da[e]).forEach((t) => {
				this.allTypes[t] = da[e][t], this.validTypes[t] = da[e][t];
			}), this.typesFetched = !0;
		});
	}
	filterValidTypes(e) {
		if (this.filterComplete) return this.validTypes;
		if (e = typeof e == "string" ? [e] : e, e && e.length > 0) for (let t of e) delete this.validTypes[t];
		return this.filterComplete = !0, this.validTypes;
	}
};
function pa(e, t) {
	return new fa(e, t);
}
//#endregion
//#region src/fixtures/geosearch/store/query.ts
var ma = class {
	config;
	query;
	failedServs = [];
	results = [];
	constructor(e, t = "") {
		this.query = t, this.config = e;
	}
	addResult(e) {
		Array.isArray(e) ? this.results = this.results.concat(e) : this.results.push(e);
	}
};
async function ha(e, t) {
	let n, r;
	return /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)(\s*[,|;\s]\s*)[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)[*]$/.test(t) && !e.disabledSearchTypes.includes("LAT/LNG") ? (r = t.slice(0, -1), n = new ma(e, r), await wa(n)) : /^[ABCEGHJKLMNPRSTVXY]\d[A-Z]/.test(t) && !e.disabledSearchTypes.includes("FSA") ? (r = t.substring(0, 3).toUpperCase(), n = new ma(e, r), await Ta(n)) : /^\d{2,3}[A-P]/.test(t) && !e.disabledSearchTypes.includes("NTS") ? (r = t.substring(0, 6).toUpperCase(), n = new ma(e, r), await Ea(n)) : (r = encodeURIComponent(t.trim()), n = new ma(e, r), await Da(n)), e.customSources.length && await ba(n, e.customSources), n;
}
var ga = async (e) => {
	let [t, n] = await Ze(Xe.get(e));
	return t ? (console.error("Request error from " + e), console.error(t), Promise.reject("Could not load results from remote service.")) : n.data;
}, _a = (e, t, n) => [
	e + n,
	t - n,
	e - n,
	t + n
], va = (e, t, n, r) => {
	let i = "", a = e.config;
	return t ? i = a.geoLocateUrl + "?q=" + e.query : (i = n && r ? `${a.geoNameUrl}?lat=${n}&lon=${r}&num=${a.maxResults}` : `${a.geoNameUrl}?q=${e.query}&num=${a.maxResults}`, a.categories.length > 0 && (i += `&concise=${a.categories.join(",")}`), a.officialOnly && (i += "&category=O")), i;
}, ya = (e, t) => t.filter((t) => e.types.validTypes[t.concise.code]).map((t) => ({
	name: t.name,
	flav: "nme",
	bbox: t.bbox,
	type: e.types.allTypes[t.concise.code],
	location: {
		city: t.location,
		province: e.provinces.codeToProvince(parseInt(t.province.code))
	},
	order: e.sortOrder.indexOf(t.concise.code) >= 0 ? e.sortOrder.indexOf(t.concise.code) : e.sortOrder.length
})), ba = async (e, t) => {
	let n = (await Promise.all(t.map((t) => t.onSearch(e.query)))).flat();
	e.addResult(n);
}, xa = async (e) => {
	let [t, n] = await Ze(ga(va(e, !0)));
	return t ? (console.error("Geolocation service failed"), e.failedServs.push("geolocation"), []) : n;
}, Sa = async (e) => {
	let [t, n] = await Ze(ga(va(e, !1))), r;
	t ? (console.error("GeoName service targeting Name failed"), e.failedServs.push("geoname"), r = []) : r = n.items, e.addResult(ya(e.config, r));
}, Ca = async (e, t, n) => {
	let [r, i] = await Ze(ga(va(e, !1, t, n))), a;
	r ? (console.error("GeoName service targeting Lat Lon failed"), e.failedServs.push("geoname"), a = []) : a = i.items, e.addResult(ya(e.config, a));
}, wa = async (e) => {
	let t = e.query.split(/[\s|,|;|]/).filter((e) => !isNaN(e) && e !== "").map((e) => parseFloat(e)), n = t[0], r = t[1], i = {
		name: `${n},${r}`,
		flav: "llg",
		location: {},
		type: "Latitude/Longitude",
		bbox: _a(r, n, .015),
		order: -1
	};
	await Ca(e, n, r), e.addResult(i);
}, Ta = async (e) => {
	let t = e.config, n = await xa(e);
	if (n.length) {
		let r = n[0].geometry.coordinates, i = r[1], a = r[0], o = {
			name: e.query,
			flav: "fsa",
			bbox: _a(a, i, .03),
			type: t.types.allTypes.FSA,
			location: { province: t.provinces.fsaToProvince(e.query) },
			order: -1
		};
		e.addResult(o);
	}
}, Ea = async (e) => {
	let t = e.config, n = await xa(e);
	if (n.length) {
		let r = n[0], i = r.title.split(" "), a = i.shift() || "", o = i.join(" "), s = r.geometry.coordinates, c = s[1], l = s[0], u = {
			name: a,
			flav: "nts",
			bbox: r.bbox ?? _a(l, c, .03),
			type: t.types.allTypes.NTS,
			location: { city: o },
			order: -1
		};
		e.addResult(u);
	}
}, Da = async (e) => {
	let t = e.config;
	if (await Sa(e), t.categories.length === 0 || t.categories.includes("ADDR")) {
		let n = await xa(e), r = t.sortOrder.indexOf("ADDR"), i = r >= 0 ? r : t.sortOrder.length, a = n.filter((e) => e.type?.includes("Street")).map((e) => {
			let [n, r, a] = e.title.split(", "), o = e.geometry.coordinates, s = o[1], c = o[0];
			return {
				name: n,
				flav: "add",
				bbox: _a(c, s, .002),
				type: t.types.allTypes.ADDRESS,
				location: {
					city: r.split(" Of ").pop(),
					province: t.provinces.nameToProvince(a)
				},
				order: i
			};
		});
		e.addResult(a);
	}
}, Oa = "~FSA~", ka = "https://geogratis.gc.ca/services/geolocation/@{language}/locate", Aa = "https://geogratis.gc.ca/services/geoname/@{language}/geonames.json", ja = "https://geogratis.gc.ca/services/geoname/@{language}/codes/province.json", Ma = "https://geogratis.gc.ca/services/geoname/@{language}/codes/concise.json", Na = class {
	config;
	constructor(e, t) {
		let n, r, i, a, o = t?.serviceUrls;
		o ? (n = o.geoLocation ? o.geoLocation : ka, r = o.geoNames ? o.geoNames : Aa, i = o.geoProvince ? o.geoProvince : ja, a = o.geoTypes ? o.geoTypes : Ma) : (n = ka, r = Aa, i = ja, a = Ma), n = n.replace("@{language}", e), r = r.replace("@{language}", e), i = i.replace("@{language}", e), a = a.replace("@{language}", e);
		let s = "", c = t?.fsaBoundaries;
		if (c && c.serviceUrl) {
			let e = c.keyField || "CFSAUID";
			s = `${c.serviceUrl}/query/?where=${e}%3D'${Oa}'&outFields=${e}&returnGeometry=true&f=json`;
		}
		let l = t?.settings, u, d, f, p, m, h;
		l ? (u = l.categories ? l.categories : [], d = l.sortOrder ? l.sortOrder : [], f = l.disabledSearchTypes ? l.disabledSearchTypes : [], p = l.maxResults > 0 ? l.maxResults : 100, m = !!l.officialOnly) : (u = [], d = [], f = [], p = 100, m = !1), h = t?.customSources ?? [], h = h.map((e) => ({
			...e,
			onSearch: async (t) => {
				let n = e.data ?? [], r = Fa(), i = decodeURIComponent(r.cleanVal(t)).replace("*", "");
				return n.filter((e) => e.name.toLowerCase().includes(i)).map((t) => ({
					name: t.name,
					type: e.catName,
					bbox: t.bbox,
					flav: "nme",
					location: {
						province: this.config.provinces.abbrToProvince(t.prov),
						city: t.city
					},
					order: d.indexOf(e.code) >= 0 ? d.indexOf(e.code) : d.length
				}));
			}
		})), this.config = {
			language: e,
			geoNameUrl: r,
			geoLocateUrl: n,
			fsaUrl: s,
			types: pa(e, a),
			provinces: ua(i),
			categories: u,
			sortOrder: d,
			disabledSearchTypes: f,
			maxResults: p,
			officialOnly: m,
			customSources: h
		}, this.config.types.filterValidTypes(t?.excludeTypes), this._typeList = [], this._excludedTypes = t?.excludeTypes || [];
	}
	get typeList() {
		return this._typeList;
	}
	set typeList(e) {
		this._typeList = e;
	}
	levenshteinDistance(e, t) {
		t = t.toLowerCase().trim(), e = decodeURI(e.toLowerCase().replace("*", ""));
		let n = [];
		for (let r = 0; r <= t.length; r++) {
			n[r] = [r];
			for (let i = 1; i <= e.length; i++) n[r][i] = r === 0 ? i : Math.min(n[r][i - 1] + 1, n[r - 1][i] + .2, n[r - 1][i - 1] + (e[i - 1] === t[r - 1] ? 0 : 1));
		}
		return n[t.length][e.length];
	}
	async query(e) {
		let t = await ha(this.config, e.toUpperCase()), n = this.config.sortOrder.length, r = t.results.filter((e) => e.order < n), i = t.results.filter((e) => e.order >= n);
		r.sort((e, t) => e.order - t.order);
		let a = this.config.maxResults, o;
		return r.length >= a ? o = r.slice(0, a) : (i.forEach((e) => e.order = this.levenshteinDistance(t.query, e.name)), i.sort((e, t) => e.order - t.order), o = r.concat(i.slice(0, a - r.length))), {
			results: o,
			failedServs: t.failedServs
		};
	}
	fetchProvinces() {
		return new Promise((e) => {
			let t = setInterval(() => {
				this.config.provinces.listFetched && (clearInterval(t), e(this.config.provinces.provinceList));
			}, 100);
		});
	}
	fetchTypes() {
		return new Promise((e) => {
			let t = setInterval(() => {
				if (this.config.types.typesFetched) {
					clearInterval(t);
					let n = [];
					n.push({
						code: -1,
						name: "..."
					});
					let r = this.config.types.allTypes;
					for (let e in r) this._excludedTypes.includes(e) || n.push({
						code: e,
						name: r[e]
					});
					this.config.customSources.length && this.config.customSources.forEach((e) => {
						n.some((t) => t.code === e.code) || n.push({
							code: e.code,
							name: e.catName
						});
					}), this.typeList = n, e(this.typeList);
				}
			}, 100);
		});
	}
};
//#endregion
//#region src/fixtures/geosearch/store/geosearch-store.ts
function Pa(e, t, n) {
	if (e && t.extent) {
		let e = t.extent;
		n = n.filter((t) => t.bbox[0] <= e.xmax && t.bbox[1] <= e.ymax && t.bbox[2] >= e.xmin && t.bbox[3] >= e.ymin);
	}
	return t.province && t.province !== "..." && (n = n.filter((e) => e.location.province?.name && e.location.province.name === t.province)), t.type && t.type !== "..." && (n = n.filter((e) => e.type === t.type)), n;
}
var Fa = v("geosearch", () => {
	let e = k(new Na("en", void 0)), t = k({
		type: "",
		province: "",
		extent: void 0
	}), n = k(!1), r = k(""), i = k(""), a = k(""), o = k([]), s = k([]), c = k(!1), l = k([]), u = y(() => e.value.fetchProvinces().then((e) => (e.sort((e, t) => e.name.localeCompare(t.name, void 0, { sensitivity: "case" })), e))), d = y(() => new Promise((t) => {
		e.value.fetchTypes().then((e) => {
			e.sort((e, t) => e.name.localeCompare(t.name, void 0, { sensitivity: "case" })), t(e);
		});
	}));
	function f(t, n) {
		e.value = new Na(t, n);
	}
	function p(e) {
		return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
	}
	function m(i) {
		c.value = !0;
		let u = r.value.replace(/["!*$+?^{}()|[\]\\]/g, "").trim();
		if (!u) o.value = [], s.value = [], c.value = !1;
		else if (u && u !== a.value || i) {
			let r = setInterval(() => {
				e.value.config.provinces.listFetched && e.value.config.types.typesFetched && (clearInterval(r), e.value.query(`${u}*`).then((e) => {
					l.value = e.failedServs, a.value = u, s.value = e.results, o.value = Pa(n.value, t.value, s.value) || [], c.value = !1;
				}));
			}, 250);
		} else o.value = Pa(n.value, t.value, s.value) || [], c.value = !1;
	}
	function h(e) {
		t.value.province = e.province === void 0 ? "" : e.province, m(e.forceReRun);
	}
	function ee(e) {
		t.value.type = e.type === void 0 ? "" : e.type, m(e.forceReRun);
	}
	function g(e) {
		a.value = r.value.replace(/["!*$+?^{}()|[\]\\]/g, "").trim(), r.value = e, m();
	}
	function te(e) {
		let t = {
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
		e = p(e), i.value = Array.from(e).map((e) => Object.keys(t).includes(e) ? "[" + e + t[e] + "]" : e.replace(/["$!*+?^{}()|[\]\\]/g, "").replace(/[.\\]/g, "\\$&").trim()).join("");
	}
	function ne(e) {
		if (e.visible !== void 0 && (n.value = e.visible), e.extent.sr.wkid !== 4326) throw Error("an extent that was not projected to wkid 4326 was passed to the geosearch store");
		t.value.extent = e.extent, m();
	}
	return {
		GSservice: e,
		queryParams: t,
		resultsVisible: n,
		searchVal: r,
		searchRegex: i,
		lastSearchVal: a,
		searchResults: o,
		savedResults: s,
		loadingResults: c,
		failedServices: l,
		getProvinces: u,
		getTypes: d,
		initService: f,
		runQuery: m,
		setProvince: h,
		setType: ee,
		setSearchTerm: g,
		setSearchRegex: te,
		setMapExtent: ne,
		cleanVal: p
	};
}), Ia = /* @__PURE__ */ function(e) {
	return e.Visibility = "visibilityButton", e.Expand = "expandButton", e;
}({}), La = /* @__PURE__ */ function(e) {
	return e.Item = "item", e.Placeholder = "placeholder", e.Error = "error", e;
}({}), Ra = class extends X {
	_uid;
	_name;
	_type;
	_children = [];
	_parent = void 0;
	_loadPromise;
	_hidden;
	_expanded;
	_visibility;
	_exclusive;
	_controls;
	_disabledControls;
	_lastVisible;
	_visibleChildren;
	constructor(e, t, n) {
		super(e), this._uid = Is.sharedUtils.generateUUID(), this._name = t.name, this._type = t.type ?? La.Placeholder, this._parent = n, this._children = [], this._loadPromise = new Y(), this._hidden = t.hidden ?? !1, this._expanded = t.expanded ?? !0, this._visibility = !0, this._exclusive = t.exclusive ?? !1, this._controls = t.controls?.slice() ?? [Ia.Visibility, Ia.Expand], this._disabledControls = t.disabledControls?.slice(), this._visibleChildren = [];
	}
	get uid() {
		return this._uid;
	}
	get name() {
		return this._name;
	}
	set name(e) {
		this._name = e;
	}
	get type() {
		return this._type;
	}
	get children() {
		return this._children;
	}
	set children(e) {
		this._children = e;
	}
	get parent() {
		return this._parent;
	}
	set parent(e) {
		this._parent = e;
	}
	get loadPromise() {
		return this._loadPromise.getPromise();
	}
	get hidden() {
		return this._hidden;
	}
	get expanded() {
		return this._expanded;
	}
	get visibility() {
		return this._visibility;
	}
	get exclusive() {
		return this._exclusive;
	}
	controlAvailable(e) {
		return this._disabledControls?.includes(e) ? !1 : this._controls?.includes(e);
	}
	setControl(e, t) {
		t && this._disabledControls?.includes(e) ? (this._disabledControls = this._disabledControls.filter((t) => t !== e), this._controls?.push(e)) : !t && this._controls?.includes(e) && (this._controls = this._controls.filter((t) => t !== e), this._disabledControls?.push(e));
	}
	toggleHidden(e) {
		this._hidden = e ?? !this.hidden;
	}
	toggleExpanded(e) {
		this._expanded = e ?? !this.expanded;
	}
	toggleVisibility(e, t = !0) {
		if (this.visibility !== e) {
			if (this._visibility = e ?? !this.visibility, !this.exclusive) this.visibility ? this._visibleChildren.length > 0 ? this._visibleChildren.forEach((e) => e.toggleVisibility(!0, !1)) : this.children.forEach((e) => e.toggleVisibility(!0, !1)) : this.children.forEach((e) => e.toggleVisibility(!1, !1));
			else if (this.visibility) if (this._lastVisible && (!(this._lastVisible instanceof za) || this._lastVisible.layerControlAvailable(G.Visibility))) this._lastVisible.toggleVisibility(!0);
			else {
				let e = this.children.find((e) => !(e instanceof za) || e.layerControlAvailable(G.Visibility));
				e && e.toggleVisibility(!0);
			}
			else this._lastVisible = this.children.find((e) => e.visibility), this._lastVisible?.toggleVisibility(!1);
			this.parent && t && this.parent.checkVisibility(this);
		}
	}
	checkVisibilityRules() {
		(this.parent && !this.parent.visibility || this.parent?.exclusive && this.parent.children.some((e) => e.visibility && e !== this && e.type === La.Item)) && this.toggleVisibility(!1, !1);
	}
	checkVisibility(e) {
		this instanceof za && !this.layerControlAvailable(G.Visibility) || (this.exclusive ? e.visibility ? (this.children.forEach((t) => {
			t.uid !== e.uid && t.toggleVisibility(!1, !1);
		}), this._lastVisible = e, this._visibility = !0, this instanceof za && this.layer && this.layer.layerExists && (this.layer.visibility = !0)) : (this._visibility = !1, this instanceof za && this.layer && this.layer.layerExists && (this.layer.visibility = !1), this._lastVisible = e) : this.children.some((e) => e.visibility) ? (this._visibility = !0, this._visibleChildren = this.children.filter((e) => e.visibility), this instanceof za && this.layer && this.layer.layerExists && (this.layer.visibility = !0)) : (this._visibility = !1, this._visibleChildren = [], this instanceof za && this.layer && this.layer.layerExists && (this.layer.visibility = !1)), this.parent && this.parent.checkVisibility(this));
	}
	getConfig() {
		let e = {
			name: this._name,
			hidden: this._hidden,
			expanded: this._expanded,
			exclusive: this._exclusive,
			controls: this._controls,
			disabledControls: this._disabledControls
		}, t = [];
		return this.children.forEach((e) => {
			t.push(e.getConfig());
		}), this.exclusive ? e.exclusiveVisibility = t : e.children = t, e;
	}
	onAdded() {}
	onRemoved() {
		this.toggleVisibility(!1);
	}
	load() {
		this._type = La.Item, this._loadPromise.resolveMe(), this.checkVisibilityRules();
	}
	reload() {
		this._type = La.Placeholder, this._loadPromise = new Y();
	}
	error() {
		this._type !== La.Error && (this._type = La.Error, this._loadPromise.getPromise().catch(() => {}), this._loadPromise.rejectMe(), this.checkVisibilityRules());
	}
}, za = class extends Ra {
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
	_symbologyRenderStyle;
	_symbologyStack;
	handlers = [];
	constructor(e, t, n) {
		if (super(e, t, n), this._type = La.Placeholder, this._layerId = t.layerId, this._layerIdx = t.sublayerIndex, this._isSublayer = t.sublayerIndex !== void 0, this._layerControls = t.layerControls ?? [], this._origLayerControls = t.layerControls, this._layerDisabledControls = t.disabledLayerControls ?? [], this._origLayerDisabledControls = t.disabledLayerControls, this._layerRedrawing = !1, this._symbologyExpanded = t.symbologyExpanded || !1, t.coverIcon && (this._coverIcon = t.coverIcon), t.description && (this._description = t.description), this._symbologyRenderStyle = t.symbologyRenderStyle ?? "icons", this._customSymbology = !!t.symbologyStack, this._symbologyStack = t.symbologyStack?.map((e) => ({
			uid: this.$iApi.geo.shared.generateUUID(),
			label: e.text,
			definitionClause: e.sqlQuery,
			imgUrl: e.image ?? "",
			drawPromise: Promise.resolve(),
			visibility: !0,
			lastVisibility: !0
		})), this._maxLines = t.maxLines && [
			1,
			2,
			3,
			4,
			5,
			6
		].includes(t.maxLines) ? t.maxLines : void 0, !this._name) {
			let e = this.$iApi.getConfig()?.layers;
			if (e && Array.isArray(e)) {
				let t = e.find((e) => e.id === this._layerId);
				if (t) if (this._isSublayer) {
					if (t.sublayers && Array.isArray(t.sublayers)) {
						let e = t.sublayers.find((e) => e.index === this._layerIdx);
						e && e.name && (this._name = e.name);
					}
				} else t.name && (this._name = t.name);
			}
		}
	}
	get parentLayerId() {
		return this._isSublayer ? this._layerId.slice(0, this._layerId.length - `-${this._layerIdx}`.length) : void 0;
	}
	get layerId() {
		return this._layerId;
	}
	get layerIdx() {
		return this._layerIdx;
	}
	get isSublayer() {
		return this._isSublayer;
	}
	get layerUid() {
		return this._layerUid;
	}
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
	getConfig() {
		let e = {
			layerId: this._layerId,
			sublayerIndex: this._layerIdx,
			layerControls: this._layerControls,
			disabledLayerControls: this._layerDisabledControls,
			symbologyExpanded: this._symbologyExpanded,
			coverIcon: this._coverIcon,
			description: this._description,
			maxLines: this._maxLines
		};
		return {
			...super.getConfig(),
			...e
		};
	}
	toggleVisibility(e, t = !0, n = !1) {
		if (!(!this.layerControlAvailable(G.Visibility) && !n) && (super.toggleVisibility(e, t), this.layer && this.layer.layerExists)) {
			this.layer.visibility = this.visibility;
			let e = this._symbologyStack.some((e) => e.lastVisbility);
			this._symbologyStack.forEach((t) => {
				e || (t.lastVisbility = !0), t.visibility = this.visibility ? t.lastVisbility : !1;
			});
		}
	}
	toggleSymbology(e) {
		return this._symbologyExpanded = e ?? !this._symbologyExpanded, this._symbologyExpanded;
	}
	clickSymbologyByIndex(e, t) {
		let n = this._symbologyStack[e].uid;
		this.clickSymbology(n, t);
	}
	symbolsVisible() {
		return this.symbologyStack.some((e) => e.visibility);
	}
	clickSymbology(e, t) {
		if (!this.symbolsVisible() && t !== !1 ? (this.setSymbologyVisibility(void 0, !1), this.setSymbologyVisibility(e, !0), this.toggleVisibility(!0)) : this.setSymbologyVisibility(e, t), this.symbolsVisible() || this.toggleVisibility(!1), this.layer?.supportsFeatures) {
			let e = this.symbologyStack.filter((e) => e.lastVisbility).map((e) => e.definitionClause || ""), t = "";
			e.length === 0 ? t = "1=2" : e.length < this.symbologyStack.length && (t = e.join(" OR ")), this.layer.setSqlFilter(W.SYMBOL, t);
		}
	}
	setSymbologyVisibility(e, t) {
		let n = e === void 0;
		this._symbologyStack.some((r) => {
			if (n || r.uid === e) {
				let e = t ?? !r.lastVisbility;
				r.visibility = e, r.lastVisbility = e;
			}
			return !n && r.uid === e;
		});
	}
	load(e) {
		let t = e instanceof ho ? e : this.$iApi.geo.layer.getLayer(this._layerId ?? this._layerUid);
		t && (this.layer = t, this._layerRedrawing = t.mapLayer && t.drawState !== ut.UP_TO_DATE, t.loadPromise().then(() => {
			this._layerInitVis = this._layerInitVis === void 0 ? t.visibility : this._visibility, super.load(), this.toggleVisibility(this._layerInitVis, !0, !0), t.visibility || this.setSymbologyVisibility(void 0, !1), this.handlers.push(this.$iApi.event.on(Z.LAYER_VISIBILITYCHANGE, (e) => {
				e.layer.uid === this.layer.uid && this._type === La.Item && this.toggleVisibility(e.visibility, !0, !0);
			})), this.handlers.push(this.$iApi.event.on(Z.LAYER_DRAWSTATECHANGE, (e) => {
				this.layer.uid === e.layer.uid && (e.layer.drawState === ut.REFRESH ? this.layerRedrawing = !0 : setTimeout(() => {
					this.layerRedrawing = e.layer.drawState === ut.REFRESH;
				}, 500));
			})), this._layerOffscale = this.$iApi.geo.map.created ? t.isOffscale() : !1, this.handlers.push(this.$iApi.event.on(Z.MAP_SCALECHANGE, () => {
				this.$iApi.geo.map.created && (this._layerOffscale = this.layer?.isOffscale());
			}));
		}).catch(() => {
			this.error();
		}));
	}
	error() {
		this.updateLayerControls(), super.error();
	}
	layerControlAvailable(e) {
		return this._layerDisabledControls?.includes(e) ? !1 : !!this._layerControls?.includes(e);
	}
	updateLayerControls() {
		let e = this.$iApi.geo.layer.getLayerControls(this.layerId) ?? this.$iApi.geo.layer.getLayerControls(this.parentLayerId ?? "");
		this._origLayerControls || (this._layerControls = e?.controls ?? []), this._origLayerDisabledControls || (this._layerDisabledControls = e?.disabledControls ?? []);
	}
}, Ba = /* @__PURE__ */ function(e) {
	return e.Title = "title", e.Text = "text", e.Image = "image", e.Markdown = "markdown", e.Template = "template", e;
}({}), Va = class extends Ra {
	_infoType;
	_content;
	constructor(e, t, n) {
		super(e, t, n), this._infoType = t.infoType ?? Ba.Title, this._content = t.content ?? "", t.infoType === Ba.Template && this.$element.component(`${this._uid}-info-section`, { template: this._content }), (t.infoType || t.content) && (this._controls = t.controls?.slice() ?? [Ia.Expand]), super.load();
	}
	get infoType() {
		return this._infoType;
	}
	get content() {
		return this._content;
	}
	set content(e) {
		this._content = e;
	}
	getConfig() {
		let e = {
			infoType: this._infoType,
			content: this._content
		};
		return {
			...super.getConfig(),
			...e
		};
	}
}, Ha = v("legend", () => {
	let e = k(), t = k([]), n = k([]), r = k(!0), i = k(3);
	function a(e) {
		if (e.parent === void 0) t.value.push(e.item);
		else {
			if (!(e.item instanceof Va) && !(e.item instanceof za)) {
				console.error("attempted to add an unsupported legend item type");
				return;
			}
			e.parent.children.push(e.item);
		}
	}
	function o(e) {
		let n = (t) => (t = t.filter((t) => (t === e && !t.children.length && t.onRemoved(), t !== e)), t.forEach((e) => {
			e.children = n(e.children);
		}), t = t.filter((e) => !(e instanceof Va && !e.children.length && e.content === "")), t);
		t.value = n(t.value);
	}
	function s(e) {
		if (e.oldItem.parent === void 0) {
			let n = t.value, r = n.indexOf(e.oldItem);
			r > -1 && (t.value[r] = e.newItem), t.value = n;
		} else {
			let t = e.oldItem.parent.children, n = t.indexOf(e.oldItem);
			n > -1 && (t[n] = e.newItem), e.oldItem.parent.children = t;
		}
	}
	return {
		legendConfig: e,
		multilineItems: r,
		maxLines: i,
		children: t,
		headerControls: n,
		addItem: a,
		removeItem: o,
		replaceItem: s
	};
}), Ua = v("mapnav", () => {
	let e = k({}), t = k([]);
	function n(n) {
		n in e.value && delete e.value[n];
		let r = t.value.indexOf(n);
		r !== -1 && t.value.splice(r, 1);
	}
	return {
		items: e,
		order: t,
		removeItem: n
	};
}), Wa = v("metadata", () => ({
	status: k(""),
	response: k({
		type: "LineString",
		coordinates: []
	})
})), Ga = v("northarrow", () => ({
	arrowIcon: k(""),
	poleIcon: k("")
})), Ka = v("overviewmap", () => {
	let e = k({
		lodSets: [],
		extentSets: [],
		basemaps: [],
		tileSchemas: [],
		initialBasemapId: ""
	}), t = k({}), n = k(!0), r = k(1.5), i = k("#FF0000"), a = k(1), o = k("#000000"), s = k(.25);
	function c(t) {
		e.value.initialBasemapId = t;
	}
	return {
		mapConfig: e,
		basemaps: t,
		startMinimized: n,
		expandFactor: r,
		borderColour: i,
		borderWidth: a,
		areaColour: o,
		areaOpacity: s,
		updateInitialBasemap: c
	};
}), qa = v("scrollguard", () => {
	let e = k(!1);
	function t(t) {
		e.value = t;
	}
	return {
		enabled: e,
		setEnabled: t
	};
}), $ = /* @__PURE__ */ function(e) {
	return e[e.UPLOAD = 0] = "UPLOAD", e[e.FORMAT = 1] = "FORMAT", e[e.CONFIGURE = 2] = "CONFIGURE", e;
}({}), Ja = v("wizard", () => {
	let e = {
		id: "Placeholder",
		layerType: R.UNKNOWN,
		url: ""
	}, t = k(), n = k(""), r = k(""), i = k(!0), a = k(null), o = k({
		config: e,
		configOptions: []
	}), s = k($.UPLOAD);
	function c(t) {
		switch (s.value) {
			case $.UPLOAD:
				t === $.UPLOAD ? n.value = "" : t === $.FORMAT && (s.value = $.FORMAT);
				break;
			case $.FORMAT:
				t === $.UPLOAD ? (a.value &&= (n.value = "", null), r.value = "", s.value = $.UPLOAD) : t === $.CONFIGURE && (s.value = $.CONFIGURE);
				break;
			case $.CONFIGURE:
				t === $.UPLOAD ? (n.value = "", r.value = "", a.value = null, i.value = !0, o.value = {
					config: e,
					configOptions: []
				}, s.value = $.UPLOAD) : t === $.FORMAT && (o.value = {
					config: e,
					configOptions: []
				}, i.value = !0, s.value = $.FORMAT);
				break;
		}
	}
	return {
		layerSource: t,
		url: n,
		typeSelection: r,
		nested: i,
		fileData: a,
		layerInfo: o,
		currStep: s,
		goToStep: c
	};
}), Ya = class {
	fixture;
	panel;
	event;
	geo;
	notify;
	dev;
	ui;
	startRequired = !1;
	_eventsOn = !1;
	$vApp;
	$element;
	$i18n;
	$rootEl;
	_isFullscreen;
	constructor(e, t, n) {
		this.event = new Xt(this);
		let r = Xa(e, this);
		this.$vApp = r.app, this.$element = r.element, this.$i18n = r.i18n, this.$rootEl = r.app.$root?.$el, this.fixture = new us(this), this.panel = new fs(this), this.geo = new cs(this), this.dev = new ys(this), this.ui = {
			maptip: this.geo.map.maptip,
			exposeOids: !1,
			exposeMeasurements: !0,
			getZoomIcon: () => "",
			formatNumber: () => "",
			scrollToInstance: !1,
			suppressNumberLocalization: !1,
			escapeHtml: () => "",
			isPlainText: () => !0
		}, this.notify = new yn(this), this._isFullscreen = Ve.isEnabled && !!this.$vApp.$root && Ve.isFullscreen && Ve.element === this.$vApp.$root.$el, Ve.isEnabled && Ve.onchange(() => {
			this._isFullscreen = Ve.isEnabled && !!this.$vApp.$root && Ve.isFullscreen && Ve.element === this.$vApp.$root.$el;
		}), this.initialize(!0, t, n);
	}
	initialize(e, n, r) {
		let i = t(this.$vApp.$pinia), a = ln(this.$vApp.$pinia), o = nn(this.$vApp.$pinia);
		if (n?.configs !== void 0) {
			let e = Object.keys(this.$i18n.messages.value);
			i.registerAllConfigs(n, e);
			let t = i.registeredConfigs[i.registeredLangs[this.$i18n.locale.value]];
			i.newConfig(t), i.activeBasemapConfig = t.map.basemaps.find((e) => e.id === t.map.initialBasemapId);
			let r = setInterval(() => {
				let e = this.$vApp.$el.querySelector("#esriMap");
				e && (clearInterval(r), this.geo.map.createMap(t.map, e).then(() => {
					if (e._tippy.hide(0), o.setMaptipInstance(e._tippy), t.layers && t.layers.length > 0) {
						let e = 0;
						t.layers.forEach((t) => {
							let n = this.geo.layer.createLayer(t);
							this.geo.map.addLayer(n, e).catch(() => {}), n.mapLayer && e++;
						});
					}
				}));
			}, 100);
			if (t.panels) {
				if (t.panels.open && t.panels.open.length > 0) {
					let e = t.panels.open.map((e) => e.id);
					this.panel.isRegistered(e).then(() => {
						t.panels?.open?.forEach((e) => {
							this.panel.open({
								id: e.id,
								screen: e.screen
							}), e.pin && this.panel.pin(e.id);
						});
					});
				}
				a.reorderable = t.panels.reorderable ?? !0;
			}
			!t.system?.animate && this.$element._container && this.$element._container.children[0] && this.$element._container.children[0].classList.remove("animation-enabled"), t.system?.proxyUrl && (this.geo.proxy = t.system.proxyUrl), t.system?.exposeOid && (this.ui.exposeOids = t.system.exposeOid), t.system?.exposeMeasurements != null && (this.ui.exposeMeasurements = t.system.exposeMeasurements), t.system?.scrollToInstance && (this.ui.scrollToInstance = t.system?.scrollToInstance), t.system?.suppressNumberLocalization && (this.ui.suppressNumberLocalization = t.system?.suppressNumberLocalization);
			let s = {
				magnify: "<svg class=\"m-auto\" xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" viewBox=\"0 0 24 24\" width=\"16\"><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\" /><path d=\"M0 0h24v24H0V0z\" fill=\"none\" /><path d=\"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z\" /></svg>",
				globe: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xml:space=\"preserve\"><g transform=\"matrix(0.67 0 0 0.67 8 8)\"><path style=\" stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: #979797; fill-rule: nonzero; opacity: 1;\" transform=\" translate(-12, -12)\" d=\"M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 z M 11 19.93 C 7.05 19.44 4 16.08 4 12 C 4 11.38 4.08 10.79 4.21 10.21 L 9 15 L 9 16 C 9 17.1 9.9 18 11 18 L 11 19.93 z M 17.9 17.39 C 17.639999999999997 16.580000000000002 16.9 16 15.999999999999998 16 L 14.999999999999998 16 L 14.999999999999998 13 C 14.999999999999998 12.45 14.549999999999999 12 13.999999999999998 12 L 8 12 L 8 10 L 10 10 C 10.55 10 11 9.55 11 9 L 11 7 L 13 7 C 14.1 7 15 6.1 15 5 L 15 4.59 C 17.93 5.779999999999999 20 8.649999999999999 20 12 C 20 14.08 19.2 15.97 17.9 17.39 z\" stroke-linecap=\"round\" /></g></svg>"
			}, c = t.system?.zoomIcon || "globe", l = s[c] || c;
			this.ui.getZoomIcon = () => l, this.ui.formatNumber = (e) => this.ui.suppressNumberLocalization ? e.toString() : this.$i18n.n(e, "number"), this.ui.escapeHtml = (e) => {
				let t = {
					"<": "&lt;",
					">": "&gt;",
					"\"": "&quot;",
					"'": "&#039;"
				};
				return e.replace(/[<>"']/g, (e) => t[e]);
			}, this.ui.isPlainText = (e) => typeof e == "string" ? !this.containsValidHtml(e) && !this.representsObject(e) : !1;
		}
		r ||= {};
		let s = Cr(this.$vApp.$pinia);
		r?.startRequired ? (this.startRequired = !0, s.started = !1) : (this.startRequired = !1, s.started = !0, this.event.emit(Z.MAP_START)), e && (r.loadDefaultFixtures !== !1 || n?.startingFixtures !== void 0) ? this.fixture.addDefaultFixtures(n?.startingFixtures) : e || this.fixture.restore(), r.loadDefaultEvents !== !1 && !this._eventsOn && (this.event.addDefaultEvents(), this._eventsOn = !0);
	}
	reloadWorker(n, r) {
		let i = Cr(this.$vApp.$pinia), a = pn(this.$vApp.$pinia), o = t(this.$vApp.$pinia), s = Jt(this.$vApp.$pinia), c = e(this.$vApp.$pinia), l = Wt(this.$vApp.$pinia), u = !!n;
		u ? Object.keys(s.items).forEach((e) => {
			this.fixture.exists(e) && this.fixture.remove(e);
		}) : this.fixture.flush(), Object.keys(l.grids).forEach((e) => {
			l.removeGrid(e);
		}), i.started = !1, this.geo.map.destroyMap(), c.$reset(), r?.loadDefaultEvents === !1 && (this.event.removeDefaultEvents(), this._eventsOn = !1), u || (n = JSON.parse(JSON.stringify({
			startingFixtures: o.startingFixtures,
			configs: o.registeredConfigs
		}))), a.clearAll(), this.geo.map.maptip.clear(), this.initialize(u, n, r), u && this.event.emit(Z.CONFIG_CHANGE, this.getConfig());
	}
	reload(e, t) {
		this.reloadWorker(e, t), this.event.emit(Z.RAMP_RELOAD);
	}
	component(e, t) {
		if (t) {
			let n = this.$element.component(e, t);
			return this.event.emit(Z.COMPONENT, e), n;
		}
		return this.$element.component(e);
	}
	get screenSize() {
		if (!this.$vApp?.$root || !this.$vApp.$root.$refs["app-size"]) return null;
		let e = this.$vApp.$root.$refs["app-size"].classList;
		return e.contains("lg") ? "lg" : e.contains("md") ? "md" : e.contains("sm") ? "sm" : "xs";
	}
	getConfig() {
		let e = t(this.$vApp.$pinia);
		return JSON.parse(JSON.stringify(e.getActiveConfig(this.language)));
	}
	useStore(n) {
		if (!([
			"appbar",
			"areas-of-interest",
			"details",
			"export",
			"extentguard",
			"geosearch",
			"grid",
			"help",
			"keyboardnav",
			"legend",
			"mapnav",
			"metadata",
			"northarrow",
			"overviewmap",
			"scrollguard",
			"wizard"
		].includes(n) && !this.fixture.exists(n))) switch (n) {
			case "appbar": return Ut(this.$vApp.$pinia);
			case "areas-of-interest": return ia(this.$vApp.$pinia);
			case "details": return qt(this.$vApp.$pinia);
			case "export": return aa(this.$vApp.$pinia);
			case "extentguard": return oa(this.$vApp.$pinia);
			case "geosearch": return Fa(this.$vApp.$pinia);
			case "grid": return Wt(this.$vApp.$pinia);
			case "help": return i(this.$vApp.$pinia);
			case "keyboardnav": return er(this.$vApp.$pinia);
			case "legend": return Ha(this.$vApp.$pinia);
			case "mapnav": return Ua(this.$vApp.$pinia);
			case "metadata": return Wa(this.$vApp.$pinia);
			case "northarrow": return Ga(this.$vApp.$pinia);
			case "overviewmap": return Ka(this.$vApp.$pinia);
			case "scrollguard": return qa(this.$vApp.$pinia);
			case "wizard": return Ja(this.$vApp.$pinia);
			case "config": return t(this.$vApp.$pinia);
			case "fixture": return Jt(this.$vApp.$pinia);
			case "instance": return Cr(this.$vApp.$pinia);
			case "layer": return e(this.$vApp.$pinia);
			case "map-caption": return Gt(this.$vApp.$pinia);
			case "maptip": return nn(this.$vApp.$pinia);
			case "notification": return pn(this.$vApp.$pinia);
			case "panel": return ln(this.$vApp.$pinia);
			default:
				console.error(`The store ${n} does not exist.`);
				return;
		}
	}
	setLanguage(e) {
		if (this.$i18n.locale.value === e) return;
		let n = t(this.$vApp.$pinia), r = pn(this.$vApp.$pinia), i = n.registeredLangs;
		Object.keys(n.registeredConfigs).length === 1 && r.clearAll();
		let a = this.$i18n.locale.value;
		this.$i18n.locale.value = e;
		let o = this.getConfig();
		i[a] !== i[e] && (this.reloadWorker(), this.event.emit(Z.CONFIG_CHANGE, o)), this.event.emit(Z.LANG_CHANGE, {
			oldLang: a,
			newLang: e
		});
	}
	get language() {
		return this.$vApp.$i18n.locale;
	}
	get keyboardNav() {
		return this.fixture.get("keyboardnav");
	}
	get animate() {
		return !!(this.$element._container && this.$element._container.children[0] && this.$element._container.children[0].classList.contains("animation-enabled"));
	}
	toggleFullscreen() {
		Ve.isEnabled && Ve.toggle(this.$element._container || void 0);
	}
	get isFullscreen() {
		return this._isFullscreen;
	}
	get started() {
		return Cr(this.$vApp.$pinia).started;
	}
	updateAlert(e) {
		let t = this.$vApp.$el.querySelector(".screen-reader-alert");
		t.childNodes.length > 0 && (t.innerHTML = "");
		let n = document.createElement("span");
		n.setAttribute("role", "alert");
		let r = document.createTextNode(e);
		n.appendChild(r), t.insertBefore(n, null);
	}
	scrollToInstance() {
		this.ui.scrollToInstance && this.$element._container?.scrollIntoView({ behavior: "smooth" });
	}
	start() {
		let e = Cr(this.$vApp.$pinia);
		!e.started && this.startRequired ? (this.event.emit(Z.MAP_START), e.started = !0) : e.started && console.warn("start has already been called");
	}
	containsValidHtml(e) {
		return /<(\w+)([^>]*)>(.*?)<\/\1>/.test(e);
	}
	representsObject(e) {
		return /^(?:\[\s*(?:[\s\S]*?)\s*\]|\{\s*(?:[\s\S]*?)\s*\})$/.test(e);
	}
};
function Xa(e, t) {
	let n = ce();
	n.use(({ store: e }) => {
		let t = He(e.$state);
		e.$reset = () => e.$patch(He(t));
	});
	let r = tn(), i = me(Mr).use(r).use(Ke, {
		directive: "tippy",
		component: "tippy"
	}).use(n);
	return i.directive("focus-container", ri), i.directive("focus-list", Hr), i.directive("focus-item", Kr), i.directive("truncate", si), i.component("panel-screen", bi), i.component("pin", wi), i.component("close", Di), i.component("back", Ai), i.component("expand", Fi), i.component("panel-options-menu", Ki), i.component("dropdown-menu", fn), i.component("minimize", Ri), i.component("right", Hi), i.component("left", Gi), i.component("fullscreen-nav-button", Yi), i.component("geolocator-nav-button", Xi), i.component("home-nav-button", Zi), i.component("mapnav-button", ea), i.component("appbar-button", ra), i.component("transition", fe), i.component("transition-group", pe), i.config.globalProperties.$iApi = t, i.config.globalProperties.$pinia = n, i.config.idPrefix = `ramp-${e.id || Is.sharedUtils.generateUUID()}`, i.provide("iApi", t), {
		element: i,
		app: i.mount(e),
		i18n: r.global
	};
}
//#endregion
//#region src/geo/map/basemap.ts
var Za = class e {
	esriBasemap;
	config;
	createErr = !1;
	constructor(e) {
		this.config = e;
	}
	static async create(t) {
		let n = new e(t), r = t.layers.map((e) => {
			let t = {
				url: e.url,
				opacity: e.opacity
			};
			if (e.layerType === R.TILE) return K.TileLayer(t);
			if (e.layerType === R.VECTORTILE) return K.VectorTileLayer(t);
			if (e.layerType === R.MAPIMAGE) return K.MapImageLayer(t);
			if (e.layerType === R.OSM) return K.OpenStreetMapLayer(t);
			throw Error(`Unsupported layer type provided to basemap config: ${e.layerType}`);
		}), i = (await Promise.allSettled(r)).filter((e) => e.status === "rejected" ? (console.error(e.reason), n.createErr = !0, !1) : !0).map((e) => {
			if (e.status === "fulfilled") return e.value;
			throw Error("TS is fun");
		});
		return n.esriBasemap = await K.Basemap({
			baseLayers: i,
			title: t.name || "",
			id: t.id
		}), n;
	}
	get tileSchemaId() {
		return this.config.tileSchemaId;
	}
	get id() {
		return this.config.id;
	}
	get name() {
		return this.config.name;
	}
	set name(e) {
		this.config.name = e || "";
	}
	get description() {
		return this.config.description;
	}
	set description(e) {
		this.config.description = e || "";
	}
	get altText() {
		return this.config.altText;
	}
	set altText(e) {
		this.config.altText = e || "";
	}
	get attribution() {
		return this.config.attribution;
	}
	set attribution(e) {
		this.config.attribution = e;
	}
	get backgroundColour() {
		return this.config.backgroundColour ?? "#FFFFFF";
	}
}, Qa = class extends X {
	esriMap;
	_basemapStore;
	created = !1;
	name;
	trackFirstBasemap = !1;
	esriView;
	_viewPromise;
	get viewPromise() {
		return this._viewPromise.getPromise();
	}
	_rampSR;
	_rampExtentSet;
	_targetDiv;
	handlers;
	pointZoomScale;
	constructor(e, t = "") {
		super(e), this.esriMap = void 0, this._basemapStore = [], this._viewPromise = new Y(), this.handlers = [], this.pointZoomScale = 5e4, this.name = t;
	}
	noMapErr() {
		console.error(`Attempted to manipulate the ${this.name} map before calling createMap()`), console.trace();
	}
	abstractError() {
		throw Error("Attempted to call an abstract method in the parent CommonMapAPI");
	}
	labelsDefault = { visible: void 0 };
	async createMap(e, t) {
		let n = (e) => {
			this.$iApi.notify.show(vn.ERROR, this.$iApi.$i18n.t("layer.error", { id: e.name }));
		}, r = e.basemaps.map((e) => Za.create(e)), i = (await Promise.all(r)).filter((e) => (e.createErr && n(e), e.esriBasemap.baseLayers.length > 0));
		i.forEach((e) => {
			e.esriBasemap.baseLayers.forEach((t) => {
				s(() => t.loadStatus, () => {
					t.loadStatus === "loaded" ? this.trackFirstBasemap = !1 : t.loadStatus === "failed" && (n(e), this.trackFirstBasemap && this.recoverBasemap(e.tileSchemaId));
				});
			});
		}), this._basemapStore = i, e.labelsDefault && (this.labelsDefault.visible = e.labelsDefault.visible), this.esriMap = E(await K.Map({})), this.pointZoomScale = e.pointZoomScale && e.pointZoomScale > 0 ? e.pointZoomScale : 5e4, this._targetDiv = t, this.createMapView(e.initialBasemapId);
	}
	destroyMap() {
		if (!this.esriMap || !this.esriView) {
			this.noMapErr();
			return;
		}
		this.destroyMapView(), this.esriMap.destroy(), delete this.esriMap, this._basemapStore.forEach((e) => e.esriBasemap.destroy()), this._basemapStore = [];
	}
	async reloadMap(e, t) {
		if (!this.esriMap || !this.esriView) {
			this.noMapErr();
			return;
		}
		this.destroyMap(), await this.createMap(e, t);
	}
	async createMapView(e) {
		this.abstractError();
	}
	destroyMapView() {
		if (!this.esriView) {
			this.noMapErr();
			return;
		}
		this._viewPromise = new Y(), this.created = !1, this.handlers.forEach((e) => e.handler.remove()), this.handlers = [], this.esriView.map = null, this.esriView.container = null, this.esriView.spatialReference = null, this.esriView.extent = null, this.esriView.navigation = null, this.esriView.destroy(), delete this.esriView;
	}
	async findBasemap(e) {
		let t = this._basemapStore.find((t) => t.id === e);
		if (t) return t;
		throw Error(`Invalid basemap id requested: ${e}`);
	}
	async applyBasemap(e) {
		if (!this.esriMap) {
			this.noMapErr();
			return;
		}
		let t = typeof e == "string" ? await this.findBasemap(e) : e, n = this.esriMap.basemap?.id || "";
		t.esriBasemap.id !== n && (this.esriMap.basemap = je(t.esriBasemap));
	}
	async setBasemap(e) {
		return this.abstractError(), !1;
	}
	async recoverBasemap(e) {}
	getCurrentBasemapId() {
		if (this.esriMap) return this.esriMap.basemap?.id ?? void 0;
		this.noMapErr();
	}
	geomToMapSR(e) {
		if (!this._rampSR) throw Error("call to map.geomToMapSR before the map spatial ref was created");
		return this._rampSR.isEqual(e.sr) ? Promise.resolve(e) : this.$iApi.geo.proj.projectGeometry(this._rampSR, e);
	}
	async zoomMapTo(e, t, n = !0, r = 200, i = "ease") {
		if (this.esriView) {
			if (e.invalid()) throw Error("attempt to zoom to invalid geometry");
			let a = await this.geomToMapSR(e), o = { target: this.$iApi.geo.geom.geomRampToEsri(a) };
			a.type === L.POINT && (o.scale = t || this.pointZoomScale);
			let s = {
				animate: n,
				duration: r,
				easing: i
			};
			return this.viewPromise.then(() => this.esriView.goTo(o, s));
		} else this.noMapErr();
	}
	getZoomLevel() {
		return this.esriView ? this.esriView.zoom : (this.noMapErr(), 1);
	}
	getScale() {
		return this.esriView ? this.esriView.scale : (this.noMapErr(), 1);
	}
	getResolution() {
		return this.esriView ? this.esriView.resolution : (this.noMapErr(), 1);
	}
	getExtent() {
		return this.esriView ? St.fromESRI(this.esriView.extent) : (this.noMapErr(), St.fromParams("i_am_error", 0, 1, 0, 1));
	}
	getExtentSet() {
		return this._rampExtentSet ? this._rampExtentSet : (this.noMapErr(), Mt.fromConfig({
			id: "i_am_error_extent_set",
			default: {
				xmin: 0,
				xmax: 1,
				ymin: 0,
				ymax: 1,
				spatialReference: { wkid: 4326 }
			}
		}));
	}
	getSR() {
		return this._rampSR ? this._rampSR.clone() : (this.noMapErr(), q.latLongSR());
	}
	getPixelHeight() {
		return this.esriView ? this.esriView.height : (this.noMapErr(), 1);
	}
	getPixelWidth() {
		return this.esriView ? this.esriView.width : (this.noMapErr(), 1);
	}
	setPointZoomScale(e) {
		return e > 0 ? (this.pointZoomScale = e, !0) : (console.error(`Cannot set pointZoomScale to non-positive number: ${e}.`), !1);
	}
}, $a = class extends X {
	maptipStore;
	constructor(e) {
		super(e), this.maptipStore = nn(this.$vApp.$pinia);
	}
	#e = void 0;
	#t = void 0;
	async checkAtCoord(e) {
		this.#t = e;
		let t = await this.$iApi.geo.map.getGraphicAtCoord(e);
		if (this.#t !== e) return;
		if (!t) {
			this.clear(), this.maptipStore.maptipInstance.disable();
			return;
		}
		let n = t.layer ?? this.$iApi.geo.layer.getLayer(t.layerId);
		if (n?.geomType != L.POLYGON && this.#e && this.#e.layerId === t.layerId && this.#e.oid === t.oid && this.#e.layerIdx === t.layerIdx) return;
		if (this.clear(), this.#e = t, !n) {
			console.error(`graphic hit test returned non-existent layer id: ${t.layerId}`);
			return;
		}
		if (!n.maptips) return;
		let r = await n.getIcon(t.oid), i = await n.getGraphic(t.oid, { getAttribs: !0 });
		this.maptipStore.maptipInstance.enable(), this.setPoint(this.$iApi.geo.map.screenPointToMapPoint(e)), this.$iApi.event.emit(Z.MAP_GRAPHICHIT, {
			layer: n,
			graphicHit: t,
			attributes: i.attributes,
			icon: r,
			screenPoint: e
		});
	}
	generateDefaultMaptip(e) {
		this.setContent(`<div class="flex items-center space-x-5"><span>${e.icon}</span><span class="line-clamp-3">${e.layer.maptipValue(e.attributes)}</span></div>`);
	}
	clear() {
		this.#e = void 0, this.maptipStore.setMaptipPoint(void 0), this.maptipStore.setMaptipContent("");
	}
	getInstance() {
		return this.maptipStore.maptipInstance;
	}
	getPoint() {
		return this.maptipStore.maptipPoint;
	}
	setPoint(e) {
		this.maptipStore.setMaptipPoint(e);
	}
	setContent(e) {
		this.maptipStore.setMaptipContent(e);
	}
}, eo = class extends Qa {
	overviewGraphicLayer;
	overviewmapStore;
	constructor(e) {
		super(e, "overview"), this.overviewGraphicLayer = this.$iApi.geo.layer.createLayer({
			id: "RampOverviewGraphic",
			layerType: R.GRAPHIC,
			url: "",
			cosmetic: !0,
			system: !0
		}), this.overviewmapStore = Ka(this.$vApp.$pinia);
	}
	async createMapView(e) {
		if (!e) throw Error("Attempted to create overview map view without a basemap");
		let t = typeof e == "string" ? await this.findBasemap(e) : e;
		await this.applyBasemap(t), this._rampExtentSet = this.$iApi.geo.map.getExtentSet().clone(), this._rampSR = this._rampExtentSet.sr.clone();
		let n = this.overviewmapStore.expandFactor;
		this.esriView = E(await K.MapView({
			map: this.esriMap,
			container: this._targetDiv,
			constraints: { rotationEnabled: !1 },
			attributionVisible: !1,
			spatialReference: this._rampSR.toESRI(),
			extent: this.$iApi.geo.map.getExtent().toESRI().expand(n)
		})), this.esriView.ui.components = [], this.handlers.push({
			type: "mouse-wheel",
			handler: this.esriView.on("mouse-wheel", (e) => {
				e.stopPropagation();
			})
		}), this.handlers.push({
			type: "double-click",
			handler: this.esriView.on("double-click", (e) => {
				e.stopPropagation();
			})
		}), this.handlers.push({
			type: "key-down",
			handler: this.esriView.on("key-down", (e) => {
				e.stopPropagation();
			})
		}), this.handlers.push({
			type: "key-up",
			handler: this.esriView.on("key-up", (e) => {
				e.stopPropagation();
			})
		}), this.handlers.push({
			type: "drag",
			handler: this.esriView.on("drag", (e) => {
				e.stopPropagation(), this.mapDrag(e);
			})
		}), this.esriView.container.addEventListener("touchmove", (e) => {
			e.preventDefault();
		}), s(() => this.esriView.fatalError, () => {
			let e = new IntersectionObserver((t) => {
				t.forEach((t) => {
					t.isIntersecting && (this.esriView?.tryFatalErrorRecovery(), e.disconnect());
				});
			});
			e.observe(this.esriView.container);
		}), this.esriView.when(() => {
			this._viewPromise.resolveMe(), this.created = !0;
		});
	}
	async addMapGraphicLayer() {
		if (!this.esriMap) {
			this.noMapErr();
			return;
		}
		let e = new ft(this.$iApi.geo.map.getExtent(), "overview-graphic"), t = this.overviewmapStore.borderColour ?? "#FF0000", n = this.overviewmapStore.borderWidth ?? 1, r = this.overviewmapStore.areaColour ?? "#000000", i = this.overviewmapStore.areaOpacity ?? .25;
		e.style = new Dt({
			fill: { colour: `${r}${Math.round(i * 255).toString(16)}` },
			outline: {
				colour: t,
				width: n
			}
		}), await this.overviewGraphicLayer.initiate(), await this.overviewGraphicLayer.addGraphic(e), this.esriMap?.add(this.overviewGraphicLayer.esriLayer);
	}
	async removeMapGraphicLayer() {
		if (!this.esriMap) {
			this.noMapErr();
			return;
		}
		if (!this.overviewGraphicLayer.esriLayer) throw Error("Attempted to remove layer from the map without an esri layer. Likely layer.initiate() was not called or had not finished.");
		this.overviewGraphicLayer.removeGraphic(), this.esriMap.remove(this.overviewGraphicLayer.esriLayer), await this.overviewGraphicLayer.terminate();
	}
	destroyMapView() {
		this.esriView?.container.removeEventListener("touchmove", (e) => {
			e.preventDefault();
		}), super.destroyMapView();
	}
	async findBasemap(e) {
		let n = this._basemapStore.find((t) => t.id === e);
		if (n) return n;
		{
			let n = t(this.$vApp.$pinia).config.map;
			if (n) {
				let t = n.basemaps.find((t) => t.id === e);
				if (t) return Za.create(t);
			}
		}
		throw Error(`Invalid basemap id requested: ${e}`);
	}
	async setBasemap(e) {
		if (!this.esriView || !this.esriMap) return this.noMapErr(), !1;
		let t = await this.findBasemap(e), n = (this.getCurrentBasemapId() ? await this.findBasemap(this.getCurrentBasemapId()) : void 0)?.tileSchemaId !== t.tileSchemaId;
		return n ? (this.destroyMapView(), await this.createMapView(t)) : await this.applyBasemap(t), n;
	}
	startExtent = null;
	async mapDrag(e) {
		if (e.native.pointerType === "mouse") {
			if (e.action === "start") await this.cursorHitTest(e) && (this.startExtent = E(this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry));
			else if (this.startExtent) {
				let t = this.esriView.toMap(e.origin), n = this.esriView.toMap({
					x: e.x,
					y: e.y
				}), r = this.startExtent.clone().offset(n.x - t.x, n.y - t.y, 0);
				this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry = r, e.action === "end" && (this.$iApi.geo.map.zoomMapTo(this.$iApi.geo.geom.geomEsriToRamp(r), void 0, !1), this.startExtent = null);
			}
		}
	}
	updateOverview(e) {
		let t = this.overviewmapStore.expandFactor, n = this.zoomMapTo(e.expand(t), void 0, !1), r = this.overviewGraphicLayer.getLocalGraphic("overview-graphic");
		return this.overviewGraphicLayer.removeGraphic(r), r.geometry = e, this.overviewGraphicLayer.addGraphic(r), n;
	}
	async cursorHitTest(e) {
		return (await this.esriView.hitTest(e)).results.length > 0;
	}
}, to = class extends X {
	DEFAULT_POINT_FORMATTERS = {
		LAT_LONG_DMS: this.formatLatLongDMS,
		LAT_LONG_DD: this.formatLatLongDD,
		LAT_LONG_DDM: this.formatLatLongDDM,
		WEB_MERCATOR: this.formatMercator,
		CANADA_ATLAS_LAMBERT: this.formatLambert,
		UTM: this.formatUTM,
		BASEMAP: this.formatBasemap
	};
	pointFormatter;
	constructor(e) {
		super(e), this.pointFormatter = this.DEFAULT_POINT_FORMATTERS.LAT_LONG_DMS;
	}
	createCaption(e) {
		if (!e) return;
		let t = Gt(this.$vApp.$pinia);
		if (t.coords.disabled = !1, t.scale.disabled = !1, t.scale.isImperialScale = !1, e.mapCoords) if (e.mapCoords.disabled) t.coords.disabled = !0;
		else {
			let t = e.mapCoords.formatter;
			t !== void 0 && this.setPointFormatter(t);
		}
		if (e.scaleBar) if (e.scaleBar.disabled) t.scale.disabled = !0;
		else {
			let n = e.scaleBar.imperialScale;
			n !== void 0 && (t.toggleScale(n), this.$iApi.geo.map.viewPromise.then(() => {
				this.updateScale();
			}));
		}
		t.langtoggle = { disabled: e?.langToggle?.disabled ?? !1 };
	}
	updateAttribution(e) {
		let t = {
			disabled: !1,
			value: this.$iApi.$i18n.t("caption.attributionDefaultText")
		}, n = { text: {
			value: "",
			disabled: !1
		} };
		if (e ? (e.text ? e.text.disabled ? n.text.disabled = !0 : n.text.value = e.text.value || t.value : n.text.value = t.value, Gt(this.$vApp.$pinia).setAttribution(n)) : n.text.value = t.value, !e || e.text?.disabled || !e.text) {
			if (!this.$iApi.geo.map.esriMap) {
				console.warn("Attempted to fetch map attribution with undefined map");
				return;
			}
			let e = "", r = this.$iApi.geo.map.esriMap.basemap;
			if (r) {
				let i = r.baseLayers.map((e) => new Promise((t) => {
					let n = 0, r = setInterval(function() {
						e.loaded && !e.loadError ? (clearInterval(r), t(e)) : n > 250 && (clearInterval(r), t(null)), n++;
					}, 20);
				})).toArray();
				Promise.all(i).then((r) => {
					e = r.filter((e) => e?.copyright).map((e) => e.copyright).join(" | "), n.text.value = e || n.text.value || t.value, Gt(this.$vApp.$pinia).setAttribution(n);
				});
			}
		}
	}
	updateScale() {
		let e = Gt(this.$vApp.$pinia), t = e.scale;
		if (t?.disabled) return;
		let n = t?.isImperialScale || !1, r = this.scaleHelper().find((e) => e.isImperialScale === n) ?? {
			isImperialScale: !1,
			units: "error",
			pixels: 1,
			distance: 1
		};
		e.scale = {
			width: `${r.pixels}px`,
			label: `${this.$iApi.$i18n.n(r.distance, "number")}${r.units}`,
			isImperialScale: n
		};
	}
	async formatPoint(e) {
		return e ? await this.pointFormatter(e) : "";
	}
	setPointFormatter(e) {
		if (typeof e == "string") {
			if (!(e in this.DEFAULT_POINT_FORMATTERS)) {
				console.warn(`Could not find point formatter with id: ${e}`);
				return;
			}
			this.pointFormatter = this.DEFAULT_POINT_FORMATTERS[e];
		} else this.pointFormatter = e;
	}
	scaleHelper() {
		let e = window.innerWidth > 600 ? 70 : 35, t = this.$iApi.geo.map.getResolution(), n = [], r = t * e, i = 1609.34, a = r > 1e3 ? ["km", "mi"] : ["m", "ft"];
		for (let o = 0; o < 2; o++) {
			let s = o === 1;
			if (n.push({
				isImperialScale: s,
				units: a[o],
				pixels: 0,
				distance: 0
			}), r > 1e3) {
				let r = t * e / (s ? i : 1e3), a = 10 ** (Math.round(r).toString().length - 1);
				n[o].distance = Math.ceil(r / a) * a, n[o].pixels = n[o].distance * (s ? i : 1e3) / t;
			} else n[o].distance = Math.ceil(s ? r * 3.28084 : r), n[o].pixels = r / t;
		}
		return n;
	}
	wrapValue(e, t, n) {
		return ((e - t) % (n - t) + (n - t)) % (n - t) + t;
	}
	async formatLatLongDMS(e) {
		let t = await this.$iApi.geo.proj.projectGeometry(4326, e), n = this.wrapValue(t.y, -90, 90), r = this.wrapValue(t.x, -180, 180), i = Math.floor(Math.abs(n)) * (n < 0 ? -1 : 1), a = Math.floor(Math.abs((n - i) * 60)), o = Math.floor((Math.abs(n) - Math.abs(i) - a / 60) * 3600), s = Math.floor(Math.abs(r)) * (r < 0 ? -1 : 1), c = Math.floor(Math.abs((r - s) * 60)), l = Math.floor((Math.abs(r) - Math.abs(s) - c / 60) * 3600);
		return `${this.$iApi.$i18n.n(Math.abs(i), "number")}° ${this.$iApi.$i18n.n(a, "number", { minimumIntegerDigits: 2 })}' ${this.$iApi.$i18n.n(o, "number", { minimumIntegerDigits: 2 })}" ${this.$iApi.$i18n.t("map.coordinates." + (n > 0 ? "north" : "south"))} | ${this.$iApi.$i18n.n(Math.abs(s), "number")}° ${this.$iApi.$i18n.n(c, "number", { minimumIntegerDigits: 2 })}' ${this.$iApi.$i18n.n(l, "number", { minimumIntegerDigits: 2 })}" ${this.$iApi.$i18n.t("map.coordinates." + (0 > r ? "west" : "east"))}`;
	}
	async formatLatLongDDM(e) {
		let t = await this.$iApi.geo.proj.projectGeometry(4326, e), n = this.wrapValue(t.y, -90, 90), r = this.wrapValue(t.x, -180, 180), i = Math.floor(Math.abs(n)) * (n < 0 ? -1 : 1), a = Math.abs((n - i) * 60), o = Math.floor(Math.abs(r)) * (r < 0 ? -1 : 1), s = Math.abs((r - o) * 60);
		return `${this.$iApi.$i18n.n(Math.abs(i), "number")}° ${this.$iApi.$i18n.n(a, "number", {
			minimumIntegerDigits: 2,
			minimumFractionDigits: 5,
			maximumFractionDigits: 5
		})} ${this.$iApi.$i18n.t("map.coordinates." + (n > 0 ? "north" : "south"))} | ${this.$iApi.$i18n.n(Math.abs(o), "number")}° ${this.$iApi.$i18n.n(s, "number", {
			minimumIntegerDigits: 2,
			minimumFractionDigits: 5,
			maximumFractionDigits: 5
		})} ${this.$iApi.$i18n.t("map.coordinates." + (0 > r ? "west" : "east"))}`;
	}
	async formatLatLongDD(e) {
		let t = await this.$iApi.geo.proj.projectGeometry(4326, e), n = this.wrapValue(t.y, -90, 90), r = this.wrapValue(t.x, -180, 180), i = Math.abs(n), a = Math.abs(r);
		return `${this.$iApi.$i18n.n(i, "number", {
			minimumIntegerDigits: 2,
			minimumFractionDigits: 5,
			maximumFractionDigits: 5
		})}° ${this.$iApi.$i18n.t("map.coordinates." + (n > 0 ? "north" : "south"))} | ${this.$iApi.$i18n.n(a, "number", {
			minimumIntegerDigits: 2,
			minimumFractionDigits: 5,
			maximumFractionDigits: 5
		})}° ${this.$iApi.$i18n.t("map.coordinates." + (0 > r ? "west" : "east"))}`;
	}
	async formatMercator(e) {
		let t = await this.$iApi.geo.proj.projectGeometry(102100, e);
		return `${this.$iApi.$i18n.n(Math.floor(t.x), "number")} m | ${this.$iApi.$i18n.n(Math.floor(t.y), "number")} m`;
	}
	async formatLambert(e) {
		let t = await this.$iApi.geo.proj.projectGeometry(3978, e);
		return `${this.$iApi.$i18n.n(Math.abs(Math.floor(t.x)), "number")} m ${this.$iApi.$i18n.t("map.coordinates." + (0 > t.x ? "west" : "east"))} | ${this.$iApi.$i18n.n(Math.abs(Math.floor(t.y)), "number")} m ${this.$iApi.$i18n.t("map.coordinates." + (t.y > 0 ? "north" : "south"))}`;
	}
	async formatUTM(e) {
		let t = await this.$iApi.geo.proj.projectGeometry(4326, e), n = this.wrapValue(t.y, -90, 90), r = this.wrapValue(t.x, -180, 180), i = Math.ceil((r + 180) / 6), a = await this.$iApi.geo.proj.projectGeometry(parseInt("326" + i), e);
		return `${this.$iApi.$i18n.n(i, "number", { minimumIntegerDigits: 2 })} ${this.$iApi.$i18n.t("map.coordinates." + (n > 0 ? "north" : "south"))} ${this.$iApi.$i18n.n(Math.floor(a.x), "number")} m${this.$iApi.$i18n.t("map.coordinates.east")} | ${this.$iApi.$i18n.n(Math.abs(Math.floor(a.y)), "number")} m${this.$iApi.$i18n.t("map.coordinates.north")}`;
	}
	async formatBasemap(e) {
		let t = await this.$iApi.geo.proj.projectGeometry(this.$iApi.geo.map.getSR(), e);
		return `${this.$iApi.$i18n.n(t.x, "number")} | ${this.$iApi.$i18n.n(t.y, "number")}`;
	}
}, no = class extends Qa {
	maptip;
	caption;
	mapMouseThrottle;
	_hilighLightLayerId = "";
	layerDefaultTimes = {
		draw: 12e3,
		load: 12e3,
		fail: 9e4
	};
	constructor(e) {
		super(e, "main"), this.maptip = new $a(e), this.caption = new to(e), this.mapMouseThrottle = 0;
	}
	async createMap(e, t) {
		this.setMapMouseThrottle(e.mapMouseThrottle ?? 0), this.trackFirstBasemap = !0, this.layerDefaultTimes.draw = e.layerTimeDefault?.expectedDrawTime ?? 12e3, this.layerDefaultTimes.load = e.layerTimeDefault?.expectedLoadTime ?? 12e3, this.layerDefaultTimes.fail = e.layerTimeDefault?.maxLoadTime || 9e4, await super.createMap(e, t), this.viewPromise.then(() => {
			this.$iApi.event.emit(Z.MAP_CREATED);
		});
	}
	destroyMap() {
		if (!this.esriMap || !this.esriView) {
			this.noMapErr();
			return;
		}
		this.$iApi.geo.layer.allLayersOnMap(!1).map((e) => e.uid).forEach((e) => this.removeLayer(e)), super.destroyMap(), this.$iApi.event.emit(Z.MAP_DESTROYED);
	}
	async createMapView(e) {
		let n = t(this.$vApp.$pinia).config.map;
		if (!n) throw Error("Attempted to create map view without a map config");
		let r = (typeof e == "string" ? await this.findBasemap(e) : e) || await this.findBasemap(n.initialBasemapId), i = n.tileSchemas.find((e) => e.id === r.tileSchemaId);
		if (!i) throw Error(`Could not find tile schema for the given basemap id: ${r.id}`);
		let a = n.extentSets.find((e) => e.id === i.extentSetId);
		if (!a) throw Error(`Could not find extent set with the given id: ${i.extentSetId}`);
		this._rampExtentSet = Mt.fromConfig(a), this._rampSR = this._rampExtentSet.sr.clone();
		let o = n.lodSets.find((e) => e.id === i.lodSetId);
		if (!o) throw Error(`Could not find lod set with the given id: ${i.lodSetId}`);
		this.esriView = E(await K.MapView({
			map: this.esriMap,
			container: this._targetDiv,
			constraints: {
				lods: o.lods,
				rotationEnabled: !1
			},
			attributionVisible: !1,
			spatialReference: this._rampSR.toESRI(),
			extent: this._rampExtentSet.defaultExtent.toESRI(),
			navigation: { browserTouchPanEnabled: !1 },
			background: { color: r.backgroundColour }
		})), this.esriView.ui.components = [], this.handlers.push({
			type: "extent",
			handler: s(() => this.esriView.extent, (e) => {
				if (e) {
					let t = this.$iApi.geo.geom.geomEsriToRamp(e, "map_extent_event");
					this.$iApi.event.emit(Z.MAP_EXTENTCHANGE, t), this.$iApi.event.emit(Z.FILTER_CHANGE, {
						extent: t,
						filterKey: W.EXTENT
					});
				}
			})
		}), this.handlers.push({
			type: "scale",
			handler: s(() => this.esriView.scale, (e) => {
				this.$iApi.event.emit(Z.MAP_SCALECHANGE, e);
			})
		}), this.handlers.push({
			type: "resize",
			handler: this.esriView.on("resize", (e) => {
				this.$iApi.event.emit(Z.MAP_RESIZED, {
					height: e.height,
					width: e.width
				});
			})
		}), this.handlers.push({
			type: "click",
			handler: this.esriView.on("click", (e) => {
				this.$iApi.event.emit(Z.MAP_CLICK, this.$iApi.geo.geom.esriMapClickToRamp(e, "map_click_point"));
			})
		}), this.handlers.push({
			type: "double-click",
			handler: this.esriView.on("double-click", (e) => {
				this.$iApi.event.emit(Z.MAP_DOUBLECLICK, this.$iApi.geo.geom.esriMapClickToRamp(e, "map_doubleclick_point"));
			})
		}), this.handlers.push({
			type: "pointer-move",
			handler: this.esriView.on("pointer-move", this.createMouseMoveHandler())
		}), this.handlers.push({
			type: "pointer-move-start",
			handler: this.esriView.on("pointer-move", Re((e) => {
				this.$iApi.event.emit(Z.MAP_MOUSEMOVE_START, this.$iApi.geo.geom.esriMapMouseToRamp(e));
			}, 100, { edges: ["leading"] }))
		}), this.handlers.push({
			type: "pointer-move-end",
			handler: this.esriView.on("pointer-move", Re((e) => {
				this.$iApi.event.emit(Z.MAP_MOUSEMOVE_END, this.$iApi.geo.geom.esriMapMouseToRamp(e));
			}, 100))
		}), this.handlers.push({
			type: "pointer-leave",
			handler: this.esriView.on("pointer-leave", (e) => {
				setTimeout(() => {
					this.$iApi.event.emit(Z.MAP_MOUSELEAVE, e.native);
				}, Math.max(this.mapMouseThrottle, 100) + 1);
			})
		}), this.handlers.push({
			type: "pointer-down",
			handler: this.esriView.on("pointer-down", (e) => {
				this.$iApi.event.emit(Z.MAP_MOUSEDOWN, e.native);
			})
		}), this.handlers.push({
			type: "key-down",
			handler: this.esriView.on("key-down", (e) => {
				this.$iApi.event.emit(Z.MAP_KEYDOWN, e.native), e.stopPropagation();
			})
		}), this.handlers.push({
			type: "key-up",
			handler: this.esriView.on("key-up", (e) => {
				this.$iApi.event.emit(Z.MAP_KEYUP, e.native), e.stopPropagation();
			})
		}), this.handlers.push({
			type: "focus",
			handler: this.esriView.on("focus", (e) => {
				this.$iApi.event.emit(Z.MAP_FOCUS, e.native);
			})
		}), this.handlers.push({
			type: "blur",
			handler: this.esriView.on("blur", (e) => {
				this.$iApi.event.emit(Z.MAP_BLUR, e.native);
			})
		}), this.esriView.container ? this.esriView.container.addEventListener("touchmove", (e) => {
			e.preventDefault();
		}) : console.error("ESRI Map View is missing its container"), s(() => this.esriView.fatalError, () => {
			let e = new IntersectionObserver((t) => {
				t.forEach((t) => {
					t.isIntersecting && (this.esriView?.tryFatalErrorRecovery(), e.disconnect());
				});
			});
			e.observe(this.esriView.container);
		}), this.esriView.when(() => {
			if (this._viewPromise.resolveMe(), this.created = !0, this.applyBasemap(r), i.recoveryBasemap?.basemapId) {
				let e = i.recoveryBasemap.timeout ?? 8e3;
				e > 0 && setTimeout(() => {
					this.trackFirstBasemap && this.recoverBasemap(i.id);
				}, e);
			}
		});
	}
	destroyMapView() {
		this.esriView?.container?.removeEventListener("touchmove", (e) => {
			e.preventDefault();
		}), super.destroyMapView();
	}
	async applyBasemap(e) {
		if (!this.esriMap) {
			this.noMapErr();
			return;
		}
		let n = typeof e == "string" ? await this.findBasemap(e) : e;
		this.esriMap.basemap = je(n.esriBasemap);
		let r = t(this.$vApp.$pinia);
		r.activeBasemapConfig = n.config;
	}
	async setBasemap(e) {
		if (!this.esriView || !this.esriMap) return this.noMapErr(), !1;
		let n = t(this.$vApp.$pinia), r = await this.findBasemap(e), i = n.activeBasemapConfig.tileSchemaId !== r.tileSchemaId;
		if (i) {
			let t = this.getExtent().center(), n = this.getScale();
			this._viewPromise = new Y(), this.created = !1, this.$iApi.event.emit(Z.MAP_REFRESH_START), this.destroyMapView(), this.createMapView(r), await this.viewPromise.then(() => {
				this.$iApi.event.emit(Z.MAP_REFRESH_END), this.$iApi.event.emit(Z.MAP_BASEMAPCHANGE, {
					basemapId: e,
					schemaChanged: i
				});
				let r = this.findClosestScale(n);
				this.$iApi.geo.proj.projectGeometry(this._rampSR, t).then((e) => this.zoomMapTo(e, r, !1));
			});
		} else {
			await this.applyBasemap(r);
			let t = await K.ColorBackground({ color: new Ct(r.backgroundColour).toESRI() });
			this.esriView.background = t, this.$iApi.event.emit(Z.MAP_BASEMAPCHANGE, {
				basemapId: e,
				schemaChanged: i
			});
		}
		return i;
	}
	async recoverBasemap(e) {
		this.esriMap || this.noMapErr(), this.trackFirstBasemap = !1;
		let n = t(this.$vApp.$pinia).config.map;
		if (n) {
			let t = n.tileSchemas.find((t) => t.id === e);
			if (t?.recoveryBasemap?.basemapId) {
				let e = await this.findBasemap(t.recoveryBasemap.basemapId);
				await this.applyBasemap(e);
			}
		}
	}
	addLayer(t, n = void 0) {
		return new Promise((r, i) => {
			if (this.esriMap || (this.noMapErr(), i()), t.initiationState !== H.INITIATING && t.initiationState !== H.INITIATED && t.layerState !== U.ERROR && t.initiate(), t.mapLayer && n === void 0) {
				let e = this.$iApi.geo.layer.layerOrderIds();
				if (t.isCosmetic) n = e.length;
				else {
					let t = this.$iApi.geo.layer.allLayers(), r = !0;
					for (let i = e.length - 1; i >= 0 && r; i--) {
						let a = t.find((t) => t.id === e[i]);
						a && !a.isCosmetic && (n = i + 1, r = !1);
					}
					r && (n = 0);
				}
			}
			e(this.$vApp.$pinia).addLayer(t, n), this.$iApi.event.emit(Z.LAYER_REGISTERED, t);
			let a = Date.now(), o = 0, s = setInterval(() => {
				o += 250, o >= t.expectedTime.fail || t.layerState === U.ERROR ? (clearInterval(s), t.lastCancel < a && console.error(`Failed to add layer: ${t.id}.`), i()) : t.initiationState === H.INITIATED && (t.esriLayer || !t.mapLayer) && (clearInterval(s), t.mapLayer ? this.insertToEsriMap(t) : t.onLoad(), r());
			}, 250);
		});
	}
	insertToEsriMap(e) {
		let t = 0, n = this.$iApi.geo.layer.getLayerPosition(e.id) ?? -1;
		if (n > 0) {
			let e = this.$iApi.geo.layer.layerOrderIds(), r = this.$iApi.geo.layer.allLayers();
			for (let i = n - 1; i > -1; i--) {
				let n = e[i], a = r.find((e) => e.id === n);
				if (a && a.esriLayer) {
					let e = this.esriMap.layers.indexOf(a.esriLayer);
					if (e > -1) {
						t = e + 1;
						break;
					}
				} else a || console.error("ESRI Layer insert encountered bad state. Layer likely inserted at bottom of map.");
			}
		}
		n > -1 && this.esriMap?.add(e.esriLayer, t);
	}
	reorder(t, n, r = !1) {
		if (n < 0) {
			console.error("Negative index passed to map reorder");
			return;
		}
		if (!this.esriMap) {
			this.noMapErr();
			return;
		}
		if (t.isSublayer && (t = t.parentLayer), !t.mapLayer) {
			console.error("Attempted to reorder a data layer");
			return;
		}
		let i = this.$iApi.geo.layer.allLayers(), a = this.$iApi.geo.layer.layerOrderIds();
		if (r) {
			if (t.isCosmetic) return;
			if (n > 0) {
				let e = a.filter((e) => {
					let t = i.find((t) => t.id === e);
					return t ? !t.isCosmetic : (console.error("Layer reorder had critical error"), !1);
				});
				n >= e.length && (console.error("non-cosmetic reorder index was too high"), n = e.length - 1), n = a.indexOf(e[n]);
			}
		} else n >= a.length && (console.error("reorder index was too high"), n = a.length - 1);
		let o = a.indexOf(t.id);
		if (o !== n) {
			if (e(this.$vApp.$pinia).reorderLayer(t, n), t.esriLayer && this.esriMap.layers.indexOf(t.esriLayer) > -1) {
				let e = 0;
				if (n > 0) {
					a = this.$iApi.geo.layer.layerOrderIds();
					for (let t = n - 1; t > -1; t--) {
						let r = a[t], s = i.find((e) => e.id === r);
						if (s && s.esriLayer) {
							let t = this.esriMap.layers.indexOf(s.esriLayer);
							if (t > -1) {
								e = t + +(n < o);
								break;
							}
						} else s || console.error("Layer reorder had critical error");
					}
				}
				this.esriMap.reorder(t.esriLayer, e);
			}
			this.$iApi.event.emit(Z.MAP_REORDER, {
				layer: t,
				newIndex: n
			});
		}
	}
	removeSublayer(e) {
		let t, n;
		if (typeof e == "string") t = e, n = this.$iApi.geo.layer.getLayer(t);
		else {
			if (!e.isSublayer) throw Error(`Attempted to call removeSublayer on a non-sublayer object: ${e}`);
			t = e.uid, n = e;
		}
		if (!n) throw Error("Sublayer could not be found for removal.");
		n.visibility = !1, n.isRemoved = !0, this.$iApi.event.emit(Z.LAYER_REMOVE, e), n.parentLayer?.sublayers.every((e) => e.isRemoved) && this.removeLayer(n.parentLayer);
	}
	removeLayer(t) {
		if (!this.esriMap) {
			this.noMapErr();
			return;
		}
		let n;
		if (n = t instanceof ho ? t : this.$iApi.geo.layer.getLayer(t), !n) throw Error("Layer could not be found for removal.");
		if (n.isSublayer) {
			this.removeSublayer(n);
			return;
		}
		n.supportsSublayers && n.sublayers.forEach((e) => {
			e.isRemoved || this.removeSublayer(e);
		});
		let r = e(this.$vApp.$pinia);
		r.removeLayer(n), r.removeLayerConfig(n.id), n.removeEsriLayer(), n.initiationState === H.INITIATED && n.terminate(), n.isRemoved = !0, this.$iApi.event.emit(Z.LAYER_REMOVE, n);
	}
	setMapMouseThrottle(e) {
		if (e < 0) return console.error("Cannot set map mouse throttle to value that is less than 0."), !1;
		this.mapMouseThrottle = e;
		let t = this.handlers.findIndex((e) => e.type === "pointer-move");
		if (t !== -1) {
			let e = this.handlers[t];
			this.handlers.splice(t, 1), e.handler.remove();
		}
		return t !== -1 && this.esriView && this.handlers.push({
			type: "pointer-move",
			handler: this.esriView.on("pointer-move", this.createMouseMoveHandler())
		}), !0;
	}
	createMouseMoveHandler() {
		if (!this.esriView) {
			this.noMapErr();
			return;
		}
		return ze((e) => {
			this.$iApi.event.emit(Z.MAP_MOUSEMOVE, this.$iApi.geo.geom.esriMapMouseToRamp(e));
		}, this.mapMouseThrottle);
	}
	async zoomToLevel(e) {
		if (this.esriView) return this.esriView.goTo({ zoom: e });
		this.noMapErr();
	}
	async zoomIn() {
		if (this.esriView) return this.zoomToLevel(this.esriView.zoom + 1);
		this.noMapErr();
	}
	async zoomOut() {
		if (this.esriView) return this.zoomToLevel(this.esriView.zoom - 1);
		this.noMapErr();
	}
	async zoomToVisibleScale(e) {
		if (!this.esriView) {
			this.noMapErr();
			return;
		}
		let t = e.isOffScale(this.getScale());
		if (!t.offScale) return;
		let n = this.esriView.constraints.lods;
		if (!n) return this.zoomMapTo(this.getExtent().center(), (t.zoomIn, e.minScale));
		let r = t.zoomIn ? n : [...n].reverse(), i = r.find((n) => t.zoomIn ? n.scale < e.minScale : n.scale > e.maxScale) || r[r.length - 1];
		return this.zoomToLevel(i.level);
	}
	findClosestScale(e) {
		let t = this.esriView?.constraints.lods;
		if (!t) return e;
		let n = t.map((t) => Math.abs(t.scale - e));
		return t[n.indexOf(Math.min(...n))].scale;
	}
	async takeScreenshot(e) {
		if (this.esriView) return e.quality ||= 1, e.format ||= "png", this.esriView.takeScreenshot(e);
		throw Error("Export attempted without a map view available");
	}
	screenPointToMapPoint(e) {
		return this.esriView ? J.fromESRI(this.esriView.toMap({
			x: e.screenX,
			y: e.screenY
		}), "mappoint") : (this.noMapErr(), new J("i_am_error", [0, 0], void 0, !0));
	}
	mapPointToScreenPoint(e) {
		if (this.esriView) {
			let t = this.esriView.toScreen(e.toESRI());
			return {
				screenX: t.x,
				screenY: t.y
			};
		} else return this.noMapErr(), {
			screenX: 1,
			screenY: 1
		};
	}
	async symbolIdentify(e, t) {
		await this.viewPromise;
		let n = (await this.esriView.hitTest({
			x: e,
			y: t
		})).results.filter((e) => e.type === "graphic").map(async (e) => {
			let t = e.layer;
			if (e.graphic.isAggregate === !0) {
				let n = await this.esriView.whenLayerView(t), r = n.createQuery();
				return r.aggregateIds = [e.graphic.getObjectId()], (await n.queryFeatures(r)).features.map((e) => ({
					layerId: t.id,
					layerIdx: 0,
					oid: e.getObjectId()
				}));
			} else return {
				layerId: t.id,
				layerIdx: 0,
				oid: e.graphic.getObjectId()
			};
		});
		return (await Promise.all(n)).flat();
	}
	runIdentify(e) {
		let t = this.$iApi.geo.layer.allLayersOnMap(!1).filter((e) => e.canIdentify()), n;
		if (e instanceof J) {
			let t = this.mapPointToScreenPoint(e);
			n = {
				mapPoint: e,
				screenX: t.screenX,
				screenY: t.screenY,
				button: 0,
				input: "mouse",
				clickTime: Date.now()
			};
		} else n = e;
		let r = this.$iApi.fixture.get("draw");
		if (r && this.esriView && (r.store.activeTool || r.store.selectedGraphicId !== null) || t === void 0) return {
			click: n,
			results: []
		};
		let i = Promise.resolve([]);
		t.some((e) => e.identifyMode === V.HYBRID || e.identifyMode === V.SYMBOLIC) && (i = this.symbolIdentify(n.screenX, n.screenY));
		let a = {
			geometry: n.mapPoint,
			hitTest: i
		}, o = t.filter((e) => e.supportsIdentify).map((e) => (a.tolerance = n.input == "touch" ? e.touchTolerance : e.mouseTolerance, e.runIdentify(a))).flat(), s = Date.now();
		o.forEach((e) => {
			e.requestTime = s;
		});
		let c = {
			results: o,
			click: n
		};
		return this.$iApi.event.emit(Z.MAP_IDENTIFY, c), c;
	}
	async getGraphicAtCoord(e) {
		if (!this.esriView) {
			this.noMapErr();
			return;
		}
		if (!this._hilighLightLayerId) {
			let e = this.$iApi.fixture.get("hilight");
			e && (this._hilighLightLayerId = e.hilightLayerName);
		}
		let t = this.$iApi.geo.layer.allLayersOnMap(!1).filter((e) => e.supportsFeatures || e.layerType === R.GRAPHIC);
		if (t.length === 0) return;
		let n = await this.esriView.hitTest({
			x: e.screenX,
			y: e.screenY
		});
		if (n.results.length === 0) return;
		let r = n.results.filter((e) => e.type === "graphic"), i, a, o = /* @__PURE__ */ new Set();
		if (r.some((e) => {
			if (!e.layer || o.has(e.layer.id)) return !1;
			let n = t.find((t) => t.id === e.layer.id);
			if (n) {
				if (!(n.isCosmetic || n.layerType === R.GRAPHIC || e.graphic.isAggregate)) i = n, a = e.graphic.getObjectId();
				else if (n.id === this._hilighLightLayerId && e.graphic.id) {
					let n = this.$iApi.fixture.get("hilight");
					if (n) {
						let r = n.deconstructGraphicKey(e.graphic.id, !0);
						if (r.oid && r.uid) {
							let e = t.find((e) => e.uid === r.uid);
							e && e.supportsFeatures && (i = e, a = r.oid);
						}
					}
				}
				return !0;
			} else return o.add(e.layer.id), !1;
		}), i && a) return {
			oid: a,
			layerId: i.id,
			layerIdx: i.layerIdx,
			layer: i
		};
	}
	_activeKeys = [];
	_panInterval;
	_mouseFocus = !1;
	mapKeyDown(e) {
		let t = ["=", "-"];
		[
			"Shift",
			"Control",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight",
			"ArrowUp"
		].includes(e.key) && !this._activeKeys.includes(e.key) ? (this._activeKeys.push(e.key), this._activeKeys.some((e) => t.includes(e)) || this.keyPan()) : t.includes(e.key) && !this._activeKeys.includes(e.key) ? (this._activeKeys.push(e.key), this.keyZoom(e)) : e.key === "Enter" ? this.runIdentify(this.getExtent().center()) : e.key === "Tab" && this._activeKeys.push(e.key);
	}
	mapKeyUp(e) {
		let t = ["=", "-"];
		this._activeKeys.includes(e.key) && !t.includes(e.key) && (this._activeKeys.splice(this._activeKeys.indexOf(e.key), 1), this._activeKeys.some((e) => t.includes(e)) || this.keyPan());
	}
	setMouseFocus() {
		this._mouseFocus = !0;
	}
	stopKeyPan() {
		this._activeKeys.includes("Tab") && (this._mouseFocus = !1), this._activeKeys = [], clearInterval(this._panInterval);
	}
	get keysActive() {
		return this._activeKeys.filter((e) => !["Control", "Shift"].includes(e)).length !== 0;
	}
	get mouseFocus() {
		return this._mouseFocus;
	}
	async keyZoom(e) {
		clearInterval(this._panInterval), e.key === "=" ? await this.zoomIn() : e.key === "-" && await this.zoomOut(), this._activeKeys.splice(this._activeKeys.indexOf(e.key), 1), this.keyPan();
	}
	keyPan() {
		if (clearInterval(this._panInterval), !this.keysActive) return;
		let e = this.getExtent().center(), t = this.mapPointToScreenPoint(e), n = this.screenPointToMapPoint({
			screenX: t.screenX + 5,
			screenY: t.screenY + 5
		}), r = Math.abs(n.x - e.x), i = Math.abs(n.y - e.y), a = 0, o = 0, s = 1;
		for (let e = 0; e < this._activeKeys.length; ++e) switch (this._activeKeys[e]) {
			case "ArrowLeft":
				a -= r;
				break;
			case "ArrowRight":
				a += r;
				break;
			case "ArrowUp":
				o += i;
				break;
			case "ArrowDown":
				o -= i;
				break;
			case "Shift":
				s = 2;
				break;
			case "Control":
				s = .25;
				break;
		}
		let c = this.getScale();
		this._panInterval = setInterval(() => {
			e.x += s * a, e.y += s * o, this.zoomMapTo(e, c, !1);
		}, 25);
	}
}, ro = {
	circlePoint: {
		geometryType: "point",
		renderer: {
			type: "simple",
			symbol: {
				type: "esriSMS",
				style: "esriSMSCircle",
				color: [
					67,
					100,
					255,
					200
				],
				size: 7,
				outline: {
					color: [
						0,
						0,
						0,
						255
					],
					width: 1
				}
			}
		}
	},
	solidLine: {
		geometryType: "polyline",
		renderer: {
			type: "simple",
			symbol: {
				type: "esriSLS",
				style: "esriSLSSolid",
				color: [
					90,
					90,
					90,
					200
				],
				width: 2
			}
		}
	},
	outlinedPoly: {
		geometryType: "polygon",
		renderer: {
			type: "simple",
			symbol: {
				type: "esriSFS",
				style: "esriSFSSolid",
				color: [
					76,
					76,
					125,
					200
				],
				outline: {
					type: "esriSLS",
					style: "esriSLSSolid",
					color: [
						110,
						110,
						110,
						255
					],
					width: 1
				}
			}
		}
	},
	boundingBoxPoly: {
		geometryType: "polygon",
		renderer: {
			type: "simple",
			symbol: {
				type: "esriSFS",
				style: "esriSFSSolid",
				color: [
					255,
					0,
					0,
					64
				],
				outline: {
					type: "esriSLS",
					style: "esriSLSSolid",
					color: [
						240,
						128,
						128,
						255
					],
					width: 1
				}
			}
		}
	}
}, io = {
	Point: "circlePoint",
	MultiPoint: "circlePoint",
	LineString: "solidLine",
	MultiLineString: "solidLine",
	Polygon: "outlinedPoly",
	MultiPolygon: "outlinedPoly"
};
function ao(e) {
	if (e.type !== "FeatureCollection") throw Error("GeoJSON is not in FeatureCollection format");
	let t = !0, n = !0;
	for (let r = 0; r < e.features.length; r++) {
		let i = e.features[r];
		Object.assign(i.properties, {
			ID_FILE: "",
			OBJECTID_FILE: ""
		}), "id" in i && i.id !== void 0 && (i.properties.ID_FILE = i.id, t = !1), "OBJECTID" in i.properties && (i.properties.OBJECTID_FILE = i.properties.OBJECTID, delete i.properties.OBJECTID, n = !1), i.id = r + 1;
	}
	if (t) for (let t = 0; t < e.features.length; t++) delete e.features[t].properties.ID_FILE;
	if (n) for (let t = 0; t < e.features.length; t++) delete e.features[t].properties.OBJECTID_FILE;
}
function oo(e, t) {
	let n = (e) => e.indexOf(" ") > -1;
	t.fields?.forEach((r) => {
		if (r.name && n(r.name)) {
			let n = r.name, i, a = "_", o;
			do
				i = n.replace(/ /g, a), o = t.fields?.find((e) => e.name === i), o && (a += "_");
			while (o);
			r.alias = n, r.name = i;
			for (let t = 0; t < e.features.length; t++) {
				let r = e.features[t];
				r.properties[i] = r.properties[n], delete r.properties[n];
			}
		}
	});
}
function so(e, t) {
	let n = e.features[t].geometry.geometries;
	if (n.length === 1) e.features[t].geometry = {
		type: n[0].type,
		coordinates: n[0].coordinates
	};
	else {
		let r = n.map((e) => e.coordinates);
		e.features[t].geometry = {
			type: `Multi${n[0].type}`,
			coordinates: r
		};
	}
}
function co(e) {
	return e === "MultiLineString" ? "LineString" : e === "MultiPolygon" ? "Polygon" : e;
}
var lo = class extends X {
	async fetchFileData(e, t) {
		let n = await Xe.get(e, { responseType: "arrayBuffer" });
		switch (t) {
			case R.GEOJSON:
			case R.DATAJSON: return JSON.parse(this.arbToStr(n.data));
			case R.SHAPEFILE:
			case R.GEOJSONZIPPED:
			case R.FLATGEOBUF:
			case R.FLATGEOBUFZIPPED: return n.data;
			case R.CSV:
			case R.DATACSV: return this.arbToStr(n.data);
			default: console.error(`Unsupported file type passed to fetchFileData- '${t}'`);
		}
	}
	extractGeoJsonFields(e) {
		if (e.features.length < 1) throw Error("GeoJSON field extraction requires at least one feature");
		let t = "";
		for (let n = 0; n < e.features.length; n++) {
			let r = e.features[n];
			if (r.geometry.type === "GeometryCollection") {
				let t = r.geometry.geometries;
				if (t === void 0 || t.length === 0) throw Error("GeoJSON file has geometry collection with missing/incomplete geometries");
				let i = t[0].type;
				for (let e = 0; e < t.length; e++) if (t[e].type !== i) throw Error("GeoJSON file has geometry collection containing multiple geometry types");
				so(e, n);
			}
			let i = co(r.geometry.type);
			if (t === "") t = i;
			else if (t !== i) throw Error("GeoJSON file contains multiple geometry types");
		}
		let n = Object.keys(e.features[0].properties).map((e) => ({
			name: e,
			type: "string"
		})), r = 0, i = Object.keys(e.features[0].properties);
		for (; r < e.features.length;) {
			let t = e.features[r];
			if (t.properties && Object.keys(t.properties).filter((e) => i.includes(e)).forEach((e) => {
				let r = t.properties[e];
				if (r != null) {
					let t = n.findIndex((t) => t.name === e);
					n[t] = {
						name: e,
						type: this.inferType(r)
					}, i.splice(i.indexOf(e), 1);
				}
			}), i.length === 0) break;
			r++;
		}
		return n;
	}
	extractCsvFields(e, t = ",") {
		return et.dsvFormat(t).parseRows(e)[0].map((e) => ({
			name: e,
			type: nt.STRING
		}));
	}
	filterCsvLatLonFields(e, t = ",") {
		let n = et.dsvFormat(t).parseRows(e), r = n[0], i = {
			lat: JSON.parse(JSON.stringify(r)),
			lon: JSON.parse(JSON.stringify(r))
		};
		for (let e = 0; e < r.length; e++) for (let t = 1; t < n.length; t++) {
			let a = Number(n[t][e]), o = i.lat.indexOf(r[e]), s = i.lon.indexOf(r[e]);
			if ((isNaN(a) || a < -90 || a > 90) && o !== -1 && i.lat.splice(o, 1), (isNaN(a) || a < -180 || a > 180) && s !== -1 && i.lon.splice(s, 1), o === -1 && s === -1) break;
		}
		return i;
	}
	async geoJsonToEsriJson(e, t) {
		let n, r = "", i, a = {
			objectIdField: "OBJECTID",
			fields: [{
				name: "OBJECTID",
				type: nt.OID
			}]
		};
		ao(e);
		let o = e.features[0].geometry.type, s = io[o], c = JSON.parse(JSON.stringify(ro[s]));
		if (t) {
			if (t.sourceProjection && (r = this.$iApi.geo.proj.normalizeProj(t.sourceProjection)), t.targetSR) n = t.targetSR;
			else throw Error("geoJsonToEsriJson - missing opts.targetSR arguement");
			i = t.layerId ? t.layerId : this.$iApi.geo.shared.generateUUID(), t.colour && (c.renderer.symbol.color = new Ct(t.colour).toArcServer());
		} else throw Error("geoJsonToEsriJson - missing opts arguement");
		r ||= q.parseGeoJsonCrs(e.crs), a.renderer = await K.RendererFromJson(c.renderer), a.fields = (a.fields || []).concat(t.fieldMetadata?.exclusiveFields ? this.extractGeoJsonFields(e).filter((e) => t.fieldMetadata?.fieldInfo?.find((t) => t.name === e.name)) : this.extractGeoJsonFields(e)), t.fieldMetadata?.enforceOrder && t.fieldMetadata?.fieldInfo && t.fieldMetadata?.fieldInfo.length > 0 && (a.fields = this.$iApi.geo.attributes.orderFields(a.fields, t.fieldMetadata?.fieldInfo)), oo(e, a);
		let l = this.$iApi.geo.proj.normalizeProj(n);
		if (t) {
			if (t.latField) {
				let e = a.fields.find((e) => e.name === t.latField || e.alias === t.latField);
				e && (e.type = nt.DOUBLE);
			}
			if (t.lonField) {
				let e = a.fields.find((e) => e.name === t.lonField || e.alias === t.lonField);
				e && (e.type = nt.DOUBLE);
			}
		}
		await this.$iApi.geo.proj.checkProjBomber([r, n]);
		let u = q.parseSR(n).toESRI();
		await this.$iApi.geo.proj.projectGeoJson(e, r, l);
		let d = Qe(e, { sr: 8888 });
		a.geometryType = this.$iApi.geo.geom.geoJsonGeomTypeToEsriGeomType(o);
		let f = a.fields.map((e) => e.name);
		for (let e = 0; e < d.length; e++) {
			let t = d[e];
			t.geometry.spatialReference = u, t.geometry.type = a.geometryType, Object.keys(t.attributes).forEach((e) => {
				f.includes(e) ? (Array.isArray(t.attributes[e]) || typeof t.attributes[e] == "object") && t.attributes[e] != null && (t.attributes[e] = JSON.stringify(t.attributes[e])) : delete t.attributes[e];
			});
		}
		return (t.fieldMetadata?.fieldInfo && t.fieldMetadata?.fieldInfo.length > 0 ? t.fieldMetadata.fieldInfo.filter((e) => e.trim && f.includes(e.name)).map((e) => e.name) : []).forEach((e) => {
			for (let t = 0; t < d.length; t++) {
				let n = d[t].attributes;
				typeof n[e] == "string" && (n[e] = n[e].trim());
			}
		}), a.source = d, a.spatialReference = u, a.id = i, a;
	}
	async csvToGeoJson(e, t) {
		let n = {
			latfield: "Lat",
			lonfield: "Long",
			delimiter: ","
		};
		return t && (t.latfield && (n.latfield = t.latfield), t.lonfield && (n.lonfield = t.lonfield), t.delimiter && (n.delimiter = t.delimiter)), new Promise((t, r) => {
			$e(e, n, (e, i) => {
				e ? (console.error("csv conversion error"), console.error(e), r(e)) : (i.features.map((e) => {
					e.properties[n.lonfield] = e.geometry.coordinates[0], e.properties[n.latfield] = e.geometry.coordinates[1];
				}), t(i));
			});
		});
	}
	async shapefileToGeoJson(e) {
		return (await import("shpjs")).default(e);
	}
	fgbToGeoJson(e, t) {
		return import("flatgeobuf").then(({ geojson: n }) => new Promise((r) => {
			let i = !1, a = null, o, s = n.deserialize(new Uint8Array(e), void 0, (e) => {
				a = e.crs, i = !0;
			});
			Array.fromAsync(s).then((e) => {
				o = {
					type: "FeatureCollection",
					features: e
				};
			});
			let c = 0, l = setInterval(() => {
				if (o && i) {
					clearInterval(l);
					let e;
					a && (a.code && a.code !== 4326 && a.org === "EPSG" ? e = new q(a.code) : a.wkt ? e = new q(a.wkt) : console.error("Encountered FlatGeobuf with non-EPSG org: ", a)), e && (o.crs = e.toGeoJSON()), r(o);
				} else c += 60, c > t && (clearInterval(l), r({}));
			}, 60);
		}));
	}
	inferType(e) {
		return typeof e == "number" ? nt.DOUBLE : nt.STRING;
	}
	rawDataJsonParser(e, t = !1) {
		let n;
		return n = typeof e == "string" ? JSON.parse(e) : t ? structuredClone(e) : e, n;
	}
	async unzipSingleFile(e) {
		let t = await new (await (import("jszip"))).default().loadAsync(e), n = Object.keys(t.files)[0];
		if (n && t.file(n)) return await t.file(n).async("arraybuffer");
		throw Error("Could not find file in zipfile data.");
	}
	async binaryInitHelper(e) {
		if (e.rawData && e.rawData instanceof ArrayBuffer) return e.rawData;
		if (e.url) return this.$iApi.geo.layer.files.fetchFileData(e.url, e.layerType);
		throw Error(`${e.layerType} config contains no url or invalid/missing raw data`);
	}
	arbToStr(e) {
		return new TextDecoder("utf-8").decode(new Uint8Array(e));
	}
}, uo = /* @__PURE__ */ JSON.parse("[4326,4269,4258,31467,31468,31469,2166,2167,2168,2036,2044,2045,2065,2081,2082,2083,2085,2086,2091,2092,2093,2096,2097,2098,2105,2106,2107,2108,2109,2110,2111,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2169,2170,2171,2172,2173,2174,2175,2176,2177,2178,2179,2180,2193,2199,2200,2206,2207,2208,2209,2210,2211,2212,2319,2320,2321,2322,2323,2324,2325,2326,2327,2328,2329,2330,2331,2332,2333,2334,2335,2336,2337,2338,2339,2340,2341,2342,2343,2344,2345,2346,2347,2348,2349,2350,2351,2352,2353,2354,2355,2356,2357,2358,2359,2360,2361,2362,2363,2364,2365,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2384,2385,2386,2387,2388,2389,2390,2391,2392,2393,2394,2395,2396,2397,2398,2399,2400,2401,2402,2403,2404,2405,2406,2407,2408,2409,2410,2411,2412,2413,2414,2415,2416,2417,2418,2419,2420,2421,2422,2423,2424,2425,2426,2427,2428,2429,2430,2431,2432,2433,2434,2435,2436,2437,2438,2439,2440,2441,2442,2443,2444,2445,2446,2447,2448,2449,2450,2451,2452,2453,2454,2455,2456,2457,2458,2459,2460,2461,2462,2463,2464,2465,2466,2467,2468,2469,2470,2471,2472,2473,2474,2475,2476,2477,2478,2479,2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,2490,2491,2492,2493,2494,2495,2496,2497,2498,2499,2500,2501,2502,2503,2504,2505,2506,2507,2508,2509,2510,2511,2512,2513,2514,2515,2516,2517,2518,2519,2520,2521,2522,2523,2524,2525,2526,2527,2528,2529,2530,2531,2532,2533,2534,2535,2536,2537,2538,2539,2540,2541,2542,2543,2544,2545,2546,2547,2548,2549,2551,2552,2553,2554,2555,2556,2557,2558,2559,2560,2561,2562,2563,2564,2565,2566,2567,2568,2569,2570,2571,2572,2573,2574,2575,2576,2577,2578,2579,2580,2581,2582,2583,2584,2585,2586,2587,2588,2589,2590,2591,2592,2593,2594,2595,2596,2597,2598,2599,2600,2601,2602,2603,2604,2605,2606,2607,2608,2609,2610,2611,2612,2613,2614,2615,2616,2617,2618,2619,2620,2621,2622,2623,2624,2625,2626,2627,2628,2629,2630,2631,2632,2633,2634,2635,2636,2637,2638,2639,2640,2641,2642,2643,2644,2645,2646,2647,2648,2649,2650,2651,2652,2653,2654,2655,2656,2657,2658,2659,2660,2661,2662,2663,2664,2665,2666,2667,2668,2669,2670,2671,2672,2673,2674,2675,2676,2677,2678,2679,2680,2681,2682,2683,2684,2685,2686,2687,2688,2689,2690,2691,2692,2693,2694,2695,2696,2697,2698,2699,2700,2701,2702,2703,2704,2705,2706,2707,2708,2709,2710,2711,2712,2713,2714,2715,2716,2717,2718,2719,2720,2721,2722,2723,2724,2725,2726,2727,2728,2729,2730,2731,2732,2733,2734,2735,2738,2739,2740,2741,2742,2743,2744,2745,2746,2747,2748,2749,2750,2751,2752,2753,2754,2755,2756,2757,2758,2935,2936,2937,2938,2939,2940,2941,2953,2963,3006,3007,3008,3009,3010,3011,3012,3013,3014,3015,3016,3017,3018,3019,3020,3021,3022,3023,3024,3025,3026,3027,3028,3029,3030,3034,3035,3038,3039,3040,3041,3042,3043,3044,3045,3046,3047,3048,3049,3050,3051,3058,3059,3068,3114,3115,3116,3117,3118,3120,3126,3127,3128,3129,3130,3131,3132,3133,3134,3135,3136,3137,3138,3139,3140,3146,3147,3150,3151,3152,3300,3301,3328,3329,3330,3331,3332,3333,3334,3335,3346,3350,3351,3352,3366,3386,3387,3388,3389,3390,3396,3397,3398,3399,3407,3414,3416,3764,3788,3789,3790,3791,3793,3795,3796,3819,3821,3823,3824,3833,3834,3835,3836,3837,3838,3839,3840,3841,3842,3843,3844,3845,3846,3847,3848,3849,3850,3851,3852,3854,3873,3874,3875,3876,3877,3878,3879,3880,3881,3882,3883,3884,3885,3888,3889,3906,3907,3908,3909,3910,3911,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016,4017,4018,4019,4020,4021,4022,4023,4024,4025,4026,4027,4028,4029,4030,4031,4032,4033,4034,4035,4036,4037,4038,4040,4041,4042,4043,4044,4045,4046,4047,4052,4053,4054,4055,4074,4075,4080,4081,4120,4121,4122,4123,4124,4125,4126,4127,4128,4129,4130,4131,4132,4133,4134,4135,4136,4137,4138,4139,4140,4141,4142,4143,4144,4145,4146,4147,4148,4149,4150,4151,4152,4153,4154,4155,4156,4157,4158,4159,4160,4161,4162,4163,4164,4165,4166,4167,4168,4169,4170,4171,4172,4173,4174,4175,4176,4178,4179,4180,4181,4182,4183,4184,4185,4188,4189,4190,4191,4192,4193,4194,4195,4196,4197,4198,4199,4200,4201,4202,4203,4204,4205,4206,4207,4208,4209,4210,4211,4212,4213,4214,4215,4216,4218,4219,4220,4221,4222,4223,4224,4225,4226,4227,4228,4229,4230,4231,4232,4233,4234,4235,4236,4237,4238,4239,4240,4241,4242,4243,4244,4245,4246,4247,4248,4249,4250,4251,4252,4253,4254,4255,4256,4257,4259,4260,4261,4262,4263,4264,4265,4266,4267,4268,4270,4271,4272,4273,4274,4275,4276,4277,4278,4279,4280,4281,4282,4283,4284,4285,4286,4287,4288,4289,4291,4292,4293,4294,4295,4296,4297,4298,4299,4300,4301,4302,4303,4304,4306,4307,4308,4309,4310,4311,4312,4313,4314,4315,4316,4317,4318,4319,4322,4324,4327,4329,4339,4341,4343,4345,4347,4349,4351,4353,4355,4357,4359,4361,4363,4365,4367,4369,4371,4373,4375,4377,4379,4381,4383,4386,4388,4417,4434,4463,4466,4469,4470,4472,4475,4480,4482,4483,4490,4491,4492,4493,4494,4495,4496,4497,4498,4499,4500,4501,4502,4503,4504,4505,4506,4507,4508,4509,4510,4511,4512,4513,4514,4515,4516,4517,4518,4519,4520,4521,4522,4523,4524,4525,4526,4527,4528,4529,4530,4531,4532,4533,4534,4535,4536,4537,4538,4539,4540,4541,4542,4543,4544,4545,4546,4547,4548,4549,4550,4551,4552,4553,4554,4555,4557,4558,4568,4569,4570,4571,4572,4573,4574,4575,4576,4577,4578,4579,4580,4581,4582,4583,4584,4585,4586,4587,4588,4589,4600,4601,4602,4603,4604,4605,4606,4607,4608,4609,4610,4611,4612,4613,4614,4615,4616,4617,4618,4619,4620,4621,4622,4623,4624,4625,4626,4627,4628,4629,4630,4631,4632,4633,4634,4635,4636,4637,4638,4639,4640,4641,4642,4643,4644,4645,4646,4652,4653,4654,4655,4656,4657,4658,4659,4660,4661,4662,4663,4664,4665,4666,4667,4668,4669,4670,4671,4672,4673,4674,4675,4676,4677,4678,4679,4680,4681,4682,4683,4684,4685,4686,4687,4688,4689,4690,4691,4692,4693,4694,4695,4696,4697,4698,4699,4700,4701,4702,4703,4704,4705,4706,4707,4708,4709,4710,4711,4712,4713,4714,4715,4716,4717,4718,4719,4720,4721,4722,4723,4724,4725,4726,4727,4728,4729,4730,4731,4732,4733,4734,4735,4736,4737,4738,4739,4740,4741,4742,4743,4744,4745,4746,4747,4748,4749,4750,4751,4752,4753,4754,4755,4756,4757,4758,4759,4760,4761,4762,4763,4764,4765,4766,4767,4768,4769,4770,4771,4772,4773,4774,4775,4776,4777,4778,4779,4780,4781,4782,4783,4784,4785,4786,4787,4788,4789,4790,4791,4792,4793,4794,4795,4796,4797,4798,4799,4800,4801,4802,4803,4804,4805,4806,4807,4808,4809,4810,4811,4812,4813,4814,4815,4816,4817,4818,4819,4820,4821,4822,4823,4824,4839,4855,4856,4857,4858,4859,4860,4861,4862,4863,4864,4865,4866,4867,4868,4869,4870,4871,4872,4873,4874,4875,4876,4877,4878,4879,4880,4883,4885,4887,4889,4891,4893,4895,4898,4900,4901,4902,4903,4904,4907,4909,4921,4923,4925,4927,4929,4931,4933,4935,4937,4939,4941,4943,4945,4947,4949,4951,4953,4955,4957,4959,4961,4963,4965,4967,4969,4971,4973,4975,4977,4979,4981,4983,4985,4987,4989,4991,4993,4995,4997,4999,5012,5013,5017,5048,5105,5106,5107,5108,5109,5110,5111,5112,5113,5114,5115,5116,5117,5118,5119,5120,5121,5122,5123,5124,5125,5126,5127,5128,5129,5130,5132,5167,5168,5169,5170,5171,5172,5173,5174,5175,5176,5177,5178,5179,5180,5181,5182,5183,5184,5185,5186,5187,5188,5224,5228,5229,5233,5245,5246,5251,5252,5253,5254,5255,5256,5257,5258,5259,5263,5264,5269,5270,5271,5272,5273,5274,5275,5801,5802,5803,5804,5808,5809,5810,5811,5812,5813,5814,5815,5816,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019,20020,20021,20022,20023,20024,20025,20026,20027,20028,20029,20030,20031,20032,20064,20065,20066,20067,20068,20069,20070,20071,20072,20073,20074,20075,20076,20077,20078,20079,20080,20081,20082,20083,20084,20085,20086,20087,20088,20089,20090,20091,20092,21413,21414,21415,21416,21417,21418,21419,21420,21421,21422,21423,21453,21454,21455,21456,21457,21458,21459,21460,21461,21462,21463,21473,21474,21475,21476,21477,21478,21479,21480,21481,21482,21483,21896,21897,21898,21899,22171,22172,22173,22174,22175,22176,22177,22181,22182,22183,22184,22185,22186,22187,22191,22192,22193,22194,22195,22196,22197,25884,27205,27206,27207,27208,27209,27210,27211,27212,27213,27214,27215,27216,27217,27218,27219,27220,27221,27222,27223,27224,27225,27226,27227,27228,27229,27230,27231,27232,27391,27392,27393,27394,27395,27396,27397,27398,27492,28402,28403,28404,28405,28406,28407,28408,28409,28410,28411,28412,28413,28414,28415,28416,28417,28418,28419,28420,28421,28422,28423,28424,28425,28426,28427,28428,28429,28430,28431,28432,28462,28463,28464,28465,28466,28467,28468,28469,28470,28471,28472,28473,28474,28475,28476,28477,28478,28479,28480,28481,28482,28483,28484,28485,28486,28487,28488,28489,28490,28491,28492,29701,29702,30161,30162,30163,30164,30165,30166,30167,30168,30169,30170,30171,30172,30173,30174,30175,30176,30177,30178,30179,30800,31251,31252,31253,31254,31255,31256,31257,31258,31259,31275,31276,31277,31278,31279,31281,31282,31283,31284,31285,31286,31287,31288,31289,31290,31466,31700]"), fo = class extends X {
	async loadWfsData(e, t = -1, n = 0, r = 1e3, i = {
		type: "FeatureCollection",
		features: []
	}, a = !1, o) {
		let s = {
			offset: n.toString(),
			limit: r.toString()
		};
		if (o?.aborted) throw new DOMException("WFS load cancelled", "AbortError");
		t === -1 && (s = { resulttype: "hits" });
		let c = new Pt(e).updateQuery(s), [l, u] = await Ze(Xe.get(c, { signal: o }));
		if (!u) return console.error(`WFS data failed to load for ${e}`, l), Promise.reject(l);
		let d = u.data;
		if (t === -1) {
			if (typeof d.numberMatched != "number") throw Error("WFS hits missing numberMatched");
			return t = u.data.numberMatched, this.loadWfsData(e, t, n, r, i, a, o);
		}
		if (i.features = i.features.concat(d.features), d.features.length < t - n) {
			let e = Math.min(r, t - n - d.features.length);
			return this.loadWfsData(c, t, d.features.length + n, e, i, a, o);
		} else return a && i.features.length > 0 && i.features[0].geometry.type === B.POINT && i.features.forEach((e) => {
			let t = e.geometry.coordinates;
			e.properties.rvInternalCoordX = t[0], e.properties.rvInternalCoordY = t[1];
		}), i;
	}
	reversedAxisWKIDs() {
		return uo;
	}
	async parseCapabilities(e) {
		let t = async () => {
			let t = e;
			if (e.indexOf("?") === -1) t += "?service=WMS&request=GetCapabilities";
			else {
				let n = new Pt(e.toUpperCase());
				"SERVICE" in n.queryMap || (t += "&service=WMS"), "REQUEST" in n.queryMap || (t += "&request=GetCapabilities");
			}
			return (await ee(t, { responseType: "xml" })).data;
		}, n = new Promise((e) => {
			t().then((t) => e(t)).catch(() => {
				console.error("Get capabilities failed; trying the second time;"), e(t());
			});
		}), r = (e) => {
			let t = e.Layer;
			return t ? (Array.isArray(t) || (t = [t]), t.map((e) => {
				let t = e.Name, n = e.Title, i = e.Style, a = [], o = {};
				return i && (Array.isArray(i) || (i = [i]), i.forEach((e) => {
					let t = e.Name;
					a.push(t), e.LegendURL && (o[t] = e.LegendURL.OnlineResource["@_xlink:href"].replaceAll("&amp;", "&"));
				})), {
					name: t?.toString() ?? null,
					title: n,
					queryable: e["@_queryable"] === "1",
					layers: r(e),
					allStyles: a,
					styleToURL: o,
					currentStyle: a[0]
				};
			})) : [];
		}, i = (e) => {
			let t = e.Format;
			return Array.isArray(t) || (t = [t]), t;
		}, { XMLParser: a } = await import("fast-xml-parser"), o = await n;
		if (!o) return [];
		let s = new XMLSerializer().serializeToString(o), c = new a({ ignoreAttributes: !1 }).parse(s);
		if ("ServiceExceptionReport" in c) return console.error(c.ServiceExceptionReport.ServiceException), [];
		let l = c.WMS_Capabilities.Capability;
		return {
			layers: r(l),
			queryTypes: i(l.Request.GetFeatureInfo)
		};
	}
}, po = class {
	static makeRawItem(e, t) {
		let n = Promise.resolve();
		return Ee({
			format: e,
			data: t,
			started: !0,
			loaded: !0,
			loading: n,
			load() {
				return n;
			}
		});
	}
	static makeOidItem(e, t) {
		let n = new Y();
		return Ee({
			format: dt.ESRI,
			data: void 0,
			started: !1,
			loaded: !1,
			loading: n.getPromise(),
			async load() {
				return this.started || (this.started = !0, this.data = (await t.getGraphic(e, { getAttribs: !0 })).attributes, this.loaded = !0, n.resolveMe()), n.getPromise();
			}
		});
	}
}, mo = class extends X {
	files;
	ogc;
	constructor(e) {
		super(e), this.files = new lo(e), this.ogc = new fo(e);
	}
	createLayer(e) {
		let t;
		switch (e.layerType) {
			case R.FEATURE:
				t = ko;
				break;
			case R.MAPIMAGE:
				t = Ao;
				break;
			case R.GRAPHIC:
				t = xo;
				break;
			case R.TILE:
				t = Lo;
				break;
			case R.WFS:
				t = Bo;
				break;
			case R.DATATABLE:
				t = Uo;
				break;
			case R.WMS:
				t = zo;
				break;
			case R.GEOJSON:
				t = Co;
				break;
			case R.GEOJSONZIPPED:
				t = Eo;
				break;
			case R.VECTORTILE:
				t = Ro;
				break;
			case R.FLATGEOBUFZIPPED:
				t = Oo;
				break;
			case R.CSV:
				t = To;
				break;
			case R.DATAJSON:
				t = Ho;
				break;
			case R.IMAGERY:
				t = Po;
				break;
			case R.IMAGERYTILE:
				t = Io;
				break;
			case R.SHAPEFILE:
				t = wo;
				break;
			case R.FLATGEOBUF:
				t = Do;
				break;
			case R.OSM:
				t = No;
				break;
			default: throw Error("Unsupported Layer Type " + e.layerType);
		}
		return new t(e, this.$iApi);
	}
	sublayerId(e, t) {
		return `${e}-${t}`;
	}
	getLayer(t) {
		return e(this.$vApp.$pinia).getLayerByAny(t);
	}
	getSublayer(t, n) {
		let r = e(this.$vApp.$pinia).getLayerById(t);
		if (r && r.supportsSublayers && n < r.sublayers.length) return r.sublayers[n];
	}
	async awaitLayer(e, t = !1) {
		let n = this.getLayer(e);
		if (!n) {
			let t = new Y(), r = 0, i = setInterval(() => {
				r += 300;
				let n = this.getLayer(e);
				if (n) clearInterval(i), t.resolveMe(n);
				else if (r > 8e3) {
					clearInterval(i);
					let n = setInterval(() => {
						let r = this.getLayer(e);
						r && (clearInterval(n), t.resolveMe(r));
					}, 1500);
				}
			}, 300);
			n = await t.getPromise();
		}
		return t && await n.viewPromise(), n;
	}
	async awaitSublayer(e, t) {
		return this.awaitLayer(this.sublayerId(e, t));
	}
	getLayerPosition(e) {
		let t = this.getLayer(e);
		if (t && t.mapLayer) {
			let e = t.isSublayer ? t.parentLayer.id : t.id, n = this.layerOrderIds().findIndex((t) => t === e);
			return n === -1 ? void 0 : n;
		} else return;
	}
	layerOrderIds() {
		return e(this.$vApp.$pinia).mapOrder.slice(0) || [];
	}
	allLayers() {
		return e(this.$vApp.$pinia).layers || [];
	}
	allActiveLayers() {
		return this.allLayers().filter((e) => e.layerState !== U.ERROR && e.initiationState === H.INITIATED);
	}
	allLayersOnMap(e = !0) {
		let t = this.allLayers().filter((e) => e.mapLayer && e.initiationState === H.INITIATED);
		if (e) {
			let e = this.layerOrderIds(), n = new Map(e.map((e, t) => [e, t]));
			t.sort((e, t) => n.get(e.id) - n.get(t.id));
		}
		return t;
	}
	allDataLayers() {
		return this.allLayers().filter((e) => !e.mapLayer && e.initiationState === H.INITIATED);
	}
	allErrorLayers() {
		return this.allLayers().filter((e) => e.layerState === U.ERROR);
	}
	allInitiatingLayers() {
		return this.allLayers().filter((e) => e.initiationState === H.INITIATING);
	}
	getLayerControls(e) {
		let t = this.getLayer(e);
		if (!t) return;
		let n = t.config.controls?.slice() ?? [
			G.BoundaryZoom,
			G.Datatable,
			G.Identify,
			G.Metadata,
			G.Opacity,
			G.Refresh,
			G.Reload,
			G.Remove,
			G.Settings,
			G.Symbology,
			G.Visibility
		], r = [];
		return t.supportsFeatures || r.push(G.Datatable), t.extent === void 0 && r.push(G.BoundaryZoom), (t.config?.metadata || (t.isSublayer ? t.parentLayer?.config?.metadata : {}) || {}).url || r.push(G.Metadata), !t.mapLayer && !t.config.controls?.includes(G.Settings) && r.push(G.Settings), r.forEach((e) => {
			let t = n?.indexOf(e) ?? -1;
			t !== -1 && n?.splice(t, 1);
		}), {
			controls: n,
			disabledControls: t.config.disabledControls ?? []
		};
	}
	async loadLayerMetadata(e) {
		if (!e.trim()) throw Error("url missing on layer server metadata request.");
		let [t, n] = await Ze(ee(e, { query: { f: "json" } }));
		if (!n) throw console.error(`Service metadata load error: ${e}`, t), Error(`Service metadata load error: ${e}`);
		if (!n.data) throw console.error(`Service metadata load error: ${e}`), Error(`Service metadata load error: ${e}`);
		let r = n.data, i = {
			geometryType: L.NONE,
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
			dataFormat: z.UNKNOWN,
			mapLayer: !0
		};
		if (i.name = r.name || "", i.currentVersion = r.currentVersion || -1, i.minScale = r.effectiveMinScale || r.minScale || 0, i.maxScale = r.effectiveMaxScale || r.maxScale || 0, i.extent = r.extent ? St.fromArcServer(r.extent, "layer_extent") : void 0, i.defaultVisibility = r.defaultVisibility ?? !0, i.canModifyLayer = r.canModifyLayer ?? !0, r.type === "Feature Layer" || r.type === "Table") {
			if (i.dataFormat = z.ESRI_FEATURE, i.displayField = r.displayField || "", Array.isArray(r.fields)) {
				let t = await Promise.all(r.fields.map((e) => (e.type === "esriFieldTypeGlobalID" && (e.type = "esriFieldTypeString"), K.FieldFromJson(e))));
				i.fields = t.map((e) => ({
					name: e.name,
					alias: e.alias,
					type: e.type,
					length: e.length
				})), t.every((e) => e.type === "oid" ? (i.objectIdField = e.name, !1) : !0) && (i.objectIdField = r.objectIdField || (console.error(`Encountered service with no OID defined: ${e}`), "")), r.type === "Feature Layer" ? (i.geometryType = this.$iApi.geo.geom.serverGeomTypeToRampGeomType(r.geometryType), r.drawingInfo?.renderer && (i.renderer = await K.RendererFromJson(r.drawingInfo.renderer)), r.sourceSpatialReference && (i.sourceSR = q.fromConfig(r.sourceSpatialReference))) : i.mapLayer = !1;
			}
		} else i.dataFormat = z.ESRI_RASTER;
		return i;
	}
	async loadFeatureCount(e, t = "") {
		if (!e) return console.error("A layer without a url attempted to run the server based feature count routine."), 0;
		let n = { query: {
			f: "json",
			where: t || "1=1",
			returnCountOnly: !0,
			returnGeometry: !1
		} }, [r, i] = await Ze(ee(`${e}/query`, n));
		return i ? i.data ? Number.isInteger(i.data.count) ? i.data.count : (console.error(`Funny result (${i.data.count}) during feature count: ${e}`), 0) : (console.error(`Unable to load feature count: ${e}`), 0) : (console.error(`Feature count request unsuccessful: ${e}`, r), 0);
	}
}, ho = class extends X {
	config = {};
	id;
	uid;
	name;
	layerState;
	initiationState;
	drawState;
	layerIdx;
	layerType;
	layerFormat;
	dataFormat;
	supportsIdentify;
	supportsFeatures;
	mapLayer;
	featureCount;
	fields;
	fieldList;
	nameField;
	get nameArcade() {
		return "";
	}
	async setNameArcade(e) {}
	get tooltipField() {
		return console.warn("tooltipField layer property is deprecated. Please adjust to use maptipField instead"), this.maptipField;
	}
	set tooltipField(e) {
		console.warn("tooltipField layer property is deprecated. Please adjust to use maptipField instead"), this.maptipField = e;
	}
	maptipField;
	get tooltipArcade() {
		return console.warn("tooltipArcade layer property is deprecated. Please adjust to use maptipArcade instead"), this.maptipArcade;
	}
	async setTooltipArcade(e) {
		return console.warn("setTooltipArcade layer method is deprecated. Please adjust to use setMaptipArcade instead"), this.setMaptipArcade(e);
	}
	get maptipArcade() {
		return "";
	}
	async setMaptipArcade(e) {}
	oidField;
	expectedTime;
	lastCancel;
	supportsSublayers;
	isSublayer;
	isRemoved;
	isFile;
	isCosmetic;
	isSystem;
	userAdded;
	identify;
	identifyMode;
	get hovertips() {
		return console.warn("hovertips layer property is deprecated. Please adjust to use maptips instead"), this.maptips;
	}
	set hovertips(e) {
		console.warn("hovertips layer property is deprecated. Please adjust to use maptips instead"), this.maptips = e;
	}
	maptips;
	geomType;
	legend;
	esriLayer;
	esriSubLayer;
	esriView;
	extent;
	sourceSR;
	canModifyLayer;
	canReload;
	url;
	_parentLayer;
	_sublayers;
	constructor(e, t) {
		super(t), this.config = e, this.id = "", this.uid = "", this.name = "error", this.layerState = U.NEW, this.drawState = ut.NOT_LOADED, this.initiationState = H.NEW, this.layerIdx = -1, this.layerFormat = lt.UNKNOWN, this.layerType = R.UNKNOWN, this.dataFormat = z.UNKNOWN, this.supportsIdentify = !1, this.identifyMode = V.NONE, this.supportsFeatures = !1, this.mapLayer = !0, this.featureCount = 0, this.fields = [], this.fieldList = "", this.nameField = "", this.maptipField = "", this.oidField = "", this.supportsSublayers = !1, this.isSublayer = !1, this.isRemoved = !1, this.isFile = !1, this.isCosmetic = !1, this.isSystem = !1, this.userAdded = !1, this.identify = !1, this.maptips = !1, this.geomType = L.UNKNOWN, this.legend = [], this._sublayers = [], this.expectedTime = {
			draw: 0,
			load: 0,
			fail: 0
		}, this.lastCancel = 0, this.canModifyLayer = !0, this.canReload = !0, this.url = "";
	}
	async initiate() {
		return Promise.resolve();
	}
	async terminate() {
		return Promise.resolve();
	}
	async reload() {
		return Promise.resolve();
	}
	cancelLoad() {}
	removeEsriLayer() {}
	loadPromise() {
		return Promise.resolve();
	}
	viewPromise() {
		return Promise.resolve();
	}
	get isLoaded() {
		return !1;
	}
	get layerExists() {
		return !1;
	}
	getFieldsToTrim() {
		return [];
	}
	getLayerTree() {
		return new kt(0, "Fake tree", "getLayerTree() was not implemented in layer");
	}
	getSR() {
		return q.latLongSR();
	}
	get visibility() {
		return !1;
	}
	set visibility(e) {}
	get opacity() {
		return 0;
	}
	set opacity(e) {}
	get scaleSet() {
		return new At();
	}
	set scaleSet(e) {}
	isOffscale(e = void 0) {
		return !1;
	}
	zoomToVisibleScale() {
		return Promise.resolve();
	}
	zoomToLayerBoundary() {
		return Promise.resolve();
	}
	get mouseTolerance() {
		return 0;
	}
	set mouseTolerance(e) {}
	get touchTolerance() {
		return 0;
	}
	set touchTolerance(e) {}
	get drawOrder() {
		return [];
	}
	canIdentify() {
		return !1;
	}
	nameValue(e) {
		return "";
	}
	tooltipValue(e) {
		return console.warn("tooltipValue layer method is deprecated. Please adjust to use maptipValue instead"), this.maptipValue(e);
	}
	maptipValue(e) {
		return "";
	}
	runIdentify(e) {
		return [];
	}
	getAttributes() {
		return Promise.resolve({
			features: [],
			oidIndex: {}
		});
	}
	abortAttributeLoad() {}
	clearFeatureCache() {}
	downloadedAttributes() {
		return 0;
	}
	attribLoadAborted() {
		return !1;
	}
	getTabularAttributes() {
		return Promise.resolve({
			columns: [],
			rows: [],
			fields: [],
			oidField: "error"
		});
	}
	getGraphic(e, t) {
		return Promise.resolve(new ft(new mt()));
	}
	getIcon(e) {
		return Promise.resolve("");
	}
	getSqlFilter(e) {
		return "";
	}
	setSqlFilter(e, t) {}
	applySqlFilter(e = []) {}
	getFilterOIDs(e = [], t = void 0) {
		return Promise.resolve(void 0);
	}
	getGraphicExtent(e) {
		return Promise.resolve(void 0);
	}
	getLocalGeometry(e) {
		return Promise.resolve(void 0);
	}
	zoomToFeature(e) {
		return Promise.resolve(!1);
	}
	get parentLayer() {
		if (this.isSublayer) return this._parentLayer;
		throw Error("Attempted to get parent layer of a non-sublayer object");
	}
	set parentLayer(e) {
		if (!this.isSublayer && e) throw Error("Attempted to set parent layer for a non-sublayer object");
		this._parentLayer = e;
	}
	get sublayers() {
		return this._sublayers;
	}
	onLoad() {}
	onError(e = !0) {}
	updateLayerState(e, t = !1) {}
	updateDrawState(e) {}
	updateInitiationState(e) {}
	uidToIdx(e) {
		if (e === this.uid) return -1;
		{
			let t = this._sublayers.findIndex((t) => t?.uid === e);
			if (t === -1) throw Error(`Attempt to access non-existing unique id [layerid ${this.id}, uid ${e}]`);
			return t;
		}
	}
	getSublayer(e) {
		if (!this.supportsSublayers) {
			console.warn(`Attempted to call getSublayer on a layer (layer id: ${this.id}) that does not support FCs`);
			return;
		}
		let t;
		if (t = typeof e == "string" ? this.uidToIdx(e) : e, this._sublayers[t] === void 0) throw Error(`Attempt to access non-existing layer index [layerid ${this.id}, lookup value ${e}]`);
		return this._sublayers[t];
	}
	controlAvailable(e) {
		let t = this.$iApi.geo.layer.getLayerControls(this.id);
		return this.$iApi.geo.shared.controlAvailable(e, t);
	}
}, go = /* @__PURE__ */ function(e) {
	return e.DRAW = "draw", e.LOAD = "load", e;
}(go || {}), _o = class extends ho {
	timers;
	origRampConfig;
	loadDefProm;
	loadPromDone;
	layerTree;
	nameArcadeFormula;
	nameArcadeExecutor;
	maptipArcadeFormula;
	maptipArcadeExecutor;
	constructor(e, t) {
		super(e, t), this.name = e.name || "", this.geomType = L.NONE, this.dataFormat = z.UNKNOWN, this.layerType = R.UNKNOWN, this.layerFormat = lt.UNKNOWN;
		let n = t.geo.map.layerDefaultTimes;
		this.expectedTime.draw = e.expectedDrawTime ?? n.draw, this.expectedTime.load = e.expectedLoadTime ?? n.load, this.expectedTime.fail = e.maxLoadTime || n.fail, this.lastCancel = 0, this.timers = {
			draw: void 0,
			load: void 0
		}, this.origRampConfig = e, this.id = e.id || "", this.uid = this.$iApi.geo.shared.generateUUID(), this.isCosmetic = !1, this.isSystem = e.system || !1, this.isRemoved = !1, this.isSublayer = !1, this.supportsIdentify = !1, this.mapLayer = !0, this.identifyMode = V.NONE, this.supportsFeatures = !1, this.maptips = !1, this.supportsSublayers = !1, this.isFile = !1, this.layerState = U.NEW, this.initiationState = H.NEW, this.drawState = ut.NOT_LOADED, this.loadDefProm = new Y(), this.url = this.origRampConfig.url, this.canReload = !!(this.url || this.origRampConfig.caching), this.loadPromDone = !1, this.nameArcadeFormula = "", this.maptipArcadeFormula = "", this.layerTree = new kt(0, this.uid, this.name, !0);
	}
	updateInitiationState(e) {
		this.initiationState = e, this.$iApi.event.emit(Z.LAYER_INITIATIONSTATECHANGE, {
			state: e,
			layer: this
		});
	}
	updateLayerState(e, t = !1) {
		this.layerState = e, this.$iApi.event.emit(Z.LAYER_LAYERSTATECHANGE, {
			state: e,
			layer: this,
			userCancel: t
		});
	}
	updateDrawState(e) {
		this.drawState = e, e === ut.REFRESH ? this.startTimer(go.DRAW) : e === ut.UP_TO_DATE && this.stopTimer(go.DRAW), this.$iApi.event.emit(Z.LAYER_DRAWSTATECHANGE, {
			state: e,
			layer: this
		});
	}
	async initiate() {
		this.updateInitiationState(H.INITIATING), this.startTimer(go.LOAD);
		let e = (e) => {
			this.layerState !== U.ERROR && (console.error(e), this.onError());
		}, t = Date.now(), n = setTimeout(() => {
			t > this.lastCancel && (this.lastCancel = Date.now(), e("Layer timed out during initialize. Id: " + this.id));
		}, this.expectedTime.fail), [r] = await Ze(this.onInitiate());
		clearTimeout(n), t > this.lastCancel && (this.drawState !== ut.UP_TO_DATE && this.startTimer(go.DRAW), r ? e(`Init error on layer id: ${this.id} . ${r.message}`) : this.updateInitiationState(H.INITIATED));
	}
	async onInitiate() {
		if (this.isSublayer) return console.warn("Attempted to initiate a sublayer as a CommonLayer"), Promise.resolve();
		this.initiationState === H.INITIATED && console.error(`Encountered layer initialize while already initiated, layer id ${this.id}`);
	}
	async terminate() {
		this.updateInitiationState(H.TERMINATING), await Promise.all(this.sublayers.map((e) => e.terminate())), this.loadDefProm = new Y(), this.loadPromDone = !1, this.updateLayerState(U.NEW), this.updateDrawState(ut.NOT_LOADED), this.updateInitiationState(H.TERMINATED);
	}
	onLoad() {
		let e = Date.now(), t = !1, n = setTimeout(() => {
			t = !0, this.onError();
		}, this.expectedTime.fail);
		try {
			let r = this.onLoadActions();
			Promise.all(r).then(() => {
				clearTimeout(n), t ? this.visibility = !1 : (this.stopTimer(go.LOAD), e > this.lastCancel && (this.loadPromDone && (this.loadDefProm = new Y()), this.loadDefProm.resolveMe(), this.loadPromDone = !0, this.sublayers.forEach((e) => e.onLoad()), this.updateLayerState(U.LOADED)));
			}).catch(() => {
				clearTimeout(n), this.onError();
			});
		} catch (e) {
			console.error("Encountered error on layer load: ", e), clearTimeout(n), this.onError();
		}
	}
	onError(e = !0) {
		this.layerState !== U.ERROR && (this.initiationState === H.INITIATING && this.updateInitiationState(H.NEW), this.loadPromDone && (this.loadDefProm = new Y()), this.loadDefProm.rejectMe(), this.loadPromDone = !0, this.sublayers.forEach((t) => t.onError(e)), e && this.$iApi.notify.show(vn.ERROR, this.$iApi.$i18n.t("layer.error", { id: this.id })), this.stopTimer(go.DRAW), this.stopTimer(go.LOAD), this.updateLayerState(U.ERROR, !e));
	}
	onLoadActions() {
		return [];
	}
	cancelLoad() {
		this.isLoaded || this.initiationState === H.NEW || this.initiationState === H.TERMINATING || this.initiationState === H.TERMINATED || (this.lastCancel = Date.now(), this.esriLayer && this.esriLayer.loadStatus === "loading" && this.esriLayer.cancelLoad(), this.removeEsriLayer(), this.onError(!1));
	}
	loadPromise() {
		return this.loadDefProm.getPromise();
	}
	get isLoaded() {
		return this.layerState === U.LOADED;
	}
	canIdentify() {
		return this.supportsIdentify && this.isLoaded && this.visibility && this.identify && !this.scaleSet.isOffScale(this.$iApi.geo.map.getScale()).offScale;
	}
	getLayerTree() {
		return this.layerTree;
	}
	stubError() {
		throw Error(`Attempted to use a method not valid for ${this.layerType}`);
	}
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
	getGraphic(e, t) {
		return this.stubError(), Promise.resolve(new ft(new mt()));
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
	getGraphicExtent(e) {
		return this.stubError(), Promise.resolve(void 0);
	}
	applySqlFilter(e = []) {
		this.stubError();
	}
	setCustomParameter(e, t, n = !0) {
		this.stubError();
	}
	startTimer(e) {
		this.stopTimer(e), this.expectedTime[e] > 0 && (this.timers[e] = window.setTimeout(() => this.$iApi.notify.show(vn.WARNING, this.$iApi.$i18n.t(`layer.long${e}`, { id: this.name || this.id })), this.expectedTime[e]));
	}
	stopTimer(e) {
		this.timers[e] && (clearTimeout(this.timers[e]), this.timers[e] = void 0);
	}
	async arcadeGenerator(e) {
		let t = { variables: [{
			name: "$attr",
			type: "dictionary",
			properties: this.fields.map((e) => {
				let t = this.$iApi.geo.attributes.fieldTypeToArcade(e.type);
				if (t) return {
					name: e.name,
					type: t
				};
				console.error(`Encountered field type with no arcade support: ${e.type} [${e.name}]`);
			}).filter((e) => !!e)
		}] };
		return K.ArcadeExecutor(e, t);
	}
	get nameArcade() {
		return this.nameArcadeFormula;
	}
	async setNameArcade(e) {
		this.supportsFeatures ? e.trim() === "" ? (this.nameArcadeFormula = "", this.nameArcadeExecutor = void 0) : (this.nameArcadeFormula = e, this.nameArcadeExecutor = await this.arcadeGenerator(e)) : console.error("Attempted to set a name arcade function on a layer that doesn't support it.");
	}
	async nameInitializer(e, t = "") {
		if (this.supportsFeatures) {
			let n = (e?.nameArcade || "").trim();
			n && await this.setNameArcade(n), this.nameField = (e?.nameField || "").trim() || t || this.oidField;
		} else console.error("Attempted to init a name field on an unsupported layer.");
	}
	nameValue(e) {
		if (e) if (this.nameArcade) {
			let t = { $attr: e };
			return this.nameArcadeExecutor?.execute(t) ?? "Arcade Error";
		} else return this.nameField ? e[this.nameField] ?? "Name Field Error" : "";
		else return "";
	}
	get maptipArcade() {
		return this.maptipArcadeFormula;
	}
	async setMaptipArcade(e) {
		this.supportsFeatures ? e.trim() === "" ? (this.maptipArcadeFormula = "", this.maptipArcadeExecutor = void 0) : (this.maptipArcadeFormula = e, this.maptipArcadeExecutor = await this.arcadeGenerator(e)) : console.error("Attempted to set a maptip arcade function on a layer that doesn't support it.");
	}
	async tooltipInitializer(e) {
		return console.warn("tooltipInitializer layer method is deprecated. Please adjust to use maptipInitializer instead"), this.maptipInitializer(e);
	}
	async maptipInitializer(e) {
		if (this.supportsFeatures) {
			e.tooltipField && console.warn("tooltipField layer configuration property is deprecated. Please adjust to use maptipField instead"), e.tooltipArcade && console.warn("tooltipArcade layer configuration property is deprecated. Please adjust to use maptipArcade instead");
			let t = (e?.maptipArcade || e?.tooltipArcade || "").trim();
			t && await this.setMaptipArcade(t), this.maptipField = (e?.maptipField || e?.tooltipField || "").trim();
		} else console.error("Attempted to init a maptip field on an unsupported layer.");
	}
	maptipValue(e) {
		if (e) if (this.maptipArcade) {
			let t = { $attr: e };
			return this.maptipArcadeExecutor?.execute(t) ?? "Arcade Error";
		} else return this.maptipField ? e[this.maptipField] ?? this.nameValue(e) : this.nameValue(e);
		else return "";
	}
}, vo = class extends _o {
	_serverVisibility;
	_scaleSet;
	_mouseTolerance;
	_touchTolerance;
	_drawOrder;
	_lastFilterUpdate = "";
	viewDefProm;
	esriWatches;
	constructor(e, t) {
		super(e, t), this._scaleSet = new At(), this._mouseTolerance = e.mouseTolerance == null ? 5 : e.mouseTolerance, this._touchTolerance = e.touchTolerance == null ? 15 : e.touchTolerance, this._drawOrder = [], this._serverVisibility = void 0, this.isCosmetic = e.cosmetic || !1, this.extent = e.extent ? St.fromConfig(`${this.id}_extent`, e.extent) : void 0, this.viewDefProm = new Y(), this.esriWatches = [];
	}
	noLayerErr() {
		console.error("Attempted to manipulate the layer but no layer found. Likely .initiate() was not finished or failed. Layer id " + this.id), console.trace();
	}
	notLoadedErr() {
		console.error("Attempted to manipulate the layer before it was loaded. Layer id " + this.id), console.trace();
	}
	async onInitiate() {
		if (await super.onInitiate(), !this.esriLayer) {
			this.noLayerErr();
			return;
		}
		this.esriWatches.push(s(() => this.esriLayer.visible, (e) => {
			this.$iApi.event.emit(Z.LAYER_VISIBILITYCHANGE, {
				visibility: e,
				layer: this
			});
		})), this.esriWatches.push(s(() => this.esriLayer.opacity, (e) => {
			this.$iApi.event.emit(Z.LAYER_OPACITYCHANGE, {
				opacity: e,
				layer: this
			});
		})), this.esriWatches.push(s(() => this.esriLayer.loadStatus, (e) => {
			let t = {
				"not-loaded": U.LOADING,
				loading: U.LOADING,
				loaded: U.LOADED,
				failed: U.ERROR
			};
			e === "loaded" ? this.onLoad() : e === "failed" ? this.onError() : this.updateLayerState(t[e]);
		})), this.esriLayer.on("layerview-create", (e) => {
			this.esriView = E(e.layerView), this.esriWatches.push(s(() => e.layerView.updating, (e) => {
				this.updateDrawState(e ? ut.REFRESH : ut.UP_TO_DATE);
			})), this.viewDefProm.resolveMe();
		}), this.sublayers.forEach((e) => e.initiate());
	}
	async terminate() {
		this.esriWatches.forEach((e) => e.remove()), this.esriWatches = [], this.esriLayer = void 0, await super.terminate(), this.viewDefProm = new Y();
	}
	async reload() {
		if (!this.$iApi.geo.map.esriMap) {
			console.error("Attempted layer reload when no map exists");
			return;
		}
		this.removeEsriLayer();
		let e = Date.now();
		if (this.$iApi.event.emit(Z.LAYER_RELOAD_START, this), this.sublayers.forEach((e) => this.$iApi.event.emit(Z.LAYER_RELOAD_START, e)), await this.terminate(), await this.initiate(), !(this.lastCancel > e)) {
			if (!this.esriLayer) {
				console.error("ESRI layer failed to re-create during reload.");
				return;
			}
			this.$iApi.geo.map.insertToEsriMap(this), this.$iApi.event.emit(Z.LAYER_RELOAD_END, this), this.sublayers.forEach((e) => this.$iApi.event.emit(Z.LAYER_RELOAD_END, e));
		}
	}
	makeEsriLayerConfig(e) {
		return {
			id: e.id,
			url: e.url,
			opacity: e?.state?.opacity ?? 1,
			visible: e?.state?.visibility ?? !0
		};
	}
	removeEsriLayer() {
		this.esriLayer && this.$iApi.geo.map.esriMap && this.$iApi.geo.map.esriMap.layers.findIndex((e) => e.id === this.id) > -1 && this.$iApi.geo.map.esriMap.layers.remove(this.esriLayer);
	}
	onLoadActions() {
		let e = super.onLoadActions();
		this.name ||= this.esriLayer?.title || this.id, this.isCosmetic || (this.identify = this.config.state?.identify ?? this.supportsIdentify);
		let t = this.$iApi.geo.proj.checkProj(this.getSR()).then((e) => e ? Promise.resolve() : Promise.reject());
		return e.push(t), e;
	}
	viewPromise() {
		return this.viewDefProm.getPromise();
	}
	mapCheck() {
		return this.$iApi.geo.map.created ? !0 : (console.error("Attempting to use map-dependent logic before the layer has been added to the map"), console.trace(), !1);
	}
	get scaleSet() {
		return this._scaleSet;
	}
	set scaleSet(e) {
		this._scaleSet = e;
	}
	isOffscale(e = void 0) {
		let t;
		if (e === void 0) if (this.mapCheck()) t = this.$iApi.geo.map.getScale();
		else return !1;
		else t = e;
		return this.scaleSet.isOffScale(t).offScale;
	}
	zoomToVisibleScale() {
		return this.mapCheck() ? this.$iApi.geo.map.zoomToVisibleScale(this.scaleSet) : Promise.resolve();
	}
	zoomToLayerBoundary() {
		if (!this.extent) return console.error(`Attempted to zoom to boundary of a layer with no extent (Layer Id: ${this.id})`), Promise.resolve();
		if (this.mapCheck()) {
			if (this.extent.xmin === this.extent.xmax && this.extent.ymin === this.extent.ymax) {
				let e = new J("point", [this.extent.xmin, this.extent.ymin], this.extent.sr);
				return this.$iApi.geo.map.zoomMapTo(e);
			}
			return this.$iApi.geo.map.zoomMapTo(this.extent);
		} else return Promise.resolve();
	}
	get mouseTolerance() {
		return this._mouseTolerance;
	}
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
	get touchTolerance() {
		return this._touchTolerance;
	}
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
	get layerExists() {
		return this.initiationState === H.INITIATED && !!this.esriLayer;
	}
	get drawOrder() {
		return this._drawOrder;
	}
	get visibility() {
		return this.layerExists ? this.esriLayer.visible : !1;
	}
	set visibility(e) {
		this.layerExists ? this.esriLayer.visible = e : this.noLayerErr();
	}
	checkVisibility() {
		this.supportsSublayers && this.layerExists && (this.visibility = this.sublayers.some((e) => e.visibility));
	}
	get opacity() {
		return this.layerExists ? this.esriLayer.opacity : 0;
	}
	set opacity(e) {
		this.layerExists ? this.esriLayer.opacity = e : this.noLayerErr();
	}
	getSR() {
		return this.esriLayer ? q.fromESRI(this.esriLayer.spatialReference) : (this.noLayerErr(), q.latLongSR());
	}
}, yo = class extends vo {
	attribs;
	renderer;
	serviceUrl;
	canModifyLayer;
	filter;
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !0, this.geomType = L.UNKNOWN, this.serviceUrl = "", this.fieldList = "", this.canModifyLayer = !0, this.filter = new jt(e.permanentFilteredQuery || "", e.initialFilteredQuery || ""), e.state?.hovertips !== void 0 && console.warn("hovertips layer configuration property is deprecated. Please adjust to use maptips instead"), this.maptips = e.state?.maptips ?? e.state?.hovertips ?? !0, this.attribs = new Ko();
	}
	makeEsriLayerConfig(e) {
		return super.makeEsriLayerConfig(e);
	}
	async loadLayerMetadata(e = {}) {
		if (!this.serviceUrl) return;
		let t = Date.now(), n = await this.$iApi.geo.layer.loadLayerMetadata(this.serviceUrl);
		if (!(t < this.lastCancel)) if (this.geomType = n.geometryType, this.attribs.quickCache = new Qo(this.geomType), this.scaleSet.minScale = n.minScale, this.scaleSet.maxScale = n.maxScale, this.dataFormat = n.dataFormat, this.extent = this.extent ?? n.extent, this._serverVisibility = n.defaultVisibility, this.origRampConfig.name || (this.name = n.name ?? this.id), this.dataFormat === z.ESRI_FEATURE) {
			this.supportsFeatures = !0, this.canModifyLayer = this.layerType === R.SUBLAYER ? n.canModifyLayer : !0, this.fields = n.fields, this.nameField = n.displayField, this.oidField = n.objectIdField, this.sourceSR = n.sourceSR, this.drawOrder.forEach((e) => {
				e.field && this.fields.findIndex((t) => t.name === e.field) === -1 && console.error(`Draw order for layer ${this.id} references invalid field ${e.field}`);
			});
			let t = e && e.customRenderer && e.customRenderer.type ? e.customRenderer : n.renderer;
			this.renderer = this.$iApi.geo.symbology.makeRenderer(t, this.fields), this.legend = this.$iApi.geo.symbology.rendererToLegend(this.renderer);
			let r = {
				supportsLimit: (n.currentVersion || 1) >= 10.1,
				serviceUrl: this.serviceUrl,
				oidField: this.oidField,
				batchSize: -1,
				attribs: "*",
				permanentFilter: this.getSqlFilter(W.PERMANENT)
			};
			this.attribs.attLoader = new Yo(this.$iApi, r);
		} else this.supportsFeatures = !1, this.supportsIdentify = !1;
	}
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
	getTabularAttributes() {
		return this.$iApi.geo.attributes.generateTabularAttributes(this, this.attribs);
	}
	async getGraphic(e, t) {
		let n = {}, r = new mt(), i = this.$iApi.geo.map, a = !1, o = !1, s = 0;
		if (t.getAttribs || t.getStyle) {
			let t = this.attribs.quickCache.getAttribs(e);
			if (t) n = t;
			else if (this.attribs.attLoader.isLoaded() || this.isFile) {
				let t = await this.attribs.attLoader.getAttribs();
				n = t.features[t.oidIndex[e]];
			} else a = !0;
		}
		if (t.getGeom) {
			s = i.getScale();
			let n = this.attribs.quickCache.getGeom(e, s);
			if (n) r = n;
			else if (this.layerType === R.FEATURE && !(this.attribs.quickCache.isPoint && t.forZoom)) {
				let t = await this.getLocalGeometry(e);
				t ? (this.attribs.quickCache.isPoint || this.attribs.quickCache.setGeom(e, t, s), r = t) : o = !0;
			} else o = !0;
		}
		if (a || o) {
			let t = {
				oid: e,
				serviceUrl: this.serviceUrl,
				includeGeometry: o,
				attribs: this.fieldList,
				fieldsToTrim: this.getFieldsToTrim()
			};
			o && (t.mapSR = i.getSR().wkid?.toString(), this.attribs.quickCache.isPoint || (t.maxOffset = i.esriView?.resolution));
			let c = await this.$iApi.geo.attributes.loadSingleFeature(t);
			o && (this.attribs.quickCache.setGeom(e, c.geometry, s), r = c.geometry), (a || this.attribs.quickCache.getAttribs(e) === void 0) && (this.attribs.quickCache.setAttribs(e, c.attributes), a && (n = c.attributes));
		}
		let c = new ft(r, "", t.getAttribs ? n : void 0);
		if (t.getStyle) {
			let e = je(this.renderer.getGraphicSymbol(n));
			c.style = this.$iApi.geo.geom.styleEsriToRamp(e);
		}
		return c;
	}
	async zoomToFeature(e) {
		let t = await this.getGraphic(e, {
			getGeom: !0,
			forZoom: !0
		});
		return t.geometry.invalid() ? !1 : (await this.$iApi.geo.map.zoomMapTo(t.geometry), !0);
	}
	async getIcon(e) {
		if (!this.renderer) throw Error("getIcon called before renderer is defined");
		let t = await this.getGraphic(e, { getAttribs: !0 });
		return this.$iApi.geo.symbology.getGraphicIcon(t.attributes || {}, this.renderer);
	}
	setSqlFilter(e, t) {
		if (t !== this.filter.getSql(e)) if (this.filter.setSql(e, t), this.$iApi.event.emit(Z.FILTER_CHANGE, {
			uid: this.uid,
			filterKey: e
		}), this.layerFormat === lt.MAPIMAGE) this.applySqlFilter();
		else {
			let n = `${this.uid}-${e}-${t}`;
			this._lastFilterUpdate = n, setTimeout(() => {
				this._lastFilterUpdate === n && this.applySqlFilter();
			}, 80);
		}
	}
	applySqlFilter(e = []) {
		throw Error(`attempted to apply sql filter ${e} to a layer not equipped for it. likely a new subclass of AttribLayer did not override applySqlFilter`);
	}
	getSqlFilter(e) {
		return this.filter.getSql(e);
	}
	getCombinedSqlFilter(e) {
		return this.filter.getCombinedSql(e);
	}
	async getFilterOIDs(e = [], t = void 0) {
		let n = this.filter.getCombinedSql(e), r = !!t;
		if (!(n || r)) return;
		t && this.filter.setExtent(t);
		let i = this.filter.sqlActiveFilters(e), a = this.filter.getCache(i, r);
		if (!a) {
			let e = {
				filterGeometry: t,
				filterSql: n,
				includeGeometry: !1,
				sourceSR: this.sourceSR
			};
			a = this.queryOIDs(e), this.filter.setCache(a, i, r);
		}
		return a;
	}
	queryOIDs(e) {
		this.isFile && (console.error("a file layer called a server based query function"), console.trace());
		let t = {
			url: this.serviceUrl,
			...e
		};
		return this.$iApi.geo.query.arcGisServerQueryIds(t);
	}
	async queryFeaturesDiscrete(e) {
		let t = await this.queryOIDs(e), n = {
			getGeom: !!e.includeGeometry,
			getAttribs: !0
		};
		return t.map((e) => ({
			oid: e,
			graphic: this.getGraphic(e, n)
		}));
	}
	async queryFeatures(e) {
		let t = await this.queryFeaturesDiscrete(e);
		return Promise.all(t.map((e) => e.graphic));
	}
	configDrawOrder(e, t) {
		Array.isArray(e.drawOrder) && e.drawOrder.length > 0 && (t.orderBy = e.drawOrder.map((e) => {
			let t = e.ascending ?? !0 ? "ascending" : "descending";
			return e.field ? {
				field: e.field,
				order: t
			} : {
				valueExpression: e.arcade,
				order: t
			};
		}), this._drawOrder = e.drawOrder.slice());
	}
}, bo = class extends vo {
	constructor(e, t) {
		super(e, t), this.dataFormat = z.ESRI_FEATURE, this.layerFormat = lt.GRAPHIC, this.maptips = !1;
	}
	_graphics = [];
	makeEsriLayerConfig(e) {
		return super.makeEsriLayerConfig(e);
	}
	getGraphicCount() {
		return this._graphics.length;
	}
	getLocalGraphic(e) {
		return this._graphics.find((t) => t.id === e);
	}
	getEsriGraphic(e) {
		return this.esriLayer?.graphics.find((t) => t.id === e);
	}
	get graphics() {
		return this._graphics.slice();
	}
	async addGraphic(e) {
		if (!this.layerExists) {
			this.noLayerErr();
			return;
		}
		let t;
		t = e instanceof Array ? e : [e];
		let n = t.filter((e) => this._graphics.findIndex((t) => t.id === e.id) === -1 ? (this._graphics.push(e), !0) : (console.error(`Attempting to add graphic with id '${e.id}' that has already been added.`), !1)), r = this.$iApi.geo.map.getSR(), i = n.map((e) => this.$iApi.geo.proj.projectGeometry(r, e.geometry)), a = await Promise.all(i), o = n.map((e, t) => {
			let n = new ft(a[t], e.id, e.attributes);
			return n.style = e.style, this.$iApi.geo.geom.graphicRampToEsri(n);
		});
		this.esriLayer.addMany(o);
	}
	removeGraphic(e) {
		if (!this.layerExists) {
			this.noLayerErr();
			return;
		}
		if (e === void 0) {
			this.esriLayer.removeAll(), this._graphics = [];
			return;
		}
		let t;
		t = Array.isArray(e) ? e : [e], t.map((e) => typeof e == "string" ? e : e.id).forEach((e) => {
			let t = this.esriLayer.graphics.findIndex((t) => t.id === e);
			t > -1 && this.esriLayer.graphics.removeAt(t);
			let n = this._graphics.findIndex((t) => t.id === e);
			n > -1 && this._graphics.splice(n, 1);
		});
	}
}, xo = class extends bo {
	constructor(e, t) {
		super(e, t), this.layerType = R.GRAPHIC;
	}
	async onInitiate() {
		this.esriLayer = E(await K.GraphicsLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		return super.makeEsriLayerConfig(e);
	}
	onLoadActions() {
		let e = super.onLoadActions();
		return this.layerTree.name = this.name, this.updateDrawState(ut.UP_TO_DATE), e;
	}
}, So = class extends yo {
	esriJson;
	sourceGeoJson;
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !0, this.isFile = !0, this.dataFormat = z.ESRI_FEATURE, this.layerFormat = lt.FEATURE, this.layerIdx = 0, e.identifyMode && e.identifyMode !== V.NONE ? this.identifyMode = e.identifyMode : this.identifyMode = V.HYBRID;
	}
	async reload() {
		if (this.origRampConfig.caching !== !0 && !this.origRampConfig.url) {
			console.error("Attempted to reload file layer from non server source without caching enabled.");
			return;
		}
		await super.reload();
	}
	async onInitiate() {
		if (!this.sourceGeoJson) throw Error("File Layer is missing source data.");
		let e = {
			layerId: this.origRampConfig.id || "",
			targetSR: this.$iApi.geo.map.getSR(),
			colour: this.origRampConfig.colour,
			fieldMetadata: this.origRampConfig.fieldMetadata,
			latField: this.origRampConfig.latField || "",
			lonField: this.origRampConfig.longField || ""
		};
		this.esriJson = await this.$iApi.geo.layer.files.geoJsonToEsriJson(this.sourceGeoJson, e), this.esriLayer = E(await K.FeatureLayer(this.makeEsriLayerConfig(this.origRampConfig))), this.esriJson = void 0, this.origRampConfig.caching || delete this.origRampConfig.rawData, delete this.sourceGeoJson, await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		let t = super.makeEsriLayerConfig(e), n = "OBJECTID";
		return [
			"source",
			"objectIdField",
			"id",
			"fields",
			"renderer",
			"spatialReference",
			"geometryType"
		].forEach((e) => {
			t[e] = this.esriJson[e];
		}), this.origRampConfig.nameField ? t.displayField = this.$iApi.geo.attributes.fieldValidator(t.fields, this.origRampConfig.nameField) || n : t.displayField = n, t.outFields = ["*"], delete t.url, this.configDrawOrder(e, t), e.geomClustering && (t.featureReduction = e.geomClustering), t;
	}
	onLoadActions() {
		let e = super.onLoadActions();
		return e.push((async () => {
			this.esriLayer && this.origRampConfig.customRenderer?.type && (this.esriLayer.renderer = await K.RendererFromJson(this.config.customRenderer)), this.layerTree.name = this.name, this.extractLayerMetadata(), this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.attribs.attLoader.updateFieldList(this.fieldList), await this.nameInitializer({ nameArcade: this.origRampConfig.nameArcade }, this.nameField), this.origRampConfig.tooltipField && console.warn("tooltipField layer configuration property is deprecated. Please adjust to use maptipField instead"), this.origRampConfig.tooltipArcade && console.warn("tooltipArcade layer configuration property is deprecated. Please adjust to use maptipArcade instead");
			let e = this.origRampConfig.maptipField || this.origRampConfig.tooltipField || "", t = e ? this.$iApi.geo.attributes.fieldValidator(this.fields, e) : "";
			await this.maptipInitializer({
				maptipArcade: this.origRampConfig.maptipArcade || this.origRampConfig.tooltipArcade,
				maptipField: t
			}), this.featureCount = this.esriLayer?.source.length || 0;
		})()), e.push(this.viewDefProm.getPromise()), this.filter.getCombinedSql() && Promise.all(e).then(() => {
			this.applySqlFilter();
		}), e;
	}
	runIdentify(e) {
		if (!this.canIdentify()) return [];
		let t = new Y(), n = Ee({
			items: [],
			loading: t.getPromise(),
			loaded: !1,
			errored: !1,
			uid: this.uid,
			layerId: this.id,
			requestTime: Date.now()
		}), r = Promise.resolve(), i = Promise.resolve(), a = [], o = [];
		if (this.identifyMode === V.HYBRID || this.identifyMode === V.GEOMETRIC) {
			let t = { includeGeometry: !1 };
			this.geomType !== L.POLYGON && e.geometry.type === L.POINT ? t.filterGeometry = this.$iApi.geo.query.makeClickBuffer(e.geometry, e.tolerance) : t.filterGeometry = e.geometry, t.filterSql = this.getCombinedSqlFilter(), i = this.queryFeatures(t).then((e) => {
				a = e;
			});
		}
		return e.hitTest && (this.identifyMode === V.HYBRID || this.identifyMode === V.SYMBOLIC) && (r = i.then(async () => {
			let t = await e.hitTest;
			o = await Promise.all(t.filter((e) => e.layerId === this.id && a.findIndex((t) => e.oid === t.attributes[this.oidField]) === -1).map((e) => e.oid));
		})), Promise.all([r, i]).then(() => {
			a.forEach((e) => {
				n.items.push(po.makeRawItem(dt.ESRI, e.attributes));
			}), o.forEach((e) => {
				n.items.push(po.makeOidItem(e, this));
			}), n.loaded = !0, t.resolveMe();
		}).catch(() => {
			n.errored = !0, t.resolveMe();
		}), [n];
	}
	extractLayerMetadata() {
		let e = this.esriLayer;
		if (!e) throw Error("file layer attempted to extract data from esri layer, esri layer did not exist");
		this.supportsFeatures = !0, this.geomType = this.$iApi.geo.geom.clientGeomTypeToRampGeomType(e.geometryType), this.scaleSet.minScale = e.minScale || 0, this.scaleSet.maxScale = e.maxScale || 0, this.extent = this.extent ?? St.fromESRI(e.fullExtent, this.id + "_extent"), this.fields = E(e.fields.slice()).map((e) => ({
			name: e.name,
			alias: e.alias,
			type: e.type,
			length: e.length
		})), this.nameField = e.displayField, this.oidField = e.objectIdField, this.renderer = this.$iApi.geo.symbology.makeRenderer(e.renderer, this.fields), this.legend = this.$iApi.geo.symbology.rendererToLegend(this.renderer);
		let t = {
			sourceGraphics: e.source,
			oidField: this.oidField,
			attribs: "*",
			batchSize: -1,
			fieldsToTrim: []
		};
		this.attribs.attLoader = new Xo(this.$iApi, t);
	}
	async getGraphic(e, t) {
		let n;
		if (!t.getGeom && this.attribs.attLoader.isLoaded()) {
			let t = await this.attribs.attLoader.getAttribs();
			n = new ft(new mt(), "", t.features[t.oidIndex[e]]);
		} else {
			let r = {
				filterOIDs: [e],
				includeGeometry: !!t.getGeom
			}, i = await this.queryFeatures(r);
			if (i.length === 0) throw Error(`Could not find object id ${e}`);
			i.length !== 1 && console.warn("did not get a single result on a query for a specific object id"), n = i[0];
		}
		if (t.getStyle) {
			let e = je(this.renderer.getGraphicSymbol(n.attributes));
			n.style = this.$iApi.geo.geom.styleEsriToRamp(e);
		}
		return n;
	}
	async queryFeatures(e) {
		let t = {
			layer: this,
			...e
		};
		return this.$iApi.geo.query.geoJsonQuery(t);
	}
	async queryOIDs(e) {
		let t = {
			layer: this,
			...e
		};
		return (await this.$iApi.geo.query.geoJsonQuery(t)).map((e) => e.attributes ? e.attributes[this.oidField] : -1);
	}
	applySqlFilter(e = []) {
		if (!this.esriView) {
			this.noLayerErr();
			return;
		}
		let t = this.filter.getCombinedSql(e);
		K.FeatureFilter({ where: t }).then((e) => {
			je(this.esriView).filter = e;
		});
	}
}, Co = class extends So {
	constructor(e, t) {
		super(e, t), this.layerType = R.GEOJSON;
	}
	async onInitiate() {
		let e, t = Date.now();
		if (this.origRampConfig.rawData) e = this.$iApi.geo.layer.files.rawDataJsonParser(this.origRampConfig.rawData, this.origRampConfig.caching);
		else if (this.origRampConfig.url) e = await this.$iApi.geo.layer.files.fetchFileData(this.origRampConfig.url, this.layerType);
		else throw Error("GeoJson layer config contains no raw data or url");
		t > this.lastCancel && (this.sourceGeoJson = e, await super.onInitiate());
	}
}, wo = class extends So {
	constructor(e, t) {
		super(e, t), this.layerType = R.SHAPEFILE;
	}
	async onInitiate() {
		let e = Date.now(), t = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);
		if (e > this.lastCancel) {
			let n = await this.$iApi.geo.layer.files.shapefileToGeoJson(t);
			e > this.lastCancel && (this.sourceGeoJson = n, await super.onInitiate());
		}
	}
}, To = class extends So {
	constructor(e, t) {
		super(e, t), this.layerType = R.CSV;
	}
	async onInitiate() {
		if (!this.origRampConfig.latField || !this.origRampConfig.longField) throw Error("csv file config missing lat or long field names");
		let e, t = Date.now();
		if (this.origRampConfig.rawData && typeof this.origRampConfig.rawData == "string") e = this.origRampConfig.rawData;
		else if (this.origRampConfig.url) e = await this.$iApi.geo.layer.files.fetchFileData(this.origRampConfig.url, this.layerType);
		else throw Error("Csv file config contains no raw data or url");
		if (t > this.lastCancel) {
			let n = await this.$iApi.geo.layer.files.csvToGeoJson(e, {
				latfield: this.origRampConfig.latField,
				lonfield: this.origRampConfig.longField
			});
			t > this.lastCancel && (this.sourceGeoJson = n, await super.onInitiate());
		}
	}
}, Eo = class extends So {
	constructor(e, t) {
		super(e, t), this.layerType = R.GEOJSONZIPPED;
	}
	async onInitiate() {
		let e = Date.now(), t = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);
		if (e > this.lastCancel) {
			let n = await this.$iApi.geo.layer.files.unzipSingleFile(t);
			e > this.lastCancel && (this.sourceGeoJson = JSON.parse(this.$iApi.geo.layer.files.arbToStr(n)), await super.onInitiate());
		}
	}
}, Do = class extends So {
	constructor(e, t) {
		super(e, t), this.layerType = R.FLATGEOBUF;
	}
	async onInitiate() {
		let e = Date.now(), t = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);
		if (e > this.lastCancel) {
			let n = await this.$iApi.geo.layer.files.fgbToGeoJson(t, this.expectedTime.fail + 1e3);
			e > this.lastCancel && (this.sourceGeoJson = n, await super.onInitiate());
		}
	}
}, Oo = class extends So {
	constructor(e, t) {
		super(e, t), this.layerType = R.FLATGEOBUFZIPPED;
	}
	async onInitiate() {
		let e = Date.now(), t = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);
		if (e > this.lastCancel) {
			let n = await this.$iApi.geo.layer.files.unzipSingleFile(t);
			if (e > this.lastCancel) {
				let t = await this.$iApi.geo.layer.files.fgbToGeoJson(n, this.expectedTime.fail + 1e3);
				e > this.lastCancel && (this.sourceGeoJson = t, await super.onInitiate());
			}
		}
	}
}, ko = class extends yo {
	constructor(e, t) {
		super(e, t), this.dataFormat = z.ESRI_FEATURE, this.supportsIdentify = !0, this.layerType = R.FEATURE, this.layerFormat = lt.FEATURE, e.identifyMode && e.identifyMode !== V.NONE ? this.identifyMode = e.identifyMode : this.identifyMode = V.HYBRID;
	}
	async onInitiate() {
		E(this.esriLayer = await K.FeatureLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		let t = super.makeEsriLayerConfig(e);
		return (e.initialFilteredQuery || e.permanentFilteredQuery) && (t.definitionExpression = this.filter.getCombinedSql()), this.configDrawOrder(e, t), e.geomClustering && (t.featureReduction = e.geomClustering), t;
	}
	onLoadActions() {
		let e = Date.now(), t = super.onLoadActions(), n = this.esriLayer.parsedUrl.path, r = this.$iApi.geo.shared.parseUrlIndex(n).index || 0;
		this.layerIdx = r, this.serviceUrl = n;
		let i = async () => {
			let t;
			if (this.esriLayer && this.origRampConfig.customRenderer?.type) {
				let e = await K.RendererFromJson(this.origRampConfig.customRenderer);
				this.esriLayer.renderer = e, t = { customRenderer: e };
			} else t = {};
			await this.loadLayerMetadata(t), e > this.lastCancel && (this.layerTree.name = this.name, this.visibility = this.origRampConfig?.state?.visibility ?? this._serverVisibility ?? !0, this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.attribs.attLoader.updateFieldList(this.fieldList), this.attribs.attLoader.updateFieldsToTrim(this.getFieldsToTrim()), await this.nameInitializer(this.origRampConfig, this.nameField), await this.maptipInitializer(this.origRampConfig));
		}, a = this.$iApi.geo.layer.loadFeatureCount(this.serviceUrl, this.getSqlFilter(W.PERMANENT)).then((t) => {
			e > this.lastCancel && (this.featureCount = t);
		});
		return this.layerTree.layerIdx = r, t.push(a, i()), t;
	}
	runIdentify(e) {
		if (!this.canIdentify()) return [];
		let t = new Y(), n = Ee({
			items: [],
			loading: t.getPromise(),
			loaded: !1,
			errored: !1,
			uid: this.uid,
			layerId: this.id,
			requestTime: Date.now()
		}), r = Promise.resolve(), i = Promise.resolve(), a = [];
		if (this.identifyMode === V.HYBRID || this.identifyMode === V.GEOMETRIC) {
			let t = {
				includeGeometry: !1,
				sourceSR: this.sourceSR
			};
			this.geomType !== L.POLYGON && e.geometry.type === L.POINT ? t.filterGeometry = this.$iApi.geo.query.makeClickBuffer(e.geometry, e.tolerance) : t.filterGeometry = e.geometry, t.filterSql = this.getCombinedSqlFilter(), i = this.queryOIDs(t).then((e) => {
				a = e;
			});
		}
		return e.hitTest && (this.identifyMode === V.HYBRID || this.identifyMode === V.SYMBOLIC) && (r = i.then(async () => {
			(await e.hitTest).filter((e) => e.layerId === this.id && a.findIndex((t) => e.oid === t) === -1).forEach((e) => {
				a.push(e.oid);
			});
		})), Promise.all([r, i]).then(() => {
			a.forEach((e) => {
				n.items.push(po.makeOidItem(e, this));
			}), n.loaded = !0, t.resolveMe();
		}).catch(() => {
			n.errored = !0, t.resolveMe();
		}), [n];
	}
	applySqlFilter(e = []) {
		if (this.layerExists) {
			let t = this.filter.getCombinedSql(e);
			this.esriLayer.definitionExpression = t;
		} else this.noLayerErr();
	}
	async getGraphicExtent(e) {
		let t;
		if (!this.layerExists) this.noLayerErr();
		else if (this.geomType === L.POINT) console.error(`Attempted to query extent for invalid geometry type ${this.geomType}.`);
		else {
			let n = this.attribs.quickCache.getExtent(e);
			if (n) t = n;
			else {
				let [n, r] = await Ze(this.esriLayer.queryExtent({
					objectIds: [e],
					outSpatialReference: this.$iApi.geo.map.getSR().toESRI()
				}));
				!n && r.extent && (t = St.fromESRI(r.extent), this.attribs.quickCache.setExtent(e, t));
			}
		}
		return t;
	}
	async getLocalGeometry(e) {
		await this.viewPromise(), this.esriView.updating && await new Promise((e) => {
			let t = s(() => this.esriView.updating, (n) => {
				n || (t.remove(), e());
			});
		});
		let t = await K.Query();
		t.objectIds = [e], t.returnGeometry = !0;
		let n = await this.esriView.queryFeatures(t);
		if (n.features.length) {
			let e = n.features[0];
			return this.$iApi.geo.geom.geomEsriToRamp(e.geometry);
		} else return;
	}
	async zoomToFeature(e) {
		let t;
		return this.geomType !== L.POINT && (t = this.attribs.quickCache.getAnyScaleGeom(e), t || (t = await this.getLocalGeometry(e), t ? this.geomType !== L.MULTIPOINT && this.attribs.quickCache.setGeom(e, t, this.$iApi.geo.map.getScale()) : t = await this.getGraphicExtent(e))), t && !t.invalid() ? (await this.$iApi.geo.map.zoomMapTo(t), !0) : await super.zoomToFeature(e);
	}
}, Ao = class extends vo {
	isDynamic;
	origState;
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !0, this.supportsSublayers = !0, this.layerType = R.MAPIMAGE, this.layerFormat = lt.MAPIMAGE, this.isDynamic = !1, this.maptips = !1, this.layerTree.layerIdx = -1, this.identifyMode = V.GEOMETRIC;
	}
	actualViz = !1;
	get visibility() {
		return this.actualViz;
	}
	set visibility(e) {
		if (!this.layerExists) {
			this.noLayerErr();
			return;
		}
		if (e || jo(this, "1=2"), this.actualViz = e, e && !this.esriLayer.visible) this.esriLayer.visible = !0;
		else if (!e && this.esriLayer.visible) {
			let e = "", t = setTimeout(() => {
				this.$iApi.event.off(e), this.actualViz || (this.esriLayer.visible = !1, jo(this, ""));
			}, 1600);
			e = this.$iApi.event.on(Z.LAYER_DRAWSTATECHANGE, (n) => {
				n.layer.id === this.id && n.state === ut.UP_TO_DATE && (clearTimeout(t), this.$iApi.event.off(e), this.actualViz || (this.esriLayer.visible = !1, jo(this, "")));
			});
		}
		e && jo(this, "");
	}
	async onInitiate() {
		this.esriLayer = E(await K.MapImageLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		let t = super.makeEsriLayerConfig(e);
		return this.origState = {
			visibility: t.visible,
			opacity: t.opacity
		}, t.visible = !1, e.imageFormat && (t.imageFormat = e.imageFormat), t;
	}
	onLoadActions() {
		let e = super.onLoadActions();
		if (!this.layerExists) return this.noLayerErr(), e;
		let t = Date.now();
		if (this.layerTree.name = this.name, !this.esriLayer.capabilities.exportMap) throw this.$iApi.notify.show(vn.WARNING, this.$iApi.$i18n.t("layer.noexportmap", { name: this.name || this.id })), Error("Service does not support Map Image Layer, Map Export is not enabled");
		this.isDynamic = this.esriLayer.capabilities.exportMap.supportsDynamicLayers, this.extent = this.extent ?? St.fromESRI(this.esriLayer.fullExtent, this.id + "_extent");
		let n = (e) => {
			let t = this.esriLayer?.allSublayers.find((t) => t.id === e);
			if (!t) throw Error("attempt to find map image sublayer failed");
			return t;
		}, r = {};
		this.origRampConfig.sublayers.forEach((e) => {
			r[e.index || 0] = e;
		});
		let i = [], a = (e, t) => {
			let n = e.id, o = r[n];
			if (e.sublayers && e.sublayers.length > 0) {
				let r = new kt(n, "", (o ? o.name : "") || e.title || "", !1);
				t.findChildByIdx(n) || t.children.push(r), e.sublayers.reverse().forEach((e) => {
					a(e, r);
				});
			} else {
				this._sublayers[n] || (this._sublayers[n] = new Mo({
					id: this.$iApi.geo.layer.sublayerId(this.id, n),
					index: n,
					layerType: R.SUBLAYER,
					name: o?.name,
					state: o?.state ?? {
						opacity: this.opacity,
						visibility: this.visibility,
						maptips: this.maptips,
						identify: this.identify
					},
					extent: o?.extent,
					controls: o?.controls,
					disabledControls: o?.disabledControls,
					initialFilteredQuery: o?.initialFilteredQuery,
					permanentFilteredQuery: o?.permanentFilteredQuery,
					labels: o?.labels
				}, this.$iApi, this));
				let r = this._sublayers[n];
				if (r.isRemoved) return;
				if (r.name = o?.name || e.title || "", i.push(r), !t.children.map((e) => e.layerIdx).includes(n)) {
					let e = new kt(n, r.uid, r.name, !1);
					t.children.push(e);
				}
				r.esriWatches.push(s(() => e.visible, () => {
					this.$iApi.event.emit(Z.LAYER_VISIBILITYCHANGE, {
						visibility: r.visibility,
						layer: r
					}), r.parentLayer?.checkVisibility();
				}), s(() => e.opacity, (e) => {
					this.$iApi.event.emit(Z.LAYER_OPACITYCHANGE, {
						opacity: e,
						layer: r
					});
				}));
			}
		};
		this.origRampConfig.sublayers.forEach((e) => {
			e.cosmetic || a(n(e.index || 0), this.layerTree);
		});
		let o = i.map(async (e) => {
			let i = n(e.layerIdx), a = r[e.layerIdx];
			if (e.serviceUrl = i.url, e.fetchEsriSublayer(this), await e.initiate(), t < this.lastCancel) return;
			let o = {};
			if (e.esriSubLayer && a?.customRenderer?.type) {
				let t = await K.RendererFromJson(a.customRenderer);
				e.esriSubLayer.renderer = t, o.customRenderer = t;
			}
			if (await e.loadLayerMetadata(o), t < this.lastCancel) return;
			let s = r[e.layerIdx];
			if (s ? (e.visibility = e.isRemoved ? !1 : s.state?.visibility ?? (this.origState.visibility ? e._serverVisibility ?? this.origState.visibility : this.origState.visibility ?? e._serverVisibility) ?? !0, e.opacity = s.state?.opacity ?? this.origState.opacity ?? 1, this.$iApi.geo.attributes.applyFieldMetadata(e, s.fieldMetadata), e.canModifyLayer || this.$iApi.notify.show(vn.WARNING, this.$iApi.$i18n.t("layer.filtersdisabled", { name: e.name || e.id }))) : this.$iApi.geo.attributes.applyFieldMetadata(e), e.supportsFeatures) {
				e.updateFieldList(), e.updateFieldsToTrim(), await e.nameInitializer(s, e.nameField);
				let n = await this.$iApi.geo.layer.loadFeatureCount(e.serviceUrl, e.getSqlFilter(W.PERMANENT));
				t > this.lastCancel && (e.featureCount = n);
			}
		});
		return e.push(...o), this.esriLayer.allSublayers.forEach((e) => {
			!e.sublayers && !i.find((t) => t.layerIdx === e.id) ? (e.visible = !1, e.opacity = 0) : e.sublayers && (e.visible = !0);
		}), this.visibility = this.origState.visibility ?? !0, e;
	}
	updateLayerState(e, t = !1) {
		super.updateLayerState(e, t), this.sublayers.forEach((n) => n.updateLayerState(e, t));
	}
	updateDrawState(e) {
		super.updateDrawState(e), this.sublayers.forEach((t) => t.updateDrawState(e));
	}
	runIdentify(e) {
		if (!this.canIdentify()) return [];
		e.sublayerIds &&= e.sublayerIds.map((e) => typeof e == "number" ? this.layerTree?.findChildByIdx(e)?.uid : e);
		let t = e.sublayerIds ? this._sublayers.filter((t) => e.sublayerIds?.includes(t.uid)) : this._sublayers.filter((e) => e.canIdentify());
		if (t.length === 0) return [];
		let n;
		return e.geometry.type === L.POINT && (n = this.$iApi.geo.query.makeClickBuffer(e.geometry, e.tolerance)), t.map((t) => {
			let r = new Y(), i = {}, a = Ee({
				items: [],
				loading: r.getPromise(),
				loaded: !1,
				errored: !1,
				uid: t.uid,
				layerId: t.id,
				requestTime: Date.now()
			});
			return t.geomType !== L.POLYGON && n ? i.filterGeometry = n : i.filterGeometry = e.geometry, i.filterSql = t.getCombinedSqlFilter(), i.sourceSR = t.sourceSR, t.queryOIDs(i).then((e) => {
				e.forEach((e) => {
					a.items.push(po.makeOidItem(e, t));
				}), a.loaded = !0, r.resolveMe();
			}).catch(() => {
				a.errored = !0, r.resolveMe();
			}), a;
		});
	}
}, jo = (e, t) => {
	e.sublayers.forEach((e) => {
		e.layerExists && e.canModifyLayer && e.setSqlFilter(W.MIL_FLICKER_ERASER, t);
	});
}, Mo = class extends yo {
	constructor(e, t, n) {
		if (super(e, t), this.layerType = R.SUBLAYER, this.layerFormat = lt.MAPIMAGE, this.isSublayer = !0, this.layerIdx = e.index, this.parentLayer = n, this.isSystem = n.isSystem, this.dataFormat = z.ESRI_FEATURE, this.supportsFeatures = !0, this.maptips = !1, this.url = this.parentLayer?.url, this.canReload = !!(this.url || this.origRampConfig.caching), !n.esriLayer) throw Error("Map Image Layer with no internal esri layer encountered in sublayer creation");
		this.fetchEsriSublayer(n), (e.initialFilteredQuery || e.permanentFilteredQuery) && this.applySqlFilter();
	}
	fetchEsriSublayer(e) {
		if (!e.esriLayer) {
			console.error("Attempted to fetch the ESRI sublayer when parent has no ESRI layer");
			return;
		}
		this.esriSubLayer = E(e.esriLayer.allSublayers.find((e) => e.id === this.layerIdx));
	}
	onLoadActions() {
		return this.layerTree = this.parentLayer.getLayerTree().findChildByUid(this.uid), this.layerTree.name = this.name, this.layerTree.layerIdx = this.layerIdx, this.identify = this.config.state.identify == null ? this.supportsIdentify : this.config.state.identify, [];
	}
	async onInitiate() {
		this.initiationState = H.INITIATED;
		let e = this.labelVizOverride();
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
	get layerExists() {
		return !!(this.parentLayer?.layerExists && this.esriSubLayer && this.initiationState === H.INITIATED);
	}
	get visibility() {
		return this.layerExists ? this.esriSubLayer.visible : !1;
	}
	set visibility(e) {
		this.layerExists ? this.esriSubLayer.visible = e : this.noLayerErr();
	}
	get opacity() {
		return this.layerExists ? this.esriSubLayer.opacity : 0;
	}
	set opacity(e) {
		if (!this.layerExists) {
			this.noLayerErr();
			return;
		}
		this.parentLayer.isDynamic || console.warn(`Opacity of a Map Image Sublayer was set. The service does not support sublayer opacity. LayerId ${this.id}`), this.esriSubLayer.opacity = e;
	}
	get mouseTolerance() {
		return this.layerExists ? this.parentLayer.mouseTolerance : 0;
	}
	set mouseTolerance(e) {
		this.layerExists ? this.parentLayer.mouseTolerance = e : this.noLayerErr();
	}
	get touchTolerance() {
		return this.layerExists ? this.parentLayer.touchTolerance : 0;
	}
	set touchTolerance(e) {
		this.layerExists ? this.parentLayer.touchTolerance = e : this.noLayerErr();
	}
	applySqlFilter(e = []) {
		if (this.parentLayer?.layerExists && this.esriSubLayer) if (this.supportsFeatures) {
			let t = this.filter.getCombinedSql(e);
			this.esriSubLayer.definitionExpression = t;
		} else console.error("Attempted to apply an SQL filter to a sublayer that does not support it (likely Raster datatype)");
		else this.noLayerErr();
	}
	getSR() {
		if (this.parentLayer?.esriLayer) {
			let e = this._parentLayer?.esriLayer?.spatialReference;
			return e ? q.fromESRI(e) : q.latLongSR();
		} else return this.noLayerErr(), q.latLongSR();
	}
	updateFieldList() {
		this.attribs.attLoader.updateFieldList(this.fieldList);
	}
	updateFieldsToTrim() {
		this.attribs.attLoader.updateFieldsToTrim(this.getFieldsToTrim());
	}
	get labelVisibility() {
		return this.layerExists ? this.esriSubLayer.labelsVisible : !1;
	}
	set labelVisibility(e) {
		this.layerExists ? this.esriSubLayer.labelsVisible = e : this.noLayerErr();
	}
	labelVizOverride() {
		let e = this.origRampConfig.labels?.visible;
		if (e !== void 0 || (e = this.$iApi.geo.map.labelsDefault?.visible, e !== void 0)) return e;
	}
	async zoomToFeature(e) {
		if (this.supportsFeatures) {
			let t = this.attribs.quickCache.getAnyScaleGeom(e);
			return t && !t.invalid() ? (await this.$iApi.geo.map.zoomMapTo(t), !0) : await super.zoomToFeature(e);
		} else return !1;
	}
}, No = class extends vo {
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !1, this.layerType = R.OSM, this.layerFormat = lt.OSM, this.dataFormat = z.OSM_TILE, this.supportsFeatures = !1;
	}
	async onInitiate() {
		this.esriLayer = E(await K.OpenStreetMapLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		return super.makeEsriLayerConfig(e);
	}
	onLoadActions() {
		let e = super.onLoadActions();
		this.layerTree.name = this.name;
		let t = this.$iApi.geo.symbology.generatePlaceholderSymbology("O", "#03fc4e"), n = {
			uid: this.$iApi.geo.shared.generateUUID(),
			label: "OpenStreetMap",
			svgcode: t.svgcode,
			esriStandard: !0,
			drawPromise: Promise.resolve()
		};
		return this.legend.push(n), e;
	}
}, Po = class extends vo {
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !1, this.layerType = R.IMAGERY, this.layerFormat = lt.IMAGERY, this.dataFormat = z.ESRI_RASTER;
	}
	async onInitiate() {
		this.esriLayer = E(await K.ImageryLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		return super.makeEsriLayerConfig(e);
	}
	onLoadActions() {
		let e = super.onLoadActions();
		this.layerTree.name = this.name;
		let t = Date.now(), n = this.$iApi.geo.symbology.mapServerToLocalLegend(this.origRampConfig.url).then((e) => {
			t > this.lastCancel && (this.legend = e);
		});
		return e.push(n), e;
	}
}, Fo = class extends vo {
	schemaLocked = !0;
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !1, this.dataFormat = z.ESRI_TILE;
	}
	onLoadActions() {
		let e = super.onLoadActions();
		return this.layerTree.name = this.name, this.schemaLocked && e.push(this.checkProj()), e;
	}
	async checkProj() {
		let e = this.getSR(), t = this.$iApi.geo.map.getSR().isEqual(e), n = () => this.$iApi.notify.show(vn.WARNING, this.$iApi.$i18n.t("layer.mismatch", { name: this.name || this.id }));
		if (this.layerState === U.LOADED && !t) n(), this.onError(), this.updateDrawState(ut.NOT_LOADED);
		else if (this.layerState === U.ERROR && t) this.reload();
		else if (this.layerState !== U.ERROR && !t) return n(), Promise.reject();
	}
}, Io = class extends Fo {
	constructor(e, t) {
		super(e, t), this.layerType = R.IMAGERYTILE, this.layerFormat = lt.IMAGERYTILE, this.schemaLocked = !1;
	}
	async onInitiate() {
		this.esriLayer = E(await K.ImageryTileLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		return super.makeEsriLayerConfig(e);
	}
}, Lo = class extends Fo {
	constructor(e, t) {
		super(e, t), this.layerType = R.TILE, this.layerFormat = lt.TILE;
	}
	async onInitiate() {
		this.esriLayer = E(await K.TileLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		return super.makeEsriLayerConfig(e);
	}
	onLoadActions() {
		let e = super.onLoadActions(), t = Date.now(), n = this.$iApi.geo.symbology.mapServerToLocalLegend(this.origRampConfig.url).then((e) => {
			t > this.lastCancel && (this.legend = e);
		});
		return e.push(n), e;
	}
}, Ro = class extends Fo {
	constructor(e, t) {
		super(e, t), this.layerType = R.VECTORTILE, this.layerFormat = lt.VECTORTILE;
	}
	async onInitiate() {
		this.esriLayer = E(await K.VectorTileLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		return super.makeEsriLayerConfig(e);
	}
}, zo = class extends vo {
	sublayerNames;
	mimeType;
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !0, this.layerType = R.WMS, this.layerFormat = lt.WMS, this.mimeType = e.featureInfoMimeType || "", this.sublayerNames = [], this.dataFormat = z.OGC_RASTER, this.identifyMode = V.GEOMETRIC;
	}
	async onInitiate() {
		this.esriLayer = E(await K.WMSLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		let t = super.makeEsriLayerConfig(e), n = e.sublayers;
		return this.sublayerNames = n.map((e) => e.id || "error_no_wms_id"), t.customParameters = { styles: n.map((e) => e.currentStyle).join() }, e.url.indexOf("/geomet") !== -1 && (t.customParameters.layers = n[0].id), t;
	}
	onLoadActions() {
		let e = super.onLoadActions();
		this.layerTree.name = this.name;
		let t = (e) => {
			let n = !1;
			return e.forEach((e) => {
				this.sublayerNames.indexOf(e.name) > -1 || e.sublayers && e.sublayers.length > 0 && t(e.sublayers) ? n = !0 : e.visible = !1;
			}), n;
		};
		return this.layerExists ? t(this.esriLayer.sublayers) : this.noLayerErr(), this.loadSymbology(), e;
	}
	canIdentify() {
		return super.canIdentify();
	}
	runIdentify(e) {
		if (e.geometry.type !== L.POINT) throw Error("a point must be used for WMS Identify");
		if (!this.canIdentify()) return [];
		let t = new Y(), n = Ee({
			items: [],
			loading: t.getPromise(),
			loaded: !1,
			errored: !1,
			uid: this.uid,
			layerId: this.id,
			requestTime: Date.now()
		});
		return this.getFeatureInfo(this.sublayerNames, e.geometry, this.mimeType).then((e) => {
			if (e) {
				let t = !0, r;
				typeof e == "string" ? e.indexOf("Search returned no results") === -1 && e !== "" ? r = dt.TEXT : (t = !1, r = dt.UNKNOWN) : r = dt.JSON, t && n.items.push(po.makeRawItem(r, e));
			}
			n.loaded = !0, t.resolveMe();
		}).catch(() => {
			n.errored = !0, t.resolveMe();
		}), [n];
	}
	setCustomParameter(e, t, n = !0) {
		this.layerExists ? (this.esriLayer.customLayerParameters || (this.esriLayer.customLayerParameters = {}), this.esriLayer.customLayerParameters[e] = t, n && this.esriLayer.refresh()) : this.noLayerErr();
	}
	getFeatureInfo(e, t, n) {
		let r = this.$iApi.geo.map, i = this.esriLayer;
		if (!r.esriView) throw Error("WMS get feature, no map view exists. Cannot derive click coords");
		if (!i) throw this.noLayerErr(), Error("wms get feature failed, no layer");
		let a, o, s = r.getExtent(), c = i.spatialReferences, l = e.join(","), u = r.esriView.toScreen(t.toESRI()), d = Math.floor(u.x), f = Math.floor(u.y), p = {
			"application/json": "json",
			"text/html": "text",
			"text/plain": "text"
		}[n] || "text", m = r.getSR();
		m.wkid ? a = m.wkid : (a = 4326, console.error("Map is likely in a WKT projection. WMS Identify request will likely fail.")), c && c.length > 1 ? c.indexOf(a) === -1 && (m.latestWkid && c.indexOf(m.latestWkid) > -1 ? a = m.latestWkid : console.error("WMS service does not support the maps projection. Identify request will likely fail.")) : console.error("No supported wkid/epsg code found for WMS service. Identify request will likely fail."), i.version === "1.3" || i.version === "1.3.0" ? (o = {
			CRS: "EPSG:" + a,
			I: d,
			J: f,
			STYLES: "",
			FORMAT: i.imageFormat
		}, this.$iApi.geo.layer.ogc.reversedAxisWKIDs().indexOf(a) > -1 && (o.BBOX = `${s.ymin},${s.xmin},${s.ymax},${s.xmax}`)) : o = {
			SRS: "EPSG:" + a,
			X: d,
			Y: f
		}, Object.prototype.hasOwnProperty.call(o, "BBOX") || (o.BBOX = `${s.xmin},${s.ymin},${s.xmax},${s.ymax}`);
		let h = {
			SERVICE: "WMS",
			REQUEST: "GetFeatureInfo",
			VERSION: i.version,
			WIDTH: r.getPixelWidth(),
			HEIGHT: r.getPixelHeight(),
			QUERY_LAYERS: l,
			LAYERS: l,
			INFO_FORMAT: n
		}, g = i.customLayerParameters;
		return g && Object.keys(g).forEach((e) => {
			e.toLowerCase() !== "styles" && (h[e] = g[e]);
		}), Object.keys(h).forEach((e) => o[e] = h[e]), ee(i.url.split("?")[0], {
			query: o,
			responseType: p
		});
	}
	getLegendUrls(e) {
		if (!this.layerExists) return this.noLayerErr(), [];
		let t = /* @__PURE__ */ new Map();
		this.esriLayer.allSublayers.forEach((e) => {
			e.visible && (e.legendUrl && this.origRampConfig.sublayers?.forEach((t) => {
				if (t.id && t.currentStyle && t.id === e.name) {
					let n = new Pt(e.legendUrl);
					"STYLE" in n.queryMap && n.queryMap.STYLE !== t.currentStyle && (e.legendUrl = n.updateQuery({ STYLE: t.currentStyle }));
				}
			}), t.set(e.name, e.legendUrl));
		});
		let n = e.map((e) => e.styleLegends && e.currentStyle ? e.styleLegends.find((t) => t.name === e.currentStyle).url : void 0);
		return n.forEach((r, i) => {
			r || (n[i] = t.get(e[i].id));
		}), n;
	}
	getWMSLayerTitle(e) {
		if (!this.esriLayer) return "";
		let t;
		return this.esriLayer.allSublayers.some((n) => n.name === e ? (t = n.title, !0) : !1), t || "";
	}
	loadSymbology() {
		let e = Date.now(), t = this.config.sublayers;
		this.legend = this.getLegendUrls(t.map((e) => ({
			id: e.id,
			styleLegends: e.styleLegends,
			currentStyle: e.currentStyle
		}))).map((n, r) => {
			let i = t[r].name || this.getWMSLayerTitle(t[r].id) || t[r].id, a = {
				uid: this.$iApi.geo.shared.generateUUID(),
				label: i,
				svgcode: "",
				esriStandard: !1,
				drawPromise: this.$iApi.geo.symbology.generateWMSSymbology(n).then((t) => {
					e > this.lastCancel && (a.svgcode = t.svgcode, a.imgHeight = t.imgHeight, a.imgWidth = t.imgWidth);
				})
			};
			return a;
		});
	}
}, Bo = class extends So {
	constructor(e, t) {
		super(e, t), this.layerType = R.WFS;
	}
	async onInitiate() {
		let e = Date.now(), { offset: t, limit: n } = new Pt(this.config.url).queryMap, r = await this.$iApi.geo.layer.ogc.loadWfsData(this.config.url, -1, parseInt(t) || 0, parseInt(n) || 1e3, void 0, this.config.xyInAttribs);
		e > this.lastCancel && (this.sourceGeoJson = r, await super.onInitiate());
	}
}, Vo = class extends _o {
	sourceJson;
	attribs;
	_visibility;
	constructor(e, t) {
		super(e, t), this.dataFormat = z.ESRI_FEATURE, this.layerFormat = lt.NOLAYER, this.drawState = ut.NOT_VISUAL, this.attribs = new Ko(), this.supportsFeatures = !0, this.mapLayer = !1, this.isFile = !1, this._visibility = e.state?.visibility ?? !0, this.expectedTime.draw = 0;
	}
	async onInitiate() {
		if (this.sourceJson) {
			let e = this.sourceJson;
			if (e.data.length === 0 || e.fields.length === 0) throw Error("Data layer with no columns or now rows.");
			let t = e.fields.slice(), n = e.data[0].slice(), r = / /gi;
			this.fields = t.map((t, i) => {
				let a = "", o = t;
				t.indexOf(" ") > -1 && (a = t, o = t.trim().replace(r, "-"), e.fields[i] = o);
				let s = this.$iApi.geo.layer.files.inferType(n[i]);
				return {
					name: o,
					alias: a,
					type: s,
					length: s === nt.STRING ? 256 : void 0
				};
			}), this.oidField = "rampOID", this.fields.push({
				name: this.oidField,
				type: nt.OID
			}), e.fields.push(this.oidField), e.data.forEach((e, t) => e.push(t + 1)), this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.fieldList = "*";
			let i = {
				batchSize: -1,
				sourceDataJson: e,
				oidField: this.oidField,
				attribs: "*",
				fieldsToTrim: this.getFieldsToTrim()
			};
			this.attribs.attLoader = new Zo(this.$iApi, i), await this.attribs.attLoader.getAttribs(), this.featureCount = e.data.length;
			let a = this.origRampConfig.nameField, o = {
				nameField: a ? this.$iApi.geo.attributes.fieldValidator(this.fields, a) : "",
				nameArcade: this.origRampConfig.nameArcade
			};
			await this.nameInitializer(o, ""), this.sourceJson = void 0, this.origRampConfig.caching || delete this.origRampConfig.rawData;
		} else throw Error("Attempted to initiate file based data layer, sourceJson is missing");
	}
	async terminate() {
		await super.terminate();
	}
	async reload() {
		this.$iApi.event.emit(Z.LAYER_RELOAD_START, this), await this.terminate(), await this.initiate(), this.layerState !== U.ERROR && this.onLoad(), setTimeout(() => {
			this.$iApi.event.emit(Z.LAYER_RELOAD_END, this);
		}, 300);
	}
	onLoadActions() {
		let e = super.onLoadActions();
		return this.legend = [{
			uid: this.$iApi.geo.shared.generateUUID(),
			label: "",
			svgcode: "",
			esriStandard: !0,
			visibility: !0,
			lastVisbility: !0,
			drawPromise: this.getIcon(0).then((e) => {
				this.legend[0].svgcode = e;
			})
		}], e;
	}
	getAttributes() {
		return this.attribs.attLoader.getAttribs();
	}
	getTabularAttributes() {
		return this.$iApi.geo.attributes.generateTabularAttributes(this, this.attribs);
	}
	async getGraphic(e, t) {
		let n = {};
		if (this.attribs.attLoader.isLoaded()) {
			let t = await this.attribs.attLoader.getAttribs();
			n = t.features[t.oidIndex[e]];
		} else throw Error("Non ESRI data layer did not have attributes populated.");
		return new ft(new mt(), "", n);
	}
	async getIcon(e) {
		return "<svg id=\"SvgjsSvg1012\" width=\"32\" height=\"32\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.com/svgjs\" viewBox=\"0 0 32 32\">                      <defs id=\"SvgjsDefs1013\"></defs>                      <rect id=\"SvgjsRect1014\" width=\"28\"  height=\"28\" x=\"2\" y=\"2\" fill=\"#2e8b57\"></rect>                      <text id=\"SvgjsText1015\" font-family=\"Roboto\" font-size=\"23\" fill=\"#ffffff\" font-weight=\"bold\" x=\"7.6875\" y=\"-6.40000057220459\" svgjs:data=\"{&quot;leading&quot;:&quot;1.3&quot;}\">                          <tspan id=\"SvgjsTspan1016\" class=\"grid-icons\" dy=\"29.900000000000002\" x=\"7.6875\" svgjs:data=\"{&quot;newLined&quot;:true}\">D</tspan>                      </text>                </svg>";
	}
	async getFilterOIDs(e = [], t = void 0) {}
	abortAttributeLoad() {}
	attribLoadAborted() {
		return !1;
	}
	clearFeatureCache() {}
	downloadedAttributes() {
		return this.featureCount;
	}
	get layerExists() {
		return this.isLoaded;
	}
	get visibility() {
		return this._visibility;
	}
	set visibility(e) {
		this._visibility !== e && (this._visibility = e, this.$iApi.event.emit(Z.LAYER_VISIBILITYCHANGE, {
			visibility: e,
			layer: this
		}));
	}
}, Ho = class extends Vo {
	constructor(e, t) {
		super(e, t), this.layerType = R.DATAJSON;
	}
	async onInitiate() {
		let e = Date.now(), t;
		if (this.origRampConfig.rawData) t = this.$iApi.geo.layer.files.rawDataJsonParser(this.origRampConfig.rawData, this.origRampConfig.caching);
		else if (this.origRampConfig.url) t = await this.$iApi.geo.layer.files.fetchFileData(this.origRampConfig.url, this.layerType);
		else throw Error("Json Data layer config contains no raw data or url");
		e > this.lastCancel && (this.sourceJson = t, await super.onInitiate());
	}
}, Uo = class extends Vo {
	filter;
	serviceUrl;
	constructor(e, t) {
		super(e, t), this.layerType = R.DATATABLE, this.serviceUrl = e.url, this.filter = new jt(e.permanentFilteredQuery || "", e.initialFilteredQuery || "");
	}
	async onInitiate() {}
	onLoadActions() {
		let e = super.onLoadActions(), t = Date.now(), n = this.$iApi.geo.shared.parseUrlIndex(this.serviceUrl).index || 0, r = this.$iApi.geo.layer.loadLayerMetadata(this.serviceUrl).then((e) => {
			if (t < this.lastCancel) return;
			this.name ||= e.name, this.layerTree.name = this.name, this.oidField = e.objectIdField, this.fields = e.fields, this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.nameInitializer(this.origRampConfig, e.displayField);
			let n = {
				supportsLimit: (e.currentVersion || 1) >= 10.1,
				serviceUrl: this.serviceUrl,
				oidField: this.oidField,
				batchSize: -1,
				attribs: this.fieldList,
				permanentFilter: this.getSqlFilter(W.PERMANENT),
				fieldsToTrim: this.getFieldsToTrim()
			};
			this.attribs.attLoader = new Yo(this.$iApi, n), this.attribs.quickCache = new Qo(this.geomType);
		}), i = this.$iApi.geo.layer.loadFeatureCount(this.serviceUrl, this.getSqlFilter(W.PERMANENT)).then((e) => {
			t > this.lastCancel && (this.featureCount = e);
		});
		return this.layerTree.layerIdx = n, e.push(r, i), e;
	}
	async getGraphic(e) {
		let t = {}, n = this.attribs.quickCache.getAttribs(e);
		if (n) t = n;
		else if (this.attribs.attLoader.isLoaded()) {
			let n = await this.attribs.attLoader.getAttribs();
			t = n.features[n.oidIndex[e]];
		} else {
			let n = {
				oid: e,
				serviceUrl: this.serviceUrl,
				includeGeometry: !1,
				attribs: this.fieldList
			}, r = await this.$iApi.geo.attributes.loadSingleFeature(n);
			this.attribs.quickCache.setAttribs(e, r.attributes), t = r.attributes;
		}
		return new ft(new mt(), "", t);
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
	setSqlFilter(e, t) {
		t !== this.filter.getSql(e) && (this.filter.setSql(e, t), this.$iApi.event.emit(Z.FILTER_CHANGE, {
			uid: this.uid,
			filterKey: e
		}));
	}
	getSqlFilter(e) {
		return this.filter.getSql(e);
	}
	getCombinedSqlFilter(e) {
		return this.filter.getCombinedSql(e);
	}
	async getFilterOIDs(e = []) {
		let t = this.filter.getCombinedSql(e);
		if (!t) return;
		let n = this.filter.sqlActiveFilters(e), r = this.filter.getCache(n, !1);
		if (!r) {
			let e = {
				filterSql: t,
				includeGeometry: !1
			};
			r = this.queryOIDs(e), this.filter.setCache(r, n, !1);
		}
		return r;
	}
	queryOIDs(e) {
		let t = {
			url: this.serviceUrl,
			...e
		};
		return this.$iApi.geo.query.arcGisServerQueryIds(t);
	}
	async queryFeaturesDiscrete(e) {
		return (await this.queryOIDs(e)).map((e) => ({
			oid: e,
			graphic: this.getGraphic(e)
		}));
	}
	async queryFeatures(e) {
		let t = await this.queryFeaturesDiscrete(e);
		return Promise.all(t.map((e) => e.graphic));
	}
}, Wo = new Map([
	["integer", "number"],
	["small-integer", "number"],
	["big-integer", "number"],
	["single", "number"],
	["double", "number"],
	["long", "number"],
	["oid", "number"],
	["string", "text"],
	["global-id", "text"],
	["geometry", "geometry"],
	["date", "date"]
]), Go = class extends X {
	oidIndexer(e, t) {
		e.features.forEach((n, r) => {
			e.oidIndex[n[t]] = r;
		});
	}
	async arcGisBatchLoad(e, t) {
		if (t.loadAbortFlag) return [];
		let n = e.permanentFilter ? ` AND ${e.permanentFilter}` : "", r = { query: {
			where: `${e.oidField}>${e.maxId}${n}`,
			outFields: e.attribs,
			orderByFields: e.oidField,
			returnGeometry: "false",
			f: "json"
		} }, [i, a] = await Ze(ee(e.serviceUrl + "/query", r));
		if (!a) return console.error(`ArcGIS batch load error: ${e.serviceUrl}`, i), Promise.reject(/* @__PURE__ */ Error(`ArcGIS batch load error: ${e.serviceUrl}`));
		if (!a.data || !a.data.features) return console.error(`ArcGIS batch load gave no data/features: ${e.serviceUrl}`), Promise.reject(/* @__PURE__ */ Error(`ArcGIS batch load gave no data/features: ${e.serviceUrl}`));
		let o = a.data.features, s = o.length;
		if (s > 0) {
			t.loadedCount += s;
			let n;
			if (e.supportsLimit ? n = a.data.exceededTransferLimit : (e.batchSize === -1 && (e.batchSize = s), n = s >= e.batchSize), o = this.trimFeatureSetAttributes(o, e.fieldsToTrim ?? []), n) {
				e.maxId = o[s - 1].attributes[e.oidField];
				let n = await this.arcGisBatchLoad(e, t);
				return t.loadAbortFlag ? [] : o.concat(n);
			} else return t.loadAbortFlag ? [] : o;
		} else return [];
	}
	async loadArcGisServerAttributes(e, t) {
		e.maxId = -1, e.batchSize = -1;
		let n = {
			features: (await this.arcGisBatchLoad(e, t)).map((e) => e.attributes),
			oidIndex: {}
		};
		return this.oidIndexer(n, e.oidField), t.loadIsDone = !0, n;
	}
	async loadGraphicsAttributes(e, t) {
		if (!e.sourceGraphics) throw Error("No .sourceGraphics provided to file layer attribute loader");
		let n = {
			features: e.sourceGraphics.map((e) => je(e).attributes).toArray(),
			oidIndex: {}
		};
		return this.oidIndexer(n, e.oidField), t.loadIsDone = !0, t.loadedCount = n.features.length, n;
	}
	async loadCompactJsonAttributes(e, t) {
		if (!e.sourceDataJson) throw Error("No .sourceDataJson provided to file data-layer attribute loader");
		let n = e.sourceDataJson.fields, r = e.fieldsToTrim ?? [], i = {
			features: e.sourceDataJson.data.map((e) => {
				let t = {};
				return e.forEach((e, i) => {
					t[n[i]] = typeof e == "string" && r.includes(n[i]) ? e.trim() : e;
				}), t;
			}),
			oidIndex: {}
		};
		return this.oidIndexer(i, e.oidField), t.loadIsDone = !0, t.loadedCount = i.features.length, e.sourceDataJson = void 0, i;
	}
	async loadSingleFeature(e) {
		let t = { query: {
			f: "json",
			objectIds: e.oid,
			returnGeometry: e.includeGeometry,
			outFields: e.attribs
		} };
		e.maxOffset !== void 0 && (t.query.maxAllowableOffset = e.maxOffset), e.mapSR !== void 0 && (t.query.outSR = e.mapSR), e.geometryPrecision !== void 0 && e.geometryPrecision >= 0 && (t.query.geometryPrecision = e.geometryPrecision);
		let [n, r] = await Ze(ee(e.serviceUrl + "/query", t));
		if (!r) return console.error(`ArcGIS single feature load error: ${e.serviceUrl}`, n), Promise.reject(/* @__PURE__ */ Error(`ArcGIS single feature load error: ${e.serviceUrl}`));
		if (!r.data || !r.data.features) return console.error(`Could not locate feature ${e.oid} for layer ${e.serviceUrl}`), Promise.reject(/* @__PURE__ */ Error(`Could not locate feature ${e.oid} for layer ${e.serviceUrl}`));
		let i = r.data.features;
		if (i.length > 0) {
			let t, n = this.trimFeatureSetAttributes([i[0]], e.fieldsToTrim ?? [])[0];
			if (e.includeGeometry) {
				n.geometry.spatialReference = r.data.spatialReference;
				let e = h(n.geometry);
				t = this.$iApi.geo.geom.geomEsriToRamp(e);
			} else t = new mt();
			return new ft(t, "", n.attributes);
		}
		return Promise.reject(/* @__PURE__ */ Error(`Could not locate feature ${e.oid} for layer ${e.serviceUrl}`));
	}
	trimFeatureSetAttributes(e, t) {
		return t.forEach((t) => {
			e.forEach((e) => {
				typeof e.attributes[t] == "string" && (e.attributes[t] = e.attributes[t].trim());
			});
		}), e;
	}
	orderFields(e, t) {
		let n = (e, t) => e.findIndex((e) => e.name === t);
		return e.slice().sort((r, i) => {
			let a = n(t, r.name), o = n(t, i.name);
			return a === -1 && o === -1 ? n(e, r.name) - n(e, i.name) : a === -1 ? 1 : o === -1 ? -1 : a - o;
		});
	}
	applyFieldMetadata(e, t = void 0) {
		if (!t || !t.fieldInfo) {
			e.fieldList = "*";
			return;
		}
		let n = t.fieldInfo.filter((e) => e.trim).map((e) => e.name);
		if (e.fields.forEach((e) => {
			n.includes(e.name) && (e.trim = !0);
		}), t?.enforceOrder && t?.fieldInfo && t?.fieldInfo.length > 0 && (e.fields = this.orderFields(e.fields, t.fieldInfo), e.fieldList = t.fieldInfo.map((e) => e.name).join(",")), t.exclusiveFields) {
			t.fieldInfo.find((t) => t.name === e.oidField) || t.fieldInfo.push({ name: e.oidField }), e.fieldList = t.fieldInfo.map((e) => e.name).join(",");
			let n = t.fieldInfo;
			e.fields = e.fields.filter((e) => n.find((t) => t.name === e.name));
		} else e.fieldList = "*";
		t.fieldInfo.forEach((t) => {
			if (t.alias) {
				let n = e.fields.find((e) => e.name === t.name);
				n && (n.alias = t.alias);
			}
		});
	}
	fieldValidator(e, t) {
		if (e.findIndex((e) => e.name === t) === -1) {
			let n = e.find((e) => e.alias === t);
			return n ? n.name : (console.warn(`Cannot find name field in layer field list: ${t}`), "");
		} else return t;
	}
	async generateTabularAttributes(e, t) {
		return t.attLoader.tabularAttributesCache || (t.attLoader.tabularAttributesCache = this.$iApi.geo.attributes.generateTabularAttributesWorker(e, t)), t.attLoader.tabularAttributesCache;
	}
	async generateTabularAttributesWorker(e, t) {
		if (e.dataFormat === z.ESRI_RASTER) throw Error("Attempting to get attributes on a raster layer.");
		let n = await t.attLoader.getAttribs();
		if (!n.features || n.features.length === 0) return {
			columns: [],
			rows: [],
			fields: [],
			oidField: ""
		};
		let r = e.fields.filter((e) => Object.prototype.hasOwnProperty.call(n.features[0], je(e).name)).map((e) => ({
			data: je(e).name,
			title: je(e).alias || je(e).name
		})), i = n.features.map((t) => {
			let n = ae({}, t);
			return n.rvInteractive = "", n.rvSymbol = e.getIcon(t[e.oidField]), n.rvUid = e.uid, n;
		});
		return r.forEach((e) => {
			if (e.data.slice(-2) === "()") {
				let t = function() {
					return this[e.data];
				}, n = e.data.slice(0, -2);
				i.forEach((e) => {
					e[n] = t;
				});
			}
		}), {
			columns: r,
			rows: i,
			fields: e.fields,
			oidField: e.oidField
		};
	}
	fieldTypeToArcade(e) {
		return Wo.get(e);
	}
}, Ko = class {
	_attribLoader;
	_quickCache;
	get attLoader() {
		if (this._attribLoader) return this._attribLoader;
		throw console.trace(), Error("Attempted to load attributes prior to layer being loaded.");
	}
	set attLoader(e) {
		this._attribLoader = e;
	}
	get quickCache() {
		if (this._quickCache) return this._quickCache;
		throw console.trace(), Error("Attempted to access attribute cache prior to layer being loaded.");
	}
	set quickCache(e) {
		this._quickCache = e;
	}
	clearAll() {
		this._attribLoader && this._attribLoader.destroyAttribs(), this._quickCache && this._quickCache.clearAll();
	}
}, qo = class {
	loadedCount;
	loadAbortFlag;
	loadIsDone;
	constructor() {
		this.loadedCount = 0, this.loadAbortFlag = !1, this.loadIsDone = !1;
	}
}, Jo = class extends X {
	aac;
	loadPromise;
	details;
	tabularAttributesCache;
	constructor(e, t) {
		super(e), this.aac = new qo(), this.details = t;
	}
	updateFieldList(e) {
		this.details.attribs = e;
	}
	updateFieldsToTrim(e) {
		this.details.fieldsToTrim = e;
	}
	getAttribs() {
		return this.loadPromise ||= (this.aac = new qo(), this.loadPromiseGenerator()), this.loadPromise;
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
	loadPromiseGenerator() {
		return Promise.reject(/* @__PURE__ */ Error("Subclass of AttributeLoaderBase did not implement loadPromiseGenerator"));
	}
}, Yo = class extends Jo {
	constructor(e, t) {
		super(e, t);
	}
	loadPromiseGenerator() {
		return this.$iApi.geo.attributes.loadArcGisServerAttributes(this.details, this.aac);
	}
}, Xo = class extends Jo {
	constructor(e, t) {
		super(e, t);
	}
	loadPromiseGenerator() {
		return this.$iApi.geo.attributes.loadGraphicsAttributes(this.details, this.aac);
	}
}, Zo = class extends Jo {
	constructor(e, t) {
		super(e, t);
	}
	loadPromiseGenerator() {
		return this.$iApi.geo.attributes.loadCompactJsonAttributes(this.details, this.aac);
	}
}, Qo = class {
	attribs;
	geoms;
	extents;
	isPoint;
	constructor(e) {
		this.attribs = {}, this.geoms = {}, this.extents = {}, this.isPoint = e === L.POINT || e === L.MULTIPOINT;
	}
	getScaleStore(e) {
		return this.geoms[e] || (this.geoms[e] = {}), this.geoms[e];
	}
	getGeomStore(e = void 0) {
		if (this.isPoint) return this.geoms;
		if (e === void 0) throw Error("Attempted to access geometry store for non-point layer without providing a map scale");
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
	setGeom(e, t, n = void 0) {
		let r = this.getGeomStore(n);
		r[e] = t;
	}
	getExtent(e) {
		return this.extents[e];
	}
	setExtent(e, t) {
		this.extents[e] = t;
	}
	getAnyScaleGeom(e) {
		if (this.isPoint) return this.getGeom(e);
		{
			let t;
			return Object.values(this.geoms).some((n) => {
				let r = n[e];
				return r && (t = r), r;
			}), t;
		}
	}
	clearAll() {
		this.attribs = {}, this.geoms = {}, this.extents = {};
	}
}, $o = class {
	innerRenderer;
	symbolUnits;
	defaultUnit;
	type;
	falseRenderer;
	constructor(e, t, n = !1) {
		this.innerRenderer = e, this.symbolUnits = [], this.falseRenderer = n, this.type = ct.Unknown;
	}
	makeSearchParams(e) {
		return e;
	}
	searchRenderer(e) {
		let t = this.makeSearchParams(e), n = this.symbolUnits.find((e) => e.match(t));
		if (n) return n;
		if (this.defaultUnit) return this.defaultUnit;
		console.error(`renderer search could not find match for ${t}`);
		let r = new es(this);
		return r.svgCode = "", r;
	}
	getGraphicIcon(e) {
		return this.searchRenderer(e).svgCode;
	}
	getGraphicSymbol(e) {
		return this.searchRenderer(e).symbol;
	}
	getFieldDelimiter(e, t) {
		let n = "'";
		if (!t || t.length === 0) return n;
		let r = t.find((t) => t.name === e);
		return r && r.type && r.type !== "string" && (n = ""), n;
	}
	cleanFieldName(e, t) {
		if (!e) return e;
		let n = t.find((t) => t.name === e);
		if (n) return e;
		{
			let r = e.toLowerCase();
			return n = t.find((e) => e.name.toLowerCase() === r), n ? n.name : e;
		}
	}
	makeElseClause() {
		return this.falseRenderer ? "" : `(NOT (${this.symbolUnits.map((e) => e.definitionClause).join(" OR ")}))`;
	}
}, es = class {
	isDefault = !1;
	svgCode = "";
	symbol;
	definitionClause = "";
	label = "";
	parent;
	constructor(e) {
		this.parent = e, this.symbol = new re();
	}
	match(e) {
		return !!e;
	}
}, ts = class extends $o {
	constructor(e, t) {
		super(e, t), this.type = ct.Simple;
		let n = new es(this);
		n.label = e.label || "", n.symbol = e.symbol, n.definitionClause = "", this.symbolUnits.push(n);
	}
}, ns = class extends $o {
	delim;
	keyFields;
	constructor(e, t, n = !1) {
		super(e, t, n), this.type = ct.Unique, this.delim = e.fieldDelimiter || ", ";
		let r = (e) => e.replace(/'/g, "''");
		this.keyFields = [
			e.field,
			e.field2,
			e.field3
		].filter((e) => e).map((e) => this.cleanFieldName(e, t));
		let i = this.keyFields.map((e) => this.getFieldDelimiter(e, t));
		if (e.uniqueValueInfos.forEach((e) => {
			let t = new rs(this, e.value);
			if (t.label = e.label || "", t.symbol = e.symbol, !this.falseRenderer) {
				let e = t.matchValue.split(this.delim);
				t.definitionClause = `(${this.keyFields.map((t, n) => e[n] === "<Null>" ? `${t} IS NULL` : `${t} = ${i[n]}${r(e[n])}${i[n]}`).join(" AND ")})`, t.matchValue = t.matchValue.replace(/<Null>/g, "");
			}
			this.symbolUnits.push(t);
		}), e.defaultSymbol) {
			let t = new rs(this, "");
			t.isDefault = !0, t.label = e.defaultLabel || "", t.symbol = e.defaultSymbol, t.definitionClause = this.makeElseClause(), this.defaultUnit = t;
		}
	}
	makeSearchParams(e) {
		return this.keyFields.map((t) => {
			let n = e[t] === null ? "" : e[t];
			return typeof n != "string" && (n = n.toString()), n;
		}).join(this.delim);
	}
}, rs = class extends es {
	matchValue;
	constructor(e, t) {
		super(e), typeof t == "number" ? this.matchValue = t.toString() : this.matchValue = t;
	}
	match(e) {
		return this.matchValue === e;
	}
}, is = class extends $o {
	valField;
	constructor(e, t, n = !1) {
		if (super(e, t, n), this.valField = this.cleanFieldName(e.field, t), e.classBreakInfos.forEach((e, t) => {
			let n = t === 0, r = new as(this, e.minValue, e.maxValue, n);
			r.label = e.label || "", r.symbol = e.symbol, this.falseRenderer || (r.definitionClause = `(${this.valField} >${n ? "=" : ""}  ${e.minValue} AND ${this.valField} <= ${e.maxValue})`), this.symbolUnits.push(r);
		}), e.defaultSymbol) {
			let t = new as(this, 0, 0, !1);
			t.isDefault = !0, t.label = e.defaultLabel || "", t.symbol = e.defaultSymbol, t.definitionClause = this.makeElseClause(), this.defaultUnit = t;
		}
	}
	makeSearchParams(e) {
		return parseFloat(e[this.valField]);
	}
}, as = class extends es {
	minValue;
	maxValue;
	firstBreak;
	constructor(e, t, n, r) {
		super(e), this.minValue = t, this.maxValue = n, this.firstBreak = r;
	}
	match(e) {
		return this.minValue === this.maxValue ? this.maxValue === e : this.firstBreak ? this.minValue <= e && this.maxValue >= e : this.minValue < e && this.maxValue >= e;
	}
}, os = class extends X {
	constructor(e) {
		super(e);
	}
	SIMPLE = "simple";
	UNIQUE_VALUE = "unique-value";
	CLASS_BREAKS = "class-breaks";
	NONE = "none";
	CONTAINER_SIZE = 32;
	CONTENT_SIZE = 24;
	CONTENT_IMAGE_SIZE = 28;
	CONTAINER_CENTER = this.CONTAINER_SIZE / 2;
	CONTENT_PADDING = (this.CONTAINER_SIZE - this.CONTENT_SIZE) / 2;
	getGraphicIcon(e, t) {
		return t.getGraphicIcon(e);
	}
	getGraphicSymbol(e, t) {
		return t.getGraphicSymbol(e);
	}
	makeRenderer(e, t, n = !1) {
		switch (e.type) {
			case this.SIMPLE: return new ts(e, t);
			case this.CLASS_BREAKS: return new is(e, t, n);
			case this.UNIQUE_VALUE: return new ns(e, t, n);
			default: throw Error(`Unknown renderer type encountered - ${e.type}`);
		}
	}
	async generateWMSSymbology(e) {
		let t = tt(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, 0, 0), n = {
			svgcode: "",
			imgHeight: "",
			imgWidth: ""
		};
		if (e) {
			let r = await this.renderSymbologyImage(e);
			if (r) {
				n.svgcode = r;
				let e = document.createElement("span");
				e.innerHTML = r;
				let t = e.firstElementChild?.lastElementChild;
				n.imgHeight = t?.getAttribute("height") || "", n.imgWidth = t?.getAttribute("width") || "";
			} else n.svgcode = t.svg();
		} else n.svgcode = t.svg();
		return n;
	}
	listToSymbology(e, t) {
		return t.map(({ text: t, image: n }) => {
			let r = {
				name: t,
				image: n,
				svgcode: ""
			};
			return e(n).then((e) => {
				r.svgcode = e;
			}), r;
		});
	}
	listToIconSymbology(e) {
		return this.listToSymbology(this.renderSymbologyIcon, e);
	}
	listToImageSymbology(e) {
		return this.listToSymbology(this.renderSymbologyImage, e);
	}
	async renderSymbologyImage(e, t = null) {
		t === null && (t = tt(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, 0, 0));
		let n = await this.$iApi.geo.shared.convertImagetoDataURL(e);
		if (n === e) return "";
		let { loader: r } = await this.svgDrawImage(t, n);
		return t.viewbox(0, 0, r.width, r.height), t.svg();
	}
	async renderSymbologyIcon(e, t = null) {
		if (t === null) {
			let e = document.createElement("div");
			e.setAttribute("style", "opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"), document.body.appendChild(e), t = tt(e).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE);
		}
		let n = await this.$iApi.geo.shared.convertImagetoDataURL(e), { image: r } = await this.svgDrawImage(t, n);
		return r.center(this.CONTAINER_CENTER, this.CONTAINER_CENTER), this.fitInto(r, this.CONTENT_IMAGE_SIZE), t.svg();
	}
	generateLetterSvg(e, t, n = "#000") {
		e.rect(this.CONTENT_IMAGE_SIZE, this.CONTENT_IMAGE_SIZE).center(this.CONTAINER_CENTER, this.CONTAINER_CENTER).fill(n);
		let r = t[0].toUpperCase();
		e.text(r).size(23).fill("#fff").attr({
			"font-weight": "bold",
			"font-family": "Roboto"
		}).center(this.CONTAINER_CENTER, this.CONTAINER_CENTER).tspan(r).addClass("grid-icons").attr({
			dy: "29.900000000000002",
			x: "7.6875"
		});
	}
	generatePlaceholderSymbology(e, t = "#000") {
		let n = tt(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE);
		return this.generateLetterSvg(n, e, t), {
			name: e,
			svgcode: n.svg()
		};
	}
	async generateBlankSymbology() {
		return tt(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).svg();
	}
	async symbolToSvg(e) {
		let t = this, n = 1.33333, r = document.createElement("div");
		r.setAttribute("style", "opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"), document.body.appendChild(r);
		let i = tt(r).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE), a = {
			path({ size: e, path: t }) {
				return i.path(t).size(e * n);
			},
			circle({ size: e }) {
				return i.circle(e * n);
			},
			cross({ size: e }) {
				return i.path("M 0,10 L 20,10 M 10,0 L 10,20").size(e * n);
			},
			x({ size: e }) {
				return i.path("M 0,0 L 20,20 M 20,0 L 0,20").size(e * n);
			},
			triangle({ size: e }) {
				return i.path("M 20,20 L 10,0 0,20 Z").size(e * n);
			},
			diamond({ size: e }) {
				return i.path("M 20,10 L 10,0 0,10 10,20 Z").size(e * n);
			},
			square({ size: e }) {
				return i.path("M 0,0 20,0 20,20 0,20 Z").size(e * n);
			}
		}, o = {
			[it.SOLID]: "none",
			[it.NONE]: "none",
			[it.DASH]: "5.333,4",
			[it.DOT]: "1.333,4",
			[it.DASHDOT]: "5.333,4,1.333,4",
			[it.LONGDASH]: "10.666,4",
			[it.LONGDASHDOT]: "10.666,4,1.333,4",
			[it.LONGDASHDOTDOT]: "10.666,4,1.333,4,1.333,4",
			[it.SHORTDOT]: "1.333,1.333",
			[it.SHORTDASH]: "5.333,1.333",
			[it.SHORTDASHDOT]: "5.333,1.333,1.333,1.333",
			[it.SHORTDASHDOTDOT]: "5.333,1.333,1.333,1.333,1.333,1.333"
		}, s = {
			color: "#000",
			opacity: 1,
			width: 1,
			linecap: "square",
			linejoin: "miter",
			miterlimit: 4
		}, c = {
			color: [
				0,
				0,
				0,
				0
			],
			width: 0,
			style: o.none
		}, l = {
			solid: (e) => ({
				color: e.colour,
				opacity: e.opacity
			}),
			none: () => "transparent",
			horizontal: (e, t) => i.pattern(5, 5, (e) => e.line(0, 5 / 2, 5, 5 / 2)).stroke(t),
			vertical: (e, t) => i.pattern(5, 5, (e) => e.line(5 / 2, 0, 5 / 2, 5)).stroke(t),
			"forward-diagonal": (e, t) => i.pattern(5, 5, (e) => {
				e.line(0, 0, 5, 5).stroke(t), e.line(0, 0, 5, 5).move(0, 5).stroke(t), e.line(0, 0, 5, 5).move(5, 0).stroke(t);
			}),
			"backward-diagonal": (e, t) => i.pattern(5, 5, (e) => {
				e.line(5, 0, 0, 5).stroke(t), e.line(5, 0, 0, 5).move(5 / 2, 5 / 2).stroke(t), e.line(5, 0, 0, 5).move(-5 / 2, -5 / 2).stroke(t);
			}),
			cross: (e, t) => i.pattern(5, 5, (e) => {
				e.line(5 / 2, 0, 5 / 2, 5).stroke(t), e.line(0, 5 / 2, 5, 5 / 2).stroke(t);
			}),
			"diagonal-cross": (e, t) => i.pattern(7, 7, (e) => {
				e.line(0, 0, 7, 7).stroke(t), e.line(7, 0, 0, 7).stroke(t);
			})
		}, u = {
			"simple-marker"() {
				let n = f(e.color);
				e.outline = e.outline || c;
				let r = f(e.outline.color), i = d({
					color: r.colour,
					opacity: r.opacity,
					width: e.outline.width,
					dasharray: o[e.outline.style]
				}), s = a[e.style](e).fill({
					color: n.colour,
					opacity: n.opacity
				}).stroke(i).center(t.CONTAINER_CENTER, t.CONTAINER_CENTER).rotate(e.angle || 0);
				t.fitInto(s, t.CONTENT_SIZE);
			},
			"simple-line"() {
				let n = f(e.color), r = d({
					color: n.colour,
					opacity: n.opacity,
					width: e.width,
					linecap: "butt",
					dasharray: o[e.style]
				}), a = t.CONTENT_PADDING, s = t.CONTAINER_SIZE - t.CONTENT_PADDING;
				i.line(a, a, s, s).stroke(r);
			},
			esriCLS() {
				this["simple-line"]();
			},
			"simple-fill"() {
				let n = f(e.color), r = d({
					color: n.colour,
					opacity: n.opacity
				}), a = l[e.style](n, r);
				e.outline = e.outline || c;
				let s = f(e.outline.color), u = d({
					color: s.colour,
					opacity: s.opacity,
					width: e.outline.width,
					linecap: "butt",
					dasharray: o[e.outline.style]
				});
				i.rect(t.CONTENT_SIZE, t.CONTENT_SIZE).center(t.CONTAINER_CENTER, t.CONTAINER_CENTER).fill(a).stroke(u);
			},
			text() {
				t.generateLetterSvg(i, "A", "#2e8b57");
			},
			"picture-fill"() {
				let n = e.imageData ? `data:${e.contentType};base64,${e.imageData}` : e.url, r = e.width * e.xscale, a = e.height * e.yscale;
				e.outline = e.outline || c;
				let s = f(e.outline.color), l = d({
					color: s.colour,
					opacity: s.opacity,
					width: e.outline.width,
					dasharray: o[e.outline.style]
				});
				return t.$iApi.geo.shared.convertImagetoDataURL(n).then((e) => {
					let n = i.pattern(r, a, (t) => t.image(e, r, a));
					i.rect(t.CONTENT_SIZE, t.CONTENT_SIZE).center(t.CONTAINER_CENTER, t.CONTAINER_CENTER).fill(n).stroke(l);
				});
			},
			"picture-marker"() {
				let n = e.source, r = n && n.imageData ? `data:${n.contentType};base64,${n.imageData}` : e.url;
				return t.$iApi.geo.shared.convertImagetoDataURL(r).then((e) => t.svgDrawImage(i, e)).then(({ image: n }) => {
					n.center(t.CONTAINER_CENTER, t.CONTAINER_CENTER).rotate(e.angle || 0), t.fitInto(n, t.CONTENT_IMAGE_SIZE);
				});
			}
		};
		try {
			return await Promise.resolve(u[e.type]()), document.body.removeChild(r), i.svg();
		} catch (e) {
			return console.error(e), this.generateBlankSymbology();
		}
		function d(e) {
			return Object.assign({}, s, e);
		}
		function f(e) {
			return e ? {
				colour: `rgb(${e.r},${e.g},${e.b})`,
				opacity: e.a
			} : {
				colour: "rgb(0, 0, 0)",
				opacity: 0
			};
		}
	}
	async svgDrawImage(e, t, n = 0, r = 0, i = !0) {
		return new Promise((a, o) => {
			let s = e.image(t, n, r, i).loaded((e) => a({
				image: s,
				loader: e
			})).error((e) => {
				o(e), console.error(e);
			});
		});
	}
	fitInto(e, t) {
		let n = e.node.getBoundingClientRect(), r = t / Math.max(n.width, n.height);
		r < 1 && e.scale(r);
	}
	rendererToLegend(e) {
		let t, n = e.symbolUnits.slice(0);
		if (e.defaultUnit && n.push(e.defaultUnit), e.falseRenderer) t = n.map((e) => [e]);
		else {
			let e = /* @__PURE__ */ new Map();
			n.forEach((t) => {
				let n = e.get(t.label);
				n ? n.push(t) : e.set(t.label, [t]);
			}), t = [], e.forEach((e) => t.push(e));
		}
		return t.map((e) => {
			let t = e[0], n = {
				uid: this.$iApi.geo.shared.generateUUID(),
				label: t.label || "",
				definitionClause: e.length === 1 ? t.definitionClause : `(${e.map((e) => e.definitionClause).join(" OR ")})`,
				svgcode: "",
				esriStandard: !0,
				visibility: !0,
				lastVisbility: !0,
				drawPromise: this.symbolToSvg(t.symbol).then((t) => {
					n.svgcode = t, e.forEach((e) => {
						e.svgCode = t;
					});
				})
			};
			return n;
		});
	}
	async getMapServerLegend(e) {
		if (!e) throw Error("Legend server request is missing the required url.");
		let t = { query: { f: "json" } }, n = { layers: [] }, [r, i] = await Ze(ee(`${e}/legend`, t));
		return i ? i.data ? i.data : (console.error(`Error loading legend data for ${e}`), n) : (console.error(`Error loading legend for ${e}`, r), n);
	}
	async mapServerLegendToRenderer(e, t) {
		let n = e.layers.find((e) => e.layerId === t), r;
		if (n !== void 0) {
			r = {
				type: "uniqueValue",
				field: "fakefield",
				uniqueValueInfos: n.legend.map((e) => ({
					label: e.label,
					value: e.label,
					symbol: {
						type: "esriPMS",
						imageData: e.imageData,
						contentType: e.contentType
					}
				}))
			};
			let e = await K.RendererFromJson(r);
			return this.makeRenderer(e, [], !0);
		} else throw Error("attempted to make renderer from non-existing legend data");
	}
	async mapServerLegendToRendererAll(e) {
		let t = e.layers.map((e) => e.legend.map((e) => ({
			label: e.label,
			value: e.label,
			symbol: {
				type: "esriPMS",
				imageData: e.imageData,
				contentType: e.contentType
			}
		}))), n = {
			type: "uniqueValue",
			field1: "fakefield",
			uniqueValueInfos: [].concat(...t)
		}, r = await K.RendererFromJson(n);
		return this.makeRenderer(r, [], !0);
	}
	async mapServerToLocalLegend(e, t = void 0) {
		let n = await this.getMapServerLegend(e), r, i;
		return t === void 0 ? (i = 0, r = await this.mapServerLegendToRendererAll(n)) : (i = parseInt(t), r = await this.mapServerLegendToRenderer(n, i)), this.rendererToLegend(r);
	}
}, ss = class extends X {
	constructor(e) {
		super(e);
	}
	async arcGisServerQueryIds(e) {
		if (!(e.filterGeometry || e.filterSql)) return console.error("arcGisServerQueryIds called without any filter"), [];
		let t = await K.Query();
		t.returnGeometry = !1, e.filterSql && (t.where = e.filterSql), e.filterGeometry && (t.geometry = await this.queryGeometryHelper(e.filterGeometry, !1, this.$iApi.geo.map.getScale(), e.sourceSR), t.spatialRelationship = "intersects");
		let n = await K.QueryByIds(e.url, t);
		return Array.isArray(n) ? n : [];
	}
	async geoJsonQuery(e) {
		let t = await K.Query();
		if (t.returnGeometry = !!e.includeGeometry, t.outFields = ["*"], e.filterGeometry && (t.geometry = await this.queryGeometryHelper(e.filterGeometry, !0), t.spatialRelationship = "intersects"), e.filterSql && (t.where = e.filterSql), e.filterOIDs && (t.objectIds = e.filterOIDs), await e.layer.loadPromise(), !e.layer.esriLayer) throw Error("file layer being queried contains no ESRI layer");
		return (await e.layer.esriLayer.queryFeatures(t)).features.map((e, n) => {
			let r;
			return r = t.returnGeometry ? this.$iApi.geo.geom.geomEsriToRamp(e.geometry, `queryResult${n}`) : new mt(), new ft(r, "", e.attributes);
		});
	}
	async queryGeometryHelper(e, t, n, r) {
		return !t && e.type === L.EXTENT && r && !r.isEqual(e.sr) && !(n && n > 2e7 && e.sr.wkid === 3978 && r.wkid === 4326) ? (await this.$iApi.geo.proj.projectExtent(r, e)).toESRI() : e.toESRI();
	}
	makeClickBuffer(e, t = 5) {
		let n = this.$iApi.geo.map, r = n.getExtent(), i = t * (r.xmax - r.xmin) / n.getPixelWidth();
		return new St("ze_buffer", [e.x - i, e.y - i], [e.x + i, e.y + i], e.sr);
	}
}, cs = class extends X {
	attributes;
	geom;
	layer;
	map;
	proj;
	query;
	shared;
	symbology;
	constructor(e) {
		super(e), this.geom = Is.geom, this.proj = Is.proj, this.shared = Is.sharedUtils, this.map = new no(e), this.layer = new mo(e), this.attributes = new Go(e), this.query = new ss(e), this.symbology = new os(e), Array.isArray(o.request.interceptors) || (o.request.interceptors = []), o.request.interceptors.push({ before: (e) => {
			e.url.includes("?blankTile=false") && (e.url = e.url.replace("?blankTile=false", "?blankTile=true"));
		} });
	}
	set proxy(e) {
		o.request.proxyUrl = e;
	}
	get proxy() {
		return o.request.proxyUrl || "";
	}
}, ls = /* @__PURE__ */ Object.assign({
	"../fixtures/appbar/index.ts": () => import("./appbar-BkT--6u5.js"),
	"../fixtures/areas-of-interest/index.ts": () => import("./areas-of-interest-DGjHhWyc.js"),
	"../fixtures/basemap/index.ts": () => import("./basemap-CDhBOZUC.js"),
	"../fixtures/crosshairs/index.ts": () => import("./crosshairs-KQBrRXmT.js"),
	"../fixtures/details/index.ts": () => import("./details-BhiV61SP.js"),
	"../fixtures/draw/index.ts": () => import("./draw-D1pZzeri.js"),
	"../fixtures/export/index.ts": () => import("./export-DL0BGyYh.js"),
	"../fixtures/export-footnote/index.ts": () => import("./export-footnote-C4JUTMhl.js"),
	"../fixtures/export-legend/index.ts": () => import("./export-legend-B_mOnsD-.js"),
	"../fixtures/export-map/index.ts": () => import("./export-map-DCvddWjQ.js"),
	"../fixtures/export-northarrow/index.ts": () => import("./export-northarrow-Bnca-qJI.js"),
	"../fixtures/export-scalebar/index.ts": () => import("./export-scalebar-D82PydR-.js"),
	"../fixtures/export-timestamp/index.ts": () => import("./export-timestamp-rcHKcYpP.js"),
	"../fixtures/export-title/index.ts": () => import("./export-title-CA5rEtzz.js"),
	"../fixtures/extentguard/index.ts": () => import("./extentguard-Dt0y-wDY.js"),
	"../fixtures/gazebo/index.ts": () => import("./gazebo-Cq5hNS-7.js"),
	"../fixtures/geosearch/index.ts": () => import("./geosearch-fSyA68fr.js"),
	"../fixtures/grid/index.ts": () => import("./grid-6I2JZ809.js"),
	"../fixtures/help/index.ts": () => import("./help-Cqwyz9sM.js"),
	"../fixtures/hilight/index.ts": () => import("./hilight-qVE_9LWo.js"),
	"../fixtures/keyboardnav/index.ts": () => import("./keyboardnav-CLALDEwz.js"),
	"../fixtures/layer-reorder/index.ts": () => import("./layer-reorder-DUWzL_i_.js"),
	"../fixtures/legend/index.ts": () => import("./legend-J98H_K-1.js"),
	"../fixtures/mapnav/index.ts": () => import("./mapnav-DfVOleAV.js"),
	"../fixtures/metadata/index.ts": () => import("./metadata-Ds2FtG_l.js"),
	"../fixtures/northarrow/index.ts": () => import("./northarrow-asTta1Ja.js"),
	"../fixtures/overviewmap/index.ts": () => import("./overviewmap-GgxFBuBa.js"),
	"../fixtures/panguard/index.ts": () => import("./panguard-CEdowQbs.js"),
	"../fixtures/scrollguard/index.ts": () => import("./scrollguard-GjKEp_IL.js"),
	"../fixtures/settings/index.ts": () => import("./settings-D11amDEu.js"),
	"../fixtures/snowman/index.ts": () => import("./snowman-DEuwwMDn.js"),
	"../fixtures/swipe/index.ts": () => import("./swipe-DWQX-nSh.js"),
	"../fixtures/wizard/index.ts": () => import("./wizard-ChQNICHE.js")
}), us = class extends X {
	constructor(e) {
		super(e);
	}
	exists(e) {
		return e in Jt(this.$vApp.$pinia).items;
	}
	async add(e, t) {
		let n;
		if (e in Jt(this.$vApp.$pinia).items) return this.get(e);
		if (t) {
			if (typeof t != "function") throw Error("malformed fixture constructor");
			n = ds.updateBaseToInstance(new t(), e, this.$iApi);
		} else {
			let t = (await ls[`../fixtures/${e}/index.ts`]()).default;
			n = new t(e, this.$iApi);
		}
		return Jt(this.$vApp.$pinia).addFixture(n), this.$iApi.event.emit(Z.FIXTURE_ADDED, n), this.$iApi.geo.map.created && n.initialized?.(), n;
	}
	remove(e) {
		let t = this.get(e);
		if (!t) throw Error(`Could not find fixture ${e} for removal`);
		return Jt(this.$vApp.$pinia).removeFixture(t), this.$iApi.event.emit(Z.FIXTURE_REMOVED, t), t;
	}
	flush() {
		let e = Jt(this.$vApp.$pinia);
		Object.keys(e.items).forEach((e) => {
			let t = this.get(e);
			t?.persist && typeof t?.removed == "function" ? t.removed() : t && this.remove(e);
		});
	}
	restore() {
		let e = Jt(this.$vApp.$pinia);
		Object.keys(e.items).forEach((t) => {
			let n = e.items[t];
			typeof n.added == "function" && n.added(), this.$iApi.geo.map.created && typeof n.initialized == "function" && n.initialized();
		});
	}
	get(e) {
		let t = [];
		typeof e == "string" ? t.push(e) : Array.isArray(e) ? t.push(...e) : t.push(e.id);
		let n = t.map((e) => {
			let t = Jt(this.$vApp.$pinia).items[e];
			if (t) return t;
		});
		return n.length === 1 ? n[0] : n;
	}
	isLoaded(e) {
		let t = Jt(this.$vApp.$pinia), n = Array.isArray(e) ? e : [e];
		n.forEach((e) => {
			t.loadPromises[e] === void 0 && t.addLoadPromise(e);
		});
		let r = t.getLoadPromises(n);
		return Array.isArray(e) ? Promise.all(r) : r[0];
	}
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
		let n = t(this.$vApp.$pinia);
		return n.startingFixtures = e, Promise.all(e.map((e) => this.add(e)));
	}
}, ds = class e extends X {
	static updateBaseToInstance(t, n, r) {
		let i = new e(n, r);
		return Object.defineProperties(t, {
			id: { value: n },
			$iApi: { value: r },
			persist: { value: t.persist ?? !0 },
			$vApp: { get() {
				return i.$vApp;
			} },
			remove: { value: i.remove },
			extend: { value: i.extend },
			config: { get() {
				return i.config;
			} },
			mount: { value: i.mount }
		}), t;
	}
	id;
	persist;
	constructor(e, t) {
		super(t), this.id = e, this.persist = !0;
	}
	remove() {
		return this.$iApi.fixture.remove(this), this;
	}
	extend(e, t = {}) {
		let n = T({
			extends: e,
			iApi: this.$iApi,
			data() {
				return { ...t };
			}
		}), r = me(n), { el: i } = this.mount(n, {
			props: { ...t.propsData },
			app: r
		});
		return i;
	}
	mount(e, { props: t, children: n, element: r, app: i } = {}) {
		let a = r, o = ve(e, t, n);
		return i && i._context && (o.appContext = i._context), a ||= document.createElement("div"), De(o, a), {
			vNode: o,
			destroy: () => {
				a && De(null, a), a = null, o = null;
			},
			el: a
		};
	}
	get config() {
		return t(this.$vApp.$pinia).config.fixtures[this.id];
	}
	getLayerFixtureConfig(e) {
		return this.getLayerFixtureConfigs()[e];
	}
	getLayerFixtureConfigs() {
		let e = {}, t = (n, r = void 0) => {
			if (n.fixtures && n.fixtures[this.id] !== void 0) {
				let t = n.id;
				r !== void 0 && (t = this.$iApi.geo.layer.sublayerId(r.id, n.index)), e[t] = n.fixtures[this.id];
			}
			n.sublayers && n.sublayers.forEach((e) => t(e, n));
		};
		return this.$iApi.geo.layer.allLayers().forEach((e) => t(e.config)), e;
	}
	handlePanelWidths(e) {
		if (this.config?.panelWidth) {
			let t = {};
			if (typeof this.config.panelWidth == "number") e.forEach((e) => {
				t[e] = this.config.panelWidth;
			});
			else {
				this.config.panelWidth.default && e.forEach((e) => {
					t[e] = this.config.panelWidth.default;
				});
				for (let e in this.config.panelWidth) e != "default" && (t[e] = this.config.panelWidth[e]);
			}
			for (let e in t) {
				let n = this.$iApi.panel.get(e);
				this.$iApi.panel.setStyle(n, { "flex-basis": `${t[e]}px` });
			}
		}
	}
	handlePanelTeleports(e) {
		if (this.config?.panelTeleport) {
			let t = ln(this.$vApp.$pinia), n = !!this.config.panelTeleport.target;
			e.forEach((e) => {
				t.items[e].teleport = n ? this.config.panelTeleport : this.config.panelTeleport[e], t.items[e].style.width = "100%";
			});
		}
	}
}, fs = class extends X {
	panelStore = ln(this.$vApp.$pinia);
	updateHTML(e, t, n) {
		let r = this.get(e), i = n ? r.screens[n] : Object.values(r.screens)[0];
		if (Bt(i)) for (let e in t) i[e].innerHTML = t[e] instanceof HTMLElement ? t[e].outerHTML : t[e];
		else console.error("Screen must be an HTML object");
	}
	registerHTMLConfig(e) {
		for (let t in e.content) if (typeof e.content[t] == "string") {
			let n = document.createElement("div");
			n.innerHTML = e.content[t], e.content[t] = n;
		}
		let t = {};
		return t[e.id] = {
			screens: {},
			style: e.style ?? { width: "350px" },
			alertName: e.alertName
		}, t[e.id].screens[e.id] = e.content, t;
	}
	registerHTML(e) {
		let t = this.get(e.id);
		if (t) return console.error("Panel already exist"), t;
		let n = this.registerHTMLConfig(e), r = { i18n: { messages: e.i18nMap } };
		return this.register(n, r);
	}
	register(e, t) {
		let n = ps(e) ? { [e.id]: e.config } : e;
		if (t) {
			let e = t.i18n || {}, n = this.$iApi.$i18n;
			Object.entries(e.messages || {}).forEach((e) => n.mergeLocaleMessage(...e)), Object.entries(e.dateTimeFormats || {}).forEach((e) => n.mergeDateTimeFormat(...e)), Object.entries(e.numberFormats || {}).forEach((e) => n.mergeNumberFormat(...e));
		}
		let r = Object.entries(n).reduce((e, [t, n]) => (e.push(new vs(this.$iApi, t, n)), e), []);
		return r.forEach((e) => this.panelStore.registerPanel(e)), r.length === 1 ? r[0] : r.reduce((e, t) => (e[t.id] = t, e), {});
	}
	async isRegistered(e) {
		let t = Array.isArray(e) ? e : [e];
		t.forEach((e) => {
			this.panelStore.regPromises[e] === void 0 && this.panelStore.addRegPromise(e);
		});
		let n = this.panelStore.getRegPromises(t);
		return Array.isArray(e) ? Promise.all(n) : n[0];
	}
	allRegistered() {
		return Object.keys(this.panelStore.items);
	}
	remove(e) {
		let t = this.get(e);
		t && (t.isOpen && this.close(t), this.panelStore.removePanel(t));
	}
	get(e) {
		let t = typeof e == "string" ? e : e.id;
		return this.panelStore.items[t];
	}
	open(e) {
		let t, n, r;
		if (typeof e == "string" || e instanceof vs ? t = this.get(e) : (t = this.get(e.id), {screen: n, props: r} = e), !t) return t;
		if (t.isOpen && !t.isVisible) t.minimize();
		else if (t.isOpen) return t;
		return n || (t.route && !r ? {screen: n, props: r} = t.route : n = Object.keys(t.screens).pop()), this.show(t, {
			screen: n,
			props: r
		}) ? (this.panelStore.openPanel(t), this.$iApi.updateAlert(this.$iApi.$i18n.t("panels.alert.open", { name: t.alertName ? this.$iApi.$i18n.t(t.alertName) : t.id })), this.$iApi.event.emit(Z.PANEL_OPENED, t)) : console.error(`Failed to open ${t.id} panel.`), t;
	}
	get opened() {
		return this.panelStore.orderedItems.concat(this.panelStore.teleported);
	}
	get visible() {
		return this.panelStore.visible.concat(this.panelStore.teleported);
	}
	close(e) {
		let t = this.get(e);
		if (!t) return t;
		let n = this.visible.slice().indexOf(t), r = this.$vApp.$el.querySelector("[focus-container]");
		return t.isPinned && t.pin(!1), this.panelStore.closePanel(t), this.$iApi.updateAlert(this.$iApi.$i18n.t("panels.alert.close", { name: t.alertName ? this.$iApi.$i18n.t(t.alertName) : t.id })), this.$iApi.event.emit(Z.PANEL_CLOSED, t), this.$vApp.$nextTick(() => {
			let e = n > 0 ? this.visible[n - 1] : this.visible[0];
			e ? this.focus(e) : r?.focus();
		}), t;
	}
	minimize(e) {
		let t = this.get(e);
		return t && (t.isPinned && t.pin(!1), this.panelStore.closePanel(t), this.$iApi.updateAlert(this.$iApi.$i18n.t("panels.alert.minimize", { name: t.alertName ? this.$iApi.$i18n.t(t.alertName) : t.id })), this.$iApi.event.emit(Z.PANEL_MINIMIZED, t), t);
	}
	move(e, t) {
		let n = this.get(e);
		return n && (this.panelStore.movePanel(n, t), n);
	}
	toggle(e, t) {
		let n;
		return n = typeof e == "string" || e instanceof vs ? this.get(e) : this.get(e.id), n && (t = t === void 0 ? !n.isVisible : t, t === n.isVisible ? n : t ? this.open(e) : this.close(n));
	}
	toggleMinimize(e, t) {
		let n;
		return n = typeof e == "string" || e instanceof vs ? this.get(e) : this.get(e.id), n && (t = t === void 0 ? !n.isVisible : t, t === n.isVisible ? n : t ? this.open(n) : this.minimize(n));
	}
	pin(e, t) {
		let n = this.get(e);
		return !n || (t = t === void 0 ? !n.isPinned : t, !n.isPinned && !t) || (this.panelStore.pinned = t ? n : void 0), n;
	}
	get pinned() {
		return this.panelStore.pinned || void 0;
	}
	show(e, t) {
		let n = this.get(e);
		if (!n) return n;
		if (n.screens[t.screen]) {
			if (n.screens[t.screen]?.props) {
				let e = Object.keys(n.screens[t.screen]?.props).filter((e) => e !== "panel"), r = t.props ? Object.keys(t.props) : [];
				for (let i = 0; i < e.length; i++) if (!r.includes(e[i]) && n.screens[t.screen].props[e[i]].required) return;
			}
			return t.screen in this.$element._context.components || n.registerScreen(t.screen), n.teleport && (t.props = {
				header: !!n.teleport?.showHeader,
				...t.props
			}), this.panelStore.items[n.id].route = t, n;
		}
	}
	setStyle(e, t, n = !1) {
		let r = this.get(e);
		return r && (this.panelStore.items[r.id].style = n ? t : {
			...r.style,
			...t
		}, r);
	}
	expand(e, t) {
		let n = this.get(e);
		return n && (this.panelStore.items[n.id].expanded = t === void 0 ? !n.expanded : t, n);
	}
	focus(e) {
		let t = this.get(e);
		t && this.$vApp.$el.querySelector(`.panel-container [data-cy="${t.id}"] [focus-container], .panel-container [data-cy="${t.id}"] [focus-list]`)?.focus();
	}
};
function ps(e) {
	return e.id !== void 0 && typeof e.id == "string" && e.config !== void 0;
}
//#endregion
//#region src/components/panel-stack/screen-spinner.vue
var ms = {};
function hs(e, t) {
	let n = A("panel-screen");
	return O(), b(n, {
		header: !1,
		class: "screen-spinner"
	}, {
		content: P(() => [...t[0] ||= [C("div", { class: "loader" }, null, -1)]]),
		_: 1
	});
}
var gs = /* @__PURE__ */ n(ms, [["render", hs], ["__scopeId", "data-v-a3c61802"]]), _s = /* @__PURE__ */ Object.assign({
	"../fixtures/areas-of-interest/screen.vue": () => import("./screen-hGOxANHi.js"),
	"../fixtures/basemap/screen.vue": () => import("./screen-BX74V795.js"),
	"../fixtures/export/screen.vue": () => import("./screen-CB3DhZmc.js"),
	"../fixtures/geosearch/screen.vue": () => import("./screen-nb-CAq-I.js"),
	"../fixtures/grid/screen.vue": () => import("./screen-I_ofxZgx.js"),
	"../fixtures/help/screen.vue": () => import("./screen-6l0U8Ho8.js"),
	"../fixtures/layer-reorder/screen.vue": () => import("./screen-BhZ1oclB.js"),
	"../fixtures/legend/screen.vue": () => import("./screen-CDPrgP5d.js"),
	"../fixtures/metadata/screen.vue": () => import("./screen-CIdvB1qs.js"),
	"../fixtures/settings/screen.vue": () => import("./screen-DAKX2Xgi.js"),
	"../fixtures/wizard/screen.vue": () => import("./screen-BWbU1-7S.js")
}), vs = class extends X {
	id;
	screens;
	loadedScreens = [];
	alertName;
	teleport;
	controls;
	button;
	isScreenLoaded(e) {
		return this.loadedScreens.indexOf(e) !== -1;
	}
	registerScreen(e) {
		let t = this.screens[e], n;
		if (zt(t) || Rt(t)) n = t, this.loadedScreens.push(e);
		else if (Bt(t)) n = { template: `<panel-screen :panel="this" :screenId="'${e}'">
                           </panel-screen>` };
		else {
			let r;
			r = typeof t == "string" ? _s[`../fixtures/${t}`]() : t();
			let i = new Promise((t, n) => {
				r.then((n) => {
					this.loadedScreens.push(e), t(Vt(n) ? n.default : n);
				}), r.catch((e) => n(e));
			});
			n = ge({
				loader: () => i,
				loadingComponent: gs,
				delay: 200
			});
		}
		this.$iApi.$element.component(e, n);
	}
	style;
	expanded;
	get width() {
		if (!(!this.style.width || this.style.width.slice(-2) !== "px")) return parseInt(this.style.width);
	}
	route;
	constructor(e, t, n) {
		if (super(e), {id: this.id, screens: this.screens, style: this.style, expanded: this.expanded, alertName: this.alertName, button: this.button, controls: this.controls} = {
			id: t,
			style: {},
			expanded: !1,
			controls: {
				expand: !1,
				...n.controls
			},
			...n
		}, Object.keys(this.screens).length === 0) throw Error("panel must have at least a single screen");
		this.route = { screen: Object.keys(this.screens).pop() }, this.style["flex-basis"] || (this.style["flex-basis"] = this.style.width || "350px"), this.style.width = "80%";
	}
	open(e) {
		return e === void 0 ? this.$iApi.panel.open(this) : this.$iApi.panel.open({
			id: this.id,
			...typeof e == "string" ? { screen: e } : e
		}), this;
	}
	get isOpen() {
		return this.$iApi.panel.opened.indexOf(this) !== -1;
	}
	get isVisible() {
		return this.$iApi.panel.visible.indexOf(this) !== -1;
	}
	close() {
		return this.$iApi.panel.close(this), this;
	}
	minimize() {
		return this.$iApi.panel.minimize(this), this;
	}
	move(e) {
		return this.$iApi.panel.move(this, e), this;
	}
	get isLeftMostPanel() {
		if (this.$iApi.panel.visible.length > 0) {
			for (let e of this.$iApi.panel.visible) if (!e.teleport) return this.id === e.id;
		}
		return !1;
	}
	get isRightMostPanel() {
		if (this.$iApi.panel.visible.length > 0) {
			for (let e = this.$iApi.panel.visible.length - 1; e >= 0; e--) if (!this.$iApi.panel.visible[e].teleport) return this.id === this.$iApi.panel.visible[e].id;
		}
		return !1;
	}
	remove() {
		return this.$iApi.panel.remove(this), this;
	}
	toggle(e) {
		return e === void 0 ? this.$iApi.panel.toggle(this, !this.isOpen) : typeof e == "boolean" ? e !== this.isOpen && this.$iApi.panel.toggle(this, e) : this.$iApi.panel.toggle({
			id: this.id,
			screen: e.screen,
			props: e.props
		}, e.toggle === void 0 ? !this.isOpen : e.toggle), this;
	}
	toggleMinimize(e) {
		return e === void 0 || typeof e == "boolean" ? this.$iApi.panel.toggleMinimize(this, e) : this.$iApi.panel.toggleMinimize({
			id: this.id,
			screen: e.screen,
			props: e.props
		}, e.toggle === void 0 ? !this.isOpen : e.toggle), this;
	}
	pin(e) {
		return e = e === void 0 ? !this.isPinned : e, this.$iApi.panel.pin(this, e), this;
	}
	get isPinned() {
		return !!this.$iApi.panel.pinned && this.$iApi.panel.pinned.id === this.id;
	}
	show(e) {
		let t = typeof e == "string" ? { screen: e } : e;
		return this.route = t, this.$iApi.panel.show(this, t), this;
	}
	setStyles(e, t = !1) {
		return this.$iApi.panel.setStyle(this, e, t), this;
	}
	expand(e) {
		return this.$iApi.panel.expand(this, e), this;
	}
}, ys = class extends X {
	constructor(e) {
		super(e);
	}
	async easyLayer(e, t) {
		let n = this.$iApi.geo.layer.createLayer(e);
		await this.$iApi.geo.map.addLayer(n);
		let r = this.$iApi.fixture.get("legend");
		return r && (t ? r.addItem(t) : await r.addLayerItem(n)), n;
	}
};
//#endregion
//#region src/api/config-upgrade.ts
function bs(e) {
	let t = {};
	(Array.isArray(e) ? e : [e]).forEach((e) => {
		e.language ||= (console.warn("RAMP2 config with no language supplied. Defaulting to English"), "en");
		let n = xs(e);
		t[e.language] = n;
	});
	let n = Object.entries(t).map((e) => {
		let t = e[1].fixturesEnabled;
		return delete e[1].fixturesEnabled, t;
	}), r = !1, i = n.reduce((e, t) => e.filter((e) => {
		let n = t.includes(e);
		return r ||= !n, n;
	}));
	return r && console.warn("Configs attempted to load different sets of fixtures. Only common fixtures will be loaded (all configs must load the same fixtures)."), i.push("grid", "crosshairs", "scrollguard", "panguard", "wizard", "layer-reorder", "details"), {
		startingFixtures: i,
		configs: t
	};
}
function xs(e) {
	let t = {
		version: "4.0",
		fixtures: {},
		layers: [],
		map: {},
		panels: { open: [] },
		system: {
			animate: !0,
			exposeOid: !1,
			exposeMeasurements: !0
		},
		fixturesEnabled: []
	};
	return Os(e.services, t), Ss(e.map, t), ks(e.ui, t), e.plugins && As(e.plugins, t), t;
}
function Ss(e, t) {
	if (e.layers && e.layers.forEach((e) => {
		t.layers.unshift(Ts(e));
	}), e.initialBasemapId && (t.map.initialBasemapId = e.initialBasemapId), e.components) {
		if (e.components.geoSearch && (e.components.geoSearch.enabled && t.fixturesEnabled.push("geosearch"), e.components.geoSearch.showGraphic !== void 0 && console.warn("showGraphic property provided in geoSearch map component cannot be mapped and will be skipped."), e.components.geoSearch.showInfo !== void 0 && console.warn("showInfo property provided in geoSearch map component cannot be mapped and will be skipped.")), e.components.overviewMap && e.components.overviewMap.enabled && (t.fixtures.overviewmap || (t.fixtures.overviewmap = { basemaps: {} }, t.fixturesEnabled.push("overviewmap")), t.fixtures.overviewmap.startMinimized = !e.components.overviewMap.initiallyExpanded, t.fixtures.overviewmap.expandFactor = e.components.overviewMap.expandFactor ?? 1.5), e.components.northArrow && e.components.northArrow.enabled) {
			let n = {};
			e.components.northArrow.arrowIcon && (n.arrowIcon = e.components.northArrow.arrowIcon), e.components.northArrow.poleIcon && (n.poleIcon = e.components.northArrow.poleIcon), n && (t.fixtures.northarrow = n, t.fixturesEnabled.push("northarrow"));
		}
		if (e.components.scaleBar && e.components.scaleBar.enabled) {
			switch (t.map.caption = {
				mapCoords: { disabled: !1 },
				scaleBar: {
					disabled: !1,
					imperialScale: e?.components?.scaleBar?.scalebarUnit === "english"
				}
			}, e.components?.mouseInfo?.spatialReference?.wkid) {
				case 4326:
					t.map.caption.mapCoords.formatter = "LAT_LONG_DMS";
					break;
				case 3978:
					t.map.caption.mapCoords.formatter = "CANADA_ATLAS_LAMBERT";
					break;
				case 102100:
					t.map.caption.mapCoords.formatter = "WEB_MERCATOR";
					break;
				default:
					t.map.caption.mapCoords.formatter = "LAT_LONG_DMS";
					break;
			}
			e.components.scaleBar.attachTo && console.warn("attachTo property provided in scaleBar map component cannot be mapped and will be skipped.");
		}
		e.components.basemap && e.components.basemap.enabled && t.fixturesEnabled.push("basemap");
	}
	e.extentSets && (t.map.extentSets = [], e.extentSets.forEach((e) => {
		let n = {
			id: e.id,
			default: {
				xmin: e.default.xmin,
				xmax: e.default.xmax,
				ymin: e.default.ymin,
				ymax: e.default.ymax,
				spatialReference: e.spatialReference
			}
		};
		e.full && (n.full = {
			xmin: e.full.xmin,
			xmax: e.full.xmax,
			ymin: e.full.ymin,
			ymax: e.full.ymax,
			spatialReference: e.spatialReference
		}), e.maximum && (n.maximum = {
			xmin: e.maximum.xmin,
			xmax: e.maximum.xmax,
			ymin: e.maximum.ymin,
			ymax: e.maximum.ymax,
			spatialReference: e.spatialReference
		}), t.map.extentSets.push(n);
	})), e.lodSets && (t.map.lodSets = e.lodSets), e.tileSchemas && (t.map.tileSchemas = [], e.tileSchemas.forEach((e) => {
		let n = {
			id: e.id,
			name: e.name,
			extentSetId: e.extentSetId,
			lodSetId: e.lodSetId,
			thumbnailTileUrls: [],
			hasNorthPole: e.hasNorthPole || !1
		};
		e.overviewUrl && (t.fixtures.overviewmap || (t.fixtures.overviewmap = { basemaps: {} }, t.fixturesEnabled.push("overviewmap")), t.fixtures.overviewmap.basemaps[e.id] = {
			id: e.overviewUrl.id || `overviewmap-basemap-${e.id}`,
			tileSchemaId: e.id,
			layers: [{
				id: e.overviewUrl.id || `overviewmap-basemap-${e.id}-0`,
				layerType: e.overviewUrl.layerType === "esriDynamic" ? R.MAPIMAGE : R.TILE,
				url: e.overviewUrl.url,
				opacity: e.overviewUrl.opacity ?? 1
			}]
		}), t.map.tileSchemas.push(n);
	})), e.baseMaps && (t.map.basemaps = [], e.baseMaps.forEach((e) => {
		let n = {
			id: e.id,
			tileSchemaId: e.tileSchemaId,
			name: e.name,
			description: e.description,
			altText: e.altText,
			thumbnailUrl: e.thumbnailUrl,
			layers: []
		};
		e.attribution && (n.attribution = { text: {} }, e.attribution.text && (n.attribution.text.disabled = !e.attribution.text.enabled, n.attribution.text.value = e.attribution.text.value)), e.layers.forEach((t, r) => {
			let i = {
				id: t.id || `${e.id}-${r}`,
				layerType: t.layerType === "esriDynamic" ? R.MAPIMAGE : R.TILE,
				url: t.url,
				opacity: t.opacity ?? 1
			};
			n.layers.push(i);
		}), t.map.basemaps.push(n);
	})), e.legend && (t.fixturesEnabled.push("legend"), e.legend.type === "autopopulate" ? (t.fixtures.legend = { root: {
		name: "I'm root",
		children: []
	} }, t.layers && t.layers.toReversed().forEach((e) => {
		if (e.type === "esri-map-image" || e.type === "ogc-wms") {
			let n = {
				name: e.name ?? `${e.id} Group`,
				children: []
			};
			e.sublayers.forEach((t) => {
				let r = { layerId: e.id };
				t.name && (r.name = t.name), t.controls && (r.controls = t.controls), t.disabledControls && (r.disabledControls = t.disabledControls), e.type === "esri-map-image" ? r.sublayerIndex = t.index : (r.sublayerId = t.id, console.warn(`sublayerId property defined in legend entry ${r.layerId} is currently not supported.`)), n.children.push(r);
			}), t.fixtures.legend.root.children.push(n);
		} else {
			let n = { layerId: e.id };
			e.controls && (n.controls = e.controls), e.disabledControls && (n.disabledControls = e.disabledControls), t.fixtures.legend.root.children.push(n);
		}
	})) : t.fixtures.legend = { root: Cs(e.legend.root) });
}
function Cs(e) {
	let t = {
		name: e.name,
		children: []
	};
	e.hidden !== void 0 && (t.hidden = e.hidden), e.expanded !== void 0 && (t.expanded = e.expanded);
	let n = [
		"identify",
		"opacity",
		"reload",
		"remove",
		"settings",
		"symbology",
		"visibility"
	];
	return e.controls && e.controls.length > 0 && (t.controls = Ds(e.controls, n), e.controls.includes("visibility") && t.controls.push("visibilityButton"), (e.controls.length !== 1 || e.controls[0] !== "visibility") && console.warn("Legend entry groups currently support only the visibility control. All other controls are currently not supported."), t.controls.push("expandButton")), e.disabledControls && e.disabledControls.length > 0 && (t.disabledControls = Ds(e.disabledControls, n), e.disabledControls.includes("visibility") && t.disabledControls.push("visibilityButton"), (e.disabledControls.length !== 1 || e.disabledControls[0] !== "visibility") && console.warn("Legend entry groups currently support only the visibility control. All other controls are currently not supported.")), e.children.forEach((e) => {
		if (e.layerId) t.children.push(ws(e));
		else if (e.infoType) e.infoType === "unboundLayer" ? console.warn(`unboundLayer infoType in infoSection in children list of legend entry group ${t.name} cannot be mapped and will be skipped.`) : (t.children.push({
			infoType: e.infoType,
			content: e.content
		}), e.export !== void 0 && console.warn(`export property in infoSection in children list of legend entry group ${t.name} cannot be mapped and will be skipped.`));
		else if (e.exclusiveVisibility) {
			let n = {
				name: "Visibility Set",
				children: [],
				exclusive: !0
			};
			e.collapse !== void 0 && console.warn(`collapse property in visibilitySet in children list of legend entry group ${t.name} cannot be mapped and will be skipped.`), e.exclusiveVisibility.forEach((e) => {
				e.layerId ? n.children.push(ws(e)) : n.children.push(Cs(e));
			}), t.children.push(n);
		} else t.children.push(Cs(e));
	}), t;
}
function ws(e) {
	let t = e, n = [
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
	return e.controls && e.controls.length > 0 && (t.layerControls = Ds(e.controls, n), t.layerControls.push("symbology")), e.disabledControls && e.disabledControls.length > 0 && (t.disabledLayerControls = Ds(e.disabledControls, n)), e.controlledIds && (console.warn(`controlledIds property defined in legend entry ${e.layerId} cannot be mapped and will be skipped.`), delete t.controlledIds), e.entryIndex && (t.sublayerIndex = e.entryIndex, delete e.entryIndex), e.entryId && console.warn(`entryId property defined in legend entry ${e.layerId} cannot be mapped and will be skipped.`), t;
}
function Ts(e) {
	let t = Es(e);
	switch (t.id = e.id, t.url = e.url, e.refreshInterval && (t.refreshInterval = e.refreshInterval, console.warn("Property refreshInterval in layer is currently not supported.")), e.expectedResponseTime && (t.expectedLoadTime = e.expectedResponseTime), e.metadataUrl && (t.metadata = { url: e.metadataUrl }), e.catalogueUrl && (t.catalogueUrl = e.catalogueUrl), e.enableStructuredDelete !== void 0 && console.warn(`enableStructuredDelete property provided in layer ${e.id} cannot be mapped and will be skipped.`), e.tooltipField && (t.maptipField = e.tooltipField), e.tolerance && (t.mouseTolerance = e.tolerance, e.layerType === "esriDynamic" && (t.touchTolerance = e.tolerance + 10)), e.customRenderer && (t.customRenderer = e.customRenderer), e.layerType) {
		case "esriDynamic":
			t.layerType = "esri-map-image", e.singleEntryCollapse !== void 0 && (t.singleEntryCollapse = e.singleEntryCollapse), e.imageFormat && (t.imageFormat = e.imageFormat), e.layerEntries && (t.sublayers = [], e.layerEntries.forEach((e) => {
				let n = Es(e);
				n.index = e.index, t.sublayers.push(n);
			}));
			break;
		case "esriFeature":
			t.layerType = "esri-feature", e.fileType && (t.layerType = e.fileType === "shapefile" ? "file-shape" : `file-${e.fileType}`, e.colour && (t.colour = e.colour), e.latField && (t.latField = e.latField), e.longField && (t.longField = e.longField));
			break;
		case "ogcWfs":
			t.layerType = "ogc-wfs", e.colour && (t.colour = e.colour), e.xyInAttribs !== void 0 && (t.xyInAttribs = e.xyInAttribs);
			break;
		case "ogcWms":
			t.layerType = "ogc-wms", e.suppressGetCapabilities && console.warn(`suppressGetCapabilities property provided in layer ${e.id} cannot be mapped and will be skipped.`), e.featureInfoMimeType && (e.featureInfoMimeType === "text/html;fgpv=summary" ? t.featureInfoMimeType = "text/html" : t.featureInfoMimeType = e.featureInfoMimeType), e.legendMimeType && console.warn(`legendMimeType property provided in layer ${e.id} cannot be mapped and will be skipped.`), e.layerEntries && (t.sublayers = [], e.layerEntries.forEach((n) => {
				let r = Es(n);
				r.id = n.id, n.currentStyle && (r.currentStyle = n.currentStyle, console.warn(`currentStyle property provided in layer entry ${n.id} of layer ${e.id} is currently not supported.`)), n.allStyles && console.warn(`allStyles property provided in layer entry ${n.id} of layer ${e.id} cannot be mapped and will be skipped.`), t.sublayers.push(r);
			}));
			break;
		case "esriImage":
			t.layerType = "esri-imagery";
			break;
		case "esriTile":
			t.layerType = "esri-tile";
			break;
		default: console.warn(`Unhandled layer type in ramp 2 config ${e.layerType}`);
	}
	return e.details && console.warn(`Details config provided in layer ${e.id} cannot be mapped and will be skipped.`), t;
}
function Es(e) {
	let t = {};
	e.name && (t.name = e.name), e.nameField && (t.nameField = e.nameField), e.extent && (t.extent = e.extent);
	let n = [
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
	return e.controls && e.controls.length > 0 && (t.controls = Ds(e.controls, n), t.controls.push("symbology")), e.disabledControls && e.disabledControls.length > 0 && (t.disabledControls = Ds(e.disabledControls, n)), e.state && (t.state = {
		opacity: e.state.opacity ?? 1,
		visibility: e.state.visibility ?? !0,
		identify: e.state.query ?? !0,
		maptips: e.state.hovertips ?? !0
	}, e.state.snapshot !== void 0 && console.warn(`snapshot property provided in initialLayer settings in layer ${e.id} cannot be mapped and will be skipped.`), e.state.boundingBox !== void 0 && console.warn(`boundingBox property provided in initialLayer settings in layer ${e.id} cannot be mapped and will be skipped.`)), e.stateOnly !== void 0 && (t.cosmetic = e.stateOnly), e.initialFilteredQuery && (t.initialFilteredQuery = e.initialFilteredQuery), js(e, t), e.toggleSymbology !== void 0 && console.warn(`toggleSymbology property provided in layer ${e.id} cannot be mapped and will be skipped.`), e.table && (t.fixtures = { grid: {} }, e.table.title && (t.fixtures.grid.title = e.table.title), e.table.description && console.warn(`description property provided in table property in layer ${e.id} cannot be mapped and will be skipped.`), e.table.maximize !== void 0 && console.warn(`maximize property provided in table property in layer ${e.id} cannot be mapped and will be skipped.`), e.table.search && (e.table.search.enabled && (t.fixtures.grid.search = e.table.search.enabled), e.table.search.value && (t.fixtures.grid.searchFilter = e.table.search.value)), e.table.lazyFilter !== void 0 && console.warn(`lazyFilter property provided in table property in layer ${e.id} cannot be mapped and will be skipped.`), e.table.applyMap !== void 0 && (t.fixtures.grid.applyMap = e.table.applyMap), e.table.showFilter !== void 0 && (t.fixtures.grid.showFilter = e.table.showFilter), e.table.filterByExtent !== void 0 && (t.fixtures.grid.filterByExtent = e.table.filterByExtent), e.table.searchStrictMatch !== void 0 && console.warn(`searchStrictMatch property provided in table property in layer ${e.id} cannot be mapped and will be skipped.`), e.table.printEnabled !== void 0 && console.warn(`printEnabled property provided in table property in layer ${e.id} cannot be mapped and will be skipped.`), e.table.columns && (t.fixtures.grid.columns = [], e.table.columns.forEach((n) => {
		let r = { field: n.data };
		n.title && (r.title = n.title), n.description && console.warn(`description property provided in column property in table property in layer ${e.id} cannot be mapped and will be skipped.`), n.visible !== void 0 && (r.visible = n.visible), n.width && (r.width = n.width), n.sort && (r.sort = n.sort), n.searchable !== void 0 && (r.searchable = n.searchable), n.filter && (r.filter = n.filter), t.fixtures.grid.columns.push(r);
	}))), t;
}
function Ds(e, t) {
	let n = [];
	return e.forEach((e) => {
		t.includes("identify") && e === "query" ? n.push("identify") : t.includes("datatable") && e === "data" ? n.push("datatable") : t.includes(e) ? n.push(e) : console.warn(`Ignored invalid control: ${e}`);
	}), n;
}
function Os(e, t) {
	e && (e.search && (t.fixtures.geosearch = {}, t.fixtures.geosearch.serviceUrls = {
		geoNames: e.search.serviceUrls.geoNames,
		geoLocation: e.search.serviceUrls.geoLocation,
		geoProvince: e.search.serviceUrls.provinces,
		geoTypes: e.search.serviceUrls.types
	}, e.search.serviceUrls.geoSuggest && console.warn("geoSuggest property provided in serviceUrls of search service cannot be mapped and will be skipped."), e.search.settings && (t.fixtures.geosearch.settings = e.search.settings), e.search.disabledSearches && (t.fixtures.geosearch.settings.disabledSearchTypes = e.search.disabledSearches.filter((e) => e !== "SCALE"))), e.export && (t.fixtures.export || (t.fixtures.export = {}, t.fixturesEnabled.push("export")), e.export.title && (t.fixtures.export.title = {
		selected: e.export.title.isSelected ?? !0,
		selectable: e.export.title.isSelectable ?? !0,
		value: e.export.title.value ?? "RAMP-Map / PCAR-Carte"
	}), e.export.map && (t.fixtures.export.map = {
		selected: e.export.map.isSelected ?? !0,
		selectable: e.export.map.isSelectable ?? !0
	}, e.export.map.value && console.warn("value property provided in map export component cannot be mapped and will be skipped.")), e.export.mapElements && (t.fixtures.export.mapElements = {
		selected: e.export.mapElements.isSelected ?? !0,
		selectable: e.export.mapElements.isSelectable ?? !0
	}, e.export.mapElements.value && console.warn("value property provided in mapElements export component cannot be mapped and will be skipped.")), e.export.legend && (t.fixtures.export.legend = {
		selected: e.export.legend.isSelected ?? !0,
		selectable: e.export.legend.isSelectable ?? !0
	}, e.export.legend.columnWidth && (t.fixtures.export.legend.columnWidth = e.export.legend.columnWidth), e.export.legend.value && console.warn("value property provided in legend export component cannot be mapped and will be skipped."), e.export.legend.showInfoSymbology !== void 0 && console.warn("showInfoSymbology property provided in legend export component cannot be mapped and will be skipped."), e.export.legend.showControlledSymbology !== void 0 && console.warn("showControlledSymbology property provided in legend export component cannot be mapped and will be skipped.")), e.export.footnote && (t.fixtures.export.footnote = {
		selected: e.export.footnote.isSelected ?? !0,
		selectable: e.export.footnote.isSelectable ?? !0,
		value: e.export.footnote.value ?? ""
	}), e.export.timestamp && (t.fixtures.export.timestamp = {
		selected: e.export.timestamp.isSelected ?? !0,
		selectable: e.export.timestamp.isSelectable ?? !0
	}, e.export.timestamp.value && console.warn("value property provided in timestamp export component cannot be mapped and will be skipped.")), e.export.timeout && console.warn("timeout property provided in export property of services config cannot be mapped and will be skipped."), e.cleanCanvas !== void 0 && console.warn("cleanCanvas property provided in export property of services config cannot be mapped and will be skipped.")), e.proxyUrl && (t.system.proxyUrl = e.proxyUrl), [
		"corsEverywhere",
		"exportMapUrl",
		"geometryUrl",
		"googleAPIKey",
		"esriLibUrl",
		"geolocation",
		"coordInfo",
		"print"
	].forEach((t) => {
		e[t] !== void 0 && console.warn(`${t} property provided in services config cannot be mapped and will be skipped.`);
	}));
}
function ks(e, t) {
	if (e.navBar) {
		t.fixtures.mapnav = {
			zoomOption: e.navBar.zoom || "buttons",
			items: []
		};
		let n = [
			"geolocator",
			"zoom",
			"home",
			"basemap",
			"help",
			"fullscreen",
			"geosearch",
			"legend"
		];
		e.navBar.extra.forEach((e) => {
			let r = e.toLowerCase();
			n.includes(r) ? t.fixtures.mapnav.items.push(r) : console.warn(`Ignored invalid mapnav item: ${e}`);
		}), t.fixturesEnabled.push("mapnav");
	}
	if (e.help && (t.fixtures.help = {
		location: e.help.folderName && e.help.folderName !== "default" ? `./${e.help.folderName}` : "./help",
		panelWidth: 350
	}, t.fixturesEnabled.push("help")), e.legend) {
		let n = ["groupToggle", "visibilityToggle"];
		e.legend.reorderable && n.push("layerReorder"), e.legend.allowImport && n.push("wizard"), t.fixtures.legend ? t.fixtures.legend.headerControls = n : (t.fixturesEnabled.push("legend"), t.fixtures.legend = {
			headerControls: n,
			root: {}
		}), e.legend.isOpen && e.legend.isOpen.large && t.panels.open.push({ id: "legend" });
	}
	t.fixtures.appbar = { items: [] }, t.fixturesEnabled.push("appbar");
	let n = [
		"layers",
		"basemap",
		"export",
		"help",
		"geoSearch"
	];
	e.appBar ? (e.appBar.layers !== !1 && (t.fixtures.appbar.items.push("legend"), t.fixturesEnabled.includes("legend") || t.fixturesEnabled.push("legend")), e.appBar.geoSearch !== !1 && t.fixturesEnabled.includes("geosearch") && t.fixtures.appbar.items.push("geosearch"), e.appBar.basemap !== !1 && t.fixtures.appbar.items.push("basemap")) : (t.fixtures.appbar.items.push("legend"), t.fixturesEnabled.includes("legend") || t.fixturesEnabled.push("legend"), t.fixtures.appbar.items.push("geosearch"), t.fixtures.appbar.items.push("basemap")), e.sideMenu && e.sideMenu.items && e.sideMenu.items.length > 0 && e.sideMenu.items.forEach((e) => {
		e.forEach((e) => {
			e === "layers" && !t.fixtures.appbar.items.includes("legend") ? (t.fixtures.appbar.items.push("legend"), t.fixturesEnabled.includes("legend") || t.fixturesEnabled.push("legend")) : e !== "layers" && n.includes(e) && !t.fixtures.appbar.items.includes(e.toLowerCase()) && (t.fixtures.appbar.items.push(e.toLowerCase()), (e.toLowerCase() === "help" || e.toLowerCase() === "export" && !t.fixturesEnabled.includes(e.toLowerCase())) && t.fixturesEnabled.push(e.toLowerCase()));
		});
	}), e.tableIsOpen && e.tableIsOpen.large, [
		"fullscreen",
		"theme",
		"logoUrl",
		"failureFeedback",
		"title",
		"restrictNavigation",
		"about"
	].forEach((t) => {
		e[t] !== void 0 && console.warn(`${t} property provided in services config cannot be mapped and will be skipped.`);
	});
}
function As(e, t) {
	e.areasOfInterest.enable && (t.fixturesEnabled.includes("areas-of-interest") || t.fixturesEnabled.push("areas-of-interest"), e.areasOfInterest.areas && (t.fixtures["areas-of-interest"] = { areas: e.areasOfInterest.areas.map((e) => ({
		title: `${e["title-en-CA"]} / ${e["title-fr-CA"]}`,
		thumbnail: e.thumbnailUrl,
		altText: e.altText ?? "",
		description: e.description ?? "",
		extent: {
			xmin: e.xmin,
			xmax: e.xmax,
			ymin: e.ymin,
			ymax: e.ymax,
			spatialReference: { wkid: e.wkid }
		}
	})) }));
}
function js(e, t) {
	let n = e.outfields && e.outfields !== "*";
	if (!n && !e.fieldMetadata) return;
	let r = {
		fieldInfo: [],
		exclusiveFields: !1,
		enforceOrder: !1
	};
	e.fieldMetadata ? (r.fieldInfo = e.fieldMetadata.map((e) => {
		let t = { name: e.data };
		return e.alias && (t.alias = e.alias), t;
	}), n && (e.outfields.split(",").map((e) => e.trim()).forEach((e) => {
		r.fieldInfo.findIndex((t) => t.name === e) === -1 && r.fieldInfo.push({ name: e });
	}), r.exclusiveFields = !0)) : n && (r.fieldInfo = e.outfields.split(",").map((e) => ({ name: e.trim() })), r.exclusiveFields = !0), t.fieldMetadata = r;
}
//#endregion
//#region src/main.ts
console.info(`RAMP v${{
	major: "4",
	minor: "21",
	patch: "0-beta",
	timestamp: "Thu Apr 23 06:11:38 2026 +0000",
	hash: "f802a7398fa40bc1a2409e3ee74abf6ac877fd22"
}.major}.${{
	major: "4",
	minor: "21",
	patch: "0-beta",
	timestamp: "Thu Apr 23 06:11:38 2026 +0000",
	hash: "f802a7398fa40bc1a2409e3ee74abf6ac877fd22"
}.minor}.${{
	major: "4",
	minor: "21",
	patch: "0-beta",
	timestamp: "Thu Apr 23 06:11:38 2026 +0000",
	hash: "f802a7398fa40bc1a2409e3ee74abf6ac877fd22"
}.patch} [${{
	major: "4",
	minor: "21",
	patch: "0-beta",
	timestamp: "Thu Apr 23 06:11:38 2026 +0000",
	hash: "f802a7398fa40bc1a2409e3ee74abf6ac877fd22"
}.hash.slice(0, 9)}] (Built on ${new Date({
	major: "4",
	minor: "21",
	patch: "0-beta",
	timestamp: "Thu Apr 23 06:11:38 2026 +0000",
	hash: "f802a7398fa40bc1a2409e3ee74abf6ac877fd22"
}.timestamp.toString()).toLocaleString()})`);
var Ms = {
	major: "4",
	minor: "21",
	patch: "0-beta",
	timestamp: "Thu Apr 23 06:11:38 2026 +0000",
	hash: "f802a7398fa40bc1a2409e3ee74abf6ac877fd22"
};
function Ns(e) {
	return bs(e);
}
function Ps(e) {
	return Ts(e);
}
var Fs = (e, t, n) => new Ya(e, t, n), Is = new Lt();
//#endregion
export { q as $, ga as A, Z as B, Va as C, La as D, Ra as E, $n as F, Ht as G, Kt as H, Qn as I, Y as J, X as K, vn as L, aa as M, ia as N, Fa as O, er as P, J as Q, pn as R, Ba as S, Ia as T, Wt as U, qt as V, Ut as W, St as X, Tt as Y, bt as Z, Ka as _, Ms as a, ne as at, Ua as b, Lo as c, W as ct, ho as d, H as dt, c as et, po as f, G as ft, qa as g, $ as h, rt as ht, Ps as i, te as it, oa as j, Oa as k, xo as l, nt as lt, Ja as m, R as mt, Fs as n, f as nt, vs as o, re as ot, eo as p, U as pt, Pt as q, Is as r, p as rt, ds as s, ft as st, Ns as t, d as tt, bo as u, dt as ut, Ga as v, za as w, Ha as x, Wa as y, ln as z };
