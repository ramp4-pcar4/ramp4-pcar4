import { h as h$1, dN as s, U as U$1, hB as c$1, a2 as u$1, a3 as i$1, dI as r, hC as s$1, hD as m$1, hE as y$3, gl as h$2, hF as j, eq as M, bd as e, be as y$4, b_ as f$1, ap as n$1, hG as e$2, aq as r$1, dH as t, hH as P, cL as h$3, g8 as B$1, bf as a } from './main-C4Zge2Yj.js';
import { e as e$3 } from './mat4f64-UGgSIQpQ.js';
import { v as v$1, I as I$1, x } from './quat-Dj4-FOYY.js';
import { e as e$1 } from './quatf64-C3zJJInI.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class i{constructor(t,r,e){this.assetName=t,this.assetMimeType=r,this.parts=e;}equals(t){return this===t||this.assetName===t.assetName&&this.assetMimeType===t.assetMimeType&&h$1(this.parts,t.parts,((t,r)=>t.equals(r)))}isOnService(t){return this.parts.every((r=>r.isOnService(t)))}makeHash(){let t="";for(const r of this.parts)t+=r.partHash;return t}async toBlob(t){const{parts:r}=this;if(1===r.length)return r[0].toBlob(t);const s$1=await Promise.all(r.map((r=>r.toBlob(t))));return s(t),new Blob(s$1)}}class o{constructor(t,r){this.partUrl=t,this.partHash=r;}equals(t){return this===t||this.partUrl===t.partUrl&&this.partHash===t.partHash}isOnService(t){return this.partUrl.startsWith(`${t.path}/assets/`)}async toBlob(r){const{data:s$1}=await U$1(this.partUrl,{responseType:"blob"});return s(r),s$1}}function u(t){return p(t?.source)}function c(t){if(!Array.isArray(t))return !1;return t.every((t=>t instanceof i))}const f=/^(model\/gltf\+json)|(model\/gltf-binary)$/,l=/\.(gltf|glb)/i;function p(t){if(!t)return !1;if(Array.isArray(t)){return t.some(m)}return m(t)}function m(t){if(t instanceof File){const{type:r,name:e}=t;return f.test(r)||l.test(e)}return f.test(t.assetMimeType)||l.test(t.assetName)}function h(t,r){if(!t)return !1;const{source:e}=t;return g(e,r)}function y$2(t,r){if(t===r)return !0;const{source:e}=t,{source:s}=r;if(e===s)return !0;if(c(e)&&c(s)){if(e.length!==s.length)return !1;const t=(t,r)=>t.assetName<r.assetName?-1:t.assetName>r.assetName?1:0,r=[...e].sort(t),n=[...s].sort(t);for(let e=0;e<r.length;++e)if(!r[e].equals(n[e]))return !1;return !0}return !1}function g(t,r){if(Array.isArray(t)){const e=t;return e.length>0&&e.every((t=>b$1(t,r)))}return b$1(t,r)}function b$1(t,r){return t instanceof i&&t.isOnService(r)}function N$1(t,r){return t instanceof File?c$1(t,r):u$1(t.assetMimeType,r)??i$1(t.assetName,r)}function A$2(t){return Array.isArray(t)?t:[t]}function v(t){return !!t.original}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function b(r=C){return [r[0],r[1],r[2],r[3]]}function q(r$1,t,n=b()){return r(y$1(n),r$1),n[3]=t,n}function k(t,i=b()){const c=j(D,t);return B(i,M(v$1(i,c))),i}function U(t,n,e=b()){return I$1(D,y$1(t),A$1(t)),I$1(E,y$1(n),A$1(n)),x(D,E,D),B(e,M(v$1(y$1(e),D)))}function w(r,t,n,o=b()){return q(s$1,r,G),q(m$1,t,H),q(y$3,n,I),U(G,H,G),U(G,I,o),o}function y$1(r){return r}function z(r){return r[3]}function A$1(r){return h$2(r[3])}function B(r,t){return r[3]=t,r}const C=[0,0,1,0],D=e$1(),E=e$1();b();const G=b(),H=b(),I=b();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var y;let A=y=class extends f$1{constructor(t){super(t),this.translation=n$1(),this.rotationAxis=e$2(C),this.rotationAngle=0,this.scale=r$1(1,1,1);}get rotation(){return q(this.rotationAxis,this.rotationAngle)}set rotation(t$1){this.rotationAxis=t(y$1(t$1)),this.rotationAngle=z(t$1);}get localMatrix(){const t=e$3();return I$1(d,y$1(this.rotation),A$1(this.rotation)),P(t,d,this.translation,this.scale),t}get localMatrixInverse(){return h$3(e$3(),this.localMatrix)}equals(t){return this===t||null!=t&&B$1(this.localMatrix,t.localMatrix)}clone(){const t$1={translation:t(this.translation),rotationAxis:t(this.rotationAxis),rotationAngle:this.rotationAngle,scale:t(this.scale)};return new y(t$1)}};e([y$4({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"translation",void 0),e([y$4({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"rotationAxis",void 0),e([y$4({type:Number,nonNullable:!0,json:{write:!0}})],A.prototype,"rotationAngle",void 0),e([y$4({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"scale",void 0),e([y$4()],A.prototype,"rotation",null),e([y$4()],A.prototype,"localMatrix",null),e([y$4()],A.prototype,"localMatrixInverse",null),A=y=e([a("esri.geometry.support.MeshTransform")],A);const d=e$1(),N=A;

export { A$2 as A, N, N$1 as a, b, A$1 as c, y$1 as d, h, i, k, o, u, v, w, y$2 as y };
