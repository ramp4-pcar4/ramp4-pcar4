import { a4 as l, s as a, Q as s } from "./main-DIdq27YS.js";
import { p as g, n as m } from "./project-Lj4Ny-eq.js";
async function u(e = null, i) {
  if (l.geometryServiceUrl) return l.geometryServiceUrl;
  if (!e) throw new a("internal:geometry-service-url-not-configured");
  let r;
  r = "portal" in e ? e.portal || s.getDefault() : e, await r.load({ signal: i });
  const t = r.helperServices?.geometry?.url;
  if (!t) throw new a("internal:geometry-service-url-not-configured");
  return t;
}
async function p(e, i, r = null, t) {
  const c = await u(r, t), o = new g();
  o.geometries = [e], o.outSpatialReference = i;
  const n = await m(c, o, { signal: t });
  if (n && Array.isArray(n) && n.length === 1) return n[0];
  throw new a("internal:geometry-service-projection-failed");
}
export {
  u as getGeometryServiceURL,
  p as projectGeometry
};
//# sourceMappingURL=geometryServiceUtils-CCAcGs15.js.map
