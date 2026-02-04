import { n as f } from "./date-CID61X27.js";
import { d8 as h, d9 as g, d5 as m, da as p, aV as y, db as w, dc as a } from "./main-3gzXighg.js";
class b {
  constructor() {
    this.code = null, this.description = null;
  }
}
class I {
  constructor(t) {
    this.error = new b(), this.globalId = null, this.objectId = null, this.success = !1, this.uniqueId = null, this.error.description = t;
  }
}
function c(n) {
  return new I(n);
}
class q {
  constructor(t) {
    this.globalId = null, this.success = !0, this.objectId = this.uniqueId = t;
  }
}
function S(n) {
  return new q(n);
}
const u = /* @__PURE__ */ new Set();
function x(n, t, e, d = !1) {
  u.clear();
  for (const i in e) {
    const r = n.get(i);
    if (!r) continue;
    const o = j(r, e[i]);
    if (u.add(r.name), r && (d || r.editable)) {
      const l = h(r, o);
      if (l) return c(g(l, r, o));
      t[r.name] = o;
    }
  }
  for (const i of n?.requiredFields ?? []) if (!u.has(i.name)) return c(`missing required field "${i.name}"`);
  return null;
}
function j(n, t) {
  let e = t;
  return m(n) && typeof t == "string" ? e = parseFloat(t) : p(n) && t != null && typeof t != "string" ? e = String(t) : y(n) && typeof t == "string" && (e = f(t)), w(e);
}
let s;
function A(n, t) {
  if (!n || !a(t)) return n;
  if ("rings" in n || "paths" in n) {
    if (s == null) throw new TypeError("geometry engine not loaded");
    return s.simplify(t, n);
  }
  return n;
}
async function F() {
  return s == null && (s = await import("./geometryEngineJSON-CCfliBxM.js").then((n) => n.g)), s;
}
async function E(n, t) {
  !a(n) || t !== "esriGeometryPolygon" && t !== "esriGeometryPolyline" || await F();
}
export {
  S as d,
  c as f,
  E as j,
  x as p,
  A as y
};
//# sourceMappingURL=sourceUtils-CU5FGcpt.js.map
