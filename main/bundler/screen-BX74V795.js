import { t as e } from "./config-qfRoNiJ2.js";
import { t } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { t as n } from "./keyboard-Ccb6hpvS.js";
import { Fragment as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createTextVNode as l, createVNode as u, defineComponent as d, inject as f, normalizeClass as p, onBeforeUnmount as m, onMounted as h, openBlock as g, ref as _, renderList as v, resolveComponent as y, resolveDirective as b, toDisplayString as x, unref as S, useTemplateRef as C, withCtx as w, withDirectives as T, withKeys as E, withModifiers as D } from "vue";
import { useI18n as O } from "vue-i18n";
//#region src/fixtures/basemap/item.vue?vue&type=script&setup=true&lang.ts
var k = { class: "mb-10" }, A = ["aria-label"], j = {
	key: 0,
	class: "w-full h-30 hidden"
}, M = ["alt", "src"], N = ["alt", "src"], P = ["alt"], F = { class: "pl-5" }, I = { class: "ml-auto pr-5" }, L = ["content"], R = {
	key: 0,
	class: "rv-basemap-check absolute top-0 right-0"
}, z = /* @__PURE__ */ t(/* @__PURE__ */ d({
	__name: "item",
	props: {
		basemap: {
			type: Object,
			required: !0
		},
		tileSchema: {
			type: Object,
			required: !0
		}
	},
	setup(t) {
		let { t: n } = O(), a = f("iApi"), l = e(), u = C("basemapInfo"), d = _(!1), y = i(() => l.activeBasemapConfig), w = (e) => {
			e.id !== y.value.id && a.geo.map.setBasemap(e.id);
		}, z = (e) => {
			e.key === "Tab" && u.value?.matches(":focus") && (d.value = !0, u.value._tippy.show());
		}, B = () => u.value?._tippy?.show(), V = () => u.value?._tippy?.hide(), H = () => {
			d.value = !1, u.value._tippy.hide();
		}, U = (e) => {
			e.pointerType === "touch" && (d.value = !d.value, d.value ? u.value._tippy.show() : u.value._tippy.hide());
		};
		return h(() => {
			u.value?.addEventListener("mouseenter", B), u.value?.addEventListener("mouseleave", V), u.value?.addEventListener("click", U), u.value?.addEventListener("keyup", z), u.value?.addEventListener("blur", H);
		}), m(() => {
			u.value?.removeEventListener("mouseenter", B), u.value?.removeEventListener("mouseleave", V), u.value?.removeEventListener("click", U), u.value?.removeEventListener("keyup", z), u.value?.removeEventListener("blur", H);
		}), (e, i) => {
			let a = b("truncate"), l = b("tippy"), d = b("focus-item");
			return g(), s("div", k, [T((g(), s("button", {
				class: "basemap-item-button bg-gray-300 w-full h-full",
				type: "button",
				"aria-label": S(n)("basemap.select"),
				onClick: i[2] ||= (e) => w(t.basemap)
			}, [
				c("div", null, [c("div", { class: p(["flex hover:opacity-50 basemap-item-image basemap-item-container", t.basemap.hideThumbnail ? "h-30" : "h-180"]) }, [t.basemap.hideThumbnail ? (g(), s("div", j)) : t.basemap.thumbnailUrl ? (g(), s("img", {
					key: 1,
					class: "w-full h-180",
					alt: t.basemap.altText,
					src: t.basemap.thumbnailUrl
				}, null, 8, M)) : t.tileSchema.thumbnailTileUrls && t.tileSchema.thumbnailTileUrls.length > 0 && t.basemap.layers.every((e) => e.layerType === "esri-tile") ? (g(!0), s(r, { key: 2 }, v(t.basemap.layers, (e) => (g(), s("div", {
					key: e.id,
					class: "flex basemap-item-inner h-180"
				}, [(g(!0), s(r, null, v(t.tileSchema.thumbnailTileUrls, (n, r) => (g(), s("img", {
					class: "w-full",
					alt: t.basemap.altText,
					src: e.url + n,
					key: r
				}, null, 8, N))), 128))]))), 128)) : (g(), s("img", {
					key: 3,
					class: "w-full bg-white h-180",
					alt: t.basemap.altText,
					src: "https://openclipart.org/image/800px/275366"
				}, null, 8, P))], 2)]),
				c("div", { class: p(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center", t.basemap.hideThumbnail && t.basemap.id === y.value.id ? "opacity-85" : "opacity-75"]) }, [T((g(), s("div", F, [c("span", null, x(t.basemap.name), 1)])), [[a]]), c("div", I, [T((g(), s("a", {
					onClick: i[0] ||= D(() => {}, ["stop"]),
					onKeydown: i[1] ||= E(D(() => {}, ["prevent"]), ["enter", "space"]),
					content: t.basemap.description,
					ref_key: "basemapInfo",
					ref: u
				}, [...i[3] ||= [c("svg", {
					class: "fill-current w-16 h-16",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24"
				}, [c("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}), c("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })], -1)]], 40, L)), [[l, {
					placement: "bottom",
					trigger: "manual"
				}]])])], 2),
				t.basemap.id === y.value.id && !t.basemap.hideThumbnail ? (g(), s("div", R, [...i[4] ||= [c("svg", {
					class: "fill-current w-25 h-25 relative",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24"
				}, [c("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })], -1)]])) : o("", !0)
			], 8, A)), [[d, "show-truncate"]])]);
		};
	}
}), [["__scopeId", "data-v-148269d3"]]), B = ["content"], V = { class: "h-600 overflow-y-auto" }, H = { class: "font-bold text-xl" }, U = {
	key: 0,
	class: "border-t border-b border-gray-600"
}, W = /* @__PURE__ */ d({
	__name: "screen",
	props: { panel: { type: Object } },
	setup(t) {
		let { t: i } = O(), d = e(), f = C("el"), E = _([]), D = _([]), k = (e) => {
			n(e, f.value) && f.value._tippy.show();
		}, A = () => {
			f.value._tippy.hide();
		};
		h(() => {
			let e = d.config.map;
			E.value = e.tileSchemas, D.value = e.basemaps, f.value?.addEventListener("blur", A), f.value?.addEventListener("keyup", k);
		}), m(() => {
			f.value?.removeEventListener("blur", A), f.value?.removeEventListener("keyup", k);
		});
		let j = (e) => D.value.filter((t) => t.tileSchemaId === e);
		return (e, n) => {
			let d = y("panel-screen"), m = b("truncate"), h = b("focus-list"), _ = b("tippy");
			return g(), a(d, { panel: t.panel }, {
				header: w(() => [l(x(S(i)("basemap.title")), 1)]),
				content: w(() => [T((g(), s("div", {
					content: S(i)("panels.controls.items"),
					ref_key: "el",
					ref: f
				}, [c("div", V, [(g(!0), s(r, null, v(E.value, (e, t) => (g(), s("div", {
					class: "mx-5",
					key: e.id
				}, [c("div", { class: p((t === 0 ? "mt-5" : "mt-36") + " flex mb-5") }, [T((g(), s("h3", H, [l(x(e.name), 1)])), [[m]])], 2), D.value.length > 0 ? (g(), s("ul", U, [(g(!0), s(r, null, v(j(e.id), (t) => (g(), s("li", { key: t.id }, [u(z, {
					basemap: t,
					tileSchema: e,
					class: "block relative overflow-hidden"
				}, null, 8, ["basemap", "tileSchema"])]))), 128))])) : o("", !0)]))), 128))])], 8, B)), [[h], [_, {
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
export { W as default };
