import { _ as _$1, F as a$1, G as n$1, H as G } from './main-YSH8Qvd0.js';
import { a as a$2, i } from './MeshLocalVertexSpace-CfZyzxtt.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function c(){return n$1.getLogger("esri.geometry.Mesh")}function a(e){return null!=e.origin}function g(e){return a(e.vertexSpace)}function u(e,r){if(!a(e))return null;const[n,i,t]=e.origin;return new _$1({x:n,y:i,z:t,spatialReference:r})}function s(r,n){const{x:o,y:p,z:a,spatialReference:g}=r,u=[o,p,a??0];void 0!==n?.geographic&&(a$1(c(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),n.vertexSpace&&c().warn("Deprecated geographic flag ignored since vertexSpace option is provided."));return "local"===(n?.vertexSpace??l(n?.geographic)??f(g))?new a$2({origin:u}):new i({origin:u})}function f(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function l(e){return null==e?void 0:e?"local":"georeferenced"}function m(e,r){return e.type===r.type&&(e.origin===r.origin||null!=e.origin&&null!=r.origin&&G(e.origin,r.origin))}

export { a, g, m, s, u };
