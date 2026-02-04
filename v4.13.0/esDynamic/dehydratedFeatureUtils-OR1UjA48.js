import{n as N}from"./glsl-Z5uYj8ka.js";import{fj as He,dy as Le,cD as $e,jg as _e,jh as Be,ji as ke,bL as qe,jj as Xe,jk as Ye,jl as Ze,fP as Je,ah as D,ap as xe,d5 as Ke}from"./main-BFDurRCu.js";import{x as Qe,l as We,m as et}from"./mat4-OOmHNWi7.js";import{e as tt}from"./mat4f64-xsZDPPj0.js";import{s as nt}from"./vec42-D8CJyqHG.js";import{t as ot,s as at}from"./vec4f64-DD-nkcCV.js";import{n as st}from"./projectionUtils-B-CplN3q.js";import{u as rt}from"./meshVertexSpaceUtils-CCr86FVF.js";import{e as pe}from"./projectVectorToVector-DcyiGOWJ.js";import{o as lt,x as it}from"./hydratedFeatures-oobA80ei.js";import{c as H,_,A as z,o as oe,s as W,g as j,u as F,E as ct,P as Ae}from"./vec32-Cj8pVsU0.js";import{r as I,n as U,t as Pe}from"./vec3f32-GX_cKsFD.js";import{a as Me,n as G,p as E,b as Se,s as ut,f as ft,d as pt,o as Te,c as ht,e as he,g as dt,h as mt,w as wt,i as vt,j as gt,k as Ot}from"./OutputColorHighlightOID.glsl-BdXTjs7_.js";import{A as yt,U as be}from"./Indices-BuIC5D20.js";import{M as xt,l as At,q as Pt}from"./plane-Cf3Koz3c.js";import{k as Mt}from"./sphere-zPMQWhGG.js";import{t as T}from"./orientedBoundingBox-CSC169JG.js";import{s as ee}from"./BufferView-wDxx79o3.js";import{e as y}from"./VertexAttribute-hUz6pozM.js";function St(t){t.code.add(N`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),t.code.add(N`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),t.code.add(N`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}function Tt(t,n){if(t.type==="point")return B(t,n,!1);if(lt(t))switch(t.type){case"extent":return B(t.center,n,!1);case"polygon":return B(t.centroid,n,!1);case"polyline":return B(Re(t),n,!0);case"mesh":return B(rt(t.vertexSpace,t.spatialReference)??t.extent.center,n,!1);case"multipoint":return}else switch(t.type){case"extent":return B(bt(t),n,!0);case"polygon":return B(Rt(t),n,!0);case"polyline":return B(Re(t),n,!0);case"multipoint":return}}function Re(t){const n=t.paths[0];if(!n||n.length===0)return null;const o=_e(n,Be(n)/2);return pe(o[0],o[1],o[2],t.spatialReference)}function bt(t){return pe(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function Rt(t){const n=t.rings[0];if(!n||n.length===0)return null;const o=ke(t.rings,!!t.hasZ);return pe(o[0],o[1],o[2],t.spatialReference)}function B(t,n,o){const e=o?t:it(t);return n&&t?st(t,e,n)?e:null:e}function It(t,n,o,e=0){if(t){n||(n=$e());const a=t;let f=.5*a.width*(o-1),s=.5*a.height*(o-1);return a.width<1e-7*a.height?f+=s/20:a.height<1e-7*a.width&&(s+=f/20),nt(n,a.xmin-f-e,a.ymin-s-e,a.xmax+f+e,a.ymax+s+e),n}return null}function Ct(t,n,o=null){const e=ot(at);return t!=null&&(e[0]=t[0],e[1]=t[1],e[2]=t[2]),n!=null?e[3]=n:t!=null&&t.length>3&&(e[3]=t[3]),o&&(e[0]*=o,e[1]*=o,e[2]*=o,e[3]*=o),e}function Nt(t=He,n,o,e=1){const a=new Array(3);if(n==null||o==null)a[0]=1,a[1]=1,a[2]=1;else{let f,s=0;for(let r=2;r>=0;r--){const i=t[r],l=i!=null,c=r===0&&!f&&!l,p=o[r];let x;i==="symbol-value"||c?x=p!==0?n[r]/p:1:l&&i!=="proportional"&&isFinite(i)&&(x=p!==0?i/p:1),x!=null&&(a[r]=x,f=x,s=Math.max(s,Math.abs(x)))}for(let r=2;r>=0;r--)a[r]==null?a[r]=f:a[r]===0&&(a[r]=.001*s)}for(let f=2;f>=0;f--)a[f]/=e;return Le(a)}function Dt(t){return t.isPrimitive!=null}function zt(t){return Ie(Dt(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function Ie(t){const n=o=>o==null||o>=0;return Array.isArray(t)?t.every(n):n(t)}function Vt(t,n,o,e=tt()){return t&&Qe(e,e,-t/180*Math.PI),n&&We(e,e,n/180*Math.PI),o&&et(e,e,o/180*Math.PI),e}function Ft(t,n,o){if(o.minDemResolution!=null)return o.minDemResolution;const e=qe(n),a=Xe(t)*e,f=Ye(t)*e,s=Ze(t)*(n.isGeographic?1:e);return a===0&&f===0&&s===0?o.minDemResolutionForPoints:.01*Math.max(a,f,s)}var de;(function(t){function n(s,r){const i=s[r],l=s[r+1],c=s[r+2];return Math.sqrt(i*i+l*l+c*c)}function o(s,r){const i=s[r],l=s[r+1],c=s[r+2],p=1/Math.sqrt(i*i+l*l+c*c);s[r]*=p,s[r+1]*=p,s[r+2]*=p}function e(s,r,i){s[r]*=i,s[r+1]*=i,s[r+2]*=i}function a(s,r,i,l,c,p=r){(c=c||s)[p]=s[r]+i[l],c[p+1]=s[r+1]+i[l+1],c[p+2]=s[r+2]+i[l+2]}function f(s,r,i,l,c,p=r){(c=c||s)[p]=s[r]-i[l],c[p+1]=s[r+1]-i[l+1],c[p+2]=s[r+2]-i[l+2]}t.length=n,t.normalize=o,t.scale=e,t.add=a,t.subtract=f})(de||(de={}));const q=de,me=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],jt=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Ut=[0,0,1,0,1,1,0,1],Gt=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ce=new Array(36);for(let t=0;t<6;t++)for(let n=0;n<6;n++)Ce[6*t+n]=t;const k=new Array(36);for(let t=0;t<6;t++)k[6*t]=0,k[6*t+1]=1,k[6*t+2]=2,k[6*t+3]=2,k[6*t+4]=3,k[6*t+5]=0;function Et(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(24);for(let e=0;e<8;e++)o[3*e]=me[e][0]*n[0],o[3*e+1]=me[e][1]*n[1],o[3*e+2]=me[e][2]*n[2];return new E(t,[[y.POSITION,new T(o,Gt,3,!0)],[y.NORMAL,new T(jt,Ce,3)],[y.UV0,new T(Ut,k,2)]])}const we=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Ht=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Lt=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],$t=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function _t(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(18);for(let e=0;e<6;e++)o[3*e]=we[e][0]*n[0],o[3*e+1]=we[e][1]*n[1],o[3*e+2]=we[e][2]*n[2];return new E(t,[[y.POSITION,new T(o,Lt,3,!0)],[y.NORMAL,new T(Ht,$t,3)]])}const ae=I(-.5,0,-.5),se=I(.5,0,-.5),re=I(0,0,.5),le=I(0,.5,0),X=U(),Y=U(),Z=U(),J=U(),K=U();H(X,ae,le),H(Y,ae,se),_(Z,X,Y),z(Z,Z),H(X,se,le),H(Y,se,re),_(J,X,Y),z(J,J),H(X,re,le),H(Y,re,ae),_(K,X,Y),z(K,K);const ve=[ae,se,re,le],Bt=[0,-1,0,Z[0],Z[1],Z[2],J[0],J[1],J[2],K[0],K[1],K[2]],kt=[0,1,2,3,1,0,3,2,1,3,0,2],qt=[0,0,0,1,1,1,2,2,2,3,3,3];function Xt(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(12);for(let e=0;e<4;e++)o[3*e]=ve[e][0]*n[0],o[3*e+1]=ve[e][1]*n[1],o[3*e+2]=ve[e][2]*n[2];return new E(t,[[y.POSITION,new T(o,kt,3,!0)],[y.NORMAL,new T(Bt,qt,3)]])}function Yt(t,n,o,e,a={uv:!0}){const f=-Math.PI,s=2*Math.PI,r=-Math.PI/2,i=Math.PI,l=Math.max(3,Math.floor(o)),c=Math.max(2,Math.floor(e)),p=(l+1)*(c+1),x=G(3*p),P=G(3*p),A=G(2*p),m=[];let h=0;for(let v=0;v<=c;v++){const R=[],u=v/c,M=r+u*i,S=Math.cos(M);for(let C=0;C<=l;C++){const L=C/l,g=f+L*s,V=Math.cos(g)*S,b=Math.sin(M),ne=-Math.sin(g)*S;x[3*h]=V*n,x[3*h+1]=b*n,x[3*h+2]=ne*n,P[3*h]=V,P[3*h+1]=b,P[3*h+2]=ne,A[2*h]=L,A[2*h+1]=u,R.push(h),++h}m.push(R)}const d=new Array;for(let v=0;v<c;v++)for(let R=0;R<l;R++){const u=m[v][R],M=m[v][R+1],S=m[v+1][R+1],C=m[v+1][R];v===0?(d.push(u),d.push(S),d.push(C)):v===c-1?(d.push(u),d.push(M),d.push(S)):(d.push(u),d.push(M),d.push(S),d.push(S),d.push(C),d.push(u))}const w=[[y.POSITION,new T(x,d,3,!0)],[y.NORMAL,new T(P,d,3,!0)]];return a.uv&&w.push([y.UV0,new T(A,d,2,!0)]),a.offset&&(w[0][0]=y.OFFSET,w.push([y.POSITION,new T(Float64Array.from(a.offset),be(d.length),3,!0)])),new E(t,w)}function Zt(t,n,o,e){const a=Ne(n,o);return new E(t,a)}function Ne(t,n,o){let e,a;e=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let i=0;i<e.length;i+=3)q.scale(e,i,t/q.length(e,i));let f={};function s(i,l){i>l&&([i,l]=[l,i]);const c=i.toString()+"."+l.toString();if(f[c])return f[c];let p=e.length;return e.length+=3,q.add(e,3*i,e,3*l,e,p),q.scale(e,p,t/q.length(e,p)),p/=3,f[c]=p,p}for(let i=0;i<n;i++){const l=a.length,c=new Array(4*l);for(let p=0;p<l;p+=3){const x=a[p],P=a[p+1],A=a[p+2],m=s(x,P),h=s(P,A),d=s(A,x),w=4*p;c[w]=x,c[w+1]=m,c[w+2]=d,c[w+3]=P,c[w+4]=h,c[w+5]=m,c[w+6]=A,c[w+7]=d,c[w+8]=h,c[w+9]=m,c[w+10]=h,c[w+11]=d}a=c,f={}}const r=Me(e);for(let i=0;i<r.length;i+=3)q.normalize(r,i);return[[y.POSITION,new T(Me(e),a,3,!0)],[y.NORMAL,new T(r,a,3,!0)]]}function Jt(t,{normal:n,position:o,color:e,rotation:a,size:f,centerOffsetAndDistance:s,uvi:r,featureAttribute:i,objectAndLayerIdColor:l=null}={}){const c=o?xe(o):D(),p=n?xe(n):Ke(0,0,1),x=e?[255*e[0],255*e[1],255*e[2],e.length>3?255*e[3]:255]:[255,255,255,255],P=f!=null&&f.length===2?f:[1,1],A=a!=null?[a]:[0],m=be(1),h=[[y.POSITION,new T(c,m,3,!0)],[y.NORMAL,new T(p,m,3,!0)],[y.COLOR,new T(x,m,4,!0)],[y.SIZE,new T(P,m,2)],[y.ROTATION,new T(A,m,1,!0)]];if(r&&h.push([y.UVI,new T(r,m,r.length)]),s!=null){const d=[s[0],s[1],s[2],s[3]];h.push([y.CENTEROFFSETANDDISTANCE,new T(d,m,4)])}if(i){const d=[i[0],i[1],i[2],i[3]];h.push([y.FEATUREATTRIBUTE,new T(d,m,4)])}return new E(t,h,null,Se.Point,l)}function De(t,n,o,e,a=!0,f=!0){let s=0;const r=n,i=t;let l=I(0,s,0),c=I(0,s+i,0),p=I(0,-1,0),x=I(0,1,0);e&&(s=i,c=I(0,0,0),l=I(0,s,0),p=I(0,1,0),x=I(0,-1,0));const P=[c,l],A=[p,x],m=o+2,h=Math.sqrt(i*i+r*r);if(e)for(let u=o-1;u>=0;u--){const M=u*(2*Math.PI/o),S=I(Math.cos(M)*r,s,Math.sin(M)*r);P.push(S);const C=I(i*Math.cos(M)/h,-r/h,i*Math.sin(M)/h);A.push(C)}else for(let u=0;u<o;u++){const M=u*(2*Math.PI/o),S=I(Math.cos(M)*r,s,Math.sin(M)*r);P.push(S);const C=I(i*Math.cos(M)/h,r/h,i*Math.sin(M)/h);A.push(C)}const d=new Array,w=new Array;if(a){for(let u=3;u<P.length;u++)d.push(1),d.push(u-1),d.push(u),w.push(0),w.push(0),w.push(0);d.push(P.length-1),d.push(2),d.push(1),w.push(0),w.push(0),w.push(0)}if(f){for(let u=3;u<P.length;u++)d.push(u),d.push(u-1),d.push(0),w.push(u),w.push(u-1),w.push(1);d.push(0),d.push(2),d.push(P.length-1),w.push(1),w.push(2),w.push(A.length-1)}const v=G(3*m);for(let u=0;u<m;u++)v[3*u]=P[u][0],v[3*u+1]=P[u][1],v[3*u+2]=P[u][2];const R=G(3*m);for(let u=0;u<m;u++)R[3*u]=A[u][0],R[3*u+1]=A[u][1],R[3*u+2]=A[u][2];return[[y.POSITION,new T(v,d,3,!0)],[y.NORMAL,new T(R,w,3,!0)]]}function Kt(t,n,o,e,a,f=!0,s=!0){return new E(t,De(n,o,e,a,f,s))}function Qt(t,n,o,e,a,f,s){const r=a?Pe(a):I(1,0,0),i=f?Pe(f):I(0,0,0);s??=!0;const l=U();z(l,r);const c=U();j(c,l,Math.abs(n));const p=U();j(p,c,-.5),F(p,p,i);const x=I(0,1,0);Math.abs(1-Ae(l,x))<.2&&oe(x,0,0,1);const P=U();_(P,l,x),z(P,P),_(x,P,l);const A=2*e+(s?2:0),m=e+(s?2:0),h=G(3*A),d=G(3*m),w=G(2*A),v=new Array(3*e*(s?4:2)),R=new Array(3*e*(s?4:2));s&&(h[3*(A-2)]=p[0],h[3*(A-2)+1]=p[1],h[3*(A-2)+2]=p[2],w[2*(A-2)]=0,w[2*(A-2)+1]=0,h[3*(A-1)]=h[3*(A-2)]+c[0],h[3*(A-1)+1]=h[3*(A-2)+1]+c[1],h[3*(A-1)+2]=h[3*(A-2)+2]+c[2],w[2*(A-1)]=1,w[2*(A-1)+1]=1,d[3*(m-2)]=-l[0],d[3*(m-2)+1]=-l[1],d[3*(m-2)+2]=-l[2],d[3*(m-1)]=l[0],d[3*(m-1)+1]=l[1],d[3*(m-1)+2]=l[2]);const u=(g,V,b)=>{v[g]=V,R[g]=b};let M=0;const S=U(),C=U();for(let g=0;g<e;g++){const V=g*(2*Math.PI/e);j(S,x,Math.sin(V)),j(C,P,Math.cos(V)),F(S,S,C),d[3*g]=S[0],d[3*g+1]=S[1],d[3*g+2]=S[2],j(S,S,o),F(S,S,p),h[3*g]=S[0],h[3*g+1]=S[1],h[3*g+2]=S[2],w[2*g]=g/e,w[2*g+1]=0,h[3*(g+e)]=h[3*g]+c[0],h[3*(g+e)+1]=h[3*g+1]+c[1],h[3*(g+e)+2]=h[3*g+2]+c[2],w[2*(g+e)]=g/e,w[2*g+1]=1;const b=(g+1)%e;u(M++,g,g),u(M++,g+e,g),u(M++,b,b),u(M++,b,b),u(M++,g+e,g),u(M++,b+e,b)}if(s){for(let g=0;g<e;g++){const V=(g+1)%e;u(M++,A-2,m-2),u(M++,g,m-2),u(M++,V,m-2)}for(let g=0;g<e;g++){const V=(g+1)%e;u(M++,g+e,m-1),u(M++,A-1,m-1),u(M++,V+e,m-1)}}const L=[[y.POSITION,new T(h,v,3,!0)],[y.NORMAL,new T(d,R,3,!0)],[y.UV0,new T(w,v,2,!0)]];return new E(t,L)}function Wt(t,n,o,e,a,f){e=e||10,a=a==null||a,ee(n.length>1);const s=[[0,0,0]],r=[],i=[];for(let l=0;l<e;l++){r.push([0,-l-1,-(l+1)%e-1]);const c=l/e*2*Math.PI;i.push([Math.cos(c)*o,Math.sin(c)*o])}return ze(t,i,n,s,r,a,f)}function ze(t,n,o,e,a,f,s=I(0,0,0)){const r=n.length,i=G(o.length*r*3+(6*e.length||0)),l=G(o.length*r*3+(e?6:0)),c=new Array,p=new Array;let x=0,P=0;const A=D(),m=D(),h=D(),d=D(),w=D(),v=D(),R=D(),u=D(),M=D(),S=D(),C=D(),L=D(),g=D(),V=xt();oe(M,0,1,0),H(m,o[1],o[0]),z(m,m),f?(F(u,o[0],s),z(h,u)):oe(h,0,0,1),Oe(m,h,M,M,w,h,Ve),W(d,h),W(L,w);for(let O=0;O<e.length;O++)j(v,w,e[O][0]),j(u,h,e[O][2]),F(v,v,u),F(v,v,o[0]),i[x++]=v[0],i[x++]=v[1],i[x++]=v[2];l[P++]=-m[0],l[P++]=-m[1],l[P++]=-m[2];for(let O=0;O<a.length;O++)c.push(a[O][0]>0?a[O][0]:-a[O][0]-1+e.length),c.push(a[O][1]>0?a[O][1]:-a[O][1]-1+e.length),c.push(a[O][2]>0?a[O][2]:-a[O][2]-1+e.length),p.push(0),p.push(0),p.push(0);let b=e.length;const ne=e.length-1;for(let O=0;O<o.length;O++){let ye=!1;O>0&&(W(A,m),O<o.length-1?(H(m,o[O+1],o[O]),z(m,m)):ye=!0,F(S,A,m),z(S,S),F(C,o[O-1],d),At(o[O],S,V),Pt(V,Mt(C,A),u)?(H(u,u,o[O]),z(h,u),_(w,S,h),z(w,w)):Oe(S,d,L,M,w,h,Ve),W(d,h),W(L,w)),f&&(F(u,o[O],s),z(g,u));for(let $=0;$<r;$++)if(j(v,w,n[$][0]),j(u,h,n[$][1]),F(v,v,u),z(R,v),l[P++]=R[0],l[P++]=R[1],l[P++]=R[2],F(v,v,o[O]),i[x++]=v[0],i[x++]=v[1],i[x++]=v[2],!ye){const ue=($+1)%r;c.push(b+$),c.push(b+r+$),c.push(b+ue),c.push(b+ue),c.push(b+r+$),c.push(b+r+ue);for(let fe=0;fe<6;fe++){const Ee=c.length-6;p.push(c[Ee+fe]-ne)}}b+=r}const Ue=o[o.length-1];for(let O=0;O<e.length;O++)j(v,w,e[O][0]),j(u,h,e[O][1]),F(v,v,u),F(v,v,Ue),i[x++]=v[0],i[x++]=v[1],i[x++]=v[2];const ie=P/3;l[P++]=m[0],l[P++]=m[1],l[P++]=m[2];const ce=b-r;for(let O=0;O<a.length;O++)c.push(a[O][0]>=0?b+a[O][0]:-a[O][0]-1+ce),c.push(a[O][2]>=0?b+a[O][2]:-a[O][2]-1+ce),c.push(a[O][1]>=0?b+a[O][1]:-a[O][1]-1+ce),p.push(ie),p.push(ie),p.push(ie);const Ge=[[y.POSITION,new T(i,c,3,!0)],[y.NORMAL,new T(l,p,3,!0)]];return new E(t,Ge)}function en(t,n,o,e){ee(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),ee(n[0].length===3,"createPolylineGeometry(): malformed vertex"),ee(o==null||o.length===n.length,"createPolylineGeometry: need same number of points and normals"),ee(o==null||o[0].length===3,"createPolylineGeometry(): malformed normal");const a=Je(3*n.length),f=new Array(2*(n.length-1));let s=0,r=0;for(let l=0;l<n.length;l++){for(let c=0;c<3;c++)a[s++]=n[l][c];l>0&&(f[r++]=l-1,f[r++]=l)}const i=[[y.POSITION,new T(a,f,3,!0)]];if(o){const l=G(3*o.length);let c=0;for(let p=0;p<n.length;p++)for(let x=0;x<3;x++)l[c++]=o[p][x];i.push([y.NORMAL,new T(l,f,3,!0)])}return e&&i.push([y.COLOR,new T(e,yt(e.length/4),4)]),new E(t,i,null,Se.Line)}function tn(t,n,o,e,a,f=0){const s=new Array(18),r=[[-o,f,a/2],[e,f,a/2],[0,n+f,a/2],[-o,f,-a/2],[e,f,-a/2],[0,n+f,-a/2]],i=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let l=0;l<6;l++)s[3*l]=r[l][0],s[3*l+1]=r[l][1],s[3*l+2]=r[l][2];return new E(t,[[y.POSITION,new T(s,i,3,!0)]])}function nn(t,n){const o=t.getMutableAttribute(y.POSITION).data;for(let e=0;e<o.length;e+=3){const a=o[e],f=o[e+1],s=o[e+2];oe(Q,a,f,s),ct(Q,Q,n),o[e]=Q[0],o[e+1]=Q[1],o[e+2]=Q[2]}}function on(t,n=t){const o=t.attributes,e=o.get(y.POSITION).data,a=o.get(y.NORMAL).data;if(a){const f=n.getMutableAttribute(y.NORMAL).data;for(let s=0;s<a.length;s+=3){const r=a[s+1];f[s+1]=-a[s+2],f[s+2]=r}}if(e){const f=n.getMutableAttribute(y.POSITION).data;for(let s=0;s<e.length;s+=3){const r=e[s+1];f[s+1]=-e[s+2],f[s+2]=r}}}function ge(t,n,o,e,a){return!(Math.abs(Ae(n,t))>a)&&(_(o,t,n),z(o,o),_(e,o,t),z(e,e),!0)}function Oe(t,n,o,e,a,f,s){return ge(t,n,a,f,s)||ge(t,o,a,f,s)||ge(t,e,a,f,s)}const Ve=.99619469809,Q=D(),Fe=.5;function an(t,n){t.include(ut),t.attributes.add(y.POSITION,"vec3"),t.attributes.add(y.NORMAL,"vec3"),t.attributes.add(y.CENTEROFFSETANDDISTANCE,"vec4");const o=t.vertex;ft(o,n),pt(o,n),o.uniforms.add(new Te("viewport",e=>e.camera.fullViewport),new ht("polygonOffset",e=>e.shaderPolygonOffset),new he("cameraGroundRelative",e=>e.camera.aboveGround?1:-1)),n.hasVerticalOffset&&dt(o),o.code.add(N`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(N`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${n.terrainDepthTest?N.float(0):N`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),n.draped&&!n.hasVerticalOffset||mt(o),n.draped||(o.uniforms.add(new he("perDistancePixelRatio",e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2))),o.code.add(N`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${N.float(Fe)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),n.screenCenterOffsetUnitsEnabled&&wt(o),n.hasScreenSizePerspective&&vt(o),o.code.add(N`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${n.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${n.hasScreenSizePerspective&&(n.hasVerticalOffset||n.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${n.hasVerticalOffset?n.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${n.hasVerticalOffset?N`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${n.screenCenterOffsetUnitsEnabled?"":N`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${n.screenCenterOffsetUnitsEnabled?n.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${n.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function je(t){t.uniforms.add(new gt("alignPixelEnabled",n=>n.alignPixelEnabled)),t.code.add(N`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(N`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var te;(function(t){t[t.Occluded=0]="Occluded",t[t.NotOccluded=1]="NotOccluded",t[t.Both=2]="Both",t[t.COUNT=3]="COUNT"})(te||(te={}));function sn(t){t.vertex.uniforms.add(new he("renderTransparentlyOccludedHUD",n=>n.hudRenderStyle===te.Occluded?1:n.hudRenderStyle===te.NotOccluded?0:.75),new Te("viewport",n=>n.camera.fullViewport),new Ot("hudVisibilityTexture",n=>n.hudVisibility?.getTexture())),t.vertex.include(je),t.vertex.code.add(N`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function rn(t){return t.type==="point"}export{Nt as B,Et as C,Ft as E,zt as I,Oe as M,nn as O,It as S,Ct as U,Ie as Z,te as a,St as b,De as c,Fe as d,Tt as e,_t as f,Xt as g,Qt as h,Kt as i,Jt as j,Vt as k,je as l,on as m,sn as n,Yt as o,tn as p,Wt as q,Ne as r,Zt as s,rn as t,an as u,ze as v,en as w};
