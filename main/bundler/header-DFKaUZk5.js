import { B as e, x as t } from "./main-Bz1ia27O.js";
import { t as n } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { computed as r, createElementBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, inject as c, openBlock as l, resolveComponent as u, resolveDirective as d, toDisplayString as f, unref as p, vShow as m, withCtx as h, withDirectives as g } from "vue";
import { useI18n as _ } from "vue-i18n";
//#region src/fixtures/legend/header.vue?vue&type=script&setup=true&lang.ts
var v = { class: "relative legend-header flex align-middle" }, y = ["content", "aria-label"], b = ["content", "aria-label"], x = /* @__PURE__ */ n(/* @__PURE__ */ s({
	__name: "header",
	setup(n) {
		let s = t(), { t: x } = _(), S = c("iApi"), C = r(() => S.fixture.get("legend")), w = () => {
			S.event.emit(e.WIZARD_TOGGLE);
		}, T = () => {
			try {
				return S.fixture.exists("wizard");
			} catch {
				return !1;
			}
		}, E = () => {
			S.event.emit(e.REORDER_TOGGLE);
		}, D = () => {
			try {
				return S.fixture.exists("layer-reorder");
			} catch {
				return !1;
			}
		}, O = (e) => s.headerControls.includes(e);
		return (e, t) => {
			let n = u("dropdown-menu"), r = d("tippy");
			return l(), i("div", v, [
				a("div", null, [g((l(), i("button", {
					type: "button",
					onClick: w,
					class: "relative mr-auto text-gray-500 hover:text-black",
					content: p(x)("legend.header.addlayer"),
					"aria-label": p(x)("legend.header.addlayer")
				}, [...t[4] ||= [a("div", { class: "p-8" }, [a("svg", {
					class: "fill-current w-18 h-18 flip",
					viewBox: "0 0 24 24"
				}, [a("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })])], -1)]], 8, y)), [[m, T() && O("wizard")], [r, { placement: "right" }]])]),
				a("div", null, [g((l(), i("button", {
					type: "button",
					onClick: E,
					class: "relative mr-auto text-gray-500 hover:text-black flex justify-center items-center",
					content: p(x)("legend.header.reorderlayers"),
					"aria-label": p(x)("legend.header.reorderlayers")
				}, [...t[5] ||= [a("div", { class: "p-8" }, [a("svg", {
					class: "fill-current w-18 h-18 flip",
					viewBox: "0 0 24 24"
				}, [a("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}), a("path", { d: "M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" })])], -1)]], 8, b)), [[m, D() && O("layerReorder")], [r, { placement: "right" }]])]),
				t[8] ||= a("span", { class: "flex-1" }, null, -1),
				g(o(n, {
					class: "relative",
					position: "left-start",
					tooltip: p(x)("legend.header.groups"),
					tooltipPlacement: "left-start",
					tooltipPlacementAlt: "bottom-end"
				}, {
					header: h(() => [...t[6] ||= [a("div", { class: "p-8" }, [a("svg", {
						class: "fill-current w-18 h-18",
						viewBox: "0 0 24 24"
					}, [a("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })])], -1)]]),
					default: h(() => [a("a", {
						href: "javascript:;",
						class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
						onClick: t[0] ||= (e) => C.value.expandItems(!0)
					}, f(p(x)("legend.header.groups.expand")), 1), a("a", {
						href: "javascript:;",
						class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
						onClick: t[1] ||= (e) => C.value.expandItems(!1)
					}, f(p(x)("legend.header.groups.collapse")), 1)]),
					_: 1
				}, 8, ["tooltip"]), [[m, O("groupToggle")]]),
				g(o(n, {
					class: "relative",
					position: "left-start",
					tooltip: p(x)("legend.header.visible"),
					tooltipPlacement: "left-start",
					tooltipPlacementAlt: "bottom-end"
				}, {
					header: h(() => [...t[7] ||= [a("div", { class: "flex p-8" }, [a("svg", {
						class: "fill-current w-18 h-18",
						viewBox: "0 0 24 24"
					}, [a("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" })])], -1)]]),
					default: h(() => [a("a", {
						href: "javascript:;",
						class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
						onClick: t[2] ||= (e) => C.value.showItems(!0)
					}, f(p(x)("legend.header.visible.show")), 1), a("a", {
						href: "javascript:;",
						class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
						onClick: t[3] ||= (e) => C.value.showItems(!1)
					}, f(p(x)("legend.header.visible.hide")), 1)]),
					_: 1
				}, 8, ["tooltip"]), [[m, O("visibilityToggle")]])
			]);
		};
	}
}), [["__scopeId", "data-v-9e355db4"]]);
//#endregion
export { x as default };
