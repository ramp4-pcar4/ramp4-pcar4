import{p as O}from"./main-8009ebf4.js";const j=O.getLogger("esri.views.3d.support.buffer.math");function z(t,r,e){if(t.count!==r.count)return void j.error("source and destination buffers need to have the same number of elements");const s=t.count,u=e[0],d=e[1],f=e[2],i=e[4],o=e[5],n=e[6],c=e[8],a=e[9],l=e[10],p=e[12],B=e[13],M=e[14],g=t.typedBuffer,h=t.typedBufferStride,m=r.typedBuffer,v=r.typedBufferStride;for(let y=0;y<s;y++){const S=y*h,b=y*v,_=m[b],x=m[b+1],I=m[b+2];g[S]=u*_+i*x+c*I+p,g[S+1]=d*_+o*x+a*I+B,g[S+2]=f*_+n*x+l*I+M}}function $(t,r,e){if(t.count!==r.count)return void j.error("source and destination buffers need to have the same number of elements");const s=t.count,u=e[0],d=e[1],f=e[2],i=e[3],o=e[4],n=e[5],c=e[6],a=e[7],l=e[8],p=t.typedBuffer,B=t.typedBufferStride,M=r.typedBuffer,g=r.typedBufferStride;for(let h=0;h<s;h++){const m=h*B,v=h*g,y=M[v],S=M[v+1],b=M[v+2];p[m]=u*y+i*S+c*b,p[m+1]=d*y+o*S+a*b,p[m+2]=f*y+n*S+l*b}}function P(t,r,e){const s=Math.min(t.count,r.count),u=t.typedBuffer,d=t.typedBufferStride,f=r.typedBuffer,i=r.typedBufferStride;for(let o=0;o<s;o++){const n=o*d,c=o*i;u[n]=e*f[c],u[n+1]=e*f[c+1],u[n+2]=e*f[c+2]}}function T(t,r){const e=Math.min(t.count,r.count),s=t.typedBuffer,u=t.typedBufferStride,d=r.typedBuffer,f=r.typedBufferStride;for(let i=0;i<e;i++){const o=i*u,n=i*f,c=d[n],a=d[n+1],l=d[n+2],p=c*c+a*a+l*l;if(p>0){const B=1/Math.sqrt(p);s[o]=B*c,s[o+1]=B*a,s[o+2]=B*l}}}function q(t,r,e){const s=Math.min(t.count,r.count),u=t.typedBuffer,d=t.typedBufferStride,f=r.typedBuffer,i=r.typedBufferStride;for(let o=0;o<s;o++){const n=o*d,c=o*i;u[n]=f[c]>>e,u[n+1]=f[c+1]>>e,u[n+2]=f[c+2]>>e}}Object.freeze(Object.defineProperty({__proto__:null,normalize:T,scale:P,shiftRight:q,transformMat3:$,transformMat4:z},Symbol.toStringTag,{value:"Module"}));function w(t,r,e){const s=t.typedBuffer,u=t.typedBufferStride,d=r.typedBuffer,f=r.typedBufferStride,i=e?e.count:r.count;let o=(e&&e.dstIndex?e.dstIndex:0)*u,n=(e&&e.srcIndex?e.srcIndex:0)*f;for(let c=0;c<i;++c)s[o]=d[n],s[o+1]=d[n+1],s[o+2]=d[n+2],o+=u,n+=f}function L(t,r,e,s,u){const d=t.typedBuffer,f=t.typedBufferStride,i=u?.count??t.count;let o=(u?.dstIndex??0)*f;for(let n=0;n<i;++n)d[o]=r,d[o+1]=e,d[o+2]=s,o+=f}Object.freeze(Object.defineProperty({__proto__:null,copy:w,fill:L},Symbol.toStringTag,{value:"Module"}));export{L as a,j as b,w as e,P as f,q as n,T as o,$ as r,z as t};
