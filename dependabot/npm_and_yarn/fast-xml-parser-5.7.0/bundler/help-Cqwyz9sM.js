import { B as e, b as t, s as n } from "./main-BtLSZphp.js";
import { t as r } from "./store-BSbISna5.js";
import { createBlock as i, createElementVNode as a, defineComponent as o, inject as s, markRaw as c, openBlock as l, resolveComponent as u, unref as d, withCtx as f } from "vue";
import { useI18n as p } from "vue-i18n";
//#region src/fixtures/help/api/help.ts
var m = class extends n {
	toggleHelp(e) {
		let t = this.$iApi.panel.get("help");
		this.$iApi.panel.toggle(t, e);
	}
	get config() {
		return super.config;
	}
	_parseConfig(e) {
		let t = r(this.$vApp.$pinia);
		t.location = e?.location ?? "./help/", this.handlePanelWidths(["help"]), this.handlePanelTeleports(["help"]);
	}
}, h = /* @__PURE__ */ o({
	__name: "nav-button",
	setup(t) {
		let n = s("iApi"), { t: r } = p(), o = () => n.event.emit(e.HELP_TOGGLE);
		return (e, t) => {
			let n = u("mapnav-button");
			return l(), i(n, {
				onClickFunction: o,
				tooltip: d(r)("help.title")
			}, {
				default: f(() => [...t[0] ||= [a("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24",
					class: "fill-current w-32 h-20"
				}, [a("path", {
					d: "M0 0h24v24H0z",
					fill: "none"
				}), a("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" })], -1)]]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), g = {
	en: {
		"help.title": "Help",
		"help.search": "Search Help",
		"help.section.expand": "Expand section",
		"help.section.collapse": "Collapse section",
		"help.noResults": "Nothing is found. Please try a different search."
	},
	fr: {
		"help.title": "Aide",
		"help.search": "Aide à la recherche",
		"help.section.expand": "Développer une section",
		"help.section.collapse": "Réduire une section",
		"help.noResults": "Aucun résultat. Veuillez essayer une autre recherche."
	}
}, _ = class extends m {
	added() {
		this.$iApi.component("help-nav-button", h), this.$iApi.panel.register({ help: {
			screens: { "help-screen": () => c(import("./screen-6l0U8Ho8.js")) },
			style: {
				"flex-grow": "1",
				"max-width": "750px"
			},
			alertName: "help.title"
		} }, { i18n: { messages: g } }), this._parseConfig(this.config);
		let e = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e));
		this.removed = () => {
			e(), this.$iApi.fixture.exists("mapnav") && t(this.$vApp.$pinia).removeItem("help"), r(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("help");
		};
	}
};
//#endregion
export { _ as default };
