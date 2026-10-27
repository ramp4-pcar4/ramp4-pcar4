import { t as e } from "./rolldown-runtime-Dy4uBu1J.js";
import { B as t, V as n, W as r, Z as i, nt as a, s as o, st as s } from "./main-BToQJL7R.js";
import { A as c, E as l, M as u, O as d, P as f, T as p, _ as m, b as h, d as g, f as _, g as v, h as y, i as b, j as ee, k as te, l as x, m as S, n as ne, p as re, r as C, s as w, u as T, v as E, w as ie, x as D, y as O } from "./esri-vcEQ1sbb.js";
import { t as k } from "./store-Dkwhv6mB.js";
import { _ as ae, a as oe, c as se, d as ce, f as le, g as A, h as ue, l as de, n as fe, o as pe, p as j, r as me, s as M, t as N, u as he, v as ge, y as P } from "./store-5SMg2V_Z.js";
import { Fragment as _e, createCommentVNode as ve, createElementBlock as ye, createElementVNode as be, defineComponent as xe, inject as Se, markRaw as F, nextTick as Ce, onMounted as we, onUnmounted as Te, openBlock as Ee, reactive as De, ref as Oe, toDisplayString as ke, toRaw as I, unref as Ae, useTemplateRef as je, watch as L } from "vue";
import { useI18n as Me } from "vue-i18n";
import Ne from "file-saver";
//#region src/fixtures/draw/shape-io.ts
var Pe = "ramp4-draw-shapes", Fe = "json", R = (e) => typeof e == "object" && !!e && !Array.isArray(e), Ie = (e) => JSON.parse(JSON.stringify(e)), Le = (e, t) => R(e) ? e : R(t) ? t : {}, z = (e) => {
	let t = e.geometry;
	return t ? Ie(typeof t.toJSON == "function" ? t.toJSON() : t) : void 0;
}, Re = (e) => typeof e.attributes?.type == "string" ? e.attributes.type : e.geometry?.type, ze = (e) => typeof e.attributes?.id == "string" ? e.attributes.id : typeof e.id == "string" ? e.id : void 0, B = (e) => {
	let t = z(e), n = Re(e);
	if (!t || !n) return;
	let r = ze(e);
	return {
		...r ? { id: r } : {},
		type: n,
		geometry: t,
		settings: {
			drawStyle: ge(e.attributes),
			drawBuffer: ue(e.attributes),
			drawIdentifyBufferMode: A(e.attributes),
			drawMapLabels: ae(e.attributes)
		}
	};
}, Be = (e) => ({
	fileType: Pe,
	version: 1,
	exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
	shapes: e.flatMap((e) => {
		let t = B(e);
		return t ? [t] : [];
	})
}), Ve = (e = "ramp-draw-shapes") => `${e}-${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.${Fe}`, He = (e, t) => {
	let n = Be(e);
	if (!n.shapes.length) return !1;
	let r = new Blob([JSON.stringify(n, null, 2)], { type: "application/json;charset=utf-8" });
	return Ne.saveAs(r, t ?? Ve()), !0;
}, Ue = (e) => {
	if (Array.isArray(e)) return e;
	if (R(e)) return Array.isArray(e.shapes) ? (e.fileType ?? e.format) === "ramp4-draw-shapes" ? e.shapes : void 0 : R(e.geometry) ? [e] : void 0;
}, We = (e) => {
	if (!R(e) || !R(e.geometry)) return;
	let t = R(e.attributes) ? e.attributes : {}, n = R(e.settings) ? e.settings : e, r = Ie(e.geometry), i = E(r);
	if (!i) return;
	let a = typeof e.type == "string" ? e.type : typeof t.type == "string" ? t.type : i.type;
	return {
		id: typeof e.id == "string" ? e.id : void 0,
		type: a,
		geometry: typeof i.toJSON == "function" ? i.toJSON() : r,
		settings: {
			drawStyle: ce(Le(n.drawStyle, t.drawStyle)),
			drawBuffer: de(Le(n.drawBuffer, t.drawBuffer)),
			drawIdentifyBufferMode: j(n.drawIdentifyBufferMode ?? t.drawIdentifyBufferMode),
			drawMapLabels: he(Le(n.drawMapLabels, t.drawMapLabels))
		}
	};
}, V = (e) => {
	let t = Ue(e);
	if (Array.isArray(t)) {
		if (t.length) {
			let e = t.map(We);
			return e.every(Boolean) ? e : void 0;
		}
		return [];
	}
}, Ge = async (e) => {
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
		let i = V(e);
		if (Array.isArray(i)) {
			if (i.length) n.push(...i);
			else return [];
		} else throw Error(t);
	}
	return n;
}, Ke = (e, t) => {
	let n = B(e);
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
}, qe = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, Je = "RampDrawGraphicsLayer", Ye = "RampDrawEditGraphicsLayer", Xe = "RampDrawHighlightGraphicsLayer", Ze = N(), Qe = (e, t) => {
	let n = t.opacity / 100, r = se(n + .35, 0, 1);
	switch (e) {
		case "point":
		case "multipoint": return new c({
			color: P(t.fillColor, n),
			size: 12,
			outline: {
				color: P(t.borderColor, r),
				width: 1.5
			}
		});
		case "polyline": return new te({
			color: P(t.borderColor, r),
			width: 2
		});
		default: return new d({
			color: P(t.fillColor, n),
			outline: {
				color: P(t.borderColor, r),
				width: 1.5
			}
		});
	}
}, $e = (e) => new d({
	color: P(e.bufferColor, e.opacity / 100 * .65),
	outline: {
		color: P(e.bufferColor, 0),
		width: 0
	}
}), et = async () => {
	T() || await g();
}, tt = (e, t) => {
	let n = H(e, t);
	if (e && n) {
		if (e.type !== "polygon") return n;
		try {
			return w(n, e) ?? void 0;
		} catch {
			return n;
		}
	}
}, nt = () => Ze.bufferMath === "geodesic", H = (e, t) => {
	if (e && t.distance) {
		if (nt() && T()) try {
			return x(e, t.distance, { unit: t.unit }) ?? void 0;
		} catch {}
		try {
			return C(e, t.distance, { unit: t.unit }) ?? void 0;
		} catch {
			return;
		}
	}
}, rt = (e, t, n) => {
	let r = e.attributes?.id, i = H(e.geometry, n);
	if (r && i) return new O({
		geometry: i,
		symbol: $e(t),
		attributes: { drawBufferFor: r }
	});
}, it = [
	{ type: "point" },
	{ type: "polyline" },
	{ type: "polygon" },
	{ type: "circle" },
	{ type: "rectangle" }
], at = 5, ot = 15;
function st(e, t, n) {
	return e.type === "polygon" ? h.execute(e, t) : h.execute(e, n);
}
function U(e, t, n) {
	switch (n) {
		case "shape": return e;
		case "buffer-only": return tt(e, t);
		default: return H(e, t) ?? e;
	}
}
function ct(e, t, n) {
	return n === "shape" ? e : H(e, t) ?? e;
}
var lt = class extends o {
	store;
	constructor(e, t) {
		super(e, t), this.store = N(this.$vApp.$pinia), et();
	}
	_parseConfig(e) {
		if (!e) this.store.setSupportedTypes(it);
		else {
			if (e.types !== void 0) {
				let t = (e.types === null ? [] : e.types).filter((e) => e.enabled !== !1);
				this.store.setSupportedTypes(t);
			} else this.store.setSupportedTypes(it);
			e.defaultTool && this.store.setActiveTool(e.defaultTool), e.bufferMath && this.store.setBufferMath(e.bufferMath);
		}
	}
	get graphicsLayerId() {
		return Je;
	}
	getShapeIds() {
		return this.store.graphics.map((e) => e.id);
	}
	async importShapes(e) {
		let t = V(typeof e == "string" || e instanceof URL ? await ut(e) : e);
		if (Array.isArray(t)) return t.length && this.store.requestImportShapes(t), t.length;
		throw Error("Invalid draw shape payload.");
	}
	exportShapes(e) {
		return Be(this.resolveExportGraphics(e));
	}
	downloadShapes(e, t) {
		let n = e && typeof e == "object" && !Array.isArray(e) ? e.fileName : void 0;
		return He(this.resolveExportGraphics(e), t ?? n);
	}
	suppressIdentify(e) {
		if (this.store.identifyGeometryGraphicId) return !1;
		let t = this.store.activeTool, n = t === null || t === "", r = t === "edit", i = t !== null && t !== "" && !r, a = this.$iApi.panel.opened.some((e) => e.id === M), o = this.store.shapeDetailsPickEnabled && n, s = o || a || r ? this.getHitDrawGraphic(e, !1) : void 0, c = s?.id ?? s?.attributes?.id;
		return (o || a) && c ? (this.store.selectGraphic(c), me(this.$iApi, "details"), this.store.requestShapePanelFocus(), !0) : !c && a ? (this.$iApi.panel.close(M), this.store.setShapeDetailsPickEnabled(!1), !0) : !c && o ? !0 : !c && r ? (this.store.requestStopEditMode(), !0) : i || r;
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
			let t = ze(e);
			return t ? r.has(t) : !1;
		});
	}
	getHitDrawGraphic(e, t = !0) {
		if (this.store.identifyGeometryGraphicId) return this.store.graphics.find((e) => e.id === this.store.identifyGeometryGraphicId);
		let n = e.mapPoint.toESRI(), r = e.input === "touch" ? ot : at, i = this.$iApi.geo.query.makeClickBuffer(e.mapPoint, r).toESRI();
		return this.store.graphics.slice().reverse().find((e) => {
			let r = I(e.geometry);
			if (!r) return !1;
			let a = ue(e.attributes), o = A(e.attributes);
			return st(t ? ct(r, a, o) : r, n, i);
		});
	}
	getIdentifyGeometry(e) {
		let t = this.getHitDrawGraphic(e);
		if (!t?.geometry) return;
		let n = U(I(t.geometry), ue(t.attributes), A(t.attributes));
		if (n) return this.$iApi.geo.geom.geomEsriToRamp(n, t.id ?? t.attributes?.id);
	}
	removeAll() {
		this.store.removeAll(), [
			Je,
			Ye,
			Xe
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
					drawStyle: ce(this.store.styleSettings),
					drawBuffer: de(this.store.bufferSettings),
					drawIdentifyBufferMode: this.store.identifyBufferMode,
					drawMapLabels: le()
				}
			};
		});
		await this.importShapes(t);
	}
	exportRampGeometry() {
		return this.store.graphics.map((e) => Ke(e, this.$iApi)).filter((e) => !!e).map((e) => e.ramp);
	}
};
async function ut(e) {
	let t = await fetch(e);
	if (!t.ok) throw Error(`Unable to import draw shapes from ${e.toString()}.`);
	return t.json();
}
//#endregion
//#region src/fixtures/draw/measurement-utils.ts
var dt = null, ft = (e, t, n) => `${e}:${t}:${n}`, pt = (e, t) => ft(e, "segment", t), mt = (e, t) => ft(e, "vertex", t), ht = (e) => {
	if (!e) return;
	let t = e.split(":");
	if (t.length < 3) return;
	let n = t.pop(), r = t.pop(), i = t.join(":"), a = Number(n);
	if (!(r !== "segment" && r !== "vertex" || !i || !Number.isInteger(a) || a < 0)) return {
		graphicId: i,
		kind: r,
		index: a
	};
}, gt = (e) => {
	let t = e + 1, n = "";
	for (; t > 0;) t--, n = String.fromCharCode(65 + t % 26) + n, t = Math.floor(t / 26);
	return n;
}, _t = (e, t, n) => e.toLocaleString(n, {
	maximumFractionDigits: t,
	minimumFractionDigits: 0
}), vt = (e, t, n, r) => e ? e(t, { value: n }) : `${n} ${r}`, yt = (e, t, n) => {
	let r = Math.abs(e);
	if (r >= 1e3) {
		let e = r / 1e3, i = _t(e, e >= 10 ? 1 : 2, t);
		return {
			display: `${i} km`,
			spoken: vt(n, "draw.measurements.unit.kilometers", i, "kilometers")
		};
	}
	if (r >= 1) {
		let e = _t(r, r >= 10 ? 0 : 1, t);
		return {
			display: `${e} m`,
			spoken: vt(n, "draw.measurements.unit.meters", e, "meters")
		};
	}
	let i = r * 100, a = _t(i, i >= 10 ? 0 : 1, t);
	return {
		display: `${a} cm`,
		spoken: vt(n, "draw.measurements.unit.centimeters", a, "centimeters")
	};
}, bt = (e, t, n) => {
	let r = Math.abs(e);
	if (r >= 1e6) {
		let e = r / 1e6, i = _t(e, e >= 10 ? 1 : 2, t);
		return {
			display: `${i} sq km`,
			spoken: vt(n, "draw.measurements.unit.squareKilometers", i, "square kilometers")
		};
	}
	let i = _t(r, r >= 100 ? 0 : r >= 10 ? 1 : 2, t);
	return {
		display: `${i} sq m`,
		spoken: vt(n, "draw.measurements.unit.squareMeters", i, "square meters")
	};
}, xt = (e) => !!e.spatialReference?.isGeographic || !!e.spatialReference?.isWebMercator, St = async () => {
	dt ??= Promise.all([re() ? Promise.resolve() : S(), v() ? Promise.resolve() : m()]).then(() => void 0), await dt;
}, Ct = (e, t) => t ? y(e, { unit: "meters" }) : D(e, { unit: "meters" }), W = (e) => {
	let t = xt(e);
	try {
		let n = Math.abs(Ct(e, t));
		if (Number.isFinite(n)) return n;
	} catch {}
	try {
		let n = Math.abs(Ct(e, !t));
		return Number.isFinite(n) ? n : void 0;
	} catch {
		return;
	}
}, wt = (e, t) => t ? _(e, { unit: "square-meters" }) : ne(e, { unit: "square-meters" }), Tt = (e) => {
	let t = xt(e);
	try {
		let n = Math.abs(wt(e, t));
		if (Number.isFinite(n)) return n;
	} catch {}
	try {
		let n = Math.abs(wt(e, !t));
		return Number.isFinite(n) ? n : void 0;
	} catch {
		return;
	}
}, G = (e) => W(new l({
	paths: e.rings,
	spatialReference: e.spatialReference
})), Et = (e, t, n) => W(new l({
	paths: [[[e[0], e[1]], [t[0], t[1]]]],
	spatialReference: n
})), Dt = (e) => {
	if (!e) return;
	if (e.type === "point") return e;
	try {
		let t = b(e);
		if (t) return t;
	} catch {}
	let t = e.extent;
	if (t) return new ie({
		x: (t.xmin + t.xmax) / 2,
		y: (t.ymin + t.ymax) / 2,
		spatialReference: e.spatialReference
	});
}, Ot = (e, t) => e[0] === t[0] && e[1] === t[1], kt = (e) => e.length > 1 && Ot(e[0], e[e.length - 1]) ? e.slice(0, -1) : e, At = (e) => e ? e.type === "polyline" ? e.paths.flatMap((e) => e) : e.type === "polygon" ? e.rings.flatMap((e) => kt(e)) : [] : [], jt = (e, t) => At(e).map((e, n) => ({
	index: n,
	key: mt(t, n),
	vertex: e
})), Mt = (e, t) => {
	if (!e || e.type !== "polyline" && e.type !== "polygon") return [];
	let n = e.spatialReference, r = [], i = 0, a = 0, o = (e, a, o, s) => {
		let c = Et(e, a, n);
		if (!c || c < .01) return;
		let l = i++;
		r.push({
			index: l,
			key: pt(t, l),
			letter: gt(l),
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
		let t = kt(e);
		if (t.length < 2) a += t.length;
		else {
			for (let e = 0; e < t.length - 1; e++) o(t[e], t[e + 1], a + e + 1, a + e + 2);
			t.length > 2 && o(t[t.length - 1], t[0], a + t.length, a + 1), a += t.length;
		}
	}), r);
}, Nt = ({ iApi: e, drawStore: t, getDrawGraphicId: n, getGraphicDrawBufferSettings: r, getGraphicDrawIdentifyBufferMode: a, getSelectedFeatureCountGraphic: o }) => {
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
		let i = n(e), c = I(e?.geometry);
		if (!e || !i || !c) return;
		let l = (s.get(i) ?? 0) + 1;
		s.set(i, l), t.setShapeFeatureCountsLoading(i);
		try {
			if (await et(), s.get(i) !== l) return;
			let n = r(e), o = a(e), u = n.distance > 0 ? tt(c, n) : void 0, f = o === "shape" ? c : o === "buffer-only" ? u : n.distance > 0 ? H(c, n) : c, p = d(c), m = u ? d(u) : Promise.resolve(null), h = f === c ? p : f === u ? m : d(f), [g, _, v] = await Promise.all([
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
			let r = o(), a = n(r), s = Dt(I(r?.geometry));
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
}, K = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], Pt = 10, Ft = 1.05, It = .95, Lt = .05, Rt = ({ iApi: e, drawStore: t, t: n, translateTerm: r, getSketch: i, getGraphicsLayer: a, getSelectedGraphic: o, getKeyboardEditGraphic: s, setSelectedGraphic: c, prepareDrawGraphic: u, applyDrawSymbol: f, syncBufferGraphic: m, syncGraphicStoreRecord: h, syncActiveSketchEditToSource: g, highlightSelectedGraphic: _, deleteSelectedGraphic: v, startSketchUpdate: y, cancelPendingSketchUpdate: b, clearActiveSketchEdit: ee, refreshMeasurementGraphics: x, scheduleMeasurementRefresh: S, cancelPendingFeatureCountRefresh: ne, refreshSelectedGraphicFeatureCounts: re }) => {
	let C = !1, w = null, T = [], E = () => {
		C = !1, w = null, T = [];
	}, D = () => {
		let n = e.geo.map.esriView;
		w && (t.activeTool === "polyline" ? w.geometry = new l({
			paths: [T],
			spatialReference: n.spatialReference
		}) : w.geometry = new p({
			rings: [T],
			spatialReference: n.spatialReference
		}));
	}, k = () => {
		let n = i(), r = e.geo.map.esriView;
		return t.activeTool === "polyline" ? new O({
			geometry: new l({
				paths: [T],
				spatialReference: r.spatialReference
			}),
			symbol: n?.polylineSymbol || new te({
				color: [
					0,
					0,
					255,
					1
				],
				width: 2
			})
		}) : new O({
			geometry: new p({
				rings: [T],
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
		C ? (T.push([c.x, c.y]), D(), x(w, o), e.updateAlert(n("draw.multiPoint.pointAdded", {
			type: r(o),
			count: T.length
		}))) : (C = !0, T = [[c.x, c.y]], w = k(), w.attributes = {
			id: `temp-graphic-${Date.now()}`,
			type: t.activeTool
		}, a()?.add(w), x(w, o), e.updateAlert(n("draw.multiPoint.started", {
			type: r(o),
			count: 1
		})));
	}, oe = async () => {
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
		f.length > 0 ? (y(f[0].graphic), e.updateAlert(n("draw.graphic.selected", { type: r(f[0].graphic.attributes?.type) }))) : (b(), s.cancel(), ee({ restoreSource: !0 }), c(null), t.clearSelection());
	}, se = async () => {
		let o = i(), s = t.activeTool;
		if (!o || !s) return;
		await e.geo.map.viewPromise;
		let c = e.geo.map.esriView, f = {
			x: Math.floor(c.width / 2),
			y: Math.floor(c.height / 2)
		}, h = c.toMap(f), g = c.extent, _ = Math.min(g.width, g.height) / 10, v;
		switch (s) {
			case "point":
				v = new O({
					geometry: new ie({
						x: h.x,
						y: h.y,
						spatialReference: c.spatialReference
					}),
					symbol: o.pointSymbol
				});
				break;
			case "polyline":
				v = new O({
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
				v = new O({
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
				v = new O({
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
		}), x(), s !== "point" && (t.clearSelection(), t.setActiveTool(""), e.keyboardNav?.reset(), o.cancel()), e.updateAlert(n("draw.graphic.created", { type: r(s) }));
	}, ce = () => {
		let i = t.activeTool ?? void 0;
		T.pop(), D(), w.set("geometry", w?.geometry), x(w, i), e.updateAlert(n("draw.multiPoint.pointRemoved", {
			type: r(i),
			count: T.length
		}));
	}, le = () => {
		w && a()?.remove(w), E(), x(), e.updateAlert(n("draw.multiPoint.canceled"));
	}, A = (r) => {
		let a = e.geo.map.esriView?.container;
		if (document.activeElement && a?.contains(document.activeElement)) switch (r.key) {
			case "Enter":
				r.preventDefault(), t.activeTool && t.activeTool !== "edit" ? (t.activeTool === "polyline" || t.activeTool === "polygon") && (C || T.length === 0) ? ae() : se() : oe();
				break;
			case "Delete":
			case "Backspace":
				C && T.length > 1 ? (r.preventDefault(), ce()) : C && T.length === 1 ? (r.preventDefault(), le()) : o() && (r.preventDefault(), v());
				break;
			case "Escape": t.setActiveTool(null), i()?.cancel(), c(null), _(void 0), t.clearSelection(), x(), e.updateAlert(n("draw.tool.canceled"));
		}
	}, ue = (e) => {
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
	}, de = (t, n, r) => {
		let i = e.geo.map.esriView, a = 0, o = 0;
		t === "ArrowLeft" && (a = -10), t === "ArrowRight" && (a = Pt), t === "ArrowUp" && (o = -10), t === "ArrowDown" && (o = Pt);
		let s = i.toScreen(new ie({
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
	}, fe = (e) => e === "ArrowUp" || e === "ArrowRight" ? Ft : It, pe = (e) => e === "ArrowLeft" ? -.05 : e === "ArrowRight" ? Lt : 0, j = (e, t, n) => e.map(([e, r]) => [e + t, r + n]), me = (e, t, n) => e.map(([e, r]) => [t.x + (e - t.x) * n, t.y + (r - t.y) * n]), M = (e, t, n) => {
		let r = Math.cos(n), i = Math.sin(n);
		return e.map(([e, n]) => {
			let a = e - t.x, o = n - t.y, s = a * r - o * i, c = a * i + o * r;
			return [t.x + s, t.y + c];
		});
	}, N = (e, t) => e.map((e) => t(e)), he = (t, r, i, a) => {
		let o = ue(t), s = de(r, o, t.spatialReference);
		if (t.type === "point") {
			if (!i && !a) {
				let e = t;
				return new ie({
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
				paths: N(e, (e) => j(e, s.x, s.y)),
				spatialReference: t.spatialReference
			});
			if (i) return new l({
				paths: N(e, (e) => me(e, o, fe(r))),
				spatialReference: t.spatialReference
			});
			let n = pe(r);
			return n === 0 ? t.clone() : new l({
				paths: N(e, (e) => M(e, o, n)),
				spatialReference: t.spatialReference
			});
		}
		if (t.type === "polygon") {
			let e = t.rings;
			if (!i && !a) return new p({
				rings: N(e, (e) => j(e, s.x, s.y)),
				spatialReference: t.spatialReference
			});
			if (i) return new p({
				rings: N(e, (e) => me(e, o, fe(r))),
				spatialReference: t.spatialReference
			});
			let n = pe(r);
			return n === 0 ? t.clone() : new p({
				rings: N(e, (e) => M(e, o, n)),
				spatialReference: t.spatialReference
			});
		}
	};
	return {
		handleNavigationKeyDown: A,
		handleGraphicKeyboardEdit: (r) => {
			let i = e.geo.map.esriView.container;
			if (!document.activeElement || !i?.contains(document.activeElement) || !K.includes(r.key) || t.activeTool !== "edit" || t.shapeDetailsActiveTab !== "edit") return;
			let a = s() ?? o();
			if (!a) return;
			r.preventDefault(), r.stopPropagation();
			let c = r.shiftKey, l = r.altKey, u = he(a.geometry, r.key, c, l);
			if (!u) return;
			a.geometry = u, a.set("geometry", u), f(a);
			let d = g() ?? a;
			d === a && (m(a), h(a)), _(d), S(d, d.attributes?.type), ne(), re(d);
			let p = c ? "resized" : l ? "rotated" : "moved";
			e.updateAlert(n(`draw.graphic.${p}`));
		},
		resetMultiPointState: E
	};
}, zt = 16, Bt = 2, Vt = 8, Ht = 8, Ut = 2, Wt = "#1d4ed8", Gt = 30, Kt = ({ iApi: e, drawStore: t, locale: r, t: i, getGraphicsLayer: a, isShapeDetailsOpen: o, getShapeDetailsGraphic: s }) => {
	let l = null, u = 0, d = 0, p = [], m = null, h = null, g = null, _ = null, v = null, y = null, b = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = [], x = [], S = [], ne = Oe(""), re = () => t.graphics.some((e) => {
		let n = String(e.id ?? e.attributes?.id ?? ""), r = ae(e.attributes), i = w(n) && t.shapeDetailsLabelsVisible;
		return r.areaLabel || r.segmentLength || r.segmentLetters || r.vertexNumbers || i;
	}), C = () => t.measurementsEnabled || o() || re(), w = (e) => o() && t.selectedGraphicId === e, T = () => o() && t.shapeDetailsActiveTab === "details" && !!t.selectedGraphicId, E = (e) => {
		let n = ht(e);
		return !!n && n.graphicId === t.selectedGraphicId;
	}, D = (e) => T() && E(e) && e === t.activeSegmentKey, k = (e) => T() && E(e) && e === t.activeVertexKey, oe = (e) => new c({
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
	}), se = (e, t) => new f({
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
	}), ce = (e, t, n, r) => [new O({
		geometry: e,
		symbol: oe(r),
		attributes: {
			...n,
			drawMeasurementKind: "vertex-marker"
		}
	}), new O({
		geometry: e,
		symbol: se(t, r),
		attributes: {
			...n,
			drawMeasurementKind: "vertex-label",
			drawMeasurementText: t
		}
	})], le = (e, t) => new ie({
		x: e[0],
		y: e[1],
		spatialReference: t
	}), A = (e) => !!e && Number.isFinite(e.x) && Number.isFinite(e.y), ue = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), de = (e) => {
		let t = Math.hypot(e.x, e.y);
		if (!(!Number.isFinite(t) || t <= 0)) return {
			x: e.x / t,
			y: e.y / t
		};
	}, fe = (e) => {
		let t = e;
		for (; t > 180;) t -= 360;
		for (; t < -180;) t += 360;
		return t > 90 && (t -= 180), t < -90 && (t += 180), t;
	}, pe = (e) => {
		if (e.length < 2) return;
		let t = [], n = 0;
		for (let r = 0; r < e.length - 1; r++) {
			let i = ue(e[r], e[r + 1]);
			t.push(i), n += i;
		}
		if (!Number.isFinite(n) || n <= 0) return;
		let r = n / 2, i = 0;
		for (let a = 0; a < e.length - 1; a++) {
			let o = t[a];
			if (!(o <= 0)) {
				if (i + o >= r) {
					let t = e[a], s = e[a + 1], c = (r - i) / o, l = de({
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
	}, j = (e, t, n) => {
		let r = n.toScreen(new ie({
			x: e[0],
			y: e[1],
			spatialReference: t
		}));
		return A(r) ? {
			x: r.x,
			y: r.y
		} : void 0;
	}, me = (e) => e.length > 1 && e[0][0] === e[e.length - 1][0] && e[0][1] === e[e.length - 1][1] ? e.slice(0, -1) : e, M = (e, t) => {
		let n = e.rings, r = 0, i = 0, a = 0, o = [];
		if (n.forEach((n) => {
			let s = me(n).map((n) => j(n, e.spatialReference, t)).filter((e) => !!e);
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
	}, N = (e, t) => {
		let n = e.paths.flatMap((e) => e).map((n) => j(n, e.spatialReference, t)).filter((e) => !!e);
		if (n.length) return {
			x: n.reduce((e, t) => e + t.x, 0) / n.length,
			y: n.reduce((e, t) => e + t.y, 0) / n.length
		};
	}, he = (e, t) => {
		if (e.type === "polygon") return M(e, t);
		if (e.type === "polyline") return N(e, t);
	}, ge = (e, t) => {
		let n = e.spatialReference, r = [], i = (e, i) => {
			let a = i ? me(e) : e;
			a.forEach((e) => {
				let i = j(e, n, t);
				i && r.push(i);
			});
			let o = i ? a.length : a.length - 1;
			for (let e = 0; e < o; e++) {
				let i = a[e], o = a[(e + 1) % a.length], s = j([(i[0] + o[0]) / 2, (i[1] + o[1]) / 2], n, t);
				s && r.push(s);
			}
		};
		return e.type === "polyline" && e.paths.forEach((e) => i(e, !1)), e.type === "polygon" && e.rings.forEach((e) => i(e, !0)), r;
	}, P = (e, t) => {
		let n = [e.start, e.end].map((n) => j(n, e.geometry.spatialReference, t)).filter((e) => !!e), r = pe(n);
		if (!r) return;
		let i = {
			x: -r.tangent.y,
			y: r.tangent.x
		};
		if (e.geometry.type === "polygon" || e.geometry.type === "polyline") {
			let n = he(e.geometry, t);
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
			angle: fe(a * 180 / Math.PI)
		};
	}, _e = (e, t, n, r) => {
		let i = zt / 2;
		return ge(e.geometry, r).reduce((e, r) => {
			let a = {
				x: r.x - t.midpoint.x,
				y: r.y - t.midpoint.y
			};
			if (a.x * n.x + a.y * n.y <= i) return e;
			let o = Math.hypot(a.x, a.y);
			return !Number.isFinite(o) || o <= i ? e : e + 100 / Math.max(o, Ht);
		}, 0);
	}, ve = (e, t, n) => {
		let r = {
			x: -t.normal.x,
			y: -t.normal.y
		}, i = (r) => ({
			anchor: {
				x: t.midpoint.x + r.x * zt,
				y: t.midpoint.y + r.y * zt
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
	}, e.width, e.height), Se = (e, t) => be(t.anchor, e.offsetWidth || e.getBoundingClientRect().width, e.offsetHeight || e.getBoundingClientRect().height, t.angle), F = (e, t) => e.corners.reduce((e, n) => {
		let r = n.x * t.x + n.y * t.y;
		return {
			min: Math.min(e.min, r),
			max: Math.max(e.max, r)
		};
	}, {
		min: Infinity,
		max: -Infinity
	}), Ce = (e, t, n = 0) => [...e.axes, ...t.axes].every((r) => {
		let i = F(e, r), a = F(t, r);
		return !(i.max + n <= a.min || a.max + n <= i.min);
	}), we = (e, t) => e.corners.every((e) => e.x >= 0 && e.y >= 0 && e.x <= t.width && e.y <= t.height), Te = (e) => {
		let t = window.getComputedStyle(e), n = e.getBoundingClientRect();
		return t.display !== "none" && t.visibility !== "hidden" && t.opacity !== "0" && n.width > 0 && n.height > 0;
	}, Ee = (e, t) => {
		let n = e.container;
		return n ? Array.from(n.querySelectorAll([
			".esri-ui .esri-component",
			".esri-popup",
			".esri-attribution",
			"arcgis-sketch",
			"[class*=\"esri-sketch\"]"
		].join(","))).filter((e) => !!v && !v.contains(e)).filter(Te).map((e) => ye(e.getBoundingClientRect(), t)).filter((e) => !!e).filter((e) => e.width < t.width * .85 || e.height < t.height * .85).map(xe) : [];
	}, De = (e) => e.graphics.find((e) => {
		let t = e.attributes, n = e.geometry;
		return !!t && !!n && n.type === "point" && (t.drawMeasurementKind === "vertex-marker" || t.drawMeasurementKind === "vertex-label");
	})?.geometry, ke = (e, t) => {
		let n = De(e);
		if (!n) return;
		let r = t.toScreen(n);
		if (A(r)) return be(r, Gt, Gt);
	}, Ae = (e, t) => {
		let n = [];
		return e.filter((e) => {
			let r = ke(e, t);
			return !r || !n.some((e) => Ce(r, e, Bt)) && (n.push(r), !0);
		});
	}, je = (e) => {
		let t = /* @__PURE__ */ new Set(), n = [];
		return p.forEach((r) => {
			let i = r.attributes, a = r.geometry;
			if (!i || !a || a.type !== "point") return;
			let o = e.toScreen(a);
			if (A(o) && (i.drawMeasurementKind === "vertex-marker" || i.drawMeasurementKind === "vertex-label")) {
				let e = i.drawVertexKey ?? `${o.x}:${o.y}`;
				if (t.has(e)) return;
				t.add(e), n.push(be(o, Gt, Gt));
			}
		}), n;
	}, Me = (e, t) => [...je(e), ...Ee(e, t)], Ne = (e) => {
		let t = e.container;
		if (t) return v?.parentElement === t || (v?.remove(), v = document.createElement("div"), v.className = "rv-draw-segment-label-overlay", v.setAttribute("aria-hidden", "true"), t.appendChild(v), b = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map()), v;
	}, Pe = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-badge"), r = e.querySelector(".rv-draw-segment-label-distance");
		n && (n.textContent = t.letter, n.style.backgroundColor = t.badgeColor, n.hidden = !t.showBadge), r && (r.textContent = t.distanceText ?? ""), e.dataset.segmentKey = t.key, e.classList.toggle("rv-no-badge", !t.showBadge);
	}, Fe = (e) => {
		let t = document.createElement("div");
		t.className = "rv-draw-segment-label", t.style.visibility = "hidden", t.style.left = "0px", t.style.top = "0px";
		let n = document.createElement("span");
		n.className = "rv-draw-segment-label-badge", t.appendChild(n);
		let r = document.createElement("span");
		return r.className = "rv-draw-segment-label-distance", t.appendChild(r), Pe(t, e), t;
	}, R = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-distance");
		n && (n.textContent = t.text), e.dataset.areaLabelKey = t.key;
	}, Ie = (e) => {
		let t = document.createElement("div");
		t.className = "rv-draw-segment-label rv-draw-area-label rv-no-badge", t.style.visibility = "hidden", t.style.left = "0px", t.style.top = "0px";
		let n = document.createElement("span");
		return n.className = "rv-draw-segment-label-distance", t.appendChild(n), R(t, e), t;
	}, Le = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-distance");
		e.classList.toggle("rv-distance-hidden", t), n && (n.hidden = t);
	}, z = (e, t) => {
		e.style.left = `${t.anchor.x}px`, e.style.top = `${t.anchor.y}px`, e.style.transform = `translate(-50%, -50%) rotate(${t.angle}deg)`, e.style.transformOrigin = "center center";
	}, Re = (e, t, n) => we(e, t) ? !n.some((t) => Ce(e, t, Bt)) : !1, ze = (e, t, n, r) => Re(e, t, r) && !n.some((t) => Ce(e, t, Bt)), B = (e, t, n, r, i, a) => {
		if (ze(e, t, i, a)) return n.sideCrowdingScore + r * .01;
	}, Be = (e, t, n, r, i, a) => {
		let o, s = [...r, ...i];
		return t.forEach((t, r) => {
			z(e, t);
			let i = Se(e, t), c = B(i, n, t, r, s, a);
			c !== void 0 && (!o || c < o.score) && (o = {
				candidate: t,
				box: i,
				score: c
			});
		}), o;
	}, Ve = () => {
		b.forEach((e, t) => {
			e.classList.toggle("rv-active", D(t));
		});
	}, He = () => {
		y !== null && (window.cancelAnimationFrame(y), y = null), te = [], x = [], v?.remove(), v = null, b.clear(), ee.clear();
	}, Ue = (t, n = x) => {
		let r = e.geo.map.esriView;
		if (te = t, x = n, !r || !t.length && !n.length) {
			He();
			return;
		}
		let i = Ne(r), a = r.container;
		if (!i || !a) {
			He();
			return;
		}
		let o = new Set(t.map((e) => e.key));
		b.forEach((e, t) => {
			o.has(t) || (e.remove(), b.delete(t));
		}), t.forEach((e) => {
			let t = b.get(e.key);
			t ? Pe(t, e) : (t = Fe(e), b.set(e.key, t), i.appendChild(t)), t.style.display = "inline-flex", t.style.visibility = "hidden", t.style.transform = "translate(-50%, -50%) rotate(0deg)", Le(t, !e.distanceText);
		});
		let s = new Set(n.map((e) => e.key));
		ee.forEach((e, t) => {
			s.has(t) || (e.remove(), ee.delete(t));
		}), n.forEach((e) => {
			let t = ee.get(e.key);
			t ? R(t, e) : (t = Ie(e), ee.set(e.key, t), i.appendChild(t)), t.style.display = "inline-flex", t.style.visibility = "hidden", t.style.transform = "translate(-50%, -50%) rotate(0deg)";
		});
		let c = a.getBoundingClientRect(), l = Me(r, c), u = [], d = [];
		n.forEach((e) => {
			let t = ee.get(e.key);
			if (!t) return;
			let n = r.toScreen(e.point);
			if (!A(n)) {
				t.style.display = "none";
				return;
			}
			z(t, {
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
			ze(i, c, u, l) ? (u.push(i), t.style.visibility = "visible") : t.style.display = "none";
		});
		let f = [], p = [];
		t.forEach((e) => {
			let t = b.get(e.key);
			if (!t) return;
			let n = P(e, r);
			if (!n || n.length < Ht) {
				t.style.display = "none";
				return;
			}
			let i = t.offsetWidth, a = !!e.distanceText && n.length >= i + Ut;
			if (Le(t, !a), !a && !e.showBadge) {
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
			let t = ve(e.label, e.placement, r), n = Be(e.element, t, c, u, d, l);
			return n ? (z(e.element, n.candidate), d.push(n.box), e.element.style.visibility = "visible", !0) : !1;
		};
		f.forEach((e) => {
			m(e) || (e.label.showBadge ? (Le(e.element, !0), p.push(e)) : e.element.style.display = "none");
		}), p.forEach((e) => {
			m(e) || (e.element.style.display = "none");
		}), Ve();
	}, We = () => {
		y === null && (y = window.requestAnimationFrame(() => {
			y = null, Ue(te, x);
		}));
	}, V = () => {
		if (S.length) return;
		let t = () => We();
		S = [e.event.on(n.MAP_EXTENTCHANGE, t), e.event.on(n.RAMP_MOBILEVIEW_CHANGE, t)];
	}, Ge = () => {
		S.forEach((t) => e.event.off(t)), S = [];
	}, Ke = (t) => {
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
	}, qe = (t) => {
		if (Number.isFinite(t.x) && Number.isFinite(t.y)) return {
			x: t.x,
			y: t.y
		};
		let n = Ke(t), r = e.geo.map.esriView?.container;
		if (!n || !r) return;
		let i = r.getBoundingClientRect();
		return {
			x: n.x - i.left,
			y: n.y - i.top
		};
	}, Je = (e) => {
		let t = Ke(e);
		if (t) for (let [e, n] of b) {
			if (!Te(n)) continue;
			let r = n.getBoundingClientRect();
			if (t.x >= r.left && t.x <= r.right && t.y >= r.top && t.y <= r.bottom) return e;
		}
	}, Ye = (e, t, n) => {
		let r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = r.x * r.x + r.y * r.y;
		if (i <= 0) return ue(e, t);
		let a = Math.max(0, Math.min(1, ((e.x - t.x) * r.x + (e.y - t.y) * r.y) / i));
		return ue(e, {
			x: t.x + r.x * a,
			y: t.y + r.y * a
		});
	}, Xe = (t) => {
		let n = e.geo.map.esriView, r = qe(t);
		if (!n || !r) return;
		let i;
		return te.forEach((e) => {
			let t = j(e.start, e.geometry.spatialReference, n), a = j(e.end, e.geometry.spatialReference, n);
			if (!t || !a) return;
			let o = Ye(r, t, a);
			o <= Vt && (!i || o < i.distance) && (i = {
				key: e.key,
				distance: o
			});
		}), i?.key;
	}, Ze = (e) => {
		if (e.type === "circle" || !e.includeDistance && !e.includeSegmentBadges) return [];
		let t = e.geometry;
		return Mt(t, e.id).map((n) => {
			let a = yt(n.lengthMeters, r.value, i), o = e.includeDistance ? a.display : void 0;
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
	}, Qe = (e) => e.type === "circle" || e.geometry.type !== "polyline" && e.geometry.type !== "polygon" ? [] : jt(e.geometry, e.id).map((t) => {
		let n = k(t.key), r = le(t.vertex, e.geometry.spatialReference);
		return { graphics: ce(r, String(t.index + 1), {
			drawMeasurement: !0,
			drawMeasurementKind: "vertex-label",
			drawGraphicId: e.id,
			drawVertexKey: t.key
		}, n) };
	}), $e = (e) => {
		let t = e.geometry;
		if (t.type !== "polygon") return;
		let n = t, a = Tt(n), o = Dt(n);
		if (!a || a < .01 || !o) return;
		let s = bt(a, r.value, i);
		return {
			graphics: [],
			areaLabels: [{
				key: `${e.id}:area`,
				text: s.display,
				point: o
			}],
			accessibleText: i("draw.measurements.area", { area: s.spoken })
		};
	}, et = (e) => {
		let t = e.geometry;
		if (!t || t.type === "point" || t.type === "multipoint") return [];
		let n = [...Ze(e), ...e.includeVertices ? Qe(e) : []], r = e.includeArea ? $e(e) : void 0;
		return r && n.push(r), n;
	}, tt = (e) => e?.attributes?.id, nt = (e, t, n, r) => {
		if (n) return {
			id: e,
			type: t ?? n.type,
			geometry: n,
			...r
		};
	}, H = (e, t) => {
		if (!t) return;
		let n = e.get(t.id);
		n ? (n.geometry = t.geometry, n.type = t.type, n.includeDistance ||= t.includeDistance, n.includeSegmentBadges ||= t.includeSegmentBadges, n.includeVertices ||= t.includeVertices, n.includeArea ||= t.includeArea, n.badgeColor = t.badgeColor || n.badgeColor) : e.set(t.id, t);
	}, rt = () => t.graphics.map((e) => {
		let n = String(e.id ?? e.attributes?.id ?? ""), r = ae(e.attributes), i = w(n) && t.shapeDetailsLabelsVisible, a = i || r.segmentLength, o = i || r.segmentLetters, s = i || r.vertexNumbers;
		return nt(n, e.type ?? e.attributes?.type, I(e.geometry), {
			includeDistance: t.measurementsEnabled || a,
			includeSegmentBadges: o,
			includeVertices: s,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: Wt
		});
	}).filter((e) => !!e?.id), it = () => (a()?.graphics.toArray() ?? []).filter((e) => !!tt(e)).map((e) => {
		let n = tt(e), r = ae(e.attributes), i = w(n) && t.shapeDetailsLabelsVisible, a = i || r.segmentLength, o = i || r.segmentLetters, s = i || r.vertexNumbers;
		return nt(n, e.attributes?.type, e.geometry, {
			includeDistance: t.measurementsEnabled || a,
			includeSegmentBadges: o,
			includeVertices: s,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: Wt
		});
	}).filter((e) => !!e), at = (e, n) => {
		if (!e) return;
		let r = ae(e.attributes), i = tt(e), a = !!i && w(i) && t.shapeDetailsLabelsVisible, o = a || r.segmentLength, s = a || r.segmentLetters, c = a || r.vertexNumbers;
		return nt(i ?? "active-draw-measurement", n ?? e.attributes?.type, e.geometry, {
			includeDistance: t.measurementsEnabled || o,
			includeSegmentBadges: s,
			includeVertices: c,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: Wt
		});
	}, ot = () => {
		if (!o() || !t.shapeDetailsLabelsVisible && !t.shapeDetailsLabelsUseSettings) return;
		let e = s() ?? t.getSelectedGraphic(), n = tt(e) ?? String(e?.id ?? "");
		if (!n) return;
		let r = ae(e?.attributes), i = t.shapeDetailsLabelsVisible || r.segmentLength, a = t.shapeDetailsLabelsVisible || r.segmentLetters, c = t.shapeDetailsLabelsVisible || r.vertexNumbers;
		return nt(n, e?.attributes?.type ?? e?.type, I(e?.geometry), {
			includeDistance: t.measurementsEnabled || i,
			includeSegmentBadges: a,
			includeVertices: c,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: Wt
		});
	}, st = (e, n) => {
		let r = /* @__PURE__ */ new Map();
		return (t.measurementsEnabled || re()) && (rt().forEach((e) => H(r, e)), it().forEach((e) => H(r, e)), H(r, at(e, n))), H(r, ot()), Array.from(r.values()).flatMap((e) => et(e));
	}, U = () => {
		t.setHoveredSegmentKey(null), t.setHoveredVertexKey(null);
	}, ct = () => {
		h?.remove(), h = null, g?.remove(), g = null, _ && e.geo.map.esriView?.container && e.geo.map.esriView.container.removeEventListener("mouseleave", _), _ = null, U();
	}, lt = async (t) => {
		let n = e.geo.map.esriView;
		return !n || !p.length ? null : (await n.hitTest(t, { include: p })).results.find((e) => "graphic" in e && !!e.graphic.attributes?.drawMeasurement)?.graphic ?? null;
	}, ut = async (e) => {
		if (!T()) {
			U();
			return;
		}
		let n = ++d, r = Je(e) ?? Xe(e);
		if (r) {
			t.setHoveredSegmentKey(E(r) ? r : null), t.setHoveredVertexKey(null);
			return;
		}
		let i = await lt(e);
		if (n !== d) return;
		let a = i?.attributes;
		t.setHoveredSegmentKey(E(a?.drawSegmentKey) ? a.drawSegmentKey : null), t.setHoveredVertexKey(E(a?.drawVertexKey) ? a.drawVertexKey : null);
	}, dt = async (e) => {
		if (!T()) return;
		let n = Je(e) ?? Xe(e);
		if (n) {
			if (!E(n)) return;
			t.setSelectedSegmentKey(n), t.setSelectedVertexKey(null), e.stopPropagation?.();
			return;
		}
		let r = (await lt(e))?.attributes, i = r?.drawSegmentKey, a = r?.drawVertexKey;
		if (E(i)) t.setSelectedSegmentKey(i), t.setSelectedVertexKey(null);
		else if (E(a)) t.setSelectedVertexKey(a), t.setSelectedSegmentKey(null);
		else return;
		e.stopPropagation?.();
	}, ft = () => {
		let t = e.geo.map.esriView;
		!t || h || g || (h = t.on("pointer-move", (e) => {
			ut(e);
		}), g = t.on("click", (e) => {
			dt(e);
		}), _ = U, t.container?.addEventListener("mouseleave", _));
	}, pt = () => {
		Ve(), p.forEach((e) => {
			let t = e.attributes;
			t && (t.drawMeasurementKind === "vertex-marker" ? e.symbol = oe(k(t.drawVertexKey)) : t.drawMeasurementKind === "vertex-label" && (e.symbol = se(t.drawMeasurementText ?? "", k(t.drawVertexKey))));
		});
	}, mt = () => {
		u++, l !== null && (window.cancelAnimationFrame(l), l = null), m = null, ne.value = "", ct(), Ge(), He();
		try {
			e.geo.map.esriView?.graphics.removeMany(p);
		} catch (e) {
			console.warn("Unable to clear draw measurement graphics.", e);
		}
		p = [];
	}, gt = (e) => {
		let t = e.map((e) => e.accessibleText).filter((e) => !!e), n = t.length ? i("draw.measurements.summary", { measurements: t.join(". ") }) : i("draw.measurements.none");
		ne.value !== n && (ne.value = n);
	}, _t = async (t, n) => {
		let r = ++u;
		if (l !== null && (window.cancelAnimationFrame(l), l = null, m = null), !C()) {
			mt();
			return;
		}
		try {
			await St();
		} catch (e) {
			console.warn("Unable to load draw measurement operators.", e);
			return;
		}
		if (r !== u || !C()) return;
		let i = e.geo.map.esriView, a = i?.graphics;
		if (!i || !a) return;
		let o = Ae(st(t, n), i);
		try {
			p.length && a.removeMany(p);
		} catch (e) {
			console.warn("Unable to remove stale draw measurement graphics.", e);
		}
		p = o.flatMap((e) => e.graphics);
		let s = o.flatMap((e) => e.segmentLabels ?? []), c = o.flatMap((e) => e.areaLabels ?? []);
		Ue(s, c), s.length || c.length ? V() : Ge();
		try {
			p.length && a.addMany(p), p.length || s.length ? ft() : ct();
		} catch (e) {
			console.warn("Unable to add draw measurement graphics.", e), p = [], ct();
		}
		gt(o);
	};
	return L(() => [
		t.activeSegmentKey,
		t.activeVertexKey,
		t.shapeDetailsActiveTab,
		t.selectedGraphicId
	], () => {
		pt();
	}), {
		measurementSummary: ne,
		clearMeasurementGraphics: mt,
		refreshMeasurementGraphics: _t,
		scheduleMeasurementRefresh: (e, t) => {
			C() ? (m = {
				activeGraphic: e,
				activeTool: t
			}, l === null && (l = window.requestAnimationFrame(() => {
				l = null;
				let e = m;
				m = null, _t(e?.activeGraphic, e?.activeTool);
			}))) : mt();
		}
	};
}, qt = {
	key: 0,
	class: "sr-only",
	"aria-live": "polite",
	"aria-atomic": "true"
}, Jt = 24, Yt = 160, Xt = 48, Zt = /* @__PURE__ */ xe({
	__name: "draw",
	setup(e) {
		let { t: r, availableLocales: a, locale: o } = Me(), u = (e) => r(e ? `draw.${e}` : "draw.unknown"), f = Se("iApi"), p = N(), m = t(), g = (e) => {
			let t = a.length ? a : [o.value], n = {};
			for (let i of t) n[i] = r(e, {}, { locale: i });
			return n;
		}, _ = null, v = je("sketchEl"), y = null, b = null, x = null, S = null, ne = null, re = null, C = !1, w = 0, T = null, D = /* @__PURE__ */ new Map(), k = 0, oe = {}, se = 0, le = 0, j = null, P = null, xe = null, F = null, Oe = null, I = null, Ne = null, Pe = [
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
		], Fe = De([]), R, { measurementSummary: Ie, clearMeasurementGraphics: Le, refreshMeasurementGraphics: z, scheduleMeasurementRefresh: Re } = Kt({
			iApi: f,
			drawStore: p,
			locale: o,
			t: r,
			getGraphicsLayer: () => y,
			isShapeDetailsOpen: () => Z(),
			getShapeDetailsGraphic: () => Zt()
		}), B = null, Be = (e = p.activeTool) => e !== null && e !== "" || p.shapeDetailsPickEnabled || Z(), Ve = (e = p.activeTool) => {
			let t = f.fixture.get("panguard");
			Be(e) ? t && B === null && (B = t.enabled, t.setEnabled(!1)) : B !== null && (t?.setEnabled(B), B = null);
		}, He = (e) => {
			Yn(e.detail);
		}, Ue = (e) => {
			Xn(e.detail);
		}, We = () => {
			try {
				_?.cancel();
			} catch (e) {
				console.warn("Unable to cancel draw sketch.", e);
			}
		}, V = () => {
			T !== null && (window.clearTimeout(T), T = null);
		}, Ge = () => _?.widget, qe = (e = _) => e?.widget?.viewModel ?? e?.viewModel, Ze = (e, t = _) => {
			let n = qe(t);
			n && (n.updateOnGraphicClick = e);
		}, $e = () => S?.state === "active" || qe()?.state === "active" || _?.state === "active", tt = (e, t) => {
			let n = t?.updateGraphics ?? qe()?.updateGraphics ?? Ge()?.updateGraphics ?? _?.updateGraphics;
			return n ? n.includes(e) || n.toArray().some((t) => t === e || t.attributes?.id === e.attributes?.id) : !1;
		}, nt = (e) => {
			let t = qe()?.defaultUpdateOptions ?? Ge()?.defaultUpdateOptions ?? _?.defaultUpdateOptions ?? {};
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
		}, H = (e) => {
			if (!_ || !e) return;
			let t = Ge(), n = qe();
			_.layer = e, t && (t.layer = e), n && (n.layer = e, Ze(!1));
		}, it = () => {
			if (ne?.remove(), ne = null, S) {
				try {
					S.cancel();
				} catch (e) {
					console.warn("Unable to cancel draw edit sketch view model.", e);
				}
				S.destroy(), S = null;
			}
		}, at = () => ce(p.styleSettings), ot = () => de(p.bufferSettings), st = () => p.identifyBufferMode, U = (e) => e ? ze(e) : void 0, ct = (e) => !!e.attributes?.id && !e.attributes?.drawMeasurement && !e.attributes?.drawBufferFor, lt = async (e) => {
			let t = f.geo.layer.getLayer(e);
			if (t?.esriLayer) {
				let n = !!t.esriLayer.destroyed, r = (f.geo.map.esriMap?.layers.indexOf(t.esriLayer) ?? -1) > -1;
				(n || !r) && (pt(e), t = void 0);
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
		}, ut = async (e, t) => {
			let n = f.geo.geom.geomEsriToRamp(e, t), r = await f.geo.map.geomToMapSR(n), i = f.geo.map.getSR();
			return n.sr.isEqual(i) ? e.clone() : f.geo.geom.geomRampToEsri(r);
		}, dt = (e, t) => {
			e.geometry = t, e.set("geometry", t);
		}, ft = async (e) => {
			let t = y;
			if (t) for (let n of t.graphics.toArray().filter(ct)) {
				let t = U(n), r = n.geometry;
				if (r) try {
					let i = await ut(r, t);
					if (e !== void 0 && e !== w) return;
					dt(n, i), W(n);
				} catch (e) {
					console.warn("Unable to project draw graphic to the current map projection.", e);
				}
			}
		}, pt = (e) => {
			let t = f.geo.layer.getLayer(e);
			if (t) try {
				f.geo.map.removeLayer(t);
			} catch (t) {
				console.warn(`Unable to remove draw graphics layer ${e}.`, t);
			}
		}, mt = (e) => {
			let t = y?.graphics.toArray().some((t) => U(t) === e) ?? !1, n = p.graphics.some((t) => U(t) === e);
			return !t && !n;
		}, gt = (e) => {
			switch (e) {
				case "point":
				case "multipoint": return "T";
				case "polyline": return "P";
				case "polygon": return "G";
				case "circle": return "C";
				case "rectangle": return "R";
				default: return "S";
			}
		}, _t = (e) => {
			let t = gt(e), n = oe[t] ?? 999, r;
			do
				r = `${t}${++n}`;
			while (!mt(r));
			return oe[t] = n, r;
		}, vt = (e, t) => {
			let n = t?.trim();
			return n && mt(n) ? n : _t(e);
		}, yt = (e) => ge(e.attributes), bt = (e) => ue(e.attributes), xt = (e) => A(e.attributes), St = (e) => ae(e.attributes), Ct = () => {
			if (!_) return;
			let e = at();
			_.pointSymbol = Qe("point", e), _.polylineSymbol = Qe("polyline", e), _.polygonSymbol = Qe("polygon", e);
		}, W = (e) => {
			let t = e.attributes?.id;
			if (t) return p.updateGraphic(t, {
				type: e.attributes?.type,
				geometry: e.geometry,
				attributes: e.attributes
			});
		}, wt = (e) => y?.graphics.toArray().find((t) => t.attributes?.id === e), Tt = (e) => {
			if (!e || e.attributes?.drawMeasurement) return;
			let t = e.attributes?.drawBufferFor;
			return t ? wt(t) : e.attributes?.id ? e : void 0;
		}, G = (e) => {
			e.symbol = Qe(e.geometry?.type ?? e.attributes?.type, yt(e));
		}, Et = (e, t = at(), n = ot(), r = st()) => {
			e.attributes = {
				...e.attributes ?? {},
				drawStyle: ce(t),
				drawBuffer: de(n),
				drawIdentifyBufferMode: r,
				drawMapLabels: he(e.attributes?.drawMapLabels)
			}, G(e);
		}, Dt = (e, t, n) => {
			let r = t ?? e.attributes?.type ?? e.geometry?.type, i = vt(r, n);
			return e.attributes = {
				...e.attributes ?? {},
				id: i,
				type: r,
				drawStyle: ce(e.attributes?.drawStyle ?? at()),
				drawBuffer: de(e.attributes?.drawBuffer ?? ot()),
				drawIdentifyBufferMode: A(e.attributes, st()),
				drawMapLabels: he(e.attributes?.drawMapLabels)
			}, G(e), i;
		}, Ot = (e) => {
			if (!e) return;
			let t = D.get(e);
			if (t) {
				try {
					y?.remove(t);
				} catch (e) {
					console.warn("Unable to remove draw buffer graphic.", e);
				}
				D.delete(e);
			}
		}, kt = () => {
			let e = Array.from(D.values());
			if (e.length) try {
				y?.removeMany(e);
			} catch (e) {
				console.warn("Unable to clear draw buffer graphics.", e);
			}
			D = /* @__PURE__ */ new Map();
		}, At = () => {
			if (!y) return;
			let e = y.graphics.toArray().filter(ct);
			if (e.length) try {
				y.removeMany(e);
			} catch (e) {
				console.warn("Unable to clear draw graphics for map refresh.", e);
			}
		}, K = (e) => {
			let t = e.attributes?.id;
			if (!t || !y) return;
			let n = rt(e, yt(e), bt(e)), r = D.get(t);
			if (!n) {
				Ot(t);
				return;
			}
			if (r) {
				r.geometry = n.geometry, r.symbol = n.symbol, r.attributes = n.attributes;
				return;
			}
			let i = y.graphics.indexOf(e);
			i >= 0 ? y.graphics.add(n, i) : y.add(n), D.set(t, n);
		}, Pt = () => {
			let e = p.selectedGraphicSettingsUpdatedGraphicId ?? p.selectedGraphicId, t = e ? p.graphics.find((t) => t.id === e) : void 0, n = j?.attributes?.id === e ? j : e ? y?.graphics.toArray().find((t) => t.attributes?.id === e) : void 0;
			if (!t || !n) return;
			let r = bt(n), i = xt(n), a = ge(t.attributes), o = ue(t.attributes), s = A(t.attributes), c = r.distance !== o.distance || r.unit !== o.unit || i !== s;
			Et(n, a, o, s), I?.sourceGraphic === n && Et(I.editGraphic, a, o, s), K(n), W(n), Q(Z() ? n : void 0), c && Qt(n);
		}, Ft = (e, t = !0) => {
			let n = Tt(e);
			n && (j = n, W(n), n.attributes?.id && p.selectGraphic(n.attributes.id), Q(t ? n : void 0));
		}, It = (e) => {
			Ft(e), tn("details"), p.requestShapePanelFocus(), Qt(e);
		}, Lt = (e) => {
			Ft(e, !1), Gt(e);
		}, zt = (e) => {
			if (e) return e;
			let t = p.selectedGraphicId;
			return j && (!t || j.attributes?.id === t) ? j : t ? y?.graphics.toArray().find((e) => e.attributes?.id === t) : void 0;
		}, Bt = () => {
			let e = j ?? y?.graphics.toArray().find((e) => e.attributes?.id === p.selectedGraphicId), t = e?.attributes?.id;
			if (!e || !t) return !1;
			try {
				_?.delete();
			} catch (e) {
				console.warn("Unable to delete draw sketch graphic.", e);
			}
			return I?.sourceGraphic === e && $({ restoreSource: !1 }), Ot(t), J(t), q(), y?.remove(e), p.removeGraphic(t), j = null, p.clearSelection(), Q(void 0), z(), f.updateAlert(r("draw.graphic.deleted")), !0;
		}, Vt = (e, t) => {
			let r = Ke(e, f);
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
				let e = E(t.geometry);
				if (!e) continue;
				let r = await ut(e, t.id), i = t.type || r.type, a = new O({
					geometry: r,
					attributes: {
						type: i,
						drawStyle: ce(t.settings.drawStyle),
						drawBuffer: de(t.settings.drawBuffer),
						drawIdentifyBufferMode: t.settings.drawIdentifyBufferMode,
						drawMapLabels: he(t.settings.drawMapLabels)
					}
				}), o = Dt(a, i, t.id);
				n.push(a);
				let s = {
					id: o,
					type: i,
					geometry: a.geometry,
					attributes: a.attributes
				};
				p.addGraphic(s), Vt(s, !1);
			} catch {}
			return n.length ? t === y ? (t.addMany(n), n.forEach(K), z(), f.updateAlert(r("draw.import.success", { count: n.length })), n.length) : 0 : (f.updateAlert(r("draw.import.error.invalid")), 0);
		}, Ut = async () => {
			let e = p.importShapesRequestId;
			e && e !== le && y && (await Ht([...p.importShapeRecords]), le = e, p.clearImportShapes(e));
		}, Wt = async (e) => {
			let t = y;
			if (!t || !p.graphics.length) return;
			let n = new Set(t.graphics.toArray().map((e) => U(e)).filter((e) => !!e)), r = [];
			for (let e of p.graphics) {
				let t = U(e), i = e.geometry?.clone?.() ?? e.geometry;
				if (t && i && !n.has(t)) try {
					let a = await ut(i, t), o = e.type ?? e.attributes?.type ?? a.type, s = new O({
						geometry: a,
						attributes: {
							...e.attributes ?? {},
							id: t,
							type: o
						}
					});
					G(s), p.updateGraphic(t, {
						type: o,
						geometry: s.geometry,
						attributes: s.attributes
					}), n.add(t), r.push(s);
				} catch (e) {
					console.warn("Unable to restore draw graphic in the current map projection.", e);
				}
			}
			r.length && (e !== void 0 && e !== w || t !== y || (t.addMany(r), r.forEach(K)));
		}, Gt = (e) => {
			let t = ++k;
			p.setActiveTool("edit"), tn("edit"), window.setTimeout(() => {
				if (t !== k || p.activeTool !== "edit") return;
				let n = zt(e);
				n && zn(n);
			}, 0);
		}, Zt = () => {
			let e = p.selectedGraphicId;
			if (e) return j?.attributes?.id === e ? j : y?.graphics.toArray().find((t) => t.attributes?.id === e);
		}, { refreshSelectedGraphicFeatureCounts: Qt, cancelPendingFeatureCountRefresh: q, cancelFeatureCountRunsForGraphic: J, scheduleFeatureCountRefresh: Y, runIdentifyForSelectedGraphic: X } = Nt({
			iApi: f,
			drawStore: p,
			getDrawGraphicId: U,
			getGraphicDrawBufferSettings: bt,
			getGraphicDrawIdentifyBufferMode: xt,
			getSelectedFeatureCountGraphic: () => Zt() ?? p.getSelectedGraphic() ?? void 0
		}), $t = (e) => fe(m, e), Z = () => $t(M), en = () => Z() && p.shapeDetailsActiveTab === "details" && !!p.selectedGraphicId, tn = (e = "details") => {
			me(f, e, { focusExisting: !0 });
		}, nn = () => {
			$t("draw-settings") ? f.panel.focus(pe) : f.panel.open(pe);
		}, rn = (e) => {
			$t(e) && f.panel.close(e);
		}, an = /* @__PURE__ */ new Set([M]), on = () => {
			let e = f.geo.map.esriView?.padding;
			return {
				top: Number(e?.top ?? 0),
				right: Number(e?.right ?? 0),
				bottom: Number(e?.bottom ?? 0),
				left: Number(e?.left ?? 0)
			};
		}, sn = () => {
			let e = f.geo.map.esriView;
			return e?.viewpoint?.clone?.() ?? {
				center: e?.center?.clone?.(),
				scale: e?.scale,
				rotation: e?.rotation
			};
		}, cn = (e) => {
			let t = f.geo.map.esriView;
			t && (t.padding = { ...e });
		}, ln = () => {
			if (Z()) return M;
		}, un = (e, t) => {
			let n = f.geo.map.esriView, r = n?.container?.getBoundingClientRect(), i = (f.$rootEl?.querySelector(`[data-cy="${e}"]`))?.getBoundingClientRect(), a = f.$vApp.$el.querySelector(".appbar")?.getBoundingClientRect(), o = f.panel.get(e)?.width ?? 350, s = a && r ? Math.max(0, a.right - r.left) : 0, c = i?.width ?? o, l = i && r ? i.right - r.left : s + o, u = s ? s + c : l, d = Math.max(t.left, Math.ceil(u + Jt)), p = n?.width ?? r?.width ?? 0, h = m.mobileView ? Xt : Yt;
			return p > h && (d = Math.min(d, p - h)), Math.max(0, d);
		}, dn = (e, t) => ({
			top: t.top + Jt,
			right: t.right + Jt,
			bottom: t.bottom + Jt,
			left: un(e, t)
		}), fn = () => {
			let e = f.panel.opened.slice().filter((e) => !an.has(e.id)).map((e) => ({
				panel: e,
				wasPinned: e.isPinned
			}));
			return e.forEach(({ panel: e }) => e.minimize()), e;
		}, pn = (e) => {
			e.forEach(({ panel: e }) => {
				f.panel.get(e.id) && !e.isOpen && e.open();
			}), e.filter(({ panel: e, wasPinned: t }) => t && !!f.panel.get(e.id)).forEach(({ panel: e }) => e.pin(!0));
		}, mn = (e) => !!e && typeof e == "object" && e.name === "AbortError", hn = async (e, t, n) => {
			if (await Ce(), Ne !== e || t !== se || !n.geometry) return;
			let r = ln();
			if (r) {
				e.previousViewpoint ||= sn(), cn(dn(r, e.previousPadding)), e.paddingAdjusted = !0;
				try {
					let e = f.geo.geom.geomEsriToRamp(n.geometry, n.attributes?.id);
					await f.geo.map.zoomMapTo(e, void 0, !0, 250, "ease");
				} catch (e) {
					mn(e) || console.warn("Unable to focus the map on the selected draw shape.", e);
				}
			}
		}, gn = () => {
			if (m.mobileView || Ne) return;
			let e = f.geo.map.esriView, t = Zt();
			if (!e) return;
			let n = {
				previousPadding: on(),
				paddingAdjusted: !1,
				minimizedPanels: []
			};
			Ne = n;
			let r = ++se;
			n.minimizedPanels = fn(), t?.geometry && hn(n, r, t);
		}, _n = () => {
			if (m.mobileView) return;
			let e = Zt();
			if (!f.geo.map.esriView || !e?.geometry) return;
			if (!Ne) {
				gn();
				return;
			}
			let t = Ne, n = new Set(t.minimizedPanels.map(({ panel: e }) => e.id)), r = fn().filter(({ panel: e }) => !n.has(e.id));
			t.minimizedPanels.push(...r);
			let i = ++se;
			hn(t, i, e);
		}, vn = () => {
			let e = Ne;
			if (!e) return;
			Ne = null, se++, e.paddingAdjusted && cn(e.previousPadding), pn(e.minimizedPanels);
			let t = f.geo.map.esriView;
			t && e.previousViewpoint && t.goTo(e.previousViewpoint, {
				animate: !0,
				duration: 250,
				easing: "ease"
			}).catch((e) => {
				mn(e) || console.warn("Unable to restore the map after closing the draw shape panel.", e);
			});
		}, yn = () => {
			let e = p.activeTool, t = e !== null && e !== "" && e !== "edit", n = e === "edit";
			return p.shapeDetailsPickEnabled && !t && !n;
		}, bn = () => !1, xn = (e, t, n) => {
			let r = e.geometry;
			if (!r) return !1;
			try {
				return h.execute(r, r.type === "polygon" ? t : n);
			} catch {
				return !1;
			}
		}, Sn = (e) => {
			if (!y) return;
			let t = e.mapPoint ?? f.geo.map.esriView?.toMap({
				x: e.x,
				y: e.y
			});
			if (!t) return;
			let n = e.pointerType, r = e.native?.pointerType, a = n === "touch" || r === "touch" ? 15 : 5, o = t, s = f.geo.query.makeClickBuffer(i.fromESRI(t), a).toESRI();
			for (let e of y.graphics.toArray().slice().reverse()) {
				let t = Tt(e);
				if (t && xn(e, o, s)) return t;
			}
		}, Cn = (e) => {
			if (!y) return;
			let t = e.mapPoint.toESRI(), n = e.input === "touch" ? 15 : 5, r = f.geo.query.makeClickBuffer(e.mapPoint, n).toESRI();
			return y.graphics.toArray().slice().reverse().find((e) => !!e.attributes?.id && !e.attributes?.drawMeasurement && !e.attributes?.drawBufferFor && xn(e, t, r));
		}, wn = (e) => {
			let t = Z();
			if (!yn() && !t) return;
			let n = Cn(e);
			n && yn() ? It(n) : !n && t && rn(M);
		};
		async function Tn() {
			let e = f.keyboardNav;
			if (!e) {
				console.warn("Keyboard navigation fixture is not available; draw shortcuts are disabled.");
				return;
			}
			R &&= (e.unregister(R), void 0);
			let t = new Set(p.supportedTypes.map((e) => e.type)), n = Pe.filter((e) => t.has(e.type)).map((e) => ({
				key: e.key,
				description: g(e.descriptionKey),
				handler: () => {
					p.setActiveTool(e.type);
				}
			}));
			R = e.register("D", {
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
						handler: () => (p.setActiveTool(null), tn("details"), "reset")
					},
					{
						key: "D",
						description: g("draw.keyboard.key.defaults"),
						handler: () => (p.setActiveTool(null), nn(), "reset")
					}
				]
			});
		}
		let Q = (e) => {
			let t = x ?? y;
			if (P && t && xe === t && e?.geometry && P.geometry?.type === e.geometry.type) {
				P.geometry = e.geometry, P.set("geometry", e.geometry);
				return;
			}
			if (P && (xe?.remove(P), y?.remove(P), x?.remove(P), P = null, xe = null), !e?.geometry || !t) return;
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
					n = new te({
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
			P = new O({
				geometry: e.geometry,
				symbol: n
			}), t.add(P), xe = t;
		}, En = () => {
			F &&= (y?.remove(F), null);
		}, Dn = () => {
			Oe &&= (y?.remove(Oe), null);
		}, On = () => {
			let e = p.mapLabelSettingsUpdatedGraphicId;
			if (!e) return;
			let t = p.graphics.find((t) => t.id === e), n = wt(e);
			t && n && (n.attributes = {
				...n.attributes ?? {},
				drawMapLabels: he(St(t))
			});
		}, kn = () => {
			if (En(), !en()) return;
			let e = ht(p.activeSegmentKey);
			if (!e || e.kind !== "segment" || e.graphicId !== p.selectedGraphicId) return;
			let t = wt(e.graphicId), n = Mt(t?.geometry, e.graphicId)[e.index];
			n && t?.geometry && (F = new O({
				geometry: new l({
					paths: [[n.start, n.end]],
					spatialReference: t.geometry.spatialReference
				}),
				symbol: new te({
					color: [
						37,
						99,
						235,
						.9
					],
					width: 4
				}),
				attributes: { drawInteractionHighlight: !0 }
			}), y?.add(F));
		}, An = () => {
			if (Dn(), !en()) return;
			let e = ht(p.activeVertexKey);
			if (!e || e.kind !== "vertex" || e.graphicId !== p.selectedGraphicId) return;
			let t = wt(e.graphicId), n = jt(t?.geometry, e.graphicId)[e.index];
			n && t?.geometry && (Oe = new O({
				geometry: new ie({
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
			}), y?.add(Oe));
		}, jn = () => {
			kn(), An();
		}, Mn = (e) => {
			if (!y) return;
			let t = Tt(e);
			if (!t) return;
			let n = t.attributes?.id;
			return y.graphics.toArray().find((e) => e === t || !!n && e.attributes?.id === n);
		}, Nn = (e) => I?.editGraphic === e ? I.sourceGraphic : e, Pn = () => {
			if (!I) return;
			let { sourceGraphic: e, editGraphic: t } = I;
			return e.geometry = t.geometry, e.set("geometry", t.geometry), G(e), K(e), W(e), e;
		}, $ = ({ restoreSource: e = !0 } = {}) => {
			I?.sourceGraphic && e && (I.sourceGraphic.visible = !0), it(), I = null, b?.removeAll(), H(y);
		}, Fn = (e) => {
			if (b && f.geo.map.esriView) return it(), S = new ee({
				view: f.geo.map.esriView,
				layer: b,
				updateOnGraphicClick: !1,
				defaultUpdateOptions: nt(e),
				pointSymbol: _?.pointSymbol,
				polygonSymbol: _?.polygonSymbol,
				polylineSymbol: _?.polylineSymbol
			}), ne = S.on("update", (e) => Xn(e)), S;
		}, In = async () => {
			if (!b || !f.geo.map.esriView) return !1;
			try {
				return await f.geo.map.esriView.whenLayerView(b), !0;
			} catch (e) {
				return console.warn("Unable to initialize draw edit sketch layer view.", e), !1;
			}
		}, Ln = (e) => {
			if (!b) return;
			$();
			let t = e.clone();
			t.attributes = { ...e.attributes };
			let n = e.geometry?.clone?.() ?? e.geometry;
			if (G(t), b.graphics = [t], e.visible = !1, I = {
				sourceGraphic: e,
				editGraphic: t,
				originalGeometry: n
			}, !Fn(t)) e.visible = !0, I = null, b.removeAll();
			else return t;
		}, Rn = async (e) => {
			let t = Nn(e);
			if (!_ || !y || p.activeTool !== "edit" || j !== t) return !1;
			let n = I?.editGraphic === e, r = n ? S : qe();
			if (!r || n && !await In()) return !1;
			if (r.state === "active") return tt(e, r) ? !0 : (r.cancel(), !1);
			if (r.state !== "ready" || !r.hasGraphic(e)) return !1;
			try {
				r !== S && Ze(!1), await r.update([e], nt(e));
			} catch (e) {
				return console.warn("Unable to start draw sketch update.", e), !1;
			}
			return tt(e, r);
		}, zn = (e, t = 5) => {
			if (!_ || p.activeTool !== "edit") return;
			let n = Mn(e);
			if (!n) return;
			Ft(n, !1), V(), We();
			let r = Ln(n);
			if (!r) return;
			Q(Z() ? n : void 0);
			let i = (e) => {
				T = window.setTimeout(() => {
					T = null, _ && p.activeTool === "edit" && j === n && Rn(r).then((t) => {
						t || (e <= 0 ? $({ restoreSource: !0 }) : i(e - 1));
					});
				}, 400);
			};
			i(t);
		}, Bn = ({ clearSelection: e = !1 } = {}) => {
			k++, V(), Pn(), We(), $({ restoreSource: !0 }), e && (j = null, p.clearSelection()), p.activeTool === "edit" ? p.setActiveTool(null) : Q(Z() ? Zt() : void 0);
		}, Vn = ({ clearSelection: e = !1 } = {}) => {
			k++, V();
			let t = I;
			t?.sourceGraphic && t.originalGeometry && (t.sourceGraphic.geometry = t.originalGeometry, t.sourceGraphic.set("geometry", t.originalGeometry), G(t.sourceGraphic), K(t.sourceGraphic), W(t.sourceGraphic), q(), Qt(t.sourceGraphic)), We(), $({ restoreSource: !0 }), e && (j = null, p.clearSelection()), p.activeTool === "edit" && p.setActiveTool(null), Q(Z() ? Zt() : void 0), z();
		};
		L(() => p.selectedGraphicId, (e, t) => {
			if (_ && y) {
				if (!e) V(), We(), $({ restoreSource: !0 }), Q();
				else if (e !== t) {
					let t = y.graphics.toArray().find((t) => t.attributes && t.attributes.id === e);
					t && (Ft(t, p.activeTool !== "edit"), p.shapeDetailsPickEnabled && Qt(t));
				}
				z();
			}
		}), L(() => p.deleteSelectedGraphicRequestId, () => {
			Bt();
		}), L(() => p.editSelectedGraphicRequestId, () => {
			Gt();
		}), L(() => p.identifySelectedGraphicRequestId, () => {
			X();
		}), L(() => p.stopEditModeRequestId, () => {
			Bn({ clearSelection: p.stopEditModeClearSelection });
		}), L(() => p.cancelEditModeRequestId, () => {
			Vn({ clearSelection: p.cancelEditModeClearSelection });
		}), L(() => p.refreshSelectedGraphicFeatureCountsRequestId, () => {
			Qt();
		}), L(() => p.mapLabelSettingsUpdateRequestId, () => {
			On(), z();
		}), L(() => [p.shapeDetailsLabelsVisible, p.shapeDetailsLabelsUseSettings], () => {
			z();
		}), L(() => p.shapePanelFocusRequestId, () => {
			_n();
		}), L(() => p.selectedGraphicSettingsUpdateRequestId, () => {
			Pt(), z();
		}), L(() => p.importShapesRequestId, () => {
			Ut();
		}), L(() => Z(), (e, t) => {
			Ve(), e && !t ? (p.activeTool !== "edit" && Q(Zt()), z(), gn()) : !e && t && (p.activeTool === "edit" && Bn(), p.setShapeDetailsPickEnabled(!1), p.setShapeDetailsLabelsVisible(!1), p.setShapeDetailsLabelsUseSettings(!1), p.setShapeDetailsActiveTab("details"), p.clearMeasurementInteraction(), Q(void 0), z(), vn());
		}), L(() => p.measurementsEnabled, (e) => {
			z(), f.updateAlert(r(e ? "draw.measurements.enabled" : "draw.measurements.disabled"));
		}), L(() => [
			p.activeSegmentKey,
			p.activeVertexKey,
			p.shapeDetailsActiveTab,
			p.selectedGraphicId,
			p.graphics.map((e) => e.geometry)
		], () => {
			jn();
		}, { deep: !0 }), L(() => ({
			fillColor: p.styleSettings.fillColor,
			borderColor: p.styleSettings.borderColor,
			bufferColor: p.styleSettings.bufferColor,
			opacity: p.styleSettings.opacity,
			bufferDistance: p.bufferSettings.distance,
			bufferUnit: p.bufferSettings.unit,
			identifyBufferMode: p.identifyBufferMode
		}), () => {
			Ct(), z();
		});
		let { handleNavigationKeyDown: Hn, handleGraphicKeyboardEdit: Un, resetMultiPointState: Wn } = Rt({
			iApi: f,
			drawStore: p,
			t: r,
			translateTerm: u,
			getSketch: () => _,
			getGraphicsLayer: () => y,
			getSelectedGraphic: () => j,
			getKeyboardEditGraphic: () => I?.editGraphic ?? j,
			setSelectedGraphic: (e) => {
				j = e;
			},
			prepareDrawGraphic: Dt,
			applyDrawSymbol: G,
			syncBufferGraphic: K,
			syncGraphicStoreRecord: W,
			syncActiveSketchEditToSource: Pn,
			highlightSelectedGraphic: Q,
			deleteSelectedGraphic: Bt,
			startSketchUpdate: zn,
			cancelPendingSketchUpdate: V,
			clearActiveSketchEdit: $,
			refreshMeasurementGraphics: z,
			scheduleMeasurementRefresh: Re,
			cancelPendingFeatureCountRefresh: q,
			refreshSelectedGraphicFeatureCounts: Qt
		}), Gn = async (e) => {
			let t = p.activeTool === "edit", n = bn();
			if (!t && !n) return;
			let r = (await f.geo.map.esriView.hitTest(e, { include: y })).results.find((e) => "graphic" in e && e.graphic.layer === y && !!Tt(e.graphic)), i = Tt(r?.graphic) ?? Sn(e);
			if (i) {
				if (n) {
					Lt(i);
					return;
				}
				$e() ? Ft(i, !1) : zn(i);
			} else t && Bn({ clearSelection: !0 });
		}, Kn = async () => {
			let e = ++w;
			if (await f.geo.map.viewPromise, e !== w || !v.value || !f.geo.map.esriView) return;
			let t = await lt(Je);
			if (e !== w || !f.geo.map.esriView || (y = t?.esriLayer, !y) || (await ft(e), e !== w || !f.geo.map.esriView)) return;
			let n = await lt(Ye);
			if (e !== w || !f.geo.map.esriView) {
				pt(Ye), b = null;
				return;
			}
			if (b = n?.esriLayer, !b) return;
			let r = await lt(Xe);
			if (e !== w || !f.geo.map.esriView) {
				pt(Ye), pt(Xe), b = null, x = null;
				return;
			}
			if (x = r?.esriLayer, !x) return;
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
			}), Ze(!1, i), f.geo.map.esriView.ui.add(i, "bottom-right"), C ||= (i.addEventListener("arcgisCreate", He), i.addEventListener("arcgisUpdate", Ue), !0), _ = i, Ze(!1), Ct(), re = f.geo.map.esriView.on("click", Gn), document.addEventListener("keydown", Hn), document.addEventListener("keydown", Un, { capture: !0 }), p.activeTool && p.activeTool !== "edit" && _.create(p.activeTool), await Wt(e), e === w && f.geo.map.esriView && (z(), Ut());
		}, qn = () => {
			if (!R) return;
			let e = f.keyboardNav;
			e && e.unregister(R), R = void 0;
		}, Jn = ({ cleanupKeyboard: e = !0, clearActiveTool: t = !1, clearSourceGraphics: n = !1, destroyHelperLayers: r = !0, destroySketch: i = !0 } = {}) => {
			w++, e && qn(), re &&= (re.remove(), null), $({ restoreSource: !0 }), b &&= (r ? (f.geo.map.esriView?.map?.remove(b), b.destroy()) : b.removeAll(), null), _ && (f.geo.map.esriView && f.geo.map.esriView.ui.remove(_), V(), We(), i && _.destroy()), C && v.value && (v.value.removeEventListener("arcgisCreate", He), v.value.removeEventListener("arcgisUpdate", Ue), C = !1), document.removeEventListener("keydown", Hn), document.removeEventListener("keydown", Un, { capture: !0 }), j = null, Q(void 0), x && (r ? (f.geo.map.esriView?.map?.remove(x), x.destroy()) : x.removeAll(), x = null, xe = null), En(), Dn(), V(), q(), k++, Le(), kt(), n && At(), p.clearSelection(), t && p.activeTool && p.setActiveTool(null), Wn(), _ = null, y = null;
		}, Yn = (e) => {
			if (e.state === "active" && e.graphic) Re(e.graphic, e.tool);
			else if (e.state === "cancel") z();
			else if (e.state === "complete") {
				let t = e.graphic;
				if (!t) return;
				let n = Dt(t, e.tool);
				K(t);
				let r = {
					id: n,
					type: e.tool,
					geometry: t.geometry,
					attributes: t.attributes
				};
				p.addGraphic(r), z(t, e.tool), Vt(r, !0), e.tool !== "point" && (p.setActiveTool(""), f.keyboardNav?.reset());
			}
		}, Xn = (e) => {
			let t = e.graphics[0];
			if (!t) return;
			let i = Nn(t);
			if (e.state === "start") {
				if (p.activeTool !== "edit") {
					We();
					return;
				}
				V(), Ft(i, Z()), i.attributes?.id && f.updateAlert(r("draw.graphic.selected", { type: u(i.attributes?.type) }));
			} else if (e.state === "active") {
				G(t);
				let e = Pn() ?? i;
				K(e), W(e), Q(Z() ? e : void 0), Re(e, e.attributes?.type), Y(e);
			} else if (e.state === "complete") {
				let e = Pn() ?? i;
				$({ restoreSource: !0 });
				let t;
				if (e.attributes?.id && (G(e), K(e), t = W(e), q(), Qt(e), f.updateAlert(r("draw.graphic.updated"))), Q(Z() ? e : void 0), z(e, e.attributes?.type), t) {
					let e = Ke(t, f);
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
		return we(() => {
			Tn(), et(), Kn(), Fe.push(f.event.on(n.MAP_DESTROYED, () => {
				Jn();
			})), Fe.push(f.event.on(n.MAP_CLICK, wn)), Fe.push(f.event.on(n.MAP_REFRESH_START, () => {
				Jn({
					cleanupKeyboard: !1,
					clearActiveTool: !0,
					clearSourceGraphics: !0,
					destroyHelperLayers: !1,
					destroySketch: !1
				});
			})), Fe.push(f.event.on(n.MAP_REFRESH_END, () => {
				Kn();
			})), Fe.push(f.event.on(n.FIXTURE_ADDED, (e) => {
				e.id === "panguard" && Ve();
			}));
		}), L(() => p.activeTool, (e) => {
			if (Ve(e), _ && (e !== "edit" && k++, V(), We(), e !== "edit" && $({ restoreSource: !0 }), Q(Z() ? Zt() : void 0), Wn(), z(), e !== "edit" && e)) try {
				_.create(e);
			} catch (e) {
				console.warn("Unable to start draw sketch.", e);
			}
		}, { immediate: !0 }), L(() => p.shapeDetailsPickEnabled, () => {
			Ve();
		}), Te(() => {
			vn(), B !== null && (f.fixture.get("panguard")?.setEnabled(B), B = null), Jn(), Fe.forEach((e) => f.event.off(e));
		}), (e, t) => (Ee(), ye(_e, null, [be("arcgis-sketch", {
			ref_key: "sketchEl",
			ref: v,
			style: { display: "none" }
		}, null, 512), Ae(p).measurementsEnabled ? (Ee(), ye("div", qt, ke(Ae(Ie)), 1)) : ve("", !0)], 64));
	}
}), Qt = "draw", q = (e) => `<svg class="rv-draw-help-icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${e}</svg>`, J = (e) => `<span class="rv-draw-help-mapnav-button">${e}</span>`, Y = (e, t) => `<span class="rv-draw-help-action-button">${t}<span class="rv-draw-help-action-label">${e}</span></span>`, X = {
	point: q("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\" />"),
	polyline: q("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 17l3-3 4 4 8-8\" stroke-width=\"2\" fill=\"none\" stroke=\"currentColor\" />"),
	polygon: q("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 6l6-3 6 3 6-3v12l-6 3-6-3-6 3z\" />"),
	rectangle: q("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" />"),
	circle: q("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" />"),
	info: q("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M11 10h2v7h-2v-7zm0-3h2v2h-2V7zm1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z\" fill=\"currentColor\" />"),
	settings: q("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.31-.6-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.05.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.22.37.31.6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.18-.58 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z\" />"),
	upload: q("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 20h14v-2H5v2zm14-7h-4v5H9v-5H5l7-7 7 7z\" fill=\"currentColor\" />"),
	download: q("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 20h14v-2H5v2zm14-9h-4V3H9v8H5l7 7 7-7z\" fill=\"currentColor\" />"),
	identify: q("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M10.5 4a6.5 6.5 0 0 1 5.18 10.43l4.45 4.44-1.42 1.42-4.44-4.45A6.5 6.5 0 1 1 10.5 4zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z\" fill=\"currentColor\" />"),
	copy: q("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M8 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v10h10V9H8z\" fill=\"currentColor\" /><path d=\"M4 15H2V5a3 3 0 0 1 3-3h10v2H5a1 1 0 0 0-1 1v10z\" fill=\"currentColor\" />"),
	delete: q("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z\" fill=\"currentColor\" />")
}, $t = {
	en: `# Draw Tools

Draw tools add temporary shapes to the map. The available shape buttons depend on the viewer configuration.

### Drawing Shapes

Open the Draw tool group in the map navigation controls and choose one of the available shape buttons.

| Icon | Shape | How to draw |
|--|--|--|
| ${J(X.point)} | Point | Select the point tool, then select the map once. |
| ${J(X.polyline)} | Polyline | Select each vertex on the map, then double-click the final vertex to finish. |
| ${J(X.polygon)} | Polygon | Select each boundary vertex on the map, then double-click the final vertex to close and finish the polygon. |
| ${J(X.rectangle)} | Rectangle | Select-hold on the map, drag to size the rectangle, then release. |
| ${J(X.circle)} | Circle | Select-hold on the map, drag to size the circle, then release. |

Press <kbd>Escape</kbd> to cancel the active drawing tool.

### Shape Inspector

After at least one shape exists, select the Shape Inspector information button ${J(X.info)} in the Draw tool group. Select a shape on the map to open or update the Shape Inspector.

The Shape Inspector has three tabs:

- Details: view the shape type, measurements, feature counts, centroid, extent, segments, and vertices. Use ${Y("Run Identify", X.identify)} to refresh feature counts, ${Y("Copy", X.copy)} coordinate or segment values, or ${Y("Export", X.download)} the selected shape.
- Style: apply a preset or set the selected shape's fill colour, border colour, buffer colour, and opacity.
- Edit: move, resize, rotate, or reshape the selected shape using the map handles. Turn on editing aids for area labels, segment lengths, segment letters, or vertex numbers. This tab also contains the selected shape's buffer and identify options.

### Deleting Shapes

Open the Shape Inspector, select the Edit tab, then choose ${Y("Delete", X.delete)} and confirm the deletion. When a shape is selected and the map has focus, <kbd>Delete</kbd> or <kbd>Backspace</kbd> also removes the selected shape.

### Import and Export

Open Draw Defaults with the settings button ${J(X.settings)} in the Draw tool group.

- ${Y("Import", X.upload)} opens a file picker for one or more draw shape JSON files.
- ${Y("Export", X.download)} in Draw Defaults downloads all current draw shapes.
- ${Y("Export", X.download)} in the Shape Inspector Details tab downloads only the selected shape.

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
| ${J(X.point)} | Point | Sélectionnez l'outil de point, puis sélectionnez la carte une fois. |
| ${J(X.polyline)} | Polyligne | Sélectionnez chaque sommet sur la carte, puis double-cliquez le dernier sommet pour terminer. |
| ${J(X.polygon)} | Polygone | Sélectionnez chaque sommet de la limite sur la carte, puis double-cliquez le dernier sommet pour fermer et terminer le polygone. |
| ${J(X.rectangle)} | Rectangle | Sélectionnez et maintenez sur la carte, faites glisser pour dimensionner le rectangle, puis relâchez. |
| ${J(X.circle)} | Cercle | Sélectionnez et maintenez sur la carte, faites glisser pour dimensionner le cercle, puis relâchez. |

Appuyez sur <kbd>Échap</kbd> pour annuler l'outil de dessin actif.

### Inspecteur de forme

Lorsqu'au moins une forme existe, sélectionnez le bouton d'information de l'inspecteur de forme ${J(X.info)} dans le groupe d'outils de dessin. Sélectionnez une forme sur la carte pour ouvrir ou mettre à jour l'inspecteur de forme.

L'inspecteur de forme contient trois onglets :

- Détails : affichez le type de forme, les mesures, les dénombrements d'entités, le centroïde, l'étendue, les segments et les sommets. Utilisez ${Y("Exécuter l'identification", X.identify)} pour actualiser les dénombrements d'entités, ${Y("Copier", X.copy)} des coordonnées ou des valeurs de segment, ou ${Y("Exporter", X.download)} la forme sélectionnée.
- Style : appliquez un préréglage ou définissez la couleur de remplissage, la couleur de bordure, la couleur du tampon et l'opacité de la forme sélectionnée.
- Modifier : déplacez, redimensionnez, faites pivoter ou remodelez la forme sélectionnée à l'aide des poignées sur la carte. Activez les aides de modification pour les étiquettes de superficie, les longueurs de segment, les lettres de segment ou les numéros de sommet. Cet onglet contient aussi les options de tampon et d'identification de la forme sélectionnée.

### Supprimer des formes

Ouvrez l'inspecteur de forme, sélectionnez l'onglet Modifier, puis choisissez ${Y("Supprimer", X.delete)} et confirmez la suppression. Lorsqu'une forme est sélectionnée et que la carte a le focus, <kbd>Supprimer</kbd> ou <kbd>Retour arrière</kbd> supprime aussi la forme sélectionnée.

### Importer et exporter

Ouvrez Valeurs par défaut du dessin avec le bouton des paramètres ${J(X.settings)} dans le groupe d'outils de dessin.

- ${Y("Importer", X.upload)} ouvre un sélecteur de fichiers pour un ou plusieurs fichiers JSON de formes dessinées.
- ${Y("Exporter", X.download)} dans Valeurs par défaut du dessin télécharge toutes les formes dessinées actuelles.
- ${Y("Exporter", X.download)} dans l'onglet Détails de l'inspecteur de forme télécharge seulement la forme sélectionnée.

Les fichiers exportés comprennent la géométrie et les paramètres de dessin afin de pouvoir être importés plus tard dans le module de dessin.

### Valeurs par défaut du dessin

Le panneau Valeurs par défaut du dessin contrôle les paramètres des nouvelles formes. Il ne modifie pas les formes qui existent déjà sur la carte.

- Apparence : couleur de remplissage, couleur de bordure, couleur du tampon et opacité par défaut de la forme.
- Tampon : distance et unité du tampon par défaut.
- Utilisation du tampon d'identification : détermine si l'identification et les dénombrements d'entités utilisent la forme originale avec son tampon, la forme originale seulement ou le tampon seulement.

### Options de forme

Chaque forme sélectionnée peut avoir des options différentes des valeurs par défaut. Utilisez l'onglet Style de l'inspecteur de forme pour les couleurs et l'opacité. Utilisez l'onglet Modifier de l'inspecteur de forme pour la distance du tampon, l'unité du tampon, l'utilisation du tampon d'identification, les aides de modification et la suppression.`
}, Z = {
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
}, en = /* @__PURE__ */ e({ default: () => tn }), tn = class extends lt {
	unregisterIdentifyGeometryProvider;
	eventHandlers = [];
	destroyDrawComponent;
	registerHelpSection() {
		k(this.$vApp.$pinia).addDynamicSection({
			id: Qt,
			markdown: $t
		});
	}
	unregisterHelpSection() {
		k(this.$vApp.$pinia).removeDynamicSection(Qt);
	}
	resetShapeInspectionState() {
		let e = N(this.$vApp.$pinia);
		e.setShapeDetailsPickEnabled(!1), e.setShapeDetailsLabelsVisible(!1), e.setShapeDetailsLabelsUseSettings(!1), e.setShapeDetailsActiveTab("details"), e.clearMeasurementInteraction();
	}
	async init() {
		Object.entries(Z).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e)), this._parseConfig(this.config);
		let e = {};
		this.$iApi.panel.get("draw-settings") || (e[pe] = {
			screens: { "draw-settings-screen": () => F(import("./draw-defaults-screen-DpWOznTa.js")) },
			style: { width: "350px" },
			button: {
				tooltip: "draw.defaults.title",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.31-.6-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.05.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.22.37.31.6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.18-.58 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z\"/></svg>"
			},
			alertName: "draw.defaults.title"
		}), this.$iApi.panel.get("draw-shape-details") || (e[M] = {
			screens: { "draw-shape-details-screen": () => F(import("./shape-inspector-screen-D2R-BMMD.js")) },
			style: { width: "350px" },
			button: {
				tooltip: "draw.inspector.title",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M11 10h2v7h-2v-7zm0-3h2v2h-2V7zm1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z\"/></svg>"
			},
			alertName: "draw.inspector.title"
		}), this.$iApi.panel.get("draw-import") || (e[oe] = {
			screens: { "draw-import-shape-screen": () => F(import("./import-shape-screen-Ct7tnZZu.js")) },
			style: { width: "350px" },
			alertName: "draw.import.title"
		}), Object.keys(e).length && (this.$iApi.panel.register(e, { i18n: { messages: Z } }), this.handlePanelTeleports([
			pe,
			M,
			oe
		])), N(this.$vApp.$pinia).supportedTypes.forEach((e) => {
			let t = `${e.type}-icon`;
			this.$iApi.component(t, F(qe(/* #__PURE__ */ Object.assign({
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
		let { destroy: r } = this.mount(Zt, {
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
			e.removeButton(pe), e.removeButton(M), e.removeButton(oe);
		}
		this.$iApi.panel.remove(pe), this.$iApi.panel.remove(M), this.$iApi.panel.remove(oe);
	}
};
//#endregion
export { yt as a, Tt as c, et as d, tn as default, Ve as f, Dt as i, W as l, Ge as m, Mt as n, St as o, He as p, jt as r, G as s, en as t, H as u };
