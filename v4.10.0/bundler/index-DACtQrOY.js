import { defineComponent as m, inject as c, ref as d, computed as u, onMounted as g, onBeforeUnmount as h, openBlock as v, createElementBlock as f, createElementVNode as _, toDisplayString as $, unref as A } from "vue";
import { D as i, G as S, _ as w, F as E } from "./main-C-NQiA0Q.js";
import "pinia";
import { useI18n as b } from "vue-i18n";
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
const C = { en: { "scrollguard.instructions": "Use ctrl + scroll to zoom the map" }, fr: { "scrollguard.instructions": "Utilisez les touches Ctrl et + pour faire un zoom de la carte" } }, y = { class: "sg-label" }, x = /* @__PURE__ */ m({
  __name: "map-scrollguard",
  setup(a) {
    const e = i(), { t: s } = b(), t = c("iApi"), p = d(), r = u(() => e.enabled);
    g(() => {
      t.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener(
        "wheel",
        l,
        {
          capture: !0
        }
      ), t.event.on(S.MAP_CREATED, () => {
        t.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener(
          "wheel",
          l,
          {
            capture: !0
          }
        );
      });
    }), h(() => {
      t.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener(
        "wheel",
        l,
        {
          capture: !0
        }
      );
    });
    const l = (n) => {
      if (!r.value) return;
      const o = p.value.classList;
      n.ctrlKey ? (o.remove("sg-active"), o.add("sg-scrolling")) : (n.stopPropagation(), o.remove("sg-scrolling"), o.add("sg-active"), window.setTimeout(() => o.remove("sg-active"), 2e3));
    };
    return (n, o) => (v(), f("div", {
      class: "sg",
      ref_key: "scrollGuard",
      ref: p
    }, [
      _("p", y, $(A(s)("scrollguard.instructions")), 1)
    ], 512));
  }
}), L = /* @__PURE__ */ w(x, [["__scopeId", "data-v-bf6386a4"]]);
class G extends E {
  /**
   * Enables the scrollguard on the map if set to true.
   *
   * @param {boolean} value
   * @memberof ScrollguardAPI
   */
  setEnabled(e) {
    i(this.$vApp.$pinia).enabled = e;
  }
  /**
   * Parses the scrollguard config JSON snippet from the config file and save to the fixture store.
   *
   * @param {ScrollguardConfig} [ScrollguardConfig]
   * @memberof ScrollguardAPI
   */
  _parseConfig(e) {
    i(this.$vApp.$pinia).enabled = e?.enabled || !1;
  }
  get config() {
    return super.config;
  }
}
class Le extends G {
  added() {
    Object.entries(C).forEach((r) => this.$iApi.$i18n.mergeLocaleMessage(...r)), this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (r) => this._parseConfig(r)
    ), { destroy: s, el: t } = this.mount(L, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this.removed = () => {
      e(), s(), i(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  Le as default
};
