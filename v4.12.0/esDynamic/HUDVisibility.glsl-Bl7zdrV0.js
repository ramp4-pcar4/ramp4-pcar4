import{n as V}from"./glsl-o28TenZV.js";import{a9 as N,eg as _e,aX as Se,am as Be,iP as Xe,iQ as qe,i5 as ke,ca as Ye,aW as Ze,eI as Je,bq as Qe,iR as We,iS as Ke,iT as et}from"./main-DnzmeE4U.js";import{t as tt}from"./doublePrecisionUtils-BJbYwoii.js";import{c as j,_,A as D,o as ae,E as nt,g as L,u as F,P as Te,s as ee}from"./vec32-BuqRmYBM.js";import{r as R,n as E,t as be}from"./vec3f32-BS0cezmI.js";import{n as U,f as G,e as Ie,a as Re,s as ot,b as at,d as st,o as Ce,c as rt,g as me,h as it,p as lt,w as ct,i as ut,j as ft,k as pt}from"./VerticalOffset.glsl-BtVaDxLq.js";import{w as Ne,o as ht}from"./Indices-DkAzsiH-.js";import{M as dt,l as mt,x as Ot}from"./plane-B_adY3_o.js";import{k as wt}from"./sphere-Cj20syUS.js";import{t as T}from"./orientedBoundingBox-CTsjUkMw.js";import{s as te}from"./InterleavedLayout-DcHoXu73.js";import{e as A}from"./VertexAttribute-DFC3a3eR.js";import{x as vt,l as gt,m as At}from"./mat4-BFStKTjU.js";import{e as yt}from"./mat4f64-BaJwL7tQ.js";import{s as xt}from"./vec42-D8CJyqHG.js";import{t as Pt,N as Mt}from"./vec4f64-CjUMzAyX.js";import{n as St}from"./projection-m8vi7Cxv.js";import{u as Tt}from"./meshVertexSpaceUtils-BwEbYR8F.js";import{e as Oe}from"./projectVectorToVector-D0K_S4MR.js";import{o as bt,x as It}from"./hydratedFeatures-BDT5zTGB.js";var we,se;(function(e){e[e.OBJECT=0]="OBJECT",e[e.HUD=1]="HUD",e[e.TERRAIN=2]="TERRAIN",e[e.OVERLAY=3]="OVERLAY",e[e.I3S=4]="I3S",e[e.PCL=5]="PCL",e[e.LOD=6]="LOD",e[e.VOXEL=7]="VOXEL",e[e.TILES3D=8]="TILES3D"})(we||(we={}));let Rt=class{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerUids=[],this.store=se.ALL,this.normalRequired=!0,this.excludeLabels=!1}};(function(e){e[e.MIN=0]="MIN",e[e.MINMAX=1]="MINMAX",e[e.ALL=2]="ALL"})(se||(se={}));function Ct(e){e.code.add(V`const float MAX_RGBA_FLOAT =
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
}`),e.code.add(V`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(V`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}function Nt(e){return e.type==="point"}function Vt(e,n){return e==null&&(e=[]),e.push(n),e}function Dt(e,n){if(e==null)return null;const o=e.filter(t=>t!==n);return o.length===0?null:o}function zt(e,n,o,t,a){re[0]=e.get(n,0),re[1]=e.get(n,1),re[2]=e.get(n,2),tt(re,X,3),o.set(a,0,X[0]),t.set(a,0,X[1]),o.set(a,1,X[2]),t.set(a,1,X[3]),o.set(a,2,X[4]),t.set(a,2,X[5])}const re=N(),X=new Float32Array(6);var ve;(function(e){function n(s,i){const c=s[i],r=s[i+1],l=s[i+2];return Math.sqrt(c*c+r*r+l*l)}function o(s,i){const c=s[i],r=s[i+1],l=s[i+2],h=1/Math.sqrt(c*c+r*r+l*l);s[i]*=h,s[i+1]*=h,s[i+2]*=h}function t(s,i,c){s[i]*=c,s[i+1]*=c,s[i+2]*=c}function a(s,i,c,r,l,h=i){(l=l||s)[h]=s[i]+c[r],l[h+1]=s[i+1]+c[r+1],l[h+2]=s[i+2]+c[r+2]}function f(s,i,c,r,l,h=i){(l=l||s)[h]=s[i]-c[r],l[h+1]=s[i+1]-c[r+1],l[h+2]=s[i+2]-c[r+2]}e.length=n,e.normalize=o,e.scale=t,e.add=a,e.subtract=f})(ve||(ve={}));const k=ve,ge=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Ft=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Lt=[0,0,1,0,1,1,0,1],Et=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ve=new Array(36);for(let e=0;e<6;e++)for(let n=0;n<6;n++)Ve[6*e+n]=e;const q=new Array(36);for(let e=0;e<6;e++)q[6*e]=0,q[6*e+1]=1,q[6*e+2]=2,q[6*e+3]=2,q[6*e+4]=3,q[6*e+5]=0;function Ut(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(24);for(let t=0;t<8;t++)o[3*t]=ge[t][0]*n[0],o[3*t+1]=ge[t][1]*n[1],o[3*t+2]=ge[t][2]*n[2];return new G(e,[[A.POSITION,new T(o,Et,3,!0)],[A.NORMAL,new T(Ft,Ve,3)],[A.UV0,new T(Lt,q,2)]])}const Ae=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Gt=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],jt=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Ht=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function $t(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(18);for(let t=0;t<6;t++)o[3*t]=Ae[t][0]*n[0],o[3*t+1]=Ae[t][1]*n[1],o[3*t+2]=Ae[t][2]*n[2];return new G(e,[[A.POSITION,new T(o,jt,3,!0)],[A.NORMAL,new T(Gt,Ht,3)]])}const ie=R(-.5,0,-.5),le=R(.5,0,-.5),ce=R(0,0,.5),ue=R(0,.5,0),Y=E(),Z=E(),J=E(),Q=E(),W=E();j(Y,ie,ue),j(Z,ie,le),_(J,Y,Z),D(J,J),j(Y,le,ue),j(Z,le,ce),_(Q,Y,Z),D(Q,Q),j(Y,ce,ue),j(Z,ce,ie),_(W,Y,Z),D(W,W);const ye=[ie,le,ce,ue],_t=[0,-1,0,J[0],J[1],J[2],Q[0],Q[1],Q[2],W[0],W[1],W[2]],Bt=[0,1,2,3,1,0,3,2,1,3,0,2],Xt=[0,0,0,1,1,1,2,2,2,3,3,3];function qt(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(12);for(let t=0;t<4;t++)o[3*t]=ye[t][0]*n[0],o[3*t+1]=ye[t][1]*n[1],o[3*t+2]=ye[t][2]*n[2];return new G(e,[[A.POSITION,new T(o,Bt,3,!0)],[A.NORMAL,new T(_t,Xt,3)]])}function kt(e,n,o,t,a={uv:!0}){const f=-Math.PI,s=2*Math.PI,i=-Math.PI/2,c=Math.PI,r=Math.max(3,Math.floor(o)),l=Math.max(2,Math.floor(t)),h=(r+1)*(l+1),y=U(3*h),P=U(3*h),x=U(2*h),w=[];let p=0;for(let O=0;O<=l;O++){const I=[],u=O/l,M=i+u*c,S=Math.cos(M);for(let C=0;C<=r;C++){const H=C/r,v=f+H*s,z=Math.cos(v)*S,b=Math.sin(M),oe=-Math.sin(v)*S;y[3*p]=z*n,y[3*p+1]=b*n,y[3*p+2]=oe*n,P[3*p]=z,P[3*p+1]=b,P[3*p+2]=oe,x[2*p]=H,x[2*p+1]=u,I.push(p),++p}w.push(I)}const m=new Array;for(let O=0;O<l;O++)for(let I=0;I<r;I++){const u=w[O][I],M=w[O][I+1],S=w[O+1][I+1],C=w[O+1][I];O===0?(m.push(u),m.push(S),m.push(C)):O===l-1?(m.push(u),m.push(M),m.push(S)):(m.push(u),m.push(M),m.push(S),m.push(S),m.push(C),m.push(u))}const d=[[A.POSITION,new T(y,m,3,!0)],[A.NORMAL,new T(P,m,3,!0)]];return a.uv&&d.push([A.UV0,new T(x,m,2,!0)]),a.offset&&(d[0][0]=A.OFFSET,d.push([A.POSITION,new T(Float64Array.from(a.offset),Ne(m.length),3,!0)])),new G(e,d)}function Yt(e,n,o,t){const a=Zt(n,o);return new G(e,a)}function Zt(e,n,o){let t,a;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let c=0;c<t.length;c+=3)k.scale(t,c,e/k.length(t,c));let f={};function s(c,r){c>r&&([c,r]=[r,c]);const l=c.toString()+"."+r.toString();if(f[l])return f[l];let h=t.length;return t.length+=3,k.add(t,3*c,t,3*r,t,h),k.scale(t,h,e/k.length(t,h)),h/=3,f[l]=h,h}for(let c=0;c<n;c++){const r=a.length,l=new Array(4*r);for(let h=0;h<r;h+=3){const y=a[h],P=a[h+1],x=a[h+2],w=s(y,P),p=s(P,x),m=s(x,y),d=4*h;l[d]=y,l[d+1]=w,l[d+2]=m,l[d+3]=P,l[d+4]=p,l[d+5]=w,l[d+6]=x,l[d+7]=m,l[d+8]=p,l[d+9]=w,l[d+10]=p,l[d+11]=m}a=l,f={}}const i=Re(t);for(let c=0;c<i.length;c+=3)k.normalize(i,c);return[[A.POSITION,new T(Re(t),a,3,!0)],[A.NORMAL,new T(i,a,3,!0)]]}function Jt(e,n={}){const{normal:o,position:t,color:a,rotation:f,size:s,centerOffsetAndDistance:i,uvs:c,featureAttribute:r,objectAndLayerIdColor:l=null}=n,h=t?Se(t):N(),y=o?Se(o):Be(0,0,1),P=a?[255*a[0],255*a[1],255*a[2],a.length>3?255*a[3]:255]:[255,255,255,255],x=s!=null&&s.length===2?s:[1,1],w=f!=null?[f]:[0],p=Ne(1),m=[[A.POSITION,new T(h,p,3,!0)],[A.NORMAL,new T(y,p,3,!0)],[A.COLOR,new T(P,p,4,!0)],[A.SIZE,new T(x,p,2)],[A.ROTATION,new T(w,p,1,!0)]];if(c&&m.push([A.UV0,new T(c,p,c.length)]),i!=null){const d=[i[0],i[1],i[2],i[3]];m.push([A.CENTEROFFSETANDDISTANCE,new T(d,p,4)])}if(r){const d=[r[0],r[1],r[2],r[3]];m.push([A.FEATUREATTRIBUTE,new T(d,p,4)])}return new G(e,m,null,Ie.Point,l)}function De(e,n,o,t,a=!0,f=!0){let s=0;const i=n,c=e;let r=R(0,s,0),l=R(0,s+c,0),h=R(0,-1,0),y=R(0,1,0);t&&(s=c,l=R(0,0,0),r=R(0,s,0),h=R(0,1,0),y=R(0,-1,0));const P=[l,r],x=[h,y],w=o+2,p=Math.sqrt(c*c+i*i);if(t)for(let u=o-1;u>=0;u--){const M=u*(2*Math.PI/o),S=R(Math.cos(M)*i,s,Math.sin(M)*i);P.push(S);const C=R(c*Math.cos(M)/p,-i/p,c*Math.sin(M)/p);x.push(C)}else for(let u=0;u<o;u++){const M=u*(2*Math.PI/o),S=R(Math.cos(M)*i,s,Math.sin(M)*i);P.push(S);const C=R(c*Math.cos(M)/p,i/p,c*Math.sin(M)/p);x.push(C)}const m=new Array,d=new Array;if(a){for(let u=3;u<P.length;u++)m.push(1),m.push(u-1),m.push(u),d.push(0),d.push(0),d.push(0);m.push(P.length-1),m.push(2),m.push(1),d.push(0),d.push(0),d.push(0)}if(f){for(let u=3;u<P.length;u++)m.push(u),m.push(u-1),m.push(0),d.push(u),d.push(u-1),d.push(1);m.push(0),m.push(2),m.push(P.length-1),d.push(1),d.push(2),d.push(x.length-1)}const O=U(3*w);for(let u=0;u<w;u++)O[3*u]=P[u][0],O[3*u+1]=P[u][1],O[3*u+2]=P[u][2];const I=U(3*w);for(let u=0;u<w;u++)I[3*u]=x[u][0],I[3*u+1]=x[u][1],I[3*u+2]=x[u][2];return[[A.POSITION,new T(O,m,3,!0)],[A.NORMAL,new T(I,d,3,!0)]]}function Qt(e,n,o,t,a,f=!0,s=!0){return new G(e,De(n,o,t,a,f,s))}function Wt(e,n,o,t,a,f,s){const i=a?be(a):R(1,0,0),c=f?be(f):R(0,0,0);s??=!0;const r=E();D(r,i);const l=E();L(l,r,Math.abs(n));const h=E();L(h,l,-.5),F(h,h,c);const y=R(0,1,0);Math.abs(1-Te(r,y))<.2&&ae(y,0,0,1);const P=E();_(P,r,y),D(P,P),_(y,P,r);const x=2*t+(s?2:0),w=t+(s?2:0),p=U(3*x),m=U(3*w),d=U(2*x),O=new Array(3*t*(s?4:2)),I=new Array(3*t*(s?4:2));s&&(p[3*(x-2)]=h[0],p[3*(x-2)+1]=h[1],p[3*(x-2)+2]=h[2],d[2*(x-2)]=0,d[2*(x-2)+1]=0,p[3*(x-1)]=p[3*(x-2)]+l[0],p[3*(x-1)+1]=p[3*(x-2)+1]+l[1],p[3*(x-1)+2]=p[3*(x-2)+2]+l[2],d[2*(x-1)]=1,d[2*(x-1)+1]=1,m[3*(w-2)]=-r[0],m[3*(w-2)+1]=-r[1],m[3*(w-2)+2]=-r[2],m[3*(w-1)]=r[0],m[3*(w-1)+1]=r[1],m[3*(w-1)+2]=r[2]);const u=(v,z,b)=>{O[v]=z,I[v]=b};let M=0;const S=E(),C=E();for(let v=0;v<t;v++){const z=v*(2*Math.PI/t);L(S,y,Math.sin(z)),L(C,P,Math.cos(z)),F(S,S,C),m[3*v]=S[0],m[3*v+1]=S[1],m[3*v+2]=S[2],L(S,S,o),F(S,S,h),p[3*v]=S[0],p[3*v+1]=S[1],p[3*v+2]=S[2],d[2*v]=v/t,d[2*v+1]=0,p[3*(v+t)]=p[3*v]+l[0],p[3*(v+t)+1]=p[3*v+1]+l[1],p[3*(v+t)+2]=p[3*v+2]+l[2],d[2*(v+t)]=v/t,d[2*v+1]=1;const b=(v+1)%t;u(M++,v,v),u(M++,v+t,v),u(M++,b,b),u(M++,b,b),u(M++,v+t,v),u(M++,b+t,b)}if(s){for(let v=0;v<t;v++){const z=(v+1)%t;u(M++,x-2,w-2),u(M++,v,w-2),u(M++,z,w-2)}for(let v=0;v<t;v++){const z=(v+1)%t;u(M++,v+t,w-1),u(M++,x-1,w-1),u(M++,z+t,w-1)}}const H=[[A.POSITION,new T(p,O,3,!0)],[A.NORMAL,new T(m,I,3,!0)],[A.UV0,new T(d,O,2,!0)]];return new G(e,H)}function Kt(e,n,o,t,a,f){t=t||10,a=a==null||a,te(n.length>1);const s=[[0,0,0]],i=[],c=[];for(let r=0;r<t;r++){i.push([0,-r-1,-(r+1)%t-1]);const l=r/t*2*Math.PI;c.push([Math.cos(l)*o,Math.sin(l)*o])}return ze(e,c,n,s,i,a,f)}function ze(e,n,o,t,a,f,s=R(0,0,0)){const i=n.length,c=U(o.length*i*3+(6*t.length||0)),r=U(o.length*i*3+(t?6:0)),l=new Array,h=new Array;let y=0,P=0;const x=N(),w=N(),p=N(),m=N(),d=N(),O=N(),I=N(),u=N(),M=N(),S=N(),C=N(),H=N(),v=N(),z=dt();ae(M,0,1,0),j(w,o[1],o[0]),D(w,w),f?(F(u,o[0],s),D(p,u)):ae(p,0,0,1),Pe(w,p,M,M,d,p,Fe),ee(m,p),ee(H,d);for(let g=0;g<t.length;g++)L(O,d,t[g][0]),L(u,p,t[g][2]),F(O,O,u),F(O,O,o[0]),c[y++]=O[0],c[y++]=O[1],c[y++]=O[2];r[P++]=-w[0],r[P++]=-w[1],r[P++]=-w[2];for(let g=0;g<a.length;g++)l.push(a[g][0]>0?a[g][0]:-a[g][0]-1+t.length),l.push(a[g][1]>0?a[g][1]:-a[g][1]-1+t.length),l.push(a[g][2]>0?a[g][2]:-a[g][2]-1+t.length),h.push(0),h.push(0),h.push(0);let b=t.length;const oe=t.length-1;for(let g=0;g<o.length;g++){let Me=!1;g>0&&(ee(x,w),g<o.length-1?(j(w,o[g+1],o[g]),D(w,w)):Me=!0,F(S,x,w),D(S,S),F(C,o[g-1],m),mt(o[g],S,z),Ot(z,wt(C,x),u)?(j(u,u,o[g]),D(p,u),_(d,S,p),D(d,d)):Pe(S,m,H,M,d,p,Fe),ee(m,p),ee(H,d)),f&&(F(u,o[g],s),D(v,u));for(let $=0;$<i;$++)if(L(O,d,n[$][0]),L(u,p,n[$][1]),F(O,O,u),D(I,O),r[P++]=I[0],r[P++]=I[1],r[P++]=I[2],F(O,O,o[g]),c[y++]=O[0],c[y++]=O[1],c[y++]=O[2],!Me){const he=($+1)%i;l.push(b+$),l.push(b+i+$),l.push(b+he),l.push(b+he),l.push(b+i+$),l.push(b+i+he);for(let de=0;de<6;de++){const $e=l.length-6;h.push(l[$e+de]-oe)}}b+=i}const je=o[o.length-1];for(let g=0;g<t.length;g++)L(O,d,t[g][0]),L(u,p,t[g][1]),F(O,O,u),F(O,O,je),c[y++]=O[0],c[y++]=O[1],c[y++]=O[2];const fe=P/3;r[P++]=w[0],r[P++]=w[1],r[P++]=w[2];const pe=b-i;for(let g=0;g<a.length;g++)l.push(a[g][0]>=0?b+a[g][0]:-a[g][0]-1+pe),l.push(a[g][2]>=0?b+a[g][2]:-a[g][2]-1+pe),l.push(a[g][1]>=0?b+a[g][1]:-a[g][1]-1+pe),h.push(fe),h.push(fe),h.push(fe);const He=[[A.POSITION,new T(c,l,3,!0)],[A.NORMAL,new T(r,h,3,!0)]];return new G(e,He)}function en(e,n,o,t){te(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),te(n[0].length===3,"createPolylineGeometry(): malformed vertex"),te(o==null||o.length===n.length,"createPolylineGeometry: need same number of points and normals"),te(o==null||o[0].length===3,"createPolylineGeometry(): malformed normal");const a=_e(3*n.length),f=new Array(2*(n.length-1));let s=0,i=0;for(let r=0;r<n.length;r++){for(let l=0;l<3;l++)a[s++]=n[r][l];r>0&&(f[i++]=r-1,f[i++]=r)}const c=[[A.POSITION,new T(a,f,3,!0)]];if(o){const r=U(3*o.length);let l=0;for(let h=0;h<n.length;h++)for(let y=0;y<3;y++)r[l++]=o[h][y];c.push([A.NORMAL,new T(r,f,3,!0)])}return t&&c.push([A.COLOR,new T(t,ht(t.length/4),4)]),new G(e,c,null,Ie.Line)}function tn(e,n,o,t,a,f=0){const s=new Array(18),i=[[-o,f,a/2],[t,f,a/2],[0,n+f,a/2],[-o,f,-a/2],[t,f,-a/2],[0,n+f,-a/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let r=0;r<6;r++)s[3*r]=i[r][0],s[3*r+1]=i[r][1],s[3*r+2]=i[r][2];return new G(e,[[A.POSITION,new T(s,c,3,!0)]])}function nn(e,n){const o=e.getMutableAttribute(A.POSITION).data;for(let t=0;t<o.length;t+=3){const a=o[t],f=o[t+1],s=o[t+2];ae(K,a,f,s),nt(K,K,n),o[t]=K[0],o[t+1]=K[1],o[t+2]=K[2]}}function on(e,n=e){const o=e.attributes,t=o.get(A.POSITION).data,a=o.get(A.NORMAL).data;if(a){const f=n.getMutableAttribute(A.NORMAL).data;for(let s=0;s<a.length;s+=3){const i=a[s+1];f[s+1]=-a[s+2],f[s+2]=i}}if(t){const f=n.getMutableAttribute(A.POSITION).data;for(let s=0;s<t.length;s+=3){const i=t[s+1];f[s+1]=-t[s+2],f[s+2]=i}}}function xe(e,n,o,t,a){return!(Math.abs(Te(n,e))>a)&&(_(o,e,n),D(o,o),_(t,o,e),D(t,t),!0)}function Pe(e,n,o,t,a,f,s){return xe(e,n,a,f,s)||xe(e,o,a,f,s)||xe(e,t,a,f,s)}const Fe=.99619469809,K=N();var ne;(function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"})(ne||(ne={}));function an(e,n){if(e.type==="point")return B(e,n,!1);if(bt(e))switch(e.type){case"extent":return B(e.center,n,!1);case"polygon":return B(e.centroid,n,!1);case"polyline":return B(Le(e),n,!0);case"mesh":return B(Tt(e.vertexSpace,e.spatialReference)??e.extent.center,n,!1);case"multipoint":return}else switch(e.type){case"extent":return B(sn(e),n,!0);case"polygon":return B(rn(e),n,!0);case"polyline":return B(Le(e),n,!0);case"multipoint":return}}function Le(e){const n=e.paths[0];if(!n||n.length===0)return null;const o=Xe(n,qe(n)/2);return Oe(o[0],o[1],o[2],e.spatialReference)}function sn(e){return Oe(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),e.zmin!=null&&e.zmax!=null&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}function rn(e){const n=e.rings[0];if(!n||n.length===0)return null;const o=ke(e.rings,!!e.hasZ);return Oe(o[0],o[1],o[2],e.spatialReference)}function B(e,n,o){const t=o?e:It(e);return n&&e?St(e,t,n)?t:null:t}function ln(e,n,o,t=0){if(e){n||(n=Ye());const a=e;let f=.5*a.width*(o-1),s=.5*a.height*(o-1);return a.width<1e-7*a.height?f+=s/20:a.height<1e-7*a.width&&(s+=f/20),xt(n,a.xmin-f-t,a.ymin-s-t,a.xmax+f+t,a.ymax+s+t),n}return null}function cn(e,n,o=null){const t=Pt(Mt);return e!=null&&(t[0]=e[0],t[1]=e[1],t[2]=e[2]),n!=null?t[3]=n:e!=null&&e.length>3&&(t[3]=e[3]),o&&(t[0]*=o,t[1]*=o,t[2]*=o,t[3]*=o),t}function un(e=Je,n,o,t=1){const a=new Array(3);if(n==null||o==null)a[0]=1,a[1]=1,a[2]=1;else{let f,s=0;for(let i=2;i>=0;i--){const c=e[i],r=c!=null,l=i===0&&!f&&!r,h=o[i];let y;c==="symbol-value"||l?y=h!==0?n[i]/h:1:r&&c!=="proportional"&&isFinite(c)&&(y=h!==0?c/h:1),y!=null&&(a[i]=y,f=y,s=Math.max(s,Math.abs(y)))}for(let i=2;i>=0;i--)a[i]==null?a[i]=f:a[i]===0&&(a[i]=.001*s)}for(let f=2;f>=0;f--)a[f]/=t;return Ze(a)}function fn(e){return e.isPrimitive!=null}function pn(e){return Ee(fn(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function Ee(e){const n=o=>o==null||o>=0;return Array.isArray(e)?e.every(n):n(e)}function hn(e,n,o,t=yt()){return e&&vt(t,t,-e/180*Math.PI),n&&gt(t,t,n/180*Math.PI),o&&At(t,t,o/180*Math.PI),t}function dn(e,n,o){if(o.minDemResolution!=null)return o.minDemResolution;const t=Qe(n),a=We(e)*t,f=Ke(e)*t,s=et(e)*(n.isGeographic?1:t);return a===0&&f===0&&s===0?o.minDemResolutionForPoints:.01*Math.max(a,f,s)}const Ue=.5;function mn(e,n){e.include(ot),e.attributes.add(A.POSITION,"vec3"),e.attributes.add(A.NORMAL,"vec3"),e.attributes.add(A.CENTEROFFSETANDDISTANCE,"vec4");const o=e.vertex;at(o,n),st(o,n),o.uniforms.add(new Ce("viewport",t=>t.camera.fullViewport),new rt("polygonOffset",t=>t.shaderPolygonOffset),new me("cameraGroundRelative",t=>t.camera.aboveGround?1:-1)),n.hasVerticalOffset&&it(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(V`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(V`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${n.terrainDepthTest?V.float(0):V`sign(pointGroundDistance)`};
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
  `),n.draped&&!n.hasVerticalOffset||lt(o),n.draped||(o.uniforms.add(new me("perDistancePixelRatio",t=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2))),o.code.add(V`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${V.float(Ue)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),n.screenCenterOffsetUnitsEnabled&&ct(o),n.hasScreenSizePerspective&&ut(o),o.code.add(V`
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

      ${n.hasVerticalOffset?V`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${n.screenCenterOffsetUnitsEnabled?"":V`
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
  `)}function Ge(e){e.uniforms.add(new ft("alignPixelEnabled",n=>n.alignPixelEnabled)),e.code.add(V`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(V`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function On(e){e.vertex.uniforms.add(new me("renderTransparentlyOccludedHUD",n=>n.hudRenderStyle===ne.Occluded?1:n.hudRenderStyle===ne.NotOccluded?0:.75),new Ce("viewport",n=>n.camera.fullViewport),new pt("hudVisibilityTexture",n=>n.hudVisibility?.getTexture())),e.vertex.include(Ge),e.vertex.code.add(V`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}export{cn as A,$t as B,kt as C,un as D,dn as E,Ut as F,Pe as M,nn as O,ln as S,pn as U,Ee as Z,ne as a,Ge as b,De as c,Ct as d,Ue as e,Vt as f,qt as g,Wt as h,we as i,Qt as j,an as k,zt as l,on as m,On as n,se as o,Rt as p,Jt as q,Dt as r,Yt as s,Nt as t,mn as u,hn as v,en as w,ze as x,tn as y,Kt as z};
