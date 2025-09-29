import { et as r, dh as t$1, aa as u, E, U as U$1, js as u$1, jt as a, t as t$3, r as r$2, n as r$3, dL as w$1, H as He, A as x, B as b } from './main-5658cd6e.js';
import './mat3f64-f0e5b33e.js';
import './mat4f64-151d6b53.js';
import './quat-1e678ab0.js';
import { r as r$1, e as e$1, I } from './I3SBinaryReader-3bdc6384.js';
import './spatialReferenceEllipsoidUtils-44af14ac.js';
import './symbolColorUtils-800e4542.js';
import { e } from './quatf64-3a66031a.js';
import { t as t$2 } from './vec3f32-b6e01a26.js';
import './plane-24781149.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const t={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
var A;!function(A){A[A.INVISIBLE=0]="INVISIBLE",A[A.TRANSPARENT=1]="TRANSPARENT",A[A.OPAQUE=2]="OPAQUE";}(A||(A={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function m(e){return {...g,...e,type:"solid"}}const g={color:r(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:A.OPAQUE,hasSlicePlane:!1};({color:r(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:A.OPAQUE,hasSlicePlane:!1});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function N(e$1=[0,0,0],t=[-1,-1,-1],a=e()){return {center:t$1(e$1),halfSize:t$2(t),quaternion:r$1(a)}}(()=>{const e=new Int8Array(162);let t=0;const a=a=>{for(let n=0;n<a.length;n++)e[t+n]=a[n];t+=6;};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),e})();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
u();var re;function ue(t,r,n,o,a){const i=[];for(const e of r)if(e&&a.includes(e.name)){const r=`${t}/nodes/${n}/attributes/${e.key}/0`;i.push({url:r,storageInfo:e});}return E(i.map((t=>U$1(t.url,{responseType:"array-buffer"}).then((e=>I(t.storageInfo,e.data)))))).then((e=>{const t=[];for(const r of o){const n={};for(let t=0;t<e.length;t++){const o=e[t].value;null!=o&&(n[i[t].storageInfo.name]=me(o,r));}t.push(n);}return t}))}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE";}(re||(re={}));const fe=-32768,pe=-(2**31);function me(e,t){if(!e)return null;const r=e[t];if(u$1(e))return r===fe?null:r;if(a(e))return r===pe?null:r;return r!=r?null:r}m({color:[0,0,0,0],opacity:0});new Array(24);e$1();u();u();N();({data:new Array(72),size:3,exclusive:!0,stride:3});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class l{constructor(t,r,e,a){this._parsedUrl=t,this._portalItem=r,this._apiKey=e,this.signal=a,this._rootDocument=null;const i=this._parsedUrl?.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);i&&(this._urlParts={root:i[1],layerId:parseInt(i[2],10)});}async fetch(){if(!this._urlParts)return null;const t=this._portalItem??await this._portalItemFromServiceItemId();if(t$3(t))return this._loadFromUrl();const r=await this._findAndLoadRelatedPortalItem(t);return t$3(r)?null:this._loadFeatureLayerFromPortalItem(r)}async fetchPortalItem(){if(!this._urlParts)return null;const t=this._portalItem??await this._portalItemFromServiceItemId();return t$3(t)?null:this._findAndLoadRelatedPortalItem(t)}async _fetchRootDocument(){if(r$2(this._rootDocument))return this._rootDocument;if(t$3(this._urlParts))return this._rootDocument={},{};const t={query:{f:"json",token:this._apiKey},responseType:"json",signal:this.signal},i=`${this._urlParts.root}/SceneServer`;try{const e=await U$1(i,t);this._rootDocument=e.data;}catch{this._rootDocument={};}return this._rootDocument}async _fetchServiceOwningPortalUrl(){const e=this._parsedUrl?.path,a=e?r$3?.findServerInfo(e):null;if(a?.owningSystemUrl)return a.owningSystemUrl;const s=e?e.replace(/(.*\/rest)\/.*/i,"$1")+"/info":null;try{const t=(await U$1(s,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(n){w$1(n);}return null}async _findAndLoadRelatedPortalItem(t){try{return (await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(r){return w$1(r),null}}async _loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const r=await this._findMatchingAssociatedSublayerUrl(t.url??"");return new He({url:r,portalItem:t}).load({signal:this.signal})}async _loadFromUrl(){const t=await this._findMatchingAssociatedSublayerUrl(`${this._urlParts?.root}/FeatureServer`);return new He({url:t}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(t){const e=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),a={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},i=this._urlParts?.layerId,s=this._fetchRootDocument(),n=U$1(e,a),[o,l]=await Promise.all([n,s]),c=l&&l.layers,u=o.data&&o.data.layers;if(!Array.isArray(u))throw new Error("expected layers array");if(Array.isArray(c))for(let r=0;r<Math.min(c.length,u.length);r++){if(c[r].id===i)return `${e}/${u[r].id}`}else if(null!=i&&i<u.length)return `${e}/${u[i].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const t=(await this._fetchRootDocument()).serviceItemId;if(!t)return null;const r=new x({id:t,apiKey:this._apiKey}),e=await this._fetchServiceOwningPortalUrl();r$2(e)&&(r.portal=new b({url:e}));try{return r.load({signal:this.signal})}catch(s){return w$1(s),null}}}

export { l, t, ue as u };
