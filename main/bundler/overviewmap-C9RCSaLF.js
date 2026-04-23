import { B as e, _ as t, p as n, s as r } from "./main-Bz1ia27O.js";
import { t as i } from "./config-qfRoNiJ2.js";
import { t as a } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { computed as o, createElementBlock as s, createElementVNode as c, defineComponent as l, inject as u, normalizeClass as d, normalizeStyle as f, onBeforeUnmount as p, onMounted as m, openBlock as h, reactive as g, ref as _, resolveDirective as v, unref as y, withDirectives as b } from "vue";
import { debounce as x } from "es-toolkit/function";
import { useI18n as S } from "vue-i18n";
//#region src/fixtures/overviewmap/api/overviewmap.ts
var C = class extends r {
	_parseConfig(e) {
		let n = t(this.$vApp.$pinia);
		n.basemaps = e?.basemaps || {}, n.mapConfig.basemaps = Object.values(n.basemaps), n.startMinimized = e?.startMinimized ?? !0, n.expandFactor = e?.expandFactor ?? 1.5, n.borderColour = e?.borderColour ?? "#FF0000", n.borderWidth = e?.borderWidth ?? 1, n.areaColour = e?.areaColour ?? "#000000", n.areaOpacity = e?.areaOpacity ?? .25;
	}
	get config() {
		return super.config;
	}
}, w = { class: "relative h-full w-full overflow-hidden" }, T = { class: "absolute h-30 w-30 top-0 right-0" }, E = ["content", "aria-label"], D = /* @__PURE__ */ a(/* @__PURE__ */ l({
	__name: "overviewmap",
	setup(r) {
		let a = t(), { t: l } = S(), C = u("iApi"), D = i(), O = _(), k = o(() => D.activeBasemapConfig), A = o(() => a.mapConfig), j = o(() => a.basemaps), M = o(() => a.startMinimized), N = g(new n(C)), P = _(!0), F = _(!1), I = g([]);
		m(async () => {
			await C.geo.map.viewPromise, B(), await N.createMap(A.value, O.value.querySelector(".overviewmap")), await N.viewPromise, await N.addMapGraphicLayer(), P.value = M.value;
			let t = N.updateOverview(C.geo.map.getExtent());
			I.push(C.event.on(e.MAP_EXTENTCHANGE, x((e) => {
				t.then(() => {
					N.updateOverview(e);
				});
			}, 100))), I.push(C.event.on(e.MAP_CREATED, () => {
				B();
			})), I.push(C.event.on(e.MAP_REFRESH_END, () => {
				B();
			})), I.push(C.event.on(e.MAP_BASEMAPCHANGE, async (e) => {
				!e.schemaChanged && N.created && k.value && j.value[k.value.tileSchemaId] === void 0 && (await N.removeMapGraphicLayer(), await N.setBasemap(e.basemapId), await N.addMapGraphicLayer());
			}));
		}), p(() => {
			I.forEach((e) => C.event.off(e)), N.removeMapGraphicLayer().then(() => {
				N.destroyMap();
			});
		});
		let L = async (e) => {
			F.value = !P.value && await N.cursorHitTest(e);
		}, R = () => ({
			height: `${P.value ? 48 : 200}px`,
			width: `${P.value ? 48 : 200}px`
		}), z = () => ({
			top: `${P.value ? -6 : -3}px`,
			right: `${P.value ? -6 : -3}px`,
			transform: `rotate(${P.value ? 225 : 45}deg)`
		}), B = () => {
			if (!k.value) {
				console.error("Overview Map could not obtain the basemap config used by the main map");
				return;
			}
			try {
				let e = k.value?.tileSchemaId;
				if (!e) throw Error("x");
				let t = j.value[e];
				if (!t) throw Error("x");
				N.created ? N.viewPromise.then(() => N.setBasemap(t.id)) : a.updateInitialBasemap(t.id);
			} catch {
				N.created || a.updateInitialBasemap(k.value.id), N.viewPromise.then(() => N.setBasemap(k.value.id));
			}
		};
		return (e, t) => {
			let n = v("tippy");
			return h(), s("div", {
				class: "relative",
				ref_key: "el",
				ref: O
			}, [c("div", {
				style: f(R()),
				class: "pointer-events-auto absolute top-0 right-0 mt-12 mr-12 shadow-tm border-4 border-solid border-white bg-white transition-all duration-300 ease-out"
			}, [c("div", w, [c("div", {
				class: d(["overviewmap absolute top-0 right-0 h-192 w-192", { "cursor-move": F.value }]),
				onMousemove: L
			}, null, 34)]), c("div", T, [b((h(), s("button", {
				type: "button",
				tabindex: "0",
				class: "cursor-pointer absolute h-full w-full",
				onClick: t[0] ||= (e) => P.value = !P.value,
				content: y(l)(P.value ? "overviewmap.expand" : "overviewmap.minimize"),
				"aria-label": y(l)(P.value ? "overviewmap.expand" : "overviewmap.minimize")
			}, [(h(), s("svg", {
				class: "absolute fill-current text-gray-500 transition-all duration-300 ease-out",
				style: f(z()),
				xmlns: "http://www.w3.org/2000/svg",
				fit: "",
				height: "100%",
				width: "100%",
				preserveAspectRatio: "xMidYMid meet",
				viewBox: "0 0 24 24",
				focusable: "false"
			}, [...t[1] ||= [c("g", { id: "apple-keyboard-control" }, [c("path", { d: "M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z " })], -1)]], 4))], 8, E)), [[n, {
				placement: "left",
				hideOnClick: !1
			}]])])], 4)], 512);
		};
	}
}), [["__scopeId", "data-v-0d0f3ee0"]]), O = {
	en: {
		"overviewmap.expand": "Expand Overview",
		"overviewmap.minimize": "Minimize Overview"
	},
	fr: {
		"overviewmap.expand": "Développer l'aperçu",
		"overviewmap.minimize": "Réduire l'aperçu"
	}
}, k = class extends C {
	added() {
		Object.entries(O).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e)), this._parseConfig(this.config);
		let e = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e)), { destroy: n, el: r } = this.mount(D, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(r.childNodes[0]), this.removed = () => {
			e(), n(), t(this.$vApp.$pinia).$reset();
		};
	}
};
//#endregion
export { k as default };
