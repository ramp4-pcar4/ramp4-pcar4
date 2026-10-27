import { Q as e, Z as t } from "./main-BToQJL7R.js";
import { w as n } from "./esri-vcEQ1sbb.js";
import { t as r } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { _ as i, d as a, g as o, h as s, i as ee, l as te, t as ne, v as re } from "./store-5SMg2V_Z.js";
import { t as c } from "./color-control-F_ZLf-K_.js";
import { t as ie } from "./download-icon-CfXMdF48.js";
import { t as l } from "./copy-icon-C5hknN_A.js";
import { t as ae } from "./delete-icon-D5_4RJzx.js";
import { t as oe } from "./identify-icon-DJ4o4j0G.js";
import { t as se } from "./info-icon-CUfAYJF_.js";
import { a as ce, c as le, d as ue, f as de, i as fe, l as pe, n as me, o as he, p as ge, r as _e, s as ve, u as ye } from "./draw-CJv4T0pp.js";
import { Fragment as u, Transition as be, computed as d, createBlock as xe, createCommentVNode as f, createElementBlock as p, createElementVNode as m, createTextVNode as h, createVNode as g, defineComponent as _, inject as Se, nextTick as Ce, normalizeClass as v, normalizeStyle as we, onUnmounted as Te, openBlock as y, ref as b, renderList as x, resolveComponent as Ee, resolveDirective as De, toDisplayString as S, toRaw as Oe, unref as C, vModelCheckbox as ke, vModelRadio as Ae, vModelSelect as je, vModelText as Me, watch as w, withCtx as T, withDirectives as E, withKeys as D, withModifiers as O } from "vue";
import { useI18n as Ne } from "vue-i18n";
import Pe from "vue-slider-component";
import "vue-slider-component/theme/default.css";
//#region src/fixtures/draw/shape-inspector-screen.vue?vue&type=script&setup=true&lang.ts
var Fe = { class: "rv-header-title" }, Ie = {
	key: 0,
	class: "rv-header-subtitle"
}, Le = { class: "rv-details-content flex flex-col" }, Re = ["aria-label"], ze = [
	"aria-selected",
	"onClick",
	"onKeydown"
], Be = {
	key: 0,
	class: "rv-empty-state"
}, Ve = {
	key: 1,
	class: "rv-tab-panels"
}, He = {
	key: "details",
	role: "tabpanel",
	class: "rv-tab-panel"
}, Ue = { class: "rv-summary-card" }, We = { class: "rv-detail-row" }, Ge = { class: "rv-detail-label" }, Ke = { class: "rv-detail-value" }, qe = { class: "rv-detail-row" }, Je = { class: "rv-detail-label" }, Ye = { class: "rv-detail-value" }, Xe = { class: "rv-detail-row" }, Ze = { class: "rv-detail-label" }, Qe = { class: "rv-detail-value" }, $e = { class: "rv-details-section-header" }, et = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, tt = { class: "rv-subsection rv-detail-grid" }, nt = { class: "rv-detail-label" }, rt = { class: "rv-detail-value" }, it = {
	key: 1,
	class: "rv-detail-row"
}, at = { class: "rv-detail-label" }, ot = { class: "rv-detail-value" }, st = { class: "rv-details-section-header" }, ct = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, lt = [
	"title",
	"aria-label",
	"disabled"
], ut = { class: "rv-subsection" }, dt = { class: "rv-detail-grid" }, ft = { class: "rv-detail-row" }, pt = { class: "rv-detail-label" }, mt = { class: "rv-detail-value" }, ht = {
	key: 0,
	class: "rv-detail-row"
}, gt = { class: "rv-detail-label" }, _t = { class: "rv-detail-value" }, vt = { class: "rv-detail-row" }, yt = { class: "rv-detail-label rv-inline-label" }, bt = ["aria-label", "content"], xt = { class: "rv-detail-value" }, St = {
	key: 0,
	class: "rv-muted mt-6"
}, Ct = { class: "rv-details-section-header" }, wt = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, Tt = { class: "rv-subsection" }, Et = { class: "rv-detail-label mb-4" }, Dt = { class: "rv-inline-value" }, Ot = { class: "rv-coordinate-text" }, kt = ["title", "aria-label"], At = { class: "rv-subsection" }, jt = { class: "rv-detail-label mb-4" }, Mt = { class: "rv-bounds-card" }, Nt = { class: "rv-bounds-line" }, Pt = { class: "rv-bounds-line" }, Ft = ["aria-expanded"], It = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, Lt = { class: "rv-count-badge" }, Rt = {
	key: 0,
	class: "rv-collapse-body"
}, zt = { class: "rv-subsection" }, Bt = { class: "rv-segment-rows" }, Vt = [
	"onMouseenter",
	"onFocus",
	"onClick",
	"onKeydown"
], Ht = { class: "rv-detail-label rv-segment-letter" }, Ut = { class: "rv-segment-pair" }, Wt = { class: "rv-detail-value" }, Gt = [
	"title",
	"aria-label",
	"onClick",
	"onKeydown"
], Kt = { class: "rv-section-actions" }, qt = ["title", "aria-label"], Jt = ["aria-expanded"], Yt = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, Xt = { class: "rv-count-badge" }, Zt = {
	key: 0,
	class: "rv-collapse-body"
}, Qt = { class: "rv-subsection" }, $t = { class: "rv-vertex-rows" }, en = [
	"onMouseenter",
	"onFocus",
	"onClick",
	"onKeydown"
], tn = { class: "rv-detail-label" }, nn = { class: "rv-coordinate-text" }, rn = [
	"title",
	"aria-label",
	"onClick",
	"onKeydown"
], an = { class: "rv-section-actions" }, on = ["title", "aria-label"], sn = { class: "rv-content-actions" }, cn = ["title", "aria-label"], ln = {
	key: "style",
	role: "tabpanel",
	class: "rv-tab-panel"
}, un = { class: "rv-notice" }, dn = { class: "rv-subsection" }, fn = { class: "rv-details-section-title block mb-8" }, pn = { class: "rv-preset-grid" }, mn = ["onClick"], hn = { class: "rv-subsection" }, gn = { class: "rv-style-preview" }, _n = { class: "rv-details-section-header" }, vn = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, yn = { class: "rv-subsection flex flex-col gap-12" }, bn = { class: "rv-subsection" }, xn = {
	class: "rv-label",
	for: "draw-selected-opacity"
}, Sn = { class: "flex flex-row items-center" }, Cn = { class: "rv-opacity-value" }, wn = {
	key: "edit",
	role: "tabpanel",
	class: "rv-tab-panel"
}, Tn = ["aria-label"], En = { class: "rv-subsection rv-detail-grid" }, Dn = { class: "rv-detail-row" }, On = { class: "rv-detail-label" }, kn = { class: "rv-detail-value" }, An = { class: "rv-details-section-header" }, jn = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, Mn = { class: "rv-subsection rv-detail-grid" }, Nn = { class: "rv-detail-label" }, Pn = { class: "rv-detail-value" }, Fn = { class: "rv-detail-row" }, In = { class: "rv-detail-label" }, Ln = { class: "rv-detail-value" }, Rn = { class: "rv-detail-row" }, zn = { class: "rv-detail-label" }, Bn = { class: "rv-detail-value" }, Vn = { class: "rv-details-section-header" }, Hn = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, Un = { class: "rv-subsection rv-map-options" }, Wn = ["disabled"], Gn = { class: "rv-checkbox-row" }, Kn = { class: "rv-checkbox-row" }, qn = { class: "rv-checkbox-row" }, Jn = { class: "rv-details-section-header" }, Yn = {
	class: "rv-details-section-title",
	role: "heading",
	"aria-level": "3"
}, Xn = { class: "rv-subsection" }, Zn = {
	class: "rv-label",
	for: "draw-selected-buffer-distance"
}, Qn = { class: "flex flex-row gap-8" }, $n = ["value"], er = { class: "rv-subsection" }, tr = { class: "rv-label" }, nr = { class: "flex flex-col gap-8" }, rr = { class: "flex items-start gap-8" }, ir = { class: "flex items-start gap-8" }, ar = { class: "flex items-start gap-8" }, or = { class: "rv-confirm-text" }, sr = { class: "rv-confirm-buttons" }, cr = ["title", "aria-label"], k = /*#__PURE__*/ r(/* @__PURE__ */ _({
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
	setup(r) {
		let _ = r, { t: k, locale: lr } = Ne(), A = Se("iApi"), j = ne(), M = b(_.initialTab), ur = b(!1), N = b([]), P = b([]), F = b([]), I = b(""), dr = b([]), fr = b(null), L = b(!1), R = b(!1), z = b(!1), pr = 0, B = [
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
		], V = d(() => j.getSelectedGraphic()), H = d(() => V.value?.id ?? V.value?.attributes?.id), U = d(() => Oe(V.value?.geometry)), W = d(() => V.value?.attributes), G = d(() => re(W.value)), K = d(() => s(W.value)), q = d(() => i(W.value)), mr = d(() => V.value?.type ?? W.value?.type ?? U.value?.type), hr = d(() => k(`draw.details.shapeType.${mr.value ?? "unknown"}`)), gr = d(() => `${hr.value} - ${X.value > 0 ? k("draw.inspector.subtitle.segments", { count: X.value }) : k("draw.inspector.subtitle.selected")}`), J = d(() => [
			"polyline",
			"polygon",
			"rectangle"
		].includes(mr.value ?? "")), _r = d(() => J.value && P.value.length > 0), vr = d(() => F.value.length), yr = d(() => U.value?.type === "polygon"), br = d(() => K.value.distance > 0), xr = d(() => o(W.value, j.identifyBufferMode)), Y = d(() => {
			let e = H.value;
			return e ? j.shapeFeatureCounts[e] : void 0;
		}), X = d(() => P.value.length), Sr = d(() => F.value.map((e) => `${e.index}. ${e.coordinates}`).join("\n")), Cr = d(() => P.value.map((e) => e.copyText).join("\n")), wr = d(() => P.value.length > 10), Tr = d(() => F.value.length > 10), Er = (e) => dr.value.find((t) => t.key === e)?.value ?? k("draw.details.notAvailable"), Dr = d({
			get: () => G.value.opacity,
			set: (e) => j.setSelectedGraphicOpacity(e)
		}), Or = d({
			get: () => K.value.distance,
			set: (e) => j.setSelectedGraphicBufferDistance(e)
		}), kr = d({
			get: () => K.value.unit,
			set: (e) => j.setSelectedGraphicBufferUnit(e)
		}), Z = d({
			get: () => xr.value,
			set: (e) => j.setSelectedGraphicIdentifyBufferMode(e)
		}), Ar = [
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
		], jr = d(() => {
			if (!br.value) return k("draw.details.featureCounts.totalHint.noBuffer");
			switch (xr.value) {
				case "shape": return k("draw.details.featureCounts.totalHint.shape");
				case "buffer-only": return k("draw.details.featureCounts.totalHint.bufferOnly");
				default: return k("draw.details.featureCounts.totalHint.shapeBuffer");
			}
		}), Mr = (e) => {
			let t = H.value;
			t && j.setGraphicMapLabelSettings(String(t), e);
		}, Nr = d({
			get: () => q.value.areaLabel,
			set: (e) => Mr({ areaLabel: yr.value && e })
		}), Pr = d({
			get: () => q.value.segmentLength,
			set: (e) => Mr({ segmentLength: e })
		}), Fr = d({
			get: () => q.value.segmentLetters,
			set: (e) => Mr({ segmentLetters: e })
		}), Ir = d({
			get: () => q.value.vertexNumbers,
			set: (e) => Mr({ vertexNumbers: e })
		}), Q = (e, t) => e.toLocaleString(lr.value, {
			maximumFractionDigits: t,
			minimumFractionDigits: 0
		}), Lr = (e) => ce(e, lr.value).display, Rr = (e) => {
			let t = Math.abs(e);
			if (t >= 1e6) {
				let e = t / 1e6;
				return `${Q(e, e >= 10 ? 1 : 2)} km\u00b2`;
			}
			if (t >= 1e4) {
				let e = t / 1e4;
				return `${Q(e, e >= 10 ? 1 : 2)} ha`;
			}
			return `${Q(t, t >= 100 ? 0 : t >= 10 ? 1 : 2)} m\u00b2`;
		}, zr = async (e, t) => {
			if (!e) return [];
			await he(), await ue();
			let n = [], r;
			if (e.type === "polyline") {
				let t = pe(e);
				t !== void 0 && n.push({
					key: "length",
					label: k("draw.details.measurements.length"),
					value: Lr(t)
				});
			}
			if (e.type === "polygon") {
				let t = e, i = ve(t), a = le(t);
				i !== void 0 && n.push({
					key: "perimeter",
					label: k("draw.details.measurements.perimeter"),
					value: Lr(i)
				}), a !== void 0 && (r = a, n.push({
					key: "area",
					label: k("draw.details.measurements.area"),
					value: Rr(a)
				}));
			}
			if (t.distance > 0) {
				let i = ye(e, t);
				if (i) {
					let t = le(i), a = ve(i), o = e.type === "polygon" ? r : 0, s = t !== void 0 && o !== void 0 ? Math.max(0, t - o) : void 0;
					s !== void 0 && n.push({
						key: "buffer-area",
						label: k("draw.details.measurements.bufferArea"),
						value: Rr(s)
					}), a !== void 0 && n.push({
						key: "buffer-perimeter",
						label: k("draw.details.measurements.bufferPerimeter"),
						value: Lr(a)
					});
				}
			}
			return n;
		}, Br = async (e, t) => !e || !t || !J.value ? [] : (await he(), me(e, t).map((e) => {
			let t = Lr(e.lengthMeters), n = `${e.startVertexIndex} -> ${e.endVertexIndex}`;
			return {
				key: e.key,
				letter: e.letter,
				pair: n,
				length: t,
				lengthMeters: e.lengthMeters,
				copyText: `${e.letter} ${n} ${t}`
			};
		})), Vr = (n) => new t("draw-coordinate", [n.x, n.y], n.spatialReference ? e.fromESRI(n.spatialReference) : e.latLongSR(), !0), Hr = (e) => `${Q(e.y, 5)}, ${Q(e.x, 5)}`, Ur = async (e) => {
			if (!e) return k("draw.details.notAvailable");
			try {
				return await A.geo.map.caption.formatLatLongDD(Vr(e));
			} catch {
				return Hr(e);
			}
		}, Wr = (e, t, n) => `${Q(Math.abs(e), 5)}\u00b0 ${e >= 0 ? t : n}`, Gr = async (e) => await A.geo.proj.projectGeometry(4326, Vr(e)), Kr = async (e, t, n, r) => {
			try {
				let i = await Gr(e), a = t === "x" ? i.x : i.y;
				return Wr(a, n, r);
			} catch {
				return Hr(e);
			}
		}, qr = async (e) => {
			let t = e?.extent;
			if (!t || !e) return [
				{
					key: "north",
					label: k("draw.details.extent.north"),
					value: k("draw.details.notAvailable")
				},
				{
					key: "south",
					label: k("draw.details.extent.south"),
					value: k("draw.details.notAvailable")
				},
				{
					key: "east",
					label: k("draw.details.extent.east"),
					value: k("draw.details.notAvailable")
				},
				{
					key: "west",
					label: k("draw.details.extent.west"),
					value: k("draw.details.notAvailable")
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
					label: k("draw.details.extent.north"),
					value: await Kr(a(r, t.ymax), "y", "N", "S")
				},
				{
					key: "south",
					label: k("draw.details.extent.south"),
					value: await Kr(a(r, t.ymin), "y", "N", "S")
				},
				{
					key: "east",
					label: k("draw.details.extent.east"),
					value: await Kr(a(t.xmax, i), "x", "E", "W")
				},
				{
					key: "west",
					label: k("draw.details.extent.west"),
					value: await Kr(a(t.xmin, i), "x", "E", "W")
				}
			];
		}, Jr = async () => {
			let e = ++pr, t = U.value, r = K.value;
			if (!V.value || !t) {
				N.value = [], P.value = [], F.value = [], I.value = "", dr.value = [], ur.value = !1;
				return;
			}
			ur.value = !0;
			let i = fe(t), a = H.value ? String(H.value) : void 0, o = J.value && a ? _e(t, a) : [], s = o.map((e) => new n({
				x: e.vertex[0],
				y: e.vertex[1],
				spatialReference: t.spatialReference
			})), [ee, te, ne, re, c] = await Promise.all([
				zr(t, r),
				Br(t, a),
				Ur(i),
				Promise.all(s.map((e) => Ur(e))),
				qr(t)
			]);
			e === pr && (N.value = ee, P.value = te, I.value = ne, F.value = re.map((e, t) => ({
				index: t + 1,
				key: o[t].key,
				coordinates: e
			})), dr.value = c, ur.value = !1);
		}, Yr = (e) => Y.value?.loading && e == null ? k("draw.details.loading") : typeof e == "number" ? Q(e, 0) : k("draw.details.notAvailable"), $ = async (e) => {
			try {
				await navigator.clipboard.writeText(e), A.updateAlert(k("draw.details.coordinatesCopied"));
			} catch {
				A.updateAlert(k("draw.details.coordinatesCopyFailed"));
			}
		}, Xr = async (e) => {
			try {
				await navigator.clipboard.writeText(e), A.updateAlert(k("draw.details.segmentCopied"));
			} catch {
				A.updateAlert(k("draw.details.segmentCopyFailed"));
			}
		}, Zr = (e, t) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault(), M.value = t;
				return;
			}
			if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
			e.preventDefault();
			let n = (B.findIndex((e) => e.id === M.value) + (e.key === "ArrowRight" ? 1 : -1) + B.length) % B.length;
			M.value = B[n].id;
		}, Qr = (e) => {
			j.setHoveredSegmentKey(e), j.setHoveredVertexKey(null);
		}, $r = () => {
			j.setHoveredSegmentKey(null);
		}, ei = (e) => {
			j.setSelectedSegmentKey(e), j.setSelectedVertexKey(null);
		}, ti = (e) => {
			j.setHoveredVertexKey(e), j.setHoveredSegmentKey(null);
		}, ni = () => {
			j.setHoveredVertexKey(null);
		}, ri = (e) => {
			j.setSelectedVertexKey(e), j.setSelectedSegmentKey(null);
		}, ii = (e) => j.activeSegmentKey === e, ai = (e) => j.activeVertexKey === e, oi = (e, t) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), ei(t));
		}, si = (e, t) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), ri(t));
		}, ci = () => {
			let e = H.value;
			e && !j.shapeFeatureCounts[e] && j.requestRefreshSelectedGraphicFeatureCounts();
		}, li = () => {
			j.requestIdentifySelectedGraphic();
		}, ui = () => {
			z.value = !1, j.requestDeleteSelectedGraphic();
		}, di = () => {
			let e = V.value;
			if (!e) return;
			let t = e.attributes?.type ?? e.type ?? "shape", n = ge([e], de(`ramp-draw-${t}`));
			A.updateAlert(k(n ? "draw.export.shape.success" : "draw.export.none"));
		}, fi = () => {
			j.setSelectedGraphicStyleSettings(a(j.styleSettings)), j.setSelectedGraphicBufferSettings(te(j.bufferSettings)), j.setSelectedGraphicIdentifyBufferMode(j.identifyBufferMode);
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
			t && j.setSelectedGraphicStyleSettings({
				...t,
				borderColorManual: !0,
				bufferColorManual: !0
			});
		};
		return w(() => _.tabRequestId, () => {
			M.value = _.initialTab;
		}), w(M, (e) => {
			z.value = !1, j.setShapeDetailsActiveTab(e), j.setShapeDetailsLabelsVisible(e === "details" || e === "style"), j.setShapeDetailsLabelsUseSettings(e === "edit"), e === "edit" ? (H.value && j.activeTool !== "edit" && (j.setActiveTool("edit"), j.requestEditSelectedGraphic()), Ce(() => fr.value?.focus())) : j.activeTool === "edit" && j.requestStopEditMode(!1);
		}, { immediate: !0 }), w(H, () => {
			L.value = !1, R.value = !1, z.value = !1, Jr(), ci();
		}), w(() => [
			U.value,
			K.value.distance,
			K.value.unit,
			j.selectedGraphicSettingsUpdateRequestId
		], () => {
			Jr(), ci();
		}, { immediate: !0 }), Te(() => {
			j.setShapeDetailsActiveTab("details"), j.setShapeDetailsLabelsVisible(!1), j.setShapeDetailsLabelsUseSettings(!1);
		}), (e, t) => {
			let n = Ee("panel-screen"), i = De("tippy");
			return y(), xe(n, { panel: r.panel }, {
				header: T(() => [m("div", Fe, [m("span", null, S(C(k)("draw.inspector.title")), 1), V.value ? (y(), p("span", Ie, S(gr.value), 1)) : f("", !0)])]),
				content: T(() => [m("div", Le, [m("div", {
					class: "rv-tab-list",
					role: "tablist",
					"aria-label": C(k)("draw.inspector.title")
				}, [(y(), p(u, null, x(B, (e) => m("button", {
					key: e.id,
					type: "button",
					class: v(["rv-tab-button", { "rv-active-tab": M.value === e.id }]),
					role: "tab",
					"aria-selected": M.value === e.id,
					tabindex: "0",
					onClick: (t) => M.value = e.id,
					onKeydown: (t) => Zr(t, e.id)
				}, S(C(k)(e.labelKey)), 43, ze)), 64))], 8, Re), V.value ? (y(), p("div", Ve, [M.value === "details" ? (y(), p("div", He, [
					m("div", Ue, [
						m("div", We, [m("span", Ge, S(C(k)("draw.details.shapeType")), 1), m("span", Ke, S(hr.value), 1)]),
						m("div", qe, [m("span", Je, S(C(k)("draw.details.segments")), 1), m("span", Ye, S(X.value), 1)]),
						m("div", Xe, [m("span", Ze, S(C(k)("draw.details.vertexCount")), 1), m("span", Qe, S(vr.value || C(k)("draw.details.notAvailable")), 1)])
					]),
					m("div", $e, [m("span", et, S(C(k)("draw.details.measurements")), 1)]),
					m("div", tt, [N.value.length ? (y(!0), p(u, { key: 0 }, x(N.value, (e) => (y(), p("div", {
						key: e.key,
						class: "rv-detail-row"
					}, [m("span", nt, S(e.label), 1), m("span", rt, S(e.value), 1)]))), 128)) : (y(), p("div", it, [m("span", at, S(C(k)("draw.details.measurements")), 1), m("span", ot, S(ur.value ? C(k)("draw.details.loading") : C(k)("draw.details.notAvailable")), 1)]))]),
					m("div", st, [m("span", ct, S(C(k)("draw.details.featureCounts")), 1), m("button", {
						type: "button",
						class: "rv-action-button",
						title: C(k)("draw.details.action.runIdentify"),
						"aria-label": C(k)("draw.details.action.runIdentify"),
						disabled: Y.value?.loading,
						onClick: li
					}, [g(oe, { class: "w-16 h-16" }), m("span", null, S(C(k)("draw.details.action.runIdentify")), 1)], 8, lt)]),
					m("div", ut, [m("div", dt, [
						m("div", ft, [m("span", pt, S(C(k)("draw.details.featureCounts.shape")), 1), m("span", mt, S(Yr(Y.value?.shape)), 1)]),
						br.value ? (y(), p("div", ht, [m("span", gt, S(C(k)("draw.details.featureCounts.buffer")), 1), m("span", _t, S(Yr(Y.value?.buffer)), 1)])) : f("", !0),
						m("div", vt, [m("span", yt, [h(S(C(k)("draw.details.featureCounts.total")) + " ", 1), E((y(), p("button", {
							type: "button",
							class: "rv-info-button",
							"aria-label": jr.value,
							content: jr.value
						}, [g(se, { class: "w-16 h-16" })], 8, bt)), [[i, {
							placement: "top",
							theme: "ramp4",
							animation: "scale"
						}]])]), m("span", xt, S(Yr(Y.value?.total)), 1)])
					]), Y.value?.loading ? (y(), p("div", St, S(C(k)("draw.details.identify.loading")), 1)) : f("", !0)]),
					m("div", Ct, [m("span", wt, S(C(k)("draw.inspector.geometry")), 1)]),
					m("div", Tt, [m("div", Et, S(C(k)("draw.details.location.centroid")), 1), m("div", Dt, [m("span", Ot, S(I.value), 1), m("button", {
						type: "button",
						class: "rv-icon-button",
						title: C(k)("draw.details.action.copyCoordinates"),
						"aria-label": C(k)("draw.details.action.copyCoordinates"),
						onClick: t[0] ||= (e) => $(I.value),
						onKeydown: t[1] ||= D(O((e) => $(I.value), ["stop", "prevent"]), ["enter"])
					}, [g(l, { class: "w-16 h-16" })], 40, kt)])]),
					m("div", At, [m("div", jt, S(C(k)("draw.details.extent")), 1), m("div", Mt, [m("div", Nt, [m("span", null, [t[20] ||= m("strong", null, "N", -1), h(" " + S(Er("north")), 1)]), m("span", null, [t[21] ||= m("strong", null, "S", -1), h(" " + S(Er("south")), 1)])]), m("div", Pt, [m("span", null, [t[22] ||= m("strong", null, "E", -1), h(" " + S(Er("east")), 1)]), m("span", null, [t[23] ||= m("strong", null, "W", -1), h(" " + S(Er("west")), 1)])])])]),
					_r.value ? (y(), p(u, { key: 0 }, [m("button", {
						type: "button",
						class: "rv-details-section-header rv-collapsible-header",
						"aria-expanded": L.value,
						onClick: t[2] ||= (e) => L.value = !L.value
					}, [
						m("span", It, S(C(k)("draw.details.segments")), 1),
						m("span", Lt, S(X.value), 1),
						m("span", { class: v(["rv-section-chevron", { "rv-expanded": L.value }]) }, null, 2)
					], 8, Ft), g(be, { name: "rv-collapse" }, {
						default: T(() => [L.value ? (y(), p("div", Rt, [m("div", zt, [m("div", { class: v(["rv-segment-list", { "rv-scrollable-list": wr.value }]) }, [m("div", Bt, [(y(!0), p(u, null, x(P.value, (e) => (y(), p("div", {
							key: e.key,
							class: v(["rv-segment-row", { "rv-active-row": ii(e.key) }]),
							role: "button",
							tabindex: "0",
							onMouseenter: (t) => Qr(e.key),
							onMouseleave: $r,
							onFocus: (t) => Qr(e.key),
							onBlur: $r,
							onClick: (t) => ei(e.key),
							onKeydown: (t) => oi(t, e.key)
						}, [
							m("span", Ht, S(e.letter), 1),
							m("span", Ut, S(e.pair), 1),
							m("span", Wt, S(e.length), 1),
							m("button", {
								type: "button",
								class: "rv-icon-button",
								title: C(k)("draw.details.action.copySegment"),
								"aria-label": C(k)("draw.details.action.copySegment"),
								onClick: O((t) => Xr(e.copyText), ["stop"]),
								onKeydown: D(O((t) => Xr(e.copyText), ["stop", "prevent"]), ["enter"])
							}, [g(l, { class: "w-16 h-16" })], 40, Gt)
						], 42, Vt))), 128))])], 2), m("div", Kt, [m("button", {
							type: "button",
							class: "rv-action-button",
							title: C(k)("draw.details.action.copyAllSegments"),
							"aria-label": C(k)("draw.details.action.copyAllSegments"),
							onClick: t[3] ||= (e) => Xr(Cr.value),
							onKeydown: t[4] ||= D(O((e) => Xr(Cr.value), ["stop", "prevent"]), ["enter"])
						}, [g(l, { class: "w-16 h-16" }), m("span", null, S(C(k)("draw.details.action.copyAllCoordinatesShort")), 1)], 40, qt)])])])) : f("", !0)]),
						_: 1
					})], 64)) : f("", !0),
					J.value ? (y(), p(u, { key: 1 }, [m("button", {
						type: "button",
						class: "rv-details-section-header rv-collapsible-header rv-collapsible-header-spaced",
						"aria-expanded": R.value,
						onClick: t[5] ||= (e) => R.value = !R.value
					}, [
						m("span", Yt, S(C(k)("draw.details.vertices")), 1),
						m("span", Xt, S(vr.value), 1),
						m("span", { class: v(["rv-section-chevron", { "rv-expanded": R.value }]) }, null, 2)
					], 8, Jt), g(be, { name: "rv-collapse" }, {
						default: T(() => [R.value ? (y(), p("div", Zt, [m("div", Qt, [m("div", { class: v(["rv-vertex-list", { "rv-scrollable-list": Tr.value }]) }, [m("div", $t, [(y(!0), p(u, null, x(F.value, (e) => (y(), p("div", {
							key: e.key,
							class: v(["rv-vertex-row", { "rv-active-row": ai(e.key) }]),
							role: "button",
							tabindex: "0",
							onMouseenter: (t) => ti(e.key),
							onMouseleave: ni,
							onFocus: (t) => ti(e.key),
							onBlur: ni,
							onClick: (t) => ri(e.key),
							onKeydown: (t) => si(t, e.key)
						}, [
							m("span", tn, S(e.index), 1),
							m("span", nn, S(e.coordinates), 1),
							m("button", {
								type: "button",
								class: "rv-icon-button",
								title: C(k)("draw.details.action.copyCoordinates"),
								"aria-label": C(k)("draw.details.action.copyCoordinates"),
								onClick: O((t) => $(e.coordinates), ["stop"]),
								onKeydown: D(O((t) => $(e.coordinates), ["stop", "prevent"]), ["enter"])
							}, [g(l, { class: "w-16 h-16" })], 40, rn)
						], 42, en))), 128))])], 2), m("div", an, [m("button", {
							type: "button",
							class: "rv-action-button",
							title: C(k)("draw.details.action.copyAllCoordinates"),
							"aria-label": C(k)("draw.details.action.copyAllCoordinates"),
							onClick: t[6] ||= (e) => $(Sr.value),
							onKeydown: t[7] ||= D(O((e) => $(Sr.value), ["stop", "prevent"]), ["enter"])
						}, [g(l, { class: "w-16 h-16" }), m("span", null, S(C(k)("draw.details.action.copyAllCoordinatesShort")), 1)], 40, on)])])])) : f("", !0)]),
						_: 1
					})], 64)) : f("", !0),
					m("div", sn, [m("button", {
						type: "button",
						class: "rv-action-button",
						title: C(k)("draw.export.shape.tooltip"),
						"aria-label": C(k)("draw.export.shape.tooltip"),
						onClick: di
					}, [g(ie, { class: "w-16 h-16" }), m("span", null, S(C(k)("draw.export.action.exportShort")), 1)], 8, cn)])
				])) : M.value === "style" ? (y(), p("div", ln, [
					m("p", un, S(C(k)("draw.inspector.style.notice")), 1),
					m("div", dn, [m("span", fn, S(C(k)("draw.inspector.style.presets")), 1), m("div", pn, [(y(), p(u, null, x(Ar, (e) => m("button", {
						key: e.key,
						type: "button",
						class: "rv-preset-button",
						onClick: (t) => pi(e.key)
					}, [m("span", {
						class: "rv-preset-swatch",
						style: we({ backgroundColor: e.color })
					}, null, 4), m("span", null, S(C(k)(e.labelKey)), 1)], 8, mn)), 64))])]),
					m("div", hn, [m("div", gn, [m("span", {
						class: "rv-style-preview-shape",
						style: we({
							backgroundColor: G.value.fillColor,
							borderColor: G.value.borderColor,
							opacity: G.value.opacity / 100
						})
					}, null, 4), m("span", {
						class: "rv-style-preview-buffer",
						style: we({ borderColor: G.value.bufferColor })
					}, null, 4)])]),
					m("div", _n, [m("span", vn, S(C(k)("draw.settings.appearance")), 1)]),
					m("div", yn, [
						g(c, {
							label: C(k)("draw.inspector.style.fillColor"),
							color: G.value.fillColor,
							"control-id": "draw-selected-fill-color",
							"onUpdate:color": C(j).setSelectedGraphicFillColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						]),
						g(c, {
							label: C(k)("draw.inspector.style.borderColor"),
							color: G.value.borderColor,
							"control-id": "draw-selected-border-color",
							"onUpdate:color": C(j).setSelectedGraphicBorderColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						]),
						g(c, {
							label: C(k)("draw.inspector.style.bufferColor"),
							color: G.value.bufferColor,
							"control-id": "draw-selected-buffer-color",
							"onUpdate:color": C(j).setSelectedGraphicBufferColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						])
					]),
					t[24] ||= m("div", { class: "rv-settings-divider" }, null, -1),
					m("div", bn, [m("label", xn, S(C(k)("draw.settings.opacity")), 1), m("div", Sn, [g(C(Pe), {
						id: "draw-selected-opacity",
						class: "mr-16",
						modelValue: Dr.value,
						"onUpdate:modelValue": t[8] ||= (e) => Dr.value = e,
						width: 220,
						min: 0,
						max: 100
					}, null, 8, ["modelValue"]), m("span", Cn, S(G.value.opacity) + "%", 1)])])
				])) : (y(), p("div", wn, [
					m("div", {
						ref_key: "editBanner",
						ref: fr,
						class: "rv-edit-banner",
						tabindex: "-1",
						role: "status",
						"aria-label": C(k)("draw.inspector.edit.active")
					}, [
						m("strong", null, S(C(k)("draw.inspector.edit.active")), 1),
						m("span", null, S(C(k)("draw.inspector.edit.guidance")), 1),
						m("span", null, S(C(k)("draw.inspector.edit.vertexToggleHint")), 1)
					], 8, Tn),
					m("div", En, [m("div", Dn, [m("span", On, S(C(k)("draw.inspector.edit.shapeId")), 1), m("span", kn, S(H.value), 1)])]),
					m("div", An, [m("span", jn, S(C(k)("draw.details.measurements")), 1)]),
					m("div", Mn, [
						N.value.length ? (y(!0), p(u, { key: 0 }, x(N.value, (e) => (y(), p("div", {
							key: e.key,
							class: "rv-detail-row"
						}, [m("span", Nn, S(e.label), 1), m("span", Pn, S(e.value), 1)]))), 128)) : f("", !0),
						m("div", Fn, [m("span", In, S(C(k)("draw.details.vertices")), 1), m("span", Ln, S(vr.value || C(k)("draw.details.notAvailable")), 1)]),
						m("div", Rn, [m("span", zn, S(C(k)("draw.details.segments")), 1), m("span", Bn, S(X.value), 1)])
					]),
					m("div", Vn, [m("span", Hn, S(C(k)("draw.inspector.edit.aids")), 1)]),
					m("fieldset", Un, [
						m("label", { class: v(["rv-checkbox-row", { "rv-disabled-option": !yr.value }]) }, [E(m("input", {
							"onUpdate:modelValue": t[9] ||= (e) => Nr.value = e,
							type: "checkbox",
							disabled: !yr.value
						}, null, 8, Wn), [[ke, Nr.value]]), m("span", null, S(C(k)("draw.details.showOnMap.areaLabel")), 1)], 2),
						m("label", Gn, [E(m("input", {
							"onUpdate:modelValue": t[10] ||= (e) => Pr.value = e,
							type: "checkbox"
						}, null, 512), [[ke, Pr.value]]), m("span", null, S(C(k)("draw.details.showOnMap.segmentLength")), 1)]),
						m("label", Kn, [E(m("input", {
							"onUpdate:modelValue": t[11] ||= (e) => Fr.value = e,
							type: "checkbox"
						}, null, 512), [[ke, Fr.value]]), m("span", null, S(C(k)("draw.details.showOnMap.segmentLetters")), 1)]),
						m("label", qn, [E(m("input", {
							"onUpdate:modelValue": t[12] ||= (e) => Ir.value = e,
							type: "checkbox"
						}, null, 512), [[ke, Ir.value]]), m("span", null, S(C(k)("draw.details.showOnMap.vertexNumbers")), 1)])
					]),
					m("div", Jn, [m("span", Yn, S(C(k)("draw.settings.buffer")), 1)]),
					m("div", Xn, [m("label", Zn, S(C(k)("draw.settings.buffer.distance")), 1), m("div", Qn, [E(m("input", {
						id: "draw-selected-buffer-distance",
						class: "rv-input rv-buffer-distance-input",
						type: "number",
						min: "0",
						max: "9999999999",
						step: "1",
						"onUpdate:modelValue": t[13] ||= (e) => Or.value = e
					}, null, 512), [[
						Me,
						Or.value,
						void 0,
						{ number: !0 }
					]]), E(m("select", {
						class: "rv-select",
						"onUpdate:modelValue": t[14] ||= (e) => kr.value = e
					}, [(y(!0), p(u, null, x(C(ee), (e) => (y(), p("option", {
						key: e.value,
						value: e.value
					}, S(C(k)(e.labelKey)), 9, $n))), 128))], 512), [[je, kr.value]])])]),
					m("fieldset", er, [m("legend", tr, S(C(k)("draw.settings.identifyBufferUses")), 1), m("div", nr, [
						m("label", rr, [E(m("input", {
							type: "radio",
							value: "shape-buffer",
							"onUpdate:modelValue": t[15] ||= (e) => Z.value = e
						}, null, 512), [[Ae, Z.value]]), m("span", null, S(C(k)("draw.settings.identify.shapeAndBuffer")), 1)]),
						m("label", ir, [E(m("input", {
							type: "radio",
							value: "shape",
							"onUpdate:modelValue": t[16] ||= (e) => Z.value = e
						}, null, 512), [[Ae, Z.value]]), m("span", null, S(C(k)("draw.settings.identify.originalShapeOnly")), 1)]),
						m("label", ar, [E(m("input", {
							type: "radio",
							value: "buffer-only",
							"onUpdate:modelValue": t[17] ||= (e) => Z.value = e
						}, null, 512), [[Ae, Z.value]]), m("span", null, S(C(k)("draw.settings.identify.bufferOnly")), 1)])
					])]),
					m("div", { class: v(["rv-content-actions", { "rv-confirm-actions": z.value }]) }, [z.value ? (y(), p(u, { key: 0 }, [m("span", or, S(C(k)("draw.inspector.delete.confirm")), 1), m("span", sr, [m("button", {
						type: "button",
						class: "rv-action-button",
						onClick: t[18] ||= (e) => z.value = !1
					}, S(C(k)("draw.inspector.action.cancel")), 1), m("button", {
						type: "button",
						class: "rv-action-button rv-danger-action-button",
						onClick: ui
					}, S(C(k)("draw.inspector.action.yesDelete")), 1)])], 64)) : (y(), p("button", {
						key: 1,
						type: "button",
						class: "rv-action-button rv-danger-action-button",
						title: C(k)("draw.details.action.deleteShape"),
						"aria-label": C(k)("draw.details.action.deleteShape"),
						onClick: t[19] ||= (e) => z.value = !0
					}, [g(ae, { class: "w-16 h-16" }), m("span", null, S(C(k)("draw.details.action.deleteShapeShort")), 1)], 8, cr))], 2)
				]))])) : (y(), p("div", Be, S(C(k)("draw.inspector.empty")), 1))])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-4ff4545f"]]);
//#endregion
export { k as default };
