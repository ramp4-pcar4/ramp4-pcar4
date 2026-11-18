import { Q as e, Z as t } from "./main-DxKmGvij.js";
import { w as n } from "./esri-2n-dWuus.js";
import { t as r } from "./copy-icon-BTHXI107.js";
import { t as i } from "./delete-icon-B-Mk6xpM.js";
import { t as a } from "./download-icon-BPJDrGJ4.js";
import { t as o } from "./identify-icon-gS_UZgbM.js";
import { t as s } from "./info-icon-BjQKxPhf.js";
import { t as c } from "./color-control-D6DbRA40.js";
import { a as ee, c as te, d as ne, f as re, i as ie, l as ae, n as oe, o as se, p as ce, r as le, s as ue, u as de } from "./draw-CtMlJrZR.js";
import { _ as fe, d as pe, g as me, h as he, i as ge, l as _e, t as ve, v as ye } from "./store-C2phcvMU.js";
import { t as be } from "./_plugin-vue_export-helper-Djzt4Yr7.js";
import { Fragment as l, Transition as xe, computed as u, createBlock as Se, createCommentVNode as d, createElementBlock as f, createElementVNode as p, createTextVNode as m, createVNode as h, defineComponent as g, inject as Ce, nextTick as we, normalizeClass as _, normalizeStyle as Te, onUnmounted as Ee, openBlock as v, ref as y, renderList as b, resolveComponent as De, resolveDirective as Oe, toDisplayString as x, toRaw as ke, unref as S, vModelCheckbox as Ae, vModelRadio as je, vModelSelect as Me, vModelText as Ne, watch as Pe, withCtx as C, withDirectives as w, withKeys as T, withModifiers as E } from "vue";
import { useI18n as Fe } from "vue-i18n";
import Ie from "vue-slider-component";
import "vue-slider-component/theme/default.css";
// src/fixtures/draw/shape-inspector-screen.vue?vue&type=script&setup=true&lang.ts
var Le = { class: "rv-header-title" }, Re = {
	key: 0,
	class: "rv-header-subtitle"
}, ze = { class: "rv-details-content flex flex-col" }, Be = ["aria-label"], Ve = [
	"aria-selected",
	"onClick",
	"onKeydown"
], He = {
	key: 0,
	class: "rv-empty-state"
}, Ue = {
	key: 1,
	class: "rv-tab-panels"
}, We = {
	key: "details",
	role: "tabpanel",
	class: "rv-tab-panel"
}, Ge = { class: "rv-summary-card" }, Ke = { class: "rv-detail-row" }, qe = { class: "rv-detail-label" }, Je = { class: "rv-detail-value" }, Ye = { class: "rv-detail-row" }, Xe = { class: "rv-detail-label" }, Ze = { class: "rv-detail-value" }, Qe = { class: "rv-detail-row" }, $e = { class: "rv-detail-label" }, et = { class: "rv-detail-value" }, tt = { class: "rv-details-section-header" }, nt = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, rt = { class: "rv-subsection rv-detail-grid" }, it = { class: "rv-detail-label" }, at = { class: "rv-detail-value" }, ot = {
	key: 1,
	class: "rv-detail-row"
}, st = { class: "rv-detail-label" }, ct = { class: "rv-detail-value" }, lt = { class: "rv-details-section-header" }, ut = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, dt = [
	"title",
	"aria-label",
	"disabled"
], ft = { class: "rv-subsection" }, pt = { class: "rv-detail-grid" }, mt = { class: "rv-detail-row" }, ht = { class: "rv-detail-label" }, gt = { class: "rv-detail-value" }, _t = {
	key: 0,
	class: "rv-detail-row"
}, vt = { class: "rv-detail-label" }, yt = { class: "rv-detail-value" }, bt = { class: "rv-detail-row" }, xt = { class: "rv-detail-label rv-inline-label" }, St = ["aria-label", "content"], Ct = { class: "rv-detail-value" }, wt = {
	key: 0,
	class: "rv-muted mt-6"
}, Tt = { class: "rv-details-section-header" }, Et = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, Dt = { class: "rv-subsection" }, Ot = { class: "rv-detail-label mb-4" }, kt = { class: "rv-inline-value" }, At = { class: "rv-coordinate-text" }, jt = ["title", "aria-label"], Mt = { class: "rv-subsection" }, Nt = { class: "rv-detail-label mb-4" }, Pt = { class: "rv-bounds-card" }, Ft = { class: "rv-bounds-line" }, It = { class: "rv-bounds-line" }, Lt = ["aria-expanded"], Rt = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, zt = { class: "rv-count-badge" }, Bt = {
	key: 0,
	class: "rv-collapse-body"
}, Vt = { class: "rv-subsection" }, Ht = { class: "rv-segment-rows" }, Ut = [
	"onMouseenter",
	"onFocus",
	"onClick",
	"onKeydown"
], Wt = { class: "rv-detail-label rv-segment-letter" }, Gt = { class: "rv-segment-pair" }, Kt = { class: "rv-detail-value" }, qt = [
	"title",
	"aria-label",
	"onClick",
	"onKeydown"
], Jt = { class: "rv-section-actions" }, Yt = ["title", "aria-label"], Xt = ["aria-expanded"], Zt = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, Qt = { class: "rv-count-badge" }, $t = {
	key: 0,
	class: "rv-collapse-body"
}, en = { class: "rv-subsection" }, tn = { class: "rv-vertex-rows" }, nn = [
	"onMouseenter",
	"onFocus",
	"onClick",
	"onKeydown"
], rn = { class: "rv-detail-label" }, an = { class: "rv-coordinate-text" }, on = [
	"title",
	"aria-label",
	"onClick",
	"onKeydown"
], sn = { class: "rv-section-actions" }, cn = ["title", "aria-label"], ln = { class: "rv-content-actions" }, un = ["title", "aria-label"], dn = {
	key: "style",
	role: "tabpanel",
	class: "rv-tab-panel"
}, fn = { class: "rv-notice" }, pn = { class: "rv-subsection" }, mn = { class: "rv-details-section-title block mb-8" }, hn = { class: "rv-preset-grid" }, gn = ["onClick"], _n = { class: "rv-subsection" }, vn = { class: "rv-style-preview" }, yn = { class: "rv-details-section-header" }, bn = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, xn = { class: "rv-subsection flex flex-col gap-12" }, Sn = { class: "rv-subsection" }, Cn = {
	class: "rv-label",
	for: "draw-selected-opacity"
}, wn = { class: "flex flex-row items-center" }, Tn = { class: "rv-opacity-value" }, En = {
	key: "edit",
	role: "tabpanel",
	class: "rv-tab-panel"
}, Dn = ["aria-label"], On = { class: "rv-subsection rv-detail-grid" }, kn = { class: "rv-detail-row" }, An = { class: "rv-detail-label" }, jn = { class: "rv-detail-value" }, Mn = { class: "rv-details-section-header" }, Nn = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, Pn = { class: "rv-subsection rv-detail-grid" }, Fn = { class: "rv-detail-label" }, In = { class: "rv-detail-value" }, Ln = { class: "rv-detail-row" }, Rn = { class: "rv-detail-label" }, zn = { class: "rv-detail-value" }, Bn = { class: "rv-detail-row" }, Vn = { class: "rv-detail-label" }, Hn = { class: "rv-detail-value" }, Un = { class: "rv-details-section-header" }, Wn = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, Gn = { class: "rv-subsection rv-map-options" }, Kn = ["disabled"], qn = { class: "rv-checkbox-row" }, Jn = { class: "rv-checkbox-row" }, Yn = { class: "rv-checkbox-row" }, Xn = { class: "rv-details-section-header" }, Zn = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, Qn = { class: "rv-subsection" }, $n = {
	class: "rv-label",
	for: "draw-selected-buffer-distance"
}, er = { class: "flex flex-row gap-8" }, tr = ["value"], nr = { class: "rv-subsection" }, rr = { class: "rv-label" }, ir = { class: "flex flex-col gap-8" }, ar = { class: "flex items-start gap-8" }, or = { class: "flex items-start gap-8" }, sr = { class: "flex items-start gap-8" }, cr = { class: "rv-confirm-text" }, lr = { class: "rv-confirm-buttons" }, ur = ["title", "aria-label"], D = /*#__PURE__*/ be(/* @__PURE__ */ g({
	__name: "shape-inspector-screen",
	props: {
		panel: {
			type: Object,
			required: !0
		},
		initialTab: {
			type: String,
			default: "details"
		},
		tabRequestId: {
			type: Number,
			default: 0
		}
	},
	setup(be) {
		let g = be, { t: D, locale: dr } = Fe(), O = Ce("iApi"), k = ve(), A = y(g.initialTab), j = y(!1), M = y([]), N = y([]), P = y([]), F = y(""), fr = y([]), pr = y(null), I = y(!1), L = y(!1), R = y(!1), mr = 0, z = [
			{
				id: "details",
				labelKey: "draw.inspector.tab.details"
			},
			{
				id: "style",
				labelKey: "draw.inspector.tab.style"
			},
			{
				id: "edit",
				labelKey: "draw.inspector.tab.edit"
			}
		], B = u(() => k.getSelectedGraphic()), V = u(() => B.value?.id ?? B.value?.attributes?.id), hr = u(() => ke(B.value?.geometry)), H = u(() => B.value?.attributes), U = u(() => ye(H.value)), W = u(() => he(H.value)), G = u(() => fe(H.value)), gr = u(() => B.value?.type ?? H.value?.type ?? hr.value?.type), _r = u(() => D(`draw.details.shapeType.${gr.value ?? "unknown"}`)), vr = u(() => `${_r.value} - ${J.value > 0 ? D("draw.inspector.subtitle.segments", { count: J.value }) : D("draw.inspector.subtitle.selected")}`), K = u(() => [
			"polyline",
			"polygon",
			"rectangle"
		].includes(gr.value ?? "")), yr = u(() => K.value && N.value.length > 0), br = u(() => P.value.length), xr = u(() => hr.value?.type === "polygon"), Sr = u(() => W.value.distance > 0), Cr = u(() => me(H.value, k.identifyBufferMode)), q = u(() => {
			let e = V.value;
			return e ? k.shapeFeatureCounts[e] : void 0;
		}), J = u(() => N.value.length), wr = u(() => P.value.map((e) => `${e.index}. ${e.coordinates}`).join("\n")), Tr = u(() => N.value.map((e) => e.copyText).join("\n")), Er = u(() => N.value.length > 10), Dr = u(() => P.value.length > 10), Y = (e) => fr.value.find((t) => t.key === e)?.value ?? D("draw.details.notAvailable"), Or = u({
			get: () => U.value.opacity,
			set: (e) => k.setSelectedGraphicOpacity(e)
		}), kr = u({
			get: () => W.value.distance,
			set: (e) => k.setSelectedGraphicBufferDistance(e)
		}), Ar = u({
			get: () => W.value.unit,
			set: (e) => k.setSelectedGraphicBufferUnit(e)
		}), X = u({
			get: () => Cr.value,
			set: (e) => k.setSelectedGraphicIdentifyBufferMode(e)
		}), jr = [
			{
				key: "default",
				labelKey: "draw.inspector.style.preset.default",
				color: "#0099db"
			},
			{
				key: "highlight",
				labelKey: "draw.inspector.style.preset.highlight",
				color: "#2563eb"
			},
			{
				key: "muted",
				labelKey: "draw.inspector.style.preset.muted",
				color: "#64748b"
			},
			{
				key: "alert",
				labelKey: "draw.inspector.style.preset.alert",
				color: "#dc2626"
			}
		], Mr = u(() => {
			if (!Sr.value) return D("draw.details.featureCounts.totalHint.noBuffer");
			switch (Cr.value) {
				case "shape": return D("draw.details.featureCounts.totalHint.shape");
				case "buffer-only": return D("draw.details.featureCounts.totalHint.bufferOnly");
				default: return D("draw.details.featureCounts.totalHint.shapeBuffer");
			}
		}), Nr = (e) => {
			let t = V.value;
			t && k.setGraphicMapLabelSettings(String(t), e);
		}, Pr = u({
			get: () => G.value.areaLabel,
			set: (e) => Nr({ areaLabel: xr.value && e })
		}), Fr = u({
			get: () => G.value.segmentLength,
			set: (e) => Nr({ segmentLength: e })
		}), Ir = u({
			get: () => G.value.segmentLetters,
			set: (e) => Nr({ segmentLetters: e })
		}), Lr = u({
			get: () => G.value.vertexNumbers,
			set: (e) => Nr({ vertexNumbers: e })
		}), Z = (e, t) => e.toLocaleString(dr.value, {
			maximumFractionDigits: t,
			minimumFractionDigits: 0
		}), Rr = (e) => ee(e, dr.value).display, zr = (e) => {
			let t = Math.abs(e);
			if (t >= 1e6) {
				let e = t / 1e6;
				return `${Z(e, e >= 10 ? 1 : 2)} km\u00b2`;
			}
			if (t >= 1e4) {
				let e = t / 1e4;
				return `${Z(e, e >= 10 ? 1 : 2)} ha`;
			}
			return `${Z(t, t >= 100 ? 0 : t >= 10 ? 1 : 2)} m\u00b2`;
		}, Br = async (e, t) => {
			if (!e) return [];
			await se(), await ne();
			let n = [], r;
			if (e.type === "polyline") {
				let t = ae(e);
				t !== void 0 && n.push({
					key: "length",
					label: D("draw.details.measurements.length"),
					value: Rr(t)
				});
			}
			if (e.type === "polygon") {
				let t = e, i = ue(t), a = te(t);
				i !== void 0 && n.push({
					key: "perimeter",
					label: D("draw.details.measurements.perimeter"),
					value: Rr(i)
				}), a !== void 0 && (r = a, n.push({
					key: "area",
					label: D("draw.details.measurements.area"),
					value: zr(a)
				}));
			}
			if (t.distance > 0) {
				let i = de(e, t);
				if (i) {
					let t = te(i), a = ue(i), o = e.type === "polygon" ? r : 0, s = t !== void 0 && o !== void 0 ? Math.max(0, t - o) : void 0;
					s !== void 0 && n.push({
						key: "buffer-area",
						label: D("draw.details.measurements.bufferArea"),
						value: zr(s)
					}), a !== void 0 && n.push({
						key: "buffer-perimeter",
						label: D("draw.details.measurements.bufferPerimeter"),
						value: Rr(a)
					});
				}
			}
			return n;
		}, Vr = async (e, t) => !e || !t || !K.value ? [] : (await se(), oe(e, t).map((e) => {
			let t = Rr(e.lengthMeters), n = `${e.startVertexIndex} -> ${e.endVertexIndex}`;
			return {
				key: e.key,
				letter: e.letter,
				pair: n,
				length: t,
				lengthMeters: e.lengthMeters,
				copyText: `${e.letter} ${n} ${t}`
			};
		})), Hr = (n) => new t("draw-coordinate", [n.x, n.y], n.spatialReference ? e.fromESRI(n.spatialReference) : e.latLongSR(), !0), Ur = (e) => `${Z(e.y, 5)}, ${Z(e.x, 5)}`, Wr = async (e) => {
			if (!e) return D("draw.details.notAvailable");
			try {
				return await O.geo.map.caption.formatLatLongDD(Hr(e));
			} catch {
				return Ur(e);
			}
		}, Gr = (e, t, n) => `${Z(Math.abs(e), 5)}\u00b0 ${e >= 0 ? t : n}`, Kr = async (e) => await O.geo.proj.projectGeometry(4326, Hr(e)), qr = async (e, t, n, r) => {
			try {
				let i = await Kr(e), a = t === "x" ? i.x : i.y;
				return Gr(a, n, r);
			} catch {
				return Ur(e);
			}
		}, Jr = async (e) => {
			let t = e?.extent;
			if (!t || !e) return [
				{
					key: "north",
					label: D("draw.details.extent.north"),
					value: D("draw.details.notAvailable")
				},
				{
					key: "south",
					label: D("draw.details.extent.south"),
					value: D("draw.details.notAvailable")
				},
				{
					key: "east",
					label: D("draw.details.extent.east"),
					value: D("draw.details.notAvailable")
				},
				{
					key: "west",
					label: D("draw.details.extent.west"),
					value: D("draw.details.notAvailable")
				}
			];
			let r = (t.xmin + t.xmax) / 2, i = (t.ymin + t.ymax) / 2, a = (t, r) => new n({
				x: t,
				y: r,
				spatialReference: e.spatialReference
			});
			return [
				{
					key: "north",
					label: D("draw.details.extent.north"),
					value: await qr(a(r, t.ymax), "y", "N", "S")
				},
				{
					key: "south",
					label: D("draw.details.extent.south"),
					value: await qr(a(r, t.ymin), "y", "N", "S")
				},
				{
					key: "east",
					label: D("draw.details.extent.east"),
					value: await qr(a(t.xmax, i), "x", "E", "W")
				},
				{
					key: "west",
					label: D("draw.details.extent.west"),
					value: await qr(a(t.xmin, i), "x", "E", "W")
				}
			];
		}, Yr = async () => {
			let e = ++mr, t = hr.value, r = W.value;
			if (!B.value || !t) {
				M.value = [], N.value = [], P.value = [], F.value = "", fr.value = [], j.value = !1;
				return;
			}
			j.value = !0;
			let i = ie(t), a = V.value ? String(V.value) : void 0, o = K.value && a ? le(t, a) : [], s = o.map((e) => new n({
				x: e.vertex[0],
				y: e.vertex[1],
				spatialReference: t.spatialReference
			})), [c, ee, te, ne, re] = await Promise.all([
				Br(t, r),
				Vr(t, a),
				Wr(i),
				Promise.all(s.map((e) => Wr(e))),
				Jr(t)
			]);
			e === mr && (M.value = c, N.value = ee, F.value = te, P.value = ne.map((e, t) => ({
				index: t + 1,
				key: o[t].key,
				coordinates: e
			})), fr.value = re, j.value = !1);
		}, Xr = (e) => q.value?.loading && e == null ? D("draw.details.loading") : typeof e == "number" ? Z(e, 0) : D("draw.details.notAvailable"), Q = async (e) => {
			try {
				await navigator.clipboard.writeText(e), O.updateAlert(D("draw.details.coordinatesCopied"));
			} catch {
				O.updateAlert(D("draw.details.coordinatesCopyFailed"));
			}
		}, $ = async (e) => {
			try {
				await navigator.clipboard.writeText(e), O.updateAlert(D("draw.details.segmentCopied"));
			} catch {
				O.updateAlert(D("draw.details.segmentCopyFailed"));
			}
		}, Zr = (e, t) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault(), A.value = t;
				return;
			}
			if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
			e.preventDefault();
			let n = (z.findIndex((e) => e.id === A.value) + (e.key === "ArrowRight" ? 1 : -1) + z.length) % z.length;
			A.value = z[n].id;
		}, Qr = (e) => {
			k.setHoveredSegmentKey(e), k.setHoveredVertexKey(null);
		}, $r = () => {
			k.setHoveredSegmentKey(null);
		}, ei = (e) => {
			k.setSelectedSegmentKey(e), k.setSelectedVertexKey(null);
		}, ti = (e) => {
			k.setHoveredVertexKey(e), k.setHoveredSegmentKey(null);
		}, ni = () => {
			k.setHoveredVertexKey(null);
		}, ri = (e) => {
			k.setSelectedVertexKey(e), k.setSelectedSegmentKey(null);
		}, ii = (e) => k.activeSegmentKey === e, ai = (e) => k.activeVertexKey === e, oi = (e, t) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), ei(t));
		}, si = (e, t) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), ri(t));
		}, ci = () => {
			let e = V.value;
			e && !k.shapeFeatureCounts[e] && k.requestRefreshSelectedGraphicFeatureCounts();
		}, li = () => {
			k.requestIdentifySelectedGraphic();
		}, ui = () => {
			R.value = !1, k.requestDeleteSelectedGraphic();
		}, di = () => {
			let e = B.value;
			if (!e) return;
			let t = e.attributes?.type ?? e.type ?? "shape", n = ce([e], re(`ramp-draw-${t}`));
			O.updateAlert(D(n ? "draw.export.shape.success" : "draw.export.none"));
		}, fi = () => {
			k.setSelectedGraphicStyleSettings(pe(k.styleSettings)), k.setSelectedGraphicBufferSettings(_e(k.bufferSettings)), k.setSelectedGraphicIdentifyBufferMode(k.identifyBufferMode);
		}, pi = (e) => {
			if (e === "default") {
				fi();
				return;
			}
			let t = {
				highlight: {
					fillColor: "#2563eb",
					borderColor: "#1e3a8a",
					bufferColor: "#93c5fd",
					opacity: 42
				},
				muted: {
					fillColor: "#64748b",
					borderColor: "#334155",
					bufferColor: "#cbd5e1",
					opacity: 30
				},
				alert: {
					fillColor: "#dc2626",
					borderColor: "#7f1d1d",
					bufferColor: "#fca5a5",
					opacity: 42
				}
			}[e];
			t && k.setSelectedGraphicStyleSettings({
				...t,
				borderColorManual: !0,
				bufferColorManual: !0
			});
		};
		return Pe(() => g.tabRequestId, () => {
			A.value = g.initialTab;
		}), Pe(A, (e) => {
			R.value = !1, k.setShapeDetailsActiveTab(e), k.setShapeDetailsLabelsVisible(e === "details" || e === "style"), k.setShapeDetailsLabelsUseSettings(e === "edit"), e === "edit" ? (V.value && k.activeTool !== "edit" && (k.setActiveTool("edit"), k.requestEditSelectedGraphic()), we(() => pr.value?.focus())) : k.activeTool === "edit" && k.requestStopEditMode(!1);
		}, { immediate: !0 }), Pe(V, () => {
			I.value = !1, L.value = !1, R.value = !1, Yr(), ci();
		}), Pe(() => [
			hr.value,
			W.value.distance,
			W.value.unit,
			k.selectedGraphicSettingsUpdateRequestId
		], () => {
			Yr(), ci();
		}, { immediate: !0 }), Ee(() => {
			k.setShapeDetailsActiveTab("details"), k.setShapeDetailsLabelsVisible(!1), k.setShapeDetailsLabelsUseSettings(!1);
		}), (e, t) => {
			let n = De("panel-screen"), ee = Oe("tippy");
			return v(), Se(n, { panel: be.panel }, {
				header: C(() => [p("div", Le, [p("span", null, x(S(D)("draw.inspector.title")), 1), B.value ? (v(), f("span", Re, x(vr.value), 1)) : d("", !0)])]),
				content: C(() => [p("div", ze, [p("div", {
					class: "rv-tab-list",
					role: "tablist",
					"aria-label": S(D)("draw.inspector.title")
				}, [(v(), f(l, null, b(z, (e) => p("button", {
					key: e.id,
					type: "button",
					class: _(["rv-tab-button", { "rv-active-tab": A.value === e.id }]),
					role: "tab",
					"aria-selected": A.value === e.id,
					tabindex: "0",
					onClick: (t) => A.value = e.id,
					onKeydown: (t) => Zr(t, e.id)
				}, x(S(D)(e.labelKey)), 43, Ve)), 64))], 8, Be), B.value ? (v(), f("div", Ue, [A.value === "details" ? (v(), f("div", We, [
					p("div", Ge, [
						p("div", Ke, [p("span", qe, x(S(D)("draw.details.shapeType")), 1), p("span", Je, x(_r.value), 1)]),
						p("div", Ye, [p("span", Xe, x(S(D)("draw.details.segments")), 1), p("span", Ze, x(J.value), 1)]),
						p("div", Qe, [p("span", $e, x(S(D)("draw.details.vertexCount")), 1), p("span", et, x(br.value || S(D)("draw.details.notAvailable")), 1)])
					]),
					p("div", tt, [p("span", nt, x(S(D)("draw.details.measurements")), 1)]),
					p("div", rt, [M.value.length ? (v(!0), f(l, { key: 0 }, b(M.value, (e) => (v(), f("div", {
						key: e.key,
						class: "rv-detail-row"
					}, [p("span", it, x(e.label), 1), p("span", at, x(e.value), 1)]))), 128)) : (v(), f("div", ot, [p("span", st, x(S(D)("draw.details.measurements")), 1), p("span", ct, x(j.value ? S(D)("draw.details.loading") : S(D)("draw.details.notAvailable")), 1)]))]),
					p("div", lt, [p("span", ut, x(S(D)("draw.details.featureCounts")), 1), p("button", {
						type: "button",
						class: "rv-action-button",
						title: S(D)("draw.details.action.runIdentify"),
						"aria-label": S(D)("draw.details.action.runIdentify"),
						disabled: q.value?.loading,
						onClick: li
					}, [h(o, { class: "w-16 h-16" }), p("span", null, x(S(D)("draw.details.action.runIdentify")), 1)], 8, dt)]),
					p("div", ft, [p("div", pt, [
						p("div", mt, [p("span", ht, x(S(D)("draw.details.featureCounts.shape")), 1), p("span", gt, x(Xr(q.value?.shape)), 1)]),
						Sr.value ? (v(), f("div", _t, [p("span", vt, x(S(D)("draw.details.featureCounts.buffer")), 1), p("span", yt, x(Xr(q.value?.buffer)), 1)])) : d("", !0),
						p("div", bt, [p("span", xt, [m(x(S(D)("draw.details.featureCounts.total")) + " ", 1), w((v(), f("button", {
							type: "button",
							class: "rv-info-button",
							"aria-label": Mr.value,
							content: Mr.value
						}, [h(s, { class: "w-16 h-16" })], 8, St)), [[ee, {
							placement: "top",
							theme: "ramp4",
							animation: "scale"
						}]])]), p("span", Ct, x(Xr(q.value?.total)), 1)])
					]), q.value?.loading ? (v(), f("div", wt, x(S(D)("draw.details.identify.loading")), 1)) : d("", !0)]),
					p("div", Tt, [p("span", Et, x(S(D)("draw.inspector.geometry")), 1)]),
					p("div", Dt, [p("div", Ot, x(S(D)("draw.details.location.centroid")), 1), p("div", kt, [p("span", At, x(F.value), 1), p("button", {
						type: "button",
						class: "rv-icon-button",
						title: S(D)("draw.details.action.copyCoordinates"),
						"aria-label": S(D)("draw.details.action.copyCoordinates"),
						onClick: t[0] ||= (e) => Q(F.value),
						onKeydown: t[1] ||= T(E((e) => Q(F.value), ["stop", "prevent"]), ["enter"])
					}, [h(r, { class: "w-16 h-16" })], 40, jt)])]),
					p("div", Mt, [p("div", Nt, x(S(D)("draw.details.extent")), 1), p("div", Pt, [p("div", Ft, [p("span", null, [t[20] ||= p("strong", null, "N", -1), m(" " + x(Y("north")), 1)]), p("span", null, [t[21] ||= p("strong", null, "S", -1), m(" " + x(Y("south")), 1)])]), p("div", It, [p("span", null, [t[22] ||= p("strong", null, "E", -1), m(" " + x(Y("east")), 1)]), p("span", null, [t[23] ||= p("strong", null, "W", -1), m(" " + x(Y("west")), 1)])])])]),
					yr.value ? (v(), f(l, { key: 0 }, [p("button", {
						type: "button",
						class: "rv-details-section-header rv-collapsible-header",
						"aria-expanded": I.value,
						onClick: t[2] ||= (e) => I.value = !I.value
					}, [
						p("span", Rt, x(S(D)("draw.details.segments")), 1),
						p("span", zt, x(J.value), 1),
						p("span", { class: _(["rv-section-chevron", { "rv-expanded": I.value }]) }, null, 2)
					], 8, Lt), h(xe, { name: "rv-collapse" }, {
						default: C(() => [I.value ? (v(), f("div", Bt, [p("div", Vt, [p("div", { class: _(["rv-segment-list", { "rv-scrollable-list": Er.value }]) }, [p("div", Ht, [(v(!0), f(l, null, b(N.value, (e) => (v(), f("div", {
							key: e.key,
							class: _(["rv-segment-row", { "rv-active-row": ii(e.key) }]),
							role: "button",
							tabindex: "0",
							onMouseenter: (t) => Qr(e.key),
							onMouseleave: $r,
							onFocus: (t) => Qr(e.key),
							onBlur: $r,
							onClick: (t) => ei(e.key),
							onKeydown: (t) => oi(t, e.key)
						}, [
							p("span", Wt, x(e.letter), 1),
							p("span", Gt, x(e.pair), 1),
							p("span", Kt, x(e.length), 1),
							p("button", {
								type: "button",
								class: "rv-icon-button",
								title: S(D)("draw.details.action.copySegment"),
								"aria-label": S(D)("draw.details.action.copySegment"),
								onClick: E((t) => $(e.copyText), ["stop"]),
								onKeydown: T(E((t) => $(e.copyText), ["stop", "prevent"]), ["enter"])
							}, [h(r, { class: "w-16 h-16" })], 40, qt)
						], 42, Ut))), 128))])], 2), p("div", Jt, [p("button", {
							type: "button",
							class: "rv-action-button",
							title: S(D)("draw.details.action.copyAllSegments"),
							"aria-label": S(D)("draw.details.action.copyAllSegments"),
							onClick: t[3] ||= (e) => $(Tr.value),
							onKeydown: t[4] ||= T(E((e) => $(Tr.value), ["stop", "prevent"]), ["enter"])
						}, [h(r, { class: "w-16 h-16" }), p("span", null, x(S(D)("draw.details.action.copyAllCoordinatesShort")), 1)], 40, Yt)])])])) : d("", !0)]),
						_: 1
					})], 64)) : d("", !0),
					K.value ? (v(), f(l, { key: 1 }, [p("button", {
						type: "button",
						class: "rv-details-section-header rv-collapsible-header rv-collapsible-header-spaced",
						"aria-expanded": L.value,
						onClick: t[5] ||= (e) => L.value = !L.value
					}, [
						p("span", Zt, x(S(D)("draw.details.vertices")), 1),
						p("span", Qt, x(br.value), 1),
						p("span", { class: _(["rv-section-chevron", { "rv-expanded": L.value }]) }, null, 2)
					], 8, Xt), h(xe, { name: "rv-collapse" }, {
						default: C(() => [L.value ? (v(), f("div", $t, [p("div", en, [p("div", { class: _(["rv-vertex-list", { "rv-scrollable-list": Dr.value }]) }, [p("div", tn, [(v(!0), f(l, null, b(P.value, (e) => (v(), f("div", {
							key: e.key,
							class: _(["rv-vertex-row", { "rv-active-row": ai(e.key) }]),
							role: "button",
							tabindex: "0",
							onMouseenter: (t) => ti(e.key),
							onMouseleave: ni,
							onFocus: (t) => ti(e.key),
							onBlur: ni,
							onClick: (t) => ri(e.key),
							onKeydown: (t) => si(t, e.key)
						}, [
							p("span", rn, x(e.index), 1),
							p("span", an, x(e.coordinates), 1),
							p("button", {
								type: "button",
								class: "rv-icon-button",
								title: S(D)("draw.details.action.copyCoordinates"),
								"aria-label": S(D)("draw.details.action.copyCoordinates"),
								onClick: E((t) => Q(e.coordinates), ["stop"]),
								onKeydown: T(E((t) => Q(e.coordinates), ["stop", "prevent"]), ["enter"])
							}, [h(r, { class: "w-16 h-16" })], 40, on)
						], 42, nn))), 128))])], 2), p("div", sn, [p("button", {
							type: "button",
							class: "rv-action-button",
							title: S(D)("draw.details.action.copyAllCoordinates"),
							"aria-label": S(D)("draw.details.action.copyAllCoordinates"),
							onClick: t[6] ||= (e) => Q(wr.value),
							onKeydown: t[7] ||= T(E((e) => Q(wr.value), ["stop", "prevent"]), ["enter"])
						}, [h(r, { class: "w-16 h-16" }), p("span", null, x(S(D)("draw.details.action.copyAllCoordinatesShort")), 1)], 40, cn)])])])) : d("", !0)]),
						_: 1
					})], 64)) : d("", !0),
					p("div", ln, [p("button", {
						type: "button",
						class: "rv-action-button",
						title: S(D)("draw.export.shape.tooltip"),
						"aria-label": S(D)("draw.export.shape.tooltip"),
						onClick: di
					}, [h(a, { class: "w-16 h-16" }), p("span", null, x(S(D)("draw.export.action.exportShort")), 1)], 8, un)])
				])) : A.value === "style" ? (v(), f("div", dn, [
					p("p", fn, x(S(D)("draw.inspector.style.notice")), 1),
					p("div", pn, [p("span", mn, x(S(D)("draw.inspector.style.presets")), 1), p("div", hn, [(v(), f(l, null, b(jr, (e) => p("button", {
						key: e.key,
						type: "button",
						class: "rv-preset-button",
						onClick: (t) => pi(e.key)
					}, [p("span", {
						class: "rv-preset-swatch",
						style: Te({ backgroundColor: e.color })
					}, null, 4), p("span", null, x(S(D)(e.labelKey)), 1)], 8, gn)), 64))])]),
					p("div", _n, [p("div", vn, [p("span", {
						class: "rv-style-preview-shape",
						style: Te({
							backgroundColor: U.value.fillColor,
							borderColor: U.value.borderColor,
							opacity: U.value.opacity / 100
						})
					}, null, 4), p("span", {
						class: "rv-style-preview-buffer",
						style: Te({ borderColor: U.value.bufferColor })
					}, null, 4)])]),
					p("div", yn, [p("span", bn, x(S(D)("draw.settings.appearance")), 1)]),
					p("div", xn, [
						h(c, {
							label: S(D)("draw.inspector.style.fillColor"),
							color: U.value.fillColor,
							"control-id": "draw-selected-fill-color",
							"onUpdate:color": S(k).setSelectedGraphicFillColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						]),
						h(c, {
							label: S(D)("draw.inspector.style.borderColor"),
							color: U.value.borderColor,
							"control-id": "draw-selected-border-color",
							"onUpdate:color": S(k).setSelectedGraphicBorderColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						]),
						h(c, {
							label: S(D)("draw.inspector.style.bufferColor"),
							color: U.value.bufferColor,
							"control-id": "draw-selected-buffer-color",
							"onUpdate:color": S(k).setSelectedGraphicBufferColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						])
					]),
					t[24] ||= p("div", { class: "rv-settings-divider" }, null, -1),
					p("div", Sn, [p("label", Cn, x(S(D)("draw.settings.opacity")), 1), p("div", wn, [h(S(Ie), {
						id: "draw-selected-opacity",
						class: "mr-16",
						modelValue: Or.value,
						"onUpdate:modelValue": t[8] ||= (e) => Or.value = e,
						width: 220,
						min: 0,
						max: 100
					}, null, 8, ["modelValue"]), p("span", Tn, x(U.value.opacity) + "%", 1)])])
				])) : (v(), f("div", En, [
					p("div", {
						ref_key: "editBanner",
						ref: pr,
						class: "rv-edit-banner",
						tabindex: "-1",
						role: "status",
						"aria-label": S(D)("draw.inspector.edit.active")
					}, [
						p("strong", null, x(S(D)("draw.inspector.edit.active")), 1),
						p("span", null, x(S(D)("draw.inspector.edit.guidance")), 1),
						p("span", null, x(S(D)("draw.inspector.edit.vertexToggleHint")), 1)
					], 8, Dn),
					p("div", On, [p("div", kn, [p("span", An, x(S(D)("draw.inspector.edit.shapeId")), 1), p("span", jn, x(V.value), 1)])]),
					p("div", Mn, [p("span", Nn, x(S(D)("draw.details.measurements")), 1)]),
					p("div", Pn, [
						M.value.length ? (v(!0), f(l, { key: 0 }, b(M.value, (e) => (v(), f("div", {
							key: e.key,
							class: "rv-detail-row"
						}, [p("span", Fn, x(e.label), 1), p("span", In, x(e.value), 1)]))), 128)) : d("", !0),
						p("div", Ln, [p("span", Rn, x(S(D)("draw.details.vertices")), 1), p("span", zn, x(br.value || S(D)("draw.details.notAvailable")), 1)]),
						p("div", Bn, [p("span", Vn, x(S(D)("draw.details.segments")), 1), p("span", Hn, x(J.value), 1)])
					]),
					p("div", Un, [p("span", Wn, x(S(D)("draw.inspector.edit.aids")), 1)]),
					p("fieldset", Gn, [
						p("label", { class: _(["rv-checkbox-row", { "rv-disabled-option": !xr.value }]) }, [w(p("input", {
							"onUpdate:modelValue": t[9] ||= (e) => Pr.value = e,
							type: "checkbox",
							disabled: !xr.value
						}, null, 8, Kn), [[Ae, Pr.value]]), p("span", null, x(S(D)("draw.details.showOnMap.areaLabel")), 1)], 2),
						p("label", qn, [w(p("input", {
							"onUpdate:modelValue": t[10] ||= (e) => Fr.value = e,
							type: "checkbox"
						}, null, 512), [[Ae, Fr.value]]), p("span", null, x(S(D)("draw.details.showOnMap.segmentLength")), 1)]),
						p("label", Jn, [w(p("input", {
							"onUpdate:modelValue": t[11] ||= (e) => Ir.value = e,
							type: "checkbox"
						}, null, 512), [[Ae, Ir.value]]), p("span", null, x(S(D)("draw.details.showOnMap.segmentLetters")), 1)]),
						p("label", Yn, [w(p("input", {
							"onUpdate:modelValue": t[12] ||= (e) => Lr.value = e,
							type: "checkbox"
						}, null, 512), [[Ae, Lr.value]]), p("span", null, x(S(D)("draw.details.showOnMap.vertexNumbers")), 1)])
					]),
					p("div", Xn, [p("span", Zn, x(S(D)("draw.settings.buffer")), 1)]),
					p("div", Qn, [p("label", $n, x(S(D)("draw.settings.buffer.distance")), 1), p("div", er, [w(p("input", {
						id: "draw-selected-buffer-distance",
						class: "rv-input rv-buffer-distance-input",
						type: "number",
						min: "0",
						max: "9999999999",
						step: "1",
						"onUpdate:modelValue": t[13] ||= (e) => kr.value = e
					}, null, 512), [[
						Ne,
						kr.value,
						void 0,
						{ number: !0 }
					]]), w(p("select", {
						class: "rv-select",
						"onUpdate:modelValue": t[14] ||= (e) => Ar.value = e
					}, [(v(!0), f(l, null, b(S(ge), (e) => (v(), f("option", {
						key: e.value,
						value: e.value
					}, x(S(D)(e.labelKey)), 9, tr))), 128))], 512), [[Me, Ar.value]])])]),
					p("fieldset", nr, [p("legend", rr, x(S(D)("draw.settings.identifyBufferUses")), 1), p("div", ir, [
						p("label", ar, [w(p("input", {
							type: "radio",
							value: "shape-buffer",
							"onUpdate:modelValue": t[15] ||= (e) => X.value = e
						}, null, 512), [[je, X.value]]), p("span", null, x(S(D)("draw.settings.identify.shapeAndBuffer")), 1)]),
						p("label", or, [w(p("input", {
							type: "radio",
							value: "shape",
							"onUpdate:modelValue": t[16] ||= (e) => X.value = e
						}, null, 512), [[je, X.value]]), p("span", null, x(S(D)("draw.settings.identify.originalShapeOnly")), 1)]),
						p("label", sr, [w(p("input", {
							type: "radio",
							value: "buffer-only",
							"onUpdate:modelValue": t[17] ||= (e) => X.value = e
						}, null, 512), [[je, X.value]]), p("span", null, x(S(D)("draw.settings.identify.bufferOnly")), 1)])
					])]),
					p("div", { class: _(["rv-content-actions", { "rv-confirm-actions": R.value }]) }, [R.value ? (v(), f(l, { key: 0 }, [p("span", cr, x(S(D)("draw.inspector.delete.confirm")), 1), p("span", lr, [p("button", {
						type: "button",
						class: "rv-action-button",
						onClick: t[18] ||= (e) => R.value = !1
					}, x(S(D)("draw.inspector.action.cancel")), 1), p("button", {
						type: "button",
						class: "rv-action-button rv-danger-action-button",
						onClick: ui
					}, x(S(D)("draw.inspector.action.yesDelete")), 1)])], 64)) : (v(), f("button", {
						key: 1,
						type: "button",
						class: "rv-action-button rv-danger-action-button",
						title: S(D)("draw.details.action.deleteShape"),
						"aria-label": S(D)("draw.details.action.deleteShape"),
						onClick: t[19] ||= (e) => R.value = !0
					}, [h(i, { class: "w-16 h-16" }), p("span", null, x(S(D)("draw.details.action.deleteShapeShort")), 1)], 8, ur))], 2)
				]))])) : (v(), f("div", He, x(S(D)("draw.inspector.empty")), 1))])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-4ff4545f"]]);
export { D as default };
