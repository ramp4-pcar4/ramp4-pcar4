import { o as q } from "./floatRGBA-D5KRt9lu.js";
import { av as G } from "./main-DIdq27YS.js";
import { t as U } from "./UpdateTracking2D-D4ExNx8R.js";
import { $ as V } from "./definitions-7ZaZRHRo.js";
function $(n) {
  switch (n.type) {
    case "CIMPointSymbol": {
      const o = n.symbolLayers;
      if (!o || o.length !== 1) return null;
      const r = o[0];
      return r.type !== "CIMVectorMarker" ? null : $(r);
    }
    case "CIMVectorMarker": {
      const o = n.markerGraphics;
      if (!o || o.length !== 1) return null;
      const r = o[0];
      if (!r) return null;
      const t = r.geometry;
      if (!t) return null;
      const i = r.symbol;
      return !i || i.type !== "CIMPolygonSymbol" && i.type !== "CIMLineSymbol" || i.symbolLayers?.some((l) => !!l.effects) ? null : { type: "sdf", geom: t, asFill: i.type === "CIMPolygonSymbol" };
    }
  }
}
function j(n) {
  return n ? n.rings ? n.rings : n.paths ? n.paths : n.xmin !== void 0 && n.ymin !== void 0 && n.xmax !== void 0 && n.ymax !== void 0 ? [[[n.xmin, n.ymin], [n.xmin, n.ymax], [n.xmax, n.ymax], [n.xmax, n.ymin], [n.xmin, n.ymin]]] : null : null;
}
function z(n) {
  let o = 1 / 0, r = -1 / 0, t = 1 / 0, i = -1 / 0;
  for (const l of n) for (const e of l) e[0] < o && (o = e[0]), e[0] > r && (r = e[0]), e[1] < t && (t = e[1]), e[1] > i && (i = e[1]);
  return new U(o, t, r - o, i - t);
}
function A(n) {
  let o = 1 / 0, r = -1 / 0, t = 1 / 0, i = -1 / 0;
  for (const l of n) for (const e of l) e[0] < o && (o = e[0]), e[0] > r && (r = e[0]), e[1] < t && (t = e[1]), e[1] > i && (i = e[1]);
  return [o, t, r, i];
}
function O(n) {
  return n ? n.rings ? A(n.rings) : n.paths ? A(n.paths) : G(n) ? [n.xmin, n.ymin, n.xmax, n.ymax] : null : null;
}
function Q(n, o, r, t, i) {
  const [l, e, f, u] = n;
  if (f < l || u < e) return [0, 0, 0, 1];
  const a = f - l, s = u - e, m = 128, c = V, M = Math.floor(0.5 * (0.5 * m - c)), h = (m - 2 * (M + c)) / Math.max(a, s), g = Math.round(a * h) + 2 * M, d = Math.round(s * h) + 2 * M;
  let b = 1;
  o && (b = d / h / (o.ymax - o.ymin));
  let x = 0, p = 0, y = 1;
  t && (i ? o && r && o.ymax - o.ymin > 0 && (y = (o.xmax - o.xmin) / (o.ymax - o.ymin), x = t.x / (r * y), p = t.y / r) : (x = t.x, p = t.y)), o && (x = 0.5 * (o.xmax + o.xmin) + x * (o.xmax - o.xmin), p = 0.5 * (o.ymax + o.ymin) + p * (o.ymax - o.ymin)), x -= l, p -= e, x *= h, p *= h, x += M, p += M;
  let w = x / g - 0.5, v = p / d - 0.5;
  return i && r && (w *= r * y, v *= r), [b, w, v, y];
}
function R(n) {
  const o = j(n.geom), r = z(o), t = 128, i = V, l = Math.floor(0.5 * (0.5 * t - i)), e = (t - 2 * (l + i)) / Math.max(r.width, r.height), f = Math.round(r.width * e) + 2 * l, u = Math.round(r.height * e) + 2 * l, a = [];
  for (const m of o) if (m && m.length > 1) {
    const c = [];
    for (const M of m) {
      let [h, g] = M;
      h -= r.x, g -= r.y, h *= e, g *= e, h += l - 0.5, g += l - 0.5, n.asFill ? c.push([h, g]) : c.push([Math.round(h), Math.round(g)]);
    }
    if (n.asFill) {
      const M = c.length - 1;
      c[0][0] === c[M][0] && c[0][1] === c[M][1] || c.push(c[0]);
    }
    a.push(c);
  }
  const s = B(a, f, u, l);
  return n.asFill && D(a, f, u, l, s), [E(s, l), f, u];
}
function B(n, o, r, t) {
  const i = o * r, l = new Array(i), e = t * t + 1;
  for (let f = 0; f < i; ++f) l[f] = e;
  for (const f of n) {
    const u = f.length;
    for (let a = 1; a < u; ++a) {
      const s = f[a - 1], m = f[a];
      let c, M, h, g;
      s[0] < m[0] ? (c = s[0], M = m[0]) : (c = m[0], M = s[0]), s[1] < m[1] ? (h = s[1], g = m[1]) : (h = m[1], g = s[1]);
      let d = Math.floor(c) - t, b = Math.floor(M) + t, x = Math.floor(h) - t, p = Math.floor(g) + t;
      d < 0 && (d = 0), b > o && (b = o), x < 0 && (x = 0), p > r && (p = r);
      const y = m[0] - s[0], w = m[1] - s[1], v = y * y + w * w;
      for (let C = d; C < b; C++) for (let I = x; I < p; I++) {
        let F, S, k = (C - s[0]) * y + (I - s[1]) * w;
        k < 0 ? (F = s[0], S = s[1]) : k > v ? (F = m[0], S = m[1]) : (k /= v, F = s[0] + k * y, S = s[1] + k * w);
        const L = (C - F) * (C - F) + (I - S) * (I - S), P = (r - I - 1) * o + C;
        L < l[P] && (l[P] = L);
      }
    }
  }
  for (let f = 0; f < i; ++f) l[f] = Math.sqrt(l[f]);
  return l;
}
function D(n, o, r, t, i) {
  for (const l of n) {
    const e = l.length;
    for (let f = 1; f < e; ++f) {
      const u = l[f - 1], a = l[f];
      let s, m, c, M;
      u[0] < a[0] ? (s = u[0], m = a[0]) : (s = a[0], m = u[0]), u[1] < a[1] ? (c = u[1], M = a[1]) : (c = a[1], M = u[1]);
      let h = Math.floor(s), g = Math.floor(m) + 1, d = Math.floor(c), b = Math.floor(M) + 1;
      h < t && (h = t), g > o - t && (g = o - t), d < t && (d = t), b > r - t && (b = r - t);
      for (let x = d; x < b; ++x) {
        if (u[1] > x == a[1] > x) continue;
        const p = (r - x - 1) * o;
        for (let y = h; y < g; ++y) y < (a[0] - u[0]) * (x - u[1]) / (a[1] - u[1]) + u[0] && (i[p + y] = -i[p + y]);
        for (let y = t; y < h; ++y) i[p + y] = -i[p + y];
      }
    }
  }
}
function E(n, o) {
  const r = 2 * o, t = n.length, i = new Uint8Array(4 * t);
  for (let l = 0; l < t; ++l) {
    const e = 0.5 - n[l] / r;
    q(e, i, 4 * l);
  }
  return i;
}
export {
  R as a,
  $ as e,
  O as f,
  Q as m
};
//# sourceMappingURL=SDFHelper-ngXxm6iq.js.map
