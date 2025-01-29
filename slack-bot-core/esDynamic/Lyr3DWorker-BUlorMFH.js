import { hX as T } from "./main-CmejC-so.js";
var p, N, g, f, m, d, S, b, U, I, L, h, M, R, a;
(function(t) {
  t.U8 = "U8", t.I8 = "I8", t.U16 = "U16", t.I16 = "I16", t.U32 = "U32", t.I32 = "I32", t.F32 = "F32", t.F64 = "F64", t.Utf8String = "Utf8String", t.NotSet = "NotSet";
})(p || (p = {})), function(t) {
  t.Png = "Png", t.Jpeg = "Jpeg", t.Dds = "Dds", t.Raw = "Raw", t.Dxt1 = "Dxt1", t.Dxt5 = "Dxt5", t.Etc2 = "Etc2", t.Astc = "Astc", t.Pvrtc = "Pvrtc", t.NotSet = "NotSet";
}(N || (N = {})), function(t) {
  t.Rgb8 = "Rgb8", t.Rgba8 = "Rgba8", t.R8 = "R8", t.Bgr8 = "Bgr8", t.Bgra8 = "Bgra8", t.Rg8 = "Rg8", t.NotSet = "NotSet";
}(g || (g = {})), function(t) {
  t.Position = "Position", t.Normal = "Normal", t.TexCoord = "TexCoord", t.Color = "Color", t.Tangent = "Tangent", t.FeatureIndex = "FeatureIndex", t.UvRegion = "UvRegion", t.NotSet = "NotSet";
}(f || (f = {})), function(t) {
  t.Opaque = "Opaque", t.Mask = "Mask", t.Blend = "Blend";
}(m || (m = {})), function(t) {
  t.None = "None", t.Mask = "Mask", t.Alpha = "Alpha", t.PreMultAlpha = "PreMultAlpha", t.NotSet = "NotSet";
}(d || (d = {})), function(t) {
  t.Points = "Points", t.Lines = "Lines", t.LineStrip = "LineStrip", t.Triangles = "Triangles", t.TriangleStrip = "TriangleStrip", t.NotSet = "NotSet";
}(S || (S = {})), function(t) {
  t.None = "None", t.WrapXBit = "WrapXBit", t.WrapYBit = "WrapYBit", t.WrapXy = "WrapXy", t.NotSet = "NotSet";
}(b || (b = {})), function(t) {
  t.Linear = "Linear", t.Nearest = "Nearest", t.NotSet = "NotSet";
}(U || (U = {})), function(t) {
  t.Linear = "Linear", t.Nearest = "Nearest", t.NearestMipmapNearest = "NearestMipmapNearest", t.LinearMipmapNearest = "LinearMipmapNearest", t.NearestMipmapLinear = "NearestMipmapLinear", t.LinearMipmapLinear = "LinearMipmapLinear", t.NotSet = "NotSet";
}(I || (I = {})), function(t) {
  t.FeatureId = "FeatureId", t.GlobalUid = "GlobalUid", t.UnspecifiedDateTime = "UnspecifiedDateTime", t.EcmaIso8601DateTime = "EcmaIso8601DateTime", t.EcmaIso8601DateOnly = "EcmaIso8601DateOnly", t.TimeOnly = "TimeOnly", t.TimeStamp = "TimeStamp", t.ColorRgb = "ColorRgb", t.ColorRgba = "ColorRgba", t.Unrecognized = "Unrecognized", t.NotSet = "NotSet";
}(L || (L = {})), function(t) {
  t.Texture = "Texture", t.VertexAtrb = "VertexAtrb", t.Implicit = "Implicit", t.NotSet = "NotSet";
}(h || (h = {})), function(t) {
  t.Front = "Front", t.Back = "Back", t.None = "None", t.NotSet = "NotSet";
}(M || (M = {})), function(t) {
  t.Pbr = "Pbr", t.Unlit = "Unlit";
}(R || (R = {})), function(t) {
  t[t.Succeeded = 0] = "Succeeded", t[t.Failed = 1] = "Failed", t[t.MissingInputs = 2] = "MissingInputs";
}(a || (a = {}));
function y() {
  return new Promise((t) => import("./lyr3DWorker-DRZEgjbU.js").then((r) => r.l).then(({ default: r }) => {
    const n = r({ locateFile: D, onRuntimeInitialized: () => t(n) });
  })).catch((t) => {
    throw t;
  });
}
function D(t) {
  return T(`esri/libs/lyr3d/${t}`);
}
let o, e;
async function x(t) {
  if (await P(), t.inputs.length < 1) return { result: { status: a.Failed, error: "", jobDescJson: "", data: new Uint8Array(0), missingInputUrls: [] }, transferList: [] };
  const r = { ptrs: [], sizes: [] };
  for (const i of t.inputs) {
    const u = e._malloc(i.byteLength);
    new Uint8Array(e.HEAPU8.buffer, u, i.byteLength).set(new Uint8Array(i)), r.ptrs.push(u), r.sizes.push(i.byteLength);
  }
  const n = e.process(t.jobDescJson, r, t.isMissingResourceCase), l = n.status === a.Succeeded && n.data, c = n.status === a.MissingInputs && n.missingInputUrls.length > 0;
  if (l) {
    const i = n.data.slice();
    n.data = i;
  } else c && (n.jobDescJson = n.jobDescJson.slice(0), n.originalInputs = t.inputs);
  for (let i = 0; i < r.ptrs.length; ++i) e._free(r.ptrs[i]);
  const s = [];
  if (l) s.push(n.data.buffer);
  else if (c) for (const i of t.inputs) s.push(i);
  return { result: n, transferList: s };
}
function w() {
  e && (e.uninitialize_lyr3d_worker_wasm(), e = null);
}
function P() {
  return e ? Promise.resolve() : (o || (o = y().then((t) => {
    e = t, e.initialize_lyr3d_worker_wasm(), o = null;
  })), o);
}
export {
  w as destroyWasm,
  P as initialize,
  x as process
};
//# sourceMappingURL=Lyr3DWorker-BUlorMFH.js.map
