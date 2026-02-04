import { defineComponent as c, inject as m, ref as d, computed as u, onMounted as g, onBeforeUnmount as h, createElementBlock as v, openBlock as f, createElementVNode as _, toDisplayString as $, unref as A } from "vue";
import { K as s, G as S, _ as w, F as E } from "./main-6dWPqJr6.js";
import "pinia";
import { useI18n as b } from "vue-i18n";
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
const C = { en: { "scrollguard.instructions": "Use ctrl + scroll to zoom the map" }, fr: { "scrollguard.instructions": "Utilisez les touches Ctrl et + pour faire un zoom de la carte" } }, y = { class: "sg-label" }, x = /* @__PURE__ */ c({
  __name: "map-scrollguard",
  setup(a) {
    const e = s(), { t: i } = b(), t = m("iApi"), l = d(), r = u(() => e.enabled);
    g(() => {
      t.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener(
        "wheel",
        n,
        {
          capture: !0
        }
      ), t.event.on(S.MAP_CREATED, () => {
        t.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener(
          "wheel",
          n,
          {
            capture: !0
          }
        );
      });
    }), h(() => {
      t.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener(
        "wheel",
        n,
        {
          capture: !0
        }
      );
    });
    const n = (p) => {
      if (!r.value) return;
      const o = l.value.classList;
      p.ctrlKey ? (o.remove("sg-active"), o.add("sg-scrolling")) : (p.stopPropagation(), o.remove("sg-scrolling"), o.add("sg-active"), window.setTimeout(() => o.remove("sg-active"), 2e3));
    };
    return (p, o) => (f(), v("div", {
      class: "sg",
      ref_key: "scrollGuard",
      ref: l
    }, [
      _("p", y, $(A(i)("scrollguard.instructions")), 1)
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
    s(this.$vApp.$pinia).enabled = e;
  }
  /**
   * Parses the scrollguard config JSON snippet from the config file and save to the fixture store.
   *
   * @param {ScrollguardConfig} [ScrollguardConfig]
   * @memberof ScrollguardAPI
   */
  _parseConfig(e) {
    s(this.$vApp.$pinia).enabled = e?.enabled || !1;
  }
  get config() {
    return super.config;
  }
}
class ue extends G {
  added() {
    Object.entries(C).forEach((r) => this.$iApi.$i18n.mergeLocaleMessage(...r)), this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (r) => this._parseConfig(r)
    ), { destroy: i, el: t } = this.mount(L, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this.removed = () => {
      e(), i(), s(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  ue as default
};
