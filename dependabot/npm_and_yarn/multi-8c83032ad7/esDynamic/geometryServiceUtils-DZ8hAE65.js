import { a1 as o, s as a, C as c } from "./main-C4pF0E7B.js";
import { p as g, n as m } from "./project-D7vYnXHa.js";
async function u(e = null, i) {
  if (o.geometryServiceUrl) return o.geometryServiceUrl;
  if (!e) throw new a("internal:geometry-service-url-not-configured");
  let r;
  r = "portal" in e ? e.portal || c.getDefault() : e, await r.load({ signal: i });
  const t = r.helperServices?.geometry?.url;
  if (!t) throw new a("internal:geometry-service-url-not-configured");
  return t;
}
async function p(e, i, r = null, t) {
  const l = await u(r, t), s = new g({ geometries: [e], outSpatialReference: i }), n = await m(l, s, { signal: t });
  if (n && Array.isArray(n) && n.length === 1) return n[0];
  throw new a("internal:geometry-service-projection-failed");
}
export {
  u as getGeometryServiceURL,
  p as projectGeometry
};
//# sourceMappingURL=geometryServiceUtils-DZ8hAE65.js.map
