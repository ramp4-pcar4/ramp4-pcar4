import { V as e, _ as t, s as n } from "./main-BgfQyEh5.js";
import { t as r } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as i, createElementBlock as a, createElementVNode as o, defineComponent as s, inject as c, onBeforeUnmount as l, onMounted as u, openBlock as d, reactive as f, ref as p, toDisplayString as m, unref as h, watch as g } from "vue";
import { useI18n as _ } from "vue-i18n";
//#region src/fixtures/panguard/lang/lang.csv?raw
var v = {
	en: { "panguard.instructions": "Use two fingers to pan the map" },
	fr: { "panguard.instructions": "Utilisez deux doigts pour faire un panoramique de la carte" }
}, y = { class: "pg-label" }, b = /*#__PURE__*/ r(/* @__PURE__ */ s({
	__name: "map-panguard",
	setup(n) {
		let { t: r } = _(), s = c("iApi"), v = t(), b = p(), x = i(() => v.enabled), S = p(-1), C = f([]), w = f([]), T = /* @__PURE__ */ new Map(), E = () => {
			b.value?.classList.remove("pg-active"), S.value !== -1 && (clearTimeout(S.value), S.value = -1);
		}, D = () => {
			T.clear(), E();
		}, O = (e) => {
			let t = s.geo.map.esriView;
			t?.navigation && (t.navigation.browserTouchPanEnabled = e);
		}, k = () => {
			O(!x.value);
		};
		u(() => {
			s.geo.map.loadPromise().then(() => {
				A();
			}), w.push(s.event.on(e.MAP_DESTROYED, () => {
				D(), C.forEach((e) => e.remove());
			})), w.push(s.event.on(e.MAP_REFRESH_START, () => {
				D(), C.forEach((e) => e.remove());
			})), w.push(s.event.on(e.MAP_REFRESH_END, () => {
				A();
			}));
		}), l(() => {
			O(!0), w.forEach((e) => s.event.off(e)), C.forEach((e) => e.remove()), D();
		}), g(x, (e) => {
			O(!e), e || D();
		});
		let A = () => {
			let e = (e) => {
				e.pointerType === "touch" && window.setTimeout(() => {
					T.delete(e.pointerId);
				}, 200);
			};
			s.geo.map.viewPromise.then(() => {
				k(), C.push(s.geo.map.esriView.on("pointer-down", (e) => {
					!x.value || e.pointerType !== "touch" || T.set(e.pointerId, {
						x: e.x,
						y: e.y
					});
				})), C.push(s.geo.map.esriView.on("pointer-leave", e)), C.push(s.geo.map.esriView.on("pointer-up", e)), C.push(s.geo.map.esriView.on("pointer-move", (e) => {
					if (!x.value) {
						D();
						return;
					}
					let { pointerId: t, pointerType: n, x: r, y: i } = e, a = T.get(t);
					if (!a || n !== "touch" || T.size !== 1) {
						E();
						return;
					}
					Math.sqrt((r - a.x) ** 2 + (i - a.y) ** 2) < 20 || (b.value?.classList.add("pg-active"), S.value !== -1 && clearTimeout(S.value), S.value = window.setTimeout(() => {
						b.value?.classList.remove("pg-active"), S.value = -1;
					}, 2e3));
				}));
			});
		};
		return (e, t) => (d(), a("div", {
			class: "pg",
			ref_key: "panGuard",
			ref: b
		}, [o("p", y, m(h(r)("panguard.instructions")), 1)], 512));
	}
}), [["__scopeId", "data-v-3879b893"]]), x = class extends n {
	get enabled() {
		return t(this.$vApp.$pinia).enabled;
	}
	setEnabled(e) {
		t(this.$vApp.$pinia).setEnabled(e);
	}
}, S = class extends x {
	added() {
		Object.entries(v).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e));
		let { destroy: e, el: n } = this.mount(b, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(n.childNodes[0]), this.removed = () => {
			e(), t(this.$vApp.$pinia).$reset();
		};
	}
};
//#endregion
export { S as default };
