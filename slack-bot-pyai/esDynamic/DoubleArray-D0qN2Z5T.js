import { cl as t, cm as n } from "./main-DhLeoxL5.js";
function y(r, a = !1) {
  return r <= t ? a ? new Array(r).fill(0) : new Array(r) : new Float64Array(r);
}
function u(r) {
  return (n(r) ? r.length : r.byteLength / 8) <= t ? Array.from(r) : new Float64Array(r);
}
function i(r, a, e) {
  return Array.isArray(r) ? r.slice(a, a + e) : r.subarray(a, a + e);
}
function l(r, a) {
  for (let e = 0; e < a.length; ++e) r[e] = a[e];
  return r;
}
function A(r) {
  return Array.isArray(r) ? new Float64Array(r) : r;
}
export {
  i as a,
  u as e,
  l as o,
  y as t,
  A as y
};
//# sourceMappingURL=DoubleArray-D0qN2Z5T.js.map
