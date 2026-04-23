import { s as e } from "./main-BtLSZphp.js";
import { merge as t } from "es-toolkit";
import { fabric as n } from "fabric";
//#region src/fixtures/export-timestamp/index.ts
var r = class extends e {
	get config() {
		return this.$iApi.fixture.get("export").config?.timestamp;
	}
	make(e) {
		let r = this.config, i = {
			text: (/* @__PURE__ */ new Date()).toLocaleString("en-CA"),
			fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
			fill: "#000",
			fontSize: 20,
			top: 0,
			left: 0,
			originX: "left"
		};
		r?.value !== void 0 && (i.text = r.value);
		let a = t(i, e || {}), o = new n.Textbox(a.text, a);
		return Promise.resolve(o);
	}
};
//#endregion
export { r as default };
