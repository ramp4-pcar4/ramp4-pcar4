import { s, b_ as f, b$ as n, c0 as s$1, U as U$1 } from './main-BpBTVFw9.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function e(e,n$1,m,u){if(!n$1)throw new s("post:missing-guid","guid for version is missing");const a=f(e),c=m.toJSON(),d=n(a.query,{query:s$1({...c,f:"json"}),...u,method:"post"});n$1.startsWith("{")&&(n$1=n$1.slice(1,-1));const f$1=`${a.path}/versions/${n$1}/deleteForwardEdits`,{data:p}=await U$1(f$1,d);return p.success}

export { e as deleteForwardEdits };
