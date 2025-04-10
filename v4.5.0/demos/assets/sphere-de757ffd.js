import { jR as t, jS as s$1, jT as o, jU as u, jV as u$1, dh as t$1, aW as n$4, aS as P, dj as e, dm as u$2, dl as g$1, jW as s$2, jo as l, jX as n$5, aH as a$2, et as r, di as r$1, p as s$3, t as t$2, j1 as x, aT as _$1, jY as p$1, iE as O$1, dk as v, aV as z$1, jZ as L$1, fe as o$1, iZ as p$2 } from './main-5658cd6e.js';
import { n as n$1 } from './mat3f64-f0e5b33e.js';
import { n as n$2 } from './mat4f64-151d6b53.js';
import { n as n$3 } from './quatf64-3a66031a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class s{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow();}get(){return 0===this._itemsPtr&&t((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0;}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator());}}const i=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let a$1 = class a{constructor(t,e,s){this._itemByteSize=t,this._itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this._itemByteSize);}get(){0===this._itemsPtr&&t((()=>this._reset()));const t$1=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t$1;){const t=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this._itemCreate(t,e*this._itemByteSize));this._buffers.push(t);}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0;}static createVec2f64(t=c$1){return new a(16,o,t)}static createVec3f64(t=c$1){return new a(24,u,t)}static createVec4f64(t=c$1){return new a(32,u$1,t)}static createMat3f64(t=c$1){return new a(72,n$1,t)}static createMat4f64(t=c$1){return new a(128,n$2,t)}static createQuatf64(t=c$1){return new a(32,n$3,t)}get test(){return {size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}};const c$1=4*s$1.KILOBYTES;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
a$1.createVec2f64();const c=a$1.createVec3f64();a$1.createVec4f64();a$1.createMat3f64();const f=a$1.createMat4f64();a$1.createQuatf64();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
var n;!function(n){n[n.X=0]="X",n[n.Y=1]="Y",n[n.Z=2]="Z";}(n||(n={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function d(i){return i?m(t$1(i.origin),t$1(i.direction)):m(n$4(),n$4())}function m(i,n){return {origin:i,direction:n}}function p(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function q$1(i,n,r){const o=P(i.direction,e(r,n,i.origin));return u$2(r,i.origin,g$1(r,i.direction,o)),r}const S=new s((()=>d()));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function a(o,s){const c=P(o,s)/(s$2(o)*s$2(s));return -l(c)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function R(){return n$5()}function _(t,r=R()){return a$2(r,t)}function q(t,r$1){return r(t[0],t[1],t[2],r$1)}function w(t){return t}function C(t){t[0]=t[1]=t[2]=t[3]=0;}function O(t,r){return t[0]=t[1]=t[2]=0,t[3]=r,t}function T(t){return t[3]}function k(t){return t}function E(t,r$1,n,e){return r(t,r$1,n,e)}function L(t,r,n){return t!==n&&r$1(n,t),n[3]=t[3]+r,n}function Z(r,n,e){return s$3.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),r===e?e:_(r,e)}function z(t,r,n){if(t$2(r))return !1;const{origin:o,direction:s}=r,i=U;i[0]=o[0]-t[0],i[1]=o[1]-t[1],i[2]=o[2]-t[2];const a=s[0]*s[0]+s[1]*s[1]+s[2]*s[2];if(0===a)return !1;const c=2*(s[0]*i[0]+s[1]*i[1]+s[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return !1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return (m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=o[0]+s[0]*m,n[1]=o[1]+s[1]*m,n[2]=o[2]+s[2]*m),!0)}const U=n$4();function V(t,r){return z(t,r,null)}function X(t,r,n){if(z(t,r,n))return n;const e=Y(t,r,c.get());return u$2(n,r.origin,g$1(c.get(),r.direction,x(r.origin,e)/s$2(r.direction))),n}function Y(t,r,n){const e=c.get(),s=f.get();_$1(e,r.origin,r.direction);const i=T(t);_$1(n,e,r.origin),g$1(n,n,1/s$2(n)*i);const c$1=G(t,r.origin),p=a(r.origin,n);return p$1(s,p+c$1,e),O$1(n,n,s),n}function B(t,r,n){return z(t,r,n)?n:(q$1(r,k(t),n),D(t,n,n))}function D(t,r,n){const e$1=e(c.get(),r,k(t)),o=g$1(c.get(),e$1,t[3]/s$2(e$1));return u$2(n,o,k(t))}function F(t,r){const n=e(c.get(),r,k(t)),e$1=v(n),o=t[3]*t[3];return Math.sqrt(Math.abs(e$1-o))}function G(t,n){const e$1=e(c.get(),n,k(t)),o=s$2(e$1),s=T(t),i=s+Math.abs(s-o);return l(s/i)}const H=n$4();function I(t,r,e$1,o){const s=e(H,r,k(t));switch(e$1){case n.X:{const t=L$1(s,H)[2];return o$1(o,-Math.sin(t),Math.cos(t),0)}case n.Y:{const t=L$1(s,H),r=t[1],e=t[2],i=Math.sin(r);return o$1(o,-i*Math.cos(e),-i*Math.sin(e),Math.cos(r))}case n.Z:return z$1(o,s);default:return}}function J(t,r){const n=e(Q,r,k(t));return s$2(n)-t[3]}function K(t,r,n$1,e){const o=J(t,r),s=I(t,r,n.Z,Q),c=g$1(Q,s,n$1-o);return u$2(e,r,c)}function N(t,r){const n=p$2(k(t),r),e=T(t);return n<=e*e}const Q=n$4(),W=R();Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:J,angleToSilhouette:G,axisAt:I,clear:C,closestPoint:B,closestPointOnSilhouette:Y,containsPoint:N,copy:_,create:R,distanceToSilhouette:F,elevate:L,fromCenterAndRadius:q,fromRadius:O,fromValues:E,getCenter:k,getRadius:T,intersectRay:z,intersectRayClosestSilhouette:X,intersectsRay:V,projectPoint:D,setAltitudeAt:K,setExtent:Z,tmpSphere:W,wrap:w},Symbol.toStringTag,{value:"Module"}));

export { N, R, T, V, _, c, d, k, p, s };
