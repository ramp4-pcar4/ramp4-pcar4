import { ch as P, hB as s, hV as m$1, cs as t, cl as n$1, ct as r, cu as e, cx as u, cw as g, hx as n, cg as L$1, c6 as a, hW as r$1, H as s$2, c5 as e$1, hX as x$1, ci as _$1, hY as p$1, eD as O$1, cv as v, hZ as n$2, ck as z$1, h_ as L$2, fv as o, hA as p$2, hz as A, hR as q } from './main-BpBTVFw9.js';
import { s as s$1 } from './ObjectStack-CzgE1BSS.js';
import { c, f as f$1 } from './plane-CuQRDllE.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function f(n,s$1){const c=P(n,s$1)/(s(n)*s(s$1));return -m$1(c)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function d(i){return i?m(t(i.origin),t(i.direction)):m(n$1(),n$1())}function m(i,r){return {origin:i,direction:r}}function p(i,r){const n=x.get();return n.origin=i,n.direction=r,n}function l(i,r$1,t=d()){return r(t.origin,i),e(t.direction,r$1,i),t}function h(i,r,n){const t=P(i.direction,e(n,r,i.origin));return u(n,i.origin,g(n,i.direction,t)),n}const x=new s$1((()=>d()));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const _=w();function w(){return n()}const E=L$1,L=L$1;function O(t,r){return a(r,t)}function T(t,r){return r$1(t[0],t[1],t[2],r)}function k(t){return t}function z(t){t[0]=t[1]=t[2]=t[3]=0;}function N(t,r){return t[0]=t[1]=t[2]=0,t[3]=r,t}function V(t){return t[3]}function Z(t){return t}function B(t,r,n,e){return r$1(t,r,n,e)}function U(t,r,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+r,n}function X(r,n,e){return s$2.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),r!==e&&O(r,e),e}function Y(t,r,n){if(null==r)return !1;if(!G(t,r,F))return !1;let{t0:e,t1:o}=F;if((e<0||o<e&&o>0)&&(e=o),e<0)return !1;if(n){const{origin:t,direction:o}=r;n[0]=t[0]+o[0]*e,n[1]=t[1]+o[1]*e,n[2]=t[2]+o[2]*e;}return !0}function D(t,r,n){const e=l(r,n);if(!G(t,e,F))return [];const{origin:o,direction:s}=e,{t0:i,t1:a}=F,c=r=>{const n=n$1();return q(n,o,s,r),W(t,n,n)};return Math.abs(i-a)<e$1()?[c(i)]:[c(i),c(a)]}const F={t0:0,t1:0};function G(t,r,n){const{origin:e,direction:o}=r,s=H;s[0]=e[0]-t[0],s[1]=e[1]-t[1],s[2]=e[2]-t[2];const i=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===i)return !1;const a=2*(o[0]*s[0]+o[1]*s[1]+o[2]*s[2]),c=a*a-4*i*(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]-t[3]*t[3]);if(c<0)return !1;const u=Math.sqrt(c);return n.t0=(-a-u)/(2*i),n.t1=(-a+u)/(2*i),!0}const H=n$1();function I(t,r){return Y(t,r,null)}function J(t,r,n){if(Y(t,r,n))return n;const e=K(t,r,c.get());return u(n,r.origin,g(c.get(),r.direction,x$1(r.origin,e)/s(r.direction))),n}function K(t,r,n){const o=c.get(),i=f$1.get();_$1(o,r.origin,r.direction);const f$2=V(t);_$1(n,o,r.origin),g(n,n,1/s(n)*f$2);const m=tt(t,r.origin),l=f(r.origin,n);return p$1(i,l+m,o),O$1(n,n,i),n}function Q(t,r,n){return Y(t,r,n)?n:(h(r,Z(t),n),W(t,n,n))}function W(t,r,n){const e$1=e(c.get(),r,Z(t)),i=g(c.get(),e$1,t[3]/s(e$1));return u(n,i,Z(t))}function $(t,r){const n=e(c.get(),r,Z(t)),e$1=v(n),o=t[3]*t[3];return Math.sqrt(Math.abs(e$1-o))}function tt(t,n){const e$1=e(c.get(),n,Z(t)),o=s(e$1),s$1=V(t),i=s$1+Math.abs(s$1-o);return m$1(s$1/i)}const rt=n$1();function nt(t,r,e$1,o$1){const s=e(rt,r,Z(t));switch(e$1){case n$2.X:{const t=L$2(s,rt)[2];return o(o$1,-Math.sin(t),Math.cos(t),0)}case n$2.Y:{const t=L$2(s,rt),r=t[1],e=t[2],i=Math.sin(r);return o(o$1,-i*Math.cos(e),-i*Math.sin(e),Math.cos(r))}case n$2.Z:return z$1(o$1,s);default:return}}function et(t,r){const n=e(at,r,Z(t));return s(n)-t[3]}function ot(t,r,n,e){const i=et(t,r),a=nt(t,r,n$2.Z,at),c=g(at,a,n-i);return u(e,r,c)}function st(t,r){const n=p$2(Z(t),r),e=V(t);return n<=e*e}function it(t,r,n$1=n()){const e=x$1(Z(t),Z(r)),o=t[3],s=r[3];return e+s<o?(a(n$1,t),n$1):e+o<s?(a(n$1,r),n$1):(A(n$1,Z(t),Z(r),(e+s-o)/(2*e)),n$1[3]=(e+o+s)/2,n$1)}const at=n$1(),ct=w();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:_,altitudeAt:et,angleToSilhouette:tt,axisAt:nt,clear:z,closestPoint:Q,closestPointOnSilhouette:K,containsPoint:st,copy:O,create:w,distanceToSilhouette:$,elevate:U,equals:L,exactEquals:E,fromCenterAndRadius:T,fromRadius:N,fromValues:B,getCenter:Z,getRadius:V,intersectLine:D,intersectRay:Y,intersectRayClosestSilhouette:J,intersectsRay:I,projectPoint:W,setAltitudeAt:ot,setExtent:X,tmpSphere:ct,union:it,wrap:k},Symbol.toStringTag,{value:"Module"}));

export { I, O, V, Z, d, p, st as s, w };
