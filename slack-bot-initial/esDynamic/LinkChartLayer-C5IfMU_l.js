import { c$ as V, eK as lt, d6 as _e, s as J, N as u, O as f, P as me, dU as ht, C as ne, c1 as z, f5 as ie, dG as Ze, cV as oe, b9 as Ee, aU as re, l4 as Se, aR as Ke, gf as pt, g0 as dt, dV as Xe, dZ as et, dW as yt, l5 as ut, dI as te, dH as be, _ as Le, g3 as ct, g4 as mt, Y as gt, aS as xe, ga as ft, Z as Tt, gb as bt, e8 as tt, hX as Lt, V as Ge, d7 as Fe, a8 as kt, a6 as Oe } from "./main-3gzXighg.js";
import { z as Z } from "./geohashUtils-U49zSt-p.js";
import { G as ye, p as wt, t as Ct, T as Mt } from "./knowledgeGraphService-Bj0hohUF.js";
import { a as se } from "./GraphQueryStreaming-Cq1qV7M-.js";
import { m as Et } from "./FeatureStore-BKz1rBw6.js";
import { $ as xt } from "./QueryEngine-D4an6-QA.js";
import { l as Dt, o as ke } from "./clientSideDefaults-qvu_wF6B.js";
const It = "ESRI__DESTINATION_ID", Nt = "ESRI__ORIGIN_ID";
let we = class W {
  constructor() {
    this._featureLookup = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    return W.instance || (W.instance = new W()), W.instance;
  }
  static resetInstance() {
    W.instance && (W.instance = null);
  }
  deleteFromStore(i) {
    i.forEach((t) => {
      this._featureLookup.delete(t);
    });
  }
  readFromStoreByList(i) {
    const t = [];
    return i.forEach((a) => {
      const n = this.readFromStoreById(a);
      n && t.push(n);
    }), t;
  }
  readFromStoreById(i) {
    return this._featureLookup.get(i) ?? null;
  }
  writeToStore(i, t, a) {
    const n = [];
    return i.forEach((s) => {
      if (!s?.id) return;
      s.properties || (s.properties = []);
      let o, h = null;
      if (a && s.properties[a] && (h = V(s.properties[a])), "originId" in s && "destinationId" in s && (s.properties[Nt] = s.originId, s.properties[It] = s.destinationId), s.properties[t] = s.id, s.id && this._featureLookup.has(s.id) && this._featureLookup.get(s.id).attributes) {
        const m = this._featureLookup.get(s.id), r = JSON.parse(JSON.stringify(Object.assign(m.attributes, s.properties)));
        a && s.properties[a] && (r[a] = lt(s.properties[a])), o = new _e(h ? JSON.parse(JSON.stringify(h)) : m?.geometry ? JSON.parse(JSON.stringify(m.geometry)) : null, r, null, s.properties[t]);
      } else o = new _e(h ? JSON.parse(JSON.stringify(h)) : null, s.properties, null, s.properties[t]);
      this._featureLookup.set(s.id, o), n.push(o);
    }), n;
  }
};
var ue;
(function(e) {
  e.ELEMENTUID = "ELEMENTUID", e.TYPENAME = "TYPENAME";
})(ue || (ue = {}));
ue.ELEMENTUID, ue.TYPENAME;
var qe, Pe;
(function(e) {
  e[e.ELEMENTUID = 0] = "ELEMENTUID", e[e.TYPENAME = 1] = "TYPENAME";
})(qe || (qe = {})), function(e) {
  e[e.ELEMENTUID = 0] = "ELEMENTUID", e[e.TYPENAME = 1] = "TYPENAME", e[e.FROMUID = 2] = "FROMUID", e[e.TOUID = 3] = "TOUID";
}(Pe || (Pe = {}));
var je, Ue, Qe, He;
(function(e) {
  e[e.featureResult = 0] = "featureResult", e[e.countResult = 1] = "countResult", e[e.idsResult = 2] = "idsResult";
})(je || (je = {})), function(e) {
  e[e.upperLeft = 0] = "upperLeft", e[e.lowerLeft = 1] = "lowerLeft";
}(Ue || (Ue = {})), function(e) {
  e[e.sqlTypeBigInt = 0] = "sqlTypeBigInt", e[e.sqlTypeBinary = 1] = "sqlTypeBinary", e[e.sqlTypeBit = 2] = "sqlTypeBit", e[e.sqlTypeChar = 3] = "sqlTypeChar", e[e.sqlTypeDate = 4] = "sqlTypeDate", e[e.sqlTypeDecimal = 5] = "sqlTypeDecimal", e[e.sqlTypeDouble = 6] = "sqlTypeDouble", e[e.sqlTypeFloat = 7] = "sqlTypeFloat", e[e.sqlTypeGeometry = 8] = "sqlTypeGeometry", e[e.sqlTypeGUID = 9] = "sqlTypeGUID", e[e.sqlTypeInteger = 10] = "sqlTypeInteger", e[e.sqlTypeLongNVarchar = 11] = "sqlTypeLongNVarchar", e[e.sqlTypeLongVarbinary = 12] = "sqlTypeLongVarbinary", e[e.sqlTypeLongVarchar = 13] = "sqlTypeLongVarchar", e[e.sqlTypeNChar = 14] = "sqlTypeNChar", e[e.sqlTypeNVarChar = 15] = "sqlTypeNVarChar", e[e.sqlTypeOther = 16] = "sqlTypeOther", e[e.sqlTypeReal = 17] = "sqlTypeReal", e[e.sqlTypeSmallInt = 18] = "sqlTypeSmallInt", e[e.sqlTypeSqlXml = 19] = "sqlTypeSqlXml", e[e.sqlTypeTime = 20] = "sqlTypeTime", e[e.sqlTypeTimestamp = 21] = "sqlTypeTimestamp", e[e.sqlTypeTimestamp2 = 22] = "sqlTypeTimestamp2", e[e.sqlTypeTinyInt = 23] = "sqlTypeTinyInt", e[e.sqlTypeVarbinary = 24] = "sqlTypeVarbinary", e[e.sqlTypeVarchar = 25] = "sqlTypeVarchar";
}(Qe || (Qe = {})), function(e) {
  e[e.OID_ARRAY = 0] = "OID_ARRAY", e[e.GLOBALID_ARRAY = 1] = "GLOBALID_ARRAY", e[e.STRING_ARRAY = 2] = "STRING_ARRAY", e[e.IDENTIFIER_ARRAY = 3] = "IDENTIFIER_ARRAY";
}(He || (He = {}));
function Rt(e) {
  if (!e.spatialReference.isWGS84) throw new J("knowledge-graph:layer-support-utils", "The extentToInBoundsRings function only supports WGS84 spatial references.");
  let i;
  return i = e.xmax > 180 && e.xmin < 180 ? [[[e.xmin, e.ymin], [e.xmin, e.ymax], [180, e.ymax], [180, e.ymin], [e.xmin, e.ymin]], [[-180, e.ymin], [-180, e.ymax], [e.xmax - 360, e.ymax], [e.xmax - 360, e.ymin], [-180, e.ymin]]] : e.xmax > 180 && e.xmin > 180 ? [[[e.xmin - 360, e.ymin], [e.xmin - 360, e.ymax], [e.xmax - 360, e.ymax], [e.xmax - 360, e.ymin], [e.xmin - 360, e.ymin]]] : e.xmax > -180 && e.xmin < -180 ? [[[e.xmin + 360, e.ymin], [e.xmin + 360, e.ymax], [180, e.ymax], [180, e.ymin], [e.xmin + 360, e.ymin]], [[-180, e.ymin], [-180, e.ymax], [e.xmax, e.ymax], [e.xmax, e.ymin], [-180, e.ymin]]] : e.xmax < -180 && e.xmin < -180 ? [[[e.xmin + 360, e.ymin], [e.xmin + 360, e.ymax], [e.xmax + 360, e.ymax], [e.xmax + 360, e.ymin], [e.xmin + 360, e.ymin]]] : [[[e.xmin, e.ymin], [e.xmin, e.ymax], [e.xmax, e.ymax], [e.xmax, e.ymin], [e.xmin, e.ymin]]], i;
}
async function vt(e, i) {
  const t = [], a = /* @__PURE__ */ new Map(), n = [];
  if (i.dataModel?.relationshipTypes) for (const s of i.dataModel.relationshipTypes) s.name && a.set(s.name, []);
  for (const s of e) a.has(s.typeName) && a.get(s.typeName)?.push(s.id);
  for (const [s, o] of a) {
    if (o.length < 1) continue;
    const h = new se({ openCypherQuery: `MATCH (n)-[r:${s}]->(m) WHERE id(r) in $ids RETURN id(n), labels(n)[0], id(m), labels(m)[0]`, bindParameters: { ids: o } });
    n.push(ye(i, h).then(async (m) => {
      const r = m.resultRowsStream.getReader();
      for (; ; ) {
        const { done: c, value: w } = await r.read();
        if (c) break;
        for (const D of w) t.push({ id: D[0], typeName: D[1] }), t.push({ id: D[2], typeName: D[3] });
      }
    }));
  }
  return await Promise.all(n), t;
}
const x = "ESRI__ID", pe = "ESRI__ORIGIN_ID", de = "ESRI__DESTINATION_ID", S = "ESRI__LAYOUT_GEOMETRY", De = "ESRI__AGGREGATION_COUNT", K = 12;
let U = class extends ht {
  constructor(i) {
    super(i), this._processingCacheUpdatesLookup = /* @__PURE__ */ new Map(), this.knowledgeGraph = null, this.inclusionModeDefinition = { generateAllSublayers: !0, namedTypeDefinitions: /* @__PURE__ */ new Map() }, this.entityTypeNames = /* @__PURE__ */ new Set(), this.relationshipTypeNames = /* @__PURE__ */ new Set(), this.geographicLookup = /* @__PURE__ */ new Map(), this.sublayerCaches = /* @__PURE__ */ new Map(), this.nodeConnectionsLookup = /* @__PURE__ */ new Map(), this.relationshipConnectionsLookup = /* @__PURE__ */ new Map(), this.memberIdTypeLookup = /* @__PURE__ */ new Map();
    const t = /* @__PURE__ */ new Map();
    i.knowledgeGraph.dataModel.entityTypes?.forEach((a) => {
      a.name && (t.set(a.name, "entity"), this._processingCacheUpdatesLookup.set(a.name, []), i.inclusionModeDefinition && !i.inclusionModeDefinition?.generateAllSublayers || this.entityTypeNames.add(a.name), a.properties?.forEach((n) => {
        n.geometryType && n.geometryType !== "esriGeometryNull" && this.geographicLookup.set(a.name, { name: n.name ?? "", geometryType: n.geometryType });
      }));
    }), i.knowledgeGraph.dataModel.relationshipTypes?.forEach((a) => {
      a.name && (t.set(a.name, "relationship"), this._processingCacheUpdatesLookup.set(a.name, []), i.inclusionModeDefinition && !i.inclusionModeDefinition?.generateAllSublayers || this.relationshipTypeNames.add(a.name), a.properties?.forEach((n) => {
        n.geometryType && n.geometryType !== "esriGeometryNull" && this.geographicLookup.set(a.name, { name: n.name ?? "", geometryType: n.geometryType });
      }));
    }), i.inclusionModeDefinition?.namedTypeDefinitions.forEach((a, n) => {
      if (t.get(n) === "entity") this.entityTypeNames.add(n);
      else {
        if (t.get(n) !== "relationship") return ne.getLogger(this).warn(`A named type, ${n}, was in the inclusion list that wasn't in the data model and will be removed`), void i.inclusionModeDefinition?.namedTypeDefinitions.delete(n);
        this.relationshipTypeNames.add(n);
      }
      const s = /* @__PURE__ */ new Map();
      a.members?.forEach((o) => {
        z(this.memberIdTypeLookup, o.id, () => /* @__PURE__ */ new Set()).add(n);
        const h = this.getById(o.id);
        h && s.set(o.id, h);
      }), this.sublayerCaches.set(n, s);
    });
  }
  addToLayer(i) {
    i.forEach(({ typeName: t, id: a }) => {
      if (!this.inclusionModeDefinition) throw new J("knowledge-graph:layer-data-manager", "You cannot add to a layer's exclusion list if it was not created with an exclusion list originally");
      if (this.inclusionModeDefinition.namedTypeDefinitions.has(t)) {
        if (this.inclusionModeDefinition.namedTypeDefinitions.has(t)) {
          const n = this.inclusionModeDefinition.namedTypeDefinitions.get(t);
          n.members || (n.members = /* @__PURE__ */ new Map()), n.members.set(a, { id: a }), z(this.memberIdTypeLookup, a, () => /* @__PURE__ */ new Set()).add(t);
        }
      } else {
        const n = /* @__PURE__ */ new Map();
        n.set(a, { id: a }), this.inclusionModeDefinition.namedTypeDefinitions.set(t, { useAllData: !1, members: n }), z(this.memberIdTypeLookup, a, () => /* @__PURE__ */ new Set()).add(t);
      }
    });
  }
  getById(i) {
    return we.getInstance().readFromStoreById(i);
  }
  async getData(i, t, a) {
    if (t.objectType.name && this.inclusionModeDefinition?.namedTypeDefinitions && this.inclusionModeDefinition.namedTypeDefinitions.size > 0 && !this.inclusionModeDefinition.namedTypeDefinitions.has(t.objectType.name)) return [];
    let n;
    if (n = i || new ie({ where: "1=1", outFields: ["*"] }), t.parentCompositeLayer.type === "link-chart") {
      const s = t.parentCompositeLayer, o = this._processingCacheUpdatesLookup.get(t.objectType.name ?? ""), h = n.outFields, m = n.geometry;
      let r = "", c = "";
      m && m.extent && (r = Z(m.extent.ymin, m.extent.xmin, K), c = Z(m.extent.ymax, m.extent.xmax, K)), h && h.length === 1 && h[0] === x && n.where === "1=1" || await Promise.all(o ?? []);
      const w = this.sublayerCaches.has(t.objectType.name ?? "") ? Array.from(this.sublayerCaches.get(t.objectType.name)?.values()) : [], D = [];
      return w.forEach((L) => {
        if (this.relationshipTypeNames.has(t.objectType.name) ? L.geometry = s.relationshipLinkChartDiagramLookup.get(L.attributes[t.objectIdField]) : L.geometry = s.entityLinkChartDiagramLookup.get(L.attributes[t.objectIdField]), L.attributes[S] = L.geometry, r && c) {
          const d = s.linkChartGeohashLookup.get(L.attributes[t.objectIdField]);
          d ? d >= r && d <= c && D.push(L) : D.push(L);
        } else D.push(L);
      }), D;
    }
    return this.retrieveDataFromService(n, t, a);
  }
  async getConnectedRecordIds(i, t) {
    const a = [];
    let n = "";
    const s = [], o = /* @__PURE__ */ new Map();
    if (i.forEach((h) => {
      if (this.memberIdTypeLookup.has(h)) for (const m of this.memberIdTypeLookup.get(h)) {
        if (!this.entityTypeNames.has(m)) return;
        o.has(m) ? o.get(m)?.push(h) : o.set(m, [h]);
      }
    }), t && t?.length !== 0) {
      for (const h of t) n = n + h + "|";
      n = n.slice(0, -1);
    }
    return o.forEach((h, m) => {
      let r;
      r = t && t?.length !== 0 ? `MATCH (n:${m})-[r:${n}]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]` : `MATCH (n:${m})-[r]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]`;
      const c = new Promise((w) => {
        (async () => {
          const D = (await ye(this.knowledgeGraph, new se({ openCypherQuery: r, bindParameters: { ids: h } }))).resultRowsStream.getReader();
          try {
            for (; ; ) {
              const { done: L, value: d } = await D.read();
              if (L) break;
              for (let C = 0; C < d.length; C++) {
                const p = d[C];
                a.push({ id: p[0], typeName: p[1] }), a.push({ id: p[2], typeName: p[3] });
              }
            }
          } catch (L) {
            if (L.name !== "AbortError") throw L;
            ne.getLogger(this).info("Request aborted as expected");
          }
        })().then(() => {
          w();
        });
      });
      s.push(c);
    }), this.refreshCacheContent(), await Promise.all(s), a;
  }
  async refreshCacheContent(i, t, a, n = !0) {
    const s = we.getInstance(), o = [], h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
    this.knowledgeGraph.dataModel.entityTypes?.forEach((r) => {
      r.name && m.set(r.name, r);
    }), this.knowledgeGraph.dataModel.relationshipTypes?.forEach((r) => {
      r.name && m.set(r.name, r);
    }), i || this.inclusionModeDefinition ? i ? i.forEach((r) => {
      if (this.memberIdTypeLookup.has(r)) for (const c of this.memberIdTypeLookup.get(r)) h.has(c) ? h.get(c)?.push(r) : h.set(c, [r]);
    }) : this.inclusionModeDefinition?.namedTypeDefinitions?.forEach((r, c) => {
      r.useAllData ? h.set(c, null) : r.members && r.members.forEach((w) => {
        h.has(c) && h.get(c) !== null ? h.get(c)?.push(w.id) : h.set(c, [w.id]);
      });
    }) : (this.knowledgeGraph.dataModel.entityTypes?.forEach((r) => {
      r.name && h.set(r.name, null);
    }), this.knowledgeGraph.dataModel.entityTypes?.forEach((r) => {
      r.name && h.set(r.name, null);
    }));
    for (const [r, c] of h) {
      const w = new Promise((D) => {
        (async () => {
          const d = /* @__PURE__ */ new Set(), C = [];
          let p, M = "", N = !1;
          if (t || m.get(r)?.properties?.forEach((b) => {
            b.name && d.add(b.name);
          }), a && this.geographicLookup.has(r)) {
            const b = this.geographicLookup.get(r)?.name;
            b && d.add(b);
          }
          if (this.entityTypeNames.has(r)) M = `MATCH (n:${r}) ${c ? "WHERE id(n) IN $ids " : ""}return ID(n)`, d.forEach((b) => {
            M += `, n.${b}`, C.push(b);
          });
          else {
            if (!this.relationshipTypeNames.has(r)) throw new J("knowledge-graph:layer-data-manager", `The graph type of ${r} could not be determined. Was this type set in the KG data model and inclusion definition?`);
            N = !0, M = `MATCH ()-[n:${r}]->() ${c ? "WHERE id(n) IN $ids " : ""}return ID(n), id(startNode(n)), id(endNode(n))`, d.forEach((b) => {
              M += `, n.${b}`, C.push(b);
            });
          }
          p = new se(c ? { openCypherQuery: M, bindParameters: { ids: c } } : { openCypherQuery: M });
          const T = (await ye(this.knowledgeGraph, p)).resultRowsStream.getReader();
          for (; ; ) {
            const { done: b, value: R } = await T.read();
            if (b) break;
            const I = [];
            for (let E = 0; E < R.length; E++) {
              const j = R[E];
              let O = 0, B = 0;
              const l = { properties: {} };
              for (l.id = j[O], O++, B++, N && (l.originId = j[O], O++, B++, l.destinationId = j[O], O++, B++, z(this.nodeConnectionsLookup, l.originId, () => /* @__PURE__ */ new Set()).add(l.id), z(this.nodeConnectionsLookup, l.destinationId, () => /* @__PURE__ */ new Set()).add(l.id), z(this.relationshipConnectionsLookup, l.id, () => [l.originId, l.destinationId])); O < j.length; O++) l.properties[C[O - B]] = j[O];
              I.push(l);
            }
            const k = s.writeToStore(I, x, this.geographicLookup.get(r)?.name);
            this.sublayerCaches.has(r) || this.sublayerCaches.set(r, /* @__PURE__ */ new Map()), n && !this.inclusionModeDefinition?.namedTypeDefinitions.has(r) && this.inclusionModeDefinition?.namedTypeDefinitions.set(r, { useAllData: !1, members: /* @__PURE__ */ new Map() }), n && !this.inclusionModeDefinition?.namedTypeDefinitions.get(r).members && (this.inclusionModeDefinition.namedTypeDefinitions.get(r).members = /* @__PURE__ */ new Map());
            const _ = this.sublayerCaches.get(r);
            k.forEach((E) => {
              _?.set(E.attributes[x], E), n && !this.inclusionModeDefinition?.namedTypeDefinitions.get(r).members.has(E.attributes[x]) && (this.inclusionModeDefinition?.namedTypeDefinitions.get(r).members.set(E.attributes[x], { id: E.attributes[x] }), z(this.memberIdTypeLookup, E.attributes[x], () => /* @__PURE__ */ new Set()).add(r));
            });
          }
        })().then(() => {
          D(null);
        });
      });
      o.push(w), this._processingCacheUpdatesLookup.get(r)?.push(w);
    }
    await Promise.all(o);
  }
  removeFromLayer(i) {
    const t = /* @__PURE__ */ new Set(), a = new Set(i.map((n) => n.id));
    for (const n of i) t.add(n.typeName), this.memberIdTypeLookup.get(n.id)?.size === 1 ? this.memberIdTypeLookup.delete(n.id) : this.memberIdTypeLookup.get(n.id)?.delete(n.typeName), this.inclusionModeDefinition?.namedTypeDefinitions.forEach((s, o) => {
      o === n.typeName && s.members?.has(n.id) && s.members.delete(n.id);
    });
    t.forEach((n) => {
      this.sublayerCaches.get(n)?.forEach((s, o) => {
        a.has(o) && this.sublayerCaches.get(n)?.delete(o);
      });
    });
  }
  async retrieveDataFromService(i, t, a) {
    const n = we.getInstance(), s = /* @__PURE__ */ new Set(), o = [];
    let h, m = "", r = [];
    const c = t.graphType === "relationship", w = this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData, D = t.parentCompositeLayer.sublayerIdsCache.get(t.objectType.name);
    let L = !w && D ? Array.from(D).sort() : null;
    if (this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData) this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData && i.objectIds != null && (L = i.objectIds);
    else if (i.objectIds != null && L && L.length > 0) {
      const C = i.objectIds;
      i.objectIds = L.filter((p) => C.includes(p));
    } else if (i.objectIds != null) L = i.objectIds;
    else {
      if (this.inclusionModeDefinition?.namedTypeDefinitions.has(t.objectType.name) && (!this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members || this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members?.size < 1)) return i.objectIds = [], [];
      i.objectIds = L;
    }
    if (i.outFields != null) {
      const C = i.outFields;
      C.includes("*") ? t.fields.forEach((p) => {
        s.add(p.name);
      }) : C.forEach((p) => {
        p !== x && p !== t.geometryFieldName && s.add(p);
      });
    }
    if (i.geometry != null) {
      const C = i.geometry;
      let p;
      const M = t.parentCompositeLayer.dataManager.knowledgeGraph.serviceDefinition, N = M?.spatialReference, T = M?.serviceCapabilities?.geometryCapabilities;
      let b = T?.geometryMaxBoundingRectangleSizeX, R = T?.geometryMaxBoundingRectangleSizeY;
      if (C?.extent?.spatialReference && !C.spatialReference?.isWGS84 ? (await Ze(C.extent.spatialReference, oe), p = Ee(C.extent, oe)) : p = C.extent, b && R && N) {
        if (N.wkid !== 4326) {
          const I = new re({ spatialReference: N, xmax: b, ymax: R }), k = Ee(I, oe);
          b = k.xmax, R = k.ymax;
        }
        if (p.xmax - p.xmin > b) throw new J("knowledge-graph:layer-data-manager", `Extent x bounds should be within ${b}° latitude, limit exceeded`);
        if (p.ymax - p.ymin > R) throw new J("knowledge-graph:layer-data-manager", `Extent y bounds should be within ${R}° longitude, limit exceeded`);
      }
      if (i.where != null && i.where !== "1=1") {
        const I = await Se(i.where.toUpperCase(), t.fieldsIndex);
        t.fields.forEach((k) => {
          I.fieldNames.includes(k.name) && s.add(k.name);
        });
      }
      m = c ? `Match ()-[n:${t.objectType.name}]->() WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n), id(startNode(r)), id(endNode(r))` : `Match (n:${t.objectType.name}) WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n)`, t.geometryFieldName && s.add(t.geometryFieldName), s.forEach((I) => {
        m += `, n.${I}`, o.push(I);
      }), h = new se({ openCypherQuery: m, bindParameters: { param_filter_geom: new Ke({ rings: Rt(p) }) } });
    } else {
      let C = "";
      if (i.where != null && i.where !== "1=1") {
        const N = await Se(i.where, t.fieldsIndex);
        t.fields.forEach((k) => {
          N.fieldNames.includes(k.name) && s.add(k.name);
        });
        const T = /* @__PURE__ */ new Set(["column-reference", "string", "number", "binary-expression"]), b = /* @__PURE__ */ new Set(["=", "<", "<=", "<>", ">", ">=", "AND", "OR", "LIKE"]);
        let R = !1;
        const I = (k) => {
          if (k.type === "column-reference") return `n.${k.column}`;
          if (k.type === "string") return `'${k.value}'`;
          if (k.type === "number") return `${k.value}`;
          if (k.type === "binary-expression" && T.has(k.left.type) && T.has(k.right.type) && b.has(k.operator)) return `${I(k.left)} ${k.operator} ${I(k.right)}`;
          if (k.type === "binary-expression" && k.operator === "LIKE") {
            let _ = "";
            if (k.left.type === "function" && k.left.args.value[0].type === "column-reference") _ += `lower(n.${k.left.args.value[0].column})`;
            else {
              if (k.left.type !== "column-reference") return R = !0, "";
              _ += `lower(n.${k.left.column})`;
            }
            if (_ += " CONTAINS (", k.right.type !== "string") return R = !0, "";
            {
              let E = k.right.value;
              E.charAt(0) === "%" && (E = E.slice(1)), E.charAt(E.length - 1) === "%" && (E = E.slice(0, -1)), _ += `'${E.toLowerCase()}')`;
            }
            return _;
          }
          return R = !0, "";
        };
        C = I(N.parseTree), R && (C = "");
      }
      let p = "";
      p = c ? `Match ()-[n:${t.objectType.name}]->()` : `Match (n:${t.objectType.name})`;
      let M = !1;
      L && (M = !0, p += " WHERE ID(n) IN $ids"), C && (p += M ? " AND" : " WHERE", p += ` ${C}`), p += " return ID(n)", c && (p += ", id(startNode(n)), id(endNode(n))"), i.returnGeometry && t.geometryFieldName && s.add(t.geometryFieldName), s.forEach((N) => {
        p += `, n.${N}`, o.push(N);
      }), h = new se(L ? { openCypherQuery: p, bindParameters: { ids: L } } : { openCypherQuery: p });
    }
    const d = (await ye(t.parentCompositeLayer.dataManager.knowledgeGraph, h, a)).resultRowsStream.getReader();
    for (; ; ) {
      const { done: C, value: p } = await d.read();
      if (C) break;
      const M = [];
      for (let N = 0; N < p.length; N++) {
        const T = p[N];
        let b = 0, R = 0;
        const I = { properties: {} };
        for (I.id = T[b], b++, R++, c && (I.originId = T[b], b++, R++, I.destinationId = T[b], b++, R++); b < T.length; b++) I.properties[o[b - R]] = T[b];
        M.push(I);
      }
      r = r.concat(n.writeToStore(M, x, t.parentCompositeLayer.dataManager.geographicLookup.get(t.objectType.name)?.name));
    }
    return r;
  }
};
u([f()], U.prototype, "knowledgeGraph", void 0), u([f()], U.prototype, "inclusionModeDefinition", void 0), u([f()], U.prototype, "entityTypeNames", void 0), u([f()], U.prototype, "relationshipTypeNames", void 0), u([f()], U.prototype, "geographicLookup", void 0), u([f()], U.prototype, "sublayerCaches", void 0), u([f()], U.prototype, "nodeConnectionsLookup", void 0), u([f()], U.prototype, "relationshipConnectionsLookup", void 0), u([f()], U.prototype, "memberIdTypeLookup", void 0), U = u([me("esri.rest.knowledgeGraph.knowledgeGraphLayer.KnowledgeGraphLayerDataManager")], U);
const Be = pt(), At = (e) => {
  let i = class extends e {
    constructor() {
      super(...arguments), this.fields = [], this.fieldsIndex = null;
    }
  };
  return u([f(Be.fields)], i.prototype, "fields", void 0), u([f(Be.fieldsIndex)], i.prototype, "fieldsIndex", void 0), i = u([me("esri.layers.knowledgeGraphLayer.KnowledgeGraphSublayerBase")], i), i;
};
let v = class extends dt(At(Xe(et(yt(tt))))) {
  constructor(e) {
    if (super(e), this.capabilities = Dt(!1, !1), this.definitionExpression = "", this.displayField = "", this.elevationInfo = null, this.geometryType = null, this.geometryFieldName = null, this.graphType = null, this.hasM = !1, this.hasZ = !1, this.labelsVisible = null, this.labelingInfo = null, this.objectIdField = x, this.objectType = null, this.parentCompositeLayer = null, this.popupEnabled = !0, this.popupTemplate = null, this.source = { openPorts: () => this.load().then(() => {
      const i = new MessageChannel();
      return new ut(i.port1, { channel: i, client: { queryFeatures: (t, a = {}) => {
        const n = ie.fromJSON(t);
        return this.queryFeaturesJSON(n, a);
      } } }), [i.port2];
    }) }, this.type = "knowledge-graph-sublayer", e.parentCompositeLayer.type === "link-chart") e.graphType === "relationship" ? this.geometryType = "polyline" : this.geometryType = "point", this.geometryFieldName = S;
    else if (e.parentCompositeLayer.dataManager.geographicLookup.get(e.objectType.name)?.geometryType && e.parentCompositeLayer.dataManager.geographicLookup.get(e.objectType.name)?.geometryType !== "esriGeometryNull") {
      const i = e.parentCompositeLayer.dataManager.geographicLookup.get(e.objectType.name);
      this.geometryFieldName = i?.name ?? null, this.geometryType = i?.geometryType ? te.fromJSON(i.geometryType) : null;
      const t = i?.name, a = t ? e.objectType.properties?.[t] : null;
      a ? (this.hasM = a.hasM ?? !1, this.hasZ = a.hasZ ?? !1) : (this.hasM = !1, this.hasZ = !1);
    } else this.geometryType = null;
    e.objectType.properties?.forEach((i) => {
      let t = null, a = i.fieldType;
      a === "esriFieldTypeOID" && (a = "esriFieldTypeInteger"), this.fields.push(be.fromJSON({ name: i.name, type: a, alias: i.alias, defaultValue: t, editable: i.editable, nullable: i.nullable }));
    }), this.fields.push(be.fromJSON({ name: this.objectIdField, type: "esriFieldTypeString", alias: this.objectIdField, editable: !1 })), this.fields.push(be.fromJSON({ name: De, type: "esriFieldTypeInteger", alias: De, editable: !1 })), this._set("fields", [...this.fields]), e.parentCompositeLayer.dataManager.knowledgeGraph.dataModel?.spatialReference && (this.spatialReference = e.parentCompositeLayer.dataManager.knowledgeGraph.dataModel.spatialReference), e.parentCompositeLayer.type === "link-chart" ? e.graphType === "relationship" ? this.renderer = Le(ke(te.toJSON("polyline")).renderer) : this.renderer = Le(ke(te.toJSON("point")).renderer) : this.renderer = Le(ke(te.toJSON(this.geometryType)).renderer);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(e) {
    ct(e, this.fieldsIndex), this._set("renderer", e);
  }
  createPopupTemplate(e) {
    return mt(this, e);
  }
  createQuery() {
    return new ie({ where: "1=1", outFields: ["*"] });
  }
  getField(e) {
    for (let i = 0; i < this.fields.length; i++) if (this.fields[i].name === e) return this.fields[i];
    return null;
  }
  getFieldDomain(e, i) {
    return null;
  }
  async queryFeatures(e, i) {
    const { resolvedQuery: t, queryEngine: a } = await this._setupQueryObjects(e), n = gt.fromJSON(await a.executeQuery(t.toJSON(), i?.signal));
    return n.features.forEach((s) => {
      s.sourceLayer = this;
    }), n;
  }
  async queryFeaturesJSON(e, i) {
    const { resolvedQuery: t, queryEngine: a } = await this._setupQueryObjects(e);
    return await a.executeQuery(t.toJSON(), i?.signal);
  }
  async queryFeatureCount(e, i) {
    const { resolvedQuery: t, queryEngine: a } = await this._setupQueryObjects(e);
    return a.executeQueryForCount(t.toJSON(), i?.signal);
  }
  async queryExtent(e = {}, i) {
    const t = { ...e, returnGeometry: !0 }, { resolvedQuery: a, queryEngine: n } = await this._setupQueryObjects(t), s = await n.executeQueryForExtent(a.toJSON(), i?.signal);
    let o;
    return o = s.extent?.xmin != null && s.extent?.xmax != null && s.extent?.ymin != null && s.extent?.ymax != null ? new re(s.extent) : new re(), { count: s.count, extent: o };
  }
  async queryObjectIds(e, i) {
    const t = ie.from(e);
    let a;
    if (this.parentCompositeLayer.type === "link-chart" && this._cachedQueryEngine) a = this._cachedQueryEngine;
    else {
      const n = await this.parentCompositeLayer.dataManager.getData(t, this, i);
      a = this.loadQueryEngine(n);
    }
    return a.executeQueryForIds(t.toJSON(), i?.signal);
  }
  loadQueryEngine(e) {
    const i = new Et({ geometryType: te.toJSON(this.geometryType), hasM: this.hasM, hasZ: this.hasZ }), t = new xt({ fieldsIndex: this.fieldsIndex.toJSON(), geometryType: te.toJSON(this.geometryType), hasM: this.hasM, hasZ: this.hasZ, objectIdField: this.objectIdField, spatialReference: this.spatialReference.toJSON(), timeInfo: null, featureStore: i });
    return t.featureStore.addMany(e), t;
  }
  async refreshCachedQueryEngine() {
    const e = await this.parentCompositeLayer.dataManager.getData(new ie({ where: "1=1", outFields: [x] }), this);
    this._cachedQueryEngine = this.loadQueryEngine(e);
  }
  async _setupQueryObjects(e, i) {
    const t = ie.from(e), a = t.geometry;
    let n;
    if (a && !a.spatialReference?.isWGS84 && (await Ze(a.spatialReference, oe), t.geometry = Ee(a instanceof Ke || a instanceof xe ? a : a.extent, oe)), this.parentCompositeLayer.type === "link-chart" && this._cachedQueryEngine) n = this._cachedQueryEngine;
    else {
      const s = await this.parentCompositeLayer.dataManager.getData(t, this, i);
      n = this.loadQueryEngine(s);
    }
    return { resolvedQuery: t, queryEngine: n };
  }
};
u([f()], v.prototype, "capabilities", void 0), u([f({ readOnly: !0 })], v.prototype, "defaultPopupTemplate", null), u([f()], v.prototype, "definitionExpression", void 0), u([f()], v.prototype, "displayField", void 0), u([f()], v.prototype, "elevationInfo", void 0), u([f()], v.prototype, "geometryType", void 0), u([f()], v.prototype, "geometryFieldName", void 0), u([f()], v.prototype, "graphType", void 0), u([f()], v.prototype, "hasM", void 0), u([f()], v.prototype, "hasZ", void 0), u([f()], v.prototype, "labelsVisible", void 0), u([f()], v.prototype, "labelingInfo", void 0), u([f()], v.prototype, "objectIdField", void 0), u([f()], v.prototype, "objectType", void 0), u([f()], v.prototype, "parentCompositeLayer", void 0), u([f(ft)], v.prototype, "popupEnabled", void 0), u([f({ type: Tt, json: { name: "popupInfo", write: !0 } })], v.prototype, "popupTemplate", void 0), u([f({ types: bt, json: { write: { target: "layerDefinition.drawingInfo.renderer" } } })], v.prototype, "renderer", null), u([f()], v.prototype, "source", void 0), u([f({ json: { read: !1 } })], v.prototype, "type", void 0), v = u([me("esri.layers.knowledgeGraph.KnowledgeGraphSublayer")], v);
const Ce = v;
let Me, A = null;
function $t() {
  return Me || (Me = import("./lclayout-DXWmyRJa.js").then((e) => e.l).then(({ default: e }) => e({ locateFile: (i) => Lt(`esri/libs/linkchartlayout/${i}`) })).then((e) => {
    _t(e);
  }), Me);
}
function _t(e) {
  A = e;
}
var H, ce;
function ae(e, i, t, a, n, s) {
  const o = t.length, h = n.length, m = Float64Array.BYTES_PER_ELEMENT, r = Uint32Array.BYTES_PER_ELEMENT, c = Uint8Array.BYTES_PER_ELEMENT, w = 16, D = w - 1 + o * (c + 2 * m) + h * (2 * r), L = A._malloc(D);
  try {
    const d = L + w - L % w, C = d + o * m, p = C + o * m, M = p + h * r, N = M + h * r, T = () => [A.HEAPF64.subarray(d >> 3, (d >> 3) + o), A.HEAPF64.subarray(C >> 3, (C >> 3) + o), A.HEAPU32.subarray(p >> 2, (p >> 2) + h), A.HEAPU32.subarray(M >> 2, (M >> 2) + h), A.HEAPU8.subarray(N, N + o)], [b, R, I, k, _] = T();
    b.set(t), R.set(a), I.set(n), k.set(s), _.set(i);
    let E = e(o, N, d, C, h, p, M), j = null;
    if (E) {
      const q = A.getLayoutLinksTypes(), Q = A.getLayoutLinksVerticesEndIndices(), G = A.getLayoutLinksVertices(), P = A.countLayoutLinksVertices();
      !h || q && Q ? P && !G ? E = !1 : j = { types: new Uint8Array(A.HEAPU8.subarray(q, q + h)), vertexEndIndex: new Uint32Array(A.HEAPU32.subarray(Q >> 2, (Q >> 2) + h)), vertices: new Float64Array(A.HEAPF64.subarray(G >> 3, (G >> 3) + 2 * P)) } : E = !1;
    }
    const [O, B, l, g, y] = T();
    return t.set(O), a.set(B), n.set(l), s.set(g), i.set(y), { success: E, links: j };
  } finally {
    A._free(L), A.cleanupLayout();
  }
}
(function(e) {
  e[e.None = 0] = "None", e[e.IsMovable = 1] = "IsMovable", e[e.IsGeographic = 2] = "IsGeographic", e[e.IsRoot = 4] = "IsRoot";
})(H || (H = {})), function(e) {
  e[e.Regular = 0] = "Regular", e[e.Orthogonal = 1] = "Orthogonal", e[e.Curved = 2] = "Curved", e[e.Recursive = 3] = "Recursive";
}(ce || (ce = {}));
const Je = 2, Ye = 1, ze = -1;
var Ie, Ne, Re, ve, Ae, $e, Ve, We;
(function(e) {
  function i() {
    return A.getMinIdealEdgeLength();
  }
  function t(a, n, s, o, h, m = Je, r = Ye, c = ze) {
    return ae((w, D, L, d, C, p, M) => A.applyForceDirectedLayout(w, D, L, d, C, p, M, m, r, c), a, n, s, o, h);
  }
  e.getMinIdealEdgeLength = i, e.apply = t;
})(Ie || (Ie = {})), function(e) {
  function i(t, a, n, s, o, h = Je, m = Ye, r = ze) {
    return ae((c, w, D, L, d, C, p) => A.applyCommunityLayout(c, w, D, L, d, C, p, h, m, r), t, a, n, s, o);
  }
  e.apply = i;
}(Ne || (Ne = {})), function(e) {
  function i(t, a, n, s, o) {
    return ae(A.applySimpleLayout, t, a, n, s, o);
  }
  e.apply = i;
}(Re || (Re = {})), function(e) {
  function i(t, a, n, s, o) {
    return ae(A.applyHierarchicalLayout, t, a, n, s, o);
  }
  e.apply = i;
}(ve || (ve = {})), function(e) {
  function i(t, a, n, s, o) {
    return ae(A.applyRadialTreeLayout, t, a, n, s, o);
  }
  e.apply = i;
}(Ae || (Ae = {})), function(e) {
  function i(t, a, n, s, o) {
    return ae(A.applySmartTreeLayout, t, a, n, s, o);
  }
  e.apply = i;
}($e || ($e = {})), function(e) {
  e[e.Undirected = 0] = "Undirected", e[e.Directed = 1] = "Directed", e[e.Reversed = 2] = "Reversed";
}(Ve || (Ve = {})), function(e) {
  e[e.ByCC_Raw = 0] = "ByCC_Raw", e[e.ByCC_NormalizeGlobally = 1] = "ByCC_NormalizeGlobally", e[e.ByCC_NormalizeByCC = 2] = "ByCC_NormalizeByCC";
}(We || (We = {}));
const St = (e, i, t) => (e.has(i) || e.set(i, t()), e.get(i));
let F = class extends Xe(et(tt)) {
  constructor(e) {
    if (super(e), this.dataPreloadedInLocalCache = !1, this.defaultLinkChartConfig = null, this._currentLinkChartConfig = { layoutMode: "RADIAL_TREE" }, this._graphTypeLookup = /* @__PURE__ */ new Map(), this.dataManager = null, this.knowledgeGraph = null, this.layers = new Ge(), this.entityLinkChartDiagramLookup = /* @__PURE__ */ new Map(), this.relationshipLinkChartDiagramLookup = /* @__PURE__ */ new Map(), this.linkChartExtent = new re({ xmin: -1e-7, ymin: -1e-7, xmax: 1e-7, ymax: 1e-7 }), this.linkChartGeohashLookup = /* @__PURE__ */ new Map(), this.memberEntityTypes = null, this.memberRelationshipTypes = null, this.sublayerIdsCache = /* @__PURE__ */ new Map(), this.tables = new Ge(), this.type = "link-chart", this._originalInclusionList = e.inclusionModeDefinition, e.dataPreloadedInLocalCache && !e.inclusionModeDefinition) throw new J("knowledge-graph:linkchart-layer-constructor", "If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");
  }
  normalizeCtorArgs(e) {
    return { url: e.url, title: e.title, dataPreloadedInLocalCache: e.dataPreloadedInLocalCache, defaultLinkChartConfig: e.defaultLinkChartConfig };
  }
  _initializeLayerProperties(e) {
    if (!this.title && this.url) {
      const s = this.url.split("/");
      this.title = s[s.length - 2];
    }
    const i = /* @__PURE__ */ new Set();
    let t = [], a = [];
    if (e.inclusionModeDefinition && (!e.inclusionModeDefinition.namedTypeDefinitions || e.inclusionModeDefinition.namedTypeDefinitions.size < 1)) throw new J("knowledge-graph:composite-layer-constructor", "If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");
    e.knowledgeGraph.dataModel.entityTypes?.forEach((s) => {
      s.name && this._graphTypeLookup.set(s.name, s);
    }), e.knowledgeGraph.dataModel.relationshipTypes?.forEach((s) => {
      s.name && this._graphTypeLookup.set(s.name, s);
    }), e.inclusionModeDefinition?.generateAllSublayers ? (t = e.knowledgeGraph.dataModel.entityTypes ?? [], a = e.knowledgeGraph.dataModel.relationshipTypes ?? []) : e.inclusionModeDefinition?.namedTypeDefinitions && e.inclusionModeDefinition?.namedTypeDefinitions.size > 0 ? e.inclusionModeDefinition?.namedTypeDefinitions.forEach((s, o) => {
      if (!this._graphTypeLookup.get(o)) return ne.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't in the data model and will be removed`), void e.inclusionModeDefinition?.namedTypeDefinitions.delete(o);
      this._graphTypeLookup.get(o) instanceof wt || "strictOrigin" in this._graphTypeLookup.get(o) ? i.has(o) || (i.add(o), a.push(this._graphTypeLookup.get(o))) : this._graphTypeLookup.get(o) instanceof Ct || "properties" in this._graphTypeLookup.get(o) ? i.has(o) || (i.add(o), t.push(this._graphTypeLookup.get(o))) : (ne.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't properly modeled and will be removed`), e.inclusionModeDefinition?.namedTypeDefinitions.delete(o));
    }) : (t = e.knowledgeGraph.dataModel.entityTypes ?? [], a = e.knowledgeGraph.dataModel.relationshipTypes ?? []);
    const n = new U({ knowledgeGraph: e.knowledgeGraph, inclusionModeDefinition: e.inclusionModeDefinition });
    this.knowledgeGraph = e.knowledgeGraph, this.memberEntityTypes = t, this.memberRelationshipTypes = a, this.dataManager = n;
  }
  load(e) {
    return this.addResolvingPromise(new Promise((i) => {
      Mt(this.url).then((t) => {
        if (this._initializeLayerProperties({ knowledgeGraph: t, inclusionModeDefinition: this._originalInclusionList }), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size || (this.dataManager.inclusionModeDefinition = { generateAllSublayers: !1, namedTypeDefinitions: /* @__PURE__ */ new Map() }, this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach((a) => {
          a.name && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(a.name, { useAllData: !0 });
        }), this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach((a) => {
          a.name && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(a.name, { useAllData: !0 });
        })), this.dataPreloadedInLocalCache) this.loadLayerAssumingLocalCache(), this.dataManager.inclusionModeDefinition && (this.dataManager.inclusionModeDefinition.generateAllSublayers = !1), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((a) => {
          a.useAllData = !1, a.members?.forEach((n) => {
            let s;
            s = n.linkChartLocation instanceof Fe ? n.linkChartLocation : n.linkChartLocation ? V(n.linkChartLocation) : null, s && s.coords.length === 2 && s.lengths.length === 0 ? (this.linkChartGeohashLookup.set(n.id, Z(s.coords[1], s.coords[0], K)), this.entityLinkChartDiagramLookup.set(n.id, s)) : (this.linkChartGeohashLookup.set(n.id, ""), this.relationshipLinkChartDiagramLookup.set(n.id, s));
          }), this.addResolvingPromise(this._initializeDiagram().then(async () => {
            this.layers.forEach(async (n) => {
              await n.refreshCachedQueryEngine();
            }), this.tables.forEach(async (n) => {
              await n.refreshCachedQueryEngine();
            });
          }));
        });
        else {
          const a = this.defaultLinkChartConfig?.layoutMode === "GEOGRAPHIC";
          this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0, !1, a, !0).then(async () => {
            kt(e);
            const n = [], s = [];
            this.loadLayerAssumingLocalCache(), this.dataManager.inclusionModeDefinition && (this.dataManager.inclusionModeDefinition.generateAllSublayers = !1, this.dataManager.inclusionModeDefinition.namedTypeDefinitions.forEach((o) => {
              o.useAllData = !1;
            })), await this._initializeDiagram(), this.layers.forEach((o) => {
              s.push(o.refreshCachedQueryEngine()), n.push(new Promise((h) => {
                o.on("layerview-create", () => {
                  h(null);
                });
              }));
            }), this.tables.forEach((o) => {
              s.push(o.refreshCachedQueryEngine());
            }), await Promise.all(s);
          }));
        }
        i(null);
      });
    })), Promise.resolve(this);
  }
  async addRecords(e, i) {
    let t = [];
    i?.cascadeAddRelationshipEndNodes && this.dataManager.knowledgeGraph.dataModel && (t = await vt(e, this.dataManager.knowledgeGraph));
    const a = e.concat(t).filter((n) => !this.sublayerIdsCache.get(n.typeName)?.has(n.id));
    await this._handleNewRecords(a);
  }
  async removeRecords(e, { cascadeRemoveRelationships: i = !0, recalculateLayout: t = !1 } = { cascadeRemoveRelationships: !0, recalculateLayout: !1 }) {
    let a = [];
    for (const s of e) this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(s.typeName)?.useAllData === !1 && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(s.typeName)?.members?.has(s.id) && a.push(s);
    if (i) {
      const s = /* @__PURE__ */ new Set(), o = [];
      for (const h of a) if (this.dataManager.nodeConnectionsLookup.has(h.id)) for (const m of this.dataManager.nodeConnectionsLookup.get(h.id)) s.add(m);
      for (const h of s) if (this.dataManager.memberIdTypeLookup.has(h)) for (const m of this.dataManager.memberIdTypeLookup.get(h)) this.dataManager.relationshipTypeNames.has(m) && o.push({ id: h, typeName: m });
      a = a.concat(o);
    }
    this.dataManager.removeFromLayer(a);
    for (const s of a) this.sublayerIdsCache.get(s.typeName)?.delete(s.id), this.dataManager.relationshipTypeNames.has(s.typeName) ? this.relationshipLinkChartDiagramLookup.delete(s.id) : this.entityLinkChartDiagramLookup.delete(s.id);
    t && await this.calculateLinkChartLayout(this._currentLinkChartConfig.layoutMode, {});
    const n = [];
    return this.layers.forEach((s) => {
      n.push(s.refreshCachedQueryEngine());
    }), await Promise.all(n), this._refreshNamedTypes(), a;
  }
  async expand(e, i) {
    const t = await this.dataManager.getConnectedRecordIds(e, i), a = t.filter((n) => !this.sublayerIdsCache.get(n.typeName)?.has(n.id));
    return await this._handleNewRecords(t), { records: a };
  }
  loadLayerAssumingLocalCache() {
    this.memberRelationshipTypes.forEach((e) => {
      const i = new Ce({ objectType: e, parentCompositeLayer: this, graphType: "relationship", title: e.name });
      i.geometryType ? this.layers.push(i) : this.tables.push(i), this.dataManager.sublayerCaches.has(e.name) || this.dataManager.sublayerCaches.set(e.name, /* @__PURE__ */ new Map());
    }), this.memberEntityTypes.forEach((e) => {
      const i = new Ce({ objectType: e, parentCompositeLayer: this, graphType: "entity", title: e.name });
      i.geometryType ? this.layers.push(i) : this.tables.push(i), this.dataManager.sublayerCaches.has(e.name) || this.dataManager.sublayerCaches.set(e.name, /* @__PURE__ */ new Map());
    }), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((e, i) => {
      const t = St(this.sublayerIdsCache, i, () => /* @__PURE__ */ new Set());
      e.members?.forEach((a) => {
        if (t.add(a.id), a.linkChartLocation) if (a.linkChartLocation instanceof Fe) this.dataManager.relationshipTypeNames.has(i) ? this.relationshipLinkChartDiagramLookup.set(a.id, a.linkChartLocation) : this.entityLinkChartDiagramLookup.set(a.id, a.linkChartLocation), a.linkChartLocation.coords.length === 2 && a.linkChartLocation.lengths.length === 0 ? this.linkChartGeohashLookup.set(a.id, Z(a.linkChartLocation.coords[1], a.linkChartLocation.coords[0], K)) : this.linkChartGeohashLookup.set(a.id, "");
        else {
          const n = V(a.linkChartLocation);
          this.dataManager.relationshipTypeNames.has(i) ? this.relationshipLinkChartDiagramLookup.set(a.id, a.linkChartLocation ? n : null) : this.entityLinkChartDiagramLookup.set(a.id, a.linkChartLocation ? n : null), "x" in a.linkChartLocation && "y" in a.linkChartLocation ? this.linkChartGeohashLookup.set(a.id, Z(a.linkChartLocation.x, a.linkChartLocation.y, K)) : this.linkChartGeohashLookup.set(a.id, "");
        }
      });
    });
  }
  async calculateLinkChartLayout(e = "RADIAL_TREE", i) {
    const t = [], a = [], n = [];
    this.dataManager.sublayerCaches.forEach((l, g) => {
      this.dataManager.entityTypeNames.has(g) ? l.forEach((y) => {
        t.push({ typeName: g, feature: y });
      }) : this.dataManager.relationshipTypeNames.has(g) && l.forEach((y) => {
        a.push({ typeName: g, feature: y });
      });
    }), this.entityLinkChartDiagramLookup = /* @__PURE__ */ new Map(), this.relationshipLinkChartDiagramLookup = /* @__PURE__ */ new Map();
    const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), r = new Uint8Array(t.length), c = new Float64Array(t.length), w = new Float64Array(t.length), D = new Uint32Array(a.length), L = new Uint32Array(a.length), d = [], C = "FORCE_DIRECTED", p = new re({ xmin: -1e-7, ymin: -1e-7, xmax: 1e-7, ymax: 1e-7 });
    let M, N = "FORCE_DIRECTED", T = 0, b = 0;
    switch (N = e === "GEOGRAPHIC" ? C : e, N) {
      case "FORCE_DIRECTED":
        M = Ie.apply;
        break;
      case "COMMUNITY":
        M = Ne.apply;
        break;
      case "HIERARCHICAL":
        M = ve.apply;
        break;
      case "RADIAL_TREE":
        M = Ae.apply;
        break;
      case "SMART_TREE":
        M = $e.apply;
        break;
      default:
        M = Re.apply;
    }
    t.forEach(({ typeName: l, feature: g }) => {
      if (i?.lockedNodeLocations?.has(g.attributes[x])) {
        e === "GEOGRAPHIC" && this.dataManager.geographicLookup.has(l) ? r[T] = H.IsGeographic : r[T] = H.None;
        const y = i.lockedNodeLocations.get(g.attributes[x]);
        c[T] = y.x, w[T] = y.y;
      } else if (e === "GEOGRAPHIC" && this.dataManager.geographicLookup.has(l)) {
        r[T] = H.IsGeographic;
        let y = null;
        const q = g.attributes[this.dataManager.geographicLookup.get(l).name];
        switch (this.dataManager.geographicLookup.get(l)?.geometryType) {
          case "esriGeometryPoint":
            c[T] = q?.x, w[T] = q?.y;
            break;
          case "esriGeometryPolygon":
            y = q?.centroid, y?.x != null && y?.y != null ? (c[T] = y.x, w[T] = y.y) : r[T] = H.IsMovable;
            break;
          case "esriGeometryPolyline":
          case "esriGeometryMultipoint":
            y = q?.extent?.center, y?.x != null && y?.y != null ? (c[T] = y.x, w[T] = y.y) : r[T] = H.IsMovable;
            break;
          default:
            r[T] = H.IsMovable;
        }
        (c[T] == null || w[T] == null || Number.isNaN(c[T]) || Number.isNaN(w[T])) && (r[T] = H.IsMovable, c[T] = 0, w[T] = 0);
      } else r[T] = H.IsMovable, c[T] = 0, w[T] = 0;
      m.set(g.attributes[x], T), d[T] = { feature: g, typeName: l }, T++;
    });
    let R = !1;
    const I = /* @__PURE__ */ new Map();
    a.forEach((l) => {
      const g = l.feature.attributes[pe], y = l.feature.attributes[de], q = m.get(g), Q = m.get(y);
      if (q !== void 0 && Q !== void 0) {
        const G = g + "-" + y, P = I.get(G);
        P?.has(l.typeName) || (D[b] = q, L[b] = Q, P === void 0 ? I.set(G, /* @__PURE__ */ new Map([[l.typeName, b]])) : P.set(l.typeName, b), b++), n.push(l);
      } else R = !0, this.relationshipLinkChartDiagramLookup.set(g, null), this.linkChartGeohashLookup.set(g, null);
    }), R && ne.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null"), await $t();
    const { success: k, links: _ } = M(r, c, w, D.subarray(0, b), L.subarray(0, b));
    if (!k) throw new J("knowledge-graph:layout-failed", "Attempting to arrange the records in the specified layout failed");
    for (let l = 0; l < d.length; l++) {
      if (w[l] > 84.9999 ? w[l] = 84.9999 : w[l] < -84.9999 && (w[l] = -84.9999), c[l] > 179.9999 ? c[l] = 179.9999 : c[l] < -179.9999 && (c[l] = -179.9999), d[l].feature.attributes[S] = new Oe(c[l], w[l]), s.has(d[l].typeName))
        s.get(d[l].typeName)?.set(d[l].feature.attributes[x], d[l].feature);
      else {
        const y = /* @__PURE__ */ new Map();
        y.set(d[l].feature.attributes[x], d[l].feature), s.set(d[l].typeName, y);
      }
      h.set(d[l].feature.attributes[x], d[l].feature);
      const g = V(d[l].feature.attributes[S]);
      this.entityLinkChartDiagramLookup.set(d[l].feature.attributes[x], d[l].feature.attributes[S] ? g : null), this.linkChartGeohashLookup.set(d[l].feature.attributes[x], Z(d[l].feature.attributes[S].y, d[l].feature.attributes[S].x, K)), d[l].feature.attributes[S].x < p.xmin && (p.xmin = d[l].feature.attributes[S].x), d[l].feature.attributes[S].x > p.xmax && (p.xmax = d[l].feature.attributes[S].x), d[l].feature.attributes[S].y < p.ymin && (p.ymin = d[l].feature.attributes[S].y), d[l].feature.attributes[S].y > p.ymax && (p.ymax = d[l].feature.attributes[S].y);
    }
    if (this.linkChartExtent.xmin = p.xmin, this.linkChartExtent.xmax = p.xmax, this.linkChartExtent.ymin = p.ymin, this.linkChartExtent.ymax = p.ymax, !_) throw new J("knowledge-graph:layout-failed", "Attempting to retrieve link geometry from diagram engine failed");
    const E = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Set();
    for (let l = 0; l < n.length; l++) {
      const g = [], y = n[l], q = y.feature.attributes[pe], Q = y.feature.attributes[de], G = q + "-" + Q, P = I.get(G).get(y.typeName), X = P === 0 ? 0 : _?.vertexEndIndex[P - 1];
      if (!B.has(P)) {
        if (B.add(P), _.types[P] === ce.Recursive) {
          const $ = [_.vertices[2 * X], _.vertices[2 * X + 1]], Te = [_.vertices[2 * (X + 1)], _.vertices[2 * (X + 1) + 1]], ee = [0.5 * ($[0] + Te[0]), 0.5 * ($[1] + Te[1])], he = [ee[0] - $[0], ee[1] - $[1]], ot = [ee[0] + he[1], ee[1] - he[0]], rt = [ee[0] - he[1], ee[1] + he[0]];
          g.push($), g.push(ot), g.push(Te), g.push(rt), g.push($);
        } else {
          if (_.types[P] !== ce.Regular) {
            ne.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");
            continue;
          }
          for (let $ = X; $ < _.vertexEndIndex[P]; $++) g.push([_.vertices[2 * $], _.vertices[2 * $ + 1]]);
        }
        const Y = d[m.get(q)]?.feature.attributes[S], le = d[m.get(Q)]?.feature.attributes[S];
        g[0][0] === Y.x && g[0][1] === Y.y || (g[0] = [Y.x, Y.y]), g[g.length - 1][0] === le.x && g[g.length - 1][1] === le.y || (g[g.length - 1] = [le.x, le.y]);
        for (let $ = 1; $ < g.length - 1; $++) g[$][1] > 85.5 ? g[$][1] = 85.5 : g[$][1] < -85.5 && (g[$][1] = -85.5), g[$][0] > 179.9999 ? g[$][0] = 179.9999 : g[$][0] < -179.9999 && (g[$][0] = -179.9999);
        E.has(G) ? E.get(G).push(g) : E.set(G, [g]);
      }
      const at = E.get(G);
      j.has(G) || (j.set(G, /* @__PURE__ */ new Map()), O.set(G, /* @__PURE__ */ new Map()));
      const ge = j.get(G), fe = O.get(G);
      ge.has(y.typeName) || (ge.set(y.typeName, at.shift()), fe.set(y.typeName, 0));
      const it = ge.get(y.typeName);
      fe.set(y.typeName, fe.get(y.typeName) + 1);
      const nt = new xe({ paths: it });
      if (y.feature.attributes[S] = nt, o.has(y.typeName))
        o.get(y.typeName)?.set(y.feature.attributes[x], y.feature);
      else {
        const Y = /* @__PURE__ */ new Map();
        Y.set(y.feature.attributes[x], y.feature), o.set(y.typeName, Y);
      }
      h.set(y.feature.attributes[x], y.feature);
      const st = V(y.feature.attributes[S]);
      this.relationshipLinkChartDiagramLookup.set(y.feature.attributes[x], y.feature.attributes[S] ? st : null), this.linkChartGeohashLookup.set(y.feature.attributes[x], "");
    }
    for (const l of n) l.feature.attributes[De] = O.get(l.feature.attributes[pe] + "-" + l.feature.attributes[de])?.get(l.typeName) ?? null;
    return this._currentLinkChartConfig = { layoutMode: e }, { nodes: s, links: o, idMap: h };
  }
  async applyNewLinkChartLayout(e = "RADIAL_TREE", i) {
    const t = [];
    await this.calculateLinkChartLayout(e, i), this.layers.forEach((a) => {
      t.push(a.refreshCachedQueryEngine());
    }), await Promise.all(t), this._refreshNamedTypes();
  }
  getCurrentNodeLocations() {
    const e = /* @__PURE__ */ new Map();
    return this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((i) => {
      i?.members?.forEach((t) => {
        const a = t.linkChartLocation;
        let n;
        const s = t.id;
        a && (n = "x" in a ? { x: a.x, y: a.y } : { x: a.coords[0], y: a.coords[1] }, e.set(s, new Oe({ x: n.x, y: n.y })));
      });
    }), e;
  }
  async synchronizeInclusionListWithCache() {
    return new Promise((e) => {
      this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((i, t) => {
        if (i.useAllData = !1, i.members && i.members.size > 0) {
          if (!this.dataManager.sublayerCaches.get(t)) return;
          const a = new Set(Array.from(this.dataManager.sublayerCaches.get(t).keys()));
          Array.from(i.members.keys()).filter((n) => !a.has(n)).forEach((n) => {
            i.members?.delete(n);
          });
        }
      }), e();
    });
  }
  async refreshLinkChartCache(e) {
    await this.dataManager.refreshCacheContent(e);
    const i = [];
    this.layers.forEach((t) => {
      i.push(t.refreshCachedQueryEngine());
    }), await Promise.all(i), this._refreshNamedTypes();
  }
  async _handleNewRecords(e) {
    const i = [];
    this.dataManager.addToLayer(e);
    for (const t of e) this.sublayerIdsCache.has(t.typeName) || (this.sublayerIdsCache.set(t.typeName, /* @__PURE__ */ new Set()), i.push(t.typeName)), this.sublayerIdsCache.get(t.typeName).add(t.id);
    for (const t of i) if (this._graphTypeLookup.has(t)) {
      const a = this._graphTypeLookup.get(t), n = "endPoints" in a ? "relationship" : "entity", s = new Ce({ objectType: a, parentCompositeLayer: this, graphType: n, title: t });
      n === "entity" ? this.dataManager.entityTypeNames.add(t) : this.dataManager.relationshipTypeNames.add(t), s.geometryType ? this.layers.push(s) : this.tables.push(s), this.dataManager.sublayerCaches.set(t, /* @__PURE__ */ new Map());
    }
    await this.dataManager.refreshCacheContent(e.map((t) => t.id)), await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode);
  }
  async _initializeDiagram() {
    this.defaultLinkChartConfig ? this.defaultLinkChartConfig.doNotRecalculateLayout ? (this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e, i) => {
      e?.members?.forEach((t) => {
        const a = t.linkChartLocation;
        let n;
        const s = t.id;
        if (!a) return;
        n = "x" in a ? { x: a.x, y: a.y } : { x: a.coords[0], y: a.coords[1] };
        const o = V(n);
        this.dataManager.relationshipTypeNames.has(i) ? this.relationshipLinkChartDiagramLookup.set(s, o) : this.entityLinkChartDiagramLookup.set(s, o), this.linkChartGeohashLookup.set(s, Z(n.x, n.y, K)), this.linkChartExtent.xmin > n.x && (this.linkChartExtent.xmin = n.x), this.linkChartExtent.xmax < n.x && (this.linkChartExtent.xmax = n.x), this.linkChartExtent.ymin > n.y && (this.linkChartExtent.ymin = n.y), this.linkChartExtent.ymax < n.y && (this.linkChartExtent.ymax = n.y);
      });
    }), this.memberRelationshipTypes.forEach((e) => {
      e.name && this.dataManager.sublayerCaches.get(e.name)?.forEach((i) => {
        const t = this.relationshipLinkChartDiagramLookup.get(i.attributes[pe]), a = this.relationshipLinkChartDiagramLookup.get(i.attributes[de]);
        if (t && a) {
          const n = V(new xe({ paths: [[t.coords[0], t.coords[1]], [a.coords[0], a.coords[1]]] }));
          this.relationshipLinkChartDiagramLookup.set(i.attributes[x], n);
        } else this.relationshipLinkChartDiagramLookup.set(i.attributes[x], null);
        this.linkChartGeohashLookup.set(i.attributes[x], "");
      });
    })) : await this.calculateLinkChartLayout(this.defaultLinkChartConfig.layoutMode, { lockedNodeLocations: this.getCurrentNodeLocations() }) : await this.calculateLinkChartLayout("RADIAL_TREE", { lockedNodeLocations: this.getCurrentNodeLocations() });
  }
  _refreshNamedTypes() {
    for (const e of this.layers) e.emit("refresh", { dataChanged: !0 });
    for (const e of this.tables) e.emit("refresh", { dataChanged: !0 });
  }
};
u([f()], F.prototype, "dataPreloadedInLocalCache", void 0), u([f()], F.prototype, "defaultLinkChartConfig", void 0), u([f()], F.prototype, "dataManager", void 0), u([f()], F.prototype, "knowledgeGraph", void 0), u([f()], F.prototype, "layers", void 0), u([f()], F.prototype, "entityLinkChartDiagramLookup", void 0), u([f()], F.prototype, "relationshipLinkChartDiagramLookup", void 0), u([f()], F.prototype, "linkChartExtent", void 0), u([f()], F.prototype, "linkChartGeohashLookup", void 0), u([f()], F.prototype, "memberEntityTypes", void 0), u([f()], F.prototype, "memberRelationshipTypes", void 0), u([f()], F.prototype, "sublayerIdsCache", void 0), u([f()], F.prototype, "tables", void 0), u([f({ json: { read: !1 } })], F.prototype, "type", void 0), F = u([me("esri.layers.LinkChartLayer")], F);
const Ht = F;
export {
  Ht as default
};
//# sourceMappingURL=LinkChartLayer-C5IfMU_l.js.map
