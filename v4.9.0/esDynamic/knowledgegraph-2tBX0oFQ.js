import { Q as x, a4 as Q, b7 as E, b8 as A, b9 as K, bh as I, a0 as M, eJ as W, eN as U, eO as j } from "./main-DIdq27YS.js";
import { a as k, b as u, r as f, x as B, d as G, G as w, a9 as C, v as V, N as T, U as b, q as O, E as P, X as q, k as X, t as Y, aa as z, ab as D, ac as H } from "./arcadeUtils-CcjZQgQz.js";
import { l as L } from "./portalUtils-CAzhY-ki.js";
import { p as Z, n as _ } from "./project-Lj4Ny-eq.js";
import { a as $, m as nn, t as tn, p as en, c as an } from "./GraphQueryStreaming-BgiYd5iK.js";
let c = null;
async function rn(n) {
  const t = Q.geometryServiceUrl ?? "";
  if (!t) {
    E() || await A();
    for (const e of n) e.container[e.indexer] = K(e.container[e.indexer], I.WGS84);
    return;
  }
  const a = n.map((e) => e.container[e.indexer]), i = new Z({ geometries: a, outSpatialReference: I.WGS84 }), s = await _(t, i);
  for (let e = 0; e < s.length; e++) {
    const r = n[e];
    r.container[r.indexer] = s[e];
  }
}
async function N(n, t) {
  const a = new M({ portal: n, id: t });
  return await a.load(), c === null && (c = await import("./knowledgeGraphService-BCnMUW0D.js").then((i) => i.k)), await c.fetchKnowledgeGraph(a.url);
}
function R(n, t, a, i, s) {
  if (n === null) return null;
  if (w(n) || P(n)) return n;
  if (q(n) || q(n)) return n.toJSDate();
  if (X(n)) return n.toStorageFormat();
  if (Y(n)) return n.toStorageString();
  if (z(n)) {
    const e = {};
    for (const r of n.keys()) e[r] = R(n.field(r), t, a, i, s), e[r] instanceof W && s.push({ container: e, indexer: r });
    return e;
  }
  if (b(n)) {
    const e = n.map((r) => R(r, t, a, i, s));
    for (let r = 0; r < e.length; r++) e[r] instanceof W && s.push({ container: e, indexer: r });
    return e;
  }
  if (D(n))
    return n.spatialReference.isWGS84 ? n : n.spatialReference.isWebMercator && t ? U(n) : n;
}
function on(n, t) {
  if (!n) return n;
  if (n.spatialReference.isWGS84 && t.spatialReference.isWebMercator) return j(n);
  if (n.spatialReference.equals(t.spatialReference)) return n;
  throw new u(t, f.WrongSpatialReference, null);
}
function S(n, t) {
  if (!n) return null;
  const a = {};
  for (const i in n) a[i] = d(n[i], t);
  return a;
}
function d(n, t) {
  return n === null ? null : b(n) ? n.map((a) => d(a, t)) : n instanceof nn ? { graphTypeName: n.typeName, id: n.id, graphType: "entity", properties: S(n.properties, t) } : n instanceof tn ? { graphType: "object", properties: S(n.properties, t) } : n instanceof en ? { graphTypeName: n.typeName, id: n.id, graphType: "relationship", originId: n.originId ?? null, destinationId: n.destinationId ?? null, properties: S(n.properties, t) } : n instanceof an ? { graphType: "path", path: n.path ? n.path.map((a) => d(a, t)) : null } : D(n) ? on(n, t) : w(n) || P(n) || H(n) ? n : null;
}
function pn(n) {
  n.mode === "async" && (n.functions.knowledgegraphbyportalitem = function(t, a) {
    return n.standardFunctionAsync(t, a, (i, s, e) => {
      if (k(e, 2, 2, t, a), e[0] === null) throw new u(t, f.PortalRequired, a);
      if (e[0] instanceof B) {
        const h = G(e[1]);
        let p = null;
        return p = t.services?.portal ? t.services.portal : x.getDefault(), N(L(e[0], p), h);
      }
      if (w(e[0]) === !1) throw new u(t, f.InvalidParameter, a);
      const r = G(e[0]);
      return N(t.services?.portal ?? x.getDefault(), r);
    });
  }, n.signatures.push({ name: "knowledgegraphbyportalitem", min: 2, max: 2 }), n.functions.querygraph = function(t, a) {
    return n.standardFunctionAsync(t, a, async (i, s, e) => {
      k(e, 2, 4, t, a);
      const r = e[0];
      if (!C(r)) throw new u(t, f.InvalidParameter, a);
      const h = e[1];
      if (!w(h)) throw new u(t, f.InvalidParameter, a);
      c === null && (c = await import("./knowledgeGraphService-BCnMUW0D.js").then((o) => o.k));
      let p = null;
      const m = V(e[2], null);
      if (!(m instanceof T || m === null)) throw new u(t, f.InvalidParameter, a);
      if (m) {
        let o = [];
        p = R(m, !0, !1, t, o), o = o.filter((l) => !l.container[l.indexer].spatialReference.isWGS84), o.length > 0 && await rn(o);
      }
      const v = new $({ openCypherQuery: h, bindParameters: p });
      (r?.serviceDefinition?.currentVersion ?? 11.3) > 11.2 && (v.outputSpatialReference = t.spatialReference);
      const F = (await c.executeQueryStreaming(r, v)).resultRowsStream.getReader(), y = [];
      try {
        for (; ; ) {
          const { done: o, value: l } = await F.read();
          if (o) break;
          if (b(l)) for (const g of l) y.push(d(g, t));
          else {
            const g = [];
            for (const J of l) g.push(d(l[J], t));
            y.push(g);
          }
        }
      } catch (o) {
        throw o;
      }
      return T.convertJsonToArcade(y, O(t), !1, !0);
    });
  }, n.signatures.push({ name: "querygraph", min: 2, max: 4 }));
}
export {
  pn as registerFunctions
};
//# sourceMappingURL=knowledgegraph-2tBX0oFQ.js.map
