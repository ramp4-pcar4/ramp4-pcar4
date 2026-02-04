import { markRaw as s } from "vue";
import { _ as o } from "./screen.vue_vue_type_script_setup_true_lang-BUFiUvBd.js";
import "tiny-emitter";
import { F as a, c as r, b as p } from "./main-6dWPqJr6.js";
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
const n = { en: { "areas-of-interest.title": "Areas of Interest", "areas-of-interest.select": "Select area of interest" }, fr: { "areas-of-interest.title": "Zones d'intérêt", "areas-of-interest.select": "Sélectionner la zone d'intérêt" } };
class m extends a {
  /**
   * Get the current areas of interest config
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the areas of interest config snippet from the config json
   */
  _parseConfig(t) {
    if (!t)
      return;
    const e = r(this.$vApp.$pinia);
    e.areas = t.areas, this.handlePanelTeleports(["areas-of-interest"]);
  }
}
class U extends m {
  added() {
    this.$iApi.panel.register(
      {
        "areas-of-interest": {
          screens: {
            "areas-of-interest-screen": s(o)
          },
          style: {
            width: "350px"
          },
          button: {
            tooltip: "areas-of-interest.title",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>'
          },
          alertName: "areas-of-interest.title"
        }
      },
      {
        i18n: { messages: n }
      }
    ), this._parseConfig(this.config);
    const t = this.$vApp.$watch(
      () => this.config,
      (e) => this._parseConfig(e)
    );
    this.removed = () => {
      t(), this.$iApi.fixture.exists("appbar") && p(this.$vApp.$pinia).removeButton("areas-of-interest"), this.$iApi.panel.remove("areas-of-interest"), r(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  U as default
};
