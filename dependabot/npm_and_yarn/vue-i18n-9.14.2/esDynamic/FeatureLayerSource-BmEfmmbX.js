import { K as L, f5 as U, br as j, f6 as Q, f7 as T, f8 as P, D as x, s as R, aj as G, eV as V, f9 as C, O as E, P as F, fa as H, f1 as z, S as W, a9 as M, fb as X, fc as A, $ as m, bm as v, fd as Y, fe as Z, ff as B, fg as K, fh as ee, b8 as te, fi as ae, fj as se, b1 as $, a1 as N, fk as re, fl as ne, eO as ie, _ as oe, ah as ue, bx as le, fm as de, fn as ce, fo as pe, Q as he } from "./main-uCo5F72j.js";
import { i as ye } from "./MeshLocalVertexSpace-CI0yOdvD.js";
import { a as fe } from "./meshVertexSpaceUtils-2aIMUmPD.js";
import { N as me, v as ge } from "./MeshTransform-BgOk5qUs.js";
import { isFeatureIdentifierArrayWithGlobalId as we, isFeatureIdentifierArrayWithObjectId as be } from "./editingSupport-BMh7p3mw.js";
import { o as Ie } from "./clientSideDefaults-BD9eZqVs.js";
async function J(t, e, a) {
  const { geometry: r } = e, s = { ...e.attributes };
  if (a != null && r?.type === "mesh") {
    const { transformFieldRoles: n } = a, { origin: i, spatialReference: o, vertexSpace: u } = r, d = r.transform ?? new me(), l = u.type === "local", f = t.spatialReference, I = f.isGeographic, S = L(f, o), p = U(o, f) && j(o, f);
    if (!(l && I && p || !l && !I && S)) return null;
    const c = Q(i, o, f);
    if (c == null) return null;
    if (s[n.originX] = c.x, s[n.originY] = c.y, s[n.originZ] = c.z ?? 0, d != null) {
      const { translation: q, scale: h, rotation: g } = d, y = l ? 1 : T(o) / T(f);
      s[n.translationX] = q[0] * y, s[n.translationY] = q[2] * y, s[n.translationZ] = -q[1] * y, s[n.scaleX] = h[0], s[n.scaleY] = h[2], s[n.scaleZ] = h[1], s[n.rotationX] = g[0], s[n.rotationY] = g[2], s[n.rotationZ] = -g[1], s[n.rotationDeg] = g[3];
    }
    return { attributes: s };
  }
  return r == null ? { attributes: s } : r.type === "mesh" || r.type === "extent" ? null : { geometry: r.toJSON(), attributes: s };
}
async function Se(t, e) {
  const a = await Promise.all((e.addAttachments ?? []).map((n) => D(t, n))), r = await Promise.all((e.updateAttachments ?? []).map((n) => D(t, n))), s = e.deleteAttachments ?? [];
  return a.length || r.length || s.length ? { adds: a, updates: r, deletes: [...s] } : null;
}
async function D(t, e) {
  const { feature: a, attachment: r } = e, { globalId: s, name: n, contentType: i, data: o, uploadId: u } = r, d = { globalId: s };
  if (a && ("attributes" in a ? d.parentGlobalId = a.attributes?.[t.globalIdField] : a.globalId && (d.parentGlobalId = a.globalId)), u) d.uploadId = u;
  else if (o) {
    const l = await P(o);
    l && (d.contentType = l.mediaType, d.data = l.data), o instanceof File && (d.name = o.name);
  }
  return n && (d.name = n), i && (d.contentType = i), d;
}
function qe(t, e, a) {
  if (!e || e.length === 0) return [];
  if (a && we(e)) return e.map((s) => s.globalId);
  if (be(e)) return e.map((s) => s.objectId);
  const r = a ? t.globalIdField : t.objectIdField;
  return r ? e.map((s) => s.getAttribute(r)) : [];
}
function Re(t) {
  const e = t?.assetMaps;
  if (e) {
    for (const s of e.addResults) s.success || x.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${s.globalId}.`);
    for (const s of e.updateResults) s.success || x.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${s.globalId}.`);
  }
  const a = t?.attachments, r = { addFeatureResults: t?.addResults?.map(b) ?? [], updateFeatureResults: t?.updateResults?.map(b) ?? [], deleteFeatureResults: t?.deleteResults?.map(b) ?? [], addAttachmentResults: a?.addResults ? a.addResults.map(b) : [], updateAttachmentResults: a?.updateResults ? a.updateResults.map(b) : [], deleteAttachmentResults: a?.deleteResults ? a.deleteResults.map(b) : [] };
  return t?.editMoment && (r.editMoment = t.editMoment), r;
}
function b(t) {
  const e = t.success === !0 ? null : t.error || { code: void 0, description: void 0 };
  return { objectId: t.objectId, globalId: t.globalId, error: e ? new R("feature-layer-source:edit-failure", e.description, { code: e.code }) : null };
}
function _(t, e) {
  return new G({ attributes: t.attributes, geometry: V({ ...t.geometry, spatialReference: e }) });
}
function Oe(t, e) {
  return { adds: t?.adds?.map((a) => _(a, e)) || [], updates: t?.updates?.map((a) => ({ original: _(a[0], e), current: _(a[1], e) })) || [], deletes: t?.deletes?.map((a) => _(a, e)) || [], spatialReference: e };
}
function Ee(t) {
  const e = t.details.raw, a = +e.code, r = +e.extendedCode;
  return a === 500 && (r === -2147217144 || r === -2147467261);
}
const Fe = new C({ originalAndCurrentFeatures: "original-and-current-features", none: "none" }), Ae = new C({ Started: "published", Publishing: "publishing", Stopped: "unavailable" });
let O = class extends H {
  constructor(t) {
    super(t), this.type = "feature-layer", this.supportedSourceTypes = /* @__PURE__ */ new Set(["Feature Layer", "Oriented Imagery Layer", "Table", "Catalog Layer"]), this.refresh = z(async () => {
      await this.load();
      const e = this.sourceJSON.editingInfo?.lastEditDate;
      if (e == null) return { dataChanged: !0, updates: {} };
      try {
        await this._fetchService(null);
      } catch {
        return { dataChanged: !0, updates: {} };
      }
      const a = e !== this.sourceJSON.editingInfo?.lastEditDate;
      return { dataChanged: a, updates: a ? { editingInfo: this.sourceJSON.editingInfo, extent: this.sourceJSON.extent } : null };
    }), this._ongoingAssetUploads = /* @__PURE__ */ new Map();
  }
  load(t) {
    const e = this.layer.sourceJSON, a = this._fetchService(e, { ...t }).then(() => this.layer.setUserPrivileges(this.sourceJSON.serviceItemId, t)).then(() => this._ensureLatestMetadata(t));
    return this.addResolvingPromise(a), Promise.resolve(this);
  }
  initialize() {
    this.addHandles([W(() => {
      const t = this.layer;
      return t && "lastEditsEventDate" in t ? t.lastEditsEventDate : null;
    }, (t) => this._handleLastEditsEventChange(t))]);
  }
  destroy() {
    this._removeEditInterceptor();
  }
  get queryTask() {
    const { capabilities: t, parsedUrl: e, gdbVersion: a, spatialReference: r, fieldsIndex: s } = this.layer, n = "infoFor3D" in this.layer ? this.layer.infoFor3D : null, i = "dynamicDataSource" in this.layer ? this.layer.dynamicDataSource : null, o = M("featurelayer-pbf") && t?.query.supportsFormatPBF && n == null, u = t?.operations?.supportsQueryAttachments ?? !1;
    return new X({ url: e.path, pbfSupported: o, fieldsIndex: s, infoFor3D: n, dynamicDataSource: i, gdbVersion: a, sourceSpatialReference: r, queryAttachmentsSupported: u });
  }
  async addAttachment(t, e) {
    await this.load();
    const { layer: a } = this;
    await A(a, "editing");
    const r = t.attributes[a.objectIdField], s = a.parsedUrl.path + "/" + r + "/addAttachment", n = this._getLayerRequestOptions(), i = this._getFormDataForAttachment(e, n.query);
    try {
      const o = await m(s, { body: i });
      return b(o.data.addAttachmentResult);
    } catch (o) {
      throw this._createAttachmentErrorResult(r, o);
    }
  }
  async updateAttachment(t, e, a) {
    await this.load();
    const { layer: r } = this;
    await A(r, "editing");
    const s = t.attributes[r.objectIdField], n = r.parsedUrl.path + "/" + s + "/updateAttachment", i = this._getLayerRequestOptions({ query: { attachmentId: e } }), o = this._getFormDataForAttachment(a, i.query);
    try {
      const u = await m(n, { body: o });
      return b(u.data.updateAttachmentResult);
    } catch (u) {
      throw this._createAttachmentErrorResult(s, u);
    }
  }
  async applyEdits(t, e) {
    await this.load();
    const { layer: a } = this;
    await A(a, "editing");
    const r = "infoFor3D" in a ? a.infoFor3D : null, s = r != null, n = s || (e?.globalIdUsed ?? !1), i = s ? await this._uploadMeshesAndGetAssetMapEditsJSON(t) : null, o = t.addFeatures?.map((w) => J(this.layer, w, r)) ?? [], u = (await Promise.all(o)).filter(v), d = t.updateFeatures?.map((w) => J(this.layer, w, r)) ?? [], l = (await Promise.all(d)).filter(v), f = qe(this.layer, t.deleteFeatures, n);
    Y(u, l, a.spatialReference);
    const I = await Se(this.layer, t), S = a.capabilities.editing.supportsAsyncApplyEdits && s, p = e?.gdbVersion || a.gdbVersion, c = { gdbVersion: p, rollbackOnFailure: e?.rollbackOnFailureEnabled, useGlobalIds: n, returnEditMoment: e?.returnEditMoment, usePreviousEditMoment: e?.usePreviousEditMoment, async: S };
    await Z(this.layer.url, p, !0);
    const q = B(this.layer.url, p || null);
    if (await K(a.url, p, a.historicMoment)) throw new R("feature-layer-source:historic-version", "Editing a historic version is not allowed");
    e?.returnServiceEditsOption ? (c.edits = JSON.stringify([{ id: a.layerId, adds: u.length ? u : null, updates: l.length ? l : null, deletes: f.length ? f : null, attachments: I, assetMaps: i }]), c.returnServiceEditsOption = Fe.toJSON(e?.returnServiceEditsOption), c.returnServiceEditsInSourceSR = e?.returnServiceEditsInSourceSR) : (c.adds = u.length ? JSON.stringify(u) : null, c.updates = l.length ? JSON.stringify(l) : null, c.deletes = f.length ? n ? JSON.stringify(f) : f.join(",") : null, c.attachments = I && JSON.stringify(I), c.assetMaps = i != null ? JSON.stringify(i) : void 0);
    const h = this._getLayerRequestOptions({ method: "post", query: c });
    q && (h.authMode = "immediate", h.query.returnEditMoment = !0, h.query.sessionId = ee);
    const g = e?.returnServiceEditsOption ? a.url : a.parsedUrl.path;
    let y;
    try {
      y = S ? await this._asyncApplyEdits(g + "/applyEdits", h) : await m(g + "/applyEdits", h);
    } catch (w) {
      if (!Ee(w)) throw w;
      h.authMode = "immediate", y = S ? await this._asyncApplyEdits(g + "/applyEdits", h) : await m(g + "/applyEdits", h);
    }
    return this._createEditsResult(y);
  }
  async deleteAttachments(t, e) {
    await this.load();
    const { layer: a } = this;
    await A(a, "editing");
    const r = t.attributes[a.objectIdField], s = a.parsedUrl.path + "/" + r + "/deleteAttachments";
    try {
      return (await m(s, this._getLayerRequestOptions({ query: { attachmentIds: e.join(",") }, method: "post" }))).data.deleteAttachmentResults.map(b);
    } catch (n) {
      throw this._createAttachmentErrorResult(r, n);
    }
  }
  fetchRecomputedExtents(t = {}) {
    const e = t.signal;
    return this.load({ signal: e }).then(async () => {
      const a = this._getLayerRequestOptions({ ...t, query: { returnUpdates: !0 } }), { layerId: r, url: s } = this.layer, { data: n } = await m(`${s}/${r}`, a), { id: i, extent: o, fullExtent: u, timeExtent: d } = n, l = o || u;
      return { id: i, fullExtent: l && te.fromJSON(l), timeExtent: d && ae.fromJSON({ start: d[0], end: d[1] }) };
    });
  }
  async queryAttachments(t, e = {}) {
    await this.load();
    const a = this._getLayerRequestOptions(e);
    return this.queryTask.executeAttachmentQuery(t, a);
  }
  async queryFeatures(t, e) {
    await this.load();
    const a = await this.queryTask.execute(t, { ...e, query: this._createRequestQueryOptions(e) });
    return t.outStatistics?.length && a.features.length && a.features.forEach((r) => {
      const s = r.attributes;
      t.outStatistics?.forEach(({ outStatisticFieldName: n }) => {
        if (n) {
          const i = n.toLowerCase();
          i && i in s && n !== i && (s[n] = s[i], delete s[i]);
        }
      });
    }), a;
  }
  async queryFeaturesJSON(t, e) {
    return await this.load(), this.queryTask.executeJSON(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryObjectIds(t, e) {
    return await this.load(), this.queryTask.executeForIds(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryFeatureCount(t, e) {
    return await this.load(), this.queryTask.executeForCount(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryExtent(t, e) {
    return await this.load(), this.queryTask.executeForExtent(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryRelatedFeatures(t, e) {
    return await this.load(), this.queryTask.executeRelationshipQuery(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryRelatedFeaturesCount(t, e) {
    return await this.load(), this.queryTask.executeRelationshipQueryForCount(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryTopFeatures(t, e) {
    return await this.load(), this.queryTask.executeTopFeaturesQuery(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryTopObjectIds(t, e) {
    return await this.load(), this.queryTask.executeForTopIds(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryTopExtents(t, e) {
    return await this.load(), this.queryTask.executeForTopExtents(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async queryTopCount(t, e) {
    return await this.load(), this.queryTask.executeForTopCount(t, { ...e, query: this._createRequestQueryOptions(e) });
  }
  async fetchPublishingStatus() {
    if (!se(this.layer.url)) return "unavailable";
    const t = $(this.layer.url, "status"), e = await m(t, { query: { f: "json" } });
    return Ae.fromJSON(e.data.status);
  }
  async uploadAssets(t, e) {
    const { uploadAssets: a } = await import("./uploadAssets-BRi9rHH6.js");
    return a(t, { layer: this.layer, ongoingUploads: this._ongoingAssetUploads }, e);
  }
  _handleLastEditsEventChange(t) {
    const e = this.layer;
    if (t == null || !("capabilities" in e) || !("effectiveCapabilities" in e) || !(!e.capabilities?.operations?.supportsEditing && e.effectiveCapabilities?.operations?.supportsEditing)) return;
    const a = e.url;
    a != null && ("layerId" in e && $(a, e.layerId.toString()), this._getOrCreateEditInterceptor(a).before = (r) => {
      const s = r.requestOptions.method ?? "auto";
      if (s === "auto" || s === "head") {
        const n = r.requestOptions.query ?? {};
        n._ts = t.getTime(), r.requestOptions.query = n;
      }
    });
  }
  _getOrCreateEditInterceptor(t) {
    return this._editInterceptor == null && (this._editInterceptor = { urls: t }, N.request.internalInterceptors.push(this._editInterceptor)), this._editInterceptor;
  }
  _removeEditInterceptor() {
    this._editInterceptor != null && (re(N.request.internalInterceptors, this._editInterceptor), this._editInterceptor = null);
  }
  async _asyncApplyEdits(t, e) {
    const a = (await m(t, e)).data.statusUrl;
    for (; ; ) {
      const r = (await m(a, { query: { f: "json" }, responseType: "json" })).data;
      switch (r.status) {
        case "Completed":
          return m(r.resultUrl, { query: { f: "json" }, responseType: "json" });
        case "CompletedWithErrors":
          throw new R("async-applyEdits-failed", "asynchronous applyEdits call failed.");
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
          throw new R("async-applyEdits-failed", "asynchronous applyEdits call failed (undefined response status)");
      }
      await ne(_e);
    }
  }
  _createRequestQueryOptions(t) {
    const e = { ...this.layer.customParameters, token: this.layer.apiKey, ...t?.query };
    return this.layer.datesInUnknownTimezone && (e.timeReferenceUnknownClient = !0), e;
  }
  async _fetchService(t, e) {
    if (!t) {
      const r = {};
      M("featurelayer-advanced-symbols") && (r.returnAdvancedSymbols = !0), e?.cacheBust && (r._ts = Date.now());
      const { data: s } = await m(this.layer.parsedUrl.path, this._getLayerRequestOptions({ query: r, signal: e?.signal }));
      t = s;
    }
    this.sourceJSON = await this._patchServiceJSON(t, e?.signal);
    const a = t.type;
    if (!this.supportedSourceTypes.has(a)) throw new R("feature-layer-source:unsupported-type", `Source type "${a}" is not supported`);
  }
  async _patchServiceJSON(t, e) {
    if (t.type !== "Table" && t.geometryType && !t?.drawingInfo?.renderer && !t.defaultSymbol) {
      const a = Ie(t.geometryType).renderer;
      ie("drawingInfo.renderer", a, t);
    }
    if (t.geometryType === "esriGeometryMultiPatch" && t.infoFor3D && (t.geometryType = "mesh"), t.extent == null) try {
      const { data: a } = await m(this.layer.url, this._getLayerRequestOptions({ signal: e }));
      a.spatialReference && (t.extent = { xmin: 0, ymin: 0, xmax: 0, ymax: 0, spatialReference: a.spatialReference });
    } catch (a) {
      oe(a);
    }
    return t;
  }
  async _ensureLatestMetadata(t) {
    if (this.layer.userHasUpdateItemPrivileges && this.sourceJSON.cacheMaxAge > 0) return this._fetchService(null, { ...t, cacheBust: !0 });
  }
  async _uploadMeshesAndGetAssetMapEditsJSON(t) {
    const { addAssetFeatures: e } = t;
    if (!e?.length || await this._areAllAssetsAlreadyMapped(e)) return null;
    const a = t.addFeatures.filter((n) => n.geometry);
    if (e.length !== a.length + t.updateFeatures.length) throw new R("feature-layer-source:unsupported-mesh-edits", "Mixing attribute only edits with mesh geometry edits is not currently supported");
    const r = new Array(), s = /* @__PURE__ */ new Map();
    for (const n of e) {
      const { geometry: i } = n, { vertexSpace: o } = i;
      if (fe(o)) r.push(i);
      else {
        const u = i.anchor, { convertMeshVertexSpace: d } = await import("./convertMeshVertexSpace-B9i33cZy.js"), l = await d(i, new ye({ origin: [u.x, u.y, u.z ?? 0] }));
        s.set(l, i), n.geometry = l, r.push(l);
      }
    }
    await this.uploadAssets(r);
    for (const [n, i] of s) i.addExternalSources(n.metadata.externalSources.items);
    return { adds: this._getAssetMapEditsJSON(e), updates: [], deletes: [] };
  }
  _getAssetMapEditsJSON(t) {
    const e = new Array(), a = this.layer.globalIdField, r = this.layer.parsedUrl;
    for (const s of t) {
      const n = s.geometry, { metadata: i } = n, o = i.getExternalSourcesOnService(r), u = s.getAttribute(a);
      if (o.length === 0) {
        x.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);
        continue;
      }
      const { source: d } = o.find(ge) ?? o[0];
      for (const l of d) l.parts.length === 1 ? e.push({ globalId: ue(), parentGlobalId: u, assetName: l.assetName, assetHash: l.parts[0].partHash, flags: [] }) : x.getLogger(this).error(`Skipping asset ${l.assetName}. It does not have exactly one part, so we cannot map it to a feature.`);
    }
    return e;
  }
  _createEditsResult(t) {
    const e = t.data, { layerId: a } = this.layer, r = [];
    let s = null;
    if (Array.isArray(e)) for (const i of e) r.push({ id: i.id, editedFeatures: i.editedFeatures }), i.id === a && (s = { addResults: i.addResults ?? [], updateResults: i.updateResults ?? [], deleteResults: i.deleteResults ?? [], attachments: i.attachments, editMoment: i.editMoment });
    else s = e;
    const n = Re(s);
    if (r.length > 0) {
      n.editedFeatureResults = [];
      for (const i of r) {
        const { editedFeatures: o } = i, u = o?.spatialReference ? new le(o.spatialReference) : null;
        n.editedFeatureResults.push({ layerId: i.id, editedFeatures: Oe(o, u) });
      }
    }
    return n;
  }
  _createAttachmentErrorResult(t, e) {
    const a = e.details.messages?.[0] || e.message, r = e.details.httpStatus || e.details.messageCode;
    return { objectId: t, globalId: null, error: new R("feature-layer-source:attachment-failure", a, { code: r }) };
  }
  _getFormDataForAttachment(t, e) {
    const a = t instanceof FormData ? t : t && t.elements ? new FormData(t) : null;
    if (a) for (const r in e) {
      const s = e[r];
      s != null && (a.set ? a.set(r, s) : a.append(r, s));
    }
    return a;
  }
  _getLayerRequestOptions(t = {}) {
    const { layer: e, layer: { parsedUrl: a, gdbVersion: r } } = this;
    return { ...t, query: { gdbVersion: r, layer: "dynamicDataSource" in e && e.dynamicDataSource ? JSON.stringify({ source: e.dynamicDataSource }) : void 0, ...a.query, f: "json", ...this._createRequestQueryOptions(t) }, responseType: "json" };
  }
  async _areAllAssetsAlreadyMapped(t) {
    const { layer: e } = this, { globalIdField: a, parsedUrl: r } = e, s = "infoFor3D" in e ? e.infoFor3D : null;
    if (s == null || a == null) return !1;
    const n = de(s);
    if (n == null) return !1;
    const i = $(r.path, `../${n.id}`), o = new Array();
    for (const p of t) {
      if (!(p.geometry.metadata.getExternalSourcesOnService(r).length > 0)) return !1;
      o.push(p);
    }
    const u = o.map((p) => p.getAttribute(a)).filter(v);
    if (u.length === 0) return !1;
    const { assetMapFieldRoles: { parentGlobalId: d, assetHash: l } } = s, f = new ce({ where: `${d} IN (${u.map((p) => `'${p}'`)})`, outFields: [l, d], returnGeometry: !1 }), I = await pe(i, f), { features: S } = I;
    return S.length !== 0 && !o.some((p) => {
      const c = p.getAttribute(a);
      if (!c) return !0;
      const { metadata: q } = p.geometry, h = S.filter((y) => y.getAttribute(d) === c);
      if (h.length === 0) return !0;
      const g = h.map((y) => y.getAttribute(l));
      return q.getExternalSourcesOnService(r).flatMap(({ source: y }) => y.flatMap((w) => w.parts.map((k) => k.partHash))).some((y) => g.every((w) => y !== w));
    });
  }
};
E([F()], O.prototype, "type", void 0), E([F({ constructOnly: !0 })], O.prototype, "layer", void 0), E([F({ constructOnly: !0 })], O.prototype, "supportedSourceTypes", void 0), E([F({ readOnly: !0 })], O.prototype, "queryTask", null), O = E([he("esri.layers.graphics.sources.FeatureLayerSource")], O);
const _e = 1e3, Je = O;
export {
  Je as default
};
//# sourceMappingURL=FeatureLayerSource-BmEfmmbX.js.map
