import { B as e, s as t } from "./main-Bz1ia27O.js";
import { t as n } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { createElementBlock as r, createElementVNode as i, defineComponent as a, inject as o, onBeforeUnmount as s, onMounted as c, openBlock as l, reactive as u, ref as d, toDisplayString as f, unref as p } from "vue";
import { useI18n as m } from "vue-i18n";
//#region src/fixtures/panguard/lang/lang.csv?raw
var h = {
	en: { "panguard.instructions": "Use two fingers to pan the map" },
	fr: { "panguard.instructions": "Utilisez deux doigts pour faire un panoramique de la carte" }
}, g = { class: "pg-label" }, _ = /* @__PURE__ */ n(/* @__PURE__ */ a({
	__name: "map-panguard",
	setup(t) {
		let { t: n } = m(), a = o("iApi"), h = d(), _ = d(-1), v = u([]), y = u([]);
		c(() => {
			b(), y.push(a.event.on(e.MAP_CREATED, () => {
				b();
			})), y.push(a.event.on(e.MAP_DESTROYED, () => {
				v.forEach((e) => e.remove());
			})), y.push(a.event.on(e.MAP_REFRESH_START, () => {
				v.forEach((e) => e.remove());
			})), y.push(a.event.on(e.MAP_REFRESH_END, () => {
				b();
			}));
		}), s(() => {
			y.forEach((e) => a.event.off(e)), v.forEach((e) => e.remove());
		});
		let b = () => {
			let e = /* @__PURE__ */ new Map(), t = (t) => {
				t.pointerType === "touch" && window.setTimeout(() => {
					e.delete(t.pointerId);
				}, 200);
			};
			a.geo.map.viewPromise.then(() => {
				v.push(a.geo.map.esriView.on("pointer-down", (t) => {
					t.pointerType === "touch" && e.set(t.pointerId, {
						x: t.x,
						y: t.y
					});
				})), v.push(a.geo.map.esriView.on("pointer-leave", t)), v.push(a.geo.map.esriView.on("pointer-up", t)), v.push(a.geo.map.esriView.on("pointer-move", (t) => {
					let { pointerId: n, pointerType: r, x: i, y: a } = t, o = e.get(n);
					if (!o || r !== "touch" || e.size !== 1) {
						h.value.classList.remove("pg-active");
						return;
					}
					Math.sqrt((i - o.x) ** 2 + (a - o.y) ** 2) < 20 || (h.value.classList.add("pg-active"), _.value !== -1 && clearTimeout(_.value), _.value = window.setTimeout(() => {
						h.value.classList.remove("pg-active");
					}, 2e3));
				}));
			});
		};
		return (e, t) => (l(), r("div", {
			class: "pg",
			ref_key: "panGuard",
			ref: h
		}, [i("p", g, f(p(n)("panguard.instructions")), 1)], 512));
	}
}), [["__scopeId", "data-v-1802f091"]]), v = class extends t {
	added() {
		Object.entries(h).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e));
		let { destroy: e, el: t } = this.mount(_, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this.removed = () => {
			e();
		};
	}
};
//#endregion
export { v as default };
