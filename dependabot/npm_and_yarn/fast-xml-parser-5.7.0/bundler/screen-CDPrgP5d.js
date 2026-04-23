import { t as e } from "./keyboard-Ccb6hpvS.js";
import { Fragment as t, computed as n, createBlock as r, createElementBlock as i, createTextVNode as a, createVNode as o, defineAsyncComponent as s, defineComponent as c, inject as l, onBeforeUnmount as u, onMounted as d, openBlock as f, ref as p, renderList as m, resolveComponent as h, resolveDirective as g, toDisplayString as _, unref as v, withCtx as y, withDirectives as b } from "vue";
import { useI18n as x } from "vue-i18n";
//#region src/fixtures/legend/screen.vue?vue&type=script&setup=true&lang.ts
var S = ["content"], C = /* @__PURE__ */ c({
	__name: "screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(c) {
		let C = s(() => import("./header-C-udLNys.js")), w = s(() => import("./item-B3hphJgu.js")), { t: T } = x(), E = l("iApi"), D = p(), O = () => {
			D.value._tippy.hide();
		}, k = (t) => {
			e(t, D.value) && D.value._tippy.show();
		}, A = (e) => {
			let t = new CustomEvent("switchFocusItem", { detail: { focusItem: e } });
			D.value?.dispatchEvent(t);
		};
		d(() => {
			D.value?.addEventListener("blur", O), D.value?.addEventListener("keyup", k);
		}), u(() => {
			D.value?.removeEventListener("blur", O), D.value?.removeEventListener("keyup", k);
		});
		let j = n(() => {
			let e = E.fixture.get("legend");
			return e ? [...e.getLegend()] : [];
		});
		return (e, n) => {
			let s = h("panel-screen"), l = g("focus-list"), u = g("tippy");
			return f(), r(s, { panel: c.panel }, {
				header: y(() => [a(_(v(T)("legend.title")), 1)]),
				content: y(() => [o(v(C)), b((f(), i("div", {
					content: v(T)("panels.controls.items"),
					ref_key: "el",
					ref: D
				}, [(f(!0), i(t, null, m(j.value, (e) => (f(), r(v(w), {
					legendItem: e,
					key: e.uid,
					onFocusItem: n[0] ||= (e, t) => A(e)
				}, null, 8, ["legendItem"]))), 128))], 8, S)), [[l], [u, {
					trigger: "manual",
					placement: "top-end",
					touch: !1,
					maxWidth: 190
				}]])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
});
//#endregion
export { C as default };
