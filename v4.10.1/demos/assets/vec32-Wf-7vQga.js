import{aC as q}from"./main-DVcB5zI_.js";import{e as D,o as I}from"./common-DQOJ18NT.js";function x(r){const n=r[0],o=r[1],u=r[2];return Math.sqrt(n*n+o*o+u*u)}function L(r,n){return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function O(r,n,o,u){return r[0]=n,r[1]=o,r[2]=u,r}function S(r,n,o){return r[0]=n[0]+o[0],r[1]=n[1]+o[1],r[2]=n[2]+o[2],r}function g(r,n,o){return r[0]=n[0]-o[0],r[1]=n[1]-o[1],r[2]=n[2]-o[2],r}function p(r,n,o){return r[0]=n[0]*o[0],r[1]=n[1]*o[1],r[2]=n[2]*o[2],r}function v(r,n,o){return r[0]=n[0]/o[0],r[1]=n[1]/o[1],r[2]=n[2]/o[2],r}function C(r,n){return r[0]=Math.ceil(n[0]),r[1]=Math.ceil(n[1]),r[2]=Math.ceil(n[2]),r}function E(r,n){return r[0]=Math.floor(n[0]),r[1]=Math.floor(n[1]),r[2]=Math.floor(n[2]),r}function N(r,n){return r[0]=Math.abs(n[0]),r[1]=Math.abs(n[1]),r[2]=Math.abs(n[2]),r}function Q(r,n){return r[0]=Math.sign(n[0]),r[1]=Math.sign(n[1]),r[2]=Math.sign(n[2]),r}function T(r,n,o){return r[0]=Math.min(n[0],o[0]),r[1]=Math.min(n[1],o[1]),r[2]=Math.min(n[2],o[2]),r}function X(r,n,o){return r[0]=Math.max(n[0],o[0]),r[1]=Math.max(n[1],o[1]),r[2]=Math.max(n[2],o[2]),r}function Y(r,n=0,o=1){return r[0]=Math.min(Math.max(r[0],n),o),r[1]=Math.min(Math.max(r[1],n),o),r[2]=Math.min(Math.max(r[2],n),o),r}function Z(r,n){return r[0]=Math.round(n[0]),r[1]=Math.round(n[1]),r[2]=Math.round(n[2]),r}function k(r,n,o){return r[0]=n[0]*o,r[1]=n[1]*o,r[2]=n[2]*o,r}function w(r,n,o,u){return r[0]=n[0]+o[0]*u,r[1]=n[1]+o[1]*u,r[2]=n[2]+o[2]*u,r}function y(r,n){const o=n[0]-r[0],u=n[1]-r[1],s=n[2]-r[2];return Math.sqrt(o*o+u*u+s*s)}function z(r,n){const o=n[0]-r[0],u=n[1]-r[1],s=n[2]-r[2];return o*o+u*u+s*s}function P(r){const n=r[0],o=r[1],u=r[2];return n*n+o*o+u*u}function B(r,n){return r[0]=-n[0],r[1]=-n[1],r[2]=-n[2],r}function F(r,n){return r[0]=1/n[0],r[1]=1/n[1],r[2]=1/n[2],r}function l(r,n){const o=n[0],u=n[1],s=n[2];let e=o*o+u*u+s*s;return e>0&&(e=1/Math.sqrt(e),r[0]=n[0]*e,r[1]=n[1]*e,r[2]=n[2]*e),r}function _(r,n){return r[0]*n[0]+r[1]*n[1]+r[2]*n[2]}function G(r,n,o){const u=n[0],s=n[1],e=n[2],c=o[0],i=o[1],t=o[2];return r[0]=s*t-e*i,r[1]=e*c-u*t,r[2]=u*i-s*c,r}function H(r,n,o){const u=n[0],s=n[1],e=n[2],c=o[0],i=o[1],t=o[2],h=s*t-e*i,M=e*c-u*t,f=u*i-s*c,a=Math.sqrt(h*h+M*M+f*f);return r[0]=h/a,r[1]=M/a,r[2]=f/a,r}function J(r,n,o,u){const s=n[0],e=n[1],c=n[2];return r[0]=s+u*(o[0]-s),r[1]=e+u*(o[1]-e),r[2]=c+u*(o[2]-c),r}function K(r,n,o,u,s,e){const c=e*e,i=c*(2*e-3)+1,t=c*(e-2)+e,h=c*(e-1),M=c*(3-2*e);return r[0]=n[0]*i+o[0]*t+u[0]*h+s[0]*M,r[1]=n[1]*i+o[1]*t+u[1]*h+s[1]*M,r[2]=n[2]*i+o[2]*t+u[2]*h+s[2]*M,r}function R(r,n,o,u,s,e){const c=1-e,i=c*c,t=e*e,h=i*c,M=3*e*i,f=3*t*c,a=t*e;return r[0]=n[0]*h+o[0]*M+u[0]*f+s[0]*a,r[1]=n[1]*h+o[1]*M+u[1]*f+s[1]*a,r[2]=n[2]*h+o[2]*M+u[2]*f+s[2]*a,r}function U(r,n=1){const o=I,u=2*o()*Math.PI,s=2*o()-1,e=Math.sqrt(1-s*s)*n;return r[0]=Math.cos(u)*e,r[1]=Math.sin(u)*e,r[2]=s*n,r}function V(r,n,o){const u=n[0],s=n[1],e=n[2];return r[0]=o[0]*u+o[4]*s+o[8]*e+o[12],r[1]=o[1]*u+o[5]*s+o[9]*e+o[13],r[2]=o[2]*u+o[6]*s+o[10]*e+o[14],r}function W(r,n,o){const u=n[0],s=n[1],e=n[2];return r[0]=u*o[0]+s*o[3]+e*o[6],r[1]=u*o[1]+s*o[4]+e*o[7],r[2]=u*o[2]+s*o[5]+e*o[8],r}function r1(r,n,o){const u=o[0],s=o[1],e=o[2],c=o[3],i=n[0],t=n[1],h=n[2],M=s*h-e*t,f=e*i-u*h,a=u*t-s*i,A=s*a-e*f,$=e*M-u*a,j=u*f-s*M,m=2*c;return r[0]=i+M*m+2*A,r[1]=t+f*m+2*$,r[2]=h+a*m+2*j,r}function n1(r,n,o,u){const s=[],e=[];return s[0]=n[0]-o[0],s[1]=n[1]-o[1],s[2]=n[2]-o[2],e[0]=s[0],e[1]=s[1]*Math.cos(u)-s[2]*Math.sin(u),e[2]=s[1]*Math.sin(u)+s[2]*Math.cos(u),r[0]=e[0]+o[0],r[1]=e[1]+o[1],r[2]=e[2]+o[2],r}function o1(r,n,o,u){const s=[],e=[];return s[0]=n[0]-o[0],s[1]=n[1]-o[1],s[2]=n[2]-o[2],e[0]=s[2]*Math.sin(u)+s[0]*Math.cos(u),e[1]=s[1],e[2]=s[2]*Math.cos(u)-s[0]*Math.sin(u),r[0]=e[0]+o[0],r[1]=e[1]+o[1],r[2]=e[2]+o[2],r}function u1(r,n,o,u){const s=[],e=[];return s[0]=n[0]-o[0],s[1]=n[1]-o[1],s[2]=n[2]-o[2],e[0]=s[0]*Math.cos(u)-s[1]*Math.sin(u),e[1]=s[0]*Math.sin(u)+s[1]*Math.cos(u),e[2]=s[2],r[0]=e[0]+o[0],r[1]=e[1]+o[1],r[2]=e[2]+o[2],r}function s1(r,n){l(d,r),l(b,n);const o=_(d,b);return o>1?0:o<-1?Math.PI:Math.acos(o)}const d=q(),b=q();function e1(r){return"vec3("+r[0]+", "+r[1]+", "+r[2]+")"}function c1(r,n){return r[0]===n[0]&&r[1]===n[1]&&r[2]===n[2]}function t1(r,n){if(r===n)return!0;const o=r[0],u=r[1],s=r[2],e=n[0],c=n[1],i=n[2],t=D();return Math.abs(o-e)<=t*Math.max(1,Math.abs(o),Math.abs(e))&&Math.abs(u-c)<=t*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(s-i)<=t*Math.max(1,Math.abs(s),Math.abs(i))}function i1(r,n,o){const u=o[0]-n[0],s=o[1]-n[1],e=o[2]-n[2];let c=u*u+s*s+e*e;return c>0?(c=1/Math.sqrt(c),r[0]=u*c,r[1]=s*c,r[2]=e*c,r):(r[0]=0,r[1]=0,r[2]=0,r)}const h1=g,M1=p,f1=v,a1=y,m1=z,l1=x,d1=P;Object.freeze(Object.defineProperty({__proto__:null,abs:N,add:S,angle:s1,bezier:R,ceil:C,clamp:Y,copy:L,cross:G,crossAndNormalize:H,direction:i1,dist:a1,distance:y,div:f1,divide:v,dot:_,equals:t1,exactEquals:c1,floor:E,hermite:K,inverse:F,len:l1,length:x,lerp:J,max:X,min:T,mul:M1,multiply:p,negate:B,normalize:l,random:U,rotateX:n1,rotateY:o1,rotateZ:u1,round:Z,scale:k,scaleAndAdd:w,set:O,sign:Q,sqrDist:m1,sqrLen:d1,squaredDistance:z,squaredLength:P,str:e1,sub:h1,subtract:g,transformMat3:W,transformMat4:V,transformQuat:r1},Symbol.toStringTag,{value:"Module"}));export{l as A,V as E,c1 as H,J as I,t1 as J,i1 as K,W as N,_ as P,r1 as Q,h1 as R,a1 as W,m1 as X,l1 as Y,d1 as Z,G as _,g as c,X as d,p as e,N as f,k as g,v as i,P as j,T as l,Q as m,O as o,y as p,w as q,x as r,L as s,S as u,z as v,u1 as w,B as y,F as z};
