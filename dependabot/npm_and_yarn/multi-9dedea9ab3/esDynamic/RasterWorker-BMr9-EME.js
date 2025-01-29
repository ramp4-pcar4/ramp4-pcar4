import { O as f, dY as u, Q as p, i3 as i, i4 as S, i5 as d, i6 as y, b8 as n, i7 as x, a3 as h, i8 as O, i9 as J, ia as N, ib as g, ic as B, id as P, ie as b, ig as k, ih as w } from "./main-DMoCLB29.js";
import { a as v, c as z, y as D, S as T } from "./PolynomialTransform-DeyfXSDg.js";
import { M as $, T as F, e as I } from "./rasterProjectionHelper-NBsHs4kW.js";
var c;
let l = c = class extends v {
  constructor() {
    super(...arguments), this.type = "identity";
  }
  clone() {
    return new c();
  }
};
f([u({ IdentityXform: "identity" })], l.prototype, "type", void 0), l = c = f([p("esri.layers.support.rasterTransforms.IdentityTransform")], l);
const E = l, G = { GCSShiftXform: z, IdentityXform: E, PolynomialXform: D };
function R(a) {
  if (!a?.type) return null;
  const e = G[a?.type];
  if (e) {
    const s = new e();
    return s.read(a), s;
  }
  return null;
}
class L {
  convertVectorFieldData(t) {
    const e = i.fromJSON(t.pixelBlock), s = S(e, t.type);
    return Promise.resolve(s != null ? s.toJSON() : null);
  }
  computeStatisticsHistograms(t) {
    const e = i.fromJSON(t.pixelBlock), s = d(e);
    return Promise.resolve(s);
  }
  async decode(t) {
    const e = await y(t.data, t.options);
    return e && e.toJSON();
  }
  symbolize(t) {
    t.pixelBlock = i.fromJSON(t.pixelBlock), t.extent = t.extent ? n.fromJSON(t.extent) : null;
    const e = this.symbolizer.symbolize(t);
    return Promise.resolve(e != null ? e.toJSON() : null);
  }
  async updateSymbolizer(t) {
    this.symbolizer = x.fromJSON(t.symbolizerJSON), t.histograms && this.symbolizer?.rendererJSON.type === "rasterStretch" && (this.symbolizer.rendererJSON.histograms = t.histograms);
  }
  async updateRasterFunction(t) {
    this.rasterFunction = T(t.rasterFunctionJSON);
  }
  async process(t) {
    const e = this.rasterFunction.process({ extent: n.fromJSON(t.extent), primaryPixelBlocks: t.primaryPixelBlocks.map((s) => s != null ? i.fromJSON(s) : null), primaryPixelSizes: t.primaryPixelSizes?.map((s) => s != null ? h.fromJSON(s) : null), primaryRasterIds: t.primaryRasterIds });
    return e != null ? e.toJSON() : null;
  }
  stretch(t) {
    const e = this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock), t.stretchParams);
    return Promise.resolve(e?.toJSON());
  }
  estimateStatisticsHistograms(t) {
    const e = O(i.fromJSON(t.srcPixelBlock));
    return Promise.resolve(e);
  }
  split(t) {
    const e = J(i.fromJSON(t.srcPixelBlock), t.tileSize, t.maximumPyramidLevel ?? 0, t.useBilinear === !1);
    return e && e.forEach((s, o) => {
      e.set(o, s?.toJSON());
    }), Promise.resolve(e);
  }
  clipTile(t) {
    const e = i.fromJSON(t.pixelBlock), s = N({ ...t, pixelBlock: e });
    return Promise.resolve(s?.toJSON());
  }
  async mosaicAndTransform(t) {
    const e = t.srcPixelBlocks.map((m) => m ? new i(m) : null), s = g(e, t.srcMosaicSize, { blockWidths: t.blockWidths, alignmentInfo: t.alignmentInfo, clipOffset: t.clipOffset, clipSize: t.clipSize });
    let o, r = s;
    return t.coefs && (r = B(s, t.destDimension, t.coefs, t.sampleSpacing, t.interpolation)), t.projectDirections && t.gcsGrid && (o = P(t.destDimension, t.gcsGrid), r = b(r, t.isUV ? "vector-uv" : "vector-magdir", o)), { pixelBlock: r?.toJSON(), localNorthDirections: o };
  }
  async createFlowMesh(t, e) {
    const s = { data: new Float32Array(t.flowData.buffer), mask: new Uint8Array(t.flowData.maskBuffer), width: t.flowData.width, height: t.flowData.height }, { vertexData: o, indexData: r } = await k(t.meshType, t.simulationSettings, s, e.signal);
    return { result: { vertexBuffer: o.buffer, indexBuffer: r.buffer }, transferList: [o.buffer, r.buffer] };
  }
  async getProjectionOffsetGrid(t) {
    const e = n.fromJSON(t.projectedExtent), s = n.fromJSON(t.srcBufferExtent);
    let o = null;
    t.datumTransformationSteps && (o = new w({ steps: t.datumTransformationSteps })), (t.includeGCSGrid || $(e.spatialReference, s.spatialReference, o)) && await F();
    const r = t.rasterTransform ? R(t.rasterTransform) : null;
    return I({ ...t, projectedExtent: e, srcBufferExtent: s, datumTransformation: o, rasterTransform: r });
  }
}
export {
  L as default
};
//# sourceMappingURL=RasterWorker-BMr9-EME.js.map
