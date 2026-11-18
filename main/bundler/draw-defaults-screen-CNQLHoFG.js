import { B as e } from "./main-DxKmGvij.js";
import { t } from "./icons-D_cmW_VX.js";
import { t as n } from "./color-control-D6DbRA40.js";
import { t as ee } from "./download-icon-BPJDrGJ4.js";
import { t as r } from "./upload-icon-C2P7RR0k.js";
import { a as i, i as te, n as a, t as o } from "./store-C2phcvMU.js";
import { f as s, p as ne } from "./draw-CtMlJrZR.js";
import { t as c } from "./_plugin-vue_export-helper-Djzt4Yr7.js";
import { Fragment as re, computed as l, createBlock as ie, createElementBlock as u, createElementVNode as d, createTextVNode as f, createVNode as p, defineComponent as m, inject as ae, normalizeClass as oe, openBlock as h, renderList as se, resolveComponent as ce, toDisplayString as g, unref as _, vModelRadio as v, vModelSelect as y, vModelText as b, withCtx as x, withDirectives as S } from "vue";
import { useI18n as C } from "vue-i18n";
import w from "vue-slider-component";
import "vue-slider-component/theme/default.css";
// src/fixtures/draw/draw-defaults-screen.vue?vue&type=script&setup=true&lang.ts
var T = { class: "rv-settings-shell flex flex-col" }, E = { class: "rv-settings-body" }, D = { class: "rv-help-text" }, O = { class: "rv-subheader" }, k = { class: "rv-subsection flex flex-col gap-12" }, A = { class: "rv-subsection" }, j = { class: "rv-label" }, M = ["innerHTML"], N = { class: "flex flex-row items-center pl-30" }, P = { class: "rv-opacity-value" }, F = { class: "rv-subheader" }, I = { class: "rv-subsection" }, L = { class: "rv-label" }, R = ["innerHTML"], z = { class: "flex flex-row gap-8 pl-30" }, B = ["aria-label"], V = ["aria-label"], le = ["value"], H = { class: "rv-subsection" }, U = { class: "rv-label" }, W = ["innerHTML"], ue = { class: "flex flex-col gap-8 pl-30" }, de = { class: "flex items-start gap-8" }, fe = { class: "font-bold" }, pe = { class: "block text-sm text-gray-600" }, me = { class: "flex items-start gap-8" }, he = { class: "font-bold" }, ge = { class: "block text-sm text-gray-600" }, _e = { class: "flex items-start gap-8" }, ve = { class: "font-bold" }, ye = { class: "block text-sm text-gray-600" }, be = { class: "rv-content-actions" }, xe = [
	"title",
	"aria-label",
	"aria-pressed"
], G = [
	"title",
	"aria-label",
	"disabled"
], K = /*#__PURE__*/ c(/* @__PURE__ */ m({
	__name: "draw-defaults-screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(c) {
		let { t: m } = C(), K = ae("iApi"), q = o(), Se = e(), J = l({
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
		}), Q = l(() => a(Se, i)), $ = l(() => q.graphics.length > 0), Ce = () => {
			if (!$.value) return;
			let e = ne(q.graphics, s("ramp-draw-shapes"));
			K.updateAlert(m(e ? "draw.export.all.success" : "draw.export.none"));
		}, we = () => {
			K.panel.toggle(i);
		};
		return (e, i) => {
			let a = ce("panel-screen");
			return h(), ie(a, { panel: c.panel }, {
				header: x(() => [f(g(_(m)("draw.defaults.title")), 1)]),
				content: x(() => [d("div", T, [d("div", E, [
					d("p", D, g(_(m)("draw.defaults.helper")), 1),
					d("span", O, g(_(m)("draw.settings.appearance")), 1),
					i[6] ||= d("div", { class: "rv-settings-divider" }, null, -1),
					d("div", k, [
						p(n, {
							label: _(m)("draw.defaults.color.shape"),
							color: _(q).styleSettings.fillColor,
							"control-id": "draw-default-fill-color",
							"onUpdate:color": _(q).setFillColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						]),
						p(n, {
							label: _(m)("draw.defaults.color.border"),
							color: _(q).styleSettings.borderColor,
							"control-id": "draw-default-border-color",
							"onUpdate:color": _(q).setBorderColor
						}, null, 8, [
							"label",
							"color",
							"onUpdate:color"
						]),
						p(n, {
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
					i[7] ||= d("div", { class: "rv-settings-divider" }, null, -1),
					d("div", A, [d("div", j, [d("div", {
						innerHTML: _(t).opacity,
						class: "p-8 pl-0"
					}, null, 8, M), f(" " + g(_(m)("draw.defaults.opacity")), 1)]), d("div", N, [p(_(w), {
						class: "mr-16",
						modelValue: J.value,
						"onUpdate:modelValue": i[0] ||= (e) => J.value = e,
						width: 220,
						min: 0,
						max: 100
					}, null, 8, ["modelValue"]), d("span", P, g(_(q).styleSettings.opacity) + "%", 1)])]),
					d("span", F, g(_(m)("draw.settings.buffer")), 1),
					i[8] ||= d("div", { class: "rv-settings-divider" }, null, -1),
					d("div", I, [d("div", L, [d("div", {
						innerHTML: _(t).box,
						class: "p-8 pl-0"
					}, null, 8, R), f(" " + g(_(m)("draw.defaults.buffer.distance")), 1)]), d("div", z, [S(d("input", {
						class: "rv-input rv-buffer-distance-input",
						type: "number",
						min: "0",
						max: "9999999999",
						step: "1",
						"onUpdate:modelValue": i[1] ||= (e) => Y.value = e,
						"aria-label": _(m)("draw.defaults.buffer.distance")
					}, null, 8, B), [[
						b,
						Y.value,
						void 0,
						{ number: !0 }
					]]), S(d("select", {
						class: "rv-select",
						"onUpdate:modelValue": i[2] ||= (e) => X.value = e,
						"aria-label": _(m)("draw.settings.buffer.unit")
					}, [(h(!0), u(re, null, se(_(te), (e) => (h(), u("option", {
						key: e.value,
						value: e.value
					}, g(_(m)(e.labelKey)), 9, le))), 128))], 8, V), [[y, X.value]])])]),
					i[9] ||= d("div", { class: "rv-settings-divider" }, null, -1),
					d("fieldset", H, [d("legend", U, [d("div", {
						innerHTML: _(t).location,
						class: "p-8 pl-0"
					}, null, 8, W), f(" " + g(_(m)("draw.defaults.identifyBufferUses")), 1)]), d("div", ue, [
						d("label", de, [S(d("input", {
							type: "radio",
							value: "shape-buffer",
							"onUpdate:modelValue": i[3] ||= (e) => Z.value = e
						}, null, 512), [[v, Z.value]]), d("span", null, [d("span", fe, g(_(m)("draw.settings.identify.shapeAndBuffer")), 1), d("span", pe, g(_(m)("draw.settings.identify.shapeAndBuffer.description")), 1)])]),
						d("label", me, [S(d("input", {
							type: "radio",
							value: "shape",
							"onUpdate:modelValue": i[4] ||= (e) => Z.value = e
						}, null, 512), [[v, Z.value]]), d("span", null, [d("span", he, g(_(m)("draw.settings.identify.originalShapeOnly")), 1), d("span", ge, g(_(m)("draw.settings.identify.originalShapeOnly.description")), 1)])]),
						d("label", _e, [S(d("input", {
							type: "radio",
							value: "buffer-only",
							"onUpdate:modelValue": i[5] ||= (e) => Z.value = e
						}, null, 512), [[v, Z.value]]), d("span", null, [d("span", ve, g(_(m)("draw.settings.identify.bufferOnly")), 1), d("span", ye, g(_(m)("draw.settings.identify.bufferOnly.description")), 1)])])
					])])
				]), d("div", be, [d("button", {
					type: "button",
					class: oe(["rv-action-button", { "rv-active-action-button": Q.value }]),
					title: _(m)("draw.import.tooltip"),
					"aria-label": _(m)("draw.import.tooltip"),
					"aria-pressed": Q.value,
					onClick: we
				}, [p(r, { class: "w-16 h-16" }), d("span", null, g(_(m)("draw.import.action.importShort")), 1)], 10, xe), d("button", {
					type: "button",
					class: "rv-action-button",
					title: _(m)("draw.export.all.tooltip"),
					"aria-label": _(m)("draw.export.all.tooltip"),
					disabled: !$.value,
					onClick: Ce
				}, [p(ee, { class: "w-16 h-16" }), d("span", null, g(_(m)("draw.export.action.exportShort")), 1)], 8, G)])])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-d917732d"]]);
export { K as default };
