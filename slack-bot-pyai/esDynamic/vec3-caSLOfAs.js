import { C as O } from "./main-DhLeoxL5.js";
const $ = () => O.getLogger("esri.views.3d.support.buffer.math");
function q(e, n, t) {
  V(e.typedBuffer, n.typedBuffer, t, e.typedBufferStride, n.typedBufferStride);
}
function V(e, n, t, f = 3, d = f) {
  if (e.length / f !== Math.ceil(n.length / d)) return e;
  const u = e.length / f, r = t[0], i = t[1], o = t[2], l = t[4], a = t[5], h = t[6], p = t[8], S = t[9], M = t[10], y = t[12], B = t[13], m = t[14];
  let s = 0, c = 0;
  for (let g = 0; g < u; g++) {
    const b = n[s], w = n[s + 1], v = n[s + 2];
    e[c] = r * b + l * w + p * v + y, e[c + 1] = i * b + a * w + S * v + B, e[c + 2] = o * b + h * w + M * v + m, s += d, c += f;
  }
  return e;
}
function x(e, n, t) {
  _(e.typedBuffer, n.typedBuffer, t, e.typedBufferStride, n.typedBufferStride);
}
function _(e, n, t, f = 3, d = f) {
  if (e.length / f !== Math.ceil(n.length / d)) return void $().error("source and destination buffers need to have the same number of elements");
  const u = e.length / f, r = t[0], i = t[1], o = t[2], l = t[3], a = t[4], h = t[5], p = t[6], S = t[7], M = t[8];
  let y = 0, B = 0;
  for (let m = 0; m < u; m++) {
    const s = n[y], c = n[y + 1], g = n[y + 2];
    e[B] = r * s + l * c + p * g, e[B + 1] = i * s + a * c + S * g, e[B + 2] = o * s + h * c + M * g, y += d, B += f;
  }
}
function C(e, n, t) {
  z(e.typedBuffer, n, t, e.typedBufferStride);
}
function z(e, n, t, f = 3) {
  const d = Math.min(e.length / f, n.count), u = n.typedBuffer, r = n.typedBufferStride;
  let i = 0, o = 0;
  for (let l = 0; l < d; l++) e[o] = t * u[i], e[o + 1] = t * u[i + 1], e[o + 2] = t * u[i + 2], i += r, o += f;
}
function L(e, n, t, f = 3, d = f) {
  const u = e.length / f;
  if (u !== Math.ceil(n.length / d)) return e;
  let r = 0, i = 0;
  for (let o = 0; o < u; o++) e[i] = n[r] + t[0], e[i + 1] = n[r + 1] + t[1], e[i + 2] = n[r + 2] + t[2], r += d, i += f;
  return e;
}
function P(e, n) {
  j(e.typedBuffer, n.typedBuffer, e.typedBufferStride, n.typedBufferStride);
}
function j(e, n, t = 3, f = t) {
  const d = Math.min(e.length / t, n.length / f);
  let u = 0, r = 0;
  for (let i = 0; i < d; i++) {
    const o = n[u], l = n[u + 1], a = n[u + 2], h = o * o + l * l + a * a;
    if (h > 0) {
      const p = 1 / Math.sqrt(h);
      e[r] = p * o, e[r + 1] = p * l, e[r + 2] = p * a;
    }
    u += f, r += t;
  }
}
function R(e, n, t) {
  const f = Math.min(e.count, n.count), d = e.typedBuffer, u = e.typedBufferStride, r = n.typedBuffer, i = n.typedBufferStride;
  let o = 0, l = 0;
  for (let a = 0; a < f; a++) d[l] = r[o] >> t, d[l + 1] = r[o + 1] >> t, d[l + 2] = r[o + 2] >> t, o += i, l += u;
}
Object.freeze(Object.defineProperty({ __proto__: null, normalize: j, normalizeView: P, scale: z, scaleView: C, shiftRight: R, transformMat3: _, transformMat3View: x, transformMat4: V, transformMat4View: q, translate: L }, Symbol.toStringTag, { value: "Module" }));
export {
  P as a,
  $ as b,
  q as e,
  x as f,
  L as i,
  _ as n,
  C as o,
  V as r,
  j as s,
  z as u
};
//# sourceMappingURL=vec3-caSLOfAs.js.map
