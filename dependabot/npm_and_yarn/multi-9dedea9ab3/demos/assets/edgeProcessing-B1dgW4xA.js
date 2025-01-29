import { e as e$3 } from './deduplicate-ZjD5ZJSd.js';
import { H } from './InterleavedLayout-B-1YW3S9.js';
import { e } from './VertexAttribute-CwgXid27.js';
import { C } from './enums-CwcDCDam.js';
import { t as t$2 } from './VertexElementDescriptor-Bcj0303n.js';
import { ap as n$1, bV as l$1, je as x$1, fP as o$1, dI as r, al as P, jc as m$3, l1 as J, am as _, dJ as e$1, ao as z$1, gl as h$1, aB as e$2, dM as u$2, l2 as t$3 } from './main-YSH8Qvd0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function t$1(e,t=0){const n=e.stride;return Array.from(e.fields.keys()).map((s=>{const i=e.fields.get(s),u=i.constructor.ElementCount,f=o(i.constructor.ElementType),c=i.offset,m=i.optional?.glNormalized??!1;return new t$2(s,u,f,c,n,m,t)}))}function o(e){const r=n[e];if(r)return r;throw new Error("BufferType not supported in WebGL")}const n={u8:C.UNSIGNED_BYTE,u16:C.UNSIGNED_SHORT,u32:C.UNSIGNED_INT,i8:C.BYTE,i16:C.SHORT,i32:C.INT,f32:C.FLOAT};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const E$1=H().vec3f(e.POSITION).u16(e.COMPONENTINDEX).freeze(),I$1=H().vec2u8(e.SIDENESS).freeze();t$1(I$1);const T=H().vec3f(e.POSITION0).vec3f(e.POSITION1).vec2i16(e.NORMALCOMPRESSED).u16(e.COMPONENTINDEX).u8(e.VARIANTOFFSET,{glNormalized:!0}).u8(e.VARIANTSTROKE).u8(e.VARIANTEXTENSION,{glNormalized:!0}).freeze(),A$1=H().vec3f(e.POSITION0).vec3f(e.POSITION1).vec2i16(e.NORMALCOMPRESSED).vec2i16(e.NORMAL2COMPRESSED).u16(e.COMPONENTINDEX).u8(e.VARIANTOFFSET,{glNormalized:!0}).u8(e.VARIANTSTROKE).u8(e.VARIANTEXTENSION,{glNormalized:!0}).freeze();new Map([[e.POSITION0,0],[e.POSITION1,1],[e.COMPONENTINDEX,2],[e.VARIANTOFFSET,3],[e.VARIANTSTROKE,4],[e.VARIANTEXTENSION,5],[e.NORMALCOMPRESSED,6],[e.NORMAL2COMPRESSED,7],[e.SIDENESS,8]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let s$1 = class s{constructor(){this.position0=n$1(),this.position1=n$1(),this.faceNormal0=n$1(),this.faceNormal1=n$1(),this.componentIndex=0,this.cosAngle=0;}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const d$2=-1;function p$2(e,t,o){const c=e.vertices.position,l=e.vertices.componentIndex,i=j.position0,h=j.position1,g=j.faceNormal0,u=j.faceNormal1,{edges:p,normals:v}=w$1(e),V=p.length/4,y=t.allocate(V);let I=0;const N=V,b=o?.allocate(N);let E=0,D=0,k=0;x.length=0;for(let s=0;s<V;++s){const e=4*s;c.getVec(p.data[e],i),c.getVec(p.data[e+1],h);const t=x.pushNew();t.index=4*s,t.length=x$1(i,h);}x.sort(((e,t)=>t.length-e.length));const P$1=new Array,U=new Array;x.forAll((({length:e,index:n})=>{const w=p.data[n],x=p.data[n+1],V=p.data[n+2],N=p.data[n+3],q=N===d$2;if(c.getVec(w,i),c.getVec(x,h),q){const e=3*V;o$1(g,v.data[e],v.data[e+1],v.data[e+2]),r(u,g),j.componentIndex=l.get(w),j.cosAngle=P(g,u);}else {let e=3*V;if(o$1(g,v.data[e],v.data[e+1],v.data[e+2]),e=3*N,o$1(u,v.data[e],v.data[e+1],v.data[e+2]),j.componentIndex=l.get(w),j.cosAngle=P(g,u),m$2(j,M))return;j.cosAngle<-.9999&&r(u,g);}D+=e,k++,q||f$2(j,L)?(t.write(y,I++,j),P$1.push(e)):A(j,F)&&(b&&o&&o.write(b,E++,j),U.push(e));}));const q=new Float32Array(P$1.reverse()),z=new Float32Array(U.reverse()),B=b&&o?{instancesData:b.slice(0,E),lodInfo:{lengths:z}}:void 0;return {regular:{instancesData:y.slice(0,I),lodInfo:{lengths:q}},silhouette:B,averageEdgeLength:D/k}}function f$2(e,t){return e.cosAngle<t}function m$2(e,t){return e.cosAngle>t}function A(t,o){const n=m$3(t.cosAngle);J(N$1,t.position1,t.position0);return n*(P(_(I,t.faceNormal0,t.faceNormal1),N$1)>0?-1:1)>o}function w$1(e){const t=e.faces.length/3,o=e.faces,n=e.neighbors,s=e.vertices.position;V.length=y$1.length=0;for(let a=0;a<t;a++){const e=3*a,t=n[e],r=n[e+1],c=n[e+2],g=o[e],u=o[e+1],p=o[e+2];s.getVec(g,b),s.getVec(u,E),s.getVec(p,D),e$1(E,E,b),e$1(D,D,b),_(b,E,D),z$1(b,b),y$1.pushArray(b),(t===d$2||g<u)&&(V.push(g),V.push(u),V.push(a),V.push(t)),(r===d$2||u<p)&&(V.push(u),V.push(p),V.push(a),V.push(r)),(c===d$2||p<g)&&(V.push(p),V.push(g),V.push(a),V.push(c));}return {edges:V,normals:y$1}}class v{constructor(){this.index=0,this.length=0;}}const x=new l$1({allocator:e=>e||new v,deallocator:null}),V=new l$1({deallocator:null}),y$1=new l$1({deallocator:null}),j=new s$1,I=n$1(),N$1=n$1(),b=n$1(),E=n$1(),D=n$1(),F=h$1(4),M=Math.cos(F),k=h$1(35),L=Math.cos(k);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function t(t,o,n){const r=o/3,c=new Uint32Array(n+1),e=new Uint32Array(n+1),s=(t,o)=>{t<o?c[t+1]++:e[o+1]++;};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];s(o,n),s(n,r),s(r,o);}let f=0,l=0;for(let x=0;x<n;x++){const t=c[x+1],o=e[x+1];c[x+1]=f,e[x+1]=l,f+=t,l+=o;}const i=new Uint32Array(6*r),a=c[n],w=(t,o,n)=>{if(t<o){const r=c[t+1]++;i[2*r]=o,i[2*r+1]=n;}else {const r=e[o+1]++;i[2*a+2*r]=t,i[2*a+2*r+1]=n;}};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];w(o,n,x),w(n,r,x),w(r,o,x);}const y=(t,o)=>{const n=2*t,r=o-t;for(let c=1;c<r;c++){const t=i[n+2*c],o=i[n+2*c+1];let r=c-1;for(;r>=0&&i[n+2*r]>t;r--)i[n+2*r+2]=i[n+2*r],i[n+2*r+3]=i[n+2*r+1];i[n+2*r+2]=t,i[n+2*r+3]=o;}};for(let x=0;x<n;x++)y(c[x],c[x+1]),y(a+e[x],a+e[x+1]);const A=new Int32Array(3*r),U=(o,n)=>o===t[3*n]?0:o===t[3*n+1]?1:o===t[3*n+2]?2:-1,u=(t,o)=>{const n=U(t,o);A[3*o+n]=-1;},p=(t,o,n,r)=>{const c=U(t,o);A[3*o+c]=r;const e=U(n,r);A[3*r+e]=o;};for(let x=0;x<n;x++){let t=c[x];const o=c[x+1];let n=e[x];const r=e[x+1];for(;t<o&&n<r;){const o=i[2*t],r=i[2*a+2*n];o===r?(p(x,i[2*t+1],r,i[2*a+2*n+1]),t++,n++):o<r?(u(x,i[2*t+1]),t++):(u(r,i[2*a+2*n+1]),n++);}for(;t<o;)u(x,i[2*t+1]),t++;for(;n<r;){u(i[2*a+2*n],i[2*a+2*n+1]),n++;}}return A}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function s(t,n,r,o,a,s=2){const e=1/(Math.abs(r)+Math.abs(o)+Math.abs(a)),c=r*e,f=o*e,h=a<=0?(c>=0?1:-1)*(1-Math.abs(f)):c,u=a<=0?(f>=0?1:-1)*(1-Math.abs(c)):f,l=n*s;t[l]=i(h),t[l+1]=i(u);}function i(n){return e$2(Math.round(32767*n),-32767,32767)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const c=.7;let f$1 = class f{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?d$1:l;}write(t,o,e){B.seed=this._edgeHashFunction(e);const r=B.getIntRange(0,255),n=B.getIntRange(0,this.settings.variants-1),i=B.getFloat(),s=255*(.5*y(-(1-Math.min(i/c,1))+Math.max(0,i-c)/(1-c),1.2)+.5);t.position0.setVec(o,e.position0),t.position1.setVec(o,e.position1),t.componentIndex.set(o,e.componentIndex),t.variantOffset.set(o,r),t.variantStroke.set(o,n),t.variantExtension.set(o,s);}};const m$1=new Float32Array(6),p$1=new Uint32Array(m$1.buffer),u$1=new Uint32Array(1);function l(t){return m$1[0]=t.position0[0],m$1[1]=t.position0[1],m$1[2]=t.position0[2],m$1[3]=t.position1[0],m$1[4]=t.position1[1],m$1[5]=t.position1[2],u$1[0]=31*(31*(31*(31*(31*(166811+p$1[0])+p$1[1])+p$1[2])+p$1[3])+p$1[4])+p$1[5],u$1[0]}function d$1(t){const o=m$1;o[0]=h(t.position0[0]),o[1]=h(t.position0[1]),o[2]=h(t.position0[2]),o[3]=h(t.position1[0]),o[4]=h(t.position1[1]),o[5]=h(t.position1[2]),u$1[0]=5381;for(let e=0;e<p$1.length;e++)u$1[0]=31*u$1[0]+p$1[e];return u$1[0]}const g$1=1e4;function h(t){return Math.round(t*g$1)/g$1}function y(t,o){return Math.abs(t)**o*Math.sign(t)}class w{constructor(){this._commonWriter=new f$1;}updateSettings(t){this._commonWriter.updateSettings(t);}allocate(t){return T.createBuffer(t)}write(t,r,n){this._commonWriter.write(t,r,n),u$2(S,n.faceNormal0,n.faceNormal1),z$1(S,S);const{typedBuffer:s$1,typedBufferStride:a}=t.normalCompressed;s(s$1,r,S[0],S[1],S[2],a);}}w.Layout=T,w.glLayout=t$1(T,1);class N{constructor(){this._commonWriter=new f$1;}updateSettings(t){this._commonWriter.updateSettings(t);}allocate(t){return A$1.createBuffer(t)}write(t,o,e){this._commonWriter.write(t,o,e);{const{typedBuffer:r,typedBufferStride:n}=t.normalCompressed;s(r,o,e.faceNormal0[0],e.faceNormal0[1],e.faceNormal0[2],n);}{const{typedBuffer:r,typedBufferStride:n}=t.normal2Compressed;s(r,o,e.faceNormal1[0],e.faceNormal1[1],e.faceNormal1[2],n);}}}N.Layout=A$1,N.glLayout=t$1(A$1,1);const S=n$1(),B=new t$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function f(e){const t=u(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return g.updateSettings(e.writerSettings),a.updateSettings(e.writerSettings),p$2(t,g,a)}function u(r,i,n,o){if(i){const e=t(n,o,r.count);return new p(n,o,e,r)}const c=e$3(r.buffer,r.stride/4,{originalIndices:n,originalIndicesLength:o}),f=t(c.indices,o,c.uniqueCount);return {faces:c.indices,facesLength:c.indices.length,neighbors:f,vertices:E$1.createView(c.buffer)}}class p{constructor(e,t,r,i){this.faces=e,this.facesLength=t,this.neighbors=r,this.vertices=i;}}const g=new w,a=new N,d=H().vec3f(e.POSITION0).vec3f(e.POSITION1),m=H().vec3f(e.POSITION0).vec3f(e.POSITION1).u16(e.COMPONENTINDEX);

export { E$1 as E, d, f, m, p$2 as p, u };
