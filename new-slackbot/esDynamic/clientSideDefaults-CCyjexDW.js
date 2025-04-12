import { ac as o, ad as u, ae as n, af as a, ag as i } from "./main-BpIyUAdL.js";
import { t as c } from "./QueryEngineCapabilities-Deb54eFC.js";
function h(t) {
  return { renderer: { type: "simple", symbol: t === "esriGeometryPoint" || t === "esriGeometryMultipoint" ? o : t === "esriGeometryPolyline" ? u : n } };
}
const l = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;
let y = 1;
function A(t, s) {
  if (a("esri-csp-restrictions")) return () => ({ [s]: null, ...t });
  try {
    let r = `this.${s} = null;`;
    for (const e in t)
      r += `this${l.test(e) ? `.${e}` : `["${e}"]`} = ${JSON.stringify(t[e])};`;
    const p = new Function(`
      return class AttributesClass$${y++} {
        constructor() {
          ${r};
        }
      }
    `)();
    return () => new p();
  } catch {
    return () => ({ [s]: null, ...t });
  }
}
function $(t = {}) {
  return [{ name: "New Feature", description: "", prototype: { attributes: i(t) } }];
}
function f(t, s) {
  return { analytics: { supportsCacheHint: !1 }, attachment: null, data: { isVersioned: !1, supportsAttachment: !1, supportsM: !1, supportsZ: t }, metadata: { supportsAdvancedFieldProperties: !1 }, operations: { supportsCalculate: !1, supportsTruncate: !1, supportsValidateSql: !1, supportsAdd: s, supportsDelete: s, supportsEditing: s, supportsChangeTracking: !1, supportsQuery: !0, supportsQueryAnalytics: !1, supportsQueryAttachments: !1, supportsQueryTopFeatures: !1, supportsResizeAttachments: !1, supportsSync: !1, supportsUpdate: s, supportsExceedsLimitStatistics: !0, supportsAsyncConvert3D: !1 }, query: c, queryRelated: { supportsCount: !0, supportsOrderBy: !0, supportsPagination: !0, supportsCacheHint: !1 }, queryTopFeatures: { supportsCacheHint: !1 }, editing: { supportsGeometryUpdate: s, supportsGlobalId: !1, supportsReturnServiceEditsInSourceSpatialReference: !1, supportsRollbackOnFailure: !1, supportsUpdateWithoutM: !1, supportsUploadWithItemId: !1, supportsDeleteByAnonymous: !1, supportsDeleteByOthers: !1, supportsUpdateByAnonymous: !1, supportsUpdateByOthers: !1, supportsAsyncApplyEdits: !1, zDefault: void 0 } };
}
export {
  $ as a,
  A as i,
  f as l,
  h as o
};
//# sourceMappingURL=clientSideDefaults-CCyjexDW.js.map
