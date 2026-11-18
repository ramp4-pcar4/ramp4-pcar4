import { s as e } from "./main-DxKmGvij.js";
import { merge as t } from "es-toolkit";
import { fabric as n } from "fabric";
// src/fixtures/export-footnote/index.ts
var r = class extends e {
	get config() {
		return this.$iApi.fixture.get("export").config?.footnote;
	}
	make(e) {
		let r = this.config, i = {
			text: "RAMP-PCAR",
			fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
			fill: "#000",
			fontSize: 20,
			top: 0
		};
		r?.value !== void 0 && (i.text = r.value);
		let a = t(i, e || {}), o = new n.Textbox(a.text, a);
		return Promise.resolve(o);
	}
};
export { r as default };
