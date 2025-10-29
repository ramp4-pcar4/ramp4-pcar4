import { T as S, a as F, d as p, B as i, b as o, r as l } from "./arcadeUtils-BQzwtwx7.js";
import { s as w } from "./TimeOnly-C42-RyO3.js";
import { u as c, f as h } from "./SpatialFilter-CT4ZrQOl.js";
import { eJ as u } from "./main-BEi6lHs4.js";
import { relate as I, crosses as A, touches as P, within as g, overlaps as C, contains as O, intersects as R } from "./geometryEngineAsync-DpAQxjdZ.js";
function f(r) {
  return r instanceof u;
}
function a(r, t, s, d) {
  return d(r, t, async (y, e, n) => {
    if (n.length < 2) throw new o(r, l.WrongNumberOfParameters, t);
    if ((n = S(n))[0] === null && n[1] === null) return !1;
    if (i(n[0])) {
      if (n[1] instanceof u) return new h({ parentfeatureset: n[0], relation: s, relationGeom: n[1] });
      if (n[1] === null) return new c({ parentfeatureset: n[0] });
      throw new o(r, l.InvalidParameter, t);
    }
    if (f(n[0])) {
      if (f(n[1])) {
        switch (s) {
          case "esriSpatialRelEnvelopeIntersects":
            return R(w(n[0]), w(n[1]));
          case "esriSpatialRelIntersects":
            return R(n[0], n[1]);
          case "esriSpatialRelContains":
            return O(n[0], n[1]);
          case "esriSpatialRelOverlaps":
            return C(n[0], n[1]);
          case "esriSpatialRelWithin":
            return g(n[0], n[1]);
          case "esriSpatialRelTouches":
            return P(n[0], n[1]);
          case "esriSpatialRelCrosses":
            return A(n[0], n[1]);
        }
        throw new o(r, l.InvalidParameter, t);
      }
      if (i(n[1])) return new h({ parentfeatureset: n[1], relation: s, relationGeom: n[0] });
      if (n[1] === null) return !1;
      throw new o(r, l.InvalidParameter, t);
    }
    if (n[0] !== null) throw new o(r, l.InvalidParameter, t);
    return i(n[1]) ? new c({ parentfeatureset: n[1] }) : !(n[1] instanceof u || n[1] === null) && void 0;
  });
}
function G(r) {
  r.mode === "async" && (r.functions.intersects = function(t, s) {
    return a(t, s, "esriSpatialRelIntersects", r.standardFunctionAsync);
  }, r.functions.envelopeintersects = function(t, s) {
    return a(t, s, "esriSpatialRelEnvelopeIntersects", r.standardFunctionAsync);
  }, r.signatures.push({ name: "envelopeintersects", min: 2, max: 2 }), r.functions.contains = function(t, s) {
    return a(t, s, "esriSpatialRelContains", r.standardFunctionAsync);
  }, r.functions.overlaps = function(t, s) {
    return a(t, s, "esriSpatialRelOverlaps", r.standardFunctionAsync);
  }, r.functions.within = function(t, s) {
    return a(t, s, "esriSpatialRelWithin", r.standardFunctionAsync);
  }, r.functions.touches = function(t, s) {
    return a(t, s, "esriSpatialRelTouches", r.standardFunctionAsync);
  }, r.functions.crosses = function(t, s) {
    return a(t, s, "esriSpatialRelCrosses", r.standardFunctionAsync);
  }, r.functions.relate = function(t, s) {
    return r.standardFunctionAsync(t, s, (d, y, e) => {
      if (e = S(e), F(e, 3, 3, t, s), f(e[0]) && f(e[1])) return I(e[0], e[1], p(e[2]));
      if (e[0] instanceof u && e[1] === null || e[1] instanceof u && e[0] === null) return !1;
      if (i(e[0]) && e[1] === null) return new c({ parentfeatureset: e[0] });
      if (i(e[1]) && e[0] === null) return new c({ parentfeatureset: e[1] });
      if (i(e[0]) && e[1] instanceof u) return e[0].relate(e[1], p(e[2]));
      if (i(e[1]) && e[0] instanceof u) return e[1].relate(e[0], p(e[2]));
      if (e[0] === null && e[1] === null) return !1;
      throw new o(t, l.InvalidParameter, s);
    });
  });
}
export {
  G as registerFunctions
};
//# sourceMappingURL=featuresetgeom-QdZuhi5s.js.map
