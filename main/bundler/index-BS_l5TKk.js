import { F as h, g as p, G as n, E as f } from "./main-6dWPqJr6.js";
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
import "tiny-emitter";
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
class A extends h {
  /**
   * Parses the extentguard config JSON snippet from the config file and save to the fixture store.
   *
   * @param {extentguardConfig} [ExtentguardConfig]
   * @memberof ExtentguardAPI
   */
  _parseConfig(t) {
    if (t) {
      const i = p(this.$vApp.$pinia);
      t.alwaysOn && i.setAlwaysOn(!0);
      const e = t.extentSetIds;
      e && Array.isArray(e) && e.length > 0 && i.setExtentSetIds(e);
    }
  }
  get config() {
    return super.config;
  }
}
function c(o, t, i, e) {
  const s = o - t, r = t + s / 2, m = Math.min(s, i - e);
  return r > i ? {
    min: i - m,
    max: i,
    changed: !0
  } : r < e ? {
    min: e,
    max: e + m,
    changed: !0
  } : {
    min: t,
    max: o,
    changed: !1
  };
}
class Z extends A {
  /**
   * Schema change event handler name
   */
  schemaEH = "";
  /**
   * Extent change event handler name
   */
  extentEH = "";
  added() {
    this._parseConfig(this.config);
    const t = this.$vApp.$watch(
      () => this.config,
      (i) => this._parseConfig(i)
    );
    this.removed = () => {
      t(), p(this.$vApp.$pinia).$reset(), this.evtOff("schemaEH"), this.evtOff("extentEH");
    }, this.schemaEH = this.$iApi.event.on(n.MAP_BASEMAPCHANGE, (i) => {
      i.schemaChanged && this.checkActive();
    }), this.$iApi.geo.map.created ? this.checkActive() : this.$iApi.event.once(n.MAP_CREATED, () => {
      this.checkActive();
    });
  }
  /**
   * Examines current state of the instance and activates or deactivates appropriately
   */
  checkActive() {
    const t = p(this.$vApp.$pinia);
    t.alwaysOn || t.extentSetIds.includes(this.$iApi.geo.map.getExtentSet().id) ? t.active || (t.setActive(!0), this.extentEH = this.$iApi.event.on(n.MAP_EXTENTCHANGE, (i) => {
      t.enforcing || this.enforceBoundary(i, !1);
    })) : t.active && (t.setActive(!1), this.evtOff("extentEH"));
  }
  /**
   * Wraps the act of checking if an event handler exists, and if so, removing it.
   * Just a reapeated code saver
   * @param eventPropName property name of this class that can hold an event handler name
   * @private
   */
  evtOff(t) {
    this[t] && (this.$iApi.event.off(this[t]), this[t] = "");
  }
  /**
   * Checks if the center of the given extent is outside of the maps maximum extent. If it is,
   * will pan the map back to something appropriate
   *
   * @function enforceBoundary
   * @param {Extent} extent an extent to adjudicate
   * @param {boolean} safetyCheck indicates if this enforcement is a check against an original enforcement
   */
  enforceBoundary(t, i) {
    const e = this.$iApi.geo.map.getExtentSet().maximumExtent, s = c(t.xmax, t.xmin, e.xmax, e.xmin), r = c(t.ymax, t.ymin, e.ymax, e.ymin);
    if (r.changed || s.changed) {
      i && (this.$iApi.geo.map.esriView.extent = e.toESRI());
      const m = f.fromParams(
        "extguard",
        s.min,
        r.min,
        s.max,
        r.max,
        t.sr
      ), a = p(this.$vApp.$pinia);
      a.setEnforcing(!0), setTimeout(() => {
        this.$iApi.geo.map.zoomMapTo(m, void 0, !0, 400, "ease-in-out").then(() => {
          a.setEnforcing(!1), this.enforceBoundary(this.$iApi.geo.map.getExtent(), !0);
        });
      }, 150);
    }
  }
}
export {
  Z as default
};
