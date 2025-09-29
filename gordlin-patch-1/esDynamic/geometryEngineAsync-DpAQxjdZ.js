import { a6 as l, eK as w, eL as h } from "./main-BEi6lHs4.js";
function r(e) {
  return Array.isArray(e) ? e[0]?.spatialReference : e?.spatialReference;
}
function p(e) {
  return e && (Array.isArray(e) ? e.map(p) : e.toJSON ? e.toJSON() : e);
}
function c(e) {
  return Array.isArray(e) ? e.map((t) => w(t)) : w(e);
}
function S(e, t) {
  let n;
  return Array.isArray(e) ? n = e : (n = [], n.push(e), t != null && n.push(t)), n;
}
let f;
async function d() {
  return f || (f = h("geometryEngineWorker", { strategy: "distributed" })), f;
}
async function a(e, t) {
  return (await d()).invoke("executeGEOperation", { operation: e, parameters: p(t) });
}
async function m(e, t) {
  const n = await d();
  return Promise.all(n.broadcast("executeGEOperation", { operation: e, parameters: p(t) }));
}
function R(e) {
  return a("extendedSpatialReferenceInfo", [e]);
}
async function A(e, t) {
  return c(await a("clip", [r(e), e, t]));
}
async function O(e, t) {
  return c(await a("cut", [r(e), e, t]));
}
function D(e, t) {
  return a("contains", [r(e), e, t]);
}
function J(e, t) {
  return a("crosses", [r(e), e, t]);
}
function N(e, t, n) {
  return a("distance", [r(e), e, t, n]);
}
function L(e, t) {
  return a("equals", [r(e), e, t]);
}
function T(e, t) {
  return a("intersects", [r(e), e, t]);
}
function V(e, t) {
  return a("touches", [r(e), e, t]);
}
function v(e, t) {
  return a("within", [r(e), e, t]);
}
function E(e, t) {
  return a("disjoint", [r(e), e, t]);
}
function b(e, t) {
  return a("overlaps", [r(e), e, t]);
}
function z(e, t, n) {
  return a("relate", [r(e), e, t, n]);
}
function H(e) {
  return a("isSimple", [r(e), e]);
}
async function I(e) {
  return c(await a("simplify", [r(e), e]));
}
async function P(e, t = !1) {
  return c(await a("convexHull", [r(e), e, t]));
}
async function j(e, t) {
  return c(await a("difference", [r(e), e, t]));
}
async function k(e, t) {
  return c(await a("symmetricDifference", [r(e), e, t]));
}
async function q(e, t) {
  return c(await a("intersect", [r(e), e, t]));
}
async function B(e, t = null) {
  const n = S(e, t);
  return c(await a("union", [r(n), n]));
}
async function C(e, t, n, i, s, u) {
  return c(await a("offset", [r(e), e, t, n, i, s, u]));
}
async function G(e, t, n, i = !1) {
  const s = [r(e), e, t, n, i];
  return c(await a("buffer", s));
}
async function $(e, t, n, i, s, u) {
  const g = [r(e), e, t, n, i, s, u];
  return c(await a("geodesicBuffer", g));
}
async function K(e, t, n = !0) {
  const i = await a("nearestCoordinate", [r(e), e, t, n]);
  return { ...i, coordinate: l.fromJSON(i.coordinate) };
}
async function W(e, t) {
  const n = await a("nearestVertex", [r(e), e, t]);
  return { ...n, coordinate: l.fromJSON(n.coordinate) };
}
async function F(e, t, n, i) {
  return (await a("nearestVertices", [r(e), e, t, n, i])).map((s) => ({ ...s, coordinate: l.fromJSON(s.coordinate) }));
}
function y(e) {
  return "xmin" in e ? e.center : "x" in e ? e : e.extent?.center;
}
async function M(e, t, n) {
  if (e == null) throw new o();
  const i = e.spatialReference;
  if ((n = n ?? y(e)) == null) throw new o();
  const s = e.constructor.fromJSON(await a("rotate", [i, e, t, n]));
  return s.spatialReference = i, s;
}
async function Q(e, t) {
  if (e == null) throw new o();
  const n = e.spatialReference;
  if ((t = t ?? y(e)) == null) throw new o();
  const i = e.constructor.fromJSON(await a("flipHorizontal", [n, e, t]));
  return i.spatialReference = n, i;
}
async function U(e, t) {
  if (e == null) throw new o();
  const n = e.spatialReference;
  if ((t = t ?? y(e)) == null) throw new o();
  const i = e.constructor.fromJSON(await a("flipVertical", [n, e, t]));
  return i.spatialReference = n, i;
}
async function X(e, t, n, i) {
  return c(await a("generalize", [r(e), e, t, n, i]));
}
async function Y(e, t, n) {
  return c(await a("densify", [r(e), e, t, n]));
}
async function Z(e, t, n, i = 0) {
  return c(await a("geodesicDensify", [r(e), e, t, n, i]));
}
function _(e, t) {
  return a("planarArea", [r(e), e, t]);
}
function ee(e, t) {
  return a("planarLength", [r(e), e, t]);
}
function te(e, t, n) {
  return a("geodesicArea", [r(e), e, t, n]);
}
function ne(e, t, n) {
  return a("geodesicLength", [r(e), e, t, n]);
}
async function ae(e, t) {
  return c(await a("intersectLinesToPoints", [r(e), e, t]));
}
async function re(e, t) {
  await m("changeDefaultSpatialReferenceTolerance", [e, t]);
}
async function ie(e) {
  await m("clearDefaultSpatialReferenceTolerance", [e]);
}
class o extends Error {
  constructor() {
    super("Illegal Argument Exception");
  }
}
export {
  G as buffer,
  re as changeDefaultSpatialReferenceTolerance,
  ie as clearDefaultSpatialReferenceTolerance,
  A as clip,
  D as contains,
  P as convexHull,
  J as crosses,
  O as cut,
  Y as densify,
  j as difference,
  E as disjoint,
  N as distance,
  L as equals,
  R as extendedSpatialReferenceInfo,
  Q as flipHorizontal,
  U as flipVertical,
  X as generalize,
  te as geodesicArea,
  $ as geodesicBuffer,
  Z as geodesicDensify,
  ne as geodesicLength,
  q as intersect,
  ae as intersectLinesToPoints,
  T as intersects,
  H as isSimple,
  K as nearestCoordinate,
  W as nearestVertex,
  F as nearestVertices,
  C as offset,
  b as overlaps,
  _ as planarArea,
  ee as planarLength,
  z as relate,
  M as rotate,
  I as simplify,
  k as symmetricDifference,
  V as touches,
  B as union,
  v as within
};
//# sourceMappingURL=geometryEngineAsync-DpAQxjdZ.js.map
