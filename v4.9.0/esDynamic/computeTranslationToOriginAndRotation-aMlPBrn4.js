import { bh as A, hf as S, hg as T, hh as k, eB as N, hi as L, hj as _, hk as F, hl as p, hm as I, hn as R, ho as e, J as W, hp as $, hq as c, hr as G, hs as H, ci as M } from "./main-DIdq27YS.js";
const m = new A(S), h = new A(T), f = new A(k);
new A(N);
function q(s) {
  const u = P.get(s);
  if (u) return u;
  let n = m;
  if (s) if (s === h) n = h;
  else if (s === f) n = f;
  else {
    const l = s.wkid, o = s.latestWkid;
    if (l != null || o != null) L(l) || L(o) ? n = h : (_(l) || _(o)) && (n = f);
    else {
      const a = s.wkt2 ?? s.wkt;
      if (a) {
        const r = a.toUpperCase();
        r === U ? n = h : r === B && (n = f);
      }
    }
  }
  return P.set(s, n), n;
}
const P = /* @__PURE__ */ new Map(), U = h.wkt.toUpperCase(), B = f.wkt.toUpperCase();
function O(s, u, n) {
  const l = Math.sin(s), o = Math.cos(s), a = Math.sin(u), r = Math.cos(u), t = n;
  return t[0] = -l, t[4] = -a * o, t[8] = r * o, t[12] = 0, t[1] = o, t[5] = -a * l, t[9] = r * l, t[13] = 0, t[2] = 0, t[6] = r, t[10] = a, t[14] = 0, t[3] = 0, t[7] = 0, t[11] = 0, t[15] = 1, t;
}
function d(s, u, n) {
  return O(s, u, n), F(n, n), n;
}
function b(s, u, n, l) {
  if (s == null || l == null) return !1;
  const o = p(s, I), a = p(l, R);
  if (o === a && !w(a) && (o !== e.UNKNOWN || W(s, l))) return $(n, u), !0;
  if (w(a)) {
    const r = c[o][e.LON_LAT], t = c[e.LON_LAT][a];
    return r != null && t != null && (r(u, 0, i, 0), t(i, 0, E, 0), O(C * i[0], C * i[1], n), n[12] = E[0], n[13] = E[1], n[14] = E[2], !0);
  }
  if ((a === e.WEB_MERCATOR || a === e.PLATE_CARREE || a === e.WGS84) && (o === e.WGS84 || o === e.CGCS2000 && a === e.PLATE_CARREE || o === e.SPHERICAL_ECEF || o === e.WEB_MERCATOR)) {
    const r = c[o][e.LON_LAT], t = c[e.LON_LAT][a];
    return r != null && t != null && (r(u, 0, i, 0), t(i, 0, E, 0), o === e.SPHERICAL_ECEF ? d(C * i[0], C * i[1], n) : G(n), n[12] = E[0], n[13] = E[1], n[14] = E[2], !0);
  }
  return !1;
}
function w(s) {
  return s === e.SPHERICAL_ECEF || s === e.SPHERICAL_MARS_PCPF || s === e.SPHERICAL_MOON_PCPF;
}
const C = H(1), i = M(), E = M();
export {
  b as R,
  q as a
};
//# sourceMappingURL=computeTranslationToOriginAndRotation-aMlPBrn4.js.map
