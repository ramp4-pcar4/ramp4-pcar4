import { ah as I, ai as $, aj as v, ag as E, s as n, ak as S, al as w, C as R, am as O, an as k, ao as L, ap as U, aa as j, ab as G, aq as T, ar as B, J as V, as as y, at as D, V as W } from "./main-DIdq27YS.js";
function F(e) {
  return e?.applyEdits != null;
}
function z(e) {
  return typeof e == "object" && e != null && "objectId" in e && !!e.objectId;
}
function Y(e) {
  return e.every(z);
}
function M(e) {
  return typeof e == "object" && e != null && "globalId" in e && !!e.globalId;
}
function ee(e) {
  return e.every(M);
}
async function te(e, t, r, a = {}) {
  let s;
  const o = "gdbVersion" in e ? e.gdbVersion : null, p = a.gdbVersion ?? o;
  if (I(e) && e.url) s = $(e.url, e.layerId, p, a.returnServiceEditsOption === "original-and-current-features");
  else {
    s = v(), s.promise.then((d) => {
      (d.addedFeatures.length || d.updatedFeatures.length || d.deletedFeatures.length || d.addedAttachments.length || d.updatedAttachments.length || d.deletedAttachments.length) && e.emit("edits", d);
    });
    const i = { result: s.promise };
    e.emit("apply-edits", i);
  }
  try {
    const { results: i, edits: d } = await C(e, t, r, a), u = (l) => l.filter((h) => !h.error).map(E), c = { edits: d, addedFeatures: u(i.addFeatureResults), updatedFeatures: u(i.updateFeatureResults), deletedFeatures: u(i.deleteFeatureResults), addedAttachments: u(i.addAttachmentResults), updatedAttachments: u(i.updateAttachmentResults), deletedAttachments: u(i.deleteAttachmentResults), exceededTransferLimit: !1, historicMoment: i.editMoment ? new Date(i.editMoment) : null, globalIdToObjectId: a.globalIdToObjectId };
    return i.editedFeatureResults?.length && (c.editedFeatures = i.editedFeatureResults), s.resolve(c), i;
  } catch (i) {
    throw s.reject(i), i;
  }
}
async function C(e, t, r, a) {
  if (await e.load(), !F(t)) throw new n(`${e.type}-layer:no-editing-support`, "Layer source does not support applyEdits capability", { layer: e });
  if (!S(e)) throw new n(`${e.type}-layer:editing-disabled`, "Editing is disabled for layer", { layer: e });
  const { edits: s, options: o } = await q(e, r, a);
  return s.addFeatures?.length || s.updateFeatures?.length || s.deleteFeatures?.length || s.addAttachments?.length || s.updateAttachments?.length || s.deleteAttachments?.length ? { edits: s, results: await t.applyEdits(s, o) } : { edits: s, results: { addFeatureResults: [], updateFeatureResults: [], deleteFeatureResults: [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] } };
}
async function q(e, t, r) {
  const a = w(e), s = t && (t.addFeatures || t.updateFeatures || t.deleteFeatures), o = t && (t.addAttachments || t.updateAttachments || t.deleteAttachments), p = e.infoFor3D != null;
  if (K(t, a, r, !!s, !!o, `${e.type}-layer`), !a.data.isVersioned && r?.gdbVersion) throw new n(`${e.type}-layer:invalid-parameter`, "'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");
  if (!a.editing.supportsRollbackOnFailure && r?.rollbackOnFailureEnabled) throw new n(`${e.type}-layer:invalid-parameter`, "This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");
  const i = { ...r };
  if (i.rollbackOnFailureEnabled != null || a.editing.supportsRollbackOnFailure || (i.rollbackOnFailureEnabled = !0), i.rollbackOnFailureEnabled || i.returnServiceEditsOption !== "original-and-current-features" || (i.rollbackOnFailureEnabled === !1 && R.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`, "'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."), i.rollbackOnFailureEnabled = !0), !a.editing.supportsReturnServiceEditsInSourceSpatialReference && i.returnServiceEditsInSourceSR) throw new n(`${e.type}-layer:invalid-parameter`, "This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");
  if (i.returnServiceEditsInSourceSR && i.returnServiceEditsOption !== "original-and-current-features") throw new n(`${e.type}-layer:invalid-parameter`, "'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");
  const d = H(t, a, `${e.type}-layer`), u = r?.globalIdUsed || p, c = e.fields.filter((l) => l.type === "big-integer" || l.type === "oid" && (l.length || 0) >= 8);
  if (u) {
    const { globalIdField: l } = e;
    if (l == null) throw new n(`${e.type}-layer:invalid-parameter`, "Layer does not specify a global id field.");
    d.addFeatures.forEach((h) => _(h, l));
  }
  return d.addFeatures.forEach((l) => x(l, e, u, c)), d.updateFeatures.forEach((l) => Z(l, e, u, c)), d.deleteFeatures.forEach((l) => N(l, e, u, c)), d.addAttachments.forEach((l) => m(l, e)), d.updateAttachments.forEach((l) => m(l, e)), p && await P(d, e), { edits: await J(d), options: i };
}
function f(e, t, r, a) {
  if (r) {
    if ("attributes" in e && !e.attributes[t.globalIdField]) throw new n(`${t.type}-layer:invalid-parameter`, `Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);
    if (!("attributes" in e) && !e.globalId) throw new n(`${t.type}-layer:invalid-parameter`, "`'globalId' of the feature should be passed when 'globalIdUsed' is true");
  }
  if (a.length && "attributes" in e) for (const s of a) {
    const o = e.attributes[s.name];
    if (o !== void 0 && !T(s, o)) throw new n(`${t.type}-layer:invalid-parameter`, `Big-integer field '${s.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`, { feature: e });
  }
  if ("geometry" in e && e.geometry != null) {
    if (e.geometry.hasZ && t.capabilities?.data.supportsZ === !1) throw new n(`${t.type}-layer:z-unsupported`, "Layer does not support z values while feature has z values.");
    if (e.geometry.hasM && t.capabilities?.data.supportsM === !1) throw new n(`${t.type}-layer:m-unsupported`, "Layer does not support m values while feature has m values.");
  }
}
function A(e, t) {
  if ("geometry" in e && e.geometry?.type === "mesh" && t.infoFor3D != null && t.spatialReference != null) {
    const { geometry: r } = e, { spatialReference: a, vertexSpace: s } = r, o = t.spatialReference, p = s.type === "local", i = B(o), d = V(o, a), u = d || y(o) && (y(a) || D(a));
    if (!(p && i && u || !p && !i && d)) throw new n(`${t.type}-layer:mesh-unsupported`, `Uploading a mesh with a ${s.type} vertex space and a spatial reference wkid:${a.wkid} to a layer with a spatial reference wkid:${o.wkid} is not supported.`);
  }
}
function x(e, t, r, a) {
  f(e, t, r, a), A(e, t);
}
function N(e, t, r, a) {
  f(e, t, r, a);
}
function Z(e, t, r, a) {
  f(e, t, r, a), A(e, t);
  const s = w(t);
  if ("geometry" in e && e.geometry != null && !s?.editing.supportsGeometryUpdate) throw new n(`${t.type}-layer:unsupported-operation`, "Layer does not support geometry updates.");
}
function m(e, t) {
  const { feature: r, attachment: a } = e;
  if (!r || "attributes" in r && !r.attributes[t.globalIdField]) throw new n(`${t.type}-layer:invalid-parameter`, "Attachment should have reference to a feature with 'globalId'");
  if (!("attributes" in r) && !r.globalId) throw new n(`${t.type}-layer:invalid-parameter`, "Attachment should have reference to 'globalId' of the parent feature");
  if (!a.globalId) throw new n(`${t.type}-layer:invalid-parameter`, "Attachment should have 'globalId'");
  if (!a.data && !a.uploadId) throw new n(`${t.type}-layer:invalid-parameter`, "Attachment should have 'data' or 'uploadId'");
  if (!(a.data instanceof File && a.data.name) && !a.name) throw new n(`${t.type}-layer:invalid-parameter`, "'name' is required when attachment is specified as Base64 encoded string using 'data'");
  if (!t.capabilities?.editing.supportsUploadWithItemId && a.uploadId) throw new n(`${t.type}-layer:invalid-parameter`, "This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");
  if (typeof a.data == "string") {
    const s = O(a.data);
    if (s && !s.isBase64) throw new n(`${t.type}-layer:invalid-parameter`, "Attachment 'data' should be a Blob, File or Base64 encoded string");
  }
}
function _(e, t) {
  const { attributes: r } = e;
  r[t] == null && (r[t] = k());
}
async function J(e) {
  const t = e.addFeatures ?? [], r = e.updateFeatures ?? [], a = t.concat(r).map((i) => i.geometry), s = await L(a), o = t.length, p = r.length;
  return s.slice(0, o).forEach((i, d) => t[d].geometry = i), s.slice(o, o + p).forEach((i, d) => r[d].geometry = i), e;
}
function X(e) {
  return { addFeatures: Array.from(e?.addFeatures ?? []), updateFeatures: Array.from(e?.updateFeatures ?? []), deleteFeatures: e && W.isCollection(e.deleteFeatures) ? e.deleteFeatures.toArray() : e.deleteFeatures || [], addAttachments: e.addAttachments || [], updateAttachments: e.updateAttachments || [], deleteAttachments: e.deleteAttachments || [] };
}
function H(e, t, r) {
  const a = X(e);
  if (a.addFeatures?.length && !t.operations.supportsAdd) throw new n(`${r}:unsupported-operation`, "Layer does not support adding features.");
  if (a.updateFeatures?.length && !t.operations.supportsUpdate) throw new n(`${r}:unsupported-operation`, "Layer does not support updating features.");
  if (a.deleteFeatures?.length && !t.operations.supportsDelete) throw new n(`${r}:unsupported-operation`, "Layer does not support deleting features.");
  return a.addFeatures = a.addFeatures.map(g), a.updateFeatures = a.updateFeatures.map(g), a.addAssetFeatures = [], a;
}
function K(e, t, r, a, s, o) {
  if (!e || !a && !s) throw new n(`${o}:missing-parameters`, "'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");
  if (!t.editing.supportsGlobalId && r?.globalIdUsed) throw new n(`${o}:invalid-parameter`, "This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");
  if (!t.editing.supportsGlobalId && s) throw new n(`${o}:invalid-parameter`, "'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");
  if (!r?.globalIdUsed && s) throw new n(`${o}:invalid-parameter`, "When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");
}
function g(e) {
  const t = new U();
  return e.attributes || (e.attributes = {}), t.geometry = e.geometry, t.attributes = e.attributes, t;
}
async function P(e, t) {
  if (t.infoFor3D == null) return;
  const { infoFor3D: r } = t, a = j("model/gltf-binary", r.supportedFormats) ?? G("glb", r.supportedFormats);
  if (!(a && r.editFormats.includes(a))) throw new n(`${t.type}-layer:binary-gltf-asset-not-supported`, "3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");
  e.addAssetFeatures ??= [];
  const { addAssetFeatures: s } = e;
  for (const o of e.addFeatures ?? []) b(o) && s.push(o);
  for (const o of e.updateFeatures ?? []) b(o) && s.push(o);
}
function b(e) {
  return e?.geometry?.type === "mesh";
}
function ae(e, t, r, a) {
  if (!F(t)) throw new n(`${e.type}-layer:no-editing-support`, "Layer source does not support applyEdits capability", { layer: e });
  if (!t.uploadAssets) throw new n(`${e.type}-layer:no-asset-upload-support`, "Layer source does not support uploadAssets capability", { layer: e });
  return t.uploadAssets(r, a);
}
export {
  te as applyEdits,
  K as checkEditingCapabilities,
  ee as isFeatureIdentifierArrayWithGlobalId,
  Y as isFeatureIdentifierArrayWithObjectId,
  M as isFeatureIdentifierWithGlobalId,
  z as isFeatureIdentifierWithObjectId,
  X as normalizeCollections,
  H as normalizeEdits,
  J as normalizeGeometries,
  g as shallowCloneFeature,
  ae as uploadAssets
};
//# sourceMappingURL=editingSupport-BY705Ef0.js.map
