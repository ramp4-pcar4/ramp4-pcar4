import { b8 as t, U as U$1, f3 as d$1, b9 as f, bb as x } from './main-5658cd6e.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function o(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o.outFields&&!t?.returnCountOnly?o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","):delete o.outFields,o.outSpatialReference&&(o.outSR=o.outSR.wkid||JSON.stringify(o.outSR.toJSON()),delete o.outSpatialReference),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function r(e,t,o){const r=await s(e,t,o),n=r.data,a=n.geometryType,d=n.spatialReference,c={};for(const s of n.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:d,hasZ:!!n.hasZ,hasM:!!n.hasM,features:s.relatedRecords};if(null!=s.objectId)c[s.objectId]=e;else for(const t in s)s.hasOwnProperty(t)&&"relatedRecords"!==t&&(c[s[t]]=e);}return {...r,data:c}}async function n$1(e,t,o){const r=await s(e,t,o,{returnCountOnly:!0}),n=r.data,a={};for(const s of n.relatedRecordGroups)null!=s.objectId&&(a[s.objectId]=s.count);return {...r,data:a}}async function s(r,n,s={},a){const d=t({...r.query,f:"json",...a,...o(n,a)});return U$1(r.path+"/queryRelatedRecords",{...s,query:{...s.query,...d}})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function n(e,n,u){n=d$1.from(n);const a=f(e);return r(a,n,u).then((t=>{const r=t.data,e={};return Object.keys(r).forEach((t=>e[t]=x.fromJSON(r[t]))),e}))}async function u(r,o,n){o=d$1.from(o);const u=f(r);return n$1(u,o,{...n}).then((t=>t.data))}

export { n as executeRelationshipQuery, u as executeRelationshipQueryForCount };
