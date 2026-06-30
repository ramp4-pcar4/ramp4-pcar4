import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { _ as t } from "./store-Bl__6-s2.js";
import { computed as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, normalizeStyle as c, openBlock as l, ref as u, toDisplayString as d, unref as f, useCssVars as p, useId as m, withCtx as h, withKeys as g, withModifiers as _ } from "vue";
import { useI18n as v } from "vue-i18n";
import { ColorPicker as y } from "vue-accessible-color-picker";
//#region src/fixtures/draw/color-control.vue?vue&type=script&setup=true&lang.ts
var b = { class: "draw-color-control" }, x = { class: "rv-color-row" }, S = { class: "rv-label text-sm font-bold" }, C = { class: "rv-color-value" }, w = ["aria-controls", "aria-expanded"], T = ["id"], E = { class: "sr-only" }, D = { class: "sr-only" }, O = /*#__PURE__*/ e(/* @__PURE__ */ s({
	__name: "color-control",
	props: {
		label: {
			type: String,
			required: !0
		},
		color: {
			type: String,
			required: !0
		},
		controlId: {
			type: String,
			required: !0
		}
	},
	emits: ["update:color"],
	setup(e, { emit: s }) {
		p((e) => ({ v4d5affd2: N.value }));
		let O = s, k = e, { t: A } = v(), j = u(!1), M = m(), N = n(() => t(k.color)), P = n(() => `${k.controlId}-${M}-editor`), F = n(() => `${k.controlId}-${M}-picker`), I = (e) => {
			O("update:color", t(e.colors.hex.substring(0, 7), N.value));
		};
		return (t, n) => (l(), i("div", b, [a("div", x, [
			a("span", S, d(e.label), 1),
			a("span", {
				class: "rv-color-swatch",
				style: c({ backgroundColor: N.value }),
				"aria-hidden": "true"
			}, null, 4),
			a("span", C, d(N.value), 1),
			a("button", {
				type: "button",
				class: "rv-disclosure-button",
				"aria-controls": P.value,
				"aria-expanded": j.value,
				onClick: n[0] ||= (e) => j.value = !j.value
			}, d(j.value ? f(A)("draw.settings.color.done") : f(A)("draw.settings.color.edit")), 9, w)
		]), j.value ? (l(), i("div", {
			key: 0,
			id: P.value,
			class: "rv-color-editor",
			onKeydown: n[1] ||= g(_((e) => j.value = !1, ["stop"]), ["esc"])
		}, [o(f(y), {
			"alpha-channel": "hide",
			"visible-formats": ["hex"],
			"default-format": "hex",
			id: F.value,
			color: N.value,
			onColorChange: I
		}, {
			"hue-range-input-label": h(() => [a("span", E, d(f(A)("draw.settings.color.hue")), 1)]),
			"copy-button": h(() => [a("span", D, d(f(A)("draw.settings.color.copy")), 1), n[2] ||= a("svg", {
				"aria-hidden": "true",
				xmlns: "http://www.w3.org/2000/svg",
				width: "15",
				height: "15",
				viewBox: "0 0 15 15"
			}, [a("path", {
				d: "M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",
				fill: "currentColor"
			}), a("path", {
				d: "M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",
				fill: "currentColor"
			})], -1)]),
			_: 1
		}, 8, ["id", "color"])], 40, T)) : r("", !0)]));
	}
}), [["__scopeId", "data-v-a7167825"]]);
//#endregion
export { O as t };
