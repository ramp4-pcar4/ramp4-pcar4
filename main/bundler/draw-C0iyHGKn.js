import { $ as e, B as t, G as n, V as r, ct as i, s as a } from "./main-BgfQyEh5.js";
import { A as o, E as s, O as c, P as l, T as u, b as d, i as f, j as p, k as m, v as ee, w as te, y as h } from "./esri-vcEQ1sbb.js";
import { t as g } from "./store-CE7UzPRf.js";
import { a as _, b as v, c as y, d as b, f as x, h as S, l as C, m as ne, n as re, o as w, p as T, r as E, s as D, t as O, u as k, v as ie, x as ae, y as oe } from "./store-Bl__6-s2.js";
import { a as A, i as se, r as ce, t as j } from "./shape-io-CbPCwaM1.js";
import { a as M, i as N, l as le, n as ue, r as P, s as de, t as fe, u as F } from "./measurement-utils-CLtwAXVq.js";
import { Fragment as pe, createCommentVNode as me, createElementBlock as he, createElementVNode as ge, defineComponent as I, inject as _e, markRaw as L, nextTick as ve, onMounted as ye, onUnmounted as be, openBlock as xe, reactive as Se, ref as Ce, toDisplayString as we, toRaw as R, unref as Te, useTemplateRef as Ee, watch as z } from "vue";
import { useI18n as De } from "vue-i18n";
//#region \0rolldown_dynamic_import_helper.js
var Oe = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, ke = "RampDrawGraphicsLayer", Ae = "RampDrawEditGraphicsLayer", je = "RampDrawHighlightGraphicsLayer", Me = [
	{ type: "point" },
	{ type: "polyline" },
	{ type: "polygon" },
	{ type: "circle" },
	{ type: "rectangle" }
], Ne = 5, Pe = 15;
function B(e, t, n) {
	return e.type === "polygon" ? d.execute(e, t) : d.execute(e, n);
}
function V(e, t, n) {
	switch (n) {
		case "shape": return e;
		case "buffer-only": return T(e, t);
		default: return b(e, t) ?? e;
	}
}
function Fe(e, t, n) {
	return n === "shape" ? e : b(e, t) ?? e;
}
var Ie = class extends a {
	store;
	constructor(e, t) {
		super(e, t), this.store = O(this.$vApp.$pinia), S();
	}
	_parseConfig(e) {
		if (!e) {
			this.store.setSupportedTypes(Me);
			return;
		}
		if (e.types !== void 0) {
			let t = (e.types === null ? [] : e.types).filter((e) => e.enabled !== !1);
			this.store.setSupportedTypes(t);
		} else this.store.setSupportedTypes(Me);
		e.defaultTool && this.store.setActiveTool(e.defaultTool);
	}
	get graphicsLayerId() {
		return ke;
	}
	getShapeIds() {
		return this.store.graphics.map((e) => e.id);
	}
	async importShapes(e) {
		let t = A(typeof e == "string" || e instanceof URL ? await this.fetchDrawShapesPayload(e) : e);
		if (!t.length) throw Error("Invalid draw shape payload.");
		return this.store.requestImportShapes(t), t.length;
	}
	exportShapes(e) {
		return j(this.resolveExportGraphics(e));
	}
	downloadShapes(e, t) {
		let n = e && typeof e == "object" && !Array.isArray(e) ? e.fileName : void 0;
		return ce(this.resolveExportGraphics(e), t ?? n);
	}
	suppressIdentify(e) {
		if (this.store.identifyGeometryGraphicId) return !1;
		let t = this.store.activeTool, n = t === null || t === "", r = t === "edit", i = t !== null && t !== "" && !r, a = this.$iApi.panel.opened.some((e) => e.id === D), o = this.store.shapeDetailsPickEnabled && n, s = o || a || r ? this.getHitDrawGraphic(e, !1) : void 0, c = s?.id ?? s?.attributes?.id;
		return (o || a) && c ? (this.store.selectGraphic(c), E(this.$iApi, "details"), this.store.requestShapePanelFocus(), !0) : !c && a ? (this.$iApi.panel.close(D), this.store.setShapeDetailsPickEnabled(!1), !0) : !c && o ? !0 : !c && r ? (this.store.requestStopEditMode(), !0) : i || r;
	}
	async fetchDrawShapesPayload(e) {
		let t = await fetch(e);
		if (!t.ok) throw Error(`Unable to import draw shapes from ${e.toString()}.`);
		return t.json();
	}
	getExportSelectionIds(e) {
		if (e !== void 0) {
			if (typeof e == "string") return [e];
			if (Array.isArray(e)) return e;
			if (!(!e || e.ids === void 0)) return Array.isArray(e.ids) ? e.ids : [e.ids];
		}
	}
	getDrawGraphicId(e) {
		return se(e);
	}
	resolveExportGraphics(e) {
		let t = this.getExportSelectionIds(e), n = this.store.graphics;
		if (t === void 0) return [...n];
		let r = new Set(t);
		return n.filter((e) => {
			let t = this.getDrawGraphicId(e);
			return t ? r.has(t) : !1;
		});
	}
	getHitDrawGraphic(e, t = !0) {
		if (this.store.identifyGeometryGraphicId) return this.store.graphics.find((e) => e.id === this.store.identifyGeometryGraphicId);
		let n = e.mapPoint.toESRI(), r = e.input === "touch" ? Pe : Ne, i = this.$iApi.geo.query.makeClickBuffer(e.mapPoint, r).toESRI();
		return this.store.graphics.slice().reverse().find((e) => {
			let r = R(e.geometry);
			if (!r) return !1;
			let a = ie(e.attributes), o = oe(e.attributes);
			return B(t ? Fe(r, a, o) : r, n, i);
		});
	}
	getIdentifyGeometry(e) {
		let t = this.getHitDrawGraphic(e);
		if (!t?.geometry) return;
		let n = V(R(t.geometry), ie(t.attributes), oe(t.attributes));
		if (n) return this.$iApi.geo.geom.geomEsriToRamp(n, t.id ?? t.attributes?.id);
	}
}, Le = ({ iApi: t, drawStore: n, getDrawGraphicId: r, getGraphicDrawBufferSettings: i, getGraphicDrawIdentifyBufferMode: a, getSelectedFeatureCountGraphic: o }) => {
	let s = /* @__PURE__ */ new Map(), c = null, l, u = (e) => e.reduce((e, t) => e + (t.items?.length ?? 0), 0), d = async (e) => {
		if (!e) return null;
		try {
			let n = t.geo.geom.geomEsriToRamp(e, `draw-count-${Date.now()}`), r = Date.now(), i = t.geo.layer.allLayersOnMap(!1).filter((e) => e.supportsIdentify && e.canIdentify()).map((e) => e.runIdentify({
				geometry: n,
				tolerance: e.mouseTolerance
			})).flat();
			return i.forEach((e) => {
				e.requestTime = r;
			}), await Promise.allSettled(i.map((e) => e.loading)), u(i);
		} catch (e) {
			return console.warn("Unable to count draw identify results.", e), null;
		}
	}, p = async (e = o()) => {
		let t = r(e), c = R(e?.geometry);
		if (!e || !t || !c) return;
		let l = (s.get(t) ?? 0) + 1;
		s.set(t, l), n.setShapeFeatureCountsLoading(t);
		try {
			if (await S(), s.get(t) !== l) return;
			let r = i(e), o = a(e), u = r.distance > 0 ? T(c, r) : void 0, f = o === "shape" ? c : o === "buffer-only" ? u : r.distance > 0 ? b(c, r) : c, p = d(c), m = u ? d(u) : Promise.resolve(null), ee = f === c ? p : f === u ? m : d(f), [te, h, g] = await Promise.all([
				p,
				m,
				ee
			]);
			if (s.get(t) !== l) return;
			n.setShapeFeatureCounts(t, {
				shape: te,
				buffer: h,
				total: g,
				loading: !1,
				updatedAt: Date.now()
			});
		} catch (e) {
			if (s.get(t) !== l) return;
			console.warn("Unable to refresh draw feature counts.", e), n.setShapeFeatureCounts(t, {
				shape: null,
				buffer: null,
				total: null,
				loading: !1,
				updatedAt: Date.now()
			});
		}
	}, m = () => {
		c !== null && (window.clearTimeout(c), c = null), l = void 0;
	}, ee = (e) => {
		e && s.delete(e);
	}, h = (e) => {
		l = e, c !== null && window.clearTimeout(c), c = window.setTimeout(() => {
			c = null;
			let e = l;
			l = void 0, e && p(e);
		}, 350);
	}, g = (e) => {
		if (!e) return;
		if (e.type === "point") return e;
		if (e.type === "polygon") try {
			let t = f(e);
			if (t) return t;
		} catch {}
		let t = e.extent;
		if (t) return new te({
			x: (t.xmin + t.xmax) / 2,
			y: (t.ymin + t.ymax) / 2,
			spatialReference: e.spatialReference
		});
	};
	return {
		refreshSelectedGraphicFeatureCounts: p,
		cancelPendingFeatureCountRefresh: m,
		cancelFeatureCountRunsForGraphic: ee,
		scheduleFeatureCountRefresh: h,
		runIdentifyForSelectedGraphic: async () => {
			let i = o(), a = r(i), s = g(R(i?.geometry));
			if (!(!a || !s)) {
				await p(i), n.setIdentifyGeometryGraphicId(a);
				try {
					t.geo.map.runIdentify(e.fromESRI(s, a));
				} finally {
					n.setIdentifyGeometryGraphicId(null);
				}
			}
		}
	};
}, Re = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], H = 10, U = 1.05, ze = .95, W = .05, Be = ({ iApi: e, drawStore: t, t: n, translateTerm: r, getSketch: i, getGraphicsLayer: a, getSelectedGraphic: o, getKeyboardEditGraphic: l, setSelectedGraphic: d, prepareDrawGraphic: f, applyDrawSymbol: p, syncBufferGraphic: ee, syncGraphicStoreRecord: g, syncActiveSketchEditToSource: _, highlightSelectedGraphic: v, deleteSelectedGraphic: y, startSketchUpdate: b, cancelPendingSketchUpdate: x, clearActiveSketchEdit: S, refreshMeasurementGraphics: C, scheduleMeasurementRefresh: ne, cancelPendingFeatureCountRefresh: re, refreshSelectedGraphicFeatureCounts: w }) => {
	let T = !1, E = null, D = [], O = () => {
		T = !1, E = null, D = [];
	}, k = () => {
		let n = e.geo.map.esriView;
		E && (t.activeTool === "polyline" ? E.geometry = new s({
			paths: [D],
			spatialReference: n.spatialReference
		}) : E.geometry = new u({
			rings: [D],
			spatialReference: n.spatialReference
		}));
	}, ie = () => {
		let n = i(), r = e.geo.map.esriView;
		return t.activeTool === "polyline" ? new h({
			geometry: new s({
				paths: [D],
				spatialReference: r.spatialReference
			}),
			symbol: n?.polylineSymbol || new m({
				color: [
					0,
					0,
					255,
					1
				],
				width: 2
			})
		}) : new h({
			geometry: new u({
				rings: [D],
				spatialReference: r.spatialReference
			}),
			symbol: n?.polygonSymbol || new c({
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
		if (!T) {
			T = !0, D = [[c.x, c.y]], E = ie(), E.attributes = {
				id: `temp-graphic-${Date.now()}`,
				type: t.activeTool
			}, a()?.add(E), C(E, o), e.updateAlert(n("draw.multiPoint.started", {
				type: r(o),
				count: 1
			}));
			return;
		}
		D.push([c.x, c.y]), k(), C(E, o), e.updateAlert(n("draw.multiPoint.pointAdded", {
			type: r(o),
			count: D.length
		}));
	}, oe = async () => {
		let o = a(), s = i();
		if (!o || !s || t.activeTool !== "edit") return;
		await e.geo.map.viewPromise;
		let c = e.geo.map.esriView, l = {
			x: c.width / 2,
			y: c.height / 2
		}, u = {
			x: l.x,
			y: l.y,
			width: 20,
			height: 20
		}, f = (await c.hitTest(u, { include: o })).results.filter((e) => !("graphic" in e) || e.graphic.layer !== o ? !1 : !!e.graphic.attributes?.id);
		f.length > 0 ? (b(f[0].graphic), e.updateAlert(n("draw.graphic.selected", { type: r(f[0].graphic.attributes?.type) }))) : (x(), s.cancel(), S({ restoreSource: !0 }), d(null), t.clearSelection());
	}, A = async () => {
		let o = i(), l = t.activeTool;
		if (!o || !l) return;
		await e.geo.map.viewPromise;
		let d = e.geo.map.esriView, p = {
			x: Math.floor(d.width / 2),
			y: Math.floor(d.height / 2)
		}, m = d.toMap(p), g = d.extent, _ = Math.min(g.width, g.height) / 10, v;
		switch (l) {
			case "point":
				v = new h({
					geometry: new te({
						x: m.x,
						y: m.y,
						spatialReference: d.spatialReference
					}),
					symbol: o.pointSymbol
				});
				break;
			case "polyline":
				v = new h({
					geometry: new s({
						paths: [[[m.x - _ / 2, m.y], [m.x + _ / 2, m.y]]],
						spatialReference: d.spatialReference
					}),
					symbol: o.polylineSymbol
				});
				break;
			case "polygon":
			case "rectangle":
				let e = _ / 2;
				v = new h({
					geometry: new u({
						rings: [[
							[m.x - e, m.y - e],
							[m.x + e, m.y - e],
							[m.x + e, m.y + e],
							[m.x - e, m.y + e],
							[m.x - e, m.y - e]
						]],
						spatialReference: d.spatialReference
					}),
					symbol: o.polygonSymbol || new c({
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
					let r = e / 36 * 2 * Math.PI, i = m.x + t * Math.cos(r), a = m.y + t * Math.sin(r);
					n.push([i, a]);
				}
				v = new h({
					geometry: new u({
						rings: [n],
						spatialReference: d.spatialReference
					}),
					symbol: o.polygonSymbol || new c({
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
				console.warn("Unknown tool type:", l);
				return;
		}
		if (!v) return;
		let y = f(v, l);
		a()?.add(v), ee(v), t.addGraphic({
			id: y,
			type: l,
			geometry: v.geometry,
			attributes: v.attributes
		}), C(), l !== "point" && (t.clearSelection(), t.setActiveTool(""), e.keyboardNav?.reset(), o.cancel()), e.updateAlert(n("draw.graphic.created", { type: r(l) }));
	}, se = () => {
		let i = t.activeTool ?? void 0;
		D.pop(), k(), E.set("geometry", E?.geometry), C(E, i), e.updateAlert(n("draw.multiPoint.pointRemoved", {
			type: r(i),
			count: D.length
		}));
	}, ce = () => {
		E && a()?.remove(E), O(), C(), e.updateAlert(n("draw.multiPoint.canceled"));
	}, j = (r) => {
		let a = e.geo.map.esriView?.container;
		if (!(!document.activeElement || !a?.contains(document.activeElement))) switch (r.key) {
			case "Enter":
				r.preventDefault(), t.activeTool && t.activeTool !== "edit" ? (t.activeTool === "polyline" || t.activeTool === "polygon") && (T || D.length === 0) ? ae() : A() : oe();
				break;
			case "Delete":
			case "Backspace":
				T && D.length > 1 ? (r.preventDefault(), se()) : T && D.length === 1 ? (r.preventDefault(), ce()) : o() && (r.preventDefault(), y());
				break;
			case "Escape":
				t.setActiveTool(null), i()?.cancel(), d(null), v(void 0), t.clearSelection(), C(), e.updateAlert(n("draw.tool.canceled"));
				break;
		}
	}, M = (e) => {
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
	}, N = (t, n, r) => {
		let i = e.geo.map.esriView, a = 0, o = 0;
		t === "ArrowLeft" && (a = -10), t === "ArrowRight" && (a = H), t === "ArrowUp" && (o = -10), t === "ArrowDown" && (o = H);
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
	}, le = (e) => e === "ArrowUp" || e === "ArrowRight" ? U : ze, ue = (e) => e === "ArrowLeft" ? -.05 : e === "ArrowRight" ? W : 0, P = (e, t, n) => e.map(([e, r]) => [e + t, r + n]), de = (e, t, n) => e.map(([e, r]) => [t.x + (e - t.x) * n, t.y + (r - t.y) * n]), fe = (e, t, n) => {
		let r = Math.cos(n), i = Math.sin(n);
		return e.map(([e, n]) => {
			let a = e - t.x, o = n - t.y, s = a * r - o * i, c = a * i + o * r;
			return [t.x + s, t.y + c];
		});
	}, F = (e, t) => e.map((e) => t(e)), pe = (t, r, i, a) => {
		let o = M(t), c = N(r, o, t.spatialReference);
		if (t.type === "point") {
			if (!i && !a) {
				let e = t;
				return new te({
					x: e.x + c.x,
					y: e.y + c.y,
					spatialReference: t.spatialReference
				});
			}
			return e.updateAlert(n(i ? "draw.point.resize.unsupported" : "draw.point.rotate.unsupported")), t.clone();
		}
		if (t.type === "polyline") {
			let e = t.paths;
			if (!i && !a) return new s({
				paths: F(e, (e) => P(e, c.x, c.y)),
				spatialReference: t.spatialReference
			});
			if (i) return new s({
				paths: F(e, (e) => de(e, o, le(r))),
				spatialReference: t.spatialReference
			});
			let n = ue(r);
			return n === 0 ? t.clone() : new s({
				paths: F(e, (e) => fe(e, o, n)),
				spatialReference: t.spatialReference
			});
		}
		if (t.type === "polygon") {
			let e = t.rings;
			if (!i && !a) return new u({
				rings: F(e, (e) => P(e, c.x, c.y)),
				spatialReference: t.spatialReference
			});
			if (i) return new u({
				rings: F(e, (e) => de(e, o, le(r))),
				spatialReference: t.spatialReference
			});
			let n = ue(r);
			return n === 0 ? t.clone() : new u({
				rings: F(e, (e) => fe(e, o, n)),
				spatialReference: t.spatialReference
			});
		}
	};
	return {
		handleNavigationKeyDown: j,
		handleGraphicKeyboardEdit: (r) => {
			let i = e.geo.map.esriView.container;
			if (!document.activeElement || !i?.contains(document.activeElement) || !Re.includes(r.key) || t.activeTool !== "edit" || t.shapeDetailsActiveTab !== "edit") return;
			let a = l() ?? o();
			if (!a) return;
			r.preventDefault(), r.stopPropagation();
			let s = r.shiftKey, c = r.altKey, u = pe(a.geometry, r.key, s, c);
			if (!u) return;
			a.geometry = u, a.set("geometry", u), p(a);
			let d = _() ?? a;
			d === a && (ee(a), g(a)), v(d), ne(d, d.attributes?.type), re(), w(d);
			let f = s ? "resized" : c ? "rotated" : "moved";
			e.updateAlert(n(`draw.graphic.${f}`));
		},
		resetMultiPointState: O
	};
}, Ve = 16, He = 2, Ue = 8, G = 8, We = 2, K = "#1d4ed8", Ge = 30, Ke = ({ iApi: e, drawStore: t, locale: n, t: i, getGraphicsLayer: a, isShapeDetailsOpen: s, getShapeDetailsGraphic: c }) => {
	let u = null, d = 0, f = 0, p = [], m = null, ee = null, g = null, _ = null, y = null, b = null, x = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), C = [], ne = [], re = [], w = Ce(""), T = () => t.graphics.some((e) => {
		let n = String(e.id ?? e.attributes?.id ?? ""), r = v(e.attributes), i = D(n) && t.shapeDetailsLabelsVisible;
		return r.areaLabel || r.segmentLength || r.segmentLetters || r.vertexNumbers || i;
	}), E = () => t.measurementsEnabled || s() || T(), D = (e) => s() && t.selectedGraphicId === e, O = () => s() && t.shapeDetailsActiveTab === "details" && !!t.selectedGraphicId, k = (e) => {
		let n = le(e);
		return !!n && n.graphicId === t.selectedGraphicId;
	}, ie = (e) => O() && k(e) && e === t.activeSegmentKey, ae = (e) => O() && k(e) && e === t.activeVertexKey, oe = (e) => new o({
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
	}), A = (e, t) => new l({
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
	}), se = (e, t, n, r) => [new h({
		geometry: e,
		symbol: oe(r),
		attributes: {
			...n,
			drawMeasurementKind: "vertex-marker"
		}
	}), new h({
		geometry: e,
		symbol: A(t, r),
		attributes: {
			...n,
			drawMeasurementKind: "vertex-label",
			drawMeasurementText: t
		}
	})], ce = (e, t) => new te({
		x: e[0],
		y: e[1],
		spatialReference: t
	}), j = (e) => !!e && Number.isFinite(e.x) && Number.isFinite(e.y), pe = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), me = (e) => {
		let t = Math.hypot(e.x, e.y);
		if (!(!Number.isFinite(t) || t <= 0)) return {
			x: e.x / t,
			y: e.y / t
		};
	}, he = (e) => {
		let t = e;
		for (; t > 180;) t -= 360;
		for (; t < -180;) t += 360;
		return t > 90 && (t -= 180), t < -90 && (t += 180), t;
	}, ge = (e) => {
		if (e.length < 2) return;
		let t = [], n = 0;
		for (let r = 0; r < e.length - 1; r++) {
			let i = pe(e[r], e[r + 1]);
			t.push(i), n += i;
		}
		if (!Number.isFinite(n) || n <= 0) return;
		let r = n / 2, i = 0;
		for (let a = 0; a < e.length - 1; a++) {
			let o = t[a];
			if (!(o <= 0)) {
				if (i + o >= r) {
					let t = e[a], s = e[a + 1], c = (r - i) / o, l = me({
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
	}, I = (e, t, n) => {
		let r = n.toScreen(new te({
			x: e[0],
			y: e[1],
			spatialReference: t
		}));
		return j(r) ? {
			x: r.x,
			y: r.y
		} : void 0;
	}, _e = (e) => e.length > 1 && e[0][0] === e[e.length - 1][0] && e[0][1] === e[e.length - 1][1] ? e.slice(0, -1) : e, L = (e, t) => {
		let n = e.rings, r = 0, i = 0, a = 0, o = [];
		if (n.forEach((n) => {
			let s = _e(n).map((n) => I(n, e.spatialReference, t)).filter((e) => !!e);
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
	}, ve = (e, t) => {
		let n = e.paths.flatMap((e) => e).map((n) => I(n, e.spatialReference, t)).filter((e) => !!e);
		if (n.length) return {
			x: n.reduce((e, t) => e + t.x, 0) / n.length,
			y: n.reduce((e, t) => e + t.y, 0) / n.length
		};
	}, ye = (e, t) => {
		if (e.type === "polygon") return L(e, t);
		if (e.type === "polyline") return ve(e, t);
	}, be = (e, t) => {
		let n = e.spatialReference, r = [], i = (e, i) => {
			let a = i ? _e(e) : e;
			a.forEach((e) => {
				let i = I(e, n, t);
				i && r.push(i);
			});
			let o = i ? a.length : a.length - 1;
			for (let e = 0; e < o; e++) {
				let i = a[e], o = a[(e + 1) % a.length], s = I([(i[0] + o[0]) / 2, (i[1] + o[1]) / 2], n, t);
				s && r.push(s);
			}
		};
		return e.type === "polyline" && e.paths.forEach((e) => i(e, !1)), e.type === "polygon" && e.rings.forEach((e) => i(e, !0)), r;
	}, xe = (e, t) => {
		let n = ge([e.start, e.end].map((n) => I(n, e.geometry.spatialReference, t)).filter((e) => !!e));
		if (!n) return;
		let r = {
			x: -n.tangent.y,
			y: n.tangent.x
		};
		if (e.geometry.type === "polygon" || e.geometry.type === "polyline") {
			let i = ye(e.geometry, t);
			if (i) {
				let e = {
					x: n.midpoint.x - i.x,
					y: n.midpoint.y - i.y
				};
				r.x * e.x + r.y * e.y < 0 && (r = {
					x: -r.x,
					y: -r.y
				});
			}
		}
		let i = Math.atan2(n.tangent.y, n.tangent.x);
		return {
			...n,
			normal: r,
			angle: he(i * 180 / Math.PI)
		};
	}, Se = (e, t, n, r) => {
		let i = Ve / 2;
		return be(e.geometry, r).reduce((e, r) => {
			let a = {
				x: r.x - t.midpoint.x,
				y: r.y - t.midpoint.y
			};
			if (a.x * n.x + a.y * n.y <= i) return e;
			let o = Math.hypot(a.x, a.y);
			return !Number.isFinite(o) || o <= i ? e : e + 100 / Math.max(o, G);
		}, 0);
	}, we = (e, t, n) => {
		let r = {
			x: -t.normal.x,
			y: -t.normal.y
		}, i = (r) => ({
			anchor: {
				x: t.midpoint.x + r.x * Ve,
				y: t.midpoint.y + r.y * Ve
			},
			angle: t.angle,
			sideCrowdingScore: Se(e, t, r, n)
		});
		return [i(t.normal), i(r)];
	}, Te = (e, t) => {
		let n = Math.max(e.left, t.left) - t.left, r = Math.max(e.top, t.top) - t.top, i = Math.min(e.right, t.right) - t.left, a = Math.min(e.bottom, t.bottom) - t.top;
		if (!(i <= n || a <= r)) return {
			left: n,
			top: r,
			right: i,
			bottom: a,
			width: i - n,
			height: a - r
		};
	}, Ee = (e, t, n, r = 0) => {
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
	}, De = (e) => Ee({
		x: e.left + e.width / 2,
		y: e.top + e.height / 2
	}, e.width, e.height), Oe = (e, t) => Ee(t.anchor, e.offsetWidth || e.getBoundingClientRect().width, e.offsetHeight || e.getBoundingClientRect().height, t.angle), ke = (e, t) => e.corners.reduce((e, n) => {
		let r = n.x * t.x + n.y * t.y;
		return {
			min: Math.min(e.min, r),
			max: Math.max(e.max, r)
		};
	}, {
		min: Infinity,
		max: -Infinity
	}), Ae = (e, t, n = 0) => [...e.axes, ...t.axes].every((r) => {
		let i = ke(e, r), a = ke(t, r);
		return !(i.max + n <= a.min || a.max + n <= i.min);
	}), je = (e, t) => e.corners.every((e) => e.x >= 0 && e.y >= 0 && e.x <= t.width && e.y <= t.height), Me = (e) => {
		let t = window.getComputedStyle(e), n = e.getBoundingClientRect();
		return t.display !== "none" && t.visibility !== "hidden" && t.opacity !== "0" && n.width > 0 && n.height > 0;
	}, Ne = (e, t) => {
		let n = e.container;
		return n ? Array.from(n.querySelectorAll([
			".esri-ui .esri-component",
			".esri-popup",
			".esri-attribution",
			"arcgis-sketch",
			"[class*=\"esri-sketch\"]"
		].join(","))).filter((e) => !!y && !y.contains(e)).filter(Me).map((e) => Te(e.getBoundingClientRect(), t)).filter((e) => !!e).filter((e) => e.width < t.width * .85 || e.height < t.height * .85).map(De) : [];
	}, Pe = (e) => e.graphics.find((e) => {
		let t = e.attributes, n = e.geometry;
		return !!t && !!n && n.type === "point" && (t.drawMeasurementKind === "vertex-marker" || t.drawMeasurementKind === "vertex-label");
	})?.geometry, B = (e, t) => {
		let n = Pe(e);
		if (!n) return;
		let r = t.toScreen(n);
		if (j(r)) return Ee(r, Ge, Ge);
	}, V = (e, t) => {
		let n = [];
		return e.filter((e) => {
			let r = B(e, t);
			return r ? n.some((e) => Ae(r, e, He)) ? !1 : (n.push(r), !0) : !0;
		});
	}, Fe = (e) => {
		let t = /* @__PURE__ */ new Set(), n = [];
		return p.forEach((r) => {
			let i = r.attributes, a = r.geometry;
			if (!i || !a || a.type !== "point") return;
			let o = e.toScreen(a);
			if (j(o) && (i.drawMeasurementKind === "vertex-marker" || i.drawMeasurementKind === "vertex-label")) {
				let e = i.drawVertexKey ?? `${o.x}:${o.y}`;
				if (t.has(e)) return;
				t.add(e), n.push(Ee(o, Ge, Ge));
			}
		}), n;
	}, Ie = (e, t) => [...Fe(e), ...Ne(e, t)], Le = (e) => {
		let t = e.container;
		if (t) return y?.parentElement === t ? y : (y?.remove(), y = document.createElement("div"), y.className = "rv-draw-segment-label-overlay", y.setAttribute("aria-hidden", "true"), t.appendChild(y), x = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), y);
	}, Re = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-badge"), r = e.querySelector(".rv-draw-segment-label-distance");
		n && (n.textContent = t.letter, n.style.backgroundColor = t.badgeColor, n.hidden = !t.showBadge), r && (r.textContent = t.distanceText ?? ""), e.dataset.segmentKey = t.key, e.classList.toggle("rv-no-badge", !t.showBadge);
	}, H = (e) => {
		let t = document.createElement("div");
		t.className = "rv-draw-segment-label", t.style.visibility = "hidden", t.style.left = "0px", t.style.top = "0px";
		let n = document.createElement("span");
		n.className = "rv-draw-segment-label-badge", t.appendChild(n);
		let r = document.createElement("span");
		return r.className = "rv-draw-segment-label-distance", t.appendChild(r), Re(t, e), t;
	}, U = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-distance");
		n && (n.textContent = t.text), e.dataset.areaLabelKey = t.key;
	}, ze = (e) => {
		let t = document.createElement("div");
		t.className = "rv-draw-segment-label rv-draw-area-label rv-no-badge", t.style.visibility = "hidden", t.style.left = "0px", t.style.top = "0px";
		let n = document.createElement("span");
		return n.className = "rv-draw-segment-label-distance", t.appendChild(n), U(t, e), t;
	}, W = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-distance");
		e.classList.toggle("rv-distance-hidden", t), n && (n.hidden = t);
	}, Be = (e, t) => {
		e.style.left = `${t.anchor.x}px`, e.style.top = `${t.anchor.y}px`, e.style.transform = `translate(-50%, -50%) rotate(${t.angle}deg)`, e.style.transformOrigin = "center center";
	}, Ke = (e, t, n) => je(e, t) ? !n.some((t) => Ae(e, t, He)) : !1, qe = (e, t, n, r) => Ke(e, t, r) && !n.some((t) => Ae(e, t, He)), Je = (e, t, n, r, i, a) => {
		if (qe(e, t, i, a)) return n.sideCrowdingScore + r * .01;
	}, Ye = (e, t, n, r, i, a) => {
		let o, s = [...r, ...i];
		return t.forEach((t, r) => {
			Be(e, t);
			let i = Oe(e, t), c = Je(i, n, t, r, s, a);
			c !== void 0 && (!o || c < o.score) && (o = {
				candidate: t,
				box: i,
				score: c
			});
		}), o;
	}, Xe = () => {
		x.forEach((e, t) => {
			e.classList.toggle("rv-active", ie(t));
		});
	}, Ze = () => {
		b !== null && (window.cancelAnimationFrame(b), b = null), C = [], ne = [], y?.remove(), y = null, x.clear(), S.clear();
	}, Qe = (t, n = ne) => {
		let r = e.geo.map.esriView;
		if (C = t, ne = n, !r || !t.length && !n.length) {
			Ze();
			return;
		}
		let i = Le(r), a = r.container;
		if (!i || !a) {
			Ze();
			return;
		}
		let o = new Set(t.map((e) => e.key));
		x.forEach((e, t) => {
			o.has(t) || (e.remove(), x.delete(t));
		}), t.forEach((e) => {
			let t = x.get(e.key);
			t ? Re(t, e) : (t = H(e), x.set(e.key, t), i.appendChild(t)), t.style.display = "inline-flex", t.style.visibility = "hidden", t.style.transform = "translate(-50%, -50%) rotate(0deg)", W(t, !e.distanceText);
		});
		let s = new Set(n.map((e) => e.key));
		S.forEach((e, t) => {
			s.has(t) || (e.remove(), S.delete(t));
		}), n.forEach((e) => {
			let t = S.get(e.key);
			t ? U(t, e) : (t = ze(e), S.set(e.key, t), i.appendChild(t)), t.style.display = "inline-flex", t.style.visibility = "hidden", t.style.transform = "translate(-50%, -50%) rotate(0deg)";
		});
		let c = a.getBoundingClientRect(), l = Ie(r, c), u = [], d = [];
		n.forEach((e) => {
			let t = S.get(e.key);
			if (!t) return;
			let n = r.toScreen(e.point);
			if (!j(n)) {
				t.style.display = "none";
				return;
			}
			Be(t, {
				anchor: {
					x: n.x,
					y: n.y
				},
				angle: 0
			});
			let i = Oe(t, {
				anchor: {
					x: n.x,
					y: n.y
				},
				angle: 0
			});
			if (!qe(i, c, u, l)) {
				t.style.display = "none";
				return;
			}
			u.push(i), t.style.visibility = "visible";
		});
		let f = [], p = [];
		t.forEach((e) => {
			let t = x.get(e.key);
			if (!t) return;
			let n = xe(e, r);
			if (!n || n.length < G) {
				t.style.display = "none";
				return;
			}
			let i = t.offsetWidth, a = !!e.distanceText && n.length >= i + We;
			if (W(t, !a), !a && !e.showBadge) {
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
			let t = we(e.label, e.placement, r), n = Ye(e.element, t, c, u, d, l);
			return n ? (Be(e.element, n.candidate), d.push(n.box), e.element.style.visibility = "visible", !0) : !1;
		};
		f.forEach((e) => {
			m(e) || (e.label.showBadge ? (W(e.element, !0), p.push(e)) : e.element.style.display = "none");
		}), p.forEach((e) => {
			m(e) || (e.element.style.display = "none");
		}), Xe();
	}, q = () => {
		b === null && (b = window.requestAnimationFrame(() => {
			b = null, Qe(C, ne);
		}));
	}, J = () => {
		if (re.length) return;
		let t = () => q();
		re = [e.event.on(r.MAP_EXTENTCHANGE, t), e.event.on(r.RAMP_MOBILEVIEW_CHANGE, t)];
	}, Y = () => {
		re.forEach((t) => e.event.off(t)), re = [];
	}, X = (t) => {
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
	}, $e = (t) => {
		if (Number.isFinite(t.x) && Number.isFinite(t.y)) return {
			x: t.x,
			y: t.y
		};
		let n = X(t), r = e.geo.map.esriView?.container;
		if (!n || !r) return;
		let i = r.getBoundingClientRect();
		return {
			x: n.x - i.left,
			y: n.y - i.top
		};
	}, et = (e) => {
		let t = X(e);
		if (t) for (let [e, n] of x) {
			if (!Me(n)) continue;
			let r = n.getBoundingClientRect();
			if (t.x >= r.left && t.x <= r.right && t.y >= r.top && t.y <= r.bottom) return e;
		}
	}, tt = (e, t, n) => {
		let r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = r.x * r.x + r.y * r.y;
		if (i <= 0) return pe(e, t);
		let a = Math.max(0, Math.min(1, ((e.x - t.x) * r.x + (e.y - t.y) * r.y) / i));
		return pe(e, {
			x: t.x + r.x * a,
			y: t.y + r.y * a
		});
	}, nt = (t) => {
		let n = e.geo.map.esriView, r = $e(t);
		if (!n || !r) return;
		let i;
		return C.forEach((e) => {
			let t = I(e.start, e.geometry.spatialReference, n), a = I(e.end, e.geometry.spatialReference, n);
			if (!t || !a) return;
			let o = tt(r, t, a);
			o <= Ue && (!i || o < i.distance) && (i = {
				key: e.key,
				distance: o
			});
		}), i?.key;
	}, rt = (e) => {
		if (e.type === "circle" || !e.includeDistance && !e.includeSegmentBadges) return [];
		let t = e.geometry;
		return fe(t, e.id).map((r) => {
			let a = P(r.lengthMeters, n.value, i), o = e.includeDistance ? a.display : void 0;
			return {
				graphics: [],
				segmentLabels: [{
					key: r.key,
					letter: r.letter,
					showBadge: e.includeSegmentBadges,
					distanceText: o,
					badgeColor: e.badgeColor,
					start: r.start,
					end: r.end,
					geometry: t
				}],
				accessibleText: e.includeDistance ? i("draw.measurements.segment", {
					index: r.letter,
					distance: a.spoken
				}) : void 0
			};
		});
	}, it = (e) => e.type === "circle" || e.geometry.type !== "polyline" && e.geometry.type !== "polygon" ? [] : ue(e.geometry, e.id).map((t) => {
		let n = ae(t.key);
		return { graphics: se(ce(t.vertex, e.geometry.spatialReference), String(t.index + 1), {
			drawMeasurement: !0,
			drawMeasurementKind: "vertex-label",
			drawGraphicId: e.id,
			drawVertexKey: t.key
		}, n) };
	}), at = (e) => {
		let t = e.geometry;
		if (t.type !== "polygon") return;
		let r = t, a = de(r), o = F(r);
		if (!a || a < .01 || !o) return;
		let s = N(a, n.value, i);
		return {
			graphics: [],
			areaLabels: [{
				key: `${e.id}:area`,
				text: s.display,
				point: o
			}],
			accessibleText: i("draw.measurements.area", { area: s.spoken })
		};
	}, ot = (e) => {
		let t = e.geometry;
		if (!t || t.type === "point" || t.type === "multipoint") return [];
		let n = [...rt(e), ...e.includeVertices ? it(e) : []], r = e.includeArea ? at(e) : void 0;
		return r && n.push(r), n;
	}, st = (e) => e?.attributes?.id, ct = (e, t, n, r) => {
		if (n) return {
			id: e,
			type: t ?? n.type,
			geometry: n,
			...r
		};
	}, lt = (e, t) => {
		if (!t) return;
		let n = e.get(t.id);
		if (!n) {
			e.set(t.id, t);
			return;
		}
		n.geometry = t.geometry, n.type = t.type, n.includeDistance ||= t.includeDistance, n.includeSegmentBadges ||= t.includeSegmentBadges, n.includeVertices ||= t.includeVertices, n.includeArea ||= t.includeArea, n.badgeColor = t.badgeColor || n.badgeColor;
	}, ut = () => t.graphics.map((e) => {
		let n = String(e.id ?? e.attributes?.id ?? ""), r = v(e.attributes), i = D(n) && t.shapeDetailsLabelsVisible, a = i || r.segmentLength, o = i || r.segmentLetters, s = i || r.vertexNumbers;
		return ct(n, e.type ?? e.attributes?.type, R(e.geometry), {
			includeDistance: t.measurementsEnabled || a,
			includeSegmentBadges: o,
			includeVertices: s,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: K
		});
	}).filter((e) => !!e?.id), dt = () => (a()?.graphics.toArray() ?? []).filter((e) => !!st(e)).map((e) => {
		let n = st(e), r = v(e.attributes), i = D(n) && t.shapeDetailsLabelsVisible, a = i || r.segmentLength, o = i || r.segmentLetters, s = i || r.vertexNumbers;
		return ct(n, e.attributes?.type, e.geometry, {
			includeDistance: t.measurementsEnabled || a,
			includeSegmentBadges: o,
			includeVertices: s,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: K
		});
	}).filter((e) => !!e), ft = (e, n) => {
		if (!e) return;
		let r = v(e.attributes), i = st(e), a = !!i && D(i) && t.shapeDetailsLabelsVisible, o = a || r.segmentLength, s = a || r.segmentLetters, c = a || r.vertexNumbers;
		return ct(i ?? "active-draw-measurement", n ?? e.attributes?.type, e.geometry, {
			includeDistance: t.measurementsEnabled || o,
			includeSegmentBadges: s,
			includeVertices: c,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: K
		});
	}, pt = () => {
		if (!s() || !t.shapeDetailsLabelsVisible && !t.shapeDetailsLabelsUseSettings) return;
		let e = c() ?? t.getSelectedGraphic(), n = st(e) ?? String(e?.id ?? "");
		if (!n) return;
		let r = v(e?.attributes), i = t.shapeDetailsLabelsVisible || r.segmentLength, a = t.shapeDetailsLabelsVisible || r.segmentLetters, o = t.shapeDetailsLabelsVisible || r.vertexNumbers;
		return ct(n, e?.attributes?.type ?? e?.type, R(e?.geometry), {
			includeDistance: t.measurementsEnabled || i,
			includeSegmentBadges: a,
			includeVertices: o,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: K
		});
	}, mt = (e, n) => {
		let r = /* @__PURE__ */ new Map();
		return (t.measurementsEnabled || T()) && (ut().forEach((e) => lt(r, e)), dt().forEach((e) => lt(r, e)), lt(r, ft(e, n))), lt(r, pt()), Array.from(r.values()).flatMap((e) => ot(e));
	}, ht = () => {
		t.setHoveredSegmentKey(null), t.setHoveredVertexKey(null);
	}, gt = () => {
		ee?.remove(), ee = null, g?.remove(), g = null, _ && e.geo.map.esriView?.container && e.geo.map.esriView.container.removeEventListener("mouseleave", _), _ = null, ht();
	}, _t = async (t) => {
		let n = e.geo.map.esriView;
		return !n || !p.length ? null : (await n.hitTest(t, { include: p })).results.find((e) => "graphic" in e && !!e.graphic.attributes?.drawMeasurement)?.graphic ?? null;
	}, vt = async (e) => {
		if (!O()) {
			ht();
			return;
		}
		let n = ++f, r = et(e) ?? nt(e);
		if (r) {
			t.setHoveredSegmentKey(k(r) ? r : null), t.setHoveredVertexKey(null);
			return;
		}
		let i = await _t(e);
		if (n !== f) return;
		let a = i?.attributes;
		t.setHoveredSegmentKey(k(a?.drawSegmentKey) ? a.drawSegmentKey : null), t.setHoveredVertexKey(k(a?.drawVertexKey) ? a.drawVertexKey : null);
	}, yt = async (e) => {
		if (!O()) return;
		let n = et(e) ?? nt(e);
		if (n) {
			if (!k(n)) return;
			t.setSelectedSegmentKey(n), t.setSelectedVertexKey(null), e.stopPropagation?.();
			return;
		}
		let r = (await _t(e))?.attributes, i = r?.drawSegmentKey, a = r?.drawVertexKey;
		if (k(i)) t.setSelectedSegmentKey(i), t.setSelectedVertexKey(null);
		else if (k(a)) t.setSelectedVertexKey(a), t.setSelectedSegmentKey(null);
		else return;
		e.stopPropagation?.();
	}, bt = () => {
		let t = e.geo.map.esriView;
		!t || ee || g || (ee = t.on("pointer-move", (e) => {
			vt(e);
		}), g = t.on("click", (e) => {
			yt(e);
		}), _ = ht, t.container?.addEventListener("mouseleave", _));
	}, xt = () => {
		Xe(), p.forEach((e) => {
			let t = e.attributes;
			if (t) {
				if (t.drawMeasurementKind === "vertex-marker") {
					e.symbol = oe(ae(t.drawVertexKey));
					return;
				}
				t.drawMeasurementKind === "vertex-label" && (e.symbol = A(t.drawMeasurementText ?? "", ae(t.drawVertexKey)));
			}
		});
	}, St = () => {
		d++, u !== null && (window.cancelAnimationFrame(u), u = null), m = null, w.value = "", gt(), Y(), Ze();
		try {
			e.geo.map.esriView?.graphics.removeMany(p);
		} catch (e) {
			console.warn("Unable to clear draw measurement graphics.", e);
		}
		p = [];
	}, Ct = (e) => {
		let t = e.map((e) => e.accessibleText).filter((e) => !!e), n = t.length ? i("draw.measurements.summary", { measurements: t.join(". ") }) : i("draw.measurements.none");
		w.value !== n && (w.value = n);
	}, wt = async (t, n) => {
		let r = ++d;
		if (u !== null && (window.cancelAnimationFrame(u), u = null, m = null), !E()) {
			St();
			return;
		}
		try {
			await M();
		} catch (e) {
			console.warn("Unable to load draw measurement operators.", e);
			return;
		}
		if (r !== d || !E()) return;
		let i = e.geo.map.esriView, a = i?.graphics;
		if (!i || !a) return;
		let o = V(mt(t, n), i);
		try {
			p.length && a.removeMany(p);
		} catch (e) {
			console.warn("Unable to remove stale draw measurement graphics.", e);
		}
		p = o.flatMap((e) => e.graphics);
		let s = o.flatMap((e) => e.segmentLabels ?? []), c = o.flatMap((e) => e.areaLabels ?? []);
		Qe(s, c), s.length || c.length ? J() : Y();
		try {
			p.length && a.addMany(p), p.length || s.length ? bt() : gt();
		} catch (e) {
			console.warn("Unable to add draw measurement graphics.", e), p = [], gt();
		}
		Ct(o);
	};
	return z(() => [
		t.activeSegmentKey,
		t.activeVertexKey,
		t.shapeDetailsActiveTab,
		t.selectedGraphicId
	], () => {
		xt();
	}), {
		measurementSummary: w,
		clearMeasurementGraphics: St,
		refreshMeasurementGraphics: wt,
		scheduleMeasurementRefresh: (e, t) => {
			if (!E()) {
				St();
				return;
			}
			m = {
				activeGraphic: e,
				activeTool: t
			}, u === null && (u = window.requestAnimationFrame(() => {
				u = null;
				let e = m;
				m = null, wt(e?.activeGraphic, e?.activeTool);
			}));
		}
	};
}, qe = {
	key: 0,
	class: "sr-only",
	"aria-live": "polite",
	"aria-atomic": "true"
}, Je = 24, Ye = 160, Xe = 48, Ze = /* @__PURE__ */ I({
	__name: "draw",
	setup(n) {
		let { t: a, availableLocales: l, locale: u } = De(), f = (e) => a(e ? `draw.${e}` : "draw.unknown"), g = _e("iApi"), _ = O(), b = t(), T = (e) => {
			let t = l.length ? l : [u.value], n = {};
			for (let r of t) n[r] = a(e, {}, { locale: r });
			return n;
		}, A = null, ce = Ee("sketchEl"), j = null, M = null, N = null, P = null, de = null, F = null, I = !1, L = 0, Ce = null, R = /* @__PURE__ */ new Map(), Oe = 0, Me = {}, Ne = 0, Pe = 0, B = null, V = null, Fe = null, Ie = null, Re = null, H = null, U = null, ze = [
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
		], W = Se([]), Ve, { measurementSummary: He, clearMeasurementGraphics: Ue, refreshMeasurementGraphics: G, scheduleMeasurementRefresh: We } = Ke({
			iApi: g,
			drawStore: _,
			locale: u,
			t: a,
			getGraphicsLayer: () => j,
			isShapeDetailsOpen: () => Z(),
			getShapeDetailsGraphic: () => Gt()
		}), K = null, Ge = (e = _.activeTool) => e !== null && e !== "" || _.shapeDetailsPickEnabled || Z(), Ze = (e = _.activeTool) => {
			let t = g.fixture.get("panguard");
			if (Ge(e)) {
				t && K === null && (K = t.enabled, t.setEnabled(!1));
				return;
			}
			K !== null && (t?.setEnabled(K), K = null);
		}, Qe = (e) => {
			qn(e.detail);
		}, q = (e) => {
			Jn(e.detail);
		}, J = () => {
			try {
				A?.cancel();
			} catch (e) {
				console.warn("Unable to cancel draw sketch.", e);
			}
		}, Y = () => {
			Ce !== null && (window.clearTimeout(Ce), Ce = null);
		}, X = () => A?.widget, $e = (e = A) => e?.widget?.viewModel ?? e?.viewModel, et = (e, t = A) => {
			let n = $e(t);
			n && (n.updateOnGraphicClick = e);
		}, tt = () => P?.state === "active" || $e()?.state === "active" || A?.state === "active", nt = (e, t) => {
			let n = t?.updateGraphics ?? $e()?.updateGraphics ?? X()?.updateGraphics ?? A?.updateGraphics;
			return n ? n.includes(e) || n.toArray().some((t) => t === e || t.attributes?.id === e.attributes?.id) : !1;
		}, rt = (e) => {
			let t = $e()?.defaultUpdateOptions ?? X()?.defaultUpdateOptions ?? A?.defaultUpdateOptions ?? {};
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
		}, it = (e) => {
			if (!A || !e) return;
			let t = X(), n = $e();
			A.layer = e, t && (t.layer = e), n && (n.layer = e, et(!1));
		}, at = () => {
			if (de?.remove(), de = null, P) {
				try {
					P.cancel();
				} catch (e) {
					console.warn("Unable to cancel draw edit sketch view model.", e);
				}
				P.destroy(), P = null;
			}
		}, ot = () => k(_.styleSettings), st = () => y(_.bufferSettings), ct = () => _.identifyBufferMode, lt = (e) => e ? se(e) : void 0, ut = (e) => !!e.attributes?.id && !e.attributes?.drawMeasurement && !e.attributes?.drawBufferFor, dt = async (e) => {
			let t = g.geo.layer.getLayer(e);
			if (t?.esriLayer) {
				let n = !!t.esriLayer.destroyed, r = (g.geo.map.esriMap?.layers.indexOf(t.esriLayer) ?? -1) > -1;
				(n || !r) && (ht(e), t = void 0);
			}
			if (!t) t = g.geo.layer.createLayer({
				id: e,
				layerType: i.GRAPHIC,
				cosmetic: !0,
				system: !0,
				url: ""
			}), await g.geo.map.addLayer(t);
			else if (!t.esriLayer) try {
				await t.loadPromise();
			} catch (t) {
				console.warn(`Unable to initialize draw graphics layer ${e}.`, t);
				return;
			}
			if (!t.esriLayer) {
				console.warn(`Draw graphics layer ${e} does not have an Esri layer.`);
				return;
			}
			return t;
		}, ft = async (e, t) => {
			let n = g.geo.geom.geomEsriToRamp(e, t), r = await g.geo.map.geomToMapSR(n), i = g.geo.map.getSR();
			return n.sr.isEqual(i) ? e.clone() : g.geo.geom.geomRampToEsri(r);
		}, pt = (e, t) => {
			e.geometry = t, e.set("geometry", t);
		}, mt = async (e) => {
			let t = j;
			if (t) for (let n of t.graphics.toArray().filter(ut)) {
				let t = lt(n), r = n.geometry;
				if (r) try {
					let i = await ft(r, t);
					if (e !== void 0 && e !== L) return;
					pt(n, i), Tt(n);
				} catch (e) {
					console.warn("Unable to project draw graphic to the current map projection.", e);
				}
			}
		}, ht = (e) => {
			let t = g.geo.layer.getLayer(e);
			if (t) try {
				g.geo.map.removeLayer(t);
			} catch (t) {
				console.warn(`Unable to remove draw graphics layer ${e}.`, t);
			}
		}, gt = (e) => {
			let t = j?.graphics.toArray().some((t) => lt(t) === e) ?? !1, n = _.graphics.some((t) => lt(t) === e);
			return !t && !n;
		}, _t = (e) => {
			switch (e) {
				case "point":
				case "multipoint": return "T";
				case "polyline": return "P";
				case "polygon": return "G";
				case "circle": return "C";
				case "rectangle": return "R";
				default: return "S";
			}
		}, vt = (e) => {
			let t = _t(e), n = Me[t] ?? 999, r;
			do
				r = `${t}${++n}`;
			while (!gt(r));
			return Me[t] = n, r;
		}, yt = (e, t) => {
			let n = t?.trim();
			return n && gt(n) ? n : vt(e);
		}, bt = (e) => ae(e.attributes), xt = (e) => ie(e.attributes), St = (e) => oe(e.attributes), Ct = (e) => v(e.attributes), wt = () => {
			if (!A) return;
			let e = ot();
			A.pointSymbol = ne("point", e), A.polylineSymbol = ne("polyline", e), A.polygonSymbol = ne("polygon", e);
		}, Tt = (e) => {
			let t = e.attributes?.id;
			t && _.updateGraphic(t, {
				type: e.attributes?.type,
				geometry: e.geometry,
				attributes: e.attributes
			});
		}, Et = (e) => j?.graphics.toArray().find((t) => t.attributes?.id === e), Dt = (e) => {
			if (!e || e.attributes?.drawMeasurement) return;
			let t = e.attributes?.drawBufferFor;
			return t ? Et(t) : e.attributes?.id ? e : void 0;
		}, Ot = (e) => {
			e.symbol = ne(e.geometry?.type ?? e.attributes?.type, bt(e));
		}, kt = (e, t = ot(), n = st(), r = ct()) => {
			e.attributes = {
				...e.attributes ?? {},
				drawStyle: k(t),
				drawBuffer: y(n),
				drawIdentifyBufferMode: r,
				drawMapLabels: C(e.attributes?.drawMapLabels)
			}, Ot(e);
		}, At = (e, t, n) => {
			let r = t ?? e.attributes?.type ?? e.geometry?.type, i = yt(r, n);
			return e.attributes = {
				...e.attributes ?? {},
				id: i,
				type: r,
				drawStyle: k(e.attributes?.drawStyle ?? ot()),
				drawBuffer: y(e.attributes?.drawBuffer ?? st()),
				drawIdentifyBufferMode: oe(e.attributes, ct()),
				drawMapLabels: C(e.attributes?.drawMapLabels)
			}, Ot(e), i;
		}, jt = (e) => {
			if (!e) return;
			let t = R.get(e);
			if (t) {
				try {
					j?.remove(t);
				} catch (e) {
					console.warn("Unable to remove draw buffer graphic.", e);
				}
				R.delete(e);
			}
		}, Mt = () => {
			let e = Array.from(R.values());
			if (e.length) try {
				j?.removeMany(e);
			} catch (e) {
				console.warn("Unable to clear draw buffer graphics.", e);
			}
			R = /* @__PURE__ */ new Map();
		}, Nt = () => {
			if (!j) return;
			let e = j.graphics.toArray().filter(ut);
			if (e.length) try {
				j.removeMany(e);
			} catch (e) {
				console.warn("Unable to clear draw graphics for map refresh.", e);
			}
		}, Pt = (e) => {
			let t = e.attributes?.id;
			if (!t || !j) return;
			let n = x(e, bt(e), xt(e)), r = R.get(t);
			if (!n) {
				jt(t);
				return;
			}
			if (r) {
				r.geometry = n.geometry, r.symbol = n.symbol, r.attributes = n.attributes;
				return;
			}
			let i = j.graphics.indexOf(e);
			i >= 0 ? j.graphics.add(n, i) : j.add(n), R.set(t, n);
		}, Ft = () => {
			let e = _.selectedGraphicSettingsUpdatedGraphicId ?? _.selectedGraphicId, t = e ? _.graphics.find((t) => t.id === e) : void 0, n = B?.attributes?.id === e ? B : e ? j?.graphics.toArray().find((t) => t.attributes?.id === e) : void 0;
			if (!t || !n) return;
			let r = xt(n), i = St(n), a = ae(t.attributes), o = ie(t.attributes), s = oe(t.attributes), c = r.distance !== o.distance || r.unit !== o.unit || i !== s;
			kt(n, a, o, s), H?.sourceGraphic === n && kt(H.editGraphic, a, o, s), Pt(n), Tt(n), Q(Z() ? n : void 0), c && Kt(n);
		}, It = (e, t = !0) => {
			let n = Dt(e);
			n && (B = n, Tt(n), n.attributes?.id && _.selectGraphic(n.attributes.id), Q(t ? n : void 0));
		}, Lt = (e) => {
			It(e), $t("details"), _.requestShapePanelFocus(), Kt(e);
		}, Rt = (e) => {
			It(e, !1), Wt(e);
		}, zt = (e) => {
			if (e) return e;
			let t = _.selectedGraphicId;
			return B && (!t || B.attributes?.id === t) ? B : t ? j?.graphics.toArray().find((e) => e.attributes?.id === t) : void 0;
		}, Bt = () => {
			let e = B ?? j?.graphics.toArray().find((e) => e.attributes?.id === _.selectedGraphicId), t = e?.attributes?.id;
			if (!e || !t) return !1;
			try {
				A?.delete();
			} catch (e) {
				console.warn("Unable to delete draw sketch graphic.", e);
			}
			return H?.sourceGraphic === e && $({ restoreSource: !1 }), jt(t), Jt(t), qt(), j?.remove(e), _.removeGraphic(t), B = null, _.clearSelection(), Q(void 0), G(), g.updateAlert(a("draw.graphic.deleted")), !0;
		}, Vt = async (e) => {
			if (!e.length || !j) return 0;
			let t = j, n = [];
			for (let t of e) try {
				let e = ee(t.geometry);
				if (!e) continue;
				let r = await ft(e, t.id), i = t.type || r.type, a = new h({
					geometry: r,
					attributes: {
						type: i,
						drawStyle: k(t.settings.drawStyle),
						drawBuffer: y(t.settings.drawBuffer),
						drawIdentifyBufferMode: t.settings.drawIdentifyBufferMode,
						drawMapLabels: C(t.settings.drawMapLabels)
					}
				}), o = At(a, i, t.id);
				n.push(a), _.addGraphic({
					id: o,
					type: i,
					geometry: a.geometry,
					attributes: a.attributes
				});
			} catch {}
			return n.length ? t === j ? (t.addMany(n), n.forEach(Pt), G(), g.updateAlert(a("draw.import.success", { count: n.length })), n.length) : 0 : (g.updateAlert(a("draw.import.error.invalid")), 0);
		}, Ht = async () => {
			let e = _.importShapesRequestId;
			!e || e === Pe || !j || (await Vt([..._.importShapeRecords]), Pe = e, _.clearImportShapes(e));
		}, Ut = async (e) => {
			let t = j;
			if (!t || !_.graphics.length) return;
			let n = new Set(t.graphics.toArray().map((e) => lt(e)).filter((e) => !!e)), r = [];
			for (let e of _.graphics) {
				let t = lt(e), i = e.geometry?.clone?.() ?? e.geometry;
				if (!(!t || !i || n.has(t))) try {
					let a = await ft(i, t), o = e.type ?? e.attributes?.type ?? a.type, s = new h({
						geometry: a,
						attributes: {
							...e.attributes ?? {},
							id: t,
							type: o
						}
					});
					Ot(s), _.updateGraphic(t, {
						type: o,
						geometry: s.geometry,
						attributes: s.attributes
					}), n.add(t), r.push(s);
				} catch (e) {
					console.warn("Unable to restore draw graphic in the current map projection.", e);
				}
			}
			r.length && (e !== void 0 && e !== L || t !== j || (t.addMany(r), r.forEach(Pt)));
		}, Wt = (e) => {
			let t = ++Oe;
			_.setActiveTool("edit"), $t("edit"), window.setTimeout(() => {
				if (t !== Oe || _.activeTool !== "edit") return;
				let n = zt(e);
				n && Ln(n);
			}, 0);
		}, Gt = () => {
			let e = _.selectedGraphicId;
			if (e) return B?.attributes?.id === e ? B : j?.graphics.toArray().find((t) => t.attributes?.id === e);
		}, { refreshSelectedGraphicFeatureCounts: Kt, cancelPendingFeatureCountRefresh: qt, cancelFeatureCountRunsForGraphic: Jt, scheduleFeatureCountRefresh: Yt, runIdentifyForSelectedGraphic: Xt } = Le({
			iApi: g,
			drawStore: _,
			getDrawGraphicId: lt,
			getGraphicDrawBufferSettings: xt,
			getGraphicDrawIdentifyBufferMode: St,
			getSelectedFeatureCountGraphic: () => Gt() ?? _.getSelectedGraphic() ?? void 0
		}), Zt = (e) => re(b, e), Z = () => Zt(D), Qt = () => Z() && _.shapeDetailsActiveTab === "details" && !!_.selectedGraphicId, $t = (e = "details") => {
			E(g, e, { focusExisting: !0 });
		}, en = () => {
			if (Zt("draw-settings")) {
				g.panel.focus(w);
				return;
			}
			g.panel.open(w);
		}, tn = (e) => {
			Zt(e) && g.panel.close(e);
		}, nn = new Set([D]), rn = () => {
			let e = g.geo.map.esriView?.padding;
			return {
				top: Number(e?.top ?? 0),
				right: Number(e?.right ?? 0),
				bottom: Number(e?.bottom ?? 0),
				left: Number(e?.left ?? 0)
			};
		}, an = () => {
			let e = g.geo.map.esriView;
			return e?.viewpoint?.clone?.() ?? {
				center: e?.center?.clone?.(),
				scale: e?.scale,
				rotation: e?.rotation
			};
		}, on = (e) => {
			let t = g.geo.map.esriView;
			t && (t.padding = { ...e });
		}, sn = () => {
			if (Z()) return D;
		}, cn = (e, t) => {
			let n = g.geo.map.esriView, r = n?.container?.getBoundingClientRect(), i = (g.$rootEl?.querySelector(`[data-cy="${e}"]`))?.getBoundingClientRect(), a = g.$vApp.$el.querySelector(".appbar")?.getBoundingClientRect(), o = g.panel.get(e)?.width ?? 350, s = a && r ? Math.max(0, a.right - r.left) : 0, c = i?.width ?? o, l = i && r ? i.right - r.left : s + o, u = s ? s + c : l, d = Math.max(t.left, Math.ceil(u + Je)), f = n?.width ?? r?.width ?? 0, p = b.mobileView ? Xe : Ye;
			return f > p && (d = Math.min(d, f - p)), Math.max(0, d);
		}, ln = (e, t) => ({
			top: t.top + Je,
			right: t.right + Je,
			bottom: t.bottom + Je,
			left: cn(e, t)
		}), un = () => {
			let e = g.panel.opened.slice().filter((e) => !nn.has(e.id)).map((e) => ({
				panel: e,
				wasPinned: e.isPinned
			}));
			return e.forEach(({ panel: e }) => e.minimize()), e;
		}, dn = (e) => {
			e.forEach(({ panel: e }) => {
				!g.panel.get(e.id) || e.isOpen || e.open();
			}), e.filter(({ panel: e, wasPinned: t }) => t && !!g.panel.get(e.id)).forEach(({ panel: e }) => e.pin(!0));
		}, fn = (e) => !!e && typeof e == "object" && e.name === "AbortError", pn = async (e, t, n) => {
			if (await ve(), U !== e || t !== Ne || !n.geometry) return;
			let r = sn();
			if (r) {
				e.previousViewpoint ||= an(), on(ln(r, e.previousPadding)), e.paddingAdjusted = !0;
				try {
					let e = g.geo.geom.geomEsriToRamp(n.geometry, n.attributes?.id);
					await g.geo.map.zoomMapTo(e, void 0, !0, 250, "ease");
				} catch (e) {
					fn(e) || console.warn("Unable to focus the map on the selected draw shape.", e);
				}
			}
		}, mn = () => {
			if (b.mobileView || U) return;
			let e = g.geo.map.esriView, t = Gt();
			if (!e) return;
			let n = {
				previousPadding: rn(),
				paddingAdjusted: !1,
				minimizedPanels: []
			};
			U = n;
			let r = ++Ne;
			n.minimizedPanels = un(), t?.geometry && pn(n, r, t);
		}, hn = () => {
			if (b.mobileView) return;
			let e = Gt();
			if (!g.geo.map.esriView || !e?.geometry) return;
			if (!U) {
				mn();
				return;
			}
			let t = U, n = new Set(t.minimizedPanels.map(({ panel: e }) => e.id)), r = un().filter(({ panel: e }) => !n.has(e.id));
			t.minimizedPanels.push(...r), pn(t, ++Ne, e);
		}, gn = () => {
			let e = U;
			if (!e) return;
			U = null, Ne++, e.paddingAdjusted && on(e.previousPadding), dn(e.minimizedPanels);
			let t = g.geo.map.esriView;
			!t || !e.previousViewpoint || t.goTo(e.previousViewpoint, {
				animate: !0,
				duration: 250,
				easing: "ease"
			}).catch((e) => {
				fn(e) || console.warn("Unable to restore the map after closing the draw shape panel.", e);
			});
		}, _n = () => {
			let e = _.activeTool, t = e !== null && e !== "" && e !== "edit", n = e === "edit";
			return _.shapeDetailsPickEnabled && !t && !n;
		}, vn = () => !1, yn = (e, t, n) => {
			let r = e.geometry;
			if (!r) return !1;
			try {
				return d.execute(r, r.type === "polygon" ? t : n);
			} catch {
				return !1;
			}
		}, bn = (t) => {
			if (!j) return;
			let n = t.mapPoint ?? g.geo.map.esriView?.toMap({
				x: t.x,
				y: t.y
			});
			if (!n) return;
			let r = t.pointerType, i = t.native?.pointerType, a = r === "touch" || i === "touch" ? 15 : 5, o = n, s = g.geo.query.makeClickBuffer(e.fromESRI(n), a).toESRI();
			for (let e of j.graphics.toArray().slice().reverse()) {
				let t = Dt(e);
				if (t && yn(e, o, s)) return t;
			}
		}, xn = (e) => {
			if (!j) return;
			let t = e.mapPoint.toESRI(), n = e.input === "touch" ? 15 : 5, r = g.geo.query.makeClickBuffer(e.mapPoint, n).toESRI();
			return j.graphics.toArray().slice().reverse().find((e) => !!e.attributes?.id && !e.attributes?.drawMeasurement && !e.attributes?.drawBufferFor && yn(e, t, r));
		}, Sn = (e) => {
			let t = Z();
			if (!_n() && !t) return;
			let n = xn(e);
			n && _n() ? Lt(n) : !n && t && tn(D);
		};
		async function Cn() {
			let e = g.keyboardNav;
			if (!e) {
				console.warn("Keyboard navigation fixture is not available; draw shortcuts are disabled.");
				return;
			}
			Ve &&= (e.unregister(Ve), void 0);
			let t = new Set(_.supportedTypes.map((e) => e.type)), n = ze.filter((e) => t.has(e.type)).map((e) => ({
				key: e.key,
				description: T(e.descriptionKey),
				handler: () => {
					_.setActiveTool(e.type);
				}
			}));
			Ve = e.register("D", {
				name: T("draw.keyboard.namespace"),
				activeHandler: () => {
					_.setActiveTool("");
				},
				deactiveHandler: () => {
					_.setActiveTool(null);
				},
				keys: [
					...n,
					{
						key: "I",
						description: T("draw.keyboard.key.inspector"),
						handler: () => (_.setActiveTool(null), $t("details"), "reset")
					},
					{
						key: "D",
						description: T("draw.keyboard.key.defaults"),
						handler: () => (_.setActiveTool(null), en(), "reset")
					}
				]
			});
		}
		let Q = (e) => {
			let t = N ?? j;
			if (V && t && Fe === t && e?.geometry && V.geometry?.type === e.geometry.type) {
				V.geometry = e.geometry, V.set("geometry", e.geometry);
				return;
			}
			if (V && (Fe?.remove(V), j?.remove(V), N?.remove(V), V = null, Fe = null), !e?.geometry || !t) return;
			let n;
			switch (e.geometry?.type) {
				case "point":
				case "multipoint":
					n = new o({
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
					n = new m({
						color: [
							255,
							255,
							0,
							.8
						],
						width: 6
					});
					break;
				default: n = new c({
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
			V = new h({
				geometry: e.geometry,
				symbol: n
			}), t.add(V), Fe = t;
		}, wn = () => {
			Ie &&= (j?.remove(Ie), null);
		}, Tn = () => {
			Re &&= (j?.remove(Re), null);
		}, En = () => {
			let e = _.mapLabelSettingsUpdatedGraphicId;
			if (!e) return;
			let t = _.graphics.find((t) => t.id === e), n = Et(e);
			!t || !n || (n.attributes = {
				...n.attributes ?? {},
				drawMapLabels: C(Ct(t))
			});
		}, Dn = () => {
			if (wn(), !Qt()) return;
			let e = le(_.activeSegmentKey);
			if (!e || e.kind !== "segment" || e.graphicId !== _.selectedGraphicId) return;
			let t = Et(e.graphicId), n = fe(t?.geometry, e.graphicId)[e.index];
			!n || !t?.geometry || (Ie = new h({
				geometry: new s({
					paths: [[n.start, n.end]],
					spatialReference: t.geometry.spatialReference
				}),
				symbol: new m({
					color: [
						37,
						99,
						235,
						.9
					],
					width: 4
				}),
				attributes: { drawInteractionHighlight: !0 }
			}), j?.add(Ie));
		}, On = () => {
			if (Tn(), !Qt()) return;
			let e = le(_.activeVertexKey);
			if (!e || e.kind !== "vertex" || e.graphicId !== _.selectedGraphicId) return;
			let t = Et(e.graphicId), n = ue(t?.geometry, e.graphicId)[e.index];
			!n || !t?.geometry || (Re = new h({
				geometry: new te({
					x: n.vertex[0],
					y: n.vertex[1],
					spatialReference: t.geometry.spatialReference
				}),
				symbol: new o({
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
			}), j?.add(Re));
		}, kn = () => {
			Dn(), On();
		}, An = (e) => {
			if (!j) return;
			let t = Dt(e);
			if (!t) return;
			let n = t.attributes?.id;
			return j.graphics.toArray().find((e) => e === t || !!n && e.attributes?.id === n);
		}, jn = (e) => H?.editGraphic === e ? H.sourceGraphic : e, Mn = () => {
			if (!H) return;
			let { sourceGraphic: e, editGraphic: t } = H;
			return e.geometry = t.geometry, e.set("geometry", t.geometry), Ot(e), Pt(e), Tt(e), e;
		}, $ = ({ restoreSource: e = !0 } = {}) => {
			H?.sourceGraphic && e && (H.sourceGraphic.visible = !0), at(), H = null, M?.removeAll(), it(j);
		}, Nn = (e) => {
			if (!(!M || !g.geo.map.esriView)) return at(), P = new p({
				view: g.geo.map.esriView,
				layer: M,
				updateOnGraphicClick: !1,
				defaultUpdateOptions: rt(e),
				pointSymbol: A?.pointSymbol,
				polygonSymbol: A?.polygonSymbol,
				polylineSymbol: A?.polylineSymbol
			}), de = P.on("update", (e) => Jn(e)), P;
		}, Pn = async () => {
			if (!M || !g.geo.map.esriView) return !1;
			try {
				return await g.geo.map.esriView.whenLayerView(M), !0;
			} catch (e) {
				return console.warn("Unable to initialize draw edit sketch layer view.", e), !1;
			}
		}, Fn = (e) => {
			if (!M) return;
			$();
			let t = e.clone();
			t.attributes = { ...e.attributes };
			let n = e.geometry?.clone?.() ?? e.geometry;
			if (Ot(t), M.graphics = [t], e.visible = !1, H = {
				sourceGraphic: e,
				editGraphic: t,
				originalGeometry: n
			}, !Nn(t)) {
				e.visible = !0, H = null, M.removeAll();
				return;
			}
			return t;
		}, In = async (e) => {
			let t = jn(e);
			if (!A || !j || _.activeTool !== "edit" || B !== t) return !1;
			let n = H?.editGraphic === e, r = n ? P : $e();
			if (!r || n && !await Pn()) return !1;
			if (r.state === "active") return nt(e, r) ? !0 : (r.cancel(), !1);
			if (r.state !== "ready" || !r.hasGraphic(e)) return !1;
			try {
				r !== P && et(!1), await r.update([e], rt(e));
			} catch (e) {
				return console.warn("Unable to start draw sketch update.", e), !1;
			}
			return nt(e, r);
		}, Ln = (e, t = 5) => {
			if (!A || _.activeTool !== "edit") return;
			let n = An(e);
			if (!n) return;
			It(n, !1), Y(), J();
			let r = Fn(n);
			if (!r) return;
			Q(Z() ? n : void 0);
			let i = (e) => {
				Ce = window.setTimeout(() => {
					Ce = null, !(!A || _.activeTool !== "edit" || B !== n) && In(r).then((t) => {
						if (!t) {
							if (e <= 0) {
								$({ restoreSource: !0 });
								return;
							}
							i(e - 1);
						}
					});
				}, 400);
			};
			i(t);
		}, Rn = ({ clearSelection: e = !1 } = {}) => {
			if (Oe++, Y(), Mn(), J(), $({ restoreSource: !0 }), e && (B = null, _.clearSelection()), _.activeTool === "edit") {
				_.setActiveTool(null);
				return;
			}
			Q(Z() ? Gt() : void 0);
		}, zn = ({ clearSelection: e = !1 } = {}) => {
			Oe++, Y();
			let t = H;
			t?.sourceGraphic && t.originalGeometry && (t.sourceGraphic.geometry = t.originalGeometry, t.sourceGraphic.set("geometry", t.originalGeometry), Ot(t.sourceGraphic), Pt(t.sourceGraphic), Tt(t.sourceGraphic), qt(), Kt(t.sourceGraphic)), J(), $({ restoreSource: !0 }), e && (B = null, _.clearSelection()), _.activeTool === "edit" && _.setActiveTool(null), Q(Z() ? Gt() : void 0), G();
		};
		z(() => _.selectedGraphicId, (e, t) => {
			if (!(!A || !j)) {
				if (!e) Y(), J(), $({ restoreSource: !0 }), Q();
				else if (e !== t) {
					let t = j.graphics.toArray().find((t) => t.attributes && t.attributes.id === e);
					t && (It(t, _.activeTool !== "edit"), _.shapeDetailsPickEnabled && Kt(t));
				}
				G();
			}
		}), z(() => _.deleteSelectedGraphicRequestId, () => {
			Bt();
		}), z(() => _.editSelectedGraphicRequestId, () => {
			Wt();
		}), z(() => _.identifySelectedGraphicRequestId, () => {
			Xt();
		}), z(() => _.stopEditModeRequestId, () => {
			Rn({ clearSelection: _.stopEditModeClearSelection });
		}), z(() => _.cancelEditModeRequestId, () => {
			zn({ clearSelection: _.cancelEditModeClearSelection });
		}), z(() => _.refreshSelectedGraphicFeatureCountsRequestId, () => {
			Kt();
		}), z(() => _.mapLabelSettingsUpdateRequestId, () => {
			En(), G();
		}), z(() => [_.shapeDetailsLabelsVisible, _.shapeDetailsLabelsUseSettings], () => {
			G();
		}), z(() => _.shapePanelFocusRequestId, () => {
			hn();
		}), z(() => _.selectedGraphicSettingsUpdateRequestId, () => {
			Ft(), G();
		}), z(() => _.importShapesRequestId, () => {
			Ht();
		}), z(() => Z(), (e, t) => {
			if (Ze(), e && !t) {
				_.activeTool !== "edit" && Q(Gt()), G(), mn();
				return;
			}
			!e && t && (_.activeTool === "edit" && Rn(), _.setShapeDetailsPickEnabled(!1), _.setShapeDetailsLabelsVisible(!1), _.setShapeDetailsLabelsUseSettings(!1), _.setShapeDetailsActiveTab("details"), _.clearMeasurementInteraction(), Q(void 0), G(), gn());
		}), z(() => _.measurementsEnabled, (e) => {
			G(), g.updateAlert(a(e ? "draw.measurements.enabled" : "draw.measurements.disabled"));
		}), z(() => [
			_.activeSegmentKey,
			_.activeVertexKey,
			_.shapeDetailsActiveTab,
			_.selectedGraphicId,
			_.graphics.map((e) => e.geometry)
		], () => {
			kn();
		}, { deep: !0 }), z(() => ({
			fillColor: _.styleSettings.fillColor,
			borderColor: _.styleSettings.borderColor,
			bufferColor: _.styleSettings.bufferColor,
			opacity: _.styleSettings.opacity,
			bufferDistance: _.bufferSettings.distance,
			bufferUnit: _.bufferSettings.unit,
			identifyBufferMode: _.identifyBufferMode
		}), () => {
			wt(), G();
		});
		let { handleNavigationKeyDown: Bn, handleGraphicKeyboardEdit: Vn, resetMultiPointState: Hn } = Be({
			iApi: g,
			drawStore: _,
			t: a,
			translateTerm: f,
			getSketch: () => A,
			getGraphicsLayer: () => j,
			getSelectedGraphic: () => B,
			getKeyboardEditGraphic: () => H?.editGraphic ?? B,
			setSelectedGraphic: (e) => {
				B = e;
			},
			prepareDrawGraphic: At,
			applyDrawSymbol: Ot,
			syncBufferGraphic: Pt,
			syncGraphicStoreRecord: Tt,
			syncActiveSketchEditToSource: Mn,
			highlightSelectedGraphic: Q,
			deleteSelectedGraphic: Bt,
			startSketchUpdate: Ln,
			cancelPendingSketchUpdate: Y,
			clearActiveSketchEdit: $,
			refreshMeasurementGraphics: G,
			scheduleMeasurementRefresh: We,
			cancelPendingFeatureCountRefresh: qt,
			refreshSelectedGraphicFeatureCounts: Kt
		}), Un = async (e) => {
			let t = _.activeTool === "edit", n = vn();
			if (!t && !n) return;
			let r = Dt((await g.geo.map.esriView.hitTest(e, { include: j })).results.find((e) => "graphic" in e && e.graphic.layer === j && !!Dt(e.graphic))?.graphic) ?? bn(e);
			if (r) {
				if (n) {
					Rt(r);
					return;
				}
				tt() ? It(r, !1) : Ln(r);
				return;
			}
			t && Rn({ clearSelection: !0 });
		}, Wn = async () => {
			let e = ++L;
			if (await g.geo.map.viewPromise, e !== L || !ce.value || !g.geo.map.esriView) return;
			let t = await dt(ke);
			if (e !== L || !g.geo.map.esriView || (j = t?.esriLayer, !j) || (await mt(e), e !== L || !g.geo.map.esriView)) return;
			let n = await dt(Ae);
			if (e !== L || !g.geo.map.esriView) {
				ht(Ae), M = null;
				return;
			}
			if (M = n?.esriLayer, !M) return;
			let r = await dt(je);
			if (e !== L || !g.geo.map.esriView) {
				ht(Ae), ht(je), M = null, N = null;
				return;
			}
			if (N = r?.esriLayer, !N) return;
			let i = ce.value;
			Object.assign(i, {
				view: g.geo.map.esriView,
				layer: j,
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
			}), et(!1, i), g.geo.map.esriView.ui.add(i, "bottom-right"), I ||= (i.addEventListener("arcgisCreate", Qe), i.addEventListener("arcgisUpdate", q), !0), A = i, et(!1), wt(), F = g.geo.map.esriView.on("click", Un), document.addEventListener("keydown", Bn), document.addEventListener("keydown", Vn, { capture: !0 }), _.activeTool && _.activeTool !== "edit" && A.create(_.activeTool), await Ut(e), !(e !== L || !g.geo.map.esriView) && (G(), Ht());
		}, Gn = () => {
			if (!Ve) return;
			let e = g.keyboardNav;
			if (!e) {
				Ve = void 0;
				return;
			}
			e.unregister(Ve), Ve = void 0;
		}, Kn = ({ cleanupKeyboard: e = !0, clearActiveTool: t = !1, clearSourceGraphics: n = !1, destroyHelperLayers: r = !0, destroySketch: i = !0 } = {}) => {
			L++, e && Gn(), F &&= (F.remove(), null), $({ restoreSource: !0 }), M &&= (r ? (g.geo.map.esriView?.map?.remove(M), M.destroy()) : M.removeAll(), null), A && (g.geo.map.esriView && g.geo.map.esriView.ui.remove(A), Y(), J(), i && A.destroy()), I && ce.value && (ce.value.removeEventListener("arcgisCreate", Qe), ce.value.removeEventListener("arcgisUpdate", q), I = !1), document.removeEventListener("keydown", Bn), document.removeEventListener("keydown", Vn, { capture: !0 }), B = null, Q(void 0), N && (r ? (g.geo.map.esriView?.map?.remove(N), N.destroy()) : N.removeAll(), N = null, Fe = null), wn(), Tn(), Y(), qt(), Oe++, Ue(), Mt(), n && Nt(), _.clearSelection(), t && _.activeTool && _.setActiveTool(null), Hn(), A = null, j = null;
		}, qn = (e) => {
			if (e.state === "active" && e.graphic) {
				We(e.graphic, e.tool);
				return;
			}
			if (e.state === "cancel") {
				G();
				return;
			}
			if (e.state === "complete") {
				let t = e.graphic;
				if (!t) return;
				let n = At(t, e.tool);
				Pt(t), _.addGraphic({
					id: n,
					type: e.tool,
					geometry: t.geometry,
					attributes: t.attributes
				}), G(t, e.tool), e.tool !== "point" && (_.setActiveTool(""), g.keyboardNav?.reset());
			}
		}, Jn = (e) => {
			let t = e.graphics[0];
			if (!t) return;
			let n = jn(t);
			if (e.state === "start") {
				if (_.activeTool !== "edit") {
					J();
					return;
				}
				Y(), It(n, Z()), n.attributes?.id && g.updateAlert(a("draw.graphic.selected", { type: f(n.attributes?.type) }));
			} else if (e.state === "active") {
				Ot(t);
				let e = Mn() ?? n;
				Pt(e), Tt(e), Q(Z() ? e : void 0), We(e, e.attributes?.type), Yt(e);
			} else if (e.state === "complete") {
				let e = Mn() ?? n;
				$({ restoreSource: !0 }), e.attributes?.id && (Ot(e), Pt(e), Tt(e), qt(), Kt(e), g.updateAlert(a("draw.graphic.updated"))), Q(Z() ? e : void 0), G(e, e.attributes?.type);
			}
		};
		return ye(() => {
			Cn(), S(), Wn(), W.push(g.event.on(r.MAP_DESTROYED, () => {
				Kn();
			})), W.push(g.event.on(r.MAP_CLICK, Sn)), W.push(g.event.on(r.MAP_REFRESH_START, () => {
				Kn({
					cleanupKeyboard: !1,
					clearActiveTool: !0,
					clearSourceGraphics: !0,
					destroyHelperLayers: !1,
					destroySketch: !1
				});
			})), W.push(g.event.on(r.MAP_REFRESH_END, () => {
				Wn();
			})), W.push(g.event.on(r.FIXTURE_ADDED, (e) => {
				e.id === "panguard" && Ze();
			}));
		}), z(() => _.activeTool, (e) => {
			if (Ze(e), A && (e !== "edit" && Oe++, Y(), J(), e !== "edit" && $({ restoreSource: !0 }), Q(Z() ? Gt() : void 0), Hn(), G(), e !== "edit" && e)) try {
				A.create(e);
			} catch (e) {
				console.warn("Unable to start draw sketch.", e);
			}
		}, { immediate: !0 }), z(() => _.shapeDetailsPickEnabled, () => {
			Ze();
		}), be(() => {
			gn(), K !== null && (g.fixture.get("panguard")?.setEnabled(K), K = null), Kn(), W.forEach((e) => g.event.off(e));
		}), (e, t) => (xe(), he(pe, null, [ge("arcgis-sketch", {
			ref_key: "sketchEl",
			ref: ce,
			style: { display: "none" }
		}, null, 512), Te(_).measurementsEnabled ? (xe(), he("div", qe, we(Te(He)), 1)) : me("", !0)], 64));
	}
}), Qe = "draw", q = (e) => `<svg class="rv-draw-help-icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${e}</svg>`, J = (e) => `<span class="rv-draw-help-mapnav-button">${e}</span>`, Y = (e, t) => `<span class="rv-draw-help-action-button">${t}<span class="rv-draw-help-action-label">${e}</span></span>`, X = {
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
}, $e = {
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
}, et = {
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
}, tt = class extends Ie {
	unregisterIdentifyGeometryProvider;
	eventHandlers = [];
	destroyDrawComponent;
	registerHelpSection() {
		g(this.$vApp.$pinia).addDynamicSection({
			id: Qe,
			markdown: $e
		});
	}
	unregisterHelpSection() {
		g(this.$vApp.$pinia).removeDynamicSection(Qe);
	}
	resetShapeInspectionState() {
		let e = O(this.$vApp.$pinia);
		e.setShapeDetailsPickEnabled(!1), e.setShapeDetailsLabelsVisible(!1), e.setShapeDetailsLabelsUseSettings(!1), e.setShapeDetailsActiveTab("details"), e.clearMeasurementInteraction();
	}
	async init() {
		Object.entries(et).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e)), this._parseConfig(this.config);
		let e = {};
		this.$iApi.panel.get("draw-settings") || (e[w] = {
			screens: { "draw-settings-screen": () => L(import("./draw-defaults-screen-DjZ0GWaE.js")) },
			style: { width: "350px" },
			button: {
				tooltip: "draw.defaults.title",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.31-.6-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.05.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.22.37.31.6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.18-.58 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z\"/></svg>"
			},
			alertName: "draw.defaults.title"
		}), this.$iApi.panel.get("draw-shape-details") || (e[D] = {
			screens: { "draw-shape-details-screen": () => L(import("./shape-inspector-screen-BdgwXeN1.js")) },
			style: { width: "350px" },
			button: {
				tooltip: "draw.inspector.title",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M11 10h2v7h-2v-7zm0-3h2v2h-2V7zm1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z\"/></svg>"
			},
			alertName: "draw.inspector.title"
		}), this.$iApi.panel.get("draw-import") || (e[_] = {
			screens: { "draw-import-shape-screen": () => L(import("./import-shape-screen-C6fxk1iV.js")) },
			style: { width: "350px" },
			alertName: "draw.import.title"
		}), Object.keys(e).length && (this.$iApi.panel.register(e, { i18n: { messages: et } }), this.handlePanelTeleports([
			w,
			D,
			_
		])), O(this.$vApp.$pinia).supportedTypes.forEach((e) => {
			let t = `${e.type}-icon`;
			this.$iApi.component(t, L(Oe(/* #__PURE__ */ Object.assign({
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
		let { destroy: r } = this.mount(Ze, {
			element: n,
			app: this.$element
		});
		this.destroyDrawComponent = () => {
			r(), n.remove();
		};
	}
	async added() {
		this.unregisterIdentifyGeometryProvider ||= this.$iApi.geo.map.registerIdentifyGeometryProvider(this), this.registerHelpSection(), this.eventHandlers.length || (this.eventHandlers.push(this.$iApi.event.on(r.FIXTURE_ADDED, (e) => {
			e.id === "help" && this.registerHelpSection();
		})), await this.$iApi.geo.map.loadPromise(), this.init());
	}
	removed() {
		if (this.unregisterIdentifyGeometryProvider?.(), this.unregisterIdentifyGeometryProvider = void 0, this.eventHandlers.forEach((e) => this.$iApi.event.off(e)), this.eventHandlers = [], this.unregisterHelpSection(), this.resetShapeInspectionState(), this.destroyDrawComponent?.(), this.destroyDrawComponent = void 0, this.$iApi.fixture.exists("appbar")) {
			let e = n(this.$vApp.$pinia);
			e.removeButton(w), e.removeButton(D), e.removeButton(_);
		}
		this.$iApi.panel.remove(w), this.$iApi.panel.remove(D), this.$iApi.panel.remove(_);
	}
};
//#endregion
export { tt as default };
