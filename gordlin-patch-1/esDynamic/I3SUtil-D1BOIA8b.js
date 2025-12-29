import { bh as R, hS as S, az as l, a2 as h, j7 as g, j8 as O } from "./main-BEi6lHs4.js";
import "./mat4f64-Dn1WEGBx.js";
import "./computeTranslationToOriginAndRotation-DscT8sal.js";
import "./sphere-B68TK5m3.js";
import { I as P } from "./I3SBinaryReader-mqZmiDg0.js";
import "./symbolColorUtils-PiFpRNgH.js";
import { O as U } from "./orientedBoundingBox-DcqBPg8B.js";
function d(n, e, t, i) {
  return { x: n, y: e, z: t, hasZ: t != null, hasM: !1, spatialReference: i, type: "point" };
}
d(0, 0, 0, R.WGS84);
var s;
(function(n) {
  n[n.INVISIBLE = 0] = "INVISIBLE", n[n.TRANSPARENT = 1] = "TRANSPARENT", n[n.OPAQUE = 2] = "OPAQUE";
})(s || (s = {}));
function C(n) {
  return { ...D, ...n, type: "solid" };
}
const D = { color: S(0, 0, 0, 0.2), size: 1, extensionLength: 0, opacity: 1, objectTransparency: s.OPAQUE, hasSlicePlane: !1 };
S(0, 0, 0, 0.2), s.OPAQUE;
l();
var I;
async function w(n, e, t, i, T, p, N, m) {
  const c = [];
  for (const o of e) if (o && T.includes(o.name)) {
    const r = `${n}/nodes/${t}/attributes/${o.key}/0`;
    c.push({ url: r, storageInfo: o });
  }
  const u = await Promise.allSettled(c.map((o) => h(o.url, { responseType: "array-buffer", query: { ...N, token: p }, signal: m?.signal }).then((r) => P(o.storageInfo, r.data)))), E = [];
  for (const o of i) {
    const r = {};
    for (let a = 0; a < u.length; a++) {
      const f = u[a];
      if (f.status === "fulfilled") {
        const y = f.value;
        r[c[a].storageInfo.name] = z(y, o);
      }
    }
    E.push(r);
  }
  return E;
}
(function(n) {
  n[n.OUTSIDE = 0] = "OUTSIDE", n[n.INTERSECTS_CENTER_OUTSIDE = 1] = "INTERSECTS_CENTER_OUTSIDE", n[n.INTERSECTS_CENTER_INSIDE = 2] = "INTERSECTS_CENTER_INSIDE", n[n.INSIDE = 3] = "INSIDE";
})(I || (I = {}));
const _ = -32768, $ = -(2 ** 31);
function z(n, e) {
  if (!n) return null;
  const t = n[e];
  return g(n) ? t === _ ? null : t : O(n) ? t === $ ? null : t : t != t ? null : t;
}
C({ color: [0, 0, 0, 0], opacity: 0 });
l();
l();
new U();
new Array(72);
export {
  w as $
};
//# sourceMappingURL=I3SUtil-D1BOIA8b.js.map
