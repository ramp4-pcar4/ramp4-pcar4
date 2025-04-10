import { I as f } from "./InterleavedLayout-DHFZwghB.js";
import { f as d, u as c, a as u, I as p, d as g, m as h } from "./edgeProcessing-Hxj_ztF8.js";
function a(t, e) {
  return e.push(t.buffer), { buffer: t.buffer, layout: new f(t.layout) };
}
class x {
  async extract(e) {
    const n = o(e), s = d(n), i = [n.data.buffer];
    return { result: m(s, i), transferList: i };
  }
  async extractComponentsEdgeLocations(e) {
    const n = o(e), s = c(n.data, n.skipDeduplicate, n.indices, n.indicesLength), i = u(s, L, l), r = [];
    return { result: a(i.regular.instancesData, r), transferList: r };
  }
  async extractEdgeLocations(e) {
    const n = o(e), s = c(n.data, n.skipDeduplicate, n.indices, n.indicesLength), i = u(s, I, l), r = [];
    return { result: a(i.regular.instancesData, r), transferList: r };
  }
}
function o(t) {
  return { data: p.createView(t.dataBuffer), indices: t.indicesType === "Uint32Array" ? new Uint32Array(t.indices) : t.indicesType === "Uint16Array" ? new Uint16Array(t.indices) : t.indices, indicesLength: t.indicesLength, writerSettings: t.writerSettings, skipDeduplicate: t.skipDeduplicate };
}
function m(t, e) {
  return e.push(t.regular.lodInfo.lengths.buffer), e.push(t.silhouette.lodInfo.lengths.buffer), { regular: { instancesData: a(t.regular.instancesData, e), lodInfo: { lengths: t.regular.lodInfo.lengths.buffer } }, silhouette: { instancesData: a(t.silhouette.instancesData, e), lodInfo: { lengths: t.silhouette.lodInfo.lengths.buffer } }, averageEdgeLength: t.averageEdgeLength };
}
class w {
  allocate(e) {
    return g.createBuffer(e);
  }
  trim(e, n) {
    return e.slice(0, n);
  }
  write(e, n, s) {
    e.position0.setVec(n, s.position0), e.position1.setVec(n, s.position1);
  }
}
class y {
  allocate(e) {
    return h.createBuffer(e);
  }
  trim(e, n) {
    return e.slice(0, n);
  }
  write(e, n, s) {
    e.position0.setVec(n, s.position0), e.position1.setVec(n, s.position1), e.componentIndex.set(n, s.componentIndex);
  }
}
const I = new w(), L = new y(), l = { allocate: () => null, write: () => {
}, trim: () => null };
export {
  x as default
};
//# sourceMappingURL=EdgeProcessingWorker-irgEk1D_.js.map
