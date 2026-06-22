import { A as e, C as t, D as n, E as r, F as i, M as a, N as o, O as s, S as c, T as l, a as u, c as d, k as f, o as p, t as m, v as h, w as g, y as ee } from "./esri-vcEQ1sbb.js";
import { n as _, t as v } from "./config-C3RvSaXR.js";
import { t as y } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as te } from "./keyboard-B1sq5rh1.js";
import { t as ne } from "./store-CE7UzPRf.js";
import { merge as re } from "es-toolkit";
import { applyConverter as ie } from "@terraformer/spatial";
import b from "proj4";
import { TinyEmitter as ae } from "tiny-emitter";
import { createPinia as oe, defineStore as x, storeToRefs as se } from "pinia";
import { Fragment as ce, Teleport as le, Transition as ue, TransitionGroup as de, computed as S, createApp as fe, createBlock as C, createCommentVNode as w, createElementBlock as T, createElementVNode as E, createTextVNode as pe, createVNode as D, defineAsyncComponent as me, defineComponent as O, getCurrentInstance as he, h as ge, inject as _e, markRaw as k, mergeProps as ve, nextTick as ye, normalizeClass as A, normalizeStyle as be, onBeforeUnmount as xe, onMounted as Se, onUpdated as Ce, openBlock as j, reactive as we, ref as M, render as Te, renderList as Ee, renderSlot as De, resolveComponent as N, resolveDirective as P, resolveDynamicComponent as Oe, toDisplayString as F, toRaw as ke, unref as I, useCssVars as Ae, useTemplateRef as je, vShow as Me, watch as Ne, withCtx as L, withDirectives as R, withKeys as Pe, withModifiers as Fe } from "vue";
import { debounce as Ie, throttle as Le } from "es-toolkit/function";
import { createI18n as Re, useI18n as z } from "vue-i18n";
import ze from "screenfull";
import { cloneDeep as Be } from "es-toolkit/object";
import Ve from "animejs";
import { createPopper as He, detectOverflow as Ue } from "@popperjs/core";
import "tippy.js/animations/scale.css";
import We, { setDefaultProps as Ge, useTippy as Ke } from "vue-tippy";
import qe from "linkify-html";
import Je from "redaxios";
import Ye from "await-to-js";
import { geojsonToArcGIS as Xe } from "@terraformer/arcgis";
import { csv2geojson as Ze, dsv as Qe } from "csv2geojson";
import $e from "svg.js";
//#region src/geo/api/geo-defs.ts
var et = /* @__PURE__ */ function(e) {
	return e.BLOB = "blob", e.DATE = "date", e.DOUBLE = "double", e.GEOMETRY = "geometry", e.GLOBAL_ID = "global-id", e.GUID = "guid", e.INTEGER = "integer", e.LONG = "long", e.OID = "oid", e.RASTER = "raster", e.SINGLE = "single", e.SMALL_INTEGER = "small-integer", e.STRING = "string", e.XML = "xml", e;
}({}), tt = /* @__PURE__ */ function(e) {
	return e.CIRCLE = "circle", e.CROSS = "cross", e.DIAMOND = "diamond", e.ICON = "icon", e.PATH = "path", e.SQUARE = "square", e.TRIANGLE = "triangle", e.X = "x", e;
}({}), nt = /* @__PURE__ */ function(e) {
	return e.DASH = "dash", e.DASHDOT = "dash-dot", e.DASHDOTDOT = "short-dash-dot-dot", e.DOT = "dot", e.LONGDASH = "long-dash", e.LONGDASHDOT = "long-dash-dot", e.LONGDASHDOTDOT = "long-dash-dot-dot", e.NONE = "none", e.NULL = "none", e.SHORTDASH = "short-dash", e.SHORTDASHDOT = "short-dash-dot", e.SHORTDASHDOTDOT = "short-dash-dot-dot", e.SHORTDOT = "short-dot", e.SOLID = "solid", e;
}({}), rt = /* @__PURE__ */ function(e) {
	return e.BEVEL = "bevel", e.MITER = "miter", e.ROUND = "round", e;
}({}), it = /* @__PURE__ */ function(e) {
	return e.ROUND = "round", e.BUTT = "butt", e.SQUARE = "square", e;
}({}), at = /* @__PURE__ */ function(e) {
	return e.BDIAG = "backward-diagonal", e.CROSS = "cross", e.DIAG_CROSS = "diagonal-cross", e.FDIAG = "forward-diagonal", e.HORIZONTAL = "horizontal", e.NONE = "none", e.NULL = "none", e.SOLID = "solid", e.VERTICAL = "vertical", e;
}({}), B = /* @__PURE__ */ function(e) {
	return e.POINT = "Point", e.MULTIPOINT = "MultiPoint", e.LINESTRING = "LineString", e.MULTILINESTRING = "MultiLineString", e.POLYGON = "Polygon", e.MULTIPOLYGON = "MultiPolygon", e.LINEARRING = "LinearRing", e.EXTENT = "Extent", e.NONE = "None", e.UNKNOWN = "Unknown", e;
}({}), ot = /* @__PURE__ */ function(e) {
	return e.Simple = "simple", e.Unique = "uniqueValue", e.ClassBreaks = "classBreaks", e.Unknown = "unknown", e;
}({}), V = /* @__PURE__ */ function(e) {
	return e.FEATURE = "esri-feature", e.MAPIMAGE = "esri-map-image", e.TILE = "esri-tile", e.VECTORTILE = "esri-vector-tile", e.IMAGERY = "esri-imagery", e.IMAGERYTILE = "esri-imagery-tile", e.GRAPHIC = "esri-graphic", e.WMS = "ogc-wms", e.WFS = "ogc-wfs", e.GEOJSON = "file-geojson", e.GEOJSONZIPPED = "file-zip-geojson", e.CSV = "file-csv", e.SHAPEFILE = "file-shape", e.FLATGEOBUF = "file-fgb", e.FLATGEOBUFZIPPED = "file-zip-fgb", e.OSM = "osm-tile", e.DATACSV = "data-csv", e.DATAJSON = "data-json", e.DATATABLE = "data-esri-table", e.UNKNOWN = "unknown", e.SUBLAYER = "sublayer", e;
}({}), st = /* @__PURE__ */ function(e) {
	return e.FEATURE = "feature", e.GRAPHIC = "graphic", e.IMAGERY = "imagery", e.IMAGERYTILE = "imagery-tile", e.MAPIMAGE = "map-image", e.NOLAYER = "no-layer", e.OSM = "osm-tile", e.TILE = "tile", e.UNKNOWN = "unknown", e.VECTORTILE = "vector-tile", e.WMS = "wms", e;
}({}), H = /* @__PURE__ */ function(e) {
	return e.ESRI_FEATURE = "esriFeature", e.ESRI_RASTER = "esriRaster", e.ESRI_TILE = "esriTile", e.OSM_TILE = "osmTile", e.OGC_RASTER = "ogcRaster", e.UNKNOWN = "unknown", e;
}({}), U = /* @__PURE__ */ function(e) {
	return e.POINT = "Point", e.MULTIPOINT = "MultiPoint", e.LINESTRING = "LineString", e.MULTILINESTRING = "MultiLineString", e.POLYGON = "Polygon", e.MULTIPOLYGON = "MultiPolygon", e;
}({}), W = /* @__PURE__ */ function(e) {
	return e.GEOMETRIC = "geometric", e.SYMBOLIC = "symbolic", e.HYBRID = "hybrid", e.NONE = "none", e;
}({}), G = /* @__PURE__ */ function(e) {
	return e.NEW = "new", e.INITIATING = "initiating", e.INITIATED = "initiated", e.TERMINATING = "terminating", e.TERMINATED = "terminated", e;
}({}), K = /* @__PURE__ */ function(e) {
	return e.NEW = "new", e.LOADING = "loading", e.LOADED = "loaded", e.ERROR = "error", e;
}({}), ct = /* @__PURE__ */ function(e) {
	return e.NOT_LOADED = "not-loaded", e.NOT_VISUAL = "not-visual", e.REFRESH = "refresh", e.UP_TO_DATE = "up-to-date", e;
}({}), lt = /* @__PURE__ */ function(e) {
	return e.ESRI = "esri", e.TEXT = "text", e.IMAGE = "image", e.HTML = "html", e.XML = "xml", e.JSON = "json", e.UNKNOWN = "unknown", e;
}({}), q = /* @__PURE__ */ function(e) {
	return e.SYMBOL = "symbol", e.GRID = "grid", e.EXTENT = "extent", e.INITIAL = "initial", e.API = "api", e.MIL_FLICKER_ERASER = "mileraser", e.PERMANENT = "permanent", e;
}({}), J = /* @__PURE__ */ function(e) {
	return e.BoundaryZoom = "boundaryZoom", e.Datatable = "datatable", e.Identify = "identify", e.Metadata = "metadata", e.Opacity = "opacity", e.Refresh = "refresh", e.Reload = "reload", e.Remove = "remove", e.Settings = "settings", e.Symbology = "symbology", e.Visibility = "visibility", e;
}({}), ut = class {
	attributes;
	geometry;
	style;
	id;
	constructor(e, t, n) {
		this.geometry = e, t ? this.id = t : this.id = Fs.sharedUtils.generateUUID(), n ? this.attributes = n : this.attributes = {};
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
}, Y = class e {
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
		return new a(this.lean());
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
}, dt = class {
	sr;
	id;
	constructor(e, t) {
		this.id = e ? e.toString() : "", this.sr = Y.parseSR(t);
	}
	get type() {
		return B.UNKNOWN;
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
		return this.type === B.NONE || this.type === B.UNKNOWN;
	}
	geoJsonFactory(e, t) {
		let n = {
			type: e,
			coordinates: t
		};
		return this.sr && (n.crs = this.sr.toGeoJSON()), n;
	}
}, ft = class extends dt {
	constructor() {
		super("no_geometry");
	}
	get type() {
		return B.NONE;
	}
}, X = class e extends dt {
	rawArray;
	constructor(t, n, r, i) {
		super(t, n.sr || r), i ? this.rawArray = n.slice() : this.rawArray = e.parseXY(n);
	}
	get type() {
		return B.POINT;
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
		return new e(n, [t.x, t.y], Y.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		return new g({
			x: this.x,
			y: this.y,
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, Y.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(U.POINT, this.toArray());
	}
}, pt = class e extends dt {
	rawArray;
	constructor(t, n, r, i) {
		super(t, n.sr || r), i ? this.rawArray = e.arrayDeepCopy(n) : n instanceof e ? this.rawArray = n.toArray() : this.rawArray = e.parsePointSet(n);
	}
	get pointArray() {
		return this.rawArray.map((e, t) => new X(this.childIdGenerator(t), e, this.sr, !0));
	}
	getAt(e) {
		return new X(this.childIdGenerator(e), this.rawArray[e], this.sr, !0);
	}
	updateAt(e, t) {
		this.rawArray[t] = X.parseXY(e);
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
			return e.map((e) => X.parseXY(e));
		} else throw Error("Bad geometry input encountered");
	}
	static arrayDeepCopy(e) {
		return e.map((e) => e.slice());
	}
}, mt = class e extends pt {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	get type() {
		return B.MULTIPOINT;
	}
	static fromESRI(t, n) {
		return new e(n, t.points, Y.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		return new c({
			points: this.toArray(),
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, Y.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(U.MULTIPOINT, this.toArray());
	}
}, ht = class e extends pt {
	constructor(e, t, n, r) {
		if (super(e, t, n, r), this.rawArray.length < 2) throw Error("lines require at least two verticies");
	}
	get type() {
		return B.LINESTRING;
	}
	static fromESRI(t, n) {
		return new e(n, t.paths[0], Y.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		return new r({
			paths: [this.toArray()],
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, Y.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(U.LINESTRING, this.toArray());
	}
}, gt = class e extends dt {
	rawArray;
	constructor(t, n, r, i) {
		if (super(t, n.sr || r), i) this.rawArray = e.arrayDeepCopy(n);
		else if (n instanceof e) this.rawArray = n.toArray();
		else if (n instanceof pt) this.rawArray = [n.toArray()];
		else if (Array.isArray(n)) {
			if (n.length === 0) throw Error("no lines provided");
			this.rawArray = n.map((e) => pt.parsePointSet(e));
		} else throw Error("invalid lines format for MulitLineString");
	}
	get lineArray() {
		return this.rawArray.map((e, t) => new ht(this.childIdGenerator(t), e, this.sr, !0));
	}
	getAt(e) {
		return new ht(this.childIdGenerator(e), this.rawArray[e], this.sr, !0);
	}
	updateAt(e, t) {
		this.rawArray[t] = pt.parsePointSet(e);
	}
	get length() {
		return this.rawArray.length;
	}
	get type() {
		return B.MULTILINESTRING;
	}
	toArray() {
		return e.arrayDeepCopy(this.rawArray);
	}
	static arrayDeepCopy(e) {
		return e.map((e) => e.map((e) => e.slice()));
	}
	static fromESRI(t, n) {
		return new e(n, t.paths, Y.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		return new r({
			paths: this.toArray(),
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, Y.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(U.MULTILINESTRING, this.toArray());
	}
}, _t = class e extends pt {
	constructor(t, n, r, i) {
		if (super(t, n, r, i), e.closeRing(this.rawArray), this.length < 4) throw Error("Linear Ring must have at least 3 distinct vertices.");
	}
	get type() {
		return B.LINEARRING;
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
		return new e(n, t.rings[0], Y.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		return new l({
			rings: [this.toArray()],
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, Y.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(U.POLYGON, [this.toArray()]);
	}
}, vt = class e extends dt {
	rawArray;
	constructor(t, n, r, i) {
		super(t, n.sr || r), i ? this.rawArray = e.arrayDeepCopy(n) : this.rawArray = e.parsePolygon(n);
	}
	addLinearRings(e) {
		e.forEach((e) => this.rawArray.push(e.toArray()));
	}
	get ringArray() {
		return this.rawArray.map((e, t) => new _t(this.childIdGenerator(t), e, this.sr, !0));
	}
	get type() {
		return B.POLYGON;
	}
	toArray() {
		return e.arrayDeepCopy(this.rawArray);
	}
	static parsePolygon(t) {
		let n = [];
		if (t instanceof e) return t.toArray();
		if (t instanceof gt) n = t.toArray();
		else if (t instanceof pt) n = [t.toArray()];
		else if (Array.isArray(t)) {
			if (t.length === 0) throw Error("no rings provided");
			n = t.map((e) => pt.parsePointSet(e));
		} else throw Error("invalid input format for parsePolygon");
		return n.forEach((e) => _t.closeRing(e)), n;
	}
	static arrayDeepCopy(e) {
		return e.map((e) => e.map((e) => e.slice()));
	}
	static fromESRI(t, n) {
		return new e(n, t.rings, Y.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		return new l({
			rings: this.toArray(),
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, Y.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(U.POLYGON, this.toArray());
	}
}, yt = class e extends dt {
	rawArray;
	constructor(t, n, r, i) {
		super(t, n.sr || r), i ? this.rawArray = e.arrayDeepCopy(n) : this.rawArray = e.parseMultiPolygon(n);
	}
	addPolygon(e) {
		this.rawArray.push(e.toArray());
	}
	get polygonArray() {
		return this.rawArray.map((e, t) => new vt(this.childIdGenerator(t), e, this.sr, !0));
	}
	get type() {
		return B.MULTIPOLYGON;
	}
	toArray() {
		return e.arrayDeepCopy(this.rawArray);
	}
	static parseMultiPolygon(t) {
		if (t instanceof e) return t.toArray();
		if (t instanceof vt) return [t.toArray()];
		if (t instanceof gt || t instanceof pt) return [vt.parsePolygon(t)];
		if (Array.isArray(t)) {
			if (t.length === 0) throw Error("no polygons provided");
			return t.map((e) => vt.parsePolygon(e));
		} else throw Error("invalid input format for parseMultiPolygon");
	}
	static arrayDeepCopy(e) {
		return e.map((e) => e.map((e) => e.map((e) => e.slice())));
	}
	static fromESRI(t, n) {
		return new e(n, [t.rings], Y.fromESRI(t.spatialReference), !0);
	}
	toESRI() {
		let e = [];
		return this.toArray().forEach((t) => {
			t.forEach((t) => e.push(t));
		}), new l({
			rings: e,
			spatialReference: this.sr.toESRI()
		});
	}
	static fromGeoJSON(t, n) {
		return new e(n, t.coordinates, Y.fromGeoJSON(t.crs), !0);
	}
	toGeoJSON() {
		return this.geoJsonFactory(U.MULTIPOLYGON, this.toArray());
	}
}, bt = class e extends dt {
	rawMin;
	rawMax;
	constructor(e, t, n, r) {
		super(e, t.sr || r), this.rawMin = X.parseXY(t), this.rawMax = X.parseXY(n);
	}
	get type() {
		return B.EXTENT;
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
		return new X(this.id + "_centerPoint", [(this.xmax - this.xmin) / 2 + this.xmin, (this.ymax - this.ymin) / 2 + this.ymin], this.sr, !0);
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
		return new vt(this.id, this.toPolygonArray(), this.sr, !0);
	}
	static fromParams(t, n, r, i, a, o) {
		return new e(t, [n, r], [i, a], o);
	}
	static fromConfig(t, n) {
		return new e(t, [n.xmin, n.ymin], [n.xmax, n.ymax], Y.fromConfig(n.spatialReference));
	}
	isEqual(e) {
		return e ? this.xmin === e.xmin && this.ymin === e.ymin && this.xmax === e.xmax && this.ymax === e.ymax : !1;
	}
	static fromESRI(t, n) {
		return e.fromParams(n, t.xmin, t.ymin, t.xmax, t.ymax, Y.fromESRI(t.spatialReference));
	}
	toESRI() {
		return new d({
			xmin: this.xmin,
			ymin: this.ymin,
			xmax: this.xmax,
			ymax: this.ymax,
			spatialReference: this.sr.toESRI()
		});
	}
	static fromArcServer(t, n) {
		return e.fromESRI(d.fromJSON(t), n);
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
		}), new e(n, r, i, Y.fromGeoJSON(t.crs));
	}
	toGeoJSON() {
		return this.geoJsonFactory(U.POLYGON, this.toPolygonArray());
	}
}, xt = class e {
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
		return new u(this.rgba);
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
}, St = class {
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
}, Ct = class n extends St {
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
		if (e ||= { style: tt.CIRCLE }, super(), this._style = e.style || tt.CIRCLE, e.style === tt.ICON) {
			let t = e;
			this._icon = t.icon || "", this._height = St.convToPoints(t.height) || 16.5, this._width = St.convToPoints(t.width) || 16.5, this._size = 0, this._colour = new xt(), this._outline = new wt(), this._path = "";
		} else {
			let t = e;
			this._size = St.convToPoints(t.size) || 12, this._colour = new xt(t.colour ?? "#ffffff40"), this._outline = new wt(t.outline), this._path = this._style === tt.PATH && t.path || "", this._height = 0, this._width = 0, this._icon = "";
		}
		this._xOffset = St.convToPoints(e.xOffset) || 0, this._yOffset = St.convToPoints(e.yOffset) || 0, this._angle = e.angle || 0;
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
		this._style === tt.ICON !== e && console.warn(`Accessed a point style property that is invalid for the style type ${this._style}`);
	}
	toOptions() {
		let e = {
			style: this.styleType,
			yOffset: this.yOffset,
			xOffset: this.xOffset,
			angle: this.angle
		};
		return this._style === tt.ICON ? {
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
		let r;
		return this.styleType === tt.ICON ? n.isImageUrl(this.icon) ? (r = new t(), r.url = this.icon, r.width = this.width, r.height = this.height, r.xoffset = this.xOffset, r.yoffset = this.yOffset, r.angle = this.angle) : (r = new e(), r.color = new u(this.colour.rgba), r.size = this.width, r.xoffset = this.xOffset, r.yoffset = this.yOffset, r.angle = this.angle) : (r = new e(), r.color = new u(this.colour.rgba), r.size = this.size, r.xoffset = this.xOffset, r.yoffset = this.yOffset, r.angle = this.angle, r.path = this.path, r.style = this.styleType, r.outline = this.outline.toESRI()), r;
	}
	static fromESRI(e) {
		let t = {
			xOffset: e.xoffset,
			yOffset: e.yoffset,
			angle: e.angle
		};
		if (e.type === "simple-marker") {
			let n = t;
			n.style = e.style, n.colour = e.color.toRgba(), n.size = e.size, n.path = e.path, n.outline = wt.fromESRI(e.outline).toOptions();
		} else {
			let n = t;
			n.style = tt.ICON, n.width = e.width, n.height = e.height, n.icon = e.url;
		}
		return new n(t);
	}
	static fromArcServer(e) {
		return n.fromESRI(o(e));
	}
	static isImageUrl(e) {
		return !!e.match(/\.(jpeg|jpg|gif|png|swf|svg)$/) || !!e.match(/^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+\=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i);
	}
}, wt = class e extends St {
	_style;
	_width;
	_miter;
	_cap;
	_join;
	_colour;
	constructor(e) {
		e ||= {}, super(), this._style = e.style || nt.SOLID;
		let t = St.convToPoints(e.width);
		this._width = t === void 0 || t < 0 ? .75 : t, this._colour = new xt(e.colour), this._miter = e.miter ?? 2, this._cap = e.cap || it.ROUND, this._join = e.join || rt.ROUND;
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
		let e = new f();
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
		return e.fromESRI(o(t));
	}
}, Tt = class e extends St {
	_outlineStyle;
	_fillColour;
	_fillStyle;
	constructor(e) {
		super(), e ||= {}, e.fill ||= {}, this._fillColour = new xt(e.fill.colour), this._fillStyle = e.fill.style || at.SOLID, this._outlineStyle = new wt(e.outline);
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
		let e = this.outline.toESRI(), t = new u(this.fillColour.rgba), n = new s();
		return n.style = this.fillStyleType, n.color = t, n.outline = e, n;
	}
	static fromESRI(t) {
		return new e({
			fill: {
				colour: t.color.toRgba(),
				style: t.style
			},
			outline: wt.fromESRI(t.outline).toOptions()
		});
	}
	static fromArcServer(t) {
		return e.fromESRI(o(t));
	}
}, Et = class {
	Extent = bt;
	Graphic = ut;
	LineString = ht;
	LineStyle = wt;
	LinearRing = _t;
	MultiLineString = gt;
	MultiPoint = mt;
	MultiPolygon = yt;
	Point = X;
	PointStyle = Ct;
	Polygon = vt;
	PolygonStyle = Tt;
	SpatialReference = Y;
	esriMapClickToRamp(e, t) {
		return {
			mapPoint: X.fromESRI(e.mapPoint, t),
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
			case "point": return X.fromESRI(e, t);
			case "polyline": {
				let n = e;
				return n.paths.length === 1 ? ht.fromESRI(n, t) : gt.fromESRI(n, t);
			}
			case "polygon": return vt.fromESRI(e, t);
			case "extent": return bt.fromESRI(e, t);
			case "multipoint": return mt.fromESRI(e, t);
			default: throw Error(`Encountered unhandled geometry type ${e.type}`);
		}
	}
	geomGeoJsonToRamp(e, t) {
		switch (e.type) {
			case U.POINT: return X.fromGeoJSON(e, t);
			case U.LINESTRING: return ht.fromGeoJSON(e, t);
			case U.POLYGON: return vt.fromGeoJSON(e, t);
			case U.MULTIPOINT: return mt.fromGeoJSON(e, t);
			case U.MULTILINESTRING: return gt.fromGeoJSON(e, t);
			case U.MULTIPOLYGON: return yt.fromGeoJSON(e, t);
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
		return Object.keys(e.properties.forEach((t) => r[t] = e.properties[t])), new ut(n, "", r);
	}
	graphicRampToEsri(e) {
		let t = {
			attributes: {},
			id: e.id
		};
		return t.geometry = this.geomRampToEsri(e.geometry), Object.keys(e.attributes).forEach((n) => t.attributes[n] = e.attributes[n]), e.style && (t.symbol = this.styleRampToEsri(e.style)), new ee(t);
	}
	styleRampToEsri(e) {
		return e.toESRI();
	}
	styleEsriToRamp(e) {
		switch (e.type) {
			case "picture-marker":
			case "simple-marker": return Ct.fromESRI(e);
			case "simple-line": return wt.fromESRI(e);
			case "simple-fill": return Tt.fromESRI(e);
			default: return console.error(`Unsupported ESRI symbol type encountered: ${e.type}`), new Ct();
		}
	}
	serverGeomTypeToRampGeomType(e) {
		if (!e) return B.NONE;
		switch (e) {
			case "esriGeometryPolygon": return B.POLYGON;
			case "esriGeometryPolyline": return B.LINESTRING;
			case "esriGeometryPoint": return B.POINT;
			case "esriGeometryMultipoint": return B.MULTIPOINT;
			case "esriGeometryEnvelope": return B.EXTENT;
			default: return console.error(`Unrecognized server geometry type encountered: ${e}`), B.UNKNOWN;
		}
	}
	clientGeomTypeToRampGeomType(e) {
		if (!e) return B.NONE;
		switch (e) {
			case "polygon": return B.POLYGON;
			case "polyline": return B.LINESTRING;
			case "point": return B.POINT;
			case "multipoint": return B.MULTIPOINT;
			default: return console.error(`Unrecognized client geometry type encountered: ${e}`), B.UNKNOWN;
		}
	}
	geoJsonGeomTypeToEsriGeomType(e) {
		switch (e) {
			case U.POINT: return "point";
			case U.LINESTRING:
			case U.MULTILINESTRING: return "polyline";
			case U.POLYGON:
			case U.MULTIPOLYGON: return "polygon";
			case U.MULTIPOINT: return "multipoint";
			default: throw Error(`Encountered unhandled geometry type ${e}`);
		}
	}
	isImageUrl(e) {
		return Ct.isImageUrl(e);
	}
}, Dt = class {
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
}, Ot = class {
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
}, kt = class {
	sql;
	cache;
	extent;
	constructor(e = "", t = "") {
		this.sql = {
			[q.PERMANENT]: e,
			[q.INITIAL]: t
		}, this.extent = void 0, this.cache = {};
	}
	sqlActiveFilters(e = []) {
		let t = this.sql, n = Object.keys(t).filter((e) => t[e]);
		return e.length === 0 ? n : n.filter((t) => e.indexOf(t) === -1);
	}
	isActive() {
		return this.sqlActiveFilters([q.PERMANENT]).length > 0;
	}
	getCombinedSql(e = []) {
		let t = this.sqlActiveFilters(e), n = t.length;
		return n === 0 ? "" : n === 1 ? this.sql[t[0]] : t.map((e) => `(${this.sql[e]})`).join(" AND ");
	}
	setSql(e, t) {
		e === q.PERMANENT ? console.error("Attempted to overwrite a permanent filter. Not allowed.") : (this.sql[e] = t, this.clearCacheSet(e));
	}
	getSql(e) {
		return this.sql[e] || "";
	}
	setExtent(e) {
		e.isEqual(this.extent) || (this.extent = e, this.clearCacheSet(q.EXTENT));
	}
	getCacheKey(e, t) {
		return `_cache$${e.sort().join("$")}${t ? "$" + q.EXTENT : ""}$`;
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
		this.sql = { [q.PERMANENT]: this.sql[q.PERMANENT] }, this.extent = void 0, this.clearAllCaches();
	}
}, At = class e {
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
		return new e(t.id, bt.fromConfig(`${t.id}-extent-default`, t.default), t.full === void 0 ? void 0 : bt.fromConfig(`${t.id}-extent-full`, t.full), t.maximum === void 0 ? void 0 : bt.fromConfig(`${t.id}-extent-maximum`, t.maximum));
	}
	clone() {
		return new e(this.id, this._defaultExtent, this._fullExtent, this._maximumExtent);
	}
}, Z = class {
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
}, jt = class {
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
}, Mt = class {
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
		let t = re({}, this.queryMap);
		return re(t, e), `${this.base}${Object.entries(t).filter(([, e]) => e !== void 0).map(([e, t], n) => `${n === 0 ? "?" : ""}${e}=${t}`).join("&")}`;
	}
}, Nt = "EPSG:4326", Pt = class {
	espgWorker;
	constructor() {
		this.espgWorker = this.defaultEpsgLookup, b.defs("EPSG:3978", "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"), b.defs("EPSG:3979", "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"), b.defs("EPSG:54004", "+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"), b.defs("EPSG:102100", b.defs("EPSG:3857")), b.defs("EPSG:102187", "+proj=tmerc +lat_0=0 +lon_0=-114 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"), b.defs("EPSG:102190", "+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
		let e = 1;
		for (; e <= 60;) {
			let t = e < 10 ? `0${e}` : e;
			b.defs(`EPSG:326${t}`, `+proj=utm +zone=${e} +ellps=WGS84 +datum=WGS84 +units=m +no_defs`), e++;
		}
	}
	addProjection(e, t) {
		e = typeof e == "number" ? `EPSG:${e}` : e, b.defs(e, t);
	}
	defaultEpsgLookup(e) {
		let t = String(e).match(/urn:ogc:def:crs:EPSG::(\d+)/) || String(e).match(/EPSG:(\d+)/) || [];
		if (t.length < 2) throw Error("Invalid code provided.");
		return new Promise((e, r) => {
			n(`https://epsg.io/${t[1]}.proj4`, { responseType: "text" }).then((t) => {
				t.data ? e(t.data) : r();
			}, (e) => {
				r(e);
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
			e !== t && b.defs(t, b.defs(e));
		};
		if (b.defs(t)) return !0;
		if (n && b.defs(n)) return r(n, t), !0;
		let i = async (e) => {
			try {
				let t = await this.epsgLookup(e);
				return t === null || t === "" ? !1 : (b.defs(e, t), !0);
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
		if (r = t ? this.normalizeProj(t) : Y.parseGeoJsonCrs(e.crs), i = n ? this.normalizeProj(n) : Nt, i === r) return e;
		await this.checkProjBomber([r, i]);
		let a = b(r, i).forward;
		return ie(e, a);
	}
	async projectGeometry(e, t) {
		if (t.type === B.EXTENT) return this.projectExtent(e, t);
		await this.checkProjBomber([e, t.sr]);
		let n = t.toGeoJSON(), r = await this.projectGeoJson(n, this.normalizeProj(t.sr), this.normalizeProj(e)), i = Fs.geom.geomGeoJsonToRamp(r, t.id);
		return i.sr = Y.parseSR(e), i;
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
		let a = new vt("warpy", [i], t.sr, !0), o = await this.projectGeometry(e, a), s = o.toArray().pop() || [], c = s.map((e) => e[0]), l = s.map((e) => e[1]), u = Math.min.apply(null, c), d = Math.max.apply(null, c), f = Math.min.apply(null, l), p = Math.max.apply(null, l);
		return bt.fromParams(t.id + "_projected", u, f, d, p, o.sr);
	}
}, Ft = class {
	DEFAULT_MERCATOR = "DEFAULT_ESRI_World_AuxMerc_3857";
	DEFAULT_LAMBERT = "DEFAULT_NRCAN_Lambert_3978";
	proj;
	geom;
	sharedUtils;
	constructor() {
		this.proj = new Pt(), this.geom = new Et(), this.sharedUtils = new jt();
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
}, Q = class {
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
function It(e) {
	return typeof e == "function" && e.render && typeof e.render == "function";
}
function Lt(e) {
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
function Rt(e) {
	return typeof e == "object" && Object.keys(e).every((e) => typeof e == "string") && Object.values(e).every((e) => e instanceof HTMLElement);
}
function zt(e) {
	return typeof e == "object" && e.default !== void 0;
}
//#endregion
//#region src/fixtures/appbar/store/appbar-state.ts
var Bt = class {
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
}, Vt = x("appbar", () => {
	let e = M({}), t = M([]), n = M([]), r = S(() => t.value.map((t) => t.map((t) => e.value[t]).filter((e) => {
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
}), Ht = x("grid", () => {
	let e = M({}), t = M(), n = M();
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
}), Ut = x("map-caption", () => {
	let e = M({ text: {} }), t = M({}), n = M({}), r = M({});
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
}), Wt = class {
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
}, Gt = x("details", () => {
	let e = M([]), t = M({}), n = M({}), r = M(), i = M(0), a = M(0), o = M(!0), s = M();
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
}), Kt = x("fixture", () => {
	let e = M({}), t = M({});
	function n(e) {
		return e.map((e) => t.value[e].getPromise());
	}
	function r(n) {
		if (e.value = {
			...e.value,
			[n.id]: k(n)
		}, n.id in t.value) t.value[n.id].resolveMe(k(n));
		else {
			let e = new Z();
			e.resolveMe(k(n)), t.value = {
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
			[e]: new Z()
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
}), $ = /* @__PURE__ */ function(e) {
	return e.APPBAR_BUTTON_CLICK = "appbar/click", e.COMPONENT = "ramp/component", e.CONFIG_CHANGE = "config/configchanged", e.DETAILS_TOGGLE = "details/toggle", e.FILTER_CHANGE = "filter/change", e.FIXTURE_ADDED = "fixture/added", e.FIXTURE_REMOVED = "fixture/removed", e.GEOSEARCH_ZOOM = "geosearch/zoom", e.GRID_TOGGLE = "grid/toggle", e.HELP_TOGGLE = "help/toggle", e.LANG_CHANGE = "lang/change", e.LAYER_DRAWSTATECHANGE = "layer/drawstatechange", e.LAYER_INITIATIONSTATECHANGE = "layer/initiationStatechange", e.LAYER_LAYERSTATECHANGE = "layer/layerstatechange", e.LAYER_OPACITYCHANGE = "layer/opacitychange", e.LAYER_REGISTERED = "layer/registered", e.LAYER_RELOAD_END = "layer/reloadend", e.LAYER_RELOAD_START = "layer/reloadstart", e.LAYER_REMOVE = "layer/remove", e.LAYER_VISIBILITYCHANGE = "layer/visibilitychange", e.MAP_BASEMAPCHANGE = "map/basemapchanged", e.MAP_BLUR = "map/blur", e.MAP_CLICK = "map/click", e.MAP_CREATED = "map/created", e.MAP_DESTROYED = "map/destroyed", e.MAP_DOUBLECLICK = "map/doubleclick", e.MAP_EXTENTCHANGE = "map/extentchanged", e.MAP_FOCUS = "map/focus", e.MAP_GRAPHICHIT = "map/graphichit", e.MAP_IDENTIFY = "map/identify", e.MAP_KEYDOWN = "map/keydown", e.MAP_KEYUP = "map/keyup", e.MAP_MOUSEDOWN = "map/mousedown", e.MAP_MOUSELEAVE = "map/mouseleave", e.MAP_MOUSEMOVE = "map/mousemove", e.MAP_MOUSEMOVE_END = "map/mousemoveend", e.MAP_MOUSEMOVE_START = "map/mousemovestart", e.MAP_REFRESH_END = "map/refreshend", e.MAP_REFRESH_START = "map/refreshstart", e.MAP_REORDER = "map/reorder", e.MAP_RESIZED = "map/resized", e.MAP_SCALECHANGE = "map/scalechanged", e.MAP_START = "map/start", e.METADATA_TOGGLE = "metadata/toggle", e.PANEL_CLOSED = "panel/closed", e.PANEL_MINIMIZED = "panel/minimized", e.PANEL_OPENED = "panel/opened", e.RAMP_MOBILEVIEW_CHANGE = "ramp/mobileviewchange", e.RAMP_RELOAD = "ramp/reload", e.REORDER_TOGGLE = "reorder/toggle", e.SETTINGS_TOGGLE = "settings/toggle", e.USER_LAYER_ADDED = "user/layeradded", e.WIZARD_TOGGLE = "wizard/toggle", e;
}({}), qt = /* @__PURE__ */ function(e) {
	return e.LAYER_ERROR_UPDATES_LEGEND = "ramp_layer_error_updates_legend", e.LAYER_REGISTER_BINDS_LEGEND = "ramp_layer_register_binds_legend", e.LAYER_RELOAD_END_BINDS_LEGEND = "ramp_layer_reload_end_binds_legend", e.LAYER_RELOAD_START_UPDATES_LEGEND = "ramp_layer_reload_start_updates_legend", e.LAYER_REMOVE_UPDATES_DETAILS = "ramp_layer_remove_updates_details", e.LAYER_REMOVE_CHECKS_GRID = "ramp_layer_remove_checks_grid", e.LAYER_REMOVE_UPDATES_LEGEND = "ramp_layer_remove_updates_legend", e.LAYER_USERADD_UPDATES_LEGEND = "ramp_layer_useradd_updates_legend", e.MAP_BASEMAP_CHECKS_TILE_PROJ = "ramp_map_basemap_checks_tile_proj", e.MAP_BASEMAP_UPDATES_MAP_ATTRIBS = "ramp_map_basemap_updates_map_attribs", e.MAP_BLUR_UPDATES_KEY_HANDLER = "ramp_map_blur_updates_key_handler", e.MAP_CLICK_RUNS_IDENTIFY = "ramp_map_click_runs_identify", e.MAP_CREATED_INITIALIZES_FIXTURES = "ramp_map_created_initializes_fixtures", e.MAP_CREATED_UPDATES_MAP_ATTRIBS = "ramp_map_created_updates_map_attribs", e.MAP_EXTENT_UPDATES_MAPTIP = "ramp_map_extent_updates_maptip", e.MAP_GRAPHICHIT_CREATES_MAPTIP = "ramp_map_graphichit_creates_maptip", e.MAP_IDENTIFY_OPENS_IDENTIFY_RESULTS = "ramp_map_identify_opens_identify_results", e.MAP_KEYDOWN_UPDATES_COORDS = "ramp_map_keydown_updates_coords", e.MAP_KEYDOWN_UPDATES_KEY_HANDLER = "ramp_map_keydown_updates_key_handler", e.MAP_KEYUP_UPDATES_KEY_HANDLER = "ramp_map_keyup_updates_key_handler", e.MAP_MOUSE_UPDATES_COORDS = "ramp_map_mouse_updates_coords", e.MAP_MOUSE_UPDATES_MAPTIP = "ramp_map_mouse_updates_maptip", e.MAP_MOUSEDOWN_UPDATES_MAPTIP = "ramp_map_mousedown_updates_maptip", e.MAP_MOUSELEAVE_REMOVES_MAPTIP = "ramp_map_mouseleave_removes_maptip", e.MAP_RESIZE_UPDATES_SCALEBAR = "ramp_map_resize_updates_scalebar", e.MAP_SCALE_UPDATES_SCALEBAR = "ramp_map_scale_updates_scalebar", e.PANEL_CLOSE_UPDATES_APPBAR = "ramp_panel_close_updates_appbar", e.PANEL_OPEN_UPDATES_APPBAR = "ramp_panel_open_updates_appbar", e.TOGGLE_DETAILS = "ramp_toggle_details", e.TOGGLE_GRID = "ramp_toggle_grid", e.TOGGLE_HELP = "ramp_toggle_help", e.TOGGLE_METADATA = "ramp_toggle_metadata", e.TOGGLE_REORDER = "ramp_toggle_reorder", e.TOGGLE_SETTINGS = "ramp_toggle_settings", e.TOGGLE_WIZARD = "ramp_toggle_wizard", e;
}(qt || {}), Jt = class {
	eventName;
	handlerName;
	handlerFunc;
	constructor(e, t, n) {
		this.eventName = e, this.handlerName = t, this.handlerFunc = n;
	}
}, Yt = class extends Q {
	_eventBus;
	_eventRegister;
	_nameRegister;
	_funCounter;
	constructor(e) {
		super(e), this._eventBus = new ae(), this._eventRegister = [], this._funCounter = 1, this._nameRegister = Object.values($).filter((e) => typeof e == "string" && e.indexOf("/") > -1);
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
		let r = new Jt(e, n, t);
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
		Object.values(qt).forEach((e) => {
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
		return (!Array.isArray(e) || e.length === 0) && (e = Object.values(qt)), e.map((e) => this.defaultHandlerFactory(e));
	}
	defaultHandlerFactory(e) {
		let t;
		switch (e) {
			case "ramp_layer_error_updates_legend":
				t = (e) => {
					if (e.layer.layerState === K.ERROR) {
						let t = this.$iApi.fixture.get("legend");
						t && t.updateLegend(e.layer);
					}
				}, this.$iApi.event.on("layer/layerstatechange", t, e);
				break;
			case "ramp_layer_register_binds_legend":
				t = (e) => {
					let t = this.$iApi.fixture.get("legend");
					t && t.updateLegend(e);
				}, this.$iApi.event.on("layer/registered", t, e);
				break;
			case "ramp_layer_reload_end_binds_legend":
				t = (e) => {
					let t = this.$iApi.fixture.get("legend");
					t && t.updateLegend(e);
				}, this.$iApi.event.on("layer/reloadend", t, e);
				break;
			case "ramp_layer_reload_start_updates_legend":
				t = (e) => {
					if (!e.isSublayer) {
						let t = this.$iApi.fixture.get("legend");
						t && t.reloadLayerItem(e.uid);
					}
				}, this.$iApi.event.on("layer/reloadstart", t, e);
				break;
			case "ramp_layer_remove_checks_grid":
				t = (e) => {
					if (this.$iApi.fixture.get("grid")) {
						let t = Ht(this.$vApp.$pinia), n = t.getGridId(e.id);
						if (n === void 0) return;
						if (t.removeLayer(n, e.id), t.grids[n].layerIds.length === 0 && (t.removeGrid(n), n === t.currentId)) {
							let e = this.$iApi.panel.get("grid");
							this.$iApi.panel.close(e), t.currentId = void 0;
						}
					}
				}, this.$iApi.event.on("layer/remove", t, e);
				break;
			case "ramp_layer_remove_updates_details":
				t = (e) => {
					let t = Gt(this.$vApp.$pinia);
					this.$iApi.fixture.get("details") && t.removeLayer(e);
				}, this.$iApi.event.on("layer/remove", t, e);
				break;
			case "ramp_layer_remove_updates_legend":
				t = (e) => {
					let t = this.$iApi.fixture.get("legend");
					t && (t.removeLayerItem(e), this.$iApi.updateAlert(this.$iApi.$i18n.t("legend.alert.layerRemoved", { name: e.name })));
				}, this.$iApi.event.on("layer/remove", t, e);
				break;
			case "ramp_layer_useradd_updates_legend":
				t = (e) => {
					let t = this.$iApi.fixture.get("legend");
					t && t.addLayerItem(e);
				}, this.$iApi.event.on("user/layeradded", t, e);
				break;
			case "ramp_map_basemap_checks_tile_proj":
				t = (e) => {
					e.schemaChanged && this.$iApi.geo.layer.allLayers().filter((e) => e.dataFormat === H.ESRI_TILE && e.schemaLocked).forEach((e) => {
						e.checkProj();
					});
				}, this.$iApi.event.on("map/basemapchanged", t, e);
				break;
			case "ramp_map_basemap_updates_map_attribs":
				t = () => {
					this.$iApi.geo.map.caption.updateAttribution(v(this.$vApp.$pinia).activeBasemapConfig?.attribution);
				}, this.$iApi.event.on("map/basemapchanged", t, e);
				break;
			case "ramp_map_blur_updates_key_handler":
				t = () => {
					this.$iApi.geo.map.stopKeyPan();
				}, this.$iApi.event.on("map/blur", t, e);
				break;
			case "ramp_map_click_runs_identify":
				t = (e) => {
					e.button === 0 && this.$iApi.geo.map.runIdentify(e);
				}, this.on("map/click", t, e);
				break;
			case "ramp_map_created_initializes_fixtures":
				t = () => {
					let e = Kt(this.$vApp.$pinia).items;
					Object.keys(e).forEach((t) => {
						e[t].initialized?.();
					});
				}, this.$iApi.geo.map.created && t(), this.$iApi.event.on("map/created", t, e);
				break;
			case "ramp_map_created_updates_map_attribs":
				t = () => {
					this.$iApi.geo.map.caption.updateAttribution(v(this.$vApp.$pinia).activeBasemapConfig?.attribution);
				}, this.$iApi.geo.map.created && t(), this.$iApi.event.on("map/created", t, e);
				break;
			case "ramp_map_extent_updates_maptip":
				t = () => {
					if (this.$iApi.geo.map.keysActive) {
						let e = this.$iApi.geo.map.mapPointToScreenPoint(this.$iApi.geo.map.getExtent().center());
						this.$iApi.geo.map.maptip.checkAtCoord(e);
					} else this.$iApi.geo.map.maptip.clear();
				}, this.$iApi.event.on("map/extentchanged", Le(() => t(), 50, { edges: ["leading"] }), e);
				break;
			case "ramp_map_graphichit_creates_maptip":
				t = (e) => {
					this.$iApi.geo.map.maptip.generateDefaultMaptip(e);
				}, this.$iApi.event.on("map/graphichit", t, e);
				break;
			case "ramp_map_identify_opens_identify_results":
				t = (e) => {
					let t = this.$iApi.fixture.get("details");
					t && t.openDetails(e.results);
				}, this.on("map/identify", t, e);
				break;
			case "ramp_map_keydown_updates_coords":
				this.$iApi.event.on("map/keydown", Le(() => {
					let e = Ut(this.$vApp.$pinia);
					e.coords?.disabled || !this.$iApi.geo.map.keysActive || this.$iApi.geo.map.caption.formatPoint(this.$iApi.geo.map.getExtent().center()).then((t) => {
						e.coords = { formattedString: t };
					});
				}, 50), e);
				break;
			case "ramp_map_keydown_updates_key_handler":
				t = (e) => {
					this.$iApi.geo.map.mapKeyDown(e);
				}, this.$iApi.event.on("map/keydown", t, e);
				break;
			case "ramp_map_keyup_updates_key_handler":
				t = (e) => {
					this.$iApi.geo.map.mapKeyUp(e);
				}, this.$iApi.event.on("map/keyup", t, e);
				break;
			case "ramp_map_mouse_updates_coords":
				this.$iApi.event.on("map/mousemove", Le((e) => {
					let t = Ut(this.$vApp.$pinia);
					t.coords?.disabled || this.$iApi.geo.map.caption.formatPoint(this.$iApi.geo.map.screenPointToMapPoint(e)).then((e) => {
						t.coords = { formattedString: e };
					});
				}, 50), e);
				break;
			case "ramp_map_mouse_updates_maptip":
				t = (e) => {
					this.$iApi.geo.map.maptip.checkAtCoord({
						screenX: e.screenX,
						screenY: e.screenY
					});
				}, this.$iApi.event.on("map/mousemove", Le((e) => t(e), 50), e);
				break;
			case "ramp_map_mousedown_updates_maptip":
				t = (e) => {
					this.$iApi.geo.map.maptip.checkAtCoord({
						screenX: e.screenX,
						screenY: e.screenY
					});
				}, this.$iApi.event.on("map/mousedown", Le((e) => {
					let n = {
						screenX: e.offsetX,
						screenY: e.offsetY,
						button: e.button,
						moveTime: 0
					};
					t(n);
				}, 50), e);
				break;
			case "ramp_map_mouseleave_removes_maptip":
				t = () => {
					this.$iApi.geo.map.maptip.clear();
				}, this.$iApi.event.on("map/mouseleave", t);
				break;
			case "ramp_map_resize_updates_scalebar":
				this.$iApi.event.on("map/resized", Ie(() => this.$iApi.geo.map.caption.updateScale(), 100), e);
				break;
			case "ramp_map_scale_updates_scalebar":
				this.$iApi.event.on("map/scalechanged", Ie(() => this.$iApi.geo.map.caption.updateScale(), 300), e);
				break;
			case "ramp_panel_close_updates_appbar":
				t = (e) => {
					let t = Vt(this.$vApp.$pinia);
					this.$iApi.fixture.get("appbar") && !t.order.flat().find((t) => t === e.id) && t.removeButton(e.id);
				}, this.on("panel/closed", t, e);
				break;
			case "ramp_panel_open_updates_appbar":
				t = (e) => {
					let t = Vt(this.$vApp.$pinia);
					this.$iApi.fixture.get("appbar") && (!e.teleport || e.teleport?.showAppbarButton) && !t.order.flat().find((t) => t === e.id) && t.addTempButton(e.id);
				}, this.on("panel/opened", t, e);
				break;
			case "ramp_toggle_details":
				t = (e, t) => {
					let n = this.$iApi.fixture.get("details");
					n && n.toggleFeature(e, t);
				}, this.$iApi.event.on("details/toggle", t, e);
				break;
			case "ramp_toggle_grid":
				t = (e, t) => {
					let n = this.$iApi.fixture.get("grid");
					n && n.toggleGrid(e.id, t);
				}, this.$iApi.event.on("grid/toggle", t, e);
				break;
			case "ramp_toggle_help":
				t = (e) => {
					let t = this.$iApi.fixture.get("help");
					t && t.toggleHelp(e);
				}, this.$iApi.event.on("help/toggle", t, e);
				break;
			case "ramp_toggle_metadata":
				t = (e, t) => {
					let n = this.$iApi.fixture.get("metadata");
					n && n.toggleMetadata(e, t);
				}, this.$iApi.event.on("metadata/toggle", t, e);
				break;
			case "ramp_toggle_reorder":
				t = (e) => {
					let t = this.$iApi.fixture.get("layer-reorder");
					t && t.toggleLayerReorder(e);
				}, this.$iApi.event.on("reorder/toggle", t, e);
				break;
			case "ramp_toggle_settings":
				t = (e, t) => {
					let n = this.$iApi.fixture.get("settings");
					n && n.toggleSettings(e, t);
				}, this.$iApi.event.on("settings/toggle", t, e);
				break;
			case "ramp_toggle_wizard":
				t = (e) => {
					let t = this.$iApi.fixture.get("wizard");
					t && t.toggleWizard(e);
				}, this.$iApi.event.on("wizard/toggle", t, e);
				break;
			default: return console.error(`Unrecognized default event handler name encountered: ${e}`), `ERROR_NOT_REGISTERED__${e}`;
		}
		return e;
	}
}, Xt = {
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
}, Zt = "en", Qt = ["en", "fr"], $t = {
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
function en() {
	let e = document.documentElement.getAttribute("lang") || Zt;
	return Qt.includes(e) || (e = Zt), Re({
		legacy: !1,
		locale: e,
		fallbackLocale: Zt,
		globalInjection: !0,
		messages: Xt,
		numberFormats: $t
	});
}
//#endregion
//#region src/stores/maptip/maptip-store.ts
var tn = x("maptip", () => {
	let e = M(void 0), t = M(void 0), n = M("");
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
}), nn = /* @__PURE__ */ O({
	__name: "esri-map",
	setup(e) {
		let t = tn(), n = _e("iApi"), r = S(() => t.maptipPoint), i = S(() => t.maptipInstance), a = S(() => t.content), o = we([]), s = M(!1);
		o.push(Ne(r, () => {
			if (r.value) {
				let e = n.geo.map.getPixelWidth() / 2, t = n.geo.map.mapPointToScreenPoint(r.value), o = t.screenX - e, c = 0 - t.screenY;
				i.value.setProps({ offset: s.value ? [o, c + 25] : [o, c] }), a.value && a.value !== "" && i.value.show();
			} else i.value.hide();
		})), o.push(Ne(a, (e) => {
			e && e !== "" && r ? (i.value.setContent(e), i.value.show()) : i.value.hide();
		})), xe(() => {
			o.forEach((e) => e());
		});
		let c = () => {
			n.geo.map.setMouseFocus();
		};
		return (e, t) => {
			let n = P("tippy");
			return R((j(), T("div", {
				name: "esriMap",
				id: "esriMap",
				class: "h-full overflow-hidden",
				onMousedown: c,
				onTouchstart: t[0] ||= (e) => s.value = !0,
				onTouchend: t[1] ||= (e) => s.value = !1,
				onKeydown: t[2] ||= Pe(Fe(() => {}, ["prevent"]), [
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
}), rn = {
	xs: 200,
	sm: 576,
	md: 768,
	lg: 960
}, an = class {
	resizeObserver;
	constructor(e) {
		this.resizeObserver = new ResizeObserver((t) => {
			t.length && window.requestAnimationFrame(() => {
				t.forEach((t) => {
					let n = t.target.dataset.breakpoints, r = n ? JSON.parse(n) : e ?? rn;
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
}, on = ["data-cy"], sn = /* @__PURE__ */ O({
	__name: "panel-container",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = M(null), n = e, r = M(!1);
		Se(() => {
			n.panel.teleport && new an({
				xs: 0,
				sm: 461,
				...n.panel.teleport.breakpoints
			}).observe(t.value);
		});
		let i = (e, t, n) => {
			if (r.value) return t();
			Ve({
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
			let i = P("focus-container");
			return j(), T("div", {
				class: A(["shadow-tm bg-white h-full xs:mr-0 sm:mr-12 last:mr-0 pointer-events-auto min-w-0 shrink-0", e.panel.expanded ? "flex-grow max-w-full" : ""]),
				style: be(e.panel.style),
				"data-cy": e.panel.id,
				ref_key: "componentEl",
				ref: t
			}, [D(ue, {
				onBeforeLeave: o,
				onLeave: s,
				onEnter: a
			}, {
				default: L(() => [R((j(), C(Oe(e.panel.route.screen), ve({ class: "h-full" }, e.panel.route.props, { panel: e.panel }), null, 16, ["panel"])), [[i]])]),
				_: 1
			})], 14, on);
		};
	}
}), cn = x("panel", () => {
	let e = M(void 0), t = M(void 0), n = M(0), r = M(0), i = M(!1), a = M(!0), o = M({}), s = M({}), c = M([]), l = M([]), u = M([]), d = M(1), f = S(() => r.value);
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
		ie(e), ne(), t.value = void 0;
	}
	function g(e) {
		b(e), ne();
	}
	function ee(e, t) {
		ae(e, t), ne();
	}
	function _(e) {
		oe(e), ne();
	}
	function v(e) {
		d.value = e;
	}
	function y(e) {
		n.value = e, ne();
	}
	function te(e) {
		i.value = e;
	}
	function ne() {
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
	function re(e) {
		if (o.value = {
			...o.value,
			[e.id]: e
		}, e.id in s.value) s.value[e.id].resolveMe(e);
		else {
			let t = new Z();
			t.resolveMe(e), s.value = {
				...s.value,
				[e.id]: t
			};
		}
	}
	function ie(e) {
		e.teleport ? l.value = [...l.value, e] : (c.value = [...c.value, e], t.value = e);
	}
	function b(e) {
		if (e.teleport) {
			let t = l.value.indexOf(e);
			t !== -1 && (l.value = [...l.value.slice(0, t), ...l.value.slice(t + 1)]);
		} else {
			let t = c.value.indexOf(e);
			t !== -1 && (c.value = [...c.value.slice(0, t), ...c.value.slice(t + 1)]);
		}
	}
	function ae(e, t) {
		let n = c.value.indexOf(e), r = t === "right" ? 1 : -1;
		u.value.includes(c.value[n + r]) && ([c.value[n], c.value[n + r]] = [c.value[n + r], c.value[n]]);
	}
	function oe(t) {
		o.value[t.id] !== void 0 && delete o.value[t.id], s.value[t.id] !== void 0 && delete s.value[t.id];
		let n = u.value.indexOf(t);
		n !== -1 && (u.value = [...u.value.slice(0, n), ...u.value.slice(n + 1)]), e.value && e.value.id == t.id && (e.value = void 0);
	}
	function x(e) {
		s.value = {
			...s.value,
			[e]: new Z()
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
		closePanel: g,
		movePanel: ee,
		removePanel: _,
		setOpacity: v,
		setStackWidth: y,
		setMobileView: te,
		updateVisible: ne,
		registerPanel: re,
		addRegPromise: x
	};
}), ln = /*#__PURE__*/ y(/* @__PURE__ */ O({
	__name: "panel-stack",
	setup(e) {
		Ae((e) => ({ v3d36ee4c: i.value }));
		let t = cn(), n = _e("iApi"), r = M(), i = S(() => t.opacity), a = S(() => t.mobileView);
		Se(() => {
			new ResizeObserver((e) => {
				let r = !(n.$vApp.$root?.$refs["app-size"]).classList.contains("sm");
				a.value !== r && (t.mobileView = r, n.event.emit($.RAMP_MOBILEVIEW_CHANGE, r)), t.setStackWidth(e[0].contentRect.width);
			}).observe(r.value?.$el);
		});
		let o = (e) => t.getVisible(e), s = (e, t) => {
			l(e, t, [[6, 0], [0, 1]]);
		}, c = (e, t) => {
			let [n, r] = [e.children[0].getBoundingClientRect(), e.parentElement.getBoundingClientRect()];
			e.style.width = `${n.width}px`, e.style.height = `${n.height}px`, e.style.left = `${n.left - r.left}px`, e.style.position = "absolute", l(e, t, [[0, -6], [1, 0]]);
		}, l = (e, t, n) => {
			Ve({
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
		return (e, t) => (j(), C(de, {
			onEnter: s,
			onLeave: c,
			name: "panel-container",
			tag: "div",
			ref_key: "el",
			ref: r,
			class: "panel-container"
		}, {
			default: L(() => [(j(!0), T(ce, null, Ee(o(I(n).screenSize), (e) => (j(), C(sn, {
				key: `${e.id}`,
				panel: e
			}, null, 8, ["panel"]))), 128))]),
			_: 1
		}, 512));
	}
}), [["__scopeId", "data-v-717e4bd7"]]), un = ["content", "aria-label"], dn = /* @__PURE__ */ O({
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
		triggerClass: {
			type: String,
			default: "text-gray-500 hover:text-black"
		},
		centered: {
			type: Boolean,
			default: !0
		},
		ariaLabel: { type: String }
	},
	setup(e) {
		let t = M(!1), n = M(null), r = we([]), i = M(), a = M(), o = M(), s = e;
		r.push(Ne(t, () => {
			n.value.update();
		}));
		let c = () => {
			t.value = !t.value, o.value._tippy.hide();
		}, l = () => {
			o.value._tippy.setProps({ placement: t.value ? s.tooltipPlacementAlt : s.tooltipPlacement }), o.value._tippy.show();
		}, u = () => {
			o.value._tippy.hide();
		};
		return Se(() => {
			window.addEventListener("click", (e) => {
				(!i.value || !i.value.contains(e.target)) && (t.value = !1);
			}, { capture: !0 }), window.addEventListener("blur", () => {
				t.value = !1;
			}), window.addEventListener("focusin", (e) => {
				(!i.value || !i.value.contains(e.target)) && (t.value = !1);
			}), o.value.addEventListener("focus", l), o.value.addEventListener("blur", u), o.value.addEventListener("mouseover", l), o.value.addEventListener("mouseleave", u), ye(() => {
				o.value && a.value && (n.value = He(o.value, a.value, {
					placement: s.position || "bottom",
					modifiers: [{
						name: "overflowScroll",
						enabled: !0,
						phase: "main",
						fn({ state: e }) {
							let { bottom: t } = Ue(e);
							t > 0 ? (e.styles.popper.overflowY = t > 100 ? "auto" : void 0, e.styles.popper.overflowX = "hidden", e.styles.popper.height = `${e.rects.popper.height - t - 8}px`) : e.styles.popper.height = "auto";
						}
					}, {
						name: "offset",
						options: { offset: [0, 5] }
					}],
					...s.popperOptions
				}));
			});
		}), xe(() => {
			r.forEach((e) => e()), window.removeEventListener("click", (e) => {
				(!i.value || !i.value.contains(e.target)) && (t.value = !1);
			}, { capture: !0 }), window.removeEventListener("blur", () => {
				t.value = !1;
			}), window.removeEventListener("focusin", (e) => {
				(!i.value || !i.value.contains(e.target)) && (t.value = !1);
			}), o.value.removeEventListener("focus", l), o.value.removeEventListener("blur", u), o.value.removeEventListener("mouseover", l), o.value.removeEventListener("mouseleave", u), t.value = !1;
		}), (r, s) => {
			let l = P("tippy");
			return j(), T("div", {
				ref_key: "el",
				ref: i
			}, [R((j(), T("button", {
				type: "button",
				class: A(["dropdown-button", e.triggerClass]),
				onClick: c,
				content: e.tooltip,
				"aria-label": e.ariaLabel ? String(e.ariaLabel) : String(e.tooltip),
				ref_key: "dropdownTrigger",
				ref: o
			}, [De(r.$slots, "header")], 10, un)), [[l, {
				placement: e.tooltipPlacement,
				theme: e.tooltipTheme,
				animation: e.tooltipAnimation,
				trigger: "manual"
			}]]), R(E("div", {
				onClick: s[0] ||= (e) => n.value.update(),
				class: A(["rv-dropdown shadow-md border border-gray:200 py-8 bg-white rounded z-10", { "text-center": e.centered }]),
				ref_key: "dropdown",
				ref: a
			}, [De(r.$slots, "default", { close: () => t.value = !t.value })], 2), [[Me, t.value]])], 512);
		};
	}
}), fn = x("notification", () => {
	let e = 0, t = M([]), n = M({}), r = S(() => t.value.length >= 99 ? 99 : t.value.length);
	function i(n) {
		t.value = [{
			...n,
			id: `notif-${e++}`
		}, ...t.value];
	}
	function a(e) {
		if (t.value.includes(e)) {
			let n = t.value.indexOf(e);
			e instanceof yn && l(e), n > -1 && t.value.splice(n, 1);
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
}), pn = { class: "h-full flex flex-col" }, mn = { class: "w-full flex mb-6" }, hn = ["content", "aria-label"], gn = /* @__PURE__ */ O({
	__name: "screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let t = fn(), { t: n } = z(), r = S(() => t.notificationNumber), i = () => t.clearAll();
		return (t, a) => {
			let o = N("panel-screen"), s = P("tippy");
			return j(), C(o, { panel: e.panel }, {
				header: L(() => [pe(F(I(n)("notifications.title")), 1)]),
				content: L(() => [E("div", pn, [E("div", mn, [R((j(), T("button", {
					type: "button",
					onClick: i,
					class: A(["p-4 ml-auto", [r.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default pointer-events-none"]]),
					content: I(n)("notifications.controls.clearAll"),
					"aria-label": I(n)("notifications.controls.clearAll")
				}, [...a[0] ||= [E("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					class: "fill-current h-20 w-20",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, [
					E("path", {
						stroke: "none",
						d: "M0 0h24v24H0z",
						fill: "none"
					}),
					E("path", { d: "M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" }),
					E("path", { d: "M9 17v1a3 3 0 0 0 4.194 2.753" }),
					E("path", { d: "M22 22l-5 -5" }),
					E("path", { d: "M17 22l5 -5" })
				], -1)]], 10, hn)), [[s, {
					placement: "bottom",
					theme: "ramp4",
					animation: "scale"
				}]])]), D(kn, { class: "overflow-y-auto" })])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), _n = /* @__PURE__ */ function(e) {
	return e.ERROR = "error", e.INFO = "info", e.WARNING = "warning", e;
}({}), vn = class extends Q {
	notificationStore;
	constructor(e) {
		super(e), this.$iApi.panel.register({
			id: "notifications",
			config: {
				screens: { "notifications-screen": k(gn) },
				alertName: "notifications.title"
			}
		}), this.notificationStore = fn(this.$vApp.$pinia);
	}
	show(e, t) {
		this.notificationStore.showNotification({
			type: e,
			message: t
		});
	}
	addGroup(e, t, n) {
		if (this.getGroup(e)) throw Error("Duplicate notification group id registration: " + e);
		let r = new yn(this.$iApi, e, t, n);
		return this.notificationStore.registerGroup(r), r;
	}
	getGroup(e) {
		return this.notificationStore.groups[e];
	}
}, yn = class extends Q {
	notificationStore = fn(this.$vApp.$pinia);
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
}, bn = ["content"], xn = { class: "flex items-center text-left" }, Sn = { class: "select-text cursor-text" }, Cn = ["content", "aria-label"], wn = {
	key: 0,
	class: "text-left"
}, Tn = /* @__PURE__ */ O({
	__name: "notification-item",
	props: { notification: {
		type: Object,
		required: !0
	} },
	emits: ["remove"],
	setup(e, { emit: t }) {
		let { t: n } = z(), r = t, i = e, a = M(!1), o = we({
			[_n.WARNING]: "⚠",
			[_n.INFO]: "ℹ️",
			[_n.ERROR]: "❌"
		}), s = () => {
			if (!i.notification.messageList) return !1;
		};
		return (t, i) => {
			let c = P("tippy");
			return R((j(), T("li", {
				class: A(["flex-col default-focus-style p-4", e.notification.messageList ? "cursor-pointer" : ""]),
				content: I(n)(a.value ? "notifications.controls.collapse" : "notifications.controls.expand"),
				onClick: i[1] ||= (e) => a.value = !a.value
			}, [E("div", xn, [
				E("span", null, [pe(F(o[e.notification.type]) + " ", 1), E("span", Sn, F(e.notification.message), 1)]),
				i[4] ||= E("span", { class: "flex-grow" }, null, -1),
				e.notification.messageList ? (j(), T("div", {
					key: 0,
					class: A(["dropdown-icon p-4 pointer-events-none", { "transform -rotate-180": a.value }])
				}, [...i[2] ||= [E("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					height: "24",
					viewBox: "0 0 24 24",
					width: "24"
				}, [E("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })], -1)]], 2)) : w("", !0),
				R((j(), T("button", {
					type: "button",
					onClick: i[0] ||= Fe(() => r("remove"), ["stop"]),
					class: "mx-4 p-4 text-gray-500 hover:text-black",
					content: I(n)("notifications.controls.dismiss"),
					"aria-label": I(n)("notifications.controls.dismiss")
				}, [...i[3] ||= [E("svg", {
					class: "fill-current",
					height: "16",
					width: "16",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 105.16 122.88",
					"fill-rule": "evenodd"
				}, [E("path", { d: "M11.17,37.16H94.65a8.4,8.4,0,0,1,2,.16,5.93,5.93,0,0,1,2.88,1.56,5.43,5.43,0,0,1,1.64,3.34,7.65,7.65,0,0,1-.06,1.44L94,117.31v0l0,.13,0,.28v0a7.06,7.06,0,0,1-.2.9v0l0,.06v0a5.89,5.89,0,0,1-5.47,4.07H17.32a6.17,6.17,0,0,1-1.25-.19,6.17,6.17,0,0,1-1.16-.48h0a6.18,6.18,0,0,1-3.08-4.88l-7-73.49a7.69,7.69,0,0,1-.06-1.66,5.37,5.37,0,0,1,1.63-3.29,6,6,0,0,1,3-1.58,8.94,8.94,0,0,1,1.79-.13ZM5.65,8.8H37.12V6h0a2.44,2.44,0,0,1,0-.27,6,6,0,0,1,1.76-4h0A6,6,0,0,1,43.09,0H62.46l.3,0a6,6,0,0,1,5.7,6V6h0V8.8h32l.39,0a4.7,4.7,0,0,1,4.31,4.43c0,.18,0,.32,0,.5v9.86a2.59,2.59,0,0,1-2.59,2.59H2.59A2.59,2.59,0,0,1,0,23.62V13.53H0a1.56,1.56,0,0,1,0-.31v0A4.72,4.72,0,0,1,3.88,8.88,10.4,10.4,0,0,1,5.65,8.8Zm42.1,52.7a4.77,4.77,0,0,1,9.49,0v37a4.77,4.77,0,0,1-9.49,0v-37Zm23.73-.2a4.58,4.58,0,0,1,5-4.06,4.47,4.47,0,0,1,4.51,4.46l-2,37a4.57,4.57,0,0,1-5,4.06,4.47,4.47,0,0,1-4.51-4.46l2-37ZM25,61.7a4.46,4.46,0,0,1,4.5-4.46,4.58,4.58,0,0,1,5,4.06l2,37a4.47,4.47,0,0,1-4.51,4.46,4.57,4.57,0,0,1-5-4.06l-2-37Z" })], -1)]], 8, Cn)), [[c, {
					theme: "ramp4",
					animation: "scale"
				}]])
			]), e.notification.messageList && a.value ? (j(), T("div", wn, [(j(!0), T(ce, null, Ee(e.notification.messageList, (t, n) => (j(), T("p", { key: e.notification.id + t + n }, F(t), 1))), 128))])) : w("", !0)], 10, bn)), [[c, {
				onShow: s,
				theme: "ramp4",
				animation: "scale"
			}]]);
		};
	}
}), En = ["content"], Dn = {
	key: 0,
	class: "w-full border-b border-black"
}, On = {
	key: 1,
	class: "flex flex-col items-center h-full"
}, kn = /* @__PURE__ */ O({
	__name: "notification-list",
	setup(e) {
		let t = fn(), { t: n } = z(), r = M(), i = M({}), a = () => {
			r.value._tippy.hide();
		}, o = (e) => {
			e.key === "Tab" && r.value?.matches(":focus") && r.value._tippy.show();
		}, s = (e) => {
			let n = e < c.value.length - 1 ? e : e - 1;
			t.removeNotification(c.value[e]);
			let r = c.value[n];
			r && ye(() => {
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
		Se(() => {
			r.value?.addEventListener("blur", a), r.value?.addEventListener("keyup", o);
		}), xe(() => {
			r.value?.removeEventListener("blur", a), r.value?.removeEventListener("keyup", o);
		});
		let c = S(() => t.notificationStack);
		return (e, t) => {
			let a = P("focus-item"), o = P("focus-list"), l = P("tippy");
			return j(), T("div", null, [c.value.length > 0 ? R((j(), T("ul", {
				key: 0,
				content: I(n)("panels.controls.items"),
				ref_key: "el",
				ref: r,
				class: "h-full overflow-y-auto"
			}, [(j(!0), T(ce, null, Ee(c.value, (e, t) => (j(), T(ce, { key: e.id }, [t > 0 ? (j(), T("div", Dn)) : w("", !0), R(D(Tn, {
				ref_for: !0,
				ref: (t) => t ? i.value[e.id] = t : delete i.value[e.id],
				class: A([e.type]),
				notification: e,
				onRemove: (e) => s(t)
			}, null, 8, [
				"class",
				"notification",
				"onRemove"
			]), [[a]])], 64))), 128))], 8, En)), [[o], [l, {
				trigger: "manual",
				placement: "top-start",
				touch: !1
			}]]) : (j(), T("div", On, [
				t[0] ||= E("span", { class: "flex-grow" }, null, -1),
				t[1] ||= E("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					class: "h-48 w-48 fill-current"
				}, [E("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}), E("path", { d: "M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" })], -1),
				E("span", null, F(I(n)("notifications.empty")), 1),
				t[2] ||= E("span", { style: { "flex-grow": "6" } }, null, -1)
			]))]);
		};
	}
}), An = { class: "flex items-center" }, jn = ["aria-label"], Mn = {
	key: 0,
	class: "number rounded-full w-18 text-white"
}, Nn = { class: "notification-dropdown pointer-events-auto bg-white rounded text-center text-black w-500 h-256 flex flex-col p-0" }, Pn = { class: "pb-8 border-b border-gray-600" }, Fn = { class: "absolute flex right-3 top-3" }, In = ["content", "aria-label"], Ln = /*#__PURE__*/ y(/* @__PURE__ */ O({
	__name: "caption-button",
	setup(e) {
		let t = fn(), { t: n } = z(), r = S(() => t.notificationNumber), i = () => t.clearAll();
		return (e, t) => {
			let a = N("close"), o = P("tippy");
			return j(), C(dn, {
				position: "top-start",
				tooltip: I(n)("notifications.title"),
				tooltipPlacement: "top",
				"trigger-class": "text-gray-500 hover:text-white",
				class: "pointer-events-auto sm:flex ml-4 mr-8"
			}, {
				header: L(() => [E("div", An, [(j(), T("svg", {
					class: "fill-current w-24 h-24",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					"aria-label": I(n)("notifications.open")
				}, [...t[0] ||= [E("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" }, null, -1)]], 8, jn)), r.value && r.value > 0 ? (j(), T("span", Mn, F(r.value), 1)) : w("", !0)])]),
				default: L((e) => [E("div", Nn, [E("div", null, [E("h4", Pn, F(I(n)("notifications.title")), 1), E("div", Fn, [R((j(), T("button", {
					type: "button",
					onClick: i,
					class: A(["p-4 mr-6", [r.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default pointer-events-none"]]),
					content: I(n)("notifications.controls.clearAll"),
					"aria-label": I(n)("notifications.controls.clearAll")
				}, [...t[1] ||= [E("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					class: "fill-current h-20 w-20",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}, [
					E("path", {
						stroke: "none",
						d: "M0 0h24v24H0z",
						fill: "none"
					}),
					E("path", { d: "M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" }),
					E("path", { d: "M9 17v1a3 3 0 0 0 4.194 2.753" }),
					E("path", { d: "M22 22l-5 -5" }),
					E("path", { d: "M17 22l5 -5" })
				], -1)]], 10, In)), [[o, {
					placement: "bottom",
					theme: "ramp4",
					animation: "scale",
					appendTo: "parent"
				}]]), D(a, { onClick: e.close }, null, 8, ["onClick"])])]), D(kn, { class: "overflow-y-auto h-230" })])]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), [["__scopeId", "data-v-28078ee6"]]), Rn = { class: "flex" }, zn = ["aria-label"], Bn = { class: "about-ramp-dropdown pointer-events-auto bg-white rounded w-256 h-50" }, Vn = ["aria-label", "content"], Hn = { class: "pb-8 pt-1 border-b border-gray-600 mb-10" }, Un = { class: "absolute right-5 top-5" }, Wn = { class: "select-text" }, Gn = { class: "font-bold cursor-text" }, Kn = { class: "text-sm cursor-text" }, qn = { class: "font-bold cursor-text" }, Jn = { class: "ml-5 cursor-text" }, Yn = { class: "mt-5" }, Xn = ["href"], Zn = /*#__PURE__*/ y(/* @__PURE__ */ O({
	__name: "about-ramp-dropdown",
	props: { position: {
		type: String,
		default: "top-start"
	} },
	setup(e) {
		let { t } = z(), n = _e("iApi"), r = () => {
			n.reload();
		}, i = S(() => `${js.major}.${js.minor}.${js.patch}`), a = S(() => js.hash.slice(0, 9)), o = S(() => {
			let e = new Date(js.timestamp);
			if (isNaN(e.getTime())) return ["dev mode", "no date"];
			{
				let t = (e) => e < 10 ? "0" + e.toString() : e.toString();
				return [`${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`, `${e.getHours()}:${t(e.getMinutes())}:${t(e.getSeconds())}`];
			}
		});
		return (n, s) => {
			let c = N("close"), l = N("dropdown-menu"), u = P("tippy"), d = P("focus-item");
			return R((j(), C(l, {
				class: "pointer-events-auto sm:flex",
				position: e.position,
				tooltip: I(t)("ramp.about"),
				tooltipPlacement: e.position,
				"trigger-class": "text-gray-500 hover:text-white"
			}, {
				header: L(() => [E("div", Rn, [(j(), T("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					class: "fill-current w-20 h-20",
					"aria-label": I(t)("ramp.about.open")
				}, [...s[0] ||= [E("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }, null, -1)]], 8, zn))])]),
				default: L((e) => [E("div", Bn, [E("div", null, [
					R((j(), T("button", {
						class: "absolute left-5 top-5 text-gray-500 hover:text-black focus:text-black p-8",
						onClick: r,
						"aria-label": I(t)("ramp.reload"),
						content: I(t)("ramp.reload")
					}, [...s[1] ||= [E("svg", {
						class: "fill-current w-16 h-16",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24"
					}, [E("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })], -1)]], 8, Vn)), [[u, {
						placement: "bottom-start",
						theme: "ramp4",
						animation: "scale"
					}]]),
					E("h4", Hn, F(I(t)("ramp.about")), 1),
					E("div", Un, [D(c, { onClick: e.close }, null, 8, ["onClick"])]),
					E("div", Wn, [
						E("div", null, [E("span", Gn, F(i.value), 1), E("span", Kn, " [" + F(a.value) + "] ", 1)]),
						E("div", null, [E("span", qn, F(o.value[0]), 1), E("span", Jn, F(o.value[1]), 1)]),
						s[3] ||= E("div", { class: "mt-5" }, [E("a", {
							class: "text-sm underline text-blue-600",
							href: "https://github.com/ramp4-pcar4/ramp4-pcar4",
							target: "_blank"
						}, [E("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 24 24",
							class: "inline-block fill-black w-16 h-16 mb-4"
						}, [E("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })]), pe(" ramp4-pcar4 ")])], -1),
						E("div", Yn, [E("a", {
							class: "text-sm underline text-blue-600",
							href: I(t)("ramp.about.esriLink"),
							target: "_blank"
						}, [s[2] ||= E("svg", {
							viewBox: "0 0 24 24",
							xmlns: "http://www.w3.org/2000/svg",
							class: "inline-block fill-black w-16 h-16 mb-4"
						}, [E("path", { d: "M11.64.003C10.057.04 8.595.448 7.103 1.065c-2.07.873-4.706 2.881-6.312 6.67-.375 1.057-1.878 6.091.792 10.413 2.167 3.507 4.957 5.177 8.371 5.654 3.407.475 5.255.064 7.41-.893 5.039-2.236 8.887-10.634 5.038-16.72-1.519-2.81-5.498-5.274-9.855-5.084v.002c-1.03-.032-1.637.102-2.246.22-.182-.047-.525.003-.545.4 0 .213.069.38.204.477s1.264.93 2.094 1.813c-.398.044-.83.116-1.274.208-.495-1.07-2.086-.097-3.144-.055-.123.007-.242.024-.365.03-.116-.894-.2-1.821-.178-2.473C8.464.951 11.115.378 12.915.35l.315-.008c.264-.003.285-.212.036-.246q-.838-.114-1.627-.093m-.193 1.53c3.912-.017 7.35 1.641 8.925 3.57-.56-.291-1.767-.707-2.258-.816-.265-.27-.599-.49-.888-.676-.229-.146-.514-.092-.396.163.045.1.22.267.362.435-.835-.23-3.055-.407-4.111-.31-.69-.775-1.477-1.716-2.423-2.34q.396-.024.79-.026m-4.856.426c-.013.339.074 1.328.186 2.282q-.725.072-1.433.177A10.2 10.2 0 0 0 2.707 7.88c-.1-.892-.152-1.635-.113-2.092C3.705 4.231 5.214 2.715 6.59 1.96m8.418 2.65c.488.016.988.051 1.466.1-.859.307-1.237 1.062-1.658 1.662-.008.013-.024.023-.034.034a20 20 0 0 0-1.165-1.787c.426-.025.903-.027 1.391-.01m-2.375.12a13.3 13.3 0 0 1 1.48 2.153c-.681.33-1.59.582-1.96 1.11-.153.22-.19.519-.196.842a20 20 0 0 0-3.283 1.089 35 35 0 0 1-.951-3.253c1.097-1.048 2.38-1.217 2.91-1.628a15 15 0 0 1 2-.313m6.89.634c.45.171 1.029.408 1.486.657.347.437 1.34 1.418 1.871 4.165.478 2.474-.05 4.354-.212 4.898l-.163.64a15 15 0 0 1-.705 1.882c.077-.561.145-2.019.125-2.312.136.042.425-.122.473-.286.048-.165-.477-.42-.477-.42a18 18 0 0 0-.145-2.286c.12-.195.242-.383.367-.555a10 10 0 0 0-.157-1.333c.106.035.202.062.273.063.24.003.24-.161.163-.253-.049-.059-.278-.2-.545-.355a10.2 10.2 0 0 0-2.354-4.505M1.869 7.005s.051.896.095 1.55c0 0-.662.751-1 1.347.135-1.221.423-1.85.905-2.897m5.352.232c.198 1 .436 1.829.751 2.978-1.187.524-3.286 1.818-4.213 2.516-.168-.425-.343-1.028-.5-1.647.212-.624.643-1.06 1.25-1.121 1.04-.104 1.93-1.652 2.664-2.665.016-.023.033-.04.048-.06M2.07 9.478l.014.111a10.2 10.2 0 0 0-.34 2.294c.314.33.683.88 1.09 1.446-.262.195-.767.543-.886.628-.347.247-.342.636-.095.858.137.122.417.07.52-.01.303-.242.555-.433.902-.65.127.332.247.632.363.918-.148.16-.253.37-.288.677-.115.992.828 1.77 1.623 1.997.03.01.05.013.079.02.042.064.08.124.125.19a5 5 0 0 0-.888.898c-.112.146-.237.365-.136.408.104.042.454 0 .61-.028.395-.077.699-.514.971-.675.328.452.861 1.032 1.416 1.591.024.102.046.21.074.3.106.34.25.679.42 1.01.4.187.815.34 1.24.475a7 7 0 0 0-.527.61c-3.426-1.073-5.963-3.96-6.869-6.988a14.8 14.8 0 0 1-.551-5.48c.047.01.157.061.32.016.115-.079.524-.363.813-.616m9.891.182c-.006.282-.037.55-.153.765-.166.31-.09 1.209.113 1.503.639.93 1.701.412 2.5.747.366.153.61.407.815.71a13.6 13.6 0 0 0-4.832 1.196c-.781-1.66-1.455-3.83-1.455-3.83v-.003A16.4 16.4 0 0 1 11.96 9.66m-3.757 1.418c.423 1.262 1.028 2.95 1.447 3.852l-.183.093a35 35 0 0 0-2.757-.66c-.842-.173-.873-.128-1.82.147q-.203.057-.392.113a31 31 0 0 1-.376-1.018 23 23 0 0 1 4.08-2.527m13.136 1.976c.051.463.087.916.109 1.325a8 8 0 0 0-.656-.249c.166-.344.35-.712.547-1.076m-5.611 1.175c.16.28.34.56.585.81.641.655-.372 1.595-.08 3.449h-.003c-.3.032-.597.069-.86.109-.652.102-1.492.322-2.273.613-.449-.713-1.65-2.448-2.258-3.757 1.221-.6 2.926-1.104 4.889-1.224m4.755.556c.354.1.686.207.975.325.036.521.035 2.31-.067 3.184a3.5 3.5 0 0 1-.537.757 8 8 0 0 0-1.076-.32c.066-.079.139-.153.204-.235.227-1.52-.286-2.007.355-3.398zm-9.67 2.378c.482.811 1.057 1.693 1.502 2.383-.693.336-1.499.856-2.26 1.427.052-.878.07-1.746.247-2.209.248-.647.44-1.128.511-1.6m8.545 2.053c.463.054.926.131 1.208.202-.627.793-1.492 1.454-2.413 2.028.02-.345.033-.78.044-1.182.412-.32.802-.668 1.161-1.048m-2.952.01a6.5 6.5 0 0 0 .378.927c.16.324.347.56.549.721.072-.045.139-.096.21-.143-.005.355-.015.716-.036 1.064-.243.16-1.41.688-1.868.836a20 20 0 0 1-2.066-2.71c.715-.3 1.815-.567 2.833-.694m-3.628 1.002c.34.533 1.46 2.123 1.91 2.635-.815.142-1.956.249-2.86.21 0 0-1.356-.9-1.7-1.246.68-.565 1.781-1.235 2.65-1.599m-3.156 2.053c.396.263.82.564 1.157.758-.52-.06-1.131-.074-1.585-.229.131-.171.265-.383.428-.529" })], -1), pe(" " + F(I(t)("ramp.about.esriLegal")), 1)], 8, Xn)])
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
}), [["__scopeId", "data-v-966796d3"]]), Qn = "__HELP__", $n = x("keyboardnav", () => {
	let e = M(), t = M({}), n = M(!1), r = M([]), i = M(), a = M("idle"), o = ["H", "?"];
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
				let e = n ?? re.activeNamespace ?? re.keyChain[1];
				if (!e) {
					h({ suppressHandler: !0 });
					return;
				}
				g(["S", e]), v(void 0), y("awaitAction"), re.activeNamespace = e;
			}
		}
	}
	function f(n, r, i) {
		e.value = n, !i?.suppressHandler && t.value[n]?.activeHandler?.(re, r);
	}
	function p(n, r) {
		e.value && !r?.suppressHandler && t.value[e.value]?.deactiveHandler?.(re, n), e.value = void 0;
	}
	function m(n, r) {
		let i = e.value;
		if (!i) return;
		let a = t.value[i];
		if (!a) return;
		if (a.handler) {
			let e = a.handler(re, r, n);
			return d(e, r, i), {
				namespace: i,
				key: n,
				chainAction: e ?? void 0
			};
		}
		let o = a.keys.find((e) => e.key === n);
		if (!o) return;
		let s = o.handler?.(re, r);
		return d(s, r, i), {
			namespace: i,
			key: o.key,
			chainAction: s ?? void 0
		};
	}
	function h(e) {
		p(e?.event, { suppressHandler: e?.suppressHandler }), e?.preserveChain || (r.value = []), e?.preserveLastAction || (i.value = void 0), a.value = "idle";
	}
	function g(e) {
		r.value = [...e];
	}
	function ee(e) {
		r.value = [...r.value, e];
	}
	function _() {
		if (!r.value.length) return;
		let e = [...r.value], t = e.pop();
		return r.value = e, t;
	}
	function v(e) {
		i.value = e;
	}
	function y(e) {
		a.value = e;
	}
	function te(e) {
		p(e?.event, { suppressHandler: !0 }), a.value = "complete";
	}
	let ne = {
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
		setChain: g,
		appendKey: ee,
		popChain: _,
		setLastAction: v,
		setChainState: y,
		finalizeChain: te
	}, re = ne;
	return ne;
}), er = { class: "map-caption absolute bottom-0 h-29 sm:h-38 flex justify-end pointer-events-auto cursor-default select-none text-gray-200 bg-black-75 left-0 right-0 py-2 sm:py-6" }, tr = {
	key: 0,
	class: "relative ml-10 top-2 text-sm sm:text-base font-mono flex items-center gap-2",
	"aria-live": "polite"
}, nr = { class: "chain-content" }, rr = { class: "chain-keys" }, ir = {
	key: 0,
	class: "chain-cursor"
}, ar = {
	key: 1,
	class: "chain-options"
}, or = { key: 0 }, sr = {
	key: 1,
	class: "relative ml-10 top-2 text-sm sm:text-base"
}, cr = { class: "flex min-w-fit justify-end" }, lr = {
	key: 0,
	class: "pl-8 px-14 sm:block display-none relative top-2"
}, ur = [
	"aria-pressed",
	"aria-label",
	"content"
], dr = { class: "relative top-1 text-sm sm:text-base" }, fr = { class: "text-gray-200 hover:text-white text-sm sm:text-base pb-5" }, pr = ["onClick"], mr = {
	key: 0,
	class: "sr-only"
}, hr = /* @__PURE__ */ O({
	__name: "map-caption",
	setup(e) {
		let t = Ut(), n = $n(), r = v(), { t: i } = z(), a = _e("iApi"), o = S(() => t.scale), s = S(() => t.attribution), c = S(() => t.coords), l = S(() => t.langtoggle), u = S(() => r.config.map), { keyChain: d, lastAction: f, chainState: p, namespaces: m, activeNamespace: h } = se(n), g = S(() => {
			if (!d.value.length) return;
			let e = d.value.join(" "), t = p.value === "awaitNamespace" || p.value === "awaitAction", n, r = f.value;
			if (r) if (r.namespace === "__HELP__") n = i("keyboardnav.chain.help");
			else {
				let e = `keyboardnav.key.${r.namespace}.${r.key}`, t = i(e);
				t !== e && (n = t);
			}
			let a;
			if (p.value === "awaitNamespace") a = `[${[`H - ${i("keyboardnav.chain.help")}`, ...Object.keys(m.value).map((e) => {
				let t = `keyboardnav.ns.${e}`, n = i(t);
				return `${e} - ${n === t ? e : n}`;
			})].join(", ")}]`;
			else if (p.value === "awaitAction") {
				let e = h.value ?? d.value[1], t = e ? m.value[e] : void 0;
				t && t.keys?.length && (a = `[${t.keys.map((t) => {
					let n = `keyboardnav.key.${e}.${t.key}`, r = i(n), a = r === n ? t.key : r;
					return `${t.key} - ${a}`;
				}).join(", ")}]`);
			}
			return {
				keys: e,
				options: a,
				description: n,
				cursor: t && !!a
			};
		}), ee = M([]), _ = we([]);
		_.push(Ne(u, (e) => {
			e && a.geo.map.caption.createCaption(u.value?.caption);
		})), xe(() => {
			_.forEach((e) => e());
		}), Ce(() => {
			ye(() => {
				a.$i18n.locale.value && ee.value.length == 0 && (ee.value = a.$i18n.availableLocales);
			});
		});
		let y = (e) => {
			a.$i18n.locale.value != e && a.setLanguage(e);
		}, te = () => {
			t.toggleScale(), a.geo.map.caption.updateScale();
		}, ne = (e = !1) => i(e ? "map.toggleScaleToMetric" : "map.toggleScaleToImperial");
		return (e, t) => {
			let n = N("dropdown-menu"), r = P("truncate"), u = P("tippy");
			return j(), T("div", er, [
				D(Zn, {
					class: "sm:block display-none ml-8 mr-4",
					position: "top-end"
				}),
				D(Ln, { class: "sm:block display-none" }),
				g.value ? (j(), T("span", tr, [E("span", nr, [
					t[0] ||= E("span", { class: "chain-colon" }, ":", -1),
					E("span", rr, F(g.value.keys), 1),
					g.value.cursor ? (j(), T("span", ir, "_")) : w("", !0),
					g.value.options ? (j(), T("span", ar, F(g.value.options), 1)) : w("", !0)
				]), g.value.description ? (j(), T("span", or, "- " + F(g.value.description) + "...", 1)) : w("", !0)])) : s.value?.text.disabled ? w("", !0) : R((j(), T("span", sr, [pe(F(s.value?.text.value), 1)])), [[r, { options: {
					placement: "top",
					hideOnClick: !1,
					theme: "ramp4",
					animation: "scale"
				} }]]),
				t[1] ||= E("span", { class: "flex-grow w-15" }, null, -1),
				E("div", cr, [
					c.value?.disabled ? w("", !0) : R((j(), T("div", lr, [pe(F(c.value?.formattedString), 1)])), [[r, { options: {
						hideOnClick: !1,
						theme: "ramp4",
						animation: "scale"
					} }]]),
					o.value?.disabled ? w("", !0) : R((j(), T("button", {
						key: 1,
						type: "button",
						class: "flex-shrink-0 mx-2 sm:mx-10 px-4 pointer-events-auto cursor-pointer border-none",
						onClick: te,
						"aria-pressed": o.value?.isImperialScale,
						"aria-label": `
                    ${o.value?.label} - ${ne(o.value?.isImperialScale)}
                `,
						content: ne(o.value?.isImperialScale)
					}, [E("span", {
						class: "border-solid border-2 border-white border-t-0 h-5 mr-4 inline-block",
						style: be({ width: o.value?.width })
					}, null, 4), E("span", dr, F(o.value?.label), 1)], 8, ur)), [[u, {
						delay: [300, 0],
						placement: "top",
						hideOnClick: !1,
						theme: "ramp4",
						animation: "scale",
						touch: ["hold", 200]
					}]]),
					l.value?.disabled ? w("", !0) : (j(), C(n, {
						key: 2,
						class: "flex-shrink-0 pointer-events-auto focus:outline-none px-4 mr-4 relative top-2",
						position: "top-end",
						tooltip: I(i)("map.changeLanguage"),
						ariaLabel: `${I(i)("map.language.short")} - ${I(i)("map.changeLanguage")}`,
						tooltipPlacement: "top-start",
						tooltipPlacementAlt: "left-end"
					}, {
						header: L(() => [E("span", fr, F(I(i)("map.language.short")), 1)]),
						default: L(() => [(j(!0), T(ce, null, Ee(ee.value, (e, t) => (j(), T("a", {
							key: `${e}-${t}`,
							class: A(["flex-auto items-center text-sm sm:text-base cursor-pointer", { "font-bold": e === I(a).$i18n.locale.value }]),
							href: "javascript:;",
							onClick: (t) => y(e)
						}, [pe(F(I(i)("map.language." + e)) + " ", 1), e === I(a).$i18n.locale.value ? (j(), T("span", mr, F(I(i)("map.language.curr")), 1)) : w("", !0)], 10, pr))), 128))]),
						_: 1
					}, 8, ["tooltip", "ariaLabel"]))
				])
			]);
		};
	}
}), gr = ["content", "aria-label"], _r = {
	key: 0,
	class: "number absolute -top-2 -right-2 text-white w-18 rounded-full"
}, vr = /*#__PURE__*/ y(/* @__PURE__ */ O({
	__name: "floating-button",
	setup(e) {
		let t = fn(), n = _e("iApi"), { t: r } = z(), i = S(() => t.notificationNumber);
		return (e, t) => {
			let a = P("tippy");
			return R((j(), T("button", {
				type: "button",
				onClick: t[0] ||= (e) => I(n).panel.get("notifications").open(),
				class: "pointer-events-auto items-center absolute left-8 bottom-36 p-6 block sm:display-none bg-black-75 rounded-full text-gray-400 hover:text-white",
				content: I(r)("notifications.title"),
				"aria-label": I(r)("notifications.title")
			}, [t[1] ||= E("svg", {
				class: "fill-current w-24 h-24",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, [E("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })], -1), i.value && i.value > 0 ? (j(), T("span", _r, F(i.value), 1)) : w("", !0)], 8, gr)), [[a]]);
		};
	}
}), [["__scopeId", "data-v-a451db5c"]]), yr = { class: "flex items-center mb-20" }, br = { class: "text-xl" }, xr = /* @__PURE__ */ O({
	__name: "keyboard-instructions",
	setup(e) {
		let t = _e("iApi"), { t: n } = z(), r = M(!1), i = M([
			"app",
			"lists",
			"map",
			"keyboardNav"
		]), a = M([]), o = M(null), s = M(null);
		Se(() => {
			a.value.push(t.event.on("openKeyboardInstructions", () => {
				r.value = !0, ye(() => {
					o.value.focus();
				});
			}));
		}), xe(() => {
			a.value.forEach((e) => t.event.off(e));
		});
		let c = (e) => {
			e.key === "Tab" ? e.shiftKey && e.target === o.value ? (e.preventDefault(), s.value.focus()) : !e.shiftKey && e.target === s.value && (e.preventDefault(), o.value.focus()) : e.key === "Escape" && (e.preventDefault(), r.value = !1);
		};
		return (e, t) => {
			let a = N("close");
			return r.value ? (j(), T("div", {
				key: 0,
				class: "absolute inset-0 flex justify-center items-center bg-opacity-30 bg-black z-50 pointer-events-auto",
				onClick: t[3] ||= (e) => r.value = !1,
				onKeydown: c
			}, [E("div", {
				class: "bg-white w-500 pointer-events-auto shadow-2xl p-20 flex flex-col keyboard-instructions-modal-content",
				onClick: t[2] ||= Fe(() => {}, ["stop", "prevent"]),
				tabindex: "0",
				ref_key: "firstEl",
				ref: o
			}, [
				E("div", yr, [E("h2", br, F(I(n)("keyboardInstructions.title")), 1), D(a, {
					class: "ml-auto",
					onClick: t[0] ||= (e) => r.value = !1
				})]),
				(j(!0), T(ce, null, Ee(i.value, (e) => (j(), T("p", {
					class: "whitespace-pre-line pb-10",
					key: e
				}, F(I(n)(`keyboardInstructions.${e}`)), 1))), 128)),
				E("button", {
					type: "button",
					class: "mt-auto self-end mr-10 mb-10 px-20 py-10",
					onClick: t[1] ||= (e) => r.value = !1,
					ref_key: "lastEl",
					ref: s
				}, F(I(n)("keyboardInstructions.OK")), 513)
			], 512)], 32)) : w("", !0);
		};
	}
}), Sr = x("instance", () => ({ started: M(!1) })), Cr = { class: "h-full relative" }, wr = { class: "inner-shell absolute top-0 left-0 h-full w-full pointer-events-none" }, Tr = { class: "absolute top-8 w-full flex justify-center" }, Er = {
	key: 1,
	class: "w-full h-full"
}, Dr = O({
	name: "App",
	components: { Shell: /* @__PURE__ */ y(/* @__PURE__ */ O({
		__name: "shell",
		setup(e) {
			let t = _e("iApi"), n = Sr(), r = Kt(), i = cn(), { t: a } = z(), o = S(() => r.items.appbar), s = () => {
				t.event.emit("openKeyboardInstructions");
			}, c = () => i.teleported;
			return (e, t) => (j(), T("div", Cr, [
				E("div", wr, [
					t[0] ||= E("div", { class: "sr-only screen-reader-alert" }, null, -1),
					E("div", Tr, [E("button", {
						type: "button",
						class: "bg-white hidden-until-focus z-50 shadow-md px-10",
						onClick: s
					}, F(I(a)("keyboardInstructions.open")), 1)]),
					D(xr, { class: "keyboard-instructions-modal" }),
					D(ln, { class: "panel-stack sm:flex absolute inset-0 overflow-hidden sm:p-12 z-10 sm:pl-80 xs:pl-40 sm:pb-48 xs:pb-28 xs:pr-0 sm:pr-40" }),
					o.value ? w("", !0) : (j(), C(vr, { key: 0 })),
					D(hr, { class: "z-30" })
				]),
				I(n).started ? (j(), C(nn, { key: 0 })) : (j(), T("div", Er, [...t[1] ||= [E("div", { class: "spinner relative inset-x-1/2 inset-y-9/20" }, null, -1)]])),
				(j(!0), T(ce, null, Ee(c(), (e) => (j(), C(le, {
					to: e.teleport?.target,
					key: e.id
				}, [(j(), C(sn, {
					key: `${e.id}`,
					panel: e
				}, null, 8, ["panel"]))], 8, ["to"]))), 128))
			]));
		}
	}), [["__scopeId", "data-v-3d441124"]]) },
	setup() {
		let e = he();
		Se(() => {
			new an().observe(e?.proxy?.$refs["app-size"]), Ge({
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
}), Or = ["lang"], kr = {
	class: "h-full",
	ref: "app-size"
};
function Ar(e, t, n, r, i, a) {
	let o = N("shell");
	return j(), T("div", {
		class: "ramp-app ramp-styles animation-enabled",
		lang: e.$i18n.locale
	}, [E("div", kr, [D(o)], 512)], 8, Or);
}
var jr = /*#__PURE__*/ y(Dr, [["render", Ar]]), Mr = "focus-list", Nr = "focus-item", Pr = "focus-icon", Fr = `[${Mr}],[focus-container]`, Ir = "truncate-text", Lr = "show-truncate", Rr = "focused", zr = `button,input,select,a,textarea,[contenteditable],[${Mr}],[${Pr}],[tabindex]`, Br = {
	mounted(e, t) {
		+e.getAttribute("tabindex") <= 0 && e.setAttribute("tabindex", "0"), e.toggleAttribute(Mr, !0), new Hr(e, t.value);
	},
	updated(e) {
		Vr(e);
	}
};
function Vr(e) {
	e.querySelectorAll(zr).forEach((t) => {
		if (t.closest(Fr) === e || t.closest(Fr) === t && t.parentElement.closest(Fr) === e) if (t.closest(`[${Mr}],.${Rr}`).classList.contains(Rr)) t.setAttribute("tabindex", "0");
		else {
			t.setAttribute("tabindex", "-1");
			return;
		}
	});
}
var Hr = class {
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
		t.querySelectorAll(zr).forEach((t) => {
			(e === -1 || t.closest(Fr) === this.element || t.closest(Fr) === t && t.parentElement.closest(Fr) === this.element || t.closest(`[${Mr}],.${Rr}`).classList.contains(Rr)) && t.setAttribute("tabindex", e.toString());
		});
	}
	defocusItem(e) {
		e.classList.remove(Rr), this.setTabIndex(-1, e), e._tippy && e._tippy.hide(), e.getAttribute(Nr) === Lr && e.querySelector(`[${Ir}]`)?._tippy?.hide();
	}
	focusItem(e) {
		e.classList.add(Rr), this.setAriaActiveDescendant(e), this.setTabIndex(0, e), e.scrollIntoView({ block: "nearest" }), e._tippy && !this.isTapped && e._tippy.show(), e.getAttribute(Nr) === Lr && e.querySelector(`[${Ir}]`)?._tippy?.show(), this.isTapped = !1;
	}
	setAriaActiveDescendant(e) {
		this.element.setAttribute("aria-activedescendant", e.getAttribute("id"));
	}
	shiftHighlight(e, t = !1) {
		if (this.defocusItem(this.highlightedItem), t) if (this.highlightedItem === this.element) this.highlightedItem = e[e.length - 1];
		else {
			let t = Array.prototype.indexOf.call(e, this.highlightedItem);
			this.highlightedItem = e[t - 1] || e[e.length - 1];
		}
		else if (this.highlightedItem === this.element) this.highlightedItem = e[0];
		else {
			let t = Array.prototype.indexOf.call(e, this.highlightedItem);
			this.highlightedItem = e[t + 1] || e[0];
		}
		this.element.focus(), this.focusItem(this.highlightedItem);
	}
	onKeydown(e) {
		let t = this, n = Array.prototype.filter.call(this.element.querySelectorAll(`[${Nr}]`), (e) => e.closest(`[${Mr}]`) === t.element && !!e.offsetParent);
		if (n.length !== 0) switch (e.key) {
			case "Up":
			case "ArrowUp":
				if (this.isHorizontal) break;
				e.preventDefault(), e.stopPropagation(), this.shiftHighlight(n, !0);
				break;
			case "Down":
			case "ArrowDown":
				if (this.isHorizontal) break;
				e.preventDefault(), e.stopPropagation(), this.shiftHighlight(n);
				break;
			case "Left":
			case "ArrowLeft":
				if (!this.isHorizontal) break;
				e.preventDefault(), e.stopPropagation(), this.shiftHighlight(n, !0);
				break;
			case "Right":
			case "ArrowRight":
				if (!this.isHorizontal) break;
				e.preventDefault(), e.stopPropagation(), this.shiftHighlight(n);
				break;
			case "Esc":
			case "Escape":
				this.highlightedItem !== this.element && n.length > 1 && (e.preventDefault(), e.stopPropagation(), this.defocusItem(this.highlightedItem), this.highlightedItem = this.element, this.element.removeAttribute("aria-activedescendant"), this.element.focus());
				break;
			case "Enter":
			case " ":
				e.target === this.element && this.highlightedItem !== this.element && (e.preventDefault(), e.stopPropagation(), this.highlightedItem.click());
				break;
			case "Tab":
				let t = this.highlightedItem.querySelectorAll(zr).length === 0, r = this.element.isEqualNode(e.target);
				this.highlightedItem !== this.element && r && (t && this.defocusItem(this.highlightedItem), e.shiftKey && n.length > 1 && (e.preventDefault(), e.stopPropagation(), this.defocusItem(this.highlightedItem), this.highlightedItem = this.element, this.element.removeAttribute("aria-activedescendant"), this.element.focus()));
		}
	}
	onClick(e) {
		this.defocusItem(this.highlightedItem);
		let t = e.target;
		if (!t.hasAttribute(Mr)) for (; t.parentElement.closest(`[${Mr}]`) !== this.element;) t = t.parentElement.closest(`[${Mr}]`);
		this.highlightedItem = t.closest(`[${Nr}]`) || t.closest(`[${Mr}]`) || this.highlightedItem, t.hasAttribute(`${Nr}`) && this.element.focus(), this.highlightedItem === this.element ? this.element.removeAttribute("aria-activedescendant") : this.focusItem(this.highlightedItem);
	}
	onFocus() {
		if (this.highlightedItem === this.element) {
			let e = this.element.querySelectorAll(`[${Nr}]`);
			if (e.length === 1) {
				this.defocusItem(this.highlightedItem), this.highlightedItem = e[0], this.focusItem(e[0]);
				return;
			}
		}
		this.highlightedItem && !this.isClicked && (this.highlightedItem._tippy && this.highlightedItem._tippy.show(), this.highlightedItem.getAttribute(Nr) === Lr && this.highlightedItem.querySelector(`[${Ir}]`)?._tippy?.show()), this.isClicked = !1, this.element.hasAttribute("aria-activedescendant") || this.highlightedItem === this.element ? this.highlightedItem !== this.element && this.focusItem(this.highlightedItem) : this.setAriaActiveDescendant(this.highlightedItem), Vr(this.element), this.highlightedItem && this.highlightedItem !== this.element && this.highlightedItem.setAttribute("tabindex", "-1");
	}
	onBlur() {
		this.highlightedItem && (this.highlightedItem._tippy && this.highlightedItem._tippy.hide(), this.highlightedItem.getAttribute(Nr) === Lr && this.highlightedItem.querySelector(`[${Ir}]`)?._tippy?.hide());
	}
	onMousedown() {
		this.isClicked = !0;
	}
	onTouchstart() {
		this.isTapped = !0;
	}
}, Ur = "focus-item", Wr = { beforeMount(e, t) {
	e.hasAttribute("id") || e.setAttribute("id", Gr()), t.value ? e.setAttribute(Ur, t.value) : e.toggleAttribute(Ur, !0);
} };
function Gr() {
	let e;
	do
		e = "focus-item-" + Math.random().toString(36).substring(2, 9);
	while (document.getElementById(e) !== null);
	return e;
}
//#endregion
//#region src/directives/focus-list/focus-container.ts
var Kr = "focus-container", qr = "focus-container-active", Jr = "focus-list", Yr = "focus-icon", Xr = `[${Jr}],[${Kr}]`, Zr = `button,input,select,a,textarea,[contenteditable],.ag-tab-guard,[${Jr}],[${Kr}],[${Yr}],[tabindex]`, Qr = {
	childList: !0,
	subtree: !0,
	attributes: !0,
	attributeFilter: [
		"tabindex",
		Jr,
		Kr,
		Yr
	]
}, $r = [], ei = {
	mounted(e) {
		[...document.querySelectorAll(".inner-shell")].some((t) => t.contains(e)) && $r.push(new ti(e));
	},
	beforeUnmount(e) {
		$r = $r.filter((t) => t.element === e ? (t.removeEventListeners(), !1) : !0);
	}
}, ti = class {
	element;
	isTabbingEnabled;
	initialDisableTimeout;
	mutationObserver;
	keypressHandler;
	clickHandler;
	focusOutHandler;
	focusHandler;
	constructor(e) {
		this.element = e, this.isTabbingEnabled = !1, this.element.toggleAttribute(Kr, !0), this.element.toggleAttribute(qr, !1), this.element.tabIndex = 0, this.initialDisableTimeout = setTimeout(() => this.disableTabbing(), 600), this.keypressHandler = (e) => {
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
		e.target === this.element && (e.key === "Enter" || e.key === " ") && this.enableTabbing()?.focus();
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
		let t = Array.prototype.filter.call(this.element.querySelectorAll(Zr), () => !0);
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
			Array.prototype.map.call(this.element.querySelectorAll(Zr), (t) => {
				(t.closest(Xr) === this.element || t.closest(Xr) === t && t.parentElement.closest(Xr) === this.element) && t.offsetParent && (t.tabIndex !== 0 && (t.tabIndex = 0), e === void 0 && (e = t));
			});
		}), e;
	}
	setTabbingEnabled(e) {
		this.isTabbingEnabled = e, this.element.toggleAttribute(qr, e);
	}
	observeMutations() {
		this.mutationObserver?.observe(this.element, Qr);
	}
	withPausedObserver(e) {
		this.mutationObserver?.disconnect();
		try {
			e();
		} finally {
			this.observeMutations();
		}
	}
}, ni = "truncate-text", ri = "truncate-trigger", ii = {
	beforeMount(e, t) {
		!e.classList.contains("truncate") && !t.value?.noTruncateClass && e.classList.add("truncate"), e.toggleAttribute(ni, !0);
	},
	mounted(e, t) {
		let n;
		t.value && t.value.externalTrigger && (n = e.closest(`[${ri}]`)), Ke(e, {
			content: si(e.textContent),
			onShow: ai,
			allowHTML: !0,
			placement: "bottom-start",
			maxWidth: 320,
			triggerTarget: n,
			...t.value?.options || {}
		});
	},
	updated(e, t) {
		e._tippy && (e._tippy.setContent(si(e.textContent)), t.value && t.value.options && e._tippy.setProps(t.value.options));
	},
	unmounted(e) {
		e._tippy && e._tippy.destroy();
	}
};
function ai(e) {
	if (!(e.reference.clientWidth < e.reference.scrollWidth || e.reference.clientHeight < e.reference.scrollHeight)) return !1;
}
var oi = (e) => {
	let t = {
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#039;"
	};
	return e.replace(/[<>"']/g, (e) => t[e]);
};
function si(e) {
	if (e === null) return "";
	let t = qe(oi(e), {
		target: "_blank",
		validate: { url: (e) => /^https?:\/\//.test(e) }
	});
	return t = `<div style='word-break: break-word;'>${t}</div>`, t;
}
//#endregion
//#region src/components/panel-stack/panel-screen.vue?vue&type=script&setup=true&lang.ts
var ci = ["content"], li = {
	key: 0,
	class: "flex flex-shrink-0 items-center border-b border-solid border-gray-600 px-8 h-48 overflow-hidden"
}, ui = {
	class: "flex-grow text-lg py-16 pl-8 min-w-0",
	tabIndex: "0"
}, di = { key: 1 }, fi = {
	key: 0,
	class: "flex"
}, pi = ["innerHTML"], mi = {
	key: 2,
	class: "px-8 py-16 border-t border-gray-400 default-focus-style"
}, hi = "focus-container", gi = "focus-container-active", _i = /* @__PURE__ */ O({
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
		let { t: n } = z(), r = cn(), i = Vt(), a = _e("iApi"), o = je("el"), s = je("contentEl"), c = M(), l = M(), u = M();
		t({ el: o });
		let d = e, f = S(() => a.fixture.get("appbar") ? i.temporary : []), p = S(() => r.mobileView), m = S(() => r.reorderable), h = `[focus-list], [${hi}]`, g = (e) => e.scrollHeight > e.clientHeight, ee = (e) => e.querySelector(h), _ = () => {
			if (!s.value) return "-1";
			let e = s.value.closest(`[${hi}]`);
			if (e && !e.hasAttribute(gi)) return "-1";
			let t = !!ee(s.value);
			return g(s.value) && !t ? "0" : "-1";
		}, v = () => {
			if (!s.value) return;
			let e = _();
			s.value.getAttribute("tabindex") !== e && s.value.setAttribute("tabindex", e);
		}, y = (e) => {
			if (e.target !== s.value || !s.value) return;
			let t = ee(s.value);
			if (!t) return;
			let n = e.relatedTarget;
			n && s.value.contains(n) || t.focus();
		}, ne = () => {
			o.value?._tippy?.hide();
		}, re = (e) => {
			te(e, o.value) && o.value?._tippy?.show();
		}, ie = () => !p.value && !d.panel.teleport, b = (e) => {
			d.panel.move(e), e === "left" && ye(() => {
				(o.value?.querySelector(".move-left")).focus();
			});
		}, ae = S(() => d.screenId ? d.panel.screens[d.screenId][a.$i18n.locale.value ?? "en"] : null);
		return Se(() => {
			o.value?.addEventListener("blur", ne), o.value?.addEventListener("keyup", re), s.value && (s.value.addEventListener("focus", y), c.value = new ResizeObserver(v), c.value.observe(s.value), l.value = new MutationObserver(v), l.value.observe(s.value, {
				childList: !0,
				subtree: !0,
				attributes: !0,
				attributeFilter: ["focus-list", "focus-container"]
			}), u.value = new MutationObserver(v), u.value.observe(s.value, {
				attributes: !0,
				attributeFilter: ["tabindex"]
			}), v());
		}), xe(() => {
			o.value?.removeEventListener("blur", ne), o.value?.removeEventListener("keyup", re), s.value?.removeEventListener("focus", y), c.value?.disconnect(), l.value?.disconnect(), u.value?.disconnect();
		}), (t, r) => {
			let i = N("back"), a = N("panel-options-menu"), c = N("left"), l = N("right"), u = N("pin"), d = N("expand"), p = N("minimize"), h = N("close"), g = P("truncate"), ee = P("focus-item"), _ = P("tippy");
			return R((j(), T("div", {
				class: "h-full flex flex-col items-stretch",
				content: `<div style='word-break: break-word;'>${I(n)(e.panel.alertName) + ". " + I(n)("panels.access")}</div>`,
				ref_key: "el",
				ref: o
			}, [
				e.header ? (j(), T("header", li, [
					D(i, {
						class: A(e.panel.teleport ? "display-none" : "block sm:display-none"),
						onClick: r[0] ||= (t) => e.panel.close()
					}, null, 8, ["class"]),
					R((j(), T("h2", ui, [t.$slots.header ? De(t.$slots, "header", { key: 0 }) : (j(), T("div", di, F(I(n)(e.panel.alertName)), 1))])), [[g]]),
					t.$slots.controls ? (j(), C(a, { key: 0 }, {
						default: L(() => [De(t.$slots, "controls")]),
						_: 3
					})) : w("", !0),
					E("div", { class: A(e.panel.teleport ? "flex" : "display-none sm:flex") }, [
						e.panel.teleport ? w("", !0) : (j(), T("div", fi, [
							m.value ? (j(), C(c, {
								key: 0,
								onClick: r[1] ||= (e) => b("left"),
								active: !e.panel.isLeftMostPanel
							}, null, 8, ["active"])) : w("", !0),
							m.value ? (j(), C(l, {
								key: 1,
								onClick: r[2] ||= (e) => b("right"),
								active: !e.panel.isRightMostPanel
							}, null, 8, ["active"])) : w("", !0),
							D(u, {
								onClick: r[3] ||= (t) => e.panel.pin(),
								active: e.panel.isPinned
							}, null, 8, ["active"]),
							e.panel.controls && e.panel.controls.expand ? (j(), C(d, {
								key: 2,
								onClick: r[4] ||= (t) => e.panel.expand(),
								active: e.panel.expanded
							}, null, 8, ["active"])) : w("", !0)
						])),
						e.panel.button && f.value?.includes(e.panel.id) ? (j(), C(p, {
							key: 1,
							onClick: r[5] ||= (t) => e.panel.minimize()
						})) : w("", !0),
						D(h, { onClick: r[6] ||= (t) => e.panel.close() })
					], 2)
				])) : w("", !0),
				e.content ? (j(), T("div", {
					key: 1,
					class: "p-8 flex-grow overflow-y-auto",
					ref_key: "contentEl",
					ref: s,
					tabindex: "-1"
				}, [t.$slots.content ? De(t.$slots, "content", { key: 0 }) : ae.value ? (j(), T("div", {
					key: 1,
					innerHTML: ae.value.innerHTML
				}, null, 8, pi)) : w("", !0)], 512)) : w("", !0),
				e.footer ? R((j(), T("div", mi, [De(t.$slots, "footer")])), [[ee]]) : w("", !0)
			], 8, ci)), [[_, {
				trigger: "manual",
				touch: !1,
				onShow: ie,
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
}), vi = { class: "relative" }, yi = ["content", "aria-label"], bi = ["transform"], xi = /* @__PURE__ */ O({
	__name: "pin",
	props: { active: Boolean },
	setup(e) {
		let { t } = z();
		return (n, r) => {
			let i = P("tippy");
			return j(), T("div", vi, [R((j(), T("button", {
				type: "button",
				class: A(["text-gray-500 hover:text-black focus:text-black p-8", { "text-gray-700": e.active }]),
				content: I(t)(e.active ? "panels.controls.unpin" : "panels.controls.pin"),
				"aria-label": I(t)(e.active ? "panels.controls.unpin" : "panels.controls.pin")
			}, [(j(), T("svg", {
				class: "fill-current w-16 h-16",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 384 512",
				transform: `rotate(${e.active ? 30 : 0})`
			}, [...r[0] ||= [E("path", { d: "M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z" }, null, -1)]], 8, bi))], 10, yi)), [[i, {
				placement: "bottom",
				hideOnClick: !1
			}]])]);
		};
	}
}), Si = { class: "relative" }, Ci = ["content", "aria-label"], wi = /* @__PURE__ */ O({
	__name: "close",
	props: { active: Boolean },
	setup(e) {
		let { t } = z();
		return (n, r) => {
			let i = P("tippy");
			return j(), T("div", Si, [R((j(), T("button", {
				type: "button",
				class: A(["text-gray-500 hover:text-black focus:text-black p-8", { "text-gray-700": e.active }]),
				content: I(t)("panels.controls.close"),
				"aria-label": I(t)("panels.controls.close")
			}, [...r[0] ||= [E("svg", {
				class: "fill-current w-16 h-16",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 352 512"
			}, [E("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" })], -1)]], 10, Ci)), [[i, {
				placement: "bottom",
				theme: "ramp4",
				animation: "scale"
			}]])]);
		};
	}
}), Ti = { class: "relative" }, Ei = ["content", "aria-label"], Di = /* @__PURE__ */ O({
	__name: "back",
	props: { active: Boolean },
	setup(e) {
		let { t } = z();
		return (n, r) => {
			let i = P("tippy");
			return j(), T("div", Ti, [R((j(), T("button", {
				type: "button",
				class: A(["text-gray-500 hover:text-black focus:text-black p-8", { "text-gray-700": e.active }]),
				content: I(t)("panels.controls.back"),
				"aria-label": I(t)("panels.controls.back")
			}, [...r[0] ||= [E("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				class: "fill-current w-16 h-16",
				viewBox: "0 0 16 16"
			}, [E("path", {
				d: "M20.485784919653916,7.578491965389372h-14.170000000000005l3.5800000000000054,-3.589999999999997l-1.409999999999993,-1.4099999999999984l-6.000000000000008,6.0000000000000275l6.000000000000008,6l1.409999999999993,-1.4100000000000001l-3.58,-3.59h14.170000000000007Z",
				transform: "matrix(0.865803 0 0 0.865803 -1.99071 0.638058)"
			})], -1)]], 10, Ei)), [[i, {
				placement: "bottom",
				theme: "ramp4",
				animation: "scale"
			}]])]);
		};
	}
}), Oi = { class: "w-32 h-32" }, ki = ["content", "aria-label"], Ai = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	class: "h-24 w-24 fill-current transform rotate-90"
}, ji = {
	key: 1,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	class: "h-24 w-24 fill-current transform rotate-90"
}, Mi = /* @__PURE__ */ O({
	__name: "expand",
	props: { active: Boolean },
	setup(e) {
		let { t } = z();
		return (n, r) => {
			let i = P("tippy");
			return j(), T("div", Oi, [R((j(), T("button", {
				type: "button",
				class: "text-gray-500 hover:text-black focus:text-black w-full h-full flex justify-center items-center",
				content: I(t)(`panels.controls.${e.active ? "collapse" : "expand"}`),
				"aria-label": I(t)(`panels.controls.${e.active ? "collapse" : "expand"}`)
			}, [e.active ? (j(), T("svg", ji, [...r[1] ||= [
				E("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}, null, -1),
				E("path", {
					d: "M0 0h24v24H0V0z",
					fill: "none"
				}, null, -1),
				E("path", { d: "M8 19h3v3h2v-3h3l-4-4-4 4zm8-15h-3V1h-2v3H8l4 4 4-4zM4 9v2h16V9H4z" }, null, -1),
				E("path", { d: "M4 12h16v2H4z" }, null, -1)
			]])) : (j(), T("svg", Ai, [...r[0] ||= [
				E("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}, null, -1),
				E("path", {
					d: "M0 0h24v24H0V0z",
					fill: "none"
				}, null, -1),
				E("path", { d: "M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z" }, null, -1)
			]]))], 8, ki)), [[i, {
				placement: "bottom",
				theme: "ramp4",
				animation: "scale",
				hideOnClick: !1
			}]])]);
		};
	}
}), Ni = { class: "relative" }, Pi = ["content", "aria-label"], Fi = /* @__PURE__ */ O({
	__name: "minimize",
	props: { active: Boolean },
	setup(e) {
		let { t } = z();
		return (n, r) => {
			let i = P("tippy");
			return j(), T("div", Ni, [R((j(), T("button", {
				type: "button",
				class: A(["text-gray-500 hover:text-black focus:text-black p-6", { "text-gray-700": e.active }]),
				content: I(t)("panels.controls.minimize"),
				"aria-label": I(t)("panels.controls.minimize")
			}, [...r[0] ||= [E("svg", {
				class: "fill-current w-20 h-20",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, [E("path", {
				d: "M0 0h24v24H0V0z",
				fill: "none"
			}), E("path", { d: "M6 19h12v2H6z" })], -1)]], 10, Pi)), [[i, {
				placement: "bottom",
				theme: "ramp4",
				animation: "scale"
			}]])]);
		};
	}
});
//#endregion
//#region src/components/panel-stack/controls/use-panel-move-tooltip.ts
function Ii(e, t) {
	let n = null, r = null, i = () => {
		n &&= (clearTimeout(n), null), r?.(), r = null;
	};
	return xe(() => {
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
var Li = { class: "relative" }, Ri = ["content", "aria-label"], zi = /* @__PURE__ */ O({
	__name: "right",
	props: { active: Boolean },
	setup(e) {
		let { t } = z(), n = e, r = M(null), { syncTooltipAfterKeyboardMove: i } = Ii(r, () => !!n.active);
		return (n, a) => {
			let o = P("tippy");
			return j(), T("div", Li, [R((j(), T("button", {
				ref_key: "buttonRef",
				ref: r,
				type: "button",
				class: A(["p-8", {
					"text-gray-500 hover:text-black focus:text-black": e.active,
					"text-gray-300": !e.active
				}]),
				onClick: a[0] ||= (...e) => I(i) && I(i)(...e),
				content: I(t)("panels.controls.moveRight"),
				"aria-label": I(t)("panels.controls.moveRight")
			}, [...a[1] ||= [E("svg", {
				class: "fill-current w-16 h-16",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "4 4 16 16"
			}, [E("path", { d: "M 8.59 16.34 L 13.17 11.75 L 8.59 7.16 L 10 5.75 L 16 11.75 L 10 17.75 Z" })], -1)]], 10, Ri)), [[o, {
				placement: "bottom",
				theme: "ramp4",
				animation: "scale"
			}]])]);
		};
	}
}), Bi = { class: "relative" }, Vi = ["content", "aria-label"], Hi = /* @__PURE__ */ O({
	__name: "left",
	props: { active: Boolean },
	setup(e) {
		let t = e, { t: n } = z(), r = M(null), { syncTooltipAfterKeyboardMove: i } = Ii(r, () => !!t.active);
		return (t, a) => {
			let o = P("tippy");
			return j(), T("div", Bi, [R((j(), T("button", {
				ref_key: "buttonRef",
				ref: r,
				type: "button",
				class: A(["p-8 move-left", {
					"text-gray-500 hover:text-black focus:text-black": e.active,
					"text-gray-300": !e.active
				}]),
				onClick: a[0] ||= (...e) => I(i) && I(i)(...e),
				content: I(n)("panels.controls.moveLeft"),
				"aria-label": I(n)("panels.controls.moveLeft")
			}, [...a[1] ||= [E("svg", {
				class: "fill-current w-16 h-16",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "4 4 16 16"
			}, [E("path", { d: "M 15.41 16.09 L 10.83 11.5 L 15.41 6.91 L 14 5.5 L 8 11.5 L 14 17.5 Z" })], -1)]], 10, Vi)), [[o, {
				placement: "bottom",
				theme: "ramp4",
				animation: "scale"
			}]])]);
		};
	}
}), Ui = /*#__PURE__*/ y(/* @__PURE__ */ O({
	__name: "panel-options-menu",
	setup(e) {
		let { t } = z();
		return (e, n) => (j(), C(dn, {
			class: "flex",
			tooltip: I(t)("panels.controls.optionsMenu"),
			popperOptions: { strategy: "fixed" },
			position: "bottom-end"
		}, {
			header: L(() => [...n[0] ||= [E("div", { class: "p-6" }, [E("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				class: "fill-current w-20 h-20"
			}, [E("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })])], -1)]]),
			default: L(() => [De(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["tooltip"]));
	}
}), [["__scopeId", "data-v-51e22a4a"]]), Wi = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	class: "fill-current w-32 h-20"
}, Gi = {
	key: 1,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	class: "fill-current w-32 h-20"
}, Ki = /* @__PURE__ */ O({
	__name: "fullscreen-nav",
	setup(e) {
		let { t } = z(), n = _e("iApi"), r = () => {
			n.toggleFullscreen();
		};
		return (e, i) => {
			let a = N("mapnav-button");
			return j(), C(a, {
				onClickFunction: r,
				tooltip: I(t)("mapnav.fullscreen")
			}, {
				default: L(() => [I(n).isFullscreen ? (j(), T("svg", Wi, [...i[0] ||= [E("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}, null, -1), E("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }, null, -1)]])) : (j(), T("svg", Gi, [...i[1] ||= [E("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}, null, -1), E("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }, null, -1)]]))]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), qi = /* @__PURE__ */ O({
	__name: "geolocator-nav",
	setup(e) {
		let { t } = z(), n = _e("iApi"), r = we([]), i = async () => {
			if (r.length) a(r);
			else {
				let e = await o({
					maximumAge: Infinity,
					timeout: 5e3
				}).catch((e) => {
					e.code === GeolocationPositionError.PERMISSION_DENIED ? n.notify.show(_n.ERROR, t("mapnav.geolocator.error.permission")) : n.notify.show(_n.ERROR, t("mapnav.geolocator.error.internal"));
				});
				e && (r = [e.coords.longitude, e.coords.latitude], a(r));
			}
		}, a = (e) => {
			let t = new X("geolocation", e, Y.latLongSR(), !0);
			n.geo.map.zoomMapTo(t);
		}, o = (e) => new Promise((t, n) => navigator.geolocation.getCurrentPosition(t, n, e));
		return (e, n) => {
			let r = N("mapnav-button");
			return j(), C(r, {
				onClickFunction: i,
				tooltip: I(t)("mapnav.geolocator")
			}, {
				default: L(() => [...n[0] ||= [E("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					class: "fill-current w-32 h-20"
				}, [E("path", { d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" })], -1)]]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), Ji = /* @__PURE__ */ O({
	__name: "home-nav",
	setup(e) {
		let { t } = z(), n = _e("iApi"), r = () => {
			let e = n.geo.map.getExtentSet();
			n.geo.map.zoomMapTo(e.fullExtent);
		};
		return (e, n) => {
			let i = N("mapnav-button");
			return j(), C(i, {
				onClickFunction: r,
				tooltip: I(t)("mapnav.home")
			}, {
				default: L(() => [...n[0] ||= [E("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					class: "fill-current w-32 h-20"
				}, [E("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }), E("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				})], -1)]]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), Yi = {
	class: "relative w-32 h-32 text-gray-600 hover:text-black",
	tabindex: "-1"
}, Xi = [
	"disabled",
	"content",
	"aria-label",
	"aria-pressed",
	"aria-disabled"
], Zi = /*#__PURE__*/ y(/* @__PURE__ */ O({
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
		ariaLabel: {
			type: String,
			default: ""
		},
		ariaPressed: {
			type: Boolean,
			default: void 0
		},
		showOutline: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (t, n) => {
			let r = P("focus-item"), i = P("tippy");
			return j(), T("div", Yi, [R((j(), T("button", {
				type: "button",
				class: A(["w-full h-full default-focus-style", [e.showOutline ? "focus:outline focus:outline-2 focus:outline-blue-400 focus:absolute focus:z-50" : "focus:outline-none"]]),
				disabled: e.disabled,
				onClick: n[0] ||= (t) => !e.disabled && e.onClickFunction(),
				content: e.tooltip,
				"aria-label": e.ariaLabel || (typeof e.tooltip == "string" ? e.tooltip : ""),
				"aria-pressed": e.ariaPressed,
				"aria-disabled": e.disabled
			}, [De(t.$slots, "default", {}, void 0, !0)], 10, Xi)), [[r], [i, { placement: "left" }]])]);
		};
	}
}), [["__scopeId", "data-v-bafb7e3d"]]), Qi = {
	class: "relative",
	tabindex: "-1"
}, $i = ["aria-label", "content"], ea = /*#__PURE__*/ y(/* @__PURE__ */ O({
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
		let t = _e("iApi"), n = e, r = () => t.event.emit($.APPBAR_BUTTON_CLICK, n.buttonId);
		return (t, n) => {
			let i = P("focus-item"), a = P("tippy");
			return j(), T("div", Qi, [R((j(), T("button", {
				type: "button",
				class: "py-6 w-full h-full",
				onClick: n[0] ||= () => {
					e.onClickFunction(), r();
				},
				"aria-label": String(e.tooltip),
				content: `<div style='word-break: break-word;'>${e.tooltip}</div>`
			}, [De(t.$slots, "default", {}, void 0, !0)], 8, $i)), [[i], [a, {
				allowHTML: !0,
				placement: "right"
			}]])]);
		};
	}
}), [["__scopeId", "data-v-1cb84ae1"]]), ta = x("areas-of-interest", () => ({ areas: M([]) })), na = x("export", () => {
	let e = M({
		title: !0,
		map: !0,
		mapElements: !0,
		legend: !0,
		footnote: !0,
		timestamp: !0
	}), t = M("");
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
}), ra = x("extentguard", () => {
	let e = M(!1);
	function t(t) {
		e.value = t;
	}
	let n = M(!1);
	function r(e) {
		n.value = e;
	}
	let i = M(!1);
	function a(e) {
		i.value = e;
	}
	let o = M([]);
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
}), ia = {
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
}, aa = {
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
}, oa = class {
	provinceList = [];
	listFetched = !1;
	constructor(e) {
		Je.get(e).then((e) => {
			this.provinceList = e.data.definitions.map((e) => {
				let t = parseInt(e.code);
				return {
					code: t,
					abbr: aa[t],
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
		return t = r === "X" ? n === "X0A" || n === "X0B" || n === "X0C" ? 62 : 61 : ia[r], this.codeToProvince(t);
	}
};
function sa(e) {
	return new oa(e);
}
//#endregion
//#region src/fixtures/geosearch/store/types.ts
var ca = {
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
}, la = class {
	allTypes = {};
	validTypes = {};
	filterComplete = !1;
	typesFetched = !1;
	constructor(e, t) {
		Je.get(t).then((t) => {
			t.data.definitions.forEach((t) => {
				ca[e][t.code] = t.term.split(`${t.code}-`)[1];
			}), Object.keys(ca[e]).forEach((t) => {
				this.allTypes[t] = ca[e][t], this.validTypes[t] = ca[e][t];
			}), this.typesFetched = !0;
		});
	}
	filterValidTypes(e) {
		if (this.filterComplete) return this.validTypes;
		if (e = typeof e == "string" ? [e] : e, e && e.length > 0) for (let t of e) delete this.validTypes[t];
		return this.filterComplete = !0, this.validTypes;
	}
};
function ua(e, t) {
	return new la(e, t);
}
//#endregion
//#region src/fixtures/geosearch/store/query.ts
var da = class {
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
async function fa(e, t) {
	let n, r;
	return /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)(\s*[,|;\s]\s*)[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)[*]$/.test(t) && !e.disabledSearchTypes.includes("LAT/LNG") ? (r = t.slice(0, -1), n = new da(e, r), await xa(n)) : /^[ABCEGHJKLMNPRSTVXY]\d[A-Z]/.test(t) && !e.disabledSearchTypes.includes("FSA") ? (r = t.substring(0, 3).toUpperCase(), n = new da(e, r), await Sa(n)) : /^\d{2,3}[A-P]/.test(t) && !e.disabledSearchTypes.includes("NTS") ? (r = t.substring(0, 6).toUpperCase(), n = new da(e, r), await Ca(n)) : (r = encodeURIComponent(t.trim()), n = new da(e, r), await wa(n)), e.customSources.length && await _a(n, e.customSources), n;
}
var pa = async (e) => {
	let [t, n] = await Ye(Je.get(e));
	return t ? (console.error("Request error from " + e), console.error(t), Promise.reject("Could not load results from remote service.")) : n.data;
}, ma = (e, t, n) => [
	e + n,
	t - n,
	e - n,
	t + n
], ha = (e, t, n, r) => {
	let i = "", a = e.config;
	return t ? i = a.geoLocateUrl + "?q=" + e.query : (i = n && r ? `${a.geoNameUrl}?lat=${n}&lon=${r}&num=${a.maxResults}` : `${a.geoNameUrl}?q=${e.query}&num=${a.maxResults}`, a.categories.length > 0 && (i += `&concise=${a.categories.join(",")}`), a.officialOnly && (i += "&category=O")), i;
}, ga = (e, t) => t.filter((t) => e.types.validTypes[t.concise.code]).map((t) => ({
	name: t.name,
	flav: "nme",
	bbox: t.bbox,
	type: e.types.allTypes[t.concise.code],
	location: {
		city: t.location,
		province: e.provinces.codeToProvince(parseInt(t.province.code))
	},
	order: e.sortOrder.indexOf(t.concise.code) >= 0 ? e.sortOrder.indexOf(t.concise.code) : e.sortOrder.length
})), _a = async (e, t) => {
	let n = (await Promise.all(t.map((t) => t.onSearch(e.query)))).flat();
	e.addResult(n);
}, va = async (e) => {
	let [t, n] = await Ye(pa(ha(e, !0)));
	return t ? (console.error("Geolocation service failed"), e.failedServs.push("geolocation"), []) : n;
}, ya = async (e) => {
	let [t, n] = await Ye(pa(ha(e, !1))), r;
	t ? (console.error("GeoName service targeting Name failed"), e.failedServs.push("geoname"), r = []) : r = n.items, e.addResult(ga(e.config, r));
}, ba = async (e, t, n) => {
	let [r, i] = await Ye(pa(ha(e, !1, t, n))), a;
	r ? (console.error("GeoName service targeting Lat Lon failed"), e.failedServs.push("geoname"), a = []) : a = i.items, e.addResult(ga(e.config, a));
}, xa = async (e) => {
	let t = e.query.split(/[\s|,|;|]/).filter((e) => !isNaN(e) && e !== "").map((e) => parseFloat(e)), n = t[0], r = t[1], i = {
		name: `${n},${r}`,
		flav: "llg",
		location: {},
		type: "Latitude/Longitude",
		bbox: ma(r, n, .015),
		order: -1
	};
	await ba(e, n, r), e.addResult(i);
}, Sa = async (e) => {
	let t = e.config, n = await va(e);
	if (n.length) {
		let r = n[0].geometry.coordinates, i = r[1], a = r[0], o = {
			name: e.query,
			flav: "fsa",
			bbox: ma(a, i, .03),
			type: t.types.allTypes.FSA,
			location: { province: t.provinces.fsaToProvince(e.query) },
			order: -1
		};
		e.addResult(o);
	}
}, Ca = async (e) => {
	let t = e.config, n = await va(e);
	if (n.length) {
		let r = n[0], i = r.title.split(" "), a = i.shift() || "", o = i.join(" "), s = r.geometry.coordinates, c = s[1], l = s[0], u = {
			name: a,
			flav: "nts",
			bbox: r.bbox ?? ma(l, c, .03),
			type: t.types.allTypes.NTS,
			location: { city: o },
			order: -1
		};
		e.addResult(u);
	}
}, wa = async (e) => {
	let t = e.config;
	if (await ya(e), t.categories.length === 0 || t.categories.includes("ADDR")) {
		let n = await va(e), r = t.sortOrder.indexOf("ADDR"), i = r >= 0 ? r : t.sortOrder.length, a = n.filter((e) => e.type?.includes("Street")).map((e) => {
			let [n, r, a] = e.title.split(", "), o = e.geometry.coordinates, s = o[1], c = o[0];
			return {
				name: n,
				flav: "add",
				bbox: ma(c, s, .002),
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
}, Ta = "~FSA~", Ea = "https://geogratis.gc.ca/services/geolocation/@{language}/locate", Da = "https://geogratis.gc.ca/services/geoname/@{language}/geonames.json", Oa = "https://geogratis.gc.ca/services/geoname/@{language}/codes/province.json", ka = "https://geogratis.gc.ca/services/geoname/@{language}/codes/concise.json", Aa = class {
	config;
	constructor(e, t) {
		let n, r, i, a, o = t?.serviceUrls;
		o ? (n = o.geoLocation ? o.geoLocation : Ea, r = o.geoNames ? o.geoNames : Da, i = o.geoProvince ? o.geoProvince : Oa, a = o.geoTypes ? o.geoTypes : ka) : (n = Ea, r = Da, i = Oa, a = ka), n = n.replace("@{language}", e), r = r.replace("@{language}", e), i = i.replace("@{language}", e), a = a.replace("@{language}", e);
		let s = "", c = t?.fsaBoundaries;
		if (c && c.serviceUrl) {
			let e = c.keyField || "CFSAUID";
			s = `${c.serviceUrl}/query/?where=${e}%3D'${Ta}'&outFields=${e}&returnGeometry=true&f=json`;
		}
		let l = t?.settings, u, d, f, p, m, h;
		l ? (u = l.categories ? l.categories : [], d = l.sortOrder ? l.sortOrder : [], f = l.disabledSearchTypes ? l.disabledSearchTypes : [], p = l.maxResults > 0 ? l.maxResults : 100, m = !!l.officialOnly) : (u = [], d = [], f = [], p = 100, m = !1), h = t?.customSources ?? [], h = h.map((e) => ({
			...e,
			onSearch: async (t) => {
				let n = e.data ?? [], r = Ma(), i = decodeURIComponent(r.cleanVal(t)).replace("*", "");
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
			types: ua(e, a),
			provinces: sa(i),
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
		let t = await fa(this.config, e.toUpperCase()), n = this.config.sortOrder.length, r = t.results.filter((e) => e.order < n), i = t.results.filter((e) => e.order >= n);
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
function ja(e, t, n) {
	if (e && t.extent) {
		let e = t.extent;
		n = n.filter((t) => t.bbox[0] <= e.xmax && t.bbox[1] <= e.ymax && t.bbox[2] >= e.xmin && t.bbox[3] >= e.ymin);
	}
	return t.province && t.province !== "..." && (n = n.filter((e) => e.location.province?.name && e.location.province.name === t.province)), t.type && t.type !== "..." && (n = n.filter((e) => e.type === t.type)), n;
}
var Ma = x("geosearch", () => {
	let e = M(new Aa("en", void 0)), t = M({
		type: "",
		province: "",
		extent: void 0
	}), n = M(!1), r = M(""), i = M(""), a = M(""), o = M([]), s = M([]), c = M(!1), l = M([]), u = S(() => e.value.fetchProvinces().then((e) => (e.sort((e, t) => e.name.localeCompare(t.name, void 0, { sensitivity: "case" })), e))), d = S(() => new Promise((t) => {
		e.value.fetchTypes().then((e) => {
			e.sort((e, t) => e.name.localeCompare(t.name, void 0, { sensitivity: "case" })), t(e);
		});
	}));
	function f(t, n) {
		e.value = new Aa(t, n);
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
					l.value = e.failedServs, a.value = u, s.value = e.results, o.value = ja(n.value, t.value, s.value) || [], c.value = !1;
				}));
			}, 250);
		} else o.value = ja(n.value, t.value, s.value) || [], c.value = !1;
	}
	function h(e) {
		t.value.province = e.province === void 0 ? "" : e.province, m(e.forceReRun);
	}
	function g(e) {
		t.value.type = e.type === void 0 ? "" : e.type, m(e.forceReRun);
	}
	function ee(e) {
		a.value = r.value.replace(/["!*$+?^{}()|[\]\\]/g, "").trim(), r.value = e, m();
	}
	function _(e) {
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
		e = p(e), i.value = e.trim().split(/\s+/).map((e) => Array.from(e).map((e) => Object.keys(t).includes(e) ? "[" + e + t[e] + "]" : e.replace(/["$!*+?^{}()|[\]\\]/g, "").replace(/[.\\]/g, "\\$&")).join("")).join("|");
	}
	function v(e) {
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
		setType: g,
		setSearchTerm: ee,
		setSearchRegex: _,
		setMapExtent: v,
		cleanVal: p
	};
}), Na = /* @__PURE__ */ function(e) {
	return e.Visibility = "visibilityButton", e.Expand = "expandButton", e;
}({}), Pa = /* @__PURE__ */ function(e) {
	return e.Item = "item", e.Placeholder = "placeholder", e.Error = "error", e;
}({}), Fa = class extends Q {
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
		super(e), this._uid = Fs.sharedUtils.generateUUID(), this._name = t.name, this._type = t.type ?? "placeholder", this._parent = n, this._children = [], this._loadPromise = new Z(), this._hidden = t.hidden ?? !1, this._expanded = t.expanded ?? !0, this._visibility = !0, this._exclusive = t.exclusive ?? !1, this._controls = t.controls?.slice() ?? ["visibilityButton", "expandButton"], this._disabledControls = t.disabledControls?.slice(), this._visibleChildren = [];
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
			else if (this.visibility) if (this._lastVisible && (!(this._lastVisible instanceof Ia) || this._lastVisible.layerControlAvailable(J.Visibility))) this._lastVisible.toggleVisibility(!0);
			else {
				let e = this.children.find((e) => !(e instanceof Ia) || e.layerControlAvailable(J.Visibility));
				e && e.toggleVisibility(!0);
			}
			else this._lastVisible = this.children.find((e) => e.visibility), this._lastVisible?.toggleVisibility(!1);
			this.parent && t && this.parent.checkVisibility(this);
		}
	}
	checkVisibilityRules() {
		(this.parent && !this.parent.visibility || this.parent?.exclusive && this.parent.children.some((e) => e.visibility && e !== this && e.type === "item")) && this.toggleVisibility(!1, !1);
	}
	checkVisibility(e) {
		this instanceof Ia && !this.layerControlAvailable(J.Visibility) || (this.exclusive ? e.visibility ? (this.children.forEach((t) => {
			t.uid !== e.uid && t.toggleVisibility(!1, !1);
		}), this._lastVisible = e, this._visibility = !0, this instanceof Ia && this.layer && this.layer.layerExists && (this.layer.visibility = !0)) : (this._visibility = !1, this instanceof Ia && this.layer && this.layer.layerExists && (this.layer.visibility = !1), this._lastVisible = e) : this.children.some((e) => e.visibility) ? (this._visibility = !0, this._visibleChildren = this.children.filter((e) => e.visibility), this instanceof Ia && this.layer && this.layer.layerExists && (this.layer.visibility = !0)) : (this._visibility = !1, this._visibleChildren = [], this instanceof Ia && this.layer && this.layer.layerExists && (this.layer.visibility = !1)), this.parent && this.parent.checkVisibility(this));
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
		this._type = "item", this._loadPromise.resolveMe(), this.checkVisibilityRules();
	}
	reload() {
		this._type = "placeholder", this._loadPromise = new Z();
	}
	error() {
		this._type !== "error" && (this._type = "error", this._loadPromise.getPromise().catch(() => {}), this._loadPromise.rejectMe(), this.checkVisibilityRules());
	}
}, Ia = class extends Fa {
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
		if (super(e, t, n), this._type = Pa.Placeholder, this._layerId = t.layerId, this._layerIdx = t.sublayerIndex, this._isSublayer = t.sublayerIndex !== void 0, this._layerControls = t.layerControls ?? [], this._origLayerControls = t.layerControls, this._layerDisabledControls = t.disabledLayerControls ?? [], this._origLayerDisabledControls = t.disabledLayerControls, this._layerRedrawing = !1, this._symbologyExpanded = t.symbologyExpanded || !1, t.coverIcon && (this._coverIcon = t.coverIcon), t.description && (this._description = t.description), this._symbologyRenderStyle = t.symbologyRenderStyle ?? "icons", this._customSymbology = !!t.symbologyStack, this._symbologyStack = t.symbologyStack?.map((e) => ({
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
		if (!(!this.layerControlAvailable(J.Visibility) && !n) && (super.toggleVisibility(e, t), this.layer && this.layer.layerExists)) {
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
			e.length === 0 ? t = "1=2" : e.length < this.symbologyStack.length && (t = e.join(" OR ")), this.layer.setSqlFilter(q.SYMBOL, t);
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
		let t = e instanceof mo ? e : this.$iApi.geo.layer.getLayer(this._layerId ?? this._layerUid);
		t && (this.layer = t, this._layerRedrawing = t.mapLayer && t.drawState !== ct.UP_TO_DATE, t.loadPromise().then(() => {
			this._layerInitVis = this._layerInitVis === void 0 ? t.visibility : this._visibility, super.load(), this.toggleVisibility(this._layerInitVis, !0, !0), t.visibility || this.setSymbologyVisibility(void 0, !1), this.handlers.push(this.$iApi.event.on($.LAYER_VISIBILITYCHANGE, (e) => {
				e.layer.uid === this.layer.uid && this._type === Pa.Item && this.toggleVisibility(e.visibility, !0, !0);
			})), this.handlers.push(this.$iApi.event.on($.LAYER_DRAWSTATECHANGE, (e) => {
				this.layer.uid === e.layer.uid && (e.layer.drawState === ct.REFRESH ? this.layerRedrawing = !0 : setTimeout(() => {
					this.layerRedrawing = e.layer.drawState === ct.REFRESH;
				}, 500));
			})), this._layerOffscale = this.$iApi.geo.map.created ? t.isOffscale() : !1, this.handlers.push(this.$iApi.event.on($.MAP_SCALECHANGE, () => {
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
}, La = /* @__PURE__ */ function(e) {
	return e.Title = "title", e.Text = "text", e.Image = "image", e.Markdown = "markdown", e.Template = "template", e;
}({}), Ra = class extends Fa {
	_infoType;
	_content;
	constructor(e, t, n) {
		super(e, t, n), this._infoType = t.infoType ?? "title", this._content = t.content ?? "", t.infoType === "template" && this.$element.component(`${this._uid}-info-section`, { template: this._content }), (t.infoType || t.content) && (this._controls = t.controls?.slice() ?? [Na.Expand]), super.load();
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
}, za = x("legend", () => {
	let e = M(), t = M([]), n = M([]), r = M(!0), i = M(3);
	function a(e) {
		if (e.parent === void 0) t.value.push(e.item);
		else {
			if (!(e.item instanceof Ra) && !(e.item instanceof Ia)) {
				console.error("attempted to add an unsupported legend item type");
				return;
			}
			e.parent.children.push(e.item);
		}
	}
	function o(e) {
		let n = (t) => (t = t.filter((t) => (t === e && !t.children.length && t.onRemoved(), t !== e)), t.forEach((e) => {
			e.children = n(e.children);
		}), t = t.filter((e) => !(e instanceof Ra && !e.children.length && e.content === "")), t);
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
}), Ba = x("mapnav", () => {
	let e = M({}), t = M([]);
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
}), Va = x("metadata", () => ({
	status: M(""),
	response: M("")
})), Ha = x("northarrow", () => ({
	arrowIcon: M(""),
	poleIcon: M("")
})), Ua = x("overviewmap", () => {
	let e = M({
		lodSets: [],
		extentSets: [],
		basemaps: [],
		tileSchemas: [],
		initialBasemapId: ""
	}), t = M({}), n = M(!0), r = M(1.5), i = M("#FF0000"), a = M(1), o = M("#000000"), s = M(.25);
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
}), Wa = x("panguard", () => {
	let e = M(!0);
	function t(t) {
		e.value = t;
	}
	return {
		enabled: e,
		setEnabled: t
	};
}), Ga = x("scrollguard", () => {
	let e = M(!1);
	function t(t) {
		e.value = t;
	}
	return {
		enabled: e,
		setEnabled: t
	};
}), Ka = /* @__PURE__ */ function(e) {
	return e[e.UPLOAD = 0] = "UPLOAD", e[e.FORMAT = 1] = "FORMAT", e[e.CONFIGURE = 2] = "CONFIGURE", e;
}({}), qa = x("wizard", () => {
	let e = {
		id: "Placeholder",
		layerType: V.UNKNOWN,
		url: ""
	}, t = M(), n = M(""), r = M(""), i = M(!0), a = M(null), o = M({
		config: e,
		configOptions: []
	}), s = M(Ka.UPLOAD);
	function c(t) {
		switch (s.value) {
			case Ka.UPLOAD:
				t === Ka.UPLOAD ? n.value = "" : t === Ka.FORMAT && (s.value = Ka.FORMAT);
				break;
			case Ka.FORMAT:
				t === Ka.UPLOAD ? (a.value &&= (n.value = "", null), r.value = "", s.value = Ka.UPLOAD) : t === Ka.CONFIGURE && (s.value = Ka.CONFIGURE);
				break;
			case Ka.CONFIGURE:
				t === Ka.UPLOAD ? (n.value = "", r.value = "", a.value = null, i.value = !0, o.value = {
					config: e,
					configOptions: []
				}, s.value = Ka.UPLOAD) : t === Ka.FORMAT && (o.value = {
					config: e,
					configOptions: []
				}, i.value = !0, s.value = Ka.FORMAT);
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
}), Ja = class {
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
		this.event = new Yt(this);
		let r = Ya(e, this);
		this.$vApp = r.app, this.$element = r.element, this.$i18n = r.i18n, this.$rootEl = r.app.$root?.$el, this.fixture = new ls(this), this.panel = new ds(this), this.geo = new os(this), this.dev = new vs(this), this.ui = {
			maptip: this.geo.map.maptip,
			exposeOids: !1,
			exposeMeasurements: !0,
			getZoomIcon: () => "",
			formatNumber: () => "",
			scrollToInstance: !1,
			suppressNumberLocalization: !1,
			escapeHtml: () => "",
			isPlainText: () => !0
		}, this.notify = new vn(this), this._isFullscreen = ze.isEnabled && !!this.$vApp.$root && ze.isFullscreen && ze.element === this.$vApp.$root.$el, ze.isEnabled && ze.onchange(() => {
			this._isFullscreen = ze.isEnabled && !!this.$vApp.$root && ze.isFullscreen && ze.element === this.$vApp.$root.$el;
		}), this.initialize(!0, t, n);
	}
	initialize(e, t, n) {
		let r = v(this.$vApp.$pinia), i = cn(this.$vApp.$pinia), a = tn(this.$vApp.$pinia);
		if (t?.configs !== void 0) {
			let e = Object.keys(this.$i18n.messages.value);
			r.registerAllConfigs(t, e);
			let n = r.registeredConfigs[r.registeredLangs[this.$i18n.locale.value]];
			r.newConfig(n), r.activeBasemapConfig = n.map.basemaps.find((e) => e.id === n.map.initialBasemapId);
			let o = setInterval(() => {
				let e = this.$vApp.$el.querySelector("#esriMap");
				e && (clearInterval(o), this.geo.map.createMap(n.map, e).then(() => {
					if (e._tippy.hide(0), a.setMaptipInstance(e._tippy), n.layers && n.layers.length > 0) {
						let e = 0;
						n.layers.forEach((t) => {
							let n = this.geo.layer.createLayer(t);
							this.geo.map.addLayer(n, e).catch(() => {}), n.mapLayer && e++;
						});
					}
				}));
			}, 100);
			if (n.panels) {
				if (n.panels.open && n.panels.open.length > 0) {
					let e = n.panels.open.map((e) => e.id);
					this.panel.isRegistered(e).then(() => {
						n.panels?.open?.forEach((e) => {
							this.panel.open({
								id: e.id,
								screen: e.screen
							}), e.pin && this.panel.pin(e.id);
						});
					});
				}
				i.reorderable = n.panels.reorderable ?? !0;
			}
			!n.system?.animate && this.$element._container && this.$element._container.children[0] && this.$element._container.children[0].classList.remove("animation-enabled"), n.system?.proxyUrl && (this.geo.proxy = n.system.proxyUrl), n.system?.exposeOid && (this.ui.exposeOids = n.system.exposeOid), n.system?.exposeMeasurements != null && (this.ui.exposeMeasurements = n.system.exposeMeasurements), n.system?.scrollToInstance && (this.ui.scrollToInstance = n.system?.scrollToInstance), n.system?.suppressNumberLocalization && (this.ui.suppressNumberLocalization = n.system?.suppressNumberLocalization);
			let s = {
				magnify: "<svg class=\"m-auto\" xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" viewBox=\"0 0 24 24\" width=\"16\"><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\" /><path d=\"M0 0h24v24H0V0z\" fill=\"none\" /><path d=\"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z\" /></svg>",
				globe: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xml:space=\"preserve\"><g transform=\"matrix(0.67 0 0 0.67 8 8)\"><path style=\" stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: #979797; fill-rule: nonzero; opacity: 1;\" transform=\" translate(-12, -12)\" d=\"M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 z M 11 19.93 C 7.05 19.44 4 16.08 4 12 C 4 11.38 4.08 10.79 4.21 10.21 L 9 15 L 9 16 C 9 17.1 9.9 18 11 18 L 11 19.93 z M 17.9 17.39 C 17.639999999999997 16.580000000000002 16.9 16 15.999999999999998 16 L 14.999999999999998 16 L 14.999999999999998 13 C 14.999999999999998 12.45 14.549999999999999 12 13.999999999999998 12 L 8 12 L 8 10 L 10 10 C 10.55 10 11 9.55 11 9 L 11 7 L 13 7 C 14.1 7 15 6.1 15 5 L 15 4.59 C 17.93 5.779999999999999 20 8.649999999999999 20 12 C 20 14.08 19.2 15.97 17.9 17.39 z\" stroke-linecap=\"round\" /></g></svg>"
			}, c = n.system?.zoomIcon || "globe", l = s[c] || c;
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
		n ||= {};
		let o = Sr(this.$vApp.$pinia);
		n?.startRequired ? (this.startRequired = !0, o.started = !1) : (this.startRequired = !1, o.started = !0, this.event.emit($.MAP_START)), e && (n.loadDefaultFixtures !== !1 || t?.startingFixtures !== void 0) ? this.fixture.addDefaultFixtures(t?.startingFixtures) : e || this.fixture.restore(), n.loadDefaultEvents !== !1 && !this._eventsOn && (this.event.addDefaultEvents(), this._eventsOn = !0);
	}
	reloadWorker(e, t) {
		let n = Sr(this.$vApp.$pinia), r = fn(this.$vApp.$pinia), i = v(this.$vApp.$pinia), a = Kt(this.$vApp.$pinia), o = _(this.$vApp.$pinia), s = Ht(this.$vApp.$pinia), c = !!e;
		c ? Object.keys(a.items).forEach((e) => {
			this.fixture.exists(e) && this.fixture.remove(e);
		}) : this.fixture.flush(), Object.keys(s.grids).forEach((e) => {
			s.removeGrid(e);
		}), n.started = !1, this.geo.map.destroyMap(), o.$reset(), t?.loadDefaultEvents === !1 && (this.event.removeDefaultEvents(), this._eventsOn = !1), c || (e = JSON.parse(JSON.stringify({
			startingFixtures: i.startingFixtures,
			configs: i.registeredConfigs
		}))), r.clearAll(), this.geo.map.maptip.clear(), this.initialize(c, e, t), c && this.event.emit($.CONFIG_CHANGE, this.getConfig());
	}
	reload(e, t) {
		this.reloadWorker(e, t), this.event.emit($.RAMP_RELOAD);
	}
	component(e, t) {
		if (t) {
			let n = this.$element.component(e);
			if (n) return n;
			let r = this.$element.component(e, t);
			return this.event.emit($.COMPONENT, e), r;
		}
		return this.$element.component(e);
	}
	get screenSize() {
		if (!this.$vApp?.$root || !this.$vApp.$root.$refs["app-size"]) return null;
		let e = this.$vApp.$root.$refs["app-size"].classList;
		return e.contains("lg") ? "lg" : e.contains("md") ? "md" : e.contains("sm") ? "sm" : "xs";
	}
	getConfig() {
		let e = v(this.$vApp.$pinia);
		return JSON.parse(JSON.stringify(e.getActiveConfig(this.language)));
	}
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
			"keyboardnav",
			"legend",
			"mapnav",
			"metadata",
			"northarrow",
			"overviewmap",
			"panguard",
			"scrollguard",
			"wizard"
		].includes(e) && !this.fixture.exists(e))) switch (e) {
			case "appbar": return Vt(this.$vApp.$pinia);
			case "areas-of-interest": return ta(this.$vApp.$pinia);
			case "details": return Gt(this.$vApp.$pinia);
			case "export": return na(this.$vApp.$pinia);
			case "extentguard": return ra(this.$vApp.$pinia);
			case "geosearch": return Ma(this.$vApp.$pinia);
			case "grid": return Ht(this.$vApp.$pinia);
			case "help": return ne(this.$vApp.$pinia);
			case "keyboardnav": return $n(this.$vApp.$pinia);
			case "legend": return za(this.$vApp.$pinia);
			case "mapnav": return Ba(this.$vApp.$pinia);
			case "metadata": return Va(this.$vApp.$pinia);
			case "northarrow": return Ha(this.$vApp.$pinia);
			case "overviewmap": return Ua(this.$vApp.$pinia);
			case "panguard": return Wa(this.$vApp.$pinia);
			case "scrollguard": return Ga(this.$vApp.$pinia);
			case "wizard": return qa(this.$vApp.$pinia);
			case "config": return v(this.$vApp.$pinia);
			case "fixture": return Kt(this.$vApp.$pinia);
			case "instance": return Sr(this.$vApp.$pinia);
			case "layer": return _(this.$vApp.$pinia);
			case "map-caption": return Ut(this.$vApp.$pinia);
			case "maptip": return tn(this.$vApp.$pinia);
			case "notification": return fn(this.$vApp.$pinia);
			case "panel": return cn(this.$vApp.$pinia);
			default:
				console.error(`The store ${e} does not exist.`);
				return;
		}
	}
	setLanguage(e) {
		if (this.$i18n.locale.value === e) return;
		let t = v(this.$vApp.$pinia), n = fn(this.$vApp.$pinia), r = t.registeredLangs;
		Object.keys(t.registeredConfigs).length === 1 && n.clearAll();
		let i = this.$i18n.locale.value;
		this.$i18n.locale.value = e;
		let a = this.getConfig();
		r[i] !== r[e] && (this.reloadWorker(), this.event.emit($.CONFIG_CHANGE, a)), this.event.emit($.LANG_CHANGE, {
			oldLang: i,
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
		ze.isEnabled && ze.toggle(this.$element._container || void 0);
	}
	get isFullscreen() {
		return this._isFullscreen;
	}
	get started() {
		return Sr(this.$vApp.$pinia).started;
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
		let e = Sr(this.$vApp.$pinia);
		!e.started && this.startRequired ? (this.event.emit($.MAP_START), e.started = !0) : e.started && console.warn("start has already been called");
	}
	containsValidHtml(e) {
		return /<(\w+)([^>]*)>(.*?)<\/\1>/.test(e);
	}
	representsObject(e) {
		return /^(?:\[\s*(?:[\s\S]*?)\s*\]|\{\s*(?:[\s\S]*?)\s*\})$/.test(e);
	}
};
function Ya(e, t) {
	let n = oe();
	n.use(({ store: e }) => {
		let t = Be(e.$state);
		e.$reset = () => e.$patch(Be(t));
	});
	let r = en(), i = fe(jr).use(r).use(We, {
		directive: "tippy",
		component: "tippy"
	}).use(n);
	return i.directive("focus-container", ei), i.directive("focus-list", Br), i.directive("focus-item", Wr), i.directive("truncate", ii), i.component("panel-screen", _i), i.component("pin", xi), i.component("close", wi), i.component("back", Di), i.component("expand", Mi), i.component("panel-options-menu", Ui), i.component("dropdown-menu", dn), i.component("minimize", Fi), i.component("right", zi), i.component("left", Hi), i.component("fullscreen-nav-button", Ki), i.component("geolocator-nav-button", qi), i.component("home-nav-button", Ji), i.component("mapnav-button", Zi), i.component("appbar-button", ea), i.component("transition", ue), i.component("transition-group", de), i.config.globalProperties.$iApi = t, i.config.globalProperties.$pinia = n, i.config.idPrefix = `ramp-${e.id || Fs.sharedUtils.generateUUID()}`, i.provide("iApi", t), {
		element: i,
		app: i.mount(e),
		i18n: r.global
	};
}
//#endregion
//#region src/geo/map/basemap.ts
var Xa = class e {
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
			if (e.layerType === V.TILE) return m.TileLayer(t);
			if (e.layerType === V.VECTORTILE) return m.VectorTileLayer(t);
			if (e.layerType === V.MAPIMAGE) return m.MapImageLayer(t);
			if (e.layerType === V.OSM) return m.OpenStreetMapLayer(t);
			throw Error(`Unsupported layer type provided to basemap config: ${e.layerType}`);
		}), i = (await Promise.allSettled(r)).filter((e) => e.status === "rejected" ? (console.error(e.reason), n.createErr = !0, !1) : !0).map((e) => {
			if (e.status === "fulfilled") return e.value;
			throw Error("TS is fun");
		});
		return n.esriBasemap = await m.Basemap({
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
}, Za = class extends Q {
	esriMap;
	_basemapStore;
	created = !1;
	name;
	trackFirstBasemap = !1;
	esriView;
	loadPromise() {
		return this.loadDefProm.getPromise();
	}
	loadDefProm;
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
		super(e), this.esriMap = void 0, this._basemapStore = [], this._viewPromise = new Z(), this.loadDefProm = new Z(), this.handlers = [], this.pointZoomScale = 5e4, this.name = t;
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
			this.$iApi.notify.show(_n.ERROR, this.$iApi.$i18n.t("layer.error", { id: e.name }));
		}, r = e.basemaps.map((e) => Xa.create(e)), a = (await Promise.all(r)).filter((e) => (e.createErr && n(e), e.esriBasemap.baseLayers.length > 0));
		a.forEach((e) => {
			e.esriBasemap.baseLayers.forEach((t) => {
				i(() => t.loadStatus, () => {
					t.loadStatus === "loaded" ? this.trackFirstBasemap = !1 : t.loadStatus === "failed" && (n(e), this.trackFirstBasemap && this.recoverBasemap(e.tileSchemaId));
				});
			});
		}), this._basemapStore = a, e.labelsDefault && (this.labelsDefault.visible = e.labelsDefault.visible);
		let o = {};
		this.esriMap = k(await m.Map(o)), this.pointZoomScale = e.pointZoomScale && e.pointZoomScale > 0 ? e.pointZoomScale : 5e4, this._targetDiv = t, this.createMapView(e.initialBasemapId);
	}
	destroyMap() {
		if (!this.esriMap || !this.esriView) {
			this.noMapErr();
			return;
		}
		this.destroyMapView(), this.esriMap.destroy(), delete this.esriMap, this._basemapStore.forEach((e) => e.esriBasemap.destroy()), this._basemapStore = [], this.loadDefProm = new Z();
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
		this._viewPromise = new Z(), this.created = !1, this.handlers.forEach((e) => e.handler.remove()), this.handlers = [], this.esriView.map = null, this.esriView.container = null, this.esriView.spatialReference = null, this.esriView.extent = null, this.esriView.navigation = null, this.esriView.destroy(), delete this.esriView;
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
		t.esriBasemap.id !== n && (this.esriMap.basemap = ke(t.esriBasemap));
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
			a.type === B.POINT && (o.scale = t || this.pointZoomScale);
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
		return this.esriView ? bt.fromESRI(this.esriView.extent) : (this.noMapErr(), bt.fromParams("i_am_error", 0, 1, 0, 1));
	}
	getExtentSet() {
		return this._rampExtentSet ? this._rampExtentSet : (this.noMapErr(), At.fromConfig({
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
		return this._rampSR ? this._rampSR.clone() : (this.noMapErr(), Y.latLongSR());
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
}, Qa = class extends Q {
	maptipStore;
	constructor(e) {
		super(e), this.maptipStore = tn(this.$vApp.$pinia);
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
		if (n?.geomType != B.POLYGON && this.#e && this.#e.layerId === t.layerId && this.#e.oid === t.oid && this.#e.layerIdx === t.layerIdx) return;
		if (this.clear(), this.#e = t, !n) {
			console.error(`graphic hit test returned non-existent layer id: ${t.layerId}`);
			return;
		}
		if (!n.maptips) return;
		let r = await n.getIcon(t.oid), i = await n.getGraphic(t.oid, { getAttribs: !0 });
		this.maptipStore.maptipInstance.enable(), this.setPoint(this.$iApi.geo.map.screenPointToMapPoint(e)), this.$iApi.event.emit($.MAP_GRAPHICHIT, {
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
}, $a = class extends Za {
	overviewGraphicLayer;
	overviewmapStore;
	constructor(e) {
		super(e, "overview"), this.overviewGraphicLayer = this.$iApi.geo.layer.createLayer({
			id: "RampOverviewGraphic",
			layerType: V.GRAPHIC,
			url: "",
			cosmetic: !0,
			system: !0
		}), this.overviewmapStore = Ua(this.$vApp.$pinia);
	}
	async createMapView(e) {
		if (!e) throw Error("Attempted to create overview map view without a basemap");
		let t = typeof e == "string" ? await this.findBasemap(e) : e;
		await this.applyBasemap(t), this._rampExtentSet = this.$iApi.geo.map.getExtentSet().clone(), this._rampSR = this._rampExtentSet.sr.clone();
		let n = this.overviewmapStore.expandFactor;
		this.esriView = k(await m.MapView({
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
		}), i(() => this.esriView.fatalError, () => {
			let e = new IntersectionObserver((t) => {
				t.forEach((t) => {
					t.isIntersecting && (this.esriView?.tryFatalErrorRecovery(), e.disconnect());
				});
			});
			e.observe(this.esriView.container);
		}), this.esriView.when(() => {
			this._viewPromise.resolveMe(), this.created = !0, this.loadDefProm.resolveMe();
		});
	}
	async addMapGraphicLayer() {
		if (!this.esriMap) {
			this.noMapErr();
			return;
		}
		let e = new ut(this.$iApi.geo.map.getExtent(), "overview-graphic"), t = this.overviewmapStore.borderColour ?? "#FF0000", n = this.overviewmapStore.borderWidth ?? 1, r = this.overviewmapStore.areaColour ?? "#000000", i = this.overviewmapStore.areaOpacity ?? .25;
		e.style = new Tt({
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
		let t = this._basemapStore.find((t) => t.id === e);
		if (t) return t;
		{
			let t = v(this.$vApp.$pinia).config.map;
			if (t) {
				let n = t.basemaps.find((t) => t.id === e);
				if (n) return Xa.create(n);
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
			if (e.action === "start") await this.cursorHitTest(e) && (this.startExtent = k(this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry));
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
}, eo = class extends Q {
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
		let t = Ut(this.$vApp.$pinia);
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
		if (e ? (e.text ? e.text.disabled ? n.text.disabled = !0 : n.text.value = e.text.value || t.value : n.text.value = t.value, Ut(this.$vApp.$pinia).setAttribution(n)) : n.text.value = t.value, !e || e.text?.disabled || !e.text) {
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
					e = r.filter((e) => e?.copyright).map((e) => e.copyright).join(" | "), n.text.value = e || n.text.value || t.value, Ut(this.$vApp.$pinia).setAttribution(n);
				});
			}
		}
	}
	updateScale() {
		let e = Ut(this.$vApp.$pinia), t = e.scale;
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
}, to = class extends Za {
	maptip;
	caption;
	mapMouseThrottle;
	_hilighLightLayerId = "";
	identifyGeometryProviders = [];
	layerDefaultTimes = {
		draw: 12e3,
		load: 12e3,
		fail: 9e4
	};
	constructor(e) {
		super(e, "main"), this.maptip = new Qa(e), this.caption = new eo(e), this.mapMouseThrottle = 0;
	}
	async createMap(e, t) {
		this.setMapMouseThrottle(e.mapMouseThrottle ?? 0), this.trackFirstBasemap = !0, this.layerDefaultTimes.draw = e.layerTimeDefault?.expectedDrawTime ?? 12e3, this.layerDefaultTimes.load = e.layerTimeDefault?.expectedLoadTime ?? 12e3, this.layerDefaultTimes.fail = e.layerTimeDefault?.maxLoadTime || 9e4, await super.createMap(e, t), this.viewPromise.then(() => {
			this.loadDefProm.resolveMe(), this.$iApi.event.emit($.MAP_CREATED);
		});
	}
	destroyMap() {
		if (!this.esriMap || !this.esriView) {
			this.noMapErr();
			return;
		}
		this.$iApi.geo.layer.allLayersOnMap(!1).map((e) => e.uid).forEach((e) => this.removeLayer(e)), super.destroyMap(), this.$iApi.event.emit($.MAP_DESTROYED);
	}
	async createMapView(e) {
		let t = v(this.$vApp.$pinia).config.map;
		if (!t) throw Error("Attempted to create map view without a map config");
		let n = (typeof e == "string" ? await this.findBasemap(e) : e) || await this.findBasemap(t.initialBasemapId), r = t.tileSchemas.find((e) => e.id === n.tileSchemaId);
		if (!r) throw Error(`Could not find tile schema for the given basemap id: ${n.id}`);
		let a = t.extentSets.find((e) => e.id === r.extentSetId);
		if (!a) throw Error(`Could not find extent set with the given id: ${r.extentSetId}`);
		this._rampExtentSet = At.fromConfig(a), this._rampSR = this._rampExtentSet.sr.clone();
		let o = t.lodSets.find((e) => e.id === r.lodSetId);
		if (!o) throw Error(`Could not find lod set with the given id: ${r.lodSetId}`);
		this.esriView = k(await m.MapView({
			map: this.esriMap,
			container: this._targetDiv,
			constraints: {
				lods: o.lods,
				rotationEnabled: !1
			},
			attributionVisible: !1,
			spatialReference: this._rampSR.toESRI(),
			extent: this._rampExtentSet.defaultExtent.toESRI(),
			navigation: { browserTouchPanEnabled: !0 },
			background: { color: n.backgroundColour }
		})), this.esriView.ui.components = [], this.handlers.push({
			type: "extent",
			handler: i(() => this.esriView.extent, (e) => {
				if (e) {
					let t = this.$iApi.geo.geom.geomEsriToRamp(e, "map_extent_event");
					this.$iApi.event.emit($.MAP_EXTENTCHANGE, t), this.$iApi.event.emit($.FILTER_CHANGE, {
						extent: t,
						filterKey: q.EXTENT
					});
				}
			})
		}), this.handlers.push({
			type: "scale",
			handler: i(() => this.esriView.scale, (e) => {
				this.$iApi.event.emit($.MAP_SCALECHANGE, e);
			})
		}), this.handlers.push({
			type: "resize",
			handler: this.esriView.on("resize", (e) => {
				this.$iApi.event.emit($.MAP_RESIZED, {
					height: e.height,
					width: e.width
				});
			})
		}), this.handlers.push({
			type: "click",
			handler: this.esriView.on("click", (e) => {
				this.$iApi.event.emit($.MAP_CLICK, this.$iApi.geo.geom.esriMapClickToRamp(e, "map_click_point"));
			})
		}), this.handlers.push({
			type: "double-click",
			handler: this.esriView.on("double-click", (e) => {
				this.$iApi.event.emit($.MAP_DOUBLECLICK, this.$iApi.geo.geom.esriMapClickToRamp(e, "map_doubleclick_point"));
			})
		}), this.handlers.push({
			type: "pointer-move",
			handler: this.esriView.on("pointer-move", this.createMouseMoveHandler())
		}), this.handlers.push({
			type: "pointer-move-start",
			handler: this.esriView.on("pointer-move", Ie((e) => {
				this.$iApi.event.emit($.MAP_MOUSEMOVE_START, this.$iApi.geo.geom.esriMapMouseToRamp(e));
			}, 100, { edges: ["leading"] }))
		}), this.handlers.push({
			type: "pointer-move-end",
			handler: this.esriView.on("pointer-move", Ie((e) => {
				this.$iApi.event.emit($.MAP_MOUSEMOVE_END, this.$iApi.geo.geom.esriMapMouseToRamp(e));
			}, 100))
		}), this.handlers.push({
			type: "pointer-leave",
			handler: this.esriView.on("pointer-leave", (e) => {
				setTimeout(() => {
					this.$iApi.event.emit($.MAP_MOUSELEAVE, e.native);
				}, Math.max(this.mapMouseThrottle, 100) + 1);
			})
		}), this.handlers.push({
			type: "pointer-down",
			handler: this.esriView.on("pointer-down", (e) => {
				this.$iApi.event.emit($.MAP_MOUSEDOWN, e.native);
			})
		}), this.handlers.push({
			type: "key-down",
			handler: this.esriView.on("key-down", (e) => {
				this.$iApi.event.emit($.MAP_KEYDOWN, e.native), e.stopPropagation();
			})
		}), this.handlers.push({
			type: "key-up",
			handler: this.esriView.on("key-up", (e) => {
				this.$iApi.event.emit($.MAP_KEYUP, e.native), e.stopPropagation();
			})
		}), this.handlers.push({
			type: "focus",
			handler: this.esriView.on("focus", (e) => {
				this.$iApi.event.emit($.MAP_FOCUS, e.native);
			})
		}), this.handlers.push({
			type: "blur",
			handler: this.esriView.on("blur", (e) => {
				this.$iApi.event.emit($.MAP_BLUR, e.native);
			})
		}), this.esriView.container ? this.esriView.container.addEventListener("touchmove", (e) => {
			e.preventDefault();
		}) : console.error("ESRI Map View is missing its container"), i(() => this.esriView.fatalError, () => {
			let e = new IntersectionObserver((t) => {
				t.forEach((t) => {
					t.isIntersecting && (this.esriView?.tryFatalErrorRecovery(), e.disconnect());
				});
			});
			e.observe(this.esriView.container);
		}), this.esriView.when(() => {
			if (this._viewPromise.resolveMe(), this.created = !0, this.applyBasemap(n), r.recoveryBasemap?.basemapId) {
				let e = r.recoveryBasemap.timeout ?? 8e3;
				e > 0 && setTimeout(() => {
					this.trackFirstBasemap && this.recoverBasemap(r.id);
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
		let t = typeof e == "string" ? await this.findBasemap(e) : e;
		this.esriMap.basemap = ke(t.esriBasemap);
		let n = v(this.$vApp.$pinia);
		n.activeBasemapConfig = t.config;
	}
	async setBasemap(e) {
		if (!this.esriView || !this.esriMap) return this.noMapErr(), !1;
		let t = v(this.$vApp.$pinia), n = await this.findBasemap(e), r = t.activeBasemapConfig.tileSchemaId !== n.tileSchemaId;
		if (r) {
			let t = this.getExtent().center(), i = this.getScale();
			this._viewPromise = new Z(), this.created = !1, this.$iApi.event.emit($.MAP_REFRESH_START), this.destroyMapView(), this.createMapView(n), await this.viewPromise.then(() => {
				this.$iApi.event.emit($.MAP_REFRESH_END), this.$iApi.event.emit($.MAP_BASEMAPCHANGE, {
					basemapId: e,
					schemaChanged: r
				});
				let n = this.findClosestScale(i);
				this.$iApi.geo.proj.projectGeometry(this._rampSR, t).then((e) => this.zoomMapTo(e, n, !1));
			});
		} else {
			await this.applyBasemap(n);
			let t = await m.ColorBackground({ color: new xt(n.backgroundColour).toESRI() });
			this.esriView.background = t, this.$iApi.event.emit($.MAP_BASEMAPCHANGE, {
				basemapId: e,
				schemaChanged: r
			});
		}
		return r;
	}
	async recoverBasemap(e) {
		this.esriMap || this.noMapErr(), this.trackFirstBasemap = !1;
		let t = v(this.$vApp.$pinia).config.map;
		if (t) {
			let n = t.tileSchemas.find((t) => t.id === e);
			if (n?.recoveryBasemap?.basemapId) {
				let e = await this.findBasemap(n.recoveryBasemap.basemapId);
				await this.applyBasemap(e);
			}
		}
	}
	async addLayer(e, t = void 0) {
		return await this.loadPromise(), new Promise((n, r) => {
			if (this.esriMap || (this.noMapErr(), r()), e.initiationState !== G.INITIATING && e.initiationState !== G.INITIATED && e.layerState !== K.ERROR && e.initiate(), e.mapLayer && t === void 0) {
				let n = this.$iApi.geo.layer.layerOrderIds();
				if (e.isCosmetic) t = n.length;
				else {
					let e = this.$iApi.geo.layer.allLayers(), r = !0;
					for (let i = n.length - 1; i >= 0 && r; i--) {
						let a = e.find((e) => e.id === n[i]);
						a && !a.isCosmetic && (t = i + 1, r = !1);
					}
					r && (t = 0);
				}
			}
			_(this.$vApp.$pinia).addLayer(e, t), this.$iApi.event.emit($.LAYER_REGISTERED, e);
			let i = Date.now(), a = 0, o = setInterval(() => {
				a += 250, a >= e.expectedTime.fail || e.layerState === K.ERROR ? (clearInterval(o), e.lastCancel < i && console.error(`Failed to add layer: ${e.id}.`), r()) : e.initiationState === G.INITIATED && (e.esriLayer || !e.mapLayer) && (clearInterval(o), e.mapLayer ? this.insertToEsriMap(e) : e.onLoad(), n());
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
	reorder(e, t, n = !1) {
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
		let r = this.$iApi.geo.layer.allLayers(), i = this.$iApi.geo.layer.layerOrderIds();
		if (n) {
			if (e.isCosmetic) return;
			if (t > 0) {
				let e = i.filter((e) => {
					let t = r.find((t) => t.id === e);
					return t ? !t.isCosmetic : (console.error("Layer reorder had critical error"), !1);
				});
				t >= e.length && (console.error("non-cosmetic reorder index was too high"), t = e.length - 1), t = i.indexOf(e[t]);
			}
		} else t >= i.length && (console.error("reorder index was too high"), t = i.length - 1);
		let a = i.indexOf(e.id);
		if (a !== t) {
			if (_(this.$vApp.$pinia).reorderLayer(e, t), e.esriLayer && this.esriMap.layers.indexOf(e.esriLayer) > -1) {
				let n = 0;
				if (t > 0) {
					i = this.$iApi.geo.layer.layerOrderIds();
					for (let e = t - 1; e > -1; e--) {
						let o = i[e], s = r.find((e) => e.id === o);
						if (s && s.esriLayer) {
							let e = this.esriMap.layers.indexOf(s.esriLayer);
							if (e > -1) {
								n = e + +(t < a);
								break;
							}
						} else s || console.error("Layer reorder had critical error");
					}
				}
				this.esriMap.reorder(e.esriLayer, n);
			}
			this.$iApi.event.emit($.MAP_REORDER, {
				layer: e,
				newIndex: t
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
		n.visibility = !1, n.isRemoved = !0, this.$iApi.event.emit($.LAYER_REMOVE, e), n.parentLayer?.sublayers.every((e) => e.isRemoved) && this.removeLayer(n.parentLayer);
	}
	removeLayer(e) {
		if (!this.esriMap) {
			this.noMapErr();
			return;
		}
		let t;
		if (t = e instanceof mo ? e : this.$iApi.geo.layer.getLayer(e), !t) throw Error("Layer could not be found for removal.");
		if (t.isSublayer) {
			this.removeSublayer(t);
			return;
		}
		t.supportsSublayers && t.sublayers.forEach((e) => {
			e.isRemoved || this.removeSublayer(e);
		});
		let n = _(this.$vApp.$pinia);
		n.removeLayer(t), n.removeLayerConfig(t.id), t.removeEsriLayer(), t.initiationState === G.INITIATED && t.terminate(), t.isRemoved = !0, this.$iApi.event.emit($.LAYER_REMOVE, t);
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
		return Le((e) => {
			this.$iApi.event.emit($.MAP_MOUSEMOVE, this.$iApi.geo.geom.esriMapMouseToRamp(e));
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
	async takeScreenshot(e = {}) {
		if (this.esriView) return e.quality ||= 1, e.format ||= "png", this.esriView.takeScreenshot(e);
		throw Error("Export attempted without a map view available");
	}
	screenPointToMapPoint(e) {
		return this.esriView ? X.fromESRI(this.esriView.toMap({
			x: e.screenX,
			y: e.screenY
		}), "mappoint") : (this.noMapErr(), new X("i_am_error", [0, 0], void 0, !0));
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
	registerIdentifyGeometryProvider(e) {
		return this.identifyGeometryProviders.includes(e) || this.identifyGeometryProviders.push(e), () => this.unregisterIdentifyGeometryProvider(e);
	}
	unregisterIdentifyGeometryProvider(e) {
		let t = this.identifyGeometryProviders.indexOf(e);
		t !== -1 && this.identifyGeometryProviders.splice(t, 1);
	}
	isIdentifySuppressed(e) {
		return this.identifyGeometryProviders.some((t) => {
			try {
				return !!t.suppressIdentify?.(e);
			} catch (e) {
				return console.warn("Identify geometry provider failed while checking suppression.", e), !1;
			}
		});
	}
	getIdentifyProviderGeometry(e) {
		for (let t of this.identifyGeometryProviders.slice().reverse()) try {
			let n = t.getIdentifyGeometry(e);
			if (n) return n;
		} catch (e) {
			console.warn("Identify geometry provider failed while resolving geometry.", e);
		}
	}
	runIdentify(e) {
		let t = this.$iApi.geo.layer.allLayersOnMap(!1).filter((e) => e.canIdentify()), n;
		if (e instanceof X) {
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
		if (this.isIdentifySuppressed(n) || t === void 0) return {
			click: n,
			results: []
		};
		let r = this.getIdentifyProviderGeometry(n) ?? n.mapPoint, i = Promise.resolve([]);
		r.type === B.POINT && t.some((e) => e.identifyMode === W.HYBRID || e.identifyMode === W.SYMBOLIC) && (i = this.symbolIdentify(n.screenX, n.screenY));
		let a = {
			geometry: r,
			hitTest: i
		}, o = t.filter((e) => e.supportsIdentify).map((e) => (a.tolerance = n.input == "touch" ? e.touchTolerance : e.mouseTolerance, e.runIdentify(a))).flat(), s = Date.now();
		o.forEach((e) => {
			e.requestTime = s;
		});
		let c = {
			results: o,
			click: n
		};
		return this.$iApi.event.emit($.MAP_IDENTIFY, c), c;
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
		let t = this.$iApi.geo.layer.allLayersOnMap(!1).filter((e) => e.supportsFeatures || e.layerType === V.GRAPHIC);
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
				if (!(n.isCosmetic || n.layerType === V.GRAPHIC || e.graphic.isAggregate)) i = n, a = e.graphic.getObjectId();
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
}, no = {
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
}, ro = {
	Point: "circlePoint",
	MultiPoint: "circlePoint",
	LineString: "solidLine",
	MultiLineString: "solidLine",
	Polygon: "outlinedPoly",
	MultiPolygon: "outlinedPoly"
};
function io(e) {
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
function ao(e, t) {
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
function oo(e, t) {
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
function so(e) {
	return e === "MultiLineString" ? "LineString" : e === "MultiPolygon" ? "Polygon" : e;
}
var co = class extends Q {
	async fetchFileData(e, t) {
		let n = await Je.get(e, { responseType: "arrayBuffer" });
		switch (t) {
			case V.GEOJSON:
			case V.DATAJSON: return JSON.parse(this.arbToStr(n.data));
			case V.SHAPEFILE:
			case V.GEOJSONZIPPED:
			case V.FLATGEOBUF:
			case V.FLATGEOBUFZIPPED: return n.data;
			case V.CSV:
			case V.DATACSV: return this.arbToStr(n.data);
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
				oo(e, n);
			}
			let i = so(r.geometry.type);
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
		return Qe.dsvFormat(t).parseRows(e)[0].map((e) => ({
			name: e,
			type: et.STRING
		}));
	}
	filterCsvLatLonFields(e, t = ",") {
		let n = Qe.dsvFormat(t).parseRows(e), r = n[0], i = {
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
				type: et.OID
			}]
		};
		io(e);
		let o = e.features[0].geometry.type, s = ro[o], c = JSON.parse(JSON.stringify(no[s]));
		if (t) {
			if (t.sourceProjection && (r = this.$iApi.geo.proj.normalizeProj(t.sourceProjection)), t.targetSR) n = t.targetSR;
			else throw Error("geoJsonToEsriJson - missing opts.targetSR arguement");
			i = t.layerId ? t.layerId : this.$iApi.geo.shared.generateUUID(), t.colour && (c.renderer.symbol.color = new xt(t.colour).toArcServer());
		} else throw Error("geoJsonToEsriJson - missing opts arguement");
		r ||= Y.parseGeoJsonCrs(e.crs), a.renderer = await m.RendererFromJson(c.renderer), a.fields = (a.fields || []).concat(t.fieldMetadata?.exclusiveFields ? this.extractGeoJsonFields(e).filter((e) => t.fieldMetadata?.fieldInfo?.find((t) => t.name === e.name)) : this.extractGeoJsonFields(e)), t.fieldMetadata?.enforceOrder && t.fieldMetadata?.fieldInfo && t.fieldMetadata?.fieldInfo.length > 0 && (a.fields = this.$iApi.geo.attributes.orderFields(a.fields, t.fieldMetadata?.fieldInfo)), ao(e, a);
		let l = this.$iApi.geo.proj.normalizeProj(n);
		if (t) {
			if (t.latField) {
				let e = a.fields.find((e) => e.name === t.latField || e.alias === t.latField);
				e && (e.type = et.DOUBLE);
			}
			if (t.lonField) {
				let e = a.fields.find((e) => e.name === t.lonField || e.alias === t.lonField);
				e && (e.type = et.DOUBLE);
			}
		}
		await this.$iApi.geo.proj.checkProjBomber([r, n]);
		let u = Y.parseSR(n).toESRI();
		await this.$iApi.geo.proj.projectGeoJson(e, r, l);
		let d = Xe(e, { sr: 8888 });
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
			Ze(e, n, (e, i) => {
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
					a && (a.code && a.code !== 4326 && a.org === "EPSG" ? e = new Y(a.code) : a.wkt ? e = new Y(a.wkt) : console.error("Encountered FlatGeobuf with non-EPSG org: ", a)), e && (o.crs = e.toGeoJSON()), r(o);
				} else c += 60, c > t && (clearInterval(l), r({}));
			}, 60);
		}));
	}
	inferType(e) {
		return typeof e == "number" ? et.DOUBLE : et.STRING;
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
}, lo = /*#__PURE__*/ JSON.parse("[4326,4269,4258,31467,31468,31469,2166,2167,2168,2036,2044,2045,2065,2081,2082,2083,2085,2086,2091,2092,2093,2096,2097,2098,2105,2106,2107,2108,2109,2110,2111,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2169,2170,2171,2172,2173,2174,2175,2176,2177,2178,2179,2180,2193,2199,2200,2206,2207,2208,2209,2210,2211,2212,2319,2320,2321,2322,2323,2324,2325,2326,2327,2328,2329,2330,2331,2332,2333,2334,2335,2336,2337,2338,2339,2340,2341,2342,2343,2344,2345,2346,2347,2348,2349,2350,2351,2352,2353,2354,2355,2356,2357,2358,2359,2360,2361,2362,2363,2364,2365,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2384,2385,2386,2387,2388,2389,2390,2391,2392,2393,2394,2395,2396,2397,2398,2399,2400,2401,2402,2403,2404,2405,2406,2407,2408,2409,2410,2411,2412,2413,2414,2415,2416,2417,2418,2419,2420,2421,2422,2423,2424,2425,2426,2427,2428,2429,2430,2431,2432,2433,2434,2435,2436,2437,2438,2439,2440,2441,2442,2443,2444,2445,2446,2447,2448,2449,2450,2451,2452,2453,2454,2455,2456,2457,2458,2459,2460,2461,2462,2463,2464,2465,2466,2467,2468,2469,2470,2471,2472,2473,2474,2475,2476,2477,2478,2479,2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,2490,2491,2492,2493,2494,2495,2496,2497,2498,2499,2500,2501,2502,2503,2504,2505,2506,2507,2508,2509,2510,2511,2512,2513,2514,2515,2516,2517,2518,2519,2520,2521,2522,2523,2524,2525,2526,2527,2528,2529,2530,2531,2532,2533,2534,2535,2536,2537,2538,2539,2540,2541,2542,2543,2544,2545,2546,2547,2548,2549,2551,2552,2553,2554,2555,2556,2557,2558,2559,2560,2561,2562,2563,2564,2565,2566,2567,2568,2569,2570,2571,2572,2573,2574,2575,2576,2577,2578,2579,2580,2581,2582,2583,2584,2585,2586,2587,2588,2589,2590,2591,2592,2593,2594,2595,2596,2597,2598,2599,2600,2601,2602,2603,2604,2605,2606,2607,2608,2609,2610,2611,2612,2613,2614,2615,2616,2617,2618,2619,2620,2621,2622,2623,2624,2625,2626,2627,2628,2629,2630,2631,2632,2633,2634,2635,2636,2637,2638,2639,2640,2641,2642,2643,2644,2645,2646,2647,2648,2649,2650,2651,2652,2653,2654,2655,2656,2657,2658,2659,2660,2661,2662,2663,2664,2665,2666,2667,2668,2669,2670,2671,2672,2673,2674,2675,2676,2677,2678,2679,2680,2681,2682,2683,2684,2685,2686,2687,2688,2689,2690,2691,2692,2693,2694,2695,2696,2697,2698,2699,2700,2701,2702,2703,2704,2705,2706,2707,2708,2709,2710,2711,2712,2713,2714,2715,2716,2717,2718,2719,2720,2721,2722,2723,2724,2725,2726,2727,2728,2729,2730,2731,2732,2733,2734,2735,2738,2739,2740,2741,2742,2743,2744,2745,2746,2747,2748,2749,2750,2751,2752,2753,2754,2755,2756,2757,2758,2935,2936,2937,2938,2939,2940,2941,2953,2963,3006,3007,3008,3009,3010,3011,3012,3013,3014,3015,3016,3017,3018,3019,3020,3021,3022,3023,3024,3025,3026,3027,3028,3029,3030,3034,3035,3038,3039,3040,3041,3042,3043,3044,3045,3046,3047,3048,3049,3050,3051,3058,3059,3068,3114,3115,3116,3117,3118,3120,3126,3127,3128,3129,3130,3131,3132,3133,3134,3135,3136,3137,3138,3139,3140,3146,3147,3150,3151,3152,3300,3301,3328,3329,3330,3331,3332,3333,3334,3335,3346,3350,3351,3352,3366,3386,3387,3388,3389,3390,3396,3397,3398,3399,3407,3414,3416,3764,3788,3789,3790,3791,3793,3795,3796,3819,3821,3823,3824,3833,3834,3835,3836,3837,3838,3839,3840,3841,3842,3843,3844,3845,3846,3847,3848,3849,3850,3851,3852,3854,3873,3874,3875,3876,3877,3878,3879,3880,3881,3882,3883,3884,3885,3888,3889,3906,3907,3908,3909,3910,3911,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016,4017,4018,4019,4020,4021,4022,4023,4024,4025,4026,4027,4028,4029,4030,4031,4032,4033,4034,4035,4036,4037,4038,4040,4041,4042,4043,4044,4045,4046,4047,4052,4053,4054,4055,4074,4075,4080,4081,4120,4121,4122,4123,4124,4125,4126,4127,4128,4129,4130,4131,4132,4133,4134,4135,4136,4137,4138,4139,4140,4141,4142,4143,4144,4145,4146,4147,4148,4149,4150,4151,4152,4153,4154,4155,4156,4157,4158,4159,4160,4161,4162,4163,4164,4165,4166,4167,4168,4169,4170,4171,4172,4173,4174,4175,4176,4178,4179,4180,4181,4182,4183,4184,4185,4188,4189,4190,4191,4192,4193,4194,4195,4196,4197,4198,4199,4200,4201,4202,4203,4204,4205,4206,4207,4208,4209,4210,4211,4212,4213,4214,4215,4216,4218,4219,4220,4221,4222,4223,4224,4225,4226,4227,4228,4229,4230,4231,4232,4233,4234,4235,4236,4237,4238,4239,4240,4241,4242,4243,4244,4245,4246,4247,4248,4249,4250,4251,4252,4253,4254,4255,4256,4257,4259,4260,4261,4262,4263,4264,4265,4266,4267,4268,4270,4271,4272,4273,4274,4275,4276,4277,4278,4279,4280,4281,4282,4283,4284,4285,4286,4287,4288,4289,4291,4292,4293,4294,4295,4296,4297,4298,4299,4300,4301,4302,4303,4304,4306,4307,4308,4309,4310,4311,4312,4313,4314,4315,4316,4317,4318,4319,4322,4324,4327,4329,4339,4341,4343,4345,4347,4349,4351,4353,4355,4357,4359,4361,4363,4365,4367,4369,4371,4373,4375,4377,4379,4381,4383,4386,4388,4417,4434,4463,4466,4469,4470,4472,4475,4480,4482,4483,4490,4491,4492,4493,4494,4495,4496,4497,4498,4499,4500,4501,4502,4503,4504,4505,4506,4507,4508,4509,4510,4511,4512,4513,4514,4515,4516,4517,4518,4519,4520,4521,4522,4523,4524,4525,4526,4527,4528,4529,4530,4531,4532,4533,4534,4535,4536,4537,4538,4539,4540,4541,4542,4543,4544,4545,4546,4547,4548,4549,4550,4551,4552,4553,4554,4555,4557,4558,4568,4569,4570,4571,4572,4573,4574,4575,4576,4577,4578,4579,4580,4581,4582,4583,4584,4585,4586,4587,4588,4589,4600,4601,4602,4603,4604,4605,4606,4607,4608,4609,4610,4611,4612,4613,4614,4615,4616,4617,4618,4619,4620,4621,4622,4623,4624,4625,4626,4627,4628,4629,4630,4631,4632,4633,4634,4635,4636,4637,4638,4639,4640,4641,4642,4643,4644,4645,4646,4652,4653,4654,4655,4656,4657,4658,4659,4660,4661,4662,4663,4664,4665,4666,4667,4668,4669,4670,4671,4672,4673,4674,4675,4676,4677,4678,4679,4680,4681,4682,4683,4684,4685,4686,4687,4688,4689,4690,4691,4692,4693,4694,4695,4696,4697,4698,4699,4700,4701,4702,4703,4704,4705,4706,4707,4708,4709,4710,4711,4712,4713,4714,4715,4716,4717,4718,4719,4720,4721,4722,4723,4724,4725,4726,4727,4728,4729,4730,4731,4732,4733,4734,4735,4736,4737,4738,4739,4740,4741,4742,4743,4744,4745,4746,4747,4748,4749,4750,4751,4752,4753,4754,4755,4756,4757,4758,4759,4760,4761,4762,4763,4764,4765,4766,4767,4768,4769,4770,4771,4772,4773,4774,4775,4776,4777,4778,4779,4780,4781,4782,4783,4784,4785,4786,4787,4788,4789,4790,4791,4792,4793,4794,4795,4796,4797,4798,4799,4800,4801,4802,4803,4804,4805,4806,4807,4808,4809,4810,4811,4812,4813,4814,4815,4816,4817,4818,4819,4820,4821,4822,4823,4824,4839,4855,4856,4857,4858,4859,4860,4861,4862,4863,4864,4865,4866,4867,4868,4869,4870,4871,4872,4873,4874,4875,4876,4877,4878,4879,4880,4883,4885,4887,4889,4891,4893,4895,4898,4900,4901,4902,4903,4904,4907,4909,4921,4923,4925,4927,4929,4931,4933,4935,4937,4939,4941,4943,4945,4947,4949,4951,4953,4955,4957,4959,4961,4963,4965,4967,4969,4971,4973,4975,4977,4979,4981,4983,4985,4987,4989,4991,4993,4995,4997,4999,5012,5013,5017,5048,5105,5106,5107,5108,5109,5110,5111,5112,5113,5114,5115,5116,5117,5118,5119,5120,5121,5122,5123,5124,5125,5126,5127,5128,5129,5130,5132,5167,5168,5169,5170,5171,5172,5173,5174,5175,5176,5177,5178,5179,5180,5181,5182,5183,5184,5185,5186,5187,5188,5224,5228,5229,5233,5245,5246,5251,5252,5253,5254,5255,5256,5257,5258,5259,5263,5264,5269,5270,5271,5272,5273,5274,5275,5801,5802,5803,5804,5808,5809,5810,5811,5812,5813,5814,5815,5816,20004,20005,20006,20007,20008,20009,20010,20011,20012,20013,20014,20015,20016,20017,20018,20019,20020,20021,20022,20023,20024,20025,20026,20027,20028,20029,20030,20031,20032,20064,20065,20066,20067,20068,20069,20070,20071,20072,20073,20074,20075,20076,20077,20078,20079,20080,20081,20082,20083,20084,20085,20086,20087,20088,20089,20090,20091,20092,21413,21414,21415,21416,21417,21418,21419,21420,21421,21422,21423,21453,21454,21455,21456,21457,21458,21459,21460,21461,21462,21463,21473,21474,21475,21476,21477,21478,21479,21480,21481,21482,21483,21896,21897,21898,21899,22171,22172,22173,22174,22175,22176,22177,22181,22182,22183,22184,22185,22186,22187,22191,22192,22193,22194,22195,22196,22197,25884,27205,27206,27207,27208,27209,27210,27211,27212,27213,27214,27215,27216,27217,27218,27219,27220,27221,27222,27223,27224,27225,27226,27227,27228,27229,27230,27231,27232,27391,27392,27393,27394,27395,27396,27397,27398,27492,28402,28403,28404,28405,28406,28407,28408,28409,28410,28411,28412,28413,28414,28415,28416,28417,28418,28419,28420,28421,28422,28423,28424,28425,28426,28427,28428,28429,28430,28431,28432,28462,28463,28464,28465,28466,28467,28468,28469,28470,28471,28472,28473,28474,28475,28476,28477,28478,28479,28480,28481,28482,28483,28484,28485,28486,28487,28488,28489,28490,28491,28492,29701,29702,30161,30162,30163,30164,30165,30166,30167,30168,30169,30170,30171,30172,30173,30174,30175,30176,30177,30178,30179,30800,31251,31252,31253,31254,31255,31256,31257,31258,31259,31275,31276,31277,31278,31279,31281,31282,31283,31284,31285,31286,31287,31288,31289,31290,31466,31700]"), uo = class extends Q {
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
		let c = new Mt(e).updateQuery(s), [l, u] = await Ye(Je.get(c, { signal: o }));
		if (!u) return console.error(`WFS data failed to load for ${e}`, l), Promise.reject(l);
		let d = u.data;
		if (t === -1) {
			if (typeof d.numberMatched != "number") throw Error("WFS hits missing numberMatched");
			return t = u.data.numberMatched, this.loadWfsData(e, t, n, r, i, a, o);
		}
		if (i.features = i.features.concat(d.features), d.features.length < t - n) {
			let e = Math.min(r, t - n - d.features.length);
			return this.loadWfsData(c, t, d.features.length + n, e, i, a, o);
		} else return a && i.features.length > 0 && i.features[0].geometry.type === U.POINT && i.features.forEach((e) => {
			let t = e.geometry.coordinates;
			e.properties.rvInternalCoordX = t[0], e.properties.rvInternalCoordY = t[1];
		}), i;
	}
	reversedAxisWKIDs() {
		return lo;
	}
	async parseCapabilities(e) {
		let t = async () => {
			let t = e;
			if (e.indexOf("?") === -1) t += "?service=WMS&request=GetCapabilities";
			else {
				let n = new Mt(e.toUpperCase());
				"SERVICE" in n.queryMap || (t += "&service=WMS"), "REQUEST" in n.queryMap || (t += "&request=GetCapabilities");
			}
			return (await n(t, { responseType: "xml" })).data;
		}, r = new Promise((e) => {
			t().then((t) => e(t)).catch(() => {
				console.error("Get capabilities failed; trying the second time;"), e(t());
			});
		}), i = (e) => {
			let t = e.Layer;
			return t ? (Array.isArray(t) || (t = [t]), t.map((e) => {
				let t = e.Name, n = e.Title, r = e.Style, a = [], o = {};
				return r && (Array.isArray(r) || (r = [r]), r.forEach((e) => {
					let t = e.Name;
					a.push(t), e.LegendURL && (o[t] = e.LegendURL.OnlineResource["@_xlink:href"].replaceAll("&amp;", "&"));
				})), {
					name: t?.toString() ?? null,
					title: n,
					queryable: e["@_queryable"] === "1",
					layers: i(e),
					allStyles: a,
					styleToURL: o,
					currentStyle: a[0]
				};
			})) : [];
		}, a = (e) => {
			let t = e.Format;
			return Array.isArray(t) || (t = [t]), t;
		}, { XMLParser: o } = await import("fast-xml-parser"), s = await r;
		if (!s) return [];
		let c = new XMLSerializer().serializeToString(s), l = new o({ ignoreAttributes: !1 }).parse(c);
		if ("ServiceExceptionReport" in l) return console.error(l.ServiceExceptionReport.ServiceException), [];
		let u = l.WMS_Capabilities.Capability;
		return {
			layers: i(u),
			queryTypes: a(u.Request.GetFeatureInfo)
		};
	}
}, fo = class {
	static makeRawItem(e, t) {
		let n = Promise.resolve();
		return we({
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
		let n = new Z();
		return we({
			format: lt.ESRI,
			data: void 0,
			started: !1,
			loaded: !1,
			loading: n.getPromise(),
			async load() {
				if (!this.started) {
					this.started = !0;
					let r = await t.getGraphic(e, { getAttribs: !0 });
					this.data = r.attributes, this.loaded = !0, n.resolveMe();
				}
				return n.getPromise();
			}
		});
	}
}, po = class extends Q {
	files;
	ogc;
	constructor(e) {
		super(e), this.files = new co(e), this.ogc = new uo(e);
	}
	createLayer(e) {
		let t;
		switch (e.layerType) {
			case V.FEATURE:
				t = Do;
				break;
			case V.MAPIMAGE:
				t = Oo;
				break;
			case V.GRAPHIC:
				t = yo;
				break;
			case V.TILE:
				t = Fo;
				break;
			case V.WFS:
				t = Ro;
				break;
			case V.DATATABLE:
				t = Vo;
				break;
			case V.WMS:
				t = Lo;
				break;
			case V.GEOJSON:
				t = xo;
				break;
			case V.GEOJSONZIPPED:
				t = wo;
				break;
			case V.VECTORTILE:
				t = Io;
				break;
			case V.FLATGEOBUFZIPPED:
				t = Eo;
				break;
			case V.CSV:
				t = Co;
				break;
			case V.DATAJSON:
				t = Bo;
				break;
			case V.IMAGERY:
				t = Mo;
				break;
			case V.IMAGERYTILE:
				t = Po;
				break;
			case V.SHAPEFILE:
				t = So;
				break;
			case V.FLATGEOBUF:
				t = To;
				break;
			case V.OSM:
				t = jo;
				break;
			default: throw Error("Unsupported Layer Type " + e.layerType);
		}
		return new t(e, this.$iApi);
	}
	sublayerId(e, t) {
		return `${e}-${t}`;
	}
	getLayer(e) {
		return _(this.$vApp.$pinia).getLayerByAny(e);
	}
	getSublayer(e, t) {
		let n = _(this.$vApp.$pinia).getLayerById(e);
		if (n && n.supportsSublayers && t < n.sublayers.length) return n.sublayers[t];
	}
	async awaitLayer(e, t = !1) {
		let n = this.getLayer(e);
		if (!n) {
			let t = new Z(), r = 0, i = setInterval(() => {
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
		return _(this.$vApp.$pinia).mapOrder.slice(0) || [];
	}
	allLayers() {
		return _(this.$vApp.$pinia).layers || [];
	}
	allActiveLayers() {
		return this.allLayers().filter((e) => e.layerState !== K.ERROR && e.initiationState === G.INITIATED);
	}
	allLayersOnMap(e = !0) {
		let t = this.allLayers().filter((e) => e.mapLayer && e.initiationState === G.INITIATED);
		if (e) {
			let e = this.layerOrderIds(), n = new Map(e.map((e, t) => [e, t]));
			t.sort((e, t) => n.get(e.id) - n.get(t.id));
		}
		return t;
	}
	allDataLayers() {
		return this.allLayers().filter((e) => !e.mapLayer && e.initiationState === G.INITIATED);
	}
	allErrorLayers() {
		return this.allLayers().filter((e) => e.layerState === K.ERROR);
	}
	allInitiatingLayers() {
		return this.allLayers().filter((e) => e.initiationState === G.INITIATING);
	}
	getLayerControls(e) {
		let t = this.getLayer(e);
		if (!t) return;
		let n = t.config.controls?.slice() ?? [
			J.BoundaryZoom,
			J.Datatable,
			J.Identify,
			J.Metadata,
			J.Opacity,
			J.Refresh,
			J.Reload,
			J.Remove,
			J.Settings,
			J.Symbology,
			J.Visibility
		], r = [];
		return t.supportsFeatures || r.push(J.Datatable), t.extent === void 0 && r.push(J.BoundaryZoom), (t.config?.metadata || (t.isSublayer ? t.parentLayer?.config?.metadata : {}) || {}).url || r.push(J.Metadata), !t.mapLayer && !t.config.controls?.includes(J.Settings) && r.push(J.Settings), r.forEach((e) => {
			let t = n?.indexOf(e) ?? -1;
			t !== -1 && n?.splice(t, 1);
		}), {
			controls: n,
			disabledControls: t.config.disabledControls ?? []
		};
	}
	async loadLayerMetadata(e) {
		if (!e.trim()) throw Error("url missing on layer server metadata request.");
		let [t, r] = await Ye(n(e, { query: { f: "json" } }));
		if (!r) throw console.error(`Service metadata load error: ${e}`, t), Error(`Service metadata load error: ${e}`);
		if (!r.data) throw console.error(`Service metadata load error: ${e}`), Error(`Service metadata load error: ${e}`);
		let i = r.data, a = {
			geometryType: B.NONE,
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
			dataFormat: H.UNKNOWN,
			mapLayer: !0
		};
		if (a.name = i.name || "", a.currentVersion = i.currentVersion || -1, a.minScale = i.effectiveMinScale || i.minScale || 0, a.maxScale = i.effectiveMaxScale || i.maxScale || 0, a.extent = i.extent ? bt.fromArcServer(i.extent, "layer_extent") : void 0, a.defaultVisibility = i.defaultVisibility ?? !0, a.canModifyLayer = i.canModifyLayer ?? !0, i.type === "Feature Layer" || i.type === "Table") {
			if (a.dataFormat = H.ESRI_FEATURE, a.displayField = i.displayField || "", Array.isArray(i.fields)) {
				let t = await Promise.all(i.fields.map((e) => (e.type === "esriFieldTypeGlobalID" && (e.type = "esriFieldTypeString"), m.FieldFromJson(e))));
				a.fields = t.map((e) => ({
					name: e.name,
					alias: e.alias,
					type: e.type,
					length: e.length
				})), t.every((e) => e.type === "oid" ? (a.objectIdField = e.name, !1) : !0) && (a.objectIdField = i.objectIdField || (console.error(`Encountered service with no OID defined: ${e}`), "")), i.type === "Feature Layer" ? (a.geometryType = this.$iApi.geo.geom.serverGeomTypeToRampGeomType(i.geometryType), i.drawingInfo?.renderer && (a.renderer = await m.RendererFromJson(i.drawingInfo.renderer)), i.sourceSpatialReference && (a.sourceSR = Y.fromConfig(i.sourceSpatialReference))) : a.mapLayer = !1;
			}
		} else a.dataFormat = H.ESRI_RASTER;
		return a;
	}
	async loadFeatureCount(e, t = "") {
		if (!e) return console.error("A layer without a url attempted to run the server based feature count routine."), 0;
		let r = { query: {
			f: "json",
			where: t || "1=1",
			returnCountOnly: !0,
			returnGeometry: !1
		} }, [i, a] = await Ye(n(`${e}/query`, r));
		return a ? a.data ? Number.isInteger(a.data.count) ? a.data.count : (console.error(`Funny result (${a.data.count}) during feature count: ${e}`), 0) : (console.error(`Unable to load feature count: ${e}`), 0) : (console.error(`Feature count request unsuccessful: ${e}`, i), 0);
	}
}, mo = class extends Q {
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
		super(t), this.config = e, this.id = "", this.uid = "", this.name = "error", this.layerState = K.NEW, this.drawState = ct.NOT_LOADED, this.initiationState = G.NEW, this.layerIdx = -1, this.layerFormat = st.UNKNOWN, this.layerType = V.UNKNOWN, this.dataFormat = H.UNKNOWN, this.supportsIdentify = !1, this.identifyMode = W.NONE, this.supportsFeatures = !1, this.mapLayer = !0, this.featureCount = 0, this.fields = [], this.fieldList = "", this.nameField = "", this.maptipField = "", this.oidField = "", this.supportsSublayers = !1, this.isSublayer = !1, this.isRemoved = !1, this.isFile = !1, this.isCosmetic = !1, this.isSystem = !1, this.userAdded = !1, this.identify = !1, this.maptips = !1, this.geomType = B.UNKNOWN, this.legend = [], this._sublayers = [], this.expectedTime = {
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
		return new Dt(0, "Fake tree", "getLayerTree() was not implemented in layer");
	}
	getSR() {
		return Y.latLongSR();
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
		return new Ot();
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
		return Promise.resolve(new ut(new ft()));
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
}, ho = class extends mo {
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
		super(e, t), this.name = e.name || "", this.geomType = B.NONE, this.dataFormat = H.UNKNOWN, this.layerType = V.UNKNOWN, this.layerFormat = st.UNKNOWN;
		let n = t.geo.map.layerDefaultTimes;
		this.expectedTime.draw = e.expectedDrawTime ?? n.draw, this.expectedTime.load = e.expectedLoadTime ?? n.load, this.expectedTime.fail = e.maxLoadTime || n.fail, this.lastCancel = 0, this.timers = {
			draw: void 0,
			load: void 0
		}, this.origRampConfig = e, this.id = e.id || "", this.uid = this.$iApi.geo.shared.generateUUID(), this.isCosmetic = !1, this.isSystem = e.system || !1, this.isRemoved = !1, this.isSublayer = !1, this.supportsIdentify = !1, this.mapLayer = !0, this.identifyMode = W.NONE, this.supportsFeatures = !1, this.maptips = !1, this.supportsSublayers = !1, this.isFile = !1, this.layerState = K.NEW, this.initiationState = G.NEW, this.drawState = ct.NOT_LOADED, this.loadDefProm = new Z(), this.url = this.origRampConfig.url, this.canReload = !!(this.url || this.origRampConfig.caching), this.loadPromDone = !1, this.nameArcadeFormula = "", this.maptipArcadeFormula = "", this.layerTree = new Dt(0, this.uid, this.name, !0);
	}
	updateInitiationState(e) {
		this.initiationState = e, this.$iApi.event.emit($.LAYER_INITIATIONSTATECHANGE, {
			state: e,
			layer: this
		});
	}
	updateLayerState(e, t = !1) {
		this.layerState = e, this.$iApi.event.emit($.LAYER_LAYERSTATECHANGE, {
			state: e,
			layer: this,
			userCancel: t
		});
	}
	updateDrawState(e) {
		this.drawState = e, e === ct.REFRESH ? this.startTimer("draw") : e === ct.UP_TO_DATE && this.stopTimer("draw"), this.$iApi.event.emit($.LAYER_DRAWSTATECHANGE, {
			state: e,
			layer: this
		});
	}
	async initiate() {
		this.updateInitiationState(G.INITIATING), this.startTimer("load");
		let e = (e) => {
			this.layerState !== K.ERROR && (console.error(e), this.onError());
		}, t = Date.now(), n = setTimeout(() => {
			t > this.lastCancel && (this.lastCancel = Date.now(), e("Layer timed out during initialize. Id: " + this.id));
		}, this.expectedTime.fail), [r] = await Ye(this.onInitiate());
		clearTimeout(n), t > this.lastCancel && (this.drawState !== ct.UP_TO_DATE && this.startTimer("draw"), r ? e(`Init error on layer id: ${this.id} . ${r.message}`) : this.updateInitiationState(G.INITIATED));
	}
	async onInitiate() {
		if (this.isSublayer) return console.warn("Attempted to initiate a sublayer as a CommonLayer"), Promise.resolve();
		this.initiationState === G.INITIATED && console.error(`Encountered layer initialize while already initiated, layer id ${this.id}`);
	}
	async terminate() {
		this.updateInitiationState(G.TERMINATING), await Promise.all(this.sublayers.map((e) => e.terminate())), this.loadDefProm = new Z(), this.loadPromDone = !1, this.updateLayerState(K.NEW), this.updateDrawState(ct.NOT_LOADED), this.updateInitiationState(G.TERMINATED);
	}
	onLoad() {
		let e = Date.now(), t = !1, n = setTimeout(() => {
			t = !0, this.onError();
		}, this.expectedTime.fail);
		try {
			let r = this.onLoadActions();
			Promise.all(r).then(() => {
				clearTimeout(n), t ? this.visibility = !1 : (this.stopTimer("load"), e > this.lastCancel && (this.loadPromDone && (this.loadDefProm = new Z()), this.loadDefProm.resolveMe(), this.loadPromDone = !0, this.sublayers.forEach((e) => e.onLoad()), this.updateLayerState(K.LOADED)));
			}).catch(() => {
				clearTimeout(n), this.onError();
			});
		} catch (e) {
			console.error("Encountered error on layer load: ", e), clearTimeout(n), this.onError();
		}
	}
	onError(e = !0) {
		this.layerState !== K.ERROR && (this.initiationState === G.INITIATING && this.updateInitiationState(G.NEW), this.loadPromDone && (this.loadDefProm = new Z()), this.loadDefProm.rejectMe(), this.loadPromDone = !0, this.sublayers.forEach((t) => t.onError(e)), e && this.$iApi.notify.show(_n.ERROR, this.$iApi.$i18n.t("layer.error", { id: this.id })), this.stopTimer("draw"), this.stopTimer("load"), this.updateLayerState(K.ERROR, !e));
	}
	onLoadActions() {
		return [];
	}
	cancelLoad() {
		this.isLoaded || this.initiationState === G.NEW || this.initiationState === G.TERMINATING || this.initiationState === G.TERMINATED || (this.lastCancel = Date.now(), this.esriLayer && this.esriLayer.loadStatus === "loading" && this.esriLayer.cancelLoad(), this.removeEsriLayer(), this.onError(!1));
	}
	loadPromise() {
		return this.loadDefProm.getPromise();
	}
	get isLoaded() {
		return this.layerState === K.LOADED;
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
		return this.stubError(), Promise.resolve(new ut(new ft()));
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
		this.stopTimer(e), this.expectedTime[e] > 0 && (this.timers[e] = window.setTimeout(() => this.$iApi.notify.show(_n.WARNING, this.$iApi.$i18n.t(`layer.long${e}`, { id: this.name || this.id })), this.expectedTime[e]));
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
		return m.ArcadeExecutor(e, t);
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
}, go = class extends ho {
	_serverVisibility;
	_scaleSet;
	_mouseTolerance;
	_touchTolerance;
	_drawOrder;
	_lastFilterUpdate = "";
	viewDefProm;
	esriWatches;
	constructor(e, t) {
		super(e, t), this._scaleSet = new Ot(), this._mouseTolerance = e.mouseTolerance == null ? 5 : e.mouseTolerance, this._touchTolerance = e.touchTolerance == null ? 15 : e.touchTolerance, this._drawOrder = [], this._serverVisibility = void 0, this.isCosmetic = e.cosmetic || !1, this.extent = e.extent ? bt.fromConfig(`${this.id}_extent`, e.extent) : void 0, this.viewDefProm = new Z(), this.esriWatches = [];
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
		this.esriWatches.push(i(() => this.esriLayer.visible, (e) => {
			this.$iApi.event.emit($.LAYER_VISIBILITYCHANGE, {
				visibility: e,
				layer: this
			});
		})), this.esriWatches.push(i(() => this.esriLayer.opacity, (e) => {
			this.$iApi.event.emit($.LAYER_OPACITYCHANGE, {
				opacity: e,
				layer: this
			});
		})), this.esriWatches.push(i(() => this.esriLayer.loadStatus, (e) => {
			let t = {
				"not-loaded": K.LOADING,
				loading: K.LOADING,
				loaded: K.LOADED,
				failed: K.ERROR
			};
			e === "loaded" ? this.onLoad() : e === "failed" ? this.onError() : this.updateLayerState(t[e]);
		})), this.esriLayer.on("layerview-create", (e) => {
			this.esriView = k(e.layerView), this.esriWatches.push(i(() => e.layerView.updating, (e) => {
				this.updateDrawState(e ? ct.REFRESH : ct.UP_TO_DATE);
			})), this.viewDefProm.resolveMe();
		}), this.sublayers.forEach((e) => e.initiate());
	}
	async terminate() {
		this.esriWatches.forEach((e) => e.remove()), this.esriWatches = [], this.esriLayer = void 0, await super.terminate(), this.viewDefProm = new Z();
	}
	async reload() {
		if (!this.$iApi.geo.map.esriMap) {
			console.error("Attempted layer reload when no map exists");
			return;
		}
		this.removeEsriLayer();
		let e = Date.now();
		if (this.$iApi.event.emit($.LAYER_RELOAD_START, this), this.sublayers.forEach((e) => this.$iApi.event.emit($.LAYER_RELOAD_START, e)), await this.terminate(), await this.initiate(), !(this.lastCancel > e)) {
			if (!this.esriLayer) {
				console.error("ESRI layer failed to re-create during reload.");
				return;
			}
			this.$iApi.geo.map.insertToEsriMap(this), this.$iApi.event.emit($.LAYER_RELOAD_END, this), this.sublayers.forEach((e) => this.$iApi.event.emit($.LAYER_RELOAD_END, e));
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
				let e = new X("point", [this.extent.xmin, this.extent.ymin], this.extent.sr);
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
		return this.initiationState === G.INITIATED && !!this.esriLayer;
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
		return this.esriLayer ? Y.fromESRI(this.esriLayer.spatialReference) : (this.noLayerErr(), Y.latLongSR());
	}
}, _o = class extends go {
	attribs;
	renderer;
	serviceUrl;
	canModifyLayer;
	filter;
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !0, this.geomType = B.UNKNOWN, this.serviceUrl = "", this.fieldList = "", this.canModifyLayer = !0, this.filter = new kt(e.permanentFilteredQuery || "", e.initialFilteredQuery || ""), e.state?.hovertips !== void 0 && console.warn("hovertips layer configuration property is deprecated. Please adjust to use maptips instead"), this.maptips = e.state?.maptips ?? e.state?.hovertips ?? !0, this.attribs = new Wo();
	}
	makeEsriLayerConfig(e) {
		return super.makeEsriLayerConfig(e);
	}
	async loadLayerMetadata(e = {}) {
		if (!this.serviceUrl) return;
		let t = Date.now(), n = await this.$iApi.geo.layer.loadLayerMetadata(this.serviceUrl);
		if (!(t < this.lastCancel)) if (this.geomType = n.geometryType, this.attribs.quickCache = new Xo(this.geomType), this.scaleSet.minScale = n.minScale, this.scaleSet.maxScale = n.maxScale, this.dataFormat = n.dataFormat, this.extent = this.extent ?? n.extent, this._serverVisibility = n.defaultVisibility, this.origRampConfig.name || (this.name = n.name ?? this.id), this.dataFormat === H.ESRI_FEATURE) {
			this.supportsFeatures = !0, this.canModifyLayer = this.layerType === V.SUBLAYER ? n.canModifyLayer : !0, this.fields = n.fields, this.nameField = n.displayField, this.oidField = n.objectIdField, this.sourceSR = n.sourceSR, this.drawOrder.forEach((e) => {
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
				permanentFilter: this.getSqlFilter(q.PERMANENT)
			};
			this.attribs.attLoader = new qo(this.$iApi, r);
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
		let n = {}, r = new ft(), i = this.$iApi.geo.map, a = !1, o = !1, s = 0;
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
			else if (this.layerType === V.FEATURE && !(this.attribs.quickCache.isPoint && t.forZoom)) {
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
		let c = new ut(r, "", t.getAttribs ? n : void 0);
		if (t.getStyle) {
			let e = ke(this.renderer.getGraphicSymbol(n));
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
		if (t !== this.filter.getSql(e)) if (this.filter.setSql(e, t), this.$iApi.event.emit($.FILTER_CHANGE, {
			uid: this.uid,
			filterKey: e
		}), this.layerFormat === st.MAPIMAGE) this.applySqlFilter();
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
}, vo = class extends go {
	constructor(e, t) {
		super(e, t), this.dataFormat = H.ESRI_FEATURE, this.layerFormat = st.GRAPHIC, this.maptips = !1;
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
			let n = new ut(a[t], e.id, e.attributes);
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
}, yo = class extends vo {
	constructor(e, t) {
		super(e, t), this.layerType = V.GRAPHIC;
	}
	async onInitiate() {
		this.esriLayer = k(await m.GraphicsLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		return super.makeEsriLayerConfig(e);
	}
	onLoadActions() {
		let e = super.onLoadActions();
		return this.layerTree.name = this.name, this.updateDrawState(ct.UP_TO_DATE), e;
	}
}, bo = class extends _o {
	esriJson;
	sourceGeoJson;
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !0, this.isFile = !0, this.dataFormat = H.ESRI_FEATURE, this.layerFormat = st.FEATURE, this.layerIdx = 0, e.identifyMode && e.identifyMode !== W.NONE ? this.identifyMode = e.identifyMode : this.identifyMode = W.HYBRID;
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
		this.esriJson = await this.$iApi.geo.layer.files.geoJsonToEsriJson(this.sourceGeoJson, e), this.esriLayer = k(await m.FeatureLayer(this.makeEsriLayerConfig(this.origRampConfig))), this.esriJson = void 0, this.origRampConfig.caching || delete this.origRampConfig.rawData, delete this.sourceGeoJson, await super.onInitiate();
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
			this.esriLayer && this.origRampConfig.customRenderer?.type && (this.esriLayer.renderer = await m.RendererFromJson(this.config.customRenderer)), this.layerTree.name = this.name, this.extractLayerMetadata(), this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.attribs.attLoader.updateFieldList(this.fieldList), await this.nameInitializer({ nameArcade: this.origRampConfig.nameArcade }, this.nameField), this.origRampConfig.tooltipField && console.warn("tooltipField layer configuration property is deprecated. Please adjust to use maptipField instead"), this.origRampConfig.tooltipArcade && console.warn("tooltipArcade layer configuration property is deprecated. Please adjust to use maptipArcade instead");
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
		let t = new Z(), n = we({
			items: [],
			loading: t.getPromise(),
			loaded: !1,
			errored: !1,
			uid: this.uid,
			layerId: this.id,
			requestTime: Date.now()
		}), r = Promise.resolve(), i = Promise.resolve(), a = [], o = [];
		if (this.identifyMode === W.HYBRID || this.identifyMode === W.GEOMETRIC) {
			let t = { includeGeometry: !1 };
			this.geomType !== B.POLYGON && e.geometry.type === B.POINT ? t.filterGeometry = this.$iApi.geo.query.makeClickBuffer(e.geometry, e.tolerance) : t.filterGeometry = e.geometry, t.filterSql = this.getCombinedSqlFilter(), i = this.queryFeatures(t).then((e) => {
				a = e;
			});
		}
		return e.hitTest && (this.identifyMode === W.HYBRID || this.identifyMode === W.SYMBOLIC) && (r = i.then(async () => {
			let t = await e.hitTest;
			o = await Promise.all(t.filter((e) => e.layerId === this.id && a.findIndex((t) => e.oid === t.attributes[this.oidField]) === -1).map((e) => e.oid));
		})), Promise.all([r, i]).then(() => {
			a.forEach((e) => {
				n.items.push(fo.makeRawItem(lt.ESRI, e.attributes));
			}), o.forEach((e) => {
				n.items.push(fo.makeOidItem(e, this));
			}), n.loaded = !0, t.resolveMe();
		}).catch(() => {
			n.errored = !0, t.resolveMe();
		}), [n];
	}
	extractLayerMetadata() {
		let e = this.esriLayer;
		if (!e) throw Error("file layer attempted to extract data from esri layer, esri layer did not exist");
		this.supportsFeatures = !0, this.geomType = this.$iApi.geo.geom.clientGeomTypeToRampGeomType(e.geometryType), this.scaleSet.minScale = e.minScale || 0, this.scaleSet.maxScale = e.maxScale || 0, this.extent = this.extent ?? bt.fromESRI(e.fullExtent, this.id + "_extent");
		let t = k(e.fields.slice());
		this.fields = t.map((e) => ({
			name: e.name,
			alias: e.alias,
			type: e.type,
			length: e.length
		})), this.nameField = e.displayField, this.oidField = e.objectIdField, this.renderer = this.$iApi.geo.symbology.makeRenderer(e.renderer, this.fields), this.legend = this.$iApi.geo.symbology.rendererToLegend(this.renderer);
		let n = {
			sourceGraphics: e.source,
			oidField: this.oidField,
			attribs: "*",
			batchSize: -1,
			fieldsToTrim: []
		};
		this.attribs.attLoader = new Jo(this.$iApi, n);
	}
	async getGraphic(e, t) {
		let n;
		if (!t.getGeom && this.attribs.attLoader.isLoaded()) {
			let t = await this.attribs.attLoader.getAttribs();
			n = new ut(new ft(), "", t.features[t.oidIndex[e]]);
		} else {
			let r = {
				filterOIDs: [e],
				includeGeometry: !!t.getGeom
			}, i = await this.queryFeatures(r);
			if (i.length === 0) throw Error(`Could not find object id ${e}`);
			i.length !== 1 && console.warn("did not get a single result on a query for a specific object id"), n = i[0];
		}
		if (t.getStyle) {
			let e = ke(this.renderer.getGraphicSymbol(n.attributes));
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
		m.FeatureFilter({ where: t }).then((e) => {
			ke(this.esriView).filter = e;
		});
	}
}, xo = class extends bo {
	constructor(e, t) {
		super(e, t), this.layerType = V.GEOJSON;
	}
	async onInitiate() {
		let e, t = Date.now();
		if (this.origRampConfig.rawData) e = this.$iApi.geo.layer.files.rawDataJsonParser(this.origRampConfig.rawData, this.origRampConfig.caching);
		else if (this.origRampConfig.url) e = await this.$iApi.geo.layer.files.fetchFileData(this.origRampConfig.url, this.layerType);
		else throw Error("GeoJson layer config contains no raw data or url");
		t > this.lastCancel && (this.sourceGeoJson = e, await super.onInitiate());
	}
}, So = class extends bo {
	constructor(e, t) {
		super(e, t), this.layerType = V.SHAPEFILE;
	}
	async onInitiate() {
		let e = Date.now(), t = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);
		if (e > this.lastCancel) {
			let n = await this.$iApi.geo.layer.files.shapefileToGeoJson(t);
			e > this.lastCancel && (this.sourceGeoJson = n, await super.onInitiate());
		}
	}
}, Co = class extends bo {
	constructor(e, t) {
		super(e, t), this.layerType = V.CSV;
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
}, wo = class extends bo {
	constructor(e, t) {
		super(e, t), this.layerType = V.GEOJSONZIPPED;
	}
	async onInitiate() {
		let e = Date.now(), t = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);
		if (e > this.lastCancel) {
			let n = await this.$iApi.geo.layer.files.unzipSingleFile(t);
			e > this.lastCancel && (this.sourceGeoJson = JSON.parse(this.$iApi.geo.layer.files.arbToStr(n)), await super.onInitiate());
		}
	}
}, To = class extends bo {
	constructor(e, t) {
		super(e, t), this.layerType = V.FLATGEOBUF;
	}
	async onInitiate() {
		let e = Date.now(), t = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);
		if (e > this.lastCancel) {
			let n = await this.$iApi.geo.layer.files.fgbToGeoJson(t, this.expectedTime.fail + 1e3);
			e > this.lastCancel && (this.sourceGeoJson = n, await super.onInitiate());
		}
	}
}, Eo = class extends bo {
	constructor(e, t) {
		super(e, t), this.layerType = V.FLATGEOBUFZIPPED;
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
}, Do = class extends _o {
	constructor(e, t) {
		super(e, t), this.dataFormat = H.ESRI_FEATURE, this.supportsIdentify = !0, this.layerType = V.FEATURE, this.layerFormat = st.FEATURE, e.identifyMode && e.identifyMode !== W.NONE ? this.identifyMode = e.identifyMode : this.identifyMode = W.HYBRID;
	}
	async onInitiate() {
		k(this.esriLayer = await m.FeatureLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
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
				let e = await m.RendererFromJson(this.origRampConfig.customRenderer);
				this.esriLayer.renderer = e, t = { customRenderer: e };
			} else t = {};
			await this.loadLayerMetadata(t), e > this.lastCancel && (this.layerTree.name = this.name, this.visibility = this.origRampConfig?.state?.visibility ?? this._serverVisibility ?? !0, this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.attribs.attLoader.updateFieldList(this.fieldList), this.attribs.attLoader.updateFieldsToTrim(this.getFieldsToTrim()), await this.nameInitializer(this.origRampConfig, this.nameField), await this.maptipInitializer(this.origRampConfig));
		}, a = this.$iApi.geo.layer.loadFeatureCount(this.serviceUrl, this.getSqlFilter(q.PERMANENT)).then((t) => {
			e > this.lastCancel && (this.featureCount = t);
		});
		return this.layerTree.layerIdx = r, t.push(a, i()), t;
	}
	runIdentify(e) {
		if (!this.canIdentify()) return [];
		let t = new Z(), n = we({
			items: [],
			loading: t.getPromise(),
			loaded: !1,
			errored: !1,
			uid: this.uid,
			layerId: this.id,
			requestTime: Date.now()
		}), r = Promise.resolve(), i = Promise.resolve(), a = [];
		if (this.identifyMode === W.HYBRID || this.identifyMode === W.GEOMETRIC) {
			let t = {
				includeGeometry: !1,
				sourceSR: this.sourceSR
			};
			this.geomType !== B.POLYGON && e.geometry.type === B.POINT ? t.filterGeometry = this.$iApi.geo.query.makeClickBuffer(e.geometry, e.tolerance) : t.filterGeometry = e.geometry, t.filterSql = this.getCombinedSqlFilter(), i = this.queryOIDs(t).then((e) => {
				a = e;
			});
		}
		return e.hitTest && (this.identifyMode === W.HYBRID || this.identifyMode === W.SYMBOLIC) && (r = i.then(async () => {
			(await e.hitTest).filter((e) => e.layerId === this.id && a.findIndex((t) => e.oid === t) === -1).forEach((e) => {
				a.push(e.oid);
			});
		})), Promise.all([r, i]).then(() => {
			a.forEach((e) => {
				n.items.push(fo.makeOidItem(e, this));
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
		else if (this.geomType === B.POINT) console.error(`Attempted to query extent for invalid geometry type ${this.geomType}.`);
		else {
			let n = this.attribs.quickCache.getExtent(e);
			if (n) t = n;
			else {
				let [n, r] = await Ye(this.esriLayer.queryExtent({
					objectIds: [e],
					outSpatialReference: this.$iApi.geo.map.getSR().toESRI()
				}));
				!n && r.extent && (t = bt.fromESRI(r.extent), this.attribs.quickCache.setExtent(e, t));
			}
		}
		return t;
	}
	async getLocalGeometry(e) {
		await this.viewPromise(), this.esriView.updating && await new Promise((e) => {
			let t = i(() => this.esriView.updating, (n) => {
				n || (t.remove(), e());
			});
		});
		let t = await m.Query();
		t.objectIds = [e], t.returnGeometry = !0;
		let n = await this.esriView.queryFeatures(t);
		if (n.features.length) {
			let e = n.features[0];
			return this.$iApi.geo.geom.geomEsriToRamp(e.geometry);
		} else return;
	}
	async zoomToFeature(e) {
		let t;
		return this.geomType !== B.POINT && (t = this.attribs.quickCache.getAnyScaleGeom(e), t || (t = await this.getLocalGeometry(e), t ? this.geomType !== B.MULTIPOINT && this.attribs.quickCache.setGeom(e, t, this.$iApi.geo.map.getScale()) : t = await this.getGraphicExtent(e))), t && !t.invalid() ? (await this.$iApi.geo.map.zoomMapTo(t), !0) : await super.zoomToFeature(e);
	}
}, Oo = class extends go {
	isDynamic;
	origState;
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !0, this.supportsSublayers = !0, this.layerType = V.MAPIMAGE, this.layerFormat = st.MAPIMAGE, this.isDynamic = !1, this.maptips = !1, this.layerTree.layerIdx = -1, this.identifyMode = W.GEOMETRIC;
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
		if (e || ko(this, "1=2"), this.actualViz = e, e && !this.esriLayer.visible) this.esriLayer.visible = !0;
		else if (!e && this.esriLayer.visible) {
			let e = "", t = setTimeout(() => {
				this.$iApi.event.off(e), this.actualViz || (this.esriLayer.visible = !1, ko(this, ""));
			}, 1600);
			e = this.$iApi.event.on($.LAYER_DRAWSTATECHANGE, (n) => {
				n.layer.id === this.id && n.state === ct.UP_TO_DATE && (clearTimeout(t), this.$iApi.event.off(e), this.actualViz || (this.esriLayer.visible = !1, ko(this, "")));
			});
		}
		e && ko(this, "");
	}
	async onInitiate() {
		this.esriLayer = k(await m.MapImageLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
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
		if (this.layerTree.name = this.name, !this.esriLayer.capabilities.exportMap) throw this.$iApi.notify.show(_n.WARNING, this.$iApi.$i18n.t("layer.noexportmap", { name: this.name || this.id })), Error("Service does not support Map Image Layer, Map Export is not enabled");
		this.isDynamic = this.esriLayer.capabilities.exportMap.supportsDynamicLayers, this.extent = this.extent ?? bt.fromESRI(this.esriLayer.fullExtent, this.id + "_extent");
		let n = (e) => {
			let t = this.esriLayer?.allSublayers.find((t) => t.id === e);
			if (!t) throw Error("attempt to find map image sublayer failed");
			return t;
		}, r = {};
		this.origRampConfig.sublayers.forEach((e) => {
			r[e.index || 0] = e;
		});
		let a = [], o = (e, t) => {
			let n = e.id, s = r[n];
			if (e.sublayers && e.sublayers.length > 0) {
				let r = new Dt(n, "", (s ? s.name : "") || e.title || "", !1);
				t.findChildByIdx(n) || t.children.push(r), e.sublayers.reverse().forEach((e) => {
					o(e, r);
				});
			} else {
				this._sublayers[n] || (this._sublayers[n] = new Ao({
					id: this.$iApi.geo.layer.sublayerId(this.id, n),
					index: n,
					layerType: V.SUBLAYER,
					name: s?.name,
					state: s?.state ?? {
						opacity: this.opacity,
						visibility: this.visibility,
						maptips: this.maptips,
						identify: this.identify
					},
					extent: s?.extent,
					controls: s?.controls,
					disabledControls: s?.disabledControls,
					initialFilteredQuery: s?.initialFilteredQuery,
					permanentFilteredQuery: s?.permanentFilteredQuery,
					labels: s?.labels
				}, this.$iApi, this)), e.visible = this._sublayers[n].visibility;
				let r = this._sublayers[n];
				if (r.isRemoved) return;
				if (r.name = s?.name || e.title || "", a.push(r), !t.children.map((e) => e.layerIdx).includes(n)) {
					let e = new Dt(n, r.uid, r.name, !1);
					t.children.push(e);
				}
				r.esriWatches.push(i(() => e.visible, () => {
					this.$iApi.event.emit($.LAYER_VISIBILITYCHANGE, {
						visibility: r.visibility,
						layer: r
					}), r.parentLayer?.checkVisibility();
				}), i(() => e.opacity, (e) => {
					this.$iApi.event.emit($.LAYER_OPACITYCHANGE, {
						opacity: e,
						layer: r
					});
				}));
			}
		};
		this.origRampConfig.sublayers.forEach((e) => {
			e.cosmetic || o(n(e.index || 0), this.layerTree);
		});
		let s = a.map(async (e) => {
			let i = n(e.layerIdx), a = r[e.layerIdx];
			if (e.serviceUrl = i.url, e.fetchEsriSublayer(this), await e.initiate(), t < this.lastCancel) return;
			let o = {};
			if (e.esriSubLayer && a?.customRenderer?.type) {
				let t = await m.RendererFromJson(a.customRenderer);
				e.esriSubLayer.renderer = t, o.customRenderer = t;
			}
			if (await e.loadLayerMetadata(o), t < this.lastCancel) return;
			let s = r[e.layerIdx];
			if (s ? (e.visibility = e.isRemoved ? !1 : s.state?.visibility ?? (this.origState.visibility ? e._serverVisibility ?? this.origState.visibility : this.origState.visibility ?? e._serverVisibility) ?? !0, e.opacity = s.state?.opacity ?? this.origState.opacity ?? 1, this.$iApi.geo.attributes.applyFieldMetadata(e, s.fieldMetadata), e.canModifyLayer || this.$iApi.notify.show(_n.WARNING, this.$iApi.$i18n.t("layer.filtersdisabled", { name: e.name || e.id }))) : this.$iApi.geo.attributes.applyFieldMetadata(e), e.supportsFeatures) {
				e.updateFieldList(), e.updateFieldsToTrim(), await e.nameInitializer(s, e.nameField);
				let n = await this.$iApi.geo.layer.loadFeatureCount(e.serviceUrl, e.getSqlFilter(q.PERMANENT));
				t > this.lastCancel && (e.featureCount = n);
			}
		});
		e.push(...s), this.esriLayer.allSublayers.forEach((e) => {
			!e.sublayers && !a.find((t) => t.layerIdx === e.id) ? (e.visible = !1, e.opacity = 0) : e.sublayers && (e.visible = !0);
		});
		let c = this.origState.visibility ?? !0;
		return this.esriLayer.visible = c, this.visibility = c, e;
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
		return e.geometry.type === B.POINT && (n = this.$iApi.geo.query.makeClickBuffer(e.geometry, e.tolerance)), t.map((t) => {
			let r = new Z(), i = {}, a = we({
				items: [],
				loading: r.getPromise(),
				loaded: !1,
				errored: !1,
				uid: t.uid,
				layerId: t.id,
				requestTime: Date.now()
			});
			return t.geomType !== B.POLYGON && n ? i.filterGeometry = n : i.filterGeometry = e.geometry, i.filterSql = t.getCombinedSqlFilter(), i.sourceSR = t.sourceSR, t.queryOIDs(i).then((e) => {
				e.forEach((e) => {
					a.items.push(fo.makeOidItem(e, t));
				}), a.loaded = !0, r.resolveMe();
			}).catch(() => {
				a.errored = !0, r.resolveMe();
			}), a;
		});
	}
}, ko = (e, t) => {
	e.sublayers.forEach((e) => {
		e.layerExists && e.canModifyLayer && e.setSqlFilter(q.MIL_FLICKER_ERASER, t);
	});
}, Ao = class extends _o {
	constructor(e, t, n) {
		if (super(e, t), this.layerType = V.SUBLAYER, this.layerFormat = st.MAPIMAGE, this.isSublayer = !0, this.layerIdx = e.index, this.parentLayer = n, this.isSystem = n.isSystem, this.dataFormat = H.ESRI_FEATURE, this.supportsFeatures = !0, this.maptips = !1, this.url = this.parentLayer?.url, this.canReload = !0, !n.esriLayer) throw Error("Map Image Layer with no internal esri layer encountered in sublayer creation");
		this.fetchEsriSublayer(n), (e.initialFilteredQuery || e.permanentFilteredQuery) && this.applySqlFilter();
	}
	fetchEsriSublayer(e) {
		if (!e.esriLayer) {
			console.error("Attempted to fetch the ESRI sublayer when parent has no ESRI layer");
			return;
		}
		this.esriSubLayer = k(e.esriLayer.allSublayers.find((e) => e.id === this.layerIdx));
	}
	onLoadActions() {
		return this.layerTree = this.parentLayer.getLayerTree().findChildByUid(this.uid), this.layerTree.name = this.name, this.layerTree.layerIdx = this.layerIdx, this.identify = this.config.state.identify == null ? this.supportsIdentify : this.config.state.identify, [];
	}
	async onInitiate() {
		this.initiationState = G.INITIATED;
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
		return !!(this.parentLayer?.layerExists && this.esriSubLayer && this.initiationState === G.INITIATED);
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
			return e ? Y.fromESRI(e) : Y.latLongSR();
		} else return this.noLayerErr(), Y.latLongSR();
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
}, jo = class extends go {
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !1, this.layerType = V.OSM, this.layerFormat = st.OSM, this.dataFormat = H.OSM_TILE, this.supportsFeatures = !1;
	}
	async onInitiate() {
		this.esriLayer = k(await m.OpenStreetMapLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
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
}, Mo = class extends go {
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !1, this.layerType = V.IMAGERY, this.layerFormat = st.IMAGERY, this.dataFormat = H.ESRI_RASTER;
	}
	async onInitiate() {
		this.esriLayer = k(await m.ImageryLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
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
}, No = class extends go {
	schemaLocked = !0;
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !1, this.dataFormat = H.ESRI_TILE;
	}
	onLoadActions() {
		let e = super.onLoadActions();
		return this.layerTree.name = this.name, this.schemaLocked && e.push(this.checkProj()), e;
	}
	async checkProj() {
		let e = this.getSR(), t = this.$iApi.geo.map.getSR().isEqual(e), n = () => this.$iApi.notify.show(_n.WARNING, this.$iApi.$i18n.t("layer.mismatch", { name: this.name || this.id }));
		if (this.layerState === K.LOADED && !t) n(), this.onError(), this.updateDrawState(ct.NOT_LOADED);
		else if (this.layerState === K.ERROR && t) this.reload();
		else if (this.layerState !== K.ERROR && !t) return n(), Promise.reject();
	}
}, Po = class extends No {
	constructor(e, t) {
		super(e, t), this.layerType = V.IMAGERYTILE, this.layerFormat = st.IMAGERYTILE, this.schemaLocked = !1;
	}
	async onInitiate() {
		this.esriLayer = k(await m.ImageryTileLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		return super.makeEsriLayerConfig(e);
	}
}, Fo = class extends No {
	constructor(e, t) {
		super(e, t), this.layerType = V.TILE, this.layerFormat = st.TILE;
	}
	async onInitiate() {
		this.esriLayer = k(await m.TileLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
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
}, Io = class extends No {
	constructor(e, t) {
		super(e, t), this.layerType = V.VECTORTILE, this.layerFormat = st.VECTORTILE;
	}
	async onInitiate() {
		this.esriLayer = k(await m.VectorTileLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
	}
	makeEsriLayerConfig(e) {
		return super.makeEsriLayerConfig(e);
	}
}, Lo = class extends go {
	sublayerNames;
	mimeType;
	constructor(e, t) {
		super(e, t), this.supportsIdentify = !0, this.layerType = V.WMS, this.layerFormat = st.WMS, this.mimeType = e.featureInfoMimeType || "", this.sublayerNames = [], this.dataFormat = H.OGC_RASTER, this.identifyMode = W.GEOMETRIC;
	}
	async onInitiate() {
		this.esriLayer = k(await m.WMSLayer(this.makeEsriLayerConfig(this.origRampConfig))), await super.onInitiate();
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
		if (e.geometry.type !== B.POINT || !this.canIdentify()) return [];
		let t = new Z(), n = we({
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
				typeof e == "string" ? e.indexOf("Search returned no results") === -1 && e !== "" ? r = lt.TEXT : (t = !1, r = lt.UNKNOWN) : r = lt.JSON, t && n.items.push(fo.makeRawItem(r, e));
			}
			n.loaded = !0, t.resolveMe();
		}).catch(() => {
			n.errored = !0, t.resolveMe();
		}), [n];
	}
	setCustomParameter(e, t, n = !0) {
		this.layerExists ? (this.esriLayer.customLayerParameters || (this.esriLayer.customLayerParameters = {}), this.esriLayer.customLayerParameters[e] = t, n && this.esriLayer.refresh()) : this.noLayerErr();
	}
	getFeatureInfo(e, t, r) {
		let i = this.$iApi.geo.map, a = this.esriLayer;
		if (!i.esriView) throw Error("WMS get feature, no map view exists. Cannot derive click coords");
		if (!a) throw this.noLayerErr(), Error("wms get feature failed, no layer");
		let o, s, c = i.getExtent(), l = a.spatialReferences, u = e.join(","), d = i.esriView.toScreen(t.toESRI()), f = Math.floor(d.x), p = Math.floor(d.y), m = {
			"application/json": "json",
			"text/html": "text",
			"text/plain": "text"
		}[r] || "text", h = i.getSR();
		h.wkid ? o = h.wkid : (o = 4326, console.error("Map is likely in a WKT projection. WMS Identify request will likely fail.")), l && l.length > 1 ? l.indexOf(o) === -1 && (h.latestWkid && l.indexOf(h.latestWkid) > -1 ? o = h.latestWkid : console.error("WMS service does not support the maps projection. Identify request will likely fail.")) : console.error("No supported wkid/epsg code found for WMS service. Identify request will likely fail."), a.version === "1.3" || a.version === "1.3.0" ? (s = {
			CRS: "EPSG:" + o,
			I: f,
			J: p,
			STYLES: "",
			FORMAT: a.imageFormat
		}, this.$iApi.geo.layer.ogc.reversedAxisWKIDs().indexOf(o) > -1 && (s.BBOX = `${c.ymin},${c.xmin},${c.ymax},${c.xmax}`)) : s = {
			SRS: "EPSG:" + o,
			X: f,
			Y: p
		}, Object.prototype.hasOwnProperty.call(s, "BBOX") || (s.BBOX = `${c.xmin},${c.ymin},${c.xmax},${c.ymax}`);
		let g = {
			SERVICE: "WMS",
			REQUEST: "GetFeatureInfo",
			VERSION: a.version,
			WIDTH: i.getPixelWidth(),
			HEIGHT: i.getPixelHeight(),
			QUERY_LAYERS: u,
			LAYERS: u,
			INFO_FORMAT: r
		}, ee = a.customLayerParameters;
		return ee && Object.keys(ee).forEach((e) => {
			e.toLowerCase() !== "styles" && (g[e] = ee[e]);
		}), Object.keys(g).forEach((e) => s[e] = g[e]), n(a.url.split("?")[0], {
			query: s,
			responseType: m
		});
	}
	getLegendUrls(e) {
		if (!this.layerExists) return this.noLayerErr(), [];
		let t = /* @__PURE__ */ new Map();
		this.esriLayer.allSublayers.forEach((e) => {
			e.visible && (e.legendUrl && this.origRampConfig.sublayers?.forEach((t) => {
				if (t.id && t.currentStyle && t.id === e.name) {
					let n = new Mt(e.legendUrl);
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
		let e = Date.now(), t = this.config.sublayers, n = this.getLegendUrls(t.map((e) => ({
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
		this.legend = n;
	}
}, Ro = class extends bo {
	constructor(e, t) {
		super(e, t), this.layerType = V.WFS;
	}
	async onInitiate() {
		let e = Date.now(), { offset: t, limit: n } = new Mt(this.config.url).queryMap, r = await this.$iApi.geo.layer.ogc.loadWfsData(this.config.url, -1, parseInt(t) || 0, parseInt(n) || 1e3, void 0, this.config.xyInAttribs);
		e > this.lastCancel && (this.sourceGeoJson = r, await super.onInitiate());
	}
}, zo = class extends ho {
	sourceJson;
	attribs;
	_visibility;
	constructor(e, t) {
		super(e, t), this.dataFormat = H.ESRI_FEATURE, this.layerFormat = st.NOLAYER, this.drawState = ct.NOT_VISUAL, this.attribs = new Wo(), this.supportsFeatures = !0, this.mapLayer = !1, this.isFile = !1, this._visibility = e.state?.visibility ?? !0, this.expectedTime.draw = 0;
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
					length: s === et.STRING ? 256 : void 0
				};
			}), this.oidField = "rampOID", this.fields.push({
				name: this.oidField,
				type: et.OID
			}), e.fields.push(this.oidField), e.data.forEach((e, t) => e.push(t + 1)), this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata), this.fieldList = "*";
			let i = {
				batchSize: -1,
				sourceDataJson: e,
				oidField: this.oidField,
				attribs: "*",
				fieldsToTrim: this.getFieldsToTrim()
			};
			this.attribs.attLoader = new Yo(this.$iApi, i), await this.attribs.attLoader.getAttribs(), this.featureCount = e.data.length;
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
		this.$iApi.event.emit($.LAYER_RELOAD_START, this), await this.terminate(), await this.initiate(), this.layerState !== K.ERROR && this.onLoad(), setTimeout(() => {
			this.$iApi.event.emit($.LAYER_RELOAD_END, this);
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
		return new ut(new ft(), "", n);
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
		this._visibility !== e && (this._visibility = e, this.$iApi.event.emit($.LAYER_VISIBILITYCHANGE, {
			visibility: e,
			layer: this
		}));
	}
}, Bo = class extends zo {
	constructor(e, t) {
		super(e, t), this.layerType = V.DATAJSON;
	}
	async onInitiate() {
		let e = Date.now(), t;
		if (this.origRampConfig.rawData) t = this.$iApi.geo.layer.files.rawDataJsonParser(this.origRampConfig.rawData, this.origRampConfig.caching);
		else if (this.origRampConfig.url) t = await this.$iApi.geo.layer.files.fetchFileData(this.origRampConfig.url, this.layerType);
		else throw Error("Json Data layer config contains no raw data or url");
		e > this.lastCancel && (this.sourceJson = t, await super.onInitiate());
	}
}, Vo = class extends zo {
	filter;
	serviceUrl;
	constructor(e, t) {
		super(e, t), this.layerType = V.DATATABLE, this.serviceUrl = e.url, this.filter = new kt(e.permanentFilteredQuery || "", e.initialFilteredQuery || "");
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
				permanentFilter: this.getSqlFilter(q.PERMANENT),
				fieldsToTrim: this.getFieldsToTrim()
			};
			this.attribs.attLoader = new qo(this.$iApi, n), this.attribs.quickCache = new Xo(this.geomType);
		}), i = this.$iApi.geo.layer.loadFeatureCount(this.serviceUrl, this.getSqlFilter(q.PERMANENT)).then((e) => {
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
		return new ut(new ft(), "", t);
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
		t !== this.filter.getSql(e) && (this.filter.setSql(e, t), this.$iApi.event.emit($.FILTER_CHANGE, {
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
}, Ho = new Map([
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
]), Uo = class extends Q {
	oidIndexer(e, t) {
		e.features.forEach((n, r) => {
			e.oidIndex[n[t]] = r;
		});
	}
	async arcGisBatchLoad(e, t) {
		if (t.loadAbortFlag) return [];
		let r = e.permanentFilter ? ` AND ${e.permanentFilter}` : "", i = { query: {
			where: `${e.oidField}>${e.maxId}${r}`,
			outFields: e.attribs,
			orderByFields: e.oidField,
			returnGeometry: "false",
			f: "json"
		} }, [a, o] = await Ye(n(e.serviceUrl + "/query", i));
		if (!o) return console.error(`ArcGIS batch load error: ${e.serviceUrl}`, a), Promise.reject(/* @__PURE__ */ Error(`ArcGIS batch load error: ${e.serviceUrl}`));
		if (!o.data || !o.data.features) return console.error(`ArcGIS batch load gave no data/features: ${e.serviceUrl}`), Promise.reject(/* @__PURE__ */ Error(`ArcGIS batch load gave no data/features: ${e.serviceUrl}`));
		let s = o.data.features, c = s.length;
		if (c > 0) {
			t.loadedCount += c;
			let n;
			if (e.supportsLimit ? n = o.data.exceededTransferLimit : (e.batchSize === -1 && (e.batchSize = c), n = c >= e.batchSize), s = this.trimFeatureSetAttributes(s, e.fieldsToTrim ?? []), n) {
				e.maxId = s[c - 1].attributes[e.oidField];
				let n = await this.arcGisBatchLoad(e, t);
				return t.loadAbortFlag ? [] : s.concat(n);
			} else return t.loadAbortFlag ? [] : s;
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
			features: e.sourceGraphics.map((e) => ke(e).attributes).toArray(),
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
		let [r, i] = await Ye(n(e.serviceUrl + "/query", t));
		if (!i) return console.error(`ArcGIS single feature load error: ${e.serviceUrl}`, r), Promise.reject(/* @__PURE__ */ Error(`ArcGIS single feature load error: ${e.serviceUrl}`));
		if (!i.data || !i.data.features) return console.error(`Could not locate feature ${e.oid} for layer ${e.serviceUrl}`), Promise.reject(/* @__PURE__ */ Error(`Could not locate feature ${e.oid} for layer ${e.serviceUrl}`));
		let a = i.data.features;
		if (a.length > 0) {
			let t, n = this.trimFeatureSetAttributes([a[0]], e.fieldsToTrim ?? [])[0];
			if (e.includeGeometry) {
				n.geometry.spatialReference = i.data.spatialReference;
				let e = h(n.geometry);
				t = this.$iApi.geo.geom.geomEsriToRamp(e);
			} else t = new ft();
			return new ut(t, "", n.attributes);
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
		if (e.dataFormat === H.ESRI_RASTER) throw Error("Attempting to get attributes on a raster layer.");
		let n = await t.attLoader.getAttribs();
		if (!n.features || n.features.length === 0) return {
			columns: [],
			rows: [],
			fields: [],
			oidField: ""
		};
		let r = e.fields.filter((e) => Object.prototype.hasOwnProperty.call(n.features[0], ke(e).name)).map((e) => ({
			data: ke(e).name,
			title: ke(e).alias || ke(e).name
		})), i = n.features.map((t) => {
			let n = re({}, t);
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
		return Ho.get(e);
	}
}, Wo = class {
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
}, Go = class {
	loadedCount;
	loadAbortFlag;
	loadIsDone;
	constructor() {
		this.loadedCount = 0, this.loadAbortFlag = !1, this.loadIsDone = !1;
	}
}, Ko = class extends Q {
	aac;
	loadPromise;
	details;
	tabularAttributesCache;
	constructor(e, t) {
		super(e), this.aac = new Go(), this.details = t;
	}
	updateFieldList(e) {
		this.details.attribs = e;
	}
	updateFieldsToTrim(e) {
		this.details.fieldsToTrim = e;
	}
	getAttribs() {
		return this.loadPromise ||= (this.aac = new Go(), this.loadPromiseGenerator()), this.loadPromise;
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
}, qo = class extends Ko {
	constructor(e, t) {
		super(e, t);
	}
	loadPromiseGenerator() {
		return this.$iApi.geo.attributes.loadArcGisServerAttributes(this.details, this.aac);
	}
}, Jo = class extends Ko {
	constructor(e, t) {
		super(e, t);
	}
	loadPromiseGenerator() {
		return this.$iApi.geo.attributes.loadGraphicsAttributes(this.details, this.aac);
	}
}, Yo = class extends Ko {
	constructor(e, t) {
		super(e, t);
	}
	loadPromiseGenerator() {
		return this.$iApi.geo.attributes.loadCompactJsonAttributes(this.details, this.aac);
	}
}, Xo = class {
	attribs;
	geoms;
	extents;
	isPoint;
	constructor(e) {
		this.attribs = {}, this.geoms = {}, this.extents = {}, this.isPoint = e === B.POINT || e === B.MULTIPOINT;
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
}, Zo = class {
	innerRenderer;
	symbolUnits;
	defaultUnit;
	type;
	falseRenderer;
	constructor(e, t, n = !1) {
		this.innerRenderer = e, this.symbolUnits = [], this.falseRenderer = n, this.type = ot.Unknown;
	}
	makeSearchParams(e) {
		return e;
	}
	searchRenderer(e) {
		let t = this.makeSearchParams(e), n = this.symbolUnits.find((e) => e.match(t));
		if (n) return n;
		if (this.defaultUnit) return this.defaultUnit;
		console.error(`renderer search could not find match for ${t}`);
		let r = new Qo(this);
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
}, Qo = class {
	isDefault = !1;
	svgCode = "";
	symbol;
	definitionClause = "";
	label = "";
	parent;
	constructor(t) {
		this.parent = t, this.symbol = new e();
	}
	match(e) {
		return !!e;
	}
}, $o = class extends Zo {
	constructor(e, t) {
		super(e, t), this.type = ot.Simple;
		let n = new Qo(this);
		n.label = e.label || "", n.symbol = e.symbol, n.definitionClause = "", this.symbolUnits.push(n);
	}
}, es = class extends Zo {
	delim;
	keyFields;
	constructor(e, t, n = !1) {
		super(e, t, n), this.type = ot.Unique, this.delim = e.fieldDelimiter || ", ";
		let r = (e) => e.replace(/'/g, "''");
		this.keyFields = [
			e.field,
			e.field2,
			e.field3
		].filter((e) => e).map((e) => this.cleanFieldName(e, t));
		let i = this.keyFields.map((e) => this.getFieldDelimiter(e, t));
		if (e.uniqueValueInfos.forEach((e) => {
			let t = new ts(this, e.value);
			if (t.label = e.label || "", t.symbol = e.symbol, !this.falseRenderer) {
				let e = t.matchValue.split(this.delim);
				t.definitionClause = `(${this.keyFields.map((t, n) => e[n] === "<Null>" ? `${t} IS NULL` : `${t} = ${i[n]}${r(e[n])}${i[n]}`).join(" AND ")})`, t.matchValue = t.matchValue.replace(/<Null>/g, "");
			}
			this.symbolUnits.push(t);
		}), e.defaultSymbol) {
			let t = new ts(this, "");
			t.isDefault = !0, t.label = e.defaultLabel || "", t.symbol = e.defaultSymbol, t.definitionClause = this.makeElseClause(), this.defaultUnit = t;
		}
	}
	makeSearchParams(e) {
		return this.keyFields.map((t) => {
			let n = e[t] === null ? "" : e[t];
			return typeof n != "string" && (n = n.toString()), n;
		}).join(this.delim);
	}
}, ts = class extends Qo {
	matchValue;
	constructor(e, t) {
		super(e), typeof t == "number" ? this.matchValue = t.toString() : this.matchValue = t;
	}
	match(e) {
		return this.matchValue === e;
	}
}, ns = class extends Zo {
	valField;
	constructor(e, t, n = !1) {
		if (super(e, t, n), this.valField = this.cleanFieldName(e.field, t), e.classBreakInfos.forEach((e, t) => {
			let n = t === 0, r = new rs(this, e.minValue, e.maxValue, n);
			r.label = e.label || "", r.symbol = e.symbol, this.falseRenderer || (r.definitionClause = `(${this.valField} >${n ? "=" : ""}  ${e.minValue} AND ${this.valField} <= ${e.maxValue})`), this.symbolUnits.push(r);
		}), e.defaultSymbol) {
			let t = new rs(this, 0, 0, !1);
			t.isDefault = !0, t.label = e.defaultLabel || "", t.symbol = e.defaultSymbol, t.definitionClause = this.makeElseClause(), this.defaultUnit = t;
		}
	}
	makeSearchParams(e) {
		return parseFloat(e[this.valField]);
	}
}, rs = class extends Qo {
	minValue;
	maxValue;
	firstBreak;
	constructor(e, t, n, r) {
		super(e), this.minValue = t, this.maxValue = n, this.firstBreak = r;
	}
	match(e) {
		return this.minValue === this.maxValue ? this.maxValue === e : this.firstBreak ? this.minValue <= e && this.maxValue >= e : this.minValue < e && this.maxValue >= e;
	}
}, is = class extends Q {
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
			case this.SIMPLE: return new $o(e, t);
			case this.CLASS_BREAKS: return new ns(e, t, n);
			case this.UNIQUE_VALUE: return new es(e, t, n);
			default: throw Error(`Unknown renderer type encountered - ${e.type}`);
		}
	}
	async generateWMSSymbology(e) {
		let t = $e(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, 0, 0), n = {
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
		t === null && (t = $e(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, 0, 0));
		let n = await this.$iApi.geo.shared.convertImagetoDataURL(e);
		if (n === e) return "";
		let { loader: r } = await this.svgDrawImage(t, n);
		return t.viewbox(0, 0, r.width, r.height), t.svg();
	}
	async renderSymbologyIcon(e, t = null) {
		if (t === null) {
			let e = document.createElement("div");
			e.setAttribute("style", "opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"), document.body.appendChild(e), t = $e(e).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE);
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
		let n = $e(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE);
		return this.generateLetterSvg(n, e, t), {
			name: e,
			svgcode: n.svg()
		};
	}
	async generateBlankSymbology() {
		return $e(document.createElement("div")).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).svg();
	}
	async symbolToSvg(e) {
		let t = this, n = 1.33333, r = document.createElement("div");
		r.setAttribute("style", "opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"), document.body.appendChild(r);
		let i = $e(r).size(this.CONTAINER_SIZE, this.CONTAINER_SIZE).viewbox(0, 0, this.CONTAINER_SIZE, this.CONTAINER_SIZE), a = {
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
			[nt.SOLID]: "none",
			[nt.NONE]: "none",
			[nt.DASH]: "5.333,4",
			[nt.DOT]: "1.333,4",
			[nt.DASHDOT]: "5.333,4,1.333,4",
			[nt.LONGDASH]: "10.666,4",
			[nt.LONGDASHDOT]: "10.666,4,1.333,4",
			[nt.LONGDASHDOTDOT]: "10.666,4,1.333,4,1.333,4",
			[nt.SHORTDOT]: "1.333,1.333",
			[nt.SHORTDASH]: "5.333,1.333",
			[nt.SHORTDASHDOT]: "5.333,1.333,1.333,1.333",
			[nt.SHORTDASHDOTDOT]: "5.333,1.333,1.333,1.333,1.333,1.333"
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
		let t = { query: { f: "json" } }, r = { layers: [] }, [i, a] = await Ye(n(`${e}/legend`, t));
		return a ? a.data ? a.data : (console.error(`Error loading legend data for ${e}`), r) : (console.error(`Error loading legend for ${e}`, i), r);
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
			let e = await m.RendererFromJson(r);
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
		}, r = await m.RendererFromJson(n);
		return this.makeRenderer(r, [], !0);
	}
	async mapServerToLocalLegend(e, t = void 0) {
		let n = await this.getMapServerLegend(e), r, i;
		return t === void 0 ? (i = 0, r = await this.mapServerLegendToRendererAll(n)) : (i = parseInt(t), r = await this.mapServerLegendToRenderer(n, i)), this.rendererToLegend(r);
	}
}, as = class extends Q {
	constructor(e) {
		super(e);
	}
	async arcGisServerQueryIds(e) {
		if (!(e.filterGeometry || e.filterSql)) return console.error("arcGisServerQueryIds called without any filter"), [];
		let t = await m.Query();
		t.returnGeometry = !1, e.filterSql && (t.where = e.filterSql), e.filterGeometry && (t.geometry = await this.queryGeometryHelper(e.filterGeometry, !1, this.$iApi.geo.map.getScale(), e.sourceSR), t.spatialRelationship = "intersects");
		let n = await m.QueryByIds(e.url, t);
		return Array.isArray(n) ? n : [];
	}
	async geoJsonQuery(e) {
		let t = await m.Query();
		if (t.returnGeometry = !!e.includeGeometry, t.outFields = ["*"], e.filterGeometry && (t.geometry = await this.queryGeometryHelper(e.filterGeometry, !0), t.spatialRelationship = "intersects"), e.filterSql && (t.where = e.filterSql), e.filterOIDs && (t.objectIds = e.filterOIDs), await e.layer.loadPromise(), !e.layer.esriLayer) throw Error("file layer being queried contains no ESRI layer");
		return (await e.layer.esriLayer.queryFeatures(t)).features.map((e, n) => {
			let r;
			return r = t.returnGeometry ? this.$iApi.geo.geom.geomEsriToRamp(e.geometry, `queryResult${n}`) : new ft(), new ut(r, "", e.attributes);
		});
	}
	async queryGeometryHelper(e, t, n, r) {
		return !t && e.type === B.EXTENT && r && !r.isEqual(e.sr) && !(n && n > 2e7 && e.sr.wkid === 3978 && r.wkid === 4326) ? (await this.$iApi.geo.proj.projectExtent(r, e)).toESRI() : e.toESRI();
	}
	makeClickBuffer(e, t = 5) {
		let n = this.$iApi.geo.map, r = n.getExtent(), i = t * (r.xmax - r.xmin) / n.getPixelWidth();
		return new bt("ze_buffer", [e.x - i, e.y - i], [e.x + i, e.y + i], e.sr);
	}
}, os = class extends Q {
	attributes;
	geom;
	layer;
	map;
	proj;
	query;
	shared;
	symbology;
	constructor(e) {
		super(e), this.geom = Fs.geom, this.proj = Fs.proj, this.shared = Fs.sharedUtils, this.map = new to(e), this.layer = new po(e), this.attributes = new Uo(e), this.query = new as(e), this.symbology = new is(e), Array.isArray(p.request.interceptors) || (p.request.interceptors = []), p.request.interceptors.push({ before: (e) => {
			e.url.includes("?blankTile=false") && (e.url = e.url.replace("?blankTile=false", "?blankTile=true"));
		} });
	}
	set proxy(e) {
		p.request.proxyUrl = e;
	}
	get proxy() {
		return p.request.proxyUrl || "";
	}
}, ss = /* #__PURE__ */ Object.assign({
	"../fixtures/appbar/index.ts": () => import("./appbar-zamgqrh8.js"),
	"../fixtures/areas-of-interest/index.ts": () => import("./areas-of-interest-DEguwLK1.js"),
	"../fixtures/basemap/index.ts": () => import("./basemap-J6bO7Zc0.js"),
	"../fixtures/crosshairs/index.ts": () => import("./crosshairs-DOmIjWu2.js"),
	"../fixtures/details/index.ts": () => import("./details-CSsWCKgD.js"),
	"../fixtures/draw/index.ts": () => import("./draw-C0iyHGKn.js"),
	"../fixtures/export/index.ts": () => import("./export-BSHi9AcJ.js"),
	"../fixtures/export-footnote/index.ts": () => import("./export-footnote-CfrSg5vE.js"),
	"../fixtures/export-legend/index.ts": () => import("./export-legend-Bd5_4N2f.js"),
	"../fixtures/export-map/index.ts": () => import("./export-map-BH0mQwc-.js"),
	"../fixtures/export-northarrow/index.ts": () => import("./export-northarrow-CDqRcxF3.js"),
	"../fixtures/export-scalebar/index.ts": () => import("./export-scalebar-CjtQwVd8.js"),
	"../fixtures/export-timestamp/index.ts": () => import("./export-timestamp-Baot2QUG.js"),
	"../fixtures/export-title/index.ts": () => import("./export-title-DaEAZQaw.js"),
	"../fixtures/extentguard/index.ts": () => import("./extentguard-DIgiOq--.js"),
	"../fixtures/gazebo/index.ts": () => import("./gazebo-BI30Y5Iz.js"),
	"../fixtures/geosearch/index.ts": () => import("./geosearch-CfAR1-3o.js"),
	"../fixtures/grid/index.ts": () => import("./grid-iHRIeLdo.js"),
	"../fixtures/help/index.ts": () => import("./help-DMA1asWT.js"),
	"../fixtures/hilight/index.ts": () => import("./hilight-BHPil-eb.js"),
	"../fixtures/keyboardnav/index.ts": () => import("./keyboardnav-DVpGmkDw.js"),
	"../fixtures/layer-reorder/index.ts": () => import("./layer-reorder-D5KVMlTE.js"),
	"../fixtures/legend/index.ts": () => import("./legend-Bskd5MGi.js"),
	"../fixtures/mapnav/index.ts": () => import("./mapnav-CirSi1LU.js"),
	"../fixtures/metadata/index.ts": () => import("./metadata-Djh4yy8d.js"),
	"../fixtures/northarrow/index.ts": () => import("./northarrow-CMwD2L2w.js"),
	"../fixtures/overviewmap/index.ts": () => import("./overviewmap-B876q-oz.js"),
	"../fixtures/panguard/index.ts": () => import("./panguard-DZ4ZSA0c.js"),
	"../fixtures/pindrop/index.ts": () => import("./pindrop-DQowuyrg.js"),
	"../fixtures/scrollguard/index.ts": () => import("./scrollguard-DKpCQhhG.js"),
	"../fixtures/settings/index.ts": () => import("./settings-DJ-IYOdk.js"),
	"../fixtures/snowman/index.ts": () => import("./snowman-DX7Xh8sV.js"),
	"../fixtures/swipe/index.ts": () => import("./swipe-CfROzpK5.js"),
	"../fixtures/wizard/index.ts": () => import("./wizard-CfxnOskf.js")
}), cs = (e) => e === us || e.prototype instanceof us, ls = class extends Q {
	constructor(e) {
		super(e);
	}
	exists(e) {
		return e in Kt(this.$vApp.$pinia).items;
	}
	async add(e, t) {
		let n;
		if (e in Kt(this.$vApp.$pinia).items) return this.get(e);
		if (t) {
			if (typeof t != "function") throw Error("malformed fixture constructor");
			n = cs(t) ? new t(e, this.$iApi) : us.updateBaseToInstance(new t(), e, this.$iApi);
		} else {
			let t = (await ss[`../fixtures/${e}/index.ts`]()).default;
			n = new t(e, this.$iApi);
		}
		return Kt(this.$vApp.$pinia).addFixture(n), this.$iApi.event.emit($.FIXTURE_ADDED, n), this.$iApi.geo.map.created && n.initialized?.(), n;
	}
	remove(e) {
		let t = this.get(e);
		if (!t) throw Error(`Could not find fixture ${e} for removal`);
		return Kt(this.$vApp.$pinia).removeFixture(t), this.$iApi.event.emit($.FIXTURE_REMOVED, t), t;
	}
	flush() {
		let e = Kt(this.$vApp.$pinia);
		Object.keys(e.items).forEach((e) => {
			let t = this.get(e);
			t?.persist && typeof t?.removed == "function" ? t.removed() : t && this.remove(e);
		});
	}
	restore() {
		let e = Kt(this.$vApp.$pinia);
		Object.keys(e.items).forEach((t) => {
			let n = e.items[t];
			typeof n.added == "function" && n.added(), this.$iApi.geo.map.created && typeof n.initialized == "function" && n.initialized();
		});
	}
	get(e) {
		let t = [];
		typeof e == "string" ? t.push(e) : Array.isArray(e) ? t.push(...e) : t.push(e.id);
		let n = t.map((e) => {
			let t = Kt(this.$vApp.$pinia).items[e];
			if (t) return t;
		});
		return n.length === 1 ? n[0] : n;
	}
	isLoaded(e) {
		let t = Kt(this.$vApp.$pinia), n = Array.isArray(e) ? e : [e];
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
		let t = v(this.$vApp.$pinia);
		return t.startingFixtures = e, Promise.all(e.map((e) => this.add(e)));
	}
}, us = class e extends Q {
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
		let n = O({
			extends: e,
			iApi: this.$iApi,
			data() {
				return { ...t };
			}
		}), r = fe(n), { el: i } = this.mount(n, {
			props: { ...t.propsData },
			app: r
		});
		return i;
	}
	mount(e, { props: t, children: n, element: r, app: i } = {}) {
		let a = r, o = ge(e, t, n);
		return i && i._context && (o.appContext = i._context), a ||= document.createElement("div"), Te(o, a), {
			vNode: o,
			destroy: () => {
				a && Te(null, a), a = null, o = null;
			},
			el: a
		};
	}
	get config() {
		return v(this.$vApp.$pinia).config.fixtures[this.id];
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
			let t = cn(this.$vApp.$pinia), n = !!this.config.panelTeleport.target;
			e.forEach((e) => {
				t.items[e].teleport = n ? this.config.panelTeleport : this.config.panelTeleport[e], t.items[e].style.width = "100%";
			});
		}
	}
}, ds = class extends Q {
	panelStore = cn(this.$vApp.$pinia);
	updateHTML(e, t, n) {
		let r = this.get(e), i = n ? r.screens[n] : Object.values(r.screens)[0];
		if (Rt(i)) for (let e in t) i[e].innerHTML = t[e] instanceof HTMLElement ? t[e].outerHTML : t[e];
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
		let n = fs(e) ? { [e.id]: e.config } : e;
		if (t) {
			let e = t.i18n || {}, n = this.$iApi.$i18n;
			Object.entries(e.messages || {}).forEach((e) => n.mergeLocaleMessage(...e)), Object.entries(e.dateTimeFormats || {}).forEach((e) => n.mergeDateTimeFormat(...e)), Object.entries(e.numberFormats || {}).forEach((e) => n.mergeNumberFormat(...e));
		}
		let r = Object.entries(n).reduce((e, [t, n]) => (e.push(new _s(this.$iApi, t, n)), e), []);
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
		if (typeof e == "string" || e instanceof _s ? t = this.get(e) : (t = this.get(e.id), {screen: n, props: r} = e), !t) return t;
		if (t.isOpen && !t.isVisible) t.minimize();
		else if (t.isOpen) return t;
		return n || (t.route && !r ? {screen: n, props: r} = t.route : n = Object.keys(t.screens).pop()), this.show(t, {
			screen: n,
			props: r
		}) ? (this.panelStore.openPanel(t), this.$iApi.updateAlert(this.$iApi.$i18n.t("panels.alert.open", { name: t.alertName ? this.$iApi.$i18n.t(t.alertName) : t.id })), this.$iApi.event.emit($.PANEL_OPENED, t)) : console.error(`Failed to open ${t.id} panel.`), t;
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
		return t.isPinned && t.pin(!1), this.panelStore.closePanel(t), this.$iApi.updateAlert(this.$iApi.$i18n.t("panels.alert.close", { name: t.alertName ? this.$iApi.$i18n.t(t.alertName) : t.id })), this.$iApi.event.emit($.PANEL_CLOSED, t), this.$vApp.$nextTick(() => {
			let e = n > 0 ? this.visible[n - 1] : this.visible[0];
			e ? this.focus(e) : r?.focus();
		}), t;
	}
	minimize(e) {
		let t = this.get(e);
		return t && (t.isPinned && t.pin(!1), this.panelStore.closePanel(t), this.$iApi.updateAlert(this.$iApi.$i18n.t("panels.alert.minimize", { name: t.alertName ? this.$iApi.$i18n.t(t.alertName) : t.id })), this.$iApi.event.emit($.PANEL_MINIMIZED, t), t);
	}
	move(e, t) {
		let n = this.get(e);
		return n && (this.panelStore.movePanel(n, t), n);
	}
	toggle(e, t) {
		let n;
		return n = typeof e == "string" || e instanceof _s ? this.get(e) : this.get(e.id), n && (t = t === void 0 ? !n.isVisible : t, t === n.isVisible ? n : t ? this.open(e) : this.close(n));
	}
	toggleMinimize(e, t) {
		let n;
		return n = typeof e == "string" || e instanceof _s ? this.get(e) : this.get(e.id), n && (t = t === void 0 ? !n.isVisible : t, t === n.isVisible ? n : t ? this.open(n) : this.minimize(n));
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
function fs(e) {
	return e.id !== void 0 && typeof e.id == "string" && e.config !== void 0;
}
//#endregion
//#region src/components/panel-stack/screen-spinner.vue
var ps = {};
function ms(e, t) {
	let n = N("panel-screen");
	return j(), C(n, {
		header: !1,
		class: "screen-spinner"
	}, {
		content: L(() => [...t[0] ||= [E("div", { class: "loader" }, null, -1)]]),
		_: 1
	});
}
var hs = /*#__PURE__*/ y(ps, [["render", ms], ["__scopeId", "data-v-a3c61802"]]), gs = /* #__PURE__ */ Object.assign({
	"../fixtures/areas-of-interest/screen.vue": () => import("./screen-DclH5lEC.js"),
	"../fixtures/basemap/screen.vue": () => import("./screen-ZhNgafZ-.js"),
	"../fixtures/export/screen.vue": () => import("./screen-Da5YyqGV.js"),
	"../fixtures/geosearch/screen.vue": () => import("./screen-BwbELlvY.js"),
	"../fixtures/grid/screen.vue": () => import("./screen-I9u3LV3Y.js"),
	"../fixtures/help/screen.vue": () => import("./screen-Bqf9r587.js"),
	"../fixtures/layer-reorder/screen.vue": () => import("./screen-BfaJ-mjA.js"),
	"../fixtures/legend/screen.vue": () => import("./screen-DTZDCzn7.js"),
	"../fixtures/metadata/screen.vue": () => import("./screen-Bd3O0XhE.js"),
	"../fixtures/settings/screen.vue": () => import("./screen-DHq81jn2.js"),
	"../fixtures/wizard/screen.vue": () => import("./screen-BW8Tmr2x.js")
}), _s = class extends Q {
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
		if (Lt(t) || It(t)) n = t, this.loadedScreens.push(e);
		else if (Rt(t)) n = { template: `<panel-screen :panel="this" :screenId="'${e}'">
                           </panel-screen>` };
		else {
			let r;
			r = typeof t == "string" ? gs[`../fixtures/${t}`]() : t();
			let i = new Promise((t, n) => {
				r.then((n) => {
					this.loadedScreens.push(e), t(zt(n) ? n.default : n);
				}), r.catch((e) => n(e));
			});
			n = me({
				loader: () => i,
				loadingComponent: hs,
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
}, vs = class extends Q {
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
function ys(e) {
	let t = {};
	(Array.isArray(e) ? e : [e]).forEach((e) => {
		e.language ||= (console.warn("RAMP2 config with no language supplied. Defaulting to English"), "en");
		let n = bs(e);
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
function bs(e) {
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
	return Ds(e.services, t), xs(e.map, t), Os(e.ui, t), e.plugins && ks(e.plugins, t), t;
}
function xs(e, t) {
	if (e.layers && e.layers.forEach((e) => {
		t.layers.unshift(ws(e));
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
				layerType: e.overviewUrl.layerType === "esriDynamic" ? V.MAPIMAGE : V.TILE,
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
				layerType: t.layerType === "esriDynamic" ? V.MAPIMAGE : V.TILE,
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
	})) : t.fixtures.legend = { root: Ss(e.legend.root) });
}
function Ss(e) {
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
	return e.controls && e.controls.length > 0 && (t.controls = Es(e.controls, n), e.controls.includes("visibility") && t.controls.push("visibilityButton"), (e.controls.length !== 1 || e.controls[0] !== "visibility") && console.warn("Legend entry groups currently support only the visibility control. All other controls are currently not supported."), t.controls.push("expandButton")), e.disabledControls && e.disabledControls.length > 0 && (t.disabledControls = Es(e.disabledControls, n), e.disabledControls.includes("visibility") && t.disabledControls.push("visibilityButton"), (e.disabledControls.length !== 1 || e.disabledControls[0] !== "visibility") && console.warn("Legend entry groups currently support only the visibility control. All other controls are currently not supported.")), e.children.forEach((e) => {
		if (e.layerId) t.children.push(Cs(e));
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
				e.layerId ? n.children.push(Cs(e)) : n.children.push(Ss(e));
			}), t.children.push(n);
		} else t.children.push(Ss(e));
	}), t;
}
function Cs(e) {
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
	return e.controls && e.controls.length > 0 && (t.layerControls = Es(e.controls, n), t.layerControls.push("symbology")), e.disabledControls && e.disabledControls.length > 0 && (t.disabledLayerControls = Es(e.disabledControls, n)), e.controlledIds && (console.warn(`controlledIds property defined in legend entry ${e.layerId} cannot be mapped and will be skipped.`), delete t.controlledIds), e.entryIndex && (t.sublayerIndex = e.entryIndex, delete e.entryIndex), e.entryId && console.warn(`entryId property defined in legend entry ${e.layerId} cannot be mapped and will be skipped.`), t;
}
function ws(e) {
	let t = Ts(e);
	switch (t.id = e.id, t.url = e.url, e.refreshInterval && (t.refreshInterval = e.refreshInterval, console.warn("Property refreshInterval in layer is currently not supported.")), e.expectedResponseTime && (t.expectedLoadTime = e.expectedResponseTime), e.metadataUrl && (t.metadata = { url: e.metadataUrl }), e.catalogueUrl && (t.catalogueUrl = e.catalogueUrl), e.enableStructuredDelete !== void 0 && console.warn(`enableStructuredDelete property provided in layer ${e.id} cannot be mapped and will be skipped.`), e.tooltipField && (t.maptipField = e.tooltipField), e.tolerance && (t.mouseTolerance = e.tolerance, e.layerType === "esriDynamic" && (t.touchTolerance = e.tolerance + 10)), e.customRenderer && (t.customRenderer = e.customRenderer), e.layerType) {
		case "esriDynamic":
			t.layerType = "esri-map-image", e.singleEntryCollapse !== void 0 && (t.singleEntryCollapse = e.singleEntryCollapse), e.imageFormat && (t.imageFormat = e.imageFormat), e.layerEntries && (t.sublayers = [], e.layerEntries.forEach((e) => {
				let n = Ts(e);
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
				let r = Ts(n);
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
function Ts(e) {
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
	return e.controls && e.controls.length > 0 && (t.controls = Es(e.controls, n), t.controls.push("symbology")), e.disabledControls && e.disabledControls.length > 0 && (t.disabledControls = Es(e.disabledControls, n)), e.state && (t.state = {
		opacity: e.state.opacity ?? 1,
		visibility: e.state.visibility ?? !0,
		identify: e.state.query ?? !0,
		maptips: e.state.hovertips ?? !0
	}, e.state.snapshot !== void 0 && console.warn(`snapshot property provided in initialLayer settings in layer ${e.id} cannot be mapped and will be skipped.`), e.state.boundingBox !== void 0 && console.warn(`boundingBox property provided in initialLayer settings in layer ${e.id} cannot be mapped and will be skipped.`)), e.stateOnly !== void 0 && (t.cosmetic = e.stateOnly), e.initialFilteredQuery && (t.initialFilteredQuery = e.initialFilteredQuery), As(e, t), e.toggleSymbology !== void 0 && console.warn(`toggleSymbology property provided in layer ${e.id} cannot be mapped and will be skipped.`), e.table && (t.fixtures = { grid: {} }, e.table.title && (t.fixtures.grid.title = e.table.title), e.table.description && console.warn(`description property provided in table property in layer ${e.id} cannot be mapped and will be skipped.`), e.table.maximize !== void 0 && console.warn(`maximize property provided in table property in layer ${e.id} cannot be mapped and will be skipped.`), e.table.search && (e.table.search.enabled && (t.fixtures.grid.search = e.table.search.enabled), e.table.search.value && (t.fixtures.grid.searchFilter = e.table.search.value)), e.table.lazyFilter !== void 0 && console.warn(`lazyFilter property provided in table property in layer ${e.id} cannot be mapped and will be skipped.`), e.table.applyMap !== void 0 && (t.fixtures.grid.applyMap = e.table.applyMap), e.table.showFilter !== void 0 && (t.fixtures.grid.showFilter = e.table.showFilter), e.table.filterByExtent !== void 0 && (t.fixtures.grid.filterByExtent = e.table.filterByExtent), e.table.searchStrictMatch !== void 0 && console.warn(`searchStrictMatch property provided in table property in layer ${e.id} cannot be mapped and will be skipped.`), e.table.printEnabled !== void 0 && console.warn(`printEnabled property provided in table property in layer ${e.id} cannot be mapped and will be skipped.`), e.table.columns && (t.fixtures.grid.columns = [], e.table.columns.forEach((n) => {
		let r = { field: n.data };
		n.title && (r.title = n.title), n.description && console.warn(`description property provided in column property in table property in layer ${e.id} cannot be mapped and will be skipped.`), n.visible !== void 0 && (r.visible = n.visible), n.width && (r.width = n.width), n.sort && (r.sort = n.sort), n.searchable !== void 0 && (r.searchable = n.searchable), n.filter && (r.filter = n.filter), t.fixtures.grid.columns.push(r);
	}))), t;
}
function Es(e, t) {
	let n = [];
	return e.forEach((e) => {
		t.includes("identify") && e === "query" ? n.push("identify") : t.includes("datatable") && e === "data" ? n.push("datatable") : t.includes(e) ? n.push(e) : console.warn(`Ignored invalid control: ${e}`);
	}), n;
}
function Ds(e, t) {
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
function Os(e, t) {
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
function ks(e, t) {
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
function As(e, t) {
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
	minor: "22",
	patch: "0-beta",
	timestamp: "Mon Jun 22 10:32:26 2026 -0400",
	hash: "5e48505c9170df62530e54505ab9a6acb253393e"
}.major}.${{
	major: "4",
	minor: "22",
	patch: "0-beta",
	timestamp: "Mon Jun 22 10:32:26 2026 -0400",
	hash: "5e48505c9170df62530e54505ab9a6acb253393e"
}.minor}.${{
	major: "4",
	minor: "22",
	patch: "0-beta",
	timestamp: "Mon Jun 22 10:32:26 2026 -0400",
	hash: "5e48505c9170df62530e54505ab9a6acb253393e"
}.patch} [${{
	major: "4",
	minor: "22",
	patch: "0-beta",
	timestamp: "Mon Jun 22 10:32:26 2026 -0400",
	hash: "5e48505c9170df62530e54505ab9a6acb253393e"
}.hash.slice(0, 9)}] (Built on ${new Date({
	major: "4",
	minor: "22",
	patch: "0-beta",
	timestamp: "Mon Jun 22 10:32:26 2026 -0400",
	hash: "5e48505c9170df62530e54505ab9a6acb253393e"
}.timestamp.toString()).toLocaleString()})`);
var js = {
	major: "4",
	minor: "22",
	patch: "0-beta",
	timestamp: "Mon Jun 22 10:32:26 2026 -0400",
	hash: "5e48505c9170df62530e54505ab9a6acb253393e"
};
function Ms(e) {
	return ys(e);
}
function Ns(e) {
	return ws(e);
}
var Ps = (e, t, n) => new Ja(e, t, n), Fs = new Ft();
//#endregion
export { X as $, Ta as A, cn as B, La as C, Fa as D, Na as E, $n as F, Vt as G, Gt as H, Qn as I, Mt as J, Bt as K, Zn as L, ra as M, na as N, Pa as O, ta as P, vt as Q, _n as R, za as S, Ia as T, Wt as U, $ as V, Ht as W, Ct as X, Z as Y, bt as Z, Wa as _, js as a, G as at, Va as b, Fo as c, V as ct, mo as d, Y as et, fo as f, Ga as g, Ka as h, Ns as i, lt as it, pa as j, Ma as k, yo as l, tt as lt, qa as m, Ps as n, q as nt, _s as o, J as ot, $a as p, Q as q, Fs as r, et as rt, us as s, K as st, Ms as t, ut as tt, vo as u, Ua as v, Ra as w, Ba as x, Ha as y, fn as z };
