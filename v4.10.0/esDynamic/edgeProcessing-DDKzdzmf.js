import{e as At}from"./deduplicate-KcKkQhWf.js";import{H as F}from"./InterleavedLayout-BMFLQBGy.js";import{e as l}from"./VertexAttribute-DqD5S0a2.js";import{t as K}from"./glUtil-BonlLoq2.js";import{ap as T,cM as k,dR as Et,dQ as j,dF as st,al as q,dU as Tt,dT as wt,am as at,dB as rt,ao as it,fA as ct,b0 as Mt,dE as vt,mj as Rt}from"./main-DCIX61zy.js";const lt=F().vec3f(l.POSITION).u16(l.COMPONENTINDEX).freeze(),Pt=F().vec2u8(l.SIDENESS).freeze();K(Pt);const G=F().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}).freeze(),J=F().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).vec2i16(l.NORMAL2COMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}).freeze();l.POSITION0,l.POSITION1,l.COMPONENTINDEX,l.VARIANTOFFSET,l.VARIANTSTROKE,l.VARIANTEXTENSION,l.NORMALCOMPRESSED,l.NORMAL2COMPRESSED,l.SIDENESS;let yt=class{constructor(){this.position0=T(),this.position1=T(),this.faceNormal0=T(),this.faceNormal1=T(),this.componentIndex=0,this.cosAngle=0}};const X=-1;function ut(t,n,o){const a=t.vertices.position,r=t.vertices.componentIndex,c=O.position0,p=O.position1,g=O.faceNormal0,m=O.faceNormal1,{edges:i,normals:d}=Ft(t),N=i.length/4,A=n.allocate(N);let V=0;const B=N,w=o?.allocate(B);let z=0,e=0,s=0;_.length=0;for(let h=0;h<N;++h){const v=4*h;a.getVec(i.data[v],c),a.getVec(i.data[v+1],p);const C=_.pushNew();C.index=4*h,C.length=Et(c,p)}_.sort((h,v)=>v.length-h.length);const f=new Array,u=new Array;_.forAll(({length:h,index:v})=>{const C=i.data[v],St=i.data[v+1],et=i.data[v+2],nt=i.data[v+3],ot=nt===X;if(a.getVec(C,c),a.getVec(St,p),ot){const E=3*et;j(g,d.data[E],d.data[E+1],d.data[E+2]),st(m,g),O.componentIndex=r.get(C),O.cosAngle=q(g,m)}else{let E=3*et;if(j(g,d.data[E],d.data[E+1],d.data[E+2]),E=3*nt,j(m,d.data[E],d.data[E+1],d.data[E+2]),O.componentIndex=r.get(C),O.cosAngle=q(g,m),Dt(O,xt))return;O.cosAngle<-.9999&&st(m,g)}e+=h,s++,ot||Vt(O,zt)?(n.write(A,V++,O),f.push(h)):Ct(O,dt)&&(w&&o&&o.write(w,z++,O),u.push(h))});const S=new Float32Array(f.reverse()),M=new Float32Array(u.reverse()),R=w&&o?{instancesData:w.slice(0,z),lodInfo:{lengths:M}}:void 0;return{regular:{instancesData:A.slice(0,V),lodInfo:{lengths:S}},silhouette:R,averageEdgeLength:e/s}}function Vt(t,n){return t.cosAngle<n}function Dt(t,n){return t.cosAngle>n}function Ct(t,n){const o=Tt(t.cosAngle);return wt(ft,t.position1,t.position0),o*(q(at(bt,t.faceNormal0,t.faceNormal1),ft)>0?-1:1)>n}function Ft(t){const n=t.faces.length/3,o=t.faces,a=t.neighbors,r=t.vertices.position;I.length=Q.length=0;for(let c=0;c<n;c++){const p=3*c,g=a[p],m=a[p+1],i=a[p+2],d=o[p],N=o[p+1],A=o[p+2];r.getVec(d,D),r.getVec(N,U),r.getVec(A,W),rt(U,U,D),rt(W,W,D),at(D,U,W),it(D,D),Q.pushArray(D),(g===X||d<N)&&(I.push(d),I.push(N),I.push(c),I.push(g)),(m===X||N<A)&&(I.push(N),I.push(A),I.push(c),I.push(m)),(i===X||A<d)&&(I.push(A),I.push(d),I.push(c),I.push(i))}return{edges:I,normals:Q}}class Lt{constructor(){this.index=0,this.length=0}}const _=new k({allocator:t=>t||new Lt,deallocator:null}),I=new k({deallocator:null}),Q=new k({deallocator:null}),O=new yt,bt=T(),ft=T(),D=T(),U=T(),W=T(),dt=ct(4),xt=Math.cos(dt),Bt=ct(35),zt=Math.cos(Bt);function pt(t,n,o){const a=n/3,r=new Uint32Array(o+1),c=new Uint32Array(o+1),p=(e,s)=>{e<s?r[e+1]++:c[s+1]++};for(let e=0;e<a;e++){const s=t[3*e],f=t[3*e+1],u=t[3*e+2];p(s,f),p(f,u),p(u,s)}let g=0,m=0;for(let e=0;e<o;e++){const s=r[e+1],f=c[e+1];r[e+1]=g,c[e+1]=m,g+=s,m+=f}const i=new Uint32Array(6*a),d=r[o],N=(e,s,f)=>{if(e<s){const u=r[e+1]++;i[2*u]=s,i[2*u+1]=f}else{const u=c[s+1]++;i[2*d+2*u]=e,i[2*d+2*u+1]=f}};for(let e=0;e<a;e++){const s=t[3*e],f=t[3*e+1],u=t[3*e+2];N(s,f,e),N(f,u,e),N(u,s,e)}const A=(e,s)=>{const f=2*e,u=s-e;for(let S=1;S<u;S++){const M=i[f+2*S],R=i[f+2*S+1];let h=S-1;for(;h>=0&&i[f+2*h]>M;h--)i[f+2*h+2]=i[f+2*h],i[f+2*h+3]=i[f+2*h+1];i[f+2*h+2]=M,i[f+2*h+3]=R}};for(let e=0;e<o;e++)A(r[e],r[e+1]),A(d+c[e],d+c[e+1]);const V=new Int32Array(3*a),B=(e,s)=>e===t[3*s]?0:e===t[3*s+1]?1:e===t[3*s+2]?2:-1,w=(e,s)=>{const f=B(e,s);V[3*s+f]=-1},z=(e,s,f,u)=>{const S=B(e,s);V[3*s+S]=u;const M=B(f,u);V[3*u+M]=s};for(let e=0;e<o;e++){let s=r[e];const f=r[e+1];let u=c[e];const S=c[e+1];for(;s<f&&u<S;){const M=i[2*s],R=i[2*d+2*u];M===R?(z(e,i[2*s+1],R,i[2*d+2*u+1]),s++,u++):M<R?(w(e,i[2*s+1]),s++):(w(R,i[2*d+2*u+1]),u++)}for(;s<f;)w(e,i[2*s+1]),s++;for(;u<S;)w(i[2*d+2*u],i[2*d+2*u+1]),u++}return V}function Y(t,n,o,a,r,c=2){const p=1/(Math.abs(o)+Math.abs(a)+Math.abs(r)),g=o*p,m=a*p,i=r<=0?(g>=0?1:-1)*(1-Math.abs(m)):g,d=r<=0?(m>=0?1:-1)*(1-Math.abs(g)):m,N=n*c;t[N]=ht(i),t[N+1]=ht(d)}function ht(t){return Mt(Math.round(32767*t),-32767,32767)}const Z=.7;let gt=class{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?_t:Xt}write(t,n,o){H.seed=this._edgeHashFunction(o);const a=H.getIntRange(0,255),r=H.getIntRange(0,this.settings.variants-1),c=H.getFloat(),p=255*(.5*Ut(-(1-Math.min(c/Z,1))+Math.max(0,c-Z)/(1-Z),1.2)+.5);t.position0.setVec(n,o.position0),t.position1.setVec(n,o.position1),t.componentIndex.set(n,o.componentIndex),t.variantOffset.set(n,a),t.variantStroke.set(n,r),t.variantExtension.set(n,p)}};const P=new Float32Array(6),y=new Uint32Array(P.buffer),L=new Uint32Array(1);function Xt(t){return P[0]=t.position0[0],P[1]=t.position0[1],P[2]=t.position0[2],P[3]=t.position1[0],P[4]=t.position1[1],P[5]=t.position1[2],L[0]=31*(31*(31*(31*(31*(166811+y[0])+y[1])+y[2])+y[3])+y[4])+y[5],L[0]}function _t(t){const n=P;n[0]=b(t.position0[0]),n[1]=b(t.position0[1]),n[2]=b(t.position0[2]),n[3]=b(t.position1[0]),n[4]=b(t.position1[1]),n[5]=b(t.position1[2]),L[0]=5381;for(let o=0;o<y.length;o++)L[0]=31*L[0]+y[o];return L[0]}const Nt=1e4;function b(t){return Math.round(t*Nt)/Nt}function Ut(t,n){return Math.abs(t)**n*Math.sign(t)}class ${constructor(){this._commonWriter=new gt}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return G.createBuffer(n)}write(n,o,a){this._commonWriter.write(n,o,a),vt(x,a.faceNormal0,a.faceNormal1),it(x,x);const{typedBuffer:r,typedBufferStride:c}=n.normalCompressed;Y(r,o,x[0],x[1],x[2],c)}}$.Layout=G,$.glLayout=K(G,1);class tt{constructor(){this._commonWriter=new gt}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return J.createBuffer(n)}write(n,o,a){this._commonWriter.write(n,o,a);{const{typedBuffer:r,typedBufferStride:c}=n.normalCompressed;Y(r,o,a.faceNormal0[0],a.faceNormal0[1],a.faceNormal0[2],c)}{const{typedBuffer:r,typedBufferStride:c}=n.normal2Compressed;Y(r,o,a.faceNormal1[0],a.faceNormal1[1],a.faceNormal1[2],c)}}}tt.Layout=J,tt.glLayout=K(J,1);const x=T(),H=new Rt;function Wt(t){const n=mt(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return It.updateSettings(t.writerSettings),Ot.updateSettings(t.writerSettings),ut(n,It,Ot)}function mt(t,n,o,a){if(n){const p=pt(o,a,t.count);return new Ht(o,a,p,t)}const r=At(t.buffer,t.stride/4,{originalIndices:o,originalIndicesLength:a}),c=pt(r.indices,a,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:c,vertices:lt.createView(r.buffer)}}class Ht{constructor(n,o,a,r){this.faces=n,this.facesLength=o,this.neighbors=a,this.vertices=r}}const It=new $,Ot=new tt,Kt=F().vec3f(l.POSITION0).vec3f(l.POSITION1),kt=F().vec3f(l.POSITION0).vec3f(l.POSITION1).u16(l.COMPONENTINDEX);export{lt as E,Kt as d,Wt as f,kt as m,ut as p,mt as u};
