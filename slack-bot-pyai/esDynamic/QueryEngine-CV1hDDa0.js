import { n as ct, a as Z, h as H, j as V, y as re, P as We, x as ye, g as U, b as ht, c as dt, S as Fe, v as B, t as mt, I as Se, d as ft } from "./timeSupport-BRnfgqgY.js";
import { d6 as gt, d7 as pt, dK as Re, s as A, cX as be, aW as de, aX as me, cN as Xe, cO as Je, dc as fe, J as k, aV as we, da as ne, lF as Ae, lG as _t, ky as Ce, k1 as yt, lH as Tt, ag as ee, lI as ge, jH as Ke, lJ as te, eM as Et, N as le, O as ve, P as xt, dU as It, lK as oe, bt as ue, U as Ft, X as St, lL as pe, aM as O, C as Rt, lM as bt, T as wt, lN as At, lO as Ct, lP as vt, aB as Nt, cW as Ot, b5 as Pt, lQ as v, ao as Ne, eK as Oe, a8 as $t, lR as kt, bl as Dt, bo as Lt, ba as ce, bu as Qt, bi as Vt, c$ as Gt, av as Mt, lS as Pe, aF as Ut, aH as qt, az as zt, bm as Bt, bw as jt } from "./main-DhLeoxL5.js";
import { x as Zt } from "./WhereClause-BBE8rGYc.js";
import { t as Ht } from "./QueryEngineCapabilities-Deb54eFC.js";
import { w as Yt } from "./utils-2Kb4yn-o.js";
import { c as he, B as Wt, d as $e, p as ke, C as Xt, k as Jt, $ as Kt, E as es, P as ts, U as ss, T as is, v as as, f as rs } from "./utils-D2GMj0-J.js";
import { I as N } from "./RenderState-DFzFRsu6.js";
const Ps = { getObjectId: (l) => l.objectId, getAttributes: (l) => l.attributes, getAttribute: (l, e) => l.attributes[e], cloneWithGeometry: (l, e) => new gt(e, l.attributes, null, l.objectId), getGeometry: (l) => l.geometry, getCentroid: (l, e) => (l.centroid == null && (l.centroid = ct(new pt(), l.geometry, e.hasZ, e.hasM)), l.centroid) };
class ns {
  constructor(e, t) {
    this._cache = new Re(e), this._invalidCache = new Re(t);
  }
  get(e, t) {
    const i = `${t.uid}:${e}`, a = this._cache.get(i);
    if (a) return a;
    if (this._invalidCache.get(i) != null) return null;
    try {
      const s = Zt.create(e, t);
      return this._cache.put(i, s), s;
    } catch (s) {
      return this._invalidCache.put(i, s), null;
    }
  }
  getError(e, t) {
    const i = `${t.uid}:${e}`;
    return this._invalidCache.get(i) ?? null;
  }
}
const et = new ns(50, 500), Y = "unsupported-query", tt = " as ", st = /* @__PURE__ */ new Set(["esriFieldTypeOID", "esriFieldTypeSmallInteger", "esriFieldTypeBigInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong"]), it = /* @__PURE__ */ new Set(["esriFieldTypeDate", "esriFieldTypeDateOnly", "esriFieldTypeTimeOnly", "esriFieldTypeTimestampOffset"]), ls = /* @__PURE__ */ new Set(["esriFieldTypeString", "esriFieldTypeGUID", "esriFieldTypeGlobalID", ...st, ...it]);
function Te(l, e, t = {}) {
  const i = G(e, l);
  if (!i) {
    const s = et.getError(e, l);
    throw new A(Y, "invalid SQL expression", { expression: e, error: s });
  }
  const a = t.expressionName || "expression";
  if (t.validateStandardized && !i.isStandardized) throw new A(Y, `${a} is not standard`, { expression: e });
  if (t.validateAggregate && !i.isAggregate) throw new A(Y, `${a} does not contain a valid aggregate function`, { expression: e });
  return i.fieldNames;
}
function os(l, e, t, i) {
  if (!t) return !0;
  const a = "where clause";
  return D(l, e, Te(l, t, { validateStandardized: !0, expressionName: a }), { expressionName: a, query: i }), !0;
}
function us(l, e, t, i, a) {
  if (!t) return !0;
  const s = "having clause", r = Te(l, t, { validateAggregate: !0, expressionName: s });
  if (D(l, e, r, { expressionName: s, query: a }), !G(t, l)?.getExpressions().every((u) => {
    const { aggregateType: c, field: h } = u, m = l.get(h)?.name;
    return i.some((f) => {
      const { onStatisticField: p, statisticType: d } = f;
      return l.get(p)?.name === m && d.toLowerCase().trim() === c;
    });
  })) throw new A(Y, "expressions in having clause should also exist in outStatistics", { having: t });
  return !0;
}
function G(l, e) {
  return l ? et.get(l, e) : null;
}
function at(l) {
  return /\((.*?)\)/.test(l) ? l : l.split(tt)[0];
}
function cs(l) {
  return l.split(tt)[1];
}
function D(l, e, t, i = {}) {
  const a = /* @__PURE__ */ new Map();
  if (hs(a, l, e, i.allowedFieldTypes ?? ls, t), a.size) {
    const s = i.expressionName ?? "expression";
    throw new A(Y, `${s} contains invalid or missing fields`, { errors: Array.from(a.values()), query: i.query });
  }
}
function hs(l, e, t, i, a) {
  const s = a.includes("*") ? [...t, ...a.filter((r) => r !== "*")] : a;
  for (const r of s)
    if (e.get(r)) De(l, e, t, i, r);
    else try {
      const n = Te(e, at(r), { validateStandardized: !0 });
      for (const o of n) De(l, e, t, i, o);
    } catch (n) {
      l.set(r, { type: "expression-error", expression: r, error: n });
    }
}
function De(l, e, t, i, a) {
  const s = e.get(a);
  s ? t.has(s.name) ? i !== "all" && i?.has(s.type) === !1 && l.set(a, { type: "invalid-type", fieldName: s.name, fieldType: be.fromJSON(s.type), allowedFieldTypes: Array.from(i, (r) => be.fromJSON(r)) }) : l.set(a, { type: "missing-field", fieldName: s.name }) : l.set(a, { type: "invalid-field", fieldName: a });
}
let K = class {
  constructor(e, t, i) {
    this._fieldDataCache = /* @__PURE__ */ new Map(), this._returnDistinctMap = /* @__PURE__ */ new Map(), this.returnDistinctValues = e.returnDistinctValues ?? !1, this.fieldsIndex = i, this.featureAdapter = t;
    const a = e.outFields;
    if (a && !a.includes("*")) {
      this.outFields = a;
      let s = 0;
      for (const r of a) {
        const n = at(r), o = this.fieldsIndex.get(n), u = o ? null : G(n, i), c = o ? o.name : cs(r) || "FIELD_EXP_" + s++;
        this._fieldDataCache.set(r, { alias: c, clause: u });
      }
    }
  }
  countDistinctValues(e) {
    return this.returnDistinctValues ? (e.forEach((t) => this.getAttributes(t)), this._returnDistinctMap.size) : e.length;
  }
  getAttributes(e) {
    const t = this._processAttributesForOutFields(e);
    return this._processAttributesForDistinctValues(t);
  }
  getFieldValue(e, t, i) {
    const a = i ? i.name : t;
    let s = null;
    return this._fieldDataCache.has(a) ? s = this._fieldDataCache.get(a)?.clause : i || (s = G(t, this.fieldsIndex), this._fieldDataCache.set(a, { alias: a, clause: s })), i ? this.featureAdapter.getAttribute(e, a) : s?.calculateValue(e, this.featureAdapter);
  }
  getDataValues(e, t, i = !0) {
    const a = t.normalizationType, s = t.normalizationTotal, r = this.fieldsIndex.get(t.field), n = de(r) || me(r), o = Xe(r);
    return e.map((u) => {
      let c = t.field && this.getFieldValue(u, t.field, this.fieldsIndex.get(t.field));
      if (t.field2 ? (c = `${he(c)}${t.fieldDelimiter}${he(this.getFieldValue(u, t.field2, this.fieldsIndex.get(t.field2)))}`, t.field3 && (c = `${c}${t.fieldDelimiter}${he(this.getFieldValue(u, t.field3, this.fieldsIndex.get(t.field3)))}`)) : typeof c == "string" && i && (n ? c = c ? new Date(c).getTime() : null : o && (c = c ? Yt(c) : null)), a && Number.isFinite(c)) {
        const h = a === "field" && t.normalizationField ? this.getFieldValue(u, t.normalizationField, this.fieldsIndex.get(t.normalizationField)) : null;
        c = Wt(c, a, h, s);
      }
      return c;
    });
  }
  async getExpressionValues(e, t, i, a, s) {
    const { arcadeUtils: r } = await Je(), n = r.hasGeometryOperations(t);
    n && await r.enableGeometryOperations();
    const o = r.createFunction(t), u = r.getViewInfo(i), c = { fields: this.fieldsIndex.fields };
    return e.map((h) => {
      const m = { attributes: this.featureAdapter.getAttributes(h), layer: c, geometry: n ? { ...Z(a.geometryType, a.hasZ, a.hasM, this.featureAdapter.getGeometry(h)), spatialReference: i?.spatialReference } : null }, f = r.createExecContext(m, u, s);
      return r.executeFunction(o, f);
    });
  }
  validateItem(e, t) {
    return this._fieldDataCache.has(t) || this._fieldDataCache.set(t, { alias: t, clause: G(t, this.fieldsIndex) }), this._fieldDataCache.get(t)?.clause?.testFeature(e, this.featureAdapter) ?? !1;
  }
  validateItems(e, t) {
    return this._fieldDataCache.has(t) || this._fieldDataCache.set(t, { alias: t, clause: G(t, this.fieldsIndex) }), this._fieldDataCache.get(t)?.clause?.testSet(e, this.featureAdapter) ?? !1;
  }
  _processAttributesForOutFields(e) {
    const t = this.outFields;
    if (!t?.length) return this.featureAdapter.getAttributes(e);
    const i = {};
    for (const a of t) {
      const { alias: s, clause: r } = this._fieldDataCache.get(a);
      i[s] = r ? r.calculateValue(e, this.featureAdapter) : this.featureAdapter.getAttribute(e, s);
    }
    return i;
  }
  _processAttributesForDistinctValues(e) {
    if (e == null || !this.returnDistinctValues) return e;
    const t = this.outFields, i = [];
    if (t) for (const r of t) {
      const { alias: n } = this._fieldDataCache.get(r);
      i.push(e[n]);
    }
    else for (const r in e) i.push(e[r]);
    const a = `${(t || ["*"]).join(",")}=${i.join(",")}`;
    let s = this._returnDistinctMap.get(a) || 0;
    return this._returnDistinctMap.set(a, ++s), s > 1 ? null : e;
  }
};
function Le(l, e, t) {
  return { objectId: l, target: e, distance: t, type: "vertex" };
}
function ds(l, e, t, i, a, s = !1) {
  return { objectId: l, target: e, distance: t, type: "edge", start: i, end: a, draped: s };
}
class w {
  constructor(e, t, i) {
    this.items = e, this.query = t, this.geometryType = i.geometryType, this.hasM = i.hasM, this.hasZ = i.hasZ, this.fieldsIndex = i.fieldsIndex, this.objectIdField = i.objectIdField, this.spatialReference = i.spatialReference, this.featureAdapter = i.featureAdapter;
  }
  get size() {
    return this.items.length;
  }
  createQueryResponseForCount() {
    const e = new K(this.query, this.featureAdapter, this.fieldsIndex);
    if (!this.query.outStatistics) return e.countDistinctValues(this.items);
    const { groupByFieldsForStatistics: t, having: i, outStatistics: a } = this.query;
    if (!t?.length) return 1;
    const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
    for (const u of a) {
      const { statisticType: c } = u, h = c !== "exceedslimit" ? u.onStatisticField : void 0;
      if (!n.has(h)) {
        const f = [];
        for (const p of t) {
          const d = this._getAttributeValues(e, p, r);
          f.push(d);
        }
        n.set(h, this._calculateUniqueValues(f, e.returnDistinctValues));
      }
      const m = n.get(h);
      for (const f in m) {
        const { data: p, items: d } = m[f], x = p.join(",");
        i && !e.validateItems(d, i) || o.add(x);
      }
    }
    return o.size;
  }
  async createQueryResponse() {
    let e;
    if (this.query.outStatistics ? e = this.query.outStatistics.some((t) => t.statisticType === "exceedslimit") ? this._createExceedsLimitQueryResponse(this.query) : await this._createStatisticsQueryResponse(this.query) : e = this._createFeatureQueryResponse(this.query), this.query.returnQueryGeometry) {
      const t = this.query.geometry;
      fe(this.query.outSR) && !k(t.spatialReference, this.query.outSR) ? e.queryGeometry = H({ spatialReference: this.query.outSR, ...V(t, t.spatialReference, this.query.outSR) }) : e.queryGeometry = H({ spatialReference: this.query.outSR, ...t });
    }
    return e;
  }
  createSnappingResponse(e, t) {
    const i = this.featureAdapter, a = Qe(this.hasZ, this.hasM), { point: s, mode: r } = e, n = typeof e.distance == "number" ? e.distance : e.distance.x, o = typeof e.distance == "number" ? e.distance : e.distance.y, u = { candidates: [] }, c = this.geometryType === "esriGeometryPolygon", h = this._getPointCreator(r, this.spatialReference, t), m = new Ve(null, 0), f = new Ve(null, 0), p = { x: 0, y: 0, z: 0 };
    for (const d of this.items) {
      const x = i.getGeometry(d);
      if (x == null) continue;
      const { coords: E, lengths: S } = x;
      if (m.coords = E, f.coords = E, e.returnEdge) {
        let F = 0;
        for (let y = 0; y < S.length; y++) {
          const _ = S[y];
          for (let I = 0; I < _; I++, F += a) {
            const T = m;
            if (T.coordsIndex = F, I !== _ - 1) {
              const R = f;
              R.coordsIndex = F + a;
              const b = p;
              ms(p, s, T, R);
              const L = (s.x - b.x) / n, W = (s.y - b.y) / o, C = L * L + W * W;
              C <= 1 && u.candidates.push(ds(i.getObjectId(d), h(b), Math.sqrt(C), h(T), h(R)));
            }
          }
        }
      }
      if (e.vertexMode !== "none") {
        const F = c ? E.length - a : E.length;
        if (e.vertexMode === "all") for (let y = 0; y < F; y += a) {
          const _ = m;
          _.coordsIndex = y;
          const I = (s.x - _.x) / n, T = (s.y - _.y) / o, R = I * I + T * T;
          R <= 1 && u.candidates.push(Le(i.getObjectId(d), h(_), Math.sqrt(R)));
        }
        else if (e.vertexMode === "ends") {
          const y = [0];
          c || y.push(E.length - a);
          for (const _ of y) {
            const I = m;
            I.coordsIndex = _;
            const T = (s.x - I.x) / n, R = (s.y - I.y) / o, b = T * T + R * R;
            b <= 1 && u.candidates.push(Le(i.getObjectId(d), h(I), Math.sqrt(b)));
          }
        }
      }
    }
    return u.candidates.sort((d, x) => d.distance - x.distance), u;
  }
  _getPointCreator(e, t, i) {
    const a = i == null || k(t, i) ? (n) => n : (n) => V(n, t, i), { hasZ: s } = this, r = 0;
    return e === "3d" ? s ? ({ x: n, y: o, z: u }) => a({ x: n, y: o, z: u }) : ({ x: n, y: o }) => a({ x: n, y: o, z: r }) : ({ x: n, y: o }) => a({ x: n, y: o });
  }
  async createSummaryStatisticsResponse(e) {
    const { field: t, valueExpression: i, normalizationField: a, normalizationType: s, normalizationTotal: r, minValue: n, maxValue: o, scale: u, timeZone: c } = e, h = this.fieldsIndex.get(t), m = we(h) || de(h) || me(h), f = await this._getDataValues({ field: t, valueExpression: i, normalizationField: a, normalizationType: s, normalizationTotal: r, scale: u, timeZone: c }), p = rs({ normalizationType: s, normalizationField: a, minValue: n, maxValue: o }), d = { value: 0.5, fieldType: h?.type }, x = ne(h) ? $e({ values: f, supportsNullCount: p, percentileParams: d }) : ke({ values: f, minValue: n, maxValue: o, useSampleStdDev: !s, supportsNullCount: p, percentileParams: d });
    return Xt(x, m);
  }
  async createUniqueValuesResponse(e) {
    const { field: t, valueExpression: i, domains: a, returnAllCodedValues: s, scale: r, timeZone: n } = e, o = await this._getDataValues({ field: t, field2: e.field2, field3: e.field3, fieldDelimiter: e.fieldDelimiter, valueExpression: i, scale: r, timeZone: n }, !1), u = Jt(o);
    return Kt(u, a, s, e.fieldDelimiter);
  }
  async createClassBreaksResponse(e) {
    const { field: t, valueExpression: i, normalizationField: a, normalizationType: s, normalizationTotal: r, classificationMethod: n, standardDeviationInterval: o, minValue: u, maxValue: c, numClasses: h, scale: m, timeZone: f } = e, p = await this._getDataValues({ field: t, valueExpression: i, normalizationField: a, normalizationType: s, normalizationTotal: r, scale: m, timeZone: f }), d = es(p, { field: t, normalizationField: a, normalizationType: s, normalizationTotal: r, classificationMethod: n, standardDeviationInterval: o, minValue: u, maxValue: c, numClasses: h });
    return ts(d, n);
  }
  async createHistogramResponse(e) {
    const { field: t, valueExpression: i, normalizationField: a, normalizationType: s, normalizationTotal: r, classificationMethod: n, standardDeviationInterval: o, minValue: u, maxValue: c, numBins: h, scale: m, timeZone: f } = e, p = await this._getDataValues({ field: t, valueExpression: i, normalizationField: a, normalizationType: s, normalizationTotal: r, scale: m, timeZone: f });
    return ss(p, { field: t, normalizationField: a, normalizationType: s, normalizationTotal: r, classificationMethod: n, standardDeviationInterval: o, minValue: u, maxValue: c, numBins: h });
  }
  _sortFeatures(e, t, i) {
    if (e.length > 1 && t?.length) for (const a of t.reverse()) {
      const s = a.split(" "), r = s[0], n = this.fieldsIndex.get(r), o = !!s[1] && s[1].toLowerCase() === "desc", u = is(n?.type, o);
      e.sort((c, h) => {
        const m = i(c, r, n), f = i(h, r, n);
        return u(m, f);
      });
    }
  }
  _createFeatureQueryResponse(e) {
    const t = this.items, { geometryType: i, hasM: a, hasZ: s, objectIdField: r, spatialReference: n } = this, { outFields: o, outSR: u, quantizationParameters: c, resultRecordCount: h, resultOffset: m, returnZ: f, returnM: p } = e, d = h != null && t.length > (m || 0) + h, x = o && (o.includes("*") ? [...this.fieldsIndex.fields] : o.map((E) => this.fieldsIndex.get(E)));
    return { exceededTransferLimit: d, features: this._createFeatures(e, t), fields: x, geometryType: i, hasM: a && p, hasZ: s && f, objectIdFieldName: r, spatialReference: H(u || n), transform: c && Ae(c) || null };
  }
  _createFeatures(e, t) {
    const i = new K(e, this.featureAdapter, this.fieldsIndex), { hasM: a, hasZ: s } = this, { orderByFields: r, quantizationParameters: n, returnGeometry: o, returnCentroid: u, maxAllowableOffset: c, resultOffset: h, resultRecordCount: m, returnZ: f = !1, returnM: p = !1 } = e, d = s && f, x = a && p;
    let E = [], S = 0;
    const F = [...t];
    if (this._sortFeatures(F, r, (_, I, T) => i.getFieldValue(_, I, T)), this.geometryType && (o || u)) {
      const _ = Ae(n) ?? void 0, I = this.geometryType === "esriGeometryPolygon" || this.geometryType === "esriGeometryPolyline";
      if (o && !u) for (const T of F) {
        const R = this.featureAdapter.getGeometry(T), b = { attributes: i.getAttributes(T), geometry: Z(this.geometryType, this.hasZ, this.hasM, R, c, _, d, x) };
        I && R && !b.geometry && (b.centroid = re(this, this.featureAdapter.getCentroid(T, this), _)), E[S++] = b;
      }
      else if (!o && u) for (const T of F) E[S++] = { attributes: i.getAttributes(T), centroid: re(this, this.featureAdapter.getCentroid(T, this), _) };
      else for (const T of F) E[S++] = { attributes: i.getAttributes(T), centroid: re(this, this.featureAdapter.getCentroid(T, this), _), geometry: Z(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(T), c, _, d, x) };
    } else for (const _ of F) {
      const I = i.getAttributes(_);
      I && (E[S++] = { attributes: I });
    }
    const y = h || 0;
    if (m != null) {
      const _ = y + m;
      E = E.slice(y, Math.min(E.length, _));
    }
    return E;
  }
  _createExceedsLimitQueryResponse(e) {
    let t = !1, i = Number.POSITIVE_INFINITY, a = Number.POSITIVE_INFINITY, s = Number.POSITIVE_INFINITY;
    for (const r of e.outStatistics ?? []) if (r.statisticType === "exceedslimit") {
      i = r.maxPointCount != null ? r.maxPointCount : Number.POSITIVE_INFINITY, a = r.maxRecordCount != null ? r.maxRecordCount : Number.POSITIVE_INFINITY, s = r.maxVertexCount != null ? r.maxVertexCount : Number.POSITIVE_INFINITY;
      break;
    }
    if (this.geometryType === "esriGeometryPoint") t = this.items.length > i;
    else if (this.items.length > a) t = !0;
    else {
      const r = Qe(this.hasZ, this.hasM), n = this.featureAdapter;
      t = this.items.reduce((o, u) => {
        const c = n.getGeometry(u);
        return o + (c != null && c.coords.length || 0);
      }, 0) / r > s;
    }
    return { fields: [{ name: "exceedslimit", type: "esriFieldTypeInteger", alias: "exceedslimit", sqlType: "sqlTypeInteger", domain: null, defaultValue: null }], features: [{ attributes: { exceedslimit: Number(t) } }] };
  }
  async _createStatisticsQueryResponse(e) {
    const t = { attributes: {} }, i = [], a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = new K(e, this.featureAdapter, this.fieldsIndex), u = e.outStatistics, { groupByFieldsForStatistics: c, having: h, orderByFields: m, resultRecordCount: f } = e, p = c?.length, d = !!p, x = d ? c[0] : null, E = d && !this.fieldsIndex.get(x);
    for (const F of u ?? []) {
      const { outStatisticFieldName: y, statisticType: _ } = F, I = F, T = _ !== "exceedslimit" ? F.onStatisticField : void 0, R = _ === "percentile_disc" || _ === "percentile_cont", b = _ === "EnvelopeAggregate" || _ === "CentroidAggregate" || _ === "ConvexHullAggregate", L = d && p === 1 && (T === x || E) && _ === "count";
      if (d) {
        if (!r.has(T)) {
          const X = [];
          for (const ae of c) {
            const J = this._getAttributeValues(o, ae, a);
            X.push(J);
          }
          r.set(T, this._calculateUniqueValues(X, !b && o.returnDistinctValues));
        }
        const C = r.get(T);
        if (!C) continue;
        const ie = Object.keys(C);
        for (const X of ie) {
          const { count: ae, data: J, items: Ee, itemPositions: lt } = C[X], xe = J.join(",");
          if (!h || o.validateItems(Ee, h)) {
            const M = n.get(xe) || { attributes: {} };
            if (b) {
              M.aggregateGeometries || (M.aggregateGeometries = {});
              const { aggregateGeometries: $, outStatisticFieldName: z } = await this._getAggregateGeometry(I, Ee);
              M.aggregateGeometries[z] = $;
            } else {
              let $ = null;
              if (L) $ = ae;
              else {
                const z = this._getAttributeValues(o, T, a), Ie = lt.map((ut) => z[ut]);
                $ = R && "statisticParameters" in I ? this._getPercentileValue(I, Ie) : this._getStatisticValue(I, Ie, null, o.returnDistinctValues);
              }
              M.attributes[y] = $;
            }
            let ot = 0;
            c.forEach(($, z) => M.attributes[this.fieldsIndex.get($) ? $ : "EXPR_" + ++ot] = J[z]), n.set(xe, M);
          }
        }
      } else if (b) {
        t.aggregateGeometries || (t.aggregateGeometries = {});
        const { aggregateGeometries: C, outStatisticFieldName: ie } = await this._getAggregateGeometry(I, this.items);
        t.aggregateGeometries[ie] = C;
      } else {
        const C = this._getAttributeValues(o, T, a);
        t.attributes[y] = R && "statisticParameters" in I ? this._getPercentileValue(I, C) : this._getStatisticValue(I, C, s, o.returnDistinctValues);
      }
      const W = _ !== "min" && _ !== "max" || !ne(this.fieldsIndex.get(T)) && !this._isAnyDateField(T) ? null : this.fieldsIndex.get(T)?.type;
      i.push({ name: y, alias: y, type: W || "esriFieldTypeDouble" });
    }
    const S = d ? Array.from(n.values()) : [t];
    return this._sortFeatures(S, m, (F, y) => F.attributes[y]), f && (S.length = Math.min(f, S.length)), { fields: i, features: S };
  }
  _isAnyDateField(e) {
    const t = this.fieldsIndex.get(e);
    return we(t) || de(t) || me(t) || Xe(t);
  }
  async _getAggregateGeometry(e, t) {
    const { convexHull: i, union: a } = await import("./geometryEngineJSON-CoEpXN4L.js").then((d) => d.g), { statisticType: s, outStatisticFieldName: r } = e, { featureAdapter: n, spatialReference: o, geometryType: u, hasZ: c, hasM: h } = this, m = t.map((d) => Z(u, c, h, n.getGeometry(d))), f = i(o, m, !0)[0], p = { aggregateGeometries: null, outStatisticFieldName: null };
    if (s === "EnvelopeAggregate") {
      const d = f ? _t(f) : Ce(a(o, m));
      p.aggregateGeometries = { ...d, spatialReference: o }, p.outStatisticFieldName = r || "extent";
    } else if (s === "CentroidAggregate") {
      const d = f ? yt(f) : Tt(Ce(a(o, m)));
      p.aggregateGeometries = { x: d[0], y: d[1], spatialReference: o }, p.outStatisticFieldName = r || "centroid";
    } else s === "ConvexHullAggregate" && (p.aggregateGeometries = f, p.outStatisticFieldName = r || "convexHull");
    return p;
  }
  _getStatisticValue(e, t, i, a) {
    const { onStatisticField: s, statisticType: r } = e;
    let n = null;
    return n = i?.has(s) ? i.get(s) : ne(this.fieldsIndex.get(s)) || this._isAnyDateField(s) ? $e({ values: t, returnDistinct: a }) : ke({ values: a ? [...new Set(t)] : t, minValue: null, maxValue: null, useSampleStdDev: !0 }), i && i.set(s, n), n[r === "var" ? "variance" : r];
  }
  _getPercentileValue(e, t) {
    const { onStatisticField: i, statisticParameters: a, statisticType: s } = e, { value: r, orderBy: n } = a, o = this.fieldsIndex.get(i);
    return as(t, { value: r, orderBy: n, fieldType: o?.type, isDiscrete: s === "percentile_disc" });
  }
  _getAttributeValues(e, t, i) {
    if (i.has(t)) return i.get(t);
    const a = this.fieldsIndex.get(t), s = this.items.map((r) => e.getFieldValue(r, t, a));
    return i.set(t, s), s;
  }
  _calculateUniqueValues(e, t) {
    const i = {}, a = this.items, s = a.length;
    for (let r = 0; r < s; r++) {
      const n = a[r], o = [];
      for (const c of e) o.push(c[r]);
      const u = o.join(",");
      i[u] == null ? i[u] = { count: 1, data: o, items: [n], itemPositions: [r] } : (t || i[u].count++, i[u].items.push(n), i[u].itemPositions.push(r));
    }
    return i;
  }
  async _getDataValues(e, t = !0) {
    const i = new K(this.query, this.featureAdapter, this.fieldsIndex), { valueExpression: a, scale: s, timeZone: r } = e;
    return a ? i.getExpressionValues(this.items, a, { viewingMode: "map", scale: s, spatialReference: this.query.outSR || this.spatialReference }, { geometryType: this.geometryType, hasZ: this.hasZ, hasM: this.hasM }, r) : i.getDataValues(this.items, ee(e), t);
  }
}
function ms(l, e, t, i) {
  const a = i.x - t.x, s = i.y - t.y, r = a * a + s * s, n = (e.x - t.x) * a + (e.y - t.y) * s, o = Math.min(1, Math.max(0, n / r));
  l.x = t.x + a * o, l.y = t.y + s * o;
}
function Qe(l, e) {
  return l ? e ? 4 : 3 : e ? 3 : 2;
}
class Ve {
  constructor(e, t) {
    this.coords = e, this.coordsIndex = t;
  }
  get x() {
    return this.coords[this.coordsIndex];
  }
  get y() {
    return this.coords[this.coordsIndex + 1];
  }
  get z() {
    return this.coords[this.coordsIndex + 2];
  }
}
const q = "unsupported-query";
async function Ge(l, { fieldsIndex: e, geometryType: t, spatialReference: i, availableFields: a }) {
  if ((l.distance ?? 0) < 0 || l.geometryPrecision != null || l.multipatchOption && l.multipatchOption !== "xyFootprint" || l.pixelSize || l.relationParam || l.text) throw new A(q, "Unsupported query options", { query: l });
  return rt(e, a, l), gs(e, a, l), Promise.all([We(l, t, i), ye(i, l.outSR)]).then(() => l);
}
function rt(l, e, t) {
  const { outFields: i, orderByFields: a, returnDistinctValues: s, outStatistics: r } = t, n = r ? r.map((o) => o.outStatisticFieldName && o.outStatisticFieldName.toLowerCase()).filter(Boolean) : [];
  if (a && a.length > 0) {
    const o = " asc", u = " desc", c = a.map((h) => {
      const m = h.toLowerCase();
      return m.includes(o) ? m.split(o)[0] : m.includes(u) ? m.split(u)[0] : h;
    }).filter((h) => !n.includes(h));
    D(l, e, c, { expressionName: "orderByFields", query: t });
  }
  if (i && i.length > 0) D(l, e, i, { expressionName: "outFields", query: t, allowedFieldTypes: "all" });
  else if (s) throw new A(q, "outFields should be specified for returnDistinctValues", { query: t });
  os(l, e, t.where, t);
}
const fs = /* @__PURE__ */ new Set([...st, ...it]);
function gs(l, e, t) {
  const { outStatistics: i, groupByFieldsForStatistics: a, having: s } = t, r = a?.length, n = i?.length;
  if (s) {
    if (!r || !n) throw new A(q, "outStatistics and groupByFieldsForStatistics should be specified with having", { query: t });
    us(l, e, s, i, t);
  }
  if (n) {
    if (!ys(i)) return;
    const o = i.map((u) => u.onStatisticField).filter(Boolean);
    D(l, e, o, { expressionName: "onStatisticFields", query: t }), r && D(l, e, a, { expressionName: "groupByFieldsForStatistics", query: t });
    for (const u of i) {
      const { onStatisticField: c, statisticType: h } = u;
      if ((h === "percentile_disc" || h === "percentile_cont") && "statisticParameters" in u) {
        const { statisticParameters: m } = u;
        if (!m) throw new A(q, "statisticParameters should be set for percentile type", { definition: u, query: t });
      } else l.get(c) && h !== "count" && h !== "min" && h !== "max" && D(l, e, [c], { expressionName: `outStatistics with '${h}' statistic type`, allowedFieldTypes: fs, query: t });
    }
  }
}
async function ps(l, e, { fieldsIndex: t, geometryType: i, spatialReference: a, availableFields: s }) {
  if ((l.distance ?? 0) < 0 || l.geometryPrecision != null || l.multipatchOption || l.pixelSize || l.relationParam || l.text || l.outStatistics || l.groupByFieldsForStatistics || l.having || l.orderByFields) throw new A(q, "Unsupported query options", { query: l });
  return rt(t, s, l), Promise.all([_s(t, s, e, l), We(l, i, a), ye(a, l.outSR)]).then(() => l);
}
async function _s(l, e, t, i) {
  let a = [];
  if (t.valueExpression) {
    const { arcadeUtils: s } = await Je();
    a = s.extractFieldNames(t.valueExpression);
  }
  if (t.field && a.push(t.field), t.field2 && a.push(t.field2), t.field3 && a.push(t.field3), t.normalizationField && a.push(t.normalizationField), !a.length && !t.valueExpression) throw new A(q, "field or valueExpression is required", { params: t });
  D(l, e, a, { expressionName: "statistics", query: i });
}
function ys(l) {
  return l != null && l.every((e) => e.statisticType !== "exceedslimit");
}
const nt = Symbol("Yield");
class Ts {
  constructor() {
    this._tasks = new Array(), this._runningTasks = ge(0);
  }
  get length() {
    return this._tasks.length;
  }
  get running() {
    return this._runningTasks.value > 0;
  }
  destroy() {
    this.cancelAll();
  }
  runTask(e) {
    if (this.length === 0) return nt;
    for (; !e.done && this._process(e); ) e.madeProgress();
  }
  push(e, t, i) {
    return ++this._runningTasks.value, new Promise((a, s) => this._tasks.push(new Me(a, s, e, t, i))).finally(() => --this._runningTasks.value);
  }
  unshift(e, t, i) {
    return ++this._runningTasks.value, new Promise((a, s) => this._tasks.unshift(new Me(a, s, e, t, i))).finally(() => --this._runningTasks.value);
  }
  _process(e) {
    if (this._tasks.length === 0) return !1;
    const t = this._tasks.shift();
    try {
      const i = Ke(t.signal);
      if (i && !t.abortCallback) t.reject(te());
      else {
        const a = i ? t.abortCallback?.(te()) : t.callback(e);
        Et(a) ? a.then(t.resolve, t.reject) : t.resolve(a);
      }
    } catch (i) {
      t.reject(i);
    }
    return !0;
  }
  cancelAll() {
    const e = te();
    for (const t of this._tasks) if (t.abortCallback) {
      const i = t.abortCallback(e);
      t.resolve(i);
    } else t.reject(e);
    this._tasks.length = 0;
  }
}
class Me {
  constructor(e, t, i, a = void 0, s = void 0) {
    this.resolve = e, this.reject = t, this.callback = i, this.signal = a, this.abortCallback = s;
  }
}
let j = class extends It {
  constructor() {
    super(...arguments), this.SCHEDULER_LOG_SLOW_TASKS = !1, this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES = !1;
  }
};
le([ve()], j.prototype, "SCHEDULER_LOG_SLOW_TASKS", void 0), le([ve()], j.prototype, "FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES", void 0), j = le([xt("esri.views.support.DebugFlags")], j);
const Es = new j();
var g;
(function(l) {
  l.RESOURCE_CONTROLLER_IMMEDIATE = "immediate", l.RESOURCE_CONTROLLER = "schedule", l.SLIDE = "slide", l.STREAM_DATA_LOADER = "stream loader", l.ELEVATION_QUERY = "elevation query", l.TERRAIN_SURFACE = "terrain", l.SURFACE_GEOMETRY_UPDATES = "surface geometry updates", l.LOD_RENDERER = "LoD renderer", l.GRAPHICS_CORE = "Graphics3D", l.I3S_CONTROLLER = "I3S", l.POINT_CLOUD_LAYER = "point cloud", l.FEATURE_TILE_FETCHER = "feature fetcher", l.OVERLAY = "overlay", l.STAGE = "stage", l.GRAPHICS_DECONFLICTOR = "graphics deconflictor", l.FILTER_VISIBILITY = "Graphics3D filter visibility", l.SCALE_VISIBILITY = "Graphics3D scale visibility", l.FRUSTUM_VISIBILITY = "Graphics3D frustum visibility", l.POINT_OF_INTEREST_FREQUENT = "POI frequent", l.POINT_OF_INTEREST_INFREQUENT = "POI infrequent", l.LABELER = "labeler", l.FEATURE_QUERY_ENGINE = "feature query", l.FEATURE_TILE_TREE = "feature tile tree", l.FEATURE_TILE_TREE_ACTIVE = "fast feature tile tree", l.ELEVATION_ALIGNMENT = "elevation alignment", l.ELEVATION_ALIGNMENT_SCENE = "elevation alignment scene", l.TEXT_TEXTURE_ATLAS = "text texture atlas", l.TEXTURE_UNLOAD = "texture unload", l.LINE_OF_SIGHT_TOOL = "line of sight tool", l.LINE_OF_SIGHT_TOOL_INTERACTIVE = "interactive line of sight tool", l.ELEVATION_PROFILE = "elevation profile", l.SNAPPING = "snapping", l.SHADOW_ACCUMULATOR = "shadow accumulator", l.CLOUDS_GENERATOR = "clouds generator", l[l.NONE = 0] = "NONE", l[l.TEST_PRIO = 1] = "TEST_PRIO";
})(g || (g = {}));
const P = 0, Ue = /* @__PURE__ */ new Map([[g.RESOURCE_CONTROLLER_IMMEDIATE, P], [g.RESOURCE_CONTROLLER, 4], [g.SLIDE, P], [g.STREAM_DATA_LOADER, P], [g.ELEVATION_QUERY, P], [g.TERRAIN_SURFACE, 1], [g.SURFACE_GEOMETRY_UPDATES, 1], [g.LOD_RENDERER, 2], [g.GRAPHICS_CORE, 2], [g.I3S_CONTROLLER, 2], [g.POINT_CLOUD_LAYER, 2], [g.FEATURE_TILE_FETCHER, 2], [g.OVERLAY, 4], [g.STAGE, 4], [g.GRAPHICS_DECONFLICTOR, 4], [g.FILTER_VISIBILITY, 4], [g.SCALE_VISIBILITY, 4], [g.FRUSTUM_VISIBILITY, 4], [g.CLOUDS_GENERATOR, 4], [g.POINT_OF_INTEREST_FREQUENT, 6], [g.POINT_OF_INTEREST_INFREQUENT, 30], [g.LABELER, 8], [g.FEATURE_QUERY_ENGINE, 8], [g.FEATURE_TILE_TREE, 16], [g.FEATURE_TILE_TREE_ACTIVE, P], [g.ELEVATION_ALIGNMENT, 12], [g.ELEVATION_ALIGNMENT_SCENE, 14], [g.TEXT_TEXTURE_ATLAS, 12], [g.TEXTURE_UNLOAD, 12], [g.LINE_OF_SIGHT_TOOL, 16], [g.LINE_OF_SIGHT_TOOL_INTERACTIVE, P], [g.SNAPPING, P], [g.SHADOW_ACCUMULATOR, 30]]);
function qe(l) {
  return Ue.has(l) ? Ue.get(l) : typeof l == "number" ? l : 1;
}
const ze = O(6.5), Be = O(1), xs = O(30), je = O(1e3 / 30), Ze = O(100), He = 0.9;
var _e, Q;
(function(l) {
  class e {
    get updating() {
      return this._updating.value;
    }
    _updatingChanged() {
      this._updating.value = this._tasks.some((s) => s.needsUpdate);
    }
    constructor() {
      this._updating = ge(!0), this._microTaskQueued = !1, this._frameNumber = 0, this.performanceInfo = { total: new oe("total"), tasks: /* @__PURE__ */ new Map() }, this._frameTaskTimes = /* @__PURE__ */ new Map(), this._budget = new i(), this._state = N.INTERACTING, this._tasks = new ue(), this._runQueue = new ue(), this._load = 0, this._idleStateCallbacks = new ue(), this._idleUpdatesStartFired = !1, this._forceTask = !1, this._debug = !1, this._debugHandle = Ft(() => Es.SCHEDULER_LOG_SLOW_TASKS, (r) => this._debug = r, St);
      for (const r of Object.keys(g)) this.performanceInfo.tasks.set(g[r], new oe(g[r]));
      const s = this;
      this._test = { FRAME_SAFETY_BUDGET: ze, INTERACTING_BUDGET: je, IDLE_BUDGET: Ze, get availableBudget() {
        return s._budget.budget;
      }, usedBudget: 0, getBudget: () => s._budget, setBudget: (r) => s._budget = r, updateTask: (r) => this._updateTask(r), getState: (r) => this._getState(r), getRuntime: (r) => this._getRuntime(r), frameTaskTimes: this._frameTaskTimes, resetRuntimes: () => this._resetRuntimes(), getRunning: () => this._getRunning() };
    }
    destroy() {
      this._tasks.toArray().forEach((s) => s.remove()), this._tasks.clear(), pe(this._debugHandle), this._microTaskQueued = !1, this._updatingChanged();
    }
    taskRunningChanged(s) {
      this._updatingChanged(), s && this._budget.remaining > 0 && !this._microTaskQueued && (this._microTaskQueued = !0, queueMicrotask(() => {
        this._microTaskQueued && (this._microTaskQueued = !1, this._budget.remaining > 0 && this._schedule() && this.frame());
      }));
    }
    registerTask(s, r) {
      const n = new t(this, s, r);
      return this._tasks.push(n), this._updatingChanged(), this.performanceInfo.tasks.has(s) || this.performanceInfo.tasks.set(s, new oe(s)), n;
    }
    registerIdleStateCallbacks(s, r) {
      const n = { idleBegin: s, idleEnd: r };
      this._idleStateCallbacks.push(n), this.state === N.IDLE && this._idleUpdatesStartFired && n.idleBegin();
      const o = this;
      return { remove: () => this._removeIdleStateCallbacks(n), set idleBegin(u) {
        o._idleUpdatesStartFired && (n.idleEnd(), o._state === N.IDLE && u()), n.idleBegin = u;
      }, set idleEnd(u) {
        n.idleEnd = u;
      } };
    }
    get load() {
      return this._load;
    }
    set state(s) {
      this._state !== s && (this._state = s, this.state !== N.IDLE && this._idleUpdatesStartFired && (this._idleUpdatesStartFired = !1, this._idleStateCallbacks.forAll((r) => r.idleEnd())));
    }
    get state() {
      return this._state;
    }
    updateBudget(s) {
      this._test.usedBudget = 0, ++this._frameNumber;
      let r = ze, n = s.frameDuration, o = Be;
      switch (this.state) {
        case N.IDLE:
          r = O(0), n = O(Math.max(Ze, s.frameDuration)), o = xs;
          break;
        case N.INTERACTING:
          n = O(Math.max(je, s.frameDuration));
        case N.ANIMATING:
      }
      return n = O(n - s.elapsedFrameTime - r), this.state !== N.IDLE && n < Be && !this._forceTask ? (this._forceTask = !0, !1) : (n = O(Math.max(n, o)), this._budget.reset(n, this.state), this._updateLoad(), this._schedule());
    }
    frame() {
      switch (this._forceTask = !1, this._microTaskQueued = !1, this.state) {
        case N.IDLE:
          this._idleUpdatesStartFired || (this._idleUpdatesStartFired = !0, this._idleStateCallbacks.forAll((s) => s.idleBegin())), this._runIdle();
          break;
        case N.INTERACTING:
          this._runInteracting();
          break;
        default:
          this._runAnimating();
      }
      this._test.usedBudget = this._budget.elapsed;
    }
    stopFrame() {
      this._budget.reset(O(0), this._state), this._budget.madeProgress();
    }
    _removeIdleStateCallbacks(s) {
      this._idleUpdatesStartFired && s.idleEnd(), this._idleStateCallbacks.removeUnordered(s);
    }
    removeTask(s) {
      this._tasks.removeUnordered(s), this._runQueue.removeUnordered(s), this._updatingChanged();
    }
    _updateTask(s) {
      this._tasks.forAll((r) => {
        r.name === s && r.setPriority(s);
      });
    }
    _getState(s) {
      if (this._runQueue.some((n) => n.name === s)) return Q.SCHEDULED;
      let r = Q.IDLE;
      return this._tasks.forAll((n) => {
        n.name === s && n.needsUpdate && (n.schedulePriority <= 1 ? r = Q.READY : r !== Q.READY && (r = Q.WAITING));
      }), r;
    }
    _getRuntime(s) {
      let r = 0;
      return this._tasks.forAll((n) => {
        n.name === s && (r += n.runtime);
      }), r;
    }
    _resetRuntimes() {
      this._tasks.forAll((s) => s.runtime = 0);
    }
    _getRunning() {
      const s = /* @__PURE__ */ new Map();
      if (this._tasks.forAll((n) => {
        n.needsUpdate && s.set(n.name, (s.get(n.name) || 0) + 1);
      }), s.size === 0) return null;
      let r = "";
      return s.forEach((n, o) => {
        r += n > 1 ? ` ${n}x ${o}` : ` ${o}`;
      }), r;
    }
    _runIdle() {
      this._run();
    }
    _runInteracting() {
      this._run();
    }
    _runAnimating() {
      this._run();
    }
    _updateLoad() {
      const s = this._tasks.reduce((r, n) => n.needsUpdate ? ++r : r, 0);
      this._load = this._load * He + s * (1 - He);
    }
    _schedule() {
      for (this._runQueue.filterInPlace((s) => !!s.needsUpdate || (s.schedulePriority = s.basePriority, !1)), this._tasks.forAll((s) => {
        s.basePriority === P && s.needsUpdate && !this._runQueue.includes(s) && s.blockFrame !== this._frameNumber && this._runQueue.unshift(s);
      }); this._runQueue.length === 0; ) {
        let s = !1, r = 0;
        if (this._tasks.forAll((n) => {
          n.needsUpdate && n.schedulePriority !== 0 && n.basePriority !== P && n.blockFrame !== this._frameNumber && (s = !0, r = Math.max(r, n.basePriority), n.schedulePriority === 1 ? (n.schedulePriority = 0, this._runQueue.push(n)) : --n.schedulePriority);
        }), !s) return this._updatingChanged(), !1;
      }
      return this._updatingChanged(), !0;
    }
    _run() {
      const s = this._budget.now();
      this._startFrameTaskTimes();
      do
        for (; this._runQueue.length > 0; ) {
          const r = this._budget.now(), n = this._runQueue.pop();
          this._budget.resetProgress();
          try {
            n.task.runTask(this._budget) === nt && (n.blockFrame = this._frameNumber);
          } catch (u) {
            Rt.getLogger("esri.views.support.Scheduler").error(`Exception in task "${n.name}"`, u), n.blockFrame = this._frameNumber;
          }
          !this._budget.hasProgressed && n.blockFrame !== this._frameNumber && n.needsUpdate && (n.name, g.I3S_CONTROLLER, n.blockFrame = this._frameNumber), n.schedulePriority = n.basePriority;
          const o = this._budget.now() - r;
          if (n.runtime += o, this._frameTaskTimes.set(n.priority, this._frameTaskTimes.get(n.priority) + o), this._debug && o > 2 * this._budget.budget && console.log("Task", n.name, "used", o, "of max", this._budget.budget, "ms"), this._budget.remaining <= 0) return this._updatingChanged(), void this._recordFrameTaskTimes(this._budget.now() - s);
        }
      while (this._schedule());
      this._updatingChanged(), this._recordFrameTaskTimes(this._budget.now() - s);
    }
    _startFrameTaskTimes() {
      for (const s of Object.keys(g)) this._frameTaskTimes.set(g[s], 0);
    }
    _recordFrameTaskTimes(s) {
      this._frameTaskTimes.forEach((r, n) => this.performanceInfo.tasks.get(n).record(r)), this.performanceInfo.total.record(s);
    }
    get test() {
      return this._test;
    }
  }
  l.Scheduler = e;
  class t {
    get task() {
      return this._task.value;
    }
    get updating() {
      return this._queue.running;
    }
    constructor(s, r, n) {
      this._scheduler = s, this.name = r, this.blockFrame = 0, this.runtime = 0, this._queue = new Ts(), this._handles = new bt(), this._basePriority = qe(r), this.schedulePriority = this._basePriority, this._task = ge(n ?? this._queue), this._handles.add(wt(() => this.task.running, (o) => s.taskRunningChanged(o)));
    }
    remove() {
      this.processQueue(se), this._scheduler.removeTask(this), this.schedule = Ye.schedule, this.reschedule = Ye.reschedule, this._handles.destroy();
    }
    get basePriority() {
      return this._basePriority;
    }
    setPriority(s) {
      if (this.name === s) return;
      this.name = s;
      const r = qe(s);
      this._basePriority !== P && this.schedulePriority === 0 || (this.schedulePriority = r), this._basePriority = r;
    }
    get priority() {
      return this.name;
    }
    set priority(s) {
      this.setPriority(s);
    }
    get needsUpdate() {
      return this.updating || this.task.running;
    }
    schedule(s, r, n) {
      return this._queue.push(s, r, n);
    }
    reschedule(s, r, n) {
      return this._queue.unshift(s, r, n);
    }
    processQueue(s) {
      return this._queue.runTask(s);
    }
  }
  class i {
    constructor() {
      this._begin = typeof performance < "u" ? performance.now() : 0, this._budget = 0, this._state = N.IDLE, this._done = !1, this._progressed = !1, this._enabled = !0;
    }
    run(s) {
      return !this.done && (s() === !0 && this.madeProgress(), !0);
    }
    get done() {
      return this._done;
    }
    get budget() {
      return this._budget;
    }
    madeProgress() {
      return this._progressed = !0, this._done = this.elapsed >= this._budget && this._enabled, this._done;
    }
    get state() {
      return this._state;
    }
    get enabled() {
      return this._enabled;
    }
    set enabled(s) {
      this._enabled = s;
    }
    reset(s, r) {
      this._begin = this.now(), this._budget = s, this._state = r, this.resetProgress();
    }
    get remaining() {
      return Math.max(this._budget - this.elapsed, 0);
    }
    now() {
      return performance.now();
    }
    get elapsed() {
      return performance.now() - this._begin;
    }
    resetProgress() {
      this._progressed = !1, this._done = !1;
    }
    get hasProgressed() {
      return this._progressed;
    }
  }
  l.Budget = i;
})(_e || (_e = {})), function(l) {
  l.SCHEDULED = "s", l.READY = "r", l.WAITING = "w", l.IDLE = "i";
}(Q || (Q = {}));
const se = (() => {
  const l = new _e.Budget();
  return l.enabled = !1, l;
})();
class Is {
  remove() {
  }
  processQueue() {
  }
  schedule(e, t, i) {
    try {
      if (Ke(t)) {
        const a = te();
        return i ? Promise.resolve(i(a)) : Promise.reject(a);
      }
      return At(e(se));
    } catch (a) {
      return Promise.reject(a);
    }
  }
  reschedule(e, t, i) {
    return this.schedule(e, t, i);
  }
}
const Ye = new Is(), Fs = "unsupported-query", Ss = new Ct(2e6);
let Rs = 0;
class ks {
  constructor(e) {
    this._geometryQueryCache = null, this._changeHandle = null, this.capabilities = { query: Ht }, this.geometryType = e.geometryType, this.hasM = !!e.hasM, this.hasZ = !!e.hasZ, this.objectIdField = e.objectIdField, this.spatialReference = e.spatialReference, this.definitionExpression = e.definitionExpression, this.featureStore = e.featureStore, this.aggregateAdapter = e.aggregateAdapter, this._changeHandle = this.featureStore.events.on("changed", () => this.clearCache()), this.timeInfo = e.timeInfo, e.cacheSpatialQueries && (this._geometryQueryCache = new vt(Rs++ + "$$", Ss)), this.fieldsIndex = Nt(e.fieldsIndex) ? e.fieldsIndex : Ot.fromJSON(e.fieldsIndex), !e.availableFields || e.availableFields.length === 1 && e.availableFields[0] === "*" ? this.availableFields = new Set(this.fieldsIndex.fields.map((t) => t.name)) : this.availableFields = new Set(e.availableFields.map((t) => this.fieldsIndex.get(t)?.name).filter((t) => t != null)), e.scheduler && e.priority && (this._frameTask = e.scheduler.registerTask(e.priority));
  }
  destroy() {
    this._frameTask = pe(this._frameTask), this.clearCache(), Pt(this._geometryQueryCache), this._changeHandle = pe(this._changeHandle);
  }
  get featureAdapter() {
    return this.featureStore.featureAdapter;
  }
  clearCache() {
    this._geometryQueryCache?.clear(), this._allFeaturesPromise = null, this._timeExtentPromise = null, this._fullExtentPromise = null;
  }
  async executeQuery(e, t) {
    const i = v(t);
    try {
      return (await this._executeQuery(e, {}, i)).createQueryResponse();
    } catch (a) {
      if (a !== U) throw a;
      return new w([], e, this).createQueryResponse();
    }
  }
  async executeQueryForCount(e = {}, t) {
    const i = v(t);
    try {
      return (await this._executeQuery(e, { returnGeometry: !1, returnCentroid: !1, outSR: null }, i)).createQueryResponseForCount();
    } catch (a) {
      if (a !== U) throw a;
      return 0;
    }
  }
  async executeQueryForExtent(e, t) {
    const i = v(t), a = e.outSR;
    try {
      const s = await this._executeQuery(e, { returnGeometry: !0, returnCentroid: !1, outSR: null }, i), r = s.size;
      return r ? { count: r, extent: await this._getBounds(s.items, s.spatialReference, a || this.spatialReference) } : { count: 0, extent: null };
    } catch (s) {
      if (s === U) return { count: 0, extent: null };
      throw s;
    }
  }
  async executeQueryForIds(e, t) {
    return this.executeQueryForIdSet(e, t).then((i) => Array.from(i));
  }
  async executeQueryForIdSet(e, t) {
    const i = v(t);
    try {
      const a = await this._executeQuery(e, { returnGeometry: !0, returnCentroid: !1, outSR: null }, i), s = a.items, r = /* @__PURE__ */ new Set();
      return await this._reschedule(() => {
        for (const n of s) r.add(a.featureAdapter.getObjectId(n));
      }, i), r;
    } catch (a) {
      if (a === U) return /* @__PURE__ */ new Set();
      throw a;
    }
  }
  async executeQueryForSnapping(e, t) {
    const i = v(t), { point: a, distance: s, returnEdge: r, vertexMode: n } = e;
    if (!r && n === "none") return { candidates: [] };
    let o = ee(e.query);
    o = await this._schedule(() => ht(o, this.definitionExpression, this.spatialReference), i), o = await this._reschedule(() => Ge(o, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), i);
    const u = !k(a.spatialReference, this.spatialReference);
    u && await ye(a.spatialReference, this.spatialReference);
    const c = typeof s == "number" ? s : s.x, h = typeof s == "number" ? s : s.y, m = { xmin: a.x - c, xmax: a.x + c, ymin: a.y - h, ymax: a.y + h, spatialReference: a.spatialReference }, f = u ? V(m, this.spatialReference) : m;
    if (!f) return { candidates: [] };
    const p = (await Ne(Oe(a), null, { signal: i }))[0], d = (await Ne(Oe(f), null, { signal: i }))[0];
    if (p == null || d == null) return { candidates: [] };
    const x = new w(await this._reschedule(() => this._searchFeatures(this._getQueryBBoxes(d.toJSON())), i), o, this);
    await this._reschedule(() => this._executeObjectIdsQuery(x), i), await this._reschedule(() => this._executeTimeQuery(x), i), await this._reschedule(() => this._executeAttributesQuery(x), i), await this._reschedule(() => this._executeGeometryQueryForSnapping(x, i), i);
    const E = p.toJSON(), S = u ? V(E, this.spatialReference) : E, F = u ? Math.max(f.xmax - f.xmin, f.ymax - f.ymin) / 2 : s;
    return x.createSnappingResponse({ ...e, point: S, distance: F }, a.spatialReference);
  }
  async executeQueryForLatestObservations(e, t) {
    const i = v(t);
    if (!this.timeInfo?.trackIdField) throw new A(Fs, "Missing timeInfo or timeInfo.trackIdField", { query: e, timeInfo: this.timeInfo });
    try {
      const a = await this._executeQuery(e, {}, i);
      return await this._reschedule(() => this._filterLatest(a), i), a.createQueryResponse();
    } catch (a) {
      if (a !== U) throw a;
      return new w([], e, this).createQueryResponse();
    }
  }
  async executeQueryForSummaryStatistics(e = {}, t, i) {
    const a = v(i), { field: s, normalizationField: r, valueExpression: n } = t;
    return (await this._executeQueryForStatistics(e, { field: s, normalizationField: r, valueExpression: n }, a)).createSummaryStatisticsResponse(t);
  }
  async executeQueryForUniqueValues(e = {}, t, i) {
    const a = v(i), { field: s, field2: r, field3: n, valueExpression: o } = t;
    return (await this._executeQueryForStatistics(e, { field: s, field2: r, field3: n, valueExpression: o }, a)).createUniqueValuesResponse(t);
  }
  async executeQueryForClassBreaks(e = {}, t, i) {
    const a = v(i), { field: s, normalizationField: r, valueExpression: n } = t;
    return (await this._executeQueryForStatistics(e, { field: s, normalizationField: r, valueExpression: n }, a)).createClassBreaksResponse(t);
  }
  async executeQueryForHistogram(e = {}, t, i) {
    const a = v(i), { field: s, normalizationField: r, valueExpression: n } = t;
    return (await this._executeQueryForStatistics(e, { field: s, normalizationField: r, valueExpression: n }, a)).createHistogramResponse(t);
  }
  async fetchRecomputedExtents(e) {
    const t = v(e);
    this._timeExtentPromise ||= dt(this.timeInfo, this.featureStore);
    const [i, a] = await Promise.all([this._getFullExtent(), this._timeExtentPromise]);
    return $t(t), { fullExtent: i, timeExtent: a };
  }
  async _getBounds(e, t, i) {
    const a = kt(Dt(), Bt);
    await this.featureStore.forEachBounds(e, (n) => Lt(a, n));
    const s = { xmin: a[0], ymin: a[1], xmax: a[3], ymax: a[4], spatialReference: H(this.spatialReference) };
    this.hasZ && isFinite(a[2]) && isFinite(a[5]) && (s.zmin = a[2], s.zmax = a[5]);
    const r = V(s, t, i);
    if (r.spatialReference = H(i), r.xmax - r.xmin == 0) {
      const n = ce(r.spatialReference);
      r.xmin -= n, r.xmax += n;
    }
    if (r.ymax - r.ymin == 0) {
      const n = ce(r.spatialReference);
      r.ymin -= n, r.ymax += n;
    }
    if (this.hasZ && r.zmin != null && r.zmax != null && r.zmax - r.zmin == 0) {
      const n = ce(r.spatialReference);
      r.zmin -= n, r.zmax += n;
    }
    return r;
  }
  _getFullExtent() {
    return this._fullExtentPromise ||= "getFullExtent" in this.featureStore && this.featureStore.getFullExtent ? Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)) : this._getAllFeatures().then((e) => this._getBounds(e, this.spatialReference, this.spatialReference)), this._fullExtentPromise;
  }
  async _schedule(e, t) {
    return this._frameTask != null ? this._frameTask.schedule(e, t) : e(se);
  }
  async _reschedule(e, t) {
    return this._frameTask != null ? this._frameTask.reschedule(e, t) : e(se);
  }
  async _getAllFeaturesQueryEngineResult(e) {
    return new w(await this._getAllFeatures(), e, this);
  }
  async _getAllFeatures() {
    if (this._allFeaturesPromise == null) {
      const i = [];
      this._allFeaturesPromise = (async () => {
        await this.featureStore.forEach((a) => i.push(a));
      })().then(() => i);
    }
    const e = this._allFeaturesPromise, t = await e;
    return e === this._allFeaturesPromise ? t.slice() : this._getAllFeatures();
  }
  async _executeQuery(e, t, i) {
    e = ee(e), e = await this._schedule(() => Fe(e, this.definitionExpression, this.spatialReference), i), e = await this._reschedule(() => Ge(e, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), i), e = { ...e, ...t };
    const a = await this._reschedule(() => this._executeSceneFilterQuery(e, i), i), s = await this._reschedule(() => this._executeGeometryQuery(e, a, i), i);
    return await this._reschedule(() => this._executeAggregateIdsQuery(s), i), await this._reschedule(() => this._executeObjectIdsQuery(s), i), await this._reschedule(() => this._executeTimeQuery(s), i), await this._reschedule(() => this._executeAttributesQuery(s), i), s;
  }
  async _executeSceneFilterQuery(e, t) {
    if (e.sceneFilter == null) return null;
    const { outSR: i, returnGeometry: a, returnCentroid: s } = e, r = this.featureStore.featureSpatialReference, n = e.sceneFilter.geometry, o = r == null || k(r, n.spatialReference) ? n : V(n, r);
    if (!o) return null;
    const u = a || s, c = fe(i) && !k(this.spatialReference, i) && u ? async (d) => this._project(d, i) : (d) => d, h = this.featureAdapter, m = await this._reschedule(() => this._searchFeatures(this._getQueryBBoxes(o)), t);
    if (e.sceneFilter.spatialRelationship === "disjoint") {
      if (!m.length) return null;
      const d = /* @__PURE__ */ new Set();
      for (const S of m) d.add(h.getObjectId(S));
      const x = await this._reschedule(() => this._getAllFeatures(), t), E = await this._reschedule(async () => {
        const S = await B("esriSpatialRelDisjoint", o, this.geometryType, this.hasZ, this.hasM), F = (_) => !d.has(h.getObjectId(_)) || S(h.getGeometry(_)), y = await this._runSpatialFilter(x, F, t);
        return new w(y, e, this);
      }, t);
      return c(E);
    }
    if (!m.length) return new w([], e, this);
    if (this._canExecuteSinglePass(o, e)) return c(new w(m, e, this));
    const f = await B("esriSpatialRelContains", o, this.geometryType, this.hasZ, this.hasM), p = await this._runSpatialFilter(m, (d) => f(h.getGeometry(d)), t);
    return c(new w(p, e, this));
  }
  async _executeGeometryQuery(e, t, i) {
    if (t != null && t.items.length === 0) return t;
    e = t != null ? t.query : e;
    const { geometry: a, outSR: s, spatialRel: r, returnGeometry: n, returnCentroid: o } = e, u = this.featureStore.featureSpatialReference, c = !a || u == null || k(u, a.spatialReference) ? a : V(a, u), h = n || o, m = fe(s) && !k(this.spatialReference, s), f = this._geometryQueryCache && t == null ? JSON.stringify(m && h ? { originalFilterGeometry: a, spatialRelationship: r, outSpatialReference: s } : { originalFilterGeometry: a, spatialRelationship: r }) : null, p = f ? this._geometryQueryCache.get(f) : null;
    if (p != null) return new w(p, e, this);
    const d = async (y) => (m && h && await this._project(y, s), f && this._geometryQueryCache.put(f, y.items, y.items.length + 1), y);
    if (!c) return d(t ?? await this._getAllFeaturesQueryEngineResult(e));
    const x = this.featureAdapter;
    let E = await this._reschedule(() => this._searchFeatures(this._getQueryBBoxes(a)), i);
    if (r === "esriSpatialRelDisjoint") {
      if (!E.length) return d(t ?? await this._getAllFeaturesQueryEngineResult(e));
      const y = /* @__PURE__ */ new Set();
      for (const T of E) y.add(x.getObjectId(T));
      const _ = t != null ? t.items : await this._reschedule(() => this._getAllFeatures(), i), I = await this._reschedule(async () => {
        const T = await B(r, c, this.geometryType, this.hasZ, this.hasM), R = (L) => !y.has(x.getObjectId(L)) || T(x.getGeometry(L)), b = await this._runSpatialFilter(_, R, i);
        return new w(b, e, this);
      }, i);
      return d(I);
    }
    if (t != null) {
      const y = new jt();
      E = E.filter((_) => Qt(t.items, _, t.items.length, y) >= 0);
    }
    if (!E.length) {
      const y = new w([], e, this);
      return f && this._geometryQueryCache.put(f, y.items, 1), y;
    }
    if (this._canExecuteSinglePass(c, e)) return d(new w(E, e, this));
    const S = await B(r, c, this.geometryType, this.hasZ, this.hasM), F = await this._runSpatialFilter(E, (y) => S(x.getGeometry(y)), i);
    return d(new w(F, e, this));
  }
  async _executeGeometryQueryForSnapping(e, t) {
    const { query: i } = e, { spatialRel: a } = i;
    if (!e?.items?.length || !i.geometry || !a) return;
    const s = await B(a, i.geometry, this.geometryType, this.hasZ, this.hasM), r = await this._runSpatialFilter(e.items, (n) => s(n.geometry), t);
    e.items = r;
  }
  _executeAggregateIdsQuery(e) {
    if (e.items.length === 0 || !e.query.aggregateIds?.length || this.aggregateAdapter == null) return;
    const t = /* @__PURE__ */ new Set();
    for (const a of e.query.aggregateIds)
      this.aggregateAdapter.getFeatureObjectIds(a).forEach((s) => t.add(s));
    const i = this.featureAdapter.getObjectId;
    e.items = e.items.filter((a) => t.has(i(a)));
  }
  _executeObjectIdsQuery(e) {
    if (e.items.length === 0 || !e.query.objectIds?.length) return;
    const t = new Set(e.query.objectIds), i = this.featureAdapter.getObjectId;
    e.items = e.items.filter((a) => t.has(i(a)));
  }
  _executeTimeQuery(e) {
    if (e.items.length === 0) return;
    const t = mt(this.timeInfo, e.query.timeExtent, this.featureAdapter);
    t != null && (e.items = e.items.filter(t));
  }
  _executeAttributesQuery(e) {
    if (e.items.length === 0) return;
    const t = G(e.query.where, this.fieldsIndex);
    if (t) {
      if (!t.isStandardized) throw new TypeError("Where clause is not standardized");
      e.items = e.items.filter((i) => t.testFeature(i, this.featureAdapter));
    }
  }
  async _runSpatialFilter(e, t, i) {
    if (!t) return e;
    if (this._frameTask == null) return e.filter((n) => t(n));
    let a = 0;
    const s = new Array(), r = async (n) => {
      for (; a < e.length; ) {
        const o = e[a++];
        t(o) && (s.push(o), n.madeProgress()), n.done && await this._reschedule((u) => r(u), i);
      }
    };
    return this._reschedule((n) => r(n), i).then(() => s);
  }
  _filterLatest(e) {
    const { trackIdField: t, startTimeField: i, endTimeField: a } = this.timeInfo, s = a || i, r = /* @__PURE__ */ new Map(), n = this.featureAdapter.getAttribute;
    for (const o of e.items) {
      const u = n(o, t), c = n(o, s), h = r.get(u);
      (!h || c > n(h, s)) && r.set(u, o);
    }
    e.items = Array.from(r.values());
  }
  _canExecuteSinglePass(e, t) {
    const { spatialRel: i } = t;
    return Se(e) && (i === "esriSpatialRelEnvelopeIntersects" || this.geometryType === "esriGeometryPoint" && (i === "esriSpatialRelIntersects" || i === "esriSpatialRelContains"));
  }
  async _project(e, t) {
    if (!t || k(this.spatialReference, t)) return e;
    const i = this.featureAdapter;
    let a;
    try {
      const r = await this._getFullExtent();
      a = Vt(this.spatialReference, t, r);
    } catch {
    }
    const s = await ft(e.items.map((r) => Z(this.geometryType, this.hasZ, this.hasM, i.getGeometry(r))), this.spatialReference, t, a);
    return e.items = s.map((r, n) => i.cloneWithGeometry(e.items[n], Gt(r, this.hasZ, this.hasM))), e;
  }
  _getQueryBBoxes(e) {
    if (Se(e)) {
      if (Mt(e)) return [Pe(Math.min(e.xmin, e.xmax), Math.min(e.ymin, e.ymax), Math.max(e.xmin, e.xmax), Math.max(e.ymin, e.ymax))];
      if (Ut(e)) return e.rings.map((t) => Pe(Math.min(t[0][0], t[2][0]), Math.min(t[0][1], t[2][1]), Math.max(t[0][0], t[2][0]), Math.max(t[0][1], t[2][1])));
    }
    return [qt(zt(), e)];
  }
  async _searchFeatures(e) {
    const t = /* @__PURE__ */ new Set();
    await Promise.all(e.map((a) => this.featureStore.forEachInBounds(a, (s) => t.add(s))));
    const i = Array.from(t.values());
    return t.clear(), i;
  }
  async _executeQueryForStatistics(e, t, i) {
    e = ee(e);
    try {
      e = await this._schedule(() => Fe(e, this.definitionExpression, this.spatialReference), i), e = await this._reschedule(() => ps(e, t, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), i);
      const a = await this._reschedule(() => this._executeSceneFilterQuery(e, i), i), s = await this._reschedule(() => this._executeGeometryQuery(e, a, i), i);
      return await this._reschedule(() => this._executeAggregateIdsQuery(s), i), await this._reschedule(() => this._executeObjectIdsQuery(s), i), await this._reschedule(() => this._executeTimeQuery(s), i), await this._reschedule(() => this._executeAttributesQuery(s), i), s;
    } catch (a) {
      if (a !== U) throw a;
      return new w([], e, this);
    }
  }
}
export {
  ks as $,
  Ps as o
};
//# sourceMappingURL=QueryEngine-CV1hDDa0.js.map
