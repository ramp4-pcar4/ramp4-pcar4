import { dI as it, dJ as lt, aG as d, fD as Lt, aH as Pt, cC as Ut, fL as D, gn as y, hS as mt, hT as At, hU as kt, hV as It, bO as ta, cA as aa, hW as sa, hX as Ct, cw as xt, hY as Xt, hM as ea, eq as Rt, ep as ia, hZ as na, h_ as oa, eo as ha, h$ as Ft, i0 as gt, i1 as ra, i2 as ca, hA as Tt } from "./main-C4pF0E7B.js";
import { t as ua, e as da } from "./mat3f64-Dh9_zhFu.js";
import { e as fa } from "./mat4f64-Dn1WEGBx.js";
import { X as la, O as k, x as ma } from "./quat-B5xJQUKj.js";
import { o as Wt, e as St } from "./quatf64-DxbQqBtW.js";
import { a as _t } from "./spatialReferenceEllipsoidUtils-D8TeGUPE.js";
import { u as _a } from "./computeTranslationToOriginAndRotation-dZmhvdHy.js";
import { c as vt, o as ga, F as pt } from "./plane-DEowYbo2.js";
class Nt {
  constructor(t, a, s = a) {
    this.data = t, this.size = a, this.stride = s;
  }
}
class Da extends Nt {
  constructor(t, a, s, n = !1, o = s) {
    super(t, s, o), this.indices = a, this.exclusive = n;
  }
}
const nt = 1e-6, ot = d(), bt = d();
function ba(e, t) {
  const { data: a, size: s } = e, n = a.length / s;
  if (n <= 0) return;
  const o = new qa(e);
  wt(ot, o.minProj, o.maxProj), dt(ot, ot, 0.5), N(bt, o.maxProj, o.minProj);
  const h = qt(bt), c = new wa();
  c.quality = h, n < 14 && (e = new Nt(new Float64Array(o.buffer, 112, 42), 3));
  const i = d(), r = d(), b = d(), m = d(), z = d(), A = d(), M = d();
  switch (Ma(o, e, M, i, r, b, m, z, A, c)) {
    case 1:
      return void Gt(ot, bt, t);
    case 2:
      return void pa(e, m, t);
  }
  $a(e, M, i, r, b, m, z, A, c), Zt(e, c.b0, c.b1, c.b2, at, st);
  const E = d();
  N(E, st, at), c.quality = qt(E), c.quality < h ? Bt(c.b0, c.b1, c.b2, at, st, E, t) : Gt(ot, bt, t);
}
function Ma(e, t, a, s, n, o, h, c, i, r) {
  return Pa(e, s, n), yt(s, n) < nt ? 1 : (N(h, s, n), g(h, h), ja(t, s, h, o) < nt ? 2 : (N(c, n, o), g(c, c), N(i, o, s), g(i, i), V(a, c, h), g(a, a), B(t, a, h, c, i, r), 0));
}
const ht = d(), rt = d(), p = d(), I = d(), q = d(), O = d(), X = d(), R = d();
function $a(e, t, a, s, n, o, h, c, i) {
  xa(e, t, a, ht, rt), ht[0] !== void 0 && (N(p, ht, a), g(p, p), N(I, ht, s), g(I, I), N(q, ht, n), g(q, q), V(O, I, o), g(O, O), V(X, q, h), g(X, X), V(R, p, c), g(R, R), B(e, O, o, I, p, i), B(e, X, h, q, I, i), B(e, R, c, p, q, i)), rt[0] !== void 0 && (N(p, rt, a), g(p, p), N(I, rt, s), g(I, I), N(q, rt, n), g(q, q), V(O, I, o), g(O, O), V(X, q, h), g(X, X), V(R, p, c), g(R, R), B(e, O, o, I, p, i), B(e, X, h, q, I, i), B(e, R, c, p, q, i));
}
function Pa(e, t, a) {
  let s = yt(e.maxVert[0], e.minVert[0]), n = 0;
  for (let o = 1; o < 7; ++o) {
    const h = yt(e.maxVert[o], e.minVert[o]);
    h > s && (s = h, n = o);
  }
  S(t, e.minVert[n]), S(a, e.maxVert[n]);
}
const w = [0, 0, 0];
function ja(e, t, a, s) {
  const { data: n, size: o } = e;
  let h = Number.NEGATIVE_INFINITY, c = 0;
  for (let i = 0; i < n.length; i += o) {
    w[0] = n[i] - t[0], w[1] = n[i + 1] - t[1], w[2] = n[i + 2] - t[2];
    const r = a[0] * w[0] + a[1] * w[1] + a[2] * w[2], b = a[0] * a[0] + a[1] * a[1] + a[2] * a[2], m = w[0] * w[0] + w[1] * w[1] + w[2] * w[2] - r * r / b;
    m > h && (h = m, c = i);
  }
  return S(s, n, c), h;
}
const _ = Lt();
function xa(e, t, a, s, n) {
  za(e, t, _, n, s);
  const o = Jt(a, t);
  _[1] - nt <= o && (s[0] = void 0), _[0] + nt >= o && (n[0] = void 0);
}
const Qt = d(), Et = d(), Yt = d(), J = d(), K = d(), Mt = d();
function B(e, t, a, s, n, o) {
  if (Dt(t) < nt) return;
  V(Qt, a, t), V(Et, s, t), V(Yt, n, t), tt(e, t, _), K[1] = _[0], J[1] = _[1], Mt[1] = J[1] - K[1];
  const h = [a, s, n], c = [Qt, Et, Yt];
  for (let i = 0; i < 3; ++i) {
    tt(e, h[i], _), K[0] = _[0], J[0] = _[1], tt(e, c[i], _), K[2] = _[0], J[2] = _[1], Mt[0] = J[0] - K[0], Mt[2] = J[2] - K[2];
    const r = qt(Mt);
    r < o.quality && (S(o.b0, h[i]), S(o.b1, t), S(o.b2, c[i]), o.quality = r);
  }
}
const Sa = d();
function tt(e, t, a) {
  const { data: s, size: n } = e;
  a[0] = Number.POSITIVE_INFINITY, a[1] = Number.NEGATIVE_INFINITY;
  for (let o = 0; o < s.length; o += n) {
    const h = s[o] * t[0] + s[o + 1] * t[1] + s[o + 2] * t[2];
    a[0] = Math.min(a[0], h), a[1] = Math.max(a[1], h);
  }
}
function za(e, t, a, s, n) {
  const { data: o, size: h } = e;
  S(s, o), S(n, s), a[0] = Jt(Sa, t), a[1] = a[0];
  for (let c = h; c < o.length; c += h) {
    const i = o[c] * t[0] + o[c + 1] * t[1] + o[c + 2] * t[2];
    i < a[0] && (a[0] = i, S(s, o, c)), i > a[1] && (a[1] = i, S(n, o, c));
  }
}
function Gt(e, t, a) {
  a.center = e, a.halfSize = it(t, t, 0.5), a.quaternion = Wt;
}
const Y = d(), L = d(), ct = d(), at = d(), st = d(), Ht = d();
function pa(e, t, a) {
  S(Y, t), Math.abs(t[0]) > Math.abs(t[1]) && Math.abs(t[0]) > Math.abs(t[2]) ? Y[0] = 0 : Math.abs(t[1]) > Math.abs(t[2]) ? Y[1] = 0 : Y[2] = 0, Dt(Y) < nt && (Y[0] = Y[1] = Y[2] = 1), V(L, t, Y), g(L, L), V(ct, t, L), g(ct, ct), Zt(e, t, L, ct, at, st), N(Ht, st, at), Bt(t, L, ct, at, st, Ht, a);
}
function Zt(e, t, a, s, n, o) {
  tt(e, t, _), n[0] = _[0], o[0] = _[1], tt(e, a, _), n[1] = _[0], o[1] = _[1], tt(e, s, _), n[2] = _[0], o[2] = _[1];
}
const W = d(), ut = d(), $t = d(), v = ua(1, 0, 0, 0, 1, 0, 0, 0, 1), Ia = St();
function Bt(e, t, a, s, n, o, h) {
  v[0] = e[0], v[1] = e[1], v[2] = e[2], v[3] = t[0], v[4] = t[1], v[5] = t[2], v[6] = a[0], v[7] = a[1], v[8] = a[2], h.quaternion = ya(Ia, v), wt(W, s, n), dt(W, W, 0.5), dt(ut, e, W[0]), dt($t, t, W[1]), wt(ut, ut, $t), dt($t, a, W[2]), h.center = lt(ut, ut, $t), h.halfSize = it(W, o, 0.5);
}
const P = 7;
let qa = class {
  constructor(t) {
    this.minVert = new Array(P), this.maxVert = new Array(P);
    const a = 64 * P;
    this.buffer = new ArrayBuffer(a);
    let s = 0;
    this.minProj = new Float64Array(this.buffer, s, P), s += 8 * P, this.maxProj = new Float64Array(this.buffer, s, P), s += 8 * P;
    for (let i = 0; i < P; ++i) this.minVert[i] = new Float64Array(this.buffer, s, 3), s += 24;
    for (let i = 0; i < P; ++i) this.maxVert[i] = new Float64Array(this.buffer, s, 3), s += 24;
    for (let i = 0; i < P; ++i) this.minProj[i] = Number.POSITIVE_INFINITY, this.maxProj[i] = Number.NEGATIVE_INFINITY;
    const n = new Array(P), o = new Array(P), { data: h, size: c } = t;
    for (let i = 0; i < h.length; i += c) {
      let r = h[i];
      r < this.minProj[0] && (this.minProj[0] = r, n[0] = i), r > this.maxProj[0] && (this.maxProj[0] = r, o[0] = i), r = h[i + 1], r < this.minProj[1] && (this.minProj[1] = r, n[1] = i), r > this.maxProj[1] && (this.maxProj[1] = r, o[1] = i), r = h[i + 2], r < this.minProj[2] && (this.minProj[2] = r, n[2] = i), r > this.maxProj[2] && (this.maxProj[2] = r, o[2] = i), r = h[i] + h[i + 1] + h[i + 2], r < this.minProj[3] && (this.minProj[3] = r, n[3] = i), r > this.maxProj[3] && (this.maxProj[3] = r, o[3] = i), r = h[i] + h[i + 1] - h[i + 2], r < this.minProj[4] && (this.minProj[4] = r, n[4] = i), r > this.maxProj[4] && (this.maxProj[4] = r, o[4] = i), r = h[i] - h[i + 1] + h[i + 2], r < this.minProj[5] && (this.minProj[5] = r, n[5] = i), r > this.maxProj[5] && (this.maxProj[5] = r, o[5] = i), r = h[i] - h[i + 1] - h[i + 2], r < this.minProj[6] && (this.minProj[6] = r, n[6] = i), r > this.maxProj[6] && (this.maxProj[6] = r, o[6] = i);
    }
    for (let i = 0; i < P; ++i) {
      let r = n[i];
      S(this.minVert[i], h, r), r = o[i], S(this.maxVert[i], h, r);
    }
  }
}, wa = class {
  constructor() {
    this.b0 = Pt(1, 0, 0), this.b1 = Pt(0, 1, 0), this.b2 = Pt(0, 0, 1), this.quality = 0;
  }
};
function qt(e) {
  return e[0] * e[1] + e[0] * e[2] + e[1] * e[2];
}
function wt(e, t, a) {
  e[0] = t[0] + a[0], e[1] = t[1] + a[1], e[2] = t[2] + a[2];
}
function N(e, t, a) {
  e[0] = t[0] - a[0], e[1] = t[1] - a[1], e[2] = t[2] - a[2];
}
function dt(e, t, a) {
  e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a;
}
function S(e, t, a = 0) {
  e[0] = t[a], e[1] = t[a + 1], e[2] = t[a + 2];
}
function V(e, t, a) {
  const s = t[0], n = t[1], o = t[2], h = a[0], c = a[1], i = a[2];
  e[0] = n * i - o * c, e[1] = o * h - s * i, e[2] = s * c - n * h;
}
function g(e, t) {
  const a = t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
  if (a > 0) {
    const s = 1 / Math.sqrt(a);
    e[0] = t[0] * s, e[1] = t[1] * s, e[2] = t[2] * s;
  }
}
function Dt(e) {
  return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
}
function yt(e, t) {
  const a = t[0] - e[0], s = t[1] - e[1], n = t[2] - e[2];
  return a * a + s * s + n * n;
}
function Jt(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function ya(e, t) {
  const a = t[0] + t[4] + t[8];
  if (a > 0) {
    let s = Math.sqrt(a + 1);
    e[3] = 0.5 * s, s = 0.5 / s, e[0] = (t[5] - t[7]) * s, e[1] = (t[6] - t[2]) * s, e[2] = (t[1] - t[3]) * s;
  } else {
    let s = 0;
    t[4] > t[0] && (s = 1), t[8] > t[3 * s + s] && (s = 2);
    const n = (s + 1) % 3, o = (s + 2) % 3;
    let h = Math.sqrt(t[3 * s + s] - t[3 * n + n] - t[3 * o + o] + 1);
    e[s] = 0.5 * h, h = 0.5 / h, e[3] = (t[3 * n + o] - t[3 * o + n]) * h, e[n] = (t[3 * n + s] + t[3 * s + n]) * h, e[o] = (t[3 * o + s] + t[3 * s + o]) * h;
  }
  return e;
}
class ft {
  constructor(t = Ut, a = Ya, s = Wt) {
    this._data = [t[0], t[1], t[2], a[0], a[1], a[2], s[0], s[1], s[2], s[3]];
  }
  clone() {
    const t = new ft();
    return t._data = this._data.slice(), t;
  }
  invalidate() {
    this._data[3] = -1;
  }
  get isValid() {
    return this._data[3] >= 0;
  }
  static fromData(t) {
    const a = new ft();
    return a._data = t.slice(), a;
  }
  static fromJSON(t) {
    return new ft(t.center, t.halfSize, t.quaternion);
  }
  copy(t) {
    this._data = t.data.slice();
  }
  get center() {
    return D(vt.get(), this._data[0], this._data[1], this._data[2]);
  }
  get centerX() {
    return this._data[0];
  }
  get centerY() {
    return this._data[1];
  }
  get centerZ() {
    return this._data[2];
  }
  getCenter(t) {
    return t[0] = this._data[0], t[1] = this._data[1], t[2] = this._data[2], t;
  }
  set center(t) {
    this._data[0] = t[0], this._data[1] = t[1], this._data[2] = t[2];
  }
  setCenter(t, a, s) {
    this._data[0] = t, this._data[1] = a, this._data[2] = s;
  }
  get halfSize() {
    return D(vt.get(), this._data[3], this._data[4], this._data[5]);
  }
  get halfSizeX() {
    return this._data[3];
  }
  get halfSizeY() {
    return this._data[4];
  }
  get halfSizeZ() {
    return this._data[5];
  }
  getHalfSize(t) {
    return t[0] = this._data[3], t[1] = this._data[4], t[2] = this._data[5], t;
  }
  set halfSize(t) {
    this._data[3] = t[0], this._data[4] = t[1], this._data[5] = t[2];
  }
  get quaternion() {
    return la(ga.get(), this._data[6], this._data[7], this._data[8], this._data[9]);
  }
  getQuaternion(t) {
    return t[0] = this._data[6], t[1] = this._data[7], t[2] = this._data[8], t[3] = this._data[9], t;
  }
  set quaternion(t) {
    this._data[6] = t[0], this._data[7] = t[1], this._data[8] = t[2], this._data[9] = t[3];
  }
  get data() {
    return this._data;
  }
  getCorners(t) {
    const a = l, s = this._data;
    a[0] = s[6], a[1] = s[7], a[2] = s[8], a[3] = s[9];
    for (let n = 0; n < 8; ++n) {
      const o = t[n];
      o[0] = (1 & n ? -1 : 1) * s[3], o[1] = (2 & n ? -1 : 1) * s[4], o[2] = (4 & n ? -1 : 1) * s[5], y(o, o, a), o[0] += s[0], o[1] += s[1], o[2] += s[2];
    }
  }
  doesIntersectFrustumConservativeApproximation(t) {
    return this.intersectPlane(t[0]) <= 0 && this.intersectPlane(t[1]) <= 0 && this.intersectPlane(t[2]) <= 0 && this.intersectPlane(t[3]) <= 0 && this.intersectPlane(t[4]) <= 0 && this.intersectPlane(t[5]) <= 0;
  }
  get radius() {
    const t = this._data[3], a = this._data[4], s = this._data[5];
    return Math.sqrt(t * t + a * a + s * s);
  }
  intersectSphere(t) {
    u[0] = this._data[0] - t[0], u[1] = this._data[1] - t[1], u[2] = this._data[2] - t[2];
    const a = this.getQuaternion(H);
    return k(l, a), y(u, u, l), mt(u, u), G[0] = Math.min(u[0], this._data[3]), G[1] = Math.min(u[1], this._data[4]), G[2] = Math.min(u[2], this._data[5]), At(G, u) < t[3] * t[3];
  }
  intersectSphereWithMBS(t, a = this.radius) {
    const s = this._data;
    u[0] = s[0] - t[0], u[1] = s[1] - t[1], u[2] = s[2] - t[2];
    const n = t[3], o = n + a;
    return !(kt(u) > o * o) && (l[0] = -s[6], l[1] = -s[7], l[2] = -s[8], l[3] = s[9], y(u, u, l), mt(u, u), G[0] = Math.min(u[0], s[3]), G[1] = Math.min(u[1], s[4]), G[2] = Math.min(u[2], s[5]), At(G, u) < n * n);
  }
  intersectPlane(t) {
    const a = t[0] * this._data[0] + t[1] * this._data[1] + t[2] * this._data[2] + t[3], s = this.projectedRadius(pt(t));
    return a > s ? 1 : a < -s ? -1 : 0;
  }
  intersectRay(t, a, s = 0) {
    const n = this._data, o = l;
    o[0] = -n[6], o[1] = -n[7], o[2] = -n[8], o[3] = n[9], u[0] = t[0] - n[0], u[1] = t[1] - n[1], u[2] = t[2] - n[2];
    const h = y(u, u, l), c = y(G, a, l);
    let i = -1 / 0, r = 1 / 0;
    const b = this.getHalfSize(et);
    for (let m = 0; m < 3; m++) {
      const z = h[m], A = c[m], M = b[m] + s;
      if (Math.abs(A) > 1e-6) {
        const E = (M - z) / A, $ = (-M - z) / A;
        i = Math.max(i, Math.min(E, $)), r = Math.min(r, Math.max(E, $));
      } else if (z > M || z < -M) return !1;
    }
    return i <= r;
  }
  projectedArea(t, a, s, n) {
    const o = this.getQuaternion(H);
    k(l, o), u[0] = t[0] - this._data[0], u[1] = t[1] - this._data[1], u[2] = t[2] - this._data[2], y(u, u, l);
    const h = this.getHalfSize(et), c = u[0] < -h[0] ? -1 : u[0] > h[0] ? 1 : 0, i = u[1] < -h[1] ? -1 : u[1] > h[1] ? 1 : 0, r = u[2] < -h[2] ? -1 : u[2] > h[2] ? 1 : 0, b = Math.abs(c) + Math.abs(i) + Math.abs(r);
    if (b === 0) return 1 / 0;
    const m = b === 1 ? 4 : 6, z = 6 * (c + 3 * i + 9 * r + 13);
    It(U, o), ta(U, U, h);
    const A = this.getCenter(T);
    for (let $ = 0; $ < m; $++) {
      const zt = Aa[z + $];
      D(u, ((1 & zt) << 1) - 1, (2 & zt) - 1, ((4 & zt) >> 1) - 1), aa(u, u, U), lt(Z, A, u), Z[3] = 1, sa(Z, Z, a);
      const Vt = 1 / Math.max(1e-6, Z[3]);
      C[2 * $] = Z[0] * Vt, C[2 * $ + 1] = Z[1] * Vt;
    }
    const M = 2 * m - 2;
    let E = C[0] * (C[3] - C[M + 1]) + C[M] * (C[1] - C[M - 1]);
    for (let $ = 2; $ < M; $ += 2) E += C[$] * (C[$ + 3] - C[$ - 1]);
    return Math.abs(E) * s * n * 0.125;
  }
  projectedRadius(t) {
    const a = this.getQuaternion(H);
    return k(l, a), y(u, t, l), Math.abs(u[0] * this._data[3]) + Math.abs(u[1] * this._data[4]) + Math.abs(u[2] * this._data[5]);
  }
  minimumDistancePlane(t) {
    return t[0] * this._data[0] + t[1] * this._data[1] + t[2] * this._data[2] + t[3] - this.projectedRadius(pt(t));
  }
  maximumDistancePlane(t) {
    return t[0] * this._data[0] + t[1] * this._data[1] + t[2] * this._data[2] + t[3] + this.projectedRadius(pt(t));
  }
  toAaBoundingBox(t) {
    const a = this.getQuaternion(H), s = It(U, a), n = this._data[3] * Math.abs(s[0]) + this._data[4] * Math.abs(s[3]) + this._data[5] * Math.abs(s[6]), o = this._data[3] * Math.abs(s[1]) + this._data[4] * Math.abs(s[4]) + this._data[5] * Math.abs(s[7]), h = this._data[3] * Math.abs(s[2]) + this._data[4] * Math.abs(s[5]) + this._data[5] * Math.abs(s[8]);
    t[0] = this._data[0] - n, t[1] = this._data[1] - o, t[2] = this._data[2] - h, t[3] = this._data[0] + n, t[4] = this._data[1] + o, t[5] = this._data[2] + h;
  }
  transform(t, a, s, n = 0, o = _t(s), h = _t(a), c = Xt(a, h)) {
    if (s === o) a.isGeographic ? va(this, t, a, n, h) : Ta(this, t, a, n, h, c);
    else if (a.isWGS84 && (s.isWebMercator || Ct(s))) Ca(a, this, s, t, n);
    else if (a.isWebMercator && Ct(s)) Fa(a, this, s, t, n);
    else {
      const i = this.getCenter(T);
      i[2] += n, xt(i, a, 0, i, s, 0, 1), t.center = i, this !== t && (t.quaternion = this.getQuaternion(H), t.halfSize = this.getHalfSize(et));
    }
  }
}
const l = St(), H = St(), Na = St(), u = d(), G = d(), Z = ea();
function Va(e, t = new ft()) {
  return ba(e, t), t;
}
const C = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2], Aa = (() => {
  const e = new Int8Array(162);
  let t = 0;
  const a = (s) => {
    for (let n = 0; n < s.length; n++) e[t + n] = s[n];
    t += 6;
  };
  return a([6, 2, 3, 1, 5, 4]), a([0, 2, 3, 1, 5, 4]), a([0, 2, 3, 7, 5, 4]), a([0, 1, 3, 2, 6, 4]), a([0, 1, 3, 2, 0, 0]), a([0, 1, 5, 7, 3, 2]), a([0, 1, 3, 7, 6, 4]), a([0, 1, 3, 7, 6, 2]), a([0, 1, 5, 7, 6, 2]), a([0, 1, 5, 4, 6, 2]), a([0, 1, 5, 4, 0, 0]), a([0, 1, 3, 7, 5, 4]), a([0, 2, 6, 4, 0, 0]), a([0, 0, 0, 0, 0, 0]), a([1, 3, 7, 5, 0, 0]), a([2, 3, 7, 6, 4, 0]), a([2, 3, 7, 6, 0, 0]), a([2, 3, 1, 5, 7, 6]), a([0, 1, 5, 7, 6, 2]), a([0, 1, 5, 7, 6, 4]), a([0, 1, 3, 7, 6, 4]), a([4, 5, 7, 6, 2, 0]), a([4, 5, 7, 6, 0, 0]), a([4, 5, 1, 3, 7, 6]), a([0, 2, 3, 7, 5, 4]), a([6, 2, 3, 7, 5, 4]), a([6, 2, 3, 1, 5, 4]), e;
})();
function La(e, t, a, s, n) {
  const o = e.getQuaternion(H);
  n.quaternion = o, k(l, o);
  const h = e.getCenter(T), c = e.getHalfSize(et);
  if (s === oa.Global) {
    y(f, h, l), mt(F, f), ha(x, F, c), Rt(x, F, x);
    const i = Ft(x);
    lt(x, F, c);
    const r = Ft(x);
    if (i < a) n.center = h, D(f, a, a, a), n.halfSize = lt(f, c, f);
    else {
      const b = r > 0 ? 1 + t / r : 1, m = i > 0 ? 1 + a / i : 1, z = (m + b) / 2, A = (m - b) / 2;
      it(x, F, A), n.halfSize = gt(x, x, c, z), it(x, F, z), gt(x, x, c, A), ra(f, f), ca(f, x, f);
      const M = e.getQuaternion(Na);
      n.center = y(f, f, M);
    }
  } else {
    n.center = gt(f, h, Tt, (a + t) / 2);
    const i = y(f, Tt, l);
    mt(i, i), n.halfSize = gt(F, c, i, (a - t) / 2);
  }
  return n;
}
function Ca(e, t, a, s, n) {
  t.getCenter(T), T[2] += n;
  const o = _t(a);
  xt(T, e, 0, T, o, 0, 1), Kt(o, t, T, a, s);
}
function Fa(e, t, a, s, n) {
  t.getCenter(T), T[2] += n, Kt(e, t, T, a, s);
}
function Kt(e, t, a, s, n) {
  const o = t.getQuaternion(H), h = It(U, o), c = t.getHalfSize(et);
  for (let i = 0; i < 8; ++i) {
    for (let r = 0; r < 3; ++r) Q[r] = c[r] * (i & 1 << r ? -1 : 1);
    for (let r = 0; r < 3; ++r) {
      let b = a[r];
      for (let m = 0; m < 3; ++m) b += Q[m] * h[3 * m + r];
      jt[3 * i + r] = b;
    }
  }
  xt(jt, e, 0, jt, s, 0, 8), Va(Qa, n);
}
function Ta(e, t, a, s, n = _t(a), o = Xt(a, n)) {
  e.getCorners(Ot), e.getCenter(Q), Q[2] += s, _a(a, Q, j, n), t.setCenter(j[12], j[13], j[14]);
  const h = 2 * Math.sqrt(1 + j[0] + j[5] + j[10]);
  l[0] = (j[6] - j[9]) / h, l[1] = (j[8] - j[2]) / h, l[2] = (j[1] - j[4]) / h, l[3] = 0.25 * h;
  const c = e.getQuaternion(H);
  t.quaternion = ma(l, l, c), k(l, l), D(F, 0, 0, 0);
  const i = t.getCenter(Ea);
  for (const r of Ot) r[2] += s, o(r, 0, r, 0), Rt(f, r, i), y(f, f, l), mt(f, f), ia(F, F, f);
  t.halfSize = F;
}
function va(e, t, a, s, n = _t(a)) {
  const o = na(a), h = 1 + Math.max(0, s) / (o.radius + e.centerZ);
  e.getCenter(Q), Q[2] += s, xt(Q, a, 0, Q, n, 0, 1), t.center = Q;
  const c = e.getQuaternion(H);
  t.quaternion = c, k(l, c), D(f, 0, 0, 1), y(f, f, l);
  const i = e.getHalfSize(et);
  D(f, i[0] * Math.abs(f[0]), i[1] * Math.abs(f[1]), i[2] * Math.abs(f[2])), it(f, f, o.inverseFlattening), lt(f, i, f), t.halfSize = it(f, f, h);
}
const jt = new Array(24), Qa = new Nt(jt, 3), Q = d(), T = d(), Ea = d(), et = d(), U = da(), j = fa(), Ot = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]], f = d(), F = d(), x = d(), Ya = Pt(-1, -1, -1);
export {
  ft as I,
  La as L,
  Da as t
};
//# sourceMappingURL=orientedBoundingBox-DcWJ4f8E.js.map
