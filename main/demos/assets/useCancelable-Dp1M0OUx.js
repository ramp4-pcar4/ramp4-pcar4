import{eK as a}from"./main-CtmwM019.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.3.3 */const s=()=>a((c,n)=>{const e=new Set;return n.onDisconnected(()=>{e.forEach(r=>r.cancel())}),{add:r=>{[r].flat().forEach(o=>e.add(o))},resources:e}});export{s as u};
