import { H as s$1, s as s$2, fU as t, lc as e, I, fr as v$1, U as U$1, J as s$3, aV as e$1, b9 as u$1, af as b$1, bn as Et, c4 as r$1, jL as c$1, jK as m, W as a$1, ej as Y, aA as V$1, fl as j$1, ld as T, aH as M, le as pt, lf as qt, jP as K, R as Rt, lg as q, eS as d$2, cY as g$1, lh as U$2, F as x$1, f_ as p$1, dZ as n$1, e1 as t$1, ia as p$2, eA as l$3, d$ as u$2, e0 as j$2, eB as e$2, eC as i, e2 as m$1, B as a$2, li as a$3, lj as U$3, lk as t$2, d1 as d$3, aW as e$4, aX as y, bk as f$1, ex as r$2, e3 as o$2, aY as c$2, ec as b } from './main-DbwmOBz5.js';
import { e as e$3 } from './jsonContext-BodRNeUU.js';
import { l as l$4 } from './StyleRepository-B3es1hcu.js';
import './preload-helper-dJJaZANz.js';
import './StyleDefinition-CR2vYxyv.js';
import './enums-DZmWLm_j.js';
import './enums-wz4-wi7m.js';
import './GeometryUtils-DogKC5re.js';
import './enums-CgzwTbC2.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './definitions-slUvtMCM.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let A$1=null;function o$1(o){if(A$1)return A$1;const l={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return A$1=new Promise((A=>{const n=new Image;n.onload=()=>{n.onload=n.onerror=null,A(n.width>0&&n.height>0);},n.onerror=()=>{n.onload=n.onerror=null,A(!1);},n.src="data:image/webp;base64,"+l[o];})),A$1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const h$1=1.15;class n{constructor(t,e){this._spriteSource=t,this._maxTextureSize=e,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded","url"===t.type&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl;}get spriteNames(){const t=[];for(const e in this._spritesData)t.push(e);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded";}catch{this.loadStatus="failed";}}else this.loadStatus="failed";}async _loadSprites(t){this._isRetina=this.devicePixelRatio>h$1;const{width:s,height:r,data:a,json:o}=await this._getSpriteData(this._spriteSource,t),n=Object.keys(o);if(!n||0===n.length||!a)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=o,this.width=s,this.height=r;const d=Math.max(this._maxTextureSize,4096);if(s>d||r>d){const t=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${d} pixels}`;throw s$1.getLogger("esri.layers.support.SpriteSource").error(t),new s$2("SpriteSource",t)}let p;for(let e=0;e<a.length;e+=4)p=a[e+3]/255,a[e]=a[e]*p,a[e+1]=a[e+1]*p,a[e+2]=a[e+2]*p;this.image=a;}async _getSpriteData(i,n){if("image"===i.type){let t$1,a;if(this.devicePixelRatio<h$1){if(!i.spriteSource1x)throw new s$2("SpriteSource","no image data provided for low resolution sprites!");t$1=i.spriteSource1x.image,a=i.spriteSource1x.json;}else {if(!i.spriteSource2x)throw new s$2("SpriteSource","no image data provided for high resolution sprites!");t$1=i.spriteSource2x.image,a=i.spriteSource2x.json;}return "width"in t$1&&"height"in t$1&&"data"in t$1&&(t(t$1.data)||e(t$1.data))?{width:t$1.width,height:t$1.height,data:new Uint8Array(t$1.data),json:a}:{...d$1(t$1),json:a}}const p=I(this.baseURL),l=p.query?"?"+v$1(p.query):"",g=this._isRetina?"@2x":"",u=`${p.path}${g}.${this._spriteImageFormat}${l}`,c=`${p.path}${g}.json${l}`,[m,S]=await Promise.all([U$1(c,n),U$1(u,{responseType:"image",...n})]);return {...d$1(S.data),json:m.data}}}function d$1(t){const e=document.createElement("canvas"),i=e.getContext("2d");e.width=t.width,e.height=t.height,i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height);return {width:t.width,height:t.height,data:new Uint8Array(s.data)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let l$2 = class l{constructor(e){this.url=e;}destroy(){this._tileIndexPromise=null;}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=U$1(this.url).then((e=>e.data.index))),this._tileIndexPromise}async dataKey(e,r){const l=await this.fetchTileIndex();return s$3(r),this._getIndexedDataKey(l,e)}_getIndexedDataKey(e,t){const l=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;let i=t;for(;0!==i.level;)i=new e$1(i.level-1,i.row>>1,i.col>>1,i.world),l.push(i);let o,s,n=e,a=l.pop();if(1===n)return a;for(;l.length;)if(o=l.pop(),s=(1&o.col)+((1&o.row)<<1),n){if(0===n[s]){a=null;break}if(1===n[s]){a=o;break}a=o,n=n[s];}return a}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let l$1 = class l{constructor(e,t){this._tilemap=e,this._tileIndexUrl=t;}destroy(){this._tilemap=u$1(this._tilemap),this._tileIndexPromise=null;}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=U$1(this._tileIndexUrl,{query:{...t?.query}}).then((e=>e.data.index))),this._tileIndexPromise}dataKey(e,t){const{level:l,row:s,col:o}=e,n=new e$1(e);return this._tilemap.fetchAvailabilityUpsample(l,s,o,n,t).then((()=>(n.world=e.world,n))).catch((e=>{if(b$1(e))throw e;return null}))}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class l{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[];}getData(t){(null==this._promise||c$1(this._abortController?.signal))&&(this._promise=this._makeRequest(this._tileUrl));const o=this._abortOptions;return o.push(t),m(t,(()=>{o.every((t=>c$1(t)))&&this._abortController.abort();})),this._promise.then((t=>a$1(t)))}async _makeRequest(r){this._abortController=new AbortController;const{data:o}=await U$1(r,{responseType:"array-buffer",signal:this._abortController.signal});return o}}const a=new Map;function c(t,r,o,e,s){const l=I(t),a=l.query;if(a)for(const[i,n]of Object.entries(a))switch(n){case"{x}":a[i]=e.toString();break;case"{y}":a[i]=o.toString();break;case"{z}":a[i]=r.toString();}const c=l.path;return p(Et(c.replaceAll(/\{z\}/gi,r.toString()).replaceAll(/\{y\}/gi,o.toString()).replaceAll(/\{x\}/gi,e.toString()),{...l.query}),s)}function p(t,r){return r$1(a,t,(()=>new l(t))).getData(r).finally((()=>a.delete(t)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class u{constructor(h,u,m){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.initialExtent=null,this.name=h,this.sourceUrl=u;const f=I(this.sourceUrl),c=a$1(m),x=c.tiles;if(f)for(let t=0;t<x.length;t++){const r=I(x[t]);r&&(Y(r.path)||(r.path=V$1(f.path,r.path)),x[t]=Et(r.path,{...f.query,...r.query}));}this.tileServers=x;const d=m.capabilities&&m.capabilities.split(",").map((t=>t.toLowerCase().trim())),y=!0===m?.exportTilesAllowed,T$1=!0===d?.includes("tilemap"),I$1=y&&m.hasOwnProperty("maxExportTilesCount")?m.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:y,supportsTileMap:T$1},exportTiles:y?{maxExportTilesCount:+I$1}:null},this.tileInfo=j$1.fromJSON(c.tileInfo);const g=m.tileMap?Et(V$1(f.path,m.tileMap),f.query??{}):null;T$1?(this.type="vector-tile",this.tilemap=new l$1(new T({layer:{parsedUrl:f,tileInfo:this.tileInfo},minLOD:c.minLOD??this.tileInfo.lods[0].level,maxLOD:c.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}),g)):g&&(this.tilemap=new l$2(g)),this.fullExtent=M.fromJSON(m.fullExtent),this.initialExtent=M.fromJSON(m.initialExtent);}destroy(){this.tilemap?.destroy();}async getRefKey(t,e){return await(this.tilemap?.dataKey(t,e))??t}requestTile(t,e,i,l){const s=this.tileServers[e%this.tileServers.length];return c(s,t,e,i,l)}isCompatibleWith(t){const e=this.tileInfo,i=t.tileInfo;if(!e.spatialReference.equals(i.spatialReference))return !1;if(!e.origin.equals(i.origin))return !1;if(Math.round(e.dpi)!==Math.round(i.dpi))return !1;const l=e.lods,s=i.lods,r=Math.min(l.length,s.length);for(let o=0;o<r;o++){const t=l[o],e=s[o];if(t.level!==e.level||Math.round(t.scale)!==Math.round(e.scale))return !1}return !0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function x(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,o]="string"==typeof e?[e,null]:[null,e.jsonUrl];await S(r,"esri",e,o,t);return {layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&d(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&d(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName}}function d(...e){let t;for(const r of e)if(null!=r)if(pt(r)){if(t){const e=t.split("://")[0];t=e+":"+r.trim();}}else t=Y(r)?r:V$1(t,r);return t?qt(t):void 0}async function S(t,s,o,l,n){let u,a,c;if(s$3(n),"string"==typeof o){const t=K(o);c=await U$1(t,{...n,responseType:"json",query:{f:"json",...n?.query}}),c.ssl&&(u&&(u=u.replace(/^http:/i,"https:")),a&&(a=a.replace(/^http:/i,"https:"))),u=t,a=t;}else null!=o&&(c={data:o},u=o.jsonUrl||null,a=l);const f=c?.data;if(w(f))return t.styleUrl=u||null,j(t,f,a,n);if(U(f))return t.sourceUrl?g(t,f,a,!1,s,n):(t.sourceUrl=u||null,g(t,f,a,!0,s,n));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function h(e){return "object"==typeof e&&!!e&&"tilejson"in e&&null!=e.tilejson}function w(e){return !!e&&"sources"in e&&!!e.sources}function U(e){return !w(e)}async function j(e,t,r,s){const o=r?Rt(r):q();e.styleBase=o,e.style=t,t["sprite-format"]&&"webp"===t["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const l=[];if(t.sources&&t.sources.esri){const r=t.sources.esri;r.url?await S(e,"esri",d(o,r.url),void 0,s):l.push(S(e,"esri",r,o,s));}for(const n of Object.keys(t.sources))"esri"!==n&&"vector"===t.sources[n].type&&(t.sources[n].url?l.push(S(e,n,d(o,t.sources[n].url),void 0,s)):t.sources[n].tiles&&l.push(S(e,n,t.sources[n],o,s)));await Promise.all(l);}async function g(e,t,r,s,o,l){const i=r?qt(r)+"/":q(),u$1=v(t),f=new u(o,Et(i,l?.query??{}),u$1);if(!s&&e.primarySourceName in e.sourceNameToSource){const t=e.sourceNameToSource[e.primarySourceName];if(!t.isCompatibleWith(f))return;null!=f.fullExtent&&(null!=t.fullExtent?t.fullExtent.union(f.fullExtent):t.fullExtent=f.fullExtent.clone()),t.tileInfo&&f.tileInfo&&t.tileInfo.lods.length<f.tileInfo.lods.length&&(t.tileInfo=f.tileInfo);}if(s&&(e.sourceBase=i,e.source=t,e.validatedSource=u$1,e.primarySourceName=o),e.sourceNameToSource[o]=f,!h(e)&&"defaultStyles"in t&&!e.style){if(null==t.defaultStyles)throw new Error;return "string"==typeof t.defaultStyles?S(e,"",d(i,t.defaultStyles,"root.json"),void 0,l):S(e,"",t.defaultStyles,d(i,"root.json"),l)}}function v(e){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100,latestWkid:3857}};let s=null;if(h(e)){const{bounds:r}=e;if(r){const e=d$2({x:r[0],y:r[1],spatialReference:a$1(g$1)}),o=d$2({x:r[2],y:r[3],spatialReference:a$1(g$1)});s={xmin:e.x,ymin:e.y,xmax:o.x,ymax:o.y,spatialReference:a$1(U$2)};}}null===s&&(s=r);const o=512;let l=78271.51696400007,n=295828763.7957775;const i=[],u=e.hasOwnProperty("maxzoom")&&null!=e.maxzoom?+e.maxzoom:22,a=0,c=0;for(let t=0;t<=u;t++)i.push({level:t,scale:n,resolution:l}),l/=2,n/=2;return {capabilities:"TilesOnly",initialExtent:s,fullExtent:r,minScale:a,maxScale:c,tiles:e.tiles,tileInfo:{rows:o,cols:o,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:i,spatialReference:a$1(U$2)}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const s=1e-6;function r(l,e){if(l===e)return !0;if(null==l&&null!=e)return !1;if(null!=l&&null==e)return !1;if(null==l||null==e)return !1;if(!l.spatialReference.equals(e.spatialReference)||l.dpi!==e.dpi)return !1;const n=l.origin,r=e.origin;if(Math.abs(n.x-r.x)>=s||Math.abs(n.y-r.y)>=s)return !1;let o,t;l.lods[0].scale>e.lods[0].scale?(o=l,t=e):(t=l,o=e);for(let i=o.lods[0].scale;i>=t.lods[t.lods.length-1].scale-s;i/=2)if(Math.abs(i-t.lods[0].scale)<s)return !0;return !1}function o(s,r){if(s===r)return s;if(null==s&&null!=r)return r;if(null!=s&&null==r)return s;if(null==s||null==r)return null;const o=s.size[0],t=s.format,i=s.dpi,u=new x$1({x:s.origin.x,y:s.origin.y}),a=s.spatialReference,f=s.lods[0].scale>r.lods[0].scale?s.lods[0]:r.lods[0],d=s.lods[s.lods.length-1].scale<=r.lods[r.lods.length-1].scale?s.lods[s.lods.length-1]:r.lods[r.lods.length-1],c=f.scale,p=f.resolution,g=d.scale,h=[];let m=c,y=p,x=0;for(;m>g;)h.push(new p$1({level:x,resolution:y,scale:m})),x++,m/=2,y/=2;return new j$1({size:[o,o],dpi:i,format:t||"pbf",origin:u,lods:h,spatialReference:a})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let N=class extends(n$1(t$1(p$2(l$3(u$2(j$2(e$2(i(m$1(b)))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.style=null,this.tilemapCache=null,this.type="vector-tile",this.url=null,this.path=null;}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e?.destroy();this.primarySource?.destroy(),this._spriteSourceMap.clear();}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e);}load(e){const r=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(a$2).then((async()=>{if(!this.portalItem?.id)return;const r=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await U$1(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},e$3(this.portalItem,"portal-item"));})).catch(a$2).then((()=>this._loadStyle(e)));return this.addResolvingPromise(r),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e?.serviceUrl&&I(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?Et(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){return this.primarySource?.fullExtent||null}get initialExtent(){return this.primarySource?.initialExtent||null}get parsedUrl(){return this.serviceUrl?I(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo?.serviceUrl||null}get spatialReference(){return this.tileInfo?.spatialReference??null}get styleUrl(){return this.currentStyleInfo?.styleUrl||null}writeStyleUrl(e,t){e&&pt(e)&&(e=`https:${e}`);const r=a$3(e);t.styleUrl=U$3(e,r);}get tileInfo(){const e=[];for(const r in this.sourceNameToSource)e.push(this.sourceNameToSource[r]);let t=this.primarySource?.tileInfo||new j$1;if(e.length>1)for(let r$1=0;r$1<e.length;r$1++)r(t,e[r$1].tileInfo)&&(t=o(t,e[r$1].tileInfo));return t}readTilemapCache(e,t){const r=t.capabilities?.includes("Tilemap");return r?new T({layer:this}):null}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=t$2().maxTextureSize,i=this.currentStyleInfo?.spriteUrl?Et(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,o=new n({type:"url",spriteUrl:i,pixelRatio:e,spriteFormat:this.currentStyleInfo?.spriteFormat},r);await o.load(t),this._spriteSourceMap.set(e,o);}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=t$2().maxTextureSize,i=e.spriteUrl,o=i?Et(i,{...this.customParameters,token:this.apiKey}):null;if(!o&&"url"===e.type)return null;const s=new n(e,r);try{await s.load(t);const r=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(r,s),o&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=o),this.emit("spriteSource-change",{spriteSource:s}),s}catch(a){a$2(a);}return null}async loadStyle(e,t){const i=e||this.style||this.url;return this._loadingTask&&"string"==typeof i&&this.url===i||(this._loadingTask?.abort(),this._loadingTask=d$3((e=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(i,{signal:e}))),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return a$1(this.styleRepository?.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const i=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||i});}getStyleLayer(e){return a$1(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t});}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e});}getLayoutProperties(e){return a$1(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t});}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t});}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t?.origin&&!this.styleUrl?(t.messages&&t.messages.push(new s$2("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await x(e,{...t,query:{...this.customParameters,token:this.apiKey}});if("webp"===r.spriteFormat){await o$1("lossy")||(r.spriteFormat="png");}this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new l$4(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style");}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const i=t[2]&&t[2].toLowerCase();if(!i)return;const o=t[1]||"";for(const s of r)if(s.toLowerCase().includes(i))return K(`//static.arcgis.com/attribution/Vector${o}/${s}`)}async _loadStyle(e){return this._loadingTask?.promise??this.loadStyle(null,e)}};e$4([y({readOnly:!0})],N.prototype,"attributionDataUrl",null),e$4([y({type:["show","hide"]})],N.prototype,"listMode",void 0),e$4([y({json:{read:!0,write:!0}})],N.prototype,"blendMode",void 0),e$4([y({readOnly:!0,json:{read:!1}})],N.prototype,"capabilities",null),e$4([y({readOnly:!0})],N.prototype,"currentStyleInfo",void 0),e$4([y({json:{read:!1},readOnly:!0,type:M})],N.prototype,"fullExtent",null),e$4([y({json:{read:!1},readOnly:!0,type:M})],N.prototype,"initialExtent",null),e$4([y({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],N.prototype,"isReference",void 0),e$4([y({type:["VectorTileLayer"]})],N.prototype,"operationalLayerType",void 0),e$4([y({readOnly:!0})],N.prototype,"parsedUrl",null),e$4([y()],N.prototype,"style",void 0),e$4([y({readOnly:!0})],N.prototype,"serviceUrl",null),e$4([y({type:f$1,readOnly:!0})],N.prototype,"spatialReference",null),e$4([y({readOnly:!0})],N.prototype,"styleRepository",void 0),e$4([y({readOnly:!0})],N.prototype,"sourceNameToSource",void 0),e$4([y({readOnly:!0})],N.prototype,"primarySource",void 0),e$4([y({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],N.prototype,"styleUrl",null),e$4([r$2(["portal-item","web-document"],"styleUrl")],N.prototype,"writeStyleUrl",null),e$4([y({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:j$1})],N.prototype,"tileInfo",null),e$4([y()],N.prototype,"tilemapCache",void 0),e$4([o$2("service","tilemapCache",["capabilities","tileInfo"])],N.prototype,"readTilemapCache",null),e$4([y({json:{read:!1},readOnly:!0,value:"vector-tile"})],N.prototype,"type",void 0),e$4([y({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],N.prototype,"url",void 0),e$4([y({readOnly:!0})],N.prototype,"version",void 0),e$4([o$2("version",["version","currentVersion"])],N.prototype,"readVersion",null),e$4([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],N.prototype,"path",void 0),N=e$4([c$2("esri.layers.VectorTileLayer")],N);const A=N;

export { A as default };
