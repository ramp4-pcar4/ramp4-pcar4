const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./apiConverter-DbRWNxLp.js","./Transformation2D-DZfKTQC6.js","./ProjectionTransformation-Dr49wlOX.js","./SimpleGeometryCursor-B92kdZ15.js","./main-Bd_03BNf.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./jsonConverter-V072NVoI.js"])))=>i.map(i=>d[i]);
import{ad as l}from"./main-Bd_03BNf.js";import{_ as b}from"./preload-helper-ExcqyqRp.js";import{i as x,a as O,u as S,c as P,s as T}from"./operatorGeodeticDensify-B-QcJ3f9.js";import{e as d}from"./geodeticCurveType-CirnHLSB.js";let a,u,c,s,m;function p(){return!!a&&T()}async function _(){if(!p()){const[e]=await Promise.all([b(()=>import("./apiConverter-DbRWNxLp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),x()]);a=e.fromGeometry,u=e.fromSpatialReference,c=e.getSpatialReference,s=e.toGeometry,m=O()}}function y(e,t,n={}){const{curveType:i="geodesic",unit:r}=n;r&&(t=l(t,r,"meters"));const o=c(e);return s(S(a(e),t,u(o),d[i]),o)}function g(e,t,n={}){const{curveType:i="geodesic",unit:r}=n;r&&(t=l(t,r,"meters"));const o=e.map(a),f=c(e);return P(o,t,u(f),d[i]).map(v=>s(v,f))}const $=Object.freeze(Object.defineProperty({__proto__:null,execute:y,executeMany:g,isLoaded:p,load:_,get supportsCurves(){return m}},Symbol.toStringTag,{value:"Module"})),z=Object.freeze(Object.defineProperty({__proto__:null,execute:y,executeMany:g,isLoaded:p,load:_,get supportsCurves(){return m}},Symbol.toStringTag,{value:"Module"}));export{z as a,$ as g,_ as l};
