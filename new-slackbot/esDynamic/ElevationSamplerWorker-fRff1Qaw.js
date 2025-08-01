import { af as p } from "./main-BpIyUAdL.js";
import { s as c } from "./PooledRBush-twL_QsA8.js";
import { g as h } from "./meshVertexSpaceUtils-wVXdHh0j.js";
import { P as u } from "./georeference-C-DYrPnb.js";
class _ {
  async createIndex(t, n) {
    const o = new Array();
    if (!t.vertexAttributes?.position) return new c();
    const a = this._createMeshData(t), r = n != null ? await n.invoke("createIndexThread", a, { transferList: o }) : this.createIndexThread(a).result;
    return this._createPooledRBush().fromJSON(r);
  }
  createIndexThread(t) {
    const n = new Float64Array(t.position), o = this._createPooledRBush();
    return t.components ? this._createIndexComponentsThread(o, n, t.components.map((a) => new Uint32Array(a))) : this._createIndexAllThread(o, n);
  }
  _createIndexAllThread(t, n) {
    const o = new Array(n.length / 9);
    let a = 0;
    for (let r = 0; r < n.length; r += 9) o[a++] = m(n, r, r + 3, r + 6);
    return t.load(o), { result: t.toJSON() };
  }
  _createIndexComponentsThread(t, n, o) {
    let a = 0;
    for (const s of o) a += s.length / 3;
    const r = new Array(a);
    let l = 0;
    for (const s of o) for (let i = 0; i < s.length; i += 3) r[l++] = m(n, 3 * s[i], 3 * s[i + 1], 3 * s[i + 2]);
    return t.load(r), { result: t.toJSON() };
  }
  _createMeshData(t) {
    const n = (h(t.vertexSpace) ? u({ position: t.vertexAttributes.position, normal: null, tangent: null }, t.vertexSpace, t.transform, t.spatialReference).position : t.vertexAttributes.position).buffer;
    return !t.components || t.components.some((o) => !o.faces) ? { position: n } : { position: n, components: t.components.map((o) => o.faces) };
  }
  _createPooledRBush() {
    return new c(9, p("esri-csp-restrictions") ? (t) => t : [".minX", ".minY", ".maxX", ".maxY"]);
  }
}
function m(e, t, n, o) {
  return { minX: Math.min(e[t], e[n], e[o]), maxX: Math.max(e[t], e[n], e[o]), minY: Math.min(e[t + 1], e[n + 1], e[o + 1]), maxY: Math.max(e[t + 1], e[n + 1], e[o + 1]), p0: [e[t], e[t + 1], e[t + 2]], p1: [e[n], e[n + 1], e[n + 2]], p2: [e[o], e[o + 1], e[o + 2]] };
}
export {
  _ as default
};
//# sourceMappingURL=ElevationSamplerWorker-fRff1Qaw.js.map
