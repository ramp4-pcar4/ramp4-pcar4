import{f as u}from"./utils-DSGzLx6N.js";import{I as s,U as f,a1 as y,bp as a,aY as c,bj as S}from"./main-B5_XOOwi.js";import{R as l}from"./normalizeUtils-CPO1YcIx.js";import{t as R}from"./query-DVCT1-_3.js";import g from"./BinsQuery-BylCgmlC.js";import{d as J}from"./FeatureSet-CVkcQsOG.js";import"./preload-helper-ExcqyqRp.js";import"./normalizeUtilsCommon-HtTsMmEj.js";import"./utils-WXIwzruR.js";import"./pbfQueryUtils-5AsSoYmo.js";import"./pbf-C1YeVrwY.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-Cg1rQb43.js";import"./projection-DwpqUf7U.js";import"./projectBuffer-D86redIv.js";import"./queryUtils-BtDLuTtI.js";import"./json-Wa8cmqdu.js";import"./Query-De_HsvnG.js";import"./Field-q5OmBPu1.js";import"./fieldType-DlCBsK54.js";import"./TimeExtent-ClRYiBYy.js";function N(e){const r=e.geometry,i=e.toJSON(),t=i;let n,o,m;return r!=null&&(o=r.spatialReference,m=a(o),t.geometryType=c(r),t.geometry=JSON.stringify(r),t.inSR=m),i.outSR?(t.outSR=a(i.outSR),n=e.outSpatialReference):r&&(t.outSR=t.inSR,n=o),t.bin&&=JSON.stringify(t.bin),t.quantizationParameters&&=JSON.stringify(t.quantizationParameters),t.outStatistics&&=JSON.stringify(t.outStatistics),t.outTimeReference&&=JSON.stringify(t.outTimeReference),e.defaultSpatialReference&&S(o,n)&&(t.defaultSR=t.inSR,delete t.inSR,delete t.outSR),t}async function O(e,r,i){return d(e,r,i)}async function d(e,r,i={}){const t=typeof e=="string"?s(e):e,n=r.geometry?[r.geometry]:[],o=await l(n,null,{signal:i.signal}),m=o?.[0];m!=null&&((r=r.clone()).geometry=m);const p=R({...t.query,f:"json",...N(r)});return f(y(t.path,"queryBins"),{...i,query:{...p,...i.query}})}async function F(e,r,i){const{data:t}=await O(u(e),g.from(r),i);return J.fromJSON(t)}export{F as executeBinsQuery};
