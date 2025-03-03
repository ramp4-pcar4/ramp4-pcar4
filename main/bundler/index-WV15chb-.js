import { defineComponent as _, inject as E, ref as l, reactive as h, onMounted as w, onBeforeUnmount as y, openBlock as x, createElementBlock as A, createElementVNode as M, toDisplayString as T, unref as I } from "vue";
import { G as a, _ as P, F as R } from "./main-lcO-efBh.js";
import "pinia";
import { useI18n as S } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@arcgis/core/Color";
import "@arcgis/core/config";
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
import "deepmerge";
import "terraformer";
import "proj4";
import "throttle-debounce";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import "tiny-emitter";
const D = { en: { "panguard.instructions": "Use two fingers to pan the map" }, fr: { "panguard.instructions": "Utilisez deux doigts pour faire un panoramique de la carte" } }, B = { class: "pg-label" }, F = /* @__PURE__ */ _({
  __name: "map-panguard",
  setup(v) {
    const { t: m } = S(), t = E("iApi"), i = l(), n = l(-1), r = h([]), p = h([]);
    w(() => {
      c(), p.push(
        t.event.on(a.MAP_CREATED, () => {
          c();
        })
      ), p.push(
        t.event.on(a.MAP_DESTROYED, () => {
          r.forEach((e) => e.remove());
        })
      ), p.push(
        t.event.on(a.MAP_REFRESH_START, () => {
          r.forEach((e) => e.remove());
        })
      ), p.push(
        t.event.on(a.MAP_REFRESH_END, () => {
          c();
        })
      );
    }), y(() => {
      p.forEach((e) => t.event.off(e)), r.forEach((e) => e.remove());
    });
    const c = () => {
      const e = /* @__PURE__ */ new Map();
      t.geo.map.viewPromise.then(() => {
        r.push(
          t.geo.map.esriView.on("pointer-down", (o) => {
            o.pointerType === "touch" && e.set(o.pointerId, { x: o.x, y: o.y });
          })
        ), r.push(
          //@ts-expect-error TODO: explain why this is needed or remove
          t.geo.map.esriView.on(["pointer-up", "pointer-leave"], (o) => {
            o.pointerType === "touch" && window.setTimeout(() => {
              e.delete(o.pointerId);
            }, 200);
          })
        ), r.push(
          t.geo.map.esriView.on("pointer-move", (o) => {
            const { pointerId: f, pointerType: g, x: u, y: d } = o, s = e.get(f);
            if (!s || g !== "touch" || e.size !== 1) {
              i.value.classList.remove("pg-active");
              return;
            }
            Math.sqrt(Math.pow(u - s.x, 2) + Math.pow(d - s.y, 2)) < 20 || (i.value.classList.add("pg-active"), n.value !== -1 && clearTimeout(n.value), n.value = window.setTimeout(() => {
              i.value.classList.remove("pg-active");
            }, 2e3), window.scrollBy(s.x - u, s.y - d));
          })
        );
      });
    };
    return (e, o) => (x(), A("div", {
      class: "pg",
      ref_key: "panGuard",
      ref: i
    }, [
      M("p", B, T(I(m)("panguard.instructions")), 1)
    ], 512));
  }
}), V = /* @__PURE__ */ P(F, [["__scopeId", "data-v-edb9cd59"]]);
class fe extends R {
  added() {
    Object.entries(D).forEach((n) => this.$iApi.$i18n.mergeLocaleMessage(...n));
    const { destroy: m, el: t } = this.mount(V, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this.removed = () => {
      m();
    };
  }
}
export {
  fe as default
};
