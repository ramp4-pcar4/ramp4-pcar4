import { fabric as i } from "fabric";
import "tiny-emitter";
import { F as n } from "./main-6dWPqJr6.js";
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
import "vue";
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
class K extends n {
  get config() {
    return this.$iApi.fixture.get("export").config?.mapElements;
  }
  make(r) {
    const o = this.$iApi.geo.map.caption.scaleHelper(), p = [];
    for (let t = 0; t < 2; t++) {
      const e = new i.Text(
        this.$iApi.$i18n.t("export.scaleBar.approx", [
          `${this.$iApi.$i18n.n(o[t].distance, "number")}${o[t].units}`
        ]),
        {
          fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
          fill: "#000",
          fontSize: 16,
          top: t * 50,
          left: 0,
          originX: "left",
          originY: "top"
        }
      ), m = new i.Line([0, t === 0 ? 30 : 40, o[t].pixels, t === 0 ? 30 : 40], {
        stroke: "black",
        strokeWidth: 3
      });
      p.push(new i.Group([m, e]));
    }
    return Promise.resolve(new i.Group(p, r));
  }
}
export {
  K as default
};
