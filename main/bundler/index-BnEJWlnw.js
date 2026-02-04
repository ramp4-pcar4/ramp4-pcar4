import { defineComponent as a, inject as n, ref as l, onMounted as d, onBeforeUnmount as h, createElementBlock as c, openBlock as u, normalizeClass as v, createElementVNode as o } from "vue";
import { G as r, _ as f, F as _ } from "./main-6dWPqJr6.js";
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
const w = /* @__PURE__ */ a({
  __name: "crosshairs",
  setup(m) {
    const t = n("iApi"), e = l(!1), i = l([]);
    return d(() => {
      i.value.push(
        t.event.on(r.MAP_EXTENTCHANGE, () => {
          t.geo.map.keysActive && (e.value = !0);
        })
      ), i.value.push(
        t.event.on(r.MAP_FOCUS, () => {
          t.geo.map.mouseFocus || (e.value = !0);
        })
      ), i.value.push(
        t.event.on(r.MAP_MOUSEDOWN, () => {
          e.value = !1;
        })
      ), i.value.push(
        t.event.on(r.MAP_BLUR, () => {
          e.value = !1;
        })
      );
    }), h(() => {
      i.value.forEach((s) => t.event.off(s));
    }), (s, p) => (u(), c("div", {
      class: v(["crosshairs absolute duration-150 top-1/2 left-1/2 h-230 w-230", { "opacity-0": !e.value }])
    }, p[0] || (p[0] = [
      o("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fit: "",
        height: "100%",
        width: "100%",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24",
        focusable: "false"
      }, [
        o("g", {
          fill: "#545353",
          stroke: "#fff",
          id: "crosshairs"
        }, [
          o("ellipse", {
            ry: ".254",
            rx: ".262",
            id: "path3808",
            cx: "12",
            cy: "12",
            "stroke-width": ".076"
          }),
          o("path", {
            d: "M.045 12.047l6.093.051 4.264.068v-.332l-4.264.067-6.093.064v.039z",
            id: "rect4632-6",
            "stroke-width": ".09"
          }),
          o("path", {
            d: "M12.047 23.955l.051-6.093.068-4.264h-.332l.067 4.264.064 6.093h.039z",
            id: "rect4632-6-0",
            "stroke-width": ".09"
          }),
          o("path", {
            d: "M23.955 11.953l-6.093-.051-4.264-.068v.332l4.264-.067 6.093-.064v-.039z",
            id: "rect4632-6-4",
            "stroke-width": ".09"
          }),
          o("path", {
            d: "M11.953.045l-.051 6.093-.068 4.264h.332l-.067-4.264-.064-6.093h-.039z",
            id: "rect4632-6-9",
            "stroke-width": ".09"
          })
        ])
      ], -1)
    ]), 2));
  }
}), M = /* @__PURE__ */ f(w, [["__scopeId", "data-v-ed3d079c"]]);
class it extends _ {
  added() {
    const { destroy: t, el: e } = this.mount(M, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]), this.removed = () => {
      t();
    };
  }
}
export {
  it as default
};
