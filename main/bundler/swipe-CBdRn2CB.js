import { B as e, s as t, z as n } from "./main-Bz1ia27O.js";
import { t as r } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { computed as i, createElementBlock as a, createElementVNode as o, defineComponent as s, inject as c, normalizeStyle as l, onBeforeMount as u, onBeforeUnmount as d, onMounted as f, openBlock as p, ref as m, resolveDirective as h, unref as g, useTemplateRef as _, vModelText as v, withDirectives as y } from "vue";
//#region src/fixtures/swipe/swipe.vue?vue&type=script&setup=true&lang.ts
var b = { class: "swipe-container" }, x = [
	"id",
	"aria-valuenow",
	"aria-label",
	"content"
], S = ["swipe-position", "view"], C = /* @__PURE__ */ r(/* @__PURE__ */ s({
	__name: "swipe",
	props: {
		fixture: {
			type: t,
			required: !0
		},
		message: String
	},
	setup(t) {
		let r = c("iApi"), s = n(), C = _("slider"), w = m(45), T = m(0), E = m(0), D = m(50), O = m(), k = m(), A = i(() => {
			let e = 30 + E.value - E.value, t = C.value?.getBoundingClientRect() ? C.value?.getBoundingClientRect().right - C.value?.getBoundingClientRect().left : 0, n = w.value / 90, i = (t - e) * n, a = (C.value?.getBoundingClientRect().x ?? 0) + i + (e - 5.25) / 2;
			return D.value = a / r.$rootEl.clientWidth * 100 + .2, `${a}px`;
		}), j = i(() => `${T.value}px`), M = i(() => `${-T.value / 2 - 18}px`), N = t;
		u(() => {
			T.value = r.$rootEl?.clientHeight ?? 1200;
		});
		let P = () => {
			T.value = r.$rootEl?.clientHeight ?? T.value, E.value++, setTimeout(() => {
				E.value++;
			}, 50);
		}, F = () => {
			s.setOpacity(.1), C.value.style.background = "";
		}, I = () => {
			s.setOpacity(1), C.value.style.background = "inherit";
		};
		f(async () => {
			"ontouchstart" in document.documentElement || !window.matchMedia("(pointer:fine)").matches || (C.value.style.background = "inherit"), window.addEventListener("resize", P), C.value?.addEventListener("focus", F), C.value?.addEventListener("blur", I), C.value?.addEventListener("mouseover", F), C.value?.addEventListener("mouseleave", I), C.value?.addEventListener("touchstart", F), C.value?.addEventListener("touchend", I), setTimeout(() => {
				E.value++;
			}, 50), await L();
			let t = () => {
				let e = k.value?.querySelector(".arcgis-swipe__container");
				return e ? (e.removeAttribute("tabindex"), !0) : !1;
			};
			if (!t()) {
				let e = new MutationObserver((e, n) => {
					t() && n.disconnect();
				});
				e.observe(k.value, {
					childList: !0,
					subtree: !0,
					attributes: !1
				}), setTimeout(() => e.disconnect(), 5e3);
			}
			r.event.on(e.MAP_BASEMAPCHANGE, async (e) => {
				e.schemaChanged && (k.value?.trailingLayers.forEach((e) => {
					k.value?.trailingLayers.remove(e);
				}), k.value?.leadingLayers.forEach((e) => {
					k.value?.leadingLayers.remove(e);
				}), await L());
			}), r.event.on(e.LAYER_RELOAD_END, (e) => {
				k.value?.trailingLayers.forEach((t) => {
					t.id === e.id && (k.value?.trailingLayers.remove(t), k.value?.trailingLayers.add(e.esriLayer));
				}), k.value?.leadingLayers.forEach((t) => {
					t.id === e.id && (k.value?.leadingLayers.remove(t), k.value?.leadingLayers.add(e.esriLayer));
				});
			}), r.event.on(e.LAYER_REMOVE, (e) => {
				k.value?.trailingLayers.forEach((t) => {
					t.id === e.id && k.value?.trailingLayers.remove(t);
				}), k.value?.leadingLayers.forEach((t) => {
					t.id === e.id && k.value?.leadingLayers.remove(t);
				});
			});
		});
		let L = async () => {
			await r.geo.map.viewPromise, O.value = r.geo.map.esriView;
			let e = N.fixture.trailing, t = N.fixture.leading;
			e.forEach((e) => {
				r.geo.layer.awaitLayer(e, !0).then((t) => {
					t.esriLayer ? k.value?.trailingLayers.add(t.esriLayer) : console.warn(`Invalid layer instance: ${e}`);
				});
			}), t.forEach((e) => {
				r.geo.layer.awaitLayer(e, !0).then((t) => {
					t.esriLayer ? k.value?.leadingLayers.add(t.esriLayer) : console.warn(`Invalid layer instance: ${e}`);
				});
			});
		};
		return d(() => {
			window.removeEventListener("resize", P), C.value?.removeEventListener("focus", () => F), C.value?.removeEventListener("blur", () => I), C.value?.removeEventListener("mouseover", F), C.value?.removeEventListener("mouseleave", I), C.value?.removeEventListener("touchstart", F), C.value?.removeEventListener("touchend", I);
		}), (e, t) => {
			let n = h("tippy");
			return p(), a("div", b, [
				o("div", {
					class: "verticalLine",
					style: l({
						left: A.value,
						height: j.value,
						bottom: M.value
					})
				}, null, 4),
				y(o("input", {
					"onUpdate:modelValue": t[0] ||= (e) => w.value = e,
					id: "layerSlider" + g(r).$element._uid,
					class: "layerSliderElement",
					type: "range",
					ref_key: "slider",
					ref: C,
					min: "0",
					"aria-valuemin": "0",
					"aria-valuemax": "90",
					"aria-valuenow": w.value,
					"aria-label": e.$t("map.layerSwipe.label"),
					max: "90",
					step: "0.5",
					content: e.$t("map.layerSwipe.drag"),
					style: { "z-index": 10 }
				}, null, 8, x), [[v, w.value], [n, {
					followCursor: !0,
					trigger: "mouseenter"
				}]]),
				o("arcgis-swipe", {
					direction: "horizontal",
					"swipe-position": D.value,
					view: O.value,
					"auto-destroy-disable": "",
					ref_key: "swipeComponent",
					ref: k
				}, null, 8, S)
			]);
		};
	}
}), [["__scopeId", "data-v-eadb3152"]]), w = class extends t {
	_parseConfig(e) {
		this.leading = e?.leading ?? [], this.trailing = e?.trailing ?? [];
	}
	leading = [];
	trailing = [];
	async added() {
		this._parseConfig(this.config);
		let { el: e, destroy: t } = this.mount(C, {
			app: this.$element,
			props: { fixture: this }
		});
		e.childNodes[0] && this.$vApp.$el.appendChild(e.childNodes[0]), this.removed = () => {
			t();
		};
	}
};
//#endregion
export { w as default };
