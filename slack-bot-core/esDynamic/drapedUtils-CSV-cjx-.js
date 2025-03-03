import { cB as Y, cC as ee, ka as te, kb as re, kc as V, W as se, N as a, O as p, kd as ie, eK as ne, et as B, aU as E, bh as oe, f1 as ae, P as T, b_ as D, b$ as le, ap as _, d$ as ue, gr as pe, bX as ye, ao as ce, bZ as he, bY as fe, a2 as de, dU as me, S as ge, b2 as be, s as H, H as j, V as we, b6 as k, e6 as q, c1 as xe, ba as P, af as ve, ke as $e, a8 as z, kf as Se, cO as Fe } from "./main-CmejC-so.js";
import { n as Re, p as Oe } from "./popupUtils-DceMb9H1.js";
function I(t, e) {
  return e ? "xoffset" in e && e.xoffset ? Math.max(t, Math.abs(e.xoffset)) : "yoffset" in e && e.yoffset ? Math.max(t, Math.abs(e.yoffset || 0)) : t : t;
}
function Me(t) {
  let e = 0, s = 0;
  for (let i = 0; i < t.length; i++) {
    const r = t[i].size;
    typeof r == "number" && (e += r, s++);
  }
  return e / s;
}
function J(t, e) {
  return typeof t == "number" ? t : t?.stops?.length ? Me(t.stops) : e;
}
function Ee(t, e) {
  if (!e) return t;
  const s = e.filter((n) => n.type === "size").map((n) => {
    const { maxSize: c, minSize: u } = n;
    return (J(c, t) + J(u, t)) / 2;
  });
  let i = 0;
  const r = s.length;
  if (r === 0) return t;
  for (let n = 0; n < r; n++) i += s[n];
  const o = Math.floor(i / r);
  return Math.max(o, t);
}
function Q(t) {
  const e = t?.renderer, s = t?.pointerType, i = s === "touch" ? 9 : 6;
  if (!e) return i;
  const r = "visualVariables" in e ? Ee(i, e.visualVariables) : i;
  if (e.type === "simple") return I(r, e.symbol);
  if (e.type === "unique-value") {
    let o = r;
    return e.uniqueValueInfos?.forEach((n) => {
      o = I(o, n.symbol);
    }), o;
  }
  if (e.type === "class-breaks") {
    let o = r;
    return e.classBreakInfos.forEach((n) => {
      o = I(o, n.symbol);
    }), o;
  }
  return e.type === "dot-density" || e.type, r;
}
function je(t, e) {
  const { dpi: s, gdbVersion: i, geometry: r, geometryPrecision: o, height: n, historicMoment: c, layerOption: u, mapExtent: l, maxAllowableOffset: h, returnFieldName: y, returnGeometry: m, returnUnformattedValues: v, returnZ: d, spatialReference: S, timeExtent: b, tolerance: g, width: x } = t.toJSON(), { dynamicLayers: F, layerDefs: R, layerIds: A } = Ie(t), U = e?.geometry != null ? e.geometry : null, w = { historicMoment: c, geometryPrecision: o, maxAllowableOffset: h, returnFieldName: y, returnGeometry: m, returnUnformattedValues: v, returnZ: d, tolerance: g }, M = U && U.toJSON() || r;
  w.imageDisplay = `${x},${n},${s}`, i && (w.gdbVersion = i), M && (delete M.spatialReference, w.geometry = JSON.stringify(M), w.geometryType = Y(M));
  const L = S ?? M?.spatialReference ?? l?.spatialReference;
  if (L && (w.sr = ee(L)), w.time = b ? [b.start, b.end].join(",") : null, l) {
    const { xmin: W, ymin: C, xmax: K, ymax: X } = l;
    w.mapExtent = `${W},${C},${K},${X}`;
  }
  return R && (w.layerDefs = R), F && !R && (w.dynamicLayers = F), w.layers = u === "popup" ? "visible" : u, A && !F && (w.layers += `:${A.join(",")}`), w;
}
function Ie(t) {
  const { mapExtent: e, floors: s, width: i, sublayers: r, layerIds: o, layerOption: n, gdbVersion: c } = t, u = r?.find((d) => d.layer != null)?.layer?.serviceSublayers, l = n === "popup", h = {}, y = te({ extent: e, width: i, spatialReference: e?.spatialReference }), m = [], v = (d) => {
    const S = y === 0, b = d.minScale === 0 || y <= d.minScale, g = d.maxScale === 0 || y >= d.maxScale;
    if (d.visible && (S || b && g)) if (d.sublayers) d.sublayers.forEach(v);
    else {
      if (o?.includes(d.id) === !1 || l && (!d.popupTemplate || !d.popupEnabled)) return;
      m.unshift(d);
    }
  };
  if (r?.forEach(v), r && !m.length) h.layerIds = [];
  else {
    const d = re(m, u, c), S = m.map((b) => {
      const g = V(s, b);
      return b.toExportImageJSON(g);
    });
    if (d) h.dynamicLayers = JSON.stringify(S);
    else {
      if (r) {
        let g = m.map(({ id: x }) => x);
        o && (g = g.filter((x) => o.includes(x))), h.layerIds = g;
      } else o?.length && (h.layerIds = o);
      const b = Ne(s, m);
      if (b != null && b.length) {
        const g = {};
        for (const x of b) x.definitionExpression && (g[x.id] = x.definitionExpression);
        Object.keys(g).length && (h.layerDefs = JSON.stringify(g));
      }
    }
  }
  return h;
}
function Ne(t, e) {
  const s = !!t?.length, i = e.filter((r) => r.definitionExpression != null || s && r.floorInfo != null);
  return i.length ? i.map((r) => {
    const o = V(t, r), n = se(o, r.definitionExpression);
    return { id: r.id, definitionExpression: n ?? void 0 };
  }) : null;
}
var G;
let f = G = class extends D {
  static from(t) {
    return le(G, t);
  }
  constructor(t) {
    super(t), this.dpi = 96, this.floors = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = null, this.height = 400, this.historicMoment = null, this.layerIds = null, this.layerOption = "top", this.mapExtent = null, this.maxAllowableOffset = null, this.returnFieldName = !0, this.returnGeometry = !1, this.returnM = !1, this.returnUnformattedValues = !0, this.returnZ = !1, this.spatialReference = null, this.sublayers = null, this.timeExtent = null, this.tolerance = null, this.width = 400;
  }
  writeHistoricMoment(t, e) {
    e.historicMoment = t && t.getTime();
  }
};
a([p({ type: Number, json: { write: !0 } })], f.prototype, "dpi", void 0), a([p()], f.prototype, "floors", void 0), a([p({ type: String, json: { write: !0 } })], f.prototype, "gdbVersion", void 0), a([p({ types: ie, json: { read: ne, write: !0 } })], f.prototype, "geometry", void 0), a([p({ type: Number, json: { write: !0 } })], f.prototype, "geometryPrecision", void 0), a([p({ type: Number, json: { write: !0 } })], f.prototype, "height", void 0), a([p({ type: Date })], f.prototype, "historicMoment", void 0), a([B("historicMoment")], f.prototype, "writeHistoricMoment", null), a([p({ type: [Number], json: { write: !0 } })], f.prototype, "layerIds", void 0), a([p({ type: ["top", "visible", "all", "popup"], json: { write: !0 } })], f.prototype, "layerOption", void 0), a([p({ type: E, json: { write: !0 } })], f.prototype, "mapExtent", void 0), a([p({ type: Number, json: { write: !0 } })], f.prototype, "maxAllowableOffset", void 0), a([p({ type: Boolean, json: { write: !0 } })], f.prototype, "returnFieldName", void 0), a([p({ type: Boolean, json: { write: !0 } })], f.prototype, "returnGeometry", void 0), a([p({ type: Boolean, json: { write: !0 } })], f.prototype, "returnM", void 0), a([p({ type: Boolean, json: { write: !0 } })], f.prototype, "returnUnformattedValues", void 0), a([p({ type: Boolean, json: { write: !0 } })], f.prototype, "returnZ", void 0), a([p({ type: oe, json: { write: !0 } })], f.prototype, "spatialReference", void 0), a([p()], f.prototype, "sublayers", void 0), a([p({ type: ae, json: { write: !0 } })], f.prototype, "timeExtent", void 0), a([p({ type: Number, json: { write: !0 } })], f.prototype, "tolerance", void 0), a([p({ type: Number, json: { write: !0 } })], f.prototype, "width", void 0), f = G = a([T("esri.rest.support.IdentifyParameters")], f);
const Z = f;
let $ = class extends D {
  constructor(t) {
    super(t), this.displayFieldName = null, this.feature = null, this.layerId = null, this.layerName = null;
  }
  readFeature(t, e) {
    return _.fromJSON({ attributes: { ...e.attributes }, geometry: { ...e.geometry } });
  }
  writeFeature(t, e) {
    if (!t) return;
    const { attributes: s, geometry: i } = t;
    s && (e.attributes = { ...s }), i != null && (e.geometry = i.toJSON(), e.geometryType = pe.toJSON(i.type));
  }
};
a([p({ type: String, json: { write: !0 } })], $.prototype, "displayFieldName", void 0), a([p({ type: _ })], $.prototype, "feature", void 0), a([ue("feature", ["attributes", "geometry"])], $.prototype, "readFeature", null), a([B("feature")], $.prototype, "writeFeature", null), a([p({ type: Number, json: { write: !0 } })], $.prototype, "layerId", void 0), a([p({ type: String, json: { write: !0 } })], $.prototype, "layerName", void 0), $ = a([T("esri.rest.support.IdentifyResult")], $);
const Pe = $;
async function Ge(t, e, s) {
  const i = (e = Te(e)).geometry ? [e.geometry] : [], r = ye(t);
  return r.path += "/identify", ce(i).then((o) => {
    const n = je(e, { geometry: o?.[0] }), c = he({ ...r.query, f: "json", ...n }), u = fe(c, s);
    return de(r.path, u).then(Ve).then((l) => _e(l, e.sublayers));
  });
}
function Ve(t) {
  const e = t.data;
  return e.results = e.results || [], e.exceededTransferLimit = !!e.exceededTransferLimit, e.results = e.results.map((s) => Pe.fromJSON(s)), e;
}
function Te(t) {
  return t = Z.from(t);
}
function _e(t, e) {
  if (!e?.length) return t;
  const s = /* @__PURE__ */ new Map();
  function i(r) {
    s.set(r.id, r), r.sublayers && r.sublayers.forEach(i);
  }
  e.forEach(i);
  for (const r of t.results) r.feature.sourceLayer = s.get(r.layerId);
  return t;
}
let N = null;
function ze(t, e) {
  return e.type === "tile" || e.type === "map-image";
}
let O = class extends me {
  constructor(t) {
    super(t), this._featuresResolutions = /* @__PURE__ */ new WeakMap(), this.highlightGraphics = null, this.highlightGraphicUpdated = null, this.updateHighlightedFeatures = ge(async (e) => {
      this.destroyed || this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(() => {
      }));
    });
  }
  initialize() {
    const t = (e) => {
      this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(() => {
      })), this.updateHighlightedFeatures(this._highlightGeometriesResolution);
    };
    this.addHandles([be(() => this.highlightGraphics, "change", (e) => t(e.added), { onListenerAdd: (e) => t(e) })]);
  }
  async fetchPopupFeaturesAtLocation(t, e) {
    const { layerView: { layer: s, view: { scale: i } } } = this;
    if (!t) throw new H("fetchPopupFeatures:invalid-area", "Nothing to fetch without area", { layer: s });
    const r = Ae(s.sublayers, i, e);
    if (!r.length) return [];
    const o = await Le(s, r);
    if (!((s.capabilities?.operations?.supportsIdentify ?? !0) && s.version >= 10.5) && !o) throw new H("fetchPopupFeatures:not-supported", "query operation is disabled for this service", { layer: s });
    return o ? this._fetchPopupFeaturesUsingQueries(t, r, e) : this._fetchPopupFeaturesUsingIdentify(t, r, e);
  }
  clearHighlights() {
    this.highlightGraphics?.removeAll();
  }
  highlight(t) {
    const e = this.highlightGraphics;
    if (!e) return j();
    let s = null;
    if (t instanceof _ ? s = [t] : we.isCollection(t) && t.length > 0 ? s = t.toArray() : Array.isArray(t) && t.length > 0 && (s = t), s = s?.filter(k), !s?.length) return j();
    for (const i of s) {
      const r = i.sourceLayer;
      r != null && "geometryType" in r && r.geometryType === "point" && (i.visible = !1);
    }
    return e.addMany(s), j(() => e.removeMany(s ?? []));
  }
  async _updateHighlightedFeaturesSymbols(t) {
    const { layerView: { view: e }, highlightGraphics: s, highlightGraphicUpdated: i } = this;
    if (s && i) for (const r of t) {
      const o = r.sourceLayer && "renderer" in r.sourceLayer && r.sourceLayer.renderer;
      r.sourceLayer && "geometryType" in r.sourceLayer && r.sourceLayer.geometryType === "point" && o && "getSymbolAsync" in o && o.getSymbolAsync(r).then(async (n) => {
        n ||= new q();
        let c = null;
        const u = "visualVariables" in o ? o.visualVariables?.find((l) => l.type === "size") : void 0;
        u && (N || (N = (await import("./main-CmejC-so.js").then((l) => l.qJ)).getSize), c = N(u, r, { view: e.type, scale: e.scale, shape: n.type === "simple-marker" ? n.style : null })), c ||= "width" in n && "height" in n && n.width != null && n.height != null ? Math.max(n.width, n.height) : "size" in n ? n.size : 16, s.includes(r) && (r.symbol = new q({ style: "square", size: c, xoffset: "xoffset" in n ? n.xoffset : 0, yoffset: "yoffset" in n ? n.yoffset : 0 }), i(r, "symbol"), r.visible = !0);
      });
    }
  }
  async _updateHighlightedFeaturesGeometries(t) {
    const { layerView: { layer: e, view: s }, highlightGraphics: i, highlightGraphicUpdated: r } = this;
    if (this._highlightGeometriesResolution = t, !r || !i?.length || !e.capabilities.operations.supportsQuery) return;
    const o = this._getTargetResolution(t), n = /* @__PURE__ */ new Map();
    for (const l of i) if (!this._featuresResolutions.has(l) || this._featuresResolutions.get(l) > o) {
      const h = l.sourceLayer;
      xe(n, h, () => /* @__PURE__ */ new Map()).set(l.getObjectId(), l);
    }
    const c = Array.from(n, ([l, h]) => {
      const y = l.createQuery();
      return y.objectIds = [...h.keys()], y.outFields = [l.objectIdField], y.returnGeometry = !0, y.maxAllowableOffset = o, y.outSpatialReference = s.spatialReference, l.queryFeatures(y);
    }), u = await Promise.all(c);
    if (!this.destroyed) for (const { features: l } of u) for (const h of l) {
      const y = h.sourceLayer, m = n.get(y).get(h.getObjectId());
      m && i.includes(m) && (m.geometry = h.geometry, r(m, "geometry"), this._featuresResolutions.set(m, o));
    }
  }
  _getTargetResolution(t) {
    const e = t * P(this.layerView.view.spatialReference), s = e / 16;
    return s <= 10 ? 0 : t / e * s;
  }
  async _fetchPopupFeaturesUsingIdentify(t, e, s) {
    const i = await this._createIdentifyParameters(t, e, s);
    if (i == null) return [];
    const { results: r } = await Ge(this.layerView.layer.parsedUrl, i, s);
    return r.map((o) => o.feature);
  }
  async _createIdentifyParameters(t, e, s) {
    const { floors: i, layer: r, timeExtent: o, view: { spatialReference: n, scale: c } } = this.layerView;
    if (!e.length) return null;
    await Promise.all(e.map(({ sublayer: v }) => v.load(s).catch(() => {
    })));
    const u = Math.min(ve("mapservice-popup-identify-max-tolerance"), r.allSublayers.reduce((v, d) => d.renderer ? Q({ renderer: d.renderer, pointerType: s?.pointerType }) : v, 2)), l = this.createFetchPopupFeaturesQueryGeometry(t, u), h = $e(c, n), y = Math.round(l.width / h), m = new E({ xmin: l.center.x - h * y, ymin: l.center.y - h * y, xmax: l.center.x + h * y, ymax: l.center.y + h * y, spatialReference: l.spatialReference });
    return new Z({ floors: i, gdbVersion: "gdbVersion" in r ? r.gdbVersion : void 0, geometry: t, height: y, layerOption: "popup", mapExtent: m, returnGeometry: !0, spatialReference: n, sublayers: r.sublayers, timeExtent: o, tolerance: u, width: y });
  }
  async _fetchPopupFeaturesUsingQueries(t, e, s) {
    const { layerView: { floors: i, timeExtent: r } } = this, o = e.map(async ({ sublayer: n, popupTemplate: c }) => {
      if (await n.load(s).catch(() => {
      }), n.capabilities && !n.capabilities.operations.supportsQuery) return [];
      const u = n.createQuery(), l = Q({ renderer: n.renderer, pointerType: s?.pointerType }), h = this.createFetchPopupFeaturesQueryGeometry(t, l), y = /* @__PURE__ */ new Set(), [m] = await Promise.all([Re(n, c), n.renderer?.collectRequiredFields(y, n.fieldsIndex)]);
      z(s), Se(y, n.fieldsIndex, m);
      const v = Array.from(y).sort();
      if (u.geometry = h, u.outFields = v, u.timeExtent = r, i) {
        const F = i.clone(), R = V(F, n);
        R != null && (u.where = u.where ? `(${u.where}) AND (${R})` : R);
      }
      const d = this._getTargetResolution(h.width / l), S = await Ue(c);
      z(s);
      const b = n.geometryType === "point" || S && S.arcadeUtils.hasGeometryOperations(c);
      b || (u.maxAllowableOffset = d);
      let { features: g } = await n.queryFeatures(u, s);
      const x = b ? 0 : d;
      g = await He(n, g, s);
      for (const F of g) this._featuresResolutions.set(F, x);
      return g;
    });
    return (await Promise.allSettled(o)).reduce((n, c) => c.status === "fulfilled" ? [...n, ...c.value] : n, []).filter(k);
  }
};
function Ae(t, e, s) {
  const i = [];
  if (!t) return i;
  const r = (o) => {
    const n = o.minScale === 0 || e <= o.minScale, c = o.maxScale === 0 || e >= o.maxScale;
    if (o.visible && n && c) {
      if (o.sublayers) o.sublayers.forEach(r);
      else if (o.popupEnabled) {
        const u = Oe(o, { ...s, defaultPopupTemplateEnabled: !1 });
        u != null && i.unshift({ sublayer: o, popupTemplate: u });
      }
    }
  };
  return t.map(r), i;
}
function Ue(t) {
  return t.expressionInfos?.length || Array.isArray(t.content) && t.content.some((e) => e.type === "expression") ? Fe() : Promise.resolve();
}
async function Le(t, e) {
  if (t.capabilities?.operations?.supportsQuery) return !0;
  try {
    return await Promise.any(e.map(({ sublayer: s }) => s.load().then(() => s.capabilities.operations.supportsQuery)));
  } catch {
    return !1;
  }
}
async function He(t, e, s) {
  const i = t.renderer;
  return i && "defaultSymbol" in i && !i.defaultSymbol && (e = i.valueExpression ? await Promise.all(e.map((r) => i.getSymbolAsync(r, s).then((o) => o ? r : null))).then((r) => r.filter((o) => o != null)) : e.filter((r) => i.getSymbol(r) != null)), e;
}
a([p({ constructOnly: !0 })], O.prototype, "createFetchPopupFeaturesQueryGeometry", void 0), a([p({ constructOnly: !0 })], O.prototype, "layerView", void 0), a([p({ constructOnly: !0 })], O.prototype, "highlightGraphics", void 0), a([p({ constructOnly: !0 })], O.prototype, "highlightGraphicUpdated", void 0), a([p({ constructOnly: !0 })], O.prototype, "updatingHandles", void 0), O = a([T("esri.views.layers.support.MapService")], O);
function Je(t, e, s, i = new E()) {
  let r = 0;
  if (s.type === "2d") r = e * (s.resolution ?? 0);
  else if (s.type === "3d") {
    const h = s.overlayPixelSizeInMapUnits(t), y = s.basemapSpatialReference;
    r = y == null || y.equals(s.spatialReference) ? e * h : P(y) / P(s.spatialReference);
  }
  const o = t.x - r, n = t.y - r, c = t.x + r, u = t.y + r, { spatialReference: l } = s;
  return i.xmin = Math.min(o, c), i.ymin = Math.min(n, u), i.xmax = Math.max(o, c), i.ymax = Math.max(n, u), i.spatialReference = l, i;
}
new E();
export {
  ze as S,
  O as U,
  Je as r
};
//# sourceMappingURL=drapedUtils-CSV-cjx-.js.map
