import { a6 as p, a7 as f, C as l } from "./main-DhLeoxL5.js";
import { i as o, a as g } from "./MeshLocalVertexSpace-BtXq8ljJ.js";
import { i as x } from "./vec3-caSLOfAs.js";
function s() {
  return l.getLogger("esri.geometry.Mesh");
}
function d(e) {
  const { vertexSpace: r } = e;
  if (r.origin != null) return e.clone();
  const { anchor: c } = e, n = c.clone(), a = new o({ origin: [n.x, n.y, n.z] }), t = e.cloneWithVertexSpace(a), { position: i } = t.vertexAttributes;
  return t.vertexAttributes.position = x(new Float64Array(i.length), i, [-n.x, -n.y, -(n.z ?? 0)]), t.vertexAttributesChanged(), t;
}
function u(e) {
  return e.origin != null;
}
function m(e) {
  return u(e.vertexSpace);
}
function S(e, r) {
  if (!u(e)) return null;
  const [c, n, a] = e.origin;
  return new p({ x: c, y: n, z: a, spatialReference: r });
}
function b(e, r) {
  const { x: c, y: n, z: a, spatialReference: t } = e, i = [c, n, a ?? 0];
  if (r?.geographic !== void 0) {
    if (f(s(), "option: geographic", { replacement: "use vertexSpace option instead", version: "4.29", warnOnce: !0 }), !r?.vertexSpace) return r?.geographic ? new g({ origin: i }) : new o({ origin: i });
    s().warn("Deprecated geographic flag ignored since vertexSpace option is provided.");
  }
  if (!r?.vertexSpace) return t.isGeographic || t.isWebMercator ? new g({ origin: i }) : new o({ origin: i });
  switch (r.vertexSpace) {
    case "local":
      return new g({ origin: i });
    case "georeferenced":
      return new o({ origin: i });
    case "georeferenced-absolute":
      return new o();
  }
}
function y(e) {
  return e.isGeographic || e.isWebMercator ? "local" : "georeferenced";
}
function $(e, r) {
  return e === "local" ? new g({ origin: r }) : new o({ origin: r });
}
export {
  d as a,
  b as f,
  u as g,
  $ as h,
  y as l,
  m as p,
  S as u
};
//# sourceMappingURL=meshVertexSpaceUtils-DNboMO4p.js.map
