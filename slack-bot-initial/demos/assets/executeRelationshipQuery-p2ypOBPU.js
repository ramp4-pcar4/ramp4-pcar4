import { cB as t, U as U$1, cF as d, fQ as d$1, b_ as f, b5 as d$2 } from './main-h0RsJOaN.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function r(e,o){const r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),r.outFields&&!o?.returnCountOnly?r.outFields.includes("*")?r.outFields="*":r.outFields=r.outFields.join(","):delete r.outFields,r.outSR&&(r.outSR=d(r.outSR)),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function s(e,t,o){const r=await a(e,t,o),s=r.data,n=s.geometryType,d=s.spatialReference,c={};for(const a of s.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:n,spatialReference:d,hasZ:!!s.hasZ,hasM:!!s.hasM,features:a.relatedRecords};if(null!=a.objectId)c[a.objectId]=e;else for(const t of Object.keys(a))"relatedRecords"!==t&&(c[a[t]]=e);}return {...r,data:c}}async function n$1(e,t,o){const r=await a(e,t,o,{returnCountOnly:!0}),s=r.data,n={};for(const a of s.relatedRecordGroups)null!=a.objectId&&(n[a.objectId]=a.count);return {...r,data:n}}async function a(t$1,s,n={},a){const d=t({...t$1.query,f:"json",...a,...r(s,a)});return U$1(t$1.path+"/queryRelatedRecords",{...n,query:{...n.query,...d}})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function n(e,n,u){n=d$1.from(n);const a=f(e);return s(a,n,u).then((t=>{const r=t.data,e={};return Object.keys(r).forEach((t=>e[t]=d$2.fromJSON(r[t]))),e}))}async function u(r,o,n){o=d$1.from(o);const u=f(r);return n$1(u,o,{...n}).then((t=>t.data))}

export { n as executeRelationshipQuery, u as executeRelationshipQueryForCount };
