import { bl as d$1, bA as f$1, a1 as d$2, a_ as w$1, _ as _$1, ct as s, cu as r, G as n$1 } from './main-YSH8Qvd0.js';
import { $ } from './Mesh-DLEfVMwc.js';
import { N, o, i } from './MeshTransform-Cpze8LJ5.js';
import './preload-helper-dJJaZANz.js';
import './imageUtils-DweseGzr.js';
import './MeshVertexAttributes-BQErGVSn.js';
import './MeshLocalVertexSpace-CfZyzxtt.js';
import './meshVertexSpaceUtils-BWw2ChPZ.js';
import './earcut-1p-jfyBa.js';
import './DoubleArray-CgRM5UWL.js';
import './Indices-DHyj2YLw.js';
import './plane-vVLQS5YW.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './quatf64-C3zJJInI.js';
import './deduplicate-ZjD5ZJSd.js';
import './projection-dfTHVS_y.js';
import './spatialReferenceEllipsoidUtils-2MXwy-q2.js';
import './computeTranslationToOriginAndRotation-BzHnTzMb.js';
import './BufferView-Lo8NNSAL.js';
import './vec3-ClSyidte.js';
import './vec4-BZ4xuOzG.js';
import './vertexSpaceConversion-wpOs4rjM.js';
import './quat-DRT6PA5P.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const m=()=>n$1.getLogger("esri.rest.support.meshFeatureSet");function p(t,r,o){const n=o.features;o.features=[],delete o.geometryType;const s=d$1.fromJSON(o);if(s.geometryType="mesh",!o.assetMaps)return s;const i=d(r,o.assetMaps),u=t.sourceSpatialReference??f$1.WGS84,f=o.globalIdFieldName,{outFields:c}=t,m=null!=c&&c.length>0?g(c.includes("*")?null:new Set(c)):()=>({});for(const a of n){const t=y(a,f,u,r,i);s.features.push(new d$2({geometry:t,attributes:m(a)}));}return s}function g(e){return ({attributes:t})=>{if(!t)return {};if(!e)return t;for(const r in t)e.has(r)||delete t[r];return t}}function y(e,t,r,s,a){const i=e.attributes[t],u=a.get(i);if(null==u||!e.geometry)return null;const f=E(e,r,s),c=w$1.fromJSON(e.geometry);c.spatialReference=r;const l=h(e.attributes,s),m=r.isGeographic?"local":"georeferenced",p=D(u);return p?$.createWithExternalSource(f,p,{extent:c,transform:l,vertexSpace:m}):$.createIncomplete(f,{extent:c,transform:l,vertexSpace:m})}function E({attributes:e},t,{transformFieldRoles:r}){const o=e[r.originX],n=e[r.originY],a=e[r.originZ];return new _$1({x:o,y:n,z:a,spatialReference:t})}function h(e,{transformFieldRoles:t}){return new N({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotationAxis:[e[t.rotationX],-e[t.rotationZ],e[t.rotationY]],rotationAngle:e[t.rotationDeg],scale:[e[t.scaleX],e[t.scaleZ],e[t.scaleY]]})}var S;function d(e,t){const o=new Map;for(const n of t){const t=n.parentGlobalId;if(null==t)continue;const s$1=n.assetName,a=n.assetType,i=n.assetHash,u=n.assetURL,f=n.conversionStatus,l=n.seqNo,p=s(a,e.supportedFormats);if(!p){m().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${a}, but it does not list it as a supported type`);continue}const g=r(o,t,(()=>({files:new Map})));r(g.files,s$1,(()=>({name:s$1,type:a,mimeType:p,status:M(f),parts:[]}))).parts[l]={hash:i,url:u};}return o}function D(e){const t=Array.from(e.files.values()),r=new Array;for(const o$1 of t){if(o$1.status!==S.COMPLETED)return null;const e=new Array;for(const t of o$1.parts){if(!t)return null;e.push(new o(t.url,t.hash));}r.push(new i(o$1.name,o$1.mimeType,e));}return r}function M(e){switch(e){case"COMPLETED":case"SUBMITTED":return S.COMPLETED;case"INPROGRESS":return S.PENDING;default:return S.FAILED}}!function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED";}(S||(S={}));

export { d as assetMapFromAssetMapsJSON, y as extractMesh, p as meshFeatureSetFromJSON };
