import{f9 as I,aK as U,fa as cn,fb as fn,fc as pn,fd as mn,d4 as An,af as gn,n as Tn,fe as yn,ff as Rn,ad as En,fg as dn}from"./main-Cv8ITM2j.js";import{j as b,n as J}from"./mat3-CruJiiUv.js";import{e as Q}from"./mat3f64-q3fE-ZOt.js";import{h as x,B as Fn,f as Z,n as Nn,c as L}from"./mat4-B2F2AQse.js";import{e as S,o as nn}from"./mat4f64-Dk4dwAN8.js";import{N as W,A as On,y as rn,c as $n,E as hn}from"./vec32-BVUDM8s2.js";import{w as _n,a as tn}from"./spatialReferenceEllipsoidUtils-DkO0LU_t.js";import{m as $}from"./computeTranslationToOriginAndRotation-CHf7QIvT.js";import{c as K}from"./projectPointToVector-X6b2qKyo.js";import{t as wn,p as Pn}from"./meshVertexSpaceUtils-BGlYQi5T.js";import{n as V,d as en,a as w,r as B}from"./vec3-DHEhN-3e.js";import{o as on}from"./projectBuffer-C3I4aBT7.js";import{i as N,T as O}from"./BufferView-DPDzFzUm.js";import{o as Mn}from"./vec4-C5KLQNE_.js";const ur="Projection may be possible after calling projection.load().";function E(n,r,t,o){n.error(`Failed to project from (wkid:${r.wkid}) to (wkid:${t.wkid}).${o?" ":""}${o}`)}function Cn(n,r,t,o,e,l){return v(F.TO_PCPF,N.fromTypedArray(n),A.NORMAL,O.fromTypedArray(r),t,O.fromTypedArray(o),e,N.fromTypedArray(l))?l:null}function xn(n,r,t,o,e,l){return v(F.FROM_PCPF,N.fromTypedArray(n),A.NORMAL,O.fromTypedArray(r),t,O.fromTypedArray(o),e,N.fromTypedArray(l))?l:null}function Sn(n,r,t,o){return on(n,r,0,t,o,0)?t:null}function vn(n,r,t,o){return on(n,r,0,t,o,0)?t:null}function an(n,r,t){return b(p,t),V(r,n,p),I(p)&&en(r,r),r}function ln(n,r,t){return J(p,t),Mn(r,n,p),I(p)&&en(r,r,4),r}function cr(n,r,t,o){const e=r===A.NORMAL;return sn(n,r,t,(l,a)=>{const i=Math.cos(An(l));a[0]=e?i:1/i,a[1]=1},o)}function fr(n,r,t,o){const e=r===A.NORMAL;return sn(n,r,t,(l,a)=>{const i=Math.cosh(-l/gn.radius);a[0]=1,a[1]=e?i:1/i},o)}function sn(n,r,t,o,e){const l=r===A.NORMAL?3:4,a=[0,0];for(let i=0,c=1;i<n.length;i+=l,c+=3){o(t[c],a);const s=n[i]*a[0],f=n[i+1]*a[1],u=n[i+2],T=1/Math.sqrt(s*s+f*f+u*u);e[i]=s*T,e[i+1]=f*T,e[i+2]=u*T,l===4&&(e[i+3]=n[i+3])}return e}function Gn(n,r,t,o,e,l){if(!v(F.TO_PCPF,N.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),A.TANGENT,O.fromTypedArray(r),t,O.fromTypedArray(o),e,N.fromTypedArray(l,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}function Ln(n,r,t,o,e,l){if(!v(F.FROM_PCPF,N.fromTypedArray(n,16),A.TANGENT,O.fromTypedArray(r),t,O.fromTypedArray(o),e,N.fromTypedArray(l,16)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}var A,F;function X(n,r,t,o,e){switch($(o,t,h,o),n===F.FROM_PCPF&&x(h,h),r){case A.NORMAL:return b(e,h);case A.TANGENT:return J(e,h)}}function v(n,r,t,o,e,l,a,i){if(!r)return;const c=o.count;if(Un(e))for(let s=0;s<c;s++)l.getVec(s,C),r.getVec(s,R),W(R,R,X(n,t,C,a,p)),i.setVec(s,R);else for(let s=0;s<c;s++){l.getVec(s,C),r.getVec(s,R);const f=cn(o.get(s,1));let u=Math.cos(f);t===A.TANGENT!=(n===F.TO_PCPF)&&(u=1/u),X(n,t,C,a,p),n===F.TO_PCPF?(p[0]*=u,p[1]*=u,p[2]*=u,p[3]*=u,p[4]*=u,p[5]*=u):(p[0]*=u,p[3]*=u,p[6]*=u,p[1]*=u,p[4]*=u,p[7]*=u),W(R,R,p),On(R,R),i.setVec(s,R)}return i}function Un(n){return n.isWGS84||fn(n)||pn(n)||mn(n)}(function(n){n[n.NORMAL=0]="NORMAL",n[n.TANGENT=1]="TANGENT"})(A||(A={})),function(n){n[n.TO_PCPF=0]="TO_PCPF",n[n.FROM_PCPF=1]="FROM_PCPF"}(F||(F={}));const C=U(),R=U(),h=S(),p=Q(),g=()=>Tn.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function pr(n,r,{vertexSpace:t,spatialReference:o}){if(t.type==="georeferenced"){const s=n;if(!K(r,s,o))return!1;const{origin:f}=t;return $n(n,s,f),!0}const e=tn(o),l=n;if(!K(r,l,e))return!1;const{origin:a}=t,i=H;if(!$(o,a,i,e))return!1;const c=x(H,i);return c!=null&&(hn(n,l,c),!0)}function mr(n,r,t){const{vertexSpace:o,transform:e,vertexAttributes:l}=n,a=wn(o)?e:null,i=G(n.spatialReference,t,d.SOURCE_AND_TARGET);if(Pn(o,r)&&(!a||Fn(a.localMatrix,nn))&&P(i)){const{position:c,normal:s,tangent:f}=l,u=t?.allowBufferReuse;return{position:u?c:c.slice(),normal:u?s:s?.slice(),tangent:u?f:f?.slice()}}switch(n.vertexSpace.type){case"local":return r.type==="local"?kn(n,n.vertexSpace,r.origin,t):Vn(n,n.vertexSpace,r.origin,t);case"georeferenced":return r.type==="local"?Bn(n,n.vertexSpace,r.origin,t):bn(n,n.vertexSpace,r.origin,t)}}function bn({vertexAttributes:n,transform:r,spatialReference:t},{origin:o},e,l){const a=G(t,l,d.SOURCE_AND_TARGET),i=o||!P(a)?Nn(m,r?.localMatrix??nn):null;i&&j(i,t,l,d.SOURCE_AND_TARGET);const{position:c,normal:s,tangent:f}=i?k(n,i):n,u=l?.allowBufferReuse,T=u?c:new Float64Array(c.length);let y=c;if(o&&(y=w(T,y,o)),e){const M=rn(un,e);y=w(T,y,M)}return{position:y!==n.position||u?y:y.slice(),normal:s!==n.normal||u?s:s?.slice(),tangent:f!==n.tangent||u?f:f?.slice()}}function D(n,r){return r?.useEllipsoid&&dn(n)?_n:tn(n)}function Vn({spatialReference:n,vertexAttributes:r,transform:t},{origin:o},e,l){const a=D(n,l);if(!$(n,o,m,a))return E(g(),n,a),null;t&&L(m,m,t.localMatrix),j(m,n,l,d.SOURCE);const i=new Float64Array(r.position.length),c=jn(r.position,m,n,i,a);if(!c)return null;const s=Yn(c,n,i,a,r.normal,m);if(r.normal&&!s)return null;const f=qn(c,n,i,a,r.tangent,m);if(r.tangent&&!f)return null;if(e){const u=rn(un,e);w(c,c,u)}return{position:c,normal:s,tangent:f}}function Bn({vertexAttributes:n,spatialReference:r,transform:t},{origin:o},e,l){const a=D(r,l);if(!$(r,e,m,a))return E(g(),r,a),null;const i=1/G(r,l,d.TARGET);Z(m,m,[i,i,i]);const c=x(_,m),{position:s,normal:f,tangent:u}=Dn(n,o,t),T=new Float64Array(s.length),y=Wn(s,r,c,T,a);if(!y)return null;const M=b(zn,c),Y=Kn(f,s,r,T,a,M,f!==n.normal?f:void 0);if(!Y&&f)return null;const q=Xn(u,s,r,T,a,M,u!==n.tangent?u:void 0);return!q&&u?null:{position:y,normal:Y,tangent:q}}function Dn(n,r,t){if(!r)return n;if(!t){const{position:e,normal:l,tangent:a}=n;return{position:w(new Float64Array(e.length),e,r),tangent:a,normal:l}}const o=k(n,t.localMatrix);return w(o.position,o.position,r),o}function kn({vertexAttributes:n,spatialReference:r,transform:t},{origin:o},e,l){const a=D(r,l);if(!$(r,o,m,a))return E(g(),r,a),null;if(t&&L(m,m,t.localMatrix),!$(r,e,_,a))return E(g(),a,r),null;x(_,_);const i=L(m,_,m);return j(i,r,l,d.SOURCE_AND_TARGET),k(n,i)}function k(n,r){const t=new Float64Array(n.position.length);B(t,n.position,r);const o=n.normal?new Float32Array(n.normal.length):null,e=n.tangent?new Float32Array(n.tangent.length):null;return o&&n.normal&&an(n.normal,o,r),e&&n.tangent&&ln(n.tangent,e,r),{position:t,normal:o,tangent:e}}function jn(n,r,t,o,e){B(o,n,r);const l=new Float64Array(n.length);return vn(o,e,l,t)?l:(E(g(),e,t),null)}function Yn(n,r,t,o,e,l){if(e==null)return null;const a=new Float32Array(e.length);return an(e,a,l),xn(a,n,r,t,o,a)?a:(E(g(),o,r),null)}function qn(n,r,t,o,e,l){if(e==null)return null;const a=new Float32Array(e.length);return ln(e,a,l),Ln(a,n,r,t,o,a)?a:(E(g(),o,r),null)}function j(n,r,t,o){const e=G(r,t,o);P(e)||Z(n,n,[e,e,e])}function G(n,r,t){const o=!!(t&d.SOURCE),e=!!(t&d.TARGET),l=r?.sourceUnit,a=r?.targetUnit;if(!l&&!a)return 1;let i=z(l,n);o||!l||P(i)||(g().warn("source unit conversion not supported"),i=1);let c=1/z(a,n);return e||!a||P(c)||(g().warn("target unit conversion not supported"),c=1),i*c}function P(n){return yn(n,1)}function Wn(n,r,t,o,e){const l=Sn(n,r,o,e);if(!l)return E(g(),r,e),null;const a=new Float64Array(l.length);return B(a,l,t),a}function Kn(n,r,t,o,e,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Cn(n,r,t,o,e,i)?(V(i,i,l),i):(E(g(),t,e),null)}function Xn(n,r,t,o,e,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Gn(n,r,t,o,e,i)?(V(i,i,l,4),i):(E(g(),t,e),null)}function z(n,r){if(n==null)return 1;const t=Rn(r);return 1/En(t,"meters",n)}const m=S(),_=S(),zn=Q(),un=U(),H=S();var d;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET",n[n.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(d||(d={}));export{mr as B,ln as C,Cn as E,E as F,Ln as G,fr as L,ur as O,xn as R,A as V,an as _,cr as b,Sn as g,vn as h,pr as k,z as n,Gn as w};
