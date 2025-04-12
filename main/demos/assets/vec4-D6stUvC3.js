import{n as x,ck as L}from"./main-Bd_03BNf.js";const P=()=>x.getLogger("esri.views.3d.support.buffer.math");function $(t,n,e){if(t.count!==n.count)return;const o=t.count,d=e[0],r=e[1],c=e[2],f=e[3],u=e[4],i=e[5],s=e[6],l=e[7],y=e[8],w=e[9],B=e[10],h=e[11],m=e[12],T=e[13],v=e[14],V=e[15],a=t.typedBuffer,z=t.typedBufferStride,p=n.typedBuffer,_=n.typedBufferStride;for(let j=0;j<o;j++){const S=j*z,g=j*_,M=p[g],b=p[g+1],G=p[g+2],O=p[g+3];a[S]=d*M+u*b+y*G+m*O,a[S+1]=r*M+i*b+w*G+T*O,a[S+2]=c*M+s*b+B*G+v*O,a[S+3]=f*M+l*b+h*G+V*O}}function A(t,n,e,o=4,d=o){if(t.length/o!=n.length/d)return void P().error("source and destination buffers need to have the same number of elements");const r=t.length/o,c=e[0],f=e[1],u=e[2],i=e[3],s=e[4],l=e[5],y=e[6],w=e[7],B=e[8],h=e[9],m=e[10],T=e[11],v=e[12],V=e[13],a=e[14],z=e[15];let p=0,_=0;for(let j=0;j<r;j++){const S=n[p],g=n[p+1],M=n[p+2],b=n[p+3];t[_]=c*S+s*g+B*M+v*b,t[_+1]=f*S+l*g+h*M+V*b,t[_+2]=u*S+y*g+m*M+a*b,t[_+3]=i*S+w*g+T*M+z*b,p+=d,_+=o}}function C(t,n,e){R(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function R(t,n,e,o=4,d=o){if(t.length/o!=n.length/d)return;const r=t.length/o,c=e[0],f=e[1],u=e[2],i=e[3],s=e[4],l=e[5],y=e[6],w=e[7],B=e[8];let h=0,m=0;for(let T=0;T<r;T++){const v=n[h],V=n[h+1],a=n[h+2],z=n[h+3];t[m]=c*v+i*V+y*a,t[m+1]=f*v+s*V+w*a,t[m+2]=u*v+l*V+B*a,t[m+3]=z,h+=d,m+=o}}function D(t,n){const e=Math.min(t.count,n.count),o=t.typedBuffer,d=t.typedBufferStride,r=n.typedBuffer,c=n.typedBufferStride;for(let f=0;f<e;f++){const u=f*d,i=f*c,s=r[i],l=r[i+1],y=r[i+2],w=s*s+l*l+y*y;if(w>0){const B=1/Math.sqrt(w);o[u]=B*s,o[u+1]=B*l,o[u+2]=B*y}}}function E(t,n,e){k(t.typedBuffer,n,e,t.typedBufferStride)}function k(t,n,e,o=4){const d=Math.min(t.length/o,n.count),r=n.typedBuffer,c=n.typedBufferStride;let f=0,u=0;for(let i=0;i<d;i++)t[u]=e*r[f],t[u+1]=e*r[f+1],t[u+2]=e*r[f+2],t[u+3]=e*r[f+3],f+=c,u+=o}function F(t,n,e,o){q(t.typedBuffer,n,e,o,t.typedBufferStride)}function q(t,n,e,o,d=4){const r=Math.min(t.length/d,n.count),c=n.typedBuffer,f=n.typedBufferStride;let u=0,i=0;const s=1/L;for(let l=0;l<r;l++)t[i]=o*(e*c[u])**s,t[i+1]=o*(e*c[u+1])**s,t[i+2]=o*(e*c[u+2])**s,t[i+3]=o*e*c[u+3],u+=f,i+=d}Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:q,linearToSRGBView:F,normalize:D,scale:k,scaleView:E,transformMat3:R,transformMat3View:C,transformMat4:A,transformMat4View:$},Symbol.toStringTag,{value:"Module"}));export{F as c,q as d,C as n,R as o,D as u};
