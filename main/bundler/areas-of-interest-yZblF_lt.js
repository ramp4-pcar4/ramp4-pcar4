import { N as e, W as t, s as n } from "./main-Bz1ia27O.js";
import r from "./screen-BWr282IP.js";
import { markRaw as i } from "vue";
//#region src/fixtures/areas-of-interest/lang/lang.csv?raw
var a = {
	en: {
		"areas-of-interest.title": "Areas of Interest",
		"areas-of-interest.select": "Select area of interest"
	},
	fr: {
		"areas-of-interest.title": "Zones d'intérêt",
		"areas-of-interest.select": "Sélectionner la zone d'intérêt"
	}
}, o = class extends n {
	get config() {
		return super.config;
	}
	_parseConfig(t) {
		if (!t) return;
		let n = e(this.$vApp.$pinia);
		n.areas = t.areas, this.handlePanelTeleports(["areas-of-interest"]);
	}
}, s = class extends o {
	added() {
		this.$iApi.panel.register({ "areas-of-interest": {
			screens: { "areas-of-interest-screen": i(r) },
			style: { width: "350px" },
			button: {
				tooltip: "areas-of-interest.title",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z\"/></svg>"
			},
			alertName: "areas-of-interest.title"
		} }, { i18n: { messages: a } }), this._parseConfig(this.config);
		let n = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e));
		this.removed = () => {
			n(), this.$iApi.fixture.exists("appbar") && t(this.$vApp.$pinia).removeButton("areas-of-interest"), this.$iApi.panel.remove("areas-of-interest"), e(this.$vApp.$pinia).$reset();
		};
	}
};
//#endregion
export { s as default };
