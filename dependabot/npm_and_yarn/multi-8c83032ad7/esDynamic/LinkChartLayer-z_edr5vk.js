import { fq as _e, e3 as Pe, e7 as Ge, V as fe, b8 as me, s as ee, D as O, dt as Le, dk as q, dK as Se, cr as He, a3 as Ce, b6 as ke, O as v, P as A, Q as Oe, ei as $e } from "./main-C4pF0E7B.js";
import { M as Be, h as Fe, a as le, w as I, b as te, c as ae, D as E, I as Ue } from "./KnowledgeGraphSublayer-CGLRrNzi.js";
import { R as ze } from "./knowledgeGraphService-UkCbm0re.js";
var ie;
(function(e) {
  e.MULTIPLIER = "multiplier", e.ABSOLUTE = "absoluteValue";
})(ie || (ie = {}));
let he, p = null;
function Qe() {
  return he || (he = import("./lclayout-DIN63mDX.js").then((e) => e.l).then(({ default: e }) => e({ locateFile: (a) => _e(`esri/libs/linkchartlayout/${a}`) })).then((e) => {
    je(e);
  }), he);
}
function je(e) {
  p = e;
}
var $, ne;
function j(e, a, s, t, i, n) {
  const o = s.length, c = i.length, g = Float64Array.BYTES_PER_ELEMENT, m = Uint32Array.BYTES_PER_ELEMENT, f = Uint8Array.BYTES_PER_ELEMENT, y = 16, D = y + o * (f + 2 * g) + c * (2 * m), x = p._malloc(D);
  try {
    const h = x + y - x % y, k = h + o * g, L = k + o * g, b = L + c * m, _ = b + c * m, d = () => [p.HEAPF64.subarray(h >> 3, (h >> 3) + o), p.HEAPF64.subarray(k >> 3, (k >> 3) + o), p.HEAPU32.subarray(L >> 2, (L >> 2) + c), p.HEAPU32.subarray(b >> 2, (b >> 2) + c), p.HEAPU8.subarray(_, _ + o)], [R, U, B, z, F] = d();
    R.set(s), U.set(t), B.set(i), z.set(n), F.set(a);
    let S = e(o, _, h, k, c, L, b), M = null, P = null;
    if (S) {
      const l = p.getLayoutLinksTypes(), N = p.getLayoutLinksVerticesEndIndices(), H = p.getLayoutLinksVertices(), w = p.countLayoutLinksVertices();
      !c || l && N ? w && !H ? S = !1 : (M = { types: new Uint8Array(p.HEAPU8.subarray(l, l + c)), vertexEndIndex: new Uint32Array(p.HEAPU32.subarray(N >> 2, (N >> 2) + c)), vertices: new Float64Array(p.HEAPF64.subarray(H >> 3, (H >> 3) + 2 * w)) }, P = p.getAuxiliaryGraphicElements()) : S = !1;
    }
    const [K, W, J, r, u] = d();
    return s.set(K), t.set(W), i.set(J), n.set(r), a.set(u), { success: S, links: M, graphics: P };
  } finally {
    p._free(x), p.cleanupLayout();
  }
}
(function(e) {
  e[e.None = 0] = "None", e[e.IsMovable = 1] = "IsMovable", e[e.IsGeographic = 2] = "IsGeographic", e[e.IsRoot = 4] = "IsRoot";
})($ || ($ = {})), function(e) {
  e[e.Regular = 0] = "Regular", e[e.Orthogonal = 1] = "Orthogonal", e[e.Curved = 2] = "Curved", e[e.Recursive = 3] = "Recursive";
}(ne || (ne = {}));
const Me = 2, be = 1, we = -1;
var ue, de, ce, pe, ye, ge, Ee, Te, De;
(function(e) {
  function a() {
    return p.getMinIdealEdgeLength();
  }
  function s(t, i, n, o, c, g = Me, m = be, f = we) {
    return j((y, D, x, h, k, L, b) => p.applyForceDirectedLayout(y, D, x, h, k, L, b, g, m, f), t, i, n, o, c);
  }
  e.getMinIdealEdgeLength = a, e.apply = s;
})(ue || (ue = {})), function(e) {
  function a(s, t, i, n, o, c = Me, g = be, m = we) {
    return j((f, y, D, x, h, k, L) => p.applyCommunityLayout(f, y, D, x, h, k, L, c, g, m), s, t, i, n, o);
  }
  e.apply = a;
}(de || (de = {})), function(e) {
  function a(s, t, i, n, o) {
    return j(p.applySimpleLayout, s, t, i, n, o);
  }
  e.apply = a;
}(ce || (ce = {})), function(e) {
  function a(s, t, i, n, o) {
    return j(p.applyHierarchicalLayout, s, t, i, n, o);
  }
  e.apply = a;
}(pe || (pe = {})), function(e) {
  function a(s, t, i, n, o) {
    return j(p.applyRadialTreeLayout, s, t, i, n, o);
  }
  e.apply = a;
}(ye || (ye = {})), function(e) {
  function a(s, t, i, n, o) {
    return j(p.applySmartTreeLayout, s, t, i, n, o);
  }
  e.apply = a;
}(ge || (ge = {})), function(e) {
  function a(s, t, i, n, o, c, g, m, f) {
    return j((y, D, x, h, k, L, b) => {
      if (n.length !== y || o.length !== y || m.length !== k || f.length !== k) return !1;
      const _ = Float64Array.BYTES_PER_ELEMENT, d = 16, R = p._malloc(d + y * _), U = p._malloc(d + y * _), B = p._malloc(d + k * _), z = p._malloc(d + k * _), F = R + d - R % d, S = U + d - U % d, M = B + d - B % d, P = z + d - z % d;
      try {
        return p.HEAPF64.subarray(F >> 3, (F >> 3) + y).set(n), p.HEAPF64.subarray(S >> 3, (S >> 3) + y).set(o), p.HEAPF64.subarray(M >> 3, (M >> 3) + k).set(m), p.HEAPF64.subarray(P >> 3, (P >> 3) + k).set(f), p.applyChronologicalLayout(y, D, x, h, F, S, k, L, b, M, P);
      } finally {
        p._free(R), p._free(U), p._free(B), p._free(z);
      }
    }, s, t, i, c, g);
  }
  e.apply = a;
}(Ee || (Ee = {})), function(e) {
  e[e.Undirected = 0] = "Undirected", e[e.Directed = 1] = "Directed", e[e.Reversed = 2] = "Reversed";
}(Te || (Te = {})), function(e) {
  e[e.ByCC_Raw = 0] = "ByCC_Raw", e[e.ByCC_NormalizeGlobally = 1] = "ByCC_NormalizeGlobally", e[e.ByCC_NormalizeByCC = 2] = "ByCC_NormalizeByCC";
}(De || (De = {}));
let T = class extends Pe(Ge($e)) {
  constructor(e) {
    if (super(e), this.dataPreloadedInLocalCache = !1, this.defaultLinkChartConfig = null, this._currentLinkChartConfig = { layoutMode: "RADIAL_TREE" }, this._graphTypeLookup = /* @__PURE__ */ new Map(), this.dataManager = null, this.knowledgeGraph = null, this.layers = new fe(), this.entityLinkChartDiagramLookup = /* @__PURE__ */ new Map(), this.relationshipLinkChartDiagramLookup = /* @__PURE__ */ new Map(), this.linkChartExtent = new me({ xmin: -1e-7, ymin: -1e-7, xmax: 1e-7, ymax: 1e-7 }), this.memberEntityTypes = null, this.memberRelationshipTypes = null, this.sublayerIdsCache = /* @__PURE__ */ new Map(), this.tables = new fe(), this.type = "link-chart", this._originalInclusionList = e.inclusionModeDefinition, e.dataPreloadedInLocalCache && !e.inclusionModeDefinition) throw new ee("knowledge-graph:linkchart-layer-constructor", "If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");
  }
  normalizeCtorArgs(e) {
    return { url: e.url, title: e.title, dataPreloadedInLocalCache: e.dataPreloadedInLocalCache, defaultLinkChartConfig: e.defaultLinkChartConfig };
  }
  _initializeLayerProperties(e) {
    if (!this.title && this.url) {
      const n = this.url.split("/");
      this.title = n[n.length - 2];
    }
    const a = /* @__PURE__ */ new Set();
    let s = [], t = [];
    if (e.inclusionModeDefinition && (!e.inclusionModeDefinition.namedTypeDefinitions || e.inclusionModeDefinition.namedTypeDefinitions.size < 1)) throw new ee("knowledge-graph:composite-layer-constructor", "If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");
    e.knowledgeGraph.dataModel.entityTypes?.forEach((n) => {
      n.name && this._graphTypeLookup.set(n.name, n);
    }), e.knowledgeGraph.dataModel.relationshipTypes?.forEach((n) => {
      n.name && this._graphTypeLookup.set(n.name, n);
    }), e.inclusionModeDefinition?.generateAllSublayers ? (s = e.knowledgeGraph.dataModel.entityTypes ?? [], t = e.knowledgeGraph.dataModel.relationshipTypes ?? []) : e.inclusionModeDefinition?.namedTypeDefinitions && e.inclusionModeDefinition?.namedTypeDefinitions.size > 0 ? e.inclusionModeDefinition?.namedTypeDefinitions.forEach((n, o) => {
      const c = this._graphTypeLookup.get(o);
      if (!c) return O.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't in the data model and will be removed`), void e.inclusionModeDefinition?.namedTypeDefinitions.delete(o);
      c.type === "relationship" ? a.has(o) || (a.add(o), t.push(c)) : c.type === "entity" ? a.has(o) || (a.add(o), s.push(c)) : (O.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't properly modeled and will be removed`), e.inclusionModeDefinition?.namedTypeDefinitions.delete(o));
    }) : (s = e.knowledgeGraph.dataModel.entityTypes ?? [], t = e.knowledgeGraph.dataModel.relationshipTypes ?? []);
    const i = new Be({ knowledgeGraph: e.knowledgeGraph, inclusionModeDefinition: e.inclusionModeDefinition });
    this.knowledgeGraph = e.knowledgeGraph, this.memberEntityTypes = s, this.memberRelationshipTypes = t, this.dataManager = i;
  }
  load(e) {
    return this.addResolvingPromise(new Promise((a) => {
      ze(this.url).then((s) => {
        if (this._initializeLayerProperties({ knowledgeGraph: s, inclusionModeDefinition: this._originalInclusionList }), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size || (this.dataManager.inclusionModeDefinition = { generateAllSublayers: !1, namedTypeDefinitions: /* @__PURE__ */ new Map() }, this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach((t) => {
          t.name && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(t.name, { useAllData: !0 });
        }), this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach((t) => {
          t.name && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(t.name, { useAllData: !0 });
        })), this.dataPreloadedInLocalCache) this.loadLayerAssumingLocalCache(), this.dataManager.inclusionModeDefinition && (this.dataManager.inclusionModeDefinition.generateAllSublayers = !1), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((t) => {
          t.useAllData = !1, t.members?.forEach((i) => {
            let n;
            n = i.linkChartLocation instanceof Le ? i.linkChartLocation : i.linkChartLocation ? q(i.linkChartLocation) : null, n && n.coords.length === 2 && n.lengths.length === 0 ? this.entityLinkChartDiagramLookup.set(i.id, n) : this.relationshipLinkChartDiagramLookup.set(i.id, n);
          }), this.addResolvingPromise(this._initializeDiagram().then(async () => {
            this.layers.forEach(async (i) => {
              await i.refreshCachedQueryEngine();
            }), this.tables.forEach(async (i) => {
              await i.refreshCachedQueryEngine();
            });
          }));
        });
        else {
          const t = this.defaultLinkChartConfig?.layoutMode === "GEOGRAPHIC";
          this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0, !1, t, !0).then(async () => {
            Se(e);
            const i = [], n = [];
            this.loadLayerAssumingLocalCache(), this.dataManager.inclusionModeDefinition && (this.dataManager.inclusionModeDefinition.generateAllSublayers = !1, this.dataManager.inclusionModeDefinition.namedTypeDefinitions.forEach((o) => {
              o.useAllData = !1;
            })), await this._initializeDiagram(), this.layers.forEach((o) => {
              n.push(o.refreshCachedQueryEngine()), i.push(new Promise((c) => {
                o.on("layerview-create", () => {
                  c(null);
                });
              }));
            }), this.tables.forEach((o) => {
              n.push(o.refreshCachedQueryEngine());
            }), await Promise.all(n);
          }));
        }
        a(null);
      });
    })), Promise.resolve(this);
  }
  async addRecords(e, a) {
    let s = [];
    a?.cascadeAddRelationshipEndNodes && this.dataManager.knowledgeGraph.dataModel && (s = await Fe(e, this.dataManager.knowledgeGraph));
    const t = e.concat(s).filter((i) => !this.sublayerIdsCache.get(i.typeName)?.has(i.id));
    await this._handleNewRecords(t);
  }
  async removeRecords(e, { cascadeRemoveRelationships: a = !0, recalculateLayout: s = !1 } = { cascadeRemoveRelationships: !0, recalculateLayout: !1 }) {
    let t = [];
    for (const n of e) this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(n.typeName)?.useAllData === !1 && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(n.typeName)?.members?.has(n.id) && t.push(n);
    if (a) {
      const n = /* @__PURE__ */ new Set(), o = [];
      for (const c of t) if (this.dataManager.nodeConnectionsLookup.has(c.id)) for (const g of this.dataManager.nodeConnectionsLookup.get(c.id)) n.add(g);
      for (const c of n) if (this.dataManager.memberIdTypeLookup.has(c)) for (const g of this.dataManager.memberIdTypeLookup.get(c)) this.dataManager.relationshipTypeNames.has(g) && o.push({ id: c, typeName: g });
      t = t.concat(o);
    }
    this.dataManager.removeFromLayer(t);
    for (const n of t) this.sublayerIdsCache.get(n.typeName)?.delete(n.id), this.dataManager.relationshipTypeNames.has(n.typeName) ? this.relationshipLinkChartDiagramLookup.delete(n.id) : this.entityLinkChartDiagramLookup.delete(n.id);
    s && await this.calculateLinkChartLayout(this._currentLinkChartConfig.layoutMode, this._currentLinkChartConfig.layoutOptions);
    const i = [];
    return this.layers.forEach((n) => {
      i.push(n.refreshCachedQueryEngine());
    }), await Promise.all(i), this._refreshNamedTypes(), t;
  }
  async expand(e, a) {
    const s = await this.dataManager.getConnectedRecordIds(e, a), t = s.filter((i) => !this.sublayerIdsCache.get(i.typeName)?.has(i.id));
    return await this._handleNewRecords(s), { records: t };
  }
  loadLayerAssumingLocalCache() {
    this.memberRelationshipTypes.forEach((e) => {
      const a = new le({ objectType: e, parentCompositeLayer: this, graphType: "relationship", title: e.name });
      a.geometryType ? this.layers.push(a) : this.tables.push(a), this.dataManager.sublayerCaches.has(e.name) || this.dataManager.sublayerCaches.set(e.name, /* @__PURE__ */ new Map());
    }), this.memberEntityTypes.forEach((e) => {
      const a = new le({ objectType: e, parentCompositeLayer: this, graphType: "entity", title: e.name });
      a.geometryType ? this.layers.push(a) : this.tables.push(a), this.dataManager.sublayerCaches.has(e.name) || this.dataManager.sublayerCaches.set(e.name, /* @__PURE__ */ new Map());
    }), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((e, a) => {
      const s = He(this.sublayerIdsCache, a, () => /* @__PURE__ */ new Set());
      e.members?.forEach((t) => {
        if (s.add(t.id), t.linkChartLocation) if (t.linkChartLocation instanceof Le) this.dataManager.relationshipTypeNames.has(a) ? this.relationshipLinkChartDiagramLookup.set(t.id, t.linkChartLocation) : this.entityLinkChartDiagramLookup.set(t.id, t.linkChartLocation);
        else {
          const i = q(t.linkChartLocation);
          this.dataManager.relationshipTypeNames.has(a) ? this.relationshipLinkChartDiagramLookup.set(t.id, t.linkChartLocation ? i : null) : this.entityLinkChartDiagramLookup.set(t.id, t.linkChartLocation ? i : null);
        }
      });
    });
  }
  async calculateLinkChartLayout(e = "RADIAL_TREE", a) {
    const s = [], t = [], i = [];
    this.dataManager.sublayerCaches.forEach((r, u) => {
      this.dataManager.entityTypeNames.has(u) ? r.forEach((l) => {
        s.push({ typeName: u, feature: l });
      }) : this.dataManager.relationshipTypeNames.has(u) && r.forEach((l) => {
        t.push({ typeName: u, feature: l });
      });
    }), this.entityLinkChartDiagramLookup = /* @__PURE__ */ new Map(), this.relationshipLinkChartDiagramLookup = /* @__PURE__ */ new Map();
    const n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = new Uint8Array(s.length), f = new Float64Array(s.length), y = new Float64Array(s.length), D = new Uint32Array(t.length), x = new Uint32Array(t.length), h = [], k = "FORCE_DIRECTED", L = new me({ xmin: -1e-7, ymin: -1e-7, xmax: 1e-7, ymax: 1e-7 });
    let b, _ = "FORCE_DIRECTED", d = 0, R = 0;
    switch (_ = e === "GEOGRAPHIC" ? k : e, _) {
      case "FORCE_DIRECTED":
        b = ue.apply;
        break;
      case "COMMUNITY":
        b = de.apply;
        break;
      case "HIERARCHICAL":
        b = pe.apply;
        break;
      case "RADIAL_TREE":
        b = ye.apply;
        break;
      case "SMART_TREE":
        b = ge.apply;
        break;
      default:
        b = ce.apply;
    }
    s.forEach(({ typeName: r, feature: u }) => {
      if (a?.lockedNodeLocations?.has(u.attributes[I])) {
        e === "GEOGRAPHIC" && this.dataManager.geographicLookup.has(r) ? m[d] = $.IsGeographic : m[d] = $.None;
        const l = a.lockedNodeLocations.get(u.attributes[I]);
        f[d] = l.x, y[d] = l.y;
      } else if (e === "GEOGRAPHIC" && this.dataManager.geographicLookup.has(r)) {
        m[d] = $.IsGeographic;
        let l = null;
        const N = u.attributes[this.dataManager.geographicLookup.get(r).name];
        switch (this.dataManager.geographicLookup.get(r)?.geometryType) {
          case "esriGeometryPoint":
            f[d] = N?.x, y[d] = N?.y;
            break;
          case "esriGeometryPolygon":
            l = N?.centroid, l?.x != null && l?.y != null ? (f[d] = l.x, y[d] = l.y) : m[d] = $.IsMovable;
            break;
          case "esriGeometryPolyline":
          case "esriGeometryMultipoint":
            l = N?.extent?.center, l?.x != null && l?.y != null ? (f[d] = l.x, y[d] = l.y) : m[d] = $.IsMovable;
            break;
          default:
            m[d] = $.IsMovable;
        }
        (f[d] == null || y[d] == null || Number.isNaN(f[d]) || Number.isNaN(y[d])) && (m[d] = $.IsMovable, f[d] = 0, y[d] = 0);
      } else m[d] = $.IsMovable, f[d] = 0, y[d] = 0;
      g.set(u.attributes[I], d), h[d] = { feature: u, typeName: r }, d++;
    });
    let U = !1;
    const B = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const u = r.feature.attributes[te], l = r.feature.attributes[ae], N = g.get(u), H = g.get(l);
      if (N !== void 0 && H !== void 0) {
        const w = u + "-" + l, G = B.get(w);
        G?.has(r.typeName) || (D[R] = N, x[R] = H, G === void 0 ? B.set(w, /* @__PURE__ */ new Map([[r.typeName, R]])) : G.set(r.typeName, R), R++), i.push(r);
      } else U = !0, this.relationshipLinkChartDiagramLookup.set(u, null);
    }), U && O.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");
    const z = this._validateLayoutSettings(e, a), F = this._convertLayoutSettingsToCalculationSettings(z);
    await Qe();
    const { success: S, links: M } = b(m, f, y, D.subarray(0, R), x.subarray(0, R), F.computationBudgetTime, F.idealEdgeLengthMultiplier, F.repulsionRadiusMultiplier);
    if (!S) throw new ee("knowledge-graph:layout-failed", "Attempting to arrange the records in the specified layout failed");
    for (let r = 0; r < h.length; r++) {
      if (y[r] > 84.9999 ? y[r] = 84.9999 : y[r] < -84.9999 && (y[r] = -84.9999), f[r] > 179.9999 ? f[r] = 179.9999 : f[r] < -179.9999 && (f[r] = -179.9999), h[r].feature.attributes[E] = new Ce(f[r], y[r]), n.has(h[r].typeName))
        n.get(h[r].typeName)?.set(h[r].feature.attributes[I], h[r].feature);
      else {
        const l = /* @__PURE__ */ new Map();
        l.set(h[r].feature.attributes[I], h[r].feature), n.set(h[r].typeName, l);
      }
      c.set(h[r].feature.attributes[I], h[r].feature);
      const u = q(h[r].feature.attributes[E]);
      this.entityLinkChartDiagramLookup.set(h[r].feature.attributes[I], h[r].feature.attributes[E] ? u : null), h[r].feature.attributes[E].x < L.xmin && (L.xmin = h[r].feature.attributes[E].x), h[r].feature.attributes[E].x > L.xmax && (L.xmax = h[r].feature.attributes[E].x), h[r].feature.attributes[E].y < L.ymin && (L.ymin = h[r].feature.attributes[E].y), h[r].feature.attributes[E].y > L.ymax && (L.ymax = h[r].feature.attributes[E].y);
    }
    if (this.linkChartExtent.xmin = L.xmin, this.linkChartExtent.xmax = L.xmax, this.linkChartExtent.ymin = L.ymin, this.linkChartExtent.ymax = L.ymax, !M) throw new ee("knowledge-graph:layout-failed", "Attempting to retrieve link geometry from diagram engine failed");
    const P = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Set();
    for (let r = 0; r < i.length; r++) {
      const u = [], l = i[r], N = l.feature.attributes[te], H = l.feature.attributes[ae], w = N + "-" + H, G = B.get(w).get(l.typeName), Y = G === 0 ? 0 : M?.vertexEndIndex[G - 1];
      if (!J.has(G)) {
        if (J.add(G), M.types[G] === ne.Recursive) {
          const C = [M.vertices[2 * Y], M.vertices[2 * Y + 1]], oe = [M.vertices[2 * (Y + 1)], M.vertices[2 * (Y + 1) + 1]], V = [0.5 * (C[0] + oe[0]), 0.5 * (C[1] + oe[1])], Z = [V[0] - C[0], V[1] - C[1]], Ae = [V[0] + Z[1], V[1] - Z[0]], Ie = [V[0] - Z[1], V[1] + Z[0]];
          u.push(C), u.push(Ae), u.push(oe), u.push(Ie), u.push(C);
        } else {
          if (M.types[G] !== ne.Regular) {
            O.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");
            continue;
          }
          for (let C = Y; C < M.vertexEndIndex[G]; C++) u.push([M.vertices[2 * C], M.vertices[2 * C + 1]]);
        }
        const Q = h[g.get(N)]?.feature.attributes[E], X = h[g.get(H)]?.feature.attributes[E];
        u[0][0] === Q.x && u[0][1] === Q.y || (u[0] = [Q.x, Q.y]), u[u.length - 1][0] === X.x && u[u.length - 1][1] === X.y || (u[u.length - 1] = [X.x, X.y]);
        for (let C = 1; C < u.length - 1; C++) u[C][1] > 85.5 ? u[C][1] = 85.5 : u[C][1] < -85.5 && (u[C][1] = -85.5), u[C][0] > 179.9999 ? u[C][0] = 179.9999 : u[C][0] < -179.9999 && (u[C][0] = -179.9999);
        P.has(w) ? P.get(w).push(u) : P.set(w, [u]);
      }
      const xe = P.get(w);
      K.has(w) || (K.set(w, /* @__PURE__ */ new Map()), W.set(w, /* @__PURE__ */ new Map()));
      const se = K.get(w), re = W.get(w);
      se.has(l.typeName) || (se.set(l.typeName, xe.shift()), re.set(l.typeName, 0));
      const Ne = se.get(l.typeName);
      re.set(l.typeName, re.get(l.typeName) + 1);
      const ve = new ke({ paths: Ne });
      if (l.feature.attributes[E] = ve, o.has(l.typeName))
        o.get(l.typeName)?.set(l.feature.attributes[I], l.feature);
      else {
        const Q = /* @__PURE__ */ new Map();
        Q.set(l.feature.attributes[I], l.feature), o.set(l.typeName, Q);
      }
      c.set(l.feature.attributes[I], l.feature);
      const Re = q(l.feature.attributes[E]);
      this.relationshipLinkChartDiagramLookup.set(l.feature.attributes[I], l.feature.attributes[E] ? Re : null);
    }
    for (const r of i) r.feature.attributes[Ue] = W.get(r.feature.attributes[te] + "-" + r.feature.attributes[ae])?.get(r.typeName) ?? null;
    return this._currentLinkChartConfig = { layoutMode: e, layoutOptions: z }, { nodes: n, links: o, idMap: c };
  }
  async applyNewLinkChartLayout(e = "RADIAL_TREE", a) {
    const s = [];
    await this.calculateLinkChartLayout(e, a), this.layers.forEach((t) => {
      s.push(t.refreshCachedQueryEngine());
    }), await Promise.all(s), this._refreshNamedTypes();
  }
  getCurrentNodeLocations() {
    const e = /* @__PURE__ */ new Map();
    return this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((a) => {
      a?.members?.forEach((s) => {
        const t = s.linkChartLocation;
        let i;
        const n = s.id;
        t && (i = "x" in t ? { x: t.x, y: t.y } : { x: t.coords[0], y: t.coords[1] }, e.set(n, new Ce({ x: i.x, y: i.y })));
      });
    }), e;
  }
  async synchronizeInclusionListWithCache() {
    return new Promise((e) => {
      this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((a, s) => {
        if (a.useAllData = !1, a.members && a.members.size > 0) {
          if (!this.dataManager.sublayerCaches.get(s)) return;
          const t = new Set(Array.from(this.dataManager.sublayerCaches.get(s).keys()));
          Array.from(a.members.keys()).filter((i) => !t.has(i)).forEach((i) => {
            a.members?.delete(i);
          });
        }
      }), e();
    });
  }
  async refreshLinkChartCache(e) {
    await this.dataManager.refreshCacheContent(e);
    const a = [];
    this.layers.forEach((s) => {
      a.push(s.refreshCachedQueryEngine());
    }), await Promise.all(a), this._refreshNamedTypes();
  }
  async connectEntities(e) {
    let a = [];
    for (const t of this.dataManager.relationshipTypeNames) {
      const i = this.sublayerIdsCache.get(t);
      i && (a = a.concat(Array.from(i.keys())));
    }
    const s = await this.dataManager.getAttachedRelationships(e, a);
    return await this._handleNewRecords(s), { records: s };
  }
  async _handleNewRecords(e) {
    const a = [];
    this.dataManager.addToLayer(e);
    for (const t of e) this.sublayerIdsCache.has(t.typeName) || (this.sublayerIdsCache.set(t.typeName, /* @__PURE__ */ new Set()), a.push(t.typeName)), this.sublayerIdsCache.get(t.typeName).add(t.id);
    for (const t of a) {
      const i = this._graphTypeLookup.get(t);
      if (i) {
        const n = new le({ objectType: i, parentCompositeLayer: this, graphType: i.type, title: t });
        i.type === "entity" ? this.dataManager.entityTypeNames.add(t) : this.dataManager.relationshipTypeNames.add(t), n.geometryType ? this.layers.push(n) : this.tables.push(n), this.dataManager.sublayerCaches.set(t, /* @__PURE__ */ new Map());
      }
    }
    await this.dataManager.refreshCacheContent(e.map((t) => t.id));
    const s = Object.assign({}, this._currentLinkChartConfig.layoutOptions);
    s.lockedNodeLocations = this.getCurrentNodeLocations(), await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode, s);
  }
  async _initializeDiagram() {
    this.defaultLinkChartConfig ? this.defaultLinkChartConfig.doNotRecalculateLayout ? (this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e, a) => {
      e?.members?.forEach((s) => {
        const t = s.linkChartLocation;
        let i;
        const n = s.id;
        if (!t) return;
        i = "x" in t ? { x: t.x, y: t.y } : { x: t.coords[0], y: t.coords[1] };
        const o = q(i);
        this.dataManager.relationshipTypeNames.has(a) ? this.relationshipLinkChartDiagramLookup.set(n, o) : this.entityLinkChartDiagramLookup.set(n, o), this.linkChartExtent.xmin > i.x && (this.linkChartExtent.xmin = i.x), this.linkChartExtent.xmax < i.x && (this.linkChartExtent.xmax = i.x), this.linkChartExtent.ymin > i.y && (this.linkChartExtent.ymin = i.y), this.linkChartExtent.ymax < i.y && (this.linkChartExtent.ymax = i.y);
      });
    }), this.memberRelationshipTypes.forEach((e) => {
      e.name && this.dataManager.sublayerCaches.get(e.name)?.forEach((a) => {
        const s = this.relationshipLinkChartDiagramLookup.get(a.attributes[te]), t = this.relationshipLinkChartDiagramLookup.get(a.attributes[ae]);
        if (s && t) {
          const i = q(new ke({ paths: [[s.coords[0], s.coords[1]], [t.coords[0], t.coords[1]]] }));
          this.relationshipLinkChartDiagramLookup.set(a.attributes[I], i);
        } else this.relationshipLinkChartDiagramLookup.set(a.attributes[I], null);
      });
    })) : await this.calculateLinkChartLayout(this.defaultLinkChartConfig.layoutMode, { lockedNodeLocations: this.getCurrentNodeLocations(), ...this.defaultLinkChartConfig.layoutOptions || {} }) : await this.calculateLinkChartLayout("RADIAL_TREE", { lockedNodeLocations: this.getCurrentNodeLocations() });
  }
  _refreshNamedTypes() {
    for (const e of this.layers) e.emit("refresh", { dataChanged: !0 });
    for (const e of this.tables) e.emit("refresh", { dataChanged: !0 });
  }
  _validateLayoutSettings(e, a) {
    const s = (h) => typeof h == "number" && !isNaN(h), t = (h) => s(h) && h >= 1, i = (h) => s(h) && h >= 1, n = (h) => Object.values(ie).includes(h), o = (h) => s(h) && h >= 0, c = /* @__PURE__ */ new Set(["FORCE_DIRECTED", "COMMUNITY", "GEOGRAPHIC"]), g = {};
    if (!c.has(e) || !a) return !c.has(e) && a && O.getLogger(this).warn("Layout mode options were given for a layout mode that does not utilize them, settings will be ignored"), g;
    const { computationBudgetTime: m, repulsionRadiusMultiplier: f, idealEdgeLength: y, idealEdgeLengthType: D } = a;
    i(m) ? g.computationBudgetTime = m : m !== void 0 && O.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"), t(f) ? g.repulsionRadiusMultiplier = f : f !== void 0 && O.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting");
    const x = y !== void 0 || D !== void 0;
    return e !== "GEOGRAPHIC" && x ? O.getLogger(this).warn("Ideal edge length settings were specified for an incompatible layout mode, and will be ignored") : e === "GEOGRAPHIC" && x && (n(D) ? g.idealEdgeLengthType = D : D !== void 0 && O.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'), o(y) ? g.idealEdgeLength = y : y !== void 0 && O.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")), g;
  }
  _convertLayoutSettingsToCalculationSettings(e) {
    let a = e.idealEdgeLength;
    return e.idealEdgeLengthType === ie.ABSOLUTE && (a === void 0 ? a = -1 : a *= -1), { computationBudgetTime: e.computationBudgetTime, repulsionRadiusMultiplier: e.repulsionRadiusMultiplier, idealEdgeLengthMultiplier: a };
  }
};
v([A()], T.prototype, "dataPreloadedInLocalCache", void 0), v([A()], T.prototype, "defaultLinkChartConfig", void 0), v([A()], T.prototype, "dataManager", void 0), v([A()], T.prototype, "knowledgeGraph", void 0), v([A()], T.prototype, "layers", void 0), v([A()], T.prototype, "entityLinkChartDiagramLookup", void 0), v([A()], T.prototype, "relationshipLinkChartDiagramLookup", void 0), v([A()], T.prototype, "linkChartExtent", void 0), v([A()], T.prototype, "memberEntityTypes", void 0), v([A()], T.prototype, "memberRelationshipTypes", void 0), v([A()], T.prototype, "sublayerIdsCache", void 0), v([A()], T.prototype, "tables", void 0), v([A({ json: { read: !1 } })], T.prototype, "type", void 0), T = v([Oe("esri.layers.LinkChartLayer")], T);
const Ke = T;
export {
  Ke as default
};
//# sourceMappingURL=LinkChartLayer-z_edr5vk.js.map
