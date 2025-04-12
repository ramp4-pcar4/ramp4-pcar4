import{d6 as h,a1 as p}from"./main-kpG51UWM.js";import{n as E}from"./ElevationInfo-yv2-9tj6.js";function d(e){return e?m:A}function b(e,n){return n?.mode?n.mode:d(e).mode}function x(e,n){return n??d(e)}function l(e,n){return b(e==null||(e.hasZ??!1),n)}function y(e){const n=v(e);return l(e.geometry,n)}function I(e){const n=v(e),t=l(e.geometry,n),o=n!=null&&t!=="on-the-ground"?q(n):0,r=n?.featureExpressionInfo;return{mode:t,offset:o,featureExpressionInfo:r}}function v(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function c(e,n){if(!e?.offset)return 0;const{offset:t,unit:o}=e;if(o==="decimal-degrees")return 0;const r=o!=="unknown"&&o?o:"meters",s=h(n);return s?p(t,r,s):0}function Z(e,n,t){if(!t?.mode)return;const o=e.hasZ?e.z:0,r=c(t,e.spatialReference);switch(t.mode){case"absolute-height":return o-r;case"on-the-ground":return 0;case"relative-to-ground":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"scene")??0)+r)}}function P(e,n,t,o=null){return f(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,t,o)}function w(e,n,t,o,r=null){return f(e,n[0],n[1],n.length>2?n[2]:0,t,o,r)}function f(e,n,t,o,r,s,a=null){if(s==null)return;const u=a!=null?a.mode:"absolute-height";if(u==="on-the-ground")return 0;const{absoluteZ:i}=g(n,t,o,r,e,s);return $(i,n,t,o,r,e,a,u)}function g(e,n,t,o,r,s){const a=c(s,o);switch(s.mode){case"absolute-height":return{absoluteZ:t+a,elevation:0};case"on-the-ground":{const u=r.elevationProvider.getElevation(e,n,0,o,"ground")??0;return{absoluteZ:u,elevation:u}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,t,o,"ground")??0;return{absoluteZ:t+u+a,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,t,o,"scene")??0;return{absoluteZ:t+u+a,elevation:u}}}}function $(e,n,t,o,r,s,a,u){const i=c(a,r);switch(u){case"absolute-height":return e-i;case"relative-to-ground":return e-((s.elevationProvider.getElevation(n,t,o,r,"ground")??0)+i);case"relative-to-scene":return e-((s.elevationProvider.getElevation(n,t,o,r,"scene")??0)+i)}}function R(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function z(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function j(e,n){return n?.featureExpressionInfo!=null&&n.featureExpressionInfo.expression!=="0"?`${e} do not support featureExpressionInfo`:null}function k(e,n){n&&e.warn(".elevationInfo=",n)}function q(e){return(e?.offset??0)*E(e?.unit)}const m={mode:"absolute-height",offset:0},A={mode:"on-the-ground",offset:null};export{k as $,f as E,z as P,R as Z,I as a,g as b,l as i,m as j,y as l,P as m,Z as p,x as u,j as w,w as x};
