import { fabric as e } from "fabric";
import p from "deepmerge";
import "tiny-emitter";
import { F as n } from "./main-CjWeACQW.js";
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
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "vue";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
class O extends n {
  get config() {
    return this.$iApi.fixture.get("export").config?.footnote;
  }
  make(t) {
    const o = this.config, i = {
      text: "RAMP-PCAR",
      fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      fill: "#000",
      fontSize: 20,
      top: 0
    };
    o?.value !== void 0 && (i.text = o.value);
    const r = p(i, t || {}), m = new e.Textbox(r.text, r);
    return Promise.resolve(m);
  }
}
export {
  O as default
};
