import { defineComponent as l, inject as a, resolveComponent as m, createBlock as h, openBlock as c, unref as u, withCtx as v, createElementVNode as i, markRaw as d } from "vue";
import "tiny-emitter";
import { F as f, j as r, G as g, d as x } from "./main-6dWPqJr6.js";
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
import { useI18n as A } from "vue-i18n";
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
class $ extends f {
  /**
   * Toggles help panel
   *
   * @param {boolean} [open] force panel open or closed
   * @memberof HelpAPI
   */
  toggleHelp(t) {
    const e = this.$iApi.panel.get("help");
    this.$iApi.panel.toggle(e, t);
  }
  /**
   * Returns `HelpConfig` section of the global config file.
   *
   * @readonly
   * @type {HelpConfig}
   * @memberof HelpAPI
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the help config JSON snippet from the config file and save to the fixture store.
   *
   * @param {HelpConfig} [helpConfig]
   * @memberof HelpAPI
   */
  _parseConfig(t) {
    const e = r(this.$vApp.$pinia);
    e.location = t?.location ?? "./help/", this.handlePanelWidths(["help"]), this.handlePanelTeleports(["help"]);
  }
}
const _ = /* @__PURE__ */ l({
  __name: "nav-button",
  setup(p) {
    const t = a("iApi"), { t: e } = A(), o = () => t.event.emit(g.HELP_TOGGLE);
    return (C, n) => {
      const s = m("mapnav-button");
      return c(), h(s, {
        onClickFunction: o,
        tooltip: u(e)("help.title")
      }, {
        default: v(() => n[0] || (n[0] = [
          i("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            class: "fill-current w-32 h-20"
          }, [
            i("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            i("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), w = { en: { "help.title": "Help", "help.search": "Search Help", "help.section.expand": "Expand section", "help.section.collapse": "Collapse section", "help.noResults": "Nothing is found. Please try a different search." }, fr: { "help.title": "Aide", "help.search": "Aide à la recherche", "help.section.expand": "Développer une section", "help.section.collapse": "Réduire une section", "help.noResults": "Aucun résultat. Veuillez essayer une autre recherche." } };
class se extends $ {
  added() {
    this.$iApi.component("help-nav-button", _), this.$iApi.panel.register(
      {
        help: {
          screens: {
            "help-screen": () => d(import("./screen-aL1LqS_R.js"))
          },
          style: {
            "flex-grow": "1",
            "max-width": "750px"
          },
          alertName: "help.title"
        }
      },
      {
        i18n: { messages: w }
      }
    ), this._parseConfig(this.config);
    const t = this.$vApp.$watch(
      () => this.config,
      (e) => this._parseConfig(e)
    );
    this.removed = () => {
      t(), this.$iApi.fixture.exists("mapnav") && x(this.$vApp.$pinia).removeItem("help"), r(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("help");
    };
  }
}
export {
  se as default
};
