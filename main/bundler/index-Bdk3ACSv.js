import { defineComponent as _, inject as E, ref as u, reactive as d, onMounted as w, onBeforeUnmount as x, createElementBlock as y, openBlock as A, createElementVNode as M, toDisplayString as T, unref as I } from "vue";
import { G as s, _ as P, F as R } from "./main-6dWPqJr6.js";
import "pinia";
import { useI18n as S } from "vue-i18n";
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
const D = { en: { "panguard.instructions": "Use two fingers to pan the map" }, fr: { "panguard.instructions": "Utilisez deux doigts pour faire un panoramique de la carte" } }, F = { class: "pg-label" }, V = /* @__PURE__ */ _({
  __name: "map-panguard",
  setup(l) {
    const { t: a } = S(), t = E("iApi"), i = u(), n = u(-1), r = d([]), p = d([]);
    w(() => {
      m(), p.push(
        t.event.on(s.MAP_CREATED, () => {
          m();
        })
      ), p.push(
        t.event.on(s.MAP_DESTROYED, () => {
          r.forEach((e) => e.remove());
        })
      ), p.push(
        t.event.on(s.MAP_REFRESH_START, () => {
          r.forEach((e) => e.remove());
        })
      ), p.push(
        t.event.on(s.MAP_REFRESH_END, () => {
          m();
        })
      );
    }), x(() => {
      p.forEach((e) => t.event.off(e)), r.forEach((e) => e.remove());
    });
    const m = () => {
      const e = /* @__PURE__ */ new Map();
      t.geo.map.viewPromise.then(() => {
        r.push(
          t.geo.map.esriView.on("pointer-down", (o) => {
            o.pointerType === "touch" && e.set(o.pointerId, { x: o.x, y: o.y });
          })
        ), r.push(
          t.geo.map.esriView.on(["pointer-up", "pointer-leave"], (o) => {
            o.pointerType === "touch" && window.setTimeout(() => {
              e.delete(o.pointerId);
            }, 200);
          })
        ), r.push(
          t.geo.map.esriView.on("pointer-move", (o) => {
            const { pointerId: h, pointerType: v, x: f, y: g } = o, c = e.get(h);
            if (!c || v !== "touch" || e.size !== 1) {
              i.value.classList.remove("pg-active");
              return;
            }
            Math.sqrt(Math.pow(f - c.x, 2) + Math.pow(g - c.y, 2)) < 20 || (i.value.classList.add("pg-active"), n.value !== -1 && clearTimeout(n.value), n.value = window.setTimeout(() => {
              i.value.classList.remove("pg-active");
            }, 2e3));
          })
        );
      });
    };
    return (e, o) => (A(), y("div", {
      class: "pg",
      ref_key: "panGuard",
      ref: i
    }, [
      M("p", F, T(I(a)("panguard.instructions")), 1)
    ], 512));
  }
}), $ = /* @__PURE__ */ P(V, [["__scopeId", "data-v-e10c6074"]]);
class _e extends R {
  added() {
    Object.entries(D).forEach((n) => this.$iApi.$i18n.mergeLocaleMessage(...n));
    const { destroy: a, el: t } = this.mount($, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this.removed = () => {
      a();
    };
  }
}
export {
  _e as default
};
