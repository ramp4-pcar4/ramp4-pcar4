import{x as f,bi as u,K as p,bz as n,bC as S}from"./main-C3PVbFgd.js";import{s as d}from"./projection-q5gROb6j.js";import{g as i,f as y,W as x,E as h,U as O,D as N,R as J,u as b,s as B}from"./dataUtils-BhA6Mdkd.js";import{m as P,j as g,_ as k,h as w}from"./RasterSymbolizer-AXlE6Yez.js";import{T as v}from"./rasterFunctionHelper-C0X08R8K.js";import{w as z,j as D,a as T}from"./rasterProjectionHelper-b7S7XeHI.js";import{a as F,c as I,y as j}from"./PolynomialTransform-B655RNjp.js";var m;let l=m=class extends F{constructor(){super(...arguments),this.type="identity"}clone(){return new m}};f([u({IdentityXform:"identity"})],l.prototype,"type",void 0),l=m=f([p("esri.layers.support.rasterTransforms.IdentityTransform")],l);const E=l,G={GCSShiftXform:I,IdentityXform:E,PolynomialXform:j};function R(a){if(!a?.type)return null;const t=G[a?.type];if(t){const r=new t;return r.read(a),r}return null}class X{convertVectorFieldData(t){const r=i.fromJSON(t.pixelBlock),s=y(r,t.type);return Promise.resolve(s!=null?s.toJSON():null)}computeStatisticsHistograms(t){const r=i.fromJSON(t.pixelBlock),s=P(r);return Promise.resolve(s)}async decode(t){const r=await g(t.data,t.options);return r&&r.toJSON()}symbolize(t){t.pixelBlock=i.fromJSON(t.pixelBlock),t.extent=t.extent?n.fromJSON(t.extent):null;const r=this.symbolizer.symbolize(t);return Promise.resolve(r!=null?r.toJSON():null)}async updateSymbolizer(t){this.symbolizer=k.fromJSON(t.symbolizerJSON),t.histograms&&this.symbolizer?.rendererJSON.type==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=v(t.rasterFunctionJSON)}async process(t){const r=this.rasterFunction.process({extent:n.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(s=>s!=null?i.fromJSON(s):null),primaryPixelSizes:t.primaryPixelSizes?.map(s=>s!=null?S.fromJSON(s):null),primaryRasterIds:t.primaryRasterIds});return r!=null?r.toJSON():null}stretch(t){const r=this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(r?.toJSON())}estimateStatisticsHistograms(t){const r=w(i.fromJSON(t.srcPixelBlock));return Promise.resolve(r)}split(t){const r=x(i.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel??0,t.useBilinear===!1);return r&&r.forEach((s,e)=>{r.set(e,s?.toJSON())}),Promise.resolve(r)}clipTile(t){const r=i.fromJSON(t.pixelBlock),s=h({...t,pixelBlock:r});return Promise.resolve(s?.toJSON())}async mosaicAndTransform(t){const r=t.srcPixelBlocks.map(c=>c?new i(c):null),s=O(r,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let e,o=s;return t.coefs&&(o=N(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(e=J(t.destDimension,t.gcsGrid),o=b(o,t.isUV?"vector-uv":"vector-magdir",e)),{pixelBlock:o?.toJSON(),localNorthDirections:e}}async createFlowMesh(t,r){const s={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:e,indexData:o}=await B(t.meshType,t.simulationSettings,s,r.signal);return{result:{vertexBuffer:e.buffer,indexBuffer:o.buffer},transferList:[e.buffer,o.buffer]}}async getProjectionOffsetGrid(t){const r=n.fromJSON(t.projectedExtent),s=n.fromJSON(t.srcBufferExtent);let e=null;t.datumTransformationSteps&&(e=new d({steps:t.datumTransformationSteps})),(t.includeGCSGrid||z(r.spatialReference,s.spatialReference,e))&&await D();const o=t.rasterTransform?R(t.rasterTransform):null;return T({...t,projectedExtent:r,srcBufferExtent:s,datumTransformation:e,rasterTransform:o})}}export{X as default};
