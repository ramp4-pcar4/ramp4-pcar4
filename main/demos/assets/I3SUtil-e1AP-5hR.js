import{c4 as e,a4 as N,cM as C,cN as D}from"./main-Bd_03BNf.js";import"./mat4-BPDfjts0.js";import"./mat4f64-Dk4dwAN8.js";import"./vec32-DZGiaTNj.js";import"./projectBuffer-0UYQHA4x.js";import"./projectVectorToVector-vxzlctlr.js";import"./sphere-CBQcPuns.js";import"./Query-DSV16ZVi.js";import{I as R}from"./I3SBinaryReader-BFdI_1aw.js";import{g as _}from"./edgeUtils-CPD2tBCu.js";import"./NormalAttribute.glsl-CRDYTa3j.js";import{I as d}from"./orientedBoundingBox-CxoMhjuL.js";e();var E;async function M(o,i,r,c,I,m,p,S){const a=[];for(const t of i)if(t&&I.includes(t.name)){const n=`${o}/nodes/${r}/attributes/${t.key}/0`;a.push({url:n,storageInfo:t})}const u=await Promise.allSettled(a.map(t=>N(t.url,{responseType:"array-buffer",query:{...p,token:m},signal:S?.signal}).then(n=>R(t.storageInfo,n.data)))),f=[];for(const t of c){const n={};for(let s=0;s<u.length;s++){const l=u[s];if(l.status==="fulfilled"){const T=l.value;n[a[s].storageInfo.name]=h(T,t)}}f.push(n)}return f}(function(o){o[o.OUTSIDE=0]="OUTSIDE",o[o.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",o[o.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",o[o.INSIDE=3]="INSIDE"})(E||(E={}));const g=-32768,y=-2147483648;function h(o,i){if(!o)return null;const r=o[i];return C(o)?r===g?null:r:D(o)?r===y?null:r:r!=r?null:r}_({color:[0,0,0,0],opacity:0});e();e();new d;new Array(72);export{M as V};
