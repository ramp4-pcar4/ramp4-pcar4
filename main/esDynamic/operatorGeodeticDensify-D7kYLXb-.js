import{s as c}from"./SimpleGeometryCursor-DSF_YyIm.js";import{cr as i,cs as u,ct as f}from"./main-C3PVbFgd.js";let r;function a(){return!!r&&f()}async function l(){if(!a()){const[n,e]=await Promise.all([import("./OperatorGeodeticDensifyByLength-DaDDpixV.js"),import("./ProjectionTransformation-9FKZWyWP.js").then(t=>t.aW).then(t=>t.aG).then(({injectPe:t})=>t),i()]);r=new n.OperatorGeodeticDensifyByLength,e(u)}}function m(n,e,t,s){return r.execute(n,e,t,s,null)}function p(n,e,t,s){const o=r.executeMany(new c(n),e,t,s,null);return Array.from(o)}function y(){return r.supportsCurves()}export{y as a,p as c,l as i,a as s,m as u};
