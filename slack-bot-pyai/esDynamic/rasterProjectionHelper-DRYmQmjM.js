import { b7 as Q, b8 as Sn, aU as A, b9 as $, ba as O, b6 as Pn, aR as mn, a6 as G, aA as Gn, bb as kn, s as Nn, bc as v, bd as T, be as en, bf as En, bg as Tn, bh as vn, bi as on } from "./main-DhLeoxL5.js";
var V;
function hn(n, t, i) {
  return !kn(n, t, i);
}
function L(n, t, i) {
  const s = hn(n, t, i);
  if (s && !Q()) throw new Nn("rasterprojectionhelper-project", "projection engine is not loaded");
  return s;
}
(function(n) {
  n[n.None = 0] = "None", n[n.North = 1] = "North", n[n.South = 2] = "South", n[n.Both = 3] = "Both";
})(V || (V = {}));
const sn = (n, t, i, s = 0) => {
  if (i[0] === 1) return [0, 0];
  let a = 1, e = -1, o = 1, c = -1;
  for (let u = 0; u < n.length; u += 2) isNaN(n[u]) || (a = a > n[u] ? n[u] : a, e = e > n[u] ? e : n[u], o = o > n[u + 1] ? n[u + 1] : o, c = c > n[u + 1] ? c : n[u + 1]);
  const { cols: f, rows: r } = t, l = (e - a) / f / i[0], M = (c - o) / r / i[1], p = 2 * s;
  let x = 0, m = !1, g = [0, 0];
  for (let u = 0; u < f - 3; u++) {
    for (let w = 0; w < r - 3; w++) {
      const y = u * r * 2 + 2 * w, h = (n[y] + n[y + 4] + n[y + 4 * r] + n[y + 4 * r + 4]) / 4, d = (n[y + 1] + n[y + 5] + n[y + 4 * r + 1] + n[y + 4 * r + 5]) / 4, R = Math.abs((h - n[y + 2 * r + 2]) / l), b = Math.abs((d - n[y + 2 * r + 3]) / M);
      if (R + b > x && (x = R + b, g = [R, b]), p && x > p) {
        m = !0;
        break;
      }
    }
    if (m) break;
  }
  return g;
}, Cn = { 3395: 20037508342789244e-9, 3410: 17334193943686873e-9, 3857: 20037508342788905e-9, 3975: 17367530445161372e-9, 4087: 20037508342789244e-9, 4088: 20015108787169147e-9, 6933: 17367530445161372e-9, 32662: 20037508342789244e-9, 53001: 2001508679602057e-8, 53002: 1000754339801029e-8, 53003: 2001508679602057e-8, 53004: 2001508679602057e-8, 53016: 14152803599503474e-9, 53017: 17333573624304302e-9, 53034: 2001508679602057e-8, 53079: 20015114352186374e-9, 53080: 20015114352186374e-9, 54001: 20037508342789244e-9, 54002: 10018754171394624e-9, 54003: 20037508342789244e-9, 54004: 20037508342789244e-9, 54016: 14168658027268292e-9, 54017: 1736753044516137e-8, 54034: 20037508342789244e-9, 54079: 20037508342789244e-9, 54080: 20037508342789244e-9, 54100: 20037508342789244e-9, 54101: 20037508342789244e-9 }, B = 32, F = 4, X = F, K = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Y = 500;
async function Fn() {
  Q() || await Sn();
}
function _n(n, t, i) {
  return L(n.spatialReference, t), i ? on(t, n.spatialReference, n) : on(n.spatialReference, t, n);
}
function an(n, t, i, s = null) {
  const a = n.spatialReference;
  if (a.equals(t)) return n;
  L(a, t, s);
  const e = i.center, o = new A({ xmin: e.x - n.x / 2, xmax: e.x + n.x / 2, ymin: e.y - n.y / 2, ymax: e.y + n.y / 2, spatialReference: a }), c = $(o, t, s), f = C(t);
  let r;
  if (c == null || f != null && c.width >= f) {
    const l = O(a) / O(t);
    r = { x: n.x * l, y: n.y * l };
  } else r = { x: c.width, y: c.height };
  return r;
}
function k(n, t = 0.01) {
  return O(n) ? t / O(n) : 0;
}
function rn(n, t, i = null, s = !0) {
  const a = n.spatialReference;
  if (a.equals(t)) return n;
  L(a, t, i);
  const e = $(n, t, i);
  return s && e && pn([n], [e], a, t), e;
}
function pn(n, t, i, s) {
  const a = q(i, !0), e = q(s, !0), o = k(i, Y), c = k(s, Y);
  if (o && a != null && e != null) for (let f = 0; f < n.length; f++) {
    const r = t[f];
    if (!r) continue;
    const { x: l } = n[f], { x: M } = r;
    M >= e[1] - c && Math.abs(l - a[0]) < o ? r.x -= e[1] - e[0] : M <= e[0] + c && Math.abs(l - a[1]) < o && (r.x += e[1] - e[0]);
  }
}
function zn(n) {
  const { inSR: t, outSR: i, datumTransformation: s, preferPE: a } = n;
  if (t.equals(i)) {
    const { points: e } = Z(n, null);
    return e;
  }
  return t.isWebMercator && i.isWGS84 || t.isWGS84 && i.isWebMercator ? $n(n) : L(t, i, s) && a && (t.isGeographic || W(t) != null) ? ln(n) : Wn(n);
}
function Wn(n) {
  const { points: t } = Z(n, null), { inSR: i, outSR: s, datumTransformation: a } = n, e = t.map((c) => new G(c[0], c[1], i)), o = $(e, s, a);
  return a && pn(e, o, i, s), o.map((c) => c ? [c.x, c.y] : [NaN, NaN]);
}
function ln(n) {
  const { inSR: t, outSR: i, datumTransformation: s } = n, a = W(t), { points: e, mask: o } = Z(n, a);
  if (!t.isGeographic) {
    const f = t.wkid ? v.coordsys(t.wkid) : v.fromString(t.isGeographic ? T.PE_TYPE_GEOGCS : T.PE_TYPE_PROJCS, t.wkt2 || t.wkt);
    en.projToGeog(f, e.length, e);
  }
  if (s != null && s.steps.length) {
    let f;
    if (i.isGeographic && (f = e.map(([l]) => l > 179.9955 ? 1 : l < -179.9955 ? -1 : 0)), s.steps.forEach((l) => {
      const M = l.wkid ? v.geogtran(l.wkid) : v.fromString(T.PE_TYPE_GEOGTRAN, l.wkt);
      En.geogToGeog(M, e.length, e, null, l.isInverse ? T.PE_TRANSFORM_2_TO_1 : T.PE_TRANSFORM_1_TO_2);
    }), f) for (let l = 0; l < e.length; l++) {
      const M = f[l], p = e[l][0], x = p > 179.9955 ? 1 : p < -179.9955 ? -1 : 0;
      M && x && M !== x && (e[l][0] = M > 0 ? p + 360 : p - 360);
    }
  }
  if (!i.isGeographic) {
    const f = W(i, !0), r = f != null && f.isEnvelope ? [f.bbox[1], f.bbox[3]] : [-90, 90];
    Ln(e, r);
    const l = i.wkid ? v.coordsys(i.wkid) : v.fromString(i.isGeographic ? T.PE_TYPE_GEOGCS : T.PE_TYPE_PROJCS, i.wkt2 || i.wkt);
    en.geogToProj(l, e.length, e);
  }
  let c = e;
  if (o && e.length !== o.length) {
    c = [];
    for (let f = 0, r = 0; f < o.length; f++) o[f] ? c.push(e[r++]) : c.push([NaN, NaN]);
  }
  return c;
}
function $n(n) {
  const { cols: t, rows: i, xres: s, yres: a, usePixelCenter: e, inSR: o, outSR: c } = n;
  let { xmin: f, ymax: r } = n;
  e && (f += s / 2, r -= a / 2);
  const l = [], M = [], p = Math.max(t, i);
  for (let m = 0; m < p; m++) {
    const g = f + s * Math.min(t, m), u = r - a * Math.min(i, m), w = $(new G({ x: g, y: u, spatialReference: o }), c);
    m <= t && l.push(w.x), m <= i && M.push(w.y);
  }
  const x = [];
  for (let m = 0; m < t; m++) for (let g = 0; g < i; g++) x.push([l[m], M[g]]);
  return x;
}
function W(n, t = !1) {
  let i = n.wkid || n.wkt2 || n.wkt;
  if (!i || n.isGeographic) return null;
  if (i = String(i), K.has(i)) {
    const o = K.get(i);
    return t ? o?.gcs : o?.pcs;
  }
  const s = n.wkid ? v.coordsys(n.wkid) : v.fromString(n.isGeographic ? T.PE_TYPE_GEOGCS : T.PE_TYPE_PROJCS, n.wkt2 || n.wkt), a = cn(s, k(n, 1e-4)), e = cn(s, 0, !0);
  return K.set(i, { pcs: a, gcs: e }), t ? e : a;
}
function cn(n, t = 0, i = !1) {
  const s = Tn.generate(n), a = i ? n.horizonGcsGenerate() : n.horizonPcsGenerate();
  if (!s || !a?.length) return null;
  let e = !1, o = a.find((u) => u.getInclusive() === 1 && u.getKind() === 1);
  if (!o) {
    if (o = a.find((u) => u.getInclusive() === 1 && u.getKind() === 0), !o) return null;
    e = !0;
  }
  const c = i ? 0 : (s.getNorthPoleLocation() === 2 ? 1 : 0) | (s.getSouthPoleLocation() === 2 ? 2 : 0), f = s.isPannableRectangle(), r = o.getCoord();
  if (e) return { isEnvelope: e, isPannable: f, vertices: r, coef: null, bbox: [r[0][0] - t, r[0][1] - t, r[1][0] + t, r[1][1] + t], poleLocation: c };
  let l = 0;
  const M = [];
  let [p, x] = r[0], [m, g] = r[0];
  for (let u = 0, w = r.length; u < w; u++) {
    l++, l === w && (l = 0);
    const [y, h] = r[u], [d, R] = r[l];
    if (R === h) M.push([y, d, h, R, 2]);
    else {
      const b = (d - y) / (R - h || 1e-4), N = y - b * h;
      h < R ? M.push([b, N, h, R, 0]) : M.push([b, N, R, h, 1]);
    }
    p = p < y ? p : y, x = x < h ? x : h, m = m > y ? m : y, g = g > h ? g : h;
  }
  return { isEnvelope: !1, isPannable: f, vertices: r, coef: M, bbox: [p, x, m, g], poleLocation: c };
}
function Z(n, t) {
  const i = [], { cols: s, rows: a, xres: e, yres: o, usePixelCenter: c } = n;
  let { xmin: f, ymax: r } = n;
  if (c && (f += e / 2, r -= o / 2), t == null) {
    for (let x = 0; x < s; x++) for (let m = 0; m < a; m++) i.push([f + e * x, r - o * m]);
    return { points: i };
  }
  const l = new Uint8Array(s * a);
  if (t.isEnvelope) {
    const { bbox: [x, m, g, u] } = t;
    for (let w = 0, y = 0; w < s; w++) {
      const h = f + e * w, d = t.isPannable || h >= x && h <= g;
      for (let R = 0; R < a; R++, y++) {
        const b = r - o * R;
        d && b >= m && b <= u && (i.push([h, b]), l[y] = 1);
      }
    }
    return { points: i, mask: l };
  }
  const M = t.coef, p = [];
  for (let x = 0; x < a; x++) {
    const m = r - o * x, g = [], u = [];
    for (let y = 0; y < M.length; y++) {
      const [h, d, R, b, N] = M[y];
      if (m === R && R === b) g.push(h), g.push(d), u.push(2), u.push(2);
      else if (m >= R && m <= b) {
        const P = h * m + d;
        g.push(P), u.push(N);
      }
    }
    let w = g;
    if (g.length > 2) {
      let y = u[0] === 2 ? 0 : u[0], h = g[0];
      w = [];
      for (let d = 1; d < u.length; d++) u[d] === 2 && d !== u.length - 1 || (u[d] !== y && (w.push(y === 0 ? Math.min(h, g[d - 1]) : Math.max(h, g[d - 1])), y = u[d], h = g[d]), d === u.length - 1 && w.push(u[d] === 0 ? Math.min(h, g[d]) : Math.max(h, g[d])));
      w.sort((d, R) => d - R);
    } else g[0] > g[1] && (w = [g[1], g[0]]);
    p.push(w);
  }
  for (let x = 0, m = 0; x < s; x++) {
    const g = f + e * x;
    for (let u = 0; u < a; u++, m++) {
      const w = r - o * u, y = p[u];
      if (y.length === 2) g >= y[0] && g <= y[1] && (i.push([g, w]), l[m] = 1);
      else if (y.length > 2) {
        let h = !1;
        for (let d = 0; d < y.length; d += 2) if (g >= y[d] && g <= y[d + 1]) {
          h = !0;
          break;
        }
        h && (i.push([g, w]), l[m] = 1);
      }
    }
  }
  return { points: i, mask: l };
}
function Ln(n, t) {
  const [i, s] = t;
  for (let a = 0; a < n.length; a++) {
    const e = n[a][1];
    (e < i || e > s) && (n[a] = [NaN, NaN]);
  }
}
function gn(n, t) {
  const i = C(n[0].spatialReference);
  if (n.length < 2 || i == null || (t = t ?? k(n[0].spatialReference), (n = n.filter((c) => c.width > t)).length === 1)) return n[0];
  let { xmin: s, xmax: a, ymin: e, ymax: o } = n[0];
  for (let c = 1; c < n.length; c++) {
    const f = n[c];
    a = f.xmax + i * c, e = Math.min(e, f.ymin), o = Math.max(o, f.ymax);
  }
  return new A({ xmin: s, xmax: a, ymin: e, ymax: o, spatialReference: n[0].spatialReference });
}
function yn(n, t, i = null, s = !0) {
  const a = n.spatialReference;
  if (a.equals(t)) return n;
  const e = dn(n), o = C(a, !0), c = C(t);
  if (e === 0 || o == null || c == null) {
    const r = fn(n, t, i, s);
    if (o == null && c != null && Math.abs(r.width - c) < k(t) && Q()) {
      const l = W(a);
      if (l != null && l.poleLocation === V.None && n.width < (l.bbox[2] - l.bbox[0]) / 2) return On(n, t) || r;
    }
    return r;
  }
  const f = n.clone().normalize();
  if (f.length === 1 && n.xmax < o && n.xmax - o / 2 > k(a)) {
    const { xmin: r, xmax: l } = n;
    for (let M = 0; M <= e; M++) {
      const p = M === 0 ? r : -o / 2, x = M === e ? l - o * M : o / 2;
      f[M] = new A({ xmin: p, xmax: x, ymin: n.ymin, ymax: n.ymax, spatialReference: a });
    }
  }
  return gn(f.map((r) => fn(r, t, i, s)).filter(Pn));
}
function Yn(n, t, i) {
  if (n.type === "extent") {
    const { xmin: s, ymin: a, xmax: e, ymax: o, spatialReference: c } = n;
    n = new mn({ rings: [[[s, o], [e, o], [e, a], [s, a], [s, o]]], spatialReference: c });
  }
  return n.spatialReference.equals(t) ? n : (L(n.spatialReference, t, i), $(n, t, i));
}
function On(n, t) {
  const i = C(t);
  if (i == null) return null;
  let { xmin: s, ymin: a, xmax: e, ymax: o } = n;
  const c = n.spatialReference, f = new mn({ spatialReference: c, rings: [[[s, a], [e, a], [e, o], [s, o], [s, a]]] }), r = $(f, t);
  if (r.rings.length !== 2 || !r.rings[0].length || !r.rings[1].length) return null;
  const { rings: l } = r, M = k(c), p = new A({ spatialReference: t });
  for (let x = 0; x < 2; x++) {
    s = e = l[x][0][0], a = o = l[x][0][1];
    for (let m = 0; m < l[x].length; m++) s = s > l[x][m][0] ? l[x][m][0] : s, e = e < l[x][m][0] ? l[x][m][0] : e, a = a > l[x][m][1] ? l[x][m][1] : a, o = o < l[x][m][1] ? l[x][m][1] : o;
    if (x === 0) p.ymin = a, p.ymax = o, p.xmin = s, p.xmax = e;
    else if (p.ymin = Math.min(p.ymin, a), p.ymax = Math.max(p.ymax, o), Math.abs(e - i / 2) < M) p.xmin = s, p.xmax = p.xmax + i;
    else {
      if (!(Math.abs(s + i / 2) < M)) return null;
      p.xmax = e + i;
    }
  }
  return p;
}
function fn(n, t, i = null, s = !0, a = !0) {
  const e = n.spatialReference;
  if (e.equals(t) || !t) return n;
  L(e, t, i);
  const o = $(n, t, i);
  if (a && t.isWebMercator && o && (o.ymax = Math.min(20037508342787e-6, o.ymax), o.ymin = Math.max(-20037508342787e-6, o.ymin), o.ymin >= o.ymax)) return null;
  if (!s || !o) return o;
  const c = q(e, !0), f = q(t, !0);
  if (c == null || f == null) return o;
  const r = k(e, 1e-3), l = k(e, Y), M = k(t, 1e-3);
  if (Math.abs(o.xmin - f[0]) < M && Math.abs(o.xmax - f[1]) < M) {
    const p = Math.abs(n.xmin - c[0]), x = Math.abs(c[1] - n.xmax);
    if (p < r && x > l) {
      o.xmin = f[0];
      const m = [];
      m.push(new G(n.xmax, n.ymin, e)), m.push(new G(n.xmax, (n.ymin + n.ymax) / 2, e)), m.push(new G(n.xmax, n.ymax, e));
      const g = m.map((u) => rn(u, t, i)).filter((u) => !isNaN(u?.x)).map((u) => u.x);
      o.xmax = Math.max.apply(null, g);
    }
    if (x < r && p > l) {
      o.xmax = f[1];
      const m = [];
      m.push(new G(n.xmin, n.ymin, e)), m.push(new G(n.xmin, (n.ymin + n.ymax) / 2, e)), m.push(new G(n.xmin, n.ymax, e));
      const g = m.map((u) => rn(u, t, i)).filter((u) => !isNaN(u?.x)).map((u) => u.x);
      o.xmin = Math.min.apply(null, g);
    }
  } else {
    const p = k(t, 1e-3);
    Math.abs(o.xmin - f[0]) < p && (o.xmin = f[0]), Math.abs(o.xmax - f[1]) < p && (o.xmax = f[1]);
  }
  return o;
}
function C(n, t = !1) {
  if (!n) return null;
  const i = t ? 20037508342787e-6 : 20037508342788905e-9;
  return n.isWebMercator ? 2 * i : n.wkid && n.isGeographic ? 360 : 2 * Cn[n.wkid] || null;
}
function q(n, t = !1) {
  if (n.isGeographic) return [-180, 180];
  const i = C(n, t);
  return i != null ? [-i / 2, i / 2] : null;
}
function un(n, t, i, s) {
  let a = (n - t) / i;
  return a - Math.floor(a) != 0 ? a = Math.floor(a) : s && (a -= 1), a;
}
function dn(n, t = !1) {
  const i = C(n.spatialReference);
  if (i == null) return 0;
  const s = t ? 0 : -(i / 2), a = k(n.spatialReference), e = !t && Math.abs(n.xmax - i / 2) < a ? i / 2 : n.xmax, o = !t && Math.abs(n.xmin + i / 2) < a ? -i / 2 : n.xmin;
  return un(e, s, i, !0) - un(o, s, i, !1);
}
function qn(n) {
  const t = n.storageInfo.origin.x, i = C(n.spatialReference, !0);
  if (i == null) return { originX: t, halfWorldWidth: null, pyramidsInfo: null };
  const s = i / 2, { nativePixelSize: a, storageInfo: e, extent: o } = n, { maximumPyramidLevel: c, blockWidth: f, pyramidScalingFactor: r } = e;
  let l = a.x;
  const M = [], p = n.transform != null && n.transform.type === "gcs-shift", x = t + (p ? 0 : s), m = p ? i - t : s - t;
  for (let g = 0; g <= c; g++) {
    const u = (o.xmax - t) / l / f, w = u - Math.floor(u) == 0 ? u : Math.ceil(u), y = m / l / f, h = y - Math.floor(y) == 0 ? y : Math.ceil(y), d = Math.floor(x / l / f), R = Math.round(x / l) % f, b = (f - Math.round(m / l) % f) % f;
    M.push({ resolutionX: l, blockWidth: f, datasetColumnCount: w, worldColumnCountFromOrigin: h, leftMargin: R, rightPadding: b, originColumnOffset: d }), l *= r;
  }
  return { originX: t, halfWorldWidth: s, pyramidsInfo: M, hasGCSSShiftTransform: p };
}
function In(n) {
  if (!n || n.isGeographic) return n;
  const t = String(n.wkid || n.wkt2 || n.wkt);
  let i;
  return D.has(t) ? i = D.get(t) : (i = (n.wkid ? v.coordsys(n.wkid) : v.fromString(T.PE_TYPE_PROJCS, n.wkt2 || n.wkt)).getGeogcs().getCode(), D.set(t, i)), new vn({ wkid: i });
}
function Jn(n) {
  const t = n.isAdaptive && n.spacing == null;
  let i = n.spacing || [B, B], s = H(n), a = { cols: s.size[0] + 1, rows: s.size[1] + 1 };
  const e = s.outofBoundPointCount > 0 && s.outofBoundPointCount < s.offsets.length / 2;
  let o = s.outofBoundPointCount === s.offsets.length / 2 || t && e ? [0, 0] : sn(s.offsets, a, i, X);
  const c = (o[0] + o[1]) / 2, f = n.projectedExtent.spatialReference, r = n.srcBufferExtent.spatialReference;
  if (t && (e || c > X) && (hn(f, r, n.datumTransformation) && (f.isGeographic || W(f)), i = [F, F], s = H({ ...n, spacing: i }), a = { cols: s.size[0] + 1, rows: s.size[1] + 1 }, o = sn(s.offsets, a, i, X)), s.error = o, i[0] > 1 && (s.coefficients = xn(s.offsets, a, e)), n.includeGCSGrid && !f.isGeographic && !f.isWebMercator) if (r.isGeographic) s.gcsGrid = { offsets: s.offsets, coefficients: s.coefficients, spacing: i };
  else {
    const l = W(f);
    if (l != null && !l.isEnvelope) {
      const M = In(f), p = yn(n.projectedExtent, M), { offsets: x } = H({ ...n, srcBufferExtent: p, spacing: i }), m = xn(x, a, e);
      s.gcsGrid = { offsets: x, coefficients: m, spacing: i };
    }
  }
  return s;
}
function H(n) {
  const { projectedExtent: t, srcBufferExtent: i, pixelSize: s, datumTransformation: a, rasterTransform: e } = n, o = t.spatialReference, c = i.spatialReference, f = L(o, c), { xmin: r, ymin: l, xmax: M, ymax: p } = t, x = C(c), m = x != null && (n.hasWrapAround || e?.type === "gcs-shift"), g = n.spacing || [B, B], u = g[0] * s.x, w = g[1] * s.y, y = g[0] === 1, h = Math.ceil((M - r) / u - 0.1 / g[0]) + (y ? 0 : 1), d = Math.ceil((p - l) / w - 0.1 / g[1]) + (y ? 0 : 1), R = zn({ cols: h, rows: d, xmin: r, ymax: p, xres: u, yres: w, inSR: o, outSR: c, datumTransformation: a, preferPE: g[0] <= F, usePixelCenter: y }), b = [];
  let N, P = 0;
  const E = y ? -1 : NaN, { xmin: z, xmax: I, ymax: J, width: Mn, height: wn } = i, Rn = k(c, Y), bn = x != null && z > 0 && I > x / 2;
  let nn = !1;
  if (f) {
    const _ = W(o);
    nn = _ != null && _.poleLocation > 0;
  }
  for (let _ = 0; _ < h; _++) {
    const U = [];
    for (let j = 0; j < d; j++) {
      let S = R[_ * d + j];
      if (m && S[0] > I && S[0] > x / 2 - Rn ? S[0] -= x : m && _ === 0 && S[0] < 0 && bn && !e && (S[0] += x), !S || isNaN(S[0]) || isNaN(S[1])) b.push(E), b.push(E), U.push(null), P++;
      else {
        if (e) {
          const tn = e.inverseTransform(new G({ x: S[0], y: S[1], spatialReference: c }));
          S = [tn.x, tn.y];
        }
        U.push(S), _ > 0 && m && N[j] && S[0] < N[j][0] && (S[0] += x, nn && S[0] > I && S[0] > x && (S[0] -= x)), b.push((S[0] - z) / Mn), b.push((J - S[1]) / wn);
      }
    }
    N = U;
  }
  return { offsets: b, error: null, coefficients: null, outofBoundPointCount: P, spacing: g, size: y ? [h, d] : [h - 1, d - 1] };
}
function xn(n, t, i) {
  const { cols: s, rows: a } = t, e = new Float32Array((s - 1) * (a - 1) * 2 * 6), o = new Float32Array([-0, -1, 1, -1, 1, -0, 1, -0, -0]), c = new Float32Array([-1, 1, 0, 0, -1, 1, 1, 0, 0]);
  for (let f = 0; f < s - 1; f++) {
    for (let r = 0; r < a - 1; r++) {
      let l = f * a * 2 + 2 * r;
      const M = n[l], p = n[l + 1], x = n[l + 2], m = n[l + 3];
      l += 2 * a;
      const g = n[l], u = n[l + 1], w = n[l + 2], y = n[l + 3];
      let h = 0, d = 12 * (r * (s - 1) + f);
      for (let R = 0; R < 3; R++) e[d++] = o[h++] * M + o[h++] * x + o[h++] * w;
      h = 0;
      for (let R = 0; R < 3; R++) e[d++] = o[h++] * p + o[h++] * m + o[h++] * y;
      h = 0;
      for (let R = 0; R < 3; R++) e[d++] = c[h++] * M + c[h++] * g + c[h++] * w;
      h = 0;
      for (let R = 0; R < 3; R++) e[d++] = c[h++] * p + c[h++] * u + c[h++] * y;
    }
    if (i) for (let r = 0; r < e.length; r++) isNaN(e[r]) && (e[r] = -1);
  }
  return e;
}
function jn(n, t) {
  const i = n.clone().normalize();
  return i.length === 1 ? i[0] : gn(i, t);
}
function Un(n) {
  const { spatialReference: t } = n, i = Gn(t);
  if (!i) return n;
  const [s, a] = i.valid, e = a - s;
  let o = 0;
  if (n.xmin < s) {
    const c = s - n.xmin;
    o = Math.ceil(c / e);
  } else if (n.xmin > a) {
    const c = n.xmin - a;
    o = -Math.ceil(c / e);
  }
  return new A({ spatialReference: n.spatialReference, xmin: n.xmin + o * e, ymin: n.ymin, xmax: n.xmax + o * e, ymax: n.ymax });
}
function Xn(n, t, i) {
  const { storageInfo: s, pixelSize: a } = t;
  let e = 0, o = !1;
  const { pyramidResolutions: c } = s, f = s.tileInfo.format?.toLowerCase() === "mixed" ? Math.max(1, Math.min(3, s.tileInfo.dpi / 96)) : 1, r = (n.x + n.y) / 2 / f;
  if (c != null && c.length) {
    const m = c[c.length - 1], g = (m.x + m.y) / 2, u = (a.x + a.y) / 2;
    if (r <= u) e = 0;
    else if (r >= g) e = c.length, o = r / g > 8;
    else {
      let y, h = u;
      for (let d = 1; d <= c.length; d++) {
        if (y = (c[d - 1].x + c[d - 1].y) / 2, r <= y) {
          r === y ? e = d : i === "down" ? (e = d - 1, o = r / h > 8) : e = i === "up" || r - h > y - r || r / h > 2 ? d : d - 1;
          break;
        }
        h = y;
      }
    }
    const w = e === 0 ? a : c[e - 1];
    return o && Math.min(w.x, w.y) * O(t.spatialReference) > 19567 && (o = !1), { pyramidLevel: e, pyramidResolution: new G({ x: w.x, y: w.y, spatialReference: t.spatialReference }), excessiveReading: o };
  }
  const l = Math.log(n.x / a.x) / Math.LN2, M = Math.log(n.y / a.y) / Math.LN2, p = t.storageInfo.maximumPyramidLevel || 0;
  e = i === "down" ? Math.floor(Math.min(l, M)) : i === "up" ? Math.ceil(Math.max(l, M)) : Math.round((l + M) / 2), e < 0 ? e = 0 : e > p && (o = e > p + 3, e = p);
  const x = 2 ** e;
  return { pyramidLevel: e, pyramidResolution: new G({ x: x * t.nativePixelSize.x, y: x * t.nativePixelSize.y, spatialReference: t.spatialReference }), excessiveReading: o };
}
function An(n, t) {
  const { pixelSize: i, extent: s } = n, a = _n(s, t, !1);
  return yn(jn(s, (i.x + i.y) / 16), t, a);
}
function Kn(n, t, i) {
  const s = i?.tileSize, a = i?.alignGlobalDatasetWithAGOL, { extent: e, spatialReference: o, pixelSize: c } = n, f = an(new G({ x: c.x, y: c.y, spatialReference: o }), t, e);
  if (f == null) return { projectedPixelSize: null, scales: null, srcResolutions: null, isCustomTilingScheme: !1 };
  const r = (f.x + f.y) / 2, l = O(t), M = r * l * 96 * 39.37, p = t.isGeographic ? 256 / s * 2958287637958547e-7 : 256 / s * 591657527591555e-6;
  let x = n.dataType === "vector-magdir" || n.dataType === "vector-uv";
  const m = An(n, t), g = Math.min(Math.ceil(Math.log(Math.min(n.width, n.height) / 32) / Math.LN2), Math.ceil(Math.log(p / 2 / M) / Math.LN2));
  if (!x && a && (t.isGeographic || t.isWebMercator)) {
    const P = C(t);
    if (x = dn(m) > 0 || P != null && m.width > P / 4, !x && P != null) {
      let E = -1;
      if (g < 3) E = 2 ** g * r * s;
      else if (n.storageInfo) {
        const { maximumPyramidLevel: I = 0, pyramidScalingFactor: J = 2 } = n.storageInfo;
        E = J ** I * r * s;
      }
      const z = Math.ceil(P / E);
      x = z === 1 || z === 2 && P / 2 - m.xmax < E;
    }
  }
  let u, w = M;
  const y = 1.001, h = Math.min(2, Math.max(1.414, n.storageInfo?.pyramidScalingFactor || 2));
  if (x) {
    w = p;
    const P = t.isGeographic ? 1341104507446289e-21 : 0.29858214164761665, E = P * (96 * l * 39.37), z = t.isGeographic ? 4326 : 3857;
    u = an(new G({ x: P, y: P, spatialReference: { wkid: z } }), o, m), u.x *= w / E, u.y *= w / E;
  } else {
    u = { x: c.x, y: c.y };
    let P = 0;
    for (; w < p * (y / 2) && P < g; ) P++, w *= h, u.x *= h, u.y *= h;
    Math.max(w, p) / Math.min(w, p) <= y && (w = p);
  }
  const d = [w], R = [{ x: u.x, y: u.y }], b = 70.5310735, N = Math.min(b, M) / y;
  for (; w >= N; ) w /= h, u.x /= h, u.y /= h, d.push(w), R.push({ x: u.x, y: u.y });
  return { projectedPixelSize: f, scales: d, srcResolutions: R, isCustomTilingScheme: !x };
}
export {
  an as C,
  C as D,
  yn as J,
  hn as M,
  Fn as T,
  Yn as U,
  dn as V,
  qn as Z,
  Kn as a,
  Jn as e,
  rn as j,
  Un as o,
  Xn as r,
  An as s,
  _n as v
};
//# sourceMappingURL=rasterProjectionHelper-DRYmQmjM.js.map
