const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-flfHofBb.js","./geometryEngineBase-CR-T1bpS.js","./main-CzbArNue.js","./preload-helper-ExcqyqRp.js","./main-wZMPJMua.css"])))=>i.map(i=>d[i]);
import{_ as f}from"./preload-helper-ExcqyqRp.js";import{n as m}from"./date-Dw3OHnFv.js";import{ds as h,dt as p,dr as g,du as y,bY as w,dv as _,dw as a}from"./main-CzbArNue.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(t){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function c(n){return new b(n)}class q{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function F(n){return new q(n)}const u=new Set;function G(n,t,e,d=!1){u.clear();for(const i in e){const r=n.get(i);if(!r)continue;const o=P(r,e[i]);if(u.add(r.name),r&&(d||r.editable)){const l=h(r,o);if(l)return c(p(l,r,o));t[r.name]=o}}for(const i of n.requiredFields??[])if(!u.has(i.name))return c(`missing required field "${i.name}"`);return null}function P(n,t){let e=t;return g(n)&&typeof t=="string"?e=parseFloat(t):y(n)&&t!=null&&typeof t!="string"?e=String(t):w(n)&&typeof t=="string"&&(e=m(t)),_(e)}let s;function S(n,t){if(!n||!a(t))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(t,n)}return n}async function j(){return s==null&&(s=await f(()=>import("./geometryEngineJSON-flfHofBb.js").then(n=>n.g),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),s}async function T(n,t){!a(n)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await j()}export{F as d,c as f,T as j,G as p,S as y};
