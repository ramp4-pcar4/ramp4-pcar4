import { t as e } from "./rolldown-runtime-Dy4uBu1J.js";
import { B as t, V as n, W as r, Z as i, nt as a, s as o, st as s } from "./main-LXRKb5zU.js";
import { A as c, E as l, M as u, O as d, P as f, T as p, _ as m, b as h, f as g, g as _, h as v, i as y, j as b, k as x, m as S, n as C, p as w, v as ee, w as te, x as ne, y as T } from "./esri-vcEQ1sbb.js";
import { t as E } from "./store-Dkwhv6mB.js";
import { S as D, _ as O, a as k, b as re, c as ie, d as ae, f as A, g as oe, h as se, l as ce, m as j, n as le, o as ue, p as de, r as M, s as N, t as fe, u as pe, x as P, y as me } from "./store-Djv6-iTO.js";
import { Fragment as he, createCommentVNode as ge, createElementBlock as _e, createElementVNode as ve, defineComponent as ye, inject as be, markRaw as xe, nextTick as Se, onMounted as Ce, onUnmounted as we, openBlock as Te, reactive as Ee, ref as De, toDisplayString as Oe, toRaw as F, unref as ke, useTemplateRef as Ae, watch as I } from "vue";
import { useI18n as je } from "vue-i18n";
import L from "file-saver";
//#region src/fixtures/draw/shape-io.ts
var Me = "ramp4-draw-shapes", Ne = "json", R = (e) => typeof e == "object" && !!e && !Array.isArray(e), z = (e) => JSON.parse(JSON.stringify(e)), B = (e, t) => R(e) ? e : R(t) ? t : {}, Pe = (e) => {
	let t = e.geometry;
	return t ? z(typeof t.toJSON == "function" ? t.toJSON() : t) : void 0;
}, V = (e) => typeof e.attributes?.type == "string" ? e.attributes.type : e.geometry?.type, Fe = (e) => typeof e.attributes?.id == "string" ? e.attributes.id : typeof e.id == "string" ? e.id : void 0, Ie = (e) => {
	let t = Pe(e), n = V(e);
	if (!t || !n) return;
	let r = Fe(e);
	return {
		...r ? { id: r } : {},
		type: n,
		geometry: t,
		settings: {
			drawStyle: D(e.attributes),
			drawBuffer: me(e.attributes),
			drawIdentifyBufferMode: re(e.attributes),
			drawMapLabels: P(e.attributes)
		}
	};
}, Le = (e) => ({
	fileType: Me,
	version: 1,
	exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
	shapes: e.flatMap((e) => {
		let t = Ie(e);
		return t ? [t] : [];
	})
}), Re = (e = "ramp-draw-shapes") => `${e}-${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.${Ne}`, H = (e, t) => {
	let n = Le(e);
	if (!n.shapes.length) return !1;
	let r = new Blob([JSON.stringify(n, null, 2)], { type: "application/json;charset=utf-8" });
	return L.saveAs(r, t ?? Re()), !0;
}, ze = (e) => {
	if (Array.isArray(e)) return e;
	if (R(e)) return Array.isArray(e.shapes) ? (e.fileType ?? e.format) === "ramp4-draw-shapes" ? e.shapes : void 0 : R(e.geometry) ? [e] : void 0;
}, U = (e) => {
	if (!R(e) || !R(e.geometry)) return;
	let t = R(e.attributes) ? e.attributes : {}, n = R(e.settings) ? e.settings : e, r = z(e.geometry), i = ee(r);
	if (!i) return;
	let a = typeof e.type == "string" ? e.type : typeof t.type == "string" ? t.type : i.type;
	return {
		id: typeof e.id == "string" ? e.id : void 0,
		type: a,
		geometry: typeof i.toJSON == "function" ? i.toJSON() : r,
		settings: {
			drawStyle: pe(B(n.drawStyle, t.drawStyle)),
			drawBuffer: ie(B(n.drawBuffer, t.drawBuffer)),
			drawIdentifyBufferMode: O(n.drawIdentifyBufferMode ?? t.drawIdentifyBufferMode),
			drawMapLabels: ce(B(n.drawMapLabels, t.drawMapLabels))
		}
	};
}, Be = (e) => {
	let t = ze(e);
	if (Array.isArray(t)) {
		if (t.length) {
			let e = t.map(U);
			return e.every(Boolean) ? e : void 0;
		}
		return [];
	}
}, Ve = async (e) => {
	let t = "Invalid draw shape file.";
	if (!e.length) throw Error(t);
	let n = [];
	for (let r of e) {
		let e;
		try {
			e = JSON.parse(await r.text());
		} catch {
			throw Error(t);
		}
		let i = Be(e);
		if (Array.isArray(i)) {
			if (i.length) n.push(...i);
			else return [];
		} else throw Error(t);
	}
	return n;
}, He = (e, t) => {
	let n = Ie(e);
	if (!n.geometry) return;
	let r;
	switch (n.type) {
		case "point":
		case "polyline":
		case "multipoint":
		case "polygon":
			r = n.type;
			break;
		case "rectangle":
		case "circle":
			r = "polygon";
			break;
		default:
			console.error(`Encountered unhandled drawing type ${n.type}`);
			return;
	}
	let i = n.geometry;
	return i.type = r, i.spatialReference = new u(i.spatialReference), {
		ramp: t.geo.geom.geomEsriToRamp(i, e.id),
		draw: n
	};
}, Ue = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, We = "RampDrawGraphicsLayer", Ge = "RampDrawEditGraphicsLayer", Ke = "RampDrawHighlightGraphicsLayer", qe = [
	{ type: "point" },
	{ type: "polyline" },
	{ type: "polygon" },
	{ type: "circle" },
	{ type: "rectangle" }
], Je = 5, W = 15;
function Ye(e, t, n) {
	return e.type === "polygon" ? h.execute(e, t) : h.execute(e, n);
}
function Xe(e, t, n) {
	switch (n) {
		case "shape": return e;
		case "buffer-only": return j(e, t);
		default: return A(e, t) ?? e;
	}
}
function Ze(e, t, n) {
	return n === "shape" ? e : A(e, t) ?? e;
}
var Qe = class extends o {
	store;
	constructor(e, t) {
		super(e, t), this.store = fe(this.$vApp.$pinia), oe();
	}
	_parseConfig(e) {
		if (!e) this.store.setSupportedTypes(qe);
		else {
			if (e.types !== void 0) {
				let t = (e.types === null ? [] : e.types).filter((e) => e.enabled !== !1);
				this.store.setSupportedTypes(t);
			} else this.store.setSupportedTypes(qe);
			e.defaultTool && this.store.setActiveTool(e.defaultTool);
		}
	}
	get graphicsLayerId() {
		return We;
	}
	getShapeIds() {
		return this.store.graphics.map((e) => e.id);
	}
	async importShapes(e) {
		let t = Be(typeof e == "string" || e instanceof URL ? await $e(e) : e);
		if (Array.isArray(t)) return t.length && this.store.requestImportShapes(t), t.length;
		throw Error("Invalid draw shape payload.");
	}
	exportShapes(e) {
		return Le(this.resolveExportGraphics(e));
	}
	downloadShapes(e, t) {
		let n = e && typeof e == "object" && !Array.isArray(e) ? e.fileName : void 0;
		return H(this.resolveExportGraphics(e), t ?? n);
	}
	suppressIdentify(e) {
		if (this.store.identifyGeometryGraphicId) return !1;
		let t = this.store.activeTool, n = t === null || t === "", r = t === "edit", i = t !== null && t !== "" && !r, a = this.$iApi.panel.opened.some((e) => e.id === N), o = this.store.shapeDetailsPickEnabled && n, s = o || a || r ? this.getHitDrawGraphic(e, !1) : void 0, c = s?.id ?? s?.attributes?.id;
		return (o || a) && c ? (this.store.selectGraphic(c), M(this.$iApi, "details"), this.store.requestShapePanelFocus(), !0) : !c && a ? (this.$iApi.panel.close(N), this.store.setShapeDetailsPickEnabled(!1), !0) : !c && o ? !0 : !c && r ? (this.store.requestStopEditMode(), !0) : i || r;
	}
	getExportSelectionIds(e) {
		if (e !== void 0) {
			if (typeof e == "string") return [e];
			if (Array.isArray(e)) return e;
			if (e && e.ids !== void 0) return Array.isArray(e.ids) ? e.ids : [e.ids];
		}
	}
	resolveExportGraphics(e) {
		let t = this.getExportSelectionIds(e), n = this.store.graphics;
		if (t === void 0) return [...n];
		let r = new Set(t);
		return n.filter((e) => {
			let t = Fe(e);
			return t ? r.has(t) : !1;
		});
	}
	getHitDrawGraphic(e, t = !0) {
		if (this.store.identifyGeometryGraphicId) return this.store.graphics.find((e) => e.id === this.store.identifyGeometryGraphicId);
		let n = e.mapPoint.toESRI(), r = e.input === "touch" ? W : Je, i = this.$iApi.geo.query.makeClickBuffer(e.mapPoint, r).toESRI();
		return this.store.graphics.slice().reverse().find((e) => {
			let r = F(e.geometry);
			if (!r) return !1;
			let a = me(e.attributes), o = re(e.attributes);
			return Ye(t ? Ze(r, a, o) : r, n, i);
		});
	}
	getIdentifyGeometry(e) {
		let t = this.getHitDrawGraphic(e);
		if (!t?.geometry) return;
		let n = Xe(F(t.geometry), me(t.attributes), re(t.attributes));
		if (n) return this.$iApi.geo.geom.geomEsriToRamp(n, t.id ?? t.attributes?.id);
	}
	removeAll() {
		this.store.removeAll(), [
			We,
			Ge,
			Ke
		].forEach((e) => {
			let t = this.$iApi.geo.layer.getLayer(e);
			t && t.removeGraphic();
		});
	}
	setBufferDistance(e) {
		this.store.setBufferDistance(e);
	}
	setBufferUnit(e) {
		this.store.setBufferUnit(e);
	}
	async importRampGeometry(e) {
		let t = (Array.isArray(e) ? e : [e]).map((e) => {
			let t = e.type === a.EXTENT ? e.toPolygon() : e, n = this.$iApi.geo.geom.geomRampToEsri(t), r = {
				spatialReference: n.spatialReference,
				rings: n.rings,
				paths: n.paths,
				x: n.x,
				y: n.y
			};
			return {
				id: e.id,
				type: n.type,
				geometry: r,
				settings: {
					drawStyle: pe(this.store.styleSettings),
					drawBuffer: ie(this.store.bufferSettings),
					drawIdentifyBufferMode: this.store.identifyBufferMode,
					drawMapLabels: ae()
				}
			};
		});
		await this.importShapes(t);
	}
	exportRampGeometry() {
		return this.store.graphics.map((e) => He(e, this.$iApi)).filter((e) => !!e).map((e) => e.ramp);
	}
};
async function $e(e) {
	let t = await fetch(e);
	if (!t.ok) throw Error(`Unable to import draw shapes from ${e.toString()}.`);
	return t.json();
}
//#endregion
//#region src/fixtures/draw/measurement-utils.ts
var et = null, tt = (e, t, n) => `${e}:${t}:${n}`, nt = (e, t) => tt(e, "segment", t), rt = (e, t) => tt(e, "vertex", t), it = (e) => {
	if (!e) return;
	let t = e.split(":");
	if (t.length < 3) return;
	let n = t.pop(), r = t.pop(), i = t.join(":"), a = Number(n);
	if (!(r !== "segment" && r !== "vertex" || !i || !Number.isInteger(a) || a < 0)) return {
		graphicId: i,
		kind: r,
		index: a
	};
}, at = (e) => {
	let t = e + 1, n = "";
	for (; t > 0;) t--, n = String.fromCharCode(65 + t % 26) + n, t = Math.floor(t / 26);
	return n;
}, ot = (e, t, n) => e.toLocaleString(n, {
	maximumFractionDigits: t,
	minimumFractionDigits: 0
}), G = (e, t, n, r) => e ? e(t, { value: n }) : `${n} ${r}`, st = (e, t, n) => {
	let r = Math.abs(e);
	if (r >= 1e3) {
		let e = r / 1e3, i = ot(e, e >= 10 ? 1 : 2, t);
		return {
			display: `${i} km`,
			spoken: G(n, "draw.measurements.unit.kilometers", i, "kilometers")
		};
	}
	if (r >= 1) {
		let e = ot(r, r >= 10 ? 0 : 1, t);
		return {
			display: `${e} m`,
			spoken: G(n, "draw.measurements.unit.meters", e, "meters")
		};
	}
	let i = r * 100, a = ot(i, i >= 10 ? 0 : 1, t);
	return {
		display: `${a} cm`,
		spoken: G(n, "draw.measurements.unit.centimeters", a, "centimeters")
	};
}, ct = (e, t, n) => {
	let r = Math.abs(e);
	if (r >= 1e6) {
		let e = r / 1e6, i = ot(e, e >= 10 ? 1 : 2, t);
		return {
			display: `${i} sq km`,
			spoken: G(n, "draw.measurements.unit.squareKilometers", i, "square kilometers")
		};
	}
	let i = ot(r, r >= 100 ? 0 : r >= 10 ? 1 : 2, t);
	return {
		display: `${i} sq m`,
		spoken: G(n, "draw.measurements.unit.squareMeters", i, "square meters")
	};
}, lt = (e) => !!e.spatialReference?.isGeographic || !!e.spatialReference?.isWebMercator, ut = async () => {
	et ??= Promise.all([w() ? Promise.resolve() : S(), _() ? Promise.resolve() : m()]).then(() => void 0), await et;
}, dt = (e, t) => t ? v(e, { unit: "meters" }) : ne(e, { unit: "meters" }), ft = (e) => {
	let t = lt(e);
	try {
		let n = Math.abs(dt(e, t));
		if (Number.isFinite(n)) return n;
	} catch {}
	try {
		let n = Math.abs(dt(e, !t));
		return Number.isFinite(n) ? n : void 0;
	} catch {
		return;
	}
}, pt = (e, t) => t ? g(e, { unit: "square-meters" }) : C(e, { unit: "square-meters" }), mt = (e) => {
	let t = lt(e);
	try {
		let n = Math.abs(pt(e, t));
		if (Number.isFinite(n)) return n;
	} catch {}
	try {
		let n = Math.abs(pt(e, !t));
		return Number.isFinite(n) ? n : void 0;
	} catch {
		return;
	}
}, ht = (e) => ft(new l({
	paths: e.rings,
	spatialReference: e.spatialReference
})), gt = (e, t, n) => ft(new l({
	paths: [[[e[0], e[1]], [t[0], t[1]]]],
	spatialReference: n
})), _t = (e) => {
	if (!e) return;
	if (e.type === "point") return e;
	try {
		let t = y(e);
		if (t) return t;
	} catch {}
	let t = e.extent;
	if (t) return new te({
		x: (t.xmin + t.xmax) / 2,
		y: (t.ymin + t.ymax) / 2,
		spatialReference: e.spatialReference
	});
}, vt = (e, t) => e[0] === t[0] && e[1] === t[1], yt = (e) => e.length > 1 && vt(e[0], e[e.length - 1]) ? e.slice(0, -1) : e, bt = (e) => e ? e.type === "polyline" ? e.paths.flatMap((e) => e) : e.type === "polygon" ? e.rings.flatMap((e) => yt(e)) : [] : [], xt = (e, t) => bt(e).map((e, n) => ({
	index: n,
	key: rt(t, n),
	vertex: e
})), St = (e, t) => {
	if (!e || e.type !== "polyline" && e.type !== "polygon") return [];
	let n = e.spatialReference, r = [], i = 0, a = 0, o = (e, a, o, s) => {
		let c = gt(e, a, n);
		if (!c || c < .01) return;
		let l = i++;
		r.push({
			index: l,
			key: nt(t, l),
			letter: at(l),
			start: e,
			end: a,
			startVertexIndex: o,
			endVertexIndex: s,
			lengthMeters: c
		});
	};
	return e.type === "polyline" ? (e.paths.forEach((e) => {
		let t = e;
		for (let e = 0; e < t.length - 1; e++) o(t[e], t[e + 1], a + e + 1, a + e + 2);
		a += t.length;
	}), r) : (e.rings.forEach((e) => {
		let t = yt(e);
		if (t.length < 2) a += t.length;
		else {
			for (let e = 0; e < t.length - 1; e++) o(t[e], t[e + 1], a + e + 1, a + e + 2);
			t.length > 2 && o(t[t.length - 1], t[0], a + t.length, a + 1), a += t.length;
		}
	}), r);
}, Ct = ({ iApi: e, drawStore: t, getDrawGraphicId: n, getGraphicDrawBufferSettings: r, getGraphicDrawIdentifyBufferMode: a, getSelectedFeatureCountGraphic: o }) => {
	let s = /* @__PURE__ */ new Map(), c = null, l, u = (e) => e.reduce((e, t) => e + (t.items?.length ?? 0), 0), d = async (t) => {
		if (!t) return null;
		try {
			let n = e.geo.geom.geomEsriToRamp(t, `draw-count-${Date.now()}`), r = Date.now(), i = e.geo.layer.allLayersOnMap(!1).filter((e) => e.supportsIdentify && e.canIdentify()).map((e) => e.runIdentify({
				geometry: n,
				tolerance: e.mouseTolerance
			})).flat();
			return i.forEach((e) => {
				e.requestTime = r;
			}), await Promise.allSettled(i.map((e) => e.loading)), u(i);
		} catch (e) {
			return console.warn("Unable to count draw identify results.", e), null;
		}
	}, f = async (e = o()) => {
		let i = n(e), c = F(e?.geometry);
		if (!e || !i || !c) return;
		let l = (s.get(i) ?? 0) + 1;
		s.set(i, l), t.setShapeFeatureCountsLoading(i);
		try {
			if (await oe(), s.get(i) !== l) return;
			let n = r(e), o = a(e), u = n.distance > 0 ? j(c, n) : void 0, f = o === "shape" ? c : o === "buffer-only" ? u : n.distance > 0 ? A(c, n) : c, p = d(c), m = u ? d(u) : Promise.resolve(null), h = f === c ? p : f === u ? m : d(f), [g, _, v] = await Promise.all([
				p,
				m,
				h
			]);
			if (s.get(i) !== l) return;
			t.setShapeFeatureCounts(i, {
				shape: g,
				buffer: _,
				total: v,
				loading: !1,
				updatedAt: Date.now()
			});
		} catch (e) {
			if (s.get(i) !== l) return;
			console.warn("Unable to refresh draw feature counts.", e), t.setShapeFeatureCounts(i, {
				shape: null,
				buffer: null,
				total: null,
				loading: !1,
				updatedAt: Date.now()
			});
		}
	};
	return {
		refreshSelectedGraphicFeatureCounts: f,
		cancelPendingFeatureCountRefresh: () => {
			c !== null && (window.clearTimeout(c), c = null), l = void 0;
		},
		cancelFeatureCountRunsForGraphic: (e) => {
			e && s.delete(e);
		},
		scheduleFeatureCountRefresh: (e) => {
			l = e, c !== null && window.clearTimeout(c), c = window.setTimeout(() => {
				c = null;
				let e = l;
				l = void 0, e && f(e);
			}, 350);
		},
		runIdentifyForSelectedGraphic: async () => {
			let r = o(), a = n(r), s = _t(F(r?.geometry));
			if (a && s) {
				await f(r), t.setIdentifyGeometryGraphicId(a);
				try {
					e.geo.map.runIdentify(i.fromESRI(s, a));
				} finally {
					t.setIdentifyGeometryGraphicId(null);
				}
			}
		}
	};
}, wt = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], K = 10, Tt = 1.05, Et = .95, Dt = .05, Ot = ({ iApi: e, drawStore: t, t: n, translateTerm: r, getSketch: i, getGraphicsLayer: a, getSelectedGraphic: o, getKeyboardEditGraphic: s, setSelectedGraphic: c, prepareDrawGraphic: u, applyDrawSymbol: f, syncBufferGraphic: m, syncGraphicStoreRecord: h, syncActiveSketchEditToSource: g, highlightSelectedGraphic: _, deleteSelectedGraphic: v, startSketchUpdate: y, cancelPendingSketchUpdate: b, clearActiveSketchEdit: S, refreshMeasurementGraphics: C, scheduleMeasurementRefresh: w, cancelPendingFeatureCountRefresh: ee, refreshSelectedGraphicFeatureCounts: ne }) => {
	let E = !1, D = null, O = [], k = () => {
		E = !1, D = null, O = [];
	}, re = () => {
		let n = e.geo.map.esriView;
		D && (t.activeTool === "polyline" ? D.geometry = new l({
			paths: [O],
			spatialReference: n.spatialReference
		}) : D.geometry = new p({
			rings: [O],
			spatialReference: n.spatialReference
		}));
	}, ie = () => {
		let n = i(), r = e.geo.map.esriView;
		return t.activeTool === "polyline" ? new T({
			geometry: new l({
				paths: [O],
				spatialReference: r.spatialReference
			}),
			symbol: n?.polylineSymbol || new x({
				color: [
					0,
					0,
					255,
					1
				],
				width: 2
			})
		}) : new T({
			geometry: new p({
				rings: [O],
				spatialReference: r.spatialReference
			}),
			symbol: n?.polygonSymbol || new d({
				color: [
					0,
					255,
					0,
					.3
				],
				outline: {
					color: [
						0,
						255,
						0,
						1
					],
					width: 1
				}
			})
		});
	}, ae = () => {
		let i = e.geo.map.esriView, o = t.activeTool ?? void 0, s = {
			x: Math.floor(i.width / 2),
			y: Math.floor(i.height / 2)
		}, c = i.toMap(s);
		E ? (O.push([c.x, c.y]), re(), C(D, o), e.updateAlert(n("draw.multiPoint.pointAdded", {
			type: r(o),
			count: O.length
		}))) : (E = !0, O = [[c.x, c.y]], D = ie(), D.attributes = {
			id: `temp-graphic-${Date.now()}`,
			type: t.activeTool
		}, a()?.add(D), C(D, o), e.updateAlert(n("draw.multiPoint.started", {
			type: r(o),
			count: 1
		})));
	}, A = async () => {
		let o = a(), s = i();
		if (!o || !s || t.activeTool !== "edit") return;
		await e.geo.map.viewPromise;
		let l = e.geo.map.esriView, u = {
			x: l.width / 2,
			y: l.height / 2
		}, d = {
			x: u.x,
			y: u.y,
			width: 20,
			height: 20
		}, f = (await l.hitTest(d, { include: o })).results.filter((e) => !("graphic" in e) || e.graphic.layer !== o ? !1 : !!e.graphic.attributes?.id);
		f.length > 0 ? (y(f[0].graphic), e.updateAlert(n("draw.graphic.selected", { type: r(f[0].graphic.attributes?.type) }))) : (b(), s.cancel(), S({ restoreSource: !0 }), c(null), t.clearSelection());
	}, oe = async () => {
		let o = i(), s = t.activeTool;
		if (!o || !s) return;
		await e.geo.map.viewPromise;
		let c = e.geo.map.esriView, f = {
			x: Math.floor(c.width / 2),
			y: Math.floor(c.height / 2)
		}, h = c.toMap(f), g = c.extent, _ = Math.min(g.width, g.height) / 10, v;
		switch (s) {
			case "point":
				v = new T({
					geometry: new te({
						x: h.x,
						y: h.y,
						spatialReference: c.spatialReference
					}),
					symbol: o.pointSymbol
				});
				break;
			case "polyline":
				v = new T({
					geometry: new l({
						paths: [[[h.x - _ / 2, h.y], [h.x + _ / 2, h.y]]],
						spatialReference: c.spatialReference
					}),
					symbol: o.polylineSymbol
				});
				break;
			case "polygon":
			case "rectangle":
				let e = _ / 2;
				v = new T({
					geometry: new p({
						rings: [[
							[h.x - e, h.y - e],
							[h.x + e, h.y - e],
							[h.x + e, h.y + e],
							[h.x - e, h.y + e],
							[h.x - e, h.y - e]
						]],
						spatialReference: c.spatialReference
					}),
					symbol: o.polygonSymbol || new d({
						color: [
							0,
							255,
							0,
							.3
						],
						outline: {
							color: [
								0,
								255,
								0,
								1
							],
							width: 1
						}
					})
				});
				break;
			case "circle":
				let t = _ / 2, n = [];
				for (let e = 0; e <= 36; e++) {
					let r = e / 36 * 2 * Math.PI, i = h.x + t * Math.cos(r), a = h.y + t * Math.sin(r);
					n.push([i, a]);
				}
				v = new T({
					geometry: new p({
						rings: [n],
						spatialReference: c.spatialReference
					}),
					symbol: o.polygonSymbol || new d({
						color: [
							255,
							0,
							255,
							.3
						],
						outline: {
							color: [
								255,
								0,
								255,
								1
							],
							width: 1
						}
					})
				});
				break;
			default:
				console.warn("Unknown tool type:", s);
				return;
		}
		if (!v) return;
		let y = u(v, s);
		a()?.add(v), m(v), t.addGraphic({
			id: y,
			type: s,
			geometry: v.geometry,
			attributes: v.attributes
		}), C(), s !== "point" && (t.clearSelection(), t.setActiveTool(""), e.keyboardNav?.reset(), o.cancel()), e.updateAlert(n("draw.graphic.created", { type: r(s) }));
	}, se = () => {
		let i = t.activeTool ?? void 0;
		O.pop(), re(), D.set("geometry", D?.geometry), C(D, i), e.updateAlert(n("draw.multiPoint.pointRemoved", {
			type: r(i),
			count: O.length
		}));
	}, ce = () => {
		D && a()?.remove(D), k(), C(), e.updateAlert(n("draw.multiPoint.canceled"));
	}, j = (r) => {
		let a = e.geo.map.esriView?.container;
		if (document.activeElement && a?.contains(document.activeElement)) switch (r.key) {
			case "Enter":
				r.preventDefault(), t.activeTool && t.activeTool !== "edit" ? (t.activeTool === "polyline" || t.activeTool === "polygon") && (E || O.length === 0) ? ae() : oe() : A();
				break;
			case "Delete":
			case "Backspace":
				E && O.length > 1 ? (r.preventDefault(), se()) : E && O.length === 1 ? (r.preventDefault(), ce()) : o() && (r.preventDefault(), v());
				break;
			case "Escape": t.setActiveTool(null), i()?.cancel(), c(null), _(void 0), t.clearSelection(), C(), e.updateAlert(n("draw.tool.canceled"));
		}
	}, le = (e) => {
		if (e.type === "point") {
			let t = e;
			return {
				x: t.x,
				y: t.y
			};
		}
		let t = e.extent;
		return {
			x: (t.xmin + t.xmax) / 2,
			y: (t.ymin + t.ymax) / 2
		};
	}, ue = (t, n, r) => {
		let i = e.geo.map.esriView, a = 0, o = 0;
		t === "ArrowLeft" && (a = -10), t === "ArrowRight" && (a = K), t === "ArrowUp" && (o = -10), t === "ArrowDown" && (o = K);
		let s = i.toScreen(new te({
			x: n.x,
			y: n.y,
			spatialReference: r
		}));
		s.x += a, s.y += o;
		let c = i.toMap(s);
		return {
			x: c.x - n.x,
			y: c.y - n.y
		};
	}, de = (e) => e === "ArrowUp" || e === "ArrowRight" ? Tt : Et, M = (e) => e === "ArrowLeft" ? -.05 : e === "ArrowRight" ? Dt : 0, N = (e, t, n) => e.map(([e, r]) => [e + t, r + n]), fe = (e, t, n) => e.map(([e, r]) => [t.x + (e - t.x) * n, t.y + (r - t.y) * n]), pe = (e, t, n) => {
		let r = Math.cos(n), i = Math.sin(n);
		return e.map(([e, n]) => {
			let a = e - t.x, o = n - t.y, s = a * r - o * i, c = a * i + o * r;
			return [t.x + s, t.y + c];
		});
	}, P = (e, t) => e.map((e) => t(e)), me = (t, r, i, a) => {
		let o = le(t), s = ue(r, o, t.spatialReference);
		if (t.type === "point") {
			if (!i && !a) {
				let e = t;
				return new te({
					x: e.x + s.x,
					y: e.y + s.y,
					spatialReference: t.spatialReference
				});
			}
			return e.updateAlert(n(i ? "draw.point.resize.unsupported" : "draw.point.rotate.unsupported")), t.clone();
		}
		if (t.type === "polyline") {
			let e = t.paths;
			if (!i && !a) return new l({
				paths: P(e, (e) => N(e, s.x, s.y)),
				spatialReference: t.spatialReference
			});
			if (i) return new l({
				paths: P(e, (e) => fe(e, o, de(r))),
				spatialReference: t.spatialReference
			});
			let n = M(r);
			return n === 0 ? t.clone() : new l({
				paths: P(e, (e) => pe(e, o, n)),
				spatialReference: t.spatialReference
			});
		}
		if (t.type === "polygon") {
			let e = t.rings;
			if (!i && !a) return new p({
				rings: P(e, (e) => N(e, s.x, s.y)),
				spatialReference: t.spatialReference
			});
			if (i) return new p({
				rings: P(e, (e) => fe(e, o, de(r))),
				spatialReference: t.spatialReference
			});
			let n = M(r);
			return n === 0 ? t.clone() : new p({
				rings: P(e, (e) => pe(e, o, n)),
				spatialReference: t.spatialReference
			});
		}
	};
	return {
		handleNavigationKeyDown: j,
		handleGraphicKeyboardEdit: (r) => {
			let i = e.geo.map.esriView.container;
			if (!document.activeElement || !i?.contains(document.activeElement) || !wt.includes(r.key) || t.activeTool !== "edit" || t.shapeDetailsActiveTab !== "edit") return;
			let a = s() ?? o();
			if (!a) return;
			r.preventDefault(), r.stopPropagation();
			let c = r.shiftKey, l = r.altKey, u = me(a.geometry, r.key, c, l);
			if (!u) return;
			a.geometry = u, a.set("geometry", u), f(a);
			let d = g() ?? a;
			d === a && (m(a), h(a)), _(d), w(d, d.attributes?.type), ee(), ne(d);
			let p = c ? "resized" : l ? "rotated" : "moved";
			e.updateAlert(n(`draw.graphic.${p}`));
		},
		resetMultiPointState: k
	};
}, kt = 16, At = 2, jt = 8, Mt = 8, Nt = 2, q = "#1d4ed8", Pt = 30, Ft = ({ iApi: e, drawStore: t, locale: r, t: i, getGraphicsLayer: a, isShapeDetailsOpen: o, getShapeDetailsGraphic: s }) => {
	let l = null, u = 0, d = 0, p = [], m = null, h = null, g = null, _ = null, v = null, y = null, b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), S = [], C = [], w = [], ee = De(""), ne = () => t.graphics.some((e) => {
		let n = String(e.id ?? e.attributes?.id ?? ""), r = P(e.attributes), i = D(n) && t.shapeDetailsLabelsVisible;
		return r.areaLabel || r.segmentLength || r.segmentLetters || r.vertexNumbers || i;
	}), E = () => t.measurementsEnabled || o() || ne(), D = (e) => o() && t.selectedGraphicId === e, O = () => o() && t.shapeDetailsActiveTab === "details" && !!t.selectedGraphicId, k = (e) => {
		let n = it(e);
		return !!n && n.graphicId === t.selectedGraphicId;
	}, re = (e) => O() && k(e) && e === t.activeSegmentKey, ie = (e) => O() && k(e) && e === t.activeVertexKey, ae = (e) => new c({
		style: "circle",
		color: e ? [
			37,
			99,
			235,
			1
		] : [
			255,
			255,
			255,
			.96
		],
		size: e ? 24 : 20,
		outline: {
			color: e ? [
				255,
				255,
				255,
				1
			] : [
				17,
				24,
				39,
				.9
			],
			width: e ? 2 : 1.5
		}
	}), A = (e, t) => new f({
		text: e,
		color: t ? [
			255,
			255,
			255,
			1
		] : [
			17,
			24,
			39,
			1
		],
		haloColor: t ? [
			37,
			99,
			235,
			1
		] : [
			255,
			255,
			255,
			1
		],
		haloSize: .8,
		horizontalAlignment: "center",
		verticalAlignment: "middle",
		font: {
			family: "Arial",
			size: 10,
			weight: "bold"
		}
	}), oe = (e, t, n, r) => [new T({
		geometry: e,
		symbol: ae(r),
		attributes: {
			...n,
			drawMeasurementKind: "vertex-marker"
		}
	}), new T({
		geometry: e,
		symbol: A(t, r),
		attributes: {
			...n,
			drawMeasurementKind: "vertex-label",
			drawMeasurementText: t
		}
	})], se = (e, t) => new te({
		x: e[0],
		y: e[1],
		spatialReference: t
	}), ce = (e) => !!e && Number.isFinite(e.x) && Number.isFinite(e.y), j = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), le = (e) => {
		let t = Math.hypot(e.x, e.y);
		if (!(!Number.isFinite(t) || t <= 0)) return {
			x: e.x / t,
			y: e.y / t
		};
	}, ue = (e) => {
		let t = e;
		for (; t > 180;) t -= 360;
		for (; t < -180;) t += 360;
		return t > 90 && (t -= 180), t < -90 && (t += 180), t;
	}, de = (e) => {
		if (e.length < 2) return;
		let t = [], n = 0;
		for (let r = 0; r < e.length - 1; r++) {
			let i = j(e[r], e[r + 1]);
			t.push(i), n += i;
		}
		if (!Number.isFinite(n) || n <= 0) return;
		let r = n / 2, i = 0;
		for (let a = 0; a < e.length - 1; a++) {
			let o = t[a];
			if (!(o <= 0)) {
				if (i + o >= r) {
					let t = e[a], s = e[a + 1], c = (r - i) / o, l = le({
						x: s.x - t.x,
						y: s.y - t.y
					});
					return l ? {
						midpoint: {
							x: t.x + (s.x - t.x) * c,
							y: t.y + (s.y - t.y) * c
						},
						tangent: l,
						length: n
					} : void 0;
				}
				i += o;
			}
		}
	}, M = (e, t, n) => {
		let r = n.toScreen(new te({
			x: e[0],
			y: e[1],
			spatialReference: t
		}));
		return ce(r) ? {
			x: r.x,
			y: r.y
		} : void 0;
	}, N = (e) => e.length > 1 && e[0][0] === e[e.length - 1][0] && e[0][1] === e[e.length - 1][1] ? e.slice(0, -1) : e, fe = (e, t) => {
		let n = e.rings, r = 0, i = 0, a = 0, o = [];
		if (n.forEach((n) => {
			let s = N(n).map((n) => M(n, e.spatialReference, t)).filter((e) => !!e);
			if (o.push(...s), !(s.length < 3)) for (let e = 0; e < s.length; e++) {
				let t = s[e], n = s[(e + 1) % s.length], o = t.x * n.y - n.x * t.y;
				r += o, i += (t.x + n.x) * o, a += (t.y + n.y) * o;
			}
		}), Math.abs(r) > 1e-4) return {
			x: i / (3 * r),
			y: a / (3 * r)
		};
		if (o.length) return {
			x: o.reduce((e, t) => e + t.x, 0) / o.length,
			y: o.reduce((e, t) => e + t.y, 0) / o.length
		};
	}, pe = (e, t) => {
		let n = e.paths.flatMap((e) => e).map((n) => M(n, e.spatialReference, t)).filter((e) => !!e);
		if (n.length) return {
			x: n.reduce((e, t) => e + t.x, 0) / n.length,
			y: n.reduce((e, t) => e + t.y, 0) / n.length
		};
	}, me = (e, t) => {
		if (e.type === "polygon") return fe(e, t);
		if (e.type === "polyline") return pe(e, t);
	}, he = (e, t) => {
		let n = e.spatialReference, r = [], i = (e, i) => {
			let a = i ? N(e) : e;
			a.forEach((e) => {
				let i = M(e, n, t);
				i && r.push(i);
			});
			let o = i ? a.length : a.length - 1;
			for (let e = 0; e < o; e++) {
				let i = a[e], o = a[(e + 1) % a.length], s = M([(i[0] + o[0]) / 2, (i[1] + o[1]) / 2], n, t);
				s && r.push(s);
			}
		};
		return e.type === "polyline" && e.paths.forEach((e) => i(e, !1)), e.type === "polygon" && e.rings.forEach((e) => i(e, !0)), r;
	}, ge = (e, t) => {
		let n = [e.start, e.end].map((n) => M(n, e.geometry.spatialReference, t)).filter((e) => !!e), r = de(n);
		if (!r) return;
		let i = {
			x: -r.tangent.y,
			y: r.tangent.x
		};
		if (e.geometry.type === "polygon" || e.geometry.type === "polyline") {
			let n = me(e.geometry, t);
			if (n) {
				let e = {
					x: r.midpoint.x - n.x,
					y: r.midpoint.y - n.y
				};
				i.x * e.x + i.y * e.y < 0 && (i = {
					x: -i.x,
					y: -i.y
				});
			}
		}
		let a = Math.atan2(r.tangent.y, r.tangent.x);
		return {
			...r,
			normal: i,
			angle: ue(a * 180 / Math.PI)
		};
	}, _e = (e, t, n, r) => {
		let i = kt / 2;
		return he(e.geometry, r).reduce((e, r) => {
			let a = {
				x: r.x - t.midpoint.x,
				y: r.y - t.midpoint.y
			};
			if (a.x * n.x + a.y * n.y <= i) return e;
			let o = Math.hypot(a.x, a.y);
			return !Number.isFinite(o) || o <= i ? e : e + 100 / Math.max(o, Mt);
		}, 0);
	}, ve = (e, t, n) => {
		let r = {
			x: -t.normal.x,
			y: -t.normal.y
		}, i = (r) => ({
			anchor: {
				x: t.midpoint.x + r.x * kt,
				y: t.midpoint.y + r.y * kt
			},
			angle: t.angle,
			sideCrowdingScore: _e(e, t, r, n)
		});
		return [i(t.normal), i(r)];
	}, ye = (e, t) => {
		let n = Math.max(e.left, t.left) - t.left, r = Math.max(e.top, t.top) - t.top, i = Math.min(e.right, t.right) - t.left, a = Math.min(e.bottom, t.bottom) - t.top;
		if (!(i <= n || a <= r)) return {
			left: n,
			top: r,
			right: i,
			bottom: a,
			width: i - n,
			height: a - r
		};
	}, be = (e, t, n, r = 0) => {
		let i = r * Math.PI / 180, a = {
			x: Math.cos(i),
			y: Math.sin(i)
		}, o = {
			x: -Math.sin(i),
			y: Math.cos(i)
		}, s = t / 2, c = n / 2;
		return {
			corners: [
				{
					x: e.x - a.x * s - o.x * c,
					y: e.y - a.y * s - o.y * c
				},
				{
					x: e.x + a.x * s - o.x * c,
					y: e.y + a.y * s - o.y * c
				},
				{
					x: e.x + a.x * s + o.x * c,
					y: e.y + a.y * s + o.y * c
				},
				{
					x: e.x - a.x * s + o.x * c,
					y: e.y - a.y * s + o.y * c
				}
			],
			axes: [a, o]
		};
	}, xe = (e) => be({
		x: e.left + e.width / 2,
		y: e.top + e.height / 2
	}, e.width, e.height), Se = (e, t) => be(t.anchor, e.offsetWidth || e.getBoundingClientRect().width, e.offsetHeight || e.getBoundingClientRect().height, t.angle), Ce = (e, t) => e.corners.reduce((e, n) => {
		let r = n.x * t.x + n.y * t.y;
		return {
			min: Math.min(e.min, r),
			max: Math.max(e.max, r)
		};
	}, {
		min: Infinity,
		max: -Infinity
	}), we = (e, t, n = 0) => [...e.axes, ...t.axes].every((r) => {
		let i = Ce(e, r), a = Ce(t, r);
		return !(i.max + n <= a.min || a.max + n <= i.min);
	}), Te = (e, t) => e.corners.every((e) => e.x >= 0 && e.y >= 0 && e.x <= t.width && e.y <= t.height), Ee = (e) => {
		let t = window.getComputedStyle(e), n = e.getBoundingClientRect();
		return t.display !== "none" && t.visibility !== "hidden" && t.opacity !== "0" && n.width > 0 && n.height > 0;
	}, Oe = (e, t) => {
		let n = e.container;
		return n ? Array.from(n.querySelectorAll([
			".esri-ui .esri-component",
			".esri-popup",
			".esri-attribution",
			"arcgis-sketch",
			"[class*=\"esri-sketch\"]"
		].join(","))).filter((e) => !!v && !v.contains(e)).filter(Ee).map((e) => ye(e.getBoundingClientRect(), t)).filter((e) => !!e).filter((e) => e.width < t.width * .85 || e.height < t.height * .85).map(xe) : [];
	}, ke = (e) => e.graphics.find((e) => {
		let t = e.attributes, n = e.geometry;
		return !!t && !!n && n.type === "point" && (t.drawMeasurementKind === "vertex-marker" || t.drawMeasurementKind === "vertex-label");
	})?.geometry, Ae = (e, t) => {
		let n = ke(e);
		if (!n) return;
		let r = t.toScreen(n);
		if (ce(r)) return be(r, Pt, Pt);
	}, je = (e, t) => {
		let n = [];
		return e.filter((e) => {
			let r = Ae(e, t);
			return !r || !n.some((e) => we(r, e, At)) && (n.push(r), !0);
		});
	}, L = (e) => {
		let t = /* @__PURE__ */ new Set(), n = [];
		return p.forEach((r) => {
			let i = r.attributes, a = r.geometry;
			if (!i || !a || a.type !== "point") return;
			let o = e.toScreen(a);
			if (ce(o) && (i.drawMeasurementKind === "vertex-marker" || i.drawMeasurementKind === "vertex-label")) {
				let e = i.drawVertexKey ?? `${o.x}:${o.y}`;
				if (t.has(e)) return;
				t.add(e), n.push(be(o, Pt, Pt));
			}
		}), n;
	}, Me = (e, t) => [...L(e), ...Oe(e, t)], Ne = (e) => {
		let t = e.container;
		if (t) return v?.parentElement === t || (v?.remove(), v = document.createElement("div"), v.className = "rv-draw-segment-label-overlay", v.setAttribute("aria-hidden", "true"), t.appendChild(v), b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map()), v;
	}, R = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-badge"), r = e.querySelector(".rv-draw-segment-label-distance");
		n && (n.textContent = t.letter, n.style.backgroundColor = t.badgeColor, n.hidden = !t.showBadge), r && (r.textContent = t.distanceText ?? ""), e.dataset.segmentKey = t.key, e.classList.toggle("rv-no-badge", !t.showBadge);
	}, z = (e) => {
		let t = document.createElement("div");
		t.className = "rv-draw-segment-label", t.style.visibility = "hidden", t.style.left = "0px", t.style.top = "0px";
		let n = document.createElement("span");
		n.className = "rv-draw-segment-label-badge", t.appendChild(n);
		let r = document.createElement("span");
		return r.className = "rv-draw-segment-label-distance", t.appendChild(r), R(t, e), t;
	}, B = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-distance");
		n && (n.textContent = t.text), e.dataset.areaLabelKey = t.key;
	}, Pe = (e) => {
		let t = document.createElement("div");
		t.className = "rv-draw-segment-label rv-draw-area-label rv-no-badge", t.style.visibility = "hidden", t.style.left = "0px", t.style.top = "0px";
		let n = document.createElement("span");
		return n.className = "rv-draw-segment-label-distance", t.appendChild(n), B(t, e), t;
	}, V = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-distance");
		e.classList.toggle("rv-distance-hidden", t), n && (n.hidden = t);
	}, Fe = (e, t) => {
		e.style.left = `${t.anchor.x}px`, e.style.top = `${t.anchor.y}px`, e.style.transform = `translate(-50%, -50%) rotate(${t.angle}deg)`, e.style.transformOrigin = "center center";
	}, Ie = (e, t, n) => Te(e, t) ? !n.some((t) => we(e, t, At)) : !1, Le = (e, t, n, r) => Ie(e, t, r) && !n.some((t) => we(e, t, At)), Re = (e, t, n, r, i, a) => {
		if (Le(e, t, i, a)) return n.sideCrowdingScore + r * .01;
	}, H = (e, t, n, r, i, a) => {
		let o, s = [...r, ...i];
		return t.forEach((t, r) => {
			Fe(e, t);
			let i = Se(e, t), c = Re(i, n, t, r, s, a);
			c !== void 0 && (!o || c < o.score) && (o = {
				candidate: t,
				box: i,
				score: c
			});
		}), o;
	}, ze = () => {
		b.forEach((e, t) => {
			e.classList.toggle("rv-active", re(t));
		});
	}, U = () => {
		y !== null && (window.cancelAnimationFrame(y), y = null), S = [], C = [], v?.remove(), v = null, b.clear(), x.clear();
	}, Be = (t, n = C) => {
		let r = e.geo.map.esriView;
		if (S = t, C = n, !r || !t.length && !n.length) {
			U();
			return;
		}
		let i = Ne(r), a = r.container;
		if (!i || !a) {
			U();
			return;
		}
		let o = new Set(t.map((e) => e.key));
		b.forEach((e, t) => {
			o.has(t) || (e.remove(), b.delete(t));
		}), t.forEach((e) => {
			let t = b.get(e.key);
			t ? R(t, e) : (t = z(e), b.set(e.key, t), i.appendChild(t)), t.style.display = "inline-flex", t.style.visibility = "hidden", t.style.transform = "translate(-50%, -50%) rotate(0deg)", V(t, !e.distanceText);
		});
		let s = new Set(n.map((e) => e.key));
		x.forEach((e, t) => {
			s.has(t) || (e.remove(), x.delete(t));
		}), n.forEach((e) => {
			let t = x.get(e.key);
			t ? B(t, e) : (t = Pe(e), x.set(e.key, t), i.appendChild(t)), t.style.display = "inline-flex", t.style.visibility = "hidden", t.style.transform = "translate(-50%, -50%) rotate(0deg)";
		});
		let c = a.getBoundingClientRect(), l = Me(r, c), u = [], d = [];
		n.forEach((e) => {
			let t = x.get(e.key);
			if (!t) return;
			let n = r.toScreen(e.point);
			if (!ce(n)) {
				t.style.display = "none";
				return;
			}
			Fe(t, {
				anchor: {
					x: n.x,
					y: n.y
				},
				angle: 0
			});
			let i = Se(t, {
				anchor: {
					x: n.x,
					y: n.y
				},
				angle: 0
			});
			Le(i, c, u, l) ? (u.push(i), t.style.visibility = "visible") : t.style.display = "none";
		});
		let f = [], p = [];
		t.forEach((e) => {
			let t = b.get(e.key);
			if (!t) return;
			let n = ge(e, r);
			if (!n || n.length < Mt) {
				t.style.display = "none";
				return;
			}
			let i = t.offsetWidth, a = !!e.distanceText && n.length >= i + Nt;
			if (V(t, !a), !a && !e.showBadge) {
				t.style.display = "none";
				return;
			}
			let o = {
				label: e,
				element: t,
				placement: n
			};
			(a ? f : p).push(o);
		});
		let m = (e) => {
			let t = ve(e.label, e.placement, r), n = H(e.element, t, c, u, d, l);
			return n ? (Fe(e.element, n.candidate), d.push(n.box), e.element.style.visibility = "visible", !0) : !1;
		};
		f.forEach((e) => {
			m(e) || (e.label.showBadge ? (V(e.element, !0), p.push(e)) : e.element.style.display = "none");
		}), p.forEach((e) => {
			m(e) || (e.element.style.display = "none");
		}), ze();
	}, Ve = () => {
		y === null && (y = window.requestAnimationFrame(() => {
			y = null, Be(S, C);
		}));
	}, He = () => {
		if (w.length) return;
		let t = () => Ve();
		w = [e.event.on(n.MAP_EXTENTCHANGE, t), e.event.on(n.RAMP_MOBILEVIEW_CHANGE, t)];
	}, Ue = () => {
		w.forEach((t) => e.event.off(t)), w = [];
	}, We = (t) => {
		let n = t.native;
		if (n && Number.isFinite(n.clientX) && Number.isFinite(n.clientY)) return {
			x: n.clientX,
			y: n.clientY
		};
		let r = e.geo.map.esriView?.container;
		if (!r || !Number.isFinite(t.x) || !Number.isFinite(t.y)) return;
		let i = r.getBoundingClientRect();
		return {
			x: i.left + t.x,
			y: i.top + t.y
		};
	}, Ge = (t) => {
		if (Number.isFinite(t.x) && Number.isFinite(t.y)) return {
			x: t.x,
			y: t.y
		};
		let n = We(t), r = e.geo.map.esriView?.container;
		if (!n || !r) return;
		let i = r.getBoundingClientRect();
		return {
			x: n.x - i.left,
			y: n.y - i.top
		};
	}, Ke = (e) => {
		let t = We(e);
		if (t) for (let [e, n] of b) {
			if (!Ee(n)) continue;
			let r = n.getBoundingClientRect();
			if (t.x >= r.left && t.x <= r.right && t.y >= r.top && t.y <= r.bottom) return e;
		}
	}, qe = (e, t, n) => {
		let r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = r.x * r.x + r.y * r.y;
		if (i <= 0) return j(e, t);
		let a = Math.max(0, Math.min(1, ((e.x - t.x) * r.x + (e.y - t.y) * r.y) / i));
		return j(e, {
			x: t.x + r.x * a,
			y: t.y + r.y * a
		});
	}, Je = (t) => {
		let n = e.geo.map.esriView, r = Ge(t);
		if (!n || !r) return;
		let i;
		return S.forEach((e) => {
			let t = M(e.start, e.geometry.spatialReference, n), a = M(e.end, e.geometry.spatialReference, n);
			if (!t || !a) return;
			let o = qe(r, t, a);
			o <= jt && (!i || o < i.distance) && (i = {
				key: e.key,
				distance: o
			});
		}), i?.key;
	}, W = (e) => {
		if (e.type === "circle" || !e.includeDistance && !e.includeSegmentBadges) return [];
		let t = e.geometry;
		return St(t, e.id).map((n) => {
			let a = st(n.lengthMeters, r.value, i), o = e.includeDistance ? a.display : void 0;
			return {
				graphics: [],
				segmentLabels: [{
					key: n.key,
					letter: n.letter,
					showBadge: e.includeSegmentBadges,
					distanceText: o,
					badgeColor: e.badgeColor,
					start: n.start,
					end: n.end,
					geometry: t
				}],
				accessibleText: e.includeDistance ? i("draw.measurements.segment", {
					index: n.letter,
					distance: a.spoken
				}) : void 0
			};
		});
	}, Ye = (e) => e.type === "circle" || e.geometry.type !== "polyline" && e.geometry.type !== "polygon" ? [] : xt(e.geometry, e.id).map((t) => {
		let n = ie(t.key), r = se(t.vertex, e.geometry.spatialReference);
		return { graphics: oe(r, String(t.index + 1), {
			drawMeasurement: !0,
			drawMeasurementKind: "vertex-label",
			drawGraphicId: e.id,
			drawVertexKey: t.key
		}, n) };
	}), Xe = (e) => {
		let t = e.geometry;
		if (t.type !== "polygon") return;
		let n = t, a = mt(n), o = _t(n);
		if (!a || a < .01 || !o) return;
		let s = ct(a, r.value, i);
		return {
			graphics: [],
			areaLabels: [{
				key: `${e.id}:area`,
				text: s.display,
				point: o
			}],
			accessibleText: i("draw.measurements.area", { area: s.spoken })
		};
	}, Ze = (e) => {
		let t = e.geometry;
		if (!t || t.type === "point" || t.type === "multipoint") return [];
		let n = [...W(e), ...e.includeVertices ? Ye(e) : []], r = e.includeArea ? Xe(e) : void 0;
		return r && n.push(r), n;
	}, Qe = (e) => e?.attributes?.id, $e = (e, t, n, r) => {
		if (n) return {
			id: e,
			type: t ?? n.type,
			geometry: n,
			...r
		};
	}, et = (e, t) => {
		if (!t) return;
		let n = e.get(t.id);
		n ? (n.geometry = t.geometry, n.type = t.type, n.includeDistance ||= t.includeDistance, n.includeSegmentBadges ||= t.includeSegmentBadges, n.includeVertices ||= t.includeVertices, n.includeArea ||= t.includeArea, n.badgeColor = t.badgeColor || n.badgeColor) : e.set(t.id, t);
	}, tt = () => t.graphics.map((e) => {
		let n = String(e.id ?? e.attributes?.id ?? ""), r = P(e.attributes), i = D(n) && t.shapeDetailsLabelsVisible, a = i || r.segmentLength, o = i || r.segmentLetters, s = i || r.vertexNumbers;
		return $e(n, e.type ?? e.attributes?.type, F(e.geometry), {
			includeDistance: t.measurementsEnabled || a,
			includeSegmentBadges: o,
			includeVertices: s,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: q
		});
	}).filter((e) => !!e?.id), nt = () => (a()?.graphics.toArray() ?? []).filter((e) => !!Qe(e)).map((e) => {
		let n = Qe(e), r = P(e.attributes), i = D(n) && t.shapeDetailsLabelsVisible, a = i || r.segmentLength, o = i || r.segmentLetters, s = i || r.vertexNumbers;
		return $e(n, e.attributes?.type, e.geometry, {
			includeDistance: t.measurementsEnabled || a,
			includeSegmentBadges: o,
			includeVertices: s,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: q
		});
	}).filter((e) => !!e), rt = (e, n) => {
		if (!e) return;
		let r = P(e.attributes), i = Qe(e), a = !!i && D(i) && t.shapeDetailsLabelsVisible, o = a || r.segmentLength, s = a || r.segmentLetters, c = a || r.vertexNumbers;
		return $e(i ?? "active-draw-measurement", n ?? e.attributes?.type, e.geometry, {
			includeDistance: t.measurementsEnabled || o,
			includeSegmentBadges: s,
			includeVertices: c,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: q
		});
	}, at = () => {
		if (!o() || !t.shapeDetailsLabelsVisible && !t.shapeDetailsLabelsUseSettings) return;
		let e = s() ?? t.getSelectedGraphic(), n = Qe(e) ?? String(e?.id ?? "");
		if (!n) return;
		let r = P(e?.attributes), i = t.shapeDetailsLabelsVisible || r.segmentLength, a = t.shapeDetailsLabelsVisible || r.segmentLetters, c = t.shapeDetailsLabelsVisible || r.vertexNumbers;
		return $e(n, e?.attributes?.type ?? e?.type, F(e?.geometry), {
			includeDistance: t.measurementsEnabled || i,
			includeSegmentBadges: a,
			includeVertices: c,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: q
		});
	}, ot = (e, n) => {
		let r = /* @__PURE__ */ new Map();
		return (t.measurementsEnabled || ne()) && (tt().forEach((e) => et(r, e)), nt().forEach((e) => et(r, e)), et(r, rt(e, n))), et(r, at()), Array.from(r.values()).flatMap((e) => Ze(e));
	}, G = () => {
		t.setHoveredSegmentKey(null), t.setHoveredVertexKey(null);
	}, lt = () => {
		h?.remove(), h = null, g?.remove(), g = null, _ && e.geo.map.esriView?.container && e.geo.map.esriView.container.removeEventListener("mouseleave", _), _ = null, G();
	}, dt = async (t) => {
		let n = e.geo.map.esriView;
		return !n || !p.length ? null : (await n.hitTest(t, { include: p })).results.find((e) => "graphic" in e && !!e.graphic.attributes?.drawMeasurement)?.graphic ?? null;
	}, ft = async (e) => {
		if (!O()) {
			G();
			return;
		}
		let n = ++d, r = Ke(e) ?? Je(e);
		if (r) {
			t.setHoveredSegmentKey(k(r) ? r : null), t.setHoveredVertexKey(null);
			return;
		}
		let i = await dt(e);
		if (n !== d) return;
		let a = i?.attributes;
		t.setHoveredSegmentKey(k(a?.drawSegmentKey) ? a.drawSegmentKey : null), t.setHoveredVertexKey(k(a?.drawVertexKey) ? a.drawVertexKey : null);
	}, pt = async (e) => {
		if (!O()) return;
		let n = Ke(e) ?? Je(e);
		if (n) {
			if (!k(n)) return;
			t.setSelectedSegmentKey(n), t.setSelectedVertexKey(null), e.stopPropagation?.();
			return;
		}
		let r = (await dt(e))?.attributes, i = r?.drawSegmentKey, a = r?.drawVertexKey;
		if (k(i)) t.setSelectedSegmentKey(i), t.setSelectedVertexKey(null);
		else if (k(a)) t.setSelectedVertexKey(a), t.setSelectedSegmentKey(null);
		else return;
		e.stopPropagation?.();
	}, ht = () => {
		let t = e.geo.map.esriView;
		!t || h || g || (h = t.on("pointer-move", (e) => {
			ft(e);
		}), g = t.on("click", (e) => {
			pt(e);
		}), _ = G, t.container?.addEventListener("mouseleave", _));
	}, gt = () => {
		ze(), p.forEach((e) => {
			let t = e.attributes;
			t && (t.drawMeasurementKind === "vertex-marker" ? e.symbol = ae(ie(t.drawVertexKey)) : t.drawMeasurementKind === "vertex-label" && (e.symbol = A(t.drawMeasurementText ?? "", ie(t.drawVertexKey))));
		});
	}, vt = () => {
		u++, l !== null && (window.cancelAnimationFrame(l), l = null), m = null, ee.value = "", lt(), Ue(), U();
		try {
			e.geo.map.esriView?.graphics.removeMany(p);
		} catch (e) {
			console.warn("Unable to clear draw measurement graphics.", e);
		}
		p = [];
	}, yt = (e) => {
		let t = e.map((e) => e.accessibleText).filter((e) => !!e), n = t.length ? i("draw.measurements.summary", { measurements: t.join(". ") }) : i("draw.measurements.none");
		ee.value !== n && (ee.value = n);
	}, bt = async (t, n) => {
		let r = ++u;
		if (l !== null && (window.cancelAnimationFrame(l), l = null, m = null), !E()) {
			vt();
			return;
		}
		try {
			await ut();
		} catch (e) {
			console.warn("Unable to load draw measurement operators.", e);
			return;
		}
		if (r !== u || !E()) return;
		let i = e.geo.map.esriView, a = i?.graphics;
		if (!i || !a) return;
		let o = je(ot(t, n), i);
		try {
			p.length && a.removeMany(p);
		} catch (e) {
			console.warn("Unable to remove stale draw measurement graphics.", e);
		}
		p = o.flatMap((e) => e.graphics);
		let s = o.flatMap((e) => e.segmentLabels ?? []), c = o.flatMap((e) => e.areaLabels ?? []);
		Be(s, c), s.length || c.length ? He() : Ue();
		try {
			p.length && a.addMany(p), p.length || s.length ? ht() : lt();
		} catch (e) {
			console.warn("Unable to add draw measurement graphics.", e), p = [], lt();
		}
		yt(o);
	};
	return I(() => [
		t.activeSegmentKey,
		t.activeVertexKey,
		t.shapeDetailsActiveTab,
		t.selectedGraphicId
	], () => {
		gt();
	}), {
		measurementSummary: ee,
		clearMeasurementGraphics: vt,
		refreshMeasurementGraphics: bt,
		scheduleMeasurementRefresh: (e, t) => {
			E() ? (m = {
				activeGraphic: e,
				activeTool: t
			}, l === null && (l = window.requestAnimationFrame(() => {
				l = null;
				let e = m;
				m = null, bt(e?.activeGraphic, e?.activeTool);
			}))) : vt();
		}
	};
}, It = {
	key: 0,
	class: "sr-only",
	"aria-live": "polite",
	"aria-atomic": "true"
}, Lt = 24, Rt = 160, zt = 48, Bt = /* @__PURE__ */ ye({
	__name: "draw",
	setup(e) {
		let { t: r, availableLocales: a, locale: o } = je(), u = (e) => r(e ? `draw.${e}` : "draw.unknown"), f = be("iApi"), p = fe(), m = t(), g = (e) => {
			let t = a.length ? a : [o.value], n = {};
			for (let i of t) n[i] = r(e, {}, { locale: i });
			return n;
		}, _ = null, v = Ae("sketchEl"), y = null, S = null, C = null, w = null, ne = null, E = null, O = !1, k = 0, ae = null, A = /* @__PURE__ */ new Map(), j = 0, ye = {}, xe = 0, De = 0, F = null, L = null, Me = null, Ne = null, R = null, z = null, B = null, Pe = [
			{
				type: "point",
				key: "P",
				descriptionKey: "draw.keyboard.key.point"
			},
			{
				type: "polyline",
				key: "L",
				descriptionKey: "draw.keyboard.key.polyline"
			},
			{
				type: "polygon",
				key: "G",
				descriptionKey: "draw.keyboard.key.polygon"
			},
			{
				type: "circle",
				key: "C",
				descriptionKey: "draw.keyboard.key.circle"
			},
			{
				type: "rectangle",
				key: "R",
				descriptionKey: "draw.keyboard.key.rectangle"
			}
		], V = Ee([]), Ie, { measurementSummary: Le, clearMeasurementGraphics: Re, refreshMeasurementGraphics: H, scheduleMeasurementRefresh: ze } = Ft({
			iApi: f,
			drawStore: p,
			locale: o,
			t: r,
			getGraphicsLayer: () => y,
			isShapeDetailsOpen: () => Q(),
			getShapeDetailsGraphic: () => Kt()
		}), U = null, Be = (e = p.activeTool) => e !== null && e !== "" || p.shapeDetailsPickEnabled || Q(), Ve = (e = p.activeTool) => {
			let t = f.fixture.get("panguard");
			Be(e) ? t && U === null && (U = t.enabled, t.setEnabled(!1)) : U !== null && (t?.setEnabled(U), U = null);
		}, Ue = (e) => {
			Yn(e.detail);
		}, qe = (e) => {
			Xn(e.detail);
		}, Je = () => {
			try {
				_?.cancel();
			} catch (e) {
				console.warn("Unable to cancel draw sketch.", e);
			}
		}, W = () => {
			ae !== null && (window.clearTimeout(ae), ae = null);
		}, Ye = () => _?.widget, Xe = (e = _) => e?.widget?.viewModel ?? e?.viewModel, Ze = (e, t = _) => {
			let n = Xe(t);
			n && (n.updateOnGraphicClick = e);
		}, Qe = () => w?.state === "active" || Xe()?.state === "active" || _?.state === "active", $e = (e, t) => {
			let n = t?.updateGraphics ?? Xe()?.updateGraphics ?? Ye()?.updateGraphics ?? _?.updateGraphics;
			return n ? n.includes(e) || n.toArray().some((t) => t === e || t.attributes?.id === e.attributes?.id) : !1;
		}, et = (e) => {
			let t = Xe()?.defaultUpdateOptions ?? Ye()?.defaultUpdateOptions ?? _?.defaultUpdateOptions ?? {};
			return {
				...t,
				tool: e.geometry?.type === "point" ? "move" : "transform",
				toggleToolOnClick: !0,
				highlightOptions: {
					...t.highlightOptions,
					enabled: !1
				},
				reshapeOptions: { ...t.reshapeOptions }
			};
		}, tt = (e) => {
			if (!_ || !e) return;
			let t = Ye(), n = Xe();
			_.layer = e, t && (t.layer = e), n && (n.layer = e, Ze(!1));
		}, nt = () => {
			if (ne?.remove(), ne = null, w) {
				try {
					w.cancel();
				} catch (e) {
					console.warn("Unable to cancel draw edit sketch view model.", e);
				}
				w.destroy(), w = null;
			}
		}, rt = () => pe(p.styleSettings), at = () => ie(p.bufferSettings), ot = () => p.identifyBufferMode, G = (e) => e ? Fe(e) : void 0, st = (e) => !!e.attributes?.id && !e.attributes?.drawMeasurement && !e.attributes?.drawBufferFor, ct = async (e) => {
			let t = f.geo.layer.getLayer(e);
			if (t?.esriLayer) {
				let n = !!t.esriLayer.destroyed, r = (f.geo.map.esriMap?.layers.indexOf(t.esriLayer) ?? -1) > -1;
				(n || !r) && (ft(e), t = void 0);
			}
			if (!t) t = f.geo.layer.createLayer({
				id: e,
				layerType: s.GRAPHIC,
				cosmetic: !0,
				system: !0,
				url: ""
			}), await f.geo.map.addLayer(t);
			else if (!t.esriLayer) try {
				await t.loadPromise();
			} catch (t) {
				console.warn(`Unable to initialize draw graphics layer ${e}.`, t);
				return;
			}
			if (!t.esriLayer) console.warn(`Draw graphics layer ${e} does not have an Esri layer.`);
			else return t;
		}, lt = async (e, t) => {
			let n = f.geo.geom.geomEsriToRamp(e, t), r = await f.geo.map.geomToMapSR(n), i = f.geo.map.getSR();
			return n.sr.isEqual(i) ? e.clone() : f.geo.geom.geomRampToEsri(r);
		}, ut = (e, t) => {
			e.geometry = t, e.set("geometry", t);
		}, dt = async (e) => {
			let t = y;
			if (t) for (let n of t.graphics.toArray().filter(st)) {
				let t = G(n), r = n.geometry;
				if (r) try {
					let i = await lt(r, t);
					if (e !== void 0 && e !== k) return;
					ut(n, i), K(n);
				} catch (e) {
					console.warn("Unable to project draw graphic to the current map projection.", e);
				}
			}
		}, ft = (e) => {
			let t = f.geo.layer.getLayer(e);
			if (t) try {
				f.geo.map.removeLayer(t);
			} catch (t) {
				console.warn(`Unable to remove draw graphics layer ${e}.`, t);
			}
		}, pt = (e) => {
			let t = y?.graphics.toArray().some((t) => G(t) === e) ?? !1, n = p.graphics.some((t) => G(t) === e);
			return !t && !n;
		}, mt = (e) => {
			switch (e) {
				case "point":
				case "multipoint": return "T";
				case "polyline": return "P";
				case "polygon": return "G";
				case "circle": return "C";
				case "rectangle": return "R";
				default: return "S";
			}
		}, ht = (e) => {
			let t = mt(e), n = ye[t] ?? 999, r;
			do
				r = `${t}${++n}`;
			while (!pt(r));
			return ye[t] = n, r;
		}, gt = (e, t) => {
			let n = t?.trim();
			return n && pt(n) ? n : ht(e);
		}, _t = (e) => D(e.attributes), vt = (e) => me(e.attributes), yt = (e) => re(e.attributes), bt = (e) => P(e.attributes), wt = () => {
			if (!_) return;
			let e = rt();
			_.pointSymbol = se("point", e), _.polylineSymbol = se("polyline", e), _.polygonSymbol = se("polygon", e);
		}, K = (e) => {
			let t = e.attributes?.id;
			if (t) return p.updateGraphic(t, {
				type: e.attributes?.type,
				geometry: e.geometry,
				attributes: e.attributes
			});
		}, Tt = (e) => y?.graphics.toArray().find((t) => t.attributes?.id === e), Et = (e) => {
			if (!e || e.attributes?.drawMeasurement) return;
			let t = e.attributes?.drawBufferFor;
			return t ? Tt(t) : e.attributes?.id ? e : void 0;
		}, Dt = (e) => {
			e.symbol = se(e.geometry?.type ?? e.attributes?.type, _t(e));
		}, kt = (e, t = rt(), n = at(), r = ot()) => {
			e.attributes = {
				...e.attributes ?? {},
				drawStyle: pe(t),
				drawBuffer: ie(n),
				drawIdentifyBufferMode: r,
				drawMapLabels: ce(e.attributes?.drawMapLabels)
			}, Dt(e);
		}, At = (e, t, n) => {
			let r = t ?? e.attributes?.type ?? e.geometry?.type, i = gt(r, n);
			return e.attributes = {
				...e.attributes ?? {},
				id: i,
				type: r,
				drawStyle: pe(e.attributes?.drawStyle ?? rt()),
				drawBuffer: ie(e.attributes?.drawBuffer ?? at()),
				drawIdentifyBufferMode: re(e.attributes, ot()),
				drawMapLabels: ce(e.attributes?.drawMapLabels)
			}, Dt(e), i;
		}, jt = (e) => {
			if (!e) return;
			let t = A.get(e);
			if (t) {
				try {
					y?.remove(t);
				} catch (e) {
					console.warn("Unable to remove draw buffer graphic.", e);
				}
				A.delete(e);
			}
		}, Mt = () => {
			let e = Array.from(A.values());
			if (e.length) try {
				y?.removeMany(e);
			} catch (e) {
				console.warn("Unable to clear draw buffer graphics.", e);
			}
			A = /* @__PURE__ */ new Map();
		}, Nt = () => {
			if (!y) return;
			let e = y.graphics.toArray().filter(st);
			if (e.length) try {
				y.removeMany(e);
			} catch (e) {
				console.warn("Unable to clear draw graphics for map refresh.", e);
			}
		}, q = (e) => {
			let t = e.attributes?.id;
			if (!t || !y) return;
			let n = de(e, _t(e), vt(e)), r = A.get(t);
			if (!n) {
				jt(t);
				return;
			}
			if (r) {
				r.geometry = n.geometry, r.symbol = n.symbol, r.attributes = n.attributes;
				return;
			}
			let i = y.graphics.indexOf(e);
			i >= 0 ? y.graphics.add(n, i) : y.add(n), A.set(t, n);
		}, Pt = () => {
			let e = p.selectedGraphicSettingsUpdatedGraphicId ?? p.selectedGraphicId, t = e ? p.graphics.find((t) => t.id === e) : void 0, n = F?.attributes?.id === e ? F : e ? y?.graphics.toArray().find((t) => t.attributes?.id === e) : void 0;
			if (!t || !n) return;
			let r = vt(n), i = yt(n), a = D(t.attributes), o = me(t.attributes), s = re(t.attributes), c = r.distance !== o.distance || r.unit !== o.unit || i !== s;
			kt(n, a, o, s), z?.sourceGraphic === n && kt(z.editGraphic, a, o, s), q(n), K(n), $(Q() ? n : void 0), c && qt(n);
		}, Bt = (e, t = !0) => {
			let n = Et(e);
			n && (F = n, K(n), n.attributes?.id && p.selectGraphic(n.attributes.id), $(t ? n : void 0));
		}, Vt = (e) => {
			Bt(e), en("details"), p.requestShapePanelFocus(), qt(e);
		}, J = (e) => {
			Bt(e, !1), Gt(e);
		}, Y = (e) => {
			if (e) return e;
			let t = p.selectedGraphicId;
			return F && (!t || F.attributes?.id === t) ? F : t ? y?.graphics.toArray().find((e) => e.attributes?.id === t) : void 0;
		}, X = () => {
			let e = F ?? y?.graphics.toArray().find((e) => e.attributes?.id === p.selectedGraphicId), t = e?.attributes?.id;
			if (!e || !t) return !1;
			try {
				_?.delete();
			} catch (e) {
				console.warn("Unable to delete draw sketch graphic.", e);
			}
			return z?.sourceGraphic === e && Pn({ restoreSource: !1 }), jt(t), Yt(t), Jt(), y?.remove(e), p.removeGraphic(t), F = null, p.clearSelection(), $(void 0), H(), f.updateAlert(r("draw.graphic.deleted")), !0;
		}, Z = (e, t) => {
			let r = He(e, f);
			if (r) {
				let i = {
					id: e.id,
					drawing: r.draw,
					rampGeom: r.ramp,
					user: t
				};
				f.event.emit(n.DRAW_NEW_DRAWING, i);
			}
		}, Ht = async (e) => {
			if (!e.length || !y) return 0;
			let t = y, n = [];
			for (let t of e) try {
				let e = ee(t.geometry);
				if (!e) continue;
				let r = await lt(e, t.id), i = t.type || r.type, a = new T({
					geometry: r,
					attributes: {
						type: i,
						drawStyle: pe(t.settings.drawStyle),
						drawBuffer: ie(t.settings.drawBuffer),
						drawIdentifyBufferMode: t.settings.drawIdentifyBufferMode,
						drawMapLabels: ce(t.settings.drawMapLabels)
					}
				}), o = At(a, i, t.id);
				n.push(a);
				let s = {
					id: o,
					type: i,
					geometry: a.geometry,
					attributes: a.attributes
				};
				p.addGraphic(s), Z(s, !1);
			} catch {}
			return n.length ? t === y ? (t.addMany(n), n.forEach(q), H(), f.updateAlert(r("draw.import.success", { count: n.length })), n.length) : 0 : (f.updateAlert(r("draw.import.error.invalid")), 0);
		}, Ut = async () => {
			let e = p.importShapesRequestId;
			e && e !== De && y && (await Ht([...p.importShapeRecords]), De = e, p.clearImportShapes(e));
		}, Wt = async (e) => {
			let t = y;
			if (!t || !p.graphics.length) return;
			let n = new Set(t.graphics.toArray().map((e) => G(e)).filter((e) => !!e)), r = [];
			for (let e of p.graphics) {
				let t = G(e), i = e.geometry?.clone?.() ?? e.geometry;
				if (t && i && !n.has(t)) try {
					let a = await lt(i, t), o = e.type ?? e.attributes?.type ?? a.type, s = new T({
						geometry: a,
						attributes: {
							...e.attributes ?? {},
							id: t,
							type: o
						}
					});
					Dt(s), p.updateGraphic(t, {
						type: o,
						geometry: s.geometry,
						attributes: s.attributes
					}), n.add(t), r.push(s);
				} catch (e) {
					console.warn("Unable to restore draw graphic in the current map projection.", e);
				}
			}
			r.length && (e !== void 0 && e !== k || t !== y || (t.addMany(r), r.forEach(q)));
		}, Gt = (e) => {
			let t = ++j;
			p.setActiveTool("edit"), en("edit"), window.setTimeout(() => {
				if (t !== j || p.activeTool !== "edit") return;
				let n = Y(e);
				n && zn(n);
			}, 0);
		}, Kt = () => {
			let e = p.selectedGraphicId;
			if (e) return F?.attributes?.id === e ? F : y?.graphics.toArray().find((t) => t.attributes?.id === e);
		}, { refreshSelectedGraphicFeatureCounts: qt, cancelPendingFeatureCountRefresh: Jt, cancelFeatureCountRunsForGraphic: Yt, scheduleFeatureCountRefresh: Xt, runIdentifyForSelectedGraphic: Zt } = Ct({
			iApi: f,
			drawStore: p,
			getDrawGraphicId: G,
			getGraphicDrawBufferSettings: vt,
			getGraphicDrawIdentifyBufferMode: yt,
			getSelectedFeatureCountGraphic: () => Kt() ?? p.getSelectedGraphic() ?? void 0
		}), Qt = (e) => le(m, e), Q = () => Qt(N), $t = () => Q() && p.shapeDetailsActiveTab === "details" && !!p.selectedGraphicId, en = (e = "details") => {
			M(f, e, { focusExisting: !0 });
		}, tn = () => {
			Qt("draw-settings") ? f.panel.focus(ue) : f.panel.open(ue);
		}, nn = (e) => {
			Qt(e) && f.panel.close(e);
		}, rn = /* @__PURE__ */ new Set([N]), an = () => {
			let e = f.geo.map.esriView?.padding;
			return {
				top: Number(e?.top ?? 0),
				right: Number(e?.right ?? 0),
				bottom: Number(e?.bottom ?? 0),
				left: Number(e?.left ?? 0)
			};
		}, on = () => {
			let e = f.geo.map.esriView;
			return e?.viewpoint?.clone?.() ?? {
				center: e?.center?.clone?.(),
				scale: e?.scale,
				rotation: e?.rotation
			};
		}, sn = (e) => {
			let t = f.geo.map.esriView;
			t && (t.padding = { ...e });
		}, cn = () => {
			if (Q()) return N;
		}, ln = (e, t) => {
			let n = f.geo.map.esriView, r = n?.container?.getBoundingClientRect(), i = (f.$rootEl?.querySelector(`[data-cy="${e}"]`))?.getBoundingClientRect(), a = f.$vApp.$el.querySelector(".appbar")?.getBoundingClientRect(), o = f.panel.get(e)?.width ?? 350, s = a && r ? Math.max(0, a.right - r.left) : 0, c = i?.width ?? o, l = i && r ? i.right - r.left : s + o, u = s ? s + c : l, d = Math.max(t.left, Math.ceil(u + Lt)), p = n?.width ?? r?.width ?? 0, h = m.mobileView ? zt : Rt;
			return p > h && (d = Math.min(d, p - h)), Math.max(0, d);
		}, un = (e, t) => ({
			top: t.top + Lt,
			right: t.right + Lt,
			bottom: t.bottom + Lt,
			left: ln(e, t)
		}), dn = () => {
			let e = f.panel.opened.slice().filter((e) => !rn.has(e.id)).map((e) => ({
				panel: e,
				wasPinned: e.isPinned
			}));
			return e.forEach(({ panel: e }) => e.minimize()), e;
		}, fn = (e) => {
			e.forEach(({ panel: e }) => {
				f.panel.get(e.id) && !e.isOpen && e.open();
			}), e.filter(({ panel: e, wasPinned: t }) => t && !!f.panel.get(e.id)).forEach(({ panel: e }) => e.pin(!0));
		}, pn = (e) => !!e && typeof e == "object" && e.name === "AbortError", mn = async (e, t, n) => {
			if (await Se(), B !== e || t !== xe || !n.geometry) return;
			let r = cn();
			if (r) {
				e.previousViewpoint ||= on(), sn(un(r, e.previousPadding)), e.paddingAdjusted = !0;
				try {
					let e = f.geo.geom.geomEsriToRamp(n.geometry, n.attributes?.id);
					await f.geo.map.zoomMapTo(e, void 0, !0, 250, "ease");
				} catch (e) {
					pn(e) || console.warn("Unable to focus the map on the selected draw shape.", e);
				}
			}
		}, hn = () => {
			if (m.mobileView || B) return;
			let e = f.geo.map.esriView, t = Kt();
			if (!e) return;
			let n = {
				previousPadding: an(),
				paddingAdjusted: !1,
				minimizedPanels: []
			};
			B = n;
			let r = ++xe;
			n.minimizedPanels = dn(), t?.geometry && mn(n, r, t);
		}, gn = () => {
			if (m.mobileView) return;
			let e = Kt();
			if (!f.geo.map.esriView || !e?.geometry) return;
			if (!B) {
				hn();
				return;
			}
			let t = B, n = new Set(t.minimizedPanels.map(({ panel: e }) => e.id)), r = dn().filter(({ panel: e }) => !n.has(e.id));
			t.minimizedPanels.push(...r);
			let i = ++xe;
			mn(t, i, e);
		}, _n = () => {
			let e = B;
			if (!e) return;
			B = null, xe++, e.paddingAdjusted && sn(e.previousPadding), fn(e.minimizedPanels);
			let t = f.geo.map.esriView;
			t && e.previousViewpoint && t.goTo(e.previousViewpoint, {
				animate: !0,
				duration: 250,
				easing: "ease"
			}).catch((e) => {
				pn(e) || console.warn("Unable to restore the map after closing the draw shape panel.", e);
			});
		}, vn = () => {
			let e = p.activeTool, t = e !== null && e !== "" && e !== "edit", n = e === "edit";
			return p.shapeDetailsPickEnabled && !t && !n;
		}, yn = () => !1, bn = (e, t, n) => {
			let r = e.geometry;
			if (!r) return !1;
			try {
				return h.execute(r, r.type === "polygon" ? t : n);
			} catch {
				return !1;
			}
		}, xn = (e) => {
			if (!y) return;
			let t = e.mapPoint ?? f.geo.map.esriView?.toMap({
				x: e.x,
				y: e.y
			});
			if (!t) return;
			let n = e.pointerType, r = e.native?.pointerType, a = n === "touch" || r === "touch" ? 15 : 5, o = t, s = f.geo.query.makeClickBuffer(i.fromESRI(t), a).toESRI();
			for (let e of y.graphics.toArray().slice().reverse()) {
				let t = Et(e);
				if (t && bn(e, o, s)) return t;
			}
		}, Sn = (e) => {
			if (!y) return;
			let t = e.mapPoint.toESRI(), n = e.input === "touch" ? 15 : 5, r = f.geo.query.makeClickBuffer(e.mapPoint, n).toESRI();
			return y.graphics.toArray().slice().reverse().find((e) => !!e.attributes?.id && !e.attributes?.drawMeasurement && !e.attributes?.drawBufferFor && bn(e, t, r));
		}, Cn = (e) => {
			let t = Q();
			if (!vn() && !t) return;
			let n = Sn(e);
			n && vn() ? Vt(n) : !n && t && nn(N);
		};
		async function wn() {
			let e = f.keyboardNav;
			if (!e) {
				console.warn("Keyboard navigation fixture is not available; draw shortcuts are disabled.");
				return;
			}
			Ie &&= (e.unregister(Ie), void 0);
			let t = new Set(p.supportedTypes.map((e) => e.type)), n = Pe.filter((e) => t.has(e.type)).map((e) => ({
				key: e.key,
				description: g(e.descriptionKey),
				handler: () => {
					p.setActiveTool(e.type);
				}
			}));
			Ie = e.register("D", {
				name: g("draw.keyboard.namespace"),
				activeHandler: () => {
					p.setActiveTool("");
				},
				deactiveHandler: () => {
					p.setActiveTool(null);
				},
				keys: [
					...n,
					{
						key: "I",
						description: g("draw.keyboard.key.inspector"),
						handler: () => (p.setActiveTool(null), en("details"), "reset")
					},
					{
						key: "D",
						description: g("draw.keyboard.key.defaults"),
						handler: () => (p.setActiveTool(null), tn(), "reset")
					}
				]
			});
		}
		let $ = (e) => {
			let t = C ?? y;
			if (L && t && Me === t && e?.geometry && L.geometry?.type === e.geometry.type) {
				L.geometry = e.geometry, L.set("geometry", e.geometry);
				return;
			}
			if (L && (Me?.remove(L), y?.remove(L), C?.remove(L), L = null, Me = null), !e?.geometry || !t) return;
			let n;
			switch (e.geometry?.type) {
				case "point":
				case "multipoint":
					n = new c({
						color: [
							255,
							255,
							0,
							.8
						],
						size: 16,
						outline: {
							color: [
								255,
								165,
								0,
								1
							],
							width: 3
						}
					});
					break;
				case "polyline":
					n = new x({
						color: [
							255,
							255,
							0,
							.8
						],
						width: 6
					});
					break;
				default: n = new d({
					color: [
						255,
						255,
						0,
						.3
					],
					outline: {
						color: [
							255,
							165,
							0,
							1
						],
						width: 3
					}
				});
			}
			L = new T({
				geometry: e.geometry,
				symbol: n
			}), t.add(L), Me = t;
		}, Tn = () => {
			Ne &&= (y?.remove(Ne), null);
		}, En = () => {
			R &&= (y?.remove(R), null);
		}, Dn = () => {
			let e = p.mapLabelSettingsUpdatedGraphicId;
			if (!e) return;
			let t = p.graphics.find((t) => t.id === e), n = Tt(e);
			t && n && (n.attributes = {
				...n.attributes ?? {},
				drawMapLabels: ce(bt(t))
			});
		}, On = () => {
			if (Tn(), !$t()) return;
			let e = it(p.activeSegmentKey);
			if (!e || e.kind !== "segment" || e.graphicId !== p.selectedGraphicId) return;
			let t = Tt(e.graphicId), n = St(t?.geometry, e.graphicId)[e.index];
			n && t?.geometry && (Ne = new T({
				geometry: new l({
					paths: [[n.start, n.end]],
					spatialReference: t.geometry.spatialReference
				}),
				symbol: new x({
					color: [
						37,
						99,
						235,
						.9
					],
					width: 4
				}),
				attributes: { drawInteractionHighlight: !0 }
			}), y?.add(Ne));
		}, kn = () => {
			if (En(), !$t()) return;
			let e = it(p.activeVertexKey);
			if (!e || e.kind !== "vertex" || e.graphicId !== p.selectedGraphicId) return;
			let t = Tt(e.graphicId), n = xt(t?.geometry, e.graphicId)[e.index];
			n && t?.geometry && (R = new T({
				geometry: new te({
					x: n.vertex[0],
					y: n.vertex[1],
					spatialReference: t.geometry.spatialReference
				}),
				symbol: new c({
					color: [
						37,
						99,
						235,
						.22
					],
					size: 28,
					outline: {
						color: [
							37,
							99,
							235,
							1
						],
						width: 3
					}
				}),
				attributes: { drawInteractionHighlight: !0 }
			}), y?.add(R));
		}, An = () => {
			On(), kn();
		}, jn = (e) => {
			if (!y) return;
			let t = Et(e);
			if (!t) return;
			let n = t.attributes?.id;
			return y.graphics.toArray().find((e) => e === t || !!n && e.attributes?.id === n);
		}, Mn = (e) => z?.editGraphic === e ? z.sourceGraphic : e, Nn = () => {
			if (!z) return;
			let { sourceGraphic: e, editGraphic: t } = z;
			return e.geometry = t.geometry, e.set("geometry", t.geometry), Dt(e), q(e), K(e), e;
		}, Pn = ({ restoreSource: e = !0 } = {}) => {
			z?.sourceGraphic && e && (z.sourceGraphic.visible = !0), nt(), z = null, S?.removeAll(), tt(y);
		}, Fn = (e) => {
			if (S && f.geo.map.esriView) return nt(), w = new b({
				view: f.geo.map.esriView,
				layer: S,
				updateOnGraphicClick: !1,
				defaultUpdateOptions: et(e),
				pointSymbol: _?.pointSymbol,
				polygonSymbol: _?.polygonSymbol,
				polylineSymbol: _?.polylineSymbol
			}), ne = w.on("update", (e) => Xn(e)), w;
		}, In = async () => {
			if (!S || !f.geo.map.esriView) return !1;
			try {
				return await f.geo.map.esriView.whenLayerView(S), !0;
			} catch (e) {
				return console.warn("Unable to initialize draw edit sketch layer view.", e), !1;
			}
		}, Ln = (e) => {
			if (!S) return;
			Pn();
			let t = e.clone();
			t.attributes = { ...e.attributes };
			let n = e.geometry?.clone?.() ?? e.geometry;
			if (Dt(t), S.graphics = [t], e.visible = !1, z = {
				sourceGraphic: e,
				editGraphic: t,
				originalGeometry: n
			}, !Fn(t)) e.visible = !0, z = null, S.removeAll();
			else return t;
		}, Rn = async (e) => {
			let t = Mn(e);
			if (!_ || !y || p.activeTool !== "edit" || F !== t) return !1;
			let n = z?.editGraphic === e, r = n ? w : Xe();
			if (!r || n && !await In()) return !1;
			if (r.state === "active") return $e(e, r) ? !0 : (r.cancel(), !1);
			if (r.state !== "ready" || !r.hasGraphic(e)) return !1;
			try {
				r !== w && Ze(!1), await r.update([e], et(e));
			} catch (e) {
				return console.warn("Unable to start draw sketch update.", e), !1;
			}
			return $e(e, r);
		}, zn = (e, t = 5) => {
			if (!_ || p.activeTool !== "edit") return;
			let n = jn(e);
			if (!n) return;
			Bt(n, !1), W(), Je();
			let r = Ln(n);
			if (!r) return;
			$(Q() ? n : void 0);
			let i = (e) => {
				ae = window.setTimeout(() => {
					ae = null, _ && p.activeTool === "edit" && F === n && Rn(r).then((t) => {
						t || (e <= 0 ? Pn({ restoreSource: !0 }) : i(e - 1));
					});
				}, 400);
			};
			i(t);
		}, Bn = ({ clearSelection: e = !1 } = {}) => {
			j++, W(), Nn(), Je(), Pn({ restoreSource: !0 }), e && (F = null, p.clearSelection()), p.activeTool === "edit" ? p.setActiveTool(null) : $(Q() ? Kt() : void 0);
		}, Vn = ({ clearSelection: e = !1 } = {}) => {
			j++, W();
			let t = z;
			t?.sourceGraphic && t.originalGeometry && (t.sourceGraphic.geometry = t.originalGeometry, t.sourceGraphic.set("geometry", t.originalGeometry), Dt(t.sourceGraphic), q(t.sourceGraphic), K(t.sourceGraphic), Jt(), qt(t.sourceGraphic)), Je(), Pn({ restoreSource: !0 }), e && (F = null, p.clearSelection()), p.activeTool === "edit" && p.setActiveTool(null), $(Q() ? Kt() : void 0), H();
		};
		I(() => p.selectedGraphicId, (e, t) => {
			if (_ && y) {
				if (!e) W(), Je(), Pn({ restoreSource: !0 }), $();
				else if (e !== t) {
					let t = y.graphics.toArray().find((t) => t.attributes && t.attributes.id === e);
					t && (Bt(t, p.activeTool !== "edit"), p.shapeDetailsPickEnabled && qt(t));
				}
				H();
			}
		}), I(() => p.deleteSelectedGraphicRequestId, () => {
			X();
		}), I(() => p.editSelectedGraphicRequestId, () => {
			Gt();
		}), I(() => p.identifySelectedGraphicRequestId, () => {
			Zt();
		}), I(() => p.stopEditModeRequestId, () => {
			Bn({ clearSelection: p.stopEditModeClearSelection });
		}), I(() => p.cancelEditModeRequestId, () => {
			Vn({ clearSelection: p.cancelEditModeClearSelection });
		}), I(() => p.refreshSelectedGraphicFeatureCountsRequestId, () => {
			qt();
		}), I(() => p.mapLabelSettingsUpdateRequestId, () => {
			Dn(), H();
		}), I(() => [p.shapeDetailsLabelsVisible, p.shapeDetailsLabelsUseSettings], () => {
			H();
		}), I(() => p.shapePanelFocusRequestId, () => {
			gn();
		}), I(() => p.selectedGraphicSettingsUpdateRequestId, () => {
			Pt(), H();
		}), I(() => p.importShapesRequestId, () => {
			Ut();
		}), I(() => Q(), (e, t) => {
			Ve(), e && !t ? (p.activeTool !== "edit" && $(Kt()), H(), hn()) : !e && t && (p.activeTool === "edit" && Bn(), p.setShapeDetailsPickEnabled(!1), p.setShapeDetailsLabelsVisible(!1), p.setShapeDetailsLabelsUseSettings(!1), p.setShapeDetailsActiveTab("details"), p.clearMeasurementInteraction(), $(void 0), H(), _n());
		}), I(() => p.measurementsEnabled, (e) => {
			H(), f.updateAlert(r(e ? "draw.measurements.enabled" : "draw.measurements.disabled"));
		}), I(() => [
			p.activeSegmentKey,
			p.activeVertexKey,
			p.shapeDetailsActiveTab,
			p.selectedGraphicId,
			p.graphics.map((e) => e.geometry)
		], () => {
			An();
		}, { deep: !0 }), I(() => ({
			fillColor: p.styleSettings.fillColor,
			borderColor: p.styleSettings.borderColor,
			bufferColor: p.styleSettings.bufferColor,
			opacity: p.styleSettings.opacity,
			bufferDistance: p.bufferSettings.distance,
			bufferUnit: p.bufferSettings.unit,
			identifyBufferMode: p.identifyBufferMode
		}), () => {
			wt(), H();
		});
		let { handleNavigationKeyDown: Hn, handleGraphicKeyboardEdit: Un, resetMultiPointState: Wn } = Ot({
			iApi: f,
			drawStore: p,
			t: r,
			translateTerm: u,
			getSketch: () => _,
			getGraphicsLayer: () => y,
			getSelectedGraphic: () => F,
			getKeyboardEditGraphic: () => z?.editGraphic ?? F,
			setSelectedGraphic: (e) => {
				F = e;
			},
			prepareDrawGraphic: At,
			applyDrawSymbol: Dt,
			syncBufferGraphic: q,
			syncGraphicStoreRecord: K,
			syncActiveSketchEditToSource: Nn,
			highlightSelectedGraphic: $,
			deleteSelectedGraphic: X,
			startSketchUpdate: zn,
			cancelPendingSketchUpdate: W,
			clearActiveSketchEdit: Pn,
			refreshMeasurementGraphics: H,
			scheduleMeasurementRefresh: ze,
			cancelPendingFeatureCountRefresh: Jt,
			refreshSelectedGraphicFeatureCounts: qt
		}), Gn = async (e) => {
			let t = p.activeTool === "edit", n = yn();
			if (!t && !n) return;
			let r = (await f.geo.map.esriView.hitTest(e, { include: y })).results.find((e) => "graphic" in e && e.graphic.layer === y && !!Et(e.graphic)), i = Et(r?.graphic) ?? xn(e);
			if (i) {
				if (n) {
					J(i);
					return;
				}
				Qe() ? Bt(i, !1) : zn(i);
			} else t && Bn({ clearSelection: !0 });
		}, Kn = async () => {
			let e = ++k;
			if (await f.geo.map.viewPromise, e !== k || !v.value || !f.geo.map.esriView) return;
			let t = await ct(We);
			if (e !== k || !f.geo.map.esriView || (y = t?.esriLayer, !y) || (await dt(e), e !== k || !f.geo.map.esriView)) return;
			let n = await ct(Ge);
			if (e !== k || !f.geo.map.esriView) {
				ft(Ge), S = null;
				return;
			}
			if (S = n?.esriLayer, !S) return;
			let r = await ct(Ke);
			if (e !== k || !f.geo.map.esriView) {
				ft(Ge), ft(Ke), S = null, C = null;
				return;
			}
			if (C = r?.esriLayer, !C) return;
			let i = v.value;
			Object.assign(i, {
				view: f.geo.map.esriView,
				layer: y,
				availableCreateTools: [
					"point",
					"multipoint",
					"polyline",
					"polygon",
					"rectangle",
					"circle"
				],
				visibleElements: {
					createTools: {
						point: !0,
						polyline: !0,
						polygon: !0,
						rectangle: !0,
						circle: !0
					},
					selectionTools: { enable: !0 },
					settingsMenu: !1
				},
				defaultUpdateOptions: {
					enableRotation: !0,
					enableScaling: !0,
					highlightOptions: { enabled: !1 },
					toggleToolOnClick: !0
				}
			}), Ze(!1, i), f.geo.map.esriView.ui.add(i, "bottom-right"), O ||= (i.addEventListener("arcgisCreate", Ue), i.addEventListener("arcgisUpdate", qe), !0), _ = i, Ze(!1), wt(), E = f.geo.map.esriView.on("click", Gn), document.addEventListener("keydown", Hn), document.addEventListener("keydown", Un, { capture: !0 }), p.activeTool && p.activeTool !== "edit" && _.create(p.activeTool), await Wt(e), e === k && f.geo.map.esriView && (H(), Ut());
		}, qn = () => {
			if (!Ie) return;
			let e = f.keyboardNav;
			e && e.unregister(Ie), Ie = void 0;
		}, Jn = ({ cleanupKeyboard: e = !0, clearActiveTool: t = !1, clearSourceGraphics: n = !1, destroyHelperLayers: r = !0, destroySketch: i = !0 } = {}) => {
			k++, e && qn(), E &&= (E.remove(), null), Pn({ restoreSource: !0 }), S &&= (r ? (f.geo.map.esriView?.map?.remove(S), S.destroy()) : S.removeAll(), null), _ && (f.geo.map.esriView && f.geo.map.esriView.ui.remove(_), W(), Je(), i && _.destroy()), O && v.value && (v.value.removeEventListener("arcgisCreate", Ue), v.value.removeEventListener("arcgisUpdate", qe), O = !1), document.removeEventListener("keydown", Hn), document.removeEventListener("keydown", Un, { capture: !0 }), F = null, $(void 0), C && (r ? (f.geo.map.esriView?.map?.remove(C), C.destroy()) : C.removeAll(), C = null, Me = null), Tn(), En(), W(), Jt(), j++, Re(), Mt(), n && Nt(), p.clearSelection(), t && p.activeTool && p.setActiveTool(null), Wn(), _ = null, y = null;
		}, Yn = (e) => {
			if (e.state === "active" && e.graphic) ze(e.graphic, e.tool);
			else if (e.state === "cancel") H();
			else if (e.state === "complete") {
				let t = e.graphic;
				if (!t) return;
				let n = At(t, e.tool);
				q(t);
				let r = {
					id: n,
					type: e.tool,
					geometry: t.geometry,
					attributes: t.attributes
				};
				p.addGraphic(r), H(t, e.tool), Z(r, !0), e.tool !== "point" && (p.setActiveTool(""), f.keyboardNav?.reset());
			}
		}, Xn = (e) => {
			let t = e.graphics[0];
			if (!t) return;
			let i = Mn(t);
			if (e.state === "start") {
				if (p.activeTool !== "edit") {
					Je();
					return;
				}
				W(), Bt(i, Q()), i.attributes?.id && f.updateAlert(r("draw.graphic.selected", { type: u(i.attributes?.type) }));
			} else if (e.state === "active") {
				Dt(t);
				let e = Nn() ?? i;
				q(e), K(e), $(Q() ? e : void 0), ze(e, e.attributes?.type), Xt(e);
			} else if (e.state === "complete") {
				let e = Nn() ?? i;
				Pn({ restoreSource: !0 });
				let t;
				if (e.attributes?.id && (Dt(e), q(e), t = K(e), Jt(), qt(e), f.updateAlert(r("draw.graphic.updated"))), $(Q() ? e : void 0), H(e, e.attributes?.type), t) {
					let e = He(t, f);
					if (e) {
						let r = {
							id: t.id,
							drawing: e.draw,
							rampGeom: e.ramp
						};
						f.event.emit(n.DRAW_EDIT_DRAWING, r);
					}
				}
			}
		};
		return Ce(() => {
			wn(), oe(), Kn(), V.push(f.event.on(n.MAP_DESTROYED, () => {
				Jn();
			})), V.push(f.event.on(n.MAP_CLICK, Cn)), V.push(f.event.on(n.MAP_REFRESH_START, () => {
				Jn({
					cleanupKeyboard: !1,
					clearActiveTool: !0,
					clearSourceGraphics: !0,
					destroyHelperLayers: !1,
					destroySketch: !1
				});
			})), V.push(f.event.on(n.MAP_REFRESH_END, () => {
				Kn();
			})), V.push(f.event.on(n.FIXTURE_ADDED, (e) => {
				e.id === "panguard" && Ve();
			}));
		}), I(() => p.activeTool, (e) => {
			if (Ve(e), _ && (e !== "edit" && j++, W(), Je(), e !== "edit" && Pn({ restoreSource: !0 }), $(Q() ? Kt() : void 0), Wn(), H(), e !== "edit" && e)) try {
				_.create(e);
			} catch (e) {
				console.warn("Unable to start draw sketch.", e);
			}
		}, { immediate: !0 }), I(() => p.shapeDetailsPickEnabled, () => {
			Ve();
		}), we(() => {
			_n(), U !== null && (f.fixture.get("panguard")?.setEnabled(U), U = null), Jn(), V.forEach((e) => f.event.off(e));
		}), (e, t) => (Te(), _e(he, null, [ve("arcgis-sketch", {
			ref_key: "sketchEl",
			ref: v,
			style: { display: "none" }
		}, null, 512), ke(p).measurementsEnabled ? (Te(), _e("div", It, Oe(ke(Le)), 1)) : ge("", !0)], 64));
	}
}), Vt = "draw", J = (e) => `<svg class="rv-draw-help-icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${e}</svg>`, Y = (e) => `<span class="rv-draw-help-mapnav-button">${e}</span>`, X = (e, t) => `<span class="rv-draw-help-action-button">${t}<span class="rv-draw-help-action-label">${e}</span></span>`, Z = {
	point: J("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\" />"),
	polyline: J("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 17l3-3 4 4 8-8\" stroke-width=\"2\" fill=\"none\" stroke=\"currentColor\" />"),
	polygon: J("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 6l6-3 6 3 6-3v12l-6 3-6-3-6 3z\" />"),
	rectangle: J("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" />"),
	circle: J("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" />"),
	info: J("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M11 10h2v7h-2v-7zm0-3h2v2h-2V7zm1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z\" fill=\"currentColor\" />"),
	settings: J("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.31-.6-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.05.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.22.37.31.6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.18-.58 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z\" />"),
	upload: J("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 20h14v-2H5v2zm14-7h-4v5H9v-5H5l7-7 7 7z\" fill=\"currentColor\" />"),
	download: J("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 20h14v-2H5v2zm14-9h-4V3H9v8H5l7 7 7-7z\" fill=\"currentColor\" />"),
	identify: J("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M10.5 4a6.5 6.5 0 0 1 5.18 10.43l4.45 4.44-1.42 1.42-4.44-4.45A6.5 6.5 0 1 1 10.5 4zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z\" fill=\"currentColor\" />"),
	copy: J("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M8 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v10h10V9H8z\" fill=\"currentColor\" /><path d=\"M4 15H2V5a3 3 0 0 1 3-3h10v2H5a1 1 0 0 0-1 1v10z\" fill=\"currentColor\" />"),
	delete: J("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z\" fill=\"currentColor\" />")
}, Ht = {
	en: `# Draw Tools

Draw tools add temporary shapes to the map. The available shape buttons depend on the viewer configuration.

### Drawing Shapes

Open the Draw tool group in the map navigation controls and choose one of the available shape buttons.

| Icon | Shape | How to draw |
|--|--|--|
| ${Y(Z.point)} | Point | Select the point tool, then select the map once. |
| ${Y(Z.polyline)} | Polyline | Select each vertex on the map, then double-click the final vertex to finish. |
| ${Y(Z.polygon)} | Polygon | Select each boundary vertex on the map, then double-click the final vertex to close and finish the polygon. |
| ${Y(Z.rectangle)} | Rectangle | Select-hold on the map, drag to size the rectangle, then release. |
| ${Y(Z.circle)} | Circle | Select-hold on the map, drag to size the circle, then release. |

Press <kbd>Escape</kbd> to cancel the active drawing tool.

### Shape Inspector

After at least one shape exists, select the Shape Inspector information button ${Y(Z.info)} in the Draw tool group. Select a shape on the map to open or update the Shape Inspector.

The Shape Inspector has three tabs:

- Details: view the shape type, measurements, feature counts, centroid, extent, segments, and vertices. Use ${X("Run Identify", Z.identify)} to refresh feature counts, ${X("Copy", Z.copy)} coordinate or segment values, or ${X("Export", Z.download)} the selected shape.
- Style: apply a preset or set the selected shape's fill colour, border colour, buffer colour, and opacity.
- Edit: move, resize, rotate, or reshape the selected shape using the map handles. Turn on editing aids for area labels, segment lengths, segment letters, or vertex numbers. This tab also contains the selected shape's buffer and identify options.

### Deleting Shapes

Open the Shape Inspector, select the Edit tab, then choose ${X("Delete", Z.delete)} and confirm the deletion. When a shape is selected and the map has focus, <kbd>Delete</kbd> or <kbd>Backspace</kbd> also removes the selected shape.

### Import and Export

Open Draw Defaults with the settings button ${Y(Z.settings)} in the Draw tool group.

- ${X("Import", Z.upload)} opens a file picker for one or more draw shape JSON files.
- ${X("Export", Z.download)} in Draw Defaults downloads all current draw shapes.
- ${X("Export", Z.download)} in the Shape Inspector Details tab downloads only the selected shape.

Exported files include geometry and draw settings so they can be imported later into the Draw fixture.

### Draw Defaults

The Draw Defaults panel controls settings for new shapes. It does not change shapes that already exist on the map.

- Appearance: default fill colour, border colour, buffer colour, and shape opacity.
- Buffer: default buffer distance and unit.
- Identify buffer uses: whether identify and feature counts use the original shape plus its buffer, the original shape only, or the buffer only.

### Shape Options

Each selected shape can have options that differ from the defaults. Use the Shape Inspector Style tab for colours and opacity. Use the Shape Inspector Edit tab for buffer distance, buffer unit, identify buffer use, editing aids, and deletion.`,
	fr: `# Outils de dessin

Les outils de dessin ajoutent des formes temporaires à la carte. Les boutons de forme disponibles dépendent de la configuration du visualiseur.

### Dessiner des formes

Ouvrez le groupe d'outils de dessin dans les contrôles de navigation de la carte et choisissez l'un des boutons de forme disponibles.

| Icône | Forme | Comment dessiner |
|--|--|--|
| ${Y(Z.point)} | Point | Sélectionnez l'outil de point, puis sélectionnez la carte une fois. |
| ${Y(Z.polyline)} | Polyligne | Sélectionnez chaque sommet sur la carte, puis double-cliquez le dernier sommet pour terminer. |
| ${Y(Z.polygon)} | Polygone | Sélectionnez chaque sommet de la limite sur la carte, puis double-cliquez le dernier sommet pour fermer et terminer le polygone. |
| ${Y(Z.rectangle)} | Rectangle | Sélectionnez et maintenez sur la carte, faites glisser pour dimensionner le rectangle, puis relâchez. |
| ${Y(Z.circle)} | Cercle | Sélectionnez et maintenez sur la carte, faites glisser pour dimensionner le cercle, puis relâchez. |

Appuyez sur <kbd>Échap</kbd> pour annuler l'outil de dessin actif.

### Inspecteur de forme

Lorsqu'au moins une forme existe, sélectionnez le bouton d'information de l'inspecteur de forme ${Y(Z.info)} dans le groupe d'outils de dessin. Sélectionnez une forme sur la carte pour ouvrir ou mettre à jour l'inspecteur de forme.

L'inspecteur de forme contient trois onglets :

- Détails : affichez le type de forme, les mesures, les dénombrements d'entités, le centroïde, l'étendue, les segments et les sommets. Utilisez ${X("Exécuter l'identification", Z.identify)} pour actualiser les dénombrements d'entités, ${X("Copier", Z.copy)} des coordonnées ou des valeurs de segment, ou ${X("Exporter", Z.download)} la forme sélectionnée.
- Style : appliquez un préréglage ou définissez la couleur de remplissage, la couleur de bordure, la couleur du tampon et l'opacité de la forme sélectionnée.
- Modifier : déplacez, redimensionnez, faites pivoter ou remodelez la forme sélectionnée à l'aide des poignées sur la carte. Activez les aides de modification pour les étiquettes de superficie, les longueurs de segment, les lettres de segment ou les numéros de sommet. Cet onglet contient aussi les options de tampon et d'identification de la forme sélectionnée.

### Supprimer des formes

Ouvrez l'inspecteur de forme, sélectionnez l'onglet Modifier, puis choisissez ${X("Supprimer", Z.delete)} et confirmez la suppression. Lorsqu'une forme est sélectionnée et que la carte a le focus, <kbd>Supprimer</kbd> ou <kbd>Retour arrière</kbd> supprime aussi la forme sélectionnée.

### Importer et exporter

Ouvrez Valeurs par défaut du dessin avec le bouton des paramètres ${Y(Z.settings)} dans le groupe d'outils de dessin.

- ${X("Importer", Z.upload)} ouvre un sélecteur de fichiers pour un ou plusieurs fichiers JSON de formes dessinées.
- ${X("Exporter", Z.download)} dans Valeurs par défaut du dessin télécharge toutes les formes dessinées actuelles.
- ${X("Exporter", Z.download)} dans l'onglet Détails de l'inspecteur de forme télécharge seulement la forme sélectionnée.

Les fichiers exportés comprennent la géométrie et les paramètres de dessin afin de pouvoir être importés plus tard dans le module de dessin.

### Valeurs par défaut du dessin

Le panneau Valeurs par défaut du dessin contrôle les paramètres des nouvelles formes. Il ne modifie pas les formes qui existent déjà sur la carte.

- Apparence : couleur de remplissage, couleur de bordure, couleur du tampon et opacité par défaut de la forme.
- Tampon : distance et unité du tampon par défaut.
- Utilisation du tampon d'identification : détermine si l'identification et les dénombrements d'entités utilisent la forme originale avec son tampon, la forme originale seulement ou le tampon seulement.

### Options de forme

Chaque forme sélectionnée peut avoir des options différentes des valeurs par défaut. Utilisez l'onglet Style de l'inspecteur de forme pour les couleurs et l'opacité. Utilisez l'onglet Modifier de l'inspecteur de forme pour la distance du tampon, l'unité du tampon, l'utilisation du tampon d'identification, les aides de modification et la suppression.`
}, Ut = {
	en: {
		"draw.multiPoint.started": "{type} drawing started with 1 point",
		"draw.multiPoint.pointAdded": "Point added {count} points total",
		"draw.multiPoint.pointRemoved": "Point removed {count} points remaining",
		"draw.multiPoint.canceled": "Drawing canceled",
		"draw.multiPoint.completed": "{type} completed with {count} points",
		"draw.multiPoint.notEnoughPoints": "Not enough points for {type} minimum {min} required",
		"draw.graphic.created": "{type} created",
		"draw.graphic.selected": "{type} selected",
		"draw.graphic.deselected": "Graphic deselected",
		"draw.graphic.deleted": "Graphic deleted",
		"draw.graphic.updated": "Graphic updated",
		"draw.graphic.none": "No graphic found",
		"draw.tool.canceled": "Drawing tool canceled",
		"draw.point.resize.unsupported": "Resizing not supported for point graphics",
		"draw.point.rotate.unsupported": "Rotation not supported for point graphics",
		"draw.move.up": "Moved up",
		"draw.move.down": "Moved down",
		"draw.move.left": "Moved left",
		"draw.move.right": "Moved right",
		"draw.resize.increase": "Increased size",
		"draw.resize.decrease": "Decreased size",
		"draw.rotate.clockwise": "Rotated clockwise",
		"draw.rotate.counterclockwise": "Rotated counter-clockwise",
		"draw.button.point": "Draw point",
		"draw.button.polyline": "Draw line",
		"draw.button.polygon": "Draw polygon",
		"draw.button.rectangle": "Draw rectangle",
		"draw.button.circle": "Draw circle",
		"draw.button.measurements": "Toggle measurements",
		"draw.point.tooltip": "Draw point",
		"draw.polyline.tooltip": "Draw polyline",
		"draw.polygon.tooltip": "Draw polygon",
		"draw.circle.tooltip": "Draw circle",
		"draw.rectangle.tooltip": "Draw rectangle",
		"draw.edit.tooltip": "Edit Mode",
		"draw.measurements.tooltip": "Toggle measurements",
		"draw.measurements.enabled": "Measurements displayed",
		"draw.measurements.disabled": "Measurements hidden",
		"draw.measurements.summary": "Draw measurements. {measurements}",
		"draw.measurements.none": "No draw measurements available",
		"draw.measurements.segment": "Segment {index} distance {distance}",
		"draw.measurements.area": "Area {area}",
		"draw.measurements.unit.kilometers": "{value} kilometers",
		"draw.measurements.unit.meters": "{value} meters",
		"draw.measurements.unit.centimeters": "{value} centimeters",
		"draw.measurements.unit.squareKilometers": "{value} square kilometers",
		"draw.measurements.unit.squareMeters": "{value} square meters",
		"draw.keyboard.namespace": "Draw Tools",
		"draw.keyboard.key.point": "Draw a point",
		"draw.keyboard.key.polyline": "Draw a line",
		"draw.keyboard.key.polygon": "Draw a polygon",
		"draw.keyboard.key.circle": "Draw a circle",
		"draw.keyboard.key.rectangle": "Draw a rectangle",
		"draw.keyboard.key.inspector": "Shape inspector",
		"draw.keyboard.key.defaults": "Default settings",
		"draw.graphic.moved": "Graphic moved",
		"draw.settings.tooltip": "Default draw settings",
		"draw.settings.appearance": "Appearance",
		"draw.settings.color.hue": "Hue",
		"draw.settings.color.copy": "Copy colour",
		"draw.settings.color.edit": "Edit",
		"draw.settings.color.done": "Done",
		"draw.settings.opacity": "Opacity",
		"draw.settings.buffer": "Buffer",
		"draw.settings.buffer.distance": "Distance",
		"draw.settings.buffer.unit": "Unit",
		"draw.settings.identifyBufferUses": "Identify buffer uses",
		"draw.settings.identify.shapeAndBuffer": "Original Shape + Buffer",
		"draw.settings.identify.shapeAndBuffer.description": "Identify within the original shape and the buffer. This is the default.",
		"draw.settings.identify.originalShapeOnly": "Original Shape Only",
		"draw.settings.identify.originalShapeOnly.description": "Identify only within the original shape and not the buffer.",
		"draw.settings.identify.bufferOnly": "Buffer Only",
		"draw.settings.identify.bufferOnly.description": "Identify only the buffer and omit the shape itself.",
		"draw.settings.unit.meters": "Meters",
		"draw.settings.unit.kilometers": "Kilometers",
		"draw.settings.unit.feet": "Feet",
		"draw.settings.unit.usFeet": "US feet",
		"draw.settings.unit.yards": "Yards",
		"draw.settings.unit.miles": "Miles",
		"draw.settings.unit.nauticalMiles": "Nautical miles",
		"draw.settings.unit.centimeters": "Centimeters",
		"draw.settings.unit.millimeters": "Millimeters",
		"draw.settings.unit.decimeters": "Decimeters",
		"draw.settings.unit.inches": "Inches",
		"draw.defaults.title": "Draw Defaults",
		"draw.defaults.helper": "These settings apply to new shapes you draw. They do not change the currently selected shape.",
		"draw.defaults.color.shape": "Default fill colour",
		"draw.defaults.color.border": "Default border colour",
		"draw.defaults.color.buffer": "Default buffer colour",
		"draw.defaults.opacity": "Default shape opacity",
		"draw.defaults.buffer.distance": "Default buffer distance",
		"draw.defaults.identifyBufferUses": "Identify buffer options for new shapes",
		"draw.export.shape.tooltip": "Export selected shape",
		"draw.export.all.tooltip": "Export all shapes",
		"draw.export.action.exportShort": "Export",
		"draw.export.shape.success": "Shape exported",
		"draw.export.all.success": "Shapes exported",
		"draw.export.none": "No shapes to export",
		"draw.import.title": "Import shape",
		"draw.import.tooltip": "Import shape",
		"draw.import.action.importShort": "Import",
		"draw.import.file.label": "Upload a file",
		"draw.import.file.help": "Select one or more draw shape JSON files.",
		"draw.import.error.invalid": "The selected file is not a valid draw shape export.",
		"draw.import.success": "Imported {count} shapes",
		"draw.details.tooltip": "Inspect shape details",
		"draw.details.shapeType": "Shape Type",
		"draw.details.shapeType.point": "Point",
		"draw.details.shapeType.polyline": "Line",
		"draw.details.shapeType.polygon": "Polygon",
		"draw.details.shapeType.rectangle": "Rectangle",
		"draw.details.shapeType.circle": "Circle",
		"draw.details.shapeType.unknown": "Unknown",
		"draw.details.measurements": "Measurements",
		"draw.details.measurements.length": "Length",
		"draw.details.measurements.perimeter": "Perimeter",
		"draw.details.measurements.area": "Area",
		"draw.details.measurements.bufferArea": "Buffer Area",
		"draw.details.measurements.bufferPerimeter": "Buffer Perimeter",
		"draw.details.segments": "Segments",
		"draw.details.location": "Location",
		"draw.details.location.centroid": "Centroid",
		"draw.details.vertices": "Vertices",
		"draw.details.vertexCount": "Vertex Count",
		"draw.details.showOnMap.areaLabel": "Area Label",
		"draw.details.showOnMap.segmentLength": "Segment Length",
		"draw.details.showOnMap.segmentLetters": "Segment letters",
		"draw.details.showOnMap.vertexNumbers": "Vertex numbers",
		"draw.details.extent": "Bounding Extent",
		"draw.details.extent.north": "North",
		"draw.details.extent.south": "South",
		"draw.details.extent.east": "East",
		"draw.details.extent.west": "West",
		"draw.details.featureCounts": "Features",
		"draw.details.featureCounts.shape": "Shape",
		"draw.details.featureCounts.buffer": "Buffer",
		"draw.details.featureCounts.total": "Total",
		"draw.details.featureCounts.totalHint.shapeBuffer": "The total includes features identified inside the shape and its buffer.",
		"draw.details.featureCounts.totalHint.shape": "The total includes only features identified inside the shape.",
		"draw.details.featureCounts.totalHint.bufferOnly": "The total includes only features identified inside the buffer.",
		"draw.details.featureCounts.totalHint.noBuffer": "The total includes features identified inside the shape because no buffer is applied.",
		"draw.details.identify.loading": "Counting features",
		"draw.details.action.copyCoordinates": "Copy Coordinates",
		"draw.details.action.copySegment": "Copy Segment",
		"draw.details.action.copyAllSegments": "Copy All Segments",
		"draw.details.action.copyAllCoordinates": "Copy All Vertex Coordinates",
		"draw.details.action.copyAllCoordinatesShort": "Copy All",
		"draw.details.action.runIdentify": "Run Identify",
		"draw.details.action.deleteShape": "Delete Shape",
		"draw.details.action.deleteShapeShort": "Delete",
		"draw.details.loading": "Loading shape details",
		"draw.details.notAvailable": "Not available",
		"draw.details.coordinatesCopied": "Coordinates copied",
		"draw.details.coordinatesCopyFailed": "Unable to copy coordinates",
		"draw.details.segmentCopied": "Segment copied",
		"draw.details.segmentCopyFailed": "Unable to copy segment",
		"draw.inspector.title": "Shape Inspector",
		"draw.inspector.empty": "Select a shape to inspect.",
		"draw.inspector.tab.details": "Details",
		"draw.inspector.tab.style": "Style",
		"draw.inspector.tab.edit": "Edit",
		"draw.inspector.subtitle.selected": "selected",
		"draw.inspector.subtitle.vertices": "{count} vertices",
		"draw.inspector.subtitle.segments": "{count} segments",
		"draw.inspector.state": "State",
		"draw.inspector.state.selected": "Selected",
		"draw.inspector.state.editing": "Editing",
		"draw.inspector.labels": "Labels",
		"draw.inspector.geometry": "Geometry",
		"draw.inspector.style.notice": "Applies only to the selected shape. Global defaults stay under Draw Defaults.",
		"draw.inspector.style.presets": "Presets",
		"draw.inspector.style.preset.default": "Default",
		"draw.inspector.style.preset.highlight": "Highlight",
		"draw.inspector.style.preset.muted": "Muted",
		"draw.inspector.style.preset.alert": "Alert",
		"draw.inspector.style.fillColor": "Fill colour",
		"draw.inspector.style.borderColor": "Border colour",
		"draw.inspector.style.bufferColor": "Buffer colour",
		"draw.inspector.edit.active": "Edit mode active",
		"draw.inspector.edit.shapeId": "Shape ID",
		"draw.inspector.edit.guidance": "Use map handles to resize or move the shape. Finish or cancel from this panel.",
		"draw.inspector.edit.vertexToggleHint": "Click the selected shape again to toggle vertex editing.",
		"draw.inspector.edit.aids": "Editing aids",
		"draw.inspector.edit.viewVertices": "View vertices in Details",
		"draw.inspector.action.reset": "Reset",
		"draw.inspector.action.cancel": "Cancel",
		"draw.inspector.action.done": "Done",
		"draw.inspector.action.yesDelete": "Yes, Delete",
		"draw.inspector.delete.confirm": "Are you sure you want to delete this shape?",
		"draw.shape": "shape",
		"draw.point": "point",
		"draw.multipoint": "multipoint",
		"draw.polyline": "polyline",
		"draw.polygon": "polygon",
		"draw.rectangle": "rectangle",
		"draw.circle": "circle",
		"draw.unknown": "unknown"
	},
	fr: {
		"draw.multiPoint.started": "Dessin de {type} commencé avec 1 point",
		"draw.multiPoint.pointAdded": "Point ajouté",
		"draw.multiPoint.pointRemoved": "Point supprimé",
		"draw.multiPoint.canceled": "Dessin annulé",
		"draw.multiPoint.completed": "{type} terminé avec {count} points",
		"draw.multiPoint.notEnoughPoints": "Pas assez de points pour {type}",
		"draw.graphic.created": "{type} créé",
		"draw.graphic.selected": "{type} sélectionné",
		"draw.graphic.deselected": "Graphique désélectionné",
		"draw.graphic.deleted": "Graphique supprimé",
		"draw.graphic.updated": "Graphique mis à jour",
		"draw.graphic.none": "Aucun graphique trouvé",
		"draw.tool.canceled": "Outil de dessin annulé",
		"draw.point.resize.unsupported": "Le redimensionnement n'est pas pris en charge pour les points",
		"draw.point.rotate.unsupported": "La rotation n'est pas prise en charge pour les points",
		"draw.move.up": "Déplacé vers le haut",
		"draw.move.down": "Déplacé vers le bas",
		"draw.move.left": "Déplacé vers la gauche",
		"draw.move.right": "Déplacé vers la droite",
		"draw.resize.increase": "Taille augmentée",
		"draw.resize.decrease": "Taille réduite",
		"draw.rotate.clockwise": "Rotation dans le sens horaire",
		"draw.rotate.counterclockwise": "Rotation dans le sens antihoraire",
		"draw.button.point": "Dessiner un point",
		"draw.button.polyline": "Dessiner une ligne",
		"draw.button.polygon": "Dessiner un polygone",
		"draw.button.rectangle": "Dessiner un rectangle",
		"draw.button.circle": "Dessiner un cercle",
		"draw.button.measurements": "Afficher ou masquer les mesures",
		"draw.point.tooltip": "Dessiner un point",
		"draw.polyline.tooltip": "Dessiner une polyligne",
		"draw.polygon.tooltip": "Dessiner un polygone",
		"draw.circle.tooltip": "Dessiner un cercle",
		"draw.rectangle.tooltip": "Dessiner un rectangle",
		"draw.edit.tooltip": "Mode édition",
		"draw.measurements.tooltip": "Afficher ou masquer les mesures",
		"draw.measurements.enabled": "Mesures affichees",
		"draw.measurements.disabled": "Mesures masquees",
		"draw.measurements.summary": "Mesures de dessin. {measurements}",
		"draw.measurements.none": "Aucune mesure disponible",
		"draw.measurements.segment": "Segment {index} distance {distance}",
		"draw.measurements.area": "Superficie {area}",
		"draw.measurements.unit.kilometers": "{value} kilometres",
		"draw.measurements.unit.meters": "{value} metres",
		"draw.measurements.unit.centimeters": "{value} centimetres",
		"draw.measurements.unit.squareKilometers": "{value} kilometres carres",
		"draw.measurements.unit.squareMeters": "{value} metres carres",
		"draw.keyboard.namespace": "Outils de dessin",
		"draw.keyboard.key.point": "Dessine un point",
		"draw.keyboard.key.polyline": "Dessine une ligne",
		"draw.keyboard.key.polygon": "Dessine un polygone",
		"draw.keyboard.key.circle": "Dessine un cercle",
		"draw.keyboard.key.rectangle": "Dessine un rectangle",
		"draw.keyboard.key.inspector": "Inspecteur de forme",
		"draw.keyboard.key.defaults": "Parametres par defaut",
		"draw.graphic.moved": "Graphique déplacé",
		"draw.settings.tooltip": "Parametres de dessin par defaut",
		"draw.settings.appearance": "Apparence",
		"draw.settings.color.hue": "Teinte",
		"draw.settings.color.copy": "Copier la couleur",
		"draw.settings.color.edit": "Modifier",
		"draw.settings.color.done": "Termine",
		"draw.settings.opacity": "Opacite",
		"draw.settings.buffer": "Tampon",
		"draw.settings.buffer.distance": "Distance",
		"draw.settings.buffer.unit": "Unite",
		"draw.settings.identifyBufferUses": "Le tampon d'identification utilise",
		"draw.settings.identify.shapeAndBuffer": "Forme originale + tampon",
		"draw.settings.identify.shapeAndBuffer.description": "Identifier dans la forme originale et le tampon. C'est la valeur par defaut.",
		"draw.settings.identify.originalShapeOnly": "Forme originale seulement",
		"draw.settings.identify.originalShapeOnly.description": "Identifier seulement dans la forme originale et non dans le tampon.",
		"draw.settings.identify.bufferOnly": "Tampon seulement",
		"draw.settings.identify.bufferOnly.description": "Identifier seulement le tampon et exclure la forme elle-meme.",
		"draw.settings.unit.meters": "Metres",
		"draw.settings.unit.kilometers": "Kilometres",
		"draw.settings.unit.feet": "Pieds",
		"draw.settings.unit.usFeet": "Pieds US",
		"draw.settings.unit.yards": "Verges",
		"draw.settings.unit.miles": "Milles",
		"draw.settings.unit.nauticalMiles": "Milles nautiques",
		"draw.settings.unit.centimeters": "Centimetres",
		"draw.settings.unit.millimeters": "Millimetres",
		"draw.settings.unit.decimeters": "Decimetres",
		"draw.settings.unit.inches": "Pouces",
		"draw.defaults.title": "Valeurs par defaut du dessin",
		"draw.defaults.helper": "Ces parametres s'appliquent aux nouvelles formes dessinees. Ils ne changent pas la forme selectionnee.",
		"draw.defaults.color.shape": "Couleur de remplissage par defaut",
		"draw.defaults.color.border": "Couleur de bordure par defaut",
		"draw.defaults.color.buffer": "Couleur du tampon par defaut",
		"draw.defaults.opacity": "Opacite de la forme par defaut",
		"draw.defaults.buffer.distance": "Distance du tampon par defaut",
		"draw.defaults.identifyBufferUses": "Options du tampon d'identification pour les nouvelles formes",
		"draw.export.shape.tooltip": "Exporter la forme selectionnee",
		"draw.export.all.tooltip": "Exporter toutes les formes",
		"draw.export.action.exportShort": "Exporter",
		"draw.export.shape.success": "Forme exportee",
		"draw.export.all.success": "Formes exportees",
		"draw.export.none": "Aucune forme a exporter",
		"draw.import.title": "Importer une forme",
		"draw.import.tooltip": "Importer une forme",
		"draw.import.action.importShort": "Importer",
		"draw.import.file.label": "Televerser un fichier",
		"draw.import.file.help": "Selectionnez un ou plusieurs fichiers JSON de formes dessinees.",
		"draw.import.error.invalid": "Le fichier selectionne n'est pas une exportation de forme valide.",
		"draw.import.success": "{count} formes importees",
		"draw.details.tooltip": "Inspecter les details de la forme",
		"draw.details.shapeType": "Type de forme",
		"draw.details.shapeType.point": "Point",
		"draw.details.shapeType.polyline": "Ligne",
		"draw.details.shapeType.polygon": "Polygone",
		"draw.details.shapeType.rectangle": "Rectangle",
		"draw.details.shapeType.circle": "Cercle",
		"draw.details.shapeType.unknown": "Inconnu",
		"draw.details.measurements": "Mesures",
		"draw.details.measurements.length": "Longueur",
		"draw.details.measurements.perimeter": "Perimetre",
		"draw.details.measurements.area": "Superficie",
		"draw.details.measurements.bufferArea": "Superficie du tampon",
		"draw.details.measurements.bufferPerimeter": "Perimetre du tampon",
		"draw.details.segments": "Segments",
		"draw.details.location": "Emplacement",
		"draw.details.location.centroid": "Centroide",
		"draw.details.vertices": "Sommets",
		"draw.details.vertexCount": "Nombre de sommets",
		"draw.details.showOnMap.areaLabel": "Etiquette de superficie",
		"draw.details.showOnMap.segmentLength": "Longueur du segment",
		"draw.details.showOnMap.segmentLetters": "Lettres des segments",
		"draw.details.showOnMap.vertexNumbers": "Numeros des sommets",
		"draw.details.extent": "Etendue englobante",
		"draw.details.extent.north": "Nord",
		"draw.details.extent.south": "Sud",
		"draw.details.extent.east": "Est",
		"draw.details.extent.west": "Ouest",
		"draw.details.featureCounts": "Entites",
		"draw.details.featureCounts.shape": "Forme",
		"draw.details.featureCounts.buffer": "Tampon",
		"draw.details.featureCounts.total": "Total",
		"draw.details.featureCounts.totalHint.shapeBuffer": "Le total comprend les entites identifiees dans la forme et son tampon.",
		"draw.details.featureCounts.totalHint.shape": "Le total comprend seulement les entites identifiees dans la forme.",
		"draw.details.featureCounts.totalHint.bufferOnly": "Le total comprend seulement les entites identifiees dans le tampon.",
		"draw.details.featureCounts.totalHint.noBuffer": "Le total comprend les entites identifiees dans la forme parce qu'aucun tampon n'est applique.",
		"draw.details.identify.loading": "Denombrement des entites",
		"draw.details.action.copyCoordinates": "Copier les coordonnees",
		"draw.details.action.copySegment": "Copier le segment",
		"draw.details.action.copyAllSegments": "Copier tous les segments",
		"draw.details.action.copyAllCoordinates": "Copier toutes les coordonnees des sommets",
		"draw.details.action.copyAllCoordinatesShort": "Tout copier",
		"draw.details.action.runIdentify": "Executer l'identification",
		"draw.details.action.deleteShape": "Supprimer la forme",
		"draw.details.action.deleteShapeShort": "Supprimer",
		"draw.details.loading": "Chargement des details de la forme",
		"draw.details.notAvailable": "Non disponible",
		"draw.details.coordinatesCopied": "Coordonnees copiees",
		"draw.details.coordinatesCopyFailed": "Impossible de copier les coordonnees",
		"draw.details.segmentCopied": "Segment copie",
		"draw.details.segmentCopyFailed": "Impossible de copier le segment",
		"draw.inspector.title": "Inspecteur de forme",
		"draw.inspector.empty": "Selectionnez une forme a inspecter.",
		"draw.inspector.tab.details": "Details",
		"draw.inspector.tab.style": "Style",
		"draw.inspector.tab.edit": "Modifier",
		"draw.inspector.subtitle.selected": "selectionnee",
		"draw.inspector.subtitle.vertices": "{count} sommets",
		"draw.inspector.subtitle.segments": "{count} segments",
		"draw.inspector.state": "Etat",
		"draw.inspector.state.selected": "Selectionnee",
		"draw.inspector.state.editing": "Modification",
		"draw.inspector.labels": "Etiquettes",
		"draw.inspector.geometry": "Geometrie",
		"draw.inspector.style.notice": "S'applique seulement a la forme selectionnee. Les valeurs globales restent dans Valeurs par defaut du dessin.",
		"draw.inspector.style.presets": "Prereglages",
		"draw.inspector.style.preset.default": "Defaut",
		"draw.inspector.style.preset.highlight": "Surligner",
		"draw.inspector.style.preset.muted": "Attenue",
		"draw.inspector.style.preset.alert": "Alerte",
		"draw.inspector.style.fillColor": "Couleur de remplissage",
		"draw.inspector.style.borderColor": "Couleur de bordure",
		"draw.inspector.style.bufferColor": "Couleur du tampon",
		"draw.inspector.edit.active": "Mode modification actif",
		"draw.inspector.edit.shapeId": "ID de forme",
		"draw.inspector.edit.guidance": "Utilisez les poignees de la carte pour redimensionner ou deplacer la forme. Terminez ou annulez depuis ce panneau.",
		"draw.inspector.edit.vertexToggleHint": "Cliquez a nouveau sur la forme selectionnee pour activer ou desactiver la modification des sommets.",
		"draw.inspector.edit.aids": "Aides de modification",
		"draw.inspector.edit.viewVertices": "Afficher les sommets dans Details",
		"draw.inspector.action.reset": "Reinitialiser",
		"draw.inspector.action.cancel": "Annuler",
		"draw.inspector.action.done": "Termine",
		"draw.inspector.action.yesDelete": "Oui, supprimer",
		"draw.inspector.delete.confirm": "Etes-vous sur de vouloir supprimer cette forme?",
		"draw.shape": "forme",
		"draw.point": "indiquer",
		"draw.multipoint": "multipoint",
		"draw.polyline": "polyligne",
		"draw.polygon": "polygone",
		"draw.rectangle": "rectangle",
		"draw.circle": "cercle",
		"draw.unknown": "inconnue"
	}
}, Wt = /* @__PURE__ */ e({ default: () => Gt }), Gt = class extends Qe {
	unregisterIdentifyGeometryProvider;
	eventHandlers = [];
	destroyDrawComponent;
	registerHelpSection() {
		E(this.$vApp.$pinia).addDynamicSection({
			id: Vt,
			markdown: Ht
		});
	}
	unregisterHelpSection() {
		E(this.$vApp.$pinia).removeDynamicSection(Vt);
	}
	resetShapeInspectionState() {
		let e = fe(this.$vApp.$pinia);
		e.setShapeDetailsPickEnabled(!1), e.setShapeDetailsLabelsVisible(!1), e.setShapeDetailsLabelsUseSettings(!1), e.setShapeDetailsActiveTab("details"), e.clearMeasurementInteraction();
	}
	async init() {
		Object.entries(Ut).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e)), this._parseConfig(this.config);
		let e = {};
		this.$iApi.panel.get("draw-settings") || (e[ue] = {
			screens: { "draw-settings-screen": () => xe(import("./draw-defaults-screen-DQ072Zzr.js")) },
			style: { width: "350px" },
			button: {
				tooltip: "draw.defaults.title",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.31-.6-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.05.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.22.37.31.6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.18-.58 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z\"/></svg>"
			},
			alertName: "draw.defaults.title"
		}), this.$iApi.panel.get("draw-shape-details") || (e[N] = {
			screens: { "draw-shape-details-screen": () => xe(import("./shape-inspector-screen-BXLQ8nVz.js")) },
			style: { width: "350px" },
			button: {
				tooltip: "draw.inspector.title",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M11 10h2v7h-2v-7zm0-3h2v2h-2V7zm1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z\"/></svg>"
			},
			alertName: "draw.inspector.title"
		}), this.$iApi.panel.get("draw-import") || (e[k] = {
			screens: { "draw-import-shape-screen": () => xe(import("./import-shape-screen-D9dOQmuS.js")) },
			style: { width: "350px" },
			alertName: "draw.import.title"
		}), Object.keys(e).length && (this.$iApi.panel.register(e, { i18n: { messages: Ut } }), this.handlePanelTeleports([
			ue,
			N,
			k
		])), fe(this.$vApp.$pinia).supportedTypes.forEach((e) => {
			let t = `${e.type}-icon`;
			this.$iApi.component(t, xe(Ue(/* #__PURE__ */ Object.assign({
				"./icons/circle-icon.vue": () => import("./circle-icon-DS4mkzuB.js"),
				"./icons/copy-icon.vue": () => import("./copy-icon-C5hknN_A.js").then((e) => e.n),
				"./icons/delete-icon.vue": () => import("./delete-icon-D5_4RJzx.js").then((e) => e.n),
				"./icons/download-icon.vue": () => import("./download-icon-CfXMdF48.js").then((e) => e.n),
				"./icons/edit-icon.vue": () => import("./edit-icon-CmXslnZl.js"),
				"./icons/identify-icon.vue": () => import("./identify-icon-DJ4o4j0G.js").then((e) => e.n),
				"./icons/info-icon.vue": () => import("./info-icon-CUfAYJF_.js").then((e) => e.n),
				"./icons/measure-icon.vue": () => import("./measure-icon-CiHlctzx.js"),
				"./icons/point-icon.vue": () => import("./point-icon-D8a5fqrN.js"),
				"./icons/polygon-icon.vue": () => import("./polygon-icon-CzcGvH5l.js"),
				"./icons/polyline-icon.vue": () => import("./polyline-icon-BrnUJLRh.js"),
				"./icons/rectangle-icon.vue": () => import("./rectangle-icon-gtDVgjBp.js"),
				"./icons/settings-icon.vue": () => import("./settings-icon-DWqdxGzl.js").then((e) => e.n),
				"./icons/upload-icon.vue": () => import("./upload-icon-CqFt-WO1.js").then((e) => e.n)
			}), `./icons/${e.type}-icon.vue`, 3)));
		}), this.destroyDrawComponent?.();
		let t = this.$vApp.$el.getElementsByClassName("inner-shell")[0], n = document.createElement("div");
		t.appendChild(n);
		let { destroy: r } = this.mount(Bt, {
			element: n,
			app: this.$element
		});
		this.destroyDrawComponent = () => {
			r(), n.remove();
		};
	}
	async added() {
		this.unregisterIdentifyGeometryProvider ||= this.$iApi.geo.map.registerIdentifyGeometryProvider(this), this.registerHelpSection(), this.eventHandlers.length || (this.eventHandlers.push(this.$iApi.event.on(n.FIXTURE_ADDED, (e) => {
			e.id === "help" && this.registerHelpSection();
		})), await this.$iApi.geo.map.loadPromise(), this.init());
	}
	removed() {
		if (this.unregisterIdentifyGeometryProvider?.(), this.unregisterIdentifyGeometryProvider = void 0, this.eventHandlers.forEach((e) => this.$iApi.event.off(e)), this.eventHandlers = [], this.unregisterHelpSection(), this.resetShapeInspectionState(), this.destroyDrawComponent?.(), this.destroyDrawComponent = void 0, this.$iApi.fixture.exists("appbar")) {
			let e = r(this.$vApp.$pinia);
			e.removeButton(ue), e.removeButton(N), e.removeButton(k);
		}
		this.$iApi.panel.remove(ue), this.$iApi.panel.remove(N), this.$iApi.panel.remove(k);
	}
};
//#endregion
export { st as a, mt as c, H as d, Gt as default, Ve as f, _t as i, ft as l, St as n, ut as o, xt as r, ht as s, Wt as t, Re as u };
