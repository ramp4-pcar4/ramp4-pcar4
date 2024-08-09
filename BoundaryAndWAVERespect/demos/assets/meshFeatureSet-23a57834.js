import { b6 as d$1, bl as f$1, a5 as c, aI as M, G as x$1, c4 as s, c5 as r, J as s$1 } from './main-23ddedaa.js';
import { $ } from './Mesh-c28c9f79.js';
import { d as d$2 } from './georeference-06640ffd.js';
import { o, i } from './External-a8853759.js';
import './preload-helper-a4975f27.js';
import './imageUtils-4410d348.js';
import './MeshLocalVertexSpace-556581f7.js';
import './meshVertexSpaceUtils-44c013b8.js';
import './vec3-ec4553bd.js';
import './earcut-62f1f400.js';
import './DoubleArray-a35c474a.js';
import './Indices-d19aafbf.js';
import './deduplicate-3ff9fc02.js';
import './plane-28d6ca2f.js';
import './mat3f64-3fe11525.js';
import './mat4f64-b32e2490.js';
import './quatf64-137a8dbb.js';
import './triangle-d357d2aa.js';
import './Util-4ff81b33.js';
import './ObjectStack-59d4ce63.js';
import './lineSegment-386c4185.js';
import './basicInterfaces-f85cdac5.js';
import './VertexAttribute-66b2103c.js';
import './quat-8760a9af.js';
import './computeTranslationToOriginAndRotation-3cc900c7.js';
import './BufferView-e0d28041.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const m=()=>s$1.getLogger("esri.rest.support.meshFeatureSet");function p(t,r,o){const n=o.features;o.features=[],delete o.geometryType;const s=d$1.fromJSON(o);if(s.geometryType="mesh",!o.assetMaps)return s;const i=S(r,o.assetMaps),u=t.sourceSpatialReference??f$1.WGS84,f=o.globalIdFieldName,{outFields:c$1}=t,m=null!=c$1&&c$1.length>0?g(c$1.includes("*")?null:new Set(c$1)):()=>({});for(const a of n){const t=h(a,f,u,r,i);null!=t&&s.features.push(new c({geometry:t,attributes:m(a)}));}return s}function g(e){return ({attributes:t})=>{if(!t)return {};if(!e)return t;for(const r in t)e.has(r)||delete t[r];return t}}function h(e,t,r,s,a){const i=e.attributes[t],u=a.get(i);if(null==u)return m().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",e),null;if(!e.geometry)return m().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",e),null;const f=y(e,r,s),c=M.fromJSON(e.geometry);c.spatialReference=r;const l=E(e.attributes,s),p=r.isGeographic?"local":"georeferenced",g=w(u);return g?$.createWithExternalSource(f,g,{extent:c,transform:l,vertexSpace:p}):$.createIncomplete(f,{extent:c,transform:l,vertexSpace:p})}function y({attributes:e},t,{transformFieldRoles:r}){const o=e[r.originX],n=e[r.originY],a=e[r.originZ];return new x$1({x:o,y:n,z:a,spatialReference:t})}function E(e,{transformFieldRoles:t}){return new d$2({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotationAxis:[e[t.rotationX],-e[t.rotationZ],e[t.rotationY]],rotationAngle:e[t.rotationDeg],scale:[e[t.scaleX],e[t.scaleZ],e[t.scaleY]]})}var d;function S(e,t){const o=new Map;for(const n of t){const t=n.parentGlobalId;if(null==t)continue;const s$1=n.assetName,a=n.assetType,i=n.assetHash,u=n.assetURL,f=n.conversionStatus,l=n.seqNo,p=s(a,e.supportedFormats);if(!p){m().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${a}, but it does not list it as a supported type`);continue}const g=r(o,t,(()=>({files:new Map})));r(g.files,s$1,(()=>({name:s$1,type:a,mimeType:p,status:D(f),parts:[]}))).parts[l]={hash:i,url:u};}return o}function w(e){const t=Array.from(e.files.values()),r=new Array;for(const o$1 of t){if(o$1.status!==d.COMPLETED)return null;const e=new Array;for(const t of o$1.parts){if(!t)return null;e.push(new o(t.url,t.hash));}r.push(new i(o$1.name,o$1.mimeType,e));}return r}function D(e){switch(e){case"COMPLETED":case"SUBMITTED":return d.COMPLETED;case"INPROGRESS":return d.PENDING;default:return d.FAILED}}!function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED";}(d||(d={}));

export { S as assetMapFromAssetMapsJSON, h as extractMesh, p as meshFeatureSetFromJSON };
