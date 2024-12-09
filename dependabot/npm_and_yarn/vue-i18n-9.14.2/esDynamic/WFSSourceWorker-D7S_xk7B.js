import { s as g, dK as p, df as T, bg as E, dj as P, D as y, dL as _, M as R, K as q, dk as I, dl as b } from "./main-uCo5F72j.js";
import { m as j } from "./FeatureStore-Bww5OnPp.js";
import { x as $, j as M } from "./timeSupport-Bab-oHfN.js";
import { $ as N } from "./QueryEngine-DEIJSKY8.js";
import { E as O, N as Q } from "./geojson-Dn0D8VhC.js";
import { p as k } from "./sourceUtils-BrOiBSBU.js";
import { o as L, e as U, K as f } from "./wfsUtils-BLldU3r8.js";
const x = "esri.layers.WFSLayer";
class B {
  constructor() {
    this._customParameters = null, this._queryEngine = null, this._supportsPagination = !0;
  }
  destroy() {
    this._queryEngine?.destroy(), this._queryEngine = null;
  }
  async load(t, e = {}) {
    const { getFeatureUrl: s, getFeatureOutputFormat: o, fields: i, geometryType: u, featureType: r, maxRecordCount: n, maxTotalRecordCount: c, maxPageCount: C, objectIdField: d, customParameters: F } = t, { spatialReference: h, getFeatureSpatialReference: m } = L(s, r, t.spatialReference);
    try {
      await $(m, h);
    } catch {
      throw new g("unsupported-projection", "Projection not supported", { inSpatialReference: m, outSpatialReference: h });
    }
    p(e), this._customParameters = F, this._featureType = r, this._fieldsIndex = T.fromLayerJSON({ fields: i, dateFieldsTimeReference: i.some((S) => S.type === "esriFieldTypeDate") ? { timeZoneIANA: E } : null }), this._geometryType = u, this._getFeatureUrl = s, this._getFeatureOutputFormat = o, this._getFeatureSpatialReference = m, this._maxRecordCount = n, this._maxTotalRecordCount = c, this._maxPageCount = C, this._objectIdField = d, this._spatialReference = h;
    let l = await this._snapshotFeatures(e);
    if (l.errors.length > 0 && (this._supportsPagination = !1, l = await this._snapshotFeatures(e), l.errors.length > 0)) throw l.errors[0];
    return this._queryEngine = new N({ fieldsIndex: this._fieldsIndex, geometryType: u, hasM: !1, hasZ: !1, objectIdField: d, spatialReference: h, timeInfo: null, featureStore: new j({ geometryType: u, hasM: !1, hasZ: !1 }) }), this._queryEngine.featureStore.addMany(l.features), { warnings: w(l), extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent };
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
    const e = t?.signal, s = this._maxTotalRecordCount, o = this._maxPageCount, i = this._supportsPagination ? await U(this._getFeatureUrl, this._featureType.typeName, { customParameters: this._customParameters, signal: e }) : void 0;
    let u = [];
    const r = [];
    if (i == null) try {
      u = await this._singleQuery(e);
    } catch (n) {
      R(n) || r.push(n);
    }
    else {
      const n = Math.min(i, s), c = Z(this, Math.max(1, Math.min(Math.ceil(n / this._maxRecordCount), o)), e);
      await Promise.allSettled(Array.from({ length: 10 }).map(() => G(c, u, r)));
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
    O(t, this._getFeatureSpatialReference.wkid);
    const { startIndex: s, signal: o } = e;
    p(o);
    const i = Q(t, { geometryType: this._geometryType, hasZ: !1, objectIdField: this._objectIdField });
    if (!q(this._spatialReference, this._getFeatureSpatialReference)) for (const r of i) r.geometry != null && (r.geometry = I(M(b(r.geometry, this._geometryType, !1, !1), this._getFeatureSpatialReference, this._spatialReference)));
    let u = s ?? 1;
    for (const r of i) {
      const n = {};
      k(this._fieldsIndex, n, r.attributes, !0), r.attributes = n, n[this._objectIdField] == null && (r.objectId = n[this._objectIdField] = u++);
    }
    return i;
  }
}
function* Z(a, t, e) {
  for (let s = 0; s < t; s++) yield a._pageQuery(s, e);
}
async function G(a, t, e) {
  let s = a.next();
  for (; !s.done; ) {
    try {
      const o = await s.value;
      t.push(...o);
    } catch (o) {
      R(o) || e.push(o);
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
//# sourceMappingURL=WFSSourceWorker-D7S_xk7B.js.map
