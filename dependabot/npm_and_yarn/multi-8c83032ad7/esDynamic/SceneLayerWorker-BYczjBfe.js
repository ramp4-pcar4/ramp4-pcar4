import { fq as q, bx as v, cy as K } from "./main-C4pF0E7B.js";
import { y as Q } from "./DoubleArray-BQAmseu8.js";
import { i as W, a as X } from "./MeshLocalVertexSpace-Dx6k4fVM.js";
import { f as Z, l as ee } from "./vec3-DEuDuvXy.js";
import "./sphere-BrkIxIX8.js";
import "./I3SUtil-C1jV57Si.js";
var U, D;
(function(e) {
  e[e.None = 0] = "None", e[e.Int16 = 1] = "Int16", e[e.Int32 = 2] = "Int32";
})(U || (U = {})), function(e) {
  e[e.Replace = 0] = "Replace", e[e.Outside = 1] = "Outside", e[e.Inside = 2] = "Inside", e[e.Finished = 3] = "Finished";
}(D || (D = {}));
function te() {
  return _ || (_ = new Promise((e) => import("./i3s-D1WNBipI.js").then((t) => t.i).then(({ default: t }) => {
    const n = t({ locateFile: ne, onRuntimeInitialized: () => e(n) });
    delete n.then;
  })).catch((e) => {
    throw e;
  })), _;
}
function ne(e) {
  return q(`esri/libs/i3s/${e}`);
}
let _;
var j, p, $, B, k;
(function(e) {
  e[e.Unmodified = 0] = "Unmodified", e[e.Culled = 1] = "Culled", e[e.NotChecked = 2] = "NotChecked";
})(j || (j = {})), function(e) {
  e[e.Unmodified = 0] = "Unmodified", e[e.PotentiallyModified = 1] = "PotentiallyModified", e[e.Culled = 2] = "Culled", e[e.Unknown = 3] = "Unknown", e[e.NotChecked = 4] = "NotChecked";
}(p || (p = {}));
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Uncached = 1] = "Uncached", e[e.Cached = 2] = "Cached";
})($ || ($ = {})), function(e) {
  e[e.None = 0] = "None", e[e.MaxScreenThreshold = 1] = "MaxScreenThreshold", e[e.ScreenSpaceRelative = 2] = "ScreenSpaceRelative", e[e.RemovedFeatureDiameter = 3] = "RemovedFeatureDiameter", e[e.DistanceRangeFromDefaultCamera = 4] = "DistanceRangeFromDefaultCamera";
}(B || (B = {})), function(e) {
  e[e.Hole = 0] = "Hole", e[e.Leaf = 1] = "Leaf";
}(k || (k = {}));
async function ue(e) {
  r = await b();
  const t = [e.geometryBuffer];
  return { result: H(r, e, t), transferList: t };
}
async function de(e) {
  r = await b();
  const t = [e.geometryBuffer], { geometryBuffer: n } = e, f = n.byteLength, i = r._malloc(f), u = new Uint8Array(r.HEAPU8.buffer, i, f);
  u.set(new Uint8Array(n));
  const c = r.dracoDecompressPointCloudData(i, u.byteLength);
  if (r._free(i), c.error.length > 0) throw new Error(`i3s.wasm: ${c.error}`);
  const l = c.featureIds?.length > 0 ? c.featureIds.slice() : null, s = c.positions.slice();
  return l && t.push(l.buffer), t.push(s.buffer), { result: { positions: s, featureIds: l }, transferList: t };
}
async function me(e) {
  await b(), re(e);
  const t = { buffer: e.buffer };
  return { result: t, transferList: [t.buffer] };
}
async function he(e) {
  await b(), oe(e);
}
async function ye(e) {
  r = await b(), r.setLegacySchema(e.context, e.jsonSchema);
}
async function pe(e) {
  const { localMatrix: t, origin: n, positions: f, vertexSpace: i, localMode: u } = e, c = v.fromJSON(e.inSpatialReference), l = v.fromJSON(e.outSpatialReference);
  let s;
  const [{ projectBuffer: I }, { initializeProjection: M }] = await Promise.all([import("./main-C4pF0E7B.js").then((a) => a.r9), import("./main-C4pF0E7B.js").then((a) => a.ra)]);
  await M(c, l);
  const g = [0, 0, 0];
  if (!I(n, c, 0, g, l, 0, 1)) throw new Error("Failed to project");
  if (i.type === "georeferenced" && i.origin == null) {
    if (s = new Float64Array(f.length), !I(f, c, 0, s, l, 0, s.length / 3)) throw new Error("Failed to project");
  } else {
    const a = i.type === "georeferenced" ? W.fromJSON(i) : X.fromJSON(i), { project: m } = await import("./projection-DZLC4pmp.js"), d = m({ positions: f, transform: t ? { localMatrix: t } : void 0, vertexSpace: a, inSpatialReference: c, outSpatialReference: l, localMode: u });
    if (!d) throw new Error("Failed to project");
    s = Q(d);
  }
  const w = s.length, [A, E, L] = g;
  for (let a = 0; a < w; a += 3) s[a] -= A, s[a + 1] -= E, s[a + 2] -= L;
  return { result: { projected: s, original: f, projectedOrigin: g }, transferList: [s.buffer, f.buffer] };
}
async function be({ normalMatrix: e, normals: t }) {
  const n = new Float32Array(t.length);
  return Z(n, t, e), K(e) && ee(n, n), { result: { transformed: n, original: t }, transferList: [n.buffer, t.buffer] };
}
function ge(e) {
  Y(e);
}
let S, r;
function oe(e) {
  if (!r) return;
  const t = e.modifications, n = r._malloc(8 * t.length), f = new Float64Array(r.HEAPU8.buffer, n, t.length);
  for (let i = 0; i < t.length; ++i) f[i] = t[i];
  r.setModifications(e.context, n, t.length, e.isGeodetic), r._free(n);
}
function H(e, t, n) {
  const { context: f, globalTrafo: i, mbs: u, obbData: c, elevationOffset: l, geometryBuffer: s, geometryDescriptor: I, indexToVertexProjector: M, vertexToRenderProjector: g } = t, w = e._malloc(s.byteLength), A = 33, E = e._malloc(A * Float64Array.BYTES_PER_ELEMENT), L = new Uint8Array(e.HEAPU8.buffer, w, s.byteLength);
  L.set(new Uint8Array(s));
  const a = new Float64Array(e.HEAPU8.buffer, E, A);
  N(a, [NaN, NaN, NaN]);
  let m = a.byteOffset + 3 * a.BYTES_PER_ELEMENT, d = new Float64Array(a.buffer, m);
  N(d, i), m += 16 * a.BYTES_PER_ELEMENT, d = new Float64Array(a.buffer, m), N(d, u), m += 4 * a.BYTES_PER_ELEMENT, c && (d = new Float64Array(a.buffer, m), N(d, c));
  const x = I, J = { isDraco: !1, isLegacy: !1, color: t.layouts.some((h) => h.some((y) => y.name === "color")), normal: t.needNormals && t.layouts.some((h) => h.some((y) => y.name === "normalCompressed")), uv0: t.layouts.some((h) => h.some((y) => y.name === "uv0")), uvRegion: t.layouts.some((h) => h.some((y) => y.name === "uvRegion")), featureIndex: x.featureIndex }, o = e.process(f, !!t.obbData, w, L.byteLength, x, J, E, l, M, g, t.normalReferenceFrame);
  if (e._free(E), e._free(w), o.error.length > 0) throw new Error(`i3s.wasm: ${o.error}`);
  if (o.discarded) return null;
  const F = o.componentOffsets.length > 0 ? o.componentOffsets.slice() : null, R = o.featureIds.length > 0 ? o.featureIds.slice() : null, z = o.anchorIds.length > 0 ? Array.from(o.anchorIds) : null, V = o.anchors.length > 0 ? Array.from(o.anchors) : null, P = o.interleavedVertedData.slice().buffer, O = o.indicesType === U.Int16 ? new Uint16Array(o.indices.buffer, o.indices.byteOffset, o.indices.byteLength / 2).slice() : new Uint32Array(o.indices.buffer, o.indices.byteOffset, o.indices.byteLength / 4).slice(), C = o.positions.slice(), T = o.positionIndicesType === U.Int16 ? new Uint16Array(o.positionIndices.buffer, o.positionIndices.byteOffset, o.positionIndices.byteLength / 2).slice() : new Uint32Array(o.positionIndices.buffer, o.positionIndices.byteOffset, o.positionIndices.byteLength / 4).slice(), G = { layout: t.layouts[0], interleavedVertexData: P, indices: O, hasColors: o.hasColors, hasModifications: o.hasModifications, positionData: { data: C, indices: T } };
  return R && n.push(R.buffer), F && n.push(F.buffer), n.push(P), n.push(O.buffer), n.push(C.buffer), n.push(T.buffer), { componentOffsets: F, featureIds: R, anchorIds: z, anchors: V, transformedGeometry: G, obb: o.obb, globalTrafo: i };
}
function we(e) {
  return e === 0 ? p.Unmodified : e === 1 ? p.PotentiallyModified : e === 2 ? p.Culled : p.Unknown;
}
function re(e) {
  if (!r) return;
  const { context: t, buffer: n } = e, f = r._malloc(n.byteLength), i = n.byteLength / Float64Array.BYTES_PER_ELEMENT, u = new Float64Array(r.HEAPU8.buffer, f, i), c = new Float64Array(n);
  u.set(c), r.filterOBBs(t, f, i), c.set(u), r._free(f);
}
function Y(e) {
  r && r.destroy(e) === 0 && (r = null);
}
function N(e, t) {
  for (let n = 0; n < t.length; ++n) e[n] = t[n];
}
async function Ee() {
  r || await b();
}
function b() {
  return r ? Promise.resolve(r) : (S || (S = te().then((e) => (r = e, S = null, r))), S);
}
const Ie = { transform: (e, t) => r && H(r, e, t), destroy: Y };
export {
  ge as destroyContext,
  de as dracoDecompressPointCloudData,
  me as filterObbsForModifications,
  re as filterObbsForModificationsSync,
  Ee as initialize,
  we as interpretObbModificationResults,
  ue as process,
  pe as project,
  ye as setLegacySchema,
  he as setModifications,
  oe as setModificationsSync,
  Ie as test,
  be as transformNormals
};
//# sourceMappingURL=SceneLayerWorker-BYczjBfe.js.map
