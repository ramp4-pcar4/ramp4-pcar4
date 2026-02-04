import { defineComponent as m, inject as s, resolveComponent as n, createBlock as l, openBlock as c, unref as b, withCtx as v, createElementVNode as e, markRaw as u } from "vue";
import "tiny-emitter";
import { F as d, b as h, d as f } from "./main-6dWPqJr6.js";
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
import { useI18n as g } from "vue-i18n";
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
const x = /* @__PURE__ */ m({
  __name: "nav-button",
  setup(o) {
    const { t } = g(), i = s("iApi"), a = () => i.panel.toggle("basemap");
    return (A, p) => {
      const r = n("mapnav-button");
      return c(), l(r, {
        onClickFunction: a,
        tooltip: b(t)("basemap.title")
      }, {
        default: v(() => p[0] || (p[0] = [
          e("svg", {
            class: "fill-current w-32 h-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            e("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            e("path", { d: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), w = { en: { "basemap.select": "Select basemap", "basemap.title": "Basemap" }, fr: { "basemap.select": "Sélectionner la carte de base", "basemap.title": "Carte de base" } };
class at extends d {
  added() {
    this.$iApi.component("basemap-nav-button", x), this.$iApi.panel.register(
      {
        id: "basemap",
        config: {
          screens: { "basemap-component": () => u(import("./screen-CpRnjXl-.js")) },
          button: {
            tooltip: "basemap.title",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><path d="M0 0h24v24H0z" fill="none" /></svg>'
          },
          alertName: "basemap.title"
        }
      },
      { i18n: { messages: w } }
    ), this.handlePanelTeleports(["basemap"]);
  }
  removed() {
    this.$iApi.fixture.exists("appbar") && h(this.$vApp.$pinia).removeButton("basemap"), this.$iApi.fixture.exists("mapnav") && f(this.$vApp.$pinia).removeItem("basemap"), this.$iApi.panel.remove("basemap");
  }
}
export {
  at as default
};
