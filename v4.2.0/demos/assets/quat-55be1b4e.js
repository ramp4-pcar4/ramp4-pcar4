import{e as L}from"./mat3f64-221ce671.js";import{e as y}from"./quatf64-3363c48e.js";import{aG as A,aH as O,aI as S,aJ as T,aK as Y,aL as W,aM as X,aN as D,aO as G,aP as H,aQ as J,aR as K,aS as N,aT as P,aU as Q,aV as R,aW as U,aX as _,aY as V}from"./main-8009ebf4.js";function Z(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function b(n,a,e){e*=.5;const o=Math.sin(e);return n[0]=o*a[0],n[1]=o*a[1],n[2]=o*a[2],n[3]=Math.cos(e),n}function k(n,a){const e=2*Math.acos(a[3]),o=Math.sin(e/2);return o>A()?(n[0]=a[0]/o,n[1]=a[1]/o,n[2]=a[2]/o):(n[0]=1,n[1]=0,n[2]=0),e}function j(n,a,e){const o=a[0],r=a[1],c=a[2],t=a[3],u=e[0],i=e[1],h=e[2],M=e[3];return n[0]=o*M+t*u+r*h-c*i,n[1]=r*M+t*i+c*u-o*h,n[2]=c*M+t*h+o*i-r*u,n[3]=t*M-o*u-r*i-c*h,n}function w(n,a,e){e*=.5;const o=a[0],r=a[1],c=a[2],t=a[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i+t*u,n[1]=r*i+c*u,n[2]=c*i-r*u,n[3]=t*i-o*u,n}function B(n,a,e){e*=.5;const o=a[0],r=a[1],c=a[2],t=a[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i-c*u,n[1]=r*i+t*u,n[2]=c*i+o*u,n[3]=t*i-r*u,n}function C(n,a,e){e*=.5;const o=a[0],r=a[1],c=a[2],t=a[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i+r*u,n[1]=r*i-o*u,n[2]=c*i+t*u,n[3]=t*i-c*u,n}function F(n,a){const e=a[0],o=a[1],r=a[2];return n[0]=e,n[1]=o,n[2]=r,n[3]=Math.sqrt(Math.abs(1-e*e-o*o-r*r)),n}function g(n,a,e,o){const r=a[0],c=a[1],t=a[2],u=a[3];let i,h,M,l,f,m=e[0],q=e[1],p=e[2],$=e[3];return h=r*m+c*q+t*p+u*$,h<0&&(h=-h,m=-m,q=-q,p=-p,$=-$),1-h>A()?(i=Math.acos(h),M=Math.sin(i),l=Math.sin((1-o)*i)/M,f=Math.sin(o*i)/M):(l=1-o,f=o),n[0]=l*r+f*m,n[1]=l*c+f*q,n[2]=l*t+f*p,n[3]=l*u+f*$,n}function nn(n){const a=V,e=a(),o=a(),r=a(),c=Math.sqrt(1-e),t=Math.sqrt(e);return n[0]=c*Math.sin(2*Math.PI*o),n[1]=c*Math.cos(2*Math.PI*o),n[2]=t*Math.sin(2*Math.PI*r),n[3]=t*Math.cos(2*Math.PI*r),n}function an(n,a){const e=a[0],o=a[1],r=a[2],c=a[3],t=e*e+o*o+r*r+c*c,u=t?1/t:0;return n[0]=-e*u,n[1]=-o*u,n[2]=-r*u,n[3]=c*u,n}function on(n,a){return n[0]=-a[0],n[1]=-a[1],n[2]=-a[2],n[3]=a[3],n}function v(n,a){const e=a[0]+a[4]+a[8];let o;if(e>0)o=Math.sqrt(e+1),n[3]=.5*o,o=.5/o,n[0]=(a[5]-a[7])*o,n[1]=(a[6]-a[2])*o,n[2]=(a[1]-a[3])*o;else{let r=0;a[4]>a[0]&&(r=1),a[8]>a[3*r+r]&&(r=2);const c=(r+1)%3,t=(r+2)%3;o=Math.sqrt(a[3*r+r]-a[3*c+c]-a[3*t+t]+1),n[r]=.5*o,o=.5/o,n[3]=(a[3*c+t]-a[3*t+c])*o,n[c]=(a[3*c+r]+a[3*r+c])*o,n[t]=(a[3*t+r]+a[3*r+t])*o}return n}function rn(n,a,e,o){const r=.5*Math.PI/180;a*=r,e*=r,o*=r;const c=Math.sin(a),t=Math.cos(a),u=Math.sin(e),i=Math.cos(e),h=Math.sin(o),M=Math.cos(o);return n[0]=c*i*M-t*u*h,n[1]=t*u*M+c*i*h,n[2]=t*i*h-c*u*M,n[3]=t*i*M+c*u*h,n}function en(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const cn=O,tn=S,un=T,hn=j,Mn=Y,sn=W,ln=X,z=D,fn=z,E=G,mn=E,d=H,qn=J,pn=K;function $n(n,a,e){const o=N(a,e);return o<-.999999?(P(s,gn,a),Q(s)<1e-6&&P(s,Pn,a),R(s,s),b(n,s,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(P(s,a,e),n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=1+o,d(n,n))}const s=U(),gn=_(1,0,0),Pn=_(0,1,0);function dn(n,a,e,o,r,c){return g(I,a,r,c),g(x,e,o,c),g(n,I,x,2*c*(1-c)),n}const I=y(),x=y();function In(n,a,e,o){const r=xn;return r[0]=e[0],r[3]=e[1],r[6]=e[2],r[1]=o[0],r[4]=o[1],r[7]=o[2],r[2]=-a[0],r[5]=-a[1],r[8]=-a[2],d(n,v(n,r))}const xn=L();Object.freeze(Object.defineProperty({__proto__:null,add:un,calculateW:F,conjugate:on,copy:cn,dot:sn,equals:pn,exactEquals:qn,fromEuler:rn,fromMat3:v,getAxisAngle:k,identity:Z,invert:an,len:fn,length:z,lerp:ln,mul:hn,multiply:j,normalize:d,random:nn,rotateX:w,rotateY:B,rotateZ:C,rotationTo:$n,scale:Mn,set:tn,setAxes:In,setAxisAngle:b,slerp:g,sqlerp:dn,sqrLen:mn,squaredLength:E,str:en},Symbol.toStringTag,{value:"Module"}));export{qn as K,on as S,rn as k,b as v,k as x,j as y};
