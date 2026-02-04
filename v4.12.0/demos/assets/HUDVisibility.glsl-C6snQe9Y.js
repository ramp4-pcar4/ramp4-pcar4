import{n as N}from"./glsl-BH37Aalp.js";import{ab as C,ej as Ee,aZ as Me,ao as Ue,iT as Ge,iU as je,i9 as He,cc as _e,aY as Be,eL as ke,bs as Xe,iV as qe,iW as Ye,iX as Ze}from"./main-D6UWMbWJ.js";import{t as Je}from"./doublePrecisionUtils-B0owpBza.js";import{c as G,_ as B,A as D,o as ie,E as Qe,g as F,u as z,P as $e,s as ee}from"./vec32-DvB22h0L.js";import{r as R,n as L,t as Pe}from"./vec3f32-nZdmKIgz.js";import{n as E,f as U,e as Ce,a as Te,s as We,b as Ke,d as et,o as Ne,c as tt,g as ge,h as nt,p as ot,w as st,i as rt,j as at,k as lt}from"./VerticalOffset.glsl-D5YuYROR.js";import{w as De,o as it}from"./Indices-BMQOyMkI.js";import{M as ct,l as ut,x as ft}from"./plane-DXyNbfXV.js";import{k as ht}from"./sphere-MYAntte_.js";import{t as S}from"./orientedBoundingBox-CVUzj9sI.js";import{s as te}from"./InterleavedLayout-C4yDe4a4.js";import{e as x}from"./VertexAttribute-Cq4MnHjR.js";import{x as pt,l as dt,m as mt}from"./mat4-mplESjCB.js";import{e as Ot}from"./mat4f64-Dk4dwAN8.js";import{s as wt}from"./vec42-CKs01hkn.js";import{t as gt,N as vt}from"./vec4f64-o2zAXfmz.js";import{n as xt}from"./projection-F5U3p10J.js";import{u as At}from"./meshVertexSpaceUtils-DurlDegv.js";import{e as Ae}from"./projectVectorToVector-2U_T6yxL.js";import{o as yt,x as Mt}from"./hydratedFeatures-CzW8xS0g.js";var Se,ve;(function(e){e[e.OBJECT=0]="OBJECT",e[e.HUD=1]="HUD",e[e.TERRAIN=2]="TERRAIN",e[e.OVERLAY=3]="OVERLAY",e[e.I3S=4]="I3S",e[e.PCL=5]="PCL",e[e.LOD=6]="LOD",e[e.VOXEL=7]="VOXEL",e[e.TILES3D=8]="TILES3D"})(Se||(Se={}));let cn=class{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerUids=[],this.store=ve.ALL,this.normalRequired=!0,this.excludeLabels=!1}};(function(e){e[e.MIN=0]="MIN",e[e.MINMAX=1]="MINMAX",e[e.ALL=2]="ALL"})(ve||(ve={}));function fn(e){e.code.add(N`const float MAX_RGBA_FLOAT =
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
}`),e.code.add(N`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(N`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}function hn(e){return e.type==="point"}function pn(e,n){return e==null&&(e=[]),e.push(n),e}function dn(e,n){if(e==null)return null;const o=e.filter(t=>t!==n);return o.length===0?null:o}function mn(e,n,o,t,s){oe[0]=e.get(n,0),oe[1]=e.get(n,1),oe[2]=e.get(n,2),Je(oe,k,3),o.set(s,0,k[0]),t.set(s,0,k[1]),o.set(s,1,k[2]),t.set(s,1,k[3]),o.set(s,2,k[4]),t.set(s,2,k[5])}const oe=C(),k=new Float32Array(6);var xe;(function(e){function n(r,l){const c=r[l],a=r[l+1],i=r[l+2];return Math.sqrt(c*c+a*a+i*i)}function o(r,l){const c=r[l],a=r[l+1],i=r[l+2],p=1/Math.sqrt(c*c+a*a+i*i);r[l]*=p,r[l+1]*=p,r[l+2]*=p}function t(r,l,c){r[l]*=c,r[l+1]*=c,r[l+2]*=c}function s(r,l,c,a,i,p=l){(i=i||r)[p]=r[l]+c[a],i[p+1]=r[l+1]+c[a+1],i[p+2]=r[l+2]+c[a+2]}function f(r,l,c,a,i,p=l){(i=i||r)[p]=r[l]-c[a],i[p+1]=r[l+1]-c[a+1],i[p+2]=r[l+2]-c[a+2]}e.length=n,e.normalize=o,e.scale=t,e.add=s,e.subtract=f})(xe||(xe={}));const q=xe,de=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Pt=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Tt=[0,0,1,0,1,1,0,1],St=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ve=new Array(36);for(let e=0;e<6;e++)for(let n=0;n<6;n++)Ve[6*e+n]=e;const X=new Array(36);for(let e=0;e<6;e++)X[6*e]=0,X[6*e+1]=1,X[6*e+2]=2,X[6*e+3]=2,X[6*e+4]=3,X[6*e+5]=0;function On(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(24);for(let t=0;t<8;t++)o[3*t]=de[t][0]*n[0],o[3*t+1]=de[t][1]*n[1],o[3*t+2]=de[t][2]*n[2];return new U(e,[[x.POSITION,new S(o,St,3,!0)],[x.NORMAL,new S(Pt,Ve,3)],[x.UV0,new S(Tt,X,2)]])}const me=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],It=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],bt=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Rt=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function wn(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(18);for(let t=0;t<6;t++)o[3*t]=me[t][0]*n[0],o[3*t+1]=me[t][1]*n[1],o[3*t+2]=me[t][2]*n[2];return new U(e,[[x.POSITION,new S(o,bt,3,!0)],[x.NORMAL,new S(It,Rt,3)]])}const se=R(-.5,0,-.5),re=R(.5,0,-.5),ae=R(0,0,.5),le=R(0,.5,0),Y=L(),Z=L(),Q=L(),W=L(),K=L();G(Y,se,le),G(Z,se,re),B(Q,Y,Z),D(Q,Q),G(Y,re,le),G(Z,re,ae),B(W,Y,Z),D(W,W),G(Y,ae,le),G(Z,ae,se),B(K,Y,Z),D(K,K);const Oe=[se,re,ae,le],$t=[0,-1,0,Q[0],Q[1],Q[2],W[0],W[1],W[2],K[0],K[1],K[2]],Ct=[0,1,2,3,1,0,3,2,1,3,0,2],Nt=[0,0,0,1,1,1,2,2,2,3,3,3];function gn(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(12);for(let t=0;t<4;t++)o[3*t]=Oe[t][0]*n[0],o[3*t+1]=Oe[t][1]*n[1],o[3*t+2]=Oe[t][2]*n[2];return new U(e,[[x.POSITION,new S(o,Ct,3,!0)],[x.NORMAL,new S($t,Nt,3)]])}function vn(e,n,o,t,s={uv:!0}){const f=-Math.PI,r=2*Math.PI,l=-Math.PI/2,c=Math.PI,a=Math.max(3,Math.floor(o)),i=Math.max(2,Math.floor(t)),p=(a+1)*(i+1),A=E(3*p),M=E(3*p),y=E(2*p),w=[];let h=0;for(let O=0;O<=i;O++){const b=[],u=O/i,P=l+u*c,T=Math.cos(P);for(let $=0;$<=a;$++){const j=$/a,g=f+j*r,V=Math.cos(g)*T,I=Math.sin(P),ne=-Math.sin(g)*T;A[3*h]=V*n,A[3*h+1]=I*n,A[3*h+2]=ne*n,M[3*h]=V,M[3*h+1]=I,M[3*h+2]=ne,y[2*h]=j,y[2*h+1]=u,b.push(h),++h}w.push(b)}const m=new Array;for(let O=0;O<i;O++)for(let b=0;b<a;b++){const u=w[O][b],P=w[O][b+1],T=w[O+1][b+1],$=w[O+1][b];O===0?(m.push(u),m.push(T),m.push($)):O===i-1?(m.push(u),m.push(P),m.push(T)):(m.push(u),m.push(P),m.push(T),m.push(T),m.push($),m.push(u))}const d=[[x.POSITION,new S(A,m,3,!0)],[x.NORMAL,new S(M,m,3,!0)]];return s.uv&&d.push([x.UV0,new S(y,m,2,!0)]),s.offset&&(d[0][0]=x.OFFSET,d.push([x.POSITION,new S(Float64Array.from(s.offset),De(m.length),3,!0)])),new U(e,d)}function xn(e,n,o,t){const s=Dt(n,o);return new U(e,s)}function Dt(e,n,o){let t,s;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],s=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let c=0;c<t.length;c+=3)q.scale(t,c,e/q.length(t,c));let f={};function r(c,a){c>a&&([c,a]=[a,c]);const i=c.toString()+"."+a.toString();if(f[i])return f[i];let p=t.length;return t.length+=3,q.add(t,3*c,t,3*a,t,p),q.scale(t,p,e/q.length(t,p)),p/=3,f[i]=p,p}for(let c=0;c<n;c++){const a=s.length,i=new Array(4*a);for(let p=0;p<a;p+=3){const A=s[p],M=s[p+1],y=s[p+2],w=r(A,M),h=r(M,y),m=r(y,A),d=4*p;i[d]=A,i[d+1]=w,i[d+2]=m,i[d+3]=M,i[d+4]=h,i[d+5]=w,i[d+6]=y,i[d+7]=m,i[d+8]=h,i[d+9]=w,i[d+10]=h,i[d+11]=m}s=i,f={}}const l=Te(t);for(let c=0;c<l.length;c+=3)q.normalize(l,c);return[[x.POSITION,new S(Te(t),s,3,!0)],[x.NORMAL,new S(l,s,3,!0)]]}function An(e,n={}){const{normal:o,position:t,color:s,rotation:f,size:r,centerOffsetAndDistance:l,uvs:c,featureAttribute:a,objectAndLayerIdColor:i=null}=n,p=t?Me(t):C(),A=o?Me(o):Ue(0,0,1),M=s?[255*s[0],255*s[1],255*s[2],s.length>3?255*s[3]:255]:[255,255,255,255],y=r!=null&&r.length===2?r:[1,1],w=f!=null?[f]:[0],h=De(1),m=[[x.POSITION,new S(p,h,3,!0)],[x.NORMAL,new S(A,h,3,!0)],[x.COLOR,new S(M,h,4,!0)],[x.SIZE,new S(y,h,2)],[x.ROTATION,new S(w,h,1,!0)]];if(c&&m.push([x.UV0,new S(c,h,c.length)]),l!=null){const d=[l[0],l[1],l[2],l[3]];m.push([x.CENTEROFFSETANDDISTANCE,new S(d,h,4)])}if(a){const d=[a[0],a[1],a[2],a[3]];m.push([x.FEATUREATTRIBUTE,new S(d,h,4)])}return new U(e,m,null,Ce.Point,i)}function Vt(e,n,o,t,s=!0,f=!0){let r=0;const l=n,c=e;let a=R(0,r,0),i=R(0,r+c,0),p=R(0,-1,0),A=R(0,1,0);t&&(r=c,i=R(0,0,0),a=R(0,r,0),p=R(0,1,0),A=R(0,-1,0));const M=[i,a],y=[p,A],w=o+2,h=Math.sqrt(c*c+l*l);if(t)for(let u=o-1;u>=0;u--){const P=u*(2*Math.PI/o),T=R(Math.cos(P)*l,r,Math.sin(P)*l);M.push(T);const $=R(c*Math.cos(P)/h,-l/h,c*Math.sin(P)/h);y.push($)}else for(let u=0;u<o;u++){const P=u*(2*Math.PI/o),T=R(Math.cos(P)*l,r,Math.sin(P)*l);M.push(T);const $=R(c*Math.cos(P)/h,l/h,c*Math.sin(P)/h);y.push($)}const m=new Array,d=new Array;if(s){for(let u=3;u<M.length;u++)m.push(1),m.push(u-1),m.push(u),d.push(0),d.push(0),d.push(0);m.push(M.length-1),m.push(2),m.push(1),d.push(0),d.push(0),d.push(0)}if(f){for(let u=3;u<M.length;u++)m.push(u),m.push(u-1),m.push(0),d.push(u),d.push(u-1),d.push(1);m.push(0),m.push(2),m.push(M.length-1),d.push(1),d.push(2),d.push(y.length-1)}const O=E(3*w);for(let u=0;u<w;u++)O[3*u]=M[u][0],O[3*u+1]=M[u][1],O[3*u+2]=M[u][2];const b=E(3*w);for(let u=0;u<w;u++)b[3*u]=y[u][0],b[3*u+1]=y[u][1],b[3*u+2]=y[u][2];return[[x.POSITION,new S(O,m,3,!0)],[x.NORMAL,new S(b,d,3,!0)]]}function yn(e,n,o,t,s,f=!0,r=!0){return new U(e,Vt(n,o,t,s,f,r))}function Mn(e,n,o,t,s,f,r){const l=s?Pe(s):R(1,0,0),c=f?Pe(f):R(0,0,0);r??=!0;const a=L();D(a,l);const i=L();F(i,a,Math.abs(n));const p=L();F(p,i,-.5),z(p,p,c);const A=R(0,1,0);Math.abs(1-$e(a,A))<.2&&ie(A,0,0,1);const M=L();B(M,a,A),D(M,M),B(A,M,a);const y=2*t+(r?2:0),w=t+(r?2:0),h=E(3*y),m=E(3*w),d=E(2*y),O=new Array(3*t*(r?4:2)),b=new Array(3*t*(r?4:2));r&&(h[3*(y-2)]=p[0],h[3*(y-2)+1]=p[1],h[3*(y-2)+2]=p[2],d[2*(y-2)]=0,d[2*(y-2)+1]=0,h[3*(y-1)]=h[3*(y-2)]+i[0],h[3*(y-1)+1]=h[3*(y-2)+1]+i[1],h[3*(y-1)+2]=h[3*(y-2)+2]+i[2],d[2*(y-1)]=1,d[2*(y-1)+1]=1,m[3*(w-2)]=-a[0],m[3*(w-2)+1]=-a[1],m[3*(w-2)+2]=-a[2],m[3*(w-1)]=a[0],m[3*(w-1)+1]=a[1],m[3*(w-1)+2]=a[2]);const u=(g,V,I)=>{O[g]=V,b[g]=I};let P=0;const T=L(),$=L();for(let g=0;g<t;g++){const V=g*(2*Math.PI/t);F(T,A,Math.sin(V)),F($,M,Math.cos(V)),z(T,T,$),m[3*g]=T[0],m[3*g+1]=T[1],m[3*g+2]=T[2],F(T,T,o),z(T,T,p),h[3*g]=T[0],h[3*g+1]=T[1],h[3*g+2]=T[2],d[2*g]=g/t,d[2*g+1]=0,h[3*(g+t)]=h[3*g]+i[0],h[3*(g+t)+1]=h[3*g+1]+i[1],h[3*(g+t)+2]=h[3*g+2]+i[2],d[2*(g+t)]=g/t,d[2*g+1]=1;const I=(g+1)%t;u(P++,g,g),u(P++,g+t,g),u(P++,I,I),u(P++,I,I),u(P++,g+t,g),u(P++,I+t,I)}if(r){for(let g=0;g<t;g++){const V=(g+1)%t;u(P++,y-2,w-2),u(P++,g,w-2),u(P++,V,w-2)}for(let g=0;g<t;g++){const V=(g+1)%t;u(P++,g+t,w-1),u(P++,y-1,w-1),u(P++,V+t,w-1)}}const j=[[x.POSITION,new S(h,O,3,!0)],[x.NORMAL,new S(m,b,3,!0)],[x.UV0,new S(d,O,2,!0)]];return new U(e,j)}function Pn(e,n,o,t,s,f){t=t||10,s=s==null||s,te(n.length>1);const r=[[0,0,0]],l=[],c=[];for(let a=0;a<t;a++){l.push([0,-a-1,-(a+1)%t-1]);const i=a/t*2*Math.PI;c.push([Math.cos(i)*o,Math.sin(i)*o])}return zt(e,c,n,r,l,s,f)}function zt(e,n,o,t,s,f,r=R(0,0,0)){const l=n.length,c=E(o.length*l*3+(6*t.length||0)),a=E(o.length*l*3+(t?6:0)),i=new Array,p=new Array;let A=0,M=0;const y=C(),w=C(),h=C(),m=C(),d=C(),O=C(),b=C(),u=C(),P=C(),T=C(),$=C(),j=C(),g=C(),V=ct();ie(P,0,1,0),G(w,o[1],o[0]),D(w,w),f?(z(u,o[0],r),D(h,u)):ie(h,0,0,1),Ie(w,h,P,P,d,h,be),ee(m,h),ee(j,d);for(let v=0;v<t.length;v++)F(O,d,t[v][0]),F(u,h,t[v][2]),z(O,O,u),z(O,O,o[0]),c[A++]=O[0],c[A++]=O[1],c[A++]=O[2];a[M++]=-w[0],a[M++]=-w[1],a[M++]=-w[2];for(let v=0;v<s.length;v++)i.push(s[v][0]>0?s[v][0]:-s[v][0]-1+t.length),i.push(s[v][1]>0?s[v][1]:-s[v][1]-1+t.length),i.push(s[v][2]>0?s[v][2]:-s[v][2]-1+t.length),p.push(0),p.push(0),p.push(0);let I=t.length;const ne=t.length-1;for(let v=0;v<o.length;v++){let ye=!1;v>0&&(ee(y,w),v<o.length-1?(G(w,o[v+1],o[v]),D(w,w)):ye=!0,z(T,y,w),D(T,T),z($,o[v-1],m),ut(o[v],T,V),ft(V,ht($,y),u)?(G(u,u,o[v]),D(h,u),B(d,T,h),D(d,d)):Ie(T,m,j,P,d,h,be),ee(m,h),ee(j,d)),f&&(z(u,o[v],r),D(g,u));for(let H=0;H<l;H++)if(F(O,d,n[H][0]),F(u,h,n[H][1]),z(O,O,u),D(b,O),a[M++]=b[0],a[M++]=b[1],a[M++]=b[2],z(O,O,o[v]),c[A++]=O[0],c[A++]=O[1],c[A++]=O[2],!ye){const he=(H+1)%l;i.push(I+H),i.push(I+l+H),i.push(I+he),i.push(I+he),i.push(I+l+H),i.push(I+l+he);for(let pe=0;pe<6;pe++){const Le=i.length-6;p.push(i[Le+pe]-ne)}}I+=l}const ze=o[o.length-1];for(let v=0;v<t.length;v++)F(O,d,t[v][0]),F(u,h,t[v][1]),z(O,O,u),z(O,O,ze),c[A++]=O[0],c[A++]=O[1],c[A++]=O[2];const ue=M/3;a[M++]=w[0],a[M++]=w[1],a[M++]=w[2];const fe=I-l;for(let v=0;v<s.length;v++)i.push(s[v][0]>=0?I+s[v][0]:-s[v][0]-1+fe),i.push(s[v][2]>=0?I+s[v][2]:-s[v][2]-1+fe),i.push(s[v][1]>=0?I+s[v][1]:-s[v][1]-1+fe),p.push(ue),p.push(ue),p.push(ue);const Fe=[[x.POSITION,new S(c,i,3,!0)],[x.NORMAL,new S(a,p,3,!0)]];return new U(e,Fe)}function Tn(e,n,o,t){te(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),te(n[0].length===3,"createPolylineGeometry(): malformed vertex"),te(o==null||o.length===n.length,"createPolylineGeometry: need same number of points and normals"),te(o==null||o[0].length===3,"createPolylineGeometry(): malformed normal");const s=Ee(3*n.length),f=new Array(2*(n.length-1));let r=0,l=0;for(let a=0;a<n.length;a++){for(let i=0;i<3;i++)s[r++]=n[a][i];a>0&&(f[l++]=a-1,f[l++]=a)}const c=[[x.POSITION,new S(s,f,3,!0)]];if(o){const a=E(3*o.length);let i=0;for(let p=0;p<n.length;p++)for(let A=0;A<3;A++)a[i++]=o[p][A];c.push([x.NORMAL,new S(a,f,3,!0)])}return t&&c.push([x.COLOR,new S(t,it(t.length/4),4)]),new U(e,c,null,Ce.Line)}function Sn(e,n,o,t,s,f=0){const r=new Array(18),l=[[-o,f,s/2],[t,f,s/2],[0,n+f,s/2],[-o,f,-s/2],[t,f,-s/2],[0,n+f,-s/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let a=0;a<6;a++)r[3*a]=l[a][0],r[3*a+1]=l[a][1],r[3*a+2]=l[a][2];return new U(e,[[x.POSITION,new S(r,c,3,!0)]])}function In(e,n){const o=e.getMutableAttribute(x.POSITION).data;for(let t=0;t<o.length;t+=3){const s=o[t],f=o[t+1],r=o[t+2];ie(J,s,f,r),Qe(J,J,n),o[t]=J[0],o[t+1]=J[1],o[t+2]=J[2]}}function bn(e,n=e){const o=e.attributes,t=o.get(x.POSITION).data,s=o.get(x.NORMAL).data;if(s){const f=n.getMutableAttribute(x.NORMAL).data;for(let r=0;r<s.length;r+=3){const l=s[r+1];f[r+1]=-s[r+2],f[r+2]=l}}if(t){const f=n.getMutableAttribute(x.POSITION).data;for(let r=0;r<t.length;r+=3){const l=t[r+1];f[r+1]=-t[r+2],f[r+2]=l}}}function we(e,n,o,t,s){return!(Math.abs($e(n,e))>s)&&(B(o,e,n),D(o,o),B(t,o,e),D(t,t),!0)}function Ie(e,n,o,t,s,f,r){return we(e,n,s,f,r)||we(e,o,s,f,r)||we(e,t,s,f,r)}const be=.99619469809,J=C();var ce;(function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"})(ce||(ce={}));function Rn(e,n){if(e.type==="point")return _(e,n,!1);if(yt(e))switch(e.type){case"extent":return _(e.center,n,!1);case"polygon":return _(e.centroid,n,!1);case"polyline":return _(Re(e),n,!0);case"mesh":return _(At(e.vertexSpace,e.spatialReference)??e.extent.center,n,!1);case"multipoint":return}else switch(e.type){case"extent":return _(Ft(e),n,!0);case"polygon":return _(Lt(e),n,!0);case"polyline":return _(Re(e),n,!0);case"multipoint":return}}function Re(e){const n=e.paths[0];if(!n||n.length===0)return null;const o=Ge(n,je(n)/2);return Ae(o[0],o[1],o[2],e.spatialReference)}function Ft(e){return Ae(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),e.zmin!=null&&e.zmax!=null&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}function Lt(e){const n=e.rings[0];if(!n||n.length===0)return null;const o=He(e.rings,!!e.hasZ);return Ae(o[0],o[1],o[2],e.spatialReference)}function _(e,n,o){const t=o?e:Mt(e);return n&&e?xt(e,t,n)?t:null:t}function $n(e,n,o,t=0){if(e){n||(n=_e());const s=e;let f=.5*s.width*(o-1),r=.5*s.height*(o-1);return s.width<1e-7*s.height?f+=r/20:s.height<1e-7*s.width&&(r+=f/20),wt(n,s.xmin-f-t,s.ymin-r-t,s.xmax+f+t,s.ymax+r+t),n}return null}function Cn(e,n,o=null){const t=gt(vt);return e!=null&&(t[0]=e[0],t[1]=e[1],t[2]=e[2]),n!=null?t[3]=n:e!=null&&e.length>3&&(t[3]=e[3]),o&&(t[0]*=o,t[1]*=o,t[2]*=o,t[3]*=o),t}function Nn(e=ke,n,o,t=1){const s=new Array(3);if(n==null||o==null)s[0]=1,s[1]=1,s[2]=1;else{let f,r=0;for(let l=2;l>=0;l--){const c=e[l],a=c!=null,i=l===0&&!f&&!a,p=o[l];let A;c==="symbol-value"||i?A=p!==0?n[l]/p:1:a&&c!=="proportional"&&isFinite(c)&&(A=p!==0?c/p:1),A!=null&&(s[l]=A,f=A,r=Math.max(r,Math.abs(A)))}for(let l=2;l>=0;l--)s[l]==null?s[l]=f:s[l]===0&&(s[l]=.001*r)}for(let f=2;f>=0;f--)s[f]/=t;return Be(s)}function Et(e){return e.isPrimitive!=null}function Dn(e){return Ut(Et(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function Ut(e){const n=o=>o==null||o>=0;return Array.isArray(e)?e.every(n):n(e)}function Vn(e,n,o,t=Ot()){return e&&pt(t,t,-e/180*Math.PI),n&&dt(t,t,n/180*Math.PI),o&&mt(t,t,o/180*Math.PI),t}function zn(e,n,o){if(o.minDemResolution!=null)return o.minDemResolution;const t=Xe(n),s=qe(e)*t,f=Ye(e)*t,r=Ze(e)*(n.isGeographic?1:t);return s===0&&f===0&&r===0?o.minDemResolutionForPoints:.01*Math.max(s,f,r)}const Gt=.5;function Fn(e,n){e.include(We),e.attributes.add(x.POSITION,"vec3"),e.attributes.add(x.NORMAL,"vec3"),e.attributes.add(x.CENTEROFFSETANDDISTANCE,"vec4");const o=e.vertex;Ke(o,n),et(o,n),o.uniforms.add(new Ne("viewport",t=>t.camera.fullViewport),new tt("polygonOffset",t=>t.shaderPolygonOffset),new ge("cameraGroundRelative",t=>t.camera.aboveGround?1:-1)),n.hasVerticalOffset&&nt(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(N`struct ProjectHUDAux {
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
  `),n.draped&&!n.hasVerticalOffset||ot(o),n.draped||(o.uniforms.add(new ge("perDistancePixelRatio",t=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2))),o.code.add(N`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${N.float(Gt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),n.screenCenterOffsetUnitsEnabled&&st(o),n.hasScreenSizePerspective&&rt(o),o.code.add(N`
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
  `)}function jt(e){e.uniforms.add(new at("alignPixelEnabled",n=>n.alignPixelEnabled)),e.code.add(N`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(N`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function Ln(e){e.vertex.uniforms.add(new ge("renderTransparentlyOccludedHUD",n=>n.hudRenderStyle===ce.Occluded?1:n.hudRenderStyle===ce.NotOccluded?0:.75),new Ne("viewport",n=>n.camera.fullViewport),new lt("hudVisibilityTexture",n=>n.hudVisibility?.getTexture())),e.vertex.include(jt),e.vertex.code.add(N`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}export{Cn as A,wn as B,vn as C,Nn as D,zn as E,On as F,Ie as M,In as O,$n as S,Dn as U,Ut as Z,ce as a,jt as b,Vt as c,fn as d,Gt as e,pn as f,gn as g,Mn as h,Se as i,yn as j,Rn as k,mn as l,bn as m,Ln as n,ve as o,cn as p,An as q,dn as r,xn as s,hn as t,Fn as u,Vn as v,Tn as w,zt as x,Sn as y,Pn as z};
