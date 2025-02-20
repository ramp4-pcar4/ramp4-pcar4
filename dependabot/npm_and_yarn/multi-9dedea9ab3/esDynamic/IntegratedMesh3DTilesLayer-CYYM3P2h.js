import { ej as N, e5 as j, e6 as z, e7 as U, e8 as V, ek as X, el as G, bx as b, b8 as w, em as _, aH as u, dG as k, dJ as p, en as $, dF as M, cw as E, cM as L, eo as I, ep as S, eq as d, s as F, _ as T, $ as P, D, O as c, P as f, er as W, ec as q, Q as K, ei as O, aG as g } from "./main-DMoCLB29.js";
import { $ as R, Z as H, w as J } from "./elevationInfoUtils-B0Hxgwna.js";
let y = class extends N(j(z(U(V(X(G(O))))))) {
  constructor(i) {
    super(i), this.operationalLayerType = "IntegratedMesh3DTilesLayer", this.spatialReference = new b({ wkid: 4326, vcsWkid: 115700 }), this.fullExtent = new w(-180, -90, 180, 90, this.spatialReference), this.url = null, this.type = "integrated-mesh-3dtiles", this.path = null, this.minScale = 0, this.maxScale = 0;
  }
  set elevationInfo(i) {
    this._set("elevationInfo", i), this._validateElevationInfo();
  }
  _verifyArray(i, a) {
    if (!Array.isArray(i) || i.length < a) return !1;
    for (const o of i) if (typeof o != "number") return !1;
    return !0;
  }
  _initFullExtent(i) {
    const a = i.root?.boundingVolume;
    if (!a) return;
    if (a.box) {
      const t = a?.box;
      if (t[3] > 7972671 && t[7] > 7972671 && t[11] > 7945940) return;
    }
    const o = i.root?.transform, x = g();
    if (a.region && this._verifyArray(a.region, 6)) {
      const t = a.region, l = _(t[0]), n = _(t[1]), s = t[4], r = _(t[2]), e = _(t[3]), h = t[5];
      this.fullExtent = new w({ xmin: l, ymin: n, zmin: s, xmax: r, ymax: e, zmax: h, spatialReference: this.spatialReference });
    } else if (a.sphere && this._verifyArray(a.sphere, 4)) {
      const t = a.sphere, l = u(t[0], t[1], t[2]), n = t[3] / Math.sqrt(3), s = g();
      k(s, l, u(n, n, n));
      const r = g();
      if (p(r, l, u(n, n, n)), o && this._verifyArray(o, 16)) {
        const v = o;
        $(x, s, v), M(s, x), $(x, r, v), M(r, x);
      }
      E(s, L, 0, s, b.WGS84, 0, 1), E(r, L, 0, r, b.WGS84, 0, 1);
      const e = g(), h = g();
      I(e, s, r), S(h, s, r), this.fullExtent = new w({ xmin: e[0], ymin: e[1], zmin: e[2], xmax: h[0], ymax: h[1], zmax: h[2], spatialReference: this.spatialReference });
    } else if (a.box && this._verifyArray(a.box, 12)) {
      const t = a.box, l = u(t[0], t[1], t[2]), n = u(t[3], t[4], t[5]), s = u(t[6], t[7], t[8]), r = u(t[9], t[10], t[11]), e = [];
      for (let m = 0; m < 8; ++m) e.push(g());
      if (p(e[0], l, n), p(e[0], e[0], s), p(e[0], e[0], r), d(e[1], l, n), p(e[1], e[1], s), p(e[1], e[1], r), p(e[2], l, n), d(e[2], e[2], s), p(e[2], e[2], r), d(e[3], l, n), d(e[3], e[3], s), p(e[3], e[3], r), p(e[4], l, n), p(e[4], e[4], s), d(e[4], e[4], r), d(e[5], l, n), p(e[5], e[5], s), d(e[5], e[5], r), p(e[6], l, n), d(e[6], e[6], s), d(e[6], e[6], r), d(e[7], l, n), d(e[7], e[7], s), d(e[7], e[7], r), o && this._verifyArray(o, 16)) {
        const m = o;
        for (let A = 0; A < 8; ++A) $(e[A], e[A], m);
      }
      const h = u(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), v = u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      for (let m = 0; m < 8; ++m) E(e[m], L, 0, e[m], b.WGS84, 0, 1), I(v, v, e[m]), S(h, h, e[m]);
      this.fullExtent = new w({ xmin: v[0], ymin: v[1], zmin: v[2], xmax: h[0], ymax: h[1], zmax: h[2], spatialReference: this.spatialReference });
    }
  }
  async load(i) {
    return this.addResolvingPromise(this._doLoad(i)), this;
  }
  async _doLoad(i) {
    const a = i != null ? i.signal : null;
    try {
      await this.loadFromPortal({ supportedTypes: ["3DTiles Service"], validateItem: (o) => {
        if (o.typeKeywords?.includes("IntegratedMesh")) return !0;
        throw new F("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service containing IntegratedMesh" });
      } }, i);
    } catch (o) {
      T(o);
    }
    this.url && await P(this.url, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: a }).then((x) => {
      this._initFullExtent(x.data);
    }, (x) => {
      T(x);
    });
  }
  async fetchAttributionData() {
    return this.load().then(() => ({}));
  }
  _validateElevationInfo() {
    const i = this.elevationInfo, a = "Integrated mesh 3d tiles layers";
    R(D.getLogger(this), H(a, "absolute-height", i)), R(D.getLogger(this), J(a, i));
  }
};
c([f({ type: ["IntegratedMesh3DTilesLayer"] })], y.prototype, "operationalLayerType", void 0), c([f({ type: b })], y.prototype, "spatialReference", void 0), c([f({ type: w })], y.prototype, "fullExtent", void 0), c([f(W)], y.prototype, "elevationInfo", null), c([f({ type: ["show", "hide"] })], y.prototype, "listMode", void 0), c([f(q)], y.prototype, "url", void 0), c([f({ readOnly: !0 })], y.prototype, "type", void 0), c([f({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 }, "portal-item": { read: !0, write: !0 } }, read: !1 } })], y.prototype, "path", void 0), c([f({ type: Number, json: { name: "layerDefinition.minScale", write: !0, origins: { service: { read: !1, write: !1 } } } })], y.prototype, "minScale", void 0), c([f({ type: Number, json: { name: "layerDefinition.maxScale", write: !0, origins: { service: { read: !1, write: !1 } } } })], y.prototype, "maxScale", void 0), y = c([K("esri.layers.IntegratedMesh3DTilesLayer")], y);
const B = y;
export {
  B as default
};
//# sourceMappingURL=IntegratedMesh3DTilesLayer-CYYM3P2h.js.map
