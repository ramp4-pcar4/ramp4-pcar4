import { I as l } from "./InterleavedLayout-B4AM1PrG.js";
import { f, u as c, p as u, E as d, d as p, m as g } from "./edgeProcessing-D_U6NrxZ.js";
function a(t, e) {
  return e.push(t.buffer), { buffer: t.buffer, layout: new l(t.layout) };
}
class b {
  async extract(e) {
    const n = o(e), s = f(n), i = [n.data.buffer];
    return { result: h(s, i), transferList: i };
  }
  async extractComponentsEdgeLocations(e) {
    const n = o(e), s = c(n.data, n.skipDeduplicate, n.indices, n.indicesLength), i = u(s, w), r = [];
    return { result: a(i.regular.instancesData, r), transferList: r };
  }
  async extractEdgeLocations(e) {
    const n = o(e), s = c(n.data, n.skipDeduplicate, n.indices, n.indicesLength), i = u(s, m), r = [];
    return { result: a(i.regular.instancesData, r), transferList: r };
  }
}
function o(t) {
  return { data: d.createView(t.dataBuffer), indices: t.indicesType === "Uint32Array" ? new Uint32Array(t.indices) : t.indicesType === "Uint16Array" ? new Uint16Array(t.indices) : t.indices, indicesLength: t.indicesLength, writerSettings: t.writerSettings, skipDeduplicate: t.skipDeduplicate };
}
function h(t, e) {
  return e.push(t.regular.lodInfo.lengths.buffer), e.push(t.silhouette.lodInfo.lengths.buffer), { regular: { instancesData: a(t.regular.instancesData, e), lodInfo: { lengths: t.regular.lodInfo.lengths.buffer } }, silhouette: { instancesData: a(t.silhouette.instancesData, e), lodInfo: { lengths: t.silhouette.lodInfo.lengths.buffer } }, averageEdgeLength: t.averageEdgeLength };
}
class y {
  allocate(e) {
    return p.createBuffer(e);
  }
  trim(e, n) {
    return e.slice(0, n);
  }
  write(e, n, s) {
    e.position0.setVec(n, s.position0), e.position1.setVec(n, s.position1);
  }
}
class L {
  allocate(e) {
    return g.createBuffer(e);
  }
  trim(e, n) {
    return e.slice(0, n);
  }
  write(e, n, s) {
    e.position0.setVec(n, s.position0), e.position1.setVec(n, s.position1), e.componentIndex.set(n, s.componentIndex);
  }
}
const m = new y(), w = new L();
export {
  b as default
};
//# sourceMappingURL=EdgeProcessingWorker-kQ4kL_c-.js.map
