import { d7 as Mi, q5 as zs, aF as ct, aG as wt, aE as ai, av as _t, aD as ur, ag as $e, q6 as ae, bh as Kr, q7 as uh, q8 as Gi, kn as fo, q9 as ph, qa as dh, az as Ie, qb as fh, oo as mh, qc as _h, a4 as gh, cP as I, qd as yh, C as de, oc as he, qe as Jr, od as pr, qf as xh, qg as vt, fu as Rs, kL as zn, oN as hi, oM as dr, lS as bh, oy as $, or as Rt, af as le, ja as ue, qh as Ph, ov as wh, qi as ge, oE as mo, oF as _o, oG as Sh, oH as vh, oB as Ki, oD as Mh, oC as Ch, qj as $h, qk as kh, j6 as Ih, k1 as Th, aH as go, gG as zh, ql as Lh, qm as Os, qn as Eh, qo as Nh, ax as Ah, s as Qr, N as x, z as Fh, qp as Ji, kK as Rh, oq as B, qq as yo, ay as Ln, qr as Oh, oK as Dh, O as En, P as Gh, dU as Bh, jQ as Vh, nX as Yh, U as Hh } from "./main-3gzXighg.js";
import { a as Uh, C as Xh, i as Wh, c as qh } from "./TurboLine-TkmALp3i.js";
import "./earcut-DY2eXHxJ.js";
import { g as tn, i as Ci, r as Ds, l as Zh } from "./GeometryUtils-CioAWdLo.js";
import { a as $i, g as en, h as sn, o as jh, d as Bi, $ as Te, r as ki, l as rn, S as Kh, _ as Jh } from "./definitions-7ZaZRHRo.js";
import { O as re, P as li, R as T, k as Q, B as De, A as Gs, X as Ct, o as Ht, Y as Qi, Z as Ge, K as Bs, U as st, w as pt, a as Vs, C as Qh, l as tl, b as el, u as sl, y as il, c as Nn, f as rl, m as nl, e as tr, n as er, i as xo } from "./enums-CQ3NrvMA.js";
import { t as ol } from "./Rect-DD6XS68q.js";
import { i as ve, a as al, f as hl, w as ll, g as bo, T as cl, r as Ys } from "./LabelMetric-D4mTwYEH.js";
import { C as S } from "./enums-Do5C4ZjN.js";
import { a as Hs } from "./BindType-9iOk18Ed.js";
import { s as ul } from "./Util-QOshEGIU.js";
import "./Texture-CX14BhWr.js";
import { r as pl } from "./Program-DodZ7ZlS.js";
import { l as Po } from "./highlightReasons-B-Ulmjlc.js";
import { t as Ut } from "./constants-DVpDF9P6.js";
function Ed(i) {
  return i;
}
function Nd(i) {
  return i;
}
function dl(i, t, e, s, r, n, o) {
  _r = 0;
  const a = (s - e) * n, h = r && r.length, l = h ? (r[0] - e) * n : a;
  let c, u, d, p, m, f = wo(t, e, s, 0, l, n, !0);
  if (f && f.next !== f.prev) {
    if (h && (f = gl(t, e, s, r, f, n)), a > 80 * n) {
      c = d = t[0 + e * n], u = p = t[1 + e * n];
      for (let _ = n; _ < l; _ += n) {
        const y = t[_ + e * n], g = t[_ + 1 + e * n];
        c = Math.min(c, y), u = Math.min(u, g), d = Math.max(d, y), p = Math.max(p, g);
      }
      m = Math.max(d - c, p - u), m = m !== 0 ? 1 / m : 0;
    }
    vs(f, i, n, c, u, m, o, 0);
  }
}
function wo(i, t, e, s, r, n, o) {
  let a;
  if (o === wl(i, t, e, s, r, n) > 0) for (let h = s; h < r; h += n) a = An(h + t * n, i[h + t * n], i[h + 1 + t * n], a);
  else for (let h = r - n; h >= s; h -= n) a = An(h + t * n, i[h + t * n], i[h + 1 + t * n], a);
  return a && ne(a, a.next) && (Ms(a), a = a.next), a;
}
function Ss(i, t = i) {
  if (!i) return i;
  let e, s = i;
  do
    if (e = !1, s.steiner || !ne(s, s.next) && j(s.prev, s, s.next) !== 0) s = s.next;
    else {
      if (Ms(s), s = t = s.prev, s === s.next) break;
      e = !0;
    }
  while (e || s !== t);
  return t;
}
function vs(i, t, e, s, r, n, o, a) {
  if (!i) return;
  !a && n && (i = So(i, s, r, n));
  let h = i;
  for (; i.prev !== i.next; ) {
    const l = i.prev, c = i.next;
    if (n ? ml(i, s, r, n) : fl(i)) t.push(l.index / e + o), t.push(i.index / e + o), t.push(c.index / e + o), Ms(i), i = c.next, h = c.next;
    else if ((i = c) === h) {
      a ? a === 1 ? vs(i = vl(i, t, e, o), t, e, s, r, n, o, 2) : a === 2 && Ml(i, t, e, s, r, n, o) : vs(Ss(i), t, e, s, r, n, o, 1);
      break;
    }
  }
}
function fl(i) {
  const t = i.prev, e = i, s = i.next;
  if (j(t, e, s) >= 0) return !1;
  let r = i.next.next;
  const n = r;
  let o = 0;
  for (; r !== i.prev && (o === 0 || r !== n); ) {
    if (o++, Me(t.x, t.y, e.x, e.y, s.x, s.y, r.x, r.y) && j(r.prev, r, r.next) >= 0) return !1;
    r = r.next;
  }
  return !0;
}
function ml(i, t, e, s) {
  const r = i.prev, n = i, o = i.next;
  if (j(r, n, o) >= 0) return !1;
  const a = r.x < n.x ? r.x < o.x ? r.x : o.x : n.x < o.x ? n.x : o.x, h = r.y < n.y ? r.y < o.y ? r.y : o.y : n.y < o.y ? n.y : o.y, l = r.x > n.x ? r.x > o.x ? r.x : o.x : n.x > o.x ? n.x : o.x, c = r.y > n.y ? r.y > o.y ? r.y : o.y : n.y > o.y ? n.y : o.y, u = fr(a, h, t, e, s), d = fr(l, c, t, e, s);
  let p = i.prevZ, m = i.nextZ;
  for (; p && p.z >= u && m && m.z <= d; ) {
    if (p !== i.prev && p !== i.next && Me(r.x, r.y, n.x, n.y, o.x, o.y, p.x, p.y) && j(p.prev, p, p.next) >= 0 || (p = p.prevZ, m !== i.prev && m !== i.next && Me(r.x, r.y, n.x, n.y, o.x, o.y, m.x, m.y) && j(m.prev, m, m.next) >= 0)) return !1;
    m = m.nextZ;
  }
  for (; p && p.z >= u; ) {
    if (p !== i.prev && p !== i.next && Me(r.x, r.y, n.x, n.y, o.x, o.y, p.x, p.y) && j(p.prev, p, p.next) >= 0) return !1;
    p = p.prevZ;
  }
  for (; m && m.z <= d; ) {
    if (m !== i.prev && m !== i.next && Me(r.x, r.y, n.x, n.y, o.x, o.y, m.x, m.y) && j(m.prev, m, m.next) >= 0) return !1;
    m = m.nextZ;
  }
  return !0;
}
function An(i, t, e, s) {
  const r = Ii.create(i, t, e);
  return s ? (r.next = s.next, r.prev = s, s.next.prev = r, s.next = r) : (r.prev = r, r.next = r), r;
}
function Ms(i) {
  i.next.prev = i.prev, i.prev.next = i.next, i.prevZ && (i.prevZ.nextZ = i.nextZ), i.nextZ && (i.nextZ.prevZ = i.prevZ);
}
function _l(i) {
  let t = i, e = i;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== i);
  return e;
}
function gl(i, t, e, s, r, n) {
  const o = new Array();
  for (let a = 0, h = s.length; a < h; a++) {
    const l = wo(i, t, e, s[a] * n, a < h - 1 ? s[a + 1] * n : e * n, n, !1);
    l === l.next && (l.steiner = !0), o.push(_l(l));
  }
  o.sort(Sl);
  for (const a of o) r = yl(a, r);
  return r;
}
function yl(i, t) {
  const e = xl(i, t);
  if (!e) return t;
  const s = Mo(e, i);
  return Ss(s, s.next), Ss(e, e.next);
}
function xl(i, t) {
  let e = t;
  const s = i.x, r = i.y;
  let n, o = -1 / 0;
  do {
    if (r <= e.y && r >= e.next.y && e.next.y !== e.y) {
      const d = e.x + (r - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (d <= s && d > o) {
        if (o = d, d === s) {
          if (r === e.y) return e;
          if (r === e.next.y) return e.next;
        }
        n = e.x < e.next.x ? e : e.next;
      }
    }
    e = e.next;
  } while (e !== t);
  if (!n) return null;
  if (s === o) return n.prev;
  const a = n, h = n.x, l = n.y;
  let c, u = 1 / 0;
  for (e = n.next; e !== a; ) s >= e.x && e.x >= h && s !== e.x && Me(r < l ? s : o, r, h, l, r < l ? o : s, r, e.x, e.y) && (c = Math.abs(r - e.y) / (s - e.x), (c < u || c === u && e.x > n.x) && Cs(e, i) && (n = e, u = c)), e = e.next;
  return n;
}
function So(i, t, e, s) {
  let r;
  for (; r !== i; r = r.next) {
    if (r = r || i, r.z === null && (r.z = fr(r.x, r.y, t, e, s)), r.prev.next !== r || r.next.prev !== r) return r.prev.next = r, r.next.prev = r, So(i, t, e, s);
    r.prevZ = r.prev, r.nextZ = r.next;
  }
  return i.prevZ.nextZ = null, i.prevZ = null, bl(i);
}
function bl(i) {
  let t, e = 1;
  for (; ; ) {
    let s, r = i;
    i = null, t = null;
    let n = 0;
    for (; r; ) {
      n++, s = r;
      let o = 0;
      for (; o < e && s; o++) s = s.nextZ;
      let a = e;
      for (; o > 0 || a > 0 && s; ) {
        let h;
        o === 0 ? (h = s, s = s.nextZ, a--) : a !== 0 && s ? r.z <= s.z ? (h = r, r = r.nextZ, o--) : (h = s, s = s.nextZ, a--) : (h = r, r = r.nextZ, o--), t ? t.nextZ = h : i = h, h.prevZ = t, t = h;
      }
      r = s;
    }
    if (t.nextZ = null, e *= 2, n < 2) return i;
  }
}
function j(i, t, e) {
  return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y);
}
function vo(i, t, e, s) {
  return !!(ne(i, t) && ne(e, s) || ne(i, s) && ne(e, t)) || j(i, t, e) > 0 != j(i, t, s) > 0 && j(e, s, i) > 0 != j(e, s, t) > 0;
}
function Pl(i, t) {
  let e = i;
  do {
    if (e.index !== i.index && e.next.index !== i.index && e.index !== t.index && e.next.index !== t.index && vo(e, e.next, i, t)) return !0;
    e = e.next;
  } while (e !== i);
  return !1;
}
function wl(i, t, e, s, r, n) {
  let o = 0;
  for (let a = s, h = r - n; a < r; a += n) o += (i[h + t * n] - i[a + t * n]) * (i[a + 1 + t * n] + i[h + 1 + t * n]), h = a;
  return o;
}
function Me(i, t, e, s, r, n, o, a) {
  return (r - o) * (t - a) - (i - o) * (n - a) >= 0 && (i - o) * (s - a) - (e - o) * (t - a) >= 0 && (e - o) * (n - a) - (r - o) * (s - a) >= 0;
}
function Cs(i, t) {
  return j(i.prev, i, i.next) < 0 ? j(i, t, i.next) >= 0 && j(i, i.prev, t) >= 0 : j(i, t, i.prev) < 0 || j(i, i.next, t) < 0;
}
function fr(i, t, e, s, r) {
  return (i = 1431655765 & ((i = 858993459 & ((i = 252645135 & ((i = 16711935 & ((i = 32767 * (i - e) * r) | i << 8)) | i << 4)) | i << 2)) | i << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - s) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1;
}
function ne(i, t) {
  return i.x === t.x && i.y === t.y;
}
function Sl(i, t) {
  return i.x - t.x;
}
function vl(i, t, e, s) {
  let r = i;
  do {
    const n = r.prev, o = r.next.next;
    !ne(n, o) && vo(n, r, r.next, o) && Cs(n, o) && Cs(o, n) && (t.push(n.index / e + s), t.push(r.index / e + s), t.push(o.index / e + s), Ms(r), Ms(r.next), r = i = o), r = r.next;
  } while (r !== i);
  return r;
}
function Ml(i, t, e, s, r, n, o) {
  let a = i;
  do {
    let h = a.next.next;
    for (; h !== a.prev; ) {
      if (a.index !== h.index && Cl(a, h)) {
        let l = Mo(a, h);
        return a = Ss(a, a.next), l = Ss(l, l.next), vs(a, t, e, s, r, n, o, 0), void vs(l, t, e, s, r, n, o, 0);
      }
      h = h.next;
    }
    a = a.next;
  } while (a !== i);
}
function Cl(i, t) {
  return i.next.index !== t.index && i.prev.index !== t.index && !Pl(i, t) && Cs(i, t) && Cs(t, i) && $l(i, t);
}
function $l(i, t) {
  let e = i, s = !1;
  const r = (i.x + t.x) / 2, n = (i.y + t.y) / 2;
  do
    e.y > n != e.next.y > n && e.next.y !== e.y && r < (e.next.x - e.x) * (n - e.y) / (e.next.y - e.y) + e.x && (s = !s), e = e.next;
  while (e !== i);
  return s;
}
function Mo(i, t) {
  const e = Ii.create(i.index, i.x, i.y), s = Ii.create(t.index, t.x, t.y), r = i.next, n = t.prev;
  return i.next = t, t.prev = i, e.next = r, r.prev = e, s.next = e, e.prev = s, n.next = s, s.prev = n, s;
}
let Ii = class Co {
  constructor() {
    this.index = 0, this.x = 0, this.y = 0, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
  }
  static create(t, e, s) {
    const r = _r < mr.length ? mr[_r++] : new Co();
    return r.index = t, r.x = e, r.y = s, r.prev = null, r.next = null, r.z = null, r.prevZ = null, r.nextZ = null, r.steiner = !1, r;
  }
};
const mr = [], kl = 8096;
let _r = 0;
for (let i = 0; i < kl; i++) mr.push(new Ii());
const Il = 1e-5, Kt = new tn(0, 0, 0, 1, 0), gr = new tn(0, 0, 0, 1, 0);
function Fn(i, t, e) {
  let s = 0;
  for (let r = 1; r < e; r++) {
    const n = i[2 * (t + r - 1)], o = i[2 * (t + r - 1) + 1];
    s += (i[2 * (t + r)] - n) * (i[2 * (t + r) + 1] + o);
  }
  return s;
}
function Tl(i, t, e, s, r) {
  let n = 0;
  const o = 2;
  for (let a = e; a < s; a += 3) {
    const h = (i[a] - r) * o, l = (i[a + 1] - r) * o, c = (i[a + 2] - r) * o;
    n += Math.abs((t[h] - t[c]) * (t[l + 1] - t[h + 1]) - (t[h] - t[l]) * (t[c + 1] - t[h + 1]));
  }
  return n;
}
function zl(i, t) {
  const { coords: e, lengths: s, hasIndeterminateRingOrder: r } = t, n = 0, o = i;
  if (r) return !1;
  let a = 0;
  for (let h = 0; h < s.length; ) {
    let l = h, c = s[h], u = Fn(e, a, c);
    const d = [];
    for (; ++l < s.length; ) {
      const _ = s[l], y = Fn(e, a + c, _);
      if (!(y > 0)) break;
      u += y, d.push(a + c), c += _;
    }
    const p = o.length;
    dl(o, e, a, a + c, d, 2, n);
    const m = Tl(o, e, p, o.length, n), f = Math.abs(u);
    if (Math.abs((m - f) / Math.max(1e-7, f)) > Il) return o.length = 0, !1;
    h = l, a += c;
  }
  return !0;
}
function Ll(i) {
  const { coords: t, lengths: e } = i, { buffer: s } = Uh(t, e);
  return s;
}
function El(i, t, e) {
  let s = 0;
  for (let r = 0; r < i.lengths.length; r++) {
    const n = i.lengths[r];
    for (let o = 0; o < n; o++) {
      const a = i.coords[2 * (o + s)], h = i.coords[2 * (o + s) + 1];
      if (a < t || a > e || h < t || h > e) return !0;
    }
    s += n;
  }
  return !1;
}
function $o(i, t) {
  if (i == null) return null;
  if (!El(i, -128, $i + 128)) return i;
  Kt.setPixelMargin(t), Kt.reset(Ci.Polygon);
  let e = 0;
  for (let o = 0; o < i.lengths.length; o++) {
    const a = i.lengths[o];
    let h = i.coords[2 * (0 + e)], l = i.coords[2 * (0 + e) + 1];
    Kt.moveTo(h, l);
    for (let c = 1; c < a; c++) h = i.coords[2 * (c + e)], l = i.coords[2 * (c + e) + 1], Kt.lineTo(h, l);
    Kt.close(), e += a;
  }
  const s = Kt.result(!1);
  if (!s) return null;
  const r = [], n = [];
  for (const o of s) {
    let a = 0;
    for (const h of o) n.push(h.x), n.push(h.y), a++;
    r.push(a);
  }
  return new Mi(r, n);
}
function Nl(i, t) {
  gr.setPixelMargin(t);
  const e = gr, s = -t, r = $i + t;
  let n = [], o = !1;
  if (!i.nextPath()) return null;
  let a = !0;
  for (; a; ) {
    i.seekPathStart();
    const h = [];
    if (!i.pathSize) return null;
    e.reset(Ci.LineString), i.nextPoint();
    let l = i.x, c = i.y;
    if (o) e.moveTo(l, c);
    else {
      if (l < s || l > r || c < s || c > r) {
        o = !0;
        continue;
      }
      h.push({ x: l, y: c });
    }
    let u = !1;
    for (; i.nextPoint(); ) if (l = i.x, c = i.y, o) e.lineTo(l, c);
    else {
      if (l < s || l > r || c < s || c > r) {
        u = !0;
        break;
      }
      h.push({ x: l, y: c });
    }
    if (u) o = !0;
    else {
      if (o) {
        const d = e.resultWithStarts();
        if (d) for (const p of d) n.push(p);
      } else n.push({ line: h, start: 0 });
      a = i.nextPath(), o = !1;
    }
  }
  return n = n.filter((h) => h.line.length > 1), n.length === 0 ? null : n;
}
Kt.setExtent($i), gr.setExtent($i);
let N = class {
  static fromOptimized(t, e, s = !1, r = !1, n = 1) {
    return new yr().initialize(t, e, s, r, n);
  }
  static fromJSON(t, e = !1, s = !1) {
    const [r, n] = Rn(t);
    return new xr().initialize(r, n, e, s, 1);
  }
  static fromOptimizedCIM(t, e, s = !1, r = !1, n = 1) {
    return new On().initialize(t, e, s, r, n);
  }
  static fromJSONCIM(t, e = !1, s = !1, r = 1) {
    const [n, o] = Rn(t);
    return new Dn().initialize(n, o, e, s, r);
  }
  static fromFeatureSetReader(t) {
    const e = t.readGeometryForDisplay(), s = t.geometryType;
    return e && s ? this.fromOptimized(e, s) : null;
  }
  static fromFeatureSetReaderCIM(t) {
    const e = t.readGeometryForDisplay(), s = t.geometryType;
    return e && s ? this.fromOptimizedCIM(e, s) : null;
  }
  static createEmptyOptimized(t, e = !1, s = !1, r = 1) {
    return new yr().initialize(new Mi(), t, e, s, r);
  }
  static createEmptyJSON(t, e = !1, s = !1) {
    return new xr().initialize([], t, e, s, 1);
  }
  static createEmptyOptimizedCIM(t, e = !1, s = !1, r = 1) {
    return new On().initialize(new Mi(), t, e, s, r);
  }
  static createEmptyJSONCIM(t, e = !1, s = !1, r = 1) {
    return new Dn().initialize([], t, e, s, r);
  }
  asJSON() {
    const t = zs(this);
    return this.geometryType === "esriGeometryEnvelope" ? { xmin: t[0][0][0], ymin: t[0][0][1], xmax: t[0][2][0], ymax: t[0][2][1] } : this.geometryType === "esriGeometryMultipoint" ? { points: t.flat() } : this.geometryType === "esriGeometryPoint" ? { x: t[0][0][0], y: t[0][0][1] } : this.geometryType === "esriGeometryPolygon" ? { rings: t } : { paths: t };
  }
  getCurrentRingArea() {
    if (this.pathSize < 3) return 0;
    let t, e, s = 0;
    if (this.seekPathStart(), !this.nextPoint()) return 0;
    t = this.x, e = this.y;
    const r = t, n = e;
    for (; this.nextPoint(); ) s += (t - this.x) * (e + this.y), t = this.x, e = this.y;
    return s += (t - r) * (e + n), -0.5 * s;
  }
  invertY() {
    this.yFactor *= -1;
  }
}, yr = class ko extends N {
  constructor() {
    super(...arguments), this._end = -1;
  }
  initialize(t, e, s, r, n) {
    return this.hasZ = s, this.hasM = r, this.geometryType = e, this._stride = 2 + Number(s) + Number(r), this._geometry = t, this._pathIndex = -1, this._pathOffset = 0, this._pointOffset = -this._stride, this._end = -1, this.yFactor = n, this;
  }
  reset() {
    this.initialize(this._geometry, this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  seekPath(t) {
    if (t >= 0 && t < this.totalSize) {
      if (this._pathIndex < t) for (; this._pathIndex < t && this.nextPath(); ) ;
      else if (this._pathIndex > t) for (; this._pathIndex > t && this.prevPath(); ) ;
      return !0;
    }
    return !1;
  }
  seekPathStart() {
    this._pointOffset = this._pathOffset - this._stride;
  }
  seekPathEnd() {
    this._pointOffset = this._end;
  }
  seekInPath(t) {
    const e = this._pathOffset + t * this._stride;
    return e >= 0 && e < this._end && (this._pointOffset = e, !0);
  }
  nextPoint() {
    return (this._pointOffset += this._stride) < this._end;
  }
  prevPoint() {
    return (this._pointOffset -= this._stride) >= this._pathOffset;
  }
  nextPath() {
    return !(this.pathIndex >= this.totalSize - 1) && (this._pathIndex >= 0 && (this._pathOffset += this._stride * this.pathSize), this._pathIndex++, this._pointOffset = this._pathOffset - this._stride, this._end = this._pointOffset + this._stride + this._stride * this.pathSize, !0);
  }
  prevPath() {
    return !(this.pathIndex <= 0) && (this._pathIndex--, this._end = this._pathOffset, this._pathOffset -= this._stride * this.pathSize, this._pointOffset = this._pathOffset - this._stride, !0);
  }
  pathLength() {
    const t = this._end, e = this._stride, s = this._geometry.coords;
    let r = 0;
    for (let n = this._pathOffset + e; n < t; n += e) {
      const o = s[n - e], a = s[n - e + 1], h = s[n] - o, l = s[n + 1] - a;
      r += Math.sqrt(h * h + l * l);
    }
    return r;
  }
  startPath() {
    this._geometry.lengths.push(0);
  }
  pushPath(t) {
    this.startPath(), this.pushPoints(t);
  }
  pushPoint(t) {
    for (let e = 0; e < this._stride; ++e) this._geometry.coords.push(t[e]);
    this._geometry.lengths[this.totalSize - 1]++;
  }
  pushXY(t, e) {
    this._geometry.coords.push(t, e), this._geometry.lengths[this.totalSize - 1]++;
  }
  pushPoints(t) {
    for (const e of t) for (let s = 0; s < this._stride; ++s) this._geometry.coords.push(e[s]);
    this._geometry.lengths[this.totalSize - 1] += t.length;
  }
  pushCursor(t) {
    const e = t.asOptimized();
    this._geometry.coords.push(...e.coords), this._geometry.lengths.push(...e.lengths);
  }
  asOptimized() {
    const t = this._geometry.clone();
    if (this.yFactor !== 1) for (let e = 1; e < t.coords.length; e += this._stride) t.coords[e] *= this.yFactor;
    return this.geometryType === "esriGeometryPoint" && (t.lengths.length = 0), t;
  }
  isClosed() {
    const t = this._geometry.coords, e = this._pathOffset, s = this._end - this._stride;
    for (let r = 0; r < this._stride; r++) if (t[e + r] !== t[s + r]) return !1;
    return !0;
  }
  clone() {
    return new ko().initialize(this._geometry.clone(), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  get totalPoints() {
    return this._geometry.isPoint ? 1 : this._geometry.lengths.reduce((t, e) => t + e);
  }
  get pathSize() {
    const { lengths: t } = this._geometry;
    return this._pathIndex < 0 || this._pathIndex > t.length - 1 ? 0 : this._geometry.isPoint ? 1 : t[this._pathIndex];
  }
  get totalSize() {
    return this._geometry.lengths.length;
  }
  get x() {
    return this._geometry.coords[this._pointOffset];
  }
  set x(t) {
    this._geometry.coords[this._pointOffset] = t;
  }
  get y() {
    return this.yFactor * this._geometry.coords[this._pointOffset + 1];
  }
  set y(t) {
    this._geometry.coords[this._pointOffset + 1] = this.yFactor * t;
  }
  get z() {
    return this._geometry.coords[this._pointOffset + 2];
  }
  set z(t) {
    this._geometry.coords[this._pointOffset + 2] = t;
  }
  get m() {
    const t = this.hasZ ? 3 : 2;
    return this._geometry.coords[this._pointOffset + t];
  }
  set m(t) {
    this._geometry.coords[this._pointOffset + 3] = t;
  }
  get pathIndex() {
    return this._pathIndex;
  }
  get _coordIndex() {
    return this._pointOffset / this._stride;
  }
};
function Al(i) {
  const t = [i.x, i.y];
  return i.z && t.push(i.z), i.m && t.push(i.m), t;
}
function Rn(i) {
  return ct(i) ? [i.rings, "esriGeometryPolygon"] : wt(i) ? [i.paths, "esriGeometryPolyline"] : ai(i) ? [[i.points], "esriGeometryMultipoint"] : _t(i) ? [[[[i.xmin, i.ymin], [i.xmin, i.ymax], [i.xmax, i.ymax], [i.xmax, i.ymin], [i.xmin, i.ymin]]], "esriGeometryEnvelope"] : ur(i) ? [[[Al(i)]], "esriGeometryPoint"] : [[], "esriGeometryPolyline"];
}
let xr = class Io extends N {
  initialize(t, e, s, r, n) {
    return this._paths = t, this.geometryType = e, this.hasZ = s, this.hasM = r, this._pathIndex = this._pointIndex = -1, this.yFactor = n, this._mIndex = this.hasZ ? 3 : 2, this;
  }
  reset() {
    this._pathIndex = this._pointIndex = -1;
  }
  seekPath(t) {
    return this._pathIndex = t, this._pointIndex = -1, t >= 0 && t < this.totalSize && (this._currentPath = this._paths[t], !0);
  }
  seekPathStart() {
    this._pointIndex = -1;
  }
  seekPathEnd() {
    this._pointIndex = this._currentPath.length;
  }
  seekInPath(t) {
    return t >= 0 && t < this._currentPath.length && (this._pointIndex = t, this._currentPoint = this._currentPath[this._pointIndex], !0);
  }
  nextPoint() {
    return this._currentPoint = this._currentPath[++this._pointIndex], this._pointIndex < this._currentPath.length;
  }
  prevPoint() {
    return this._currentPoint = this._currentPath[--this._pointIndex], this._pointIndex >= 0;
  }
  nextPath() {
    return this._pointIndex = -1, this._currentPath = this._paths[++this._pathIndex], this._pathIndex < this.totalSize;
  }
  prevPath() {
    return this.pathIndex > 0 && (this._pointIndex = -1, this._pathIndex--, this._currentPath = this._paths[this._pathIndex], !0);
  }
  pathLength() {
    const t = this._currentPath.length, e = this._currentPath;
    let s = 0;
    for (let r = 1; r < t; r++) {
      const n = e[r - 1], o = e[r], a = n[0], h = n[1], l = o[0] - a, c = o[1] - h;
      s += Math.sqrt(l * l + c * c);
    }
    return s;
  }
  startPath() {
    this._paths.push([]);
  }
  pushPath(t) {
    this._paths.push(t);
  }
  pushPoint(t) {
    this._paths[this.totalSize - 1].push(t);
  }
  pushXY(t, e) {
    this._paths[this.totalSize - 1].push([t, e]);
  }
  pushPoints(t) {
    this._paths[this.totalSize - 1].push(...t);
  }
  pushCursor(t) {
    const e = zs(t);
    for (const s of e) this.pushPath(s);
  }
  asOptimized() {
    const t = new Mi();
    if (this.geometryType === "esriGeometryPoint") t.coords.push(...this._paths[0][0]), t.lengths.length = 0;
    else for (const e of this._paths) {
      for (const s of e) t.coords.push(s[0]), t.coords.push(s[1] * this.yFactor), this.hasZ && t.coords.push(s[2]), this.hasM && t.coords.push(s[this._mIndex]);
      t.lengths.push(e.length);
    }
    return t;
  }
  isClosed() {
    const t = this._currentPath[0], e = this._currentPath[this._currentPath.length - 1];
    for (let s = 0; s < t.length; s++) if (t[s] !== e[s]) return !1;
    return !0;
  }
  clone() {
    return new Io().initialize($e(this._paths), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  get totalPoints() {
    return this._paths.map((t) => t.length).reduce((t, e) => t + e);
  }
  get pathSize() {
    return this._pathIndex < 0 || this._pathIndex > this.totalSize - 1 ? -1 : this._paths[this._pathIndex].length;
  }
  get totalSize() {
    return this._paths.length;
  }
  get x() {
    return this._currentPoint[0];
  }
  set x(t) {
    this._currentPoint[0] = t;
  }
  get y() {
    return this.yFactor * this._currentPoint[1];
  }
  set y(t) {
    this._currentPoint[1] = this.yFactor * t;
  }
  get z() {
    return this._currentPoint[2];
  }
  set z(t) {
    this._currentPoint[2] = t;
  }
  get m() {
    return this._currentPoint[this._mIndex];
  }
  set m(t) {
    this._currentPoint[this._mIndex] = t;
  }
  get pathIndex() {
    return this._pathIndex;
  }
};
const Us = 4, Xs = 1;
let On = class To extends yr {
  initialize(t, e, s, r, n) {
    return super.initialize(t, e, s, r, n), this._controlPoints || (this._controlPoints = this._controlPoints = new Array(this.totalSize).fill(void 0).map((o) => /* @__PURE__ */ new Set())), this;
  }
  startPath() {
    super.startPath(), this._controlPoints.push(/* @__PURE__ */ new Set());
  }
  clone() {
    const t = new To().initialize(this._geometry.clone(), this.geometryType, this.hasZ, this.hasM, this.yFactor);
    return t._controlPoints = this._controlPoints, t;
  }
  setControlPoint() {
    this._controlPoints[this.pathIndex].add(this._coordIndex);
  }
  getControlPoint() {
    return this._controlPoints[this.pathIndex].has(this._coordIndex);
  }
  setControlPointAt(t) {
    this._controlPoints[this.pathIndex].add(t);
  }
  getControlPointAt(t) {
    return this._controlPoints[this.pathIndex].has(t);
  }
}, Dn = class zo extends xr {
  initialize(t, e, s, r, n) {
    return super.initialize(t, e, s, r, n);
  }
  clone() {
    return new zo().initialize($e(this._paths), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  setControlPoint() {
    this._paths[this.pathIndex][this._pointIndex][Us] = Xs;
  }
  getControlPoint() {
    return this._paths[this.pathIndex][this._pointIndex][Us] === Xs;
  }
  setControlPointAt(t) {
    this._paths[this.pathIndex][t][Us] = Xs;
  }
  getControlPointAt(t) {
    return this._paths[this.pathIndex][t][Us] === Xs;
  }
};
const Fl = 512;
let $t, br = class {
  constructor(t) {
    this._geometry = t;
  }
  next() {
    const t = this._geometry;
    return this._geometry = null, t;
  }
};
function nn(i, t) {
  $t || ($t = new tn(0, 0, 0, 1));
  const e = i.geometryType === "esriGeometryPolygon", s = e ? Ci.Polygon : Ci.LineString, r = e ? 3 : 2;
  let n, o;
  for ($t.reset(s), $t.setPixelMargin(t + 1), $t.setExtent(Fl); i.nextPath(); ) if (!(i.pathSize < r)) {
    for (i.nextPoint(), n = i.x, o = -i.y, $t.moveTo(n, o); i.nextPoint(); ) n = i.x, o = -i.y, $t.lineTo(n, o);
    e && $t.close();
  }
  const a = $t.result(!1);
  if (a) {
    const h = N.createEmptyOptimizedCIM(i.geometryType);
    for (const l of a) {
      h.startPath();
      for (const c of l) h.pushXY(c.x, -c.y);
    }
    return h.reset(), h;
  }
  return null;
}
let Lo = class Ke {
  static local() {
    return Ke.instance === null && (Ke.instance = new Ke()), Ke.instance;
  }
  execute(t, e, s, r, n) {
    return new Rl(t, e, s);
  }
};
Lo.instance = null;
let Rl = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._angleTolerance = e.angleTolerance !== void 0 ? e.angleTolerance : 120, this._maxCosAngle = Math.cos((1 - Math.abs(this._angleTolerance) / 180) * Math.PI);
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (t.geometryType === "esriGeometryPolygon") this._isClosed = !0;
      else if (t.geometryType === "esriGeometryPolyline") this._isClosed = !1;
      else {
        if (t.geometryType !== "esriGeometryEnvelope") {
          t = this._inputGeometries.next();
          continue;
        }
        if (this._maxCosAngle) return t;
        this._isClosed = !0;
      }
      for (; t.nextPath(); ) this._processPath(t);
      return t.reset(), t;
    }
    return null;
  }
  _processPath(t) {
    if (t.nextPoint()) {
      const e = t.x, s = t.y;
      let r = e, n = s, o = t.pathSize, a = 0, h = 0, l = 0, c = 0, u = 0, d = 0;
      this._isClosed && ++o;
      for (let p = 1; t.nextPoint() || p < o; ++p) {
        let m, f;
        this._isClosed && p === o - 1 ? (m = e, f = s) : (m = t.x, f = t.y);
        const _ = m - r, y = f - n, g = Math.sqrt(_ * _ + y * y);
        p > 1 && g > 0 && l > 0 && (a * _ + h * y) / g / l <= this._maxCosAngle && t.setControlPointAt(p - 1), p === 1 && (c = _, u = y, d = g), g > 0 && (r = m, n = f, a = _, h = y, l = g);
      }
      this._isClosed && l > 0 && d > 0 && (a * c + h * u) / d / l <= this._maxCosAngle && t.setControlPointAt(0);
    }
  }
}, Ee = class {
  constructor() {
    this.setIdentity();
  }
  getAngle() {
    return (this.rz == null || this.rz === 0 && this.rzCos !== 1 && this.rzSin !== 0) && (this.rz = Math.atan2(this.rzSin, this.rzCos)), this.rz;
  }
  setIdentity() {
    this.tx = 0, this.ty = 0, this.tz = 0, this.s = 1, this.rx = 0, this.ry = 0, this.rz = 0, this.rzCos = 1, this.rzSin = 0;
  }
  setTranslate(t, e) {
    this.tx = t, this.ty = e;
  }
  setTranslateZ(t) {
    this.tz = t;
  }
  setRotateCS(t, e) {
    this.rz = void 0, this.rzCos = t, this.rzSin = e;
  }
  setRotate(t) {
    this.rz = t, this.rzCos = void 0, this.rzSin = void 0;
  }
  setRotateY(t) {
    this.ry = t;
  }
  setScale(t) {
    this.s = t;
  }
  setMeasure(t) {
    this.m = t;
  }
};
function sr(i, t) {
  i[4] = t;
}
let Ls = class {
  constructor(t, e = !0, s = !0, r = 0) {
    this.isClosed = !1, this.geometryCursor = null, this.geometryCursor = !e && t.geometryType === "esriGeometryPolygon" || !s && t.geometryType === "esriGeometryPolyline" ? null : t, this.geomUnitsPerPoint = r, this.iteratePath = !1, this.internalPlacement = new Ee();
  }
  next() {
    if (!this.geometryCursor) return null;
    for (; this.iteratePath || this.geometryCursor.pathIndex < this.geometryCursor.totalSize - 1; ) {
      this.iteratePath || this.geometryCursor.nextPath();
      const t = this.processPath(this.geometryCursor);
      if (t) return t;
    }
    return this.geometryCursor = null, null;
  }
}, Vi = class {
  constructor(t, e, s, r = 0) {
    this.isClosed = !1, this.inputGeometries = t, this.acceptPolygon = e, this.acceptPolyline = s, this.geomUnitsPerPoint = r, this.iteratePath = !1, this.multiPathCursor = null;
  }
  next() {
    for (; ; ) {
      if (!this.multiPathCursor) {
        let t = this.inputGeometries.next();
        for (; t && (this.isClosed = this.acceptPolygon && t.geometryType === "esriGeometryPolygon" || t.geometryType === "esriGeometryEnvelope", this.multiPathCursor = t, !this.multiPathCursor); ) t = this.inputGeometries.next();
        if (!this.multiPathCursor) return null;
      }
      for (; this.iteratePath || this.multiPathCursor.nextPath(); ) {
        this.multiPathCursor.seekPathStart();
        const t = this.processPath(this.multiPathCursor);
        if (t) return t;
      }
      this.multiPathCursor = null;
    }
  }
};
const $s = 0.03;
let Dt = class {
  constructor(t = 0, e = !1) {
  }
  isEmpty(t) {
    if (!t.nextPoint()) return !0;
    let e, s, r, n;
    for (e = t.x, s = t.y; t.nextPoint(); e = s, s = n) if (r = t.x, n = t.y, r !== e || n !== s) return t.seekPathStart(), !1;
    return t.seekPathStart(), !0;
  }
  normalize(t) {
    const e = Math.sqrt(t[0] * t[0] + t[1] * t[1]);
    e !== 0 && (t[0] /= e, t[1] /= e);
  }
  getLength(t, e, s, r) {
    const n = s - t, o = r - e;
    return Math.sqrt(n * n + o * o);
  }
  getSegLength(t) {
    const [[e, s], [r, n]] = t;
    return this.getLength(e, s, r, n);
  }
  getCoord2D(t, e, s, r, n) {
    return [t + (s - t) * n, e + (r - e) * n];
  }
  getSegCoord2D(t, e) {
    const [[s, r], [n, o]] = t;
    return this.getCoord2D(s, r, n, o, e);
  }
  getAngle(t, e, s, r, n) {
    const o = s - t, a = r - e;
    return Math.atan2(a, o);
  }
  getAngleCS(t, e, s, r, n) {
    const o = s - t, a = r - e, h = Math.sqrt(o * o + a * a);
    return h > 0 ? [o / h, a / h] : [1, 0];
  }
  getSegAngleCS(t, e) {
    const [[s, r], [n, o]] = t;
    return this.getAngleCS(s, r, n, o, e);
  }
  cut(t, e, s, r, n, o) {
    return [n <= 0 ? [t, e] : this.getCoord2D(t, e, s, r, n), o >= 1 ? [s, r] : this.getCoord2D(t, e, s, r, o)];
  }
  getSubCurve(t, e, s) {
    const r = N.createEmptyOptimizedCIM("esriGeometryPolyline");
    return this.appendSubCurve(r, t, e, s) ? r : null;
  }
  appendSubCurve(t, e, s, r) {
    t.startPath(), e.seekPathStart();
    let n = 0, o = !0;
    if (!e.nextPoint()) return !1;
    let a = e.x, h = e.y;
    for (; e.nextPoint(); ) {
      const l = this.getLength(a, h, e.x, e.y);
      if (l !== 0) {
        if (o) {
          if (n + l > s) {
            const c = (s - n) / l;
            let u = 1, d = !1;
            n + l >= r && (u = (r - n) / l, d = !0);
            const p = this.cut(a, h, e.x, e.y, c, u);
            if (p && t.pushPoints(p), d) break;
            o = !1;
          }
        } else {
          if (n + l > r) {
            const c = this.cut(a, h, e.x, e.y, 0, (r - n) / l);
            c && t.pushPoint(c[1]);
            break;
          }
          t.pushXY(e.x, e.y);
        }
        n += l, a = e.x, h = e.y;
      } else a = e.x, h = e.y;
    }
    return !0;
  }
  getCIMPointAlong(t, e) {
    if (!t.nextPoint()) return null;
    let s, r, n, o, a = 0;
    for (s = t.x, r = t.y; t.nextPoint(); s = n, r = o) {
      n = t.x, o = t.y;
      const h = this.getLength(s, r, n, o);
      if (h !== 0) {
        if (a + h > e) {
          const l = (e - a) / h;
          return this.getCoord2D(s, r, n, o, l);
        }
        a += h;
      }
    }
    return null;
  }
  offset(t, e, s, r, n) {
    if (!t || t.length < 2) return null;
    let o = 0, a = t[o++], h = o;
    for (; o < t.length; ) {
      const d = t[o];
      d[0] === a[0] && d[1] === a[1] || (o !== h && (t[h] = t[o]), a = t[h++]), o++;
    }
    const l = t[0][0] === t[h - 1][0] && t[0][1] === t[h - 1][1];
    if (l && --h, h < (l ? 3 : 2)) return null;
    const c = [];
    a = l ? t[h - 1] : null;
    let u = t[0];
    for (let d = 0; d < h; d++) {
      const p = d === h - 1 ? l ? t[0] : null : t[d + 1];
      if (a) if (p) {
        const m = [p[0] - u[0], p[1] - u[1]];
        this.normalize(m);
        const f = [u[0] - a[0], u[1] - a[1]];
        this.normalize(f);
        const _ = f[0] * m[1] - f[1] * m[0], y = f[0] * m[0] + f[1] * m[1];
        if (_ === 0 && y === 1) {
          u = p;
          continue;
        }
        if (_ >= 0 == e <= 0) {
          if (y < 1) {
            const g = [m[0] - f[0], m[1] - f[1]];
            this.normalize(g);
            const P = Math.sqrt((1 + y) / 2);
            if (P > 1 / r) {
              const w = -Math.abs(e) / P;
              c.push([u[0] - g[0] * w, u[1] - g[1] * w]);
            }
          }
        } else switch (s) {
          case re.Mitered: {
            const g = Math.sqrt((1 + y) / 2);
            if (g > 0 && 1 / g < r) {
              const P = [m[0] - f[0], m[1] - f[1]];
              this.normalize(P);
              const w = Math.abs(e) / g;
              c.push([u[0] - P[0] * w, u[1] - P[1] * w]);
              break;
            }
          }
          case re.Bevelled:
            c.push([u[0] + f[1] * e, u[1] - f[0] * e]), c.push([u[0] + m[1] * e, u[1] - m[0] * e]);
            break;
          case re.Rounded:
            if (y < 1) {
              c.push([u[0] + f[1] * e, u[1] - f[0] * e]);
              const g = Math.floor(2.5 * (1 - y));
              if (g > 0) {
                const P = 1 / g;
                let w = P;
                for (let M = 1; M < g; M++, w += P) {
                  const k = [f[1] * (1 - w) + m[1] * w, -f[0] * (1 - w) - m[0] * w];
                  this.normalize(k), c.push([u[0] + k[0] * e, u[1] + k[1] * e]);
                }
              }
              c.push([u[0] + m[1] * e, u[1] - m[0] * e]);
            }
            break;
          case re.Square:
          default:
            if (_ < 0) c.push([u[0] + (f[1] + f[0]) * e, u[1] + (f[1] - f[0]) * e]), c.push([u[0] + (m[1] - m[0]) * e, u[1] - (m[0] + m[1]) * e]);
            else {
              const g = Math.sqrt((1 + Math.abs(y)) / 2), P = [m[0] - f[0], m[1] - f[1]];
              this.normalize(P);
              const w = e / g;
              c.push([u[0] - P[0] * w, u[1] - P[1] * w]);
            }
        }
      } else {
        const m = [u[0] - a[0], u[1] - a[1]];
        this.normalize(m), c.push([u[0] + m[1] * e, u[1] - m[0] * e]);
      }
      else {
        const m = [p[0] - u[0], p[1] - u[1]];
        this.normalize(m), c.push([u[0] + m[1] * e, u[1] - m[0] * e]);
      }
      a = u, u = p;
    }
    return c.length < (l ? 3 : 2) ? null : (l && c.push([c[0][0], c[0][1]]), c);
  }
};
const ir = 1.7320508075688772, Ol = 5, Dl = li.OpenEnded;
let Eo = class Je {
  static local() {
    return Je.instance === null && (Je.instance = new Je()), Je.instance;
  }
  execute(t, e, s, r, n) {
    return new Gl(t, e, s);
  }
};
Eo.instance = null;
let Gl = class extends Vi {
  constructor(t, e, s) {
    super(t, !1, !0), this._curveHelper = new Dt(), this._width = (e.width !== void 0 ? e.width : Ol) * s, this._arrowType = e.geometricEffectArrowType !== void 0 ? e.geometricEffectArrowType : e.arrowType !== void 0 ? e.arrowType : Dl, this._offsetFlattenError = $s * s;
  }
  processPath(t) {
    const e = N.createEmptyOptimizedCIM(t.geometryType);
    switch (this._arrowType) {
      case li.OpenEnded:
      default:
        this._constructSimpleArrow(e, t, !0);
        break;
      case li.Block:
        this._constructSimpleArrow(e, t, !1);
        break;
      case li.Crossed:
        this._constructCrossedArrow(e, t);
    }
    return e;
  }
  _constructSimpleArrow(t, e, s) {
    const r = e.pathLength();
    let n = this._width;
    r < 2 * n && (n = r / 2);
    const o = this._curveHelper.getSubCurve(e, 0, r - n);
    if (!o || !o.nextPath()) return;
    o.seekPathStart();
    const a = n / 2;
    if (this._curveHelper.isEmpty(o)) return;
    const h = ae(o), l = this._constructOffset(h, -a);
    if (!l) return;
    const c = this._constructOffset(h, a);
    if (!c) return;
    const u = this._constructArrowBasePoint(l, -a / 2);
    if (!u) return;
    const d = this._constructArrowBasePoint(c, a / 2);
    if (!d) return;
    e.seekInPath(e.pathSize - 1);
    const p = [e.x, e.y];
    t.pushPath(c), t.nextPath(), t.nextPoint(), t.setControlPoint(), t.pushPoint(d), t.nextPoint(), t.setControlPoint(), t.pushPoint(p), t.nextPoint(), t.setControlPoint(), t.pushPoint(u), t.nextPoint(), t.setControlPoint(), t.pushPoints(l.reverse()), t.setControlPoint(), s || (t.setControlPointAt(0), t.setControlPointAt(t.pathSize - 1), t.pushPoint(c[0])), t.reset();
  }
  _constructCrossedArrow(t, e) {
    const s = e.pathLength();
    let r = this._width;
    s < r * (1 + ir + 1) && (r = s / (1 + ir + 1)), e.seekPathStart();
    const n = this._curveHelper.getSubCurve(e, 0, s - r * (1 + ir));
    if (!n) return;
    n.nextPath();
    const o = r / 2;
    if (this._curveHelper.isEmpty(n)) return;
    const a = ae(n), h = this._constructOffset(a, o);
    if (!h) return;
    const l = this._constructOffset(a, -o);
    if (!l) return;
    const c = this._curveHelper.getSubCurve(e, 0, s - r);
    if (!c || (c.nextPath(), this._curveHelper.isEmpty(c))) return;
    const u = ae(c), d = this._constructOffset(u, o);
    if (!d) return;
    const p = this._constructOffset(u, -o);
    if (!p) return;
    const m = d[d.length - 1], f = this._constructArrowBasePoint(d, o / 2);
    if (!f) return;
    const _ = p[p.length - 1], y = this._constructArrowBasePoint(p, -o / 2);
    if (!y) return;
    e.seekInPath(e.pathSize - 1);
    const g = [e.x, e.y];
    t.pushPath(h), t.nextPath(), t.nextPoint(), t.setControlPoint(), t.pushPoint(_), t.nextPoint(), t.setControlPoint(), t.pushPoint(y), t.nextPoint(), t.setControlPoint(), t.pushPoint(g), t.nextPoint(), t.setControlPoint(), t.pushPoint(f), t.nextPoint(), t.setControlPoint(), t.pushPoint(m), t.nextPoint(), t.setControlPoint(), t.pushPoints(l.reverse()), t.nextPoint(), t.setControlPoint(), t.reset();
  }
  _constructOffset(t, e) {
    return this._curveHelper.offset(t, e, re.Rounded, 4, this._offsetFlattenError);
  }
  _constructArrowBasePoint(t, e) {
    if (!t || t.length < 2) return null;
    const s = t[t.length - 2], r = t[t.length - 1], n = [r[0] - s[0], r[1] - s[1]];
    return this._curveHelper.normalize(n), [r[0] + n[1] * e, r[1] - n[0] * e];
  }
}, No = class Qe {
  static local() {
    return Qe.instance === null && (Qe.instance = new Qe()), Qe.instance;
  }
  execute(t, e, s, r, n, o) {
    return new Bl(t, e, s, r, n, o);
  }
};
No.instance = null;
let Bl = class {
  constructor(t, e, s, r, n, o) {
    this._inputGeometries = t, this._tileKey = r, this._geometryEngine = n, this._curveHelper = new Dt(), this._size = (e.size !== void 0 ? e.size : 1) * s, this._maxInflateSize = o * s, this._offsetFlattenError = $s * s;
  }
  next() {
    let t;
    for (; t = this._inputGeometries.next(); ) {
      if (this._size === 0) return t;
      if (t.geometryType === "esriGeometryEnvelope") {
        if (this._size > 0) {
          const n = N.createEmptyOptimizedCIM(t.geometryType), o = zs(t)[0], a = this._curveHelper.offset(o, this._size, re.Rounded, 4, this._offsetFlattenError);
          if (a) return n.pushPath(a), n;
        } else if (this._size < 0) {
          const n = t.asJSON();
          if (Math.min(n.xmax - n.xmin, n.ymax - n.ymin) + 2 * this._size > 0) return N.fromJSONCIM({ xmin: n.xmin - this._size, xmax: n.xmax + this._size, ymin: n.ymin - this._size, ymax: n.ymax + this._size });
        }
      }
      const e = this._geometryEngine;
      if (e == null) return null;
      const s = this._tileKey ? nn(t, this._maxInflateSize) : t;
      if (!s) continue;
      const r = e.buffer(Kr.WebMercator, s.asJSON(), this._size, 1);
      return r ? N.fromJSONCIM(r) : null;
    }
    return null;
  }
}, Ao = class ts {
  static local() {
    return ts.instance === null && (ts.instance = new ts()), ts.instance;
  }
  execute(t, e, s, r, n) {
    return new Vl(t, e, s);
  }
};
Ao.instance = null;
let Vl = class {
  constructor(t, e, s) {
    this._defaultPointSize = 20, this._inputGeometries = t, this._geomUnitsPerPoint = s, this._rule = e.rule ?? T.FullGeometry, this._defaultSize = this._defaultPointSize * s;
  }
  next() {
    let t;
    for (; t = this._inputGeometries.next(); ) {
      const e = this._processGeom(zs(t));
      if (e && e.length) return N.fromJSONCIM({ paths: e });
    }
    return null;
  }
  _clone(t) {
    return [t[0], t[1]];
  }
  _mid(t, e) {
    return [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2];
  }
  _mix(t, e, s, r) {
    return [t[0] * e + s[0] * r, t[1] * e + s[1] * r];
  }
  _add(t, e) {
    return [t[0] + e[0], t[1] + e[1]];
  }
  _add2(t, e, s) {
    return [t[0] + e, t[1] + s];
  }
  _sub(t, e) {
    return [t[0] - e[0], t[1] - e[1]];
  }
  _dist(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
  }
  _norm(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  }
  _normalize(t, e = 1) {
    const s = e / this._norm(t);
    t[0] *= s, t[1] *= s;
  }
  _leftPerpendicular(t) {
    const e = -t[1], s = t[0];
    t[0] = e, t[1] = s;
  }
  _leftPerp(t) {
    return [-t[1], t[0]];
  }
  _rightPerpendicular(t) {
    const e = t[1], s = -t[0];
    t[0] = e, t[1] = s;
  }
  _rightPerp(t) {
    return [t[1], -t[0]];
  }
  _dotProduct(t, e) {
    return t[0] * e[0] + t[1] * e[1];
  }
  _crossProduct(t, e) {
    return t[0] * e[1] - t[1] * e[0];
  }
  _rotateDirect(t, e, s) {
    const r = t[0] * e - t[1] * s, n = t[0] * s + t[1] * e;
    t[0] = r, t[1] = n;
  }
  _makeCtrlPt(t) {
    const e = [t[0], t[1]];
    return sr(e, 1), e;
  }
  _addAngledTicks(t, e, s, r) {
    const n = this._sub(s, e);
    this._normalize(n);
    const o = this._crossProduct(n, this._sub(r, e));
    let a;
    a = o > 0 ? this._rightPerp(n) : this._leftPerp(n);
    const h = Math.abs(o) / 2, l = [];
    l.push([e[0] + (a[0] - n[0]) * h, e[1] + (a[1] - n[1]) * h]), l.push(e), l.push(s), l.push([s[0] + (a[0] + n[0]) * h, s[1] + (a[1] + n[1]) * h]), t.push(l);
  }
  _addBezier2(t, e, s, r, n) {
    if (n-- == 0) return void t.push(r);
    const o = this._mid(e, s), a = this._mid(s, r), h = this._mid(o, a);
    this._addBezier2(t, e, o, h, n), this._addBezier2(t, h, a, r, n);
  }
  _addBezier3(t, e, s, r, n, o) {
    if (o-- == 0) return void t.push(n);
    const a = this._mid(e, s), h = this._mid(s, r), l = this._mid(r, n), c = this._mid(a, h), u = this._mid(h, l), d = this._mid(c, u);
    this._addBezier3(t, e, a, c, d, o), this._addBezier3(t, d, u, l, n, o);
  }
  _add90DegArc(t, e, s, r, n) {
    const o = n ?? this._crossProduct(this._sub(s, e), this._sub(r, e)) > 0, a = this._mid(e, s), h = this._sub(a, e);
    o ? this._leftPerpendicular(h) : this._rightPerpendicular(h), a[0] += h[0], a[1] += h[1], this._addBezier3(t, e, this._mix(e, 0.33333, a, 0.66667), this._mix(s, 0.33333, a, 0.66667), s, 4);
  }
  _addArrow(t, e, s) {
    const r = e[0], n = e[1], o = e[e.length - 1], a = this._sub(r, n);
    this._normalize(a);
    const h = this._crossProduct(a, this._sub(o, n)), l = 0.5 * h, c = this._leftPerp(a), u = [o[0] - c[0] * h, o[1] - c[1] * h], d = e.length - 1, p = [];
    p.push(s ? [-c[0], -c[1]] : c);
    let m = [-a[0], -a[1]];
    for (let f = 1; f < d - 1; f++) {
      const _ = this._sub(e[f + 1], e[f]);
      this._normalize(_);
      const y = this._dotProduct(_, m), g = this._crossProduct(_, m), P = Math.sqrt((1 + y) / 2), w = this._sub(_, m);
      this._normalize(w), w[0] /= P, w[1] /= P, p.push(g < 0 ? [-w[0], -w[1]] : w), m = _;
    }
    p.push(this._rightPerp(m));
    for (let f = p.length - 1; f > 0; f--) t.push([e[f][0] + p[f][0] * l, e[f][1] + p[f][1] * l]);
    t.push([u[0] + p[0][0] * l, u[1] + p[0][1] * l]), t.push([u[0] + p[0][0] * h, u[1] + p[0][1] * h]), t.push(r), t.push([u[0] - p[0][0] * h, u[1] - p[0][1] * h]), t.push([u[0] - p[0][0] * l, u[1] - p[0][1] * l]);
    for (let f = 1; f < p.length; f++) t.push([e[f][0] - p[f][0] * l, e[f][1] - p[f][1] * l]);
  }
  _cp2(t, e, s) {
    return t.length >= 2 ? t[1] : this._add2(t[0], e * this._defaultSize, s * this._defaultSize);
  }
  _cp3(t, e, s, r) {
    if (t.length >= 3) return t[2];
    const n = this._mix(t[0], 1 - s, e, s), o = this._sub(e, t[0]);
    return this._normalize(o), this._rightPerpendicular(o), [n[0] + o[0] * r * this._defaultSize, n[1] + o[1] * r * this._defaultSize];
  }
  _arrowPath(t) {
    if (t.length > 2) return t;
    const e = t[0], s = this._cp2(t, -4, 0), r = this._sub(e, s);
    this._normalize(r);
    const n = this._rightPerp(r);
    return [e, s, [e[0] + (n[0] - r[0]) * this._defaultSize, e[1] + (n[1] - r[1]) * this._defaultSize]];
  }
  _arrowLastSeg(t) {
    const e = t[0], s = this._cp2(t, -4, 0);
    let r;
    if (t.length >= 3) r = t[t.length - 1];
    else {
      const n = this._sub(e, s);
      this._normalize(n);
      const o = this._rightPerp(n);
      r = [e[0] + (o[0] - n[0]) * this._defaultSize, e[1] + (o[1] - n[1]) * this._defaultSize];
    }
    return [s, r];
  }
  _processGeom(t) {
    if (!t) return null;
    const e = [];
    for (const s of t) {
      if (!s || s.length === 0) continue;
      const r = s.length;
      let n = s[0];
      switch (this._rule) {
        case T.PerpendicularFromFirstSegment: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 4), h = [];
          h.push(a), h.push(this._mid(n, o)), e.push(h);
          break;
        }
        case T.ReversedFirstSegment: {
          const o = this._cp2(s, 0, -1);
          e.push([o, n]);
          break;
        }
        case T.PerpendicularToSecondSegment: {
          const o = this._cp2(s, -4, 1), a = this._cp3(s, o, 0.882353, -1.94), h = [];
          h.push(this._mid(o, a)), h.push(n), e.push(h);
          break;
        }
        case T.SecondSegmentWithTicks: {
          const o = this._cp2(s, -4, 1), a = this._cp3(s, o, 0.882353, -1.94), h = this._sub(a, o);
          let l;
          l = this._crossProduct(h, this._sub(n, o)) > 0 ? this._rightPerp(l) : this._leftPerp(h);
          const c = [];
          c.push([o[0] + (l[0] - h[0]) / 3, o[1] + (l[1] - h[1]) / 3]), c.push(o), c.push(a), c.push([a[0] + (l[0] + h[0]) / 3, a[1] + (l[1] + h[1]) / 3]), e.push(c);
          break;
        }
        case T.DoublePerpendicular: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 3), h = this._mid(n, o), l = this._sub(h, a);
          this._normalize(l);
          const c = this._crossProduct(l, this._sub(n, a));
          this._leftPerpendicular(l);
          const u = [];
          u.push(n), u.push([a[0] + l[0] * c, a[1] + l[1] * c]), e.push(u);
          const d = [];
          d.push([a[0] - l[0] * c, a[1] - l[1] * c]), d.push(o), e.push(d);
          break;
        }
        case T.OppositeToFirstSegment: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 3), h = this._mid(n, o), l = this._sub(h, a);
          this._normalize(l);
          const c = this._crossProduct(l, this._sub(n, a));
          this._leftPerpendicular(l);
          const u = [];
          u.push([a[0] + l[0] * c, a[1] + l[1] * c]), u.push([a[0] - l[0] * c, a[1] - l[1] * c]), e.push(u);
          break;
        }
        case T.TriplePerpendicular: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 4), h = this._mid(n, o), l = this._sub(h, a);
          this._normalize(l);
          const c = this._crossProduct(l, this._sub(n, a));
          this._leftPerpendicular(l);
          const u = [];
          u.push([a[0] + l[0] * c * 0.8, a[1] + l[1] * c * 0.8]), u.push([h[0] + 0.8 * (n[0] - h[0]), h[1] + 0.8 * (n[1] - h[1])]), e.push(u), e.push([a, h]);
          const d = [];
          d.push([a[0] - l[0] * c * 0.8, a[1] - l[1] * c * 0.8]), d.push([h[0] + 0.8 * (o[0] - h[0]), h[1] + 0.8 * (o[1] - h[1])]), e.push(d);
          break;
        }
        case T.HalfCircleFirstSegment: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 4), h = this._mid(n, o);
          let l = this._sub(o, n);
          const c = Math.cos(Math.PI / 18), u = Math.sin(Math.PI / 18), d = Math.sqrt((1 + c) / 2), p = Math.sqrt((1 - c) / 2), m = [];
          let f;
          this._crossProduct(l, this._sub(a, n)) > 0 ? (m.push(n), l = this._sub(n, h), f = o) : (m.push(o), l = this._sub(o, h), f = n), this._rotateDirect(l, d, p), l[0] /= d, l[1] /= d;
          for (let _ = 1; _ <= 18; _++) m.push(this._add(h, l)), this._rotateDirect(l, c, u);
          m.push(f), e.push(m);
          break;
        }
        case T.HalfCircleSecondSegment: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 1, -1);
          let h = this._sub(n, o);
          this._normalize(h);
          const l = this._crossProduct(h, this._sub(a, o)) / 2;
          this._leftPerpendicular(h);
          const c = [o[0] + h[0] * l, o[1] + h[1] * l];
          h = this._sub(o, c);
          const u = Math.cos(Math.PI / 18);
          let d = Math.sin(Math.PI / 18);
          l > 0 && (d = -d);
          const p = [o];
          for (let m = 1; m <= 18; m++) this._rotateDirect(h, u, d), p.push(this._add(c, h));
          e.push(p);
          break;
        }
        case T.HalfCircleExtended: {
          const o = this._cp2(s, 0, -2), a = this._cp3(s, o, 1, -1);
          let h;
          if (r >= 4) h = s[3];
          else {
            const m = this._sub(n, o);
            h = this._add(a, m);
          }
          const l = this._dist(o, a) / 2 / 0.75, c = this._sub(o, n);
          this._normalize(c, l);
          const u = this._sub(a, h);
          this._normalize(u, l);
          const d = [h, a];
          e.push(d);
          const p = [this._clone(a)];
          this._addBezier3(p, a, this._add(a, u), this._add(o, c), o, 4), p.push(n), e.push(p);
          break;
        }
        case T.OpenCircle: {
          const o = this._cp2(s, -2, 0), a = this._sub(o, n), h = Math.cos(Math.PI / 18), l = -Math.sin(Math.PI / 18), c = [o];
          for (let u = 1; u <= 33; u++) this._rotateDirect(a, h, l), c.push(this._add(n, a));
          e.push(c);
          break;
        }
        case T.CoverageEdgesWithTicks: {
          const o = this._cp2(s, 0, -1);
          let a, h;
          if (r >= 3) a = s[2];
          else {
            const d = this._sub(o, n), p = this._leftPerp(d);
            a = [n[0] + p[0] - 0.25 * d[0], n[1] + p[1] - 0.25 * d[1]];
          }
          if (r >= 4) h = s[3];
          else {
            const d = this._mid(n, o), p = this._sub(n, o);
            this._normalize(p), this._leftPerpendicular(p);
            const m = this._crossProduct(p, this._sub(a, d));
            this._rightPerpendicular(p), h = [a[0] + p[0] * m * 2, a[1] + p[1] * m * 2];
          }
          const l = this._sub(o, n);
          let c, u;
          c = this._crossProduct(l, this._sub(a, n)) > 0 ? this._rightPerp(l) : this._leftPerp(l), u = [], u.push(a), u.push(n), u.push([n[0] + (c[0] - l[0]) / 3, n[1] + (c[1] - l[1]) / 3]), e.push(u), c = this._crossProduct(l, this._sub(h, o)) > 0 ? this._rightPerp(c) : this._leftPerp(l), u = [], u.push([o[0] + (c[0] + l[0]) / 3, o[1] + (c[1] + l[1]) / 3]), u.push(o), u.push(h), e.push(u);
          break;
        }
        case T.GapExtentWithDoubleTicks: {
          const o = this._cp2(s, 0, 2), a = this._cp3(s, o, 0, 1);
          let h;
          if (r >= 4) h = s[3];
          else {
            const l = this._sub(o, n);
            h = this._add(a, l);
          }
          this._addAngledTicks(e, n, o, this._mid(a, h)), this._addAngledTicks(e, a, h, this._mid(n, o));
          break;
        }
        case T.GapExtentMidline: {
          const o = this._cp2(s, 2, 0), a = this._cp3(s, o, 0, 1);
          let h;
          if (r >= 4) h = s[3];
          else {
            const c = this._sub(o, n);
            h = this._add(a, c);
          }
          const l = [];
          l.push(this._mid(n, a)), l.push(this._mid(o, h)), e.push(l);
          break;
        }
        case T.Chevron: {
          const o = this._cp2(s, -1, -1);
          let a;
          if (r >= 3) a = s[2];
          else {
            const h = this._sub(o, n);
            this._leftPerpendicular(h), a = this._add(n, h);
          }
          e.push([o, this._makeCtrlPt(n), a]);
          break;
        }
        case T.PerpendicularWithArc: {
          const o = this._cp2(s, 0, -2), a = this._cp3(s, o, 0.5, -1);
          let h = this._sub(o, n);
          const l = this._norm(h);
          h[0] /= l, h[1] /= l;
          const c = this._crossProduct(h, this._sub(a, n));
          let u = this._dotProduct(h, this._sub(a, n));
          u < 0.05 * l ? u = 0.05 * l : u > 0.95 * l && (u = 0.95 * l);
          const d = [n[0] + h[0] * u, n[1] + h[1] * u];
          this._leftPerpendicular(h);
          let p = [];
          p.push([d[0] - h[0] * c, d[1] - h[1] * c]), p.push([d[0] + h[0] * c, d[1] + h[1] * c]), e.push(p);
          const m = [o[0] + h[0] * c, o[1] + h[1] * c];
          h = this._sub(o, m);
          const f = Math.cos(Math.PI / 18);
          let _ = Math.sin(Math.PI / 18);
          c < 0 && (_ = -_), p = [n, o];
          for (let y = 1; y <= 9; y++) this._rotateDirect(h, f, _), p.push(this._add(m, h));
          e.push(p);
          break;
        }
        case T.ClosedHalfCircle: {
          const o = this._cp2(s, 2, 0), a = this._mid(n, o), h = this._sub(o, a), l = Math.cos(Math.PI / 18), c = Math.sin(Math.PI / 18), u = [n, o];
          for (let d = 1; d <= 18; d++) this._rotateDirect(h, l, c), u.push(this._add(a, h));
          e.push(u);
          break;
        }
        case T.TripleParallelExtended: {
          const o = this._cp2(s, 0, -2), a = this._cp3(s, o, 1, -2), h = this._mid(n, o), l = this._sub(a, o);
          this._normalize(l);
          const c = Math.abs(this._crossProduct(l, this._sub(h, o))) / 2, u = this._dist(o, a), d = [o, n];
          d.push([n[0] + l[0] * u * 0.5, n[1] + l[1] * u * 0.5]), e.push(d);
          const p = [];
          p.push([h[0] - l[0] * c, h[1] - l[1] * c]), p.push([h[0] + l[0] * u * 0.375, h[1] + l[1] * u * 0.375]), sr(p[p.length - 1], 1), p.push([h[0] + l[0] * u * 0.75, h[1] + l[1] * u * 0.75]), e.push(p);
          const m = [o, a];
          e.push(m);
          break;
        }
        case T.ParallelWithTicks: {
          const o = this._cp2(s, 3, 0), a = this._cp3(s, o, 0.5, -1), h = this._sub(a, o);
          this._normalize(h);
          const l = this._crossProduct(h, this._sub(a, n));
          this._leftPerpendicular(h), this._addAngledTicks(e, n, o, a), this._addAngledTicks(e, this._mix(n, 1, h, l), this._mix(o, 1, h, l), this._mid(n, o));
          break;
        }
        case T.Parallel: {
          const o = this._cp2(s, 3, 0), a = this._cp3(s, o, 0.5, -1), h = this._sub(o, n);
          this._normalize(h);
          const l = this._leftPerp(h), c = this._crossProduct(h, this._sub(a, n));
          let u = [n, o];
          e.push(u), u = [], u.push([n[0] + l[0] * c, n[1] + l[1] * c]), u.push([o[0] + l[0] * c, o[1] + l[1] * c]), e.push(u);
          break;
        }
        case T.PerpendicularToFirstSegment: {
          const o = this._cp2(s, 3, 0), a = this._cp3(s, o, 0.5, -1), h = this._mid(n, o), l = this._sub(o, n);
          this._normalize(l);
          const c = this._crossProduct(l, this._sub(a, n));
          this._leftPerpendicular(l);
          const u = [];
          u.push([h[0] - l[0] * c * 0.25, h[1] - l[1] * c * 0.25]), u.push([h[0] + l[0] * c * 1.25, h[1] + l[1] * c * 1.25]), e.push(u);
          break;
        }
        case T.ParallelOffset: {
          const o = this._cp2(s, 3, 0), a = this._cp3(s, o, 0.5, -1), h = this._sub(o, n);
          this._normalize(h);
          const l = this._crossProduct(h, this._sub(a, n));
          this._leftPerpendicular(h);
          const c = [];
          c.push([n[0] - h[0] * l, n[1] - h[1] * l]), c.push([o[0] - h[0] * l, o[1] - h[1] * l]), e.push(c);
          const u = [];
          u.push([n[0] + h[0] * l, n[1] + h[1] * l]), u.push([o[0] + h[0] * l, o[1] + h[1] * l]), e.push(u);
          break;
        }
        case T.OffsetOpposite: {
          const o = this._cp2(s, 3, 0), a = this._cp3(s, o, 0.5, -1), h = this._sub(o, n);
          this._normalize(h);
          const l = this._crossProduct(h, this._sub(a, n));
          this._leftPerpendicular(h);
          const c = [];
          c.push([n[0] - h[0] * l, n[1] - h[1] * l]), c.push([o[0] - h[0] * l, o[1] - h[1] * l]), e.push(c);
          break;
        }
        case T.OffsetSame: {
          const o = this._cp2(s, 3, 0), a = this._cp3(s, o, 0.5, -1), h = this._sub(o, n);
          this._normalize(h);
          const l = this._crossProduct(h, this._sub(a, n));
          this._leftPerpendicular(h);
          const c = [];
          c.push([n[0] + h[0] * l, n[1] + h[1] * l]), c.push([o[0] + h[0] * l, o[1] + h[1] * l]), e.push(c);
          break;
        }
        case T.CircleWithArc: {
          let o = this._cp2(s, 3, 0);
          const a = this._cp3(s, o, 0.5, -1);
          let h, l;
          if (r >= 4) h = s[3], l = this._crossProduct(this._sub(h, o), this._sub(a, o)) > 0;
          else {
            h = o, l = this._crossProduct(this._sub(h, n), this._sub(a, n)) > 0;
            const m = 24 * this._geomUnitsPerPoint, f = this._sub(h, n);
            this._normalize(f, m);
            const _ = Math.sqrt(2) / 2;
            this._rotateDirect(f, _, l ? _ : -_), o = this._add(n, f);
          }
          const c = this._sub(o, n), u = Math.cos(Math.PI / 18), d = Math.sin(Math.PI / 18), p = [o];
          for (let m = 1; m <= 36; m++) this._rotateDirect(c, u, d), p.push(this._add(n, c));
          this._add90DegArc(p, o, h, a, l), sr(p[p.length - 8], 1), e.push(p);
          break;
        }
        case T.DoubleJog: {
          let o, a, h = this._cp2(s, -3, 1);
          if (o = r >= 3 ? s[2] : this._add(n, this._sub(n, h)), r >= 4) a = s[3];
          else {
            const y = n;
            n = h, a = o;
            const g = this._dist(n, y), P = this._dist(a, y);
            let w = 30 * this._geomUnitsPerPoint;
            0.5 * g < w && (w = 0.5 * g), 0.5 * P < w && (w = 0.5 * P), h = this._mix(n, w / g, y, (g - w) / g), o = this._mix(a, w / P, y, (P - w) / P);
          }
          const l = this._mid(n, h), c = this._mid(a, o), u = this._dist(n, h), d = this._dist(o, a);
          let p = Math.min(u, d) / 8;
          p = Math.min(p, 24 * this._geomUnitsPerPoint);
          const m = Math.cos(Math.PI / 4);
          let f = this._sub(n, h);
          this._normalize(f, p), this._crossProduct(f, this._sub(a, h)) > 0 ? this._rotateDirect(f, m, -m) : this._rotateDirect(f, m, m);
          let _ = [];
          _.push(h), _.push(this._add(l, f)), _.push(this._sub(l, f)), _.push(n), e.push(_), f = this._sub(a, o), this._normalize(f, p), this._crossProduct(f, this._sub(n, o)) < 0 ? this._rotateDirect(f, m, m) : this._rotateDirect(f, m, -m), _ = [], _.push(o), _.push(this._add(c, f)), _.push(this._sub(c, f)), _.push(a), e.push(_);
          break;
        }
        case T.PerpendicularOffset: {
          const o = this._cp2(s, -4, 1), a = this._cp3(s, o, 0.882353, -1.94), h = this._sub(a, o);
          this._crossProduct(h, this._sub(n, o)) > 0 ? this._rightPerpendicular(h) : this._leftPerpendicular(h);
          const l = [h[0] / 8, h[1] / 8], c = this._sub(this._mid(o, a), l);
          e.push([c, n]);
          break;
        }
        case T.LineExcludingLastSegment: {
          const o = this._arrowPath(s), a = [];
          let h = o.length - 2;
          for (; h--; ) a.push(o[h]);
          e.push(a);
          break;
        }
        case T.MultivertexArrow: {
          const o = this._arrowPath(s), a = [];
          this._addArrow(a, o, !1), e.push(a);
          break;
        }
        case T.CrossedArrow: {
          const o = this._arrowPath(s), a = [];
          this._addArrow(a, o, !0), e.push(a);
          break;
        }
        case T.ChevronArrow: {
          const [o, a] = this._arrowLastSeg(s), h = 10 * this._geomUnitsPerPoint, l = this._sub(n, o);
          this._normalize(l);
          const c = this._crossProduct(l, this._sub(a, o)), u = this._leftPerp(l), d = [a[0] - u[0] * c * 2, a[1] - u[1] * c * 2], p = [];
          p.push([a[0] + l[0] * h, a[1] + l[1] * h]), p.push(n), p.push([d[0] + l[0] * h, d[1] + l[1] * h]), e.push(p);
          break;
        }
        case T.ChevronArrowOffset: {
          const [o, a] = this._arrowLastSeg(s), h = this._sub(n, o);
          this._normalize(h);
          const l = this._crossProduct(h, this._sub(a, o));
          this._leftPerpendicular(h);
          const c = [a[0] - h[0] * l, a[1] - h[1] * l], u = [];
          u.push([c[0] + h[0] * l * 0.5, c[1] + h[1] * l * 0.5]), u.push(this._mid(c, n)), u.push([c[0] - h[0] * l * 0.5, c[1] - h[1] * l * 0.5]), e.push(u);
          break;
        }
        case T.PartialFirstSegment: {
          const [o, a] = this._arrowLastSeg(s), h = this._sub(n, o);
          this._normalize(h);
          const l = this._crossProduct(h, this._sub(a, o));
          this._leftPerpendicular(h);
          const c = [a[0] - h[0] * l, a[1] - h[1] * l];
          e.push([o, c]);
          break;
        }
        case T.Arch: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 1), h = this._sub(n, o), l = this._mix(a, 1, h, 0.55), c = this._mix(a, 1, h, -0.55), u = [n];
          this._addBezier2(u, n, l, a, 4), this._addBezier2(u, a, c, o, 4), e.push(u);
          break;
        }
        case T.CurvedParallelTicks: {
          const o = this._cp2(s, -4, 1), a = this._cp3(s, o, 0.882353, -1.94), h = this._sub(a, o);
          this._crossProduct(h, this._sub(n, o)) > 0 ? this._rightPerpendicular(h) : this._leftPerpendicular(h);
          const l = [h[0] / 8, h[1] / 8], c = this._sub(this._mid(o, a), l), u = this._sub(this._mix(o, 0.75, a, 0.25), l), d = this._sub(this._mix(o, 0.25, a, 0.75), l), p = [o];
          this._addBezier2(p, o, u, c, 3), this._addBezier2(p, c, d, a, 3), e.push(p);
          for (let m = 0; m < 8; m++) {
            const f = p[2 * m + 1], _ = [this._clone(f)];
            _.push(this._add(f, [h[0] / 4, h[1] / 4])), e.push(_);
          }
          break;
        }
        case T.Arc90Degrees: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 1), h = [o];
          this._add90DegArc(h, o, n, a), e.push(h);
          break;
        }
        case T.FullGeometry:
        default:
          e.push(s);
      }
    }
    return e;
  }
}, Fo = class es {
  static local() {
    return es.instance === null && (es.instance = new es()), es.instance;
  }
  execute(t, e, s, r, n) {
    return new Yl(t, e, s);
  }
};
Fo.instance = null;
let Yl = class extends Vi {
  constructor(t, e, s) {
    super(t, !0, !0), this._curveHelper = new Dt(), this._beginCut = (e.beginCut !== void 0 ? e.beginCut : 1) * s, this._endCut = (e.endCut !== void 0 ? e.endCut : 1) * s, this._middleCut = (e.middleCut !== void 0 ? e.middleCut : 0) * s, this._invert = e.invert !== void 0 && e.invert, this._beginCut < 0 && (this._beginCut = 0), this._endCut < 0 && (this._endCut = 0), this._middleCut < 0 && (this._middleCut = 0);
  }
  processPath(t) {
    const { _beginCut: e, _endCut: s, _middleCut: r } = this, n = t.pathLength(), o = N.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._invert) {
      if (e !== 0 || s !== 0 || r !== 0) if (e + s + r >= n) for (o.startPath(); t.nextPoint(); ) o.pushXY(t.x, t.y);
      else this._curveHelper.appendSubCurve(o, t, 0, e), this._curveHelper.appendSubCurve(o, t, 0.5 * (n - r), 0.5 * (n + r)), this._curveHelper.appendSubCurve(o, t, n - s, s);
    } else if (e === 0 && s === 0 && r === 0) for (o.startPath(); t.nextPoint(); ) o.pushXY(t.x, t.y);
    else e + s + r < n && (r === 0 ? this._curveHelper.appendSubCurve(o, t, e, n - s) : (this._curveHelper.appendSubCurve(o, t, e, 0.5 * (n - r)), this._curveHelper.appendSubCurve(o, t, 0.5 * (n + r), n - s)));
    return o.totalSize === 0 ? null : o;
  }
};
const Gn = 1e-7;
let Yi = class {
  constructor() {
    this._values = [], this.extPtGap = 0, this.ctrlPtGap = 0, this._length = 0, this._currentValue = 0;
  }
  isEmpty() {
    return this._values.length === 0;
  }
  size() {
    return this._values.length;
  }
  init(t, e, s = !0) {
    if (this._setEmpty(), !t || t.length === 0) return !1;
    for (let r = 0; r < t.length; r++) {
      let n = Math.abs(t[r]);
      s && n < Gn && (n = Gn), this._values.push(n), this._length += n;
    }
    return e && 1 & t.length && (this._length *= 2), this._length !== 0 && (this.ctrlPtGap = this.extPtGap = 0, this._currentValue = -1, !0);
  }
  scale(t) {
    const e = this._values ? this._values.length : 0;
    for (let s = 0; s < e; ++s) this._values[s] *= t;
    this._length *= t, this.extPtGap *= t, this.ctrlPtGap *= t;
  }
  addValue(t) {
    this._length += t, this._values.push(t);
  }
  firstValue() {
    return this._values[0];
  }
  lastValue() {
    return this._values[this._values.length - 1];
  }
  nextValue() {
    return this._currentValue++, this._currentValue === this._values.length && (this._currentValue = 0), this._values[this._currentValue];
  }
  reset() {
    this._currentValue = -1;
  }
  length() {
    return this._length;
  }
  _setEmpty() {
    this.extPtGap = this.ctrlPtGap = this._length = 0, this._currentValue = -1, this._values.length = 0;
  }
}, zt = class {
  constructor() {
    this.pt = null, this.ca = 0, this.sa = 0;
  }
};
var Yt;
(function(i) {
  i[i.FAIL = 0] = "FAIL", i[i.END = 1] = "END", i[i.CONTINUE = 2] = "CONTINUE";
})(Yt || (Yt = {}));
let Ws = class {
  constructor() {
    this.reset();
  }
  reset() {
    this.segment = null, this.segmentLength = 0, this.abscissa = 0, this.isPathEnd = !1, this.isPartEnd = !1;
  }
  isValid() {
    return this.segment !== null;
  }
  copyTo(t) {
    t.segment = this.segment, t.segmentLength = this.segmentLength, t.abscissa = this.abscissa, t.isPathEnd = this.isPathEnd, t.isPartEnd = this.isPartEnd;
  }
}, Hi = class extends Dt {
  constructor(t = 0, e = !1) {
    super(t, e), this._tolerance = $s, this._currentPosition = new Ws();
  }
  updateTolerance(t) {
    this._tolerance = $s * t;
  }
  init(t, e, s = !0) {
    return s ? (this._patternLength = e.length(), this._partExtPtGap = e.extPtGap, this._partCtrlPtGap = e.ctrlPtGap) : (this._patternLength = 0, this._partExtPtGap = 0, this._partCtrlPtGap = 0), this._currentPosition.reset(), this._partSegCount = 0, this._pathCursor = t, this._seg = -1, this._setPosAtNextPart();
  }
  curPositionIsValid() {
    return this._currentPosition.isValid();
  }
  nextPosition(t, e = Yt.FAIL) {
    const s = new Ws();
    return !!this._nextPosition(t, s, null, e) && (s.copyTo(this._currentPosition), !0);
  }
  curPointAndAngle(t) {
    t.pt = this._getPoint(this._currentPosition);
    const [e, s] = this._getAngleCS(this._currentPosition);
    t.ca = e, t.sa = s;
  }
  nextPointAndAngle(t, e, s = Yt.FAIL) {
    const r = new Ws();
    if (!this._nextPosition(t, r, null, s)) return !1;
    r.copyTo(this._currentPosition), e.pt = this._getPoint(r);
    const [n, o] = this._getAngleCS(r);
    return e.ca = n, e.sa = o, !0;
  }
  nextCurve(t) {
    if (t === 0) return null;
    const e = N.createEmptyOptimizedCIM("esriGeometryPolyline");
    e.startPath(), e.nextPath();
    const s = new Ws();
    return this._nextPosition(t, s, e, Yt.END) ? (s.copyTo(this._currentPosition), e) : null;
  }
  isPathEnd() {
    return this._currentPosition.isPathEnd;
  }
  getPathEnd() {
    return this._currentPosition.segment[1];
  }
  getPt(t) {
    return this._pathCursor.seekInPath(t), [this._pathCursor.x, this._pathCursor.y];
  }
  getSeg(t) {
    return [this.getPt(t), this.getPt(t + 1)];
  }
  _nextPosition(t, e, s, r) {
    if (this._currentPosition.isPathEnd) return !1;
    let n = this._currentPosition.abscissa;
    for (this._currentPosition.segmentLength > 0 && (n /= this._currentPosition.segmentLength), this._currentPosition.copyTo(e); e.abscissa + t * this._partLengthRatio > e.segmentLength + this._tolerance; ) {
      if (s) {
        if (s.pathSize === 0) if (n === 0) {
          const a = e.segment[0];
          s.pushXY(a[0], a[1]);
        } else s.pushPoint(this.getSegCoord2D(e.segment, n));
        const o = e.segment[1];
        s.pushXY(o[0], o[1]);
      }
      if (n = 0, t -= (e.segmentLength - e.abscissa) / this._partLengthRatio, this._partSegCount) e.segment = this._nextSegment(), e.segmentLength = this.getSegLength(e.segment), e.abscissa = 0, this._partSegCount--;
      else {
        if (!this._setPosAtNextPart()) return r !== Yt.FAIL && (e.segmentLength = this.getSegLength(e.segment), e.isPartEnd = !0, r === Yt.END ? (e.abscissa = e.segmentLength, e.isPathEnd = !0) : e.abscissa = e.segmentLength + t, !0);
        this._currentPosition.copyTo(e);
      }
    }
    if (e.abscissa += t * this._partLengthRatio, s) {
      s.pathSize === 0 && (n === 0 ? s.pushPoint(e.segment[0]) : s.pushPoint(this.getSegCoord2D(e.segment, n)));
      const o = e.abscissa / e.segmentLength;
      o === 1 ? s.pushPoint(e.segment[1]) : s.pushPoint(this.getSegCoord2D(e.segment, o));
    }
    return this._partSegCount || Math.abs(e.abscissa - e.segmentLength) < this._tolerance && (e.isPathEnd = this._partIsLast, e.isPartEnd = !0), !0;
  }
  _getPoint(t) {
    const e = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
    return this.getSegCoord2D(this._currentPosition.segment, e);
  }
  _getAngleCS(t) {
    const e = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
    return this.getSegAngleCS(this._currentPosition.segment, e);
  }
  _setPosAtNextPart() {
    for (; this._partSegCount; ) this._hasNextSegment() && this._nextSegment(), this._partSegCount--;
    if (!this._hasNextSegment()) return !1;
    for (this._partLength = 0, this._partIsLast = !0, this._partSegCount = 0; this._hasNextSegment(); ) if (this._partLength += this.getSegLength(this._nextSegment()), this._partSegCount++, this._pathCursor.getControlPointAt(this._getEndPointIndex())) {
      this._partIsLast = !this._hasNextSegment();
      break;
    }
    let t = this._partSegCount;
    for (; t; ) this._previousSegment(), --t;
    this._currentPosition.segment = this._nextSegment(), this._currentPosition.segmentLength = this.getSegLength(this._currentPosition.segment), this._currentPosition.abscissa = 0, this._currentPosition.isPathEnd = this._currentPosition.isPartEnd = !1, --this._partSegCount;
    const e = this._getStartPointIndex();
    this._ctrlPtBegin = this._pathCursor.getControlPointAt(e);
    let s = e + this._partSegCount + 1;
    if (s >= this._pathCursor.pathSize && (s = 0), this._ctrlPtEnd = this._pathCursor.getControlPointAt(s), this._patternLength > 0) {
      const r = this._ctrlPtBegin ? this._partCtrlPtGap : this._partExtPtGap, n = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;
      let o = Math.round((this._partLength - (r + n)) / this._patternLength);
      o <= 0 && (o = r + n > 0 ? 0 : 1), this._partLengthRatio = this._partLength / (r + n + o * this._patternLength), this._partLengthRatio < 0.01 && (this._partLengthRatio = 1);
    } else this._partLengthRatio = 1;
    return !0;
  }
  _hasNextSegment() {
    return this._seg < this._pathCursor.pathSize - 2;
  }
  _previousSegment() {
    return this.getSeg(--this._seg);
  }
  _nextSegment() {
    return this.getSeg(++this._seg);
  }
  _getStartPointIndex() {
    return this._seg;
  }
  _getEndPointIndex() {
    return this._seg + 1;
  }
}, Ro = class ss {
  static local() {
    return ss.instance === null && (ss.instance = new ss()), ss.instance;
  }
  execute(t, e, s, r, n) {
    return new Hl(t, e, s);
  }
};
Ro.instance = null;
let Hl = class extends Vi {
  constructor(t, e, s) {
    super(t, !0, !0), this._firstCurve = null, this._walker = new Hi(), this._walker.updateTolerance(s), this._endings = e.lineDashEnding, this._customDashPos = -(e.offsetAlongLine ?? 0) * s, this._offsetAtEnd = (e.customEndingOffset ?? 0) * s, this._pattern = new Yi(), this._pattern.init(uh(e).dashTemplate, !0), this._pattern.scale(s);
  }
  processPath(t) {
    if (this._pattern.length() === 0) {
      this.iteratePath = !1;
      const r = ae(t);
      return N.fromJSONCIM({ paths: [r] });
    }
    if (!this.iteratePath) {
      let r = !0;
      switch (this._endings) {
        case Q.HalfPattern:
        case Q.HalfGap:
        default:
          this._pattern.extPtGap = 0;
          break;
        case Q.FullPattern:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.firstValue());
          break;
        case Q.FullGap:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.lastValue());
          break;
        case Q.NoConstraint:
          this.isClosed || (r = !1);
          break;
        case Q.Custom:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
      }
      const n = t.pathLength();
      if (this._pattern.isEmpty() || n < 0.1 * this._pattern.length()) {
        const o = ae(t);
        return N.fromJSONCIM({ paths: [o] });
      }
      if (!this._walker.init(t, this._pattern, r)) {
        const o = ae(t);
        return N.fromJSONCIM({ paths: [o] });
      }
    }
    let e;
    if (this.iteratePath) e = this._pattern.nextValue();
    else {
      let r;
      switch (this._endings) {
        case Q.HalfPattern:
        default:
          r = 0.5 * this._pattern.firstValue();
          break;
        case Q.HalfGap:
          r = 0.5 * -this._pattern.lastValue();
          break;
        case Q.FullGap:
          r = -this._pattern.lastValue();
          break;
        case Q.FullPattern:
          r = 0;
          break;
        case Q.NoConstraint:
        case Q.Custom:
          r = -this._customDashPos;
      }
      let n = r / this._pattern.length();
      n -= Math.floor(n), r = n * this._pattern.length(), this._pattern.reset(), e = this._pattern.nextValue();
      let o = !1;
      for (; r >= e; ) r -= e, e = this._pattern.nextValue(), o = !o;
      e -= r, o ? (this._walker.nextPosition(e), e = this._pattern.nextValue()) : this.isClosed && (this._firstCurve = this._walker.nextCurve(e), e = this._pattern.nextValue(), this._walker.nextPosition(e), e = this._pattern.nextValue());
    }
    let s = this._walker.nextCurve(e);
    if (s) if (this._walker.isPathEnd()) {
      if (this.iteratePath = !1, this._firstCurve) {
        for (this._firstCurve.nextPath(); this._firstCurve.nextPoint(); ) s.pushXY(this._firstCurve.x, this._firstCurve.y);
        this._firstCurve = null;
      }
    } else e = this._pattern.nextValue(), !this._walker.nextPosition(e) || this._walker.isPathEnd() ? (this.iteratePath = !1, this._firstCurve && (s.pushCursor(this._firstCurve), this._firstCurve = null)) : this.iteratePath = !0;
    else this.iteratePath = !1, s = this._firstCurve, this._firstCurve = null;
    return s?.reset(), s;
  }
}, Oo = class is {
  static local() {
    return is.instance === null && (is.instance = new is()), is.instance;
  }
  execute(t, e, s, r, n, o) {
    return new Ul(t, e, s, r, n, o);
  }
};
Oo.instance = null;
let Ul = class {
  constructor(t, e, s, r, n, o) {
    switch (this._inputGeometries = t, this._tileKey = r, this._geometryEngine = n, this._maxInflateSize = o * s, this._width = (e.width !== void 0 ? e.width : 2) * s, e.method) {
      case De.Mitered:
      case De.Bevelled:
      case De.Rounded:
      case De.TrueBuffer:
      case De.Square:
    }
    this._option = e.option;
  }
  next() {
    let t;
    for (; t = this._inputGeometries.next(); ) {
      if (t.geometryType === "esriGeometryEnvelope" && this._width > 0) {
        const e = t.asJSON();
        return Math.min(e.xmax - e.xmin, e.ymax - e.ymin) - 2 * this._width < 0 ? t : N.fromJSONCIM({ paths: [[[e.xmin + this._width, e.ymin + this._width], [e.xmax - this._width, e.ymin + this._width], [e.xmax - this._width, e.ymax - this._width], [e.xmin + this._width, e.ymax - this._width], [e.xmin + this._width, e.ymin + this._width]], [[e.xmin, e.ymin], [e.xmin, e.ymax], [e.xmax, e.ymax], [e.xmax, e.ymin], [e.xmin, e.ymin]]] });
      }
      if (t.geometryType === "esriGeometryPolygon") {
        if (this._width === 0) return t.clone();
        const e = this._geometryEngine;
        if (e == null) return null;
        const s = this._tileKey ? nn(t, this._maxInflateSize) : t.clone();
        if (!s) continue;
        const r = e.buffer(Kr.WebMercator, s.asJSON(), -this._width, 1);
        if (r) {
          for (const n of r.rings) if (n) {
            s.startPath();
            for (const o of n.reverse()) s.pushXY(o[0], s.yFactor * o[1]);
          }
        }
        return s;
      }
    }
    return null;
  }
}, Do = class rs {
  static local() {
    return rs.instance === null && (rs.instance = new rs()), rs.instance;
  }
  execute(t, e, s, r, n) {
    return new Xl(t, e, s);
  }
};
Do.instance = null;
let Xl = class extends Vi {
  constructor(t, e, s) {
    super(t, !1, !0), this._curveHelper = new Dt(), this._length = (e.length !== void 0 ? e.length : 20) * s, this._angle = e.angle !== void 0 ? e.angle : 225, this._position = e.position !== void 0 ? e.position : 50, this._length < 0 && (this._length = -this._length), this._position < 20 && (this._position = 20), this._position > 80 && (this._position = 80), this._mirror = !1;
  }
  processPath(t) {
    const e = N.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._curveHelper.isEmpty(t)) return null;
    t.seekInPath(0);
    const s = t.x, r = t.y;
    t.seekInPath(t.pathSize - 1);
    const n = t.x, o = t.y, a = [n - s, o - r];
    this._curveHelper.normalize(a);
    const h = s + (n - s) * this._position / 100, l = r + (o - r) * this._position / 100, c = Math.cos((90 - this._angle) / 180 * Math.PI);
    let u = Math.sin((90 - this._angle) / 180 * Math.PI);
    this._mirror && (u = -u), this._mirror = !this._mirror;
    const d = [h - this._length / 2 * c, l - this._length / 2 * u], p = [h + this._length / 2 * c, l + this._length / 2 * u];
    return e.pushPath([[s, r], d, p, [n, o]]), e;
  }
}, Go = class ns {
  static local() {
    return ns.instance === null && (ns.instance = new ns()), ns.instance;
  }
  execute(t, e, s, r, n) {
    return new Wl(t, e, s);
  }
};
Go.instance = null;
let Wl = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._offsetX = e.offsetX !== void 0 ? e.offsetX * s : 0, this._offsetY = e.offsetY !== void 0 ? e.offsetY * s : 0;
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (t.totalSize > 0) return this._move(t.clone(), this._offsetX, this._offsetY);
      t = this._inputGeometries.next();
    }
    return null;
  }
  _move(t, e, s) {
    for (; t.nextPath(); ) for (; t.nextPoint(); ) t.x = t.x + e, t.y = t.y + s;
    return t.reset(), t;
  }
};
const ql = 10;
let Bo = class os {
  static local() {
    return os.instance === null && (os.instance = new os()), os.instance;
  }
  execute(t, e, s, r, n, o) {
    return new Zl(t, e, s, r, n, o);
  }
};
Bo.instance = null;
let Zl = class {
  constructor(t, e, s, r, n, o) {
    this._inputGeometries = t, this._tileKey = r, this._geometryEngine = n, this._curveHelper = new Dt(), this._offset = (e.offset ?? 1) * s, this._method = e.method, this._maxInflateSize = Math.max(Math.abs(o * s), ql), this._option = e.option, this._offsetFlattenError = $s * s;
  }
  next() {
    let t;
    for (; t = this._inputGeometries.next(); ) {
      if (this._offset === 0) return t.clone();
      if (t.geometryType === "esriGeometryEnvelope") {
        if (this._method === re.Rounded && this._offset > 0) {
          const o = ae(t), a = this._curveHelper.offset(o, -this._offset, this._method, 4, this._offsetFlattenError);
          if (a) {
            const h = N.createEmptyOptimizedCIM(t.geometryType);
            return h.pushPath(a), h;
          }
          return null;
        }
        const n = t.asJSON();
        if (_t(n) && Math.min(n.xmax - n.xmin, n.ymax - n.ymin) + 2 * this._offset > 0) return N.fromJSONCIM({ xmin: n.xmin - this._offset, xmax: n.xmax + this._offset, ymin: n.ymin - this._offset, ymax: n.ymax + this._offset });
      }
      const e = this._geometryEngine;
      if (e == null) continue;
      const s = this._tileKey ? nn(t, this._maxInflateSize) : t.clone();
      if (!s) continue;
      const r = e.offset(Kr.WebMercator, s.asJSON(), -this._offset, 1, this._method, 4, this._offsetFlattenError);
      return r ? N.fromJSONCIM(r) : null;
    }
    return null;
  }
}, Vo = class as {
  static local() {
    return as.instance === null && (as.instance = new as()), as.instance;
  }
  execute(t, e, s, r, n) {
    return new jl(t, e, s);
  }
};
Vo.instance = null;
let jl = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._reverse = e.reverse === void 0 || e.reverse;
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (!this._reverse) return t;
      if (t.geometryType === "esriGeometryPolyline") return Kl(t.clone());
      t = this._inputGeometries.next();
    }
    return null;
  }
};
function Kl(i) {
  for (; i.nextPath(); ) for (let t = 0; t < i.pathSize / 2; t++) {
    i.seekInPath(t);
    const e = i.x, s = i.y;
    i.seekInPath(i.pathSize - t - 1);
    const r = i.x, n = i.y;
    i.x = e, i.y = s, i.seekInPath(t), i.x = r, i.y = n;
  }
  return i.reset(), i;
}
let Yo = class hs {
  static local() {
    return hs.instance === null && (hs.instance = new hs()), hs.instance;
  }
  execute(t, e, s, r, n) {
    return new Jl(t, e, s);
  }
};
Yo.instance = null;
let Jl = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._rotateAngle = e.angle !== void 0 ? e.angle * Math.PI / 180 : 0;
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (this._rotateAngle === 0 || t.geometryType === "esriGeometryPoint") return t;
      if (t.totalSize > 0) {
        const e = Gi(t), s = (e[2] + e[0]) / 2, r = (e[3] + e[1]) / 2;
        return t.reset(), this._rotate(t.clone(), s, r);
      }
      t = this._inputGeometries.next();
    }
    return null;
  }
  _rotate(t, e, s) {
    const r = Math.cos(this._rotateAngle), n = Math.sin(this._rotateAngle);
    for (; t.nextPath(); ) for (; t.nextPoint(); ) {
      const o = t.x - e, a = t.y - s;
      t.x = e + o * r - a * n, t.y = s + o * n + a * r;
    }
    return t.reset(), t;
  }
}, Ho = class ls {
  static local() {
    return ls.instance === null && (ls.instance = new ls()), ls.instance;
  }
  execute(t, e, s, r, n) {
    return new Ql(t, e, s);
  }
};
Ho.instance = null;
let Ql = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._xFactor = e.XScaleFactor !== void 0 ? e.XScaleFactor : 1.15, this._yFactor = e.YScaleFactor !== void 0 ? e.YScaleFactor : 1.15;
  }
  next() {
    const t = this._inputGeometries.next();
    if (t) {
      if (this._xFactor === 1 && this._yFactor === 1 || t.geometryType === "esriGeometryPoint") return t;
      if (t.totalSize > 0) {
        const e = Gi(t), s = (e[2] + e[0]) / 2, r = (e[3] + e[1]) / 2;
        return t.reset(), this._scaleCursor(t.clone(), s, r);
      }
    }
    return null;
  }
  _scaleCursor(t, e, s) {
    for (; t.nextPath(); ) for (; t.nextPoint(); ) t.x = e + (t.x - e) * this._xFactor, t.y = s + (t.y - s) * this._yFactor;
    return t.reset(), t;
  }
}, Uo = class cs {
  static local() {
    return cs.instance === null && (cs.instance = new cs()), cs.instance;
  }
  execute(t, e, s, r, n) {
    return new tc(t, e, s);
  }
};
Uo.instance = null;
let tc = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._height = (e.amplitude !== void 0 ? e.amplitude : 2) * s, this._period = (e.period !== void 0 ? e.period : 3) * s, this._style = e.waveform, this._height <= 0 && (this._height = Math.abs(this._height)), this._period <= 0 && (this._period = Math.abs(this._period)), this._pattern = new Yi(), this._pattern.addValue(this._period), this._pattern.addValue(this._period), this._walker = new Hi(), this._walker.updateTolerance(s);
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (this._height === 0 || this._period === 0) return t;
      const e = this._processGeom(t);
      if (e) return e;
      t = this._inputGeometries.next();
    }
    return null;
  }
  _processGeom(t) {
    const e = N.createEmptyOptimizedCIM(t.geometryType);
    for (; t.nextPath(); ) {
      e.startPath();
      const s = t.pathLength();
      if (this._walker.init(t, this._pattern)) switch (this._style) {
        case Gs.Sinus:
        default:
          this._constructCurve(e, s, !1);
          break;
        case Gs.Square:
          this._constructSquare(e, s);
          break;
        case Gs.Triangle:
          this._constructTriangle(e, s);
          break;
        case Gs.Random:
          this._constructCurve(e, s, !0);
      }
      else for (; t.nextPoint(); ) e.pushXY(t.x, t.y);
    }
    return e;
  }
  _constructCurve(t, e, s) {
    let r = Math.round(e / this._period);
    r === 0 && (r = 1);
    const n = r * 16 + 1, o = e / r, a = this._period / 16, h = 1 / n, l = 2 * Math.PI * e / o, c = 2 * Math.PI * Math.random(), u = 2 * Math.PI * Math.random(), d = 2 * Math.PI * Math.random(), p = 0.75 - Math.random() / 2, m = 0.75 - Math.random() / 2, f = new zt();
    this._walker.curPointAndAngle(f), t.pushPoint(f.pt);
    let _ = 0;
    for (; ; ) {
      if (!this._walker.nextPointAndAngle(a, f)) {
        t.pushPoint(this._walker.getPathEnd());
        break;
      }
      {
        const y = _;
        let g;
        if (_ += h, s) {
          const P = this._height / 2 * (1 + 0.3 * Math.sin(p * l * y + c));
          g = P * Math.sin(l * y + u), g += P * Math.sin(m * l * y + d), g /= 2;
        } else g = 0.5 * this._height * Math.sin(0.5 * l * y);
        t.pushXY(f.pt[0] - g * f.sa, f.pt[1] + g * f.ca);
      }
    }
  }
  _constructSquare(t, e) {
    Math.round(e / this._period);
    let s = !0;
    for (; ; ) {
      let r = !1;
      if (this._walker.curPositionIsValid()) {
        const n = new zt();
        this._walker.curPointAndAngle(n);
        const o = new zt();
        if (this._walker.nextPointAndAngle(this._period, o)) {
          const a = new zt();
          this._walker.nextPointAndAngle(this._period, a) && (s ? (t.pushPoint(n.pt), s = !1) : t.pushPoint(n.pt), t.pushXY(n.pt[0] - this._height / 2 * n.sa, n.pt[1] + this._height / 2 * n.ca), t.pushXY(o.pt[0] - this._height / 2 * o.sa, o.pt[1] + this._height / 2 * o.ca), t.pushXY(o.pt[0] + this._height / 2 * o.sa, o.pt[1] - this._height / 2 * o.ca), t.pushXY(a.pt[0] + this._height / 2 * a.sa, a.pt[1] - this._height / 2 * a.ca), r = !0);
        }
      }
      if (!r) {
        t.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
  _constructTriangle(t, e) {
    Math.round(e / this._period);
    let s = !0;
    for (; ; ) {
      let r = !1;
      if (this._walker.curPositionIsValid()) {
        const n = new zt();
        this._walker.curPointAndAngle(n);
        const o = new zt();
        if (this._walker.nextPointAndAngle(this._period / 2, o)) {
          const a = new zt();
          this._walker.nextPointAndAngle(this._period, a) && (this._walker.nextPosition(this._period / 2) && (s ? (t.pushPoint(n.pt), s = !1) : t.pushPoint(n.pt), t.pushXY(o.pt[0] - this._height / 2 * o.sa, o.pt[1] + this._height / 2 * o.ca), t.pushXY(a.pt[0] + this._height / 2 * a.sa, a.pt[1] - this._height / 2 * a.ca)), r = !0);
        }
      }
      if (!r) {
        t.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
}, Xo = class us {
  static local() {
    return us.instance === null && (us.instance = new us()), us.instance;
  }
  execute(t, e, s, r, n) {
    return new ec(t, e, s);
  }
};
Xo.instance = null;
let ec = class extends Ls {
  constructor(t, e, s) {
    super(t), this._geometryWalker = new Hi(), this._geometryWalker.updateTolerance(s), this._angleToLine = e.angleToLine ?? !0, this._offset = (e.offset ? e.offset : 0) * s, this._originalEndings = e.endings, this._offsetAtEnd = (e.customEndingOffset ? e.customEndingOffset : 0) * s, this._position = -(e.offsetAlongLine ? e.offsetAlongLine : 0) * s, this._pattern = new Yi(), this._pattern.init(e.placementTemplate, !1), this._pattern.scale(s), this._endings = this._originalEndings;
  }
  processPath(t) {
    if (this._pattern.isEmpty()) return null;
    let e;
    if (this.iteratePath) e = this._pattern.nextValue();
    else {
      this._originalEndings === Ct.WithFullGap && this.isClosed ? this._endings = Ct.WithMarkers : this._endings = this._originalEndings, this._pattern.extPtGap = 0;
      let r, n = !0;
      switch (this._endings) {
        case Ct.NoConstraint:
          r = -this._position, r = this._adjustPosition(r), n = !1;
          break;
        case Ct.WithHalfGap:
        default:
          r = -this._pattern.lastValue() / 2;
          break;
        case Ct.WithFullGap:
          r = -this._pattern.lastValue(), this._pattern.extPtGap = this._pattern.lastValue();
          break;
        case Ct.WithMarkers:
          r = 0;
          break;
        case Ct.Custom:
          r = -this._position, r = this._adjustPosition(r), this._pattern.extPtGap = 0.5 * this._offsetAtEnd;
      }
      if (!this._geometryWalker.init(t, this._pattern, n)) return null;
      this._pattern.reset();
      let o = 0;
      for (; r > o; ) r -= o, o = this._pattern.nextValue();
      o -= r, e = o, this.iteratePath = !0;
    }
    const s = new zt();
    return this._geometryWalker.nextPointAndAngle(e, s) ? this._endings === Ct.WithFullGap && this._geometryWalker.isPathEnd() ? (this.iteratePath = !1, null) : this._endings === Ct.WithMarkers && this._geometryWalker.isPathEnd() && (this.iteratePath = !1, this.isClosed) ? null : (this.internalPlacement.setTranslate(s.pt[0] - this._offset * s.sa, s.pt[1] + this._offset * s.ca), this._angleToLine && this.internalPlacement.setRotateCS(s.ca, s.sa), this.internalPlacement) : (this.iteratePath = !1, null);
  }
  _adjustPosition(t) {
    let e = t / this._pattern.length();
    return e -= Math.floor(e), e * this._pattern.length();
  }
}, Wo = class ps {
  static local() {
    return ps.instance === null && (ps.instance = new ps()), ps.instance;
  }
  execute(t, e, s, r, n) {
    return new sc(t, e, s);
  }
};
Wo.instance = null;
let sc = class extends Ls {
  constructor(t, e, s) {
    super(t, !1, !0), this._curveHelper = new Dt(), this._angleToLine = e.angleToLine === void 0 || e.angleToLine, this._offset = e.offset !== void 0 ? e.offset * s : 0, this._type = e.extremityPlacement, this._position = e.offsetAlongLine !== void 0 ? e.offsetAlongLine * s : 0, this._beginProcessed = !1;
  }
  processPath(t) {
    let e;
    switch (this._type) {
      case Ht.Both:
      default:
        this._beginProcessed ? (e = this._atExtremities(t, this._position, !1), this._beginProcessed = !1, this.iteratePath = !1) : (e = this._atExtremities(t, this._position, !0), this._beginProcessed = !0, this.iteratePath = !0);
        break;
      case Ht.JustBegin:
        e = this._atExtremities(t, this._position, !0);
        break;
      case Ht.JustEnd:
        e = this._atExtremities(t, this._position, !1);
      case Ht.None:
    }
    return e;
  }
  _atExtremities(t, e, s) {
    if (s || t.seekPathEnd(), s ? t.nextPoint() : t.prevPoint()) {
      let r = 0, [n, o] = [0, 0], [a, h] = [t.x, t.y];
      for (; s ? t.nextPoint() : t.prevPoint(); ) {
        n = a, o = h, a = t.x, h = t.y;
        const l = this._curveHelper.getLength(n, o, a, h);
        if (r + l > e) {
          const c = (e - r) / l, [u, d] = this._curveHelper.getAngleCS(n, o, a, h, c), p = this._curveHelper.getCoord2D(n, o, a, h, c);
          return this.internalPlacement.setTranslate(p[0] - this._offset * d, p[1] + this._offset * u), this._angleToLine && this.internalPlacement.setRotateCS(-u, -d), this.internalPlacement;
        }
        r += l;
      }
    }
    return null;
  }
}, qo = class ds {
  static local() {
    return ds.instance === null && (ds.instance = new ds()), ds.instance;
  }
  execute(t, e, s, r, n) {
    return new ic(t, e, s);
  }
};
qo.instance = null;
let ic = class extends Ls {
  constructor(t, e, s) {
    super(t), this._walker = new Hi(), this._walker.updateTolerance(s), this._angleToLine = e.angleToLine === void 0 || e.angleToLine, this._offset = e.offset !== void 0 ? e.offset * s : 0, this._beginGap = e.beginPosition !== void 0 ? e.beginPosition * s : 0, this._endGap = e.endPosition !== void 0 ? e.endPosition * s : 0, this._flipFirst = e.flipFirst === void 0 || e.flipFirst, this._pattern = new Yi(), this._pattern.init(e.positionArray, !1, !1), this._subPathLen = 0, this._posCount = this._pattern.size(), this._isFirst = !0, this._prevPos = 0;
  }
  processPath(t) {
    if (this._pattern.isEmpty()) return null;
    let e;
    if (this.iteratePath) {
      const a = this._pattern.nextValue() * this._subPathLen, h = this._beginGap + a;
      e = h - this._prevPos, this._prevPos = h;
    } else {
      if (this._posCount = this._pattern.size(), this._isFirst = !0, this._prevPos = 0, this._subPathLen = t.pathLength() - this._beginGap - this._endGap, this._subPathLen < 0) return this.iteratePath = !1, null;
      if (!this._walker.init(t, this._pattern, !1)) return null;
      this._pattern.reset();
      const a = this._pattern.nextValue() * this._subPathLen, h = this._beginGap + a;
      e = h - this._prevPos, this._prevPos = h, this.iteratePath = !0;
    }
    const s = new zt();
    if (!this._walker.nextPointAndAngle(e, s, Yt.END)) return this.iteratePath = !1, null;
    this.internalPlacement.setTranslate(s.pt[0] - this._offset * s.sa, s.pt[1] + this._offset * s.ca);
    const r = this._isFirst && this._flipFirst;
    let n, o;
    return this._angleToLine ? (n = s.ca, o = s.sa) : (n = 1, o = 0), r && (n = -n, o = -o), this.internalPlacement.setRotateCS(n, o), this._isFirst = !1, this._posCount--, this._posCount === 0 && (this.iteratePath = !1), this.internalPlacement;
  }
};
const Gt = 512, rc = 10, yt = 24, Ti = 1e-6;
let Zo = class fs {
  static local() {
    return fs.instance === null && (fs.instance = new fs()), fs.instance;
  }
  execute(t, e, s, r, n) {
    return new nc(t, e, s, r, n);
  }
};
Zo.instance = null;
let nc = class Jt {
  constructor(t, e, s, r, n) {
    if (this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, this._currentX = 0, this._currentY = 0, this._accelerationMap = null, this._testInsidePolygon = !1, this._verticalSubdivision = !0, this._stepX = Math.abs(e.stepX ?? 16) * s, this._stepY = Math.abs(e.stepY ?? 16) * s, this._stepX = Math.round(128 * this._stepX) / 128, this._stepY = Math.round(128 * this._stepY) / 128, this._stepX !== 0 && this._stepY !== 0) {
      if (this._gridType = e.gridType ?? Qi.Fixed, this._gridType === Qi.Random) {
        const o = e.seed ?? 13, a = 1;
        this._randomLCG = new fo(o * a), this._randomness = (e.randomness ?? 100) / 100, this._gridAngle = 0, this._shiftOddRows = !1, this._cosAngle = 1, this._sinAngle = 0, this._offsetX = 0, this._offsetY = 0, this._buildRandomValues();
      } else {
        if (this._randomness = 0, this._gridAngle = e.gridAngle ?? 0, this._shiftOddRows = e.shiftOddRows ?? !1, this._offsetX = (e.offsetX ?? 0) * s, this._offsetY = (e.offsetY ?? 0) * s, this._cosAngle = Math.cos(this._gridAngle / 180 * Math.PI), this._sinAngle = -Math.sin(this._gridAngle / 180 * Math.PI), this._stepX) if (this._offsetX < 0) for (; this._offsetX < -0.5 * this._stepX; ) this._offsetX += this._stepX;
        else for (; this._offsetX >= 0.5 * this._stepX; ) this._offsetX -= this._stepX;
        if (this._stepY) if (this._offsetY < 0) for (; this._offsetY < -0.5 * this._stepY; ) this._offsetY += this._stepY;
        else for (; this._offsetY >= 0.5 * this._stepY; ) this._offsetY -= this._stepY;
      }
      if (this._graphicOriginX = 0, this._graphicOriginY = 0, r != null) {
        const [o, a, h, l] = r.split("/"), c = parseFloat(o), u = parseFloat(a), d = parseFloat(h), p = parseFloat(l);
        this._graphicOriginX = -(p * 2 ** c + d) * Gt, this._graphicOriginY = u * Gt, this._testInsidePolygon = !0;
      }
      this._internalPlacement = new Ee(), this._calculateMinMax(t), this._geometryCursor = t;
    }
  }
  next() {
    return this._geometryCursor ? this._nextInside() : null;
  }
  _buildRandomValues() {
    if (!Jt._randValues) {
      Jt._randValues = [];
      for (let t = 0; t < yt; t++) for (let e = 0; e < yt; e++) Jt._randValues.push(this._randomLCG.getFloat()), Jt._randValues.push(this._randomLCG.getFloat());
    }
  }
  _calculateMinMax(t) {
    let e, s, r, n, o, a, h, l, c, u, d, p, m, f;
    this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, h = l = m = d = Number.MAX_VALUE, c = u = f = p = -Number.MAX_VALUE;
    const _ = this._cosAngle !== 1;
    for (t.reset(); t.nextPath(); ) for (; t.nextPoint(); ) a = t.x, o = t.y, e = a - this._graphicOriginX - this._offsetX, s = o - this._graphicOriginY - this._offsetY, _ ? (r = this._cosAngle * e - this._sinAngle * s, n = this._sinAngle * e + this._cosAngle * s) : (r = e, n = s), h = Math.min(h, r), c = Math.max(c, r), l = Math.min(l, n), u = Math.max(u, n), d = Math.min(d, o), p = Math.max(p, o), m = Math.min(m, a), f = Math.max(f, a);
    d = d !== Number.MAX_VALUE ? d : -Gt - this._stepY, p = p !== -Number.MAX_VALUE ? p : this._stepY, m = m !== Number.MAX_VALUE ? m : -this._stepX, f = f !== -Number.MAX_VALUE ? f : Gt + this._stepX;
    const y = p - d, g = f - m;
    if (this._verticalSubdivision = y >= g, this._polygonMin = this._verticalSubdivision ? d : m, this._testInsidePolygon) {
      let P = 0 - this._graphicOriginX - this._offsetX - this._stepX, w = Gt - this._graphicOriginX - this._offsetX + this._stepX, M = -Gt - this._graphicOriginY - this._offsetY - this._stepY, k = 0 - this._graphicOriginY - this._offsetY + this._stepY;
      if (_) {
        const F = [[P, M], [P, k], [w, M], [w, k]];
        P = M = Number.MAX_VALUE, w = k = -Number.MAX_VALUE;
        for (const z of F) {
          const A = this._cosAngle * z[0] - this._sinAngle * z[1], R = this._sinAngle * z[0] + this._cosAngle * z[1];
          P = Math.min(P, A), w = Math.max(w, A), M = Math.min(M, R), k = Math.max(k, R);
        }
      }
      h = h !== Number.MAX_VALUE ? Math.max(h, P) : P, l = l !== Number.MAX_VALUE ? Math.max(l, M) : M, c = c !== -Number.MAX_VALUE ? Math.min(c, w) : w, u = u !== -Number.MAX_VALUE ? Math.min(u, k) : k;
    }
    this._xMin = Math.round(h / this._stepX), this._xMax = Math.round(c / this._stepX), this._yMin = Math.round(l / this._stepY), this._yMax = Math.round(u / this._stepY), this._currentX = this._xMax + 1, this._currentY = this._yMin - 1, this._buildAccelerationMap(t, m, f, d, p);
  }
  _buildAccelerationMap(t, e, s, r, n) {
    t.reset();
    const o = /* @__PURE__ */ new Map(), a = this._verticalSubdivision, h = a ? n - r : s - e;
    let l = Math.ceil(h / rc);
    if (l <= 1) return;
    const c = Math.floor(h / l);
    let u, d, p, m, f, _, y, g, P, w, M;
    for (l++, this._delta = c, a ? (P = -Gt - 2 * this._stepY, w = 2 * this._stepY, M = r) : (P = -2 * this._stepX, w = Gt + 2 * this._stepX, M = e); t.nextPath(); ) if (!(t.pathSize < 2) && t.nextPoint()) for (u = t.x, d = t.y; t.nextPoint(); u = p, d = m) {
      if (p = t.x, m = t.y, a) {
        if (d === m || d < P && m < P || d > w && m > w) continue;
        f = Math.min(d, m), _ = Math.max(d, m);
      } else {
        if (u === p || u < P && p < P || u > w && p > w) continue;
        f = Math.min(u, p), _ = Math.max(u, p);
      }
      for (; f < _; ) y = Math.floor((f - M) / c), Bn(y, u, d, p, m, o), f += c;
      g = Math.floor((_ - M) / c), g > y && Bn(g, u, d, p, m, o);
    }
    this._accelerationMap = o;
  }
  _nextInside() {
    for (; ; ) {
      if (this._currentX > this._xMax) {
        if (this._currentY++, this._currentY > this._yMax) return null;
        this._currentX = this._xMin, this._shiftOddRows && this._currentY % 2 && this._currentX--;
      }
      let t = this._currentX * this._stepX + this._offsetX;
      this._shiftOddRows && this._currentY % 2 && (t += 0.5 * this._stepX);
      const e = this._currentY * this._stepY + this._offsetY;
      let s, r;
      if (this._currentX++, this._gridType === Qi.Random) {
        const n = (this._currentX % yt + yt) % yt, o = (this._currentY % yt + yt) % yt;
        s = this._graphicOriginX + t + this._stepX * this._randomness * (0.5 - Jt._randValues[o * yt + n]) * 2 / 3, r = this._graphicOriginY + e + this._stepY * this._randomness * (0.5 - Jt._randValues[o * yt + n + 1]) * 2 / 3;
      } else s = this._graphicOriginX + this._cosAngle * t + this._sinAngle * e, r = this._graphicOriginY - this._sinAngle * t + this._cosAngle * e;
      if (!this._testInsidePolygon || this._isInsidePolygon(s, r, this._geometryCursor)) return this._internalPlacement.setTranslate(s, r), this._internalPlacement;
    }
  }
  _isInsidePolygon(t, e, s) {
    if (this._accelerationMap == null) return oc(t, e, s);
    t += Ti, e += Ti;
    const r = this._verticalSubdivision, n = r ? e : t, o = Math.floor((n - this._polygonMin) / this._delta), a = this._accelerationMap.get(o);
    if (!a) return !1;
    let h, l, c, u = 0;
    for (const d of a) {
      if (h = d[0], l = d[1], r) {
        if (h[1] > e == l[1] > e) continue;
        c = (l[0] - h[0]) * (e - h[1]) - (l[1] - h[1]) * (t - h[0]);
      } else {
        if (h[0] > t == l[0] > t) continue;
        c = (l[1] - h[1]) * (t - h[0]) - (l[0] - h[0]) * (e - h[1]);
      }
      c > 0 ? u++ : u--;
    }
    return u !== 0;
  }
};
function oc(i, t, e) {
  let s, r, n, o, a = 0;
  for (i += Ti, t += Ti, e.reset(); e.nextPath(); ) if (e.nextPoint()) for (s = e.x, r = e.y; e.nextPoint(); s = n, r = o)
    n = e.x, o = e.y, r > t != o > t && ((n - s) * (t - r) - (o - r) * (i - s) > 0 ? a++ : a--);
  return a !== 0;
}
function Bn(i, t, e, s, r, n) {
  let o = n.get(i);
  o || (o = [], n.set(i, o)), o.push([[t, e], [s, r]]);
}
const ac = 1e-3;
let jo = class ms {
  static local() {
    return ms.instance === null && (ms.instance = new ms()), ms.instance;
  }
  execute(t, e, s, r, n) {
    return new hc(t, e, s);
  }
};
jo.instance = null;
let hc = class extends Ls {
  constructor(t, e, s) {
    super(t), this._curveHelper = new Dt(), this._angleToLine = e.angleToLine === void 0 || e.angleToLine, this._offset = e.offset !== void 0 ? e.offset * s : 0, this._relativeTo = e.relativeTo, this._position = e.startPointOffset !== void 0 ? e.startPointOffset * s : 0, this._epsilon = ac * s;
  }
  processPath(t) {
    const e = this._position;
    if (this._relativeTo === Ge.SegmentMidpoint) {
      if (this.iteratePath || (this.iteratePath = !0), t.nextPoint()) {
        let [r, n] = [t.x, t.y], [o, a] = [0, 0];
        for (; t.nextPoint(); ) {
          o = t.x, a = t.y;
          const h = this._curveHelper.getLength(r, n, o, a);
          if (h < this._epsilon) {
            r = o, n = a;
            continue;
          }
          const l = 0.5 + this._position / h, [c, u] = this._curveHelper.getAngleCS(r, n, o, a, l), d = this._curveHelper.getCoord2D(r, n, o, a, l);
          return this.internalPlacement.setTranslate(d[0] - this._offset * u, d[1] + this._offset * c), this._angleToLine && this.internalPlacement.setRotateCS(c, u), this.internalPlacement;
        }
      }
      return this.iteratePath = !1, null;
    }
    const s = this._relativeTo === Ge.LineEnd;
    return this.onLine(t, e, s);
  }
  onLine(t, e, s) {
    let r, n = !1;
    switch (this._relativeTo) {
      case Ge.LineMiddle:
      default:
        t.seekPathStart(), r = t.pathLength() / 2 + e;
        break;
      case Ge.LineBeginning:
        r = e;
        break;
      case Ge.LineEnd:
        r = e, n = !0;
    }
    s ? t.seekPathEnd() : t.seekPathStart();
    let o = 0;
    if (s ? t.prevPoint() : t.nextPoint()) {
      let [a, h] = [t.x, t.y], [l, c] = [0, 0];
      for (; s ? t.prevPoint() : t.nextPoint(); ) {
        l = t.x, c = t.y;
        const u = this._curveHelper.getLength(a, h, l, c);
        if (o + u > r) {
          const d = (r - o) / u, [p, m] = this._curveHelper.getAngleCS(a, h, l, c, d), f = this._curveHelper.getCoord2D(a, h, l, c, d), _ = n ? -this._offset : this._offset;
          return this.internalPlacement.setTranslate(f[0] - _ * m, f[1] + _ * p), this._angleToLine && (n ? this.internalPlacement.setRotateCS(-p, -m) : this.internalPlacement.setRotateCS(p, m)), this.internalPlacement;
        }
        a = l, h = c, o += u;
      }
    }
    return null;
  }
};
const lc = 1e-15;
let Ko = class _s {
  static local() {
    return _s.instance === null && (_s.instance = new _s()), _s.instance;
  }
  execute(t, e, s, r, n) {
    return new cc(t, e, s);
  }
};
Ko.instance = null;
let cc = class extends Ls {
  constructor(t, e, s) {
    super(t), this._curveHelper = new Dt(), this._angleToLine = e.angleToLine === void 0 || e.angleToLine, this._offset = e.offset !== void 0 ? e.offset * s : 0, this._endPoints = e.placeOnEndPoints === void 0 || e.placeOnEndPoints, this._controlPoints = e.placeOnControlPoints === void 0 || e.placeOnControlPoints, this._regularVertices = e.placeOnRegularVertices === void 0 || e.placeOnRegularVertices, this._tags = [], this._tagIterator = 0;
  }
  processPath(t) {
    if (this.iteratePath || (this._preparePath(t), this.iteratePath = !0), this._tagIterator >= this._tags.length) return this._tags.length = 0, this._tagIterator = 0, this.iteratePath = !1, null;
    const e = this._tags[this._tagIterator];
    this._angleToLine && this.internalPlacement.setRotate(e[2]);
    let s = e[0], r = e[1];
    if (this._offset !== 0) {
      const n = Math.cos(e[2]), o = Math.sin(e[2]);
      s -= this._offset * o, r += this._offset * n;
    }
    return this.internalPlacement.setTranslate(s, r), this._tagIterator++, this.internalPlacement;
  }
  _preparePath(t) {
    this._tags.length = 0, this._tagIterator = 0, t.seekPathStart();
    const e = t.isClosed();
    let s = 0, r = !1, n = 0, o = 0;
    if (t.seekPathStart(), t.nextPoint()) {
      let a = t.x, h = t.y, l = t.getControlPoint(), c = !0, u = t.nextPoint();
      for (; u; ) {
        const d = t.x, p = t.y, m = t.getControlPoint();
        (this._angleToLine || this._offset !== 0) && (n = this._curveHelper.getAngle(a, h, d, p, 0)), c ? (c = !1, e ? (s = n, r = l) : (this._endPoints || this._controlPoints && l) && this._tags.push([a, h, n])) : l ? this._controlPoints && this._tags.push([a, h, qs(o, n)]) : this._regularVertices && this._tags.push([a, h, qs(o, n)]), (this._angleToLine || this._offset !== 0) && (o = this._curveHelper.getAngle(a, h, d, p, 1)), u = t.nextPoint(), u || (e ? m || r ? this._controlPoints && this._tags.push([d, p, qs(o, s)]) : this._regularVertices && this._tags.push([d, p, qs(o, s)]) : (this._endPoints || this._controlPoints && m) && this._tags.push([d, p, o])), a = d, h = p, l = m;
      }
    }
    this._tagIterator = 0;
  }
};
function qs(i, t) {
  const e = Math.PI;
  for (; Math.abs(t - i) > e + 2 * lc; ) t - i > e ? t -= 2 * e : t += 2 * e;
  return (i + t) / 2;
}
const uc = 100 * 222045e-21;
function pc(i) {
  if (i.totalSize === 0) return null;
  const t = Gi(i);
  if (!t) return null;
  const e = 4 * (Math.abs(t[0]) + Math.abs(t[2]) + Math.abs(t[1]) + Math.abs(t[3]) + 1) * uc;
  let s = 0, r = 0;
  i.reset();
  for (let A = 0; i.nextPath(); A++) {
    const R = i.getCurrentRingArea();
    R > r && (r = R, s = A);
  }
  if (i.seekPath(s), i.pathSize === 0) return null;
  i.seekPathStart();
  const n = ph(i);
  if (Math.abs(r) <= 2 * e * e) return [(n[0] + n[2]) / 2, (n[1] + n[3]) / 2];
  i.seekPathStart();
  const o = dh(i, Ie());
  if (o === null) return null;
  if (i.totalPoints < 4) return o;
  const a = [[NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN]], h = [NaN, NaN, NaN, NaN], l = [NaN, NaN, NaN, NaN];
  let c = !1, u = Be(o, i, !0);
  u.distance === 0 && (c = !0, a[0][0] = o[0], a[0][1] = o[1], u = Be(o, i, !1)), h[0] = u.distance, l[0] = 0;
  const d = [NaN, NaN];
  let p = !1, m = 0.25, f = -1, _ = NaN;
  do
    if (_ = NaN, a[1] = rr(i, nr(n[0], n[2], m), e, t), isNaN(a[1][0]) || isNaN(a[1][1]) || (u = Be(a[1], i, !1), _ = u.distance), !isNaN(_) && _ > e && ci(a[1], i)) p = !0, h[1] = _, l[1] = Qt(a[1], o);
    else if (!isNaN(_) && _ > f && (f = _, d[0] = a[1][0], d[1] = a[1][1]), m -= 0.01, m < 0.1) {
      if (!(f >= 0)) break;
      p = !0, h[1] = f, a[1][0] = d[0], a[1][1] = d[1], l[1] = Qt(a[1], o);
    }
  while (!p);
  p = !1, m = 0.5, f = -1;
  let y = 0.01, g = 1;
  do
    if (_ = NaN, a[2] = rr(i, nr(n[0], n[2], m), e, t), isNaN(a[2][0]) || isNaN(a[2][1]) || (u = Be(a[2], i, !1), _ = u.distance), !isNaN(_) && _ > e && ci(a[2], i)) p = !0, h[2] = _, l[2] = Qt(a[2], o);
    else if (!isNaN(_) && _ > f) f = _, d[0] = a[2][0], d[1] = a[2][1];
    else if (_ > f && (f = _, d[0] = a[2][0], d[1] = a[2][1]), m = 0.5 + y * g, y += 0.01, g *= -1, m < 0.3 || m > 0.7) {
      if (!(f >= 0)) break;
      p = !0, h[2] = f, a[2][0] = d[0], a[2][1] = d[1], l[2] = Qt(a[2], o);
    }
  while (!p);
  p = !1, m = 0.75, f = -1;
  do
    if (_ = NaN, a[3] = rr(i, nr(n[0], n[2], m), e, t), isNaN(a[3][0]) || isNaN(a[3][1]) || (u = Be(a[3], i, !1), _ = u.distance), !isNaN(_) && _ > e && ci(a[3], i)) p = !0, h[3] = _, l[3] = Qt(a[3], o);
    else if (_ > f && (f = _, d[0] = a[3][0], d[1] = a[3][1]), m += 0.01, m > 0.9) {
      if (!(f >= 0)) break;
      p = !0, h[3] = f, a[3][0] = d[0], a[3][1] = d[1], l[3] = Qt(a[3], o);
    }
  while (!p);
  const P = [0, 1, 2, 3], w = c ? 0 : 1;
  let M;
  for (let A = w; A < 4; A++) for (let R = w; R < 3; R++) {
    const K = l[R], q = l[R + 1];
    mc(K, q) > 0 && (M = P[R], P[R] = P[R + 1], P[R + 1] = M, l[R] = q, l[R + 1] = K);
  }
  let k = w, F = 0, z = 0;
  for (let A = w; A < 4; A++) {
    switch (A) {
      case 0:
        z = 2 * h[P[A]];
        break;
      case 1:
        z = 1.66666666 * h[P[A]];
        break;
      case 2:
        z = 1.33333333 * h[P[A]];
        break;
      case 3:
        z = h[P[A]];
    }
    z > F && (F = z, k = P[A]);
  }
  return a[k];
}
function ci(i, t) {
  let e, s, r, n, o = 0;
  for (t.reset(); t.nextPath() && t.nextPoint(); ) for (e = t.x, s = t.y; t.nextPoint(); e = r, s = n)
    r = t.x, n = t.y, s > i[1] != n > i[1] && ((r - e) * (i[1] - s) - (n - s) * (i[0] - e) > 0 ? o++ : o--);
  return o !== 0;
}
function Be(i, t, e) {
  if (e && ci(i, t)) return { coord: i, distance: 0 };
  let s = 1 / 0, r = 0, n = 0, o = [0, 0], a = [0, 0];
  const h = [0, 0];
  for (t.reset(); t.nextPath() && t.nextPoint(); ) if (!(t.pathSize < 2)) for (o[0] = t.x, o[1] = t.y; t.nextPoint(); o = a) {
    a = [t.x, t.y], fh(h, i, o, a);
    const l = Qt(i, h);
    l < s && (s = l, r = h[0], n = h[1]);
  }
  return { coord: [r, n], distance: Math.sqrt(s) };
}
function rr(i, t, e, s) {
  const r = [t, 0];
  let n = 1 / 0, o = 1 / 0, a = !1, h = !1;
  const l = [[t, s[1] - 1], [t, s[3] + 1]], c = [0, 0], u = [0, 0], d = [0, 0], p = [[0, 0], [0, 0]], m = Ie();
  for (i.reset(); i.nextPath() && i.nextPoint(); ) if (!(i.pathSize < 2)) for (p[0][0] = i.x, p[0][1] = i.y; i.nextPoint(); p[0][0] = p[1][0], p[0][1] = p[1][1]) {
    if (p[1][0] = i.x, p[1][1] = i.y, dc(m, p) === null || (u[0] = l[0][0], u[1] = l[0][1], d[0] = l[1][0], d[1] = l[1][1], fc(m, u, d) === 0) || !mh(l[0], l[1], p[0], p[1], c)) continue;
    const f = c[1];
    n > o ? f < n && (n = f, a = !0) : f < o && (o = f, h = !0);
  }
  return a && h ? r[1] = (n + o) / 2 : r[0] = r[1] = NaN, r;
}
function dc(i, t) {
  if (t.length < 2) return null;
  i || (i = Ie());
  const [e, s] = t[0], [r, n] = t[1];
  return i[0] = Math.min(e, r), i[1] = Math.min(s, n), i[2] = Math.max(e, r), i[3] = Math.max(s, n), i;
}
const Zs = 1, js = 4, Vn = 3, Yn = 12;
function fc(i, t, e) {
  let s = xt(t, i), r = xt(e, i);
  const n = i[0], o = i[1], a = i[2], h = i[3];
  if (s & r) return 0;
  if (!(s | r)) return 4;
  const l = (s ? 1 : 0) | (r ? 2 : 0);
  do {
    const c = e[0] - t[0], u = e[1] - t[1];
    if (c > u) s & Vn ? (s & Zs ? (t[1] += u * (n - t[0]) / c, t[0] = n) : (t[1] += u * (a - t[0]) / c, t[0] = a), s = xt(t, i)) : r & Vn ? (r & Zs ? (e[1] += u * (n - e[0]) / c, e[0] = n) : (e[1] += u * (a - e[0]) / c, e[0] = a), r = xt(e, i)) : s ? (s & js ? (t[0] += c * (o - t[1]) / u, t[1] = o) : (t[0] += c * (h - t[1]) / u, t[1] = h), s = xt(t, i)) : (r & js ? (e[0] += c * (o - e[1]) / u, e[1] = o) : (e[0] += c * (h - e[1]) / u, e[1] = h), r = xt(e, i));
    else if (s & Yn ? (s & js ? (t[0] += c * (o - t[1]) / u, t[1] = o) : (t[0] += c * (h - t[1]) / u, t[1] = h), s = xt(t, i)) : r & Yn ? (r & js ? (e[0] += c * (o - e[1]) / u, e[1] = o) : (e[0] += c * (h - e[1]) / u, e[1] = h), r = xt(e, i)) : s ? (s & Zs ? (t[1] += u * (n - t[0]) / c, t[0] = n) : (t[1] += u * (a - t[0]) / c, t[0] = a), s = xt(t, i)) : (r & Zs ? (e[1] += u * (n - e[0]) / c, e[0] = n) : (e[1] += u * (a - e[0]) / c, e[0] = a), r = xt(e, i)), s & r) return 0;
  } while (s | r);
  return l;
}
function xt(i, t) {
  return (i[0] < t[0] ? 1 : 0) | (i[0] > t[2] ? 1 : 0) << 1 | (i[1] < t[1] ? 1 : 0) << 2 | (i[1] > t[3] ? 1 : 0) << 3;
}
function nr(i, t, e) {
  return i + (t - i) * e;
}
function Qt(i, t) {
  return (i[0] - t[0]) * (i[0] - t[0]) + (i[1] - t[1]) * (i[1] - t[1]);
}
function mc(i, t) {
  if (i < t) return -1;
  if (i > t) return 1;
  if (i === t) return 0;
  const e = isNaN(i), s = isNaN(t);
  return e < s ? -1 : e > s ? 1 : 0;
}
let Jo = class gs {
  static local() {
    return gs.instance === null && (gs.instance = new gs()), gs.instance;
  }
  execute(t, e, s, r, n) {
    return new _c(t, e, s);
  }
};
Jo.instance = null;
let _c = class {
  constructor(t, e, s) {
    this._geometryCursor = t, this._offsetX = e.offsetX !== void 0 ? e.offsetX * s : 0, this._offsetY = e.offsetY !== void 0 ? e.offsetY * s : 0, this._method = e.method !== void 0 ? e.method : Bs.OnPolygon, this._internalPlacement = new Ee();
  }
  next() {
    const t = this._geometryCursor;
    return this._geometryCursor = null, t ? this._polygonCenter(t) : null;
  }
  _polygonCenter(t) {
    let e = !1;
    switch (this._method) {
      case Bs.CenterOfMass:
        {
          const s = _h(t);
          s && (this._internalPlacement.setTranslate(s[0] + this._offsetX, s[1] + this._offsetY), e = !0);
        }
        break;
      case Bs.BoundingBoxCenter:
        {
          const s = Gi(t);
          s && (this._internalPlacement.setTranslate((s[2] + s[0]) / 2 + this._offsetX, (s[3] + s[1]) / 2 + this._offsetY), e = !0);
        }
        break;
      case Bs.OnPolygon:
      default: {
        const s = pc(t);
        s !== null && (this._internalPlacement.setTranslate(s[0] + this._offsetX, s[1] + this._offsetY), e = !0);
      }
    }
    return e ? this._internalPlacement : null;
  }
};
function Pr(i) {
  if (!i) return null;
  switch (i.type) {
    case "CIMGeometricEffectAddControlPoints":
      return Lo.local();
    case "CIMGeometricEffectArrow":
      return Eo.local();
    case "CIMGeometricEffectBuffer":
      return No.local();
    case "CIMGeometricEffectControlMeasureLine":
      return Ao.local();
    case "CIMGeometricEffectCut":
      return Fo.local();
    case "CIMGeometricEffectDashes":
      return Ro.local();
    case "CIMGeometricEffectDonut":
      return Oo.local();
    case "CIMGeometricEffectJog":
      return Do.local();
    case "CIMGeometricEffectMove":
      return Go.local();
    case "CIMGeometricEffectOffset":
      return Bo.local();
    case "CIMGeometricEffectReverse":
      return Vo.local();
    case "CIMGeometricEffectRotate":
      return Yo.local();
    case "CIMGeometricEffectScale":
      return Ho.local();
    case "CIMGeometricEffectWave":
      return Uo.local();
  }
  return null;
}
function Qo(i) {
  if (!i) return null;
  switch (i.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
      return Xo.local();
    case "CIMMarkerPlacementAtExtremities":
      return Wo.local();
    case "CIMMarkerPlacementAtRatioPositions":
      return qo.local();
    case "CIMMarkerPlacementInsidePolygon":
      return Zo.local();
    case "CIMMarkerPlacementOnLine":
      return jo.local();
    case "CIMMarkerPlacementOnVertices":
      return Ko.local();
    case "CIMMarkerPlacementPolygonCenter":
      return Jo.local();
  }
  return null;
}
const or = new Xh();
function gc(i) {
  if (i == null) return ["", !1];
  if (!or.hasBidiChar(i)) return [i, !1];
  let t;
  return t = or.checkContextual(i) === "rtl" ? "IDNNN" : "ICNNN", [or.bidiTransform(i, t, "VLYSN"), !0];
}
const ta = "arial-unicode-ms", Hn = "woff2", Un = /* @__PURE__ */ new Map(), yc = /* @__PURE__ */ new Set();
let xc = class {
  constructor(t, e) {
    this.fontFace = t, this.promise = e;
  }
};
async function df(i) {
  const t = Pc(i), e = Un.get(t);
  if (e) return e.promise;
  const s = new FontFace(i.family, `url('${gh.fontsUrl}/woff2/${t}.${Hn}') format('${Hn}')`, { style: i.style, weight: i.weight }), r = document.fonts;
  if (r.has(s) && s.status === "loading") return s.loaded;
  const n = s.load().then(() => (r.add(s), s));
  return Un.set(t, new xc(s, n)), yc.add(s), n;
}
function bc(i) {
  if (!i) return ta;
  const t = i.toLowerCase().split(" ").join("-");
  switch (t) {
    case "serif":
      return "noto-serif";
    case "sans-serif":
      return "arial-unicode-ms";
    case "monospace":
      return "ubuntu-mono";
    case "fantasy":
      return "cabin-sketch";
    case "cursive":
      return "redressed";
    default:
      return t;
  }
}
function Pc(i) {
  const t = wc(i) + Sc(i);
  return bc(i.family) + (t.length > 0 ? t : "-regular");
}
function wc(i) {
  if (!i.weight) return "";
  switch (i.weight.toLowerCase()) {
    case "bold":
    case "bolder":
      return "-bold";
  }
  return "";
}
function Sc(i) {
  if (!i.style) return "";
  switch (i.style.toLowerCase()) {
    case "italic":
    case "oblique":
      return "-italic";
  }
  return "";
}
let vc = class {
  applyColorSubstituition(t, e) {
    if (!e) return t;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: s, height: r } = t, n = this._rasterizationCanvas, o = n.getContext("2d", { willReadFrequently: !0 });
    t !== n && (n.width = s, n.height = r, o.drawImage(t, 0, 0, s, r));
    const a = o.getImageData(0, 0, s, r).data;
    if (e) {
      for (const l of e) if (l && l.oldColor && l.oldColor.length === 4 && l.newColor && l.newColor.length === 4) {
        const [c, u, d, p] = l.oldColor, [m, f, _, y] = l.newColor;
        if (c === m && u === f && d === _ && p === y) continue;
        for (let g = 0; g < a.length; g += 4) c === a[g] && u === a[g + 1] && d === a[g + 2] && p === a[g + 3] && (a[g] = m, a[g + 1] = f, a[g + 2] = _, a[g + 3] = y);
      }
    }
    const h = new ImageData(a, s, r);
    return o.putImageData(h, 0, 0), n;
  }
  tintImageData(t, e) {
    if (!e || e.length < 4) return t;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: s, height: r } = t, n = this._rasterizationCanvas, o = n.getContext("2d", { willReadFrequently: !0 });
    t !== n && (n.width = s, n.height = r, o.drawImage(t, 0, 0, s, r));
    const a = o.getImageData(0, 0, s, r), h = new Uint8Array(a.data), l = [e[0] / 255, e[1] / 255, e[2] / 255, e[3] / 255];
    for (let u = 0; u < h.length; u += 4) h[u] *= l[0], h[u + 1] *= l[1], h[u + 2] *= l[2], h[u + 3] *= l[3];
    const c = new ImageData(new Uint8ClampedArray(h.buffer), s, r);
    return o.putImageData(c, 0, 0), n;
  }
};
function ar(i) {
  const t = i.getFrame(0);
  if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) return t;
  const e = document.createElement("canvas");
  e.width = i.width, e.height = i.height;
  const s = e.getContext("2d");
  return t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0), e;
}
let Mc = class ea {
  constructor(t = 0, e = 0, s = 0, r = 0) {
    this.x = t, this.y = e, this.width = s, this.height = r;
  }
  static fromExtent(t) {
    return new ea(t.xmin, -t.ymax, t.xmax - t.xmin, t.ymax - t.ymin);
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(t) {
    this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.width = Math.max(this.width, t.width), this.height = Math.max(this.height, t.height);
  }
};
function Cc(i) {
  return `rgb(${i.slice(0, 3).toString()})`;
}
function hr(i) {
  return `rgba(${i.slice(0, 3).toString()},${i[3]})`;
}
let sa = class {
  constructor(t) {
    t && (this._textRasterizationCanvas = t);
  }
  rasterizeText(t, e) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const s = this._textRasterizationCanvas, r = s.getContext("2d", { willReadFrequently: !0 });
    this._setFontProperties(r, e), this._parameters = e, this._textLines = t.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const { decoration: n, weight: o } = e.font;
    this._lineThroughWidthOffset = n && n === "line-through" ? 0.1 * this._lineHeight : 0;
    const a = e.backgroundColor != null || e.borderLine != null, h = a ? yh : 0, l = this._computeTextWidth(r, e) + 2 * h, c = this._lineHeight * this._textLines.length + 2 * h;
    if (s.width = l + 2 * this._lineThroughWidthOffset, s.height = c, s.width === 0 || s.height === 0) return s.width = s.height = 1, { size: [0, 0], image: new Uint32Array(0), sdf: !1, simplePattern: !1, anchorX: 0, anchorY: 0, canvas: s };
    this._renderedLineHeight = Math.round(this._lineHeight * e.pixelRatio), this._renderedHaloSize = I(e.halo.size) * e.pixelRatio, this._renderedWidth = l * e.pixelRatio, this._renderedHeight = c * e.pixelRatio, this._lineThroughWidthOffset *= e.pixelRatio;
    const u = e.color ?? [0, 0, 0, 0], d = e.halo && e.halo.color ? e.halo.color : [0, 0, 0, 0];
    this._fillStyle = hr(u), this._haloStyle = Cc(d);
    const p = this._renderedLineHeight, m = this._renderedHaloSize;
    r.save(), r.clearRect(0, 0, s.width, s.height), this._setFontProperties(r, e);
    const f = h * e.pixelRatio, _ = $c(r.textAlign, this._renderedWidth - 2 * f) + m + f, y = m + f, g = m > 0;
    let P = this._lineThroughWidthOffset, w = 0;
    if (a) {
      r.save();
      const K = e.backgroundColor ?? [0, 0, 0, 0], q = e.borderLine?.color ?? [0, 0, 0, 0], ch = 2 * I(e.borderLine?.size ?? 0);
      r.fillStyle = hr(K), r.strokeStyle = hr(q), r.lineWidth = ch, r.fillRect(0, 0, s.width, s.height), r.strokeRect(0, 0, s.width, s.height), r.restore();
    }
    g && this._renderHalo(r, _, y, P, w, e), w += y, P += _;
    for (const K of this._textLines) g ? (r.globalCompositeOperation = "destination-out", r.fillStyle = "rgb(0, 0, 0)", r.fillText(K, P, w), r.globalCompositeOperation = "source-over", r.fillStyle = this._fillStyle, r.fillText(K, P, w)) : (r.fillStyle = this._fillStyle, r.fillText(K, P, w)), n && n !== "none" && this._renderDecoration(r, P, w, n, o), w += p;
    r.restore();
    const M = this._renderedWidth + 2 * this._lineThroughWidthOffset, k = this._renderedHeight, F = r.getImageData(0, 0, M, k), z = new Uint8Array(F.data);
    if (e.premultiplyColors) {
      let K;
      for (let q = 0; q < z.length; q += 4) K = z[q + 3] / 255, z[q] = z[q] * K, z[q + 1] = z[q + 1] * K, z[q + 2] = z[q + 2] * K;
    }
    let A, R;
    switch (e.horizontalAlignment) {
      case "left":
        A = -0.5;
        break;
      case "right":
        A = 0.5;
        break;
      default:
        A = 0;
    }
    switch (e.verticalAlignment) {
      case "bottom":
        R = -0.5;
        break;
      case "top":
        R = 0.5;
        break;
      case "baseline":
        R = -1 / 6;
        break;
      default:
        R = 0;
    }
    return { size: [M, k], image: new Uint32Array(z.buffer), sdf: !1, simplePattern: !1, anchorX: A, anchorY: R, canvas: s };
  }
  _renderHalo(t, e, s, r, n, o) {
    const a = this._renderedWidth, h = this._renderedHeight;
    this._haloRasterizationCanvas || (this._haloRasterizationCanvas = document.createElement("canvas")), this._haloRasterizationCanvas.width = a, this._haloRasterizationCanvas.height = h;
    const l = this._haloRasterizationCanvas, c = l.getContext("2d");
    c.clearRect(0, 0, a, h), this._setFontProperties(c, o);
    const { decoration: u, weight: d } = o.font;
    c.fillStyle = this._haloStyle, c.strokeStyle = this._haloStyle, c.lineJoin = "round", this._renderHaloNative(c, e, s, u, d), t.globalAlpha = this._parameters.halo.color[3], t.drawImage(l, 0, 0, a, h, r, n, a, h), t.globalAlpha = 1;
  }
  _renderHaloNative(t, e, s, r, n) {
    const o = this._renderedLineHeight, a = this._renderedHaloSize;
    for (const h of this._textLines) {
      const l = 2 * a, c = 5, u = 0.1;
      for (let d = 0; d < c; d++) {
        const p = (1 - (c - 1) * u + d * u) * l;
        t.lineWidth = p, t.strokeText(h, e, s), r && r !== "none" && this._renderDecoration(t, e, s, r, n, p);
      }
      s += o;
    }
  }
  _setFontProperties(t, e) {
    const s = Math.max(e.size, 0.5), r = e.font, n = `${r.style} ${r.weight} ${I(s * e.pixelRatio).toFixed(1)}px ${r.family}, sans-serif`;
    let o;
    switch (t.font = n, t.textBaseline = "top", e.horizontalAlignment) {
      case "left":
      default:
        o = "left";
        break;
      case "right":
        o = "right";
        break;
      case "center":
        o = "center";
    }
    t.textAlign = o;
  }
  computeTextSize(t, e) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const s = this._textRasterizationCanvas, r = s.getContext("2d");
    this._setFontProperties(r, e), this._parameters = e, this._textLines = t.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const n = this._computeTextWidth(r, e), o = this._lineHeight * this._textLines.length;
    return s.width = n, s.height = o, [n * e.pixelRatio, o * e.pixelRatio];
  }
  _computeTextWidth(t, e) {
    let s = 0;
    for (const n of this._textLines) s = Math.max(s, t.measureText(n).width);
    const r = e.font;
    return (r.style === "italic" || r.style === "oblique" || typeof r.weight == "string" && (r.weight === "bold" || r.weight === "bolder") || typeof r.weight == "number" && r.weight > 600) && (s += 0.3 * t.measureText("w").width), s += 2 * I(this._parameters.halo.size), Math.round(s);
  }
  _computeLineHeight() {
    let t = 1.275 * this._parameters.size;
    const e = this._parameters.font.decoration;
    return e && e === "underline" && (t *= 1.3), Math.round(t + 2 * I(this._parameters.halo.size));
  }
  _renderDecoration(t, e, s, r, n, o) {
    const a = 0.9 * this._lineHeight, h = n === "bold" ? 0.06 : n === "bolder" ? 0.09 : 0.04;
    switch (t.textAlign) {
      case "center":
        e -= this._renderedWidth / 2;
        break;
      case "right":
        e -= this._renderedWidth;
    }
    const l = t.textBaseline;
    if (r === "underline") switch (l) {
      case "top":
        s += a;
        break;
      case "middle":
        s += a / 2;
    }
    else if (r === "line-through") switch (l) {
      case "top":
        s += a / 1.5;
        break;
      case "middle":
        s += a / 3;
    }
    const c = o ? 1.5 * o : Math.ceil(a * h);
    t.save(), t.beginPath(), t.strokeStyle = t.fillStyle, t.lineWidth = c, t.moveTo(e - this._lineThroughWidthOffset, s), t.lineTo(e + this._renderedWidth + 2 * this._lineThroughWidthOffset, s), t.stroke(), t.restore();
  }
};
function $c(i, t) {
  return i === "center" ? 0.5 * t : i === "right" ? t : 0;
}
const kc = () => de.getLogger("esri.views.2d.engine.webgl.alignmentUtils");
var St, ut;
function ia(i) {
  if (!i) return St.Center;
  switch (i) {
    case "Left":
    case "left":
      return St.Left;
    case "Right":
    case "right":
      return St.Right;
    case "Justify":
      return kc().warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."), St.Center;
    case "Center":
    case "center":
      return St.Center;
  }
}
function ra(i) {
  if (!i) return ut.Center;
  switch (i) {
    case "Top":
    case "top":
      return ut.Top;
    case "Center":
    case "middle":
      return ut.Center;
    case "Baseline":
    case "baseline":
      return ut.Baseline;
    case "Bottom":
    case "bottom":
      return ut.Bottom;
  }
}
function _f(i) {
  switch (i) {
    case "above-left":
    case "esriServerPointLabelPlacementAboveLeft":
      return ["right", "bottom"];
    case "above-center":
    case "above-along":
    case "esriServerPointLabelPlacementAboveCenter":
    case "esriServerLinePlacementAboveAlong":
      return ["center", "bottom"];
    case "above-right":
    case "esriServerPointLabelPlacementAboveRight":
      return ["left", "bottom"];
    case "center-left":
    case "esriServerPointLabelPlacementCenterLeft":
      return ["right", "middle"];
    case "center-center":
    case "center-along":
    case "esriServerPointLabelPlacementCenterCenter":
    case "esriServerLinePlacementCenterAlong":
    case "always-horizontal":
    case "esriServerPolygonPlacementAlwaysHorizontal":
      return ["center", "middle"];
    case "center-right":
    case "esriServerPointLabelPlacementCenterRight":
      return ["left", "middle"];
    case "below-left":
    case "esriServerPointLabelPlacementBelowLeft":
      return ["right", "top"];
    case "below-center":
    case "below-along":
    case "esriServerPointLabelPlacementBelowCenter":
    case "esriServerLinePlacementBelowAlong":
      return ["center", "top"];
    case "below-right":
    case "esriServerPointLabelPlacementBelowRight":
      return ["left", "top"];
    default:
      return console.debug(`Found invalid placement type ${i}`), ["center", "middle"];
  }
}
function Ic(i) {
  switch (i) {
    case St.Right:
    case "right":
      return -1;
    case St.Center:
    case "center":
      return 0;
    case St.Left:
    case "left":
      return 1;
    default:
      return console.debug(`Found invalid horizontal alignment ${i}`), 0;
  }
}
function Tc(i) {
  switch (i) {
    case ut.Top:
    case "top":
      return 1;
    case ut.Center:
    case "middle":
      return 0;
    case ut.Bottom:
    case ut.Baseline:
    case "baseline":
    case "bottom":
      return -1;
    default:
      return console.debug(`Found invalid vertical alignment ${i}`), 0;
  }
}
(function(i) {
  i[i.Left = -1] = "Left", i[i.Center = 0] = "Center", i[i.Right = 1] = "Right";
})(St || (St = {})), function(i) {
  i[i.Top = 1] = "Top", i[i.Center = 0] = "Center", i[i.Bottom = -1] = "Bottom", i[i.Baseline = 2] = "Baseline";
}(ut || (ut = {}));
const on = 22, na = 4, zc = on + na, Lc = on - 6, Xn = 3, Ec = Math.PI / 180, Bt = 8, Nc = 1.5;
let oa = class {
  constructor(t, e, s, r) {
    this._rotationT = he(), this._xBounds = 0, this._yBounds = 0, this.minZoom = 0, this.maxZoom = 255, this._bounds = null;
    const n = s.rect, o = new Float32Array(8);
    t *= r, e *= r;
    const a = s.code ? n.width * r : s.metrics.width, h = s.code ? n.height * r : s.metrics.height;
    this.width = a, this.height = h, o[0] = t, o[1] = e, o[2] = t + a, o[3] = e, o[4] = t, o[5] = e + h, o[6] = t + a, o[7] = e + h, this._data = o, this._setTextureCoords(n), this._scale = r, this._mosaic = s, this.x = t, this.y = e, this.maxOffset = Math.max(t + a, e + h);
  }
  get mosaic() {
    return this._mosaic;
  }
  set angle(t) {
    this._angle = t, Jr(this._rotationT, -t), this._setOffsets();
  }
  get angle() {
    return this._angle;
  }
  get xTopLeft() {
    return this._data[0];
  }
  get yTopLeft() {
    return this._data[1];
  }
  get xBottomRight() {
    return this._data[6];
  }
  get yBottomRight() {
    return this._data[7];
  }
  get texcoords() {
    return this._texcoords;
  }
  get textureBinding() {
    return this._mosaic.textureBinding;
  }
  get offsets() {
    return this._offsets || this._setOffsets(), this._offsets;
  }
  get char() {
    return String.fromCharCode(this._mosaic.code);
  }
  get code() {
    return this._mosaic.code;
  }
  get bounds() {
    if (!this._bounds) {
      const { height: t, width: e } = this._mosaic.metrics, s = e * this._scale, r = Math.abs(t) * this._scale, n = new Float32Array(8);
      n[0] = this.x, n[1] = this.y, n[2] = this.x + s, n[3] = this.y, n[4] = this.x, n[5] = this.y + r, n[6] = this.x + s, n[7] = this.y + r;
      const o = pr(he(), this._rotationT, this._transform);
      xh(n, n, o);
      let a = 1 / 0, h = 1 / 0, l = 0, c = 0;
      for (let f = 0; f < 4; f++) {
        const _ = n[2 * f], y = n[2 * f + 1];
        a = Math.min(a, _), h = Math.min(h, y), l = Math.max(l, _), c = Math.max(c, y);
      }
      const u = l - a, d = c - h, p = a + u / 2, m = h + d / 2;
      this._bounds = new ve(p, m, u, d);
    }
    return this._bounds;
  }
  setTransform(t) {
    this._transform = t, this._offsets = null;
  }
  _setOffsets() {
    this._offsets || (this._offsets = { topLeft: [0, 0], topRight: [0, 0], bottomLeft: [0, 0], bottomRight: [0, 0] });
    const t = pr(he(), this._rotationT, this._transform);
    this._offsets.topLeft[0] = this._data[0], this._offsets.topLeft[1] = this._data[1], this._offsets.topRight[0] = this._data[2], this._offsets.topRight[1] = this._data[3], this._offsets.bottomLeft[0] = this._data[4], this._offsets.bottomLeft[1] = this._data[5], this._offsets.bottomRight[0] = this._data[6], this._offsets.bottomRight[1] = this._data[7], vt(this._offsets.topLeft, this._offsets.topLeft, t), vt(this._offsets.topRight, this._offsets.topRight, t), vt(this._offsets.bottomLeft, this._offsets.bottomLeft, t), vt(this._offsets.bottomRight, this._offsets.bottomRight, t);
  }
  _setTextureCoords({ x: t, y: e, width: s, height: r }) {
    this._texcoords = { topLeft: [t, e], topRight: [t + s, e], bottomLeft: [t, e + r], bottomRight: [t + s, e + r] };
  }
};
const Ac = (i, t) => ({ code: 0, page: 0, sdf: !0, rect: new ol(0, 0, 11, 8), textureBinding: t, metrics: { advance: 0, height: 4, width: i, left: 0, top: 0 } });
function Ve(i, t) {
  return i.forEach((e) => vt(e, e, t)), { topLeft: i[0], topRight: i[1], bottomLeft: i[2], bottomRight: i[3] };
}
let Fc = class {
  constructor(t, e, s) {
    this._rotation = 0, this._decorate(t, e, s), this.glyphs = t, this.bounds = this._createBounds(t), this.isMultiline = e.length > 1, this._hasRotation = s.angle !== 0, this._transform = this._createGlyphTransform(this.bounds, s), this._borderLineSizePx = s.borderLineSizePx, (s.borderLineSizePx || s.hasBackground) && ([this.bounds, this.textBox] = this.shapeBackground(this._transform));
    for (const r of t) r.setTransform(this._transform);
  }
  setRotation(t) {
    if (t === 0 && this._rotation === 0) return;
    this._rotation = t;
    const e = this._transform, s = Jr(he(), t);
    pr(e, s, e);
    for (const r of this.glyphs) r.setTransform(this._transform);
  }
  _decorate(t, e, s) {
    if (!s.decoration || s.decoration === "none" || !t.length) return;
    const r = s.scale, n = s.decoration === "underline" ? zc : Lc, o = t[0].textureBinding;
    for (const a of e) {
      const h = a.startX * r, l = a.startY * r, c = (a.width + a.glyphWidthEnd) * r;
      t.push(new oa(h, l + n * r, Ac(c, o), 1));
    }
  }
  shapeBackground(t) {
    const e = this._borderLineSizePx || 0, s = (Nc + e) / 2, r = this._borderLineSizePx ? s : 0, { xmin: n, ymin: o, xmax: a, ymax: h, x: l, y: c, width: u, height: d } = this.bounds, p = [n - Bt, o - Bt], m = [a + Bt, o - Bt], f = [n - Bt, h + Bt], _ = [a + Bt, h + Bt], y = Ve([[p[0] - s, p[1] - s], [m[0] + s, m[1] - s], [p[0] + r, p[1] + r], [m[0] - r, m[1] + r]], t), g = Ve([[f[0] + r, f[1] - r], [_[0] - r, _[1] - r], [f[0] - s, f[1] + s], [_[0] + s, _[1] + s]], t), P = Ve([[p[0] - s, p[1] - s], [p[0] + r, p[1] + r], [f[0] - s, f[1] + s], [f[0] + r, f[1] - r]], t), w = Ve([[m[0] - r, m[1] + r], [m[0] + s, m[1] - s], [_[0] - r, _[1] - r], [_[0] + s, _[1] + s]], t), M = { main: Ve([p, m, f, _], t), top: y, bot: g, left: P, right: w };
    return [new ve(l, c, u + 2 * s, d + 2 * s), M];
  }
  get boundsT() {
    const t = this.bounds, e = Rs(zn(), t.x, t.y);
    if (vt(e, e, this._transform), this._hasRotation) {
      const s = Math.max(t.width, t.height);
      return new ve(e[0], e[1], s, s);
    }
    return new ve(e[0], e[1], t.width, t.height);
  }
  _createBounds(t) {
    let e = 1 / 0, s = 1 / 0, r = 0, n = 0;
    for (const h of t) e = Math.min(e, h.xTopLeft), s = Math.min(s, h.yTopLeft), r = Math.max(r, h.xBottomRight), n = Math.max(n, h.yBottomRight);
    const o = r - e, a = n - s;
    return new ve(e + o / 2, s + a / 2, o, a);
  }
  _createGlyphTransform(t, e) {
    const s = Ec * e.angle, r = he(), n = zn();
    return hi(r, r, Rs(n, e.xOffset, -e.yOffset)), e.useCIMAngleBehavior ? dr(r, r, s) : (hi(r, r, Rs(n, t.x, t.y)), dr(r, r, s), hi(r, r, Rs(n, -t.x, -t.y))), r;
  }
}, Ks = class {
  constructor(t, e, s, r, n, o) {
    this.glyphWidthEnd = 0, this.startX = 0, this.startY = 0, this.start = Math.max(0, Math.min(e, s)), this.end = Math.max(0, Math.max(e, s)), this.end < t.length && (this.glyphWidthEnd = t[this.end].metrics.width), this.width = r, this.yMin = n, this.yMax = o;
  }
};
const wr = (i) => i === 10, Wn = (i) => i === 32;
function Rc(i, t, e) {
  const s = new Array(), r = 1 / e.scale, n = e.maxLineWidth * r, o = t ? i.length - 1 : 0, a = t ? -1 : i.length, h = t ? -1 : 1;
  let l = o, c = 0, u = 0, d = l, p = d, m = 0, f = 1 / 0, _ = 0;
  for (; l !== a; ) {
    const { code: g, metrics: P } = i[l], w = Math.abs(P.top);
    if (wr(g) || Wn(g) || (f = Math.min(f, w), _ = Math.max(_, w + P.height)), wr(g)) l !== o && (s.push(new Ks(i, d, l - h, c, f, _)), f = 1 / 0, _ = 0), c = 0, d = l + h, p = l + h, u = 0;
    else if (Wn(g)) p = l + h, u = 0, m = P.advance, c += P.advance;
    else if (c > n) {
      if (p !== d) {
        const M = p - 2 * h;
        c -= m, s.push(new Ks(i, d, M, c - u, f, _)), f = 1 / 0, _ = 0, d = p, c = u;
      } else s.push(new Ks(i, d, l - h, c, f, _)), f = 1 / 0, _ = 0, d = l, p = l, c = 0;
      c += P.advance, u += P.advance;
    } else c += P.advance, u += P.advance;
    l += h;
  }
  const y = new Ks(i, d, l - h, c, f, _);
  return y.start >= 0 && y.end < i.length && s.push(y), s;
}
function Oc(i, t) {
  let e = 0;
  for (let n = 0; n < i.length; n++) {
    const { width: o } = i[n];
    e = Math.max(o, e);
  }
  const s = t.decoration === "underline" ? na : 0, r = i[0].yMin;
  return { x: 0, y: r, height: i[i.length - 1].yMax + t.lineHeight * (i.length - 1) + s - r, width: e };
}
function an(i, t) {
  const e = t.scale, s = new Array(), { glyphs: r, isRightToLeft: n } = i, o = Rc(r, n, t), a = Oc(o, t), h = ia(t.horizontalAlignment), l = ra(t.verticalAlignment), c = l === ut.Baseline ? 1 : 0, u = c ? 0 : l - 1, d = (1 - c) * -a.y + u * (a.height / 2) + (c ? 1 : 0) * -on;
  for (let p = 0; p < o.length; p++) {
    const { start: m, end: f, width: _ } = o[p];
    let y = -1 * (h + 1) * (_ / 2) - Xn;
    const g = p * t.lineHeight + d - Xn;
    o[p].startX = y, o[p].startY = g;
    for (let P = m; P <= f; P++) {
      const w = r[P];
      if (wr(w.code)) continue;
      const M = new oa(y + w.metrics.left, g - w.metrics.top, w, e);
      y += w.metrics.advance, s.push(M);
    }
  }
  return new Fc(s, o, t);
}
const jt = Math.PI / 180, aa = 0.5, Dc = () => de.getLogger("esri.symbols.cim.CIMSymbolDrawHelper");
let te = class Pt {
  constructor(t) {
    this._t = t;
  }
  static createIdentity() {
    return new Pt([1, 0, 0, 0, 1, 0]);
  }
  clone() {
    const t = this._t;
    return new Pt(t.slice());
  }
  transform(t) {
    const e = this._t;
    return [e[0] * t[0] + e[1] * t[1] + e[2], e[3] * t[0] + e[4] * t[1] + e[5]];
  }
  static createScale(t, e) {
    return new Pt([t, 0, 0, 0, e, 0]);
  }
  scale(t, e) {
    const s = this._t;
    return s[0] *= t, s[1] *= t, s[2] *= t, s[3] *= e, s[4] *= e, s[5] *= e, this;
  }
  scaleRatio() {
    return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
  }
  static createTranslate(t, e) {
    return new Pt([0, 0, t, 0, 0, e]);
  }
  translate(t, e) {
    const s = this._t;
    return s[2] += t, s[5] += e, this;
  }
  static createRotate(t) {
    const e = Math.cos(t), s = Math.sin(t);
    return new Pt([e, -s, 0, s, e, 0]);
  }
  rotate(t) {
    return Pt.multiply(this, Pt.createRotate(t), this);
  }
  angle() {
    const t = this._t[0], e = this._t[3], s = Math.sqrt(t * t + e * e);
    return [t / s, e / s];
  }
  static multiply(t, e, s) {
    const r = t._t, n = e._t, o = r[0] * n[0] + r[3] * n[1], a = r[1] * n[0] + r[4] * n[1], h = r[2] * n[0] + r[5] * n[1] + n[2], l = r[0] * n[3] + r[3] * n[4], c = r[1] * n[3] + r[4] * n[4], u = r[2] * n[3] + r[5] * n[4] + n[5], d = s._t;
    return d[0] = o, d[1] = a, d[2] = h, d[3] = l, d[4] = c, d[5] = u, s;
  }
  invert() {
    const t = this._t;
    let e = t[0] * t[4] - t[1] * t[3];
    if (e === 0) return new Pt([0, 0, 0, 0, 0, 0]);
    e = 1 / e;
    const s = (t[1] * t[5] - t[2] * t[4]) * e, r = (t[2] * t[3] - t[0] * t[5]) * e, n = t[4] * e, o = -t[1] * e, a = -t[3] * e, h = t[0] * e;
    return new Pt([n, o, s, a, h, r]);
  }
}, hn = class {
  constructor(t, e) {
    this._resourceManager = t, this._transfos = [], this._sizeTransfos = [], this._geomUnitsPerPoint = 1, this._placementPool = new Ih(Ee, void 0, void 0, 100), this._earlyReturn = !1, this._mapRotation = 0, this._transfos.push(e || te.createIdentity()), this._sizeTransfos.push(e ? e.scaleRatio() : 1);
  }
  setTransform(t, e) {
    this._transfos = [t || te.createIdentity()], this._sizeTransfos = [e || (t ? t.scaleRatio() : 1)];
  }
  setGeomUnitsPerPoint(t) {
    this._geomUnitsPerPoint = t;
  }
  transformPt(t) {
    return this._transfos[this._transfos.length - 1].transform(t);
  }
  transformSize(t) {
    return t * this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformPt(t) {
    return this._transfos[this._transfos.length - 1].invert().transform(t);
  }
  reverseTransformSize(t) {
    return t / this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformScalar(t) {
    return t / this._transfos[this._transfos.length - 1].scaleRatio();
  }
  getTransformAngle() {
    return this._transfos[this._transfos.length - 1].angle();
  }
  geomUnitsPerPoint() {
    return this.isEmbedded() ? 1 : this._geomUnitsPerPoint;
  }
  prevGeomUnitsPerPoint() {
    return this._transfos.length > 2 ? 1 : this._geomUnitsPerPoint;
  }
  isEmbedded() {
    return this._transfos.length > 1;
  }
  back() {
    return this._transfos[this._transfos.length - 1];
  }
  push(t, e) {
    const s = e ? t.scaleRatio() : 1;
    te.multiply(t, this.back(), t), this._transfos.push(t), this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length - 1] * s);
  }
  pop() {
    this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
  }
  drawSymbol(t, e, s) {
    if (t) switch (t.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        this.drawMultiLayerSymbol(t, e);
        break;
      case "CIMTextSymbol":
        this.drawTextSymbol(t, e, s);
    }
  }
  drawMultiLayerSymbol(t, e) {
    if (!t || !e) return;
    const s = t.symbolLayers;
    if (!s) return;
    const r = t.effects;
    if (r && r.length > 0) {
      const n = this.executeEffects(r, e);
      if (n) {
        let o = n.next();
        for (; o; ) this.drawSymbolLayers(s, o.asJSON()), o = n.next();
      }
    } else this.drawSymbolLayers(s, e);
  }
  executeEffects(t, e) {
    const s = this._resourceManager.geometryEngine;
    let r = new br(N.fromJSONCIM(e));
    for (const n of t) {
      const o = Pr(n);
      o && (r = o.execute(r, n, this.geomUnitsPerPoint(), null, s));
    }
    return r;
  }
  drawSymbolLayers(t, e) {
    let s = t.length;
    for (; s--; ) {
      const r = t[s];
      if (!r || r.enable === !1) continue;
      const n = r.effects;
      if (n && n.length > 0) {
        const o = this.executeEffects(n, e);
        if (o) {
          let a = null;
          for (; (a = o.next()) && (this.drawSymbolLayer(r, a.asJSON()), !this._earlyReturn); ) ;
        }
      } else this.drawSymbolLayer(r, e);
      if (this._earlyReturn) return;
    }
  }
  drawSymbolLayer(t, e) {
    switch (t.type) {
      case "CIMSolidFill":
        this.drawSolidFill(e, t.color);
        break;
      case "CIMHatchFill":
        this.drawHatchFill(e, t);
        break;
      case "CIMPictureFill":
        this.drawPictureFill(e, t);
        break;
      case "CIMGradientFill":
        this.drawGradientFill(e, t);
        break;
      case "CIMSolidStroke":
        this.drawSolidStroke(e, t.color, t.width, t.capStyle, t.joinStyle, t.miterLimit);
        break;
      case "CIMPictureStroke":
        this.drawPictureStroke(e, t);
        break;
      case "CIMGradientStroke":
        this.drawGradientStroke(e, t);
        break;
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
      case "CIMVectorMarker":
        this.drawMarkerLayer(t, e);
    }
  }
  drawHatchFill(t, e) {
    const s = this._buildHatchPolyline(e, t, this.geomUnitsPerPoint());
    s && (this.pushClipPath(t), this.drawMultiLayerSymbol(e.lineSymbol, s), this.popClipPath());
  }
  drawPictureFill(t, e) {
  }
  drawGradientFill(t, e) {
  }
  drawPictureStroke(t, e) {
  }
  drawGradientStroke(t, e) {
  }
  drawMarkerLayer(t, e) {
    const s = t.markerPlacement;
    if (s) {
      const r = Qo(s);
      if (r) {
        const n = s.type === "CIMMarkerPlacementInsidePolygon" || s.type === "CIMMarkerPlacementPolygonCenter" && s.clipAtBoundary;
        n && this.pushClipPath(e);
        const o = r.execute(N.fromJSONCIM(e), s, this.geomUnitsPerPoint(), null, this._resourceManager.geometryEngine);
        if (o) {
          let a = null;
          for (; (a = o.next()) && (this.drawMarker(t, a), !this._earlyReturn); ) ;
        }
        n && this.popClipPath();
      }
    } else {
      const r = this._placementPool.acquire();
      if (ur(e)) r.tx = e.x, r.ty = e.y, this.drawMarker(t, r);
      else if (ct(e)) {
        const n = Th(e);
        n && ([r.tx, r.ty] = n, this.drawMarker(t, r));
      } else for (const n of e.points) if (r.tx = n[0], r.ty = n[1], this.drawMarker(t, r), this._earlyReturn) break;
      this._placementPool.release(r);
    }
  }
  drawMarker(t, e) {
    switch (t.type) {
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
        this.drawPictureMarker(t, e);
        break;
      case "CIMVectorMarker":
        this.drawVectorMarker(t, e);
    }
  }
  drawPictureMarker(t, e) {
    if (!t) return;
    const s = this._resourceManager.getResource(t.url), r = $(t.size, Rt.CIMPictureMarker.size);
    if (s == null || r <= 0) return;
    const n = s.width, o = s.height;
    if (!n || !o) return;
    const a = n / o, h = $(t.scaleX, 1), l = te.createIdentity(), c = t.anchorPoint;
    if (c) {
      let _ = c.x, y = c.y;
      t.anchorPointUnits !== "Absolute" && (_ *= r * a * h, y *= r), l.translate(-_, -y);
    }
    let u = $(t.rotation);
    t.rotateClockwise && (u = -u), this._mapRotation && (u += this._mapRotation), u && l.rotate(u * jt);
    let d = $(t.offsetX), p = $(t.offsetY);
    if (d || p) {
      if (this._mapRotation) {
        const _ = jt * this._mapRotation, y = Math.cos(_), g = Math.sin(_), P = d * g + p * y;
        d = d * y - p * g, p = P;
      }
      l.translate(d, p);
    }
    const m = this.geomUnitsPerPoint();
    m !== 1 && l.scale(m, m);
    const f = e.getAngle();
    f && l.rotate(f), l.translate(e.tx, e.ty), this.push(l, !1), this.drawImage(t, r), this.pop();
  }
  drawVectorMarker(t, e) {
    if (!t) return;
    const s = t.markerGraphics;
    if (!s) return;
    const r = $(t.size, Rt.CIMVectorMarker.size), n = t.frame, o = n ? n.ymax - n.ymin : 0, a = r && o ? r / o : 1, h = te.createIdentity();
    n && h.translate(0.5 * -(n.xmax + n.xmin), 0.5 * -(n.ymax + n.ymin));
    const l = t.anchorPoint;
    if (l) {
      let f = l.x, _ = l.y;
      t.anchorPointUnits !== "Absolute" ? n && (f *= n.xmax - n.xmin, _ *= n.ymax - n.ymin) : (f /= a, _ /= a), h.translate(-f, -_);
    }
    a !== 1 && h.scale(a, a);
    let c = $(t.rotation);
    t.rotateClockwise && (c = -c), this._mapRotation && (c += this._mapRotation), c && h.rotate(c * jt);
    let u = $(t.offsetX), d = $(t.offsetY);
    if (u || d) {
      if (this._mapRotation) {
        const f = jt * this._mapRotation, _ = Math.cos(f), y = Math.sin(f), g = u * y + d * _;
        u = u * _ - d * y, d = g;
      }
      h.translate(u, d);
    }
    const p = this.geomUnitsPerPoint();
    p !== 1 && h.scale(p, p);
    const m = e.getAngle();
    m && h.rotate(m), h.translate(e.tx, e.ty), this.push(h, t.scaleSymbolsProportionally);
    for (const f of s) {
      f?.symbol && f.geometry || Dc().error("Invalid marker graphic", f);
      let _ = f.textString;
      if (typeof _ == "number" && (_ = _.toString()), this.drawSymbol(f.symbol, f.geometry, _), this._earlyReturn) break;
    }
    this.pop();
  }
  drawTextSymbol(t, e, s) {
    if (!t || !ur(e) || $(t.height, Rt.CIMTextSymbol.height) <= 0) return;
    const r = te.createIdentity();
    let n = $(t.angle);
    n = -n, n && r.rotate(n * jt);
    const o = $(t.offsetX), a = $(t.offsetY);
    (o || a) && r.translate(o, a);
    const h = this.geomUnitsPerPoint();
    h !== 1 && r.scale(h, h), r.translate(e.x, e.y), this.push(r, !1), this.drawText(t, s), this.pop();
  }
  _buildHatchPolyline(t, e, s) {
    let r = $(t.separation, Rt.CIMHatchFill.separation) * s, n = $(t.rotation);
    if (r === 0) return null;
    r < 0 && (r = -r);
    let o = 0;
    const a = 0.5 * r;
    for (; o > a; ) o -= r;
    for (; o < -a; ) o += r;
    const h = Ie();
    go(h, e), h[0] -= a, h[1] -= a, h[2] += a, h[3] += a;
    const l = [[h[0], h[1]], [h[0], h[3]], [h[2], h[3]], [h[2], h[1]]];
    for (; n > 180; ) n -= 180;
    for (; n < 0; ) n += 180;
    const c = Math.cos(n * jt), u = Math.sin(n * jt), d = -r * u, p = r * c;
    let m, f, _, y;
    o = $(t.offsetX) * s * u - $(t.offsetY) * s * c, m = _ = Number.MAX_VALUE, f = y = -Number.MAX_VALUE;
    for (const z of l) {
      const A = z[0], R = z[1], K = c * A + u * R, q = -u * A + c * R;
      m = Math.min(m, K), _ = Math.min(_, q), f = Math.max(f, K), y = Math.max(y, q);
    }
    _ = Math.floor(_ / r) * r;
    let g = c * m - u * _ - d * o / r, P = u * m + c * _ - p * o / r, w = c * f - u * _ - d * o / r, M = u * f + c * _ - p * o / r;
    const k = 1 + Math.round((y - _) / r), F = [];
    for (let z = 0; z < k; z++) g += d, P += p, w += d, M += p, F.push([[g, P], [w, M]]);
    return { paths: F };
  }
}, Gc = class extends hn {
  constructor(t, e) {
    super(t, e), this.reset();
  }
  reset() {
    this._xmin = this._ymin = 1 / 0, this._xmax = this._ymax = -1 / 0, this._clipCount = 0;
  }
  envelope() {
    return new Mc(this._xmin, this._ymin, this._xmax - this._xmin, this._ymax - this._ymin);
  }
  bounds() {
    return bh(this._xmin, this._ymin, this._xmax, this._ymax);
  }
  drawSolidFill(t) {
    if (t && !(this._clipCount > 0)) if (ct(t)) this._processPath(t.rings, 0);
    else if (wt(t)) this._processPath(t.paths, 0);
    else if (_t(t)) {
      const e = ie(t);
      e && this._processPath(e.rings, 0);
    } else console.error("drawSolidFill Unexpected geometry type!");
  }
  drawSolidStroke(t, e, s) {
    if (!t || this._clipCount > 0 || s == null || s <= 0) return;
    const r = Math.max(0.5 * this.transformSize($(s, Rt.CIMSolidStroke.width)), 0.5 * aa);
    if (ct(t)) this._processPath(t.rings, r);
    else if (wt(t)) this._processPath(t.paths, r);
    else if (_t(t)) {
      const n = ie(t);
      n && this._processPath(n.rings, r);
    } else console.error("drawSolidStroke unexpected geometry type!");
  }
  drawMarkerLayer(t, e) {
    ct(e) && t.markerPlacement && (t.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" || t.markerPlacement.type === "CIMMarkerPlacementPolygonCenter" && t.markerPlacement.clipAtBoundary) ? this._processPath(e.rings, 0) : super.drawMarkerLayer(t, e);
  }
  drawHatchFill(t, e) {
    this.drawSolidFill(t);
  }
  drawPictureFill(t, e) {
    this.drawSolidFill(t);
  }
  drawGradientFill(t, e) {
    this.drawSolidFill(t);
  }
  drawPictureStroke(t, e) {
    this.drawSolidStroke(t, null, e.width);
  }
  drawGradientStroke(t, e) {
    this.drawSolidStroke(t, null, e.width);
  }
  pushClipPath(t) {
    this.drawSolidFill(t), this._clipCount++;
  }
  popClipPath() {
    this._clipCount--;
  }
  drawImage(t, e) {
    const { url: s } = t, r = $(t.scaleX, 1);
    let n = r * e, o = e;
    const a = this._resourceManager.getResource(s);
    if (a != null) {
      const h = a.height / a.width;
      n = r * (e ? h > 1 ? e : e / h : a.width), o = e ? h > 1 ? e * h : e : a.height;
    }
    this._merge(this.transformPt([-n / 2, -o / 2]), 0), this._merge(this.transformPt([-n / 2, o / 2]), 0), this._merge(this.transformPt([n / 2, -o / 2]), 0), this._merge(this.transformPt([n / 2, o / 2]), 0);
  }
  drawText(t, e) {
    if (!e || e.length === 0) return;
    this._textRasterizer || (this._textRasterizer = new sa());
    const s = la(t);
    let [r, n] = this._textRasterizer.computeTextSize(e, s);
    r = ue(r), n = ue(n);
    let o = 0;
    switch (t.horizontalAlignment) {
      case "Left":
        o = r / 2;
        break;
      case "Right":
        o = -r / 2;
    }
    let a = 0;
    switch (t.verticalAlignment) {
      case "Bottom":
        a = n / 2;
        break;
      case "Top":
        a = -n / 2;
        break;
      case "Baseline":
        a = n / 6;
    }
    this._merge(this.transformPt([-r / 2 + o, -n / 2 + a]), 0), this._merge(this.transformPt([-r / 2 + o, n / 2 + a]), 0), this._merge(this.transformPt([r / 2 + o, -n / 2 + a]), 0), this._merge(this.transformPt([r / 2 + o, n / 2 + a]), 0);
  }
  _processPath(t, e) {
    if (t) for (const s of t) {
      const r = s ? s.length : 0;
      if (r > 1) {
        this._merge(this.transformPt(s[0]), e);
        for (let n = 1; n < r; n++) this._merge(this.transformPt(s[n]), e);
      }
    }
  }
  _merge(t, e) {
    t[0] - e < this._xmin && (this._xmin = t[0] - e), t[0] + e > this._xmax && (this._xmax = t[0] + e), t[1] - e < this._ymin && (this._ymin = t[1] - e), t[1] + e > this._ymax && (this._ymax = t[1] + e);
  }
}, wf = class extends hn {
  constructor() {
    super(...arguments), this._searchPoint = [0, 0], this._searchDistPoint = 0, this._textInfo = null;
  }
  hitTest(t, e, s, r, n, o) {
    const a = o * I(1);
    this.setTransform(), this.setGeomUnitsPerPoint(a), this._searchPoint = [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2], this._searchDistPoint = (t[2] - t[0]) / 2 / a, this._textInfo = r;
    const h = e && (e.type === "CIMPointSymbol" && e.angleAlignment !== "Map" || e.type === "CIMTextSymbol");
    if (this._mapRotation = h ? n : 0, !le("esri-mobile")) {
      const l = ue(le("hittest-2d-small-symbol-tolerance") * window.devicePixelRatio), c = ue(le("hittest-2d-small-symbol-tolerance-threshold"));
      !((e?.type === "CIMLineSymbol" || e?.type === "CIMPolygonSymbol") && e.symbolLayers?.some(Ph)) && e?.type !== "CIMMeshSymbol" && (wh(e) ?? 0) < c && (this._searchDistPoint = l);
    }
    return this._earlyReturn = !1, this.drawSymbol(e, s), this._earlyReturn;
  }
  drawSolidFill(t, e) {
    this._hitTestFill(t);
  }
  drawHatchFill(t, e) {
    this._hitTestFill(t);
  }
  drawPictureFill(t, e) {
    this._hitTestFill(t);
  }
  drawGradientFill(t, e) {
    this._hitTestFill(t);
  }
  drawSolidStroke(t, e, s, r, n, o) {
    this._hitTestStroke(t, s);
  }
  drawPictureStroke(t, e) {
    this._hitTestStroke(t, e.width);
  }
  drawGradientStroke(t, e) {
    this._hitTestStroke(t, e.width);
  }
  drawMarkerLayer(t, e) {
    t.markerPlacement && (t.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" || t.markerPlacement.type === "CIMMarkerPlacementPolygonCenter" && t.markerPlacement.clipAtBoundary) ? this._hitTestFill(e) : super.drawMarkerLayer(t, e);
  }
  pushClipPath(t) {
  }
  popClipPath() {
  }
  drawImage(t, e) {
    const { url: s } = t, r = $(t.scaleX, 1), n = this._resourceManager.getResource(s);
    if (n == null || n.height === 0 || e === 0) return;
    const o = e * this.geomUnitsPerPoint(), a = o * r * (n.width / n.height), h = this.reverseTransformPt(this._searchPoint), l = this._searchDistPoint;
    Math.abs(h[0]) < a / 2 + l && Math.abs(h[1]) < o / 2 + l && (this._earlyReturn = !0);
  }
  drawText(t, e) {
    const s = this._textInfo;
    if (!s) return;
    const r = s.get(t);
    if (!r || !r.glyphMosaicItems.glyphs.length) return;
    const n = $(t.height, Rt.CIMTextSymbol.height), { lineGapType: o, lineGap: a } = t, h = o ? ha(o, $(a), n) : 0, l = t.callout?.type === "CIMBackgroundCallout", c = an(r.glyphMosaicItems, { scale: n / en, angle: 0, xOffset: 0, yOffset: 0, horizontalAlignment: t.horizontalAlignment, verticalAlignment: t.verticalAlignment, maxLineWidth: 512, lineHeight: sn * Math.max(0.25, Math.min(h || 1, 4)), decoration: t.font.decoration || "none", useCIMAngleBehavior: !0, hasBackground: l }), u = this.reverseTransformPt(this._searchPoint), d = u[0], p = u[1];
    for (const m of c.glyphs) if (d > m.xTopLeft && d < m.xBottomRight && p > -m.yBottomRight && p < -m.yTopLeft) {
      this._earlyReturn = !0;
      break;
    }
  }
  _hitTestFill(t) {
    let e = null;
    if (_t(t)) {
      const r = t;
      e = [[[r.xmin, r.ymin], [r.xmin, r.ymax], [r.xmax, r.ymax], [r.xmax, r.ymin], [r.xmin, r.ymin]]];
    } else if (ct(t)) e = t.rings;
    else {
      if (!wt(t)) return;
      e = t.paths;
    }
    const s = this.reverseTransformPt(this._searchPoint);
    if (this._pointInPolygon(s, e) && (this._earlyReturn = !0), !this._earlyReturn) {
      const r = this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint();
      this._nearLine(s, e, r) && (this._earlyReturn = !0);
    }
  }
  _hitTestStroke(t, e) {
    let s = null;
    if (_t(t)) {
      const a = t;
      s = [[[a.xmin, a.ymin], [a.xmin, a.ymax], [a.xmax, a.ymax], [a.xmax, a.ymin], [a.xmin, a.ymin]]];
    } else if (ct(t)) s = t.rings;
    else {
      if (!wt(t)) return;
      s = t.paths;
    }
    const r = this.reverseTransformPt(this._searchPoint), n = $(e, Rt.CIMSolidStroke.width) * this.geomUnitsPerPoint(), o = this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint();
    this._nearLine(r, s, n / 2 + o) && (this._earlyReturn = !0);
  }
  _pointInPolygon(t, e) {
    let s = 0;
    for (const r of e) {
      const n = r.length;
      for (let o = 1; o < n; o++) {
        const a = r[o - 1], h = r[o];
        a[1] > t[1] != h[1] > t[1] && ((h[0] - a[0]) * (t[1] - a[1]) - (h[1] - a[1]) * (t[0] - a[0]) > 0 ? s++ : s--);
      }
    }
    return s !== 0;
  }
  _nearLine(t, e, s) {
    for (const r of e) {
      const n = r.length;
      for (let o = 1; o < n; o++) {
        const a = r[o - 1], h = r[o];
        let l = (h[0] - a[0]) * (h[0] - a[0]) + (h[1] - a[1]) * (h[1] - a[1]);
        if (l === 0) continue;
        l = Math.sqrt(l);
        const c = ((h[0] - a[0]) * (t[1] - a[1]) - (h[1] - a[1]) * (t[0] - a[0])) / l;
        if (Math.abs(c) < s) {
          const u = ((h[0] - a[0]) * (t[0] - a[0]) + (h[1] - a[1]) * (t[1] - a[1])) / l;
          if (u > -s && u < l + s) return !0;
        }
      }
    }
    return !1;
  }
}, Bc = class extends hn {
  constructor(t, e, s, r) {
    super(e, s), this._applyAdditionalRenderProps = r, this._colorSubstitutionHelper = new vc(), this._ctx = t;
  }
  drawSolidFill(t, e) {
    if (!t) return;
    if (ct(t)) this._buildPath(t.rings, !0);
    else if (wt(t)) this._buildPath(t.paths, !0);
    else if (_t(t)) this._buildPath(ie(t).rings, !0);
    else {
      if (!ai(t)) return;
      console.log("CanvasDrawHelper.drawSolidFill - No implementation!");
    }
    const s = this._ctx;
    s.fillStyle = typeof e == "string" ? e : "rgba(" + Math.round(e[0]) + "," + Math.round(e[1]) + "," + Math.round(e[2]) + "," + (e[3] ?? 255) / 255 + ")", s.fill("evenodd");
  }
  drawSolidStroke(t, e, s, r, n, o) {
    if (!t || !e || s === 0) return;
    if (ct(t)) this._buildPath(t.rings, !0);
    else if (wt(t)) this._buildPath(t.paths, !1);
    else {
      if (!_t(t)) return void console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!");
      this._buildPath(ie(t).rings, !0);
    }
    const a = this._ctx;
    a.strokeStyle = typeof e == "string" ? e : "rgba(" + Math.round(e[0]) + "," + Math.round(e[1]) + "," + Math.round(e[2]) + "," + (e[3] ?? 255) / 255 + ")", a.lineWidth = Math.max(this.transformSize(s), aa), this._setCapStyle(r), this._setJoinStyle(n), a.miterLimit = o, a.stroke();
  }
  pushClipPath(t) {
    if (this._ctx.save(), ct(t)) this._buildPath(t.rings, !0);
    else if (wt(t)) this._buildPath(t.paths, !0);
    else {
      if (!_t(t)) return;
      this._buildPath(ie(t).rings, !0);
    }
    this._ctx.clip("evenodd");
  }
  popClipPath() {
    this._ctx.restore();
  }
  drawImage(t, e) {
    const { colorSubstitutions: s, url: r, tintColor: n } = t, o = $(t.scaleX, 1), a = this._resourceManager.getResource(r);
    if (a == null) return;
    let h = e * (a.width / a.height), l = e;
    e || (h = a.width, l = a.height);
    const c = ge(r) || "src" in a && ge(a.src);
    let u = "getFrame" in a ? ar(a) : a;
    s && (u = this._colorSubstitutionHelper.applyColorSubstituition(u, s)), this._applyAdditionalRenderProps && !c && n && (u = this._colorSubstitutionHelper.tintImageData(u, n));
    const d = this.transformPt([0, 0]), [p, m] = this.getTransformAngle(), f = this.transformSize(1), _ = this._ctx;
    _.save(), _.setTransform({ m11: o * f * p, m12: o * f * m, m21: -f * m, m22: f * p, m41: d[0], m42: d[1] }), _.drawImage(u, -h / 2, -l / 2, h, l), _.restore();
  }
  drawText(t, e) {
    if (!e || e.length === 0) return;
    this._textRasterizer || (this._textRasterizer = new sa());
    const s = la(t);
    s.size *= this.transformSize(ue(1));
    const r = this._textRasterizer.rasterizeText(e, s);
    if (!r) return;
    const { size: n, anchorX: o, anchorY: a, canvas: h } = r, l = n[0] * (o + 0.5), c = n[1] * (a - 0.5), u = this._ctx, d = this.transformPt([0, 0]), [p, m] = this.getTransformAngle(), f = 1;
    u.save(), u.setTransform({ m11: f * p, m12: f * m, m21: -f * m, m22: f * p, m41: d[0] - f * l, m42: d[1] + f * c }), u.drawImage(h, 0, 0), u.restore();
  }
  drawPictureFill(t, e) {
    if (!t) return;
    let { colorSubstitutions: s, height: r, offsetX: n, offsetY: o, rotation: a, scaleX: h, tintColor: l, url: c } = e;
    const u = this._resourceManager.getResource(c);
    if (u == null) return;
    if (ct(t)) this._buildPath(t.rings, !0);
    else if (wt(t)) this._buildPath(t.paths, !0);
    else if (_t(t)) this._buildPath(ie(t).rings, !0);
    else {
      if (!ai(t)) return;
      console.log("CanvasDrawHelper.drawPictureFill - No implementation!");
    }
    const d = this._ctx, p = ge(c) || "src" in u && ge(u.src);
    let m, f = "getFrame" in u ? ar(u) : u;
    if (s && (f = this._colorSubstitutionHelper.applyColorSubstituition(f, s)), this._applyAdditionalRenderProps) {
      p || l && (f = this._colorSubstitutionHelper.tintImageData(f, l)), m = d.createPattern(f, "repeat");
      const _ = this.transformSize(1);
      a || (a = 0), n ? n *= _ : n = 0, o ? o *= _ : o = 0, r && (r *= _);
      const y = r ? r / u.height : 1, g = h && r ? h * r / u.width : 1;
      if (a !== 0 || y !== 1 || g !== 1 || n !== 0 || o !== 0) {
        const P = new DOMMatrix();
        P.rotateSelf(0, 0, -a).translateSelf(n, o).scaleSelf(g, y, 1), m.setTransform(P);
      }
    } else m = d.createPattern(f, "repeat");
    d.save(), d.fillStyle = m, d.fill("evenodd"), d.restore();
  }
  drawPictureStroke(t, e) {
    if (!t) return;
    let { colorSubstitutions: s, capStyle: r, joinStyle: n, miterLimit: o, tintColor: a, url: h, width: l } = e;
    const c = this._resourceManager.getResource(h);
    if (c == null) return;
    let u;
    if (ct(t)) u = t.rings;
    else if (wt(t)) u = t.paths;
    else {
      if (!_t(t)) return ai(t) ? void console.log("CanvasDrawHelper.drawPictureStroke - No implementation!") : void 0;
      u = ie(t).rings;
    }
    l || (l = c.width);
    const d = ge(h) || "src" in c && ge(c.src);
    let p = "getFrame" in c ? ar(c) : c;
    s && (p = this._colorSubstitutionHelper.applyColorSubstituition(p, s)), this._applyAdditionalRenderProps && (d || a && (p = this._colorSubstitutionHelper.tintImageData(p, a)));
    const m = Math.max(this.transformSize(I(l)), 0.5), f = m / p.width, _ = this._ctx, y = _.createPattern(p, "repeat-y");
    let g, P;
    _.save(), this._setCapStyle(r), this._setJoinStyle(n), o !== void 0 && (_.miterLimit = o), _.lineWidth = m;
    for (let w of u) if (w = $e(w), Hc(w), w && !(w.length <= 1)) {
      g = this.transformPt(w[0]);
      for (let M = 1; M < w.length; M++) {
        P = this.transformPt(w[M]);
        const k = Vc(g, P), F = new DOMMatrix();
        F.translateSelf(0, g[1] - m / 2).scaleSelf(f, f, 1).rotateSelf(0, 0, 90 - k), y.setTransform(F), _.strokeStyle = y, _.beginPath(), _.moveTo(g[0], g[1]), _.lineTo(P[0], P[1]), _.stroke(), g = P;
      }
    }
    _.restore();
  }
  _buildPath(t, e) {
    const s = this._ctx;
    if (s.beginPath(), t) for (const r of t) {
      const n = r ? r.length : 0;
      if (n > 1) {
        let o = this.transformPt(r[0]);
        s.moveTo(o[0], o[1]);
        for (let a = 1; a < n; a++) o = this.transformPt(r[a]), s.lineTo(o[0], o[1]);
        e && s.closePath();
      }
    }
  }
  _setCapStyle(t) {
    switch (t) {
      case st.Butt:
        this._ctx.lineCap = "butt";
        break;
      case st.Round:
        this._ctx.lineCap = "round";
        break;
      case st.Square:
        this._ctx.lineCap = "square";
    }
  }
  _setJoinStyle(t) {
    switch (t) {
      case pt.Bevel:
        this._ctx.lineJoin = "bevel";
        break;
      case pt.Round:
        this._ctx.lineJoin = "round";
        break;
      case pt.Miter:
        this._ctx.lineJoin = "miter";
    }
  }
};
function Vc(i, t) {
  const e = t[0] - i[0], s = t[1] - i[1];
  return 180 / Math.PI * Math.atan2(s, e);
}
const ie = (i) => i ? { spatialReference: i.spatialReference, rings: [[[i.xmin, i.ymin], [i.xmin, i.ymax], [i.xmax, i.ymax], [i.xmax, i.ymin], [i.xmin, i.ymin]]] } : null, ha = (i, t, e) => {
  switch (i) {
    case "ExtraLeading":
      return 1 + t / e;
    case "Multiple":
      return t;
    case "Exact":
      return t / e;
  }
};
function la(i, t = 1) {
  const e = mo(i), s = _o(i.fontStyleName), r = i.fontFamilyName ?? ta, { weight: n, style: o } = s, a = t * (i.height || 5), h = Sh(i.horizontalAlignment), l = vh(i.verticalAlignment), c = Ki(i), u = Ki(i.haloSymbol), d = u != null ? t * (i.haloSize ?? 0) : 0, p = i.callout?.type === "CIMBackgroundCallout" ? i.callout.backgroundSymbol : null, m = Ki(p), f = Mh(p), _ = Ch(p);
  return { color: c, size: a, horizontalAlignment: h, verticalAlignment: l, font: { family: r, style: $h(o), weight: kh(n), decoration: e }, halo: { size: d || 0, color: u, style: o }, backgroundColor: m, borderLine: f != null && _ != null ? { size: f, color: _ } : null, pixelRatio: 1, premultiplyColors: !0 };
}
const Yc = 1e-4;
function Hc(i) {
  let t, e, s, r, n, o = i[0], a = 1;
  for (; a < i.length; ) t = i[a][0] - o[0], e = i[a][1] - o[1], r = t !== 0 ? e / t : Math.PI / 2, s !== void 0 && r - s <= Yc ? (i.splice(a - 1, 1), o = n) : (n = o, o = i[a], a++), s = r;
}
const ca = Math.PI, Uc = ca / 2, qn = Math.PI / 180, bt = 96 / 72, Zn = 4, zi = () => de.getLogger("esri.symbols.cim.CIMSymbolHelper");
function Mf(i) {
  let t;
  switch (i.type) {
    case "cim":
      return i.data;
    case "web-style":
      return i;
    case "simple-marker": {
      const e = ye.fromSimpleMarker(i);
      if (!e) throw new Error("InternalError: Cannot convert symbol to CIM");
      t = e;
      break;
    }
    case "picture-marker":
      t = ye.fromPictureMarker(i);
      break;
    case "simple-line":
      t = ye.fromSimpleLineSymbol(i);
      break;
    case "simple-fill":
      t = ye.fromSimpleFillSymbol(i);
      break;
    case "picture-fill":
      t = ye.fromPictureFillSymbol(i);
      break;
    case "text":
      t = ye.fromTextSymbol(i);
  }
  return { type: "CIMSymbolReference", symbol: t };
}
function ui(i, t, e) {
  switch (t.type) {
    case "CIMSymbolReference":
      return ui(i, t.symbol, e);
    case "CIMPointSymbol":
      e == null && (e = { x: 0, y: 0 }), i.drawSymbol(t, e);
      break;
    case "CIMLineSymbol":
      e == null && (e = { paths: [[[0, 0], [10, 0]]] }), i.drawSymbol(t, e);
      break;
    case "CIMPolygonSymbol":
      e == null && (e = { rings: [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]] }), i.drawSymbol(t, e);
      break;
    case "CIMTextSymbol": {
      const s = { x: 0, y: 0 };
      i.drawSymbol(t, s);
      break;
    }
    case "CIMVectorMarker": {
      const s = new Ee();
      i.drawMarker(t, s);
      break;
    }
  }
  return i.envelope();
}
function Xc(i) {
  if (!i) return 0;
  switch (i.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
    case "CIMMarkerPlacementAlongLineRandomSize":
    case "CIMMarkerPlacementAtExtremities":
    case "CIMMarkerPlacementAtMeasuredUnits":
    case "CIMMarkerPlacementAtRatioPositions":
    case "CIMMarkerPlacementOnLine":
    case "CIMMarkerPlacementOnVertices":
      return Math.abs(i.offset);
    default:
      return 0;
  }
}
function Wc(i) {
  if (!i) return 0;
  switch (i.type) {
    case "CIMGeometricEffectArrow":
      return Math.abs(0.5 * i.width);
    case "CIMGeometricEffectBuffer":
      return Math.abs(i.size);
    case "CIMGeometricEffectExtension":
    case "CIMGeometricEffectRadial":
      return Math.abs(i.length);
    case "CIMGeometricEffectJog":
      return Math.abs(0.5 * i.length);
    case "CIMGeometricEffectMove":
      return Math.max(Math.abs($(i.offsetX)), Math.abs($(i.offsetY)));
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectOffsetTangent":
      return Math.abs(i.offset);
    case "CIMGeometricEffectRegularPolygon":
      return Math.abs(i.radius);
    case "CIMGeometricEffectRotate":
    case "CIMGeometricEffectScale":
    default:
      return 0;
    case "CIMGeometricEffectTaperedPolygon":
      return 0.5 * Math.max(Math.abs(i.fromWidth), Math.abs(i.toWidth));
    case "CIMGeometricEffectWave":
      return Math.abs(i.amplitude);
    case "CIMGeometricEffectDonut":
      return Math.abs(i.width);
  }
}
function Li(i) {
  if (!i) return 0;
  let t = 0;
  for (const e of i) t += Wc(e);
  return t;
}
let Cf = class {
  static getSymbolInflateSize(t, e, s, r, n) {
    return t || (t = [0, 0, 0, 0]), e ? this._getInflateSize(t, e, s, r, n) : t;
  }
  static safeSize(t) {
    const e = Math.max(Math.abs(t[0]), Math.abs(t[2])), s = Math.max(Math.abs(t[1]), Math.abs(t[3]));
    return Math.sqrt(e * e + s * s);
  }
  static _vectorMarkerBounds(t, e, s, r) {
    let n = !0;
    const o = Ie();
    if (e?.markerGraphics) for (const a of e.markerGraphics) {
      const h = [0, 0, 0, 0];
      a.geometry && (go(o, a.geometry), h[0] = 0, h[1] = 0, h[2] = 0, h[3] = 0, this.getSymbolInflateSize(h, a.symbol, s, 0, r), o[0] += h[0], o[1] += h[1], o[2] += h[2], o[3] += h[3], n ? (t[0] = o[0], t[1] = o[1], t[2] = o[2], t[3] = o[3], n = !1) : (t[0] = Math.min(t[0], o[0]), t[1] = Math.min(t[1], o[1]), t[2] = Math.max(t[2], o[2]), t[3] = Math.max(t[3], o[3])));
    }
    return t;
  }
  static _getInflateSize(t, e, s, r, n) {
    if (Qc(e)) {
      const o = this._getLayersInflateSize(t, e.symbolLayers, s, r, n), a = Li(e.effects);
      return a > 0 && (o[0] -= a, o[1] -= a, o[2] += a, o[3] += a), o;
    }
    return this._getTextInflatedSize(t, e, n);
  }
  static _getLayersInflateSize(t, e, s, r, n) {
    let o = !0;
    if (!e) return t;
    for (const a of e) {
      if (!a) continue;
      let h = [0, 0, 0, 0];
      switch (a.type) {
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke": {
          const c = a;
          let u = c.width;
          u != null && (c.capStyle === st.Square || c.joinStyle === pt.Miter ? u /= 1.4142135623730951 : u /= 2, h[0] = -u, h[1] = -u, h[2] = u, h[3] = u);
          break;
        }
        case "CIMCharacterMarker":
        case "CIMVectorMarker":
        case "CIMPictureMarker": {
          const c = a;
          if (a.type === "CIMVectorMarker") {
            const f = a;
            if (h = this._vectorMarkerBounds(h, f, s, n), f.frame) {
              const _ = (f.frame.xmin + f.frame.xmax) / 2, y = (f.frame.ymin + f.frame.ymax) / 2;
              if (h[0] -= _, h[1] -= y, h[2] -= _, h[3] -= y, f.size != null) {
                const g = f.size / (f.frame.ymax - f.frame.ymin);
                h[0] *= g, h[1] *= g, h[2] *= g, h[3] *= g;
              }
            }
          } else if (a.type === "CIMPictureMarker") {
            const f = a, _ = s.getResource(f.url);
            let y = 1;
            if (_ != null && _.height && (y = _.width / _.height), c.size != null) {
              const g = c.size / 2, P = c.size * y * f.scaleX / 2;
              h = [-P, -g, P, g];
            }
          } else if (c.size != null) {
            const f = c.size / 2;
            h = [-f, -f, f, f];
          }
          if (c.anchorPoint) {
            let f, _;
            c.anchorPointUnits === "Absolute" ? (f = c.anchorPoint.x, _ = c.anchorPoint.y) : (f = c.anchorPoint.x * (h[2] - h[0]), _ = c.anchorPoint.y * (h[3] - h[1])), h[0] -= f, h[1] -= _, h[2] -= f, h[3] -= _;
          }
          let u = $(c.rotation);
          if (c.rotateClockwise && (u = -u), r && (u -= r), u) {
            const f = qn * u, _ = Math.cos(f), y = Math.sin(f), g = Ie([Ds, Ds, -Ds, -Ds]);
            Os(g, [h[0] * _ - h[1] * y, h[0] * y + h[1] * _]), Os(g, [h[0] * _ - h[3] * y, h[0] * y + h[3] * _]), Os(g, [h[2] * _ - h[1] * y, h[2] * y + h[1] * _]), Os(g, [h[2] * _ - h[3] * y, h[2] * y + h[3] * _]), h = g;
          }
          let d = $(c.offsetX), p = $(c.offsetY);
          if (r) {
            const f = qn * r, _ = Math.cos(f), y = Math.sin(f), g = d * y + p * _;
            d = d * _ - p * y, p = g;
          }
          h[0] += d, h[1] += p, h[2] += d, h[3] += p;
          const m = Xc(c.markerPlacement);
          m > 0 && (h[0] -= m, h[1] -= m, h[2] += m, h[3] += m);
          break;
        }
      }
      const l = Li(a.effects);
      l > 0 && (h[0] -= l, h[1] -= l, h[2] += l, h[3] += l), o ? (t[0] = h[0], t[1] = h[1], t[2] = h[2], t[3] = h[3], o = !1) : (t[0] = Math.min(t[0], h[0]), t[1] = Math.min(t[1], h[1]), t[2] = Math.max(t[2], h[2]), t[3] = Math.max(t[3], h[3]));
    }
    return t;
  }
  static _getTextInflatedSize(t, e, s) {
    const r = e.height ?? Rt.CIMTextSymbol.height;
    if (t[0] = -r / 2, t[1] = -r / 2, t[2] = r / 2, t[3] = r / 2, !s) return t;
    const n = s.get(e);
    if (!n || !n.glyphMosaicItems.glyphs.length) return t;
    const { lineGapType: o, lineGap: a } = e, h = o ? ha(o, a ?? 0, r) : 0, l = e.callout?.type === "CIMBackgroundCallout", c = an(n.glyphMosaicItems, { scale: r / en, angle: $(e.angle), xOffset: $(e.offsetX), yOffset: $(e.offsetY), horizontalAlignment: e.horizontalAlignment, verticalAlignment: e.verticalAlignment, maxLineWidth: 512, lineHeight: sn * Math.max(0.25, Math.min(h || 1, 4)), decoration: e.font.decoration || "none", useCIMAngleBehavior: !0, hasBackground: l }).boundsT;
    return t[0] = c.x - c.halfWidth, t[1] = -c.y - c.halfHeight, t[2] = c.x + c.halfWidth, t[3] = -c.y + c.halfHeight, t;
  }
}, ye = class pi {
  static getEnvelope(t, e, s) {
    if (!t) return null;
    const r = new Gc(s);
    if (Array.isArray(t)) {
      let n;
      for (const o of t) n ? n.union(ui(r, o, e)) : n = ui(r, o, e);
      return n;
    }
    return ui(r, t, e);
  }
  static getTextureAnchor(t, e) {
    const s = this.getEnvelope(t, null, e);
    if (!s) return [0, 0, 0];
    const r = (s.x + 0.5 * s.width) * bt, n = (s.y + 0.5 * s.height) * bt, o = s.width * bt + 2, a = s.height * bt + 2;
    return [-r / o, -n / a, a];
  }
  static rasterize(t, e, s, r, n = !0) {
    const o = s || this.getEnvelope(e, null, r);
    if (!o) return [null, 0, 0, 0, 0];
    const a = (o.x + 0.5 * o.width) * bt, h = (o.y + 0.5 * o.height) * bt;
    t.width = o.width * bt, t.height = o.height * bt, s || (t.width += 2, t.height += 2);
    const l = t.getContext("2d", { willReadFrequently: !0 }), c = te.createScale(bt, -bt);
    c.translate(0.5 * t.width - a, 0.5 * t.height + h);
    const u = new Bc(l, r, c);
    switch (e.type) {
      case "CIMPointSymbol": {
        const m = { type: "point", x: 0, y: 0 };
        u.drawSymbol(e, m);
        break;
      }
      case "CIMVectorMarker": {
        const m = new Ee();
        u.drawMarker(e, m);
        break;
      }
    }
    const d = l.getImageData(0, 0, t.width, t.height), p = new Uint8Array(d.data);
    if (n) {
      let m;
      for (let f = 0; f < p.length; f += 4) m = p[f + 3] / 255, p[f] = p[f] * m, p[f + 1] = p[f + 1] * m, p[f + 2] = p[f + 2] * m;
    }
    return [p, t.width, t.height, -a / t.width, -h / t.height];
  }
  static fromTextSymbol(t) {
    const { text: e } = t;
    return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: !0, anchorPointUnits: "Relative", dominantSizeAxis3D: "Y", size: 10, billboardMode3D: "FaceNearPlane", frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { x: 0, y: 0 }, symbol: pi.createCIMTextSymbolfromTextSymbol(t), textString: e }], scaleSymbolsProportionally: !0, respectFrame: !0 }], scaleX: 1, angleAlignment: "Display" };
  }
  static fromPictureFillSymbol(t) {
    const { height: e, outline: s, width: r, xoffset: n, xscale: o, yoffset: a, yscale: h } = t, l = [], c = { type: "CIMPolygonSymbol", symbolLayers: l };
    if (s) {
      const f = jn(s);
      f && l.push(f);
    }
    let u = t.url;
    t.type === "esriPFS" && t.imageData && (u = t.imageData);
    const d = "angle" in t ? t.angle ?? 0 : 0, p = (r ?? 0) * (o || 1), m = (e ?? 0) * (h || 1);
    return l.push({ type: "CIMPictureFill", invertBackfaceTexture: !1, scaleX: 1, textureFilter: Vs.Picture, tintColor: null, url: u, height: m, width: p, offsetX: $(n), offsetY: $(a), rotation: $(-d), colorSubstitutions: null }), c;
  }
  static fromSimpleFillSymbol(t) {
    const { color: e, style: s, outline: r } = t, n = [], o = { type: "CIMPolygonSymbol", symbolLayers: n };
    if (r) {
      const a = jn(r);
      a && n.push(a);
    }
    if (s && s !== "solid" && s !== "none" && s !== "esriSFSSolid" && s !== "esriSFSNull") {
      const a = { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", color: rt(e), capStyle: st.Butt, joinStyle: pt.Miter, width: 0.75 }] };
      let h = 0;
      const l = ue(tu(s) ? 8 : 10);
      switch (s) {
        case "vertical":
        case "esriSFSVertical":
          h = 90;
          break;
        case "forward-diagonal":
        case "esriSFSForwardDiagonal":
        case "diagonal-cross":
        case "esriSFSDiagonalCross":
          h = -45;
          break;
        case "backward-diagonal":
        case "esriSFSBackwardDiagonal":
          h = 45;
          break;
        case "cross":
        case "esriSFSCross":
          h = 0;
      }
      n.push({ type: "CIMHatchFill", lineSymbol: a, offsetX: 0, offsetY: 0, rotation: h, separation: l }), s === "cross" || s === "esriSFSCross" ? n.push({ type: "CIMHatchFill", lineSymbol: $e(a), offsetX: 0, offsetY: 0, rotation: 90, separation: l }) : s !== "diagonal-cross" && s !== "esriSFSDiagonalCross" || n.push({ type: "CIMHatchFill", lineSymbol: $e(a), offsetX: 0, offsetY: 0, rotation: 45, separation: l });
    } else !s || s !== "solid" && s !== "esriSFSSolid" || n.push({ type: "CIMSolidFill", enable: !0, color: rt(e) });
    return o;
  }
  static fromSimpleLineSymbol(t) {
    const { cap: e, color: s, join: r, marker: n, miterLimit: o, style: a, width: h } = t;
    let l = null;
    a !== "solid" && a !== "none" && a !== "esriSLSSolid" && a !== "esriSLSNull" && (l = [{ type: "CIMGeometricEffectDashes", dashTemplate: Sr(a, e), lineDashEnding: "NoConstraint", scaleDash: !0, offsetAlongLine: null }]);
    const c = [];
    if (n) {
      let u;
      switch (n.placement) {
        case "begin-end":
          u = Ht.Both;
          break;
        case "begin":
          u = Ht.JustBegin;
          break;
        case "end":
          u = Ht.JustEnd;
          break;
        default:
          u = Ht.None;
      }
      const d = pi.fromSimpleMarker(n, h, s).symbolLayers[0];
      d.markerPlacement = { type: "CIMMarkerPlacementAtExtremities", angleToLine: !0, offset: 0, extremityPlacement: u, offsetAlongLine: 0 }, c.push(d);
    }
    return c.push({ type: "CIMSolidStroke", color: a !== "none" && a !== "esriSLSNull" ? rt(s) : [0, 0, 0, 0], capStyle: pa(e), joinStyle: da(r), miterLimit: o, width: h, effects: l }), { type: "CIMLineSymbol", symbolLayers: c };
  }
  static fromPictureMarker(t) {
    const { angle: e, height: s, width: r, xoffset: n, yoffset: o } = t;
    let a = t.url;
    return t.type === "esriPMS" && t.imageData && (a = t.imageData), { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMPictureMarker", invertBackfaceTexture: !1, scaleX: 1, textureFilter: Vs.Picture, tintColor: null, url: a, size: s, width: r, offsetX: $(n), offsetY: $(o), rotation: $(-e) }] };
  }
  static createCIMTextSymbolfromTextSymbol(t) {
    const { angle: e, color: s, font: r, haloColor: n, haloSize: o, horizontalAlignment: a, kerning: h, text: l, verticalAlignment: c, xoffset: u, yoffset: d, backgroundColor: p, borderLineColor: m, borderLineSize: f } = t;
    let _, y, g, P, w, M;
    r && (_ = r.family, y = r.style, g = r.weight, P = r.size, w = r.decoration);
    let k = !1;
    return l && (k = gc(l)[1]), (p || f) && (M = { type: "CIMBackgroundCallout", margin: null, backgroundSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", color: rt(p) }, { type: "CIMSolidStroke", color: rt(m), width: f }] }, accentBarSymbol: null, gap: null, leaderLineSymbol: null, lineStyle: null }), { type: "CIMTextSymbol", angle: e, blockProgression: Qh.BTT, depth3D: 1, extrapolateBaselines: !0, fontEffects: tl.Normal, fontEncoding: el.Unicode, fontFamilyName: _ || "Arial", fontStyleName: jc(y, g), fontType: sl.Unspecified, haloSize: o, height: P, hinting: il.Default, horizontalAlignment: qc(a ?? "center"), kerning: h, letterWidth: 100, ligatures: !0, lineGapType: "Multiple", offsetX: $(u), offsetY: $(d), strikethrough: w === "line-through", underline: w === "underline", symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: !0, color: rt(s) }] }, haloSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: !0, color: rt(n) }] }, shadowColor: [0, 0, 0, 255], shadowOffsetX: 1, shadowOffsetY: 1, textCase: "Normal", textDirection: k ? Nn.RTL : Nn.LTR, verticalAlignment: Zc(c ?? "baseline"), verticalGlyphOrientation: rl.Right, wordSpacing: 100, billboardMode3D: nl.FaceNearPlane, callout: M };
  }
  static createPictureMarkerRasterizationParam(t) {
    const { angle: e, height: s, width: r, xoffset: n, yoffset: o } = t, a = t.url ?? t.source?.url ?? t.source?.imageData;
    return a ? { type: "sprite-rasterization-param", overrides: [], resource: { type: "CIMPictureMarker", invertBackfaceTexture: !1, scaleX: 1, textureFilter: Vs.Picture, tintColor: null, url: a, size: s, width: r, offsetX: $(n), offsetY: $(o), rotation: $(-e) } } : null;
  }
  static createPictureFillRasterizationParam(t) {
    const { width: e, height: s, xoffset: r, yoffset: n, url: o } = t;
    return o ? { type: "sprite-rasterization-param", overrides: [], resource: { type: "CIMPictureFill", scaleX: 1, textureFilter: Vs.Picture, tintColor: null, url: o, width: e, height: s, offsetX: $(r), offsetY: $(n), rotation: 0 } } : null;
  }
  static fromSimpleMarker(t, e, s) {
    const { style: r } = t, n = t.color ?? s;
    if (r === "path" || r === "esriSMSPath") {
      const u = [];
      if ("outline" in t && t.outline) {
        const m = t.outline;
        u.push({ type: "CIMSolidStroke", enable: !0, width: m.width, color: rt(m.color), path: t.path });
      }
      u.push({ type: "CIMSolidFill", enable: !0, color: rt(n), path: t.path });
      const [d, p] = Ye("square");
      return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: !0, rotation: -$(t.angle), size: $(t.size || 6), offsetX: $(t.xoffset), offsetY: $(t.yoffset), scaleSymbolsProportionally: !1, frame: d, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: p, symbol: { type: "CIMPolygonSymbol", symbolLayers: u } }] }] };
    }
    const o = [];
    let a, h, l = t.size;
    if ("outline" in t && t.outline && t.outline.style !== "none" && t.outline.style !== "esriSLSNull") {
      const u = t.outline, d = u.style !== "solid" && u.style !== "esriSLSSolid";
      [a, h] = d ? Ye(r, t.size) : Ye(r);
      const p = u.width ?? zh.width;
      if (d) {
        const _ = p / t.size, y = (a.xmax - a.xmin) * _ / 2, g = (a.ymax - a.ymin) * _ / 2;
        a.xmin -= y, a.xmax += y, a.ymin -= g, a.ymax += g, l && (l += p);
      }
      const m = t.style !== "cross" && t.style !== "x" || t?.outline.style === "dot" || t?.outline.style === "short-dot" ? Q.HalfGap : Q.FullPattern, f = d ? [{ type: "CIMGeometricEffectAddControlPoints" }, { type: "CIMGeometricEffectDashes", dashTemplate: Sr(u.style, null).map((_) => u.width && u.width > 0 ? _ * u.width : _), lineDashEnding: m, controlPointEnding: Q.FullPattern }] : void 0;
      o.push({ type: "CIMSolidStroke", capStyle: d ? st.Round : st.Butt, enable: !0, width: p, color: rt(u.color), effects: f });
    } else !e || t.type !== "line-marker" || t.style !== "cross" && t.style !== "x" ? [a, h] = Ye(r) : ([a, h] = Ye(r), o.push({ type: "CIMSolidStroke", enable: !0, width: e, color: rt(n) }));
    o.push({ type: "CIMSolidFill", enable: !0, color: rt(n) });
    const c = { type: "CIMPolygonSymbol", symbolLayers: o };
    return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: !0, rotation: $(-t.angle), size: $(l || 6 * e), offsetX: $(t.xoffset), offsetY: $(t.yoffset), scaleSymbolsProportionally: !1, frame: a, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: h, symbol: c }] }] };
  }
  static fromCIMHatchFill(t, e) {
    const s = e * (t.separation ?? Rt.CIMHatchFill.separation), r = s / 2, n = $e(t.lineSymbol);
    n.symbolLayers?.forEach((h) => {
      switch (h.type) {
        case "CIMSolidStroke":
          h.width != null && (h.width *= e), h.effects?.forEach((l) => {
            if (l.type === "CIMGeometricEffectDashes") {
              const c = l.dashTemplate;
              l.dashTemplate = c.map((u) => u * e);
            }
          });
          break;
        case "CIMVectorMarker": {
          h.size != null && (h.size *= e);
          const l = h.markerPlacement;
          l != null && "placementTemplate" in l && (l.placementTemplate = l.placementTemplate.map((c) => c * e));
          break;
        }
      }
    });
    let o = this._getLineSymbolPeriod(n) || Zn;
    for (; o < Zn; ) o *= 2;
    const a = o / 2;
    return { type: "CIMVectorMarker", frame: { xmin: -a, xmax: a, ymin: -r, ymax: r }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[-a, 0], [a, 0]]] }, symbol: n }], size: s };
  }
  static fetchResources(t, e, s, r = null) {
    return t && e && ua(t, (n) => {
      eu(n, e, s), "url" in n && n.url && s.push(e.fetchResource(n.url, { signal: r }));
    }), s;
  }
  static fetchFonts(t, e, s) {
    if (t && e) {
      if ("symbolLayers" in t && t.symbolLayers) {
        for (const r of t.symbolLayers) if (r.type === "CIMVectorMarker" && r.markerGraphics) for (const n of r.markerGraphics) n?.symbol && pi.fetchFonts(n.symbol, e, s);
      } else if (t.type === "CIMTextSymbol") {
        const { fontFamilyName: r, fontStyleName: n } = t;
        if (!r || r.toLowerCase() === "calcitewebcoreicons") return;
        const { style: o, weight: a } = _o(n), h = mo(t), l = new Lh({ family: r, style: o, weight: a, decoration: h });
        s.push(e.loadFont(l).catch(() => {
          zi().error(`Unsupported font ${r} in CIM symbol`);
        }));
      }
    }
  }
  static _getLineSymbolPeriod(t) {
    if (t) {
      const e = this._getEffectsRepeat(t.effects);
      if (e) return e;
      if (t.symbolLayers) {
        for (const s of t.symbolLayers) if (s) {
          const r = this._getEffectsRepeat(s.effects);
          if (r) return r;
          switch (s.type) {
            case "CIMCharacterMarker":
            case "CIMPictureMarker":
            case "CIMVectorMarker":
            case "CIMObjectMarker3D":
            case "CIMglTFMarker3D": {
              const n = this._getPlacementRepeat(s.markerPlacement);
              if (n) return n;
            }
          }
        }
      }
    }
    return 0;
  }
  static _getEffectsRepeat(t) {
    if (t) {
      for (const e of t) if (e) switch (e.type) {
        case "CIMGeometricEffectDashes": {
          const s = e.dashTemplate;
          if (s && s.length) {
            let r = 0;
            for (const n of s) r += n;
            return 1 & s.length && (r *= 2), r;
          }
          break;
        }
        case "CIMGeometricEffectWave":
          return e.period;
        default:
          zi().error(`unsupported geometric effect type ${e.type}`);
      }
    }
    return 0;
  }
  static _getPlacementRepeat(t) {
    if (t) switch (t.type) {
      case "CIMMarkerPlacementAlongLineSameSize":
      case "CIMMarkerPlacementAlongLineRandomSize":
      case "CIMMarkerPlacementAlongLineVariableSize": {
        const e = t.placementTemplate;
        if (e && e.length) {
          let s = 0;
          for (const r of e) s += +r;
          return 1 & e.length && (s *= 2), s;
        }
        break;
      }
    }
    return 0;
  }
  static fromCIMInsidePolygon(t) {
    const e = t.markerPlacement, s = { ...t };
    s.markerPlacement = null, s.anchorPoint = null;
    const r = Math.abs(e.stepX), n = Math.abs(e.stepY), o = (e.randomness ?? 100) / 100;
    let a, h, l, c;
    if (e.gridType === "Random") {
      const u = ue(jh), d = Math.max(Math.floor(u / r), 1), p = Math.max(Math.floor(u / n), 1);
      a = d * r / 2, h = p * n / 2, l = 2 * h;
      const m = new fo(e.seed), f = o * r / 1.5, _ = o * n / 1.5;
      c = [];
      for (let y = 0; y < d; y++) for (let g = 0; g < p; g++) {
        const P = y * r - a + f * (0.5 - m.getFloat()), w = g * n - h + _ * (0.5 - m.getFloat());
        c.push({ x: P, y: w }), y === 0 && c.push({ x: P + 2 * a, y: w }), g === 0 && c.push({ x: P, y: w + 2 * h });
      }
    } else e.shiftOddRows === !0 ? (a = r / 2, h = n, l = 2 * n, c = [{ x: -a, y: 0 }, { x: a, y: 0 }, { x: 0, y: h }, { x: 0, y: -h }]) : (a = r / 2, h = n / 2, l = n, c = [{ x: -r, y: 0 }, { x: 0, y: -n }, { x: -r, y: -n }, { x: 0, y: 0 }, { x: r, y: 0 }, { x: 0, y: n }, { x: r, y: n }, { x: -r, y: n }, { x: r, y: -n }]);
    return { type: "CIMVectorMarker", frame: { xmin: -a, xmax: a, ymin: -h, ymax: h }, markerGraphics: c.map((u) => ({ type: "CIMMarkerGraphic", geometry: u, symbol: { type: "CIMPointSymbol", symbolLayers: [s] } })), size: l };
  }
};
function ua(i, t) {
  if (i) switch (i.type) {
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol": {
      const e = i.symbolLayers;
      if (!e) return;
      for (const s of e) if (t(s), s.type === "CIMVectorMarker") {
        const r = s.markerGraphics;
        if (!r) continue;
        for (const n of r) if (n) {
          const o = n.symbol;
          o && ua(o, t);
        }
      }
      break;
    }
  }
}
const pa = (i) => {
  if (!i) return st.Butt;
  switch (i) {
    case "butt":
      return st.Butt;
    case "square":
      return st.Square;
    case "round":
      return st.Round;
  }
}, da = (i) => {
  if (!i) return pt.Miter;
  switch (i) {
    case "miter":
      return pt.Miter;
    case "round":
      return pt.Round;
    case "bevel":
      return pt.Bevel;
  }
}, qc = (i) => {
  if (i == null) return "Center";
  switch (i) {
    case "left":
      return "Left";
    case "right":
      return "Right";
    case "center":
      return "Center";
  }
}, Zc = (i) => {
  if (i == null) return "Center";
  switch (i) {
    case "baseline":
      return "Baseline";
    case "top":
      return "Top";
    case "middle":
      return "Center";
    case "bottom":
      return "Bottom";
  }
}, rt = (i) => {
  if (!i) return [0, 0, 0, 0];
  const { r: t, g: e, b: s, a: r } = i;
  return [t, e, s, 255 * r];
}, jc = (i, t) => {
  const e = Kc(t), s = Jc(i);
  return e && s ? `${e}-${s}` : `${e}${s}`;
}, Kc = (i) => {
  if (!i) return "";
  switch (i.toLowerCase()) {
    case "bold":
    case "bolder":
      return "bold";
  }
  return "";
}, Jc = (i) => {
  if (!i) return "";
  switch (i.toLowerCase()) {
    case "italic":
    case "oblique":
      return "italic";
  }
  return "";
}, Sr = (i, t) => {
  const e = le("safari") ? 1e-3 : 0, s = t === "butt";
  switch (i) {
    case "dash":
    case "esriSLSDash":
      return s ? [4, 3] : [3, 4];
    case "dash-dot":
    case "esriSLSDashDot":
      return s ? [4, 3, 1, 3] : [3, 4, e, 4];
    case "dot":
    case "esriSLSDot":
      return s ? [1, 3] : [e, 4];
    case "long-dash":
    case "esriSLSLongDash":
      return s ? [8, 3] : [7, 4];
    case "long-dash-dot":
    case "esriSLSLongDashDot":
      return s ? [8, 3, 1, 3] : [7, 4, e, 4];
    case "long-dash-dot-dot":
    case "esriSLSDashDotDot":
      return s ? [8, 3, 1, 3, 1, 3] : [7, 4, e, 4, e, 4];
    case "short-dash":
    case "esriSLSShortDash":
      return s ? [4, 1] : [3, 2];
    case "short-dash-dot":
    case "esriSLSShortDashDot":
      return s ? [4, 1, 1, 1] : [3, 2, e, 2];
    case "short-dash-dot-dot":
    case "esriSLSShortDashDotDot":
      return s ? [4, 1, 1, 1, 1, 1] : [3, 2, e, 2, e, 2];
    case "short-dot":
    case "esriSLSShortDot":
      return s ? [1, 1] : [e, 2];
    case "solid":
    case "esriSLSSolid":
    case "none":
      return zi().error("Unexpected: style does not require rasterization"), [0, 0];
    default:
      return zi().error(`Tried to rasterize SLS, but found an unexpected style: ${i}!`), [0, 0];
  }
};
function Qc(i) {
  return i.symbolLayers !== void 0;
}
const Ye = (i, t = 100) => {
  const e = t / 2;
  let s, r;
  const n = i;
  if (n === "circle" || n === "esriSMSCircle") {
    let a = Math.acos(1 - 0.25 / e), h = Math.ceil(ca / a / 4);
    h === 0 && (h = 1), a = Uc / h, h *= 4;
    const l = [];
    l.push([e, 0]);
    for (let c = 1; c < h; c++) l.push([e * Math.cos(c * a), -e * Math.sin(c * a)]);
    l.push([e, 0]), s = { rings: [l] }, r = { xmin: -e, ymin: -e, xmax: e, ymax: e };
  } else if (n === "cross" || n === "esriSMSCross")
    s = { paths: [[[0, e], [0, -e]], [[e, 0], [-e, 0]]] }, r = { xmin: -e, ymin: -e, xmax: e, ymax: e };
  else if (n === "diamond" || n === "esriSMSDiamond") s = { rings: [[[-e, 0], [0, e], [e, 0], [0, -e], [-e, 0]]] }, r = { xmin: -e, ymin: -e, xmax: e, ymax: e };
  else if (n === "square" || n === "esriSMSSquare") s = { rings: [[[-e, -e], [-e, e], [e, e], [e, -e], [-e, -e]]] }, r = { xmin: -e, ymin: -e, xmax: e, ymax: e };
  else if (n === "x" || n === "esriSMSX") s = { paths: [[[e, e], [-e, -e]], [[e, -e], [-e, e]]] }, r = { xmin: -e, ymin: -e, xmax: e, ymax: e };
  else if (n === "triangle" || n === "esriSMSTriangle") {
    const o = t * 0.5773502691896257, a = -o, h = 2 / 3 * t, l = h - t;
    s = { rings: [[[a, l], [0, h], [o, l], [a, l]]] }, r = { xmin: a, ymin: l, xmax: o, ymax: h };
  } else n === "arrow" && (s = { rings: [[[-50, 50], [50, 0], [-50, -50], [-33, -20], [-33, 20], [-50, 50]]] }, r = { xmin: -e, ymin: -e, xmax: e, ymax: e });
  return [r, s];
}, tu = (i) => i === "vertical" || i === "horizontal" || i === "cross" || i === "esriSFSCross" || i === "esriSFSVertical" || i === "esriSFSHorizontal";
function eu(i, t, e) {
  if (!(!i.effects || t.geometryEngine != null)) {
    if (t.geometryEnginePromise) return void e.push(t.geometryEnginePromise);
    Eh(i.effects) && (t.geometryEnginePromise = Nh(), e.push(t.geometryEnginePromise), t.geometryEnginePromise.then((s) => t.geometryEngine = s));
  }
}
function jn(i) {
  if (!i) return null;
  let t = null;
  const { cap: e, color: s, join: r, miterLimit: n, style: o, width: a } = i;
  return o !== "solid" && o !== "none" && o !== "esriSLSSolid" && o !== "esriSLSNull" && (t = [{ type: "CIMGeometricEffectDashes", dashTemplate: Sr(o, e), lineDashEnding: "NoConstraint", scaleDash: !0, offsetAlongLine: null }]), { type: "CIMSolidStroke", color: o !== "esriSLSNull" && o !== "none" ? rt(s) : [0, 0, 0, 0], capStyle: pa(e), joinStyle: da(r), miterLimit: n, width: a, effects: t };
}
const su = 96 / 72;
let iu = class {
  static executeEffects(t, e, s, r) {
    const n = su, o = Li(t);
    let a = new br(e);
    for (const h of t) {
      const l = Pr(h);
      l && (a = l.execute(a, h, n, s, r, o));
    }
    return a;
  }
  static applyEffects(t, e, s) {
    if (!t) return e;
    const r = Li(t);
    let n, o = new br(N.fromJSONCIM(e));
    for (const l of t) {
      const c = Pr(l);
      c && (o = c.execute(o, l, 1, null, s, r));
    }
    const a = [];
    let h = null;
    for (; n = o.next(); ) a.push(...zs(n)), h = n.geometryType;
    return a.length === 0 || h === null ? null : h === "esriGeometryPolygon" ? { rings: a } : { paths: a };
  }
}, fa = null;
function ln() {
  return fa;
}
async function ru() {
  fa = await import("./geometryEngineJSON-CCfliBxM.js").then((i) => i.g);
}
function ma(i) {
  switch (i) {
    case S.BYTE:
    case S.UNSIGNED_BYTE:
      return 1;
    case S.SHORT:
    case S.UNSIGNED_SHORT:
      return 2;
    case S.FLOAT:
    case S.INT:
    case S.UNSIGNED_INT:
      return 4;
  }
}
function nu(i) {
  const t = [], e = [], s = [];
  for (const r of i) {
    const n = ma(r.type) * r.count;
    switch (n % 2 || n % 4 || 4) {
      case 4:
        t.push(r);
        continue;
      case 2:
        e.push(r);
        continue;
      case 1:
        s.push(r);
        continue;
      default:
        throw new Error("Found unexpected dataType byte count");
    }
  }
  return t.push(...e), t.push(...s), t;
}
let ou = class _a {
  static fromVertexSpec({ attributes: t }, e) {
    let s, r, n;
    const o = [];
    for (const p in t) {
      const m = t[p];
      e?.[p] !== !1 && (m.pack === "position" ? s = { ...m, name: p, offset: 0 } : m.pack === "id" ? r = { ...m, name: p, offset: 4 } : p === "bitset" ? n = { ...m, name: p, offset: 7 } : o.push({ ...m, name: p }));
    }
    const a = nu(o), h = [];
    let l = 8, c = 1;
    for (const p of a) h.push({ ...p, offset: l }), l += ma(p.type) * p.count, p.packAlternating && (c = Math.max(p.packAlternating.count, c));
    const u = Uint32Array.BYTES_PER_ELEMENT, d = l % u;
    return new _a(s, r, n, h, l + (d ? u - d : 0), c);
  }
  constructor(t, e, s, r, n, o) {
    this.position = t, this.id = e, this.bitset = s, this.standardAttributes = r, this.stride = n, this.packVertexCount = o, r.push(s), this._attributes = [t, e, s, ...r];
  }
  get attributeLayout() {
    if (!this._attributeLayout) {
      const t = al(this._attributes), e = this._attributes.map((s) => ({ name: s.name, count: s.count, offset: s.offset, type: s.type, packPrecisionFactor: s.packPrecisionFactor, normalized: s.normalized ?? !1 }));
      this._attributeLayout = { attributes: e, hash: t, stride: this.stride };
    }
    return this._attributeLayout;
  }
}, au = class ga {
  static fromVertexSpec(t, e) {
    const s = ou.fromVertexSpec(t, e);
    return new ga(s);
  }
  constructor(t) {
    this._spec = t, this._packed = new Uint8Array(this._spec.stride * this._spec.packVertexCount), this._packedU32View = new Uint32Array(this._packed.buffer), this._dataView = new DataView(this._packed.buffer);
  }
  get attributeLayout() {
    return this._spec.attributeLayout;
  }
  get stride() {
    return this._spec.stride;
  }
  writeVertex(t, e, s, r, n, o) {
    for (let a = 0; a < this._spec.packVertexCount; a++) {
      const h = a * this._spec.stride;
      this._packPosition(s, r, h), this._packId(e, h);
      const l = this._spec.bitset;
      if (o) {
        if (l.packTessellation) {
          const c = l.packTessellation(o, n);
          this._pack(c, l, h);
        }
        for (const c of this._spec.standardAttributes) if (c.packTessellation != null) {
          const u = c.packTessellation(o, n);
          this._pack(u, c, h);
        } else if (c.packAlternating?.packTessellation) {
          const u = c.packAlternating.packTessellation(o, n);
          for (let d = 0; d < this._spec.packVertexCount; d++) {
            const p = u[d];
            this._pack(p, c, d * this._spec.stride);
          }
        }
      }
    }
    t.vertexWriteRegion(this._packedU32View);
  }
  pack(t, e) {
    for (const s of this._spec.standardAttributes) if (s.pack && typeof s.pack != "string") {
      const r = s.pack(t, e);
      for (let n = 0; n < this._spec.packVertexCount; n++) this._pack(r, s, n * this._spec.stride);
    } else if (s.packAlternating?.pack) {
      const r = s.packAlternating.pack(t, e);
      for (let n = 0; n < this._spec.packVertexCount; n++) {
        const o = r[n];
        this._pack(o, s, n * this._spec.stride);
      }
    }
  }
  _packPosition(t, e, s) {
    const { offset: r } = this._spec.position, n = this._spec.position.packPrecisionFactor ?? 1, o = ll(t * n, e * n);
    this._dataView.setUint32(s + r, o, !0);
  }
  _packId(t, e) {
    const s = t * (this._spec.id.packPrecisionFactor ?? 1), r = 4278190080 & this._dataView.getUint32(e + this._spec.id.offset, !0);
    this._dataView.setUint32(e + this._spec.id.offset, s | r, !0);
  }
  _pack(t, e, s) {
    hl(this._dataView, t, e, s);
  }
};
function hu(i) {
  if (!i) return !1;
  for (const t of i) switch (t.effect.type) {
    case "CIMGeometricEffectBuffer":
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectDonut":
      return !0;
  }
  return !1;
}
let Ne = class {
  constructor(t, e, s, r) {
    this._instanceId = t, this._evaluator = e, this._viewParams = s, this._optionalAttributes = r, this._evaluator.evaluator = (n) => this.vertexSpec.createComputedParams(n);
  }
  get _vertexPack() {
    if (!this._cachedVertexPack) {
      const t = au.fromVertexSpec(this.vertexSpec, this._optionalAttributes);
      this._evaluator.hasDynamicProperties || t.pack(this._evaluator.evaluatedMeshParams, this._viewParams), this._cachedVertexPack = t;
    }
    return this._cachedVertexPack;
  }
  get evaluatedMeshParams() {
    return this._evaluator.evaluatedMeshParams;
  }
  get hasEffects() {
    return !!this.evaluatedMeshParams.effects;
  }
  get instanceId() {
    return this._instanceId;
  }
  get attributeLayout() {
    return this._vertexPack.attributeLayout;
  }
  setReferences(t) {
    this._references = t;
  }
  getBoundsInfo() {
    return null;
  }
  getTileInfo() {
    return this._viewParams.tileInfo;
  }
  async loadDependencies() {
    hu(this._evaluator.inputMeshParams.params.effects?.effectInfos) && await ru();
  }
  enqueueRequest(t, e, s) {
    this._evaluator.hasDynamicProperties && this._evaluator.enqueueRequest(t, e, s);
  }
  write(t, e, s, r, n) {
    this.ensurePacked(e, s, r);
    const o = this.evaluatedMeshParams.effects;
    if (!o || o.length === 0) return void this._write(t, s, void 0, n);
    const a = s.readGeometryForDisplay()?.clone();
    if (!a) return;
    const h = N.fromOptimizedCIM(a, s.geometryType), l = ln();
    h.invertY();
    const c = t.id || "", u = iu.executeEffects(o, h, c, l);
    let d;
    for (; d = u.next(); ) d.invertY(), this._write(t, s, d, n);
  }
  ensurePacked(t, e, s) {
    if (!this._evaluator.hasDynamicProperties) return;
    const r = this._evaluator.evaluateMeshParams(t, e, s);
    this._vertexPack.pack(r, this._viewParams);
  }
  _writeVertex(t, e, s, r, n) {
    const o = this.evaluatedMeshParams;
    this._vertexPack.writeVertex(t, e, s, r, o, n);
  }
};
const lu = 100, cu = le("featurelayer-fast-triangulation-enabled");
let ya = class extends Ne {
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), Wh()]);
  }
  _write(t, e, s) {
    const r = s?.asOptimized() ?? e.readGeometryForDisplay(), n = this._clip(r);
    n && (t.recordStart(this.instanceId, this.attributeLayout), this._writeGeometry(t, e, n), t.recordEnd());
  }
  _clip(t) {
    if (!t) return null;
    const e = this.hasEffects;
    return $o(t, e ? 256 : 8);
  }
  _writeGeometry(t, e, s) {
    const r = s.maxLength > lu, n = [], o = this.createTesselationParams(e);
    if (!r && cu && zl(n, s)) return void (n.length && this._writeVertices(t, e, s.coords, o, n));
    const a = Ll(s);
    this._writeVertices(t, e, a, o);
  }
  _writeVertices(t, e, s, r, n) {
    const o = e.getDisplayId(), a = t.vertexCount(), h = this.hasEffects;
    let l = 0;
    if (n) for (const c of n) {
      const u = s[2 * c], d = s[2 * c + 1];
      h && t.recordBounds(u, d, 0, 0), this._writeVertex(t, o, u, d, r), l++;
    }
    else for (let c = 0; c < s.length; c += 2) {
      const u = Math.round(s[c]), d = Math.round(s[c + 1]);
      h && t.recordBounds(u, d, 0, 0), this._writeVertex(t, o, u, d, r), l++;
    }
    t.indexEnsureSize(l);
    for (let c = 0; c < l; c++) t.indexWrite(c + a);
  }
};
const uu = { createComputedParams: (i) => i, attributes: { id: { type: S.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: S.UNSIGNED_BYTE, count: 1 }, pos: { type: S.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, inverseArea: { type: S.FLOAT, count: 1, packTessellation: ({ inverseArea: i }) => i } } };
let pu = class extends ya {
  constructor() {
    super(...arguments), this.vertexSpec = uu;
  }
  createTesselationParams(t) {
    return { inverseArea: 1 / t.readGeometryArea() };
  }
};
const du = () => de.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.meshWriterUtils"), fu = 0, mu = 100;
function Ae(i, t) {
  return [!!i?.minScale && t.scaleToZoom(i.minScale) || fu, !!i?.maxScale && t.scaleToZoom(i.maxScale) || mu];
}
function He(i) {
  return 1 << i;
}
function Es(i) {
  let t = 0;
  for (const [e, s] of i) s && (t |= 1 << e);
  return t;
}
function W(i) {
  let t;
  if (!i) return [0, 0, 0, 0];
  if (typeof i == "string") {
    const o = Ah.fromString(i);
    if (!o) return du().errorOnce(new Qr("mapview:mesh-processing", "Unable to parse string into color", { color: i })), [0, 0, 0, 0];
    t = o.toArray();
  } else t = i;
  const [e, s, r, n] = t;
  return [e * (n / 255), s * (n / 255), r * (n / 255), n];
}
function _u(i) {
  switch (i) {
    case "butt":
    case st.Butt:
      return tr.BUTT;
    case "round":
    case st.Round:
      return tr.ROUND;
    case "square":
    case st.Square:
      return tr.SQUARE;
  }
}
function gu(i) {
  switch (i) {
    case "bevel":
    case pt.Bevel:
      return er.BEVEL;
    case "miter":
    case pt.Miter:
      return er.MITER;
    case "round":
    case pt.Round:
      return er.ROUND;
  }
}
function lr(i, t) {
  return Math.round(Math.min(Math.sqrt(i * t), 255));
}
function Js(i, t) {
  return Math.round(i * t) / t;
}
function Kn(i, t) {
  return Math.ceil(i * t) / t;
}
const xa = { createComputedParams: (i) => i, attributes: { id: { type: S.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: S.UNSIGNED_BYTE, count: 1 }, pos: { type: S.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, zoomRange: { type: S.SHORT, count: 2, packPrecisionFactor: Bi, pack: ({ scaleInfo: i }, { tileInfo: t }) => Ae(i, t) }, color: { type: S.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ color: i }) => W(i) } } };
let cn = class extends ya {
  constructor() {
    super(...arguments), this.vertexSpec = xa;
  }
  createTesselationParams(t) {
    return null;
  }
};
const Ui = { createComputedParams: (i) => i, attributes: { ...xa.attributes, tlbr: { count: 4, type: S.UNSIGNED_SHORT, pack: ({ sprite: i }) => {
  const { rect: t, width: e, height: s } = i, r = t.x + Te, n = t.y + Te;
  return [r, n, r + e, n + s];
} }, inverseRasterizationScale: { count: 1, type: S.BYTE, packPrecisionFactor: 16, pack: ({ sprite: i }) => 1 / i.rasterizationScale } } };
let ba = class extends cn {
  constructor() {
    super(...arguments), this.vertexSpec = Ui;
  }
  _write(t, e, s) {
    const r = s?.asOptimized() ?? e.readGeometryForDisplay(), n = this._clip(r);
    if (!n) return;
    const o = this.evaluatedMeshParams.sprite?.textureBinding;
    t.recordStart(this.instanceId, this.attributeLayout, o), this._writeGeometry(t, e, n), t.recordEnd();
  }
};
var Jn;
(function(i) {
  i[i.Geographic = 0] = "Geographic", i[i.Arithmatic = 1] = "Arithmatic";
})(Jn || (Jn = {}));
const Nf = 3.14159265359 / 180, yu = 3.14159265359 / 128, Af = 1, xu = 1.1, bu = 1, Ff = 24, Rf = 8, Pu = 1e-5, Qn = 0.05, wu = 1e-30, un = 4, pn = 0, Pa = 2, wa = 5, Sa = 6, Su = 2, vu = 3, Mu = 0, Cu = 3, $u = 16777216;
function dn(i) {
  const { sprite: t, aspectRatio: e, scaleProportionally: s } = i, r = I(i.height), n = r > 0 ? r : t.height;
  let o = r * e;
  return o <= 0 ? o = t.width : s && (o *= t.width / t.height), { width: o, height: n };
}
function va(i) {
  const { applyRandomOffset: t, sampleAlphaOnly: e } = i, { width: s, height: r } = dn(i);
  return Es([[Pa, t], [un, e], [Sa, s < ki], [wa, r < ki]]);
}
function Ma(i) {
  const { width: t } = dn(i);
  return Math.round(t < ki ? t * rn : t);
}
function Ca(i) {
  const { height: t } = dn(i);
  return Math.round(t < ki ? t * rn : t);
}
const $a = { createComputedParams: (i) => i, attributes: { ...Ui.attributes, bitset: { count: 1, type: S.UNSIGNED_BYTE, pack: va }, width: { count: 1, type: S.UNSIGNED_SHORT, pack: Ma }, height: { count: 1, type: S.UNSIGNED_SHORT, pack: Ca }, offset: { count: 2, type: S.SHORT, pack: ({ offsetX: i, offsetY: t }) => [I(i), -I(t)] }, scale: { count: 2, type: S.UNSIGNED_BYTE, packPrecisionFactor: 16, pack: ({ scaleX: i, scaleY: t }) => [i, t] }, angle: { count: 1, type: S.UNSIGNED_BYTE, pack: ({ angle: i }) => Zh(i) } } };
let ku = class extends ba {
  constructor() {
    super(...arguments), this.vertexSpec = $a;
  }
}, Iu = class {
  constructor() {
    this.extrusionOffsetX = 0, this.extrusionOffsetY = 0, this.normalX = 0, this.normalY = 0, this.directionX = 0, this.directionY = 0, this.distance = 0;
  }
};
const Xi = { createComputedParams: (i) => i, attributes: { id: { type: S.UNSIGNED_BYTE, count: 3, pack: "id" }, pos: { type: S.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, bitset: { type: S.UNSIGNED_BYTE, count: 1 }, zoomRange: { type: S.SHORT, count: 2, packPrecisionFactor: Bi, pack: ({ scaleInfo: i }, { tileInfo: t }) => Ae(i, t) }, color: { type: S.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ color: i }) => W(i) }, offset: { type: S.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ extrusionOffsetX: i, extrusionOffsetY: t }) => [Js(i, 16), Js(t, 16)] }, normal: { type: S.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ normalX: i, normalY: t }) => [Js(i, 16), Js(t, 16)] }, halfWidth: { type: S.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 16, pack: ({ width: i }) => Kn(I(0.5 * i), 16) }, referenceHalfWidth: { type: S.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 16, pack: ({ referenceWidth: i }) => Kn(I(0.5 * i), 16) } } };
let Tu = class {
  constructor() {
    this.id = 0, this.bitset = 0, this.indexCount = 0, this.vertexCount = 0, this.vertexFrom = 0, this.vertexBounds = 0;
  }
};
const to = 65535;
let fn = class extends Ne {
  constructor(t, e, s, r) {
    super(t, e, s, r), this.vertexSpec = Xi, this._currentWrite = new Tu(), this._tessellationOptions = { halfWidth: 0, pixelCoordRatio: 1, offset: 0, wrapDistance: to, textured: !1 }, this._tessParams = new Iu(), this._initializeTessellator();
  }
  writeLineVertices(t, e, s) {
    const r = this._getLines(e);
    r != null && this._writeVertices(t, s, r);
  }
  _initializeTessellator() {
    this._lineTessellator = new qh(this._writeTesselatedVertex.bind(this), this._writeTriangle.bind(this), !0);
  }
  _write(t, e, s) {
    const r = s ?? N.fromFeatureSetReaderCIM(e);
    r && this._writeGeometry(t, e, r);
  }
  _writeGeometry(t, e, s, r) {
    t.recordStart(this.instanceId, this.attributeLayout, r), this.writeLineVertices(t, s, e), t.recordEnd();
  }
  _getLines(t) {
    return Nl(t, bo(this.evaluatedMeshParams));
  }
  _writeVertices(t, e, s) {
    const { _currentWrite: r, _tessellationOptions: n, evaluatedMeshParams: o } = this, { width: a, capType: h, joinType: l, miterLimit: c, hasSizeVV: u } = o, d = I(0.5 * a);
    n.halfWidth = d, n.capType = _u(h), n.joinType = gu(l), n.miterLimit = c;
    const p = !u;
    r.out = t, r.id = e.getDisplayId(), r.vertexCount = 0, r.indexCount = 0, r.vertexFrom = t.vertexCount(), r.vertexBounds = p && d < Kh ? 0 : 1;
    for (const { line: m, start: f } of s) n.initialDistance = f % to, this._lineTessellator.tessellate(m, n, p);
  }
  _writeTesselatedVertex(t, e, s, r, n, o, a, h, l, c, u) {
    const { out: d, id: p, vertexBounds: m } = this._currentWrite;
    return this.hasEffects && d.recordBounds(t, e, m, m), this._tessParams.extrusionOffsetX = a, this._tessParams.extrusionOffsetY = h, this._tessParams.normalX = l, this._tessParams.normalY = c, this._tessParams.directionX = n, this._tessParams.directionY = o, this._tessParams.distance = u, this._writeVertex(d, p, t, e, this._tessParams), this._currentWrite.vertexFrom + this._currentWrite.vertexCount++;
  }
  _writeTriangle(t, e, s) {
    const { out: r } = this._currentWrite;
    r.indexEnsureSize(3), r.indexWrite(t), r.indexWrite(e), r.indexWrite(s), this._currentWrite.indexCount += 3;
  }
};
const ka = { createComputedParams: (i) => i, attributes: { ...Xi.attributes, bitset: { type: S.UNSIGNED_BYTE, count: 1, pack: (i) => 0 }, color: { type: S.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ color: i }) => W(i) } } }, mn = { createComputedParams: (i) => i, attributes: { ...Xi.attributes, bitset: { type: S.UNSIGNED_BYTE, count: 1, pack: (i) => Es([[pn, !0]]) }, color: { type: S.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ outlineColor: i }) => W(i) } } };
let _n = class extends fn {
  constructor() {
    super(...arguments), this.vertexSpec = mn;
  }
}, gn = class extends cn {
  constructor(t, e, s, r) {
    super(t, e, s, r), this.vertexSpec = ka, this._lineMeshWriter = this._createOutlineWriter(t, e, s, r);
  }
  _createOutlineWriter(t, e, s, r) {
    return new _n(t, e, s, r);
  }
  _write(t, e, s) {
    const r = s?.asOptimized() ?? e.readGeometryForDisplay(), n = this._clip(r);
    n && (t.recordStart(this.instanceId, this.attributeLayout), this._writeGeometry(t, e, n), this._lineMeshWriter.writeLineVertices(t, N.fromOptimizedCIM(n, "esriGeometryPolyline"), e), t.recordEnd());
  }
  _clip(t) {
    return t ? $o(t, bo(this.evaluatedMeshParams)) : null;
  }
  ensurePacked(t, e, s) {
    super.ensurePacked(t, e, s), this._lineMeshWriter.ensurePacked(t, e, s);
  }
  enqueueRequest(t, e, s) {
    super.enqueueRequest(t, e, s), this._lineMeshWriter.enqueueRequest(t, e, s);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
};
const Ia = () => de.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");
let Ta = class {
  constructor() {
    this._includedModules = /* @__PURE__ */ new Map();
  }
  include(t, e) {
    if (this._includedModules.has(t)) {
      const s = this._includedModules.get(t);
      if (s !== e) {
        Ia().error("Trying to include shader module multiple times with different sets of options.");
        const r = /* @__PURE__ */ new Set();
        for (const n of Object.keys(s)) s[n] !== t[n] && r.add(n);
        for (const n of Object.keys(t)) s[n] !== t[n] && r.add(n);
        r.forEach((n) => console.error(`  ${n}: current ${s[n]} new ${t[n]}`));
      }
    } else this._includedModules.set(t, e), t(this.builder, e);
  }
}, zu = class extends Ta {
  constructor() {
    super(...arguments), this.vertex = new eo(), this.fragment = new eo(), this.attributes = new Nu(), this.varyings = new Au(), this.extensions = new vr(), this.constants = new za();
  }
  get fragmentUniforms() {
    return this.fragment.uniforms.entries;
  }
  get builder() {
    return this;
  }
  generate(t, e = !0) {
    const s = this.extensions.generateSource(t), r = this.attributes.generateSource(t), n = this.varyings.generateSource(t), o = t === "vertex" ? this.vertex : this.fragment, a = o.uniforms.generateSource(), h = o.code.generateSource(), l = t === "vertex" ? Ru : Fu(e), c = this.constants.generateSource().concat(o.constants.generateSource());
    return `${e ? "#version 300 es" : ""}
${s.join(`
`)}
${l}
${c.join(`
`)}
${a.join(`
`)}
${r.join(`
`)}
${n.join(`
`)}
${h.join(`
`)}`;
  }
  generateBindPass(t) {
    const e = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((n) => {
      const o = n.bind[Hs.Pass];
      o && e.set(n.name, o);
    }), this.fragment.uniforms.entries.forEach((n) => {
      const o = n.bind[Hs.Pass];
      o && e.set(n.name, o);
    });
    const s = Array.from(e.values()), r = s.length;
    return (n, o) => {
      for (let a = 0; a < r; ++a) s[a](t, n, o);
    };
  }
  generateBindDraw(t) {
    const e = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((n) => {
      const o = n.bind[Hs.Draw];
      o && e.set(n.name, o);
    }), this.fragment.uniforms.entries.forEach((n) => {
      const o = n.bind[Hs.Draw];
      o && e.set(n.name, o);
    });
    const s = Array.from(e.values()), r = s.length;
    return (n, o, a) => {
      for (let h = 0; h < r; ++h) s[h](t, n, o, a);
    };
  }
}, Lu = class {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(...t) {
    for (const e of t) this._add(e);
  }
  get(t) {
    return this._entries.get(t);
  }
  _add(t) {
    if (t != null) {
      if (this._entries.has(t.name) && !this._entries.get(t.name).equals(t)) throw new Qr(`Duplicate uniform name ${t.name} for different uniform type`);
      this._entries.set(t.name, t);
    } else Ia().error(`Trying to add null Uniform from ${new Error().stack}.`);
  }
  generateSource() {
    return Array.from(this._entries.values()).map((t) => t.arraySize != null ? `uniform ${t.type} ${t.name}[${t.arraySize}];` : `uniform ${t.type} ${t.name};`);
  }
  get entries() {
    return Array.from(this._entries.values());
  }
}, Eu = class {
  constructor() {
    this._entries = new Array();
  }
  add(t) {
    this._entries.push(t);
  }
  generateSource() {
    return this._entries;
  }
}, eo = class extends Ta {
  constructor() {
    super(...arguments), this.uniforms = new Lu(), this.code = new Eu(), this.constants = new za();
  }
  get builder() {
    return this;
  }
}, Nu = class {
  constructor() {
    this._entries = new Array();
  }
  add(t, e) {
    this._entries.push([t, e]);
  }
  generateSource(t) {
    return t === "fragment" ? [] : this._entries.map((e) => `in ${e[1]} ${e[0]};`);
  }
}, Au = class {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(t, e) {
    this._entries.has(t) && ul(this._entries.get(t) === e), this._entries.set(t, e);
  }
  generateSource(t) {
    const e = new Array();
    return this._entries.forEach((s, r) => e.push(t === "vertex" ? `out ${s} ${r};` : `in ${s} ${r};`)), e;
  }
}, vr = class Mr {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(t) {
    this._entries.add(t);
  }
  generateSource(t) {
    const e = t === "vertex" ? Mr.ALLOWLIST_VERTEX : Mr.ALLOWLIST_FRAGMENT;
    return Array.from(this._entries).filter((s) => e.includes(s)).map((s) => `#extension ${s} : enable`);
  }
};
vr.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], vr.ALLOWLIST_VERTEX = [];
let za = class D {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(t, e, s) {
    let r = "ERROR_CONSTRUCTOR_STRING";
    switch (e) {
      case "float":
        r = D._numberToFloatStr(s);
        break;
      case "int":
        r = D._numberToIntStr(s);
        break;
      case "bool":
        r = s.toString();
        break;
      case "vec2":
        r = `vec2(${D._numberToFloatStr(s[0])},                            ${D._numberToFloatStr(s[1])})`;
        break;
      case "vec3":
        r = `vec3(${D._numberToFloatStr(s[0])},                            ${D._numberToFloatStr(s[1])},                            ${D._numberToFloatStr(s[2])})`;
        break;
      case "vec4":
        r = `vec4(${D._numberToFloatStr(s[0])},                            ${D._numberToFloatStr(s[1])},                            ${D._numberToFloatStr(s[2])},                            ${D._numberToFloatStr(s[3])})`;
        break;
      case "ivec2":
        r = `ivec2(${D._numberToIntStr(s[0])},                             ${D._numberToIntStr(s[1])})`;
        break;
      case "ivec3":
        r = `ivec3(${D._numberToIntStr(s[0])},                             ${D._numberToIntStr(s[1])},                             ${D._numberToIntStr(s[2])})`;
        break;
      case "ivec4":
        r = `ivec4(${D._numberToIntStr(s[0])},                             ${D._numberToIntStr(s[1])},                             ${D._numberToIntStr(s[2])},                             ${D._numberToIntStr(s[3])})`;
        break;
      case "mat2":
      case "mat3":
      case "mat4":
        r = `${e}(${Array.prototype.map.call(s, (n) => D._numberToFloatStr(n)).join(", ")})`;
    }
    return this._entries.add(`const ${e} ${t} = ${r};`), this;
  }
  static _numberToIntStr(t) {
    return t.toFixed(0);
  }
  static _numberToFloatStr(t) {
    return Number.isInteger(t) ? t.toFixed(1) : t.toString();
  }
  generateSource() {
    return Array.from(this._entries);
  }
};
function Fu(i = !0) {
  return `#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif
${i ? "out vec4 fragColor;" : ""}
`;
}
const Ru = `precision highp float;
precision highp sampler2D;`;
function Ou(i) {
  return i.split(" ").map((t, e) => e > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t).join("");
}
function Du(i, t) {
  const e = [];
  for (e.push(t); e.length; ) {
    const s = e.pop();
    if (typeof s == "object" && !i.has(s.uid)) {
      i.add(s.uid);
      for (const r of s.children) e.push(r);
    }
  }
}
let fe = class Cr {
  constructor() {
    this.uid = Cr.NodeCount++, this._debugName = null, this._isMutable = !1, this.isImplicit = !1;
  }
  get isMutable() {
    return this._isMutable;
  }
  setMutable() {
    return this._isMutable = !0, this;
  }
  setDebugName(t) {
    return t = Ou(t), this._debugName = t, this.isImplicit && this.children[0] instanceof Cr && this.children[0].setDebugName(t), this;
  }
  get debugInfo() {
    return { name: this._debugName ?? "" };
  }
  cloneInto(t) {
    t._debugName = this._debugName, t._isMutable = this._isMutable, t.isImplicit = this.isImplicit, t.uid = this.uid;
  }
};
function v(i) {
  return typeof i == "object" ? i.clone() : i;
}
fe.NodeCount = 0;
let Y = class extends fe {
  constructor() {
    super(...arguments), this.shaderType = "primitive-node";
  }
}, Gu = class La extends fe {
  constructor(t) {
    super(), this.child = t, this.shaderType = "scope-node";
  }
  get children() {
    return [this.child];
  }
  clone() {
    const t = new La(v(this.child));
    return this.cloneInto(t), t;
  }
}, Bu = class Ea extends fe {
  constructor(t, e, s) {
    super(), this.property = t, this.target = e, this.returnType = s, this.shaderType = "property-access-node";
  }
  get children() {
    const t = [this.target];
    return typeof this.property != "string" && t.push(this.property), t;
  }
  clone() {
    const t = new Ea(this.property, v(this.target), this.returnType);
    return this.cloneInto(t), t;
  }
}, Vu = class Na extends fe {
  constructor(t, e, s) {
    super(), this.condition = t, this.ifTrue = e, this.ifFalse = s, this.shaderType = "condition-node";
  }
  get children() {
    return [this.condition, this.ifTrue, this.ifFalse];
  }
  clone() {
    const t = v(this.ifTrue), e = this.ifFalse ? v(this.ifFalse) : null, s = new Na(this.condition, t, e);
    return this.cloneInto(s), s;
  }
}, Yu = class Aa extends fe {
  constructor(t, e, s, r) {
    super(), this.captureList = t, this.returnType = e, this.generator = r, this.shaderType = "block-node", s && (this.subgraph = new Gu(s));
  }
  get children() {
    return Object.keys(this.captureList).map((t) => this.captureList[t]).concat(this.subgraph ?? []);
  }
  clone() {
    const t = {};
    for (const s in this.captureList) t[s] = v(this.captureList[s]);
    const e = new Aa(t, this.returnType, this.subgraph ? v(this.subgraph.child) : this.subgraph, this.generator);
    return this.cloneInto(e), e;
  }
}, oe = class Fa extends fe {
  constructor(t, e, s, r, n, o = !1) {
    super(), this.token = t, this._children = e, this.isInfix = s, this.isPropertyAccess = r, this.returnType = n, this.isTernary = o, this.shaderType = "function-node";
  }
  get children() {
    return this._children;
  }
  clone() {
    const t = new Fa(this.token, this._children.map(v), this.isInfix, this.isPropertyAccess, this.returnType, this.isTernary);
    return this.cloneInto(t), t;
  }
};
var ys, $r, kr, Ir, Tr, zr, Lr, Er, Nr, Ar, Fr, Rr, Or, Dr;
function Hu(i) {
  const t = [["float", "vec2", "vec3", "vec4"], ["int", "ivec2", "ivec3", "ivec4"], ["uint", "uvec2", "uvec3", "uvec4"], ["bool", "bvec2", "bvec3", "bvec4"]];
  for (const e of t) if (e.includes(i)) return e.map((s) => qu[s]);
  throw new Error("Unable to find type family");
}
function Ra(i) {
  return new Proxy(i, { get(t, e) {
    if (e === "constructor") return new Proxy(t.constructor, { construct: (s, r, n) => Ra(new s(...r)) });
    if (e in t) return t[e];
    if (typeof e == "string") {
      const s = Hu(i.type);
      return nt(i, e, s[e.length - 1]);
    }
  } });
}
function at(i) {
  return new Proxy(i, { construct: (t, e, s) => Ra(new t(...e)) });
}
function Uu(i) {
  return new Proxy(i, { get(t, e) {
    if (e in t) return t[e];
    if (typeof e == "string") {
      const s = parseInt(e, 10);
      if (!isNaN(s)) return nt(i, `[${s}]`, i.elementType.constructor);
    }
  } });
}
function Xu(i) {
  return new Proxy(i, { construct: (t, e, s) => Uu(new t(...e)) });
}
let Gr = class extends Error {
}, gt = ys = class extends Y {
  constructor(i, t) {
    super(), this.elementType = i, this.size = t, this.children = [], this.type = "array";
  }
  clone() {
    const i = new ys(this.elementType, this.size);
    return super.cloneInto(i), i;
  }
  get(i) {
    if (typeof i == "number") {
      const t = new Wt(i);
      return t.isImplicit = !0, nt(this, t, this.elementType.constructor);
    }
    return nt(this, i, this.elementType.constructor);
  }
  last() {
    return this.get(this.size - 1);
  }
  first() {
    return this.get(0);
  }
  findIndex(i, t, e) {
    return Ku(this, i, t, e);
  }
  glslFindIndex(i, t, e) {
    return Ju(this, i, t, e);
  }
  static ofType(i, t) {
    const e = { construct: (s, r) => new ys(new i(), t) };
    return new Proxy(ys, e);
  }
};
gt.type = "array", gt = ys = x([Xu], gt);
let Lt = class Oa extends Y {
  constructor() {
    super(...arguments), this.type = "sampler2D", this.children = [];
  }
  clone() {
    const t = new Oa();
    return t.children = this.children.map(v), super.cloneInto(t), t;
  }
};
Lt.type = "sampler2D";
let b = class we extends Y {
  constructor(t) {
    super(), this.type = "float", this.children = [t];
  }
  clone() {
    const t = new we(v(this.children[0]));
    return super.cloneInto(t), t;
  }
  multiply(t) {
    return Zt(this, typeof t == "number" ? H(t, we) : t);
  }
  divide(t) {
    return As(this, typeof t == "number" ? H(t, we) : t);
  }
  add(t) {
    return Fe(this, typeof t == "number" ? H(t, we) : t);
  }
  subtract(t) {
    return Fs(this, typeof t == "number" ? H(t, we) : t);
  }
};
b.type = "float";
let E = $r = class extends Y {
  constructor(i, t) {
    super(), this.type = "vec2", this.children = [i, t].filter((e) => e != null);
  }
  clone() {
    const i = new $r(v(this.children[0]), v(this.children[1]));
    return super.cloneInto(i), i;
  }
  get 0() {
    return nt(this, "[0]", b);
  }
  get 1() {
    return nt(this, "[1]", b);
  }
  get 2() {
    throw new Gr();
  }
  get 3() {
    throw new Gr();
  }
  multiply(i) {
    return Zt(this, typeof i == "number" ? H(i, b) : i);
  }
  divide(i) {
    return As(this, typeof i == "number" ? H(i, b) : i);
  }
  add(i) {
    return Fe(this, typeof i == "number" ? H(i, b) : i);
  }
  subtract(i) {
    return Fs(this, typeof i == "number" ? H(i, b) : i);
  }
};
E.type = "vec2", E = $r = x([at], E);
let U = kr = class extends Y {
  constructor(i, t, e) {
    super(), this.type = "vec3", this.children = [i, t, e].filter((s) => s != null);
  }
  get 0() {
    return nt(this, "[0]", b);
  }
  get 1() {
    return nt(this, "[1]", b);
  }
  get 2() {
    return nt(this, "[2]", b);
  }
  get 3() {
    throw new Gr();
  }
  clone() {
    const i = new kr(v(this.children[0]), v(this.children[1]), v(this.children[2]));
    return super.cloneInto(i), i;
  }
  multiply(i) {
    return Zt(this, typeof i == "number" ? H(i, b) : i);
  }
  divide(i) {
    return As(this, typeof i == "number" ? H(i, b) : i);
  }
  add(i) {
    return Fe(this, typeof i == "number" ? H(i, b) : i);
  }
  subtract(i) {
    return Fs(this, typeof i == "number" ? H(i, b) : i);
  }
};
U.type = "vec3", U = kr = x([at], U);
let O = Ir = class extends Y {
  constructor(i, t, e, s) {
    super(), this.type = "vec4", this.children = [i, t, e, s].filter((r) => r != null);
  }
  clone() {
    const i = new Ir(v(this.children[0]), v(this.children[1]), v(this.children[2]), v(this.children[3]));
    return super.cloneInto(i), i;
  }
  get 0() {
    return nt(this, "[0]", b);
  }
  get 1() {
    return nt(this, "[1]", b);
  }
  get 2() {
    return nt(this, "[2]", b);
  }
  get 3() {
    return nt(this, "[3]", b);
  }
  multiply(i) {
    return Zt(this, typeof i == "number" ? H(i, b) : i);
  }
  divide(i) {
    return As(this, typeof i == "number" ? H(i, b) : i);
  }
  add(i) {
    return Fe(this, typeof i == "number" ? H(i, b) : i);
  }
  subtract(i) {
    return Fs(this, typeof i == "number" ? H(i, b) : i);
  }
};
O.type = "vec4", O = Ir = x([at], O);
let di = Tr = class extends Y {
  constructor(i) {
    super(), this.type = "uint", this.children = [i];
  }
  clone() {
    const i = new Tr(v(this.children[0]));
    return super.cloneInto(i), i;
  }
};
di.type = "uint", di = Tr = x([at], di);
let fi = zr = class extends Y {
  constructor(i, t) {
    super(), this.type = "uvec2", this.children = [i, t].filter((e) => e != null);
  }
  clone() {
    const i = new zr(v(this.children[0]), v(this.children[1]));
    return super.cloneInto(i), i;
  }
};
fi.type = "uvec2", fi = zr = x([at], fi);
let mi = Lr = class extends Y {
  constructor(i, t, e) {
    super(), this.type = "uvec3", this.children = [i, t, e].filter((s) => s != null);
  }
  clone() {
    const i = new Lr(v(this.children[0]), v(this.children[1]), v(this.children[2]));
    return super.cloneInto(i), i;
  }
};
mi.type = "uvec3", mi = Lr = x([at], mi);
let _i = Er = class extends Y {
  constructor(i, t, e, s) {
    super(), this.type = "uvec4", this.children = [i, t, e, s].filter((r) => r != null);
  }
  clone() {
    const i = new Er(v(this.children[0]), v(this.children[1]), v(this.children[2]), v(this.children[3]));
    return super.cloneInto(i), i;
  }
};
_i.type = "uvec4", _i = Er = x([at], _i);
class it extends Y {
  constructor(t) {
    super(), this.type = "bool", this.children = [t];
  }
  and(t) {
    return Vr(this, t);
  }
  or(t) {
    return Ba(this, t);
  }
  clone() {
    const t = new it(v(this.children[0]));
    return super.cloneInto(t), t;
  }
}
it.type = "bool";
let gi = Nr = class extends Y {
  constructor(i, t) {
    super(), this.type = "bvec2", this.children = [i, t].filter((e) => e != null);
  }
  all() {
    return bn(this);
  }
  any() {
    return Pn(this);
  }
  clone() {
    const i = new Nr(v(this.children[0]), v(this.children[1]));
    return super.cloneInto(i), i;
  }
};
gi.type = "bvec2", gi = Nr = x([at], gi);
let yi = Ar = class extends Y {
  constructor(i, t, e) {
    super(), this.type = "bvec3", this.children = [i, t, e].filter((s) => s != null);
  }
  all() {
    return bn(this);
  }
  any() {
    return Pn(this);
  }
  clone() {
    const i = new Ar(v(this.children[0]), v(this.children[1]), v(this.children[2]));
    return super.cloneInto(i), i;
  }
};
function H(i, t) {
  return typeof i == "number" ? new t(i) : i;
}
yi.type = "bvec3", yi = Ar = x([at], yi);
let xi = Fr = class extends Y {
  constructor(i, t, e, s) {
    super(), this.type = "bvec4", this.children = [i, t, e, s].filter((r) => r != null);
  }
  all() {
    return bn(this);
  }
  any() {
    return Pn(this);
  }
  clone() {
    const i = new Fr(v(this.children[0]), v(this.children[1]), v(this.children[2]), v(this.children[3]));
    return super.cloneInto(i), i;
  }
};
xi.type = "bvec4", xi = Fr = x([at], xi);
let Wt = class Se extends Y {
  constructor(t) {
    super(), this.type = "int", this.children = [t];
  }
  multiply(t) {
    return Zt(this, H(t, Se));
  }
  add(t) {
    return Fe(this, H(t, Se));
  }
  subtract(t) {
    return Fs(this, H(t, Se));
  }
  divide(t) {
    return As(this, H(t, Se));
  }
  clone() {
    const t = new Se(v(this.children[0]));
    return super.cloneInto(t), t;
  }
};
Wt.type = "int";
let bi = Rr = class extends Y {
  constructor(i, t) {
    super(), this.type = "ivec2", this.children = [i, t].filter((e) => e != null);
  }
  clone() {
    const i = new Rr(v(this.children[0]), v(this.children[1]));
    return super.cloneInto(i), i;
  }
};
bi.type = "ivec2", bi = Rr = x([at], bi);
let Pi = Or = class extends Y {
  constructor(i, t, e) {
    super(), this.type = "ivec3", this.children = [i, t, e].filter((s) => s != null);
  }
  clone() {
    const i = new Or(v(this.children[0]), v(this.children[1]), v(this.children[2]));
    return super.cloneInto(i), i;
  }
};
Pi.type = "ivec3", Pi = Or = x([at], Pi);
let wi = Dr = class extends Y {
  constructor(i, t, e, s) {
    super(), this.type = "ivec4", this.children = [i, t, e, s].filter((r) => r != null);
  }
  clone() {
    const i = new Dr(v(this.children[0]), v(this.children[1]), v(this.children[2]), v(this.children[3]));
    return super.cloneInto(i), i;
  }
};
wi.type = "ivec4", wi = Dr = x([at], wi);
let Wu = class Da extends Y {
  constructor(t, e, s, r) {
    super(), this.type = "mat2", this.children = [t, e, s, r];
  }
  clone() {
    const t = new Da(v(this.children[0]), v(this.children[1]), v(this.children[2]), v(this.children[3]));
    return super.cloneInto(t), t;
  }
};
Wu.type = "mat2";
class et extends Y {
  static identity() {
    return new et(1, 0, 0, 0, 1, 0, 0, 0, 1);
  }
  static fromRotation(t) {
    const e = vn(t), s = Va(t);
    return new et(s, e, 0, Ei(e), s, 0, 0, 0, 1);
  }
  constructor(t, e, s, r, n, o, a, h, l) {
    super(), this.type = "mat3", this.children = [t, e, s, r, n, o, a, h, l];
  }
  add(t) {
    return Fe(this, t);
  }
  multiply(t) {
    return Zt(this, t);
  }
  clone() {
    const t = new et(v(this.children[0]), v(this.children[1]), v(this.children[2]), v(this.children[3]), v(this.children[4]), v(this.children[5]), v(this.children[6]), v(this.children[7]), v(this.children[8]));
    return super.cloneInto(t), t;
  }
}
et.type = "mat3";
class bs extends Y {
  static identity() {
    return new bs(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  constructor(t, e, s, r, n, o, a, h, l, c, u, d, p, m, f, _) {
    super(), this.type = "mat4", this.children = [t, e, s, r, n, o, a, h, l, c, u, d, p, m, f, _];
  }
  static fromColumns(t, e, s, r) {
    return new bs(t.x, t.y, t.z, t.w, e.x, e.y, e.z, e.w, s.x, s.y, s.z, s.w, r.x, r.y, r.z, r.w);
  }
  multiply(t) {
    return Zt(this, t);
  }
  clone() {
    const t = new bs(v(this.children[0]), v(this.children[1]), v(this.children[2]), v(this.children[3]), v(this.children[4]), v(this.children[5]), v(this.children[6]), v(this.children[7]), v(this.children[8]), v(this.children[9]), v(this.children[10]), v(this.children[11]), v(this.children[12]), v(this.children[13]), v(this.children[14]), v(this.children[15]));
    return super.cloneInto(t), t;
  }
}
bs.type = "mat4";
const qu = { float: b, vec2: E, vec3: U, vec4: O, int: Wt, ivec2: bi, ivec3: Pi, ivec4: wi, uint: di, uvec2: fi, uvec3: mi, uvec4: _i, bool: it, bvec2: gi, bvec3: yi, bvec4: xi }, xe = (...i) => new Wt(...i), G = (...i) => new b(...i), Br = (...i) => new E(...i), Zu = (...i) => new U(...i), ju = (...i) => new O(...i), so = (...i) => new et(...i);
function nt(i, t, e) {
  const s = new e(new Bu(t, i, e));
  return s.isImplicit = !0, s;
}
function ht(i, t, e, s = null) {
  if (s) {
    const n = new s(), o = new s(new oe(i, [t, e], !0, !1, n));
    return o.isImplicit = !0, o;
  }
  if (t.type === "float" || t.type === "int") {
    const n = new e.constructor(new oe(i, [t, e], !0, !1, e.constructor));
    return n.isImplicit = !0, n;
  }
  if ((t.type === "mat2" || t.type === "mat3" || t.type === "mat4") && e.type !== "float") {
    const n = new e.constructor(new oe(i, [t, e], !0, !1, e.constructor));
    return n.isImplicit = !0, n;
  }
  const r = new t.constructor(new oe(i, [t, e], !0, !1, t.constructor));
  return r.isImplicit = !0, r;
}
function dt(i, t, e = t.constructor) {
  const s = new e(new oe(i, [t], !1, !1, e));
  return s.isImplicit = !0, s;
}
function me(i, t, e, s = t.constructor) {
  const r = new s(new oe(i, [t, e], !1, !1, s));
  return r.isImplicit = !0, r;
}
function yn(i, t, e, s, r = t.constructor) {
  const n = new r(new oe(i, [t, e, s], !1, !1, r));
  return n.isImplicit = !0, n;
}
function Ei(i) {
  return Zt(i, G(-1));
}
function Ga(i, t, e, s) {
  return new t(new Yu(i, t, e, s));
}
function Ku(i, t, e = 0, s = i.size) {
  const r = new Wt(e).setMutable().setDebugName("FindIndexIterator"), n = t(i.get(r)).setDebugName("FindIndexPredicate");
  return Ga({ iter: r }, Wt, n, ({ out: a, iter: h, subgraph: l }) => `
${a} = -1;

for (; ${h} < ${s}; ${h}++) {

${l.body}

  if (${l.varName}) {
    ${a} = ${h};
    break;
  }

}
`).setDebugName("FindIndexBlock");
}
function Ju(i, t, e = 0, s = i.size) {
  return Ga({ array: i }, Wt, null, ({ out: n, array: o }) => `
${n} = -1;
for (int i = ${e}; i < ${s}; i++) {
  bool condition;
  ${t({ array: o, i: "i", out: "condition" })}
  if (condition) {
    ${n} = i;
    break;
  }
}
`).setDebugName("GlslFindIndexBlock");
}
function X(i, t, e) {
  const s = typeof t == "function" ? t() : t, r = typeof e == "function" ? e() : e, n = new s.constructor(new Vu(i, s, r));
  return n.isImplicit = !0, n;
}
function Ns(...i) {
  const t = i.map(([a, h]) => typeof h == "function" ? [a, h()] : [a, h]), e = t[0][1].constructor, s = t.findIndex((a) => a[0] === !0);
  if (s === -1) throw new Error("A cond must have a fallthrough case with `true`/; ");
  const r = t.slice(0, s), n = t[s][1], o = new e(r.reduceRight((a, h) => X(h[0], h[1], a), n));
  return o.isImplicit = !0, o;
}
function Zt(i, t) {
  return ht("*", i, t);
}
function As(i, t) {
  return ht("/", i, t);
}
function Fe(i, t) {
  return ht("+", i, t);
}
function Fs(i, t) {
  return ht("-", i, t);
}
function Qf(i, t) {
  return ht(">>", i, t);
}
function tm(i, t) {
  return ht("&", i, t);
}
function xn(i, t) {
  return ht("==", i, t, it);
}
function Qu(i, t) {
  return ht("<", i, t, it);
}
function Wi(i, t) {
  return ht("<=", i, t, it);
}
function ot(i, t) {
  return ht(">", i, t, it);
}
function qi(i, t) {
  return ht(">=", i, t, it);
}
function Ba(...i) {
  return i.length <= 1 ? i[0] : i.slice(1).reduce((t, e) => tp(t, e), i[0]);
}
function tp(i, t) {
  return ht("||", i, t, it);
}
function Vr(...i) {
  return i.length <= 1 ? i[0] : i.slice(1).reduce((t, e) => ep(t, e), i[0]);
}
function ep(i, t) {
  return ht("&&", i, t, it);
}
function sp(i) {
  return dt("abs", i);
}
function bn(i) {
  return dt("all", i, it);
}
function Pn(i) {
  return dt("any", i, it);
}
function ip(i) {
  return dt("ceil", i);
}
function wn(i, t, e) {
  return yn("clamp", i, t, e, i.constructor);
}
function Va(i) {
  return dt("cos", i);
}
function Ya(i, t) {
  return me("distance", i, t, b);
}
function Sn(i, t) {
  return me("dot", i, t, b);
}
function rp(i) {
  return dt("floor", i);
}
function Ha(i) {
  return dt("fract", i);
}
function Ua(i) {
  return dt("length", i, b);
}
function ke(i, t) {
  return me("max", i, t);
}
function Yr(i, t) {
  return me("min", i, t);
}
function _e(i, t, e) {
  return yn("mix", i, t, e);
}
function Re(i, t) {
  return me("mod", i, t);
}
function np(i) {
  return dt("normalize", i);
}
function op(i) {
  return i.type === "bool" ? dt("!", i) : dt("not", i);
}
function vn(i) {
  return dt("sin", i);
}
function em(i, t, e) {
  return yn("smoothstep", i, t, e);
}
function Xt(i, t) {
  return me("step", i, t, t.constructor);
}
function Et(i, t) {
  return me("texture2D", i, t, O);
}
const Ue = 5;
function Z(i, t, e) {
  const s = t.split(`
`);
  for (const r of s) if (r.trim().length) {
    {
      let n = "";
      e != null && (n += `/*id:${e ?? "000"}*/   `), i.body += n.padEnd(14);
    }
    i.body += " ".repeat(i.indent) + r + `
`;
  }
}
let io = class {
  write(t) {
    for (const e of t.rootOutputNodes()) t.shouldPruneOutputNode(e) || (e.variableName = this._write(t, e.node));
    return t;
  }
  _createVarName(t, e) {
    let s = "";
    return typeof e != "boolean" && typeof e != "number" && e.debugInfo.name && (s = `${e.debugInfo.name}_`), `${s}v${t.varCount++}`;
  }
  _write(t, e, s = !1) {
    if (typeof e == "number" || typeof e == "boolean") return e.toString();
    let r = t.getEmit(e);
    if (r) return r;
    switch (e.shaderType) {
      case "scope-node":
        r = this._writeScopeNode(t, e);
        break;
      case "primitive-node":
        r = this._writePrimitveNode(t, e, s);
        break;
      case "function-node":
        r = this._writeFunctionNode(t, e);
        break;
      case "property-access-node":
        r = this._writePropertyAccessNode(t, e);
        break;
      case "text-node":
        r = e.text;
        break;
      case "block-node":
        r = this._writeBlockNode(t, e);
        break;
      case "condition-node":
        r = this._writeConditionNode(t, e);
    }
    return t.setEmit(e, r), r;
  }
  _writeScopeNode(t, e) {
    const s = new e.child.constructor();
    s.setDebugName(e.debugInfo.name);
    const r = this._write(t, s, !0);
    return Z(t, `{ /*ScopeStart: ${e.uid} ${e.debugInfo.name}*/`), t.indent += 2, Z(t, `${r} = ${this._write(t, e.child)};`), t.indent -= 2, Z(t, `} /*ScopeEnd: ${e.uid} ${e.debugInfo.name}*/`), r;
  }
  _writeConditionNode(t, e) {
    const s = new e.ifTrue.constructor(), r = this._write(t, s, !0);
    Z(t, `if (${this._write(t, e.condition)}) {`), t.indent += 2;
    const n = t.createSubgraphContext(), o = this._write(n, e.ifTrue);
    if (t.body += n.body, o && Z(t, `${r} = ${o};`), t.indent -= 2, Z(t, "}"), e.ifFalse) {
      Z(t, "else {"), t.indent += 2;
      const a = t.createSubgraphContext(), h = this._write(a, e.ifFalse);
      t.body += a.body, h && Z(t, `${r} = ${h};`), t.indent -= 2, Z(t, "}");
    }
    return r;
  }
  _writeBlockNode(t, e) {
    const { captureList: s, generator: r, returnType: n } = e, o = {};
    for (const c in s) {
      if (!s[c]) continue;
      const u = this._write(t, s[c]);
      o[c] = u;
    }
    const a = new n(), h = this._write(t, a, !0);
    if (o.out = h, e.subgraph) {
      const c = t.createSubgraphContext(), u = this._write(c, e.subgraph.child), d = c.body;
      o.subgraph = { varName: u, body: d };
    }
    const l = r(o);
    return Z(t, `{
`), t.indent += 2, Z(t, l), t.indent -= 2, Z(t, `}
`), h;
  }
  _writePropertyAccessNode(t, e) {
    const s = this._write(t, e.target);
    return typeof e.property == "string" && e.property.includes("[") ? `${s}${e.property}` : typeof e.property != "string" ? `${s}[${this._write(t, e.property)}]` : `${s}.${e.property}`;
  }
  _writeFunctionNode(t, e) {
    const s = e.returnType.type;
    if (e.isInfix) {
      const [o, a] = e.children.map((l) => this._write(t, l)), h = this._createVarName(t, e);
      return Z(t, `${s.padEnd(Ue)} ${h} = ${o} ${e.token} ${a};`, e.uid), h;
    }
    const r = e.children.map((o) => this._write(t, o)).join(", "), n = this._createVarName(t, e);
    return Z(t, `${s.padEnd(Ue)} ${n} = ${e.token}(${r});`, e.uid), n;
  }
  _writePrimitveNode(t, e, s = !1) {
    const r = t.getInput(e);
    if (r) return r.isUsed = !0, r.variableName;
    const n = e.children.length === 1 && e.children[0]?.type === e.type;
    if (e.isImplicit || n) return this._write(t, e.children[0]);
    const o = this._createVarName(t, e);
    if (s) return Z(t, `${e.type.padEnd(Ue)} ${o};`, e.uid), o;
    const a = !e.debugInfo.name && !e.isMutable;
    if (a && e.type === "float" && typeof e.children[0] == "number") return Number.isInteger(e.children[0]) ? e.children[0].toFixed(1) : e.children[0].toString();
    if (a && e.type === "int" && typeof e.children[0] == "number" && Number.isInteger(e.children[0])) return e.children[0].toString();
    const h = e.children.map((l) => this._write(t, l)).join(", ");
    return e.type === "array" ? (Z(t, `${e.type.padEnd(Ue)} ${o} = [${h}];`, e.uid), o) : a ? `${e.type}(${h})` : (Z(t, `${e.type.padEnd(Ue)} ${o} = ${e.type}(${h});`, e.uid), o);
  }
}, be = class Xa {
  constructor(t, e, s) {
    this.variableName = t, this.variableInputType = e, this.node = s, this.type = "shader-input", this.isUsed = !1;
  }
  clone() {
    return new Xa(this.variableName, this.variableInputType, v(this.node));
  }
}, Xe = class Wa {
  constructor(t, e, s) {
    this.outVariableName = t, this.outVariableType = e, this.node = s, this.type = "shader-output";
  }
  clone() {
    const t = new Wa(this.outVariableName, this.outVariableType, v(this.node));
    return t.variableName = this.variableName, t;
  }
}, ro = class Si {
  static createVertex(t, e, s, r, n, o) {
    const a = [];
    for (const l in t) {
      const c = t[l], u = s.get(l);
      u ? a.push(new be(u, "builtin", c)) : a.push(new be("a_" + l, "attribute", c));
    }
    for (const l of r) {
      const c = l.uniformHydrated;
      a.push(new be(l.uniformName, "uniform", c));
    }
    const h = [];
    for (const l in e) {
      const c = e[l];
      l === "glPosition" ? h.push(new Xe("gl_Position", "builtin", c)) : l === "glPointSize" ? h.push(new Xe("gl_PointSize", "builtin", c)) : h.push(new Xe("v_" + l, "varying", c));
    }
    return new Si(a, h, n, o);
  }
  static createFragment(t, e, s, r, n, o) {
    const a = [], h = Array.from(n.rootOutputNodes());
    for (const c in t) {
      const u = t[c], d = s.get(c);
      if (d) {
        a.push(new be(d, "builtin", u));
        continue;
      }
      const p = h.find((m) => m.node === u);
      p && a.push(new be(p.outVariableName, p.outVariableType, u));
    }
    for (const c of r) {
      const u = c.uniformHydrated;
      a.push(new be(c.uniformName, "uniform", u));
    }
    const l = [];
    for (const c in e) {
      const u = e[c], d = s.get(c);
      if (c === "discard") l.push(new Xe(null, "discard", u));
      else {
        if (!d) throw new Error(`Member ${c} in shader fragment output shoule be tagged as builtin`);
        l.push(new Xe(d, "builtin", u));
      }
    }
    return new Si(a, l, o);
  }
  constructor(t, e, s, r) {
    this.type = "shader-graph-context", this.indent = 0, this.body = "", this.varCount = 0, this._inputShaderTypesByNodeUid = /* @__PURE__ */ new Map(), this._nodeEmitMap = /* @__PURE__ */ new Map();
    for (const n of t) this._inputShaderTypesByNodeUid.set(n.node.uid, n);
    this._outputShaderTypes = e, this._transformFeedbackBindings = s, this._transformFeedbackNames = new Set(s.map((n) => "v_" + n.propertyKey)), this._usedInFragmentShader = r;
  }
  shouldPruneOutputNode(t) {
    return !!this._usedInFragmentShader && t.outVariableType !== "builtin" && !this._transformFeedbackNames.has(t.outVariableName) && !this._usedInFragmentShader.has(t.node.uid);
  }
  setEmit(t, e) {
    this._nodeEmitMap.set(t.uid, e);
  }
  getEmit(t) {
    return this._nodeEmitMap.get(t.uid);
  }
  inputs() {
    return this._inputShaderTypesByNodeUid.values();
  }
  getInput(t) {
    return this._inputShaderTypesByNodeUid.get(t.uid);
  }
  *rootOutputNodes() {
    for (const t of this._outputShaderTypes) yield t;
  }
  *nodes() {
    const t = [];
    for (const e of this._outputShaderTypes.values()) t.push(e.node);
    for (; t.length; ) {
      const e = t.pop();
      typeof e != "number" && typeof e != "boolean" && t.push(...e.children.filter(Boolean)), yield e;
    }
  }
  *nodesOfTypeOrFunction() {
    for (const t of this.nodes()) typeof t != "number" && typeof t != "boolean" && (yield t);
  }
  createSubgraphContext() {
    const t = this.clone();
    return t.body = "", t.indent = this.indent + 2, t._nodeEmitMap = new Map(this._nodeEmitMap), t;
  }
  clone() {
    const t = new Si([], this._outputShaderTypes, this._transformFeedbackBindings, this._usedInFragmentShader);
    return t._inputShaderTypesByNodeUid = this._inputShaderTypesByNodeUid, t.indent = this.indent, t.body = this.body, t.varCount = this.varCount, t._nodeEmitMap = this._nodeEmitMap, t;
  }
  insertVertexShader(t) {
    t.vertex.code.add(""), this._insertInputs(t, "vertex"), t.vertex.code.add(""), t.vertex.code.add("// OUTPUTS: "), t.vertex.code.add("// --------------------------------------------------------- ");
    for (const e of this.rootOutputNodes()) {
      const s = e.outVariableType === "builtin";
      this.shouldPruneOutputNode(e) || (s ? t.vertex.code.add(`// ${e.outVariableType.padEnd(7)} ${e.node.type.padEnd(9)} ${e.outVariableName};`) : t.vertex.code.add(`${e.outVariableType.padEnd(10)} ${e.node.type.padEnd(9)} ${e.outVariableName};`));
    }
    t.vertex.code.add(""), t.vertex.code.add("void main() {"), t.vertex.code.add("  " + this.body.split(`
`).join(`
  `));
    for (const e of this.rootOutputNodes()) this.shouldPruneOutputNode(e) || t.vertex.code.add(`  ${e.outVariableName} = ${e.variableName};`);
    t.vertex.code.add("}");
  }
  insertFragmentShader(t) {
    this._insertInputs(t, "fragment"), t.fragment.code.add(""), t.fragment.code.add("void main() {"), t.fragment.code.add("  " + this.body.split(`
`).join(`
  `));
    for (const e of this.rootOutputNodes()) e.outVariableType === "discard" ? (t.fragment.code.add("  // TODO: Should ensure codegen for discard appears first in fragment shader"), t.fragment.code.add(`  if (${e.variableName}) {`), t.fragment.code.add("    discard;"), t.fragment.code.add("  }"), t.fragment.code.add("  ")) : t.fragment.code.add(`  ${e.outVariableName} = ${e.variableName};`);
    t.fragment.code.add("}");
  }
  _insertInputs(t, e) {
    t[e].code.add("// INPUTS: "), t[e].code.add("// --------------------------------------------------------- ");
    for (const s of this.inputs()) s.isUsed && s.variableInputType !== "builtin" && (s.node.type === "array" ? t[e].code.add(`${s.variableInputType.padEnd(10)} ${s.node.elementType.type.padEnd(9)} ${s.variableName}[${s.node.size}];`) : t[e].code.add(`${s.variableInputType.padEnd(10)} ${s.node.type.padEnd(9)} ${s.variableName};`));
  }
};
const ap = () => de.getLogger("esri.views.2d.engine.webgl.shaderGraph.typed.TypedShaderProgram");
function We(i, t, e) {
  const s = t.length;
  if (s !== e) {
    const r = new Qr("Invalid Uniform", `Invalid length, expected ${e} but got ${s}`, { uniformName: i, values: t });
    ap().errorOnce(r);
  }
}
let no = class {
  constructor(t, e, s, r, n, o) {
    this._program = null, this._vao = null, this._temporaryTextures = [], this.vertexShader = t, this.fragmentShader = e, this._locations = s, this._locationInfo = r, this._uniformBindings = n, this._transformFeedbackBindings = o;
  }
  destroy() {
    this._program && this._program.dispose(), this.cleanupTemporaryTextures();
  }
  get locations() {
    return this._locations;
  }
  get locationInfo() {
    return this._locationInfo;
  }
  setUniforms(t) {
    this._uniforms = t;
  }
  cleanupTemporaryTextures() {
    for (const t of this._temporaryTextures) t.dispose();
    this._temporaryTextures = [];
  }
  bind(t) {
    const e = this._uniforms;
    if (!this._program) {
      const r = /* @__PURE__ */ new Map();
      for (const [o, a] of this._locations) r.set(o, a);
      const n = [];
      for (const o of this._transformFeedbackBindings ?? []) {
        const { index: a, propertyKey: h } = o;
        n[a] = `v_${h}`;
      }
      this._program = new pl(t, this.vertexShader, this.fragmentShader, r, /* @__PURE__ */ new Map(), n);
    }
    const s = this._program;
    t.useProgram(s);
    for (const r of this._uniformBindings) {
      const { shaderModulePath: n, uniformName: o, uniformType: a, uniformArrayLength: h } = r, l = Fh(n, e);
      if (l == null) {
        if (a === "sampler2D") continue;
        throw new Error(`Failed to find uniform value for ${n}`);
      }
      switch (a === "array" ? r.uniformArrayElementType : a) {
        case "sampler2D": {
          const { unit: c, texture: u } = l;
          if (s.setUniform1i(o, c), "type" in u) t.bindTexture(u, c);
          else {
            const d = cl(t, u.descriptor, u.data);
            t.bindTexture(d, c);
          }
          break;
        }
        case "int":
          if (!h) {
            s.setUniform1i(o, l);
            break;
          }
          We(r.uniformName, l, h), s.setUniform1iv(o, l);
          break;
        case "float":
          if (!h) {
            s.setUniform1f(o, l);
            break;
          }
          We(r.uniformName, l, h), s.setUniform1fv(o, l);
          break;
        case "vec2":
          if (!h) {
            s.setUniform2f(o, l[0], l[1]);
            break;
          }
          We(r.uniformName, l, h), s.setUniform2fv(o, l.flat());
          break;
        case "vec3":
          if (!h) {
            s.setUniform3f(o, l[0], l[1], l[2]);
            break;
          }
          We(r.uniformName, l, h), s.setUniform3fv(o, l.flat());
          break;
        case "vec4":
          if (!h) {
            s.setUniform4f(o, l[0], l[1], l[2], l[3]);
            break;
          }
          We(r.uniformName, l, h), s.setUniform4fv(o, l.flat());
          break;
        case "mat3":
          s.setUniformMatrix3fv(o, l.flat());
          break;
        case "mat4":
          s.setUniformMatrix4fv(o, l.flat());
          break;
        default:
          throw new Error(`Unable to set uniform for type ${a}`);
      }
    }
  }
};
function qe(i) {
  return new i();
}
function Oe(i, t, e) {
  const s = i.constructor[t] ?? [];
  i.constructor.hasOwnProperty(t) || Object.defineProperty(i.constructor, t, { value: s.slice() }), i.constructor[t].push(e);
}
function L(i, t) {
  return (e, s) => {
    Oe(e, "locations", { typeCtor: t, propertyKey: s, parameterIndex: null, index: i });
  };
}
const hp = (i) => (t, e) => {
  Oe(t, "builtins", { builtin: i, propertyKey: e });
}, V = (i) => (t, e, s) => {
  Oe(t, "inputs", { inputCtor: i, propertyKey: e, parameterIndex: s });
}, C = (i) => (t, e) => {
  Oe(t, "uniforms", { typeCtor: i, propertyKey: e });
}, J = (i) => (t, e) => {
  Oe(t, "options", { typeCtor: i, propertyKey: e });
}, oo = (i, t) => {
  Oe(i, "defines", { propertyKey: t });
}, Hr = (i, t) => (e, s) => {
  e.constructor.builtins.push({ builtin: i, propertyKey: s, typeCtor: t });
};
let Ur = class {
};
Ur.builtins = [], x([Hr("gl_VertexID", Wt)], Ur.prototype, "glVertexID", void 0);
let lp = class {
}, Ps = class {
};
Ps.builtins = [], x([Hr("gl_FragCoord", O)], Ps.prototype, "glFragCoord", void 0), x([Hr("gl_PointCoord", E)], Ps.prototype, "glPointCoord", void 0);
let qa = class {
};
x([hp("gl_FragColor")], qa.prototype, "glFragColor", void 0);
let lt = class {
  constructor() {
    this.type = "uniform-group";
  }
  get _uniforms() {
    return this.constructor.uniforms ?? [];
  }
}, cp = class {
  constructor() {
    this.logShader = !1, this.computeAttributes = {};
  }
  get vertexInput() {
    const t = Ji(this._shaderModuleClass.inputs, (e) => e.propertyKey === "vertex" && e.parameterIndex === 0);
    if (!t) throw new Error("Unable to find vertex input parameter");
    return t;
  }
  get computeInput() {
    return Ji(this._shaderModuleClass.inputs, (t) => t.propertyKey === "vertex" && t.parameterIndex === 1);
  }
  get fragmentInput() {
    const t = Ji(this._shaderModuleClass.inputs, (e) => e.propertyKey === "fragment");
    if (!t) throw new Error("Unable to find fragment input parameter");
    return t;
  }
  get transformFeedbackBindings() {
    return this.fragmentInput.inputCtor.transformFeedbackBindings ?? [];
  }
  get locations() {
    return [...this.vertexInput.inputCtor.locations, ...this.computeInput?.inputCtor.locations ?? []];
  }
  get locationsMap() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set();
    for (const s of this.locations) e.has(s.index) ? de.getLogger("esri.views.2d.engine.webgl.shaderGraph.GraphShaderModule").warnOnce("mapview-rendering", `Unable to assigned attribute ${s.propertyKey} to ${s.index}. Index already in use`, { locationsMap: t }) : (t.set(s.propertyKey, s.index), e.add(s.index));
    return t;
  }
  get locationInfo() {
    if (!this._locationInfo) {
      const t = this.locationsMap, e = Array.from(t.entries()).map(([r, n]) => `${r}.${n}`).join("."), s = Rh(e);
      this._locationInfo = { hash: s, locations: t };
    }
    return this._locationInfo;
  }
  get renamedLocationsMap() {
    const t = /* @__PURE__ */ new Map();
    for (const e of this.locations) t.set("a_" + e.propertyKey, e.index);
    return t;
  }
  get optionPropertyKeys() {
    if (!this._optionPropertyKeys) {
      const t = /* @__PURE__ */ new Set();
      for (const e of this._options) t.add(e.propertyKey);
      this._optionPropertyKeys = t;
    }
    return this._optionPropertyKeys;
  }
  get _shaderModuleClass() {
    return this.constructor;
  }
  get _defines() {
    return this._shaderModuleClass.defines ?? [];
  }
  get _options() {
    return this._shaderModuleClass.options ?? [];
  }
  get _uniforms() {
    return this._shaderModuleClass.uniforms ?? [];
  }
  getProgram(t, e, s, r) {
    try {
      const { vertex: n, fragment: o, uniformBindings: a } = this._generateShaders(t, e, s, r);
      return new no(n, o, this.renamedLocationsMap, this.locationInfo, a, this.transformFeedbackBindings);
    } catch (n) {
      return console.error("Failed to create program", { error: n }), new no("", "", this.renamedLocationsMap, this.locationInfo, [], this.transformFeedbackBindings);
    }
  }
  getDebugUniformClassInfo(t) {
    const e = this._options.find((r) => r.propertyKey === t);
    if (e) return { type: "option", className: e.typeCtor };
    const s = this._uniforms.find((r) => r.propertyKey === t);
    if (!s) throw new Error(`Unable to find uniform class type for property: ${t}`);
    return { type: "required", className: s.typeCtor };
  }
  getShaderKey(t, e, s, r) {
    const n = Object.keys(s).map((h) => `${h}.${s[h]}`).join("."), o = Object.keys(r).map((h) => `${h}.${r[h]}`).join("."), a = Object.keys(e).filter((h) => this.optionPropertyKeys.has(h) && e[h]).join(".");
    return `${this.constructor.name}.${t.hash}.${n}.${o}.${a}`;
  }
  _generateShaders(t, e, s, r) {
    const n = [];
    this._setDefines(s), this._setOptionalUniforms(n, e), this._setRequiredUniforms(n);
    const o = this._hydrateVertexInput(r), a = this._injectPackPrecisionFactor(o, t), h = this._hydrateComputeInput(), l = h && this._injectPackPrecisionFactor(h, t), c = this.vertex(a, l), u = this._hydrateFragmentInput(c), d = this.fragment(u), p = /* @__PURE__ */ new Set();
    for (const M in d) {
      const k = d[M];
      Du(p, k);
    }
    const m = this._getVertexInputBuiltins(), f = ro.createVertex({ ...o, ...h }, c, m, n, this.transformFeedbackBindings, p);
    new io().write(f);
    const _ = this._getFragmentInputBuiltins(d);
    _.set("glPointCoord", "gl_PointCoord");
    const y = ro.createFragment(u, d, _, n, f, this.transformFeedbackBindings);
    new io().write(y);
    const g = this._createShaderBuilder(f, y), P = g.generate("vertex", !1), w = g.generate("fragment", !1);
    return this.logShader && (console.log(P), console.log(w)), { vertex: P, fragment: w, uniformBindings: n };
  }
  _setDefines(t) {
    for (const e in t) this[e] = t[e];
  }
  _setOptionalUniforms(t, e) {
    for (const s of this._options)
      e[s.propertyKey] ? this[s.propertyKey] = this._hydrateUniformGroup(t, s) : this[s.propertyKey] = null;
  }
  _setRequiredUniforms(t) {
    for (const e of this._uniforms) this[e.propertyKey] = this._hydrateUniformGroup(t, e);
  }
  _hydrateUniformGroup(t, e) {
    const s = new e.typeCtor();
    for (const r of s._uniforms ?? []) {
      const n = qe(r.typeCtor), o = `u_${e.propertyKey}_${r.propertyKey}`, a = n.type, h = [e.propertyKey, r.propertyKey].join(".");
      if ("type" in r.typeCtor && r.typeCtor.type === "array") {
        const l = n;
        t.push({ shaderModulePath: h, uniformName: o, uniformType: a, uniformArrayLength: l.size, uniformArrayElementType: l.elementType.type, uniformHydrated: n });
      } else t.push({ shaderModulePath: h, uniformName: o, uniformType: a, uniformHydrated: n });
      s[r.propertyKey] = n;
    }
    return s;
  }
  _hydrateVertexInput(t) {
    const e = this.vertexInput.inputCtor, s = e.locations.reduce((r, n) => t[n.propertyKey] === !1 ? r : { ...r, [n.propertyKey]: qe(n.typeCtor) }, {});
    for (const { propertyKey: r, typeCtor: n } of e.builtins) {
      const o = qe(n);
      s[r] = o;
    }
    return s;
  }
  _hydrateComputeInput() {
    return this.computeInput == null ? null : this.computeInput.inputCtor.locations.reduce((t, e) => ({ ...t, [e.propertyKey]: qe(e.typeCtor) }), {});
  }
  _injectPackPrecisionFactor(t, e) {
    const s = {};
    for (const r in t) {
      const n = t[r], o = e.attributes.find((a) => a.name === r);
      if (o?.packPrecisionFactor) {
        if (n.type !== "float" && n.type !== "vec2" && n.type !== "vec3" && n.type !== "vec4") throw new Error(`InternalError: packPrecisionFactor requires GenType, but found ${n.type}`);
        s[r] = n.divide(new b(o.packPrecisionFactor));
      } else s[r] = n;
    }
    return s;
  }
  _hydrateFragmentInput(t) {
    const e = {};
    for (const s in t) e[s] = t[s];
    for (const { propertyKey: s, typeCtor: r } of Ps.builtins) {
      const n = qe(r);
      e[s] = n;
    }
    return e;
  }
  _getVertexInputBuiltins() {
    const t = this.vertexInput.inputCtor, e = /* @__PURE__ */ new Map();
    for (const { builtin: s, propertyKey: r } of t.builtins) e.set(r, s);
    return e;
  }
  _getFragmentInputBuiltins(t) {
    const e = t.constructor, s = /* @__PURE__ */ new Map();
    for (const r of e.builtins ?? []) s.set(r.propertyKey, r.builtin);
    return s;
  }
  _createShaderBuilder(t, e) {
    const s = new zu();
    return this._insertDebugInfo(s), t.insertVertexShader(s), e.insertFragmentShader(s), s;
  }
  _insertDebugInfo(t) {
    t.vertex.code.add("// DEFINES: "), t.vertex.code.add("// --------------------------------------------------------- ");
    for (const e of this._defines) this[e.propertyKey] ? t.vertex.code.add(`//   ${e.propertyKey}: true`) : t.vertex.code.add(`//   ${e.propertyKey}: false`);
    t.vertex.code.add(""), t.vertex.code.add("// OPTIONS: "), t.vertex.code.add("// --------------------------------------------------------- ");
    for (const e of this._options) this[e.propertyKey] ? t.vertex.code.add(`//   ${e.propertyKey}: true`) : t.vertex.code.add(`//   ${e.propertyKey}: false`);
  }
};
function ao(i) {
  const t = G(12.9898), e = G(78.233), s = G(43758.5453), r = Sn(i, Br(t, e)), n = Re(r, G(3.14));
  return Ha(vn(n).multiply(s));
}
function pe(i) {
  return xn(i, G(wu));
}
function up(i, t) {
  return i.x.multiply(t.y).subtract(t.x.multiply(i.y));
}
function pp(i) {
  return i.multiply(2).subtract(1);
}
function Mt(i, t) {
  const e = G(2 ** t);
  return Re(rp(i.divide(e)), G(2));
}
function cm(i, t) {
  return ot(Mt(i, t), G(0.5));
}
function cr(i, t) {
  return Mt(i, t + Po.length);
}
function dp(i, t) {
  return Mt(i, t);
}
function fp(i) {
  const t = Mt(i.z, 7), e = G(1).subtract(t), s = i.xyz.subtract(Zu(0, 0, G(128)));
  return e.multiply(i).add(t.multiply(s));
}
function mp(i) {
  const t = ju(0.99609375, 0.0038909912109375, 1519918441772461e-20, 59371814131736755e-24);
  return Sn(i, t);
}
function um(i) {
  return ke(ke(ke(i.x, i.y), i.z), i.w);
}
let It = class extends lt {
  getVisualVariableData(t) {
    if (!this._vvData) {
      const e = this.getAttributeDataCoords(t);
      this._vvData = Et(this.visualVariableData, e).setDebugName("storage2");
    }
    return this._vvData;
  }
  getAttributeDataCoords(t) {
    if (!this._uv) {
      const e = fp(t), s = this.size, r = xe(e.x), n = xe(e.y).multiply(xe(256)), o = xe(e.z).multiply(xe(256)).multiply(xe(256)), a = G(r.add(n).add(o)), h = Re(a, s), l = a.subtract(h).divide(s);
      this._uv = new E(h, l).add(0.5).divide(s);
    }
    return this._uv;
  }
  getFilterData(t) {
    const e = this.getAttributeDataCoords(t);
    return Et(this.filterFlags, e).setDebugName("storage0");
  }
  getAnimationData(t) {
    const e = this.getAttributeDataCoords(t);
    return Et(this.animation, e).setDebugName("storage1");
  }
  getVVData(t) {
    return this.getVisualVariableData(t);
  }
  getDataDrivenData0(t) {
    const e = this.getAttributeDataCoords(t);
    return Et(this.dataDriven0, e).setDebugName("storage30");
  }
  getDataDrivenData1(t) {
    const e = this.getAttributeDataCoords(t);
    return Et(this.dataDriven1, e).setDebugName("storage31");
  }
  getDataDrivenData2(t) {
    const e = this.getAttributeDataCoords(t);
    return Et(this.dataDriven2, e).setDebugName("storage32");
  }
  getGPGPUData(t) {
    const e = this.getAttributeDataCoords(t);
    return Et(this.gpgpu, e).setDebugName("storage4");
  }
  getFilterFlags(t) {
    return le("webgl-ignores-sampler-precision") ? ip(this.getFilterData(t).x.multiply(G(255))) : this.getFilterData(t).x.multiply(G(255));
  }
  getAnimationValue(t) {
    return this.getAnimationData(t).x;
  }
  getSizeValue(t) {
    return this.getVisualVariableData(t).x;
  }
  getColorValue(t) {
    return this.getVisualVariableData(t).y;
  }
  getOpacityValue(t) {
    return this.getVisualVariableData(t).z;
  }
  getRotationValue(t) {
    return this.getVisualVariableData(t).w;
  }
};
x([C(Lt)], It.prototype, "filterFlags", void 0), x([C(Lt)], It.prototype, "animation", void 0), x([C(Lt)], It.prototype, "gpgpu", void 0), x([C(Lt)], It.prototype, "visualVariableData", void 0), x([C(Lt)], It.prototype, "dataDriven0", void 0), x([C(Lt)], It.prototype, "dataDriven1", void 0), x([C(Lt)], It.prototype, "dataDriven2", void 0), x([C(b)], It.prototype, "size", void 0);
let Xr = class extends lt {
};
x([C(b)], Xr.prototype, "activeReasons", void 0), x([C(b)], Xr.prototype, "highlightAll", void 0);
let xs = class extends lt {
};
x([C(E)], xs.prototype, "position", void 0), x([C(b)], xs.prototype, "distance", void 0), x([C(b)], xs.prototype, "smallSymbolDistance", void 0), x([C(b)], xs.prototype, "smallSymbolSizeThreshold", void 0);
let tt = class extends lt {
};
x([C(et)], tt.prototype, "displayViewScreenMat3", void 0), x([C(et)], tt.prototype, "displayViewMat3", void 0), x([C(et)], tt.prototype, "displayMat3", void 0), x([C(et)], tt.prototype, "viewMat3", void 0), x([C(et)], tt.prototype, "tileMat3", void 0), x([C(b)], tt.prototype, "displayZoomFactor", void 0), x([C(b)], tt.prototype, "requiredZoomFactor", void 0), x([C(E)], tt.prototype, "tileOffset", void 0), x([C(b)], tt.prototype, "currentScale", void 0), x([C(b)], tt.prototype, "currentZoom", void 0), x([C(b)], tt.prototype, "metersPerSRUnit", void 0), x([C(b)], tt.prototype, "rotation", void 0), x([C(b)], tt.prototype, "pixelRatio", void 0);
let ce = class extends Ur {
};
x([L(0, U)], ce.prototype, "id", void 0), x([L(1, b)], ce.prototype, "bitset", void 0), x([L(2, E)], ce.prototype, "pos", void 0);
let Ot = class extends lp {
};
x([L(14, E)], Ot.prototype, "nextPos1", void 0), x([L(15, E)], Ot.prototype, "nextPos2", void 0);
let Zi = class extends Ps {
}, At = class extends cp {
  clip(t, e) {
    let s = new b(0);
    const r = this.storage.getFilterFlags(t);
    if (s = s.add(G(2).multiply(G(1).subtract(cr(r, 0)))), this.inside ? s = s.add(G(2).multiply(G(1).subtract(cr(r, 1)))) : this.outside ? s = s.add(G(2).multiply(cr(r, 1))) : this.highlight && (s = s.add(G(2).multiply(G(1).subtract(this._checkHighlight(r))))), e != null) {
      const n = new b(1).subtract(Xt(e.x, this.view.currentZoom)), o = Xt(e.y, this.view.currentZoom);
      s = s.add(new b(2).multiply(n.add(o)));
    }
    return s;
  }
  getFragmentOutput(t, e, s = new b(1 / 255)) {
    const r = new qa();
    return r.glFragColor = this._maybeWriteHittest(e) ?? this._maybeHighlight(t, s) ?? t, r;
  }
  _maybeHighlight(t, e) {
    return this.highlight ? new O(t.rgb, Xt(e, t.a)) : null;
  }
  _checkHighlight(t) {
    let e = this._checkHighlightBit(t, 0);
    for (let s = 1; s < Po.length; s++) e = e.add(this._checkHighlightBit(t, s));
    return Xt(new b(0.1), e.add(this.highlight.highlightAll));
  }
  _checkHighlightBit(t, e) {
    return dp(t, e).multiply(Mt(this.highlight.activeReasons, e));
  }
  maybeRunHittest(t, e, s) {
    if (this.hittestRequest == null) return null;
    const r = this.hittest(t, e, s);
    let n = X(ot(r, this.hittestRequest.distance), new b(2), new b(0));
    const o = this.storage.getAttributeDataCoords(t.id), a = pp(o);
    n = n.add(this.clip(t.id, t.zoomRange));
    const h = new O(new b(1 / 255), 0, 0, 0);
    return { glPointSize: new b(1), glPosition: new O(a, n, 1), color: h };
  }
  _maybeWriteHittest(t) {
    return this.hittestRequest != null ? t.color : null;
  }
};
x([oo], At.prototype, "inside", void 0), x([oo], At.prototype, "outside", void 0), x([J(Xr)], At.prototype, "highlight", void 0), x([C(It)], At.prototype, "storage", void 0), x([C(tt)], At.prototype, "view", void 0), x([J(xs)], At.prototype, "hittestRequest", void 0);
function _p(i, t) {
  return Sn(i, np(t));
}
function ws(i, t, e) {
  const s = e.subtract(t), r = _p(i.subtract(t), s), n = wn(r.divide(Ua(s)), new b(0), new b(1));
  return Ya(i, t.add(n.multiply(e.subtract(t))));
}
function gp(i) {
  const t = sp(i);
  return Xt(t.x.add(t.y).add(t.z), new b(1.05));
}
function yp(i, t, e, s) {
  const r = new et(e.x.multiply(s.y).subtract(s.x.multiply(e.y)), s.x.multiply(t.y).subtract(t.x.multiply(s.y)), t.x.multiply(e.y).subtract(e.x.multiply(t.y)), e.y.subtract(s.y), s.y.subtract(t.y), t.y.subtract(e.y), s.x.subtract(e.x), t.x.subtract(s.x), e.x.subtract(t.x)), n = t.x.multiply(e.y.subtract(s.y)), o = e.x.multiply(s.y.subtract(t.y)), a = s.x.multiply(t.y.subtract(e.y)), h = n.add(o).add(a);
  return new b(1).divide(h).multiply(r.multiply(new U(1, i)));
}
function xp(i, t, e, s) {
  return xn(gp(yp(i, t, e, s)), new b(1));
}
function bp(i, t, e, s) {
  const r = e.subtract(t), n = s.subtract(t), o = up(r, n), a = Vr(Qu(o, new b(Qn)), ot(o, new b(-Qn)));
  return Ns([Vr(op(a), xp(i.xy, t, e, s)), new b(-1)], [!0, () => {
    const h = ws(i, t, e), l = ws(i, e, s), c = ws(i, s, t);
    return Yr(Yr(h, l), c);
  }]);
}
function Za(i) {
  return i.distance.add(1);
}
function Mn(i, t, e) {
  const { viewMat3: s, tileMat3: r } = i.view, n = s.multiply(r), o = n.multiply(new U(t.pos, 1)), a = n.multiply(new U(e.nextPos1, 1)), h = n.multiply(new U(e.nextPos2, 1));
  return bp(i.hittestRequest.position, o.xy, a.xy, h.xy);
}
function bm(i, t, e) {
  return Ya(i, e).subtract(t);
}
let ks = class extends lt {
  getColor(t, e, s) {
    return Ns([Ba(pe(t), s), e], [Wi(t, this.values.first()), this.colors.first()], [qi(t, this.values.last()), this.colors.last()], [!0, () => {
      const r = this.values.findIndex((l) => ot(l, t)), n = this.values.get(r), o = r.subtract(1), a = this.values.get(o), h = t.subtract(a).divide(n.subtract(a));
      return _e(this.colors.get(o), this.colors.get(r), h);
    }]);
  }
};
x([C(gt.ofType(O, 8))], ks.prototype, "colors", void 0), x([C(gt.ofType(b, 8))], ks.prototype, "values", void 0);
let Is = class extends lt {
  getOpacity(t) {
    return Ns([pe(t), new b(1)], [Wi(t, this.opacityValues.first()), this.opacities.first()], [qi(t, this.opacityValues.last()), this.opacities.last()], [!0, () => {
      const e = this.opacityValues.findIndex((a) => ot(a, t)), s = this.opacityValues.get(e), r = e.subtract(1), n = this.opacityValues.get(r), o = t.subtract(n).divide(s.subtract(n));
      return _e(this.opacities.get(r), this.opacities.get(e), o);
    }]);
  }
};
x([C(gt.ofType(b, 8))], Is.prototype, "opacities", void 0), x([C(gt.ofType(b, 8))], Is.prototype, "opacityValues", void 0);
function ja(i) {
  return i.visualVariableSizeMinMaxValue != null || i.visualVariableSizeScaleStops != null || i.visualVariableSizeStops != null || i.visualVariableSizeUnitValue != null;
}
function Pp(i, t, e) {
  if (ja(i)) {
    const s = i.storage.getSizeValue(t);
    return i.visualVariableSizeMinMaxValue?.getSize(s, e) ?? i.visualVariableSizeScaleStops?.getSizeForViewScale(i.view.currentScale) ?? i.visualVariableSizeStops?.getSize(s, e) ?? i.visualVariableSizeUnitValue?.getSize(s, e);
  }
  return e;
}
function Cn(i, t, e, s = new it(!1)) {
  if (i.visualVariableColor == null) return e;
  const r = i.storage.getColorValue(t);
  return i.visualVariableColor.getColor(r, e, s);
}
function $n(i, t) {
  if (i.visualVariableOpacity == null) return new b(1);
  const e = i.storage.getOpacityValue(t);
  return i.visualVariableOpacity.getOpacity(e);
}
function Sm(i, t) {
  if (i.visualVariableRotation == null) return et.identity();
  const e = i.storage.getRotationValue(t);
  return i.visualVariableRotation.getVVRotationMat3(e);
}
let Ts = class extends ce {
};
x([L(3, O)], Ts.prototype, "color", void 0), x([L(4, E)], Ts.prototype, "zoomRange", void 0);
let Ce = class extends At {
  constructor() {
    super(...arguments), this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
  vertex(t, e) {
    const s = $n(this, t.id), r = Cn(this, t.id, t.color).multiply(s), n = this.view.displayViewScreenMat3.multiply(new U(t.pos.xy, 1)), o = this.clip(t.id, t.zoomRange);
    return { glPosition: new O(n.xy, o, 1), color: r, ...this.maybeRunHittest(t, e, null) };
  }
  fragment(t) {
    return this.getFragmentOutput(t.color, t, new b(0));
  }
  hittest(t, e) {
    return Mn(this, t, e);
  }
};
x([J(ks)], Ce.prototype, "visualVariableColor", void 0), x([J(Is)], Ce.prototype, "visualVariableOpacity", void 0), x([B(0, V(Ts)), B(1, V(Ot))], Ce.prototype, "vertex", null), x([B(0, V(Zi))], Ce.prototype, "fragment", null);
let ze = class extends lt {
  getPatternOffsetAtTileOrigin(t, e = new b(0), s = new b(1)) {
    const r = new E($u).divide(t);
    let n = t.multiply(Ha(this.maxIntsToLocalOrigin.multiply(r))).add(this.tileOffsetFromLocalOrigin).subtract(new b(0.5).multiply(t));
    return n = new E(n.x.multiply(s).subtract(n.y.multiply(e)), n.x.multiply(e).add(n.y.multiply(s))), Re(n, t);
  }
};
x([C(E)], ze.prototype, "tileOffsetFromLocalOrigin", void 0), x([C(E)], ze.prototype, "maxIntsToLocalOrigin", void 0);
let Le = class extends lt {
};
x([C(E)], Le.prototype, "size", void 0), x([C(Lt)], Le.prototype, "texture", void 0);
let ee = class extends Ts {
};
x([L(5, O)], ee.prototype, "tlbr", void 0), x([L(6, b)], ee.prototype, "width", void 0), x([L(7, b)], ee.prototype, "height", void 0), x([L(8, E)], ee.prototype, "offset", void 0), x([L(9, E)], ee.prototype, "scale", void 0), x([L(10, b)], ee.prototype, "angle", void 0);
class wp extends Zi {
}
function Sp(i, t, e, s, r) {
  const n = xn(Mt(r, Pa), G(1)), o = mp(new O(i, 0));
  return X(n, so(s.divide(t.x), e.divide(t.y), 0, Ei(e.divide(t.x)), s.divide(t.y), 0, ao(Br(o, 0)), ao(Br(0, o)), 1), so(s.divide(t.x), e.divide(t.y), 0, Ei(e.divide(t.x)), s.divide(t.y), 0, 0, 0, 1));
}
function Ka(i, t) {
  const e = _e(new E(1), new E(1 / rn), new E(Mt(t.bitset, Sa), Mt(t.bitset, wa))), s = i.view.requiredZoomFactor, r = new E(t.width, t.height).multiply(e), n = r.multiply(t.scale).multiply(s), o = t.angle.multiply(yu), a = vn(o), h = Va(o), l = Sp(t.id, n, a, h, t.bitset), c = i.localTileOffset.getPatternOffsetAtTileOrigin(r, a, h), u = s.multiply(t.scale).multiply(t.offset.subtract(c)).divide(n), d = new U(t.pos, 1), p = l.multiply(d).xy.subtract(u), m = t.tlbr.divide(i.mosaicInfo.size.xyxy);
  let f = Mt(t.bitset, un);
  return i.visualVariableColor != null && (f = X(pe(i.storage.getColorValue(t.id)), new b(0), f)), { tileTextureCoord: p, tlbr: m, sampleAlphaOnly: f };
}
function Ja(i, t) {
  const e = Re(t.tileTextureCoord, new b(1)), s = _e(t.tlbr.xy, t.tlbr.zw, e);
  let r = Et(i.mosaicInfo.texture, s);
  return r = X(ot(t.sampleAlphaOnly, new b(0.5)), r.aaaa, r), t.color.multiply(r);
}
let Qs = class extends Ce {
  vertex(t, e) {
    return { ...super.vertex(t, e), ...Ka(this, t) };
  }
  fragment(t) {
    const e = Ja(this, t);
    return this.getFragmentOutput(e, t, new b(0));
  }
};
x([C(Le)], Qs.prototype, "mosaicInfo", void 0), x([C(ze)], Qs.prototype, "localTileOffset", void 0), x([B(0, V(ee)), B(1, V(Ot))], Qs.prototype, "vertex", null), x([B(0, V(wp))], Qs.prototype, "fragment", null);
let kn = class extends lt {
  getSize(t, e) {
    const s = this.minMaxValueAndSize.xy, r = this.minMaxValueAndSize.zw;
    return X(pe(t), e, () => {
      const n = t.subtract(s.x).divide(s.y.subtract(s.x)), o = wn(n, new b(0), new b(1));
      return r.x.add(o.multiply(r.y.subtract(r.x)));
    });
  }
};
x([C(O)], kn.prototype, "minMaxValueAndSize", void 0);
let Ni = class extends lt {
  getSizeForViewScale(t) {
    return Ns([Wi(t, this.values.first()), this.sizes.first()], [qi(t, this.values.last()), this.sizes.last()], [!0, () => {
      const e = this.values.findIndex((a) => ot(a, t)), s = this.values.get(e), r = e.subtract(1), n = this.values.get(r), o = t.subtract(n).divide(s.subtract(n));
      return _e(this.sizes.get(r), this.sizes.get(e), o);
    }]);
  }
};
x([C(gt.ofType(b, 8))], Ni.prototype, "sizes", void 0), x([C(gt.ofType(b, 8))], Ni.prototype, "values", void 0);
let Ai = class extends lt {
  getSize(t, e) {
    const s = Ns([pe(t), e], [Wi(t, this.values.first()), this.sizes.first()], [qi(t, this.values.last()), this.sizes.last()], [!0, () => {
      const r = this.values.findIndex((l) => ot(l, t)), n = this.values.get(r), o = r.subtract(1), a = this.values.get(o), h = t.subtract(a).divide(n.subtract(a));
      return _e(this.sizes.get(o), this.sizes.get(r), h);
    }]);
    return X(pe(s), e, s);
  }
};
x([C(gt.ofType(b, 8))], Ai.prototype, "sizes", void 0), x([C(gt.ofType(b, 8))], Ai.prototype, "values", void 0);
let In = class extends lt {
  getSize(t, e) {
    return X(pe(t), e, t.multiply(this.unitValueToPixelsRatio));
  }
};
x([C(b)], In.prototype, "unitValueToPixelsRatio", void 0);
class se extends ce {
}
x([L(3, O)], se.prototype, "color", void 0), x([L(4, E)], se.prototype, "offset", void 0), x([L(5, E)], se.prototype, "normal", void 0), x([L(6, b)], se.prototype, "halfWidth", void 0), x([L(7, b)], se.prototype, "referenceHalfWidth", void 0), x([L(8, E)], se.prototype, "zoomRange", void 0);
let Qa = class extends Zi {
}, Fi = class extends lt {
};
function th(i) {
  return ke(new b(xu).multiply(Xt(i, new b(bu))), new b(1));
}
function vp(i, t) {
  const { halfWidth: e, normal: s } = i, r = th(e), n = Ua(s).multiply(e);
  return wn(r.multiply(e.subtract(n)).divide(t.add(r).subtract(new b(1))), new b(0), new b(1));
}
function Mp(i, t) {
  const { id: e, halfWidth: s, referenceHalfWidth: r } = t;
  if (ja(i)) {
    const n = new b(2).multiply(r), o = Pp(i, e, n);
    return new b(0.5).multiply(s.divide(ke(r, new b(Pu)))).multiply(o);
  }
  return s;
}
function eh(i, t) {
  const { id: e, offset: s, pos: r, normal: n, zoomRange: o } = t, { displayViewScreenMat3: a, displayViewMat3: h } = i.view, l = Cn(i, e, t.color), c = $n(i, e), u = Mp(i, t), d = new b(0.5).multiply(i.antialiasingControls.antialiasing), p = ke(u.add(d), new b(0.45)).add(new b(0.1).multiply(d)), m = th(p).multiply(p).multiply(s), f = h.multiply(new U(m, new b(0))), _ = a.multiply(new U(r, new b(1))).add(f), y = new b(2).multiply(Xt(u, new b(0))).add(i.clip(e, o)), g = new O(_.xy, y, 1);
  return { color: l, opacity: c, halfWidth: p, normal: n, scaledOffset: m, scaledHalfWidth: u, glPosition: new O(g.xy, y, 1) };
}
function ji(i, t) {
  const { opacity: e, color: s } = i, r = vp(i, t);
  return e.multiply(s).multiply(r);
}
x([C(b)], Fi.prototype, "antialiasing", void 0), x([C(b)], Fi.prototype, "blur", void 0);
let kt = class extends At {
  constructor() {
    super(...arguments), this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
  vertex(t, e) {
    const s = eh(this, t);
    return { ...s, ...this.maybeRunHittest(t, e, s.halfWidth) };
  }
  fragment(t) {
    const e = ji(t, this.antialiasingControls.blur);
    return this.getFragmentOutput(e, t);
  }
  hittest(t, e, s) {
    const { viewMat3: r, tileMat3: n } = this.view, o = r.multiply(n), a = o.multiply(new U(t.pos, 1)), h = o.multiply(new U(e.nextPos1, 1)), l = o.multiply(new U(e.nextPos2, 1)), { distance: c, smallSymbolDistance: u, smallSymbolSizeThreshold: d } = this.hittestRequest, p = Xt(s, d.multiply(0.5)).multiply(c.subtract(u)), m = this.hittestRequest.position;
    return Yr(ws(m, a.xy, h.xy), ws(m, a.xy, l.xy)).subtract(s).add(p);
  }
};
x([C(Fi)], kt.prototype, "antialiasingControls", void 0), x([J(ks)], kt.prototype, "visualVariableColor", void 0), x([J(Is)], kt.prototype, "visualVariableOpacity", void 0), x([J(kn)], kt.prototype, "visualVariableSizeMinMaxValue", void 0), x([J(Ni)], kt.prototype, "visualVariableSizeScaleStops", void 0), x([J(Ai)], kt.prototype, "visualVariableSizeStops", void 0), x([J(In)], kt.prototype, "visualVariableSizeUnitValue", void 0), x([B(0, V(se)), B(1, V(Ot))], kt.prototype, "vertex", null), x([B(0, V(Qa))], kt.prototype, "fragment", null);
class Vt extends ce {
}
x([L(3, E)], Vt.prototype, "offset", void 0), x([L(4, O)], Vt.prototype, "color", void 0), x([L(5, E)], Vt.prototype, "normal", void 0), x([L(6, b)], Vt.prototype, "halfWidth", void 0), x([L(7, b)], Vt.prototype, "referenceHalfWidth", void 0), x([L(8, E)], Vt.prototype, "zoomRange", void 0);
let sh = class extends Qa {
};
function Tn(i, t, e) {
  const { id: s, bitset: r } = t, n = Mt(r, pn), o = ot(n, new b(0.5)), a = eh(i, t), h = X(o, a.halfWidth, new b(0)), l = $n(i, s), c = Cn(i, s, t.color), u = X(o, t.color, c.multiply(l)), d = i.view.displayViewScreenMat3.multiply(new U(t.pos.xy, 1)), p = i.clip(t.id), m = new O(d.xy, p, 1), f = X(o, a.glPosition, m), _ = e && i.maybeRunHittest(t, e, o);
  return { isOutline: n, color: u, opacity: new b(1), halfWidth: h, normal: a.normal, glPosition: f, ..._ };
}
let Nt = class extends At {
  constructor() {
    super(...arguments), this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
};
x([C(Fi)], Nt.prototype, "antialiasingControls", void 0), x([J(ks)], Nt.prototype, "visualVariableColor", void 0), x([J(Is)], Nt.prototype, "visualVariableOpacity", void 0), x([J(kn)], Nt.prototype, "visualVariableSizeMinMaxValue", void 0), x([J(Ni)], Nt.prototype, "visualVariableSizeScaleStops", void 0), x([J(Ai)], Nt.prototype, "visualVariableSizeStops", void 0), x([J(In)], Nt.prototype, "visualVariableSizeUnitValue", void 0);
class Wr extends Nt {
  vertex(t, e) {
    return Tn(this, t, e);
  }
  fragment(t) {
    const { color: e, isOutline: s } = t, r = ot(s, new b(0.5)), n = ji(t, this.antialiasingControls.blur), o = X(r, n, e), a = X(r, new b(1 / 255), new b(0));
    return this.getFragmentOutput(o, t, a);
  }
  hittest(t, e, s) {
    return X(s, Za(this.hittestRequest), Mn(this, t, e));
  }
}
x([B(0, V(Vt)), B(1, V(Ot))], Wr.prototype, "vertex", null), x([B(0, V(sh))], Wr.prototype, "fragment", null);
let qr = class extends Ts {
};
x([L(5, O)], qr.prototype, "tlbr", void 0), x([L(6, b)], qr.prototype, "inverseRasterizationScale", void 0);
let Cp = class extends Zi {
};
function $p(i) {
  const t = new b(1), e = new b(0);
  return new et(t.divide(i.x), e.divide(i.y), 0, Ei(e.divide(i.x)), t.divide(i.y), 0, 0, 0, 1);
}
function ih(i, t) {
  const e = t.tlbr.xy, s = t.tlbr.zw, r = s.x.subtract(e.x), n = e.y.subtract(s.y), o = new E(r, n).multiply(t.inverseRasterizationScale), a = o.multiply(i.view.requiredZoomFactor), h = $p(a), l = i.localTileOffset.getPatternOffsetAtTileOrigin(o).divide(a), c = new U(t.pos, 1);
  return { tileTextureCoord: h.multiply(c).xy.subtract(l), tlbr: t.tlbr.divide(i.mosaicInfo.size.xyxy) };
}
function rh(i, t) {
  const e = Re(i.tileTextureCoord, new b(1)), s = _e(i.tlbr.xy, i.tlbr.zw, e), r = Et(t.texture, s);
  return i.color.multiply(r);
}
let ti = class extends Ce {
  vertex(t, e) {
    return { ...super.vertex(t, e), ...ih(this, t) };
  }
  fragment(t) {
    const e = rh(t, this.mosaicInfo);
    return this.getFragmentOutput(e, t, new b(0));
  }
};
x([C(Le)], ti.prototype, "mosaicInfo", void 0), x([C(ze)], ti.prototype, "localTileOffset", void 0), x([B(0, V(qr)), B(1, V(Ot))], ti.prototype, "vertex", null), x([B(0, V(Cp))], ti.prototype, "fragment", null);
let Zr = class extends Vt {
};
x([L(9, O)], Zr.prototype, "tlbr", void 0), x([L(10, b)], Zr.prototype, "inverseRasterizationScale", void 0);
let nh = class extends sh {
}, ei = class extends Wr {
  vertex(t, e) {
    return { ...Tn(this, t, e), ...ih(this, t) };
  }
  fragment(t) {
    const { isOutline: e } = t, s = ot(e, new b(0.5)), r = ji(t, this.antialiasingControls.blur), n = rh(t, this.mosaicInfo), o = X(s, r, n), a = X(s, new b(1 / 255), new b(0));
    return this.getFragmentOutput(o, t, a);
  }
};
x([C(Le)], ei.prototype, "mosaicInfo", void 0), x([C(ze)], ei.prototype, "localTileOffset", void 0), x([B(0, V(Zr)), B(1, V(Ot))], ei.prototype, "vertex", null), x([B(0, V(nh))], ei.prototype, "fragment", null);
const Ft = 16, Ze = 1 / Ft, jr = 128;
class Tt extends ce {
}
x([L(3, O)], Tt.prototype, "color", void 0), x([L(4, O)], Tt.prototype, "tlbr", void 0), x([L(5, b)], Tt.prototype, "angle", void 0), x([L(6, b)], Tt.prototype, "aux1", void 0), x([L(7, b)], Tt.prototype, "aux2", void 0), x([L(8, E)], Tt.prototype, "aux3", void 0), x([L(9, E)], Tt.prototype, "aux4", void 0), x([L(10, E)], Tt.prototype, "zoomRange", void 0);
let kp = class extends nh {
};
class si extends Nt {
  vertex(t, e) {
    const { aux1: s, aux2: r, aux3: n, aux4: o } = t, a = { ...t, width: s, height: r, offset: n, scale: o.multiply(Ze) }, h = { ...t, halfWidth: s.multiply(Ze), referenceHalfWidth: r.multiply(Ze), offset: n.multiply(Ze), normal: o.subtract(jr).multiply(Ze) }, l = Tn(this, h), c = Ka(this, a), u = ot(l.isOutline, new b(0.5));
    return { ...l, ...c, ...this.maybeRunHittest(t, e, u) };
  }
  fragment(t) {
    const { isOutline: e } = t, s = ot(e, new b(0.5)), r = ji(t, this.antialiasingControls.blur), n = Ja(this, t), o = X(s, r, n), a = X(s, new b(1 / 255), new b(0));
    return this.getFragmentOutput(o, t, a);
  }
  hittest(t, e, s) {
    return X(s, Za(this.hittestRequest), Mn(this, t, e));
  }
}
x([C(Le)], si.prototype, "mosaicInfo", void 0), x([C(ze)], si.prototype, "localTileOffset", void 0), x([B(0, V(Tt)), B(1, V(Ot))], si.prototype, "vertex", null), x([B(0, V(kp))], si.prototype, "fragment", null);
const mt = $a.attributes, Ip = mn.attributes, Tp = { createComputedParams: (i) => i, attributes: { id: mt.id, pos: mt.pos, zoomRange: mt.zoomRange, tlbr: mt.tlbr, angle: mt.angle, color: mt.color, bitset: { type: S.UNSIGNED_BYTE, count: 1, pack: (i) => va(i) }, aux1: { count: 1, type: S.UNSIGNED_SHORT, pack: (i) => Ma(i) }, aux2: { count: 1, type: S.UNSIGNED_SHORT, pack: (i) => Ca(i) }, aux3: { count: 2, type: S.SHORT, pack: ({ offsetX: i, offsetY: t }) => [I(i), I(t)] }, aux4: { count: 2, type: S.UNSIGNED_BYTE, pack: ({ scaleX: i, scaleY: t }) => [i * Ft, t * Ft] } } }, zp = { createComputedParams: (i) => i, attributes: { id: mt.id, pos: mt.pos, zoomRange: mt.zoomRange, tlbr: mt.tlbr, angle: mt.angle, color: Ip.color, bitset: { type: S.UNSIGNED_BYTE, count: 1, pack: (i) => Es([[pn, !0]]) }, aux1: { count: 1, type: S.UNSIGNED_SHORT, pack: (i) => I(0.5 * i.width) * Ft }, aux2: { count: 1, type: S.UNSIGNED_SHORT, pack: (i) => I(0.5 * i.referenceWidth) * Ft }, aux3: { count: 2, type: S.SHORT, packTessellation: ({ extrusionOffsetX: i, extrusionOffsetY: t }) => [i * Ft, t * Ft] }, aux4: { count: 2, type: S.UNSIGNED_BYTE, packTessellation: ({ normalX: i, normalY: t }) => [i * Ft + jr, t * Ft + jr] } } };
let Lp = class extends _n {
  constructor() {
    super(...arguments), this.vertexSpec = zp;
  }
};
class Ep extends gn {
  constructor() {
    super(...arguments), this.vertexSpec = Tp;
  }
  _createOutlineWriter(t, e, s, r) {
    return new Lp(t, e, s, r);
  }
  _write(t, e, s) {
    const r = s?.asOptimized() ?? e.readGeometryForDisplay(), n = this._clip(r);
    if (!n) return;
    const o = this.evaluatedMeshParams.sprite?.textureBinding;
    t.recordStart(this.instanceId, this.attributeLayout, o), this._writeGeometry(t, e, n), this._lineMeshWriter.writeLineVertices(t, N.fromOptimizedCIM(n, "esriGeometryPolyline"), e), t.recordEnd();
  }
  ensurePacked(t, e, s) {
    super.ensurePacked(t, e, s), this._lineMeshWriter.ensurePacked(t, e, s);
  }
  enqueueRequest(t, e, s) {
    super.enqueueRequest(t, e, s), this._lineMeshWriter.enqueueRequest(t, e, s);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
}
const Np = { createComputedParams: (i) => i, attributes: { ...Ui.attributes, ...ka.attributes } }, Ap = { createComputedParams: (i) => i, attributes: { ...Ui.attributes, ...mn.attributes } };
let Fp = class extends _n {
  constructor() {
    super(...arguments), this.vertexSpec = Ap;
  }
}, Rp = class extends gn {
  constructor() {
    super(...arguments), this.vertexSpec = Np;
  }
  _createOutlineWriter(t, e, s, r) {
    return new Fp(t, e, s, r);
  }
  _write(t, e, s) {
    const r = s?.asOptimized() ?? e.readGeometryForDisplay(), n = this._clip(r);
    if (!n) return;
    const o = this.evaluatedMeshParams.sprite?.textureBinding;
    t.recordStart(this.instanceId, this.attributeLayout, o), this._writeGeometry(t, e, n), this._lineMeshWriter.writeLineVertices(t, N.fromOptimizedCIM(n, "esriGeometryPolyline"), e), t.recordEnd();
  }
  ensurePacked(t, e, s) {
    super.ensurePacked(t, e, s), this._lineMeshWriter.ensurePacked(t, e, s);
  }
  enqueueRequest(t, e, s) {
    super.enqueueRequest(t, e, s), this._lineMeshWriter.enqueueRequest(t, e, s);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
};
const Op = { createComputedParams: (i) => i, attributes: { pos: { type: S.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: S.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: S.UNSIGNED_BYTE, count: 1 }, offset: { type: S.BYTE, count: 2, packAlternating: { count: 4, pack: () => [[-1, -1], [1, -1], [-1, 1], [1, 1]] } } } };
let Dp = class extends Ne {
  constructor() {
    super(...arguments), this.vertexSpec = Op;
  }
  _write(t, e) {
    t.recordStart(this.instanceId, this.attributeLayout);
    const s = e.getDisplayId();
    if (e.geometryType === "esriGeometryPoint") {
      const r = e.readXForDisplay(), n = e.readYForDisplay();
      this._writeQuad(t, s, r, n);
    } else e.geometryType === "esriGeometryMultipoint" && e.readGeometryForDisplay()?.forEachVertex((n, o) => {
      n >= 0 && n <= 512 && o >= 0 && o <= 512 && this._writeQuad(t, s, n, o);
    });
    t.recordEnd();
  }
  _writeQuad(t, e, s, r) {
    const n = t.vertexCount();
    this._writeVertex(t, e, s, r), t.indexWrite(n + 0), t.indexWrite(n + 1), t.indexWrite(n + 2), t.indexWrite(n + 1), t.indexWrite(n + 3), t.indexWrite(n + 2);
  }
};
const Gp = 8388607, Bp = 8388608, ii = (i) => i & Gp;
function jm(i, t) {
  return ((t ? Bp : 0) | i) >>> 0;
}
function ho(i, t, e) {
  return i[0] = t[0] - e[0], i[1] = t[1] - e[1], i;
}
function oh(i, t) {
  return Math.sqrt(i * i + t * t);
}
function lo(i) {
  const t = oh(i[0], i[1]);
  i[0] /= t, i[1] /= t;
}
function Vp(i, t) {
  return oh(i[0] - t[0], i[1] - t[1]);
}
function Yp(i, t) {
  return i[t + 1];
}
function ah(i) {
  return i.length - 1;
}
function Hp(i) {
  let t = 0;
  for (let e = 0; e < ah(i); e++) t += Up(i, e);
  return t;
}
function Up(i, t, e = 1) {
  let [s, r] = Yp(i, t);
  return [s, r] = [Math.round(s), Math.round(r)], Math.sqrt(s * s + r * r) * e;
}
class Ri {
  constructor(t, e, s, r, n) {
    this._segments = t, this._index = e, this._distance = s, this._xStart = r, this._yStart = n, this._done = !1;
  }
  static create(t) {
    return new Ri(t, 0, 0, t[0][0], t[0][1]);
  }
  clone() {
    return new Ri(this._segments, this._index, this._distance, this.xStart, this.yStart);
  }
  equals(t) {
    return this._index === t._index || t._index === this._index - 1 && (this._distance === 0 || t._distance === 1) || t._index === this._index + 1 && (this._distance === 1 || t._distance === 0);
  }
  leq(t) {
    return this._index < t._index || this._index === t._index && this._distance <= t._distance;
  }
  geq(t) {
    return this._index > t._index || this._index === t._index && this._distance >= t._distance;
  }
  get _segment() {
    return this._segments[this._index + 1];
  }
  get angle() {
    const t = this.dy, e = (0 * t + -1 * -this.dx) / (1 * this.length);
    let s = Math.acos(e);
    return t > 0 && (s = 2 * Math.PI - s), s;
  }
  get xStart() {
    return this._xStart;
  }
  get yStart() {
    return this._yStart;
  }
  get x() {
    return this.xStart + this.distance * this.dx;
  }
  get y() {
    return this.yStart + this.distance * this.dy;
  }
  get dx() {
    return this._segment[0];
  }
  get dy() {
    return this._segment[1];
  }
  get xMidpoint() {
    return this.xStart + 0.5 * this.dx;
  }
  get yMidpoint() {
    return this.yStart + 0.5 * this.dy;
  }
  get xEnd() {
    return this.xStart + this.dx;
  }
  get yEnd() {
    return this.yStart + this.dy;
  }
  get length() {
    const { dx: t, dy: e } = this;
    return Math.sqrt(t * t + e * e);
  }
  get remainingLength() {
    return this.length * (1 - this._distance);
  }
  get backwardLength() {
    return this.length * this._distance;
  }
  get distance() {
    return this._distance;
  }
  get done() {
    return this._done;
  }
  hasPrev() {
    return this._index - 1 >= 0;
  }
  hasNext() {
    return this._index + 1 < ah(this._segments);
  }
  next() {
    return this.hasNext() ? (this._xStart += this.dx, this._yStart += this.dy, this._distance = 0, this._index += 1, this) : null;
  }
  prev() {
    return this.hasPrev() ? (this._index -= 1, this._xStart -= this.dx, this._yStart -= this.dy, this._distance = 1, this) : (this._done = !0, null);
  }
  _seekBackwards(t, e) {
    const s = this.backwardLength;
    if (t <= s) return this._distance = (s - t) / this.length, this;
    let r = this.backwardLength;
    for (; this.prev(); ) {
      if (r + this.length > t) return this._seekBackwards(t - r);
      r += this.length;
    }
    return this._distance = 0, e ? this : null;
  }
  seek(t, e = !1) {
    if (t < 0) return this._seekBackwards(Math.abs(t), e);
    if (t <= this.remainingLength) return this._distance = (this.backwardLength + t) / this.length, this;
    let s = this.remainingLength;
    for (; this.next(); ) {
      if (s + this.length > t) return this.seek(t - s, e);
      s += this.length;
    }
    return this._distance = 1, e ? this : null;
  }
}
function Xp(i, t, e, s = !0) {
  const r = Hp(i), n = Ri.create(i), o = r / 2;
  if (!s) return n.seek(o), void (Math.abs(n.x) < Ut && Math.abs(n.y) < Ut && e(n.clone(), 0, o + 0 * t, r));
  const a = Math.max((r - t) / 2, 0), h = Math.floor(a / t), l = o - h * t;
  n.seek(l);
  for (let c = -h; c <= h; c++) Math.abs(n.x) < Ut && Math.abs(n.y) < Ut && e(n.clone(), c, o + c * t, r), n.seek(t);
}
function Wp(i, t) {
  const e = t;
  for (let s = 0; s < i.length; s++) {
    let r = i[s];
    qp(r, e);
    const n = [];
    n.push(r[0]);
    for (let o = 1; o < r.length; o++) {
      const [a, h] = r[o - 1], [l, c] = r[o], u = l - a, d = c - h;
      n.push([u, d]);
    }
    i[s] = n, r = n;
  }
  return i;
}
function qp(i, t) {
  if (t <= 0) return;
  const s = i.length;
  if (s < 3) return;
  const r = [];
  let n = 0;
  r.push(0);
  for (let u = 1; u < s; u++) n += Vp(i[u], i[u - 1]), r.push(n);
  t = Math.min(t, 0.2 * n);
  const o = [];
  o.push(i[0][0]), o.push(i[0][1]);
  const a = i[s - 1][0], h = i[s - 1][1], l = ho([0, 0], i[0], i[1]);
  lo(l), i[0][0] += t * l[0], i[0][1] += t * l[1], ho(l, i[s - 1], i[s - 2]), lo(l), i[s - 1][0] += t * l[0], i[s - 1][1] += t * l[1];
  for (let u = 1; u < s; u++) r[u] += t;
  r[s - 1] += t;
  const c = 0.5 * t;
  for (let u = 1; u < s - 1; u++) {
    let d = 0, p = 0, m = 0;
    for (let f = u - 1; f >= 0 && !(r[f + 1] < r[u] - c); f--) {
      const _ = c + r[f + 1] - r[u], y = r[f + 1] - r[f], g = r[u] - r[f] < c ? 1 : _ / y;
      if (Math.abs(g) < 1e-6) break;
      const P = g * g, w = g * _ - 0.5 * P * y, M = g * y / t, k = i[f + 1], F = i[f][0] - k[0], z = i[f][1] - k[1];
      d += M / w * (k[0] * g * _ + 0.5 * P * (_ * F - y * k[0]) - P * g * y * F / 3), p += M / w * (k[1] * g * _ + 0.5 * P * (_ * z - y * k[1]) - P * g * y * z / 3), m += M;
    }
    for (let f = u + 1; f < s && !(r[f - 1] > r[u] + c); f++) {
      const _ = c - r[f - 1] + r[u], y = r[f] - r[f - 1], g = r[f] - r[u] < c ? 1 : _ / y;
      if (Math.abs(g) < 1e-6) break;
      const P = g * g, w = g * _ - 0.5 * P * y, M = g * y / t, k = i[f - 1], F = i[f][0] - k[0], z = i[f][1] - k[1];
      d += M / w * (k[0] * g * _ + 0.5 * P * (_ * F - y * k[0]) - P * g * y * F / 3), p += M / w * (k[1] * g * _ + 0.5 * P * (_ * z - y * k[1]) - P * g * y * z / 3), m += M;
    }
    o.push(d / m), o.push(p / m);
  }
  o.push(a), o.push(h);
  for (let u = 0, d = 0; u < s; u++) i[u][0] = o[d++], i[u][1] = o[d++];
}
class hh {
  static getPlacement(t, e, s, r, n, o) {
    const a = Qo(s);
    return a ? (e === -1 && t.invertY(), a.execute(t, s, r, n, o)) : null;
  }
}
const co = 96;
let Zp = class {
  constructor(t) {
    const { offsetX: e, offsetY: s, postAngle: r, fontSize: n, scaleFactor: o, transforms: a } = t;
    if (this.offsetX = e, this.offsetY = s, this.postAngle = r, this.fontSize = Math.min(n, co), this.transforms = a, a && a.infos.length > 1) {
      const h = yo(n, r, !1, e, s, a);
      this.fontSize = Math.min(h.size, co), this.postAngle = h.rotation, this.offsetX = h.offsetX, this.offsetY = h.offsetY;
    }
    o && (this.fontSize *= o, this.offsetX *= o, this.offsetY *= o);
  }
};
const vi = 28, qt = [4, 4], ri = [16, 4], jp = { topLeft: ri, topRight: ri, bottomLeft: ri, bottomRight: ri }, Oi = [4, 2], ft = [4, 6], uo = { topLeft: Oi, topRight: Oi, bottomLeft: ft, bottomRight: ft }, po = { topLeft: Oi, topRight: ft, bottomLeft: Oi, bottomRight: ft }, Kp = { topLeft: ft, topRight: ft, bottomLeft: qt, bottomRight: qt }, Jp = { topLeft: qt, topRight: qt, bottomLeft: ft, bottomRight: ft }, Qp = { topLeft: ft, topRight: qt, bottomLeft: ft, bottomRight: qt }, td = { topLeft: qt, topRight: ft, bottomLeft: qt, bottomRight: ft }, ed = { createComputedParams: (i) => i, attributes: { pos: { type: S.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: S.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: S.UNSIGNED_BYTE, count: 1, packTessellation: ({ isBackground: i, mapAligned: t }) => Es([[Mu, i], [Cu, !!t]]) }, zoomRange: { type: S.UNSIGNED_SHORT, count: 2, packPrecisionFactor: Bi, packTessellation: ({ minZoom: i, maxZoom: t }) => [i || 0, t || vi] }, offset: { type: S.SHORT, count: 2, packPrecisionFactor: 8, packAlternating: { count: 4, packTessellation: ({ offsets: i }) => {
  const { bottomLeft: t, bottomRight: e, topLeft: s, topRight: r } = i;
  return [s, r, t, e];
} } }, textureUV: { type: S.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, packTessellation: ({ texcoords: i }) => {
  const { bottomLeft: t, bottomRight: e, topLeft: s, topRight: r } = i;
  return [s, r, t, e];
} } }, color: { type: S.UNSIGNED_BYTE, count: 4, normalized: !0, packTessellation: ({ color: i }) => i }, fontSize: { type: S.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 4, packTessellation: ({ fontSize: i }) => I(i) }, referenceSize: { type: S.UNSIGNED_BYTE, count: 1, packPrecisionFactor: 4, packTessellation: ({ fontSize: i }, { referenceSize: t }) => I(t ?? i) }, haloColor: { type: S.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ haloColor: i }) => W(i) }, haloFontSize: { type: S.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 4, pack: ({ haloFontSize: i }) => I(i) }, clipAngle: { type: S.UNSIGNED_BYTE, count: 1, packTessellation: ({ clipAngle: i }) => sd(i || 0) }, referenceSymbol: { type: S.BYTE, count: 4, packPrecisionFactor: 1, packTessellation: (i, t) => {
  if (!i.referenceBounds) return [0, 0, 0, 0];
  const e = Ic(t.horizontalAlignment), s = Tc(t.verticalAlignment), { offsetX: r, offsetY: n, size: o } = i.referenceBounds;
  return [I(r), -I(n), I(o), e + 1 << 2 | s + 1];
} } } };
let lh = class extends Ne {
  constructor() {
    super(...arguments), this.vertexSpec = ed, this._textMeshParamsPropsInitialized = !1;
  }
  ensurePacked(t, e, s) {
    super.ensurePacked(t, e, s), this._textMeshParamsPropsInitialized && !this._evaluator.hasDynamicProperties || (this._textMeshTransformProps = new Zp(this.evaluatedMeshParams), this._textMeshParamsPropsInitialized = !0);
  }
  _write(t, e, s) {
    const r = this._getShaping();
    if (!r) return;
    const n = e.getDisplayId();
    if (this.evaluatedMeshParams.placement != null) return this._writePlacedTextMarkers(t, e, r, s);
    if (s && s.nextPath()) return s.nextPoint(), this._writeGlyphs(t, n, s.x, s.y, r, 0);
    if (e.geometryType === "esriGeometryPolygon") {
      const h = e.readCentroidForDisplay();
      if (!h) return;
      const [l, c] = h.coords;
      return this._writeGlyphs(t, n, l, c, r, 0);
    }
    if (e.geometryType === "esriGeometryMultipoint")
      return void e.readGeometryForDisplay()?.forEachVertex((l, c) => this._writeGlyphs(t, n, l, c, r, 0));
    const o = e.readXForDisplay(), a = e.readYForDisplay();
    return this._writeGlyphs(t, n, o, a, r, 0);
  }
  _writePlacedTextMarkers(t, e, s, r) {
    const n = r ?? N.fromFeatureSetReaderCIM(e);
    if (!n) return;
    const o = -1, a = hh.getPlacement(n, o, this.evaluatedMeshParams.placement, I(1), t.id, ln());
    if (!a) return;
    const h = e.getDisplayId();
    let l = a.next();
    for (; l != null; ) {
      const c = l.tx, u = -l.ty, d = -l.getAngle();
      this._writeGlyphs(t, h, c, u, s, d), l = a.next();
    }
  }
  _getShaping() {
    const t = this._textMeshTransformProps, e = this.evaluatedMeshParams;
    if (!e.glyphs?.glyphs.length) return null;
    const s = Math.round(I(t.fontSize)), r = I(t.offsetX), n = I(t.offsetY), o = Ln(I(e.lineWidth), 32, 512), a = sn * Ln(e.lineHeightRatio, 0.25, 4);
    return an(e.glyphs, { scale: s / en, angle: t.postAngle, xOffset: r, yOffset: n, horizontalAlignment: e.horizontalAlignment, verticalAlignment: e.verticalAlignment, maxLineWidth: o, lineHeight: a, decoration: e.decoration, borderLineSizePx: I(e.boxBorderLineSize), hasBackground: !!e.boxBackgroundColor, useCIMAngleBehavior: e.useCIMAngleBehavior });
  }
  _writeGlyphs(t, e, s, r, n, o, a, h) {
    const l = this.evaluatedMeshParams, c = this._textMeshTransformProps, u = c.fontSize, d = I(c.offsetX), p = I(c.offsetY), [m, f] = Ae(l.scaleInfo, this.getTileInfo());
    o !== 0 && n.setRotation(o);
    const _ = n.bounds, y = s + _.x + d, g = r + _.y - p, P = 2 * (l.minPixelBuffer ? l.minPixelBuffer / u : 1), w = Math.max(_.width, _.height) * P;
    n.textBox && (t.recordStart(this.instanceId, this.attributeLayout, n.glyphs[0].textureBinding), t.recordBounds(y, g, w, w), this._writeTextBox(t, e, s, r, n.textBox, a, h), t.recordEnd());
    for (const M of n.glyphs) {
      t.recordStart(this.instanceId, this.attributeLayout, M.textureBinding), t.recordBounds(y, g, w, w);
      const { texcoords: k, offsets: F } = M;
      this._writeQuad(t, e, s, r, { texcoords: k, offsets: F, fontSize: u, color: W(l.color), isBackground: !1, referenceBounds: a, minZoom: m, maxZoom: f, ...h }), t.recordEnd();
    }
    o !== 0 && n.setRotation(-o);
  }
  _writeTextBox(t, e, s, r, n, o, a) {
    const h = this.evaluatedMeshParams, { fontSize: l } = this._textMeshTransformProps, { boxBackgroundColor: c, boxBorderLineColor: u } = h, d = { isBackground: !0, fontSize: l, referenceBounds: o, ...a };
    c && (this._writeQuad(t, e, s, r, { texcoords: jp, offsets: n.main, color: W(c), ...d }), u || (this._writeQuad(t, e, s, r, { texcoords: Kp, offsets: n.top, color: W(c), ...d }), this._writeQuad(t, e, s, r, { texcoords: Jp, offsets: n.bot, color: W(c), ...d }), this._writeQuad(t, e, s, r, { texcoords: Qp, offsets: n.left, color: W(c), ...d }), this._writeQuad(t, e, s, r, { texcoords: td, offsets: n.right, color: W(c), ...d }))), u && (this._writeQuad(t, e, s, r, { texcoords: uo, offsets: n.top, color: W(u), ...d }), this._writeQuad(t, e, s, r, { texcoords: uo, offsets: n.bot, color: W(u), ...d }), this._writeQuad(t, e, s, r, { texcoords: po, offsets: n.left, color: W(u), ...d }), this._writeQuad(t, e, s, r, { texcoords: po, offsets: n.right, color: W(u), ...d }));
  }
  _writeQuad(t, e, s, r, n) {
    const o = t.vertexCount();
    this._writeVertex(t, e, s, r, n), t.indexWrite(o + 0), t.indexWrite(o + 1), t.indexWrite(o + 2), t.indexWrite(o + 1), t.indexWrite(o + 3), t.indexWrite(o + 2);
  }
};
const sd = (i) => Math.round(i * (254 / 360)), ni = 1, Pe = 0, id = 128, rd = Oh((i) => {
  let t = 0;
  if (i === 0) return 1 / 0;
  for (; !(i % 2); ) t++, i /= 2;
  return t;
});
class nd extends lh {
  constructor() {
    super(...arguments), this._zoomLevel = 0;
  }
  _write(t, e, s, r) {
    if (this._zoomLevel = r || 0, s != null) throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");
    switch (e.geometryType) {
      case "esriGeometryPoint": {
        const n = e.readXForDisplay(), o = e.readYForDisplay();
        return this._writePoint(t, n, o, e);
      }
      case "esriGeometryEnvelope":
      case "esriGeometryPolygon":
      case "esriGeometryMultipoint": {
        const n = e.readCentroidForDisplay();
        if (!n) return;
        const [o, a] = n.coords;
        return this._writePoint(t, o, a, e);
      }
      case "esriGeometryPolyline": {
        const n = e.readLegacyGeometryForDisplay();
        this._writeLines(t, e, n);
      }
    }
  }
  _writePoint(t, e, s, r) {
    const n = this._getShaping();
    if (!n) return;
    let o = this._getPointReferenceBounds();
    o || (o = { offsetX: 0, offsetY: 0, size: 0 });
    const a = n.boundsT, h = ia(this.evaluatedMeshParams.horizontalAlignment), l = ra(this.evaluatedMeshParams.verticalAlignment), c = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, u = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0, d = ii(r.getDisplayId());
    t.metricStart(new Ys(d, e, s, h, l, c, u, o)), t.metricBoxWrite(a), this._writeGlyphs(t, r.getDisplayId(), e, s, n, 0, o), t.metricEnd();
  }
  _getPointReferenceBounds() {
    if (!this._references) return null;
    for (const t of this._references) {
      const e = t.getBoundsInfo();
      if (e) return e;
    }
    return null;
  }
  _writeLines(t, e, s) {
    const { repeatLabel: r, scaleInfo: n } = this.evaluatedMeshParams, o = this.evaluatedMeshParams.repeatLabelDistance || 128, a = this._getShaping();
    if (!a) return;
    this._current = { out: t, id: e.getDisplayId(), shaping: a, zoomRange: Ae(n, this.getTileInfo()), referenceBounds: this._getPointReferenceBounds() || { offsetX: 0, offsetY: 0, size: 0 } };
    const h = Wp(s.paths, a.bounds.width), l = this._placeSubdivGlyphs.bind(this), c = (a.bounds.width + o) / (1 << ni);
    for (const u of h) Xp(u, c, l, !!r);
  }
  _placeSubdivGlyphs(t, e, s, r) {
    const { allowOverrun: n, labelPosition: o, repeatLabelDistance: a } = this.evaluatedMeshParams, h = this._current.zoomRange[0], l = rd(e), c = this._current.shaping.bounds.width / (1 << ni), u = Math.sqrt(a || id) / (1 << ni), d = Math.min(s, r - s), p = this._current.shaping.isMultiline ? vi : Math.log2(d / (u + c / 2)), m = e === 0 ? p : Math.min(l, p), f = Math.max(h, this._zoomLevel + ni - m), _ = this._zoomLevel - f, y = this._current.shaping.bounds.width / 2 * 2 ** _;
    this._current.shaping.isMultiline ? e === 0 && this._placeStraight(t, f) : n && _ < 0 ? this._placeStraightAlong(t, h) : o === "parallel" ? this._placeStraightAlong(t, f) : o === "curved" && this._placeCurved(t, f, y);
  }
  _placeStraight(t, e) {
    const { out: s, id: r, shaping: n, referenceBounds: o } = this._current, { x: a, y: h } = t, l = ii(r), c = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, u = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0;
    s.metricStart(new Ys(l, t.x, t.y, 0, 0, c, u, null)), s.metricBoxWrite(n.boundsT);
    const d = t.angle * (180 / Math.PI) % 360, p = (t.angle * (180 / Math.PI) + 180) % 360;
    this._writeGlyphs(s, r, a, h, n, 0, o, { clipAngle: d, mapAligned: !0, isLineLabel: !0, minZoom: e }), this._writeGlyphs(s, r, a, h, n, 0, o, { clipAngle: p, mapAligned: !0, isLineLabel: !0, minZoom: e }), s.metricEnd();
  }
  _placeCurved(t, e, s) {
    const { out: r, id: n } = this._current, o = t.clone(), a = t.angle * (180 / Math.PI) % 360, h = (t.angle * (180 / Math.PI) + 180) % 360, l = ii(n), c = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, u = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0;
    r.metricStart(new Ys(l, t.x, t.y, 0, 0, c, u, null)), this._placeFirst(o, e, 1, a), this._placeBack(t, o, e, s, 1, a), this._placeForward(t, o, e, s, 1, a), this._placeFirst(o, e, 0, h), this._placeBack(t, o, e, s, 0, h), this._placeForward(t, o, e, s, 0, h), r.metricEnd();
  }
  _placeStraightAlong(t, e) {
    const { out: s, id: r, shaping: n, zoomRange: o, referenceBounds: a } = this._current, { boxBorderLineColor: h, boxBackgroundColor: l } = this.evaluatedMeshParams, c = t.clone(), u = t.angle * (180 / Math.PI) % 360, d = (t.angle * (180 / Math.PI) + 180) % 360;
    if (n.glyphs.length > 0 && (h || l)) {
      const _ = Math.max(e, o[0], 0), y = Math.min(vi, o[1]), g = Jr(he(), -t.angle), [P, w] = n.shapeBackground(g), M = { minZoom: _, maxZoom: y, clipAngle: u, mapAligned: !0, isLineLabel: !0 };
      s.recordStart(this.instanceId, this.attributeLayout, n.glyphs[0].textureBinding), this._writeTextBox(s, r, t.x, t.y, w, a, M), s.recordEnd(), M.clipAngle = d, s.recordStart(this.instanceId, this.attributeLayout, n.glyphs[0].textureBinding), this._writeTextBox(s, r, t.x, t.y, w, a, M), s.recordEnd();
    }
    const p = ii(r), m = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, f = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0;
    s.metricStart(new Ys(p, t.x, t.y, 0, 0, m, f, null)), this._placeFirst(c, e, 1, u, !0), this._placeFirst(c, e, 0, d, !0), s.metricEnd();
  }
  _placeBack(t, e, s, r, n, o) {
    const a = t.clone();
    let h = t.backwardLength + Pe;
    for (; a.prev() && !(h >= r); ) this._placeOnSegment(a, e, h, s, -1, n, o), h += a.length + Pe;
  }
  _placeForward(t, e, s, r, n, o) {
    const a = t.clone();
    let h = t.remainingLength + Pe;
    for (; a.next() && !(h >= r); ) this._placeOnSegment(a, e, h, s, 1, n, o), h += a.length + Pe;
  }
  _placeFirst(t, e, s, r, n = !1) {
    const o = t, { out: a, id: h, shaping: l, zoomRange: c, referenceBounds: u } = this._current, d = l.glyphs;
    for (const p of d) {
      const m = p.x > l.bounds.x ? s : 1 - s, f = m * t.remainingLength + (1 - m) * t.backwardLength, _ = Math.abs(p.x + p.width / 2 - l.bounds.x), y = Math.max(0, this._zoomLevel + Math.log2(_ / (f + Pe))), g = Math.max(e, n ? 0 : y);
      p.maxZoom = Math.min(c[1], vi), p.angle = t.angle + (1 - s) * Math.PI, p.minZoom = Math.max(c[0], g), this._writeLineGlyph(a, h, o.x, o.y, l.bounds, p, r, u, !0), s && this._isVisible(p.minZoom, p.maxZoom) && a.metricBoxWrite(p.bounds);
    }
  }
  _placeOnSegment(t, e, s, r, n, o, a) {
    const { out: h, id: l, shaping: c, referenceBounds: u } = this._current, d = c.glyphs, p = t.dx / t.length, m = t.dy / t.length, f = { x: t.x + s * -n * p, y: t.y + s * -n * m };
    for (const _ of d) {
      const y = _.x > c.bounds.x ? o : 1 - o;
      if (!(y && n === 1 || !y && n === -1)) continue;
      const g = Math.abs(_.x + _.width / 2 - c.bounds.x), P = Math.max(0, this._zoomLevel + Math.log2(g / s) - 0.1), w = Math.max(r, this._zoomLevel + Math.log2(g / (s + t.length + Pe)));
      if (P !== 0 && (_.angle = t.angle + (1 - o) * Math.PI, _.minZoom = w, _.maxZoom = P, this._writeLineGlyph(h, l, f.x, f.y, c.bounds, _, a, u, !0), o && this._isVisible(_.minZoom, _.maxZoom))) {
        const M = _.bounds, k = t.x - e.x, F = t.y - e.y, z = new ve(M.center[0] + k, M.center[1] + F, M.width, M.height);
        h.metricBoxWrite(z);
      }
    }
  }
  _writeLineGlyph(t, e, s, r, n, o, a, h, l) {
    const c = s + n.x, u = r + n.y, d = 2 * (this.evaluatedMeshParams.minPixelBuffer ? this.evaluatedMeshParams.minPixelBuffer / this._textMeshTransformProps.fontSize : 1), p = Math.max(n.width, n.height) * d;
    t.recordStart(this.instanceId, this.attributeLayout, o.textureBinding), t.recordBounds(c, u, p, p);
    const { texcoords: m, offsets: f } = o, _ = this._textMeshTransformProps.fontSize;
    this._writeQuad(t, e, s, r, { texcoords: m, offsets: f, fontSize: _, color: W(this.evaluatedMeshParams.color), isBackground: !1, referenceBounds: h, minZoom: Math.max(this._current.zoomRange[0], o.minZoom), maxZoom: Math.min(this._current.zoomRange[1], o.maxZoom), clipAngle: a, mapAligned: l, isLineLabel: !0 }), t.recordEnd();
  }
  _isVisible(t, e) {
    const s = this._zoomLevel;
    return t <= s && s <= e;
  }
}
const od = { createComputedParams: (i) => i, attributes: { ...Xi.attributes, bitset: { type: S.UNSIGNED_BYTE, count: 1, pack: ({ shouldSampleAlphaOnly: i, shouldScaleDash: t, isSDF: e }) => Es([[un, i], [Su, t], [vu, e]]) }, tlbr: { type: S.UNSIGNED_SHORT, count: 4, pack: ({ sprite: i }) => {
  const { rect: t, width: e, height: s } = i, r = t.x + Te, n = t.y + Te;
  return [r, n, r + e, n + s];
} }, accumulatedDistance: { type: S.UNSIGNED_SHORT, count: 1, packTessellation: ({ distance: i }) => i }, segmentDirection: { type: S.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ directionX: i, directionY: t }) => [i, t] } } };
class ad extends fn {
  constructor(t, e, s, r) {
    super(t, e, s, r), this.vertexSpec = od, this._tessellationOptions.textured = !0;
  }
  _write(t, e, s) {
    const r = s ?? N.fromFeatureSetReaderCIM(e);
    if (!r) return;
    const { sprite: n } = this.evaluatedMeshParams;
    this._writeGeometry(t, e, r, n?.textureBinding);
  }
}
class Di {
  static from(t) {
    return "width" in t ? this.fromSimpleMeshParams(t) : this.fromComplexMeshParams(t);
  }
  static fromSimpleMeshParams(t) {
    const e = new Di(t.sprite, t.color, t.outlineColor, t.minPixelBuffer, t.placement, t.scaleInfo, t.effects), { type: s, width: r, height: n, angle: o, alignment: a, outlineSize: h, referenceSize: l, sprite: c, overrideOutlineColor: u } = t;
    e.rawWidth = I(r), e.rawHeight = I(n), e.angle = o, e.alignment = a, e.outlineSize = I(h), e.referenceSize = I(l), e.overrideOutlineColor = u, e.offsetX = I(t.offsetX), e.offsetY = I(t.offsetY), s !== "simple" || c.sdf || (e.rawWidth = c.width, e.rawHeight = c.height);
    const d = 2;
    return e.sizeRatio = c.sdf ? d : 1, e._computeSize(t, !1), e;
  }
  static fromComplexMeshParams(t) {
    const e = new Di(t.sprite, t.color, t.outlineColor, t.minPixelBuffer, t.placement, t.scaleInfo, t.effects);
    let { alignment: s, transforms: r, size: n, scaleX: o, anchorX: a, anchorY: h, angle: l, colorLocked: c, frameHeight: u, widthRatio: d, offsetX: p, offsetY: m, outlineSize: f, referenceSize: _, scaleFactor: y, sizeRatio: g, isAbsoluteAnchorPoint: P, rotateClockwise: w, scaleSymbolsProportionally: M, sprite: k } = t;
    if (r && r.infos.length > 0) {
      const A = yo(n, l, w, p, m, r);
      n = A.size, l = A.rotation, p = A.offsetX, m = A.offsetY, w = !1;
    }
    y && (n *= y, p *= y, m *= y);
    const F = o * (k.width / k.height);
    e.alignment = s, e.rawHeight = I(n), e.rawWidth = e.rawHeight * F, e.referenceSize = I(_), e.sizeRatio = g, e.angle = l, e.rotateClockwise = w, e.anchorX = a, e.anchorY = h, e.offsetX = I(p), e.offsetY = I(m), P && n && (k.sdf ? e.anchorX = a / (n * d) : e.anchorX = a / (n * F), e.anchorY = h / n);
    const z = M && u ? n / u : 1;
    return e.outlineSize = f === 0 || isNaN(f) ? 0 : I(f) * z, e.scaleSymbolsProportionally = M, e.colorLocked = c, e._computeSize(t, !0), e;
  }
  constructor(t, e, s, r, n, o, a) {
    this.sprite = t, this.color = e, this.outlineColor = s, this.minPixelBuffer = r, this.placement = n, this.scaleInfo = o, this.effects = a, this.rawWidth = 0, this.rawHeight = 0, this.angle = 0, this.outlineSize = 0, this.referenceSize = 0, this.sizeRatio = 1, this.alignment = xo.SCREEN, this.scaleSymbolsProportionally = !1, this.overrideOutlineColor = !1, this.colorLocked = !1, this.anchorX = 0, this.anchorY = 0, this.computedWidth = 0, this.computedHeight = 0, this.texXmin = 0, this.texYmin = 0, this.texXmax = 0, this.texYmax = 0, this.offsetX = 0, this.offsetY = 0, this.rotateClockwise = !0;
  }
  get boundsInfo() {
    return { size: Math.max(this.computedHeight, this.computedWidth), offsetX: this.offsetX, offsetY: this.offsetY };
  }
  _computeSize(t, e) {
    const { sprite: s, hasSizeVV: r } = t, n = !!s.sdf, { rawWidth: o, rawHeight: a, sizeRatio: h, outlineSize: l } = this, c = o * h, u = a * h;
    if (n && !r) {
      const P = e && o > a ? c : o, w = a, M = l + 2 * 1;
      this.computedWidth = Math.min(P + M, c), this.computedHeight = Math.min(w + M, u);
    } else this.computedWidth = c, this.computedHeight = u;
    const d = n ? Jh / Math.max(c, u) : 1, p = 0.5 * (c - this.computedWidth) * d, m = 0.5 * (u - this.computedHeight) * d, f = s.rect.x + Te + p, _ = s.rect.y + Te + m, y = f + s.width - 2 * p, g = _ + s.height - 2 * m;
    this.texXmin = Math.floor(f), this.texYmin = Math.floor(_), this.texXmax = Math.ceil(y), this.texYmax = Math.ceil(g), this.computedWidth *= (this.texXmax - this.texXmin) / (y - f), this.computedHeight *= (this.texYmax - this.texYmin) / (g - _), this.anchorX *= c / this.computedWidth, this.anchorY *= u / this.computedHeight;
  }
}
const je = { bitset: { isSDF: 0, isMapAligned: 1, scaleSymbolsProportionally: 2, overrideOutlineColor: 3, colorLocked: 4 } }, hd = 3.14159265359 / 180, ld = 128 / Math.PI;
function cd(i, t) {
  return i %= t, Math.abs(i >= 0 ? i : i + t);
}
function ud(i) {
  return cd(i * ld, 256);
}
function pd(i, t, e, s, r = !1) {
  const n = he(), o = r ? 1 : -1;
  return Dh(n), (t || e) && hi(n, n, [t, -e]), s && dr(n, n, o * hd * -s), n;
}
const dd = { createComputedParams: (i) => Di.from(i), attributes: { pos: { type: S.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: S.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: S.UNSIGNED_BYTE, count: 1, pack: ({ sprite: i, alignment: t, scaleSymbolsProportionally: e, overrideOutlineColor: s, colorLocked: r }) => {
  let n = 0;
  return i.sdf && (n |= He(je.bitset.isSDF)), t === xo.MAP && (n |= He(je.bitset.isMapAligned)), e && (n |= He(je.bitset.scaleSymbolsProportionally)), s && (n |= He(je.bitset.overrideOutlineColor)), r && (n |= He(je.bitset.colorLocked)), n;
} }, zoomRange: { type: S.SHORT, count: 2, packPrecisionFactor: Bi, pack: ({ scaleInfo: i }, { tileInfo: t }) => Ae(i, t) }, offset: { type: S.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: ({ angle: i, computedWidth: t, computedHeight: e, anchorX: s, anchorY: r, offsetX: n, offsetY: o, rotateClockwise: a }) => {
  const h = pd(0, n, o, -i, a), l = -(0.5 + s) * t, c = -(0.5 - r) * e, u = [l, c], d = [l + t, c], p = [l, c + e], m = [l + t, c + e];
  return vt(u, u, h), vt(d, d, h), vt(p, p, h), vt(m, m, h), [u, d, p, m];
} } }, textureUV: { type: S.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: ({ texXmax: i, texXmin: t, texYmax: e, texYmin: s }) => [[t, s], [i, s], [t, e], [i, e]] } }, color: { type: S.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ color: i }) => W(i) }, outlineColor: { type: S.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ outlineColor: i }) => W(i) }, sizing: { type: S.UNSIGNED_BYTE, count: 4, pack: ({ rawWidth: i, rawHeight: t, outlineSize: e, referenceSize: s }) => {
  const r = Math.max(i, t);
  return [lr(r, 128), lr(e, 128), lr(s, 128), 0];
} }, placementAngle: { type: S.UNSIGNED_BYTE, count: 1, packTessellation: ({ placementAngle: i }) => ud(i) }, sizeRatio: { type: S.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 64, pack: ({ sizeRatio: i }) => i } } };
class fd extends Ne {
  constructor() {
    super(...arguments), this.vertexSpec = dd;
  }
  getBoundsInfo() {
    return this.evaluatedMeshParams.boundsInfo;
  }
  _write(t, e, s) {
    const r = this.evaluatedMeshParams.sprite?.textureBinding, n = e.getDisplayId();
    t.recordStart(this.instanceId, this.attributeLayout, r);
    const o = this.evaluatedMeshParams.minPixelBuffer, a = Math.max(this.evaluatedMeshParams.computedWidth, o), h = Math.max(this.evaluatedMeshParams.computedHeight, o), l = this.evaluatedMeshParams.offsetX, c = -this.evaluatedMeshParams.offsetY;
    if (this.evaluatedMeshParams.placement != null) this._writePlacedMarkers(t, e, s, a, h);
    else if (s && s.nextPath()) {
      s.nextPoint();
      const u = s.x, d = s.y;
      t.recordBounds(u + l, d + c, a, h), this._writeQuad(t, n, u, d);
    } else if (e.geometryType === "esriGeometryPolygon") {
      const u = e.readCentroidForDisplay();
      if (!u) return;
      const [d, p] = u.coords;
      t.recordBounds(d + l, p + c, a, h), this._writeQuad(t, n, d, p);
    } else if (e.geometryType === "esriGeometryPoint") {
      const u = e.readXForDisplay(), d = e.readYForDisplay();
      t.recordBounds(u + l, d + c, a, h), this._writeQuad(t, n, u, d);
    } else
      e.readGeometryForDisplay()?.forEachVertex((d, p) => {
        t.recordBounds(d + l, p + c, a, h), Math.abs(d) > Ut || Math.abs(p) > Ut || this._writeQuad(t, n, d, p);
      });
    t.recordEnd();
  }
  _writePlacedMarkers(t, e, s, r, n) {
    const o = s ?? N.fromFeatureSetReaderCIM(e)?.clone();
    if (!o) return;
    const a = -1, h = hh.getPlacement(o, a, this.evaluatedMeshParams.placement, I(1), t.id, ln());
    if (!h) return;
    const l = e.getDisplayId();
    let c = h.next();
    const u = this.evaluatedMeshParams.offsetX, d = -this.evaluatedMeshParams.offsetY;
    for (; c != null; ) {
      const p = c.tx, m = -c.ty;
      if (Math.abs(p) > Ut || Math.abs(m) > Ut) {
        c = h.next();
        continue;
      }
      const f = -c.getAngle();
      t.recordBounds(p + u, m + d, r, n), this._writeQuad(t, l, p, m, f), c = h.next();
    }
  }
  _writeQuad(t, e, s, r, n) {
    const o = t.vertexCount(), a = n == null ? null : { placementAngle: n };
    this._writeVertex(t, e, s, r, a), t.indexWrite(o + 0), t.indexWrite(o + 1), t.indexWrite(o + 2), t.indexWrite(o + 1), t.indexWrite(o + 3), t.indexWrite(o + 2);
  }
}
const md = { createComputedParams: (i) => i, attributes: { pos: { type: S.SHORT, count: 2, packPrecisionFactor: 10, pack: "position" }, id: { type: S.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: S.UNSIGNED_BYTE, count: 1, pack: (i) => 0 }, offset: { type: S.SHORT, count: 2, packPrecisionFactor: 16, packAlternating: { count: 4, pack: ({ size: i }) => {
  const t = I(i), e = -t / 2, s = -t / 2;
  return [[e, s], [e + t, s], [e, s + t], [e + t, s + t]];
} } }, texCoords: { type: S.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: () => [[0, 1], [1, 1], [0, 0], [1, 0]] } }, size: { type: S.UNSIGNED_BYTE, count: 2, pack: ({ size: i }) => [i, i] }, referenceSize: { type: S.UNSIGNED_BYTE, count: 1, pack: ({ size: i }) => I(i) }, zoomRange: { type: S.UNSIGNED_BYTE, count: 2, pack: ({ scaleInfo: i }, { tileInfo: t }) => Ae(i, t) } } };
class _d extends Ne {
  constructor() {
    super(...arguments), this.vertexSpec = md;
  }
  _write(t, e) {
    const s = e.getDisplayId(), r = this.evaluatedMeshParams.minPixelBuffer, n = Math.max(I(this.evaluatedMeshParams.size), r);
    let o, a;
    if (e.geometryType === "esriGeometryPoint") o = e.readXForDisplay(), a = e.readYForDisplay();
    else {
      const l = e.readCentroidForDisplay();
      if (!l) return;
      o = l?.coords[0], a = l?.coords[1];
    }
    t.recordStart(this.instanceId, this.attributeLayout), t.recordBounds(o, a, n, n);
    const h = t.vertexCount();
    this._writeVertex(t, s, o, a), t.indexWrite(h + 0), t.indexWrite(h + 1), t.indexWrite(h + 2), t.indexWrite(h + 1), t.indexWrite(h + 3), t.indexWrite(h + 2), t.recordEnd();
  }
}
const Qm = gd({ FillMeshWriter: cn, DotDensityMeshWriter: pu, ComplexFillMeshWriter: ku, PatternFillMeshWriter: ba, OutlineFillMeshWriter: gn, PatternOutlineFillMeshWriter: Rp, ComplexOutlineFillMeshWriter: Ep, MarkerMeshWriter: fd, PieChartMeshWriter: _d, TextMeshWriter: lh, LineMeshWriter: fn, TexturedLineMeshWriter: ad, HeatmapMeshWriter: Dp, LabelMeshWriter: nd });
function gd(i) {
  const t = {};
  for (const e in i) {
    const s = { name: e, constructor: i[e] };
    t[e] = s;
  }
  return t;
}
let oi = class extends Bh {
  constructor(i) {
    super(i), this.debugName = "", this._updatingHandles = new Vh(), this._idToUpdatingState = new Yh();
  }
  get updating() {
    const i = this._updatingHandles.updating || Array.from(this._idToUpdatingState.values()).some((t) => t);
    if (le("esri-2d-log-updating")) {
      const t = Array.from(this._idToUpdatingState.entries()).map(([e, s]) => `-> ${e}: ${s}`).join(`
`);
      console.log(`${this.debugName}: Updating: ${i}
-> Handles: ${this._updatingHandles.updating}
${t}`);
    }
    return i;
  }
  addUpdateTracking(i, t) {
    const e = Hh(() => t.updating, (s) => this._idToUpdatingState.set(i, s), { sync: !0 });
    this.addHandles(e);
  }
  addPromise(i) {
    return this._updatingHandles.addPromise(i);
  }
};
x([En({ constructOnly: !0 })], oi.prototype, "debugName", void 0), x([En({ readOnly: !0 })], oi.prototype, "updating", null), oi = x([Gh("esri.view.2d.layers.support.UpdateTracking2D")], oi);
export {
  Ps as $,
  oo as A,
  ke as B,
  E as C,
  ce as D,
  At as E,
  qa as F,
  U as G,
  O as H,
  bs as I,
  Cf as J,
  ye as K,
  Sn as L,
  um as M,
  Za as N,
  Ce as O,
  lt as P,
  Qs as Q,
  si as R,
  Lt as S,
  Wr as T,
  Mf as U,
  ti as V,
  wf as W,
  ei as X,
  bm as Y,
  pa as Z,
  C as _,
  Qm as a,
  X as a0,
  pe as a1,
  xn as a2,
  Jn as a3,
  Nf as a4,
  vn as a5,
  Va as a6,
  J as a7,
  lp as a8,
  sp as a9,
  wn as aA,
  ot as aB,
  eh as aC,
  vp as aD,
  Su as aE,
  vu as aF,
  un as aG,
  Ot as aH,
  cm as aI,
  $n as aJ,
  Cn as aK,
  yu as aL,
  Qu as aM,
  Af as aN,
  Ya as aO,
  yp as aP,
  Ei as aQ,
  gp as aR,
  je as aS,
  no as aT,
  iu as aU,
  bc as aV,
  df as aW,
  Pc as aX,
  gc as aY,
  Yr as aa,
  rp as ab,
  Mt as ac,
  Ff as ad,
  Pp as ae,
  Sm as af,
  Rf as ag,
  bp as ah,
  Wt as ai,
  Qf as aj,
  tm as ak,
  it as al,
  Mu as am,
  Cu as an,
  ks as ao,
  Is as ap,
  kn as aq,
  Ni as ar,
  Ai as as,
  In as at,
  Le as au,
  kt as av,
  se as aw,
  Ha as ax,
  _e as ay,
  mp as az,
  Gp as b,
  N as c,
  oi as d,
  Sr as e,
  ii as f,
  L as g,
  Ur as h,
  et as i,
  cp as j,
  wu as k,
  pc as l,
  Et as m,
  Ed as n,
  _f as o,
  b as p,
  Xt as q,
  Nd as r,
  jm as s,
  Mc as t,
  Ua as u,
  em as v,
  V as w,
  tt as x,
  Zi as y,
  gt as z
};
//# sourceMappingURL=UpdateTracking2D-ByaqMjYp.js.map
