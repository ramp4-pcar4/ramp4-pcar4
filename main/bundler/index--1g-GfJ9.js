import "tiny-emitter";
import { F as C, v as y, l as G, G as T, P as W, w as z, L as B, x as H, y as R } from "./main-6dWPqJr6.js";
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
import { debounce as Y } from "throttle-debounce";
import { defineComponent as q, inject as j, ref as r, computed as E, reactive as O, onMounted as X, onBeforeUnmount as F, createElementBlock as V, openBlock as D, normalizeStyle as K, createElementVNode as U } from "vue";
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
class J extends C {
  /**
   * Parses the north arrow config JSON snippet from the config file and save to the fixture store.
   *
   * @param {NortharrowConfig} [northarrowConfig]
   * @memberof NortharrowAPI
   */
  _parseConfig(t) {
    const o = y(this.$vApp.$pinia);
    t && (o.arrowIcon = t.arrowIcon, o.poleIcon = t.poleIcon);
  }
  get config() {
    return super.config;
  }
}
const Q = "path", Z = 12, ee = "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z", te = "#ff0000ff", oe = 5, re = 6, ie = {
  style: Q,
  size: Z,
  path: ee,
  colour: te,
  xOffset: oe,
  yOffset: re
}, ae = ["innerHTML"], ne = /* @__PURE__ */ q({
  __name: "northarrow",
  setup(S) {
    const t = G(), o = y(), e = j("iApi"), f = r(), n = E(() => o.arrowIcon), M = E(() => o.poleIcon), p = r(0), s = r(0), c = r(!1), P = r(`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`), k = r(!1), A = O([]), $ = r([]);
    let _;
    X(() => {
      const i = t.config.map;
      $.value = i.tileSchemas, n?.value && (P.value = `<img width='25' src='${n.value}'>`), e.geo.map.esriView?.ready && x(e.geo.map.getExtent()), A.push(e.event.on(T.MAP_EXTENTCHANGE, Y(300, x)));
    }), F(() => {
      A.forEach((i) => e.event.off(i));
    });
    const x = async (i) => {
      _ = t.activeBasemapConfig;
      let h;
      for (const m of $.value)
        if (_?.tileSchemaId === m.id) {
          h = m?.hasNorthPole;
          break;
        }
      const l = e.$vApp.$el.querySelector(".inner-shell"), d = f.value.querySelector(".northarrow").getBoundingClientRect().width, u = e.$vApp.$el.querySelector(".appbar")?.clientWidth || 0, I = i.sr;
      if (h || typeof h > "u" && !I.isWebMercator()) {
        const m = new W("pole", { x: -96, y: 90 }), L = await e.geo.proj.projectGeometry(I, m), v = e.geo.map.mapPointToScreenPoint(L);
        if (v.screenY < 0) {
          c.value = !0;
          const a = {
            screenX: l.clientWidth / 2,
            screenY: l.clientHeight
          };
          p.value = Math.atan(
            (v.screenX - a.screenX) / (a.screenY - v.screenY)
          ) * 180 / Math.PI, s.value = l.clientWidth / 2 + l.clientHeight * Math.tan(p.value * Math.PI / 180) - d / 2, s.value = Math.max(
            u - d / 2,
            Math.min(e.geo.map.getPixelWidth() - d / 2, s.value)
          );
        } else if (c.value = !1, !k.value) {
          k.value = !0;
          let a;
          M.value ? a = {
            style: z.ICON,
            icon: M.value,
            height: 16.5,
            width: 16.5
          } : a = ie;
          const w = e.geo.layer.createLayer({
            id: g,
            layerType: B.GRAPHIC,
            url: "",
            cosmetic: !0,
            // mark this layer as a cosmetic layer
            system: !0
          });
          e.geo.map.addLayer(w), w.loadPromise().then(() => {
            const b = new H(L, "northpole"), N = new R(
              a
            );
            b.style = N, w.addGraphic(b);
          });
        }
      } else
        c.value = !0, p.value = 0, s.value = u + (l.clientWidth - u - d) / 2;
    };
    return (i, h) => (D(), V("div", {
      class: "absolute transition-all duration-300 ease-out",
      style: K({
        "transform-origin": "top center",
        transform: `rotate(${p.value}deg)`,
        left: `${s.value}px`,
        visibility: c.value ? "visible" : "hidden"
      }),
      ref_key: "el",
      ref: f
    }, [
      U("span", {
        class: "northarrow",
        innerHTML: P.value
      }, null, 8, ae)
    ], 4));
  }
}), g = "RampPoleMarker";
class Oe extends J {
  async added() {
    this._parseConfig(this.config);
    const t = this.$vApp.$watch(
      () => this.config,
      (n) => this._parseConfig(n)
    ), { destroy: o, el: e } = this.mount(ne, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]), this.removed = () => {
      t(), this.$iApi.geo.layer.getLayer(g) && this.$iApi.geo.map.removeLayer(g), y(this.$vApp.$pinia).$reset(), o();
    };
  }
}
export {
  g as POLE_MARKER_LAYER_ID,
  Oe as default
};
