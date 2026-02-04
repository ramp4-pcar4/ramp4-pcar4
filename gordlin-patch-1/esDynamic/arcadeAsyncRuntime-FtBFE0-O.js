import { C as ue, Y as ce, M as fe, W as we, f as pe, a as J, z as F, b as l, r as s, Q as R, U as A, H as M, G as h, N as I, L as Z, E as C, e as V, o as de, s as ee, w as y, F as E, O as p, R as S, J as $, I as v, p as he, u as ge, B as me, h as d, d as O, c as ye, m as D, _ as ve, Z as be, D as ne, g as Se, i as G, n as Y, j as xe } from "./arcadeUtils-BQzwtwx7.js";
import { registerFunctions as Ie } from "./geomasync-ykhz4ubh.js";
import { eJ as T, bh as te } from "./main-BEi6lHs4.js";
function Q(n) {
  return n && typeof n.then == "function";
}
const j = 100;
async function z(n, e) {
  const t = [];
  for (let r = 0; r < e.arguments.length; r++) t.push(await u(n, e.arguments[r]));
  return t;
}
async function x(n, e, t) {
  return e.preparsed === !0 ? t(n, null, e.arguments) : t(n, e, await z(n, e));
}
class Fe extends Se {
  constructor(e, t) {
    super(), this.definition = null, this.context = null, this.definition = e, this.context = t;
  }
  createFunction(e) {
    return (...t) => {
      const r = { spatialReference: this.context.spatialReference, console: this.context.console, lrucache: this.context.lrucache, timeZone: this.context.timeZone ?? null, exports: this.context.exports, libraryResolver: this.context.libraryResolver, interceptor: this.context.interceptor, localScope: {}, depthCounter: { depth: e.depthCounter + 1 }, globalScope: this.context.globalScope };
      if (r.depthCounter.depth > 64) throw new l(e, s.MaximumCallDepth, null);
      return K(this.definition, r, t, null);
    };
  }
  call(e, t) {
    return k(e, t, (r, o, a) => {
      const i = { spatialReference: e.spatialReference, services: e.services, console: e.console, libraryResolver: e.libraryResolver, exports: e.exports, lrucache: e.lrucache, timeZone: e.timeZone ?? null, interceptor: e.interceptor, localScope: {}, abortSignal: e.abortSignal, globalScope: e.globalScope, depthCounter: { depth: e.depthCounter.depth + 1 } };
      if (i.depthCounter.depth > 64) throw new l(e, s.MaximumCallDepth, t);
      return K(this.definition, i, a, t);
    });
  }
  marshalledCall(e, t, r, o) {
    return o(e, t, async (a, i, c) => {
      const f = { spatialReference: e.spatialReference, globalScope: r.globalScope, depthCounter: { depth: e.depthCounter.depth + 1 }, libraryResolver: e.libraryResolver, exports: e.exports, console: e.console, abortSignal: e.abortSignal, lrucache: e.lrucache, timeZone: e.timeZone ?? null, interceptor: e.interceptor, localScope: {} };
      return c = c.map((w) => !v(w) || w instanceof G ? w : Y(w, e, o)), Y(await K(this.definition, f, c, t), r, o);
    });
  }
}
class L extends xe {
  constructor(e) {
    super(e);
  }
  async global(e) {
    const t = this.executingContext.globalScope[e.toLowerCase()];
    if (t.valueset || (t.value = await u(this.executingContext, t.node), t.valueset = !0), v(t.value) && !(t.value instanceof G)) {
      const r = new G();
      r.fn = t.value, r.parameterEvaluator = k, r.context = this.executingContext, t.value = r;
    }
    return t.value;
  }
  setGlobal(e, t) {
    if (v(t)) throw new l(null, s.AssignModuleFunction, null);
    this.executingContext.globalScope[e.toLowerCase()] = { value: t, valueset: !0, node: null };
  }
  hasGlobal(e) {
    return this.executingContext.exports[e] === void 0 && (e = e.toLowerCase()), this.executingContext.exports[e] !== void 0;
  }
  async loadModule(e) {
    let t = e.spatialReference;
    t == null && (t = new te({ wkid: 102100 })), this.moduleScope = le({}, e.customfunctions, e.timeZone), this.executingContext = { spatialReference: t, services: e.services, libraryResolver: new ee(e.libraryResolver._moduleSingletons, this.source.syntax.loadedModules), exports: {}, abortSignal: e.abortSignal === void 0 || e.abortSignal === null ? { aborted: !1 } : e.abortSignal, globalScope: this.moduleScope, console: e.console ?? se, lrucache: e.lrucache, timeZone: e.timeZone ?? null, interceptor: e.interceptor, localScope: null, depthCounter: { depth: 1 } }, await u(this.executingContext, this.source.syntax);
  }
}
async function k(n, e, t) {
  if (e.preparsed === !0) {
    const o = t(n, null, e.arguments);
    return Q(o), o;
  }
  const r = t(n, e, await z(n, e));
  return Q(r), r;
}
async function u(n, e, t) {
  if (e.breakpoint && t !== !0)
    return await e.breakpoint(), u(n, e, !0);
  try {
    switch (e?.type) {
      case "VariableDeclarator":
        return await Te(n, e);
      case "ImportDeclaration":
        return await De(n, e);
      case "ExportNamedDeclaration":
        return await Ge(n, e);
      case "VariableDeclaration":
        return await oe(n, e, 0);
      case "BlockStatement":
      case "Program":
        return await Pe(n, e);
      case "FunctionDeclaration":
        return await Ze(n, e);
      case "ReturnStatement":
        return await Ke(n, e);
      case "IfStatement":
        return await je(n, e);
      case "ExpressionStatement":
        return await $e(n, e);
      case "UpdateExpression":
        return await Ee(n, e);
      case "AssignmentExpression":
        return await Be(n, e);
      case "ForStatement":
        return await Le(n, e);
      case "WhileStatement":
        return await Ae(n, e);
      case "ForInStatement":
        return await ke(n, e);
      case "BreakStatement":
        return S;
      case "EmptyStatement":
        return p;
      case "ContinueStatement":
        return $;
      case "TemplateElement":
        return await He(n, e);
      case "TemplateLiteral":
        return await Ye(n, e);
      case "Identifier":
        return await H(n, e);
      case "MemberExpression":
        return await Ue(n, e);
      case "Literal":
        return e.value;
      case "CallExpression":
        return await ze(n, e);
      case "UnaryExpression":
        return await qe(n, e);
      case "BinaryExpression":
        return await _e(n, e);
      case "LogicalExpression":
        return await Ve(n, e);
      case "ArrayExpression":
        return await We(n, e);
      case "ObjectExpression":
        return await Ce(n, e);
      case "Property":
        return await Re(n, e);
      default:
        throw new l(n, s.Unrecognized, e);
    }
  } catch (r) {
    throw ge(n, e, r);
  }
}
async function Ce(n, e) {
  const t = [];
  for (let i = 0; i < e.properties.length; i++) t[i] = await u(n, e.properties[i]);
  const r = {}, o = /* @__PURE__ */ new Map();
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (v(c.value)) throw new l(n, s.NoFunctionInDictionary, e);
    if (h(c.key) === !1) throw new l(n, s.KeyMustBeString, e);
    let f = c.key.toString();
    const w = f.toLowerCase();
    o.has(w) ? f = o.get(w) : o.set(w, f), c.value === p ? r[f] = null : r[f] = c.value;
  }
  const a = new I(r);
  return a.immutable = !1, a;
}
async function Re(n, e) {
  const t = await u(n, e.value);
  return e.key.type === "Identifier" ? { key: e.key.name, value: t } : { key: await u(n, e.key), value: t };
}
async function Ae(n, e) {
  const t = { testResult: !0, lastAction: p };
  if (t.testResult = await u(n, e.test), t.testResult === !1) return p;
  if (t.testResult !== !0) throw new l(n, s.BooleanConditionRequired, e);
  for (; t.testResult === !0 && (t.lastAction = await u(n, e.body), t.lastAction !== S) && !(t.lastAction instanceof y); ) if (t.testResult = await u(n, e.test), t.testResult !== !0 && t.testResult !== !1) throw new l(n, s.BooleanConditionRequired, e);
  return t.lastAction instanceof y ? t.lastAction : p;
}
async function X(n, e, t) {
  const r = await u(n, e.body);
  return t.lastAction = r, t.lastAction === S || t.lastAction instanceof y ? (t.testResult = !1, t) : (e.update !== null && await u(n, e.update), t);
}
async function Me(n, e, t) {
  if (e.test !== null) {
    const r = await u(n, e.test);
    if (n.abortSignal?.aborted === !0) throw new l(n, s.Cancelled, e);
    if (t.testResult = r, t.testResult === !1) return t;
    if (t.testResult !== !0) throw new l(n, s.BooleanConditionRequired, e);
    return X(n, e, t);
  }
  return X(n, e, t);
}
function B(n, e, t, r, o, a) {
  try {
    Me(n, e, t).then(() => {
      try {
        t.testResult === !0 ? ++a > j ? (a = 0, setTimeout(() => {
          B(n, e, t, r, o, a);
        }, 0)) : B(n, e, t, r, o, a) : t.lastAction instanceof y ? r(t.lastAction) : r(p);
      } catch (i) {
        o(i);
      }
    }, (i) => {
      o(i);
    });
  } catch (i) {
    o(i);
  }
}
function Le(n, e) {
  try {
    return e.init !== null ? u(n, e.init).then(() => new Promise((t, r) => {
      B(n, e, { testResult: !0, lastAction: p }, (o) => {
        t(o);
      }, (o) => {
        r(o);
      }, 0);
    })) : new Promise((t, r) => {
      B(n, e, { testResult: !0, lastAction: p }, (o) => {
        t(o);
      }, (o) => {
        r(o);
      }, 0);
    });
  } catch (t) {
    return Promise.reject(t);
  }
}
function U(n, e, t, r, o, a, i, c, f, w) {
  try {
    if (r <= a) return void c(p);
    o.value = i === "k" ? t[a] : a, u(n, e.body).then((m) => {
      try {
        m instanceof y ? c(m) : m === S ? c(p) : ++w > j ? (w = 0, setTimeout(() => {
          U(n, e, t, r, o, a + 1, i, c, f, w);
        }, 0)) : U(n, e, t, r, o, a + 1, i, c, f, w);
      } catch (P) {
        f(P);
      }
    }, (m) => {
      f(m);
    });
  } catch (m) {
    f(m);
  }
}
function q(n, e, t, r, o, a, i, c, f) {
  try {
    if (t.length() <= o) return void i(p);
    r.value = a === "k" ? t.get(o) : o, u(n, e.body).then((w) => {
      w instanceof y ? i(w) : w === S ? i(p) : ++f > j ? (f = 0, setTimeout(() => {
        q(n, e, t, r, o + 1, a, i, c, f);
      }, 0)) : q(n, e, t, r, o + 1, a, i, c, f);
    }, (w) => {
      c(w);
    });
  } catch (w) {
    c(w);
  }
}
function W(n, e, t, r, o, a) {
  try {
    if (a === void 0 && (a = "i"), t.length === 0) return void r.resolve(p);
    U(n, e, t, t.length, o, 0, a, (i) => {
      r.resolve(i);
    }, (i) => {
      r.reject(i);
    }, 0);
  } catch (i) {
    r.reject(i);
  }
}
function Ne(n, e, t, r, o, a) {
  try {
    if (a === void 0 && (a = "i"), t.length === 0) return void r.resolve(p);
    q(n, e, t, o, 0, a, (i) => {
      r.resolve(i);
    }, (i) => {
      r.reject(i);
    }, 0);
  } catch (i) {
    r.reject(i);
  }
}
function Oe(n, e, t, r, o) {
  try {
    W(n, e, t.keys(), r, o, "k");
  } catch (a) {
    r.reject(a);
  }
}
function _(n, e, t, r, o, a, i, c) {
  try {
    n.next().then((f) => {
      try {
        if (f === null) a(p);
        else {
          const w = ne.createFromGraphicLikeObject(f.geometry, f.attributes, r, e.timeZone);
          w._underlyingGraphic = f, o.value = w, u(e, t.body).then((m) => {
            try {
              m === S ? a(p) : m instanceof y ? a(m) : ++c > j ? (c = 0, setTimeout(() => {
                _(n, e, t, r, o, a, i, c);
              }, 0)) : _(n, e, t, r, o, a, i, c);
            } catch (P) {
              i(P);
            }
          }, (m) => {
            i(m);
          });
        }
      } catch (w) {
        i(w);
      }
    }, (f) => {
      i(f);
    });
  } catch (f) {
    i(f);
  }
}
async function ke(n, e) {
  return new Promise((t, r) => {
    u(n, e.right).then((o) => {
      try {
        let a = null;
        a = e.left.type === "VariableDeclaration" ? u(n, e.left) : Promise.resolve(), a.then(() => {
          try {
            let i = "";
            if (e.left.type === "VariableDeclaration") {
              const f = e.left.declarations[0].id;
              f.type === "Identifier" && (i = f.name);
            } else e.left.type === "Identifier" && (i = e.left.name);
            if (!i) throw new l(n, s.InvalidIdentifier, e);
            i = i.toLowerCase();
            let c = null;
            if (n.localScope != null && n.localScope[i] !== void 0 && (c = n.localScope[i]), c === null && n.globalScope[i] !== void 0 && (c = n.globalScope[i]), c === null) return void r(new l(n, s.InvalidIdentifier, e));
            A(o) || h(o) ? W(n, e, o, { reject: r, resolve: t }, c) : R(o) ? Ne(n, e, o, { reject: r, resolve: t }, c) : o instanceof I || M(o) ? Oe(n, e, o, { reject: r, resolve: t }, c) : me(o) ? _(o.iterator(n.abortSignal), n, e, o, c, (f) => {
              t(f);
            }, (f) => {
              r(f);
            }, 0) : W(n, e, [], { reject: r, resolve: t }, c);
          } catch (i) {
            r(i);
          }
        }, r);
      } catch (a) {
        r(a);
      }
    }, r);
  });
}
async function Ee(n, e) {
  const t = e.argument;
  if (t.type === "MemberExpression") {
    const a = { t: null }, i = await u(n, t.object);
    let c = null;
    a.t = i, t.computed === !0 ? c = await u(n, t.property) : t.property.type === "Identifier" && (c = t.property.name);
    const f = a.t;
    let w;
    if (A(f)) {
      if (!C(c)) throw new l(n, s.ArrayAccessorMustBeNumber, e);
      if (c < 0 && (c = f.length + c), c < 0 || c >= f.length) throw new l(n, s.OutOfBounds, e);
      w = d(f[c]), f[c] = e.operator === "++" ? w + 1 : w - 1;
    } else if (f instanceof I) {
      if (h(c) === !1) throw new l(n, s.KeyAccessorMustBeString, e);
      if (f.hasField(c) !== !0) throw new l(n, s.FieldNotFound, e, { key: c });
      w = d(f.field(c)), f.setField(c, e.operator === "++" ? w + 1 : w - 1);
    } else if (f instanceof L) {
      if (h(c) === !1) throw new l(n, s.ModuleAccessorMustBeString, e);
      if (f.hasGlobal(c) !== !0) throw new l(n, s.ModuleExportNotFound, e);
      w = d(await f.global(c)), f.setGlobal(c, e.operator === "++" ? w + 1 : w - 1);
    } else {
      if (!M(f)) throw R(f) ? new l(n, s.Immutable, e) : new l(n, s.InvalidParameter, e);
      if (h(c) === !1) throw new l(n, s.KeyAccessorMustBeString, e);
      if (f.hasField(c) !== !0) throw new l(n, s.FieldNotFound, e, { key: c });
      w = d(f.field(c)), f.setField(c, e.operator === "++" ? w + 1 : w - 1);
    }
    return e.prefix === !1 ? w : e.operator === "++" ? w + 1 : w - 1;
  }
  const r = e.argument.type === "Identifier" ? e.argument.name.toLowerCase() : "";
  if (!r) throw new l(n, s.InvalidIdentifier, e);
  let o;
  if (n.localScope != null && n.localScope[r] !== void 0) return o = d(n.localScope[r].value), n.localScope[r] = { value: e.operator === "++" ? o + 1 : o - 1, valueset: !0, node: e }, e.prefix === !1 ? o : e.operator === "++" ? o + 1 : o - 1;
  if (n.globalScope[r] !== void 0) return o = d(n.globalScope[r].value), n.globalScope[r] = { value: e.operator === "++" ? o + 1 : o - 1, valueset: !0, node: e }, e.prefix === !1 ? o : e.operator === "++" ? o + 1 : o - 1;
  throw new l(n, s.InvalidIdentifier, e);
}
function b(n, e, t, r, o) {
  switch (e) {
    case "=":
      return n === p ? null : n;
    case "/=":
      return d(t) / d(n);
    case "*=":
      return d(t) * d(n);
    case "-=":
      return d(t) - d(n);
    case "+=":
      return h(t) || h(n) ? O(t) + O(n) : d(t) + d(n);
    case "%=":
      return d(t) % d(n);
    default:
      throw new l(o, s.UnsupportedOperator, r);
  }
}
async function Be(n, e) {
  const t = e.left;
  if (t.type === "MemberExpression") {
    const o = await u(n, t.object);
    let a = null;
    if (t.computed === !0) a = await u(n, t.property);
    else {
      if (t.property.type !== "Identifier") throw new l(n, s.InvalidIdentifier, e);
      a = t.property.name;
    }
    const i = await u(n, e.right);
    if (A(o)) {
      if (!C(a)) throw new l(n, s.ArrayAccessorMustBeNumber, e);
      if (a < 0 && (a = o.length + a), a < 0 || a > o.length) throw new l(n, s.OutOfBounds, e);
      if (a === o.length) {
        if (e.operator !== "=") throw new l(n, s.OutOfBounds, e);
        o[a] = b(i, e.operator, o[a], e, n);
      } else o[a] = b(i, e.operator, o[a], e, n);
    } else if (o instanceof I) {
      if (h(a) === !1) throw new l(n, s.KeyAccessorMustBeString, e);
      if (o.hasField(a) === !0) o.setField(a, b(i, e.operator, o.field(a), e, n));
      else {
        if (e.operator !== "=") throw new l(n, s.FieldNotFound, e, { key: a });
        o.setField(a, b(i, e.operator, null, e, n));
      }
    } else if (o instanceof L) {
      if (h(a) === !1) throw new l(n, s.KeyAccessorMustBeString, e);
      if (o.hasGlobal(a) !== !0) throw new l(n, s.ModuleExportNotFound, e);
      o.setGlobal(a, b(i, e.operator, await o.global(a), e, n));
    } else {
      if (!M(o)) throw R(o) ? new l(n, s.Immutable, e) : new l(n, s.InvalidParameter, e);
      if (h(a) === !1) throw new l(n, s.KeyAccessorMustBeString, e);
      if (o.hasField(a) === !0) o.setField(a, b(i, e.operator, o.field(a), e, n));
      else {
        if (e.operator !== "=") throw new l(n, s.FieldNotFound, e, { key: a });
        o.setField(a, b(i, e.operator, null, e, n));
      }
    }
    return p;
  }
  const r = t.name.toLowerCase();
  if (n.localScope != null && n.localScope[r] !== void 0) {
    const o = await u(n, e.right);
    return n.localScope[r] = { value: b(o, e.operator, n.localScope[r].value, e, n), valueset: !0, node: e.right }, p;
  }
  if (n.globalScope[r] !== void 0) {
    const o = await u(n, e.right);
    return n.globalScope[r] = { value: b(o, e.operator, n.globalScope[r].value, e, n), valueset: !0, node: e.right }, p;
  }
  throw new l(n, s.InvalidIdentifier, e);
}
async function $e(n, e) {
  if (e.expression.type === "AssignmentExpression") return u(n, e.expression);
  if (e.expression.type === "CallExpression") {
    const r = await u(n, e.expression);
    return r === p ? p : new E(r);
  }
  const t = await u(n, e.expression);
  return t === p ? p : new E(t);
}
async function je(n, e) {
  const t = await u(n, e.test);
  if (t === !0) return u(n, e.consequent);
  if (t === !1) return e.alternate !== null ? u(n, e.alternate) : p;
  throw new l(n, s.BooleanConditionRequired, e);
}
async function Pe(n, e) {
  return re(n, e, 0);
}
async function re(n, e, t) {
  if (t >= e.body.length) return p;
  const r = await u(n, e.body[t]);
  return r instanceof y || r === S || r === $ || t === e.body.length - 1 ? r : re(n, e, t + 1);
}
async function Ke(n, e) {
  if (e.argument === null) return new y(p);
  const t = await u(n, e.argument);
  return new y(t);
}
async function Ze(n, e) {
  const t = e.id.name.toLowerCase();
  return n.globalScope[t] = { valueset: !0, node: null, value: new Fe(e, n) }, p;
}
async function De(n, e) {
  const t = e.specifiers[0].local.name.toLowerCase(), r = n.libraryResolver.loadLibrary(t);
  let o = null;
  return n.libraryResolver._moduleSingletons?.has(r.uri) ? o = n.libraryResolver._moduleSingletons.get(r.uri) : (o = new L(r), await o.loadModule(n), n.libraryResolver._moduleSingletons?.set(r.uri, o)), n.globalScope[t] = { value: o, valueset: !0, node: e }, p;
}
async function Ge(n, e) {
  if (await u(n, e.declaration), e.declaration.type === "FunctionDeclaration") n.exports[e.declaration.id.name.toLowerCase()] = "function";
  else if (e.declaration.type === "VariableDeclaration") for (const t of e.declaration.declarations) n.exports[t.id.name.toLowerCase()] = "variable";
  return p;
}
async function oe(n, e, t) {
  return t >= e.declarations.length ? p : (await u(n, e.declarations[t]), t === e.declarations.length - 1 || await oe(n, e, t + 1), p);
}
async function Te(n, e) {
  let t = null;
  if (t = e.init === null ? null : await u(n, e.init), n.localScope !== null) {
    if (t === p && (t = null), e.id.type !== "Identifier") throw new l(n, s.InvalidIdentifier, e);
    const o = e.id.name.toLowerCase();
    return n.localScope != null && (n.localScope[o] = { value: t, valueset: !0, node: e.init }), p;
  }
  if (e.id.type !== "Identifier") throw new l(n, s.InvalidIdentifier, e);
  const r = e.id.name.toLowerCase();
  return t === p && (t = null), n.globalScope[r] = { value: t, valueset: !0, node: e.init }, p;
}
async function Ue(n, e) {
  const t = await u(n, e.object);
  if (t === null) throw new l(n, s.MemberOfNull, e);
  if (e.computed === !1) {
    if (e.property.type === "Identifier") {
      if (t instanceof I || M(t)) return t.field(e.property.name);
      if (t instanceof T) return Z(t, e.property.name, n, e);
      if (t instanceof L) {
        if (!t.hasGlobal(e.property.name)) throw new l(n, s.InvalidIdentifier, e);
        return t.global(e.property.name);
      }
      throw new l(n, s.InvalidMemberAccessKey, e);
    }
    throw new l(n, s.InvalidMemberAccessKey, e);
  }
  let r = await u(n, e.property);
  if (t instanceof I || M(t)) {
    if (h(r)) return t.field(r);
    throw new l(n, s.InvalidMemberAccessKey, e);
  }
  if (t instanceof L) {
    if (h(r)) return t.global(r);
    throw new l(n, s.InvalidMemberAccessKey, e);
  }
  if (t instanceof T) {
    if (h(r)) return Z(t, r, n, e);
    throw new l(n, s.InvalidMemberAccessKey, e);
  }
  if (A(t)) {
    if (C(r) && isFinite(r) && Math.floor(r) === r) {
      if (r < 0 && (r = t.length + r), r >= t.length || r < 0) throw new l(n, s.OutOfBounds, e);
      return t[r];
    }
    throw new l(n, s.InvalidMemberAccessKey, e);
  }
  if (R(t)) {
    if (C(r) && isFinite(r) && Math.floor(r) === r) {
      if (r < 0 && (r = t.length() + r), r >= t.length() || r < 0) throw new l(n, s.OutOfBounds, e);
      return t.get(r);
    }
    throw new l(n, s.InvalidMemberAccessKey, e);
  }
  if (h(t)) {
    if (C(r) && isFinite(r) && Math.floor(r) === r) {
      if (r < 0 && (r = t.length + r), r >= t.length || r < 0) throw new l(n, s.OutOfBounds, e);
      return t[r];
    }
    throw new l(n, s.InvalidMemberAccessKey, e);
  }
  throw new l(n, s.InvalidMemberAccessKey, e);
}
async function qe(n, e) {
  const t = await u(n, e.argument);
  if (F(t)) {
    if (e.operator === "!") return !t;
    if (e.operator === "-") return -1 * d(t);
    if (e.operator === "+") return 1 * d(t);
    if (e.operator === "~") return ~d(t);
    throw new l(n, s.UnsupportedUnaryOperator, e);
  }
  if (e.operator === "-") return -1 * d(t);
  if (e.operator === "+") return 1 * d(t);
  if (e.operator === "~") return ~d(t);
  throw new l(n, s.UnsupportedUnaryOperator, e);
}
async function We(n, e) {
  const t = [];
  for (let r = 0; r < e.elements.length; r++) t.push(await u(n, e.elements[r]));
  for (let r = 0; r < t.length; r++) {
    if (v(t[r])) throw new l(n, s.NoFunctionInArray, e);
    t[r] === p && (t[r] = null);
  }
  return t;
}
async function _e(n, e) {
  const t = [];
  t[0] = await u(n, e.left), t[1] = await u(n, e.right);
  const r = t[0], o = t[1];
  switch (e.operator) {
    case "|":
    case "<<":
    case ">>":
    case ">>>":
    case "^":
    case "&":
      return ve(d(r), d(o), e.operator);
    case "==":
      return D(r, o);
    case "!=":
      return !D(r, o);
    case "<":
    case ">":
    case "<=":
    case ">=":
      return ye(r, o, e.operator);
    case "+":
      return h(r) || h(o) ? O(r) + O(o) : d(r) + d(o);
    case "-":
      return d(r) - d(o);
    case "*":
      return d(r) * d(o);
    case "/":
      return d(r) / d(o);
    case "%":
      return d(r) % d(o);
    default:
      throw new l(n, s.UnsupportedOperator, e);
  }
}
async function Ve(n, e) {
  const t = await u(n, e.left);
  let r = null;
  if (!F(t)) throw new l(n, s.LogicalExpressionOnlyBoolean, e);
  switch (e.operator) {
    case "||":
      if (t === !0) return t;
      if (r = await u(n, e.right), F(r)) return r;
      throw new l(n, s.LogicExpressionOrAnd, e);
    case "&&":
      if (t === !1) return t;
      if (r = await u(n, e.right), F(r)) return r;
      throw new l(n, s.LogicExpressionOrAnd, e);
    default:
      throw new l(n, s.LogicExpressionOrAnd, e);
  }
}
async function H(n, e) {
  const t = e.name.toLowerCase();
  if (n.localScope != null && n.localScope[t] !== void 0) {
    const r = n.localScope[t];
    if (r.valueset === !0) return r.value;
    if (r.d !== null) return r.d;
    r.d = u(n, r.node);
    const o = await r.d;
    return r.value = o, r.valueset = !0, o;
  }
  if (n.globalScope[t] !== void 0) {
    const r = n.globalScope[t];
    if (r.valueset === !0) return r.value;
    if (r.d !== null) return r.d;
    r.d = u(n, r.node);
    const o = await r.d;
    return r.value = o, r.valueset = !0, o;
  }
  throw new l(n, s.InvalidIdentifier, e);
}
async function ze(n, e) {
  if (e.callee.type === "MemberExpression") {
    const t = await u(n, e.callee.object);
    if (!(t instanceof L)) throw new l(n, s.FunctionNotFound, e);
    const r = e.callee.computed === !1 ? e.callee.property.name : await u(n, e.callee.property);
    if (!t.hasGlobal(r)) throw new l(n, s.FunctionNotFound, e);
    const o = await t.global(r);
    if (!v(o)) throw new l(n, s.CallNonFunction, e);
    return o.call(n, e);
  }
  if (e.callee.type !== "Identifier") throw new l(n, s.FunctionNotFound, e);
  if (n.localScope != null && n.localScope[e.callee.name.toLowerCase()] !== void 0) {
    const t = n.localScope[e.callee.name.toLowerCase()];
    if (v(t.value)) return t.value.call(n, e);
    throw new l(n, s.CallNonFunction, e);
  }
  if (n.globalScope[e.callee.name.toLowerCase()] !== void 0) {
    const t = n.globalScope[e.callee.name.toLowerCase()];
    if (v(t.value)) return t.value.call(n, e);
    throw new l(n, s.CallNonFunction, e);
  }
  throw new l(n, s.FunctionNotFound, e);
}
async function He(n, e) {
  return e.value ? e.value.cooked : "";
}
function Je(n, e, t) {
  if (v(n)) throw new l(e, s.NoFunctionInTemplateLiteral, t);
  return n;
}
async function Ye(n, e) {
  const t = [];
  for (let a = 0; a < e.expressions.length; a++) {
    const i = await u(n, e.expressions[a]);
    t[a] = O(i);
  }
  let r = "", o = 0;
  for (const a of e.quasis) r += a.value ? a.value.cooked : "", a.tail === !1 && (r += t[o] ? Je(t[o], n, e) : "", o++);
  return r;
}
const g = {};
async function ae(n, e, t, r) {
  const o = await u(n, e.arguments[t]);
  if (D(o, r)) return u(n, e.arguments[t + 1]);
  const a = e.arguments.length - t;
  return a === 1 ? u(n, e.arguments[t]) : a === 2 ? null : a === 3 ? u(n, e.arguments[t + 2]) : ae(n, e, t + 2, r);
}
async function ie(n, e, t, r) {
  if (r === !0) return u(n, e.arguments[t + 1]);
  if (e.arguments.length - t === 3) return u(n, e.arguments[t + 2]);
  const o = await u(n, e.arguments[t + 2]);
  if (F(o) === !1) throw new l(n, s.ModuleExportNotFound, e.arguments[t + 2]);
  return ie(n, e, t + 2, o);
}
async function K(n, e, t, r) {
  const o = n.body;
  if (t.length !== n.params.length) throw new l(e, s.WrongNumberOfParameters, null);
  for (let i = 0; i < t.length; i++) {
    const c = n.params[i];
    c.type === "Identifier" && e.localScope != null && (e.localScope[c.name.toLowerCase()] = { d: null, value: t[i], valueset: !0, node: null });
  }
  const a = await u(e, o);
  if (a instanceof y) return a.value;
  if (a === S) throw new l(e, s.UnexpectedToken, r);
  if (a === $) throw new l(e, s.UnexpectedToken, r);
  return a instanceof E ? a.value : a;
}
ue(g, x), ce(g, x), fe(g, x), we(g, x), pe(g, x), Ie({ functions: g, compiled: !1, signatures: null, evaluateIdentifier: null, mode: "async", standardFunction: x, standardFunctionAsync: k }), g.iif = async function(n, e) {
  J(e.arguments === null ? [] : e.arguments, 3, 3, n, e);
  const t = await u(n, e.arguments[0]);
  if (F(t) === !1) throw new l(n, s.BooleanConditionRequired, e);
  return u(n, t ? e.arguments[1] : e.arguments[2]);
}, g.defaultvalue = async function(n, e) {
  J(e.arguments === null ? [] : e.arguments, 2, 3, n, e);
  const t = await u(n, e.arguments[0]);
  if (e.arguments.length === 3) {
    const r = await u(n, e.arguments[1]);
    let o = [];
    if (R(r)) o = r.toArray();
    else {
      if (!A(r)) throw new l(n, s.InvalidParameter, e);
      o = r;
    }
    let a = t;
    if (a === null) return u(n, e.arguments[2]);
    for (const i of o) if (M(a)) {
      if (h(i) === !1 || !a.hasField(i)) return u(n, e.arguments[2]);
      a = a.field(i);
    } else if (a instanceof I) {
      if (h(i) === !1 || !a.hasField(i)) return u(n, e.arguments[2]);
      a = a.field(i);
    } else if (a instanceof T) {
      if (h(i) === !1 || (a = Z(a, i, null, null, 2), a === null) || a?.keystate === "notfound") return u(n, e.arguments[2]);
    } else if (A(a)) {
      if (C(i) === !1 || (a = a[i], a == null)) return u(n, e.arguments[2]);
    } else if (!R(a) || C(i) === !1 || (a = a.get(i), a == null)) return u(n, e.arguments[2]);
    return a;
  }
  return t == null || t === "" ? u(n, e.arguments[1]) : t;
}, g.decode = async function(n, e) {
  if (e.arguments.length < 2) throw new l(n, s.WrongNumberOfParameters, e);
  if (e.arguments.length === 2) return u(n, e.arguments[1]);
  if ((e.arguments.length - 1) % 2 == 0) throw new l(n, s.WrongNumberOfParameters, e);
  return ae(n, e, 1, await u(n, e.arguments[0]));
}, g.when = async function(n, e) {
  if (e.arguments.length < 3) throw new l(n, s.WrongNumberOfParameters, e);
  if (e.arguments.length % 2 == 0) throw new l(n, s.WrongNumberOfParameters, e);
  const t = await u(n, e.arguments[0]);
  if (F(t) === !1) throw new l(n, s.BooleanConditionRequired, e.arguments[0]);
  return ie(n, e, 0, t);
};
const Qe = { fixSpatialReference: be, parseArguments: z, standardFunction: x, standardFunctionAsync: k, evaluateIdentifier: H };
for (const n in g) g[n] = { value: new V(g[n]), valueset: !0, node: null };
const N = function() {
};
function le(n, e, t) {
  const r = new N();
  n == null && (n = {}), e == null && (e = {});
  const o = new I({ newline: `
`, tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  o.immutable = !1, r.textformatting = { value: o, valueset: !0, node: null };
  for (const a in e) r[a] = { value: new V(e[a]), native: !0, valueset: !0, node: null };
  for (const a in n) n[a] && n[a].declaredClass === "esri.Graphic" ? r[a] = { value: ne.createFromGraphic(n[a], t), valueset: !0, node: null } : r[a] = { value: n[a], valueset: !0, node: null };
  return r;
}
function se(n) {
  console.log(n);
}
N.prototype = g, N.prototype.infinity = { value: Number.POSITIVE_INFINITY, valueset: !0, node: null }, N.prototype.pi = { value: Math.PI, valueset: !0, node: null };
const rn = Qe;
function Xe(n) {
  const e = { mode: "async", compiled: !1, functions: {}, signatures: [], standardFunction: x, standardFunctionAsync: k, evaluateIdentifier: H };
  for (let t = 0; t < n.length; t++) n[t].registerFunctions(e);
  for (const t in e.functions) g[t] = { value: new V(e.functions[t]), valueset: !0, node: null }, N.prototype[t] = g[t];
  for (let t = 0; t < e.signatures.length; t++) de(e.signatures[t], "async");
}
async function on(n, e) {
  let t = e.spatialReference;
  t == null && (t = new te({ wkid: 102100 }));
  let r = null;
  n.usesModules && (r = new ee(/* @__PURE__ */ new Map(), n.loadedModules));
  const o = le(e.vars, e.customfunctions, e.timeZone), a = { spatialReference: t, services: e.services, exports: {}, libraryResolver: r, abortSignal: e.abortSignal === void 0 || e.abortSignal === null ? { aborted: !1 } : e.abortSignal, globalScope: o, console: e.console ?? se, timeZone: e.timeZone ?? null, lrucache: e.lrucache, interceptor: e.interceptor, localScope: null, depthCounter: { depth: 1 } };
  let i = await u(a, n);
  if (i instanceof y && (i = i.value), i instanceof E && (i = i.value), i === p && (i = null), i === S) throw new l(a, s.IllegalResult, null);
  if (i === $) throw new l(a, s.IllegalResult, null);
  if (v(i)) throw new l(a, s.IllegalResult, null);
  return i;
}
Xe([he]);
export {
  on as executeScript,
  Xe as extend,
  rn as functionHelper
};
//# sourceMappingURL=arcadeAsyncRuntime-FtBFE0-O.js.map
