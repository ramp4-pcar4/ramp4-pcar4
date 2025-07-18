import { bx as m, fJ as h, fK as r, fL as p } from "./main-3gzXighg.js";
class A extends m {
  /**
   * Parses the extentguard config JSON snippet from the config file and save to the fixture store.
   *
   * @param {extentguardConfig} [ExtentguardConfig]
   * @memberof ExtentguardAPI
   */
  _parseConfig(t) {
    if (t) {
      const e = h(this.$vApp.$pinia);
      t.alwaysOn && e.setAlwaysOn(!0);
      const i = t.extentSetIds;
      i && Array.isArray(i) && i.length > 0 && e.setExtentSetIds(i);
    }
  }
  get config() {
    return super.config;
  }
}
function f(a, t, e, i) {
  const s = a - t, n = t + s / 2, c = Math.min(s, e - i);
  return n > e ? {
    min: e - c,
    max: e,
    changed: !0
  } : n < i ? {
    min: i,
    max: i + c,
    changed: !0
  } : {
    min: t,
    max: a,
    changed: !1
  };
}
class E extends A {
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
      (e) => this._parseConfig(e)
    );
    this.removed = () => {
      t(), h(this.$vApp.$pinia).$reset(), this.evtOff("schemaEH"), this.evtOff("extentEH");
    }, this.schemaEH = this.$iApi.event.on(r.MAP_BASEMAPCHANGE, (e) => {
      e.schemaChanged && this.checkActive();
    }), this.$iApi.geo.map.created ? this.checkActive() : this.$iApi.event.once(r.MAP_CREATED, () => {
      this.checkActive();
    });
  }
  /**
   * Examines current state of the instance and activates or deactivates appropriately
   */
  checkActive() {
    const t = h(this.$vApp.$pinia);
    t.alwaysOn || t.extentSetIds.includes(this.$iApi.geo.map.getExtentSet().id) ? t.active || (t.setActive(!0), this.extentEH = this.$iApi.event.on(r.MAP_EXTENTCHANGE, (e) => {
      t.enforcing || this.enforceBoundary(e, !1);
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
  enforceBoundary(t, e) {
    const i = this.$iApi.geo.map.getExtentSet().maximumExtent, s = f(t.xmax, t.xmin, i.xmax, i.xmin), n = f(t.ymax, t.ymin, i.ymax, i.ymin);
    if (n.changed || s.changed) {
      e && (this.$iApi.geo.map.esriView.extent = i.toESRI());
      const c = p.fromParams(
        "extguard",
        s.min,
        n.min,
        s.max,
        n.max,
        t.sr
      ), o = h(this.$vApp.$pinia);
      o.setEnforcing(!0), setTimeout(() => {
        this.$iApi.geo.map.zoomMapTo(c, void 0, !0, 400, "ease-in-out").then(() => {
          o.setEnforcing(!1), this.enforceBoundary(this.$iApi.geo.map.getExtent(), !0);
        });
      }, 150);
    }
  }
}
export {
  E as default
};
//# sourceMappingURL=index-g3hZfSmF.js.map
