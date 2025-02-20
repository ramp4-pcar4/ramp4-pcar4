import { h as z, dK as q, $ as C, hx as D, ak as E, al as G, dF as K, hy as Q, hz as W, hA as X, gh as J, hB as L, em as I, O as a, P as u, bX as R, aG as V, hC as Y, aH as Z, dE as h, hD as _, cI as tt, g4 as rt, Q as st } from "./main-DMoCLB29.js";
import { e as N } from "./mat4f64-Dn1WEGBx.js";
import { v as O, I as y, x as et } from "./quat-CfMPxeWd.js";
import { e as A } from "./quatf64-DxbQqBtW.js";
class S {
  constructor(r, s, e) {
    this.assetName = r, this.assetMimeType = s, this.parts = e;
  }
  equals(r) {
    return this === r || this.assetName === r.assetName && this.assetMimeType === r.assetMimeType && z(this.parts, r.parts, (s, e) => s.equals(e));
  }
  isOnService(r) {
    return this.parts.every((s) => s.isOnService(r));
  }
  makeHash() {
    let r = "";
    for (const s of this.parts) r += s.partHash;
    return r;
  }
  async toBlob(r) {
    const { parts: s } = this;
    if (s.length === 1) return s[0].toBlob(r);
    const e = await Promise.all(s.map((c) => c.toBlob(r)));
    return q(r), new Blob(e);
  }
}
class ht {
  constructor(r, s) {
    this.partUrl = r, this.partHash = s;
  }
  equals(r) {
    return this === r || this.partUrl === r.partUrl && this.partHash === r.partHash;
  }
  isOnService(r) {
    return this.partUrl.startsWith(`${r.path}/assets/`);
  }
  async toBlob(r) {
    const { data: s } = await C(this.partUrl, { responseType: "blob" });
    return q(r), s;
  }
}
function pt(t) {
  return nt(t?.source);
}
function v(t) {
  return Array.isArray(t) ? t.every((r) => r instanceof S) : !1;
}
const x = /^(model\/gltf\+json)|(model\/gltf-binary)$/, M = /\.(gltf|glb)/i;
function nt(t) {
  return t ? Array.isArray(t) ? t.some(d) : d(t) : !1;
}
function d(t) {
  if (t instanceof File) {
    const { type: r, name: s } = t;
    return x.test(r) || M.test(s);
  }
  return x.test(t.assetMimeType) || M.test(t.assetName);
}
function ft(t, r) {
  if (!t) return !1;
  const { source: s } = t;
  return at(s, r);
}
function yt(t, r) {
  if (t === r) return !0;
  const { source: s } = t, { source: e } = r;
  if (s === e) return !0;
  if (v(s) && v(e)) {
    if (s.length !== e.length) return !1;
    const c = (i, b) => i.assetName < b.assetName ? -1 : i.assetName > b.assetName ? 1 : 0, g = [...s].sort(c), P = [...e].sort(c);
    for (let i = 0; i < g.length; ++i) if (!g[i].equals(P[i])) return !1;
    return !0;
  }
  return !1;
}
function at(t, r) {
  if (Array.isArray(t)) {
    const s = t;
    return s.length > 0 && s.every((e) => w(e, r));
  }
  return w(t, r);
}
function w(t, r) {
  return t instanceof S && t.isOnService(r);
}
function mt(t, r) {
  return t instanceof File ? D(t, r) : E(t.assetMimeType, r) ?? G(t.assetName, r);
}
function $t(t) {
  return Array.isArray(t) ? t : [t];
}
function At(t) {
  return !!t.original;
}
function o(t = F) {
  return [t[0], t[1], t[2], t[3]];
}
function f(t, r, s = o()) {
  return K(s, t), s[3] = r, s;
}
function gt(t, r = o()) {
  const s = L(l, t);
  return k(r, I(O(r, s))), r;
}
function B(t, r, s = o()) {
  return y(l, t, m(t)), y(H, r, m(r)), et(l, H, l), k(s, I(O(s, l)));
}
function bt(t, r, s, e = o()) {
  return f(Q, t, p), f(W, r, T), f(X, s, U), B(p, T, p), B(p, U, e), e;
}
function Nt(t) {
  return t;
}
function ot(t) {
  return t[3];
}
function m(t) {
  return J(t[3]);
}
function k(t, r) {
  return t[3] = r, t;
}
const F = [0, 0, 1, 0], l = A(), H = A();
o();
const p = o(), T = o(), U = o();
var $;
let n = $ = class extends R {
  constructor(t) {
    super(t), this.translation = V(), this.rotationAxis = Y(F), this.rotationAngle = 0, this.scale = Z(1, 1, 1);
  }
  get rotation() {
    return f(this.rotationAxis, this.rotationAngle);
  }
  set rotation(t) {
    this.rotationAxis = h(t), this.rotationAngle = ot(t);
  }
  get localMatrix() {
    const t = N();
    return y(j, this.rotation, m(this.rotation)), _(t, j, this.translation, this.scale), t;
  }
  get localMatrixInverse() {
    return tt(N(), this.localMatrix);
  }
  equals(t) {
    return this === t || t != null && rt(this.localMatrix, t.localMatrix);
  }
  clone() {
    const t = { translation: h(this.translation), rotationAxis: h(this.rotationAxis), rotationAngle: this.rotationAngle, scale: h(this.scale) };
    return new $(t);
  }
};
a([u({ type: [Number], nonNullable: !0, json: { write: !0 } })], n.prototype, "translation", void 0), a([u({ type: [Number], nonNullable: !0, json: { write: !0 } })], n.prototype, "rotationAxis", void 0), a([u({ type: Number, nonNullable: !0, json: { write: !0 } })], n.prototype, "rotationAngle", void 0), a([u({ type: [Number], nonNullable: !0, json: { write: !0 } })], n.prototype, "scale", void 0), a([u()], n.prototype, "rotation", null), a([u()], n.prototype, "localMatrix", null), a([u()], n.prototype, "localMatrixInverse", null), n = $ = a([st("esri.geometry.support.MeshTransform")], n);
const j = A(), vt = n;
export {
  $t as A,
  vt as N,
  mt as a,
  o as b,
  m as c,
  Nt as d,
  ft as h,
  S as i,
  gt as k,
  ht as o,
  pt as u,
  At as v,
  bt as w,
  yt as y
};
//# sourceMappingURL=MeshTransform-Fg3kZ29p.js.map
