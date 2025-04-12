const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-C9nf8Xyv.js","./geometryEngineBase-B1c0NMch.js","./main-48Jy8Lgr.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css","./json-Beimr7gP.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { kx as It, da as e$3, ky as x$2, kz as $, kA as H, kB as U$1, k4 as at, k3 as ht, fS as M$1, kC as y$2, a7 as G$2, Z as L$1, kD as x$3, a9 as w$1, fT as W, q, dJ as I$2, df as N$1, eY as s$1, kE as l$2, a2 as R$2, eO as y$3, ag as m$1, aq as f$3, ar as s$2, be as H$1, kF as X, a6 as A, cY as g$3, kG as o$2, kH as Z, dh as K, kI as t$4, kJ as r$2, s as s$3, cE as p$1 } from './main-48Jy8Lgr.js';
import { t as t$3 } from './json-Beimr7gP.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const u$2=new e$3,f$2=new e$3,m=new e$3,c$1={esriGeometryPoint:x$2,esriGeometryPolyline:$,esriGeometryPolygon:H,esriGeometryMultipoint:U$1};function y$1(r,t,o,i=r.hasZ,s=r.hasM){if(null==t)return null;const l=r.hasZ&&i,u=r.hasM&&s;if(o){const f=at(m,t,r.hasZ,r.hasM,"esriGeometryPoint",o,i,s);return x$2(f,l,u)}return x$2(t,l,u)}function a(e,o,i,s,l,y,a=o,h=i){const p=o&&a,G=i&&h,g=null!=s?"coords"in s?s:s.geometry:null;if(null==g)return null;if(l){let t=ht(f$2,g,o,i,e,l,a,h);return y&&(t=at(m,t,p,G,e,y)),c$1[e]?.(t,p,G)??null}if(y){const r=at(m,g,o,i,e,y,a,h);return c$1[e]?.(r,p,G)??null}return It(u$2,g,o,i,a,h),c$1[e]?.(u$2,p,G)??null}function h$2(n){return n&&p in n?JSON.parse(JSON.stringify(n,G$1)):n}const p="_geVersion",G$1=(n,e)=>n!==p?e:void 0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t$2(t,n){return t?n?4:3:n?3:2}function n$2(n,I,u,o){if(!I?.lengths.length)return null;n.lengths.length&&(n.lengths.length=0),n.coords.length&&(n.coords.length=0);const N=n.coords,l=[],s=u?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:T}=I,f=t$2(u,o);let h=0;for(const t of c){const n=e$2(s,T,h,t,u,o);n&&l.push(n),h+=t*f;}if(l.sort(((t,n)=>{let e=t[2]-n[2];return 0===e&&u&&(e=t[4]-n[4]),e})),l.length){let t=6*l[0][2];N[0]=l[0][0]/t,N[1]=l[0][1]/t,u&&(t=6*l[0][4],N[2]=0!==t?l[0][3]/t:0),(N[0]<s[0]||N[0]>s[1]||N[1]<s[2]||N[1]>s[3]||u&&(N[2]<s[4]||N[2]>s[5]))&&(N.length=0);}if(!N.length){const t=I.lengths[0]?r$1(T,0,c[0],u,o):null;if(!t)return null;N[0]=t[0],N[1]=t[1],u&&t.length>2&&(N[2]=t[2]);}return n}function e$2(n,e,r,I,u,o){const N=t$2(u,o);let l=r,s=r+N,c=0,T=0,f=0,h=0,i=0;for(let t=0,g=I-1;t<g;t++,l+=N,s+=N){const t=e[l],r=e[l+1],I=e[l+2],o=e[s],N=e[s+1],E=e[s+2];let g=t*N-o*r;h+=g,c+=(t+o)*g,T+=(r+N)*g,u&&(g=t*E-o*I,f+=(I+E)*g,i+=g),t<n[0]&&(n[0]=t),t>n[1]&&(n[1]=t),r<n[2]&&(n[2]=r),r>n[3]&&(n[3]=r),u&&(I<n[4]&&(n[4]=I),I>n[5]&&(n[5]=I));}if(h>0&&(h*=-1),i>0&&(i*=-1),!h)return null;const E=[c,T,.5*h];return u&&(E[3]=f,E[4]=.5*i),E}function r$1(n,e,r,l,s){const c=t$2(l,s);let T=e,f=e+c,h=0,i=0,E=0,g=0;for(let t=0,b=r-1;t<b;t++,T+=c,f+=c){const t=n[T],e=n[T+1],r=n[T+2],s=n[f],c=n[f+1],b=n[f+2],m=l?u$1(t,e,r,s,c,b):I$1(t,e,s,c);if(m)if(h+=m,l){const n=N(t,e,r,s,c,b);i+=m*n[0],E+=m*n[1],g+=m*n[2];}else {const n=o$1(t,e,s,c);i+=m*n[0],E+=m*n[1];}}return h>0?l?[i/h,E/h,g/h]:[i/h,E/h]:r>0?l?[n[e],n[e+1],n[e+2]]:[n[e],n[e+1]]:null}function I$1(t,n,e,r){const I=e-t,u=r-n;return Math.sqrt(I*I+u*u)}function u$1(t,n,e,r,I,u){const o=r-t,N=I-n,l=u-e;return Math.sqrt(o*o+N*N+l*l)}function o$1(t,n,e,r){return [t+.5*(e-t),n+.5*(r-n)]}function N(t,n,e,r,I,u){return [t+.5*(r-t),n+.5*(I-n),e+.5*(u-e)]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const c=[0,0];function h$1(s,t){if(!t)return null;if("x"in t){const e={x:0,y:0};return [e.x,e.y]=s(t.x,t.y,c),null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}if("xmin"in t){const e={xmin:0,ymin:0,xmax:0,ymax:0};return [e.xmin,e.ymin]=s(t.xmin,t.ymin,c),[e.xmax,e.ymax]=s(t.xmax,t.ymax,c),t.hasZ&&(e.zmin=t.zmin,e.zmax=t.zmax,e.hasZ=!0),t.hasM&&(e.mmin=t.mmin,e.mmax=t.mmax,e.hasM=!0),e}return "rings"in t?{rings:l$1(t.rings,s),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:l$1(t.paths,s),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:f$1(t.points,s),hasM:t.hasM,hasZ:t.hasZ}:null}function l$1(s,t){const e=[];for(const n of s)e.push(f$1(n,t));return e}function f$1(s,t){const e=[];for(const n of s){const s=t(n[0],n[1],[0,0]);e.push(s),n.length>2&&s.push(n[2]),n.length>3&&s.push(n[3]);}return e}async function x$1(t,n){if(!t||!n)return;const r=Array.isArray(t)?t.map((s=>null!=s.geometry?s.geometry.spatialReference:null)).filter(q):[t];await I$2(r.map((s=>({source:s,dest:n}))));}const y=h$1.bind(null,M$1),g$2=h$1.bind(null,y$2);function j$2(s,t,e,m){if(!s)return s;if(e||(e=t,t=s.spatialReference),!N$1(t)||!N$1(e)||G$2(t,e))return s;if(x$3(t,e)){const t=w$1(e)?y(s):g$2(s);return t.spatialReference=e,t}return W(t$3,[s],t,e,null,m)[0]}class _{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this);}async push(s,e,n,r){if(!s?.length||!e||!n||G$2(e,n))return s;const i={geometries:s,inSpatialReference:e,outSpatialReference:n,geographicTransformation:r,resolve:L$1()};return this._jobs.push(i),this._timer??=setTimeout(this._process,10),i.resolve.promise}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:t,inSpatialReference:e,outSpatialReference:i,resolve:o,geographicTransformation:m}=s;x$3(e,i)?w$1(i)?o(t.map(y)):o(t.map(g$2)):o(W(t$3,t,e,i,m,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10));}}const M=new _;function b(s,t,e,n){return M.push(s,t,e,n)}

const R$1=new s$1({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),g$1=Object.freeze({});async function S$1(e,t,i){const{outFields:r,orderByFields:n,groupByFieldsForStatistics:o,outStatistics:s}=e;if(r)for(let a=0;a<r.length;a++)r[a]=r[a].trim();if(n)for(let a=0;a<n.length;a++)n[a]=n[a].trim();if(o)for(let a=0;a<o.length;a++)o[a]=o[a].trim();if(s)for(let a=0;a<s.length;a++)s[a].onStatisticField&&(s[a].onStatisticField=s[a].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),j$1(e,t,i)}async function j$1(e,t,i){if(!e)return null;let{where:o}=e;if(e.where=o=o?.trim(),(!o||/^1 *= *1$/.test(o)||t&&t===o)&&(e.where=null),!e.geometry)return e;let s=await d(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;s=l$2(s),s.spatialReference=t;}if(s){await x$1(s.spatialReference,i),s=x(s,i);const t=(await R$2(y$3(s)))[0];if(null==t)throw g$1;const r="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,o=r&&w(s,i)?{densificationStep:8*r}:void 0,a=t.toJSON(),m=j$2(a,a.spatialReference,i,o);if(!m)throw g$1;m.spatialReference=i,e.geometry=m;}return e}function w(e,t){if(!e)return !1;const r=e.spatialReference;return (m$1(e)||f$3(e)||s$2(e))&&!G$2(r,t)&&!H$1(r,t)}function x(e,t){const i=e.spatialReference;return w(e,t)&&m$1(e)?{spatialReference:i,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function d(e){const{distance:i,units:r}=e,n=e.geometry;if(null==i||"vertexAttributes"in n)return n;const o=n.spatialReference,s=r?R$1.fromJSON(r):X(o),a=o&&(A(o)||w$1(o))?n:await x$1(o,g$3).then((()=>j$2(n,g$3)));return (await U())(a.spatialReference,a,i,s)}async function U(){return (await __vitePreload(async () => { const {geodesicBuffer} = await import('./geometryEngineJSON-C9nf8Xyv.js').then(n => n.g);return { geodesicBuffer }},true?__vite__mapDeps([0,1,2,3,4,5]):void 0,import.meta.url)).geodesicBuffer}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function s(s){return "mesh"===s?o$2:Z(s)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n$1(n,t){return n?t?4:3:t?3:2}function t$1(n,t,r,e){return o(n,t,r,e.coords[0],e.coords[1])}function r(t,r,e,c,u,f){const s=n$1(u,f),{coords:i,lengths:l}=c;if(!l)return !1;for(let n=0,d=0;n<l.length;n++,d+=s)if(!o(t,r,e,i[d],i[d+1]))return !1;return !0}function o(t,r,o,c,u){if(!t)return !1;const f=n$1(r,o),{coords:s,lengths:i}=t;let l=!1,d=0;for(const n of i)l=e$1(l,s,f,d,n,c,u),d+=n*f;return l}function e$1(n,t,r,o,e,c,u){let f=n,s=o;for(let i=o,l=o+e*r;i<l;i+=r){s=i+r,s===l&&(s=o);const n=t[i],e=t[i+1],d=t[s],g=t[s+1];(e<u&&g>=u||g<u&&e>=u)&&n+(u-e)/(g-e)*(d-n)<c&&(f=!f);}return f}

const f="unsupported-query",R={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},S={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function G(e){return null!=e&&!0===S.spatialRelationship[e]}function g(e){return null!=e&&!0===S.queryGeometry[p$1(e)]}function j(e){return null!=e&&!0===S.layerGeometry[e]}function h(){return __vitePreload(() => import('./geometryEngineJSON-C9nf8Xyv.js').then(n => n.g),true?__vite__mapDeps([0,1,2,3,4,5]):void 0,import.meta.url)}function v(e,n,l,c,f){if(f$3(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=K(new e$3,n,!1,!1);return Promise.resolve((r=>t$1(e,!1,!1,r)))}if(f$3(n)&&"esriGeometryMultipoint"===l){const r$1=K(new e$3,n,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>r(r$1,!1,!1,e,c,f)))}if(m$1(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>t$4(n,a(l,c,f,e))));if(m$1(n)&&"esriGeometryMultipoint"===l&&"esriSpatialRelContains"===e)return Promise.resolve((e=>r$2(n,a(l,c,f,e))));if(m$1(n)&&"esriSpatialRelIntersects"===e){const e=s(l);return Promise.resolve((r=>e(n,a(l,c,f,r))))}return h().then((r=>{const t=r[R[e]].bind(null,n.spatialReference,n);return e=>t(a(l,c,f,e))}))}async function P(r,t,i){const{spatialRel:s,geometry:o}=r;if(o){if(!G(s))throw new s$3(f,"Unsupported query spatial relationship",{query:r});if(N$1(o.spatialReference)&&N$1(i)){if(!g(o))throw new s$3(f,"Unsupported query geometry type",{query:r});if(!j(t))throw new s$3(f,"Unsupported layer geometry type",{query:r});if(r.outSR)return x$1(r.geometry?.spatialReference,r.outSR)}}}function I(e){if(m$1(e))return !0;if(f$3(e)){for(const r of e.rings){if(5!==r.length)return !1;if(r[0][0]!==r[1][0]||r[0][0]!==r[4][0]||r[2][0]!==r[3][0]||r[0][1]!==r[3][1]||r[0][1]!==r[4][1]||r[1][1]!==r[2][1])return !1}return !0}return !1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function n(n,t){if(!n)return null;const l=t.featureAdapter,{startTimeField:u,endTimeField:e}=n;let r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(u&&e)await t.forEach((n=>{const t=l.getAttribute(n,u),o=l.getAttribute(n,e);null==t||isNaN(t)||(r=Math.min(r,t)),null==o||isNaN(o)||(i=Math.max(i,o));}));else {const n=u||e;await t.forEach((t=>{const u=l.getAttribute(t,n);null==u||isNaN(u)||(r=Math.min(r,u),i=Math.max(i,u));}));}return {start:r,end:i}}function t(n,t,r){if(!t||!n)return null;const{startTimeField:i,endTimeField:o}=n;if(!i&&!o)return null;const{start:s,end:a}=t;if(null===s&&null===a)return null;if(void 0===s&&void 0===a)return e();const c=r.getAttributeAsTimestamp?.bind(r)??r.getAttribute.bind(r);return i&&o?l(c,i,o,s,a):u(c,i||o,s,a)}function l(n,t,l,u,e){return null!=u&&null!=e?r=>{const i=n(r,t),o=n(r,l);return (null==i||i<=e)&&(null==o||o>=u)}:null!=u?t=>{const e=n(t,l);return null==e||e>=u}:null!=e?l=>{const u=n(l,t);return null==u||u<=e}:void 0}function u(n,t,l,u){return null!=l&&null!=u&&l===u?u=>n(u,t)===l:null!=l&&null!=u?e=>{const r=n(e,t);return null!=r&&r>=l&&r<=u}:null!=l?u=>{const e=n(u,t);return null!=e&&e>=l}:null!=u?l=>{const e=n(l,t);return null!=e&&e<=u}:void 0}function e(){return ()=>!1}

export { I, P, S$1 as S, a, j$1 as b, n as c, b as d, g$1 as g, h$2 as h, j$2 as j, n$2 as n, t, v, x$1 as x, y$1 as y };
