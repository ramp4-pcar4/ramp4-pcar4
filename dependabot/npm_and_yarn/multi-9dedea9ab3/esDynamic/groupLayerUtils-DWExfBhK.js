import { $ as y, j as p } from "./utils-hQ-2oo0_.js";
import { o as f } from "./jsonContext-CWrCBaHN.js";
import { r as v, a as d, i as I, f as s } from "./main-DMoCLB29.js";
import { p as n } from "./resourceUtils-BuuBbzEm.js";
const i = "Group Layer", g = "group-layer-save", A = "group-layer-save-as", o = s.GROUP_LAYER_MAP;
function c(e) {
  return { isValid: e.type === "group", errorMessage: "Layer.type should be 'group'" };
}
function P(e) {
  return { isValid: v(e, o), errorMessage: `Layer.portalItem.typeKeywords should have '${o}'` };
}
function u(e, r) {
  return { ...f(e, "web-map", !0), initiator: r };
}
function l(e) {
  const r = e.layerJSON;
  return Promise.resolve(r && Object.keys(r).length ? r : null);
}
async function R(e, r) {
  r.title ||= e.title, d(r, s.METADATA), I(r, o);
}
async function O(e, r) {
  return y({ layer: e, itemType: i, validateLayer: c, validateItem: P, createJSONContext: (t) => u(t, e), createItemData: l, errorNamePrefix: g, saveResources: async (t, a) => (e.sourceIsPortalItem || await t.removeAllResources().catch(() => {
  }), n(e.resourceReferences, a)) }, r);
}
async function w(e, r, t) {
  return p({ layer: e, itemType: i, validateLayer: c, createJSONContext: (a) => u(a, e), createItemData: l, errorNamePrefix: A, newItem: r, setItemProperties: R, saveResources: (a, m) => n(e.resourceReferences, m) }, t);
}
export {
  O as save,
  w as saveAs
};
//# sourceMappingURL=groupLayerUtils-DWExfBhK.js.map
