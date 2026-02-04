import { t as c } from "./lazyLayerLoader-8kYJdScy.js";
async function h(t, y) {
  const { loadContext: e, ...a } = y || {}, r = e ? await e.fetchServiceMetadata(t, a) : await c(t, a);
  l(r), o(r);
  const i = { serviceJSON: r };
  if ((r.currentVersion ?? 0) < 10.5) return i;
  const s = `${t}/layers`, n = e ? await e.fetchServiceMetadata(s, a) : await c(s, a);
  return l(n), o(n), i.layersJSON = { layers: n.layers, tables: n.tables }, i;
}
function f(t) {
  return t.type === "Feature Layer" || t.type === "Oriented Imagery Layer";
}
function u(t) {
  return t.type === "Table";
}
function o(t) {
  t.layers = t.layers?.filter(f), t.tables = t.tables?.filter(u);
}
function b(t) {
  t.type ||= "Feature Layer";
}
function p(t) {
  t.type ||= "Table";
}
function l(t) {
  t.layers?.forEach(b), t.tables?.forEach(p);
}
export {
  h as t
};
//# sourceMappingURL=fetchService-BcB0uh9E.js.map
