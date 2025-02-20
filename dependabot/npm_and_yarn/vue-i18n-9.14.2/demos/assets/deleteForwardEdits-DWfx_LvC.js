import { s, cp as f, cq as i, cr as s$1, U } from './main-C4Zge2Yj.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function e(e,n,m,a){if(!n)throw new s("post:missing-guid","guid for version is missing");const u=f(e),d=m.toJSON(),f$1=i(u.query,{query:s$1({...d,f:"json"}),...a,method:"post"});n.startsWith("{")&&(n=n.slice(1,-1));const p=`${u.path}/versions/${n}/deleteForwardEdits`,{data:c}=await U(p,f$1);return c}

export { e as deleteForwardEdits };
