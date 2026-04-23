import { N as e, X as t } from "./main-Bz1ia27O.js";
import { t as n } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { Fragment as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createTextVNode as l, createVNode as u, defineComponent as d, inject as f, normalizeClass as p, onMounted as m, openBlock as h, ref as g, renderList as _, resolveComponent as v, resolveDirective as y, toDisplayString as b, unref as x, vShow as S, withCtx as C, withDirectives as w, withKeys as T, withModifiers as E } from "vue";
import { useI18n as D } from "vue-i18n";
//#region src/fixtures/areas-of-interest/item.vue?vue&type=script&setup=true&lang.ts
var O = { class: "mt-10" }, k = ["aria-label"], A = ["alt", "src"], j = ["alt"], M = { class: "absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center" }, N = { class: "pl-5" }, P = { class: "ml-auto pr-5" }, F = ["content"], I = /* @__PURE__ */ n(/* @__PURE__ */ d({
	__name: "item",
	props: {
		area: {
			type: Object,
			required: !0
		},
		showThumbnail: { type: Boolean }
	},
	setup(e) {
		let { t: n } = D(), r = f("iApi"), i = (e) => {
			if (!e.extent) {
				console.error("selected area of interest doesn't have an extent specified.");
				return;
			}
			r.geo.map.zoomMapTo(t.fromConfig("area-of-interest-extent", e.extent));
		};
		return (t, r) => {
			let a = y("truncate"), l = y("tippy"), u = y("focus-item");
			return h(), s("div", O, [w((h(), s("button", {
				type: "button",
				class: p(["area-of-interest-item-button bg-gray-300 w-full", { "border border-gray-300": e.showThumbnail }]),
				"aria-label": x(n)("areas-of-interest.select"),
				onClick: r[2] ||= (t) => i(e.area)
			}, [c("div", null, [c("div", { class: p(["flex hover:opacity-50 area-of-interest-item-image", e.showThumbnail ? "h-180" : "h-30"]) }, [e.area.thumbnail ? (h(), s("img", {
				key: 0,
				class: "w-full bg-white object-contain",
				alt: e.area.altText || e.area.title,
				src: e.area.thumbnail
			}, null, 8, A)) : e.showThumbnail ? (h(), s("img", {
				key: 1,
				class: "w-full bg-white object-contain py-30",
				alt: e.area.altText || e.area.title,
				src: "https://openclipart.org/image/800px/160615"
			}, null, 8, j)) : o("", !0)], 2)]), c("div", M, [w((h(), s("div", N, [c("span", null, b(e.area.title), 1)])), [[a]]), w(c("div", P, [w((h(), s("a", {
				onClick: r[0] ||= E(() => {}, ["stop"]),
				onKeydown: r[1] ||= T(E(() => {}, ["prevent"]), ["enter", "space"]),
				content: e.area.description
			}, [...r[3] ||= [c("svg", {
				class: "fill-current w-16 h-16",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, [c("path", {
				d: "M0 0h24v24H0z",
				fill: "none"
			}), c("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })], -1)]], 40, F)), [[l, {
				placement: "bottom",
				trigger: "click focus"
			}]])], 512), [[S, e.area.description]])])], 10, k)), [[u]])]);
		};
	}
}), [["__scopeId", "data-v-e64041d0"]]), L = { class: "h-600 overflow-y-auto" }, R = { class: "mx-5" }, z = { key: 0 }, B = /* @__PURE__ */ d({
	__name: "screen",
	props: { panel: { type: Object } },
	setup(t) {
		let { t: n } = D(), d = e(), f = i(() => d.areas), p = g(!1);
		return m(() => {
			p.value = !!f.value?.some((e) => e.thumbnail);
		}), (e, i) => {
			let d = v("panel-screen"), m = y("focus-list");
			return h(), a(d, { panel: t.panel }, {
				header: C(() => [l(b(x(n)("areas-of-interest.title")), 1)]),
				content: C(() => [c("div", L, [c("div", R, [f.value.length > 0 ? w((h(), s("ul", z, [(h(!0), s(r, null, _(f.value, (e, t) => (h(), s("li", { key: t }, [u(I, {
					area: e,
					"show-thumbnail": p.value,
					class: "block relative overflow-hidden"
				}, null, 8, ["area", "show-thumbnail"])]))), 128))])), [[m]]) : o("", !0)])])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
});
//#endregion
export { B as default };
