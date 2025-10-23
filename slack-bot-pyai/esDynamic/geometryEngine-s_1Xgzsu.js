import { G as t } from "./geometryEngineBase-PxPnDXcd.js";
import { hydratedAdapter as r } from "./hydrated-Cp0W_k7C.js";
function i(e) {
  return Array.isArray(e) ? e[0].spatialReference : e && e.spatialReference;
}
function d(e) {
  return t.extendedSpatialReferenceInfo(e);
}
function g(e, n) {
  return t.clip(r, i(e), e, n);
}
function h(e, n) {
  return t.cut(r, i(e), e, n);
}
function m(e, n) {
  return t.contains(r, i(e), e, n);
}
function w(e, n) {
  return t.crosses(r, i(e), e, n);
}
function R(e, n, a) {
  return t.distance(r, i(e), e, n, a);
}
function x(e, n) {
  return t.equals(r, i(e), e, n);
}
function y(e, n) {
  return t.intersects(r, i(e), e, n);
}
function S(e, n) {
  return t.touches(r, i(e), e, n);
}
function A(e, n) {
  return t.within(r, i(e), e, n);
}
function D(e, n) {
  return t.disjoint(r, i(e), e, n);
}
function L(e, n) {
  return t.overlaps(r, i(e), e, n);
}
function T(e, n, a) {
  return t.relate(r, i(e), e, n, a);
}
function V(e) {
  return t.isSimple(r, i(e), e);
}
function v(e) {
  return t.simplify(r, i(e), e);
}
function z(e, n = !1) {
  return t.convexHull(r, i(e), e, n);
}
function H(e, n) {
  return t.difference(r, i(e), e, n);
}
function I(e, n) {
  return t.symmetricDifference(r, i(e), e, n);
}
function J(e, n) {
  return t.intersect(r, i(e), e, n);
}
function N(e, n = null) {
  return t.union(r, i(e), e, n);
}
function O(e, n, a, s, c, o) {
  return t.offset(r, i(e), e, n, a, s, c, o);
}
function b(e, n, a, s = !1) {
  return t.buffer(r, i(e), e, n, a, s);
}
function j(e, n, a, s, c, o) {
  return t.geodesicBuffer(r, i(e), e, n, a, s, c, o);
}
function q(e, n, a = !0) {
  return t.nearestCoordinate(r, i(e), e, n, a);
}
function B(e, n) {
  return t.nearestVertex(r, i(e), e, n);
}
function C(e, n, a, s) {
  return t.nearestVertices(r, i(e), e, n, a, s);
}
function f(e) {
  return "xmin" in e ? "center" in e ? e.center : null : "x" in e ? e : "extent" in e ? e.extent?.center ?? null : null;
}
function E(e, n, a) {
  if (e == null) throw new u();
  const s = e.spatialReference;
  if ((a = a ?? f(e)) == null) throw new u();
  const c = e.constructor.fromJSON(t.rotate(e, n, a));
  return c.spatialReference = s, c;
}
function P(e, n) {
  if (e == null) throw new u();
  const a = e.spatialReference;
  if ((n = n ?? f(e)) == null) throw new u();
  const s = e.constructor.fromJSON(t.flipHorizontal(e, n));
  return s.spatialReference = a, s;
}
function G(e, n) {
  if (e == null) throw new u();
  const a = e.spatialReference;
  if ((n = n ?? f(e)) == null) throw new u();
  const s = e.constructor.fromJSON(t.flipVertical(e, n));
  return s.spatialReference = a, s;
}
function $(e, n, a, s) {
  return t.generalize(r, i(e), e, n, a, s);
}
function k(e, n, a) {
  return t.densify(r, i(e), e, n, a);
}
function F(e, n, a, s = 0) {
  return t.geodesicDensify(r, i(e), e, n, a, s);
}
function K(e, n) {
  return t.planarArea(r, i(e), e, n);
}
function M(e, n) {
  return t.planarLength(r, i(e), e, n);
}
function Q(e, n, a) {
  return t.geodesicArea(r, i(e), e, n, a);
}
function U(e, n, a) {
  return t.geodesicLength(r, i(e), e, n, a);
}
function W(e, n) {
  return t.intersectLinesToPoints(r, i(e), e, n);
}
function X(e, n) {
  t.changeDefaultSpatialReferenceTolerance(e, n);
}
function Y(e) {
  t.clearDefaultSpatialReferenceTolerance(e);
}
class u extends Error {
  constructor() {
    super("Illegal Argument Exception");
  }
}
export {
  b as buffer,
  X as changeDefaultSpatialReferenceTolerance,
  Y as clearDefaultSpatialReferenceTolerance,
  g as clip,
  m as contains,
  z as convexHull,
  w as crosses,
  h as cut,
  k as densify,
  H as difference,
  D as disjoint,
  R as distance,
  x as equals,
  d as extendedSpatialReferenceInfo,
  P as flipHorizontal,
  G as flipVertical,
  $ as generalize,
  Q as geodesicArea,
  j as geodesicBuffer,
  F as geodesicDensify,
  U as geodesicLength,
  J as intersect,
  W as intersectLinesToPoints,
  y as intersects,
  V as isSimple,
  q as nearestCoordinate,
  B as nearestVertex,
  C as nearestVertices,
  O as offset,
  L as overlaps,
  K as planarArea,
  M as planarLength,
  T as relate,
  E as rotate,
  v as simplify,
  I as symmetricDifference,
  S as touches,
  N as union,
  A as within
};
//# sourceMappingURL=geometryEngine-s_1Xgzsu.js.map
