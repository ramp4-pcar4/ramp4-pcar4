import{dC as y,ab as Z}from"./main-0iYVBzEC.js";import{n as P}from"./ElevationInfo-BV5uPdCD.js";function v(e){return e?b:I}function g(e,n){return n?.mode?n.mode:v(e).mode}function h(e,n){return n??v(e)}function f(e,n){return g(e==null||(e.hasZ??!1),n)}function w(e,n){return h(e==null||(e.hasZ??!1),n)}function $(e){const n=x(e);return f(e.geometry,n)}function m(e){const n=x(e),t=f(e.geometry,n),o=n!=null&&t!=="on-the-ground"?H(n):0,r=n?.featureExpressionInfo;return{mode:t,offset:o,featureExpressionInfo:r}}function R(e){return c(m(e))}function z(e){return c(e)||p(e)}function p(e){return e?.featureExpressionInfo?.expression==="0"}function c(e){if(!e||e.mode==="on-the-ground")return!1;const n=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!n||n==="0")}function x(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function l(e,n){if(!e?.offset)return 0;const{offset:t,unit:o}=e;if(o==="decimal-degrees")return 0;const r=o!=="unknown"&&o?o:"meters",s=y(n);return s?Z(t,r,s):0}function j(e,n,t){if(!t?.mode)return;const o=e.hasZ?e.z:0,r=l(t,e.spatialReference);switch(t.mode){case"absolute-height":return o-r;case"on-the-ground":return 0;case"relative-to-ground":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"scene")??0)+r)}}function k(e,n,t,o=null){return d(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,t,o)}function C(e,n,t,o,r=null){return d(e,n[0],n[1],n.length>2?n[2]:0,t,o,r)}function d(e,n,t,o,r,s,a=null){if(s==null)return;const u=a!=null?a.mode:"absolute-height";if(u==="on-the-ground")return 0;const{absoluteZ:i}=E(n,t,o,r,e,s);return q(i,n,t,o,r,e,a,u)}function E(e,n,t,o,r,s){const a=l(s,o);switch(s.mode){case"absolute-height":return{absoluteZ:t+a,elevation:0};case"on-the-ground":{const u=r.elevationProvider.getElevation(e,n,0,o,"ground")??0;return{absoluteZ:u,elevation:u}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,t,o,"ground")??0;return{absoluteZ:t+u+a,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,t,o,"scene")??0;return{absoluteZ:t+u+a,elevation:u}}}}function q(e,n,t,o,r,s,a,u){const i=l(a,r);switch(u){case"absolute-height":return e-i;case"relative-to-ground":return e-((s.elevationProvider.getElevation(n,t,o,r,"ground")??0)+i);case"relative-to-scene":return e-((s.elevationProvider.getElevation(n,t,o,r,"scene")??0)+i)}}function A(e,n){if(n==null)return!1;const{mode:t}=n;return t!=null&&(e==="scene"&&t==="relative-to-scene"||e==="ground"&&t!=="absolute-height")}function B(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function D(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function F(e,n){return n?.featureExpressionInfo!=null&&n.featureExpressionInfo.expression!=="0"?`${e} do not support featureExpressionInfo`:null}function G(e,n){n&&e.warn(".elevationInfo=",n)}function H(e){return(e?.offset??0)*P(e?.unit)}const b={mode:"absolute-height",offset:0},I={mode:"on-the-ground",offset:null};export{G as $,d as E,D as P,B as Z,m as a,E as b,z as c,p as d,R as f,l as h,f as i,b as j,$ as l,k as m,j as p,g as r,w as s,h as u,c as v,F as w,C as x,A as y,I as z};
