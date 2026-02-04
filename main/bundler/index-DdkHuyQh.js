import { defineComponent as c, inject as n, resolveComponent as h, createBlock as l, openBlock as m, unref as g, withCtx as v, createElementVNode as o, markRaw as f } from "vue";
import "tiny-emitter";
import { F as u, h as i, b as d, d as S } from "./main-6dWPqJr6.js";
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
import { useI18n as b } from "vue-i18n";
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
class x extends u {
}
const w = /* @__PURE__ */ c({
  __name: "nav-button",
  setup(t) {
    const { t: e } = b(), r = n("iApi"), a = () => {
      r.panel.toggle("geosearch");
    };
    return ($, s) => {
      const p = h("mapnav-button");
      return m(), l(p, {
        onClickFunction: a,
        tooltip: g(e)("geosearch.title")
      }, {
        default: v(() => s[0] || (s[0] = [
          o("svg", {
            class: "fill-current w-32 h-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            o("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
            o("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), A = { en: { "geosearch.title": "Geolocation Search", "geosearch.noResults": "No results to show for ", "geosearch.searchText": "Search for a location...", "geosearch.visible": "Visible on map", "geosearch.filters.province": "Province", "geosearch.filters.type": "Type", "geosearch.filters.clear": "Clear filters", "geosearch.serviceError": "No response from {services} service(s)", "geosearch.badChars": "The character(s) {chars} are not supported and will be ignored" }, fr: { "geosearch.title": "Recherche géolocalisée", "geosearch.noResults": "Aucun résultat à afficher pour ", "geosearch.searchText": "Rechercher un emplacement...", "geosearch.visible": "Visible sur la carte", "geosearch.filters.province": "Province", "geosearch.filters.type": "Type", "geosearch.filters.clear": "Effacer les filtres", "geosearch.serviceError": "Pas de réponse de la part des services de {services}", "geosearch.badChars": "Les caractères {chars} ne sont pas pris en charge et seront ignorés" } };
class pe extends x {
  async added() {
    i(this.$vApp.$pinia).initService(this.$iApi.language, this.config), this.$iApi.component("geosearch-nav-button", w), this.$iApi.panel.register(
      {
        id: "geosearch",
        config: {
          screens: {
            "geosearch-component": () => f(import("./screen-DfI4b1QK.js"))
          },
          button: {
            tooltip: "geosearch.title",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>'
          },
          alertName: "geosearch.title"
        }
      },
      { i18n: { messages: A } }
    ), this.handlePanelTeleports(["geosearch"]);
  }
  removed() {
    this.$iApi.fixture.exists("appbar") && d(this.$vApp.$pinia).removeButton("geosearch"), this.$iApi.fixture.exists("mapnav") && S(this.$vApp.$pinia).removeItem("geosearch"), i(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("geosearch");
  }
}
export {
  pe as default
};
