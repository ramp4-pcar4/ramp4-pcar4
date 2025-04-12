import { dO as e$1, kW as L, c5 as r$5, K as s$1, kX as r$6, X as a$3, kS as c$3, aX as e$2, aY as y, aZ as c$4, dZ as S$1, al as u$1, d2 as d$1, kY as b$2, fu as o$1, ka as E$1, kZ as t$2, k_ as f, k$ as e$3, jW as h$1, a as a$4, fn as C$1, b2 as p$1, f7 as w$3, l0 as x$1, fa as b$3, aI as M, C as a$5, J as s$2, ay as e$4, l1 as f$1, l2 as a$6, l3 as it, jb as c$5, l4 as ct, l5 as u$2, ew as c$6, l6 as E$2, l7 as o$3, cX as gt, l8 as S$2, fm as j$3, l9 as t$3, la as c$7, lb as l$1, fZ as t$4, cV as o$4, _ as L$1, bl as f$2, gz as h$2, b3 as d$2, gt as w$4, eP as y$1 } from './main-ba570a3b.js';
import { m } from './FeatureStore-868282ab.js';
import { $ } from './QueryEngine-9c658abb.js';
import { o as o$2 } from './BoundsStore-83cd25c8.js';
import './preload-helper-a4975f27.js';
import './timeSupport-a7be4534.js';
import './json-aab78c64.js';
import './WhereClause-a0fbeee4.js';
import './TimeOnly-6bc84525.js';
import './QueryEngineCapabilities-5bb5f351.js';
import './utils-45670077.js';
import './utils-04c47ba0.js';
import './utils-43a56599.js';
import './RenderState-dde7519e.js';
import './PooledRBush-3a1c4f4e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function i$2(e=!1,t){if(e){const{elevationInfo:e,alignPointsInFeatures:s}=t;return new c$2(e,s)}return new a$2}let a$2 = class a{async alignCandidates(e,t,s){return e}notifyElevationSourceChange(){}};const r$4=1024;let c$2 = class c{constructor(t,s){this._elevationInfo=t,this._alignPointsInFeatures=s,this._alignmentsCache=new e$1(r$4),this._cacheVersion=0;}async alignCandidates(e,t,s){const n=this._elevationInfo;return null==n||"absolute-height"!==n.mode||n.featureExpressionInfo?this._alignComputedElevationCandidates(e,t,s):(this._alignAbsoluteElevationCandidates(e,t,n),e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++;}_alignAbsoluteElevationCandidates(e,t,s){const{offset:i,unit:a}=s;if(null==i)return;const r=L(t),c=i*(r$6(a??"meters")/r);for(const n of e)switch(n.type){case"edge":n.start.z+=c,n.end.z+=c;continue;case"vertex":n.target.z+=c;continue}}async _alignComputedElevationCandidates(e,n,o){const i=new Map;for(const s of e)r$5(i,s.objectId,d).push(s);const[a,r,c]=this._prepareQuery(i,n),l=await this._alignPointsInFeatures(a,o);s$1(o);if(c!==this._cacheVersion)return this._alignComputedElevationCandidates(e,n,o);this._applyCacheAndResponse(a,l,r);const{drapedObjectIds:h,failedObjectIds:u}=l,p=[];for(const t of e){const{objectId:e}=t;h.has(e)&&"edge"===t.type&&(t.draped=!0),u.has(e)||p.push(t);}return p}_prepareQuery(e,t){const s=[],n=[];for(const[o,i]of e){const e=[];for(const t of i)this._addToQueriesOrCachedResult(o,t.target,e,n),"edge"===t.type&&(this._addToQueriesOrCachedResult(o,t.start,e,n),this._addToQueriesOrCachedResult(o,t.end,e,n));0!==e.length&&s.push({objectId:o,points:e});}return [{spatialReference:t.toJSON(),pointsInFeatures:s},n,this._cacheVersion]}_addToQueriesOrCachedResult(e,t,s,n){const o=h(e,t),i=this._alignmentsCache.get(o);null==i?s.push(t):n.push(new l(t,i));}_applyCacheAndResponse(e,{elevations:t,drapedObjectIds:s,failedObjectIds:n},o){for(const r of o)r.apply();let i=0;const a=this._alignmentsCache;for(const{objectId:r,points:c}of e.pointsInFeatures){if(n.has(r)){i+=c.length;continue}const e=!s.has(r);for(const s of c){const n=h(r,s),o=t[i++];s.z=o,e&&a.put(n,o,1);}}}};class l{constructor(e,t){this.point=e,this.z=t;}apply(){this.point.z=this.z;}}function h(e,{x:t,y:s,z:n,spatialReference:o}){return `${e}-${t}-${s}-${n??0}}-wkid:${o?.wkid}`}function d(){return []}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$1 = class t{filter(t,n){return n}notifyElevationSourceChange(){}};let n$1 = class n{filter(t,n){const{point:r,distance:c}=t,{z:i}=r;if(!(null!=i))return n;if(0===n.length)return n;const o=s(c),u=this._updateCandidatesTo3D(n,r,o).filter(e);return u.sort(a$1),u}_updateCandidatesTo3D(t,n,e){for(const r of t)switch(r.type){case"edge":c$1(r,n,e);continue;case"vertex":o(r,n,e);continue}return t}};function e(t){return t.distance<=1}function r$3(e=!1){return e?new n$1:new t$1}function c$1(t,n,{x:e,y:r,z:c}){const{start:o,end:s,target:a}=t;t.draped||i$1(a,n,o,s);const u=(n.x-a.x)/e,d=(n.y-a.y)/r,f=(n.z-a.z)/c;t.distance=Math.sqrt(u*u+d*d+f*f);}function i$1(t,n,e,r){const c=r.x-e.x,i=r.y-e.y,o=r.z-e.z,s=c*c+i*i+o*o,a=(n.x-e.x)*c+(n.y-e.y)*i+o*(n.z-e.z),u=Math.min(1,Math.max(0,a/s)),d=e.x+c*u,f=e.y+i*u,x=e.z+o*u;t.x=d,t.y=f,t.z=x;}function o(t,n,{x:e,y:r,z:c}){const{target:i}=t,o=(n.x-i.x)/e,s=(n.y-i.y)/r,a=(n.z-i.z)/c,u=Math.sqrt(o*o+s*s+a*a);t.distance=u;}function s(t){return "number"==typeof t?{x:t,y:t,z:t}:t}function a$1(t,n){return t.distance-n.distance}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n(t=!1,e){return t?new i(e):new c}class c{async fetch(){return []}notifySymbologyChange(){}}const r$2=1024;class i{constructor(t){this._getSymbologyCandidates=t,this._candidatesCache=new e$1(r$2),this._cacheVersion=0;}async fetch(e,o){if(0===e.length)return [];const n=[],c=[],r=this._candidatesCache;for(const s of e){const e=a(s),o=r.get(e);if(o)for(const s of o)c.push(a$3(s));else n.push(s),r.put(e,[],1);}if(0===n.length)return c;const i=this._cacheVersion,{candidates:h,sourceCandidateIndices:d}=await this._getSymbologyCandidates(n,o);s$1(o);if(i!==this._cacheVersion)return this.fetch(e,o);const f=[],{length:g}=h;for(let s=0;s<g;++s){const e=h[s],o=a(n[d[s]]),c=r.get(o);c.push(e),r.put(o,c,c.length),f.push(a$3(e));}return c.concat(f)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++;}}function a(t){switch(t.type){case"vertex":{const{objectId:e,target:s}=t,n=`${e}-vertex-${s.x}-${s.y}-${s.z??0}`;return c$3(n).toString()}case"edge":{const{objectId:e,start:s,end:n}=t,c=`${e}-edge-${s.x}-${s.y}-${s.z??0}-to-${n.x}-${n.y}-${n.z??0}`;return c$3(c).toString()}default:return ""}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let r$1=class r extends S$1{constructor(){super(...arguments),this.updating=!1,this._pending=[];}push(s,t){this._pending.push({promise:s,callback:t}),1===this._pending.length&&this._process();}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const s=this._pending[0];s.promise.then((t=>s.callback(t))).catch((()=>{})).then((()=>{this._pending.shift(),this._process();}));}};e$2([y()],r$1.prototype,"updating",void 0),r$1=e$2([c$4("esri.core.AsyncSequence")],r$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class r{constructor(t,e){this.data=t,this.resolution=e,this.state={type:u.CREATED},this.alive=!0;}process(t){switch(this.state.type){case u.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case u.FETCH_COUNT:break;case u.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case u.FETCH_FEATURES:break;case u.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case u.DONE:}return null}get debugInfo(){return {data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case u.CREATED:case u.FETCH_COUNT:return 0;case u.FETCHED_COUNT:return this.state.featureCount;case u.FETCH_FEATURES:return this.state.previous.featureCount;case u.FETCHED_FEATURES:return this.state.features.length;case u.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case u.CREATED:return "created";case u.FETCH_COUNT:return "fetch-count";case u.FETCHED_COUNT:return "fetched-count";case u.FETCH_FEATURES:return "fetch-features";case u.FETCHED_FEATURES:return "fetched-features";case u.DONE:return "done"}}_gotoFetchCount(s,a){return {type:u.FETCH_COUNT,previous:s,task:d$1((async t=>{const s=await b$2(a.fetchCount(this,t));this.state.type===u.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,s.ok?s.value:1/0));}))}}_gotoFetchedCount(t,e){return {type:u.FETCHED_COUNT,featureCount:e,previous:t}}_gotoFetchFeatures(s,a){return {type:u.FETCH_FEATURES,previous:s,task:d$1((async t=>{const E=await b$2(a.fetchFeatures(this,s.featureCount,t));this.state.type===u.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,E.ok?E.value:[]));}))}}_gotoFetchedFeatures(t,e){return {type:u.FETCHED_FEATURES,previous:t,features:e}}_goToDone(t,e){return e.finish(this,t.features),{type:u.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:u.CREATED},t.type){case u.CREATED:case u.FETCHED_COUNT:case u.FETCHED_FEATURES:case u.DONE:break;case u.FETCH_COUNT:case u.FETCH_FEATURES:t.task.abort();}}intersects(t){return null==t||!this.data.extent||(o$1(t,T$1),E$1(this.data.extent,T$1))}}var u;!function(t){t[t.CREATED=0]="CREATED",t[t.FETCH_COUNT=1]="FETCH_COUNT",t[t.FETCHED_COUNT=2]="FETCHED_COUNT",t[t.FETCH_FEATURES=3]="FETCH_FEATURES",t[t.FETCHED_FEATURES=4]="FETCHED_FEATURES",t[t.DONE=5]="DONE";}(u||(u={}));const T$1=u$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let x=class extends S$1{get _minimumVerticesPerFeature(){switch(this.store?.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}get _mandatoryOutFields(){const e=new Set;return this.objectIdField&&e.add(this.objectIdField),this.globalIdField&&e.add(this.globalIdField),e}set outFields(e){const t=this._get("outFields"),i=t$2(e,this._mandatoryOutFields);f(i,t)||(this._set("outFields",i),e$3(i,t)||this.refresh());}get outFields(){return this._get("outFields")??this._mandatoryOutFields}set filter(e){const t=this._get("filter"),i=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(i)&&this._set("filter",i);}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e);}get _configuration(){return {filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&(null!=e&&null!=t&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e));}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e);}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(e){super(e),this.suspended=!0,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new h$1,this._pendingEdits=new r$1,this._pendingEditsAbortController=new AbortController;}initialize(){this._initializeFetchExtent(),this._updatingHandles.add((()=>this._configuration),(()=>this.refresh())),this._updatingHandles.add((()=>this.tilesOfInterest),((e,t)=>{a$4(e,t,(({id:e},{id:t})=>e===t))||this._process();}),C$1),this.addHandles(p$1((()=>!this.suspended),(()=>this._process())));}destroy(){this._pendingTiles.forEach((e=>this._deletePendingTile(e))),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null,this._updatingHandles.destroy();}refresh(){this.store.refresh(),this._pendingTiles.forEach((e=>this._deletePendingTile(e))),this._process();}applyEdits(e){this._pendingEdits.push(e,(async e=>{if(0===e.addedFeatures.length&&0===e.updatedFeatures.length&&0===e.deletedFeatures.length)return;for(const[,i]of this._pendingTiles)i.reset();const t={...e,deletedFeatures:e.deletedFeatures.map((({objectId:e,globalId:t})=>e&&-1!==e?e:this._lookupObjectIdByGlobalId(t)))};await this._updatingHandles.addPromise(this.store.processEdits(t,((e,t)=>this._queryFeaturesById(e,t)),this._pendingEditsAbortController.signal)),this._processPendingTiles();}));}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!w$3(this.url))return;const e=d$1((async e=>{try{const t=await x$1(this.url,new b$3({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:e});this.store.extent=M.fromJSON(t.data?.extent);}catch(t){a$5(t),s$2.getLogger(this).warn("Failed to fetch data extent",t);}}));this._updatingHandles.addPromise(e.promise.then((()=>this._process()))),this.addHandles(e$4((()=>e.abort())));}get debugInfo(){return {numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map((e=>e.debugInfo)),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles();}_markTilesNotAlive(){for(const[,e]of this._pendingTiles)e.alive=!1;}_createPendingTiles(){if(this.suspended)return;const e=this._collectMissingTilesInfo();if(this._setAvailability(null==e?1:e.coveredArea/e.fullArea),null!=e)for(const{data:t,resolution:i}of e.missingTiles){const e=this._pendingTiles.get(t.id);e?(e.resolution=i,e.alive=!0):this._createPendingTile(t,i);}}_collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const i=this.tilesOfInterest[t],s=this.store.process(i,((e,t)=>this._verifyTileComplexity(e,t)),this.outFields);null==e?e=s:e.prepend(s);}return e}_deletePendingTiles(){for(const[,e]of this._pendingTiles)e.alive||this._deletePendingTile(e);}_processPendingTiles(){const e={fetchCount:(e,t)=>this._fetchCount(e,t),fetchFeatures:(e,t,i)=>this._fetchFeatures(e,t,i),finish:(e,t)=>this._finishPendingTile(e,t),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,t]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this._updatingHandles.addPromise(t.process(e));}_verifyTileComplexity(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}_verifyVertexComplexity(e){return e*this._minimumVerticesPerFeature<q}_verifyFeatureDensity(e,t){if(null==this.tileInfo)return !1;const i=this.tileSize*t;return e*(A$1/(i*i))<H}_ensureFetchAllCounts(e){let t=!0;for(const[,i]of this._pendingTiles)i.state.type<u.FETCHED_COUNT&&this._updatingHandles.addPromise(i.process(e)),i.state.type<=u.FETCH_COUNT&&(t=!1);return t}_finishPendingTile(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability();}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability(null==e?1:e.coveredArea/e.fullArea);}_setAvailability(e){this._set("availability",e);}_createPendingTile(e,t){const i=new r(e,t);return this._pendingTiles.set(e.id,i),i}_deletePendingTile(e){e.reset(),this._pendingTiles.delete(e.data.id);}async _fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this._createCountQuery(e),{query:this.customParameters,timeout:w$2,signal:t})}async _fetchFeatures(e,t,i){let s=0;const r=[];let o=0,n=t;for(;;){const l=this._createFeaturesQuery(e),a=this._setPagingParameters(l,s,n),{features:u,exceededTransferLimit:d}=await this._queryFeatures(l,i);a&&(s+=l.num),o+=u.length;for(const e of u)r.push(e);if(n=t-o,!a||!d||n<=0)return r}}_filterProperties(e){return null==e?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const t=this.globalIdField,i=this.objectIdField;if(null==t)throw new Error("Expected globalIdField to be defined");let s=null;if(this.store.featureStore.forEach((r=>{e===r.attributes[t]&&(s=r.objectId??r.attributes[i]);})),null==s)throw new Error(`Expected to find a feature with globalId ${e}`);return s}_queryFeaturesById(e,t){const i=this._createFeaturesQuery();return i.objectIds=e,this._queryFeatures(i,t)}_queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}async _queryFeaturesPBF(e,t){const{sourceSpatialReference:i}=this,{data:s}=await f$1(this.url,e,new a$6({sourceSpatialReference:i}),{query:this._configuration.customParameters,timeout:w$2,signal:t});return it(s)}async _queryFeaturesJSON(e,t){const{sourceSpatialReference:i}=this,{data:s}=await c$5(this.url,e,i,{query:this._configuration.customParameters,timeout:w$2,signal:t});return ct(s,this.objectIdField)}_createCountQuery(e){const t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}_createFeaturesQuery(e=null){const t=this._createBaseQuery(e),i=null!=e?.data?this.store.getAttributesForTile(e?.data?.id):null,s=t$2(u$2(this.outFields,i??new Set),this._mandatoryOutFields);return t.outFields=Array.from(s),t.returnGeometry=!0,null!=e&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}_createBaseQuery(e){const t=new b$3({returnZ:this.hasZ,returnM:!1,geometry:null!=this.tileInfo&&null!=e?c$6(e.data.extent,this.tileInfo.spatialReference):void 0}),i=this._configuration.filter;return null!=i&&(t.where=i.where,t.gdbVersion=i.gdbVersion,t.timeExtent=i.timeExtent),t.outSpatialReference=this.spatialReference,t}_setPagingParameters(e,t,i){if(!this.capabilities.query.supportsPagination)return !1;const{supportsMaxRecordCountFactor:s,supportsCacheHint:r,tileMaxRecordCount:o,maxRecordCount:n,supportsResultType:l}=this.capabilities.query,a=s?b$3.MAX_MAX_RECORD_COUNT_FACTOR:1,u=a*((l||r)&&o?o:n||j$2);return e.start=t,s?(e.maxRecordCountFactor=Math.min(a,Math.ceil(i/u)),e.num=Math.min(i,e.maxRecordCountFactor*u)):e.num=Math.min(i,u),!0}};e$2([y({constructOnly:!0})],x.prototype,"url",void 0),e$2([y({constructOnly:!0})],x.prototype,"objectIdField",void 0),e$2([y({constructOnly:!0})],x.prototype,"globalIdField",void 0),e$2([y({constructOnly:!0})],x.prototype,"capabilities",void 0),e$2([y({constructOnly:!0})],x.prototype,"sourceSpatialReference",void 0),e$2([y({constructOnly:!0})],x.prototype,"spatialReference",void 0),e$2([y({constructOnly:!0})],x.prototype,"store",void 0),e$2([y({readOnly:!0})],x.prototype,"_minimumVerticesPerFeature",null),e$2([y()],x.prototype,"_mandatoryOutFields",null),e$2([y()],x.prototype,"outFields",null),e$2([y()],x.prototype,"suspended",void 0),e$2([y()],x.prototype,"filter",null),e$2([y()],x.prototype,"customParameters",null),e$2([y({readOnly:!0})],x.prototype,"_configuration",null),e$2([y()],x.prototype,"tileInfo",null),e$2([y()],x.prototype,"tileSize",null),e$2([y()],x.prototype,"tilesOfInterest",void 0),e$2([y({readOnly:!0})],x.prototype,"updating",null),e$2([y({readOnly:!0})],x.prototype,"updatingExcludingEdits",null),e$2([y({readOnly:!0})],x.prototype,"availability",void 0),e$2([y()],x.prototype,"hasZ",null),x=e$2([c$4("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],x);const j$2=2e3,w$2=6e5,q=1e6,A$1=25,H=1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class t{constructor(){this._store=new Map,this._byteSize=0;}set(t,e){this.delete(t),this._store.set(t,e),this._byteSize+=e.byteSize;}delete(t){const e=this._store.get(t);return !!this._store.delete(t)&&(null!=e&&(this._byteSize-=e.byteSize),!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear();}applyByteSizeLimit(t,e){for(const[s,r]of this._store){if(this._byteSize<=t)break;this.delete(s),e(r);}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const e=this._store.get(t);e&&(this._store.delete(t),this._store.set(t,e));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let v=class extends S$1{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*E$2.MEGABYTES,this._tileBounds=new o$2,this._tiles=new t,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=u$1();}add(e,t){for(const r of t)this._referenceFeature(r.objectId);const s=this.featureStore.upsertMany(t),i=s.map((e=>new Set(Object.keys(e.attributes)))).reduce(((e,t)=>o$3(e,t)),new Set(Object.keys(s[0]?.attributes??[])));this._addTileStorage(e,new Set(s.map((e=>e.objectId))),C(s),i),this._tiles.applyByteSizeLimit(this.maximumByteSize,(e=>this._removeTileStorage(e)));}getAttributesForTile(e){return e?this._tiles.get(e)?.attributeKeys:null}destroy(){this.clear(),this._tileFeatureCounts.clear();}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear();}refresh(){this.clear(),this._tileFeatureCounts.clear();}processEdits(e,t,s){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}_addTileStorage(e,t,s,i){const r=e.id;this._tiles.set(r,new T(e,t,s,i)),this._tileBounds.set(r,e.extent),this._tileFeatureCounts.set(r,t.size);}_remove({id:e}){const t=this._tiles.get(e);t&&this._removeTileStorage(t);}_removeTileStorage(e){const t=[];for(const i of e.objectIds)this._unreferenceFeature(i)===A.REMOVED&&t.push(i);this.featureStore.removeManyById(t);const s=e.data.id;this._tiles.delete(s),this._tileBounds.delete(s);}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this._tiles){for(const s of e)t.objectIds.delete(s);this._tileFeatureCounts.set(t.data.id,t.objectIds.size);}for(const t of e)this._refCounts.delete(t);}async _processEditsRefetch(e,t,s){const i=(await t(e,s)).features,{hasZ:r,hasM:o}=this.featureStore;for(const n of i){const e=gt(this._tmpBoundingRect,n.geometry,r,o);null!=e&&this._tileBounds.forEachInBounds(e,(e=>{const t=this._tiles.get(e);this.featureStore.add(n);const s=n.objectId;t.objectIds.has(s)||(t.objectIds.add(s),this._referenceFeature(s),this._tileFeatureCounts.set(t.data.id,t.objectIds.size));}));}}process(e,t=(()=>!0),s){if(null==this.tileInfo||!e.extent||null!=this.extent&&!E$1(o$1(this.extent,this._tmpBoundingRect),e.extent))return new F(e);const i=this.getAttributesForTile(e.id);if(e$3(s,i))return new F(e);const r=this._createTileTree(e,this.tileInfo);return this._simplify(r,t,null,0,1),this._collectMissingTiles(e,r,this.tileInfo,s)}get debugInfo(){return Array.from(this._tiles.values()).map((({data:e})=>({data:e,featureCount:this._tileFeatureCounts.get(e.id)||0})))}getFeatureCount(e){return this._tileFeatureCounts.get(e.id)??0}async fetchCount(e,t,s,i){const r=this._tileFeatureCounts.get(e.id);if(null!=r)return r;const o=await S$2(t,s,i);return this._tileFeatureCounts.set(e.id,o.data.count),o.data.count}_createTileTree(e,t){const s=new w$1(e.level,e.row,e.col);return t.updateTileInfo(s,j$3.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(e.extent,(i=>{const r=this._tiles.get(i)?.data;r&&this._tilesAreRelated(e,r)&&this._populateChildren(s,r,t,this._tileFeatureCounts.get(r.id)||0);})),s}_tilesAreRelated(e,t){if(!e||!t)return !1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,i=s?e:t,r=s?t:e,o=1<<r.level-i.level;return Math.floor(r.row/o)===i.row&&Math.floor(r.col/o)===i.col}_populateChildren(e,t,s,i){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const o=t.row>>r,n=t.col>>r,l=e.row<<1,u=n-(e.col<<1)+(o-l<<1),a=e.children[u];if(null!=a)this._populateChildren(a,t,s,i);else {const r=new w$1(e.level+1,o,n);s.updateTileInfo(r,j$3.ExtrapolateOptions.POWER_OF_TWO),e.children[u]=r,this._populateChildren(r,t,s,i);}}_simplify(e,t,s,i,r){const o=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this._remove(e),null!=s&&(s.children[i]=null),o);const n=r/2,l=n*n;let u=0;for(let a=0;a<e.children.length;a++){const s=e.children[a];u+=null!=s?this._simplify(s,t,e,a,n):l;}return 0===u?this._mergeChildren(e):1-u/o<b$1&&(this._purge(e),null!=s&&(s.children[i]=null),u=o),u}_mergeChildren(e){const t=new Set;let s,i=0;this._forEachLeaf(e,(e=>{const r=this._tiles.get(e.id);if(r){s=s?o$3(s,r.attributeKeys):new Set(r.attributeKeys),i+=r.byteSize;for(const e of r.objectIds)t.has(e)||(t.add(e),this._referenceFeature(e));this._remove(e);}})),this._addTileStorage(e,t,i,s??new Set),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this._tileFeatureCounts.set(e.id,t.size);}_forEachLeaf(e,t){for(const s of e.children)null!=s&&(s.isLeaf?t(s):this._forEachLeaf(s,t));}_purge(e){if(null!=e)if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++){const s=e.children[t];this._purge(s),e.children[t]=null;}}_collectMissingTiles(e,t,s,i){const r=new j$1(s,e,this.extent);return this._collectMissingTilesRecurse(t,r,1,i),r.info}_collectMissingTilesRecurse(e,t,s,i){const r=this.getAttributesForTile(e.id),o=r&&!e$3(i,r);if(o&&t.addMissing(e.level,e.row,e.col,s),e.isLeaf)return;if(!e.hasChildren)return void(o||t.addMissing(e.level,e.row,e.col,s));const l=s/2;for(let n=0;n<e.children.length;n++){const s=e.children[n];null==s?t.addMissing(e.level+1,(e.row<<1)+((2&n)>>1),(e.col<<1)+(1&n),l):this._collectMissingTilesRecurse(s,t,l,i);}}_referenceFeature(e){const t=(this._refCounts.get(e)||0)+1;return this._refCounts.set(e,t),1===t?A.ADDED:A.UNCHANGED}_unreferenceFeature(e){const t=(this._refCounts.get(e)||0)-1;return 0===t?(this._refCounts.delete(e),A.REMOVED):(t>0&&this._refCounts.set(e,t),A.UNCHANGED)}get test(){return {tiles:Array.from(this._tiles.values()).map((e=>`${e.data.id}:[${Array.from(e.objectIds)}]`)),featureReferences:Array.from(this._refCounts.keys()).map((e=>`${e}:${this._refCounts.get(e)}`))}}};function C(e){return e.reduce(((e,t)=>e+S(t)),0)}function S(e){return 32+E(e.geometry)+t$3(e.attributes)}function E(e){if(null==e)return 0;const t=c$7(e.lengths,4);return 32+c$7(e.coords,8)+t}e$2([y({constructOnly:!0})],v.prototype,"featureStore",void 0),e$2([y()],v.prototype,"tileInfo",void 0),e$2([y()],v.prototype,"extent",void 0),e$2([y()],v.prototype,"maximumByteSize",void 0),v=e$2([c$4("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],v);class T{constructor(e,t,s,i){this.data=e,this.objectIds=t,this.byteSize=s,this.attributeKeys=i;}}let w$1 = class w{constructor(e,t,s){this.level=e,this.row=t,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null];}get hasChildren(){return !this.isLeaf&&(null!=this.children[0]||null!=this.children[1]||null!=this.children[2]||null!=this.children[3])}};class F{constructor(e,t=[]){this.missingTiles=t,this.fullArea=0,this.coveredArea=0,this.fullArea=l$1(e.extent),this.coveredArea=this.fullArea;}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea;}}let j$1 = class j{constructor(e,t,s){this._tileInfo=e,this._extent=null,this.info=new F(t),null!=s&&(this._extent=o$1(s));}addMissing(e,t,s,i){const r=new t$4(null,e,t,s);this._tileInfo.updateTileInfo(r,j$3.ExtrapolateOptions.POWER_OF_TWO),null==r.extent||null!=this._extent&&!E$1(this._extent,r.extent)||(this.info.missingTiles.push({data:r,resolution:i}),this.info.coveredArea-=l$1(r.extent));}};const b$1=.18751;var A;!function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED";}(A||(A={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let w=class extends o$4.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=L$1(),this._elevationAligner=i$2(),this._elevationFilter=r$3(),this._symbologyCandidatesFetcher=n(),this._updatingHandles=new h$1,this._editsUpdatingHandles=new h$1,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(e,t)=>{const i={query:e},r=await this.remoteClient.invoke("alignElevation",i,{signal:t});return s$1(t),r},this._getSymbologyCandidates=async(e,t)=>{const i={candidates:e,spatialReference:this._spatialReference.toJSON()},r=await this.remoteClient.invoke("getSymbologyCandidates",i,{signal:t});return s$1(t),r};}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){this._featureFetcher?.destroy(),this._queryEngine?.destroy(),this._featureStore?.clear();}async setup(e){if(this.destroyed)return {result:{}};const{geometryType:t,objectIdField:i,timeInfo:s,fieldsIndex:n}=e.serviceInfo,{hasZ:o}=e,l=f$2.fromJSON(e.spatialReference);this._spatialReference=l,this._featureStore=new m({...e.serviceInfo,hasZ:o,hasM:!1}),this._queryEngine=new $({spatialReference:e.spatialReference,featureStore:this._featureStore,geometryType:t,fieldsIndex:n,hasZ:o,hasM:!1,objectIdField:i,timeInfo:s}),this._featureFetcher=new x({store:new v({featureStore:this._featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:l,sourceSpatialReference:f$2.fromJSON(e.serviceInfo.spatialReference),customParameters:e.configuration.customParameters});const d="3d"===e.configuration.viewType;return this._elevationAligner=i$2(d,{elevationInfo:null!=e.elevationInfo?h$2.fromJSON(e.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures}),this._elevationFilter=r$3(d),this.addHandles([d$2((()=>this._featureFetcher.availability),(e=>this.emit("notify-availability",{availability:e})),C$1),d$2((()=>this.updating),(()=>this._notifyUpdating()))]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(e),j}async setSuspended(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),s$1(t),this._featureFetcher.suspended=e,j}async updateOutFields(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),s$1(t),this._featureFetcher.outFields=new Set(e??[]),j}async fetchCandidates(e,t){await this._whenSetup.promise,s$1(t);const i=b(e),r=t?.signal,n=await this._queryEngine.executeQueryForSnapping(i,r);s$1(r);const a=await this._elevationAligner.alignCandidates(n.candidates,f$2.fromJSON(e.point.spatialReference)??f$2.WGS84,r);s$1(r);const o=await this._symbologyCandidatesFetcher.fetch(a,r);s$1(r);const l=0===o.length?a:a.concat(o);return {result:{candidates:this._elevationFilter.filter(i,l)}}}async updateTiles(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),s$1(t),this._featureFetcher.tileSize=e.tileSize,this._featureFetcher.tilesOfInterest=e.tiles,this._featureFetcher.tileInfo=null!=e.tileInfo?j$3.fromJSON(e.tileInfo):null,j}async refresh(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),s$1(t),this._featureFetcher.refresh(),j}async whenNotUpdating(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),s$1(t),await w$4((()=>!this.updatingExcludingEdits),t),s$1(t),j}async getDebugInfo(e,t){return s$1(t),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(e,t){this._updatingHandles.addPromise(this._whenSetup.promise),s$1(t);const r=L$1();return this._pendingApplyEdits.set(e.id,r),this._featureFetcher.applyEdits(r.promise),this._editsUpdatingHandles.addPromise(r.promise),j}async endApplyEdits(e,t){const i=this._pendingApplyEdits.get(e.id);return i&&i.resolve(e.edits),s$1(t),j}async notifyElevationSourceChange(e,t){return this._elevationAligner.notifyElevationSourceChange(),j}async notifySymbologyChange(e,t){return this._symbologyCandidatesFetcher.notifySymbologyChange(),j}async setSymbologySnappingSupported(e){return this._symbologyCandidatesFetcher=n(e,this._getSymbologyCandidates),j}_updateFeatureFetcherConfiguration(e){this._featureFetcher.filter=null!=e.filter?b$3.fromJSON(e.filter):null,this._featureFetcher.customParameters=e.customParameters;}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating});}};e$2([y({readOnly:!0})],w.prototype,"updating",null),e$2([y({readOnly:!0})],w.prototype,"updatingExcludingEdits",null),e$2([y()],w.prototype,"_isInitializing",void 0),w=e$2([c$4("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],w);const I=w;function b(e){if(!e.filter)return {...e,query:{where:"1=1"}};const{distance:t,units:i,spatialRel:s,where:r,timeExtent:n,objectIds:a}=e.filter,o={geometry:e.filter.geometry?y$1(e.filter.geometry):void 0,distance:t,units:i,spatialRel:s,timeExtent:n,objectIds:a,where:r??"1=1"};return {...e,query:o}}const j={result:{}};

export { I as default };
