import{n as N}from"./glsl-Cj7KC756.js";import{fm as Ve,dB as De,cG as Fe,jk as Ue,jl as je,jm as Ge,bN as Ee,jn as He,jo as Le,jp as _e,fS as Be,aj as C,ar as xe,d8 as ke}from"./main-6eEsl9OJ.js";import{x as qe,l as Ze,m as Xe}from"./mat4-DL3nuHcq.js";import{e as Ye}from"./mat4f64-q_b6UJoq.js";import{s as Je}from"./vec42-CKs01hkn.js";import{t as Ke,s as Qe}from"./vec4f64-DPb6J-GU.js";import{n as We}from"./projectionUtils-BoGsVCso.js";import{u as et}from"./meshVertexSpaceUtils-CRkG59M8.js";import{e as ge}from"./projectVectorToVector-PLaHcAe9.js";import{o as tt,x as nt}from"./hydratedFeatures-D7uyoV5q.js";import{o as ae,c as E,A as z,s as W,g as F,u as D,_ as B,E as ot,P as Se}from"./vec32-BvrGiqaM.js";import{r as I,t as ye,n as U}from"./vec3f32-WCVSSNPR.js";import{n as j,p as G,a as be,b as Ae,s as rt,f as st,d as at,o as Te,c as lt,e as we,g as it,h as ct,w as ut,i as ft,j as pt,k as ht}from"./OutputColorHighlightOID.glsl-BRMxJ4Ru.js";import{A as dt,U as Ie}from"./Indices-Cme21Gh9.js";import{M as mt,l as wt,q as Ot}from"./plane-BqH4Rk0w.js";import{k as gt}from"./sphere-DYiAGvsP.js";import{t as S}from"./orientedBoundingBox-BRF0r1hl.js";import{s as ee}from"./BufferView-r56Foetm.js";import{e as x}from"./VertexAttribute-BfkzOMLV.js";function nn(t){t.code.add(N`const float MAX_RGBA_FLOAT =
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
}`)}function on(t,n){if(t.type==="point")return _(t,n,!1);if(tt(t))switch(t.type){case"extent":return _(t.center,n,!1);case"polygon":return _(t.centroid,n,!1);case"polyline":return _(Pe(t),n,!0);case"mesh":return _(et(t.vertexSpace,t.spatialReference)??t.extent.center,n,!1);case"multipoint":return}else switch(t.type){case"extent":return _(vt(t),n,!0);case"polygon":return _(xt(t),n,!0);case"polyline":return _(Pe(t),n,!0);case"multipoint":return}}function Pe(t){const n=t.paths[0];if(!n||n.length===0)return null;const o=Ue(n,je(n)/2);return ge(o[0],o[1],o[2],t.spatialReference)}function vt(t){return ge(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function xt(t){const n=t.rings[0];if(!n||n.length===0)return null;const o=Ge(t.rings,!!t.hasZ);return ge(o[0],o[1],o[2],t.spatialReference)}function _(t,n,o){const e=o?t:nt(t);return n&&t?We(t,e,n)?e:null:e}function rn(t,n,o,e=0){if(t){n||(n=Fe());const r=t;let f=.5*r.width*(o-1),s=.5*r.height*(o-1);return r.width<1e-7*r.height?f+=s/20:r.height<1e-7*r.width&&(s+=f/20),Je(n,r.xmin-f-e,r.ymin-s-e,r.xmax+f+e,r.ymax+s+e),n}return null}function sn(t,n,o=null){const e=Ke(Qe);return t!=null&&(e[0]=t[0],e[1]=t[1],e[2]=t[2]),n!=null?e[3]=n:t!=null&&t.length>3&&(e[3]=t[3]),o&&(e[0]*=o,e[1]*=o,e[2]*=o,e[3]*=o),e}function an(t=Ve,n,o,e=1){const r=new Array(3);if(n==null||o==null)r[0]=1,r[1]=1,r[2]=1;else{let f,s=0;for(let a=2;a>=0;a--){const i=t[a],l=i!=null,c=a===0&&!f&&!l,p=o[a];let y;i==="symbol-value"||c?y=p!==0?n[a]/p:1:l&&i!=="proportional"&&isFinite(i)&&(y=p!==0?i/p:1),y!=null&&(r[a]=y,f=y,s=Math.max(s,Math.abs(y)))}for(let a=2;a>=0;a--)r[a]==null?r[a]=f:r[a]===0&&(r[a]=.001*s)}for(let f=2;f>=0;f--)r[f]/=e;return De(r)}function yt(t){return t.isPrimitive!=null}function ln(t){return At(yt(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function At(t){const n=o=>o==null||o>=0;return Array.isArray(t)?t.every(n):n(t)}function cn(t,n,o,e=Ye()){return t&&qe(e,e,-t/180*Math.PI),n&&Ze(e,e,n/180*Math.PI),o&&Xe(e,e,o/180*Math.PI),e}function un(t,n,o){if(o.minDemResolution!=null)return o.minDemResolution;const e=Ee(n),r=He(t)*e,f=Le(t)*e,s=_e(t)*(n.isGeographic?1:e);return r===0&&f===0&&s===0?o.minDemResolutionForPoints:.01*Math.max(r,f,s)}var Oe;(function(t){function n(s,a){const i=s[a],l=s[a+1],c=s[a+2];return Math.sqrt(i*i+l*l+c*c)}function o(s,a){const i=s[a],l=s[a+1],c=s[a+2],p=1/Math.sqrt(i*i+l*l+c*c);s[a]*=p,s[a+1]*=p,s[a+2]*=p}function e(s,a,i){s[a]*=i,s[a+1]*=i,s[a+2]*=i}function r(s,a,i,l,c,p=a){(c=c||s)[p]=s[a]+i[l],c[p+1]=s[a+1]+i[l+1],c[p+2]=s[a+2]+i[l+2]}function f(s,a,i,l,c,p=a){(c=c||s)[p]=s[a]-i[l],c[p+1]=s[a+1]-i[l+1],c[p+2]=s[a+2]-i[l+2]}t.length=n,t.normalize=o,t.scale=e,t.add=r,t.subtract=f})(Oe||(Oe={}));const q=Oe,pe=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Pt=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Mt=[0,0,1,0,1,1,0,1],$t=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Re=new Array(36);for(let t=0;t<6;t++)for(let n=0;n<6;n++)Re[6*t+n]=t;const k=new Array(36);for(let t=0;t<6;t++)k[6*t]=0,k[6*t+1]=1,k[6*t+2]=2,k[6*t+3]=2,k[6*t+4]=3,k[6*t+5]=0;function fn(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(24);for(let e=0;e<8;e++)o[3*e]=pe[e][0]*n[0],o[3*e+1]=pe[e][1]*n[1],o[3*e+2]=pe[e][2]*n[2];return new G(t,[[x.POSITION,new S(o,$t,3,!0)],[x.NORMAL,new S(Pt,Re,3)],[x.UV0,new S(Mt,k,2)]])}const he=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],St=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],bt=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Tt=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function pn(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(18);for(let e=0;e<6;e++)o[3*e]=he[e][0]*n[0],o[3*e+1]=he[e][1]*n[1],o[3*e+2]=he[e][2]*n[2];return new G(t,[[x.POSITION,new S(o,bt,3,!0)],[x.NORMAL,new S(St,Tt,3)]])}const ne=I(-.5,0,-.5),oe=I(.5,0,-.5),re=I(0,0,.5),se=I(0,.5,0),Z=U(),X=U(),J=U(),K=U(),Q=U();E(Z,ne,se),E(X,ne,oe),B(J,Z,X),z(J,J),E(Z,oe,se),E(X,oe,re),B(K,Z,X),z(K,K),E(Z,re,se),E(X,re,ne),B(Q,Z,X),z(Q,Q);const de=[ne,oe,re,se],It=[0,-1,0,J[0],J[1],J[2],K[0],K[1],K[2],Q[0],Q[1],Q[2]],Rt=[0,1,2,3,1,0,3,2,1,3,0,2],Ct=[0,0,0,1,1,1,2,2,2,3,3,3];function hn(t,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(12);for(let e=0;e<4;e++)o[3*e]=de[e][0]*n[0],o[3*e+1]=de[e][1]*n[1],o[3*e+2]=de[e][2]*n[2];return new G(t,[[x.POSITION,new S(o,Rt,3,!0)],[x.NORMAL,new S(It,Ct,3)]])}function dn(t,n,o,e,r={uv:!0}){const f=-Math.PI,s=2*Math.PI,a=-Math.PI/2,i=Math.PI,l=Math.max(3,Math.floor(o)),c=Math.max(2,Math.floor(e)),p=(l+1)*(c+1),y=j(3*p),P=j(3*p),A=j(2*p),m=[];let h=0;for(let O=0;O<=c;O++){const T=[],u=O/c,M=a+u*i,$=Math.cos(M);for(let R=0;R<=l;R++){const H=R/l,g=f+H*s,V=Math.cos(g)*$,b=Math.sin(M),te=-Math.sin(g)*$;y[3*h]=V*n,y[3*h+1]=b*n,y[3*h+2]=te*n,P[3*h]=V,P[3*h+1]=b,P[3*h+2]=te,A[2*h]=H,A[2*h+1]=u,T.push(h),++h}m.push(T)}const d=new Array;for(let O=0;O<c;O++)for(let T=0;T<l;T++){const u=m[O][T],M=m[O][T+1],$=m[O+1][T+1],R=m[O+1][T];O===0?(d.push(u),d.push($),d.push(R)):O===c-1?(d.push(u),d.push(M),d.push($)):(d.push(u),d.push(M),d.push($),d.push($),d.push(R),d.push(u))}const w=[[x.POSITION,new S(y,d,3,!0)],[x.NORMAL,new S(P,d,3,!0)]];return r.uv&&w.push([x.UV0,new S(A,d,2,!0)]),r.offset&&(w[0][0]=x.OFFSET,w.push([x.POSITION,new S(Float64Array.from(r.offset),Ie(d.length),3,!0)])),new G(t,w)}function mn(t,n,o,e){const r=Nt(n,o);return new G(t,r)}function Nt(t,n,o){let e,r;e=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let i=0;i<e.length;i+=3)q.scale(e,i,t/q.length(e,i));let f={};function s(i,l){i>l&&([i,l]=[l,i]);const c=i.toString()+"."+l.toString();if(f[c])return f[c];let p=e.length;return e.length+=3,q.add(e,3*i,e,3*l,e,p),q.scale(e,p,t/q.length(e,p)),p/=3,f[c]=p,p}for(let i=0;i<n;i++){const l=r.length,c=new Array(4*l);for(let p=0;p<l;p+=3){const y=r[p],P=r[p+1],A=r[p+2],m=s(y,P),h=s(P,A),d=s(A,y),w=4*p;c[w]=y,c[w+1]=m,c[w+2]=d,c[w+3]=P,c[w+4]=h,c[w+5]=m,c[w+6]=A,c[w+7]=d,c[w+8]=h,c[w+9]=m,c[w+10]=h,c[w+11]=d}r=c,f={}}const a=Ae(e);for(let i=0;i<a.length;i+=3)q.normalize(a,i);return[[x.POSITION,new S(Ae(e),r,3,!0)],[x.NORMAL,new S(a,r,3,!0)]]}function wn(t,{normal:n,position:o,color:e,rotation:r,size:f,centerOffsetAndDistance:s,uvi:a,featureAttribute:i,objectAndLayerIdColor:l=null}={}){const c=o?xe(o):C(),p=n?xe(n):ke(0,0,1),y=e?[255*e[0],255*e[1],255*e[2],e.length>3?255*e[3]:255]:[255,255,255,255],P=f!=null&&f.length===2?f:[1,1],A=r!=null?[r]:[0],m=Ie(1),h=[[x.POSITION,new S(c,m,3,!0)],[x.NORMAL,new S(p,m,3,!0)],[x.COLOR,new S(y,m,4,!0)],[x.SIZE,new S(P,m,2)],[x.ROTATION,new S(A,m,1,!0)]];if(a&&h.push([x.UVI,new S(a,m,a.length)]),s!=null){const d=[s[0],s[1],s[2],s[3]];h.push([x.CENTEROFFSETANDDISTANCE,new S(d,m,4)])}if(i){const d=[i[0],i[1],i[2],i[3]];h.push([x.FEATUREATTRIBUTE,new S(d,m,4)])}return new G(t,h,null,be.Point,l)}function zt(t,n,o,e,r=!0,f=!0){let s=0;const a=n,i=t;let l=I(0,s,0),c=I(0,s+i,0),p=I(0,-1,0),y=I(0,1,0);e&&(s=i,c=I(0,0,0),l=I(0,s,0),p=I(0,1,0),y=I(0,-1,0));const P=[c,l],A=[p,y],m=o+2,h=Math.sqrt(i*i+a*a);if(e)for(let u=o-1;u>=0;u--){const M=u*(2*Math.PI/o),$=I(Math.cos(M)*a,s,Math.sin(M)*a);P.push($);const R=I(i*Math.cos(M)/h,-a/h,i*Math.sin(M)/h);A.push(R)}else for(let u=0;u<o;u++){const M=u*(2*Math.PI/o),$=I(Math.cos(M)*a,s,Math.sin(M)*a);P.push($);const R=I(i*Math.cos(M)/h,a/h,i*Math.sin(M)/h);A.push(R)}const d=new Array,w=new Array;if(r){for(let u=3;u<P.length;u++)d.push(1),d.push(u-1),d.push(u),w.push(0),w.push(0),w.push(0);d.push(P.length-1),d.push(2),d.push(1),w.push(0),w.push(0),w.push(0)}if(f){for(let u=3;u<P.length;u++)d.push(u),d.push(u-1),d.push(0),w.push(u),w.push(u-1),w.push(1);d.push(0),d.push(2),d.push(P.length-1),w.push(1),w.push(2),w.push(A.length-1)}const O=j(3*m);for(let u=0;u<m;u++)O[3*u]=P[u][0],O[3*u+1]=P[u][1],O[3*u+2]=P[u][2];const T=j(3*m);for(let u=0;u<m;u++)T[3*u]=A[u][0],T[3*u+1]=A[u][1],T[3*u+2]=A[u][2];return[[x.POSITION,new S(O,d,3,!0)],[x.NORMAL,new S(T,w,3,!0)]]}function On(t,n,o,e,r,f=!0,s=!0){return new G(t,zt(n,o,e,r,f,s))}function gn(t,n,o,e,r,f,s){const a=r?ye(r):I(1,0,0),i=f?ye(f):I(0,0,0);s??=!0;const l=U();z(l,a);const c=U();F(c,l,Math.abs(n));const p=U();F(p,c,-.5),D(p,p,i);const y=I(0,1,0);Math.abs(1-Se(l,y))<.2&&ae(y,0,0,1);const P=U();B(P,l,y),z(P,P),B(y,P,l);const A=2*e+(s?2:0),m=e+(s?2:0),h=j(3*A),d=j(3*m),w=j(2*A),O=new Array(3*e*(s?4:2)),T=new Array(3*e*(s?4:2));s&&(h[3*(A-2)]=p[0],h[3*(A-2)+1]=p[1],h[3*(A-2)+2]=p[2],w[2*(A-2)]=0,w[2*(A-2)+1]=0,h[3*(A-1)]=h[3*(A-2)]+c[0],h[3*(A-1)+1]=h[3*(A-2)+1]+c[1],h[3*(A-1)+2]=h[3*(A-2)+2]+c[2],w[2*(A-1)]=1,w[2*(A-1)+1]=1,d[3*(m-2)]=-l[0],d[3*(m-2)+1]=-l[1],d[3*(m-2)+2]=-l[2],d[3*(m-1)]=l[0],d[3*(m-1)+1]=l[1],d[3*(m-1)+2]=l[2]);const u=(g,V,b)=>{O[g]=V,T[g]=b};let M=0;const $=U(),R=U();for(let g=0;g<e;g++){const V=g*(2*Math.PI/e);F($,y,Math.sin(V)),F(R,P,Math.cos(V)),D($,$,R),d[3*g]=$[0],d[3*g+1]=$[1],d[3*g+2]=$[2],F($,$,o),D($,$,p),h[3*g]=$[0],h[3*g+1]=$[1],h[3*g+2]=$[2],w[2*g]=g/e,w[2*g+1]=0,h[3*(g+e)]=h[3*g]+c[0],h[3*(g+e)+1]=h[3*g+1]+c[1],h[3*(g+e)+2]=h[3*g+2]+c[2],w[2*(g+e)]=g/e,w[2*g+1]=1;const b=(g+1)%e;u(M++,g,g),u(M++,g+e,g),u(M++,b,b),u(M++,b,b),u(M++,g+e,g),u(M++,b+e,b)}if(s){for(let g=0;g<e;g++){const V=(g+1)%e;u(M++,A-2,m-2),u(M++,g,m-2),u(M++,V,m-2)}for(let g=0;g<e;g++){const V=(g+1)%e;u(M++,g+e,m-1),u(M++,A-1,m-1),u(M++,V+e,m-1)}}const H=[[x.POSITION,new S(h,O,3,!0)],[x.NORMAL,new S(d,T,3,!0)],[x.UV0,new S(w,O,2,!0)]];return new G(t,H)}function vn(t,n,o,e,r,f){e=e||10,r=r==null||r,ee(n.length>1);const s=[[0,0,0]],a=[],i=[];for(let l=0;l<e;l++){a.push([0,-l-1,-(l+1)%e-1]);const c=l/e*2*Math.PI;i.push([Math.cos(c)*o,Math.sin(c)*o])}return Vt(t,i,n,s,a,r,f)}function Vt(t,n,o,e,r,f,s=I(0,0,0)){const a=n.length,i=j(o.length*a*3+(6*e.length||0)),l=j(o.length*a*3+(e?6:0)),c=new Array,p=new Array;let y=0,P=0;const A=C(),m=C(),h=C(),d=C(),w=C(),O=C(),T=C(),u=C(),M=C(),$=C(),R=C(),H=C(),g=C(),V=mt();ae(M,0,1,0),E(m,o[1],o[0]),z(m,m),f?(D(u,o[0],s),z(h,u)):ae(h,0,0,1),Me(m,h,M,M,w,h,$e),W(d,h),W(H,w);for(let v=0;v<e.length;v++)F(O,w,e[v][0]),F(u,h,e[v][2]),D(O,O,u),D(O,O,o[0]),i[y++]=O[0],i[y++]=O[1],i[y++]=O[2];l[P++]=-m[0],l[P++]=-m[1],l[P++]=-m[2];for(let v=0;v<r.length;v++)c.push(r[v][0]>0?r[v][0]:-r[v][0]-1+e.length),c.push(r[v][1]>0?r[v][1]:-r[v][1]-1+e.length),c.push(r[v][2]>0?r[v][2]:-r[v][2]-1+e.length),p.push(0),p.push(0),p.push(0);let b=e.length;const te=e.length-1;for(let v=0;v<o.length;v++){let ve=!1;v>0&&(W(A,m),v<o.length-1?(E(m,o[v+1],o[v]),z(m,m)):ve=!0,D($,A,m),z($,$),D(R,o[v-1],d),wt(o[v],$,V),Ot(V,gt(R,A),u)?(E(u,u,o[v]),z(h,u),B(w,$,h),z(w,w)):Me($,d,H,M,w,h,$e),W(d,h),W(H,w)),f&&(D(u,o[v],s),z(g,u));for(let L=0;L<a;L++)if(F(O,w,n[L][0]),F(u,h,n[L][1]),D(O,O,u),z(T,O),l[P++]=T[0],l[P++]=T[1],l[P++]=T[2],D(O,O,o[v]),i[y++]=O[0],i[y++]=O[1],i[y++]=O[2],!ve){const ue=(L+1)%a;c.push(b+L),c.push(b+a+L),c.push(b+ue),c.push(b+ue),c.push(b+a+L),c.push(b+a+ue);for(let fe=0;fe<6;fe++){const ze=c.length-6;p.push(c[ze+fe]-te)}}b+=a}const Ce=o[o.length-1];for(let v=0;v<e.length;v++)F(O,w,e[v][0]),F(u,h,e[v][1]),D(O,O,u),D(O,O,Ce),i[y++]=O[0],i[y++]=O[1],i[y++]=O[2];const ie=P/3;l[P++]=m[0],l[P++]=m[1],l[P++]=m[2];const ce=b-a;for(let v=0;v<r.length;v++)c.push(r[v][0]>=0?b+r[v][0]:-r[v][0]-1+ce),c.push(r[v][2]>=0?b+r[v][2]:-r[v][2]-1+ce),c.push(r[v][1]>=0?b+r[v][1]:-r[v][1]-1+ce),p.push(ie),p.push(ie),p.push(ie);const Ne=[[x.POSITION,new S(i,c,3,!0)],[x.NORMAL,new S(l,p,3,!0)]];return new G(t,Ne)}function xn(t,n,o,e){ee(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),ee(n[0].length===3,"createPolylineGeometry(): malformed vertex"),ee(o==null||o.length===n.length,"createPolylineGeometry: need same number of points and normals"),ee(o==null||o[0].length===3,"createPolylineGeometry(): malformed normal");const r=Be(3*n.length),f=new Array(2*(n.length-1));let s=0,a=0;for(let l=0;l<n.length;l++){for(let c=0;c<3;c++)r[s++]=n[l][c];l>0&&(f[a++]=l-1,f[a++]=l)}const i=[[x.POSITION,new S(r,f,3,!0)]];if(o){const l=j(3*o.length);let c=0;for(let p=0;p<n.length;p++)for(let y=0;y<3;y++)l[c++]=o[p][y];i.push([x.NORMAL,new S(l,f,3,!0)])}return e&&i.push([x.COLOR,new S(e,dt(e.length/4),4)]),new G(t,i,null,be.Line)}function yn(t,n,o,e,r,f=0){const s=new Array(18),a=[[-o,f,r/2],[e,f,r/2],[0,n+f,r/2],[-o,f,-r/2],[e,f,-r/2],[0,n+f,-r/2]],i=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let l=0;l<6;l++)s[3*l]=a[l][0],s[3*l+1]=a[l][1],s[3*l+2]=a[l][2];return new G(t,[[x.POSITION,new S(s,i,3,!0)]])}function An(t,n){const o=t.getMutableAttribute(x.POSITION).data;for(let e=0;e<o.length;e+=3){const r=o[e],f=o[e+1],s=o[e+2];ae(Y,r,f,s),ot(Y,Y,n),o[e]=Y[0],o[e+1]=Y[1],o[e+2]=Y[2]}}function Pn(t,n=t){const o=t.attributes,e=o.get(x.POSITION).data,r=o.get(x.NORMAL).data;if(r){const f=n.getMutableAttribute(x.NORMAL).data;for(let s=0;s<r.length;s+=3){const a=r[s+1];f[s+1]=-r[s+2],f[s+2]=a}}if(e){const f=n.getMutableAttribute(x.POSITION).data;for(let s=0;s<e.length;s+=3){const a=e[s+1];f[s+1]=-e[s+2],f[s+2]=a}}}function me(t,n,o,e,r){return!(Math.abs(Se(n,t))>r)&&(B(o,t,n),z(o,o),B(e,o,t),z(e,e),!0)}function Me(t,n,o,e,r,f,s){return me(t,n,r,f,s)||me(t,o,r,f,s)||me(t,e,r,f,s)}const $e=.99619469809,Y=C(),Dt=.5;function Mn(t,n){t.include(rt),t.attributes.add(x.POSITION,"vec3"),t.attributes.add(x.NORMAL,"vec3"),t.attributes.add(x.CENTEROFFSETANDDISTANCE,"vec4");const o=t.vertex;st(o,n),at(o,n),o.uniforms.add(new Te("viewport",e=>e.camera.fullViewport),new lt("polygonOffset",e=>e.shaderPolygonOffset),new we("cameraGroundRelative",e=>e.camera.aboveGround?1:-1)),n.hasVerticalOffset&&it(o),o.code.add(N`struct ProjectHUDAux {
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
  `),n.draped&&!n.hasVerticalOffset||ct(o),n.draped||(o.uniforms.add(new we("perDistancePixelRatio",e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2))),o.code.add(N`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${N.float(Dt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),n.screenCenterOffsetUnitsEnabled&&ut(o),n.hasScreenSizePerspective&&ft(o),o.code.add(N`
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
  `)}function Ft(t){t.uniforms.add(new pt("alignPixelEnabled",n=>n.alignPixelEnabled)),t.code.add(N`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
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
}`)}var le;(function(t){t[t.Occluded=0]="Occluded",t[t.NotOccluded=1]="NotOccluded",t[t.Both=2]="Both",t[t.COUNT=3]="COUNT"})(le||(le={}));function $n(t){t.vertex.uniforms.add(new we("renderTransparentlyOccludedHUD",n=>n.hudRenderStyle===le.Occluded?1:n.hudRenderStyle===le.NotOccluded?0:.75),new Te("viewport",n=>n.camera.fullViewport),new ht("hudVisibilityTexture",n=>n.hudVisibility?.getTexture())),t.vertex.include(Ft),t.vertex.code.add(N`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function Sn(t){return t.type==="point"}export{an as B,fn as C,un as E,ln as I,Me as M,An as O,rn as S,sn as U,At as Z,le as a,nn as b,zt as c,Dt as d,on as e,pn as f,hn as g,gn as h,On as i,wn as j,cn as k,Ft as l,Pn as m,$n as n,dn as o,yn as p,vn as q,Nt as r,mn as s,Sn as t,Mn as u,Vt as v,xn as w};
