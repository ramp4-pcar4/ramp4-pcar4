import { s as L, $ as P, cr as _, aM as v, cx as z, cy as B, cz as D, j9 as G, aH as U, em as N } from "./main-DMoCLB29.js";
import { e as M } from "./mat3f64-Dh9_zhFu.js";
import { w as q, m as H, h as K, c as Q } from "./Mesh-D9IGM-X1.js";
import { l as V } from "./MeshVertexAttributes-DN0IeR9B.js";
import { s as C } from "./meshVertexSpaceUtils-ChhaZ-2c.js";
import { c as O, x as F, L as k, O as S, i as j, E as J, T as W, u as X } from "./BufferView-CQcDUFmA.js";
import { t as Y, r as Z, u as ee, n as E } from "./vec3-C1GK1fa6.js";
import { f as te, o as re, u as R } from "./vec4-9IJUAZuO.js";
import { e as ne } from "./types-ChhhI6OU.js";
import { n as oe, l as se, o as ae, f as le, a as h, b as ue, c as ie, e as ce, d as fe, g as me } from "./DefaultMaterial_COLOR_GAMMA-Dd-PArad.js";
import { M as pe } from "./vertexSpaceConversion-Di74LupK.js";
import { r as de } from "./resourceUtils-CNcAT12m.js";
import { D as w } from "./enums-DDkmfb-t.js";
function xe(e, t, r) {
  const u = e.typedBuffer, o = e.typedBufferStride, a = t.typedBuffer, c = t.typedBufferStride, l = r ? r.count : t.count;
  let s = (r?.dstIndex ?? 0) * o, m = (r?.srcIndex ?? 0) * c;
  for (let i = 0; i < l; ++i) {
    for (let n = 0; n < 9; ++n) u[s + n] = a[m + n];
    s += o, m += c;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: xe }, Symbol.toStringTag, { value: "Module" }));
function ge(e, t, r) {
  const u = e.typedBuffer, o = e.typedBufferStride, a = t.typedBuffer, c = t.typedBufferStride, l = r ? r.count : t.count;
  let s = (r?.dstIndex ?? 0) * o, m = (r?.srcIndex ?? 0) * c;
  for (let i = 0; i < l; ++i) {
    for (let n = 0; n < 16; ++n) u[s + n] = a[m + n];
    s += o, m += c;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: ge }, Symbol.toStringTag, { value: "Module" }));
function $(e, t) {
  return new e(new ArrayBuffer(t * e.ElementCount * ne(e.ElementType)));
}
async function Ue(e, t, r) {
  const u = new oe($e(r)), o = (await se(u, t, r, !0)).model, a = o.lods.shift(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  o.textures.forEach((g, T) => c.set(T, he(g))), o.materials.forEach((g, T) => l.set(T, we(g, c)));
  const s = Te(a);
  for (const g of s.parts) be(s, g, l);
  const { position: m, normal: i, tangent: n, color: f, texCoord0: p } = s.vertexAttributes, x = C(e, r), I = e.spatialReference.isGeographic ? C(e) : x, b = pe({ vertexAttributes: { position: m.typedBuffer, normal: i?.typedBuffer, tangent: n?.typedBuffer }, vertexSpace: I, spatialReference: e.spatialReference }, x, { allowBufferReuse: !0, sourceUnit: "meters" });
  if (!b) throw new L("loadGLTFMesh()", "Failed to load mesh from glTF due to projection errors");
  return { transform: null, vertexSpace: x, components: s.components, spatialReference: e.spatialReference, vertexAttributes: new V({ ...b, color: f?.typedBuffer, uv: p?.typedBuffer }) };
}
function $e(e) {
  const t = e?.resolveFile;
  return t ? { busy: !1, request: async (r, u, o) => {
    const a = t?.(r) ?? r;
    return (await P(a, { responseType: u === "image" ? "image" : u === "binary" || u === "image+type" ? "array-buffer" : "json", signal: o?.signal, timeout: 0 })).data;
  } } : null;
}
function y(e, t) {
  if (e == null) return "-";
  const r = e.typedBuffer;
  return `${_(t, r.buffer, () => t.size)}/${r.byteOffset}/${r.byteLength}`;
}
function ye(e) {
  return e != null ? e.toString() : "-";
}
function Te(e) {
  let t = 0;
  const r = { color: !1, tangent: !1, normal: !1, texCoord0: !1 }, u = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = [];
  for (const c of e.parts) {
    const { attributes: { position: l, normal: s, color: m, tangent: i, texCoord0: n } } = c, f = `
      ${y(l, u)}/
      ${y(s, u)}/
      ${y(m, u)}/
      ${y(i, u)}/
      ${y(n, u)}/
      ${ye(c.transform)}
    `;
    let p = !1;
    const x = _(o, f, () => (p = !0, { start: t, length: l.count }));
    p && (t += l.count), s && (r.normal = !0), m && (r.color = !0), i && (r.tangent = !0), n && (r.texCoord0 = !0), a.push({ gltf: c, writeVertices: p, region: x });
  }
  return { vertexAttributes: { position: $(W, t), normal: r.normal ? $(j, t) : null, tangent: r.tangent ? $(O, t) : null, color: r.color ? $(F, t) : null, texCoord0: r.texCoord0 ? $(X, t) : null }, parts: a, components: [] };
}
function he(e) {
  return new q({ data: (de(e.data), e.data), wrap: Me(e.parameters.wrap) });
}
function we(e, t) {
  const r = new v(Ce(e.color, e.opacity)), u = e.emissiveFactor ? new v(Se(e.emissiveFactor)) : null, o = (a) => a ? new Q({ scale: a.scale ? [a.scale[0], a.scale[1]] : [1, 1], rotation: N(a.rotation ?? 0), offset: a.offset ? [a.offset[0], a.offset[1]] : [0, 0] }) : null;
  return new H({ color: r, colorTexture: t.get(e.textureColor), normalTexture: t.get(e.textureNormal), emissiveColor: u, emissiveTexture: t.get(e.textureEmissive), occlusionTexture: t.get(e.textureOcclusion), alphaMode: Be(e.alphaMode), alphaCutoff: e.alphaCutoff, doubleSided: e.doubleSided, metallic: e.metallicFactor, roughness: e.roughnessFactor, metallicRoughnessTexture: t.get(e.textureMetallicRoughness), colorTextureTransform: o(e.colorTextureTransform), normalTextureTransform: o(e.normalTextureTransform), occlusionTextureTransform: o(e.occlusionTextureTransform), emissiveTextureTransform: o(e.emissiveTextureTransform), metallicRoughnessTextureTransform: o(e.metallicRoughnessTextureTransform) });
}
function be(e, t, r) {
  t.writeVertices && ve(e, t);
  const { indices: u, attributes: o, primitiveType: a, material: c } = t.gltf;
  let l = ae(u || o.position.count, a);
  const s = t.region.start;
  if (s) {
    const m = new Uint32Array(l);
    for (let i = 0; i < l.length; i++) m[i] += s;
    l = m;
  }
  e.components.push(new K({ name: t.gltf.name, faces: l, material: r.get(c), shading: o.normal ? "source" : "flat", trustSourceNormals: !0 }));
}
function ve(e, t) {
  const { position: r, normal: u, tangent: o, color: a, texCoord0: c } = e.vertexAttributes, l = t.region.start, { attributes: s, transform: m } = t.gltf, i = s.position.count;
  if (Y(r.slice(l, i), s.position, m), s.normal != null && u != null) {
    const n = z(M(), m), f = u.slice(l, i);
    Z(f, s.normal, n), B(n) && ee(f, f);
  } else u != null && le(u, 0, 0, 1, { dstIndex: l, count: i });
  if (s.tangent != null && o != null) {
    const n = D(M(), m), f = o.slice(l, i);
    te(f, s.tangent, n), B(n) && re(f, f);
  } else o != null && h(o, 0, 0, 1, 1, { dstIndex: l, count: i });
  if (s.texCoord0 != null && c != null ? ue(c.slice(l, i), s.texCoord0) : c != null && ie(c, 0, 0, { dstIndex: l, count: i }), s.color != null && a != null) {
    const n = s.color, f = a.slice(l, i);
    if (n.elementCount === 4) n instanceof O ? R(f, n, 255) : n instanceof F ? ce(f, n) : n instanceof k && R(f, n, 1 / 256);
    else {
      h(f, 255, 255, 255, 255);
      const p = S.fromTypedArray(f.typedBuffer, f.typedBufferStride);
      n instanceof j ? E(p, n, 255) : n instanceof S ? fe(p, n) : n instanceof J && E(p, n, 1 / 256);
    }
  } else a != null && h(a.slice(l, i), 255, 255, 255, 255);
}
function Be(e) {
  switch (e) {
    case "OPAQUE":
      return "opaque";
    case "MASK":
      return "mask";
    case "BLEND":
      return "blend";
  }
}
function Me(e) {
  return { horizontal: A(e.s), vertical: A(e.t) };
}
function A(e) {
  switch (e) {
    case w.CLAMP_TO_EDGE:
      return "clamp";
    case w.MIRRORED_REPEAT:
      return "mirror";
    case w.REPEAT:
      return "repeat";
  }
}
function d(e) {
  return e ** (1 / me) * 255;
}
function Ce(e, t) {
  return G(d(e[0]), d(e[1]), d(e[2]), t);
}
function Se(e) {
  return U(d(e[0]), d(e[1]), d(e[2]));
}
export {
  Ue as loadGLTFMesh
};
//# sourceMappingURL=loadGLTFMesh-CoOO5ksA.js.map
