import { C as x, a1 as C, bn as J, bo as K, bp as E, bx as I, Z as M, eU as W, eY as Q, eZ as U } from "./main-DMoCLB29.js";
import { a as G, b as u, r as c, I as j, m as P, G as w, ab as V, P as Z, N as T, U as v, A as H, E as D, X as k, w as X, v as Y, ac as _, ad as F, ae as z } from "./arcadeUtils-txUl0uuL.js";
import { l as B } from "./portalUtils-BlYqwLpm.js";
import { p as L, n as O } from "./project-YGMsheox.js";
import { s as $, m as nn, t as tn, p as en, c as an } from "./GraphQueryStreaming-DVFhqZin.js";
let f = null;
async function rn(n) {
  const t = C.geometryServiceUrl ?? "";
  if (!t) {
    J() || await K();
    for (const e of n) e.container[e.indexer] = E(e.container[e.indexer], I.WGS84);
    return;
  }
  const a = n.map((e) => e.container[e.indexer]), i = new L({ geometries: a, outSpatialReference: I.WGS84 }), s = await O(t, i);
  for (let e = 0; e < s.length; e++) {
    const r = n[e];
    r.container[r.indexer] = s[e];
  }
}
async function q(n, t) {
  const a = new M({ portal: n, id: t });
  return await a.load(), f === null && (f = await import("./knowledgeGraphService-CdI4Y_ZD.js").then((i) => i.k)), await f.fetchKnowledgeGraph(a.url);
}
function R(n, t, a, i, s) {
  if (n === null) return null;
  if (w(n) || D(n)) return n;
  if (k(n) || k(n)) return n.toJSDate();
  if (X(n)) return n.toStorageFormat();
  if (Y(n)) return n.toStorageString();
  if (_(n)) {
    const e = {};
    for (const r of n.keys()) e[r] = R(n.field(r), t, a, i, s), e[r] instanceof W && s.push({ container: e, indexer: r });
    return e;
  }
  if (v(n)) {
    const e = n.map((r) => R(r, t, a, i, s));
    for (let r = 0; r < e.length; r++) e[r] instanceof W && s.push({ container: e, indexer: r });
    return e;
  }
  return F(n) ? n.spatialReference.isWGS84 ? n : n.spatialReference.isWebMercator && t ? Q(n) : n : void 0;
}
function on(n, t) {
  if (!n) return n;
  if (n.spatialReference.isWGS84 && t.spatialReference.isWebMercator) return U(n);
  if (n.spatialReference.equals(t.spatialReference)) return n;
  throw new u(t, c.WrongSpatialReference, null);
}
function S(n, t) {
  if (!n) return null;
  const a = {};
  for (const i in n) a[i] = d(n[i], t);
  return a;
}
function d(n, t) {
  return n === null ? null : v(n) ? n.map((a) => d(a, t)) : n instanceof nn ? { graphTypeName: n.typeName, id: n.id, graphType: "entity", properties: S(n.properties, t) } : n instanceof tn ? { graphType: "object", properties: S(n.properties, t) } : n instanceof en ? { graphTypeName: n.typeName, id: n.id, graphType: "relationship", originId: n.originId ?? null, destinationId: n.destinationId ?? null, properties: S(n.properties, t) } : n instanceof an ? { graphType: "path", path: n.path ? n.path.map((a) => d(a, t)) : null } : F(n) ? on(n, t) : w(n) || D(n) || z(n) ? n : null;
}
function pn(n) {
  n.mode === "async" && (n.functions.knowledgegraphbyportalitem = function(t, a) {
    return n.standardFunctionAsync(t, a, (i, s, e) => {
      if (G(e, 2, 2, t, a), e[0] === null) throw new u(t, c.PortalRequired, a);
      if (e[0] instanceof j) {
        const h = P(e[1]);
        let p;
        return p = t.services?.portal ? t.services.portal : x.getDefault(), q(B(e[0], p), h);
      }
      if (w(e[0]) === !1) throw new u(t, c.InvalidParameter, a);
      const r = P(e[0]);
      return q(t.services?.portal ?? x.getDefault(), r);
    });
  }, n.signatures.push({ name: "knowledgegraphbyportalitem", min: 2, max: 2 }), n.functions.querygraph = function(t, a) {
    return n.standardFunctionAsync(t, a, async (i, s, e) => {
      G(e, 2, 4, t, a);
      const r = e[0];
      if (!V(r)) throw new u(t, c.InvalidParameter, a);
      const h = e[1];
      if (!w(h)) throw new u(t, c.InvalidParameter, a);
      f === null && (f = await import("./knowledgeGraphService-CdI4Y_ZD.js").then((o) => o.k));
      let p = null;
      const m = Z(e[2], null);
      if (!(m instanceof T || m === null)) throw new u(t, c.InvalidParameter, a);
      if (m) {
        let o = [];
        p = R(m, !0, !1, t, o), o = o.filter((l) => !l.container[l.indexer].spatialReference.isWGS84), o.length > 0 && await rn(o);
      }
      const b = new $({ openCypherQuery: h, bindParameters: p });
      (r?.serviceDefinition?.currentVersion ?? 11.3) > 11.2 && (b.outputSpatialReference = t.spatialReference);
      const N = (await f.executeQueryStreaming(r, b)).resultRowsStream.getReader(), y = [];
      try {
        for (; ; ) {
          const { done: o, value: l } = await N.read();
          if (o) break;
          if (v(l)) for (const g of l) y.push(d(g, t));
          else {
            const g = [];
            for (const A of l) g.push(d(l[A], t));
            y.push(g);
          }
        }
      } catch (o) {
        throw o;
      }
      return T.convertJsonToArcade(y, H(t), !1, !0);
    });
  }, n.signatures.push({ name: "querygraph", min: 2, max: 4 }));
}
export {
  pn as registerFunctions
};
//# sourceMappingURL=knowledgegraph-CLS4G1mm.js.map
