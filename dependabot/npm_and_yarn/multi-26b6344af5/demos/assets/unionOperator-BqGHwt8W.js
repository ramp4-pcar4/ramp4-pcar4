import{o as i,t as n}from"./operatorUnion-B6itYDAa.js";import{fromGeometry as p,toGeometry as m,fromGeometryToGXGeometry as a,fromGeometries as c}from"./jsonConverter-BUTq-DII.js";import"./SimpleGeometryCursor-B92kdZ15.js";import"./Transformation2D---fVTkp5.js";import"./ProjectionTransformation-O8aN6-Ef.js";import"./main-Cv8ITM2j.js";import"./preload-helper-ExcqyqRp.js";function M(o,t){const e=p(o),r=e.getSpatialReference();return m(i(e.getGeometry(),a(t),r),r)}function l(o){const[t,e]=c(o);return m(n(t,e),e)}export{M as execute,l as executeMany};
