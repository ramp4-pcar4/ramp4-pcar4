import { v as sr, eX as Xe, a3 as j, dS as Ra, iE as at, b8 as ye, b5 as ie, b6 as te, b7 as Se, eU as N, b3 as or, eV as le, nK as fi, fz as pi, bx as vt, a1 as Oa, df as Pa, dl as La, em as mi, oO as Ir, bq as St, iB as Di, dZ as Nt, C as ur, it as Ua, $ as za, a9 as gi, aa as Za } from "./main-uCo5F72j.js";
import { m as P, a as me, n as De, h as _t, c as Be, r as Xt, b as se } from "./TimeOnly-DoVQD36B.js";
import { t as ce } from "./ImmutableArray-CiJxhY8_.js";
import { s as Ga, p as yi } from "./number-D-MN-3az.js";
let qt = class {
  constructor(t) {
    this.source = t;
  }
}, mn = class {
  constructor(t, n) {
    this._moduleSingletons = t, this._syntaxModules = n;
  }
  loadLibrary(t) {
    if (this._syntaxModules == null) return null;
    const n = this._syntaxModules[t.toLowerCase()];
    return n ? { syntax: n.script, uri: n.uri } : null;
  }
};
var c;
(function(e) {
  e.AsyncNotEnabled = "AsyncNotEnabled", e.ModulesNotSupported = "ModulesNotSupported", e.CircularModules = "CircularModules", e.CannotCompareDateAndTime = "CannotCompareDateAndTime", e.NeverReach = "NeverReach", e.UnsupportedHashType = "UnsupportedHashType", e.InvalidParameter = "InvalidParameter", e.FeatureSetDoesNotHaveSubtypes = "FeatureSetDoesNotHaveSubtypes", e.UnexpectedToken = "UnexpectedToken", e.Unrecognized = "Unrecognized", e.UnrecognizedType = "UnrecognizedType", e.MaximumCallDepth = "MaximumCallDepth", e.BooleanConditionRequired = "BooleanConditionRequired", e.TypeNotAllowedInFeature = "TypeNotAllowedInFeature", e.KeyMustBeString = "KeyMustBeString", e.WrongNumberOfParameters = "WrongNumberOfParameters", e.CallNonFunction = "CallNonFunction", e.NoFunctionInTemplateLiteral = "NoFunctionInTemplateLiteral", e.NoFunctionInDictionary = "NoFunctionInDictionary", e.NoFunctionInArray = "NoFunctionInArray", e.AssignModuleFunction = "AssignModuleFunction", e.LogicExpressionOrAnd = "LogicExpressionOrAnd", e.LogicalExpressionOnlyBoolean = "LogicalExpressionOnlyBoolean", e.FunctionNotFound = "FunctionNotFound", e.InvalidMemberAccessKey = "InvalidMemberAccessKey", e.UnsupportedUnaryOperator = "UnsupportUnaryOperator", e.InvalidIdentifier = "InvalidIdentifier", e.MemberOfNull = "MemberOfNull", e.UnsupportedOperator = "UnsupportedOperator", e.Cancelled = "Cancelled", e.ModuleAccessorMustBeString = "ModuleAccessorMustBeString", e.ModuleExportNotFound = "ModuleExportNotFound", e.Immutable = "Immutable", e.OutOfBounds = "OutOfBounds", e.IllegalResult = "IllegalResult", e.FieldNotFound = "FieldNotFound", e.PortalRequired = "PortalRequired", e.LogicError = "LogicError", e.ArrayAccessorMustBeNumber = "ArrayAccessMustBeNumber", e.KeyAccessorMustBeString = "KeyAccessorMustBeString", e.WrongSpatialReference = "WrongSpatialReference", e.CannotChangeTimeZoneTime = "CannotChangeTimeZoneTime", e.CannotChangeTimeZoneDateOnly = "CannotChangeTimeZoneDateOnly";
})(c || (c = {}));
const wi = { [c.TypeNotAllowedInFeature]: "Feature attributes only support dates, numbers, strings, guids.", [c.LogicError]: "Logic error - {reason}", [c.CannotCompareDateAndTime]: "Cannot compare date or dateonly with timeonly types", [c.NeverReach]: "Encountered unreachable logic", [c.AsyncNotEnabled]: "Async Arcade must be enabled for this script", [c.ModuleAccessorMustBeString]: "Module accessor must be a string", [c.ModuleExportNotFound]: "Module has no export with provided identifier", [c.ModulesNotSupported]: "Current profile does not support modules", [c.ArrayAccessorMustBeNumber]: "Array accessor must be a number", [c.FunctionNotFound]: "Function not found", [c.FieldNotFound]: "Key not found - {key}", [c.CircularModules]: "Circular module dependencies are not allowed", [c.Cancelled]: "Execution cancelled", [c.UnsupportedHashType]: "Type not supported in hash function", [c.IllegalResult]: "Value is not a supported return type", [c.PortalRequired]: "Portal is required", [c.InvalidParameter]: "Invalid parameter", [c.WrongNumberOfParameters]: "Call with wrong number of parameters", [c.Unrecognized]: "Unrecognized code structure", [c.UnrecognizedType]: "Unrecognized type", [c.WrongSpatialReference]: "Cannot work with geometry in this spatial reference. It is different to the execution spatial reference", [c.BooleanConditionRequired]: "Conditions must use booleans", [c.NoFunctionInDictionary]: "Dictionaries cannot contain functions.", [c.NoFunctionInArray]: "Arrays cannot contain functions.", [c.NoFunctionInTemplateLiteral]: "Template Literals do not expect functions by value.", [c.KeyAccessorMustBeString]: "Accessor must be a string", [c.KeyMustBeString]: "Object keys must be a string", [c.Immutable]: "Object is immutable", [c.UnexpectedToken]: "Unexpected token", [c.MemberOfNull]: "Cannot access property of null object", [c.MaximumCallDepth]: "Exceeded maximum function depth", [c.OutOfBounds]: "Out of bounds", [c.InvalidIdentifier]: "Identifier not recognized", [c.CallNonFunction]: "Expression is not a function", [c.InvalidMemberAccessKey]: "Cannot access value using a key of this type", [c.AssignModuleFunction]: "Cannot assign function to module variable", [c.UnsupportedUnaryOperator]: "Unsupported unary operator", [c.UnsupportedOperator]: "Unsupported operator", [c.LogicalExpressionOnlyBoolean]: "Logical expressions must be boolean", [c.LogicExpressionOrAnd]: "Logical expression can only be combined with || or &&", [c.CannotChangeTimeZoneTime]: "Cannot change the timezone of a Time", [c.CannotChangeTimeZoneDateOnly]: "Cannot change the timezone of a DateOnly", [c.FeatureSetDoesNotHaveSubtypes]: "FeatureSet does not have subtypes" };
let ja = class extends Error {
  constructor(...t) {
    super(...t);
  }
}, kr = class xi extends ja {
  constructor(t, n) {
    super(lr(n) + t.message, { cause: t }), this.loc = null, Error.captureStackTrace && Error.captureStackTrace(this, xi), n?.loc && (this.loc = n.loc);
  }
}, h = class Fi extends Error {
  constructor(t, n, r, a) {
    super("Execution error - " + lr(r) + sr(wi[n], a)), this.loc = null, this.declaredRootClass = "esri.arcade.arcadeexecutionerror", Error.captureStackTrace && Error.captureStackTrace(this, Fi), r?.loc && (this.loc = r.loc);
  }
};
function lr(e) {
  return e && e.loc ? `Line : ${e.loc.start?.line}, ${e.loc.start?.column}: ` : "";
}
let he = class Ci extends Error {
  constructor(t, n, r, a) {
    super("Compilation error - " + lr(r) + sr(wi[n], a)), this.loc = null, this.declaredRootClass = "esri.arcade.arcadecompilationerror", Error.captureStackTrace && Error.captureStackTrace(this, Ci), r?.loc && (this.loc = r.loc);
  }
}, Qt = class Ai extends Error {
  constructor() {
    super("Uncompilable code structures"), this.declaredRootClass = "esri.arcade.arcadeuncompilableerror", Error.captureStackTrace && Error.captureStackTrace(this, Ai);
  }
};
function Ja(e, t, n) {
  return n.declaredRootClass === "esri.arcade.arcadeexecutionerror" || n.declaredRootClass === "esri.arcade.arcadecompilationerror" ? n.loc === null && t?.loc ? new kr(n, { cause: n }) : n : (n.declaredRootClass === "esri.arcade.featureset.support.featureseterror" || n.declaredRootClass === "esri.arcade.featureset.support.sqlerror" || n.declaredRootClass, t?.loc ? new kr(n, { cause: n }) : n);
}
var st;
(function(e) {
  e.UnrecognizedUri = "UnrecognizedUri", e.UnsupportedUriProtocol = "UnsupportedUriProtocol";
})(st || (st = {}));
const qa = { [st.UnrecognizedUri]: "Unrecognized uri - {uri}", [st.UnsupportedUriProtocol]: "Unrecognized uri protocol" };
let En = class bi extends Error {
  constructor(t, n) {
    super(sr(qa[t], n)), this.declaredRootClass = "esri.arcade.arcademoduleerror", Error.captureStackTrace && Error.captureStackTrace(this, bi);
  }
}, ot = class {
  constructor() {
  }
};
function yt(e, t, n) {
  if (e instanceof ot && !(e instanceof qe)) {
    const r = new qe();
    return r.fn = e, r.parameterEvaluator = n, r.context = t, r;
  }
  return e;
}
let ut = class extends ot {
  constructor(t) {
    super(), this.fn = t;
  }
  createFunction(t) {
    return (...n) => this.fn(t, { preparsed: !0, arguments: n });
  }
  call(t, n) {
    return this.fn(t, n);
  }
  marshalledCall(t, n, r, a) {
    return a(t, n, (o, s, i) => {
      i = i.map((l) => l instanceof ot && !(l instanceof qe) ? yt(l, t, a) : l);
      const u = this.call(r, { args: i });
      return Xe(u) ? u.then((l) => yt(l, r, a)) : u;
    });
  }
}, qe = class extends ot {
  constructor() {
    super(...arguments), this.fn = null, this.context = null;
  }
  createFunction(t) {
    return this.fn.createFunction(this.context);
  }
  call(t, n) {
    return this.fn.marshalledCall(t, n, this.context, this.parameterEvaluator);
  }
  marshalledCall(t, n, r) {
    return this.fn.marshalledCall(t, n, this.context, this.parameterEvaluator);
  }
}, ct = class Ei extends ce {
  constructor(t, n, r, a, o, s) {
    super(t), this._lazyPt = [], this._hasZ = !1, this._hasM = !1, this._spRef = n, this._hasZ = r, this._hasM = a, this._cacheId = o, this._partId = s;
  }
  get(t) {
    if (this._lazyPt[t] === void 0) {
      const n = this._elements[t];
      if (n === void 0) return;
      const r = this._hasZ, a = this._hasM;
      let o;
      o = r && !a ? new j(n[0], n[1], n[2], void 0, this._spRef) : a && !r ? new j(n[0], n[1], void 0, n[2], this._spRef) : r && a ? new j(n[0], n[1], n[2], n[3], this._spRef) : new j(n[0], n[1], this._spRef), o.cache._arcadeCacheId = this._cacheId.toString() + "-" + this._partId.toString() + "-" + t.toString(), this._lazyPt[t] = o;
    }
    return this._lazyPt[t];
  }
  equalityTest(t) {
    return t === this || t !== null && t instanceof Ei && t.getUniqueHash() === this.getUniqueHash();
  }
  getUniqueHash() {
    return this._cacheId.toString() + "-" + this._partId.toString();
  }
}, zn = class vi extends ce {
  constructor(t, n, r, a, o) {
    super(t), this._lazyPath = [], this._hasZ = !1, this._hasM = !1, this._hasZ = r, this._hasM = a, this._spRef = n, this._cacheId = o;
  }
  get(t) {
    if (this._lazyPath[t] === void 0) {
      const n = this._elements[t];
      if (n === void 0) return;
      this._lazyPath[t] = new ct(n, this._spRef, this._hasZ, this._hasM, this._cacheId, t);
    }
    return this._lazyPath[t];
  }
  equalityTest(t) {
    return t === this || t !== null && t instanceof vi && t.getUniqueHash() === this.getUniqueHash();
  }
  getUniqueHash() {
    return this._cacheId.toString();
  }
};
var Tr, Br;
function Cl(e) {
  return Ra.fromJSON(e.toJSON());
}
function Va(e) {
  return e.toJSON ? e.toJSON() : e;
}
function Al(e) {
  return typeof e == "string" || e instanceof String;
}
function bl(e) {
  return typeof e == "number";
}
function Nr(e) {
  return e instanceof Date;
}
function El(e) {
  return e instanceof at;
}
function Mr(e) {
  return e instanceof P;
}
function vl(e) {
  return e instanceof me;
}
function Sl(e) {
  return e instanceof De;
}
function Il(e, t) {
  return e === t || !(!Nr(e) && !Mr(e) || !Nr(t) && !Mr(t)) && e.getTime() === t.getTime();
}
function kl(e) {
  if (e == null) return null;
  if (typeof e == "number") return e;
  switch (e.toLowerCase()) {
    case "meters":
    case "meter":
      return 109404;
    case "miles":
    case "mile":
      return 109439;
    case "kilometers":
    case "kilometer":
    case "km":
      return 109414;
  }
  return null;
}
function Tl(e) {
  if (e == null) return null;
  switch (e.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return e.extent;
    case "point":
      return new ye({ xmin: e.x, ymin: e.y, xmax: e.x, ymax: e.y, spatialReference: e.spatialReference });
    case "extent":
      return e;
  }
  return null;
}
function Bl(e) {
  if (e == null) return null;
  if (typeof e == "number" || typeof e == "number") return e;
  switch (e.toLowerCase()) {
    case "meters":
    case "meter":
      return 9001;
    case "miles":
    case "mile":
      return 9093;
    case "kilometers":
    case "kilometer":
    case "km":
      return 9036;
  }
  return null;
}
(function(e) {
  e[e.Standardised = 0] = "Standardised", e[e.StandardisedNoInterval = 1] = "StandardisedNoInterval", e[e.SqlServer = 2] = "SqlServer", e[e.Oracle = 3] = "Oracle", e[e.Postgres = 4] = "Postgres", e[e.PGDB = 5] = "PGDB", e[e.FILEGDB = 6] = "FILEGDB", e[e.NotEvaluated = 7] = "NotEvaluated";
})(Tr || (Tr = {})), function(e) {
  e[e.InFeatureSet = 0] = "InFeatureSet", e[e.NotInFeatureSet = 1] = "NotInFeatureSet", e[e.Unknown = 2] = "Unknown";
}(Br || (Br = {}));
const Nl = 1e3, Ml = { point: "point", polygon: "polygon", polyline: "polyline", multipoint: "multipoint", extent: "extent", esriGeometryPoint: "point", esriGeometryPolygon: "polygon", esriGeometryPolyline: "polyline", esriGeometryMultipoint: "multipoint", esriGeometryEnvelope: "extent", envelope: "extent" }, $r = { point: "esriGeometryPoint", polygon: "esriGeometryPolygon", polyline: "esriGeometryPolyline", multipoint: "esriGeometryMultipoint", extent: "esriGeometryEnvelope", esriGeometryPoint: "esriGeometryPoint", esriGeometryPolygon: "esriGeometryPolygon", esriGeometryPolyline: "esriGeometryPolyline", esriGeometryMultipoint: "esriGeometryMultipoint", esriGeometryEnvelope: "esriGeometryEnvelope", envelope: "esriGeometryEnvelope" }, _r = { "small-integer": "esriFieldTypeSmallInteger", integer: "esriFieldTypeInteger", long: "esriFieldTypeLong", single: "esriFieldTypeSingle", double: "esriFieldTypeDouble", string: "esriFieldTypeString", date: "esriFieldTypeDate", "date-only": "esriFieldTypeDateOnly", "time-only": "esriFieldTypeTimeOnly", "timestamp-offset": "esriFieldTypeTimestampOffset", oid: "esriFieldTypeOID", geometry: "esriFieldTypeGeometry", blob: "esriFieldTypeBlob", raster: "esriFieldTypeRaster", guid: "esriFieldTypeGUID", "global-id": "esriFieldTypeGlobalID", xml: "esriFieldTypeXML", "big-integer": "esriFieldTypeBigInteger", esriFieldTypeSmallInteger: "esriFieldTypeSmallInteger", esriFieldTypeInteger: "esriFieldTypeInteger", esriFieldTypeLong: "esriFieldTypeLong", esriFieldTypeSingle: "esriFieldTypeSingle", esriFieldTypeDouble: "esriFieldTypeDouble", esriFieldTypeString: "esriFieldTypeString", esriFieldTypeDate: "esriFieldTypeDate", esriFieldTypeDateOnly: "esriFieldTypeDateOnly", esriFieldTypeTimeOnly: "esriFieldTypeTimeOnly", esriFieldTypeTimestampOffset: "esriFieldTypeTimestampOffset", esriFieldTypeOID: "esriFieldTypeOID", esriFieldTypeGeometry: "esriFieldTypeGeometry", esriFieldTypeBlob: "esriFieldTypeBlob", esriFieldTypeRaster: "esriFieldTypeRaster", esriFieldTypeGUID: "esriFieldTypeGUID", esriFieldTypeGlobalID: "esriFieldTypeGlobalID", esriFieldTypeXML: "esriFieldTypeXML", esriFieldTypeBigInteger: "esriFieldTypeBigInteger" };
function $l(e) {
  return e === void 0 ? "" : e = (e = (e = e.replace(/\/featureserver\/[0-9]*/i, "/FeatureServer")).replace(/\/mapserver\/[0-9]*/i, "/MapServer")).split("?")[0];
}
function _l(e, t) {
  t || (t = {}), typeof t == "function" && (t = { cmp: t });
  const n = typeof t.cycles == "boolean" && t.cycles, r = t.cmp && (a = t.cmp, function(s) {
    return function(i, u) {
      const l = { key: i, value: s[i] }, f = { key: u, value: s[u] };
      return a(l, f);
    };
  });
  var a;
  const o = [];
  return function s(i) {
    if (i?.toJSON && typeof i.toJSON == "function" && (i = i.toJSON()), i === void 0) return;
    if (typeof i == "number") return isFinite(i) ? "" + i : "null";
    if (typeof i != "object") return JSON.stringify(i);
    let u, l;
    if (Array.isArray(i)) {
      for (l = "[", u = 0; u < i.length; u++) u && (l += ","), l += s(i[u]) || "null";
      return l + "]";
    }
    if (i === null) return "null";
    if (o.includes(i)) {
      if (n) return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const f = o.push(i) - 1, d = Object.keys(i).sort(r?.(i));
    for (l = "", u = 0; u < d.length; u++) {
      const m = d[u], g = s(i[m]);
      g && (l && (l += ","), l += JSON.stringify(m) + ":" + g);
    }
    return o.splice(f, 1), "{" + l + "}";
  }(e);
}
function Ha(e) {
  switch (e.type) {
    case "catalog":
    case "feature":
    case "oriented-imagery":
    case "subtype-group":
      return !0;
    default:
      return !1;
  }
}
function Rl(e) {
  switch (e.type) {
    case "catalog-footprint":
    case "subtype-sublayer":
      return !0;
    default:
      return Ha(e);
  }
}
let Si = class {
  constructor(t) {
    this.value = t;
  }
}, Ii = class {
  constructor(t) {
    this.value = t;
  }
};
const wt = Ii, xe = Si, C = { type: "VOID" }, Me = { type: "BREAK" }, It = { type: "CONTINUE" };
function et(e, t, n) {
  return t === "" || t == null || t === n || t === n ? e : e = e.split(t).join(n);
}
function Q(e) {
  return e instanceof ot;
}
function cr(e) {
  return e instanceof qt;
}
function Ve(e) {
  return !!x(e) || !!L(e) || !!H(e) || !!O(e) || !!G(e) || !!J(e) || e === null || e === C || typeof e == "number";
}
function R(e, t) {
  return e === void 0 ? t : e;
}
function hr(e) {
  return e == null ? "" : T(e) || _(e) ? "Array" : H(e) ? "Date" : G(e) ? "Time" : O(e) ? "DateOnly" : x(e) ? "String" : J(e) ? "Boolean" : L(e) ? "Number" : e?.declaredClass === "esri.arcade.Attachment" ? "Attachment" : e?.declaredClass === "esri.arcade.Portal" ? "Portal" : e?.declaredClass === "esri.arcade.Dictionary" ? "Dictionary" : dr(e) ? "KnowledgeGraph" : e instanceof qt ? "Module" : X(e) ? "Feature" : e instanceof j ? "Point" : e instanceof ie ? "Polygon" : e instanceof te ? "Polyline" : e instanceof Se ? "Multipoint" : e instanceof ye ? "Extent" : Q(e) ? "Function" : kt(e) ? "FeatureSet" : Ht(e) ? "FeatureSetCollection" : e === C ? "" : typeof e == "number" && isNaN(e) ? "Number" : "Unrecognized Type";
}
function x(e) {
  return typeof e == "string" || e instanceof String;
}
function J(e) {
  return typeof e == "boolean";
}
function L(e) {
  return typeof e == "number";
}
function Ze(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
function Vt(e) {
  return e instanceof N;
}
function T(e) {
  return Array.isArray(e);
}
function X(e) {
  return e?.arcadeDeclaredClass === "esri.arcade.Feature";
}
function kt(e) {
  return e?.declaredRootClass === "esri.arcade.featureset.support.FeatureSet";
}
function Dn(e) {
  return e?.declaredClass === "esri.arcade.Dictionary";
}
function Ht(e) {
  return e?.declaredRootClass === "esri.arcade.featureSetCollection";
}
function dr(e) {
  return e?.declaredClass === "esri.rest.knowledgeGraph.KnowledgeGraph";
}
function _(e) {
  return e instanceof ce;
}
function H(e) {
  return e instanceof P;
}
function O(e) {
  return e instanceof me;
}
function G(e) {
  return e instanceof De;
}
function Zn(e) {
  return e != null && typeof e == "object";
}
function on(e) {
  return e instanceof Date;
}
function D(e, t, n, r, a) {
  if (e.length < t || e.length > n) throw new h(r, c.WrongNumberOfParameters, a);
}
function Gn(e) {
  return e < 0 ? -Math.round(-e) : Math.round(e);
}
function fr(e, t) {
  return isNaN(e) || t == null || t === "" ? e.toString() : (t = et(t, "‰", ""), t = et(t, "¤", ""), Ga(e, { pattern: t }));
}
function gn(e, t) {
  return t == null || t === "" ? e.toISOString(!0) : e.toFormat(pr(t), { locale: or(), numberingSystem: "latn" });
}
function pr(e, t = !1) {
  e = e.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g, "[$&]");
  let n = "";
  const r = /(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|Z{1,5}|.)/g;
  for (const a of e.match(r) || []) switch (a) {
    case "D":
      n += "d";
      break;
    case "DD":
      n += "dd";
      break;
    case "DDD":
      n += "o";
      break;
    case "d":
      n += "c";
      break;
    case "ddd":
      n += "ccc";
      break;
    case "dddd":
      n += "cccc";
      break;
    case "M":
      n += "L";
      break;
    case "MM":
      n += "LL";
      break;
    case "MMM":
      n += "LLL";
      break;
    case "MMMM":
      n += "LLLL";
      break;
    case "YY":
      n += "yy";
      break;
    case "Y":
    case "YYYY":
      n += "yyyy";
      break;
    case "Q":
      n += "q";
      break;
    case "Z":
      n += "Z";
      break;
    case "ZZ":
      n += "ZZ";
      break;
    case "ZZZ":
      n += "ZZZ";
      break;
    case "ZZZZ":
      n += t ? "[ZZZZ]" : "ZZZZ";
      break;
    case "ZZZZZ":
      n += t ? "[ZZZZZ]" : "ZZZZZ";
      break;
    case "S":
      n += "'S'";
      break;
    case "SS":
      n += "'SS'";
      break;
    case "SSS":
      n += "u";
      break;
    case "A":
    case "a":
      n += "a";
      break;
    case "m":
    case "mm":
    case "h":
    case "hh":
    case "H":
    case "HH":
    case "s":
    case "ss":
    case "X":
    case "x":
      n += a;
      break;
    default:
      a.length >= 2 && a.slice(0, 1) === "[" && a.slice(-1) === "]" ? n += `'${a.slice(1, -1)}'` : n += `'${a}'`;
  }
  return n;
}
function $(e, t, n) {
  switch (n) {
    case ">":
      return e > t;
    case "<":
      return e < t;
    case ">=":
      return e >= t;
    case "<=":
      return e <= t;
  }
  return !1;
}
function mr(e, t, n) {
  if (e === null) {
    if (t === null || t === C) return $(null, null, n);
    if (L(t)) return $(0, t, n);
    if (x(t) || J(t)) return $(0, p(t), n);
    if (H(t)) return $(0, t.toNumber(), n);
    if (G(t) || O(t)) return $(e, t.toNumber(), n);
  }
  if (e === C) {
    if (t === null || t === C) return $(null, null, n);
    if (L(t)) return $(0, t, n);
    if (x(t) || J(t)) return $(0, p(t), n);
    if (H(t)) return $(0, t.toNumber(), n);
    if (G(t) || O(t)) return $(e, t.toNumber(), n);
  } else if (L(e)) {
    if (L(t)) return $(e, t, n);
    if (J(t)) return $(e, p(t), n);
    if (t === null || t === C) return $(e, 0, n);
    if (x(t)) return $(e, p(t), n);
    if (H(t) || G(t) || O(t)) return $(e, t.toNumber(), n);
  } else if (x(e)) {
    if (x(t)) return $(F(e), F(t), n);
    if (H(t) || G(t) || O(t)) return $(p(e), t.toNumber(), n);
    if (L(t)) return $(p(e), t, n);
    if (t === null || t === C) return $(p(e), 0, n);
    if (J(t)) return $(p(e), p(t), n);
  } else if (H(e)) {
    if (H(t)) return e.timeZone !== t.timeZone && (e.isUnknownTimeZone ? e = P.arcadeDateAndZoneToArcadeDate(e, t.timeZone) : t.isUnknownTimeZone && (t = P.arcadeDateAndZoneToArcadeDate(t, e.timeZone))), $(e.toNumber(), t.toNumber(), n);
    if (t === null || t === C) return $(e.toNumber(), 0, n);
    if (L(t)) return $(e.toNumber(), t, n);
    if (J(t) || x(t)) return $(e.toNumber(), p(t), n);
    if (G(t)) throw new h(null, c.CannotCompareDateAndTime, null);
    if (O(t)) return $(e.toNumber(), t.toNumber(), n);
  } else if (J(e)) {
    if (J(t)) return $(e, t, n);
    if (L(t)) return $(p(e), p(t), n);
    if (H(t) || G(t) || O(t)) return $(p(e), t.toNumber(), n);
    if (t === null || t === C) return $(p(e), 0, n);
    if (x(t)) return $(p(e), p(t), n);
  } else if (O(e)) {
    if (H(t)) return $(e.toNumber(), t.toNumber(), n);
    if (t === null || t === C) return $(e.toNumber(), 0, n);
    if (L(t)) return $(e.toNumber(), t, n);
    if (J(t) || x(t)) return $(e.toNumber(), p(t), n);
    if (G(t)) throw new h(null, c.CannotCompareDateAndTime, null);
    if (O(t)) return $(e.toNumber(), t.toNumber(), n);
  } else if (G(e)) {
    if (H(t)) throw new h(null, c.CannotCompareDateAndTime, null);
    if (t === null || t === C) return $(e.toNumber(), 0, n);
    if (L(t)) return $(e.toNumber(), t, n);
    if (J(t) || x(t)) return $(e.toNumber(), p(t), n);
    if (G(t)) return $(e.toNumber(), t.toNumber(), n);
    if (O(t)) throw new h(null, c.CannotCompareDateAndTime, null);
  }
  return !!ke(e, t) && (n === "<=" || n === ">=");
}
function ke(e, t) {
  if (e === t || e === null && t === C || t === null && e === C) return !0;
  if (H(e) && H(t) || G(e) && G(t) || O(e) && O(t)) return e.equals(t);
  if (e instanceof zn || e instanceof ct) return e.equalityTest(t);
  if (e instanceof j && t instanceof j) {
    const n = e.cache._arcadeCacheId, r = t.cache._arcadeCacheId;
    if (n != null) return n === r;
  }
  return !!(Zn(e) && Zn(t) && (e._arcadeCacheId === t._arcadeCacheId && e._arcadeCacheId !== void 0 && e._arcadeCacheId !== null || e._underlyingGraphic === t._underlyingGraphic && e._underlyingGraphic !== void 0 && e._underlyingGraphic !== null));
}
function F(e, t) {
  if (x(e)) return e;
  if (e === null) return "";
  if (L(e)) return fr(e, t);
  if (J(e)) return e.toString();
  if (H(e)) return gn(e, t);
  if (G(e) || O(e)) return e.toFormat(t);
  if (e instanceof N) return JSON.stringify(e.toJSON());
  if (T(e)) {
    const n = [];
    for (let r = 0; r < e.length; r++) n[r] = un(e[r]);
    return "[" + n.join(",") + "]";
  }
  if (e instanceof ce) {
    const n = [];
    for (let r = 0; r < e.length(); r++) n[r] = un(e.get(r));
    return "[" + n.join(",") + "]";
  }
  return e !== null && typeof e == "object" && e.castToText !== void 0 ? e.castToText() : Q(e) ? "object, Function" : e === C ? "" : cr(e) ? "object, Module" : "";
}
function nt(e) {
  const t = [];
  if (!T(e)) return null;
  if (e instanceof ce) {
    for (let n = 0; n < e.length(); n++) t[n] = p(e.get(n));
    return t;
  }
  for (let n = 0; n < e.length; n++) t[n] = p(e[n]);
  return t;
}
function Ae(e, t, n = !1) {
  if (x(e)) return e;
  if (e === null) return "";
  if (L(e)) return fr(e, t);
  if (J(e)) return e.toString();
  if (H(e)) return gn(e, t);
  if (G(e) || O(e)) return e.toFormat(t);
  if (e instanceof N) return e instanceof ye ? '{"xmin":' + e.xmin.toString() + ',"ymin":' + e.ymin.toString() + "," + (e.hasZ ? '"zmin":' + e.zmin.toString() + "," : "") + (e.hasM ? '"mmin":' + e.mmin.toString() + "," : "") + '"xmax":' + e.xmax.toString() + ',"ymax":' + e.ymax.toString() + "," + (e.hasZ ? '"zmax":' + e.zmax.toString() + "," : "") + (e.hasM ? '"mmax":' + e.mmax.toString() + "," : "") + '"spatialReference":' + jn(e.spatialReference) + "}" : jn(e.toJSON(), (r, a) => r.key === a.key ? 0 : r.key === "spatialReference" ? 1 : a.key === "spatialReference" || r.key < a.key ? -1 : r.key > a.key ? 1 : 0);
  if (T(e)) {
    const r = [];
    for (let a = 0; a < e.length; a++) r[a] = un(e[a], n);
    return "[" + r.join(",") + "]";
  }
  if (e instanceof ce) {
    const r = [];
    for (let a = 0; a < e.length(); a++) r[a] = un(e.get(a), n);
    return "[" + r.join(",") + "]";
  }
  return e !== null && typeof e == "object" && e.castToText !== void 0 ? e.castToText(n) : Q(e) ? "object, Function" : e === C ? "" : cr(e) ? "object, Module" : "";
}
function un(e, t = !1) {
  if (e === null) return "null";
  if (J(e) || L(e) || x(e)) return JSON.stringify(e);
  if (e instanceof N || e instanceof ce || Array.isArray(e)) return Ae(e, null, t);
  if (H(e)) return JSON.stringify(t ? e.getTime() : gn(e, ""));
  if (G(e) || O(e)) return JSON.stringify(e.toString());
  if (e !== null && typeof e == "object") {
    if (e.castToText !== void 0) return e.castToText(t);
  } else if (e === C) return "null";
  return "null";
}
function p(e, t) {
  return L(e) ? e : e === null || e === "" ? 0 : H(e) || O(e) || G(e) ? NaN : J(e) ? e ? 1 : 0 : T(e) || e === "" || e === void 0 ? NaN : t !== void 0 && x(e) ? (t = et(t, "‰", ""), t = et(t, "¤", ""), yi(e, { pattern: t })) : e === C ? 0 : Number(e);
}
function ue(e, t) {
  if (H(e)) return e;
  if (x(e)) {
    const n = Wa(e, t);
    if (n) return P.dateTimeToArcadeDate(n);
  }
  return null;
}
function Wa(e, t) {
  const n = / (\d\d)/, r = _t(t);
  let a = at.fromISO(e, { zone: r });
  return a.isValid || n.test(e) && (e = e.replace(n, "T$1"), a = at.fromISO(e, { zone: t }), a.isValid) ? a : null;
}
function xt(e) {
  return J(e) ? e : x(e) ? (e = e.toLowerCase()) === "true" : !!L(e) && e !== 0 && !isNaN(e);
}
function Ka(e, t) {
  const n = JSON.parse(e);
  return n && !n.spatialReference && (n.spatialReference = t), le(n);
}
function ne(e, t) {
  return e == null ? null : (e.spatialReference !== null && e.spatialReference !== void 0 || (e.spatialReference = t), e);
}
function rt(e) {
  if (e === null) return null;
  if (e instanceof j) return e.x === "NaN" || e.x === null || isNaN(e.x) ? null : e;
  if (e instanceof ie) {
    if (e.rings.length === 0) return null;
    for (const t of e.rings) if (t.length > 0) return e;
    return null;
  }
  if (e instanceof te) {
    if (e.paths.length === 0) return null;
    for (const t of e.paths) if (t.length > 0) return e;
    return null;
  }
  return e instanceof Se ? e.points.length === 0 ? null : e : e instanceof ye ? e.xmin === "NaN" || e.xmin === null || isNaN(e.xmin) ? null : e : null;
}
function ki(e, t) {
  if (!e || !e.domain) return t;
  let n = null, r = null;
  if (H(t)) n = t.toNumber();
  else if (O(t)) n = t.toString();
  else if (G(t)) n = t.toStorageString();
  else if (e.field.type === "string" || e.field.type === "esriFieldTypeString") n = F(t);
  else {
    if (t == null) return null;
    if (t === "") return t;
    n = p(t);
  }
  for (let a = 0; a < e.domain.codedValues.length; a++) {
    const o = e.domain.codedValues[a];
    o.code === n && (r = o);
  }
  return r === null ? F(t) : r.name;
}
function Ti(e, t) {
  if (!e || !e.domain) return t;
  let n = null;
  const r = F(t);
  for (let a = 0; a < e.domain.codedValues.length; a++) {
    const o = e.domain.codedValues[a];
    o.name === r && (n = o);
  }
  return n === null ? t : n.code;
}
function yn(e, t, n = null, r = null) {
  if (!t || !t.fields) return null;
  let a, o, s = null;
  for (let f = 0; f < t.fields.length; f++) {
    const d = t.fields[f];
    d.name.toLowerCase() === e.toString().toLowerCase() && (s = d);
  }
  if (s === null) throw new h(null, c.FieldNotFound, null, { key: e });
  let i = t.typeIdField, u = "id", l = t.types;
  if (t.subtypeField && (i = t.subtypeField, u = "code", l = t.subtypes ?? []), r === null && n && i) r = n.hasField(i) ? n.field(i) : null;
  else if (i && r !== null) {
    let f = !1;
    for (const d of l || []) if (r === d[u]) {
      f = !0;
      break;
    }
    if (!f) {
      for (const d of l || []) if (r === d.name) {
        r = d[u], f = !0;
        break;
      }
    }
    f || (r = null, n && i && (r = n.hasField(i) ? n.field(i) : null));
  }
  return r != null && l.some((f) => f[u] === r && (a = f.domains?.[s.name], a && a.type === "inherited" && (a = Rr(s.name, t), o = !0), !0)), o || a || (a = Rr(e, t)), { field: s, domain: a };
}
function Rr(e, t) {
  let n;
  return t.fields.some((r) => (r.name.toLowerCase() === e.toLowerCase() && (n = r.domain), !!n)), n;
}
function jn(e, t) {
  t || (t = {}), typeof t == "function" && (t = { cmp: t });
  const n = typeof t.cycles == "boolean" && t.cycles, r = t.cmp && (a = t.cmp, function(s) {
    return function(i, u) {
      const l = { key: i, value: s[i] }, f = { key: u, value: s[u] };
      return a(l, f);
    };
  });
  var a;
  const o = [];
  return function s(i) {
    if (i?.toJSON && typeof i.toJSON == "function" && (i = i.toJSON()), i === void 0) return;
    if (typeof i == "number") return isFinite(i) ? "" + i : "null";
    if (typeof i != "object") return JSON.stringify(i);
    let u, l;
    if (Array.isArray(i)) {
      for (l = "[", u = 0; u < i.length; u++) u && (l += ","), l += s(i[u]) || "null";
      return l + "]";
    }
    if (i === null) return "null";
    if (o.includes(i)) {
      if (n) return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const f = o.push(i) - 1, d = Object.keys(i).sort(r?.(i));
    for (l = "", u = 0; u < d.length; u++) {
      const m = d[u], g = s(i[m]);
      g && (l && (l += ","), l += JSON.stringify(m) + ":" + g);
    }
    return o.splice(f, 1), "{" + l + "}";
  }(e);
}
function Z(e) {
  if (e === null) return null;
  const t = [];
  for (const n of e) n?.arcadeDeclaredClass && n.arcadeDeclaredClass === "esri.arcade.Feature" ? t.push(n.geometry()) : t.push(n);
  return t;
}
function Ft(e, t) {
  if (!(t instanceof j)) throw new h(null, c.InvalidParameter, null);
  e.push(t.hasZ ? t.hasM ? [t.x, t.y, t.z, t.m] : [t.x, t.y, t.z] : [t.x, t.y]);
}
function Jn(e, t) {
  if (T(e) || _(e)) {
    let n = !1, r = !1, a = [], o = t;
    if (T(e)) {
      for (const s of e) Ft(a, s);
      a.length > 0 && (o = e[0].spatialReference, n = e[0].hasZ, r = e[0].hasM);
    } else if (e instanceof ct) a = e._elements, a.length > 0 && (n = e._hasZ, r = e._hasM, o = e.get(0).spatialReference);
    else {
      if (!_(e)) throw new h(null, c.InvalidParameter, null);
      for (const s of e.toArray()) Ft(a, s);
      a.length > 0 && (o = e.get(0).spatialReference, n = e.get(0).hasZ === !0, r = e.get(0).hasM === !0);
    }
    return a.length === 0 ? null : (fi(a) || (a = a.slice(0).reverse()), new ie({ rings: [a], spatialReference: o, hasZ: n, hasM: r }));
  }
  return e;
}
function Ke(e, t) {
  if (T(e) || _(e)) {
    let n = !1, r = !1, a = [], o = t;
    if (T(e)) {
      for (const s of e) Ft(a, s);
      a.length > 0 && (o = e[0].spatialReference, n = e[0].hasZ === !0, r = e[0].hasM === !0);
    } else if (e instanceof ct) a = e._elements, a.length > 0 && (n = e._hasZ, r = e._hasM, o = e.get(0).spatialReference);
    else if (_(e)) {
      for (const s of e.toArray()) Ft(a, s);
      a.length > 0 && (o = e.get(0).spatialReference, n = e.get(0).hasZ === !0, r = e.get(0).hasM === !0);
    }
    return a.length === 0 ? null : new te({ paths: [a], spatialReference: o, hasZ: n, hasM: r });
  }
  return e;
}
function tn(e, t) {
  if (T(e) || _(e)) {
    let n = !1, r = !1, a = [], o = t;
    if (T(e)) {
      for (const s of e) Ft(a, s);
      a.length > 0 && (o = e[0].spatialReference, n = e[0].hasZ === !0, r = e[0].hasM === !0);
    } else if (e instanceof ct) a = e._elements, a.length > 0 && (n = e._hasZ, r = e._hasM, o = e.get(0).spatialReference);
    else if (_(e)) {
      for (const s of e.toArray()) Ft(a, s);
      a.length > 0 && (o = e.get(0).spatialReference, n = e.get(0).hasZ === !0, r = e.get(0).hasM === !0);
    }
    return a.length === 0 ? null : new Se({ points: a, spatialReference: o, hasZ: n, hasM: r });
  }
  return e;
}
function Ya(e, t = !1) {
  const n = [];
  if (e === null) return n;
  if (T(e) === !0) {
    for (let r = 0; r < e.length; r++) {
      const a = F(e[r]);
      a === "" && t !== !0 || n.push(a);
    }
    return n;
  }
  if (e instanceof ce) {
    for (let r = 0; r < e.length(); r++) {
      const a = F(e.get(r));
      a === "" && t !== !0 || n.push(a);
    }
    return n;
  }
  if (Ve(e)) {
    const r = F(e);
    return r === "" && t !== !0 || n.push(r), n;
  }
  return [];
}
let vn = 0;
function Xa(e) {
  return vn++, vn % 100 == 0 ? (vn = 0, new Promise((t) => {
    setTimeout(() => {
      t(e);
    }, 0);
  })) : e;
}
function Dr(e, t, n) {
  switch (n) {
    case "&":
      return e & t;
    case "|":
      return e | t;
    case "^":
      return e ^ t;
    case "<<":
      return e << t;
    case ">>":
      return e >> t;
    case ">>>":
      return e >>> t;
  }
}
function tt(e, t = null) {
  return e == null ? null : J(e) || L(e) || x(e) ? e : e instanceof N ? t?.keepGeometryType === !0 ? e : e.toJSON() : e instanceof ce ? e.toArray().map((n) => tt(n, t)) : Array.isArray(e) ? e.map((n) => tt(n, t)) : on(e) ? e : H(e) ? e.toJSDate() : G(e) ? e.toString() : O(e) ? e.toJSDate() : e !== null && typeof e == "object" && e.castAsJson !== void 0 ? e.castAsJson(t) : null;
}
async function Qa(e, t, n, r, a) {
  const o = await gr(e, t, n);
  a[r] = o;
}
async function gr(e, t = null, n = null) {
  if (e instanceof ce && (e = e.toArray()), e == null) return null;
  if (Ve(e) || e instanceof N || on(e) || H(e)) return tt(e, n);
  if (Array.isArray(e)) {
    const r = [], a = [];
    for (const o of e) o === null || Ve(o) || o instanceof N || on(o) || H(o) ? a.push(tt(o, n)) : (a.push(null), r.push(Qa(o, t, n, a.length - 1, a)));
    return r.length > 0 && await Promise.all(r), a;
  }
  return e !== null && typeof e == "object" && e.castAsJsonAsync !== void 0 ? e.castAsJsonAsync(t, n) : null;
}
function Wt(e) {
  return Bi(e) ? e.parent : e;
}
function Bi(e) {
  return e && "declaredClass" in e && e.declaredClass === "esri.layers.support.SubtypeSublayer";
}
function es(e) {
  return e && "declaredClass" in e && e.declaredClass === "esri.layers.SubtypeGroupLayer";
}
function Ni(e, t, n) {
  const r = Wt(e.fullSchema());
  return r === null || !r.fields ? null : yn(t, r, e, n);
}
function nn(e) {
  const t = Wt(e.fullSchema());
  return t === null ? null : t.fields ? t.subtypeField ? { subtypeField: t.subtypeField, subtypes: t.subtypes ? t.subtypes.map((n) => ({ name: n.name, code: n.code })) : [] } : t.typeIdField ? { subtypeField: t.typeIdField, subtypes: t.types ? t.types.map((n) => ({ name: n.name, code: n.id })) : [] } : null : null;
}
function Mi(e, t, n, r) {
  const a = Wt(e.fullSchema());
  if (a === null || !a.fields) return null;
  const o = yn(t, a, e, r);
  if (n === void 0) try {
    n = e.field(t);
  } catch {
    return null;
  }
  return ki(o, n);
}
function $i(e, t, n, r) {
  const a = Wt(e.fullSchema());
  if (a === null || !a.fields) return null;
  if (n === void 0) {
    try {
      n = e.field(t);
    } catch {
      return null;
    }
    return n;
  }
  return Ti(yn(t, a, e, r), n);
}
function M(e) {
  return e?.timeZone ?? "system";
}
function _i(e) {
  const t = Wt(e.fullSchema());
  if (t === null || !t.fields) return null;
  const n = [];
  for (const r of t.fields) n.push(Va(r));
  return { objectIdField: t.objectIdField, globalIdField: t.globalIdField ?? "", geometryType: $r[t.geometryType] === void 0 ? "" : $r[t.geometryType], fields: n };
}
function Ri(e, t) {
  return e === "system" && (e = P.systemTimeZoneCanonicalName), { version: Oi, engineVersion: pi, timeZone: e, spatialReference: t instanceof vt ? t.toJSON() : t, application: Oa.applicationName ?? "", engine: "web", locale: or() };
}
const Oi = "1.24", Pi = Object.freeze(Object.defineProperty({ __proto__: null, ImplicitResultE: Ii, ReturnResultE: Si, absRound: Gn, arcadeVersion: Oi, autoCastArrayOfPointsToMultiPoint: tn, autoCastArrayOfPointsToPolygon: Jn, autoCastArrayOfPointsToPolyline: Ke, autoCastFeatureToGeometry: Z, binaryOperator: Dr, breakResult: Me, castAsJson: tt, castAsJsonAsync: gr, continueResult: It, defaultExecutingContext: Ri, defaultTimeZone: M, defaultUndefined: R, equalityTest: ke, featureDomainCodeLookup: $i, featureDomainValueLookup: Mi, featureFullDomain: Ni, featureSchema: _i, featureSubtypes: nn, fixNullGeometry: rt, fixSpatialReference: ne, formatDate: gn, formatNumber: fr, getDomain: yn, getDomainCode: Ti, getDomainValue: ki, getType: hr, greaterThanLessThan: mr, implicitResult: wt, isArray: T, isBoolean: J, isDate: H, isDateOnly: O, isDictionary: Dn, isFeature: X, isFeatureSet: kt, isFeatureSetCollection: Ht, isFunctionParameter: Q, isGeometry: Vt, isImmutableArray: _, isInteger: Ze, isJsDate: on, isKnowledgeGraph: dr, isModule: cr, isNumber: L, isObject: Zn, isSimpleType: Ve, isString: x, isSubtypeGrouplayer: es, isSubtypeSublayer: Bi, isTime: G, multiReplace: et, parseGeometryFromJson: Ka, pcCheck: D, returnResult: xe, stableStringify: jn, standardiseDateFormat: pr, tick: Xa, toBoolean: xt, toDate: ue, toNumber: p, toNumberArray: nt, toString: F, toStringArray: Ya, toStringExplicit: Ae, voidOperation: C }, Symbol.toStringTag, { value: "Module" }));
function ts(e) {
  Li = e;
}
let Li;
function Gt(e) {
  return e === null ? null : H(e) ? e.clone() : Ve(e) ? e : Vt(e) ? e.clone() : _(e) ? e.toArray().map((t) => Gt(t)) : T(e) ? e.map((t) => Gt(t)) : X(e) ? Li.createFromArcadeFeature(e) : Ht(e) || kt(e) ? e : Dn(e) || e?.declaredClass === "esri.arcade.Attachment" ? e.deepClone() : (e?.declaredClass === "esri.arcade.Portal" || dr(e) || e instanceof qt || Q(e), e);
}
function ln(e, t, n = !1, r = !1) {
  if (e == null) return null;
  if (L(e)) return p(e);
  if (J(e)) return xt(e);
  if (x(e)) return F(e);
  if (H(e)) return ue(e, t);
  if (O(e) || G(e)) return e;
  if (T(e)) {
    const o = [];
    for (const s of e) o.push(ln(s, t, n, r));
    return o;
  }
  if (r && Vt(e)) return e;
  const a = new B();
  a.immutable = !1;
  for (const o of Object.keys(e)) {
    const s = e[o];
    s !== void 0 && a.setField(o, ln(s, t, n, r));
  }
  return a.immutable = n, a;
}
let B = class rn {
  constructor(t) {
    this.declaredClass = "esri.arcade.Dictionary", this.attributes = null, this.plain = !1, this.immutable = !0, this.attributes = t instanceof rn ? t.attributes : t ?? {};
  }
  field(t) {
    const n = t.toLowerCase(), r = this.attributes[t];
    if (r !== void 0) return r;
    for (const a in this.attributes) if (a.toLowerCase() === n) return this.attributes[a];
    throw new h(null, c.FieldNotFound, null, { key: t });
  }
  setField(t, n) {
    if (this.immutable) throw new h(null, c.Immutable, null);
    if (Q(n)) throw new h(null, c.NoFunctionInDictionary, null);
    const r = t.toLowerCase();
    if (n instanceof Date && (n = P.dateJSToArcadeDate(n)), this.attributes[t] === void 0) {
      for (const a in this.attributes) if (a.toLowerCase() === r) return void (this.attributes[a] = n);
      this.attributes[t] = n;
    } else this.attributes[t] = n;
  }
  hasField(t) {
    const n = t.toLowerCase();
    if (this.attributes[t] !== void 0) return !0;
    for (const r in this.attributes) if (r.toLowerCase() === n) return !0;
    return !1;
  }
  keys() {
    let t = [];
    for (const n in this.attributes) t.push(n);
    return t = t.sort(), t;
  }
  castToText(t = !1) {
    let n = "";
    for (const r in this.attributes) {
      n !== "" && (n += ",");
      const a = this.attributes[r];
      a == null ? n += JSON.stringify(r) + ":null" : J(a) || L(a) || x(a) ? n += JSON.stringify(r) + ":" + JSON.stringify(a) : a instanceof N ? n += JSON.stringify(r) + ":" + Ae(a) : a instanceof ce || Array.isArray(a) ? n += JSON.stringify(r) + ":" + Ae(a, null, t) : a instanceof P ? n += t ? JSON.stringify(r) + ":" + JSON.stringify(a.getTime()) : JSON.stringify(r) + ":" + a.stringify() : a !== null && typeof a == "object" && a.castToText !== void 0 && (n += JSON.stringify(r) + ":" + a.castToText(t));
    }
    return "{" + n + "}";
  }
  static convertObjectToArcadeDictionary(t, n, r = !0, a = !1) {
    const o = new rn();
    o.immutable = !1;
    for (const s in t) {
      const i = t[s];
      i !== void 0 && o.setField(s.toString(), ln(i, n, r, a));
    }
    return o.immutable = r, o;
  }
  static convertJsonToArcade(t, n, r = !1, a = !1) {
    return ln(t, n, r, a);
  }
  castAsJson(t = null) {
    const n = {};
    for (let r in this.attributes) {
      const a = this.attributes[r];
      a !== void 0 && (t?.keyTranslate && (r = t.keyTranslate(r)), n[r] = tt(a, t));
    }
    return n;
  }
  async castDictionaryValueAsJsonAsync(t, n, r, a = null, o) {
    const s = await gr(r, a, o);
    return t[n] = s, s;
  }
  async castAsJsonAsync(t = null, n = null) {
    const r = {}, a = [];
    for (let o in this.attributes) {
      const s = this.attributes[o];
      n?.keyTranslate && (o = n.keyTranslate(o)), s !== void 0 && (Ve(s) || s instanceof N || s instanceof P ? r[o] = tt(s, n) : a.push(this.castDictionaryValueAsJsonAsync(r, o, s, t, n)));
    }
    return a.length > 0 && await Promise.all(a), r;
  }
  deepClone() {
    const t = new rn();
    t.immutable = !1;
    for (const n of this.keys()) t.setField(n, Gt(this.field(n)));
    return t;
  }
}, Pe = 0;
function Ct(e, t, n, r, a = 1) {
  let o;
  switch (t = t.toLowerCase()) {
    case "hasz": {
      const s = e.hasZ;
      return s !== void 0 && s;
    }
    case "hasm": {
      const s = e.hasM;
      return s !== void 0 && s;
    }
    case "spatialreference": {
      let s = e.spatialReference._arcadeCacheId;
      if (s === void 0) {
        let u = !0;
        Object.freeze && Object.isFrozen(e.spatialReference) && (u = !1), u && (Pe++, e.spatialReference._arcadeCacheId = Pe, s = Pe);
      }
      const i = new B({ wkt: e.spatialReference.wkt, wkid: e.spatialReference.wkid });
      return s !== void 0 && (i._arcadeCacheId = "SPREF" + s.toString()), i;
    }
  }
  switch (e.type) {
    case "extent":
      switch (t) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax": {
          const s = e[t];
          return s !== void 0 ? s : null;
        }
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (t) {
        case "rings":
          return o = e.cache._arcadeCacheId, o === void 0 && (Pe++, o = Pe, e.cache._arcadeCacheId = o), new zn(e.rings, e.spatialReference, e.hasZ === !0, e.hasM === !0, o);
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (t) {
        case "x":
        case "y":
        case "z":
        case "m":
          return e[t] ?? null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (t) {
        case "paths":
          return o = e.cache._arcadeCacheId, o === void 0 && (Pe++, o = Pe, e.cache._arcadeCacheId = o), new zn(e.paths, e.spatialReference, e.hasZ === !0, e.hasM === !0, o);
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (t) {
        case "points":
          return o = e.cache._arcadeCacheId, o === void 0 && (Pe++, o = Pe, e.cache._arcadeCacheId = o), new ct(e.points, e.spatialReference, e.hasZ === !0, e.hasM === !0, o, 1);
        case "type":
          return "Multipoint";
      }
  }
  if (a === 1) throw new h(n, c.InvalidIdentifier, r);
  return a === 2 ? { keystate: "notfound" } : null;
}
function yr(e, t) {
  let n, r = e;
  if (r == null) return null;
  if (T(t)) n = t;
  else if (_(t)) n = t.toArray();
  else {
    if (t == null) return null;
    n = [t];
  }
  for (const a of n) {
    if (X(r)) {
      if (x(a) === !1 || !r.hasField(a)) return null;
      r = r.field(a);
    } else if (Dn(r)) {
      if (x(a) === !1 || !r.hasField(a)) return null;
      r = r.field(a);
    } else if (Vt(r)) {
      if (x(a) === !1) return null;
      r = Ct(r, a, null, null, 0);
    } else if (T(r)) {
      if (L(a) === !1) return null;
      r = a >= 0 ? r[a] : r[r.length + a];
    } else {
      if (!_(r) || L(a) === !1) return null;
      r = a >= 0 ? r.get(a) : r.get(r.length() + a);
    }
    if (r == null) return null;
  }
  return r;
}
let ee = class Ee {
  constructor() {
    this.arcadeDeclaredClass = "esri.arcade.Feature", this._optimizedGeomDefinition = null, this._geometry = null, this.attributes = null, this._layer = null, this._fieldTypesFixed = !0, this.fieldsIndex = null, this.contextTimeZone = null, this.immutable = !0, this._fieldsToFixDataTypes = null, this.immutable = !0;
  }
  static createFromGraphic(t, n) {
    const r = new Ee();
    return r.contextTimeZone = n ?? null, r._geometry = t.geometry != null ? t.geometry : null, t.attributes === void 0 || t.attributes === null ? r.attributes = {} : r.attributes = t.attributes, t._sourceLayer ? (r._layer = t._sourceLayer, r._fieldTypesFixed = !1) : t._layer ? (r._layer = t._layer, r._fieldTypesFixed = !1) : t.layer && "fields" in t.layer ? (r._layer = t.layer, r._fieldTypesFixed = !1) : t.sourceLayer && "fields" in t.sourceLayer && (r._layer = t.sourceLayer, r._fieldTypesFixed = !1), r._layer && !r._fieldTypesFixed && (r.fieldsIndex = this.hydrateFieldsIndex(r._layer)), r;
  }
  static createFromArcadeFeature(t) {
    if (t instanceof Ee) {
      const r = new Ee();
      return r._fieldTypesFixed = t._fieldTypesFixed, r.attributes = t.attributes, r._geometry = t._geometry, r._optimizedGeomDefinition = t._optimizedGeomDefinition, t._layer && (r._layer = t._layer), r.fieldsIndex = t.fieldsIndex, r.contextTimeZone = t.contextTimeZone, r;
    }
    const n = {};
    for (const r of t.keys()) n[r] = t.field(r);
    return Ee.createFromGraphicLikeObject(t.geometry(), n, t.fullSchema(), t.contextTimeZone);
  }
  static createFromOptimisedFeature(t, n, r) {
    const a = new Ee();
    return a._geometry = t.geometry ? { geometry: t.geometry } : null, a._optimizedGeomDefinition = r, a.attributes = t.attributes || {}, a._layer = n, a._fieldTypesFixed = !1, a;
  }
  static createFromArcadeDictionary(t, n) {
    const r = new Ee();
    return r.attributes = t.field("attributes"), r.attributes !== null && r.attributes instanceof B ? (r.attributes = r.attributes.attributes, r.attributes === null && (r.attributes = {})) : r.attributes = {}, r._geometry = t.field("geometry"), r._geometry !== null && (r._geometry instanceof B ? r._geometry = Ee.parseGeometryFromDictionary(r._geometry, n) : r._geometry instanceof N || (r._geometry = null)), r;
  }
  static createFromGraphicLikeObject(t, n, r = null, a) {
    const o = new Ee();
    return o.contextTimeZone = a ?? null, n === null && (n = {}), o.attributes = n, o._geometry = t ?? null, o._layer = r, o._layer && (o._fieldTypesFixed = !1, o.fieldsIndex = this.hydrateFieldsIndex(o._layer)), o;
  }
  static hydrateFieldsIndex(t) {
    return t === null ? null : kt(t) ? t.getFieldsIndex() : t.fieldsIndex ? t.fieldsIndex : Pa.fromLayerJSON({ datesInUnknownTimezone: t.datesInUnknownTimezone, fields: t.fields, timeInfo: t.timeInfo, editFieldsInfo: t.editFieldsInfo, dateFieldsTimeReference: t.dateFieldsTimeReference ?? { timeZone: "UTC", respectsDaylightSaving: !1 } });
  }
  repurposeFromGraphicLikeObject(t, n, r = null) {
    n === null && (n = {}), this.attributes = n, this._geometry = t ?? null, this._layer = r, this._layer ? this._fieldTypesFixed = !1 : this._fieldTypesFixed = !0;
  }
  castToText(t = !1) {
    let n = "";
    this._fieldTypesFixed === !1 && this._fixFieldTypes();
    for (const r in this.attributes) {
      n !== "" && (n += ",");
      const a = this.attributes[r];
      a == null ? n += JSON.stringify(r) + ":null" : J(a) || L(a) || x(a) ? n += JSON.stringify(r) + ":" + JSON.stringify(a) : a instanceof N ? n += JSON.stringify(r) + ":" + Ae(a) : a instanceof De || a instanceof me ? n += `${JSON.stringify(r)}:${JSON.stringify(a.toString())}` : a instanceof ce || Array.isArray(a) ? n += JSON.stringify(r) + ":" + Ae(a, null, t) : a instanceof P ? n += t ? JSON.stringify(r) + ":" + JSON.stringify(a.getTime()) : JSON.stringify(r) + ":" + a.stringify() : a !== null && typeof a == "object" && a.castToText !== void 0 && (n += JSON.stringify(r) + ":" + a.castToText(t));
    }
    return '{"geometry":' + (this.geometry() === null ? "null" : Ae(this.geometry())) + ',"attributes":{' + n + "}}";
  }
  _fixFieldTypes() {
    if (this._fieldsToFixDataTypes && this._fieldsToFixDataTypes?.length > 0) return this._fixAllFields(this._fieldsToFixDataTypes), void (this._fieldTypesFixed = !0);
    const t = [], n = this._layer.fields;
    for (let r = 0; r < n.length; r++) {
      const a = n[r], { name: o, type: s } = a;
      switch (s) {
        case "date":
        case "esriFieldTypeDate":
          t.push({ field: o, dataType: "date" });
          break;
        case "date-only":
        case "esriFieldTypeDateOnly":
          t.push({ field: o, dataType: "date-only" });
          break;
        case "time-only":
        case "esriFieldTypeTimeOnly":
          t.push({ field: o, dataType: "time-only" });
          break;
        case "timestamp-offset":
        case "esriFieldTypeTimestampOffset":
          t.push({ field: o, dataType: "timestamp-offset" });
      }
    }
    this._fieldsToFixDataTypes = t, t.length > 0 && this._fixAllFields(t), this._fieldTypesFixed = !0;
  }
  isUnknownDateTimeField(t) {
    return this.fieldsIndex?.getTimeZone(t) === "unknown";
  }
  _fixAllFields(t) {
    this.attributes = { ...this.attributes };
    const n = this.contextTimeZone ?? "system";
    for (let r = 0; r < t.length; r++) {
      const a = t[r].field, o = t[r].dataType;
      let s = this.attributes[a];
      if (s === void 0) {
        for (const i in this.attributes) if (i.toLowerCase() === a.toLowerCase()) {
          if (s = this.attributes[i], s !== null) {
            if (o === "time-only") {
              G(s) || (this.attributes[i] = De.fromReader(s.toString()));
              break;
            }
            if (o === "date-only") {
              O(s) || (this.attributes[i] = me.fromReader(s.toString()));
              break;
            }
            if (o === "timestamp-offset") {
              H(s) || (this.attributes[i] = P.fromReaderAsTimeStampOffset(s.toString()));
              break;
            }
            const u = this.isUnknownDateTimeField(i);
            s instanceof Date ? this.attributes[i] = u ? P.unknownDateJSToArcadeDate(s) : P.dateJSAndZoneToArcadeDate(s, n) : H(s) || (this.attributes[i] = u ? P.unknownEpochToArcadeDate(s) : P.epochToArcadeDate(s, n));
          }
          break;
        }
      } else if (s !== null) {
        if (o === "time-only") {
          G(s) ? this.attributes[a] = s : this.attributes[a] = De.fromReader(s.toString());
          continue;
        }
        if (o === "date-only") {
          O(s) ? this.attributes[a] = s : this.attributes[a] = me.fromReader(s.toString());
          continue;
        }
        if (o === "timestamp-offset") {
          H(s) ? this.attributes[a] = s : this.attributes[a] = P.fromReaderAsTimeStampOffset(s.toString());
          continue;
        }
        const i = this.isUnknownDateTimeField(a);
        H(s) ? this.attributes[a] = s : s instanceof Date ? this.attributes[a] = i ? P.unknownDateJSToArcadeDate(s) : P.dateJSAndZoneToArcadeDate(s, n) : this.attributes[a] = i ? P.unknownEpochToArcadeDate(s) : P.epochToArcadeDate(s, n);
      }
    }
  }
  geometry() {
    return this._geometry === null || this._geometry instanceof N || (this._optimizedGeomDefinition ? (this._geometry = le(La(this._geometry, this._optimizedGeomDefinition.geometryType, this._optimizedGeomDefinition.hasZ, this._optimizedGeomDefinition.hasM)), this._geometry.spatialReference = this._optimizedGeomDefinition.spatialReference) : this._geometry = le(this._geometry)), this._geometry;
  }
  field(t) {
    this._fieldTypesFixed || this._fixFieldTypes();
    const n = this.attributes[t];
    if (n !== void 0) return n;
    const r = t.toLowerCase();
    for (const a in this.attributes) if (a.toLowerCase() === r) return this.attributes[a];
    if (this._hasFieldDefinition(r)) return null;
    throw new h(null, c.FieldNotFound, null, { key: t });
  }
  _hasFieldDefinition(t) {
    if (this._layer === null) return !1;
    for (let n = 0; n < this._layer.fields.length; n++)
      if (this._layer.fields[n].name.toLowerCase() === t) return !0;
    return !1;
  }
  setField(t, n) {
    if (this.immutable) throw new h(null, c.Immutable, null);
    if (n instanceof Date && (n = this.isUnknownDateTimeField(t) ? P.unknownDateJSToArcadeDate(n) : P.dateJSToArcadeDate(n)), Ve(n) === !1) throw new h(null, c.TypeNotAllowedInFeature, null);
    const r = t.toLowerCase();
    if (this.attributes[t] === void 0) {
      for (const a in this.attributes) if (a.toLowerCase() === r) return void (this.attributes[a] = n);
      this.attributes[t] = n;
    } else this.attributes[t] = n;
  }
  hasField(t) {
    const n = t.toLowerCase();
    if (this.attributes[t] !== void 0) return !0;
    for (const r in this.attributes) if (r.toLowerCase() === n) return !0;
    return !!this._hasFieldDefinition(n);
  }
  keys() {
    let t = [];
    const n = {};
    for (const r in this.attributes) t.push(r), n[r.toLowerCase()] = 1;
    if (this._layer !== null) for (let r = 0; r < this._layer.fields.length; r++) {
      const a = this._layer.fields[r];
      n[a.name.toLowerCase()] !== 1 && t.push(a.name);
    }
    return t = t.sort(), t;
  }
  static parseGeometryFromDictionary(t, n) {
    const r = Ee._convertDictionaryToJson(t, !0);
    return r.hasm !== void 0 && (r.hasM = r.hasm, delete r.hasm), r.hasz !== void 0 && (r.hasZ = r.hasz, delete r.hasz), r.spatialreference !== void 0 && (r.spatialReference = r.spatialreference, delete r.spatialreference), r.spatialReference || (r.spatialReference = n), r.rings !== void 0 && (r.rings = this._fixPathArrays(r.rings, r.hasZ === !0, r.hasZ === !0)), r.paths !== void 0 && (r.paths = this._fixPathArrays(r.paths, r.hasZ === !0, r.hasM === !0)), r.points !== void 0 && (r.points = this._fixPointArrays(r.points, r.hasZ === !0, r.hasM === !0)), le(r);
  }
  static _fixPathArrays(t, n, r) {
    const a = [];
    if (Array.isArray(t)) for (let o = 0; o < t.length; o++) a.push(this._fixPointArrays(t[o], n, r));
    else if (t instanceof ce) for (let o = 0; o < t.length(); o++) a.push(this._fixPointArrays(t.get(o), n, r));
    return a;
  }
  static _fixPointArrays(t, n, r) {
    const a = [];
    if (Array.isArray(t)) for (let o = 0; o < t.length; o++) {
      const s = t[o];
      s instanceof j ? n && r ? a.push([s.x, s.y, s.z, s.m]) : n ? a.push([s.x, s.y, s.z]) : r ? a.push([s.x, s.y, s.m]) : a.push([s.x, s.y]) : s instanceof ce ? a.push(s.toArray()) : a.push(s);
    }
    else if (t instanceof ce) for (let o = 0; o < t.length(); o++) {
      const s = t.get(o);
      s instanceof j ? n && r ? a.push([s.x, s.y, s.z, s.m]) : n ? a.push([s.x, s.y, s.z]) : r ? a.push([s.x, s.y, s.m]) : a.push([s.x, s.y]) : s instanceof ce ? a.push(s.toArray()) : a.push(s);
    }
    return a;
  }
  static _convertDictionaryToJson(t, n = !1) {
    const r = {};
    for (const a in t.attributes) {
      let o = t.attributes[a];
      o instanceof B && (o = Ee._convertDictionaryToJson(o)), n ? r[a.toLowerCase()] = o : r[a] = o;
    }
    return r;
  }
  static parseAttributesFromDictionary(t) {
    const n = {};
    for (const r in t.attributes) {
      const a = t.attributes[r];
      if (!Ve(a)) throw new h(null, c.InvalidParameter, null);
      n[r] = a;
    }
    return n;
  }
  static fromJson(t, n) {
    let r = null;
    t.geometry !== null && t.geometry !== void 0 && (r = le(t.geometry));
    const a = {};
    if (t.attributes !== null && t.attributes !== void 0) for (const o in t.attributes) {
      const s = t.attributes[o];
      if (s === null) a[o] = s;
      else {
        if (!(x(s) || L(s) || J(s) || H(s) || G(s) || O(s))) throw new h(null, c.InvalidParameter, null);
        a[o] = s;
      }
    }
    return Ee.createFromGraphicLikeObject(r, a, null, n ?? null);
  }
  fullSchema() {
    return this._layer;
  }
  gdbVersion() {
    if (this._layer === null) return "";
    const t = this._layer.gdbVersion;
    return t === void 0 ? "" : t === "" && this._layer.capabilities?.isVersioned ? "SDE.DEFAULT" : t;
  }
  castAsJson(t) {
    const n = { attributes: {}, geometry: t?.keepGeometryType === !0 ? this.geometry() : this.geometry()?.toJSON() ?? null };
    for (const r in this.attributes) {
      const a = this.attributes[r];
      a !== void 0 && (n.attributes[r] = tt(a, t));
    }
    return n;
  }
  async castAsJsonAsync(t = null, n) {
    return this.castAsJson(n);
  }
};
ts(ee);
const Or = { all: { min: 2, max: 2 }, time: { min: 0, max: 4 }, dateonly: { min: 0, max: 3 }, getenvironment: { min: 0, max: 0 }, none: { min: 2, max: 2 }, any: { min: 2, max: 2 }, reduce: { min: 2, max: 3 }, map: { min: 2, max: 2 }, filter: { min: 2, max: 2 }, fromcodepoint: { min: 1, max: -1 }, fromcharcode: { min: 1, max: -1 }, tocodepoint: { min: 1, max: 2 }, tocharcode: { min: 1, max: 2 }, concatenate: { min: 0, max: -1 }, expects: { min: 1, max: -1 }, getfeatureset: { min: 1, max: 2 }, week: { min: 1, max: 2 }, fromjson: { min: 1, max: 1 }, length3d: { min: 1, max: 2 }, tohex: { min: 1, max: 1 }, hash: { min: 1, max: 1 }, timezone: { min: 1, max: 1 }, timezoneoffset: { min: 1, max: 1 }, changetimezone: { min: 2, max: 2 }, isoweek: { min: 1, max: 1 }, isoweekday: { min: 1, max: 1 }, hasvalue: { min: 2, max: 2 }, isomonth: { min: 1, max: 1 }, isoyear: { min: 1, max: 1 }, resize: { min: 2, max: 3 }, slice: { min: 0, max: -1 }, splice: { min: 0, max: -1 }, push: { min: 2, max: 2 }, pop: { min: 1, max: 1 }, includes: { min: 2, max: 2 }, array: { min: 0, max: 2 }, front: { min: 1, max: 1 }, back: { min: 1, max: 1 }, insert: { min: 3, max: 3 }, erase: { min: 2, max: 2 }, split: { min: 2, max: 4 }, guid: { min: 0, max: 1 }, standardizeguid: { min: 2, max: 2 }, today: { min: 0, max: 0 }, angle: { min: 2, max: 3 }, bearing: { min: 2, max: 3 }, urlencode: { min: 1, max: 1 }, now: { min: 0, max: 0 }, timestamp: { min: 0, max: 0 }, day: { min: 1, max: 1 }, month: { min: 1, max: 1 }, year: { min: 1, max: 1 }, hour: { min: 1, max: 1 }, second: { min: 1, max: 1 }, millisecond: { min: 1, max: 1 }, minute: { min: 1, max: 1 }, weekday: { min: 1, max: 1 }, toutc: { min: 1, max: 1 }, tolocal: { min: 1, max: 1 }, date: { min: 0, max: 8 }, datediff: { min: 2, max: 4 }, dateadd: { min: 2, max: 3 }, trim: { min: 1, max: 1 }, text: { min: 1, max: 2 }, left: { min: 2, max: 2 }, right: { min: 2, max: 2 }, mid: { min: 2, max: 3 }, upper: { min: 1, max: 1 }, proper: { min: 1, max: 2 }, lower: { min: 1, max: 1 }, find: { min: 2, max: 3 }, iif: { min: 3, max: 3 }, decode: { min: 2, max: -1 }, when: { min: 2, max: -1 }, defaultvalue: { min: 2, max: 3 }, isempty: { min: 1, max: 1 }, domaincode: { min: 2, max: 4 }, domainname: { min: 2, max: 4 }, polygon: { min: 1, max: 1 }, point: { min: 1, max: 1 }, polyline: { min: 1, max: 1 }, extent: { min: 1, max: 1 }, multipoint: { min: 1, max: 1 }, ringisclockwise: { min: 1, max: 1 }, geometry: { min: 1, max: 1 }, count: { min: 0, max: -1 }, number: { min: 1, max: 2 }, acos: { min: 1, max: 1 }, asin: { min: 1, max: 1 }, atan: { min: 1, max: 1 }, atan2: { min: 2, max: 2 }, ceil: { min: 1, max: 2 }, floor: { min: 1, max: 2 }, round: { min: 1, max: 2 }, cos: { min: 1, max: 1 }, exp: { min: 1, max: 1 }, log: { min: 1, max: 1 }, min: { min: 0, max: -1 }, constrain: { min: 3, max: 3 }, console: { min: 0, max: -1 }, max: { min: 0, max: -1 }, pow: { min: 2, max: 2 }, random: { min: 0, max: 0 }, sqrt: { min: 1, max: 1 }, sin: { min: 1, max: 1 }, tan: { min: 1, max: 1 }, abs: { min: 1, max: 1 }, isnan: { min: 1, max: 1 }, stdev: { min: 0, max: -1 }, average: { min: 0, max: -1 }, mean: { min: 0, max: -1 }, sum: { min: 0, max: -1 }, variance: { min: 0, max: -1 }, distinct: { min: 0, max: -1 }, first: { min: 1, max: 1 }, top: { min: 2, max: 2 }, boolean: { min: 1, max: 1 }, dictionary: { min: 0, max: -1 }, typeof: { min: 1, max: 1 }, reverse: { min: 1, max: 1 }, replace: { min: 3, max: 4 }, sort: { min: 1, max: 2 }, feature: { min: 1, max: -1 }, haskey: { min: 2, max: 2 }, indexof: { min: 2, max: 2 }, disjoint: { min: 2, max: 2 }, intersects: { min: 2, max: 2 }, touches: { min: 2, max: 2 }, crosses: { min: 2, max: 2 }, within: { min: 2, max: 2 }, contains: { min: 2, max: 2 }, overlaps: { min: 2, max: 2 }, equals: { min: 2, max: 2 }, relate: { min: 3, max: 3 }, intersection: { min: 2, max: 2 }, union: { min: 1, max: 2 }, difference: { min: 2, max: 2 }, symmetricdifference: { min: 2, max: 2 }, clip: { min: 2, max: 2 }, cut: { min: 2, max: 2 }, area: { min: 1, max: 2 }, areageodetic: { min: 1, max: 2 }, length: { min: 1, max: 2 }, lengthgeodetic: { min: 1, max: 2 }, distancegeodetic: { min: 2, max: 3 }, distance: { min: 2, max: 3 }, densify: { min: 2, max: 3 }, densifygeodetic: { min: 2, max: 3 }, generalize: { min: 2, max: 4 }, buffer: { min: 2, max: 3 }, buffergeodetic: { min: 2, max: 3 }, offset: { min: 2, max: 6 }, rotate: { min: 2, max: 3 }, issimple: { min: 1, max: 1 }, simplify: { min: 1, max: 1 }, convexhull: { min: 1, max: 1 }, centroid: { min: 1, max: 1 }, nearestcoordinate: { min: 2, max: 2 }, nearestvertex: { min: 2, max: 2 }, isselfintersecting: { min: 1, max: 1 }, multiparttosinglepart: { min: 1, max: 1 }, setgeometry: { min: 2, max: 2 }, portal: { min: 1, max: 1 }, getuser: { min: 0, max: 2 }, subtypes: { min: 1, max: 1 }, subtypecode: { min: 1, max: 1 }, subtypename: { min: 1, max: 1 }, domain: { min: 2, max: 3 }, convertdirection: { min: 3, max: 3 }, sqltimestamp: { min: 1, max: 3 }, schema: { min: 1, max: 1 }, measuretocoordinate: { min: 2, max: 2 }, distancetocoordinate: { min: 2, max: 2 }, pointtocoordinate: { min: 2, max: 2 } }, wn = { functionDefinitions: /* @__PURE__ */ new Map(), constantDefinitions: /* @__PURE__ */ new Map() }, xn = { functionDefinitions: /* @__PURE__ */ new Map(), constantDefinitions: /* @__PURE__ */ new Map() };
for (const e of ["pi", "infinity"]) xn.constantDefinitions.set(e, { type: "constant" }), wn.constantDefinitions.set(e, { type: "constant" });
xn.constantDefinitions.set("textformatting", { type: "namespace", key: "textformatting", members: [{ key: "backwardslash", type: "constant" }, { key: "doublequote", type: "constant" }, { key: "forwardslash", type: "constant" }, { key: "tab", type: "constant" }, { key: "singlequote", type: "constant" }, { key: "newline", type: "constant" }] }), wn.constantDefinitions.set("textformatting", { type: "namespace", key: "textformatting", members: [{ key: "backwardslash", type: "constant" }, { key: "tab", type: "constant" }, { key: "singlequote", type: "constant" }, { key: "doublequote", type: "constant" }, { key: "forwardslash", type: "constant" }, { key: "newline", type: "constant" }] });
for (const e in Or) {
  const t = Or[e];
  xn.functionDefinitions.set(e, { overloads: [{ type: "function", parametersInfo: { min: t.min, max: t.max } }] }), wn.functionDefinitions.set(e, { overloads: [{ type: "function", parametersInfo: { min: t.min, max: t.max } }] });
}
const ns = /* @__PURE__ */ new Set(["featureset", "featuresetbyid", "featuresetbyname", "featuresetbyassociation", "featuresetbyrelationshipname", "featuresetbyurl", "getfeatureset", "getuser", "attachments", "featuresetbyportalitem", "getfeaturesetinfo", "filterbysubtypecode", "knowledgegraphbyportalitem", "querygraph"]), rs = /* @__PURE__ */ new Set(["disjoint", "intersects", "touches", "crosses", "within", "contains", "overlaps", "equals", "relate", "intersection", "nearestvertex", "nearestcoordinate", "union", "difference", "symmetricdifference", "clip", "cut", "area", "areageodetic", "length", "length3d", "lengthgeodetic", "distance", "distancegeodetic", "densify", "densifygeodetic", "generalize", "buffer", "buffergeodetic", "offset", "rotate", "issimple", "convexhull", "simplify", "multiparttosinglepart", "pointtocoordinate", "distancetocoordinate", "measuretocoordinate"]);
function Pr(e) {
  return typeof e == "string" || e instanceof String;
}
function qn(e, t) {
  const n = t === "sync" ? wn : xn;
  n.functionDefinitions.has(e.name.toLowerCase()) ? n.functionDefinitions.get(e.name.toLowerCase())?.overloads.push({ type: "function", parametersInfo: { min: e.min, max: e.max } }) : n.functionDefinitions.set(e.name.toLowerCase(), { overloads: [{ type: "function", parametersInfo: { min: e.min, max: e.max } }] });
}
function Le(e, t) {
  if (e) for (const n of e) K(n, t);
}
function K(e, t) {
  if (e && t(e) !== !1) switch (e.type) {
    case "ImportDeclaration":
      Le(e.specifiers, t), K(e.source, t);
      break;
    case "ExportNamedDeclaration":
      K(e.declaration, t);
      break;
    case "ArrayExpression":
      Le(e.elements, t);
      break;
    case "AssignmentExpression":
    case "BinaryExpression":
    case "LogicalExpression":
      K(e.left, t), K(e.right, t);
      break;
    case "BlockStatement":
    case "Program":
      Le(e.body, t);
      break;
    case "BreakStatement":
    case "ContinueStatement":
    case "EmptyStatement":
    case "Identifier":
    case "Literal":
      break;
    case "CallExpression":
      K(e.callee, t), Le(e.arguments, t);
      break;
    case "ExpressionStatement":
      K(e.expression, t);
      break;
    case "ForInStatement":
      K(e.left, t), K(e.right, t), K(e.body, t);
      break;
    case "ForStatement":
      K(e.init, t), K(e.test, t), K(e.update, t), K(e.body, t);
      break;
    case "WhileStatement":
      K(e.test, t), K(e.body, t);
      break;
    case "FunctionDeclaration":
      K(e.id, t), Le(e.params, t), K(e.body, t);
      break;
    case "IfStatement":
      K(e.test, t), K(e.consequent, t), K(e.alternate, t);
      break;
    case "MemberExpression":
      K(e.object, t), K(e.property, t);
      break;
    case "ObjectExpression":
      Le(e.properties, t);
      break;
    case "Property":
      K(e.key, t), K(e.value, t);
      break;
    case "ReturnStatement":
    case "UnaryExpression":
    case "UpdateExpression":
      K(e.argument, t);
      break;
    case "VariableDeclaration":
      Le(e.declarations, t);
      break;
    case "VariableDeclarator":
      K(e.id, t), K(e.init, t);
      break;
    case "TemplateLiteral":
      Le(e.expressions, t), Le(e.quasis, t);
  }
}
function Ui(e, t) {
  let n = !1;
  const r = t.toLowerCase();
  return K(e, (a) => !n && (a.type === "Identifier" && a.name && a.name.toLowerCase() === r && (n = !0), !0)), n;
}
function zi(e) {
  const t = [];
  return K(e, (n) => (n.type === "ImportDeclaration" && n.source && n.source.value && t.push({ libname: n.specifiers[0].local.name.toLowerCase(), source: n.source.value }), !0)), t;
}
function is(e, t) {
  let n = !1;
  const r = t.toLowerCase();
  return K(e, (a) => !n && (a.type !== "CallExpression" || a.callee.type !== "Identifier" || !a.callee.name || a.callee.name.toLowerCase() !== r || (n = !0, !1))), n;
}
function as(e) {
  const t = [];
  return K(e, (n) => n.type !== "MemberExpression" || n.object.type !== "Identifier" || (n.computed === !1 && n.object && n.object.name && n.property && n.property.type === "Identifier" && n.property.name ? t.push(n.object.name.toLowerCase() + "." + n.property.name.toLowerCase()) : n.object && n.object.name && n.property && n.property.type === "Literal" && typeof n.property.value == "string" && t.push(n.object.name.toLowerCase() + "." + n.property.value?.toString().toLowerCase()), !1)), t;
}
function ss(e) {
  const t = [];
  return K(e, (n) => {
    if (n.type === "CallExpression") {
      if (n.callee.type === "Identifier" && n.callee.name.toLowerCase() === "expects") {
        let r = "";
        for (let a = 0; a < (n.arguments || []).length; a++) a === 0 ? n.arguments[a].type === "Identifier" && (r = n.arguments[a].name.toLowerCase()) : r && n.arguments[a].type === "Literal" && Pr(n.arguments[a].value) && t.push(r + "." + n.arguments[a].value.toLowerCase());
        return !1;
      }
      if (n.callee.type === "Identifier" && ["domainname", "domaincode", "domain", "haskey"].includes(n.callee.name.toLowerCase()) && n.arguments.length >= 2) {
        let r = "";
        return n.arguments[0].type === "Identifier" && (r = n.arguments[0].name.toLowerCase()), r && n.arguments[1].type === "Literal" && Pr(n.arguments[1].value) && t.push(r + "." + n.arguments[1].value.toLowerCase()), !1;
      }
    }
    return n.type !== "MemberExpression" || n.object.type !== "Identifier" || (n.computed === !1 && n.object && n.object.name && n.property && n.property.type === "Identifier" && n.property.name ? t.push(n.object.name.toLowerCase() + "." + n.property.name.toLowerCase()) : n.object && n.object.name && n.property && n.property.type === "Literal" && typeof n.property.value == "string" && t.push(n.object.name.toLowerCase() + "." + n.property.value?.toString().toLowerCase()), !1);
  }), t;
}
function Vn(e) {
  const t = [];
  return K(e, (n) => (n.type === "CallExpression" && n.callee.type === "Identifier" && t.push(n.callee.name.toLowerCase()), !0)), t;
}
function Kt(e, t = []) {
  let n = null;
  if (e.usesFeatureSet === void 0) {
    n === null && (n = Vn(e)), e.usesFeatureSet = !1;
    for (let r = 0; r < n.length; r++) ns.has(n[r]) && (e.usesFeatureSet = !0, e.isAsync = !0);
    if (e.usesFeatureSet === !1 && t && t.length > 0) {
      for (const r of t) if (Ui(e, r)) {
        e.usesFeatureSet = !0, e.isAsync = !0;
        break;
      }
    }
  }
  if (e.usesModules === void 0 && (e.usesModules = !1, zi(e).length > 0 && (e.usesModules = !0)), e.usesGeometry === void 0) {
    e.usesGeometry = !1, n === null && (n = Vn(e));
    for (let r = 0; r < n.length; r++) rs.has(n[r]) && (e.usesGeometry = !0);
  }
}
function os(e) {
  function t(i, u, l) {
    if (i instanceof ce) return i.toArray();
    if (T(i)) return i;
    throw new h(u, c.InvalidParameter, l);
  }
  function n(i, u) {
    const l = i.length, f = Math.floor(l / 2);
    return l === 0 ? [] : l === 1 ? [i[0]] : r(n(i.slice(0, f), u), n(i.slice(f, l), u), u);
  }
  function r(i, u, l) {
    const f = [];
    for (; i.length > 0 || u.length > 0; ) if (i.length > 0 && u.length > 0) {
      let d = l(i[0], u[0]);
      isNaN(d) && (d = 0), d <= 0 ? (f.push(i[0]), i = i.slice(1)) : (f.push(u[0]), u = u.slice(1));
    } else i.length > 0 ? (f.push(i[0]), i = i.slice(1)) : u.length > 0 && (f.push(u[0]), u = u.slice(1));
    return f;
  }
  async function a(i, u) {
    const l = i.length, f = Math.floor(l / 2);
    if (l === 0) return [];
    if (l === 1) return [i[0]];
    const d = [await a(i.slice(0, f), u), await a(i.slice(f, l), u)];
    return o(d[0], d[1], u, []);
  }
  async function o(i, u, l, f) {
    const d = f;
    if (i.length > 0 || u.length > 0) {
      if (i.length > 0 && u.length > 0) {
        let m = await l(i[0], u[0]);
        return isNaN(m) && (m = 1), m <= 0 ? (d.push(i[0]), i = i.slice(1)) : (d.push(u[0]), u = u.slice(1)), o(i, u, l, f);
      }
      return i.length > 0 ? (d.push(i[0]), o(i = i.slice(1), u, l, f)) : (d.push(u[0]), o(i, u = u.slice(1), l, f));
    }
    return f;
  }
  function s(i, u, l, f) {
    D(l, 1, 2, i, u);
    let d = l[0];
    if (_(d) && (d = d.toArray()), T(d) === !1) throw new h(i, c.InvalidParameter, u);
    if (l.length > 1) {
      if (Q(l[1]) === !1) throw new h(i, c.InvalidParameter, u);
      let b = d;
      const U = l[1].createFunction(i);
      return f ? a(b, U) : (b = n(b, (ae, fe) => U(ae, fe)), b);
    }
    let m = d;
    if (m.length === 0) return [];
    const g = {};
    for (let b = 0; b < m.length; b++) {
      const U = hr(m[b]);
      U !== "" && (g[U] = !0);
    }
    if (g.Array === !0 || g.Dictionary === !0 || g.Feature === !0 || g.Point === !0 || g.Polygon === !0 || g.Polyline === !0 || g.Multipoint === !0 || g.Extent === !0 || g.Function === !0) return m.slice(0);
    let y = 0, k = "";
    for (const b in g) y++, k = b;
    return m = y > 1 || k === "String" ? n(m, (b, U) => {
      if (b == null || b === C) return U == null || U === C ? 0 : 1;
      if (U == null || U === C) return -1;
      const ae = F(b), fe = F(U);
      return ae < fe ? -1 : ae === fe ? 0 : 1;
    }) : k === "Number" ? n(m, (b, U) => b - U) : k === "Boolean" ? n(m, (b, U) => b === U ? 0 : U ? -1 : 1) : k === "Date" ? n(m, (b, U) => U - b) : m.slice(0), m;
  }
  e.functions.array = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      if (D(d, 0, 2, i, u), d.length === 0) return [];
      if (d.length === 1 && d[0] === null) return [];
      if (T(d[0])) {
        if (d.length === 2 && J(d[1]) === !1) throw new h(i, c.InvalidParameter, u);
        return R(d[1], !1) === !0 ? Gt(d[0]) : d[0].slice(0);
      }
      if (_(d[0])) {
        if (d.length === 2 && J(d[1]) === !1) throw new h(i, c.InvalidParameter, u);
        return R(d[1], !1) === !0 ? Gt(d[0]) : d[0].toArray().slice(0);
      }
      const m = p(d[0]);
      if (isNaN(m) || Ze(m) === !1) throw new h(i, c.InvalidParameter, u);
      const g = R(d[1], null), y = new Array(m);
      return y.fill(g), y;
    });
  }, e.functions.front = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      if (D(d, 1, 1, i, u), _(d[0])) {
        if (d[0].length() <= 0) throw new h(i, c.OutOfBounds, u);
        return d[0].get(0);
      }
      if (T(d[0])) {
        if (d[0].length <= 0) throw new h(i, c.OutOfBounds, u);
        return d[0][0];
      }
      throw new h(i, c.InvalidParameter, u);
    });
  }, e.functions.back = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      if (D(d, 1, 1, i, u), _(d[0])) {
        if (d[0].length() <= 0) throw new h(i, c.OutOfBounds, u);
        return d[0].get(d[0].length() - 1);
      }
      if (T(d[0])) {
        if (d[0].length <= 0) throw new h(i, c.OutOfBounds, u);
        return d[0][d[0].length - 1];
      }
      throw new h(i, c.InvalidParameter, u);
    });
  }, e.functions.push = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      if (D(d, 1, 2, i, u), T(d[0])) return d[0][d[0].length] = d[1], d[0].length;
      throw new h(i, c.InvalidParameter, u);
    });
  }, e.functions.pop = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      if (D(d, 1, 1, i, u), T(d[0])) {
        if (d[0].length <= 0) throw new h(i, c.OutOfBounds, u);
        const m = d[0][d[0].length - 1];
        return d[0].length = d[0].length - 1, m;
      }
      throw new h(i, c.InvalidParameter, u);
    });
  }, e.functions.erase = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      if (D(d, 2, 2, i, u), T(d[0])) {
        let m = p(d[1]);
        if (isNaN(m) || Ze(m) === !1) throw new h(i, c.InvalidParameter, u);
        const g = d[0];
        if (g.length <= 0) throw new h(i, c.OutOfBounds, u);
        if (m < 0 && (m = g.length + m), m < 0) throw new h(i, c.OutOfBounds, u);
        if (m >= g.length) throw new h(i, c.OutOfBounds, u);
        return g.splice(m, 1), C;
      }
      throw new h(i, c.InvalidParameter, u);
    });
  }, e.functions.insert = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      if (D(d, 3, 3, i, u), T(d[0])) {
        const m = p(d[1]);
        if (isNaN(m) || Ze(m) === !1) throw new h(i, c.InvalidParameter, u);
        const g = d[2], y = d[0];
        if (m > y.length) throw new h(i, c.OutOfBounds, u);
        if (m < 0 && m < -1 * y.length) throw new h(i, c.OutOfBounds, u);
        return m === y.length ? (y[m] = g, C) : (y.splice(m, 0, g), C);
      }
      throw new h(i, c.InvalidParameter, u);
    });
  }, e.functions.resize = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      if (D(d, 2, 3, i, u), T(d[0])) {
        const m = p(d[1]);
        if (isNaN(m) || Ze(m) === !1) throw new h(i, c.InvalidParameter, u);
        if (m < 0) throw new h(i, c.InvalidParameter, u);
        const g = R(d[2], null), y = d[0];
        if (y.length >= m) return y.length = m, C;
        const k = y.length;
        y.length = m;
        for (let b = k; b < y.length; b++) y[b] = g;
        return C;
      }
      throw new h(i, c.InvalidParameter, u);
    });
  }, e.functions.includes = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      if (D(d, 2, 2, i, u), T(d[0])) {
        const m = d[1];
        return d[0].findIndex((g) => ke(g, m)) > -1;
      }
      if (_(d[0])) {
        const m = d[1];
        return d[0].toArray().findIndex((g) => ke(g, m)) > -1;
      }
      throw new h(i, c.InvalidParameter, u);
    });
  }, e.functions.slice = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      if (D(d, 1, 3, i, u), T(d[0])) {
        const m = p(R(d[1], 0)), g = p(R(d[2], d[0].length));
        if (isNaN(m) || Ze(m) === !1) throw new h(i, c.InvalidParameter, u);
        if (isNaN(g) || Ze(g) === !1) throw new h(i, c.InvalidParameter, u);
        return d[0].slice(m, g);
      }
      if (_(d[0])) {
        const m = d[0], g = p(R(d[1], 0)), y = p(R(d[2], m.length()));
        if (isNaN(g) || Ze(g) === !1) throw new h(i, c.InvalidParameter, u);
        if (isNaN(y) || Ze(y) === !1) throw new h(i, c.InvalidParameter, u);
        return m.toArray().slice(g, y);
      }
      throw new h(i, c.InvalidParameter, u);
    });
  }, e.functions.splice = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      const m = [];
      for (let g = 0; g < d.length; g++) T(d[g]) ? m.push(...d[g]) : _(d[g]) ? m.push(...d[g].toArray()) : m.push(d[g]);
      return m;
    });
  }, e.functions.top = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      if (D(d, 2, 2, i, u), T(d[0])) return p(d[1]) >= d[0].length ? d[0].slice(0) : d[0].slice(0, p(d[1]));
      if (_(d[0])) return p(d[1]) >= d[0].length() ? d[0].slice(0) : d[0].slice(0, p(d[1]));
      throw new h(i, c.InvalidParameter, u);
    });
  }, e.functions.first = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => (D(d, 1, 1, i, u), T(d[0]) ? d[0].length === 0 ? null : d[0][0] : _(d[0]) ? d[0].length() === 0 ? null : d[0].get(0) : null));
  }, e.mode === "sync" && (e.functions.sort = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => s(i, f, d, !1));
  }, e.functions.any = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      D(d, 2, 2, i, f);
      const m = d[1].createFunction(i), g = t(d[0], i, f);
      for (const y of g) {
        const k = m(y);
        if (J(k) && k === !0) return !0;
      }
      return !1;
    });
  }, e.functions.all = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      D(d, 2, 2, i, f);
      const m = d[1].createFunction(i), g = t(d[0], i, f);
      for (const y of g)
        if (m(y) !== !0) return !1;
      return !0;
    });
  }, e.functions.none = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      D(d, 2, 2, i, f);
      const m = d[1].createFunction(i), g = t(d[0], i, f);
      for (const y of g)
        if (m(y) === !0) return !1;
      return !0;
    });
  }, e.functions.reduce = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      D(d, 2, 3, i, f);
      const m = d[1].createFunction(i), g = t(d[0], i, f);
      return d.length === 2 ? g.length === 0 ? null : g.reduce((y, k) => {
        const b = m(y, k);
        return y = b !== void 0 && b !== C ? b : null;
      }) : g.reduce((y, k) => {
        const b = m(y, k);
        return y = b !== void 0 && b !== C ? b : null;
      }, d[2]);
    });
  }, e.functions.map = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      D(d, 2, 2, i, f);
      const m = d[1].createFunction(i), g = t(d[0], i, f), y = [];
      for (const k of g) {
        const b = m(k);
        b !== void 0 && b !== C ? y.push(b) : y.push(null);
      }
      return y;
    });
  }, e.functions.filter = function(i, u) {
    return e.standardFunction(i, u, (l, f, d) => {
      D(d, 2, 2, i, f);
      const m = d[1].createFunction(i), g = t(d[0], i, f), y = [];
      for (const k of g)
        m(k) === !0 && y.push(k);
      return y;
    });
  }), e.mode === "async" && (e.functions.sort = function(i, u) {
    return e.standardFunctionAsync(i, u, async (l, f, d) => s(i, f, d, !0));
  }, e.functions.any = function(i, u) {
    return e.standardFunctionAsync(i, u, async (l, f, d) => {
      D(d, 2, 2, i, f);
      const m = d[1].createFunction(i), g = t(d[0], i, f);
      for (const y of g) {
        const k = await m(y);
        let b = null;
        if (b = Xe(b) ? await k : k, J(b) && b === !0) return !0;
      }
      return !1;
    });
  }, e.functions.all = function(i, u) {
    return e.standardFunctionAsync(i, u, async (l, f, d) => {
      D(d, 2, 2, i, f);
      const m = d[1].createFunction(i), g = t(d[0], i, f);
      for (const y of g) {
        const k = await m(y);
        let b = null;
        if (b = Xe(b) ? await k : k, b !== !0) return !1;
      }
      return !0;
    });
  }, e.functions.none = function(i, u) {
    return e.standardFunctionAsync(i, u, async (l, f, d) => {
      D(d, 2, 2, i, f);
      const m = d[1].createFunction(i), g = t(d[0], i, f);
      for (const y of g) {
        const k = await m(y);
        let b = null;
        if (b = Xe(b) ? await k : k, b === !0) return !1;
      }
      return !0;
    });
  }, e.functions.filter = function(i, u) {
    return e.standardFunctionAsync(i, u, async (l, f, d) => {
      D(d, 2, 2, i, f);
      const m = d[1].createFunction(i), g = t(d[0], i, f), y = [];
      for (const k of g) {
        const b = await m(k);
        let U = null;
        U = Xe(U) ? await b : b, U === !0 && y.push(k);
      }
      return y;
    });
  }, e.functions.reduce = function(i, u) {
    return e.standardFunctionAsync(i, u, async (l, f, d) => {
      D(d, 2, 3, i, f);
      const m = d[1].createFunction(i), g = t(d[0], i, f);
      let y;
      if (d.length > 2) {
        const k = R(d[2], null);
        y = g.reduce(async (b, U) => {
          let ae = await b;
          return ae !== void 0 && ae !== C || (ae = null), m(ae, U);
        }, Promise.resolve(k));
      } else {
        if (g.length === 0) return null;
        y = g.reduce(async (k, b, U) => {
          if (U <= 1) return m(k, b);
          let ae = await k;
          return ae !== void 0 && ae !== C || (ae = null), m(ae, b);
        });
      }
      return y.then((k) => k !== void 0 && k !== C ? k : null);
    });
  }, e.functions.map = function(i, u) {
    return e.standardFunctionAsync(i, u, async (l, f, d) => {
      D(d, 2, 2, i, f);
      const m = d[1].createFunction(i), g = t(d[0], i, f), y = [];
      for (const k of g) {
        const b = await m(k);
        let U = null;
        U = Xe(U) ? await b : b, U !== void 0 && U !== C ? y.push(U) : y.push(null);
      }
      return y;
    });
  });
}
const Hn = Object.freeze(Object.defineProperty({ __proto__: null, registerFunctions: os }, Symbol.toStringTag, { value: "Module" }));
function us(e, t, n) {
  return e + (ls(n) ? hs : cs)[t];
}
function ls(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
const cs = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], hs = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Re(e) {
  return e === null ? e : e.isValid === !1 ? null : e;
}
function Mt(e, t) {
  return e === "" || e.toLowerCase().trim() === "default" ? M(t) : e === "z" || e === "Z" ? "UTC" : e;
}
function Ue(e, t) {
  return O(e) ? e.toArcadeDate() : ue(e, M(t));
}
function Zi(e, t) {
  e.today = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 0, 0, n, r);
      const i = /* @__PURE__ */ new Date();
      return i.setHours(0, 0, 0, 0), P.dateJSAndZoneToArcadeDate(i, M(n));
    });
  }, e.time = function(n, r) {
    return t(n, r, (a, o, s) => {
      switch (D(s, 0, 4, n, r), s.length) {
        case 0: {
          const i = P.nowToArcadeDate(M(n));
          return new De(i.hour, i.minute, i.second, i.millisecond);
        }
        case 1: {
          if (G(s[0])) return s[0].clone();
          if (H(s[0])) return new De(s[0].hour, s[0].minute, s[0].second, s[0].millisecond);
          if (O(s[0])) return new De(0, 0, 0, 0);
          if (x(s[0])) return De.fromString(s[0]);
          const i = p(s[0]);
          return isNaN(i) === !1 ? De.fromMilliseconds(i) : null;
        }
        case 2:
          return x(s[0]) && x(s[1]) ? De.fromString(s[0], s[1]) : De.fromParts(p(s[0]), p(s[1]), 0, 0);
        case 3:
          return De.fromParts(p(s[0]), p(s[1]), p(s[2]), 0);
        case 4:
          return De.fromParts(p(s[0]), p(s[1]), p(s[2]), p(s[3]));
      }
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.dateonly = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 0, 3, n, r), s.length === 3) return me.fromParts(p(s[0]), p(s[1]) + 1, p(s[2]));
      if (s.length === 2) {
        const i = F(s[1]);
        return i === "" ? null : i === "X" ? me.fromSeconds(p(s[0])) : i === "x" ? me.fromMilliseconds(p(s[0])) : me.fromString(F(s[0]), i);
      }
      if (s.length === 1) {
        if (x(s[0])) {
          if (s[0].replaceAll(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") === "") return null;
          if (/^[0-9][0-9][0-9][0-9]$/.test(s[0]) === !0) return me.fromString(s[0] + "-01-01");
        }
        if (O(s[0])) return s[0].clone();
        if (H(s[0])) return me.fromParts(s[0].year, s[0].monthJS + 1, s[0].day);
        const i = p(s[0]);
        return isNaN(i) === !1 ? me.fromMilliseconds(i) : x(s[0]) ? me.fromString(s[0]) : null;
      }
      if (s.length === 0) {
        const i = P.nowToArcadeDate(M(n));
        return i.isValid === !1 ? null : me.fromParts(i.year, i.monthJS + 1, i.day);
      }
      return null;
    });
  }, e.changetimezone = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 2, 2, n, r), s[0] === null) return null;
      if (O(s[0])) throw new h(n, c.CannotChangeTimeZoneDateOnly, r);
      if (O(s[0])) throw new h(n, c.CannotChangeTimeZoneTime, r);
      const i = ue(s[0], M(n));
      if (i === null) throw new h(n, c.InvalidParameter, r);
      const u = _t(Mt(F(s[1]), n), !1);
      if (u === null) return null;
      const l = P.arcadeDateAndZoneToArcadeDate(i, u);
      return l.isValid === !1 ? null : l;
    });
  }, e.timezone = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 2, n, r), G(s[0]) || O(s[0])) return "Unknown";
      const i = ue(s[0], M(n));
      if (i === null) return null;
      const u = i.timeZone;
      return u === "system" ? P.systemTimeZoneCanonicalName : u.toLowerCase() === "utc" ? "UTC" : u.toLowerCase() === "unknown" ? "Unknown" : u;
    });
  }, e.timezoneoffset = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = ue(s[0], M(n));
      return i === null ? null : 60 * i.timeZoneOffset * 1e3;
    });
  }, e.now = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 0, 0, n, r);
      const i = P.nowToArcadeDate(M(n));
      return i.isValid === !1 ? null : i;
    });
  }, e.timestamp = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 0, 0, n, r);
      const i = P.nowUTCToArcadeDate();
      return i.isValid === !1 ? null : i;
    });
  }, e.toutc = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = ue(s[0], M(n));
      return i === null ? null : i.toUTC();
    });
  }, e.tolocal = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = ue(s[0], M(n));
      return i === null ? null : i.toLocal();
    });
  }, e.day = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = Ue(s[0], M(n));
      return i === null ? NaN : i.day;
    });
  }, e.month = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = Ue(s[0], M(n));
      return i === null ? NaN : i.monthJS;
    });
  }, e.year = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = Ue(s[0], M(n));
      return i === null ? NaN : i.year;
    });
  }, e.hour = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 1, n, r), G(s[0])) return s[0].hour;
      const i = ue(s[0], M(n));
      return i === null ? NaN : i.hour;
    });
  }, e.second = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 1, n, r), G(s[0])) return s[0].second;
      const i = ue(s[0], M(n));
      return i === null ? NaN : i.second;
    });
  }, e.millisecond = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 1, n, r), G(s[0])) return s[0].millisecond;
      const i = ue(s[0], M(n));
      return i === null ? NaN : i.millisecond;
    });
  }, e.minute = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 1, n, r), G(s[0])) return s[0].minute;
      const i = ue(s[0], M(n));
      return i === null ? NaN : i.minute;
    });
  }, e.week = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 2, n, r);
      const i = Ue(s[0], M(n));
      if (i === null) return NaN;
      const u = p(R(s[1], 0));
      if (u < 0 || u > 6) throw new h(n, c.InvalidParameter, r);
      const l = i.day, f = i.monthJS, d = i.year, m = i.dayOfWeekJS, g = us(l, f, d) - 1, y = Math.floor(g / 7);
      return m - u + (m - u < 0 ? 7 : 0) < g - 7 * y ? y + 1 : y;
    });
  }, e.weekday = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = Ue(s[0], M(n));
      return i === null ? NaN : i.dayOfWeekJS;
    });
  }, e.isoweekday = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = Ue(s[0], M(n));
      return i === null ? NaN : i.dayOfWeekISO;
    });
  }, e.isomonth = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = Ue(s[0], M(n));
      return i === null ? NaN : i.monthISO;
    });
  }, e.isoweek = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = Ue(s[0], M(n));
      return i === null ? NaN : i.weekISO;
    });
  }, e.isoyear = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = Ue(s[0], M(n));
      return i === null ? NaN : i.yearISO;
    });
  }, e.date = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 0, 8, n, r), s.length === 3) {
        if (O(s[0]) && G(s[1]) && x(s[2])) {
          const i = _t(Mt(F(s[2]) ?? "unknown", n), !1);
          return i === null ? null : Re(P.fromParts(s[0].year, s[0].month, s[0].day, s[1].hour, s[1].minute, s[1].second, s[1].millisecond, i));
        }
        return Re(P.fromParts(p(s[0]), p(s[1]) + 1, p(s[2]), 0, 0, 0, 0, M(n)));
      }
      if (s.length === 4) return Re(P.fromParts(p(s[0]), p(s[1]) + 1, p(s[2]), p(s[3]), 0, 0, 0, M(n)));
      if (s.length === 5) return Re(P.fromParts(p(s[0]), p(s[1]) + 1, p(s[2]), p(s[3]), p(s[4]), 0, 0, M(n)));
      if (s.length === 6) return Re(P.fromParts(p(s[0]), p(s[1]) + 1, p(s[2]), p(s[3]), p(s[4]), p(s[5]), 0, M(n)));
      if (s.length === 7) return Re(P.fromParts(p(s[0]), p(s[1]) + 1, p(s[2]), p(s[3]), p(s[4]), p(s[5]), p(s[6]), M(n)));
      if (s.length === 8) {
        const i = _t(Mt(F(s[7]) ?? "unknown", n), !1);
        return i === null ? null : Re(P.fromParts(p(s[0]), p(s[1]) + 1, p(s[2]), p(s[3]), p(s[4]), p(s[5]), p(s[6]), i));
      }
      if (s.length === 2) {
        if (O(s[0]) && x(s[1])) {
          const l = _t(Mt(F(s[1]) ?? "unknown", n), !1);
          return l === null ? null : Re(P.fromParts(s[0].year, s[0].month, s[0].day, 0, 0, 0, 0, l));
        }
        if (O(s[0]) && G(s[1])) return Re(P.fromParts(s[0].year, s[0].month, s[0].day, s[1].hour, s[1].minute, s[1].second, s[1].millisecond, "unknown"));
        let i, u = F(s[1]);
        return u === "" ? null : (u = pr(u, !0), i = u === "X" ? at.fromSeconds(p(s[0])) : u === "x" ? at.fromMillis(p(s[0])) : at.fromFormat(F(s[0]), u, { locale: or(), numberingSystem: "latn" }), i.isValid ? P.dateTimeToArcadeDate(i) : null);
      }
      if (s.length === 1) {
        if (O(s[0])) return Re(P.fromParts(s[0].year, s[0].month, s[0].day, 0, 0, 0, 0, "unknown"));
        if (x(s[0])) {
          if (s[0].replaceAll(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") === "") return null;
          if (/^[0-9][0-9][0-9][0-9]$/.test(s[0]) === !0) return ue(s[0] + "-01-01", M(n));
        }
        const i = p(s[0]);
        if (isNaN(i) === !1) {
          const u = at.fromMillis(i);
          return u.isValid ? P.dateTimeAndZoneToArcadeDate(u, M(n)) : null;
        }
        return ue(s[0], M(n));
      }
      return s.length === 0 ? P.nowToArcadeDate(M(n)) : null;
    });
  }, e.datediff = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 2, 4, n, r), G(s[0])) return G(s[1]) ? s[0].difference(s[1], F(s[2])) : NaN;
      if (G(s[1])) return NaN;
      if (O(s[0])) return O(s[1]) ? s[0].difference(s[1], F(s[2])) : NaN;
      if (O(s[1])) return NaN;
      let i = ue(s[0], M(n)), u = ue(s[1], M(n));
      if (i === null || u === null) return NaN;
      let l = R(s[3], "");
      switch (l !== "" && l !== null ? (l = Mt(F(l), n), i = P.arcadeDateAndZoneToArcadeDate(i, l), u = P.arcadeDateAndZoneToArcadeDate(u, l)) : i.timeZone !== u.timeZone && (i.isUnknownTimeZone ? i = P.arcadeDateAndZoneToArcadeDate(i, u.timeZone) : u = (u.isUnknownTimeZone, P.arcadeDateAndZoneToArcadeDate(u, i.timeZone))), F(s[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          return i.diff(u, "days");
        case "months":
        case "month":
          return i.diff(u, "months");
        case "minutes":
        case "minute":
        case "m":
          return s[2] === "M" ? i.diff(u, "months") : i.diff(u, "minutes");
        case "seconds":
        case "second":
        case "s":
          return i.diff(u, "seconds");
        case "milliseconds":
        case "millisecond":
        case "ms":
        default:
          return i.diff(u);
        case "hours":
        case "hour":
        case "h":
          return i.diff(u, "hours");
        case "years":
        case "year":
        case "y":
          return i.diff(u, "years");
      }
    });
  }, e.dateadd = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 2, 3, n, r);
      let i = p(s[1]);
      if (isNaN(i) || i === 1 / 0 || i === -1 / 0) return G(s[0]) || O(s[0]) ? s[0].clone() : ue(s[0], M(n));
      let u = "milliseconds";
      switch (F(s[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          u = "days", i = O(s[0]) ? i : Gn(i);
          break;
        case "months":
        case "month":
          u = "months", i = O(s[0]) ? i : Gn(i);
          break;
        case "minutes":
        case "minute":
        case "m":
          u = s[2] === "M" ? "months" : "minutes";
          break;
        case "seconds":
        case "second":
        case "s":
          u = "seconds";
          break;
        case "milliseconds":
        case "millisecond":
        case "ms":
          u = "milliseconds";
          break;
        case "hours":
        case "hour":
        case "h":
          u = "hours";
          break;
        case "years":
        case "year":
        case "y":
          u = "years";
      }
      if (G(s[0]) || O(s[0])) return s[0].plus(u, i);
      const l = ue(s[0], M(n));
      return l === null ? null : l.plus({ [u]: i });
    });
  };
}
function we(e, t, n) {
  return Math.sqrt((e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] !== void 0 && t[2] !== void 0 ? (e[2] * n - t[2] * n) ** 2 : 0));
}
function Gi(e, t, n) {
  return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] !== void 0 && t[2] !== void 0 ? (e[2] * n - t[2] * n) ** 2 : 0);
}
const Rt = [];
for (const e of [[9002, 56146130, 6131, 6132, 8050, 8051, 8228], [9003, 5702, 6358, 6359, 6360, 8052, 8053], [9095, 5754]]) {
  const t = e[0];
  for (let n = 1; n < e.length; n++) Rt[e[n]] = t;
}
const Ut = [];
function Tt(e) {
  return e.vcsWkid && Rt[e.vcsWkid] !== void 0 ? Ut[Rt[e.vcsWkid]] : e.latestVcsWkid && Rt[e.latestVcsWkid] !== void 0 ? Ut[Rt[e.latestVcsWkid]] : 1;
}
function Lr(e, t, n) {
  const r = { x: 0, y: 0 };
  t && (r.z = 0), n && (r.m = 0);
  let a = 0, o = e[0];
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (ps(i, o) === !1) {
      const u = je(o, i, t), l = ds(o, i, t, n);
      l.x *= u, l.y *= u, r.x += l.x, r.y += l.y, t && (l.z *= u, r.z += l.z), n && (l.m *= u, r.m += l.m), a += u, o = i;
    }
  }
  return a > 0 ? (r.x /= a, r.y /= a, t && (r.z /= a), n && (r.m /= a)) : (r.x = e[0][0], r.y = e[0][1], t && (r.z = e[0][2]), n && t ? r.m = e[0][3] : n && (r.m = e[0][2])), r;
}
function ds(e, t, n, r) {
  const a = { x: (e[0] + t[0]) / 2, y: (e[1] + t[1]) / 2 };
  return n && (a.z = (e[2] + t[2]) / 2), n && r ? a.m = (e[3] + t[3]) / 2 : r && (a.m = (e[2] + t[2]) / 2), a;
}
function fs(e, t) {
  if (e.length <= 1) return 0;
  let n = 0;
  for (let r = 1; r < e.length; r++) n += je(e[r - 1], e[r], t);
  return n;
}
function je(e, t, n) {
  const r = t[0] - e[0], a = t[1] - e[1];
  if (n) {
    const o = t[2] - t[2];
    return Math.sqrt(r * r + a * a + o * o);
  }
  return Math.sqrt(r * r + a * a);
}
function ji(e, t, n) {
  const r = t[0] - e[0], a = t[1] - e[1];
  return r * r + a * a;
}
function ps(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function ms(e) {
  const t = { x: 0, y: 0, spatialReference: e.spatialReference.toJSON() }, n = { x: 0, y: 0, spatialReference: e.spatialReference.toJSON() };
  let r = 0, a = 0;
  for (let o = 0; o < e.paths.length; o++) {
    if (e.paths[o].length === 0) continue;
    const s = fs(e.paths[o], e.hasZ === !0);
    if (s === 0) {
      const i = Lr(e.paths[o], e.hasZ === !0, e.hasM === !0);
      t.x += i.x, t.y += i.y, e.hasZ === !0 && (t.z += i.z), e.hasM === !0 && (t.m += i.m), ++r;
    } else {
      const i = Lr(e.paths[o], e.hasZ === !0, e.hasM === !0);
      n.x += i.x * s, n.y += i.y * s, e.hasZ === !0 && (n.z += i.z * s), e.hasM === !0 && (n.m += i.m * s), a += s;
    }
  }
  return a > 0 ? (n.x /= a, n.y /= a, e.hasZ === !0 && (n.z /= a), e.hasM === !0 && (n.m /= a), new j(n)) : r > 0 ? (t.x /= r, t.y /= r, e.hasZ === !0 && (n.z /= r), e.hasM === !0 && (t.m /= r), new j(t)) : null;
}
function Ds(e) {
  if (e.points.length === 0) return null;
  let t = 0, n = 0, r = 0, a = 0;
  for (let s = 0; s < e.points.length; s++) {
    const i = e.getPoint(s);
    i.hasZ === !0 && (r += i.z), i.hasM === !0 && (a += i.m), t += i.x, n += i.y, a += i.m;
  }
  const o = { x: t / e.points.length, y: n / e.points.length, spatialReference: null };
  return o.spatialReference = e.spatialReference.toJSON(), e.hasZ === !0 && (o.z = r / e.points.length), e.hasM === !0 && (o.m = a / e.points.length), new j(o);
}
function gs(e, t) {
  return e.x * t.x + e.y * t.y;
}
function ys(e, t) {
  return e.x * t.y - t.x * e.y;
}
function Fn(e, t, n = 0) {
  for (; e < n; ) e += t;
  const r = n + t;
  for (; e >= r; ) e -= t;
  return e;
}
function Ji(e, t) {
  return Math.atan2(t.y - e.y, t.x - e.x);
}
function ws(e, t) {
  return Fn(Ji(e, t), 2 * Math.PI) * (180 / Math.PI);
}
function xs(e, t) {
  return Fn(Math.PI / 2 - Ji(e, t), 2 * Math.PI) * (180 / Math.PI);
}
function qi(e, t, n) {
  const r = { x: e.x - t.x, y: e.y - t.y }, a = { x: n.x - t.x, y: n.y - t.y };
  return Math.atan2(ys(r, a), gs(r, a));
}
function Fs(e, t, n) {
  return mi(Fn(qi(e, t, n), 2 * Math.PI));
}
function Cs(e, t, n) {
  return mi(Fn(-1 * qi(e, t, n), 2 * Math.PI));
}
Ut[9002] = 0.3048, Ut[9003] = 0.3048006096012192, Ut[9095] = 0.3048007491;
const oe = [0, 0];
function Ur(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    for (let a = 0; a < n.length - 1; a++) {
      const o = n[a], s = n[a + 1];
      for (let i = t + 1; i < e.length; i++) for (let u = 0; u < e[i].length - 1; u++) {
        const l = e[i][u], f = e[i][u + 1];
        if (Ir(o, s, l, f, oe) && !(oe[0] === o[0] && oe[1] === o[1] || oe[0] === l[0] && oe[1] === l[1] || oe[0] === s[0] && oe[1] === s[1] || oe[0] === f[0] && oe[1] === f[1])) return !0;
      }
    }
    const r = n.length;
    if (!(r < 3)) for (let a = 0; a <= r - 2; a++) {
      const o = n[a], s = n[a + 1];
      for (let i = a + 2; i <= r - 2; i++) {
        const u = n[i], l = n[i + 1];
        if (Ir(o, s, u, l, oe) && !(oe[0] === o[0] && oe[1] === o[1] || oe[0] === u[0] && oe[1] === u[1] || oe[0] === s[0] && oe[1] === s[1] || oe[0] === l[0] && oe[1] === l[1])) return !0;
      }
    }
  }
  return !1;
}
function As(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function bs(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Es(e) {
  return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
}
function vs(e, t, n) {
  const r = [n[0] - t[0], n[1] - t[1], n[2] - t[2]], a = As(bs(r, [e[0] - t[0], e[1] - t[1], e[2] - t[2]]) / Es(r), 0, 1);
  return [t[0] + (n[0] - t[0]) * a, t[1] + (n[1] - t[1]) * a, t[2] + (n[2] - t[2]) * a];
}
function Ss(e, t, n) {
  let r = 0;
  const a = n[0] - t[0], o = n[1] - t[1], s = a * a + o * o;
  return s === 0 ? r = 0.5 : (r = ((e[0] - t[0]) * a + (e[1] - t[1]) * o) / s, r < 0 ? r = 0 : r > 1 && (r = 1)), r <= 0.5 ? [t[0] + (n[0] - t[0]) * r, t[1] + (n[1] - t[1]) * r] : [n[0] - (n[0] - t[0]) * (1 - r), n[1] - (n[1] - t[1]) * (1 - r)];
}
function Vi(e, t) {
  e.ringisclockwise = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      let i = [];
      if (s[0] === null) return !1;
      if (T(s[0])) for (const u of s[0]) {
        if (!(u instanceof j)) throw new h(n, c.InvalidParameter, r);
        i.push(u.hasZ ? u.hasM ? [u.x, u.y, u.z, u.m] : [u.x, u.y, u.z] : [u.x, u.y]);
      }
      else if (s[0] instanceof ct) i = s[0]._elements;
      else {
        if (!_(s[0])) throw new h(n, c.InvalidParameter, r);
        for (const u of s[0].toArray()) {
          if (!(u instanceof j)) throw new h(n, c.InvalidParameter, r);
          i.push(u.hasZ ? u.hasM ? [u.x, u.y, u.z, u.m] : [u.x, u.y, u.z] : [u.x, u.y]);
        }
      }
      return !(i.length < 3) && fi(i);
    });
  }, e.polygon = function(n, r) {
    return t(n, r, (a, o, s) => {
      let i;
      if (D(s, 1, 1, n, r), s[0] instanceof B) {
        const u = ne(ee.parseGeometryFromDictionary(s[0], n.spatialReference), n.spatialReference);
        if (!(u instanceof ie)) throw new h(n, c.InvalidParameter, r);
        i = u;
      } else if (s[0] instanceof ie) i = le(s[0].toJSON());
      else {
        const u = JSON.parse(s[0]);
        u && !u.spatialReference && (u.spatialReference = n.spatialReference), i = ne(new ie(u), n.spatialReference);
      }
      if (i !== null && i.spatialReference.equals(n.spatialReference) === !1) throw new h(n, c.WrongSpatialReference, r);
      return rt(i);
    });
  }, e.polyline = function(n, r) {
    return t(n, r, (a, o, s) => {
      let i;
      if (D(s, 1, 1, n, r), s[0] instanceof B) {
        const u = ne(ee.parseGeometryFromDictionary(s[0], n.spatialReference), n.spatialReference);
        if (!(u instanceof te)) throw new h(n, c.InvalidParameter, r);
        i = u;
      } else if (s[0] instanceof te) i = le(s[0].toJSON());
      else {
        const u = JSON.parse(s[0]);
        u && !u.spatialReference && (u.spatialReference = n.spatialReference), i = ne(new te(u), n.spatialReference);
      }
      if (i !== null && i.spatialReference.equals(n.spatialReference) === !1) throw new h(n, c.WrongSpatialReference, r);
      return rt(i);
    });
  }, e.point = function(n, r) {
    return t(n, r, (a, o, s) => {
      let i;
      if (D(s, 1, 1, n, r), s[0] instanceof B) {
        const u = ne(ee.parseGeometryFromDictionary(s[0], n.spatialReference), n.spatialReference);
        if (!(u instanceof j)) throw new h(n, c.InvalidParameter, r);
        i = u;
      } else if (s[0] instanceof j) i = le(s[0].toJSON());
      else {
        const u = JSON.parse(s[0]);
        u && !u.spatialReference && (u.spatialReference = n.spatialReference), i = ne(new j(u), n.spatialReference);
      }
      if (i !== null && i.spatialReference.equals(n.spatialReference) === !1) throw new h(n, c.WrongSpatialReference, r);
      return rt(i);
    });
  }, e.multipoint = function(n, r) {
    return t(n, r, (a, o, s) => {
      let i;
      if (D(s, 1, 1, n, r), s[0] instanceof B) {
        const u = ne(ee.parseGeometryFromDictionary(s[0], n.spatialReference), n.spatialReference);
        if (!(u instanceof Se)) throw new h(n, c.InvalidParameter, r);
        i = u;
      } else if (s[0] instanceof Se) i = le(s[0].toJSON());
      else {
        const u = JSON.parse(s[0]);
        u && !u.spatialReference && (u.spatialReference = n.spatialReference), i = ne(new Se(u), n.spatialReference);
      }
      if (i !== null && i.spatialReference.equals(n.spatialReference) === !1) throw new h(n, c.WrongSpatialReference, r);
      return rt(i);
    });
  }, e.extent = function(n, r) {
    return t(n, r, (a, o, s) => {
      s = Z(s), D(s, 1, 1, n, r);
      let i = null;
      if (s[0] instanceof B) i = ne(ee.parseGeometryFromDictionary(s[0], n.spatialReference), n.spatialReference);
      else if (s[0] instanceof j) {
        const u = { xmin: s[0].x, ymin: s[0].y, xmax: s[0].x, ymax: s[0].y, spatialReference: s[0].spatialReference.toJSON() }, l = s[0];
        l.hasZ ? (u.zmin = l.z, u.zmax = l.z) : l.hasM && (u.mmin = l.m, u.mmax = l.m), i = le(u);
      } else if (s[0] instanceof ie) i = le(s[0].extent?.toJSON());
      else if (s[0] instanceof te) i = le(s[0].extent?.toJSON());
      else if (s[0] instanceof Se) i = le(s[0].extent?.toJSON());
      else if (s[0] instanceof ye) i = le(s[0].toJSON());
      else {
        const u = JSON.parse(s[0]);
        u && !u.spatialReference && (u.spatialReference = n.spatialReference), i = ne(new ye(u), n.spatialReference);
      }
      if (i !== null && i.spatialReference.equals(n.spatialReference) === !1) throw new h(n, c.WrongSpatialReference, r);
      return rt(i);
    });
  }, e.geometry = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      let i = null;
      if (s[0] === null) return null;
      if (X(s[0])) i = ne(s[0].geometry(), n.spatialReference);
      else if (s[0] instanceof B) i = ne(ee.parseGeometryFromDictionary(s[0], n.spatialReference), n.spatialReference);
      else {
        const u = JSON.parse(s[0]);
        u && !u.spatialReference && (u.spatialReference = n.spatialReference), i = ne(le(u), n.spatialReference);
      }
      if (i !== null && i.spatialReference.equals(n.spatialReference) === !1) throw new h(n, c.WrongSpatialReference, r);
      return rt(i);
    });
  }, e.setgeometry = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 2, 2, n, r), !X(s[0])) throw new h(n, c.InvalidParameter, r);
      if (s[0].immutable === !0) throw new h(n, c.Immutable, r);
      if (!(s[1] instanceof N || s[1] === null)) throw new h(n, c.InvalidParameter, r);
      return s[0]._geometry = s[1], C;
    });
  }, e.feature = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (s.length === 0) throw new h(n, c.WrongNumberOfParameters, r);
      let i;
      if (s.length === 1) if (x(s[0])) i = ee.fromJson(JSON.parse(s[0]), n.timeZone);
      else if (X(s[0])) i = ee.createFromArcadeFeature(s[0]);
      else if (s[0] instanceof N) i = ee.createFromGraphicLikeObject(s[0], null, null, n.timeZone);
      else {
        if (!(s[0] instanceof B)) throw new h(n, c.InvalidParameter, r);
        {
          let u = s[0].hasField("geometry") ? s[0].field("geometry") : null, l = s[0].hasField("attributes") ? s[0].field("attributes") : null;
          u !== null && u instanceof B && (u = ee.parseGeometryFromDictionary(u, n.spatialReference)), l !== null && (l = ee.parseAttributesFromDictionary(l)), i = ee.createFromGraphicLikeObject(u, l, null, n.timeZone);
        }
      }
      else if (s.length === 2) {
        let u = null, l = null;
        if (s[0] !== null) if (s[0] instanceof N) u = s[0];
        else {
          if (!(u instanceof B)) throw new h(n, c.InvalidParameter, r);
          u = ee.parseGeometryFromDictionary(s[0], n.spatialReference);
        }
        if (s[1] !== null) {
          if (!(s[1] instanceof B)) throw new h(n, c.InvalidParameter, r);
          l = ee.parseAttributesFromDictionary(s[1]);
        }
        i = ee.createFromGraphicLikeObject(u, l, null, n.timeZone);
      } else {
        let u = null;
        const l = {};
        if (s[0] !== null) if (s[0] instanceof N) u = s[0];
        else {
          if (!(u instanceof B)) throw new h(n, c.InvalidParameter, r);
          u = ee.parseGeometryFromDictionary(s[0], n.spatialReference);
        }
        for (let f = 1; f < s.length; f += 2) {
          const d = F(s[f]), m = s[f + 1];
          if (!(m == null || x(m) || isNaN(m) || H(m) || L(m) || G(m) || O(m) || J(m))) throw new h(n, c.InvalidParameter, r);
          if (Q(m) || Ve(m) === !1) throw new h(n, c.InvalidParameter, r);
          l[d] = m === C ? null : m;
        }
        i = ee.createFromGraphicLikeObject(u, l, null, n.timeZone);
      }
      return i._geometry = ne(i.geometry(), n.spatialReference), i.immutable = !1, i;
    });
  }, e.dictionary = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (s.length === 0 || s.length === 1 && s[0] === null) {
        const l = new B();
        return l.immutable = !1, l;
      }
      if (s.length === 1 && x(s[0])) try {
        const l = JSON.parse(s[0]), f = B.convertObjectToArcadeDictionary(l, M(n), !1);
        return f.immutable = !1, f;
      } catch {
        throw new h(n, c.InvalidParameter, r);
      }
      if (s.length === 1 && s[0] instanceof N) try {
        const l = s[0].toJSON();
        l.hasZ = s[0].hasZ === !0, l.hasM = s[0].hasM === !0;
        const f = B.convertObjectToArcadeDictionary(l, M(n), !1);
        return f.immutable = !1, f;
      } catch {
        throw new h(n, c.InvalidParameter, r);
      }
      if (s.length === 1 && X(s[0])) try {
        const l = new B();
        l.immutable = !1, l.setField("geometry", s[0].geometry());
        const f = new B();
        f.immutable = !1, l.setField("attributes", f);
        for (const d of s[0].keys()) f.setField(d, s[0].field(d));
        return l;
      } catch {
        throw new h(n, c.InvalidParameter, r);
      }
      if (s.length === 1 && s[0] instanceof B) try {
        const l = new B();
        l.immutable = !1;
        for (const f of s[0].keys()) l.setField(f, s[0].field(f));
        return l;
      } catch {
        throw new h(n, c.InvalidParameter, r);
      }
      if (s.length === 2 && s[0] instanceof B && J(s[1])) try {
        if (s[1] !== !0) {
          const l = new B();
          l.immutable = !1;
          for (const f of s[0].keys()) l.setField(f, s[0].field(f));
          return l;
        }
        return s[0].deepClone();
      } catch {
        throw new h(n, c.InvalidParameter, r);
      }
      if (s.length % 2 != 0) throw new h(n, c.WrongNumberOfParameters, r);
      const i = {};
      for (let l = 0; l < s.length; l += 2) {
        const f = F(s[l]), d = s[l + 1];
        if (!(d == null || x(d) || isNaN(d) || H(d) || L(d) || J(d) || O(d) || G(d) || T(d) || _(d))) throw new h(n, c.InvalidParameter, r);
        if (Q(d)) throw new h(n, c.InvalidParameter, r);
        i[f] = d === C ? null : d;
      }
      const u = new B(i);
      return u.immutable = !1, u;
    });
  }, e.haskey = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 2, 2, n, r);
      const i = F(s[1]);
      if (X(s[0]) || s[0] instanceof B) return s[0].hasField(i);
      if (s[0] instanceof N) {
        const u = Ct(s[0], i, null, null, 2);
        return !u || u.keystate !== "notfound";
      }
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.hasvalue = function(n, r) {
    return t(n, r, (a, o, s) => (D(s, 2, 2, n, r), yr(s[0], s[1]) != null));
  }, e.indexof = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 2, 2, n, r);
      const i = s[1];
      if (T(s[0])) {
        for (let u = 0; u < s[0].length; u++) if (ke(i, s[0][u])) return u;
        return -1;
      }
      if (_(s[0])) {
        const u = s[0].length();
        for (let l = 0; l < u; l++) if (ke(i, s[0].get(l))) return l;
        return -1;
      }
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.angle = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (s = Z(s), D(s, 2, 3, n, r), !(s[0] instanceof j)) throw new h(n, c.InvalidParameter, r);
      if (!(s[1] instanceof j)) throw new h(n, c.InvalidParameter, r);
      if (s.length > 2 && !(s[2] instanceof j)) throw new h(n, c.InvalidParameter, r);
      return s.length === 2 ? ws(s[0], s[1]) : Fs(s[0], s[1], s[2]);
    });
  }, e.bearing = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (s = Z(s), D(s, 2, 3, n, r), !(s[0] instanceof j)) throw new h(n, c.InvalidParameter, r);
      if (!(s[1] instanceof j)) throw new h(n, c.InvalidParameter, r);
      if (s.length > 2 && !(s[2] instanceof j)) throw new h(n, c.InvalidParameter, r);
      return s.length === 2 ? xs(s[0], s[1]) : Cs(s[0], s[1], s[2]);
    });
  }, e.isselfintersecting = function(n, r) {
    return t(n, r, (a, o, s) => {
      s = Z(s), D(s, 1, 1, n, r);
      let i = s[0];
      if (i instanceof ie) return i.isSelfIntersecting;
      if (i instanceof te) return Ur(i.paths);
      if (i instanceof Se) {
        const u = i.points;
        for (let l = 0; l < u.length; l++) for (let f = 0; f < u.length; f++) if (f !== l) {
          let d = !0;
          for (let m = 0; m < u[l].length; m++) if (u[l][m] !== u[f][m]) {
            d = !1;
            break;
          }
          if (d === !0) return !0;
        }
      }
      if (T(i) || _(i)) {
        const u = Ke(i, n.spatialReference);
        return u !== null && (i = u.paths), Ur(i);
      }
      return !1;
    });
  };
}
function Hi(e, t, n) {
  const r = t[0] - e[0], a = t[1] - e[1];
  return Math.sqrt(r * r + a * a);
}
function Is(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
}
function ks(e) {
  const t = Is(e);
  return [e[0] / t, e[1] / t, e[2] / t];
}
function Wi(e, t, n, r) {
  const a = ks([t[0] - e[0], t[1] - e[1], t[2] * r - e[2] * r]);
  return [e[0] + a[0] * n, e[1] + a[1] * n, e[2] + a[2] * n];
}
function Wn(e, t, n, r) {
  return e + (t - e) / n * r;
}
function Ki(e, t, n) {
  let r = t[0] - e[0], a = t[1] - e[1];
  const o = Math.sqrt(r * r + a * a);
  return r /= o, a /= o, r *= n, a *= n, [e[0] + r, e[1] + a];
}
function Ts(e, t) {
  if (!e) return null;
  switch (e.type) {
    case "extent":
    case "multipoint":
    case "mesh":
    case "point":
      return null;
  }
  const n = e.type === "polygon" ? e.rings : e.paths;
  let r = 1;
  if ((e.spatialReference.vcsWkid || e.spatialReference.latestVcsWkid) && (r = Tt(e.spatialReference) / St(e.spatialReference)), n.length === 0 || n[0].length === 0 || e.hasM === !1) return null;
  let a = -1, o = 0;
  const s = e.hasZ ? we : Hi, i = e.hasZ ? 3 : 2, u = 2;
  for (const l of n) {
    if (a++, l.length > 0 && l[0][i] === t) return { partId: a, distanceAlong: o, coordinate: new j({ hasZ: e.hasZ, hasM: e.hasM, spatialReference: e.spatialReference, x: l[0][0], y: l[0][1], ...e.hasZ ? { z: l[0][u] } : {}, ...e.hasM ? { m: l[0][i] } : {} }), segmentId: 0 };
    let f = -1;
    for (let d = 1; d < l.length; d++) {
      const m = s(l[d - 1], l[d], r);
      f++;
      const g = l[d][i] - l[d - 1][i], y = l[d][i];
      if (y === t) return { partId: a, distanceAlong: m + o, coordinate: new j({ hasZ: e.hasZ, hasM: e.hasM, spatialReference: e.spatialReference, x: l[d][0], y: l[d][1], ...e.hasZ ? { z: l[d][u] } : {}, ...e.hasM ? { m: l[d][i] } : {} }), segmentId: f };
      if (y > t && t > l[d - 1][i]) {
        const k = (t - l[d - 1][i]) / g * m;
        let b = e.hasZ ? Wi(l[d - 1], l[d], k, r) : Ki(l[d - 1], l[d], k);
        b = [...b, t];
        const U = new j({ hasZ: e.hasZ, hasM: e.hasM, spatialReference: e.spatialReference, x: b[0], y: b[1], ...e.hasZ ? { z: b[u] } : {}, ...e.hasM ? { m: b[i] } : {} });
        return { partId: a, distanceAlong: o + s(l[d - 1], [U.x, U.y, ...U.hasZ ? [U.z] : [], ...U.hasM ? [U.m] : []], r), coordinate: U, segmentId: f };
      }
      o += m;
    }
  }
  return null;
}
function Bs(e, t) {
  if (!e) return null;
  switch (e.type) {
    case "extent":
    case "multipoint":
    case "mesh":
    case "point":
      return null;
  }
  const n = e.type === "polygon" ? e.rings : e.paths;
  if (t < 0) return null;
  let r = 1;
  (e.spatialReference.vcsWkid || e.spatialReference.latestVcsWkid) && (r = Tt(e.spatialReference) / St(e.spatialReference));
  let a = 0;
  const o = e.hasZ ? 3 : 2, s = 2, i = e.hasZ ? we : Hi;
  let u = -1;
  if (t === 0) return n.length === 0 || n[0].length === 0 ? null : { partId: 0, coordinate: new j({ hasZ: e.hasZ, hasM: e.hasM, spatialReference: e.spatialReference, x: n[0][0][0], y: n[0][0][1], ...e.hasZ ? { z: n[0][0][s] } : {}, ...e.hasM ? { m: n[0][0][o] } : {} }), segmentId: 0 };
  for (const l of n) {
    u++;
    let f = -1;
    for (let d = 1; d < l.length; d++) {
      f++;
      const m = i(l[d - 1], l[d], r), g = a + m;
      if (g === t) return { partId: u, coordinate: new j({ hasZ: e.hasZ, hasM: e.hasM, spatialReference: e.spatialReference, x: l[d][0], y: l[d][1], ...e.hasZ ? { z: l[d][s] } : {}, ...e.hasM ? { m: l[d][o] } : {} }), segmentId: f };
      if (g > t) {
        let y = e.hasZ ? Wi(l[d - 1], l[d], t - a, r) : Ki(l[d - 1], l[d], t - a);
        return y = [...y, Wn(l[d - 1][o], l[d][o], m, t - a)], { partId: u, coordinate: new j({ hasZ: e.hasZ, hasM: e.hasM, spatialReference: e.spatialReference, x: y[0], y: y[1], ...e.hasZ ? { z: y[s] } : {}, ...e.hasM ? { m: y[o] } : {} }), segmentId: f };
      }
      a = g;
    }
  }
  return null;
}
function Ns(e, t) {
  if (!e || !t) return null;
  let n = 1;
  (t.spatialReference.vcsWkid || t.spatialReference.latestVcsWkid) && (n = Tt(t.spatialReference) / St(t.spatialReference));
  let r = null, a = 0;
  return r = e, a = e.hasZ && t.hasZ ? we([t.x, t.y, t.z], [e.x, e.y, e.z], n) : je([t.x, t.y], [e.x, e.y], !1), { coordinate: r, distance: a };
}
function Ms(e, t) {
  if (!e || !t) return null;
  let n = 1;
  (t.spatialReference.vcsWkid || t.spatialReference.latestVcsWkid) && (n = Tt(t.spatialReference) / St(t.spatialReference));
  let r = null, a = 0, o = Number.MAX_VALUE, s = -1, i = -1;
  for (const u of e.points || []) {
    i++;
    const l = e.hasZ && t.hasZ ? Gi([u[0], u[1], u[2]], [t.x, t.y, t.z], n) : ji([u[0], u[1]], [t.x, t.y]);
    l < o && (o = l, s = i);
  }
  return s < 0 ? null : (a = o, r = e.getPoint(s), { coordinate: r, distance: Math.sqrt(a) });
}
function $s(e, t) {
  if (!e || !t) return null;
  const n = e.type === "polygon" ? e.rings : e.paths;
  let r = 1;
  (t.spatialReference.vcsWkid || t.spatialReference.latestVcsWkid) && (r = Tt(t.spatialReference) / St(t.spatialReference));
  let a = Number.MAX_VALUE, o = -1, s = -1, i = -1;
  const u = e.hasZ && t.hasZ;
  let l = null;
  const f = u ? [t.x, t.y, t.z] : [t.x, t.y];
  for (const fe of n) {
    s++;
    for (let pe = 1; pe < fe.length; pe++) {
      const Bt = u ? vs(f, fe[pe - 1], fe[pe]) : Ss(f, fe[pe - 1], fe[pe]), Te = u ? Gi(Bt, f, r) : ji(Bt, f);
      Te < a && (a = Te, l = Bt, i = s, o = pe - 1);
    }
  }
  if (o < 0) return null;
  const d = e.hasM && e.hasZ ? 3 : 2, m = 2, g = n[i][o], y = n[i][o + 1];
  let k = null, b = null, U = u ? l[2] : null;
  e.hasM && (b = Wn(g[d], y[d], u ? we(g, y, r) : je(g, y, !1), u ? we(g, l, r) : je(g, l, !1))), e.hasZ && t.hasZ === !1 && (U = Wn(g[m], y[m], u ? we(g, y, r) : je(g, y, !1), u ? we(g, l, r) : je(g, l, !1))), k = new j({ hasZ: u, hasM: e.hasM, spatialReference: t.spatialReference, x: l[0], y: l[1], ...e.hasZ ? { z: U } : {}, ...e.hasM ? { m: b } : {} });
  let ae = 0;
  for (let fe = 0; fe <= i; fe++) {
    const pe = n[fe], Bt = fe === i ? o : pe.length - 1;
    for (let Te = 1; Te <= Bt; Te++) ae += e.hasZ ? we(pe[Te - 1], pe[Te], r) : je([pe[Te - 1][0], pe[Te - 1][1]], [pe[Te][0], pe[Te][1]], !1);
  }
  return ae += e.hasZ ? we(g, [k.x, k.y, k.z], r) : je(g, [k.x, k.y], !1), { partId: i, segmentId: o, coordinate: k, distance: Math.sqrt(a), distanceAlong: ae };
}
function _s(e, t) {
  if (!e || !t) return null;
  if (e.type === "extent") {
    const n = e;
    e = new ie({ spatialReference: e.spatialReference, rings: [[[n.xmin, n.ymin], [n.xmin, n.ymax], [n.xmax, n.ymax], [n.xmax, n.ymin], [n.xmin, n.ymin]]] });
  }
  switch (e.type) {
    case "point":
      return Ns(e, t) ?? null;
    case "multipoint":
      return Ms(e, t) ?? null;
    case "polygon":
    case "polyline":
      return $s(e, t) ?? null;
    default:
      return null;
  }
}
let z = null;
function zr(e) {
  return pi.indexOf("4.") === 0 ? ie.fromExtent(e) : new ie({ spatialReference: e.spatialReference, rings: [[[e.xmin, e.ymin], [e.xmin, e.ymax], [e.xmax, e.ymax], [e.xmax, e.ymin], [e.xmin, e.ymin]]] });
}
function Rs(e) {
  z = e;
}
function Zr(e, t) {
  if (e.type !== "polygon" && e.type !== "polyline" && e.type !== "extent") return 0;
  let n = 1;
  (e.spatialReference.vcsWkid || e.spatialReference.latestVcsWkid) && (n = Tt(e.spatialReference) / St(e.spatialReference));
  let r = 0;
  if (e.type === "polyline") for (const o of e.paths) for (let s = 1; s < o.length; s++) r += we(o[s], o[s - 1], n);
  else if (e.type === "polygon") for (const o of e.rings) {
    for (let s = 1; s < o.length; s++) r += we(o[s], o[s - 1], n);
    (o[0][0] !== o[o.length - 1][0] || o[0][1] !== o[o.length - 1][1] || o[0][2] !== void 0 && o[0][2] !== o[o.length - 1][2]) && (r += we(o[0], o[o.length - 1], n));
  }
  else e.type === "extent" && (r += 2 * we([e.xmin, e.ymin, 0], [e.xmax, e.ymin, 0], n), r += 2 * we([e.xmin, e.ymin, 0], [e.xmin, e.ymax, 0], n), r *= 2, r += 4 * Math.abs(R(e.zmax, 0) * n - R(e.zmin, 0) * n));
  const a = new te({ hasZ: !1, hasM: !1, spatialReference: e.spatialReference, paths: [[0, 0], [0, r]] });
  return z.planarLength(a, t);
}
function Yi(e, t) {
  function n(r, a, o) {
    if (D(o, 2, 2, r, a), !(o[0] instanceof N && o[1] instanceof N)) {
      if (!(o[0] instanceof N && o[1] === null)) {
        if (!(o[1] instanceof N && o[0] === null)) {
          if (o[0] !== null || o[1] !== null) throw new h(r, c.InvalidParameter, a);
        }
      }
    }
  }
  e.disjoint = function(r, a) {
    return t(r, a, (o, s, i) => (i = Z(i), n(r, a, i), i[0] === null || i[1] === null || z.disjoint(i[0], i[1])));
  }, e.intersects = function(r, a) {
    return t(r, a, (o, s, i) => (i = Z(i), n(r, a, i), i[0] !== null && i[1] !== null && z.intersects(i[0], i[1])));
  }, e.touches = function(r, a) {
    return t(r, a, (o, s, i) => (i = Z(i), n(r, a, i), i[0] !== null && i[1] !== null && z.touches(i[0], i[1])));
  }, e.crosses = function(r, a) {
    return t(r, a, (o, s, i) => (i = Z(i), n(r, a, i), i[0] !== null && i[1] !== null && z.crosses(i[0], i[1])));
  }, e.within = function(r, a) {
    return t(r, a, (o, s, i) => (i = Z(i), n(r, a, i), i[0] !== null && i[1] !== null && z.within(i[0], i[1])));
  }, e.contains = function(r, a) {
    return t(r, a, (o, s, i) => (i = Z(i), n(r, a, i), i[0] !== null && i[1] !== null && z.contains(i[0], i[1])));
  }, e.overlaps = function(r, a) {
    return t(r, a, (o, s, i) => (i = Z(i), n(r, a, i), i[0] !== null && i[1] !== null && z.overlaps(i[0], i[1])));
  }, e.equals = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 2, 2, r, a), i[0] === i[1] || (i[0] instanceof N && i[1] instanceof N ? z.equals(i[0], i[1]) : (H(i[0]) && H(i[1]) || G(i[0]) && G(i[1]) || !(!O(i[0]) || !O(i[1]))) && i[0].equals(i[1]))));
  }, e.relate = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 3, 3, r, a), i[0] instanceof N && i[1] instanceof N) return z.relate(i[0], i[1], F(i[2]));
      if (i[0] instanceof N && i[1] === null || i[1] instanceof N && i[0] === null || i[0] === null && i[1] === null) return !1;
      throw new h(r, c.InvalidParameter, a);
    });
  }, e.intersection = function(r, a) {
    return t(r, a, (o, s, i) => (i = Z(i), n(r, a, i), i[0] === null || i[1] === null ? null : z.intersect(i[0], i[1])));
  }, e.union = function(r, a) {
    return t(r, a, (o, s, i) => {
      const u = [];
      if ((i = Z(i)).length === 0) throw new h(r, c.WrongNumberOfParameters, a);
      if (i.length === 1) if (T(i[0])) {
        const l = Z(i[0]);
        for (let f = 0; f < l.length; f++) if (l[f] !== null) {
          if (!(l[f] instanceof N)) throw new h(r, c.InvalidParameter, a);
          u.push(l[f]);
        }
      } else {
        if (!_(i[0])) {
          if (i[0] instanceof N) return ne(Be(i[0]), r.spatialReference);
          if (i[0] === null) return null;
          throw new h(r, c.InvalidParameter, a);
        }
        {
          const l = Z(i[0].toArray());
          for (let f = 0; f < l.length; f++) if (l[f] !== null) {
            if (!(l[f] instanceof N)) throw new h(r, c.InvalidParameter, a);
            u.push(l[f]);
          }
        }
      }
      else for (let l = 0; l < i.length; l++) if (i[l] !== null) {
        if (!(i[l] instanceof N)) throw new h(r, c.InvalidParameter, a);
        u.push(i[l]);
      }
      return u.length === 0 ? null : z.union(u);
    });
  }, e.difference = function(r, a) {
    return t(r, a, (o, s, i) => (i = Z(i), n(r, a, i), i[0] === null ? null : i[1] === null ? Be(i[0]) : z.difference(i[0], i[1])));
  }, e.symmetricdifference = function(r, a) {
    return t(r, a, (o, s, i) => (i = Z(i), n(r, a, i), i[0] === null && i[1] === null ? null : i[0] === null ? Be(i[1]) : i[1] === null ? Be(i[0]) : z.symmetricDifference(i[0], i[1])));
  }, e.clip = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 2, r, a), !(i[1] instanceof ye) && i[1] !== null) throw new h(r, c.InvalidParameter, a);
      if (i[0] === null) return null;
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      return i[1] === null ? null : z.clip(i[0], i[1]);
    });
  }, e.cut = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 2, r, a), !(i[1] instanceof te) && i[1] !== null) throw new h(r, c.InvalidParameter, a);
      if (i[0] === null) return [];
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      return i[1] === null ? [Be(i[0])] : z.cut(i[0], i[1]);
    });
  }, e.area = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (D(i, 1, 2, r, a), (i = Z(i))[0] === null) return 0;
      if (T(i[0]) || _(i[0])) {
        const u = Jn(i[0], r.spatialReference);
        return u === null ? 0 : z.planarArea(u, Xt(R(i[1], -1)));
      }
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      return z.planarArea(i[0], Xt(R(i[1], -1)));
    });
  }, e.areageodetic = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (D(i, 1, 2, r, a), (i = Z(i))[0] === null) return 0;
      if (T(i[0]) || _(i[0])) {
        const u = Jn(i[0], r.spatialReference);
        return u === null ? 0 : z.geodesicArea(u, Xt(R(i[1], -1)));
      }
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      return z.geodesicArea(i[0], Xt(R(i[1], -1)));
    });
  }, e.length = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (D(i, 1, 2, r, a), (i = Z(i))[0] === null) return 0;
      if (T(i[0]) || _(i[0])) {
        const u = Ke(i[0], r.spatialReference);
        return u === null ? 0 : z.planarLength(u, se(R(i[1], -1)));
      }
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      return z.planarLength(i[0], se(R(i[1], -1)));
    });
  }, e.length3d = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (D(i, 1, 2, r, a), (i = Z(i))[0] === null) return 0;
      if (T(i[0]) || _(i[0])) {
        const u = Ke(i[0], r.spatialReference);
        return u === null ? 0 : u.hasZ === !0 ? Zr(u, se(R(i[1], -1))) : z.planarLength(u, se(R(i[1], -1)));
      }
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      return i[0].hasZ === !0 ? Zr(i[0], se(R(i[1], -1))) : z.planarLength(i[0], se(R(i[1], -1)));
    });
  }, e.lengthgeodetic = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (D(i, 1, 2, r, a), (i = Z(i))[0] === null) return 0;
      if (T(i[0]) || _(i[0])) {
        const u = Ke(i[0], r.spatialReference);
        return u === null ? 0 : z.geodesicLength(u, se(R(i[1], -1)));
      }
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      return z.geodesicLength(i[0], se(R(i[1], -1)));
    });
  }, e.distance = function(r, a) {
    return t(r, a, (o, s, i) => {
      i = Z(i), D(i, 2, 3, r, a);
      let u = i[0];
      (T(i[0]) || _(i[0])) && (u = tn(i[0], r.spatialReference));
      let l = i[1];
      if ((T(i[1]) || _(i[1])) && (l = tn(i[1], r.spatialReference)), !(u instanceof N)) throw new h(r, c.InvalidParameter, a);
      if (!(l instanceof N)) throw new h(r, c.InvalidParameter, a);
      return z.distance(u, l, se(R(i[2], -1)));
    });
  }, e.distancegeodetic = function(r, a) {
    return t(r, a, (o, s, i) => {
      i = Z(i), D(i, 2, 3, r, a);
      const u = i[0], l = i[1];
      if (!(u instanceof j)) throw new h(r, c.InvalidParameter, a);
      if (!(l instanceof j)) throw new h(r, c.InvalidParameter, a);
      const f = new te({ paths: [], spatialReference: u.spatialReference });
      return f.addPath([u, l]), z.geodesicLength(f, se(R(i[2], -1)));
    });
  }, e.densify = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 3, r, a), i[0] === null) return null;
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      const u = p(i[1]);
      if (isNaN(u)) throw new h(r, c.InvalidParameter, a);
      if (u <= 0) throw new h(r, c.InvalidParameter, a);
      return i[0] instanceof ie || i[0] instanceof te ? z.densify(i[0], u, se(R(i[2], -1))) : i[0] instanceof ye ? z.densify(zr(i[0]), u, se(R(i[2], -1))) : i[0];
    });
  }, e.densifygeodetic = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 3, r, a), i[0] === null) return null;
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      const u = p(i[1]);
      if (isNaN(u)) throw new h(r, c.InvalidParameter, a);
      if (u <= 0) throw new h(r, c.InvalidParameter, a);
      return i[0] instanceof ie || i[0] instanceof te ? z.geodesicDensify(i[0], u, se(R(i[2], -1))) : i[0] instanceof ye ? z.geodesicDensify(zr(i[0]), u, se(R(i[2], -1))) : i[0];
    });
  }, e.generalize = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 4, r, a), i[0] === null) return null;
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      const u = p(i[1]);
      if (isNaN(u)) throw new h(r, c.InvalidParameter, a);
      return z.generalize(i[0], u, xt(R(i[2], !0)), se(R(i[3], -1)));
    });
  }, e.buffer = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 3, r, a), i[0] === null) return null;
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      const u = p(i[1]);
      if (isNaN(u)) throw new h(r, c.InvalidParameter, a);
      return u === 0 ? Be(i[0]) : z.buffer(i[0], u, se(R(i[2], -1)));
    });
  }, e.buffergeodetic = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 3, r, a), i[0] === null) return null;
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      const u = p(i[1]);
      if (isNaN(u)) throw new h(r, c.InvalidParameter, a);
      return u === 0 ? Be(i[0]) : z.geodesicBuffer(i[0], u, se(R(i[2], -1)));
    });
  }, e.offset = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 6, r, a), i[0] === null) return null;
      if (!(i[0] instanceof ie || i[0] instanceof te)) throw new h(r, c.InvalidParameter, a);
      const u = p(i[1]);
      if (isNaN(u)) throw new h(r, c.InvalidParameter, a);
      const l = p(R(i[4], 10));
      if (isNaN(l)) throw new h(r, c.InvalidParameter, a);
      const f = p(R(i[5], 0));
      if (isNaN(f)) throw new h(r, c.InvalidParameter, a);
      return z.offset(i[0], u, se(R(i[2], -1)), F(R(i[3], "round")).toLowerCase(), l, f);
    });
  }, e.rotate = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 3, r, a), i[0] === null) return null;
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      const u = i[0] instanceof ye ? ie.fromExtent(i[0]) : i[0], l = p(i[1]);
      if (isNaN(l)) throw new h(r, c.InvalidParameter, a);
      const f = R(i[2], null);
      if (f === null) return z.rotate(u, l);
      if (f instanceof j) return z.rotate(u, l, f);
      throw new h(r, c.InvalidParameter, a);
    });
  }, e.centroid = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 1, 1, r, a), i[0] === null) return null;
      let u = i[0];
      if ((T(i[0]) || _(i[0])) && (u = tn(i[0], r.spatialReference)), u === null) return null;
      if (!(u instanceof N)) throw new h(r, c.InvalidParameter, a);
      return u instanceof j ? ne(Be(u), r.spatialReference) : u instanceof ie ? u.centroid : u instanceof te ? ms(u) : u instanceof Se ? Ds(u) : u instanceof ye ? u.center : null;
    });
  }, e.measuretocoordinate = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 2, r, a), i[0] === null) return null;
      let u = i[0];
      if ((T(i[0]) || _(i[0])) && (u = Ke(i[0], r.spatialReference)), u === null) return null;
      if (!(u instanceof N)) throw new h(r, c.InvalidParameter, a);
      if (!(u instanceof te)) throw new h(r, c.InvalidParameter, a);
      if (L(i[1] === !1)) throw new h(r, c.InvalidParameter, a);
      const l = Ts(u, i[1]);
      return l ? B.convertObjectToArcadeDictionary(l, M(r), !1, !0) : null;
    });
  }, e.pointtocoordinate = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 2, r, a), i[0] === null) return null;
      let u = i[0];
      if ((T(i[0]) || _(i[0])) && (u = Ke(i[0], r.spatialReference)), u === null) return null;
      if (!(u instanceof N)) throw new h(r, c.InvalidParameter, a);
      if (!(u instanceof te)) throw new h(r, c.InvalidParameter, a);
      const l = i[1];
      if (l === null) return null;
      if (!(l instanceof j)) throw new h(r, c.InvalidParameter, a);
      if (L(i[1] === !1)) throw new h(r, c.InvalidParameter, a);
      const f = _s(u, l);
      return f ? B.convertObjectToArcadeDictionary(f, M(r), !1, !0) : null;
    });
  }, e.distancetocoordinate = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 2, r, a), i[0] === null) return null;
      let u = i[0];
      if ((T(i[0]) || _(i[0])) && (u = Ke(i[0], r.spatialReference)), u === null) return null;
      if (!(u instanceof N)) throw new h(r, c.InvalidParameter, a);
      if (!(u instanceof te)) throw new h(r, c.InvalidParameter, a);
      if (L(i[1] === !1)) throw new h(r, c.InvalidParameter, a);
      const l = Bs(u, i[1]);
      return l ? B.convertObjectToArcadeDictionary(l, M(r), !1, !0) : null;
    });
  }, e.multiparttosinglepart = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 1, 1, r, a), i[0] === null) return null;
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      if (i[0] instanceof j) return [ne(Be(i[0]), r.spatialReference)];
      if (i[0] instanceof ye) return [ne(Be(i[0]), r.spatialReference)];
      const u = z.simplify(i[0]);
      if (u instanceof ie) {
        const l = [], f = [];
        for (let d = 0; d < u.rings.length; d++) if (u.isClockwise(u.rings[d])) {
          const m = le({ rings: [u.rings[d]], hasZ: u.hasZ === !0, hasM: u.hasM === !0, spatialReference: u.spatialReference.toJSON() });
          l.push(m);
        } else f.push({ ring: u.rings[d], pt: u.getPoint(d, 0) });
        for (let d = 0; d < f.length; d++) for (let m = 0; m < l.length; m++) if (l[m].contains(f[d].pt)) {
          l[m].addRing(f[d].ring);
          break;
        }
        return l;
      }
      if (u instanceof te) {
        const l = [];
        for (let f = 0; f < u.paths.length; f++) {
          const d = le({ paths: [u.paths[f]], hasZ: u.hasZ === !0, hasM: u.hasM === !0, spatialReference: u.spatialReference.toJSON() });
          l.push(d);
        }
        return l;
      }
      if (i[0] instanceof Se) {
        const l = [], f = ne(Be(i[0]), r.spatialReference);
        for (let d = 0; d < f.points.length; d++) l.push(f.getPoint(d));
        return l;
      }
      return null;
    });
  }, e.issimple = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 1, 1, r, a), i[0] === null) return !0;
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      return z.isSimple(i[0]);
    });
  }, e.simplify = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 1, 1, r, a), i[0] === null) return null;
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      return z.simplify(i[0]);
    });
  }, e.convexhull = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 1, 1, r, a), i[0] === null) return null;
      if (!(i[0] instanceof N)) throw new h(r, c.InvalidParameter, a);
      return z.convexHull(i[0]);
    });
  }, e.nearestcoordinate = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 2, r, a), !(i[0] instanceof N || i[0] === null)) throw new h(r, c.InvalidParameter, a);
      if (!(i[1] instanceof j || i[1] === null)) throw new h(r, c.InvalidParameter, a);
      if (i[0] === null || i[1] === null) return null;
      const u = z.nearestCoordinate(i[0], i[1]);
      return u === null || u.isEmpty ? null : B.convertObjectToArcadeDictionary({ coordinate: u.coordinate, distance: u.distance, sideOfLine: u.distance === 0 ? "straddle" : u.isRightSide ? "right" : "left" }, M(r), !1, !0);
    });
  }, e.nearestvertex = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (i = Z(i), D(i, 2, 2, r, a), !(i[0] instanceof N || i[0] === null)) throw new h(r, c.InvalidParameter, a);
      if (!(i[1] instanceof j || i[1] === null)) throw new h(r, c.InvalidParameter, a);
      if (i[0] === null || i[1] === null) return null;
      const u = z.nearestVertex(i[0], i[1]);
      return u === null || u.isEmpty ? null : B.convertObjectToArcadeDictionary({ coordinate: u.coordinate, distance: u.distance, sideOfLine: u.distance === 0 ? "straddle" : u.isRightSide ? "right" : "left" }, M(r), !1, !0);
    });
  };
}
function Sn(e, t, n) {
  if (n === void 0 || +n == 0) return Math[e](t);
  if (t = +t, n = +n, isNaN(t) || typeof n != "number" || n % 1 != 0) return NaN;
  let r = t.toString().split("e");
  return r = (t = Math[e](+(r[0] + "e" + (r[1] ? +r[1] - n : -n)))).toString().split("e"), +(r[0] + "e" + (r[1] ? +r[1] + n : n));
}
function Xi(e, t) {
  function n(r, a, o) {
    const s = p(r);
    return isNaN(s) ? s : isNaN(a) || isNaN(o) || a > o ? NaN : s < a ? a : s > o ? o : s;
  }
  e.number = function(r, a) {
    return t(r, a, (o, s, i) => {
      D(i, 1, 2, r, a);
      const u = i[0];
      if (L(u)) return u;
      if (u === null) return 0;
      if (H(u) || G(u) || O(u)) return u.toNumber();
      if (J(u)) return Number(u);
      if (T(u)) return NaN;
      if (u === "" || u === void 0) return Number(u);
      if (x(u)) {
        if (i[1] !== void 0) {
          let l = et(i[1], "‰", "");
          return l = et(l, "¤", ""), yi(u, { pattern: l });
        }
        return Number(u.trim());
      }
      return Number(u);
    });
  }, e.abs = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 1, 1, r, a), Math.abs(p(i[0]))));
  }, e.acos = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 1, 1, r, a), Math.acos(p(i[0]))));
  }, e.asin = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 1, 1, r, a), Math.asin(p(i[0]))));
  }, e.atan = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 1, 1, r, a), Math.atan(p(i[0]))));
  }, e.atan2 = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 2, 2, r, a), Math.atan2(p(i[0]), p(i[1]))));
  }, e.ceil = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (D(i, 1, 2, r, a), i.length === 2) {
        let u = p(i[1]);
        return isNaN(u) && (u = 0), Sn("ceil", p(i[0]), -1 * u);
      }
      return Math.ceil(p(i[0]));
    });
  }, e.round = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (D(i, 1, 2, r, a), i.length === 2) {
        let u = p(i[1]);
        return isNaN(u) && (u = 0), Sn("round", p(i[0]), -1 * u);
      }
      return Math.round(p(i[0]));
    });
  }, e.floor = function(r, a) {
    return t(r, a, (o, s, i) => {
      if (D(i, 1, 2, r, a), i.length === 2) {
        let u = p(i[1]);
        return isNaN(u) && (u = 0), Sn("floor", p(i[0]), -1 * u);
      }
      return Math.floor(p(i[0]));
    });
  }, e.cos = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 1, 1, r, a), Math.cos(p(i[0]))));
  }, e.isnan = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 1, 1, r, a), typeof i[0] == "number" && isNaN(i[0])));
  }, e.exp = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 1, 1, r, a), Math.exp(p(i[0]))));
  }, e.log = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 1, 1, r, a), Math.log(p(i[0]))));
  }, e.pow = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 2, 2, r, a), p(i[0]) ** p(i[1])));
  }, e.random = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 0, 0, r, a), Math.random()));
  }, e.sin = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 1, 1, r, a), Math.sin(p(i[0]))));
  }, e.sqrt = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 1, 1, r, a), Math.sqrt(p(i[0]))));
  }, e.tan = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 1, 1, r, a), Math.tan(p(i[0]))));
  }, e.isempty = function(r, a) {
    return t(r, a, (o, s, i) => (D(i, 1, 1, r, a), i[0] === null || i[0] === "" || i[0] === void 0 || i[0] === C));
  }, e.boolean = function(r, a) {
    return t(r, a, (o, s, i) => {
      D(i, 1, 1, r, a);
      const u = i[0];
      return xt(u);
    });
  }, e.constrain = function(r, a) {
    return t(r, a, (o, s, i) => {
      D(i, 3, 3, r, a);
      const u = p(i[1]), l = p(i[2]);
      if (T(i[0])) {
        const f = [];
        for (const d of i[0]) f.push(n(d, u, l));
        return f;
      }
      if (_(i[0])) {
        const f = [];
        for (let d = 0; d < i[0].length(); d++) f.push(n(i[0].get(d), u, l));
        return f;
      }
      return n(i[0], u, l);
    });
  };
}
function Qi(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t += e[n];
  return t / e.length;
}
function Gr(e) {
  const t = Qi(e);
  let n = 0;
  for (let r = 0; r < e.length; r++) n += (t - e[r]) ** 2;
  return n / e.length;
}
function Os(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t += e[n];
  return t;
}
function Ps(e, t) {
  const n = [], r = {}, a = [];
  for (let o = 0; o < e.length; o++) {
    if (e[o] !== void 0 && e[o] !== null && e[o] !== C) {
      const s = e[o];
      if (L(s) || x(s)) r[s] === void 0 && (n.push(s), r[s] = 1);
      else {
        let i = !1;
        for (let u = 0; u < a.length; u++) ke(a[u], s) === !0 && (i = !0);
        i === !1 && (a.push(s), n.push(s));
      }
    }
    if (n.length >= t && t !== -1) return n;
  }
  return n;
}
function In(e, t, n = 1e3) {
  switch (e.toLowerCase()) {
    case "distinct":
      return Ps(t, n);
    case "avg":
    case "mean":
      return Qi(nt(t));
    case "min":
      return Math.min.apply(Math, nt(t));
    case "sum":
      return Os(nt(t));
    case "max":
      return Math.max.apply(Math, nt(t));
    case "stdev":
    case "stddev":
      return Math.sqrt(Gr(nt(t)));
    case "var":
    case "variance":
      return Gr(nt(t));
    case "count":
      return t.length;
  }
  return 0;
}
function He(e, t) {
  if (t.length === 1) {
    if (T(t[0])) return In(e, t[0], -1);
    if (_(t[0])) return In(e, t[0].toArray(), -1);
  }
  return In(e, t, -1);
}
function ea(e, t) {
  e.stdev = function(n, r) {
    return t(n, r, (a, o, s) => He("stdev", s));
  }, e.variance = function(n, r) {
    return t(n, r, (a, o, s) => He("variance", s));
  }, e.average = function(n, r) {
    return t(n, r, (a, o, s) => He("mean", s));
  }, e.mean = function(n, r) {
    return t(n, r, (a, o, s) => He("mean", s));
  }, e.sum = function(n, r) {
    return t(n, r, (a, o, s) => He("sum", s));
  }, e.min = function(n, r) {
    return t(n, r, (a, o, s) => He("min", s));
  }, e.max = function(n, r) {
    return t(n, r, (a, o, s) => He("max", s));
  }, e.distinct = function(n, r) {
    return t(n, r, (a, o, s) => He("distinct", s));
  }, e.count = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 1, n, r), T(s[0]) || x(s[0])) return s[0].length;
      if (_(s[0])) return s[0].length();
      throw new h(n, c.InvalidParameter, r);
    });
  };
}
let Kn = class extends B {
  constructor(t) {
    super(), this.declaredClass = "esri.arcade.Portal", this.immutable = !1, this.setField("url", t), this.immutable = !0;
  }
}, Ls = class ta extends B {
  constructor(t, n, r, a, o, s, i) {
    super(), this.attachmentUrl = o, this.declaredClass = "esri.arcade.Attachment", this.immutable = !1, this.setField("id", t), this.setField("name", n), this.setField("contenttype", r), this.setField("size", a), this.setField("exifinfo", s), this.setField("keywords", i), this.immutable = !0;
  }
  deepClone() {
    return new ta(this.field("id"), this.field("name"), this.field("contenttype"), this.field("size"), this.attachmentUrl, this.field("exifinfo")?.deepClone() ?? null, this.field("keywords"));
  }
};
const wr = (e) => (t, n, r) => (r = r || 14, +e(t, n).toFixed(r)), Us = (e, t) => e + t, zs = (e, t) => e * t, Zs = (e, t) => e / t, jr = (e, t, n) => wr(Us)(e, t, n), gt = (e, t, n) => wr(zs)(e, t, n), cn = (e, t, n) => wr(Zs)(e, t, n), hn = 360, Gs = 400, js = 2 * Math.PI, Ne = 3600, Jr = 3240, zt = 60, Qe = 60, qr = 180 * Ne / Math.PI, Ot = hn * zt * Qe, kn = 90 * Ne, ht = 180 * Ne, Js = 270 * Ne, na = "ᵍ", Pt = "°";
function $t(e) {
  if (x(e) === !1) throw new h(null, c.InvalidParameter, null);
  return e;
}
function Yn(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function qs(e, t) {
  return e % t;
}
function dt(e) {
  const t = parseFloat(e.toString().replace(Math.trunc(e).toString(), "0")) * Math.sign(e);
  return e < 0 ? { fraction: t, integer: Math.ceil(e) } : { fraction: t, integer: Math.floor(e) };
}
var Y, w, W, Xn;
function Dt(e, t) {
  switch (e) {
    case Y.north:
      return t === "SHORT" ? "N" : "North";
    case Y.east:
      return t === "SHORT" ? "E" : "East";
    case Y.south:
      return t === "SHORT" ? "S" : "South";
    case Y.west:
      return t === "SHORT" ? "W" : "West";
  }
}
function Tn(e, t) {
  return e - Math.floor(e / t) * t;
}
function Bn(e) {
  switch (e) {
    case w.truncated_degrees:
    case w.decimal_degrees:
      return hn;
    case w.radians:
      return js;
    case w.gradians:
      return Gs;
    case w.seconds:
      return Ot;
    case w.fractional_degree_minutes:
      return zt;
    case w.fractional_minute_seconds:
      return Qe;
    default:
      throw new h(null, c.LogicError, null, { reason: "unsupported evaluations" });
  }
}
function Vr(e) {
  switch (e.toUpperCase().trim()) {
    case "NORTH":
    case "NORTHAZIMUTH":
    case "NORTH AZIMUTH":
      return W.north_azimuth;
    case "POLAR":
      return W.polar;
    case "QUADRANT":
      return W.quadrant;
    case "SOUTH":
    case "SOUTHAZIMUTH":
    case "SOUTH AZIMUTH":
      return W.south_azimuth;
  }
  throw new h(null, c.LogicError, null, { reason: "unsupported directionType" });
}
function Hr(e) {
  switch (e.toUpperCase().trim()) {
    case "D":
    case "DD":
    case "DECIMALDEGREE":
    case "DECIMAL DEGREE":
    case "DEGREE":
    case "DECIMALDEGREES":
    case "DECIMAL DEGREES":
    case "DEGREES":
      return w.decimal_degrees;
    case "DMS":
    case "DEGREESMINUTESSECONDS":
    case "DEGREES MINUTES SECONDS":
      return w.degrees_minutes_seconds;
    case "R":
    case "RAD":
    case "RADS":
    case "RADIAN":
    case "RADIANS":
      return w.radians;
    case "G":
    case "GON":
    case "GONS":
    case "GRAD":
    case "GRADS":
    case "GRADIAN":
    case "GRADIANS":
      return w.gradians;
  }
  throw new h(null, c.LogicError, null, { reason: "unsupported units" });
}
(function(e) {
  e[e.north = 0] = "north", e[e.east = 1] = "east", e[e.south = 2] = "south", e[e.west = 3] = "west";
})(Y || (Y = {})), function(e) {
  e[e.decimal_degrees = 1] = "decimal_degrees", e[e.seconds = 2] = "seconds", e[e.degrees_minutes_seconds = 3] = "degrees_minutes_seconds", e[e.radians = 4] = "radians", e[e.gradians = 5] = "gradians", e[e.truncated_degrees = 6] = "truncated_degrees", e[e.fractional_degree_minutes = 7] = "fractional_degree_minutes", e[e.fractional_minute_seconds = 8] = "fractional_minute_seconds";
}(w || (w = {})), function(e) {
  e[e.north_azimuth = 1] = "north_azimuth", e[e.polar = 2] = "polar", e[e.quadrant = 3] = "quadrant", e[e.south_azimuth = 4] = "south_azimuth";
}(W || (W = {})), function(e) {
  e[e.meridian = 0] = "meridian", e[e.direction = 1] = "direction";
}(Xn || (Xn = {}));
let At = class an {
  constructor(t, n, r) {
    this.m_degrees = t, this.m_minutes = n, this.m_seconds = r;
  }
  getField(t) {
    switch (t) {
      case w.decimal_degrees:
      case w.truncated_degrees:
        return this.m_degrees;
      case w.fractional_degree_minutes:
        return this.m_minutes;
      case w.seconds:
      case w.fractional_minute_seconds:
        return this.m_seconds;
      default:
        throw new h(null, c.LogicError, null, { reason: "unexpected evaluation" });
    }
  }
  static secondsToDMS(t) {
    const n = dt(t).fraction;
    let r = dt(t).integer;
    const a = Math.floor(r / Ne);
    r -= a * Ne;
    const o = Math.floor(r / Qe);
    return r -= o * Qe, new an(a, o, r + n);
  }
  static numberToDms(t) {
    const n = dt(t).fraction, r = dt(t).integer, a = gt(dt(100 * n).fraction, 100), o = dt(100 * n).integer;
    return new an(r, o, a);
  }
  format(t, n) {
    let r = Yn(this.m_seconds, n), a = this.m_minutes, o = this.m_degrees;
    if (t === w.seconds || t === w.fractional_minute_seconds) Qe <= r && (r -= Qe, ++a), zt <= a && (a = 0, ++o), hn <= o && (o = 0);
    else if (t === w.fractional_degree_minutes) r = 0, a = 30 <= this.m_seconds ? this.m_minutes + 1 : this.m_minutes, o = this.m_degrees, zt <= a && (a = 0, ++o), hn <= o && (o = 0);
    else if (t === w.decimal_degrees || t === w.truncated_degrees) {
      const s = cn(this.m_seconds, Ne), i = cn(this.m_minutes, zt);
      o = Math.round(this.m_degrees + i + s), a = 0, r = 0;
    }
    return new an(o, a, r);
  }
  static dmsToSeconds(t, n, r) {
    return t * Ne + n * Qe + r;
  }
}, Vs = class {
  constructor(t, n, r) {
    this.meridian = t, this.angle = n, this.direction = r;
  }
  fetchAzimuth(t) {
    return t === Xn.meridian ? this.meridian : this.direction;
  }
}, Ye = class Ge {
  constructor(t) {
    this._angle = t;
  }
  static createFromAngleAndDirection(t, n) {
    return new Ge(new Oe(Ge._convertDirectionFormat(t.extractAngularUnits(w.seconds), n, W.north_azimuth)));
  }
  getAngle(t) {
    const n = this._angle.extractAngularUnits(w.seconds);
    switch (t) {
      case W.north_azimuth:
      case W.south_azimuth:
      case W.polar:
        return new Oe(Ge._convertDirectionFormat(n, W.north_azimuth, t));
      case W.quadrant: {
        const r = Ge.secondsNorthAzimuthToQuadrant(n);
        return new Oe(r.angle);
      }
    }
  }
  getMeridian(t) {
    const n = this._angle.extractAngularUnits(w.seconds);
    switch (t) {
      case W.north_azimuth:
        return Y.north;
      case W.south_azimuth:
        return Y.south;
      case W.polar:
        return Y.east;
      case W.quadrant:
        return Ge.secondsNorthAzimuthToQuadrant(n).meridian;
    }
  }
  getDirection(t) {
    const n = this._angle.extractAngularUnits(w.seconds);
    switch (t) {
      case W.north_azimuth:
        return Y.east;
      case W.south_azimuth:
        return Y.west;
      case W.polar:
        return Y.north;
      case W.quadrant:
        return Ge.secondsNorthAzimuthToQuadrant(n).direction;
    }
  }
  static secondsNorthAzimuthToQuadrant(t) {
    const n = t <= kn || t >= Js ? Y.north : Y.south, r = n === Y.north ? Math.min(Ot - t, t) : Math.abs(t - ht), a = t > ht ? Y.west : Y.east;
    return new Vs(n, r, a);
  }
  static createFromAngleMeridianAndDirection(t, n, r) {
    return new Ge(new Oe(Ge.secondsQuadrantToNorthAzimuth(t.extractAngularUnits(w.seconds), n, r)));
  }
  static secondsQuadrantToNorthAzimuth(t, n, r) {
    return n === Y.north ? r === Y.east ? t : Ot - t : r === Y.east ? ht - t : ht + t;
  }
  static _convertDirectionFormat(t, n, r) {
    let a = 0;
    switch (n) {
      case W.north_azimuth:
        a = t;
        break;
      case W.polar:
        a = kn - t;
        break;
      case W.quadrant:
        throw new h(null, c.LogicError, null, { reason: "unexpected evaluation" });
      case W.south_azimuth:
        a = t + ht;
    }
    let o = 0;
    switch (r) {
      case W.north_azimuth:
        o = a;
        break;
      case W.polar:
        o = kn - a;
        break;
      case W.quadrant:
        throw new h(null, c.LogicError, null, { reason: "unexpected evaluation" });
      case W.south_azimuth:
        o = a - ht;
    }
    return o = qs(o, Ot), o < 0 ? Ot + o : o;
  }
};
function Wr(e, t, n) {
  let r = null;
  switch (t) {
    case w.decimal_degrees:
      r = gt(e, Ne);
      break;
    case w.seconds:
      r = e;
      break;
    case w.gradians:
      r = gt(e, Jr);
      break;
    case w.radians:
      r = gt(e, qr);
      break;
    default:
      throw new h(null, c.LogicError, null, { reason: "unexpected evaluation" });
  }
  switch (n) {
    case w.decimal_degrees:
      return cn(r, Ne);
    case w.seconds:
      return r;
    case w.gradians:
      return cn(r, Jr);
    case w.radians:
      return r / qr;
    default:
      throw new h(null, c.LogicError, null, { reason: "unexpected evaluation" });
  }
}
let Oe = class Qn {
  constructor(t) {
    this._seconds = t;
  }
  static createFromAngleAndUnits(t, n) {
    return new Qn(Wr(t, n, w.seconds));
  }
  extractAngularUnits(t) {
    return Wr(this._seconds, w.seconds, jt(t));
  }
  static createFromDegreesMinutesSeconds(t, n, r) {
    return new Qn(jr(jr(gt(t, Ne), gt(n, Qe)), r));
  }
};
function jt(e) {
  switch (Di(e), e) {
    case w.decimal_degrees:
    case w.truncated_degrees:
    case w.degrees_minutes_seconds:
      return w.decimal_degrees;
    case w.gradians:
      return w.gradians;
    case w.fractional_degree_minutes:
      return w.fractional_degree_minutes;
    case w.radians:
      return w.radians;
    case w.seconds:
    case w.fractional_minute_seconds:
      return w.seconds;
  }
}
let Hs = class ra {
  constructor(t, n, r, a) {
    this.view = t, this.angle = n, this.merdian = r, this.direction = a, this._dms = null, this._formattedDms = null;
  }
  static createFromStringAndBearing(t, n, r) {
    return new ra(t, n.getAngle(r), n.getMeridian(r), n.getDirection(r));
  }
  fetchAngle() {
    return this.angle;
  }
  fetchMeridian() {
    return this.merdian;
  }
  fetchDirection() {
    return this.direction;
  }
  fetchView() {
    return this.view;
  }
  fetchDms() {
    return this._dms === null && this._calculateDms(), this._dms;
  }
  fetchFormattedDms() {
    return this._formattedDms === null && this._calculateDms(), this._formattedDms;
  }
  _calculateDms() {
    let t = null, n = w.truncated_degrees, r = 0;
    for (let a = 0; a < this.view.length; a++) {
      const o = this.view[a];
      switch (o) {
        case "m":
          t = er(this.view, a, o), n = n === w.truncated_degrees ? w.fractional_degree_minutes : n, a = t.newpos;
          continue;
        case "s":
          t = er(this.view, a, o), n = w.fractional_minute_seconds, r = r < t.rounding ? t.rounding : r, a = t.newpos;
          continue;
        default:
          continue;
      }
    }
    this._dms = At.secondsToDMS(this.angle.extractAngularUnits(w.seconds)), this._formattedDms = At.secondsToDMS(this.angle.extractAngularUnits(w.seconds)).format(n, r);
  }
};
function Ws(e, t, n, r, a) {
  let o = null;
  switch (t) {
    case w.decimal_degrees:
    case w.radians:
    case w.gradians:
      return o = Tn(Yn(e.extractAngularUnits(t), r), Bn(t)), o.toFixed(r).padStart(n + r + (r > 0 ? 1 : 0), "0");
    case w.truncated_degrees:
    case w.fractional_degree_minutes:
      return o = Tn(a.fetchFormattedDms().getField(t), Bn(t)), o.toFixed(r).padStart(n + r + (r > 0 ? 1 : 0), "0");
    case w.fractional_minute_seconds:
      return o = Tn(Yn(a.fetchDms().getField(t), r), Bn(t)), o.toFixed(r).padStart(n + r + (r > 0 ? 1 : 0), "0");
    default:
      throw new h(null, c.LogicError, null, { reason: "unexpected evaluation" });
  }
}
function Ks(e, t, n) {
  if (n === W.quadrant) throw new h(null, c.LogicError, null, { reason: "conversion error" });
  if (t === w.degrees_minutes_seconds) {
    const r = At.numberToDms(e);
    return Ye.createFromAngleAndDirection(Oe.createFromDegreesMinutesSeconds(r.m_degrees, r.m_minutes, r.m_seconds), n);
  }
  return Ye.createFromAngleAndDirection(Oe.createFromAngleAndUnits(e, jt(t)), n);
}
function Ys(e) {
  switch (p(e)) {
    case 1:
      return { first: Y.north, second: Y.east };
    case 2:
      return { first: Y.south, second: Y.east };
    case 3:
      return { first: Y.south, second: Y.west };
    case 4:
      return { first: Y.north, second: Y.west };
  }
  return null;
}
function Kr(e) {
  switch (e.toUpperCase().trim()) {
    case "N":
    case "NORTH":
      return Y.north;
    case "E":
    case "EAST":
      return Y.east;
    case "S":
    case "SOUTH":
      return Y.south;
    case "W":
    case "WEST":
      return Y.west;
  }
  return null;
}
function ft(e) {
  const t = parseFloat(e);
  if (L(t)) {
    if (isNaN(t)) throw new h(null, c.LogicError, null, { reason: "invalid conversion" });
    return t;
  }
  throw new h(null, c.LogicError, null, { reason: "invalid conversion" });
}
function Nn(e, t, n) {
  const r = n === W.quadrant;
  let a = null, o = null, s = 0, i = 0, u = 0;
  if (r) {
    if (e.length < 2) throw new h(null, c.LogicError, null, { reason: "conversion error" });
    u = 1;
    const l = Ys(F(e[e.length - 1]));
    if (l ? (a = l.first, o = l.second) : (s = 1, a = Kr(F(e[0])), o = Kr(F(e[e.length - 1]))), a === null || o === null) throw new h(null, c.LogicError, null, { reason: "invalid conversion" });
  }
  switch (t) {
    case w.decimal_degrees:
    case w.radians:
    case w.gradians:
      if (e.length === 0) throw new h(null, c.LogicError, null, { reason: "invalid conversion" });
      return r ? Ye.createFromAngleMeridianAndDirection(Oe.createFromAngleAndUnits(ft(e[s]), jt(t)), a, o) : Ye.createFromAngleAndDirection(Oe.createFromAngleAndUnits(ft(e[s]), jt(t)), n);
    case w.degrees_minutes_seconds:
      if (i = e.length - u - s, i === 3) {
        const l = Oe.createFromDegreesMinutesSeconds(ft(e[s]), ft(e[s + 1]), ft(e[s + 2]));
        return r ? Ye.createFromAngleMeridianAndDirection(l, a, o) : Ye.createFromAngleAndDirection(l, n);
      }
      if (i === 1) {
        const l = ft(e[s]), f = At.numberToDms(l), d = Oe.createFromDegreesMinutesSeconds(f.m_degrees, f.m_minutes, f.m_seconds);
        return r ? Ye.createFromAngleMeridianAndDirection(d, a, o) : Ye.createFromAngleAndDirection(d, n);
      }
  }
  throw new h(null, c.LogicError, null, { reason: "invalid conversion" });
}
function Xs(e) {
  const t = /* @__PURE__ */ new Set([" ", "-", "/", "'", '"', "\\", "^", Pt, na, "	", "\r", `
`, "*"]);
  let n = "";
  for (let r = 0; r < e.length; r++) {
    const a = e.charAt(r);
    t.has(a) ? n += "RRSPLITRRSPLITRR" : n += a;
  }
  return n.split("RRSPLITRRSPLITRR").filter((r) => r !== "");
}
function Qs(e, t, n) {
  if (L(e)) return Ks(p(e), t, n);
  if (x(e)) return Nn(Xs(e), t, n);
  if (T(e)) return Nn(e, t, n);
  if (_(e)) return Nn(e.toArray(), t, n);
  throw new h(null, c.LogicError, null, { reason: "conversion error" });
}
function eo(e, t, n) {
  const r = jt(n);
  if (r && n !== w.degrees_minutes_seconds)
    return e.getAngle(t).extractAngularUnits(r);
  throw new h(null, c.LogicError, null, { reason: "conversion error" });
}
function to(e, t, n) {
  const r = e.getAngle(t);
  if (t === W.quadrant && n === w.degrees_minutes_seconds) {
    const a = At.secondsToDMS(r.extractAngularUnits(w.seconds));
    return [Dt(e.getMeridian(t), "SHORT"), a.m_degrees, a.m_minutes, a.m_seconds, Dt(e.getDirection(t), "SHORT")];
  }
  if (n === w.degrees_minutes_seconds) {
    const a = At.secondsToDMS(r.extractAngularUnits(w.seconds));
    return [a.m_degrees, a.m_minutes, a.m_seconds];
  }
  return t === W.quadrant ? [Dt(e.getMeridian(t), "SHORT"), r.extractAngularUnits(n), Dt(e.getDirection(t), "SHORT")] : [r.extractAngularUnits(n)];
}
function no(e, t) {
  let n = "";
  switch (e) {
    case w.decimal_degrees:
      n = t === W.quadrant ? "DD.DD" + Pt : "DDD.DD" + Pt;
      break;
    case w.degrees_minutes_seconds:
      n = t === W.quadrant ? "dd" + Pt + ` mm' ss"` : "ddd" + Pt + ` mm' ss.ss"`;
      break;
    case w.radians:
      n = "R.RR";
      break;
    case w.gradians:
      n = "GGG.GG" + na;
      break;
    default:
      throw new h(null, c.LogicError, null, { reason: "conversion error" });
  }
  return t === W.quadrant && (n = "p " + n + " b"), n;
}
function er(e, t, n) {
  const r = { padding: 0, rounding: 0, newpos: t };
  let a = !1;
  for (; t < e.length; ) {
    const o = e[t];
    if (o === n) a ? r.rounding++ : r.padding++, t++;
    else {
      if (o !== ".") break;
      a = !0, t++;
    }
  }
  return r.newpos = t - 1, r;
}
function ro(e, t, n) {
  const r = { escaped: "", newpos: t };
  for (t++; t < e.length; ) {
    const a = e[t];
    if (t++, a === "]") break;
    r.escaped += a;
  }
  return r.newpos = t - 1, r;
}
function io(e, t, n) {
  let r = "", a = null, o = null;
  const s = Hs.createFromStringAndBearing(t, e, n), i = { D: w.decimal_degrees, d: w.truncated_degrees, m: w.fractional_degree_minutes, s: w.fractional_minute_seconds, R: w.radians, G: w.gradians };
  for (let u = 0; u < t.length; u++) {
    const l = t[u];
    switch (l) {
      case "[":
        a = ro(t, u), r += a.escaped, u = a.newpos;
        continue;
      case "D":
      case "d":
      case "m":
      case "s":
      case "R":
      case "G":
        a = er(t, u, l), o = e.getAngle(n), r += Ws(o, i[l], a.padding, a.rounding, s), u = a.newpos;
        continue;
      case "P":
      case "p":
        r += Dt(s.fetchMeridian(), l === "p" ? "SHORT" : "LONG");
        continue;
      case "B":
      case "b":
        r += Dt(s.fetchDirection(), l === "b" ? "SHORT" : "LONG");
        continue;
      default:
        r += l;
    }
  }
  return r;
}
function ao(e, t, n) {
  if (!(t instanceof B)) throw new h(null, c.InvalidParameter, null);
  if (t.hasField("directionType") === !1) throw new h(null, c.LogicError, null, { reason: "missing directionType" });
  if (t.hasField("angleType") === !1) throw new h(null, c.LogicError, null, { reason: "missing angleType" });
  const r = Vr($t(t.field("directiontype"))), a = Qs(e, Hr($t(t.field("angletype"))), r);
  if (!(n instanceof B)) throw new h(null, c.InvalidParameter, null);
  if (n.hasField("directionType") === !1) throw new h(null, c.LogicError, null, { reason: "missing directionType" });
  if (n.hasField("outputType") === !1) throw new h(null, c.LogicError, null, { reason: "missing angleType" });
  const o = Vr($t(n.field("directiontype"))), s = n.hasField("angleType") ? Hr($t(n.field("angletype"))) : null, i = $t(n.field("outputType")).toUpperCase().trim();
  if (!o || !i) throw new h(null, c.LogicError, null, { reason: "conversion error" });
  if (!(s || i === "TEXT" && n.hasField("format"))) throw new h(null, c.LogicError, null, { reason: "invalid unit" });
  switch (i) {
    case "VALUE":
      return o === W.quadrant || s === w.degrees_minutes_seconds ? to(a, o, s) : eo(a, o, s);
    case "TEXT": {
      let u = "";
      return n.hasField("format") && (u = F(n.field("format"))), u !== null && u !== "" || (u = no(s, o)), io(a, u, o);
    }
    default:
      throw new h(null, c.InvalidParameter, null);
  }
}
const pt = 2654435761, mt = 2246822519, en = 3266489917, Yr = 668265263, Xr = 374761393;
function Qr(e) {
  const t = [];
  for (let n = 0, r = e.length; n < r; n++) {
    let a = e.charCodeAt(n);
    a < 128 ? t.push(a) : a < 2048 ? t.push(192 | a >> 6, 128 | 63 & a) : a < 55296 || a >= 57344 ? t.push(224 | a >> 12, 128 | a >> 6 & 63, 128 | 63 & a) : (n++, a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(n)), t.push(240 | a >> 18, 128 | a >> 12 & 63, 128 | a >> 6 & 63, 128 | 63 & a));
  }
  return new Uint8Array(t);
}
let so = class {
  constructor(t) {
    this._seed = t, this._totallen = 0, this._bufs = [], this.init();
  }
  init() {
    return this._bufs = [], this._totallen = 0, this;
  }
  updateFloatArray(t) {
    const n = [];
    for (const r of t) isNaN(r) ? n.push("NaN") : r === 1 / 0 ? n.push("Infinity") : r === -1 / 0 ? n.push("-Infinity") : r === 0 ? n.push("0") : n.push(r.toString(16));
    this.update(Qr(n.join("")));
  }
  updateIntArray(t) {
    const n = Int32Array.from(t);
    this.update(new Uint8Array(n.buffer));
  }
  updateUint8Array(t) {
    this.update(Uint8Array.from(t));
  }
  updateWithString(t) {
    return this.update(Qr(t));
  }
  update(t) {
    return this._bufs.push(t), this._totallen += t.length, this;
  }
  digest() {
    const t = new Uint8Array(this._totallen);
    let n = 0;
    for (const r of this._bufs) t.set(r, n), n += r.length;
    return this.init(), this._xxHash32(t, this._seed);
  }
  _xxHash32(t, n = 0) {
    const r = t;
    let a = n + Xr & 4294967295, o = 0;
    if (r.length >= 16) {
      const i = [n + pt + mt & 4294967295, n + mt & 4294967295, n + 0 & 4294967295, n - pt & 4294967295], u = t, l = u.length - 16;
      let f = 0;
      for (o = 0; (4294967280 & o) <= l; o += 4) {
        const d = o, m = u[d] + (u[d + 1] << 8), g = u[d + 2] + (u[d + 3] << 8), y = m * mt + (g * mt << 16);
        let k = i[f] + y & 4294967295;
        k = k << 13 | k >>> 19;
        const b = 65535 & k, U = k >>> 16;
        i[f] = b * pt + (U * pt << 16) & 4294967295, f = f + 1 & 3;
      }
      a = (i[0] << 1 | i[0] >>> 31) + (i[1] << 7 | i[1] >>> 25) + (i[2] << 12 | i[2] >>> 20) + (i[3] << 18 | i[3] >>> 14) & 4294967295;
    }
    a = a + t.length & 4294967295;
    const s = t.length - 4;
    for (; o <= s; o += 4) {
      const i = o, u = r[i] + (r[i + 1] << 8), l = r[i + 2] + (r[i + 3] << 8);
      a = a + (u * en + (l * en << 16)) & 4294967295, a = a << 17 | a >>> 15, a = (65535 & a) * Yr + ((a >>> 16) * Yr << 16) & 4294967295;
    }
    for (; o < r.length; ++o)
      a += r[o] * Xr, a = a << 11 | a >>> 21, a = (65535 & a) * pt + ((a >>> 16) * pt << 16) & 4294967295;
    return a ^= a >>> 15, a = ((65535 & a) * mt & 4294967295) + ((a >>> 16) * mt << 16), a ^= a >>> 13, a = ((65535 & a) * en & 4294967295) + ((a >>> 16) * en << 16), a ^= a >>> 16, a < 0 ? a + 4294967296 : a;
  }
};
function oo(e) {
  return e.loadStatus === "loaded" && e.user?.sourceJSON ? e.user.sourceJSON : null;
}
function uo(e, t) {
  return !!e && Ua(e, t?.restUrl || "");
}
function ei(e, t) {
  if (!e || !t) return e === t;
  if (e.x === t.x && e.y === t.y) {
    if (e.hasZ) {
      if (e.z !== t.z) return !1;
    } else if (t.hasZ) return !1;
    if (e.hasM) {
      if (e.m !== t.m) return !1;
    } else if (t.hasM) return !1;
    return !0;
  }
  return !1;
}
function ve(e, t, n) {
  if (e !== null) if (T(e)) {
    if (t.updateUint8Array([61]), n.map.has(e)) {
      const r = n.map.get(e);
      t.updateIntArray([61237541 ^ r]);
    } else {
      n.map.set(e, n.currentLength++);
      for (const r of e) ve(r, t, n);
      n.map.delete(e), n.currentLength--;
    }
    t.updateUint8Array([199]);
  } else if (_(e)) {
    if (t.updateUint8Array([61]), n.map.has(e)) {
      const r = n.map.get(e);
      t.updateIntArray([61237541 ^ r]);
    } else {
      n.map.set(e, n.currentLength++);
      for (const r of e.toArray()) ve(r, t, n);
      n.map.delete(e), n.currentLength--;
    }
    t.updateUint8Array([199]);
  } else {
    if (H(e)) return t.updateIntArray([e.toNumber()]), void t.updateUint8Array([241]);
    if (O(e)) return t.updateIntArray([e.toNumber()]), void t.updateIntArray([257]);
    if (G(e)) return t.updateIntArray([e.toNumber()]), void t.updateIntArray([263]);
    if (x(e)) return t.updateIntArray([e.length]), t.updateWithString(e), void t.updateUint8Array([41]);
    if (J(e)) t.updateUint8Array([e === !0 ? 1 : 0, 113]);
    else {
      if (L(e)) return t.updateFloatArray([e]), void t.updateUint8Array([173]);
      if (e instanceof Ls) throw new h(n.context, c.UnsupportedHashType, n.node);
      if (e instanceof Kn) throw new h(n.context, c.UnsupportedHashType, n.node);
      if (!(e instanceof B)) {
        if (X(e)) throw new h(n.context, c.UnsupportedHashType, n.node);
        if (e instanceof j) return t.updateIntArray([3833836621]), t.updateIntArray([0]), t.updateFloatArray([e.x]), t.updateIntArray([1]), t.updateFloatArray([e.y]), e.hasZ && (t.updateIntArray([2]), t.updateFloatArray([e.z])), e.hasM && (t.updateIntArray([3]), t.updateFloatArray([e.m])), t.updateIntArray([3765347959]), void ve(e.spatialReference.wkid, t, n);
        if (e instanceof ie) {
          t.updateIntArray([1266616829]);
          for (let r = 0; r < e.rings.length; r++) {
            const a = e.rings[r], o = [];
            let s = null, i = null;
            for (let u = 0; u < a.length; u++) {
              const l = e.getPoint(r, u);
              if (u === 0) s = l;
              else if (ei(i, l)) continue;
              i = l, u === a.length - 1 && ei(s, l) || o.push(l);
            }
            t.updateIntArray([1397116793, o.length]);
            for (let u = 0; u < o.length; u++) {
              const l = o[u];
              t.updateIntArray([3962308117, u]), ve(l, t, n), t.updateIntArray([2716288009]);
            }
            t.updateIntArray([2278822459]);
          }
          return t.updateIntArray([3878477243]), void ve(e.spatialReference.wkid, t, n);
        }
        if (e instanceof te) {
          t.updateIntArray([4106883559]);
          for (let r = 0; r < e.paths.length; r++) {
            const a = e.paths[r];
            t.updateIntArray([1397116793, a.length]);
            for (let o = 0; o < a.length; o++) t.updateIntArray([3962308117, o]), ve(e.getPoint(r, o), t, n), t.updateIntArray([2716288009]);
            t.updateIntArray([2278822459]);
          }
          return t.updateIntArray([2568784753]), void ve(e.spatialReference.wkid, t, n);
        }
        if (e instanceof Se) {
          t.updateIntArray([588535921, e.points.length]);
          for (let r = 0; r < e.points.length; r++) {
            const a = e.getPoint(r);
            t.updateIntArray([r]), ve(a, t, n);
          }
          return t.updateIntArray([1700171621]), void ve(e.spatialReference.wkid, t, n);
        }
        if (e instanceof ye) return t.updateIntArray([3483648373]), t.updateIntArray([0]), t.updateFloatArray([e.xmax]), t.updateIntArray([1]), t.updateFloatArray([e.xmin]), t.updateIntArray([2]), t.updateFloatArray([e.ymax]), t.updateIntArray([3]), t.updateFloatArray([e.ymin]), e.hasZ && (t.updateIntArray([4]), t.updateFloatArray([e.zmax]), t.updateIntArray([5]), t.updateFloatArray([e.zmin])), e.hasM && (t.updateIntArray([6]), t.updateFloatArray([e.mmax]), t.updateIntArray([7]), t.updateFloatArray([e.mmin])), t.updateIntArray([3622027469]), void ve(e.spatialReference.wkid, t, n);
        if (e instanceof vt) return t.updateIntArray([14]), e.wkid !== void 0 && e.wkid !== null && t.updateIntArray([e.wkid]), e.wkt && t.updateWithString(e.wkt), void (e.wkt2 && t.updateWithString(e.wkt2));
        throw Q(e) ? new h(n.context, c.UnsupportedHashType, n.node) : kt(e) ? new h(n.context, c.UnsupportedHashType, n.node) : Ht(e) ? new h(n.context, c.UnsupportedHashType, n.node) : e === C ? new h(n.context, c.UnsupportedHashType, n.node) : new h(n.context, c.UnsupportedHashType, n.node);
      }
      if (t.updateUint8Array([223]), n.map.has(e)) {
        const r = n.map.get(e);
        t.updateIntArray([61237541 ^ r]);
      } else {
        n.map.set(e, n.currentLength++);
        for (const r of e.keys())
          t.updateIntArray([r.length]), t.updateWithString(r), t.updateUint8Array([251]), ve(e.field(r), t, n), t.updateUint8Array([239]);
        n.map.delete(e), n.currentLength--;
      }
      t.updateUint8Array([73]);
    }
  }
  else t.updateUint8Array([0, 139]);
}
function ia(e, t) {
  e.portal = function(n, r) {
    return t(n, r, (a, o, s) => (D(s, 1, 1, n, r), new Kn(F(s[0]))));
  }, e.typeof = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = hr(s[0]);
      if (i === "Unrecognized Type") throw new h(n, c.UnrecognizedType, r);
      return i;
    });
  }, e.trim = function(n, r) {
    return t(n, r, (a, o, s) => (D(s, 1, 1, n, r), F(s[0]).trim()));
  }, e.tohex = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = p(s[0]);
      return isNaN(i) ? i : i.toString(16);
    });
  }, e.upper = function(n, r) {
    return t(n, r, (a, o, s) => (D(s, 1, 1, n, r), F(s[0]).toUpperCase()));
  }, e.proper = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 2, n, r);
      let i = 1;
      s.length === 2 && F(s[1]).toLowerCase() === "firstword" && (i = 2);
      const u = /\s/, l = F(s[0]);
      let f = "", d = !0;
      for (let m = 0; m < l.length; m++) {
        let g = l[m];
        u.test(g) ? i === 1 && (d = !0) : g.toUpperCase() !== g.toLowerCase() && (d ? (g = g.toUpperCase(), d = !1) : g = g.toLowerCase()), f += g;
      }
      return f;
    });
  }, e.lower = function(n, r) {
    return t(n, r, (a, o, s) => (D(s, 1, 1, n, r), F(s[0]).toLowerCase()));
  }, e.guid = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 0, 1, n, r), s.length > 0) switch (F(s[0]).toLowerCase()) {
        case "digits":
          return Nt().replace("-", "").replace("-", "").replace("-", "").replace("-", "");
        case "digits-hyphen":
          return Nt();
        case "digits-hyphen-braces":
          return "{" + Nt() + "}";
        case "digits-hyphen-parentheses":
          return "(" + Nt() + ")";
      }
      return "{" + Nt() + "}";
    });
  }, e.standardizeguid = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 2, 2, n, r);
      let i = F(s[0]);
      if (i === "" || i === null) return "";
      const u = /^(\{|\()?(?<partA>[0-9a-z]{8})(-?)(?<partB>[0-9a-z]{4})(-?)(?<partC>[0-9a-z]{4})(-?)(?<partD>[0-9a-z]{4})(-?)(?<partE>[0-9a-z]{12})(\}|\))?$/gim.exec(i);
      if (!u) return "";
      const l = u.groups;
      switch (i = l.partA + "-" + l.partB + "-" + l.partC + "-" + l.partD + "-" + l.partE, F(s[1]).toLowerCase()) {
        case "digits":
          return i.replace("-", "").replace("-", "").replace("-", "").replace("-", "");
        case "digits-hyphen":
          return i;
        case "digits-hyphen-braces":
          return "{" + i + "}";
        case "digits-hyphen-parentheses":
          return "(" + i + ")";
      }
      return "{" + i + "}";
    });
  }, e.console = function(n, r) {
    return t(n, r, (a, o, s) => (s.length === 0 || (s.length === 1 ? n.console(F(s[0])) : n.console(F(s))), C));
  }, e.mid = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 2, 3, n, r);
      let i = p(s[1]);
      if (isNaN(i)) return "";
      if (i < 0 && (i = 0), s.length === 2) return F(s[0]).substr(i);
      let u = p(s[2]);
      return isNaN(u) ? "" : (u < 0 && (u = 0), F(s[0]).substr(i, u));
    });
  }, e.find = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 2, 3, n, r);
      let i = 0;
      if (s.length > 2) {
        if (i = p(R(s[2], 0)), isNaN(i)) return -1;
        i < 0 && (i = 0);
      }
      return F(s[1]).indexOf(F(s[0]), i);
    });
  }, e.left = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 2, 2, n, r);
      let i = p(s[1]);
      return isNaN(i) ? "" : (i < 0 && (i = 0), F(s[0]).substr(0, i));
    });
  }, e.right = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 2, 2, n, r);
      let i = p(s[1]);
      return isNaN(i) ? "" : (i < 0 && (i = 0), F(s[0]).substr(-1 * i, i));
    });
  }, e.split = function(n, r) {
    return t(n, r, (a, o, s) => {
      let i;
      D(s, 2, 4, n, r);
      let u = p(R(s[2], -1));
      const l = xt(R(s[3], !1));
      if (u === -1 || u === null || l === !0 ? i = F(s[0]).split(F(s[1])) : (isNaN(u) && (u = -1), u < -1 && (u = -1), i = F(s[0]).split(F(s[1]), u)), l === !1) return i;
      const f = [];
      for (let d = 0; d < i.length && !(u !== -1 && f.length >= u); d++) i[d] !== "" && i[d] !== void 0 && f.push(i[d]);
      return f;
    });
  }, e.text = function(n, r) {
    return t(n, r, (a, o, s) => (D(s, 1, 2, n, r), Ae(s[0], s[1])));
  }, e.concatenate = function(n, r) {
    return t(n, r, (a, o, s) => {
      const i = [];
      if (s.length < 1) return "";
      if (T(s[0])) {
        const u = R(s[2], "");
        for (let l = 0; l < s[0].length; l++) i[l] = Ae(s[0][l], u);
        return s.length > 1 ? i.join(s[1]) : i.join("");
      }
      if (_(s[0])) {
        const u = R(s[2], "");
        for (let l = 0; l < s[0].length(); l++) i[l] = Ae(s[0].get(l), u);
        return s.length > 1 ? i.join(s[1]) : i.join("");
      }
      for (let u = 0; u < s.length; u++) i[u] = Ae(s[u]);
      return i.join("");
    });
  }, e.reverse = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 1, n, r), T(s[0])) {
        const i = s[0].slice(0);
        return i.reverse(), i;
      }
      if (_(s[0])) {
        const i = s[0].toArray().slice(0);
        return i.reverse(), i;
      }
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.replace = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 3, 4, n, r);
      const i = F(s[0]), u = F(s[1]), l = F(s[2]);
      return s.length !== 4 || xt(s[3]) ? et(i, u, l) : i.replace(u, l);
    });
  }, e.schema = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (X(s[0])) {
        const i = _i(s[0]);
        return i ? B.convertObjectToArcadeDictionary(i, M(n)) : null;
      }
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.subtypes = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 1, n, r), X(s[0])) {
        const i = nn(s[0]);
        return i ? B.convertObjectToArcadeDictionary(i, M(n)) : null;
      }
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.subtypecode = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 1, n, r), X(s[0])) {
        const i = nn(s[0]);
        if (!i) return null;
        if (i.subtypeField && s[0].hasField(i.subtypeField)) {
          const u = s[0].field(i.subtypeField);
          for (const l of i.subtypes) if (l.code === u) return l.code;
          return null;
        }
        return null;
      }
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.subtypename = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 1, n, r), X(s[0])) {
        const i = nn(s[0]);
        if (!i) return "";
        if (i.subtypeField && s[0].hasField(i.subtypeField)) {
          const u = s[0].field(i.subtypeField);
          for (const l of i.subtypes) if (l.code === u) return l.name;
          return "";
        }
        return "";
      }
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.gdbversion = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 1, n, r), X(s[0])) return s[0].gdbVersion();
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.domain = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 2, 3, n, r), X(s[0])) {
        const i = Ni(s[0], F(s[1]), s[2] === void 0 ? void 0 : s[2]);
        return i && i.domain ? i.domain.type === "coded-value" || i.domain.type === "codedValue" ? B.convertObjectToArcadeDictionary({ type: "codedValue", name: i.domain.name, dataType: _r[i.field.type], codedValues: i.domain.codedValues.map((u) => ({ name: u.name, code: u.code })) }, M(n)) : B.convertObjectToArcadeDictionary({ type: "range", name: i.domain.name, dataType: _r[i.field.type], min: i.domain.minValue, max: i.domain.maxValue }, M(n)) : null;
      }
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.domainname = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 2, 4, n, r), X(s[0])) return Mi(s[0], F(s[1]), s[2], s[3] === void 0 ? void 0 : s[3]);
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.domaincode = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 2, 4, n, r), X(s[0])) return $i(s[0], F(s[1]), s[2], s[3] === void 0 ? void 0 : s[3]);
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.urlencode = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 1, n, r), s[0] === null) return "";
      if (s[0] instanceof B) {
        let i = "";
        for (const u of s[0].keys()) {
          const l = s[0].field(u);
          i !== "" && (i += "&"), i += l === null ? encodeURIComponent(u) + "=" : encodeURIComponent(u) + "=" + encodeURIComponent(l);
        }
        return i;
      }
      return encodeURIComponent(F(s[0]));
    });
  }, e.hash = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 1, n, r);
      const i = new so(0);
      return ve(s[0], i, { context: n, node: r, map: /* @__PURE__ */ new Map(), currentLength: 0 }), i.digest();
    });
  }, e.convertdirection = function(n, r) {
    return t(n, r, (a, o, s) => (D(s, 3, 3, n, r), ao(s[0], s[1], s[2])));
  }, e.fromjson = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (D(s, 1, 1, n, r), x(s[0]) === !1) throw new h(n, c.InvalidParameter, r);
      return B.convertJsonToArcade(JSON.parse(F(s[0])), M(n));
    });
  }, e.expects = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (s.length < 1) throw new h(n, c.WrongNumberOfParameters, r);
      return C;
    });
  }, e.tocharcode = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 2, n, r);
      const i = p(R(s[1], 0)), u = F(s[0]);
      if (u.length === 0 && s.length === 1) return null;
      if (u.length <= i || i < 0) throw new h(n, c.OutOfBounds, r);
      return u.charCodeAt(i);
    });
  }, e.tocodepoint = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 1, 2, n, r);
      const i = p(R(s[1], 0)), u = F(s[0]);
      if (u.length === 0 && s.length === 1) return null;
      if (u.length <= i || i < 0) throw new h(n, c.OutOfBounds, r);
      return u.codePointAt(i);
    });
  }, e.fromcharcode = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (s.length < 1) throw new h(n, c.WrongNumberOfParameters, r);
      const i = s.map((u) => Math.trunc(p(u))).filter((u) => u >= 0 && u <= 65535);
      return i.length === 0 ? null : String.fromCharCode.apply(null, i);
    });
  }, e.fromcodepoint = function(n, r) {
    return t(n, r, (a, o, s) => {
      if (s.length < 1) throw new h(n, c.WrongNumberOfParameters, r);
      let i;
      try {
        i = s.map((u) => Math.trunc(p(u))).filter((u) => u <= 1114111 && u >>> 0 === u);
      } catch {
        return null;
      }
      return i.length === 0 ? null : String.fromCodePoint.apply(null, i);
    });
  }, e.getuser = function(n, r) {
    return t(n, r, (a, o, s) => {
      D(s, 0, 2, n, r);
      let i = R(s[1], "");
      if (i = i === !0 || i === !1 ? "" : F(i), i !== null && i !== "") return null;
      if (s.length === 0 || s[0] instanceof Kn) {
        let u = null;
        if (u = n.services?.portal ? n.services.portal : ur.getDefault(), s.length > 0 && !uo(s[0].field("url"), u) || !u) return null;
        if (i === "") {
          const l = oo(u);
          if (l) {
            const f = JSON.parse(JSON.stringify(l));
            for (const d of ["lastLogin", "created", "modified"]) f[d] !== void 0 && f[d] !== null && (f[d] = new Date(f[d]));
            return B.convertObjectToArcadeDictionary(f, M(n));
          }
        }
        return null;
      }
      throw new h(n, c.InvalidParameter, r);
    });
  }, e.getenvironment = function(n, r) {
    return t(n, r, (a, o, s) => (D(s, 0, 0, n, r), B.convertObjectToArcadeDictionary(Ri(M(n), n.spatialReference), M(n), !0)));
  };
}
let lo = class extends ot {
  constructor(t, n) {
    super(), this.paramCount = n, this.fn = t;
  }
  createFunction(t) {
    return (...n) => {
      if (n.length !== this.paramCount) throw new h(t, c.WrongNumberOfParameters, null);
      return this.fn(...n);
    };
  }
  call(t, n) {
    return this.fn(...n.arguments);
  }
  marshalledCall(t, n, r, a) {
    return a(t, n, (o, s, i) => {
      i = i.map((l) => !Q(l) || l instanceof qe ? l : yt(l, t, a));
      const u = this.call(r, { arguments: i });
      return Xe(u) ? u.then((l) => yt(l, r, a)) : u;
    });
  }
};
function Ce(e, t, n) {
  try {
    return n(e, null, t.arguments);
  } catch (r) {
    throw r;
  }
}
function E(e, t) {
  try {
    switch (t.type) {
      case "EmptyStatement":
        return "lc.voidOperation";
      case "VariableDeclarator":
        return bo(e, t);
      case "VariableDeclaration":
        return Ao(e, t);
      case "BlockStatement":
      case "Program":
        return tr(e, t);
      case "FunctionDeclaration":
        return Co(e, t);
      case "ImportDeclaration":
        return xo(e, t);
      case "ExportNamedDeclaration":
        return Fo(e, t);
      case "ReturnStatement":
        return wo(e, t);
      case "IfStatement":
        return aa(e, t);
      case "ExpressionStatement":
        return yo(e, t);
      case "AssignmentExpression":
        return go(e, t);
      case "UpdateExpression":
        return mo(e, t);
      case "BreakStatement":
        return "break";
      case "ContinueStatement":
        return "continue";
      case "TemplateLiteral":
        return Io(e, t);
      case "TemplateElement":
        return JSON.stringify(t.value ? t.value.cooked : "");
      case "ForStatement":
        return po(e, t);
      case "ForInStatement":
        return fo(e, t);
      case "WhileStatement":
        return Do(e, t);
      case "Identifier":
        return Bo(e, t);
      case "MemberExpression":
        return Eo(e, t);
      case "Literal":
        return t.value === null || t.value === void 0 ? "null" : JSON.stringify(t.value);
      case "CallExpression":
        return No(e, t);
      case "UnaryExpression":
        return vo(e, t);
      case "BinaryExpression":
        return ko(e, t);
      case "LogicalExpression":
        return To(e, t);
      case "ArrayExpression":
        return So(e, t);
      case "ObjectExpression":
        return co(e, t);
      case "Property":
        return ho(e, t);
      case "Array":
        throw new he(e, c.NeverReach, t);
      default:
        throw new he(e, c.Unrecognized, t);
    }
  } catch (n) {
    throw n;
  }
}
function co(e, t) {
  let n = "lang.dictionary([";
  for (let r = 0; r < t.properties.length; r++) {
    const a = t.properties[r];
    be(a.key.name), r > 0 && (n += ","), n += "lang.strCheck(" + (a.key.type === "Identifier" ? "'" + a.key.name + "'" : E(e, a.key)) + ",'ObjectExpression'),lang.aCheck(" + E(e, a.value) + ", 'ObjectExpression')";
  }
  return n += "])", n;
}
function ho(e, t) {
  throw new he(e, c.NeverReach, t);
}
function fo(e, t) {
  const n = Ie(e), r = Ie(e), a = Ie(e);
  let o = "var " + n + " = " + E(e, t.right) + `;
`;
  t.left.type === "VariableDeclaration" && (o += E(e, t.left));
  let s = t.left.type === "VariableDeclaration" ? t.left.declarations[0].id.name : t.left.name;
  s = s.toLowerCase(), be(s);
  let i = "";
  e.localScope !== null && (e.localScope[s] !== void 0 ? i = "lscope['" + s + "']" : e.localScope._SymbolsMap[s] !== void 0 && (i = "lscope['" + e.localScope._SymbolsMap[s] + "']"));
  let u = "";
  if (i === "") {
    if (e.globalScope[s] !== void 0) i = "gscope['" + s + "']";
    else if (e.globalScope._SymbolsMap[s] !== void 0) i = "gscope['" + e.globalScope._SymbolsMap[s] + "']";
    else if (e.localScope !== null) if (e.undeclaredGlobalsInFunctions.has(s)) i = "gscope['" + e.undeclaredGlobalsInFunctions.get(s).manglename + "']", u = e.undeclaredGlobalsInFunctions.get(s).manglename;
    else {
      const l = { manglename: _e(e), node: t.left };
      e.undeclaredGlobalsInFunctions.set(s, l), i = "gscope['" + l.manglename + "']", u = l.manglename;
    }
  }
  return u && (o += "lang.chkAssig('" + u + `',runtimeCtx); 
`), o += "if (" + n + `===null) {  lastStatement = lc.voidOperation; }
 `, o += "else if (lc.isArray(" + n + ") || lc.isString(" + n + ")) {", o += "var " + r + "=" + n + `.length; 
`, o += "for(var " + a + "=0; " + a + "<" + r + "; " + a + `++) {
`, o += i + "=" + a + `;
`, o += E(e, t.body), o += `
}
`, o += ` lastStatement = lc.voidOperation; 
`, o += ` 
}
`, o += "else if (lc.isImmutableArray(" + n + ")) {", o += "var " + r + "=" + n + `.length(); 
`, o += "for(var " + a + "=0; " + a + "<" + r + "; " + a + `++) {
`, o += i + "=" + a + `;
`, o += E(e, t.body), o += `
}
`, o += ` lastStatement = lc.voidOperation; 
`, o += ` 
}
`, o += "else if (( " + n + " instanceof lang.Dictionary) || ( " + n + " instanceof lang.Feature)) {", o += "var " + r + "=" + n + `.keys(); 
`, o += "for(var " + a + "=0; " + a + "<" + r + ".length; " + a + `++) {
`, o += i + "=" + r + "[" + a + `];
`, o += E(e, t.body), o += `
}
`, o += ` lastStatement = lc.voidOperation; 
`, o += ` 
}
`, e.isAsync && (o += "else if (lc.isFeatureSet(" + n + ")) {", o += "var " + r + "=" + n + `.iterator(runtimeCtx.abortSignal); 
`, o += "for(var " + a + "=lang. graphicToFeature( yield " + r + ".next()," + n + ", runtimeCtx); " + a + "!=null; " + a + "=lang. graphicToFeature( yield " + r + ".next()," + n + `, runtimeCtx)) {
`, o += i + "=" + a + `;
`, o += E(e, t.body), o += `
}
`, o += ` lastStatement = lc.voidOperation; 
`, o += ` 
}
`), o += `else { lastStatement = lc.voidOperation; } 
`, o;
}
function po(e, t) {
  let n = `lastStatement = lc.voidOperation; 
`;
  t.init !== null && (n += E(e, t.init) + "; ");
  const r = Ie(e), a = Ie(e);
  return n += "var " + r + " = true; ", n += `
 do { `, t.update !== null && (n += " if (" + r + `===false) {
 ` + E(e, t.update) + `  
}
 ` + r + `=false; 
`), t.test !== null && (n += "var " + a + " = " + E(e, t.test) + "; ", n += "if (" + a + "===false) { break; } else if (" + a + "!==true) { lang.error('" + c.BooleanConditionRequired + `');   }
`), n += E(e, t.body), t.update !== null && (n += `
 ` + E(e, t.update)), n += `
` + r + ` = true; 
} while(true);  lastStatement = lc.voidOperation; `, n;
}
function mo(e, t) {
  let n = null, r = "";
  if (t.argument.type === "MemberExpression") return n = E(e, t.argument.object), t.argument.computed === !0 ? r = E(e, t.argument.property) : (r = "'" + t.argument.property.name + "'", be(t.argument.property.name)), "lang.memberupdate(" + n + "," + r + ",'" + t.operator + "'," + t.prefix + ")";
  if (n = t.argument.name.toLowerCase(), be(n), e.localScope !== null) {
    if (e.localScope[n] !== void 0) return "lang.update(lscope, '" + n + "','" + t.operator + "'," + t.prefix + ")";
    if (e.localScope._SymbolsMap[n] !== void 0) return "lang.update(lscope, '" + e.localScope._SymbolsMap[n] + "','" + t.operator + "'," + t.prefix + ")";
  }
  if (e.globalScope[n] !== void 0) return "lang.update(gscope, '" + n + "','" + t.operator + "'," + t.prefix + ")";
  if (e.globalScope._SymbolsMap[n] !== void 0) return "lang.update(gscope, '" + e.globalScope._SymbolsMap[n] + "','" + t.operator + "'," + t.prefix + ")";
  if (e.localScope !== null) {
    if (e.undeclaredGlobalsInFunctions.has(n)) return "lang.update(gscope,lang.chkAssig( '" + e.undeclaredGlobalsInFunctions.get(n).manglename + "',runtimeCtx),'" + t.operator + "'," + t.prefix + ")";
    const a = { manglename: _e(e), node: t.argument };
    return e.undeclaredGlobalsInFunctions.set(n, a), "lang.update(gscope, lang.chkAssig('" + a.manglename + "',runtimeCtx),'" + t.operator + "'," + t.prefix + ")";
  }
  throw new h(e, c.InvalidIdentifier, t);
}
function Do(e, t) {
  let n = `lastStatement = lc.voidOperation; 
`;
  const r = Ie(e);
  return n += `
  var ${r} = true;
    do {
      ${r} = ${E(e, t.test)};
      if (${r}==false) {
        break;
      }
      if (${r}!==true) {
        lang.error('${c.BooleanConditionRequired}');
      }
      ${E(e, t.body)}
    }
    while (${r} !== false);
    lastStatement = lc.voidOperation;
  `, n;
}
function go(e, t) {
  const n = E(e, t.right);
  let r = null, a = "";
  if (t.left.type === "MemberExpression") return r = E(e, t.left.object), t.left.computed === !0 ? a = E(e, t.left.property) : (a = "'" + t.left.property.name + "'", be(t.left.property.name)), "lang.assignmember(" + r + "," + a + ",'" + t.operator + "'," + n + ")";
  if (r = t.left.name.toLowerCase(), be(r), e.localScope !== null) {
    if (e.localScope[r] !== void 0) return "lscope['" + r + "']=lang.assign(" + n + ",'" + t.operator + "', lscope['" + r + "'])";
    if (e.localScope._SymbolsMap[r] !== void 0) return "lscope['" + e.localScope._SymbolsMap[r] + "']=lang.assign(" + n + ",'" + t.operator + "', lscope['" + e.localScope._SymbolsMap[r] + "'])";
  }
  if (e.globalScope[r] !== void 0) return "gscope['" + r + "']=lang.assign(" + n + ",'" + t.operator + "', gscope['" + r + "'])";
  if (e.globalScope._SymbolsMap[r] !== void 0) return "gscope['" + e.globalScope._SymbolsMap[r] + "']=lang.assign(" + n + ",'" + t.operator + "', gscope['" + e.globalScope._SymbolsMap[r] + "'])";
  if (e.localScope !== null) {
    if (e.undeclaredGlobalsInFunctions.has(r)) return "gscope[lang.chkAssig('" + e.undeclaredGlobalsInFunctions.get(r).manglename + "',runtimeCtx)]=lang.assign(" + n + ",'" + t.operator + "', gscope['" + e.undeclaredGlobalsInFunctions.get(r).manglename + "'])";
    const o = { manglename: _e(e), node: t.argument };
    return e.undeclaredGlobalsInFunctions.set(r, o), "gscope[lang.chkAssig('" + o.manglename + "',runtimeCtx)]=lang.assign(" + n + ",'" + t.operator + "', gscope['" + o.manglename + "'])";
  }
  throw new h(e, c.InvalidIdentifier, t);
}
function yo(e, t) {
  return t.expression.type === "AssignmentExpression" ? "lastStatement = lc.voidOperation; " + E(e, t.expression) + `; 
 ` : (t.expression.type, "lastStatement = " + E(e, t.expression) + "; ");
}
function ti(e, t) {
  return t.type === "BlockStatement" ? E(e, t) : t.type === "ReturnStatement" || t.type === "BreakStatement" || t.type === "ContinueStatement" ? E(e, t) + "; " : t.type === "UpdateExpression" ? "lastStatement = " + E(e, t) + "; " : t.type === "ExpressionStatement" ? E(e, t) : t.type === "ObjectExpression" ? "lastStatement = " + E(e, t) + "; " : E(e, t) + "; ";
}
function aa(e, t) {
  if (t.test.type === "AssignmentExpression" || t.test.type === "UpdateExpression") throw new he(e, c.BooleanConditionRequired, t);
  return `if (lang.mustBoolean(${E(e, t.test)}, runtimeCtx) === true) {
    ${ti(e, t.consequent)}
  } ` + (t.alternate !== null ? t.alternate.type === "IfStatement" ? " else " + aa(e, t.alternate) : ` else {
      ${ti(e, t.alternate)}
    }
` : ` else {
      lastStatement = lc.voidOperation;
    }
`);
}
function tr(e, t) {
  let n = "";
  for (let r = 0; r < t.body.length; r++) t.body[r].type !== "EmptyStatement" && (t.body[r].type === "ReturnStatement" || t.body[r].type === "BreakStatement" || t.body[r].type === "ContinueStatement" ? n += E(e, t.body[r]) + `; 
` : t.body[r].type === "UpdateExpression" || t.body[r].type === "ObjectExpression" ? n += "lastStatement = " + E(e, t.body[r]) + `; 
` : n += E(e, t.body[r]) + ` 
`);
  return n;
}
function wo(e, t) {
  return t.argument === null ? "return lc.voidOperation" : "return " + E(e, t.argument);
}
function xo(e, t) {
  const n = t.specifiers[0].local.name.toLowerCase();
  be(n);
  const r = e.libraryResolver?.loadLibrary(n), a = _e(e);
  e.moduleFactory[r.uri] === void 0 && (e.moduleFactory[r.uri] = Lo(r.syntax, { interceptor: e.interceptor, services: e.services, moduleFactory: e.moduleFactory, lrucache: e.lrucache, timeZone: e.timeZone ?? null, libraryResolver: e.libraryResolver, customfunctions: e.customfunctions, vars: {} }, e.isAsync)), e.moduleFactoryMap[a] = r.uri;
  let o = "";
  if (o = e.isAsync ? "(yield lang.loadModule('" + a + "', runtimeCtx) ); " : "lang.loadModule('" + a + "', runtimeCtx); ", e.globalScope[n] !== void 0) return "gscope['" + n + "']=" + o;
  if (e.globalScope._SymbolsMap[n] !== void 0) return "gscope['" + e.globalScope._SymbolsMap[n] + "']=" + o;
  let s = "";
  return e.undeclaredGlobalsInFunctions.has(n) ? (s = e.undeclaredGlobalsInFunctions.get(n).manglename, e.undeclaredGlobalsInFunctions.delete(n)) : s = _e(e), e.globalScope._SymbolsMap[n] = s, e.mangleMap[n] = s, "gscope[lang.setAssig('" + s + "', runtimeCtx)]=" + o;
}
function Fo(e, t) {
  const n = E(e, t.declaration);
  if (t.declaration.type === "FunctionDeclaration") e.exports[t.declaration.id.name.toLowerCase()] = "function";
  else if (t.declaration.type === "VariableDeclaration") for (const r of t.declaration.declarations) e.exports[r.id.name.toLowerCase()] = "variable";
  return n;
}
function be(e) {
  if (e === "iif") throw new Qt();
  if (e === "decode") throw new Qt();
  if (e === "when") throw new Qt();
  if (e === "defaultvalue") throw new Qt();
}
function Co(e, t) {
  const n = t.id.name.toLowerCase();
  be(n);
  let r = "", a = !1;
  e.globalScope[n] !== void 0 ? r = n : e.globalScope._SymbolsMap[n] !== void 0 ? r = e.globalScope._SymbolsMap[n] : e.undeclaredGlobalsInFunctions.has(n) ? (r = e.undeclaredGlobalsInFunctions.get(n).manglename, e.globalScope._SymbolsMap[n] = r, e.mangleMap[n] = r, e.undeclaredGlobalsInFunctions.delete(n), a = !0) : (r = _e(e), e.globalScope._SymbolsMap[n] = r, e.mangleMap[n] = r);
  const o = { isAsync: e.isAsync, console: e.console, exports: e.exports, undeclaredGlobalsInFunctions: e.undeclaredGlobalsInFunctions, customfunctions: e.customfunctions, moduleFactory: e.moduleFactory, moduleFactoryMap: e.moduleFactoryMap, libraryResolver: e.libraryResolver, lrucache: e.lrucache, interceptor: e.interceptor, services: e.services, symbols: e.symbols, mangleMap: e.mangleMap, localScope: { _SymbolsMap: {} }, depthCounter: e.depthCounter, globalScope: e.globalScope };
  let s = `new lang.UserDefinedCompiledFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; 
   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];
`;
  for (let i = 0; i < t.params.length; i++) {
    const u = t.params[i].name.toLowerCase();
    be(u);
    const l = _e(e);
    o.localScope._SymbolsMap[u] = l, o.mangleMap[u] = l, s += "lscope['" + l + "']=arguments[" + i.toString() + `];
`;
  }
  return e.isAsync === !0 ? (s += `return lang.__awaiter(this, void 0, void 0, function* () {
`, s += tr(o, t.body) + `
 return lastStatement; `, s += "});  }", s += ", runtimeCtx)," + t.params.length + ")", s += `
 lastStatement = lc.voidOperation; 
`) : (s += tr(o, t.body) + `
 return lastStatement; }, runtimeCtx),` + t.params.length + ")", s += `
 lastStatement = lc.voidOperation; 
`), a ? "gscope[lang.setAssig('" + r + "', runtimeCtx)]=" + s : "gscope['" + r + "']=" + s;
}
function Ao(e, t) {
  const n = [];
  for (let r = 0; r < t.declarations.length; r++) n.push(E(e, t.declarations[r]));
  return n.join(`
`) + ` 
 lastStatement=  lc.voidOperation; 
`;
}
function bo(e, t) {
  let n = t.init === null ? null : E(e, t.init);
  n === C && (n = null);
  const r = t.id.name.toLowerCase();
  if (be(r), e.localScope !== null) {
    if (e.localScope[r] !== void 0) return "lscope['" + r + "']=" + n + "; ";
    if (e.localScope._SymbolsMap[r] !== void 0) return "lscope['" + e.localScope._SymbolsMap[r] + "']=" + n + "; ";
    {
      const o = _e(e);
      return e.localScope._SymbolsMap[r] = o, e.mangleMap[r] = o, "lscope['" + o + "']=" + n + "; ";
    }
  }
  if (e.globalScope[r] !== void 0) return "gscope['" + r + "']=" + n + "; ";
  if (e.globalScope._SymbolsMap[r] !== void 0) return "gscope['" + e.globalScope._SymbolsMap[r] + "']=" + n + "; ";
  if (e.undeclaredGlobalsInFunctions.has(r)) {
    const o = e.undeclaredGlobalsInFunctions.get(r).manglename;
    return e.globalScope._SymbolsMap[r] = o, e.mangleMap[r] = o, e.undeclaredGlobalsInFunctions.delete(r), "gscope[lang.setAssig('" + o + "', runtimeCtx)]=" + n + "; ";
  }
  const a = _e(e);
  return e.globalScope._SymbolsMap[r] = a, e.mangleMap[r] = a, "gscope['" + a + "']=" + n + "; ";
}
function Eo(e, t) {
  try {
    let n;
    return t.computed === !0 ? n = E(e, t.property) : (n = "'" + t.property.name + "'", be(t.property.name)), "lang.member(" + E(e, t.object) + "," + n + ")";
  } catch (n) {
    throw n;
  }
}
function vo(e, t) {
  try {
    return "lang.unary(" + E(e, t.argument) + ",'" + t.operator + "')";
  } catch (n) {
    throw n;
  }
}
function So(e, t) {
  try {
    const n = [];
    for (let r = 0; r < t.elements.length; r++) t.elements[r].type === "Literal" ? n.push(E(e, t.elements[r])) : n.push("lang.aCheck(" + E(e, t.elements[r]) + ",'ArrayExpression')");
    return "[" + n.join(",") + "]";
  } catch (n) {
    throw n;
  }
}
function Io(e, t) {
  try {
    const n = [];
    let r = 0;
    for (const a of t.quasis) n.push(a.value ? JSON.stringify(a.value.cooked) : JSON.stringify("")), a.tail === !1 && (n.push(t.expressions[r] ? "lang.castString(lang.aCheck(" + E(e, t.expressions[r]) + ", 'TemplateLiteral'))" : ""), r++);
    return "([" + n.join(",") + "]).join('')";
  } catch (n) {
    throw n;
  }
}
function ko(e, t) {
  try {
    return "lang.binary(" + E(e, t.left) + "," + E(e, t.right) + ",'" + t.operator + "')";
  } catch (n) {
    throw n;
  }
}
function To(e, t) {
  try {
    if (t.left.type === "AssignmentExpression" || t.left.type === "UpdateExpression") throw new he(e, c.LogicalExpressionOnlyBoolean, t);
    if (t.right.type === "AssignmentExpression" || t.right.type === "UpdateExpression") throw new he(e, c.LogicalExpressionOnlyBoolean, t);
    if (t.operator === "&&" || t.operator === "||") return "(lang.logicalCheck(" + E(e, t.left) + ") " + t.operator + " lang.logicalCheck(" + E(e, t.right) + "))";
    throw new he(null, c.LogicExpressionOrAnd, null);
  } catch (n) {
    throw n;
  }
}
function Bo(e, t) {
  try {
    const n = t.name.toLowerCase();
    if (be(n), e.localScope !== null) {
      if (e.localScope[n] !== void 0) return "lscope['" + n + "']";
      if (e.localScope._SymbolsMap[n] !== void 0) return "lscope['" + e.localScope._SymbolsMap[n] + "']";
    }
    if (e.globalScope[n] !== void 0) return "gscope['" + n + "']";
    if (e.globalScope._SymbolsMap[n] !== void 0) return "gscope['" + e.globalScope._SymbolsMap[n] + "']";
    if (e.localScope !== null) {
      if (e.undeclaredGlobalsInFunctions.has(n)) return "gscope[lang.chkAssig('" + e.undeclaredGlobalsInFunctions.get(n).manglename + "',runtimeCtx)]";
      const r = { manglename: _e(e), node: t.argument };
      return e.undeclaredGlobalsInFunctions.set(n, r), "gscope[lang.chkAssig('" + r.manglename + "',runtimeCtx)]";
    }
    throw new he(e, c.InvalidIdentifier, t);
  } catch (n) {
    throw n;
  }
}
function No(e, t) {
  try {
    if (t.callee.type === "MemberExpression") {
      let a;
      t.callee.computed === !0 ? a = E(e, t.callee.property) : (a = "'" + t.callee.property.name + "'", be(t.callee.property.name));
      let o = "[";
      for (let s = 0; s < t.arguments.length; s++) s > 0 && (o += ", "), o += E(e, t.arguments[s]);
      return o += "]", e.isAsync ? "(yield lang.callModuleFunction(" + E(e, t.callee.object) + "," + o + "," + a + ",runtimeCtx))" : "lang.callModuleFunction(" + E(e, t.callee.object) + "," + o + "," + a + ",runtimeCtx)";
    }
    if (t.callee.type !== "Identifier") throw new he(e, c.FunctionNotFound, t);
    const n = t.callee.name.toLowerCase();
    if (n === "iif") return Mo(e, t);
    if (n === "when") return _o(e, t);
    if (n === "defaultvalue") return $o(e, t);
    if (n === "decode") return Ro(e, t);
    let r = "";
    if (e.localScope !== null && (e.localScope[n] !== void 0 ? r = "lscope['" + n + "']" : e.localScope._SymbolsMap[n] !== void 0 && (r = "lscope['" + e.localScope._SymbolsMap[n] + "']")), r === "") {
      if (e.globalScope[n] !== void 0) r = "gscope['" + n + "']";
      else if (e.globalScope._SymbolsMap[n] !== void 0) r = "gscope['" + e.globalScope._SymbolsMap[n] + "']";
      else if (e.localScope !== null) if (e.undeclaredGlobalsInFunctions.has(n)) r = "gscope[lang.chkAssig('" + e.undeclaredGlobalsInFunctions.get(n).manglename + "',runtimeCtx)]";
      else {
        const a = { manglename: _e(e), node: t.argument };
        e.undeclaredGlobalsInFunctions.set(n, a), r = "gscope[lang.chkAssig('" + a.manglename + "',runtimeCtx)]";
      }
    }
    if (r !== "") {
      let a = "[";
      for (let o = 0; o < t.arguments.length; o++) o > 0 && (a += ", "), a += E(e, t.arguments[o]);
      return a += "]", e.isAsync ? "(yield lang.callfunc(" + r + "," + a + ",runtimeCtx) )" : "lang.callfunc(" + r + "," + a + ",runtimeCtx)";
    }
    throw new he(e, c.FunctionNotFound, t);
  } catch (n) {
    throw n;
  }
}
function Mo(e, t) {
  try {
    if (t.arguments.length !== 3) throw new he(e, c.WrongNumberOfParameters, t);
    const n = Ie(e);
    return `${e.isAsync ? `(yield (function() { 
 return lang.__awaiter(this, void 0, void 0, function* () {` : "function() {"}
        var ${n} = ${E(e, t.arguments[0])};

        if (${n} === true) {
          return  ${E(e, t.arguments[1])};
        }
        else if (${n} === false) {
          return ${E(e, t.arguments[2])};
        }
        else {
          lang.error('ExecutionErrorCodes.BooleanConditionRequired');
        }
      ${e.isAsync ? "})}()))" : "}()"}`;
  } catch (n) {
    throw n;
  }
}
function $o(e, t) {
  try {
    if (t.arguments.length < 2 || t.arguments.length > 3) throw new he(e, c.WrongNumberOfParameters, t);
    const n = Ie(e), r = Ie(e);
    return t.arguments.length === 3 ? `${e.isAsync ? `(yield (function() { 
 return lang.__awaiter(this, void 0, void 0, function* () {` : "function() {"}
      var ${n} = ${E(e, t.arguments[0])};
      var ${r} = ${E(e, t.arguments[1])};
      ${n} = lang.getNestedOptionalValue(${n}, ${r});
      return ${n} != null && ${n} !== "" ? ${n} : ${E(e, t.arguments[2])};
      ${e.isAsync ? "})}()))" : "}()"}` : `${e.isAsync ? `(yield (function() { 
 return lang.__awaiter(this, void 0, void 0, function* () {` : "function() {"}
        var ${n} = ${E(e, t.arguments[0])};
        if (${n} === null) {
          return  ${E(e, t.arguments[1])};
        }
        if (${n} === "") {
          return  ${E(e, t.arguments[1])};
        }
        if (${n} === undefined) {
          return  ${E(e, t.arguments[1])};
        }
        return ${n};
      ${e.isAsync ? "})}()))" : "}()"}`;
  } catch (n) {
    throw n;
  }
}
function _o(e, t) {
  try {
    if (t.arguments.length < 3) throw new he(e, c.WrongNumberOfParameters, t);
    if (t.arguments.length % 2 == 0) throw new he(e, c.WrongNumberOfParameters, t);
    const n = Ie(e);
    let r = "var ";
    for (let a = 0; a < t.arguments.length - 1; a += 2) r += `${n} = lang.mustBoolean(${E(e, t.arguments[a])}, runtimeCtx);
      if (${n} === true ) {
        return ${E(e, t.arguments[a + 1])}
      }
`;
    return `${e.isAsync ? `(yield (function() { 
 return lang.__awaiter(this, void 0, void 0, function* () {` : "function() {"}
        ${r}
        return ${E(e, t.arguments[t.arguments.length - 1])}
        ${e.isAsync ? "})}()))" : "}()"}`;
  } catch (n) {
    throw n;
  }
}
function Ro(e, t) {
  try {
    if (t.arguments.length < 2) throw new he(e, c.WrongNumberOfParameters, t);
    if (t.arguments.length === 2) return `(${E(e, t.arguments[1])})`;
    if ((t.arguments.length - 1) % 2 == 0) throw new he(e, c.WrongNumberOfParameters, t);
    const n = Ie(e), r = Ie(e);
    let a = "var ";
    for (let o = 1; o < t.arguments.length - 1; o += 2) a += `${r} = ${E(e, t.arguments[o])};
      if (lang.binary(${r}, ${n}, "==") === true ) {
        return ${E(e, t.arguments[o + 1])}
      }
`;
    return `${e.isAsync ? `(yield (function() { 
 return lang.__awaiter(this, void 0, void 0, function* () {` : "function() {"}
        var ${n} = ${E(e, t.arguments[0])};
        ${a}
        return ${E(e, t.arguments[t.arguments.length - 1])}
        ${e.isAsync ? "})}()))" : "}()"}`;
  } catch (n) {
    throw n;
  }
}
const re = {};
function _e(e) {
  return e.symbols.symbolCounter++, "_T" + e.symbols.symbolCounter.toString();
}
function Ie(e) {
  return e.symbols.symbolCounter++, "_Tvar" + e.symbols.symbolCounter.toString();
}
Zi(re, Ce), ia(re, Ce), Xi(re, Ce), Vi(re, Ce), ea(re, Ce), re.iif = function(e, t) {
  try {
    return Ce(e, t, (n, r, a) => {
      throw new h(e, c.Unrecognized, t);
    });
  } catch (n) {
    throw n;
  }
}, re.decode = function(e, t) {
  try {
    return Ce(e, t, (n, r, a) => {
      throw new h(e, c.Unrecognized, t);
    });
  } catch (n) {
    throw n;
  }
}, re.when = function(e, t) {
  try {
    return Ce(e, t, (n, r, a) => {
      throw new h(e, c.Unrecognized, t);
    });
  } catch (n) {
    throw n;
  }
}, re.defaultvalue = function(e, t) {
  try {
    return Ce(e, t, (n, r, a) => {
      throw new h(e, c.Unrecognized, t);
    });
  } catch (n) {
    throw n;
  }
};
const bt = {};
for (const e in re) bt[e] = new ut(re[e]);
Yi(re, Ce);
for (const e in re) re[e] = new ut(re[e]);
const xr = function() {
};
xr.prototype = re;
const Fr = function() {
};
function sa(e, t, n) {
  const r = {};
  e || (e = {}), n || (n = {}), r._SymbolsMap = {}, r.textformatting = 1, r.infinity = 1, r.pi = 1;
  for (const a in t) r[a] = 1;
  for (const a in n) r[a] = 1;
  for (const a in e) r[a] = 1;
  return r;
}
function oa(e, t, n, r) {
  const a = n ? new Fr() : new xr();
  e || (e = {}), t || (t = {});
  const o = new B({ newline: `
`, tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  o.immutable = !1, a._SymbolsMap = { textformatting: 1, infinity: 1, pi: 1 }, a.textformatting = o, a.infinity = Number.POSITIVE_INFINITY, a.pi = Math.PI;
  for (const s in t) a[s] = t[s], a._SymbolsMap[s] = 1;
  for (const s in e) a._SymbolsMap[s] = 1, e[s] && e[s].declaredClass === "esri.Graphic" ? a[s] = ee.createFromGraphic(e[s], r ?? null) : a[s] = e[s];
  return a;
}
Fr.prototype = bt;
function lt(e, t) {
  const n = { mode: t, compiled: !0, functions: {}, signatures: [], standardFunction: Ce, standardFunctionAsync: Ce, evaluateIdentifier: Oo };
  for (let r = 0; r < e.length; r++) e[r].registerFunctions(n);
  if (t === "sync") {
    for (const r in n.functions) re[r] = new ut(n.functions[r]), xr.prototype[r] = re[r];
    for (let r = 0; r < n.signatures.length; r++) qn(n.signatures[r], "sync");
  } else {
    for (const r in n.functions) bt[r] = new ut(n.functions[r]), Fr.prototype[r] = bt[r];
    for (let r = 0; r < n.signatures.length; r++) qn(n.signatures[r], "async");
  }
}
function Oo(e, t) {
  const n = t.name;
  if (n === "_SymbolsMap") throw new h(e, c.InvalidIdentifier, null);
  if (e.localStack.length > 0) {
    if (n.substr(0, 2).toLowerCase() !== "_t" && e.localStack[e.localStack.length - 1][n] !== void 0) return e.localStack[e.localStack.length - 1][n];
    const a = e.mangleMap[n];
    if (a !== void 0 && e.localStack[e.localStack.length - 1][a] !== void 0) return e.localStack[e.localStack.length - 1][a];
  }
  if (n.substr(0, 2).toLowerCase() !== "_t" && e.globalScope[n] !== void 0 || e.globalScope._SymbolsMap[n] === 1) return e.globalScope[n];
  const r = e.mangleMap[n];
  return r !== void 0 ? e.globalScope[r] : void 0;
}
lt([Hn], "sync"), lt([Hn], "async");
let Mn = 0;
const ua = { isNumber: (e) => L(e), isArray: (e) => T(e), isImmutableArray: (e) => _(e), isFeature: (e) => X(e), isString: (e) => x(e), isDictionary: (e) => Dn(e), isGeometry: (e) => Vt(e), geometryMember: (e, t, n, r, a = 1) => Ct(e, t, n, r, a), error(e) {
  throw new h(null, e, null);
}, __awaiter: (e, t, n, r) => new Promise((a, o) => {
  function s(l) {
    try {
      u(r.next(l));
    } catch (f) {
      o(f);
    }
  }
  function i(l) {
    try {
      u(r.throw(l));
    } catch (f) {
      o(f);
    }
  }
  function u(l) {
    l.done ? a(l.value) : l.value?.then ? l.value.then(s, i) : (Mn++, Mn % 100 == 0 ? setTimeout(() => {
      Mn = 0, s(l.value);
    }, 0) : s(l.value));
  }
  u((r = r.apply(e, t || [])).next());
}), functionDepthchecker: (e, t) => function() {
  if (t.depthCounter.depth++, t.localStack.push([]), t.depthCounter.depth > 64) throw new h(null, c.MaximumCallDepth, null);
  const n = e.apply(this, arguments);
  return Xe(n) ? n.then((r) => (t.depthCounter.depth--, t.localStack.length = t.localStack.length - 1, r)) : (t.depthCounter.depth--, t.localStack.length = t.localStack.length - 1, n);
}, chkAssig(e, t) {
  if (t.gdefs[e] === void 0) throw new h(t, c.InvalidIdentifier, null);
  return e;
}, mustBoolean(e, t) {
  if (e === !0 || e === !1) return e;
  throw new h(t, c.BooleanConditionRequired, null);
}, setAssig: (e, t) => (t.gdefs[e] = 1, e), castString: (e) => F(e), aCheck(e, t) {
  if (Q(e))
    throw t === "ArrayExpression" ? new h(null, c.NoFunctionInArray, null) : t === "ObjectExpression" ? new h(null, c.NoFunctionInDictionary, null) : new h(null, c.NoFunctionInTemplateLiteral, null);
  return e === C ? null : e;
}, Dictionary: B, Feature: ee, UserDefinedCompiledFunction: lo, dictionary(e) {
  const t = {}, n = /* @__PURE__ */ new Map();
  for (let a = 0; a < e.length; a += 2) {
    if (Q(e[a + 1])) throw new h(null, c.NoFunctionInDictionary, null);
    if (x(e[a]) === !1) throw new h(null, c.KeyMustBeString, null);
    let o = e[a].toString();
    const s = o.toLowerCase();
    n.has(s) ? o = n.get(s) : n.set(s, o), e[a + 1] === C ? t[o] = null : t[o] = e[a + 1];
  }
  const r = new B(t);
  return r.immutable = !1, r;
}, strCheck(e) {
  if (x(e) === !1) throw new h(null, c.KeyMustBeString, null);
  return e;
}, unary(e, t) {
  if (J(e)) {
    if (t === "!") return !e;
    if (t === "-") return -1 * p(e);
    if (t === "+") return 1 * p(e);
    if (t === "~") return ~p(e);
    throw new h(null, c.UnsupportedUnaryOperator, null);
  }
  if (t === "-") return -1 * p(e);
  if (t === "+") return 1 * p(e);
  if (t === "~") return ~p(e);
  throw new h(null, c.UnsupportedUnaryOperator, null);
}, logicalCheck(e) {
  if (J(e) === !1) throw new h(null, c.LogicExpressionOrAnd, null);
  return e;
}, logical(e, t, n) {
  if (J(e) && J(t)) switch (n) {
    case "||":
      return e || t;
    case "&&":
      return e && t;
    default:
      throw new h(null, c.LogicExpressionOrAnd, null);
  }
  throw new h(null, c.LogicExpressionOrAnd, null);
}, binary(e, t, n) {
  switch (n) {
    case "|":
    case "<<":
    case ">>":
    case ">>>":
    case "^":
    case "&":
      return Dr(p(e), p(t), n);
    case "==":
    case "=":
      return ke(e, t);
    case "!=":
      return !ke(e, t);
    case "<":
    case ">":
    case "<=":
    case ">=":
      return mr(e, t, n);
    case "+":
      return x(e) || x(t) ? F(e) + F(t) : p(e) + p(t);
    case "-":
      return p(e) - p(t);
    case "*":
      return p(e) * p(t);
    case "/":
      return p(e) / p(t);
    case "%":
      return p(e) % p(t);
    default:
      throw new h(null, c.UnsupportedOperator, null);
  }
}, assign(e, t, n) {
  switch (t) {
    case "=":
      return e === C ? null : e;
    case "/=":
      return p(n) / p(e);
    case "*=":
      return p(n) * p(e);
    case "-=":
      return p(n) - p(e);
    case "+=":
      return x(n) || x(e) ? F(n) + F(e) : p(n) + p(e);
    case "%=":
      return p(n) % p(e);
    default:
      throw new h(null, c.UnsupportedOperator, null);
  }
}, update(e, t, n, r) {
  const a = p(e[t]);
  return e[t] = n === "++" ? a + 1 : a - 1, r === !1 ? a : n === "++" ? a + 1 : a - 1;
}, graphicToFeature: (e, t, n) => e === null ? null : ee.createFromGraphicLikeObject(e.geometry, e.attributes, t, n.timeZone), memberupdate(e, t, n, r) {
  let a;
  if (T(e)) {
    if (!L(t)) throw new h(null, c.ArrayAccessorMustBeNumber, null);
    if (t < 0 && (t = e.length + t), t < 0 || t >= e.length) throw new h(null, c.OutOfBounds, null);
    a = p(e[t]), e[t] = n === "++" ? a + 1 : a - 1;
  } else if (e instanceof B) {
    if (x(t) === !1) throw new h(null, c.KeyAccessorMustBeString, null);
    if (e.hasField(t) !== !0) throw new h(null, c.FieldNotFound, null, { key: t });
    a = p(e.field(t)), e.setField(t, n === "++" ? a + 1 : a - 1);
  } else if (X(e)) {
    if (x(t) === !1) throw new h(null, c.KeyAccessorMustBeString, null);
    if (e.hasField(t) !== !0) throw new h(null, c.FieldNotFound, null);
    a = p(e.field(t)), e.setField(t, n === "++" ? a + 1 : a - 1);
  } else {
    if (_(e)) throw new h(null, c.Immutable, null);
    if (!(e instanceof Lt)) throw new h(null, c.InvalidIdentifier, null);
    if (x(t) === !1) throw new h(null, c.ModuleAccessorMustBeString, null);
    if (e.hasGlobal(t) !== !0) throw new h(null, c.ModuleExportNotFound, null);
    a = p(e.global(t)), e.setGlobal(t, n === "++" ? a + 1 : a - 1);
  }
  return r === !1 ? a : n === "++" ? a + 1 : a - 1;
}, assignmember(e, t, n, r) {
  if (T(e)) {
    if (!L(t)) throw new h(null, c.ArrayAccessorMustBeNumber, null);
    if (t < 0 && (t = e.length + t), t < 0 || t > e.length) throw new h(null, c.OutOfBounds, null);
    if (t === e.length) {
      if (n !== "=") throw new h(null, c.OutOfBounds, null);
      e[t] = this.assign(r, n, e[t]);
    } else e[t] = this.assign(r, n, e[t]);
  } else if (e instanceof B) {
    if (x(t) === !1) throw new h(null, c.KeyAccessorMustBeString, null);
    if (e.hasField(t) === !0) e.setField(t, this.assign(r, n, e.field(t)));
    else {
      if (n !== "=") throw new h(null, c.FieldNotFound, null);
      e.setField(t, this.assign(r, n, null));
    }
  } else if (X(e)) {
    if (x(t) === !1) throw new h(null, c.KeyAccessorMustBeString, null);
    if (e.hasField(t) === !0) e.setField(t, this.assign(r, n, e.field(t)));
    else {
      if (n !== "=") throw new h(null, c.FieldNotFound, null);
      e.setField(t, this.assign(r, n, null));
    }
  } else {
    if (_(e)) throw new h(null, c.Immutable, null);
    if (!(e instanceof Lt)) throw new h(null, c.InvalidIdentifier, null);
    if (x(t) === !1) throw new h(null, c.ModuleAccessorMustBeString, null);
    if (!e.hasGlobal(t)) throw new h(null, c.ModuleExportNotFound, null);
    e.setGlobal(t, this.assign(r, n, e.global(t)));
  }
}, member(e, t) {
  if (e === null) throw new h(null, c.MemberOfNull, null);
  if (e instanceof B || X(e)) {
    if (x(t)) return e.field(t);
    throw new h(null, c.InvalidMemberAccessKey, null);
  }
  if (e instanceof N) {
    if (x(t)) return Ct(e, t, null, null);
    throw new h(null, c.InvalidMemberAccessKey, null);
  }
  if (T(e)) {
    if (L(t) && isFinite(t) && Math.floor(t) === t) {
      if (t < 0 && (t = e.length + t), t >= e.length || t < 0) throw new h(null, c.OutOfBounds, null);
      return e[t];
    }
    throw new h(null, c.InvalidMemberAccessKey, null);
  }
  if (x(e)) {
    if (L(t) && isFinite(t) && Math.floor(t) === t) {
      if (t < 0 && (t = e.length + t), t >= e.length || t < 0) throw new h(null, c.OutOfBounds, null);
      return e[t];
    }
    throw new h(null, c.InvalidMemberAccessKey, null);
  }
  if (_(e)) {
    if (L(t) && isFinite(t) && Math.floor(t) === t) {
      if (t < 0 && (t = e.length() + t), t >= e.length() || t < 0) throw new h(null, c.OutOfBounds, null);
      return e.get(t);
    }
    throw new h(null, c.InvalidMemberAccessKey, null);
  }
  if (e instanceof Lt) {
    if (x(t)) return e.global(t);
    throw new h(null, c.InvalidMemberAccessKey, null);
  }
  throw new h(null, c.InvalidMemberAccessKey, null);
}, callfunc: (e, t, n) => e.call(n, { arguments: t, preparsed: !0 }), loadModule(e, t) {
  const n = t.moduleFactoryMap[e];
  if (t.moduleSingletons[n]) return t.moduleSingletons[n];
  const r = t.moduleFactory[n]({ vars: {}, moduleSingletons: t.moduleSingletons, depthCounter: t.depthCounter, console: t.console, abortSignal: t.abortSignal, isAsync: t.isAsync, services: t.services, lrucache: t.lrucache, timeZone: t.timeZone ?? null, interceptor: t.interceptor }, t.spatialReference);
  return t.moduleSingletons[n] = r, r;
}, callModuleFunction(e, t, n, r) {
  if (!(e instanceof Lt)) throw new h(null, c.FunctionNotFound, null);
  const a = e.global(n);
  if (Q(a) === !1) throw new h(null, c.CallNonFunction, null);
  return a.call(r, { preparsed: !0, arguments: t });
}, getNestedOptionalValue: (e, t) => yr(e, t) };
function dn(e) {
  console.log(e);
}
function la(e, t, n = !1) {
  t === null && (t = { vars: {}, customfunctions: {} });
  let r = null;
  e.usesModules && (r = new mn(null, e.loadedModules));
  const a = { isAsync: n, globalScope: sa(t.vars, n ? bt : re, t.customfunctions), moduleFactory: {}, moduleFactoryMap: {}, undeclaredGlobalsInFunctions: /* @__PURE__ */ new Map(), customfunctions: t.customfunctions, libraryResolver: r, localScope: null, mangleMap: {}, depthCounter: { depth: 1 }, exports: {}, console: dn, lrucache: t.lrucache, timeZone: t.timeZone ?? null, interceptor: t.interceptor, services: t.services, symbols: { symbolCounter: 0 } };
  let o = E(a, e);
  o === "" && (o = "lc.voidOperation; "), a.undeclaredGlobalsInFunctions.size > 0 && a.undeclaredGlobalsInFunctions.forEach((m) => {
    throw new he(t, c.InvalidIdentifier, m.node);
  });
  let s = "";
  s = n ? `var runtimeCtx=this.prepare(context, true);
 var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; 
return lang.__awaiter(this, void 0, void 0, function* () {

 function mainBody() {
 var lastStatement=lc.voidOperation;
 return lang.__awaiter(this, void 0, void 0, function* () {
` + o + `
 return lastStatement; }); } 
 return this.postProcess(yield mainBody()); }); ` : `var runtimeCtx=this.prepare(context, false);
 var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; 
 function mainBody() {
 var lastStatement=lc.voidOperation;
 ` + o + `
 return lastStatement; } 
 return this.postProcess(mainBody()); `;
  const i = a.moduleFactory, u = a.moduleFactoryMap, l = a.exports, f = {};
  for (const m in l) f[m] = a.mangleMap[m] !== void 0 ? a.mangleMap[m] : m;
  const d = { lc: Pi, lang: ua, mangles: a.mangleMap, postProcess(m) {
    if (m instanceof xe && (m = m.value), m instanceof wt && (m = m.value), m === C && (m = null), m === Me) throw new h(null, c.IllegalResult, null);
    if (m === It) throw new h(null, c.IllegalResult, null);
    if (Q(m)) throw new h(null, c.IllegalResult, null);
    return m;
  }, prepare(m, g) {
    let y = m.spatialReference;
    y == null && (y = vt.WebMercator);
    const k = oa(m.vars, m.customfunctions, g, m.timeZone);
    return { localStack: [], isAsync: g, moduleFactory: i, moduleFactoryMap: u, mangleMap: this.mangles, moduleSingletons: {}, exports: l, gdefs: {}, exportmangle: f, spatialReference: y, globalScope: k, abortSignal: m.abortSignal === void 0 || m.abortSignal === null ? { aborted: !1 } : m.abortSignal, localScope: null, services: m.services, console: m.console ?? dn, lrucache: m.lrucache, timeZone: m.timeZone ?? null, interceptor: m.interceptor, symbols: { symbolCounter: 0 }, depthCounter: { depth: 1 } };
  } };
  return new Function("context", "spatialReference", s).bind(d);
}
async function Po() {
  return lt([await import("./geomasync-BiIzz6rB.js")], "async"), !0;
}
class Lt extends qt {
  constructor(t) {
    super(null), this.moduleContext = t;
  }
  hasGlobal(t) {
    return this.moduleContext.exports[t] === void 0 && (t = t.toLowerCase()), this.moduleContext.exports[t] !== void 0;
  }
  setGlobal(t, n) {
    const r = this.moduleContext.globalScope, a = t.toLowerCase();
    if (Q(n)) throw new h(null, c.AssignModuleFunction, null);
    r[this.moduleContext.exportmangle[a]] = n;
  }
  global(t) {
    const n = this.moduleContext.globalScope;
    t = t.toLowerCase();
    const r = n[this.moduleContext.exportmangle[t]];
    if (r === void 0) throw new h(null, c.InvalidIdentifier, null);
    if (Q(r) && !(r instanceof qe)) {
      const a = new qe();
      return a.fn = r, a.parameterEvaluator = Ce, a.context = this.moduleContext, n[this.moduleContext.exportmangle[t]] = a, a;
    }
    return r;
  }
}
function Lo(e, t, n = !1) {
  const r = { isAsync: n, moduleFactory: t.moduleFactory, moduleFactoryMap: {}, libraryResolver: new mn(null, e.loadedModules), globalScope: sa(t.vars, n ? bt : re, t.customfunctions), customfunctions: t.customfunctions, localScope: null, mangleMap: {}, undeclaredGlobalsInFunctions: /* @__PURE__ */ new Map(), depthCounter: { depth: 1 }, exports: {}, console: dn, lrucache: t.lrucache, timeZone: t.timeZone ?? null, interceptor: t.interceptor, services: t.services, symbols: { symbolCounter: 0 } };
  let a = E(r, e);
  a === "" && (a = "lc.voidOperation; ");
  let o = "";
  o = n ? `var runtimeCtx=this.prepare(context, true);
 var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; 
return lang.__awaiter(this, void 0, void 0, function* () {

 function mainBody() {
 var lastStatement=lc.voidOperation;
 return lang.__awaiter(this, void 0, void 0, function* () {
` + a + `
 return lastStatement; }); } 
 yield mainBody(); 
 return this.prepareModule(runtimeCtx); }); ` : `var runtimeCtx=this.prepare(context, false);
 var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; 
 function mainBody() {
 var lastStatement=lc.voidOperation;
 ` + a + `
 return lastStatement; } 
 mainBody(); 
 return this.prepareModule(runtimeCtx); `;
  const s = r.moduleFactory, i = r.moduleFactoryMap, u = r.exports, l = {};
  for (const d in u) l[d] = r.mangleMap[d] !== void 0 ? r.mangleMap[d] : d;
  const f = { lc: Pi, lang: ua, mangles: r.mangleMap, prepareModule: (d) => new Lt(d), prepare(d, m) {
    let g = d.spatialReference;
    g == null && (g = new vt({ wkid: 102100 }));
    const y = oa(d.vars, d.customfunctions, m, d.timeZone);
    return { localStack: [], isAsync: m, exports: u, exportmangle: l, gdefs: {}, moduleFactory: s, moduleFactoryMap: i, moduleSingletons: d.moduleSingletons, mangleMap: this.mangles, spatialReference: g, globalScope: y, abortSignal: d.abortSignal === void 0 || d.abortSignal === null ? { aborted: !1 } : d.abortSignal, localScope: null, services: d.services, console: d.console ?? dn, lrucache: d.lrucache, timeZone: d.timeZone ?? null, interceptor: d.interceptor, symbols: { symbolCounter: 0 }, depthCounter: d.depthCounter };
  } };
  return new Function("context", "spatialReference", o).bind(f);
}
var sn = { False: "false", Null: "null", True: "true" }, V = { Break: "break", Continue: "continue", Else: "else", For: "for", From: "from", Function: "function", If: "if", Import: "import", Export: "export", In: "in", Return: "return", Var: "var", While: "while" }, v = { AssignmentExpression: "AssignmentExpression", ArrayExpression: "ArrayExpression", BlockComment: "BlockComment", BlockStatement: "BlockStatement", BinaryExpression: "BinaryExpression", BreakStatement: "BreakStatement", CallExpression: "CallExpression", ContinueStatement: "ContinueStatement", EmptyStatement: "EmptyStatement", ExpressionStatement: "ExpressionStatement", ExportNamedDeclaration: "ExportNamedDeclaration", ExportSpecifier: "ExportSpecifier", ForStatement: "ForStatement", ForInStatement: "ForInStatement", FunctionDeclaration: "FunctionDeclaration", Identifier: "Identifier", IfStatement: "IfStatement", ImportDeclaration: "ImportDeclaration", ImportDefaultSpecifier: "ImportDefaultSpecifier", LineComment: "LineComment", Literal: "Literal", LogicalExpression: "LogicalExpression", MemberExpression: "MemberExpression", ObjectExpression: "ObjectExpression", Program: "Program", Property: "Property", ReturnStatement: "ReturnStatement", TemplateElement: "TemplateElement", TemplateLiteral: "TemplateLiteral", UnaryExpression: "UnaryExpression", UpdateExpression: "UpdateExpression", VariableDeclaration: "VariableDeclaration", VariableDeclarator: "VariableDeclarator", WhileStatement: "WhileStatement" }, nr = ["++", "--"], ca = ["-", "+", "!", "~"], ha = ["=", "/=", "*=", "%=", "+=", "-="], da = ["||", "&&"], Uo = ["|", "&", ">>", "<<", ">>>", "^", "==", "!=", "<", "<=", ">", ">=", "+", "-", "*", "/", "%"], ni = { "||": 1, "&&": 2, "|": 3, "^": 4, "&": 5, "==": 6, "!=": 6, "<": 7, ">": 7, "<=": 7, ">=": 7, "<<": 8, ">>": 8, ">>>": 8, "+": 9, "-": 9, "*": 10, "/": 10, "%": 10 }, S = { Unknown: 0, BooleanLiteral: 1, EOF: 2, Identifier: 3, Keyword: 4, NullLiteral: 5, NumericLiteral: 6, Punctuator: 7, StringLiteral: 8, Template: 10 }, zo = ["Unknown", "Boolean", "<end>", "Identifier", "Keyword", "Null", "Numeric", "Punctuator", "String", "RegularExpression", "Template"], A = { InvalidModuleUri: "InvalidModuleUri", ForInOfLoopInitializer: "ForInOfLoopInitializer", IdentiferExpected: "IdentiferExpected", InvalidEscapedReservedWord: "InvalidEscapedReservedWord", InvalidExpression: "InvalidExpression", InvalidFunctionIdentifier: "InvalidFunctionIdentifier", InvalidHexEscapeSequence: "InvalidHexEscapeSequence", InvalidLeftHandSideInAssignment: "InvalidLeftHandSideInAssignment", InvalidLeftHandSideInForIn: "InvalidLeftHandSideInForIn", InvalidTemplateHead: "InvalidTemplateHead", InvalidVariableAssignment: "InvalidVariableAssignment", KeyMustBeString: "KeyMustBeString", NoFunctionInsideBlock: "NoFunctionInsideBlock", NoFunctionInsideFunction: "NoFunctionInsideFunction", ModuleExportRootOnly: "ModuleExportRootOnly", ModuleImportRootOnly: "ModuleImportRootOnly", PunctuatorExpected: "PunctuatorExpected", TemplateOctalLiteral: "TemplateOctalLiteral", UnexpectedBoolean: "UnexpectedBoolean", UnexpectedEndOfScript: "UnexpectedEndOfScript", UnexpectedIdentifier: "UnexpectedIdentifier", UnexpectedKeyword: "UnexpectedKeyword", UnexpectedNull: "UnexpectedNull", UnexpectedNumber: "UnexpectedNumber", UnexpectedPunctuator: "UnexpectedPunctuator", UnexpectedString: "UnexpectedString", UnexpectedTemplate: "UnexpectedTemplate", UnexpectedToken: "UnexpectedToken" }, Zo = { [A.InvalidModuleUri]: "Module uri must be a text literal.", [A.ForInOfLoopInitializer]: "for-in loop variable declaration may not have an initializer.", [A.IdentiferExpected]: "'${value}' is an invalid identifier.", [A.InvalidEscapedReservedWord]: "Keyword cannot contain escaped characters.", [A.InvalidExpression]: "Invalid expression.", [A.InvalidFunctionIdentifier]: "'${value}' is an invalid function identifier.", [A.InvalidHexEscapeSequence]: "Invalid hexadecimal escape sequence.", [A.InvalidLeftHandSideInAssignment]: "Invalid left-hand side in assignment.", [A.InvalidLeftHandSideInForIn]: "Invalid left-hand side in for-in.", [A.InvalidTemplateHead]: "Invalid template structure.", [A.InvalidVariableAssignment]: "Invalid variable assignment.", [A.KeyMustBeString]: "Object property keys must be a word starting with a letter.", [A.NoFunctionInsideBlock]: "Functions cannot be declared inside of code blocks.", [A.NoFunctionInsideFunction]: "Functions cannot be declared inside another function.", [A.ModuleExportRootOnly]: "Module exports cannot be declared inside of code blocks.", [A.ModuleImportRootOnly]: "Module import cannot be declared inside of code blocks.", [A.PunctuatorExpected]: "'${value}' expected.", [A.TemplateOctalLiteral]: "Octal literals are not allowed in template literals.", [A.UnexpectedBoolean]: "Unexpected boolean literal.", [A.UnexpectedEndOfScript]: "Unexpected end of Arcade expression.", [A.UnexpectedIdentifier]: "Unexpected identifier.", [A.UnexpectedKeyword]: "Unexpected keyword.", [A.UnexpectedNull]: "Unexpected null literal.", [A.UnexpectedNumber]: "Unexpected number.", [A.UnexpectedPunctuator]: "Unexpected ponctuator.", [A.UnexpectedString]: "Unexpected text literal.", [A.UnexpectedTemplate]: "Unexpected quasi '${value}'.", [A.UnexpectedToken]: "Unexpected token '${value}'." }, Jt = class fa extends Error {
  constructor({ code: t, index: n, line: r, column: a, len: o = 0, description: s, data: i }) {
    super(s ?? t), this.declaredRootClass = "esri.arcade.lib.diagnostic", this.name = "ParsingError", this.code = t, this.index = n, this.line = r, this.column = a, this.len = o, this.data = i, this.description = s, this.range = { start: { line: r, column: a - 1 }, end: { line: r, column: a + o } }, Error.captureStackTrace?.(this, fa);
  }
};
function Go(e) {
  return !!e && typeof e == "object" && "type" in e && e.type === v.Program;
}
function ri(e) {
  return !!e && typeof e == "object" && "type" in e && e.type === v.BlockStatement;
}
function jo(e) {
  return !!e && typeof e == "object" && "type" in e && e.type === v.BlockComment;
}
function Jo(e) {
  return !!e && typeof e == "object" && "type" in e && e.type === v.EmptyStatement;
}
function qo(e) {
  return !!e && typeof e == "object" && "type" in e && e.type === v.VariableDeclarator;
}
function $n(e, t) {
  return t.loc.end.line === e.loc.start.line && t.loc.end.column <= e.loc.start.column;
}
function ii(e, t) {
  return e.range[0] >= t.range[0] && e.range[1] <= t.range[1];
}
var Vo = class {
  constructor() {
    this.comments = [], this._nodeStack = [], this._newComments = [];
  }
  insertInnerComments(t) {
    if (!ri(t) || t.body.length !== 0) return;
    let n = [];
    for (let r = this._newComments.length - 1; r >= 0; r--) {
      let a = this._newComments[r];
      t.range[1] >= a.range[0] && (n.unshift(a), this._newComments.splice(r, 1));
    }
    n.length && (t.innerComments = n);
  }
  attachTrailingComments(t) {
    let n = this._nodeStack.at(-1);
    if (!n) return;
    if (ri(t) && ii(n, t)) for (let a = this._newComments.length - 1; a >= 0; a--) {
      let o = this._newComments[a];
      ii(o, t) && (n.trailingComments = [...n.trailingComments ?? [], o], this._newComments.splice(a, 1));
    }
    let r = [];
    if (this._newComments.length > 0) for (let a = this._newComments.length - 1; a >= 0; a--) {
      let o = this._newComments[a];
      $n(o, n) ? (n.trailingComments = [...n.trailingComments ?? [], o], this._newComments.splice(a, 1)) : $n(o, t) && (r.unshift(o), this._newComments.splice(a, 1));
    }
    n.trailingComments && $n(n.trailingComments[0], t) && (r = [...r, ...n.trailingComments], delete n.trailingComments), r.length > 0 && (t.trailingComments = r);
  }
  attachLeadingComments(t) {
    let n;
    for (; this._nodeStack.length > 0; ) {
      let o = this._nodeStack[this._nodeStack.length - 1];
      if (!(t.range[0] <= o.range[0])) break;
      n = o, this._nodeStack.pop();
    }
    let r = [], a = [];
    if (n != null) {
      if (!n.leadingComments) return;
      for (let o = n.leadingComments.length - 1; o >= 0; o--) {
        let s = n.leadingComments[o];
        t.range[0] >= s.range[1] ? (r.unshift(s), n.leadingComments.splice(o, 1)) : qo(t) && !jo(s) && (a.unshift(s), n.leadingComments.splice(o, 1));
      }
      return n.leadingComments.length === 0 && delete n.leadingComments, r.length && (t.leadingComments = r), void (a.length && (t.trailingComments = [...a, ...t.trailingComments ?? []]));
    }
    for (let o = this._newComments.length - 1; o >= 0; o--) {
      let s = this._newComments[o];
      t.range[0] >= s.range[0] && (r.unshift(s), this._newComments.splice(o, 1));
    }
    r.length && (t.leadingComments = r);
  }
  attachComments(t) {
    if (Go(t) && t.body.length > 0) {
      let n = this._nodeStack.at(-1);
      return n ? (n.trailingComments = [...n.trailingComments ?? [], ...this._newComments], this._newComments.length = 0, void this._nodeStack.pop()) : (t.trailingComments = [...this._newComments], void (this._newComments.length = 0));
    }
    this.attachTrailingComments(t), this.attachLeadingComments(t), this.insertInnerComments(t), this._nodeStack.push(t);
  }
  collectComment(t) {
    this.comments.push(t), this._newComments.push(t);
  }
}, Ho = /\$\{(.*?)\}/gu;
function rr(e, t) {
  let n = Zo[e];
  return t ? n.replace(Ho, (r, a) => t[a]?.toString() ?? "") : n;
}
var Wo = class {
  constructor(e = !1) {
    this.tolerant = e, this.errors = [];
  }
  recordError(e) {
    this.errors.push(e);
  }
  tolerate(e) {
    if (!this.tolerant) throw e;
    this.recordError(e);
  }
  throwError(e) {
    throw e.description ?? (e.description = rr(e.code, e.data)), new Jt(e);
  }
  tolerateError(e) {
    e.description ?? (e.description = rr(e.code, e.data));
    let t = new Jt(e);
    if (!this.tolerant) throw t;
    this.recordError(t);
  }
};
function ai(e, t) {
  if (!e) throw new Error(`ASSERT: ${t}`);
}
var si = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/u, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/u }, q = { fromCodePoint: (e) => e < 65536 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10)) + String.fromCharCode(56320 + (e - 65536 & 1023)), isWhiteSpace: (e) => e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].includes(e), isLineTerminator: (e) => e === 10 || e === 13 || e === 8232 || e === 8233, isIdentifierStart: (e) => e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 92 || e >= 128 && si.NonAsciiIdentifierStart.test(q.fromCodePoint(e)), isIdentifierPart: (e) => e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 92 || e >= 128 && si.NonAsciiIdentifierPart.test(q.fromCodePoint(e)), isDecimalDigit: (e) => e >= 48 && e <= 57, isHexDigit: (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, isOctalDigit: (e) => e >= 48 && e <= 55 };
function oi(e) {
  return "0123456789abcdef".indexOf(e.toLowerCase());
}
function _n(e) {
  return "01234567".indexOf(e);
}
var it = [[], [], []];
nr.forEach((e) => it[e.length - 1]?.push(e)), ca.forEach((e) => it[e.length - 1]?.push(e)), da.forEach((e) => it[e.length - 1]?.push(e)), ha.forEach((e) => it[e.length - 1]?.push(e)), Uo.forEach((e) => it[e.length - 1]?.push(e));
var Ko = class {
  constructor(t, n) {
    this.source = t, this.errorHandler = n, this._length = t.length, this.index = 0, this.lineNumber = 1, this.lineStart = 0, this.curlyStack = [];
  }
  saveState() {
    return { index: this.index, lineNumber: this.lineNumber, lineStart: this.lineStart, curlyStack: this.curlyStack.slice() };
  }
  restoreState(t) {
    this.index = t.index, this.lineNumber = t.lineNumber, this.lineStart = t.lineStart, this.curlyStack = t.curlyStack;
  }
  eof() {
    return this.index >= this._length;
  }
  throwUnexpectedToken(t = A.UnexpectedToken) {
    this.errorHandler.throwError({ code: t, index: this.index, line: this.lineNumber, column: this.index - this.lineStart + 1, data: { value: this.source.charAt(this.index) } });
  }
  tolerateUnexpectedToken(t = A.UnexpectedToken) {
    this.errorHandler.tolerateError({ code: t, index: this.index, line: this.lineNumber, column: this.index - this.lineStart + 1 });
  }
  skipSingleLineComment(t) {
    let n = [], r = this.index - t, a = { start: { line: this.lineNumber, column: this.index - this.lineStart - t }, end: { line: 0, column: 0 } };
    for (; !this.eof(); ) {
      let s = this.source.charCodeAt(this.index);
      if (this.index += 1, q.isLineTerminator(s)) {
        a.end = { line: this.lineNumber, column: this.index - this.lineStart - 1 };
        let i = { multiLine: !1, start: r + t, end: this.index - 1, range: [r, this.index - 1], loc: a };
        return n.push(i), s === 13 && this.source.charCodeAt(this.index) === 10 && (this.index += 1), this.lineNumber += 1, this.lineStart = this.index, n;
      }
    }
    a.end = { line: this.lineNumber, column: this.index - this.lineStart };
    let o = { multiLine: !1, start: r + t, end: this.index, range: [r, this.index], loc: a };
    return n.push(o), n;
  }
  skipMultiLineComment() {
    let t = [], n = this.index - 2, r = { start: { line: this.lineNumber, column: this.index - this.lineStart - 2 }, end: { line: 0, column: 0 } };
    for (; !this.eof(); ) {
      let o = this.source.charCodeAt(this.index);
      if (q.isLineTerminator(o)) o === 13 && this.source.charCodeAt(this.index + 1) === 10 && (this.index += 1), this.lineNumber += 1, this.index += 1, this.lineStart = this.index;
      else if (o === 42) {
        if (this.source.charCodeAt(this.index + 1) === 47) {
          this.index += 2, r.end = { line: this.lineNumber, column: this.index - this.lineStart };
          let s = { multiLine: !0, start: n + 2, end: this.index - 2, range: [n, this.index], loc: r };
          return t.push(s), t;
        }
        this.index += 1;
      } else this.index += 1;
    }
    r.end = { line: this.lineNumber, column: this.index - this.lineStart };
    let a = { multiLine: !0, start: n + 2, end: this.index, range: [n, this.index], loc: r };
    return t.push(a), this.tolerateUnexpectedToken(), t;
  }
  scanComments() {
    let t = [];
    for (; !this.eof(); ) {
      let n = this.source.charCodeAt(this.index);
      if (q.isWhiteSpace(n)) this.index += 1;
      else if (q.isLineTerminator(n)) this.index += 1, n === 13 && this.source.charCodeAt(this.index) === 10 && (this.index += 1), this.lineNumber += 1, this.lineStart = this.index;
      else {
        if (n !== 47) break;
        if (n = this.source.charCodeAt(this.index + 1), n === 47) {
          this.index += 2;
          let r = this.skipSingleLineComment(2);
          t = [...t, ...r];
        } else {
          if (n !== 42) break;
          {
            this.index += 2;
            let r = this.skipMultiLineComment();
            t = [...t, ...r];
          }
        }
      }
    }
    return t;
  }
  isKeyword(t) {
    switch ((t = t.toLowerCase()).length) {
      case 2:
        return t === V.If || t === V.In;
      case 3:
        return t === V.Var || t === V.For;
      case 4:
        return t === V.Else;
      case 5:
        return t === V.Break || t === V.While;
      case 6:
        return t === V.Return || t === V.Import || t === V.Export;
      case 8:
        return t === V.Function || t === V.Continue;
      default:
        return !1;
    }
  }
  codePointAt(t) {
    let n = this.source.charCodeAt(t);
    if (n >= 55296 && n <= 56319) {
      let r = this.source.charCodeAt(t + 1);
      r >= 56320 && r <= 57343 && (n = 1024 * (n - 55296) + r - 56320 + 65536);
    }
    return n;
  }
  scanHexEscape(t) {
    let n = t === "u" ? 4 : 2, r = 0;
    for (let a = 0; a < n; a++) {
      if (this.eof() || !q.isHexDigit(this.source.charCodeAt(this.index))) return null;
      r = 16 * r + oi(this.source[this.index] ?? ""), this.index += 1;
    }
    return String.fromCharCode(r);
  }
  scanUnicodeCodePointEscape() {
    let t = this.source[this.index], n = 0;
    for (t === "}" && this.throwUnexpectedToken(); !this.eof() && (t = this.source[this.index] ?? "", this.index += 1, q.isHexDigit(t.charCodeAt(0))); ) n = 16 * n + oi(t);
    return (n > 1114111 || t !== "}") && this.throwUnexpectedToken(), q.fromCodePoint(n);
  }
  getIdentifier() {
    let t = this.index;
    for (this.index += 1; !this.eof(); ) {
      let n = this.source.charCodeAt(this.index);
      if (n === 92) return this.index = t, this.getComplexIdentifier();
      if (n >= 55296 && n < 57343) return this.index = t, this.getComplexIdentifier();
      if (!q.isIdentifierPart(n)) break;
      this.index += 1;
    }
    return this.source.slice(t, this.index);
  }
  getComplexIdentifier() {
    let t, n = this.codePointAt(this.index), r = q.fromCodePoint(n);
    for (this.index += r.length, n === 92 && (this.source.charCodeAt(this.index) !== 117 && this.throwUnexpectedToken(), this.index += 1, this.source[this.index] === "{" ? (this.index += 1, t = this.scanUnicodeCodePointEscape()) : (t = this.scanHexEscape("u"), (t === null || t === "\\" || !q.isIdentifierStart(t.charCodeAt(0))) && this.throwUnexpectedToken()), r = t); !this.eof() && (n = this.codePointAt(this.index), q.isIdentifierPart(n)); ) t = q.fromCodePoint(n), r += t, this.index += t.length, n === 92 && (r = r.substring(0, r.length - 1), this.source.charCodeAt(this.index) !== 117 && this.throwUnexpectedToken(), this.index += 1, this.source[this.index] === "{" ? (this.index += 1, t = this.scanUnicodeCodePointEscape()) : (t = this.scanHexEscape("u"), (t === null || t === "\\" || !q.isIdentifierPart(t.charCodeAt(0))) && this.throwUnexpectedToken()), r += t);
    return r;
  }
  octalToDecimal(t) {
    let n = t !== "0", r = _n(t);
    return !this.eof() && q.isOctalDigit(this.source.charCodeAt(this.index)) && (n = !0, r = 8 * r + _n(this.source[this.index] ?? ""), this.index += 1, "0123".includes(t) && !this.eof() && q.isOctalDigit(this.source.charCodeAt(this.index)) && (r = 8 * r + _n(this.source[this.index] ?? ""), this.index += 1)), { code: r, octal: n };
  }
  scanIdentifier() {
    let t, n = this.index, r = this.source.charCodeAt(n) === 92 ? this.getComplexIdentifier() : this.getIdentifier();
    if (t = r.length === 1 ? S.Identifier : this.isKeyword(r) ? S.Keyword : r.toLowerCase() === sn.Null ? S.NullLiteral : r.toLowerCase() === sn.True || r.toLowerCase() === sn.False ? S.BooleanLiteral : S.Identifier, t !== S.Identifier && n + r.length !== this.index) {
      let a = this.index;
      this.index = n, this.tolerateUnexpectedToken(A.InvalidEscapedReservedWord), this.index = a;
    }
    return { type: t, value: r, lineNumber: this.lineNumber, lineStart: this.lineStart, start: n, end: this.index };
  }
  scanPunctuator() {
    let t = this.index, n = this.source[this.index] ?? "";
    switch (n) {
      case "(":
      case "{":
        n === "{" && this.curlyStack.push("{"), this.index += 1;
        break;
      case ".":
      case ")":
      case ";":
      case ",":
      case "[":
      case "]":
      case ":":
      case "?":
      case "~":
        this.index += 1;
        break;
      case "}":
        this.index += 1, this.curlyStack.pop();
        break;
      default:
        for (let r = it.length; r > 0; r--) if (n = this.source.substring(this.index, this.index + r), it[r - 1]?.includes(n)) {
          this.index += r;
          break;
        }
    }
    return this.index === t && this.throwUnexpectedToken(), { type: S.Punctuator, value: n, lineNumber: this.lineNumber, lineStart: this.lineStart, start: t, end: this.index };
  }
  scanHexLiteral(t) {
    let n = "";
    for (; !this.eof() && q.isHexDigit(this.source.charCodeAt(this.index)); ) n += this.source[this.index], this.index += 1;
    return n.length === 0 && this.throwUnexpectedToken(), q.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: S.NumericLiteral, value: Number.parseInt(`0x${n}`, 16), lineNumber: this.lineNumber, lineStart: this.lineStart, start: t, end: this.index };
  }
  scanBinaryLiteral(t) {
    let n = "";
    for (; !this.eof(); ) {
      let r = this.source[this.index];
      if (r !== "0" && r !== "1") break;
      n += this.source[this.index], this.index += 1;
    }
    if (n.length === 0 && this.throwUnexpectedToken(), !this.eof()) {
      let r = this.source.charCodeAt(this.index);
      (q.isIdentifierStart(r) || q.isDecimalDigit(r)) && this.throwUnexpectedToken();
    }
    return { type: S.NumericLiteral, value: Number.parseInt(n, 2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: t, end: this.index };
  }
  scanOctalLiteral(t, n) {
    let r = "", a = !1;
    for (q.isOctalDigit(t.charCodeAt(0)) && (a = !0, r = `0${this.source[this.index]}`), this.index += 1; !this.eof() && q.isOctalDigit(this.source.charCodeAt(this.index)); ) r += this.source[this.index], this.index += 1;
    return !a && r.length === 0 && this.throwUnexpectedToken(), (q.isIdentifierStart(this.source.charCodeAt(this.index)) || q.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), { type: S.NumericLiteral, value: Number.parseInt(r, 8), lineNumber: this.lineNumber, lineStart: this.lineStart, start: n, end: this.index };
  }
  scanNumericLiteral() {
    let t = this.index, n = this.source[t] ?? "";
    ai(q.isDecimalDigit(n.charCodeAt(0)) || n === ".", "Numeric literal must start with a decimal digit or a decimal point");
    let r = "";
    if (n !== ".") {
      if (r = this.source[this.index] ?? "", this.index += 1, n = this.source[this.index] ?? "", r === "0") {
        if (n === "x" || n === "X") return this.index += 1, this.scanHexLiteral(t);
        if (n === "b" || n === "B") return this.index += 1, this.scanBinaryLiteral(t);
        if (n === "o" || n === "O") return this.scanOctalLiteral(n, t);
      }
      for (; q.isDecimalDigit(this.source.charCodeAt(this.index)); ) r += this.source[this.index], this.index += 1;
      n = this.source[this.index] ?? "";
    }
    if (n === ".") {
      for (r += this.source[this.index], this.index += 1; q.isDecimalDigit(this.source.charCodeAt(this.index)); ) r += this.source[this.index], this.index += 1;
      n = this.source[this.index] ?? "";
    }
    if (n === "e" || n === "E") if (r += this.source[this.index], this.index += 1, n = this.source[this.index] ?? "", (n === "+" || n === "-") && (r += this.source[this.index], this.index += 1), q.isDecimalDigit(this.source.charCodeAt(this.index))) for (; q.isDecimalDigit(this.source.charCodeAt(this.index)); ) r += this.source[this.index], this.index += 1;
    else this.throwUnexpectedToken();
    return q.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: S.NumericLiteral, value: Number.parseFloat(r), lineNumber: this.lineNumber, lineStart: this.lineStart, start: t, end: this.index };
  }
  scanStringLiteral() {
    let t = this.index, n = this.source[t];
    ai(n === "'" || n === '"', "String literal must starts with a quote"), this.index += 1;
    let r = !1, a = "";
    for (; !this.eof(); ) {
      let o = this.source[this.index] ?? "";
      if (this.index += 1, o === n) {
        n = "";
        break;
      }
      if (o === "\\") if (o = this.source[this.index] ?? "", this.index += 1, o && q.isLineTerminator(o.charCodeAt(0))) this.lineNumber += 1, o === "\r" && this.source[this.index] === `
` && (this.index += 1), this.lineStart = this.index;
      else switch (o) {
        case "u":
          if (this.source[this.index] === "{") this.index += 1, a += this.scanUnicodeCodePointEscape();
          else {
            let s = this.scanHexEscape(o);
            s === null && this.throwUnexpectedToken(), a += s;
          }
          break;
        case "x": {
          let s = this.scanHexEscape(o);
          s === null && this.throwUnexpectedToken(A.InvalidHexEscapeSequence), a += s;
          break;
        }
        case "n":
          a += `
`;
          break;
        case "r":
          a += "\r";
          break;
        case "t":
          a += "	";
          break;
        case "b":
          a += "\b";
          break;
        case "f":
          a += "\f";
          break;
        case "v":
          a += "\v";
          break;
        case "8":
        case "9":
          a += o, this.tolerateUnexpectedToken();
          break;
        default:
          if (o && q.isOctalDigit(o.charCodeAt(0))) {
            let s = this.octalToDecimal(o);
            r = s.octal || r, a += String.fromCharCode(s.code);
          } else a += o;
      }
      else {
        if (q.isLineTerminator(o.charCodeAt(0))) break;
        a += o;
      }
    }
    return n !== "" && (this.index = t, this.throwUnexpectedToken()), { type: S.StringLiteral, value: a, lineNumber: this.lineNumber, lineStart: this.lineStart, start: t, end: this.index };
  }
  scanTemplate() {
    let t = "", n = !1, r = this.index, a = this.source[r] === "`", o = !1, s = 2;
    for (this.index += 1; !this.eof(); ) {
      let i = this.source[this.index] ?? "";
      if (this.index += 1, i === "`") {
        s = 1, o = !0, n = !0;
        break;
      }
      if (i !== "$") if (i !== "\\") q.isLineTerminator(i.charCodeAt(0)) ? (this.lineNumber += 1, i === "\r" && this.source[this.index] === `
` && (this.index += 1), this.lineStart = this.index, t += `
`) : t += i;
      else if (i = this.source[this.index] ?? "", this.index += 1, q.isLineTerminator(i.charCodeAt(0))) this.lineNumber += 1, i === "\r" && this.source[this.index] === `
` && (this.index += 1), this.lineStart = this.index;
      else switch (i) {
        case "n":
          t += `
`;
          break;
        case "r":
          t += "\r";
          break;
        case "t":
          t += "	";
          break;
        case "u":
          if (this.source[this.index] === "{") this.index += 1, t += this.scanUnicodeCodePointEscape();
          else {
            let u = this.index, l = this.scanHexEscape(i);
            l !== null ? t += l : (this.index = u, t += i);
          }
          break;
        case "x": {
          let u = this.scanHexEscape(i);
          u === null && this.throwUnexpectedToken(A.InvalidHexEscapeSequence), t += u;
          break;
        }
        case "b":
          t += "\b";
          break;
        case "f":
          t += "\f";
          break;
        case "v":
          t += "\v";
          break;
        default:
          i === "0" ? (q.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(A.TemplateOctalLiteral), t += "\0") : q.isOctalDigit(i.charCodeAt(0)) ? this.throwUnexpectedToken(A.TemplateOctalLiteral) : t += i;
      }
      else {
        if (this.source[this.index] === "{") {
          this.curlyStack.push("${"), this.index += 1, n = !0;
          break;
        }
        t += i;
      }
    }
    return n || this.throwUnexpectedToken(), a || this.curlyStack.pop(), { type: S.Template, value: this.source.slice(r + 1, this.index - s), cooked: t, head: a, tail: o, lineNumber: this.lineNumber, lineStart: this.lineStart, start: r, end: this.index };
  }
  lex() {
    if (this.eof()) return { type: S.EOF, value: "", lineNumber: this.lineNumber, lineStart: this.lineStart, start: this.index, end: this.index };
    let t = this.source.charCodeAt(this.index);
    return q.isIdentifierStart(t) ? this.scanIdentifier() : t === 40 || t === 41 || t === 59 ? this.scanPunctuator() : t === 39 || t === 34 ? this.scanStringLiteral() : t === 46 ? q.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : q.isDecimalDigit(t) ? this.scanNumericLiteral() : t === 96 || t === 125 && this.curlyStack[this.curlyStack.length - 1] === "${" ? this.scanTemplate() : t >= 55296 && t < 57343 && q.isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator();
  }
}, Fe = { None: 0, Function: 1, IfClause: 2, ForLoop: 4, WhileLoop: 8 }, Rn = { AsObject: 0, Automatic: 1 };
function ui(e, t = 0) {
  let n = e.start - e.lineStart, r = e.lineNumber;
  return n < 0 && (n += t, r -= 1), { index: e.start, line: r, column: n };
}
function li(e) {
  return [{ index: e.range[0], ...e.loc.start }, { index: e.range[1], ...e.loc.end }];
}
function ci(e) {
  return e in ni ? ni[e] : 0;
}
var Yo = class {
  constructor(t, n = {}, r) {
    this.delegate = r, this.hasLineTerminator = !1, this.options = { tokens: typeof n.tokens == "boolean" && n.tokens, comments: typeof n.comments == "boolean" && n.comments, tolerant: typeof n.tolerant == "boolean" && n.tolerant }, this.options.comments && (this.commentHandler = new Vo()), this.errorHandler = new Wo(this.options.tolerant), this.scanner = new Ko(t, this.errorHandler), this.context = { isAssignmentTarget: !1, blockContext: Fe.None, curlyParsingType: Rn.AsObject }, this.rawToken = { type: S.EOF, value: "", lineNumber: this.scanner.lineNumber, lineStart: 0, start: 0, end: 0 }, this.tokens = [], this.startMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.endMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.readNextRawToken(), this.endMarker = { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart };
  }
  throwIfInvalidType(t, n, { validTypes: r, invalidTypes: a }) {
    r?.some((o) => t.type === o) || a?.some((o) => t.type === o) && this.throwError(A.InvalidExpression, n);
  }
  throwError(t, n, r = this.endMarker) {
    let { index: a, line: o, column: s } = n, i = r.index - a - 1;
    this.errorHandler.throwError({ code: t, index: a, line: o, column: s + 1, len: i });
  }
  tolerateError(t, n) {
    throw new Error("######################################### !!!");
  }
  unexpectedTokenError(t = {}) {
    let n, { rawToken: r } = t, { code: a, data: o } = t;
    if (r) {
      if (!a) switch (r.type) {
        case S.EOF:
          a = A.UnexpectedEndOfScript;
          break;
        case S.Identifier:
          a = A.UnexpectedIdentifier;
          break;
        case S.NumericLiteral:
          a = A.UnexpectedNumber;
          break;
        case S.StringLiteral:
          a = A.UnexpectedString;
          break;
        case S.Template:
          a = A.UnexpectedTemplate;
      }
      n = r.value.toString();
    } else n = "ILLEGAL";
    a ?? (a = A.UnexpectedToken), o || (o = { value: n });
    let s = rr(a, o);
    if (r) {
      let l = r.start, f = r.lineNumber, d = r.start - r.lineStart + 1;
      return new Jt({ code: a, index: l, line: f, column: d, len: r.end - r.start - 1, data: o, description: s });
    }
    let { index: i, line: u } = this.endMarker;
    return new Jt({ code: a, index: i, line: u, column: this.endMarker.column + 1, data: o, description: s });
  }
  throwUnexpectedToken(t = {}) {
    throw t.rawToken ?? (t.rawToken = this.rawToken), this.unexpectedTokenError(t);
  }
  collectComments(t) {
    let { commentHandler: n } = this;
    !n || !t.length || t.forEach((r) => {
      let a = { type: r.multiLine ? v.BlockComment : v.LineComment, value: this.getSourceValue(r), range: r.range, loc: r.loc };
      n.collectComment(a);
    });
  }
  peekAhead(t) {
    let n = () => (this.scanner.scanComments(), this.scanner.lex()), r = this.scanner.saveState(), a = t.call(this, n);
    return this.scanner.restoreState(r), a;
  }
  getSourceValue(t) {
    return this.scanner.source.slice(t.start, t.end);
  }
  convertToToken(t) {
    return { type: zo[t.type], value: this.getSourceValue(t), range: [t.start, t.end], loc: { start: { line: this.startMarker.line, column: this.startMarker.column }, end: { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart } } };
  }
  readNextRawToken() {
    this.endMarker.index = this.scanner.index, this.endMarker.line = this.scanner.lineNumber, this.endMarker.column = this.scanner.index - this.scanner.lineStart;
    let t = this.rawToken;
    this.collectComments(this.scanner.scanComments()), this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart), this.rawToken = this.scanner.lex(), this.hasLineTerminator = t.lineNumber !== this.rawToken.lineNumber, this.options.tokens && this.rawToken.type !== S.EOF && this.tokens.push(this.convertToToken(this.rawToken));
  }
  captureStartMarker() {
    return { index: this.startMarker.index, line: this.startMarker.line, column: this.startMarker.column };
  }
  getItemLocation(t) {
    return { range: [t.index, this.endMarker.index], loc: { start: { line: t.line, column: t.column }, end: { line: this.endMarker.line, column: this.endMarker.column } } };
  }
  finalize(t) {
    return (this.delegate ?? this.commentHandler) && (this.commentHandler?.attachComments(t), this.delegate?.(t)), t;
  }
  expectPunctuator(t) {
    let n = this.rawToken;
    this.matchPunctuator(t) ? this.readNextRawToken() : this.throwUnexpectedToken({ rawToken: n, code: A.PunctuatorExpected, data: { value: t } });
  }
  expectKeyword(t) {
    this.rawToken.type !== S.Keyword || this.rawToken.value.toLowerCase() !== t.toString() ? this.throwUnexpectedToken({ rawToken: this.rawToken }) : this.readNextRawToken();
  }
  expectContextualKeyword(t) {
    this.rawToken.type !== S.Identifier || this.rawToken.value.toLowerCase() !== t ? this.throwUnexpectedToken({ rawToken: this.rawToken }) : this.readNextRawToken();
  }
  matchKeyword(t) {
    return this.rawToken.type === S.Keyword && this.rawToken.value.toLowerCase() === t;
  }
  matchContextualKeyword(t) {
    return this.rawToken.type === S.Identifier && this.rawToken.value === t;
  }
  matchPunctuator(t) {
    return this.rawToken.type === S.Punctuator && this.rawToken.value === t;
  }
  getMatchingPunctuator(t) {
    if (typeof t == "string" && (t = t.split("")), this.rawToken.type === S.Punctuator && t.length) return t.find(this.matchPunctuator.bind(this));
  }
  isolateCoverGrammar(t) {
    let n = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = !0;
    let r = t.call(this);
    return this.context.isAssignmentTarget = n, r;
  }
  inheritCoverGrammar(t) {
    var n;
    let r = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = !0;
    let a = t.call(this);
    return (n = this.context).isAssignmentTarget && (n.isAssignmentTarget = r), a;
  }
  withBlockContext(t, n) {
    let r = this.context.blockContext;
    this.context.blockContext |= t;
    let a = this.context.curlyParsingType;
    this.context.curlyParsingType = Rn.Automatic;
    let o = n.call(this);
    return this.context.blockContext = r, this.context.curlyParsingType = a, o;
  }
  consumeSemicolon() {
    if (this.matchPunctuator(";")) this.readNextRawToken();
    else if (!this.hasLineTerminator) {
      if (this.rawToken.type === S.EOF || this.matchPunctuator("}")) return this.endMarker.index = this.startMarker.index, this.endMarker.line = this.startMarker.line, void (this.endMarker.column = this.startMarker.column);
      this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parsePrimaryExpression() {
    let t = this.captureStartMarker(), n = this.rawToken;
    switch (n.type) {
      case S.Identifier:
        return this.readNextRawToken(), this.finalize({ type: v.Identifier, name: n.value, ...this.getItemLocation(t) });
      case S.NumericLiteral:
      case S.StringLiteral:
        return this.context.isAssignmentTarget = !1, this.readNextRawToken(), this.finalize({ type: v.Literal, value: n.value, raw: this.getSourceValue(n), isString: typeof n.value == "string", ...this.getItemLocation(t) });
      case S.BooleanLiteral:
        return this.context.isAssignmentTarget = !1, this.readNextRawToken(), this.finalize({ type: v.Literal, value: n.value.toLowerCase() === sn.True, raw: this.getSourceValue(n), isString: !1, ...this.getItemLocation(t) });
      case S.NullLiteral:
        return this.context.isAssignmentTarget = !1, this.readNextRawToken(), this.finalize({ type: v.Literal, value: null, raw: this.getSourceValue(n), isString: !1, ...this.getItemLocation(t) });
      case S.Template:
        return this.parseTemplateLiteral();
      case S.Punctuator:
        switch (n.value) {
          case "(":
            return this.inheritCoverGrammar(this.parseGroupExpression.bind(this));
          case "[":
            return this.inheritCoverGrammar(this.parseArrayInitializer.bind(this));
          case "{":
            return this.inheritCoverGrammar(this.parseObjectExpression.bind(this));
          default:
            return this.throwUnexpectedToken({ rawToken: this.rawToken });
        }
      case S.Keyword:
        return this.context.isAssignmentTarget = !1, this.throwUnexpectedToken({ rawToken: this.rawToken });
      default:
        return this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parseArrayInitializer() {
    let t = this.captureStartMarker();
    this.expectPunctuator("[");
    let n = [];
    for (; !this.matchPunctuator("]"); ) {
      let r = this.captureStartMarker();
      this.matchPunctuator(",") ? (this.readNextRawToken(), this.throwError(A.InvalidExpression, r)) : (n.push(this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this))), this.matchPunctuator("]") || this.expectPunctuator(","));
    }
    return this.expectPunctuator("]"), this.finalize({ type: v.ArrayExpression, elements: n, ...this.getItemLocation(t) });
  }
  parseObjectPropertyKey() {
    let t = this.captureStartMarker(), n = this.rawToken;
    switch (n.type) {
      case S.StringLiteral:
        return this.readNextRawToken(), this.finalize({ type: v.Literal, value: n.value, raw: this.getSourceValue(n), isString: !0, ...this.getItemLocation(t) });
      case S.Identifier:
      case S.BooleanLiteral:
      case S.NullLiteral:
      case S.Keyword:
        return this.readNextRawToken(), this.finalize({ type: v.Identifier, name: n.value, ...this.getItemLocation(t) });
      default:
        this.throwError(A.KeyMustBeString, t);
    }
  }
  parseObjectProperty() {
    let t = this.rawToken, n = this.captureStartMarker(), r = this.parseObjectPropertyKey(), a = !1, o = null;
    return this.matchPunctuator(":") ? (this.readNextRawToken(), o = this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this))) : t.type === S.Identifier ? (a = !0, o = this.finalize({ type: v.Identifier, name: t.value, ...this.getItemLocation(n) })) : this.throwUnexpectedToken({ rawToken: this.rawToken }), this.finalize({ type: v.Property, kind: "init", key: r, value: o, shorthand: a, ...this.getItemLocation(n) });
  }
  parseObjectExpression() {
    let t = this.captureStartMarker();
    this.expectPunctuator("{");
    let n = [];
    for (; !this.matchPunctuator("}"); ) n.push(this.parseObjectProperty()), this.matchPunctuator("}") || this.expectPunctuator(",");
    return this.expectPunctuator("}"), this.finalize({ type: v.ObjectExpression, properties: n, ...this.getItemLocation(t) });
  }
  parseTemplateElement(t = !1) {
    let n = this.rawToken;
    n.type !== S.Template && this.throwUnexpectedToken({ rawToken: n }), t && !n.head && this.throwUnexpectedToken({ code: A.InvalidTemplateHead, rawToken: n });
    let r = this.captureStartMarker();
    this.readNextRawToken();
    let { value: a, cooked: o, tail: s } = n, i = this.finalize({ type: v.TemplateElement, value: { raw: a, cooked: o }, tail: s, ...this.getItemLocation(r) });
    return i.loc.start.column += 1, i.loc.end.column -= s ? 1 : 2, i;
  }
  parseTemplateLiteral() {
    let t = this.captureStartMarker(), n = [], r = [], a = this.parseTemplateElement(!0);
    for (r.push(a); !a.tail; ) n.push(this.parseExpression()), a = this.parseTemplateElement(), r.push(a);
    return this.finalize({ type: v.TemplateLiteral, quasis: r, expressions: n, ...this.getItemLocation(t) });
  }
  parseGroupExpression() {
    this.expectPunctuator("(");
    let t = this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this));
    return this.expectPunctuator(")"), t;
  }
  parseArguments() {
    this.expectPunctuator("(");
    let t = [];
    if (!this.matchPunctuator(")")) for (; ; ) {
      let n = this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
      if (t.push(n), this.matchPunctuator(")") || (this.expectPunctuator(","), this.matchPunctuator(")"))) break;
    }
    return this.expectPunctuator(")"), t;
  }
  parseMemberName() {
    let t = this.rawToken, n = this.captureStartMarker();
    return this.readNextRawToken(), t.type !== S.NullLiteral && t.type !== S.Identifier && t.type !== S.Keyword && t.type !== S.BooleanLiteral && this.throwUnexpectedToken({ rawToken: t }), this.finalize({ type: v.Identifier, name: t.value, ...this.getItemLocation(n) });
  }
  parseLeftHandSideExpression() {
    let t, n = this.captureStartMarker(), r = this.inheritCoverGrammar(this.parsePrimaryExpression.bind(this)), a = this.captureStartMarker();
    for (; t = this.getMatchingPunctuator("([."); ) switch (t) {
      case "(": {
        this.context.isAssignmentTarget = !1, r.type !== v.Identifier && r.type !== v.MemberExpression && this.throwError(A.IdentiferExpected, n, a);
        let o = this.parseArguments();
        r = this.finalize({ type: v.CallExpression, callee: r, arguments: o, ...this.getItemLocation(n) });
        continue;
      }
      case "[": {
        this.context.isAssignmentTarget = !0, this.expectPunctuator("[");
        let o = this.isolateCoverGrammar(() => this.parseExpression());
        this.expectPunctuator("]"), r = this.finalize({ type: v.MemberExpression, computed: !0, object: r, property: o, ...this.getItemLocation(n) });
        continue;
      }
      case ".": {
        this.context.isAssignmentTarget = !0, this.expectPunctuator(".");
        let o = this.parseMemberName();
        r = this.finalize({ type: v.MemberExpression, computed: !1, object: r, property: o, ...this.getItemLocation(n) });
        continue;
      }
    }
    return r;
  }
  parseUpdateExpression() {
    let t = this.captureStartMarker(), n = this.getMatchingPunctuator(nr);
    if (n) {
      this.readNextRawToken();
      let s = this.captureStartMarker(), i = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
      return i.type !== v.Identifier && i.type !== v.MemberExpression && i.type !== v.CallExpression && this.throwError(A.InvalidExpression, s), this.context.isAssignmentTarget || this.tolerateError(A.InvalidLeftHandSideInAssignment, t), this.context.isAssignmentTarget = !1, this.finalize({ type: v.UpdateExpression, operator: n, argument: i, prefix: !0, ...this.getItemLocation(t) });
    }
    let r = this.captureStartMarker(), a = this.inheritCoverGrammar(this.parseLeftHandSideExpression.bind(this)), o = this.captureStartMarker();
    return this.hasLineTerminator || (n = this.getMatchingPunctuator(nr), !n) ? a : (a.type !== v.Identifier && a.type !== v.MemberExpression && this.throwError(A.InvalidExpression, r, o), this.context.isAssignmentTarget || this.tolerateError(A.InvalidLeftHandSideInAssignment, t), this.readNextRawToken(), this.context.isAssignmentTarget = !1, this.finalize({ type: v.UpdateExpression, operator: n, argument: a, prefix: !1, ...this.getItemLocation(t) }));
  }
  parseUnaryExpression() {
    let t = this.getMatchingPunctuator(ca);
    if (t) {
      let n = this.captureStartMarker();
      this.readNextRawToken();
      let r = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
      return this.context.isAssignmentTarget = !1, this.finalize({ type: v.UnaryExpression, operator: t, argument: r, prefix: !0, ...this.getItemLocation(n) });
    }
    return this.parseUpdateExpression();
  }
  parseBinaryExpression() {
    let t = this.rawToken, n = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
    if (this.rawToken.type !== S.Punctuator) return n;
    let r = this.rawToken.value, a = ci(r);
    if (a === 0) return n;
    this.readNextRawToken(), this.context.isAssignmentTarget = !1;
    let o = [t, this.rawToken], s = n, i = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this)), u = [s, r, i], l = [a];
    for (; this.rawToken.type === S.Punctuator && (a = ci(this.rawToken.value)) > 0; ) {
      for (; u.length > 2 && a <= l[l.length - 1]; ) {
        i = u.pop();
        let m = u.pop();
        l.pop(), s = u.pop(), o.pop();
        let g = o[o.length - 1], y = ui(g, g.lineStart);
        u.push(this.finalize(this.createBinaryOrLogicalExpression(y, m, s, i)));
      }
      u.push(this.rawToken.value), l.push(a), o.push(this.rawToken), this.readNextRawToken(), u.push(this.inheritCoverGrammar(this.parseUnaryExpression.bind(this)));
    }
    let f = u.length - 1;
    n = u[f];
    let d = o.pop();
    for (; f > 1; ) {
      let m = o.pop();
      if (!m) break;
      let g = d?.lineStart, y = ui(m, g), k = u[f - 1];
      n = this.finalize(this.createBinaryOrLogicalExpression(y, k, u[f - 2], n)), f -= 2, d = m;
    }
    return n;
  }
  createBinaryOrLogicalExpression(t, n, r, a) {
    let o = da.includes(n) ? v.LogicalExpression : v.BinaryExpression;
    return o === v.BinaryExpression || ((r.type === v.AssignmentExpression || r.type === v.UpdateExpression) && this.throwError(A.InvalidExpression, ...li(r)), (a.type === v.AssignmentExpression || a.type === v.UpdateExpression) && this.throwError(A.InvalidExpression, ...li(r))), { type: o, operator: n, left: r, right: a, ...this.getItemLocation(t) };
  }
  parseAssignmentExpression() {
    let t = this.captureStartMarker(), n = this.inheritCoverGrammar(this.parseBinaryExpression.bind(this)), r = this.captureStartMarker(), a = this.getMatchingPunctuator(ha);
    if (!a) return n;
    n.type !== v.Identifier && n.type !== v.MemberExpression && this.throwError(A.InvalidExpression, t, r), this.context.isAssignmentTarget || this.tolerateError(A.InvalidLeftHandSideInAssignment, t), this.matchPunctuator("=") || (this.context.isAssignmentTarget = !1), this.readNextRawToken();
    let o = this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
    return this.finalize({ type: v.AssignmentExpression, left: n, operator: a, right: o, ...this.getItemLocation(t) });
  }
  parseExpression() {
    return this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
  }
  parseStatements(t) {
    let n = [];
    for (; this.rawToken.type !== S.EOF && !this.matchPunctuator(t); ) {
      let r = this.parseStatementListItem();
      Jo(r) || n.push(r);
    }
    return n;
  }
  parseStatementListItem() {
    return this.context.isAssignmentTarget = !0, this.matchKeyword(V.Function) ? this.parseFunctionDeclaration() : this.matchKeyword(V.Export) ? this.parseExportDeclaration() : this.matchKeyword(V.Import) ? this.parseImportDeclaration() : this.parseStatement();
  }
  parseBlock() {
    let t = this.captureStartMarker();
    this.expectPunctuator("{");
    let n = this.parseStatements("}");
    return this.expectPunctuator("}"), this.finalize({ type: v.BlockStatement, body: n, ...this.getItemLocation(t) });
  }
  parseObjectStatement() {
    let t = this.captureStartMarker(), n = this.parseObjectExpression();
    return this.finalize({ type: v.ExpressionStatement, expression: n, ...this.getItemLocation(t) });
  }
  parseBlockOrObjectStatement() {
    return this.context.curlyParsingType === Rn.AsObject || this.peekAhead((t) => {
      let n = t();
      return !(n.type !== S.Identifier && n.type !== S.StringLiteral || (n = t(), n.type !== S.Punctuator || n.value !== ":"));
    }) ? this.parseObjectStatement() : this.parseBlock();
  }
  parseIdentifier() {
    let t = this.rawToken;
    if (t.type !== S.Identifier) return null;
    let n = this.captureStartMarker();
    return this.readNextRawToken(), this.finalize({ type: v.Identifier, name: t.value, ...this.getItemLocation(n) });
  }
  parseVariableDeclarator() {
    let t = this.captureStartMarker(), n = this.parseIdentifier();
    n || this.throwUnexpectedToken({ code: A.IdentiferExpected });
    let r = null;
    if (this.matchPunctuator("=")) {
      this.readNextRawToken();
      let a = this.rawToken;
      try {
        r = this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
      } catch {
        this.throwUnexpectedToken({ rawToken: a, code: A.InvalidVariableAssignment });
      }
    }
    return this.finalize({ type: v.VariableDeclarator, id: n, init: r, ...this.getItemLocation(t) });
  }
  parseVariableDeclarationList() {
    let t = [this.parseVariableDeclarator()];
    for (; this.matchPunctuator(","); ) this.readNextRawToken(), t.push(this.parseVariableDeclarator());
    return t;
  }
  parseVariableDeclaration() {
    let t = this.captureStartMarker();
    this.expectKeyword(V.Var);
    let n = this.parseVariableDeclarationList();
    return this.consumeSemicolon(), this.finalize({ type: v.VariableDeclaration, declarations: n, kind: "var", ...this.getItemLocation(t) });
  }
  parseEmptyStatement() {
    let t = this.captureStartMarker();
    return this.expectPunctuator(";"), this.finalize({ type: v.EmptyStatement, ...this.getItemLocation(t) });
  }
  parseExpressionStatement() {
    let t = this.captureStartMarker(), n = this.parseExpression();
    return this.consumeSemicolon(), this.finalize({ type: v.ExpressionStatement, expression: n, ...this.getItemLocation(t) });
  }
  parseIfClause() {
    return this.withBlockContext(Fe.IfClause, this.parseStatement.bind(this));
  }
  parseIfStatement() {
    let t = this.captureStartMarker();
    this.expectKeyword(V.If), this.expectPunctuator("(");
    let n = this.captureStartMarker(), r = this.parseExpression(), a = this.captureStartMarker();
    this.expectPunctuator(")"), (r.type === v.AssignmentExpression || r.type === v.UpdateExpression) && this.throwError(A.InvalidExpression, n, a);
    let o = this.parseIfClause(), s = null;
    return this.matchKeyword(V.Else) && (this.readNextRawToken(), s = this.parseIfClause()), this.finalize({ type: v.IfStatement, test: r, consequent: o, alternate: s, ...this.getItemLocation(t) });
  }
  parseWhileStatement() {
    let t = this.captureStartMarker();
    this.expectKeyword(V.While), this.expectPunctuator("(");
    let n = this.captureStartMarker(), r = this.parseExpression(), a = this.captureStartMarker();
    this.expectPunctuator(")"), (r.type === v.AssignmentExpression || r.type === v.UpdateExpression) && this.throwError(A.InvalidExpression, n, a);
    let o = this.withBlockContext(Fe.WhileLoop, this.parseStatement.bind(this));
    return this.finalize({ type: v.WhileStatement, test: r, body: o, ...this.getItemLocation(t) });
  }
  parseForStatement() {
    let t = null, n = null, r = null, a = null, o = null, s = this.captureStartMarker();
    if (this.expectKeyword(V.For), this.expectPunctuator("("), this.matchPunctuator(";")) this.readNextRawToken();
    else if (this.matchKeyword(V.Var)) {
      let u = this.captureStartMarker();
      this.readNextRawToken();
      let l = this.parseVariableDeclarationList();
      l.length === 1 && this.matchKeyword(V.In) ? (l[0].init && this.throwError(A.ForInOfLoopInitializer, u), a = this.finalize({ type: v.VariableDeclaration, declarations: l, kind: "var", ...this.getItemLocation(u) }), this.readNextRawToken(), o = this.parseExpression()) : (this.matchKeyword(V.In) && this.throwError(A.InvalidLeftHandSideInForIn, u), t = this.finalize({ type: v.VariableDeclaration, declarations: l, kind: "var", ...this.getItemLocation(u) }), this.expectPunctuator(";"));
    } else {
      let u = this.context.isAssignmentTarget, l = this.captureStartMarker();
      t = this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this)), this.matchKeyword(V.In) ? (this.context.isAssignmentTarget || this.tolerateError(A.InvalidLeftHandSideInForIn, l), t.type !== v.Identifier && this.throwError(A.InvalidLeftHandSideInForIn, l), this.readNextRawToken(), a = t, o = this.parseExpression(), t = null) : (this.context.isAssignmentTarget = u, this.expectPunctuator(";"));
    }
    a || (this.matchPunctuator(";") || (n = this.isolateCoverGrammar(this.parseExpression.bind(this))), this.expectPunctuator(";"), this.matchPunctuator(")") || (r = this.isolateCoverGrammar(this.parseExpression.bind(this)))), this.expectPunctuator(")");
    let i = this.withBlockContext(Fe.ForLoop, () => this.isolateCoverGrammar(this.parseStatement.bind(this)));
    return a && o ? this.finalize({ type: v.ForInStatement, left: a, right: o, body: i, ...this.getItemLocation(s) }) : this.finalize({ type: v.ForStatement, init: t, test: n, update: r, body: i, ...this.getItemLocation(s) });
  }
  parseContinueStatement() {
    let t = this.captureStartMarker();
    return this.expectKeyword(V.Continue), this.consumeSemicolon(), this.finalize({ type: v.ContinueStatement, ...this.getItemLocation(t) });
  }
  parseBreakStatement() {
    let t = this.captureStartMarker();
    return this.expectKeyword(V.Break), this.consumeSemicolon(), this.finalize({ type: v.BreakStatement, ...this.getItemLocation(t) });
  }
  parseReturnStatement() {
    let t = this.captureStartMarker();
    this.expectKeyword(V.Return);
    let n = (this.matchPunctuator(";") || this.matchPunctuator("}") || this.hasLineTerminator || this.rawToken.type === S.EOF) && this.rawToken.type !== S.StringLiteral && this.rawToken.type !== S.Template ? null : this.parseExpression();
    return this.consumeSemicolon(), this.finalize({ type: v.ReturnStatement, argument: n, ...this.getItemLocation(t) });
  }
  parseStatement() {
    switch (this.rawToken.type) {
      case S.BooleanLiteral:
      case S.NullLiteral:
      case S.NumericLiteral:
      case S.StringLiteral:
      case S.Template:
      case S.Identifier:
        return this.parseExpressionStatement();
      case S.Punctuator:
        return this.rawToken.value === "{" ? this.parseBlockOrObjectStatement() : this.rawToken.value === "(" ? this.parseExpressionStatement() : this.rawToken.value === ";" ? this.parseEmptyStatement() : this.parseExpressionStatement();
      case S.Keyword:
        switch (this.rawToken.value.toLowerCase()) {
          case V.Break:
            return this.parseBreakStatement();
          case V.Continue:
            return this.parseContinueStatement();
          case V.For:
            return this.parseForStatement();
          case V.Function:
            return this.parseFunctionDeclaration();
          case V.If:
            return this.parseIfStatement();
          case V.Return:
            return this.parseReturnStatement();
          case V.Var:
            return this.parseVariableDeclaration();
          case V.While:
            return this.parseWhileStatement();
          default:
            return this.parseExpressionStatement();
        }
      default:
        return this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parseFormalParameters() {
    let t = [];
    if (this.expectPunctuator("("), !this.matchPunctuator(")")) for (; this.rawToken.type !== S.EOF; ) {
      let n = this.parseIdentifier();
      if (n || this.throwUnexpectedToken({ rawToken: this.rawToken, code: A.IdentiferExpected }), t.push(n), this.matchPunctuator(")") || (this.expectPunctuator(","), this.matchPunctuator(")"))) break;
    }
    return this.expectPunctuator(")"), t;
  }
  parseFunctionDeclaration() {
    (this.context.blockContext & Fe.Function) === Fe.Function && this.throwUnexpectedToken({ code: A.NoFunctionInsideFunction }), ((this.context.blockContext & Fe.WhileLoop) === Fe.WhileLoop || (this.context.blockContext & Fe.IfClause) === Fe.IfClause) && this.throwUnexpectedToken({ code: A.NoFunctionInsideBlock });
    let t = this.captureStartMarker();
    this.expectKeyword(V.Function);
    let n = this.parseIdentifier();
    n || this.throwUnexpectedToken({ code: A.InvalidFunctionIdentifier });
    let r = this.parseFormalParameters(), a = this.context.blockContext;
    this.context.blockContext |= Fe.Function;
    let o = this.parseBlock();
    return this.context.blockContext = a, this.finalize({ type: v.FunctionDeclaration, id: n, params: r, body: o, ...this.getItemLocation(t) });
  }
  parseScript() {
    let t = this.captureStartMarker(), n = this.parseStatements(), r = this.finalize({ type: v.Program, body: n, ...this.getItemLocation(t) });
    return this.options.tokens && (r.tokens = this.tokens), this.options.tolerant && (r.errors = this.errorHandler.errors), r;
  }
  parseExportDeclaration() {
    this.context.blockContext !== Fe.None && this.throwUnexpectedToken({ code: A.ModuleExportRootOnly });
    let t = null, n = this.captureStartMarker();
    return this.expectKeyword(V.Export), this.matchKeyword(V.Var) ? t = this.parseVariableDeclaration() : this.matchKeyword("function") ? t = this.parseFunctionDeclaration() : this.throwUnexpectedToken({ code: A.InvalidExpression }), this.finalize({ type: v.ExportNamedDeclaration, declaration: t, specifiers: [], source: null, ...this.getItemLocation(n) });
  }
  parseModuleSpecifier() {
    let t = this.captureStartMarker(), n = this.rawToken;
    if (n.type === S.StringLiteral) return this.readNextRawToken(), this.finalize({ type: v.Literal, value: n.value, raw: this.getSourceValue(n), isString: !0, ...this.getItemLocation(t) });
    this.throwError(A.InvalidModuleUri, t);
  }
  parseDefaultSpecifier() {
    let t = this.captureStartMarker(), n = this.parseIdentifier();
    return n || this.throwUnexpectedToken({ code: A.IdentiferExpected }), this.finalize({ type: v.ImportDefaultSpecifier, local: n, ...this.getItemLocation(t) });
  }
  parseImportDeclaration() {
    this.context.blockContext !== Fe.None && this.throwUnexpectedToken({ code: A.ModuleImportRootOnly });
    let t = this.captureStartMarker();
    this.expectKeyword(V.Import);
    let n = this.parseDefaultSpecifier();
    this.expectContextualKeyword(V.From);
    let r = this.parseModuleSpecifier();
    return this.finalize({ type: v.ImportDeclaration, specifiers: [n], source: r, ...this.getItemLocation(t) });
  }
};
function Xo(e, t, n) {
  return new Yo(e, t, n).parseScript();
}
function fn(e, t = []) {
  const n = Xo(e);
  if (n.body === null || n.body === void 0) throw new Jt({ index: 0, line: 0, column: 0, data: null, description: "", code: A.InvalidExpression });
  return n.loadedModules = {}, Kt(n, t), n;
}
class pn {
  constructor(t) {
    const n = this;
    n._keys = [], n._values = [], n.length = 0, t && t.forEach((r) => {
      n.set(r[0], r[1]);
    });
  }
  entries() {
    return [].slice.call(this.keys().map((t, n) => [t, this._values[n]]));
  }
  keys() {
    return [].slice.call(this._keys);
  }
  values() {
    return [].slice.call(this._values);
  }
  has(t) {
    return this._keys.includes(t);
  }
  get(t) {
    const n = this._keys.indexOf(t);
    return n > -1 ? this._values[n] : null;
  }
  deepGet(t) {
    if (!t?.length) return null;
    const n = (r, a) => r == null ? null : a.length ? n(r instanceof pn ? r.get(a[0]) : r[a[0]], a.slice(1)) : r;
    return n(this.get(t[0]), t.slice(1));
  }
  set(t, n) {
    const r = this, a = this._keys.indexOf(t);
    return a > -1 ? r._values[a] = n : (r._keys.push(t), r._values.push(n), r.length = r._values.length), this;
  }
  sortedSet(t, n, r, a) {
    const o = this, s = this._keys.length, i = r || 0, u = a !== void 0 ? a : s - 1;
    if (s === 0) return o._keys.push(t), o._values.push(n), o;
    if (t === this._keys[i]) return this._values.splice(i, 0, n), this;
    if (t === this._keys[u]) return this._values.splice(u, 0, n), this;
    if (t > this._keys[u]) return this._keys.splice(u + 1, 0, t), this._values.splice(u + 1, 0, n), this;
    if (t < this._keys[i]) return this._values.splice(i, 0, n), this._keys.splice(i, 0, t), this;
    if (i >= u) return this;
    const l = i + Math.floor((u - i) / 2);
    return t < this._keys[l] ? this.sortedSet(t, n, i, l - 1) : t > this._keys[l] ? this.sortedSet(t, n, l + 1, u) : this;
  }
  size() {
    return this.length;
  }
  clear() {
    const t = this;
    return t._keys.length = t.length = t._values.length = 0, this;
  }
  delete(t) {
    const n = this, r = n._keys.indexOf(t);
    return r > -1 && (n._keys.splice(r, 1), n._values.splice(r, 1), n.length = n._keys.length, !0);
  }
  forEach(t) {
    this._keys.forEach((n, r) => {
      t(this._values[r], n, r);
    });
  }
  map(t) {
    return this.keys().map((n, r) => t(this._values[r], n, r));
  }
  filter(t) {
    const n = this;
    return n._keys.forEach((r, a) => {
      t(n._values[a], r, a) === !1 && n.delete(r);
    }), this;
  }
  clone() {
    return new pn(this.entries());
  }
}
class We {
  constructor(t = 20) {
    this._maxEntries = t, this._values = new pn();
  }
  delete(t) {
    this._values.has(t) && this._values.delete(t);
  }
  get(t) {
    let n = null;
    return this._values.has(t) && (n = this._values.get(t), this._values.delete(t), this._values.set(t, n)), n;
  }
  put(t, n) {
    if (this._values.size() >= this._maxEntries) {
      const r = this._values.keys()[0];
      this._values.delete(r);
    }
    this._values.set(t, n);
  }
}
class Qo {
  constructor(t = 20) {
    this._maxEntries = t, this._cache = new We(this._maxEntries), this._layerMetadata = new We(this._maxEntries), this._serviceMetadata = new We(this._maxEntries), this._portalItems = new We(this._maxEntries);
  }
  clear() {
    this._cache = new We(this._maxEntries), this._layerMetadata = new We(this._maxEntries), this._serviceMetadata = new We(this._maxEntries), this._portalItems = new We(this._maxEntries);
  }
  addToCache(t, n) {
    this._cache.put(t, n);
  }
  removeFromCache(t) {
    this._cache.delete(t);
  }
  getFromCache(t) {
    return this._cache.get(t);
  }
  getCachedLayerMetadata(t) {
    return this._layerMetadata.get(t);
  }
  setCachedLayerMetadata(t, n) {
    this._layerMetadata.put(t, n);
  }
  removeCachedLayerMetadata(t, n) {
    this._layerMetadata.get(t) === n && this._layerMetadata.delete(t);
  }
  getCachedServiceMetadata(t) {
    return this._serviceMetadata.get(t);
  }
  setCachedServiceMetadata(t, n) {
    this._serviceMetadata.put(t, n);
  }
  removeCachedServiceMetadata(t, n) {
    this._serviceMetadata.get(t) === n && this._serviceMetadata.delete(t);
  }
  getCachedPortalItem(t, n) {
    return this._portalItems.get(`${n}:${t}`);
  }
  setCachedPortalItem(t, n, r) {
    this._portalItems.put(`${n}:${t}`, r);
  }
  removeCachedPortalItem(t, n, r) {
    const a = `${n}:${t}`;
    this._portalItems.get(a) === r && this._portalItems.delete(a);
  }
}
class ge {
  constructor(t) {
    this.portalUri = t;
  }
  normalizeModuleUri(t) {
    const n = /^[a-z0-9A-Z]+(@[0-9]+\.[0-9]+\.[0-9]+)?([?|/].*)?$/gi, r = /(?<portalurl>.+)\/home\/item\.html\?id=(?<itemid>.+)$/gi, a = /(?<portalurl>.+)\/sharing\/rest\/content\/users\/[a-zA-Z0-9]+\/items\/(?<itemid>.+)$/gi, o = /(?<portalurl>.+)\/sharing\/rest\/content\/items\/(?<itemid>.+)$/gi, s = /(?<itemid>.*)@(?<versionstring>[0-9]+\.[0-9]+\.[0-9]+)([?|/].*)?$/gi;
    if (t.startsWith("portal+")) {
      let i = t.substring(7), u = "", l = i, f = !1;
      for (const g of [r, o, a]) {
        const y = g.exec(i);
        if (y !== null) {
          const k = y.groups;
          l = k.itemid, u = k.portalurl, f = !0;
          break;
        }
      }
      if (f === !1) {
        if (!n.test(i)) throw new En(st.UnsupportedUriProtocol, { uri: t });
        l = i, u = this.portalUri;
      }
      l.includes("/") && (l = l.split("/")[0]), l.includes("?") && (l = l.split("?")[0]);
      let d = "current";
      const m = s.exec(l);
      if (m !== null) {
        const g = m.groups;
        l = g.itemid, d = g.versionstring;
      }
      return i = new ur({ url: u }).restUrl + "/content/items/" + l + "/resources/" + d + ".arc", { url: i, scheme: "portal", uri: "PO:" + i };
    }
    if (t.startsWith("mock")) {
      if (t === "mock")
        return { url: "", scheme: "mock", data: `
      export var hello = 1;
      export function helloWorld() {
          return "Hello World " + hello;
      }
  `, uri: "mock" };
      const i = t.replace("mock:", "");
      if (ge.mocks[i] !== void 0) return { url: "", scheme: "mock", data: ge.mocks[i], uri: t };
    }
    throw new En(st.UnrecognizedUri, { uri: t });
  }
  async fetchModule(t) {
    const n = ge.cachedModules.getFromCache(t.uri);
    if (n) return n;
    const r = this.fetchSource(t);
    ge.cachedModules.addToCache(t.uri, r);
    let a = null;
    try {
      a = await r;
    } catch (o) {
      throw ge.cachedModules.removeFromCache(t.uri), o;
    }
    return a;
  }
  async fetchSource(t) {
    if (t.scheme === "portal") {
      const n = await za(t.url, { responseType: "text", query: {} });
      if (n.data) return fn(n.data, []);
    }
    if (t.scheme === "mock") return fn(t.data ?? "", []);
    throw new En(st.UnsupportedUriProtocol);
  }
  static create(t) {
    return new ge(t);
  }
  static getDefault() {
    return this._default ?? (ge._default = ge._moduleResolverFactory());
  }
  static set moduleResolverClass(t) {
    this._moduleResolverFactory = t, this._default = null;
  }
}
ge.mocks = {}, ge.cachedModules = new Qo(30), ge._default = null, ge._moduleResolverFactory = () => {
  const e = ur.getDefault();
  return new ge(e.url);
};
let eu = class extends ot {
  constructor(t, n) {
    super(), this.definition = null, this.context = null, this.definition = t, this.context = n;
  }
  createFunction(t) {
    return (...n) => {
      const r = { spatialReference: this.context.spatialReference, console: this.context.console, services: this.context.services, timeZone: this.context.timeZone ?? null, lrucache: this.context.lrucache, exports: this.context.exports, libraryResolver: this.context.libraryResolver, interceptor: this.context.interceptor, localScope: {}, depthCounter: { depth: t.depthCounter.depth + 1 }, globalScope: this.context.globalScope };
      if (r.depthCounter.depth > 64) throw new h(t, c.MaximumCallDepth, null);
      return On(this.definition, r, n, null);
    };
  }
  call(t, n) {
    return Je(t, n, (r, a, o) => {
      const s = { spatialReference: t.spatialReference, services: t.services, globalScope: t.globalScope, depthCounter: { depth: t.depthCounter.depth + 1 }, libraryResolver: t.libraryResolver, exports: t.exports, timeZone: t.timeZone ?? null, console: t.console, lrucache: t.lrucache, interceptor: t.interceptor, localScope: {} };
      if (s.depthCounter.depth > 64) throw new h(t, c.MaximumCallDepth, n);
      return On(this.definition, s, o, n);
    });
  }
  marshalledCall(t, n, r, a) {
    return a(t, n, (o, s, i) => {
      const u = { spatialReference: t.spatialReference, globalScope: r.globalScope, services: t.services, depthCounter: { depth: t.depthCounter.depth + 1 }, libraryResolver: t.libraryResolver, exports: t.exports, console: t.console, timeZone: t.timeZone ?? null, lrucache: t.lrucache, interceptor: t.interceptor, localScope: {} };
      return i = i.map((l) => !Q(l) || l instanceof qe ? l : yt(l, t, a)), yt(On(this.definition, u, i, n), r, a);
    });
  }
}, Et = class extends qt {
  constructor(t) {
    super(t);
  }
  global(t) {
    const n = this.executingContext.globalScope[t.toLowerCase()];
    if (n.valueset || (n.value = I(this.executingContext, n.node), n.valueset = !0), Q(n.value) && !(n.value instanceof qe)) {
      const r = new qe();
      r.fn = n.value, r.parameterEvaluator = Je, r.context = this.executingContext, n.value = r;
    }
    return n.value;
  }
  setGlobal(t, n) {
    if (Q(n)) throw new h(null, c.AssignModuleFunction, null);
    this.executingContext.globalScope[t.toLowerCase()] = { value: n, valueset: !0, node: null };
  }
  hasGlobal(t) {
    return this.executingContext.exports[t] === void 0 && (t = t.toLowerCase()), this.executingContext.exports[t] !== void 0;
  }
  loadModule(t) {
    let n = t.spatialReference;
    n == null && (n = new vt({ wkid: 102100 })), this.moduleScope = ga({}, t.customfunctions, t.timeZone), this.executingContext = { spatialReference: n, globalScope: this.moduleScope, localScope: null, libraryResolver: new mn(t.libraryResolver._moduleSingletons, this.source.syntax.loadedModules), exports: {}, services: t.services, console: t.console ?? ya, timeZone: t.timeZone ?? null, lrucache: t.lrucache, interceptor: t.interceptor, depthCounter: { depth: 1 } }, I(this.executingContext, this.source.syntax);
  }
};
function tu(e, t) {
  const n = [];
  for (let r = 0; r < t.arguments.length; r++) n.push(I(e, t.arguments[r]));
  return n;
}
function Je(e, t, n) {
  try {
    return t.preparsed === !0 ? n(e, null, t.arguments) : n(e, t, tu(e, t));
  } catch (r) {
    throw r;
  }
}
function I(e, t) {
  try {
    switch (t?.type) {
      case "EmptyStatement":
        return C;
      case "VariableDeclarator":
        return yu(e, t);
      case "VariableDeclaration":
        return gu(e, t);
      case "ImportDeclaration":
        return mu(e, t);
      case "ExportNamedDeclaration":
        return Du(e, t);
      case "BlockStatement":
      case "Program":
        return du(e, t);
      case "FunctionDeclaration":
        return pu(e, t);
      case "ReturnStatement":
        return fu(e, t);
      case "IfStatement":
        return hu(e, t);
      case "ExpressionStatement":
        return cu(e, t);
      case "AssignmentExpression":
        return lu(e, t);
      case "UpdateExpression":
        return uu(e, t);
      case "BreakStatement":
        return Me;
      case "ContinueStatement":
        return It;
      case "TemplateElement":
        return bu(e, t);
      case "TemplateLiteral":
        return vu(e, t);
      case "ForStatement":
        return au(e, t);
      case "ForInStatement":
        return iu(e, t);
      case "WhileStatement":
        return su(e, t);
      case "Identifier":
        return pa(e, t);
      case "MemberExpression":
        return wu(e, t);
      case "Literal":
        return t.value;
      case "CallExpression":
        return Su(e, t);
      case "UnaryExpression":
        return xu(e, t);
      case "BinaryExpression":
        return Cu(e, t);
      case "LogicalExpression":
        return Au(e, t);
      case "ArrayExpression":
        return Fu(e, t);
      case "ObjectExpression":
        return nu(e, t);
      case "Property":
        return ru(e, t);
      default:
        throw new h(e, c.Unrecognized, t);
    }
  } catch (n) {
    throw Ja(e, t, n);
  }
}
function nu(e, t) {
  const n = {}, r = /* @__PURE__ */ new Map();
  for (let o = 0; o < t.properties.length; o++) {
    const s = I(e, t.properties[o]);
    if (Q(s.value)) throw new h(e, c.NoFunctionInDictionary, t);
    if (x(s.key) === !1) throw new h(e, c.KeyMustBeString, t);
    let i = s.key.toString();
    const u = i.toLowerCase();
    r.has(u) ? i = r.get(u) : r.set(u, i), s.value === C ? n[i] = null : n[i] = s.value;
  }
  const a = new B(n);
  return a.immutable = !1, a;
}
function ru(e, t) {
  return { key: t.key.type === "Identifier" ? t.key.name : I(e, t.key), value: I(e, t.value) };
}
function iu(e, t) {
  const n = I(e, t.right);
  t.left.type === "VariableDeclaration" && I(e, t.left);
  let r = null, a = "";
  if (t.left.type === "VariableDeclaration") {
    const o = t.left.declarations[0].id;
    o.type === "Identifier" && (a = o.name);
  } else t.left.type === "Identifier" && (a = t.left.name);
  if (!a) throw new h(e, c.InvalidIdentifier, t);
  if (a = a.toLowerCase(), e.localScope != null && e.localScope[a] !== void 0 && (r = e.localScope[a]), r === null && e.globalScope[a] !== void 0 && (r = e.globalScope[a]), r === null) throw new h(e, c.InvalidIdentifier, t);
  if (T(n) || x(n)) {
    const o = n.length;
    for (let s = 0; s < o; s++) {
      r.value = s;
      const i = I(e, t.body);
      if (i === Me) break;
      if (i instanceof xe) return i;
    }
    return C;
  }
  if (_(n)) {
    for (let o = 0; o < n.length(); o++) {
      r.value = o;
      const s = I(e, t.body);
      if (s === Me) break;
      if (s instanceof xe) return s;
    }
    return C;
  }
  if (!(n instanceof B || X(n))) return C;
  {
    const o = n.keys();
    for (let s = 0; s < o.length; s++) {
      r.value = o[s];
      const i = I(e, t.body);
      if (i === Me) break;
      if (i instanceof xe) return i;
    }
  }
}
function au(e, t) {
  t.init !== null && I(e, t.init);
  const n = { testResult: !0, lastAction: C };
  do
    ou(e, t, n);
  while (n.testResult === !0);
  return n.lastAction instanceof xe ? n.lastAction : C;
}
function su(e, t) {
  const n = { testResult: !0, lastAction: C };
  if (n.testResult = I(e, t.test), n.testResult === !1) return C;
  if (n.testResult !== !0) throw new h(e, c.BooleanConditionRequired, t);
  for (; n.testResult === !0 && (n.lastAction = I(e, t.body), n.lastAction !== Me) && !(n.lastAction instanceof xe); ) if (n.testResult = I(e, t.test), n.testResult !== !0 && n.testResult !== !1) throw new h(e, c.BooleanConditionRequired, t);
  return n.lastAction instanceof xe ? n.lastAction : C;
}
function ou(e, t, n) {
  if (t.test !== null) {
    if (n.testResult = I(e, t.test), n.testResult === !1) return;
    if (n.testResult !== !0) throw new h(e, c.BooleanConditionRequired, t);
  }
  n.lastAction = I(e, t.body), n.lastAction !== Me ? n.lastAction instanceof xe ? n.testResult = !1 : t.update !== null && I(e, t.update) : n.testResult = !1;
}
function uu(e, t) {
  let n, r = null, a = "";
  if (t.argument.type === "MemberExpression") {
    if (r = I(e, t.argument.object), t.argument.computed === !0 ? a = I(e, t.argument.property) : t.argument.property.type === "Identifier" && (a = t.argument.property.name), T(r)) {
      if (!L(a)) throw new h(e, c.ArrayAccessorMustBeNumber, t);
      if (a < 0 && (a = r.length + a), a < 0 || a >= r.length) throw new h(e, c.OutOfBounds, t);
      n = p(r[a]), r[a] = t.operator === "++" ? n + 1 : n - 1;
    } else if (r instanceof B) {
      if (x(a) === !1) throw new h(e, c.KeyAccessorMustBeString, t);
      if (r.hasField(a) !== !0) throw new h(e, c.FieldNotFound, t);
      n = p(r.field(a)), r.setField(a, t.operator === "++" ? n + 1 : n - 1);
    } else if (X(r)) {
      if (x(a) === !1) throw new h(e, c.KeyAccessorMustBeString, t);
      if (r.hasField(a) !== !0) throw new h(e, c.FieldNotFound, t);
      n = p(r.field(a)), r.setField(a, t.operator === "++" ? n + 1 : n - 1);
    } else {
      if (_(r)) throw new h(e, c.Immutable, t);
      if (!(r instanceof Et)) throw new h(e, c.InvalidParameter, t);
      if (x(a) === !1) throw new h(e, c.ModuleAccessorMustBeString, t);
      if (r.hasGlobal(a) !== !0) throw new h(e, c.ModuleExportNotFound, t);
      n = p(r.global(a)), r.setGlobal(a, t.operator === "++" ? n + 1 : n - 1);
    }
    return t.prefix === !1 ? n : t.operator === "++" ? n + 1 : n - 1;
  }
  if (r = t.argument.type === "Identifier" ? t.argument.name.toLowerCase() : "", !r) throw new h(e, c.InvalidIdentifier, t);
  if (e.localScope != null && e.localScope[r] !== void 0) return n = p(e.localScope[r].value), e.localScope[r] = { value: t.operator === "++" ? n + 1 : n - 1, valueset: !0, node: t }, t.prefix === !1 ? n : t.operator === "++" ? n + 1 : n - 1;
  if (e.globalScope[r] !== void 0) return n = p(e.globalScope[r].value), e.globalScope[r] = { value: t.operator === "++" ? n + 1 : n - 1, valueset: !0, node: t }, t.prefix === !1 ? n : t.operator === "++" ? n + 1 : n - 1;
  throw new h(e, c.InvalidIdentifier, t);
}
function ze(e, t, n, r, a) {
  switch (t) {
    case "=":
      return e === C ? null : e;
    case "/=":
      return p(n) / p(e);
    case "*=":
      return p(n) * p(e);
    case "-=":
      return p(n) - p(e);
    case "+=":
      return x(n) || x(e) ? F(n) + F(e) : p(n) + p(e);
    case "%=":
      return p(n) % p(e);
    default:
      throw new h(a, c.UnsupportedOperator, r);
  }
}
function lu(e, t) {
  let n = null, r = "";
  if (t.left.type === "MemberExpression") {
    if (n = I(e, t.left.object), t.left.computed === !0) r = I(e, t.left.property);
    else {
      if (t.left.property.type !== "Identifier") throw new h(e, c.InvalidIdentifier, t);
      r = t.left.property.name;
    }
    const o = I(e, t.right);
    if (T(n)) {
      if (!L(r)) throw new h(e, c.ArrayAccessorMustBeNumber, t);
      if (r < 0 && (r = n.length + r), r < 0 || r > n.length) throw new h(e, c.OutOfBounds, t);
      if (r === n.length) {
        if (t.operator !== "=") throw new h(e, c.OutOfBounds, t);
        n[r] = ze(o, t.operator, n[r], t, e);
      } else n[r] = ze(o, t.operator, n[r], t, e);
    } else if (n instanceof B) {
      if (x(r) === !1) throw new h(e, c.KeyAccessorMustBeString, t);
      if (n.hasField(r) === !0) n.setField(r, ze(o, t.operator, n.field(r), t, e));
      else {
        if (t.operator !== "=") throw new h(e, c.FieldNotFound, t, { key: r });
        n.setField(r, ze(o, t.operator, null, t, e));
      }
    } else if (X(n)) {
      if (x(r) === !1) throw new h(e, c.KeyAccessorMustBeString, t);
      if (n.hasField(r) === !0) n.setField(r, ze(o, t.operator, n.field(r), t, e));
      else {
        if (t.operator !== "=") throw new h(e, c.FieldNotFound, t, { key: r });
        n.setField(r, ze(o, t.operator, null, t, e));
      }
    } else {
      if (_(n)) throw new h(e, c.Immutable, t);
      if (!(n instanceof Et)) throw new h(e, c.InvalidIdentifier, t);
      if (x(r) === !1) throw new h(e, c.ModuleAccessorMustBeString, t);
      if (n.hasGlobal(r) !== !0) throw new h(e, c.ModuleExportNotFound, t);
      n.setGlobal(r, ze(o, t.operator, n.global(r), t, e));
    }
    return C;
  }
  n = t.left.name.toLowerCase();
  const a = I(e, t.right);
  if (e.localScope != null && e.localScope[n] !== void 0) return e.localScope[n] = { value: ze(a, t.operator, e.localScope[n].value, t, e), valueset: !0, node: t.right }, C;
  if (e.globalScope[n] !== void 0) return e.globalScope[n] = { value: ze(a, t.operator, e.globalScope[n].value, t, e), valueset: !0, node: t.right }, C;
  throw new h(e, c.InvalidIdentifier, t);
}
function cu(e, t) {
  if (t.expression.type === "AssignmentExpression" || t.expression.type === "UpdateExpression") return I(e, t.expression);
  if (t.expression.type === "CallExpression") {
    const n = I(e, t.expression);
    return n === C ? C : new wt(n);
  }
  {
    const n = I(e, t.expression);
    return n === C ? C : new wt(n);
  }
}
function hu(e, t) {
  const n = I(e, t.test);
  if (n === !0) return I(e, t.consequent);
  if (n === !1) return t.alternate !== null ? I(e, t.alternate) : C;
  throw new h(e, c.BooleanConditionRequired, t);
}
function du(e, t) {
  let n = C;
  for (let r = 0; r < t.body.length; r++) if (n = I(e, t.body[r]), n instanceof xe || n === Me || n === It) return n;
  return n;
}
function fu(e, t) {
  if (t.argument === null) return new xe(C);
  const n = I(e, t.argument);
  return new xe(n);
}
function pu(e, t) {
  const n = t.id.name.toLowerCase();
  return e.globalScope[n] = { valueset: !0, node: null, value: new eu(t, e) }, C;
}
function mu(e, t) {
  const n = t.specifiers[0].local.name.toLowerCase(), r = e.libraryResolver.loadLibrary(n);
  let a = null;
  return e.libraryResolver._moduleSingletons?.has(r.uri) ? a = e.libraryResolver._moduleSingletons.get(r.uri) : (a = new Et(r), a.loadModule(e), e.libraryResolver._moduleSingletons?.set(r.uri, a)), e.globalScope[n] = { value: a, valueset: !0, node: t }, C;
}
function Du(e, t) {
  if (I(e, t.declaration), t.declaration.type === "FunctionDeclaration") e.exports[t.declaration.id.name.toLowerCase()] = "function";
  else if (t.declaration.type === "VariableDeclaration") for (const n of t.declaration.declarations) e.exports[n.id.name.toLowerCase()] = "variable";
  return C;
}
function gu(e, t) {
  for (let n = 0; n < t.declarations.length; n++) I(e, t.declarations[n]);
  return C;
}
function yu(e, t) {
  let n = t.init === null ? null : I(e, t.init);
  if (n === C && (n = null), t.id.type !== "Identifier") throw new h(e, c.InvalidIdentifier, t);
  const r = t.id.name.toLowerCase();
  return e.localScope != null ? e.localScope[r] = { value: n, valueset: !0, node: t.init } : e.globalScope[r] = { value: n, valueset: !0, node: t.init }, C;
}
function wu(e, t) {
  try {
    const n = I(e, t.object);
    if (n === null) throw new h(e, c.MemberOfNull, t);
    if (t.computed === !1) {
      if (t.property.type === "Identifier") {
        if (n instanceof B || X(n)) return n.field(t.property.name);
        if (n instanceof N) return Ct(n, t.property.name, e, t);
        if (n instanceof Et) {
          if (!n.hasGlobal(t.property.name)) throw new h(e, c.InvalidIdentifier, t);
          return n.global(t.property.name);
        }
      }
      throw new h(e, c.InvalidMemberAccessKey, t);
    }
    {
      let r = I(e, t.property);
      if (n instanceof B || X(n)) {
        if (x(r)) return n.field(r);
        throw new h(e, c.InvalidMemberAccessKey, t);
      }
      if (n instanceof Et) {
        if (x(r)) return n.global(r);
        throw new h(e, c.InvalidMemberAccessKey, t);
      }
      if (n instanceof N) {
        if (x(r)) return Ct(n, r, e, t);
        throw new h(e, c.InvalidMemberAccessKey, t);
      }
      if (T(n)) {
        if (L(r) && isFinite(r) && Math.floor(r) === r) {
          if (r < 0 && (r = n.length + r), r >= n.length || r < 0) throw new h(e, c.OutOfBounds, t);
          return n[r];
        }
        throw new h(e, c.InvalidMemberAccessKey, t);
      }
      if (x(n)) {
        if (L(r) && isFinite(r) && Math.floor(r) === r) {
          if (r < 0 && (r = n.length + r), r >= n.length || r < 0) throw new h(e, c.OutOfBounds, t);
          return n[r];
        }
        throw new h(e, c.InvalidMemberAccessKey, t);
      }
      if (_(n)) {
        if (L(r) && isFinite(r) && Math.floor(r) === r) {
          if (r < 0 && (r = n.length() + r), r >= n.length() || r < 0) throw new h(e, c.OutOfBounds, t);
          return n.get(r);
        }
        throw new h(e, c.InvalidMemberAccessKey, t);
      }
      throw new h(e, c.InvalidMemberAccessKey, t);
    }
  } catch (n) {
    throw n;
  }
}
function xu(e, t) {
  try {
    const n = I(e, t.argument);
    if (J(n)) {
      if (t.operator === "!") return !n;
      if (t.operator === "-") return -1 * p(n);
      if (t.operator === "+") return 1 * p(n);
      if (t.operator === "~") return ~p(n);
      throw new h(e, c.UnsupportedUnaryOperator, t);
    }
    if (t.operator === "~") return ~p(n);
    if (t.operator === "-") return -1 * p(n);
    if (t.operator === "+") return 1 * p(n);
    throw new h(e, c.UnsupportedUnaryOperator, t);
  } catch (n) {
    throw n;
  }
}
function Fu(e, t) {
  try {
    const n = [];
    for (let r = 0; r < t.elements.length; r++) {
      const a = I(e, t.elements[r]);
      if (Q(a)) throw new h(e, c.NoFunctionInArray, t);
      a === C ? n.push(null) : n.push(a);
    }
    return n;
  } catch (n) {
    throw n;
  }
}
function Cu(e, t) {
  try {
    const n = [I(e, t.left), I(e, t.right)], r = n[0], a = n[1];
    switch (t.operator) {
      case "|":
      case "<<":
      case ">>":
      case ">>>":
      case "^":
      case "&":
        return Dr(p(r), p(a), t.operator);
      case "==":
        return ke(r, a);
      case "!=":
        return !ke(r, a);
      case "<":
      case ">":
      case "<=":
      case ">=":
        return mr(r, a, t.operator);
      case "+":
        return x(r) || x(a) ? F(r) + F(a) : p(r) + p(a);
      case "-":
        return p(r) - p(a);
      case "*":
        return p(r) * p(a);
      case "/":
        return p(r) / p(a);
      case "%":
        return p(r) % p(a);
      default:
        throw new h(e, c.UnsupportedOperator, t);
    }
  } catch (n) {
    throw n;
  }
}
function Au(e, t) {
  try {
    const n = I(e, t.left);
    if (J(n)) switch (t.operator) {
      case "||":
        if (n === !0) return n;
        {
          const r = I(e, t.right);
          if (J(r)) return r;
          throw new h(e, c.LogicExpressionOrAnd, t);
        }
      case "&&":
        if (n === !1) return n;
        {
          const r = I(e, t.right);
          if (J(r)) return r;
          throw new h(e, c.LogicExpressionOrAnd, t);
        }
      default:
        throw new h(e, c.LogicExpressionOrAnd, t);
    }
    throw new h(e, c.LogicalExpressionOnlyBoolean, t);
  } catch (n) {
    throw n;
  }
}
function bu(e, t) {
  return t.value ? t.value.cooked : "";
}
function Eu(e, t, n) {
  if (Q(e)) throw new h(t, c.NoFunctionInTemplateLiteral, n);
  return e;
}
function vu(e, t) {
  let n = "", r = 0;
  for (const a of t.quasis) n += a.value ? a.value.cooked : "", a.tail === !1 && (n += t.expressions[r] ? F(Eu(I(e, t.expressions[r]), e, t)) : "", r++);
  return n;
}
function pa(e, t) {
  let n;
  try {
    const r = t.name.toLowerCase();
    if (e.localScope != null && e.localScope[r] !== void 0) return n = e.localScope[r], n.valueset === !0 || (n.value = I(e, n.node), n.valueset = !0), n.value;
    if (e.globalScope[r] !== void 0) return n = e.globalScope[r], n.valueset === !0 || (n.value = I(e, n.node), n.valueset = !0), n.value;
    throw new h(e, c.InvalidIdentifier, t);
  } catch (r) {
    throw r;
  }
}
function Su(e, t) {
  try {
    if (t.callee.type === "MemberExpression") {
      const n = I(e, t.callee.object);
      if (!(n instanceof Et)) throw new h(e, c.FunctionNotFound, t);
      const r = t.callee.computed === !1 ? t.callee.property.name : I(e, t.callee.property);
      if (!n.hasGlobal(r)) throw new h(e, c.FunctionNotFound, t);
      const a = n.global(r);
      if (!Q(a)) throw new h(e, c.CallNonFunction, t);
      return a.call(e, t);
    }
    if (t.callee.type !== "Identifier") throw new h(e, c.FunctionNotFound, t);
    if (e.localScope != null && e.localScope[t.callee.name.toLowerCase()] !== void 0) {
      const n = e.localScope[t.callee.name.toLowerCase()];
      if (Q(n.value)) return n.value.call(e, t);
      throw new h(e, c.CallNonFunction, t);
    }
    if (e.globalScope[t.callee.name.toLowerCase()] !== void 0) {
      const n = e.globalScope[t.callee.name.toLowerCase()];
      if (Q(n.value)) return n.value.call(e, t);
      throw new h(e, c.CallNonFunction, t);
    }
    throw new h(e, c.FunctionNotFound, t);
  } catch (n) {
    throw n;
  }
}
const de = {};
function ma(e, t, n, r) {
  try {
    const a = t.arguments, o = I(e, a[n]);
    if (ke(o, r)) return I(e, a[n + 1]);
    {
      const s = a.length - n;
      return s === 1 ? I(e, a[n]) : s === 2 ? null : s === 3 ? I(e, a[n + 2]) : ma(e, t, n + 2, r);
    }
  } catch (a) {
    throw a;
  }
}
function Da(e, t, n, r) {
  try {
    const a = t.arguments;
    if (r === !0) return I(e, a[n + 1]);
    if (a.length - n === 3) return I(e, a[n + 2]);
    {
      const o = I(e, a[n + 2]);
      if (J(o) === !1) throw new h(e, c.BooleanConditionRequired, a[n + 2]);
      return Da(e, t, n + 2, o);
    }
  } catch (a) {
    throw a;
  }
}
function On(e, t, n, r) {
  try {
    const a = e.body;
    if (n.length !== e.params.length) throw new h(t, c.WrongNumberOfParameters, r);
    if (t.localScope != null) for (let s = 0; s < n.length; s++) t.localScope[e.params[s].name.toLowerCase()] = { value: n[s], valueset: !0, node: null };
    const o = I(t, a);
    if (o instanceof xe) return o.value;
    if (o === Me) throw new h(t, c.UnexpectedToken, r);
    if (o === It) throw new h(t, c.UnexpectedToken, r);
    return o instanceof wt ? o.value : o;
  } catch (a) {
    throw a;
  }
}
Zi(de, Je), ia(de, Je), Xi(de, Je), Vi(de, Je), ea(de, Je), Yi(de, Je), de.iif = function(e, t) {
  try {
    const n = t.arguments;
    D(n === null ? [] : n, 3, 3, e, t);
    const r = I(e, n[0]);
    if (J(r) === !1) throw new h(e, c.BooleanConditionRequired, t);
    return I(e, r === !0 ? n[1] : n[2]);
  } catch (n) {
    throw n;
  }
}, de.defaultvalue = function(e, t) {
  try {
    const n = t.arguments;
    D(n === null ? [] : n, 2, 3, e, t);
    const r = I(e, n[0]);
    if (n.length === 3) {
      const a = I(e, n[1]), o = yr(r, a);
      return o != null && o !== "" ? o : I(e, n[2]);
    }
    return r === null || r === "" || r === void 0 ? I(e, n[1]) : r;
  } catch (n) {
    throw n;
  }
}, de.decode = function(e, t) {
  try {
    const n = t.arguments;
    if (n.length < 2) throw new h(e, c.WrongNumberOfParameters, t);
    if (n.length === 2) return I(e, n[1]);
    {
      if ((n.length - 1) % 2 == 0) throw new h(e, c.WrongNumberOfParameters, t);
      const r = I(e, n[0]);
      return ma(e, t, 1, r);
    }
  } catch (n) {
    throw n;
  }
}, de.when = function(e, t) {
  try {
    const n = t.arguments;
    if (n.length < 3) throw new h(e, c.WrongNumberOfParameters, t);
    if (n.length % 2 == 0) throw new h(e, c.WrongNumberOfParameters, t);
    const r = I(e, n[0]);
    if (J(r) === !1) throw new h(e, c.BooleanConditionRequired, n[0]);
    return Da(e, t, 0, r);
  } catch (n) {
    throw n;
  }
};
for (const e in de) de[e] = { value: new ut(de[e]), valueset: !0, node: null };
const Zt = function() {
};
function ga(e, t, n) {
  const r = new Zt();
  e || (e = {}), t || (t = {});
  const a = new B({ newline: `
`, tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  a.immutable = !1, r.textformatting = { value: a, valueset: !0, node: null };
  for (const o in t) r[o] = { value: new ut(t[o]), native: !0, valueset: !0, node: null };
  for (const o in e) e[o] && e[o].declaredClass === "esri.Graphic" ? r[o] = { value: ee.createFromGraphic(e[o], n), valueset: !0, node: null } : r[o] = { value: e[o], valueset: !0, node: null };
  return r;
}
Zt.prototype = de, Zt.prototype.infinity = { value: Number.POSITIVE_INFINITY, valueset: !0, node: null }, Zt.prototype.pi = { value: Math.PI, valueset: !0, node: null };
function ya(e) {
  console.log(e);
}
function wa(e) {
  const t = { mode: "sync", compiled: !1, functions: {}, signatures: [], standardFunction: Je, evaluateIdentifier: pa };
  for (let n = 0; n < e.length; n++) e[n].registerFunctions(t);
  for (const n in t.functions) de[n] = { value: new ut(t.functions[n]), valueset: !0, node: null }, Zt.prototype[n] = de[n];
  for (let n = 0; n < t.signatures.length; n++) qn(t.signatures[n], "sync");
}
function ir(e, t) {
  let n = t.spatialReference;
  n == null && (n = new vt({ wkid: 102100 }));
  let r = null;
  e.usesModules && (r = new mn(/* @__PURE__ */ new Map(), e.loadedModules));
  const a = { spatialReference: n, globalScope: ga(t.vars, t.customfunctions, t.timeZone), localScope: null, services: t.services ?? null, exports: {}, libraryResolver: r, console: t.console ?? ya, timeZone: t.timeZone ?? null, lrucache: t.lrucache, interceptor: t.interceptor, depthCounter: { depth: 1 } };
  let o = I(a, e);
  if (o instanceof xe && (o = o.value), o instanceof wt && (o = o.value), o === C && (o = null), o === Me) throw new h(a, c.IllegalResult, null);
  if (o === It) throw new h(a, c.IllegalResult, null);
  if (Q(o)) throw new h(a, c.IllegalResult, null);
  return o;
}
wa([Hn]);
const Iu = /* @__PURE__ */ new Set(["feature", "angle", "bearing", "centroid", "envelopeintersects", "extent", "geometry", "isselfintersecting", "ringisclockwise"]);
let xa = !1, Fa = !1, $e = null, ar = [];
function Ca(e, t) {
  if (t.useAsync === !0 || e.isAsync === !0) return ku(e, t);
  if (gi("esri-csp-restrictions"))
    return function(n) {
      return ir(e, n);
    };
  try {
    return la(e, t);
  } catch (n) {
    if (n.declaredRootClass === "esri.arcade.arcadeuncompilableerror") return function(r) {
      return ir(e, r);
    };
    throw n;
  }
}
function ku(e, t) {
  if ($e === null) throw new h(null, c.AsyncNotEnabled, null);
  if (gi("esri-csp-restrictions"))
    return function(n) {
      return $e.executeScript(e, n);
    };
  try {
    return la(e, t, !0);
  } catch (n) {
    if (n.declaredRootClass === "esri.arcade.arcadeuncompilableerror") return function(r) {
      return $e.executeScript(e, r);
    };
    throw n;
  }
}
function Tu(e) {
  wa(e), lt(e, "sync"), $e === null ? ar.push(e) : (lt(e, "async"), $e.extend(e));
}
function Cr(e, t = []) {
  return fn(e, t);
}
function Bu(e, t, n = []) {
  return Ar(fn(e, n), t);
}
function Ar(e, t) {
  if (t.useAsync === !0 || e.isAsync === !0) {
    if ($e === null) throw new h(null, c.AsyncNotEnabled, null);
    return $e.executeScript(e, t);
  }
  return ir(e, t);
}
function Cn(e, t) {
  return Ui(e, t);
}
function Nu(e, t) {
  return is(e, t);
}
function Mu(e, t = !1) {
  return t === void 0 && (t = !1), as(e);
}
function Aa(e) {
  return ss(e);
}
function An(e, t = []) {
  return e.usesGeometry === void 0 && Kt(e, t), e.usesGeometry === !0;
}
let Pn = null;
function br() {
  return Pn || (Pn = ba(), Pn);
}
async function ba() {
  const e = await import("./geometryEngine-BxKNS4vT.js");
  return Fa = !0, Rs(e), !0;
}
let Ln = null;
function Er() {
  return Ln !== null || (Ln = Ea()), Ln;
}
async function Ea() {
  await Po(), $e = await import("./arcadeAsyncRuntime-D4_FkTGW.js");
  for (const e of ar) $e.extend(e), lt(e, "async");
  return ar = null, !0;
}
function va() {
  return xa;
}
function Sa() {
  return !!$e;
}
function Ia() {
  return Fa;
}
let Un = null;
function vr() {
  return Un || (Un = ka(), Un);
}
async function ka() {
  await Er();
  const [e, t, n, r, a, o] = await Promise.all([import("./featureSetUtils-DyafQLKI.js").then((s) => s.g), import("./featuresetbase-TN-Wf0EW.js"), import("./featuresetgeom-MGYniBSU.js"), import("./featuresetstats-Cdoh0qY7.js"), import("./featuresetstring-DfmB40Hq.js"), import("./knowledgegraph-YiUewhMF.js")]);
  return $a = e, $e.extend([t, n, r, a, o]), lt([t, n, r, a, o], "async"), xa = !0, !0;
}
function Ta(e, t = []) {
  return e.usesFeatureSet === void 0 && Kt(e, t), e.usesFeatureSet === !0;
}
function $u(e, t = []) {
  return e.isAsync === void 0 && Kt(e, t), e.isAsync === !0;
}
function _u(e, t) {
  if (t) {
    for (const n of t) if (Cn(e, n)) return !0;
    return !1;
  }
  return !1;
}
async function Ba(e, t, n = [], r = !1, a = null) {
  return Sr(/* @__PURE__ */ new Set(), e, t, n, r, a);
}
async function Sr(e, t, n, r = [], a = !1, o = null) {
  const s = typeof t == "string" ? Cr(t) : t, i = [];
  return s && (Ia() === !1 && (An(s) || a) && i.push(br()), Sa() === !1 && (s.isAsync === !0 || n) && i.push(Er()), va() === !1 && (Ta(s) || _u(s, r)) && i.push(vr())), i.length && await Promise.all(i), await Na(e, s, o, n, a), !0;
}
function Ru(e, t = []) {
  return e.usesModules === void 0 && Kt(e, t), e.usesModules === !0;
}
async function Na(e, t, n = null, r = !1, a = !1) {
  const o = zi(t);
  n === null && o.length > 0 && (n = ge.getDefault()), t.loadedModules = {};
  for (const s of o) {
    Di(n);
    const i = n.normalizeModuleUri(s.source);
    if (e.has(i.uri)) throw new h(null, c.CircularModules, null);
    e.add(i.uri);
    const u = await n.fetchModule(i);
    await Sr(e, u, r, [], a, n), e.delete(i.uri), u.isAsync && (t.isAsync = !0), u.usesFeatureSet && (t.usesFeatureSet = !0), u.usesGeometry && (t.usesGeometry = !0), t.loadedModules[s.libname] = { uri: i.uri, script: u };
  }
}
function Ma(e) {
  if (An(e)) return !0;
  const t = Vn(e);
  let n = !1;
  for (let r = 0; r < t.length; r++) if (Iu.has(t[r])) {
    n = !0;
    break;
  }
  return n;
}
let $a = null;
function bn() {
  return $a;
}
const Ou = Object.freeze(Object.defineProperty({ __proto__: null, _loadScriptDependenciesImpl: Sr, compileScript: Ca, enableAsyncSupport: Er, enableAsyncSupportImpl: Ea, enableFeatureSetSupport: vr, enableFeatureSetSupportImpl: ka, enableGeometrySupport: br, enableGeometrySupportImpl: ba, executeScript: Ar, extend: Tu, extractExpectedFieldLiterals: Aa, extractFieldLiterals: Mu, featureSetUtils: bn, isAsyncEnabled: Sa, isFeatureSetSupportEnabled: va, isGeometryEnabled: Ia, loadDependentModules: Na, loadScriptDependencies: Ba, parseAndExecuteScript: Bu, parseScript: Cr, referencesFunction: Nu, referencesMember: Cn, scriptIsAsync: $u, scriptTouchesGeometry: Ma, scriptUsesFeatureSet: Ta, scriptUsesGeometryEngine: An, scriptUsesModules: Ru }, Symbol.toStringTag, { value: "Module" })), hi = /^\$(feature|aggregatedFeatures)\./i, Pu = { vars: { $feature: "any", $view: "any" }, spatialReference: null };
function Lu(e) {
  return e.replaceAll(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
function Uu(e) {
  return e == null ? null : T(e) || _(e) ? "array" : H(e) ? "date" : x(e) ? "text" : J(e) ? "boolean" : L(e) ? "number" : e instanceof B ? "dictionary" : X(e) ? "feature" : e instanceof j ? "point" : e instanceof ie ? "polygon" : e instanceof te ? "polyline" : e instanceof Se ? "multipoint" : e instanceof ye ? "extent" : e instanceof me ? "dateOnly" : e instanceof De ? "time" : kt(e) ? "featureSet" : Ht(e) ? "featureSetCollection" : null;
}
function Yt(e) {
  if (!e) return null;
  try {
    return Cr(e);
  } catch {
  }
  return null;
}
function zu(e, t) {
  const n = typeof e == "string" ? Yt(e) : e;
  if (!n) return null;
  try {
    return t = t || Za(Pu), Ca(n, t);
  } catch {
  }
  return null;
}
function Zu(e, t, n) {
  return { vars: { $feature: e == null ? new ee() : ee.createFromGraphic(e, n), $view: t?.view }, spatialReference: t?.sr, timeZone: n ?? null };
}
function Gu(e, t, n) {
  return ee.createFromGraphicLikeObject(t, e, n, null);
}
function ju(e, t) {
  e.vars != null && (e.vars.$feature = t);
}
function Ju(e, t) {
  let n;
  try {
    n = Ar(e, t);
  } catch {
    n = null;
  }
  return n;
}
function qu(e, t) {
  let n;
  try {
    n = e ? e(t) : null;
  } catch {
    n = null;
  }
  return n;
}
function Vu(e, t) {
  try {
    return e ? e(t) : Promise.resolve(null);
  } catch {
    return Promise.resolve(null);
  }
}
function Hu(e, t) {
  if (!e) return [];
  const n = typeof e == "string" ? Yt(e) : e;
  if (!n) return [];
  const r = Aa(n);
  let a = new Array();
  r.forEach((s) => {
    hi.test(s) && (s = s.replace(hi, ""), a.push(s));
  });
  const o = a.filter((s) => s.includes("*"));
  return a = a.filter((s) => !o.includes(s)), t && o.forEach((s) => {
    const i = new RegExp(`^${s.split(/\*+/).map(Lu).join(".*")}$`, "i");
    t.forEach((u) => i.test(u) ? a.push(u) : null);
  }), [...new Set(a.sort())];
}
function Wu(e) {
  return Cn(e, "$view");
}
function Ku(e, t) {
  return !!e && Cn(e, t);
}
function Yu(e) {
  if (!(!e || e.spatialReference == null && (e.scale == null || e.viewingMode == null)))
    return { view: e.viewingMode && e.scale != null ? new B({ viewingMode: e.viewingMode, scale: e.scale }) : null, sr: e.spatialReference };
}
function Xu({ url: e, spatialReference: t, lrucache: n, interceptor: r }) {
  const a = bn();
  return a ? a.createFeatureSetCollectionFromService(e, t, n, r) : null;
}
function Qu({ layer: e, spatialReference: t, outFields: n, returnGeometry: r, lrucache: a, interceptor: o }) {
  if (e === null) return null;
  const s = bn();
  return s ? s.constructFeatureSet(e, t, n, r ?? !0, a, o) : null;
}
function el(e) {
  if (e?.map === null) return null;
  const t = bn();
  return t ? t.createFeatureSetCollectionFromMap(e.map, e.spatialReference, e.lrucache, e.interceptor) : null;
}
function tl(e, t) {
  return B.convertJsonToArcade(e, t);
}
function nl(e, t, n = []) {
  return Ba(e, t, n);
}
function rl() {
  return br();
}
function il() {
  return vr();
}
function al(e) {
  return e.type === "simple" || e.type === "class-breaks" || e.type === "unique-value" || e.type === "dot-density" || e.type === "dictionary" || e.type === "pie-chart";
}
function sl(e) {
  return e.declaredClass === "esri.layers.support.LabelClass";
}
function ol(e) {
  return e.declaredClass === "esri.PopupTemplate";
}
function _a(e, t) {
  if (!e) return !1;
  if (typeof e == "string") return t(e);
  const n = e;
  if (al(n)) {
    if (n.type === "dot-density") {
      const o = n.attributes?.some((s) => t(s.valueExpression));
      if (o) return o;
    }
    const r = n.visualVariables, a = !!r && r.some((o) => {
      let s = t(o.valueExpression);
      return o.type === "size" && (di(o.minSize) && (s = s || t(o.minSize.valueExpression)), di(o.maxSize) && (s = s || t(o.maxSize.valueExpression))), s;
    });
    return !(!("valueExpression" in n) || !t(n.valueExpression)) || a;
  }
  if (sl(n)) {
    const r = n.labelExpressionInfo?.expression;
    return !(!r || !t(r)) || !1;
  }
  return !!ol(n) && (!!n.expressionInfos && n.expressionInfos.some((r) => t(r.expression)) || Array.isArray(n.content) && n.content.some((r) => r.type === "expression" && t(r.expressionInfo?.expression)));
}
function ul(e) {
  const t = Yt(e);
  return !!t && Ma(t);
}
function ll(e) {
  return _a(e, ul);
}
function cl(e) {
  const t = Yt(e);
  return !!t && An(t);
}
function hl(e) {
  return _a(e, cl);
}
function di(e) {
  return e && e.declaredClass === "esri.renderers.visualVariables.SizeVariable";
}
const Hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dictionary: B,
  arcade: Ou,
  arcadeFeature: ee,
  convertFeatureLayerToFeatureSet: Qu,
  convertJsonToArcade: tl,
  convertMapToFeatureSetCollection: el,
  convertServiceUrlToWorkspace: Xu,
  createExecContext: Zu,
  createFeature: Gu,
  createFunction: zu,
  createSyntaxTree: Yt,
  dependsOnView: Wu,
  enableFeatureSetOperations: il,
  enableGeometryOperations: rl,
  evalSyntaxTree: Ju,
  executeAsyncFunction: Vu,
  executeFunction: qu,
  extractFieldNames: Hu,
  getArcadeType: Uu,
  getViewInfo: Yu,
  hasGeometryFunctions: ll,
  hasGeometryOperations: hl,
  hasVariable: Ku,
  loadScriptDependencies: nl,
  updateExecContext: ju
}, Symbol.toStringTag, { value: "Module" }));
export {
  In as $,
  M as A,
  kt as B,
  Zi as C,
  ee as D,
  L as E,
  xt as F,
  x as G,
  X as H,
  Kn as I,
  It as J,
  Ya as K,
  Vi as L,
  Xi as M,
  B as N,
  C as O,
  R as P,
  _ as Q,
  Me as R,
  et as S,
  Cl as T,
  T as U,
  Ze as V,
  Ht as W,
  H as X,
  ia as Y,
  ne as Z,
  Q as _,
  D as a,
  Z as a0,
  Ni as a1,
  yn as a2,
  nn as a3,
  Mi as a4,
  ki as a5,
  $i as a6,
  Ti as a7,
  Ae as a8,
  _i as a9,
  kl as aA,
  Bl as aB,
  Va as aC,
  $r as aD,
  Tl as aE,
  Xa as aF,
  Nl as aG,
  _l as aH,
  $l as aI,
  Ls as aJ,
  Ha as aK,
  Bi as aL,
  Rl as aM,
  Hl as aN,
  _r as aa,
  dr as ab,
  Dn as ac,
  Vt as ad,
  on as ae,
  Jn as af,
  Ke as ag,
  tn as ah,
  ms as ai,
  Ds as aj,
  Ts as ak,
  _s as al,
  Bs as am,
  Tt as an,
  we as ao,
  Tr as ap,
  Nr as aq,
  El as ar,
  Sl as as,
  Mr as at,
  vl as au,
  bl as av,
  Al as aw,
  Il as ax,
  Ml as ay,
  Br as az,
  h as b,
  xe as c,
  Hn as d,
  ut as e,
  ea as f,
  p as g,
  Ct as h,
  mr as i,
  ke as j,
  Dr as k,
  ot as l,
  F as m,
  qe as n,
  qn as o,
  yr as p,
  yt as q,
  c as r,
  mn as s,
  qt as t,
  Ja as u,
  G as v,
  O as w,
  wt as x,
  ue as y,
  J as z
};
//# sourceMappingURL=arcadeUtils-ulswAuVE.js.map
