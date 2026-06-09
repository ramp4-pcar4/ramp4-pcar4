import { $ as e, B as t, G as n, V as r, ct as i, s as a } from "./main-Cft3fGtQ.js";
import { A as o, E as s, O as c, P as l, T as u, b as d, i as f, j as p, k as m, v as ee, w as te, y as h } from "./esri-C6orwzKs.js";
import { t as g } from "./store-BUJNAlWI.js";
import { _, a as v, c as y, d as b, f as x, g as ne, i as S, l as C, o as re, p as ie, r as w, s as T, t as E, u as D, v as ae, y as oe } from "./store-De1UwLdA.js";
import { n as se, t as ce } from "./panel-utils-OKyvGxOq.js";
import { a as O, i as le, r as ue, t as k } from "./shape-io-ShjLFHiS.js";
import { a as A, i as j, l as de, n as fe, r as M, s as pe, t as me, u as N } from "./measurement-utils-CoLIeI7c.js";
import { Fragment as he, createCommentVNode as ge, createElementBlock as _e, createElementVNode as ve, defineComponent as P, inject as ye, markRaw as F, nextTick as be, onMounted as xe, onUnmounted as Se, openBlock as Ce, reactive as we, ref as Te, toDisplayString as Ee, toRaw as I, unref as De, useTemplateRef as Oe, watch as L } from "vue";
import { useI18n as ke } from "vue-i18n";
//#region \0rolldown_dynamic_import_helper.js
var Ae = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, je = "RampDrawGraphicsLayer", Me = "RampDrawEditGraphicsLayer", Ne = "RampDrawHighlightGraphicsLayer", Pe = [
	{ type: "point" },
	{ type: "polyline" },
	{ type: "polygon" },
	{ type: "circle" },
	{ type: "rectangle" }
], Fe = 5, Ie = 15;
function R(e, t, n) {
	return e.type === "polygon" ? d.execute(e, t) : d.execute(e, n);
}
function z(e, t, n) {
	switch (n) {
		case "shape": return e;
		case "buffer-only": return b(e, t);
		default: return C(e, t) ?? e;
	}
}
function Le(e, t, n) {
	return n === "shape" ? e : C(e, t) ?? e;
}
var Re = class extends a {
	store;
	constructor(e, t) {
		super(e, t), this.store = E(this.$vApp.$pinia), ie();
	}
	_parseConfig(e) {
		if (!e) {
			this.store.setSupportedTypes(Pe);
			return;
		}
		if (e.types !== void 0) {
			let t = (e.types === null ? [] : e.types).filter((e) => e.enabled !== !1);
			this.store.setSupportedTypes(t);
		} else this.store.setSupportedTypes(Pe);
		e.defaultTool && this.store.setActiveTool(e.defaultTool);
	}
	get graphicsLayerId() {
		return je;
	}
	getShapeIds() {
		return this.store.graphics.map((e) => e.id);
	}
	async importShapes(e) {
		let t = O(typeof e == "string" || e instanceof URL ? await this.fetchDrawShapesPayload(e) : e);
		if (!t.length) throw Error("Invalid draw shape payload.");
		return this.store.requestImportShapes(t), t.length;
	}
	exportShapes(e) {
		return k(this.resolveExportGraphics(e));
	}
	downloadShapes(e, t) {
		let n = e && typeof e == "object" && !Array.isArray(e) ? e.fileName : void 0;
		return ue(this.resolveExportGraphics(e), t ?? n);
	}
	suppressIdentify(e) {
		if (this.store.identifyGeometryGraphicId) return !1;
		let t = this.store.activeTool, n = t === null || t === "", r = t === "edit", i = t !== null && t !== "" && !r, a = this.$iApi.panel.opened.some((e) => e.id === v), o = this.store.shapeDetailsPickEnabled && n, s = o || a || r ? this.getHitDrawGraphic(e, !1) : void 0, c = s?.id ?? s?.attributes?.id;
		return (o || a) && c ? (this.store.selectGraphic(c), se(this.$iApi, "details"), this.store.requestShapePanelFocus(), !0) : !c && a ? (this.$iApi.panel.close(v), this.store.setShapeDetailsPickEnabled(!1), !0) : !c && o ? !0 : !c && r ? (this.store.requestStopEditMode(), !0) : i || r;
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
		return le(e);
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
		let n = e.mapPoint.toESRI(), r = e.input === "touch" ? Ie : Fe, i = this.$iApi.geo.query.makeClickBuffer(e.mapPoint, r).toESRI();
		return this.store.graphics.slice().reverse().find((e) => {
			let r = I(e.geometry);
			if (!r) return !1;
			let a = ne(e.attributes), o = _(e.attributes);
			return R(t ? Le(r, a, o) : r, n, i);
		});
	}
	getIdentifyGeometry(e) {
		let t = this.getHitDrawGraphic(e);
		if (!t?.geometry) return;
		let n = z(I(t.geometry), ne(t.attributes), _(t.attributes));
		if (n) return this.$iApi.geo.geom.geomEsriToRamp(n, t.id ?? t.attributes?.id);
	}
}, ze = ({ iApi: t, drawStore: n, getDrawGraphicId: r, getGraphicDrawBufferSettings: i, getGraphicDrawIdentifyBufferMode: a, getSelectedFeatureCountGraphic: o }) => {
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
		let t = r(e), c = I(e?.geometry);
		if (!e || !t || !c) return;
		let l = (s.get(t) ?? 0) + 1;
		s.set(t, l), n.setShapeFeatureCountsLoading(t);
		try {
			if (await ie(), s.get(t) !== l) return;
			let r = i(e), o = a(e), u = r.distance > 0 ? b(c, r) : void 0, f = o === "shape" ? c : o === "buffer-only" ? u : r.distance > 0 ? C(c, r) : c, p = d(c), m = u ? d(u) : Promise.resolve(null), ee = f === c ? p : f === u ? m : d(f), [te, h, g] = await Promise.all([
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
			let i = o(), a = r(i), s = g(I(i?.geometry));
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
}, Be = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], B = 10, V = 1.05, Ve = .95, H = .05, He = ({ iApi: e, drawStore: t, t: n, translateTerm: r, getSketch: i, getGraphicsLayer: a, getSelectedGraphic: o, getKeyboardEditGraphic: l, setSelectedGraphic: d, prepareDrawGraphic: f, applyDrawSymbol: p, syncBufferGraphic: ee, syncGraphicStoreRecord: g, syncActiveSketchEditToSource: _, highlightSelectedGraphic: v, deleteSelectedGraphic: y, startSketchUpdate: b, cancelPendingSketchUpdate: x, clearActiveSketchEdit: ne, refreshMeasurementGraphics: S, scheduleMeasurementRefresh: C, cancelPendingFeatureCountRefresh: re, refreshSelectedGraphicFeatureCounts: ie }) => {
	let w = !1, T = null, E = [], D = () => {
		w = !1, T = null, E = [];
	}, ae = () => {
		let n = e.geo.map.esriView;
		T && (t.activeTool === "polyline" ? T.geometry = new s({
			paths: [E],
			spatialReference: n.spatialReference
		}) : T.geometry = new u({
			rings: [E],
			spatialReference: n.spatialReference
		}));
	}, oe = () => {
		let n = i(), r = e.geo.map.esriView;
		return t.activeTool === "polyline" ? new h({
			geometry: new s({
				paths: [E],
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
				rings: [E],
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
	}, se = () => {
		let i = e.geo.map.esriView, o = t.activeTool ?? void 0, s = {
			x: Math.floor(i.width / 2),
			y: Math.floor(i.height / 2)
		}, c = i.toMap(s);
		if (!w) {
			w = !0, E = [[c.x, c.y]], T = oe(), T.attributes = {
				id: `temp-graphic-${Date.now()}`,
				type: t.activeTool
			}, a()?.add(T), S(T, o), e.updateAlert(n("draw.multiPoint.started", {
				type: r(o),
				count: 1
			}));
			return;
		}
		E.push([c.x, c.y]), ae(), S(T, o), e.updateAlert(n("draw.multiPoint.pointAdded", {
			type: r(o),
			count: E.length
		}));
	}, ce = async () => {
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
		f.length > 0 ? (b(f[0].graphic), e.updateAlert(n("draw.graphic.selected", { type: r(f[0].graphic.attributes?.type) }))) : (x(), s.cancel(), ne({ restoreSource: !0 }), d(null), t.clearSelection());
	}, O = async () => {
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
		}), S(), l !== "point" && (t.clearSelection(), t.setActiveTool(""), e.keyboardNav?.reset(), o.cancel()), e.updateAlert(n("draw.graphic.created", { type: r(l) }));
	}, le = () => {
		let i = t.activeTool ?? void 0;
		E.pop(), ae(), T.set("geometry", T?.geometry), S(T, i), e.updateAlert(n("draw.multiPoint.pointRemoved", {
			type: r(i),
			count: E.length
		}));
	}, ue = () => {
		T && a()?.remove(T), D(), S(), e.updateAlert(n("draw.multiPoint.canceled"));
	}, k = (r) => {
		let a = e.geo.map.esriView?.container;
		if (!(!document.activeElement || !a?.contains(document.activeElement))) switch (r.key) {
			case "Enter":
				r.preventDefault(), t.activeTool && t.activeTool !== "edit" ? (t.activeTool === "polyline" || t.activeTool === "polygon") && (w || E.length === 0) ? se() : O() : ce();
				break;
			case "Delete":
			case "Backspace":
				w && E.length > 1 ? (r.preventDefault(), le()) : w && E.length === 1 ? (r.preventDefault(), ue()) : o() && (r.preventDefault(), y());
				break;
			case "Escape":
				t.setActiveTool(null), i()?.cancel(), d(null), v(void 0), t.clearSelection(), S(), e.updateAlert(n("draw.tool.canceled"));
				break;
		}
	}, A = (e) => {
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
	}, j = (t, n, r) => {
		let i = e.geo.map.esriView, a = 0, o = 0;
		t === "ArrowLeft" && (a = -B), t === "ArrowRight" && (a = B), t === "ArrowUp" && (o = -B), t === "ArrowDown" && (o = B);
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
	}, de = (e) => e === "ArrowUp" || e === "ArrowRight" ? V : Ve, fe = (e) => e === "ArrowLeft" ? -H : e === "ArrowRight" ? H : 0, M = (e, t, n) => e.map(([e, r]) => [e + t, r + n]), pe = (e, t, n) => e.map(([e, r]) => [t.x + (e - t.x) * n, t.y + (r - t.y) * n]), me = (e, t, n) => {
		let r = Math.cos(n), i = Math.sin(n);
		return e.map(([e, n]) => {
			let a = e - t.x, o = n - t.y, s = a * r - o * i, c = a * i + o * r;
			return [t.x + s, t.y + c];
		});
	}, N = (e, t) => e.map((e) => t(e)), he = (t, r, i, a) => {
		let o = A(t), c = j(r, o, t.spatialReference);
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
				paths: N(e, (e) => M(e, c.x, c.y)),
				spatialReference: t.spatialReference
			});
			if (i) return new s({
				paths: N(e, (e) => pe(e, o, de(r))),
				spatialReference: t.spatialReference
			});
			let n = fe(r);
			return n === 0 ? t.clone() : new s({
				paths: N(e, (e) => me(e, o, n)),
				spatialReference: t.spatialReference
			});
		}
		if (t.type === "polygon") {
			let e = t.rings;
			if (!i && !a) return new u({
				rings: N(e, (e) => M(e, c.x, c.y)),
				spatialReference: t.spatialReference
			});
			if (i) return new u({
				rings: N(e, (e) => pe(e, o, de(r))),
				spatialReference: t.spatialReference
			});
			let n = fe(r);
			return n === 0 ? t.clone() : new u({
				rings: N(e, (e) => me(e, o, n)),
				spatialReference: t.spatialReference
			});
		}
	};
	return {
		handleNavigationKeyDown: k,
		handleGraphicKeyboardEdit: (r) => {
			let i = e.geo.map.esriView.container;
			if (!document.activeElement || !i?.contains(document.activeElement) || !Be.includes(r.key) || t.activeTool !== "edit" || t.shapeDetailsActiveTab !== "edit") return;
			let a = l() ?? o();
			if (!a) return;
			r.preventDefault(), r.stopPropagation();
			let s = r.shiftKey, c = r.altKey, u = he(a.geometry, r.key, s, c);
			if (!u) return;
			a.geometry = u, a.set("geometry", u), p(a);
			let d = _() ?? a;
			d === a && (ee(a), g(a)), v(d), C(d, d.attributes?.type), re(), ie(d);
			let f = s ? "resized" : c ? "rotated" : "moved";
			e.updateAlert(n(`draw.graphic.${f}`));
		},
		resetMultiPointState: D
	};
}, U = 16, Ue = 2, We = 8, W = 8, Ge = 2, G = "#1d4ed8", Ke = 30, qe = ({ iApi: e, drawStore: t, locale: n, t: i, getGraphicsLayer: a, isShapeDetailsOpen: s, getShapeDetailsGraphic: c }) => {
	let u = null, d = 0, f = 0, p = [], m = null, ee = null, g = null, _ = null, v = null, y = null, b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), ne = [], S = [], C = [], re = Te(""), ie = () => t.graphics.some((e) => {
		let n = String(e.id ?? e.attributes?.id ?? ""), r = ae(e.attributes), i = T(n) && t.shapeDetailsLabelsVisible;
		return r.areaLabel || r.segmentLength || r.segmentLetters || r.vertexNumbers || i;
	}), w = () => t.measurementsEnabled || s() || ie(), T = (e) => s() && t.selectedGraphicId === e, E = () => s() && t.shapeDetailsActiveTab === "details" && !!t.selectedGraphicId, D = (e) => {
		let n = de(e);
		return !!n && n.graphicId === t.selectedGraphicId;
	}, oe = (e) => E() && D(e) && e === t.activeSegmentKey, se = (e) => E() && D(e) && e === t.activeVertexKey, ce = (e) => new o({
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
	}), O = (e, t) => new l({
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
	}), le = (e, t, n, r) => [new h({
		geometry: e,
		symbol: ce(r),
		attributes: {
			...n,
			drawMeasurementKind: "vertex-marker"
		}
	}), new h({
		geometry: e,
		symbol: O(t, r),
		attributes: {
			...n,
			drawMeasurementKind: "vertex-label",
			drawMeasurementText: t
		}
	})], ue = (e, t) => new te({
		x: e[0],
		y: e[1],
		spatialReference: t
	}), k = (e) => !!e && Number.isFinite(e.x) && Number.isFinite(e.y), he = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), ge = (e) => {
		let t = Math.hypot(e.x, e.y);
		if (!(!Number.isFinite(t) || t <= 0)) return {
			x: e.x / t,
			y: e.y / t
		};
	}, _e = (e) => {
		let t = e;
		for (; t > 180;) t -= 360;
		for (; t < -180;) t += 360;
		return t > 90 && (t -= 180), t < -90 && (t += 180), t;
	}, ve = (e) => {
		if (e.length < 2) return;
		let t = [], n = 0;
		for (let r = 0; r < e.length - 1; r++) {
			let i = he(e[r], e[r + 1]);
			t.push(i), n += i;
		}
		if (!Number.isFinite(n) || n <= 0) return;
		let r = n / 2, i = 0;
		for (let a = 0; a < e.length - 1; a++) {
			let o = t[a];
			if (!(o <= 0)) {
				if (i + o >= r) {
					let t = e[a], s = e[a + 1], c = (r - i) / o, l = ge({
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
	}, P = (e, t, n) => {
		let r = n.toScreen(new te({
			x: e[0],
			y: e[1],
			spatialReference: t
		}));
		return k(r) ? {
			x: r.x,
			y: r.y
		} : void 0;
	}, ye = (e) => e.length > 1 && e[0][0] === e[e.length - 1][0] && e[0][1] === e[e.length - 1][1] ? e.slice(0, -1) : e, F = (e, t) => {
		let n = e.rings, r = 0, i = 0, a = 0, o = [];
		if (n.forEach((n) => {
			let s = ye(n).map((n) => P(n, e.spatialReference, t)).filter((e) => !!e);
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
	}, be = (e, t) => {
		let n = e.paths.flatMap((e) => e).map((n) => P(n, e.spatialReference, t)).filter((e) => !!e);
		if (n.length) return {
			x: n.reduce((e, t) => e + t.x, 0) / n.length,
			y: n.reduce((e, t) => e + t.y, 0) / n.length
		};
	}, xe = (e, t) => {
		if (e.type === "polygon") return F(e, t);
		if (e.type === "polyline") return be(e, t);
	}, Se = (e, t) => {
		let n = e.spatialReference, r = [], i = (e, i) => {
			let a = i ? ye(e) : e;
			a.forEach((e) => {
				let i = P(e, n, t);
				i && r.push(i);
			});
			let o = i ? a.length : a.length - 1;
			for (let e = 0; e < o; e++) {
				let i = a[e], o = a[(e + 1) % a.length], s = P([(i[0] + o[0]) / 2, (i[1] + o[1]) / 2], n, t);
				s && r.push(s);
			}
		};
		return e.type === "polyline" && e.paths.forEach((e) => i(e, !1)), e.type === "polygon" && e.rings.forEach((e) => i(e, !0)), r;
	}, Ce = (e, t) => {
		let n = ve([e.start, e.end].map((n) => P(n, e.geometry.spatialReference, t)).filter((e) => !!e));
		if (!n) return;
		let r = {
			x: -n.tangent.y,
			y: n.tangent.x
		};
		if (e.geometry.type === "polygon" || e.geometry.type === "polyline") {
			let i = xe(e.geometry, t);
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
			angle: _e(i * 180 / Math.PI)
		};
	}, we = (e, t, n, r) => {
		let i = U / 2;
		return Se(e.geometry, r).reduce((e, r) => {
			let a = {
				x: r.x - t.midpoint.x,
				y: r.y - t.midpoint.y
			};
			if (a.x * n.x + a.y * n.y <= i) return e;
			let o = Math.hypot(a.x, a.y);
			return !Number.isFinite(o) || o <= i ? e : e + 100 / Math.max(o, W);
		}, 0);
	}, Ee = (e, t, n) => {
		let r = {
			x: -t.normal.x,
			y: -t.normal.y
		}, i = (r) => ({
			anchor: {
				x: t.midpoint.x + r.x * U,
				y: t.midpoint.y + r.y * U
			},
			angle: t.angle,
			sideCrowdingScore: we(e, t, r, n)
		});
		return [i(t.normal), i(r)];
	}, De = (e, t) => {
		let n = Math.max(e.left, t.left) - t.left, r = Math.max(e.top, t.top) - t.top, i = Math.min(e.right, t.right) - t.left, a = Math.min(e.bottom, t.bottom) - t.top;
		if (!(i <= n || a <= r)) return {
			left: n,
			top: r,
			right: i,
			bottom: a,
			width: i - n,
			height: a - r
		};
	}, Oe = (e, t, n, r = 0) => {
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
	}, ke = (e) => Oe({
		x: e.left + e.width / 2,
		y: e.top + e.height / 2
	}, e.width, e.height), Ae = (e, t) => Oe(t.anchor, e.offsetWidth || e.getBoundingClientRect().width, e.offsetHeight || e.getBoundingClientRect().height, t.angle), je = (e, t) => e.corners.reduce((e, n) => {
		let r = n.x * t.x + n.y * t.y;
		return {
			min: Math.min(e.min, r),
			max: Math.max(e.max, r)
		};
	}, {
		min: Infinity,
		max: -Infinity
	}), Me = (e, t, n = 0) => [...e.axes, ...t.axes].every((r) => {
		let i = je(e, r), a = je(t, r);
		return !(i.max + n <= a.min || a.max + n <= i.min);
	}), Ne = (e, t) => e.corners.every((e) => e.x >= 0 && e.y >= 0 && e.x <= t.width && e.y <= t.height), Pe = (e) => {
		let t = window.getComputedStyle(e), n = e.getBoundingClientRect();
		return t.display !== "none" && t.visibility !== "hidden" && t.opacity !== "0" && n.width > 0 && n.height > 0;
	}, Fe = (e, t) => {
		let n = e.container;
		return n ? Array.from(n.querySelectorAll([
			".esri-ui .esri-component",
			".esri-popup",
			".esri-attribution",
			"arcgis-sketch",
			"[class*=\"esri-sketch\"]"
		].join(","))).filter((e) => !!v && !v.contains(e)).filter(Pe).map((e) => De(e.getBoundingClientRect(), t)).filter((e) => !!e).filter((e) => e.width < t.width * .85 || e.height < t.height * .85).map(ke) : [];
	}, Ie = (e) => e.graphics.find((e) => {
		let t = e.attributes, n = e.geometry;
		return !!t && !!n && n.type === "point" && (t.drawMeasurementKind === "vertex-marker" || t.drawMeasurementKind === "vertex-label");
	})?.geometry, R = (e, t) => {
		let n = Ie(e);
		if (!n) return;
		let r = t.toScreen(n);
		if (k(r)) return Oe(r, Ke, Ke);
	}, z = (e, t) => {
		let n = [];
		return e.filter((e) => {
			let r = R(e, t);
			return r ? n.some((e) => Me(r, e, Ue)) ? !1 : (n.push(r), !0) : !0;
		});
	}, Le = (e) => {
		let t = /* @__PURE__ */ new Set(), n = [];
		return p.forEach((r) => {
			let i = r.attributes, a = r.geometry;
			if (!i || !a || a.type !== "point") return;
			let o = e.toScreen(a);
			if (k(o) && (i.drawMeasurementKind === "vertex-marker" || i.drawMeasurementKind === "vertex-label")) {
				let e = i.drawVertexKey ?? `${o.x}:${o.y}`;
				if (t.has(e)) return;
				t.add(e), n.push(Oe(o, Ke, Ke));
			}
		}), n;
	}, Re = (e, t) => [...Le(e), ...Fe(e, t)], ze = (e) => {
		let t = e.container;
		if (t) return v?.parentElement === t ? v : (v?.remove(), v = document.createElement("div"), v.className = "rv-draw-segment-label-overlay", v.setAttribute("aria-hidden", "true"), t.appendChild(v), b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), v);
	}, Be = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-badge"), r = e.querySelector(".rv-draw-segment-label-distance");
		n && (n.textContent = t.letter, n.style.backgroundColor = t.badgeColor, n.hidden = !t.showBadge), r && (r.textContent = t.distanceText ?? ""), e.dataset.segmentKey = t.key, e.classList.toggle("rv-no-badge", !t.showBadge);
	}, B = (e) => {
		let t = document.createElement("div");
		t.className = "rv-draw-segment-label", t.style.visibility = "hidden", t.style.left = "0px", t.style.top = "0px";
		let n = document.createElement("span");
		n.className = "rv-draw-segment-label-badge", t.appendChild(n);
		let r = document.createElement("span");
		return r.className = "rv-draw-segment-label-distance", t.appendChild(r), Be(t, e), t;
	}, V = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-distance");
		n && (n.textContent = t.text), e.dataset.areaLabelKey = t.key;
	}, Ve = (e) => {
		let t = document.createElement("div");
		t.className = "rv-draw-segment-label rv-draw-area-label rv-no-badge", t.style.visibility = "hidden", t.style.left = "0px", t.style.top = "0px";
		let n = document.createElement("span");
		return n.className = "rv-draw-segment-label-distance", t.appendChild(n), V(t, e), t;
	}, H = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-distance");
		e.classList.toggle("rv-distance-hidden", t), n && (n.hidden = t);
	}, He = (e, t) => {
		e.style.left = `${t.anchor.x}px`, e.style.top = `${t.anchor.y}px`, e.style.transform = `translate(-50%, -50%) rotate(${t.angle}deg)`, e.style.transformOrigin = "center center";
	}, qe = (e, t, n) => Ne(e, t) ? !n.some((t) => Me(e, t, Ue)) : !1, Je = (e, t, n, r) => qe(e, t, r) && !n.some((t) => Me(e, t, Ue)), Ye = (e, t, n, r, i, a) => {
		if (Je(e, t, i, a)) return n.sideCrowdingScore + r * .01;
	}, Xe = (e, t, n, r, i, a) => {
		let o, s = [...r, ...i];
		return t.forEach((t, r) => {
			He(e, t);
			let i = Ae(e, t), c = Ye(i, n, t, r, s, a);
			c !== void 0 && (!o || c < o.score) && (o = {
				candidate: t,
				box: i,
				score: c
			});
		}), o;
	}, Ze = () => {
		b.forEach((e, t) => {
			e.classList.toggle("rv-active", oe(t));
		});
	}, Qe = () => {
		y !== null && (window.cancelAnimationFrame(y), y = null), ne = [], S = [], v?.remove(), v = null, b.clear(), x.clear();
	}, $e = (t, n = S) => {
		let r = e.geo.map.esriView;
		if (ne = t, S = n, !r || !t.length && !n.length) {
			Qe();
			return;
		}
		let i = ze(r), a = r.container;
		if (!i || !a) {
			Qe();
			return;
		}
		let o = new Set(t.map((e) => e.key));
		b.forEach((e, t) => {
			o.has(t) || (e.remove(), b.delete(t));
		}), t.forEach((e) => {
			let t = b.get(e.key);
			t ? Be(t, e) : (t = B(e), b.set(e.key, t), i.appendChild(t)), t.style.display = "inline-flex", t.style.visibility = "hidden", t.style.transform = "translate(-50%, -50%) rotate(0deg)", H(t, !e.distanceText);
		});
		let s = new Set(n.map((e) => e.key));
		x.forEach((e, t) => {
			s.has(t) || (e.remove(), x.delete(t));
		}), n.forEach((e) => {
			let t = x.get(e.key);
			t ? V(t, e) : (t = Ve(e), x.set(e.key, t), i.appendChild(t)), t.style.display = "inline-flex", t.style.visibility = "hidden", t.style.transform = "translate(-50%, -50%) rotate(0deg)";
		});
		let c = a.getBoundingClientRect(), l = Re(r, c), u = [], d = [];
		n.forEach((e) => {
			let t = x.get(e.key);
			if (!t) return;
			let n = r.toScreen(e.point);
			if (!k(n)) {
				t.style.display = "none";
				return;
			}
			He(t, {
				anchor: {
					x: n.x,
					y: n.y
				},
				angle: 0
			});
			let i = Ae(t, {
				anchor: {
					x: n.x,
					y: n.y
				},
				angle: 0
			});
			if (!Je(i, c, u, l)) {
				t.style.display = "none";
				return;
			}
			u.push(i), t.style.visibility = "visible";
		});
		let f = [], p = [];
		t.forEach((e) => {
			let t = b.get(e.key);
			if (!t) return;
			let n = Ce(e, r);
			if (!n || n.length < W) {
				t.style.display = "none";
				return;
			}
			let i = t.offsetWidth, a = !!e.distanceText && n.length >= i + Ge;
			if (H(t, !a), !a && !e.showBadge) {
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
			let t = Ee(e.label, e.placement, r), n = Xe(e.element, t, c, u, d, l);
			return n ? (He(e.element, n.candidate), d.push(n.box), e.element.style.visibility = "visible", !0) : !1;
		};
		f.forEach((e) => {
			m(e) || (e.label.showBadge ? (H(e.element, !0), p.push(e)) : e.element.style.display = "none");
		}), p.forEach((e) => {
			m(e) || (e.element.style.display = "none");
		}), Ze();
	}, K = () => {
		y === null && (y = window.requestAnimationFrame(() => {
			y = null, $e(ne, S);
		}));
	}, q = () => {
		if (C.length) return;
		let t = () => K();
		C = [e.event.on(r.MAP_EXTENTCHANGE, t), e.event.on(r.RAMP_MOBILEVIEW_CHANGE, t)];
	}, J = () => {
		C.forEach((t) => e.event.off(t)), C = [];
	}, Y = (t) => {
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
	}, et = (t) => {
		if (Number.isFinite(t.x) && Number.isFinite(t.y)) return {
			x: t.x,
			y: t.y
		};
		let n = Y(t), r = e.geo.map.esriView?.container;
		if (!n || !r) return;
		let i = r.getBoundingClientRect();
		return {
			x: n.x - i.left,
			y: n.y - i.top
		};
	}, tt = (e) => {
		let t = Y(e);
		if (t) for (let [e, n] of b) {
			if (!Pe(n)) continue;
			let r = n.getBoundingClientRect();
			if (t.x >= r.left && t.x <= r.right && t.y >= r.top && t.y <= r.bottom) return e;
		}
	}, nt = (e, t, n) => {
		let r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = r.x * r.x + r.y * r.y;
		if (i <= 0) return he(e, t);
		let a = Math.max(0, Math.min(1, ((e.x - t.x) * r.x + (e.y - t.y) * r.y) / i));
		return he(e, {
			x: t.x + r.x * a,
			y: t.y + r.y * a
		});
	}, rt = (t) => {
		let n = e.geo.map.esriView, r = et(t);
		if (!n || !r) return;
		let i;
		return ne.forEach((e) => {
			let t = P(e.start, e.geometry.spatialReference, n), a = P(e.end, e.geometry.spatialReference, n);
			if (!t || !a) return;
			let o = nt(r, t, a);
			o <= We && (!i || o < i.distance) && (i = {
				key: e.key,
				distance: o
			});
		}), i?.key;
	}, it = (e) => {
		if (e.type === "circle" || !e.includeDistance && !e.includeSegmentBadges) return [];
		let t = e.geometry;
		return me(t, e.id).map((r) => {
			let a = M(r.lengthMeters, n.value, i), o = e.includeDistance ? a.display : void 0;
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
	}, at = (e) => e.type === "circle" || e.geometry.type !== "polyline" && e.geometry.type !== "polygon" ? [] : fe(e.geometry, e.id).map((t) => {
		let n = se(t.key);
		return { graphics: le(ue(t.vertex, e.geometry.spatialReference), String(t.index + 1), {
			drawMeasurement: !0,
			drawMeasurementKind: "vertex-label",
			drawGraphicId: e.id,
			drawVertexKey: t.key
		}, n) };
	}), ot = (e) => {
		let t = e.geometry;
		if (t.type !== "polygon") return;
		let r = t, a = pe(r), o = N(r);
		if (!a || a < .01 || !o) return;
		let s = j(a, n.value, i);
		return {
			graphics: [],
			areaLabels: [{
				key: `${e.id}:area`,
				text: s.display,
				point: o
			}],
			accessibleText: i("draw.measurements.area", { area: s.spoken })
		};
	}, st = (e) => {
		let t = e.geometry;
		if (!t || t.type === "point" || t.type === "multipoint") return [];
		let n = [...it(e), ...e.includeVertices ? at(e) : []], r = e.includeArea ? ot(e) : void 0;
		return r && n.push(r), n;
	}, ct = (e) => e?.attributes?.id, lt = (e, t, n, r) => {
		if (n) return {
			id: e,
			type: t ?? n.type,
			geometry: n,
			...r
		};
	}, ut = (e, t) => {
		if (!t) return;
		let n = e.get(t.id);
		if (!n) {
			e.set(t.id, t);
			return;
		}
		n.geometry = t.geometry, n.type = t.type, n.includeDistance ||= t.includeDistance, n.includeSegmentBadges ||= t.includeSegmentBadges, n.includeVertices ||= t.includeVertices, n.includeArea ||= t.includeArea, n.badgeColor = t.badgeColor || n.badgeColor;
	}, dt = () => t.graphics.map((e) => {
		let n = String(e.id ?? e.attributes?.id ?? ""), r = ae(e.attributes), i = T(n) && t.shapeDetailsLabelsVisible, a = i || r.segmentLength, o = i || r.segmentLetters, s = i || r.vertexNumbers;
		return lt(n, e.type ?? e.attributes?.type, I(e.geometry), {
			includeDistance: t.measurementsEnabled || a,
			includeSegmentBadges: o,
			includeVertices: s,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: G
		});
	}).filter((e) => !!e?.id), ft = () => (a()?.graphics.toArray() ?? []).filter((e) => !!ct(e)).map((e) => {
		let n = ct(e), r = ae(e.attributes), i = T(n) && t.shapeDetailsLabelsVisible, a = i || r.segmentLength, o = i || r.segmentLetters, s = i || r.vertexNumbers;
		return lt(n, e.attributes?.type, e.geometry, {
			includeDistance: t.measurementsEnabled || a,
			includeSegmentBadges: o,
			includeVertices: s,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: G
		});
	}).filter((e) => !!e), pt = (e, n) => {
		if (!e) return;
		let r = ae(e.attributes), i = ct(e), a = !!i && T(i) && t.shapeDetailsLabelsVisible, o = a || r.segmentLength, s = a || r.segmentLetters, c = a || r.vertexNumbers;
		return lt(i ?? "active-draw-measurement", n ?? e.attributes?.type, e.geometry, {
			includeDistance: t.measurementsEnabled || o,
			includeSegmentBadges: s,
			includeVertices: c,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: G
		});
	}, mt = () => {
		if (!s() || !t.shapeDetailsLabelsVisible && !t.shapeDetailsLabelsUseSettings) return;
		let e = c() ?? t.getSelectedGraphic(), n = ct(e) ?? String(e?.id ?? "");
		if (!n) return;
		let r = ae(e?.attributes), i = t.shapeDetailsLabelsVisible || r.segmentLength, a = t.shapeDetailsLabelsVisible || r.segmentLetters, o = t.shapeDetailsLabelsVisible || r.vertexNumbers;
		return lt(n, e?.attributes?.type ?? e?.type, I(e?.geometry), {
			includeDistance: t.measurementsEnabled || i,
			includeSegmentBadges: a,
			includeVertices: o,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: G
		});
	}, ht = (e, n) => {
		let r = /* @__PURE__ */ new Map();
		return (t.measurementsEnabled || ie()) && (dt().forEach((e) => ut(r, e)), ft().forEach((e) => ut(r, e)), ut(r, pt(e, n))), ut(r, mt()), Array.from(r.values()).flatMap((e) => st(e));
	}, gt = () => {
		t.setHoveredSegmentKey(null), t.setHoveredVertexKey(null);
	}, _t = () => {
		ee?.remove(), ee = null, g?.remove(), g = null, _ && e.geo.map.esriView?.container && e.geo.map.esriView.container.removeEventListener("mouseleave", _), _ = null, gt();
	}, vt = async (t) => {
		let n = e.geo.map.esriView;
		return !n || !p.length ? null : (await n.hitTest(t, { include: p })).results.find((e) => "graphic" in e && !!e.graphic.attributes?.drawMeasurement)?.graphic ?? null;
	}, yt = async (e) => {
		if (!E()) {
			gt();
			return;
		}
		let n = ++f, r = tt(e) ?? rt(e);
		if (r) {
			t.setHoveredSegmentKey(D(r) ? r : null), t.setHoveredVertexKey(null);
			return;
		}
		let i = await vt(e);
		if (n !== f) return;
		let a = i?.attributes;
		t.setHoveredSegmentKey(D(a?.drawSegmentKey) ? a.drawSegmentKey : null), t.setHoveredVertexKey(D(a?.drawVertexKey) ? a.drawVertexKey : null);
	}, bt = async (e) => {
		if (!E()) return;
		let n = tt(e) ?? rt(e);
		if (n) {
			if (!D(n)) return;
			t.setSelectedSegmentKey(n), t.setSelectedVertexKey(null), e.stopPropagation?.();
			return;
		}
		let r = (await vt(e))?.attributes, i = r?.drawSegmentKey, a = r?.drawVertexKey;
		if (D(i)) t.setSelectedSegmentKey(i), t.setSelectedVertexKey(null);
		else if (D(a)) t.setSelectedVertexKey(a), t.setSelectedSegmentKey(null);
		else return;
		e.stopPropagation?.();
	}, xt = () => {
		let t = e.geo.map.esriView;
		!t || ee || g || (ee = t.on("pointer-move", (e) => {
			yt(e);
		}), g = t.on("click", (e) => {
			bt(e);
		}), _ = gt, t.container?.addEventListener("mouseleave", _));
	}, St = () => {
		Ze(), p.forEach((e) => {
			let t = e.attributes;
			if (t) {
				if (t.drawMeasurementKind === "vertex-marker") {
					e.symbol = ce(se(t.drawVertexKey));
					return;
				}
				t.drawMeasurementKind === "vertex-label" && (e.symbol = O(t.drawMeasurementText ?? "", se(t.drawVertexKey)));
			}
		});
	}, Ct = () => {
		d++, u !== null && (window.cancelAnimationFrame(u), u = null), m = null, re.value = "", _t(), J(), Qe();
		try {
			e.geo.map.esriView?.graphics.removeMany(p);
		} catch (e) {
			console.warn("Unable to clear draw measurement graphics.", e);
		}
		p = [];
	}, wt = (e) => {
		let t = e.map((e) => e.accessibleText).filter((e) => !!e), n = t.length ? i("draw.measurements.summary", { measurements: t.join(". ") }) : i("draw.measurements.none");
		re.value !== n && (re.value = n);
	}, X = async (t, n) => {
		let r = ++d;
		if (u !== null && (window.cancelAnimationFrame(u), u = null, m = null), !w()) {
			Ct();
			return;
		}
		try {
			await A();
		} catch (e) {
			console.warn("Unable to load draw measurement operators.", e);
			return;
		}
		if (r !== d || !w()) return;
		let i = e.geo.map.esriView, a = i?.graphics;
		if (!i || !a) return;
		let o = z(ht(t, n), i);
		try {
			p.length && a.removeMany(p);
		} catch (e) {
			console.warn("Unable to remove stale draw measurement graphics.", e);
		}
		p = o.flatMap((e) => e.graphics);
		let s = o.flatMap((e) => e.segmentLabels ?? []), c = o.flatMap((e) => e.areaLabels ?? []);
		$e(s, c), s.length || c.length ? q() : J();
		try {
			p.length && a.addMany(p), p.length || s.length ? xt() : _t();
		} catch (e) {
			console.warn("Unable to add draw measurement graphics.", e), p = [], _t();
		}
		wt(o);
	};
	return L(() => [
		t.activeSegmentKey,
		t.activeVertexKey,
		t.shapeDetailsActiveTab,
		t.selectedGraphicId
	], () => {
		St();
	}), {
		measurementSummary: re,
		clearMeasurementGraphics: Ct,
		refreshMeasurementGraphics: X,
		scheduleMeasurementRefresh: (e, t) => {
			if (!w()) {
				Ct();
				return;
			}
			m = {
				activeGraphic: e,
				activeTool: t
			}, u === null && (u = window.requestAnimationFrame(() => {
				u = null;
				let e = m;
				m = null, X(e?.activeGraphic, e?.activeTool);
			}));
		}
	};
}, Je = {
	key: 0,
	class: "sr-only",
	"aria-live": "polite",
	"aria-atomic": "true"
}, Ye = 24, Xe = 160, Ze = 48, Qe = /* @__PURE__ */ P({
	__name: "draw",
	setup(n) {
		let { t: a, availableLocales: l, locale: u } = ke(), f = (e) => a(e ? `draw.${e}` : "draw.unknown"), g = ye("iApi"), b = E(), C = t(), w = (e) => {
			let t = l.length ? l : [u.value], n = {};
			for (let r of t) n[r] = a(e, {}, { locale: r });
			return n;
		}, O = null, ue = Oe("sketchEl"), k = null, A = null, j = null, M = null, pe = null, N = null, P = !1, F = 0, Te = null, I = /* @__PURE__ */ new Map(), Ae = 0, Pe = {}, Fe = 0, Ie = 0, R = null, z = null, Le = null, Re = null, Be = null, B = null, V = null, Ve = [
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
		], H = we([]), U, { measurementSummary: Ue, clearMeasurementGraphics: We, refreshMeasurementGraphics: W, scheduleMeasurementRefresh: Ge } = qe({
			iApi: g,
			drawStore: b,
			locale: u,
			t: a,
			getGraphicsLayer: () => k,
			isShapeDetailsOpen: () => Z(),
			getShapeDetailsGraphic: () => Bt()
		}), G = null, Ke = (e = b.activeTool) => e !== null && e !== "" || b.shapeDetailsPickEnabled || Z(), Qe = (e = b.activeTool) => {
			let t = g.fixture.get("panguard");
			if (Ke(e)) {
				t && G === null && (G = t.enabled, t.setEnabled(!1));
				return;
			}
			G !== null && (t?.setEnabled(G), G = null);
		}, $e = (e) => {
			Hn(e.detail);
		}, K = (e) => {
			Un(e.detail);
		}, q = () => {
			try {
				O?.cancel();
			} catch (e) {
				console.warn("Unable to cancel draw sketch.", e);
			}
		}, J = () => {
			Te !== null && (window.clearTimeout(Te), Te = null);
		}, Y = () => O?.widget, et = (e = O) => e?.widget?.viewModel ?? e?.viewModel, tt = (e, t = O) => {
			let n = et(t);
			n && (n.updateOnGraphicClick = e);
		}, nt = () => M?.state === "active" || et()?.state === "active" || O?.state === "active", rt = (e, t) => {
			let n = t?.updateGraphics ?? et()?.updateGraphics ?? Y()?.updateGraphics ?? O?.updateGraphics;
			return n ? n.includes(e) || n.toArray().some((t) => t === e || t.attributes?.id === e.attributes?.id) : !1;
		}, it = (e) => {
			let t = et()?.defaultUpdateOptions ?? Y()?.defaultUpdateOptions ?? O?.defaultUpdateOptions ?? {};
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
		}, at = (e) => {
			if (!O || !e) return;
			let t = Y(), n = et();
			O.layer = e, t && (t.layer = e), n && (n.layer = e, tt(!1));
		}, ot = () => {
			if (pe?.remove(), pe = null, M) {
				try {
					M.cancel();
				} catch (e) {
					console.warn("Unable to cancel draw edit sketch view model.", e);
				}
				M.destroy(), M = null;
			}
		}, st = () => y(b.styleSettings), ct = () => re(b.bufferSettings), lt = () => b.identifyBufferMode, ut = (e) => e ? le(e) : void 0, dt = async (e) => {
			let t = g.geo.layer.getLayer(e);
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
		}, ft = (e) => {
			let t = g.geo.layer.getLayer(e);
			if (t) try {
				g.geo.map.removeLayer(t);
			} catch (t) {
				console.warn(`Unable to remove draw graphics layer ${e}.`, t);
			}
		}, pt = (e) => {
			let t = k?.graphics.toArray().some((t) => ut(t) === e) ?? !1, n = b.graphics.some((t) => ut(t) === e);
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
			let t = mt(e), n = Pe[t] ?? 999, r;
			do
				r = `${t}${++n}`;
			while (!pt(r));
			return Pe[t] = n, r;
		}, gt = (e, t) => {
			let n = t?.trim();
			return n && pt(n) ? n : ht(e);
		}, _t = (e) => oe(e.attributes), vt = (e) => ne(e.attributes), yt = (e) => _(e.attributes), bt = (e) => ae(e.attributes), xt = () => {
			if (!O) return;
			let e = st();
			O.pointSymbol = x("point", e), O.polylineSymbol = x("polyline", e), O.polygonSymbol = x("polygon", e);
		}, St = (e) => {
			let t = e.attributes?.id;
			t && b.updateGraphic(t, {
				type: e.attributes?.type,
				geometry: e.geometry,
				attributes: e.attributes
			});
		}, Ct = (e) => k?.graphics.toArray().find((t) => t.attributes?.id === e), wt = (e) => {
			if (!e || e.attributes?.drawMeasurement) return;
			let t = e.attributes?.drawBufferFor;
			return t ? Ct(t) : e.attributes?.id ? e : void 0;
		}, X = (e) => {
			e.symbol = x(e.geometry?.type ?? e.attributes?.type, _t(e));
		}, Tt = (e, t = st(), n = ct(), r = lt()) => {
			e.attributes = {
				...e.attributes ?? {},
				drawStyle: y(t),
				drawBuffer: re(n),
				drawIdentifyBufferMode: r,
				drawMapLabels: T(e.attributes?.drawMapLabels)
			}, X(e);
		}, Et = (e, t, n) => {
			let r = t ?? e.attributes?.type ?? e.geometry?.type, i = gt(r, n);
			return e.attributes = {
				...e.attributes ?? {},
				id: i,
				type: r,
				drawStyle: y(e.attributes?.drawStyle ?? st()),
				drawBuffer: re(e.attributes?.drawBuffer ?? ct()),
				drawIdentifyBufferMode: _(e.attributes, lt()),
				drawMapLabels: T(e.attributes?.drawMapLabels)
			}, X(e), i;
		}, Dt = (e) => {
			if (!e) return;
			let t = I.get(e);
			if (t) {
				try {
					k?.remove(t);
				} catch (e) {
					console.warn("Unable to remove draw buffer graphic.", e);
				}
				I.delete(e);
			}
		}, Ot = () => {
			let e = Array.from(I.values());
			if (e.length) try {
				k?.removeMany(e);
			} catch (e) {
				console.warn("Unable to clear draw buffer graphics.", e);
			}
			I = /* @__PURE__ */ new Map();
		}, kt = (e) => {
			let t = e.attributes?.id;
			if (!t || !k) return;
			let n = D(e, _t(e), vt(e)), r = I.get(t);
			if (!n) {
				Dt(t);
				return;
			}
			if (r) {
				r.geometry = n.geometry, r.symbol = n.symbol, r.attributes = n.attributes;
				return;
			}
			let i = k.graphics.indexOf(e);
			i >= 0 ? k.graphics.add(n, i) : k.add(n), I.set(t, n);
		}, At = () => {
			let e = b.selectedGraphicSettingsUpdatedGraphicId ?? b.selectedGraphicId, t = e ? b.graphics.find((t) => t.id === e) : void 0, n = R?.attributes?.id === e ? R : e ? k?.graphics.toArray().find((t) => t.attributes?.id === e) : void 0;
			if (!t || !n) return;
			let r = vt(n), i = yt(n), a = oe(t.attributes), o = ne(t.attributes), s = _(t.attributes), c = r.distance !== o.distance || r.unit !== o.unit || i !== s;
			Tt(n, a, o, s), B?.sourceGraphic === n && Tt(B.editGraphic, a, o, s), kt(n), St(n), Q(Z() ? n : void 0), c && Vt(n);
		}, jt = (e, t = !0) => {
			let n = wt(e);
			n && (R = n, St(n), n.attributes?.id && b.selectGraphic(n.attributes.id), Q(t ? n : void 0));
		}, Mt = (e) => {
			jt(e), Jt("details"), b.requestShapePanelFocus(), Vt(e);
		}, Nt = (e) => {
			jt(e, !1), zt(e);
		}, Pt = (e) => {
			if (e) return e;
			let t = b.selectedGraphicId;
			return R && (!t || R.attributes?.id === t) ? R : t ? k?.graphics.toArray().find((e) => e.attributes?.id === t) : void 0;
		}, Ft = () => {
			let e = R ?? k?.graphics.toArray().find((e) => e.attributes?.id === b.selectedGraphicId), t = e?.attributes?.id;
			if (!e || !t) return !1;
			try {
				O?.delete();
			} catch (e) {
				console.warn("Unable to delete draw sketch graphic.", e);
			}
			return B?.sourceGraphic === e && $({ restoreSource: !1 }), Dt(t), Ut(t), Ht(), k?.remove(e), b.removeGraphic(t), R = null, b.clearSelection(), Q(void 0), W(), g.updateAlert(a("draw.graphic.deleted")), !0;
		}, It = (e) => {
			if (!e.length || !k) return 0;
			let t = [];
			return e.forEach((e) => {
				try {
					let n = ee(e.geometry);
					if (!n) return;
					let r = e.type || n.type, i = new h({
						geometry: n,
						attributes: {
							type: r,
							drawStyle: y(e.settings.drawStyle),
							drawBuffer: re(e.settings.drawBuffer),
							drawIdentifyBufferMode: e.settings.drawIdentifyBufferMode,
							drawMapLabels: T(e.settings.drawMapLabels)
						}
					}), a = Et(i, r, e.id);
					t.push(i), b.addGraphic({
						id: a,
						type: r,
						geometry: i.geometry,
						attributes: i.attributes
					});
				} catch {}
			}), t.length ? (k.addMany(t), t.forEach(kt), W(), g.updateAlert(a("draw.import.success", { count: t.length })), t.length) : (g.updateAlert(a("draw.import.error.invalid")), 0);
		}, Lt = () => {
			let e = b.importShapesRequestId;
			!e || e === Ie || !k || (It([...b.importShapeRecords]), Ie = e, b.clearImportShapes(e));
		}, Rt = () => {
			if (!k || !b.graphics.length) return;
			let e = new Set(k.graphics.toArray().map((e) => ut(e)).filter((e) => !!e)), t = b.graphics.flatMap((t) => {
				let n = ut(t), r = t.geometry?.clone?.() ?? t.geometry;
				if (!n || !r || e.has(n)) return [];
				let i = t.type ?? t.attributes?.type ?? r.type, a = new h({
					geometry: r,
					attributes: {
						...t.attributes ?? {},
						id: n,
						type: i
					}
				});
				return X(a), e.add(n), [a];
			});
			t.length && (k.addMany(t), t.forEach(kt));
		}, zt = (e) => {
			let t = ++Ae;
			b.setActiveTool("edit"), Jt("edit"), window.setTimeout(() => {
				if (t !== Ae || b.activeTool !== "edit") return;
				let n = Pt(e);
				n && Mn(n);
			}, 0);
		}, Bt = () => {
			let e = b.selectedGraphicId;
			if (e) return R?.attributes?.id === e ? R : k?.graphics.toArray().find((t) => t.attributes?.id === e);
		}, { refreshSelectedGraphicFeatureCounts: Vt, cancelPendingFeatureCountRefresh: Ht, cancelFeatureCountRunsForGraphic: Ut, scheduleFeatureCountRefresh: Wt, runIdentifyForSelectedGraphic: Gt } = ze({
			iApi: g,
			drawStore: b,
			getDrawGraphicId: ut,
			getGraphicDrawBufferSettings: vt,
			getGraphicDrawIdentifyBufferMode: yt,
			getSelectedFeatureCountGraphic: () => Bt() ?? b.getSelectedGraphic() ?? void 0
		}), Kt = (e) => ce(C, e), Z = () => Kt(v), qt = () => Z() && b.shapeDetailsActiveTab === "details" && !!b.selectedGraphicId, Jt = (e = "details") => {
			se(g, e, { focusExisting: !0 });
		}, Yt = () => {
			if (Kt("draw-settings")) {
				g.panel.focus(S);
				return;
			}
			g.panel.open(S);
		}, Xt = (e) => {
			Kt(e) && g.panel.close(e);
		}, Zt = new Set([v]), Qt = () => {
			let e = g.geo.map.esriView?.padding;
			return {
				top: Number(e?.top ?? 0),
				right: Number(e?.right ?? 0),
				bottom: Number(e?.bottom ?? 0),
				left: Number(e?.left ?? 0)
			};
		}, $t = () => {
			let e = g.geo.map.esriView;
			return e?.viewpoint?.clone?.() ?? {
				center: e?.center?.clone?.(),
				scale: e?.scale,
				rotation: e?.rotation
			};
		}, en = (e) => {
			let t = g.geo.map.esriView;
			t && (t.padding = { ...e });
		}, tn = () => {
			if (Z()) return v;
		}, nn = (e, t) => {
			let n = g.geo.map.esriView, r = n?.container?.getBoundingClientRect(), i = (g.$rootEl?.querySelector(`[data-cy="${e}"]`))?.getBoundingClientRect(), a = g.$vApp.$el.querySelector(".appbar")?.getBoundingClientRect(), o = g.panel.get(e)?.width ?? 350, s = a && r ? Math.max(0, a.right - r.left) : 0, c = i?.width ?? o, l = i && r ? i.right - r.left : s + o, u = s ? s + c : l, d = Math.max(t.left, Math.ceil(u + Ye)), f = n?.width ?? r?.width ?? 0, p = C.mobileView ? Ze : Xe;
			return f > p && (d = Math.min(d, f - p)), Math.max(0, d);
		}, rn = (e, t) => ({
			top: t.top + Ye,
			right: t.right + Ye,
			bottom: t.bottom + Ye,
			left: nn(e, t)
		}), an = () => {
			let e = g.panel.opened.slice().filter((e) => !Zt.has(e.id)).map((e) => ({
				panel: e,
				wasPinned: e.isPinned
			}));
			return e.forEach(({ panel: e }) => e.minimize()), e;
		}, on = (e) => {
			e.forEach(({ panel: e }) => {
				!g.panel.get(e.id) || e.isOpen || e.open();
			}), e.filter(({ panel: e, wasPinned: t }) => t && !!g.panel.get(e.id)).forEach(({ panel: e }) => e.pin(!0));
		}, sn = (e) => !!e && typeof e == "object" && e.name === "AbortError", cn = async (e, t, n) => {
			if (await be(), V !== e || t !== Fe || !n.geometry) return;
			let r = tn();
			if (r) {
				e.previousViewpoint ||= $t(), en(rn(r, e.previousPadding)), e.paddingAdjusted = !0;
				try {
					let e = g.geo.geom.geomEsriToRamp(n.geometry, n.attributes?.id);
					await g.geo.map.zoomMapTo(e, void 0, !0, 250, "ease");
				} catch (e) {
					sn(e) || console.warn("Unable to focus the map on the selected draw shape.", e);
				}
			}
		}, ln = () => {
			if (C.mobileView || V) return;
			let e = g.geo.map.esriView, t = Bt();
			if (!e) return;
			let n = {
				previousPadding: Qt(),
				paddingAdjusted: !1,
				minimizedPanels: []
			};
			V = n;
			let r = ++Fe;
			n.minimizedPanels = an(), t?.geometry && cn(n, r, t);
		}, un = () => {
			if (C.mobileView) return;
			let e = Bt();
			if (!g.geo.map.esriView || !e?.geometry) return;
			if (!V) {
				ln();
				return;
			}
			let t = V, n = new Set(t.minimizedPanels.map(({ panel: e }) => e.id)), r = an().filter(({ panel: e }) => !n.has(e.id));
			t.minimizedPanels.push(...r), cn(t, ++Fe, e);
		}, dn = () => {
			let e = V;
			if (!e) return;
			V = null, Fe++, e.paddingAdjusted && en(e.previousPadding), on(e.minimizedPanels);
			let t = g.geo.map.esriView;
			!t || !e.previousViewpoint || t.goTo(e.previousViewpoint, {
				animate: !0,
				duration: 250,
				easing: "ease"
			}).catch((e) => {
				sn(e) || console.warn("Unable to restore the map after closing the draw shape panel.", e);
			});
		}, fn = () => {
			let e = b.activeTool, t = e !== null && e !== "" && e !== "edit", n = e === "edit";
			return b.shapeDetailsPickEnabled && !t && !n;
		}, pn = () => !1, mn = (e, t, n) => {
			let r = e.geometry;
			if (!r) return !1;
			try {
				return d.execute(r, r.type === "polygon" ? t : n);
			} catch {
				return !1;
			}
		}, hn = (t) => {
			if (!k) return;
			let n = t.mapPoint ?? g.geo.map.esriView?.toMap({
				x: t.x,
				y: t.y
			});
			if (!n) return;
			let r = t.pointerType, i = t.native?.pointerType, a = r === "touch" || i === "touch" ? 15 : 5, o = n, s = g.geo.query.makeClickBuffer(e.fromESRI(n), a).toESRI();
			for (let e of k.graphics.toArray().slice().reverse()) {
				let t = wt(e);
				if (t && mn(e, o, s)) return t;
			}
		}, gn = (e) => {
			if (!k) return;
			let t = e.mapPoint.toESRI(), n = e.input === "touch" ? 15 : 5, r = g.geo.query.makeClickBuffer(e.mapPoint, n).toESRI();
			return k.graphics.toArray().slice().reverse().find((e) => !!e.attributes?.id && !e.attributes?.drawMeasurement && !e.attributes?.drawBufferFor && mn(e, t, r));
		}, _n = (e) => {
			let t = Z();
			if (!fn() && !t) return;
			let n = gn(e);
			n && fn() ? Mt(n) : !n && t && Xt(v);
		};
		async function vn() {
			let e = g.keyboardNav;
			if (!e) {
				console.warn("Keyboard navigation fixture is not available; draw shortcuts are disabled.");
				return;
			}
			U &&= (e.unregister(U), void 0);
			let t = new Set(b.supportedTypes.map((e) => e.type)), n = Ve.filter((e) => t.has(e.type)).map((e) => ({
				key: e.key,
				description: w(e.descriptionKey),
				handler: () => {
					b.setActiveTool(e.type);
				}
			}));
			U = e.register("D", {
				name: w("draw.keyboard.namespace"),
				activeHandler: () => {
					b.setActiveTool("");
				},
				deactiveHandler: () => {
					b.setActiveTool(null);
				},
				keys: [
					...n,
					{
						key: "I",
						description: w("draw.keyboard.key.inspector"),
						handler: () => (b.setActiveTool(null), Jt("details"), "reset")
					},
					{
						key: "D",
						description: w("draw.keyboard.key.defaults"),
						handler: () => (b.setActiveTool(null), Yt(), "reset")
					}
				]
			});
		}
		let Q = (e) => {
			let t = j ?? k;
			if (z && t && Le === t && e?.geometry && z.geometry?.type === e.geometry.type) {
				z.geometry = e.geometry, z.set("geometry", e.geometry);
				return;
			}
			if (z && (Le?.remove(z), k?.remove(z), j?.remove(z), z = null, Le = null), !e?.geometry || !t) return;
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
			z = new h({
				geometry: e.geometry,
				symbol: n
			}), t.add(z), Le = t;
		}, yn = () => {
			Re &&= (k?.remove(Re), null);
		}, bn = () => {
			Be &&= (k?.remove(Be), null);
		}, xn = () => {
			let e = b.mapLabelSettingsUpdatedGraphicId;
			if (!e) return;
			let t = b.graphics.find((t) => t.id === e), n = Ct(e);
			!t || !n || (n.attributes = {
				...n.attributes ?? {},
				drawMapLabels: T(bt(t))
			});
		}, Sn = () => {
			if (yn(), !qt()) return;
			let e = de(b.activeSegmentKey);
			if (!e || e.kind !== "segment" || e.graphicId !== b.selectedGraphicId) return;
			let t = Ct(e.graphicId), n = me(t?.geometry, e.graphicId)[e.index];
			!n || !t?.geometry || (Re = new h({
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
			}), k?.add(Re));
		}, Cn = () => {
			if (bn(), !qt()) return;
			let e = de(b.activeVertexKey);
			if (!e || e.kind !== "vertex" || e.graphicId !== b.selectedGraphicId) return;
			let t = Ct(e.graphicId), n = fe(t?.geometry, e.graphicId)[e.index];
			!n || !t?.geometry || (Be = new h({
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
			}), k?.add(Be));
		}, wn = () => {
			Sn(), Cn();
		}, Tn = (e) => {
			if (!k) return;
			let t = wt(e);
			if (!t) return;
			let n = t.attributes?.id;
			return k.graphics.toArray().find((e) => e === t || !!n && e.attributes?.id === n);
		}, En = (e) => B?.editGraphic === e ? B.sourceGraphic : e, Dn = () => {
			if (!B) return;
			let { sourceGraphic: e, editGraphic: t } = B;
			return e.geometry = t.geometry, e.set("geometry", t.geometry), X(e), kt(e), St(e), e;
		}, $ = ({ restoreSource: e = !0 } = {}) => {
			B?.sourceGraphic && e && (B.sourceGraphic.visible = !0), ot(), B = null, A?.removeAll(), at(k);
		}, On = (e) => {
			if (!(!A || !g.geo.map.esriView)) return ot(), M = new p({
				view: g.geo.map.esriView,
				layer: A,
				updateOnGraphicClick: !1,
				defaultUpdateOptions: it(e),
				pointSymbol: O?.pointSymbol,
				polygonSymbol: O?.polygonSymbol,
				polylineSymbol: O?.polylineSymbol
			}), pe = M.on("update", (e) => Un(e)), M;
		}, kn = async () => {
			if (!A || !g.geo.map.esriView) return !1;
			try {
				return await g.geo.map.esriView.whenLayerView(A), !0;
			} catch (e) {
				return console.warn("Unable to initialize draw edit sketch layer view.", e), !1;
			}
		}, An = (e) => {
			if (!A) return;
			$();
			let t = e.clone();
			t.attributes = { ...e.attributes };
			let n = e.geometry?.clone?.() ?? e.geometry;
			if (X(t), A.graphics = [t], e.visible = !1, B = {
				sourceGraphic: e,
				editGraphic: t,
				originalGeometry: n
			}, !On(t)) {
				e.visible = !0, B = null, A.removeAll();
				return;
			}
			return t;
		}, jn = async (e) => {
			let t = En(e);
			if (!O || !k || b.activeTool !== "edit" || R !== t) return !1;
			let n = B?.editGraphic === e, r = n ? M : et();
			if (!r || n && !await kn()) return !1;
			if (r.state === "active") return rt(e, r) ? !0 : (r.cancel(), !1);
			if (r.state !== "ready" || !r.hasGraphic(e)) return !1;
			try {
				r !== M && tt(!1), await r.update([e], it(e));
			} catch (e) {
				return console.warn("Unable to start draw sketch update.", e), !1;
			}
			return rt(e, r);
		}, Mn = (e, t = 5) => {
			if (!O || b.activeTool !== "edit") return;
			let n = Tn(e);
			if (!n) return;
			jt(n, !1), J(), q();
			let r = An(n);
			if (!r) return;
			Q(Z() ? n : void 0);
			let i = (e) => {
				Te = window.setTimeout(() => {
					Te = null, !(!O || b.activeTool !== "edit" || R !== n) && jn(r).then((t) => {
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
		}, Nn = ({ clearSelection: e = !1 } = {}) => {
			if (Ae++, J(), Dn(), q(), $({ restoreSource: !0 }), e && (R = null, b.clearSelection()), b.activeTool === "edit") {
				b.setActiveTool(null);
				return;
			}
			Q(Z() ? Bt() : void 0);
		}, Pn = ({ clearSelection: e = !1 } = {}) => {
			Ae++, J();
			let t = B;
			t?.sourceGraphic && t.originalGeometry && (t.sourceGraphic.geometry = t.originalGeometry, t.sourceGraphic.set("geometry", t.originalGeometry), X(t.sourceGraphic), kt(t.sourceGraphic), St(t.sourceGraphic), Ht(), Vt(t.sourceGraphic)), q(), $({ restoreSource: !0 }), e && (R = null, b.clearSelection()), b.activeTool === "edit" && b.setActiveTool(null), Q(Z() ? Bt() : void 0), W();
		};
		L(() => b.selectedGraphicId, (e, t) => {
			if (!(!O || !k)) {
				if (!e) J(), q(), $({ restoreSource: !0 }), Q();
				else if (e !== t) {
					let t = k.graphics.toArray().find((t) => t.attributes && t.attributes.id === e);
					t && (jt(t, b.activeTool !== "edit"), b.shapeDetailsPickEnabled && Vt(t));
				}
				W();
			}
		}), L(() => b.deleteSelectedGraphicRequestId, () => {
			Ft();
		}), L(() => b.editSelectedGraphicRequestId, () => {
			zt();
		}), L(() => b.identifySelectedGraphicRequestId, () => {
			Gt();
		}), L(() => b.stopEditModeRequestId, () => {
			Nn({ clearSelection: b.stopEditModeClearSelection });
		}), L(() => b.cancelEditModeRequestId, () => {
			Pn({ clearSelection: b.cancelEditModeClearSelection });
		}), L(() => b.refreshSelectedGraphicFeatureCountsRequestId, () => {
			Vt();
		}), L(() => b.mapLabelSettingsUpdateRequestId, () => {
			xn(), W();
		}), L(() => [b.shapeDetailsLabelsVisible, b.shapeDetailsLabelsUseSettings], () => {
			W();
		}), L(() => b.shapePanelFocusRequestId, () => {
			un();
		}), L(() => b.selectedGraphicSettingsUpdateRequestId, () => {
			At(), W();
		}), L(() => b.importShapesRequestId, () => {
			Lt();
		}), L(() => Z(), (e, t) => {
			if (Qe(), e && !t) {
				b.activeTool !== "edit" && Q(Bt()), W(), ln();
				return;
			}
			!e && t && (b.activeTool === "edit" && Nn(), b.setShapeDetailsPickEnabled(!1), b.setShapeDetailsLabelsVisible(!1), b.setShapeDetailsLabelsUseSettings(!1), b.setShapeDetailsActiveTab("details"), b.clearMeasurementInteraction(), Q(void 0), W(), dn());
		}), L(() => b.measurementsEnabled, (e) => {
			W(), g.updateAlert(a(e ? "draw.measurements.enabled" : "draw.measurements.disabled"));
		}), L(() => [
			b.activeSegmentKey,
			b.activeVertexKey,
			b.shapeDetailsActiveTab,
			b.selectedGraphicId,
			b.graphics.map((e) => e.geometry)
		], () => {
			wn();
		}, { deep: !0 }), L(() => ({
			fillColor: b.styleSettings.fillColor,
			borderColor: b.styleSettings.borderColor,
			bufferColor: b.styleSettings.bufferColor,
			opacity: b.styleSettings.opacity,
			bufferDistance: b.bufferSettings.distance,
			bufferUnit: b.bufferSettings.unit,
			identifyBufferMode: b.identifyBufferMode
		}), () => {
			xt(), W();
		});
		let { handleNavigationKeyDown: Fn, handleGraphicKeyboardEdit: In, resetMultiPointState: Ln } = He({
			iApi: g,
			drawStore: b,
			t: a,
			translateTerm: f,
			getSketch: () => O,
			getGraphicsLayer: () => k,
			getSelectedGraphic: () => R,
			getKeyboardEditGraphic: () => B?.editGraphic ?? R,
			setSelectedGraphic: (e) => {
				R = e;
			},
			prepareDrawGraphic: Et,
			applyDrawSymbol: X,
			syncBufferGraphic: kt,
			syncGraphicStoreRecord: St,
			syncActiveSketchEditToSource: Dn,
			highlightSelectedGraphic: Q,
			deleteSelectedGraphic: Ft,
			startSketchUpdate: Mn,
			cancelPendingSketchUpdate: J,
			clearActiveSketchEdit: $,
			refreshMeasurementGraphics: W,
			scheduleMeasurementRefresh: Ge,
			cancelPendingFeatureCountRefresh: Ht,
			refreshSelectedGraphicFeatureCounts: Vt
		}), Rn = async (e) => {
			let t = b.activeTool === "edit", n = pn();
			if (!t && !n) return;
			let r = wt((await g.geo.map.esriView.hitTest(e, { include: k })).results.find((e) => "graphic" in e && e.graphic.layer === k && !!wt(e.graphic))?.graphic) ?? hn(e);
			if (r) {
				if (n) {
					Nt(r);
					return;
				}
				nt() ? jt(r, !1) : Mn(r);
				return;
			}
			t && Nn({ clearSelection: !0 });
		}, zn = async () => {
			let e = ++F;
			if (await g.geo.map.viewPromise, e !== F || !ue.value || !g.geo.map.esriView) return;
			let t = await dt(je);
			if (e !== F || !g.geo.map.esriView || (k = t?.esriLayer, !k)) return;
			let n = await dt(Me);
			if (e !== F || !g.geo.map.esriView) {
				ft(Me), A = null;
				return;
			}
			if (A = n?.esriLayer, !A) return;
			let r = await dt(Ne);
			if (e !== F || !g.geo.map.esriView) {
				ft(Me), ft(Ne), A = null, j = null;
				return;
			}
			if (j = r?.esriLayer, !j) return;
			let i = ue.value;
			Object.assign(i, {
				view: g.geo.map.esriView,
				layer: k,
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
			}), tt(!1, i), g.geo.map.esriView.ui.add(i, "bottom-right"), P ||= (i.addEventListener("arcgisCreate", $e), i.addEventListener("arcgisUpdate", K), !0), O = i, tt(!1), xt(), N = g.geo.map.esriView.on("click", Rn), document.addEventListener("keydown", Fn), document.addEventListener("keydown", In, { capture: !0 }), b.activeTool && b.activeTool !== "edit" && O.create(b.activeTool), Rt(), W(), Lt();
		}, Bn = () => {
			if (!U) return;
			let e = g.keyboardNav;
			if (!e) {
				U = void 0;
				return;
			}
			e.unregister(U), U = void 0;
		}, Vn = ({ cleanupKeyboard: e = !0, clearActiveTool: t = !1, destroySketch: n = !0 } = {}) => {
			F++, e && Bn(), N &&= (N.remove(), null), $({ restoreSource: !0 }), A &&= (g.geo.map.esriView?.map?.remove(A), A.destroy(), null), O && (g.geo.map.esriView && g.geo.map.esriView.ui.remove(O), J(), q(), n && O.destroy()), P && ue.value && (ue.value.removeEventListener("arcgisCreate", $e), ue.value.removeEventListener("arcgisUpdate", K), P = !1), document.removeEventListener("keydown", Fn), document.removeEventListener("keydown", In, { capture: !0 }), R = null, Q(void 0), j && (g.geo.map.esriView?.map?.remove(j), j.destroy(), j = null, Le = null), yn(), bn(), J(), Ht(), Ae++, We(), Ot(), b.clearSelection(), t && b.activeTool && b.setActiveTool(null), Ln(), O = null, k = null;
		}, Hn = (e) => {
			if (e.state === "active" && e.graphic) {
				Ge(e.graphic, e.tool);
				return;
			}
			if (e.state === "cancel") {
				W();
				return;
			}
			if (e.state === "complete") {
				let t = e.graphic;
				if (!t) return;
				let n = Et(t, e.tool);
				kt(t), b.addGraphic({
					id: n,
					type: e.tool,
					geometry: t.geometry,
					attributes: t.attributes
				}), W(t, e.tool), e.tool !== "point" && (b.setActiveTool(""), g.keyboardNav?.reset());
			}
		}, Un = (e) => {
			let t = e.graphics[0];
			if (!t) return;
			let n = En(t);
			if (e.state === "start") {
				if (b.activeTool !== "edit") {
					q();
					return;
				}
				J(), jt(n, Z()), n.attributes?.id && g.updateAlert(a("draw.graphic.selected", { type: f(n.attributes?.type) }));
			} else if (e.state === "active") {
				X(t);
				let e = Dn() ?? n;
				kt(e), St(e), Q(Z() ? e : void 0), Ge(e, e.attributes?.type), Wt(e);
			} else if (e.state === "complete") {
				let e = Dn() ?? n;
				$({ restoreSource: !0 }), e.attributes?.id && (X(e), kt(e), St(e), Ht(), Vt(e), g.updateAlert(a("draw.graphic.updated"))), Q(Z() ? e : void 0), W(e, e.attributes?.type);
			}
		};
		return xe(() => {
			vn(), ie(), zn(), H.push(g.event.on(r.MAP_DESTROYED, () => {
				Vn();
			})), H.push(g.event.on(r.MAP_CLICK, _n)), H.push(g.event.on(r.MAP_REFRESH_START, () => {
				Vn({
					cleanupKeyboard: !1,
					clearActiveTool: !0,
					destroySketch: !1
				});
			})), H.push(g.event.on(r.MAP_REFRESH_END, () => {
				zn();
			})), H.push(g.event.on(r.FIXTURE_ADDED, (e) => {
				e.id === "panguard" && Qe();
			}));
		}), L(() => b.activeTool, (e) => {
			if (Qe(e), O && (e !== "edit" && Ae++, J(), q(), e !== "edit" && $({ restoreSource: !0 }), Q(Z() ? Bt() : void 0), Ln(), W(), e !== "edit" && e)) try {
				O.create(e);
			} catch (e) {
				console.warn("Unable to start draw sketch.", e);
			}
		}, { immediate: !0 }), L(() => b.shapeDetailsPickEnabled, () => {
			Qe();
		}), Se(() => {
			dn(), G !== null && (g.fixture.get("panguard")?.setEnabled(G), G = null), Vn(), H.forEach((e) => g.event.off(e));
		}), (e, t) => (Ce(), _e(he, null, [ve("arcgis-sketch", {
			ref_key: "sketchEl",
			ref: ue,
			style: { display: "none" }
		}, null, 512), De(b).measurementsEnabled ? (Ce(), _e("div", Je, Ee(De(Ue)), 1)) : ge("", !0)], 64));
	}
}), $e = "draw", K = (e) => `<svg class="rv-draw-help-icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${e}</svg>`, q = (e) => `<span class="rv-draw-help-mapnav-button">${e}</span>`, J = (e, t) => `<span class="rv-draw-help-action-button">${t}<span class="rv-draw-help-action-label">${e}</span></span>`, Y = {
	point: K("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\" />"),
	polyline: K("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 17l3-3 4 4 8-8\" stroke-width=\"2\" fill=\"none\" stroke=\"currentColor\" />"),
	polygon: K("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 6l6-3 6 3 6-3v12l-6 3-6-3-6 3z\" />"),
	rectangle: K("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" />"),
	circle: K("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" />"),
	info: K("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M11 10h2v7h-2v-7zm0-3h2v2h-2V7zm1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z\" fill=\"currentColor\" />"),
	settings: K("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.31-.6-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.05.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.22.37.31.6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.18-.58 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z\" />"),
	upload: K("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 20h14v-2H5v2zm14-7h-4v5H9v-5H5l7-7 7 7z\" fill=\"currentColor\" />"),
	download: K("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 20h14v-2H5v2zm14-9h-4V3H9v8H5l7 7 7-7z\" fill=\"currentColor\" />"),
	identify: K("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M10.5 4a6.5 6.5 0 0 1 5.18 10.43l4.45 4.44-1.42 1.42-4.44-4.45A6.5 6.5 0 1 1 10.5 4zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z\" fill=\"currentColor\" />"),
	copy: K("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M8 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v10h10V9H8z\" fill=\"currentColor\" /><path d=\"M4 15H2V5a3 3 0 0 1 3-3h10v2H5a1 1 0 0 0-1 1v10z\" fill=\"currentColor\" />"),
	delete: K("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z\" fill=\"currentColor\" />")
}, et = {
	en: `# Draw Tools

Draw tools add temporary shapes to the map. The available shape buttons depend on the viewer configuration.

### Drawing Shapes

Open the Draw tool group in the map navigation controls and choose one of the available shape buttons.

| Icon | Shape | How to draw |
|--|--|--|
| ${q(Y.point)} | Point | Select the point tool, then select the map once. |
| ${q(Y.polyline)} | Polyline | Select each vertex on the map, then double-click the final vertex to finish. |
| ${q(Y.polygon)} | Polygon | Select each boundary vertex on the map, then double-click the final vertex to close and finish the polygon. |
| ${q(Y.rectangle)} | Rectangle | Select-hold on the map, drag to size the rectangle, then release. |
| ${q(Y.circle)} | Circle | Select-hold on the map, drag to size the circle, then release. |

Press <kbd>Escape</kbd> to cancel the active drawing tool.

### Shape Inspector

After at least one shape exists, select the Shape Inspector information button ${q(Y.info)} in the Draw tool group. Select a shape on the map to open or update the Shape Inspector.

The Shape Inspector has three tabs:

- Details: view the shape type, measurements, feature counts, centroid, extent, segments, and vertices. Use ${J("Run Identify", Y.identify)} to refresh feature counts, ${J("Copy", Y.copy)} coordinate or segment values, or ${J("Export", Y.download)} the selected shape.
- Style: apply a preset or set the selected shape's fill colour, border colour, buffer colour, and opacity.
- Edit: move, resize, rotate, or reshape the selected shape using the map handles. Turn on editing aids for area labels, segment lengths, segment letters, or vertex numbers. This tab also contains the selected shape's buffer and identify options.

### Deleting Shapes

Open the Shape Inspector, select the Edit tab, then choose ${J("Delete", Y.delete)} and confirm the deletion. When a shape is selected and the map has focus, <kbd>Delete</kbd> or <kbd>Backspace</kbd> also removes the selected shape.

### Import and Export

Open Draw Defaults with the settings button ${q(Y.settings)} in the Draw tool group.

- ${J("Import", Y.upload)} opens a file picker for one or more draw shape JSON files.
- ${J("Export", Y.download)} in Draw Defaults downloads all current draw shapes.
- ${J("Export", Y.download)} in the Shape Inspector Details tab downloads only the selected shape.

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
| ${q(Y.point)} | Point | Sélectionnez l'outil de point, puis sélectionnez la carte une fois. |
| ${q(Y.polyline)} | Polyligne | Sélectionnez chaque sommet sur la carte, puis double-cliquez le dernier sommet pour terminer. |
| ${q(Y.polygon)} | Polygone | Sélectionnez chaque sommet de la limite sur la carte, puis double-cliquez le dernier sommet pour fermer et terminer le polygone. |
| ${q(Y.rectangle)} | Rectangle | Sélectionnez et maintenez sur la carte, faites glisser pour dimensionner le rectangle, puis relâchez. |
| ${q(Y.circle)} | Cercle | Sélectionnez et maintenez sur la carte, faites glisser pour dimensionner le cercle, puis relâchez. |

Appuyez sur <kbd>Échap</kbd> pour annuler l'outil de dessin actif.

### Inspecteur de forme

Lorsqu'au moins une forme existe, sélectionnez le bouton d'information de l'inspecteur de forme ${q(Y.info)} dans le groupe d'outils de dessin. Sélectionnez une forme sur la carte pour ouvrir ou mettre à jour l'inspecteur de forme.

L'inspecteur de forme contient trois onglets :

- Détails : affichez le type de forme, les mesures, les dénombrements d'entités, le centroïde, l'étendue, les segments et les sommets. Utilisez ${J("Exécuter l'identification", Y.identify)} pour actualiser les dénombrements d'entités, ${J("Copier", Y.copy)} des coordonnées ou des valeurs de segment, ou ${J("Exporter", Y.download)} la forme sélectionnée.
- Style : appliquez un préréglage ou définissez la couleur de remplissage, la couleur de bordure, la couleur du tampon et l'opacité de la forme sélectionnée.
- Modifier : déplacez, redimensionnez, faites pivoter ou remodelez la forme sélectionnée à l'aide des poignées sur la carte. Activez les aides de modification pour les étiquettes de superficie, les longueurs de segment, les lettres de segment ou les numéros de sommet. Cet onglet contient aussi les options de tampon et d'identification de la forme sélectionnée.

### Supprimer des formes

Ouvrez l'inspecteur de forme, sélectionnez l'onglet Modifier, puis choisissez ${J("Supprimer", Y.delete)} et confirmez la suppression. Lorsqu'une forme est sélectionnée et que la carte a le focus, <kbd>Supprimer</kbd> ou <kbd>Retour arrière</kbd> supprime aussi la forme sélectionnée.

### Importer et exporter

Ouvrez Valeurs par défaut du dessin avec le bouton des paramètres ${q(Y.settings)} dans le groupe d'outils de dessin.

- ${J("Importer", Y.upload)} ouvre un sélecteur de fichiers pour un ou plusieurs fichiers JSON de formes dessinées.
- ${J("Exporter", Y.download)} dans Valeurs par défaut du dessin télécharge toutes les formes dessinées actuelles.
- ${J("Exporter", Y.download)} dans l'onglet Détails de l'inspecteur de forme télécharge seulement la forme sélectionnée.

Les fichiers exportés comprennent la géométrie et les paramètres de dessin afin de pouvoir être importés plus tard dans le module de dessin.

### Valeurs par défaut du dessin

Le panneau Valeurs par défaut du dessin contrôle les paramètres des nouvelles formes. Il ne modifie pas les formes qui existent déjà sur la carte.

- Apparence : couleur de remplissage, couleur de bordure, couleur du tampon et opacité par défaut de la forme.
- Tampon : distance et unité du tampon par défaut.
- Utilisation du tampon d'identification : détermine si l'identification et les dénombrements d'entités utilisent la forme originale avec son tampon, la forme originale seulement ou le tampon seulement.

### Options de forme

Chaque forme sélectionnée peut avoir des options différentes des valeurs par défaut. Utilisez l'onglet Style de l'inspecteur de forme pour les couleurs et l'opacité. Utilisez l'onglet Modifier de l'inspecteur de forme pour la distance du tampon, l'unité du tampon, l'utilisation du tampon d'identification, les aides de modification et la suppression.`
}, tt = {
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
}, nt = class extends Re {
	unregisterIdentifyGeometryProvider;
	eventHandlers = [];
	destroyDrawComponent;
	registerHelpSection() {
		g(this.$vApp.$pinia).addDynamicSection({
			id: $e,
			markdown: et
		});
	}
	unregisterHelpSection() {
		g(this.$vApp.$pinia).removeDynamicSection($e);
	}
	resetShapeInspectionState() {
		let e = E(this.$vApp.$pinia);
		e.setShapeDetailsPickEnabled(!1), e.setShapeDetailsLabelsVisible(!1), e.setShapeDetailsLabelsUseSettings(!1), e.setShapeDetailsActiveTab("details"), e.clearMeasurementInteraction();
	}
	async init() {
		Object.entries(tt).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e)), this._parseConfig(this.config);
		let e = {};
		this.$iApi.panel.get("draw-settings") || (e[S] = {
			screens: { "draw-settings-screen": () => F(import("./draw-defaults-screen-Byo1aBlj.js")) },
			style: { width: "350px" },
			button: {
				tooltip: "draw.defaults.title",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.31-.6-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.05.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.22.37.31.6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.18-.58 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z\"/></svg>"
			},
			alertName: "draw.defaults.title"
		}), this.$iApi.panel.get("draw-shape-details") || (e[v] = {
			screens: { "draw-shape-details-screen": () => F(import("./shape-inspector-screen-C1wAIWRz.js")) },
			style: { width: "350px" },
			button: {
				tooltip: "draw.inspector.title",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M11 10h2v7h-2v-7zm0-3h2v2h-2V7zm1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z\"/></svg>"
			},
			alertName: "draw.inspector.title"
		}), this.$iApi.panel.get("draw-import") || (e[w] = {
			screens: { "draw-import-shape-screen": () => F(import("./import-shape-screen-D1oAIJXs.js")) },
			style: { width: "350px" },
			alertName: "draw.import.title"
		}), Object.keys(e).length && (this.$iApi.panel.register(e, { i18n: { messages: tt } }), this.handlePanelTeleports([
			S,
			v,
			w
		])), E(this.$vApp.$pinia).supportedTypes.forEach((e) => {
			let t = `${e.type}-icon`;
			this.$iApi.component(t, F(Ae(/* @__PURE__ */ Object.assign({
				"./icons/circle-icon.vue": () => import("./circle-icon-B5cowh_X.js"),
				"./icons/copy-icon.vue": () => import("./copy-icon-B40EsZcu.js").then((e) => e.n),
				"./icons/delete-icon.vue": () => import("./delete-icon-yHl5oxBI.js").then((e) => e.n),
				"./icons/download-icon.vue": () => import("./download-icon-DV7LbF-E.js").then((e) => e.n),
				"./icons/edit-icon.vue": () => import("./edit-icon-GcyhDuXB.js"),
				"./icons/identify-icon.vue": () => import("./identify-icon-D1O0y6k-.js").then((e) => e.n),
				"./icons/info-icon.vue": () => import("./info-icon-DVqwcwNm.js").then((e) => e.n),
				"./icons/measure-icon.vue": () => import("./measure-icon-TtVERd2e.js"),
				"./icons/point-icon.vue": () => import("./point-icon-BgRroKa9.js"),
				"./icons/polygon-icon.vue": () => import("./polygon-icon-G72ajNKZ.js"),
				"./icons/polyline-icon.vue": () => import("./polyline-icon-DvMDwwZJ.js"),
				"./icons/rectangle-icon.vue": () => import("./rectangle-icon-D4eNHILC.js"),
				"./icons/settings-icon.vue": () => import("./settings-icon-5SEJ2EbE.js").then((e) => e.n),
				"./icons/upload-icon.vue": () => import("./upload-icon-CL1kIw31.js").then((e) => e.n)
			}), `./icons/${e.type}-icon.vue`, 3)));
		}), this.destroyDrawComponent?.();
		let t = this.$vApp.$el.getElementsByClassName("inner-shell")[0], n = document.createElement("div");
		t.appendChild(n);
		let { destroy: r } = this.mount(Qe, {
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
			e.removeButton(S), e.removeButton(v), e.removeButton(w);
		}
		this.$iApi.panel.remove(S), this.$iApi.panel.remove(v), this.$iApi.panel.remove(w);
	}
};
//#endregion
export { nt as default };
