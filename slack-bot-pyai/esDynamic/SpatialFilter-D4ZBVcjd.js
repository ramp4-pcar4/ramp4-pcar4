import { x as T, n as f, t as g, s as m, a as y, r as j } from "./WhereClause-BBE8rGYc.js";
import { D as X, an as c, ao as P, ap as k, aq as L, ar as x, as as O, at as ee, au as te, av as ne, aw as ae, ax as F, ay as re, az as se, aA as G, aB as B, aC as H } from "./arcadeUtils-qwJ9DWhW.js";
import { n as M, m as ie, a as W } from "./TimeOnly-B-QnKJeF.js";
import { ic as le, bh as oe, cW as ue, eM as Z } from "./main-DhLeoxL5.js";
import { union as ce, geodesicArea as he, planarArea as de, geodesicLength as pe, planarLength as _e, relate as fe, crosses as ge, touches as me, within as ye, overlaps as Se, contains as we, intersects as Y } from "./geometryEngineAsync-DT7Oy9I8.js";
class E {
  constructor() {
    this._databaseTypeMetaData = {}, this._layerInfo = {};
  }
  clearDatabaseType(e) {
    this._databaseTypeMetaData[e] === void 0 && delete this._databaseTypeMetaData[e];
  }
  getDatabaseType(e) {
    return e === "MUSTBESET" || this._databaseTypeMetaData[e] === void 0 ? null : this._databaseTypeMetaData[e];
  }
  setDatabaseType(e, t) {
    this._databaseTypeMetaData[e] = t;
  }
  getLayerInfo(e) {
    return this._layerInfo[e] === void 0 ? null : this._layerInfo[e];
  }
  setLayerInfo(e, t) {
    this._layerInfo[e] = t;
  }
  clearLayerInfo(e) {
    this._layerInfo[e] !== void 0 && delete this._layerInfo[e];
  }
}
E.applicationCache = null;
class Te {
  constructor(e, t) {
    this._lastId = -1, this._progress = t, this._parent = e;
  }
  reset() {
    this._lastId = -1;
  }
  async nextBatchAsArcadeFeatures(e, t) {
    const n = await this.nextBatch(e);
    return n === null ? n : n.map((a) => X.createFromGraphicLikeObject(a.geometry, a.attributes, this._parent, t));
  }
  nextBatch(e) {
    if (this._parent._mainSetInUse !== null) return this._parent._mainSetInUse.then((a) => this.nextBatch(e), (a) => this.nextBatch(e));
    const t = { returnpromise: null, hasset: !1 }, n = [];
    return t.returnpromise = new Promise((a, s) => {
      this._parent._getSet(this._progress).then((i) => {
        const l = i._known;
        let u = l.length - 1;
        if (l[l.length - 1] === "GETPAGES" && (u -= 1), this._lastId + e > u && l.length > 0 && l[l.length - 1] === "GETPAGES") return void this._parent._expandPagedSet(i, this._parent._maxQueryRate(), 0, 0, this._progress).then((d) => {
          t.hasset = !0, this._parent._mainSetInUse = null, this.nextBatch(e).then(a, s);
        }, (d) => {
          t.hasset = !0, this._parent._mainSetInUse = null, s(d);
        });
        const o = i._candidates;
        if (u >= this._lastId + e || o.length === 0) {
          for (let d = 0; d < e; d++) {
            const _ = d + this._lastId + 1;
            if (_ >= l.length) break;
            n[d] = l[_];
          }
          return this._lastId += n.length, n.length === 0 && (t.hasset = !0, this._parent._mainSetInUse = null, a([])), void this._parent._getFeatureBatch(n, this._progress).then((d) => {
            t.hasset = !0, this._parent._mainSetInUse = null, a(d);
          }, (d) => {
            t.hasset = !0, this._parent._mainSetInUse = null, s(d);
          });
        }
        this._parent._refineSetBlock(i, this._parent._maxProcessingRate(), this._progress).then(() => {
          t.hasset = !0, this._parent._mainSetInUse = null, this.nextBatch(e).then(a, s);
        }, (d) => {
          t.hasset = !0, this._parent._mainSetInUse = null, s(d);
        });
      }, (i) => {
        t.hasset = !0, this._parent._mainSetInUse = null, s(i);
      });
    }), t.hasset === !1 && (this._parent._mainSetInUse = t.returnpromise, t.hasset = !0), t.returnpromise;
  }
  next() {
    if (this._parent._mainSetInUse !== null) return this._parent._mainSetInUse.then((t) => this.next(), (t) => this.next());
    const e = { returnpromise: null, hasset: !1 };
    return e.returnpromise = new Promise((t, n) => {
      this._parent._getSet(this._progress).then((a) => {
        const s = a._known;
        this._lastId < s.length - 1 ? s[this._lastId + 1] === "GETPAGES" ? this._parent._expandPagedSet(a, this._parent._maxQueryRate(), 0, 0, this._progress).then((i) => (e.hasset = !0, this._parent._mainSetInUse = null, this.next())).then(t, n) : (this._lastId += 1, this._parent._getFeature(a, s[this._lastId], this._progress).then((i) => {
          e.hasset = !0, this._parent._mainSetInUse = null, t(i);
        }, (i) => {
          e.hasset = !0, this._parent._mainSetInUse = null, n(i);
        })) : a._candidates.length > 0 ? this._parent._refineSetBlock(a, this._parent._maxProcessingRate(), this._progress).then(() => {
          e.hasset = !0, this._parent._mainSetInUse = null, this.next().then(t, n);
        }, (i) => {
          e.hasset = !0, this._parent._mainSetInUse = null, n(i);
        }) : (e.hasset = !0, this._parent._mainSetInUse = null, t(null));
      }, (a) => {
        e.hasset = !0, this._parent._mainSetInUse = null, n(a);
      });
    }), e.hasset === !1 && (this._parent._mainSetInUse = e.returnpromise, e.hasset = !0), e.returnpromise;
  }
  async count() {
    if (this._parent._totalCount !== -1) return this._parent._totalCount;
    const e = await this._parent._getSet(this._progress), t = await this._refineAllSets(e);
    return this._parent._totalCount = t._known.length, this._parent._totalCount;
  }
  async _refineAllSets(e) {
    if (e._known.length > 0 && e._known[e._known.length - 1] === "GETPAGES") return await this._parent._expandPagedSet(e, this._parent._maxQueryRate(), 0, 1, this._progress), this._refineAllSets(e);
    if (e._candidates.length > 0) {
      if (e._known[e._candidates.length - 1] === "GETPAGES") return await this._parent._expandPagedSet(e, this._parent._maxQueryRate(), 0, 2, this._progress), this._refineAllSets(e);
      const t = await this._parent._refineSetBlock(e, this._parent._maxProcessingRate(), this._progress);
      return t._candidates.length > 0 ? this._refineAllSets(t) : t;
    }
    return e;
  }
}
class D {
  constructor(e, t, n, a) {
    this._lastFetchedIndex = 0, this._ordered = !1, this.pagesDefinition = null, this._candidates = e, this._known = t, this._ordered = n, this.pagesDefinition = a;
  }
}
function K(r, e) {
  return h(r?.parseTree, e, r?.parameters);
}
function Ze(r, e, t) {
  return h(r, e, t);
}
function Ye(r, e, t, n) {
  return T.create(h(r.parseTree, c.Standardised, r.parameters, e, t), n, r.timeZone);
}
function Ke(r, e, t = "AND") {
  return T.create("((" + K(r, c.Standardised) + ")" + t + "(" + K(e, c.Standardised) + "))", r.fieldsIndex, r.timeZone);
}
function h(r, e, t, n = null, a = null) {
  let s, i, l, u;
  switch (r.type) {
    case "interval":
      return Ee(h(r.value, e, t, n, a), r.qualifier, r.op);
    case "case-expression": {
      let o = " CASE ";
      r.format === "simple" && (o += h(r.operand, e, t, n, a));
      for (let d = 0; d < r.clauses.length; d++) o += " WHEN " + h(r.clauses[d].operand, e, t, n, a) + " THEN " + h(r.clauses[d].value, e, t, n, a);
      return r.else !== null && (o += " ELSE " + h(r.else, e, t, n, a)), o += " END ", o;
    }
    case "parameter": {
      const o = t[r.value.toLowerCase()];
      if (typeof o == "string")
        return "'" + t[r.value.toLowerCase()].toString().replaceAll("'", "''") + "'";
      if (P(o) || k(o)) return R(o, e);
      if (L(o)) return q(o, e);
      if (x(o)) return U(o, e);
      if (O(o)) return Q(o, e);
      if (o instanceof Array) {
        const d = [];
        for (let _ = 0; _ < o.length; _++) typeof o[_] == "string" ? d.push("'" + o[_].toString().replaceAll("'", "''") + "'") : P(o[_]) || k(o[_]) ? d.push(R(o[_], e)) : L(o[_]) ? d.push(q(o[_], e)) : x(o[_]) ? d.push(U(o[_], e)) : O(o[_]) ? d.push(Q(o[_], e)) : d.push(o[_].toString());
        return d;
      }
      return o.toString();
    }
    case "expression-list":
      i = [];
      for (const o of r.value) i.push(h(o, e, t, n, a));
      return i;
    case "unary-expression":
      return " ( NOT " + h(r.expr, e, t, n, a) + " ) ";
    case "binary-expression":
      switch (r.operator) {
        case "AND":
          return " (" + h(r.left, e, t, n, a) + " AND " + h(r.right, e, t, n, a) + ") ";
        case "OR":
          return " (" + h(r.left, e, t, n, a) + " OR " + h(r.right, e, t, n, a) + ") ";
        case "IS":
          if (r.right.type !== "null") throw new f(g.UnsupportedIsRhs);
          return " (" + h(r.left, e, t, n, a) + " IS NULL )";
        case "ISNOT":
          if (r.right.type !== "null") throw new f(g.UnsupportedIsRhs);
          return " (" + h(r.left, e, t, n, a) + " IS NOT NULL )";
        case "IN":
          return s = [], r.right.type === "expression-list" ? (s = h(r.right, e, t, n, a), " (" + h(r.left, e, t, n, a) + " IN (" + s.join(",") + ")) ") : (u = h(r.right, e, t, n, a), u instanceof Array ? " (" + h(r.left, e, t, n, a) + " IN (" + u.join(",") + ")) " : " (" + h(r.left, e, t, n, a) + " IN (" + u + ")) ");
        case "NOT IN":
          return s = [], r.right.type === "expression-list" ? (s = h(r.right, e, t, n, a), " (" + h(r.left, e, t, n, a) + " NOT IN (" + s.join(",") + ")) ") : (u = h(r.right, e, t, n, a), u instanceof Array ? " (" + h(r.left, e, t, n, a) + " NOT IN (" + u.join(",") + ")) " : " (" + h(r.left, e, t, n, a) + " NOT IN (" + u + ")) ");
        case "BETWEEN":
          return l = h(r.right, e, t, n, a), " (" + h(r.left, e, t, n, a) + " BETWEEN " + l[0] + " AND " + l[1] + " ) ";
        case "NOTBETWEEN":
          return l = h(r.right, e, t, n, a), " (" + h(r.left, e, t, n, a) + " NOT BETWEEN " + l[0] + " AND " + l[1] + " ) ";
        case "LIKE":
          return r.escape !== "" ? " (" + h(r.left, e, t, n, a) + " LIKE " + h(r.right, e, t, n, a) + " ESCAPE '" + r.escape + "') " : " (" + h(r.left, e, t, n, a) + " LIKE " + h(r.right, e, t, n, a) + ") ";
        case "NOT LIKE":
          return r.escape !== "" ? " (" + h(r.left, e, t, n, a) + " NOT LIKE " + h(r.right, e, t, n, a) + " ESCAPE '" + r.escape + "') " : " (" + h(r.left, e, t, n, a) + " NOT LIKE " + h(r.right, e, t, n, a) + ") ";
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
        case "*":
        case "-":
        case "+":
        case "/":
          return " (" + h(r.left, e, t, n, a) + " " + r.operator + " " + h(r.right, e, t, n, a) + ") ";
        case "||":
          return " (" + h(r.left, e, t, n, a) + " " + (e === c.SqlServer ? "+" : r.operator) + " " + h(r.right, e, t, n, a) + ") ";
      }
      throw new f(g.UnsupportedOperator, { operator: r.operator });
    case "null":
      return "null";
    case "boolean":
      return r.value === !0 ? "1" : "0";
    case "string":
      return "'" + r.value.toString().replaceAll("'", "''") + "'";
    case "timestamp":
      return `timestamp '${r.value}'`;
    case "date":
      return `date '${r.value}'`;
    case "time":
      return `time '${r.value}'`;
    case "number":
      return r.value.toString();
    case "current-time":
      return Fe(r.mode === "date", e);
    case "column-reference":
      return n ? n.toLowerCase() === r.column.toLowerCase() ? "(" + a + ")" : r.delimited === !0 ? `"${r.column.split('"').join('""')}"` : r.column : r.column;
    case "data-type":
      return r.value;
    case "function": {
      const o = h(r.args, e, t, n, a);
      return Ie(r.name, o, e);
    }
  }
  throw new f(g.UnsupportedSyntax, { node: r.type });
}
function Ie(r, e, t) {
  switch (r.toLowerCase().trim()) {
    case "cos":
    case "sin":
    case "tan":
    case "cosh":
    case "tanh":
    case "sinh":
    case "acos":
    case "asin":
    case "atan":
    case "floor":
    case "log10":
    case "log":
    case "abs":
      if (e.length !== 1) throw new f(g.InvalidFunctionParameters, { function: r.toLowerCase().trim() });
      return `${r.toUpperCase().trim()}(${e[0]})`;
    case "ceiling":
    case "ceil":
      if (e.length !== 1) throw new f(g.InvalidFunctionParameters, { function: "ceiling" });
      switch (t) {
        case c.Standardised:
        case c.StandardisedNoInterval:
      }
      return "CEILING(" + e[0] + ")";
    case "mod":
    case "power":
    case "nullif":
      if (e.length !== 2) throw new f(g.InvalidFunctionParameters, { function: r.toLowerCase().trim() });
      return `${r.toUpperCase().trim()}(${e[0]},${e[1]})`;
    case "round":
      if (e.length === 2) return "ROUND(" + e[0] + "," + e[1] + ")";
      if (e.length === 1) return "ROUND(" + e[0] + ")";
      throw new f(g.InvalidFunctionParameters, { function: "round" });
    case "truncate":
      if (e.length < 1 || e.length > 2) throw new f(g.InvalidFunctionParameters, { function: "truncate" });
      return t === c.SqlServer ? "ROUND(" + e[0] + (e.length === 1 ? "0" : "," + e[1]) + ",1)" : "TRUNCATE(" + e[0] + (e.length === 1 ? ")" : "," + e[1] + ")");
    case "char_length":
    case "len":
      if (e.length !== 1) throw new f(g.InvalidFunctionParameters, { function: "char_length" });
      switch (t) {
        case c.SqlServer:
          return "LEN(" + e[0] + ")";
        case c.Oracle:
          return "LENGTH(" + e[0] + ")";
        default:
          return "CHAR_LENGTH(" + e[0] + ")";
      }
    case "coalesce":
    case "concat": {
      if (e.length < 1) throw new f(g.InvalidFunctionParameters, { function: r.toLowerCase() });
      let n = r.toUpperCase().trim() + "(";
      for (let a = 0; a < e.length; a++) a !== 0 && (n += ","), n += e[a];
      return n += ")", n;
    }
    case "lower":
    case "lcase":
      if (e.length !== 1) throw new f(g.InvalidFunctionParameters, { function: "lower" });
      return "LOWER(" + e[0] + ")";
    case "upper":
    case "ucase":
      if (e.length !== 1) throw new f(g.InvalidFunctionParameters, { function: "upper" });
      return "UPPER(" + e[0] + ")";
    case "substring": {
      let n = "";
      switch (t) {
        case c.Oracle:
          return n = "SUBSTR(" + e[0] + "," + e[1], e.length === 3 && (n += "," + e[2]), n += ")", n;
        case c.SqlServer:
          return n = e.length === 3 ? "SUBSTRING(" + e[0] + "," + e[1] + "," + e[2] + ")" : "SUBSTRING(" + e[0] + ",  " + e[1] + ", LEN(" + e[0] + ") - " + e[1] + ")", n;
        default:
          return n = "SUBSTRING(" + e[0] + " FROM " + e[1], e.length === 3 && (n += " FOR " + e[2]), n += ")", n;
      }
    }
    case "extract":
      return "EXTRACT(" + e[0].replaceAll("'", "") + " FROM " + e[1] + ")";
    case "cast": {
      let n = "";
      switch (t) {
        case c.Oracle:
          switch (e[1].type) {
            case "date":
              n = "DATE";
              break;
            case "float":
              n = "DOUBLE";
              break;
            case "integer":
              n = "INTEGER";
              break;
            case "real":
              n = "REAL";
              break;
            case "smallint":
              n = "SMALLINT";
              break;
            case "timestamp":
              n = "TIMESTAMP";
              break;
            case "varchar":
              n = "VARCHAR(" + e[1].size.toString() + ")";
          }
          return `CAST(${e[0]} AS ${n})`;
        case c.Postgres:
          switch (e[1].type) {
            case "date":
              n = "DATE";
              break;
            case "float":
              n = "DOUBLE PRECISION";
              break;
            case "integer":
              n = "INT";
              break;
            case "real":
              n = "REAL";
              break;
            case "smallint":
              n = "SMALLINT";
              break;
            case "timestamp":
              n = "TIMESTAMP";
              break;
            case "varchar":
              n = "VARCHAR(" + e[1].size.toString() + ")";
          }
          return `CAST(${e[0]} AS ${n})`;
        case c.SqlServer:
          switch (e[1].type) {
            case "date":
              n = "DATE";
              break;
            case "float":
              n = "FLOAT";
              break;
            case "integer":
              n = "INT";
              break;
            case "real":
              n = "REAL";
              break;
            case "smallint":
              n = "SMALLINT";
              break;
            case "timestamp":
              n = "DATETIME";
              break;
            case "varchar":
              n = "VARCHAR(" + e[1].size.toString() + ")";
          }
          return `CAST(${e[0]} AS ${n})`;
        default:
          switch (e[1].type) {
            case "date":
              n = "DATE";
              break;
            case "float":
              n = "FLOAT";
              break;
            case "integer":
              n = "INTEGER";
              break;
            case "real":
              n = "REAL";
              break;
            case "smallint":
              n = "SMALLINT";
              break;
            case "timestamp":
              n = "TIMESTAMP";
              break;
            case "varchar":
              n = "VARCHAR(" + e[1].size.toString() + ")";
          }
          return `CAST(${e[0]} AS ${n})`;
      }
    }
  }
  throw new f(g.InvalidFunctionParameters, { function: r });
}
function U(r, e) {
  const t = r.toDateTime(), n = t.hour === 0 && t.minute === 0 && t.second === 0 && t.millisecond === 0;
  switch (e) {
    case c.FILEGDB:
    case c.Standardised:
    case c.StandardisedNoInterval:
      return n ? `date '${t.toFormat("yyyy-LL-dd")}'` : `timestamp '${t.toFormat("yyyy-LL-dd HH:mm:ss")}'`;
    case c.Oracle:
      return n ? `TO_DATE('${t.toFormat("yyyy-LL-dd")}','YYYY-MM-DD')` : `TO_DATE('${t.toFormat("yyyy-LL-dd HH:mm:ss")}','YYYY-MM-DD HH24:MI:SS')`;
    case c.SqlServer:
      return `'${t.toFormat(n ? "yyyy-LL-dd" : "yyyy-LL-dd HH:mm:ss")}'`;
    case c.PGDB:
      return `#${t.toFormat(n ? "LL-dd-yyyy" : "LL-dd-yyyy HH:mm:ss")}#`;
    case c.Postgres:
      return `TIMESTAMP '${t.toFormat(n ? "yyyy-LL-dd" : "yyyy-LL-dd HH:mm:ss")}'`;
    default:
      return `timestamp '${t.toFormat("yyyy-LL-dd HH:mm:ss")}'`;
  }
}
function Q(r, e) {
  switch (e) {
    case c.FILEGDB:
    case c.Standardised:
    case c.StandardisedNoInterval:
      return r.toSQLWithKeyword();
    case c.Oracle:
      return `TO_DATE('${r.toFormat("Y-MM-DD")}'`;
    case c.SqlServer:
      return `'${r.toFormat("Y-MM-DD")}'`;
    case c.PGDB:
      return `#${r.toFormat("Y-MM-DD")}#`;
    case c.Postgres:
      return `TIMESTAMP '${r.toFormat("Y-MM-DD")}'`;
    default:
      return r.toSQLWithKeyword();
  }
}
function q(r, e) {
  switch (r instanceof M && (r = r.toStorageString()), e) {
    case c.Oracle:
      return `TO_DATE('${r}', 'HH24:MI:SS')`;
    case c.SqlServer:
      return `'${r}'`;
    case c.FILEGDB:
    case c.Standardised:
    case c.StandardisedNoInterval:
    case c.Postgres:
    default:
      return `time '${r}'`;
  }
}
function R(r, e) {
  return U(ie.dateTimeToArcadeDate(k(r) ? r : le.fromJSDate(r)), e);
}
function Fe(r, e) {
  switch (e) {
    case c.FILEGDB:
    case c.Standardised:
    case c.StandardisedNoInterval:
    case c.Oracle:
      return r ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
    case c.SqlServer:
      return r ? "CAST(GETDATE() AS DATE)" : "GETDATE()";
    case c.PGDB:
    case c.Postgres:
    default:
      return r ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
  }
}
function be(r, e, t = {}) {
  const n = {}, a = {}, s = { esriFieldTypeSmallInteger: "integer", esriFieldTypeInteger: "integer", esriFieldTypeBigInteger: "integer", esriFieldTypeSingle: "double", esriFieldTypeDouble: "double", esriFieldTypeString: "string", esriFieldTypeTimeOnly: "time-only", esriFieldTypeDateOnly: "date-only", esriFieldTypeTimestampOffset: "timestamp-offset", esriFieldTypeDate: "date", esriFieldTypeOID: "integer", esriFieldTypeGUID: "guid", esriFieldTypeGlobalID: "guid", oid: "integer", long: "integer", "small-integer": "integer", integer: "integer", "big-integer": "integer", single: "double", "time-only": "time-only", "date-only": "date-only", "timestamp-offset": "timestemp-offset", double: "double", date: "date", guid: "guid", "global-id": "guid", string: "string" };
  for (const i of e) {
    const l = i.type ? s[i.type] : void 0;
    n[i.name.toLowerCase()] = l === void 0 ? "" : l;
  }
  for (const i in t) {
    const l = s[t[i]];
    a[i.toLowerCase()] = l === void 0 ? "" : l;
  }
  switch (S(n, r.parseTree, r.parameters, a)) {
    case "double":
      return "double";
    case "integer":
      return "integer";
    case "date":
      return "date";
    case "date-only":
      return "date-only";
    case "time-only":
      return "time-only";
    case "timestamp-offset":
      return "timestamp-offset";
    case "string":
      return "string";
    case "global-id":
    case "guid":
      return "guid";
  }
  return "";
}
function S(r, e, t, n) {
  let a;
  switch (e.type) {
    case "interval":
      return "integer";
    case "case-expression": {
      const s = [];
      if (e.format === "simple") {
        for (let i = 0; i < e.clauses.length; i++) s.push(S(r, e.clauses[i].value, t, n));
        e.else !== null && s.push(S(r, e.else, t, n));
      } else {
        for (let i = 0; i < e.clauses.length; i++) s.push(S(r, e.else, t, n));
        e.else !== null && s.push(S(r, e.else, t, n));
      }
      return C(s);
    }
    case "parameter": {
      const s = n[e.value.toLowerCase()];
      if (s === void 0 && t) {
        const i = t[e.value.toLowerCase()];
        if (i === void 0 || i === null) return "";
        if (typeof i == "string" || i instanceof String) return "string";
        if (typeof i == "boolean") return "boolean";
        if (P(i) || x(i)) return "date";
        if (O(i)) return "date-only";
        if (L(i)) return "time-only";
        if (typeof i == "number") return i % 1 == 0 ? "integer" : "double";
      }
      return s === void 0 ? "" : s;
    }
    case "expression-list": {
      const s = [];
      for (const i of e.value) s.push(S(r, i, t, n));
      return s;
    }
    case "unary-expression":
      return "boolean";
    case "binary-expression":
      switch (e.operator) {
        case "AND":
        case "OR":
        case "IN":
        case "NOT IN":
        case "BETWEEN":
        case "NOTBETWEEN":
        case "LIKE":
        case "NOT LIKE":
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
          return "boolean";
        case "IS":
        case "ISNOT":
          if (e.right.type !== "null") throw new f(g.UnsupportedIsRhs);
          return "boolean";
        case "*":
        case "-":
        case "+":
        case "/":
          return C([S(r, e.left, t, n), S(r, e.right, t, n)]);
        case "||":
          return "string";
        default:
          throw new f(g.UnsupportedOperator, { operator: e.operator });
      }
    case "null":
      return "";
    case "boolean":
      return "boolean";
    case "string":
      return "string";
    case "number":
      return e.value === null ? "" : e.value % 1 == 0 ? "integer" : "double";
    case "date":
      return "date";
    case "timestamp":
      return e.withtimezone ? "timestamp-offset" : "date";
    case "time":
      return "time-only";
    case "current-time":
      return "date";
    case "column-reference": {
      const s = r[e.column.toLowerCase()];
      return s === void 0 ? "" : s;
    }
    case "function":
      switch (e.name.toLowerCase()) {
        case "cast":
          switch (e.args?.value[1]?.value.type ?? "") {
            case "integer":
            case "smallint":
              return "integer";
            case "real":
            case "float":
              return "double";
            case "date":
            case "timestamp":
              return e.args?.value[1]?.value?.withtimezone === !0 ? "timestamp-offset" : "date";
            case "time":
              return "time-only";
            case "varchar":
              return "string";
            default:
              return "";
          }
        case "position":
        case "extract":
        case "char_length":
        case "mod":
          return "integer";
        case "round":
          if (a = S(r, e.args, t, n), a instanceof Array) {
            if (a.length <= 0) return "double";
            a = a[0];
          }
          return a;
        case "sign":
          return "integer";
        case "ceiling":
        case "floor":
        case "abs":
          return a = S(r, e.args, t, n), a instanceof Array && (a = C(a)), a === "integer" || a === "double" ? a : "double";
        case "area":
        case "length":
        case "log":
        case "log10":
        case "sin":
        case "cos":
        case "tan":
        case "asin":
        case "acos":
        case "atan":
        case "cosh":
        case "sinh":
        case "tanh":
        case "power":
          return "double";
        case "substring":
        case "trim":
        case "concat":
        case "lower":
        case "upper":
          return "string";
        case "truncate":
          return "double";
        case "nullif":
        case "coalesce":
          return a = S(r, e.args, t, n), a instanceof Array ? a.length > 0 ? a[0] : "" : a;
      }
      return "";
  }
  throw new f(g.UnsupportedSyntax, { node: e.type });
}
const V = { boolean: 1, string: 2, integer: 3, double: 4, date: 5 };
function C(r) {
  if (r) {
    let e = "";
    for (const t of r) t !== "" && (e = e === "" || V[e] < V[t] ? t : e);
    return e;
  }
  return "";
}
function Qe(r, e) {
  return w(r.parseTree, e);
}
function De(r) {
  return r?.parseTree.type === "column-reference";
}
function w(r, e) {
  if (r == null) return !1;
  switch (r.type) {
    case "when-clause":
      return w(r.operand, e) || w(r.value, e);
    case "case-expression":
      for (const t of r.clauses) if (w(t, e)) return !0;
      return !(r.format !== "simple" || !w(r.operand, e)) || !(r.else === null || !w(r.else, e));
    case "parameter":
    case "null":
    case "boolean":
    case "date":
    case "timestamp":
    case "time":
    case "string":
    case "number":
      return !1;
    case "expression-list":
      for (const t of r.value) if (w(t, e)) return !0;
      return !1;
    case "unary-expression":
      return w(r.expr, e);
    case "binary-expression":
      return w(r.left, e) || w(r.right, e);
    case "column-reference":
      return e.toLowerCase() === r.column.toLowerCase();
    case "function":
      return w(r.args, e);
  }
  return !1;
}
function N(r) {
  let e = "";
  return e += r.period.toUpperCase(), e;
}
function Ee(r, e, t) {
  let n = "";
  return n = e.type === "interval-period" ? N(e) : N(e.start) + " TO " + N(e.end), "INTERVAL " + t + " " + r + " " + n;
}
function ve(r) {
  return r = +r, isFinite(r) ? r - r % 1 || (r < 0 ? -0 : r === 0 ? r : 0) : r;
}
function A(r) {
  let e = 0;
  for (let t = 0; t < r.length; t++) e += r[t];
  return e / r.length;
}
function J(r) {
  const e = A(r);
  let t = 0;
  for (let n = 0; n < r.length; n++) t += (e - r[n]) ** 2;
  return t / r.length;
}
function $(r) {
  const e = A(r);
  let t = 0;
  for (let n = 0; n < r.length; n++) t += (e - r[n]) ** 2;
  return t / (r.length - 1);
}
function z(r) {
  let e = 0;
  for (let t = 0; t < r.length; t++) e += r[t];
  return e;
}
function Ae(r, e) {
  const t = [], n = {}, a = [];
  for (let s = 0; s < r.length; s++) {
    if (r[s] !== void 0 && r[s] !== null) {
      const i = r[s];
      if (ee(i) || te(i)) n[i] === void 0 && (t.push(i), n[i] = 1);
      else {
        let l = !1;
        for (let u = 0; u < a.length; u++) ne(a[u], i) === !0 && (l = !0);
        l === !1 && (a.push(i), t.push(i));
      }
    }
    if (t.length >= e && e !== -1) return t;
  }
  return t;
}
function qe(r) {
  switch (r.toLowerCase()) {
    case "distinct":
      return "distinct";
    case "avg":
    case "mean":
      return "avg";
    case "min":
      return "min";
    case "sum":
      return "sum";
    case "max":
      return "max";
    case "stdev":
    case "stddev":
      return "stddev";
    case "var":
    case "variance":
      return "var";
    case "count":
      return "count";
  }
  return "";
}
function Ve(r, e, t = 1e3) {
  switch (r.toLowerCase()) {
    case "distinct":
      return Ae(e, t);
    case "avg":
    case "mean":
      return A(e);
    case "min":
      return Math.min.apply(Math, e);
    case "sum":
      return z(e);
    case "max":
      return Math.max.apply(Math, e);
    case "stdev":
    case "stddev":
      return Math.sqrt(J(e));
    case "var":
    case "variance":
      return J(e);
    case "count":
      return e.length;
  }
  return 0;
}
async function Re(r, e, t) {
  const n = await v(r, e, t, !0);
  return n.length === 0 ? null : Math.min.apply(Math, n);
}
async function Ce(r, e, t) {
  const n = await v(r, e, t, !0);
  return n.length === 0 ? null : Math.max.apply(Math, n);
}
async function Ne(r, e, t) {
  let n = "";
  e && !De(e) && (n = be(e, r.fields));
  const a = await v(r, e, t, !0);
  if (a.length === 0) return null;
  const s = A(a);
  return s === null ? s : n === "integer" ? ve(s) : s;
}
async function Pe(r, e, t) {
  const n = await v(r, e, t, !0);
  return n.length === 0 ? null : $(n);
}
async function ke(r, e, t) {
  const n = await v(r, e, t, !0);
  return n.length === 0 ? null : Math.sqrt($(n));
}
async function Le(r, e, t) {
  const n = await v(r, e, t, !0);
  return n.length === 0 ? null : z(n);
}
async function xe(r, e) {
  return r.iterator(e).count();
}
async function v(r, e, t, n = !1) {
  const a = r.iterator(t), s = [], i = { ticker: 0 };
  let l = await a.next();
  for (; l !== null; ) {
    if (i.ticker++, t.aborted) throw new m(y.Cancelled);
    i.ticker % 100 == 0 && (i.ticker = 0, await new Promise((o) => {
      setTimeout(o, 0);
    }));
    const u = e?.calculateValue(l);
    u === null ? n === !1 && (s[s.length] = u) : s[s.length] = u instanceof W || u instanceof M ? u.toNumber() : u instanceof j ? u.toMilliseconds() : u, l = await a.next();
  }
  return s;
}
async function Oe(r, e, t = 1e3, n = null) {
  const a = r.iterator(n), s = [], i = {}, l = { ticker: 0 };
  let u = await a.next();
  for (; u !== null; ) {
    if (l.ticker++, n && n.aborted) throw new m(y.Cancelled);
    l.ticker % 100 == 0 && (l.ticker = 0, await new Promise((_) => {
      setTimeout(_, 0);
    }));
    const o = e?.calculateValue(u);
    let d = o;
    if (o instanceof W ? d = "!!DATEONLY!!-" + o.toString() : o instanceof j ? d = "!!TSOFFSETONLY!!-" + o.toString() : o instanceof M ? d = "!!TIMEONLY!!-" + o.toString() : o instanceof Date && (d = "!!DATE!!-" + o.toString()), o != null && i[d] === void 0 && (s.push(o), i[d] = 1), s.length >= t && t !== -1) return s;
    u = await a.next();
  }
  return s;
}
class p {
  constructor(e) {
    this.recentlyUsedQueries = null, this.featureSetQueryInterceptor = null, this._idstates = [], this._parent = null, this._wset = null, this._mainSetInUse = null, this._maxProcessing = 200, this._maxQuery = 500, this._totalCount = -1, this._databaseType = c.NotEvaluated, this._databaseTypeProbed = null, this.declaredRootClass = "esri.arcade.featureset.support.FeatureSet", this._featureCache = [], this.typeIdField = null, this.types = null, this.subtypeField = null, this.subtypes = null, this.fields = null, this.geometryType = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = null, this.hasM = !1, this.hasZ = !1, this._transparent = !1, this.loaded = !1, this._loadPromise = null, this._fieldsIndex = null, this.fsetInfo = null, e?.lrucache && (this.recentlyUsedQueries = e.lrucache), e?.interceptor && (this.featureSetQueryInterceptor = e.interceptor);
  }
  optimisePagingFeatureQueries(e) {
    this._parent && this._parent.optimisePagingFeatureQueries(e);
  }
  _hasMemorySource() {
    return !0;
  }
  prop(e, t) {
    return t === void 0 ? this[e] : (this[e] !== void 0 && (this[e] = t), this);
  }
  end() {
    return this._parent !== null && this._parent._transparent === !0 ? this._parent.end() : this._parent;
  }
  _ensureLoaded() {
    return this.load();
  }
  load() {
    return this._loadPromise === null && (this._loadPromise = this.loadImpl()), this._loadPromise;
  }
  async loadImpl() {
    return this._parent?.loaded === !0 ? (this._initialiseFeatureSet(), this) : (await this._parent?.load(), this._initialiseFeatureSet(), this);
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types, this.subtypeField = this._parent.subtypeField, this.subtypes = this._parent.subtypes) : (this.fields = [], this.typeIdField = "", this.subtypeField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new oe({ wkid: 4326 }), this.geometryType = ae.point);
  }
  getField(e, t) {
    let n;
    return (t = t || this.fields) && (e = e.toLowerCase(), t.some((a) => (a && a.name.toLowerCase() === e && (n = a), !!n))), n;
  }
  getFieldsIndex() {
    return this._fieldsIndex === null && (this._fieldsIndex = ue.fromLayer({ timeInfo: this.timeInfo, editFieldsInfo: this.editFieldsInfo, dateFieldsTimeZone: this.dateFieldsTimeZone, datesInUnknownTimezone: this.datesInUnknownTimezone, fields: this.fields })), this._fieldsIndex;
  }
  _maxProcessingRate() {
    return this._parent !== null ? Math.min(this._maxProcessing, this._parent._maxProcessingRate()) : Math.min(this._maxProcessing, this._maxQueryRate());
  }
  _maxQueryRate() {
    return this._parent !== null ? Math.max(this._maxQuery, this._parent._maxQueryRate()) : this._maxQuery;
  }
  _checkCancelled(e) {
    if (e != null && e.aborted) throw new m(y.Cancelled);
  }
  nativeCapabilities() {
    return this._parent.nativeCapabilities();
  }
  async _canDoAggregates(e, t, n, a, s) {
    return this._parent !== null && this._parent._canDoAggregates(e, t, n, a, s);
  }
  async _getAggregatePagesDataSourceDefinition(e, t, n, a, s, i, l) {
    if (this._parent === null) throw new m(y.NeverReach);
    return this._parent._getAggregatePagesDataSourceDefinition(e, t, n, a, s, i, l);
  }
  async _getAgregagtePhysicalPage(e, t, n) {
    if (this._parent === null) throw new m(y.NeverReach);
    return this._parent._getAgregagtePhysicalPage(e, t, n);
  }
  async databaseType() {
    if (this._databaseType === c.NotEvaluated) {
      if (E.applicationCache !== null) {
        const e = E.applicationCache.getDatabaseType(this._cacheableFeatureSetSourceKey());
        if (e !== null) return e;
      }
      if (this._databaseTypeProbed !== null) return this._databaseTypeProbed;
      try {
        this._databaseTypeProbed = this._getDatabaseTypeImpl(), E.applicationCache !== null && E.applicationCache.setDatabaseType(this._cacheableFeatureSetSourceKey(), this._databaseTypeProbed);
      } catch (e) {
        throw E.applicationCache !== null && E.applicationCache.clearDatabaseType(this._cacheableFeatureSetSourceKey()), e;
      }
      return this._databaseTypeProbed;
    }
    return this._databaseType;
  }
  async _getDatabaseTypeImpl() {
    const e = [{ thetype: c.SqlServer, testwhere: "(CAST( '2015-01-01' as DATETIME) = CAST( '2015-01-01' as DATETIME)) AND OBJECTID<0" }, { thetype: c.Oracle, testwhere: "(TO_DATE('2003-11-18','YYYY-MM-DD') = TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID<0" }, { thetype: c.StandardisedNoInterval, testwhere: "(date '2015-01-01 10:10:10' = date '2015-01-01 10:10:10') AND OBJECTID<0" }];
    for (const t of e)
      if (await this._runDatabaseProbe(t.testwhere) === !0) return t.thetype;
    return c.StandardisedNoInterval;
  }
  _cacheableFeatureSetSourceKey() {
    return "MUSTBESET";
  }
  async _runDatabaseProbe(e) {
    if (this._parent !== null) return this._parent._runDatabaseProbe(e);
    throw new m(y.NotImplemented);
  }
  isTable() {
    return this._parent?.isTable() ?? !1;
  }
  _featureFromCache(e) {
    if (this._featureCache[e] !== void 0) return this._featureCache[e];
  }
  _isInFeatureSet(e) {
    return F.Unknown;
  }
  _getSet(e) {
    throw new m(y.NotImplemented);
  }
  async _getFeature(e, t, n) {
    if (this._checkCancelled(n), this._featureFromCache(t) !== void 0) return this._featureFromCache(t);
    if (await this._getFeatures(e, t, this._maxProcessingRate(), n), this._checkCancelled(n), this._featureFromCache(t) !== void 0) return this._featureFromCache(t);
    throw new m(y.MissingFeatures);
  }
  async _getFeatureBatch(e, t) {
    this._checkCancelled(t);
    const n = new D([], e, !1, null), a = [];
    await this._getFeatures(n, -1, e.length, t), this._checkCancelled(t);
    for (const s of e) this._featureFromCache(s) !== void 0 && a.push(this._featureFromCache(s));
    return a;
  }
  async _getFeatures(e, t, n, a) {
    return "success";
  }
  _getFilteredSet(e, t, n, a, s) {
    throw new m(y.NotImplemented);
  }
  async _refineSetBlock(e, t, n) {
    if (this._checkIfNeedToExpandCandidatePage(e, this._maxQueryRate()) === !0) return await this._expandPagedSet(e, this._maxQueryRate(), 0, 0, n), this._refineSetBlock(e, t, n);
    this._checkCancelled(n);
    const a = e._candidates.length;
    this._refineKnowns(e, t);
    let s = a - e._candidates.length;
    if (e._candidates.length === 0 || s >= t) return e;
    if (await this._refineIfParentKnown(e, t - s, n), this._checkCancelled(n), this._refineKnowns(e, t - s), s = a - e._candidates.length, s < t && e._candidates.length > 0) {
      const i = t - s, l = this._prepareFetchAndRefineSet(e._candidates);
      return await this._fetchAndRefineFeatures(l, l.length > i ? i : e._candidates.length, n), this._checkCancelled(n), this._refineKnowns(e, t - s), e;
    }
    return e;
  }
  _fetchAndRefineFeatures(e, t, n) {
    return null;
  }
  _prepareFetchAndRefineSet(e) {
    const t = [];
    for (let n = 0; n < e.length; n++) this._isPhysicalFeature(e[n]) && t.push(e[n]);
    return t;
  }
  _isPhysicalFeature(e) {
    return this._parent === null || this._parent._isPhysicalFeature(e);
  }
  _refineKnowns(e, t) {
    let n = 0, a = null;
    const s = [];
    t = this._maxQueryRate();
    for (let i = 0; i < e._candidates.length && e._candidates[i] !== "GETPAGES"; i++) {
      let l = !1;
      const u = this._candidateIdTransform(e._candidates[i]);
      u !== e._candidates[i] && (l = !0);
      const o = this._isInFeatureSet(u);
      if (o === F.InFeatureSet) l === !0 ? e._known.includes(u) || (e._known.push(u), n += 1) : (e._known.push(e._candidates[i]), n += 1), a === null ? a = { start: i, end: i } : a.end === i - 1 ? a.end = i : (s.push(a), a = { start: i, end: i });
      else if (o === F.NotInFeatureSet) a === null ? a = { start: i, end: i } : a.end === i - 1 ? a.end = i : (s.push(a), a = { start: i, end: i }), n += 1;
      else if (o === F.Unknown && (n += 1, e._ordered === !0)) break;
      if (n >= t) break;
    }
    a !== null && s.push(a);
    for (let i = s.length - 1; i >= 0; i--) e._candidates.splice(s[i].start, s[i].end - s[i].start + 1);
  }
  _refineIfParentKnown(e, t, n) {
    const a = new D([], [], e._ordered, null);
    return a._candidates = e._candidates.slice(0), this._parent._refineSetBlock(a, t, n);
  }
  _candidateIdTransform(e) {
    return this._parent._candidateIdTransform(e);
  }
  _checkIfNeedToExpandKnownPage(e, t) {
    if (e.pagesDefinition === null) return !1;
    let n = 0;
    for (let a = e._lastFetchedIndex; a < e._known.length; a++) {
      if (e._known[a] === "GETPAGES") return !0;
      if (this._featureCache[e._known[a]] === void 0 && (n += 1, n >= t)) break;
    }
    return !1;
  }
  _checkIfNeedToExpandCandidatePage(e, t) {
    if (e.pagesDefinition === null) return !1;
    let n = 0;
    for (let a = 0; a < e._candidates.length; a++) {
      if (e._candidates[a] === "GETPAGES") return !0;
      if (n += 1, n >= t) break;
    }
    return !1;
  }
  async _expandPagedSet(e, t, n, a, s) {
    if (this._parent === null) throw new m(y.NotImplemented);
    return this._parent._expandPagedSet(e, t, n, a, s);
  }
  async _expandPagedSetFeatureSet(e, t, n, a, s) {
    if (e._known.length > 0 && e._known[e._known.length - 1] === "GETPAGES" && (a = 1), a === 0 && e._candidates.length > 0 && e._candidates[e._candidates.length - 1] === "GETPAGES" && (a = 2), a === 0) return "finished";
    const i = await this._getPage(e, a, s);
    return n + i < t ? this._expandPagedSet(e, t, n + i, 0, s) : "success";
  }
  async _getPage(e, t, n) {
    const a = t === 1 ? e._known : e._candidates;
    if (e.pagesDefinition.internal.set.length > e.pagesDefinition.resultOffset || e.pagesDefinition.internal.fullyResolved === !0) {
      a.length = a.length - 1;
      let s = 0;
      for (let l = 0; l < e.pagesDefinition.resultRecordCount && !(e.pagesDefinition.resultOffset + l >= e.pagesDefinition.internal.set.length); l++) a[a.length] = e.pagesDefinition.internal.set[e.pagesDefinition.resultOffset + l], s++;
      e.pagesDefinition.resultOffset += s;
      let i = !1;
      return e.pagesDefinition.internal.fullyResolved === !0 && e.pagesDefinition.internal.set.length <= e.pagesDefinition.resultOffset && (i = !0), i === !1 && a.push("GETPAGES"), s;
    }
    return await this._getPhysicalPage(e, t, n), this._getPage(e, t, n);
  }
  _getPhysicalPage(e, t, n) {
    return null;
  }
  _clonePageDefinition(e) {
    return this._parent === null ? null : this._parent._clonePageDefinition(e);
  }
  _first(e) {
    return this.iterator(e).next();
  }
  first(e) {
    return this._first(e);
  }
  async calculateStatistic(e, t, n, a) {
    await this._ensureLoaded();
    let s = await this._stat(e, t, "", null, null, n, a);
    return s.calculated === !1 && (s = await this._manualStat(e, t, n, a)), s.result;
  }
  async _manualStat(e, t, n, a) {
    let s = null;
    switch (e.toLowerCase()) {
      case "count":
        return s = await xe(this, a), { calculated: !0, result: s };
      case "distinct":
        return s = await Oe(this, t, n, a), { calculated: !0, result: s };
      case "avg":
      case "mean":
        return s = await Ne(this, t, a), { calculated: !0, result: s };
      case "stdev":
        return s = await ke(this, t, a), { calculated: !0, result: s };
      case "variance":
        return s = await Pe(this, t, a), { calculated: !0, result: s };
      case "sum":
        return s = await Le(this, t, a), { calculated: !0, result: s };
      case "min":
        return s = await Re(this, t, a), { calculated: !0, result: s };
      case "max":
        return s = await Ce(this, t, a), { calculated: !0, result: s };
      default:
        return { calculated: !0, result: 0 };
    }
  }
  async _stat(e, t, n, a, s, i, l) {
    const u = await this._parent._stat(e, t, n, a, s, i, l);
    return u.calculated === !1 ? s === null && n === "" && a === null ? this._manualStat(e, t, i, l) : { calculated: !1 } : u;
  }
  _unionAllGeomSelf(e) {
    const t = this.iterator(this._defaultTracker(e)), n = [];
    return new Promise((a, s) => {
      this._unionShapeInBatches(n, t, a, s);
    });
  }
  _unionAllGeom(e) {
    return new Promise((t, n) => {
      const a = this.iterator(this._defaultTracker(e)), s = [];
      this._unionShapeInBatches(s, a, t, n);
    });
  }
  _unionShapeInBatches(e, t, n, a) {
    t.next().then((s) => {
      try {
        s !== null && s.geometry !== null && e.push(s.geometry), e.length > 30 || s === null && e.length > 1 ? ce(e).then((i) => {
          try {
            s === null ? n(i) : (e = [i], this._unionShapeInBatches(e, t, n, a));
          } catch (l) {
            a(l);
          }
        }, a) : s === null ? e.length === 1 ? n(e[0]) : n(null) : this._unionShapeInBatches(e, t, n, a);
      } catch (i) {
        a(i);
      }
    }, a);
  }
  iterator(e) {
    return new Te(this, e);
  }
  intersection(e, t = !1) {
    return p._featuresetFunctions.intersection.bind(this)(e, t);
  }
  difference(e, t = !1, n = !0) {
    return p._featuresetFunctions.difference.bind(this)(e, t, n);
  }
  symmetricDifference(e, t = !1, n = !0) {
    return p._featuresetFunctions.symmetricDifference.bind(this)(e, t, n);
  }
  morphShape(e, t, n = "unknown", a = null) {
    return p._featuresetFunctions.morphShape.bind(this)(e, t, n, a);
  }
  morphShapeAndAttributes(e, t, n = "unknown") {
    return p._featuresetFunctions.morphShapeAndAttributes.bind(this)(e, t, n);
  }
  union(e, t = !1) {
    return p._featuresetFunctions.union.bind(this)(e, t);
  }
  intersects(e) {
    return p._featuresetFunctions.intersects.bind(this)(e);
  }
  envelopeIntersects(e) {
    return p._featuresetFunctions.envelopeIntersects.bind(this)(e);
  }
  contains(e) {
    return p._featuresetFunctions.contains.bind(this)(e);
  }
  overlaps(e) {
    return p._featuresetFunctions.overlaps.bind(this)(e);
  }
  relate(e, t) {
    return p._featuresetFunctions.relate.bind(this)(e, t);
  }
  within(e) {
    return p._featuresetFunctions.within.bind(this)(e);
  }
  touches(e) {
    return p._featuresetFunctions.touches.bind(this)(e);
  }
  top(e) {
    return p._featuresetFunctions.top.bind(this)(e);
  }
  crosses(e) {
    return p._featuresetFunctions.crosses.bind(this)(e);
  }
  buffer(e, t, n, a = !0) {
    return p._featuresetFunctions.buffer.bind(this)(e, t, n, a);
  }
  filter(e, t = null) {
    return p._featuresetFunctions.filter.bind(this)(e, t);
  }
  orderBy(e) {
    return p._featuresetFunctions.orderBy.bind(this)(e);
  }
  dissolve(e, t) {
    return p._featuresetFunctions.dissolve.bind(this)(e, t);
  }
  groupby(e, t) {
    return p._featuresetFunctions.groupby.bind(this)(e, t);
  }
  reduce(e, t = null, n) {
    return new Promise((a, s) => {
      this._reduceImpl(this.iterator(this._defaultTracker(n)), e, t, 0, a, s, 0);
    });
  }
  _reduceImpl(e, t, n, a, s, i, l) {
    try {
      if (++l > 1e3) return void setTimeout(() => {
        l = 0, this._reduceImpl(e, t, n, a, s, i, l);
      });
      e.next().then((u) => {
        try {
          if (u === null) s(n);
          else {
            const o = t(n, u, a, this);
            Z(o) ? o.then((d) => {
              this._reduceImpl(e, t, d, a + 1, s, i, l);
            }, i) : this._reduceImpl(e, t, o, a + 1, s, i, l);
          }
        } catch (o) {
          i(o);
        }
      }, i);
    } catch (u) {
      i(u);
    }
  }
  removeField(e) {
    return p._featuresetFunctions.removeField.bind(this)(e);
  }
  addField(e, t, n = null) {
    return p._featuresetFunctions.addField.bind(this)(e, t, n);
  }
  sumArea(e, t = !1, n) {
    const a = re(e);
    return this.reduce((s, i) => i.geometry === null ? 0 : t ? he(i.geometry, a).then((l) => s + l) : de(i.geometry, a).then((l) => s + l), 0, n);
  }
  sumLength(e, t = !1, n) {
    const a = se(e);
    return this.reduce((s, i) => i.geometry === null ? 0 : t ? pe(i.geometry, a).then((l) => s + l) : _e(i.geometry, a).then((l) => s + l), 0, n);
  }
  _substituteVars(e, t) {
    if (t !== null) {
      const n = {};
      for (const a in t) n[a.toLowerCase()] = t[a];
      e.parameters = n;
    }
  }
  async distinct(e, t = 1e3, n = null, a) {
    await this.load();
    const s = T.create(e, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(s, n), this.calculateStatistic("distinct", s, t, this._defaultTracker(a));
  }
  async min(e, t = null, n) {
    await this.load();
    const a = T.create(e, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(a, t), this.calculateStatistic("min", a, -1, this._defaultTracker(n));
  }
  async max(e, t = null, n) {
    await this.load();
    const a = T.create(e, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(a, t), this.calculateStatistic("max", a, -1, this._defaultTracker(n));
  }
  async avg(e, t = null, n) {
    await this.load();
    const a = T.create(e, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(a, t), this.calculateStatistic("avg", a, -1, this._defaultTracker(n));
  }
  async sum(e, t = null, n) {
    await this.load();
    const a = T.create(e, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(a, t), this.calculateStatistic("sum", a, -1, this._defaultTracker(n));
  }
  async stdev(e, t = null, n) {
    await this.load();
    const a = T.create(e, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(a, t), this.calculateStatistic("stdev", a, -1, this._defaultTracker(n));
  }
  async variance(e, t = null, n) {
    await this.load();
    const a = T.create(e, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(a, t), this.calculateStatistic("variance", a, -1, this._defaultTracker(n));
  }
  async count(e) {
    return await this.load(), this.calculateStatistic("count", T.create("1", this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC), -1, this._defaultTracker(e));
  }
  _defaultTracker(e) {
    return e ?? { aborted: !1 };
  }
  forEach(e, t) {
    return new Promise((n, a) => {
      this._forEachImpl(this.iterator(this._defaultTracker(t)), e, this, n, a, 0);
    });
  }
  _forEachImpl(e, t, n, a, s, i) {
    try {
      if (++i > 1e3) return void setTimeout(() => {
        i = 0, this._forEachImpl(e, t, n, a, s, i);
      }, 0);
      e.next().then((l) => {
        try {
          if (l === null) a(n);
          else {
            const u = t(l);
            u == null ? this._forEachImpl(e, t, n, a, s, i) : Z(u) ? u.then(() => {
              try {
                this._forEachImpl(e, t, n, a, s, i);
              } catch (o) {
                s(o);
              }
            }, s) : this._forEachImpl(e, t, n, a, s, i);
          }
        } catch (u) {
          s(u);
        }
      }, s);
    } catch (l) {
      s(l);
    }
  }
  convertToJSON(e) {
    const t = { layerDefinition: { geometryType: this.geometryType, fields: [] }, featureSet: { features: [], geometryType: this.geometryType } };
    for (let n = 0; n < this.fields.length; n++) t.layerDefinition.fields.push(G(this.fields[n]));
    return this.reduce((n, a) => {
      const s = { geometry: a.geometry?.toJSON(), attributes: {} };
      for (const i in a.attributes) s.attributes[i] = a.attributes[i];
      return t.featureSet.features.push(s), 1;
    }, 0, e).then(() => t);
  }
  castToText(e = !1) {
    return "object, FeatureSet";
  }
  queryAttachments(e, t, n, a, s) {
    return this._parent.queryAttachments(e, t, n, a, s);
  }
  serviceUrl() {
    return this._parent.serviceUrl();
  }
  subtypeMetaData() {
    return this.subtypeField && this.subtypes ? { subtypeField: this.subtypeField, subtypes: this.subtypes ? this.subtypes.map((e) => ({ name: e.name, code: e.code })) : [] } : this.typeIdField ? { subtypeField: this.typeIdField, subtypes: this.types ? this.types.map((e) => ({ name: e.name, code: e.id })) : [] } : null;
  }
  relationshipMetaData() {
    return this._parent.relationshipMetaData();
  }
  get gdbVersion() {
    return this._parent ? this._parent.gdbVersion : "";
  }
  schema() {
    const e = [];
    for (const t of this.fields) e.push(G(t));
    return { objectIdField: this.objectIdField, globalIdField: this.globalIdField, geometryType: B[this.geometryType] === void 0 ? "esriGeometryNull" : B[this.geometryType], fields: e };
  }
  async convertToText(e, t) {
    if (e === "schema") return await this._ensureLoaded(), JSON.stringify(this.schema());
    if (e === "featureset") {
      await this._ensureLoaded();
      const n = [];
      await this.reduce((s, i) => {
        const l = { geometry: i.geometry ? i.geometry.toJSON() : null, attributes: i.attributes };
        return l.geometry !== null && l.geometry.spatialReference && delete l.geometry.spatialReference, n.push(l), 1;
      }, 0, t);
      const a = this.schema();
      return a.features = n, a.spatialReference = this.spatialReference.toJSON(), JSON.stringify(a);
    }
    return this.castToText();
  }
  getFeatureByObjectId(e, t) {
    return this._parent.getFeatureByObjectId(e, t);
  }
  getOwningSystemUrl() {
    return this._parent.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._parent.getIdentityUser();
  }
  getRootFeatureSet() {
    return this._parent !== null ? this._parent.getRootFeatureSet() : this;
  }
  getDataSourceFeatureSet() {
    return this._parent !== null ? this._parent.getDataSourceFeatureSet() : this;
  }
  castAsJson(e = null) {
    return e?.featureset === "keeptype" ? this : e?.featureset === "none" ? null : { type: "FeatureSet" };
  }
  async castAsJsonAsync(e = null, t = null) {
    if (t?.featureset === "keeptype") return this;
    if (t?.featureset === "schema") return await this._ensureLoaded(), JSON.parse(JSON.stringify(this.schema()));
    if (t?.featureset === "none") return null;
    await this._ensureLoaded();
    const n = [];
    await this.reduce((s, i) => {
      const l = { geometry: i.geometry ? t?.keepGeometryType === !0 ? i.geometry : i.geometry.toJSON() : null, attributes: i.attributes };
      return l.geometry !== null && l.geometry.spatialReference && t?.keepGeometryType !== !0 && delete l.geometry.spatialReference, n.push(l), 1;
    }, 0, e);
    const a = this.schema();
    return a.features = n, a.spatialReference = t?.keepGeometryType === !0 ? this.spatialReference : this.spatialReference?.toJSON(), a;
  }
  fieldTimeZone(e) {
    return this.getFieldsIndex().getTimeZone(e);
  }
  get preferredTimeZone() {
    return this._parent?.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._parent?.dateFieldsTimeZone ?? null;
  }
  get dateFieldsTimeZoneDefaultUTC() {
    if (this.datesInUnknownTimezone) return "unknown";
    const e = this.dateFieldsTimeZone ?? "UTC";
    return e === "" ? "UTC" : e;
  }
  get datesInUnknownTimezone() {
    return this._parent.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return this._parent?.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._parent?.timeInfo ?? null;
  }
  set featureSetInfo(e) {
    this.fsetInfo = e;
  }
  async getFeatureSetInfo() {
    return this.fsetInfo ?? await this._parent?.getFeatureSetInfo() ?? null;
  }
}
p._featuresetFunctions = {};
class b extends p {
  constructor(e) {
    super(e), this.declaredClass = "esri.layers.featureset.sources.Empty", this._maxProcessing = 1e3, this._wset = new D([], [], !1, null), this._parent = e.parentfeatureset, this._databaseType = c.Standardised;
  }
  async _getSet() {
    return this._wset;
  }
  optimisePagingFeatureQueries() {
  }
  _isInFeatureSet() {
    return F.NotInFeatureSet;
  }
  async _getFeature() {
    throw new m(y.NeverReach);
  }
  async queryAttachments() {
    return [];
  }
  async _getFeatures() {
    return "success";
  }
  _featureFromCache() {
    return null;
  }
  async _fetchAndRefineFeatures() {
    throw new m(y.NeverReach);
  }
  async _getFilteredSet() {
    return new D([], [], !1, null);
  }
  _stat(e, t, n, a, s, i, l) {
    return this._manualStat(e, t, i, l);
  }
  async _canDoAggregates() {
    return !1;
  }
}
class I extends p {
  constructor(e) {
    super(e), this._relation = "", this._relationGeom = null, this._relationString = "", this.declaredClass = "esri.arcade.featureset.actions.SpatialFilter", this._relationString = e.relationString, this._parent = e.parentfeatureset, this._maxProcessing = 40, this._relation = e.relation, this._relationGeom = e.relationGeom;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._parent._getFilteredSet(this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, null, null, e);
      return this._checkCancelled(e), this._wset = new D(t._candidates.slice(0), t._known.slice(0), t._ordered, this._clonePageDefinition(t.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e) {
    let t = this._parent._isInFeatureSet(e);
    return t === F.NotInFeatureSet ? t : (t = this._idstates[e], t === void 0 ? F.Unknown : t);
  }
  _getFeature(e, t, n) {
    return this._parent._getFeature(e, t, n);
  }
  _getFeatures(e, t, n, a) {
    return this._parent._getFeatures(e, t, n, a);
  }
  _featureFromCache(e) {
    return this._parent._featureFromCache(e);
  }
  async executeSpatialRelationTest(e) {
    if (e.geometry === null) return !1;
    switch (this._relation) {
      case "esriSpatialRelEnvelopeIntersects":
        return Y(H(this._relationGeom), H(e.geometry));
      case "esriSpatialRelIntersects":
        return Y(this._relationGeom, e.geometry);
      case "esriSpatialRelContains":
        return we(this._relationGeom, e.geometry);
      case "esriSpatialRelOverlaps":
        return Se(this._relationGeom, e.geometry);
      case "esriSpatialRelWithin":
        return ye(this._relationGeom, e.geometry);
      case "esriSpatialRelTouches":
        return me(this._relationGeom, e.geometry);
      case "esriSpatialRelCrosses":
        return ge(this._relationGeom, e.geometry);
      case "esriSpatialRelRelation":
        return fe(this._relationGeom, e.geometry, this._relationString ?? "");
    }
  }
  async _fetchAndRefineFeatures(e, t, n) {
    const a = new D([], e, !1, null), s = Math.min(t, e.length);
    await this._parent?._getFeatures(a, -1, s, n), this._checkCancelled(n);
    const i = [];
    for (let l = 0; l < s; l++) {
      const u = this._parent._featureFromCache(e[l]);
      i.push(await this.executeSpatialRelationTest(u));
    }
    for (let l = 0; l < t; l++) i[l] === !0 ? this._idstates[e[l]] = F.InFeatureSet : this._idstates[e[l]] = F.NotInFeatureSet;
    return "success";
  }
  async _getFilteredSet(e, t, n, a, s) {
    await this._ensureLoaded();
    const i = await this._parent._getFilteredSet(this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, n, a, s);
    let l;
    return this._checkCancelled(s), l = t !== null ? new D(i._candidates.slice(0).concat(i._known.slice(0)), [], i._ordered, this._clonePageDefinition(i.pagesDefinition)) : new D(i._candidates.slice(0), i._known.slice(0), i._ordered, this._clonePageDefinition(i.pagesDefinition)), l;
  }
  async _stat(e, t, n, a, s, i, l) {
    if (n !== "") return { calculated: !1 };
    const u = await this._parent._stat(e, t, this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, s, i, l);
    return u.calculated === !1 ? s === null && n === "" && a === null ? this._manualStat(e, t, i, l) : { calculated: !1 } : u;
  }
  async _canDoAggregates(e, t, n, a, s) {
    return n === "" && a === null && this._parent !== null && this._parent._canDoAggregates(e, t, this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, s);
  }
  async _getAggregatePagesDataSourceDefinition(e, t, n, a, s, i, l) {
    if (this._parent === null) throw new m(y.NeverReach);
    return this._parent._getAggregatePagesDataSourceDefinition(e, t, this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, s, i, l);
  }
  static registerAction() {
    p._featuresetFunctions.intersects = function(e) {
      return e == null ? new b({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelIntersects", relationGeom: e });
    }, p._featuresetFunctions.envelopeIntersects = function(e) {
      return e == null ? new b({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelEnvelopeIntersects", relationGeom: e });
    }, p._featuresetFunctions.contains = function(e) {
      return e == null ? new b({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelContains", relationGeom: e });
    }, p._featuresetFunctions.overlaps = function(e) {
      return e == null ? new b({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelOverlaps", relationGeom: e });
    }, p._featuresetFunctions.within = function(e) {
      return e == null ? new b({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelWithin", relationGeom: e });
    }, p._featuresetFunctions.touches = function(e) {
      return e == null ? new b({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelTouches", relationGeom: e });
    }, p._featuresetFunctions.crosses = function(e) {
      return e == null ? new b({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelCrosses", relationGeom: e });
    }, p._featuresetFunctions.relate = function(e, t) {
      return e == null ? new b({ parentfeatureset: this }) : new I({ parentfeatureset: this, relation: "esriSpatialRelRelation", relationGeom: e, relationString: t });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
}
export {
  De as D,
  q as E,
  Ee as F,
  be as I,
  Fe as L,
  Q as S,
  U as T,
  K as a,
  qe as b,
  E as c,
  Ve as d,
  I as f,
  Ke as g,
  Ye as m,
  Ze as p,
  D as t,
  b as u,
  Qe as v,
  R as w,
  p as x,
  Ie as y
};
//# sourceMappingURL=SpatialFilter-D4ZBVcjd.js.map
