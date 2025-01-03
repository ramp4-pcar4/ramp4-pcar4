import { e0 as m, bW as A, jB as d, O as i, P as s, a3 as x, g_ as w, Q as h, e2 as T, jx as P, V as v, bH as N, S as O, gT as $, bG as L, jC as C, eL as H, jD as V, jE as B, e5 as D, e8 as G, ei as M } from "./main-DMoCLB29.js";
import { c as Q } from "./Analysis-BeRKD7rq.js";
import { j as f } from "./persistable-CLso4gLk.js";
import { i as W } from "./elevationInfoUtils-B0Hxgwna.js";
function S(e, t) {
  return j(e) === j(t);
}
function j(e) {
  if (e == null) return null;
  const t = e.layer != null ? e.layer.id : "";
  let l = null;
  return l = e.objectId != null ? e.objectId : e.layer != null && "objectIdField" in e.layer && e.layer.objectIdField != null && e.attributes != null ? e.attributes[e.layer.objectIdField] : e.uid, l == null ? null : `o-${t}-${l}`;
}
const E = { json: { write: { writer: k, target: { "feature.layerId": { type: [Number, String] }, "feature.objectId": { type: [Number, String] } } }, origins: { "web-scene": { read: J } } } };
function k(e, t) {
  e?.layer?.objectIdField != null && e.attributes != null && (t.feature = { layerId: e.layer.id, objectId: e.attributes[e.layer.objectIdField] });
}
function J(e) {
  if (e.layerId != null && e.objectId != null) return { uid: null, layer: { id: e.layerId, objectIdField: "ObjectId" }, attributes: { ObjectId: e.objectId } };
}
let a = class extends m(A(T)) {
  constructor(t) {
    super(t), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(t) {
    return d(this.position, t.position) && d(this.elevationInfo, t.elevationInfo) && S(this.feature, t.feature);
  }
};
i([s({ type: x, json: { write: { isRequired: !0 } } })], a.prototype, "position", void 0), i([s({ type: w }), f()], a.prototype, "elevationInfo", void 0), i([s(E)], a.prototype, "feature", void 0), a = i([h("esri.analysis.LineOfSightAnalysisObserver")], a);
const R = a;
let u = class extends m(P) {
  constructor(e) {
    super(e), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(e) {
    return d(this.position, e.position) && d(this.elevationInfo, e.elevationInfo) && S(this.feature, e.feature);
  }
};
i([s({ type: x }), f()], u.prototype, "position", void 0), i([s({ type: w }), f()], u.prototype, "elevationInfo", void 0), i([s(E)], u.prototype, "feature", void 0), u = i([h("esri.analysis.LineOfSightAnalysisTarget")], u);
const F = u, g = v.ofType(F);
let r = class extends Q {
  constructor(t) {
    super(t), this.type = "line-of-sight", this.observer = null, this.extent = null;
  }
  initialize() {
    this.addHandles(O(() => this._computeExtent(), (t) => {
      t?.pending == null && this._set("extent", t != null ? t.extent : null);
    }, $));
  }
  get targets() {
    return this._get("targets") || new g();
  }
  set targets(t) {
    this._set("targets", L(t, this.targets, g));
  }
  get spatialReference() {
    return this.observer?.position != null ? this.observer.position.spatialReference : null;
  }
  get requiredPropertiesForEditing() {
    return [this.observer?.position];
  }
  async waitComputeExtent() {
    const t = this._computeExtent();
    return t != null ? t.pending : Promise.resolve();
  }
  _computeExtent() {
    const t = this.spatialReference;
    if (this.observer?.position == null || t == null) return null;
    const l = (p) => W(p.position, p.elevationInfo) === "absolute-height", o = this.observer.position, b = C(o.x, o.y, o.z, o.x, o.y, o.z);
    for (const p of this.targets) if (p.position != null) {
      const y = H(p.position, t);
      if (y.pending != null) return { pending: y.pending, extent: null };
      if (y.geometry != null) {
        const { x: _, y: z, z: q } = y.geometry;
        V(b, [_, z, q]);
      }
    }
    const c = B(b, t);
    return l(this.observer) && this.targets.every(l) || (c.zmin = void 0, c.zmax = void 0), { pending: null, extent: c };
  }
  clear() {
    this.observer = null, this.targets.removeAll();
  }
};
i([s({ type: ["line-of-sight"] })], r.prototype, "type", void 0), i([s({ type: R, json: { read: !0, write: !0 } })], r.prototype, "observer", void 0), i([s({ cast: N, type: g, nonNullable: !0, json: { read: !0, write: !0 } })], r.prototype, "targets", null), i([s({ value: null, readOnly: !0 })], r.prototype, "extent", void 0), i([s({ readOnly: !0 })], r.prototype, "spatialReference", null), i([s({ readOnly: !0 })], r.prototype, "requiredPropertiesForEditing", null), r = i([h("esri.analysis.LineOfSightAnalysis")], r);
const I = r, K = v.ofType(F);
let n = class extends D(G(M)) {
  constructor(e) {
    super(e), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new I(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(O(() => this.analysis, (e, t) => {
      t != null && t.parent === this && (t.parent = null), e != null && (e.parent = this);
    }, $));
  }
  async load() {
    return this.analysis != null && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
  }
  get observer() {
    return this.analysis?.observer;
  }
  set observer(e) {
    const { analysis: t } = this;
    t && (t.observer = e);
  }
  get targets() {
    return this.analysis != null ? this.analysis.targets : new v();
  }
  set targets(e) {
    L(e, this.analysis?.targets);
  }
  get fullExtent() {
    return this.analysis != null ? this.analysis.extent : null;
  }
  get spatialReference() {
    return this.analysis != null ? this.analysis.spatialReference : null;
  }
  releaseAnalysis(e) {
    this.analysis === e && (this.analysis = new I());
  }
};
i([s({ json: { read: !1 }, readOnly: !0 })], n.prototype, "type", void 0), i([s({ type: ["LineOfSightLayer"] })], n.prototype, "operationalLayerType", void 0), i([s({ type: R, json: { read: !0, write: { isRequired: !0, ignoreOrigin: !0 } } })], n.prototype, "observer", null), i([s({ type: K, json: { read: !0, write: { ignoreOrigin: !0 } } })], n.prototype, "targets", null), i([s({ nonNullable: !0, json: { read: !1, write: !1 } })], n.prototype, "analysis", void 0), i([s({ readOnly: !0 })], n.prototype, "fullExtent", null), i([s({ readOnly: !0 })], n.prototype, "spatialReference", null), i([s({ readOnly: !0, json: { read: !1, write: !1, origins: { service: { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 }, "web-document": { read: !1, write: !1 } } } })], n.prototype, "opacity", void 0), i([s({ type: ["show", "hide"] })], n.prototype, "listMode", void 0), n = i([h("esri.layers.LineOfSightLayer")], n);
const ie = n;
export {
  ie as default
};
//# sourceMappingURL=LineOfSightLayer-HXaLoq5T.js.map
