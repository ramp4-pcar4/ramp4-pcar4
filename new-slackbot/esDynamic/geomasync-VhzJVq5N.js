import { a3 as cn, a2 as E, eJ as d, aU as j, aS as F, a6 as b, aR as O, aT as W, eK as B, Q, fl as fn, ba as ln } from "./main-BpIyUAdL.js";
import { T as o, a as h, X as V, t as H, k as K, d as M, b as s, r as u, U as P, Q as I, Z as L, B as J, v as w, ad as X, ae as D, af as k, h as x, S as on, ag as dn, ah as wn, E as q, ai as hn, N, q as S, aj as mn, ak as yn, x as Y, al as pn, am as U } from "./arcadeUtils-DfLjyMt0.js";
import { c as A, r as T, b as p } from "./TimeOnly-CmHaEoJc.js";
import { l as G } from "./portalUtils-C6p1SMQj.js";
import { disjoint as vn, intersects as gn, touches as Pn, crosses as In, within as An, contains as Fn, overlaps as Rn, equals as xn, relate as bn, intersect as Nn, union as Sn, difference as On, symmetricDifference as jn, clip as Dn, cut as Tn, planarArea as _, geodesicArea as $, planarLength as Z, geodesicLength as z, distance as Ln, densify as nn, geodesicDensify as en, generalize as Jn, buffer as Un, geodesicBuffer as Zn, offset as Cn, rotate as rn, simplify as tn, isSimple as Mn, convexHull as kn, nearestCoordinate as qn, nearestVertex as zn } from "./geometryEngineAsync-B7TshLfJ.js";
async function an(a, e, r) {
  if (!cn?.findCredential(a.restUrl)) return null;
  if (a.loadStatus === "loaded" && e === "" && a.user?.sourceJSON && r === !1) return a.user.sourceJSON;
  const f = { responseType: "json", query: { f: "json" } };
  if (r && (f.query.returnUserLicenseTypeExtensions = !0), e === "") {
    const t = await E(a.restUrl + "/community/self", f);
    if (t.data) {
      const i = t.data;
      if (i?.username) return i;
    }
    return null;
  }
  const n = await E(a.restUrl + "/community/users/" + e, f);
  if (n.data) {
    const t = n.data;
    return t.error ? null : t;
  }
  return null;
}
function sn(a) {
  return fn.indexOf("4.") === 0 ? O.fromExtent(a) : new O({ spatialReference: a.spatialReference, rings: [[[a.xmin, a.ymin], [a.xmin, a.ymax], [a.xmax, a.ymax], [a.xmax, a.ymin], [a.xmin, a.ymin]]] });
}
function R(a, e, r) {
  if (h(a, 2, 2, e, r), !(a[0] instanceof d && a[1] instanceof d)) {
    if (!(a[0] instanceof d && a[1] === null)) {
      if (!(a[1] instanceof d && a[0] === null)) {
        if (a[0] !== null || a[1] !== null) throw new s(e, u.InvalidParameter, r);
      }
    }
  }
}
async function un(a, e) {
  if (a.type !== "polygon" && a.type !== "polyline" && a.type !== "extent") return 0;
  let r = 1;
  (a.spatialReference.vcsWkid || a.spatialReference.latestVcsWkid) && (r = pn(a.spatialReference) / ln(a.spatialReference));
  let c = 0;
  if (a.type === "polyline") for (const n of a.paths) for (let t = 1; t < n.length; t++) c += U(n[t], n[t - 1], r);
  else if (a.type === "polygon") for (const n of a.rings) {
    for (let t = 1; t < n.length; t++) c += U(n[t], n[t - 1], r);
    (n[0][0] !== n[n.length - 1][0] || n[0][1] !== n[n.length - 1][1] || n[0][2] !== void 0 && n[0][2] !== n[n.length - 1][2]) && (c += U(n[0], n[n.length - 1], r));
  }
  else a.type === "extent" && (c += 2 * U([a.xmin, a.ymin, 0], [a.xmax, a.ymin, 0], r), c += 2 * U([a.xmin, a.ymin, 0], [a.xmin, a.ymax, 0], r), c *= 2, c += 4 * Math.abs(w(a.zmax, 0) * r - w(a.zmin, 0) * r));
  const f = new F({ hasZ: !1, hasM: !1, spatialReference: a.spatialReference, paths: [[0, 0], [0, c]] });
  return Z(f, e);
}
function Hn(a) {
  a.mode === "async" && (a.functions.disjoint = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (R(n = o(n), e, r), n[0] === null || n[1] === null || vn(n[0], n[1])));
  }, a.functions.intersects = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (R(n = o(n), e, r), n[0] !== null && n[1] !== null && gn(n[0], n[1])));
  }, a.functions.touches = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (R(n = o(n), e, r), n[0] !== null && n[1] !== null && Pn(n[0], n[1])));
  }, a.functions.crosses = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (R(n = o(n), e, r), n[0] !== null && n[1] !== null && In(n[0], n[1])));
  }, a.functions.within = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (R(n = o(n), e, r), n[0] !== null && n[1] !== null && An(n[0], n[1])));
  }, a.functions.contains = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (R(n = o(n), e, r), n[0] !== null && n[1] !== null && Fn(n[0], n[1])));
  }, a.functions.overlaps = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (R(n = o(n), e, r), n[0] !== null && n[1] !== null && Rn(n[0], n[1])));
  }, a.functions.equals = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (h(n, 2, 2, e, r), n[0] === n[1] || (n[0] instanceof d && n[1] instanceof d ? xn(n[0], n[1]) : (V(n[0]) && V(n[1]) || !!(H(n[0]) && H(n[1]) || K(n[0]) && K(n[1]))) && n[0].equals(n[1]))));
  }, a.functions.relate = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 3, 3, e, r), n[0] instanceof d && n[1] instanceof d) return bn(n[0], n[1], M(n[2]));
      if (n[0] instanceof d && n[1] === null || n[1] instanceof d && n[0] === null || n[0] === null && n[1] === null) return !1;
      throw new s(e, u.InvalidParameter, r);
    });
  }, a.functions.intersection = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (R(n = o(n), e, r), n[0] === null || n[1] === null ? null : Nn(n[0], n[1])));
  }, a.functions.union = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      const t = [];
      if ((n = o(n)).length === 0) throw new s(e, u.WrongNumberOfParameters, r);
      if (n.length === 1) if (P(n[0])) {
        const i = o(n[0]);
        for (let l = 0; l < i.length; l++) if (i[l] !== null) {
          if (!(i[l] instanceof d)) throw new s(e, u.InvalidParameter, r);
          t.push(i[l]);
        }
      } else {
        if (!I(n[0])) {
          if (n[0] instanceof d) return L(A(n[0]), e.spatialReference);
          if (n[0] === null) return null;
          throw new s(e, u.InvalidParameter, r);
        }
        {
          const i = o(n[0].toArray());
          for (let l = 0; l < i.length; l++) if (i[l] !== null) {
            if (!(i[l] instanceof d)) throw new s(e, u.InvalidParameter, r);
            t.push(i[l]);
          }
        }
      }
      else for (let i = 0; i < n.length; i++) if (n[i] !== null) {
        if (!(n[i] instanceof d)) throw new s(e, u.InvalidParameter, r);
        t.push(n[i]);
      }
      return t.length === 0 ? null : Sn(t);
    });
  }, a.functions.difference = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (R(n = o(n), e, r), n[0] !== null && n[1] === null ? A(n[0]) : n[0] === null ? null : On(n[0], n[1])));
  }, a.functions.symmetricdifference = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (R(n = o(n), e, r), n[0] === null && n[1] === null ? null : n[0] === null ? A(n[1]) : n[1] === null ? A(n[0]) : jn(n[0], n[1])));
  }, a.functions.clip = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), !(n[1] instanceof j) && n[1] !== null) throw new s(e, u.InvalidParameter, r);
      if (n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      return n[1] === null ? null : Dn(n[0], n[1]);
    });
  }, a.functions.cut = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), !(n[1] instanceof F) && n[1] !== null) throw new s(e, u.InvalidParameter, r);
      if (n[0] === null) return [];
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      return n[1] === null ? [A(n[0])] : Tn(n[0], n[1]);
    });
  }, a.functions.area = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (h(n, 1, 2, e, r), (n = o(n))[0] === null) return 0;
      if (J(n[0])) {
        const t = await n[0].sumArea(T(w(n[1], -1)), !1, e.abortSignal);
        if (e.abortSignal.aborted) throw new s(e, u.Cancelled, r);
        return t;
      }
      if (P(n[0]) || I(n[0])) {
        const t = X(n[0], e.spatialReference);
        return t === null ? 0 : _(t, T(w(n[1], -1)));
      }
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      return _(n[0], T(w(n[1], -1)));
    });
  }, a.functions.areageodetic = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (h(n, 1, 2, e, r), (n = o(n))[0] === null) return 0;
      if (J(n[0])) {
        const t = await n[0].sumArea(T(w(n[1], -1)), !0, e.abortSignal);
        if (e.abortSignal.aborted) throw new s(e, u.Cancelled, r);
        return t;
      }
      if (P(n[0]) || I(n[0])) {
        const t = X(n[0], e.spatialReference);
        return t === null ? 0 : $(t, T(w(n[1], -1)));
      }
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      return $(n[0], T(w(n[1], -1)));
    });
  }, a.functions.length = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (h(n, 1, 2, e, r), (n = o(n))[0] === null) return 0;
      if (J(n[0])) {
        const t = await n[0].sumLength(p(w(n[1], -1)), !1, e.abortSignal);
        if (e.abortSignal.aborted) throw new s(e, u.Cancelled, r);
        return t;
      }
      if (P(n[0]) || I(n[0])) {
        const t = D(n[0], e.spatialReference);
        return t === null ? 0 : Z(t, p(w(n[1], -1)));
      }
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      return Z(n[0], p(w(n[1], -1)));
    });
  }, a.functions.length3d = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (h(n, 1, 2, e, r), (n = o(n))[0] === null) return 0;
      if (P(n[0]) || I(n[0])) {
        const t = D(n[0], e.spatialReference);
        return t === null ? 0 : t.hasZ === !0 ? un(t, p(w(n[1], -1))) : Z(t, p(w(n[1], -1)));
      }
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      return n[0].hasZ === !0 ? un(n[0], p(w(n[1], -1))) : Z(n[0], p(w(n[1], -1)));
    });
  }, a.functions.lengthgeodetic = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (h(n, 1, 2, e, r), (n = o(n))[0] === null) return 0;
      if (J(n[0])) {
        const t = await n[0].sumLength(p(w(n[1], -1)), !0, e.abortSignal);
        if (e.abortSignal.aborted) throw new s(e, u.Cancelled, r);
        return t;
      }
      if (P(n[0]) || I(n[0])) {
        const t = D(n[0], e.spatialReference);
        return t === null ? 0 : z(t, p(w(n[1], -1)));
      }
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      return z(n[0], p(w(n[1], -1)));
    });
  }, a.functions.distance = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      n = o(n), h(n, 2, 3, e, r);
      let t = n[0];
      (P(n[0]) || I(n[0])) && (t = k(n[0], e.spatialReference));
      let i = n[1];
      if ((P(n[1]) || I(n[1])) && (i = k(n[1], e.spatialReference)), !(t instanceof d)) throw new s(e, u.InvalidParameter, r);
      if (!(i instanceof d)) throw new s(e, u.InvalidParameter, r);
      return Ln(t, i, p(w(n[2], -1)));
    });
  }, a.functions.distancegeodetic = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      n = o(n), h(n, 2, 3, e, r);
      const t = n[0], i = n[1];
      if (!(t instanceof b)) throw new s(e, u.InvalidParameter, r);
      if (!(i instanceof b)) throw new s(e, u.InvalidParameter, r);
      const l = new F({ paths: [], spatialReference: t.spatialReference });
      return l.addPath([t, i]), z(l, p(w(n[2], -1)));
    });
  }, a.functions.densify = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 3, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      const t = x(n[1]);
      if (isNaN(t)) throw new s(e, u.InvalidParameter, r);
      if (t <= 0) throw new s(e, u.InvalidParameter, r);
      return n[0] instanceof O || n[0] instanceof F ? nn(n[0], t, p(w(n[2], -1))) : n[0] instanceof j ? nn(sn(n[0]), t, p(w(n[2], -1))) : n[0];
    });
  }, a.functions.densifygeodetic = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 3, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      const t = x(n[1]);
      if (isNaN(t)) throw new s(e, u.InvalidParameter, r);
      if (t <= 0) throw new s(e, u.InvalidParameter, r);
      return n[0] instanceof O || n[0] instanceof F ? en(n[0], t, p(w(n[2], -1))) : n[0] instanceof j ? en(sn(n[0]), t, p(w(n[2], -1))) : n[0];
    });
  }, a.functions.generalize = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 4, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      const t = x(n[1]);
      if (isNaN(t)) throw new s(e, u.InvalidParameter, r);
      return Jn(n[0], t, on(w(n[2], !0)), p(w(n[3], -1)));
    });
  }, a.functions.buffer = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 3, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      const t = x(n[1]);
      if (isNaN(t)) throw new s(e, u.InvalidParameter, r);
      return t === 0 ? A(n[0]) : Un(n[0], t, p(w(n[2], -1)));
    });
  }, a.functions.buffergeodetic = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 3, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      const t = x(n[1]);
      if (isNaN(t)) throw new s(e, u.InvalidParameter, r);
      return t === 0 ? A(n[0]) : Zn(n[0], t, p(w(n[2], -1)));
    });
  }, a.functions.offset = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 6, e, r), n[0] === null) return null;
      if (!(n[0] instanceof O || n[0] instanceof F)) throw new s(e, u.InvalidParameter, r);
      const t = x(n[1]);
      if (isNaN(t)) throw new s(e, u.InvalidParameter, r);
      const i = x(w(n[4], 10));
      if (isNaN(i)) throw new s(e, u.InvalidParameter, r);
      const l = x(w(n[5], 0));
      if (isNaN(l)) throw new s(e, u.InvalidParameter, r);
      return Cn(n[0], t, p(w(n[2], -1)), M(w(n[3], "round")).toLowerCase(), i, l);
    });
  }, a.functions.rotate = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      n = o(n), h(n, 2, 3, e, r);
      let t = n[0];
      if (t === null) return null;
      if (!(t instanceof d)) throw new s(e, u.InvalidParameter, r);
      t instanceof j && (t = O.fromExtent(t));
      const i = x(n[1]);
      if (isNaN(i)) throw new s(e, u.InvalidParameter, r);
      const l = w(n[2], null);
      if (l === null) return rn(t, i);
      if (l instanceof b) return rn(t, i, l);
      throw new s(e, u.InvalidParameter, r);
    });
  }, a.functions.centroid = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 1, 1, e, r), n[0] === null) return null;
      let t = n[0];
      if ((P(n[0]) || I(n[0])) && (t = k(n[0], e.spatialReference)), t === null) return null;
      if (!(t instanceof d)) throw new s(e, u.InvalidParameter, r);
      return t instanceof b ? L(A(n[0]), e.spatialReference) : t instanceof O ? t.centroid : t instanceof F ? dn(t) : t instanceof W ? wn(t) : t instanceof j ? t.center : null;
    });
  }, a.functions.measuretocoordinate = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), n[0] === null) return null;
      let t = n[0];
      if ((P(n[0]) || I(n[0])) && (t = D(n[0], e.spatialReference)), t === null) return null;
      if (!(t instanceof d)) throw new s(e, u.InvalidParameter, r);
      if (!(t instanceof F)) throw new s(e, u.InvalidParameter, r);
      if (q(n[1] === !1)) throw new s(e, u.InvalidParameter, r);
      const i = hn(t, n[1]);
      return i ? N.convertObjectToArcadeDictionary(i, S(e), !1, !0) : null;
    });
  }, a.functions.pointtocoordinate = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), n[0] === null) return null;
      let t = n[0];
      if ((P(n[0]) || I(n[0])) && (t = D(n[0], e.spatialReference)), t === null) return null;
      if (!(t instanceof d)) throw new s(e, u.InvalidParameter, r);
      if (!(t instanceof F)) throw new s(e, u.InvalidParameter, r);
      const i = n[1];
      if (i === null) return null;
      if (!(i instanceof b)) throw new s(e, u.InvalidParameter, r);
      if (q(n[1] === !1)) throw new s(e, u.InvalidParameter, r);
      const l = mn(t, i);
      return l ? N.convertObjectToArcadeDictionary(l, S(e), !1, !0) : null;
    });
  }, a.functions.distancetocoordinate = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), n[0] === null) return null;
      let t = n[0];
      if ((P(n[0]) || I(n[0])) && (t = D(n[0], e.spatialReference)), t === null) return null;
      if (!(t instanceof d)) throw new s(e, u.InvalidParameter, r);
      if (!(t instanceof F)) throw new s(e, u.InvalidParameter, r);
      if (q(n[1] === !1)) throw new s(e, u.InvalidParameter, r);
      const i = yn(t, n[1]);
      return i ? N.convertObjectToArcadeDictionary(i, S(e), !1, !0) : null;
    });
  }, a.functions.multiparttosinglepart = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      n = o(n), h(n, 1, 1, e, r);
      const t = [];
      if (n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      if (n[0] instanceof b) return [L(A(n[0]), e.spatialReference)];
      if (n[0] instanceof j) return [L(A(n[0]), e.spatialReference)];
      const i = await tn(n[0]);
      if (i instanceof O) {
        const l = [], y = [];
        for (let m = 0; m < i.rings.length; m++) if (i.isClockwise(i.rings[m])) {
          const v = B({ rings: [i.rings[m]], hasZ: i.hasZ === !0, hazM: i.hasM === !0, spatialReference: i.spatialReference.toJSON() });
          l.push(v);
        } else y.push({ ring: i.rings[m], pt: i.getPoint(m, 0) });
        for (let m = 0; m < y.length; m++) for (let v = 0; v < l.length; v++) if (l[v].contains(y[m].pt)) {
          l[v].addRing(y[m].ring);
          break;
        }
        return l;
      }
      if (i instanceof F) {
        const l = [];
        for (let y = 0; y < i.paths.length; y++) {
          const m = B({ paths: [i.paths[y]], hasZ: i.hasZ === !0, hazM: i.hasM === !0, spatialReference: i.spatialReference.toJSON() });
          l.push(m);
        }
        return l;
      }
      if (n[0] instanceof W) {
        const l = L(A(n[0]), e.spatialReference);
        for (let y = 0; y < l.points.length; y++) t.push(l.getPoint(y));
        return t;
      }
      return null;
    });
  }, a.functions.issimple = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 1, 1, e, r), n[0] === null) return !0;
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      return Mn(n[0]);
    });
  }, a.functions.simplify = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 1, 1, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      return tn(n[0]);
    });
  }, a.functions.convexhull = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 1, 1, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new s(e, u.InvalidParameter, r);
      return kn(n[0]);
    });
  }, a.functions.getuser = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      h(n, 0, 2, e, r);
      let t = w(n[1], ""), i = t === !0;
      if (t = t === !0 || t === !1 ? "" : M(t), n.length === 0 || n[0] instanceof Y) {
        let y = null;
        y = e.services?.portal ? e.services.portal : Q.getDefault(), n.length > 0 && (y = G(n[0], y));
        const m = await an(y, t, i);
        if (m) {
          const v = JSON.parse(JSON.stringify(m));
          for (const g of ["lastLogin", "created", "modified"]) v[g] !== void 0 && v[g] !== null && (v[g] = new Date(v[g]));
          return N.convertObjectToArcadeDictionary(v, S(e));
        }
        return null;
      }
      let l = null;
      if (J(n[0]) && (l = n[0]), l) {
        if (i = !1, t) return null;
        await l.load();
        const y = await l.getOwningSystemUrl();
        if (!y) {
          if (!t) {
            const g = await l.getIdentityUser();
            return g ? N.convertObjectToArcadeDictionary({ username: g }, S(e)) : null;
          }
          return null;
        }
        let m = null;
        m = e.services?.portal ? e.services.portal : Q.getDefault(), m = G(new Y(y), m);
        const v = await an(m, t, i);
        if (v) {
          const g = JSON.parse(JSON.stringify(v));
          for (const C of ["lastLogin", "created", "modified"]) g[C] !== void 0 && g[C] !== null && (g[C] = new Date(g[C]));
          return N.convertObjectToArcadeDictionary(g, S(e));
        }
        return null;
      }
      throw new s(e, u.InvalidParameter, r);
    });
  }), a.functions.nearestcoordinate = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), !(n[0] instanceof d || n[0] === null)) throw new s(e, u.InvalidParameter, r);
      if (!(n[1] instanceof b || n[1] === null)) throw new s(e, u.InvalidParameter, r);
      if (n[0] === null || n[1] === null) return null;
      const t = await qn(n[0], n[1]);
      return t === null ? null : N.convertObjectToArcadeDictionary({ coordinate: t.coordinate, distance: t.distance, sideOfLine: t.distance === 0 ? "straddle" : t.isRightSide ? "right" : "left" }, S(e), !1, !0);
    });
  }, a.functions.nearestvertex = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), !(n[0] instanceof d || n[0] === null)) throw new s(e, u.InvalidParameter, r);
      if (!(n[1] instanceof b || n[1] === null)) throw new s(e, u.InvalidParameter, r);
      if (n[0] === null || n[1] === null) return null;
      const t = await zn(n[0], n[1]);
      return t === null ? null : N.convertObjectToArcadeDictionary({ coordinate: t.coordinate, distance: t.distance, sideOfLine: t.distance === 0 ? "straddle" : t.isRightSide ? "right" : "left" }, S(e), !1, !0);
    });
  };
}
export {
  Hn as registerFunctions
};
//# sourceMappingURL=geomasync-VhzJVq5N.js.map
