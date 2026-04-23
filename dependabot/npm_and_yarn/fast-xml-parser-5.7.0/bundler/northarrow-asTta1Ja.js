import { B as e, Q as t, Y as n, ht as r, mt as i, s as a, st as o, v as s } from "./main-BtLSZphp.js";
import { t as c } from "./config-qfRoNiJ2.js";
import { computed as l, createElementBlock as u, createElementVNode as d, defineComponent as f, inject as p, normalizeStyle as m, onBeforeUnmount as h, onMounted as g, openBlock as _, reactive as v, ref as y } from "vue";
import { debounce as b } from "es-toolkit/function";
//#region src/fixtures/northarrow/api/northarrow.ts
var x = class extends a {
	_parseConfig(e) {
		let t = s(this.$vApp.$pinia);
		e && (t.arrowIcon = e.arrowIcon, t.poleIcon = e.poleIcon);
	}
	get config() {
		return super.config;
	}
}, S = {
	style: "path",
	size: 12,
	path: "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z",
	colour: "#ff0000ff",
	xOffset: 5,
	yOffset: 6
}, C = ["innerHTML"], w = /* @__PURE__ */ f({
	__name: "northarrow",
	setup(a) {
		let f = c(), x = s(), w = p("iApi"), E = y(), D = l(() => x.arrowIcon), O = l(() => x.poleIcon), k = y(0), A = y(0), j = y(!1), M = y("<svg xmlns=\"http://www.w3.org/2000/svg\" fit=\"\"  width=\"25\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\" focusable=\"false\">\n                <g id=\"northarrow\" transform=\"translate(-285.24 -142.234)\">\n                    <path id=\"path3770-7\" d=\"M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\".895\"/>\n                    <path id=\"path3770\" d=\"M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z\" fill=\"none\" stroke=\"#6d6d6d\" stroke-width=\".799\"/>\n                    <path id=\"path3774\" d=\"M297.256 156.648v-8.525\" fill=\"none\" stroke=\"#000\" stroke-width=\".067\"/>\n                    <path d=\"M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z\" id=\"path3778\" fill=\"#fff\" stroke=\"#fff\" stroke-width=\".912\"/>\n                    <path d=\"M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z\" id=\"path3780\" fill=\"#d6d6d6\" stroke=\"#000\" stroke-width=\".266\" stroke-linecap=\"square\"/>\n                    <path id=\"path6038\" d=\"M297.256 144.666l-7.726 19.568 7.726-7.726\" fill=\"#6d6d6d\" stroke-width=\".296\" stroke-linecap=\"square\"/>\n                </g>\n            </svg>"), N = y(!1), P = v([]), F = y([]), I;
		g(() => {
			F.value = f.config.map.tileSchemas, D?.value && (M.value = `<img width='25' src='${D.value}'>`), w.geo.map.esriView?.ready && L(w.geo.map.getExtent()), P.push(w.event.on(e.MAP_EXTENTCHANGE, b(L, 300)));
		}), h(() => {
			P.forEach((e) => w.event.off(e));
		});
		let L = async (e) => {
			I = f.activeBasemapConfig;
			let a;
			for (let e of F.value) if (I?.tileSchemaId === e.id) {
				a = e?.hasNorthPole;
				break;
			}
			let s = w.$vApp.$el.querySelector(".inner-shell"), c = E.value.querySelector(".northarrow").getBoundingClientRect().width, l = w.$vApp.$el.querySelector(".appbar")?.clientWidth || 0, u = e.sr;
			if (a || a === void 0 && !u.isWebMercator()) {
				let e = new t("pole", {
					x: -96,
					y: 90
				}), a = await w.geo.proj.projectGeometry(u, e), d = w.geo.map.mapPointToScreenPoint(a);
				if (d.screenY < 0) {
					j.value = !0;
					let e = {
						screenX: s.clientWidth / 2,
						screenY: s.clientHeight
					};
					k.value = Math.atan((d.screenX - e.screenX) / (e.screenY - d.screenY)) * 180 / Math.PI, A.value = s.clientWidth / 2 + s.clientHeight * Math.tan(k.value * Math.PI / 180) - c / 2, A.value = Math.max(l - c / 2, Math.min(w.geo.map.getPixelWidth() - c / 2, A.value));
				} else if (j.value = !1, !N.value) {
					N.value = !0;
					let e;
					e = O.value ? {
						style: r.ICON,
						icon: O.value,
						height: 16.5,
						width: 16.5
					} : S;
					let t = w.geo.layer.createLayer({
						id: T,
						layerType: i.GRAPHIC,
						url: "",
						cosmetic: !0,
						system: !0
					});
					w.geo.map.addLayer(t), t.loadPromise().then(() => {
						let r = new o(a, "northpole");
						r.style = new n(e), t.addGraphic(r);
					});
				}
			} else j.value = !0, k.value = 0, A.value = l + (s.clientWidth - l - c) / 2;
		};
		return (e, t) => (_(), u("div", {
			class: "absolute transition-all duration-300 ease-out",
			style: m({
				"transform-origin": "top center",
				transform: `rotate(${k.value}deg)`,
				left: `${A.value}px`,
				visibility: j.value ? "visible" : "hidden"
			}),
			ref_key: "el",
			ref: E
		}, [d("span", {
			class: "northarrow",
			innerHTML: M.value
		}, null, 8, C)], 4));
	}
}), T = "RampPoleMarker", E = class extends x {
	async added() {
		this._parseConfig(this.config);
		let e = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e)), { destroy: t, el: n } = this.mount(w, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(n.childNodes[0]), this.removed = () => {
			e(), this.$iApi.geo.layer.getLayer("RampPoleMarker") && this.$iApi.geo.map.removeLayer(T), s(this.$vApp.$pinia).$reset(), t();
		};
	}
};
//#endregion
export { T as POLE_MARKER_LAYER_ID, E as default };
