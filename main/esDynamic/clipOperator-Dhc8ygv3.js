import"./Transformation2D-Dqu-RtOz.js";import{a1 as x}from"./ProjectionTransformation-9FKZWyWP.js";import"./main-C3PVbFgd.js";import"./jsonConverter-CO-cC38p.js";import{s as _}from"./SimpleGeometryCursor-DSF_YyIm.js";import{getSpatialReference as u,fromExtent as a,toGeometry as s,fromSpatialReference as c,fromGeometry as p}from"./apiConverter-BDkNMaDf.js";const n=new x;function v(e,o,t){return n.execute(e,o,t,null)}function b(e,o,t){const r=n.executeMany(new _(e),o,t,null);return Array.from(r)}function M(){return n.supportsCurves()}function m(e,o){const t=u(e),r=a(o).asEnvelope2D();return s(v(p(e),r,c(t)),t)}function f(e,o){const t=e.map(p),r=u(e),l=a(o).asEnvelope2D();return b(t,l,c(r)).map(y=>s(y,r))}const i=M(),S=Object.freeze(Object.defineProperty({__proto__:null,execute:m,executeMany:f,supportsCurves:i},Symbol.toStringTag,{value:"Module"})),g=Object.freeze(Object.defineProperty({__proto__:null,execute:m,executeMany:f,supportsCurves:i},Symbol.toStringTag,{value:"Module"}));export{g as c,S as i};
