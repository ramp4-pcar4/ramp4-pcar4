import { t as e } from "./form-input-4SDJnuJU.js";
import { a as t, t as n } from "./store-C2phcvMU.js";
import { m as r } from "./draw-CtMlJrZR.js";
import { t as i } from "./_plugin-vue_export-helper-Djzt4Yr7.js";
import { createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createTextVNode as l, createVNode as u, defineComponent as d, inject as f, openBlock as p, ref as m, resolveComponent as h, toDisplayString as g, unref as _, withCtx as v, withModifiers as y } from "vue";
import { useI18n as b } from "vue-i18n";
// src/fixtures/draw/import-shape-screen.vue?vue&type=script&setup=true&lang.ts
var x = { class: "rv-import-content" }, S = {
	key: 0,
	class: "rv-import-error",
	role: "alert"
}, C = /*#__PURE__*/ i(/* @__PURE__ */ d({
	__name: "import-shape-screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(i) {
		let { t: d } = b(), C = f("iApi"), w = n(), T = m(""), E = async (e) => {
			let n = Array.isArray(e) ? e : [e];
			T.value = "";
			try {
				let e = await r(n);
				w.requestImportShapes(e), C.panel.close(t);
			} catch {
				T.value = d("draw.import.error.invalid"), C.updateAlert(T.value);
			}
		};
		return (t, n) => {
			let r = h("panel-screen");
			return p(), a(r, { panel: i.panel }, {
				header: v(() => [l(g(_(d)("draw.import.title")), 1)]),
				content: v(() => [c("div", x, [c("form", {
					name: "draw-import",
					onSubmit: n[0] ||= y(() => {}, ["prevent"])
				}, [u(e, {
					type: "file",
					name: "file",
					"file-accept": ".json,application/json",
					"multiple-files": !0,
					label: _(d)("draw.import.file.label"),
					help: _(d)("draw.import.file.help"),
					"aria-label": _(d)("draw.import.file.label"),
					onUpload: E
				}, null, 8, [
					"label",
					"help",
					"aria-label"
				])], 32), T.value ? (p(), s("p", S, g(T.value), 1)) : o("", !0)])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-c4a75ec2"]]);
export { C as default };
