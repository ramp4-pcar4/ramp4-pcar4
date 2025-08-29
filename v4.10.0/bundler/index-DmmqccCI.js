import { defineComponent as a, inject as n, ref as m, onMounted as h, onBeforeUnmount as d, openBlock as c, createElementBlock as u, normalizeClass as v, createElementVNode as e } from "vue";
import { G as r, _ as f, F as _ } from "./main-C-NQiA0Q.js";
import "pinia";
import "vue-i18n";
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
const w = /* @__PURE__ */ a({
  __name: "crosshairs",
  setup(l) {
    const t = n("iApi"), o = m(!1), i = m([]);
    return h(() => {
      i.value.push(
        t.event.on(r.MAP_EXTENTCHANGE, () => {
          t.geo.map.keysActive && (o.value = !0);
        })
      ), i.value.push(
        t.event.on(r.MAP_FOCUS, () => {
          t.geo.map.mouseFocus || (o.value = !0);
        })
      ), i.value.push(
        t.event.on(r.MAP_MOUSEDOWN, () => {
          o.value = !1;
        })
      ), i.value.push(
        t.event.on(r.MAP_BLUR, () => {
          o.value = !1;
        })
      );
    }), d(() => {
      i.value.forEach((p) => t.event.off(p));
    }), (p, s) => (c(), u("div", {
      class: v(["crosshairs absolute duration-150 top-1/2 left-1/2 h-230 w-230", { "opacity-0": !o.value }])
    }, s[0] || (s[0] = [
      e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fit: "",
        height: "100%",
        width: "100%",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24",
        focusable: "false"
      }, [
        e("g", {
          fill: "#545353",
          stroke: "#fff",
          id: "crosshairs"
        }, [
          e("ellipse", {
            ry: ".254",
            rx: ".262",
            id: "path3808",
            cx: "12",
            cy: "12",
            "stroke-width": ".076"
          }),
          e("path", {
            d: "M.045 12.047l6.093.051 4.264.068v-.332l-4.264.067-6.093.064v.039z",
            id: "rect4632-6",
            "stroke-width": ".09"
          }),
          e("path", {
            d: "M12.047 23.955l.051-6.093.068-4.264h-.332l.067 4.264.064 6.093h.039z",
            id: "rect4632-6-0",
            "stroke-width": ".09"
          }),
          e("path", {
            d: "M23.955 11.953l-6.093-.051-4.264-.068v.332l4.264-.067 6.093-.064v-.039z",
            id: "rect4632-6-4",
            "stroke-width": ".09"
          }),
          e("path", {
            d: "M11.953.045l-.051 6.093-.068 4.264h.332l-.067-4.264-.064-6.093h-.039z",
            id: "rect4632-6-9",
            "stroke-width": ".09"
          })
        ])
      ], -1)
    ]), 2));
  }
}), M = /* @__PURE__ */ f(w, [["__scopeId", "data-v-55a2f166"]]);
class wt extends _ {
  added() {
    const { destroy: t, el: o } = this.mount(M, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(o.childNodes[0]), this.removed = () => {
      t();
    };
  }
}
export {
  wt as default
};
