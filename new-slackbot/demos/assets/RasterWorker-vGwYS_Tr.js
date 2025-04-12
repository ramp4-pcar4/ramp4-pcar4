import { dp as u$1, dq as f$1, dr as m$1, ds as S, aH as M, dt as L, F as x$1, du as h, dv as W, dw as E, dx as U, dy as D, dz as R$1, dA as u, dB as s, dC as s$1 } from './main-CjrSZKDN.js';
import { R, i } from './utils-BtEyONzD.js';
import { M as M$1, T, e as ee } from './rasterProjectionHelper-CoD3d78F.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class J{convertVectorFieldData(r){const t=u$1.fromJSON(r.pixelBlock),s=f$1(t,r.type);return Promise.resolve(null!=s?s.toJSON():null)}computeStatisticsHistograms(r){const t=u$1.fromJSON(r.pixelBlock),s=m$1(t);return Promise.resolve(s)}async decode(r){const e=await S(r.data,r.options);return e&&e.toJSON()}symbolize(r){r.pixelBlock=u$1.fromJSON(r.pixelBlock),r.extent=r.extent?M.fromJSON(r.extent):null;const t=this.symbolizer.symbolize(r);return Promise.resolve(null!=t?t.toJSON():null)}async updateSymbolizer(r){this.symbolizer=L.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=r.histograms);}async updateRasterFunction(r){this.rasterFunction=R(r.rasterFunctionJSON);}async process(r){const t=this.rasterFunction.process({extent:M.fromJSON(r.extent),primaryPixelBlocks:r.primaryPixelBlocks.map((r=>null!=r?u$1.fromJSON(r):null)),primaryPixelSizes:r.primaryPixelSizes?.map((r=>null!=r?x$1.fromJSON(r):null)),primaryRasterIds:r.primaryRasterIds});return null!=t?t.toJSON():null}stretch(r){const t=this.symbolizer.simpleStretch(u$1.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(t?.toJSON())}estimateStatisticsHistograms(r){const t=h(u$1.fromJSON(r.srcPixelBlock));return Promise.resolve(t)}split(r){const t=W(u$1.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel??0,!1===r.useBilinear);return t&&t.forEach(((r,e)=>{t.set(e,r?.toJSON());})),Promise.resolve(t)}clipTile(r){const t=u$1.fromJSON(r.pixelBlock),s=E({...r,pixelBlock:t});return Promise.resolve(s?.toJSON())}async mosaicAndTransform(r){const t=r.srcPixelBlocks.map((r=>r?new u$1(r):null)),s=U(t,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo,clipOffset:r.clipOffset,clipSize:r.clipSize});let o,l=s;return r.coefs&&(l=D(s,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation)),r.projectDirections&&r.gcsGrid&&(o=R$1(r.destDimension,r.gcsGrid),l=u(l,r.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:l?.toJSON(),localNorthDirections:o}}async createFlowMesh(r,e){const t={data:new Float32Array(r.flowData.buffer),mask:new Uint8Array(r.flowData.maskBuffer),width:r.flowData.width,height:r.flowData.height},{vertexData:s$1,indexData:o}=await s(r.meshType,r.simulationSettings,t,e.signal);return {result:{vertexBuffer:s$1.buffer,indexBuffer:o.buffer},transferList:[s$1.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=M.fromJSON(e.projectedExtent),s=M.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new s$1({steps:e.datumTransformationSteps})),(e.includeGCSGrid||M$1(t.spatialReference,s.spatialReference,o))&&await T();const i$1=e.rasterTransform?i(e.rasterTransform):null;return ee({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:i$1})}}

export { J as default };
