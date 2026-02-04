import { gz as J, d_ as D, dS as N, dT as W, g3 as P, ag as v, es as z, C as Y, $ as x, s as c, g4 as K, gA as R, W as L, f5 as k, N as i, O as s, et as ee, gB as te, g6 as re, g7 as ie, g8 as se, e1 as ne, gy as ae, gx as oe, ga as le, Z as ue, d$ as $, ge as M, P as Q, gC as pe, gD as de, gE as ye, gf as U, gF as ce, gG as he, gH as ge, eV as be, gI as fe, gJ as me, dV as ve, g2 as we, dZ as Se, dW as Fe, ew as $e, dX as Ie, dY as Oe, ex as je, ey as Ee, V as C, S as Te, U as Ae, fi as Ce, a1 as xe, eX as Le, gK as Pe, I as _e, aN as Ge, gL as Ve, gM as qe, gN as De, gO as Ne, gP as Re, gQ as ke, gR as Me, gl as Qe, gS as Ue, gT as He, gU as Be, gV as Xe, gW as Ze, gX as Je, gm as O, gY as We, fZ as ze, gZ as Ye, e0 as Ke, fX as et, e8 as tt } from "./main-3gzXighg.js";
const H = { key: "type", base: pe, errorContext: "renderer", typeMap: { simple: x, "unique-value": de, "class-breaks": ye } }, _ = U(), G = J({ types: H });
let rt = 0;
function F(e) {
  const t = e.json.write;
  return typeof t == "object" ? t.ignoreOrigin = !0 : e.json.write = { ignoreOrigin: !0 }, e;
}
function it(e) {
  return new x({ symbol: st(e) });
}
function st(e) {
  switch (e) {
    case "point":
    case "multipoint":
      return ge.clone();
    case "polyline":
      return he.clone();
    case "polygon":
    case "multipatch":
      return ce.clone();
    default:
      return null;
  }
}
function nt(e, t) {
  return !!t && e?.type === "unique-value" && typeof e.field == "string" && e.field.toLowerCase() === t.toLowerCase() && !e.field2 && !e.field3 && !e.valueExpression;
}
function B(e, t) {
  return e == null ? null : t.subtypes?.find((r) => r.code === e);
}
function at(e, t) {
  let r = null;
  switch (t.geometryType) {
    case "esriGeometryPoint":
    case "esriGeometryMultipoint":
      r = "point";
      break;
    case "esriGeometryPolyline":
      r = "line";
      break;
    case "esriGeometryPolygon":
    case "esriGeometryMultiPatch":
      r = "polygon";
      break;
    default:
      t.type, r = null;
  }
  const a = {}, l = B(e, t);
  if (l != null) {
    const { defaultValues: o } = l;
    for (const p in o) a[p] = o[p];
  }
  return a[t.subtypeField] = e, new M({ name: "New Feature", drawingTool: r, prototype: { attributes: a } });
}
const X = "esri.layers.support.SubtypeSublayer";
let n = class extends D(N(W(be))) {
  constructor(e) {
    super(e), this.charts = null, this.editingEnabled = !0, this.fieldOverrides = null, this.fieldsIndex = null, this.formTemplate = null, this.id = `${Date.now().toString(16)}-subtype-sublayer-${rt++}`, this.type = "subtype-sublayer", this.labelsVisible = !0, this.labelingInfo = null, this.layerType = "ArcGISFeatureLayer", this.legendEnabled = !0, this.listMode = "show", this.minScale = 0, this.maxScale = 0, this.opacity = 1, this.parent = null, this.popupEnabled = !0, this.popupTemplate = null, this.subtypeCode = null, this.templates = null, this.title = null, this.visible = !0;
  }
  load(e) {
    return P(this.renderer, this.fieldsIndex), Promise.resolve(this);
  }
  get capabilities() {
    return this.parent?.capabilities;
  }
  get effectiveCapabilities() {
    return this.parent?.effectiveCapabilities;
  }
  get effectiveEditingEnabled() {
    const { parent: e } = this;
    return e ? e.effectiveEditingEnabled && this.editingEnabled : this.editingEnabled;
  }
  get elevationInfo() {
    return this.parent?.elevationInfo;
  }
  writeFieldOverrides(e, t, r) {
    const { fields: a, parent: l } = this;
    let o;
    if (a) {
      o = [];
      let p = 0;
      a.forEach(({ name: h, alias: g, editable: w, visible: S }) => {
        if (!S) return;
        const d = l?.fields?.find((E) => E.name === h);
        if (!d) return;
        const b = { name: h };
        let m = !1;
        g !== d.alias && (b.alias = g, m = !0), w !== d.editable && (b.editable = w, m = !0), o.push(b), m && p++;
      }), p === 0 && o.length === a.length && (o = null);
    } else o = v(e);
    o?.length && z(r, o, t);
  }
  get fields() {
    const { parent: e, fieldOverrides: t, subtypeCode: r } = this, a = e?.fields;
    if (!e || !a?.length) return null;
    const { subtypes: l, subtypeField: o } = e, p = l?.find((S) => S.code === r), h = p?.defaultValues, g = p?.domains, w = [];
    for (const S of a) {
      const d = S.clone(), { name: b } = d, m = t?.find((I) => I.name === b);
      if (d.visible = !t || !!m, m) {
        const { alias: I, editable: Z } = m;
        I && (d.alias = I), Z === !1 && (d.editable = !1);
      }
      const E = h?.[b] ?? null;
      d.defaultValue = b === o ? r : E;
      const T = g?.[b] ?? null;
      d.domain = b === o ? null : T ? T.type === "inherited" ? d.domain : T.clone() : null, w.push(d);
    }
    return w;
  }
  get floorInfo() {
    return this.parent?.floorInfo;
  }
  get geometryType() {
    return this.parent?.geometryType;
  }
  get effectiveScaleRange() {
    const { minScale: e, maxScale: t } = this;
    return { minScale: e, maxScale: t };
  }
  get objectIdField() {
    return this.parent || Y.getLogger(X).error(f("objectIdField")), this.parent?.objectIdField;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(e) {
    P(e, this.fieldsIndex), this._override("renderer", e);
  }
  get renderer() {
    if (this._isOverridden("renderer")) return this._get("renderer");
    const { parent: e } = this;
    return e && !e.isTable && e.geometryType !== "mesh" ? it(e.geometryType) : null;
  }
  readRendererFromService(e, t, r) {
    if (t.type === "Table") return null;
    const a = t.drawingInfo?.renderer, l = G(a, t, r);
    let o;
    const { subtypeCode: p } = this;
    if (p != null && nt(l, t.subtypeField)) {
      const h = l.uniqueValueInfos?.find(({ value: g }) => (g = typeof g == "number" ? String(g) : g) === String(p));
      h && (o = new x({ symbol: h.symbol }));
    } else l?.type !== "simple" || l.visualVariables?.length || (o = l);
    return o;
  }
  readRenderer(e, t, r) {
    const a = t?.layerDefinition?.drawingInfo?.renderer;
    return a ? a.visualVariables?.some((o) => o.type !== "rotationInfo") ? void 0 : G(a, t, r) || void 0 : void 0;
  }
  get spatialReference() {
    return this.parent?.spatialReference;
  }
  get subtypeField() {
    return this.parent?.subtypeField;
  }
  readTemplatesFromService(e, t) {
    return [at(this.subtypeCode, t)];
  }
  readTitleFromService(e, t) {
    const r = B(this.subtypeCode, t);
    return r != null ? r.name : null;
  }
  get url() {
    return this.parent?.url;
  }
  get userHasUpdateItemPrivileges() {
    return !!this.parent?.userHasUpdateItemPrivileges;
  }
  async addAttachment(e, t) {
    const { parent: r } = this;
    if (!r) throw f("addAttachment");
    if (e.getAttribute(r.subtypeField) !== this.subtypeCode) throw new c("subtype-sublayer:addAttachment", "The feature provided does not belong to this SubtypeSublayer");
    return r.addAttachment(e, t);
  }
  async updateAttachment(e, t, r) {
    const { parent: a } = this;
    if (!a) throw f("updateAttachment");
    if (e.getAttribute(a.subtypeField) !== this.subtypeCode) throw new c("subtype-sublayer:updateAttachment", "The feature provided does not belong to this SubtypeSublayer");
    return a.updateAttachment(e, t, r);
  }
  async deleteAttachments(e, t) {
    const { parent: r } = this;
    if (!r) throw f("deleteAttachments");
    if (e.getAttribute(r.subtypeField) !== this.subtypeCode) throw new c("subtype-sublayer:deleteAttachments", "The feature provided does not belong to this SubtypeSublayer");
    return r.deleteAttachments(e, t);
  }
  async applyEdits(e, t) {
    if (!this.parent) throw f("applyEdits");
    return this.parent.applyEdits(e, t);
  }
  createPopupTemplate(e) {
    let t = this;
    const { parent: r, fields: a, title: l } = this;
    if (r) {
      const { displayField: o, editFieldsInfo: p, objectIdField: h } = r;
      t = { displayField: o, editFieldsInfo: p, fields: a, objectIdField: h, title: l };
    }
    return K(t, e);
  }
  createQuery() {
    if (!this.parent) throw f("createQuery");
    const e = R(this.parent), t = `${this.parent.subtypeField}=${this.subtypeCode}`;
    return e.where = L(t, this.parent.definitionExpression), e;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e) {
    return this._getLayerDomain(e);
  }
  async queryAttachments(e, t) {
    const r = await this.load();
    if (!r.parent) throw f("queryAttachments");
    const a = e.clone();
    return a.where = V(a.where, r.parent.subtypeField, r.subtypeCode), r.parent.queryAttachments(e, t);
  }
  async queryFeatures(e, t) {
    const r = await this.load();
    if (!r.parent) throw f("queryFeatures");
    const a = k.from(e) ?? r.createQuery();
    return e != null && (a.where = V(a.where, r.parent.subtypeField, r.subtypeCode)), r.parent.queryFeatures(a, t);
  }
  _getLayerDomain(e) {
    const t = this.fieldsIndex.get(e);
    return t ? t.domain : null;
  }
};
i([s({ readOnly: !0, json: { read: !1 } })], n.prototype, "capabilities", null), i([s({ readOnly: !0, json: { read: !1 } })], n.prototype, "effectiveCapabilities", null), i([s({ json: { write: { ignoreOrigin: !0 } } })], n.prototype, "charts", void 0), i([s({ type: Boolean, nonNullable: !0, json: { name: "enableEditing", write: { ignoreOrigin: !0 } } })], n.prototype, "editingEnabled", void 0), i([s({ type: Boolean, readOnly: !0 })], n.prototype, "effectiveEditingEnabled", null), i([s({ readOnly: !0, json: { read: !1 } })], n.prototype, "elevationInfo", null), i([s({ json: { name: "layerDefinition.fieldOverrides", origins: { service: { read: !1 } }, write: { ignoreOrigin: !0, allowNull: !0 } } })], n.prototype, "fieldOverrides", void 0), i([ee("fieldOverrides")], n.prototype, "writeFieldOverrides", null), i([s({ ..._.fields, readOnly: !0, json: { read: !1 } })], n.prototype, "fields", null), i([s(_.fieldsIndex)], n.prototype, "fieldsIndex", void 0), i([s({ readOnly: !0, json: { read: !1 } })], n.prototype, "floorInfo", null), i([s({ type: te, json: { name: "formInfo", write: { ignoreOrigin: !0 } } })], n.prototype, "formTemplate", void 0), i([s({ type: String, clonable: !1, readOnly: !0, json: { origins: { service: { read: !1 }, "portal-item": { read: !1 } }, write: { ignoreOrigin: !0 } } })], n.prototype, "id", void 0), i([s({ readOnly: !0, json: { read: !1 } })], n.prototype, "geometryType", null), i([s({ readOnly: !0, json: { read: !1 } })], n.prototype, "type", void 0), i([s(F(v(re)))], n.prototype, "labelsVisible", void 0), i([s({ type: [ie], json: { name: "layerDefinition.drawingInfo.labelingInfo", origins: { service: { read: !1 } }, read: { reader: se }, write: { ignoreOrigin: !0 } } })], n.prototype, "labelingInfo", void 0), i([s({ type: ["ArcGISFeatureLayer"], readOnly: !0, json: { read: !1, write: { ignoreOrigin: !0 } } })], n.prototype, "layerType", void 0), i([s(F(v(ne)))], n.prototype, "legendEnabled", void 0), i([s({ type: ["show", "hide"] })], n.prototype, "listMode", void 0), i([s((() => {
  const e = v(ae);
  return e.json.origins.service.read = !1, F(e);
})())], n.prototype, "minScale", void 0), i([s((() => {
  const e = v(oe);
  return e.json.origins.service.read = !1, F(e);
})())], n.prototype, "maxScale", void 0), i([s({ readOnly: !0 })], n.prototype, "effectiveScaleRange", null), i([s({ readOnly: !0, json: { read: !1 } })], n.prototype, "objectIdField", null), i([s({ type: Number, range: { min: 0, max: 1 }, nonNullable: !0, json: { write: { ignoreOrigin: !0 } } })], n.prototype, "opacity", void 0), i([s({ clonable: !1 })], n.prototype, "parent", void 0), i([s(F(v(le)))], n.prototype, "popupEnabled", void 0), i([s({ type: ue, json: { name: "popupInfo", write: { ignoreOrigin: !0 } } })], n.prototype, "popupTemplate", void 0), i([s({ readOnly: !0 })], n.prototype, "defaultPopupTemplate", null), i([s({ types: H, json: { write: { target: "layerDefinition.drawingInfo.renderer", ignoreOrigin: !0 } } })], n.prototype, "renderer", null), i([$("service", "renderer", ["drawingInfo.renderer", "subtypeField", "type"])], n.prototype, "readRendererFromService", null), i([$("renderer", ["layerDefinition.drawingInfo.renderer"])], n.prototype, "readRenderer", null), i([s({ readOnly: !0, json: { read: !1 } })], n.prototype, "spatialReference", null), i([s({ type: Number, json: { origins: { service: { read: !1 } }, write: { ignoreOrigin: !0 } } })], n.prototype, "subtypeCode", void 0), i([s({ readOnly: !0, json: { read: !1 } })], n.prototype, "subtypeField", null), i([s({ type: [M], json: { name: "layerDefinition.templates", write: { ignoreOrigin: !0 } } })], n.prototype, "templates", void 0), i([$("service", "templates", ["geometryType", "subtypeField", "subtypes", "type"])], n.prototype, "readTemplatesFromService", null), i([s({ type: String, json: { write: { ignoreOrigin: !0 } } })], n.prototype, "title", void 0), i([$("service", "title", ["subtypes"])], n.prototype, "readTitleFromService", null), i([s({ readOnly: !0, json: { read: !1 } })], n.prototype, "url", null), i([s({ readOnly: !0 })], n.prototype, "userHasUpdateItemPrivileges", null), i([s({ type: Boolean, nonNullable: !0, json: { name: "visibility", write: { ignoreOrigin: !0 } } })], n.prototype, "visible", void 0), n = i([Q(X)], n);
const V = (e, t, r) => {
  const a = new RegExp(`${t}\\s*=\\s*\\d+`), l = `${t}=${r}`, o = e ?? "";
  return a.test(o) ? o.replace(a, l) : L(l, o);
}, f = (e) => new c(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`), j = n, y = "SubtypeGroupLayer", ot = "esri.layers.SubtypeGroupLayer";
function q(e, t) {
  return new c("layer:unsupported", `Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`, { layer: e });
}
const A = U();
let u = class extends fe(me(ve(we(Se(Fe($e(Ie(Oe(D(je(Ee(N(tt))))))))))))) {
  constructor(...e) {
    super(...e), this._sublayerLookup = /* @__PURE__ */ new Map(), this.fields = null, this.fieldsIndex = null, this.outFields = null, this.sublayers = new (C.ofType(j))(), this.timeInfo = null, this.title = "Layer", this.type = "subtype-group", this._debouncedSaveOperations = Te(async (t, r, a) => {
      const { save: l, saveAs: o } = await import("./featureLayerUtils-Bsj2XyAs.js");
      switch (t) {
        case O.SAVE:
          return l(this, r);
        case O.SAVE_AS:
          return o(this, a, r);
      }
    }), this.addHandles(Ae(() => this.sublayers, (t, r) => this._handleSublayersChange(t, r), Ce));
  }
  destroy() {
    this.source?.destroy();
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  load(e) {
    const t = e != null ? e.signal : null, r = this.loadFromPortal({ supportedTypes: ["Feature Service"] }, e).catch(xe).then(async () => {
      if (!this.url) throw new c("subtype-grouplayer:missing-url-or-source", "SubtypeGroupLayer must be created with either a url or a portal item");
      if (this.layerId == null) throw new c("subtype-grouplayer:missing-layerid", "layerId is required for a SubtypeGroupLayer created with url");
      return this._initLayerProperties(await this.createGraphicsSource(t));
    }).then(() => Le(this, "load", e));
    return this.addResolvingPromise(r), Promise.resolve(this);
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("gdbVersion"), this.commitProperty("historicMoment"), this.commitProperty("returnZ"), this.commitProperty("capabilities"), this.commitProperty("returnM"), (this._get("createQueryVersion") ?? 0) + 1;
  }
  get editingEnabled() {
    return this.loaded && this.capabilities != null && this.capabilities.operations.supportsEditing && this.userHasEditingPrivileges;
  }
  get effectiveEditingEnabled() {
    return Pe(this);
  }
  get parsedUrl() {
    const e = _e(this.url);
    return e != null && this.layerId != null && (e.path = Ge(e.path, this.layerId.toString())), e;
  }
  set source(e) {
    this._get("source") !== e && this._set("source", e);
  }
  readTitleFromService(e, { name: t }) {
    return this.url ? Ve(this.url, t) : t;
  }
  async addAttachment(e, t) {
    return qe(this, e, t, y);
  }
  async updateAttachment(e, t, r) {
    return De(this, e, t, r, y);
  }
  async applyEdits(e, t) {
    return Ne(this, e, t);
  }
  on(e, t) {
    return super.on(e, t);
  }
  async createGraphicsSource(e) {
    const { default: t } = await Re(import("./FeatureLayerSource-DcTh9HCA.js"), e);
    return new t({ layer: this }).load({ signal: e });
  }
  createQuery() {
    const e = R(this), t = this.sublayers.map((r) => r.subtypeCode);
    return e.where = L(`${this.subtypeField} IN (${t.join(",")})`, this.definitionExpression), e;
  }
  async deleteAttachments(e, t) {
    return ke(this, e, t, y);
  }
  async fetchRecomputedExtents(e) {
    return Me(this, e, y);
  }
  findSublayerForFeature(e) {
    const t = this.fieldsIndex.get(this.subtypeField), r = e.attributes[t.name];
    return this.findSublayerForSubtypeCode(r);
  }
  findSublayerForSubtypeCode(e) {
    return this._sublayerLookup.get(e);
  }
  getFieldDomain(e, t) {
    return this._getLayerDomain(e);
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  loadAll() {
    return Qe(this, (e) => {
      e(this.sublayers);
    });
  }
  async queryAttachments(e, t) {
    return Ue(this, e, t, y);
  }
  async queryFeatures(e, t) {
    const r = await this.load(), a = k.from(e) ?? r.createQuery(), l = a.outFields ?? [];
    l.includes(this.subtypeField) || (l.push(this.subtypeField), a.outFields = l);
    const o = await r.source.queryFeatures(a, t);
    if (o?.features) for (const p of o.features) p.layer = p.sourceLayer = this.findSublayerForFeature(p);
    return o;
  }
  async queryObjectIds(e, t) {
    return He(this, e, t, y);
  }
  async queryFeatureCount(e, t) {
    return Be(this, e, t, y);
  }
  async queryExtent(e, t) {
    return Xe(this, e, t, y);
  }
  async queryRelatedFeatures(e, t) {
    return Ze(this, e, t, y);
  }
  async queryRelatedFeaturesCount(e, t) {
    return Je(this, e, t, y);
  }
  async save(e) {
    return this._debouncedSaveOperations(O.SAVE, e);
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(O.SAVE_AS, t, e);
  }
  write(e, t) {
    const { origin: r, layerContainerType: a, messages: l } = t;
    if (this.isTable) {
      if (r === "web-scene" || r === "web-map" && a !== "tables") return l?.push(q(this, "using a table source cannot be written to web scenes and web maps")), null;
    } else if (this.loaded && r === "web-map" && a === "tables") return l?.push(q(this, "using a non-table source cannot be written to tables in web maps")), null;
    return this.sublayers?.length ? super.write(e, t) : (l?.push(new c("web-document-write:invalid-property", `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`, { layer: this })), null);
  }
  serviceSupportsSpatialReference(e) {
    return !!this.loaded && We(this, e);
  }
  _getLayerDomain(e) {
    const t = this.fieldsIndex.get(e);
    return t ? t.domain : null;
  }
  async _initLayerProperties(e) {
    this._set("source", e);
    const { sourceJSON: t } = e;
    if (t && (this.sourceJSON = t, this.read(t, { origin: "service", url: this.parsedUrl })), this.isTable) throw new c("subtype-grouplayer:unsupported-source", "SubtypeGroupLayer cannot be created using a layer with table source");
    if (!this.subtypes?.length) throw new c("subtype-grouplayer:missing-subtypes", "SubtypeGroupLayer must be created using a layer with subtypes");
    this._verifyFields(), ze(this.timeInfo, this.fieldsIndex);
  }
  async hasDataChanged() {
    return Ye(this);
  }
  _verifyFields() {
    const e = this.parsedUrl?.path ?? "undefined";
    this.objectIdField || console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: " + e + ")"), this.isTable || e.search(/\/FeatureServer\//i) !== -1 || this.fields?.some((t) => t.type === "geometry") || console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: " + e + ")");
  }
  _handleSublayersChange(e, t) {
    t && (t.forEach((r) => {
      r.parent = null;
    }), this.removeHandles("sublayers-owner"), this._sublayerLookup.clear()), e && (e.forEach((r) => {
      r.parent = this, this._sublayerLookup.set(r.subtypeCode, r);
    }), this.addHandles([e.on("after-add", ({ item: r }) => {
      r.parent = this, this._sublayerLookup.set(r.subtypeCode, r);
    }), e.on("after-remove", ({ item: r }) => {
      r.parent = null, this._sublayerLookup.delete(r.subtypeCode);
    })], "sublayers-owner"));
  }
};
i([s({ readOnly: !0 })], u.prototype, "createQueryVersion", null), i([s({ readOnly: !0 })], u.prototype, "editingEnabled", null), i([s({ readOnly: !0 })], u.prototype, "effectiveEditingEnabled", null), i([s({ ...A.fields, readOnly: !0, json: { origins: { service: { read: !0 } }, read: !1 } })], u.prototype, "fields", void 0), i([s(A.fieldsIndex)], u.prototype, "fieldsIndex", void 0), i([s(Ke)], u.prototype, "id", void 0), i([s({ type: ["show", "hide", "hide-children"], json: { origins: { "portal-item": { read: !1, write: !1 } } } })], u.prototype, "listMode", void 0), i([s({ value: "SubtypeGroupLayer", type: ["SubtypeGroupLayer"], json: { origins: { "portal-item": { name: "layerType", write: { enabled: !0, ignoreOrigin: !0 } } } } })], u.prototype, "operationalLayerType", void 0), i([s(A.outFields)], u.prototype, "outFields", void 0), i([s({ readOnly: !0 })], u.prototype, "parsedUrl", null), i([s({ clonable: !1 })], u.prototype, "source", null), i([s({ type: C.ofType(j), json: { origins: { service: { read: { source: "subtypes", reader: (e, t, r) => {
  const a = e.map(({ code: l }) => {
    const o = new j({ subtypeCode: l });
    return o.read(t, r), o;
  });
  return new (C.ofType(j))(a);
} } } }, name: "layers", write: { ignoreOrigin: !0 } } })], u.prototype, "sublayers", void 0), i([s({ type: et })], u.prototype, "timeInfo", void 0), i([s({ json: { origins: { "portal-item": { write: { enabled: !0, ignoreOrigin: !0, writerEnsuresNonNull: !0 } } } } })], u.prototype, "title", void 0), i([$("service", "title", ["name"])], u.prototype, "readTitleFromService", null), i([s({ json: { read: !1 } })], u.prototype, "type", void 0), u = i([Q(ot)], u);
const ut = u;
export {
  ut as default
};
//# sourceMappingURL=SubtypeGroupLayer-DO59YlQg.js.map
