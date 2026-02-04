import { bk as f$1, hW as r, ak as u$1, U as U$1, jb as c, jc as a } from './main-B92PJIAd.js';
import './mat4f64-D1udxz0O.js';
import './computeTranslationToOriginAndRotation-EDQT600V.js';
import './sphere-Co8Bo282.js';
import { I } from './I3SBinaryReader-DE1MNEge.js';
import './symbolColorUtils-xh0zQT50.js';
import { O } from './orientedBoundingBox-C6qib7mQ.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e,n,t,a){return {x:e,y:n,z:t,hasZ:null!=t,hasM:!1,spatialReference:a,type:"point"}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
e(0,0,0,f$1.WGS84);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var A;!function(A){A[A.INVISIBLE=0]="INVISIBLE",A[A.TRANSPARENT=1]="TRANSPARENT",A[A.OPAQUE=2]="OPAQUE";}(A||(A={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function f(e){return {...g,...e,type:"solid"}}const g={color:r(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:A.OPAQUE,hasSlicePlane:!1};({color:r(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:A.OPAQUE,hasSlicePlane:!1});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
u$1();var F;async function $(t,r,o,n,i,a,s,l){const c=[];for(const e of r)if(e&&i.includes(e.name)){const r=`${t}/nodes/${o}/attributes/${e.key}/0`;c.push({url:r,storageInfo:e});}const u=await Promise.allSettled(c.map((t=>U$1(t.url,{responseType:"array-buffer",query:{...s,token:a},signal:l?.signal}).then((e=>I(t.storageInfo,e.data)))))),f=[];for(const e of n){const t={};for(let r=0;r<u.length;r++){const o=u[r];if("fulfilled"===o.status){const n=o.value;t[c[r].storageInfo.name]=Q(n,e);}}f.push(t);}return f}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE";}(F||(F={}));const z=-32768,V=-(2**31);function Q(e,t){if(!e)return null;const r=e[t];if(c(e))return r===z?null:r;if(a(e))return r===V?null:r;return r!=r?null:r}f({color:[0,0,0,0],opacity:0});u$1();u$1();new O;({data:new Array(72),size:3,exclusive:!0,stride:3});

export { $ };
