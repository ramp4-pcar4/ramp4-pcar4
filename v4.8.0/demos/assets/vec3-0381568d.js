import { J as s$1 } from './main-ba570a3b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const e$1=()=>s$1.getLogger("esri.views.3d.support.buffer.math");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(t,e,f){r(t.typedBuffer,e.typedBuffer,f,t.typedBufferStride,e.typedBufferStride);}function r(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return t;const o=t.length/f,u=r[0],i=r[1],a=r[2],s=r[4],d=r[5],l=r[6],c=r[8],p=r[9],h=r[10],y=r[12],m=r[13],B=r[14];let g=0,M=0;for(let S=0;S<o;S++){const r=e[g],o=e[g+1],S=e[g+2];t[M]=u*r+s*o+c*S+y,t[M+1]=i*r+d*o+p*S+m,t[M+2]=a*r+l*o+h*S+B,g+=n,M+=f;}return t}function f(t,e,r){n(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride);}function n(e,r,f,n=3,o=n){if(e.length/n!==Math.ceil(r.length/o))return void e$1().error("source and destination buffers need to have the same number of elements");const u=e.length/n,i=f[0],a=f[1],s=f[2],d=f[3],l=f[4],c=f[5],p=f[6],h=f[7],y=f[8];let m=0,B=0;for(let t=0;t<u;t++){const t=r[m],f=r[m+1],u=r[m+2];e[B]=i*t+d*f+p*u,e[B+1]=a*t+l*f+h*u,e[B+2]=s*t+c*f+y*u,m+=o,B+=n;}}function o(t,e,r){u(t.typedBuffer,e,r,t.typedBufferStride);}function u(t,e,r,f=3){const n=Math.min(t.length/f,e.count),o=e.typedBuffer,u=e.typedBufferStride;let i=0,a=0;for(let s=0;s<n;s++)t[a]=r*o[i],t[a+1]=r*o[i+1],t[a+2]=r*o[i+2],i+=u,a+=f;}function i(t,e,r,f=3,n=f){const o=t.length/f;if(o!==Math.ceil(e.length/n))return t;let u=0,i=0;for(let a=0;a<o;a++)t[i]=e[u]+r[0],t[i+1]=e[u+1]+r[1],t[i+2]=e[u+2]+r[2],u+=n,i+=f;return t}function a(t,e){s(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride);}function s(t,e,r=3,f=r){const n=Math.min(t.length/r,e.length/f);let o=0,u=0;for(let i=0;i<n;i++){const n=e[o],i=e[o+1],a=e[o+2],s=n*n+i*i+a*a;if(s>0){const e=1/Math.sqrt(s);t[u]=e*n,t[u+1]=e*i,t[u+2]=e*a;}o+=f,u+=r;}}function d(t,e,r){const f=Math.min(t.count,e.count),n=t.typedBuffer,o=t.typedBufferStride,u=e.typedBuffer,i=e.typedBufferStride;let a=0,s=0;for(let d=0;d<f;d++)n[s]=u[a]>>r,n[s+1]=u[a+1]>>r,n[s+2]=u[a+2]>>r,a+=i,s+=o;}Object.freeze(Object.defineProperty({__proto__:null,normalize:s,normalizeView:a,scale:u,scaleView:o,shiftRight:d,transformMat3:n,transformMat3View:f,transformMat4:r,transformMat4View:e,translate:i},Symbol.toStringTag,{value:"Module"}));

export { a, e$1 as b, e, f, i, n, o, r, s, u };
