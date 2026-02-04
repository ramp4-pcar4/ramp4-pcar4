import { cV as _, cW as R, s as I, cX as D, cY as Q, cZ as Z, b0 as v, c_ as A, K as G, C as P, J as M, c$ as N, d0 as z, a2 as B, cB as $, d1 as J, d2 as L, d3 as U } from "./main-DhLeoxL5.js";
import { m as V } from "./FeatureStore-CfjR2eEe.js";
import { x as E, j as b } from "./timeSupport-BRnfgqgY.js";
import { $ as W } from "./QueryEngine-CV1hDDa0.js";
import { I as H, N as K, E as Y } from "./geojson-CT0trqVh.js";
import { a as X, i as ee, o as te } from "./clientSideDefaults-ZhMgBTz3.js";
import { j as se, p as T, d as w, f as F, y as O } from "./sourceUtils-DAfknIDN.js";
const ie = { hasAttachments: !1, capabilities: "query, editing, create, delete, update", useStandardizedQueries: !0, supportsCoordinatesQuantization: !0, supportsReturningQueryGeometry: !0, advancedQueryCapabilities: { supportsQueryAttachments: !1, supportsStatistics: !0, supportsPercentileStatistics: !0, supportsReturningGeometryCentroid: !0, supportsQueryWithDistance: !0, supportsDistinct: !0, supportsReturningQueryExtent: !0, supportsReturningGeometryProperties: !1, supportsHavingClause: !0, supportsOrderBy: !0, supportsPagination: !0, supportsQueryWithResultType: !1, supportsSqlExpression: !0, supportsDisjointSpatialRel: !0 } };
class pe {
  constructor() {
    this._queryEngine = null, this._snapshotFeatures = async (e) => {
      const t = await this._fetch(e);
      return this._createFeatures(t);
    };
  }
  destroy() {
    this._queryEngine?.destroy(), this._queryEngine = this._createDefaultAttributes = null;
  }
  async load(e, t = {}) {
    this._loadOptions = { url: e.url, customParameters: e.customParameters };
    const i = [], [s] = await Promise.all([e.url ? this._fetch(t?.signal) : null, this._checkProjection(e.spatialReference)]), n = H(s, { geometryType: e.geometryType }), l = e.fields || n.fields || [], d = e.hasZ != null ? e.hasZ : n.hasZ, c = n.geometryType;
    let y = e.objectIdField || n.objectIdFieldName || "__OBJECTID";
    const m = e.spatialReference || _;
    let a = e.timeInfo;
    l === n.fields && n.unknownFields.length > 0 && i.push({ name: "geojson-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: n.unknownFields } });
    const o = new R(l);
    let u = o.get(y);
    u ? (u.type !== "esriFieldTypeString" && (u.type = "esriFieldTypeOID"), u.editable = !1, u.nullable = !1, y = u.name) : (u = { alias: y, name: y, type: n.objectIdFieldType === "string" ? "esriFieldTypeString" : "esriFieldTypeOID", editable: !1, nullable: !1 }, l.unshift(u));
    const h = {};
    for (const r of l) {
      if (r.name == null && (r.name = r.alias), r.alias == null && (r.alias = r.name), !r.name) throw new I("geojson-layer:invalid-field-name", "field name is missing", { field: r });
      if (!D.jsonValues.includes(r.type)) throw new I("geojson-layer:invalid-field-type", `invalid type for field "${r.name}"`, { field: r });
      if (r.name !== u.name) {
        const g = Q(r);
        g !== void 0 && (h[r.name] = g);
      }
      r.length == null && (r.length = Z(r));
    }
    if (a) {
      if (a.startTimeField) {
        const r = o.get(a.startTimeField);
        r ? (a.startTimeField = r.name, r.type = "esriFieldTypeDate") : a.startTimeField = null;
      }
      if (a.endTimeField) {
        const r = o.get(a.endTimeField);
        r ? (a.endTimeField = r.name, r.type = "esriFieldTypeDate") : a.endTimeField = null;
      }
      if (a.trackIdField) {
        const r = o.get(a.trackIdField);
        r ? a.trackIdField = r.name : (a.trackIdField = null, i.push({ name: "geojson-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: a } }));
      }
      a.startTimeField || a.endTimeField || (i.push({ name: "geojson-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: a } }), a = null);
    }
    const p = c ? te(c) : void 0, j = o.dateFields.length ? { timeZoneIANA: v } : null, f = { warnings: i, featureErrors: [], layerDefinition: { ...ie, drawingInfo: p ?? void 0, templates: X(h), extent: void 0, geometryType: c, objectIdField: y, fields: l, hasZ: !!d, timeInfo: a, dateFieldsTimeReference: j } };
    this._queryEngine = new W({ fieldsIndex: R.fromLayerJSON({ fields: l, timeInfo: a, dateFieldsTimeReference: j }), geometryType: c, hasM: !1, hasZ: d, objectIdField: y, spatialReference: m, timeInfo: a, featureStore: new V({ geometryType: c, hasM: !1, hasZ: d }), cacheSpatialQueries: !0 });
    const q = this._queryEngine.fieldsIndex.requiredFields.indexOf(u);
    q > -1 && this._queryEngine.fieldsIndex.requiredFields.splice(q, 1), this._createDefaultAttributes = ee(h, y);
    const x = await this._createFeatures(s);
    this._objectIdGenerator = this._createObjectIdGenerator(this._queryEngine, x);
    const k = this._normalizeFeatures(x, f.featureErrors);
    this._queryEngine.featureStore.addMany(k);
    const { fullExtent: C, timeExtent: S } = await this._queryEngine.fetchRecomputedExtents();
    if (f.layerDefinition.extent = C, S) {
      const { start: r, end: g } = S;
      f.layerDefinition.timeInfo.timeExtent = [r, g];
    }
    return f;
  }
  async applyEdits(e) {
    const { spatialReference: t, geometryType: i } = this._queryEngine;
    return await Promise.all([se(t, i), E(e.adds, t), E(e.updates, t)]), await this._waitSnapshotComplete(), this._applyEdits(e);
  }
  async queryFeatures(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(e, t.signal);
  }
  async queryFeatureCount(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e, t.signal);
  }
  async queryObjectIds(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForIds(e, t.signal);
  }
  async queryExtent(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e, t.signal);
  }
  async querySnapping(e, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForSnapping(e, t.signal);
  }
  async refresh(e) {
    this._loadOptions.customParameters = e, this._snapshotTask?.abort(), this._snapshotTask = A(this._snapshotFeatures), this._snapshotTask.promise.then((s) => {
      this._queryEngine.featureStore.clear(), this._objectIdGenerator = this._createObjectIdGenerator(this._queryEngine, s);
      const n = this._normalizeFeatures(s);
      n && this._queryEngine.featureStore.addMany(n);
    }, (s) => {
      this._queryEngine.featureStore.clear(), G(s) || P.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh", "An error occurred during refresh", { error: s }));
    }), await this._waitSnapshotComplete();
    const { fullExtent: t, timeExtent: i } = await this._queryEngine.fetchRecomputedExtents();
    return { extent: t, timeExtent: i };
  }
  async _createFeatures(e) {
    if (e == null) return [];
    const { geometryType: t, hasZ: i, objectIdField: s } = this._queryEngine, n = K(e, { geometryType: t, hasZ: i, objectIdField: s });
    if (!M(this._queryEngine.spatialReference, _)) for (const l of n) l.geometry != null && (l.geometry = N(b(z(l.geometry, this._queryEngine.geometryType, this._queryEngine.hasZ, !1), _, this._queryEngine.spatialReference)));
    return n;
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
  async _fetch(e) {
    const { url: t, customParameters: i } = this._loadOptions, s = (await B(t, { responseType: "json", query: { ...i }, signal: e })).data;
    return Y(s), s;
  }
  _normalizeFeatures(e, t) {
    const { objectIdField: i, fieldsIndex: s } = this._queryEngine, n = [];
    for (const l of e) {
      const d = this._createDefaultAttributes(), c = T(s, d, l.attributes, !0);
      c ? t?.push(c) : (this._assignObjectId(d, l.attributes, !0), l.attributes = d, l.objectId = d[i], n.push(l));
    }
    return n;
  }
  async _applyEdits(e) {
    const { adds: t, updates: i, deletes: s } = e, n = { addResults: [], deleteResults: [], updateResults: [], uidToObjectId: {} };
    if (t?.length && this._applyAddEdits(n, t), i?.length && this._applyUpdateEdits(n, i), s?.length) {
      for (const c of s) n.deleteResults.push(w(c));
      this._queryEngine.featureStore.removeManyById(s);
    }
    const { fullExtent: l, timeExtent: d } = await this._queryEngine.fetchRecomputedExtents();
    return { extent: l, timeExtent: d, featureEditResults: n };
  }
  _applyAddEdits(e, t) {
    const { addResults: i } = e, { geometryType: s, hasM: n, hasZ: l, objectIdField: d, spatialReference: c, featureStore: y, fieldsIndex: m } = this._queryEngine, a = [];
    for (const o of t) {
      if (o.geometry && s !== $(o.geometry)) {
        i.push(F("Incorrect geometry type."));
        continue;
      }
      const u = this._createDefaultAttributes(), h = T(m, u, o.attributes);
      if (h) i.push(h);
      else {
        if (this._assignObjectId(u, o.attributes), o.attributes = u, o.uid != null) {
          const p = o.attributes[d];
          e.uidToObjectId[o.uid] = p;
        }
        if (o.geometry != null) {
          const p = o.geometry.spatialReference ?? c;
          o.geometry = b(O(o.geometry, p), p, c);
        }
        a.push(o), i.push(w(o.attributes[d]));
      }
    }
    y.addMany(J([], a, s, l, n, d));
  }
  _applyUpdateEdits({ updateResults: e }, t) {
    const { geometryType: i, hasM: s, hasZ: n, objectIdField: l, spatialReference: d, featureStore: c, fieldsIndex: y } = this._queryEngine;
    for (const m of t) {
      const { attributes: a, geometry: o } = m, u = a?.[l];
      if (u == null) {
        e.push(F(`Identifier field ${l} missing`));
        continue;
      }
      if (!c.has(u)) {
        e.push(F(`Feature with object id ${u} missing`));
        continue;
      }
      const h = L(c.getFeature(u), i, n, s);
      if (o != null) {
        if (i !== $(o)) {
          e.push(F("Incorrect geometry type."));
          continue;
        }
        const p = o.spatialReference ?? d;
        h.geometry = b(O(o, p), p, d);
      }
      if (a) {
        const p = T(y, h.attributes, a);
        if (p) {
          e.push(p);
          continue;
        }
      }
      c.add(U(h, i, n, s, l)), e.push(w(u));
    }
  }
  _createObjectIdGenerator(e, t) {
    const i = e.fieldsIndex.get(e.objectIdField);
    if (i.type === "esriFieldTypeString") return () => i.name + "-" + Date.now().toString(16);
    let s = Number.NEGATIVE_INFINITY;
    for (const n of t) n.objectId && (s = Math.max(s, n.objectId));
    return s = Math.max(0, s) + 1, () => s++;
  }
  _assignObjectId(e, t, i = !1) {
    const s = this._queryEngine.objectIdField;
    e[s] = i && s in t ? t[s] : this._objectIdGenerator();
  }
  async _checkProjection(e) {
    try {
      await E(_, e);
    } catch {
      throw new I("geojson-layer", "Projection not supported");
    }
  }
}
export {
  pe as default
};
//# sourceMappingURL=GeoJSONSourceWorker-BLI4YKFV.js.map
