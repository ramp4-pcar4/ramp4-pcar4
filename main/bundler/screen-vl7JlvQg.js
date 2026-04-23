import { $ as e, A as t, B as n, O as r, Z as i, k as a, z as o } from "./main-Bz1ia27O.js";
import { t as s } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { Fragment as c, computed as l, createBlock as u, createCommentVNode as d, createElementBlock as f, createElementVNode as p, createTextVNode as m, createVNode as h, defineComponent as g, inject as _, normalizeClass as v, onBeforeMount as y, onBeforeUnmount as b, onMounted as x, openBlock as S, ref as C, renderList as w, renderSlot as T, resolveComponent as ee, resolveDirective as E, toDisplayString as D, unref as O, watch as k, withCtx as A, withDirectives as j, withKeys as M, withModifiers as N } from "vue";
import { debounce as P } from "es-toolkit/function";
import { useI18n as F } from "vue-i18n";
import te from "await-to-js";
//#region src/fixtures/geosearch/search-bar.vue?vue&type=script&setup=true&lang.ts
var I = { class: "rv-geosearch-bar relative h-26 mx-8 mb-8" }, L = [
	"placeholder",
	"value",
	"aria-label"
], R = { class: "absolute inset-y-0 right-8 grid w-10 place-content-center" }, z = ["aria-label", "content"], B = /* @__PURE__ */ g({
	__name: "search-bar",
	setup(e) {
		let { t } = F(), n = r(), i = o(), a = l(() => n.searchVal), s = l(() => [
			"\"",
			"$",
			"!",
			"*",
			"+",
			"?",
			"^",
			"{",
			"}",
			"(",
			")",
			"|",
			"[",
			"]"
		].filter((e) => n.searchVal.includes(e)).join("")), c = (e) => {
			n.setSearchTerm(e), n.setSearchRegex(e);
		}, u = P((e) => {
			c(e);
		}, 500);
		return (e, n) => {
			let r = E("tippy");
			return S(), f("div", I, [p("input", {
				type: "text",
				class: v(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0", { "border-yellow-500": s.value }]),
				placeholder: O(t)("geosearch.searchText"),
				value: a.value,
				onInput: n[0] ||= (e) => O(u)(e.target.value),
				onKeyup: n[1] ||= M((e) => {
					O(i).mobileView && e.target.blur();
				}, ["enter"]),
				"aria-label": O(t)("geosearch.searchText"),
				onKeypress: n[2] ||= M(N(() => {}, ["prevent"]), ["enter"]),
				enterkeyhint: "done"
			}, null, 42, L), p("span", R, [s.value ? j((S(), f("button", {
				key: 0,
				class: "cursor-default",
				"aria-label": O(t)("geosearch.badChars", { chars: s.value }),
				content: O(t)("geosearch.badChars", { chars: s.value })
			}, [...n[3] ||= [m(" ⚠ ", -1)]], 8, z)), [[r]]) : d("", !0)])]);
		};
	}
}), V = { class: "rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14" }, H = { class: "w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0" }, U = ["value", "aria-label"], W = {
	value: "",
	disabled: "",
	hidden: ""
}, G = { class: "sm:w-1/2 h-26 sm:mx-16 flex" }, K = ["value", "aria-label"], q = {
	value: "",
	disabled: "",
	hidden: ""
}, J = [
	"disabled",
	"content",
	"aria-label"
], Y = /* @__PURE__ */ g({
	__name: "top-filters",
	setup(e) {
		let { t } = F(), n = _("iApi"), i = r(), a = C([]), o = C([]), s = C([]), u = l(() => i.queryParams), d = l(() => n.language), h = (e) => i.setProvince(e), g = (e) => i.setType(e), v = () => {
			h({}), g({});
		}, x = () => {
			i.initService(n.language, n.fixture.get("geosearch").config);
			let e = a.value.find((e) => u.value.province === e.name)?.code, t = o.value.find((e) => u.value.type === e.name)?.code;
			i.getProvinces.then((t) => {
				a.value = t, h({
					province: t.find((t) => t.code === e)?.name,
					forceReRun: !0
				});
			}), i.getTypes.then((e) => {
				o.value = e, g({
					type: e.find((e) => e.code === t)?.name,
					forceReRun: !0
				});
			});
		};
		return y(() => {
			x(), s.value.push(k(d, x));
		}), b(() => {
			s.value.forEach((e) => e());
		}), (e, n) => {
			let r = E("truncate"), i = E("tippy");
			return S(), f("div", V, [p("div", H, [j((S(), f("select", {
				class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",
				value: u.value.province,
				"aria-label": O(t)("geosearch.filters.province"),
				onChange: n[0] ||= (e) => h({ province: e.target.value })
			}, [j((S(), f("option", W, [m(D(O(t)("geosearch.filters.province")), 1)])), [[r]]), (S(!0), f(c, null, w(a.value, (e) => j((S(), f("option", { key: e.code }, [m(D(e.name), 1)])), [[r]])), 128))], 40, U)), [[r]])]), p("div", G, [j((S(), f("select", {
				class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",
				value: u.value.type,
				"aria-label": O(t)("geosearch.filters.type"),
				onChange: n[1] ||= (e) => g({ type: e.target.value })
			}, [p("option", q, D(O(t)("geosearch.filters.type")), 1), (S(!0), f(c, null, w(o.value, (e) => (S(), f("option", { key: e.code }, D(e.name), 1))), 128))], 40, K)), [[r]]), j((S(), f("button", {
				type: "button",
				class: "text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",
				disabled: !u.value.type && !u.value.province,
				onClick: v,
				content: O(t)("geosearch.filters.clear"),
				"aria-label": O(t)("geosearch.filters.clear")
			}, [...n[2] ||= [p("div", { class: "rv-geosearch-icon" }, [p("svg", {
				class: "fill-current w-18 h-18",
				viewBox: "0 0 23 21"
			}, [p("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })])], -1)]], 8, J)), [[i, { placement: "bottom" }]])])]);
		};
	}
}), X = { class: "rv-geosearch-bottom-filters" }, Z = { class: "bg-white" }, Q = { class: "ml-8 cursor-pointer font-normal" }, ne = ["checked"], re = /* @__PURE__ */ g({
	__name: "bottom-filters",
	setup(e) {
		let { t } = F(), i = _("iApi"), a = r(), o = l(() => a.resultsVisible), s = P((e) => {
			u(e).then((e) => {
				c({
					extent: e,
					visible: o.value
				});
			});
		}, 300), c = (e) => {
			a.setMapExtent(e);
		}, u = async (e) => e.sr.wkid === 4326 ? e : await i.geo.proj.projectGeometry(4326, e), d = (e) => {
			u(i.geo.map.getExtent()).then((t) => {
				c({
					extent: t,
					visible: e
				});
			});
		};
		return x(() => {
			i.event.on(n.MAP_EXTENTCHANGE, s, "geosearch_map_extent");
		}), b(() => {
			i.event.off("geosearch_map_extent");
		}), (e, n) => (S(), f("div", X, [p("div", Z, [p("label", Q, [p("input", {
			type: "checkbox",
			class: "border-2 mx-8 border-gray-600 cursor-pointer",
			checked: o.value,
			onChange: n[0] ||= (e) => d(e.target.checked),
			onKeypress: n[1] ||= M(N(() => {}, ["prevent"]), ["enter"])
		}, null, 40, ne), m(D(O(t)("geosearch.visible")), 1)])])]));
	}
}), ie = {}, ae = { class: "w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14" }, oe = {
	class: "h-full progressbar bg-blue-800 rounded-full top-0",
	"aria-valuemin": "0",
	"aria-valuemax": "100"
}, se = { class: "flex items-center h-full" };
function ce(e, t) {
	return S(), f("div", ae, [p("div", oe, [p("span", se, [T(e.$slots, "default", {}, void 0, !0)])])]);
}
var le = /* @__PURE__ */ s(ie, [["render", ce], ["__scopeId", "data-v-0a8d1c36"]]), ue = { class: "flex flex-col h-full" }, de = {
	key: 1,
	class: "text-red-900 text-xs px-8 mb-10"
}, fe = {
	key: 2,
	class: "px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"
}, pe = { class: "relative h-48" }, $ = { class: "font-bold text-blue-600" }, me = {
	key: 3,
	class: "rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"
}, he = ["onClick"], ge = { class: "rv-result-description px-8" }, _e = { class: "flex-1 text-left truncate font-bold leading-tight" }, ve = ["innerHTML"], ye = {
	key: 0,
	class: "text-gray-600 text-sm"
}, be = {
	key: 1,
	class: "hidden"
}, xe = {
	key: 2,
	class: "text-sm font-normal"
}, Se = /* @__PURE__ */ g({
	__name: "screen",
	props: { panel: { type: Object } },
	setup(n) {
		let { t: o } = F(), s = _("iApi"), g = r(), v = l(() => g.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, "").trim()), y = l(() => g.searchResults), b = l(() => g.loadingResults), x = l(() => g.failedServices), C = l(() => g.GSservice.config.fsaUrl), T = async (n) => {
			if (n.flav === "fsa" && C.value) {
				let [r, o] = await te(t(C.value.replace(a, n.name)));
				if (!r) {
					let t = new i("fsazoom", o.features[0].geometry.rings, e.fromConfig(o.spatialReference), !0);
					s.geo.map.zoomMapTo(t);
					return;
				}
			}
			let r = new i("zoomies", [[
				[n.bbox[0], n.bbox[1]],
				[n.bbox[0], n.bbox[3]],
				[n.bbox[2], n.bbox[3]],
				[n.bbox[2], n.bbox[1]],
				[n.bbox[0], n.bbox[1]]
			]], e.latLongSR(), !0);
			s.geo.map.zoomMapTo(r);
		}, k = (e, t) => {
			let n = e.replace(RegExp(`${g.searchRegex}`, "gi"), (e) => "<span class=\"font-bold text-blue-600\">" + e + "</span>");
			return t ? n + "," : n;
		};
		return (e, t) => {
			let r = ee("panel-screen"), i = E("truncate"), a = E("focus-item"), s = E("focus-list");
			return S(), u(r, { panel: n.panel }, {
				header: A(() => [m(D(O(o)("geosearch.title")), 1)]),
				content: A(() => [p("div", ue, [
					h(B),
					h(Y),
					b.value ? (S(), u(le, {
						key: 0,
						class: "flex-none"
					})) : d("", !0),
					x.value.length > 0 && !b.value ? (S(), f("div", de, D(O(o)("geosearch.serviceError", { services: x.value.join(", ") })), 1)) : d("", !0),
					v.value && y.value.length === 0 && !b.value ? (S(), f("div", fe, [p("span", pe, [m(D(O(o)("geosearch.noResults")), 1), p("span", $, "\"" + D(v.value) + "\"", 1)])])) : d("", !0),
					y.value.length > 0 ? j((S(), f("ul", me, [(S(!0), f(c, null, w(y.value, (e, n) => (S(), f("li", {
						class: "relative h-56",
						key: n
					}, [j((S(), f("button", {
						type: "button",
						class: "absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",
						onClick: (t) => T(e),
						style: { "border-bottom": "1px solid lightgray" },
						"truncate-trigger": ""
					}, [p("div", ge, [j((S(), f("div", _e, [
						p("span", { innerHTML: k(e.name, e.location.province) }, null, 8, ve),
						e.location.province ? (S(), f("span", ye, D(e.location.city ? " " + e.location.city + ", " + e.location.province.abbr : " " + e.location.province.abbr), 1)) : d("", !0),
						e.type ? (S(), f("span", be, "; ")) : d("", !0),
						e.type ? (S(), f("span", xe, [t[0] ||= p("br", null, null, -1), m(D(e.type), 1)])) : d("", !0)
					])), [[i, {
						externalTrigger: !0,
						options: { placement: "top-start" }
					}]])])], 8, he)), [[a, "show-truncate"]])]))), 128))])), [[s]]) : d("", !0),
					h(re, { class: "mt-auto" })
				])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
});
//#endregion
export { Se as default };
