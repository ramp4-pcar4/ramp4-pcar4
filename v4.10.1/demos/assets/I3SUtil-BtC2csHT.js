import{bV as E,U as g,gW as d,gX as C}from"./main-DVcB5zI_.js";import"./mat4-CP7NBZcJ.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-Wf-7vQga.js";import"./projectBuffer-B7AMRl4P.js";import"./projectVectorToVector-K9FwWQAK.js";import"./sphere-CjcXzOer.js";import"./Query-5sYd3NzA.js";import{I as h}from"./I3SBinaryReader-LT-uzWrB.js";import{r as m}from"./vec4f64-CMoMXWBi.js";import"./floatRGBA-EXBK06Gy.js";import"./NormalAttribute.glsl-JlZFUYcG.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./VertexAttribute-BdZWZuT1.js";import{I as A}from"./orientedBoundingBox-CY0ek-sx.js";var e;(function(t){t[t.TRANSPARENT=0]="TRANSPARENT",t[t.OPAQUE=1]="OPAQUE"})(e||(e={}));var T;(function(t){t[t.Uniform=0]="Uniform",t[t.Varying=1]="Varying",t[t.COUNT=2]="COUNT"})(T||(T={}));var c,p;(function(t){t[t.Solid=0]="Solid",t[t.Sketch=1]="Sketch",t[t.Mixed=2]="Mixed",t[t.COUNT=3]="COUNT"})(c||(c={})),function(t){t[t.REGULAR=0]="REGULAR",t[t.SILHOUETTE=1]="SILHOUETTE"}(p||(p={}));function P(t){return{...x,...t,type:c.Solid}}const x={color:m(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:e.OPAQUE,hasSlicePlane:!1};m(0,0,0,.2),e.OPAQUE;E();var S;async function F(t,a,n,I,N,U,R,y){const s=[];for(const r of a)if(r&&N.includes(r.name)){const o=`${t}/nodes/${n}/attributes/${r.key}/0`;s.push({url:o,storageInfo:r})}const l=await Promise.allSettled(s.map(r=>g(r.url,{responseType:"array-buffer",query:{...R,token:U},signal:y?.signal}).then(o=>h(r.storageInfo,o.data)))),f=[];for(const r of I){const o={};for(let i=0;i<l.length;i++){const u=l[i];if(u.status==="fulfilled"){const O=u.value;o[s[i].storageInfo.name]=$(O,r)}}f.push(o)}return f}(function(t){t[t.OUTSIDE=0]="OUTSIDE",t[t.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",t[t.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",t[t.INSIDE=3]="INSIDE"})(S||(S={}));const D=-32768,_=-(2**31);function $(t,a){if(!t)return null;const n=t[a];return d(t)?n===D?null:n:C(t)?n===_?null:n:n!=n?null:n}P({color:[0,0,0,0],opacity:0});E();E();new A;new Array(72);export{F as V};
