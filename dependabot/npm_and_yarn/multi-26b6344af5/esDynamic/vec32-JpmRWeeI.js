import{aI as z}from"./main-0iYVBzEC.js";import{o as st,e as nt}from"./common-CYWrYyJl.js";function b(t){const a=t[0],s=t[1],n=t[2];return Math.sqrt(a*a+s*s+n*n)}function _(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t}function A(t,a,s,n){return t[0]=a,t[1]=s,t[2]=n,t}function I(t,a,s){return t[0]=a[0]+s[0],t[1]=a[1]+s[1],t[2]=a[2]+s[2],t}function r(t,a,s){return t[0]=a[0]-s[0],t[1]=a[1]-s[1],t[2]=a[2]-s[2],t}function q(t,a,s){return t[0]=a[0]*s[0],t[1]=a[1]*s[1],t[2]=a[2]*s[2],t}function x(t,a,s){return t[0]=a[0]/s[0],t[1]=a[1]/s[1],t[2]=a[2]/s[2],t}function et(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t[2]=Math.ceil(a[2]),t}function ct(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t[2]=Math.floor(a[2]),t}function P(t,a){return t[0]=Math.abs(a[0]),t[1]=Math.abs(a[1]),t[2]=Math.abs(a[2]),t}function j(t,a){return t[0]=Math.sign(a[0]),t[1]=Math.sign(a[1]),t[2]=Math.sign(a[2]),t}function D(t,a,s){return t[0]=Math.min(a[0],s[0]),t[1]=Math.min(a[1],s[1]),t[2]=Math.min(a[2],s[2]),t}function E(t,a,s){return t[0]=Math.max(a[0],s[0]),t[1]=Math.max(a[1],s[1]),t[2]=Math.max(a[2],s[2]),t}function L(t,a=0,s=1){return t[0]=Math.min(Math.max(t[0],a),s),t[1]=Math.min(Math.max(t[1],a),s),t[2]=Math.min(Math.max(t[2],a),s),t}function ut(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t[2]=Math.round(a[2]),t}function N(t,a,s){return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t}function O(t,a,s,n){return t[0]=a[0]+s[0]*n,t[1]=a[1]+s[1]*n,t[2]=a[2]+s[2]*n,t}function g(t,a){const s=a[0]-t[0],n=a[1]-t[1],e=a[2]-t[2];return Math.sqrt(s*s+n*n+e*e)}function p(t,a){const s=a[0]-t[0],n=a[1]-t[1],e=a[2]-t[2];return s*s+n*n+e*e}function v(t){const a=t[0],s=t[1],n=t[2];return a*a+s*s+n*n}function Q(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t}function S(t,a){return t[0]=1/a[0],t[1]=1/a[1],t[2]=1/a[2],t}function l(t,a){const s=a[0],n=a[1],e=a[2];let c=s*s+n*n+e*e;return c>0&&(c=1/Math.sqrt(c),t[0]=a[0]*c,t[1]=a[1]*c,t[2]=a[2]*c),t}function y(t,a){return t[0]*a[0]+t[1]*a[1]+t[2]*a[2]}function X(t,a,s){const n=a[0],e=a[1],c=a[2],u=s[0],h=s[1],i=s[2];return t[0]=e*i-c*h,t[1]=c*u-n*i,t[2]=n*h-e*u,t}function it(t,a,s){const n=a[0],e=a[1],c=a[2],u=s[0],h=s[1],i=s[2],M=e*i-c*h,f=c*u-n*i,o=n*h-e*u,m=Math.sqrt(M*M+f*f+o*o);return t[0]=M/m,t[1]=f/m,t[2]=o/m,t}function Y(t,a,s,n){const e=a[0],c=a[1],u=a[2];return t[0]=e+n*(s[0]-e),t[1]=c+n*(s[1]-c),t[2]=u+n*(s[2]-u),t}function ht(t,a,s,n,e,c){const u=c*c,h=u*(2*c-3)+1,i=u*(c-2)+c,M=u*(c-1),f=u*(3-2*c);return t[0]=a[0]*h+s[0]*i+n[0]*M+e[0]*f,t[1]=a[1]*h+s[1]*i+n[1]*M+e[1]*f,t[2]=a[2]*h+s[2]*i+n[2]*M+e[2]*f,t}function Mt(t,a,s,n,e,c){const u=1-c,h=u*u,i=c*c,M=h*u,f=3*c*h,o=3*i*u,m=i*c;return t[0]=a[0]*M+s[0]*f+n[0]*o+e[0]*m,t[1]=a[1]*M+s[1]*f+n[1]*o+e[1]*m,t[2]=a[2]*M+s[2]*f+n[2]*o+e[2]*m,t}function ft(t,a=1){const s=st,n=2*s()*Math.PI,e=2*s()-1,c=Math.sqrt(1-e*e)*a;return t[0]=Math.cos(n)*c,t[1]=Math.sin(n)*c,t[2]=e*a,t}function Z(t,a,s){const n=a[0],e=a[1],c=a[2];return t[0]=s[0]*n+s[4]*e+s[8]*c+s[12],t[1]=s[1]*n+s[5]*e+s[9]*c+s[13],t[2]=s[2]*n+s[6]*e+s[10]*c+s[14],t}function w(t,a,s){const n=a[0],e=a[1],c=a[2];return t[0]=n*s[0]+e*s[3]+c*s[6],t[1]=n*s[1]+e*s[4]+c*s[7],t[2]=n*s[2]+e*s[5]+c*s[8],t}function B(t,a,s){const n=s[0],e=s[1],c=s[2],u=s[3],h=a[0],i=a[1],M=a[2],f=e*M-c*i,o=c*h-n*M,m=n*i-e*h,$=e*m-c*o,tt=c*f-n*m,at=n*o-e*f,d=2*u;return t[0]=h+f*d+2*$,t[1]=i+o*d+2*tt,t[2]=M+m*d+2*at,t}function ot(t,a,s,n){const e=[],c=[];return e[0]=a[0]-s[0],e[1]=a[1]-s[1],e[2]=a[2]-s[2],c[0]=e[0],c[1]=e[1]*Math.cos(n)-e[2]*Math.sin(n),c[2]=e[1]*Math.sin(n)+e[2]*Math.cos(n),t[0]=c[0]+s[0],t[1]=c[1]+s[1],t[2]=c[2]+s[2],t}function mt(t,a,s,n){const e=[],c=[];return e[0]=a[0]-s[0],e[1]=a[1]-s[1],e[2]=a[2]-s[2],c[0]=e[2]*Math.sin(n)+e[0]*Math.cos(n),c[1]=e[1],c[2]=e[2]*Math.cos(n)-e[0]*Math.sin(n),t[0]=c[0]+s[0],t[1]=c[1]+s[1],t[2]=c[2]+s[2],t}function H(t,a,s,n){const e=[],c=[];return e[0]=a[0]-s[0],e[1]=a[1]-s[1],e[2]=a[2]-s[2],c[0]=e[0]*Math.cos(n)-e[1]*Math.sin(n),c[1]=e[0]*Math.sin(n)+e[1]*Math.cos(n),c[2]=e[2],t[0]=c[0]+s[0],t[1]=c[1]+s[1],t[2]=c[2]+s[2],t}function J(t,a){l(K,t),l(R,a);const s=y(K,R);return s>1?0:s<-1?Math.PI:Math.acos(s)}const K=z(),R=z();function lt(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function T(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]}function W(t,a){if(t===a)return!0;const s=t[0],n=t[1],e=t[2],c=a[0],u=a[1],h=a[2],i=nt();return Math.abs(s-c)<=i*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(n-u)<=i*Math.max(1,Math.abs(n),Math.abs(u))&&Math.abs(e-h)<=i*Math.max(1,Math.abs(e),Math.abs(h))}function k(t,a,s){const n=s[0]-a[0],e=s[1]-a[1],c=s[2]-a[2];let u=n*n+e*e+c*c;return u>0?(u=1/Math.sqrt(u),t[0]=n*u,t[1]=e*u,t[2]=c*u,t):(t[0]=0,t[1]=0,t[2]=0,t)}const C=r,dt=q,bt=x,F=g,G=p,U=b,V=v;Object.freeze(Object.defineProperty({__proto__:null,abs:P,add:I,angle:J,bezier:Mt,ceil:et,clamp:L,copy:_,cross:X,crossAndNormalize:it,direction:k,dist:F,distance:g,div:bt,divide:x,dot:y,equals:W,exactEquals:T,floor:ct,hermite:ht,inverse:S,len:U,length:b,lerp:Y,max:E,min:D,mul:dt,multiply:q,negate:Q,normalize:l,random:ft,rotateX:ot,rotateY:mt,rotateZ:H,round:ut,scale:N,scaleAndAdd:O,set:A,sign:j,sqrDist:G,sqrLen:V,squaredDistance:p,squaredLength:v,str:lt,sub:C,subtract:r,transformMat3:w,transformMat4:Z,transformQuat:B},Symbol.toStringTag,{value:"Module"}));export{l as A,J as B,Z as E,T as H,Y as I,W as J,k as K,w as N,y as P,B as Q,C as R,F as W,G as X,U as Y,V as Z,X as _,L as b,r as c,E as d,q as e,P as f,N as g,x as i,v as j,D as l,j as m,A as o,g as p,O as q,b as r,_ as s,I as u,p as v,H as w,Q as y,S as z};
