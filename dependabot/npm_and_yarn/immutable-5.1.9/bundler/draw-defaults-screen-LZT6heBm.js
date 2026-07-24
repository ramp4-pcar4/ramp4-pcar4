import { B as e } from "./main-BxjcKY8o.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as n } from "./icons-B51WIEuY.js";
import { a as r, i, n as a, t as ee } from "./store-Bl__6-s2.js";
import { t as o } from "./color-control-Bsm4vTG2.js";
import { t as s } from "./download-icon-CfXMdF48.js";
import { t as c } from "./upload-icon-CqFt-WO1.js";
import { n as te, r as ne } from "./shape-io-DNQ9Cwyu.js";
import { Fragment as re, computed as l, createBlock as ie, createElementBlock as u, createElementVNode as d, createTextVNode as f, createVNode as p, defineComponent as m, inject as ae, normalizeClass as oe, openBlock as h, renderList as se, resolveComponent as ce, toDisplayString as g, unref as _, vModelRadio as v, vModelSelect as y, vModelText as b, withCtx as x, withDirectives as S } from "vue";
import { useI18n as C } from "vue-i18n";
import w from "vue-slider-component";
import "vue-slider-component/theme/default.css";
//#region src/fixtures/draw/draw-defaults-screen.vue?vue&type=script&setup=true&lang.ts
var T = { class: "rv-settings-shell flex flex-col" }, E = { class: "rv-settings-body" }, D = { class: "rv-help-text" }, O = { class: "rv-subheader" }, k = { class: "rv-subsection flex flex-col gap-12" }, A = { class: "rv-subsection" }, j = { class: "rv-label" }, M = ["innerHTML"], N = { class: "flex flex-row items-center pl-30" }, P = { class: "rv-opacity-value" }, F = { class: "rv-subheader" }, I = { class: "rv-subsection" }, L = { class: "rv-label" }, R = ["innerHTML"], z = { class: "flex flex-row gap-8 pl-30" }, B = ["aria-label"], V = ["aria-label"], le = ["value"], H = { class: "rv-subsection" }, U = { class: "rv-label" }, W = ["innerHTML"], ue = { class: "flex flex-col gap-8 pl-30" }, de = { class: "flex items-start gap-8" }, fe = { class: "font-bold" }, pe = { class: "block text-sm text-gray-600" }, me = { class: "flex items-start gap-8" }, he = { class: "font-bold" }, ge = { class: "block text-sm text-gray-600" }, _e = { class: "flex items-start gap-8" }, ve = { class: "font-bold" }, ye = { class: "block text-sm text-gray-600" }, be = { class: "rv-content-actions" }, xe = [
	"title",
	"aria-label",
	"aria-pressed"
], G = [
	"title",
	"aria-label",
	"disabled"
], K = /*#__PURE__*/ t(/* @__PURE__ */ m({
	__name: "draw-defaults-screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(t) {
		let { t: m } = C(), K = ae("iApi"), q = ee(), Se = e(), J = l({
			get: () => q.styleSettings.opacity,
			set: (e) => q.setOpacity(e)
		}), Y = l({
			get: () => q.bufferSettings.distance,
			set: (e) => q.setBufferDistance(e)
		}), X = l({
			get: () => q.bufferSettings.unit,
			set: (e) => q.setBufferUnit(e)
		}), Z = l({
			get: () => q.identifyBufferMode,
			set: (e) => q.setIdentifyBufferMode(e)
		}), Q = l(() => a(Se, r)), $ = l(() => q.graphics.length > 0), Ce = () => {
			if (!$.value) return;
			let e = ne(q.graphics, te("ramp-draw-shapes"));
			K.updateAlert(m(e ? "draw.export.all.success" : "draw.export.none"));
		}, we = () => {
			K.panel.toggle(r);
		};
		return (e, r) => {
			let a = ce("panel-screen");
			return h(), ie(a, { panel: t.panel }, {
				header: x(() => [f(g(_(m)("draw.defaults.title")), 1)]),
				content: x(() => [d("div", T, [d("div", E, [
					d("p", D, g(_(m)("draw.defaults.helper")), 1),
					d("span", O, g(_(m)("draw.settings.appearance")), 1),
					r[6] ||= d("div", { class: "rv-settings-divider" }, null, -1),
					d("div", k, [
						p(o, {
							label: _(m)("draw.defaults.color.shape"),
							color: _(q).styleSettings.fillColor,
							"control-id": "draw-default-fill-color",
							"onUpdate:color": _(q).setFillColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						]),
						p(o, {
							label: _(m)("draw.defaults.color.border"),
							color: _(q).styleSettings.borderColor,
							"control-id": "draw-default-border-color",
							"onUpdate:color": _(q).setBorderColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						]),
						p(o, {
							label: _(m)("draw.defaults.color.buffer"),
							color: _(q).styleSettings.bufferColor,
							"control-id": "draw-default-buffer-color",
							"onUpdate:color": _(q).setBufferColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						])
					]),
					r[7] ||= d("div", { class: "rv-settings-divider" }, null, -1),
					d("div", A, [d("div", j, [d("div", {
						innerHTML: _(n).opacity,
						class: "p-8 pl-0"
					}, null, 8, M), f(" " + g(_(m)("draw.defaults.opacity")), 1)]), d("div", N, [p(_(w), {
						class: "mr-16",
						modelValue: J.value,
						"onUpdate:modelValue": r[0] ||= (e) => J.value = e,
						width: 220,
						min: 0,
						max: 100
					}, null, 8, ["modelValue"]), d("span", P, g(_(q).styleSettings.opacity) + "%", 1)])]),
					d("span", F, g(_(m)("draw.settings.buffer")), 1),
					r[8] ||= d("div", { class: "rv-settings-divider" }, null, -1),
					d("div", I, [d("div", L, [d("div", {
						innerHTML: _(n).box,
						class: "p-8 pl-0"
					}, null, 8, R), f(" " + g(_(m)("draw.defaults.buffer.distance")), 1)]), d("div", z, [S(d("input", {
						class: "rv-input rv-buffer-distance-input",
						type: "number",
						min: "0",
						max: "9999999999",
						step: "1",
						"onUpdate:modelValue": r[1] ||= (e) => Y.value = e,
						"aria-label": _(m)("draw.defaults.buffer.distance")
					}, null, 8, B), [[
						b,
						Y.value,
						void 0,
						{ number: !0 }
					]]), S(d("select", {
						class: "rv-select",
						"onUpdate:modelValue": r[2] ||= (e) => X.value = e,
						"aria-label": _(m)("draw.settings.buffer.unit")
					}, [(h(!0), u(re, null, se(_(i), (e) => (h(), u("option", {
						key: e.value,
						value: e.value
					}, g(_(m)(e.labelKey)), 9, le))), 128))], 8, V), [[y, X.value]])])]),
					r[9] ||= d("div", { class: "rv-settings-divider" }, null, -1),
					d("fieldset", H, [d("legend", U, [d("div", {
						innerHTML: _(n).location,
						class: "p-8 pl-0"
					}, null, 8, W), f(" " + g(_(m)("draw.defaults.identifyBufferUses")), 1)]), d("div", ue, [
						d("label", de, [S(d("input", {
							type: "radio",
							value: "shape-buffer",
							"onUpdate:modelValue": r[3] ||= (e) => Z.value = e
						}, null, 512), [[v, Z.value]]), d("span", null, [d("span", fe, g(_(m)("draw.settings.identify.shapeAndBuffer")), 1), d("span", pe, g(_(m)("draw.settings.identify.shapeAndBuffer.description")), 1)])]),
						d("label", me, [S(d("input", {
							type: "radio",
							value: "shape",
							"onUpdate:modelValue": r[4] ||= (e) => Z.value = e
						}, null, 512), [[v, Z.value]]), d("span", null, [d("span", he, g(_(m)("draw.settings.identify.originalShapeOnly")), 1), d("span", ge, g(_(m)("draw.settings.identify.originalShapeOnly.description")), 1)])]),
						d("label", _e, [S(d("input", {
							type: "radio",
							value: "buffer-only",
							"onUpdate:modelValue": r[5] ||= (e) => Z.value = e
						}, null, 512), [[v, Z.value]]), d("span", null, [d("span", ve, g(_(m)("draw.settings.identify.bufferOnly")), 1), d("span", ye, g(_(m)("draw.settings.identify.bufferOnly.description")), 1)])])
					])])
				]), d("div", be, [d("button", {
					type: "button",
					class: oe(["rv-action-button", { "rv-active-action-button": Q.value }]),
					title: _(m)("draw.import.tooltip"),
					"aria-label": _(m)("draw.import.tooltip"),
					"aria-pressed": Q.value,
					onClick: we
				}, [p(c, { class: "w-16 h-16" }), d("span", null, g(_(m)("draw.import.action.importShort")), 1)], 10, xe), d("button", {
					type: "button",
					class: "rv-action-button",
					title: _(m)("draw.export.all.tooltip"),
					"aria-label": _(m)("draw.export.all.tooltip"),
					disabled: !$.value,
					onClick: Ce
				}, [p(s, { class: "w-16 h-16" }), d("span", null, g(_(m)("draw.export.action.exportShort")), 1)], 8, G)])])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-d917732d"]]);
//#endregion
export { K as default };
