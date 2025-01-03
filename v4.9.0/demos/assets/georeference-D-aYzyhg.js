import { ct as r, iU as j$1, di as M$2, iV as s, iW as m, hU as y$1, hw as h$1, aW as e, aX as y$2, aY as c$1, c1 as f, cl as n$1, iX as e$2, cm as r$1, cs as t$1, iY as P$1, iZ as h$2, eD as O$2, i_ as B$2, G as r$2, H as s$1, eE as n, i$ as n$2, fx as u, fw as S$1, j0 as f$1, ck as z$1, j1 as k$2, j2 as f$2, j3 as p, iQ as j$2, j4 as z$2, j5 as f$4, eW as z$3, j6 as j$3, hH as l, j7 as C$2, hy as G$2, be as H$2, j8 as c$2 } from './main-DbwmOBz5.js';
import { e as e$4 } from './mat3f64-DiVtVT5k.js';
import { e as e$3, o } from './mat4f64-D1udxz0O.js';
import { a, R as R$1 } from './computeTranslationToOriginAndRotation-_Kt4s7Cw.js';
import { t as t$2, o as o$1 } from './DoubleArray-Sm1VdYFT.js';
import { v as v$2, I as I$2, x as x$1 } from './quat-D0kjGsAx.js';
import { e as e$1 } from './quatf64-BVXz_O4E.js';
import { g, f as f$3, u as u$1 } from './meshVertexSpaceUtils-Wt8XE-BC.js';
import { n as n$3, s as s$2, i as i$2, r as r$3 } from './vec3-COq5nDmL.js';
import { i as i$1, T } from './BufferView-cIpPdY_p.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function b$1(r=C$1){return [r[0],r[1],r[2],r[3]]}function q(r$1,t,n=b$1()){return r(y(n),r$1),n[3]=t,n}function k$1(t,i=b$1()){const c=j$1(D,t);return B$1(i,M$2(v$2(i,c))),i}function U$1(t,n,e=b$1()){return I$2(D,y(t),A$1(t)),I$2(E$2,y(n),A$1(n)),x$1(D,E$2,D),B$1(e,M$2(v$2(y(e),D)))}function w$1(r,t,n,o=b$1()){return q(s,r,G$1),q(m,t,H$1),q(y$1,n,I$1),U$1(G$1,H$1,G$1),U$1(G$1,I$1,o),o}function y(r){return r}function z(r){return r[3]}function A$1(r){return h$1(r[3])}function B$1(r,t){return r[3]=t,r}const C$1=[0,0,1,0],D=e$1(),E$2=e$1();b$1();const G$1=b$1(),H$1=b$1(),I$1=b$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var A;let v$1=A=class extends f{constructor(t){super(t),this.translation=n$1(),this.rotationAxis=e$2(C$1),this.rotationAngle=0,this.scale=r$1(1,1,1);}get rotation(){return q(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=t$1(y(t)),this.rotationAngle=z(t);}get localMatrix(){const t=e$3();return I$2(M$1,y(this.rotation),A$1(this.rotation)),P$1(t,M$1,this.translation,this.scale),t}get localMatrixInverse(){return h$2(e$3(),this.localMatrix)}applyLocal(t,o){return O$2(o,t,this.localMatrix)}applyLocalInverse(t,o){return O$2(o,t,this.localMatrixInverse)}equals(t){return this===t||null!=t&&B$2(this.localMatrix,t.localMatrix)}clone(){const t={translation:t$1(this.translation),rotationAxis:t$1(this.rotationAxis),rotationAngle:this.rotationAngle,scale:t$1(this.scale)};return new A(t)}};e([y$2({type:[Number],nonNullable:!0,json:{write:!0}})],v$1.prototype,"translation",void 0),e([y$2({type:[Number],nonNullable:!0,json:{write:!0}})],v$1.prototype,"rotationAxis",void 0),e([y$2({type:Number,nonNullable:!0,json:{write:!0}})],v$1.prototype,"rotationAngle",void 0),e([y$2({type:[Number],nonNullable:!0,json:{write:!0}})],v$1.prototype,"scale",void 0),e([y$2()],v$1.prototype,"rotation",null),e([y$2()],v$1.prototype,"localMatrix",null),e([y$2()],v$1.prototype,"localMatrixInverse",null),v$1=A=e([c$1("esri.geometry.support.MeshTransform")],v$1);const M$1=e$1(),d$1=v$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t(e,r){return e.isGeographic||e.isWebMercator&&(r??!0)}function i(e,r){switch(e.type){case"georeferenced":return r.isGeographic;case"local":return r.isGeographic||r.isWebMercator}}function c(t,c,a,p){if(void 0!==p){r$2(s$1.getLogger(t),"option: geographic",{replacement:"use mesh vertexSpace and spatial reference to control how operations are performed",version:"4.29",warnOnce:!0});const i="local"===c.type;if(!g(c)||p===i){return a.isGeographic||a.isWebMercator&&p}s$1.getLogger(t).warnOnce(`Specifying the 'geographic' parameter (${p}) for a Mesh vertex space of type "${c.type}" is not supported. This parameter will be ignored.`);}return i(c,a)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const d=()=>s$1.getLogger("esri.geometry.support.meshUtils.normalProjection");function j(r,e,t,o,n){return V$1(o)?(v(L$1.TO_PCPF,i$1.fromTypedArray(r),T.fromTypedArray(e),T.fromTypedArray(t),o,i$1.fromTypedArray(n)),n):(d().error("Cannot convert spatial reference to PCPF"),n)}function _$1(r,e,t,o,n){return V$1(o)?(v(L$1.FROM_PCPF,i$1.fromTypedArray(r),T.fromTypedArray(e),T.fromTypedArray(t),o,i$1.fromTypedArray(n)),n):(d().error("Cannot convert to spatial reference from PCPF"),n)}function O$1(r,e,t){return n(r,e,0,t,a(e),0,r.length/3),t}function E$1(r,e,t){return n(r,a(t),0,e,t,0,r.length/3),e}function M(r,o,n){return j$2(w,n),n$3(o,r,w),z$2(w)||s$2(o,o),o}function R(r,o,n){if(j$2(w,n),n$3(o,r,w,4),z$2(w)||s$2(o,o,4),r!==o)for(let e=3;e<r.length;e+=4)o[e]=r[e];return o}function h(r,e,t,o,n){if(!V$1(o))return d().error("Cannot convert spatial reference to PCPF"),n;v(L$1.TO_PCPF,i$1.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),T.fromTypedArray(e),T.fromTypedArray(t),o,i$1.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function b(r,e,t,o,n){if(!V$1(o))return d().error("Cannot convert to spatial reference from PCPF"),n;v(L$1.FROM_PCPF,i$1.fromTypedArray(r,16),T.fromTypedArray(e),T.fromTypedArray(t),o,i$1.fromTypedArray(n,16));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function v(r,e,t,f,i,m){if(!e)return;const l=t.count,u$1=a(i);if(x(i))for(let c=0;c<l;c++)f.getVec(c,U),e.getVec(c,S),R$1(u$1,U,k,u$1),n$2(w,k),r===L$1.FROM_PCPF&&u(w,w),S$1(S,S,w),m.setVec(c,S);else for(let s=0;s<l;s++){f.getVec(s,U),e.getVec(s,S),R$1(u$1,U,k,u$1),n$2(w,k);const i=f$1(t.get(s,1));let l=Math.cos(i);r===L$1.TO_PCPF&&(l=1/l),w[0]*=l,w[1]*=l,w[2]*=l,w[3]*=l,w[4]*=l,w[5]*=l,r===L$1.FROM_PCPF&&u(w,w),S$1(S,S,w),z$1(S,S),m.setVec(s,S);}return m}function V$1(r){return x(r)||B(r)}function x(r){return r.isWGS84||k$2(r)||f$2(r)||p(r)}function B(r){return r.isWebMercator}var L$1;!function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF";}(L$1||(L$1={}));const U=n$1(),S=n$1(),k=e$3(),w=e$4();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function E(t$1,n,e){return t(n.spatialReference,e?.geographic)?I(t$1,n,!1,e):H(t$1,n,e)}function O(t,n=o){const{position:e,normal:r,tangent:o}=t;return {position:r$3(new Float64Array(e.length),e,n),normal:null!=r?M(r,new Float32Array(r.length),n):null,tangent:null!=o?R(o,new Float32Array(o.length),n):null}}function P(t,n,e,r){const{position:o,normal:i,tangent:a}=t;if(!g(n))return {position:o,normal:i,tangent:a};const l=u$1(n,r);return E(O(t,e?.localMatrix),l,{geographic:"local"===n.type})}function V(t,n,e){const r=f$3(n,e),o=n.spatialReference,i$1=g(r);if(!i$1)return {vertexAttributes:E(t,n,e),vertexSpace:r,transform:null};const{position:a,normal:l,tangent:s}=t,c=i(r,o);switch(r.type){case"georeferenced":return c?{vertexAttributes:I(t,n,i$1,e),vertexSpace:r,transform:null}:{vertexAttributes:{position:a,normal:l,tangent:s},vertexSpace:r,transform:new d$1};case"local":return {vertexAttributes:{position:a,normal:l,tangent:s},vertexSpace:r,transform:new d$1}}}function W(t$1,n,e){return t(n.spatialReference,e?.geographic)?Q(t$1,n,e):N(t$1,n,e)}function C(t,n,e,r,o){if(!g(n))return W(t,r,o);const{spatialReference:i}=r,a=P(t,n,e,i);return r.equals(u$1(n,i))?N(a,r,o):W(a,r,o)}function G({positions:t,transform:n$1,vertexSpace:e,inSpatialReference:i,outSpatialReference:a$1,outPositions:s,localMode:f}){const y=e.origin??l,A=null!=e.origin?n$1?.localMatrix??o:o;if("georeferenced"===e.type){const n$1=s??t$2(t.length);if(C$2(A,o)?o$1(n$1,t):r$3(n$1,t,A),!G$2(y,l)){const[t,e,r]=y;for(let o=0;o<n$1.length;o+=3)n$1[o]+=t,n$1[o+1]+=e,n$1[o+2]+=r;}return n(n$1,i,0,n$1,a$1,0,n$1.length/3),n$1}let w=i;const R=a(i);w=a$1.isWebMercator&&f||!H$2(i,R)?w:R,R$1(i,y,tt,w),c$2(tt,tt,A);const b=s??t$2(t.length);return r$3(b,t,tt),n(b,w,0,b,a$1,0,b.length/3),b}function H(t,n,e){const r=new Float64Array(t.position.length),o=t.position,i=n.x,a=n.y,l=n.z??0,s=_(e?e.unit:null,n.spatialReference);for(let c=0;c<o.length;c+=3)r[c]=o[c]*s+i,r[c+1]=o[c+1]*s+a,r[c+2]=o[c+2]*s+l;return {position:r,normal:t.normal,tangent:t.tangent}}function I(t,n,e,r){const o=n.spatialReference,i=X(n,r,tt),a=new Float64Array(t.position.length),l=J(t.position,i,o,a),s=j$2(et,i),c=K(l,a,t.normal,s,o),u=L(l,a,t.tangent,s,o);if(e){const{x:t,y:e,z:r}=n;i$2(l,l,[-t,-e,-(r??0)]);}return {position:l,normal:c,tangent:u}}function J(t,n,e,r){r$3(r,t,n);const o=new Float64Array(t.length);return E$1(r,o,e)}function K(t,n,e,r,o){if(null==e)return null;const i=new Float32Array(e.length);return n$3(i,e,r),_$1(i,t,n,o,i),i}function L(t,n,e,r,o){if(null==e)return null;const i=new Float32Array(e.length);n$3(i,e,r,4);for(let a=3;a<i.length;a+=4)i[a]=e[a];return b(i,t,n,o,i),i}function N(t,n,e){const r=new Float64Array(t.position.length),o=t.position,i=n.x,a=n.y,l=n.z??0,s=_(e?e.unit:null,n.spatialReference);for(let c=0;c<o.length;c+=3)r[c]=(o[c]-i)/s,r[c+1]=(o[c+1]-a)/s,r[c+2]=(o[c+2]-l)/s;return {position:r,normal:t.normal,tangent:t.tangent}}function Q(t,n,e){const r=n.spatialReference;X(n,e,tt);const o=h$2(nt,tt),a=new Float64Array(t.position.length),l=Y(t.position,r,o,a),s=j$2(et,o);return {position:l,normal:Z(t.normal,t.position,a,r,s),tangent:$(t.tangent,t.position,a,r,s)}}function X(t,n,e){R$1(t.spatialReference,[t.x,t.y,t.z??0],e,a(t.spatialReference));const r=_(n?n.unit:null,t.spatialReference);return f$4(e,e,[r,r,r]),e}function Y(t,n,e,r){const o=O$1(t,n,r),i=new Float64Array(o.length);return r$3(i,o,e),i}function Z(t,n,e,r,o){if(null==t)return null;const i=j(t,n,e,r,new Float32Array(t.length));return n$3(i,i,o),i}function $(t,n,e,r,o){if(null==t)return null;const i=h(t,n,e,r,new Float32Array(t.length));return n$3(i,i,o,4),i}function _(e,r){if(null==e)return 1;const o=z$3(r);return 1/j$3(o,"meters",e)}const tt=e$3(),nt=e$3(),et=e$4();

const georeference = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	applyTransform: O,
	georeference: E,
	georeferenceApplyTransform: P,
	georeferenceByTransform: V,
	georeferenceGlobal: I,
	getUnitScale: _,
	project: G,
	ungeoreference: W,
	ungeoreferenceByTransform: C,
	ungeoreferenceGlobal: Q
}, Symbol.toStringTag, { value: 'Module' }));

export { A$1 as A, C, E$1 as E, G, I, O, P, Q, V, _, O$1 as a, b$1 as b, c, d$1 as d, _$1 as e, b as f, georeference as g, h, j, k$1 as k, w$1 as w, y };
