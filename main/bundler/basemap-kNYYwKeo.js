import { W as e, b as t, s as n } from "./main-Bz1ia27O.js";
import { createBlock as r, createElementVNode as i, defineComponent as a, inject as o, markRaw as s, openBlock as c, resolveComponent as l, unref as u, withCtx as d } from "vue";
import { useI18n as f } from "vue-i18n";
//#endregion
//#region src/fixtures/basemap/nav-button.vue
var p = /* @__PURE__ */ a({
	__name: "nav-button",
	setup(e) {
		let { t } = f(), n = o("iApi"), a = () => n.panel.toggle("basemap");
		return (e, n) => {
			let o = l("mapnav-button");
			return c(), r(o, {
				onClickFunction: a,
				tooltip: u(t)("basemap.title")
			}, {
				default: d(() => [...n[0] ||= [i("svg", {
					class: "fill-current w-32 h-20",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24"
				}, [i("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}), i("path", { d: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" })], -1)]]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), m = {
	en: {
		"basemap.select": "Select basemap",
		"basemap.title": "Basemap"
	},
	fr: {
		"basemap.select": "Sélectionner la carte de base",
		"basemap.title": "Carte de base"
	}
}, h = class extends n {
	added() {
		this.$iApi.component("basemap-nav-button", p), this.$iApi.panel.register({
			id: "basemap",
			config: {
				screens: { "basemap-component": () => s(import("./screen-BX74V795.js")) },
				button: {
					tooltip: "basemap.title",
					icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\" /></svg>"
				},
				alertName: "basemap.title"
			}
		}, { i18n: { messages: m } }), this.handlePanelTeleports(["basemap"]);
	}
	removed() {
		this.$iApi.fixture.exists("appbar") && e(this.$vApp.$pinia).removeButton("basemap"), this.$iApi.fixture.exists("mapnav") && t(this.$vApp.$pinia).removeItem("basemap"), this.$iApi.panel.remove("basemap");
	}
};
//#endregion
export { h as default };
