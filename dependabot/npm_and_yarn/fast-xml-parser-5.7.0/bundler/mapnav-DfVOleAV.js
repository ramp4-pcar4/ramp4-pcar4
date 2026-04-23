import { B as e, b as t, s as n } from "./main-BtLSZphp.js";
import { t as r } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { t as i } from "./keyboard-Ccb6hpvS.js";
import { t as a } from "./store-BBZtsAi6.js";
import { Fragment as o, computed as s, createBlock as c, createCommentVNode as l, createElementBlock as u, createElementVNode as d, createVNode as f, defineAsyncComponent as p, defineComponent as m, inject as h, markRaw as g, nextTick as _, normalizeClass as v, normalizeStyle as y, onBeforeUnmount as b, onMounted as x, openBlock as S, ref as C, renderList as w, resolveComponent as T, resolveDirective as E, resolveDynamicComponent as D, unref as O, useTemplateRef as k, withCtx as A, withDirectives as j } from "vue";
import { throttle as M } from "es-toolkit/function";
import { useI18n as N } from "vue-i18n";
//#region src/fixtures/mapnav/buttons/divider-nav.vue
var P = {}, F = { class: "border-b p-0 self-center w-2/3" };
function I(e, t) {
	return S(), u("span", F);
}
var L = /* @__PURE__ */ r(P, [["render", I]]), R = /* @__PURE__ */ m({
	__name: "zoom-nav",
	setup(e) {
		let { t } = N(), n = h("iApi"), r = M(() => n.geo.map.zoomIn(), 400, { edges: ["leading"] }), i = M(() => n.geo.map.zoomOut(), 400, { edges: ["leading"] });
		return (e, n) => {
			let a = T("mapnav-button");
			return S(), u("div", null, [
				f(a, {
					onClickFunction: O(r),
					tooltip: O(t)("mapnav.zoomIn")
				}, {
					default: A(() => [...n[0] ||= [d("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						class: "fill-current w-32 h-20"
					}, [d("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }), d("path", {
						d: "M0 0h24v24H0z",
						fill: "none"
					})], -1)]]),
					_: 1
				}, 8, ["onClickFunction", "tooltip"]),
				f(L),
				f(a, {
					onClickFunction: O(i),
					tooltip: O(t)("mapnav.zoomOut")
				}, {
					default: A(() => [...n[1] ||= [d("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						class: "fill-current w-32 h-20"
					}, [d("path", { d: "M19 13H5v-2h14v2z" }), d("path", {
						d: "M0 0h24v24H0z",
						fill: "none"
					})], -1)]]),
					_: 1
				}, 8, ["onClickFunction", "tooltip"])
			]);
		};
	}
}), z = /* @__PURE__ */ r(/* @__PURE__ */ m({
	__name: "draw-nav-section",
	props: { showOutline: {
		type: Boolean,
		default: !1
	} },
	setup(e) {
		let t = h("iApi"), { t: n } = N(), r = a();
		r.mapNavEl = k("mapNavEl");
		let i = [
			{
				type: "point",
				icon: g(p(() => import("./point-icon-CqBcZKw-.js")))
			},
			{
				type: "polyline",
				icon: g(p(() => import("./polyline-icon-DHkEaMJO.js")))
			},
			{
				type: "polygon",
				icon: g(p(() => import("./polygon-icon-Cuub0vzq.js")))
			},
			{
				type: "circle",
				icon: g(p(() => import("./circle-icon-l-MW3BsG.js")))
			},
			{
				type: "rectangle",
				icon: g(p(() => import("./rectangle-icon-CgBD81-X.js")))
			}
		], l = s(() => {
			let e = i.filter((e) => r.supportedTypes.some((t) => t.type === e.type));
			return e.push({
				type: "edit",
				icon: g(p(() => import("./edit-icon-CdQGWBnd.js")))
			}), e;
		}), d = (e) => {
			r.activeTool === e ? r.setActiveTool(null) : r.setActiveTool(e);
		}, f = () => {
			t.geo.map.setMouseFocus();
		};
		return (t, i) => {
			let a = T("mapnav-button");
			return S(), u("div", { class: v([{ active: O(r).activeTool || O(r).activeTool == "" }, "mapnav-section bg-white-75 hover:bg-white"]) }, [(S(!0), u(o, null, w(l.value, (t, i) => (S(), c(a, {
				key: t.type,
				onMousedown: f,
				onClickFunction: () => d(t.type),
				tooltip: O(n)(`draw.${t.type}.tooltip`),
				style: y({ marginBottom: i === l.value.length - 1 ? "0" : "0px" }),
				showOutline: e.showOutline,
				class: v({ "active-tool": O(r).activeTool === t.type }),
				ref_for: !0,
				ref: "mapNavEl"
			}, {
				default: A(() => [(S(), c(D(t.icon), { class: "fill-current w-32 h-20" }))]),
				_: 2
			}, 1032, [
				"onClickFunction",
				"tooltip",
				"style",
				"showOutline",
				"class"
			]))), 128))], 2);
		};
	}
}), [["__scopeId", "data-v-2036016d"]]), B = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, V = ["content"], H = { class: "mapnav-section bg-white-75 hover:bg-white" }, U = {
	key: 1,
	class: "mapnav-section bg-white-75 hover:bg-white"
}, W = ["content"], G = { key: 0 }, K = /* @__PURE__ */ r(/* @__PURE__ */ m({
	__name: "mapnav",
	setup(e) {
		let n = C(void 0), r = h("iApi"), a = t(), { t: p } = N(), m = C(), g = s(() => r.getConfig().fixtures?.mapnav?.items?.some((e) => e === "draw")), k = C(r.$rootEl?.clientHeight), M = C(!1), P = C(0), F = () => {
			k.value = r.$rootEl?.clientHeight;
		}, I = () => {
			m.value._tippy.hide();
		}, K = (e) => {
			i(e, m.value) && m.value._tippy.show();
		};
		x(() => {
			m.value?.addEventListener("blur", I), m.value?.addEventListener("keyup", K), n.value = new ResizeObserver(F), n.value.observe(r.$rootEl), _(() => {
				P.value = q.value.length * 82;
			});
		}), b(() => {
			m.value?.removeEventListener("blur", I), m.value?.removeEventListener("keyup", K), n.value.disconnect();
		});
		let q = s(() => a.order.map((e) => a.items[e]).filter((e) => e.componentId && e.id !== "draw"));
		return (e, t) => {
			let n = T("mapnav-button"), r = E("focus-list"), i = E("tippy");
			return S(), u("div", B, [j((S(), u("div", {
				class: "mapnav-section flex flex-col",
				content: O(p)("panels.controls.items"),
				ref_key: "el",
				ref: m
			}, [
				g.value && k.value > P.value ? (S(), u(o, { key: 0 }, [f(z), t[0] ||= d("span", { class: "py-1" }, null, -1)], 64)) : l("", !0),
				f(R, { class: "mapnav-section bg-white-75 hover:bg-white" }),
				t[2] ||= d("span", { class: "py-1" }, null, -1),
				d("div", H, [k.value <= P.value ? (S(), c(n, {
					key: 0,
					class: "self-center",
					onClickFunction: () => {
						M.value = !M.value;
					},
					tooltip: M.value ? e.$t("mapnav.closeMenu") : e.$t("mapnav.openMenu")
				}, {
					default: A(() => [(S(), u("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						"shape-rendering": "geometricPrecision",
						"text-rendering": "geometricPrecision",
						"image-rendering": "optimizeQuality",
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						viewBox: "0 0 319 511.61",
						class: v(["fill-current w-6 mx-auto transition-all transform", { "rotate-180": M.value }])
					}, [...t[1] ||= [d("path", { d: "m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" }, null, -1)]], 2))]),
					_: 1
				}, 8, ["onClickFunction", "tooltip"])) : l("", !0)]),
				k.value > P.value ? (S(), u("div", U, [(S(!0), u(o, null, w(q.value, (e, t) => (S(), u(o, { key: e.id + "button" }, [(S(), c(D(e.id + "-nav-button"))), t === q.value.length - 1 ? l("", !0) : (S(), c(L, {
					key: 0,
					class: "mapnav-divider"
				}))], 64))), 128))])) : l("", !0)
			], 8, V)), [[r], [i, {
				trigger: "manual",
				placement: "top-end",
				touch: !1,
				maxWidth: 190
			}]]), k.value <= P.value && M.value ? j((S(), u("div", {
				key: 0,
				class: "mapnav-section flex flex-col flex-wrap-reverse shadow-tm absolute right-56 bottom-36 sm:bottom-48 items-start z-50 gap-0.5",
				style: y({
					maxHeight: `${(k.value - 70) * .8}px`,
					height: "fit-content",
					width: "fit-content"
				}),
				content: O(p)("panels.controls.items")
			}, [g.value ? (S(), u("div", G, [f(z, { showOutline: "" })])) : l("", !0), (S(!0), u(o, null, w(q.value, (e) => (S(), c(D(e.id + "-nav-button"), {
				key: e.id + "button",
				class: "mapnav-section bg-white-75 hover:bg-white",
				showOutline: ""
			}))), 128))], 12, W)), [[i, {
				trigger: "manual",
				placement: "top-end",
				maxWidth: 190
			}]]) : l("", !0)]);
		};
	}
}), [["__scopeId", "data-v-5b4bcb7b"]]), q = class extends n {
	mapnavStore = t(this.$vApp.$pinia);
	get config() {
		return super.config;
	}
	_parseConfig(e) {
		if (!e) return;
		let t = e.items.map((e) => ({ id: e }));
		this.mapnavStore.items = t.reduce((e, t) => (e[t.id] = t, e), {}), this.mapnavStore.order = t.map((e) => e.id), this._validateItems();
	}
	_validateItems() {
		let e = [
			"geolocator",
			"zoom",
			"home",
			"fullscreen"
		];
		this.mapnavStore.order.forEach((t) => {
			(this.$iApi.fixture.exists(t) || e.includes(t)) && (this.mapnavStore.items[t].componentId = `${t}-nav-button`);
		});
	}
}, J = {
	en: {
		"mapnav.openMenu": "Open navigation",
		"mapnav.closeMenu": "Close navigation",
		"mapnav.zoomIn": "Zoom In",
		"mapnav.zoomOut": "Zoom Out",
		"mapnav.home": "Home",
		"mapnav.fullscreen": "Full Screen",
		"mapnav.geolocator": "Your Location",
		"mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.",
		"mapnav.geolocator.error.internal": "Your location could not be found."
	},
	fr: {
		"mapnav.openMenu": "Ouvrir la navigation",
		"mapnav.closeMenu": "Fermer la navigation",
		"mapnav.zoomIn": "Zoom avant",
		"mapnav.zoomOut": "Zoom arrière",
		"mapnav.home": "Accueil",
		"mapnav.fullscreen": "Plein Écran",
		"mapnav.geolocator": "Votre position",
		"mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.",
		"mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé."
	}
}, Y = class extends q {
	async added() {
		Object.entries(J).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e));
		let { destroy: n, el: r } = this.mount(K, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(r.childNodes[0]), this._parseConfig(this.config);
		let i = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e)), a = this.$iApi.event.on(e.COMPONENT, () => {
			this._parseConfig(this.config);
		});
		this.removed = () => {
			i(), this.$iApi.event.off(a);
			let e = t(this.$vApp.$pinia), r = { ...e.items };
			Object.keys(r).forEach((t) => e.removeItem(t)), e.$reset(), n();
		};
	}
};
//#endregion
export { Y as default };
