import { J as L, as as T, at as P, eR as D, eS as N, eT as Q, C as _, s as I, ap as G, eK as V, eU as C, N as O, O as v, eV as H, S as W, af as M, eW as X, eX as A, a2 as m, b6 as $, eY as Y, eZ as Z, e_ as z, e$ as B, f0 as K, aU as ee, f1 as te, f2 as ae, aN as J, f3 as se, es as re, a1 as ne, an as ie, bh as oe, f4 as ue, f5 as le, f6 as de, P as ce, a3 as pe } from "./main-CmejC-so.js";
import { g as he, a as ye } from "./meshVertexSpaceUtils-iNtu9x5J.js";
import { v as fe } from "./External-uPvnJz14.js";
import { isFeatureIdentifierArrayWithGlobalId as me, isFeatureIdentifierArrayWithObjectId as ge } from "./editingSupport-DVjmoECX.js";
import { o as we } from "./clientSideDefaults-PpvJdeDf.js";
async function U(e, t, a) {
  const { geometry: r } = t, s = { ...t.attributes };
  if (a != null && r?.type === "mesh") {
    const { transformFieldRoles: n } = a, { origin: i, spatialReference: o, transform: u, vertexSpace: c } = r, d = c.type === "local", y = e.spatialReference, g = y.isGeographic, q = L(y, o), w = q || T(y) && (T(o) || P(o));
    if (!(d && g && w || !d && !g && q)) return null;
    const l = D(i, o, y);
    if (l == null) return null;
    if (s[n.originX] = l.x, s[n.originY] = l.y, s[n.originZ] = l.z ?? 0, u != null) {
      const { translation: S, scale: h, rotation: f } = u, b = d ? 1 : N(o) / N(y);
      s[n.translationX] = S[0] * b, s[n.translationY] = S[2] * b, s[n.translationZ] = -S[1] * b, s[n.scaleX] = h[0], s[n.scaleY] = h[2], s[n.scaleZ] = h[1], s[n.rotationX] = f[0], s[n.rotationY] = f[2], s[n.rotationZ] = -f[1], s[n.rotationDeg] = f[3];
    }
    return { attributes: s };
  }
  return r == null ? { attributes: s } : r.type === "mesh" || r.type === "extent" ? null : { geometry: r.toJSON(), attributes: s };
}
async function be(e, t) {
  const a = await Promise.all((t.addAttachments ?? []).map((n) => k(e, n))), r = await Promise.all((t.updateAttachments ?? []).map((n) => k(e, n))), s = t.deleteAttachments ?? [];
  return a.length || r.length || s.length ? { adds: a, updates: r, deletes: [...s] } : null;
}
async function k(e, t) {
  const { feature: a, attachment: r } = t, { globalId: s, name: n, contentType: i, data: o, uploadId: u } = r, c = { globalId: s };
  if (a && ("attributes" in a ? c.parentGlobalId = a.attributes?.[e.globalIdField] : a.globalId && (c.parentGlobalId = a.globalId)), u) c.uploadId = u;
  else if (o) {
    const d = await Q(o);
    d && (c.contentType = d.mediaType, c.data = d.data), o instanceof File && (c.name = o.name);
  }
  return n && (c.name = n), i && (c.contentType = i), c;
}
function Re(e, t, a) {
  if (!t || t.length === 0) return [];
  if (a && me(t)) return t.map((s) => s.globalId);
  if (ge(t)) return t.map((s) => s.objectId);
  const r = a ? e.globalIdField : e.objectIdField;
  return r ? t.map((s) => s.getAttribute(r)) : [];
}
function qe(e) {
  const t = e?.assetMaps;
  if (t) {
    for (const s of t.addResults) s.success || _.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${s.globalId}.`);
    for (const s of t.updateResults) s.success || _.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${s.globalId}.`);
  }
  const a = e?.attachments, r = { addFeatureResults: e?.addResults?.map(R) ?? [], updateFeatureResults: e?.updateResults?.map(R) ?? [], deleteFeatureResults: e?.deleteResults?.map(R) ?? [], addAttachmentResults: a?.addResults ? a.addResults.map(R) : [], updateAttachmentResults: a?.updateResults ? a.updateResults.map(R) : [], deleteAttachmentResults: a?.deleteResults ? a.deleteResults.map(R) : [] };
  return e?.editMoment && (r.editMoment = e.editMoment), r;
}
function R(e) {
  const t = e.success === !0 ? null : e.error || { code: void 0, description: void 0 };
  return { objectId: e.objectId, globalId: e.globalId, error: t ? new I("feature-layer-source:edit-failure", t.description, { code: t.code }) : null };
}
function E(e, t) {
  return new G({ attributes: e.attributes, geometry: V({ ...e.geometry, spatialReference: t }) });
}
function Se(e, t) {
  return { adds: e?.adds?.map((a) => E(a, t)) || [], updates: e?.updates?.map((a) => ({ original: E(a[0], t), current: E(a[1], t) })) || [], deletes: e?.deletes?.map((a) => E(a, t)) || [], spatialReference: t };
}
function Ie(e) {
  const t = e.details.raw, a = +t.code, r = +t.extendedCode;
  return a === 500 && (r === -2147217144 || r === -2147467261);
}
const Fe = new C({ originalAndCurrentFeatures: "original-and-current-features", none: "none" }), Oe = /* @__PURE__ */ new Set(["Feature Layer", "Oriented Imagery Layer", "Table", "Catalog Layer"]), Ae = new C({ Started: "published", Publishing: "publishing", Stopped: "unavailable" });
let F = class extends H {
  constructor() {
    super(...arguments), this.type = "feature-layer", this.refresh = W(async () => {
      await this.load();
      const e = this.sourceJSON.editingInfo?.lastEditDate;
      if (e == null) return { dataChanged: !0, updates: {} };
      try {
        await this._fetchService(null);
      } catch {
        return { dataChanged: !0, updates: {} };
      }
      const t = e !== this.sourceJSON.editingInfo?.lastEditDate;
      return { dataChanged: t, updates: t ? { editingInfo: this.sourceJSON.editingInfo, extent: this.sourceJSON.extent } : null };
    }), this._ongoingAssetUploads = /* @__PURE__ */ new Map();
  }
  load(e) {
    const t = this.layer.sourceJSON, a = this._fetchService(t, { ...e }).then(() => this.layer.setUserPrivileges(this.sourceJSON.serviceItemId, e)).then(() => this._ensureLatestMetadata(e));
    return this.addResolvingPromise(a), Promise.resolve(this);
  }
  get queryTask() {
    const { capabilities: e, parsedUrl: t, dynamicDataSource: a, infoFor3D: r, gdbVersion: s, spatialReference: n, fieldsIndex: i } = this.layer, o = M("featurelayer-pbf") && e?.query.supportsFormatPBF && r == null, u = e?.operations?.supportsQueryAttachments ?? !1;
    return new X({ url: t.path, pbfSupported: o, fieldsIndex: i, infoFor3D: r, dynamicDataSource: a, gdbVersion: s, sourceSpatialReference: n, queryAttachmentsSupported: u });
  }
  async addAttachment(e, t) {
    await this.load();
    const { layer: a } = this;
    await A(a, "editing");
    const r = e.attributes[a.objectIdField], s = a.parsedUrl.path + "/" + r + "/addAttachment", n = this._getLayerRequestOptions(), i = this._getFormDataForAttachment(t, n.query);
    try {
      const o = await m(s, { body: i });
      return R(o.data.addAttachmentResult);
    } catch (o) {
      throw this._createAttachmentErrorResult(r, o);
    }
  }
  async updateAttachment(e, t, a) {
    await this.load();
    const { layer: r } = this;
    await A(r, "editing");
    const s = e.attributes[r.objectIdField], n = r.parsedUrl.path + "/" + s + "/updateAttachment", i = this._getLayerRequestOptions({ query: { attachmentId: t } }), o = this._getFormDataForAttachment(a, i.query);
    try {
      const u = await m(n, { body: o });
      return R(u.data.updateAttachmentResult);
    } catch (u) {
      throw this._createAttachmentErrorResult(s, u);
    }
  }
  async applyEdits(e, t) {
    await this.load();
    const { layer: a } = this;
    await A(a, "editing");
    const r = a.infoFor3D, s = r != null, n = s || (t?.globalIdUsed ?? !1), i = s ? await this._uploadMeshesAndGetAssetMapEditsJSON(e) : null, o = e.addFeatures?.map((p) => U(this.layer, p, r)) ?? [], u = (await Promise.all(o)).filter($), c = e.updateFeatures?.map((p) => U(this.layer, p, r)) ?? [], d = (await Promise.all(c)).filter($), y = Re(this.layer, e.deleteFeatures, n);
    Y(u, d, a.spatialReference);
    const g = await be(this.layer, e), q = a.capabilities.editing.supportsAsyncApplyEdits && s, w = t?.gdbVersion || a.gdbVersion, l = { gdbVersion: w, rollbackOnFailure: t?.rollbackOnFailureEnabled, useGlobalIds: n, returnEditMoment: t?.returnEditMoment, usePreviousEditMoment: t?.usePreviousEditMoment, async: q };
    await Z(this.layer.url, w, !0);
    const S = z(this.layer.url, w || null);
    if (await B(a.url, w, a.historicMoment)) throw new I("feature-layer-source:historic-version", "Editing a historic version is not allowed");
    t?.returnServiceEditsOption ? (l.edits = JSON.stringify([{ id: a.layerId, adds: u, updates: d, deletes: y, attachments: g, assetMaps: i }]), l.returnServiceEditsOption = Fe.toJSON(t?.returnServiceEditsOption), l.returnServiceEditsInSourceSR = t?.returnServiceEditsInSourceSR) : (l.adds = u.length ? JSON.stringify(u) : null, l.updates = d.length ? JSON.stringify(d) : null, l.deletes = y.length ? n ? JSON.stringify(y) : y.join(",") : null, l.attachments = g && JSON.stringify(g), l.assetMaps = i != null ? JSON.stringify(i) : void 0);
    const h = this._getLayerRequestOptions({ method: "post", query: l });
    S && (h.authMode = "immediate", h.query.returnEditMoment = !0, h.query.sessionId = K);
    const f = t?.returnServiceEditsOption ? a.url : a.parsedUrl.path;
    let b;
    try {
      b = q ? await this._asyncApplyEdits(f + "/applyEdits", h) : await m(f + "/applyEdits", h);
    } catch (p) {
      if (!Ie(p)) throw p;
      h.authMode = "immediate", b = q ? await this._asyncApplyEdits(f + "/applyEdits", h) : await m(f + "/applyEdits", h);
    }
    return !a.capabilities.operations?.supportsEditing && a.effectiveCapabilities?.operations?.supportsEditing && await pe?.findCredential(a.url)?.refreshToken(), this._createEditsResult(b);
  }
  async deleteAttachments(e, t) {
    await this.load();
    const { layer: a } = this;
    await A(a, "editing");
    const r = e.attributes[a.objectIdField], s = a.parsedUrl.path + "/" + r + "/deleteAttachments";
    try {
      return (await m(s, this._getLayerRequestOptions({ query: { attachmentIds: t.join(",") }, method: "post" }))).data.deleteAttachmentResults.map(R);
    } catch (n) {
      throw this._createAttachmentErrorResult(r, n);
    }
  }
  fetchRecomputedExtents(e = {}) {
    const t = e.signal;
    return this.load({ signal: t }).then(async () => {
      const a = this._getLayerRequestOptions({ ...e, query: { returnUpdates: !0 } }), { layerId: r, url: s } = this.layer, { data: n } = await m(`${s}/${r}`, a), { id: i, extent: o, fullExtent: u, timeExtent: c } = n, d = o || u;
      return { id: i, fullExtent: d && ee.fromJSON(d), timeExtent: c && te.fromJSON({ start: c[0], end: c[1] }) };
    });
  }
  async queryAttachments(e, t = {}) {
    await this.load();
    const a = this._getLayerRequestOptions(t);
    return this.queryTask.executeAttachmentQuery(e, a);
  }
  async queryFeatures(e, t) {
    await this.load();
    const a = await this.queryTask.execute(e, { ...t, query: this._createRequestQueryOptions(t) });
    return e.outStatistics?.length && a.features.length && a.features.forEach((r) => {
      const s = r.attributes;
      e.outStatistics?.forEach(({ outStatisticFieldName: n }) => {
        if (n) {
          const i = n.toLowerCase();
          i && i in s && n !== i && (s[n] = s[i], delete s[i]);
        }
      });
    }), a;
  }
  async queryFeaturesJSON(e, t) {
    return await this.load(), this.queryTask.executeJSON(e, { ...t, query: this._createRequestQueryOptions(t) });
  }
  async queryObjectIds(e, t) {
    return await this.load(), this.queryTask.executeForIds(e, { ...t, query: this._createRequestQueryOptions(t) });
  }
  async queryFeatureCount(e, t) {
    return await this.load(), this.queryTask.executeForCount(e, { ...t, query: this._createRequestQueryOptions(t) });
  }
  async queryExtent(e, t) {
    return await this.load(), this.queryTask.executeForExtent(e, { ...t, query: this._createRequestQueryOptions(t) });
  }
  async queryRelatedFeatures(e, t) {
    return await this.load(), this.queryTask.executeRelationshipQuery(e, { ...t, query: this._createRequestQueryOptions(t) });
  }
  async queryRelatedFeaturesCount(e, t) {
    return await this.load(), this.queryTask.executeRelationshipQueryForCount(e, { ...t, query: this._createRequestQueryOptions(t) });
  }
  async queryTopFeatures(e, t) {
    return await this.load(), this.queryTask.executeTopFeaturesQuery(e, { ...t, query: this._createRequestQueryOptions(t) });
  }
  async queryTopObjectIds(e, t) {
    return await this.load(), this.queryTask.executeForTopIds(e, { ...t, query: this._createRequestQueryOptions(t) });
  }
  async queryTopExtents(e, t) {
    return await this.load(), this.queryTask.executeForTopExtents(e, { ...t, query: this._createRequestQueryOptions(t) });
  }
  async queryTopCount(e, t) {
    return await this.load(), this.queryTask.executeForTopCount(e, { ...t, query: this._createRequestQueryOptions(t) });
  }
  async fetchPublishingStatus() {
    if (!ae(this.layer.url)) return "unavailable";
    const e = J(this.layer.url, "status"), t = await m(e, { query: { f: "json" } });
    return Ae.fromJSON(t.data.status);
  }
  async uploadAssets(e, t) {
    const { uploadAssets: a } = await import("./uploadAssets-BqrTp3yw.js");
    return a(e, { layer: this.layer, ongoingUploads: this._ongoingAssetUploads }, t);
  }
  async _asyncApplyEdits(e, t) {
    const a = (await m(e, t)).data.statusUrl;
    for (; ; ) {
      const r = (await m(a, { query: { f: "json" }, responseType: "json" })).data;
      switch (r.status) {
        case "Completed":
          return m(r.resultUrl, { query: { f: "json" }, responseType: "json" });
        case "CompletedWithErrors":
          throw new I("async-applyEdits-failed", "asynchronous applyEdits call failed.");
        case "Failed ImportChanges":
        case "InProgress":
        case "Pending":
        case "ExportAttachments":
        case "ExportChanges":
        case "ExportingData":
        case "ExportingSnapshot":
        case "ImportAttachments":
        case "ProvisioningReplica":
        case "UnRegisteringReplica":
          break;
        default:
          throw new I("async-applyEdits-failed", "asynchronous applyEdits call failed (undefined response status)");
      }
      await se(Ee);
    }
  }
  _createRequestQueryOptions(e) {
    const t = { ...this.layer.customParameters, token: this.layer.apiKey, ...e?.query };
    return this.layer.datesInUnknownTimezone && (t.timeReferenceUnknownClient = !0), t;
  }
  async _fetchService(e, t) {
    if (!e) {
      const r = {};
      M("featurelayer-advanced-symbols") && (r.returnAdvancedSymbols = !0), t?.cacheBust && (r._ts = Date.now());
      const { data: s } = await m(this.layer.parsedUrl.path, this._getLayerRequestOptions({ query: r, signal: t?.signal }));
      e = s;
    }
    this.sourceJSON = await this._patchServiceJSON(e, t?.signal);
    const a = e.type;
    if (!Oe.has(a)) throw new I("feature-layer-source:unsupported-type", `Source type "${a}" is not supported`);
  }
  async _patchServiceJSON(e, t) {
    if (e.type !== "Table" && e.geometryType && !e?.drawingInfo?.renderer && !e.defaultSymbol) {
      const a = we(e.geometryType).renderer;
      re("drawingInfo.renderer", a, e);
    }
    if (e.geometryType === "esriGeometryMultiPatch" && e.infoFor3D && (e.geometryType = "mesh"), e.extent == null) try {
      const { data: a } = await m(this.layer.url, this._getLayerRequestOptions({ signal: t }));
      a.spatialReference && (e.extent = { xmin: 0, ymin: 0, xmax: 0, ymax: 0, spatialReference: a.spatialReference });
    } catch (a) {
      ne(a);
    }
    return e;
  }
  async _ensureLatestMetadata(e) {
    if (this.layer.userHasUpdateItemPrivileges && this.sourceJSON.cacheMaxAge > 0) return this._fetchService(null, { ...e, cacheBust: !0 });
  }
  async _uploadMeshesAndGetAssetMapEditsJSON(e) {
    const { addAssetFeatures: t } = e;
    if (!t?.length) return null;
    const a = await this._filterRedundantAssetMaps(t);
    if (!t?.length) return null;
    const r = new Array(), s = /* @__PURE__ */ new Map();
    for (const n of a) {
      const { geometry: i } = n, { vertexSpace: o } = i;
      if (he(o)) r.push(i);
      else {
        const u = ye(i);
        s.set(u, i), n.geometry = u, r.push(u);
      }
    }
    await this.uploadAssets(r);
    for (const [n, i] of s) i.addExternalSources(n.metadata.externalSources.items);
    return { adds: this._getAssetMapEditsJSON(a), updates: [], deletes: [] };
  }
  _getAssetMapEditsJSON(e) {
    const t = new Array(), a = this.layer.globalIdField, r = this.layer.parsedUrl;
    for (const s of e) {
      const n = s.geometry, { metadata: i } = n, o = i.getExternalSourcesOnService(r), u = s.getAttribute(a);
      if (o.length === 0) {
        _.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);
        continue;
      }
      const { source: c } = o.find(fe) ?? o[0];
      for (const d of c) d.parts.length === 1 ? t.push({ globalId: ie(), parentGlobalId: u, assetName: d.assetName, assetHash: d.parts[0].partHash, flags: [] }) : _.getLogger(this).error(`Skipping asset ${d.assetName}. It does not have exactly one part, so we cannot map it to a feature.`);
    }
    return t;
  }
  _createEditsResult(e) {
    const t = e.data, { layerId: a } = this.layer, r = [];
    let s = null;
    if (Array.isArray(t)) for (const i of t) r.push({ id: i.id, editedFeatures: i.editedFeatures }), i.id === a && (s = { addResults: i.addResults ?? [], updateResults: i.updateResults ?? [], deleteResults: i.deleteResults ?? [], attachments: i.attachments, editMoment: i.editMoment });
    else s = t;
    const n = qe(s);
    if (r.length > 0) {
      n.editedFeatureResults = [];
      for (const i of r) {
        const { editedFeatures: o } = i, u = o?.spatialReference ? new oe(o.spatialReference) : null;
        n.editedFeatureResults.push({ layerId: i.id, editedFeatures: Se(o, u) });
      }
    }
    return n;
  }
  _createAttachmentErrorResult(e, t) {
    const a = t.details.messages?.[0] || t.message, r = t.details.httpStatus || t.details.messageCode;
    return { objectId: e, globalId: null, error: new I("feature-layer-source:attachment-failure", a, { code: r }) };
  }
  _getFormDataForAttachment(e, t) {
    const a = e instanceof FormData ? e : e && e.elements ? new FormData(e) : null;
    if (a) for (const r in t) {
      const s = t[r];
      s != null && (a.set ? a.set(r, s) : a.append(r, s));
    }
    return a;
  }
  _getLayerRequestOptions(e = {}) {
    const { parsedUrl: t, gdbVersion: a, dynamicDataSource: r } = this.layer;
    return { ...e, query: { gdbVersion: a, layer: r ? JSON.stringify({ source: r }) : void 0, ...t.query, f: "json", ...this._createRequestQueryOptions(e) }, responseType: "json" };
  }
  async _filterRedundantAssetMaps(e) {
    const { layer: t } = this, { globalIdField: a, infoFor3D: r, parsedUrl: s } = t;
    if (r == null || a == null) return e;
    const n = ue(r);
    if (n == null) return e;
    const i = J(s.path, `../${n.id}`), o = new Array(), u = new Array();
    for (const l of e) l.geometry.metadata.getExternalSourcesOnService(s).length > 0 ? u.push(l) : o.push(l);
    const c = u.map((l) => l.getAttribute(a)).filter($);
    if (c.length === 0) return e;
    const { assetMapFieldRoles: { parentGlobalId: d, assetHash: y } } = r, g = new le();
    g.where = `${d} IN (${c.map((l) => `'${l}'`)})`, g.outFields = [y, d], g.returnGeometry = !1;
    const q = await de(i, g), { features: w } = q;
    return w.length === 0 ? e : [...o, ...u.filter((l) => {
      const S = l.getAttribute(a);
      if (!S) return !0;
      const { metadata: h } = l.geometry, f = w.filter((p) => p.getAttribute(d) === S);
      if (f.length === 0) return !0;
      const b = f.map((p) => p.getAttribute(y));
      return h.getExternalSourcesOnService(s).flatMap(({ source: p }) => p.flatMap((x) => x.parts.map((j) => j.partHash))).some((p) => b.every((x) => p !== x));
    })];
  }
};
O([v()], F.prototype, "type", void 0), O([v({ constructOnly: !0 })], F.prototype, "layer", void 0), O([v({ readOnly: !0 })], F.prototype, "queryTask", null), F = O([ce("esri.layers.graphics.sources.FeatureLayerSource")], F);
const Ee = 1e3, Ne = F;
export {
  Ne as default
};
//# sourceMappingURL=FeatureLayerSource-O7Zzszvf.js.map
