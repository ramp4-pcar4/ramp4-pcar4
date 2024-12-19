import { dk as fe, eV as ge, ds as ee, s as O, $ as Te, cr as x, O as a, P as l, Q as X, e2 as we, D as V, fn as q, dR as de, de as U, bp as K, b8 as Z, kw as te, b5 as ye, gL as be, gv as Ie, gw as Ee, e3 as De, gu as Ne, gx as Me, e7 as Se, e4 as Le, e8 as $e, kx as Re, dS as H, dT as A, gy as ke, X as W, bx as _e, gA as ve, U as Ce, b6 as xe, aa as $, ky as Oe, kz as je, kA as Ae, kB as qe, gC as Fe, gD as Ge, gE as Qe, eb as Pe, h0 as Ue, h1 as Je, gF as Be, kC as Ye, gG as Ve, W as He, gH as We, eH as ze, kD as Ke, eF as Ze, ei as Xe } from "./main-uCo5F72j.js";
import { m as et } from "./FeatureStore-Bww5OnPp.js";
import { $ as tt } from "./QueryEngine-DEIJSKY8.js";
import { l as nt, o as z } from "./clientSideDefaults-BD9eZqVs.js";
import { T as Q, r as ue } from "./knowledgeGraphService-DaJTlEJr.js";
import { s as F } from "./GraphQueryStreaming-C0t4ol_A.js";
const it = "ESRI__DESTINATION_ID", rt = "ESRI__ORIGIN_ID";
class C {
  constructor() {
    this._featureLookup = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    return C.instance || (C.instance = new C()), C.instance;
  }
  static resetInstance() {
    C.instance && (C.instance = null);
  }
  deleteFromStore(t) {
    t.forEach((i) => {
      this._featureLookup.delete(i);
    });
  }
  readFromStoreByList(t) {
    const i = [];
    return t.forEach((n) => {
      const s = this.readFromStoreById(n);
      s && i.push(s);
    }), i;
  }
  readFromStoreById(t) {
    return this._featureLookup.get(t) ?? null;
  }
  writeToStore(t, i, n) {
    const s = [];
    return t.forEach((r) => {
      if (!r?.id) return;
      r.properties || (r.properties = []);
      let p, y = null;
      if (n && r.properties[n] && (y = fe(r.properties[n])), "originId" in r && "destinationId" in r && (r.properties[rt] = r.originId, r.properties[it] = r.destinationId), r.properties[i] = r.id, r.id && this._featureLookup.has(r.id) && this._featureLookup.get(r.id).attributes) {
        const o = this._featureLookup.get(r.id), u = JSON.parse(JSON.stringify(Object.assign(o.attributes, r.properties)));
        n && r.properties[n] && (u[n] = ge(r.properties[n])), p = new ee(y ? JSON.parse(JSON.stringify(y)) : o?.geometry ? JSON.parse(JSON.stringify(o.geometry)) : null, u, null, r.properties[i]);
      } else p = new ee(y ? JSON.parse(JSON.stringify(y)) : null, r.properties, null, r.properties[i]);
      this._featureLookup.set(r.id, p), s.push(p);
    }), s;
  }
}
var B;
(function(e) {
  e.ELEMENTUID = "ELEMENTUID", e.TYPENAME = "TYPENAME";
})(B || (B = {}));
B.ELEMENTUID, B.TYPENAME;
var ne, ie;
(function(e) {
  e[e.ELEMENTUID = 0] = "ELEMENTUID", e[e.TYPENAME = 1] = "TYPENAME";
})(ne || (ne = {})), function(e) {
  e[e.ELEMENTUID = 0] = "ELEMENTUID", e[e.TYPENAME = 1] = "TYPENAME", e[e.FROMUID = 2] = "FROMUID", e[e.TOUID = 3] = "TOUID";
}(ie || (ie = {}));
var re, oe, se, Y;
(function(e) {
  e[e.featureResult = 0] = "featureResult", e[e.countResult = 1] = "countResult", e[e.idsResult = 2] = "idsResult";
})(re || (re = {})), function(e) {
  e[e.upperLeft = 0] = "upperLeft", e[e.lowerLeft = 1] = "lowerLeft";
}(oe || (oe = {})), function(e) {
  e[e.sqlTypeBigInt = 0] = "sqlTypeBigInt", e[e.sqlTypeBinary = 1] = "sqlTypeBinary", e[e.sqlTypeBit = 2] = "sqlTypeBit", e[e.sqlTypeChar = 3] = "sqlTypeChar", e[e.sqlTypeDate = 4] = "sqlTypeDate", e[e.sqlTypeDecimal = 5] = "sqlTypeDecimal", e[e.sqlTypeDouble = 6] = "sqlTypeDouble", e[e.sqlTypeFloat = 7] = "sqlTypeFloat", e[e.sqlTypeGeometry = 8] = "sqlTypeGeometry", e[e.sqlTypeGUID = 9] = "sqlTypeGUID", e[e.sqlTypeInteger = 10] = "sqlTypeInteger", e[e.sqlTypeLongNVarchar = 11] = "sqlTypeLongNVarchar", e[e.sqlTypeLongVarbinary = 12] = "sqlTypeLongVarbinary", e[e.sqlTypeLongVarchar = 13] = "sqlTypeLongVarchar", e[e.sqlTypeNChar = 14] = "sqlTypeNChar", e[e.sqlTypeNVarChar = 15] = "sqlTypeNVarChar", e[e.sqlTypeOther = 16] = "sqlTypeOther", e[e.sqlTypeReal = 17] = "sqlTypeReal", e[e.sqlTypeSmallInt = 18] = "sqlTypeSmallInt", e[e.sqlTypeSqlXml = 19] = "sqlTypeSqlXml", e[e.sqlTypeTime = 20] = "sqlTypeTime", e[e.sqlTypeTimestamp = 21] = "sqlTypeTimestamp", e[e.sqlTypeTimestamp2 = 22] = "sqlTypeTimestamp2", e[e.sqlTypeTinyInt = 23] = "sqlTypeTinyInt", e[e.sqlTypeVarbinary = 24] = "sqlTypeVarbinary", e[e.sqlTypeVarchar = 25] = "sqlTypeVarchar";
}(se || (se = {})), function(e) {
  e[e.OID_ARRAY = 0] = "OID_ARRAY", e[e.GLOBALID_ARRAY = 1] = "GLOBALID_ARRAY", e[e.STRING_ARRAY = 2] = "STRING_ARRAY", e[e.IDENTIFIER_ARRAY = 3] = "IDENTIFIER_ARRAY";
}(Y || (Y = {}));
function ot(e) {
  if (!e.spatialReference.isWGS84) throw new O("knowledge-graph:layer-support-utils", "The extentToInBoundsRings function only supports WGS84 spatial references.");
  return e.clone().normalize().map((t) => [[t.xmin, t.ymin], [t.xmin, t.ymax], [t.xmax, t.ymax], [t.xmax, t.ymin], [t.xmin, t.ymin]]);
}
async function Tt(e, t) {
  const i = [], n = /* @__PURE__ */ new Map(), s = [];
  if (t.dataModel?.relationshipTypes) for (const r of t.dataModel.relationshipTypes) r.name && n.set(r.name, []);
  for (const r of e) n.has(r.typeName) && n.get(r.typeName)?.push(r.id);
  for (const [r, p] of n) {
    if (p.length < 1) continue;
    const y = new F({ openCypherQuery: `MATCH (n)-[r:${r}]->(m) WHERE id(r) in $ids RETURN id(n), labels(n)[0], id(m), labels(m)[0]`, bindParameters: { ids: p } });
    s.push(Q(t, y).then(async (o) => {
      const u = o.resultRowsStream.getReader();
      for (; ; ) {
        const { done: D, value: M } = await u.read();
        if (D) break;
        for (const g of M) i.push({ id: g[0], typeName: g[1] }), i.push({ id: g[2], typeName: g[3] });
      }
    }));
  }
  return await Promise.all(s), i;
}
async function wt(e, t) {
  t ??= !1;
  const i = { generateAllSublayers: t, namedTypeDefinitions: /* @__PURE__ */ new Map() };
  return await at(e).then((n) => {
    lt(n, i);
  }), i;
}
async function bt(e) {
  const t = await ue(), i = new t.MapOfObjectIdentifierSets();
  st(i, t, e);
  const n = new t.MapOfObjectIdentifierSetsEncoder();
  try {
    n.set_map_of_identifier_sets(i), n.encode();
    const s = n.get_encoding_result();
    if (s.error.error_code !== 0) throw new O("knowledge-graph:layer-support-utils", s.error.error_message);
    const r = structuredClone(s.get_byte_buffer());
    return n.delete(), r;
  } finally {
    i.delete();
  }
}
function st(e, t, i) {
  for (const [n, s] of i.namedTypeDefinitions) {
    if (!s.members || s.useAllData) continue;
    const r = s.members.keys(), p = new t.GlobalIdArray(), y = new t.ObjectIdentifierSet();
    for (const o of r) p.add_globalid(o);
    y.set_globalid_array(p), p.delete(), e.put_identifier_set(n, y), y.delete();
  }
  return e;
}
async function at(e) {
  const t = await Te(e, { responseType: "array-buffer" }), i = await t.data;
  return pt(new Uint8Array(i));
}
async function pt(e) {
  const t = new (await ue()).MapOfObjectIdentifierSetsDecoder(), i = t.decode(new Uint8Array(e)), n = /* @__PURE__ */ new Map();
  if (i.error_code !== 0) throw new O("knowledge-graph:layer-support-utils", i.error_message);
  const s = t.get_map_of_identifier_sets(), r = s.keys, p = r.size();
  for (let y = 0; y < p; y++) {
    const o = r.get(y), u = s.query_identifier_set(o), D = [];
    if (u.id_array_type.value === Y.GLOBALID_ARRAY) {
      const M = u.get_globalid_array(), g = M.count();
      for (let I = 0; I < g; I++) D.push(M.get_globalid_at(I));
    } else {
      if (u.id_array_type.value !== Y.IDENTIFIER_ARRAY) throw new O("knowledge-graph:layer-support-utils", "Tried to encode an unexpected ID Array type.");
      {
        const M = u.get_identifier_array(), g = M.count();
        for (let I = 0; I < g; I++) D.push(M.get_identifier_at(I).toString());
      }
    }
    n.set(o, D);
  }
  return t.delete(), n;
}
function lt(e, t) {
  for (const [i, n] of e) {
    const s = x(t.namedTypeDefinitions, i, () => ({ useAllData: !1, members: /* @__PURE__ */ new Map() }));
    for (const r of n) s.members.has(r) || s.members.set(r, { id: r });
  }
  return t;
}
const _ = "ESRI__ID", It = "ESRI__ORIGIN_ID", Et = "ESRI__DESTINATION_ID", ce = "ESRI__LAYOUT_GEOMETRY", ae = "ESRI__AGGREGATION_COUNT";
let k = class extends we {
  constructor(e) {
    super(e), this._processingCacheUpdatesLookup = /* @__PURE__ */ new Map(), this.knowledgeGraph = null, this.inclusionModeDefinition = { generateAllSublayers: !0, namedTypeDefinitions: /* @__PURE__ */ new Map() }, this.entityTypeNames = /* @__PURE__ */ new Set(), this.relationshipTypeNames = /* @__PURE__ */ new Set(), this.geographicLookup = /* @__PURE__ */ new Map(), this.sublayerCaches = /* @__PURE__ */ new Map(), this.nodeConnectionsLookup = /* @__PURE__ */ new Map(), this.relationshipConnectionsLookup = /* @__PURE__ */ new Map(), this.memberIdTypeLookup = /* @__PURE__ */ new Map();
    const t = /* @__PURE__ */ new Map();
    e.knowledgeGraph.dataModel.entityTypes?.forEach((i) => {
      i.name && (t.set(i.name, "entity"), this._processingCacheUpdatesLookup.set(i.name, []), e.inclusionModeDefinition && !e.inclusionModeDefinition?.generateAllSublayers || this.entityTypeNames.add(i.name), i.properties?.forEach((n) => {
        n.geometryType && n.geometryType !== "esriGeometryNull" && this.geographicLookup.set(i.name, { name: n.name ?? "", geometryType: n.geometryType });
      }));
    }), e.knowledgeGraph.dataModel.relationshipTypes?.forEach((i) => {
      i.name && (t.set(i.name, "relationship"), this._processingCacheUpdatesLookup.set(i.name, []), e.inclusionModeDefinition && !e.inclusionModeDefinition?.generateAllSublayers || this.relationshipTypeNames.add(i.name), i.properties?.forEach((n) => {
        n.geometryType && n.geometryType !== "esriGeometryNull" && this.geographicLookup.set(i.name, { name: n.name ?? "", geometryType: n.geometryType });
      }));
    }), e.inclusionModeDefinition?.namedTypeDefinitions.forEach((i, n) => {
      if (t.get(n) === "entity") this.entityTypeNames.add(n);
      else {
        if (t.get(n) !== "relationship") return V.getLogger(this).warn(`A named type, ${n}, was in the inclusion list that wasn't in the data model and will be removed`), void e.inclusionModeDefinition?.namedTypeDefinitions.delete(n);
        this.relationshipTypeNames.add(n);
      }
      const s = /* @__PURE__ */ new Map();
      i.members?.forEach((r) => {
        x(this.memberIdTypeLookup, r.id, () => /* @__PURE__ */ new Set()).add(n);
        const p = this.getById(r.id);
        p && s.set(r.id, p);
      }), this.sublayerCaches.set(n, s);
    });
  }
  addToLayer(e) {
    e.forEach(({ typeName: t, id: i }) => {
      if (!this.inclusionModeDefinition) throw new O("knowledge-graph:layer-data-manager", "You cannot add to a layer's exclusion list if it was not created with an exclusion list originally");
      if (this.inclusionModeDefinition.namedTypeDefinitions.has(t)) {
        if (this.inclusionModeDefinition.namedTypeDefinitions.has(t)) {
          const n = this.inclusionModeDefinition.namedTypeDefinitions.get(t);
          n.members || (n.members = /* @__PURE__ */ new Map()), n.members.set(i, { id: i }), x(this.memberIdTypeLookup, i, () => /* @__PURE__ */ new Set()).add(t);
        }
      } else {
        const n = /* @__PURE__ */ new Map();
        n.set(i, { id: i }), this.inclusionModeDefinition.namedTypeDefinitions.set(t, { useAllData: !1, members: n }), x(this.memberIdTypeLookup, i, () => /* @__PURE__ */ new Set()).add(t);
      }
    });
  }
  getById(e) {
    return C.getInstance().readFromStoreById(e);
  }
  async getData(e, t, i) {
    if (t.objectType.name && this.inclusionModeDefinition?.namedTypeDefinitions && this.inclusionModeDefinition.namedTypeDefinitions.size > 0 && !this.inclusionModeDefinition.namedTypeDefinitions.has(t.objectType.name)) return [];
    let n;
    if (n = e || new q({ where: "1=1", outFields: ["*"] }), t.parentCompositeLayer.type === "link-chart") {
      const s = t.parentCompositeLayer, r = this._processingCacheUpdatesLookup.get(t.objectType.name ?? ""), p = n.outFields;
      p && p.length === 1 && p[0] === _ && n.where === "1=1" || await Promise.all(r ?? []);
      const y = this.sublayerCaches.has(t.objectType.name ?? "") ? Array.from(this.sublayerCaches.get(t.objectType.name)?.values()) : [], o = [];
      return y.forEach((u) => {
        this.relationshipTypeNames.has(t.objectType.name) ? u.geometry = s.relationshipLinkChartDiagramLookup.get(u.attributes[t.objectIdField]) : u.geometry = s.entityLinkChartDiagramLookup.get(u.attributes[t.objectIdField]), u.attributes[ce] = u.geometry, o.push(u);
      }), o;
    }
    return this.retrieveDataFromService(n, t, i);
  }
  async getConnectedRecordIds(e, t) {
    const i = [];
    let n = "";
    const s = [], r = /* @__PURE__ */ new Map();
    if (e.forEach((p) => {
      if (this.memberIdTypeLookup.has(p)) for (const y of this.memberIdTypeLookup.get(p)) {
        if (!this.entityTypeNames.has(y)) return;
        r.has(y) ? r.get(y)?.push(p) : r.set(y, [p]);
      }
    }), t && t?.length !== 0) {
      for (const p of t) n = n + p + "|";
      n = n.slice(0, -1);
    }
    return r.forEach((p, y) => {
      let o;
      o = t && t?.length !== 0 ? `MATCH (n:${y})-[r:${n}]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]` : `MATCH (n:${y})-[r]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]`;
      const u = new Promise((D) => {
        (async () => {
          const M = (await Q(this.knowledgeGraph, new F({ openCypherQuery: o, bindParameters: { ids: p } }))).resultRowsStream.getReader();
          try {
            for (; ; ) {
              const { done: g, value: I } = await M.read();
              if (g) break;
              for (let f = 0; f < I.length; f++) {
                const c = I[f];
                i.push({ id: c[0], typeName: c[1] }), i.push({ id: c[2], typeName: c[3] });
              }
            }
          } catch (g) {
            if (g.name !== "AbortError") throw g;
            V.getLogger(this).info("Request aborted as expected");
          }
        })().then(() => {
          D();
        });
      });
      s.push(u);
    }), this.refreshCacheContent(), await Promise.all(s), i;
  }
  async getAttachedRelationships(e, t) {
    const i = [], n = "MATCH (n)-[r]->(m) WHERE id(n) IN $nodeIds AND id(m) in $nodeIds AND NOT id(r) IN $relationshipExclusionIds return id(r), type(r)", s = (await Q(this.knowledgeGraph, new F({ openCypherQuery: n, bindParameters: { nodeIds: e, relationshipExclusionIds: t } }))).resultRowsStream.getReader();
    try {
      for (; ; ) {
        const { done: r, value: p } = await s.read();
        if (r) break;
        for (let y = 0; y < p.length; y++) {
          const o = p[y];
          i.push({ id: o[0], typeName: o[1] });
        }
      }
    } catch (r) {
      if (r.name !== "AbortError") throw r;
      V.getLogger(this).info("Request aborted as expected");
    }
    return i;
  }
  async refreshCacheContent(e, t, i, n = !0) {
    const s = C.getInstance(), r = [], p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
    this.knowledgeGraph.dataModel.entityTypes?.forEach((o) => {
      o.name && y.set(o.name, o);
    }), this.knowledgeGraph.dataModel.relationshipTypes?.forEach((o) => {
      o.name && y.set(o.name, o);
    }), e || this.inclusionModeDefinition ? e ? e.forEach((o) => {
      if (this.memberIdTypeLookup.has(o)) for (const u of this.memberIdTypeLookup.get(o)) p.has(u) ? p.get(u)?.push(o) : p.set(u, [o]);
    }) : this.inclusionModeDefinition?.namedTypeDefinitions?.forEach((o, u) => {
      o.useAllData ? p.set(u, null) : o.members && o.members.forEach((D) => {
        p.has(u) && p.get(u) !== null ? p.get(u)?.push(D.id) : p.set(u, [D.id]);
      });
    }) : (this.knowledgeGraph.dataModel.entityTypes?.forEach((o) => {
      o.name && p.set(o.name, null);
    }), this.knowledgeGraph.dataModel.entityTypes?.forEach((o) => {
      o.name && p.set(o.name, null);
    }));
    for (const [o, u] of p) {
      const D = new Promise((M) => {
        (async () => {
          const I = /* @__PURE__ */ new Set(), f = [];
          let c, N = "", E = !1;
          if (t || y.get(o)?.properties?.forEach((m) => {
            m.name && I.add(m.name);
          }), i && this.geographicLookup.has(o)) {
            const m = this.geographicLookup.get(o)?.name;
            m && I.add(m);
          }
          if (this.entityTypeNames.has(o)) N = `MATCH (n:${o}) ${u ? "WHERE id(n) IN $ids " : ""}return ID(n)`, I.forEach((m) => {
            N += `, n.${m}`, f.push(m);
          });
          else {
            if (!this.relationshipTypeNames.has(o)) throw new O("knowledge-graph:layer-data-manager", `The graph type of ${o} could not be determined. Was this type set in the KG data model and inclusion definition?`);
            E = !0, N = `MATCH ()-[n:${o}]->() ${u ? "WHERE id(n) IN $ids " : ""}return ID(n), id(startNode(n)), id(endNode(n))`, I.forEach((m) => {
              N += `, n.${m}`, f.push(m);
            });
          }
          c = new F(u ? { openCypherQuery: N, bindParameters: { ids: u } } : { openCypherQuery: N });
          const S = (await Q(this.knowledgeGraph, c)).resultRowsStream.getReader();
          for (; ; ) {
            const { done: m, value: b } = await S.read();
            if (m) break;
            const T = [];
            for (let w = 0; w < b.length; w++) {
              const G = b[w];
              let v = 0, J = 0;
              const L = { properties: {} };
              for (L.id = G[v], v++, J++, E && (L.originId = G[v], v++, J++, L.destinationId = G[v], v++, J++, x(this.nodeConnectionsLookup, L.originId, () => /* @__PURE__ */ new Set()).add(L.id), x(this.nodeConnectionsLookup, L.destinationId, () => /* @__PURE__ */ new Set()).add(L.id), x(this.relationshipConnectionsLookup, L.id, () => [L.originId, L.destinationId])); v < G.length; v++) L.properties[f[v - J]] = G[v];
              T.push(L);
            }
            const h = s.writeToStore(T, _, this.geographicLookup.get(o)?.name);
            this.sublayerCaches.has(o) || this.sublayerCaches.set(o, /* @__PURE__ */ new Map()), n && !this.inclusionModeDefinition?.namedTypeDefinitions.has(o) && this.inclusionModeDefinition?.namedTypeDefinitions.set(o, { useAllData: !1, members: /* @__PURE__ */ new Map() }), n && !this.inclusionModeDefinition?.namedTypeDefinitions.get(o).members && (this.inclusionModeDefinition.namedTypeDefinitions.get(o).members = /* @__PURE__ */ new Map());
            const j = this.sublayerCaches.get(o);
            h.forEach((w) => {
              j?.set(w.attributes[_], w), n && !this.inclusionModeDefinition?.namedTypeDefinitions.get(o).members.has(w.attributes[_]) && (this.inclusionModeDefinition?.namedTypeDefinitions.get(o).members.set(w.attributes[_], { id: w.attributes[_] }), x(this.memberIdTypeLookup, w.attributes[_], () => /* @__PURE__ */ new Set()).add(o));
            });
          }
        })().then(() => {
          M(null);
        });
      });
      r.push(D), this._processingCacheUpdatesLookup.get(o)?.push(D);
    }
    await Promise.all(r);
  }
  removeFromLayer(e) {
    const t = /* @__PURE__ */ new Set(), i = new Set(e.map((n) => n.id));
    for (const n of e) t.add(n.typeName), this.memberIdTypeLookup.get(n.id)?.size === 1 ? this.memberIdTypeLookup.delete(n.id) : this.memberIdTypeLookup.get(n.id)?.delete(n.typeName), this.inclusionModeDefinition?.namedTypeDefinitions.forEach((s, r) => {
      r === n.typeName && s.members?.has(n.id) && s.members.delete(n.id);
    });
    t.forEach((n) => {
      this.sublayerCaches.get(n)?.forEach((s, r) => {
        i.has(r) && this.sublayerCaches.get(n)?.delete(r);
      });
    });
  }
  async retrieveDataFromService(e, t, i) {
    const n = C.getInstance(), s = /* @__PURE__ */ new Set(), r = [];
    let p, y = "", o = [];
    const u = t.graphType === "relationship", D = this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData, M = t.parentCompositeLayer.sublayerIdsCache.get(t.objectType.name);
    let g = !D && M ? Array.from(M).sort() : null;
    if (this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData) this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData && e.objectIds != null && (g = e.objectIds);
    else if (e.objectIds != null && g && g.length > 0) {
      const f = e.objectIds;
      e.objectIds = g.filter((c) => f.includes(c));
    } else if (e.objectIds != null) g = e.objectIds;
    else {
      if (this.inclusionModeDefinition?.namedTypeDefinitions.has(t.objectType.name) && (!this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members || this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members?.size < 1)) return e.objectIds = [], [];
      e.objectIds = g;
    }
    if (e.outFields != null) {
      const f = e.outFields;
      f.includes("*") ? t.fields.forEach((c) => {
        s.add(c.name);
      }) : f.forEach((c) => {
        c !== _ && c !== t.geometryFieldName && s.add(c);
      });
    }
    if (e.geometry != null) {
      const f = e.geometry;
      let c;
      const N = t.parentCompositeLayer.dataManager.knowledgeGraph.serviceDefinition, E = N?.spatialReference, S = N?.serviceCapabilities?.geometryCapabilities;
      let m = S?.geometryMaxBoundingRectangleSizeX, b = S?.geometryMaxBoundingRectangleSizeY;
      if (f?.extent?.spatialReference && !f.spatialReference?.isWGS84 ? (await de(f.extent.spatialReference, U), c = K(f.extent, U)) : c = f.extent, m && b && E) {
        if (E.wkid !== 4326) {
          const T = new Z({ spatialReference: E, xmax: m, ymax: b }), h = K(T, U);
          m = h.xmax, b = h.ymax;
        }
        if (c.xmax - c.xmin > m) throw new O("knowledge-graph:layer-data-manager", `Extent x bounds should be within ${m}° latitude, limit exceeded`);
        if (c.ymax - c.ymin > b) throw new O("knowledge-graph:layer-data-manager", `Extent y bounds should be within ${b}° longitude, limit exceeded`);
      }
      if (e.where != null && e.where !== "1=1") {
        const T = await te(e.where.toUpperCase(), t.fieldsIndex);
        t.fields.forEach((h) => {
          T.fieldNames.includes(h.name) && s.add(h.name);
        });
      }
      y = u ? `Match ()-[n:${t.objectType.name}]->() WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n), id(startNode(r)), id(endNode(r))` : `Match (n:${t.objectType.name}) WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n)`, t.geometryFieldName && s.add(t.geometryFieldName), s.forEach((T) => {
        y += `, n.${T}`, r.push(T);
      }), p = new F({ openCypherQuery: y, bindParameters: { param_filter_geom: new ye({ rings: ot(c) }) } });
    } else {
      let f = "";
      if (e.where != null && e.where !== "1=1") {
        const E = await te(e.where, t.fieldsIndex);
        t.fields.forEach((h) => {
          E.fieldNames.includes(h.name) && s.add(h.name);
        });
        const S = /* @__PURE__ */ new Set(["column-reference", "string", "number", "binary-expression"]), m = /* @__PURE__ */ new Set(["=", "<", "<=", "<>", ">", ">=", "AND", "OR", "LIKE"]);
        let b = !1;
        const T = (h) => {
          if (h.type === "column-reference") return `n.${h.column}`;
          if (h.type === "string") return `'${h.value}'`;
          if (h.type === "number") return `${h.value}`;
          if (h.type === "binary-expression" && S.has(h.left.type) && S.has(h.right.type) && m.has(h.operator)) return `${T(h.left)} ${h.operator} ${T(h.right)}`;
          if (h.type === "binary-expression" && h.operator === "LIKE") {
            let j = "";
            if (h.left.type === "function" && h.left.args.value[0].type === "column-reference") j += `lower(n.${h.left.args.value[0].column})`;
            else {
              if (h.left.type !== "column-reference") return b = !0, "";
              j += `lower(n.${h.left.column})`;
            }
            if (j += " CONTAINS (", h.right.type !== "string") return b = !0, "";
            {
              let w = h.right.value;
              w.charAt(0) === "%" && (w = w.slice(1)), w.charAt(w.length - 1) === "%" && (w = w.slice(0, -1)), j += `'${w.toLowerCase()}')`;
            }
            return j;
          }
          return b = !0, "";
        };
        f = T(E.parseTree), b && (f = "");
      }
      let c = "";
      c = u ? `Match ()-[n:${t.objectType.name}]->()` : `Match (n:${t.objectType.name})`;
      let N = !1;
      g && (N = !0, c += " WHERE ID(n) IN $ids"), f && (c += N ? " AND" : " WHERE", c += ` ${f}`), c += " return ID(n)", u && (c += ", id(startNode(n)), id(endNode(n))"), e.returnGeometry && t.geometryFieldName && s.add(t.geometryFieldName), s.forEach((E) => {
        c += `, n.${E}`, r.push(E);
      }), p = new F(g ? { openCypherQuery: c, bindParameters: { ids: g } } : { openCypherQuery: c });
    }
    const I = (await Q(t.parentCompositeLayer.dataManager.knowledgeGraph, p, i)).resultRowsStream.getReader();
    for (; ; ) {
      const { done: f, value: c } = await I.read();
      if (f) break;
      const N = [];
      for (let E = 0; E < c.length; E++) {
        const S = c[E];
        let m = 0, b = 0;
        const T = { properties: {} };
        for (T.id = S[m], m++, b++, u && (T.originId = S[m], m++, b++, T.destinationId = S[m], m++, b++); m < S.length; m++) T.properties[r[m - b]] = S[m];
        N.push(T);
      }
      o = o.concat(n.writeToStore(N, _, t.parentCompositeLayer.dataManager.geographicLookup.get(t.objectType.name)?.name));
    }
    return o;
  }
};
a([l()], k.prototype, "knowledgeGraph", void 0), a([l()], k.prototype, "inclusionModeDefinition", void 0), a([l()], k.prototype, "entityTypeNames", void 0), a([l()], k.prototype, "relationshipTypeNames", void 0), a([l()], k.prototype, "geographicLookup", void 0), a([l()], k.prototype, "sublayerCaches", void 0), a([l()], k.prototype, "nodeConnectionsLookup", void 0), a([l()], k.prototype, "relationshipConnectionsLookup", void 0), a([l()], k.prototype, "memberIdTypeLookup", void 0), k = a([X("esri.layers.knowledgeGraph.KnowledgeGraphLayerDataManager")], k);
const pe = be(), dt = (e) => {
  let t = class extends e {
    constructor() {
      super(...arguments), this.fields = [], this.fieldsIndex = null;
    }
  };
  return a([l(pe.fields)], t.prototype, "fields", void 0), a([l(pe.fieldsIndex)], t.prototype, "fieldsIndex", void 0), t = a([X("esri.layers.knowledgeGraph.KnowledgeGraphSublayerBase")], t), t;
};
function R(e) {
  if (!e.json) return e;
  e.json.write = le(e.json.write);
  const t = e.json.origins;
  if (!t) return e;
  let i;
  for (i in t) {
    const n = t[i];
    n && (n.write = le(n.write));
  }
  return e;
}
function le(e) {
  return typeof e == "object" && e ? (e.enabled !== !1 && (e.overridePolicy = yt(e)), e) : e === !0 ? P() : e;
}
function yt(e) {
  const { target: t, writer: i, overridePolicy: n, ...s } = e;
  return function(r, p) {
    const y = he.call(this, r, p);
    return y.enabled ? { ...s, ...y } : y;
  };
}
function P() {
  return { overridePolicy: he };
}
function he(e, t) {
  const i = !!this.geometryType;
  let n = { enabled: i };
  return i && (n = { ...n, ...me.call(this, e, t) }), n;
}
function me(e, t) {
  return { ignoreOrigin: this.originIdOf(t) > Ze.DEFAULTS };
}
let d = class extends dt(Ie(Ee(De(Ne(Me(Se(Le($e(Xe))))))))) {
  constructor(e) {
    super(e), this.blendMode = "normal", this.capabilities = nt(!1, !1), this.charts = null, this.definitionExpression = null, this.displayField = "", this.effect = null, this.elevationInfo = null, this.featureEffect = null, this.graphType = null, this.labelsVisible = !0, this.labelingInfo = null, this.layerType = null, this.legendEnabled = !0, this.maxScale = 0, this.minScale = 0, this.objectIdField = _, this.objectType = null, this.opacity = 1, this.orderBy = null, this.parentCompositeLayer = null, this.persistenceEnabled = !0, this.popupEnabled = !0, this.popupTemplate = null, this.refreshInterval = 0, this.source = { openPorts: () => this.load().then(() => {
      const t = new MessageChannel();
      return new Re(t.port1, { channel: t, client: { queryFeatures: (i, n = {}) => {
        const s = q.fromJSON(i);
        return this.queryFeaturesJSON(s, n);
      } } }), [t.port2];
    }) }, this.title = null, this.type = "knowledge-graph-sublayer", this.useViewTime = !0, this.visible = !0;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set featureReduction(e) {
    const t = this._normalizeFeatureReduction(e);
    this._set("featureReduction", t);
  }
  get fields() {
    const e = [];
    return this.objectType?.properties?.forEach((t) => {
      const i = t.fieldType === "esriFieldTypeOID" ? "esriFieldTypeInteger" : t.fieldType;
      e.push(H.fromJSON({ name: t.name, type: i, alias: t.alias, defaultValue: t.defaultValue, editable: t.editable, nullable: t.nullable }));
    }), e.push(H.fromJSON({ name: this.objectIdField, type: "esriFieldTypeString", alias: this.objectIdField, editable: !1 }), H.fromJSON({ name: ae, type: "esriFieldTypeInteger", alias: ae, editable: !1 })), e;
  }
  get geometryType() {
    if (this.parentCompositeLayer?.type === "link-chart") return this.graphType === "relationship" ? "polyline" : "point";
    const e = this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name), t = e?.geometryType;
    return t && t !== "esriGeometryNull" ? A.fromJSON(t) : null;
  }
  get geometryFieldName() {
    return this.parentCompositeLayer?.type === "link-chart" ? ce : this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name)?.name ?? null;
  }
  get graphTypeName() {
    return this.objectType?.name;
  }
  get hasM() {
    const e = this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name), t = e?.name;
    return (t ? this.objectType?.properties?.[t] : null)?.hasM ?? !1;
  }
  get hasZ() {
    const e = this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name), t = e?.name;
    return (t ? this.objectType?.properties?.[t] : null)?.hasZ ?? !1;
  }
  set renderer(e) {
    ke(e, this.fieldsIndex), this._set("renderer", e);
  }
  get renderer() {
    return this._isOverridden("renderer") ? this._get("renderer") : this.parentCompositeLayer?.type === "link-chart" ? this.graphType === "relationship" ? W(z(A.toJSON("polyline")).renderer) : W(z(A.toJSON("point")).renderer) : W(z(A.toJSON(this.geometryType)).renderer);
  }
  get spatialReference() {
    return this.parentCompositeLayer?.dataManager?.knowledgeGraph?.dataModel?.spatialReference ?? _e.WGS84;
  }
  writeTitle(e, t) {
    t.title = e ?? "Layer";
  }
  createPopupTemplate(e) {
    return ve(this, e);
  }
  createQuery() {
    return new q({ where: "1=1", outFields: ["*"] });
  }
  getField(e) {
    for (let t = 0; t < this.fields.length; t++) if (this.fields[t].name === e) return this.fields[t];
    return null;
  }
  getFieldDomain(e, t) {
    return null;
  }
  async queryFeatures(e, t) {
    const { resolvedQuery: i, queryEngine: n } = await this._setupQueryObjects(e), s = Ce.fromJSON(await n.executeQuery(i.toJSON(), t?.signal));
    return s.features.forEach((r) => {
      r.sourceLayer = this;
    }), s;
  }
  async queryFeaturesJSON(e, t) {
    const { resolvedQuery: i, queryEngine: n } = await this._setupQueryObjects(e);
    return await n.executeQuery(i.toJSON(), t?.signal);
  }
  async queryFeatureCount(e, t) {
    const { resolvedQuery: i, queryEngine: n } = await this._setupQueryObjects(e);
    return n.executeQueryForCount(i.toJSON(), t?.signal);
  }
  async queryExtent(e = {}, t) {
    const i = { ...e, returnGeometry: !0 }, { resolvedQuery: n, queryEngine: s } = await this._setupQueryObjects(i), r = await s.executeQueryForExtent(n.toJSON(), t?.signal);
    let p;
    return p = r.extent?.xmin != null && r.extent?.xmax != null && r.extent?.ymin != null && r.extent?.ymax != null ? new Z(r.extent) : new Z(), { count: r.count, extent: p };
  }
  async queryObjectIds(e, t) {
    const i = q.from(e);
    let n;
    if (this.parentCompositeLayer.type === "link-chart" && this._cachedQueryEngine) n = this._cachedQueryEngine;
    else {
      const s = await this.parentCompositeLayer.dataManager.getData(i, this, t);
      n = this.loadQueryEngine(s);
    }
    return n.executeQueryForIds(i.toJSON(), t?.signal);
  }
  loadQueryEngine(e) {
    const t = new et({ geometryType: A.toJSON(this.geometryType), hasM: this.hasM, hasZ: this.hasZ }), i = new tt({ fieldsIndex: this.fieldsIndex.toJSON(), geometryType: A.toJSON(this.geometryType), hasM: this.hasM, hasZ: this.hasZ, objectIdField: this.objectIdField, spatialReference: this.spatialReference.toJSON(), timeInfo: null, featureStore: t });
    return i.featureStore.addMany(e), i;
  }
  async refreshCachedQueryEngine() {
    const e = await this.parentCompositeLayer.dataManager.getData(new q({ where: "1=1", outFields: [_] }), this);
    this._cachedQueryEngine = this.loadQueryEngine(e);
  }
  async _setupQueryObjects(e, t) {
    const i = q.from(e), n = i.geometry;
    let s;
    if (n && !n.spatialReference?.isWGS84 && (await de(n.spatialReference, U), i.geometry = K(n instanceof ye || n instanceof xe ? n : n.extent, U)), this.parentCompositeLayer.type === "link-chart" && this._cachedQueryEngine) s = this._cachedQueryEngine;
    else {
      const r = await this.parentCompositeLayer.dataManager.getData(i, this, t);
      s = this.loadQueryEngine(r);
    }
    return { resolvedQuery: i, queryEngine: s };
  }
};
a([l(R($(Oe)))], d.prototype, "blendMode", void 0), a([l()], d.prototype, "capabilities", void 0), a([l({ json: { origins: { "web-scene": { write: !1 } }, write: P() } })], d.prototype, "charts", void 0), a([l({ readOnly: !0 })], d.prototype, "defaultPopupTemplate", null), a([l({ type: String, json: { origins: { service: { read: !1 } }, name: "layerDefinition.definitionExpression", write: { ignoreOrigin: !0 } } })], d.prototype, "definitionExpression", void 0), a([l()], d.prototype, "displayField", void 0), a([l(R($(je)))], d.prototype, "effect", void 0), a([l()], d.prototype, "elevationInfo", void 0), a([l(R($(Ae)))], d.prototype, "featureEffect", void 0), a([l(R($(qe)))], d.prototype, "featureReduction", null), a([l()], d.prototype, "fields", null), a([l()], d.prototype, "geometryType", null), a([l()], d.prototype, "geometryFieldName", null), a([l({ type: ["entity", "relationship"], nonNullable: !0, json: { write: { isRequired: !0, ignoreOrigin: !0 } } })], d.prototype, "graphType", void 0), a([l({ type: String, nonNullable: !0, json: { write: { isRequired: !0, ignoreOrigin: !0 } } })], d.prototype, "graphTypeName", null), a([l()], d.prototype, "hasM", null), a([l()], d.prototype, "hasZ", null), a([l({ type: String, json: { origins: { service: { read: !1 }, "portal-item": { read: !1 } }, write: { ignoreOrigin: !0 } } })], d.prototype, "id", void 0), a([l(R($(Fe)))], d.prototype, "labelsVisible", void 0), a([l({ type: [Ge], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: Qe, write: P() } })], d.prototype, "labelingInfo", void 0), a([l({ readOnly: !0, json: { read: !1, write: { writer(e, t) {
  t.layerType = this.geometryType ? "KnowledgeGraphSubLayer" : "KnowledgeGraphSubTable";
}, isRequired: !0, ignoreOrigin: !0, writerEnsuresNonNull: !0 } } })], d.prototype, "layerType", void 0), a([l(R($(Pe)))], d.prototype, "legendEnabled", void 0), a([l(R($(Ue)))], d.prototype, "maxScale", void 0), a([l(R($(Je)))], d.prototype, "minScale", void 0), a([l()], d.prototype, "objectIdField", void 0), a([l()], d.prototype, "objectType", void 0), a([l(R($(Be)))], d.prototype, "opacity", void 0), a([l(R($(Ye)))], d.prototype, "orderBy", void 0), a([l()], d.prototype, "parentCompositeLayer", void 0), a([l(R($(Ve)))], d.prototype, "popupEnabled", void 0), a([l({ type: He, json: { name: "popupInfo", write: { ignoreOrigin: !0 } } })], d.prototype, "popupTemplate", void 0), a([l({ type: Number, json: { write: { overridePolicy: me } } })], d.prototype, "refreshInterval", void 0), a([l({ types: We, json: { name: "layerDefinition.drawingInfo.renderer", write: P() } })], d.prototype, "renderer", null), a([l()], d.prototype, "source", void 0), a([l()], d.prototype, "spatialReference", null), a([l({ type: String, json: { write: { isRequired: !0, ignoreOrigin: !0, writerEnsuresNonNull: !0 } } })], d.prototype, "title", void 0), a([ze("title")], d.prototype, "writeTitle", null), a([l({ json: { read: !1 } })], d.prototype, "type", void 0), a([l(R($(Ke)))], d.prototype, "useViewTime", void 0), a([l({ type: Boolean, json: { name: "visibility", write: P() } })], d.prototype, "visible", void 0), d = a([X("esri.layers.knowledgeGraph.KnowledgeGraphSublayer")], d);
const Dt = d;
export {
  ce as D,
  bt as E,
  ae as I,
  k as M,
  wt as T,
  Dt as a,
  It as b,
  Et as c,
  Tt as h,
  _ as w
};
//# sourceMappingURL=KnowledgeGraphSublayer-Be3pQY8z.js.map
