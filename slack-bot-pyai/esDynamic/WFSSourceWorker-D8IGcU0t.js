import { s as g, a8 as p, cW as T, b0 as E, c_ as P, C as y, dA as _, K as C, J as q, c$ as I, d0 as b } from "./main-DhLeoxL5.js";
import { m as $ } from "./FeatureStore-CfjR2eEe.js";
import { x as j, j as N } from "./timeSupport-BRnfgqgY.js";
import { $ as O } from "./QueryEngine-CV1hDDa0.js";
import { E as Q, N as M } from "./geojson-CT0trqVh.js";
import { p as k } from "./sourceUtils-DAfknIDN.js";
import { o as L, e as J, K as f } from "./wfsUtils-CG1UcaAb.js";
const x = "esri.layers.WFSLayer";
class B {
  constructor() {
    this._customParameters = null, this._queryEngine = null, this._supportsPagination = !0;
  }
  destroy() {
    this._queryEngine?.destroy(), this._queryEngine = null;
  }
  async load(t, e = {}) {
    const { getFeatureUrl: s, getFeatureOutputFormat: o, fields: i, geometryType: u, featureType: r, maxRecordCount: n, maxTotalRecordCount: c, maxPageCount: R, objectIdField: d, customParameters: F } = t, { spatialReference: l, getFeatureSpatialReference: m } = L(s, r, t.spatialReference);
    try {
      await j(m, l);
    } catch {
      throw new g("unsupported-projection", "Projection not supported", { inSpatialReference: m, outSpatialReference: l });
    }
    p(e), this._customParameters = F, this._featureType = r, this._fieldsIndex = T.fromLayerJSON({ fields: i, dateFieldsTimeReference: i.some((S) => S.type === "esriFieldTypeDate") ? { timeZoneIANA: E } : null }), this._geometryType = u, this._getFeatureUrl = s, this._getFeatureOutputFormat = o, this._getFeatureSpatialReference = m, this._maxRecordCount = n, this._maxTotalRecordCount = c, this._maxPageCount = R, this._objectIdField = d, this._spatialReference = l;
    let h = await this._snapshotFeatures(e);
    if (h.errors.length > 0 && (this._supportsPagination = !1, h = await this._snapshotFeatures(e), h.errors.length > 0)) throw h.errors[0];
    return this._queryEngine = new O({ fieldsIndex: this._fieldsIndex, geometryType: u, hasM: !1, hasZ: !1, objectIdField: d, spatialReference: l, timeInfo: null, featureStore: new $({ geometryType: u, hasM: !1, hasZ: !1 }) }), this._queryEngine.featureStore.addMany(h.features), { warnings: w(h), extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent };
  }
  async applyEdits() {
    throw new g("wfs-source:editing-not-supported", "applyEdits() is not supported on WFSLayer");
  }
  async queryFeatures(t = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(t, e.signal);
  }
  async queryFeatureCount(t = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(t, e.signal);
  }
  async queryObjectIds(t = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForIds(t, e.signal);
  }
  async queryExtent(t = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(t, e.signal);
  }
  async querySnapping(t, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForSnapping(t, e.signal);
  }
  async refresh(t) {
    return this._customParameters = t.customParameters, this._maxRecordCount = t.maxRecordCount, this._maxTotalRecordCount = t.maxTotalRecordCount, this._maxPageCount = t.maxPageCount, this._snapshotTask?.abort(), this._snapshotTask = P((e) => this._snapshotFeatures({ signal: e })), this._snapshotTask.promise.then((e) => {
      this._queryEngine.featureStore.clear(), this._queryEngine.featureStore.addMany(e.features);
      for (const s of w(e)) y.getLogger(x).warn(new _("wfs-layer:refresh-warning", s.message, s.details));
      e.errors?.length && y.getLogger(x).warn(new _("wfs-layer:refresh-error", "Refresh completed with errors", { errors: e.errors }));
    }, () => {
      this._queryEngine.featureStore.clear();
    }), await this._waitSnapshotComplete(), { extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent };
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {
      }
      return this._waitSnapshotComplete();
    }
  }
  async _snapshotFeatures(t) {
    const e = t?.signal, s = this._maxTotalRecordCount, o = this._maxPageCount, i = this._supportsPagination ? await J(this._getFeatureUrl, this._featureType.typeName, { customParameters: this._customParameters, signal: e }) : void 0;
    let u = [];
    const r = [];
    if (i == null) try {
      u = await this._singleQuery(e);
    } catch (n) {
      C(n) || r.push(n);
    }
    else {
      const n = Math.min(i, s), c = U(this, Math.max(1, Math.min(Math.ceil(n / this._maxRecordCount), o)), e);
      await Promise.allSettled(Array.from({ length: 10 }).map(() => Z(c, u, r)));
    }
    return p(e), { features: u, totalRecordCount: i, maxTotalRecordCount: s, maxPageCount: o, errors: r };
  }
  async _singleQuery(t) {
    const e = await f(this._getFeatureUrl, this._featureType.typeName, this._getFeatureSpatialReference, this._getFeatureOutputFormat, { customParameters: this._customParameters, signal: t });
    return this._processGeoJSON(e, { signal: t });
  }
  async _pageQuery(t, e) {
    const s = t * this._maxRecordCount, o = await f(this._getFeatureUrl, this._featureType.typeName, this._getFeatureSpatialReference, this._getFeatureOutputFormat, { customParameters: this._customParameters, startIndex: s, count: this._maxRecordCount, signal: e });
    return this._processGeoJSON(o, { startIndex: s, signal: e });
  }
  _processGeoJSON(t, e) {
    Q(t, this._getFeatureSpatialReference.wkid);
    const { startIndex: s, signal: o } = e;
    p(o);
    const i = M(t, { geometryType: this._geometryType, hasZ: !1, objectIdField: this._objectIdField });
    if (!q(this._spatialReference, this._getFeatureSpatialReference)) for (const r of i) r.geometry != null && (r.geometry = I(N(b(r.geometry, this._geometryType, !1, !1), this._getFeatureSpatialReference, this._spatialReference)));
    let u = s ?? 1;
    for (const r of i) {
      const n = {};
      k(this._fieldsIndex, n, r.attributes, !0), r.attributes = n, n[this._objectIdField] == null && (r.objectId = n[this._objectIdField] = u++);
    }
    return i;
  }
}
function* U(a, t, e) {
  for (let s = 0; s < t; s++) yield a._pageQuery(s, e);
}
async function Z(a, t, e) {
  let s = a.next();
  for (; !s.done; ) {
    try {
      const o = await s.value;
      t.push(...o);
    } catch (o) {
      C(o) || e.push(o);
    }
    s = a.next();
  }
}
function w(a) {
  const t = [];
  return a.totalRecordCount != null && (a.features.length < a.totalRecordCount && t.push({ name: "wfs-layer:maxRecordCount-too-low", message: `Could only fetch ${a.features.length} of ${a.totalRecordCount} in ${a.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`, details: { recordCount: a.features.length, totalRecordCount: a.totalRecordCount } }), a.totalRecordCount > a.maxTotalRecordCount && t.push({ name: "wfs-layer:large-dataset", message: `The number of ${a.totalRecordCount} features exceeds the maximum allowed of ${a.maxTotalRecordCount}.`, details: { recordCount: a.features.length, totalRecordCount: a.totalRecordCount, maxTotalRecordCount: a.maxTotalRecordCount } })), t;
}
export {
  B as default
};
//# sourceMappingURL=WFSSourceWorker-D8IGcU0t.js.map
