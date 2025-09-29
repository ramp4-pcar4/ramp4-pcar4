import { pA as Bt, k_ as ei, A as Ae, y as Ne, ay as Vi, aZ as Bi, aY as Is, B as ti, al as Cs, o9 as As, C as q, cN as $s, cO as Di, pB as ii, pC as nt, V as Se, cx as Es, N as o, O as a, jc as Ve, ap as Be, P, dU as ue, U as g, X as L, s as k, pD as si, hX as xs, jA as K, jB as J, b2 as $e, jC as De, jD as u, pE as F, pF as ni, pG as ri, pH as Ee, pI as te, pJ as Ts, kG as ks, pK as qi, ax as zi, pL as Ls, pM as ke, pN as Dt, c1 as Rs, gP as Ps, dQ as xe, lZ as Os, f5 as mt, f6 as ft, d5 as Ns, a2 as Ss, fM as kt, b6 as ct, pO as Vs, pP as Bs, en as Ds, pQ as qs, a6 as qt, pR as zs, pS as Wi, pT as Ws, pU as oi, dS as Hs, dT as Hi, k5 as gt, S as Je, b5 as js, f3 as ji, nV as Us, K as Lt, cR as Zs, T as rt, ep as Gs, pV as Qs, pW as Xs, pX as ge, af as Ui, pY as Ys, pZ as Ks, p_ as yt, p$ as Js, q0 as en, q1 as tn, q2 as Ge, q3 as Zi, ff as sn, q4 as nn, e7 as rn, b9 as on, fi as an, eO as ln, dG as dn, e8 as ai, mN as Le, gp as cn } from "./main-DhLeoxL5.js";
import { s as oe } from "./substitute-CGsbTq6a.js";
import { Z as un, N as Gi } from "./utils-2PdlyWkh.js";
function ot(t, e, i, s) {
  let n = null, r = 1e3;
  typeof e == "number" ? (r = e, s = i) : (n = e ?? null, r = i);
  let l, d = 0;
  const c = () => {
    d = 0, t.apply(s, l);
  }, h = (...p) => {
    n && n.apply(s, p), l = p, r ? d || (d = setTimeout(c, r)) : c();
  };
  return h.remove = () => {
    d && (clearTimeout(d), d = 0);
  }, h.forceUpdate = () => {
    d && (clearTimeout(d), c());
  }, h.hasPendingUpdates = () => !!d, h;
}
function Rt(t) {
  switch (t?.type) {
    case "point":
      return t;
    case "extent":
      return t.center;
    case "polygon":
      return t.centroid;
    case "multipoint":
    case "polyline":
      return t.extent?.center;
    default:
      return null;
  }
}
function hn(t) {
  return t ? { backgroundImage: `url(${t})` } : {};
}
function pn({ action: t, feature: e }) {
  const i = e?.attributes, s = "image" in t ? t.image : void 0;
  return s && i ? oe(s, i) : s ?? "";
}
function mn(t, e) {
  return { type: Bt(e), value: t, unit: e };
}
function fn(t, e) {
  return { type: Bt(e), value: t, unit: e };
}
function zt(t, e, i = "arithmetic") {
  return { type: Bt(e), value: t, unit: e, rotationType: i };
}
mn(0, "meters");
fn(0, "square-meters");
zt(0, "radians");
zt(0, "degrees");
zt(0, "degrees", "geographic");
const li = ["B", "kB", "MB", "GB", "TB"];
function gn(t, e) {
  let i = (e = Math.round(e)) === 0 ? 0 : Math.floor(Math.log(e) / Math.log(ei.KILOBYTES));
  i = Vi(i, 0, li.length - 1);
  const s = Ae(e / ei.KILOBYTES ** i, { maximumFractionDigits: 2 });
  return Ne(t.units.bytes[li[i]], { fileSize: s });
}
const yn = "esri.widgets.Feature.support.featureUtils", di = () => q.getLogger(yn), vn = /href=(""|'')/gi, _n = /(\{([^\{\r\n]+)\})/g, wn = /\'/g, Qi = /^\s*expression\//i, bn = /(\n)/gi, Mn = /[\u00A0-\u9999<>\&]/gim, Fn = /href\s*=\s*(?:\"([^\"]+)\"|\'([^\']+)\')/gi, In = /^(?:mailto:|tel:)/, Xi = "relationships/", ci = Bi("short-date-short-time");
function Yi(t) {
  if (t != null) return (t.sourceLayer || t.layer) ?? void 0;
}
async function at(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ki(t = "") {
  if (t) return !In.test(t.trim().toLowerCase());
}
function Wt(t) {
  return !!t && Qi.test(t);
}
function Cn(t, e) {
  if (!Wt(e) || !t) return;
  const i = e.replace(Qi, "").toLowerCase();
  return t.find(({ name: s }) => s.toLowerCase() === i);
}
function Ji(t, e) {
  const i = Cn(e, t?.fieldName);
  return i ? i.title || null : t ? t.label || t.fieldName : null;
}
function An(t, e) {
  return `{${e.get(t.toLowerCase())?.fieldName || t}}`;
}
function $n(t) {
  return t.replaceAll(vn, "");
}
function Ze(t, e) {
  const i = Ht(e, t);
  return i ? i.name : t;
}
function En(t, e) {
  return t && t.map((i) => Ze(i, e));
}
function Ht(t, e) {
  return t && typeof t.getField == "function" && e ? t.getField(e) ?? null : null;
}
function es(t) {
  return `${t}`.trim();
}
function Me({ attributes: t, globalAttributes: e, layer: i, text: s, expressionAttributes: n, fieldInfoMap: r }) {
  return s ? Pt({ formattedAttributes: e, template: Ln(s, { ...e, ...n, ...t }, i), fieldInfoMap: r }) : "";
}
function Pt({ formattedAttributes: t, template: e, fieldInfoMap: i }) {
  return es($n(Ne(Ne(e, (s) => An(s, i)), t)));
}
function xn(t, e, i = !1) {
  const s = e[t];
  if (typeof s == "string") {
    const n = "%27", r = (i ? encodeURIComponent(s) : s).replaceAll(wn, n);
    e[t] = r;
  }
}
function Tn(t, e = !1) {
  const i = { ...t };
  return Object.keys(i).forEach((s) => xn(s, i, e)), i;
}
function kn(t, e, i) {
  const s = (e = es(e)) && e[0] !== "{";
  return Ne(t, Tn(i, s || !1));
}
function Ot(t, e) {
  return t.replaceAll(_n, (i, s, n) => {
    const r = Ht(e, n);
    return r ? `{${r.name}}` : s;
  });
}
function Ln(t, e, i) {
  const s = Ot(t, i);
  return s && s.replaceAll(Fn, (n, r, l) => kn(n, r || l, e));
}
function Rn(t, e) {
  if (typeof t == "string" && e && e.dateFormat == null && (e.places != null || e.digitSeparator != null)) {
    const i = Number(t);
    if (!isNaN(i)) return i;
  }
  return t;
}
function Pn(t) {
  return t != null && typeof t == "object" && "fieldsIndex" in t && "geometryType" in t && "getField" in t && "load" in t && "loaded" in t && "objectIdField" in t && "spatialReference" in t && "type" in t && (t.type === "feature" || t.type === "scene") && "when" in t;
}
function On(t) {
  return t != null && typeof t == "object" && "createQuery" in t && "queryFeatureCount" in t && "queryObjectIds" in t && "queryRelatedFeatures" in t && "queryRelatedFeaturesCount" in t && "relationships" in t;
}
function ts(t) {
  return Pn(t) && On(t);
}
function Nn(t, e) {
  const { fieldInfos: i, fieldName: s, preventPlacesFormatting: n, layer: r, timeZone: l } = e, d = is(i, s), c = Ht(r, s);
  if (d && !ii(s)) {
    const p = c?.type, m = d.format?.dateFormat;
    if (p === "date" || p === "date-only" || p === "time-only" || p === "timestamp-offset" || m) return Gi(t, { format: m, fieldType: p, timeZoneOptions: { layerTimeZone: r && "preferredTimeZone" in r ? r.preferredTimeZone : null, viewTimeZone: l, datesInUnknownTimezone: !(!r || !("datesInUnknownTimezone" in r)) && !!r.datesInUnknownTimezone } });
  }
  const h = d?.format;
  return typeof t == "string" && ii(s) && h ? Sn(t, h) : typeof (t = Rn(t, h)) == "string" || t == null || h == null ? Qe(t) : Ae(t, n ? { ...nt(h), minimumFractionDigits: 0, maximumFractionDigits: 20 } : nt(h));
}
function Sn(t, e) {
  return t = t.trim(), /\d{2}-\d{2}/.test(t) ? t : t.includes(",") ? vt(t, ",", ", ", e) : t.includes(";") ? vt(t, ";", "; ", e) : t.includes(" ") ? vt(t, " ", " ", e) : Ae(Number(t), nt(e));
}
function vt(t, e, i, s) {
  return t.trim().split(e).map((n) => Ae(Number(n), nt(s))).join(i);
}
function is(t, e) {
  if (t?.length && e) return t.find((i) => i.fieldName?.toLowerCase() === e.toLowerCase());
}
function Vn({ fieldName: t, graphic: e, layer: i }) {
  if (ce(t) || !i || typeof i.getFeatureType != "function") return null;
  const { typeIdField: s } = i;
  if (!s || t !== s) return null;
  const n = i.getFeatureType(e);
  return n ? n.name : null;
}
function Bn({ fieldName: t, value: e, graphic: i, layer: s }) {
  if (ce(t) || !s || typeof s.getFieldDomain != "function") return null;
  const n = i && s.getFieldDomain(t, { feature: i });
  return n && n.type === "coded-value" ? n.getName(e) : null;
}
function Dn(t, e, i, s) {
  const { creatorField: n, creationDateField: r, editorField: l, editDateField: d } = t;
  if (!e) return;
  const c = Is(s && "preferredTimeZone" in s ? s.preferredTimeZone : null, !(!s || !("datesInUnknownTimezone" in s)) && !!s.datesInUnknownTimezone, i, ci, "date"), h = { ...ci, ...c }, p = e[d];
  if (typeof p == "number") {
    const f = e[l];
    return { type: "edit", date: ti(p, h), user: f };
  }
  const m = e[r];
  if (typeof m == "number") {
    const f = e[n];
    return { type: "create", date: ti(m, h), user: f };
  }
  return null;
}
function qn(t, e) {
  const i = /* @__PURE__ */ new Map();
  return t && t.forEach((s) => {
    const n = Ze(s.fieldName, e);
    s.fieldName = n, i.set(n.toLowerCase(), s);
  }), i;
}
function ui(t) {
  const e = [];
  if (!t) return e;
  const { fieldInfos: i, content: s } = t;
  return i && e.push(...i), s && Array.isArray(s) && s.forEach((n) => {
    if (n.type === "fields") {
      const r = n?.fieldInfos;
      r && e.push(...r);
    }
  }), e;
}
function jt(t) {
  return t.replaceAll(Mn, (e) => `&#${e.charCodeAt(0)};`);
}
function Qe(t) {
  return typeof t == "string" ? t.replaceAll(bn, '<br class="esri-text-new-line" />') : t;
}
function ss(t) {
  const { value: e, fieldName: i, fieldInfos: s, fieldInfoMap: n, layer: r, graphic: l, timeZone: d } = t;
  if (e == null) return "";
  const c = Bn({ fieldName: i, value: e, graphic: l, layer: r });
  if (c) return c;
  const h = Vn({ fieldName: i, graphic: l, layer: r });
  if (h) return h;
  if (n.get(i.toLowerCase())) return Nn(e, { fieldInfos: s || Array.from(n.values()), fieldName: i, layer: r, timeZone: d });
  const p = r?.fieldsIndex?.get(i);
  return p && (un(p) || $s(p)) ? Gi(e, { fieldType: p.type, timeZoneOptions: { layerTimeZone: r && "preferredTimeZone" in r ? r.preferredTimeZone : null, viewTimeZone: d, datesInUnknownTimezone: !(!r || !("datesInUnknownTimezone" in r)) && !!r.datesInUnknownTimezone } }) : Qe(e);
}
function _t({ fieldInfos: t, attributes: e, layer: i, graphic: s, fieldInfoMap: n, relatedInfos: r, timeZone: l }) {
  const d = {};
  return r?.forEach((c) => jn({ attributes: d, relatedInfo: c, fieldInfoMap: n, fieldInfos: t, layer: i, timeZone: l })), e && Object.keys(e).forEach((c) => {
    const h = e[c];
    d[c] = ss({ fieldName: c, fieldInfos: t, fieldInfoMap: n, layer: i, value: h, graphic: s, timeZone: l });
  }), d;
}
async function ns(t, e) {
  const { layer: i, graphic: s, outFields: n, objectIds: r, returnGeometry: l, spatialReference: d } = t, c = r[0];
  if (typeof c != "number" && typeof c != "string") {
    const p = "Could not query required fields for the specified feature. The feature's ID is invalid.", m = { layer: i, graphic: s, objectId: c, requiredFields: n };
    return di().warn(p, m), null;
  }
  if (!Cs(i)?.operations?.supportsQuery) {
    const p = "The specified layer cannot be queried. The following fields will not be available.", m = { layer: i, graphic: s, requiredFields: n, returnGeometry: l };
    return di().warn(p, m), null;
  }
  const h = i.createQuery();
  return h.objectIds = r, h.outFields = n?.length ? n : [i.objectIdField], h.returnGeometry = !!l, h.returnZ = !!l, h.returnM = !!l, h.outSpatialReference = d, (await i.queryFeatures(h, e)).features[0];
}
async function zn(t) {
  if (!t.expressionInfos?.length) return !1;
  const e = await Di(), { arcadeUtils: { hasGeometryFunctions: i } } = e;
  return i(t);
}
async function Wn({ graphic: t, popupTemplate: e, layer: i, spatialReference: s }, n) {
  if (!i || !e || (typeof i.load == "function" && await i.load(n), !t.attributes)) return;
  const r = t.attributes[i.objectIdField];
  if (r == null) return;
  const l = [r], d = await e.getRequiredFields(i.fieldsIndex), c = As(d, t), h = c ? [] : d, p = e.returnGeometry || await zn(e);
  if (c && !p) return;
  const m = await ns({ layer: i, graphic: t, outFields: h, objectIds: l, returnGeometry: p, spatialReference: s }, n);
  m && (m.geometry && (t.geometry = m.geometry), m.attributes && (t.attributes = { ...t.attributes, ...m.attributes }));
}
function ce(t = "") {
  return !!t && t.includes(Xi);
}
function Hn(t) {
  return t ? `${Xi}${t.layerId}/${t.fieldName}` : "";
}
function hi({ attributes: t, graphic: e, relatedInfo: i, fieldInfos: s, fieldInfoMap: n, layer: r, timeZone: l }) {
  t && e && i && Object.keys(e.attributes).forEach((d) => {
    const c = Hn({ layerId: i.relation.id.toString(), fieldName: d }), h = e.attributes[d];
    t[c] = ss({ fieldName: c, fieldInfos: s, fieldInfoMap: n, layer: r, value: h, graphic: e, timeZone: l });
  });
}
function jn({ attributes: t, relatedInfo: e, fieldInfoMap: i, fieldInfos: s, layer: n, timeZone: r }) {
  t && e && (e.relatedFeatures?.forEach((l) => hi({ attributes: t, graphic: l, relatedInfo: e, fieldInfoMap: i, fieldInfos: s, layer: n, timeZone: r })), e.relatedStatsFeatures?.forEach((l) => hi({ attributes: t, graphic: l, relatedInfo: e, fieldInfoMap: i, fieldInfos: s, layer: n, timeZone: r })));
}
const pi = (t) => {
  if (!t) return !1;
  const e = t.toUpperCase();
  return e.includes("CURRENT_TIMESTAMP") || e.includes("CURRENT_DATE") || e.includes("CURRENT_TIME");
}, rs = ({ layer: t, method: e, query: i, definitionExpression: s }) => {
  if (!t.capabilities?.query?.supportsCacheHint || e === "attachments") return;
  const n = i.where != null ? i.where : null, r = i.geometry != null ? i.geometry : null;
  pi(s) || pi(n) || r?.type === "extent" || i.resultType === "tile" || (i.cacheHint = !0);
}, Un = ({ query: t, layer: e, method: i }) => {
  rs({ layer: e, method: i, query: t, definitionExpression: `${e.definitionExpression} ${e.serviceDefinitionExpression}` });
}, Zn = ({ queryPayload: t, layer: e, method: i }) => {
  rs({ layer: e, method: i, query: t, definitionExpression: `${e.definitionExpression} ${e.serviceDefinitionExpression}` });
};
function Gn(t, e, i) {
  return t && e && i ? mi(t.allLayers, e, i) || mi(t.allTables, e, i) : null;
}
function mi(t, e, { relatedTableId: i }) {
  const s = e.type === "scene" && e.associatedLayer ? e.associatedLayer.url : e.url;
  return t.filter(ts).find((n) => n !== e && n.url === s && n.layerId === i);
}
const fi = { editing: !1, operations: { add: !0, update: !0, delete: !0 } }, os = Se.ofType(Es);
let Q = class extends ue {
  constructor(e) {
    super(e), this._getAttachmentsPromise = null, this._attachmentLayer = null, this.capabilities = { ...fi }, this.activeAttachmentInfo = null, this.activeFileInfo = null, this.attachmentInfos = new os(), this.fileInfos = new Se(), this.graphic = null, this.mode = "view", this.filesEnabled = !1, this.addHandles(g(() => this.graphic, () => this._graphicChanged(), L));
  }
  destroy() {
    this._attachmentLayer = null, this.graphic = null;
  }
  castCapabilities(e) {
    return { ...fi, ...e };
  }
  get state() {
    return this._getAttachmentsPromise ? "loading" : this.graphic ? "ready" : "disabled";
  }
  get supportsResizeAttachments() {
    const { graphic: e } = this;
    if (!e) return !1;
    const i = e.layer || e.sourceLayer;
    return i?.loaded && "capabilities" in i && i.capabilities && "operations" in i.capabilities && "supportsResizeAttachments" in i.capabilities.operations && i.capabilities.operations.supportsResizeAttachments || !1;
  }
  async getAttachments() {
    const { _attachmentLayer: e, attachmentInfos: i } = this;
    if (!e || typeof e.queryAttachments != "function") throw new k("invalid-layer", "getAttachments(): A valid layer is required.");
    const s = this._getObjectId(), n = new si({ objectIds: [s], returnMetadata: !0 }), r = [], l = e.queryAttachments(n).then((c) => c[s] || r).catch(() => r);
    this._getAttachmentsPromise = l, this.notifyChange("state");
    const d = await l;
    return i.removeAll(), d.length && i.addMany(d), this._getAttachmentsPromise = null, this.notifyChange("state"), d;
  }
  async addAttachment(e, i = this.graphic) {
    const { _attachmentLayer: s, attachmentInfos: n, capabilities: r } = this;
    if (!i) throw new k("invalid-graphic", "addAttachment(): A valid graphic is required.", { graphic: i });
    if (!e) throw new k("invalid-attachment", "addAttachment(): An attachment is required.", { attachment: e });
    if (!r.operations?.add) throw new k("invalid-capabilities", "addAttachment(): add capabilities are required.");
    if (!s || typeof s.addAttachment != "function") throw new k("invalid-layer", "addAttachment(): A valid layer is required.");
    const l = s.addAttachment(i, e).then((c) => this._queryAttachment(c.objectId, i)), d = await l;
    return n.add(d), d;
  }
  async deleteAttachment(e) {
    const { _attachmentLayer: i, attachmentInfos: s, graphic: n, capabilities: r } = this;
    if (!e) throw new k("invalid-attachment-info", "deleteAttachment(): An attachmentInfo is required.", { attachmentInfo: e });
    if (!r.operations?.delete) throw new k("invalid-capabilities", "deleteAttachment(): delete capabilities are required.");
    if (!i || typeof i.deleteAttachments != "function") throw new k("invalid-layer", "deleteAttachment(): A valid layer is required.");
    if (!n) throw new k("invalid-graphic", "deleteAttachment(): A graphic is required.");
    const l = i.deleteAttachments(n, [e.id]).then(() => e), d = await l;
    return s.remove(d), d;
  }
  async updateAttachment(e, i = this.activeAttachmentInfo) {
    const { _attachmentLayer: s, attachmentInfos: n, graphic: r, capabilities: l } = this;
    if (!e) throw new k("invalid-attachment", "updateAttachment(): An attachment is required.", { attachment: e });
    if (!i) throw new k("invalid-attachment-info", "updateAttachment(): An attachmentInfo is required.", { attachmentInfo: i });
    if (!l.operations?.update) throw new k("invalid-capabilities", "updateAttachment(): Update capabilities are required.");
    const d = n.indexOf(i);
    if (!s || typeof s.updateAttachment != "function") throw new k("invalid-layer", "updateAttachment(): A valid layer is required.");
    if (!r) throw new k("invalid-graphic", "updateAttachment(): A graphic is required.");
    const c = s.updateAttachment(r, i.id, e).then((p) => this._queryAttachment(p.objectId)), h = await c;
    return n.splice(d, 1, h), h;
  }
  async commitFiles() {
    return await Promise.all(this.fileInfos.items.map((e) => this.addAttachment(e.form))), this.fileInfos.removeAll(), this.getAttachments();
  }
  addFile(e, i) {
    if (!e || !i) return null;
    const s = { file: e, form: i };
    return this.fileInfos.add(s), s;
  }
  updateFile(e, i, s = this.activeFileInfo) {
    if (!e || !i || !s) return null;
    const n = this.fileInfos.indexOf(s);
    return n > -1 && this.fileInfos.splice(n, 1, { file: e, form: i }), this.fileInfos.items[n];
  }
  deleteFile(e) {
    const i = this.fileInfos.find((s) => s.file === e);
    return i ? (this.fileInfos.remove(i), i) : null;
  }
  async _queryAttachment(e, i) {
    const { _attachmentLayer: s } = this;
    if (!e || !s?.queryAttachments) throw new k("invalid-attachment-id", "Could not query attachment.");
    const n = this._getObjectId(i), r = new si({ objectIds: [n], attachmentsWhere: `AttachmentId=${e}`, returnMetadata: !0 });
    return s.queryAttachments(r).then((l) => l[n][0]);
  }
  _getObjectId(e = this.graphic) {
    return e?.getObjectId() ?? null;
  }
  _graphicChanged() {
    this.graphic && (this._setAttachmentLayer(), this.getAttachments().catch(() => {
    }));
  }
  _setAttachmentLayer() {
    const { graphic: e } = this, i = Yi(e);
    this._attachmentLayer = i ? i.type === "scene" && i.associatedLayer != null ? i.associatedLayer : i : null;
  }
};
o([a()], Q.prototype, "capabilities", void 0), o([Ve("capabilities")], Q.prototype, "castCapabilities", null), o([a()], Q.prototype, "activeAttachmentInfo", void 0), o([a()], Q.prototype, "activeFileInfo", void 0), o([a({ readOnly: !0, type: os })], Q.prototype, "attachmentInfos", void 0), o([a()], Q.prototype, "fileInfos", void 0), o([a({ type: Be })], Q.prototype, "graphic", void 0), o([a()], Q.prototype, "mode", void 0), o([a({ readOnly: !0 })], Q.prototype, "state", null), o([a()], Q.prototype, "filesEnabled", void 0), o([a({ readOnly: !0 })], Q.prototype, "supportsResizeAttachments", null), Q = o([P("esri.widgets.Attachments.AttachmentsViewModel")], Q);
const Ut = Q;
function gi(t) {
  const e = t.toLowerCase();
  return e === "image/bmp" || e === "image/emf" || e === "image/exif" || e === "image/gif" || e === "image/x-icon" || e === "image/jpeg" || e === "image/png" || e === "image/tiff" || e === "image/x-wmf";
}
function Qn(t) {
  const e = xs("esri/themes/base/images/files/");
  return t ? t === "text/plain" ? `${e}text-32.svg` : t === "application/pdf" ? `${e}pdf-32.svg` : t === "text/csv" ? `${e}csv-32.svg` : t === "application/gpx+xml" ? `${e}gpx-32.svg` : t === "application/x-dwf" ? `${e}cad-32.svg` : t === "application/postscript" || t === "application/json" || t === "text/xml" || t === "model/vrml" ? `${e}code-32.svg` : t === "application/x-zip-compressed" || t === "application/x-7z-compressed" || t === "application/x-gzip" || t === "application/x-tar" || t === "application/x-gtar" || t === "application/x-bzip2" || t === "application/gzip" || t === "application/x-compress" || t === "application/x-apple-diskimage" || t === "application/x-rar-compressed" || t === "application/zip" ? `${e}zip-32.svg` : t.includes("image/") ? `${e}image-32.svg` : t.includes("audio/") ? `${e}sound-32.svg` : t.includes("video/") ? `${e}video-32.svg` : t.includes("msexcel") || t.includes("ms-excel") || t.includes("spreadsheetml") ? `${e}excel-32.svg` : t.includes("msword") || t.includes("ms-word") || t.includes("wordprocessingml") ? `${e}word-32.svg` : t.includes("powerpoint") || t.includes("presentationml") ? `${e}report-32.svg` : `${e}generic-32.svg` : `${e}generic-32.svg`;
}
const yi = { addButton: !0, addSubmitButton: !0, cancelAddButton: !0, cancelUpdateButton: !0, deleteButton: !0, errorMessage: !0, progressBar: !0, updateButton: !0 }, $ = "esri-attachments", b = { base: $, loaderContainer: `${$}__loader-container`, loader: `${$}__loader`, fadeIn: `${$}--fade-in`, container: `${$}__container`, containerList: `${$}__container--list`, containerPreview: `${$}__container--preview`, actions: `${$}__actions`, deleteButton: `${$}__delete-button`, addAttachmentButton: `${$}__add-attachment-button`, errorMessage: `${$}__error-message`, items: `${$}__items`, item: `${$}__item`, itemButton: `${$}__item-button`, itemMask: `${$}__item-mask`, itemMaskIcon: `${$}__item-mask--icon`, itemImage: `${$}__image`, itemImageResizable: `${$}__image--resizable`, itemLabel: `${$}__label`, itemFilename: `${$}__filename`, itemChevronIcon: `${$}__item-chevron-icon`, itemLink: `${$}__item-link`, itemLinkOverlay: `${$}__item-link-overlay`, itemLinkOverlayIcon: `${$}__item-link-overlay-icon`, itemEditIcon: `${$}__item-edit-icon`, itemAddIcon: `${$}__item-add-icon`, itemAddButton: `${$}__item-add-button`, formNode: `${$}__form-node`, fileFieldset: `${$}__file-fieldset`, fileLabel: `${$}__file-label`, fileName: `${$}__file-name`, fileInput: `${$}__file-input`, metadata: `${$}__metadata`, metadataFieldset: `${$}__metadata-fieldset`, progressBar: `${$}__progress-bar` }, wt = window.CSS;
let j = class extends J {
  constructor(e, i) {
    super(e, i), this.displayType = "auto", this.messages = null, this.messagesUnits = null, this.selectedFile = null, this.submitting = !1, this.viewModel = null, this.visibleElements = { ...yi }, this._supportsImageOrientation = wt && wt.supports && wt.supports("image-orientation", "from-image"), this._addAttachmentForm = null, this._updateAttachmentForm = null;
  }
  normalizeCtorArgs(e) {
    return e?.viewModel || (e = { viewModel: new Ut(), ...e }), e;
  }
  initialize() {
    this.addHandles([$e(() => this.viewModel?.attachmentInfos, "change", () => this.scheduleRender()), $e(() => this.viewModel?.fileInfos, "change", () => this.scheduleRender()), g(() => this.viewModel?.mode, () => this._modeChanged(), L)]);
  }
  loadDependencies() {
    return De({ icon: () => import("./calcite-icon-B2sYQpao.js") });
  }
  get capabilities() {
    return this.viewModel.capabilities;
  }
  set capabilities(e) {
    this.viewModel.capabilities = e;
  }
  get effectiveDisplayType() {
    const { displayType: e } = this;
    return e && e !== "auto" ? e : this.viewModel.supportsResizeAttachments ? "preview" : "list";
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e) {
    this.viewModel.graphic = e;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e) {
    this._overrideIfSome("label", e);
  }
  castVisibleElements(e) {
    return { ...yi, ...e };
  }
  addAttachment() {
    const { _addAttachmentForm: e, viewModel: i } = this;
    return this._set("submitting", !0), this._set("error", null), i.addAttachment(e).then((s) => (this._set("submitting", !1), this._set("error", null), i.mode = "view", s)).catch((s) => {
      throw this._set("submitting", !1), this._set("error", new k("attachments:add-attachment", this.messages.addErrorMessage, s)), s;
    });
  }
  deleteAttachment(e) {
    const { viewModel: i } = this;
    return this._set("submitting", !0), this._set("error", null), i.deleteAttachment(e).then((s) => (this._set("submitting", !1), this._set("error", null), i.mode = "view", s)).catch((s) => {
      throw this._set("submitting", !1), this._set("error", new k("attachments:delete-attachment", this.messages.deleteErrorMessage, s)), s;
    });
  }
  updateAttachment() {
    const { viewModel: e } = this, { _updateAttachmentForm: i } = this;
    return this._set("submitting", !0), this._set("error", null), e.updateAttachment(i).then((s) => (this._set("submitting", !1), this._set("error", null), e.mode = "view", s)).catch((s) => {
      throw this._set("submitting", !1), this._set("error", new k("attachments:update-attachment", this.messages.updateErrorMessage, s)), s;
    });
  }
  addFile() {
    const e = this.viewModel.addFile(this.selectedFile, this._addAttachmentForm);
    return this.viewModel.mode = "view", e;
  }
  updateFile() {
    const { viewModel: e } = this, i = e.updateFile(this.selectedFile, this._updateAttachmentForm, e.activeFileInfo);
    return e.mode = "view", i;
  }
  deleteFile(e) {
    const i = this.viewModel.deleteFile(e || this.viewModel.activeFileInfo?.file);
    return this.viewModel.mode = "view", i;
  }
  render() {
    const { submitting: e, viewModel: i } = this, { state: s } = i;
    return u("div", { class: this.classes(b.base, F.widget) }, e ? this._renderProgressBar() : null, s === "loading" ? this._renderLoading() : this._renderAttachments(), this._renderErrorMessage());
  }
  _renderErrorMessage() {
    const { error: e, visibleElements: i } = this;
    return e && i.errorMessage ? u("div", { class: b.errorMessage, key: "error-message" }, e.message) : null;
  }
  _renderAttachments() {
    const { activeFileInfo: e, mode: i, activeAttachmentInfo: s } = this.viewModel;
    return i === "add" ? this._renderAddForm() : i === "edit" ? this._renderDetailsForm(s || e) : this._renderAttachmentContainer();
  }
  _renderLoading() {
    return u("div", { class: b.loaderContainer, key: "loader" }, u("div", { class: b.loader }));
  }
  _renderProgressBar() {
    return this.visibleElements.progressBar ? u("div", { class: b.progressBar, key: "progress-bar" }) : null;
  }
  _renderAddForm() {
    const { submitting: e, selectedFile: i } = this, s = e || !i, n = this.visibleElements.cancelAddButton ? u("button", { bind: this, class: this.classes(F.button, F.buttonTertiary, F.buttonSmall, F.buttonHalf, e && F.buttonDisabled), disabled: e, onclick: this._cancelForm, type: "button" }, this.messages.cancel) : null, r = this.visibleElements.addSubmitButton ? u("button", { class: this.classes(F.button, F.buttonSecondary, F.buttonSmall, F.buttonHalf, { [F.buttonDisabled]: s }), disabled: s, type: "submit" }, this.messages.add) : null, l = i ? u("span", { class: b.fileName, key: "file-name" }, i.name) : null, d = u("form", { afterCreate: ni, afterRemoved: ri, bind: this, "data-node-ref": "_addAttachmentForm", onsubmit: this._submitAddAttachment }, u("fieldset", { class: b.fileFieldset }, l, u("label", { class: this.classes(b.fileLabel, F.button, F.buttonSecondary) }, i ? this.messages.changeFile : this.messages.selectFile, u("input", { bind: this, class: b.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))), r, n);
    return u("div", { class: b.formNode, key: "add-form-container" }, d);
  }
  _renderDetailsForm(e) {
    const { visibleElements: i, viewModel: s, selectedFile: n, submitting: r } = this, { capabilities: l } = s, d = r || !n;
    let c, h, p, m;
    n ? (c = n.type, h = n.name, p = n.size) : e && "file" in e ? (c = e.file.type, h = e.file.name, p = e.file.size) : e && "contentType" in e && (c = e.contentType, h = e.name, p = e.size, m = e.url);
    const f = l.editing && l.operations?.delete && i.deleteButton ? u("button", { bind: this, class: this.classes(F.button, F.buttonSmall, F.buttonTertiary, b.deleteButton, { [F.buttonDisabled]: r }), disabled: r, key: "delete-button", onclick: (O) => this._submitDeleteAttachment(O, e), type: "button" }, this.messages.delete) : void 0, v = l.editing && l.operations?.update && i.updateButton ? u("button", { class: this.classes(F.button, F.buttonSmall, F.buttonThird, { [F.buttonDisabled]: d }), disabled: d, key: "update-button", type: "submit" }, this.messages.update) : void 0, y = this.visibleElements.cancelUpdateButton ? u("button", { bind: this, class: this.classes(F.button, F.buttonSmall, F.buttonTertiary, F.buttonThird, { [F.buttonDisabled]: r }), disabled: r, key: "cancel-button", onclick: this._cancelForm, type: "button" }, this.messages.cancel) : void 0, _ = l.editing && l.operations?.update ? u("fieldset", { class: b.fileFieldset, key: "file" }, u("span", { class: b.fileName, key: "file-name" }, h), u("label", { class: this.classes(b.fileLabel, F.button, F.buttonSecondary) }, this.messages.changeFile, u("input", { bind: this, class: b.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))) : void 0, C = u("fieldset", { class: b.metadataFieldset, key: "size" }, u("label", null, gn(this.messagesUnits, p ?? 0))), M = u("fieldset", { class: b.metadataFieldset, key: "content-type" }, u("label", null, c)), E = m != null ? u("a", { class: b.itemLink, href: m, rel: "noreferrer", target: "_blank" }, this._renderImageMask(e, 400), u("div", { class: b.itemLinkOverlay }, u("span", { class: b.itemLinkOverlayIcon }, u("calcite-icon", { icon: "launch" })))) : this._renderImageMask(e, 400), w = u("form", { afterCreate: ni, afterRemoved: ri, bind: this, "data-node-ref": "_updateAttachmentForm", onsubmit: (O) => this._submitUpdateAttachment(O, e) }, u("div", { class: b.metadata }, C, M), _, u("div", { class: b.actions }, f, y, v));
    return u("div", { class: b.formNode, key: "edit-form-container" }, E, w);
  }
  _renderImageMask(e, i) {
    return e ? "file" in e ? this._renderGenericImageMask(e.file.name, e.file.type) : this._renderImageMaskForAttachment(e, i) : null;
  }
  _renderGenericImageMask(e, i) {
    const { supportsResizeAttachments: s } = this.viewModel, n = Qn(i), r = { [b.itemImageResizable]: s };
    return u("div", { class: this.classes(b.itemMaskIcon, b.itemMask), key: n }, u("img", { alt: e, class: this.classes(r, b.itemImage), src: n, title: e }));
  }
  _renderImageMaskForAttachment(e, i) {
    const { supportsResizeAttachments: s } = this.viewModel;
    if (!e) return null;
    const { contentType: n, name: r, url: l } = e;
    if (!s || !gi(n)) return this._renderGenericImageMask(r, n);
    const d = this._getCSSTransform(e), c = d ? { transform: d, "image-orientation": "none" } : {}, h = `${l}${l?.includes("?") ? "&" : "?"}w=${i}`, p = { [b.itemImageResizable]: s };
    return u("div", { class: this.classes(b.itemMask), key: h }, u("img", { alt: r, class: this.classes(p, b.itemImage), src: h, styles: c, title: r }));
  }
  _renderFile(e) {
    const { file: i } = e;
    return u("li", { class: b.item, key: i }, u("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: b.itemButton, key: "details-button", onclick: () => this._startEditFile(e), title: this.messages.attachmentDetails, type: "button" }, this._renderImageMask(e), u("label", { class: b.itemLabel }, u("span", { class: b.itemFilename }, i.name || this.messages.noTitle), u("span", { "aria-hidden": "true", class: this.classes(b.itemChevronIcon, Ee(this.container) ? te.left : te.right) }))));
  }
  _renderAttachmentInfo({ attachmentInfo: e, displayType: i }) {
    const { viewModel: s, effectiveDisplayType: n } = this, { capabilities: r, supportsResizeAttachments: l } = s, { contentType: d, name: c, url: h } = e, p = this._renderImageMask(e, i === "list" ? 48 : 400), m = r.editing ? u("span", { "aria-hidden": "true", class: this.classes(b.itemChevronIcon, Ee(this.container) ? te.left : te.right) }) : null, f = [p, n === "preview" && l && gi(d) ? null : u("label", { class: b.itemLabel }, u("span", { class: b.itemFilename }, c || this.messages.noTitle), m)], v = r.editing ? u("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: b.itemButton, "data-attachment-info-id": e.id, key: "details-button", onclick: () => this._startEditAttachment(e), title: this.messages.attachmentDetails, type: "button" }, f) : u("a", { class: b.itemButton, href: h ?? void 0, key: "details-link", target: "_blank" }, f);
    return u("li", { class: b.item, key: e }, v);
  }
  _renderAttachmentContainer() {
    const { effectiveDisplayType: e, viewModel: i, visibleElements: s } = this, { attachmentInfos: n, capabilities: r, fileInfos: l } = i, d = !!n?.length, c = !!l?.length, h = { [b.containerList]: e !== "preview", [b.containerPreview]: e === "preview" }, p = r.editing && r.operations?.add && s.addButton ? u("button", { bind: this, class: this.classes(F.button, F.buttonTertiary, b.addAttachmentButton), onclick: () => this._startAddAttachment(), type: "button" }, u("span", { "aria-hidden": "true", class: this.classes(b.itemAddIcon, te.plus) }), this.messages.add) : void 0, m = d ? u("ul", { class: b.items, key: "attachments-list" }, n.toArray().map((y) => this._renderAttachmentInfo({ attachmentInfo: y, displayType: e }))) : void 0, f = c ? u("ul", { class: b.items, key: "file-list" }, l.toArray().map((y) => this._renderFile(y))) : void 0, v = c || d ? void 0 : u("div", { class: F.empty }, this.messages.noAttachments);
    return u("div", { class: this.classes(b.container, h), key: "attachments-container" }, m, f, v, p);
  }
  _modeChanged() {
    this._set("error", null), this._set("selectedFile", null);
  }
  _handleFileInputChange(e) {
    const i = e.target, s = i.files?.item(0);
    this._set("selectedFile", s);
  }
  _submitDeleteAttachment(e, i) {
    e.preventDefault(), i && ("file" in i ? this.deleteFile(i.file) : i && this.deleteAttachment(i));
  }
  _submitAddAttachment(e) {
    e.preventDefault(), this.viewModel.filesEnabled ? this.addFile() : this.addAttachment();
  }
  _submitUpdateAttachment(e, i) {
    e.preventDefault(), i && "file" in i ? this.updateFile() : this.updateAttachment();
  }
  _startEditAttachment(e) {
    const { viewModel: i } = this;
    i.activeFileInfo = null, i.activeAttachmentInfo = e, i.mode = "edit";
  }
  _startEditFile(e) {
    const { viewModel: i } = this;
    i.activeAttachmentInfo = null, i.activeFileInfo = e, i.mode = "edit";
  }
  _startAddAttachment() {
    this.viewModel.mode = "add";
  }
  _cancelForm(e) {
    e.preventDefault(), this.viewModel.mode = "view";
  }
  _getCSSTransform(e) {
    const { orientationInfo: i } = e;
    return !this._supportsImageOrientation && i ? [i.rotation ? `rotate(${i.rotation}deg)` : "", i.mirrored ? "scaleX(-1)" : ""].join(" ") : "";
  }
};
o([a()], j.prototype, "capabilities", null), o([a()], j.prototype, "displayType", void 0), o([a({ readOnly: !0 })], j.prototype, "effectiveDisplayType", null), o([a()], j.prototype, "graphic", null), o([a()], j.prototype, "label", null), o([a(), K("esri/widgets/Attachments/t9n/Attachments")], j.prototype, "messages", void 0), o([a(), K("esri/core/t9n/Units")], j.prototype, "messagesUnits", void 0), o([a({ readOnly: !0 })], j.prototype, "selectedFile", void 0), o([a({ readOnly: !0 })], j.prototype, "submitting", void 0), o([a({ readOnly: !0 })], j.prototype, "error", void 0), o([a({ type: Ut })], j.prototype, "viewModel", void 0), o([a()], j.prototype, "visibleElements", void 0), o([Ve("visibleElements")], j.prototype, "castVisibleElements", null), j = o([P("esri.widgets.Attachments")], j);
const Xn = j;
let He = class extends Ut {
  constructor(e) {
    super(e), this.description = null, this.title = null;
  }
};
o([a()], He.prototype, "description", void 0), o([a()], He.prototype, "title", void 0), He = o([P("esri.widgets.Feature.FeatureAttachments.FeatureAttachmentsViewModel")], He);
const Zt = He;
function Gt({ level: t, class: e, ...i }, s) {
  const n = Yn(t);
  return u(`h${n}`, { ...i, "aria-level": String(n), class: Ts(F.heading, e), role: "heading" }, s);
}
function Yn(t) {
  return Vi(Math.ceil(t), 1, 6);
}
const bt = "esri-feature-element-info", Mt = { base: bt, title: `${bt}__title`, description: `${bt}__description` };
let Re = class extends J {
  constructor(e, i) {
    super(e, i), this.description = null, this.headingLevel = 2, this.title = null;
  }
  render() {
    return u("div", { class: Mt.base }, this._renderTitle(), this._renderDescription());
  }
  _renderTitle() {
    const { title: e } = this;
    return e ? u(Gt, { class: Mt.title, level: this.headingLevel }, e) : null;
  }
  _renderDescription() {
    const { description: e } = this;
    return e ? u("div", { class: Mt.description, key: "description" }, e) : null;
  }
};
o([a()], Re.prototype, "description", void 0), o([a()], Re.prototype, "headingLevel", void 0), o([a()], Re.prototype, "title", void 0), Re = o([P("esri.widgets.Feature.support.FeatureElementInfo")], Re);
const ut = Re, Kn = { base: "esri-feature-attachments" };
let ne = class extends J {
  constructor(e, i) {
    super(e, i), this._featureElementInfo = null, this.attachmentsWidget = new Xn(), this.headingLevel = 2, this.viewModel = new Zt();
  }
  initialize() {
    this._featureElementInfo = new ut(), this.addHandles([g(() => [this.viewModel?.description, this.viewModel?.title, this.headingLevel], () => this._setupFeatureElementInfo(), L), g(() => this.viewModel, (e) => this.attachmentsWidget.viewModel = e, L)]);
  }
  destroy() {
    this.attachmentsWidget.viewModel = null, this.attachmentsWidget.destroy(), this._featureElementInfo?.destroy();
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e) {
    this.viewModel.description = e;
  }
  get displayType() {
    return this.attachmentsWidget.displayType;
  }
  set displayType(e) {
    this.attachmentsWidget.displayType = e;
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e) {
    this.viewModel.graphic = e;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e) {
    this.viewModel.title = e;
  }
  render() {
    const { attachmentsWidget: e } = this;
    return u("div", { class: Kn.base }, this._featureElementInfo?.render(), e?.render());
  }
  _setupFeatureElementInfo() {
    const { description: e, title: i, headingLevel: s } = this;
    this._featureElementInfo?.set({ description: e, title: i, headingLevel: s });
  }
};
o([a({ readOnly: !0 })], ne.prototype, "attachmentsWidget", void 0), o([a()], ne.prototype, "description", null), o([a()], ne.prototype, "displayType", null), o([a()], ne.prototype, "graphic", null), o([a()], ne.prototype, "headingLevel", void 0), o([a()], ne.prototype, "title", null), o([a({ type: Zt })], ne.prototype, "viewModel", void 0), ne = o([P("esri.widgets.Feature.FeatureAttachments")], ne);
const Jn = ne;
let pe = class extends ue {
  constructor(e) {
    super(e), this._loadingPromise = null, this.created = null, this.creator = null, this.destroyer = null, this.graphic = null, this.addHandles(g(() => this.creator, (i) => {
      this._destroyContent(), this._createContent(i);
    }, L));
  }
  destroy() {
    this._destroyContent();
  }
  get state() {
    return this._loadingPromise ? "loading" : "ready";
  }
  _destroyContent() {
    const { created: e, graphic: i, destroyer: s } = this;
    e && i && (at(s, { graphic: i }).catch(() => null), this._set("created", null));
  }
  async _createContent(e) {
    const i = this.graphic;
    if (!i || !e) return;
    const s = at(e, { graphic: i }).catch(() => null);
    this._loadingPromise = s, this.notifyChange("state");
    const n = await s;
    s === this._loadingPromise && (this._loadingPromise = null, this.notifyChange("state"), this._set("created", n));
  }
};
o([a({ readOnly: !0 })], pe.prototype, "created", void 0), o([a()], pe.prototype, "creator", void 0), o([a()], pe.prototype, "destroyer", void 0), o([a({ type: Be })], pe.prototype, "graphic", void 0), o([a({ readOnly: !0 })], pe.prototype, "state", null), pe = o([P("esri.widgets.Feature.FeatureContent.FeatureContentViewModel")], pe);
const lt = pe;
function as(t) {
  return (e) => {
    e.hasOwnProperty("_delegatedEventNames") || (e._delegatedEventNames = e._delegatedEventNames ? e._delegatedEventNames.slice() : []);
    const i = e._delegatedEventNames, s = Array.isArray(t) ? t : er(t);
    i.push(...s);
  };
}
function er(t) {
  return t.split(",").map((e) => e.trim());
}
function ls(t) {
  return t && typeof t.render == "function";
}
function tr(t) {
  return t && typeof t.postMixInProperties == "function" && typeof t.buildRendering == "function" && typeof t.postCreate == "function" && typeof t.startup == "function";
}
const Ft = "esri-feature-content", It = { base: Ft, loaderContainer: `${Ft}__loader-container`, loader: `${Ft}__loader` };
let Pe = class extends J {
  constructor(e, i) {
    super(e, i), this.viewModel = null, this._addTargetToAnchors = (s) => {
      Array.from(s.querySelectorAll("a")).forEach((n) => {
        Ki(n.href) && !n.hasAttribute("target") && n.setAttribute("target", "_blank");
      });
    };
  }
  get creator() {
    return this.viewModel?.creator;
  }
  set creator(e) {
    this.viewModel && (this.viewModel.creator = e);
  }
  get graphic() {
    return this.viewModel?.graphic;
  }
  set graphic(e) {
    this.viewModel && (this.viewModel.graphic = e);
  }
  render() {
    const e = this.viewModel?.state;
    return u("div", { class: It.base }, e === "loading" ? this._renderLoading() : this._renderCreated());
  }
  _renderLoading() {
    return u("div", { class: It.loaderContainer, key: "loader" }, u("div", { class: It.loader }));
  }
  _renderCreated() {
    const e = this.viewModel?.created;
    return e ? e instanceof HTMLElement ? u("div", { afterCreate: this._attachToNode, bind: e, key: e }) : ls(e) ? u("div", { key: e }, !e.destroyed && e.render()) : u("div", { afterCreate: this._addTargetToAnchors, innerHTML: e, key: e }) : null;
  }
  _attachToNode(e) {
    const i = this;
    e.appendChild(i);
  }
};
o([a()], Pe.prototype, "creator", null), o([a()], Pe.prototype, "graphic", null), o([a({ type: lt })], Pe.prototype, "viewModel", void 0), Pe = o([P("esri.widgets.Feature.FeatureContent")], Pe);
const et = Pe;
let le = class extends ue {
  constructor(e) {
    super(e), this.attributes = null, this.expressionInfos = null, this.description = null, this.fieldInfos = null, this.title = null;
  }
  get formattedFieldInfos() {
    const { expressionInfos: e, fieldInfos: i } = this, s = [];
    return i?.forEach((n) => {
      if (!(!n.hasOwnProperty("visible") || n.visible)) return;
      const r = n.clone();
      r.label = Ji(r, e), s.push(r);
    }), s;
  }
};
o([a()], le.prototype, "attributes", void 0), o([a({ type: [ks] })], le.prototype, "expressionInfos", void 0), o([a()], le.prototype, "description", void 0), o([a({ type: [qi] })], le.prototype, "fieldInfos", void 0), o([a({ readOnly: !0 })], le.prototype, "formattedFieldInfos", null), o([a()], le.prototype, "title", void 0), le = o([P("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")], le);
const ht = le, ir = [{ pattern: /^\s*(https?:\/\/([^\s]+))\s*$/i, target: "_blank", label: "{messages.view}" }, { pattern: /^\s*(tel:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(mailto:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "App Studio Player" }, { pattern: /^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Collector" }, { pattern: /^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Explorer" }, { pattern: /^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Navigator" }, { pattern: /^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Survey123" }, { pattern: /^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Trek2There" }, { pattern: /^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Workforce" }, { pattern: /^\s*(iform:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "iForm" }, { pattern: /^\s*(flow:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "FlowFinity" }, { pattern: /^\s*(lfmobile:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Laserfische" }, { pattern: /^\s*(mspbi:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Microsoft Power Bi" }];
function sr(t, e) {
  if (typeof e != "string" || !e) return e;
  const i = ir.find((c) => c.pattern.test(e));
  if (!i) return e;
  const s = e.match(i.pattern), n = s && s[2], r = Ne(Ne(i.label, { messages: t, hierPart: n }), { appName: i.appName }), l = i.target ? ` target="${i.target}"` : "", d = i.target === "_blank" ? ' rel="noreferrer"' : "";
  return e.replace(i.pattern, `<a${l} href="$1"${d}>${r}</a>`);
}
const Xe = "esri-feature-fields", Ye = { base: Xe, fieldHeader: `${Xe}__field-header`, fieldData: `${Xe}__field-data`, fieldDataDate: `${Xe}__field-data--date` };
let se = class extends J {
  constructor(e, i) {
    super(e, i), this._featureElementInfo = null, this.viewModel = new ht(), this.messages = null, this.messagesURIUtils = null;
  }
  initialize() {
    this._featureElementInfo = new ut(), this.addHandles(g(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), L));
  }
  destroy() {
    this._featureElementInfo?.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e) {
    this.viewModel.attributes = e;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e) {
    this.viewModel.description = e;
  }
  get expressionInfos() {
    return this.viewModel.expressionInfos;
  }
  set expressionInfos(e) {
    this.viewModel.expressionInfos = e;
  }
  get fieldInfos() {
    return this.viewModel.fieldInfos;
  }
  set fieldInfos(e) {
    this.viewModel.fieldInfos = e;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e) {
    this.viewModel.title = e;
  }
  render() {
    return u("div", { class: Ye.base }, this._featureElementInfo?.render(), this._renderFields());
  }
  _renderFieldInfo(e, i) {
    const { attributes: s } = this.viewModel, n = e.fieldName, r = e.label || n, l = s ? s[n] == null ? "" : s[n] : "", d = !(!e.format || !e.format.dateFormat), c = typeof l == "number" && !d ? this._forceLTR(l) : sr(this.messagesURIUtils, l), h = { [Ye.fieldDataDate]: d };
    return u("tr", { key: `fields-element-info-row-${n}-${i}` }, u("th", { class: Ye.fieldHeader, innerHTML: r, key: `fields-element-info-row-header-${n}-${i}` }), u("td", { class: this.classes(Ye.fieldData, h), innerHTML: c, key: `fields-element-info-row-data-${n}-${i}` }));
  }
  _renderFields() {
    const { formattedFieldInfos: e } = this.viewModel;
    return e?.length ? u("table", { class: F.table, summary: this.messages.fieldsSummary }, u("tbody", null, e.map((i, s) => this._renderFieldInfo(i, s)))) : null;
  }
  _setupFeatureElementInfo() {
    const { description: e, title: i } = this;
    this._featureElementInfo?.set({ description: e, title: i });
  }
  _forceLTR(e) {
    return `&lrm;${e}`;
  }
};
o([a()], se.prototype, "attributes", null), o([a()], se.prototype, "description", null), o([a()], se.prototype, "expressionInfos", null), o([a()], se.prototype, "fieldInfos", null), o([a()], se.prototype, "title", null), o([a({ type: ht, nonNullable: !0 })], se.prototype, "viewModel", void 0), o([a(), K("esri/widgets/Feature/t9n/Feature")], se.prototype, "messages", void 0), o([a(), K("esri/widgets/support/t9n/uriUtils")], se.prototype, "messagesURIUtils", void 0), se = o([P("esri.widgets.Feature.FeatureFields")], se);
const ds = se, nr = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, rr = { maximumFractionDigits: 20 };
function or(t) {
  return Ae(t, rr);
}
const ar = "<", lr = ">";
function dr(t, e, i, s) {
  let n = "";
  return e === 0 ? n = `${ar} ` : e === i && (n = `${lr} `), n + or(t);
}
const cr = new zi([64, 64, 64]);
function ur(t, e) {
  const i = [], s = t.length - 1;
  return t.length === 5 ? i.push(0, 2, 4) : i.push(0, s), t.map((n, r) => i.includes(r) ? dr(n, r, s) : null);
}
async function hr(t, e, i) {
  let s = !1, n = [], r = [];
  if (t.stops) {
    const h = t.stops;
    n = h.map((p) => p.value), s = h.some((p) => !!p.label), s && (r = h.map((p) => p.label));
  }
  const l = n[0], d = n[n.length - 1];
  if (l == null && d == null) return null;
  const c = s ? null : ur(n);
  return (await Promise.all(n.map(async (h, p) => ({ value: h, color: t.type === "opacity" ? await pr(h, t) : (await import("./main-DhLeoxL5.js").then((m) => m.qJ)).getColor(t, h), label: s ? r[p] : c?.[p] ?? "" })))).reverse();
}
async function pr(t, e, i) {
  const s = new zi(cr), n = (await import("./main-DhLeoxL5.js").then((r) => r.qJ)).getOpacity(e, t);
  return n != null && (s.a = n), s;
}
function mr(t) {
  if (!t.colorStops) return [];
  const e = [...t.colorStops].filter((s) => s.color?.a > 0);
  let i = e.length - 1;
  if (e && e[0]) {
    const s = e[i];
    s && s.ratio !== 1 && (e.push(new Ls({ ratio: 1, color: s.color })), i++);
  }
  return e.map((s, n) => {
    let r = "";
    return n === 0 ? r = t.legendOptions?.minLabel || "low" : n === i && (r = t.legendOptions?.maxLabel || "high"), { color: s.color, label: r, ratio: s.ratio };
  }).reverse();
}
Bi("short-date");
async function Y(t, e, i) {
  Rs(t, e, () => []).push(...i);
}
async function fr(t) {
  const e = /* @__PURE__ */ new Map();
  if (!t) return e;
  if ("visualVariables" in t && t.visualVariables) {
    const i = t.visualVariables.filter((s) => s.type === "color");
    for (const s of i) {
      const n = (await hr(s) ?? []).map((r) => r.color);
      await Y(e, s.field || s.valueExpression, n);
    }
  }
  if (t.type === "heatmap") {
    const i = mr(t).map((s) => s.color);
    await Y(e, t.field || t.valueExpression, i);
  } else if (t.type === "pie-chart") {
    for (const i of t.attributes) await Y(e, i.field || i.valueExpression, [i.color]);
    await Y(e, "default", [t?.othersCategory?.color, ke(t.backgroundFillSymbol, null)]);
  } else if (t.type === "dot-density") {
    for (const i of t.attributes) await Y(e, i.field || i.valueExpression, [i.color]);
    await Y(e, "default", [t.backgroundColor]);
  } else if (t.type === "unique-value") if (t.authoringInfo?.type === "predominance") for (const i of t.uniqueValueInfos ?? []) await Y(e, i.value.toString(), [ke(i.symbol, null)]);
  else {
    const i = (t.uniqueValueInfos ?? []).map((d) => ke(d.symbol, null)), { field: s, field2: n, field3: r, valueExpression: l } = t;
    (s || l) && await Y(e, s || l, i), n && await Y(e, n, i), r && await Y(e, r, i);
  }
  else if (t.type === "class-breaks") {
    const i = t.classBreakInfos.map((r) => ke(r.symbol, null)), { field: s, valueExpression: n } = t;
    await Y(e, s ?? n, i);
  } else t.type === "simple" && await Y(e, "default", [ke(t.symbol, null)]);
  return "defaultSymbol" in t && t.defaultSymbol && await Y(e, "default", [ke(t.defaultSymbol, null)]), e.forEach((i, s) => {
    const n = Dt(i.filter(Boolean), (r, l) => JSON.stringify(r) === JSON.stringify(l));
    e.set(s, n);
  }), e;
}
const gr = "esri.widgets.Feature.support.relatedFeatureUtils", vi = () => q.getLogger(gr), _i = /* @__PURE__ */ new Map();
function tt(t) {
  if (!ce(t)) return null;
  const [e, i] = t.split("/").slice(1);
  return { layerId: e, fieldName: i };
}
function yr(t, e) {
  if (!e.relationships) return null;
  let i = null;
  const { relationships: s } = e;
  return s.some((n) => n.id === parseInt(t, 10) && (i = n, !0)), i;
}
function vr({ originRelationship: t, relationships: e, layerId: i }) {
  return e.find(({ relatedTableId: s, id: n }) => `${s}` === i && n === t?.id) ?? null;
}
function _r(t, e) {
  const i = e.toLowerCase();
  for (const s in t) if (s.toLowerCase() === i) return t[s];
  return null;
}
function wr(t, e) {
  const i = yr(t, e);
  if (i)
    return { url: `${e.url}/${i.relatedTableId}`, sourceSpatialReference: e.spatialReference, relation: i, relatedFields: [], outStatistics: [] };
}
function br(t, e) {
  if (!e || !t) return;
  const { features: i, statsFeatures: s } = t, n = i?.value;
  e.relatedFeatures = n ? n.features : [];
  const r = s?.value;
  e.relatedStatsFeatures = r ? r.features : [];
}
function Mr(t, e, i, s) {
  const n = new kt();
  return n.outFields = ["*"], n.relationshipId = typeof e.id == "number" ? e.id : parseInt(e.id, 10), n.objectIds = [t.attributes[i.objectIdField]], i.queryRelatedFeatures?.(n, s) ?? Promise.resolve({});
}
function Fr(t, e, i) {
  let s = 0;
  const n = [];
  for (; s < e.length; ) n.push(`${t} IN (${e.slice(s, i + s)})`), s += i;
  return n.join(" OR ");
}
function Ir(t) {
  return t ? Dt(t) : void 0;
}
function Cr(t) {
  return t ? Dt(t, (e, i) => JSON.stringify(e.toJSON()) === JSON.stringify(i.toJSON())) : void 0;
}
async function Ar(t, e, i, s) {
  const n = i.layerId.toString(), { layerInfo: r, relation: l, relatedFields: d, outStatistics: c, url: h, sourceSpatialReference: p } = e, m = Ir(d), f = Cr(c);
  if (!r || !l) return null;
  const v = vr({ originRelationship: l, relationships: r.relationships, layerId: n });
  if (v?.relationshipTableId && v.keyFieldInRelationshipTable) {
    const _ = (await Mr(t, v, i, s))[t.attributes[i.objectIdField]];
    if (!_) return null;
    const C = _.features.map((M) => M.attributes[r.objectIdField]);
    if (f?.length && r.supportsStatistics) {
      const M = new mt();
      M.where = Fr(r.objectIdField, C, 1e3), M.outFields = m, M.outStatistics = f, M.sourceSpatialReference = p;
      const E = { features: Promise.resolve(_), statsFeatures: ft(h, M) };
      return xe(E);
    }
  }
  const y = v?.keyField;
  if (y) {
    const _ = Ns(kr(r.fields, y)), C = _r(t.attributes, l.keyField), M = _ ? `${y}=${C}` : `${y}='${C}'`, E = ft(h, new mt({ where: M, outFields: m, sourceSpatialReference: p }), s), w = f?.length && r.supportsStatistics ? ft(h, new mt({ where: M, outFields: m, outStatistics: f, sourceSpatialReference: p }), s) : null, O = { features: E };
    return w && (O.statsFeatures = w), xe(O);
  }
  return null;
}
function $r(t, e) {
  return Ss(t, { query: { f: "json" }, signal: e?.signal });
}
function Er({ relatedInfos: t, layer: e }, i) {
  const s = {};
  return t.forEach((n, r) => {
    const { relation: l } = n;
    if (!l) {
      const m = new k("relation-required", "A relation is required on a layer to retrieve related records.");
      throw vi().error(m), m;
    }
    const { relatedTableId: d } = l;
    if (typeof d != "number") {
      const m = new k("A related table ID is required on a layer to retrieve related records.");
      throw vi().error(m), m;
    }
    const c = `${e.url}/${d}`, h = _i.get(c), p = h ?? $r(c);
    h || _i.set(c, p), s[r] = p;
  }), Ps(xe(s), i);
}
function xr({ graphic: t, relatedInfos: e, layer: i }, s) {
  const n = {};
  return e.forEach((r, l) => {
    r.layerInfo && (n[l] = Ar(t, r, i, s));
  }), xe(n);
}
function Tr({ relatedInfo: t, fieldName: e, fieldInfo: i }) {
  if (t.relatedFields?.push(e), i.statisticType) {
    const s = new Os({ statisticType: i.statisticType, onStatisticField: e, outStatisticFieldName: e });
    t.outStatistics?.push(s);
  }
}
function kr(t, e) {
  if (t != null) {
    e = e.toLowerCase();
    for (const i of t) if (i && i.name.toLowerCase() === e) return i;
  }
  return null;
}
const wi = { chartAnimation: !0 };
let B = class extends ue {
  constructor(e) {
    super(e), this.abilities = { ...wi }, this.activeMediaInfoIndex = 0, this.attributes = null, this.description = null, this.fieldInfoMap = null, this.formattedAttributes = null, this.expressionAttributes = null, this.isAggregate = !1, this.layer = null, this.mediaInfos = null, this.popupTemplate = null, this.relatedInfos = null, this.title = null;
  }
  castAbilities(e) {
    return { ...wi, ...e };
  }
  get activeMediaInfo() {
    return this.formattedMediaInfos[this.activeMediaInfoIndex] || null;
  }
  get formattedMediaInfos() {
    return this._formatMediaInfos() || [];
  }
  get formattedMediaInfoCount() {
    return this.formattedMediaInfos.length;
  }
  setActiveMedia(e) {
    this._setContentElementMedia(e);
  }
  next() {
    this._pageContentElementMedia(1);
  }
  previous() {
    this._pageContentElementMedia(-1);
  }
  _setContentElementMedia(e) {
    const { formattedMediaInfoCount: i } = this, s = (e + i) % i;
    this.activeMediaInfoIndex = s;
  }
  _pageContentElementMedia(e) {
    const { activeMediaInfoIndex: i } = this, s = i + e;
    this._setContentElementMedia(s);
  }
  _formatMediaInfos() {
    const { mediaInfos: e, layer: i } = this, s = this.attributes ?? {}, n = this.formattedAttributes ?? {}, r = this.expressionAttributes ?? {}, l = this.fieldInfoMap ?? /* @__PURE__ */ new Map();
    return e?.map((d) => {
      const c = d?.clone();
      if (!c) return null;
      if (c.title = Me({ attributes: s, fieldInfoMap: l, globalAttributes: n, expressionAttributes: r, layer: i, text: c.title }), c.caption = Me({ attributes: s, fieldInfoMap: l, globalAttributes: n, expressionAttributes: r, layer: i, text: c.caption }), c.altText = Me({ attributes: s, fieldInfoMap: l, globalAttributes: n, expressionAttributes: r, layer: i, text: c.altText }), c.type === "image") {
        const { value: h } = c;
        return this._setImageValue({ value: h, formattedAttributes: n, layer: i }), c.value.sourceURL ? c : void 0;
      }
      if (c.type === "pie-chart" || c.type === "line-chart" || c.type === "column-chart" || c.type === "bar-chart") {
        const { value: h } = c;
        return this._setChartValue({ value: h, chartType: c.type, attributes: s, formattedAttributes: n, layer: i, expressionAttributes: r }), c;
      }
      return null;
    }).filter(ct) ?? [];
  }
  _setImageValue(e) {
    const i = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { value: s, formattedAttributes: n, layer: r } = e, { linkURL: l, sourceURL: d } = s;
    if (d) {
      const c = Ot(d, r);
      s.sourceURL = Pt({ formattedAttributes: n, template: c, fieldInfoMap: i });
    }
    if (l) {
      const c = Ot(l, r);
      s.linkURL = Pt({ formattedAttributes: n, template: c, fieldInfoMap: i });
    }
  }
  _setChartValue(e) {
    const { value: i, attributes: s, formattedAttributes: n, chartType: r, layer: l, expressionAttributes: d } = e, { popupTemplate: c, relatedInfos: h } = this, { fields: p, normalizeField: m } = i, f = l;
    if (i.fields = En(p, f), m && (i.normalizeField = Ze(m, f)), !p.some((y) => !!(n[y] != null || ce(y) && h?.size))) return;
    const v = c?.fieldInfos ?? [];
    p.forEach((y, _) => {
      const C = i.colors?.[_];
      if (ce(y)) return void (i.series = [...i.series, ...this._getRelatedChartInfos({ fieldInfos: v, fieldName: y, formattedAttributes: n, chartType: r, value: i, color: C })]);
      const M = this._getChartOption({ value: i, attributes: s, chartType: r, formattedAttributes: n, expressionAttributes: d, fieldName: y, fieldInfos: v, color: C });
      i.series.push(M);
    });
  }
  _getRelatedChartInfos(e) {
    const { fieldInfos: i, fieldName: s, formattedAttributes: n, chartType: r, value: l, color: d } = e, c = [], h = tt(s), p = h && this.relatedInfos?.get(h.layerId.toString());
    if (!p) return c;
    const { relatedFeatures: m, relation: f } = p;
    if (!f || !m) return c;
    const { cardinality: v } = f;
    return m.forEach((y) => {
      const { attributes: _ } = y;
      _ && Object.keys(_).forEach((C) => {
        C === h.fieldName && c.push(this._getChartOption({ value: l, attributes: _, formattedAttributes: n, fieldName: s, chartType: r, relatedFieldName: C, hasMultipleRelatedFeatures: m?.length > 1, fieldInfos: i, color: d }));
      });
    }), v === "one-to-many" || v === "many-to-many" ? c : [c[0]];
  }
  _getTooltip({ label: e, value: i, chartType: s }) {
    return s === "pie-chart" ? `${e}` : `${e}: ${i}`;
  }
  _getChartOption(e) {
    const { value: i, attributes: s, formattedAttributes: n, expressionAttributes: r, fieldName: l, relatedFieldName: d, fieldInfos: c, chartType: h, hasMultipleRelatedFeatures: p, color: m } = e, f = this.layer, v = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { normalizeField: y, tooltipField: _ } = i, C = y ? ce(y) ? s[tt(y).fieldName] : s[y] : null, M = Wt(l) && r && r[l] !== void 0 ? r[l] : d && s[d] !== void 0 ? s[d] : s[l] !== void 0 ? s[l] : n[l], E = new Vs({ fieldName: l, color: m, value: M === void 0 ? null : M && C ? M / C : M });
    if (ce(l)) {
      const ie = v.get(l.toLowerCase()), ws = _ && v.get(_.toLowerCase()), bs = ie?.fieldName ?? l, pt = p && _ ? tt(_).fieldName : ws?.fieldName ?? _, Ms = p && pt ? s[pt] : n[pt] ?? ie?.label ?? ie?.fieldName ?? d, Fs = p && d ? s[d] : n[bs];
      return E.tooltip = this._getTooltip({ label: Ms, value: Fs, chartType: h }), E;
    }
    const w = is(c, l), O = Ze(l, f), qe = _ && n[_] !== void 0 ? n[_] : Ji(w || new qi({ fieldName: O }), this.popupTemplate?.expressionInfos), fe = n[O];
    return E.tooltip = this._getTooltip({ label: qe, value: fe, chartType: h }), E;
  }
};
o([a()], B.prototype, "abilities", void 0), o([Ve("abilities")], B.prototype, "castAbilities", null), o([a()], B.prototype, "activeMediaInfoIndex", void 0), o([a({ readOnly: !0 })], B.prototype, "activeMediaInfo", null), o([a()], B.prototype, "attributes", void 0), o([a()], B.prototype, "description", void 0), o([a()], B.prototype, "fieldInfoMap", void 0), o([a()], B.prototype, "formattedAttributes", void 0), o([a()], B.prototype, "expressionAttributes", void 0), o([a({ readOnly: !0 })], B.prototype, "formattedMediaInfos", null), o([a()], B.prototype, "isAggregate", void 0), o([a()], B.prototype, "layer", void 0), o([a({ readOnly: !0 })], B.prototype, "formattedMediaInfoCount", null), o([a()], B.prototype, "mediaInfos", void 0), o([a()], B.prototype, "popupTemplate", void 0), o([a()], B.prototype, "relatedInfos", void 0), o([a()], B.prototype, "title", void 0), B = o([P("esri.widgets.Feature.FeatureMedia.FeatureMediaViewModel")], B);
const Fe = B, S = "esri-feature-media", U = { base: S, mediaContainer: `${S}__container`, mediaItemContainer: `${S}__item-container`, mediaItem: `${S}__item`, mediaItemText: `${S}__item-text`, mediaItemTitle: `${S}__item-title`, mediaItemCaption: `${S}__item-caption`, mediaNavigation: `${S}__item-navigation`, mediaPagination: `${S}__pagination`, mediaPaginationText: `${S}__pagination-text`, mediaPrevious: `${S}__previous`, mediaPreviousIconLTR: `${S}__previous-icon`, mediaPreviousIconRTL: `${S}__previous-icon--rtl`, mediaNext: `${S}__next`, mediaNextIconLTR: `${S}__next-icon`, mediaNextIconRTL: `${S}__next-icon--rtl`, mediaChart: `${S}__chart`, mediaPaginationButton: `${S}__pagination-button`, mediaPaginationIcon: `${S}__pagination-icon`, mediaChartRendered: `${S}__chart--rendered` }, Ct = 15, he = "category", ze = "value", Lr = "rgba(50, 50, 50, 1)", Rr = 250, Pr = 500, Or = 200;
let Z = class extends J {
  constructor(e, i) {
    super(e, i), this._refreshTimer = null, this._refreshIntervalInfo = null, this._featureElementInfo = null, this._chartRootMap = /* @__PURE__ */ new WeakMap(), this.viewModel = new Fe(), this.messages = null, this._disposeChart = (s) => {
      this._chartRootMap.get(s)?.dispose(), this._chartRootMap.delete(s);
    }, this._createChart = async (s) => {
      const { destroyed: n, viewModel: r } = this;
      if (n || !r || !s) return;
      const { createRoot: l } = await import("./chartUtilsAm5-Dh8lW-If.js"), d = await l(s);
      this._chartRootMap.set(s, d), this._renderChart({ mediaInfo: r.activeMediaInfo, root: d });
    };
  }
  initialize() {
    this._featureElementInfo = new ut(), this.addHandles([g(() => [this.viewModel?.activeMediaInfo, this.viewModel?.activeMediaInfoIndex], () => this._setupMediaRefreshTimer(), L), g(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), L)]);
  }
  loadDependencies() {
    return De({ icon: () => import("./calcite-icon-B2sYQpao.js") });
  }
  destroy() {
    this._clearMediaRefreshTimer(), this._featureElementInfo?.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e) {
    this.viewModel.attributes = e;
  }
  get activeMediaInfoIndex() {
    return this.viewModel.activeMediaInfoIndex;
  }
  set activeMediaInfoIndex(e) {
    this.viewModel.activeMediaInfoIndex = e;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e) {
    this.viewModel.description = e;
  }
  get fieldInfoMap() {
    return this.viewModel.fieldInfoMap;
  }
  set fieldInfoMap(e) {
    this.viewModel.fieldInfoMap = e;
  }
  get layer() {
    return this.viewModel.layer;
  }
  set layer(e) {
    this.viewModel.layer = e;
  }
  get mediaInfos() {
    return this.viewModel.mediaInfos;
  }
  set mediaInfos(e) {
    this.viewModel.mediaInfos = e;
  }
  get popupTemplate() {
    return this.viewModel.popupTemplate;
  }
  set popupTemplate(e) {
    this.viewModel.popupTemplate = e;
  }
  get relatedInfos() {
    return this.viewModel.relatedInfos;
  }
  set relatedInfos(e) {
    this.viewModel.relatedInfos = e;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e) {
    this.viewModel.title = e;
  }
  render() {
    return u("div", { bind: this, class: U.base, onkeyup: this._handleMediaKeyup }, this._featureElementInfo?.render(), this._renderMedia());
  }
  _renderMedia() {
    const { formattedMediaInfoCount: e, activeMediaInfoIndex: i } = this.viewModel, s = this._renderMediaText();
    return e ? u("div", { class: U.mediaContainer, key: "media-element-container" }, this._renderMediaInfo(), u("div", { class: U.mediaNavigation }, s, e > 1 ? u("div", { class: U.mediaPagination }, this._renderMediaPageButton("previous"), u("span", { class: U.mediaPaginationText }, oe(this.messages.pageText, { index: i + 1, total: e })), this._renderMediaPageButton("next")) : null)) : null;
  }
  _renderMediaText() {
    const { activeMediaInfo: e } = this.viewModel;
    if (!e) return null;
    const i = e && e.title ? u("div", { class: U.mediaItemTitle, innerHTML: e.title, key: "media-title" }) : null, s = e && e.caption ? u("div", { class: U.mediaItemCaption, innerHTML: e.caption, key: "media-caption" }) : null;
    return i || s ? u("div", { class: U.mediaItemText, key: "media-text" }, i, s) : null;
  }
  _renderImageMediaInfo(e) {
    const { _refreshIntervalInfo: i } = this, { activeMediaInfoIndex: s, formattedMediaInfoCount: n } = this.viewModel, { value: r, refreshInterval: l, altText: d, title: c, type: h } = e, { sourceURL: p, linkURL: m } = r, f = Ki(m ?? void 0) ? "_blank" : "_self", v = f === "_blank" ? "noreferrer" : "", y = l ? i : null, _ = y ? y.timestamp : 0, C = y ? y.sourceURL : p, M = u("img", { alt: d || c, key: `media-${h}-${s}-${n}-${_}`, src: C ?? void 0 });
    return (m ? u("a", { href: m, rel: v, target: f, title: c }, M) : null) ?? M;
  }
  _renderChartMediaInfo(e) {
    const { activeMediaInfoIndex: i, formattedMediaInfoCount: s } = this.viewModel;
    return u("div", { afterCreate: this._createChart, afterRemoved: this._disposeChart, bind: this, class: U.mediaChart, key: `media-${e.type}-${i}-${s}` });
  }
  _renderMediaInfoType() {
    const { activeMediaInfo: e } = this.viewModel;
    return e ? e.type === "image" ? this._renderImageMediaInfo(e) : e.type.includes("chart") ? this._renderChartMediaInfo(e) : null : null;
  }
  _renderMediaInfo() {
    const { activeMediaInfo: e } = this.viewModel;
    return e ? u("div", { class: U.mediaItemContainer, key: "media-container" }, u("div", { class: U.mediaItem, key: "media-item-container" }, this._renderMediaInfoType())) : null;
  }
  _renderMediaPageButton(e) {
    if (this.viewModel.formattedMediaInfoCount < 2) return null;
    const i = e === "previous", s = i ? this.messages.previous : this.messages.next, n = i ? "chevron-left" : "chevron-right", r = i ? "media-previous" : "media-next", l = i ? this._previous : this._next;
    return u("button", { "aria-label": s, bind: this, class: U.mediaPaginationButton, key: r, onclick: l, tabIndex: 0, title: s, type: "button" }, u("calcite-icon", { class: U.mediaPaginationIcon, icon: n, scale: "s" }));
  }
  _setupFeatureElementInfo() {
    const { description: e, title: i } = this;
    this._featureElementInfo?.set({ description: e, title: i });
  }
  _next() {
    this.viewModel.next();
  }
  _previous() {
    this.viewModel.previous();
  }
  _getRenderer() {
    if (!this.viewModel) return;
    const { isAggregate: e, layer: i } = this.viewModel;
    return e && i?.featureReduction && "renderer" in i.featureReduction ? i.featureReduction.renderer : i?.renderer;
  }
  async _getSeriesColors(e) {
    const { colorAm5: i } = await import("./chartCommon-Dgrk6ezw.js"), s = /* @__PURE__ */ new Map();
    return e.forEach((n) => {
      n.color && s.set(n, i(n.color.toCss(!0)));
    }), s;
  }
  async _getRendererColors() {
    const { colorAm5: e } = await import("./chartCommon-Dgrk6ezw.js"), i = /* @__PURE__ */ new Map(), s = this._getRenderer(), n = "default";
    if (!s) return i;
    const r = await fr(s);
    return r.delete(n), Array.from(r.values()).every((l) => l?.length === 1) && Array.from(r.keys()).forEach((l) => {
      const d = r.get(l)?.[0]?.toCss(!0);
      d && i.set(l, e(d));
    }), i;
  }
  _handleMediaKeyup(e) {
    const { key: i } = e;
    i === "ArrowLeft" && (e.stopPropagation(), this.viewModel.previous()), i === "ArrowRight" && (e.stopPropagation(), this.viewModel.next());
  }
  _canAnimateChart() {
    return !!this.viewModel && !!this.viewModel.abilities.chartAnimation && !nr();
  }
  _getChartAnimationMS() {
    return this._canAnimateChart() ? Rr : 0;
  }
  _getChartSeriesAnimationMS() {
    return this._canAnimateChart() ? Pr : 0;
  }
  async _renderChart(e) {
    const { root: i, mediaInfo: s } = e, { value: n, type: r } = s, { ResponsiveThemeAm5: l, DarkThemeAm5: d, AnimatedThemeAm5: c, ColorSetAm5: h, ThemeAm5: p, esriChartColorSet: m } = await import("./chartCommon-Dgrk6ezw.js"), f = p.new(i);
    f.rule("ColorSet").set("colors", m), f.rule("ColorSet").set("reuse", !0);
    const v = [l.new(i), f];
    Bs() && v.push(d.new(i)), this._canAnimateChart() && v.push(c.new(i)), i.setThemes(v);
    const y = await this._getRendererColors(), _ = await this._getSeriesColors(n.series), C = h.new(i, {}), M = _.get(n.series[0]), E = M ? { lineSettings: { stroke: M } } : void 0, w = n.series.map((O, qe) => {
      const fe = _.get(O) || y.get(O.fieldName) || C.getIndex(qe);
      return { [he]: O.tooltip, [ze]: O.value, columnSettings: { fill: fe, stroke: fe }, ...E };
    }).filter((O) => r !== "pie-chart" || O.value != null && O.value > 0);
    r === "pie-chart" ? this._createPieChart(e, w) : this._createXYChart(e, w);
  }
  _getDirection() {
    return Ee(this.container) ? "rtl" : "ltr";
  }
  _isInversed() {
    return !!Ee(this.container);
  }
  async _customizeChartTooltip(e, i = "horizontal") {
    const { colorAm5: s } = await import("./chartCommon-Dgrk6ezw.js");
    e.setAll({ pointerOrientation: i }), e.get("background")?.setAll({ stroke: s(Lr) }), e.label.setAll({ direction: this._getDirection(), oversizedBehavior: "wrap", maxWidth: Or });
  }
  async _createPieChart(e, i) {
    const { TooltipAm5: s } = await import("./chartCommon-Dgrk6ezw.js"), { PieChartAm5: n, PieSeriesAm5: r } = await import("./pieChart-HLluBDTa.js"), { mediaInfo: l, root: d } = e, { title: c } = l, h = 5, p = l?.altText || l?.title || "", m = d.container.children.push(n.new(d, { ariaLabel: p, focusable: !0, paddingBottom: h, paddingTop: h, paddingLeft: h, paddingRight: h })), f = `{category}: {valuePercentTotal.formatNumber('0.00')}%
 ({value})`, v = s.new(d, { labelText: f }), y = m.series.push(r.new(d, { name: c, valueField: ze, categoryField: he, tooltip: v }));
    y.ticks.template.set("forceHidden", !0), y.labels.template.set("forceHidden", !0), y.slices.template.states.create("active", { shiftRadius: h }), this._customizeChartTooltip(v), y.slices.template.setAll({ ariaLabel: f, focusable: !0, templateField: "columnSettings" }), y.data.setAll(i), y.appear(this._getChartSeriesAnimationMS()), m.appear(this._getChartAnimationMS()), m.root.dom.classList.toggle(U.mediaChartRendered, !0);
  }
  _getMinSeriesValue(e) {
    let i = 0;
    return e.forEach((s) => i = Math.min(s.value, i)), i;
  }
  async _createColumnChart(e, i, s) {
    const { TooltipAm5: n, ScrollbarAm5: r } = await import("./chartCommon-Dgrk6ezw.js"), { CategoryAxisAm5: l, AxisRendererXAm5: d, ValueAxisAm5: c, AxisRendererYAm5: h, ColumnSeriesAm5: p } = await import("./xyChart-BxMFbKvf.js"), { mediaInfo: m, root: f } = i, { value: v, title: y } = m;
    e.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const _ = e.xAxes.push(l.new(f, { renderer: d.new(f, { inversed: this._isInversed() }), categoryField: he }));
    _.get("renderer").labels.template.setAll({ forceHidden: !0 });
    const C = e.yAxes.push(c.new(f, { renderer: h.new(f, { inside: !1 }), min: this._getMinSeriesValue(v.series) }));
    C.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const M = "{categoryX}", E = n.new(f, { labelText: M }), w = e.series.push(p.new(f, { name: y, xAxis: _, yAxis: C, valueYField: ze, categoryXField: he, tooltip: E }));
    this._customizeChartTooltip(E), w.columns.template.setAll({ ariaLabel: M, focusable: !0, templateField: "columnSettings" }), v.series.length > Ct && e.set("scrollbarX", r.new(f, { orientation: "horizontal" })), _.data.setAll(s), w.data.setAll(s), w.appear(this._getChartSeriesAnimationMS()), e.appear(this._getChartAnimationMS());
  }
  async _createBarChart(e, i, s) {
    const { TooltipAm5: n, ScrollbarAm5: r } = await import("./chartCommon-Dgrk6ezw.js"), { CategoryAxisAm5: l, AxisRendererXAm5: d, ValueAxisAm5: c, AxisRendererYAm5: h, ColumnSeriesAm5: p } = await import("./xyChart-BxMFbKvf.js"), { mediaInfo: m, root: f } = i, { value: v, title: y } = m;
    e.setAll({ wheelX: "panY", wheelY: "zoomY" });
    const _ = e.yAxes.push(l.new(f, { renderer: h.new(f, { inversed: !0 }), categoryField: he }));
    _.get("renderer").labels.template.setAll({ forceHidden: !0 });
    const C = e.xAxes.push(c.new(f, { renderer: d.new(f, { inside: !1, inversed: this._isInversed() }), min: this._getMinSeriesValue(v.series) }));
    C.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const M = "{categoryY}", E = n.new(f, { labelText: M }), w = e.series.push(p.new(f, { name: y, xAxis: C, yAxis: _, valueXField: ze, categoryYField: he, tooltip: E }));
    this._customizeChartTooltip(E, "vertical"), w.columns.template.setAll({ ariaLabel: M, focusable: !0, templateField: "columnSettings" }), v.series.length > Ct && e.set("scrollbarY", r.new(f, { orientation: "vertical" })), _.data.setAll(s), w.data.setAll(s), w.appear(this._getChartSeriesAnimationMS()), e.appear(this._getChartAnimationMS());
  }
  async _createLineChart(e, i, s) {
    const { TooltipAm5: n, ScrollbarAm5: r } = await import("./chartCommon-Dgrk6ezw.js"), { CategoryAxisAm5: l, AxisRendererXAm5: d, ValueAxisAm5: c, AxisRendererYAm5: h, LineSeriesAm5: p } = await import("./xyChart-BxMFbKvf.js"), { root: m, mediaInfo: f } = i, { value: v, title: y } = f;
    e.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const _ = e.xAxes.push(l.new(m, { renderer: d.new(m, { inversed: this._isInversed() }), categoryField: he }));
    _.get("renderer").labels.template.setAll({ forceHidden: !0 });
    const C = e.yAxes.push(c.new(m, { renderer: h.new(m, { inside: !1 }), min: this._getMinSeriesValue(v.series) }));
    C.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const M = "{categoryX}", E = s[0]?.lineSettings?.stroke, w = n.new(m, { getFillFromSprite: !E, labelText: M });
    E && w.get("background")?.setAll({ fill: E });
    const O = e.series.push(p.new(m, { name: y, xAxis: _, yAxis: C, valueYField: ze, categoryXField: he, tooltip: w }));
    O.strokes.template.setAll({ templateField: "lineSettings" }), this._customizeChartTooltip(w, "vertical"), v.series.length > Ct && e.set("scrollbarX", r.new(m, { orientation: "horizontal" })), _.data.setAll(s), O.data.setAll(s), O.appear(this._getChartSeriesAnimationMS()), e.appear(this._getChartAnimationMS());
  }
  async _createXYChart(e, i) {
    const { XYChartAm5: s, XYCursorAm5: n } = await import("./xyChart-BxMFbKvf.js"), { root: r, mediaInfo: l } = e, { type: d } = l, c = l?.altText || l?.title || "", h = r.container.children.push(s.new(r, { ariaLabel: c, focusable: !0, panX: !0, panY: !0 }));
    h.set("cursor", n.new(r, {})), d === "column-chart" && await this._createColumnChart(h, e, i), d === "bar-chart" && await this._createBarChart(h, e, i), d === "line-chart" && await this._createLineChart(h, e, i), h.root.dom.classList.toggle(U.mediaChartRendered, !0);
  }
  _clearMediaRefreshTimer() {
    const { _refreshTimer: e } = this;
    e && (clearTimeout(e), this._refreshTimer = null);
  }
  _updateMediaInfoTimestamp(e) {
    const i = Date.now();
    this._refreshIntervalInfo = { timestamp: i, sourceURL: e && this._getImageSource(e, i) };
  }
  _setupMediaRefreshTimer() {
    this._clearMediaRefreshTimer();
    const { activeMediaInfo: e } = this.viewModel;
    e && e.type === "image" && e.refreshInterval && this._setRefreshTimeout(e);
  }
  _setRefreshTimeout(e) {
    const { refreshInterval: i, value: s } = e;
    if (!i) return;
    const n = 6e4 * i;
    this._updateMediaInfoTimestamp(s.sourceURL);
    const r = setInterval(() => {
      this._updateMediaInfoTimestamp(s.sourceURL);
    }, n);
    this._refreshTimer = r;
  }
  _getImageSource(e, i) {
    const s = e.includes("?") ? "&" : "?", [n, r = ""] = e.split("#");
    return `${n}${s}timestamp=${i}${r ? "#" : ""}${r}`;
  }
};
o([a()], Z.prototype, "_refreshIntervalInfo", void 0), o([a()], Z.prototype, "attributes", null), o([a()], Z.prototype, "activeMediaInfoIndex", null), o([a()], Z.prototype, "description", null), o([a()], Z.prototype, "fieldInfoMap", null), o([a()], Z.prototype, "layer", null), o([a()], Z.prototype, "mediaInfos", null), o([a()], Z.prototype, "popupTemplate", null), o([a()], Z.prototype, "relatedInfos", null), o([a()], Z.prototype, "title", null), o([a({ type: Fe })], Z.prototype, "viewModel", void 0), o([a(), K("esri/widgets/Feature/t9n/Feature")], Z.prototype, "messages", void 0), Z = o([P("esri.widgets.Feature.FeatureMedia")], Z);
const cs = Z, Nr = "esri.widgets.Feature.support.arcadeFeatureUtils", bi = () => q.getLogger(Nr);
function Sr(t) {
  return typeof t == "string" ? Qe(jt(t)) : Array.isArray(t) ? Vr(t) : t?.declaredClass === "esri.arcade.Dictionary" ? Br(t) : t;
}
function Vr(t) {
  return `<ul class="esri-widget__list">${t.map((e) => `<li>${typeof e == "string" ? Qe(jt(e)) : e}</li>`).join("")}</ul>`;
}
function Br(t) {
  const e = t.keys().map((i) => {
    const s = t.field(i);
    return `<tr><th>${i}</th><td>${typeof s == "string" ? Qe(jt(s)) : s}</td></tr>`;
  }).join("");
  return `<table class="${F.table}">${e}</table>`;
}
function us() {
  return import("./arcade-SwgMEVcQ.js");
}
function Dr(t) {
  return "createQuery" in t && "queryFeatures" in t;
}
async function qr({ graphic: t, view: e, options: i }) {
  const { isAggregate: s, layer: n } = t;
  if (!s || !n || e?.type !== "2d") return [];
  const r = await e.whenLayerView(n);
  if (!Dr(r)) return [];
  const l = r.createQuery(), d = t.getObjectId();
  l.aggregateIds = d != null ? [d] : [];
  const { features: c } = await r.queryFeatures(l, i);
  return c;
}
function zr({ layer: t, aggregatedFeatures: e, interceptor: i }) {
  const { fields: s, objectIdField: n, geometryType: r, spatialReference: l, displayField: d } = t;
  return new Ds({ fields: s, objectIdField: n, geometryType: r, spatialReference: l, displayField: d, interceptor: i, ...t.type === "feature" ? { templates: t.templates, typeIdField: t.typeIdField, types: t.types } : null, source: e });
}
async function hs({ expressionInfo: t, arcade: e, interceptor: i, spatialReference: s, map: n, graphic: r, location: l, view: d, options: c }) {
  if (!t?.expression) return null;
  const { isAggregate: h } = r, p = (r.sourceLayer || r.layer) ?? void 0, m = h ? "feature-reduction-popup" : "popup", f = e.createArcadeProfile(m), v = e.createArcadeExecutor(t.expression, f).catch((w) => bi().error("arcade-executor-error", { error: w, expressionInfo: t })), [y, _] = await Promise.all([qr({ graphic: r, view: d, options: c }), v]);
  if (!_) return null;
  const C = m === "feature-reduction-popup" ? zr({ layer: p, aggregatedFeatures: y, interceptor: i }) : void 0, M = { ...m === "feature-reduction-popup" ? { $aggregatedFeatures: C } : { $datastore: p?.url, $layer: p?.type === "feature" || p?.type === "subtype-sublayer" ? p : p?.type === "scene" && p.associatedLayer != null ? p.associatedLayer : void 0, $map: n, $userInput: l, $graph: p?.type === "knowledge-graph-sublayer" ? p?.parentCompositeLayer?.knowledgeGraph : void 0 }, $feature: r }, E = { abortSignal: c?.signal ?? void 0, interceptor: i ?? void 0, rawOutput: !0, spatialReference: s ?? void 0, timeZone: d?.timeZone };
  return await _.executeAsync(M, E).catch((w) => bi().error("arcade-execution-error", { error: w, graphic: r, expressionInfo: t })).finally(() => C?.destroy());
}
async function Wr({ expressionInfos: t, spatialReference: e, graphic: i, interceptor: s, map: n, view: r, location: l, options: d }) {
  if (!t?.length) return {};
  const c = await us(), h = {};
  for (const f of t) h[`expression/${f.name}`] = hs({ expressionInfo: f, arcade: c, interceptor: s, spatialReference: e, map: n, graphic: i, location: l, view: r, options: d });
  const p = await xe(h), m = {};
  for (const f in p) m[f] = Sr(p[f].value);
  return m;
}
const Hr = 1;
let X = class extends ue {
  constructor(e) {
    super(e), this._abortController = null, this.expressionInfo = null, this.graphic = null, this.contentElement = null, this.contentElementViewModel = null, this.interceptor = null, this.location = null, this.view = null, this._cancelQuery = () => {
      const { _abortController: i } = this;
      i && i.abort(), this._abortController = null;
    }, this._createVM = () => {
      const i = this.contentElement?.type;
      this.contentElementViewModel?.destroy();
      const s = i === "fields" ? new ht() : i === "media" ? new Fe() : i === "text" ? new lt() : null;
      this._set("contentElementViewModel", s);
    }, this._compile = async () => {
      this._cancelQuery();
      const i = new AbortController();
      this._abortController = i, await this._compileExpression(), this._abortController === i && (this._abortController = null);
    }, this._compileThrottled = ot(this._compile, Hr, this), this._compileExpression = async () => {
      const { expressionInfo: i, graphic: s, interceptor: n, spatialReference: r, map: l, location: d, view: c, _abortController: h } = this;
      if (!i || !s) return void this._set("contentElement", null);
      const p = await us();
      if (h !== this._abortController) return;
      const m = await hs({ arcade: p, expressionInfo: i, graphic: s, location: d, interceptor: n, map: l, spatialReference: r, view: c });
      if (!m || m.declaredClass !== "esri.arcade.Dictionary") return void this._set("contentElement", null);
      const f = await m.castAsJsonAsync(h?.signal), v = f?.type, y = v === "media" ? zs.fromJSON(f) : v === "text" ? Wi.fromJSON(f) : v === "fields" ? Ws.fromJSON(f) : null;
      this._set("contentElement", y);
    }, this.addHandles([g(() => [this.expressionInfo, this.graphic, this.map, this.spatialReference, this.view], () => this._compileThrottled(), L), g(() => [this.contentElement], () => this._createVM(), L)]);
  }
  initialize() {
    this.addHandles(this._compileThrottled);
  }
  destroy() {
    this._cancelQuery(), this.contentElementViewModel?.destroy(), this._set("contentElementViewModel", null), this._set("contentElement", null);
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(e) {
    this._override("spatialReference", e);
  }
  get state() {
    const { _abortController: e, contentElement: i, contentElementViewModel: s } = this;
    return e ? "loading" : i || s ? "ready" : "disabled";
  }
  get map() {
    return this.view?.map ?? null;
  }
  set map(e) {
    this._override("map", e);
  }
};
o([a()], X.prototype, "_abortController", void 0), o([a({ type: qs })], X.prototype, "expressionInfo", void 0), o([a({ type: Be })], X.prototype, "graphic", void 0), o([a({ readOnly: !0 })], X.prototype, "contentElement", void 0), o([a({ readOnly: !0 })], X.prototype, "contentElementViewModel", void 0), o([a()], X.prototype, "interceptor", void 0), o([a({ type: qt })], X.prototype, "location", void 0), o([a()], X.prototype, "spatialReference", null), o([a({ readOnly: !0 })], X.prototype, "state", null), o([a()], X.prototype, "map", null), o([a()], X.prototype, "view", void 0), X = o([P("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")], X);
const Qt = X, At = "esri-feature", $t = { base: `${At}-expression`, loadingSpinnerContainer: `${At}__loading-container`, spinner: `${At}__loading-spinner` };
let it = class extends J {
  constructor(e, i) {
    super(e, i), this._contentWidget = null, this.viewModel = new Qt();
  }
  initialize() {
    this.addHandles(g(() => this.viewModel?.contentElementViewModel, () => this._setupExpressionWidget(), L));
  }
  destroy() {
    this._destroyContentWidget();
  }
  render() {
    const { state: e } = this.viewModel;
    return u("div", { class: $t.base }, e === "loading" ? this._renderLoading() : e === "disabled" ? null : this._contentWidget?.render());
  }
  _renderLoading() {
    return u("div", { class: $t.loadingSpinnerContainer, key: "loading-container" }, u("span", { class: this.classes(te.loadingIndicator, F.rotating, $t.spinner) }));
  }
  _destroyContentWidget() {
    const { _contentWidget: e } = this;
    e && (e.viewModel = null, e.destroy()), this._contentWidget = null;
  }
  _setupExpressionWidget() {
    const { contentElementViewModel: e, contentElement: i } = this.viewModel, s = i?.type;
    this._destroyContentWidget();
    const n = e ? s === "fields" ? new ds({ viewModel: e }) : s === "media" ? new cs({ viewModel: e }) : s === "text" ? new et({ viewModel: e }) : null : null;
    this._contentWidget = n, this.scheduleRender();
  }
};
o([a({ type: Qt })], it.prototype, "viewModel", void 0), it = o([P("esri.widgets.Feature.FeatureExpression")], it);
const jr = it;
var Mi;
(function(t) {
  t.TOO_SHORT = "length-validation-error::too-short";
})(Mi || (Mi = {}));
const Ur = (t) => {
  const e = [];
  if (t.formTemplate) {
    const { description: i, title: s } = t.formTemplate;
    t.fields?.forEach((n) => {
      const r = s && oi(s, n.name), l = i && oi(i, n.name);
      (r || l) && e.push(n.name);
    });
  }
  return e;
}, Et = 100;
let T = class extends Hs(Hi(ue)) {
  constructor(e) {
    super(e), this._loaded = !1, this._queryAbortController = null, this._queryPageAbortController = null, this._queryFeatureCountAbortController = null, this.featuresPerPage = 10, this.description = null, this.graphic = null, this.layer = null, this.map = null, this.orderByFields = null, this.featureCount = 0, this.relationshipId = null, this.showAllEnabled = !1, this.title = null, this._cancelQuery = () => {
      const { _queryAbortController: i } = this;
      i && i.abort(), this._queryAbortController = null;
    }, this._cancelQueryFeatureCount = () => {
      const { _queryFeatureCountAbortController: i } = this;
      i && i.abort(), this._queryFeatureCountAbortController = null;
    }, this._cancelQueryPage = () => {
      const { _queryPageAbortController: i } = this;
      i && i.abort(), this._queryPageAbortController = null;
    }, this._queryController = async () => {
      this._cancelQuery();
      const i = new AbortController();
      this._queryAbortController = i, await gt(this._query()), this._queryAbortController === i && (this._queryAbortController = null);
    }, this._queryFeatureCountController = async () => {
      this._loaded = !1, this._cancelQueryFeatureCount();
      const i = new AbortController();
      this._queryFeatureCountAbortController = i, await gt(this._queryFeatureCount()), this._queryFeatureCountAbortController === i && (this._queryFeatureCountAbortController = null), this._loaded = !0;
    }, this._queryPageController = async () => {
      const i = new AbortController();
      this._queryPageAbortController = i, await gt(this._queryPage()), this._queryPageAbortController === i && (this._queryPageAbortController = null);
    }, this._queryDebounced = Je(this._queryController, Et), this._queryFeatureCountDebounced = Je(this._queryFeatureCountController, Et), this._queryPageDebounced = Je(this._queryPageController, Et), this._query = async () => {
      const { _queryAbortController: i, relatedFeatures: s } = this;
      this.featureCount && (this._destroyRelatedFeatureViewModels(), this.featurePage = 1, s.removeAll(), this.destroyed || s.addMany(this._sliceFeatures(await this._queryRelatedFeatures({ signal: i?.signal }))));
    }, this.addHandles([g(() => [this.displayCount, this.graphic, this.layer, this.layer?.loaded, this.map, this.orderByFields, this.relationshipId, this.featuresPerPage, this.showAllEnabled, this.canQuery, this.featureCount], () => this._queryDebounced(), L), g(() => [this.featurePage, this.showAllEnabled], () => this._queryPageDebounced()), g(() => [this.layer, this.relationshipId, this.objectId, this.canQuery], () => this._queryFeatureCountDebounced())]);
  }
  destroy() {
    this._destroyRelatedFeatureViewModels(), this.relatedFeatures.removeAll(), this._cancelQuery(), this._cancelQueryFeatureCount(), this._cancelQueryPage();
  }
  set featurePage(e) {
    const { featuresPerPage: i, featureCount: s } = this, n = 1, r = Math.ceil(s / i) || 1;
    this._set("featurePage", Math.min(Math.max(e, n), r));
  }
  get featurePage() {
    return this._get("featurePage");
  }
  get orderByFieldsFixedCasing() {
    const { orderByFields: e, relatedLayer: i } = this;
    return e && i?.loaded ? e.map((s) => {
      const n = s.clone();
      return n.field = Ze(s.field, i), n;
    }) : e ?? [];
  }
  get supportsCacheHint() {
    return !!this.layer?.capabilities?.queryRelated?.supportsCacheHint;
  }
  get canLoad() {
    return !!this.map && typeof this.relationshipId == "number" && typeof this.objectId == "number";
  }
  get canQuery() {
    const e = this.layer?.capabilities?.queryRelated;
    return !!(this.relatedLayer && this.relationship && typeof this.relationshipId == "number" && typeof this.objectId == "number" && e?.supportsCount && e?.supportsPagination);
  }
  get itemDescriptionFieldName() {
    return this.orderByFieldsFixedCasing[0]?.field || null;
  }
  set displayCount(e) {
    this._set("displayCount", Math.min(Math.max(e, 0), 10));
  }
  get displayCount() {
    return this._get("displayCount");
  }
  get objectId() {
    return (this.objectIdField && this.graphic?.attributes?.[this.objectIdField]) ?? null;
  }
  get objectIdField() {
    return this.layer?.objectIdField || null;
  }
  get relatedFeatures() {
    return this._get("relatedFeatures") || new Se();
  }
  get relatedLayer() {
    const { layer: e, map: i, relationship: s } = this;
    return e?.loaded && i && s ? Gn(i, e, s) ?? null : null;
  }
  get relationship() {
    const { relationshipId: e, layer: i } = this;
    return typeof e == "number" ? i?.relationships?.find(({ id: s }) => s === e) ?? null : null;
  }
  get relatedFeatureViewModels() {
    return this._get("relatedFeatureViewModels") || new Se();
  }
  get state() {
    const { _queryAbortController: e, _queryFeatureCountAbortController: i, _queryPageAbortController: s, canQuery: n, _loaded: r, canLoad: l } = this;
    return i || l && !r ? "loading" : e || s ? "querying" : n ? "ready" : "disabled";
  }
  getRelatedFeatureByObjectId(e) {
    return this.relatedFeatures.find((i) => i.getObjectId() === e);
  }
  refresh() {
    this._queryFeatureCountDebounced();
  }
  _destroyRelatedFeatureViewModels() {
    this.relatedFeatureViewModels?.forEach((e) => !e.destroyed && e.destroy()), this.relatedFeatureViewModels.removeAll();
  }
  async _queryFeatureCount() {
    const { layer: e, relatedLayer: i, relationshipId: s, objectId: n, _queryFeatureCountAbortController: r, canQuery: l, supportsCacheHint: d } = this;
    if (await e?.load(), await i?.load(), !l || !e || !i) return void this._set("featureCount", 0);
    const c = i.createQuery(), h = new kt({ cacheHint: d, relationshipId: s, returnGeometry: !1, objectIds: [n], where: c.where ?? void 0 }), p = await e.queryRelatedFeaturesCount(h, { signal: r?.signal });
    this._set("featureCount", p[n] || 0);
  }
  _sliceFeatures(e) {
    const { showAllEnabled: i, displayCount: s } = this;
    return i ? e : s ? e.slice(0, s) : [];
  }
  async _queryPage() {
    const { relatedFeatures: e, featurePage: i, showAllEnabled: s, _queryPageAbortController: n, featureCount: r } = this;
    !s || i < 2 || !r || e.addMany(await this._queryRelatedFeatures({ signal: n?.signal }));
  }
  async _queryRelatedFeatures(e) {
    const { orderByFieldsFixedCasing: i, showAllEnabled: s, featuresPerPage: n, displayCount: r, layer: l, relationshipId: d, featurePage: c, featureCount: h, relatedLayer: p, supportsCacheHint: m } = this, { canQuery: f, objectId: v } = this;
    if (!f || !l || !p) return [];
    const y = s ? ((c - 1) * n + h) % h : 0, _ = s ? n : r, C = p.objectIdField, M = [...i.map((ie) => ie.field), ...Ur(p), C].filter(ct), E = i.map((ie) => `${ie.field} ${ie.order}`), w = p.createQuery(), O = new kt({ orderByFields: E, start: y, num: _, outFields: M, cacheHint: m, relationshipId: d, returnGeometry: !1, objectIds: [v], where: w.where ?? void 0 }), qe = await l.queryRelatedFeatures(O, { signal: e?.signal }), fe = qe[v]?.features || [];
    return fe.forEach((ie) => {
      ie.sourceLayer = p, ie.layer = p;
    }), fe;
  }
};
o([a()], T.prototype, "_loaded", void 0), o([a()], T.prototype, "_queryAbortController", void 0), o([a()], T.prototype, "_queryPageAbortController", void 0), o([a()], T.prototype, "_queryFeatureCountAbortController", void 0), o([a({ value: 1 })], T.prototype, "featurePage", null), o([a()], T.prototype, "featuresPerPage", void 0), o([a({ readOnly: !0 })], T.prototype, "orderByFieldsFixedCasing", null), o([a({ readOnly: !0 })], T.prototype, "supportsCacheHint", null), o([a({ readOnly: !0 })], T.prototype, "canLoad", null), o([a({ readOnly: !0 })], T.prototype, "canQuery", null), o([a()], T.prototype, "description", void 0), o([a({ readOnly: !0 })], T.prototype, "itemDescriptionFieldName", null), o([a({ value: 3 })], T.prototype, "displayCount", null), o([a({ type: Be })], T.prototype, "graphic", void 0), o([a()], T.prototype, "layer", void 0), o([a()], T.prototype, "map", void 0), o([a({ readOnly: !0 })], T.prototype, "objectId", null), o([a({ readOnly: !0 })], T.prototype, "objectIdField", null), o([a()], T.prototype, "orderByFields", void 0), o([a({ readOnly: !0 })], T.prototype, "relatedFeatures", null), o([a({ readOnly: !0 })], T.prototype, "relatedLayer", null), o([a({ readOnly: !0 })], T.prototype, "relationship", null), o([a()], T.prototype, "featureCount", void 0), o([a({ readOnly: !0 })], T.prototype, "relatedFeatureViewModels", null), o([a()], T.prototype, "relationshipId", void 0), o([a()], T.prototype, "showAllEnabled", void 0), o([a()], T.prototype, "state", null), o([a()], T.prototype, "title", void 0), T = o([P("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")], T);
const Xt = T, je = "esri-feature", We = `${je}-relationship`, ae = { base: We, listContainer: `${We}__list`, listItem: `${We}__list-item`, listItemHidden: `${We}__list-item--hidden`, listContainerQuerying: `${We}__list--querying`, featureObserver: `${je}__feature-observer`, stickySpinnerContainer: `${je}__sticky-loading-container`, loadingSpinnerContainer: `${je}__loading-container`, spinner: `${je}__loading-spinner` }, Fi = { title: !0, description: !0 };
let G = class extends J {
  constructor(t, e) {
    super(t, e), this._featureElementInfo = null, this._relatedFeatureIntersectionObserverNode = null, this._relatedFeatureIntersectionObserver = new IntersectionObserver(([i]) => {
      i?.isIntersecting && this._increaseFeaturePage();
    }, { root: window.document }), this.headingLevel = 2, this.viewModel = new Xt(), this.messages = null, this.messagesCommon = null, this.visibleElements = { ...Fi }, this._increaseFeaturePage = () => {
      const { state: i, showAllEnabled: s, relatedFeatures: n, featuresPerPage: r, featurePage: l } = this.viewModel;
      i === "ready" && s && n.length >= r * l && this.viewModel.featurePage++;
    };
  }
  initialize() {
    this._featureElementInfo = new ut(), this.addHandles([g(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), L), g(() => [this.viewModel.state, this.viewModel.showAllEnabled, this._relatedFeatureIntersectionObserverNode], () => this._handleRelatedFeatureObserverChange()), $e(() => this.viewModel.relatedFeatureViewModels, "change", () => this._setupRelatedFeatureViewModels())]);
  }
  loadDependencies() {
    return De({ icon: () => import("./calcite-icon-B2sYQpao.js"), list: () => import("./calcite-list-DZINiZMI.js"), "list-item": () => import("./calcite-list-item-C43XzASE.js"), notice: () => import("./calcite-notice-CguaBbDS.js") });
  }
  destroy() {
    this._unobserveRelatedFeatureObserver(), this._featureElementInfo = js(this._featureElementInfo);
  }
  get displayShowAllButton() {
    const { showAllEnabled: t, featureCount: e, displayCount: i, state: s } = this.viewModel;
    return !t && !!e && s === "ready" && (e > i || i === 0);
  }
  get displayListItems() {
    return this.displayShowAllButton || this.viewModel.relatedFeatureViewModels.length > 0;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(t) {
    this.viewModel.description = t;
  }
  get featureCountDescription() {
    const { messages: t } = this, { featureCount: e } = this.viewModel;
    return oe(t?.numberRecords, { number: e });
  }
  get title() {
    return this.viewModel.title;
  }
  set title(t) {
    this.viewModel.title = t;
  }
  castVisibleElements(t) {
    return { ...Fi, ...t };
  }
  render() {
    const { state: t } = this.viewModel;
    return u("div", { class: this.classes(ae.base, F.widget) }, this._featureElementInfo?.render(), t === "loading" ? this._renderLoading() : t === "disabled" ? this._renderRelationshipNotFound() : this._renderRelatedFeatures());
  }
  _renderStickyLoading() {
    return this.viewModel.state === "querying" ? u("div", { class: ae.stickySpinnerContainer, key: "sticky-loader" }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return u("span", { class: this.classes(te.loadingIndicator, F.rotating, ae.spinner) });
  }
  _renderLoading() {
    return u("div", { class: ae.loadingSpinnerContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderShowAllIconNode() {
    return u("calcite-icon", { icon: "list", scale: "s", slot: "content-end" });
  }
  _renderChevronIconNode() {
    const t = Ee(this.container) ? "chevron-left" : "chevron-right";
    return u("calcite-icon", { icon: t, scale: "s", slot: "content-end" });
  }
  _renderRelatedFeature(t) {
    const { itemDescriptionFieldName: e } = this.viewModel, i = t.title;
    t.description = e && t.formattedAttributes?.global[e];
    const s = t.state === "loading";
    return u("calcite-list-item", { class: this.classes(ae.listItem, { [ae.listItemHidden]: s }), description: t.description ?? "", key: t.uid, label: i, onCalciteListItemSelect: () => this.emit("select-record", { featureViewModel: t }) }, this._renderChevronIconNode());
  }
  _renderShowAllListItem() {
    return this.displayShowAllButton ? u("calcite-list-item", { description: this.featureCountDescription, key: "show-all-item", label: this.messages?.showAll, onCalciteListItemSelect: () => this.emit("show-all-records") }, this._renderShowAllIconNode()) : null;
  }
  _renderNoRelatedFeaturesMessage() {
    return u("calcite-notice", { icon: "information", key: "no-related-features-message", kind: "brand", open: !0, scale: "s", width: "full" }, u("div", { slot: "message" }, this.messages?.noRelatedFeatures));
  }
  _renderFeatureObserver() {
    return u("div", { afterCreate: this._relatedFeatureIntersectionObserverCreated, bind: this, class: ae.featureObserver, key: "feature-observer" });
  }
  _renderList() {
    const { relatedFeatureViewModels: t } = this.viewModel;
    return u("calcite-list", null, t.toArray().map((e) => this._renderRelatedFeature(e)), this._renderShowAllListItem());
  }
  _renderRelatedFeatures() {
    const { displayListItems: t } = this, { state: e } = this.viewModel;
    return u("div", { class: this.classes(ae.listContainer, { [ae.listContainerQuerying]: e === "querying" }), key: "list-container" }, t ? this._renderList() : e === "ready" ? this._renderNoRelatedFeaturesMessage() : null, this._renderStickyLoading(), this._renderFeatureObserver());
  }
  _renderRelationshipNotFound() {
    return u("calcite-notice", { icon: "exclamation-mark-triangle", key: "relationship-not-found", kind: "danger", open: !0, scale: "s", width: "full" }, u("div", { slot: "message" }, this.messages?.relationshipNotFound));
  }
  _setupRelatedFeatureViewModels() {
    const { relatedFeatureViewModels: t } = this.viewModel, e = "related-feature-viewmodels";
    this.removeHandles(e), t?.forEach((i) => {
      this.addHandles(g(() => [i.title, i.state], () => this.scheduleRender(), L), e);
    }), this.scheduleRender();
  }
  _setupFeatureElementInfo() {
    const { headingLevel: t, visibleElements: e } = this, i = e.description && this.description, s = e.title && this.title;
    this._featureElementInfo?.set({ description: i, title: s, headingLevel: t });
  }
  async _handleRelatedFeatureObserverChange() {
    this._unobserveRelatedFeatureObserver();
    const { state: t, showAllEnabled: e } = this.viewModel;
    await ji(0), this._relatedFeatureIntersectionObserverNode && t === "ready" && e && this._relatedFeatureIntersectionObserver.observe(this._relatedFeatureIntersectionObserverNode);
  }
  _relatedFeatureIntersectionObserverCreated(t) {
    this._relatedFeatureIntersectionObserverNode = t;
  }
  _unobserveRelatedFeatureObserver() {
    this._relatedFeatureIntersectionObserverNode && this._relatedFeatureIntersectionObserver.unobserve(this._relatedFeatureIntersectionObserverNode);
  }
};
o([a()], G.prototype, "_relatedFeatureIntersectionObserverNode", void 0), o([a({ readOnly: !0 })], G.prototype, "displayShowAllButton", null), o([a({ readOnly: !0 })], G.prototype, "displayListItems", null), o([a()], G.prototype, "description", null), o([a({ readOnly: !0 })], G.prototype, "featureCountDescription", null), o([a()], G.prototype, "headingLevel", void 0), o([a()], G.prototype, "title", null), o([a({ type: Xt })], G.prototype, "viewModel", void 0), o([a(), K("esri/widgets/Feature/t9n/Feature")], G.prototype, "messages", void 0), o([a(), K("esri/t9n/common")], G.prototype, "messagesCommon", void 0), o([a()], G.prototype, "visibleElements", void 0), o([Ve("visibleElements")], G.prototype, "castVisibleElements", null), G = o([P("esri.widgets.Feature.FeatureRelationship")], G);
const Ii = G;
let Zr = class {
  constructor(e, i) {
    this.preLayerQueryCallback = e, this.preRequestCallback = i, this.preLayerQueryCallback || (this.preLayerQueryCallback = (s) => {
    }), this.preRequestCallback || (this.preLayerQueryCallback = (s) => {
    });
  }
};
var Ue;
const Gr = 1, Ci = "content-view-models", Ai = "relationship-view-models", $i = { attachmentsContent: !0, chartAnimation: !0, customContent: !0, expressionContent: !0, fieldsContent: !0, mediaContent: !0, textContent: !0, relationshipContent: !0 };
let R = Ue = class extends Hi(ue) {
  constructor(t) {
    super(t), this._error = null, this._featureAbortController = null, this._graphicChangedThrottled = ot(this._graphicChanged, Gr, this), this._expressionAttributes = null, this._graphicExpressionAttributes = null, this.abilities = { ...$i }, this.content = null, this.contentViewModels = [], this.description = null, this.defaultPopupTemplateEnabled = !1, this.formattedAttributes = null, this.lastEditInfo = null, this.location = null, this.relatedInfos = /* @__PURE__ */ new Map(), this.title = "", this.view = null, this._isAllowedContentType = (e) => {
      const { abilities: i } = this;
      return e.type === "attachments" && !!i.attachmentsContent || e.type === "custom" && !!i.customContent || e.type === "fields" && !!i.fieldsContent || e.type === "media" && !!i.mediaContent || e.type === "text" && !!i.textContent || e.type === "expression" && !!i.expressionContent || e.type === "relationship" && !!i.relationshipContent;
    }, this.addHandles(g(() => [this.graphic, this._effectivePopupTemplate, this.abilities, this.timeZone], () => this._graphicChangedThrottled(), L));
  }
  initialize() {
    this.addHandles(this._graphicChangedThrottled);
  }
  destroy() {
    this._clear(), this._cancelFeatureQuery(), this._error = null, this.graphic = null, this._destroyContentViewModels(), this.relatedInfos.clear();
  }
  get _effectivePopupTemplate() {
    return this.graphic != null ? this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled) : null;
  }
  get _fieldInfoMap() {
    return qn(ui(this._effectivePopupTemplate), this._sourceLayer);
  }
  get _sourceLayer() {
    return Yi(this.graphic);
  }
  castAbilities(t) {
    return { ...$i, ...t };
  }
  get isTable() {
    return this._sourceLayer?.isTable || !1;
  }
  get state() {
    return this.graphic ? this._error ? "error" : this.waitingForContent ? "loading" : "ready" : "disabled";
  }
  set graphic(t) {
    this._set("graphic", t?.clone() ?? null);
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(t) {
    this._override("spatialReference", t);
  }
  get timeZone() {
    return this.view?.timeZone ?? Us;
  }
  set timeZone(t) {
    this._overrideIfSome("timeZone", t);
  }
  get map() {
    return this.view?.map || null;
  }
  set map(t) {
    this._override("map", t);
  }
  get waitingForContent() {
    return !!this._featureAbortController;
  }
  setActiveMedia(t, e) {
    const i = this.contentViewModels[t];
    i instanceof Fe && i.setActiveMedia(e);
  }
  nextMedia(t) {
    const e = this.contentViewModels[t];
    e instanceof Fe && e.next();
  }
  previousMedia(t) {
    const e = this.contentViewModels[t];
    e instanceof Fe && e.previous();
  }
  async updateGeometry() {
    const { graphic: t, spatialReference: e, _sourceLayer: i } = this;
    await i?.load();
    const s = i?.objectIdField;
    if (!s || !t || !i) return;
    const n = t?.attributes?.[s];
    if (n == null) return;
    const r = [n];
    if (!t.geometry) {
      const l = await ns({ layer: i, graphic: t, outFields: [], objectIds: r, returnGeometry: !0, spatialReference: e }), d = l?.geometry;
      d && (t.geometry = d);
    }
  }
  _clear() {
    this._set("title", ""), this._set("content", null), this._set("formattedAttributes", null);
  }
  async _graphicChanged() {
    this._cancelFeatureQuery(), this._error = null, this._clear();
    const { graphic: t } = this;
    if (!t) return;
    const e = new AbortController();
    this._featureAbortController = e;
    try {
      await this._queryFeature({ signal: e.signal });
    } catch (i) {
      Lt(i) || (this._error = i, q.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: i, graphic: t, popupTemplate: this._effectivePopupTemplate }));
    }
    this._featureAbortController === e && (this._featureAbortController = null);
  }
  _cancelFeatureQuery() {
    const { _featureAbortController: t } = this;
    t && t.abort(), this._featureAbortController = null;
  }
  _compileContentElement(t, e) {
    return t.type === "attachments" ? this._compileAttachments(t, e) : t.type === "custom" ? this._compileCustom(t, e) : t.type === "fields" ? this._compileFields(t, e) : t.type === "media" ? this._compileMedia(t, e) : t.type === "text" ? this._compileText(t, e) : t.type === "expression" ? this._compileExpression(t, e) : t.type === "relationship" ? this._compileRelationship(t, e) : void 0;
  }
  _compileContent(t) {
    if (this._destroyContentViewModels(), this.graphic) return Array.isArray(t) ? t.filter(this._isAllowedContentType).map((e, i) => this._compileContentElement(e, i)).filter(ct) : typeof t == "string" ? this._compileText(new Wi({ text: t }), 0).text : t;
  }
  _destroyContentViewModels() {
    this.removeHandles(Ai), this.removeHandles(Ci), this.contentViewModels.forEach((t) => t && !t.destroyed && t.destroy()), this._set("contentViewModels", []);
  }
  _matchesFeature(t, e) {
    const i = t?.graphic?.getObjectId(), s = e?.getObjectId();
    return i != null && s != null && i === s;
  }
  _setRelatedFeaturesViewModels({ relatedFeatureViewModels: t, relatedFeatures: e, map: i }) {
    const { view: s, spatialReference: n } = this;
    e?.filter(Boolean).forEach((r) => {
      t.some((l) => this._matchesFeature(l, r)) || t.add(new Ue({ abilities: { relationshipContent: !1 }, map: i, view: s, spatialReference: n, graphic: r }));
    }), t.forEach((r) => {
      e?.find((d) => this._matchesFeature(r, d)) || t.remove(r);
    });
  }
  _setExpressionContentVM(t, e) {
    const i = this.formattedAttributes, { contentElement: s, contentElementViewModel: n } = t, r = s?.type;
    n && r && (r === "fields" && (this._createFieldsFormattedAttributes({ contentElement: s, contentElementIndex: e, formattedAttributes: i }), n.set(this._createFieldsVMParams(s, e))), r === "media" && (this._createMediaFormattedAttributes({ contentElement: s, contentElementIndex: e, formattedAttributes: i }), n.set(this._createMediaVMParams(s, e))), r === "text" && n.set(this._createTextVMParams(s)));
  }
  _compileRelationship(t, e) {
    const { displayCount: i, orderByFields: s, relationshipId: n, title: r, description: l } = t, { _sourceLayer: d, graphic: c, map: h } = this;
    if (!ts(d)) return;
    const p = new Xt({ displayCount: i, graphic: c, orderByFields: s, relationshipId: n, layer: d, map: h, ...this._compileTitleAndDesc({ title: r, description: l }) });
    return this.contentViewModels[e] = p, this.addHandles($e(() => p.relatedFeatures, "change", () => this._setRelatedFeaturesViewModels(p)), Ai), t;
  }
  _compileExpression(t, e) {
    const { expressionInfo: i } = t, { graphic: s, map: n, spatialReference: r, view: l, location: d } = this, c = new Qt({ expressionInfo: i, graphic: s, interceptor: Ue.interceptor, map: n, spatialReference: r, view: l, location: d });
    return this.contentViewModels[e] = c, this.addHandles(g(() => c.contentElementViewModel, () => this._setExpressionContentVM(c, e), L), Ci), t;
  }
  _compileAttachments(t, e) {
    const { graphic: i } = this, { description: s, title: n } = t;
    return this.contentViewModels[e] = new Zt({ graphic: i, ...this._compileTitleAndDesc({ title: n, description: s }) }), t;
  }
  _compileCustom(t, e) {
    const { graphic: i } = this, { creator: s, destroyer: n } = t;
    return this.contentViewModels[e] = new lt({ graphic: i, creator: s, destroyer: n }), t;
  }
  _compileTitleAndDesc({ title: t, description: e }) {
    const { _fieldInfoMap: i, _sourceLayer: s, graphic: n, formattedAttributes: r } = this, l = n?.attributes, d = this._expressionAttributes, c = r.global;
    return { title: Me({ attributes: l, fieldInfoMap: i, globalAttributes: c, expressionAttributes: d, layer: s, text: t }), description: Me({ attributes: l, fieldInfoMap: i, globalAttributes: c, expressionAttributes: d, layer: s, text: e }) };
  }
  _createFieldsVMParams(t, e) {
    const i = this._effectivePopupTemplate, s = this.formattedAttributes, n = { ...s?.global, ...s?.content[e] }, r = t?.fieldInfos || i?.fieldInfos, l = r?.filter(({ fieldName: p }) => Wt(p) || ce(p) || n.hasOwnProperty(p)), d = i?.expressionInfos, { description: c, title: h } = t;
    return { attributes: n, expressionInfos: d, fieldInfos: l, ...this._compileTitleAndDesc({ title: h, description: c }) };
  }
  _compileFields(t, e) {
    const i = t.clone(), s = new ht(this._createFieldsVMParams(t, e));
    return this.contentViewModels[e] = s, i.fieldInfos = s.formattedFieldInfos.slice(0), i;
  }
  _createMediaVMParams(t, e) {
    const { abilities: i, graphic: s, _fieldInfoMap: n, _effectivePopupTemplate: r, relatedInfos: l, _sourceLayer: d, _expressionAttributes: c } = this, h = this.formattedAttributes, p = s?.attributes ?? {}, { description: m, mediaInfos: f, title: v } = t;
    return { abilities: { chartAnimation: i.chartAnimation }, activeMediaInfoIndex: t.activeMediaInfoIndex || 0, attributes: p, isAggregate: s?.isAggregate, layer: d, fieldInfoMap: n, formattedAttributes: { ...h?.global, ...h?.content[e] }, expressionAttributes: c, mediaInfos: f, popupTemplate: r, relatedInfos: l, ...this._compileTitleAndDesc({ title: v, description: m }) };
  }
  _compileMedia(t, e) {
    const i = t.clone(), s = new Fe(this._createMediaVMParams(t, e));
    return i.mediaInfos = s.formattedMediaInfos.slice(0), this.contentViewModels[e] = s, i;
  }
  _createTextVMParams(t) {
    const { graphic: e, _fieldInfoMap: i, _sourceLayer: s, _expressionAttributes: n } = this;
    if (t && t.text) {
      const r = e?.attributes ?? {}, l = this.formattedAttributes?.global ?? {};
      t.text = Me({ attributes: r, fieldInfoMap: i, globalAttributes: l, expressionAttributes: n, layer: s, text: t.text });
    }
    return { graphic: e, creator: t.text };
  }
  _compileText(t, e) {
    const i = t.clone();
    return this.contentViewModels[e] = new lt(this._createTextVMParams(i)), i;
  }
  _compileLastEditInfo() {
    const { _effectivePopupTemplate: t, _sourceLayer: e, graphic: i, timeZone: s } = this;
    if (!t) return;
    const { lastEditInfoEnabled: n } = t, r = e?.editFieldsInfo;
    return n && r ? Dn(r, i?.attributes, s, e) : void 0;
  }
  _compileTitle(t) {
    const { _fieldInfoMap: e, _sourceLayer: i, graphic: s, _expressionAttributes: n } = this, r = s?.attributes ?? {}, l = this.formattedAttributes?.global ?? {};
    return Me({ attributes: r, fieldInfoMap: e, globalAttributes: l, expressionAttributes: n, layer: i, text: t });
  }
  async _getTitle() {
    const { _effectivePopupTemplate: t, graphic: e } = this;
    if (!e) return null;
    const i = t?.title;
    return at(i, { graphic: e });
  }
  async _getContent() {
    const { _effectivePopupTemplate: t, graphic: e } = this;
    if (!e) return null;
    const i = t?.content;
    return at(i, { graphic: e });
  }
  async _queryFeature(t) {
    const { _featureAbortController: e, _sourceLayer: i, graphic: s, _effectivePopupTemplate: n } = this, r = this.map, l = this.view, d = this.spatialReference, c = this.location;
    if (e !== this._featureAbortController || !s) return;
    await Wn({ graphic: s, popupTemplate: n, layer: i, spatialReference: d }, t);
    const { content: { value: h }, title: { value: p } } = await xe({ content: this._getContent(), title: this._getTitle() }), { expressionAttributes: { value: m } } = await xe({ checkForRelatedFeatures: this._checkForRelatedFeatures(t), expressionAttributes: Wr({ expressionInfos: n?.expressionInfos, spatialReference: d, graphic: s, map: r, interceptor: Ue.interceptor, view: l, options: t, location: c }) });
    e === this._featureAbortController && s && (this._expressionAttributes = m, this._graphicExpressionAttributes = { ...s.attributes, ...m }, this._set("formattedAttributes", this._createFormattedAttributes(h)), this._set("title", this._compileTitle(p)), this._set("lastEditInfo", this._compileLastEditInfo() || null), this._set("content", this._compileContent(h) || null));
  }
  _createMediaFormattedAttributes({ contentElement: t, contentElementIndex: e, formattedAttributes: i }) {
    const { _effectivePopupTemplate: s, graphic: n, relatedInfos: r, _sourceLayer: l, _fieldInfoMap: d, _graphicExpressionAttributes: c, timeZone: h } = this;
    i.content[e] = _t({ fieldInfos: s?.fieldInfos, graphic: n, attributes: { ...c, ...t.attributes }, layer: l, fieldInfoMap: d, relatedInfos: r, timeZone: h });
  }
  _createFieldsFormattedAttributes({ contentElement: t, contentElementIndex: e, formattedAttributes: i }) {
    if (t.fieldInfos) {
      const { graphic: s, relatedInfos: n, _sourceLayer: r, _fieldInfoMap: l, _graphicExpressionAttributes: d, timeZone: c } = this;
      i.content[e] = _t({ fieldInfos: t.fieldInfos, graphic: s, attributes: { ...d, ...t.attributes }, layer: r, fieldInfoMap: l, relatedInfos: n, timeZone: c });
    }
  }
  _createFormattedAttributes(t) {
    const { _effectivePopupTemplate: e, graphic: i, relatedInfos: s, _sourceLayer: n, _fieldInfoMap: r, _graphicExpressionAttributes: l, timeZone: d } = this, c = e?.fieldInfos, h = { global: _t({ fieldInfos: c, graphic: i, attributes: l, layer: n, fieldInfoMap: r, relatedInfos: s, timeZone: d }), content: [] };
    return Array.isArray(t) && t.forEach((p, m) => {
      p.type === "fields" && this._createFieldsFormattedAttributes({ contentElement: p, contentElementIndex: m, formattedAttributes: h }), p.type === "media" && this._createMediaFormattedAttributes({ contentElement: p, contentElementIndex: m, formattedAttributes: h });
    }), h;
  }
  _checkForRelatedFeatures(t) {
    const { graphic: e, _effectivePopupTemplate: i } = this;
    return this._queryRelatedInfos(e, ui(i), t);
  }
  async _queryRelatedInfos(t, e, i) {
    const { relatedInfos: s, _sourceLayer: n } = this;
    s.clear();
    const r = n?.associatedLayer != null ? await n?.associatedLayer.load(i) : n;
    if (!r || !t || !e.filter((h) => h && ce(h.fieldName))?.length) return;
    e.forEach((h) => this._configureRelatedInfo(h, r));
    const d = await Er({ relatedInfos: s, layer: r }, i);
    Object.keys(d).forEach((h) => {
      const p = s.get(h.toString()), m = d[h]?.value;
      p && m && (p.layerInfo = m.data);
    });
    const c = await xr({ graphic: t, relatedInfos: s, layer: r }, i);
    Object.keys(c).forEach((h) => {
      br(c[h]?.value, s.get(h.toString()));
    });
  }
  _configureRelatedInfo(t, e) {
    const { relatedInfos: i } = this, s = tt(t.fieldName);
    if (!s) return;
    const { layerId: n, fieldName: r } = s;
    if (!n) return;
    const l = i.get(n.toString()) || wr(n, e);
    l && (Tr({ relatedInfo: l, fieldName: r, fieldInfo: t }), this.relatedInfos.set(n, l));
  }
};
R.interceptor = new Zr(Un, Zn), o([a()], R.prototype, "_error", void 0), o([a()], R.prototype, "_featureAbortController", void 0), o([a({ readOnly: !0 })], R.prototype, "_effectivePopupTemplate", null), o([a({ readOnly: !0 })], R.prototype, "_fieldInfoMap", null), o([a({ readOnly: !0 })], R.prototype, "_sourceLayer", null), o([a()], R.prototype, "abilities", void 0), o([Ve("abilities")], R.prototype, "castAbilities", null), o([a({ readOnly: !0 })], R.prototype, "content", void 0), o([a({ readOnly: !0 })], R.prototype, "contentViewModels", void 0), o([a()], R.prototype, "description", void 0), o([a({ type: Boolean })], R.prototype, "defaultPopupTemplateEnabled", void 0), o([a({ readOnly: !0 })], R.prototype, "isTable", null), o([a({ readOnly: !0 })], R.prototype, "state", null), o([a({ readOnly: !0 })], R.prototype, "formattedAttributes", void 0), o([a({ type: Be, value: null })], R.prototype, "graphic", null), o([a({ readOnly: !0 })], R.prototype, "lastEditInfo", void 0), o([a({ type: qt })], R.prototype, "location", void 0), o([a({ readOnly: !0 })], R.prototype, "relatedInfos", void 0), o([a()], R.prototype, "spatialReference", null), o([a()], R.prototype, "timeZone", null), o([a({ readOnly: !0 })], R.prototype, "title", void 0), o([a()], R.prototype, "map", null), o([a({ readOnly: !0 })], R.prototype, "waitingForContent", null), o([a()], R.prototype, "view", void 0), R = Ue = o([P("esri.widgets.Feature.FeatureViewModel")], R);
const Yt = R, z = "esri-feature", N = { base: z, container: `${z}__size-container`, title: `${z}__title`, main: `${z}__main-container`, btn: `${z}__button`, icon: `${z}__icon`, content: `${z}__content`, contentNode: `${z}__content-node`, contentNodeText: `${z}__content-node--text`, contentElement: `${z}__content-element`, text: `${z}__text`, lastEditedInfo: `${z}__last-edited-info`, fields: `${z}__fields`, fieldHeader: `${z}__field-header`, fieldData: `${z}__field-data`, fieldDataDate: `${z}__field-data--date`, loadingSpinnerContainer: `${z}__loading-container`, spinner: `${z}__loading-spinner` }, ps = (t) => {
  let e = class extends t {
    constructor() {
      super(...arguments), this.renderNodeContent = (i) => ls(i) && !i.destroyed ? u("div", { class: N.contentNode, key: i }, i.render()) : i instanceof HTMLElement ? u("div", { afterCreate: this._attachToNode, bind: i, class: N.contentNode, key: i }) : tr(i) ? u("div", { afterCreate: this._attachToNode, bind: i.domNode, class: N.contentNode, key: i }) : null;
    }
    _attachToNode(i) {
      const s = this;
      i.appendChild(s);
    }
  };
  return e = o([P("esri.widgets.Feature.ContentMixin")], e), e;
};
var Nt;
const Ei = { title: !0, content: !0, lastEditedInfo: !0 }, xi = "relationship-handles";
let D = Nt = class extends ps(J) {
  constructor(t, e) {
    super(t, e), this._contentWidgets = [], this.flowItems = null, this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.visibleElements = { ...Ei }, this.viewModel = new Yt();
  }
  initialize() {
    this.addHandles(g(() => this.viewModel?.contentViewModels, () => this._setupContentWidgets(), L));
  }
  loadDependencies() {
    return De({ notice: () => import("./calcite-notice-CguaBbDS.js") });
  }
  destroy() {
    this._destroyContentWidgets();
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(t) {
    this.viewModel.graphic = t;
  }
  get defaultPopupTemplateEnabled() {
    return this.viewModel.defaultPopupTemplateEnabled;
  }
  set defaultPopupTemplateEnabled(t) {
    this.viewModel.defaultPopupTemplateEnabled = t;
  }
  get isTable() {
    return this.viewModel.isTable;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(t) {
    this._overrideIfSome("label", t);
  }
  get spatialReference() {
    return this.viewModel.spatialReference;
  }
  set spatialReference(t) {
    this.viewModel.spatialReference = t;
  }
  get timeZone() {
    return this.viewModel.timeZone;
  }
  set timeZone(t) {
    this.viewModel.timeZone = t;
  }
  get title() {
    return this.viewModel.title;
  }
  castVisibleElements(t) {
    return { ...Ei, ...t };
  }
  get map() {
    return this.viewModel.map;
  }
  set map(t) {
    this.viewModel.map = t;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(t) {
    this.viewModel.view = t;
  }
  setActiveMedia(t, e) {
    return this.viewModel.setActiveMedia(t, e);
  }
  nextMedia(t) {
    return this.viewModel.nextMedia(t);
  }
  previousMedia(t) {
    return this.viewModel.previousMedia(t);
  }
  render() {
    const { state: t } = this.viewModel, e = u("div", { class: N.container, key: "container" }, this._renderTitle(), t === "error" ? this._renderError() : t === "loading" ? this._renderLoading() : this._renderContentContainer());
    return u("div", { class: this.classes(N.base, F.widget) }, e);
  }
  _renderError() {
    const { messagesCommon: t, messages: e, visibleElements: i } = this;
    return u("calcite-notice", { icon: "exclamation-mark-circle", kind: "danger", open: !0, scale: "s" }, i.title ? u("div", { key: "error-title", slot: "title" }, t.errorMessage) : null, u("div", { key: "error-message", slot: "message" }, e.loadingError));
  }
  _renderLoading() {
    return u("div", { class: N.loadingSpinnerContainer, key: "loading-container" }, u("span", { class: this.classes(te.loadingIndicator, F.rotating, N.spinner) }));
  }
  _renderContentContainer() {
    const { visibleElements: t } = this;
    return t.content ? u("div", { class: N.main }, [this._renderContent(), this._renderLastEditInfo()]) : null;
  }
  _renderTitle() {
    const { visibleElements: t, title: e } = this;
    return t.title ? u(Gt, { class: N.title, innerHTML: e, level: this.headingLevel }) : null;
  }
  _renderContent() {
    const t = this.viewModel.content, e = "content";
    if (!t) return null;
    if (Array.isArray(t)) return t.length ? u("div", { class: N.contentNode, key: `${e}-content-elements` }, t.map(this._renderContentElement, this)) : null;
    if (typeof t == "string") {
      const i = this._contentWidgets[0];
      return !i || i.destroyed ? null : u("div", { class: this.classes(N.contentNode, N.contentNodeText), key: `${e}-content` }, i.render());
    }
    return this.renderNodeContent(t);
  }
  _renderContentElement(t, e) {
    const { visibleElements: i } = this;
    if (typeof i.content != "boolean" && !i.content?.[t.type]) return null;
    switch (t.type) {
      case "attachments":
        return this._renderAttachments(e);
      case "custom":
        return this._renderCustom(t, e);
      case "fields":
        return this._renderFields(e);
      case "media":
        return this._renderMedia(e);
      case "text":
        return this._renderText(t, e);
      case "expression":
        return this._renderExpression(e);
      case "relationship":
        return this._renderRelationship(e);
      default:
        return null;
    }
  }
  _renderAttachments(t) {
    const e = this._contentWidgets[t];
    if (!e || e.destroyed) return null;
    const { state: i, attachmentInfos: s } = e.viewModel;
    return i === "loading" || s.length > 0 ? u("div", { class: this.classes(N.contentElement), key: this._buildKey("attachments-element", t) }, e.render()) : null;
  }
  _renderRelationship(t) {
    const e = this._contentWidgets[t];
    return e && !e.destroyed && this.flowItems ? u("div", { class: N.contentElement, key: this._buildKey("relationship-element", t) }, e.render()) : null;
  }
  _renderExpression(t) {
    const e = this._contentWidgets[t];
    return !e || e.destroyed ? null : u("div", { class: N.contentElement, key: this._buildKey("expression-element", t) }, e.render());
  }
  _renderCustom(t, e) {
    const { creator: i } = t, s = this._contentWidgets[e];
    return !s || s.destroyed ? null : i ? u("div", { class: N.contentElement, key: this._buildKey("custom-element", e) }, s.render()) : null;
  }
  _renderFields(t) {
    const e = this._contentWidgets[t];
    return !e || e.destroyed ? null : u("div", { class: N.contentElement, key: this._buildKey("fields-element", t) }, e.render());
  }
  _renderMedia(t) {
    const e = this._contentWidgets[t];
    return !e || e.destroyed ? null : u("div", { class: N.contentElement, key: this._buildKey("media-element", t) }, e.render());
  }
  _renderLastEditInfo() {
    const { visibleElements: t, messages: e } = this, { lastEditInfo: i } = this.viewModel;
    if (!i || !t.lastEditedInfo) return null;
    const { date: s, user: n } = i, r = i.type === "edit" ? n ? e.lastEditedByUser : e.lastEdited : n ? e.lastCreatedByUser : e.lastCreated, l = oe(r, { date: s, user: n });
    return u("div", { class: this.classes(N.lastEditedInfo, N.contentElement), key: "edit-info-element" }, l);
  }
  _renderText(t, e) {
    const i = t.text, s = this._contentWidgets[e];
    return !s || s.destroyed ? null : i ? u("div", { class: this.classes(N.contentElement, N.text), key: this._buildKey("text-element", e) }, s.render()) : null;
  }
  _buildKey(t, ...e) {
    return `${t}__${this.viewModel?.graphic?.uid || "0"}-${e.join("-")}`;
  }
  _destroyContentWidget(t) {
    t && (t.viewModel = null, !t.destroyed && t.destroy());
  }
  _destroyContentWidgets() {
    this.removeHandles(xi), this._contentWidgets.forEach((t) => this._destroyContentWidget(t)), this._contentWidgets = [];
  }
  _addFeatureRelationshipHandles(t) {
    const { flowItems: e, visibleElements: i } = this;
    this.addHandles([$e(() => t, "select-record", ({ featureViewModel: s }) => {
      e && (s.abilities = { relationshipContent: !0 }, e.push(new Nt({ flowItems: e, viewModel: s, visibleElements: i })));
    }), $e(() => t, "show-all-records", () => {
      if (!e) return;
      const { viewModel: s } = t;
      s.showAllEnabled = !0;
      const n = new Ii({ visibleElements: { title: !1, description: !1 }, viewModel: s });
      this._addFeatureRelationshipHandles(n), e.push(n);
    })], xi);
  }
  _setupContentWidgets() {
    this._destroyContentWidgets();
    const { headingLevel: t, visibleElements: e } = this, i = this.viewModel?.content, { contentViewModels: s } = this.viewModel;
    if (Array.isArray(i)) i.forEach((n, r) => {
      if (n.type === "attachments" && (this._contentWidgets[r] = new Jn({ displayType: n.displayType, headingLevel: e.title ? t + 1 : t, viewModel: s[r] })), n.type === "fields" && (this._contentWidgets[r] = new ds({ viewModel: s[r] })), n.type === "media" && (this._contentWidgets[r] = new cs({ viewModel: s[r] })), n.type === "text" && (this._contentWidgets[r] = new et({ viewModel: s[r] })), n.type === "custom" && (this._contentWidgets[r] = new et({ viewModel: s[r] })), n.type === "expression" && (this._contentWidgets[r] = new jr({ viewModel: s[r] })), n.type === "relationship") {
        const l = new Ii({ viewModel: s[r] });
        this._addFeatureRelationshipHandles(l), this._contentWidgets[r] = l;
      }
    }, this);
    else {
      const n = s[0];
      n && !n.destroyed && (this._contentWidgets[0] = new et({ viewModel: n }));
    }
    this.scheduleRender();
  }
};
o([a()], D.prototype, "graphic", null), o([a()], D.prototype, "defaultPopupTemplateEnabled", null), o([a()], D.prototype, "flowItems", void 0), o([a()], D.prototype, "headingLevel", void 0), o([a({ readOnly: !0 })], D.prototype, "isTable", null), o([a()], D.prototype, "label", null), o([a(), K("esri/widgets/Feature/t9n/Feature")], D.prototype, "messages", void 0), o([a(), K("esri/t9n/common")], D.prototype, "messagesCommon", void 0), o([a()], D.prototype, "spatialReference", null), o([a()], D.prototype, "timeZone", null), o([a({ readOnly: !0 })], D.prototype, "title", null), o([a()], D.prototype, "visibleElements", void 0), o([Ve("visibleElements")], D.prototype, "castVisibleElements", null), o([a()], D.prototype, "map", null), o([a()], D.prototype, "view", null), o([a({ type: Yt })], D.prototype, "viewModel", void 0), D = Nt = o([P("esri.widgets.Feature")], D);
const Qr = D;
let ve = class extends Zs.EventedAccessor {
  constructor(e) {
    super(e), this.location = null, this.screenLocationEnabled = !1, this.view = null, this.addHandles([rt(() => {
      const i = this.screenLocationEnabled ? this.view : null;
      return i ? [i.size, i.type === "3d" ? i.camera : i.viewpoint] : null;
    }, () => this.notifyChange("screenLocation")), g(() => this.screenLocation, (i, s) => {
      i != null && s != null && this.emit("view-change");
    })]);
  }
  destroy() {
    this.view = null;
  }
  get screenLocation() {
    const { location: e, view: i, screenLocationEnabled: s } = this, n = i?.spatialReference, r = n ? Gs(e, n).geometry : null;
    return s && r && i?.ready ? i.toScreen(r) : null;
  }
};
o([a()], ve.prototype, "location", void 0), o([a()], ve.prototype, "screenLocation", null), o([a()], ve.prototype, "screenLocationEnabled", void 0), o([a()], ve.prototype, "view", void 0), ve = o([P("esri.widgets.support.AnchorElementViewModel")], ve);
const ms = ve, Xr = "esri.widgets.CompassViewModel";
let st = class extends ms {
  constructor(e) {
    super(e), this.visible = !1;
  }
};
o([a()], st.prototype, "visible", void 0), st = o([P(Xr)], st);
const fs = st, xt = "esri-spinner", Tt = { base: xt, spinnerStart: `${xt}--start`, spinnerFinish: `${xt}--finish` };
let _e = class extends J {
  constructor(e, i) {
    super(e, i), this._animationDelay = 500, this._animationPromise = null, this.viewModel = new fs();
  }
  initialize() {
    this.addHandles(g(() => this.visible, (e) => this._visibleChange(e)));
  }
  destroy() {
    this._animationPromise = null;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(e) {
    this.viewModel.location = e;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e) {
    this.viewModel.view = e;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(e) {
    this.viewModel.visible = e;
  }
  show(e) {
    const { location: i, promise: s } = e ?? {};
    i && (this.viewModel.location = i), this.visible = !0;
    const n = () => this.hide();
    s && s.catch(() => {
    }).then(n);
  }
  hide() {
    this.visible = !1;
  }
  render() {
    const { visible: e } = this, { screenLocation: i } = this.viewModel, s = !!i, n = e && s, r = !e && s, l = { [Tt.spinnerStart]: n, [Tt.spinnerFinish]: r }, d = this._getPositionStyles();
    return u("div", { class: this.classes(Tt.base, l), styles: d });
  }
  _visibleChange(e) {
    if (e) return void (this.viewModel.screenLocationEnabled = !0);
    const i = ji(this._animationDelay);
    this._animationPromise = i, i.catch(() => {
    }).then(() => {
      this._animationPromise === i && (this.viewModel.screenLocationEnabled = !1, this._animationPromise = null);
    });
  }
  _getPositionStyles() {
    const { screenLocation: e, view: i } = this.viewModel;
    if (i == null || e == null) return {};
    const { padding: s } = i;
    return { left: e.x - s.left + "px", top: e.y - s.top + "px" };
  }
};
o([a()], _e.prototype, "location", null), o([a()], _e.prototype, "view", null), o([a({ type: fs })], _e.prototype, "viewModel", void 0), o([a()], _e.prototype, "visible", null), _e = o([P("esri.widgets.Spinner")], _e);
const Yr = _e, H = "esri-features", W = { icon: `${H}__icon`, actionImage: `${H}__action-image`, base: H, container: `${H}__container`, contentContainer: `${H}__content-container`, contentFeature: `${H}__content-feature`, flowItemCollapsed: `${H}__flow-item--collapsed`, header: `${H}__header`, footer: `${H}__footer`, featureMenuObserver: `${H}__feature-menu-observer`, actionExit: `${H}__action--exit`, loader: `${H}__loader`, featuresHeading: `${H}__heading`, paginationActionBar: `${H}__pagination-action-bar`, paginationPrevious: `${H}__pagination-previous`, paginationNext: `${H}__pagination-next` };
let we = class extends J {
  constructor(e, i) {
    super(e, i), this.messages = null, this.closed = !1, this.closable = !0, this._handleOpenRelatedFeature = (s) => {
      this.emit("open-related-feature", { feature: s });
    };
  }
  loadDependencies() {
    return De({ action: () => import("./calcite-action-B9HGIICk.js"), "flow-item": () => import("./calcite-flow-item-BbuMv5QM.js") });
  }
  render() {
    const { flowItems: e } = this, i = e?.toArray();
    return u(Qs, null, i?.map((s) => this._renderRelatedRecordsFlowItem(s)));
  }
  _handleCloseClick() {
    this.emit("close");
  }
  _handleExitClick() {
    this.emit("exit");
  }
  _handleRelatedRecordsBackClick() {
    const e = this.flowItems?.pop();
    e && ("showAllEnabled" in e.viewModel && (e.viewModel.showAllEnabled = !1), e && (e.viewModel = null, e.destroy()));
  }
  _renderRelatedRecordsFlowItem(e) {
    const { messages: i, closable: s, closed: n } = this, r = "graphic" in e && !e.isTable;
    return u("calcite-flow-item", { bind: this, closable: s, closed: n, description: this._getRelatedRecordsFlowItemDescription(e), heading: e.title ?? "", key: `flow-item-${e.viewModel.uid}`, onCalciteFlowItemBack: (l) => {
      l.preventDefault(), this._handleRelatedRecordsBackClick();
    }, onCalciteFlowItemClose: this._handleCloseClick }, u("calcite-action", { appearance: "transparent", bind: this, class: W.actionExit, icon: "move-up", key: "exit-related-records-action", label: i.exitRelatedRecords, onclick: this._handleExitClick, scale: "m", slot: "header-actions-start", text: i.exitRelatedRecords, title: i.exitRelatedRecords }), r ? u("calcite-action", { appearance: "transparent", bind: this, icon: "zoom-to-object", key: "open-related-feature-action", label: i.selectFeature, onclick: () => this._handleOpenRelatedFeature(e), scale: "m", slot: "header-actions-end", text: i.selectFeature, title: i.selectFeature }) : null, u("div", { class: W.container }, e.render()));
  }
  _getRelatedRecordsFlowItemDescription(e) {
    return "featureCountDescription" in e ? e.featureCountDescription : e.viewModel.description ?? "";
  }
};
o([a()], we.prototype, "flowItems", void 0), o([a(), K("esri/widgets/Features/t9n/Features")], we.prototype, "messages", void 0), o([a()], we.prototype, "closed", void 0), o([a()], we.prototype, "closable", void 0), we = o([P("esri.widgets.Features.FeaturesRelatedRecords")], we);
const Kr = we;
let Jr = class {
  constructor(e) {
    this._observable = new Xs(), this._set = new Set(e);
  }
  get size() {
    return ge(this._observable), this._set.size;
  }
  add(e) {
    const i = this._set.size;
    return this._set.add(e), this._set.size !== i && this._observable.notify(), this;
  }
  clear() {
    this._set.size > 0 && (this._set.clear(), this._observable.notify());
  }
  delete(e) {
    const i = this._set.delete(e);
    return i && this._observable.notify(), i;
  }
  entries() {
    return ge(this._observable), this._set.entries();
  }
  forEach(e, i) {
    ge(this._observable), this._set.forEach((s, n) => e.call(i, s, n, this), i);
  }
  has(e) {
    return ge(this._observable), this._set.has(e);
  }
  keys() {
    return ge(this._observable), this._set.keys();
  }
  values() {
    return ge(this._observable), this._set.values();
  }
  [Symbol.iterator]() {
    return ge(this._observable), this._set[Symbol.iterator]();
  }
  get [Symbol.toStringTag]() {
    return this._set[Symbol.toStringTag];
  }
};
const Ti = "OBJECTID";
var Te;
(function(t) {
  t[t.size = 22] = "size", t[t.lineWidth = 50] = "lineWidth", t[t.maxSize = 120] = "maxSize", t[t.maxOutlineSize = 80] = "maxOutlineSize", t[t.tallSymbolWidth = 20] = "tallSymbolWidth";
})(Te || (Te = {}));
const ki = Ui("android");
Ui("chrome") || ki && ki >= 4;
Ys();
Te.size;
Te.maxSize;
Te.maxOutlineSize;
Te.lineWidth;
Te.tallSymbolWidth;
function gs(t) {
  return t && "opacity" in t ? t.opacity * gs(t.parent) : 1;
}
async function Li(t, e) {
  if (!t) return;
  const i = t.sourceLayer, s = (e != null && e.useSourceLayer ? i : t.layer) ?? i, n = gs(s);
  if (t.symbol != null && (e == null || e.ignoreGraphicSymbol !== !0)) {
    const w = t.symbol.type === "web-style" ? await Ks(t.symbol, { ...e, cache: e != null ? e.webStyleCache : null }) : t.symbol.clone();
    return yt(w, null, n), w;
  }
  const r = e?.renderer ?? eo(s);
  let l = r && "getSymbolAsync" in r ? await r.getSymbolAsync(t, e) : null;
  if (!l) return;
  if (l = l.type === "web-style" ? await l.fetchSymbol({ ...e, cache: e != null ? e.webStyleCache : null }) : l.clone(), !r || !("visualVariables" in r) || !r.visualVariables?.length) return yt(l, null, n), l;
  if ("arcadeRequiredForVisualVariables" in r && r.arcadeRequiredForVisualVariables && e?.arcade == null) {
    const w = { ...e };
    w.arcade = await Di(), e = w;
  }
  const { getColor: d, getOpacity: c, getAllSizes: h, getRotationAngle: p } = await import("./main-DhLeoxL5.js").then((w) => w.qJ), m = [], f = [], v = [], y = [];
  for (const w of r.visualVariables) switch (w.type) {
    case "color":
      m.push(w);
      break;
    case "opacity":
      f.push(w);
      break;
    case "rotation":
      y.push(w);
      break;
    case "size":
      w.target || v.push(w);
  }
  const _ = !!m.length && m[m.length - 1], C = _ ? d(_, t, e) : null, M = !!f.length && f[f.length - 1];
  let E = M ? c(M, t, e) : null;
  if (n != null && (E = E != null ? E * n : n), yt(l, C, E), v.length) {
    const w = h(v, t, e);
    await Js(l, w);
  }
  for (const w of y) en(l, p(w, t, e), w.axis);
  return l;
}
function eo(t) {
  if (t) return "renderer" in t ? t.renderer : void 0;
}
function Ri(t) {
  return t && typeof t.highlight == "function";
}
const Ce = Se.ofType({ key: "type", defaultKeyValue: "button", base: tn, typeMap: { button: Ge, toggle: Zi } }), Ie = new Ge({ icon: "magnifying-glass-plus", id: "zoom-to-feature", title: "{messages.zoom}", className: te.zoomInMagnifyingGlass }), Pi = new Ge({ icon: "trash", id: "remove-selected-feature", title: "{messages.remove}", className: te.trash }), Oe = new Ge({ icon: "magnifying-glass-plus", id: "zoom-to-clustered-features", title: "{messages.zoom}", className: te.zoomInMagnifyingGlass }), me = new Zi({ icon: "table", id: "browse-clustered-features", title: "{messages.browseClusteredFeatures}", className: te.table, value: !1 }), to = "esri.widgets.Popup.PopupViewModel", dt = () => q.getLogger(to), io = (t) => {
  const { event: e, view: i, viewModel: s } = t, { action: n } = e;
  if (!n) return Promise.reject(new k("trigger-action:missing-arguments", "Event has no action"));
  const { disabled: r, id: l } = n;
  if (!l) return Promise.reject(new k("trigger-action:invalid-action", "action.id is missing"));
  if (r) return Promise.reject(new k("trigger-action:invalid-action", "Action is disabled"));
  if (l === Ie.id) return no(s).catch(sn);
  if (l === Oe.id) return ro(s);
  if (l === me.id) return s.browseClusterEnabled = !s.browseClusterEnabled, s.featureMenuOpen = s.browseClusterEnabled, Promise.resolve();
  if (l === Pi.id) {
    s.visible = !1;
    const { selectedFeature: d } = s;
    if (!d) return Promise.reject(new k(`trigger-action:${Pi.id}`, "selectedFeature is required", { selectedFeature: d }));
    const { sourceLayer: c } = d;
    return c ? c.remove(d) : i?.graphics.remove(d), Promise.resolve();
  }
  return Promise.resolve();
};
function ys(t) {
  const { selectedFeature: e, location: i, view: s } = t;
  return s ? e ?? i ?? null : null;
}
function be(t) {
  return !!t && t.isAggregate && t.sourceLayer?.featureReduction?.type === "cluster";
}
async function so(t, e) {
  if (e?.type !== "3d" || !t || t.declaredClass !== "esri.Graphic") return !0;
  const i = e.getViewForGraphic(t);
  if (i && "whenGraphicBounds" in i) {
    let s = null;
    try {
      s = await i.whenGraphicBounds(t, { useViewElevation: !0 });
    } catch {
    }
    return !s || !s.boundingBox || s.boundingBox[0] === s.boundingBox[3] && s.boundingBox[1] === s.boundingBox[4] && s.boundingBox[2] === s.boundingBox[5];
  }
  return !0;
}
async function no(t) {
  const { location: e, selectedFeature: i, view: s, zoomFactor: n } = t, r = ys(t);
  if (!s || !r) {
    const p = new k("zoom-to:invalid-target-or-view", "Cannot zoom to location without a target and view.", { target: r, view: s });
    throw dt().error(p), p;
  }
  const l = s.scale / n, d = t.selectedFeature?.geometry, c = d ?? e, h = c != null && c.type === "point" && await so(i, s);
  Ie.active = !0, Ie.disabled = !0;
  try {
    await t.zoomTo({ target: { target: r, scale: h ? l : void 0 } });
  } catch {
    const m = new k("zoom-to:invalid-graphic", "Could not zoom to the location of the graphic.", { graphic: i });
    dt().error(m);
  } finally {
    Ie.active = !1, Ie.disabled = !1, t.zoomToLocation = null, h && (t.location = c);
  }
}
async function ro(t) {
  const { selectedFeature: e, view: i } = t;
  if (i?.type !== "2d") {
    const l = new k("zoomToCluster:invalid-view", "View must be 2d MapView.", { view: i });
    throw dt().error(l), l;
  }
  if (!e || !be(e)) {
    const l = new k("zoomToCluster:invalid-selectedFeature", "Selected feature must represent an aggregate/cluster graphic.", { selectedFeature: e });
    throw dt().error(l), l;
  }
  const [s, n] = await Kt(i, e);
  Oe.active = !0, Oe.disabled = !0;
  const { extent: r } = await s.queryExtent(n);
  r && await t.zoomTo({ target: r }), Oe.active = !1, Oe.disabled = !1;
}
async function oo(t) {
  const { view: e, selectedFeature: i } = t;
  if (!e || !i) return;
  const [s, n] = await Kt(e, i), { extent: r } = await s.queryExtent(n);
  t.selectedClusterBoundaryFeature.geometry = r, e.graphics.add(t.selectedClusterBoundaryFeature);
}
async function ao(t) {
  const { selectedFeature: e, view: i } = t;
  if (!i || !e) return;
  const [s, n] = await Kt(i, e);
  me.active = !0, me.disabled = !0;
  const { features: r } = await s.queryFeatures(n);
  me.active = !1, me.disabled = !1, me.value = !0, t?.open({ features: [e].concat(r), featureMenuOpen: !0 });
}
async function Kt(t, e) {
  const i = await t.whenLayerView(e.sourceLayer), s = i.createQuery(), n = e.getObjectId();
  return s.aggregateIds = n != null ? [n] : [], [i, s];
}
function lo(t) {
  me.value = !1;
  const e = t.features.filter((i) => be(i));
  e.length && (t.features = e);
}
const co = () => [Ie.clone()], uo = () => [Oe.clone(), me.clone()];
let Ke = null;
function ho(t, e) {
  return t === "building-scene" || e === "2d" && (t === "map-image" || t === "tile" || t === "imagery" || t === "imagery-tile");
}
let I = class extends nn(ms) {
  constructor(t) {
    super(t), this._pendingPromises = new Jr(), this._fetchFeaturesController = null, this._highlightSelectedFeaturePromise = null, this._highlightActiveFeaturePromise = null, this._selectedClusterFeature = null, this._locationScaleHandle = null, this.actions = new Ce(), this.activeFeature = null, this.autoCloseEnabled = !1, this.autoOpenEnabled = !0, this.browseClusterEnabled = !1, this.content = null, this.defaultPopupTemplateEnabled = !1, this.featurePage = null, this.featuresPerPage = 20, this.featureMenuOpen = !1, this.featureViewModelAbilities = null, this.featureViewModels = [], this.highlightEnabled = !0, this.includeDefaultActions = !0, this.selectedClusterBoundaryFeature = new Be({ symbol: new rn({ outline: { width: 1.5, color: "cyan" }, style: "none" }) }), this.title = null, this.updateLocationEnabled = !1, this.view = null, this.visible = !1, this.zoomFactor = 4, this.zoomToLocation = null, this._debouncedLocationUpdate = Je(async (e) => {
      const { view: i } = this, s = this.selectedFeature?.geometry?.type, n = this.location ?? e;
      if (s !== "mesh" && i && n && this.selectedFeature) if (s !== "point") try {
        const { pendingFeatures: r } = await this._fetchFeaturesWithController({ mapPoint: n }), l = (await Promise.all(r)).flat().filter(Boolean);
        if (!l.length) return;
        if (l.length !== this.features.length) {
          const p = this._getHighlightLayer(this.selectedFeature), m = p?.type === "imagery" ? void 0 : p && "objectIdField" in p ? p.objectIdField || Ti : null;
          if (m) {
            const f = this.selectedFeature.getObjectId(), v = l.findIndex((y) => this._getHighlightLayer(y)?.uid === p?.uid && y.attributes[m] === f);
            this.features = l, this.selectedFeatureIndex = v;
          }
        }
        const d = l[this.selectedFeatureIndex]?.geometry, c = (d?.type !== "mesh" ? d : null) ?? this.selectedFeature.geometry, h = c ? on(c, i.spatialReference) : null;
        if (!h) return;
        Ke || (Ke = await import("./geometryEngineAsync-DT7Oy9I8.js")), await Ke.intersects(h, n) || (this.location = (await Ke.nearestCoordinate(h, n)).coordinate ?? n);
      } catch (r) {
        Lt(r) || q.getLogger(this).error(r);
      }
      else this.location = Rt(this.selectedFeature.geometry) ?? n;
    });
  }
  initialize() {
    this.addHandles([this.on("view-change", () => this._autoClose()), g(() => [this.highlightEnabled, this.selectedFeature, this.visible, this.view], () => this._highlightSelectedFeature()), g(() => [this.highlightEnabled, this.activeFeature, this.visible, this.view], () => this._highlightActiveFeature()), g(() => this.view?.animation?.state, (t) => this._animationStateChange(t)), g(() => this.location, (t) => this._locationChange(t)), g(() => this.selectedFeature, (t) => this._selectedFeatureChange(t)), g(() => [this.selectedFeatureIndex, this.featureCount, this.featuresPerPage], () => this._selectedFeatureIndexChange()), g(() => [this.featurePage, this.selectedFeatureIndex, this.featureCount, this.featuresPerPage, this.featureViewModels], () => this._setGraphicOnFeatureViewModels()), g(() => this.featureViewModels, () => this._featureViewModelsChange()), this.on("trigger-action", (t) => io({ event: t, viewModel: this, view: this.view })), rt(() => !this.waitingForResult, () => this._waitingForResultChange(), an), g(() => [this.features, this.view?.map, this.view?.spatialReference, this.view?.timeZone], () => this._updateFeatureVMs()), g(() => this.view?.scale, () => this._viewScaleChange()), rt(() => !this.visible, () => this.browseClusterEnabled = !1), g(() => this.browseClusterEnabled, (t) => t ? this.enableClusterBrowsing() : this.disableClusterBrowsing())]);
  }
  destroy() {
    this._cancelFetchingFeatures(), this._pendingPromises.clear(), this.browseClusterEnabled = !1, this.view = null, this._locationScaleHandle?.remove(), this._locationScaleHandle = null;
  }
  get active() {
    return !(!this.visible || this.waitingForResult);
  }
  get allActions() {
    const t = this._get("allActions") || new Ce();
    t.removeAll();
    const { actions: e, defaultActions: i, defaultPopupTemplateEnabled: s, includeDefaultActions: n, selectedFeature: r } = this, l = n ? i.concat(e) : e, d = r && (typeof r.getEffectivePopupTemplate == "function" && r.getEffectivePopupTemplate(s) || r.popupTemplate), c = d?.actions;
    return (d?.overwriteActions ? c : c?.concat(l) ?? l)?.filter(Boolean).forEach((p) => t.add(p)), t;
  }
  get defaultActions() {
    const t = this._get("defaultActions") || new Ce();
    return t.removeAll(), t.addMany(be(this.selectedFeature) ? uo() : co()), t;
  }
  get featureCount() {
    return this.features.length;
  }
  set features(t) {
    const e = t || [];
    this._set("features", e);
    const { pendingPromisesCount: i, promiseCount: s, selectedFeatureIndex: n } = this, r = s && e.length;
    r && i && n === -1 ? this.selectedFeatureIndex = 0 : r && n !== -1 || (this.selectedFeatureIndex = e.length ? 0 : -1);
  }
  set location(t) {
    let e = t;
    const i = this.view?.spatialReference?.isWebMercator;
    t?.spatialReference?.isWGS84 && i && (e = ln(t)), this._set("location", e);
  }
  get pendingPromisesCount() {
    return this._pendingPromises.size;
  }
  get promiseCount() {
    return this.promises.length;
  }
  get promises() {
    return this._get("promises") || [];
  }
  set promises(t) {
    this._pendingPromises.clear(), this.features = [], Array.isArray(t) && t.length ? (this._set("promises", t), (t = t.slice(0)).forEach((e) => this._pendingPromises.add(e)), t.reduce((e, i) => e.finally(() => i.then((s) => {
      this._pendingPromises.has(i) && this._updateFeatures(s);
    }).finally(() => this._pendingPromises.delete(i)).catch(() => {
    })), Promise.resolve())) : this._set("promises", []);
  }
  get selectedFeature() {
    const { features: t, selectedFeatureIndex: e } = this;
    return e === -1 ? null : t[e] || null;
  }
  get selectedFeatureIndex() {
    const t = this._get("selectedFeatureIndex");
    return typeof t == "number" ? t : -1;
  }
  set selectedFeatureIndex(t) {
    const { featureCount: e } = this;
    t = isNaN(t) || t < -1 || !e ? -1 : (t + e) % e, this.activeFeature = null, this._set("selectedFeatureIndex", t);
  }
  get selectedFeatureViewModel() {
    return this.featureViewModels[this.selectedFeatureIndex] || null;
  }
  get state() {
    return this.view?.ready ? "ready" : "disabled";
  }
  get waitingForContents() {
    return this.featureViewModels.some((t) => t.waitingForContent);
  }
  get waitingForResult() {
    return !(!(this._fetchFeaturesController || this.pendingPromisesCount > 0) || this.featureCount !== 0);
  }
  centerAtLocation() {
    const { view: t } = this, e = ys(this);
    return e && t ? this.callGoTo({ target: { target: e, scale: t.scale } }) : Promise.reject(new k("center-at-location:invalid-target-or-view", "Cannot center at a location without a target and view.", { target: e, view: t }));
  }
  zoomTo(t) {
    return this.callGoTo(t);
  }
  clear() {
    this.set({ promises: [], features: [], content: null, title: null, location: null, activeFeature: null });
  }
  fetchFeatures(t, e) {
    const { view: i } = this;
    if (!i || !t) throw new k("fetch-features:invalid-screenpoint-or-view", "Cannot fetch features without a screenPoint and view.", { screenPoint: t, view: i });
    return i.fetchPopupFeatures(t, { pointerType: e?.event?.pointerType, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, signal: e?.signal });
  }
  open(t) {
    const e = { updateLocationEnabled: !1, promises: [], fetchFeatures: !1, ...t, visible: !0 }, { fetchFeatures: i } = e;
    delete e.fetchFeatures, i && this._setFetchFeaturesPromises(e.location);
    const s = ["actionsMenuOpen", "collapsed"];
    for (const n of s) delete e[n];
    this.set(e);
  }
  triggerAction(t) {
    const e = this.allActions.at(t);
    e && !e.disabled && this.emit("trigger-action", { action: e });
  }
  next() {
    return this.selectedFeatureIndex++, this;
  }
  previous() {
    return this.selectedFeatureIndex--, this;
  }
  disableClusterBrowsing() {
    lo(this), this._clearBrowsedClusterGraphics();
  }
  async enableClusterBrowsing() {
    const { view: t, selectedFeature: e } = this;
    t?.type === "2d" ? be(e) ? (await oo(this), await ao(this)) : q.getLogger(this).warn("enableClusterBrowsing:invalid-selectedFeature: Selected feature must represent an aggregate/cluster graphic.", e) : q.getLogger(this).warn("enableClusterBrowsing:invalid-view: View must be 2d MapView.", e);
  }
  handleViewClick(t) {
    this.autoOpenEnabled && this._fetchFeaturesAndOpen(t);
  }
  _animationStateChange(t) {
    this.zoomToLocation || (Ie.disabled = t === "waiting-for-target");
  }
  _clearBrowsedClusterGraphics() {
    const t = [this.selectedClusterBoundaryFeature, this._selectedClusterFeature].filter(ct);
    this.view?.graphics?.removeMany(t), this._selectedClusterFeature = null, this.selectedClusterBoundaryFeature.geometry = null;
  }
  _viewScaleChange() {
    if (be(this.selectedFeature)) return this.browseClusterEnabled = !1, this.visible = !1, void this.clear();
    this.browseClusterEnabled && (this.features = this.selectedFeature ? [this.selectedFeature] : []);
  }
  _locationChange(t) {
    const { selectedFeature: e, updateLocationEnabled: i } = this;
    i && t && (!e || e.geometry) && this.centerAtLocation();
  }
  _selectedFeatureIndexChange() {
    this.featurePage = this.featureCount > 1 ? Math.floor(this.selectedFeatureIndex / this.featuresPerPage) + 1 : null;
  }
  _featureViewModelsChange() {
    this.featurePage = this.featureCount > 1 ? 1 : null;
  }
  _setGraphicOnFeatureViewModels() {
    const { features: t, featureCount: e, featurePage: i, featuresPerPage: s, featureViewModels: n } = this;
    if (i === null) return;
    const r = ((i - 1) * s + e) % e, l = r + s;
    n.slice(r, l).forEach((d, c) => {
      d && (d.graphic ??= t[r + c]);
    });
  }
  async _selectedFeatureChange(t) {
    const { location: e, updateLocationEnabled: i, view: s } = this;
    if (t && s) {
      if (this.browseClusterEnabled)
        return this._selectedClusterFeature && (s.graphics.remove(this._selectedClusterFeature), this._selectedClusterFeature = null), be(t) ? void 0 : (t.symbol = await Li(t), this._selectedClusterFeature = t, void s.graphics.add(this._selectedClusterFeature));
      if (t.symbol = await Li(t), !i && e || !t.geometry) {
        if (i && !t.geometry) {
          await this.centerAtLocation();
          const n = s.center?.clone();
          n && (this.location = n);
        }
      } else this.location = Rt(t.geometry);
    }
  }
  _waitingForResultChange() {
    !this.featureCount && this.promises && (this.visible = !1);
  }
  async _setFetchFeaturesPromises(t) {
    const { pendingFeatures: e } = await this._fetchFeaturesWithController({ mapPoint: t });
    this.promises = e;
  }
  _destroyFeatureVMs() {
    this.featureViewModels.forEach((t) => t && !t.destroyed && t.destroy()), this._set("featureViewModels", []);
  }
  _updateFeatureVMs() {
    const { selectedFeature: t, features: e, featureViewModels: i, view: s } = this;
    if (be(t) || (this.browseClusterEnabled = !1), this._destroyFeatureVMs(), !e?.length) return;
    const n = i.slice(0), r = [];
    e.forEach((l, d) => {
      if (!l) return;
      let c = null;
      if (n.some((h, p) => (h && h.graphic === l && (c = h, n.splice(p, 1)), !!c)), c) r[d] = c;
      else {
        const h = new Yt({ abilities: this.featureViewModelAbilities, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, spatialReference: s?.spatialReference, graphic: l === t ? l : null, location: this.location, map: s?.map, view: s });
        r[d] = h;
      }
    }), n.forEach((l) => l && !l.destroyed && l.destroy()), this._set("featureViewModels", r);
  }
  async _getScreenPoint(t, e) {
    const { view: i } = this;
    await i?.when();
    const s = t?.spatialReference, n = i?.spatialReference;
    return s && n ? (await dn(s, n, null, e), i.toScreen(t)) : null;
  }
  _cancelFetchingFeatures() {
    const t = this._fetchFeaturesController;
    t && t.abort(), this._fetchFeaturesController = null;
  }
  async _projectScreenPointAndFetchFeatures({ mapPoint: t, screenPoint: e, event: i, signal: s }) {
    return this.fetchFeatures(e ?? await this._getScreenPoint(t ?? this.location, { signal: s }), { signal: s, event: i });
  }
  _fetchFeaturesWithController({ mapPoint: t, screenPoint: e, event: i }) {
    this._cancelFetchingFeatures();
    const s = new AbortController(), { signal: n } = s;
    this._fetchFeaturesController = s;
    const r = this._projectScreenPointAndFetchFeatures({ mapPoint: t, screenPoint: e, signal: n, event: i });
    return r.catch(() => {
    }).then(() => {
      this._fetchFeaturesController = null;
    }), r;
  }
  async _fetchFeaturesAndOpen(t) {
    const { mapPoint: e, screenPoint: i } = t, { view: s } = this;
    this._locationScaleHandle?.remove(), this._locationScaleHandle = g(() => this.view?.scale, () => this._debouncedLocationUpdate(e).catch((r) => {
      Lt(r) || q.getLogger(this).error(r);
    }));
    const { pendingFeatures: n } = await this._fetchFeaturesWithController({ mapPoint: e, screenPoint: i, event: t });
    s?.popup && "open" in s.popup && s.popup.open({ location: e ?? void 0, promises: n });
  }
  _autoClose() {
    this.autoCloseEnabled && (this.visible = !1);
  }
  async _getLayerView(t, e) {
    return await t.when(), t.whenLayerView(e);
  }
  _getHighlightLayer(t) {
    const { layer: e, sourceLayer: i } = t;
    return i && "layer" in i && i.layer ? i.layer : i?.type === "map-notes" || i?.type === "subtype-group" ? i : e;
  }
  _getHighlightTarget(t, e, i) {
    if (ho(e.type, i)) return t;
    const s = t.getObjectId();
    if (s != null) return s;
    const n = e.type === "imagery" ? void 0 : "objectIdField" in e ? e.objectIdField || Ti : null, r = t.attributes;
    return r && n && r[n] || t;
  }
  _mapIncludesLayer(t) {
    return !!this.view?.map?.allLayers?.includes(t);
  }
  async _highlightActiveFeature() {
    const t = "highlight-active-feature";
    this.removeHandles(t);
    const { highlightEnabled: e, view: i, activeFeature: s, visible: n } = this;
    if (!(s && i && e && n)) return;
    const r = this._getHighlightLayer(s);
    if (!(r && r instanceof ai && this._mapIncludesLayer(r))) return;
    const l = this._getLayerView(i, r);
    this._highlightActiveFeaturePromise = l;
    const d = await l;
    if (!(d && Ri(d) && this._highlightActiveFeaturePromise === l && this.activeFeature && this.highlightEnabled)) return;
    const c = d.highlight(this._getHighlightTarget(s, r, i.type));
    this.addHandles(c, t);
  }
  async _highlightSelectedFeature() {
    const t = "highlight-selected-feature";
    this.removeHandles(t);
    const { selectedFeature: e, highlightEnabled: i, view: s, visible: n } = this;
    if (!(e && s && i && n)) return;
    const r = this._getHighlightLayer(e);
    if (!(r && r instanceof ai && this._mapIncludesLayer(r))) return;
    const l = this._getLayerView(s, r);
    this._highlightSelectedFeaturePromise = l;
    const d = await l;
    if (!(d && Ri(d) && this._highlightSelectedFeaturePromise === l && this.selectedFeature && this.highlightEnabled && this.visible)) return;
    const c = d.highlight(this._getHighlightTarget(e, r, s.type));
    this.addHandles(c, t);
  }
  _updateFeatures(t) {
    const { features: e } = this, i = t.filter((s) => !e.includes(s));
    i?.length && (this.features = e.concat(i));
  }
};
o([a()], I.prototype, "_fetchFeaturesController", void 0), o([a({ type: Ce })], I.prototype, "actions", void 0), o([a({ readOnly: !0 })], I.prototype, "active", null), o([a()], I.prototype, "activeFeature", void 0), o([a({ readOnly: !0 })], I.prototype, "allActions", null), o([a()], I.prototype, "autoCloseEnabled", void 0), o([a()], I.prototype, "autoOpenEnabled", void 0), o([a()], I.prototype, "browseClusterEnabled", void 0), o([a()], I.prototype, "content", void 0), o([a({ type: Ce, readOnly: !0 })], I.prototype, "defaultActions", null), o([a({ type: Boolean })], I.prototype, "defaultPopupTemplateEnabled", void 0), o([a({ readOnly: !0 })], I.prototype, "featureCount", null), o([a()], I.prototype, "featurePage", void 0), o([a({ value: [] })], I.prototype, "features", null), o([a()], I.prototype, "featuresPerPage", void 0), o([a()], I.prototype, "featureMenuOpen", void 0), o([a()], I.prototype, "featureViewModelAbilities", void 0), o([a({ readOnly: !0 })], I.prototype, "featureViewModels", void 0), o([a()], I.prototype, "highlightEnabled", void 0), o([a()], I.prototype, "includeDefaultActions", void 0), o([a({ type: qt })], I.prototype, "location", null), o([a({ readOnly: !0 })], I.prototype, "pendingPromisesCount", null), o([a({ readOnly: !0 })], I.prototype, "promiseCount", null), o([a()], I.prototype, "promises", null), o([a({ readOnly: !0 })], I.prototype, "selectedClusterBoundaryFeature", void 0), o([a({ value: null, readOnly: !0 })], I.prototype, "selectedFeature", null), o([a({ value: -1 })], I.prototype, "selectedFeatureIndex", null), o([a({ readOnly: !0 })], I.prototype, "selectedFeatureViewModel", null), o([a({ readOnly: !0 })], I.prototype, "state", null), o([a()], I.prototype, "title", void 0), o([a()], I.prototype, "updateLocationEnabled", void 0), o([a()], I.prototype, "view", void 0), o([a()], I.prototype, "visible", void 0), o([a({ readOnly: !0 })], I.prototype, "waitingForContents", null), o([a({ readOnly: !0 })], I.prototype, "waitingForResult", null), o([a()], I.prototype, "zoomFactor", void 0), o([a()], I.prototype, "zoomToLocation", void 0), o([a()], I.prototype, "centerAtLocation", null), I = o([P("esri.widgets.Features.FeaturesViewModel")], I);
const Jt = I;
let re = class extends ue {
  constructor() {
    super(...arguments), this.actionBar = !0, this.closeButton = !0, this.collapseButton = !1, this.featureNavigation = !0, this.flow = !0, this.heading = !0, this.spinner = !0;
  }
};
o([a({ type: Boolean, nonNullable: !0 })], re.prototype, "actionBar", void 0), o([a({ type: Boolean, nonNullable: !0 })], re.prototype, "closeButton", void 0), o([a({ type: Boolean, nonNullable: !0 })], re.prototype, "collapseButton", void 0), o([a({ type: Boolean, nonNullable: !0 })], re.prototype, "featureNavigation", void 0), o([a({ type: Boolean, nonNullable: !0 })], re.prototype, "flow", void 0), o([a({ type: Boolean, nonNullable: !0 })], re.prototype, "heading", void 0), o([a({ type: Boolean, nonNullable: !0 })], re.prototype, "spinner", void 0), re = o([P("esri.widgets.Features.FeaturesVisibleElements")], re);
const vs = re, Oi = "selected-index", po = 0, Ni = "features-spinner", mo = 50;
let x = class extends ps(J) {
  constructor(t, e) {
    super(t, e), this._featureMenuIntersectionObserverCallback = ([i]) => {
      i?.isIntersecting && this.viewModel.featurePage != null && this.viewModel.featurePage++;
    }, this._featureMenuIntersectionObserver = new IntersectionObserver(this._featureMenuIntersectionObserverCallback, { root: window.document }), this._featureMenuIntersectionObserverNode = null, this._focusOn = null, this._spinner = null, this._feature = null, this._relatedRecordsFlowItems = new Se(), this._relatedRecordsWidget = new Kr({ flowItems: this._relatedRecordsFlowItems }), this._rootFlowItemNode = null, this._featureMenuViewportNode = null, this._actionBarMenuNode = null, this.collapsed = !1, this.icon = null, this.featureNavigationTop = !1, this.headerActions = new Ce(), this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.responsiveActionsEnabled = !1, this.viewModel = new Jt(), this.visibleElements = new vs(), this._renderAction = (i, s) => {
      const n = this._getActionTitle(i), { type: r, active: l, uid: d, disabled: c, indicator: h } = i;
      return i.visible ? u("calcite-action", { active: r === "toggle" && i.value, appearance: "solid", bind: this, "data-action-uid": d, disabled: c, icon: this._getActionIcon(i), indicator: h, key: `action-${s}`, loading: l, onclick: this._triggerAction, scale: "s", text: n, title: this._hideActionText ? n : void 0 }, this._getFallbackIcon(i)) : null;
    }, this._openFeatureMenu = () => {
      this.featureMenuOpen = !0, this._focusOn = "menu-flow-item";
    }, this._previousFeature = () => {
      this.viewModel.selectedFeatureIndex--;
    }, this._nextFeature = () => {
      this.viewModel.selectedFeatureIndex++;
    }, this._handleFeatureMenuBack = () => {
      this.featureMenuOpen && (this._focusOn = "root-flow-item", this.featureMenuOpen = !1);
    }, this._focusFlowItemNode = (i) => {
      this._focusOn === i && requestAnimationFrame(async () => {
        switch (i) {
          case "menu-flow-item":
            await this._featureMenuViewportNode?.setFocus();
            break;
          case "root-flow-item":
            await this._rootFlowItemNode?.setFocus();
        }
        this._focusOn = null;
      });
    }, this._focusFlowItemNodeThrottled = ot(this._focusFlowItemNode, mo), this._displaySpinnerThrottled = ot(() => this._displaySpinner(), po), this._addSelectedFeatureIndexHandle(), this.addHandles([this._displaySpinnerThrottled, this._focusFlowItemNodeThrottled, g(() => this.viewModel?.active, () => this._toggleScreenLocationEnabled()), g(() => this.viewModel?.active, (i) => this._relatedRecordsWidget.closed = !i), g(() => this.visibleElements?.closeButton, (i) => this._relatedRecordsWidget.closable = i), g(() => this.visibleElements?.spinner, (i) => this._spinnerEnabledChange(i)), g(() => this.viewModel?.view, (i, s) => this._viewChange(i, s)), g(() => this.viewModel?.view?.ready, (i, s) => this._viewReadyChange(i ?? !1, s ?? !1)), g(() => [this.viewModel?.waitingForResult, this.viewModel?.location], () => {
      this._hideSpinner(), this._displaySpinnerThrottled();
    }), g(() => this.viewModel?.screenLocation, () => this._closeOpenActionMenu()), g(() => this.selectedFeatureWidget, () => this._destroyRelatedRecordsFlowItemWidgets()), g(() => {
      const i = this.selectedFeatureWidget?.viewModel;
      return [i?.title, i?.state];
    }, () => this._setTitleFromFeatureWidget()), g(() => {
      const i = this.selectedFeatureWidget?.viewModel;
      return [i?.content, i?.state];
    }, () => this._setContentFromFeatureWidget()), g(() => this.viewModel?.featureViewModels, () => this._featureMenuViewportScrollTop()), this._relatedRecordsWidget.on("close", () => this.close()), this._relatedRecordsWidget.on("exit", () => this._destroyRelatedRecordsFlowItemWidgets()), this._relatedRecordsWidget.on("open-related-feature", ({ feature: i }) => this._openRelatedFeature(i))]);
  }
  loadDependencies() {
    return De({ action: () => import("./calcite-action-B9HGIICk.js"), "action-bar": () => import("./calcite-action-bar-DKI9myTB.js"), "action-group": () => import("./calcite-action-group-a1nXAUDn.js"), button: () => import("./calcite-button-BWMWMfyw.js"), flow: () => import("./calcite-flow-Cfqk6PtD.js"), "flow-item": () => import("./calcite-flow-item-BbuMv5QM.js"), list: () => import("./calcite-list-DZINiZMI.js"), "list-item": () => import("./calcite-list-item-C43XzASE.js"), "list-item-group": () => import("./calcite-list-item-group-BP6QXOzm.js"), loader: () => import("./calcite-loader-DpkWVw_l.js") });
  }
  destroy() {
    this._destroyRelatedRecordsFlowItemWidgets(), this._destroySelectedFeatureWidget(), this._destroySpinner(), this._unobserveFeatureMenuObserver(), this._featureMenuIntersectionObserver?.disconnect(), this._relatedRecordsWidget?.destroy();
  }
  get _hideActionText() {
    if (!this.responsiveActionsEnabled) return !1;
    const t = this.view?.widthBreakpoint;
    return t === "xsmall" || t === "small" || t === "medium";
  }
  get _featureNavigationVisible() {
    return this.viewModel.active && this.viewModel.featureCount > 1 && this.visibleElements.featureNavigation;
  }
  get _isCollapsed() {
    return this._collapseEnabled && this.collapsed;
  }
  get _collapseEnabled() {
    return this.visibleElements.collapseButton && !!this.title && !!this.content;
  }
  get content() {
    return this.viewModel.content;
  }
  set content(t) {
    this.viewModel.content = t;
  }
  get featureMenuOpen() {
    return this.viewModel.featureMenuOpen;
  }
  set featureMenuOpen(t) {
    this.viewModel.featureMenuOpen = t;
  }
  get features() {
    return this.viewModel.features;
  }
  set features(t) {
    this.viewModel.features = t;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(t) {
    this.viewModel.location = t;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(t) {
    this._overrideIfSome("label", t);
  }
  get promises() {
    return this.viewModel.promises;
  }
  set promises(t) {
    this.viewModel.promises = t;
  }
  get selectedFeature() {
    return this.viewModel.selectedFeature;
  }
  get selectedFeatureIndex() {
    return this.viewModel.selectedFeatureIndex;
  }
  set selectedFeatureIndex(t) {
    this.viewModel.selectedFeatureIndex = t;
  }
  get selectedFeatureWidget() {
    const { _feature: t, headingLevel: e, _relatedRecordsFlowItems: i } = this, { selectedFeatureViewModel: s } = this.viewModel, n = { title: !1 };
    return s ? (t ? (t.viewModel = s, t.visibleElements = n) : this._feature = new Qr({ flowItems: i, headingLevel: e + 1, viewModel: s, visibleElements: n }), this._feature) : null;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(t) {
    this.viewModel.title = t;
  }
  get updateLocationEnabled() {
    return this.viewModel.updateLocationEnabled;
  }
  set updateLocationEnabled(t) {
    this.viewModel.updateLocationEnabled = t;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(t) {
    this.viewModel.view = t;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(t) {
    this.viewModel.visible = t;
  }
  blur() {
    const { active: t } = this.viewModel;
    t ? this._rootFlowItemNode?.blur() : q.getLogger(this).warn("Features can only be blurred when currently active.");
  }
  clear() {
    return this.viewModel.clear();
  }
  close() {
    this.viewModel.visible = !1;
  }
  fetchFeatures(t, e) {
    return this.viewModel.fetchFeatures(t, e);
  }
  focus() {
    const { active: t } = this.viewModel;
    t ? this._setFocusOn() : q.getLogger(this).warn("Features can only be focused when currently active.");
  }
  next() {
    return this.viewModel.next();
  }
  open(t) {
    this.removeHandles(Oi);
    const e = { collapsed: t?.collapsed ?? !1 };
    this.set(e), this.viewModel.open(t), this.addHandles(rt(() => !this.viewModel.waitingForResult, () => this._addSelectedFeatureIndexHandle(), { once: !0 }));
  }
  previous() {
    return this.viewModel.previous();
  }
  triggerAction(t) {
    return this.viewModel.triggerAction(t);
  }
  render() {
    return u("div", { bind: this, class: this.classes(W.base, F.widget, F.panel), onkeydown: this._onMainKeydown }, this._renderHeader(), this._renderContentContainer());
  }
  _renderFeatureNavigation() {
    return [this._renderPagination(), this._renderFeatureMenuButton()];
  }
  _renderHeader() {
    return !this.featureMenuOpen && this.featureNavigationTop && this._featureNavigationVisible ? u("div", { class: W.header, key: "header-actions" }, this._renderFeatureNavigation()) : null;
  }
  _renderFooter() {
    return this.featureMenuOpen || this.featureNavigationTop || !this._featureNavigationVisible ? null : u("div", { class: W.footer, key: "footer-actions", slot: "footer" }, this._renderFeatureNavigation());
  }
  _renderFeatureMenuButton() {
    const { messages: t, viewModel: e } = this, { featureCount: i, selectedFeatureIndex: s, pendingPromisesCount: n } = e;
    return u("calcite-action", { appearance: "solid", bind: this, icon: "list", key: "feature-menu-button", label: t.selectFeature, loading: n > 0, onclick: this._openFeatureMenu, scale: "s", text: oe(t.pageText, { index: Ae(s + 1), total: Ae(i) }), textEnabled: !0, title: t.selectFeature });
  }
  _renderPagination() {
    const { previous: t, next: e } = this.messagesCommon.pagination;
    return u("calcite-action-bar", { class: W.paginationActionBar, expandDisabled: !0, key: "pagination-action-bar", layout: "horizontal", overflowActionsDisabled: !0, scale: "s" }, u("calcite-action-group", { scale: "s" }, u("calcite-action", { appearance: "solid", class: W.paginationPrevious, icon: "chevron-left", iconFlipRtl: !0, label: t, onclick: this._previousFeature, scale: "s", text: t, title: t }), u("calcite-action", { appearance: "solid", icon: "chevron-right", iconFlipRtl: !0, label: e, onclick: this._nextFeature, scale: "s", text: e, title: e })));
  }
  _renderFeatureMenuItem(t) {
    const { selectedFeatureViewModel: e, featureViewModels: i } = this.viewModel, s = t === e, n = i.indexOf(t);
    return u("calcite-list-item", { bind: this, "data-feature-index": n, key: `feature-menu-item-${t.uid}`, onblur: this._removeActiveFeature, onfocus: this._setActiveFeature, onmouseleave: this._removeActiveFeature, onmouseover: this._setActiveFeature, selected: s, onCalciteListItemSelect: this._selectFeature }, u("span", { innerHTML: t.title || this.messagesCommon.untitled, slot: "content" }));
  }
  _groupResultsByLayer() {
    const { featureViewModels: t } = this.viewModel, e = /* @__PURE__ */ new Map();
    return t.forEach((i) => {
      const s = i?.graphic;
      if (!s) return;
      const n = s.sourceLayer ?? s.layer, r = e.get(n) ?? [];
      e.set(n, [...r, i]);
    }), e;
  }
  _renderFeatureMenu() {
    const { featureViewModels: t } = this.viewModel, e = this._groupResultsByLayer();
    return t.length ? u("calcite-list", { selectionAppearance: "icon", selectionMode: "single" }, Array.from(e.keys()).map((i) => u("calcite-list-item-group", { heading: i?.title ?? this.messagesCommon.untitled, key: i?.uid || "untitled" }, e.get(i)?.map((s) => this._renderFeatureMenuItem(s))))) : null;
  }
  _renderHeaderAction(t, e) {
    return t.visible ? u("calcite-action", { active: t.type === "toggle" && t.value, appearance: "solid", bind: this, "data-action-uid": t.uid, disabled: t.disabled, icon: t.icon || "", indicator: t.indicator, key: `header-action-${e}`, loading: t.active, onclick: this._triggerHeaderAction, scale: "m", slot: "header-actions-end", text: t.title || "", title: t.title || "" }) : null;
  }
  _renderHeaderActions() {
    return this.headerActions.map((t, e) => this._renderHeaderAction(t, e)).toArray();
  }
  _renderContentFeature() {
    const { headingLevel: t, visibleElements: e, _isCollapsed: i, _collapseEnabled: s, featureNavigationTop: n } = this, { title: r, active: l } = this.viewModel, d = e.heading && r ? r : "";
    return u("calcite-flow-item", { afterCreate: this._storeRootFlowItemNode, afterUpdate: this._focusRootFlowItemNode, bind: this, class: this.classes({ [W.contentFeature]: !0, [W.flowItemCollapsed]: i }), closable: e.closeButton, closed: !l, collapsed: i, collapseDirection: n ? "down" : "up", collapsible: s, headingLevel: t, key: "root-flow-item", onCalciteFlowItemClose: this.close, onCalciteFlowItemToggle: this._handleCollapseToggle }, d ? u(Gt, { class: this.classes(W.featuresHeading, F.heading), innerHTML: d, key: "header-content", level: this.headingLevel, slot: "header-content" }) : null, this._renderHeaderActions(), this._renderActionBar(), i ? null : u("div", { class: this.classes(W.container, W.contentContainer) }, this._renderContent()), this._renderFooter());
  }
  _renderFeatureMenuContainer() {
    const { viewModel: t, featureMenuOpen: e, messages: i, messagesCommon: s } = this, { active: n, featureViewModels: r, pendingPromisesCount: l } = t;
    return e ? u("calcite-flow-item", { afterCreate: this._storeFeatureMenuFlowItemNode, afterUpdate: this._focusFeatureMenuFlowItemNode, bind: this, closable: !1, closed: !n, description: oe(i.total, { total: r.length }), heading: i.selectFeature, key: "feature-menu", loading: t.waitingForContents, onCalciteFlowItemBack: (d) => {
      d.preventDefault(), this._handleFeatureMenuBack();
    } }, l > 0 ? u("calcite-loader", { class: W.loader, inline: !0, key: "feature-menu-loader", label: s.loading, scale: "m", slot: "header-actions-end" }) : null, u("div", { class: W.container }, this._renderFeatureMenu()), u("div", { afterCreate: this._featureMenuIntersectionObserverCreated, bind: this, class: W.featureMenuObserver }), u("calcite-button", { appearance: "transparent", onclick: this._handleFeatureMenuBack, slot: "footer-actions", width: "full" }, s.back)) : null;
  }
  _renderContentContainer() {
    const t = [this._renderContentFeature(), this._renderFeatureMenuContainer(), this._relatedRecordsWidget.render()];
    return this.visibleElements.flow ? u("calcite-flow", { key: "content-container" }, t) : t;
  }
  _getFallbackIcon(t) {
    const { className: e, icon: i } = t;
    if (i) return null;
    const s = pn({ action: t, feature: this.selectedFeature }), n = { [W.icon]: !!e, [W.actionImage]: !!s };
    return e && (n[e] = !0), s || e ? u("span", { "aria-hidden": "true", class: this.classes(W.icon, n), key: "icon", styles: hn(s) }) : null;
  }
  _renderActionBar() {
    return !this._isCollapsed && this.visibleElements.actionBar && this.viewModel.allActions?.length ? u("calcite-action-bar", { expandDisabled: !0, expanded: !this._hideActionText, key: "header-action-bar", scale: "s", slot: "action-bar" }, u("calcite-action-group", { afterCreate: (t) => this._actionBarMenuNode = t, overlayPositioning: "fixed", scale: "s" }, this._renderActions())) : null;
  }
  _renderActions() {
    return this.viewModel.allActions.toArray().map(this._renderAction);
  }
  _renderContent() {
    const t = this.viewModel?.content;
    return t ? typeof t == "string" ? u("div", { class: N.contentNode, innerHTML: t, key: t }) : this.renderNodeContent(t) : null;
  }
  _setFocusOn() {
    this.renderNow(), requestAnimationFrame(() => {
      this._focusOn = this.featureMenuOpen ? "menu-flow-item" : "root-flow-item";
    });
  }
  _handleCollapseToggle() {
    this.collapsed = !this.collapsed;
  }
  async _openRelatedFeature(t) {
    await t.viewModel.updateGeometry();
    const e = t.graphic, i = e?.geometry;
    if (i == null || e == null) return;
    this._destroyRelatedRecordsFlowItemWidgets(), await this.viewModel.zoomTo({ target: i });
    const s = Rt(i);
    this.open({ features: [e], location: s ?? void 0 });
  }
  _focusRootFlowItemNode() {
    this._focusFlowItemNodeThrottled("root-flow-item");
  }
  _focusFeatureMenuFlowItemNode() {
    this._focusFlowItemNodeThrottled("menu-flow-item");
  }
  _storeRootFlowItemNode(t) {
    this._rootFlowItemNode = t, this._focusFlowItemNodeThrottled("root-flow-item");
  }
  _storeFeatureMenuFlowItemNode(t) {
    this._featureMenuViewportNode = t, this._focusFlowItemNodeThrottled("menu-flow-item");
  }
  _setActiveFeature(t) {
    const { viewModel: e } = this, i = t.currentTarget["data-feature-index"];
    e.activeFeature = e.features?.[i] || null;
  }
  _removeActiveFeature() {
    this.viewModel.activeFeature = null;
  }
  _selectFeature(t) {
    const e = t.currentTarget["data-feature-index"];
    isNaN(e) || (this.viewModel.selectedFeatureIndex = e), this._handleFeatureMenuBack();
  }
  _unobserveFeatureMenuObserver() {
    this._featureMenuIntersectionObserverNode && this._featureMenuIntersectionObserver.unobserve(this._featureMenuIntersectionObserverNode);
  }
  _featureMenuIntersectionObserverCreated(t) {
    this._unobserveFeatureMenuObserver(), this._featureMenuIntersectionObserver.observe(t), this._featureMenuIntersectionObserverNode = t;
  }
  _getActionIcon(t) {
    return t.icon ? t.icon : t.image || t.className ? void 0 : "question";
  }
  _getActionTitle(t) {
    const { messages: e, selectedFeature: i, messagesCommon: s } = this, { id: n } = t, r = i?.attributes, l = t.title ?? "", d = n === "zoom-to-feature" ? oe(l, { messages: e }) : n === "remove-selected-feature" ? oe(l, { messages: s }) : n === "zoom-to-clustered-features" || n === "browse-clustered-features" ? oe(l, { messages: e }) : t.title;
    return d && r ? oe(d, r) : d ?? "";
  }
  _onMainKeydown(t) {
    const { key: e } = t;
    e === "ArrowLeft" && (t.stopPropagation(), this._handleFeatureMenuBack(), this.previous()), e === "ArrowRight" && (t.stopPropagation(), this._handleFeatureMenuBack(), this.next());
  }
  _featureMenuViewportScrollTop() {
    this._featureMenuViewportNode && this._featureMenuViewportNode.scrollContentTo({ top: 0 });
  }
  _setContentFromFeatureWidget() {
    const { selectedFeatureWidget: t } = this;
    t && (this.viewModel.content = t);
  }
  _setTitleFromFeatureWidget() {
    const { selectedFeatureWidget: t, messagesCommon: e } = this, i = t?.viewModel;
    t && (this.viewModel.title = i?.state === "error" ? e?.errorMessage : i?.title || "");
  }
  _addSelectedFeatureIndexHandle() {
    const t = g(() => this.viewModel?.selectedFeatureIndex, (e, i) => this._selectedFeatureIndexUpdated(e, i));
    this.addHandles(t, Oi);
  }
  _selectedFeatureIndexUpdated(t, e) {
    const { featureCount: i } = this.viewModel;
    i && t !== e && t !== -1 && (this._destroyRelatedRecordsFlowItemWidgets(), this._rootFlowItemNode && this._rootFlowItemNode.scrollContentTo({ top: 0 }));
  }
  _triggerHeaderAction(t) {
    const e = t.currentTarget;
    if (e.disabled) return;
    const i = e.dataset.actionUid, s = this.headerActions.find(({ uid: n }) => n === i);
    s && !s.disabled && (s?.type === "toggle" && (s.value = !s.value), this.emit("trigger-header-action", { action: s }));
  }
  _triggerAction(t) {
    const e = t.currentTarget;
    if (e.disabled) return;
    const i = e.dataset.actionUid, { allActions: s } = this.viewModel, n = s.findIndex((l) => l.uid === i), r = s.at(n);
    r && r.type === "toggle" && (r.value = !r.value), this.viewModel.triggerAction(n);
  }
  _createSpinner(t) {
    t && (this._spinner = new Yr({ view: t }), t.ui.add(this._spinner, { key: Ni, position: "manual", internal: !0 }));
  }
  _wireUpView(t) {
    this._destroySpinner(), t && this.visibleElements?.spinner && this._createSpinner(t);
  }
  _hideSpinner() {
    const { _spinner: t } = this;
    t && (t.location = null, t.hide());
  }
  _viewReadyChange(t, e) {
    t ? this._wireUpView(this.viewModel?.view) : e && this.viewModel.clear();
  }
  _viewChange(t, e) {
    t && e && this.viewModel.clear();
  }
  _destroySelectedFeatureWidget() {
    const { _feature: t } = this;
    t && (t.viewModel = null, !t.destroyed && t.destroy()), this._feature = null;
  }
  _closeOpenActionMenu() {
    const { _actionBarMenuNode: t } = this;
    t && (t.menuOpen = !1);
  }
  _destroyRelatedRecordsFlowItemWidgets() {
    this._relatedRecordsFlowItems.removeAll().forEach((t) => {
      "showAllEnabled" in t.viewModel && (t.viewModel.showAllEnabled = !1), t.viewModel = null, t.destroy();
    });
  }
  _toggleScreenLocationEnabled() {
    const { viewModel: t } = this;
    t && (t.screenLocationEnabled = t.active);
  }
  _displaySpinner() {
    const { _spinner: t } = this;
    if (!t) return;
    const { location: e, waitingForResult: i } = this.viewModel;
    i && e ? t.show({ location: e }) : t.hide();
  }
  _destroySpinner() {
    const { _spinner: t, view: e } = this;
    t && (e?.ui?.remove(t, Ni), t.destroy(), this._spinner = null);
  }
  _spinnerEnabledChange(t) {
    this._destroySpinner(), t && this._createSpinner(this.viewModel?.view);
  }
};
o([a()], x.prototype, "_focusOn", void 0), o([a()], x.prototype, "_relatedRecordsFlowItems", void 0), o([a()], x.prototype, "_hideActionText", null), o([a()], x.prototype, "_featureNavigationVisible", null), o([a()], x.prototype, "_isCollapsed", null), o([a()], x.prototype, "_collapseEnabled", null), o([a()], x.prototype, "collapsed", void 0), o([a()], x.prototype, "content", null), o([a()], x.prototype, "icon", void 0), o([a()], x.prototype, "featureMenuOpen", null), o([a()], x.prototype, "featureNavigationTop", void 0), o([a()], x.prototype, "features", null), o([a({ type: Ce })], x.prototype, "headerActions", void 0), o([a()], x.prototype, "headingLevel", void 0), o([a()], x.prototype, "location", null), o([a()], x.prototype, "label", null), o([a(), K("esri/widgets/Features/t9n/Features")], x.prototype, "messages", void 0), o([a(), K("esri/t9n/common")], x.prototype, "messagesCommon", void 0), o([a()], x.prototype, "promises", null), o([a()], x.prototype, "responsiveActionsEnabled", void 0), o([a({ readOnly: !0 })], x.prototype, "selectedFeature", null), o([a()], x.prototype, "selectedFeatureIndex", null), o([a({ readOnly: !0 })], x.prototype, "selectedFeatureWidget", null), o([a()], x.prototype, "title", null), o([a()], x.prototype, "updateLocationEnabled", null), o([a()], x.prototype, "view", null), o([a({ type: Jt }), as(["triggerAction", "trigger-action"])], x.prototype, "viewModel", void 0), o([a({ type: vs, nonNullable: !0 })], x.prototype, "visibleElements", void 0), o([a()], x.prototype, "visible", null), x = o([P("esri.widgets.Features")], x);
const fo = x, ee = "esri-popup", ye = `${ee}--is-docked`, V = { base: ee, main: `${ee}__main-container`, shadow: `${ee}--shadow`, isDocked: ye, isDockedTopLeft: `${ye}-top-left`, isDockedTopCenter: `${ye}-top-center`, isDockedTopRight: `${ye}-top-right`, isDockedBottomLeft: `${ye}-bottom-left`, isDockedBottomCenter: `${ye}-bottom-center`, isDockedBottomRight: `${ye}-bottom-right`, alignTopCenter: `${ee}--aligned-top-center`, alignBottomCenter: `${ee}--aligned-bottom-center`, alignTopLeft: `${ee}--aligned-top-left`, alignBottomLeft: `${ee}--aligned-bottom-left`, alignTopRight: `${ee}--aligned-top-right`, alignBottomRight: `${ee}--aligned-bottom-right`, pointer: `${ee}__pointer`, pointerDirection: `${ee}__pointer-direction` };
let St = class extends Jt {
  constructor(t) {
    super(t);
  }
};
St = o([P("esri.widgets.Popup.PopupViewModel")], St);
const _s = St;
let de = class extends ue {
  constructor() {
    super(...arguments), this.actionBar = !0, this.closeButton = !0, this.collapseButton = !0, this.featureNavigation = !0, this.heading = !0, this.spinner = !0;
  }
};
o([a({ type: Boolean, nonNullable: !0 })], de.prototype, "actionBar", void 0), o([a({ type: Boolean, nonNullable: !0 })], de.prototype, "closeButton", void 0), o([a({ type: Boolean, nonNullable: !0 })], de.prototype, "collapseButton", void 0), o([a({ type: Boolean, nonNullable: !0 })], de.prototype, "featureNavigation", void 0), o([a({ type: Boolean, nonNullable: !0 })], de.prototype, "heading", void 0), o([a({ type: Boolean, nonNullable: !0 })], de.prototype, "spinner", void 0), de = o([P("esri.widgets.Features.PopupVisibleElements")], de);
const Vt = de, Si = { buttonEnabled: !0, position: "auto", breakpoint: { width: 544 } };
let A = class extends J {
  constructor(t, e) {
    super(t, e), this._dockAction = new Ge({ id: "popup-dock-action" }), this._featuresWidget = new fo({ responsiveActionsEnabled: !0 }), this._containerNode = null, this._mainContainerNode = null, this._pointerOffsetInPx = 16, this.alignment = "auto", this.collapsed = !1, this.dockEnabled = !1, this.headingLevel = 2, this.messages = null, this.viewModel = new _s(), this.visibleElements = new Vt();
  }
  initialize() {
    this.addHandles([g(() => [this.viewModel?.view?.widthBreakpoint, this.dockEnabled], () => this._handleDockIcon(), L), g(() => [this.dockEnabled, this.messages?.undock, this.messages?.dock], () => this._handleDockEnabled(), L), g(() => this.dockOptions, (t) => {
      const { _dockAction: e } = this, i = this._featuresWidget.headerActions;
      i.remove(e), t.buttonEnabled && i.add(e);
    }, L), g(() => this.viewModel?.screenLocation, () => this._positionContainer()), g(() => [this.viewModel?.active, this.dockEnabled], () => this._toggleScreenLocationEnabled()), g(() => [this.viewModel?.screenLocation, this.viewModel?.view?.padding, this.viewModel?.view?.size, this.viewModel?.active, this.viewModel?.location, this.alignment], () => this.reposition()), g(() => this.viewModel?.view?.size, (t, e) => this._updateDockEnabledForViewSize(t, e)), g(() => this.viewModel?.view, (t, e) => this._viewChange(t, e)), g(() => this.viewModel?.view?.ready, (t, e) => this._viewReadyChange(t ?? !1, e ?? !1)), g(() => this.viewModel, () => this._featuresWidget.viewModel = this.viewModel, L), g(() => this._featureNavigationTop, (t) => this._featuresWidget.featureNavigationTop = t, L), g(() => this.headingLevel, (t) => this._featuresWidget.headingLevel = t, L), g(() => this.collapsed, (t) => this._featuresWidget.collapsed = t, L), g(() => this.visibleElements.actionBar, (t) => this._featuresWidget.visibleElements.actionBar = !!t, L), g(() => this.visibleElements.closeButton, (t) => this._featuresWidget.visibleElements.closeButton = !!t, L), g(() => this.visibleElements.collapseButton, (t) => this._featuresWidget.visibleElements.collapseButton = !!t, L), g(() => this.visibleElements.heading, (t) => this._featuresWidget.visibleElements.heading = !!t, L), g(() => this.visibleElements.spinner, (t) => this._featuresWidget.visibleElements.spinner = !!t, L), g(() => this.visibleElements.featureNavigation, (t) => this._featuresWidget.visibleElements.featureNavigation = !!t, L), $e(() => this._featuresWidget, "trigger-header-action", (t) => {
      t.action === this._dockAction && (this.dockEnabled = !this.dockEnabled);
    })]);
  }
  normalizeCtorArgs(t) {
    const e = { ...t };
    return t?.visibleElements != null && (e.visibleElements = new Vt(t.visibleElements), t.collapseEnabled != null && (e.visibleElements.collapseButton = t.collapseEnabled), t.spinnerEnabled != null && (e.visibleElements.spinner = t.spinnerEnabled)), e;
  }
  destroy() {
    this._dockAction.destroy(), this._featuresWidget?.destroy();
  }
  get _featureNavigationTop() {
    const { currentAlignment: t, currentDockPosition: e } = this;
    return t === "bottom-left" || t === "bottom-center" || t === "bottom-right" || e === "top-left" || e === "top-center" || e === "top-right";
  }
  get actions() {
    return this.viewModel.actions;
  }
  set actions(t) {
    this.viewModel.actions = t;
  }
  get autoCloseEnabled() {
    return this.viewModel.autoCloseEnabled;
  }
  set autoCloseEnabled(t) {
    this.viewModel.autoCloseEnabled = t;
  }
  get autoOpenEnabled() {
    return Le(q.getLogger(this), "autoOpenEnabled", { replacement: "MapView/SceneView.popupEnabled", version: "4.27" }), this.viewModel.autoOpenEnabled;
  }
  set autoOpenEnabled(t) {
    Le(q.getLogger(this), "autoOpenEnabled", { replacement: "MapView/SceneView.popupEnabled", version: "4.27" }), this.viewModel.autoOpenEnabled = t;
  }
  get defaultPopupTemplateEnabled() {
    return this.viewModel.defaultPopupTemplateEnabled;
  }
  set defaultPopupTemplateEnabled(t) {
    this.viewModel.defaultPopupTemplateEnabled = t;
  }
  get content() {
    return this.viewModel.content;
  }
  set content(t) {
    this.viewModel.content = t;
  }
  get collapseEnabled() {
    return Le(q.getLogger(this), "collapseEnabled", { replacement: "PopupVisibleElements.collapseButton", version: "4.29" }), this.visibleElements.collapseButton;
  }
  set collapseEnabled(t) {
    Le(q.getLogger(this), "collapseEnabled", { replacement: "PopupVisibleElements.collapseButton", version: "4.29" }), this.visibleElements.collapseButton = t;
  }
  get currentAlignment() {
    return this._getCurrentAlignment();
  }
  get currentDockPosition() {
    return this._getCurrentDockPosition();
  }
  get dockOptions() {
    return this._get("dockOptions") || Si;
  }
  set dockOptions(t) {
    const e = { ...Si }, i = this.viewModel?.view?.breakpoints, s = {};
    i && (s.width = i.xsmall, s.height = i.xsmall);
    const n = { ...e, ...t }, r = { ...e.breakpoint, ...s }, { breakpoint: l } = n;
    typeof l == "object" ? n.breakpoint = { ...r, ...l } : l && (n.breakpoint = r), this._set("dockOptions", n), this._setCurrentDockPosition(), this.reposition();
  }
  get featureCount() {
    return this.viewModel.featureCount;
  }
  get featureMenuOpen() {
    return this.viewModel.featureMenuOpen;
  }
  set featureMenuOpen(t) {
    this.viewModel.featureMenuOpen = t;
  }
  get features() {
    return this.viewModel.features;
  }
  set features(t) {
    this.viewModel.features = t;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(t) {
    this.viewModel.goToOverride = t;
  }
  get highlightEnabled() {
    return this.viewModel.highlightEnabled;
  }
  set highlightEnabled(t) {
    this.viewModel.highlightEnabled = t;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(t) {
    this.viewModel.location = t;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(t) {
    this._overrideIfSome("label", t);
  }
  get promises() {
    return this.viewModel.promises;
  }
  set promises(t) {
    this.viewModel.promises = t;
  }
  get selectedFeature() {
    return this.viewModel.selectedFeature;
  }
  get selectedFeatureIndex() {
    return this.viewModel.selectedFeatureIndex;
  }
  set selectedFeatureIndex(t) {
    this.viewModel.selectedFeatureIndex = t;
  }
  get selectedFeatureWidget() {
    return this._featuresWidget.selectedFeatureWidget;
  }
  get spinnerEnabled() {
    return Le(q.getLogger(this), "spinnerEnabled", { replacement: "PopupVisibleElements.spinner", version: "4.29" }), this.visibleElements.spinner;
  }
  set spinnerEnabled(t) {
    Le(q.getLogger(this), "spinnerEnabled", { replacement: "PopupVisibleElements.spinner", version: "4.29" }), this.visibleElements.spinner = t;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(t) {
    this.viewModel.title = t;
  }
  get updateLocationEnabled() {
    return this.viewModel.updateLocationEnabled;
  }
  set updateLocationEnabled(t) {
    this.viewModel.updateLocationEnabled = t;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(t) {
    this.viewModel.view = t;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(t) {
    this.viewModel.visible = t;
  }
  blur() {
    const { active: t } = this.viewModel;
    t || q.getLogger(this).warn("Popup can only be blurred when currently active."), this._featuresWidget.blur();
  }
  clear() {
    return this.viewModel.clear();
  }
  close() {
    this.visible = !1;
  }
  fetchFeatures(t, e) {
    return this.viewModel.fetchFeatures(t, e);
  }
  focus() {
    const { active: t } = this.viewModel;
    t || q.getLogger(this).warn("Popup can only be focused when currently active."), this.reposition(), requestAnimationFrame(() => {
      this._featuresWidget.focus();
    });
  }
  next() {
    return this.viewModel.next();
  }
  open(t) {
    const e = !!t && !!t.featureMenuOpen, i = { collapsed: !!t && !!t.collapsed, featureMenuOpen: e };
    this.set(i), this.viewModel.open(t), this._shouldFocus(t);
  }
  previous() {
    return this.viewModel.previous();
  }
  reposition() {
    this.renderNow(), this._positionContainer(), this._setCurrentAlignment();
  }
  triggerAction(t) {
    return this.viewModel.triggerAction(t);
  }
  render() {
    const { dockEnabled: t, currentAlignment: e, currentDockPosition: i } = this, { active: s } = this.viewModel, n = s && t, r = s && !t, l = this.selectedFeature?.layer?.title, d = this.selectedFeature?.layer?.id, c = { [V.alignTopCenter]: e === "top-center", [V.alignBottomCenter]: e === "bottom-center", [V.alignTopLeft]: e === "top-left", [V.alignBottomLeft]: e === "bottom-left", [V.alignTopRight]: e === "top-right", [V.alignBottomRight]: e === "bottom-right", [V.isDocked]: n, [V.shadow]: r, [V.isDockedTopLeft]: i === "top-left", [V.isDockedTopCenter]: i === "top-center", [V.isDockedTopRight]: i === "top-right", [V.isDockedBottomLeft]: i === "bottom-left", [V.isDockedBottomCenter]: i === "bottom-center", [V.isDockedBottomRight]: i === "bottom-right" };
    return u("div", { afterCreate: this._positionContainer, afterUpdate: this._positionContainer, bind: this, class: this.classes(V.base, c), "data-layer-id": d, "data-layer-title": l, role: "presentation" }, s ? [this._renderMainContainer(), this._renderPointer()] : null);
  }
  _renderPointer() {
    return this.dockEnabled ? null : u("div", { class: V.pointer, key: "popup-pointer", role: "presentation" }, u("div", { class: this.classes(V.pointerDirection, V.shadow) }));
  }
  _renderMainContainer() {
    const { dockEnabled: t } = this, e = { [V.shadow]: t };
    return u("div", { afterCreate: this._setMainContainerNode, afterUpdate: this._setMainContainerNode, bind: this, class: this.classes(V.main, F.widget, e) }, this._featuresWidget.render());
  }
  async _shouldFocus(t) {
    t?.shouldFocus && (await cn(() => this.viewModel?.active === !0), this.focus());
  }
  _isOutsideView(t) {
    const { popupHeight: e, popupWidth: i, screenLocation: s, side: n, view: r } = t;
    if (isNaN(i) || isNaN(e) || !r || !s) return !1;
    const l = r.padding;
    return n === "right" && s.x + i / 2 > r.width - l.right || n === "left" && s.x - i / 2 < l.left || n === "top" && s.y - e < l.top || n === "bottom" && s.y + e > r.height - l.bottom;
  }
  _calculateAutoAlignment(t) {
    if (t !== "auto") return t;
    const { _pointerOffsetInPx: e, _containerNode: i, _mainContainerNode: s, viewModel: n } = this, { screenLocation: r, view: l } = n;
    if (r == null || !l || !i) return "top-center";
    function d(w) {
      return parseInt(w.replaceAll(/[^-\d\.]/g, ""), 10);
    }
    const c = s ? window.getComputedStyle(s, null) : null, h = c ? d(c.getPropertyValue("max-height")) : 0, p = c ? d(c.getPropertyValue("height")) : 0, { height: m, width: f } = i.getBoundingClientRect(), v = f + e, y = Math.max(m, h, p) + e, _ = this._isOutsideView({ popupHeight: y, popupWidth: v, screenLocation: r, side: "right", view: l }), C = this._isOutsideView({ popupHeight: y, popupWidth: v, screenLocation: r, side: "left", view: l }), M = this._isOutsideView({ popupHeight: y, popupWidth: v, screenLocation: r, side: "top", view: l }), E = this._isOutsideView({ popupHeight: y, popupWidth: v, screenLocation: r, side: "bottom", view: l });
    return C ? M ? "bottom-right" : "top-right" : _ ? M ? "bottom-left" : "top-left" : M ? E ? "top-center" : "bottom-center" : "top-center";
  }
  _callCurrentAlignment(t) {
    return typeof t == "function" ? t.call(this) : t;
  }
  _getCurrentAlignment() {
    const { alignment: t, dockEnabled: e } = this;
    return e || !this.viewModel.active ? null : this._calculatePositionResult(this._calculateAutoAlignment(this._callCurrentAlignment(t)));
  }
  _setCurrentAlignment() {
    this._set("currentAlignment", this._getCurrentAlignment());
  }
  _setCurrentDockPosition() {
    this._set("currentDockPosition", this._getCurrentDockPosition());
  }
  _calculatePositionResult(t) {
    const e = ["left", "right"];
    return Ee(this.container) && e.reverse(), t?.replace(/leading/gi, e[0]).replaceAll(/trailing/gi, e[1]);
  }
  _callDockPosition(t) {
    return typeof t == "function" ? t.call(this) : t;
  }
  _getDockPosition() {
    return this._calculatePositionResult(this._calculateAutoDockPosition(this._callDockPosition(this.dockOptions?.position)));
  }
  _getCurrentDockPosition() {
    return this.dockEnabled && this.viewModel.active ? this._getDockPosition() : null;
  }
  _calculateAutoDockPosition(t) {
    if (t !== "auto") return t;
    const e = this.viewModel?.view, i = Ee(this.container) ? "top-left" : "top-right";
    if (!e) return i;
    const s = e.padding || { left: 0, right: 0, top: 0, bottom: 0 }, n = e.width - s.left - s.right, { breakpoints: r } = e;
    return r && n <= r.xsmall ? "bottom-center" : i;
  }
  _getDockIcon() {
    const t = this._getDockPosition();
    if (this.dockEnabled) return "minimize";
    switch (t) {
      case "top-left":
      case "bottom-left":
        return "dock-left";
      case "top-center":
        return "maximize";
      case "bottom-center":
        return "dock-bottom";
      default:
        return "dock-right";
    }
  }
  _handleDockIcon() {
    this._dockAction.icon = this._getDockIcon();
  }
  _handleDockEnabled() {
    this._dockAction.title = this.dockEnabled ? this.messages?.undock : this.messages?.dock;
  }
  _setMainContainerNode(t) {
    this._mainContainerNode = t;
  }
  _positionContainer(t = this._containerNode) {
    if (t && (this._containerNode = t), !this._containerNode) return;
    const { screenLocation: e } = this.viewModel, { width: i } = this._containerNode.getBoundingClientRect(), s = this._calculatePositionStyle(e, i);
    s && Object.assign(this._containerNode.style, s);
  }
  _calculateFullWidth(t) {
    const { currentAlignment: e, _pointerOffsetInPx: i } = this;
    return e === "top-left" || e === "bottom-left" || e === "top-right" || e === "bottom-right" ? t + i : t;
  }
  _calculateAlignmentPosition(t, e, i, s) {
    const { currentAlignment: n, _pointerOffsetInPx: r } = this;
    if (!i) return;
    const { padding: l } = i, d = s / 2, c = i.height - e, h = i.width - t;
    return n === "bottom-center" ? { top: e + r - l.top, left: t - d - l.left } : n === "top-left" ? { bottom: c + r - l.bottom, right: h + r - l.right } : n === "bottom-left" ? { top: e + r - l.top, right: h + r - l.right } : n === "top-right" ? { bottom: c + r - l.bottom, left: t + r - l.left } : n === "bottom-right" ? { top: e + r - l.top, left: t + r - l.left } : n === "top-center" ? { bottom: c + r - l.bottom, left: t - d - l.left } : void 0;
  }
  _calculatePositionStyle(t, e) {
    const { dockEnabled: i, view: s } = this;
    if (!s) return;
    if (i) return { left: "", top: "", right: "", bottom: "" };
    if (t == null || !e) return;
    const n = this._calculateFullWidth(e), r = this._calculateAlignmentPosition(t.x, t.y, s, n);
    return r ? { top: r.top !== void 0 ? `${r.top}px` : "auto", left: r.left !== void 0 ? `${r.left}px` : "auto", bottom: r.bottom !== void 0 ? `${r.bottom}px` : "auto", right: r.right !== void 0 ? `${r.right}px` : "auto" } : void 0;
  }
  _viewChange(t, e) {
    t && e && (this.close(), this.clear());
  }
  _viewReadyChange(t, e) {
    t ? this._wireUpView() : e && (this.close(), this.clear());
  }
  _wireUpView() {
    this._setDockEnabledForViewSize(this.dockOptions);
  }
  _dockingThresholdCrossed(t, e, i) {
    const [s, n] = t, [r, l] = e, { width: d = 0, height: c = 0 } = i ?? {};
    return s <= d && r > d || s > d && r <= d || n <= c && l > c || n > c && l <= c;
  }
  _updateDockEnabledForViewSize(t, e) {
    if (!t || !e) return;
    const i = this.viewModel?.view?.padding || { left: 0, right: 0, top: 0, bottom: 0 }, s = i.left + i.right, n = i.top + i.bottom, r = [], l = [];
    r[0] = t[0] - s, r[1] = t[1] - n, l[0] = e[0] - s, l[1] = e[1] - n;
    const { dockOptions: d } = this, c = d.breakpoint;
    this._dockingThresholdCrossed(r, l, c) && this._setDockEnabledForViewSize(d), this._setCurrentDockPosition();
  }
  _toggleScreenLocationEnabled() {
    const { dockEnabled: t, viewModel: e } = this;
    if (!e) return;
    const i = e.active && !t;
    e.screenLocationEnabled = i;
  }
  _shouldDockAtCurrentViewSize(t) {
    const e = t.breakpoint, i = this.viewModel?.view?.ui;
    if (!i) return !1;
    const { width: s, height: n } = i;
    if (isNaN(s) || isNaN(n) || !e) return !1;
    const r = e.hasOwnProperty("width") && s <= (e.width ?? 0), l = e.hasOwnProperty("height") && n <= (e.height ?? 0);
    return r || l;
  }
  _setDockEnabledForViewSize(t) {
    t.breakpoint && (this.dockEnabled = this._shouldDockAtCurrentViewSize(t));
  }
};
o([a({ readOnly: !0 })], A.prototype, "_featureNavigationTop", null), o([a()], A.prototype, "actions", null), o([a()], A.prototype, "alignment", void 0), o([a()], A.prototype, "autoCloseEnabled", null), o([a()], A.prototype, "autoOpenEnabled", null), o([a()], A.prototype, "defaultPopupTemplateEnabled", null), o([a()], A.prototype, "content", null), o([a()], A.prototype, "collapsed", void 0), o([a()], A.prototype, "collapseEnabled", null), o([a({ readOnly: !0 })], A.prototype, "currentAlignment", null), o([a({ readOnly: !0 })], A.prototype, "currentDockPosition", null), o([a()], A.prototype, "dockOptions", null), o([a()], A.prototype, "dockEnabled", void 0), o([a({ readOnly: !0 })], A.prototype, "featureCount", null), o([a()], A.prototype, "featureMenuOpen", null), o([a()], A.prototype, "features", null), o([a()], A.prototype, "goToOverride", null), o([a()], A.prototype, "headingLevel", void 0), o([a()], A.prototype, "highlightEnabled", null), o([a()], A.prototype, "location", null), o([a()], A.prototype, "label", null), o([a(), K("esri/widgets/Popup/t9n/Popup")], A.prototype, "messages", void 0), o([a()], A.prototype, "promises", null), o([a({ readOnly: !0 })], A.prototype, "selectedFeature", null), o([a()], A.prototype, "selectedFeatureIndex", null), o([a({ readOnly: !0 })], A.prototype, "selectedFeatureWidget", null), o([a()], A.prototype, "spinnerEnabled", null), o([a()], A.prototype, "title", null), o([a()], A.prototype, "updateLocationEnabled", null), o([a()], A.prototype, "view", null), o([a({ type: _s }), as(["triggerAction", "trigger-action"])], A.prototype, "viewModel", void 0), o([a()], A.prototype, "visible", null), o([a({ type: Vt, nonNullable: !0 })], A.prototype, "visibleElements", void 0), A = o([P("esri.widgets.Popup")], A);
const Do = A;
export {
  Do as default
};
//# sourceMappingURL=Popup-DG6t05l6.js.map
