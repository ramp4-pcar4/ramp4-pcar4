import { G as n$1 } from './main-C4Zge2Yj.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const e$1=()=>n$1.getLogger("esri.views.3d.support.buffer.math");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function e(t,e,r){if(t.count!==e.count)return;const f=t.count,n=r[0],o=r[1],u=r[2],s=r[3],c=r[4],i=r[5],a=r[6],d=r[7],l=r[8],p=r[9],y=r[10],m=r[11],B=r[12],h=r[13],g=r[14],S=r[15],M=t.typedBuffer,b=t.typedBufferStride,j=e.typedBuffer,v=e.typedBufferStride;for(let _=0;_<f;_++){const t=_*b,e=_*v,r=j[e],f=j[e+1],w=j[e+2],V=j[e+3];M[t]=n*r+c*f+l*w+B*V,M[t+1]=o*r+i*f+p*w+h*V,M[t+2]=u*r+a*f+y*w+g*V,M[t+3]=s*r+d*f+m*w+S*V;}}function r(e,r,f,n=4,o=n){if(e.length/n!=r.length/o)return void e$1().error("source and destination buffers need to have the same number of elements");const u=e.length/n,s=f[0],c=f[1],i=f[2],a=f[3],d=f[4],l=f[5],p=f[6],y=f[7],m=f[8],B=f[9],h=f[10],g=f[11],S=f[12],M=f[13],b=f[14],j=f[15];let v=0,_=0;for(let t=0;t<u;t++){const t=r[v],f=r[v+1],u=r[v+2],w=r[v+3];e[_]=s*t+d*f+m*u+S*w,e[_+1]=c*t+l*f+B*u+M*w,e[_+2]=i*t+p*f+h*u+b*w,e[_+3]=a*t+y*f+g*u+j*w,v+=o,_+=n;}}function f(t,e,r){n(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride);}function n(t,e,r,f=4,n=f){if(t.length/f!=e.length/n)return;const o=t.length/f,u=r[0],s=r[1],c=r[2],i=r[3],a=r[4],d=r[5],l=r[6],p=r[7],y=r[8];let m=0,B=0;for(let h=0;h<o;h++){const r=e[m],o=e[m+1],h=e[m+2],g=e[m+3];t[B]=u*r+i*o+l*h,t[B+1]=s*r+a*o+p*h,t[B+2]=c*r+d*o+y*h,t[B+3]=g,m+=n,B+=f;}}function o(t,e){const r=Math.min(t.count,e.count),f=t.typedBuffer,n=t.typedBufferStride,o=e.typedBuffer,u=e.typedBufferStride;for(let s=0;s<r;s++){const t=s*n,e=s*u,r=o[e],c=o[e+1],i=o[e+2],a=r*r+c*c+i*i;if(a>0){const e=1/Math.sqrt(a);f[t]=e*r,f[t+1]=e*c,f[t+2]=e*i;}}}function u(t,e,r){s(t.typedBuffer,e,r,t.typedBufferStride);}function s(t,e,r,f=4){const n=Math.min(t.length/f,e.count),o=e.typedBuffer,u=e.typedBufferStride;let s=0,c=0;for(let i=0;i<n;i++)t[c]=r*o[s],t[c+1]=r*o[s+1],t[c+2]=r*o[s+2],t[c+3]=r*o[s+3],s+=u,c+=f;}Object.freeze(Object.defineProperty({__proto__:null,normalize:o,scale:s,scaleView:u,transformMat3:n,transformMat3View:f,transformMat4:r,transformMat4View:e},Symbol.toStringTag,{value:"Module"}));

export { f, n, o, s, u };
