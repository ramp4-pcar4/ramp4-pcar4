import { q5 as zt, lq as si, A as $e, v as Ve, aN as zi, bd as Wi, bc as $s, B as ni, af as Es, oH as xs, D as H, d6 as Ts, d7 as Hi, q6 as ri, q7 as lt, V as Be, cR as ks, O as o, P as l, cs as qe, aj as De, Q as P, e2 as ue, S as g, T as L, s as k, mo as oi, fq as Ls, jM as J, jN as ee, bi as Ee, jO as Le, jP as u, q8 as I, q9 as ai, qa as li, qb as xe, qc as Rs, kZ as Ps, qd as ji, aM as Zi, qe as Os, qf as Re, qg as Wt, cr as Ns, hi as Ss, d$ as Te, mn as Vs, fn as yt, fo as vt, dr as Bs, $ as qs, gi as Rt, bm as pt, qh as Ds, qi as zs, qj as Ws, eJ as Hs, qk as js, a3 as Ht, ql as Zs, qm as Ui, qn as Us, qo as di, bW as Qs, e1 as Qi, f3 as _t, f1 as it, bl as Gs, fl as Gi, on as Xi, M as Pt, da as Xs, fF as Ue, eL as Ys, qp as Ks, qq as Js, qr as ye, a9 as Yi, qs as en, qt as tn, qu as wt, qv as sn, qw as nn, qx as rn, qy as Ge, qz as Ki, ft as on, qA as an, eh as ln, bp as dn, fw as cn, eZ as un, dR as hn, ei as ci, n9 as Ke, gU as pn } from "./main-C4pF0E7B.js";
import { s as re } from "./substitute-DPdfIuLM.js";
import { Z as mn, N as Ji } from "./utils-CTt89qC8.js";
import { n as ui } from "./layerViewUtils-DdVuZi0v.js";
function dt(t, e, i, s) {
  let n = null, r = 1e3;
  typeof e == "number" ? (r = e, s = i) : (n = e ?? null, r = i);
  let a, d = 0;
  const c = () => {
    d = 0, t.apply(s, a);
  }, h = (...p) => {
    n && n.apply(s, p), a = p, r ? d || (d = setTimeout(c, r)) : c();
  };
  return h.remove = () => {
    d && (clearTimeout(d), d = 0);
  }, h.forceUpdate = () => {
    d && (clearTimeout(d), c());
  }, h.hasPendingUpdates = () => !!d, h;
}
function Ot(t) {
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
function fn(t) {
  return t ? { backgroundImage: `url(${t})` } : {};
}
function gn({ action: t, feature: e }) {
  const i = e?.attributes, s = "image" in t ? t.image : void 0;
  return s && i ? re(s, i) : s ?? "";
}
function yn(t, e) {
  return { type: zt(e), value: t, unit: e };
}
function vn(t, e) {
  return { type: zt(e), value: t, unit: e };
}
function jt(t, e, i = "arithmetic") {
  return { type: zt(e), value: t, unit: e, rotationType: i };
}
yn(0, "meters");
vn(0, "square-meters");
jt(0, "radians");
jt(0, "degrees");
jt(0, "degrees", "geographic");
const hi = ["B", "kB", "MB", "GB", "TB"];
function _n(t, e) {
  let i = (e = Math.round(e)) === 0 ? 0 : Math.floor(Math.log(e) / Math.log(si.KILOBYTES));
  i = zi(i, 0, hi.length - 1);
  const s = $e(e / si.KILOBYTES ** i, { maximumFractionDigits: 2 });
  return Ve(t.units.bytes[hi[i]], { fileSize: s });
}
const wn = "esri.widgets.Feature.support.featureUtils", Nt = () => H.getLogger(wn), bn = /href=(""|'')/gi, Mn = /(\{([^{\r\n]+)\})/g, Fn = /'/g, es = /^\s*expression\//i, In = /(\n)/gi, Cn = /[\u00A0-\u9999<>&]/gim, An = /href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi, $n = /^(?:mailto:|tel:)/, ts = "relationships/", pi = Wi("short-date-short-time");
function is(t) {
  if (t != null) return (t.sourceLayer || t.layer) ?? void 0;
}
async function ct({ type: t, value: e, event: i }) {
  try {
    return typeof e == "function" ? e(i) : e;
  } catch (s) {
    return void Nt().error("error", `An error occurred when calling the "${t}" function`, { error: s, graphic: i.graphic, value: e });
  }
}
function ss(t = "") {
  if (t) return !$n.test(t.trim().toLowerCase());
}
function Zt(t) {
  return !!t && es.test(t);
}
function En(t, e) {
  if (!e || !Zt(e) || !t) return;
  const i = e.replace(es, "").toLowerCase();
  return t.find(({ name: s }) => s.toLowerCase() === i);
}
function ns(t, e) {
  const i = En(e, t?.fieldName);
  return i ? i.title || null : t ? t.label || t.fieldName : null;
}
function xn(t, e) {
  return `{${e.get(t.toLowerCase())?.fieldName || t}}`;
}
function Tn(t) {
  return t.replaceAll(bn, "");
}
function Qe(t, e) {
  const i = Ut(e, t);
  return i ? i.name : t;
}
function kn(t, e) {
  return t && t.map((i) => Qe(i, e));
}
function Ut(t, e) {
  return t && typeof t.getField == "function" && e ? t.getField(e) ?? null : null;
}
function rs(t) {
  return `${t}`.trim();
}
function Fe({ attributes: t, globalAttributes: e, layer: i, text: s, expressionAttributes: n, fieldInfoMap: r }) {
  return s ? St({ formattedAttributes: e, template: On(s, { ...e, ...n, ...t }, i), fieldInfoMap: r }) : "";
}
function St({ formattedAttributes: t, template: e, fieldInfoMap: i }) {
  return rs(Tn(Ve(Ve(e, (s) => xn(s, i)), t)));
}
function Ln(t, e, i = !1) {
  const s = e[t];
  if (typeof s == "string") {
    const n = "%27", r = (i ? encodeURIComponent(s) : s).replaceAll(Fn, n);
    e[t] = r;
  }
}
function Rn(t, e = !1) {
  const i = { ...t };
  return Object.keys(i).forEach((s) => Ln(s, i, e)), i;
}
function Pn(t, e, i) {
  const s = (e = rs(e)) && e[0] !== "{";
  return Ve(t, Rn(i, s || !1));
}
function Vt(t, e) {
  return t.replaceAll(Mn, (i, s, n) => {
    const r = Ut(e, n);
    return r ? `{${r.name}}` : s;
  });
}
function On(t, e, i) {
  const s = Vt(t, i);
  return s && s.replaceAll(An, (n, r, a) => Pn(n, r || a, e));
}
function Nn(t, e) {
  if (typeof t == "string" && e && e.dateFormat == null && (e.places != null || e.digitSeparator != null)) {
    const i = Number(t);
    if (!isNaN(i)) return i;
  }
  return t;
}
function Sn(t) {
  return t != null && typeof t == "object" && "fieldsIndex" in t && "geometryType" in t && "getField" in t && "load" in t && "loaded" in t && "objectIdField" in t && "spatialReference" in t && "type" in t && (t.type === "feature" || t.type === "scene" || t.type === "sublayer") && "when" in t;
}
function Vn(t) {
  return t != null && typeof t == "object" && "createQuery" in t && "queryFeatureCount" in t && "queryObjectIds" in t && "queryRelatedFeatures" in t && "queryRelatedFeaturesCount" in t && "relationships" in t;
}
function os(t) {
  return Sn(t) && Vn(t);
}
function Bn(t, e) {
  const { fieldInfos: i, fieldName: s, preventPlacesFormatting: n, layer: r, timeZone: a } = e, d = as(i, s), c = Ut(r, s);
  if (d && !ri(s)) {
    const p = c?.type, m = d.format?.dateFormat;
    if (p === "date" || p === "date-only" || p === "time-only" || p === "timestamp-offset" || m) return Ji(t, { format: m, fieldType: p, timeZoneOptions: { layerTimeZone: r && "preferredTimeZone" in r ? r.preferredTimeZone : null, viewTimeZone: a, datesInUnknownTimezone: !(!r || !("datesInUnknownTimezone" in r)) && !!r.datesInUnknownTimezone } });
  }
  const h = d?.format;
  return typeof t == "string" && ri(s) && h ? qn(t, h) : typeof (t = Nn(t, h)) == "string" || t == null || h == null ? Xe(t) : $e(t, n ? { ...lt(h), minimumFractionDigits: 0, maximumFractionDigits: 20 } : lt(h));
}
function qn(t, e) {
  return t = t.trim(), /\d{2}-\d{2}/.test(t) ? t : t.includes(",") ? bt(t, ",", ", ", e) : t.includes(";") ? bt(t, ";", "; ", e) : t.includes(" ") ? bt(t, " ", " ", e) : $e(Number(t), lt(e));
}
function bt(t, e, i, s) {
  return t.trim().split(e).map((n) => $e(Number(n), lt(s))).join(i);
}
function as(t, e) {
  if (t?.length && e) return t.find((i) => i.fieldName?.toLowerCase() === e.toLowerCase());
}
function Dn({ fieldName: t, graphic: e, layer: i }) {
  if (ce(t) || !i || typeof i.getFeatureType != "function") return null;
  const { typeIdField: s } = i;
  if (!s || t !== s) return null;
  const n = i.getFeatureType(e);
  return n ? n.name : null;
}
function zn({ fieldName: t, value: e, graphic: i, layer: s }) {
  if (ce(t) || !s || typeof s.getFieldDomain != "function") return null;
  const n = i && s.getFieldDomain(t, { feature: i });
  return n && n.type === "coded-value" ? n.getName(e) : null;
}
function Wn(t, e, i, s) {
  const { creatorField: n, creationDateField: r, editorField: a, editDateField: d } = t;
  if (!e) return;
  const c = $s(s && "preferredTimeZone" in s ? s.preferredTimeZone : null, !(!s || !("datesInUnknownTimezone" in s)) && !!s.datesInUnknownTimezone, i, pi, "date"), h = { ...pi, ...c }, p = e[d];
  if (typeof p == "number") {
    const f = e[a];
    return { type: "edit", date: ni(p, h), user: f };
  }
  const m = e[r];
  if (typeof m == "number") {
    const f = e[n];
    return { type: "create", date: ni(m, h), user: f };
  }
  return null;
}
function Hn(t, e) {
  const i = /* @__PURE__ */ new Map();
  if (!t) return i;
  for (const s of t) {
    if (!s.fieldName) continue;
    const n = Qe(s.fieldName, e);
    s.fieldName = n, i.set(n.toLowerCase(), s);
  }
  return i;
}
function mi(t) {
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
function Qt(t) {
  return t.replaceAll(Cn, (e) => `&#${e.charCodeAt(0)};`);
}
function Xe(t) {
  return typeof t == "string" ? t.replaceAll(In, '<br class="esri-text-new-line" />') : t;
}
function ls(t) {
  const { value: e, fieldName: i, fieldInfos: s, fieldInfoMap: n, layer: r, graphic: a, timeZone: d } = t;
  if (e == null) return "";
  const c = zn({ fieldName: i, value: e, graphic: a, layer: r });
  if (c) return c;
  const h = Dn({ fieldName: i, graphic: a, layer: r });
  if (h) return h;
  if (n.get(i.toLowerCase())) return Bn(e, { fieldInfos: s || Array.from(n.values()), fieldName: i, layer: r, timeZone: d });
  const p = r?.fieldsIndex?.get(i);
  return p && (mn(p) || Ts(p)) ? Ji(e, { fieldType: p.type, timeZoneOptions: { layerTimeZone: r && "preferredTimeZone" in r ? r.preferredTimeZone : null, viewTimeZone: d, datesInUnknownTimezone: !(!r || !("datesInUnknownTimezone" in r)) && !!r.datesInUnknownTimezone } }) : Xe(e);
}
function Mt({ fieldInfos: t, attributes: e, layer: i, graphic: s, fieldInfoMap: n, relatedInfos: r, timeZone: a }) {
  const d = {};
  return r?.forEach((c) => Qn({ attributes: d, relatedInfo: c, fieldInfoMap: n, fieldInfos: t, layer: i, timeZone: a })), e && Object.keys(e).forEach((c) => {
    const h = e[c];
    d[c] = ls({ fieldName: c, fieldInfos: t, fieldInfoMap: n, layer: i, value: h, graphic: s, timeZone: a });
  }), d;
}
async function ds(t, e) {
  const { layer: i, graphic: s, outFields: n, objectIds: r, returnGeometry: a, spatialReference: d } = t, c = r[0];
  if (typeof c != "number" && typeof c != "string") {
    const p = "Could not query required fields for the specified feature. The feature's ID is invalid.", m = { layer: i, graphic: s, objectId: c, requiredFields: n };
    return Nt().warn(p, m), null;
  }
  if (!Es(i)?.operations?.supportsQuery) {
    const p = "The specified layer cannot be queried. The following fields will not be available.", m = { layer: i, graphic: s, requiredFields: n, returnGeometry: a };
    return Nt().warn(p, m), null;
  }
  const h = i.createQuery();
  return h.objectIds = r, h.outFields = n?.length ? n : [i.objectIdField], h.returnGeometry = !!a, h.returnZ = !!a, h.returnM = !!a, h.outSpatialReference = d, (await i.queryFeatures(h, e)).features[0];
}
async function jn(t) {
  if (!t.expressionInfos?.length) return !1;
  const e = await Hi(), { arcadeUtils: { hasGeometryFunctions: i } } = e;
  return i(t);
}
async function Zn({ graphic: t, popupTemplate: e, layer: i, spatialReference: s }, n) {
  if (!i || !e || (typeof i.load == "function" && await i.load(n), !t.attributes)) return;
  const r = i.objectIdField, a = t.attributes[r];
  if (a == null) return;
  const d = [a], c = await e.getRequiredFields(i.fieldsIndex), h = xs(c, t), p = h ? [] : c.includes(r) ? c : [...c, r], m = e.returnGeometry || await jn(e);
  if (h && !m) return;
  const f = await ds({ layer: i, graphic: t, outFields: p, objectIds: d, returnGeometry: m, spatialReference: s }, n);
  f && (f.geometry && (t.geometry = f.geometry), f.attributes && (t.attributes = { ...t.attributes, ...f.attributes }));
}
function ce(t = "") {
  return !!t && t.includes(ts);
}
function Un(t) {
  return t ? `${ts}${t.layerId}/${t.fieldName}` : "";
}
function fi({ attributes: t, graphic: e, relatedInfo: i, fieldInfos: s, fieldInfoMap: n, layer: r, timeZone: a }) {
  t && e && i && Object.keys(e.attributes).forEach((d) => {
    const c = Un({ layerId: i.relation.id.toString(), fieldName: d }), h = e.attributes[d];
    t[c] = ls({ fieldName: c, fieldInfos: s, fieldInfoMap: n, layer: r, value: h, graphic: e, timeZone: a });
  });
}
function Qn({ attributes: t, relatedInfo: e, fieldInfoMap: i, fieldInfos: s, layer: n, timeZone: r }) {
  t && e && (e.relatedFeatures?.forEach((a) => fi({ attributes: t, graphic: a, relatedInfo: e, fieldInfoMap: i, fieldInfos: s, layer: n, timeZone: r })), e.relatedStatsFeatures?.forEach((a) => fi({ attributes: t, graphic: a, relatedInfo: e, fieldInfoMap: i, fieldInfos: s, layer: n, timeZone: r })));
}
const gi = (t) => {
  if (!t) return !1;
  const e = t.toUpperCase();
  return e.includes("CURRENT_TIMESTAMP") || e.includes("CURRENT_DATE") || e.includes("CURRENT_TIME");
}, cs = ({ layer: t, method: e, query: i, definitionExpression: s }) => {
  if (!t.capabilities?.query?.supportsCacheHint || e === "attachments") return;
  const n = i.where != null ? i.where : null, r = i.geometry != null ? i.geometry : null;
  gi(s) || gi(n) || r?.type === "extent" || i.resultType === "tile" || (i.cacheHint = !0);
}, Gn = ({ query: t, layer: e, method: i }) => {
  cs({ layer: e, method: i, query: t, definitionExpression: `${e.definitionExpression} ${e.serviceDefinitionExpression ?? ""}` });
}, Xn = ({ queryPayload: t, layer: e, method: i }) => {
  cs({ layer: e, method: i, query: t, definitionExpression: `${e.definitionExpression} ${e.serviceDefinitionExpression ?? ""}` });
};
function Yn(t, e, i) {
  return t && e && i ? e.type === "sublayer" ? Ne({ layers: e.layer?.sublayers, map: t, relatedLayer: e, relationship: i }) || Ne({ layers: e.layer?.subtables, map: t, relatedLayer: e, relationship: i }) : Ne({ layers: t.allLayers, map: t, relatedLayer: e, relationship: i }) || Ne({ layers: t.allTables, map: t, relatedLayer: e, relationship: i }) : null;
}
function yi(t, e) {
  return t?.allTables.find((i) => i.type === "feature" && i.layerId === e.id && i.url === e.layer?.url);
}
function Ne({ map: t, relationship: e, relationship: { relatedTableId: i }, relatedLayer: s, layers: n }) {
  if (!n) return null;
  for (const r of n) {
    if (r.type === "map-image") {
      const d = Ne({ layers: r.sublayers, map: t, relatedLayer: s, relationship: e }) || Ne({ layers: r.subtables, map: t, relatedLayer: s, relationship: e });
      if (d) return d;
      continue;
    }
    if (!os(r)) continue;
    if (s.type === "sublayer") {
      if (r !== s && r.id === i) return r.isTable ? yi(t, r) : r;
      continue;
    }
    const a = s.type === "scene" && s.associatedLayer ? s.associatedLayer.url : s.url;
    if (!a) return null;
    if (r.type !== "sublayer") {
      if (r !== s && r.url === a && r.layerId === i) return r;
    } else if (r !== s && r.layer?.url === a && r.id === i) return r.isTable ? yi(t, r) : r;
  }
  return null;
}
const vi = { editing: !1, operations: { add: !0, update: !0, delete: !0 } }, us = Be.ofType(ks);
let G = class extends ue {
  constructor(e) {
    super(e), this._getAttachmentsPromise = null, this._attachmentLayer = null, this.capabilities = { ...vi }, this.activeAttachmentInfo = null, this.activeFileInfo = null, this.attachmentInfos = new us(), this.fileInfos = new Be(), this.graphic = null, this.mode = "view", this.filesEnabled = !1, this.addHandles(g(() => this.graphic, () => this._graphicChanged(), L));
  }
  destroy() {
    this._attachmentLayer = null, this.graphic = null;
  }
  castCapabilities(e) {
    return { ...vi, ...e };
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
    const s = this._getObjectId(), n = new oi({ objectIds: [s], returnMetadata: !0 }), r = [], a = e.queryAttachments(n).then((c) => c[s] || r).catch(() => r);
    this._getAttachmentsPromise = a, this.notifyChange("state");
    const d = await a;
    return i.destroyAll(), d.length && i.addMany(d), this._getAttachmentsPromise = null, this.notifyChange("state"), d;
  }
  async addAttachment(e, i = this.graphic) {
    const { _attachmentLayer: s, attachmentInfos: n, capabilities: r } = this;
    if (!i) throw new k("invalid-graphic", "addAttachment(): A valid graphic is required.", { graphic: i });
    if (!e) throw new k("invalid-attachment", "addAttachment(): An attachment is required.", { attachment: e });
    if (!r.operations?.add) throw new k("invalid-capabilities", "addAttachment(): add capabilities are required.");
    if (!s || typeof s.addAttachment != "function") throw new k("invalid-layer", "addAttachment(): A valid layer is required.");
    const a = s.addAttachment(i, e).then((c) => this._queryAttachment(c.objectId, i)), d = await a;
    return n.add(d), d;
  }
  async deleteAttachment(e) {
    const { _attachmentLayer: i, attachmentInfos: s, graphic: n, capabilities: r } = this;
    if (!e) throw new k("invalid-attachment-info", "deleteAttachment(): An attachmentInfo is required.", { attachmentInfo: e });
    if (!r.operations?.delete) throw new k("invalid-capabilities", "deleteAttachment(): delete capabilities are required.");
    if (!i || typeof i.deleteAttachments != "function") throw new k("invalid-layer", "deleteAttachment(): A valid layer is required.");
    if (!n) throw new k("invalid-graphic", "deleteAttachment(): A graphic is required.");
    const a = i.deleteAttachments(n, [e.id]).then(() => e), d = await a;
    return s.remove(d), d.destroy(), d;
  }
  async updateAttachment(e, i = this.activeAttachmentInfo) {
    const { _attachmentLayer: s, attachmentInfos: n, graphic: r, capabilities: a } = this;
    if (!e) throw new k("invalid-attachment", "updateAttachment(): An attachment is required.", { attachment: e });
    if (!i) throw new k("invalid-attachment-info", "updateAttachment(): An attachmentInfo is required.", { attachmentInfo: i });
    if (!a.operations?.update) throw new k("invalid-capabilities", "updateAttachment(): Update capabilities are required.");
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
    const n = this._getObjectId(i), r = new oi({ objectIds: [n], attachmentsWhere: `AttachmentId=${e}`, returnMetadata: !0 });
    return s.queryAttachments(r).then((a) => a[n][0]);
  }
  _getObjectId(e = this.graphic) {
    return e?.getObjectId() ?? null;
  }
  _graphicChanged() {
    this.graphic && (this._setAttachmentLayer(), this.getAttachments().catch(() => {
    }));
  }
  _setAttachmentLayer() {
    const { graphic: e } = this, i = is(e);
    this._attachmentLayer = i ? i.type === "scene" && i.associatedLayer != null ? i.associatedLayer : i : null;
  }
};
o([l()], G.prototype, "capabilities", void 0), o([qe("capabilities")], G.prototype, "castCapabilities", null), o([l()], G.prototype, "activeAttachmentInfo", void 0), o([l()], G.prototype, "activeFileInfo", void 0), o([l({ readOnly: !0, type: us })], G.prototype, "attachmentInfos", void 0), o([l()], G.prototype, "fileInfos", void 0), o([l({ type: De })], G.prototype, "graphic", void 0), o([l()], G.prototype, "mode", void 0), o([l({ readOnly: !0 })], G.prototype, "state", null), o([l()], G.prototype, "filesEnabled", void 0), o([l({ readOnly: !0 })], G.prototype, "supportsResizeAttachments", null), G = o([P("esri.widgets.Attachments.AttachmentsViewModel")], G);
const Gt = G;
function _i(t) {
  const e = t.toLowerCase();
  return e === "image/bmp" || e === "image/emf" || e === "image/exif" || e === "image/gif" || e === "image/x-icon" || e === "image/jpeg" || e === "image/png" || e === "image/tiff" || e === "image/x-wmf";
}
function Kn(t) {
  const e = Ls("esri/themes/base/images/files/");
  return t ? t === "text/plain" ? `${e}text-32.svg` : t === "application/pdf" ? `${e}pdf-32.svg` : t === "text/csv" ? `${e}csv-32.svg` : t === "application/gpx+xml" ? `${e}gpx-32.svg` : t === "application/x-dwf" ? `${e}cad-32.svg` : t === "application/postscript" || t === "application/json" || t === "text/xml" || t === "model/vrml" ? `${e}code-32.svg` : t === "application/x-zip-compressed" || t === "application/x-7z-compressed" || t === "application/x-gzip" || t === "application/x-tar" || t === "application/x-gtar" || t === "application/x-bzip2" || t === "application/gzip" || t === "application/x-compress" || t === "application/x-apple-diskimage" || t === "application/x-rar-compressed" || t === "application/zip" ? `${e}zip-32.svg` : t.includes("image/") ? `${e}image-32.svg` : t.includes("audio/") ? `${e}sound-32.svg` : t.includes("video/") ? `${e}video-32.svg` : t.includes("msexcel") || t.includes("ms-excel") || t.includes("spreadsheetml") ? `${e}excel-32.svg` : t.includes("msword") || t.includes("ms-word") || t.includes("wordprocessingml") ? `${e}word-32.svg` : t.includes("powerpoint") || t.includes("presentationml") ? `${e}report-32.svg` : `${e}generic-32.svg` : `${e}generic-32.svg`;
}
const de = { checkMark: "esri-icon-check-mark", close: "esri-icon-close", collapse: "esri-icon-collapse", down: "esri-icon-down", downArrow: "esri-icon-down-arrow", dragHorizontal: "esri-icon-drag-horizontal", dragVertical: "esri-icon-drag-vertical", duplicate: "esri-icon-duplicate", expand: "esri-icon-expand", fontFallbackText: "esri-icon-font-fallback-text", forward: "esri-icon-forward", handleVertical: "esri-icon-handle-vertical", icon: "esri-icon", left: "esri-icon-left", loadingIndicator: "esri-icon-loading-indicator", locateCircled: "esri-icon-locate-circled", minus: "esri-icon-minus", noticeTriangle: "esri-icon-notice-triangle", pause: "esri-icon-pause", play: "esri-icon-play", plus: "esri-icon-plus", radioChecked: "esri-icon-radio-checked", radioUnchecked: "esri-icon-radio-unchecked", refresh: "esri-icon-refresh", reverse: "esri-icon-reverse", right: "esri-icon-right", search: "esri-icon-search", swap: "esri-icon-swap", table: "esri-icon-table", trash: "esri-icon-trash", up: "esri-icon-up", upArrow: "esri-icon-up-arrow", upDownArrows: "esri-icon-up-down-arrows", urbanModel: "esri-icon-urban-model", zoomInMagnifyingGlass: "esri-icon-zoom-in-magnifying-glass", zoomToObject: "esri-icon-zoom-to-object" }, wi = { addButton: !0, addSubmitButton: !0, cancelAddButton: !0, cancelUpdateButton: !0, deleteButton: !0, errorMessage: !0, progressBar: !0, updateButton: !0 }, E = "esri-attachments", b = { base: E, loaderContainer: `${E}__loader-container`, loader: `${E}__loader`, fadeIn: `${E}--fade-in`, container: `${E}__container`, containerList: `${E}__container--list`, containerPreview: `${E}__container--preview`, actions: `${E}__actions`, deleteButton: `${E}__delete-button`, addAttachmentButton: `${E}__add-attachment-button`, errorMessage: `${E}__error-message`, items: `${E}__items`, item: `${E}__item`, itemButton: `${E}__item-button`, itemMask: `${E}__item-mask`, itemMaskIcon: `${E}__item-mask--icon`, itemImage: `${E}__image`, itemImageResizable: `${E}__image--resizable`, itemLabel: `${E}__label`, itemFilename: `${E}__filename`, itemChevronIcon: `${E}__item-chevron-icon`, itemLink: `${E}__item-link`, itemLinkOverlay: `${E}__item-link-overlay`, itemLinkOverlayIcon: `${E}__item-link-overlay-icon`, itemEditIcon: `${E}__item-edit-icon`, itemAddIcon: `${E}__item-add-icon`, itemAddButton: `${E}__item-add-button`, formNode: `${E}__form-node`, fileFieldset: `${E}__file-fieldset`, fileLabel: `${E}__file-label`, fileName: `${E}__file-name`, fileInput: `${E}__file-input`, metadata: `${E}__metadata`, metadataFieldset: `${E}__metadata-fieldset`, progressBar: `${E}__progress-bar` }, Ft = window.CSS;
let W = class extends ee {
  constructor(e, i) {
    super(e, i), this.displayType = "auto", this.messages = null, this.messagesUnits = null, this.selectedFile = null, this.submitting = !1, this.viewModel = null, this.visibleElements = { ...wi }, this._supportsImageOrientation = Ft && Ft.supports && Ft.supports("image-orientation", "from-image"), this._addAttachmentForm = null, this._updateAttachmentForm = null;
  }
  normalizeCtorArgs(e) {
    return e?.viewModel || (e = { viewModel: new Gt(), ...e }), e;
  }
  initialize() {
    this.addHandles([Ee(() => this.viewModel?.attachmentInfos, "change", () => this.scheduleRender()), Ee(() => this.viewModel?.fileInfos, "change", () => this.scheduleRender()), g(() => this.viewModel?.mode, () => this._modeChanged(), L)]);
  }
  loadDependencies() {
    return Le({ icon: () => import("./calcite-icon-D8EDmgwR.js") });
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
  get icon() {
    return "attachment";
  }
  set icon(e) {
    this._overrideIfSome("icon", e);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e) {
    this._overrideIfSome("label", e);
  }
  castVisibleElements(e) {
    return { ...wi, ...e };
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
    return u("div", { class: this.classes(b.base, I.widget) }, e ? this._renderProgressBar() : null, s === "loading" ? this._renderLoading() : this._renderAttachments(), this._renderErrorMessage());
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
    const { submitting: e, selectedFile: i } = this, s = e || !i, n = this.visibleElements.cancelAddButton ? u("button", { bind: this, class: this.classes(I.button, I.buttonTertiary, I.buttonSmall, I.buttonHalf, e && I.buttonDisabled), disabled: e, onclick: this._cancelForm, type: "button" }, this.messages.cancel) : null, r = this.visibleElements.addSubmitButton ? u("button", { class: this.classes(I.button, I.buttonSecondary, I.buttonSmall, I.buttonHalf, { [I.buttonDisabled]: s }), disabled: s, type: "submit" }, this.messages.add) : null, a = i ? u("span", { class: b.fileName, key: "file-name" }, i.name) : null, d = u("form", { afterCreate: ai, afterRemoved: li, bind: this, "data-node-ref": "_addAttachmentForm", onsubmit: this._submitAddAttachment }, u("fieldset", { class: b.fileFieldset }, a, u("label", { class: this.classes(b.fileLabel, I.button, I.buttonSecondary) }, i ? this.messages.changeFile : this.messages.selectFile, u("input", { bind: this, class: b.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))), r, n);
    return u("div", { class: b.formNode, key: "add-form-container" }, d);
  }
  _renderDetailsForm(e) {
    const { visibleElements: i, viewModel: s, selectedFile: n, submitting: r } = this, { capabilities: a } = s, d = r || !n;
    let c, h, p, m;
    n ? (c = n.type, h = n.name, p = n.size) : e && "file" in e ? (c = e.file.type, h = e.file.name, p = e.file.size) : e && "contentType" in e && (c = e.contentType, h = e.name, p = e.size, m = e.url);
    const f = a.editing && a.operations?.delete && i.deleteButton ? u("button", { bind: this, class: this.classes(I.button, I.buttonSmall, I.buttonTertiary, b.deleteButton, { [I.buttonDisabled]: r }), disabled: r, key: "delete-button", onclick: (O) => this._submitDeleteAttachment(O, e), type: "button" }, this.messages.delete) : void 0, y = a.editing && a.operations?.update && i.updateButton ? u("button", { class: this.classes(I.button, I.buttonSmall, I.buttonThird, { [I.buttonDisabled]: d }), disabled: d, key: "update-button", type: "submit" }, this.messages.update) : void 0, v = this.visibleElements.cancelUpdateButton ? u("button", { bind: this, class: this.classes(I.button, I.buttonSmall, I.buttonTertiary, I.buttonThird, { [I.buttonDisabled]: r }), disabled: r, key: "cancel-button", onclick: this._cancelForm, type: "button" }, this.messages.cancel) : void 0, _ = a.editing && a.operations?.update ? u("fieldset", { class: b.fileFieldset, key: "file" }, u("span", { class: b.fileName, key: "file-name" }, h), u("label", { class: this.classes(b.fileLabel, I.button, I.buttonSecondary) }, this.messages.changeFile, u("input", { bind: this, class: b.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))) : void 0, C = u("fieldset", { class: b.metadataFieldset, key: "size" }, u("label", null, _n(this.messagesUnits, p ?? 0))), M = u("fieldset", { class: b.metadataFieldset, key: "content-type" }, u("label", null, c)), x = m != null ? u("a", { class: b.itemLink, href: m, rel: "noreferrer", target: "_blank" }, this._renderImageMask(e, 400), u("div", { class: b.itemLinkOverlay }, u("span", { class: b.itemLinkOverlayIcon }, u("calcite-icon", { icon: "launch" })))) : this._renderImageMask(e, 400), w = u("form", { afterCreate: ai, afterRemoved: li, bind: this, "data-node-ref": "_updateAttachmentForm", onsubmit: (O) => this._submitUpdateAttachment(O, e) }, u("div", { class: b.metadata }, C, M), _, u("div", { class: b.actions }, f, v, y));
    return u("div", { class: b.formNode, key: "edit-form-container" }, x, w);
  }
  _renderImageMask(e, i) {
    return e ? "file" in e ? this._renderGenericImageMask(e.file.name, e.file.type) : this._renderImageMaskForAttachment(e, i) : null;
  }
  _renderGenericImageMask(e, i) {
    const { supportsResizeAttachments: s } = this.viewModel, n = Kn(i), r = { [b.itemImageResizable]: s };
    return u("div", { class: this.classes(b.itemMaskIcon, b.itemMask), key: n }, u("img", { alt: e, class: this.classes(r, b.itemImage), src: n, title: e }));
  }
  _renderImageMaskForAttachment(e, i) {
    const { supportsResizeAttachments: s } = this.viewModel;
    if (!e) return null;
    const { contentType: n, name: r, url: a } = e;
    if (!s || !_i(n)) return this._renderGenericImageMask(r, n);
    const d = this._getCSSTransform(e), c = d ? { transform: d, "image-orientation": "none" } : {}, h = `${a}${a?.includes("?") ? "&" : "?"}w=${i}`, p = { [b.itemImageResizable]: s };
    return u("div", { class: this.classes(b.itemMask), key: h }, u("img", { alt: r, class: this.classes(p, b.itemImage), src: h, styles: c, title: r }));
  }
  _renderFile(e) {
    const { file: i } = e;
    return u("li", { class: b.item, key: i }, u("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: b.itemButton, key: "details-button", onclick: () => this._startEditFile(e), title: this.messages.attachmentDetails, type: "button" }, this._renderImageMask(e), u("label", { class: b.itemLabel }, u("span", { class: b.itemFilename }, i.name || this.messages.noTitle), u("span", { "aria-hidden": "true", class: this.classes(b.itemChevronIcon, xe(this.container) ? de.left : de.right) }))));
  }
  _renderAttachmentInfo({ attachmentInfo: e, displayType: i }) {
    const { viewModel: s, effectiveDisplayType: n } = this, { capabilities: r, supportsResizeAttachments: a } = s, { contentType: d, name: c, url: h } = e, p = this._renderImageMask(e, i === "list" ? 48 : 400), m = r.editing ? u("span", { "aria-hidden": "true", class: this.classes(b.itemChevronIcon, xe(this.container) ? de.left : de.right) }) : null, f = [p, n === "preview" && a && _i(d) ? null : u("label", { class: b.itemLabel }, u("span", { class: b.itemFilename }, c || this.messages.noTitle), m)], y = r.editing ? u("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: b.itemButton, "data-attachment-info-id": e.id, key: "details-button", onclick: () => this._startEditAttachment(e), title: this.messages.attachmentDetails, type: "button" }, f) : u("a", { class: b.itemButton, href: h ?? void 0, key: "details-link", rel: "noreferrer", target: "_blank" }, f);
    return u("li", { class: b.item, key: e }, y);
  }
  _renderAttachmentContainer() {
    const { effectiveDisplayType: e, viewModel: i, visibleElements: s } = this, { attachmentInfos: n, capabilities: r, fileInfos: a } = i, d = !!n?.length, c = !!a?.length, h = { [b.containerList]: e !== "preview", [b.containerPreview]: e === "preview" }, p = r.editing && r.operations?.add && s.addButton ? u("button", { bind: this, class: this.classes(I.button, I.buttonTertiary, b.addAttachmentButton), onclick: () => this._startAddAttachment(), type: "button" }, u("span", { "aria-hidden": "true", class: this.classes(b.itemAddIcon, de.plus) }), this.messages.add) : void 0, m = d ? u("ul", { class: b.items, key: "attachments-list" }, n.toArray().map((v) => this._renderAttachmentInfo({ attachmentInfo: v, displayType: e }))) : void 0, f = c ? u("ul", { class: b.items, key: "file-list" }, a.toArray().map((v) => this._renderFile(v))) : void 0, y = c || d ? void 0 : u("div", { class: I.empty }, this.messages.noAttachments);
    return u("div", { class: this.classes(b.container, h), key: "attachments-container" }, m, f, y, p);
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
o([l()], W.prototype, "capabilities", null), o([l()], W.prototype, "displayType", void 0), o([l({ readOnly: !0 })], W.prototype, "effectiveDisplayType", null), o([l()], W.prototype, "graphic", null), o([l()], W.prototype, "icon", null), o([l()], W.prototype, "label", null), o([l(), J("esri/widgets/Attachments/t9n/Attachments")], W.prototype, "messages", void 0), o([l(), J("esri/core/t9n/Units")], W.prototype, "messagesUnits", void 0), o([l({ readOnly: !0 })], W.prototype, "selectedFile", void 0), o([l({ readOnly: !0 })], W.prototype, "submitting", void 0), o([l({ readOnly: !0 })], W.prototype, "error", void 0), o([l({ type: Gt })], W.prototype, "viewModel", void 0), o([l()], W.prototype, "visibleElements", void 0), o([qe("visibleElements")], W.prototype, "castVisibleElements", null), W = o([P("esri.widgets.Attachments")], W);
const Jn = W;
let je = class extends Gt {
  constructor(e) {
    super(e), this.description = null, this.title = null;
  }
};
o([l()], je.prototype, "description", void 0), o([l()], je.prototype, "title", void 0), je = o([P("esri.widgets.Feature.FeatureAttachments.FeatureAttachmentsViewModel")], je);
const Xt = je;
function Yt({ level: t, class: e, ...i }, s) {
  const n = er(t);
  return u(`h${n}`, { ...i, "aria-level": String(n), class: Rs(I.heading, e), role: "heading" }, s);
}
function er(t) {
  return zi(Math.ceil(t), 1, 6);
}
const It = "esri-feature-element-info", Ct = { base: It, title: `${It}__title`, description: `${It}__description` };
let Pe = class extends ee {
  constructor(e, i) {
    super(e, i), this.description = null, this.headingLevel = 2, this.title = null;
  }
  render() {
    return u("div", { class: Ct.base }, this._renderTitle(), this._renderDescription());
  }
  _renderTitle() {
    const { title: e } = this;
    return e ? u(Yt, { class: Ct.title, innerHTML: e, level: this.headingLevel }) : null;
  }
  _renderDescription() {
    const { description: e } = this;
    return e ? u("div", { class: Ct.description, innerHTML: e, key: "description" }) : null;
  }
};
o([l()], Pe.prototype, "description", void 0), o([l()], Pe.prototype, "headingLevel", void 0), o([l()], Pe.prototype, "title", void 0), Pe = o([P("esri.widgets.Feature.support.FeatureElementInfo")], Pe);
const mt = Pe, tr = { base: "esri-feature-attachments" };
let se = class extends ee {
  constructor(e, i) {
    super(e, i), this._featureElementInfo = null, this.attachmentsWidget = new Jn(), this.headingLevel = 2, this.viewModel = new Xt();
  }
  initialize() {
    this._featureElementInfo = new mt(), this.addHandles([g(() => [this.viewModel?.description, this.viewModel?.title, this.headingLevel], () => this._setupFeatureElementInfo(), L), g(() => this.viewModel, (e) => this.attachmentsWidget.viewModel = e, L)]);
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
    return u("div", { class: tr.base }, this._featureElementInfo?.render(), e?.render());
  }
  _setupFeatureElementInfo() {
    const { description: e, title: i, headingLevel: s } = this;
    this._featureElementInfo?.set({ description: e, title: i, headingLevel: s });
  }
};
o([l({ readOnly: !0 })], se.prototype, "attachmentsWidget", void 0), o([l()], se.prototype, "description", null), o([l()], se.prototype, "displayType", null), o([l()], se.prototype, "graphic", null), o([l()], se.prototype, "headingLevel", void 0), o([l()], se.prototype, "title", null), o([l({ type: Xt })], se.prototype, "viewModel", void 0), se = o([P("esri.widgets.Feature.FeatureAttachments")], se);
const ir = se;
let fe = class extends ue {
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
    e && i && (ct({ type: "content", value: s, event: { graphic: i } }), this._set("created", null));
  }
  async _createContent(e) {
    const i = this.graphic;
    if (!i || !e) return;
    const s = ct({ type: "content", value: e, event: { graphic: i } });
    this._loadingPromise = s, this.notifyChange("state");
    const n = await s;
    s === this._loadingPromise && (this._loadingPromise = null, this.notifyChange("state"), this._set("created", n));
  }
};
o([l({ readOnly: !0 })], fe.prototype, "created", void 0), o([l()], fe.prototype, "creator", void 0), o([l()], fe.prototype, "destroyer", void 0), o([l({ type: De })], fe.prototype, "graphic", void 0), o([l({ readOnly: !0 })], fe.prototype, "state", null), fe = o([P("esri.widgets.Feature.FeatureContent.FeatureContentViewModel")], fe);
const ut = fe;
function hs(t) {
  return (e) => {
    e.hasOwnProperty("_delegatedEventNames") || (e._delegatedEventNames = e._delegatedEventNames ? e._delegatedEventNames.slice() : []);
    const i = e._delegatedEventNames, s = Array.isArray(t) ? t : sr(t);
    i.push(...s);
  };
}
function sr(t) {
  return t.split(",").map((e) => e.trim());
}
function ps(t) {
  return t && typeof t.render == "function";
}
function nr(t) {
  return t && typeof t.postMixInProperties == "function" && typeof t.buildRendering == "function" && typeof t.postCreate == "function" && typeof t.startup == "function";
}
const At = "esri-feature-content", $t = { base: At, loaderContainer: `${At}__loader-container`, loader: `${At}__loader` };
let Oe = class extends ee {
  constructor(e, i) {
    super(e, i), this.viewModel = null, this._addTargetToAnchors = (s) => {
      Array.from(s.querySelectorAll("a")).forEach((n) => {
        ss(n.href) && !n.hasAttribute("target") && n.setAttribute("target", "_blank");
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
    return u("div", { class: $t.base }, e === "loading" ? this._renderLoading() : this._renderCreated());
  }
  _renderLoading() {
    return u("div", { class: $t.loaderContainer, key: "loader" }, u("div", { class: $t.loader }));
  }
  _renderCreated() {
    const e = this.viewModel?.created;
    return e ? e instanceof HTMLElement ? u("div", { afterCreate: this._attachToNode, bind: e, key: e }) : ps(e) ? u("div", { key: e }, !e.destroyed && e.render()) : u("div", { afterCreate: this._addTargetToAnchors, innerHTML: e, key: e }) : null;
  }
  _attachToNode(e) {
    const i = this;
    e.appendChild(i);
  }
};
o([l()], Oe.prototype, "creator", null), o([l()], Oe.prototype, "graphic", null), o([l({ type: ut })], Oe.prototype, "viewModel", void 0), Oe = o([P("esri.widgets.Feature.FeatureContent")], Oe);
const st = Oe;
let le = class extends ue {
  constructor(e) {
    super(e), this.attributes = null, this.expressionInfos = null, this.description = null, this.fieldInfos = null, this.title = null;
  }
  get formattedFieldInfos() {
    const { expressionInfos: e, fieldInfos: i } = this, s = [];
    return i?.forEach((n) => {
      if (!(!n.hasOwnProperty("visible") || n.visible)) return;
      const r = n.clone();
      r.label = ns(r, e), s.push(r);
    }), s;
  }
};
o([l()], le.prototype, "attributes", void 0), o([l({ type: [Ps] })], le.prototype, "expressionInfos", void 0), o([l()], le.prototype, "description", void 0), o([l({ type: [ji] })], le.prototype, "fieldInfos", void 0), o([l({ readOnly: !0 })], le.prototype, "formattedFieldInfos", null), o([l()], le.prototype, "title", void 0), le = o([P("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")], le);
const ft = le, rr = [{ pattern: /^\s*(https?:\/\/([^\s]+))\s*$/i, target: "_blank", label: "{messages.view}" }, { pattern: /^\s*(tel:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(mailto:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "App Studio Player" }, { pattern: /^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Collector" }, { pattern: /^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Explorer" }, { pattern: /^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Navigator" }, { pattern: /^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Survey123" }, { pattern: /^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Trek2There" }, { pattern: /^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Workforce" }, { pattern: /^\s*(iform:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "iForm" }, { pattern: /^\s*(flow:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "FlowFinity" }, { pattern: /^\s*(lfmobile:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Laserfische" }, { pattern: /^\s*(mspbi:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Microsoft Power Bi" }];
function or(t, e) {
  if (typeof e != "string" || !e) return e;
  const i = rr.find((c) => c.pattern.test(e));
  if (!i) return e;
  const s = e.match(i.pattern), n = s?.[2], r = Ve(Ve(i.label, { messages: t, hierPart: n }), { appName: i.appName }), a = i.target ? ` target="${i.target}"` : "", d = i.target === "_blank" ? ' rel="noreferrer"' : "";
  return e.replace(i.pattern, `<a${a} href="$1"${d}>${r}</a>`);
}
const Je = "esri-feature-fields", et = { base: Je, fieldHeader: `${Je}__field-header`, fieldData: `${Je}__field-data`, fieldDataDate: `${Je}__field-data--date` };
let te = class extends ee {
  constructor(e, i) {
    super(e, i), this._featureElementInfo = null, this.viewModel = new ft(), this.messages = null, this.messagesURIUtils = null;
  }
  initialize() {
    this._featureElementInfo = new mt(), this.addHandles(g(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), L));
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
    return u("div", { class: et.base }, this._featureElementInfo?.render(), this._renderFields());
  }
  _renderFieldInfo(e, i) {
    const { attributes: s } = this.viewModel, n = e.fieldName || "", r = e.label || n, a = s ? s[n] == null ? "" : s[n] : "", d = !!e.format?.dateFormat, c = typeof a == "number" && !d ? this._forceLTR(a) : or(this.messagesURIUtils, a), h = { [et.fieldDataDate]: d };
    return u("tr", { key: `fields-element-info-row-${n}-${i}` }, u("th", { class: et.fieldHeader, innerHTML: r, key: `fields-element-info-row-header-${n}-${i}` }), u("td", { class: this.classes(et.fieldData, h), innerHTML: c, key: `fields-element-info-row-data-${n}-${i}` }));
  }
  _renderFields() {
    const { formattedFieldInfos: e } = this.viewModel;
    return e?.length ? u("table", { class: I.table, summary: this.messages.fieldsSummary }, u("tbody", null, e.map((i, s) => this._renderFieldInfo(i, s)))) : null;
  }
  _setupFeatureElementInfo() {
    const { description: e, title: i } = this;
    this._featureElementInfo?.set({ description: e, title: i });
  }
  _forceLTR(e) {
    return `&lrm;${e}`;
  }
};
o([l()], te.prototype, "attributes", null), o([l()], te.prototype, "description", null), o([l()], te.prototype, "expressionInfos", null), o([l()], te.prototype, "fieldInfos", null), o([l()], te.prototype, "title", null), o([l({ type: ft, nonNullable: !0 })], te.prototype, "viewModel", void 0), o([l(), J("esri/widgets/Feature/t9n/Feature")], te.prototype, "messages", void 0), o([l(), J("esri/widgets/support/t9n/uriUtils")], te.prototype, "messagesURIUtils", void 0), te = o([P("esri.widgets.Feature.FeatureFields")], te);
const ms = te, ar = { maximumFractionDigits: 20 };
function lr(t) {
  return $e(t, ar);
}
const dr = "<", cr = ">";
function ur(t, e, i, s) {
  let n = "";
  return e === 0 ? n = `${dr} ` : e === i && (n = `${cr} `), n + lr(t);
}
const hr = new Zi([64, 64, 64]);
function pr(t, e) {
  const i = [], s = t.length - 1;
  return t.length === 5 ? i.push(0, 2, 4) : i.push(0, s), t.map((n, r) => i.includes(r) ? ur(n, r, s) : null);
}
async function mr(t, e, i) {
  let s = !1, n = [], r = [];
  if (t.stops) {
    const h = t.stops;
    n = h.map((p) => p.value), s = h.some((p) => !!p.label), s && (r = h.map((p) => p.label));
  }
  const a = n[0], d = n[n.length - 1];
  if (a == null && d == null) return null;
  const c = s ? null : pr(n);
  return (await Promise.all(n.map(async (h, p) => ({ value: h, color: t.type === "opacity" ? await fr(h, t) : (await import("./main-C4pF0E7B.js").then((m) => m.r8)).getColor(t, h), label: s ? r[p] : c?.[p] ?? "" })))).reverse();
}
async function fr(t, e, i) {
  const s = new Zi(hr), n = (await import("./main-C4pF0E7B.js").then((r) => r.r8)).getOpacity(e, t);
  return n != null && (s.a = n), s;
}
function gr(t) {
  if (!t.colorStops) return [];
  const e = [...t.colorStops].filter((s) => s.color?.a > 0);
  let i = e.length - 1;
  if (e && e[0]) {
    const s = e[i];
    s && s.ratio !== 1 && (e.push(new Os({ ratio: 1, color: s.color })), i++);
  }
  return e.map((s, n) => {
    let r = "";
    return n === 0 ? r = t.legendOptions?.minLabel || "low" : n === i && (r = t.legendOptions?.maxLabel || "high"), { color: s.color, label: r, ratio: s.ratio };
  }).reverse();
}
Wi("short-date");
async function Y(t, e, i) {
  Ns(t, e, () => []).push(...i);
}
async function yr(t) {
  const e = /* @__PURE__ */ new Map();
  if (!t) return e;
  if ("visualVariables" in t && t.visualVariables) {
    const i = t.visualVariables.filter((s) => s.type === "color");
    for (const s of i) {
      const n = (await mr(s) ?? []).map((r) => r.color);
      await Y(e, s.field || s.valueExpression, n);
    }
  }
  if (t.type === "heatmap") {
    const i = gr(t).map((s) => s.color);
    await Y(e, t.field || t.valueExpression, i);
  } else if (t.type === "pie-chart") {
    for (const i of t.attributes) await Y(e, i.field || i.valueExpression, [i.color]);
    await Y(e, "default", [t?.othersCategory?.color, Re(t.backgroundFillSymbol, null)]);
  } else if (t.type === "dot-density") {
    for (const i of t.attributes) await Y(e, i.field || i.valueExpression, [i.color]);
    await Y(e, "default", [t.backgroundColor]);
  } else if (t.type === "unique-value") if (t.authoringInfo?.type === "predominance") for (const i of t.uniqueValueInfos ?? []) await Y(e, i.value.toString(), [Re(i.symbol, null)]);
  else {
    const i = (t.uniqueValueInfos ?? []).map((d) => Re(d.symbol, null)), { field: s, field2: n, field3: r, valueExpression: a } = t;
    (s || a) && await Y(e, s || a, i), n && await Y(e, n, i), r && await Y(e, r, i);
  }
  else if (t.type === "class-breaks") {
    const i = t.classBreakInfos.map((r) => Re(r.symbol, null)), { field: s, valueExpression: n } = t;
    await Y(e, s ?? n, i);
  } else t.type === "simple" && await Y(e, "default", [Re(t.symbol, null)]);
  return "defaultSymbol" in t && t.defaultSymbol && await Y(e, "default", [Re(t.defaultSymbol, null)]), e.forEach((i, s) => {
    const n = Wt(i.filter(Boolean), (r, a) => JSON.stringify(r) === JSON.stringify(a));
    e.set(s, n);
  }), e;
}
const vr = "esri.widgets.Feature.support.relatedFeatureUtils", bi = () => H.getLogger(vr), Mi = /* @__PURE__ */ new Map();
function nt(t) {
  if (!ce(t)) return null;
  const [e, i] = t.split("/").slice(1);
  return { layerId: e, fieldName: i };
}
function _r(t, e) {
  if (!e.relationships) return null;
  let i = null;
  const { relationships: s } = e;
  return s.some((n) => n.id === parseInt(t, 10) && (i = n, !0)), i;
}
function wr({ originRelationship: t, relationships: e, layerId: i }) {
  return e.find(({ relatedTableId: s, id: n }) => `${s}` === i && n === t?.id) ?? null;
}
function br(t, e) {
  const i = e.toLowerCase();
  for (const s in t) if (s.toLowerCase() === i) return t[s];
  return null;
}
function Mr(t, e) {
  const i = _r(t, e);
  if (i)
    return { url: `${e.url}/${i.relatedTableId}`, sourceSpatialReference: e.spatialReference, relation: i, relatedFields: [], outStatistics: [] };
}
function Fr(t, e) {
  if (!e || !t) return;
  const { features: i, statsFeatures: s } = t, n = i?.value;
  e.relatedFeatures = n ? n.features : [];
  const r = s?.value;
  e.relatedStatsFeatures = r ? r.features : [];
}
function Ir(t, e, i, s) {
  const n = new Rt();
  return n.outFields = ["*"], n.relationshipId = typeof e.id == "number" ? e.id : parseInt(e.id, 10), n.objectIds = [t.attributes[i.objectIdField]], n.gdbVersion = i.gdbVersion ?? null, n.historicMoment = i.historicMoment ?? null, i.queryRelatedFeatures?.(n, s) ?? Promise.resolve({});
}
function Cr(t, e, i) {
  let s = 0;
  const n = [];
  for (; s < e.length; ) n.push(`${t} IN (${e.slice(s, i + s)})`), s += i;
  return n.join(" OR ");
}
function Ar(t) {
  return t ? Wt(t) : void 0;
}
function $r(t) {
  return t ? Wt(t, (e, i) => JSON.stringify(e.toJSON()) === JSON.stringify(i.toJSON())) : void 0;
}
async function Er(t, e, i, s) {
  const n = i.layerId.toString(), { layerInfo: r, relation: a, relatedFields: d, outStatistics: c, url: h, sourceSpatialReference: p } = e, m = Ar(d), f = $r(c);
  if (!r || !a) return null;
  const y = wr({ originRelationship: a, relationships: r.relationships, layerId: n });
  if (y?.relationshipTableId && y.keyFieldInRelationshipTable) {
    const _ = (await Ir(t, y, i, s))[t.attributes[i.objectIdField]];
    if (!_) return null;
    const C = _.features.map((M) => M.attributes[r.objectIdField]);
    if (f?.length && r.supportsStatistics) {
      const M = new yt();
      M.where = Cr(r.objectIdField, C, 1e3), M.outFields = m, M.outStatistics = f, M.sourceSpatialReference = p;
      const x = { features: Promise.resolve(_), statsFeatures: vt(h, M) };
      return Te(x);
    }
  }
  const v = y?.keyField;
  if (v) {
    const _ = Bs(Rr(r.fields, v)), C = br(t.attributes, a.keyField), M = _ ? `${v}=${C}` : `${v}='${C}'`, x = i.historicMoment, w = i.gdbVersion, O = vt(h, new yt({ where: M, outFields: m, sourceSpatialReference: p, historicMoment: x, gdbVersion: w }), s), he = f?.length && r.supportsStatistics ? vt(h, new yt({ where: M, outFields: m, outStatistics: f, sourceSpatialReference: p }), s) : null, oe = { features: O };
    return he && (oe.statsFeatures = he), Te(oe);
  }
  return null;
}
function xr(t, e) {
  return qs(t, { query: { f: "json" }, signal: e?.signal });
}
function Tr({ relatedInfos: t, layer: e }, i) {
  const s = {};
  return t.forEach((n, r) => {
    const { relation: a } = n;
    if (!a) {
      const m = new k("relation-required", "A relation is required on a layer to retrieve related records.");
      throw bi().error(m), m;
    }
    const { relatedTableId: d } = a;
    if (typeof d != "number") {
      const m = new k("A related table ID is required on a layer to retrieve related records.");
      throw bi().error(m), m;
    }
    const c = `${e.url}/${d}`, h = Mi.get(c), p = h ?? xr(c);
    h || Mi.set(c, p), s[r] = p;
  }), Ss(Te(s), i);
}
function kr({ graphic: t, relatedInfos: e, layer: i }, s) {
  const n = {};
  return e.forEach((r, a) => {
    r.layerInfo && (n[a] = Er(t, r, i, s));
  }), Te(n);
}
function Lr({ relatedInfo: t, fieldName: e, fieldInfo: i }) {
  if (t.relatedFields?.push(e), i.statisticType) {
    const s = new Vs({ statisticType: i.statisticType, onStatisticField: e, outStatisticFieldName: e });
    t.outStatistics?.push(s);
  }
}
function Rr(t, e) {
  if (t != null) {
    e = e.toLowerCase();
    for (const i of t) if (i && i.name.toLowerCase() === e) return i;
  }
  return null;
}
const Fi = { chartAnimation: !0 };
let B = class extends ue {
  constructor(e) {
    super(e), this.abilities = { ...Fi }, this.activeMediaInfoIndex = 0, this.attributes = null, this.description = null, this.fieldInfoMap = null, this.formattedAttributes = null, this.expressionAttributes = null, this.isAggregate = !1, this.layer = null, this.mediaInfos = null, this.popupTemplate = null, this.relatedInfos = null, this.title = null;
  }
  castAbilities(e) {
    return { ...Fi, ...e };
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
    const { mediaInfos: e, layer: i } = this, s = this.attributes ?? {}, n = this.formattedAttributes ?? {}, r = this.expressionAttributes ?? {}, a = this.fieldInfoMap ?? /* @__PURE__ */ new Map();
    return e?.map((d) => {
      const c = d?.clone();
      return c ? (c.title = Fe({ attributes: s, fieldInfoMap: a, globalAttributes: n, expressionAttributes: r, layer: i, text: c.title }), c.caption = Fe({ attributes: s, fieldInfoMap: a, globalAttributes: n, expressionAttributes: r, layer: i, text: c.caption }), c.altText = Fe({ attributes: s, fieldInfoMap: a, globalAttributes: n, expressionAttributes: r, layer: i, text: c.altText }), c.type === "image" ? c.value ? (this._setImageValue({ value: c.value, formattedAttributes: n, layer: i }), c.value.sourceURL ? c : void 0) : void 0 : c.type === "pie-chart" || c.type === "line-chart" || c.type === "column-chart" || c.type === "bar-chart" ? c.value ? (this._setChartValue({ value: c.value, chartType: c.type, attributes: s, formattedAttributes: n, layer: i, expressionAttributes: r }), c) : void 0 : null) : null;
    }).filter(pt) ?? [];
  }
  _setImageValue(e) {
    const i = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { value: s, formattedAttributes: n, layer: r } = e, { linkURL: a, sourceURL: d } = s;
    if (d) {
      const c = Vt(d, r);
      s.sourceURL = St({ formattedAttributes: n, template: c, fieldInfoMap: i });
    }
    if (a) {
      const c = Vt(a, r);
      s.linkURL = St({ formattedAttributes: n, template: c, fieldInfoMap: i });
    }
  }
  _setChartValue(e) {
    const { value: i, attributes: s, formattedAttributes: n, chartType: r, layer: a, expressionAttributes: d } = e, { popupTemplate: c, relatedInfos: h } = this, { fields: p, normalizeField: m } = i, f = a;
    if (i.fields = kn(p, f), m && (i.normalizeField = Qe(m, f)), !p.some((v) => !!(n[v] != null || ce(v) && h?.size))) return;
    const y = c?.fieldInfos ?? [];
    p.forEach((v, _) => {
      const C = i.colors?.[_];
      if (ce(v)) return void (i.series = [...i.series, ...this._getRelatedChartInfos({ fieldInfos: y, fieldName: v, formattedAttributes: n, chartType: r, value: i, color: C })]);
      const M = this._getChartOption({ value: i, attributes: s, chartType: r, formattedAttributes: n, expressionAttributes: d, fieldName: v, fieldInfos: y, color: C });
      i.series.push(M);
    });
  }
  _getRelatedChartInfos(e) {
    const { fieldInfos: i, fieldName: s, formattedAttributes: n, chartType: r, value: a, color: d } = e, c = [], h = nt(s), p = h && this.relatedInfos?.get(h.layerId.toString());
    if (!p) return c;
    const { relatedFeatures: m, relation: f } = p;
    if (!f || !m) return c;
    const { cardinality: y } = f;
    return m.forEach((v) => {
      const { attributes: _ } = v;
      _ && Object.keys(_).forEach((C) => {
        C === h.fieldName && c.push(this._getChartOption({ value: a, attributes: _, formattedAttributes: n, fieldName: s, chartType: r, relatedFieldName: C, hasMultipleRelatedFeatures: m?.length > 1, fieldInfos: i, color: d }));
      });
    }), y === "one-to-many" || y === "many-to-many" ? c : [c[0]];
  }
  _getTooltip({ label: e, value: i, chartType: s }) {
    return s === "pie-chart" ? `${e}` : `${e}: ${i}`;
  }
  _getChartOption(e) {
    const { value: i, attributes: s, formattedAttributes: n, expressionAttributes: r, fieldName: a, relatedFieldName: d, fieldInfos: c, chartType: h, hasMultipleRelatedFeatures: p, color: m } = e, f = this.layer, y = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { normalizeField: v, tooltipField: _ } = i, C = v ? ce(v) ? s[nt(v).fieldName] : s[v] : null, M = Zt(a) && r && r[a] !== void 0 ? r[a] : d && s[d] !== void 0 ? s[d] : s[a] !== void 0 ? s[a] : n[a], x = new Ds({ fieldName: a, color: m, value: M === void 0 ? null : M && C ? M / C : M });
    if (ce(a)) {
      const ze = y.get(a.toLowerCase()), Ye = _ && y.get(_.toLowerCase()), ae = ze?.fieldName ?? a, gt = p && _ ? nt(_).fieldName : Ye?.fieldName ?? _, Cs = p && gt ? s[gt] : n[gt] ?? ze?.label ?? ze?.fieldName ?? d, As = p && d ? s[d] : n[ae];
      return x.tooltip = this._getTooltip({ label: Cs, value: As, chartType: h }), x;
    }
    const w = as(c, a), O = Qe(a, f), he = _ && n[_] !== void 0 ? n[_] : ns(w || new ji({ fieldName: O }), this.popupTemplate?.expressionInfos), oe = n[O];
    return x.tooltip = this._getTooltip({ label: he, value: oe, chartType: h }), x;
  }
};
o([l()], B.prototype, "abilities", void 0), o([qe("abilities")], B.prototype, "castAbilities", null), o([l()], B.prototype, "activeMediaInfoIndex", void 0), o([l({ readOnly: !0 })], B.prototype, "activeMediaInfo", null), o([l()], B.prototype, "attributes", void 0), o([l()], B.prototype, "description", void 0), o([l()], B.prototype, "fieldInfoMap", void 0), o([l()], B.prototype, "formattedAttributes", void 0), o([l()], B.prototype, "expressionAttributes", void 0), o([l({ readOnly: !0 })], B.prototype, "formattedMediaInfos", null), o([l()], B.prototype, "isAggregate", void 0), o([l()], B.prototype, "layer", void 0), o([l({ readOnly: !0 })], B.prototype, "formattedMediaInfoCount", null), o([l()], B.prototype, "mediaInfos", void 0), o([l()], B.prototype, "popupTemplate", void 0), o([l()], B.prototype, "relatedInfos", void 0), o([l()], B.prototype, "title", void 0), B = o([P("esri.widgets.Feature.FeatureMedia.FeatureMediaViewModel")], B);
const Ie = B, V = "esri-feature-media", Z = { base: V, mediaContainer: `${V}__container`, mediaItemContainer: `${V}__item-container`, mediaItem: `${V}__item`, mediaItemText: `${V}__item-text`, mediaItemTitle: `${V}__item-title`, mediaItemCaption: `${V}__item-caption`, mediaNavigation: `${V}__item-navigation`, mediaPagination: `${V}__pagination`, mediaPaginationText: `${V}__pagination-text`, mediaPrevious: `${V}__previous`, mediaPreviousIconLTR: `${V}__previous-icon`, mediaPreviousIconRTL: `${V}__previous-icon--rtl`, mediaNext: `${V}__next`, mediaNextIconLTR: `${V}__next-icon`, mediaNextIconRTL: `${V}__next-icon--rtl`, mediaChart: `${V}__chart`, mediaPaginationButton: `${V}__pagination-button`, mediaPaginationIcon: `${V}__pagination-icon`, mediaChartRendered: `${V}__chart--rendered` }, Et = 15, pe = "category", We = "value", Pr = "rgba(50, 50, 50, 1)", Or = 250, Nr = 500, Sr = 200;
let U = class extends ee {
  constructor(e, i) {
    super(e, i), this._refreshTimer = null, this._refreshIntervalInfo = null, this._featureElementInfo = null, this._chartRootMap = /* @__PURE__ */ new WeakMap(), this.viewModel = new Ie(), this.messages = null, this._disposeChart = (s) => {
      this._chartRootMap.get(s)?.dispose(), this._chartRootMap.delete(s);
    }, this._createChart = async (s) => {
      const { destroyed: n, viewModel: r } = this;
      if (n || !r || !s) return;
      const { createRoot: a } = await import("./chartUtilsAm5-D3f8Jz8p.js"), d = await a(s);
      this._chartRootMap.set(s, d), this._renderChart({ mediaInfo: r.activeMediaInfo, root: d });
    };
  }
  initialize() {
    this._featureElementInfo = new mt(), this.addHandles([g(() => [this.viewModel?.activeMediaInfo, this.viewModel?.activeMediaInfoIndex], () => this._setupMediaRefreshTimer(), L), g(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), L)]);
  }
  loadDependencies() {
    return Le({ icon: () => import("./calcite-icon-D8EDmgwR.js") });
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
    return u("div", { bind: this, class: Z.base, onkeyup: this._handleMediaKeyup }, this._featureElementInfo?.render(), this._renderMedia());
  }
  _renderMedia() {
    const { formattedMediaInfoCount: e, activeMediaInfoIndex: i } = this.viewModel, s = this._renderMediaText();
    return e ? u("div", { class: Z.mediaContainer, key: "media-element-container" }, this._renderMediaInfo(), u("div", { class: Z.mediaNavigation }, s, e > 1 ? u("div", { class: Z.mediaPagination }, this._renderMediaPageButton("previous"), u("span", { class: Z.mediaPaginationText }, re(this.messages.pageText, { index: i + 1, total: e })), this._renderMediaPageButton("next")) : null)) : null;
  }
  _renderMediaText() {
    const { activeMediaInfo: e } = this.viewModel;
    if (!e) return null;
    const i = e && e.title ? u("div", { class: Z.mediaItemTitle, innerHTML: e.title, key: "media-title" }) : null, s = e && e.caption ? u("div", { class: Z.mediaItemCaption, innerHTML: e.caption, key: "media-caption" }) : null;
    return i || s ? u("div", { class: Z.mediaItemText, key: "media-text" }, i, s) : null;
  }
  _renderImageMediaInfo(e) {
    if (!e.value) return null;
    const { _refreshIntervalInfo: i } = this, { activeMediaInfoIndex: s, formattedMediaInfoCount: n } = this.viewModel, { value: r, refreshInterval: a, altText: d, title: c, type: h } = e, { sourceURL: p, linkURL: m } = r, f = ss(m ?? void 0) ? "_blank" : "_self", y = f === "_blank" ? "noreferrer" : "", v = a ? i : null, _ = v ? v.timestamp : 0, C = v ? v.sourceURL : p, M = u("img", { alt: d || c, key: `media-${h}-${s}-${n}-${_}`, src: C ?? void 0 });
    return (m ? u("a", { href: m, rel: y, target: f, title: c }, M) : null) ?? M;
  }
  _renderChartMediaInfo(e) {
    const { activeMediaInfoIndex: i, formattedMediaInfoCount: s } = this.viewModel;
    return u("div", { afterCreate: this._createChart, afterRemoved: this._disposeChart, bind: this, class: Z.mediaChart, key: `media-${e.type}-${i}-${s}` });
  }
  _renderMediaInfoType() {
    const { activeMediaInfo: e } = this.viewModel;
    return e ? e.type === "image" ? this._renderImageMediaInfo(e) : e.type.includes("chart") ? this._renderChartMediaInfo(e) : null : null;
  }
  _renderMediaInfo() {
    const { activeMediaInfo: e } = this.viewModel;
    return e ? u("div", { class: Z.mediaItemContainer, key: "media-container" }, u("div", { class: Z.mediaItem, key: "media-item-container" }, this._renderMediaInfoType())) : null;
  }
  _renderMediaPageButton(e) {
    if (this.viewModel.formattedMediaInfoCount < 2) return null;
    const i = e === "previous", s = i ? this.messages.previous : this.messages.next, n = i ? "chevron-left" : "chevron-right", r = i ? "media-previous" : "media-next", a = i ? this._previous : this._next;
    return u("button", { "aria-label": s, bind: this, class: Z.mediaPaginationButton, key: r, onclick: a, tabIndex: 0, title: s, type: "button" }, u("calcite-icon", { class: Z.mediaPaginationIcon, icon: n, scale: "s" }));
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
    const { colorAm5: i } = await import("./chartCommon-BBYqluMV.js"), s = /* @__PURE__ */ new Map();
    return e.forEach((n) => {
      n.color && s.set(n, i(n.color.toCss(!0)));
    }), s;
  }
  async _getRendererColors() {
    const { colorAm5: e } = await import("./chartCommon-BBYqluMV.js"), i = /* @__PURE__ */ new Map(), s = this._getRenderer(), n = "default";
    if (!s) return i;
    const r = await yr(s);
    return r.delete(n), Array.from(r.values()).every((a) => a?.length === 1) && Array.from(r.keys()).forEach((a) => {
      const d = r.get(a)?.[0]?.toCss(!0);
      d && i.set(a, e(d));
    }), i;
  }
  _handleMediaKeyup(e) {
    const { key: i } = e;
    i === "ArrowLeft" && (e.stopPropagation(), this.viewModel.previous()), i === "ArrowRight" && (e.stopPropagation(), this.viewModel.next());
  }
  _canAnimateChart() {
    return !!this.viewModel && !!this.viewModel.abilities.chartAnimation && !zs();
  }
  _getChartAnimationMS() {
    return this._canAnimateChart() ? Or : 0;
  }
  _getChartSeriesAnimationMS() {
    return this._canAnimateChart() ? Nr : 0;
  }
  async _renderChart(e) {
    const { root: i, mediaInfo: s } = e, { value: n, type: r } = s, { ResponsiveThemeAm5: a, DarkThemeAm5: d, AnimatedThemeAm5: c, ColorSetAm5: h, ThemeAm5: p, esriChartColorSet: m } = await import("./chartCommon-BBYqluMV.js"), f = p.new(i);
    f.rule("ColorSet").set("colors", m), f.rule("ColorSet").set("reuse", !0);
    const y = [a.new(i), f];
    Ws() && y.push(d.new(i)), this._canAnimateChart() && y.push(c.new(i)), i.setThemes(y);
    const v = await this._getRendererColors(), _ = await this._getSeriesColors(n.series), C = h.new(i, {}), M = _.get(n.series[0]), x = M ? { lineSettings: { stroke: M } } : void 0, w = n.series.map((O, he) => {
      const oe = _.get(O) || v.get(O.fieldName) || C.getIndex(he);
      return { [pe]: O.tooltip, [We]: O.value, columnSettings: { fill: oe, stroke: oe }, ...x };
    }).filter((O) => r !== "pie-chart" || O.value != null && O.value > 0);
    r === "pie-chart" ? this._createPieChart(e, w) : this._createXYChart(e, w);
  }
  _getDirection() {
    return xe(this.container) ? "rtl" : "ltr";
  }
  _isInversed() {
    return !!xe(this.container);
  }
  async _customizeChartTooltip(e, i = "horizontal") {
    const { colorAm5: s } = await import("./chartCommon-BBYqluMV.js");
    e.setAll({ pointerOrientation: i }), e.get("background")?.setAll({ stroke: s(Pr) }), e.label.setAll({ direction: this._getDirection(), oversizedBehavior: "wrap", maxWidth: Sr });
  }
  async _createPieChart(e, i) {
    const { TooltipAm5: s } = await import("./chartCommon-BBYqluMV.js"), { PieChartAm5: n, PieSeriesAm5: r } = await import("./pieChart-CLVSBUp6.js"), { mediaInfo: a, root: d } = e, { title: c } = a, h = 5, p = a?.altText || a?.title || "", m = d.container.children.push(n.new(d, { ariaLabel: p, focusable: !0, paddingBottom: h, paddingTop: h, paddingLeft: h, paddingRight: h })), f = `{category}: {valuePercentTotal.formatNumber('0.00')}%
 ({value})`, y = s.new(d, { labelText: f }), v = m.series.push(r.new(d, { name: c, valueField: We, categoryField: pe, tooltip: y }));
    v.ticks.template.set("forceHidden", !0), v.labels.template.set("forceHidden", !0), v.slices.template.states.create("active", { shiftRadius: h }), this._customizeChartTooltip(y), v.slices.template.setAll({ ariaLabel: f, focusable: !0, templateField: "columnSettings" }), v.data.setAll(i), v.appear(this._getChartSeriesAnimationMS()), m.appear(this._getChartAnimationMS()), m.root.dom.classList.toggle(Z.mediaChartRendered, !0);
  }
  _getMinSeriesValue(e) {
    let i = 0;
    return e.forEach((s) => i = Math.min(s.value, i)), i;
  }
  async _createColumnChart(e, i, s) {
    const { TooltipAm5: n, ScrollbarAm5: r } = await import("./chartCommon-BBYqluMV.js"), { CategoryAxisAm5: a, AxisRendererXAm5: d, ValueAxisAm5: c, AxisRendererYAm5: h, ColumnSeriesAm5: p } = await import("./xyChart-DyGl7LOY.js"), { mediaInfo: m, root: f } = i, { value: y, title: v } = m;
    e.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const _ = e.xAxes.push(a.new(f, { renderer: d.new(f, { inversed: this._isInversed() }), categoryField: pe }));
    _.get("renderer").labels.template.setAll({ forceHidden: !0 });
    const C = e.yAxes.push(c.new(f, { renderer: h.new(f, { inside: !1 }), min: this._getMinSeriesValue(y.series) }));
    C.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const M = "{categoryX}", x = n.new(f, { labelText: M }), w = e.series.push(p.new(f, { name: v, xAxis: _, yAxis: C, valueYField: We, categoryXField: pe, tooltip: x }));
    this._customizeChartTooltip(x), w.columns.template.setAll({ ariaLabel: M, focusable: !0, templateField: "columnSettings" }), y.series.length > Et && e.set("scrollbarX", r.new(f, { orientation: "horizontal" })), _.data.setAll(s), w.data.setAll(s), w.appear(this._getChartSeriesAnimationMS()), e.appear(this._getChartAnimationMS());
  }
  async _createBarChart(e, i, s) {
    const { TooltipAm5: n, ScrollbarAm5: r } = await import("./chartCommon-BBYqluMV.js"), { CategoryAxisAm5: a, AxisRendererXAm5: d, ValueAxisAm5: c, AxisRendererYAm5: h, ColumnSeriesAm5: p } = await import("./xyChart-DyGl7LOY.js"), { mediaInfo: m, root: f } = i, { value: y, title: v } = m;
    e.setAll({ wheelX: "panY", wheelY: "zoomY" });
    const _ = e.yAxes.push(a.new(f, { renderer: h.new(f, { inversed: !0 }), categoryField: pe }));
    _.get("renderer").labels.template.setAll({ forceHidden: !0 });
    const C = e.xAxes.push(c.new(f, { renderer: d.new(f, { inside: !1, inversed: this._isInversed() }), min: this._getMinSeriesValue(y.series) }));
    C.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const M = "{categoryY}", x = n.new(f, { labelText: M }), w = e.series.push(p.new(f, { name: v, xAxis: C, yAxis: _, valueXField: We, categoryYField: pe, tooltip: x }));
    this._customizeChartTooltip(x, "vertical"), w.columns.template.setAll({ ariaLabel: M, focusable: !0, templateField: "columnSettings" }), y.series.length > Et && e.set("scrollbarY", r.new(f, { orientation: "vertical" })), _.data.setAll(s), w.data.setAll(s), w.appear(this._getChartSeriesAnimationMS()), e.appear(this._getChartAnimationMS());
  }
  async _createLineChart(e, i, s) {
    const { TooltipAm5: n, ScrollbarAm5: r } = await import("./chartCommon-BBYqluMV.js"), { CategoryAxisAm5: a, AxisRendererXAm5: d, ValueAxisAm5: c, AxisRendererYAm5: h, LineSeriesAm5: p } = await import("./xyChart-DyGl7LOY.js"), { root: m, mediaInfo: f } = i, { value: y, title: v } = f;
    e.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const _ = e.xAxes.push(a.new(m, { renderer: d.new(m, { inversed: this._isInversed() }), categoryField: pe }));
    _.get("renderer").labels.template.setAll({ forceHidden: !0 });
    const C = e.yAxes.push(c.new(m, { renderer: h.new(m, { inside: !1 }), min: this._getMinSeriesValue(y.series) }));
    C.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const M = "{categoryX}", x = s[0]?.lineSettings?.stroke, w = n.new(m, { getFillFromSprite: !x, labelText: M });
    x && w.get("background")?.setAll({ fill: x });
    const O = e.series.push(p.new(m, { name: v, xAxis: _, yAxis: C, valueYField: We, categoryXField: pe, tooltip: w }));
    O.strokes.template.setAll({ templateField: "lineSettings" }), this._customizeChartTooltip(w, "vertical"), y.series.length > Et && e.set("scrollbarX", r.new(m, { orientation: "horizontal" })), _.data.setAll(s), O.data.setAll(s), O.appear(this._getChartSeriesAnimationMS()), e.appear(this._getChartAnimationMS());
  }
  async _createXYChart(e, i) {
    const { XYChartAm5: s, XYCursorAm5: n } = await import("./xyChart-DyGl7LOY.js"), { root: r, mediaInfo: a } = e, { type: d } = a, c = a?.altText || a?.title || "", h = r.container.children.push(s.new(r, { ariaLabel: c, focusable: !0, panX: !0, panY: !0 }));
    h.set("cursor", n.new(r, {})), d === "column-chart" && await this._createColumnChart(h, e, i), d === "bar-chart" && await this._createBarChart(h, e, i), d === "line-chart" && await this._createLineChart(h, e, i), h.root.dom.classList.toggle(Z.mediaChartRendered, !0);
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
    e?.type === "image" && e?.refreshInterval > 0 && this._setRefreshTimeout(e);
  }
  _setRefreshTimeout(e) {
    const { refreshInterval: i, value: s } = e, n = 6e4 * i;
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
o([l()], U.prototype, "_refreshIntervalInfo", void 0), o([l()], U.prototype, "attributes", null), o([l()], U.prototype, "activeMediaInfoIndex", null), o([l()], U.prototype, "description", null), o([l()], U.prototype, "fieldInfoMap", null), o([l()], U.prototype, "layer", null), o([l()], U.prototype, "mediaInfos", null), o([l()], U.prototype, "popupTemplate", null), o([l()], U.prototype, "relatedInfos", null), o([l()], U.prototype, "title", null), o([l({ type: Ie })], U.prototype, "viewModel", void 0), o([l(), J("esri/widgets/Feature/t9n/Feature")], U.prototype, "messages", void 0), U = o([P("esri.widgets.Feature.FeatureMedia")], U);
const fs = U, Vr = "esri.widgets.Feature.support.arcadeFeatureUtils", Ii = () => H.getLogger(Vr);
function Br(t) {
  return typeof t == "string" ? Xe(Qt(t)) : Array.isArray(t) ? qr(t) : t?.declaredClass === "esri.arcade.Dictionary" ? Dr(t) : t;
}
function qr(t) {
  return `<ul class="esri-widget__list">${t.map((e) => `<li>${typeof e == "string" ? Xe(Qt(e)) : e}</li>`).join("")}</ul>`;
}
function Dr(t) {
  const e = t.keys().map((i) => {
    const s = t.field(i);
    return `<tr><th>${i}</th><td>${typeof s == "string" ? Xe(Qt(s)) : s}</td></tr>`;
  }).join("");
  return `<table class="${I.table}">${e}</table>`;
}
function gs() {
  return import("./arcade-Bb4X0f9l.js");
}
function zr(t) {
  return "createQuery" in t && "queryFeatures" in t;
}
async function Wr({ graphic: t, view: e, options: i }) {
  const { isAggregate: s, layer: n } = t;
  if (!s || !n || e?.type !== "2d") return [];
  const r = await e.whenLayerView(n);
  if (!zr(r)) return [];
  const a = r.createQuery(), d = t.getObjectId();
  a.aggregateIds = d != null ? [d] : [];
  const { features: c } = await r.queryFeatures(a, i);
  return c;
}
function Hr({ layer: t, aggregatedFeatures: e, interceptor: i }) {
  const { fields: s, objectIdField: n, geometryType: r, spatialReference: a, displayField: d } = t;
  return new Hs({ fields: s, objectIdField: n, geometryType: r, spatialReference: a, displayField: d, interceptor: i, ...t.type === "feature" ? { templates: t.templates, typeIdField: t.typeIdField, types: t.types } : null, source: e });
}
async function ys({ expressionInfo: t, arcade: e, interceptor: i, spatialReference: s, map: n, graphic: r, location: a, view: d, options: c }) {
  if (!t?.expression) return null;
  const { isAggregate: h } = r, p = (r.sourceLayer || r.layer) ?? void 0, m = h ? "feature-reduction-popup" : "popup", f = e.createArcadeProfile(m), y = e.createArcadeExecutor(t.expression, f).catch((w) => Ii().error("arcade-executor-error", { error: w, expressionInfo: t })), [v, _] = await Promise.all([Wr({ graphic: r, view: d, options: c }), y]);
  if (!_) return null;
  const C = m === "feature-reduction-popup" ? Hr({ layer: p, aggregatedFeatures: v, interceptor: i }) : void 0, M = { ...m === "feature-reduction-popup" ? { $aggregatedFeatures: C } : { $datastore: p?.url, $layer: p?.type === "feature" || p?.type === "subtype-sublayer" || p?.type === "catalog-footprint" || p?.type === "oriented-imagery" ? p : p?.type === "scene" && p.associatedLayer != null ? p.associatedLayer : void 0, $map: n, $userInput: a, $graph: p?.type === "knowledge-graph-sublayer" ? p?.parentCompositeLayer?.knowledgeGraph : void 0 }, $feature: r }, x = { abortSignal: c?.signal ?? void 0, interceptor: i ?? void 0, rawOutput: !0, spatialReference: s ?? void 0, timeZone: d?.timeZone };
  return await _.executeAsync(M, x).catch((w) => Ii().error("arcade-execution-error", { error: w, graphic: r, expressionInfo: t })).finally(() => C?.destroy());
}
async function jr({ expressionInfos: t, spatialReference: e, graphic: i, interceptor: s, map: n, view: r, location: a, options: d }) {
  if (!t?.length) return {};
  const c = await gs(), h = {};
  for (const f of t) h[`expression/${f.name}`] = ys({ expressionInfo: f, arcade: c, interceptor: s, spatialReference: e, map: n, graphic: i, location: a, view: r, options: d });
  const p = await Te(h), m = {};
  for (const f in p) m[f] = Br(p[f].value);
  return m;
}
const Zr = 1;
let X = class extends ue {
  constructor(e) {
    super(e), this._abortController = null, this.expressionInfo = null, this.graphic = null, this.contentElement = null, this.contentElementViewModel = null, this.interceptor = null, this.location = null, this.view = null, this._cancelQuery = () => {
      const { _abortController: i } = this;
      i && i.abort(), this._abortController = null;
    }, this._createVM = () => {
      const i = this.contentElement?.type;
      this.contentElementViewModel?.destroy();
      const s = i === "fields" ? new ft() : i === "media" ? new Ie() : i === "text" ? new ut() : null;
      this._set("contentElementViewModel", s);
    }, this._compile = async () => {
      this._cancelQuery();
      const i = new AbortController();
      this._abortController = i, await this._compileExpression(), this._abortController === i && (this._abortController = null);
    }, this._compileThrottled = dt(this._compile, Zr, this), this._compileExpression = async () => {
      const { expressionInfo: i, graphic: s, interceptor: n, spatialReference: r, map: a, location: d, view: c, _abortController: h } = this;
      if (!i || !s) return void this._set("contentElement", null);
      const p = await gs();
      if (h !== this._abortController) return;
      const m = await ys({ arcade: p, expressionInfo: i, graphic: s, location: d, interceptor: n, map: a, spatialReference: r, view: c });
      if (!m || m.declaredClass !== "esri.arcade.Dictionary") return void this._set("contentElement", null);
      const f = await m.castAsJsonAsync(h?.signal), y = f?.type, v = y === "media" ? Zs.fromJSON(f) : y === "text" ? Ui.fromJSON(f) : y === "fields" ? Us.fromJSON(f) : null;
      this._set("contentElement", v);
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
o([l()], X.prototype, "_abortController", void 0), o([l({ type: js })], X.prototype, "expressionInfo", void 0), o([l({ type: De })], X.prototype, "graphic", void 0), o([l({ readOnly: !0 })], X.prototype, "contentElement", void 0), o([l({ readOnly: !0 })], X.prototype, "contentElementViewModel", void 0), o([l()], X.prototype, "interceptor", void 0), o([l({ type: Ht })], X.prototype, "location", void 0), o([l()], X.prototype, "spatialReference", null), o([l({ readOnly: !0 })], X.prototype, "state", null), o([l()], X.prototype, "map", null), o([l()], X.prototype, "view", void 0), X = o([P("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")], X);
const Kt = X, Ci = "esri-feature", Ai = { base: `${Ci}-expression`, loadingSpinnerContainer: `${Ci}__loading-container` };
let rt = class extends ee {
  constructor(e, i) {
    super(e, i), this._contentWidget = null, this.viewModel = new Kt();
  }
  initialize() {
    this.addHandles(g(() => this.viewModel?.contentElementViewModel, () => this._setupExpressionWidget(), L));
  }
  loadDependencies() {
    return Le({ loader: () => import("./calcite-loader-B81-beNl.js") });
  }
  destroy() {
    this._destroyContentWidget();
  }
  render() {
    const { state: e } = this.viewModel;
    return u("div", { class: Ai.base }, e === "loading" ? this._renderLoading() : e === "disabled" ? null : this._contentWidget?.render());
  }
  _renderLoading() {
    return u("div", { class: Ai.loadingSpinnerContainer, key: "loading-container" }, u("calcite-loader", { inline: !0, label: "" }));
  }
  _destroyContentWidget() {
    const { _contentWidget: e } = this;
    e && (e.viewModel = null, e.destroy()), this._contentWidget = null;
  }
  _setupExpressionWidget() {
    const { contentElementViewModel: e, contentElement: i } = this.viewModel, s = i?.type;
    this._destroyContentWidget();
    const n = e ? s === "fields" ? new ms({ viewModel: e }) : s === "media" ? new fs({ viewModel: e }) : s === "text" ? new st({ viewModel: e }) : null : null;
    this._contentWidget = n, this.scheduleRender();
  }
};
o([l({ type: Kt })], rt.prototype, "viewModel", void 0), rt = o([P("esri.widgets.Feature.FeatureExpression")], rt);
const Ur = rt;
var $i;
(function(t) {
  t.TOO_SHORT = "length-validation-error::too-short", t.TOO_LONG = "length-validation-error::too-long";
})($i || ($i = {}));
const Qr = (t) => {
  const e = [];
  if (t.formTemplate) {
    const { description: i, title: s } = t.formTemplate;
    t.fields?.forEach((n) => {
      const r = s && di(s, n.name), a = i && di(i, n.name);
      (r || a) && e.push(n.name);
    });
  }
  return e;
}, xt = 100;
let T = class extends Qs(Qi(ue)) {
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
      this._queryAbortController = i, await _t(this._query()), this._queryAbortController === i && (this._queryAbortController = null);
    }, this._queryFeatureCountController = async () => {
      this._loaded = !1, this._cancelQueryFeatureCount();
      const i = new AbortController();
      this._queryFeatureCountAbortController = i, await _t(this._queryFeatureCount()), this._queryFeatureCountAbortController === i && (this._queryFeatureCountAbortController = null), this._loaded = !0;
    }, this._queryPageController = async () => {
      const i = new AbortController();
      this._queryPageAbortController = i, await _t(this._queryPage()), this._queryPageAbortController === i && (this._queryPageAbortController = null);
    }, this._queryDebounced = it(this._queryController, xt), this._queryFeatureCountDebounced = it(this._queryFeatureCountController, xt), this._queryPageDebounced = it(this._queryPageController, xt), this._query = async () => {
      const { _queryAbortController: i, relatedFeatures: s } = this;
      this.featureCount && (this._destroyRelatedFeatureViewModels(), this.featurePage = 1, s.destroyAll(), this.destroyed || s.addMany(this._sliceFeatures(await this._queryRelatedFeatures({ signal: i?.signal }))));
    }, this.addHandles([g(() => [this.displayCount, this.graphic, this.layer, this.layer?.loaded, this.map, this.orderByFields, this.relationshipId, this.featuresPerPage, this.showAllEnabled, this.canQuery, this.featureCount], () => this._queryDebounced(), L), g(() => [this.featurePage, this.showAllEnabled], () => this._queryPageDebounced()), g(() => [this.layer, this.relationshipId, this.objectId, this.canQuery], () => this._queryFeatureCountDebounced())]);
  }
  destroy() {
    this._destroyRelatedFeatureViewModels(), this.relatedFeatures.destroyAll(), this._cancelQuery(), this._cancelQueryFeatureCount(), this._cancelQueryPage();
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
      return n.field = Qe(s.field, i), n;
    }) : e ?? [];
  }
  get supportsCacheHint() {
    return !!this.layer?.capabilities?.queryRelated?.supportsCacheHint;
  }
  get canLoad() {
    return !!this.map && this.relationshipId != null && typeof this.objectId == "number";
  }
  get canQuery() {
    const e = this.layer?.capabilities?.queryRelated;
    return !!(this.relatedLayer && this.relationship && this.relationshipId != null && this.objectId != null && e?.supportsCount && e?.supportsPagination);
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
    return this._get("relatedFeatures") || new Be();
  }
  get relatedLayer() {
    const { layer: e, map: i, relationship: s } = this;
    return e?.loaded && i && s ? Yn(i, e, s) ?? null : null;
  }
  get relationship() {
    const { relationshipId: e, layer: i } = this;
    return e != null ? i?.relationships?.find(({ id: s }) => s === e) ?? null : null;
  }
  get relatedFeatureViewModels() {
    return this._get("relatedFeatureViewModels") || new Be();
  }
  get state() {
    const { _queryAbortController: e, _queryFeatureCountAbortController: i, _queryPageAbortController: s, canQuery: n, _loaded: r, canLoad: a } = this;
    return i || a && !r ? "loading" : e || s ? "querying" : n ? "ready" : "disabled";
  }
  getRelatedFeatureByObjectId(e) {
    return this.relatedFeatures.find((i) => i.getObjectId() === e);
  }
  refresh() {
    this._queryFeatureCountDebounced();
  }
  _destroyRelatedFeatureViewModels() {
    this.relatedFeatureViewModels?.destroyAll();
  }
  async _queryFeatureCount() {
    const { layer: e, relatedLayer: i, relationshipId: s, objectId: n, _queryFeatureCountAbortController: r, canQuery: a, supportsCacheHint: d } = this;
    if (await e?.load(), await i?.load(), !a || !e || !i || n == null) return void this._set("featureCount", 0);
    const c = i.createQuery(), { historicMoment: h, gdbVersion: p } = e, m = new Rt({ cacheHint: d, gdbVersion: p, historicMoment: h, relationshipId: s, returnGeometry: !1, objectIds: [n], where: c.where ?? void 0 }), f = await e.queryRelatedFeaturesCount(m, { signal: r?.signal });
    this._set("featureCount", f[n] || 0);
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
    const { orderByFieldsFixedCasing: i, showAllEnabled: s, featuresPerPage: n, displayCount: r, layer: a, relationshipId: d, featurePage: c, featureCount: h, relatedLayer: p, supportsCacheHint: m } = this, { canQuery: f, objectId: y } = this;
    if (!f || !a || !p || y == null) return [];
    const v = s ? ((c - 1) * n + h) % h : 0, _ = s ? n : r, C = p.objectIdField, M = [...i.map((ae) => ae.field), ...Qr(p), C].filter(pt), x = i.map((ae) => `${ae.field} ${ae.order}`), w = p.createQuery(), { historicMoment: O, gdbVersion: he } = a, oe = new Rt({ orderByFields: x, start: v, num: _, outFields: M, cacheHint: m, historicMoment: O, gdbVersion: he, relationshipId: d, returnGeometry: !1, objectIds: [y], where: w.where ?? void 0 }), ze = await a.queryRelatedFeatures(oe, { signal: e?.signal }), Ye = ze[y]?.features || [];
    return Ye.forEach((ae) => {
      ae.sourceLayer = p, ae.layer = p;
    }), Ye;
  }
};
o([l()], T.prototype, "_loaded", void 0), o([l()], T.prototype, "_queryAbortController", void 0), o([l()], T.prototype, "_queryPageAbortController", void 0), o([l()], T.prototype, "_queryFeatureCountAbortController", void 0), o([l({ value: 1 })], T.prototype, "featurePage", null), o([l()], T.prototype, "featuresPerPage", void 0), o([l({ readOnly: !0 })], T.prototype, "orderByFieldsFixedCasing", null), o([l({ readOnly: !0 })], T.prototype, "supportsCacheHint", null), o([l({ readOnly: !0 })], T.prototype, "canLoad", null), o([l({ readOnly: !0 })], T.prototype, "canQuery", null), o([l()], T.prototype, "description", void 0), o([l({ readOnly: !0 })], T.prototype, "itemDescriptionFieldName", null), o([l({ value: 3 })], T.prototype, "displayCount", null), o([l({ type: De })], T.prototype, "graphic", void 0), o([l()], T.prototype, "layer", void 0), o([l()], T.prototype, "map", void 0), o([l({ readOnly: !0 })], T.prototype, "objectId", null), o([l({ readOnly: !0 })], T.prototype, "objectIdField", null), o([l()], T.prototype, "orderByFields", void 0), o([l({ readOnly: !0 })], T.prototype, "relatedFeatures", null), o([l({ readOnly: !0 })], T.prototype, "relatedLayer", null), o([l({ readOnly: !0 })], T.prototype, "relationship", null), o([l()], T.prototype, "featureCount", void 0), o([l({ readOnly: !0 })], T.prototype, "relatedFeatureViewModels", null), o([l()], T.prototype, "relationshipId", void 0), o([l()], T.prototype, "showAllEnabled", void 0), o([l()], T.prototype, "state", null), o([l()], T.prototype, "title", void 0), T = o([P("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")], T);
const Jt = T, ot = "esri-feature", He = `${ot}-relationship`, me = { base: He, listContainer: `${He}__list`, listItem: `${He}__list-item`, listItemHidden: `${He}__list-item--hidden`, listContainerQuerying: `${He}__list--querying`, featureObserver: `${ot}__feature-observer`, stickySpinnerContainer: `${ot}__sticky-loading-container`, loadingSpinnerContainer: `${ot}__loading-container` }, Ei = { title: !0, description: !0 };
let Q = class extends ee {
  constructor(e, i) {
    super(e, i), this._featureElementInfo = null, this._relatedFeatureIntersectionObserverNode = null, this._relatedFeatureIntersectionObserver = new IntersectionObserver(([s]) => {
      s?.isIntersecting && this._increaseFeaturePage();
    }, { root: window.document }), this.headingLevel = 2, this.viewModel = new Jt(), this.messages = null, this.messagesCommon = null, this.visibleElements = { ...Ei }, this._increaseFeaturePage = () => {
      const { state: s, showAllEnabled: n, relatedFeatures: r, featuresPerPage: a, featurePage: d } = this.viewModel;
      s === "ready" && n && r.length >= a * d && this.viewModel.featurePage++;
    };
  }
  initialize() {
    this._featureElementInfo = new mt(), this.addHandles([g(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), L), g(() => [this.viewModel.state, this.viewModel.showAllEnabled, this._relatedFeatureIntersectionObserverNode], () => this._handleRelatedFeatureObserverChange()), Ee(() => this.viewModel.relatedFeatureViewModels, "change", () => this._setupRelatedFeatureViewModels())]);
  }
  loadDependencies() {
    return Le({ icon: () => import("./calcite-icon-D8EDmgwR.js"), list: () => import("./calcite-list-UxaUJ5pM.js"), "list-item": () => import("./calcite-list-item-D9petAYR.js"), loader: () => import("./calcite-loader-B81-beNl.js"), notice: () => import("./calcite-notice-BCcMBTHj.js") });
  }
  destroy() {
    this._unobserveRelatedFeatureObserver(), this._featureElementInfo = Gs(this._featureElementInfo);
  }
  get displayShowAllButton() {
    const { showAllEnabled: e, featureCount: i, displayCount: s, state: n } = this.viewModel;
    return !e && !!i && n === "ready" && (i > s || s === 0);
  }
  get displayListItems() {
    return this.displayShowAllButton || this.viewModel.relatedFeatureViewModels.length > 0;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e) {
    this.viewModel.description = e;
  }
  get featureCountDescription() {
    const { messages: e } = this, { featureCount: i } = this.viewModel;
    return re(e?.numberRecords, { number: i });
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e) {
    this.viewModel.title = e;
  }
  castVisibleElements(e) {
    return { ...Ei, ...e };
  }
  render() {
    const { state: e } = this.viewModel;
    return u("div", { class: this.classes(me.base, I.widget) }, this._featureElementInfo?.render(), e === "loading" ? this._renderLoading() : e === "disabled" ? this._renderRelationshipNotFound() : this._renderRelatedFeatures());
  }
  _renderStickyLoading() {
    return this.viewModel.state === "querying" ? u("div", { class: me.stickySpinnerContainer, key: "sticky-loader" }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return u("calcite-loader", { inline: !0, label: "" });
  }
  _renderLoading() {
    return u("div", { class: me.loadingSpinnerContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderShowAllIconNode() {
    return u("calcite-icon", { icon: "list", scale: "s", slot: "content-end" });
  }
  _renderChevronIconNode() {
    const e = xe(this.container) ? "chevron-left" : "chevron-right";
    return u("calcite-icon", { icon: e, scale: "s", slot: "content-end" });
  }
  _renderRelatedFeature(e) {
    const { itemDescriptionFieldName: i } = this.viewModel, s = e.title;
    e.description = i && e.formattedAttributes?.global[i];
    const n = e.state === "loading";
    return u("calcite-list-item", { class: this.classes(me.listItem, { [me.listItemHidden]: n }), description: e.description ?? "", key: e.uid, label: s, onCalciteListItemSelect: () => this.emit("select-record", { featureViewModel: e }) }, this._renderChevronIconNode());
  }
  _renderShowAllListItem() {
    return this.displayShowAllButton ? u("calcite-list-item", { description: this.featureCountDescription, key: "show-all-item", label: this.messages?.showAll, onCalciteListItemSelect: () => this.emit("show-all-records") }, this._renderShowAllIconNode()) : null;
  }
  _renderNoRelatedFeaturesMessage() {
    return u("calcite-notice", { icon: "information", key: "no-related-features-message", kind: "brand", open: !0, scale: "s", width: "full" }, u("div", { slot: "message" }, this.messages?.noRelatedFeatures));
  }
  _renderFeatureObserver() {
    return u("div", { afterCreate: this._relatedFeatureIntersectionObserverCreated, bind: this, class: me.featureObserver, key: "feature-observer" });
  }
  _renderList() {
    const { relatedFeatureViewModels: e } = this.viewModel;
    return u("calcite-list", null, e.toArray().map((i) => this._renderRelatedFeature(i)), this._renderShowAllListItem());
  }
  _renderRelatedFeatures() {
    const { displayListItems: e } = this, { state: i } = this.viewModel;
    return u("div", { class: this.classes(me.listContainer, { [me.listContainerQuerying]: i === "querying" }), key: "list-container" }, e ? this._renderList() : i === "ready" ? this._renderNoRelatedFeaturesMessage() : null, this._renderStickyLoading(), this._renderFeatureObserver());
  }
  _renderRelationshipNotFound() {
    return u("calcite-notice", { icon: "exclamation-mark-triangle", key: "relationship-not-found", kind: "danger", open: !0, scale: "s", width: "full" }, u("div", { slot: "message" }, this.messages?.relationshipNotFound));
  }
  _setupRelatedFeatureViewModels() {
    const { relatedFeatureViewModels: e } = this.viewModel, i = "related-feature-viewmodels";
    this.removeHandles(i), e?.forEach((s) => {
      this.addHandles(g(() => [s.title, s.state], () => this.scheduleRender(), L), i);
    }), this.scheduleRender();
  }
  _setupFeatureElementInfo() {
    const { headingLevel: e, visibleElements: i } = this, s = i.description && this.description, n = i.title && this.title;
    this._featureElementInfo?.set({ description: s, title: n, headingLevel: e });
  }
  async _handleRelatedFeatureObserverChange() {
    this._unobserveRelatedFeatureObserver();
    const { state: e, showAllEnabled: i } = this.viewModel;
    await Gi(0), this._relatedFeatureIntersectionObserverNode && e === "ready" && i && this._relatedFeatureIntersectionObserver.observe(this._relatedFeatureIntersectionObserverNode);
  }
  _relatedFeatureIntersectionObserverCreated(e) {
    this._relatedFeatureIntersectionObserverNode = e;
  }
  _unobserveRelatedFeatureObserver() {
    this._relatedFeatureIntersectionObserverNode && this._relatedFeatureIntersectionObserver.unobserve(this._relatedFeatureIntersectionObserverNode);
  }
};
o([l()], Q.prototype, "_relatedFeatureIntersectionObserverNode", void 0), o([l({ readOnly: !0 })], Q.prototype, "displayShowAllButton", null), o([l({ readOnly: !0 })], Q.prototype, "displayListItems", null), o([l()], Q.prototype, "description", null), o([l({ readOnly: !0 })], Q.prototype, "featureCountDescription", null), o([l()], Q.prototype, "headingLevel", void 0), o([l()], Q.prototype, "title", null), o([l({ type: Jt })], Q.prototype, "viewModel", void 0), o([l(), J("esri/widgets/Feature/t9n/Feature")], Q.prototype, "messages", void 0), o([l(), J("esri/t9n/common")], Q.prototype, "messagesCommon", void 0), o([l()], Q.prototype, "visibleElements", void 0), o([qe("visibleElements")], Q.prototype, "castVisibleElements", null), Q = o([P("esri.widgets.Feature.FeatureRelationship")], Q);
const xi = Q;
let Gr = class {
  constructor(e, i) {
    this.preLayerQueryCallback = e, this.preRequestCallback = i, this.preLayerQueryCallback || (this.preLayerQueryCallback = (s) => {
    }), this.preRequestCallback || (this.preLayerQueryCallback = (s) => {
    });
  }
};
var Ze;
const Xr = 1, Ti = "content-view-models", ki = "relationship-view-models", Li = { attachmentsContent: !0, chartAnimation: !0, customContent: !0, expressionContent: !0, fieldsContent: !0, mediaContent: !0, textContent: !0, relationshipContent: !0 };
let R = Ze = class extends Qi(ue) {
  constructor(t) {
    super(t), this._error = null, this._featureAbortController = null, this._graphicChangedThrottled = dt(this._graphicChanged, Xr, this), this._expressionAttributes = null, this._graphicExpressionAttributes = null, this.abilities = { ...Li }, this.content = null, this.contentViewModels = [], this.description = null, this.defaultPopupTemplateEnabled = !1, this.formattedAttributes = null, this.lastEditInfo = null, this.location = null, this.relatedInfos = /* @__PURE__ */ new Map(), this.title = "", this.view = null, this._isAllowedContentType = (e) => {
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
    return Hn(mi(this._effectivePopupTemplate), this._sourceLayer);
  }
  get _sourceLayer() {
    return is(this.graphic);
  }
  castAbilities(t) {
    return { ...Li, ...t };
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
    return this.view?.timeZone ?? Xi;
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
    i instanceof Ie && i.setActiveMedia(e);
  }
  nextMedia(t) {
    const e = this.contentViewModels[t];
    e instanceof Ie && e.next();
  }
  previousMedia(t) {
    const e = this.contentViewModels[t];
    e instanceof Ie && e.previous();
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
      const a = await ds({ layer: i, graphic: t, outFields: [], objectIds: r, returnGeometry: !0, spatialReference: e }), d = a?.geometry;
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
      Pt(i) || (this._error = i, H.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: i, graphic: t, popupTemplate: this._effectivePopupTemplate }));
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
    if (this._destroyContentViewModels(), this.graphic) return Array.isArray(t) ? t.filter(this._isAllowedContentType).map((e, i) => this._compileContentElement(e, i)).filter(pt) : typeof t == "string" ? this._compileText(new Ui({ text: t }), 0).text : t;
  }
  _destroyContentViewModels() {
    this.removeHandles(ki), this.removeHandles(Ti), this.contentViewModels.forEach((t) => t && !t.destroyed && t.destroy()), this._set("contentViewModels", []);
  }
  _matchesFeature(t, e) {
    const i = t?.graphic?.getObjectId(), s = e?.getObjectId();
    return i != null && s != null && i === s;
  }
  _setRelatedFeaturesViewModels({ relatedFeatureViewModels: t, relatedFeatures: e, map: i }) {
    const { view: s, spatialReference: n, timeZone: r } = this;
    e?.filter(Boolean).forEach((a) => {
      t.some((d) => this._matchesFeature(d, a)) || t.add(new Ze({ abilities: { relationshipContent: !1 }, map: i, view: s, spatialReference: n, timeZone: r, graphic: a }));
    }), t.forEach((a) => {
      e?.find((c) => this._matchesFeature(a, c)) || t.remove(a);
    });
  }
  _setExpressionContentVM(t, e) {
    const i = this.formattedAttributes, { contentElement: s, contentElementViewModel: n } = t, r = s?.type;
    n && r && (r === "fields" && (this._createFieldsFormattedAttributes({ contentElement: s, contentElementIndex: e, formattedAttributes: i }), n.set(this._createFieldsVMParams(s, e))), r === "media" && (this._createMediaFormattedAttributes({ contentElement: s, contentElementIndex: e, formattedAttributes: i }), n.set(this._createMediaVMParams(s, e))), r === "text" && n.set(this._createTextVMParams(s)));
  }
  _compileRelationship(t, e) {
    const { displayCount: i, orderByFields: s, relationshipId: n, title: r, description: a } = t, { _sourceLayer: d, graphic: c, map: h } = this;
    if (!os(d)) return;
    const p = new Jt({ displayCount: i, graphic: c, orderByFields: s, relationshipId: n, layer: d, map: h, ...this._compileTitleAndDesc({ title: r, description: a }) });
    return this.contentViewModels[e] = p, this.addHandles(Ee(() => p.relatedFeatures, "change", () => this._setRelatedFeaturesViewModels(p)), ki), t;
  }
  _compileExpression(t, e) {
    const { expressionInfo: i } = t, { graphic: s, map: n, spatialReference: r, view: a, location: d } = this, c = new Kt({ expressionInfo: i, graphic: s, interceptor: Ze.interceptor, map: n, spatialReference: r, view: a, location: d });
    return this.contentViewModels[e] = c, this.addHandles(g(() => c.contentElementViewModel, () => this._setExpressionContentVM(c, e), L), Ti), t;
  }
  _compileAttachments(t, e) {
    const { graphic: i } = this, { description: s, title: n } = t;
    return this.contentViewModels[e] = new Xt({ graphic: i, ...this._compileTitleAndDesc({ title: n, description: s }) }), t;
  }
  _compileCustom(t, e) {
    const { graphic: i } = this, { creator: s, destroyer: n } = t;
    return this.contentViewModels[e] = new ut({ graphic: i, creator: s, destroyer: n }), t;
  }
  _compileTitleAndDesc({ title: t, description: e }) {
    const { _fieldInfoMap: i, _sourceLayer: s, graphic: n, formattedAttributes: r } = this, a = n?.attributes, d = this._expressionAttributes, c = r.global;
    return { title: Fe({ attributes: a, fieldInfoMap: i, globalAttributes: c, expressionAttributes: d, layer: s, text: t }), description: Fe({ attributes: a, fieldInfoMap: i, globalAttributes: c, expressionAttributes: d, layer: s, text: e }) };
  }
  _createFieldsVMParams(t, e) {
    const i = this._effectivePopupTemplate, s = this.formattedAttributes, n = { ...s?.global, ...s?.content[e] }, r = t?.fieldInfos || i?.fieldInfos, a = r?.filter(({ fieldName: p }) => !!p && (Zt(p) || ce(p) || n.hasOwnProperty(p))), d = i?.expressionInfos, { description: c, title: h } = t;
    return { attributes: n, expressionInfos: d, fieldInfos: a, ...this._compileTitleAndDesc({ title: h, description: c }) };
  }
  _compileFields(t, e) {
    const i = t.clone(), s = new ft(this._createFieldsVMParams(t, e));
    return this.contentViewModels[e] = s, i.fieldInfos = s.formattedFieldInfos.slice(0), i;
  }
  _createMediaVMParams(t, e) {
    const { abilities: i, graphic: s, _fieldInfoMap: n, _effectivePopupTemplate: r, relatedInfos: a, _sourceLayer: d, _expressionAttributes: c } = this, h = this.formattedAttributes, p = s?.attributes ?? {}, { description: m, mediaInfos: f, title: y } = t;
    return { abilities: { chartAnimation: i.chartAnimation }, activeMediaInfoIndex: t.activeMediaInfoIndex || 0, attributes: p, isAggregate: s?.isAggregate, layer: d, fieldInfoMap: n, formattedAttributes: { ...h?.global, ...h?.content[e] }, expressionAttributes: c, mediaInfos: f, popupTemplate: r, relatedInfos: a, ...this._compileTitleAndDesc({ title: y, description: m }) };
  }
  _compileMedia(t, e) {
    const i = t.clone(), s = new Ie(this._createMediaVMParams(t, e));
    return i.mediaInfos = s.formattedMediaInfos.slice(0), this.contentViewModels[e] = s, i;
  }
  _createTextVMParams(t) {
    const { graphic: e, _fieldInfoMap: i, _sourceLayer: s, _expressionAttributes: n } = this;
    if (t && t.text) {
      const r = e?.attributes ?? {}, a = this.formattedAttributes?.global ?? {};
      t.text = Fe({ attributes: r, fieldInfoMap: i, globalAttributes: a, expressionAttributes: n, layer: s, text: t.text });
    }
    return { graphic: e, creator: t.text };
  }
  _compileText(t, e) {
    const i = t.clone();
    return this.contentViewModels[e] = new ut(this._createTextVMParams(i)), i;
  }
  _compileLastEditInfo() {
    const { _effectivePopupTemplate: t, _sourceLayer: e, graphic: i, timeZone: s } = this;
    if (!t) return;
    const { lastEditInfoEnabled: n } = t, r = e?.editFieldsInfo;
    return n && r ? Wn(r, i?.attributes, s, e) : void 0;
  }
  _compileTitle(t) {
    const { _fieldInfoMap: e, _sourceLayer: i, graphic: s, _expressionAttributes: n } = this, r = s?.attributes ?? {}, a = this.formattedAttributes?.global ?? {};
    return Fe({ attributes: r, fieldInfoMap: e, globalAttributes: a, expressionAttributes: n, layer: i, text: t });
  }
  async _getTitle() {
    const { _effectivePopupTemplate: t, graphic: e } = this;
    return e ? ct({ type: "title", value: t?.title, event: { graphic: e } }) : null;
  }
  async _getContent() {
    const { _effectivePopupTemplate: t, graphic: e } = this;
    return e ? ct({ type: "content", value: t?.content, event: { graphic: e } }) : null;
  }
  async _queryFeature(t) {
    const { _featureAbortController: e, _sourceLayer: i, graphic: s, _effectivePopupTemplate: n } = this, r = this.map, a = this.view, d = this.spatialReference, c = this.location;
    if (e !== this._featureAbortController || !s) return;
    await Zn({ graphic: s, popupTemplate: n, layer: i, spatialReference: d }, t);
    const { content: { value: h }, title: { value: p } } = await Te({ content: this._getContent(), title: this._getTitle() }), { expressionAttributes: { value: m } } = await Te({ checkForRelatedFeatures: this._checkForRelatedFeatures(t), expressionAttributes: jr({ expressionInfos: n?.expressionInfos, spatialReference: d, graphic: s, map: r, interceptor: Ze.interceptor, view: a, options: t, location: c }) });
    e === this._featureAbortController && s && (this._expressionAttributes = m, this._graphicExpressionAttributes = { ...s.attributes, ...m }, this._set("formattedAttributes", this._createFormattedAttributes(h)), this._set("title", this._compileTitle(p)), this._set("lastEditInfo", this._compileLastEditInfo() || null), this._set("content", this._compileContent(h) || null));
  }
  _createMediaFormattedAttributes({ contentElement: t, contentElementIndex: e, formattedAttributes: i }) {
    const { _effectivePopupTemplate: s, graphic: n, relatedInfos: r, _sourceLayer: a, _fieldInfoMap: d, _graphicExpressionAttributes: c, timeZone: h } = this;
    i.content[e] = Mt({ fieldInfos: s?.fieldInfos, graphic: n, attributes: { ...c, ...t.attributes }, layer: a, fieldInfoMap: d, relatedInfos: r, timeZone: h });
  }
  _createFieldsFormattedAttributes({ contentElement: t, contentElementIndex: e, formattedAttributes: i }) {
    if (t.fieldInfos) {
      const { graphic: s, relatedInfos: n, _sourceLayer: r, _fieldInfoMap: a, _graphicExpressionAttributes: d, timeZone: c } = this;
      i.content[e] = Mt({ fieldInfos: t.fieldInfos, graphic: s, attributes: { ...d, ...t.attributes }, layer: r, fieldInfoMap: a, relatedInfos: n, timeZone: c });
    }
  }
  _createFormattedAttributes(t) {
    const { _effectivePopupTemplate: e, graphic: i, relatedInfos: s, _sourceLayer: n, _fieldInfoMap: r, _graphicExpressionAttributes: a, timeZone: d } = this, c = e?.fieldInfos, h = { global: Mt({ fieldInfos: c, graphic: i, attributes: a, layer: n, fieldInfoMap: r, relatedInfos: s, timeZone: d }), content: [] };
    return Array.isArray(t) && t.forEach((p, m) => {
      p.type === "fields" && this._createFieldsFormattedAttributes({ contentElement: p, contentElementIndex: m, formattedAttributes: h }), p.type === "media" && this._createMediaFormattedAttributes({ contentElement: p, contentElementIndex: m, formattedAttributes: h });
    }), h;
  }
  _checkForRelatedFeatures(t) {
    const { graphic: e, _effectivePopupTemplate: i } = this;
    return this._queryRelatedInfos(e, mi(i), t);
  }
  async _queryRelatedInfos(t, e, i) {
    const { relatedInfos: s, _sourceLayer: n } = this;
    s.clear();
    const r = n?.associatedLayer != null ? await n?.associatedLayer.load(i) : n;
    if (!r || !t || !e.filter((h) => !!h.fieldName && ce(h.fieldName))?.length) return;
    e.forEach((h) => this._configureRelatedInfo(h, r));
    const d = await Tr({ relatedInfos: s, layer: r }, i);
    Object.keys(d).forEach((h) => {
      const p = s.get(h.toString()), m = d[h]?.value;
      p && m && (p.layerInfo = m.data);
    });
    const c = await kr({ graphic: t, relatedInfos: s, layer: r }, i);
    Object.keys(c).forEach((h) => {
      Fr(c[h]?.value, s.get(h.toString()));
    });
  }
  _configureRelatedInfo(t, e) {
    const { relatedInfos: i } = this, s = nt(t.fieldName || "");
    if (!s) return;
    const { layerId: n, fieldName: r } = s;
    if (!n) return;
    const a = i.get(n.toString()) || Mr(n, e);
    a && (Lr({ relatedInfo: a, fieldName: r, fieldInfo: t }), this.relatedInfos.set(n, a));
  }
};
R.interceptor = new Gr(Gn, Xn), o([l()], R.prototype, "_error", void 0), o([l()], R.prototype, "_featureAbortController", void 0), o([l({ readOnly: !0 })], R.prototype, "_effectivePopupTemplate", null), o([l({ readOnly: !0 })], R.prototype, "_fieldInfoMap", null), o([l({ readOnly: !0 })], R.prototype, "_sourceLayer", null), o([l()], R.prototype, "abilities", void 0), o([qe("abilities")], R.prototype, "castAbilities", null), o([l({ readOnly: !0 })], R.prototype, "content", void 0), o([l({ readOnly: !0 })], R.prototype, "contentViewModels", void 0), o([l()], R.prototype, "description", void 0), o([l({ type: Boolean })], R.prototype, "defaultPopupTemplateEnabled", void 0), o([l({ readOnly: !0 })], R.prototype, "isTable", null), o([l({ readOnly: !0 })], R.prototype, "state", null), o([l({ readOnly: !0 })], R.prototype, "formattedAttributes", void 0), o([l({ type: De, value: null })], R.prototype, "graphic", null), o([l({ readOnly: !0 })], R.prototype, "lastEditInfo", void 0), o([l({ type: Ht })], R.prototype, "location", void 0), o([l({ readOnly: !0 })], R.prototype, "relatedInfos", void 0), o([l()], R.prototype, "spatialReference", null), o([l()], R.prototype, "timeZone", null), o([l({ readOnly: !0 })], R.prototype, "title", void 0), o([l()], R.prototype, "map", null), o([l({ readOnly: !0 })], R.prototype, "waitingForContent", null), o([l()], R.prototype, "view", void 0), R = Ze = o([P("esri.widgets.Feature.FeatureViewModel")], R);
const ei = R, z = "esri-feature", N = { base: z, container: `${z}__size-container`, title: `${z}__title`, main: `${z}__main-container`, btn: `${z}__button`, icon: `${z}__icon`, content: `${z}__content`, contentNode: `${z}__content-node`, contentNodeText: `${z}__content-node--text`, contentElement: `${z}__content-element`, text: `${z}__text`, lastEditedInfo: `${z}__last-edited-info`, fields: `${z}__fields`, fieldHeader: `${z}__field-header`, fieldData: `${z}__field-data`, fieldDataDate: `${z}__field-data--date`, loadingSpinnerContainer: `${z}__loading-container` }, vs = (t) => {
  let e = class extends t {
    constructor() {
      super(...arguments), this.renderNodeContent = (i) => ps(i) && !i.destroyed ? u("div", { class: N.contentNode, key: i }, i.render()) : i instanceof HTMLElement ? u("div", { afterCreate: this._attachToNode, bind: i, class: N.contentNode, key: i }) : nr(i) ? u("div", { afterCreate: this._attachToNode, bind: i.domNode, class: N.contentNode, key: i }) : null;
    }
    _attachToNode(i) {
      const s = this;
      i.appendChild(s);
    }
  };
  return e = o([P("esri.widgets.Feature.support.FeatureContentMixin")], e), e;
};
var Bt;
const Ri = { title: !0, content: !0, lastEditedInfo: !0 }, Pi = "relationship-handles";
let q = Bt = class extends vs(ee) {
  constructor(t, e) {
    super(t, e), this._contentWidgets = [], this.flowItems = null, this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.visibleElements = { ...Ri }, this.viewModel = new ei();
  }
  initialize() {
    this.addHandles(g(() => this.viewModel?.contentViewModels, () => this._setupContentWidgets(), L));
  }
  loadDependencies() {
    return Le({ notice: () => import("./calcite-notice-BCcMBTHj.js"), loader: () => import("./calcite-loader-B81-beNl.js") });
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
  get icon() {
    return "polygon";
  }
  set icon(t) {
    this._overrideIfSome("icon", t);
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
    return { ...Ri, ...t };
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
    return u("div", { class: this.classes(N.base, I.widget) }, e);
  }
  _renderError() {
    const { messagesCommon: t, messages: e, visibleElements: i } = this;
    return u("calcite-notice", { icon: "exclamation-mark-circle", kind: "danger", open: !0, scale: "s" }, i.title ? u("div", { key: "error-title", slot: "title" }, t.errorMessage) : null, u("div", { key: "error-message", slot: "message" }, e.loadingError));
  }
  _renderLoading() {
    return u("div", { class: N.loadingSpinnerContainer, key: "loading-container" }, u("calcite-loader", { inline: !0, label: "" }));
  }
  _renderContentContainer() {
    const { visibleElements: t } = this;
    return t.content ? u("div", { class: N.main }, [this._renderContent(), this._renderLastEditInfo()]) : null;
  }
  _renderTitle() {
    const { visibleElements: t, title: e } = this;
    return t.title ? u(Yt, { class: N.title, innerHTML: e, level: this.headingLevel }) : null;
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
    const { date: s, user: n } = i, r = i.type === "edit" ? n ? e.lastEditedByUser : e.lastEdited : n ? e.lastCreatedByUser : e.lastCreated, a = re(r, { date: s, user: n });
    return u("div", { class: this.classes(N.lastEditedInfo, N.contentElement), key: "edit-info-element" }, a);
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
    this.removeHandles(Pi), this._contentWidgets.forEach((t) => this._destroyContentWidget(t)), this._contentWidgets = [];
  }
  _addFeatureRelationshipHandles(t) {
    const { flowItems: e, visibleElements: i } = this;
    this.addHandles([Ee(() => t, "select-record", ({ featureViewModel: s }) => {
      e && (s.abilities = { relationshipContent: !0 }, e.push(new Bt({ flowItems: e, viewModel: s, visibleElements: i })));
    }), Ee(() => t, "show-all-records", () => {
      if (!e) return;
      const { viewModel: s } = t;
      s.showAllEnabled = !0;
      const n = new xi({ visibleElements: { title: !1, description: !1 }, viewModel: s });
      this._addFeatureRelationshipHandles(n), e.push(n);
    })], Pi);
  }
  _setupContentWidgets() {
    this._destroyContentWidgets();
    const { headingLevel: t, visibleElements: e } = this, i = this.viewModel?.content, { contentViewModels: s } = this.viewModel;
    if (Array.isArray(i)) i.forEach((n, r) => {
      if (n.type === "attachments" && (this._contentWidgets[r] = new ir({ displayType: n.displayType, headingLevel: e.title && t < 6 ? t + 1 : t, viewModel: s[r] })), n.type === "fields" && (this._contentWidgets[r] = new ms({ viewModel: s[r] })), n.type === "media" && (this._contentWidgets[r] = new fs({ viewModel: s[r] })), n.type === "text" && (this._contentWidgets[r] = new st({ viewModel: s[r] })), n.type === "custom" && (this._contentWidgets[r] = new st({ viewModel: s[r] })), n.type === "expression" && (this._contentWidgets[r] = new Ur({ viewModel: s[r] })), n.type === "relationship") {
        const a = new xi({ viewModel: s[r] });
        this._addFeatureRelationshipHandles(a), this._contentWidgets[r] = a;
      }
    }, this);
    else {
      const n = s[0];
      n && !n.destroyed && (this._contentWidgets[0] = new st({ viewModel: n }));
    }
    this.scheduleRender();
  }
};
o([l()], q.prototype, "graphic", null), o([l()], q.prototype, "defaultPopupTemplateEnabled", null), o([l()], q.prototype, "flowItems", void 0), o([l()], q.prototype, "headingLevel", void 0), o([l({ readOnly: !0 })], q.prototype, "isTable", null), o([l()], q.prototype, "icon", null), o([l()], q.prototype, "label", null), o([l(), J("esri/widgets/Feature/t9n/Feature")], q.prototype, "messages", void 0), o([l(), J("esri/t9n/common")], q.prototype, "messagesCommon", void 0), o([l()], q.prototype, "spatialReference", null), o([l()], q.prototype, "timeZone", null), o([l({ readOnly: !0 })], q.prototype, "title", null), o([l()], q.prototype, "visibleElements", void 0), o([qe("visibleElements")], q.prototype, "castVisibleElements", null), o([l()], q.prototype, "map", null), o([l()], q.prototype, "view", null), o([l({ type: ei })], q.prototype, "viewModel", void 0), q = Bt = o([P("esri.widgets.Feature")], q);
const Yr = q;
let _e = class extends Xs.EventedAccessor {
  constructor(e) {
    super(e), this.location = null, this.screenLocationEnabled = !1, this.view = null, this.addHandles([Ue(() => {
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
    const { location: e, view: i, screenLocationEnabled: s } = this, n = i?.spatialReference, r = n ? Ys(e, n).geometry : null;
    return s && r && i?.ready ? i.toScreen(r) : null;
  }
};
o([l()], _e.prototype, "location", void 0), o([l()], _e.prototype, "screenLocation", null), o([l()], _e.prototype, "screenLocationEnabled", void 0), o([l()], _e.prototype, "view", void 0), _e = o([P("esri.widgets.support.AnchorElementViewModel")], _e);
const _s = _e;
let at = class extends _s {
  constructor(e) {
    super(e), this.visible = !1;
  }
};
o([l()], at.prototype, "visible", void 0), at = o([P("esri.widgets.Spinner.SpinnerViewModel")], at);
const ws = at, Tt = "esri-spinner", kt = { base: Tt, spinnerStart: `${Tt}--start`, spinnerFinish: `${Tt}--finish` };
let we = class extends ee {
  constructor(e, i) {
    super(e, i), this._animationDelay = 500, this._animationPromise = null, this.viewModel = new ws();
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
    const { visible: e } = this, { screenLocation: i } = this.viewModel, s = !!i, n = e && s, r = !e && s, a = { [kt.spinnerStart]: n, [kt.spinnerFinish]: r }, d = this._getPositionStyles();
    return u("div", { class: this.classes(kt.base, a), styles: d });
  }
  _visibleChange(e) {
    if (e) return void (this.viewModel.screenLocationEnabled = !0);
    const i = Gi(this._animationDelay);
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
o([l()], we.prototype, "location", null), o([l()], we.prototype, "view", null), o([l({ type: ws })], we.prototype, "viewModel", void 0), o([l()], we.prototype, "visible", null), we = o([P("esri.widgets.Spinner")], we);
const Kr = we, j = "esri-features", D = { icon: `${j}__icon`, actionImage: `${j}__action-image`, base: j, container: `${j}__container`, contentContainer: `${j}__content-container`, contentFeature: `${j}__content-feature`, flowItemCollapsed: `${j}__flow-item--collapsed`, header: `${j}__header`, footer: `${j}__footer`, featureMenuObserver: `${j}__feature-menu-observer`, actionExit: `${j}__action--exit`, loader: `${j}__loader`, featuresHeading: `${j}__heading`, paginationActionBar: `${j}__pagination-action-bar`, paginationPrevious: `${j}__pagination-previous`, paginationNext: `${j}__pagination-next` };
let be = class extends ee {
  constructor(e, i) {
    super(e, i), this.messages = null, this.closed = !1, this.closable = !0, this._handleOpenRelatedFeature = (s) => {
      this.emit("open-related-feature", { feature: s });
    };
  }
  loadDependencies() {
    return Le({ action: () => import("./calcite-action-BLs09Cz3.js"), "flow-item": () => import("./calcite-flow-item-DHNV1vx8.js") });
  }
  render() {
    const { flowItems: e } = this, i = e?.toArray();
    return u(Ks, null, i?.map((s) => this._renderRelatedRecordsFlowItem(s)));
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
    const { messages: i, closable: s, closed: n } = this, r = "graphic" in e && !e.isTable && e.graphic?.geometry, a = i.exitRelatedRecords, d = i.selectFeature;
    return u("calcite-flow-item", { bind: this, closable: s, closed: n, description: this._getRelatedRecordsFlowItemDescription(e), heading: e.title ?? "", key: `flow-item-${e.viewModel.uid}`, onCalciteFlowItemBack: (c) => {
      c.preventDefault(), this._handleRelatedRecordsBackClick();
    }, onCalciteFlowItemClose: this._handleCloseClick }, u("calcite-action", { appearance: "transparent", bind: this, class: D.actionExit, icon: "move-up", key: "exit-related-records-action", onclick: this._handleExitClick, slot: "header-actions-start", text: a, title: a }), r ? u("calcite-action", { appearance: "transparent", bind: this, icon: "zoom-to-object", key: "open-related-feature-action", onclick: () => this._handleOpenRelatedFeature(e), slot: "header-actions-end", text: d, title: d }) : null, u("div", { class: D.container }, e.render()));
  }
  _getRelatedRecordsFlowItemDescription(e) {
    return "featureCountDescription" in e ? e.featureCountDescription : e.viewModel.description ?? "";
  }
};
o([l()], be.prototype, "flowItems", void 0), o([l(), J("esri/widgets/Features/t9n/Features")], be.prototype, "messages", void 0), o([l()], be.prototype, "closed", void 0), o([l()], be.prototype, "closable", void 0), be = o([P("esri.widgets.Features.FeaturesRelatedRecords")], be);
const Jr = be;
let eo = class {
  constructor(e) {
    this._observable = new Js(), this._set = new Set(e);
  }
  get size() {
    return ye(this._observable), this._set.size;
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
    return ye(this._observable), this._set.entries();
  }
  forEach(e, i) {
    ye(this._observable), this._set.forEach((s, n) => e.call(i, s, n, this), i);
  }
  has(e) {
    return ye(this._observable), this._set.has(e);
  }
  keys() {
    return ye(this._observable), this._set.keys();
  }
  values() {
    return ye(this._observable), this._set.values();
  }
  [Symbol.iterator]() {
    return ye(this._observable), this._set[Symbol.iterator]();
  }
  get [Symbol.toStringTag]() {
    return this._set[Symbol.toStringTag];
  }
};
const to = "OBJECTID";
var ke;
(function(t) {
  t[t.size = 22] = "size", t[t.lineWidth = 50] = "lineWidth", t[t.maxSize = 120] = "maxSize", t[t.maxOutlineSize = 80] = "maxOutlineSize", t[t.tallSymbolWidth = 20] = "tallSymbolWidth";
})(ke || (ke = {}));
const Oi = Yi("android");
Yi("chrome") || Oi && Oi >= 4;
en();
ke.size;
ke.maxSize;
ke.maxOutlineSize;
ke.lineWidth;
ke.tallSymbolWidth;
function bs(t) {
  return t && "opacity" in t ? t.opacity * bs(t.parent) : 1;
}
async function Ni(t, e) {
  if (!t) return;
  const i = t.sourceLayer, s = (e != null && e.useSourceLayer ? i : t.layer) ?? i, n = bs(s);
  if (t.symbol != null && (e == null || e.ignoreGraphicSymbol !== !0)) {
    const w = t.symbol.type === "web-style" ? await tn(t.symbol, { ...e, cache: e != null ? e.webStyleCache : null }) : t.symbol.clone();
    return wt(w, null, n), w;
  }
  const r = e?.renderer ?? io(s);
  let a = r && "getSymbolAsync" in r ? await r.getSymbolAsync(t, e) : null;
  if (!a) return;
  if (a = a.type === "web-style" ? await a.fetchSymbol({ ...e, cache: e != null ? e.webStyleCache : null }) : a.clone(), !r || !("visualVariables" in r) || !r.visualVariables?.length) return wt(a, null, n), a;
  if ("arcadeRequiredForVisualVariables" in r && r.arcadeRequiredForVisualVariables && e?.arcade == null) {
    const w = { ...e };
    w.arcade = await Hi(), e = w;
  }
  const { getColor: d, getOpacity: c, getAllSizes: h, getRotationAngle: p } = await import("./main-C4pF0E7B.js").then((w) => w.r8), m = [], f = [], y = [], v = [];
  for (const w of r.visualVariables) switch (w.type) {
    case "color":
      m.push(w);
      break;
    case "opacity":
      f.push(w);
      break;
    case "rotation":
      v.push(w);
      break;
    case "size":
      w.target || y.push(w);
  }
  const _ = !!m.length && m[m.length - 1], C = _ ? d(_, t, e) : null, M = !!f.length && f[f.length - 1];
  let x = M ? c(M, t, e) : null;
  if (n != null && (x = x != null ? x * n : n), wt(a, C, x), y.length) {
    const w = h(y, t, e);
    await sn(a, w);
  }
  for (const w of v) nn(a, p(w, t, e), w.axis);
  return a;
}
function io(t) {
  if (t) return "renderer" in t ? t.renderer : void 0;
}
const Ae = Be.ofType({ key: "type", defaultKeyValue: "button", base: rn, typeMap: { button: Ge, toggle: Ki } }), Ce = new Ge({ icon: "magnifying-glass-plus", id: "zoom-to-feature", title: "{messages.zoom}", className: de.zoomInMagnifyingGlass }), Si = new Ge({ icon: "trash", id: "remove-selected-feature", title: "{messages.remove}", className: de.trash }), Se = new Ge({ icon: "magnifying-glass-plus", id: "zoom-to-clustered-features", title: "{messages.zoom}", className: de.zoomInMagnifyingGlass }), ge = new Ki({ icon: "table", id: "browse-clustered-features", title: "{messages.browseClusteredFeatures}", className: de.table, value: !1 }), so = "esri.widgets.Popup.PopupViewModel", ht = () => H.getLogger(so), no = (t) => {
  const { event: e, view: i, viewModel: s } = t, { action: n } = e;
  if (!n) return Promise.reject(new k("trigger-action:missing-arguments", "Event has no action"));
  const { disabled: r, id: a } = n;
  if (!a) return Promise.reject(new k("trigger-action:invalid-action", "action.id is missing"));
  if (r) return Promise.reject(new k("trigger-action:invalid-action", "Action is disabled"));
  if (a === Ce.id) return oo(s).catch(on);
  if (a === Se.id) return ao(s);
  if (a === ge.id) return s.browseClusterEnabled = !s.browseClusterEnabled, s.featureMenuOpen = s.browseClusterEnabled, Promise.resolve();
  if (a === Si.id) {
    s.visible = !1;
    const { selectedFeature: d } = s;
    if (!d) return Promise.reject(new k(`trigger-action:${Si.id}`, "selectedFeature is required", { selectedFeature: d }));
    const { sourceLayer: c } = d;
    return c ? c.remove(d) : i?.graphics.remove(d), Promise.resolve();
  }
  return Promise.resolve();
};
function Ms(t) {
  const { selectedFeature: e, location: i, view: s } = t;
  return s ? e ?? i ?? null : null;
}
function Me(t) {
  return !!t && t.isAggregate && t.sourceLayer?.featureReduction?.type === "cluster";
}
async function ro(t, e) {
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
async function oo(t) {
  const { location: e, selectedFeature: i, view: s, zoomFactor: n } = t, r = Ms(t);
  if (!s || !r) {
    const p = new k("zoom-to:invalid-target-or-view", "Cannot zoom to location without a target and view.", { target: r, view: s });
    throw ht().error(p), p;
  }
  const a = s.scale / n, d = t.selectedFeature?.geometry, c = d ?? e, h = c != null && c.type === "point" && await ro(i, s);
  Ce.active = !0, Ce.disabled = !0;
  try {
    await t.zoomTo({ target: { target: r, scale: h ? a : void 0 } });
  } catch {
    const m = new k("zoom-to:invalid-graphic", "Could not zoom to the location of the graphic.", { graphic: i });
    ht().error(m);
  } finally {
    Ce.active = !1, Ce.disabled = !1, t.zoomToLocation = null, h && (t.location = c);
  }
}
async function ao(t) {
  const { selectedFeature: e, view: i } = t;
  if (i?.type !== "2d") {
    const a = new k("zoomToCluster:invalid-view", "View must be 2d MapView.", { view: i });
    throw ht().error(a), a;
  }
  if (!e || !Me(e)) {
    const a = new k("zoomToCluster:invalid-selectedFeature", "Selected feature must represent an aggregate/cluster graphic.", { selectedFeature: e });
    throw ht().error(a), a;
  }
  const [s, n] = await ti(i, e);
  Se.active = !0, Se.disabled = !0;
  const { extent: r } = await s.queryExtent(n);
  r && await t.zoomTo({ target: r }), Se.active = !1, Se.disabled = !1;
}
async function lo(t) {
  const { view: e, selectedFeature: i } = t;
  if (!e || !i) return;
  const [s, n] = await ti(e, i), { extent: r } = await s.queryExtent(n);
  t.selectedClusterBoundaryFeature.geometry = r, e.graphics.add(t.selectedClusterBoundaryFeature);
}
async function co(t) {
  const { selectedFeature: e, view: i } = t;
  if (!i || !e) return;
  const [s, n] = await ti(i, e);
  ge.active = !0, ge.disabled = !0;
  const { features: r } = await s.queryFeatures(n);
  ge.active = !1, ge.disabled = !1, ge.value = !0, t?.open({ features: [e].concat(r), featureMenuOpen: !0 });
}
async function ti(t, e) {
  const i = await t.whenLayerView(e.sourceLayer), s = i.createQuery(), n = e.getObjectId();
  return s.aggregateIds = n != null ? [n] : [], [i, s];
}
function uo(t) {
  ge.value = !1;
  const e = t.features.filter((i) => Me(i));
  e.length && (t.features = e);
}
const Lt = "location-scale-handle", ho = () => [Ce.clone()], po = () => [Se.clone(), ge.clone()];
let tt = null;
function mo(t, e) {
  return t === "building-scene" || e === "2d" && (t === "map-image" || t === "tile" || t === "imagery" || t === "imagery-tile");
}
let F = class extends an(_s) {
  constructor(t) {
    super(t), this._pendingPromises = new eo(), this._fetchFeaturesController = null, this._highlightSelectedFeaturePromise = null, this._highlightActiveFeaturePromise = null, this._selectedClusterFeature = null, this.actions = new Ae(), this.activeFeature = null, this.autoCloseEnabled = !1, this.browseClusterEnabled = !1, this.content = null, this.defaultPopupTemplateEnabled = !1, this.featurePage = null, this.featuresPerPage = 20, this.featureMenuOpen = !1, this.featureViewModelAbilities = null, this.featureViewModels = [], this.highlightEnabled = !0, this.includeDefaultActions = !0, this.selectedClusterBoundaryFeature = new De({ symbol: new ln({ outline: { width: 1.5, color: "cyan" }, style: "none" }) }), this.title = null, this.updateLocationEnabled = !1, this.view = null, this.visible = !1, this.zoomFactor = 4, this.zoomToLocation = null, this._debouncedLocationUpdate = it(async (e) => {
      const { spatialReference: i } = this, s = this.selectedFeature?.geometry?.type, n = this.location ?? e;
      if (s && s !== "mesh" && i && n && this.selectedFeature) if (s !== "point") try {
        const r = this.selectedFeature;
        let a = r.geometry;
        const d = this._getHighlightLayer(r), c = r.getObjectId();
        if (!d || !this.view) return;
        if (c) {
          const h = this.view?.allLayerViews.find((f) => f.layer.uid === d.uid);
          if (!h || !("queryFeatures" in h)) return;
          const p = h.createQuery();
          p.outSpatialReference = i, p.objectIds = [c], p.returnGeometry = !0;
          const { features: m } = await h.queryFeatures(p);
          a = m[0]?.geometry;
        }
        if (!a || a.type === "mesh") return;
        if (a = dn(a, i), tt || (tt = await import("./geometryEngineAsync-Ce5-6w9d.js")), !await tt.intersects(a, n)) {
          const h = (await tt.nearestCoordinate(a, n)).coordinate ?? n;
          this.selectedFeature === r && (this.location = h);
        }
      } catch (r) {
        Pt(r) || H.getLogger(this).error(r);
      }
      else this.location = Ot(this.selectedFeature.geometry) ?? n;
    });
  }
  initialize() {
    this.addHandles([this.on("view-change", () => this._autoClose()), g(() => [this.highlightEnabled, this.selectedFeature, this.visible, this.view], () => this._highlightSelectedFeature()), g(() => [this.highlightEnabled, this.activeFeature, this.visible, this.view], () => this._highlightActiveFeature()), g(() => this.view?.animation?.state, (t) => this._animationStateChange(t)), g(() => this.location, (t) => this._locationChange(t)), g(() => this.selectedFeature, (t) => this._selectedFeatureChange(t)), g(() => [this.selectedFeatureIndex, this.featureCount, this.featuresPerPage], () => this._selectedFeatureIndexChange()), g(() => [this.featurePage, this.selectedFeatureIndex, this.featureCount, this.featuresPerPage, this.featureViewModels], () => this._setGraphicOnFeatureViewModels()), g(() => this.featureViewModels, () => this._featureViewModelsChange()), this.on("trigger-action", (t) => no({ event: t, viewModel: this, view: this.view })), Ue(() => !this.waitingForResult, () => this._waitingForResultChange(), cn), g(() => [this.features, this.map, this.spatialReference, this.timeZone], () => this._updateFeatureVMs()), g(() => this.view?.scale, () => this._viewScaleChange()), Ue(() => !this.visible, () => this.browseClusterEnabled = !1), g(() => this.browseClusterEnabled, (t) => t ? this.enableClusterBrowsing() : this.disableClusterBrowsing())]);
  }
  destroy() {
    this._cancelFetchingFeatures(), this._pendingPromises.clear(), this.browseClusterEnabled = !1, this.view = null, this.map = null, this.spatialReference = null, this.timeZone = null;
  }
  get active() {
    return !(!this.visible || this.waitingForResult);
  }
  get allActions() {
    const t = this._get("allActions") || new Ae();
    t.removeAll();
    const { actions: e, defaultActions: i, defaultPopupTemplateEnabled: s, includeDefaultActions: n, selectedFeature: r } = this, a = n ? i.concat(e) : e, d = r && (typeof r.getEffectivePopupTemplate == "function" && r.getEffectivePopupTemplate(s) || r.popupTemplate), c = d?.actions;
    return (d?.overwriteActions ? c : c?.concat(a) ?? a)?.filter(Boolean).forEach((p) => t.add(p)), t;
  }
  get defaultActions() {
    const t = this._get("defaultActions") || new Ae();
    return t.removeAll(), t.addMany(Me(this.selectedFeature) ? po() : ho()), t;
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
    const i = this.spatialReference?.isWebMercator;
    t?.spatialReference?.isWGS84 && i && (e = un(t)), this._set("location", e);
  }
  get map() {
    return this.view?.map ?? null;
  }
  set map(t) {
    this._override("map", t);
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
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(t) {
    this._override("spatialReference", t);
  }
  get state() {
    const { view: t, map: e } = this;
    return t ? t.ready ? "ready" : "disabled" : e ? "ready" : "disabled";
  }
  get timeZone() {
    return this.view?.timeZone ?? Xi;
  }
  set timeZone(t) {
    this._overrideIfSome("timeZone", t);
  }
  get waitingForContents() {
    return this.featureViewModels.some((t) => t.waitingForContent);
  }
  get waitingForResult() {
    return !(!(this._fetchFeaturesController || this.pendingPromisesCount > 0) || this.featureCount !== 0);
  }
  centerAtLocation() {
    const { view: t } = this, e = Ms(this);
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
    uo(this), this._clearBrowsedClusterGraphics();
  }
  async enableClusterBrowsing() {
    const { view: t, selectedFeature: e } = this;
    t?.type === "2d" ? Me(e) ? (await lo(this), await co(this)) : H.getLogger(this).warn("enableClusterBrowsing:invalid-selectedFeature: Selected feature must represent an aggregate/cluster graphic.", e) : H.getLogger(this).warn("enableClusterBrowsing:invalid-view: View must be 2d MapView.", e);
  }
  handleViewClick(t) {
    this._fetchFeaturesAndOpen(t);
  }
  _animationStateChange(t) {
    this.zoomToLocation || (Ce.disabled = t === "waiting-for-target");
  }
  _clearBrowsedClusterGraphics() {
    const t = [this.selectedClusterBoundaryFeature, this._selectedClusterFeature].filter(pt);
    this.view?.graphics?.removeMany(t), this._selectedClusterFeature = null, this.selectedClusterBoundaryFeature.geometry = null;
  }
  _viewScaleChange() {
    if (Me(this.selectedFeature)) return this.browseClusterEnabled = !1, this.visible = !1, void this.clear();
    this.browseClusterEnabled && (this.features = this.selectedFeature ? [this.selectedFeature] : []);
  }
  _locationChange(t) {
    const { selectedFeature: e, updateLocationEnabled: i, view: s } = this;
    s && i && t && (!e || e.geometry) && this.centerAtLocation();
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
    const r = ((i - 1) * s + e) % e, a = r + s;
    n.slice(r, a).forEach((d, c) => {
      d && (d.graphic ??= t[r + c]);
    });
  }
  async _selectedFeatureChange(t) {
    const { location: e, updateLocationEnabled: i, view: s } = this;
    if (!t || !s) return;
    if (this.browseClusterEnabled)
      return this._selectedClusterFeature && (s.graphics.remove(this._selectedClusterFeature), this._selectedClusterFeature = null), Me(t) ? void 0 : (t.symbol = await Ni(t), this._selectedClusterFeature = t, void s.graphics.add(this._selectedClusterFeature));
    const n = t.sourceLayer?.type;
    if (n !== "map-image" && n !== "imagery" && n !== "imagery-tile" || (t.symbol = await Ni(t)), !i && e || !t.geometry) {
      if (i && !t.geometry) {
        await this.centerAtLocation();
        const r = s.center?.clone();
        r && (this.location = r);
      }
    } else this.location = Ot(t.geometry);
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
    const { selectedFeature: t, features: e, featureViewModels: i, view: s, spatialReference: n, map: r, timeZone: a, location: d } = this;
    if (Me(t) || (this.browseClusterEnabled = !1), this._destroyFeatureVMs(), !e?.length) return;
    const c = i.slice(0), h = [];
    e.forEach((p, m) => {
      if (!p) return;
      let f = null;
      if (c.some((y, v) => (y && y.graphic === p && (f = y, c.splice(v, 1)), !!f)), f) h[m] = f;
      else {
        const y = new ei({ abilities: this.featureViewModelAbilities, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, spatialReference: n, graphic: p === t ? p : null, location: d, map: r, view: s, timeZone: a });
        h[m] = y;
      }
    }), c.forEach((p) => p && !p.destroyed && p.destroy()), this._set("featureViewModels", h);
  }
  async _getScreenPoint(t, e) {
    const { spatialReference: i, view: s } = this;
    if (!s) return null;
    await s?.when();
    const n = t?.spatialReference;
    return n && i ? (await hn(n, i, null, e), s.toScreen(t)) : null;
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
    this.removeHandles(Lt), this.addHandles([g(() => this.view?.scale, () => this._debouncedLocationUpdate(e).catch((r) => {
      Pt(r) || H.getLogger(this).error(r);
    })), Ue(() => !this.visible, () => {
      this.removeHandles(Lt);
    }, { once: !0 })], Lt);
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
    if (mo(e.type, i)) return t;
    const s = t.getObjectId();
    if (s != null) return s;
    const n = e.type === "imagery" ? void 0 : "objectIdField" in e ? e.objectIdField || to : null, r = t.attributes;
    return r && n && r[n] || t;
  }
  _mapIncludesLayer(t) {
    return !!this.map?.allLayers?.includes(t);
  }
  async _highlightActiveFeature() {
    const t = "highlight-active-feature";
    this.removeHandles(t);
    const { highlightEnabled: e, view: i, activeFeature: s, visible: n } = this;
    if (!(s && i && e && n)) return;
    const r = this._getHighlightLayer(s);
    if (!(r && r instanceof ci && this._mapIncludesLayer(r))) return;
    const a = this._getLayerView(i, r);
    this._highlightActiveFeaturePromise = a;
    const d = await a;
    if (!(d && ui(d) && this._highlightActiveFeaturePromise === a && this.activeFeature && this.highlightEnabled)) return;
    const c = d.highlight(this._getHighlightTarget(s, r, i.type));
    this.addHandles(c, t);
  }
  async _highlightSelectedFeature() {
    const t = "highlight-selected-feature";
    this.removeHandles(t);
    const { selectedFeature: e, highlightEnabled: i, view: s, visible: n } = this;
    if (!(e && s && i && n)) return;
    const r = this._getHighlightLayer(e);
    if (!(r && r instanceof ci && this._mapIncludesLayer(r))) return;
    const a = this._getLayerView(s, r);
    this._highlightSelectedFeaturePromise = a;
    const d = await a;
    if (!(d && ui(d) && this._highlightSelectedFeaturePromise === a && this.selectedFeature && this.highlightEnabled && this.visible)) return;
    const c = d.highlight(this._getHighlightTarget(e, r, s.type));
    this.addHandles(c, t);
  }
  _updateFeatures(t) {
    const { features: e } = this, i = t.filter((s) => !e.includes(s));
    i?.length && (this.features = e.concat(i));
  }
};
o([l()], F.prototype, "_fetchFeaturesController", void 0), o([l({ type: Ae })], F.prototype, "actions", void 0), o([l({ readOnly: !0 })], F.prototype, "active", null), o([l()], F.prototype, "activeFeature", void 0), o([l({ readOnly: !0 })], F.prototype, "allActions", null), o([l()], F.prototype, "autoCloseEnabled", void 0), o([l()], F.prototype, "browseClusterEnabled", void 0), o([l()], F.prototype, "content", void 0), o([l({ type: Ae, readOnly: !0 })], F.prototype, "defaultActions", null), o([l({ type: Boolean })], F.prototype, "defaultPopupTemplateEnabled", void 0), o([l({ readOnly: !0 })], F.prototype, "featureCount", null), o([l()], F.prototype, "featurePage", void 0), o([l({ value: [] })], F.prototype, "features", null), o([l()], F.prototype, "featuresPerPage", void 0), o([l()], F.prototype, "featureMenuOpen", void 0), o([l()], F.prototype, "featureViewModelAbilities", void 0), o([l({ readOnly: !0 })], F.prototype, "featureViewModels", void 0), o([l()], F.prototype, "highlightEnabled", void 0), o([l()], F.prototype, "includeDefaultActions", void 0), o([l({ type: Ht })], F.prototype, "location", null), o([l()], F.prototype, "map", null), o([l({ readOnly: !0 })], F.prototype, "pendingPromisesCount", null), o([l({ readOnly: !0 })], F.prototype, "promiseCount", null), o([l()], F.prototype, "promises", null), o([l({ readOnly: !0 })], F.prototype, "selectedClusterBoundaryFeature", void 0), o([l({ value: null, readOnly: !0 })], F.prototype, "selectedFeature", null), o([l({ value: -1 })], F.prototype, "selectedFeatureIndex", null), o([l({ readOnly: !0 })], F.prototype, "selectedFeatureViewModel", null), o([l({ readOnly: !0 })], F.prototype, "state", null), o([l()], F.prototype, "timeZone", null), o([l()], F.prototype, "title", void 0), o([l()], F.prototype, "updateLocationEnabled", void 0), o([l()], F.prototype, "view", void 0), o([l()], F.prototype, "visible", void 0), o([l({ readOnly: !0 })], F.prototype, "waitingForContents", null), o([l({ readOnly: !0 })], F.prototype, "waitingForResult", null), o([l()], F.prototype, "zoomFactor", void 0), o([l()], F.prototype, "zoomToLocation", void 0), o([l()], F.prototype, "centerAtLocation", null), F = o([P("esri.widgets.Features.FeaturesViewModel")], F);
const ii = F;
let ie = class extends ue {
  constructor() {
    super(...arguments), this.actionBar = !0, this.closeButton = !0, this.collapseButton = !1, this.featureNavigation = !0, this.featureListLayerTitle = !0, this.flow = !0, this.heading = !0, this.spinner = !0;
  }
};
o([l({ type: Boolean, nonNullable: !0 })], ie.prototype, "actionBar", void 0), o([l({ type: Boolean, nonNullable: !0 })], ie.prototype, "closeButton", void 0), o([l({ type: Boolean, nonNullable: !0 })], ie.prototype, "collapseButton", void 0), o([l({ type: Boolean, nonNullable: !0 })], ie.prototype, "featureNavigation", void 0), o([l({ type: Boolean, nonNullable: !0 })], ie.prototype, "featureListLayerTitle", void 0), o([l({ type: Boolean, nonNullable: !0 })], ie.prototype, "flow", void 0), o([l({ type: Boolean, nonNullable: !0 })], ie.prototype, "heading", void 0), o([l({ type: Boolean, nonNullable: !0 })], ie.prototype, "spinner", void 0), ie = o([P("esri.widgets.Features.FeaturesVisibleElements")], ie);
const Fs = ie, Vi = "selected-index", fo = 0, Bi = "features-spinner", go = 50;
function qi(t) {
  return t?.declaredClass.startsWith("esri.layers.") ?? !1;
}
let A = class extends vs(ee) {
  constructor(e, i) {
    super(e, i), this._featureMenuIntersectionObserverCallback = ([s]) => {
      s?.isIntersecting && this.viewModel.featurePage != null && this.viewModel.featurePage++;
    }, this._featureMenuIntersectionObserver = new IntersectionObserver(this._featureMenuIntersectionObserverCallback, { root: window.document }), this._featureMenuIntersectionObserverNode = null, this._focusOn = null, this._spinner = null, this._feature = null, this._relatedRecordsFlowItems = new Be(), this._relatedRecordsWidget = new Jr({ flowItems: this._relatedRecordsFlowItems }), this._rootFlowItemNode = null, this._featureMenuViewportNode = null, this._actionBarMenuNode = null, this.collapsed = !1, this.featureNavigationTop = !1, this.headerActions = new Ae(), this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.responsiveActionsEnabled = !1, this.viewModel = new ii(), this.visibleElements = new Fs(), this._renderAction = (s, n) => {
      const r = this._getActionTitle(s), { type: a, active: d, uid: c, disabled: h, indicator: p } = s;
      return s.visible ? u("calcite-action", { active: a === "toggle" && s.value, appearance: "solid", bind: this, "data-action-uid": c, disabled: h, icon: this._getActionIcon(s), indicator: p, key: `action-${n}`, loading: d, onclick: this._triggerAction, scale: "s", text: r, title: this._hideActionText ? r : void 0 }, this._getFallbackIcon(s)) : null;
    }, this._openFeatureMenu = () => {
      this.featureMenuOpen = !0, this._focusOn = "menu-flow-item";
    }, this._previousFeature = () => {
      this.viewModel.selectedFeatureIndex--;
    }, this._nextFeature = () => {
      this.viewModel.selectedFeatureIndex++;
    }, this._handleFeatureMenuBack = () => {
      this.featureMenuOpen && (this._focusOn = "root-flow-item", this.featureMenuOpen = !1);
    }, this._focusFlowItemNode = (s) => {
      this._focusOn === s && requestAnimationFrame(async () => {
        switch (s) {
          case "menu-flow-item":
            await this._featureMenuViewportNode?.setFocus();
            break;
          case "root-flow-item":
            await this._rootFlowItemNode?.setFocus();
        }
        this._focusOn = null;
      });
    }, this._focusFlowItemNodeThrottled = dt(this._focusFlowItemNode, go), this._displaySpinnerThrottled = dt(() => this._displaySpinner(), fo), this._addSelectedFeatureIndexHandle(), this.addHandles([this._displaySpinnerThrottled, this._focusFlowItemNodeThrottled, g(() => this.viewModel?.active, () => this._toggleScreenLocationEnabled()), g(() => this.viewModel?.active, (s) => this._relatedRecordsWidget.closed = !s), g(() => this.visibleElements?.closeButton, (s) => this._relatedRecordsWidget.closable = s), g(() => this.visibleElements?.spinner, (s) => this._spinnerEnabledChange(s)), g(() => this.viewModel?.view, (s, n) => this._viewChange(s, n)), g(() => this.viewModel?.view?.ready, (s, n) => this._viewReadyChange(s ?? !1, n ?? !1)), g(() => [this.viewModel?.waitingForResult, this.viewModel?.location], () => {
      this._hideSpinner(), this._displaySpinnerThrottled();
    }), g(() => this.viewModel?.screenLocation, () => this._closeOpenActionMenu()), g(() => this.selectedFeatureWidget, () => this._destroyRelatedRecordsFlowItemWidgets()), g(() => {
      const s = this.selectedFeatureWidget?.viewModel;
      return [s?.title, s?.state];
    }, () => this._setTitleFromFeatureWidget()), g(() => {
      const s = this.selectedFeatureWidget?.viewModel;
      return [s?.content, s?.state];
    }, () => this._setContentFromFeatureWidget()), g(() => this.viewModel?.featureViewModels, () => this._featureMenuViewportScrollTop()), this._relatedRecordsWidget.on("close", () => this.close()), this._relatedRecordsWidget.on("exit", () => this._destroyRelatedRecordsFlowItemWidgets()), this._relatedRecordsWidget.on("open-related-feature", ({ feature: s }) => this._openRelatedFeature(s))]);
  }
  loadDependencies() {
    return Le({ action: () => import("./calcite-action-BLs09Cz3.js"), "action-bar": () => import("./calcite-action-bar-Bl0K33fz.js"), "action-group": () => import("./calcite-action-group-CnGf0EX_.js"), button: () => import("./calcite-button-Be_-6v6N.js"), flow: () => import("./calcite-flow-D_OzdQ4C.js"), "flow-item": () => import("./calcite-flow-item-DHNV1vx8.js"), list: () => import("./calcite-list-UxaUJ5pM.js"), "list-item": () => import("./calcite-list-item-D9petAYR.js"), "list-item-group": () => import("./calcite-list-item-group-BB-djXiW.js"), loader: () => import("./calcite-loader-B81-beNl.js") });
  }
  destroy() {
    this._destroyRelatedRecordsFlowItemWidgets(), this._destroySelectedFeatureWidget(), this._destroySpinner(), this._unobserveFeatureMenuObserver(), this._featureMenuIntersectionObserver?.disconnect(), this._relatedRecordsWidget?.destroy();
  }
  get _hideActionText() {
    if (!this.responsiveActionsEnabled) return !1;
    const e = this.view?.widthBreakpoint;
    return e === "xsmall" || e === "small" || e === "medium";
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
  get active() {
    return this.viewModel.active;
  }
  get content() {
    return this.viewModel.content;
  }
  set content(e) {
    this.viewModel.content = e;
  }
  get icon() {
    return null;
  }
  get featureMenuOpen() {
    return this.viewModel.featureMenuOpen;
  }
  set featureMenuOpen(e) {
    this.viewModel.featureMenuOpen = e;
  }
  get features() {
    return this.viewModel.features;
  }
  set features(e) {
    this.viewModel.features = e;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(e) {
    this.viewModel.goToOverride = e;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(e) {
    this.viewModel.location = e;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e) {
    this._overrideIfSome("label", e);
  }
  get map() {
    return this.viewModel.map;
  }
  set map(e) {
    this.viewModel.map = e;
  }
  get promises() {
    return this.viewModel.promises;
  }
  set promises(e) {
    this.viewModel.promises = e;
  }
  get selectedFeature() {
    return this.viewModel.selectedFeature;
  }
  get selectedFeatureIndex() {
    return this.viewModel.selectedFeatureIndex;
  }
  set selectedFeatureIndex(e) {
    this.viewModel.selectedFeatureIndex = e;
  }
  get selectedFeatureWidget() {
    const { _feature: e, headingLevel: i, _relatedRecordsFlowItems: s, timeZone: n, spatialReference: r, map: a } = this, { selectedFeatureViewModel: d } = this.viewModel, c = { title: !1 };
    return d ? (e ? (e.viewModel = d, e.visibleElements = c) : this._feature = new Yr({ flowItems: s, headingLevel: i + 1, timeZone: n, spatialReference: r, map: a, viewModel: d, visibleElements: c }), this._feature) : null;
  }
  get spatialReference() {
    return this.viewModel.spatialReference;
  }
  set spatialReference(e) {
    this.viewModel.spatialReference = e;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e) {
    this.viewModel.title = e;
  }
  get timeZone() {
    return this.viewModel.timeZone;
  }
  set timeZone(e) {
    this.viewModel.timeZone = e;
  }
  get updateLocationEnabled() {
    return this.viewModel.updateLocationEnabled;
  }
  set updateLocationEnabled(e) {
    this.viewModel.updateLocationEnabled = e;
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
  blur() {
    const { active: e } = this.viewModel;
    e ? this._rootFlowItemNode?.blur() : H.getLogger(this).warn("Features can only be blurred when currently active.");
  }
  clear() {
    return this.viewModel.clear();
  }
  close() {
    this.viewModel.visible = !1;
  }
  fetchFeatures(e, i) {
    return this.viewModel.fetchFeatures(e, i);
  }
  focus() {
    const { active: e } = this.viewModel;
    e ? this._setFocusOn() : H.getLogger(this).warn("Features can only be focused when currently active.");
  }
  next() {
    return this.viewModel.next();
  }
  open(e) {
    this.removeHandles(Vi);
    const i = { collapsed: e?.collapsed ?? !1 };
    this.set(i), this.viewModel.open(e), this.addHandles(Ue(() => !this.viewModel.waitingForResult, () => this._addSelectedFeatureIndexHandle(), { once: !0 }));
  }
  previous() {
    return this.viewModel.previous();
  }
  triggerAction(e) {
    return this.viewModel.triggerAction(e);
  }
  render() {
    return u("div", { bind: this, class: this.classes(D.base, I.widget, I.panel), onkeydown: this._onMainKeydown }, this._renderHeader(), this._renderContentContainer());
  }
  _renderFeatureNavigation() {
    return [this._renderPagination(), this._renderFeatureMenuButton()];
  }
  _renderHeader() {
    return !this.featureMenuOpen && this.featureNavigationTop && this._featureNavigationVisible ? u("div", { class: D.header, key: "header-actions" }, this._renderFeatureNavigation()) : null;
  }
  _renderFooter() {
    return this.featureMenuOpen || this.featureNavigationTop || !this._featureNavigationVisible ? null : u("div", { class: D.footer, key: "footer-actions", slot: "footer" }, this._renderFeatureNavigation());
  }
  _renderFeatureMenuButton() {
    const { messages: e, viewModel: i } = this, { featureCount: s, selectedFeatureIndex: n, pendingPromisesCount: r } = i;
    return u("calcite-action", { appearance: "solid", bind: this, icon: "list", key: "feature-menu-button", label: e.selectFeature, loading: r > 0, onclick: this._openFeatureMenu, scale: "s", text: re(e.pageText, { index: $e(n + 1), total: $e(s) }), textEnabled: !0, title: e.selectFeature });
  }
  _renderPagination() {
    const { previous: e, next: i } = this.messagesCommon.pagination;
    return u("calcite-action-bar", { class: D.paginationActionBar, expandDisabled: !0, key: "pagination-action-bar", layout: "horizontal", overflowActionsDisabled: !0, scale: "s" }, u("calcite-action-group", { scale: "s" }, u("calcite-action", { appearance: "solid", class: D.paginationPrevious, icon: "chevron-left", iconFlipRtl: !0, label: e, onclick: this._previousFeature, scale: "s", text: e, title: e }), u("calcite-action", { appearance: "solid", icon: "chevron-right", iconFlipRtl: !0, label: i, onclick: this._nextFeature, scale: "s", text: i, title: i })));
  }
  _renderFeatureMenuItem(e) {
    const { selectedFeatureViewModel: i, featureViewModels: s } = this.viewModel, n = e === i, r = s.indexOf(e);
    return u("calcite-list-item", { bind: this, "data-feature-index": r, key: `feature-menu-item-${e.uid}`, onblur: this._removeActiveFeature, onfocus: this._setActiveFeature, onmouseleave: this._removeActiveFeature, onmouseover: this._setActiveFeature, selected: n, onCalciteListItemSelect: this._selectFeature }, u("span", { innerHTML: e.title || this.messagesCommon.untitled, slot: "content" }));
  }
  _groupResultsByLayer() {
    const { featureViewModels: e } = this.viewModel, i = /* @__PURE__ */ new Map();
    return e.forEach((s) => {
      const n = s?.graphic;
      if (!n) return;
      const { layer: r, sourceLayer: a } = n, d = (qi(r) ? r : null) || (qi(a) ? a : null), c = i.get(d) ?? [];
      i.set(d, [...c, s]);
    }), i;
  }
  _renderFeatureMenu() {
    const { featureViewModels: e } = this.viewModel, i = this._groupResultsByLayer();
    return e.length ? u("calcite-list", { selectionAppearance: "icon", selectionMode: "single" }, Array.from(i.keys(), (s) => {
      const n = i.get(s)?.map((a) => this._renderFeatureMenuItem(a)), r = s ? s.title ?? this.messagesCommon.untitled : null;
      return this.visibleElements.featureListLayerTitle && r !== null ? u("calcite-list-item-group", { heading: r, key: s?.uid || "map-graphics" }, n) : n;
    })) : null;
  }
  _renderHeaderAction(e, i) {
    const s = e.title || "";
    return e.visible ? u("calcite-action", { active: e.type === "toggle" && e.value, appearance: "solid", bind: this, "data-action-uid": e.uid, disabled: e.disabled, icon: e.icon ?? void 0, indicator: e.indicator, key: `header-action-${i}`, loading: e.active, onclick: this._triggerHeaderAction, slot: "header-actions-end", text: s, title: s }) : null;
  }
  _renderHeaderActions() {
    return this.headerActions.map((e, i) => this._renderHeaderAction(e, i)).toArray();
  }
  _renderContentFeature() {
    const { headingLevel: e, visibleElements: i, _isCollapsed: s, _collapseEnabled: n, featureNavigationTop: r } = this, { title: a, active: d } = this.viewModel, c = i.heading && a ? a : "";
    return u("calcite-flow-item", { afterCreate: this._storeRootFlowItemNode, afterUpdate: this._focusRootFlowItemNode, bind: this, class: this.classes({ [D.contentFeature]: !0, [D.flowItemCollapsed]: s }), closable: i.closeButton, closed: !d, collapsed: s, collapseDirection: r ? "down" : "up", collapsible: n, headingLevel: e, key: "root-flow-item", onCalciteFlowItemClose: this.close, onCalciteFlowItemToggle: this._handleCollapseToggle }, c ? u(Yt, { class: this.classes(D.featuresHeading, I.heading), innerHTML: c, key: "header-content", level: this.headingLevel, slot: "header-content" }) : null, this._renderHeaderActions(), this._renderActionBar(), s ? null : u("div", { class: this.classes(D.container, D.contentContainer) }, this._renderContent()), this._renderFooter());
  }
  _renderFeatureMenuContainer() {
    const { viewModel: e, featureMenuOpen: i, messages: s, messagesCommon: n } = this, { active: r, featureViewModels: a, pendingPromisesCount: d } = e;
    return i ? u("calcite-flow-item", { afterCreate: this._storeFeatureMenuFlowItemNode, afterUpdate: this._focusFeatureMenuFlowItemNode, bind: this, closable: !1, closed: !r, description: re(s.total, { total: a.length }), heading: s.selectFeature, key: "feature-menu", loading: e.waitingForContents, onCalciteFlowItemBack: (c) => {
      c.preventDefault(), this._handleFeatureMenuBack();
    } }, d > 0 ? u("calcite-loader", { class: D.loader, inline: !0, key: "feature-menu-loader", label: n.loading, slot: "header-actions-end" }) : null, u("div", { class: D.container }, this._renderFeatureMenu()), u("div", { afterCreate: this._featureMenuIntersectionObserverCreated, bind: this, class: D.featureMenuObserver }), u("calcite-button", { appearance: "transparent", onclick: this._handleFeatureMenuBack, slot: "footer-actions", width: "full" }, n.back)) : null;
  }
  _renderContentContainer() {
    const e = [this._renderContentFeature(), this._renderFeatureMenuContainer(), this._relatedRecordsWidget.render()];
    return this.visibleElements.flow ? u("calcite-flow", { key: "content-container" }, e) : e;
  }
  _getFallbackIcon(e) {
    const { className: i, icon: s } = e;
    if (s) return null;
    const n = gn({ action: e, feature: this.selectedFeature }), r = { [D.icon]: !!i, [D.actionImage]: !!n };
    return i && (r[i] = !0), n || i ? u("span", { "aria-hidden": "true", class: this.classes(D.icon, r), key: "icon", styles: fn(n) }) : null;
  }
  _renderActionBar() {
    return !this._isCollapsed && this.visibleElements.actionBar && this.viewModel.allActions?.length ? u("calcite-action-bar", { expandDisabled: !0, expanded: !this._hideActionText, key: "header-action-bar", scale: "s", slot: "action-bar" }, u("calcite-action-group", { afterCreate: (e) => this._actionBarMenuNode = e, overlayPositioning: "fixed", scale: "s" }, this._renderActions())) : null;
  }
  _renderActions() {
    return this.viewModel.allActions.toArray().map(this._renderAction);
  }
  _renderContent() {
    const e = this.viewModel?.content;
    return e ? typeof e == "string" ? u("div", { class: N.contentNode, innerHTML: e, key: e }) : this.renderNodeContent(e) : null;
  }
  _setFocusOn() {
    this.renderNow(), requestAnimationFrame(() => {
      this._focusOn = this.featureMenuOpen ? "menu-flow-item" : "root-flow-item";
    });
  }
  _handleCollapseToggle() {
    this.collapsed = !this.collapsed;
  }
  async _openRelatedFeature(e) {
    await e.viewModel.updateGeometry();
    const i = e.graphic, s = i?.geometry;
    if (s == null || i == null) return;
    this._destroyRelatedRecordsFlowItemWidgets(), await this.viewModel.zoomTo({ target: s });
    const n = Ot(s);
    this.open({ features: [i], location: n ?? void 0 });
  }
  _focusRootFlowItemNode() {
    this._focusFlowItemNodeThrottled("root-flow-item");
  }
  _focusFeatureMenuFlowItemNode() {
    this._focusFlowItemNodeThrottled("menu-flow-item");
  }
  _storeRootFlowItemNode(e) {
    this._rootFlowItemNode = e, this._focusFlowItemNodeThrottled("root-flow-item");
  }
  _storeFeatureMenuFlowItemNode(e) {
    this._featureMenuViewportNode = e, this._focusFlowItemNodeThrottled("menu-flow-item");
  }
  _setActiveFeature(e) {
    const { viewModel: i } = this, s = e.currentTarget["data-feature-index"];
    i.activeFeature = i.features?.[s] || null;
  }
  _removeActiveFeature() {
    this.viewModel.activeFeature = null;
  }
  _selectFeature(e) {
    const i = e.currentTarget["data-feature-index"];
    isNaN(i) || (this.viewModel.selectedFeatureIndex = i), this._handleFeatureMenuBack();
  }
  _unobserveFeatureMenuObserver() {
    this._featureMenuIntersectionObserverNode && this._featureMenuIntersectionObserver.unobserve(this._featureMenuIntersectionObserverNode);
  }
  _featureMenuIntersectionObserverCreated(e) {
    this._unobserveFeatureMenuObserver(), this._featureMenuIntersectionObserver.observe(e), this._featureMenuIntersectionObserverNode = e;
  }
  _getActionIcon(e) {
    return e.icon ? e.icon : e.image || e.className ? void 0 : "question";
  }
  _getActionTitle(e) {
    const { messages: i, selectedFeature: s, messagesCommon: n } = this, { id: r } = e, a = s?.attributes, d = e.title ?? "", c = r === "zoom-to-feature" ? re(d, { messages: i }) : r === "remove-selected-feature" ? re(d, { messages: n }) : r === "zoom-to-clustered-features" || r === "browse-clustered-features" ? re(d, { messages: i }) : e.title;
    return c && a ? re(c, a) : c ?? "";
  }
  _onMainKeydown(e) {
    const { key: i } = e;
    i === "ArrowLeft" && (e.stopPropagation(), this._handleFeatureMenuBack(), this.previous()), i === "ArrowRight" && (e.stopPropagation(), this._handleFeatureMenuBack(), this.next());
  }
  _featureMenuViewportScrollTop() {
    this._featureMenuViewportNode && this._featureMenuViewportNode.scrollContentTo({ top: 0 });
  }
  _setContentFromFeatureWidget() {
    const { selectedFeatureWidget: e } = this;
    e && (this.viewModel.content = e);
  }
  _setTitleFromFeatureWidget() {
    const { selectedFeatureWidget: e, messagesCommon: i } = this, s = e?.viewModel;
    e && (this.viewModel.title = s?.state === "error" ? i?.errorMessage : s?.title || "");
  }
  _addSelectedFeatureIndexHandle() {
    const e = g(() => this.viewModel?.selectedFeatureIndex, (i, s) => this._selectedFeatureIndexUpdated(i, s));
    this.addHandles(e, Vi);
  }
  _selectedFeatureIndexUpdated(e, i) {
    const { featureCount: s } = this.viewModel;
    s && e !== i && e !== -1 && (this._destroyRelatedRecordsFlowItemWidgets(), this._rootFlowItemNode && this._rootFlowItemNode.scrollContentTo({ top: 0 }));
  }
  _triggerHeaderAction(e) {
    const i = e.currentTarget;
    if (i.disabled) return;
    const s = i.dataset.actionUid, n = this.headerActions.find(({ uid: r }) => r === s);
    n && !n.disabled && (n?.type === "toggle" && (n.value = !n.value), this.emit("trigger-header-action", { action: n }));
  }
  _triggerAction(e) {
    const i = e.currentTarget;
    if (i.disabled) return;
    const s = i.dataset.actionUid, { allActions: n } = this.viewModel, r = n.findIndex((d) => d.uid === s), a = n.at(r);
    a && a.type === "toggle" && (a.value = !a.value), this.viewModel.triggerAction(r);
  }
  _createSpinner(e) {
    e && (this._spinner = new Kr({ view: e }), e.ui.add(this._spinner, { key: Bi, position: "manual", internal: !0 }));
  }
  _wireUpView(e) {
    this._destroySpinner(), e && this.visibleElements?.spinner && this._createSpinner(e);
  }
  _hideSpinner() {
    const { _spinner: e } = this;
    e && (e.location = null, e.hide());
  }
  _viewReadyChange(e, i) {
    e ? this._wireUpView(this.viewModel?.view) : i && this.viewModel.clear();
  }
  _viewChange(e, i) {
    e && i && this.viewModel.clear();
  }
  _destroySelectedFeatureWidget() {
    const { _feature: e } = this;
    e && (e.viewModel = null, !e.destroyed && e.destroy()), this._feature = null;
  }
  _closeOpenActionMenu() {
    const { _actionBarMenuNode: e } = this;
    e && (e.menuOpen = !1);
  }
  _destroyRelatedRecordsFlowItemWidgets() {
    this._relatedRecordsFlowItems.drain((e) => {
      "showAllEnabled" in e.viewModel && (e.viewModel.showAllEnabled = !1), e.viewModel = null, e.destroy();
    });
  }
  _toggleScreenLocationEnabled() {
    const { viewModel: e } = this;
    e && (e.screenLocationEnabled = e.active);
  }
  _displaySpinner() {
    const { _spinner: e } = this;
    if (!e) return;
    const { location: i, waitingForResult: s } = this.viewModel;
    s && i ? e.show({ location: i }) : e.hide();
  }
  _destroySpinner() {
    const { _spinner: e, view: i } = this;
    e && (i?.ui?.remove(e, Bi), e.destroy(), this._spinner = null);
  }
  _spinnerEnabledChange(e) {
    this._destroySpinner(), e && this._createSpinner(this.viewModel?.view);
  }
};
o([l()], A.prototype, "_focusOn", void 0), o([l()], A.prototype, "_relatedRecordsFlowItems", void 0), o([l()], A.prototype, "_hideActionText", null), o([l()], A.prototype, "_featureNavigationVisible", null), o([l()], A.prototype, "_isCollapsed", null), o([l()], A.prototype, "_collapseEnabled", null), o([l({ readOnly: !0 })], A.prototype, "active", null), o([l()], A.prototype, "collapsed", void 0), o([l()], A.prototype, "content", null), o([l()], A.prototype, "icon", null), o([l()], A.prototype, "featureMenuOpen", null), o([l()], A.prototype, "featureNavigationTop", void 0), o([l()], A.prototype, "features", null), o([l()], A.prototype, "goToOverride", null), o([l({ type: Ae })], A.prototype, "headerActions", void 0), o([l()], A.prototype, "headingLevel", void 0), o([l()], A.prototype, "location", null), o([l()], A.prototype, "label", null), o([l()], A.prototype, "map", null), o([l(), J("esri/widgets/Features/t9n/Features")], A.prototype, "messages", void 0), o([l(), J("esri/t9n/common")], A.prototype, "messagesCommon", void 0), o([l()], A.prototype, "promises", null), o([l()], A.prototype, "responsiveActionsEnabled", void 0), o([l({ readOnly: !0 })], A.prototype, "selectedFeature", null), o([l()], A.prototype, "selectedFeatureIndex", null), o([l({ readOnly: !0 })], A.prototype, "selectedFeatureWidget", null), o([l()], A.prototype, "spatialReference", null), o([l()], A.prototype, "title", null), o([l()], A.prototype, "timeZone", null), o([l()], A.prototype, "updateLocationEnabled", null), o([l()], A.prototype, "view", null), o([l({ type: ii }), hs(["triggerAction", "trigger-action"])], A.prototype, "viewModel", void 0), o([l({ type: Fs, nonNullable: !0 })], A.prototype, "visibleElements", void 0), o([l()], A.prototype, "visible", null), A = o([P("esri.widgets.Features")], A);
const yo = A, K = "esri-popup", ve = `${K}--is-docked`, S = { base: K, baseHidden: `${K}--hidden`, main: `${K}__main-container`, shadow: `${K}--shadow`, isDocked: ve, isDockedTopLeft: `${ve}-top-left`, isDockedTopCenter: `${ve}-top-center`, isDockedTopRight: `${ve}-top-right`, isDockedBottomLeft: `${ve}-bottom-left`, isDockedBottomCenter: `${ve}-bottom-center`, isDockedBottomRight: `${ve}-bottom-right`, alignTopCenter: `${K}--aligned-top-center`, alignBottomCenter: `${K}--aligned-bottom-center`, alignTopLeft: `${K}--aligned-top-left`, alignBottomLeft: `${K}--aligned-bottom-left`, alignTopRight: `${K}--aligned-top-right`, alignBottomRight: `${K}--aligned-bottom-right`, pointer: `${K}__pointer`, pointerDirection: `${K}__pointer-direction` };
let qt = class extends ii {
  constructor(t) {
    super(t);
  }
};
qt = o([P("esri.widgets.Popup.PopupViewModel")], qt);
const Is = qt;
let ne = class extends ue {
  constructor() {
    super(...arguments), this.actionBar = !0, this.closeButton = !0, this.collapseButton = !0, this.featureNavigation = !0, this.featureListLayerTitle = !0, this.heading = !0, this.spinner = !0;
  }
};
o([l({ type: Boolean, nonNullable: !0 })], ne.prototype, "actionBar", void 0), o([l({ type: Boolean, nonNullable: !0 })], ne.prototype, "closeButton", void 0), o([l({ type: Boolean, nonNullable: !0 })], ne.prototype, "collapseButton", void 0), o([l({ type: Boolean, nonNullable: !0 })], ne.prototype, "featureNavigation", void 0), o([l({ type: Boolean, nonNullable: !0 })], ne.prototype, "featureListLayerTitle", void 0), o([l({ type: Boolean, nonNullable: !0 })], ne.prototype, "heading", void 0), o([l({ type: Boolean, nonNullable: !0 })], ne.prototype, "spinner", void 0), ne = o([P("esri.widgets.Popup.PopupVisibleElements")], ne);
const Dt = ne, Di = { buttonEnabled: !0, position: "auto", breakpoint: { width: 544 } };
let $ = class extends ee {
  constructor(t, e) {
    super(t, e), this._dockAction = new Ge({ id: "popup-dock-action" }), this._featuresWidget = new yo({ responsiveActionsEnabled: !0 }), this._containerNode = null, this._mainContainerNode = null, this._pointerOffsetInPx = 16, this.alignment = "auto", this.dockEnabled = !1, this.headingLevel = 2, this.messages = null, this.viewModel = new Is(), this.visibleElements = new Dt();
  }
  initialize() {
    this.addHandles([g(() => [this.viewModel?.view?.widthBreakpoint, this.dockEnabled], () => this._handleDockIcon(), L), g(() => [this.dockEnabled, this.messages?.undock, this.messages?.dock], () => this._handleDockEnabled(), L), g(() => this.dockOptions, (t) => {
      const { _dockAction: e } = this, i = this._featuresWidget.headerActions;
      i.remove(e), t.buttonEnabled && i.add(e);
    }, L), g(() => this.viewModel?.screenLocation, () => this._positionContainer()), g(() => [this.viewModel?.active, this.dockEnabled], () => this._toggleScreenLocationEnabled()), g(() => [this.viewModel?.screenLocation, this.viewModel?.view?.padding, this.viewModel?.view?.size, this.viewModel?.active, this.viewModel?.location, this.alignment], () => this.reposition()), g(() => this.viewModel?.view?.size, (t, e) => this._updateDockEnabledForViewSize(t, e)), g(() => this.viewModel?.view, (t, e) => this._viewChange(t, e)), g(() => this.viewModel?.view?.ready, (t, e) => this._viewReadyChange(t ?? !1, e ?? !1)), g(() => this.viewModel, () => this._featuresWidget.viewModel = this.viewModel, L), g(() => this._featureNavigationTop, (t) => this._featuresWidget.featureNavigationTop = t, L), g(() => this.headingLevel, (t) => this._featuresWidget.headingLevel = t, L), g(() => this.visibleElements.actionBar, (t) => this._featuresWidget.visibleElements.actionBar = !!t, L), g(() => this.visibleElements.closeButton, (t) => this._featuresWidget.visibleElements.closeButton = !!t, L), g(() => this.visibleElements.collapseButton, (t) => this._featuresWidget.visibleElements.collapseButton = !!t, L), g(() => this.visibleElements.heading, (t) => this._featuresWidget.visibleElements.heading = !!t, L), g(() => this.visibleElements.spinner, (t) => this._featuresWidget.visibleElements.spinner = !!t, L), g(() => this.visibleElements.featureNavigation, (t) => this._featuresWidget.visibleElements.featureNavigation = !!t, L), g(() => this.visibleElements.featureListLayerTitle, (t) => this._featuresWidget.visibleElements.featureListLayerTitle = !!t, L), Ee(() => this._featuresWidget, "trigger-header-action", (t) => {
      t.action === this._dockAction && (this.dockEnabled = !this.dockEnabled);
    })]);
  }
  normalizeCtorArgs(t) {
    const e = { ...t };
    return t?.visibleElements != null && (e.visibleElements = new Dt(t.visibleElements), t.collapseEnabled != null && (e.visibleElements.collapseButton = t.collapseEnabled), t.spinnerEnabled != null && (e.visibleElements.spinner = t.spinnerEnabled)), e;
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
  get active() {
    return this.viewModel.active;
  }
  get autoCloseEnabled() {
    return this.viewModel.autoCloseEnabled;
  }
  set autoCloseEnabled(t) {
    this.viewModel.autoCloseEnabled = t;
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
  get collapsed() {
    return this._featuresWidget.collapsed;
  }
  set collapsed(t) {
    this._featuresWidget.collapsed = t;
  }
  get collapseEnabled() {
    return Ke(H.getLogger(this), "collapseEnabled", { replacement: "PopupVisibleElements.collapseButton", version: "4.29" }), this.visibleElements.collapseButton;
  }
  set collapseEnabled(t) {
    Ke(H.getLogger(this), "collapseEnabled", { replacement: "PopupVisibleElements.collapseButton", version: "4.29" }), this.visibleElements.collapseButton = t;
  }
  get currentAlignment() {
    return this._getCurrentAlignment();
  }
  get currentDockPosition() {
    return this._getCurrentDockPosition();
  }
  get dockOptions() {
    return this._get("dockOptions") || Di;
  }
  set dockOptions(t) {
    const e = { ...Di }, i = this.viewModel?.view?.breakpoints, s = {};
    i && (s.width = i.xsmall, s.height = i.xsmall);
    const n = { ...e, ...t }, r = { ...e.breakpoint, ...s }, { breakpoint: a } = n;
    typeof a == "object" ? n.breakpoint = { ...r, ...a } : a && (n.breakpoint = r), this._set("dockOptions", n), this._setCurrentDockPosition(), this.reposition();
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
  get icon() {
    return "popup";
  }
  set icon(t) {
    this._overrideIfSome("icon", t);
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
    return Ke(H.getLogger(this), "spinnerEnabled", { replacement: "PopupVisibleElements.spinner", version: "4.29" }), this.visibleElements.spinner;
  }
  set spinnerEnabled(t) {
    Ke(H.getLogger(this), "spinnerEnabled", { replacement: "PopupVisibleElements.spinner", version: "4.29" }), this.visibleElements.spinner = t;
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
    t || H.getLogger(this).warn("Popup can only be blurred when currently active."), this._featuresWidget.blur();
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
    t || H.getLogger(this).warn("Popup can only be focused when currently active."), this.reposition(), requestAnimationFrame(() => {
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
    const { dockEnabled: t, currentAlignment: e, currentDockPosition: i } = this, { active: s, screenLocation: n } = this.viewModel, r = s && t, a = s && !t, d = this.selectedFeature?.layer?.title, c = this.selectedFeature?.layer?.id, h = { [S.alignTopCenter]: e === "top-center", [S.alignBottomCenter]: e === "bottom-center", [S.alignTopLeft]: e === "top-left", [S.alignBottomLeft]: e === "bottom-left", [S.alignTopRight]: e === "top-right", [S.alignBottomRight]: e === "bottom-right", [S.isDocked]: r, [S.shadow]: a, [S.isDockedTopLeft]: i === "top-left", [S.isDockedTopCenter]: i === "top-center", [S.isDockedTopRight]: i === "top-right", [S.isDockedBottomLeft]: i === "bottom-left", [S.isDockedBottomCenter]: i === "bottom-center", [S.isDockedBottomRight]: i === "bottom-right" };
    return u("div", { afterCreate: this._positionContainer, afterUpdate: this._positionContainer, bind: this, class: this.classes(S.base, h, { [S.baseHidden]: !n && !t }), "data-layer-id": c, "data-layer-title": d, role: "presentation" }, s ? [this._renderMainContainer(), this._renderPointer()] : null);
  }
  _renderPointer() {
    return this.dockEnabled ? null : u("div", { class: S.pointer, key: "popup-pointer", role: "presentation" }, u("div", { class: this.classes(S.pointerDirection, S.shadow) }));
  }
  _renderMainContainer() {
    const { dockEnabled: t } = this, e = { [S.shadow]: t };
    return u("div", { afterCreate: this._setMainContainerNode, afterUpdate: this._setMainContainerNode, bind: this, class: this.classes(S.main, I.widget, e) }, this._featuresWidget.render());
  }
  async _shouldFocus(t) {
    t?.shouldFocus && (await pn(() => this.viewModel?.active === !0), this.focus());
  }
  _isOutsideView(t) {
    const { popupHeight: e, popupWidth: i, screenLocation: s, side: n, view: r } = t;
    if (isNaN(i) || isNaN(e) || !r || !s) return !1;
    const a = r.padding;
    return n === "right" && s.x + i / 2 > r.width - a.right || n === "left" && s.x - i / 2 < a.left || n === "top" && s.y - e < a.top || n === "bottom" && s.y + e > r.height - a.bottom;
  }
  _calculateAutoAlignment(t) {
    if (t !== "auto") return t;
    const { _pointerOffsetInPx: e, _containerNode: i, _mainContainerNode: s, viewModel: n } = this, { screenLocation: r, view: a } = n;
    if (r == null || !a || !i) return "top-center";
    function d(w) {
      return parseInt(w.replaceAll(/[^-\d.]/g, ""), 10);
    }
    const c = s ? window.getComputedStyle(s, null) : null, h = c ? d(c.getPropertyValue("max-height")) : 0, p = c ? d(c.getPropertyValue("height")) : 0, { height: m, width: f } = i.getBoundingClientRect(), y = f + e, v = Math.max(m, h, p) + e, _ = this._isOutsideView({ popupHeight: v, popupWidth: y, screenLocation: r, side: "right", view: a }), C = this._isOutsideView({ popupHeight: v, popupWidth: y, screenLocation: r, side: "left", view: a }), M = this._isOutsideView({ popupHeight: v, popupWidth: y, screenLocation: r, side: "top", view: a }), x = this._isOutsideView({ popupHeight: v, popupWidth: y, screenLocation: r, side: "bottom", view: a });
    return C ? M ? "bottom-right" : "top-right" : _ ? M ? "bottom-left" : "top-left" : M ? x ? "top-center" : "bottom-center" : "top-center";
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
    return xe(this.container) && e.reverse(), t?.replace(/leading/gi, e[0]).replaceAll(/trailing/gi, e[1]);
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
    const e = this.viewModel?.view, i = xe(this.container) ? "top-left" : "top-right";
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
    const { padding: a } = i, d = s / 2, c = i.height - e, h = i.width - t;
    return n === "bottom-center" ? { top: e + r - a.top, left: t - d - a.left } : n === "top-left" ? { bottom: c + r - a.bottom, right: h + r - a.right } : n === "bottom-left" ? { top: e + r - a.top, right: h + r - a.right } : n === "top-right" ? { bottom: c + r - a.bottom, left: t + r - a.left } : n === "bottom-right" ? { top: e + r - a.top, left: t + r - a.left } : n === "top-center" ? { bottom: c + r - a.bottom, left: t - d - a.left } : void 0;
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
    const [s, n] = t, [r, a] = e, { width: d = 0, height: c = 0 } = i ?? {};
    return s <= d && r > d || s > d && r <= d || n <= c && a > c || n > c && a <= c;
  }
  _updateDockEnabledForViewSize(t, e) {
    if (!t || !e) return;
    const i = this.viewModel?.view?.padding || { left: 0, right: 0, top: 0, bottom: 0 }, s = i.left + i.right, n = i.top + i.bottom, r = [], a = [];
    r[0] = t[0] - s, r[1] = t[1] - n, a[0] = e[0] - s, a[1] = e[1] - n;
    const { dockOptions: d } = this, c = d.breakpoint;
    this._dockingThresholdCrossed(r, a, c) && this._setDockEnabledForViewSize(d), this._setCurrentDockPosition();
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
    const r = e.hasOwnProperty("width") && s <= (e.width ?? 0), a = e.hasOwnProperty("height") && n <= (e.height ?? 0);
    return r || a;
  }
  _setDockEnabledForViewSize(t) {
    t.breakpoint && (this.dockEnabled = this._shouldDockAtCurrentViewSize(t));
  }
};
o([l({ readOnly: !0 })], $.prototype, "_featureNavigationTop", null), o([l()], $.prototype, "actions", null), o([l({ readOnly: !0 })], $.prototype, "active", null), o([l()], $.prototype, "alignment", void 0), o([l()], $.prototype, "autoCloseEnabled", null), o([l()], $.prototype, "defaultPopupTemplateEnabled", null), o([l()], $.prototype, "content", null), o([l()], $.prototype, "collapsed", null), o([l()], $.prototype, "collapseEnabled", null), o([l({ readOnly: !0 })], $.prototype, "currentAlignment", null), o([l({ readOnly: !0 })], $.prototype, "currentDockPosition", null), o([l()], $.prototype, "dockOptions", null), o([l()], $.prototype, "dockEnabled", void 0), o([l({ readOnly: !0 })], $.prototype, "featureCount", null), o([l()], $.prototype, "featureMenuOpen", null), o([l()], $.prototype, "features", null), o([l()], $.prototype, "goToOverride", null), o([l()], $.prototype, "headingLevel", void 0), o([l()], $.prototype, "highlightEnabled", null), o([l()], $.prototype, "icon", null), o([l()], $.prototype, "location", null), o([l()], $.prototype, "label", null), o([l(), J("esri/widgets/Popup/t9n/Popup")], $.prototype, "messages", void 0), o([l()], $.prototype, "promises", null), o([l({ readOnly: !0 })], $.prototype, "selectedFeature", null), o([l()], $.prototype, "selectedFeatureIndex", null), o([l({ readOnly: !0 })], $.prototype, "selectedFeatureWidget", null), o([l()], $.prototype, "spinnerEnabled", null), o([l()], $.prototype, "title", null), o([l()], $.prototype, "updateLocationEnabled", null), o([l()], $.prototype, "view", null), o([l({ type: Is }), hs(["triggerAction", "trigger-action"])], $.prototype, "viewModel", void 0), o([l()], $.prototype, "visible", null), o([l({ type: Dt, nonNullable: !0 })], $.prototype, "visibleElements", void 0), $ = o([P("esri.widgets.Popup")], $);
const jo = $;
export {
  jo as default
};
//# sourceMappingURL=Popup-BKunjcEE.js.map
