import"./Transformation2D-BXh3V3LZ.js";import{a1 as x}from"./ProjectionTransformation-b17qk3m4.js";import"./main-0iYVBzEC.js";import"./jsonConverter-86Y-RaTq.js";import{s as _}from"./SimpleGeometryCursor-DSF_YyIm.js";import{fromGeometry as u,getSpatialReference as a,fromExtent as s,fromSpatialReference as c,toGeometry as p}from"./apiConverter-i_zuhtdl.js";const n=new x;function v(e,o,t){return n.execute(e,o,t,null)}function b(e,o,t){const r=n.executeMany(new _(e),o,t,null);return Array.from(r)}function M(){return n.supportsCurves()}function m(e,o){const t=a(e),r=s(o).asEnvelope2D();return p(v(u(e),r,c(t)),t)}function f(e,o){const t=e.map(u),r=a(e),l=s(o).asEnvelope2D();return b(t,l,c(r)).map(y=>p(y,r))}const i=M(),S=Object.freeze(Object.defineProperty({__proto__:null,execute:m,executeMany:f,supportsCurves:i},Symbol.toStringTag,{value:"Module"})),g=Object.freeze(Object.defineProperty({__proto__:null,execute:m,executeMany:f,supportsCurves:i},Symbol.toStringTag,{value:"Module"}));export{g as c,S as i};
