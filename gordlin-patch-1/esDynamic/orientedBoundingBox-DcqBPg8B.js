import { ct as it, cu as lt, ci as d, h3 as Lt, cj as $t, hD as kt, fr as Z, fR as y, hE as mt, hF as At, hG as Ut, hH as Nt, h2 as ta, fs as aa, hI as sa, hJ as Ft, eA as xt, hK as Xt, ht as ea, eE as Dt, eD as ia, hL as na, hM as ha, eC as oa, hx as Ct, hN as bt, hO as ra, hP as ca, hQ as Et } from "./main-BEi6lHs4.js";
import { t as ua, e as da } from "./mat3f64-Dh9_zhFu.js";
import { e as fa } from "./mat4f64-Dn1WEGBx.js";
import { X as la, O as U, x as ma } from "./quat-DytykOB-.js";
import { o as Ot, e as St } from "./quatf64-DxbQqBtW.js";
import { a as _t, R as _a } from "./computeTranslationToOriginAndRotation-DscT8sal.js";
import { c as Qt, o as ba, F as It } from "./plane-CyuRU6cD.js";
class pt {
  constructor(t, a, s = a) {
    this.data = t, this.size = a, this.stride = s;
  }
}
class Ba extends pt {
  constructor(t, a, s, n = !1, h = s) {
    super(t, s, h), this.indices = a, this.exclusive = n;
  }
}
const nt = 1e-6, ht = d(), gt = d();
function ga(e, t) {
  const { data: a, size: s } = e, n = a.length / s;
  if (n <= 0) return;
  const h = new qa(e);
  wt(ht, h.minProj, h.maxProj), dt(ht, ht, 0.5), p(gt, h.maxProj, h.minProj);
  const o = qt(gt), c = new wa();
  c.quality = o, n < 14 && (e = new pt(new Float64Array(h.buffer, 112, 42), 3));
  const i = d(), r = d(), g = d(), m = d(), z = d(), A = d(), M = d();
  switch (Ma(h, e, M, i, r, g, m, z, A, c)) {
    case 1:
      return void Rt(ht, gt, t);
    case 2:
      return void Ia(e, m, t);
  }
  Pa(e, M, i, r, g, m, z, A, c), Wt(e, c.b0, c.b1, c.b2, at, st);
  const v = d();
  p(v, st, at), c.quality = qt(v), c.quality < o ? Bt(c.b0, c.b1, c.b2, at, st, v, t) : Rt(ht, gt, t);
}
function Ma(e, t, a, s, n, h, o, c, i, r) {
  return $a(e, s, n), yt(s, n) < nt ? 1 : (p(o, s, n), b(o, o), ja(t, s, o, h) < nt ? 2 : (p(c, n, h), b(c, c), p(i, h, s), b(i, i), V(a, c, o), b(a, a), B(t, a, o, c, i, r), 0));
}
const ot = d(), rt = d(), I = d(), N = d(), q = d(), G = d(), X = d(), D = d();
function Pa(e, t, a, s, n, h, o, c, i) {
  xa(e, t, a, ot, rt), ot[0] !== void 0 && (p(I, ot, a), b(I, I), p(N, ot, s), b(N, N), p(q, ot, n), b(q, q), V(G, N, h), b(G, G), V(X, q, o), b(X, X), V(D, I, c), b(D, D), B(e, G, h, N, I, i), B(e, X, o, q, N, i), B(e, D, c, I, q, i)), rt[0] !== void 0 && (p(I, rt, a), b(I, I), p(N, rt, s), b(N, N), p(q, rt, n), b(q, q), V(G, N, h), b(G, G), V(X, q, o), b(X, X), V(D, I, c), b(D, D), B(e, G, h, N, I, i), B(e, X, o, q, N, i), B(e, D, c, I, q, i));
}
function $a(e, t, a) {
  let s = yt(e.maxVert[0], e.minVert[0]), n = 0;
  for (let h = 1; h < 7; ++h) {
    const o = yt(e.maxVert[h], e.minVert[h]);
    o > s && (s = o, n = h);
  }
  S(t, e.minVert[n]), S(a, e.maxVert[n]);
}
const w = [0, 0, 0];
function ja(e, t, a, s) {
  const { data: n, size: h } = e;
  let o = Number.NEGATIVE_INFINITY, c = 0;
  for (let i = 0; i < n.length; i += h) {
    w[0] = n[i] - t[0], w[1] = n[i + 1] - t[1], w[2] = n[i + 2] - t[2];
    const r = a[0] * w[0] + a[1] * w[1] + a[2] * w[2], g = a[0] * a[0] + a[1] * a[1] + a[2] * a[2], m = w[0] * w[0] + w[1] * w[1] + w[2] * w[2] - r * r / g;
    m > o && (o = m, c = i);
  }
  return S(s, n, c), o;
}
const _ = Lt();
function xa(e, t, a, s, n) {
  za(e, t, _, n, s);
  const h = Jt(a, t);
  _[1] - nt <= h && (s[0] = void 0), _[0] + nt >= h && (n[0] = void 0);
}
const Tt = d(), vt = d(), Ht = d(), J = d(), K = d(), Mt = d();
function B(e, t, a, s, n, h) {
  if (Zt(t) < nt) return;
  V(Tt, a, t), V(vt, s, t), V(Ht, n, t), tt(e, t, _), K[1] = _[0], J[1] = _[1], Mt[1] = J[1] - K[1];
  const o = [a, s, n], c = [Tt, vt, Ht];
  for (let i = 0; i < 3; ++i) {
    tt(e, o[i], _), K[0] = _[0], J[0] = _[1], tt(e, c[i], _), K[2] = _[0], J[2] = _[1], Mt[0] = J[0] - K[0], Mt[2] = J[2] - K[2];
    const r = qt(Mt);
    r < h.quality && (S(h.b0, o[i]), S(h.b1, t), S(h.b2, c[i]), h.quality = r);
  }
}
const Sa = d();
function tt(e, t, a) {
  const { data: s, size: n } = e;
  a[0] = Number.POSITIVE_INFINITY, a[1] = Number.NEGATIVE_INFINITY;
  for (let h = 0; h < s.length; h += n) {
    const o = s[h] * t[0] + s[h + 1] * t[1] + s[h + 2] * t[2];
    a[0] = Math.min(a[0], o), a[1] = Math.max(a[1], o);
  }
}
function za(e, t, a, s, n) {
  const { data: h, size: o } = e;
  S(s, h), S(n, s), a[0] = Jt(Sa, t), a[1] = a[0];
  for (let c = o; c < h.length; c += o) {
    const i = h[c] * t[0] + h[c + 1] * t[1] + h[c + 2] * t[2];
    i < a[0] && (a[0] = i, S(s, h, c)), i > a[1] && (a[1] = i, S(n, h, c));
  }
}
function Rt(e, t, a) {
  a.center = e, a.halfSize = it(t, t, 0.5), a.quaternion = Ot;
}
const H = d(), L = d(), ct = d(), at = d(), st = d(), Yt = d();
function Ia(e, t, a) {
  S(H, t), Math.abs(t[0]) > Math.abs(t[1]) && Math.abs(t[0]) > Math.abs(t[2]) ? H[0] = 0 : Math.abs(t[1]) > Math.abs(t[2]) ? H[1] = 0 : H[2] = 0, Zt(H) < nt && (H[0] = H[1] = H[2] = 1), V(L, t, H), b(L, L), V(ct, t, L), b(ct, ct), Wt(e, t, L, ct, at, st), p(Yt, st, at), Bt(t, L, ct, at, st, Yt, a);
}
function Wt(e, t, a, s, n, h) {
  tt(e, t, _), n[0] = _[0], h[0] = _[1], tt(e, a, _), n[1] = _[0], h[1] = _[1], tt(e, s, _), n[2] = _[0], h[2] = _[1];
}
const O = d(), ut = d(), Pt = d(), Q = ua(1, 0, 0, 0, 1, 0, 0, 0, 1), Na = St();
function Bt(e, t, a, s, n, h, o) {
  Q[0] = e[0], Q[1] = e[1], Q[2] = e[2], Q[3] = t[0], Q[4] = t[1], Q[5] = t[2], Q[6] = a[0], Q[7] = a[1], Q[8] = a[2], o.quaternion = ya(Na, Q), wt(O, s, n), dt(O, O, 0.5), dt(ut, e, O[0]), dt(Pt, t, O[1]), wt(ut, ut, Pt), dt(Pt, a, O[2]), o.center = lt(ut, ut, Pt), o.halfSize = it(O, h, 0.5);
}
const $ = 7;
let qa = class {
  constructor(t) {
    this.minVert = new Array($), this.maxVert = new Array($);
    const a = 64 * $;
    this.buffer = new ArrayBuffer(a);
    let s = 0;
    this.minProj = new Float64Array(this.buffer, s, $), s += 8 * $, this.maxProj = new Float64Array(this.buffer, s, $), s += 8 * $;
    for (let i = 0; i < $; ++i) this.minVert[i] = new Float64Array(this.buffer, s, 3), s += 24;
    for (let i = 0; i < $; ++i) this.maxVert[i] = new Float64Array(this.buffer, s, 3), s += 24;
    for (let i = 0; i < $; ++i) this.minProj[i] = Number.POSITIVE_INFINITY, this.maxProj[i] = Number.NEGATIVE_INFINITY;
    const n = new Array($), h = new Array($), { data: o, size: c } = t;
    for (let i = 0; i < o.length; i += c) {
      let r = o[i];
      r < this.minProj[0] && (this.minProj[0] = r, n[0] = i), r > this.maxProj[0] && (this.maxProj[0] = r, h[0] = i), r = o[i + 1], r < this.minProj[1] && (this.minProj[1] = r, n[1] = i), r > this.maxProj[1] && (this.maxProj[1] = r, h[1] = i), r = o[i + 2], r < this.minProj[2] && (this.minProj[2] = r, n[2] = i), r > this.maxProj[2] && (this.maxProj[2] = r, h[2] = i), r = o[i] + o[i + 1] + o[i + 2], r < this.minProj[3] && (this.minProj[3] = r, n[3] = i), r > this.maxProj[3] && (this.maxProj[3] = r, h[3] = i), r = o[i] + o[i + 1] - o[i + 2], r < this.minProj[4] && (this.minProj[4] = r, n[4] = i), r > this.maxProj[4] && (this.maxProj[4] = r, h[4] = i), r = o[i] - o[i + 1] + o[i + 2], r < this.minProj[5] && (this.minProj[5] = r, n[5] = i), r > this.maxProj[5] && (this.maxProj[5] = r, h[5] = i), r = o[i] - o[i + 1] - o[i + 2], r < this.minProj[6] && (this.minProj[6] = r, n[6] = i), r > this.maxProj[6] && (this.maxProj[6] = r, h[6] = i);
    }
    for (let i = 0; i < $; ++i) {
      let r = n[i];
      S(this.minVert[i], o, r), r = h[i], S(this.maxVert[i], o, r);
    }
  }
}, wa = class {
  constructor() {
    this.b0 = $t(1, 0, 0), this.b1 = $t(0, 1, 0), this.b2 = $t(0, 0, 1), this.quality = 0;
  }
};
function qt(e) {
  return e[0] * e[1] + e[0] * e[2] + e[1] * e[2];
}
function wt(e, t, a) {
  e[0] = t[0] + a[0], e[1] = t[1] + a[1], e[2] = t[2] + a[2];
}
function p(e, t, a) {
  e[0] = t[0] - a[0], e[1] = t[1] - a[1], e[2] = t[2] - a[2];
}
function dt(e, t, a) {
  e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a;
}
function S(e, t, a = 0) {
  e[0] = t[a], e[1] = t[a + 1], e[2] = t[a + 2];
}
function V(e, t, a) {
  const s = t[0], n = t[1], h = t[2], o = a[0], c = a[1], i = a[2];
  e[0] = n * i - h * c, e[1] = h * o - s * i, e[2] = s * c - n * o;
}
function b(e, t) {
  const a = t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
  if (a > 0) {
    const s = 1 / Math.sqrt(a);
    e[0] = t[0] * s, e[1] = t[1] * s, e[2] = t[2] * s;
  }
}
function Zt(e) {
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
    const n = (s + 1) % 3, h = (s + 2) % 3;
    let o = Math.sqrt(t[3 * s + s] - t[3 * n + n] - t[3 * h + h] + 1);
    e[s] = 0.5 * o, o = 0.5 / o, e[3] = (t[3 * n + h] - t[3 * h + n]) * o, e[n] = (t[3 * n + s] + t[3 * s + n]) * o, e[h] = (t[3 * h + s] + t[3 * s + h]) * o;
  }
  return e;
}
class ft {
  constructor(t = kt, a = Ha, s = Ot) {
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
    return Z(Qt.get(), this._data[0], this._data[1], this._data[2]);
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
    return Z(Qt.get(), this._data[3], this._data[4], this._data[5]);
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
    return la(ba.get(), this._data[6], this._data[7], this._data[8], this._data[9]);
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
      const h = t[n];
      h[0] = (1 & n ? -1 : 1) * s[3], h[1] = (2 & n ? -1 : 1) * s[4], h[2] = (4 & n ? -1 : 1) * s[5], y(h, h, a), h[0] += s[0], h[1] += s[1], h[2] += s[2];
    }
  }
  isVisible(t) {
    return this.intersectPlane(t[0]) <= 0 && this.intersectPlane(t[1]) <= 0 && this.intersectPlane(t[2]) <= 0 && this.intersectPlane(t[3]) <= 0 && this.intersectPlane(t[4]) <= 0 && this.intersectPlane(t[5]) <= 0;
  }
  get radius() {
    const t = this._data[3], a = this._data[4], s = this._data[5];
    return Math.sqrt(t * t + a * a + s * s);
  }
  intersectSphere(t) {
    u[0] = this._data[0] - t[0], u[1] = this._data[1] - t[1], u[2] = this._data[2] - t[2];
    const a = this.getQuaternion(Y);
    return U(l, a), y(u, u, l), mt(u, u), R[0] = Math.min(u[0], this._data[3]), R[1] = Math.min(u[1], this._data[4]), R[2] = Math.min(u[2], this._data[5]), At(R, u) < t[3] * t[3];
  }
  intersectSphereWithMBS(t, a = this.radius) {
    const s = this._data;
    u[0] = s[0] - t[0], u[1] = s[1] - t[1], u[2] = s[2] - t[2];
    const n = t[3], h = n + a;
    return !(Ut(u) > h * h) && (l[0] = -s[6], l[1] = -s[7], l[2] = -s[8], l[3] = s[9], y(u, u, l), mt(u, u), R[0] = Math.min(u[0], s[3]), R[1] = Math.min(u[1], s[4]), R[2] = Math.min(u[2], s[5]), At(R, u) < n * n);
  }
  intersectPlane(t) {
    const a = t[0] * this._data[0] + t[1] * this._data[1] + t[2] * this._data[2] + t[3], s = this.projectedRadius(It(t));
    return a > s ? 1 : a < -s ? -1 : 0;
  }
  intersectRay(t, a, s = 0) {
    const n = this._data, h = l;
    h[0] = -n[6], h[1] = -n[7], h[2] = -n[8], h[3] = n[9], u[0] = t[0] - n[0], u[1] = t[1] - n[1], u[2] = t[2] - n[2];
    const o = y(u, u, l), c = y(R, a, l);
    let i = -1 / 0, r = 1 / 0;
    const g = this.getHalfSize(et);
    for (let m = 0; m < 3; m++) {
      const z = o[m], A = c[m], M = g[m] + s;
      if (Math.abs(A) > 1e-6) {
        const v = (M - z) / A, P = (-M - z) / A;
        i = Math.max(i, Math.min(v, P)), r = Math.min(r, Math.max(v, P));
      } else if (z > M || z < -M) return !1;
    }
    return i <= r;
  }
  projectedArea(t, a, s, n) {
    const h = this.getQuaternion(Y);
    U(l, h), u[0] = t[0] - this._data[0], u[1] = t[1] - this._data[1], u[2] = t[2] - this._data[2], y(u, u, l);
    const o = this.getHalfSize(et), c = u[0] < -o[0] ? -1 : u[0] > o[0] ? 1 : 0, i = u[1] < -o[1] ? -1 : u[1] > o[1] ? 1 : 0, r = u[2] < -o[2] ? -1 : u[2] > o[2] ? 1 : 0, g = Math.abs(c) + Math.abs(i) + Math.abs(r);
    if (g === 0) return 1 / 0;
    const m = g === 1 ? 4 : 6, z = 6 * (c + 3 * i + 9 * r + 13);
    Nt(k, h), ta(k, k, o);
    const A = this.getCenter(E);
    for (let P = 0; P < m; P++) {
      const zt = Aa[z + P];
      Z(u, ((1 & zt) << 1) - 1, (2 & zt) - 1, ((4 & zt) >> 1) - 1), aa(u, u, k), lt(W, A, u), W[3] = 1, sa(W, W, a);
      const Vt = 1 / Math.max(1e-6, W[3]);
      F[2 * P] = W[0] * Vt, F[2 * P + 1] = W[1] * Vt;
    }
    const M = 2 * m - 2;
    let v = F[0] * (F[3] - F[M + 1]) + F[M] * (F[1] - F[M - 1]);
    for (let P = 2; P < M; P += 2) v += F[P] * (F[P + 3] - F[P - 1]);
    return Math.abs(v) * s * n * 0.125;
  }
  projectedRadius(t) {
    const a = this.getQuaternion(Y);
    return U(l, a), y(u, t, l), Math.abs(u[0] * this._data[3]) + Math.abs(u[1] * this._data[4]) + Math.abs(u[2] * this._data[5]);
  }
  minimumDistancePlane(t) {
    return t[0] * this._data[0] + t[1] * this._data[1] + t[2] * this._data[2] + t[3] - this.projectedRadius(It(t));
  }
  maximumDistancePlane(t) {
    return t[0] * this._data[0] + t[1] * this._data[1] + t[2] * this._data[2] + t[3] + this.projectedRadius(It(t));
  }
  toAaBoundingBox(t) {
    const a = this.getQuaternion(Y), s = Nt(k, a), n = this._data[3] * Math.abs(s[0]) + this._data[4] * Math.abs(s[3]) + this._data[5] * Math.abs(s[6]), h = this._data[3] * Math.abs(s[1]) + this._data[4] * Math.abs(s[4]) + this._data[5] * Math.abs(s[7]), o = this._data[3] * Math.abs(s[2]) + this._data[4] * Math.abs(s[5]) + this._data[5] * Math.abs(s[8]);
    t[0] = this._data[0] - n, t[1] = this._data[1] - h, t[2] = this._data[2] - o, t[3] = this._data[0] + n, t[4] = this._data[1] + h, t[5] = this._data[2] + o;
  }
  transform(t, a, s, n = 0, h = _t(s), o = _t(a), c = Xt(a, o)) {
    if (s === h) a.isGeographic ? Qa(this, t, a, n, o) : Ea(this, t, a, n, o, c);
    else if (a.isWGS84 && (s.isWebMercator || Ft(s))) Fa(a, this, s, t, n);
    else if (a.isWebMercator && Ft(s)) Ca(a, this, s, t, n);
    else {
      const i = this.getCenter(E);
      i[2] += n, xt(i, a, 0, i, s, 0, 1), t.center = i, this !== t && (t.quaternion = this.getQuaternion(Y), t.halfSize = this.getHalfSize(et));
    }
  }
}
const l = St(), Y = St(), pa = St(), u = d(), R = d(), W = ea();
function Va(e, t = new ft()) {
  return ga(e, t), t;
}
const F = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2], Aa = (() => {
  const e = new Int8Array(162);
  let t = 0;
  const a = (s) => {
    for (let n = 0; n < s.length; n++) e[t + n] = s[n];
    t += 6;
  };
  return a([6, 2, 3, 1, 5, 4]), a([0, 2, 3, 1, 5, 4]), a([0, 2, 3, 7, 5, 4]), a([0, 1, 3, 2, 6, 4]), a([0, 1, 3, 2, 0, 0]), a([0, 1, 5, 7, 3, 2]), a([0, 1, 3, 7, 6, 4]), a([0, 1, 3, 7, 6, 2]), a([0, 1, 5, 7, 6, 2]), a([0, 1, 5, 4, 6, 2]), a([0, 1, 5, 4, 0, 0]), a([0, 1, 3, 7, 5, 4]), a([0, 2, 6, 4, 0, 0]), a([0, 0, 0, 0, 0, 0]), a([1, 3, 7, 5, 0, 0]), a([2, 3, 7, 6, 4, 0]), a([2, 3, 7, 6, 0, 0]), a([2, 3, 1, 5, 7, 6]), a([0, 1, 5, 7, 6, 2]), a([0, 1, 5, 7, 6, 4]), a([0, 1, 3, 7, 6, 4]), a([4, 5, 7, 6, 2, 0]), a([4, 5, 7, 6, 0, 0]), a([4, 5, 1, 3, 7, 6]), a([0, 2, 3, 7, 5, 4]), a([6, 2, 3, 7, 5, 4]), a([6, 2, 3, 1, 5, 4]), e;
})();
function Ka(e, t, a, s, n) {
  const h = e.getQuaternion(Y);
  n.quaternion = h, U(l, h);
  const o = e.getCenter(E), c = e.getHalfSize(et);
  if (s === ha.Global) {
    y(f, o, l), mt(C, f), oa(x, C, c), Dt(x, C, x);
    const i = Ct(x);
    lt(x, C, c);
    const r = Ct(x);
    if (i < a) n.center = o, Z(f, a, a, a), n.halfSize = lt(f, c, f);
    else {
      const g = r > 0 ? 1 + t / r : 1, m = i > 0 ? 1 + a / i : 1, z = (m + g) / 2, A = (m - g) / 2;
      it(x, C, A), n.halfSize = bt(x, x, c, z), it(x, C, z), bt(x, x, c, A), ra(f, f), ca(f, x, f);
      const M = e.getQuaternion(pa);
      n.center = y(f, f, M);
    }
  } else {
    n.center = bt(f, o, Et, (a + t) / 2);
    const i = y(f, Et, l);
    mt(i, i), n.halfSize = bt(C, c, i, (a - t) / 2);
  }
  return n;
}
function Fa(e, t, a, s, n) {
  t.getCenter(E), E[2] += n;
  const h = _t(a);
  xt(E, e, 0, E, h, 0, 1), Kt(h, t, E, a, s);
}
function Ca(e, t, a, s, n) {
  t.getCenter(E), E[2] += n, Kt(e, t, E, a, s);
}
function Kt(e, t, a, s, n) {
  const h = t.getQuaternion(Y), o = Nt(k, h), c = t.getHalfSize(et);
  for (let i = 0; i < 8; ++i) {
    for (let r = 0; r < 3; ++r) T[r] = c[r] * (i & 1 << r ? -1 : 1);
    for (let r = 0; r < 3; ++r) {
      let g = a[r];
      for (let m = 0; m < 3; ++m) g += T[m] * o[3 * m + r];
      jt[3 * i + r] = g;
    }
  }
  xt(jt, e, 0, jt, s, 0, 8), Va(Ta, n);
}
function Ea(e, t, a, s, n = _t(a), h = Xt(a, n)) {
  e.getCorners(Gt), e.getCenter(T), T[2] += s, _a(a, T, j, n), t.setCenter(j[12], j[13], j[14]);
  const o = 2 * Math.sqrt(1 + j[0] + j[5] + j[10]);
  l[0] = (j[6] - j[9]) / o, l[1] = (j[8] - j[2]) / o, l[2] = (j[1] - j[4]) / o, l[3] = 0.25 * o;
  const c = e.getQuaternion(Y);
  t.quaternion = ma(l, l, c), U(l, l), Z(C, 0, 0, 0);
  const i = t.getCenter(va);
  for (const r of Gt) r[2] += s, h(r, 0, r, 0), Dt(f, r, i), y(f, f, l), mt(f, f), ia(C, C, f);
  t.halfSize = C;
}
function Qa(e, t, a, s, n = _t(a)) {
  const h = na(a), o = 1 + Math.max(0, s) / (h.radius + e.centerZ);
  e.getCenter(T), T[2] += s, xt(T, a, 0, T, n, 0, 1), t.center = T;
  const c = e.getQuaternion(Y);
  t.quaternion = c, U(l, c), Z(f, 0, 0, 1), y(f, f, l);
  const i = e.getHalfSize(et);
  Z(f, i[0] * Math.abs(f[0]), i[1] * Math.abs(f[1]), i[2] * Math.abs(f[2])), it(f, f, h.inverseFlattening), lt(f, i, f), t.halfSize = it(f, f, o);
}
const jt = new Array(24), Ta = new pt(jt, 3), T = d(), E = d(), va = d(), et = d(), k = da(), j = fa(), Gt = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]], f = d(), C = d(), x = d(), Ha = $t(-1, -1, -1);
export {
  Ka as L,
  ft as O,
  Ba as t
};
//# sourceMappingURL=orientedBoundingBox-DcqBPg8B.js.map
