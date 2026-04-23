import { s as e } from "./main-BtLSZphp.js";
import { fabric as t } from "fabric";
//#region src/fixtures/export-scalebar/index.ts
var n = class extends e {
	get config() {
		return this.$iApi.fixture.get("export").config?.mapElements;
	}
	make(e) {
		let n = this.$iApi.geo.map.caption.scaleHelper(), r = [];
		for (let e = 0; e < 2; e++) {
			let i = new t.Text(this.$iApi.$i18n.t("export.scaleBar.approx", [`${this.$iApi.$i18n.n(n[e].distance, "number")}${n[e].units}`]), {
				fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
				fill: "#000",
				fontSize: 16,
				top: e * 50,
				left: 0,
				originX: "left",
				originY: "top"
			}), a = new t.Line([
				0,
				e === 0 ? 30 : 40,
				n[e].pixels,
				e === 0 ? 30 : 40
			], {
				stroke: "black",
				strokeWidth: 3
			});
			r.push(new t.Group([a, i]));
		}
		return Promise.resolve(new t.Group(r, e));
	}
};
//#endregion
export { n as default };
