import { e as e$4 } from './deduplicate-CyxPmdDE.js';
import { H } from './InterleavedLayout-B1VjdkiX.js';
import { e as e$1 } from './VertexAttribute-NSFkUlX8.js';
import { C } from './enums-CgzwTbC2.js';
import { t as t$1 } from './VertexElementDescriptor-BrMxIhbJ.js';
import { hw as h$2, kq as x, hX as x$1, fv as o$1, ct as r$1, ch as P, hV as m$3, kr as J, ci as _$1, cu as e$2, ck as z, cl as n$1, aj as e$3, cx as u$3, ks as t$2 } from './main-48Jy8Lgr.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function r(e,r=0){const n=e.stride;return Array.from(e.fields.keys()).map((i=>{const s=e.fields.get(i),u=s.constructor.ElementCount,f=o(s.constructor.ElementType),c=s.offset,l=!(!s.optional||!s.optional.glNormalized);return new t$1(i,u,f,c,n,l,r)}))}function o(e){const t=n[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}const n={u8:C.UNSIGNED_BYTE,u16:C.UNSIGNED_SHORT,u32:C.UNSIGNED_INT,i8:C.BYTE,i16:C.SHORT,i32:C.INT,f32:C.FLOAT};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const I$1=H().vec3f(e$1.POSITION).u16(e$1.COMPONENTINDEX),S=H().vec2u8(e$1.SIDENESS);r(S);const A$1=H().vec3f(e$1.POSITION0).vec3f(e$1.POSITION1).vec2i16(e$1.NORMALCOMPRESSED).u16(e$1.COMPONENTINDEX).u8(e$1.VARIANTOFFSET,{glNormalized:!0}).u8(e$1.VARIANTSTROKE).u8(e$1.VARIANTEXTENSION,{glNormalized:!0}),e=H().vec3f(e$1.POSITION0).vec3f(e$1.POSITION1).vec2i16(e$1.NORMALCOMPRESSED).vec2i16(e$1.NORMAL2COMPRESSED).u16(e$1.COMPONENTINDEX).u8(e$1.VARIANTOFFSET,{glNormalized:!0}).u8(e$1.VARIANTSTROKE).u8(e$1.VARIANTEXTENSION,{glNormalized:!0});new Map([[e$1.POSITION0,0],[e$1.POSITION1,1],[e$1.COMPONENTINDEX,2],[e$1.VARIANTOFFSET,3],[e$1.VARIANTSTROKE,4],[e$1.VARIANTEXTENSION,5],[e$1.NORMALCOMPRESSED,6],[e$1.NORMAL2COMPRESSED,7],[e$1.SIDENESS,8]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const m$2=-1;var p$2;function u$2(n,a,i,l=E){const f=n.vertices.position,g=n.vertices.componentIndex,p=h$2(l.anglePlanar),u=h$2(l.angleSignificantEdge),y=Math.cos(u),V=Math.cos(p),x$2=I.edge,N=x$2.position0,S=x$2.position1,j=x$2.faceNormal0,D=x$2.faceNormal1,F=w$1(n),b=d$2(n),L=b.length/4,k=a.allocate(L);let C=0;const H=L,K=i.allocate(H);let M=0,O=0,P$1=0;const T=x(0,L),U=new Float32Array(L);U.forEach(((e,t,n)=>{f.getVec(b[4*t],N),f.getVec(b[4*t+1],S),n[t]=x$1(N,S);})),T.sort(((e,t)=>U[t]-U[e]));const q=new Array,z=new Array;for(let e=0;e<L;e++){const t=T[e],n=U[t],o=b[4*t],l=b[4*t+1],u=b[4*t+2],d=b[4*t+3],w=d===m$2;if(f.getVec(o,N),f.getVec(l,S),w)o$1(j,F[3*u],F[3*u+1],F[3*u+2]),r$1(D,j),x$2.componentIndex=g.get(o),x$2.cosAngle=P(j,D);else {if(o$1(j,F[3*u],F[3*u+1],F[3*u+2]),o$1(D,F[3*d],F[3*d+1],F[3*d+2]),x$2.componentIndex=g.get(o),x$2.cosAngle=P(j,D),v(x$2,V))continue;x$2.cosAngle<-.9999&&r$1(D,j);}O+=n,P$1++,w||h$1(x$2,y)?(a.write(k,C++,x$2),q.push(n)):A(x$2,p)&&(i.write(K,M++,x$2),z.push(n));}const B=new Float32Array(q.reverse()),G=new Float32Array(z.reverse());return {regular:{instancesData:a.trim(k,C),lodInfo:{lengths:B}},silhouette:{instancesData:i.trim(K,M),lodInfo:{lengths:G}},averageEdgeLength:O/P$1}}function h$1(e,t){return e.cosAngle<t}function v(e,t){return e.cosAngle>t}function A(e,t){const o=m$3(e.cosAngle),r=I.fwd,c=I.ortho;J(r,e.position1,e.position0);return o*(P(_$1(c,e.faceNormal0,e.faceNormal1),r)>0?-1:1)>t}function d$2(e){const t=e.faces.length/3,n=e.faces,o=e.neighbors;let r=0;for(let a=0;a<t;a++){const e=o[3*a],t=o[3*a+1],c=o[3*a+2],s=n[3*a],i=n[3*a+1],l=n[3*a+2];r+=e===m$2||s<i?1:0,r+=t===m$2||i<l?1:0,r+=c===m$2||l<s?1:0;}const c=new Int32Array(4*r);let s=0;for(let a=0;a<t;a++){const e=o[3*a],t=o[3*a+1],r=o[3*a+2],i=n[3*a],l=n[3*a+1],f=n[3*a+2];(e===m$2||i<l)&&(c[s++]=i,c[s++]=l,c[s++]=a,c[s++]=e),(t===m$2||l<f)&&(c[s++]=l,c[s++]=f,c[s++]=a,c[s++]=t),(r===m$2||f<i)&&(c[s++]=f,c[s++]=i,c[s++]=a,c[s++]=r);}return c}function w$1(e){const t=e.faces.length/3,n=e.vertices.position,o=e.faces,r=y$1.v0,c=y$1.v1,s=y$1.v2,a=new Float32Array(3*t);for(let g=0;g<t;g++){const e=o[3*g],t=o[3*g+1],m=o[3*g+2];n.getVec(e,r),n.getVec(t,c),n.getVec(m,s),e$2(c,c,r),e$2(s,s,r),_$1(r,c,s),z(r,r),a[3*g]=r[0],a[3*g+1]=r[1],a[3*g+2]=r[2];}return a}!function(e){e[e.SOLID=0]="SOLID",e[e.SKETCH=1]="SKETCH";}(p$2||(p$2={}));const I={edge:{position0:n$1(),position1:n$1(),faceNormal0:n$1(),faceNormal1:n$1(),componentIndex:0,cosAngle:0},ortho:n$1(),fwd:n$1()},y$1={v0:n$1(),v1:n$1(),v2:n$1()},E={anglePlanar:4,angleSignificantEdge:35};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t(t,o,n){const r=o/3,c=new Uint32Array(n+1),e=new Uint32Array(n+1),s=(t,o)=>{t<o?c[t+1]++:e[o+1]++;};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];s(o,n),s(n,r),s(r,o);}let f=0,l=0;for(let x=0;x<n;x++){const t=c[x+1],o=e[x+1];c[x+1]=f,e[x+1]=l,f+=t,l+=o;}const i=new Uint32Array(6*r),a=c[n],w=(t,o,n)=>{if(t<o){const r=c[t+1]++;i[2*r]=o,i[2*r+1]=n;}else {const r=e[o+1]++;i[2*a+2*r]=t,i[2*a+2*r+1]=n;}};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];w(o,n,x),w(n,r,x),w(r,o,x);}const y=(t,o)=>{const n=2*t,r=o-t;for(let c=1;c<r;c++){const t=i[n+2*c],o=i[n+2*c+1];let r=c-1;for(;r>=0&&i[n+2*r]>t;r--)i[n+2*r+2]=i[n+2*r],i[n+2*r+3]=i[n+2*r+1];i[n+2*r+2]=t,i[n+2*r+3]=o;}};for(let x=0;x<n;x++)y(c[x],c[x+1]),y(a+e[x],a+e[x+1]);const A=new Int32Array(3*r),U=(o,n)=>o===t[3*n]?0:o===t[3*n+1]?1:o===t[3*n+2]?2:-1,u=(t,o)=>{const n=U(t,o);A[3*o+n]=-1;},p=(t,o,n,r)=>{const c=U(t,o);A[3*o+c]=r;const e=U(n,r);A[3*r+e]=o;};for(let x=0;x<n;x++){let t=c[x];const o=c[x+1];let n=e[x];const r=e[x+1];for(;t<o&&n<r;){const o=i[2*t],r=i[2*a+2*n];o===r?(p(x,i[2*t+1],r,i[2*a+2*n+1]),t++,n++):o<r?(u(x,i[2*t+1]),t++):(u(r,i[2*a+2*n+1]),n++);}for(;t<o;)u(x,i[2*t+1]),t++;for(;n<r;){u(i[2*a+2*n],i[2*a+2*n+1]),n++;}}return A}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function s(t,n,r,o,a,s=2){const e=1/(Math.abs(r)+Math.abs(o)+Math.abs(a)),c=r*e,f=o*e,h=a<=0?(c>=0?1:-1)*(1-Math.abs(f)):c,u=a<=0?(f>=0?1:-1)*(1-Math.abs(c)):f,l=n*s;t[l]=i(h),t[l+1]=i(u);}function i(n){return e$3(Math.round(32767*n),-32767,32767)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class c{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?l:p$1;}write(t,e,o){const r=this._edgeHashFunction(o);N.seed=r;const n=N.getIntRange(0,255),i=N.getIntRange(0,this.settings.variants-1),s=.7,a=N.getFloat(),c=255*(.5*h(-(1-Math.min(a/s,1))+Math.max(0,a-s)/(1-s),1.2)+.5);t.position0.setVec(e,o.position0),t.position1.setVec(e,o.position1),t.componentIndex.set(e,o.componentIndex),t.variantOffset.set(e,n),t.variantStroke.set(e,i),t.variantExtension.set(e,c);}trim(t,e){return t.slice(0,e)}}const m$1=new Float32Array(6),f$1=new Uint32Array(m$1.buffer),u$1=new Uint32Array(1);function p$1(t){const e=m$1;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],u$1[0]=5381;for(let o=0;o<f$1.length;o++)u$1[0]=31*u$1[0]+f$1[o];return u$1[0]}function l(t){const e=m$1;e[0]=g$1(t.position0[0]),e[1]=g$1(t.position0[1]),e[2]=g$1(t.position0[2]),e[3]=g$1(t.position1[0]),e[4]=g$1(t.position1[1]),e[5]=g$1(t.position1[2]),u$1[0]=5381;for(let o=0;o<f$1.length;o++)u$1[0]=31*u$1[0]+f$1[o];return u$1[0]}const d$1=1e4;function g$1(t){return Math.round(t*d$1)/d$1}function h(t,e){const o=t<0?-1:1;return Math.abs(t)**e*o}class y{constructor(){this._commonWriter=new c;}updateSettings(t){this._commonWriter.updateSettings(t);}allocate(t){return A$1.createBuffer(t)}write(t,r,n){this._commonWriter.write(t,r,n),u$3(_,n.faceNormal0,n.faceNormal1),z(_,_);const{typedBuffer:s$1,typedBufferStride:a}=t.normalCompressed;s(s$1,r,_[0],_[1],_[2],a);}trim(t,e){return this._commonWriter.trim(t,e)}}y.Layout=A$1,y.glLayout=r(A$1,1);class w{constructor(){this._commonWriter=new c;}updateSettings(t){this._commonWriter.updateSettings(t);}allocate(t){return e.createBuffer(t)}write(t,e,o){this._commonWriter.write(t,e,o);{const{typedBuffer:r,typedBufferStride:n}=t.normalCompressed;s(r,e,o.faceNormal0[0],o.faceNormal0[1],o.faceNormal0[2],n);}{const{typedBuffer:r,typedBufferStride:n}=t.normal2Compressed;s(r,e,o.faceNormal1[0],o.faceNormal1[1],o.faceNormal1[2],n);}}trim(t,e){return this._commonWriter.trim(t,e)}}w.Layout=e,w.glLayout=r(e,1);const _=n$1(),N=new t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function f(e){const t=u(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return g.updateSettings(e.writerSettings),a.updateSettings(e.writerSettings),u$2(t,g,a)}function u(r,i,n,o){if(i){const e=t(n,o,r.count);return new p(n,o,e,r)}const c=e$4(r.buffer,r.stride/4,{originalIndices:n,originalIndicesLength:o}),f=t(c.indices,o,c.uniqueCount);return {faces:c.indices,facesLength:c.indices.length,neighbors:f,vertices:I$1.createView(c.buffer)}}class p{constructor(e,t,r,i){this.faces=e,this.facesLength=t,this.neighbors=r,this.vertices=i;}}const g=new y,a=new w,d=H().vec3f(e$1.POSITION0).vec3f(e$1.POSITION1),m=H().vec3f(e$1.POSITION0).vec3f(e$1.POSITION1).u16(e$1.COMPONENTINDEX);

export { I$1 as I, u$2 as a, d, f, m, u };
