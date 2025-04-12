const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GroupLayer-jDMl7UsU.js","./preload-helper-ExcqyqRp.js","./main-Cv8ITM2j.js","./main-gKmidBZg.css","./CollectionFlattener-C24Vb2Tx.js","./loadAll-JjfmhABF.js","./MultiOriginJSONSupport-CtsATS64.js","./Layer-CVn99KK7.js","./TimeExtent-CmJt7e8T.js","./BlendLayer-BlUOZnIK.js","./layerContainerType-C5CzMsLd.js","./jsonUtils-CX527-Zb.js","./parser-OujP_0wM.js","./mat4f32-DcsiF_Rp.js","./mat4-B2F2AQse.js","./common-DQOJ18NT.js","./OperationalLayer-D1cLfmBd.js","./commonProperties-BKS4jiR6.js","./ElevationInfo-CFzKWoUt.js","./lengthUtils-BjSb-BVP.js","./PortalLayer-DYpNTE1E.js","./PortalItem-auRHFq7R.js","./portalItemUtils-B5PDao5z.js","./projection-DALJEM5z.js","./projectBuffer-C3I4aBT7.js","./ScaleRangeLayer-DD2_yhdp.js","./layersCreator-BEJGII2T.js","./loadUtils-BHT97KXL.js","./fetchService-CIrS6nwR.js","./associatedFeatureServiceUtils-Drziic7w.js","./lazyLayerLoader-hPET02mE.js","./portalLayers-CuvrWcFD.js","./styleUtils-DvNugFRD.js","./TablesMixin-AYgJ04X4.js","./interfaces-CL2NbQte.js","./saveUtils-DZcWbzA_.js","./writeUtils-CmJHem-D.js"])))=>i.map(i=>d[i]);
import{_ as I}from"./preload-helper-ExcqyqRp.js";import{Q as P,s as p,bP as g,I as L,bQ as O,bO as v}from"./main-Cv8ITM2j.js";import{s as T}from"./associatedFeatureServiceUtils-Drziic7w.js";import{t as m,i as d,a as $}from"./fetchService-CIrS6nwR.js";import{a as U}from"./lazyLayerLoader-hPET02mE.js";import"./PortalItem-auRHFq7R.js";const C={FeatureLayer:!0,SceneLayer:!0};async function K(a){const{properties:t,url:e}=a,s={...t,url:e},l=await F(e,t?.customParameters),{Constructor:r,layerId:o,sourceJSON:u,parsedUrl:c,layers:i,tables:n}=l;if(i.length+n.length===0)return o!=null&&(s.layerId=o),u!=null&&(s.sourceJSON=u),new r(s);const y=new(await I(async()=>{const{default:f}=await import("./GroupLayer-jDMl7UsU.js");return{default:f}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]),import.meta.url)).default({title:c.title});return await _(y,l,s),y}function S(a,t){return a?a.find(({id:e})=>e===t):null}function b(a,t,e,s,l){const r={...l,layerId:t};return a!=null&&(r.url=a),e!=null&&(r.sourceJSON=e),"sublayerTitleMode"in s.prototype&&(r.sublayerTitleMode="service-name"),new s(r)}async function _(a,t,e){const s=t.sublayerConstructorProvider;for(const{id:l,serverUrl:r}of t.layers){const o=S(t.sublayerInfos,l),u=b(r,l,o,(o&&s?.(o))??t.Constructor,e);a.add(u)}if(t.tables.length){const l=await w("FeatureLayer");t.tables.forEach(({id:r,serverUrl:o})=>{const u=b(o,r,S(t.tableInfos,r),l,e);a.tables.add(u)})}}async function F(a,t){let e=P(a);if(e==null&&(e=await N(a,t)),e==null)throw new p("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a});const{serverType:s,sublayer:l}=e;let r;const o={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},u=s==="FeatureServer",c=s==="SceneServer",i={parsedUrl:e,Constructor:null,layerId:u||c?l??void 0:void 0,layers:[],tables:[]};switch(s){case"MapServer":if(l!=null){const{type:n}=await m(a,{customParameters:t});switch(r="FeatureLayer",n){case"Catalog Layer":r="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new p("arcgis-layers:unsupported",`fromUrl() not supported for "${n}" layers`)}}else r=await k(a,t)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await m(a,{customParameters:t}),{tileInfo:y,cacheType:f}=n;r=y?y?.format?.toUpperCase()!=="LERC"||f&&f.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await m(e.url.path,{customParameters:t});if(r="SceneLayer",n){const y=n?.layers;if(n?.layerType==="Voxel")r="VoxelLayer";else if(y?.length){const f=y[0]?.layerType;f!=null&&v[f]!=null&&(r=v[f])}}break}case"3DTilesServer":throw new p("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(r="FeatureLayer",l!=null){const n=await m(a,{customParameters:t});i.sourceJSON=n,r=d(n.type)}break;default:r=o[s]}if(C[r]&&l==null){const n=await V(a,s,t);if(u&&(i.sublayerInfos=n.layerInfos,i.tableInfos=n.tableInfos),n.layers.length+n.tables.length!==1)i.layers=n.layers,i.tables=n.tables,u&&n.layerInfos?.length&&(i.sublayerConstructorProvider=await x(n.layerInfos));else if(u||c){const y=n.layerInfos?.[0]??n.tableInfos?.[0];if(i.layerId=n.layers[0]?.id??n.tables[0]?.id,i.sourceJSON=y,u){const f=y?.type;r=d(f)}}}return i.Constructor=await w(r),i}async function N(a,t){const e=await m(a,{customParameters:t});let s=null,l=null;const r=e.type;if(r==="Feature Layer"||r==="Table"?(s="FeatureServer",l=e.id??null):r==="indexedVector"?s="VectorTileServer":e.hasOwnProperty("mapName")?s="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?s="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?s="FeatureServer":e.hasOwnProperty("streamUrls")?s="StreamServer":h(e)?(s="SceneServer",l=e.id):e.hasOwnProperty("layers")&&h(e.layers?.[0])&&(s="SceneServer"),!s)return null;const o=l!=null?g(a):null;return{title:o!=null&&e.name||O(a),serverType:s,sublayer:l,url:{path:o!=null?o.serviceUrl:L(a).path}}}function h(a){return a!=null&&a.hasOwnProperty("store")&&a.hasOwnProperty("id")&&typeof a.id=="number"}async function V(a,t,e){let s,l,r=!1;switch(t){case"FeatureServer":{const c=await $(a,{customParameters:e});r=!!c.layersJSON,s=c.layersJSON||c.serviceJSON;break}case"SceneServer":{const c=await J(a,e);s=c.serviceInfo,l=c.tableServerUrl;break}default:s=await m(a,{customParameters:e})}const o=s?.layers,u=s?.tables;return{layers:o?.map(c=>({id:c.id})).reverse()||[],tables:u?.map(c=>({serverUrl:l,id:c.id})).reverse()||[],layerInfos:r?o:[],tableInfos:r?u:[]}}async function J(a,t){const e=await m(a,{customParameters:t});if(!e.layers?.[0])return{serviceInfo:e};try{const{serverUrl:l}=await T(a),r=await m(l,{customParameters:t}).catch(()=>null);return r&&(e.tables=r.tables),{serviceInfo:e,tableServerUrl:l}}catch{return{serviceInfo:e}}}async function w(a){return(0,U[a])()}async function k(a,t){return(await m(a,{customParameters:t})).tileInfo}async function x(a){if(!a.length)return;const t=new Set,e=[];for(const{type:r}of a)t.has(r)||(t.add(r),e.push(w(d(r))));const s=await Promise.all(e),l=new Map;return Array.from(t).forEach((r,o)=>{l.set(r,s[o])}),r=>l.get(r.type)}export{K as fromUrl};
