import { a9 as p } from "./main-C4pF0E7B.js";
import { h as f } from "./PooledRBush-Cr7vIM2F.js";
import { i as u } from "./MeshLocalVertexSpace-Dx6k4fVM.js";
import { M as l } from "./vertexSpaceConversion-BDB8iBSZ.js";
class S {
  async createIndex(n, r) {
    const o = new Array();
    if (!n.vertexAttributes?.position) return new f();
    const e = d(n), a = r != null ? await r.invoke("createIndexThread", e, { transferList: o }) : this.createIndexThread(e).result;
    return c().fromJSON(a);
  }
  createIndexThread(n) {
    const r = c();
    if (!n) return { result: r.toJSON() };
    const o = new Float64Array(n.position);
    return n.components ? h(r, o, n.components.map((e) => new Uint32Array(e))) : x(r, o);
  }
}
function x(t, n) {
  const r = new Array(n.length / 9);
  let o = 0;
  for (let e = 0; e < n.length; e += 9) r[o++] = m(n, e, e + 3, e + 6);
  return t.load(r), { result: t.toJSON() };
}
function h(t, n, r) {
  let o = 0;
  for (const s of r) o += s.length / 3;
  const e = new Array(o);
  let a = 0;
  for (const s of r) for (let i = 0; i < s.length; i += 3) e[a++] = m(n, 3 * s[i], 3 * s[i + 1], 3 * s[i + 2]);
  return t.load(e), { result: t.toJSON() };
}
function d(t) {
  const { vertexAttributes: { position: n }, vertexSpace: r, spatialReference: o, transform: e } = t, a = l({ vertexAttributes: { position: n }, vertexSpace: r, spatialReference: o, transform: e }, new u(), { allowBufferReuse: !0 })?.position;
  return a ? !t.components || t.components.some((s) => !s.faces) ? { position: a.buffer } : { position: a.buffer, components: t.components.map((s) => s.faces) } : null;
}
function c() {
  return new f(9, p("esri-csp-restrictions") ? (t) => t : [".minX", ".minY", ".maxX", ".maxY"]);
}
function m(t, n, r, o) {
  return { minX: Math.min(t[n], t[r], t[o]), maxX: Math.max(t[n], t[r], t[o]), minY: Math.min(t[n + 1], t[r + 1], t[o + 1]), maxY: Math.max(t[n + 1], t[r + 1], t[o + 1]), p0: [t[n], t[n + 1], t[n + 2]], p1: [t[r], t[r + 1], t[r + 2]], p2: [t[o], t[o + 1], t[o + 2]] };
}
export {
  S as default
};
//# sourceMappingURL=ElevationSamplerWorker-8Qt_Sr0y.js.map
