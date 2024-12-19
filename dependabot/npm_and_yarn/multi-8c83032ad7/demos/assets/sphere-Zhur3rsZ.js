import { al as P, i3 as s$1, jc as m$1, hP as t, dH as t$1, ap as n$1, dI as r, dJ as e, dM as u, dL as g, hQ as n, ak as L$1, aa as a, jd as r$1, a9 as e$1, je as x, am as _$1, jf as p, er as O$1, dK as v, jg as n$2, ao as z$1, jh as L$2, fP as o, ji as p$1, jj as A, i4 as q$1 } from './main-CaWYn_3L.js';
import { c, f as f$1 } from './plane-BeVdBtAe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function f(n,s){const c=P(n,s)/(s$1(n)*s$1(s));return -m$1(c)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class s{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow();}get(){return 0===this._itemsPtr&&t((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0;}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator());}}const i=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function m(i){return i?j(t$1(i.origin),t$1(i.direction)):j(n$1(),n$1())}function j(i,r){return {origin:i,direction:r}}function l(i,r){const n=q.get();return n.origin=i,n.direction=r,n}function k$1(i,r$1,t=m()){return r(t.origin,i),e(t.direction,r$1,i),t}function S(i,r,n){const t=P(i.direction,e(n,r,i.origin));return u(n,i.origin,g(n,i.direction,t)),n}const q=new s((()=>m()));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const C=_();function _(){return n()}const w=L$1,O=L$1;function T(t,r){return a(r,t)}function k(t,r){return r$1(t[0],t[1],t[2],r)}function z(t){return t}function E(t){t[0]=t[1]=t[2]=t[3]=0;}function L(t,r){return t[0]=t[1]=t[2]=0,t[3]=r,t}function N(t){return t[3]}function V(t){return t}function Z(t,r,n,o){return r$1(t,r,n,o)}function B(t,r,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+r,n}function U(t,r,n){return t!==n&&T(t,n),n}function X(t,r,n){if(null==r)return !1;if(!F(t,r,D))return !1;let{t0:o,t1:s}=D;if((o<0||s<o&&s>0)&&(o=s),o<0)return !1;if(n){const{origin:t,direction:s}=r;n[0]=t[0]+s[0]*o,n[1]=t[1]+s[1]*o,n[2]=t[2]+s[2]*o;}return !0}function Y(t,r,n){const o=k$1(r,n);if(!F(t,o,D))return [];const{origin:s,direction:e}=o,{t0:i,t1:a}=D,c=r=>{const n=n$1();return q$1(n,s,e,r),Q(t,n,n)};return Math.abs(i-a)<e$1()?[c(i)]:[c(i),c(a)]}const D={t0:0,t1:0};function F(t,r,n){const{origin:o,direction:s}=r,e=G;e[0]=o[0]-t[0],e[1]=o[1]-t[1],e[2]=o[2]-t[2];const i=s[0]*s[0]+s[1]*s[1]+s[2]*s[2];if(0===i)return !1;const a=2*(s[0]*e[0]+s[1]*e[1]+s[2]*e[2]),c=a*a-4*i*(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]-t[3]*t[3]);if(c<0)return !1;const u=Math.sqrt(c);return n.t0=(-a-u)/(2*i),n.t1=(-a+u)/(2*i),!0}const G=n$1();function H(t,r){return X(t,r,null)}function I(t,r,n){if(X(t,r,n))return n;const a=J(t,r,c.get());return u(n,r.origin,g(c.get(),r.direction,x(r.origin,a)/s$1(r.direction))),n}function J(t,r,o){const e=c.get(),u=f$1.get();_$1(e,r.origin,r.direction);const f$2=N(t);_$1(o,e,r.origin),g(o,o,1/s$1(o)*f$2);const m=$(t,r.origin),l=f(r.origin,o);return p(u,l+m,e),O$1(o,o,u),o}function K(t,r,n){return X(t,r,n)?n:(S(r,V(t),n),Q(t,n,n))}function Q(t,r,n){const e$1=e(c.get(),r,V(t)),a=g(c.get(),e$1,t[3]/s$1(e$1));return u(n,a,V(t))}function W(t,r){const n=e(c.get(),r,V(t)),o=v(n),s=t[3]*t[3];return Math.sqrt(Math.abs(o-s))}function $(r,n){const o=e(c.get(),n,V(r)),s=s$1(o),e$1=N(r),a=e$1+Math.abs(e$1-s);return m$1(e$1/a)}const tt=n$1();function rt(t,n,o$1,s){const e$1=e(tt,n,V(t));switch(o$1){case n$2.X:{const t=L$2(e$1,tt)[2];return o(s,-Math.sin(t),Math.cos(t),0)}case n$2.Y:{const t=L$2(e$1,tt),n=t[1],o$1=t[2],i=Math.sin(n);return o(s,-i*Math.cos(o$1),-i*Math.sin(o$1),Math.cos(n))}case n$2.Z:return z$1(s,e$1);default:return}}function nt(t,r){const n=e(it,r,V(t));return s$1(n)-t[3]}function ot(t,r,n,e){const i=nt(t,r),a=rt(t,r,n$2.Z,it),c=g(it,a,n-i);return u(e,r,c)}function st(t,r){const n=p$1(V(t),r),o=N(t);return n<=o*o}function et(t,r,n$1=n()){const o=x(V(t),V(r)),s=t[3],i=r[3];return o+i<s?(a(n$1,t),n$1):o+s<i?(a(n$1,r),n$1):(A(n$1,V(t),V(r),(o+i-s)/(2*o)),n$1[3]=(o+s+i)/2,n$1)}const it=n$1(),at=_();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:C,altitudeAt:nt,angleToSilhouette:$,axisAt:rt,clear:E,closestPoint:K,closestPointOnSilhouette:J,containsPoint:st,copy:T,create:_,distanceToSilhouette:W,elevate:B,equals:O,exactEquals:w,fromCenterAndRadius:k,fromRadius:L,fromValues:Z,getCenter:V,getRadius:N,intersectLine:Y,intersectRay:X,intersectRayClosestSilhouette:I,intersectsRay:H,projectPoint:Q,setAltitudeAt:ot,setExtent:U,tmpSphere:at,union:et,wrap:z},Symbol.toStringTag,{value:"Module"}));

export { H, N, T, V, _, st as a, l, m, s };
