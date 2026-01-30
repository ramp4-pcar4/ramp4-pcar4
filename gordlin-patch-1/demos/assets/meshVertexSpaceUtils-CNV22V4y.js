import { F as x$1, G as r, H as s$1 } from './main-BpBTVFw9.js';
import { i, a as a$1 } from './MeshLocalVertexSpace-DyTv6gnw.js';
import { i as i$1 } from './vec3-DrcIdhHf.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function c(){return s$1.getLogger("esri.geometry.Mesh")}function a(e){const{vertexSpace:r}=e;if(null!=r.origin)return e.clone();const{anchor:n}=e,i$2=n.clone(),c=new i({origin:[i$2.x,i$2.y,i$2.z]}),a=e.cloneWithVertexSpace(c),{position:s}=a.vertexAttributes;return a.vertexAttributes.position=i$1(new Float64Array(s.length),s,[-i$2.x,-i$2.y,-(i$2.z??0)]),a.vertexAttributesChanged(),a}function g(e){return null!=e.origin}function p(e){return g(e.vertexSpace)}function u(e,r){if(!g(e))return null;const[o,i,t]=e.origin;return new x$1({x:o,y:i,z:t,spatialReference:r})}function f(r$1,n){const{x:t,y:a,z:s,spatialReference:g}=r$1,p=[t,a,s??0];if(void 0!==n?.geographic){if(r(c(),"option: geographic",{replacement:"use vertexSpace option instead",version:"4.29",warnOnce:!0}),!n?.vertexSpace)return n?.geographic?new a$1({origin:p}):new i({origin:p});c().warn("Deprecated geographic flag ignored since vertexSpace option is provided.");}if(!n?.vertexSpace)return g.isGeographic||g.isWebMercator?new a$1({origin:p}):new i({origin:p});switch(n.vertexSpace){case"local":return new a$1({origin:p});case"georeferenced":return new i({origin:p});case"georeferenced-absolute":return new i}}function l(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function h(e,r){return "local"===e?new a$1({origin:r}):new i({origin:r})}

export { a, f, g, h, l, p, u };
