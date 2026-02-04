import { fabric as i } from "fabric";
import "tiny-emitter";
import { F as n } from "./main-C-NQiA0Q.js";
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
import "vue";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
class st extends n {
  get config() {
    return this.$iApi.fixture.get("export").config?.mapElements;
  }
  make(r) {
    const o = this.$iApi.geo.map.caption.scaleHelper(), p = [];
    for (let t = 0; t < 2; t++) {
      const m = new i.Text(
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
      ), e = new i.Line([0, t === 0 ? 30 : 40, o[t].pixels, t === 0 ? 30 : 40], {
        stroke: "black",
        strokeWidth: 3
      });
      p.push(new i.Group([e, m]));
    }
    return Promise.resolve(new i.Group(p, r));
  }
}
export {
  st as default
};
