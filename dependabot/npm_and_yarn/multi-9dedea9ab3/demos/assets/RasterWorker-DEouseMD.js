import { bd as e$1, e0 as o$1, bf as a$1, i7 as g$1, i8 as f$1, i9 as m$1, ia as j, a_ as w$1, ib as L, _ as _$1, ic as h, id as W, ie as E, ig as U, ih as D, ii as R, ij as u, ik as s, il as s$1 } from './main-YSH8Qvd0.js';
import { a as a$2, c, y, S } from './PolynomialTransform-DTP1bLK-.js';
import { M, T, e as ee } from './rasterProjectionHelper-BNwKbpyf.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var e;let a=e=class extends a$2{constructor(){super(...arguments),this.type="identity";}clone(){return new e}};e$1([o$1({IdentityXform:"identity"})],a.prototype,"type",void 0),a=e=e$1([a$1("esri.layers.support.rasterTransforms.IdentityTransform")],a);const p=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const o={GCSShiftXform:c,IdentityXform:p,PolynomialXform:y};function i(r){const t=r?.type;if(!t)return null;const n=o[r?.type];if(n){const t=new n;return t.read(r),t}return null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class J{convertVectorFieldData(r){const t=g$1.fromJSON(r.pixelBlock),s=f$1(t,r.type);return Promise.resolve(null!=s?s.toJSON():null)}computeStatisticsHistograms(r){const t=g$1.fromJSON(r.pixelBlock),s=m$1(t);return Promise.resolve(s)}async decode(r){const e=await j(r.data,r.options);return e&&e.toJSON()}symbolize(r){r.pixelBlock=g$1.fromJSON(r.pixelBlock),r.extent=r.extent?w$1.fromJSON(r.extent):null;const t=this.symbolizer.symbolize(r);return Promise.resolve(null!=t?t.toJSON():null)}async updateSymbolizer(r){this.symbolizer=L.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=r.histograms);}async updateRasterFunction(r){this.rasterFunction=S(r.rasterFunctionJSON);}async process(r){const t=this.rasterFunction.process({extent:w$1.fromJSON(r.extent),primaryPixelBlocks:r.primaryPixelBlocks.map((r=>null!=r?g$1.fromJSON(r):null)),primaryPixelSizes:r.primaryPixelSizes?.map((r=>null!=r?_$1.fromJSON(r):null)),primaryRasterIds:r.primaryRasterIds});return null!=t?t.toJSON():null}stretch(r){const t=this.symbolizer.simpleStretch(g$1.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(t?.toJSON())}estimateStatisticsHistograms(r){const t=h(g$1.fromJSON(r.srcPixelBlock));return Promise.resolve(t)}split(r){const t=W(g$1.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel??0,!1===r.useBilinear);return t&&t.forEach(((r,e)=>{t.set(e,r?.toJSON());})),Promise.resolve(t)}clipTile(r){const t=g$1.fromJSON(r.pixelBlock),s=E({...r,pixelBlock:t});return Promise.resolve(s?.toJSON())}async mosaicAndTransform(r){const t=r.srcPixelBlocks.map((r=>r?new g$1(r):null)),s=U(t,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo,clipOffset:r.clipOffset,clipSize:r.clipSize});let o,l=s;return r.coefs&&(l=D(s,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation)),r.projectDirections&&r.gcsGrid&&(o=R(r.destDimension,r.gcsGrid),l=u(l,r.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:l?.toJSON(),localNorthDirections:o}}async createFlowMesh(r,e){const t={data:new Float32Array(r.flowData.buffer),mask:new Uint8Array(r.flowData.maskBuffer),width:r.flowData.width,height:r.flowData.height},{vertexData:s$1,indexData:o}=await s(r.meshType,r.simulationSettings,t,e.signal);return {result:{vertexBuffer:s$1.buffer,indexBuffer:o.buffer},transferList:[s$1.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=w$1.fromJSON(e.projectedExtent),s=w$1.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new s$1({steps:e.datumTransformationSteps})),(e.includeGCSGrid||M(t.spatialReference,s.spatialReference,o))&&await T();const i$1=e.rasterTransform?i(e.rasterTransform):null;return ee({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:i$1})}}

export { J as default };
