import { b3 as i$1 } from './main-5658cd6e.js';
import { t, n } from './Indices-ea523834.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function r(r,s,u){const c=Array.isArray(r),a=c?r.length/s:r.byteLength/(4*s),h=c?r:new Uint32Array(r,0,a*s),y=u?.minReduction??0,g=u?.originalIndices||null,A=g?g.length:0,w=u?.componentOffsets||null;let m=0;if(w)for(let t=0;t<w.length-1;t++){const n=w[t+1]-w[t];n>m&&(m=n);}else m=a;const b=Math.floor(1.1*m)+1;(null==f||f.length<2*b)&&(f=new Uint32Array(i$1(2*b)));for(let t=0;t<2*b;t++)f[t]=0;let U=0;const d=!!w&&!!g,p=d?A:a;let M=t(a/3);const j=new Uint32Array(A),q=1.96;let I=0!==y?Math.ceil(4*q*q/(y*y)*y*(1-y)):p,k=1,v=w?w[1]:p;for(let t=0;t<p;t++){if(t===I){const n=1-U/t;if(n+q*Math.sqrt(n*(1-n)/t)<y)return null;I*=2;}if(t===v){for(let t=0;t<2*b;t++)f[t]=0;if(g)for(let t=w[k-1];t<w[k];t++)j[t]=M[g[t]];v=w[++k];}const n=d?g[t]:t,e=n*s,r=o(h,e,s);let i=r%b,u=U;for(;0!==f[2*i+1];){if(f[2*i]===r){const t=f[2*i+1]-1;if(l(h,e,t*s,s)){u=M[t];break}}i++,i>=b&&(i-=b);}u===U&&(f[2*i]=r,f[2*i+1]=n+1,U++),M[n]=u;}if(0!==y&&1-U/a<y)return null;if(d){for(let t=w[k-1];t<j.length;t++)j[t]=M[g[t]];M=n(j);}const x=c?new Array(U):new Uint32Array(U*s);U=0;for(let t=0;t<p;t++)if(M[t]===U){i(h,(d?g[t]:t)*s,x,U*s,s),U++;}if(g&&!d){const t=new Uint32Array(A);for(let n=0;n<t.length;n++)t[n]=M[g[n]];M=n(t);}return {buffer:Array.isArray(x)?x:x.buffer,indices:M,uniqueCount:U}}function l(t,n,e,r){for(let l=0;l<r;l++)if(t[n+l]!==t[e+l])return !1;return !0}function i(t,n,e,r,l){for(let i=0;i<l;i++)e[r+i]=t[n+i];}function o(t,n,e){let r=0;for(let l=0;l<e;l++)r=t[n+l]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let f=null;

export { r };
