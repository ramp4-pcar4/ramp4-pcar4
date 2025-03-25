import { defineComponent as n, ref as m, onMounted as l, openBlock as s, createElementBlock as u, createElementVNode as a, inject as d, resolveComponent as _, createBlock as h, withCtx as f } from "vue";
import "tiny-emitter";
import { F as c } from "./main-C-NQiA0Q.js";
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
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
const x = ["src"], b = /* @__PURE__ */ n({
  __name: "snowman",
  props: {
    fixture: {
      type: c,
      required: !0
    },
    message: String
  },
  setup(r) {
    const t = r, o = m(), i = m("https://i.imgur.com/p13yknD.png");
    return l(() => {
      setTimeout(() => {
        o.value.parentNode.removeChild(o.value), t.fixture.remove();
      }, 6e3);
    }), (p, e) => (s(), u("div", {
      class: "absolute top-0 right-0",
      ref_key: "el",
      ref: o
    }, [
      a("img", {
        style: { width: "250px" },
        src: i.value,
        alt: "Snowman",
        srcset: ""
      }, null, 8, x)
    ], 512));
  }
}), g = /* @__PURE__ */ n({
  __name: "appbar-button",
  setup(r) {
    const t = d("iApi"), o = () => {
      t.fixture.add("snowman");
    };
    return (i, p) => {
      const e = _("appbar-button", !0);
      return s(), h(e, {
        onClickFunction: o,
        tooltip: "⛄"
      }, {
        default: f(() => p[0] || (p[0] = [
          a("span", { class: "block h-24" }, "⛄", -1)
        ])),
        _: 1
      });
    };
  }
});
class bt extends c {
  added() {
    this.$iApi.component("snowman-appbar-button", g);
    const { el: t } = this.mount(b, {
      app: this.$element,
      props: { message: "This is a snowman prop.", fixture: this }
    });
    this.$vApp.$el.appendChild(t.childNodes[0]);
  }
  removed() {
  }
}
export {
  bt as default
};
