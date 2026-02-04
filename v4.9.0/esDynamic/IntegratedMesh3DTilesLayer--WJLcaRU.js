import { ew as R, dX as U, dY as z, dZ as j, d_ as V, ex as F, ey as P, bh as b, aU as w, df as A, cj as u, cr as W, cu as y, ez as I, cq as L, eA as $, eB as E, eC as M, eD as S, eE as d, s as X, a1 as N, a2 as k, C as D, N as h, O as f, eF as q, e2 as G, P as K, e8 as O, ci as g } from "./main-DIdq27YS.js";
import { I as T, x as C, Z } from "./elevationInfoUtils-DE1x05p-.js";
let p = class extends R(U(z(j(V(F(P(O))))))) {
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
      const t = a.region, l = A(t[0]), n = A(t[1]), r = t[4], s = A(t[2]), e = A(t[3]), m = t[5];
      this.fullExtent = new w({ xmin: l, ymin: n, zmin: r, xmax: s, ymax: e, zmax: m, spatialReference: this.spatialReference });
    } else if (a.sphere && this._verifyArray(a.sphere, 4)) {
      const t = a.sphere, l = u(t[0], t[1], t[2]), n = t[3] / Math.sqrt(3), r = g();
      W(r, l, u(-n, -n, -n));
      const s = g();
      if (y(s, l, u(n, n, n)), o && this._verifyArray(o, 16)) {
        const v = o;
        I(x, r, v), L(r, x), I(x, s, v), L(s, x);
      }
      $(r, E, 0, r, b.WGS84, 0, 1), $(s, E, 0, s, b.WGS84, 0, 1);
      const e = g(), m = g();
      M(e, r, s), S(m, r, s), this.fullExtent = new w({ xmin: e[0], ymin: e[1], zmin: e[2], xmax: m[0], ymax: m[1], zmax: m[2], spatialReference: this.spatialReference });
    } else if (a.box && this._verifyArray(a.box, 12)) {
      const t = a.box, l = u(t[0], t[1], t[2]), n = u(t[3], t[4], t[5]), r = u(t[6], t[7], t[8]), s = u(t[9], t[10], t[11]), e = [];
      for (let c = 0; c < 8; ++c) e.push(g());
      if (y(e[0], l, n), y(e[0], e[0], r), y(e[0], e[0], s), d(e[1], l, n), y(e[1], e[1], r), y(e[1], e[1], s), y(e[2], l, n), d(e[2], e[2], r), y(e[2], e[2], s), d(e[3], l, n), d(e[3], e[3], r), y(e[3], e[3], s), y(e[4], l, n), y(e[4], e[4], r), d(e[4], e[4], s), d(e[5], l, n), y(e[5], e[5], r), d(e[5], e[5], s), y(e[6], l, n), d(e[6], e[6], r), d(e[6], e[6], s), d(e[7], l, n), d(e[7], e[7], r), d(e[7], e[7], s), o && this._verifyArray(o, 16)) {
        const c = o;
        for (let _ = 0; _ < 8; ++_) I(e[_], e[_], c);
      }
      const m = u(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE), v = u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      for (let c = 0; c < 8; ++c) $(e[c], E, 0, e[c], b.WGS84, 0, 1), M(v, v, e[c]), S(m, m, e[c]);
      this.fullExtent = new w({ xmin: v[0], ymin: v[1], zmin: v[2], xmax: m[0], ymax: m[1], zmax: m[2], spatialReference: this.spatialReference });
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
        throw new X("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service containing IntegratedMesh" });
      } }, i);
    } catch (o) {
      N(o);
    }
    this.url && await k(this.url, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: a }).then((x) => {
      this._initFullExtent(x.data);
    }, (x) => {
      N(x);
    });
  }
  async fetchAttributionData() {
    return this.load().then(() => ({}));
  }
  _validateElevationInfo() {
    const i = this.elevationInfo, a = "Integrated mesh 3d tiles layers";
    T(D.getLogger(this), C(a, "absolute-height", i)), T(D.getLogger(this), Z(a, i));
  }
};
h([f({ type: ["IntegratedMesh3DTilesLayer"] })], p.prototype, "operationalLayerType", void 0), h([f({ type: b })], p.prototype, "spatialReference", void 0), h([f({ type: w })], p.prototype, "fullExtent", void 0), h([f(q)], p.prototype, "elevationInfo", null), h([f({ type: ["show", "hide"] })], p.prototype, "listMode", void 0), h([f(G)], p.prototype, "url", void 0), h([f({ readOnly: !0 })], p.prototype, "type", void 0), h([f({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 }, "portal-item": { read: !0, write: !0 } }, read: !1 } })], p.prototype, "path", void 0), h([f({ type: Number, json: { origins: { "web-scene": { name: "layerDefinition.minScale", write: () => {
}, read: () => {
} }, "portal-item": { name: "layerDefinition.minScale", write: () => {
}, read: () => {
} } } } })], p.prototype, "minScale", void 0), h([f({ type: Number, json: { origins: { "web-scene": { name: "layerDefinition.maxScale", write: () => {
}, read: () => {
} }, "portal-item": { name: "layerDefinition.maxScale", write: () => {
}, read: () => {
} } } } })], p.prototype, "maxScale", void 0), p = h([K("esri.layers.IntegratedMesh3DTilesLayer")], p);
const H = p;
export {
  H as default
};
//# sourceMappingURL=IntegratedMesh3DTilesLayer--WJLcaRU.js.map
