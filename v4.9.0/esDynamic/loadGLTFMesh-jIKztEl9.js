import { a2 as F, c1 as R, ax as w, iM as B, iN as S, hS as P, cj as z, df as D } from "./main-DIdq27YS.js";
import { e as C } from "./mat3f64-Dh9_zhFu.js";
import { l as L, m as N, a as G, h as U, c as V } from "./Mesh-Bx9m-bEm.js";
import { c as O, x as I, L as q, O as A, i as j, E as K, T as Q, u as k } from "./BufferView-B9XykK65.js";
import { e as H, f as J, a as W, o as E } from "./vec3-D3PXDBov.js";
import { n as X, l as Y, o as Z, f as ee, r as te, a as ne, b, c as re, d as oe, e as M, g as se, h as le, i as ae } from "./DefaultMaterial_COLOR_GAMMA-CTIgv11M.js";
import { e as ue } from "./types-ChhhI6OU.js";
import { V as ie } from "./georeference-CUlKz6iO.js";
import { r as ce } from "./resourceUtils-uKqQajoy.js";
import { D as v } from "./enums-Do5C4ZjN.js";
function fe(e, t, n) {
  const i = e.typedBuffer, o = e.typedBufferStride, l = t.typedBuffer, c = t.typedBufferStride, a = n ? n.count : t.count;
  let s = (n?.dstIndex ?? 0) * o, m = (n?.srcIndex ?? 0) * c;
  for (let u = 0; u < a; ++u) {
    for (let r = 0; r < 9; ++r) i[s + r] = l[m + r];
    s += o, m += c;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: fe }, Symbol.toStringTag, { value: "Module" }));
function me(e, t, n) {
  const i = e.typedBuffer, o = e.typedBufferStride, l = t.typedBuffer, c = t.typedBufferStride, a = n ? n.count : t.count;
  let s = (n?.dstIndex ?? 0) * o, m = (n?.srcIndex ?? 0) * c;
  for (let u = 0; u < a; ++u) {
    for (let r = 0; r < 16; ++r) i[s + r] = l[m + r];
    s += o, m += c;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: me }, Symbol.toStringTag, { value: "Module" }));
function y(e, t) {
  return new e(new ArrayBuffer(t * e.ElementCount * ue(e.ElementType)));
}
async function je(e, t, n) {
  const i = new X(pe(n)), o = (await Y(i, t, n, !0)).model, l = o.lods.shift(), c = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  o.textures.forEach(($, h) => c.set(h, ge($))), o.materials.forEach(($, h) => a.set(h, $e($, c)));
  const s = xe(l);
  for (const $ of s.parts) ye(s, $, a);
  const { position: m, normal: u, tangent: r, color: f, texCoord0: p } = s.vertexAttributes, x = { position: m.typedBuffer, normal: u != null ? u.typedBuffer : null, tangent: r != null ? r.typedBuffer : null, uv: p != null ? p.typedBuffer : null, color: f != null ? f.typedBuffer : null }, g = ie(x, e, n);
  return { transform: g.transform, vertexSpace: g.vertexSpace, components: s.components, spatialReference: e.spatialReference, vertexAttributes: new L({ position: g.vertexAttributes.position, normal: g.vertexAttributes.normal, tangent: g.vertexAttributes.tangent, color: x.color, uv: x.uv }) };
}
function pe(e) {
  const t = e?.resolveFile;
  return t ? { busy: !1, request: async (n, i, o) => {
    const l = t?.(n) ?? n;
    return (await F(l, { responseType: i === "image" ? "image" : i === "binary" ? "array-buffer" : "json", signal: o != null ? o.signal : null })).data;
  } } : null;
}
function T(e, t) {
  if (e == null) return "-";
  const n = e.typedBuffer;
  return `${R(t, n.buffer, () => t.size)}/${n.byteOffset}/${n.byteLength}`;
}
function de(e) {
  return e != null ? e.toString() : "-";
}
function xe(e) {
  let t = 0;
  const n = { color: !1, tangent: !1, normal: !1, texCoord0: !1 }, i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = [];
  for (const c of e.parts) {
    const { attributes: { position: a, normal: s, color: m, tangent: u, texCoord0: r } } = c, f = `
      ${T(a, i)}/
      ${T(s, i)}/
      ${T(m, i)}/
      ${T(u, i)}/
      ${T(r, i)}/
      ${de(c.transform)}
    `;
    let p = !1;
    const x = R(o, f, () => (p = !0, { start: t, length: a.count }));
    p && (t += a.count), s && (n.normal = !0), m && (n.color = !0), u && (n.tangent = !0), r && (n.texCoord0 = !0), l.push({ gltf: c, writeVertices: p, region: x });
  }
  return { vertexAttributes: { position: y(Q, t), normal: n.normal ? y(j, t) : null, tangent: n.tangent ? y(O, t) : null, color: n.color ? y(I, t) : null, texCoord0: n.texCoord0 ? y(k, t) : null }, parts: l, components: [] };
}
function ge(e) {
  return new N({ data: (ce(e.data), e.data), wrap: be(e.parameters.wrap) });
}
function $e(e, t) {
  const n = new w(ve(e.color, e.opacity)), i = e.emissiveFactor ? new w(we(e.emissiveFactor)) : null, o = (l) => l ? new V({ scale: l.scale ? [l.scale[0], l.scale[1]] : [1, 1], rotation: D(l.rotation ?? 0), offset: l.offset ? [l.offset[0], l.offset[1]] : [0, 0] }) : null;
  return new G({ color: n, colorTexture: t.get(e.textureColor), normalTexture: t.get(e.textureNormal), emissiveColor: i, emissiveTexture: t.get(e.textureEmissive), occlusionTexture: t.get(e.textureOcclusion), alphaMode: he(e.alphaMode), alphaCutoff: e.alphaCutoff, doubleSided: e.doubleSided, metallic: e.metallicFactor, roughness: e.roughnessFactor, metallicRoughnessTexture: t.get(e.textureMetallicRoughness), colorTextureTransform: o(e.colorTextureTransform), normalTextureTransform: o(e.normalTextureTransform), occlusionTextureTransform: o(e.occlusionTextureTransform), emissiveTextureTransform: o(e.emissiveTextureTransform), metallicRoughnessTextureTransform: o(e.metallicRoughnessTextureTransform) });
}
function ye(e, t, n) {
  t.writeVertices && Te(e, t);
  const { indices: i, attributes: o, primitiveType: l, material: c } = t.gltf;
  let a = Z(i || o.position.count, l);
  const s = t.region.start;
  if (s) {
    const m = new Uint32Array(a);
    for (let u = 0; u < a.length; u++) m[u] += s;
    a = m;
  }
  e.components.push(new U({ name: t.gltf.name, faces: a, material: n.get(c), shading: o.normal ? "source" : "flat", trustSourceNormals: !0 }));
}
function Te(e, t) {
  const { position: n, normal: i, tangent: o, color: l, texCoord0: c } = e.vertexAttributes, a = t.region.start, { attributes: s, transform: m } = t.gltf, u = s.position.count;
  if (H(n.slice(a, u), s.position, m), s.normal != null && i != null) {
    const r = B(C(), m), f = i.slice(a, u);
    J(f, s.normal, r), S(r) && W(f, f);
  } else i != null && ee(i, 0, 0, 1, { dstIndex: a, count: u });
  if (s.tangent != null && o != null) {
    const r = B(C(), m), f = o.slice(a, u);
    te(f, s.tangent, r), S(r) && ne(f, f);
  } else o != null && b(o, 0, 0, 1, 1, { dstIndex: a, count: u });
  if (s.texCoord0 != null && c != null ? re(c.slice(a, u), s.texCoord0) : c != null && oe(c, 0, 0, { dstIndex: a, count: u }), s.color != null && l != null) {
    const r = s.color, f = l.slice(a, u);
    if (r.elementCount === 4) r instanceof O ? M(f, r, 255) : r instanceof I ? se(f, r) : r instanceof q && M(f, r, 1 / 256);
    else {
      b(f, 255, 255, 255, 255);
      const p = A.fromTypedArray(f.typedBuffer, f.typedBufferStride);
      r instanceof j ? E(p, r, 255) : r instanceof A ? le(p, r) : r instanceof K && E(p, r, 1 / 256);
    }
  } else l != null && b(l.slice(a, u), 255, 255, 255, 255);
}
function he(e) {
  switch (e) {
    case "OPAQUE":
      return "opaque";
    case "MASK":
      return "mask";
    case "BLEND":
      return "blend";
  }
}
function be(e) {
  return { horizontal: _(e.s), vertical: _(e.t) };
}
function _(e) {
  switch (e) {
    case v.CLAMP_TO_EDGE:
      return "clamp";
    case v.MIRRORED_REPEAT:
      return "mirror";
    case v.REPEAT:
      return "repeat";
  }
}
function d(e) {
  return e ** (1 / ae) * 255;
}
function ve(e, t) {
  return P(d(e[0]), d(e[1]), d(e[2]), t);
}
function we(e) {
  return z(d(e[0]), d(e[1]), d(e[2]));
}
export {
  je as loadGLTFMesh
};
//# sourceMappingURL=loadGLTFMesh-jIKztEl9.js.map
