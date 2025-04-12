import{cF as E,cL as S,n as en,aK as M,ap as an,cV as cn,cW as V}from"./main-Cv8ITM2j.js";import{s as H,w as un}from"./sphere-CdKyLmYN.js";import{h as gn,s as bn,p as fn}from"./mat4-B2F2AQse.js";import{e as U}from"./mat4f64-Dk4dwAN8.js";import{s as u,P as h,r as I,E as m,g as l,u as p,c as Y,o as w,p as ln,H as _,K as pn,j as B,A as D}from"./vec32-BVUDM8s2.js";import{A as L,M as dn,v as mn}from"./lineSegment-CS08xkyC.js";import{M as A,P as F,D as hn,O as $,y as In,c as e,f as N,H as Pn,x as Mn,U as wn,z as W,h as Nn,q as $n,w as vn}from"./plane-BsuS4rF2.js";const O=()=>en.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class An{constructor(){this.plane=A(),this.origin=M(),this.basis1=M(),this.basis2=M()}}const Tn=An;function P(n=sn){return{plane:A(n.plane),origin:S(n.origin),basis1:S(n.basis1),basis2:S(n.basis2)}}function yn(n,t,i){const o=Dn.get();return o.origin=n,o.basis1=t,o.basis2=i,o.plane=hn(0,0,0,0),y(o),o}function T(n,t=P()){return G(n.origin,n.basis1,n.basis2,t)}function xn(n,t){u(t.origin,n.origin),u(t.basis1,n.basis1),u(t.basis2,n.basis2),Nn(t.plane,n.plane)}function G(n,t,i,o=P()){return u(o.origin,n),u(o.basis1,t),u(o.basis2,i),y(o),Kn(o,"fromValues()"),o}function y(n){F(n.basis2,n.basis1,n.origin,n.plane)}function X(n,t,i){n!==i&&T(n,i);const o=l(e.get(),f(n),t);return p(i.origin,i.origin,o),i.plane[3]-=t,i}function En(n,t,i){return Z(t,i),X(i,z(n,n.origin),i),i}function Sn(n,t){const i=n.basis1[0],o=n.basis2[1],[r,s]=n.origin;return an(r-i,s-o,r+i,s+o,t)}function Z(n,t=P()){const i=(n[2]-n[0])/2,o=(n[3]-n[1])/2;return w(t.origin,n[0]+i,n[1]+o,0),w(t.basis1,i,0,0),w(t.basis2,0,o,0),wn(0,0,1,0,t.plane),t}function k(n,t,i){return!!Mn(n.plane,t,i)&&on(n,i)}function Vn(n,t,i){if(k(n,t,i))return i;const o=J(n,t,e.get());return p(i,t.origin,l(e.get(),t.direction,ln(t.origin,o)/I(t.direction))),i}function J(n,t,i){const o=v.get();rn(n,t,o,v.get());let r=Number.POSITIVE_INFINITY;for(const s of K){const a=C(n,s,x.get()),g=e.get();if($n(o,a,g)){const c=pn(e.get(),t.origin,g),b=Math.abs(cn(h(t.direction,c)));b<r&&(r=b,u(i,g))}}return r===Number.POSITIVE_INFINITY?Q(n,t,i):i}function _n(n,t){return(t-n)/t}function Q(n,t,i){if(k(n,t,i))return i;const o=v.get(),r=v.get();rn(n,t,o,r);let s=Number.POSITIVE_INFINITY;for(const a of K){const g=C(n,a,x.get()),c=e.get();if(vn(o,g,c)){const b=un(t,c);if(!W(r,c))continue;b<s&&(s=b,u(i,c))}}return q(n,t.origin)<s&&nn(n,t.origin,i),i}function nn(n,t,i){const o=Pn(n.plane,t,e.get()),r=L(R(n,n.basis1),o,-1,1,e.get()),s=L(R(n,n.basis2),o,-1,1,e.get());return Y(i,p(e.get(),r,s),n.origin),i}function tn(n,t,i){const{origin:o,basis1:r,basis2:s}=n,a=Y(e.get(),t,o),g=N(r,a),c=N(s,a),b=N(f(n),a);return w(i,g,c,b)}function q(n,t){const i=tn(n,t,e.get()),{basis1:o,basis2:r}=n,s=I(o),a=I(r),g=Math.max(Math.abs(i[0])-s,0),c=Math.max(Math.abs(i[1])-a,0),b=i[2];return g*g+c*c+b*b}function On(n,t){return Math.sqrt(q(n,t))}function jn(n,t){let i=Number.NEGATIVE_INFINITY;for(const o of K){const r=C(n,o,x.get()),s=dn(r,t);s>i&&(i=s)}return Math.sqrt(i)}function Fn(n,t){return W(n.plane,t)&&on(n,t)}function Hn(n,t,i,o){return Cn(n,i,o)}function z(n,t){const i=-n.plane[3];return N(f(n),t)-i}function Yn(n,t,i,o){const r=z(n,t),s=l(Bn,f(n),i-r);return p(o,t,s),o}function kn(n,t){return _(n.basis1,t.basis1)&&_(n.basis2,t.basis2)&&_(n.origin,t.origin)}function qn(n,t,i){return n!==i&&T(n,i),gn(d,t),bn(d,d),m(i.basis1,n.basis1,d),m(i.basis2,n.basis2,d),m($(i.plane),$(n.plane),d),m(i.origin,n.origin,t),In(i.plane,i.plane,i.origin),i}function zn(n,t,i,o){return n!==o&&T(n,o),fn(j,t,i),m(o.basis1,n.basis1,j),m(o.basis2,n.basis2,j),y(o),o}function f(n){return $(n.plane)}function Cn(n,t,i){switch(t){case V.X:u(i,n.basis1),D(i,i);break;case V.Y:u(i,n.basis2),D(i,i);break;case V.Z:u(i,f(n))}return i}function on(n,t){const i=Y(e.get(),t,n.origin),o=B(n.basis1),r=B(n.basis2),s=h(n.basis1,i),a=h(n.basis2,i);return-s-o<0&&s-o<0&&-a-r<0&&a-r<0}function R(n,t){const i=x.get();return u(i.origin,n.origin),u(i.vector,t),i}function C(n,t,i){const{basis1:o,basis2:r,origin:s}=n,a=l(e.get(),o,t.origin[0]),g=l(e.get(),r,t.origin[1]);p(i.origin,a,g),p(i.origin,i.origin,s);const c=l(e.get(),o,t.direction[0]),b=l(e.get(),r,t.direction[1]);return l(i.vector,p(c,c,b),2),i}function Kn(n,t){Math.abs(h(n.basis1,n.basis2)/(I(n.basis1)*I(n.basis2)))>1e-6&&O().warn(t,"Provided basis vectors are not perpendicular"),Math.abs(h(n.basis1,f(n)))>1e-6&&O().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-h(f(n),n.origin)-n.plane[3])>1e-6&&O().warn(t,"Plane offset is not consistent with plane origin")}function rn(n,t,i,o){const r=f(n);F(r,t.direction,t.origin,i),F($(i),r,t.origin,o)}const sn={plane:A(),origin:E(0,0,0),basis1:E(1,0,0),basis2:E(0,1,0)},v=new H(A),x=new H(mn),Bn=M(),Dn=new H(()=>P()),K=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],d=U(),j=U(),Jn=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:Tn,altitudeAt:z,axisAt:Hn,cameraFrustumCoverage:_n,closestPoint:Q,closestPointOnSilhouette:J,copy:T,copyWithoutVerify:xn,create:P,distance:On,distance2:q,distanceToSilhouette:jn,elevate:X,equals:kn,extrusionContainsPoint:Fn,fromAABoundingRect:Z,fromValues:G,getExtent:Sn,intersectRay:k,intersectRayClosestSilhouette:Vn,normal:f,projectPoint:nn,projectPointLocal:tn,rotate:zn,setAltitudeAt:Yn,setExtent:En,transform:qn,up:sn,updateUnboundedPlane:y,wrap:yn},Symbol.toStringTag,{value:"Module"}));export{G as J,y as K,P as W,T as Z,On as g,Jn as k,Z as t};
