import { g as e, s as t } from "./main-BgfQyEh5.js";
import { t as n } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as r, createElementBlock as i, createElementVNode as a, defineComponent as o, inject as s, onBeforeUnmount as c, onMounted as l, openBlock as u, ref as d, toDisplayString as f, unref as p } from "vue";
import { useI18n as m } from "vue-i18n";
//#region src/fixtures/scrollguard/lang/lang.csv?raw
var h = {
	en: { "scrollguard.instructions": "Use ctrl + scroll to zoom the map" },
	fr: { "scrollguard.instructions": "Utilisez les touches Ctrl et + pour faire un zoom de la carte" }
}, g = { class: "sg-label" }, _ = /*#__PURE__*/ n(/* @__PURE__ */ o({
	__name: "map-scrollguard",
	setup(t) {
		let n = e(), { t: o } = m(), h = s("iApi"), _ = d(), v = r(() => n.enabled);
		l(() => {
			h.geo.map.loadPromise().then(() => {
				h.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel", y, { capture: !0 });
			});
		}), c(() => {
			h.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener("wheel", y, { capture: !0 });
		});
		let y = (e) => {
			if (!v.value) return;
			let t = _.value.classList;
			e.ctrlKey ? (t.remove("sg-active"), t.add("sg-scrolling")) : (e.stopPropagation(), t.remove("sg-scrolling"), t.add("sg-active"), window.setTimeout(() => t.remove("sg-active"), 2e3));
		};
		return (e, t) => (u(), i("div", {
			class: "sg",
			ref_key: "scrollGuard",
			ref: _
		}, [a("p", g, f(p(o)("scrollguard.instructions")), 1)], 512));
	}
}), [["__scopeId", "data-v-8cd25b17"]]), v = class extends t {
	setEnabled(t) {
		e(this.$vApp.$pinia).enabled = t;
	}
	_parseConfig(t) {
		e(this.$vApp.$pinia).enabled = t?.enabled || !1;
	}
	get config() {
		return super.config;
	}
}, y = class extends v {
	added() {
		Object.entries(h).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e)), this._parseConfig(this.config);
		let t = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e)), { destroy: n, el: r } = this.mount(_, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(r.childNodes[0]), this.removed = () => {
			t(), n(), e(this.$vApp.$pinia).$reset();
		};
	}
};
//#endregion
export { y as default };
