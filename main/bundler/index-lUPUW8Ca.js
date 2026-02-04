import { defineComponent as A, inject as B, useTemplateRef as R, ref as u, computed as g, onBeforeMount as T, onMounted as M, onBeforeUnmount as P, resolveDirective as k, createElementBlock as z, openBlock as H, createElementVNode as f, withDirectives as O, normalizeStyle as N, unref as V, vModelText as D } from "vue";
import { F as x, a as F, G as h, _ as G } from "./main-6dWPqJr6.js";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash-es";
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
const W = { class: "swipe-container" }, q = ["id", "aria-valuenow", "aria-label", "content"], U = ["swipe-position", "view"], Y = /* @__PURE__ */ A({
  __name: "swipe",
  props: {
    fixture: {
      type: x,
      required: !0
    },
    message: String
  },
  setup(y) {
    const n = B("iApi"), d = F(), i = R("slider"), p = u(45), v = u(0), c = u(0), L = u(50), E = u(), r = u(), C = g(() => {
      const o = 30 + c.value - c.value, a = i.value?.getBoundingClientRect() ? i.value?.getBoundingClientRect().right - i.value?.getBoundingClientRect().left : 0, t = +p.value / 90, e = (a - o) * t, m = (i.value?.getBoundingClientRect().x ?? 0) + e + (o - 5.25) / 2;
      return L.value = m / n.$rootEl.clientWidth * 100 + 0.2, `${m}px`;
    }), $ = g(() => `${v.value}px`), S = g(() => `${-v.value / 2 - 18}px`), w = y;
    T(() => {
      v.value = n.$rootEl?.clientHeight ?? 1200;
    });
    const _ = () => {
      v.value = n.$rootEl?.clientHeight ?? v.value, c.value++, setTimeout(() => {
        c.value++;
      }, 50);
    }, s = () => {
      d.setOpacity(0.1), i.value.style.background = "";
    }, l = () => {
      d.setOpacity(1), i.value.style.background = "inherit";
    };
    M(async () => {
      "ontouchstart" in document.documentElement || !window.matchMedia("(pointer:fine)").matches || (i.value.style.background = "inherit"), window.addEventListener("resize", _), i.value?.addEventListener("focus", s), i.value?.addEventListener("blur", l), i.value?.addEventListener("mouseover", s), i.value?.addEventListener("mouseleave", l), i.value?.addEventListener("touchstart", s), i.value?.addEventListener("touchend", l), setTimeout(() => {
        c.value++;
      }, 50), await b();
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
      n.event.on(h.MAP_BASEMAPCHANGE, async (t) => {
        t.schemaChanged && (r.value?.trailingLayers.forEach((e) => {
          r.value?.trailingLayers.remove(e);
        }), r.value?.leadingLayers.forEach((e) => {
          r.value?.leadingLayers.remove(e);
        }), await b());
      }), n.event.on(h.LAYER_RELOAD_END, (t) => {
        r.value?.trailingLayers.forEach((e) => {
          e.id === t.id && (r.value?.trailingLayers.remove(e), r.value?.trailingLayers.add(t.esriLayer));
        }), r.value?.leadingLayers.forEach((e) => {
          e.id === t.id && (r.value?.leadingLayers.remove(e), r.value?.leadingLayers.add(t.esriLayer));
        });
      }), n.event.on(h.LAYER_REMOVE, (t) => {
        r.value?.trailingLayers.forEach((e) => {
          e.id === t.id && r.value?.trailingLayers.remove(e);
        }), r.value?.leadingLayers.forEach((e) => {
          e.id === t.id && r.value?.leadingLayers.remove(e);
        });
      });
    });
    const b = async () => {
      await n.geo.map.viewPromise, E.value = n.geo.map.esriView;
      const o = w.fixture.trailing, a = w.fixture.leading;
      o.forEach((t) => {
        n.geo.layer.awaitLayer(t, !0).then((e) => {
          e.esriLayer ? r.value?.trailingLayers.add(e.esriLayer) : console.warn(`Invalid layer instance: ${t}`);
        });
      }), a.forEach((t) => {
        n.geo.layer.awaitLayer(t, !0).then((e) => {
          e.esriLayer ? r.value?.leadingLayers.add(e.esriLayer) : console.warn(`Invalid layer instance: ${t}`);
        });
      });
    };
    return P(() => {
      window.removeEventListener("resize", _), i.value?.removeEventListener("focus", () => s), i.value?.removeEventListener("blur", () => l), i.value?.removeEventListener("mouseover", s), i.value?.removeEventListener("mouseleave", l), i.value?.removeEventListener("touchstart", s), i.value?.removeEventListener("touchend", l);
    }), (o, a) => {
      const t = k("tippy");
      return H(), z("div", W, [
        f("div", {
          class: "verticalLine",
          style: N({ left: C.value, height: $.value, bottom: S.value })
        }, null, 4),
        O(f("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (e) => p.value = e),
          id: "layerSlider" + V(n).$element._uid,
          class: "layerSliderElement",
          type: "range",
          ref_key: "slider",
          ref: i,
          min: "0",
          "aria-valuemin": "0",
          "aria-valuemax": "90",
          "aria-valuenow": p.value,
          "aria-label": o.$t("map.layerSwipe.label"),
          max: "90",
          step: "0.5",
          content: o.$t("map.layerSwipe.drag"),
          style: { "z-index": 10 }
        }, null, 8, q), [
          [D, p.value],
          [t, { followCursor: !0, trigger: "mouseenter" }]
        ]),
        f("arcgis-swipe", {
          direction: "horizontal",
          "swipe-position": L.value,
          view: E.value,
          "auto-destroy-disable": "",
          ref_key: "swipeComponent",
          ref: r
        }, null, 8, U)
      ]);
    };
  }
}), j = /* @__PURE__ */ G(Y, [["__scopeId", "data-v-49cd9ac9"]]);
class Te extends x {
  /**
   * Parses the swipe config snippet from the config json
   */
  _parseConfig(n) {
    this.leading = n?.leading ?? [], this.trailing = n?.trailing ?? [];
  }
  /**
   * Layer ids for the left side of the swiper
   */
  leading = [];
  /**
   * Layer ids for the right side of the swiper
   */
  trailing = [];
  async added() {
    this._parseConfig(this.config);
    const { el: n, destroy: d } = this.mount(j, {
      app: this.$element,
      props: { fixture: this }
    });
    n.childNodes[0] && this.$vApp.$el.appendChild(n.childNodes[0]), this.removed = () => {
      d();
    };
  }
}
export {
  Te as default
};
