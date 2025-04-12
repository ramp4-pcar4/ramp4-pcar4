import{p as h}from"./workers-Ni6xAPD-.js";import{bC as f,b5 as w}from"./main-0iYVBzEC.js";function a(n){return Array.isArray(n)?n[0]?.spatialReference:n?.spatialReference}function l(n){return n&&(Array.isArray(n)?n.map(l):n.toJSON?n.toJSON():n)}function s(n){return Array.isArray(n)?n.map(t=>w(t)):w(n)}function S(n,t){let e;return Array.isArray(n)?e=n:(e=[],e.push(n),t!=null&&e.push(t)),e}let p;async function d(){return p||(p=h("geometryEngineWorker",{strategy:"distributed"})),p}async function r(n,t){return(await d()).invoke("executeGEOperation",{operation:n,parameters:l(t)})}async function m(n,t){const e=await d();return Promise.all(e.broadcast("executeGEOperation",{operation:n,parameters:l(t)}))}function x(n){return r("extendedSpatialReferenceInfo",[n])}async function A(n,t){return s(await r("clip",[a(n),n,t]))}async function R(n,t){return s(await r("cut",[a(n),n,t]))}function O(n,t){return r("contains",[a(n),n,t])}function D(n,t){return r("crosses",[a(n),n,t])}function J(n,t,e){return r("distance",[a(n),n,t,e])}function N(n,t){return r("equals",[a(n),n,t])}function b(n,t){return r("intersects",[a(n),n,t])}function L(n,t){return r("touches",[a(n),n,t])}function T(n,t){return r("within",[a(n),n,t])}function V(n,t){return r("disjoint",[a(n),n,t])}function v(n,t){return r("overlaps",[a(n),n,t])}function E(n,t,e){return r("relate",[a(n),n,t,e])}function z(n){return r("isSimple",[a(n),n])}async function H(n){return s(await r("simplify",[a(n),n]))}async function C(n,t=!1){return s(await r("convexHull",[a(n),n,t]))}async function I(n,t){return s(await r("difference",[a(n),n,t]))}async function P(n,t){return s(await r("symmetricDifference",[a(n),n,t]))}async function j(n,t){return s(await r("intersect",[a(n),n,t]))}async function k(n,t=null){const e=S(n,t);return s(await r("union",[a(e),e]))}async function q(n,t,e,i,c,u){return s(await r("offset",[a(n),n,t,e,i,c,u]))}async function B(n,t,e,i=!1){const c=[a(n),n,t,e,i];return s(await r("buffer",c))}async function G(n,t,e,i,c,u){const g=[a(n),n,t,e,i,c,u];return s(await r("geodesicBuffer",g))}async function W(n,t,e=!0){const i=await r("nearestCoordinate",[a(n),n,t,e]);return{...i,coordinate:f.fromJSON(i.coordinate)}}async function F(n,t){const e=await r("nearestVertex",[a(n),n,t]);return{...e,coordinate:f.fromJSON(e.coordinate)}}async function K(n,t,e,i){return(await r("nearestVertices",[a(n),n,t,e,i])).map(c=>({...c,coordinate:f.fromJSON(c.coordinate)}))}function y(n){return"xmin"in n?n.center:"x"in n?n:n.extent?.center}async function M(n,t,e){if(n==null)throw new o;const i=n.spatialReference;if((e=e??y(n))==null)throw new o;const c=n.constructor.fromJSON(await r("rotate",[i,n,t,e]));return c.spatialReference=i,c}async function Q(n,t){if(n==null)throw new o;const e=n.spatialReference;if((t=t??y(n))==null)throw new o;const i=n.constructor.fromJSON(await r("flipHorizontal",[e,n,t]));return i.spatialReference=e,i}async function U(n,t){if(n==null)throw new o;const e=n.spatialReference;if((t=t??y(n))==null)throw new o;const i=n.constructor.fromJSON(await r("flipVertical",[e,n,t]));return i.spatialReference=e,i}async function X(n,t,e,i){return s(await r("generalize",[a(n),n,t,e,i]))}async function Y(n,t,e){return s(await r("densify",[a(n),n,t,e]))}async function Z(n,t,e,i=0){return s(await r("geodesicDensify",[a(n),n,t,e,i]))}function _(n,t){return r("planarArea",[a(n),n,t])}function $(n,t){return r("planarLength",[a(n),n,t])}function nn(n,t,e){return r("geodesicArea",[a(n),n,t,e])}function tn(n,t,e){return r("geodesicLength",[a(n),n,t,e])}async function en(n,t){return s(await r("intersectLinesToPoints",[a(n),n,t]))}async function rn(n,t){await m("changeDefaultSpatialReferenceTolerance",[n,t])}async function an(n){await m("clearDefaultSpatialReferenceTolerance",[n])}class o extends Error{constructor(){super("Illegal Argument Exception")}}export{B as buffer,rn as changeDefaultSpatialReferenceTolerance,an as clearDefaultSpatialReferenceTolerance,A as clip,O as contains,C as convexHull,D as crosses,R as cut,Y as densify,I as difference,V as disjoint,J as distance,N as equals,x as extendedSpatialReferenceInfo,Q as flipHorizontal,U as flipVertical,X as generalize,nn as geodesicArea,G as geodesicBuffer,Z as geodesicDensify,tn as geodesicLength,j as intersect,en as intersectLinesToPoints,b as intersects,z as isSimple,W as nearestCoordinate,F as nearestVertex,K as nearestVertices,q as offset,v as overlaps,_ as planarArea,$ as planarLength,E as relate,M as rotate,H as simplify,P as symmetricDifference,L as touches,k as union,T as within};
