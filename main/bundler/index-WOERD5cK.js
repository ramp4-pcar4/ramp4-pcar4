import { defineComponent as n, ref as m, onMounted as l, createElementBlock as u, openBlock as s, createElementVNode as a, inject as d, resolveComponent as _, createBlock as h, withCtx as f } from "vue";
import "tiny-emitter";
import { F as c } from "./main-6dWPqJr6.js";
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
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
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
  setup(e) {
    const t = e, o = m(), p = m("https://i.imgur.com/p13yknD.png");
    return l(() => {
      setTimeout(() => {
        o.value.parentNode.removeChild(o.value), t.fixture.remove();
      }, 6e3);
    }), (r, i) => (s(), u("div", {
      class: "absolute top-0 right-0",
      ref_key: "el",
      ref: o
    }, [
      a("img", {
        style: { width: "250px" },
        src: p.value,
        alt: "Snowman",
        srcset: ""
      }, null, 8, x)
    ], 512));
  }
}), g = /* @__PURE__ */ n({
  __name: "appbar-button",
  setup(e) {
    const t = d("iApi"), o = () => {
      t.fixture.add("snowman");
    };
    return (p, r) => {
      const i = _("appbar-button", !0);
      return s(), h(i, {
        onClickFunction: o,
        tooltip: "⛄"
      }, {
        default: f(() => r[0] || (r[0] = [
          a("span", { class: "block h-24" }, "⛄", -1)
        ])),
        _: 1
      });
    };
  }
});
class rt extends c {
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
  rt as default
};
