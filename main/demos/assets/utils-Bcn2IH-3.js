const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./symbolLayerUtils-D-CBX4iI.js","./preload-helper-ExcqyqRp.js","./main-Bd_03BNf.js","./main-gKmidBZg.css","./LRUCache-k4-1Y9qe.js","./MemCache-Cs6lXDo9.js"])))=>i.map(i=>d[i]);
import{_ as w}from"./preload-helper-ExcqyqRp.js";import{aM as a,f as y,eZ as m,e_ as d,e$ as g,f0 as k}from"./main-Bd_03BNf.js";import"./parser-C-4pkZvD.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BPDfjts0.js";import{C as L}from"./cimSymbolUtils-FRrCOAn8.js";import{e as z}from"./LRUCache-k4-1Y9qe.js";import"./defaultCIMValues--PXB5pEO.js";new z(1e3);new a([128,128,128]);const _=new a("white");function Z(r){if(r==null||!("symbolLayers"in r)||r.symbolLayers==null)return!1;switch(r.type){case"point-3d":return r.symbolLayers.some(n=>n.type==="object");case"line-3d":return r.symbolLayers.some(n=>n.type==="path");case"polygon-3d":return r.symbolLayers.some(n=>n.type==="object"||n.type==="extrude");default:return!1}}function q(r){return r.resource?.href??""}function B(r,n){if(!r)return null;let t=null;return y(r)?t=j(r):m(r)&&(t=r.type==="cim"?L(r):r.color?new a(r.color):null),t?f(t,n):null}function j(r){const n=r.symbolLayers;if(!n)return null;let t=null;return n.forEach(o=>{o.type==="object"&&o.resource?.href||(t=o.type==="water"?o.color:o.material?o.material.color:null)}),t?new a(t):null}function f(r,n){if(n==null||r==null)return r;const t=r.toRgba();return t[3]=t[3]*n,new a(t)}function x(r,n,t){const o=r.symbolLayers;if(!o)return;const l=e=>f(n=n??e??(t!=null?_:null),t);o.forEach(e=>{if(e.type!=="object"||!e.resource?.href||n)if(e.type==="water")e.color=l(e.color);else{const c=e.material!=null?e.material.color:null,u=l(c);e.material==null?e.material=new d({color:u}):e.material.color=u,t!=null&&"outline"in e&&e.outline?.color!=null&&(e.outline.color=f(e.outline.color,t))}})}function v(r,n,t){(n=n??r.color)&&(r.color=f(n,t)),t!=null&&"outline"in r&&r.outline?.color&&(r.outline.color=f(r.outline.color,t))}function F(r,n,t){r&&(n||t!=null)&&(n&&(n=new a(n)),y(r)?x(r,n,t):m(r)&&v(r,n,t))}async function S(r,n){const t=r.symbolLayers;t&&await g(t,async o=>E(o,n))}async function E(r,n){switch(r.type){case"extrude":R(r,n);break;case"icon":case"line":case"text":$(r,n);break;case"path":O(r,n);break;case"object":await C(r,n)}}function $(r,n){const t=h(n);t!=null&&(r.size=t)}function h(r){for(const n of r)if(typeof n=="number")return n;return null}function R(r,n){r.size=typeof n[2]=="number"?n[2]:0}async function C(r,n){const{resourceSize:t,symbolSize:o}=await D(r),l=b(n,t,o);r.width=s(n[0],o[0],t[0],l),r.depth=s(n[1],o[1],t[1],l),r.height=s(n[2],o[2],t[2],l)}function O(r,n){const t=b(n,k,[r.width,void 0,r.height]);r.width=s(n[0],r.width,1,t),r.height=s(n[2],r.height,1,t)}function b(r,n,t){for(let o=0;o<3;o++){const l=r[o];switch(l){case"symbol-value":{const e=t[o];return e!=null?e/n[o]:1}case"proportional":break;default:if(l&&n[o])return l/n[o]}}return 1}async function D(r){const{computeObjectLayerResourceSize:n}=await w(()=>import("./symbolLayerUtils-D-CBX4iI.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),t=await n(r,10),{width:o,height:l,depth:e}=r,c=[o,e,l];let u=1;for(let i=0;i<3;i++){const p=c[i];if(p!=null){u=p/t[i];break}}for(let i=0;i<3;i++)c[i]==null&&(c[i]=t[i]*u);return{resourceSize:t,symbolSize:c}}function s(r,n,t,o){switch(r){case"proportional":return t*o;case"symbol-value":return n??t;default:return r}}function P(r,n){const t=h(n);if(t!=null)switch(r.type){case"simple-marker":r.size=t;break;case"picture-marker":{const o=r.width/r.height;o>1?(r.width=t,r.height=t*o):(r.width=t*o,r.height=t);break}case"simple-line":r.width=t;break;case"text":r.font.size=t}}async function G(r,n){if(r&&n)return y(r)?S(r,n):void(m(r)&&P(r,n))}function H(r,n,t){if(r&&n!=null)if(y(r)){const o=r.symbolLayers;o&&o.forEach(l=>{if(l.type==="object")switch(t){case"tilt":l.tilt=(l.tilt??0)+n;break;case"roll":l.roll=(l.roll??0)+n;break;default:l.heading=(l.heading??0)+n}l.type==="icon"&&(l.angle+=n)})}else m(r)&&(r.type!=="simple-marker"&&r.type!=="picture-marker"&&r.type!=="text"||(r.angle+=n))}function K(r){return r!=null&&r.type==="polygon-3d"&&r.symbolLayers.some(n=>n.type==="extrude")}export{G as D,H as J,K as N,F as g,B as h,q as p,Z as y};
