import{e as v}from"./mat3f64-q3fE-ZOt.js";import{e as A}from"./quatf64-aQ5IuZRd.js";import{aC as z,cs as I}from"./main-7nqzKo04.js";import{e as x,o as O}from"./common-DQOJ18NT.js";import{P as S,_,Y as T,A as C}from"./vec32-CjC8RzUk.js";import{a as W,s as X,o as Z,m as k,j as w,_ as B,q as D,p as F,y as G,E as H,L as J}from"./vec42-CKs01hkn.js";function K(o){return o[0]=0,o[1]=0,o[2]=0,o[3]=1,o}function b(o,a,s){s*=.5;const r=Math.sin(s);return o[0]=r*a[0],o[1]=r*a[1],o[2]=r*a[2],o[3]=Math.cos(s),o}function N(o,a){const s=2*Math.acos(a[3]),r=Math.sin(s/2);return r>x()?(o[0]=a[0]/r,o[1]=a[1]/r,o[2]=a[2]/r):(o[0]=1,o[1]=0,o[2]=0),s}function j(o,a,s){const r=a[0],e=a[1],c=a[2],t=a[3],i=s[0],u=s[1],n=s[2],h=s[3];return o[0]=r*h+t*i+e*n-c*u,o[1]=e*h+t*u+c*i-r*n,o[2]=c*h+t*n+r*u-e*i,o[3]=t*h-r*i-e*u-c*n,o}function Q(o,a,s){s*=.5;const r=a[0],e=a[1],c=a[2],t=a[3],i=Math.sin(s),u=Math.cos(s);return o[0]=r*u+t*i,o[1]=e*u+c*i,o[2]=c*u-e*i,o[3]=t*u-r*i,o}function R(o,a,s){s*=.5;const r=a[0],e=a[1],c=a[2],t=a[3],i=Math.sin(s),u=Math.cos(s);return o[0]=r*u-c*i,o[1]=e*u+t*i,o[2]=c*u+r*i,o[3]=t*u-e*i,o}function U(o,a,s){s*=.5;const r=a[0],e=a[1],c=a[2],t=a[3],i=Math.sin(s),u=Math.cos(s);return o[0]=r*u+e*i,o[1]=e*u-r*i,o[2]=c*u+t*i,o[3]=t*u-c*i,o}function V(o,a){const s=a[0],r=a[1],e=a[2];return o[0]=s,o[1]=r,o[2]=e,o[3]=Math.sqrt(Math.abs(1-s*s-r*r-e*e)),o}function P(o,a,s,r){const e=a[0],c=a[1],t=a[2],i=a[3];let u,n,h,f,l,m=s[0],p=s[1],$=s[2],q=s[3];return n=e*m+c*p+t*$+i*q,n<0&&(n=-n,m=-m,p=-p,$=-$,q=-q),1-n>x()?(u=Math.acos(n),h=Math.sin(u),f=Math.sin((1-r)*u)/h,l=Math.sin(r*u)/h):(f=1-r,l=r),o[0]=f*e+l*m,o[1]=f*c+l*p,o[2]=f*t+l*$,o[3]=f*i+l*q,o}function oo(o){const a=O,s=a(),r=a(),e=a(),c=Math.sqrt(1-s),t=Math.sqrt(s);return o[0]=c*Math.sin(2*Math.PI*r),o[1]=c*Math.cos(2*Math.PI*r),o[2]=t*Math.sin(2*Math.PI*e),o[3]=t*Math.cos(2*Math.PI*e),o}function ao(o,a){const s=a[0],r=a[1],e=a[2],c=a[3],t=s*s+r*r+e*e+c*c,i=t?1/t:0;return o[0]=-s*i,o[1]=-r*i,o[2]=-e*i,o[3]=c*i,o}function ro(o,a){return o[0]=-a[0],o[1]=-a[1],o[2]=-a[2],o[3]=a[3],o}function E(o,a){const s=a[0]+a[4]+a[8];let r;if(s>0)r=Math.sqrt(s+1),o[3]=.5*r,r=.5/r,o[0]=(a[5]-a[7])*r,o[1]=(a[6]-a[2])*r,o[2]=(a[1]-a[3])*r;else{let e=0;a[4]>a[0]&&(e=1),a[8]>a[3*e+e]&&(e=2);const c=(e+1)%3,t=(e+2)%3;r=Math.sqrt(a[3*e+e]-a[3*c+c]-a[3*t+t]+1),o[e]=.5*r,r=.5/r,o[3]=(a[3*c+t]-a[3*t+c])*r,o[c]=(a[3*c+e]+a[3*e+c])*r,o[t]=(a[3*t+e]+a[3*e+t])*r}return o}function eo(o,a,s,r){const e=.5*Math.PI/180;a*=e,s*=e,r*=e;const c=Math.sin(a),t=Math.cos(a),i=Math.sin(s),u=Math.cos(s),n=Math.sin(r),h=Math.cos(r);return o[0]=c*u*h-t*i*n,o[1]=t*i*h+c*u*n,o[2]=t*u*n-c*i*h,o[3]=t*u*h+c*i*n,o}function so(o){return"quat("+o[0]+", "+o[1]+", "+o[2]+", "+o[3]+")"}const co=W,to=X,io=Z,uo=j,no=k,ho=w,Mo=B,L=D,fo=L,Y=F,lo=Y,d=G,mo=H,po=J;function $o(o,a,s){const r=S(a,s);return r<-.999999?(_(M,qo,a),T(M)<1e-6&&_(M,Po,a),C(M,M),b(o,M,Math.PI),o):r>.999999?(o[0]=0,o[1]=0,o[2]=0,o[3]=1,o):(_(M,a,s),o[0]=M[0],o[1]=M[1],o[2]=M[2],o[3]=1+r,d(o,o))}const M=z(),qo=I(1,0,0),Po=I(0,1,0);function _o(o,a,s,r,e,c){return P(g,a,e,c),P(y,s,r,c),P(o,g,y,2*c*(1-c)),o}const g=A(),y=A();function go(o,a,s,r){const e=yo;return e[0]=s[0],e[3]=s[1],e[6]=s[2],e[1]=r[0],e[4]=r[1],e[7]=r[2],e[2]=-a[0],e[5]=-a[1],e[8]=-a[2],d(o,E(o,e))}const yo=v();Object.freeze(Object.defineProperty({__proto__:null,add:io,calculateW:V,conjugate:ro,copy:co,dot:ho,equals:po,exactEquals:mo,fromEuler:eo,fromMat3:E,getAxisAngle:N,identity:K,invert:ao,len:fo,length:L,lerp:Mo,mul:uo,multiply:j,normalize:d,random:oo,rotateX:Q,rotateY:R,rotateZ:U,rotationTo:$o,scale:no,set:to,setAxes:go,setAxisAngle:b,slerp:P,sqlerp:_o,sqrLen:lo,squaredLength:Y,str:so},Symbol.toStringTag,{value:"Module"}));export{ao as L,mo as N,ro as O,$o as R,eo as T,to as X,b,N as v,j as x};
