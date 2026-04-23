import { B as e, g as t, s as n } from "./main-BtLSZphp.js";
import { t as r } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { computed as i, createElementBlock as a, createElementVNode as o, defineComponent as s, inject as c, onBeforeUnmount as l, onMounted as u, openBlock as d, ref as f, toDisplayString as p, unref as m } from "vue";
import { useI18n as h } from "vue-i18n";
//#region src/fixtures/scrollguard/lang/lang.csv?raw
var g = {
	en: { "scrollguard.instructions": "Use ctrl + scroll to zoom the map" },
	fr: { "scrollguard.instructions": "Utilisez les touches Ctrl et + pour faire un zoom de la carte" }
}, _ = { class: "sg-label" }, v = /* @__PURE__ */ r(/* @__PURE__ */ s({
	__name: "map-scrollguard",
	setup(n) {
		let r = t(), { t: s } = h(), g = c("iApi"), v = f(), y = i(() => r.enabled);
		u(() => {
			g.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel", b, { capture: !0 }), g.event.on(e.MAP_CREATED, () => {
				g.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel", b, { capture: !0 });
			});
		}), l(() => {
			g.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener("wheel", b, { capture: !0 });
		});
		let b = (e) => {
			if (!y.value) return;
			let t = v.value.classList;
			e.ctrlKey ? (t.remove("sg-active"), t.add("sg-scrolling")) : (e.stopPropagation(), t.remove("sg-scrolling"), t.add("sg-active"), window.setTimeout(() => t.remove("sg-active"), 2e3));
		};
		return (e, t) => (d(), a("div", {
			class: "sg",
			ref_key: "scrollGuard",
			ref: v
		}, [o("p", _, p(m(s)("scrollguard.instructions")), 1)], 512));
	}
}), [["__scopeId", "data-v-bf6386a4"]]), y = class extends n {
	setEnabled(e) {
		t(this.$vApp.$pinia).enabled = e;
	}
	_parseConfig(e) {
		t(this.$vApp.$pinia).enabled = e?.enabled || !1;
	}
	get config() {
		return super.config;
	}
}, b = class extends y {
	added() {
		Object.entries(g).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e)), this._parseConfig(this.config);
		let e = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e)), { destroy: n, el: r } = this.mount(v, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(r.childNodes[0]), this.removed = () => {
			e(), n(), t(this.$vApp.$pinia).$reset();
		};
	}
};
//#endregion
export { b as default };
