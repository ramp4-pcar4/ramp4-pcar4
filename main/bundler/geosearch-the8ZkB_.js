import { O as e, W as t, b as n, s as r } from "./main-Bz1ia27O.js";
import { createBlock as i, createElementVNode as a, defineComponent as o, inject as s, markRaw as c, openBlock as l, resolveComponent as u, unref as d, withCtx as f } from "vue";
import { useI18n as p } from "vue-i18n";
//#region src/fixtures/geosearch/api/geosearch.ts
var m = class extends r {}, h = /* @__PURE__ */ o({
	__name: "nav-button",
	setup(e) {
		let { t } = p(), n = s("iApi"), r = () => {
			n.panel.toggle("geosearch");
		};
		return (e, n) => {
			let o = u("mapnav-button");
			return l(), i(o, {
				onClickFunction: r,
				tooltip: d(t)("geosearch.title")
			}, {
				default: f(() => [...n[0] ||= [a("svg", {
					class: "fill-current w-32 h-20",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24"
				}, [a("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }), a("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				})], -1)]]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), g = {
	en: {
		"geosearch.title": "Geolocation Search",
		"geosearch.noResults": "No results to show for ",
		"geosearch.searchText": "Search for a location...",
		"geosearch.visible": "Visible on map",
		"geosearch.filters.province": "Province",
		"geosearch.filters.type": "Type",
		"geosearch.filters.clear": "Clear filters",
		"geosearch.serviceError": "No response from {services} service(s)",
		"geosearch.badChars": "The character(s) {chars} are not supported and will be ignored"
	},
	fr: {
		"geosearch.title": "Recherche géolocalisée",
		"geosearch.noResults": "Aucun résultat à afficher pour ",
		"geosearch.searchText": "Rechercher un emplacement...",
		"geosearch.visible": "Visible sur la carte",
		"geosearch.filters.province": "Province",
		"geosearch.filters.type": "Type",
		"geosearch.filters.clear": "Effacer les filtres",
		"geosearch.serviceError": "Pas de réponse de la part des services de {services}",
		"geosearch.badChars": "Les caractères {chars} ne sont pas pris en charge et seront ignorés"
	}
}, _ = class extends m {
	async added() {
		e(this.$vApp.$pinia).initService(this.$iApi.language, this.config), this.$iApi.component("geosearch-nav-button", h), this.$iApi.panel.register({
			id: "geosearch",
			config: {
				screens: { "geosearch-component": () => c(import("./screen-vl7JlvQg.js")) },
				button: {
					tooltip: "geosearch.title",
					icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\" /><path d=\"M0 0h24v24H0z\" fill=\"none\" /></svg>"
				},
				alertName: "geosearch.title"
			}
		}, { i18n: { messages: g } }), this.handlePanelTeleports(["geosearch"]);
	}
	removed() {
		this.$iApi.fixture.exists("appbar") && t(this.$vApp.$pinia).removeButton("geosearch"), this.$iApi.fixture.exists("mapnav") && n(this.$vApp.$pinia).removeItem("geosearch"), e(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("geosearch");
	}
};
//#endregion
export { _ as default };
