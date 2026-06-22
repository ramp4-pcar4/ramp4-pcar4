import { B as e, V as t, s as n, x as r } from "./main-BgfQyEh5.js";
import { t as i } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as a } from "./keyboard-B1sq5rh1.js";
import { n as o, o as s, r as c, s as l, t as u } from "./store-Bl__6-s2.js";
import { t as d } from "./info-icon-CUfAYJF_.js";
import { t as f } from "./settings-icon-DWqdxGzl.js";
import { Fragment as p, computed as m, createBlock as h, createCommentVNode as g, createElementBlock as _, createElementVNode as v, createVNode as y, defineAsyncComponent as b, defineComponent as x, inject as S, markRaw as C, nextTick as w, normalizeClass as T, normalizeStyle as E, onBeforeUnmount as D, onMounted as O, openBlock as k, ref as A, renderList as j, resolveComponent as M, resolveDirective as N, resolveDynamicComponent as P, unref as F, useTemplateRef as I, withCtx as L, withDirectives as R } from "vue";
import { throttle as z } from "es-toolkit/function";
import { useI18n as B } from "vue-i18n";
//#region src/fixtures/mapnav/buttons/divider-nav.vue
var V = {}, H = { class: "border-b p-0 self-center w-2/3" };
function U(e, t) {
	return k(), _("span", H);
}
var W = /*#__PURE__*/ i(V, [["render", U]]), G = /* @__PURE__ */ x({
	__name: "zoom-nav",
	setup(e) {
		let { t } = B(), n = S("iApi"), r = z(() => n.geo.map.zoomIn(), 400, { edges: ["leading"] }), i = z(() => n.geo.map.zoomOut(), 400, { edges: ["leading"] });
		return (e, n) => {
			let a = M("mapnav-button");
			return k(), _("div", null, [
				y(a, {
					onClickFunction: F(r),
					tooltip: F(t)("mapnav.zoomIn")
				}, {
					default: L(() => [...n[0] ||= [v("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						class: "fill-current w-32 h-20"
					}, [v("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }), v("path", {
						d: "M0 0h24v24H0z",
						fill: "none"
					})], -1)]]),
					_: 1
				}, 8, ["onClickFunction", "tooltip"]),
				y(W),
				y(a, {
					onClickFunction: F(i),
					tooltip: F(t)("mapnav.zoomOut")
				}, {
					default: L(() => [...n[1] ||= [v("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						class: "fill-current w-32 h-20"
					}, [v("path", { d: "M19 13H5v-2h14v2z" }), v("path", {
						d: "M0 0h24v24H0z",
						fill: "none"
					})], -1)]]),
					_: 1
				}, 8, ["onClickFunction", "tooltip"])
			]);
		};
	}
}), K = /*#__PURE__*/ i(/* @__PURE__ */ x({
	__name: "draw-nav-section",
	props: { showOutline: {
		type: Boolean,
		default: !1
	} },
	setup(t) {
		let n = S("iApi"), { t: r } = B(), i = u(), a = e();
		i.mapNavEl = I("mapNavEl");
		let v = [
			{
				type: "point",
				icon: C(b(() => import("./point-icon-D8a5fqrN.js")))
			},
			{
				type: "polyline",
				icon: C(b(() => import("./polyline-icon-BrnUJLRh.js")))
			},
			{
				type: "polygon",
				icon: C(b(() => import("./polygon-icon-CzcGvH5l.js")))
			},
			{
				type: "rectangle",
				icon: C(b(() => import("./rectangle-icon-gtDVgjBp.js")))
			},
			{
				type: "circle",
				icon: C(b(() => import("./circle-icon-DS4mkzuB.js")))
			}
		], x = m(() => i.configParsed ? v.filter((e) => i.supportedTypes.some((t) => t.type === e.type)) : []), w = (e) => {
			i.activeTool === e ? i.setActiveTool(null) : i.setActiveTool(e);
		}, D = () => {
			if (!N.value) return;
			let e = !i.shapeDetailsPickEnabled;
			if (i.setShapeDetailsPickEnabled(e), !e) {
				A.value && n.panel.close(l);
				return;
			}
			i.setActiveTool(null), i.clearSelection(), a.mobileView || V("details");
		}, O = m(() => o(a, s)), A = m(() => o(a, l)), N = m(() => i.graphics.length > 0), R = m(() => N.value && i.shapeDetailsPickEnabled), z = () => {
			if (O.value) {
				n.panel.close(s);
				return;
			}
			n.panel.open(s);
		}, V = (e) => {
			c(n, e, { focusExisting: !0 });
		}, H = () => {
			n.geo.map.setMouseFocus();
		};
		return (e, n) => {
			let a = M("mapnav-button");
			return x.value.length ? (k(), _("div", {
				key: 0,
				class: T([{ active: F(i).activeTool || F(i).activeTool == "" || R.value || O.value }, "mapnav-section bg-white-75 hover:bg-white"])
			}, [
				(k(!0), _(p, null, j(x.value, (e, n) => (k(), h(a, {
					key: e.type,
					onMousedown: H,
					onClickFunction: () => w(e.type),
					tooltip: F(r)(`draw.${e.type}.tooltip`),
					ariaLabel: F(r)(`draw.${e.type}.tooltip`),
					ariaPressed: F(i).activeTool === e.type,
					style: E({ marginBottom: n === x.value.length - 1 ? "0" : "0px" }),
					showOutline: t.showOutline,
					class: T({ "active-tool": F(i).activeTool === e.type }),
					ref_for: !0,
					ref: "mapNavEl"
				}, {
					default: L(() => [(k(), h(P(e.icon), { class: "fill-current w-32 h-20" }))]),
					_: 2
				}, 1032, [
					"onClickFunction",
					"tooltip",
					"ariaLabel",
					"ariaPressed",
					"style",
					"showOutline",
					"class"
				]))), 128)),
				y(a, {
					onClickFunction: D,
					tooltip: F(r)("draw.details.tooltip"),
					ariaLabel: F(r)("draw.details.tooltip"),
					ariaPressed: R.value,
					disabled: !N.value,
					showOutline: t.showOutline,
					class: T({ "active-tool": R.value })
				}, {
					default: L(() => [y(d, { class: "fill-current w-32 h-20" })]),
					_: 1
				}, 8, [
					"tooltip",
					"ariaLabel",
					"ariaPressed",
					"disabled",
					"showOutline",
					"class"
				]),
				y(a, {
					onClickFunction: z,
					tooltip: F(r)("draw.settings.tooltip"),
					ariaLabel: F(r)("draw.settings.tooltip"),
					ariaPressed: O.value,
					showOutline: t.showOutline,
					class: T({ "active-tool": O.value })
				}, {
					default: L(() => [y(f, { class: "fill-current w-32 h-20" })]),
					_: 1
				}, 8, [
					"tooltip",
					"ariaLabel",
					"ariaPressed",
					"showOutline",
					"class"
				])
			], 2)) : g("", !0);
		};
	}
}), [["__scopeId", "data-v-d3456892"]]), q = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, J = ["content"], Y = { class: "mapnav-section bg-white-75 hover:bg-white" }, X = {
	key: 1,
	class: "mapnav-section bg-white-75 hover:bg-white"
}, Z = ["content"], Q = { key: 0 }, $ = /*#__PURE__*/ i(/* @__PURE__ */ x({
	__name: "mapnav",
	setup(e) {
		let t = A(void 0), n = S("iApi"), i = r(), { t: o } = B(), s = A(), c = m(() => n.getConfig().fixtures?.mapnav?.items?.some((e) => e === "draw")), l = A(n.$rootEl?.clientHeight), u = A(!1), d = A(0), f = () => {
			l.value = n.$rootEl?.clientHeight;
		}, b = () => {
			s.value._tippy.hide();
		}, x = (e) => {
			a(e, s.value) && s.value._tippy.show();
		};
		O(() => {
			s.value?.addEventListener("blur", b), s.value?.addEventListener("keyup", x), t.value = new ResizeObserver(f), t.value.observe(n.$rootEl), w(() => {
				d.value = C.value.length * 82;
			});
		}), D(() => {
			s.value?.removeEventListener("blur", b), s.value?.removeEventListener("keyup", x), t.value.disconnect();
		});
		let C = m(() => i.order.map((e) => i.items[e]).filter((e) => e.componentId && e.id !== "draw"));
		return (e, t) => {
			let n = M("mapnav-button"), r = N("focus-list"), i = N("tippy");
			return k(), _("div", q, [R((k(), _("div", {
				class: "mapnav-section flex flex-col",
				content: F(o)("panels.controls.items"),
				ref_key: "el",
				ref: s
			}, [
				c.value && l.value > d.value ? (k(), _(p, { key: 0 }, [y(K), t[0] ||= v("span", { class: "py-1" }, null, -1)], 64)) : g("", !0),
				y(G, { class: "mapnav-section bg-white-75 hover:bg-white" }),
				t[2] ||= v("span", { class: "py-1" }, null, -1),
				v("div", Y, [l.value <= d.value ? (k(), h(n, {
					key: 0,
					class: "self-center",
					onClickFunction: () => {
						u.value = !u.value;
					},
					tooltip: u.value ? e.$t("mapnav.closeMenu") : e.$t("mapnav.openMenu")
				}, {
					default: L(() => [(k(), _("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						"shape-rendering": "geometricPrecision",
						"text-rendering": "geometricPrecision",
						"image-rendering": "optimizeQuality",
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						viewBox: "0 0 319 511.61",
						class: T(["fill-current w-6 mx-auto transition-all transform", { "rotate-180": u.value }])
					}, [...t[1] ||= [v("path", { d: "m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" }, null, -1)]], 2))]),
					_: 1
				}, 8, ["onClickFunction", "tooltip"])) : g("", !0)]),
				l.value > d.value ? (k(), _("div", X, [(k(!0), _(p, null, j(C.value, (e, t) => (k(), _(p, { key: e.id + "button" }, [(k(), h(P(e.id + "-nav-button"))), t === C.value.length - 1 ? g("", !0) : (k(), h(W, {
					key: 0,
					class: "mapnav-divider"
				}))], 64))), 128))])) : g("", !0)
			], 8, J)), [[r], [i, {
				trigger: "manual",
				placement: "top-end",
				touch: !1,
				maxWidth: 190
			}]]), l.value <= d.value && u.value ? R((k(), _("div", {
				key: 0,
				class: "mapnav-section flex flex-col flex-wrap-reverse shadow-tm absolute right-56 bottom-36 sm:bottom-48 items-start z-50 gap-0.5",
				style: E({
					maxHeight: `${(l.value - 70) * .8}px`,
					height: "fit-content",
					width: "fit-content"
				}),
				content: F(o)("panels.controls.items")
			}, [c.value ? (k(), _("div", Q, [y(K, { showOutline: "" })])) : g("", !0), (k(!0), _(p, null, j(C.value, (e) => (k(), h(P(e.id + "-nav-button"), {
				key: e.id + "button",
				class: "mapnav-section bg-white-75 hover:bg-white",
				showOutline: ""
			}))), 128))], 12, Z)), [[i, {
				trigger: "manual",
				placement: "top-end",
				maxWidth: 190
			}]]) : g("", !0)]);
		};
	}
}), [["__scopeId", "data-v-c2c5071f"]]), ee = class extends n {
	mapnavStore = r(this.$vApp.$pinia);
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
}, te = {
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
}, ne = class extends ee {
	async added() {
		Object.entries(te).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e));
		let { destroy: e, el: n } = this.mount($, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(n.childNodes[0]), this._parseConfig(this.config);
		let i = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e)), a = this.$iApi.event.on(t.COMPONENT, () => {
			this._parseConfig(this.config);
		});
		this.removed = () => {
			i(), this.$iApi.event.off(a);
			let t = r(this.$vApp.$pinia), n = { ...t.items };
			Object.keys(n).forEach((e) => t.removeItem(e)), t.$reset(), e();
		};
	}
};
//#endregion
export { ne as default };
