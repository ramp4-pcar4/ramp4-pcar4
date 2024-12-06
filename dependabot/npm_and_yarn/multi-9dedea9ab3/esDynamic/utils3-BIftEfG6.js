import { cY as o } from "./main-DMoCLB29.js";
const c = "calcite-list", a = "calcite-list-item-group", l = "calcite-list-item";
function f(s) {
  return Array.from(s.assignedElements({ flatten: !0 }).filter((e) => e.matches(c)));
}
function h(s) {
  const e = s.assignedElements({ flatten: !0 }), r = e.filter((t) => t?.matches(a)).map((t) => Array.from(t.querySelectorAll(l))).reduce((t, i) => [...t, ...i], []), n = e.filter((t) => t?.matches(l));
  return [...e.filter((t) => t?.matches(c)).map((t) => Array.from(t.querySelectorAll(l))).reduce((t, i) => [...t, ...i], []), ...r, ...n];
}
function d(s) {
  s.forEach((e) => {
    e.setPosition = s.indexOf(e) + 1, e.setSize = s.length;
  });
}
function p(s, e = !1) {
  if (!o())
    return 0;
  const r = e ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group" : "ancestor::calcite-list-item";
  return document.evaluate(r, s, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength;
}
export {
  h as a,
  f as b,
  p as g,
  d as u
};
//# sourceMappingURL=utils3-BIftEfG6.js.map
