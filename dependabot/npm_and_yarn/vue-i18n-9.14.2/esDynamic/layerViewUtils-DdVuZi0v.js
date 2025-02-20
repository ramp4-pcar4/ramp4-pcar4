function r(n) {
  return n && typeof n.highlight == "function";
}
function i(n, t, c) {
  return n == null || n >= c && (t === 0 || n <= t);
}
function e(n, t) {
  if (t && n) {
    const { minScale: c, maxScale: u } = n;
    if (l(c, u)) return i(t, c, u);
  }
  return !0;
}
function l(n, t) {
  return n != null && n > 0 || t != null && t > 0;
}
function a(n) {
  return !n?.minScale || !n.maxScale || n.minScale >= n.maxScale;
}
export {
  e as c,
  a as i,
  r as n
};
//# sourceMappingURL=layerViewUtils-DdVuZi0v.js.map
