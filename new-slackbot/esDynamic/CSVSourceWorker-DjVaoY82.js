import { d4 as I, cZ as D, s as F, c_ as P, K as j, C as R, I as V, a2 as L, cW as _, b0 as b, cY as A, J as G, at as Q, fO as M, fP as Z, bh as Y, d6 as J, d7 as U, cV as W, o as B } from "./main-BpIyUAdL.js";
import { e as K, n as H } from "./date-CID61X27.js";
import { t as z } from "./json-BI97KiBB.js";
import { m as X } from "./FeatureStore-DVvmpavm.js";
import { x as ee } from "./timeSupport-DEf3Dq37.js";
import { $ as te } from "./QueryEngine-Bxsxlw2I.js";
import { a as ie } from "./number-DfmLl7Hb.js";
import { i as ne, o as se } from "./clientSideDefaults-CCyjexDW.js";
const T = /^\s*"([\S\s]*)"\s*$/, E = /""/g, S = `
`, re = [",", " ", ";", "|", "	"];
function* O(r, i, e) {
  let t = 0;
  for (; t <= r.length; ) {
    const n = r.indexOf(i, t), a = r.substring(t, n > -1 ? n : void 0);
    t += a.length + i.length, e && !a.trim() || (yield a);
  }
}
function $(r) {
  const i = r.includes(`\r
`) ? `\r
` : S;
  return O(r, i, !0);
}
function C(r, i) {
  return O(r, i, !1);
}
function oe(r, i, e) {
  r = r.trim(), i = i?.trim();
  const t = [], n = Array.from(/* @__PURE__ */ new Set([e?.delimiter, ...re])).filter((o) => o != null);
  for (const o of n) {
    const l = w(r, o).length, c = w(i, o).length ?? l;
    l > 1 && t.push({ weight: Math.min(l, c), delimiter: o });
  }
  const a = t.sort(({ weight: o }, { weight: l }) => l - o).map(({ delimiter: o }) => o);
  for (const o of a) {
    const l = ae(v(r, o).names, e?.longitudeField, e?.latitudeField);
    if (l.longitudeFieldName && l.latitudeFieldName) return { delimiter: o, locationInfo: l };
  }
  return { delimiter: a[0], locationInfo: null };
}
function* q(r, i, e, t = () => /* @__PURE__ */ Object.create(null)) {
  const n = $(r);
  n.next();
  let a = "", o = "", l = 0, c = t(), u = 0;
  e: for (const y of n) {
    const f = C(y, e);
    for (const p of f) if (a += o + p, o = "", l += k(p), l % 2 == 0) {
      if (l > 0) {
        const h = T.exec(a);
        if (!h) {
          c = t(), u = 0, a = "", l = 0;
          continue e;
        }
        c[i[u]] = h[1].replaceAll(E, '"'), u++;
      } else c[i[u]] = a, u++;
      a = "", l = 0;
    } else o = e;
    l === 0 ? (yield c, c = t(), u = 0) : o = S;
  }
}
function v(r, i) {
  const e = w(r, i).filter((n) => n != null), t = e.map((n) => I(n));
  for (let n = t.length - 1; n >= 0; n--) t[n] || (t.splice(n, 1), e.splice(n, 1));
  return { names: t, aliases: e };
}
function w(r, i) {
  if (!r?.length) return [];
  const e = [];
  let t = "", n = "", a = 0;
  const o = C(r, i);
  for (const l of o) if (t += n + l, n = "", a += k(l), a % 2 == 0) {
    if (a > 0) {
      const c = T.exec(t);
      c && e.push(c[1].replaceAll(E, '"'));
    } else e.push(t);
    t = "", a = 0;
  } else n = i;
  return e;
}
function k(r) {
  let i = 0, e = 0;
  for (e = r.indexOf('"', e); e >= 0; ) i++, e = r.indexOf('"', e + 1);
  return i;
}
function ae(r, i, e) {
  i = I(i)?.toLowerCase(), e = I(e)?.toLowerCase();
  const t = r.map((o) => o.toLowerCase()), n = i ? r[t.indexOf(i)] : null, a = e ? r[t.indexOf(e)] : null;
  return { longitudeFieldName: n || r[t.indexOf(ue.find((o) => t.includes(o)))], latitudeFieldName: a || r[t.indexOf(de.find((o) => t.includes(o)))] };
}
function le(r, i, e, t, n) {
  const a = [], o = q(r, e, i), l = [];
  for (const c of o) {
    if (l.length === 10) break;
    l.push(c);
  }
  for (let c = 0; c < e.length; c++) {
    const u = e[c], y = t[c];
    if (u === n.longitudeFieldName || u === n.latitudeFieldName) a.push({ name: u, type: "esriFieldTypeDouble", alias: y });
    else {
      let f;
      switch (ce(l.map((p) => p[u]))) {
        case "integer":
          f = "esriFieldTypeInteger";
          break;
        case "double":
          f = "esriFieldTypeDouble";
          break;
        case "date":
          f = "esriFieldTypeDate";
          break;
        default:
          f = "esriFieldTypeString";
      }
      a.push({ name: u, type: f, alias: y, length: D(f) });
    }
  }
  return a;
}
function ce(r) {
  if (!r.length) return "string";
  const i = /[^+\-.,0-9]/;
  return r.map((e) => {
    if (e !== "") {
      if (!i.test(e)) {
        let t = N(e);
        if (!isNaN(t)) return /[.,]/.test(e) || !Number.isInteger(t) || t > 214783647 || t < -214783648 ? "double" : "integer";
        if (e.includes("E") && (t = Number(e), !Number.isNaN(t) || e.includes(",") && (e = e.replace(",", "."), t = Number(e), !Number.isNaN(t))))
          return "double";
      }
      return K(e) ? "date" : "string";
    }
  }).reduce((e, t) => e === void 0 ? t : t === void 0 ? e : e === t ? t : e === "string" || t === "string" ? "string" : e === "double" || t === "double" ? "double" : void 0);
}
const N = function() {
  const r = ie(), i = new RegExp("^" + r.regexp + "$"), e = new RegExp("[" + r.group + "\\s\\xa0]", "g"), t = r.factor;
  return (n) => {
    const a = i.exec(n);
    if (r.factor = t, !a) return NaN;
    let o = a[1];
    if (!a[1]) {
      if (!a[2]) return NaN;
      o = a[2], r.factor *= -1;
    }
    return o = o.replace(e, "").replace(r.decimal, "."), +o * r.factor;
  };
}(), de = ["lat", "latitude", "latitude83", "latdecdeg", "lat_dd", "y", "ycenter", "point_y"], ue = ["lon", "lng", "long", "longitude", "longitude83", "longdecdeg", "long_dd", "x", "xcenter", "point_x"], fe = se("esriGeometryPoint"), me = ["csv"], pe = [0, 0];
class he {
  constructor(i, e) {
    this.x = i, this.y = e;
  }
}
class Te {
  constructor() {
    this._queryEngine = null, this._snapshotFeatures = async (i) => {
      const e = await this._fetch(i);
      return this._createFeatures(e);
    };
  }
  destroy() {
    this._queryEngine?.destroy(), this._queryEngine = null;
  }
  async load(i, e = {}) {
    this._loadOptions = i;
    const [t] = await Promise.all([this._fetch(e.signal), this._checkProjection(i?.parsingOptions?.spatialReference)]), n = ye(t, i);
    this._locationInfo = n.locationInfo, this._delimiter = n.delimiter, this._queryEngine = this._createQueryEngine(n);
    const a = await this._createFeatures(t);
    this._queryEngine.featureStore.addMany(a);
    const { fullExtent: o, timeExtent: l } = await this._queryEngine.fetchRecomputedExtents();
    if (n.layerDefinition.extent = o, l) {
      const { start: c, end: u } = l;
      n.layerDefinition.timeInfo.timeExtent = [c, u];
    }
    return n;
  }
  async applyEdits() {
    throw new F("csv-layer:editing-not-supported", "applyEdits() is not supported on CSVLayer");
  }
  async queryFeatures(i = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(i, e.signal);
  }
  async queryFeatureCount(i = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(i, e.signal);
  }
  async queryObjectIds(i = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForIds(i, e.signal);
  }
  async queryExtent(i = {}, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(i, e.signal);
  }
  async querySnapping(i, e = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForSnapping(i, e.signal);
  }
  async refresh(i) {
    this._loadOptions.customParameters = i, this._snapshotTask?.abort(), this._snapshotTask = P(this._snapshotFeatures), this._snapshotTask.promise.then((n) => {
      this._queryEngine.featureStore.clear(), n && this._queryEngine.featureStore.addMany(n);
    }, (n) => {
      this._queryEngine.featureStore.clear(), j(n) || R.getLogger("esri.layers.CSVLayer").error(new F("csv-layer:refresh", "An error occurred during refresh", { error: n }));
    }), await this._waitSnapshotComplete();
    const { fullExtent: e, timeExtent: t } = await this._queryEngine.fetchRecomputedExtents();
    return { extent: e, timeExtent: t };
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
  async _fetch(i) {
    const { url: e, customParameters: t } = this._loadOptions;
    if (!e) throw new F("csv-layer:invalid-source", "url not defined");
    const n = V(e);
    return (await L(n.path, { query: { ...n.query, ...t }, responseType: "text", signal: i })).data;
  }
  _createQueryEngine(i) {
    const { objectIdField: e, fields: t, extent: n, timeInfo: a } = i.layerDefinition, o = new X({ geometryType: "esriGeometryPoint", hasM: !1, hasZ: !1 });
    return new te({ fieldsIndex: _.fromLayerJSON({ fields: t, dateFieldsTimeReference: { timeZoneIANA: b } }), geometryType: "esriGeometryPoint", hasM: !1, hasZ: !1, timeInfo: a, objectIdField: e, spatialReference: n.spatialReference || { wkid: 4326 }, cacheSpatialQueries: !0, featureStore: o });
  }
  async _createFeatures(i) {
    const { latitudeFieldName: e, longitudeFieldName: t } = this._locationInfo, { objectIdField: n, fieldsIndex: a, spatialReference: o } = this._queryEngine;
    let l = [];
    const c = [], u = a.fields.filter((s) => s.name !== n).map((s) => s.name);
    let y = 0;
    const f = {};
    for (const s of a.fields) if (s.type !== "esriFieldTypeOID" && s.type !== "esriFieldTypeGlobalID") {
      const d = A(s);
      d !== void 0 && (f[s.name] = d);
    }
    const p = q(i, u, this._delimiter, ne(f, n));
    for (const s of p) {
      const d = this._parseCoordinateValue(s[e]), g = this._parseCoordinateValue(s[t]);
      if (g != null && d != null && !isNaN(d) && !isNaN(g)) {
        s[e] = d, s[t] = g;
        for (const m in s) if (m !== e && m !== t) {
          if (a.isDateField(m)) s[m] = H(s[m]);
          else if (a.isNumericField(m)) {
            const x = N(s[m]);
            isNaN(x) ? s[m] = null : s[m] = x;
          }
        }
        s[n] = y, y++, l.push(new he(g, d)), c.push(s);
      }
    }
    if (!G({ wkid: 4326 }, o)) if (Q(o)) for (const s of l) [s.x, s.y] = M(s.x, s.y, pe);
    else l = Z(z, l, Y.WGS84, o, null, null);
    const h = [];
    for (let s = 0; s < l.length; s++) {
      const { x: d, y: g } = l[s], m = c[s];
      m[n] = s + 1, h.push(new J(new U([], [d, g]), m, null, m[n]));
    }
    return h;
  }
  _parseCoordinateValue(i) {
    if (i == null || i === "") return null;
    let e = N(i);
    return (isNaN(e) || Math.abs(e) > 181) && (e = parseFloat(i)), e;
  }
  async _checkProjection(i) {
    try {
      await ee(W, i);
    } catch {
      throw new F("csv-layer:projection-not-supported", "Projection not supported");
    }
  }
}
function ye(r, i) {
  const e = i.parsingOptions || {}, t = { delimiter: e.delimiter, layerDefinition: null, locationInfo: { latitudeFieldName: e.latitudeField, longitudeFieldName: e.longitudeField } }, n = t.layerDefinition = { name: B(i.url, me) || "csv", dateFieldsTimeReference: { timeZoneIANA: b }, drawingInfo: fe, geometryType: "esriGeometryPoint", objectIdField: null, fields: [], timeInfo: e.timeInfo, extent: { xmin: Number.POSITIVE_INFINITY, ymin: Number.POSITIVE_INFINITY, xmax: Number.NEGATIVE_INFINITY, ymax: Number.NEGATIVE_INFINITY, spatialReference: e.spatialReference || { wkid: 4326 } } }, a = $(r), o = a.next().value?.trim(), l = a.next().value?.trim();
  if (!o) throw new F("csv-layer:empty-csv", "CSV is empty", { csv: r });
  const { delimiter: c, locationInfo: u } = oe(o, l, e);
  if (!c) throw new F("csv-layer:invalid-delimiter", "Unable to detect the delimiter from CSV", { firstLine: o, secondLine: l, parsingOptions: e });
  if (!u) throw new F("csv-layer:location-fields-not-found", "Unable to identify latitude and longitude fields from the CSV file", { firstLine: o, secondLine: l, parsingOptions: e });
  t.locationInfo = u, t.delimiter = c;
  const { names: y, aliases: f } = v(o, c), p = le(r, t.delimiter, y, f, t.locationInfo);
  if (e.fields?.length) {
    const s = new _(e.fields);
    for (const d of p) {
      const g = s.get(d.name);
      g && Object.assign(d, g);
    }
  }
  if (!p.some((s) => s.type === "esriFieldTypeOID" && (n.objectIdField = s.name, !0))) {
    const s = { name: "__OBJECTID", alias: "__OBJECTID", type: "esriFieldTypeOID", editable: !1, nullable: !1 };
    n.objectIdField = s.name, p.unshift(s);
  }
  n.fields = p;
  const h = new _(n.fields);
  if (t.locationInfo && (t.locationInfo.latitudeFieldName = h.get(t.locationInfo.latitudeFieldName).name, t.locationInfo.longitudeFieldName = h.get(t.locationInfo.longitudeFieldName).name), n.timeInfo) {
    const s = n.timeInfo;
    if (s.startTimeField) {
      const d = h.get(s.startTimeField);
      d ? (s.startTimeField = d.name, d.type = "esriFieldTypeDate") : s.startTimeField = null;
    }
    if (s.endTimeField) {
      const d = h.get(s.endTimeField);
      d ? (s.endTimeField = d.name, d.type = "esriFieldTypeDate") : s.endTimeField = null;
    }
    if (s.trackIdField) {
      const d = h.get(s.trackIdField);
      s.trackIdField = d ? d.name : null;
    }
    s.startTimeField || s.endTimeField || (n.timeInfo = null);
  }
  return t;
}
export {
  Te as default
};
//# sourceMappingURL=CSVSourceWorker-DjVaoY82.js.map
