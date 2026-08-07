import { $ as e, B as t, G as n, V as r, it as i, lt as a, s as o } from "./main-J2UTKznz.js";
import { A as s, E as c, M as l, O as u, P as d, T as f, b as p, i as m, j as h, k as g, v as _, w as ee, y as v } from "./esri-vcEQ1sbb.js";
import { t as y } from "./store-CE7UzPRf.js";
import { S as b, a as x, b as S, c as C, d as w, f as T, g as te, h as ne, l as E, m as D, n as O, o as k, p as re, r as ie, s as A, t as ae, u as oe, x as se, y as ce } from "./store-rB8-tOpA.js";
import { a as le, i as j, n as M, o as N, t as ue } from "./shape-io-B97H4STD.js";
import { a as de, i as fe, l as pe, n as me, r as P, s as he, t as ge, u as _e } from "./measurement-utils-CLtwAXVq.js";
import { Fragment as ve, createCommentVNode as ye, createElementBlock as be, createElementVNode as xe, defineComponent as Se, inject as Ce, markRaw as we, nextTick as Te, onMounted as Ee, onUnmounted as De, openBlock as Oe, reactive as ke, ref as Ae, toDisplayString as je, toRaw as Me, unref as Ne, useTemplateRef as Pe, watch as F } from "vue";
import { useI18n as Fe } from "vue-i18n";
//#region \0rolldown_dynamic_import_helper.js
var I = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, Ie = "RampDrawGraphicsLayer", Le = "RampDrawEditGraphicsLayer", Re = "RampDrawHighlightGraphicsLayer", L = [
	{ type: "point" },
	{ type: "polyline" },
	{ type: "polygon" },
	{ type: "circle" },
	{ type: "rectangle" }
], ze = 5, Be = 15;
function Ve(e, t, n) {
	return e.type === "polygon" ? p.execute(e, t) : p.execute(e, n);
}
function R(e, t, n) {
	switch (n) {
		case "shape": return e;
		case "buffer-only": return D(e, t);
		default: return T(e, t) ?? e;
	}
}
function z(e, t, n) {
	return n === "shape" ? e : T(e, t) ?? e;
}
var He = class extends o {
	store;
	constructor(e, t) {
		super(e, t), this.store = ae(this.$vApp.$pinia), te();
	}
	_parseConfig(e) {
		if (!e) {
			this.store.setSupportedTypes(L);
			return;
		}
		if (e.types !== void 0) {
			let t = (e.types === null ? [] : e.types).filter((e) => e.enabled !== !1);
			this.store.setSupportedTypes(t);
		} else this.store.setSupportedTypes(L);
		e.defaultTool && this.store.setActiveTool(e.defaultTool);
	}
	get graphicsLayerId() {
		return Ie;
	}
	getShapeIds() {
		return this.store.graphics.map((e) => e.id);
	}
	async importShapes(e) {
		let t = N(typeof e == "string" || e instanceof URL ? await Ue(e) : e);
		if (Array.isArray(t)) return t.length && this.store.requestImportShapes(t), t.length;
		throw Error("Invalid draw shape payload.");
	}
	exportShapes(e) {
		return M(this.resolveExportGraphics(e));
	}
	downloadShapes(e, t) {
		let n = e && typeof e == "object" && !Array.isArray(e) ? e.fileName : void 0;
		return j(this.resolveExportGraphics(e), t ?? n);
	}
	suppressIdentify(e) {
		if (this.store.identifyGeometryGraphicId) return !1;
		let t = this.store.activeTool, n = t === null || t === "", r = t === "edit", i = t !== null && t !== "" && !r, a = this.$iApi.panel.opened.some((e) => e.id === A), o = this.store.shapeDetailsPickEnabled && n, s = o || a || r ? this.getHitDrawGraphic(e, !1) : void 0, c = s?.id ?? s?.attributes?.id;
		return (o || a) && c ? (this.store.selectGraphic(c), ie(this.$iApi, "details"), this.store.requestShapePanelFocus(), !0) : !c && a ? (this.$iApi.panel.close(A), this.store.setShapeDetailsPickEnabled(!1), !0) : !c && o ? !0 : !c && r ? (this.store.requestStopEditMode(), !0) : i || r;
	}
	getExportSelectionIds(e) {
		if (e !== void 0) {
			if (typeof e == "string") return [e];
			if (Array.isArray(e)) return e;
			if (!(!e || e.ids === void 0)) return Array.isArray(e.ids) ? e.ids : [e.ids];
		}
	}
	resolveExportGraphics(e) {
		let t = this.getExportSelectionIds(e), n = this.store.graphics;
		if (t === void 0) return [...n];
		let r = new Set(t);
		return n.filter((e) => {
			let t = le(e);
			return t ? r.has(t) : !1;
		});
	}
	getHitDrawGraphic(e, t = !0) {
		if (this.store.identifyGeometryGraphicId) return this.store.graphics.find((e) => e.id === this.store.identifyGeometryGraphicId);
		let n = e.mapPoint.toESRI(), r = e.input === "touch" ? Be : ze, i = this.$iApi.geo.query.makeClickBuffer(e.mapPoint, r).toESRI();
		return this.store.graphics.slice().reverse().find((e) => {
			let r = Me(e.geometry);
			if (!r) return !1;
			let a = ce(e.attributes), o = S(e.attributes);
			return Ve(t ? z(r, a, o) : r, n, i);
		});
	}
	getIdentifyGeometry(e) {
		let t = this.getHitDrawGraphic(e);
		if (!t?.geometry) return;
		let n = R(Me(t.geometry), ce(t.attributes), S(t.attributes));
		if (n) return this.$iApi.geo.geom.geomEsriToRamp(n, t.id ?? t.attributes?.id);
	}
	removeAll() {
		this.store.removeAll(), [
			Ie,
			Le,
			Re
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
			let t = e.type === i.EXTENT ? e.toPolygon() : e, n = this.$iApi.geo.geom.geomRampToEsri(t), r = {
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
					drawStyle: oe(this.store.styleSettings),
					drawBuffer: C(this.store.bufferSettings),
					drawIdentifyBufferMode: this.store.identifyBufferMode,
					drawMapLabels: w()
				}
			};
		});
		await this.importShapes(t);
	}
	exportRampGeometry() {
		return this.store.graphics.map((e) => {
			let t = ue(e);
			if (!t.geometry) return;
			let n;
			switch (t.type) {
				case "point":
				case "polyline":
				case "multipoint":
				case "polygon":
					n = t.type;
					break;
				case "rectangle":
				case "circle":
					n = "polygon";
					break;
				default:
					console.error(`Encountered unhandled drawing type ${t.type}`);
					return;
			}
			let r = t.geometry;
			return r.type = n, r.spatialReference = new l(r.spatialReference), this.$iApi.geo.geom.geomEsriToRamp(r, e.id);
		}).filter((e) => !!e);
	}
};
async function Ue(e) {
	let t = await fetch(e);
	if (!t.ok) throw Error(`Unable to import draw shapes from ${e.toString()}.`);
	return t.json();
}
//#endregion
//#region src/fixtures/draw/use-draw-identify.ts
var We = ({ iApi: t, drawStore: n, getDrawGraphicId: r, getGraphicDrawBufferSettings: i, getGraphicDrawIdentifyBufferMode: a, getSelectedFeatureCountGraphic: o }) => {
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
	}, f = async (e = o()) => {
		let t = r(e), c = Me(e?.geometry);
		if (!e || !t || !c) return;
		let l = (s.get(t) ?? 0) + 1;
		s.set(t, l), n.setShapeFeatureCountsLoading(t);
		try {
			if (await te(), s.get(t) !== l) return;
			let r = i(e), o = a(e), u = r.distance > 0 ? D(c, r) : void 0, f = o === "shape" ? c : o === "buffer-only" ? u : r.distance > 0 ? T(c, r) : c, p = d(c), m = u ? d(u) : Promise.resolve(null), h = f === c ? p : f === u ? m : d(f), [g, _, ee] = await Promise.all([
				p,
				m,
				h
			]);
			if (s.get(t) !== l) return;
			n.setShapeFeatureCounts(t, {
				shape: g,
				buffer: _,
				total: ee,
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
	}, p = () => {
		c !== null && (window.clearTimeout(c), c = null), l = void 0;
	}, h = (e) => {
		e && s.delete(e);
	}, g = (e) => {
		l = e, c !== null && window.clearTimeout(c), c = window.setTimeout(() => {
			c = null;
			let e = l;
			l = void 0, e && f(e);
		}, 350);
	}, _ = (e) => {
		if (!e) return;
		if (e.type === "point") return e;
		if (e.type === "polygon") try {
			let t = m(e);
			if (t) return t;
		} catch {}
		let t = e.extent;
		if (t) return new ee({
			x: (t.xmin + t.xmax) / 2,
			y: (t.ymin + t.ymax) / 2,
			spatialReference: e.spatialReference
		});
	};
	return {
		refreshSelectedGraphicFeatureCounts: f,
		cancelPendingFeatureCountRefresh: p,
		cancelFeatureCountRunsForGraphic: h,
		scheduleFeatureCountRefresh: g,
		runIdentifyForSelectedGraphic: async () => {
			let i = o(), a = r(i), s = Me(i?.geometry), c = _(s);
			if (!(!a || !c)) {
				await f(i), n.setIdentifyGeometryGraphicId(a);
				try {
					t.geo.map.runIdentify(e.fromESRI(c, a));
				} finally {
					n.setIdentifyGeometryGraphicId(null);
				}
			}
		}
	};
}, B = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], Ge = 10, Ke = 1.05, V = .95, qe = .05, Je = ({ iApi: e, drawStore: t, t: n, translateTerm: r, getSketch: i, getGraphicsLayer: a, getSelectedGraphic: o, getKeyboardEditGraphic: s, setSelectedGraphic: l, prepareDrawGraphic: d, applyDrawSymbol: p, syncBufferGraphic: m, syncGraphicStoreRecord: h, syncActiveSketchEditToSource: _, highlightSelectedGraphic: y, deleteSelectedGraphic: b, startSketchUpdate: x, cancelPendingSketchUpdate: S, clearActiveSketchEdit: C, refreshMeasurementGraphics: w, scheduleMeasurementRefresh: T, cancelPendingFeatureCountRefresh: te, refreshSelectedGraphicFeatureCounts: ne }) => {
	let E = !1, D = null, O = [], k = () => {
		E = !1, D = null, O = [];
	}, re = () => {
		let n = e.geo.map.esriView;
		D && (t.activeTool === "polyline" ? D.geometry = new c({
			paths: [O],
			spatialReference: n.spatialReference
		}) : D.geometry = new f({
			rings: [O],
			spatialReference: n.spatialReference
		}));
	}, ie = () => {
		let n = i(), r = e.geo.map.esriView;
		return t.activeTool === "polyline" ? new v({
			geometry: new c({
				paths: [O],
				spatialReference: r.spatialReference
			}),
			symbol: n?.polylineSymbol || new g({
				color: [
					0,
					0,
					255,
					1
				],
				width: 2
			})
		}) : new v({
			geometry: new f({
				rings: [O],
				spatialReference: r.spatialReference
			}),
			symbol: n?.polygonSymbol || new u({
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
	}, A = () => {
		let i = e.geo.map.esriView, o = t.activeTool ?? void 0, s = {
			x: Math.floor(i.width / 2),
			y: Math.floor(i.height / 2)
		}, c = i.toMap(s);
		if (!E) {
			E = !0, O = [[c.x, c.y]], D = ie(), D.attributes = {
				id: `temp-graphic-${Date.now()}`,
				type: t.activeTool
			}, a()?.add(D), w(D, o), e.updateAlert(n("draw.multiPoint.started", {
				type: r(o),
				count: 1
			}));
			return;
		}
		O.push([c.x, c.y]), re(), w(D, o), e.updateAlert(n("draw.multiPoint.pointAdded", {
			type: r(o),
			count: O.length
		}));
	}, ae = async () => {
		let o = a(), s = i();
		if (!o || !s || t.activeTool !== "edit") return;
		await e.geo.map.viewPromise;
		let c = e.geo.map.esriView, u = {
			x: c.width / 2,
			y: c.height / 2
		}, d = {
			x: u.x,
			y: u.y,
			width: 20,
			height: 20
		}, f = (await c.hitTest(d, { include: o })).results.filter((e) => !("graphic" in e) || e.graphic.layer !== o ? !1 : !!e.graphic.attributes?.id);
		f.length > 0 ? (x(f[0].graphic), e.updateAlert(n("draw.graphic.selected", { type: r(f[0].graphic.attributes?.type) }))) : (S(), s.cancel(), C({ restoreSource: !0 }), l(null), t.clearSelection());
	}, oe = async () => {
		let o = i(), s = t.activeTool;
		if (!o || !s) return;
		await e.geo.map.viewPromise;
		let l = e.geo.map.esriView, p = {
			x: Math.floor(l.width / 2),
			y: Math.floor(l.height / 2)
		}, h = l.toMap(p), g = l.extent, _ = Math.min(g.width, g.height) / 10, y;
		switch (s) {
			case "point":
				y = new v({
					geometry: new ee({
						x: h.x,
						y: h.y,
						spatialReference: l.spatialReference
					}),
					symbol: o.pointSymbol
				});
				break;
			case "polyline":
				y = new v({
					geometry: new c({
						paths: [[[h.x - _ / 2, h.y], [h.x + _ / 2, h.y]]],
						spatialReference: l.spatialReference
					}),
					symbol: o.polylineSymbol
				});
				break;
			case "polygon":
			case "rectangle":
				let e = _ / 2;
				y = new v({
					geometry: new f({
						rings: [[
							[h.x - e, h.y - e],
							[h.x + e, h.y - e],
							[h.x + e, h.y + e],
							[h.x - e, h.y + e],
							[h.x - e, h.y - e]
						]],
						spatialReference: l.spatialReference
					}),
					symbol: o.polygonSymbol || new u({
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
				y = new v({
					geometry: new f({
						rings: [n],
						spatialReference: l.spatialReference
					}),
					symbol: o.polygonSymbol || new u({
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
		if (!y) return;
		let b = d(y, s);
		a()?.add(y), m(y), t.addGraphic({
			id: b,
			type: s,
			geometry: y.geometry,
			attributes: y.attributes
		}), w(), s !== "point" && (t.clearSelection(), t.setActiveTool(""), e.keyboardNav?.reset(), o.cancel()), e.updateAlert(n("draw.graphic.created", { type: r(s) }));
	}, se = () => {
		let i = t.activeTool ?? void 0;
		O.pop(), re(), D.set("geometry", D?.geometry), w(D, i), e.updateAlert(n("draw.multiPoint.pointRemoved", {
			type: r(i),
			count: O.length
		}));
	}, ce = () => {
		D && a()?.remove(D), k(), w(), e.updateAlert(n("draw.multiPoint.canceled"));
	}, le = (r) => {
		let a = e.geo.map.esriView?.container;
		if (!(!document.activeElement || !a?.contains(document.activeElement))) switch (r.key) {
			case "Enter":
				r.preventDefault(), t.activeTool && t.activeTool !== "edit" ? (t.activeTool === "polyline" || t.activeTool === "polygon") && (E || O.length === 0) ? A() : oe() : ae();
				break;
			case "Delete":
			case "Backspace":
				E && O.length > 1 ? (r.preventDefault(), se()) : E && O.length === 1 ? (r.preventDefault(), ce()) : o() && (r.preventDefault(), b());
				break;
			case "Escape":
				t.setActiveTool(null), i()?.cancel(), l(null), y(void 0), t.clearSelection(), w(), e.updateAlert(n("draw.tool.canceled"));
				break;
		}
	}, j = (e) => {
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
	}, M = (t, n, r) => {
		let i = e.geo.map.esriView, a = 0, o = 0;
		t === "ArrowLeft" && (a = -10), t === "ArrowRight" && (a = Ge), t === "ArrowUp" && (o = -10), t === "ArrowDown" && (o = Ge);
		let s = i.toScreen(new ee({
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
	}, N = (e) => e === "ArrowUp" || e === "ArrowRight" ? Ke : V, ue = (e) => e === "ArrowLeft" ? -.05 : e === "ArrowRight" ? qe : 0, de = (e, t, n) => e.map(([e, r]) => [e + t, r + n]), fe = (e, t, n) => e.map(([e, r]) => [t.x + (e - t.x) * n, t.y + (r - t.y) * n]), pe = (e, t, n) => {
		let r = Math.cos(n), i = Math.sin(n);
		return e.map(([e, n]) => {
			let a = e - t.x, o = n - t.y, s = a * r - o * i, c = a * i + o * r;
			return [t.x + s, t.y + c];
		});
	}, me = (e, t) => e.map((e) => t(e)), P = (t, r, i, a) => {
		let o = j(t), s = M(r, o, t.spatialReference);
		if (t.type === "point") {
			if (!i && !a) {
				let e = t;
				return new ee({
					x: e.x + s.x,
					y: e.y + s.y,
					spatialReference: t.spatialReference
				});
			}
			return e.updateAlert(n(i ? "draw.point.resize.unsupported" : "draw.point.rotate.unsupported")), t.clone();
		}
		if (t.type === "polyline") {
			let e = t.paths;
			if (!i && !a) return new c({
				paths: me(e, (e) => de(e, s.x, s.y)),
				spatialReference: t.spatialReference
			});
			if (i) return new c({
				paths: me(e, (e) => fe(e, o, N(r))),
				spatialReference: t.spatialReference
			});
			let n = ue(r);
			return n === 0 ? t.clone() : new c({
				paths: me(e, (e) => pe(e, o, n)),
				spatialReference: t.spatialReference
			});
		}
		if (t.type === "polygon") {
			let e = t.rings;
			if (!i && !a) return new f({
				rings: me(e, (e) => de(e, s.x, s.y)),
				spatialReference: t.spatialReference
			});
			if (i) return new f({
				rings: me(e, (e) => fe(e, o, N(r))),
				spatialReference: t.spatialReference
			});
			let n = ue(r);
			return n === 0 ? t.clone() : new f({
				rings: me(e, (e) => pe(e, o, n)),
				spatialReference: t.spatialReference
			});
		}
	};
	return {
		handleNavigationKeyDown: le,
		handleGraphicKeyboardEdit: (r) => {
			let i = e.geo.map.esriView.container;
			if (!document.activeElement || !i?.contains(document.activeElement) || !B.includes(r.key) || t.activeTool !== "edit" || t.shapeDetailsActiveTab !== "edit") return;
			let a = s() ?? o();
			if (!a) return;
			r.preventDefault(), r.stopPropagation();
			let c = r.shiftKey, l = r.altKey, u = P(a.geometry, r.key, c, l);
			if (!u) return;
			a.geometry = u, a.set("geometry", u), p(a);
			let d = _() ?? a;
			d === a && (m(a), h(a)), y(d), T(d, d.attributes?.type), te(), ne(d);
			let f = c ? "resized" : l ? "rotated" : "moved";
			e.updateAlert(n(`draw.graphic.${f}`));
		},
		resetMultiPointState: k
	};
}, H = 16, Ye = 2, Xe = 8, Ze = 8, Qe = 2, U = "#1d4ed8", W = 30, $e = ({ iApi: e, drawStore: t, locale: n, t: i, getGraphicsLayer: a, isShapeDetailsOpen: o, getShapeDetailsGraphic: c }) => {
	let l = null, u = 0, f = 0, p = [], m = null, h = null, g = null, _ = null, y = null, b = null, x = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), C = [], w = [], T = [], te = Ae(""), ne = () => t.graphics.some((e) => {
		let n = String(e.id ?? e.attributes?.id ?? ""), r = se(e.attributes), i = D(n) && t.shapeDetailsLabelsVisible;
		return r.areaLabel || r.segmentLength || r.segmentLetters || r.vertexNumbers || i;
	}), E = () => t.measurementsEnabled || o() || ne(), D = (e) => o() && t.selectedGraphicId === e, O = () => o() && t.shapeDetailsActiveTab === "details" && !!t.selectedGraphicId, k = (e) => {
		let n = pe(e);
		return !!n && n.graphicId === t.selectedGraphicId;
	}, re = (e) => O() && k(e) && e === t.activeSegmentKey, ie = (e) => O() && k(e) && e === t.activeVertexKey, A = (e) => new s({
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
	}), ae = (e, t) => new d({
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
	}), oe = (e, t, n, r) => [new v({
		geometry: e,
		symbol: A(r),
		attributes: {
			...n,
			drawMeasurementKind: "vertex-marker"
		}
	}), new v({
		geometry: e,
		symbol: ae(t, r),
		attributes: {
			...n,
			drawMeasurementKind: "vertex-label",
			drawMeasurementText: t
		}
	})], ce = (e, t) => new ee({
		x: e[0],
		y: e[1],
		spatialReference: t
	}), le = (e) => !!e && Number.isFinite(e.x) && Number.isFinite(e.y), j = (e, t) => Math.hypot(t.x - e.x, t.y - e.y), M = (e) => {
		let t = Math.hypot(e.x, e.y);
		if (!(!Number.isFinite(t) || t <= 0)) return {
			x: e.x / t,
			y: e.y / t
		};
	}, N = (e) => {
		let t = e;
		for (; t > 180;) t -= 360;
		for (; t < -180;) t += 360;
		return t > 90 && (t -= 180), t < -90 && (t += 180), t;
	}, ue = (e) => {
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
					let t = e[a], s = e[a + 1], c = (r - i) / o, l = M({
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
	}, ve = (e, t, n) => {
		let r = n.toScreen(new ee({
			x: e[0],
			y: e[1],
			spatialReference: t
		}));
		return le(r) ? {
			x: r.x,
			y: r.y
		} : void 0;
	}, ye = (e) => e.length > 1 && e[0][0] === e[e.length - 1][0] && e[0][1] === e[e.length - 1][1] ? e.slice(0, -1) : e, be = (e, t) => {
		let n = e.rings, r = 0, i = 0, a = 0, o = [];
		if (n.forEach((n) => {
			let s = ye(n).map((n) => ve(n, e.spatialReference, t)).filter((e) => !!e);
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
	}, xe = (e, t) => {
		let n = e.paths.flatMap((e) => e).map((n) => ve(n, e.spatialReference, t)).filter((e) => !!e);
		if (n.length) return {
			x: n.reduce((e, t) => e + t.x, 0) / n.length,
			y: n.reduce((e, t) => e + t.y, 0) / n.length
		};
	}, Se = (e, t) => {
		if (e.type === "polygon") return be(e, t);
		if (e.type === "polyline") return xe(e, t);
	}, Ce = (e, t) => {
		let n = e.spatialReference, r = [], i = (e, i) => {
			let a = i ? ye(e) : e;
			a.forEach((e) => {
				let i = ve(e, n, t);
				i && r.push(i);
			});
			let o = i ? a.length : a.length - 1;
			for (let e = 0; e < o; e++) {
				let i = a[e], o = a[(e + 1) % a.length], s = ve([(i[0] + o[0]) / 2, (i[1] + o[1]) / 2], n, t);
				s && r.push(s);
			}
		};
		return e.type === "polyline" && e.paths.forEach((e) => i(e, !1)), e.type === "polygon" && e.rings.forEach((e) => i(e, !0)), r;
	}, we = (e, t) => {
		let n = [e.start, e.end].map((n) => ve(n, e.geometry.spatialReference, t)).filter((e) => !!e), r = ue(n);
		if (!r) return;
		let i = {
			x: -r.tangent.y,
			y: r.tangent.x
		};
		if (e.geometry.type === "polygon" || e.geometry.type === "polyline") {
			let n = Se(e.geometry, t);
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
			angle: N(a * 180 / Math.PI)
		};
	}, Te = (e, t, n, r) => {
		let i = H / 2;
		return Ce(e.geometry, r).reduce((e, r) => {
			let a = {
				x: r.x - t.midpoint.x,
				y: r.y - t.midpoint.y
			};
			if (a.x * n.x + a.y * n.y <= i) return e;
			let o = Math.hypot(a.x, a.y);
			return !Number.isFinite(o) || o <= i ? e : e + 100 / Math.max(o, Ze);
		}, 0);
	}, Ee = (e, t, n) => {
		let r = {
			x: -t.normal.x,
			y: -t.normal.y
		}, i = (r) => ({
			anchor: {
				x: t.midpoint.x + r.x * H,
				y: t.midpoint.y + r.y * H
			},
			angle: t.angle,
			sideCrowdingScore: Te(e, t, r, n)
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
	}, e.width, e.height), je = (e, t) => Oe(t.anchor, e.offsetWidth || e.getBoundingClientRect().width, e.offsetHeight || e.getBoundingClientRect().height, t.angle), Ne = (e, t) => e.corners.reduce((e, n) => {
		let r = n.x * t.x + n.y * t.y;
		return {
			min: Math.min(e.min, r),
			max: Math.max(e.max, r)
		};
	}, {
		min: Infinity,
		max: -Infinity
	}), Pe = (e, t, n = 0) => [...e.axes, ...t.axes].every((r) => {
		let i = Ne(e, r), a = Ne(t, r);
		return !(i.max + n <= a.min || a.max + n <= i.min);
	}), Fe = (e, t) => e.corners.every((e) => e.x >= 0 && e.y >= 0 && e.x <= t.width && e.y <= t.height), I = (e) => {
		let t = window.getComputedStyle(e), n = e.getBoundingClientRect();
		return t.display !== "none" && t.visibility !== "hidden" && t.opacity !== "0" && n.width > 0 && n.height > 0;
	}, Ie = (e, t) => {
		let n = e.container;
		return n ? Array.from(n.querySelectorAll([
			".esri-ui .esri-component",
			".esri-popup",
			".esri-attribution",
			"arcgis-sketch",
			"[class*=\"esri-sketch\"]"
		].join(","))).filter((e) => !!y && !y.contains(e)).filter(I).map((e) => De(e.getBoundingClientRect(), t)).filter((e) => !!e).filter((e) => e.width < t.width * .85 || e.height < t.height * .85).map(ke) : [];
	}, Le = (e) => e.graphics.find((e) => {
		let t = e.attributes, n = e.geometry;
		return !!t && !!n && n.type === "point" && (t.drawMeasurementKind === "vertex-marker" || t.drawMeasurementKind === "vertex-label");
	})?.geometry, Re = (e, t) => {
		let n = Le(e);
		if (!n) return;
		let r = t.toScreen(n);
		if (le(r)) return Oe(r, W, W);
	}, L = (e, t) => {
		let n = [];
		return e.filter((e) => {
			let r = Re(e, t);
			return r ? n.some((e) => Pe(r, e, Ye)) ? !1 : (n.push(r), !0) : !0;
		});
	}, ze = (e) => {
		let t = /* @__PURE__ */ new Set(), n = [];
		return p.forEach((r) => {
			let i = r.attributes, a = r.geometry;
			if (!i || !a || a.type !== "point") return;
			let o = e.toScreen(a);
			if (le(o) && (i.drawMeasurementKind === "vertex-marker" || i.drawMeasurementKind === "vertex-label")) {
				let e = i.drawVertexKey ?? `${o.x}:${o.y}`;
				if (t.has(e)) return;
				t.add(e), n.push(Oe(o, W, W));
			}
		}), n;
	}, Be = (e, t) => [...ze(e), ...Ie(e, t)], Ve = (e) => {
		let t = e.container;
		if (t) return y?.parentElement === t ? y : (y?.remove(), y = document.createElement("div"), y.className = "rv-draw-segment-label-overlay", y.setAttribute("aria-hidden", "true"), t.appendChild(y), x = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), y);
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
	}, He = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-distance");
		n && (n.textContent = t.text), e.dataset.areaLabelKey = t.key;
	}, Ue = (e) => {
		let t = document.createElement("div");
		t.className = "rv-draw-segment-label rv-draw-area-label rv-no-badge", t.style.visibility = "hidden", t.style.left = "0px", t.style.top = "0px";
		let n = document.createElement("span");
		return n.className = "rv-draw-segment-label-distance", t.appendChild(n), He(t, e), t;
	}, We = (e, t) => {
		let n = e.querySelector(".rv-draw-segment-label-distance");
		e.classList.toggle("rv-distance-hidden", t), n && (n.hidden = t);
	}, B = (e, t) => {
		e.style.left = `${t.anchor.x}px`, e.style.top = `${t.anchor.y}px`, e.style.transform = `translate(-50%, -50%) rotate(${t.angle}deg)`, e.style.transformOrigin = "center center";
	}, Ge = (e, t, n) => Fe(e, t) ? !n.some((t) => Pe(e, t, Ye)) : !1, Ke = (e, t, n, r) => Ge(e, t, r) && !n.some((t) => Pe(e, t, Ye)), V = (e, t, n, r, i, a) => {
		if (Ke(e, t, i, a)) return n.sideCrowdingScore + r * .01;
	}, qe = (e, t, n, r, i, a) => {
		let o, s = [...r, ...i];
		return t.forEach((t, r) => {
			B(e, t);
			let i = je(e, t), c = V(i, n, t, r, s, a);
			c !== void 0 && (!o || c < o.score) && (o = {
				candidate: t,
				box: i,
				score: c
			});
		}), o;
	}, Je = () => {
		x.forEach((e, t) => {
			e.classList.toggle("rv-active", re(t));
		});
	}, $e = () => {
		b !== null && (window.cancelAnimationFrame(b), b = null), C = [], w = [], y?.remove(), y = null, x.clear(), S.clear();
	}, et = (t, n = w) => {
		let r = e.geo.map.esriView;
		if (C = t, w = n, !r || !t.length && !n.length) {
			$e();
			return;
		}
		let i = Ve(r), a = r.container;
		if (!i || !a) {
			$e();
			return;
		}
		let o = new Set(t.map((e) => e.key));
		x.forEach((e, t) => {
			o.has(t) || (e.remove(), x.delete(t));
		}), t.forEach((e) => {
			let t = x.get(e.key);
			t ? R(t, e) : (t = z(e), x.set(e.key, t), i.appendChild(t)), t.style.display = "inline-flex", t.style.visibility = "hidden", t.style.transform = "translate(-50%, -50%) rotate(0deg)", We(t, !e.distanceText);
		});
		let s = new Set(n.map((e) => e.key));
		S.forEach((e, t) => {
			s.has(t) || (e.remove(), S.delete(t));
		}), n.forEach((e) => {
			let t = S.get(e.key);
			t ? He(t, e) : (t = Ue(e), S.set(e.key, t), i.appendChild(t)), t.style.display = "inline-flex", t.style.visibility = "hidden", t.style.transform = "translate(-50%, -50%) rotate(0deg)";
		});
		let c = a.getBoundingClientRect(), l = Be(r, c), u = [], d = [];
		n.forEach((e) => {
			let t = S.get(e.key);
			if (!t) return;
			let n = r.toScreen(e.point);
			if (!le(n)) {
				t.style.display = "none";
				return;
			}
			B(t, {
				anchor: {
					x: n.x,
					y: n.y
				},
				angle: 0
			});
			let i = je(t, {
				anchor: {
					x: n.x,
					y: n.y
				},
				angle: 0
			});
			if (!Ke(i, c, u, l)) {
				t.style.display = "none";
				return;
			}
			u.push(i), t.style.visibility = "visible";
		});
		let f = [], p = [];
		t.forEach((e) => {
			let t = x.get(e.key);
			if (!t) return;
			let n = we(e, r);
			if (!n || n.length < Ze) {
				t.style.display = "none";
				return;
			}
			let i = t.offsetWidth, a = !!e.distanceText && n.length >= i + Qe;
			if (We(t, !a), !a && !e.showBadge) {
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
			let t = Ee(e.label, e.placement, r), n = qe(e.element, t, c, u, d, l);
			return n ? (B(e.element, n.candidate), d.push(n.box), e.element.style.visibility = "visible", !0) : !1;
		};
		f.forEach((e) => {
			m(e) || (e.label.showBadge ? (We(e.element, !0), p.push(e)) : e.element.style.display = "none");
		}), p.forEach((e) => {
			m(e) || (e.element.style.display = "none");
		}), Je();
	}, tt = () => {
		b === null && (b = window.requestAnimationFrame(() => {
			b = null, et(C, w);
		}));
	}, nt = () => {
		if (T.length) return;
		let t = () => tt();
		T = [e.event.on(r.MAP_EXTENTCHANGE, t), e.event.on(r.RAMP_MOBILEVIEW_CHANGE, t)];
	}, rt = () => {
		T.forEach((t) => e.event.off(t)), T = [];
	}, it = (t) => {
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
	}, at = (t) => {
		if (Number.isFinite(t.x) && Number.isFinite(t.y)) return {
			x: t.x,
			y: t.y
		};
		let n = it(t), r = e.geo.map.esriView?.container;
		if (!n || !r) return;
		let i = r.getBoundingClientRect();
		return {
			x: n.x - i.left,
			y: n.y - i.top
		};
	}, G = (e) => {
		let t = it(e);
		if (t) for (let [e, n] of x) {
			if (!I(n)) continue;
			let r = n.getBoundingClientRect();
			if (t.x >= r.left && t.x <= r.right && t.y >= r.top && t.y <= r.bottom) return e;
		}
	}, K = (e, t, n) => {
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
	}, q = (t) => {
		let n = e.geo.map.esriView, r = at(t);
		if (!n || !r) return;
		let i;
		return C.forEach((e) => {
			let t = ve(e.start, e.geometry.spatialReference, n), a = ve(e.end, e.geometry.spatialReference, n);
			if (!t || !a) return;
			let o = K(r, t, a);
			o <= Xe && (!i || o < i.distance) && (i = {
				key: e.key,
				distance: o
			});
		}), i?.key;
	}, J = (e) => {
		if (e.type === "circle" || !e.includeDistance && !e.includeSegmentBadges) return [];
		let t = e.geometry;
		return ge(t, e.id).map((r) => {
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
	}, ot = (e) => e.type === "circle" || e.geometry.type !== "polyline" && e.geometry.type !== "polygon" ? [] : me(e.geometry, e.id).map((t) => {
		let n = ie(t.key), r = ce(t.vertex, e.geometry.spatialReference);
		return { graphics: oe(r, String(t.index + 1), {
			drawMeasurement: !0,
			drawMeasurementKind: "vertex-label",
			drawGraphicId: e.id,
			drawVertexKey: t.key
		}, n) };
	}), st = (e) => {
		let t = e.geometry;
		if (t.type !== "polygon") return;
		let r = t, a = he(r), o = _e(r);
		if (!a || a < .01 || !o) return;
		let s = fe(a, n.value, i);
		return {
			graphics: [],
			areaLabels: [{
				key: `${e.id}:area`,
				text: s.display,
				point: o
			}],
			accessibleText: i("draw.measurements.area", { area: s.spoken })
		};
	}, ct = (e) => {
		let t = e.geometry;
		if (!t || t.type === "point" || t.type === "multipoint") return [];
		let n = [...J(e), ...e.includeVertices ? ot(e) : []], r = e.includeArea ? st(e) : void 0;
		return r && n.push(r), n;
	}, lt = (e) => e?.attributes?.id, ut = (e, t, n, r) => {
		if (n) return {
			id: e,
			type: t ?? n.type,
			geometry: n,
			...r
		};
	}, Y = (e, t) => {
		if (!t) return;
		let n = e.get(t.id);
		if (!n) {
			e.set(t.id, t);
			return;
		}
		n.geometry = t.geometry, n.type = t.type, n.includeDistance ||= t.includeDistance, n.includeSegmentBadges ||= t.includeSegmentBadges, n.includeVertices ||= t.includeVertices, n.includeArea ||= t.includeArea, n.badgeColor = t.badgeColor || n.badgeColor;
	}, dt = () => t.graphics.map((e) => {
		let n = String(e.id ?? e.attributes?.id ?? ""), r = se(e.attributes), i = D(n) && t.shapeDetailsLabelsVisible, a = i || r.segmentLength, o = i || r.segmentLetters, s = i || r.vertexNumbers;
		return ut(n, e.type ?? e.attributes?.type, Me(e.geometry), {
			includeDistance: t.measurementsEnabled || a,
			includeSegmentBadges: o,
			includeVertices: s,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: U
		});
	}).filter((e) => !!e?.id), ft = () => (a()?.graphics.toArray() ?? []).filter((e) => !!lt(e)).map((e) => {
		let n = lt(e), r = se(e.attributes), i = D(n) && t.shapeDetailsLabelsVisible, a = i || r.segmentLength, o = i || r.segmentLetters, s = i || r.vertexNumbers;
		return ut(n, e.attributes?.type, e.geometry, {
			includeDistance: t.measurementsEnabled || a,
			includeSegmentBadges: o,
			includeVertices: s,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: U
		});
	}).filter((e) => !!e), pt = (e, n) => {
		if (!e) return;
		let r = se(e.attributes), i = lt(e), a = !!i && D(i) && t.shapeDetailsLabelsVisible, o = a || r.segmentLength, s = a || r.segmentLetters, c = a || r.vertexNumbers;
		return ut(i ?? "active-draw-measurement", n ?? e.attributes?.type, e.geometry, {
			includeDistance: t.measurementsEnabled || o,
			includeSegmentBadges: s,
			includeVertices: c,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: U
		});
	}, mt = () => {
		if (!o() || !t.shapeDetailsLabelsVisible && !t.shapeDetailsLabelsUseSettings) return;
		let e = c() ?? t.getSelectedGraphic(), n = lt(e) ?? String(e?.id ?? "");
		if (!n) return;
		let r = se(e?.attributes), i = t.shapeDetailsLabelsVisible || r.segmentLength, a = t.shapeDetailsLabelsVisible || r.segmentLetters, s = t.shapeDetailsLabelsVisible || r.vertexNumbers;
		return ut(n, e?.attributes?.type ?? e?.type, Me(e?.geometry), {
			includeDistance: t.measurementsEnabled || i,
			includeSegmentBadges: a,
			includeVertices: s,
			includeArea: t.measurementsEnabled || r.areaLabel,
			badgeColor: U
		});
	}, ht = (e, n) => {
		let r = /* @__PURE__ */ new Map();
		return (t.measurementsEnabled || ne()) && (dt().forEach((e) => Y(r, e)), ft().forEach((e) => Y(r, e)), Y(r, pt(e, n))), Y(r, mt()), Array.from(r.values()).flatMap((e) => ct(e));
	}, gt = () => {
		t.setHoveredSegmentKey(null), t.setHoveredVertexKey(null);
	}, _t = () => {
		h?.remove(), h = null, g?.remove(), g = null, _ && e.geo.map.esriView?.container && e.geo.map.esriView.container.removeEventListener("mouseleave", _), _ = null, gt();
	}, vt = async (t) => {
		let n = e.geo.map.esriView;
		return !n || !p.length ? null : (await n.hitTest(t, { include: p })).results.find((e) => "graphic" in e && !!e.graphic.attributes?.drawMeasurement)?.graphic ?? null;
	}, yt = async (e) => {
		if (!O()) {
			gt();
			return;
		}
		let n = ++f, r = G(e) ?? q(e);
		if (r) {
			t.setHoveredSegmentKey(k(r) ? r : null), t.setHoveredVertexKey(null);
			return;
		}
		let i = await vt(e);
		if (n !== f) return;
		let a = i?.attributes;
		t.setHoveredSegmentKey(k(a?.drawSegmentKey) ? a.drawSegmentKey : null), t.setHoveredVertexKey(k(a?.drawVertexKey) ? a.drawVertexKey : null);
	}, bt = async (e) => {
		if (!O()) return;
		let n = G(e) ?? q(e);
		if (n) {
			if (!k(n)) return;
			t.setSelectedSegmentKey(n), t.setSelectedVertexKey(null), e.stopPropagation?.();
			return;
		}
		let r = (await vt(e))?.attributes, i = r?.drawSegmentKey, a = r?.drawVertexKey;
		if (k(i)) t.setSelectedSegmentKey(i), t.setSelectedVertexKey(null);
		else if (k(a)) t.setSelectedVertexKey(a), t.setSelectedSegmentKey(null);
		else return;
		e.stopPropagation?.();
	}, xt = () => {
		let t = e.geo.map.esriView;
		!t || h || g || (h = t.on("pointer-move", (e) => {
			yt(e);
		}), g = t.on("click", (e) => {
			bt(e);
		}), _ = gt, t.container?.addEventListener("mouseleave", _));
	}, St = () => {
		Je(), p.forEach((e) => {
			let t = e.attributes;
			if (t) {
				if (t.drawMeasurementKind === "vertex-marker") {
					e.symbol = A(ie(t.drawVertexKey));
					return;
				}
				t.drawMeasurementKind === "vertex-label" && (e.symbol = ae(t.drawMeasurementText ?? "", ie(t.drawVertexKey)));
			}
		});
	}, Ct = () => {
		u++, l !== null && (window.cancelAnimationFrame(l), l = null), m = null, te.value = "", _t(), rt(), $e();
		try {
			e.geo.map.esriView?.graphics.removeMany(p);
		} catch (e) {
			console.warn("Unable to clear draw measurement graphics.", e);
		}
		p = [];
	}, wt = (e) => {
		let t = e.map((e) => e.accessibleText).filter((e) => !!e), n = t.length ? i("draw.measurements.summary", { measurements: t.join(". ") }) : i("draw.measurements.none");
		te.value !== n && (te.value = n);
	}, Tt = async (t, n) => {
		let r = ++u;
		if (l !== null && (window.cancelAnimationFrame(l), l = null, m = null), !E()) {
			Ct();
			return;
		}
		try {
			await de();
		} catch (e) {
			console.warn("Unable to load draw measurement operators.", e);
			return;
		}
		if (r !== u || !E()) return;
		let i = e.geo.map.esriView, a = i?.graphics;
		if (!i || !a) return;
		let o = L(ht(t, n), i);
		try {
			p.length && a.removeMany(p);
		} catch (e) {
			console.warn("Unable to remove stale draw measurement graphics.", e);
		}
		p = o.flatMap((e) => e.graphics);
		let s = o.flatMap((e) => e.segmentLabels ?? []), c = o.flatMap((e) => e.areaLabels ?? []);
		et(s, c), s.length || c.length ? nt() : rt();
		try {
			p.length && a.addMany(p), p.length || s.length ? xt() : _t();
		} catch (e) {
			console.warn("Unable to add draw measurement graphics.", e), p = [], _t();
		}
		wt(o);
	};
	return F(() => [
		t.activeSegmentKey,
		t.activeVertexKey,
		t.shapeDetailsActiveTab,
		t.selectedGraphicId
	], () => {
		St();
	}), {
		measurementSummary: te,
		clearMeasurementGraphics: Ct,
		refreshMeasurementGraphics: Tt,
		scheduleMeasurementRefresh: (e, t) => {
			if (!E()) {
				Ct();
				return;
			}
			m = {
				activeGraphic: e,
				activeTool: t
			}, l === null && (l = window.requestAnimationFrame(() => {
				l = null;
				let e = m;
				m = null, Tt(e?.activeGraphic, e?.activeTool);
			}));
		}
	};
}, et = {
	key: 0,
	class: "sr-only",
	"aria-live": "polite",
	"aria-atomic": "true"
}, tt = 24, nt = 160, rt = 48, it = /* @__PURE__ */ Se({
	__name: "draw",
	setup(n) {
		let { t: i, availableLocales: o, locale: l } = Fe(), d = (e) => i(e ? `draw.${e}` : "draw.unknown"), f = Ce("iApi"), m = ae(), y = t(), x = (e) => {
			let t = o.length ? o : [l.value], n = {};
			for (let r of t) n[r] = i(e, {}, { locale: r });
			return n;
		}, w = null, T = Pe("sketchEl"), D = null, j = null, M = null, N = null, ue = null, de = null, fe = !1, P = 0, he = null, _e = /* @__PURE__ */ new Map(), Se = 0, we = {}, Ae = 0, Me = 0, I = null, L = null, ze = null, Be = null, Ve = null, R = null, z = null, He = [
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
		], Ue = ke([]), B, { measurementSummary: Ge, clearMeasurementGraphics: Ke, refreshMeasurementGraphics: V, scheduleMeasurementRefresh: qe } = $e({
			iApi: f,
			drawStore: m,
			locale: l,
			t: i,
			getGraphicsLayer: () => D,
			isShapeDetailsOpen: () => Z(),
			getShapeDetailsGraphic: () => Gt()
		}), H = null, Ye = (e = m.activeTool) => e !== null && e !== "" || m.shapeDetailsPickEnabled || Z(), Xe = (e = m.activeTool) => {
			let t = f.fixture.get("panguard");
			if (Ye(e)) {
				t && H === null && (H = t.enabled, t.setEnabled(!1));
				return;
			}
			H !== null && (t?.setEnabled(H), H = null);
		}, Ze = (e) => {
			qn(e.detail);
		}, Qe = (e) => {
			Jn(e.detail);
		}, U = () => {
			try {
				w?.cancel();
			} catch (e) {
				console.warn("Unable to cancel draw sketch.", e);
			}
		}, W = () => {
			he !== null && (window.clearTimeout(he), he = null);
		}, it = () => w?.widget, at = (e = w) => e?.widget?.viewModel ?? e?.viewModel, G = (e, t = w) => {
			let n = at(t);
			n && (n.updateOnGraphicClick = e);
		}, K = () => N?.state === "active" || at()?.state === "active" || w?.state === "active", q = (e, t) => {
			let n = t?.updateGraphics ?? at()?.updateGraphics ?? it()?.updateGraphics ?? w?.updateGraphics;
			return n ? n.includes(e) || n.toArray().some((t) => t === e || t.attributes?.id === e.attributes?.id) : !1;
		}, J = (e) => {
			let t = at()?.defaultUpdateOptions ?? it()?.defaultUpdateOptions ?? w?.defaultUpdateOptions ?? {};
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
		}, ot = (e) => {
			if (!w || !e) return;
			let t = it(), n = at();
			w.layer = e, t && (t.layer = e), n && (n.layer = e, G(!1));
		}, st = () => {
			if (ue?.remove(), ue = null, N) {
				try {
					N.cancel();
				} catch (e) {
					console.warn("Unable to cancel draw edit sketch view model.", e);
				}
				N.destroy(), N = null;
			}
		}, ct = () => oe(m.styleSettings), lt = () => C(m.bufferSettings), ut = () => m.identifyBufferMode, Y = (e) => e ? le(e) : void 0, dt = (e) => !!e.attributes?.id && !e.attributes?.drawMeasurement && !e.attributes?.drawBufferFor, ft = async (e) => {
			let t = f.geo.layer.getLayer(e);
			if (t?.esriLayer) {
				let n = !!t.esriLayer.destroyed, r = (f.geo.map.esriMap?.layers.indexOf(t.esriLayer) ?? -1) > -1;
				(n || !r) && (gt(e), t = void 0);
			}
			if (!t) t = f.geo.layer.createLayer({
				id: e,
				layerType: a.GRAPHIC,
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
			if (!t.esriLayer) {
				console.warn(`Draw graphics layer ${e} does not have an Esri layer.`);
				return;
			}
			return t;
		}, pt = async (e, t) => {
			let n = f.geo.geom.geomEsriToRamp(e, t), r = await f.geo.map.geomToMapSR(n), i = f.geo.map.getSR();
			return n.sr.isEqual(i) ? e.clone() : f.geo.geom.geomRampToEsri(r);
		}, mt = (e, t) => {
			e.geometry = t, e.set("geometry", t);
		}, ht = async (e) => {
			let t = D;
			if (t) for (let n of t.graphics.toArray().filter(dt)) {
				let t = Y(n), r = n.geometry;
				if (r) try {
					let i = await pt(r, t);
					if (e !== void 0 && e !== P) return;
					mt(n, i), Et(n);
				} catch (e) {
					console.warn("Unable to project draw graphic to the current map projection.", e);
				}
			}
		}, gt = (e) => {
			let t = f.geo.layer.getLayer(e);
			if (t) try {
				f.geo.map.removeLayer(t);
			} catch (t) {
				console.warn(`Unable to remove draw graphics layer ${e}.`, t);
			}
		}, _t = (e) => {
			let t = D?.graphics.toArray().some((t) => Y(t) === e) ?? !1, n = m.graphics.some((t) => Y(t) === e);
			return !t && !n;
		}, vt = (e) => {
			switch (e) {
				case "point":
				case "multipoint": return "T";
				case "polyline": return "P";
				case "polygon": return "G";
				case "circle": return "C";
				case "rectangle": return "R";
				default: return "S";
			}
		}, yt = (e) => {
			let t = vt(e), n = we[t] ?? 999, r;
			do
				r = `${t}${++n}`;
			while (!_t(r));
			return we[t] = n, r;
		}, bt = (e, t) => {
			let n = t?.trim();
			return n && _t(n) ? n : yt(e);
		}, xt = (e) => b(e.attributes), St = (e) => ce(e.attributes), Ct = (e) => S(e.attributes), wt = (e) => se(e.attributes), Tt = () => {
			if (!w) return;
			let e = ct();
			w.pointSymbol = ne("point", e), w.polylineSymbol = ne("polyline", e), w.polygonSymbol = ne("polygon", e);
		}, Et = (e) => {
			let t = e.attributes?.id;
			t && m.updateGraphic(t, {
				type: e.attributes?.type,
				geometry: e.geometry,
				attributes: e.attributes
			});
		}, Dt = (e) => D?.graphics.toArray().find((t) => t.attributes?.id === e), Ot = (e) => {
			if (!e || e.attributes?.drawMeasurement) return;
			let t = e.attributes?.drawBufferFor;
			return t ? Dt(t) : e.attributes?.id ? e : void 0;
		}, X = (e) => {
			e.symbol = ne(e.geometry?.type ?? e.attributes?.type, xt(e));
		}, kt = (e, t = ct(), n = lt(), r = ut()) => {
			e.attributes = {
				...e.attributes ?? {},
				drawStyle: oe(t),
				drawBuffer: C(n),
				drawIdentifyBufferMode: r,
				drawMapLabels: E(e.attributes?.drawMapLabels)
			}, X(e);
		}, At = (e, t, n) => {
			let r = t ?? e.attributes?.type ?? e.geometry?.type, i = bt(r, n);
			return e.attributes = {
				...e.attributes ?? {},
				id: i,
				type: r,
				drawStyle: oe(e.attributes?.drawStyle ?? ct()),
				drawBuffer: C(e.attributes?.drawBuffer ?? lt()),
				drawIdentifyBufferMode: S(e.attributes, ut()),
				drawMapLabels: E(e.attributes?.drawMapLabels)
			}, X(e), i;
		}, jt = (e) => {
			if (!e) return;
			let t = _e.get(e);
			if (t) {
				try {
					D?.remove(t);
				} catch (e) {
					console.warn("Unable to remove draw buffer graphic.", e);
				}
				_e.delete(e);
			}
		}, Mt = () => {
			let e = Array.from(_e.values());
			if (e.length) try {
				D?.removeMany(e);
			} catch (e) {
				console.warn("Unable to clear draw buffer graphics.", e);
			}
			_e = /* @__PURE__ */ new Map();
		}, Nt = () => {
			if (!D) return;
			let e = D.graphics.toArray().filter(dt);
			if (e.length) try {
				D.removeMany(e);
			} catch (e) {
				console.warn("Unable to clear draw graphics for map refresh.", e);
			}
		}, Pt = (e) => {
			let t = e.attributes?.id;
			if (!t || !D) return;
			let n = re(e, xt(e), St(e)), r = _e.get(t);
			if (!n) {
				jt(t);
				return;
			}
			if (r) {
				r.geometry = n.geometry, r.symbol = n.symbol, r.attributes = n.attributes;
				return;
			}
			let i = D.graphics.indexOf(e);
			i >= 0 ? D.graphics.add(n, i) : D.add(n), _e.set(t, n);
		}, Ft = () => {
			let e = m.selectedGraphicSettingsUpdatedGraphicId ?? m.selectedGraphicId, t = e ? m.graphics.find((t) => t.id === e) : void 0, n = I?.attributes?.id === e ? I : e ? D?.graphics.toArray().find((t) => t.attributes?.id === e) : void 0;
			if (!t || !n) return;
			let r = St(n), i = Ct(n), a = b(t.attributes), o = ce(t.attributes), s = S(t.attributes), c = r.distance !== o.distance || r.unit !== o.unit || i !== s;
			kt(n, a, o, s), R?.sourceGraphic === n && kt(R.editGraphic, a, o, s), Pt(n), Et(n), Q(Z() ? n : void 0), c && Kt(n);
		}, It = (e, t = !0) => {
			let n = Ot(e);
			n && (I = n, Et(n), n.attributes?.id && m.selectGraphic(n.attributes.id), Q(t ? n : void 0));
		}, Lt = (e) => {
			It(e), $t("details"), m.requestShapePanelFocus(), Kt(e);
		}, Rt = (e) => {
			It(e, !1), Wt(e);
		}, zt = (e) => {
			if (e) return e;
			let t = m.selectedGraphicId;
			return I && (!t || I.attributes?.id === t) ? I : t ? D?.graphics.toArray().find((e) => e.attributes?.id === t) : void 0;
		}, Bt = () => {
			let e = I ?? D?.graphics.toArray().find((e) => e.attributes?.id === m.selectedGraphicId), t = e?.attributes?.id;
			if (!e || !t) return !1;
			try {
				w?.delete();
			} catch (e) {
				console.warn("Unable to delete draw sketch graphic.", e);
			}
			return R?.sourceGraphic === e && $({ restoreSource: !1 }), jt(t), Jt(t), qt(), D?.remove(e), m.removeGraphic(t), I = null, m.clearSelection(), Q(void 0), V(), f.updateAlert(i("draw.graphic.deleted")), !0;
		}, Vt = async (e) => {
			if (!e.length || !D) return 0;
			let t = D, n = [];
			for (let t of e) try {
				let e = _(t.geometry);
				if (!e) continue;
				let r = await pt(e, t.id), i = t.type || r.type, a = new v({
					geometry: r,
					attributes: {
						type: i,
						drawStyle: oe(t.settings.drawStyle),
						drawBuffer: C(t.settings.drawBuffer),
						drawIdentifyBufferMode: t.settings.drawIdentifyBufferMode,
						drawMapLabels: E(t.settings.drawMapLabels)
					}
				}), o = At(a, i, t.id);
				n.push(a), m.addGraphic({
					id: o,
					type: i,
					geometry: a.geometry,
					attributes: a.attributes
				});
			} catch {}
			return n.length ? t === D ? (t.addMany(n), n.forEach(Pt), V(), f.updateAlert(i("draw.import.success", { count: n.length })), n.length) : 0 : (f.updateAlert(i("draw.import.error.invalid")), 0);
		}, Ht = async () => {
			let e = m.importShapesRequestId;
			!e || e === Me || !D || (await Vt([...m.importShapeRecords]), Me = e, m.clearImportShapes(e));
		}, Ut = async (e) => {
			let t = D;
			if (!t || !m.graphics.length) return;
			let n = new Set(t.graphics.toArray().map((e) => Y(e)).filter((e) => !!e)), r = [];
			for (let e of m.graphics) {
				let t = Y(e), i = e.geometry?.clone?.() ?? e.geometry;
				if (!(!t || !i || n.has(t))) try {
					let a = await pt(i, t), o = e.type ?? e.attributes?.type ?? a.type, s = new v({
						geometry: a,
						attributes: {
							...e.attributes ?? {},
							id: t,
							type: o
						}
					});
					X(s), m.updateGraphic(t, {
						type: o,
						geometry: s.geometry,
						attributes: s.attributes
					}), n.add(t), r.push(s);
				} catch (e) {
					console.warn("Unable to restore draw graphic in the current map projection.", e);
				}
			}
			r.length && (e !== void 0 && e !== P || t !== D || (t.addMany(r), r.forEach(Pt)));
		}, Wt = (e) => {
			let t = ++Se;
			m.setActiveTool("edit"), $t("edit"), window.setTimeout(() => {
				if (t !== Se || m.activeTool !== "edit") return;
				let n = zt(e);
				n && Ln(n);
			}, 0);
		}, Gt = () => {
			let e = m.selectedGraphicId;
			if (e) return I?.attributes?.id === e ? I : D?.graphics.toArray().find((t) => t.attributes?.id === e);
		}, { refreshSelectedGraphicFeatureCounts: Kt, cancelPendingFeatureCountRefresh: qt, cancelFeatureCountRunsForGraphic: Jt, scheduleFeatureCountRefresh: Yt, runIdentifyForSelectedGraphic: Xt } = We({
			iApi: f,
			drawStore: m,
			getDrawGraphicId: Y,
			getGraphicDrawBufferSettings: St,
			getGraphicDrawIdentifyBufferMode: Ct,
			getSelectedFeatureCountGraphic: () => Gt() ?? m.getSelectedGraphic() ?? void 0
		}), Zt = (e) => O(y, e), Z = () => Zt(A), Qt = () => Z() && m.shapeDetailsActiveTab === "details" && !!m.selectedGraphicId, $t = (e = "details") => {
			ie(f, e, { focusExisting: !0 });
		}, en = () => {
			if (Zt("draw-settings")) {
				f.panel.focus(k);
				return;
			}
			f.panel.open(k);
		}, tn = (e) => {
			Zt(e) && f.panel.close(e);
		}, nn = /* @__PURE__ */ new Set([A]), rn = () => {
			let e = f.geo.map.esriView?.padding;
			return {
				top: Number(e?.top ?? 0),
				right: Number(e?.right ?? 0),
				bottom: Number(e?.bottom ?? 0),
				left: Number(e?.left ?? 0)
			};
		}, an = () => {
			let e = f.geo.map.esriView;
			return e?.viewpoint?.clone?.() ?? {
				center: e?.center?.clone?.(),
				scale: e?.scale,
				rotation: e?.rotation
			};
		}, on = (e) => {
			let t = f.geo.map.esriView;
			t && (t.padding = { ...e });
		}, sn = () => {
			if (Z()) return A;
		}, cn = (e, t) => {
			let n = f.geo.map.esriView, r = n?.container?.getBoundingClientRect(), i = (f.$rootEl?.querySelector(`[data-cy="${e}"]`))?.getBoundingClientRect(), a = f.$vApp.$el.querySelector(".appbar")?.getBoundingClientRect(), o = f.panel.get(e)?.width ?? 350, s = a && r ? Math.max(0, a.right - r.left) : 0, c = i?.width ?? o, l = i && r ? i.right - r.left : s + o, u = s ? s + c : l, d = Math.max(t.left, Math.ceil(u + tt)), p = n?.width ?? r?.width ?? 0, m = y.mobileView ? rt : nt;
			return p > m && (d = Math.min(d, p - m)), Math.max(0, d);
		}, ln = (e, t) => ({
			top: t.top + tt,
			right: t.right + tt,
			bottom: t.bottom + tt,
			left: cn(e, t)
		}), un = () => {
			let e = f.panel.opened.slice().filter((e) => !nn.has(e.id)).map((e) => ({
				panel: e,
				wasPinned: e.isPinned
			}));
			return e.forEach(({ panel: e }) => e.minimize()), e;
		}, dn = (e) => {
			e.forEach(({ panel: e }) => {
				!f.panel.get(e.id) || e.isOpen || e.open();
			}), e.filter(({ panel: e, wasPinned: t }) => t && !!f.panel.get(e.id)).forEach(({ panel: e }) => e.pin(!0));
		}, fn = (e) => !!e && typeof e == "object" && e.name === "AbortError", pn = async (e, t, n) => {
			if (await Te(), z !== e || t !== Ae || !n.geometry) return;
			let r = sn();
			if (r) {
				e.previousViewpoint ||= an(), on(ln(r, e.previousPadding)), e.paddingAdjusted = !0;
				try {
					let e = f.geo.geom.geomEsriToRamp(n.geometry, n.attributes?.id);
					await f.geo.map.zoomMapTo(e, void 0, !0, 250, "ease");
				} catch (e) {
					fn(e) || console.warn("Unable to focus the map on the selected draw shape.", e);
				}
			}
		}, mn = () => {
			if (y.mobileView || z) return;
			let e = f.geo.map.esriView, t = Gt();
			if (!e) return;
			let n = {
				previousPadding: rn(),
				paddingAdjusted: !1,
				minimizedPanels: []
			};
			z = n;
			let r = ++Ae;
			n.minimizedPanels = un(), t?.geometry && pn(n, r, t);
		}, hn = () => {
			if (y.mobileView) return;
			let e = Gt();
			if (!f.geo.map.esriView || !e?.geometry) return;
			if (!z) {
				mn();
				return;
			}
			let t = z, n = new Set(t.minimizedPanels.map(({ panel: e }) => e.id)), r = un().filter(({ panel: e }) => !n.has(e.id));
			t.minimizedPanels.push(...r);
			let i = ++Ae;
			pn(t, i, e);
		}, gn = () => {
			let e = z;
			if (!e) return;
			z = null, Ae++, e.paddingAdjusted && on(e.previousPadding), dn(e.minimizedPanels);
			let t = f.geo.map.esriView;
			!t || !e.previousViewpoint || t.goTo(e.previousViewpoint, {
				animate: !0,
				duration: 250,
				easing: "ease"
			}).catch((e) => {
				fn(e) || console.warn("Unable to restore the map after closing the draw shape panel.", e);
			});
		}, _n = () => {
			let e = m.activeTool, t = e !== null && e !== "" && e !== "edit", n = e === "edit";
			return m.shapeDetailsPickEnabled && !t && !n;
		}, vn = () => !1, yn = (e, t, n) => {
			let r = e.geometry;
			if (!r) return !1;
			try {
				return p.execute(r, r.type === "polygon" ? t : n);
			} catch {
				return !1;
			}
		}, bn = (t) => {
			if (!D) return;
			let n = t.mapPoint ?? f.geo.map.esriView?.toMap({
				x: t.x,
				y: t.y
			});
			if (!n) return;
			let r = t.pointerType, i = t.native?.pointerType, a = r === "touch" || i === "touch" ? 15 : 5, o = n, s = f.geo.query.makeClickBuffer(e.fromESRI(n), a).toESRI();
			for (let e of D.graphics.toArray().slice().reverse()) {
				let t = Ot(e);
				if (t && yn(e, o, s)) return t;
			}
		}, xn = (e) => {
			if (!D) return;
			let t = e.mapPoint.toESRI(), n = e.input === "touch" ? 15 : 5, r = f.geo.query.makeClickBuffer(e.mapPoint, n).toESRI();
			return D.graphics.toArray().slice().reverse().find((e) => !!e.attributes?.id && !e.attributes?.drawMeasurement && !e.attributes?.drawBufferFor && yn(e, t, r));
		}, Sn = (e) => {
			let t = Z();
			if (!_n() && !t) return;
			let n = xn(e);
			n && _n() ? Lt(n) : !n && t && tn(A);
		};
		async function Cn() {
			let e = f.keyboardNav;
			if (!e) {
				console.warn("Keyboard navigation fixture is not available; draw shortcuts are disabled.");
				return;
			}
			B &&= (e.unregister(B), void 0);
			let t = new Set(m.supportedTypes.map((e) => e.type)), n = He.filter((e) => t.has(e.type)).map((e) => ({
				key: e.key,
				description: x(e.descriptionKey),
				handler: () => {
					m.setActiveTool(e.type);
				}
			}));
			B = e.register("D", {
				name: x("draw.keyboard.namespace"),
				activeHandler: () => {
					m.setActiveTool("");
				},
				deactiveHandler: () => {
					m.setActiveTool(null);
				},
				keys: [
					...n,
					{
						key: "I",
						description: x("draw.keyboard.key.inspector"),
						handler: () => (m.setActiveTool(null), $t("details"), "reset")
					},
					{
						key: "D",
						description: x("draw.keyboard.key.defaults"),
						handler: () => (m.setActiveTool(null), en(), "reset")
					}
				]
			});
		}
		let Q = (e) => {
			let t = M ?? D;
			if (L && t && ze === t && e?.geometry && L.geometry?.type === e.geometry.type) {
				L.geometry = e.geometry, L.set("geometry", e.geometry);
				return;
			}
			if (L && (ze?.remove(L), D?.remove(L), M?.remove(L), L = null, ze = null), !e?.geometry || !t) return;
			let n;
			switch (e.geometry?.type) {
				case "point":
				case "multipoint":
					n = new s({
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
					n = new g({
						color: [
							255,
							255,
							0,
							.8
						],
						width: 6
					});
					break;
				default: n = new u({
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
			L = new v({
				geometry: e.geometry,
				symbol: n
			}), t.add(L), ze = t;
		}, wn = () => {
			Be &&= (D?.remove(Be), null);
		}, Tn = () => {
			Ve &&= (D?.remove(Ve), null);
		}, En = () => {
			let e = m.mapLabelSettingsUpdatedGraphicId;
			if (!e) return;
			let t = m.graphics.find((t) => t.id === e), n = Dt(e);
			!t || !n || (n.attributes = {
				...n.attributes ?? {},
				drawMapLabels: E(wt(t))
			});
		}, Dn = () => {
			if (wn(), !Qt()) return;
			let e = pe(m.activeSegmentKey);
			if (!e || e.kind !== "segment" || e.graphicId !== m.selectedGraphicId) return;
			let t = Dt(e.graphicId), n = ge(t?.geometry, e.graphicId)[e.index];
			!n || !t?.geometry || (Be = new v({
				geometry: new c({
					paths: [[n.start, n.end]],
					spatialReference: t.geometry.spatialReference
				}),
				symbol: new g({
					color: [
						37,
						99,
						235,
						.9
					],
					width: 4
				}),
				attributes: { drawInteractionHighlight: !0 }
			}), D?.add(Be));
		}, On = () => {
			if (Tn(), !Qt()) return;
			let e = pe(m.activeVertexKey);
			if (!e || e.kind !== "vertex" || e.graphicId !== m.selectedGraphicId) return;
			let t = Dt(e.graphicId), n = me(t?.geometry, e.graphicId)[e.index];
			!n || !t?.geometry || (Ve = new v({
				geometry: new ee({
					x: n.vertex[0],
					y: n.vertex[1],
					spatialReference: t.geometry.spatialReference
				}),
				symbol: new s({
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
			}), D?.add(Ve));
		}, kn = () => {
			Dn(), On();
		}, An = (e) => {
			if (!D) return;
			let t = Ot(e);
			if (!t) return;
			let n = t.attributes?.id;
			return D.graphics.toArray().find((e) => e === t || !!n && e.attributes?.id === n);
		}, jn = (e) => R?.editGraphic === e ? R.sourceGraphic : e, Mn = () => {
			if (!R) return;
			let { sourceGraphic: e, editGraphic: t } = R;
			return e.geometry = t.geometry, e.set("geometry", t.geometry), X(e), Pt(e), Et(e), e;
		}, $ = ({ restoreSource: e = !0 } = {}) => {
			R?.sourceGraphic && e && (R.sourceGraphic.visible = !0), st(), R = null, j?.removeAll(), ot(D);
		}, Nn = (e) => {
			if (!(!j || !f.geo.map.esriView)) return st(), N = new h({
				view: f.geo.map.esriView,
				layer: j,
				updateOnGraphicClick: !1,
				defaultUpdateOptions: J(e),
				pointSymbol: w?.pointSymbol,
				polygonSymbol: w?.polygonSymbol,
				polylineSymbol: w?.polylineSymbol
			}), ue = N.on("update", (e) => Jn(e)), N;
		}, Pn = async () => {
			if (!j || !f.geo.map.esriView) return !1;
			try {
				return await f.geo.map.esriView.whenLayerView(j), !0;
			} catch (e) {
				return console.warn("Unable to initialize draw edit sketch layer view.", e), !1;
			}
		}, Fn = (e) => {
			if (!j) return;
			$();
			let t = e.clone();
			t.attributes = { ...e.attributes };
			let n = e.geometry?.clone?.() ?? e.geometry;
			if (X(t), j.graphics = [t], e.visible = !1, R = {
				sourceGraphic: e,
				editGraphic: t,
				originalGeometry: n
			}, !Nn(t)) {
				e.visible = !0, R = null, j.removeAll();
				return;
			}
			return t;
		}, In = async (e) => {
			let t = jn(e);
			if (!w || !D || m.activeTool !== "edit" || I !== t) return !1;
			let n = R?.editGraphic === e, r = n ? N : at();
			if (!r || n && !await Pn()) return !1;
			if (r.state === "active") return q(e, r) ? !0 : (r.cancel(), !1);
			if (r.state !== "ready" || !r.hasGraphic(e)) return !1;
			try {
				r !== N && G(!1), await r.update([e], J(e));
			} catch (e) {
				return console.warn("Unable to start draw sketch update.", e), !1;
			}
			return q(e, r);
		}, Ln = (e, t = 5) => {
			if (!w || m.activeTool !== "edit") return;
			let n = An(e);
			if (!n) return;
			It(n, !1), W(), U();
			let r = Fn(n);
			if (!r) return;
			Q(Z() ? n : void 0);
			let i = (e) => {
				he = window.setTimeout(() => {
					he = null, !(!w || m.activeTool !== "edit" || I !== n) && In(r).then((t) => {
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
			if (Se++, W(), Mn(), U(), $({ restoreSource: !0 }), e && (I = null, m.clearSelection()), m.activeTool === "edit") {
				m.setActiveTool(null);
				return;
			}
			Q(Z() ? Gt() : void 0);
		}, zn = ({ clearSelection: e = !1 } = {}) => {
			Se++, W();
			let t = R;
			t?.sourceGraphic && t.originalGeometry && (t.sourceGraphic.geometry = t.originalGeometry, t.sourceGraphic.set("geometry", t.originalGeometry), X(t.sourceGraphic), Pt(t.sourceGraphic), Et(t.sourceGraphic), qt(), Kt(t.sourceGraphic)), U(), $({ restoreSource: !0 }), e && (I = null, m.clearSelection()), m.activeTool === "edit" && m.setActiveTool(null), Q(Z() ? Gt() : void 0), V();
		};
		F(() => m.selectedGraphicId, (e, t) => {
			if (!(!w || !D)) {
				if (!e) W(), U(), $({ restoreSource: !0 }), Q();
				else if (e !== t) {
					let t = D.graphics.toArray().find((t) => t.attributes && t.attributes.id === e);
					t && (It(t, m.activeTool !== "edit"), m.shapeDetailsPickEnabled && Kt(t));
				}
				V();
			}
		}), F(() => m.deleteSelectedGraphicRequestId, () => {
			Bt();
		}), F(() => m.editSelectedGraphicRequestId, () => {
			Wt();
		}), F(() => m.identifySelectedGraphicRequestId, () => {
			Xt();
		}), F(() => m.stopEditModeRequestId, () => {
			Rn({ clearSelection: m.stopEditModeClearSelection });
		}), F(() => m.cancelEditModeRequestId, () => {
			zn({ clearSelection: m.cancelEditModeClearSelection });
		}), F(() => m.refreshSelectedGraphicFeatureCountsRequestId, () => {
			Kt();
		}), F(() => m.mapLabelSettingsUpdateRequestId, () => {
			En(), V();
		}), F(() => [m.shapeDetailsLabelsVisible, m.shapeDetailsLabelsUseSettings], () => {
			V();
		}), F(() => m.shapePanelFocusRequestId, () => {
			hn();
		}), F(() => m.selectedGraphicSettingsUpdateRequestId, () => {
			Ft(), V();
		}), F(() => m.importShapesRequestId, () => {
			Ht();
		}), F(() => Z(), (e, t) => {
			if (Xe(), e && !t) {
				m.activeTool !== "edit" && Q(Gt()), V(), mn();
				return;
			}
			!e && t && (m.activeTool === "edit" && Rn(), m.setShapeDetailsPickEnabled(!1), m.setShapeDetailsLabelsVisible(!1), m.setShapeDetailsLabelsUseSettings(!1), m.setShapeDetailsActiveTab("details"), m.clearMeasurementInteraction(), Q(void 0), V(), gn());
		}), F(() => m.measurementsEnabled, (e) => {
			V(), f.updateAlert(i(e ? "draw.measurements.enabled" : "draw.measurements.disabled"));
		}), F(() => [
			m.activeSegmentKey,
			m.activeVertexKey,
			m.shapeDetailsActiveTab,
			m.selectedGraphicId,
			m.graphics.map((e) => e.geometry)
		], () => {
			kn();
		}, { deep: !0 }), F(() => ({
			fillColor: m.styleSettings.fillColor,
			borderColor: m.styleSettings.borderColor,
			bufferColor: m.styleSettings.bufferColor,
			opacity: m.styleSettings.opacity,
			bufferDistance: m.bufferSettings.distance,
			bufferUnit: m.bufferSettings.unit,
			identifyBufferMode: m.identifyBufferMode
		}), () => {
			Tt(), V();
		});
		let { handleNavigationKeyDown: Bn, handleGraphicKeyboardEdit: Vn, resetMultiPointState: Hn } = Je({
			iApi: f,
			drawStore: m,
			t: i,
			translateTerm: d,
			getSketch: () => w,
			getGraphicsLayer: () => D,
			getSelectedGraphic: () => I,
			getKeyboardEditGraphic: () => R?.editGraphic ?? I,
			setSelectedGraphic: (e) => {
				I = e;
			},
			prepareDrawGraphic: At,
			applyDrawSymbol: X,
			syncBufferGraphic: Pt,
			syncGraphicStoreRecord: Et,
			syncActiveSketchEditToSource: Mn,
			highlightSelectedGraphic: Q,
			deleteSelectedGraphic: Bt,
			startSketchUpdate: Ln,
			cancelPendingSketchUpdate: W,
			clearActiveSketchEdit: $,
			refreshMeasurementGraphics: V,
			scheduleMeasurementRefresh: qe,
			cancelPendingFeatureCountRefresh: qt,
			refreshSelectedGraphicFeatureCounts: Kt
		}), Un = async (e) => {
			let t = m.activeTool === "edit", n = vn();
			if (!t && !n) return;
			let r = (await f.geo.map.esriView.hitTest(e, { include: D })).results.find((e) => "graphic" in e && e.graphic.layer === D && !!Ot(e.graphic)), i = Ot(r?.graphic) ?? bn(e);
			if (i) {
				if (n) {
					Rt(i);
					return;
				}
				K() ? It(i, !1) : Ln(i);
				return;
			}
			t && Rn({ clearSelection: !0 });
		}, Wn = async () => {
			let e = ++P;
			if (await f.geo.map.viewPromise, e !== P || !T.value || !f.geo.map.esriView) return;
			let t = await ft(Ie);
			if (e !== P || !f.geo.map.esriView || (D = t?.esriLayer, !D) || (await ht(e), e !== P || !f.geo.map.esriView)) return;
			let n = await ft(Le);
			if (e !== P || !f.geo.map.esriView) {
				gt(Le), j = null;
				return;
			}
			if (j = n?.esriLayer, !j) return;
			let r = await ft(Re);
			if (e !== P || !f.geo.map.esriView) {
				gt(Le), gt(Re), j = null, M = null;
				return;
			}
			if (M = r?.esriLayer, !M) return;
			let i = T.value;
			Object.assign(i, {
				view: f.geo.map.esriView,
				layer: D,
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
			}), G(!1, i), f.geo.map.esriView.ui.add(i, "bottom-right"), fe ||= (i.addEventListener("arcgisCreate", Ze), i.addEventListener("arcgisUpdate", Qe), !0), w = i, G(!1), Tt(), de = f.geo.map.esriView.on("click", Un), document.addEventListener("keydown", Bn), document.addEventListener("keydown", Vn, { capture: !0 }), m.activeTool && m.activeTool !== "edit" && w.create(m.activeTool), await Ut(e), !(e !== P || !f.geo.map.esriView) && (V(), Ht());
		}, Gn = () => {
			if (!B) return;
			let e = f.keyboardNav;
			if (!e) {
				B = void 0;
				return;
			}
			e.unregister(B), B = void 0;
		}, Kn = ({ cleanupKeyboard: e = !0, clearActiveTool: t = !1, clearSourceGraphics: n = !1, destroyHelperLayers: r = !0, destroySketch: i = !0 } = {}) => {
			P++, e && Gn(), de &&= (de.remove(), null), $({ restoreSource: !0 }), j &&= (r ? (f.geo.map.esriView?.map?.remove(j), j.destroy()) : j.removeAll(), null), w && (f.geo.map.esriView && f.geo.map.esriView.ui.remove(w), W(), U(), i && w.destroy()), fe && T.value && (T.value.removeEventListener("arcgisCreate", Ze), T.value.removeEventListener("arcgisUpdate", Qe), fe = !1), document.removeEventListener("keydown", Bn), document.removeEventListener("keydown", Vn, { capture: !0 }), I = null, Q(void 0), M && (r ? (f.geo.map.esriView?.map?.remove(M), M.destroy()) : M.removeAll(), M = null, ze = null), wn(), Tn(), W(), qt(), Se++, Ke(), Mt(), n && Nt(), m.clearSelection(), t && m.activeTool && m.setActiveTool(null), Hn(), w = null, D = null;
		}, qn = (e) => {
			if (e.state === "active" && e.graphic) {
				qe(e.graphic, e.tool);
				return;
			}
			if (e.state === "cancel") {
				V();
				return;
			}
			if (e.state === "complete") {
				let t = e.graphic;
				if (!t) return;
				let n = At(t, e.tool);
				Pt(t), m.addGraphic({
					id: n,
					type: e.tool,
					geometry: t.geometry,
					attributes: t.attributes
				}), V(t, e.tool), e.tool !== "point" && (m.setActiveTool(""), f.keyboardNav?.reset());
			}
		}, Jn = (e) => {
			let t = e.graphics[0];
			if (!t) return;
			let n = jn(t);
			if (e.state === "start") {
				if (m.activeTool !== "edit") {
					U();
					return;
				}
				W(), It(n, Z()), n.attributes?.id && f.updateAlert(i("draw.graphic.selected", { type: d(n.attributes?.type) }));
			} else if (e.state === "active") {
				X(t);
				let e = Mn() ?? n;
				Pt(e), Et(e), Q(Z() ? e : void 0), qe(e, e.attributes?.type), Yt(e);
			} else if (e.state === "complete") {
				let e = Mn() ?? n;
				$({ restoreSource: !0 }), e.attributes?.id && (X(e), Pt(e), Et(e), qt(), Kt(e), f.updateAlert(i("draw.graphic.updated"))), Q(Z() ? e : void 0), V(e, e.attributes?.type);
			}
		};
		return Ee(() => {
			Cn(), te(), Wn(), Ue.push(f.event.on(r.MAP_DESTROYED, () => {
				Kn();
			})), Ue.push(f.event.on(r.MAP_CLICK, Sn)), Ue.push(f.event.on(r.MAP_REFRESH_START, () => {
				Kn({
					cleanupKeyboard: !1,
					clearActiveTool: !0,
					clearSourceGraphics: !0,
					destroyHelperLayers: !1,
					destroySketch: !1
				});
			})), Ue.push(f.event.on(r.MAP_REFRESH_END, () => {
				Wn();
			})), Ue.push(f.event.on(r.FIXTURE_ADDED, (e) => {
				e.id === "panguard" && Xe();
			}));
		}), F(() => m.activeTool, (e) => {
			if (Xe(e), w && (e !== "edit" && Se++, W(), U(), e !== "edit" && $({ restoreSource: !0 }), Q(Z() ? Gt() : void 0), Hn(), V(), e !== "edit" && e)) try {
				w.create(e);
			} catch (e) {
				console.warn("Unable to start draw sketch.", e);
			}
		}, { immediate: !0 }), F(() => m.shapeDetailsPickEnabled, () => {
			Xe();
		}), De(() => {
			gn(), H !== null && (f.fixture.get("panguard")?.setEnabled(H), H = null), Kn(), Ue.forEach((e) => f.event.off(e));
		}), (e, t) => (Oe(), be(ve, null, [xe("arcgis-sketch", {
			ref_key: "sketchEl",
			ref: T,
			style: { display: "none" }
		}, null, 512), Ne(m).measurementsEnabled ? (Oe(), be("div", et, je(Ne(Ge)), 1)) : ye("", !0)], 64));
	}
}), at = "draw", G = (e) => `<svg class="rv-draw-help-icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${e}</svg>`, K = (e) => `<span class="rv-draw-help-mapnav-button">${e}</span>`, q = (e, t) => `<span class="rv-draw-help-action-button">${t}<span class="rv-draw-help-action-label">${e}</span></span>`, J = {
	point: G("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\" />"),
	polyline: G("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 17l3-3 4 4 8-8\" stroke-width=\"2\" fill=\"none\" stroke=\"currentColor\" />"),
	polygon: G("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M3 6l6-3 6 3 6-3v12l-6 3-6-3-6 3z\" />"),
	rectangle: G("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" />"),
	circle: G("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" />"),
	info: G("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M11 10h2v7h-2v-7zm0-3h2v2h-2V7zm1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z\" fill=\"currentColor\" />"),
	settings: G("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.31-.6-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.05.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.22.37.31.6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.18-.58 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z\" />"),
	upload: G("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 20h14v-2H5v2zm14-7h-4v5H9v-5H5l7-7 7 7z\" fill=\"currentColor\" />"),
	download: G("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M5 20h14v-2H5v2zm14-9h-4V3H9v8H5l7 7 7-7z\" fill=\"currentColor\" />"),
	identify: G("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M10.5 4a6.5 6.5 0 0 1 5.18 10.43l4.45 4.44-1.42 1.42-4.44-4.45A6.5 6.5 0 1 1 10.5 4zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z\" fill=\"currentColor\" />"),
	copy: G("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M8 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v10h10V9H8z\" fill=\"currentColor\" /><path d=\"M4 15H2V5a3 3 0 0 1 3-3h10v2H5a1 1 0 0 0-1 1v10z\" fill=\"currentColor\" />"),
	delete: G("<path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z\" fill=\"currentColor\" />")
}, ot = {
	en: `# Draw Tools

Draw tools add temporary shapes to the map. The available shape buttons depend on the viewer configuration.

### Drawing Shapes

Open the Draw tool group in the map navigation controls and choose one of the available shape buttons.

| Icon | Shape | How to draw |
|--|--|--|
| ${K(J.point)} | Point | Select the point tool, then select the map once. |
| ${K(J.polyline)} | Polyline | Select each vertex on the map, then double-click the final vertex to finish. |
| ${K(J.polygon)} | Polygon | Select each boundary vertex on the map, then double-click the final vertex to close and finish the polygon. |
| ${K(J.rectangle)} | Rectangle | Select-hold on the map, drag to size the rectangle, then release. |
| ${K(J.circle)} | Circle | Select-hold on the map, drag to size the circle, then release. |

Press <kbd>Escape</kbd> to cancel the active drawing tool.

### Shape Inspector

After at least one shape exists, select the Shape Inspector information button ${K(J.info)} in the Draw tool group. Select a shape on the map to open or update the Shape Inspector.

The Shape Inspector has three tabs:

- Details: view the shape type, measurements, feature counts, centroid, extent, segments, and vertices. Use ${q("Run Identify", J.identify)} to refresh feature counts, ${q("Copy", J.copy)} coordinate or segment values, or ${q("Export", J.download)} the selected shape.
- Style: apply a preset or set the selected shape's fill colour, border colour, buffer colour, and opacity.
- Edit: move, resize, rotate, or reshape the selected shape using the map handles. Turn on editing aids for area labels, segment lengths, segment letters, or vertex numbers. This tab also contains the selected shape's buffer and identify options.

### Deleting Shapes

Open the Shape Inspector, select the Edit tab, then choose ${q("Delete", J.delete)} and confirm the deletion. When a shape is selected and the map has focus, <kbd>Delete</kbd> or <kbd>Backspace</kbd> also removes the selected shape.

### Import and Export

Open Draw Defaults with the settings button ${K(J.settings)} in the Draw tool group.

- ${q("Import", J.upload)} opens a file picker for one or more draw shape JSON files.
- ${q("Export", J.download)} in Draw Defaults downloads all current draw shapes.
- ${q("Export", J.download)} in the Shape Inspector Details tab downloads only the selected shape.

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
| ${K(J.point)} | Point | Sélectionnez l'outil de point, puis sélectionnez la carte une fois. |
| ${K(J.polyline)} | Polyligne | Sélectionnez chaque sommet sur la carte, puis double-cliquez le dernier sommet pour terminer. |
| ${K(J.polygon)} | Polygone | Sélectionnez chaque sommet de la limite sur la carte, puis double-cliquez le dernier sommet pour fermer et terminer le polygone. |
| ${K(J.rectangle)} | Rectangle | Sélectionnez et maintenez sur la carte, faites glisser pour dimensionner le rectangle, puis relâchez. |
| ${K(J.circle)} | Cercle | Sélectionnez et maintenez sur la carte, faites glisser pour dimensionner le cercle, puis relâchez. |

Appuyez sur <kbd>Échap</kbd> pour annuler l'outil de dessin actif.

### Inspecteur de forme

Lorsqu'au moins une forme existe, sélectionnez le bouton d'information de l'inspecteur de forme ${K(J.info)} dans le groupe d'outils de dessin. Sélectionnez une forme sur la carte pour ouvrir ou mettre à jour l'inspecteur de forme.

L'inspecteur de forme contient trois onglets :

- Détails : affichez le type de forme, les mesures, les dénombrements d'entités, le centroïde, l'étendue, les segments et les sommets. Utilisez ${q("Exécuter l'identification", J.identify)} pour actualiser les dénombrements d'entités, ${q("Copier", J.copy)} des coordonnées ou des valeurs de segment, ou ${q("Exporter", J.download)} la forme sélectionnée.
- Style : appliquez un préréglage ou définissez la couleur de remplissage, la couleur de bordure, la couleur du tampon et l'opacité de la forme sélectionnée.
- Modifier : déplacez, redimensionnez, faites pivoter ou remodelez la forme sélectionnée à l'aide des poignées sur la carte. Activez les aides de modification pour les étiquettes de superficie, les longueurs de segment, les lettres de segment ou les numéros de sommet. Cet onglet contient aussi les options de tampon et d'identification de la forme sélectionnée.

### Supprimer des formes

Ouvrez l'inspecteur de forme, sélectionnez l'onglet Modifier, puis choisissez ${q("Supprimer", J.delete)} et confirmez la suppression. Lorsqu'une forme est sélectionnée et que la carte a le focus, <kbd>Supprimer</kbd> ou <kbd>Retour arrière</kbd> supprime aussi la forme sélectionnée.

### Importer et exporter

Ouvrez Valeurs par défaut du dessin avec le bouton des paramètres ${K(J.settings)} dans le groupe d'outils de dessin.

- ${q("Importer", J.upload)} ouvre un sélecteur de fichiers pour un ou plusieurs fichiers JSON de formes dessinées.
- ${q("Exporter", J.download)} dans Valeurs par défaut du dessin télécharge toutes les formes dessinées actuelles.
- ${q("Exporter", J.download)} dans l'onglet Détails de l'inspecteur de forme télécharge seulement la forme sélectionnée.

Les fichiers exportés comprennent la géométrie et les paramètres de dessin afin de pouvoir être importés plus tard dans le module de dessin.

### Valeurs par défaut du dessin

Le panneau Valeurs par défaut du dessin contrôle les paramètres des nouvelles formes. Il ne modifie pas les formes qui existent déjà sur la carte.

- Apparence : couleur de remplissage, couleur de bordure, couleur du tampon et opacité par défaut de la forme.
- Tampon : distance et unité du tampon par défaut.
- Utilisation du tampon d'identification : détermine si l'identification et les dénombrements d'entités utilisent la forme originale avec son tampon, la forme originale seulement ou le tampon seulement.

### Options de forme

Chaque forme sélectionnée peut avoir des options différentes des valeurs par défaut. Utilisez l'onglet Style de l'inspecteur de forme pour les couleurs et l'opacité. Utilisez l'onglet Modifier de l'inspecteur de forme pour la distance du tampon, l'unité du tampon, l'utilisation du tampon d'identification, les aides de modification et la suppression.`
}, st = {
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
}, ct = class extends He {
	unregisterIdentifyGeometryProvider;
	eventHandlers = [];
	destroyDrawComponent;
	registerHelpSection() {
		y(this.$vApp.$pinia).addDynamicSection({
			id: at,
			markdown: ot
		});
	}
	unregisterHelpSection() {
		y(this.$vApp.$pinia).removeDynamicSection(at);
	}
	resetShapeInspectionState() {
		let e = ae(this.$vApp.$pinia);
		e.setShapeDetailsPickEnabled(!1), e.setShapeDetailsLabelsVisible(!1), e.setShapeDetailsLabelsUseSettings(!1), e.setShapeDetailsActiveTab("details"), e.clearMeasurementInteraction();
	}
	async init() {
		Object.entries(st).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e)), this._parseConfig(this.config);
		let e = {};
		this.$iApi.panel.get("draw-settings") || (e[k] = {
			screens: { "draw-settings-screen": () => we(import("./draw-defaults-screen-DFkf9UnF.js")) },
			style: { width: "350px" },
			button: {
				tooltip: "draw.defaults.title",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.31-.6-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.05.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.22.37.31.6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.18-.58 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z\"/></svg>"
			},
			alertName: "draw.defaults.title"
		}), this.$iApi.panel.get("draw-shape-details") || (e[A] = {
			screens: { "draw-shape-details-screen": () => we(import("./shape-inspector-screen-V0wBD_gP.js")) },
			style: { width: "350px" },
			button: {
				tooltip: "draw.inspector.title",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M11 10h2v7h-2v-7zm0-3h2v2h-2V7zm1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z\"/></svg>"
			},
			alertName: "draw.inspector.title"
		}), this.$iApi.panel.get("draw-import") || (e[x] = {
			screens: { "draw-import-shape-screen": () => we(import("./import-shape-screen-BR-YxQw9.js")) },
			style: { width: "350px" },
			alertName: "draw.import.title"
		}), Object.keys(e).length && (this.$iApi.panel.register(e, { i18n: { messages: st } }), this.handlePanelTeleports([
			k,
			A,
			x
		])), ae(this.$vApp.$pinia).supportedTypes.forEach((e) => {
			let t = `${e.type}-icon`;
			this.$iApi.component(t, we(I(/* #__PURE__ */ Object.assign({
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
		let { destroy: r } = this.mount(it, {
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
			e.removeButton(k), e.removeButton(A), e.removeButton(x);
		}
		this.$iApi.panel.remove(k), this.$iApi.panel.remove(A), this.$iApi.panel.remove(x);
	}
};
//#endregion
export { ct as default };
