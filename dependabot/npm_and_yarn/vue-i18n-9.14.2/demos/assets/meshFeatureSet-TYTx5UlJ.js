import { bl as d$1, bA as f$1, a1 as d$2, a_ as w$1, _ as _$1, ct as s, cu as r, G as n$1 } from './main-C4Zge2Yj.js';
import { $ } from './Mesh-CPYTk9qm.js';
import { N, o, i } from './MeshTransform-BC3PNS0Y.js';
import './preload-helper-dJJaZANz.js';
import './imageUtils-Dsd6kVhO.js';
import './MeshVertexAttributes-B2rPWawN.js';
import './MeshLocalVertexSpace-CHFgsj5E.js';
import './meshVertexSpaceUtils-B9_haoxH.js';
import './earcut-Dk31jkT2.js';
import './DoubleArray-DvEtFJ2d.js';
import './Indices-DH7cz4sM.js';
import './plane-DGHORVnF.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './quatf64-C3zJJInI.js';
import './deduplicate-qSbVREH-.js';
import './projection-D4k9GpuV.js';
import './spatialReferenceEllipsoidUtils-Ew1iLS3I.js';
import './computeTranslationToOriginAndRotation-V-PHwmDT.js';
import './BufferView-Bl5B52S_.js';
import './vec3-C4rWi5eU.js';
import './vec4-rU8s-TOk.js';
import './vertexSpaceConversion-D48ElOkl.js';
import './quat-Dj4-FOYY.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const m=()=>n$1.getLogger("esri.rest.support.meshFeatureSet");function p(t,r,o){const n=o.features;o.features=[],delete o.geometryType;const s=d$1.fromJSON(o);if(s.geometryType="mesh",!o.assetMaps)return s;const i=d(r,o.assetMaps),u=t.sourceSpatialReference??f$1.WGS84,f=o.globalIdFieldName,{outFields:c}=t,m=null!=c&&c.length>0?g(c.includes("*")?null:new Set(c)):()=>({});for(const a of n){const t=y(a,f,u,r,i);s.features.push(new d$2({geometry:t,attributes:m(a)}));}return s}function g(e){return ({attributes:t})=>{if(!t)return {};if(!e)return t;for(const r in t)e.has(r)||delete t[r];return t}}function y(e,t,r,s,a){const i=e.attributes[t],u=a.get(i);if(null==u||!e.geometry)return null;const f=E(e,r,s),c=w$1.fromJSON(e.geometry);c.spatialReference=r;const l=h(e.attributes,s),m=r.isGeographic?"local":"georeferenced",p=D(u);return p?$.createWithExternalSource(f,p,{extent:c,transform:l,vertexSpace:m}):$.createIncomplete(f,{extent:c,transform:l,vertexSpace:m})}function E({attributes:e},t,{transformFieldRoles:r}){const o=e[r.originX],n=e[r.originY],a=e[r.originZ];return new _$1({x:o,y:n,z:a,spatialReference:t})}function h(e,{transformFieldRoles:t}){return new N({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotationAxis:[e[t.rotationX],-e[t.rotationZ],e[t.rotationY]],rotationAngle:e[t.rotationDeg],scale:[e[t.scaleX],e[t.scaleZ],e[t.scaleY]]})}var S;function d(e,t){const o=new Map;for(const n of t){const t=n.parentGlobalId;if(null==t)continue;const s$1=n.assetName,a=n.assetType,i=n.assetHash,u=n.assetURL,f=n.conversionStatus,l=n.seqNo,p=s(a,e.supportedFormats);if(!p){m().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${a}, but it does not list it as a supported type`);continue}const g=r(o,t,(()=>({files:new Map})));r(g.files,s$1,(()=>({name:s$1,type:a,mimeType:p,status:M(f),parts:[]}))).parts[l]={hash:i,url:u};}return o}function D(e){const t=Array.from(e.files.values()),r=new Array;for(const o$1 of t){if(o$1.status!==S.COMPLETED)return null;const e=new Array;for(const t of o$1.parts){if(!t)return null;e.push(new o(t.url,t.hash));}r.push(new i(o$1.name,o$1.mimeType,e));}return r}function M(e){switch(e){case"COMPLETED":case"SUBMITTED":return S.COMPLETED;case"INPROGRESS":return S.PENDING;default:return S.FAILED}}!function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED";}(S||(S={}));

export { d as assetMapFromAssetMapsJSON, y as extractMesh, p as meshFeatureSetFromJSON };
