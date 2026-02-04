import { hX as K, bh as D } from "./main-DhLeoxL5.js";
import { y as X } from "./DoubleArray-D0qN2Z5T.js";
import { i as Q, a as W } from "./MeshLocalVertexSpace-BtXq8ljJ.js";
import { n as Z, s as ee } from "./vec3-caSLOfAs.js";
import "./sphere-C30JhLo6.js";
import "./I3SUtil-BJ5rQ_BJ.js";
var S, $;
(function(e) {
  e[e.None = 0] = "None", e[e.Int16 = 1] = "Int16", e[e.Int32 = 2] = "Int32";
})(S || (S = {})), function(e) {
  e[e.Replace = 0] = "Replace", e[e.Outside = 1] = "Outside", e[e.Inside = 2] = "Inside", e[e.Finished = 3] = "Finished";
}($ || ($ = {}));
function te() {
  return x || (x = new Promise((e) => import("./i3s-D1WEw1GN.js").then((t) => t.i).then(({ default: t }) => {
    const n = t({ locateFile: ne, onRuntimeInitialized: () => e(n) });
    delete n.then;
  })).catch((e) => {
    throw e;
  })), x;
}
function ne(e) {
  return K(`esri/libs/i3s/${e}`);
}
let x;
var B, p, j, k, H;
(function(e) {
  e[e.Unmodified = 0] = "Unmodified", e[e.Culled = 1] = "Culled", e[e.NotChecked = 2] = "NotChecked";
})(B || (B = {})), function(e) {
  e[e.Unmodified = 0] = "Unmodified", e[e.PotentiallyModified = 1] = "PotentiallyModified", e[e.Culled = 2] = "Culled", e[e.Unknown = 3] = "Unknown", e[e.NotChecked = 4] = "NotChecked";
}(p || (p = {}));
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Uncached = 1] = "Uncached", e[e.Cached = 2] = "Cached";
})(j || (j = {})), function(e) {
  e[e.None = 0] = "None", e[e.MaxScreenThreshold = 1] = "MaxScreenThreshold", e[e.ScreenSpaceRelative = 2] = "ScreenSpaceRelative", e[e.RemovedFeatureDiameter = 3] = "RemovedFeatureDiameter", e[e.DistanceRangeFromDefaultCamera = 4] = "DistanceRangeFromDefaultCamera";
}(k || (k = {})), function(e) {
  e[e.Hole = 0] = "Hole", e[e.Leaf = 1] = "Leaf";
}(H || (H = {}));
async function ue(e) {
  r = await g();
  const t = [e.geometryBuffer];
  return { result: Y(r, e, t), transferList: t };
}
async function de(e) {
  r = await g();
  const t = [e.geometryBuffer], { geometryBuffer: n } = e, a = n.byteLength, i = r._malloc(a), u = new Uint8Array(r.HEAPU8.buffer, i, a);
  u.set(new Uint8Array(n));
  const f = r.dracoDecompressPointCloudData(i, u.byteLength);
  if (r._free(i), f.error.length > 0) throw new Error(`i3s.wasm: ${f.error}`);
  const l = f.featureIds?.length > 0 ? f.featureIds.slice() : null, s = f.positions.slice();
  return l && t.push(l.buffer), t.push(s.buffer), { result: { positions: s, featureIds: l }, transferList: t };
}
async function me(e) {
  await g(), re(e);
  const t = { buffer: e.buffer };
  return { result: t, transferList: [t.buffer] };
}
async function he(e) {
  await g(), oe(e);
}
async function ye(e) {
  r = await g(), r.setLegacySchema(e.context, e.jsonSchema);
}
async function be(e) {
  const { localMatrix: t, origin: n, positions: a, vertexSpace: i, localMode: u } = e, f = D.fromJSON(e.inSpatialReference), l = D.fromJSON(e.outSpatialReference);
  let s;
  if (i.type === "georeferenced" && i.origin == null) {
    const [{ projectBuffer: c }, { initializeProjection: b }] = await Promise.all([import("./main-DhLeoxL5.js").then((d) => d.qK), import("./main-DhLeoxL5.js").then((d) => d.qL)]);
    await b(f, l), s = new Float64Array(a.length), c(a, f, 0, s, l, 0, s.length / 3);
  } else {
    const c = i.type === "georeferenced" ? Q.fromJSON(i) : W.fromJSON(i), { project: b } = await import("./georeference-DjDYpUrf.js").then((d) => d.g);
    s = X(b({ positions: a, transform: t ? { localMatrix: t } : void 0, vertexSpace: c, inSpatialReference: f, outSpatialReference: l, localMode: u }));
  }
  const w = s.length, [U, M, R] = n;
  for (let c = 0; c < w; c += 3) s[c] -= U, s[c + 1] -= M, s[c + 2] -= R;
  return { result: { projected: s, original: a }, transferList: [s.buffer, a.buffer] };
}
async function pe({ normalMatrix: e, normals: t }) {
  const n = new Float32Array(t.length);
  return Z(n, t, e), ee(n, n), { result: { transformed: n, original: t }, transferList: [n.buffer, t.buffer] };
}
function ge(e) {
  J(e);
}
let L, r;
function oe(e) {
  if (!r) return;
  const t = e.modifications, n = r._malloc(8 * t.length), a = new Float64Array(r.HEAPU8.buffer, n, t.length);
  for (let i = 0; i < t.length; ++i) a[i] = t[i];
  r.setModifications(e.context, n, t.length, e.isGeodetic), r._free(n);
}
function Y(e, t, n) {
  const { context: a, localOrigin: i, globalTrafo: u, mbs: f, obbData: l, elevationOffset: s, geometryBuffer: w, geometryDescriptor: U, indexToVertexProjector: M, vertexToRenderProjector: R } = t, c = e._malloc(w.byteLength), b = 33, d = e._malloc(b * Float64Array.BYTES_PER_ELEMENT), F = new Uint8Array(e.HEAPU8.buffer, c, w.byteLength);
  F.set(new Uint8Array(w));
  const m = new Float64Array(e.HEAPU8.buffer, d, b);
  A(m, i);
  let E = m.byteOffset + 3 * m.BYTES_PER_ELEMENT, I = new Float64Array(m.buffer, E);
  A(I, u), E += 16 * m.BYTES_PER_ELEMENT, I = new Float64Array(m.buffer, E), A(I, f), E += 4 * m.BYTES_PER_ELEMENT, l && (I = new Float64Array(m.buffer, E), A(I, l));
  const O = U, z = { isDraco: !1, isLegacy: !1, color: t.layouts.some((h) => h.some((y) => y.name === "color")), normal: t.needNormals && t.layouts.some((h) => h.some((y) => y.name === "normalCompressed")), uv0: t.layouts.some((h) => h.some((y) => y.name === "uv0")), uvRegion: t.layouts.some((h) => h.some((y) => y.name === "uvRegion")), featureIndex: O.featureIndex }, o = e.process(a, !!t.obbData, c, F.byteLength, O, z, d, s, M, R, t.normalReferenceFrame);
  if (e._free(d), e._free(c), o.error.length > 0) throw new Error(`i3s.wasm: ${o.error}`);
  if (o.discarded) return null;
  const P = o.componentOffsets.length > 0 ? o.componentOffsets.slice() : null, _ = o.featureIds.length > 0 ? o.featureIds.slice() : null, V = o.anchorIds.length > 0 ? Array.from(o.anchorIds) : null, q = o.anchors.length > 0 ? Array.from(o.anchors) : null, C = o.interleavedVertedData.slice().buffer, N = o.indicesType === S.Int16 ? new Uint16Array(o.indices.buffer, o.indices.byteOffset, o.indices.byteLength / 2).slice() : new Uint32Array(o.indices.buffer, o.indices.byteOffset, o.indices.byteLength / 4).slice(), v = o.positions.slice(), T = o.positionIndicesType === S.Int16 ? new Uint16Array(o.positionIndices.buffer, o.positionIndices.byteOffset, o.positionIndices.byteLength / 2).slice() : new Uint32Array(o.positionIndices.buffer, o.positionIndices.byteOffset, o.positionIndices.byteLength / 4).slice(), G = { layout: t.layouts[0], interleavedVertexData: C, indices: N, hasColors: o.hasColors, hasModifications: o.hasModifications, positionData: { data: v, indices: T } };
  return _ && n.push(_.buffer), P && n.push(P.buffer), n.push(C), n.push(N.buffer), n.push(v.buffer), n.push(T.buffer), { componentOffsets: P, featureIds: _, anchorIds: V, anchors: q, transformedGeometry: G, obb: o.obb };
}
function we(e) {
  return e === 0 ? p.Unmodified : e === 1 ? p.PotentiallyModified : e === 2 ? p.Culled : p.Unknown;
}
function re(e) {
  if (!r) return;
  const { context: t, buffer: n } = e, a = r._malloc(n.byteLength), i = n.byteLength / Float64Array.BYTES_PER_ELEMENT, u = new Float64Array(r.HEAPU8.buffer, a, i), f = new Float64Array(n);
  u.set(f), r.filterOBBs(t, a, i), f.set(u), r._free(a);
}
function J(e) {
  r && r.destroy(e) === 0 && (r = null);
}
function A(e, t) {
  for (let n = 0; n < t.length; ++n) e[n] = t[n];
}
async function Ee() {
  r || await g();
}
function g() {
  return r ? Promise.resolve(r) : (L || (L = te().then((e) => (r = e, L = null, r))), L);
}
const Ie = { transform: (e, t) => r && Y(r, e, t), destroy: J };
export {
  ge as destroyContext,
  de as dracoDecompressPointCloudData,
  me as filterObbsForModifications,
  re as filterObbsForModificationsSync,
  Ee as initialize,
  we as interpretObbModificationResults,
  ue as process,
  be as project,
  ye as setLegacySchema,
  he as setModifications,
  oe as setModificationsSync,
  Ie as test,
  pe as transformNormals
};
//# sourceMappingURL=SceneLayerWorker-DcgU8bfx.js.map
