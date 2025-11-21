import { b3 as r, b4 as c } from "./main-BpIyUAdL.js";
async function h(e, d = e.popupTemplate) {
  if (d == null) return [];
  const s = await d.getRequiredFields(e.fieldsIndex), { lastEditInfoEnabled: n } = d, { objectIdField: u, typeIdField: i, globalIdField: p, relationships: a } = e;
  if (s.includes("*")) return ["*"];
  const o = n ? r(e) : [], l = c(e.fieldsIndex, [...s, ...o]);
  return i && l.push(i), l && u && e.fieldsIndex?.has(u) && !l.includes(u) && l.push(u), l && p && e.fieldsIndex?.has(p) && !l.includes(p) && l.push(p), a && a.forEach((f) => {
    const { keyField: t } = f;
    l && t && e.fieldsIndex?.has(t) && !l.includes(t) && l.push(t);
  }), l;
}
function m(e, d) {
  return e.popupTemplate ? e.popupTemplate : d != null && d.defaultPopupTemplateEnabled && e.defaultPopupTemplate != null ? e.defaultPopupTemplate : null;
}
export {
  h as n,
  m as p
};
//# sourceMappingURL=popupUtils-ByP2GfNE.js.map
