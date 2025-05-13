import { af as Ae, lV as Oe, lW as Ee, Y as Pe, gP as qe, f5 as x, lX as je, aa as oe, ab as ue, s as Ge, bh as te, eM as Ue, i9 as Be, ap as P, cW as Me, dH as G, ej as Ce, lY as De, lZ as de, en as R, cC as We, a2 as j, eK as $e, f6 as he, a3 as ce, l_ as Ve, l$ as Qe, gs as Ze, eJ as ze, fM as fe, a0 as Je } from "./main-DIdq27YS.js";
import { aw as ie, ax as b, K as Ke, an as v, ao as pe, ap as _e, aq as ye, ar as ge, as as me, aD as M, aE as se, aF as Xe, aG as K, N as Ye, aH as He, aI as W, aJ as et } from "./arcadeUtils-CcjZQgQz.js";
import { x as D, s as I, a as C, n as N, t as L, r as tt } from "./WhereClause-jAGgc-en.js";
import { x as O, t as g, g as E, m as $, a as T, y as it, L as st, w as J, E as we, T as Fe, S as Se, F as at, v as Te, p as rt, D as V, I as nt, d as q, b as lt, f as ot, c as m } from "./SpatialFilter-DU93dmyw.js";
import { c as ut, a as dt, n as ht } from "./TimeOnly-BP0rUekP.js";
import Re from "./SubtypeGroupLayer-YvvOsVgR.js";
async function ct(d, e, t, i) {
  return _t(e, await ft(d, e, t, i), t, i);
}
async function ft(d, e, t, i) {
  const s = { ...i }, a = yt(e, t), r = e.outStatistics?.[0] != null, n = Ae("featurelayer-pbf-statistics"), l = !r || n;
  let u;
  if (t?.format === "pbf" && l) try {
    u = await Oe(d, a, s);
  } catch (o) {
    if (o.name !== "query:parsing-pbf") throw o;
    t.format = "json";
  }
  return t?.format !== "json" && l || (u = await Ee(d, a, s)), pt(t?.fieldsIndex, u.fields), u;
}
function pt(d, e) {
  if (d != null && e != null) for (const t of e) {
    const i = d.get(t.name);
    i && Object.assign(t, i.toJSON());
  }
}
async function _t(d, e, t, i) {
  const s = t?.infoFor3D;
  if (!ke(d, s) || s == null || !e.assetMaps || !e.features?.length) return Pe.fromJSON(e);
  const { meshFeatureSetFromJSON: a } = await qe(import("./meshFeatureSet-CLmmbVBA.js"), i);
  return a(d, s, e);
}
function yt(d, e) {
  let t = x.from(d);
  t.sourceSpatialReference = t.sourceSpatialReference ?? e?.sourceSpatialReference ?? null, (e?.gdbVersion || e?.dynamicDataSource) && (t = t === d ? t.clone() : t, t.gdbVersion = d.gdbVersion || e.gdbVersion, t.dynamicDataSource = d.dynamicDataSource ? je.from(d.dynamicDataSource) : e.dynamicDataSource);
  const i = e?.infoFor3D;
  if (i != null && ke(d, i)) {
    t = t === d ? t.clone() : t, t.formatOf3DObjects = null;
    const { supportedFormats: s, queryFormats: a } = i, r = oe("model/gltf-binary", s) ?? ue("glb", s), n = oe("model/gltf+json", s) ?? ue("gtlf", s);
    for (const l of a) {
      if (l === r) {
        t.formatOf3DObjects = l;
        break;
      }
      l !== n || t.formatOf3DObjects || (t.formatOf3DObjects = l);
    }
    if (!t.formatOf3DObjects) throw new Ge("query:unsupported-3d-query-formats", "Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");
    if (t.outFields == null || !t.outFields.includes("*")) {
      t = t === d ? t.clone() : t, t.outFields == null && (t.outFields = []);
      const { originX: l, originY: u, originZ: o, translationX: h, translationY: c, translationZ: p, scaleX: f, scaleY: y, scaleZ: w, rotationX: _, rotationY: k, rotationZ: S, rotationDeg: z } = i.transformFieldRoles;
      t.outFields.push(l, u, o, h, c, p, f, y, w, _, k, S, z);
    }
  }
  return t;
}
function ke(d, e) {
  return e != null && d.returnGeometry === !0 && d.multipatchOption !== "xyFootprint" && !d.outStatistics;
}
let ve = class {
  constructor() {
    this.declaredRootClass = "esri.arcade.featureSetCollection", this._layerById = {}, this._layerByName = {};
  }
  add(e, t, i) {
    this._layerById[t] = i, this._layerByName[e] = i;
  }
  async featureSetByName(e, t = !0, i = ["*"]) {
    return this._layerByName[e] === void 0 ? null : this._layerByName[e];
  }
  async featureSetById(e, t = !0, i = ["*"]) {
    return this._layerById[e] === void 0 ? null : this._layerById[e];
  }
  castToText(e = !1) {
    return "object, FeatureSetCollection";
  }
};
class U extends O {
  constructor(e) {
    super(e), this.declaredClass = "esri.arcade.featureset.actions.AttributeFilter", this._maxProcessing = 1e3, this._parent = e.parentfeatureset, e.whereclause instanceof D ? (this._whereclause = e.whereclause, this._whereClauseFunction = null) : (this._whereClauseFunction = e.whereclause, this._whereclause = null);
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types, this.subtypeField = this._parent.subtypeField, this.subtypes = this._parent.subtypes) : (this.fields = [], this.typeIdField = "", this.subtypeField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new te({ wkid: 4326 }), this.geometryType = ie.point);
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._parent._getFilteredSet("", null, this._whereclause, null, e);
      return this._checkCancelled(e), this._whereClauseFunction !== null ? this._wset = new g(t._candidates.slice(0).concat(t._known.slice(0)), [], t._ordered, this._clonePageDefinition(t.pagesDefinition)) : this._wset = new g(t._candidates.slice(0), t._known.slice(0), t._ordered, this._clonePageDefinition(t.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e) {
    let t = this._parent?._isInFeatureSet(e);
    return t === b.NotInFeatureSet ? t : (t = this._idstates[e], t === void 0 ? b.Unknown : t);
  }
  _getFeature(e, t, i) {
    return this._parent._getFeature(e, t, i);
  }
  _getFeatures(e, t, i, s) {
    return this._parent._getFeatures(e, t, i, s);
  }
  _featureFromCache(e) {
    return this._parent._featureFromCache(e);
  }
  executeWhereClause(e) {
    return this._whereclause?.testFeature(e) ?? !1;
  }
  async executeWhereClauseDeferred(e) {
    if (this._whereClauseFunction !== null) {
      const t = this._whereClauseFunction(e);
      return Ue(t), t;
    }
    return this.executeWhereClause(e);
  }
  async _fetchAndRefineFeatures(e, t, i) {
    const s = new g([], e, !1, null), a = Math.min(t, e.length);
    if (await this._parent?._getFeatures(s, -1, a, i), this._checkCancelled(i), this._whereClauseFunction == null) {
      for (let n = 0; n < a; n++) {
        const l = this._parent?._featureFromCache(e[n]);
        this.executeWhereClause(l) === !0 ? this._idstates[e[n]] = b.InFeatureSet : this._idstates[e[n]] = b.NotInFeatureSet;
      }
      return "success";
    }
    const r = [];
    for (let n = 0; n < a; n++) {
      const l = this._parent?._featureFromCache(e[n]);
      r.push(await this.executeWhereClauseDeferred(l));
    }
    for (let n = 0; n < t; n++) r[n] === !0 ? this._idstates[e[n]] = b.InFeatureSet : this._idstates[e[n]] = b.NotInFeatureSet;
    return "success";
  }
  async _getFilteredSet(e, t, i, s, a) {
    this._whereClauseFunction !== null || (i !== null ? this._whereclause !== null && (i = E(this._whereclause, i)) : i = this._whereclause), await this._ensureLoaded();
    const r = await this._parent._getFilteredSet(e, t, i, s, a);
    let n;
    return this._checkCancelled(a), n = this._whereClauseFunction !== null ? new g(r._candidates.slice(0).concat(r._known.slice(0)), [], r._ordered, this._clonePageDefinition(r.pagesDefinition)) : new g(r._candidates.slice(0), r._known.slice(0), r._ordered, this._clonePageDefinition(r.pagesDefinition)), n;
  }
  async _stat(e, t, i, s, a, r, n) {
    if (this._whereClauseFunction !== null) return a === null && i === "" && s === null ? this._manualStat(e, t, r, n) : { calculated: !1 };
    let l = this._whereclause;
    a !== null && this._whereclause !== null && (l = E(this._whereclause, a));
    const u = await this._parent._stat(e, t, i, s, l, r, n);
    return u.calculated === !1 ? a === null && i === "" && s === null ? this._manualStat(e, t, r, n) : { calculated: !1 } : u;
  }
  async _canDoAggregates(e, t, i, s, a) {
    return this._whereClauseFunction === null && (a !== null ? this._whereclause !== null && (a = E(this._whereclause, a)) : a = this._whereclause, this._parent !== null && this._parent._canDoAggregates(e, t, i, s, a));
  }
  async _getAggregatePagesDataSourceDefinition(e, t, i, s, a, r, n) {
    if (this._parent === null) throw new I(C.NeverReach);
    return a !== null ? this._whereclause !== null && (a = E(this._whereclause, a)) : a = this._whereclause, this._parent._getAggregatePagesDataSourceDefinition(e, t, i, s, a, r, n);
  }
  static registerAction() {
    O._featuresetFunctions.filter = function(e) {
      if (typeof e == "function") return new U({ parentfeatureset: this, whereclause: e });
      let t = null;
      return e instanceof D && (t = e), new U({ parentfeatureset: this, whereclause: t });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
}
let Z = class {
  constructor(e) {
    this.field = e, this.sqlRewritable = !1;
  }
  postInitialization(e, t) {
  }
}, X = class extends Z {
  constructor(e) {
    super(e), this.sqlRewritable = !0;
  }
  extractValue(e) {
    return e.attributes[this.field.name];
  }
  rewriteSql(e) {
    return { rewritten: this.sqlRewritable, where: e };
  }
}, gt = class extends Z {
  constructor(e, t, i) {
    super(Ke(e)), this.originalField = e, this.sqlRewritable = !0, this.field.name = t, this.field.alias = i;
  }
  rewriteSql(e, t) {
    return { rewritten: this.sqlRewritable, where: $(e, this.field.name, this.originalField.name, t.getFieldsIndex()) };
  }
  extractValue(e) {
    return e.attributes[this.originalField.name];
  }
}, mt = class F extends Z {
  constructor(e, t, i) {
    super(e), this.codefield = t, this.lkp = i, this.reverseLkp = {};
    for (const s in i) this.reverseLkp[i[s]] = s;
    this.sqlRewritable = !0;
  }
  rewriteSql(e, t) {
    const i = this.evaluateNodeToWhereClause(e.parseTree, v.Standardised, this.field.name, this.codefield instanceof D ? T(this.codefield, v.Standardised) : this.codefield, e.parameters);
    return i.includes(F.BADNESS) ? { rewritten: !1, where: e } : { rewritten: this.sqlRewritable, where: D.create(i, t._parent.getFieldsIndex(), t.dateFieldsTimeZoneDefaultUTC) };
  }
  evaluateNodeToWhereClause(e, t, i = null, s = null, a) {
    let r, n, l, u;
    switch (e.type) {
      case "interval":
        return at(this.evaluateNodeToWhereClause(e.value, t, i, s, a), e.qualifier, e.op);
      case "case-expression": {
        let o = " CASE ";
        e.format === "simple" && (o += this.evaluateNodeToWhereClause(e.operand, t, i, F.BADNESS, a));
        for (let h = 0; h < e.clauses.length; h++) o += " WHEN " + this.evaluateNodeToWhereClause(e.clauses[h].operand, t, i, F.BADNESS, a) + " THEN " + this.evaluateNodeToWhereClause(e.clauses[h].value, t, i, F.BADNESS, a);
        return e.else !== null && (o += " ELSE " + this.evaluateNodeToWhereClause(e.else, t, i, F.BADNESS, a)), o += " END ", o;
      }
      case "parameter": {
        const o = a[e.value.toLowerCase()];
        if (typeof o == "string") return "'" + o.toString().replaceAll("'", "''") + "'";
        if (pe(o)) return J(o, t);
        if (_e(o)) return J(o, t);
        if (ye(o)) return we(o, t);
        if (ge(o)) return Fe(o, t);
        if (me(o)) return Se(o, t);
        if (o instanceof Array) {
          const h = [];
          for (let c = 0; c < o.length; c++) typeof o[c] == "string" ? h.push("'" + o[c].toString().replaceAll("'", "''") + "'") : pe(o[c]) || _e(o[c]) ? h.push(J(o[c], t)) : ye(o[c]) ? h.push(we(o[c], t)) : ge(o[c]) ? h.push(Fe(o[c], t)) : me(o[c]) ? h.push(Se(o[c], t)) : h.push(o[c].toString());
          return h;
        }
        return o.toString();
      }
      case "expression-list":
        n = [];
        for (const o of e.value) n.push(this.evaluateNodeToWhereClause(o, t, i, s, a));
        return n;
      case "unary-expression":
        return " ( NOT " + this.evaluateNodeToWhereClause(e.expr, t, i, F.BADNESS, a) + " ) ";
      case "binary-expression":
        switch (e.operator) {
          case "AND":
            return " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, a) + " AND " + this.evaluateNodeToWhereClause(e.right, t, i, s, a) + ") ";
          case "OR":
            return " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, a) + " OR " + this.evaluateNodeToWhereClause(e.right, t, i, s, a) + ") ";
          case "IS":
            if (e.right.type !== "null") throw new N(L.UnsupportedIsRhs);
            return " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, a) + " IS NULL )";
          case "ISNOT":
            if (e.right.type !== "null") throw new N(L.UnsupportedIsRhs);
            return " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, a) + " IS NOT NULL )";
          case "IN":
            if (r = [], e.right.type === "expression-list") {
              if (e.left.type === "column-reference" && e.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const o = [];
                let h = !0;
                for (const c of e.right.value) {
                  if (c.type !== "string") {
                    h = !1;
                    break;
                  }
                  if (this.lkp[c.value] === void 0) {
                    h = !1;
                    break;
                  }
                  o.push(this.lkp[c.value].toString());
                }
                if (h) return " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, a) + " IN (" + o.join(",") + ")) ";
              }
              return r = this.evaluateNodeToWhereClause(e.right, t, i, s, a), " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, a) + " IN (" + r.join(",") + ")) ";
            }
            return u = this.evaluateNodeToWhereClause(e.right, t, i, s, a), u instanceof Array ? " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, a) + " IN (" + u.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, a) + " IN (" + u + ")) ";
          case "NOT IN":
            if (r = [], e.right.type === "expression-list") {
              if (e.left.type === "column-reference" && e.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const o = [];
                let h = !0;
                for (const c of e.right.value) {
                  if (c.type !== "string") {
                    h = !1;
                    break;
                  }
                  if (this.lkp[c.value] === void 0) {
                    h = !1;
                    break;
                  }
                  o.push(this.lkp[c.value].toString());
                }
                if (h) return " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, a) + " NOT IN (" + o.join(",") + ")) ";
              }
              return r = this.evaluateNodeToWhereClause(e.right, t, i, s, a), " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, a) + " NOT IN (" + r.join(",") + ")) ";
            }
            return u = this.evaluateNodeToWhereClause(e.right, t, i, s, a), u instanceof Array ? " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, a) + " NOT IN (" + u.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e.left, t, i, s, a) + " NOT IN (" + u + ")) ";
          case "BETWEEN":
            return l = this.evaluateNodeToWhereClause(e.right, t, i, F.BADNESS, a), " (" + this.evaluateNodeToWhereClause(e.left, t, i, F.BADNESS, a) + " BETWEEN " + l[0] + " AND " + l[1] + " ) ";
          case "NOTBETWEEN":
            return l = this.evaluateNodeToWhereClause(e.right, t, i, F.BADNESS, a), " (" + this.evaluateNodeToWhereClause(e.left, t, i, F.BADNESS, a) + " NOT BETWEEN " + l[0] + " AND " + l[1] + " ) ";
          case "LIKE":
            return e.escape !== "" ? " (" + this.evaluateNodeToWhereClause(e.left, t, i, F.BADNESS, a) + " LIKE " + this.evaluateNodeToWhereClause(e.right, t, i, F.BADNESS, a) + " ESCAPE '" + e.escape + "') " : " (" + this.evaluateNodeToWhereClause(e.left, t, i, F.BADNESS, a) + " LIKE " + this.evaluateNodeToWhereClause(e.right, t, i, F.BADNESS, a) + ") ";
          case "NOT LIKE":
            return e.escape !== "" ? " (" + this.evaluateNodeToWhereClause(e.left, t, i, F.BADNESS, a) + " NOT LIKE " + this.evaluateNodeToWhereClause(e.right, t, i, F.BADNESS, a) + " ESCAPE '" + e.escape + "') " : " (" + this.evaluateNodeToWhereClause(e.left, t, i, F.BADNESS, a) + " NOT LIKE " + this.evaluateNodeToWhereClause(e.right, t, i, F.BADNESS, a) + ") ";
          case "<>":
          case "=":
            if (e.left.type === "column-reference" && e.right.type === "string") {
              if (e.left.column.toUpperCase() === this.field.name.toUpperCase() && this.lkp[e.right.value.toString()] !== void 0) return " (" + s + " " + e.operator + " " + this.lkp[e.right.value.toString()].toString() + ") ";
            } else if (e.right.type === "column-reference" && e.left.type === "string" && e.right.column.toUpperCase() === this.field.name.toUpperCase()) return " (" + this.lkp[e.right.value.toString()].toString() + " " + e.operator + " " + s + ") ";
            return " (" + this.evaluateNodeToWhereClause(e.left, t, i, F.BADNESS, a) + " " + e.operator + " " + this.evaluateNodeToWhereClause(e.right, t, i, F.BADNESS, a) + ") ";
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "*":
          case "-":
          case "+":
          case "/":
          case "||":
            return " (" + this.evaluateNodeToWhereClause(e.left, t, i, F.BADNESS, a) + " " + e.operator + " " + this.evaluateNodeToWhereClause(e.right, t, i, F.BADNESS, a) + ") ";
        }
      case "null":
        return "null";
      case "boolean":
        return e.value === !0 ? "1" : "0";
      case "string":
        return "'" + e.value.toString().replaceAll("'", "''") + "'";
      case "timestamp":
        return `timestamp '${e.value}'`;
      case "date":
        return `date '${e.value}'`;
      case "time":
        return `time '${e.value}'`;
      case "number":
        return e.value.toString();
      case "current-time":
        return st(e.mode === "date", t);
      case "column-reference":
        return i && i.toLowerCase() === e.column.toLowerCase() ? "(" + s + ")" : e.column;
      case "data-type":
        return e.value;
      case "function": {
        const o = this.evaluateNodeToWhereClause(e.args, t, i, F.BADNESS, a);
        return it(e.name, o, t);
      }
    }
    throw new N(L.UnsupportedSyntax, { node: e.type });
  }
  extractValue(e) {
    return this.codefield instanceof D ? this.reverseLkp[D.convertValueToStorageFormat(this.codefield.calculateValueCompiled(e))] : this.reverseLkp[e.attributes[this.codefield]];
  }
};
mt.BADNESS = "_!!!_BAD_LKP_!!!!";
class wt extends Z {
  constructor(e, t) {
    super(e), this._sql = t;
  }
  rewriteSql(e, t) {
    return { rewritten: !0, where: $(e, this.field.name, T(this._sql, v.Standardised), t.getFieldsIndex()) };
  }
  extractValue(e) {
    return D.convertValueToStorageFormat(this._sql.calculateValueCompiled(e), this.field.type);
  }
}
class Ft extends O {
  static findField(e, t) {
    for (const i of e) if (i.name.toLowerCase() === t.toString().toLowerCase()) return i;
    return null;
  }
  constructor(e) {
    super(e), this._calcFunc = null, this.declaredClass = "esri.arcade.featureset.actions.Adapted", this.adaptedFields = [], this._extraFilter = null, this._extraFilter = e.extraFilter, this._parent = e.parentfeatureset, this._maxProcessing = 30, this.adaptedFields = e.adaptedFields;
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.spatialReference = new te({ wkid: 4326 }), this.objectIdField = "", this.globalIdField = "", this.geometryType = ie.point, this.typeIdField = "", this.types = null, this.subtypeField = null, this.subtypes = null), this.fields = [];
    for (const e of this.adaptedFields) e.postInitialization(this, this._parent), this.fields.push(e.field);
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      let t = null;
      return t = this._extraFilter ? await this._getFilteredSet("", null, null, null, e) : await this._parent?._getSet(e), this._checkCancelled(e), Be(t), this._wset = new g(t._candidates.slice(0), t._known.slice(0), t._ordered, this._clonePageDefinition(t.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e) {
    return this._parent._isInFeatureSet(e);
  }
  async _getFeatures(e, t, i, s) {
    const a = [];
    t !== -1 && this._featureCache[t] === void 0 && a.push(t);
    const r = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e, r) === !0) return await this._expandPagedSet(e, r, 0, 0, s), this._getFeatures(e, t, i, s);
    let n = 0;
    for (let o = e._lastFetchedIndex; o < e._known.length && (n++, n <= i && (e._lastFetchedIndex += 1), !(this._featureCache[e._known[o]] === void 0 && (e._known[o] !== t && a.push(e._known[o]), a.length >= r))); o++) ;
    if (a.length === 0) return "success";
    e = new g([], a, e._ordered, null);
    const l = Math.min(a.length, i);
    await this._parent?._getFeatures(e, -1, l, s), this._checkCancelled(s);
    const u = [];
    for (let o = 0; o < l; o++) {
      const h = this._parent?._featureFromCache(a[o]);
      h !== void 0 && u.push({ geometry: h.geometry, attributes: h.attributes, id: a[o] });
    }
    for (const o of u) {
      const h = [];
      for (const c of this.adaptedFields) h[c.field.name] = c.extractValue(o);
      this._featureCache[o.id] = new P({ attributes: h, geometry: ut(o.geometry) });
    }
    return "success";
  }
  async _fetchAndRefineFeatures() {
    throw new I(C.NeverReach);
  }
  async _getFilteredSet(e, t, i, s, a) {
    let r = !1;
    const n = this._reformulateWithoutAdaptions(i);
    r = n.cannot, i = n.where;
    let l = !1;
    if (s !== null) {
      l = !0;
      const h = [];
      for (const c of this.adaptedFields) if (!(c instanceof X) && s.scanForField(c.field.name) === !0) {
        if (!(c instanceof gt)) {
          s = null, l = !1;
          break;
        }
        h.push({ field: c.field.name, newfield: c.originalField.name });
      }
      s && h.length > 0 && (s = s.replaceFields(h));
    }
    i !== null ? this._extraFilter !== null && (i = E(this._extraFilter, i)) : i = this._extraFilter, await this._ensureLoaded();
    const u = await this._parent._getFilteredSet(e, t, i, s, a);
    let o;
    return this._checkCancelled(a), o = r === !0 ? new g(u._candidates.slice(0).concat(u._known.slice(0)), [], l === !0 && u._ordered, this._clonePageDefinition(u.pagesDefinition)) : new g(u._candidates.slice(0), u._known.slice(0), l === !0 && u._ordered, this._clonePageDefinition(u.pagesDefinition)), o;
  }
  _reformulateWithoutAdaptions(e) {
    const t = { cannot: !1, where: e };
    if (e !== null) {
      for (const i of this.adaptedFields) if (Te(e, i.field.name) === !0) {
        const s = i.rewriteSql(e, this);
        if (s.rewritten !== !0) {
          t.cannot = !0, t.where = null;
          break;
        }
        t.where = s.where;
      }
    }
    return t;
  }
  async _stat(e, t, i, s, a, r, n) {
    let l = !1, u = this._reformulateWithoutAdaptions(t);
    if (l = u.cannot, t = u.where, u = this._reformulateWithoutAdaptions(a), l = l || u.cannot, (a = u.where) !== null ? this._extraFilter !== null && (a = E(this._extraFilter, a)) : a = this._extraFilter, l === !0) return a === null && i === "" && s === null ? this._manualStat(e, t, r, n) : { calculated: !1 };
    const o = await this._parent._stat(e, t, i, s, a, r, n);
    return o.calculated === !1 ? a === null && i === "" && s === null ? this._manualStat(e, t, r, n) : { calculated: !1 } : o;
  }
  async _canDoAggregates(e, t, i, s, a) {
    if (this._parent === null) return !1;
    for (let l = 0; l < e.length; l++) for (const u of this.adaptedFields) if (e[l].toLowerCase() === u.field.name.toLowerCase() && !(u instanceof X)) return !1;
    const r = [];
    for (let l = 0; l < t.length; l++) {
      const u = t[l];
      if (u.workingexpr !== null) {
        const o = this._reformulateWithoutAdaptions(u.workingexpr);
        if (o.cannot) return !1;
        const h = u.clone();
        h.workingexpr = o.where, r.push(h);
      } else r.push(u);
    }
    const n = this._reformulateWithoutAdaptions(a);
    return !n.cannot && ((a = n.where) !== null ? this._extraFilter !== null && (a = E(this._extraFilter, a)) : a = this._extraFilter, this._parent._canDoAggregates(e, r, i, s, a));
  }
  async _getAggregatePagesDataSourceDefinition(e, t, i, s, a, r, n) {
    if (this._parent === null) throw new I(C.NeverReach);
    const l = [];
    for (let o = 0; o < t.length; o++) {
      const h = t[o];
      if (h.workingexpr !== null) {
        const c = this._reformulateWithoutAdaptions(h.workingexpr);
        if (c.cannot) throw new I(C.NeverReach);
        const p = h.clone();
        p.workingexpr = c.where, l.push(p);
      } else l.push(h);
    }
    const u = this._reformulateWithoutAdaptions(a);
    if (u.cannot) throw new I(C.NeverReach);
    return (a = u.where) !== null ? this._extraFilter !== null && (a = E(this._extraFilter, a)) : a = this._extraFilter, this._parent._getAggregatePagesDataSourceDefinition(e, l, i, s, a, r, n);
  }
}
function be(d, e) {
  return d === e ? 0 : d === null ? -1 : e === null ? 1 : d < e ? -1 : 1;
}
class B {
  constructor(e) {
    const t = e.split(",");
    this._fields = [], this._directions = [];
    for (let i = 0; i < t.length; i++) {
      const s = t[i].match(/\S+/g);
      this._fields.push(s[0]), s.length === 2 ? s[1].toLowerCase() === "asc" ? this._directions.push(1) : this._directions.push(0) : this._directions.push(1);
    }
  }
  constructClause() {
    let e = "";
    for (let t = 0; t < this._fields.length; t++) t !== 0 && (e += ","), e += this._fields[t], this._directions[t] === 1 ? e += " ASC" : e += " DESC";
    return e;
  }
  order(e) {
    e.sort((t, i) => {
      for (let s = 0; s < this._fields.length; s++) {
        const a = this.featureValue(t.feature, this._fields[s], s), r = this.featureValue(i.feature, this._fields[s], s);
        let n = 0;
        if (n = this._directions[s] === 1 ? be(a, r) : -1 * be(a, r), n !== 0) return n;
      }
      return 0;
    });
  }
  scanForField(e) {
    for (let t = 0; t < this._fields.length; t++) if (this._fields[t].toLowerCase().trim() === e.toLowerCase().trim()) return !0;
    return !1;
  }
  replaceFields(e) {
    let t = "";
    for (let i = 0; i < this._fields.length; i++) {
      i !== 0 && (t += ",");
      let s = this._fields[i];
      for (const a of e) if (s.toLowerCase() === a.field.toLowerCase()) {
        s = a.newfield;
        break;
      }
      t += s, this._directions[i] === 1 ? t += " ASC" : t += " DESC";
    }
    return new B(t);
  }
  featureValue(e, t, i) {
    const s = e.attributes[t];
    if (s !== void 0) return s;
    for (const a in e.attributes) if (t.toLowerCase() === a.toLowerCase()) return this._fields[i] = a, e.attributes[a];
    return null;
  }
}
let Y = class xe extends O {
  constructor(e) {
    super(e), this._orderbyclause = null, this.declaredClass = "esri.arcade.featureset.actions.OrderBy", this._maxProcessing = 100, this._orderbyclause = e.orderbyclause, this._parent = e.parentfeatureset;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._getFilteredSet("", null, null, this._orderbyclause, e);
      return this._checkCancelled(e), this._wset = t, this._wset;
    }
    return this._wset;
  }
  async manualOrderSet(e, t) {
    const i = await this.getIdColumnDictionary(e, [], -1, t);
    this._orderbyclause?.order(i);
    const s = new g([], [], !0, null);
    for (let a = 0; a < i.length; a++) s._known.push(i[a].id);
    return s;
  }
  async getIdColumnDictionary(e, t, i, s) {
    if (i < e._known.length - 1) {
      const a = this._maxQueryRate();
      if (e._known[i + 1] === "GETPAGES") return await M(this._parent._expandPagedSet(e, a, 0, 0, s)), this.getIdColumnDictionary(e, t, i, s);
      let r = i + 1;
      const n = [];
      for (; r < e._known.length && e._known[r] !== "GETPAGES"; ) n.push(e._known[r]), r++;
      i += n.length;
      const l = await M(this._parent._getFeatureBatch(n, s));
      this._checkCancelled(s);
      for (const u of l) t.push({ id: u.attributes[this.objectIdField], feature: u });
      return this.getIdColumnDictionary(e, t, i, s);
    }
    return e._candidates.length > 0 ? (await M(this._refineSetBlock(e, this._maxProcessingRate(), s)), this._checkCancelled(s), this.getIdColumnDictionary(e, t, i, s)) : t;
  }
  _isInFeatureSet(e) {
    return this._parent._isInFeatureSet(e);
  }
  _getFeatures(e, t, i, s) {
    return this._parent._getFeatures(e, t, i, s);
  }
  _featureFromCache(e) {
    if (this._featureCache[e] === void 0) {
      const t = this._parent._featureFromCache(e);
      return t === void 0 ? void 0 : t === null ? null : (this._featureCache[e] = t, t);
    }
    return this._featureCache[e];
  }
  async _fetchAndRefineFeatures() {
    throw new I(C.NeverReach);
  }
  async _getFilteredSet(e, t, i, s, a) {
    await this._ensureLoaded();
    const r = await this._parent._getFilteredSet(e, t, i, s === null ? this._orderbyclause : s, a);
    this._checkCancelled(a);
    const n = new g(r._candidates.slice(0), r._known.slice(0), r._ordered, this._clonePageDefinition(r.pagesDefinition));
    let l = !0;
    if (r._candidates.length > 0 && (l = !1), n._ordered === !1) {
      let u = await this.manualOrderSet(n, a);
      return l === !1 && (t === null && i === null || (u = new g(u._candidates.slice(0).concat(u._known.slice(0)), [], u._ordered, this._clonePageDefinition(u.pagesDefinition)))), u;
    }
    return n;
  }
  static registerAction() {
    O._featuresetFunctions.orderBy = function(e) {
      return e === "" ? this : new xe({ parentfeatureset: this, orderbyclause: new B(e) });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};
function St(d) {
  if (d.parseTree.type === "function") {
    if (d.parseTree.args.value.length === 0) return { name: d.parseTree.name, expr: null };
    if (d.parseTree.args.value.length > 1) throw new N(L.MissingStatisticParameters);
    const e = D.create(rt(d.parseTree.args.value[0], v.Standardised, d.parameters), d.fieldsIndex, d.timeZone);
    return { name: d.parseTree.name, expr: e };
  }
  return null;
}
let Ie = class H {
  constructor() {
    this.field = "", this.tofieldname = "", this.typeofstat = "MIN", this.workingexpr = null;
  }
  clone() {
    const e = new H();
    return e.field = this.field, e.tofieldname = this.tofieldname, e.typeofstat = this.typeofstat, e.workingexpr = this.workingexpr, e;
  }
  static parseStatField(e, t, i, s) {
    const a = new H();
    a.field = e;
    const r = D.create(t, i, s), n = St(r);
    if (n === null) throw new N(L.UnsupportedSqlFunction, { function: "" });
    const l = n.name.toUpperCase().trim();
    if (l === "MIN") {
      if (a.typeofstat = "MIN", a.workingexpr = n.expr, r === null) throw new N(L.InvalidFunctionParameters, { function: "min" });
    } else if (l === "MAX") {
      if (a.typeofstat = "MAX", a.workingexpr = n.expr, r === null) throw new N(L.InvalidFunctionParameters, { function: "max" });
    } else if (l === "COUNT") a.typeofstat = "COUNT", a.workingexpr = n.expr;
    else if (l === "STDEV") {
      if (a.typeofstat = "STDDEV", a.workingexpr = n.expr, r === null) throw new N(L.InvalidFunctionParameters, { function: "stdev" });
    } else if (l === "SUM") {
      if (a.typeofstat = "SUM", a.workingexpr = n.expr, r === null) throw new N(L.InvalidFunctionParameters, { function: "sum" });
    } else if (l === "MEAN") {
      if (a.typeofstat = "AVG", a.workingexpr = n.expr, r === null) throw new N(L.InvalidFunctionParameters, { function: l });
    } else if (l === "AVG") {
      if (a.typeofstat = "AVG", a.workingexpr = n.expr, r === null) throw new N(L.InvalidFunctionParameters, { function: "avg" });
    } else {
      if (l !== "VAR") throw new N(L.UnsupportedSqlFunction, { function: l });
      if (a.typeofstat = "VAR", a.workingexpr = n.expr, r === null) throw new N(L.InvalidFunctionParameters, { function: "var" });
    }
    return a;
  }
  toStatisticsName() {
    switch (this.typeofstat.toUpperCase()) {
      case "MIN":
        return "min";
      case "MAX":
        return "max";
      case "SUM":
        return "sum";
      case "COUNT":
      default:
        return "count";
      case "VAR":
        return "var";
      case "STDDEV":
        return "stddev";
      case "AVG":
        return "avg";
    }
  }
};
function bt(d) {
  if (!d) return "COUNT";
  switch (d.toLowerCase()) {
    case "max":
      return "MAX";
    case "var":
    case "variance":
      return "VAR";
    case "avg":
    case "average":
    case "mean":
      return "AVG";
    case "min":
      return "MIN";
    case "sum":
      return "SUM";
    case "stdev":
    case "stddev":
      return "STDDEV";
    case "count":
      return "COUNT";
  }
  return "COUNT";
}
let It = class Ne extends O {
  constructor(e) {
    super(e), this._decodedStatsfield = [], this._decodedGroupbyfield = [], this._candosimplegroupby = !0, this.phsyicalgroupbyfields = [], this.objectIdField = "ROW__ID", this._internalObjectIdField = "ROW__ID", this._adaptedFields = [], this.declaredClass = "esri.arcade.featureset.actions.Aggregate", this._uniqueIds = 1, this._maxQuery = 10, this._maxProcessing = 10, this._parent = e.parentfeatureset, this._config = e;
  }
  isTable() {
    return !0;
  }
  async _getSet(e) {
    if (this._wset === null) {
      const t = await this._getFilteredSet("", null, null, null, e);
      return this._wset = t, this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet() {
    return b.InFeatureSet;
  }
  _nextUniqueName(e) {
    for (; e["T" + this._uniqueIds.toString()] === 1; ) this._uniqueIds++;
    const t = "T" + this._uniqueIds.toString();
    return e[t] = 1, t;
  }
  _convertToEsriFieldType(e) {
    return e;
  }
  _initialiseFeatureSet() {
    const e = {};
    let t = !1, i = 1;
    const s = this._parent ? this._parent.getFieldsIndex() : new Me([]);
    for (this.objectIdField = "ROW__ID", this.globalIdField = ""; t === !1; ) {
      let r = !1;
      for (let n = 0; n < this._config.groupbyfields.length; n++) if (this._config.groupbyfields[n].name.toLowerCase() === this.objectIdField.toLowerCase()) {
        r = !0;
        break;
      }
      if (r === !1) {
        for (let n = 0; n < this._config.statsfields.length; n++) if (this._config.statsfields[n].name.toLowerCase() === this.objectIdField.toLowerCase()) {
          r = !0;
          break;
        }
      }
      r === !1 ? t = !0 : (this.objectIdField = "ROW__ID" + i.toString(), i++);
    }
    for (const r of this._config.statsfields) {
      const n = new Ie();
      n.field = r.name, n.tofieldname = r.name, n.workingexpr = r.expression instanceof D ? r.expression : D.create(r.expression, s, this.dateFieldsTimeZoneDefaultUTC), n.typeofstat = bt(r.statistic), this._decodedStatsfield.push(n);
    }
    this._decodedGroupbyfield = [];
    for (const r of this._config.groupbyfields) {
      const n = { name: r.name, singlefield: null, tofieldname: r.name, expression: r.expression instanceof D ? r.expression : D.create(r.expression, s, this.dateFieldsTimeZoneDefaultUTC), sqlType: null };
      this._decodedGroupbyfield.push(n);
    }
    if (this._parent !== null) {
      this.geometryType = this._parent.geometryType, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = "";
      for (const r of this._parent.fields) e[r.name.toUpperCase()] = 1;
      this.types = null, this.subtypes = null, this.subtypeField = "";
    } else this.geometryType = ie.point, this.typeIdField = "", this.types = null, this.subtypes = null, this.subtypeField = "", this.spatialReference = new te({ wkid: 4326 });
    this.fields = [];
    const a = new Ie();
    a.field = this._nextUniqueName(e), a.tofieldname = this.objectIdField, a.workingexpr = D.create(this._parent.objectIdField, this._parent.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC), a.typeofstat = "MIN", this._decodedStatsfield.push(a);
    for (const r of this._decodedGroupbyfield) {
      const n = new G();
      if (r.name = this._nextUniqueName(e), n.name = r.tofieldname, n.alias = n.name, V(r.expression)) {
        const l = this._parent.getField(T(r.expression, v.Standardised));
        if (!l) throw new I(C.AggregationFieldNotFound);
        r.name = l.name, r.singlefield = l.name, this.phsyicalgroupbyfields.push(l.name), n.type = l.type, r.sqlType = l.type;
      } else {
        n.type = this._convertToEsriFieldType(nt(r.expression, this._parent.fields));
        const l = new G();
        l.name = r.name, l.alias = l.name, this.phsyicalgroupbyfields.push(r.name), this._adaptedFields.push(new wt(l, r.expression)), this._candosimplegroupby = !1, r.sqlType = n.type;
      }
      this.fields.push(n);
    }
    if (this._adaptedFields.length > 0) for (const r of this._parent.fields) this._adaptedFields.push(new X(r));
    for (let r = 0; r < this._decodedStatsfield.length; r++) {
      const n = new G();
      let l = null;
      const u = this._decodedStatsfield[r];
      u.field = this._nextUniqueName(e), u.tofieldname === this.objectIdField && (this._internalObjectIdField = u.field), n.name = u.tofieldname, n.alias = n.name;
      const o = u.workingexpr !== null && V(u.workingexpr) ? T(u.workingexpr, v.Standardised) : "";
      switch (this._decodedStatsfield[r].typeofstat) {
        case "SUM":
          if (o !== "") {
            if (l = this._parent.getField(o), !l) throw new I(C.AggregationFieldNotFound);
            n.type = l.type;
          } else n.type = "double";
          break;
        case "MIN":
        case "MAX":
          if (o !== "") {
            if (l = this._parent.getField(o), !l) throw new I(C.AggregationFieldNotFound);
            n.type = l.type;
          } else n.type = "double";
          break;
        case "COUNT":
          n.type = "integer";
          break;
        case "STDDEV":
        case "VAR":
        case "AVG":
          if (o !== "" && (l = this._parent.getField(o), !l)) throw new I(C.AggregationFieldNotFound);
          n.type = "double";
      }
      this.fields.push(n);
    }
  }
  async _canDoAggregates() {
    return !1;
  }
  async _getFeatures(e, t, i, s) {
    t !== -1 && this._featureCache[t];
    const a = this._maxQuery;
    return this._checkIfNeedToExpandKnownPage(e, a) === !0 ? (await this._expandPagedSet(e, a, 0, 0, s), this._getFeatures(e, t, i, s)) : "success";
  }
  async _getFilteredSet(e, t, i, s, a) {
    if (e !== "") return new g([], [], !0, null);
    let r = null;
    const n = { ordered: !1, nowhereclause: !1 };
    if (await this._ensureLoaded(), i !== null) {
      for (let u = 0; u < this._decodedStatsfield.length; u++) if (Te(i, this._decodedStatsfield[u].tofieldname) === !0) {
        n.nowhereclause = !0, i = null;
        break;
      }
    }
    if (s !== null) {
      n.ordered = !0;
      for (let u = 0; u < this._decodedStatsfield.length; u++) if (s.scanForField(this._decodedStatsfield[u].tofieldname) === !0) {
        s = null, n.ordered = !1;
        break;
      }
      if (s !== null) {
        for (const u of this._decodedGroupbyfield) if (u.singlefield === null && s.scanForField(u.tofieldname) === !0) {
          s = null, n.ordered = !1;
          break;
        }
      }
    }
    if (this._candosimplegroupby !== !1 && await this._parent._canDoAggregates(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, null)) {
      let u = null;
      i && (u = this._reformulateWhereClauseWithoutGroupByFields(i));
      let o = null;
      s && (o = this._reformulateOrderClauseWithoutGroupByFields(s));
      const h = await this._parent._getAggregatePagesDataSourceDefinition(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, u, o, this._internalObjectIdField);
      return this._checkCancelled(a), r = n.nowhereclause === !0 ? new g(h._candidates.slice(0).concat(h._known.slice(0)), [], n.ordered === !0 && h._ordered, this._clonePageDefinition(h.pagesDefinition)) : new g(h._candidates.slice(0), h._known.slice(0), n.ordered === !0 && h._ordered, this._clonePageDefinition(h.pagesDefinition)), r;
    }
    let l = this._parent;
    if (this._adaptedFields.length > 0 && (l = new Ft({ parentfeatureset: this._parent, adaptedFields: this._adaptedFields, extraFilter: null })), n.nowhereclause === !0) r = new g(["GETPAGES"], [], !1, { aggregatefeaturesetpagedefinition: !0, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: !1, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new Y({ parentfeatureset: l, orderbyclause: new B(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
    else {
      let u = l;
      if (i !== null) {
        let o = null;
        i && (o = this._reformulateWhereClauseWithoutGroupByFields(i)), u = new U({ parentfeatureset: u, whereclause: o });
      }
      r = new g(["GETPAGES"], [], !1, { aggregatefeaturesetpagedefinition: !0, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: !1, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new Y({ parentfeatureset: u, orderbyclause: new B(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
    }
    return r;
  }
  _reformulateWhereClauseWithoutStatsFields(e) {
    for (const t of this._decodedStatsfield) e = $(e, t.tofieldname, T(t.workingexpr, v.Standardised), this._parent.getFieldsIndex());
    return e;
  }
  _reformulateWhereClauseWithoutGroupByFields(e) {
    for (const t of this._decodedGroupbyfield) t.tofieldname !== t.name && (e = $(e, t.tofieldname, T(t.expression, v.Standardised), this._parent.getFieldsIndex()));
    return e;
  }
  _reformulateOrderClauseWithoutGroupByFields(e) {
    const t = [];
    for (const i of this._decodedGroupbyfield) i.tofieldname !== i.name && t.push({ field: i.tofieldname, newfield: i.name });
    return t.length > 0 ? e.replaceFields(t) : e;
  }
  _clonePageDefinition(e) {
    return e === null ? null : e.aggregatefeaturesetpagedefinition === !0 ? { aggregatefeaturesetpagedefinition: !0, resultRecordCount: e.resultRecordCount, resultOffset: e.resultOffset, internal: e.internal } : this._parent._clonePageDefinition(e);
  }
  async _refineSetBlock(e, t, i) {
    return this._checkIfNeedToExpandCandidatePage(e, this._maxQuery) === !0 ? (await this._expandPagedSet(e, this._maxQuery, 0, 0, i), this._refineSetBlock(e, t, i)) : (this._checkCancelled(i), e._candidates.length, this._refineKnowns(e, t), e._candidates.length, e._candidates.length, e);
  }
  _expandPagedSet(e, t, i, s, a) {
    return this._expandPagedSetFeatureSet(e, t, i, s, a);
  }
  async _getPhysicalPage(e, t, i) {
    if (e.pagesDefinition.aggregatefeaturesetpagedefinition === !0) return this._sequentialGetPhysicalItem(e, e.pagesDefinition.resultRecordCount, i, []);
    const s = await this._getAgregagtePhysicalPage(e, t, i);
    for (const a of s) {
      const r = { geometry: a.geometry, attributes: {} }, n = {};
      for (const l in a.attributes) n[l.toLowerCase()] = a.attributes[l];
      for (const l of this._decodedGroupbyfield) r.attributes[l.tofieldname] = n[l.name.toLowerCase()];
      for (const l of this._decodedStatsfield) r.attributes[l.tofieldname] = n[l.field.toLowerCase()];
      this._featureCache[r.attributes[this.objectIdField]] = new P(r);
    }
    return s.length;
  }
  _sequentialGetPhysicalItem(e, t, i, s) {
    return new Promise((a, r) => {
      e.pagesDefinition.internal.iterator === null && (e.pagesDefinition.internal.iterator = e.pagesDefinition.internal.subfeatureset.iterator(i)), e.pagesDefinition.internal.fullyResolved === !0 || t === 0 ? a(s.length) : this._nextAggregateItem(e, t, i, s, (n) => {
        n === null ? a(s.length) : (t -= 1, a(this._sequentialGetPhysicalItem(e, t, i, s)));
      }, r);
    });
  }
  _nextAggregateItem(e, t, i, s, a, r) {
    try {
      M(e.pagesDefinition.internal.iterator.next()).then((n) => {
        if (n === null) if (e.pagesDefinition.internal.workingItem !== null) {
          const l = this._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);
          s.push(l), e.pagesDefinition.internal.workingItem = null, e.pagesDefinition.internal.set.push(l.attributes[this.objectIdField]), e.pagesDefinition.internal.fullyResolved = !0, a(null);
        } else e.pagesDefinition.internal.fullyResolved = !0, a(null);
        else {
          const l = this._generateAggregateHash(n);
          if (e.pagesDefinition.internal.workingItem === null) e.pagesDefinition.internal.workingItem = { features: [n], id: l };
          else {
            if (l !== e.pagesDefinition.internal.workingItem.id) {
              const u = this._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);
              return s.push(u), e.pagesDefinition.internal.workingItem = null, e.pagesDefinition.internal.set.push(u.attributes[this.objectIdField]), t -= 1, e.pagesDefinition.internal.workingItem = { features: [n], id: l }, void a(u);
            }
            e.pagesDefinition.internal.workingItem.features.push(n);
          }
          this._nextAggregateItem(e, t, i, s, a, r);
        }
      }, r);
    } catch (n) {
      r(n);
    }
  }
  _calculateFieldStat(e, t, i) {
    const s = [];
    for (let a = 0; a < e.features.length; a++) if (t.workingexpr !== null) {
      const r = t.workingexpr.calculateValue(e.features[a]);
      r !== null && (r instanceof dt || r instanceof ht ? s.push(r.toNumber()) : r instanceof tt ? s.push(r.toMilliseconds()) : s.push(r));
    } else s.push(null);
    switch (t.typeofstat) {
      case "MIN":
        i.attributes[t.tofieldname] = q("min", s, -1);
        break;
      case "MAX":
        i.attributes[t.tofieldname] = q("max", s, -1);
        break;
      case "SUM":
        i.attributes[t.tofieldname] = q("sum", s, -1);
        break;
      case "COUNT":
        i.attributes[t.tofieldname] = s.length;
        break;
      case "VAR":
        i.attributes[t.tofieldname] = q("var", s, -1);
        break;
      case "STDDEV":
        i.attributes[t.tofieldname] = q("stddev", s, -1);
        break;
      case "AVG":
        i.attributes[t.tofieldname] = q("avg", s, -1);
    }
    return !0;
  }
  _calculateAndAppendAggregateItem(e) {
    const t = { attributes: {}, geometry: null };
    for (const s of this._decodedGroupbyfield) {
      const a = s.singlefield ? e.features[0].attributes[s.singlefield] : D.convertValueToStorageFormat(s.expression.calculateValue(e.features[0]), s.sqlType);
      t.attributes[s.tofieldname] = a;
    }
    for (const s of this._decodedStatsfield) this._calculateFieldStat(e, s, t);
    const i = [];
    for (let s = 0; s < this._decodedStatsfield.length; s++) i.push(this._calculateFieldStat(e, this._decodedStatsfield[s], t));
    return this._featureCache[t.attributes[this.objectIdField]] = new P({ attributes: t.attributes, geometry: t.geometry }), t;
  }
  _generateAggregateHash(e) {
    let t = "";
    for (const i of this._decodedGroupbyfield) {
      const s = i.singlefield ? e.attributes[i.singlefield] : i.expression.calculateValue(e);
      t += s == null ? ":" : ":" + s.toString();
    }
    return Ce(t, De.String);
  }
  async _stat() {
    return { calculated: !1 };
  }
  async getFeatureByObjectId() {
    return null;
  }
  static registerAction() {
    O._featuresetFunctions.groupby = function(e, t) {
      return new Ne({ parentfeatureset: this, groupbyfields: e, statsfields: t });
    };
  }
};
class ae extends O {
  constructor(e) {
    super(e), this._topnum = 0, this.declaredClass = "esri.arcade.featureset.actions.Top", this._countedin = 0, this._maxProcessing = 100, this._topnum = e.topnum, this._parent = e.parentfeatureset;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._parent._getSet(e);
      return this._wset = new g(t._candidates.slice(0), t._known.slice(0), !1, this._clonePageDefinition(t.pagesDefinition)), this._setKnownLength(this._wset) > this._topnum && (this._wset._known = this._wset._known.slice(0, this._topnum)), this._setKnownLength(this._wset) >= this._topnum && (this._wset._candidates = []), this._wset;
    }
    return this._wset;
  }
  _setKnownLength(e) {
    return e._known.length > 0 && e._known[e._known.length - 1] === "GETPAGES" ? e._known.length - 1 : e._known.length;
  }
  _isInFeatureSet(e) {
    const t = this._parent._isInFeatureSet(e);
    if (t === b.NotInFeatureSet) return t;
    const i = this._idstates[e];
    return i === b.InFeatureSet || i === b.NotInFeatureSet ? i : t === b.InFeatureSet && i === void 0 ? this._countedin < this._topnum ? (this._idstates[e] = b.InFeatureSet, this._countedin++, b.InFeatureSet) : (this._idstates[e] = b.NotInFeatureSet, b.NotInFeatureSet) : b.Unknown;
  }
  async _expandPagedSet(e, t, i, s, a) {
    if (this._parent === null) throw new I(C.NotImplemented);
    if (t > this._topnum && (t = this._topnum), this._countedin >= this._topnum && e.pagesDefinition.internal.set.length <= e.pagesDefinition.resultOffset) {
      let n = e._known.length;
      return n > 0 && e._known[n - 1] === "GETPAGES" && (e._known.length = n - 1), n = e._candidates.length, n > 0 && e._candidates[n - 1] === "GETPAGES" && (e._candidates.length = n - 1), "success";
    }
    const r = await this._parent._expandPagedSet(e, t, i, s, a);
    return this._setKnownLength(e) > this._topnum && (e._known.length = this._topnum), this._setKnownLength(e) >= this._topnum && (e._candidates.length = 0), r;
  }
  async _getFeatures(e, t, i, s) {
    const a = [], r = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e, r) === !0) return await this._expandPagedSet(e, r, 0, 0, s), this._getFeatures(e, t, i, s);
    t !== -1 && this._featureCache[t] === void 0 && a.push(t);
    let n = 0;
    for (let o = e._lastFetchedIndex; o < e._known.length && (n++, n <= i && (e._lastFetchedIndex += 1), !(this._featureCache[e._known[o]] === void 0 && (e._known[o] !== t && a.push(e._known[o]), a.length > r))); o++) ;
    if (a.length === 0) return "success";
    const l = new g([], a, !1, null), u = Math.min(a.length, i);
    await this._parent._getFeatures(l, -1, u, s);
    for (let o = 0; o < u; o++) {
      const h = this._parent._featureFromCache(a[o]);
      h !== void 0 && (this._featureCache[a[o]] = h);
    }
    return "success";
  }
  async _getFilteredSet(e, t, i, s, a) {
    await this._ensureLoaded();
    const r = await this._getSet(a);
    return new g(r._candidates.slice(0).concat(r._known.slice(0)), [], !1, this._clonePageDefinition(r.pagesDefinition));
  }
  _refineKnowns(e, t) {
    let i = 0, s = null;
    const a = [];
    for (let r = 0; r < e._candidates.length; r++) {
      const n = this._isInFeatureSet(e._candidates[r]);
      if (n === b.InFeatureSet) {
        if (e._known.push(e._candidates[r]), i += 1, s === null ? s = { start: r, end: r } : s.end === r - 1 ? s.end = r : (a.push(s), s = { start: r, end: r }), e._known.length >= this._topnum) break;
      } else if (n === b.NotInFeatureSet) s === null ? s = { start: r, end: r } : s.end === r - 1 ? s.end = r : (a.push(s), s = { start: r, end: r }), i += 1;
      else if (n === b.Unknown) break;
      if (i >= t) break;
    }
    s !== null && a.push(s);
    for (let r = a.length - 1; r >= 0; r--) e._candidates.splice(a[r].start, a[r].end - a[r].start + 1);
    this._setKnownLength(e) > this._topnum && (e._known = e._known.slice(0, this._topnum)), this._setKnownLength(e) >= this._topnum && (e._candidates = []);
  }
  async _stat() {
    return { calculated: !1 };
  }
  async _canDoAggregates() {
    return !1;
  }
  static registerAction() {
    O._featuresetFunctions.top = function(e) {
      return new ae({ parentfeatureset: this, topnum: e });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
}
class Q extends O {
  constructor(e) {
    super(e), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerDynamic", this._removeGeometry = !1, this._overrideFields = null, this.formulaCredential = null, this._pageJustIds = !1, this._requestStandardised = !1, this._useDefinitionExpression = !0, e.spatialReference && (this.spatialReference = e.spatialReference), this._transparent = !0, this._maxProcessing = 1e3, this._layer = e.layer, this._wset = null, e.outFields !== void 0 && (this._overrideFields = e.outFields), e.includeGeometry !== void 0 && (this._removeGeometry = e.includeGeometry === !1);
  }
  _maxQueryRate() {
    return se;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries(e) {
    this._pageJustIds = e;
  }
  get urlQueryPath() {
    return this._layer.parsedUrl.path || "";
  }
  convertQueryToLruCacheKey(e) {
    const t = this.urlQueryPath + "," + Xe(e.toJSON());
    return Ce(t, De.String);
  }
  async loadImpl() {
    return this._layer.loaded === !0 ? (this._initialiseFeatureSet(), this) : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this.hasZ = this._layer?.capabilities?.data?.supportsZ === !0, this.hasM = this._layer?.capabilities?.data?.supportsM === !0, this._overrideFields !== null) if (this._overrideFields.length === 1 && this._overrideFields[0] === "*") this._overrideFields = null;
    else {
      const e = [], t = [];
      for (const i of this.fields) if (i.type === "oid") e.push(i), t.push(i.name);
      else for (const s of this._overrideFields) if (s.toLowerCase() === i.name.toLowerCase()) {
        e.push(i), t.push(i.name);
        break;
      }
      this.fields = e, this._overrideFields = t;
    }
    if (this._layer.source && this._layer.source.sourceJSON) {
      const e = this._layer.source.sourceJSON.currentVersion;
      this._layer.source.sourceJSON.useStandardizedQueries === !0 ? (this._databaseType = v.StandardisedNoInterval, e != null && e >= 10.61 && (this._databaseType = v.Standardised)) : e != null && (e >= 10.5 && (this._databaseType = v.StandardisedNoInterval, this._requestStandardised = !0), e >= 10.61 && (this._databaseType = v.Standardised));
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e of this.fields) e.type === "global-id" && (this.globalIdField = e.name);
    this._layer instanceof Re ? (this.subtypeField = this._layer.subtypeField ?? "", this.subtypes = this._layer.subtypes, this.types = null, this.typeIdField = null) : (this.typeIdField = this._layer.typeIdField ?? "", this.types = this._layer.types, this.subtypeField = this._layer.subtypeField, this.subtypes = this._layer.subtypes);
  }
  _isInFeatureSet() {
    return b.InFeatureSet;
  }
  async _refineSetBlock(e) {
    return e;
  }
  _candidateIdTransform(e) {
    return e;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._getFilteredSet("", null, null, null, e);
      return this._wset = t, t;
    }
    return this._wset;
  }
  async _runDatabaseProbe(e) {
    await this._ensureLoaded();
    const t = new x();
    this.datesInUnknownTimezone && (t.timeReferenceUnknownClient = !0), t.where = e.replace("OBJECTID", this._layer.objectIdField);
    try {
      return await this._layer.queryObjectIds(t), !0;
    } catch {
      return !1;
    }
  }
  _canUsePagination() {
    return !(!this._layer.capabilities || !this._layer.capabilities.query || this._layer.capabilities.query.supportsPagination !== !0);
  }
  _cacheableFeatureSetSourceKey() {
    return this._layer.url;
  }
  pbfSupportedForQuery(e) {
    const t = this._layer?.capabilities?.query;
    return !e.outStatistics && t?.supportsFormatPBF === !0 && t?.supportsQuantizationEditMode === !0;
  }
  async queryPBF(e) {
    return e.quantizationParameters = { mode: "edit" }, (await ct(this._layer.parsedUrl, e, { format: "pbf" }, {})).unquantize();
  }
  get gdbVersion() {
    return this._layer && this._layer.capabilities && this._layer.capabilities.data && this._layer.capabilities.data.isVersioned ? this._layer.gdbVersion || "SDE.DEFAULT" : "";
  }
  nativeCapabilities() {
    return { title: this._layer.title ?? "", source: this, canQueryRelated: !0, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: this._requestStandardised };
  }
  executeQuery(e, t) {
    e.returnZ = this.hasZ, e.returnM = this.hasM;
    const i = t === "execute" ? he : t === "executeForCount" ? Ve : Qe, s = t === "execute" && this.pbfSupportedForQuery(e);
    let a = null;
    if (this.recentlyUsedQueries) {
      const r = this.convertQueryToLruCacheKey(e);
      a = this.recentlyUsedQueries.getFromCache(r), a === null && (a = s !== !0 ? i(this._layer.parsedUrl.path, e) : this.queryPBF(e), this.recentlyUsedQueries.addToCache(r, a), a = a.catch((n) => {
        throw this.recentlyUsedQueries?.removeFromCache(r), n;
      }));
    }
    return this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: e, method: t }), a === null && (a = s !== !0 ? i(this._layer.parsedUrl.path, e) : this.queryPBF(e)), a;
  }
  async _getFilteredSet(e, t, i, s, a) {
    const r = await this.databaseType();
    if (this.isTable() && t && e !== null && e !== "")
      return new g([], [], !0, null);
    if (this._canUsePagination()) return this._getFilteredSetUsingPaging(e, t, i, s, a);
    let n = "", l = !1;
    s !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === !0 && (n = s.constructClause(), l = !0);
    const u = new x();
    this.datesInUnknownTimezone && (u.timeReferenceUnknownClient = !0), u.where = i === null ? t === null ? "1=1" : "" : T(i, r), this._requestStandardised && (u.sqlFormat = "standard"), u.spatialRelationship = this._makeRelationshipEnum(e), u.outSpatialReference = this.spatialReference, u.orderByFields = n !== "" ? n.split(",") : null, u.geometry = t === null ? null : t, u.relationParameter = this._makeRelationshipParam(e);
    let o = await this.executeQuery(u, "executeForIds");
    return o === null && (o = []), this._checkCancelled(a), new g([], o, l, null);
  }
  _expandPagedSet(e, t, i, s, a) {
    return this._expandPagedSetFeatureSet(e, t, i, s, a);
  }
  async _getFilteredSetUsingPaging(e, t, i, s, a) {
    let r = "", n = !1;
    s !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === !0 && (r = s.constructClause(), n = !0);
    const l = await this.databaseType();
    let u = i === null ? t === null ? "1=1" : "" : T(i, l);
    this._layer.definitionExpression && this._useDefinitionExpression && (u = u !== "" ? "((" + this._layer.definitionExpression + ") AND (" + u + "))" : this._layer.definitionExpression);
    let o = this._maxQueryRate();
    const h = this._layer.capabilities?.query.maxRecordCount;
    h != null && h < o && (o = h);
    let c = null;
    if (this._pageJustIds === !0) c = new g([], ["GETPAGES"], n, { spatialRel: this._makeRelationshipEnum(e), relationParam: this._makeRelationshipParam(e), outFields: this._layer.objectIdField, resultRecordCount: o, resultOffset: 0, geometry: t === null ? null : t, where: u, orderByFields: r, returnGeometry: !1, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 } });
    else {
      let p = !0;
      this._removeGeometry === !0 && (p = !1);
      const f = this._overrideFields ?? this._fieldsIncludingObjectId(["*"]);
      c = new g([], ["GETPAGES"], n, { spatialRel: this._makeRelationshipEnum(e), relationParam: this._makeRelationshipParam(e), outFields: f.join(","), resultRecordCount: o, resultOffset: 0, geometry: t === null ? null : t, where: u, orderByFields: r, returnGeometry: p, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 } });
    }
    return await this._expandPagedSet(c, o, 0, 1, a), c;
  }
  _clonePageDefinition(e) {
    return e === null ? null : e.groupbypage !== !0 ? { groupbypage: !1, spatialRel: e.spatialRel, relationParam: e.relationParam, outFields: e.outFields, resultRecordCount: e.resultRecordCount, resultOffset: e.resultOffset, geometry: e.geometry, where: e.where, orderByFields: e.orderByFields, returnGeometry: e.returnGeometry, returnIdsOnly: e.returnIdsOnly, internal: e.internal } : { groupbypage: !0, spatialRel: e.spatialRel, relationParam: e.relationParam, outFields: e.outFields, resultRecordCount: e.resultRecordCount, useOIDpagination: e.useOIDpagination, generatedOid: e.generatedOid, groupByFieldsForStatistics: e.groupByFieldsForStatistics, resultOffset: e.resultOffset, outStatistics: e.outStatistics, geometry: e.geometry, where: e.where, orderByFields: e.orderByFields, returnGeometry: e.returnGeometry, returnIdsOnly: e.returnIdsOnly, internal: e.internal };
  }
  async _getPhysicalPage(e, t, i) {
    const s = e.pagesDefinition.internal.lastRetrieved, a = s, r = e.pagesDefinition.internal.lastPage, n = new x();
    this._requestStandardised && (n.sqlFormat = "standard"), this.datesInUnknownTimezone && (n.timeReferenceUnknownClient = !0), n.spatialRelationship = e.pagesDefinition.spatialRel, n.relationParameter = e.pagesDefinition.relationParam, n.outFields = e.pagesDefinition.outFields.split(","), n.num = e.pagesDefinition.resultRecordCount, n.start = e.pagesDefinition.internal.lastPage, n.geometry = e.pagesDefinition.geometry, n.where = e.pagesDefinition.where, n.orderByFields = e.pagesDefinition.orderByFields !== "" ? e.pagesDefinition.orderByFields.split(",") : null, n.returnGeometry = e.pagesDefinition.returnGeometry, n.outSpatialReference = this.spatialReference;
    const l = await this.executeQuery(n, "execute");
    if (this._checkCancelled(i), e.pagesDefinition.internal.lastPage !== r) return "done";
    const u = this._layer.objectIdField;
    for (let o = 0; o < l.features.length; o++) e.pagesDefinition.internal.set[a + o] = l.features[o].attributes[u];
    if (this._pageJustIds === !1) for (let o = 0; o < l.features.length; o++) this._featureCache[l.features[o].attributes[u]] = l.features[o];
    return (l.exceededTransferLimit === void 0 && l.features.length !== e.pagesDefinition.resultRecordCount || l.exceededTransferLimit === !1) && (e.pagesDefinition.internal.fullyResolved = !0), e.pagesDefinition.internal.lastRetrieved = s + l.features.length, e.pagesDefinition.internal.lastPage += e.pagesDefinition.resultRecordCount, "done";
  }
  _fieldsIncludingObjectId(e) {
    if (e === null) return [this.objectIdField];
    const t = e.slice(0);
    if (t.includes("*")) return t;
    let i = !1;
    for (const s of t) if (s.toUpperCase() === this.objectIdField.toUpperCase()) {
      i = !0;
      break;
    }
    return i === !1 && t.push(this.objectIdField), t;
  }
  async _getFeatures(e, t, i, s) {
    const a = [];
    if (t !== -1 && this._featureCache[t] === void 0 && a.push(t), this._checkIfNeedToExpandKnownPage(e, this._maxProcessingRate()) === !0) return await this._expandPagedSet(e, this._maxProcessingRate(), 0, 0, s), this._getFeatures(e, t, i, s);
    let r = 0;
    for (let o = e._lastFetchedIndex; o < e._known.length; o++) {
      if (e._lastFetchedIndex += 1, r++, this._featureCache[e._known[o]] === void 0) {
        let h = !1;
        if (this._layer._mode !== null && this._layer._mode !== void 0) {
          const c = this._layer._mode;
          if (c._featureMap[e._known[o]] !== void 0) {
            const p = c._featureMap[e._known[o]];
            p !== null && (h = !0, this._featureCache[e._known[o]] = p);
          }
        }
        if (h === !1 && (e._known[o] !== t && a.push(e._known[o]), a.length >= this._maxProcessingRate() - 1)) break;
      }
      if (r >= i && a.length === 0) break;
    }
    if (a.length === 0) return "success";
    const n = new x();
    this._requestStandardised && (n.sqlFormat = "standard"), this.datesInUnknownTimezone && (n.timeReferenceUnknownClient = !0), n.objectIds = a, n.outFields = this._overrideFields ?? this._fieldsIncludingObjectId(["*"]), n.returnGeometry = !0, this._removeGeometry === !0 && (n.returnGeometry = !1), n.outSpatialReference = this.spatialReference;
    const l = await this.executeQuery(n, "execute");
    if (this._checkCancelled(s), l.error !== void 0) throw new I(C.RequestFailed, { reason: l.error });
    const u = this._layer.objectIdField;
    for (let o = 0; o < l.features.length; o++) this._featureCache[l.features[o].attributes[u]] = l.features[o];
    return "success";
  }
  async _getDistinctPages(e, t, i, s, a, r, n, l, u) {
    await this._ensureLoaded();
    const o = await this.databaseType();
    let h = i.parseTree.column;
    const c = this._layer.fields ?? [];
    for (let _ = 0; _ < c.length; _++) if (c[_].name.toLowerCase() === h.toLowerCase()) {
      h = c[_].name;
      break;
    }
    const p = new x();
    this._requestStandardised && (p.sqlFormat = "standard"), this.datesInUnknownTimezone && (p.timeReferenceUnknownClient = !0);
    let f = r === null ? a === null ? "1=1" : "" : T(r, o);
    this._layer.definitionExpression && this._useDefinitionExpression && (f = f !== "" ? "((" + this._layer.definitionExpression + ") AND (" + f + "))" : this._layer.definitionExpression), p.where = f, p.spatialRelationship = this._makeRelationshipEnum(s), p.relationParameter = this._makeRelationshipParam(s), p.geometry = a === null ? null : a, p.returnDistinctValues = !0, p.returnGeometry = !1, p.outFields = [h];
    const y = await this.executeQuery(p, "execute");
    if (this._checkCancelled(u), !y.hasOwnProperty("features")) throw new I(C.InvalidStatResponse);
    let w = !1;
    for (let _ = 0; _ < c.length; _++) if (c[_].name === h) {
      c[_].type === "date" && (w = !0);
      break;
    }
    for (let _ = 0; _ < y.features.length; _++) {
      if (w) {
        const k = y.features[_].attributes[h];
        k !== null ? l.push(new Date(k)) : l.push(k);
      } else l.push(y.features[_].attributes[h]);
      if (l.length >= n) break;
    }
    return y.features.length === 0 ? l : y.features.length === this._layer.capabilities?.query.maxRecordCount && l.length < n ? { calculated: !0, result: await this._getDistinctPages(e + y.features.length, t, i, s, a, r, n, l, u) } : l;
  }
  async _distinctStat(e, t, i, s, a, r, n) {
    return { calculated: !0, result: await this._getDistinctPages(0, e, t, i, s, a, r, [], n) };
  }
  isTable() {
    return this._layer.isTable || this._layer.geometryType === null || this._layer.type === "table" || this._layer.geometryType === "" || this._layer.geometryType === "esriGeometryNull";
  }
  async _countstat(e, t, i, s) {
    const a = await this.databaseType(), r = new x();
    if (this._requestStandardised && (r.sqlFormat = "standard"), this.isTable() && i && t !== null && t !== "") return { calculated: !0, result: 0 };
    let n = s === null ? i === null ? "1=1" : "" : T(s, a);
    return this._layer.definitionExpression && this._useDefinitionExpression && (n = n !== "" ? "((" + this._layer.definitionExpression + ") AND (" + n + "))" : this._layer.definitionExpression), r.where = n, this.datesInUnknownTimezone && (r.timeReferenceUnknownClient = !0), r.where = n, r.spatialRelationship = this._makeRelationshipEnum(t), r.relationParameter = this._makeRelationshipParam(t), r.geometry = i === null ? null : i, r.returnGeometry = !1, { calculated: !0, result: await this.executeQuery(r, "executeForCount") };
  }
  async _stats(e, t, i, s, a, r, n) {
    await this._ensureLoaded();
    const l = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsSqlExpression === !0, u = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsStatistics === !0, o = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsDistinct === !0;
    if (e === "count") return o ? this._countstat(e, i, s, a) : { calculated: !1 };
    if (u === !1 || V(t) === !1 && l === !1 || t.isStandardized === !1) return i !== "" || a !== null ? { calculated: !1 } : this._manualStat(e, t, r, n);
    if (e === "distinct") return o === !1 ? i !== "" || a !== null ? { calculated: !1 } : this._manualStat(e, t, r, n) : this._distinctStat(e, t, i, s, a, r, n);
    const h = await this.databaseType();
    if (this.isTable() && s && i !== null && i !== "") return { calculated: !0, result: null };
    const c = new x();
    this._requestStandardised && (c.sqlFormat = "standard");
    let p = a === null ? s === null ? "1=1" : "" : T(a, h);
    this._layer.definitionExpression && this._useDefinitionExpression && (p = p !== "" ? "((" + this._layer.definitionExpression + ") AND (" + p + "))" : this._layer.definitionExpression), c.where = p, c.spatialRelationship = this._makeRelationshipEnum(i), c.relationParameter = this._makeRelationshipParam(i), c.geometry = s === null ? null : s, this.datesInUnknownTimezone && (c.timeReferenceUnknownClient = !0);
    const f = new de();
    f.statisticType = lt(e), f.onStatisticField = T(t, h), f.outStatisticFieldName = "ARCADE_STAT_RESULT", c.returnGeometry = !1;
    let y = "ARCADE_STAT_RESULT";
    c.outStatistics = [f];
    const w = await this.executeQuery(c, "execute");
    if (!w.hasOwnProperty("features") || w.features.length === 0) throw new I(C.InvalidStatResponse);
    let _ = !1;
    const k = w.fields ?? [];
    for (let S = 0; S < k.length; S++) if (k[S].name.toUpperCase() === "ARCADE_STAT_RESULT") {
      y = k[S].name, k[S].type === "date" && (_ = !0);
      break;
    }
    if (_) {
      let S = w.features[0].attributes[y];
      return S !== null && (S = new Date(w.features[0].attributes[y])), { calculated: !0, result: S };
    }
    return { calculated: !0, result: w.features[0].attributes[y] };
  }
  _stat(e, t, i, s, a, r, n) {
    return this._stats(e, t, i, s, a, r, n);
  }
  async _canDoAggregates(e, t) {
    await this._ensureLoaded();
    let i = !1;
    const s = this._layer.capabilities?.query, a = s?.supportsSqlExpression === !0;
    if (s != null && s.supportsStatistics === !0 && s.supportsOrderBy === !0 && (i = !0), i) for (let r = 0; r < t.length - 1; r++) (t[r].workingexpr?.isStandardized === !1 || V(t[r].workingexpr) === !1 && a === !1) && (i = !1);
    return i !== !1;
  }
  _makeRelationshipEnum(e) {
    if (e.includes("esriSpatialRelRelation")) return "relation";
    switch (e) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e;
  }
  _makeRelationshipParam(e) {
    return e.includes("esriSpatialRelRelation") ? e.split(":")[1] : "";
  }
  async _getAggregatePagesDataSourceDefinition(e, t, i, s, a, r, n) {
    await this._ensureLoaded();
    const l = await this.databaseType();
    let u = "", o = !1, h = !1;
    r !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === !0 && (u = r.constructClause(), h = !0), this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsPagination === !1 && (h = !1, o = !0, u = this._layer.objectIdField);
    const c = [];
    for (let w = 0; w < t.length; w++) {
      const _ = new de();
      _.onStatisticField = t[w].workingexpr !== null ? T(t[w].workingexpr, l) : "", _.outStatisticFieldName = t[w].field, _.statisticType = t[w].toStatisticsName(), c.push(_);
    }
    u === "" && (u = e.join(","));
    let p = this._maxQueryRate();
    const f = this._layer.capabilities?.query.maxRecordCount;
    f != null && f < p && (p = f);
    let y = a === null ? s === null ? "1=1" : "" : T(a, l);
    return this._layer.definitionExpression && this._useDefinitionExpression && (y = y !== "" ? "((" + this._layer.definitionExpression + ") AND (" + y + "))" : this._layer.definitionExpression), new g([], ["GETPAGES"], h, { groupbypage: !0, spatialRel: this._makeRelationshipEnum(i), relationParam: this._makeRelationshipParam(i), outFields: ["*"], useOIDpagination: o, generatedOid: n, resultRecordCount: p, resultOffset: 0, groupByFieldsForStatistics: e, outStatistics: c, geometry: s === null ? null : s, where: y, orderByFields: u, returnGeometry: !1, returnIdsOnly: !1, internal: { lastMaxId: -1, set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 } });
  }
  async _getAgregagtePhysicalPage(e, t, i) {
    let s = e.pagesDefinition.where;
    e.pagesDefinition.useOIDpagination === !0 && (s = s !== "" ? "(" + s + ") AND (" + e.pagesDefinition.generatedOid + ">" + e.pagesDefinition.internal.lastMaxId.toString() + ")" : e.pagesDefinition.generatedOid + ">" + e.pagesDefinition.internal.lastMaxId.toString());
    const a = e.pagesDefinition.internal.lastRetrieved, r = a, n = e.pagesDefinition.internal.lastPage, l = new x();
    if (this._requestStandardised && (l.sqlFormat = "standard"), l.where = s, l.spatialRelationship = e.pagesDefinition.spatialRel, l.relationParameter = e.pagesDefinition.relationParam, l.outFields = e.pagesDefinition.outFields, l.outStatistics = e.pagesDefinition.outStatistics, l.geometry = e.pagesDefinition.geometry, l.groupByFieldsForStatistics = e.pagesDefinition.groupByFieldsForStatistics, l.num = e.pagesDefinition.resultRecordCount, l.start = e.pagesDefinition.internal.lastPage, l.returnGeometry = e.pagesDefinition.returnGeometry, this.datesInUnknownTimezone && (l.timeReferenceUnknownClient = !0), l.orderByFields = e.pagesDefinition.orderByFields !== "" ? e.pagesDefinition.orderByFields.split(",") : null, this.isTable() && l.geometry && l.spatialRelationship) return [];
    const u = await this.executeQuery(l, "execute");
    if (this._checkCancelled(i), !u.hasOwnProperty("features")) throw new I(C.InvalidStatResponse);
    const o = [];
    if (e.pagesDefinition.internal.lastPage !== n) return [];
    u.features.length > 0 && u.features[0].attributes[e.pagesDefinition.generatedOid] === void 0 && (e.pagesDefinition.generatedOid = e.pagesDefinition.generatedOid.toLowerCase());
    for (let h = 0; h < u.features.length; h++) e.pagesDefinition.internal.set[r + h] = u.features[h].attributes[e.pagesDefinition.generatedOid];
    for (let h = 0; h < u.features.length; h++) o.push(new P({ attributes: u.features[h].attributes, geometry: null }));
    return e.pagesDefinition.useOIDpagination === !0 ? u.features.length === 0 ? e.pagesDefinition.internal.fullyResolved = !0 : e.pagesDefinition.internal.lastMaxId = u.features[u.features.length - 1].attributes[e.pagesDefinition.generatedOid] : (u.exceededTransferLimit === void 0 && u.features.length !== e.pagesDefinition.resultRecordCount || u.exceededTransferLimit === !1) && (e.pagesDefinition.internal.fullyResolved = !0), e.pagesDefinition.internal.lastRetrieved = a + u.features.length, e.pagesDefinition.internal.lastPage += e.pagesDefinition.resultRecordCount, o;
  }
  static create(e, t, i, s, a) {
    const r = new R({ url: e, outFields: t === null ? ["*"] : t });
    return new Q({ layer: r, spatialReference: i, lrucache: s, interceptor: a });
  }
  relationshipMetaData() {
    return this._layer && this._layer.source && this._layer.source.sourceJSON?.relationships ? this._layer.source.sourceJSON.relationships : [];
  }
  serviceUrl() {
    return K(this._layer.parsedUrl.path);
  }
  async queryAttachments(e, t, i, s, a) {
    const r = this._layer.capabilities;
    if (r?.data.supportsAttachment && r?.operations.supportsQueryAttachments) {
      const n = { objectIds: [e], returnMetadata: a };
      (t && t > 0 || i && i > 0) && (n.size = [t && t > 0 ? t : 0, i && i > 0 ? i : t + 1]), s && s.length > 0 && (n.attachmentTypes = s), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: n, method: "attachments" });
      const l = await this._layer.queryAttachments(n), u = [];
      return l && l[e] && l[e].forEach((o) => {
        const h = this._layer.parsedUrl.path + "/" + e.toString() + "/attachments/" + o.id.toString();
        let c = null;
        a && o.exifInfo && (c = Ye.convertJsonToArcade(o.exifInfo, "system", !0)), u.push(new He(o.id, o.name, o.contentType, o.size, h, c, o.keywords ?? null));
      }), u;
    }
    return [];
  }
  async queryRelatedFeatures(e) {
    const t = { f: "json", relationshipId: e.relationshipId.toString(), definitionExpression: e.where, outFields: e.outFields?.join(","), returnGeometry: e.returnGeometry.toString() };
    e.resultOffset !== void 0 && e.resultOffset !== null && (t.resultOffset = e.resultOffset.toString()), e.resultRecordCount !== void 0 && e.resultRecordCount !== null && (t.resultRecordCount = e.resultRecordCount.toString()), e.orderByFields && (t.orderByFields = e.orderByFields.join(",")), e.objectIds && e.objectIds.length > 0 && (t.objectIds = e.objectIds.join(",")), e.outSpatialReference && (t.outSR = We(e.outSpatialReference)), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preRequestCallback({ layer: this._layer, queryPayload: t, method: "relatedrecords", url: this._layer.parsedUrl.path + "/queryRelatedRecords" });
    const i = await j(this._layer.parsedUrl.path + "/queryRelatedRecords", { responseType: "json", query: t });
    if (i.data) {
      const s = {}, a = i.data;
      if (a?.relatedRecordGroups) {
        const r = a.spatialReference;
        for (const n of a.relatedRecordGroups) {
          const l = n.objectId, u = [];
          for (const o of n.relatedRecords) {
            o.geometry && (o.geometry.spatialReference = r);
            const h = new P({ geometry: o.geometry ? $e(o.geometry) : null, attributes: o.attributes });
            u.push(h);
          }
          s[l] = { features: u, exceededTransferLimit: a.exceededTransferLimit === !0 };
        }
      }
      return s;
    }
    throw new I(C.InvalidRequest);
  }
  async getFeatureByObjectId(e, t) {
    const i = new x();
    i.outFields = t, i.returnGeometry = !1, i.outSpatialReference = this.spatialReference, i.where = this.objectIdField + "=" + e.toString(), this.datesInUnknownTimezone && (i.timeReferenceUnknownClient = !0), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: i, method: "execute" });
    const s = await he(this._layer.parsedUrl.path, i);
    return s.features.length === 1 ? s.features[0] : null;
  }
  async getIdentityUser() {
    await this.load();
    const e = ce?.findCredential(this._layer.url);
    return e ? e.userId : null;
  }
  async getOwningSystemUrl() {
    await this.load();
    const e = ce?.findServerInfo(this._layer.url);
    if (e) return e.owningSystemUrl;
    let t = this._layer.url;
    const i = t.toLowerCase().indexOf("/rest/services");
    if (t = i > -1 ? t.substring(0, i) : t, t) {
      t += "/rest/info";
      try {
        const s = await j(t, { query: { f: "json" } });
        let a = "";
        return s.data?.owningSystemUrl && (a = s.data.owningSystemUrl), a;
      } catch {
        return "";
      }
    }
    return "";
  }
  getDataSourceFeatureSet() {
    const e = new Q({ layer: this._layer, spatialReference: this.spatialReference ?? void 0, outFields: this._overrideFields ?? void 0, includeGeometry: !this._removeGeometry, lrucache: this.recentlyUsedQueries ?? void 0, interceptor: this.featureSetQueryInterceptor ?? void 0 });
    return e._useDefinitionExpression = !1, e;
  }
  get preferredTimeZone() {
    return this._layer.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._layer.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._layer.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return this._layer.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._layer.timeInfo ?? null;
  }
  async getFeatureSetInfo() {
    if (this.fsetInfo) return this.fsetInfo;
    let e = null, { parsedUrl: { path: t }, serviceItemId: i = null } = this._layer;
    if (t) {
      const a = await j(t, { responseType: "json", query: { f: "json" } });
      e = a?.data?.name ?? null, i = a?.data?.serviceItemId ?? null;
    }
    const s = this._layer.title && (this._layer.parent ?? null) !== null;
    return this.featureSetInfo = { layerId: this._layer.layerId, layerName: e === "" ? null : e, itemId: i === "" ? null : i, serviceLayerUrl: t === "" ? null : t, webMapLayerId: s ? this._layer.id ?? null : null, webMapLayerTitle: s ? this._layer.title ?? null : null, className: null, objectClassId: null }, this.fsetInfo;
  }
}
class re extends O {
  constructor(e) {
    super(e), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerMemory", this._removeGeometry = !1, this._overrideFields = null, this._forceIsTable = !1, e.spatialReference && (this.spatialReference = e.spatialReference), this._transparent = !0, this._maxProcessing = 1e3, this._layer = e.layer, this._wset = null, e.isTable === !0 && (this._forceIsTable = !0), e.outFields !== void 0 && (this._overrideFields = e.outFields), e.includeGeometry !== void 0 && (this._removeGeometry = e.includeGeometry === !1);
  }
  _maxQueryRate() {
    return se;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  async loadImpl() {
    return this._layer.loaded === !0 ? (this._initialiseFeatureSet(), this) : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  get gdbVersion() {
    return "";
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this._overrideFields !== null) if (this._overrideFields.length === 1 && this._overrideFields[0] === "*") this._overrideFields = null;
    else {
      const e = [], t = [];
      for (const i of this.fields) if (i.type === "oid") e.push(i), t.push(i.name);
      else for (const s of this._overrideFields) if (s.toLowerCase() === i.name.toLowerCase()) {
        e.push(i), t.push(i.name);
        break;
      }
      this.fields = e, this._overrideFields = t;
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e of this.fields) e.type === "global-id" && (this.globalIdField = e.name);
    this._databaseType = v.Standardised, this.hasZ = this._layer?.capabilities?.data?.supportsZ === !0, this.hasM = this._layer?.capabilities?.data?.supportsM === !0, this._layer instanceof Re ? (this.subtypeField = this._layer.subtypeField ?? "", this.subtypes = this._layer.subtypes, this.types = null, this.typeIdField = null) : (this.typeIdField = this._layer.typeIdField ?? "", this.types = this._layer.types, this.subtypeField = this._layer.subtypeField, this.subtypes = this._layer.subtypes);
  }
  isTable() {
    return this._forceIsTable || this._layer.isTable || this._layer.type === "table" || !this._layer.geometryType;
  }
  _isInFeatureSet() {
    return b.InFeatureSet;
  }
  _candidateIdTransform(e) {
    return e;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._getFilteredSet("", null, null, null, e);
      return this._wset = t, t;
    }
    return this._wset;
  }
  _changeFeature(e) {
    const t = {};
    for (const i of this.fields) t[i.name] = e.attributes[i.name];
    return new P({ geometry: this._removeGeometry === !0 ? null : e.geometry, attributes: t });
  }
  async _getFilteredSet(e, t, i, s, a) {
    let r = "", n = !1;
    if (s !== null && (r = s.constructClause(), n = !0), this.isTable() && t && e !== null && e !== "")
      return new g([], [], !0, null);
    const l = new x();
    l.returnZ = this.hasZ, l.returnM = this.hasM, l.where = i === null ? t === null ? "1=1" : "" : T(i, v.Standardised), l.spatialRelationship = this._makeRelationshipEnum(e), l.outSpatialReference = this.spatialReference, l.orderByFields = r !== "" ? r.split(",") : null, l.geometry = t === null ? null : t, l.returnGeometry = !0, l.relationParameter = this._makeRelationshipParam(e);
    const u = await this._layer.queryFeatures(l);
    if (u === null) return new g([], [], n, null);
    this._checkCancelled(a);
    const o = [];
    return u.features.forEach((h) => {
      const c = h.attributes[this._layer.objectIdField];
      o.push(c), this._featureCache[c] = this._changeFeature(h);
    }), new g([], o, n, null);
  }
  _makeRelationshipEnum(e) {
    if (e.includes("esriSpatialRelRelation")) return "relation";
    switch (e) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e;
  }
  _makeRelationshipParam(e) {
    return e.includes("esriSpatialRelRelation") ? e.split(":")[1] : "";
  }
  async _queryAllFeatures() {
    if (this._wset) return this._wset;
    const e = new x();
    if (e.where = "1=1", await this._ensureLoaded(), this._layer.source && this._layer.source.items) {
      const s = [];
      return this._layer.source.items.forEach((a) => {
        const r = a.attributes[this._layer.objectIdField];
        s.push(r), this._featureCache[r] = this._changeFeature(a);
      }), this._wset = new g([], s, !1, null), this._wset;
    }
    e.returnZ = this.hasZ, e.returnM = this.hasM;
    const t = await this._layer.queryFeatures(e), i = [];
    return t.features.forEach((s) => {
      const a = s.attributes[this._layer.objectIdField];
      i.push(a), this._featureCache[a] = this._changeFeature(s);
    }), this._wset = new g([], i, !1, null), this._wset;
  }
  async _getFeatures(e, t, i) {
    const s = [];
    t !== -1 && this._featureCache[t] === void 0 && s.push(t);
    for (let a = e._lastFetchedIndex; a < e._known.length && (e._lastFetchedIndex += 1, !(this._featureCache[e._known[a]] === void 0 && (e._known[a] !== t && s.push(e._known[a]), s.length > i))); a++) ;
    if (s.length === 0) return "success";
    throw new I(C.MissingFeatures);
  }
  async _refineSetBlock(e) {
    return e;
  }
  async _stat() {
    return { calculated: !1 };
  }
  async _canDoAggregates() {
    return !1;
  }
  relationshipMetaData() {
    return [];
  }
  static _cloneAttr(e) {
    const t = {};
    for (const i in e) t[i] = e[i];
    return t;
  }
  nativeCapabilities() {
    return { title: this._layer.title ?? "", canQueryRelated: !1, source: this, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: !0 };
  }
  static create(e, t) {
    let i = e.layerDefinition.objectIdField;
    const s = e.layerDefinition.typeIdField ?? "", a = [];
    if (e.layerDefinition.types) for (const f of e.layerDefinition.types) a.push(Ze.fromJSON(f));
    let r = e.layerDefinition.geometryType;
    r === void 0 && (r = e.featureSet.geometryType || "");
    let n = e.featureSet.features;
    const l = t.toJSON();
    if (!i) {
      let f = !1;
      for (const y of e.layerDefinition.fields) if (y.type === "oid" || y.type === "esriFieldTypeOID") {
        i = y.name, f = !0;
        break;
      }
      if (f === !1) {
        let y = "FID", w = !0, _ = 0;
        for (; w; ) {
          let S = !0;
          for (const z of e.layerDefinition.fields) if (z.name === y) {
            S = !1;
            break;
          }
          S === !0 ? w = !1 : (_++, y = "FID" + _.toString());
        }
        e.layerDefinition.fields.push({ type: "esriFieldTypeOID", name: y, alias: y });
        const k = [];
        for (let S = 0; S < n.length; S++) k.push({ geometry: e.featureSet.features[S].geometry, attributes: e.featureSet.features[S].attributes ? this._cloneAttr(e.featureSet.features[S].attributes) : {} }), k[S].attributes[y] = S;
        n = k, i = y;
      }
    }
    const u = [];
    for (const f of e.layerDefinition.fields) f instanceof G ? u.push(f) : u.push(G.fromJSON(f));
    let o = r;
    switch (o || (o = ""), o) {
      case "esriGeometryPoint":
        o = "point";
        break;
      case "esriGeometryPolyline":
        o = "polyline";
        break;
      case "esriGeometryPolygon":
        o = "polygon";
        break;
      case "esriGeometryEnvelope":
        o = "extent";
        break;
      case "esriGeometryMultipoint":
        o = "multipoint";
        break;
      case "":
      case "esriGeometryNull":
        o = "esriGeometryNull";
    }
    if (o !== "esriGeometryNull") for (const f of n) f.geometry && !(f.geometry instanceof ze) && (f.geometry.type = o, f.geometry.spatialReference === void 0 && (f.geometry.spatialReference = l));
    else for (const f of n) f.geometry && (f.geometry = null);
    const h = { outFields: ["*"], source: n, fields: u, hasZ: e?.layerDefinition?.hasZ === !0 || e?.featureSet?.hasZ === !0, hasM: e?.layerDefinition?.hasM === !0 || e?.featureSet?.hasM === !0, types: a, typeIdField: s, objectIdField: i, spatialReference: t }, c = o === "esriGeometryNull" || o === null;
    c || (h.geometryType = o);
    const p = new R(h);
    return e?.layerDefinition?.subtypeField && e?.layerDefinition?.subtypes && p.read({ subtypes: e.layerDefinition.subtypes, subtypeField: e.layerDefinition.subtypeField }), new re({ layer: p, spatialReference: t, isTable: c });
  }
  async queryAttachments() {
    return [];
  }
  async getFeatureByObjectId(e) {
    const t = new x();
    t.where = this.objectIdField + "=" + e.toString(), t.returnZ = this.hasZ, t.returnM = this.hasM;
    const i = await this._layer.queryFeatures(t);
    return i.features.length === 1 ? i.features[0] : null;
  }
  async getOwningSystemUrl() {
    return "";
  }
  async getIdentityUser() {
    return "";
  }
  get preferredTimeZone() {
    return this._layer.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._layer.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._layer?.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return this._layer?.editFieldsInfo;
  }
  get timeInfo() {
    return this._layer?.timeInfo;
  }
  async getFeatureSetInfo() {
    const e = this._layer.title && this._layer.parent;
    return this.fsetInfo ?? { layerId: null, layerName: null, itemId: null, serviceLayerUrl: null, webMapLayerId: e ? this._layer.id ?? null : null, webMapLayerTitle: e ? this._layer.title ?? null : null, className: null, objectClassId: null };
  }
}
class Ct extends O {
  constructor(e) {
    super(e), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerRelated", this._findObjectId = -1, this._requestStandardised = !1, this._removeGeometry = !1, this._overrideFields = null, this.featureObjectId = null, e.spatialReference && (this.spatialReference = e.spatialReference), this._transparent = !0, this._maxProcessing = 1e3, this._layer = e.layer, this._wset = null, this._findObjectId = e.objectId, this.featureObjectId = e.objectId, this.relationship = e.relationship, this._relatedLayer = e.relatedLayer, e.outFields !== void 0 && (this._overrideFields = e.outFields), e.includeGeometry !== void 0 && (this._removeGeometry = e.includeGeometry === !1);
  }
  _maxQueryRate() {
    return se;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  async loadImpl() {
    return await Promise.all([this._layer.load(), this._relatedLayer?.load()]), this._initialiseFeatureSet(), this;
  }
  nativeCapabilities() {
    return this._relatedLayer.nativeCapabilities();
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._relatedLayer.geometryType, this.fields = this._relatedLayer.fields.slice(0), this.hasZ = this._relatedLayer.hasZ, this.hasM = this._relatedLayer.hasM, this._overrideFields !== null) if (this._overrideFields.length === 1 && this._overrideFields[0] === "*") this._overrideFields = null;
    else {
      const t = [], i = [];
      for (const s of this.fields) if (s.type === "oid") t.push(s), i.push(s.name);
      else for (const a of this._overrideFields) if (a.toLowerCase() === s.name.toLowerCase()) {
        t.push(s), i.push(s.name);
        break;
      }
      this.fields = t, this._overrideFields = i;
    }
    const e = this._layer.nativeCapabilities();
    e && (this._databaseType = e.databaseType, this._requestStandardised = e.requestStandardised), this.objectIdField = this._relatedLayer.objectIdField, this.globalIdField = this._relatedLayer.globalIdField, this.hasM = this._relatedLayer.supportsM, this.hasZ = this._relatedLayer.supportsZ, this.typeIdField = this._relatedLayer.typeIdField, this.types = this._relatedLayer.types, this.subtypeField = this._relatedLayer.subtypeField, this.subtypes = this._relatedLayer.subtypes;
  }
  async databaseType() {
    return await this._relatedLayer.databaseType(), this._databaseType = this._relatedLayer._databaseType, this._databaseType;
  }
  isTable() {
    return this._relatedLayer.isTable();
  }
  _isInFeatureSet() {
    return b.InFeatureSet;
  }
  _candidateIdTransform(e) {
    return e;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._getFilteredSet("", null, null, null, e);
      return this._wset = t, t;
    }
    return this._wset;
  }
  _changeFeature(e) {
    const t = {};
    for (const i of this.fields) t[i.name] = e.attributes[i.name];
    return new P({ geometry: this._removeGeometry === !0 ? null : e.geometry, attributes: t });
  }
  async _getFilteredSet(e, t, i, s, a) {
    if (await this.databaseType(), this.isTable() && t && e !== null && e !== "")
      return new g([], [], !0, null);
    const r = this._layer.nativeCapabilities();
    if (r.canQueryRelated === !1)
      return new g([], [], !0, null);
    if (r.capabilities?.queryRelated && r.capabilities.queryRelated.supportsPagination) return this._getFilteredSetUsingPaging(e, t, i, s, a);
    let n = "", l = !1;
    s !== null && r.capabilities?.queryRelated && r.capabilities.queryRelated.supportsOrderBy === !0 && (n = s.constructClause(), l = !0);
    const u = new fe();
    u.objectIds = [this._findObjectId];
    const o = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((_) => _.name) : ["*"]);
    u.outFields = o, u.relationshipId = this.relationship.id, u.where = "1=1";
    let h = !0;
    this._removeGeometry === !0 && (h = !1), u.returnGeometry = h, this._requestStandardised && (u.sqlFormat = "standard"), u.outSpatialReference = this.spatialReference, u.orderByFields = n !== "" ? n.split(",") : null;
    const c = await r.source.queryRelatedFeatures(u);
    this._checkCancelled(a);
    const p = c[this._findObjectId] ? c[this._findObjectId].features : [], f = [];
    for (let _ = 0; _ < p.length; _++) this._featureCache[p[_].attributes[this._relatedLayer.objectIdField]] = p[_], f.push(p[_].attributes[this._relatedLayer.objectIdField]);
    const y = t && e !== null && e !== "", w = i != null;
    return new g(y || w ? f : [], y || w ? [] : f, l, null);
  }
  _fieldsIncludingObjectId(e) {
    if (e === null) return [this.objectIdField];
    const t = e.slice(0);
    if (t.includes("*")) return t;
    let i = !1;
    for (const s of t) if (s.toUpperCase() === this.objectIdField.toUpperCase()) {
      i = !0;
      break;
    }
    return i === !1 && t.push(this.objectIdField), t;
  }
  async _getFilteredSetUsingPaging(e, t, i, s, a) {
    let r = "", n = !1;
    const l = this._layer.nativeCapabilities();
    s !== null && l?.capabilities?.queryRelated && l.capabilities.queryRelated.supportsOrderBy === !0 && (r = s.constructClause(), n = !0), await this.databaseType();
    const u = "1=1";
    let o = this._maxQueryRate();
    const h = l.capabilities?.query.maxRecordCount;
    h != null && h < o && (o = h);
    const c = t && e !== null && e !== "", p = i != null;
    let f = null, y = !0;
    this._removeGeometry === !0 && (y = !1);
    const w = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((_) => _.name) : ["*"]);
    return f = new g(c || p ? ["GETPAGES"] : [], c || p ? [] : ["GETPAGES"], n, { outFields: w.join(","), resultRecordCount: o, resultOffset: 0, objectIds: [this._findObjectId], where: u, orderByFields: r, returnGeometry: y, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 } }), await this._expandPagedSet(f, o, 0, 0, a), f;
  }
  _expandPagedSet(e, t, i, s, a) {
    return this._expandPagedSetFeatureSet(e, t, i, s, a);
  }
  _clonePageDefinition(e) {
    return e === null ? null : e.groupbypage !== !0 ? { groupbypage: !1, outFields: e.outFields, resultRecordCount: e.resultRecordCount, resultOffset: e.resultOffset, where: e.where, objectIds: e.objectIds, orderByFields: e.orderByFields, returnGeometry: e.returnGeometry, returnIdsOnly: e.returnIdsOnly, internal: e.internal } : { groupbypage: !0, outFields: e.outFields, resultRecordCount: e.resultRecordCount, useOIDpagination: e.useOIDpagination, generatedOid: e.generatedOid, groupByFieldsForStatistics: e.groupByFieldsForStatistics, resultOffset: e.resultOffset, outStatistics: e.outStatistics, geometry: e.geometry, where: e.where, objectIds: e.objectIds, orderByFields: e.orderByFields, returnGeometry: e.returnGeometry, returnIdsOnly: e.returnIdsOnly, internal: e.internal };
  }
  async _getPhysicalPage(e, t, i) {
    const s = e.pagesDefinition.internal.lastRetrieved, a = s, r = e.pagesDefinition.internal.lastPage, n = this._layer.nativeCapabilities(), l = new fe();
    this._requestStandardised === !0 && (l.sqlFormat = "standard"), l.relationshipId = this.relationship.id, l.objectIds = e.pagesDefinition.objectIds, l.resultOffset = e.pagesDefinition.internal.lastPage, l.resultRecordCount = e.pagesDefinition.resultRecordCount, l.outFields = e.pagesDefinition.outFields.split(","), l.where = e.pagesDefinition.where, l.orderByFields = e.pagesDefinition.orderByFields !== "" ? e.pagesDefinition.orderByFields.split(",") : null, l.returnGeometry = e.pagesDefinition.returnGeometry, l.outSpatialReference = this.spatialReference;
    const u = await n.source.queryRelatedFeatures(l);
    if (this._checkCancelled(i), e.pagesDefinition.internal.lastPage !== r) return 0;
    const o = u[this._findObjectId] ? u[this._findObjectId].features : [];
    for (let c = 0; c < o.length; c++) e.pagesDefinition.internal.set[a + c] = o[c].attributes[this._relatedLayer.objectIdField];
    for (let c = 0; c < o.length; c++) this._featureCache[o[c].attributes[this._relatedLayer.objectIdField]] = o[c];
    const h = !u[this._findObjectId] || u[this._findObjectId].exceededTransferLimit === !1;
    return o.length !== e.pagesDefinition.resultRecordCount && h && (e.pagesDefinition.internal.fullyResolved = !0), e.pagesDefinition.internal.lastRetrieved = s + o.length, e.pagesDefinition.internal.lastPage += e.pagesDefinition.resultRecordCount, o.length;
  }
  async _getFeatures(e, t, i, s) {
    const a = [];
    t !== -1 && this._featureCache[t] === void 0 && a.push(t);
    const r = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e, r) === !0) return await this._expandPagedSet(e, r, 0, 0, s), this._getFeatures(e, t, i, s);
    let n = 0;
    for (let l = e._lastFetchedIndex; l < e._known.length && (n++, n <= i && (e._lastFetchedIndex += 1), !(e._known[l] !== "GETPAGES" && this._featureCache[e._known[l]] === void 0 && (e._known[l] !== t && a.push(e._known[l]), a.length > i))) && !(n >= i && a.length === 0); l++) ;
    if (a.length === 0) return "success";
    throw new I(C.MissingFeatures);
  }
  async _refineSetBlock(e, t, i) {
    return e;
  }
  async _stat(e, t, i, s, a, r, n) {
    return { calculated: !1 };
  }
  get gdbVersion() {
    return this._relatedLayer.gdbVersion;
  }
  async _canDoAggregates(e, t, i, s, a) {
    return !1;
  }
  relationshipMetaData() {
    return this._relatedLayer.relationshipMetaData();
  }
  serviceUrl() {
    return this._relatedLayer.serviceUrl();
  }
  queryAttachments(e, t, i, s, a) {
    return this._relatedLayer.queryAttachments(e, t, i, s, a);
  }
  getFeatureByObjectId(e, t) {
    return this._relatedLayer.getFeatureByObjectId(e, t);
  }
  getOwningSystemUrl() {
    return this._relatedLayer.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._relatedLayer.getIdentityUser();
  }
  getDataSourceFeatureSet() {
    return this._relatedLayer;
  }
  get preferredTimeZone() {
    return this._relatedLayer?.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._relatedLayer?.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._relatedLayer?.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return this._relatedLayer?.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._relatedLayer?.timeInfo ?? null;
  }
  async getFeatureSetInfo() {
    return this.fsetInfo ?? this._layer.featureSetInfo;
  }
}
function Dt() {
  m.applicationCache === null && (m.applicationCache = new m());
}
async function ee(d, e) {
  if (m.applicationCache) {
    const t = m.applicationCache.getLayerInfo(d);
    if (t) {
      const a = await t;
      return new R({ url: d, outFields: e, sourceJSON: a });
    }
    const i = new R({ url: d, outFields: e }), s = (async () => (await i.load(), i.sourceJSON))();
    if (m.applicationCache) {
      m.applicationCache.setLayerInfo(d, s);
      try {
        return await s, i;
      } catch (a) {
        throw m.applicationCache.clearLayerInfo(d), a;
      }
    }
    return await s, i;
  }
  return new R({ url: d, outFields: e });
}
async function ne(d, e, t, i, s, a = null) {
  return A(await ee(d, ["*"]), e, t, i, s, a);
}
function A(d, e = null, t = null, i = !0, s = null, a = null) {
  if (d instanceof R || W(d)) {
    const n = { layer: d, spatialReference: e, outFields: t, includeGeometry: i, lrucache: s, interceptor: a };
    return d.url || !d.source ? new Q(n) : new re(n);
  }
  const r = A(d.parent, e, t, i, s, a);
  return r.filter(D.create(d.parent.subtypeField + "=" + d.subtypeCode.toString(), d.parent.fieldsIndex, r.dateFieldsTimeZoneDefaultUTC));
}
async function Tt(d) {
  if (m.applicationCache !== null) {
    const t = m.applicationCache.getLayerInfo(d);
    if (t !== null) return t;
  }
  const e = (async () => {
    const t = await j(d, { responseType: "json", query: { f: "json" } });
    return t.data ? t.data : null;
  })();
  if (m.applicationCache !== null) {
    m.applicationCache.setLayerInfo(d, e);
    try {
      return await e;
    } catch (t) {
      throw m.applicationCache.clearLayerInfo(d), t;
    }
  }
  return e;
}
async function Rt(d, e) {
  const t = "QUERYDATAELEMTS:" + e.toString() + ":" + d;
  if (m.applicationCache !== null) {
    const s = m.applicationCache.getLayerInfo(t);
    if (s !== null) return s;
  }
  const i = (async () => {
    const s = await j(d + "/queryDataElements", { method: "post", responseType: "json", query: { layers: JSON.stringify([e.toString()]), f: "json" } });
    if (s.data) {
      const a = s.data;
      if (a.layerDataElements?.[0]) return a.layerDataElements[0];
    }
    throw new I(C.DataElementsNotFound);
  })();
  if (m.applicationCache !== null) {
    m.applicationCache.setLayerInfo(t, i);
    try {
      return await i;
    } catch (s) {
      throw m.applicationCache.clearLayerInfo(t), s;
    }
  }
  return i;
}
async function Le(d) {
  if (m.applicationCache !== null) {
    const t = m.applicationCache.getLayerInfo(d);
    if (t !== null) return t;
  }
  const e = (async () => {
    const t = await j(d, { responseType: "json", query: { f: "json" } });
    if (t.data) {
      const i = t.data;
      return i.layers || (i.layers = []), i.tables || (i.tables = []), i;
    }
    return { layers: [], tables: [] };
  })();
  if (m.applicationCache !== null) {
    m.applicationCache.setLayerInfo(d, e);
    try {
      return await e;
    } catch (t) {
      throw m.applicationCache.clearLayerInfo(d), t;
    }
  }
  return e;
}
async function kt(d, e) {
  const t = { metadata: null, networkId: -1, unVersion: 3, terminals: [], queryelem: null, layerNameLkp: {}, lkp: null }, i = await Le(d);
  if (t.metadata = i, i.controllerDatasetLayers?.utilityNetworkLayerId !== void 0 && i.controllerDatasetLayers.utilityNetworkLayerId !== null) {
    if (i.layers) for (const r of i.layers) t.layerNameLkp[r.id] = r.name;
    if (i.tables) for (const r of i.tables) t.layerNameLkp[r.id] = r.name;
    const s = i.controllerDatasetLayers.utilityNetworkLayerId;
    t.networkId = s;
    const a = await Rt(d, s);
    if (a) {
      t.queryelem = a, t.queryelem?.dataElement && t.queryelem.dataElement.schemaGeneration !== void 0 && (t.unVersion = t.queryelem.dataElement.schemaGeneration), t.lkp = {}, t.queryelem.dataElement.domainNetworks || (t.queryelem.dataElement.domainNetworks = []);
      for (const n of t.queryelem.dataElement.domainNetworks) {
        for (const l of n.edgeSources ?? []) {
          const u = { layerId: l.layerId, sourceId: l.sourceId, className: t.layerNameLkp[l.layerId] ?? null };
          u.className && (t.lkp[u.className] = u);
        }
        for (const l of n.junctionSources ?? []) {
          const u = { layerId: l.layerId, sourceId: l.sourceId, className: t.layerNameLkp[l.layerId] ?? null };
          u.className && (t.lkp[u.className] = u);
        }
      }
      if (t.queryelem.dataElement.terminalConfigurations) for (const n of t.queryelem.dataElement.terminalConfigurations) for (const l of n.terminals) t.terminals.push({ terminalId: l.terminalId, terminalName: l.terminalName });
      const r = await Tt(d + "/" + s);
      if (r.systemLayers?.associationsTableId !== void 0 && r.systemLayers.associationsTableId !== null) {
        const n = [];
        t.unVersion >= 4 && (n.push("STATUS"), n.push("PERCENTALONG"));
        let l = await ne(d + "/" + r.systemLayers.associationsTableId.toString(), e, ["OBJECTID", "FROMNETWORKSOURCEID", "TONETWORKSOURCEID", "FROMGLOBALID", "TOGLOBALID", "TOTERMINALID", "FROMTERMINALID", "ASSOCIATIONTYPE", "ISCONTENTVISIBLE", "GLOBALID", ...n], !1, null, null);
        return await l.load(), t.unVersion >= 4 && (l = l.filter(D.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63)", l.getFieldsIndex(), l.dateFieldsTimeZoneDefaultUTC)), await l.load()), { lkp: t.lkp, associations: l, unVersion: t.unVersion, terminals: t.terminals };
      }
      return { associations: null, unVersion: t.unVersion, lkp: null, terminals: [] };
    }
    return { associations: null, unVersion: t.unVersion, lkp: null, terminals: [] };
  }
  return { associations: null, unVersion: t.unVersion, lkp: null, terminals: [] };
}
async function vt(d, e, t, i = null, s = null, a = !0, r = null, n = null) {
  let l = d.serviceUrl();
  if (!l) return null;
  l = l.charAt(l.length - 1) === "/" ? l + e.relatedTableId.toString() : l + "/" + e.relatedTableId.toString();
  const u = await ne(l, i, s, a, r, n);
  return new Ct({ layer: d, relatedLayer: u, relationship: e, objectId: t, spatialReference: i, outFields: s, includeGeometry: a, lrucache: r, interceptor: n });
}
U.registerAction(), It.registerAction(), Y.registerAction(), ot.registerAction(), ae.registerAction();
class xt extends ve {
  constructor(e, t = null, i = null, s = null) {
    super(), this._map = e, this._overridespref = t, this._lrucache = i, this._interceptor = s, this._instantLayers = [];
  }
  _makeAndAddFeatureSet(e, t = !0, i = null) {
    const s = A(e, this._overridespref, i === null ? ["*"] : i, t, this._lrucache, this._interceptor);
    return this._instantLayers.push({ featureset: s, opitem: e, includeGeometry: t, outFields: JSON.stringify(i) }), s;
  }
  async featureSetByName(e, t = !0, i = null) {
    if (this._map.loaded !== void 0 && this._map.load !== void 0 && this._map.loaded === !1) return await this._map.load(), this.featureSetByName(e, t, i);
    i === null && (i = ["*"]), i = (i = i.slice(0)).sort();
    const s = JSON.stringify(i);
    for (let r = 0; r < this._instantLayers.length; r++) {
      const n = this._instantLayers[r];
      if (n.opitem.title === e && n.includeGeometry === t && n.outFields === s) return this._instantLayers[r].featureset;
    }
    const a = this._map.allLayers.find((r) => {
      if (r instanceof R) {
        if (r.title === e) return !0;
      } else if (W(r) && r.title === e) return !0;
      return !1;
    });
    if (a) return this._makeAndAddFeatureSet(a, t, i);
    if (this._map.tables) {
      const r = this._map.tables.find((n) => !!(n.title && n.title === e || n.title && n.title === e));
      if (r) {
        if (r instanceof R) return this._makeAndAddFeatureSet(r, t, i);
        if (!r._materializedTable) {
          const n = r.outFields ? r : { ...r, outFields: ["*"] };
          r._materializedTable = new R(n);
        }
        return await r._materializedTable.load(), this._makeAndAddFeatureSet(r._materializedTable, t, i);
      }
    }
    return null;
  }
  async featureSetById(e, t = !0, i = ["*"]) {
    if (this._map.loaded !== void 0 && this._map.load !== void 0 && this._map.loaded === !1) return await this._map.load(), this.featureSetById(e, t, i);
    i === null && (i = ["*"]), i = (i = i.slice(0)).sort();
    const s = JSON.stringify(i);
    for (let r = 0; r < this._instantLayers.length; r++) {
      const n = this._instantLayers[r];
      if (n.opitem.id === e && n.includeGeometry === t && n.outFields === s) return this._instantLayers[r].featureset;
    }
    const a = this._map.allLayers.find((r) => {
      if (r instanceof R) {
        if (r.id === e) return !0;
      } else if (W(r) && r.id === e) return !0;
      return !1;
    });
    if (a) return this._makeAndAddFeatureSet(a, t, i);
    if (this._map.tables) {
      const r = this._map.tables.find((n) => n.id === e);
      if (r) {
        if (r instanceof R) return this._makeAndAddFeatureSet(r, t, i);
        if (!r._materializedTable) {
          const n = { ...r, outFields: ["*"] };
          r._materializedTable = new R(n);
        }
        return await r._materializedTable.load(), this._makeAndAddFeatureSet(r._materializedTable, t, i);
      }
    }
    return null;
  }
}
class le extends ve {
  constructor(e, t = null, i = null, s = null) {
    super(), this._url = e, this._overridespref = t, this._lrucache = i, this._interceptor = s, this.metadata = null, this._instantLayers = [];
  }
  get url() {
    return this._url;
  }
  _makeAndAddFeatureSet(e, t = !0, i = null) {
    const s = A(e, this._overridespref, i === null ? ["*"] : i, t, this._lrucache);
    return this._instantLayers.push({ featureset: s, opitem: e, includeGeometry: t, outFields: JSON.stringify(i) }), s;
  }
  async _loadMetaData() {
    const e = await Le(this._url);
    return this.metadata = e, e;
  }
  load() {
    return this._loadMetaData();
  }
  clone() {
    return new le(this._url, this._overridespref, this._lrucache, this._interceptor);
  }
  async featureSetByName(e, t = !0, i = null) {
    i === null && (i = ["*"]), i = (i = i.slice(0)).sort();
    const s = JSON.stringify(i);
    for (let n = 0; n < this._instantLayers.length; n++) {
      const l = this._instantLayers[n];
      if (l.opitem.title === e && l.includeGeometry === t && l.outFields === s) return this._instantLayers[n].featureset;
    }
    const a = await this._loadMetaData();
    let r = null;
    for (const n of a.layers ?? []) n.name === e && (r = n);
    if (!r) for (const n of a.tables ?? []) n.name === e && (r = n);
    if (r) {
      const n = await ee(this._url + "/" + r.id, ["*"]);
      return this._makeAndAddFeatureSet(n, t, i);
    }
    return null;
  }
  async featureSetById(e, t = !0, i = ["*"]) {
    i === null && (i = ["*"]), i = (i = i.slice(0)).sort();
    const s = JSON.stringify(i);
    e = e != null ? e.toString() : "";
    for (let n = 0; n < this._instantLayers.length; n++) {
      const l = this._instantLayers[n];
      if (l.opitem.id === e && l.includeGeometry === t && l.outFields === s) return this._instantLayers[n].featureset;
    }
    const a = await this._loadMetaData();
    let r = null;
    for (const n of a.layers ?? []) n.id !== null && n.id !== void 0 && n.id.toString() === e && (r = n);
    if (!r) for (const n of a.tables ?? []) n.id !== null && n.id !== void 0 && n.id.toString() === e && (r = n);
    if (r) {
      const n = await ee(this._url + "/" + r.id, ["*"]);
      return this._makeAndAddFeatureSet(n, t, i);
    }
    return null;
  }
}
function Nt(d, e, t = null, i = null) {
  return new xt(d, e, t, i);
}
function Lt(d, e, t = null, i = null) {
  return new le(d, e, t, i);
}
function At(d, e, t, i, s) {
  if (d === null) return null;
  if (d instanceof R) {
    switch (e) {
      case "datasource":
        return A(d, s, d.outFields, !0, t, i).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return A(d, s, d.outFields, !0, t, i);
    }
    return null;
  }
  if (W(d)) {
    switch (e) {
      case "datasource":
        return A(d, s, d.outFields, !0, t, i).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return A(d, s, d.outFields, !0, t, i);
    }
    return null;
  }
  if (et(d)) {
    switch (e) {
      case "datasource":
        return A(d.parent, s, d.parent.outFields, !0, t, i).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return A(d, s, d.parent.outFields, !0, t, i);
    }
    return null;
  }
  if (d instanceof O) switch (e) {
    case "datasource":
      return d.getDataSourceFeatureSet();
    case "parent":
      return d;
    case "root":
      return d.getRootFeatureSet();
  }
  return null;
}
async function Ot(d, e, t, i, s, a, r, n = null) {
  if (m.applicationCache) {
    const u = m.applicationCache.getLayerInfo(d + ":" + a.url);
    if (u) {
      const o = await u;
      return A(new R({ url: K(o.url) + "/" + e, outFields: ["*"] }), t, i, s, r, n);
    }
  }
  const l = new Je({ id: d, portal: a }).load();
  m.applicationCache && m.applicationCache.setLayerInfo(d + ":" + a.url, l);
  try {
    const u = await l;
    return A(new R({ url: K(u.url ?? "") + "/" + e, outFields: ["*"] }), t, i, s, r, n);
  } catch (u) {
    throw m.applicationCache && m.applicationCache.clearLayerInfo(d + ":" + a.url), u;
  }
}
const Vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  constructAssociationMetaDataFeatureSetFromUrl: kt,
  constructFeatureSet: A,
  constructFeatureSetFromPortalItem: Ot,
  constructFeatureSetFromRelationship: vt,
  constructFeatureSetFromUrl: ne,
  convertToFeatureSet: At,
  createFeatureSetCollectionFromMap: Nt,
  createFeatureSetCollectionFromService: Lt,
  initialiseMetaDataCache: Dt
}, Symbol.toStringTag, { value: "Module" }));
export {
  kt as A,
  wt as B,
  ne as F,
  X as I,
  Ft as L,
  B as a,
  Y as b,
  U as c,
  ae as d,
  ve as e,
  re as f,
  A as g,
  mt as h,
  gt as i,
  At as j,
  vt as k,
  Vt as l,
  Ot as q
};
//# sourceMappingURL=featureSetUtils-s0TLCuAH.js.map
