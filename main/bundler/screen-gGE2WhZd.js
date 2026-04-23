import { M as e, z as t } from "./main-Bz1ia27O.js";
import { Fragment as n, computed as r, createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, defineComponent as l, inject as u, normalizeClass as d, onBeforeMount as f, onBeforeUnmount as p, onMounted as m, openBlock as h, ref as g, renderList as _, resolveComponent as v, resolveDirective as y, toDisplayString as b, unref as x, useTemplateRef as S, watch as C, withCtx as w, withDirectives as T } from "vue";
import { debounce as E } from "es-toolkit/function";
import { useI18n as D } from "vue-i18n";
//#region src/fixtures/export/settings-button.vue?vue&type=script&setup=true&lang.ts
var O = ["onClick", "aria-label"], k = { class: "md-icon-small inline" }, A = /* @__PURE__ */ l({
	__name: "settings-button",
	props: { componentSelectedState: {
		type: Object,
		required: !0
	} },
	setup(a) {
		let { t: c } = D(), l = t(), u = e(), f = r(() => l.mobileView ? "top-end" : "left-end"), p = (e) => {
			e.selectable && u.toggleSelected({ name: e.name });
		};
		return (e, t) => {
			let r = v("dropdown-menu"), l = y("focus-item");
			return T((h(), i(r, {
				position: f.value,
				tooltip: x(c)("export.menu"),
				tooltipPlacement: "top"
			}, {
				header: w(() => [...t[0] ||= [s("div", { class: "flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8" }, [s("svg", {
					class: "fill-current w-24 h-24 m-auto",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24"
				}, [s("g", null, [s("path", {
					d: "M0,0h24v24H0V0z",
					fill: "none"
				}), s("path", { d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" })])])], -1)]]),
				default: w(() => [(h(!0), o(n, null, _(a.componentSelectedState, (e) => (h(), o("a", {
					key: e.name,
					onClick: (t) => p(e),
					href: "javascript:;",
					class: d(`text-left text-sm sm:text-base ${e.selectable ? "cursor-pointer" : "cursor-default"}`),
					"aria-label": e.name
				}, [s("div", k, [(h(), o("svg", {
					height: "20",
					width: "20",
					viewBox: "0 0 24 24",
					class: d(`inline mx-8 ${e.selected ? "" : "invisible"}`)
				}, [...t[1] ||= [s("g", null, [s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })], -1)]], 2)), s("span", { class: d(`inline ${e.selectable ? "" : "text-gray-300"}
                    `) }, b(x(c)(`export.menu.component.${e.name}`)), 3)])], 10, O))), 128))]),
				_: 1
			}, 8, ["position", "tooltip"])), [[l]]);
		};
	}
}), j = {
	class: "overflow-hidden border border-gray-200",
	ref: "componentEl"
}, M = { class: "flex" }, N = ["aria-label"], P = ["aria-label"], F = /* @__PURE__ */ l({
	__name: "screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(t) {
		let n = t, { t: o } = D(), l = u("iApi"), d = e(), _ = g(), y = g(void 0), T = g(void 0), O = g([]), k = S("componentEl"), F = r(() => d.componentSelectedState), I = r(() => {
			let e = {};
			return _.value && Object.keys(F.value).forEach((t) => {
				e[t] = {
					name: t,
					selected: F.value[t] ?? !1,
					selectable: (_.value?.config)[t]?.selectable ?? !0
				};
			}), e;
		}), L = r(() => !!_.value?.customRendererFunc), R = E(() => {
			if (!_.value || !k.value) return;
			let e = k.value.querySelector(".export-canvas");
			_.value.make(e, k.value.clientWidth);
		}, 300);
		return f(() => {
			n.panel.exportMake = R, O.value.push(C(I, () => {
				R();
			}));
		}), m(() => {
			_.value = l.fixture.get("export"), y.value = new ResizeObserver(R), T.value = new ResizeObserver(R), y.value.observe(l.$rootEl), T.value.observe(l.$rootEl.querySelector("[data-cy=\"export\"]"));
		}), p(() => {
			y.value.disconnect(), T.value.disconnect(), O.value.forEach((e) => e());
		}), (e, n) => {
			let r = v("panel-screen");
			return h(), i(r, {
				panel: t.panel,
				footer: !0
			}, {
				header: w(() => [c(b(x(o)("export.title")), 1)]),
				content: w(() => [s("div", j, [...n[2] ||= [s("canvas", { class: "export-canvas !w-[100%]" }, null, -1)]], 512)]),
				footer: w(() => [s("div", M, [
					s("button", {
						type: "button",
						onClick: n[0] ||= (e) => _.value?.export(),
						class: "bg-green-700 hover:bg-green-800 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16",
						"aria-label": x(o)("export.download")
					}, b(x(o)("export.download")), 9, N),
					s("button", {
						type: "button",
						onClick: n[1] ||= (e) => x(R)(),
						class: "py-8 px-4 sm:px-16",
						"aria-label": x(o)("export.refresh")
					}, b(x(o)("export.refresh")), 9, P),
					L.value ? a("", !0) : (h(), i(A, {
						key: 0,
						componentSelectedState: I.value,
						class: "ml-auto flex px-4 sm:px-8"
					}, null, 8, ["componentSelectedState"]))
				])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
});
//#endregion
export { F as default };
