import { B as e } from "./main-BgfQyEh5.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./icons-B51WIEuY.js";
import { a as r, i, n as a, t as ee } from "./store-Bl__6-s2.js";
import { t as o } from "./color-control-DrPs3Fnr.js";
import { t as s } from "./download-icon-CfXMdF48.js";
import { t as c } from "./upload-icon-CqFt-WO1.js";
import { n as te, r as ne } from "./shape-io-CbPCwaM1.js";
import { Fragment as re, computed as l, createBlock as u, createElementBlock as d, createElementVNode as f, createTextVNode as p, createVNode as m, defineComponent as h, inject as ie, normalizeClass as ae, openBlock as g, renderList as oe, resolveComponent as se, toDisplayString as _, unref as v, vModelRadio as y, vModelSelect as b, vModelText as x, withCtx as S, withDirectives as C } from "vue";
import { useI18n as w } from "vue-i18n";
import T from "vue-slider-component";
import "vue-slider-component/theme/default.css";
//#region src/fixtures/draw/draw-defaults-screen.vue?vue&type=script&setup=true&lang.ts
var E = { class: "rv-settings-shell flex flex-col" }, D = { class: "rv-settings-body" }, O = { class: "rv-help-text" }, k = { class: "rv-subheader" }, A = { class: "rv-subsection flex flex-col gap-12" }, j = { class: "rv-subsection" }, M = { class: "rv-label" }, N = ["innerHTML"], P = { class: "flex flex-row items-center pl-30" }, F = { class: "rv-opacity-value" }, I = { class: "rv-subheader" }, L = { class: "rv-subsection" }, R = { class: "rv-label" }, z = ["innerHTML"], B = { class: "flex flex-row gap-8 pl-30" }, V = ["aria-label"], ce = ["aria-label"], H = ["value"], U = { class: "rv-subsection" }, W = { class: "rv-label" }, G = ["innerHTML"], le = { class: "flex flex-col gap-8 pl-30" }, ue = { class: "flex items-start gap-8" }, de = { class: "font-bold" }, fe = { class: "block text-sm text-gray-600" }, pe = { class: "flex items-start gap-8" }, me = { class: "font-bold" }, he = { class: "block text-sm text-gray-600" }, ge = { class: "flex items-start gap-8" }, _e = { class: "font-bold" }, ve = { class: "block text-sm text-gray-600" }, ye = { class: "rv-content-actions" }, be = [
	"title",
	"aria-label",
	"aria-pressed"
], K = ["title", "aria-label"], q = /*#__PURE__*/ t(/* @__PURE__ */ h({
	__name: "draw-defaults-screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(t) {
		let { t: h } = w(), q = ie("iApi"), J = ee(), xe = e(), Y = l({
			get: () => J.styleSettings.opacity,
			set: (e) => J.setOpacity(e)
		}), X = l({
			get: () => J.bufferSettings.distance,
			set: (e) => J.setBufferDistance(e)
		}), Z = l({
			get: () => J.bufferSettings.unit,
			set: (e) => J.setBufferUnit(e)
		}), Q = l({
			get: () => J.identifyBufferMode,
			set: (e) => J.setIdentifyBufferMode(e)
		}), $ = l(() => a(xe, r)), Se = () => {
			let e = ne(J.graphics, te("ramp-draw-shapes"));
			q.updateAlert(h(e ? "draw.export.all.success" : "draw.export.none"));
		}, Ce = () => {
			q.panel.toggle(r);
		};
		return (e, r) => {
			let a = se("panel-screen");
			return g(), u(a, { panel: t.panel }, {
				header: S(() => [p(_(v(h)("draw.defaults.title")), 1)]),
				content: S(() => [f("div", E, [f("div", D, [
					f("p", O, _(v(h)("draw.defaults.helper")), 1),
					f("span", k, _(v(h)("draw.settings.appearance")), 1),
					r[6] ||= f("div", { class: "rv-settings-divider" }, null, -1),
					f("div", A, [
						m(o, {
							label: v(h)("draw.defaults.color.shape"),
							color: v(J).styleSettings.fillColor,
							"control-id": "draw-default-fill-color",
							"onUpdate:color": v(J).setFillColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						]),
						m(o, {
							label: v(h)("draw.defaults.color.border"),
							color: v(J).styleSettings.borderColor,
							"control-id": "draw-default-border-color",
							"onUpdate:color": v(J).setBorderColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						]),
						m(o, {
							label: v(h)("draw.defaults.color.buffer"),
							color: v(J).styleSettings.bufferColor,
							"control-id": "draw-default-buffer-color",
							"onUpdate:color": v(J).setBufferColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						])
					]),
					r[7] ||= f("div", { class: "rv-settings-divider" }, null, -1),
					f("div", j, [f("div", M, [f("div", {
						innerHTML: v(n).opacity,
						class: "p-8 pl-0"
					}, null, 8, N), p(" " + _(v(h)("draw.defaults.opacity")), 1)]), f("div", P, [m(v(T), {
						class: "mr-16",
						modelValue: Y.value,
						"onUpdate:modelValue": r[0] ||= (e) => Y.value = e,
						width: 220,
						min: 0,
						max: 100
					}, null, 8, ["modelValue"]), f("span", F, _(v(J).styleSettings.opacity) + "%", 1)])]),
					f("span", I, _(v(h)("draw.settings.buffer")), 1),
					r[8] ||= f("div", { class: "rv-settings-divider" }, null, -1),
					f("div", L, [f("div", R, [f("div", {
						innerHTML: v(n).box,
						class: "p-8 pl-0"
					}, null, 8, z), p(" " + _(v(h)("draw.defaults.buffer.distance")), 1)]), f("div", B, [C(f("input", {
						class: "rv-input rv-buffer-distance-input",
						type: "number",
						min: "0",
						max: "9999999999",
						step: "1",
						"onUpdate:modelValue": r[1] ||= (e) => X.value = e,
						"aria-label": v(h)("draw.defaults.buffer.distance")
					}, null, 8, V), [[
						x,
						X.value,
						void 0,
						{ number: !0 }
					]]), C(f("select", {
						class: "rv-select",
						"onUpdate:modelValue": r[2] ||= (e) => Z.value = e,
						"aria-label": v(h)("draw.settings.buffer.unit")
					}, [(g(!0), d(re, null, oe(v(i), (e) => (g(), d("option", {
						key: e.value,
						value: e.value
					}, _(v(h)(e.labelKey)), 9, H))), 128))], 8, ce), [[b, Z.value]])])]),
					r[9] ||= f("div", { class: "rv-settings-divider" }, null, -1),
					f("fieldset", U, [f("legend", W, [f("div", {
						innerHTML: v(n).location,
						class: "p-8 pl-0"
					}, null, 8, G), p(" " + _(v(h)("draw.defaults.identifyBufferUses")), 1)]), f("div", le, [
						f("label", ue, [C(f("input", {
							type: "radio",
							value: "shape-buffer",
							"onUpdate:modelValue": r[3] ||= (e) => Q.value = e
						}, null, 512), [[y, Q.value]]), f("span", null, [f("span", de, _(v(h)("draw.settings.identify.shapeAndBuffer")), 1), f("span", fe, _(v(h)("draw.settings.identify.shapeAndBuffer.description")), 1)])]),
						f("label", pe, [C(f("input", {
							type: "radio",
							value: "shape",
							"onUpdate:modelValue": r[4] ||= (e) => Q.value = e
						}, null, 512), [[y, Q.value]]), f("span", null, [f("span", me, _(v(h)("draw.settings.identify.originalShapeOnly")), 1), f("span", he, _(v(h)("draw.settings.identify.originalShapeOnly.description")), 1)])]),
						f("label", ge, [C(f("input", {
							type: "radio",
							value: "buffer-only",
							"onUpdate:modelValue": r[5] ||= (e) => Q.value = e
						}, null, 512), [[y, Q.value]]), f("span", null, [f("span", _e, _(v(h)("draw.settings.identify.bufferOnly")), 1), f("span", ve, _(v(h)("draw.settings.identify.bufferOnly.description")), 1)])])
					])])
				]), f("div", ye, [f("button", {
					type: "button",
					class: ae(["rv-action-button", { "rv-active-action-button": $.value }]),
					title: v(h)("draw.import.tooltip"),
					"aria-label": v(h)("draw.import.tooltip"),
					"aria-pressed": $.value,
					onClick: Ce
				}, [m(c, { class: "w-16 h-16" }), f("span", null, _(v(h)("draw.import.action.importShort")), 1)], 10, be), f("button", {
					type: "button",
					class: "rv-action-button",
					title: v(h)("draw.export.all.tooltip"),
					"aria-label": v(h)("draw.export.all.tooltip"),
					onClick: Se
				}, [m(s, { class: "w-16 h-16" }), f("span", null, _(v(h)("draw.export.action.exportShort")), 1)], 8, K)])])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-48962bf7"]]);
//#endregion
export { q as default };
