import { defineComponent as _, inject as E, ref as d, reactive as h, onMounted as w, onBeforeUnmount as y, openBlock as x, createElementBlock as A, createElementVNode as M, toDisplayString as T, unref as I } from "vue";
import { G as m, _ as P, F as R } from "./main-C-NQiA0Q.js";
import "pinia";
import { useI18n as S } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@arcgis/core/Basemap";
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
import "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/layers/ImageryLayer";
import "@arcgis/core/layers/MapImageLayer";
import "@arcgis/core/layers/OpenStreetMapLayer";
import "@arcgis/core/layers/TileLayer";
import "@arcgis/core/layers/WMSLayer";
import "@arcgis/core/layers/support/Field";
import "@arcgis/core/Map";
import "@arcgis/core/renderers/SimpleRenderer";
import "@arcgis/core/renderers/support/jsonUtils";
import "@arcgis/core/request";
import "@arcgis/core/rest/query";
import "@arcgis/core/rest/support/Query";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/core/layers/support/FeatureFilter";
import "@arcgis/core/views/MapView";
import "@arcgis/core/webmap/background/ColorBackground";
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
  setup(f) {
    const { t: a } = S(), e = E("iApi"), i = d(), p = d(-1), r = h([]), n = h([]);
    w(() => {
      c(), n.push(
        e.event.on(m.MAP_CREATED, () => {
          c();
        })
      ), n.push(
        e.event.on(m.MAP_DESTROYED, () => {
          r.forEach((t) => t.remove());
        })
      ), n.push(
        e.event.on(m.MAP_REFRESH_START, () => {
          r.forEach((t) => t.remove());
        })
      ), n.push(
        e.event.on(m.MAP_REFRESH_END, () => {
          c();
        })
      );
    }), y(() => {
      n.forEach((t) => e.event.off(t)), r.forEach((t) => t.remove());
    });
    const c = () => {
      const t = /* @__PURE__ */ new Map();
      e.geo.map.viewPromise.then(() => {
        r.push(
          e.geo.map.esriView.on("pointer-down", (o) => {
            o.pointerType === "touch" && t.set(o.pointerId, { x: o.x, y: o.y });
          })
        ), r.push(
          //@ts-ignore
          e.geo.map.esriView.on(["pointer-up", "pointer-leave"], (o) => {
            o.pointerType === "touch" && window.setTimeout(() => {
              t.delete(o.pointerId);
            }, 200);
          })
        ), r.push(
          e.geo.map.esriView.on("pointer-move", (o) => {
            const { pointerId: v, pointerType: g, x: u, y: l } = o, s = t.get(v);
            if (!s || g !== "touch" || t.size !== 1) {
              i.value.classList.remove("pg-active");
              return;
            }
            Math.sqrt(Math.pow(u - s.x, 2) + Math.pow(l - s.y, 2)) < 20 || (i.value.classList.add("pg-active"), p.value !== -1 && clearTimeout(p.value), p.value = window.setTimeout(() => {
              i.value.classList.remove("pg-active");
            }, 2e3), window.scrollBy(s.x - u, s.y - l));
          })
        );
      });
    };
    return (t, o) => (x(), A("div", {
      class: "pg",
      ref_key: "panGuard",
      ref: i
    }, [
      M("p", B, T(I(a)("panguard.instructions")), 1)
    ], 512));
  }
}), V = /* @__PURE__ */ P(F, [["__scopeId", "data-v-e91f9000"]]);
class Vt extends R {
  added() {
    Object.entries(D).forEach((p) => this.$iApi.$i18n.mergeLocaleMessage(...p));
    const { destroy: a, el: e } = this.mount(V, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]), this.removed = () => {
      a();
    };
  }
}
export {
  Vt as default
};
