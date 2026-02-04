import { G as h$1 } from './geometryEngineBase-BRqGgm32.js';
import { t as t$1 } from './json-Beimr7gP.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t(n){return h$1.extendedSpatialReferenceInfo(n)}function r(t,r,i){return h$1.clip(t$1,t,r,i)}function i(t,r,i){return h$1.cut(t$1,t,r,i)}function a(t,r,i){return h$1.contains(t$1,t,r,i)}function o(t,r,i){return h$1.crosses(t$1,t,r,i)}function s(t,r,i,a){return h$1.distance(t$1,t,r,i,a)}function u(t,r,i){return h$1.equals(t$1,t,r,i)}function c(t,r,i){return h$1.intersects(t$1,t,r,i)}function f(t,r,i){return h$1.touches(t$1,t,r,i)}function l(t,r,i){return h$1.within(t$1,t,r,i)}function p(t,r,i){return h$1.disjoint(t$1,t,r,i)}function g(t,r,i){return h$1.overlaps(t$1,t,r,i)}function d(t,r,i,a){return h$1.relate(t$1,t,r,i,a)}function m(t,r){return h$1.isSimple(t$1,t,r)}function h(t,r){return h$1.simplify(t$1,t,r)}function y(t,r,i=!1){return h$1.convexHull(t$1,t,r,i)}function x(t,r,i){return h$1.difference(t$1,t,r,i)}function S(t,r,i){return h$1.symmetricDifference(t$1,t,r,i)}function w(t,r,i){return h$1.intersect(t$1,t,r,i)}function A(t,r,i=null){return h$1.union(t$1,t,r,i)}function D(t,r,i,a,o,s,u){return h$1.offset(t$1,t,r,i,a,o,s,u)}function R(t,r,i,a,o=!1){return h$1.buffer(t$1,t,r,i,a,o)}function j(t,r,i,a,o,s,u){return h$1.geodesicBuffer(t$1,t,r,i,a,o,s,u)}function E(t,r,i,a=!0){return h$1.nearestCoordinate(t$1,t,r,i,a)}function L(t,r,i){return h$1.nearestVertex(t$1,t,r,i)}function T(t,r,i,a,o){return h$1.nearestVertices(t$1,t,r,i,a,o)}function b(n,t,r,i){if(null==t||null==i)throw new Error("Illegal Argument Exception");const a=h$1.rotate(t,r,i);return a.spatialReference=n,a}function v(n,t,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const i=h$1.flipHorizontal(t,r);return i.spatialReference=n,i}function z(n,t,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const i=h$1.flipVertical(t,r);return i.spatialReference=n,i}function I(t,r,i,a,o){return h$1.generalize(t$1,t,r,i,a,o)}function V(t,r,i,a){return h$1.densify(t$1,t,r,i,a)}function H(t,r,i,a,o=0){return h$1.geodesicDensify(t$1,t,r,i,a,o)}function B(t,r,i){return h$1.planarArea(t$1,t,r,i)}function _(t,r,i){return h$1.planarLength(t$1,t,r,i)}function q(t,r,i,a){return h$1.geodesicArea(t$1,t,r,i,a)}function C(t,r,i,a){return h$1.geodesicLength(t$1,t,r,i,a)}function P(t,r,i){return null==r||null==i?[]:h$1.intersectLinesToPoints(t$1,t,r,i)}function G(n,t){h$1.changeDefaultSpatialReferenceTolerance(n,t);}function M(n){h$1.clearDefaultSpatialReferenceTolerance(n);}const O=Object.freeze(Object.defineProperty({__proto__:null,buffer:R,changeDefaultSpatialReferenceTolerance:G,clearDefaultSpatialReferenceTolerance:M,clip:r,contains:a,convexHull:y,crosses:o,cut:i,densify:V,difference:x,disjoint:p,distance:s,equals:u,extendedSpatialReferenceInfo:t,flipHorizontal:v,flipVertical:z,generalize:I,geodesicArea:q,geodesicBuffer:j,geodesicDensify:H,geodesicLength:C,intersect:w,intersectLinesToPoints:P,intersects:c,isSimple:m,nearestCoordinate:E,nearestVertex:L,nearestVertices:T,offset:D,overlaps:g,planarArea:B,planarLength:_,relate:d,rotate:b,simplify:h,symmetricDifference:S,touches:f,union:A,within:l},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/

const geometryEngineJSON = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	buffer: R,
	changeDefaultSpatialReferenceTolerance: G,
	clearDefaultSpatialReferenceTolerance: M,
	clip: r,
	contains: a,
	convexHull: y,
	crosses: o,
	cut: i,
	densify: V,
	difference: x,
	disjoint: p,
	distance: s,
	equals: u,
	extendedSpatialReferenceInfo: t,
	flipHorizontal: v,
	flipVertical: z,
	generalize: I,
	geodesicArea: q,
	geodesicBuffer: j,
	geodesicDensify: H,
	geodesicLength: C,
	intersect: w,
	intersectLinesToPoints: P,
	intersects: c,
	isSimple: m,
	nearestCoordinate: E,
	nearestVertex: L,
	nearestVertices: T,
	offset: D,
	overlaps: g,
	planarArea: B,
	planarLength: _,
	relate: d,
	rotate: b,
	simplify: h,
	symmetricDifference: S,
	touches: f,
	union: A,
	within: l
}, Symbol.toStringTag, { value: 'Module' }));

export { O, geometryEngineJSON as g };
