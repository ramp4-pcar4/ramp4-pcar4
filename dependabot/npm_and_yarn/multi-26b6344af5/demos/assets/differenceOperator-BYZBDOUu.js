import"./Transformation2D---fVTkp5.js";import{y}from"./ProjectionTransformation-O8aN6-Ef.js";import"./main-Cv8ITM2j.js";import"./jsonConverter-BUTq-DII.js";import{s}from"./SimpleGeometryCursor-B92kdZ15.js";import{fromGeometry as n,getSpatialReference as c,fromSpatialReference as a,toGeometry as p}from"./apiConverter-tk90BA9t.js";const u=new y;function x(e,r,t){return u.execute(e,r,t,null)}function _(e,r,t){const o=u.executeMany(new s(e),new s([r]),t,null);return Array.from(o)}function b(){return u.supportsCurves()}function m(e,r){const t=c(e);return p(x(n(e),n(r),a(t)),t)}function f(e,r){const t=e.map(n),o=c(e);return _(t,n(r),a(o)).map(l=>p(l,o))}const i=b(),O=Object.freeze(Object.defineProperty({__proto__:null,execute:m,executeMany:f,supportsCurves:i},Symbol.toStringTag,{value:"Module"})),C=Object.freeze(Object.defineProperty({__proto__:null,execute:m,executeMany:f,supportsCurves:i},Symbol.toStringTag,{value:"Module"}));export{C as d,O as m};
