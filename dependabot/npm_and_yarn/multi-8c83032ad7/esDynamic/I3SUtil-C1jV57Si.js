import { bx as d, j9 as N, aP as l, $ as h, ku as C, kv as g } from "./main-C4pF0E7B.js";
import "./mat4f64-Dn1WEGBx.js";
import "./spatialReferenceEllipsoidUtils-D8TeGUPE.js";
import "./sphere-BrkIxIX8.js";
import { I as P } from "./I3SBinaryReader-C_8D5KcA.js";
import "./floatRGBA-CYwwzZ3_.js";
import "./NormalAttribute.glsl-CH4CUSps.js";
import "./interfaces-Aq8q9x0N.js";
import "./BindType-9iOk18Ed.js";
import "./VertexAttribute-CAkzp1tV.js";
import { I as x } from "./orientedBoundingBox-DcWJ4f8E.js";
function D(n, i, t, s) {
  return { x: n, y: i, z: t, hasZ: t != null, hasM: !1, spatialReference: s, type: "point" };
}
D(0, 0, 0, d.WGS84);
var a;
(function(n) {
  n[n.INVISIBLE = 0] = "INVISIBLE", n[n.TRANSPARENT = 1] = "TRANSPARENT", n[n.OPAQUE = 2] = "OPAQUE";
})(a || (a = {}));
var T;
(function(n) {
  n[n.Uniform = 0] = "Uniform", n[n.Varying = 1] = "Varying", n[n.COUNT = 2] = "COUNT";
})(T || (T = {}));
var E, I;
(function(n) {
  n[n.Solid = 0] = "Solid", n[n.Sketch = 1] = "Sketch", n[n.Mixed = 2] = "Mixed", n[n.COUNT = 3] = "COUNT";
})(E || (E = {})), function(n) {
  n[n.REGULAR = 0] = "REGULAR", n[n.SILHOUETTE = 1] = "SILHOUETTE";
}(I || (I = {}));
function L(n) {
  return { ..._, ...n, type: E.Solid };
}
const _ = { color: N(0, 0, 0, 0.2), size: 1, extensionLength: 0, opacity: 1, objectTransparency: a.OPAQUE, hasSlicePlane: !1 };
N(0, 0, 0, 0.2), a.OPAQUE;
l();
var p;
async function q(n, i, t, s, m, U, R, y) {
  const c = [];
  for (const r of i) if (r && m.includes(r.name)) {
    const e = `${n}/nodes/${t}/attributes/${r.key}/0`;
    c.push({ url: e, storageInfo: r });
  }
  const u = await Promise.allSettled(c.map((r) => h(r.url, { responseType: "array-buffer", query: { ...R, token: U }, signal: y?.signal }).then((e) => P(r.storageInfo, e.data)))), f = [];
  for (const r of s) {
    const e = {};
    for (let o = 0; o < u.length; o++) {
      const S = u[o];
      if (S.status === "fulfilled") {
        const O = S.value;
        e[c[o].storageInfo.name] = A(O, r);
      }
    }
    f.push(e);
  }
  return f;
}
(function(n) {
  n[n.OUTSIDE = 0] = "OUTSIDE", n[n.INTERSECTS_CENTER_OUTSIDE = 1] = "INTERSECTS_CENTER_OUTSIDE", n[n.INTERSECTS_CENTER_INSIDE = 2] = "INTERSECTS_CENTER_INSIDE", n[n.INSIDE = 3] = "INSIDE";
})(p || (p = {}));
const $ = -32768, v = -(2 ** 31);
function A(n, i) {
  if (!n) return null;
  const t = n[i];
  return C(n) ? t === $ ? null : t : g(n) ? t === v ? null : t : t != t ? null : t;
}
L({ color: [0, 0, 0, 0], opacity: 0 });
l();
l();
new x();
new Array(72);
export {
  q as $
};
//# sourceMappingURL=I3SUtil-C1jV57Si.js.map
