import { defineComponent as $, inject as A, useTemplateRef as B, ref as u, computed as g, onBeforeMount as M, onMounted as R, onBeforeUnmount as T, resolveDirective as P, createElementBlock as k, openBlock as z, createElementVNode as f, withDirectives as H, normalizeStyle as N, unref as O, vModelText as F } from "vue";
import { F as _, a as V, G as h, _ as W } from "./main-E8ivnWBI.js";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import "tiny-emitter";
const D = { class: "swipe-container" }, G = ["id", "aria-valuenow", "aria-label", "content"], q = ["swipe-position", "view"], U = /* @__PURE__ */ $({
  __name: "swipe",
  props: {
    fixture: {
      type: _,
      required: !0
    },
    message: String
  },
  setup(b) {
    const o = A("iApi"), d = V(), i = B("slider"), p = u(45), v = u(0), c = u(0), y = u(50), L = u(), r = u(), x = g(() => {
      const n = 30 + c.value - c.value, a = i.value?.getBoundingClientRect() ? i.value?.getBoundingClientRect().right - i.value?.getBoundingClientRect().left : 0, t = +p.value / 90, e = (a - n) * t, m = (i.value?.getBoundingClientRect().x ?? 0) + e + (n - 5.25) / 2;
      return y.value = m / o.$rootEl.clientWidth * 100 + 0.2, `${m}px`;
    }), C = g(() => `${v.value}px`), S = g(() => `${-v.value / 2 - 18}px`);
    M(() => {
      v.value = o.$rootEl?.clientHeight ?? 1200;
    });
    const w = () => {
      v.value = o.$rootEl?.clientHeight ?? v.value, c.value++, setTimeout(() => {
        c.value++;
      }, 50);
    }, s = () => {
      d.setOpacity(0.1), i.value.style.background = "";
    }, l = () => {
      d.setOpacity(1), i.value.style.background = "inherit";
    };
    R(async () => {
      "ontouchstart" in document.documentElement || !window.matchMedia("(pointer:fine)").matches || (i.value.style.background = "inherit"), window.addEventListener("resize", w), i.value?.addEventListener("focus", s), i.value?.addEventListener("blur", l), i.value?.addEventListener("mouseover", s), i.value?.addEventListener("mouseleave", l), i.value?.addEventListener("touchstart", s), i.value?.addEventListener("touchend", l), setTimeout(() => {
        c.value++;
      }, 50), await E();
      const a = () => {
        const t = r.value?.querySelector(".arcgis-swipe__container");
        return t ? (t.removeAttribute("tabindex"), !0) : !1;
      };
      if (!a()) {
        const t = new MutationObserver((e, m) => {
          a() && m.disconnect();
        });
        t.observe(r.value, {
          childList: !0,
          subtree: !0,
          attributes: !1
        }), setTimeout(() => t.disconnect(), 5e3);
      }
      o.event.on(h.MAP_BASEMAPCHANGE, async (t) => {
        t.schemaChanged && (r.value?.trailingLayers.forEach((e) => {
          r.value?.trailingLayers.remove(e);
        }), r.value?.leadingLayers.forEach((e) => {
          r.value?.leadingLayers.remove(e);
        }), await E());
      }), o.event.on(h.LAYER_RELOAD_END, (t) => {
        r.value?.trailingLayers.forEach((e) => {
          e.id === t.id && (r.value?.trailingLayers.remove(e), r.value?.trailingLayers.add(t.esriLayer));
        }), r.value?.leadingLayers.forEach((e) => {
          e.id === t.id && (r.value?.leadingLayers.remove(e), r.value?.leadingLayers.add(t.esriLayer));
        });
      }), o.event.on(h.LAYER_REMOVE, (t) => {
        r.value?.trailingLayers.forEach((e) => {
          e.id === t.id && r.value?.trailingLayers.remove(e);
        }), r.value?.leadingLayers.forEach((e) => {
          e.id === t.id && r.value?.leadingLayers.remove(e);
        });
      });
    });
    const E = async () => {
      await o.geo.map.viewPromise, L.value = o.geo.map.esriView;
      const n = ["Nature", "WFSLayer"], a = ["Water", "GeoMet"];
      n.forEach((t) => {
        o.geo.layer.awaitLayer(t, !0).then((e) => {
          e.esriLayer ? r.value?.trailingLayers.add(e.esriLayer) : console.warn(`Invalid layer instance: ${t}`);
        });
      }), a.forEach((t) => {
        o.geo.layer.awaitLayer(t, !0).then((e) => {
          e.esriLayer ? r.value?.leadingLayers.add(e.esriLayer) : console.warn(`Invalid layer instance: ${t}`);
        });
      });
    };
    return T(() => {
      window.removeEventListener("resize", w), i.value?.removeEventListener("focus", () => s), i.value?.removeEventListener("blur", () => l), i.value?.removeEventListener("mouseover", s), i.value?.removeEventListener("mouseleave", l), i.value?.removeEventListener("touchstart", s), i.value?.removeEventListener("touchend", l);
    }), (n, a) => {
      const t = P("tippy");
      return z(), k("div", D, [
        f("div", {
          class: "verticalLine",
          style: N({ left: x.value, height: C.value, bottom: S.value })
        }, null, 4),
        H(f("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (e) => p.value = e),
          id: "layerSlider" + O(o).$element._uid,
          class: "layerSliderElement",
          type: "range",
          ref_key: "slider",
          ref: i,
          min: "0",
          "aria-valuemin": "0",
          "aria-valuemax": "90",
          "aria-valuenow": p.value,
          "aria-label": n.$t("map.layerSwipe.label"),
          max: "90",
          step: "0.5",
          content: n.$t("map.layerSwipe.drag"),
          style: { "z-index": 10 }
        }, null, 8, G), [
          [F, p.value],
          [t, { followCursor: !0, trigger: "mouseenter" }]
        ]),
        f("arcgis-swipe", {
          direction: "horizontal",
          "swipe-position": y.value,
          view: L.value,
          "auto-destroy-disable": "",
          ref_key: "swipeComponent",
          ref: r
        }, null, 8, q)
      ]);
    };
  }
}), Y = /* @__PURE__ */ W(U, [["__scopeId", "data-v-4d9acbf1"]]);
class Me extends _ {
  async added() {
    const { el: o, destroy: d } = this.mount(Y, {
      app: this.$element,
      props: { fixture: this }
    });
    o.childNodes[0] && this.$vApp.$el.appendChild(o.childNodes[0]), this.removed = () => {
      d();
    };
  }
}
export {
  Me as default
};
