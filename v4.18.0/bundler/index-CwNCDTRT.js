import { defineComponent as E, inject as w, ref as d, reactive as l, onMounted as x, onBeforeUnmount as y, createElementBlock as A, openBlock as M, createElementVNode as T, toDisplayString as I, unref as P } from "vue";
import { G as s, _ as R, F as S } from "./main-DEZKkTlX.js";
import "pinia";
import { useI18n as D } from "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-sketch";
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
const V = { en: { "panguard.instructions": "Use two fingers to pan the map" }, fr: { "panguard.instructions": "Utilisez deux doigts pour faire un panoramique de la carte" } }, F = { class: "pg-label" }, H = /* @__PURE__ */ E({
  __name: "map-panguard",
  setup(h) {
    const { t: a } = D(), t = w("iApi"), i = d(), n = d(-1), r = l([]), p = l([]);
    x(() => {
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
    }), y(() => {
      p.forEach((e) => t.event.off(e)), r.forEach((e) => e.remove());
    });
    const m = () => {
      const e = /* @__PURE__ */ new Map(), c = (o) => {
        o.pointerType === "touch" && window.setTimeout(() => {
          e.delete(o.pointerId);
        }, 200);
      };
      t.geo.map.viewPromise.then(() => {
        r.push(
          t.geo.map.esriView.on("pointer-down", (o) => {
            o.pointerType === "touch" && e.set(o.pointerId, { x: o.x, y: o.y });
          })
        ), r.push(t.geo.map.esriView.on("pointer-leave", c)), r.push(t.geo.map.esriView.on("pointer-up", c)), r.push(
          t.geo.map.esriView.on("pointer-move", (o) => {
            const { pointerId: f, pointerType: v, x: g, y: _ } = o, u = e.get(f);
            if (!u || v !== "touch" || e.size !== 1) {
              i.value.classList.remove("pg-active");
              return;
            }
            Math.sqrt(Math.pow(g - u.x, 2) + Math.pow(_ - u.y, 2)) < 20 || (i.value.classList.add("pg-active"), n.value !== -1 && clearTimeout(n.value), n.value = window.setTimeout(() => {
              i.value.classList.remove("pg-active");
            }, 2e3));
          })
        );
      });
    };
    return (e, c) => (M(), A("div", {
      class: "pg",
      ref_key: "panGuard",
      ref: i
    }, [
      T("p", F, I(P(a)("panguard.instructions")), 1)
    ], 512));
  }
}), $ = /* @__PURE__ */ R(H, [["__scopeId", "data-v-1802f091"]]);
class we extends S {
  added() {
    Object.entries(V).forEach((n) => this.$iApi.$i18n.mergeLocaleMessage(...n));
    const { destroy: a, el: t } = this.mount($, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this.removed = () => {
      a();
    };
  }
}
export {
  we as default
};
