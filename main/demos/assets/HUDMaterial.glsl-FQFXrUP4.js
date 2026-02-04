import{g8 as kt,c_ as Nt,al as wt,ox as Wt,nH as Xt,kC as Yt,c$ as bt,c5 as Kt,oy as Qt,oz as Jt,oA as Zt,gX as eo,aB as T,aJ as Ze,cU as yt,ja as to,hX as We,aq as oo,_ as E,gs as Pt,cV as $t,aK as io,et as ao,ck as no}from"./main-CtmwM019.js";import{x as so,l as ro,m as lo,h as St}from"./mat4-Ba1tXzxc.js";import{m as co,s as uo}from"./vec42-DZ0sp4MX.js";import{t as fo,s as po,a as ho,r as go,u as et,n as Ve,e as tt}from"./vec4f64-DPb6J-GU.js";import{$ as vo}from"./projectionUtils-DKBF6_Ma.js";import{u as mo}from"./meshVertexSpaceUtils-CeN7ZS2W.js";import{t as Xe}from"./projectVectorToVector-PMDI3BQJ.js";import{o as xo,x as wo}from"./hydratedFeatures-BBluDIY8.js";import{o as oe,c as W,A as L,s as k,g as G,u as q,_ as ie,E as re,P as Ye,r as be,p as zt,R as bo,N as yo}from"./vec32-gK3TWme0.js";import{r as I,t as ot,n as X}from"./vec3f32-WCVSSNPR.js";import{aE as Po,n as Y,m as K,aF as it,aG as Ot,D as $o,ax as So,aq as Ke,r as Be,a6 as Me,aH as zo,af as Oo,aI as Ct,aJ as At,as as Co,K as Ao,ap as Mt,i as Mo,aK as Do,G as Vo,H as jo,M as _o,al as at,L as Te,b as nt,aL as To,a2 as te,ai as Fo,a as Ro,j as Eo,k as Uo,W as Ho,V as Io,X as Dt,Y as Bo,x as U,A as Go,aM as Fe,t as Lo,aN as qo,aO as ko,aP as No,aB as Wo,aQ as Xo,aR as Yo,aS as Ko,aT as st,aU as Qo,aV as rt,aW as lt,aX as Jo,aD as Zo}from"./OutputColorHighlightOID.glsl-DcUKTccw.js";import{A as ei,U as Vt}from"./Indices-X2rQqBWt.js";import{j as ti,U as oi,K as ii}from"./plane-Dey3oqKO.js";import{k as ai}from"./sphere-DCy-S0e6.js";import{n as Qe,r as jt}from"./vec2f64-Cgb6qxNH.js";import"./projectBuffer-C2_ZDxbj.js";import{t as M}from"./orientedBoundingBox-inghVrgq.js";import{s as _t,g as ni}from"./BufferView-CESi4vtr.js";import{_ as si}from"./preload-helper-DMGCcr4D.js";import{Q as Tt,t as ri}from"./InterleavedLayout-JnvvHTvL.js";import{_ as ct}from"./enums-DQOO6RKE.js";import{T as li,d as ci,c as ui}from"./renderState-CKc66y4x.js";import{t as fi}from"./VertexAttributeLocations-BfZbt_DV.js";import{t as $,n as H}from"./glsl-B5bJgrnA.js";import"./lengthUtils-CPuXsfCi.js";import{s as pi}from"./ShaderBuilder-DMCNkLu1.js";function Oa(o,e){if(o.type==="point")return ee(o,e,!1);if(xo(o))switch(o.type){case"extent":return ee(o.center,e,!1);case"polygon":return ee(ft(o),e,!1);case"polyline":return ee(ut(o),e,!0);case"mesh":return ee(mo(o.vertexSpace,o.spatialReference)??o.extent.center,e,!1);case"multipoint":return}else switch(o.type){case"extent":return ee(di(o),e,!0);case"polygon":return ee(ft(o),e,!0);case"polyline":return ee(ut(o),e,!0);case"multipoint":return}}function ut(o){const e=o.paths[0];if(!e||e.length===0)return null;const i=Wt(e,Xt(e)/2);return Xe(i[0],i[1],i[2],o.spatialReference)}function di(o){return Xe(.5*(o.xmax+o.xmin),.5*(o.ymax+o.ymin),o.zmin!=null&&o.zmax!=null&&isFinite(o.zmin)&&isFinite(o.zmax)?.5*(o.zmax+o.zmin):void 0,o.spatialReference)}function ft(o){const e=o.rings[0];if(!e||e.length===0)return null;const i=Yt(o.rings,!!o.hasZ);return Xe(i[0],i[1],i[2],o.spatialReference)}function ee(o,e,i){const t=i?o:wo(o);return e&&o?vo(o,t,e)?t:null:t}function Ca(o,e,i,t=0){if(o){e||(e=wt());const a=o;let s=.5*a.width*(i-1),n=.5*a.height*(i-1);return a.width<1e-7*a.height?s+=n/20:a.height<1e-7*a.width&&(n+=s/20),uo(e,a.xmin-s-t,a.ymin-n-t,a.xmax+s+t,a.ymax+n+t),e}return null}function Aa(o,e,i=null){const t=fo(po);return o!=null&&(t[0]=o[0],t[1]=o[1],t[2]=o[2],o.length>3&&(t[3]=o[3])),e!=null&&(t[3]=e),i&&co(t,t,i),t}function Ma(o=kt,e,i,t=1){const a=new Array(3);if(e==null||i==null)a[0]=1,a[1]=1,a[2]=1;else{let s,n=0;for(let r=2;r>=0;r--){const l=o[r],c=l!=null,u=r===0&&!s&&!c,p=i[r];let h;l==="symbol-value"||u?h=p!==0?e[r]/p:1:c&&l!=="proportional"&&isFinite(l)&&(h=p!==0?l/p:1),h!=null&&(a[r]=h,s=h,n=Math.max(n,Math.abs(h)))}for(let r=2;r>=0;r--)a[r]==null?a[r]=s:a[r]===0&&(a[r]=.001*n)}for(let s=2;s>=0;s--)a[s]/=t;return Nt(a)}function hi(o){return o.isPrimitive!=null}function Da(o){return gi(hi(o)?[o.width,o.depth,o.height]:o)?null:"Symbol sizes may not be negative values"}function gi(o){const e=i=>i==null||i>=0;return Array.isArray(o)?o.every(e):e(o)}function Va(o,e,i,t=bt()){return o&&so(t,t,-o/180*Math.PI),e&&ro(t,t,e/180*Math.PI),i&&lo(t,t,i/180*Math.PI),t}function ja(o,e,i){if(i.minDemResolution!=null)return i.minDemResolution;const t=Kt(e),a=Qt(o)*t,s=Jt(o)*t,n=Zt(o)*(e.isGeographic?1:t);return a===0&&s===0&&n===0?i.minDemResolutionForPoints:.01*Math.max(a,s,n)}function pt(o,e){const i=o[e],t=o[e+1],a=o[e+2];return Math.sqrt(i*i+t*t+a*a)}function vi(o,e){const i=o[e],t=o[e+1],a=o[e+2],s=1/Math.sqrt(i*i+t*t+a*a);o[e]*=s,o[e+1]*=s,o[e+2]*=s}function dt(o,e,i){o[e]*=i,o[e+1]*=i,o[e+2]*=i}function mi(o,e,i,t,a,s=e){(a=a||o)[s]=o[e]+i[t],a[s+1]=o[e+1]+i[t+1],a[s+2]=o[e+2]+i[t+2]}function xi(){return ht??=wi(),ht}function wi(){const i=new M([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new Po([["uv0",i]])}let ht=null;const Re=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],bi=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],yi=[0,0,1,0,1,1,0,1],Pi=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ft=new Array(36);for(let o=0;o<6;o++)for(let e=0;e<6;e++)Ft[6*o+e]=o;const ne=new Array(36);for(let o=0;o<6;o++)ne[6*o]=0,ne[6*o+1]=1,ne[6*o+2]=2,ne[6*o+3]=2,ne[6*o+4]=3,ne[6*o+5]=0;function _a(o,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(24);for(let t=0;t<8;t++)i[3*t]=Re[t][0]*e[0],i[3*t+1]=Re[t][1]*e[1],i[3*t+2]=Re[t][2]*e[2];return new K(o,[["position",new M(i,Pi,3,!0)],["normal",new M(bi,Ft,3)],["uv0",new M(yi,ne,2)]])}const Ee=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],$i=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Si=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],zi=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Ta(o,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(18);for(let t=0;t<6;t++)i[3*t]=Ee[t][0]*e[0],i[3*t+1]=Ee[t][1]*e[1],i[3*t+2]=Ee[t][2]*e[2];return new K(o,[["position",new M(i,Si,3,!0)],["normal",new M($i,zi,3)]])}const $e=I(-.5,0,-.5),Se=I(.5,0,-.5),ze=I(0,0,.5),Oe=I(0,.5,0),ce=X(),ue=X(),pe=X(),de=X(),he=X();W(ce,$e,Oe),W(ue,$e,Se),ie(pe,ce,ue),L(pe,pe),W(ce,Se,Oe),W(ue,Se,ze),ie(de,ce,ue),L(de,de),W(ce,ze,Oe),W(ue,ze,$e),ie(he,ce,ue),L(he,he);const Ue=[$e,Se,ze,Oe],Oi=[0,-1,0,pe[0],pe[1],pe[2],de[0],de[1],de[2],he[0],he[1],he[2]],Ci=[0,1,2,3,1,0,3,2,1,3,0,2],Ai=[0,0,0,1,1,1,2,2,2,3,3,3];function Fa(o,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(12);for(let t=0;t<4;t++)i[3*t]=Ue[t][0]*e[0],i[3*t+1]=Ue[t][1]*e[1],i[3*t+2]=Ue[t][2]*e[2];return new K(o,[["position",new M(i,Ci,3,!0)],["normal",new M(Oi,Ai,3)]])}function Ra(o,e,i,t,a={uv:!0}){const s=-Math.PI,n=2*Math.PI,r=-Math.PI/2,l=Math.PI,c=Math.max(3,Math.floor(i)),u=Math.max(2,Math.floor(t)),p=(c+1)*(u+1),h=Y(3*p),b=Y(3*p),y=Y(2*p),m=[];let d=0;for(let x=0;x<=u;x++){const C=[],f=x/u,z=r+f*l,O=Math.cos(z);for(let P=0;P<=c;P++){const B=P/c,w=s+B*n,j=Math.cos(w)*O,V=Math.sin(z),Q=-Math.sin(w)*O;h[3*d]=j*e,h[3*d+1]=V*e,h[3*d+2]=Q*e,b[3*d]=j,b[3*d+1]=V,b[3*d+2]=Q,y[2*d]=B,y[2*d+1]=f,C.push(d),++d}m.push(C)}const g=new Array;for(let x=0;x<u;x++)for(let C=0;C<c;C++){const f=m[x][C],z=m[x][C+1],O=m[x+1][C+1],P=m[x+1][C];x===0?(g.push(f),g.push(O),g.push(P)):x===u-1?(g.push(f),g.push(z),g.push(O)):(g.push(f),g.push(z),g.push(O),g.push(O),g.push(P),g.push(f))}const v=[["position",new M(h,g,3,!0)],["normal",new M(b,g,3,!0)]];return a.uv&&v.push(["uv0",new M(y,g,2,!0)]),a.offset&&(v[0][0]="offset",v.push(["position",new M(Float64Array.from(a.offset),Vt(g.length),3,!0)])),new K(o,v)}function Ea(o,e,i,t){const a=Mi(e,i);return new K(o,a)}function Mi(o,e,i){let t,a;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let l=0;l<t.length;l+=3)dt(t,l,o/pt(t,l));let s={};function n(l,c){l>c&&([l,c]=[c,l]);const u=l.toString()+"."+c.toString();if(s[u])return s[u];let p=t.length;return t.length+=3,mi(t,3*l,t,3*c,t,p),dt(t,p,o/pt(t,p)),p/=3,s[u]=p,p}for(let l=0;l<e;l++){const c=a.length,u=new Array(4*c);for(let p=0;p<c;p+=3){const h=a[p],b=a[p+1],y=a[p+2],m=n(h,b),d=n(b,y),g=n(y,h),v=4*p;u[v]=h,u[v+1]=m,u[v+2]=g,u[v+3]=b,u[v+4]=d,u[v+5]=m,u[v+6]=y,u[v+7]=g,u[v+8]=d,u[v+9]=m,u[v+10]=d,u[v+11]=g}a=u,s={}}const r=it(t);for(let l=0;l<r.length;l+=3)vi(r,l);return[["position",new M(it(t),a,3,!0)],["normal",new M(r,a,3,!0)]]}function Ua(o,{normal:e,position:i,color:t,rotation:a,size:s,centerOffsetAndDistance:n,uvi:r,featureAttribute:l,olidColor:c=null}={}){const u=i?Ze(i):T(),p=e?Ze(e):yt(0,0,1),h=t?[t[0],t[1],t[2],t.length>3?t[3]:255]:[255,255,255,255],b=s!=null&&s.length===2?s:[1,1],y=a!=null?[a]:[0],m=Vt(1),d=[["position",new M(u,m,3,!0)],["normal",new M(p,m,3,!0)],["color",new M(h,m,4,!0)],["size",new M(b,m,2)],["rotation",new M(y,m,1,!0)]];if(r&&d.push(["uvi",new M(r,m,r.length)]),n!=null){const g=[n[0],n[1],n[2],n[3]];d.push(["centerOffsetAndDistance",new M(g,m,4)])}if(l){const g=[l[0],l[1],l[2],l[3]];d.push(["featureAttribute",new M(g,m,4)])}return new K(o,d,null,1,c,void 0,xi())}function Di(o,e,i,t,a=!0,s=!0){let n=0;const r=e,l=o;let c=I(0,n,0),u=I(0,n+l,0),p=I(0,-1,0),h=I(0,1,0);t&&(n=l,u=I(0,0,0),c=I(0,n,0),p=I(0,1,0),h=I(0,-1,0));const b=[u,c],y=[p,h],m=i+2,d=Math.sqrt(l*l+r*r);if(t)for(let f=i-1;f>=0;f--){const z=f*(2*Math.PI/i),O=I(Math.cos(z)*r,n,Math.sin(z)*r);b.push(O);const P=I(l*Math.cos(z)/d,-r/d,l*Math.sin(z)/d);y.push(P)}else for(let f=0;f<i;f++){const z=f*(2*Math.PI/i),O=I(Math.cos(z)*r,n,Math.sin(z)*r);b.push(O);const P=I(l*Math.cos(z)/d,r/d,l*Math.sin(z)/d);y.push(P)}const g=new Array,v=new Array;if(a){for(let f=3;f<b.length;f++)g.push(1),g.push(f-1),g.push(f),v.push(0),v.push(0),v.push(0);g.push(b.length-1),g.push(2),g.push(1),v.push(0),v.push(0),v.push(0)}if(s){for(let f=3;f<b.length;f++)g.push(f),g.push(f-1),g.push(0),v.push(f),v.push(f-1),v.push(1);g.push(0),g.push(2),g.push(b.length-1),v.push(1),v.push(2),v.push(y.length-1)}const x=Y(3*m);for(let f=0;f<m;f++)x[3*f]=b[f][0],x[3*f+1]=b[f][1],x[3*f+2]=b[f][2];const C=Y(3*m);for(let f=0;f<m;f++)C[3*f]=y[f][0],C[3*f+1]=y[f][1],C[3*f+2]=y[f][2];return[["position",new M(x,g,3,!0)],["normal",new M(C,v,3,!0)]]}function Ha(o,e,i,t,a,s=!0,n=!0){return new K(o,Di(e,i,t,a,s,n))}function Ia(o,e,i,t,a,s,n){const r=a?ot(a):I(1,0,0),l=s?ot(s):I(0,0,0);n??=!0;const c=X();L(c,r);const u=X();G(u,c,Math.abs(e));const p=X();G(p,u,-.5),q(p,p,l);const h=I(0,1,0);Math.abs(1-Ye(c,h))<.2&&oe(h,0,0,1);const b=X();ie(b,c,h),L(b,b),ie(h,b,c);const y=2*t+(n?2:0),m=t+(n?2:0),d=Y(3*y),g=Y(3*m),v=Y(2*y),x=new Array(3*t*(n?4:2)),C=new Array(3*t*(n?4:2));n&&(d[3*(y-2)]=p[0],d[3*(y-2)+1]=p[1],d[3*(y-2)+2]=p[2],v[2*(y-2)]=0,v[2*(y-2)+1]=0,d[3*(y-1)]=d[3*(y-2)]+u[0],d[3*(y-1)+1]=d[3*(y-2)+1]+u[1],d[3*(y-1)+2]=d[3*(y-2)+2]+u[2],v[2*(y-1)]=1,v[2*(y-1)+1]=1,g[3*(m-2)]=-c[0],g[3*(m-2)+1]=-c[1],g[3*(m-2)+2]=-c[2],g[3*(m-1)]=c[0],g[3*(m-1)+1]=c[1],g[3*(m-1)+2]=c[2]);const f=(w,j,V)=>{x[w]=j,C[w]=V};let z=0;const O=X(),P=X();for(let w=0;w<t;w++){const j=w*(2*Math.PI/t);G(O,h,Math.sin(j)),G(P,b,Math.cos(j)),q(O,O,P),g[3*w]=O[0],g[3*w+1]=O[1],g[3*w+2]=O[2],G(O,O,i),q(O,O,p),d[3*w]=O[0],d[3*w+1]=O[1],d[3*w+2]=O[2],v[2*w]=w/t,v[2*w+1]=0,d[3*(w+t)]=d[3*w]+u[0],d[3*(w+t)+1]=d[3*w+1]+u[1],d[3*(w+t)+2]=d[3*w+2]+u[2],v[2*(w+t)]=w/t,v[2*w+1]=1;const V=(w+1)%t;f(z++,w,w),f(z++,w+t,w),f(z++,V,V),f(z++,V,V),f(z++,w+t,w),f(z++,V+t,V)}if(n){for(let w=0;w<t;w++){const j=(w+1)%t;f(z++,y-2,m-2),f(z++,w,m-2),f(z++,j,m-2)}for(let w=0;w<t;w++){const j=(w+1)%t;f(z++,w+t,m-1),f(z++,y-1,m-1),f(z++,j+t,m-1)}}const B=[["position",new M(d,x,3,!0)],["normal",new M(g,C,3,!0)],["uv0",new M(v,x,2,!0)]];return new K(o,B)}function Ba(o,e,i,t,a,s){t=t||10,a=a==null||a,_t(e.length>1);const n=[[0,0,0]],r=[],l=[];for(let c=0;c<t;c++){r.push([0,-c-1,-(c+1)%t-1]);const u=c/t*2*Math.PI;l.push([Math.cos(u)*i,Math.sin(u)*i])}return Vi(o,l,e,n,r,a,s)}function Vi(o,e,i,t,a,s,n=I(0,0,0)){const r=e.length,l=Y(i.length*r*3+(6*t.length||0)),c=Y(i.length*r*3+(t?6:0)),u=new Array,p=new Array;let h=0,b=0;const y=T(),m=T(),d=T(),g=T(),v=T(),x=T(),C=T(),f=T(),z=T(),O=T(),P=T(),B=T(),w=T(),j=ti();oe(z,0,1,0),W(m,i[1],i[0]),L(m,m),s?(q(f,i[0],n),L(d,f)):oe(d,0,0,1),gt(m,d,z,z,v,d,vt),k(g,d),k(B,v);for(let S=0;S<t.length;S++)G(x,v,t[S][0]),G(f,d,t[S][2]),q(x,x,f),q(x,x,i[0]),l[h++]=x[0],l[h++]=x[1],l[h++]=x[2];c[b++]=-m[0],c[b++]=-m[1],c[b++]=-m[2];for(let S=0;S<a.length;S++)u.push(a[S][0]>0?a[S][0]:-a[S][0]-1+t.length),u.push(a[S][1]>0?a[S][1]:-a[S][1]-1+t.length),u.push(a[S][2]>0?a[S][2]:-a[S][2]-1+t.length),p.push(0),p.push(0),p.push(0);let V=t.length;const Q=t.length-1;for(let S=0;S<i.length;S++){let me=!1;S>0&&(k(y,m),S<i.length-1?(W(m,i[S+1],i[S]),L(m,m)):me=!0,q(O,y,m),L(O,O),q(P,i[S-1],g),oi(i[S],O,j),ii(j,ai(P,y),f)?(W(f,f,i[S]),L(d,f),ie(v,O,d),L(v,v)):gt(O,g,B,z,v,d,vt),k(g,d),k(B,v)),s&&(q(f,i[S],n),L(w,f));for(let Z=0;Z<r;Z++)if(G(x,v,e[Z][0]),G(f,d,e[Z][1]),q(x,x,f),L(C,x),c[b++]=C[0],c[b++]=C[1],c[b++]=C[2],q(x,x,i[S]),l[h++]=x[0],l[h++]=x[1],l[h++]=x[2],!me){const je=(Z+1)%r;u.push(V+Z),u.push(V+r+Z),u.push(V+je),u.push(V+je),u.push(V+r+Z),u.push(V+r+je);for(let _e=0;_e<6;_e++){const qt=u.length-6;p.push(u[qt+_e]-Q)}}V+=r}const le=i[i.length-1];for(let S=0;S<t.length;S++)G(x,v,t[S][0]),G(f,d,t[S][1]),q(x,x,f),q(x,x,le),l[h++]=x[0],l[h++]=x[1],l[h++]=x[2];const J=b/3;c[b++]=m[0],c[b++]=m[1],c[b++]=m[2];const N=V-r;for(let S=0;S<a.length;S++)u.push(a[S][0]>=0?V+a[S][0]:-a[S][0]-1+N),u.push(a[S][2]>=0?V+a[S][2]:-a[S][2]-1+N),u.push(a[S][1]>=0?V+a[S][1]:-a[S][1]-1+N),p.push(J),p.push(J),p.push(J);const ae=[["position",new M(l,u,3,!0)],["normal",new M(c,p,3,!0)]];return new K(o,ae)}function Ga(o,e,i,t,a){const s=eo(3*e.length),n=new Array(2*(e.length-1));let r=0,l=0;for(let u=0;u<e.length;u++){for(let p=0;p<3;p++)s[r++]=e[u][p];u>0&&(n[l++]=u-1,n[l++]=u)}const c=[["position",new M(s,n,3,!0)]];if(i&&i.length===e.length&&i[0].length===3){const u=Y(3*i.length);let p=0;for(let h=0;h<e.length;h++)for(let b=0;b<3;b++)u[p++]=i[h][b];c.push(["normal",new M(u,n,3,!0)])}return t&&c.push(["color",new M(t,ei(t.length/4),4)]),new K(o,c,null,2)}function La(o,e,i,t,a,s=0){const n=new Array(18),r=[[-i,s,a/2],[t,s,a/2],[0,e+s,a/2],[-i,s,-a/2],[t,s,-a/2],[0,e+s,-a/2]],l=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let c=0;c<6;c++)n[3*c]=r[c][0],n[3*c+1]=r[c][1],n[3*c+2]=r[c][2];return new K(o,[["position",new M(n,l,3,!0)]])}function qa(o,e){const i=o.getMutableAttribute("position").data;for(let t=0;t<i.length;t+=3){const a=i[t],s=i[t+1],n=i[t+2];oe(fe,a,s,n),re(fe,fe,e),i[t]=fe[0],i[t+1]=fe[1],i[t+2]=fe[2]}}function ka(o,e=o){const i=o.attributes,t=i.get("position").data,a=i.get("normal").data;if(a){const s=e.getMutableAttribute("normal").data;for(let n=0;n<a.length;n+=3){const r=a[n+1];s[n+1]=-a[n+2],s[n+2]=r}}if(t){const s=e.getMutableAttribute("position").data;for(let n=0;n<t.length;n+=3){const r=t[n+1];s[n+1]=-t[n+2],s[n+2]=r}}}function He(o,e,i,t,a){return!(Math.abs(Ye(e,o))>a)&&(ie(i,o,e),L(i,i),ie(t,i,o),L(t,t),!0)}function gt(o,e,i,t,a,s,n){return He(o,e,a,s,n)||He(o,i,a,s,n)||He(o,t,a,s,n)}const vt=.99619469809,fe=T();function ji(o){return o instanceof Float32Array&&o.length>=16}function _i(o){return Array.isArray(o)&&o.length>=16}function Ti(o){return ji(o)||_i(o)}const Rt=.5;function Fi(o,e){o.include(Ot),o.attributes.add("position","vec3"),o.attributes.add("normal","vec3"),o.attributes.add("centerOffsetAndDistance","vec4");const i=o.vertex;$o(i,e),So(i,e),i.uniforms.add(new Ke("viewport",t=>t.camera.fullViewport),new Be("polygonOffset",t=>t.shaderPolygonOffset),new Me("cameraGroundRelative",t=>t.camera.aboveGround?1:-1)),e.hasVerticalOffset&&zo(i),i.code.add($`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),i.code.add($`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?$.float(0):$`sign(pointGroundDistance)`};
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
  `),e.draped&&!e.hasVerticalOffset||Oo(i),e.draped||(i.uniforms.add(new Me("perDistancePixelRatio",t=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2))),i.code.add($`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${$.float(Rt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&Ct(i),e.hasScreenSizePerspective&&At(i),i.code.add($`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?$`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":$`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Je(o){o.uniforms.add(new Co("alignPixelEnabled",e=>e.alignPixelEnabled)),o.code.add($`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),o.code.add($`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function Ri(o,e){const{vertex:i,fragment:t}=o;o.include(Ao,e),i.include(Je),i.main.add($`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),t.main.add($`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function Ei(o){o.vertex.uniforms.add(new Me("renderTransparentlyOccludedHUD",e=>e.hudRenderStyle===0?1:e.hudRenderStyle===1?0:.75),new Ke("viewport",e=>e.camera.fullViewport),new Mt("hudVisibilityTexture",e=>e.hudVisibility?.getTexture())),o.vertex.include(Je),o.vertex.code.add($`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}class Ui extends Mo{constructor(e,i,t){super(e,"vec4",2,(a,s,n)=>a.setUniform4fv(e,i(s,n),t))}}function Et(o){const e=new pi,{signedDistanceFieldEnabled:i,occlusionTestEnabled:t,horizonCullingEnabled:a,pixelSnappingEnabled:s,hasScreenSizePerspective:n,debugDrawLabelBorder:r,hasVVSize:l,hasVVColor:c,hasRotation:u,occludedFragmentFade:p,sampleSignedDistanceFieldTexelCenter:h}=o;e.include(Fi,o),e.vertex.include(Do,o);const{occlusionPass:b,output:y,oitPass:m}=o;if(b)return e.include(Ri,o),e;const{vertex:d,fragment:g}=e;e.include(Ot),e.include(Vo,o),e.include(jo,o),t&&e.include(Ei),g.include(_o),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const v=y===9,x=v&&t;x&&e.varyings.add("voccluded","float"),d.uniforms.add(new Ke("viewport",P=>P.camera.fullViewport),new at("screenOffset",(P,B)=>We(Ce,2*P.screenOffset[0]*B.camera.pixelRatio,2*P.screenOffset[1]*B.camera.pixelRatio)),new at("anchorPosition",P=>ve(P)),new Te("materialColor",P=>P.color),new Be("materialRotation",P=>P.rotation),new nt("tex",P=>P.texture)),Ct(d),i&&(d.uniforms.add(new Te("outlineColor",P=>P.outlineColor)),g.uniforms.add(new Te("outlineColor",P=>mt(P)?P.outlineColor:ho),new Be("outlineSize",P=>mt(P)?P.outlineSize:0))),a&&d.uniforms.add(new Ui("pointDistanceSphere",(P,B)=>{const w=B.camera.eye,j=P.origin;return go(j[0]-w[0],j[1]-w[1],j[2]-w[2],oo.radius)})),s&&d.include(Je),n&&(To(d),At(d)),r&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),e.attributes.add("uvi","vec4"),e.attributes.add("color","vec4"),e.attributes.add("size","vec2"),e.attributes.add("rotation","float"),(l||c)&&e.attributes.add("featureAttribute","vec4"),d.code.add(a?$`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:$`bool behindHorizon(vec3 posModel) { return false; }`),d.main.add($`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${H(n,$`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,$`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${H(l,$`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${H(t,$`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${H(r,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${H(x,$`voccluded = visible ? 0.0 : 1.0;`)}
  `);const C=$`
      vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
      vec2 texSize = vec2(textureSize(tex, 0));
      uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${Ii})));
      quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

      ${H(u,$`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,f=s?i?$`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:$`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:$`posProj += quadOffset;`;d.main.add($`
    ${C}
    ${c?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${H(y===10,$`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${$.float(te)};
    ${H(i,`alphaDiscard = alphaDiscard && outlineColor.a < ${$.float(te)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${f}
      gl_Position = posProj;
    }

    vtc = uv;

    ${H(r,$`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),g.uniforms.add(new nt("tex",P=>P.texture)),p&&!v&&g.uniforms.add(new Mt("depthMap",P=>P.mainDepth),new Me("occludedOpacity",P=>P.hudOccludedFragmentOpacity));const z=r?$`(isBorder > 0.0 ? 0.0 : ${$.float(te)})`:$.float(te),O=$`
    ${H(r,$`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${H(h,$`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${i?$`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${z} ||
          fillPixelColor.a + outlinePixelColor.a < ${$.float(te)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${H(!v,$`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${z}) {
          discard;
        }

        ${H(!v,$`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:$`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${z}) {
            discard;
          }
          ${H(!v,$`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${H(p&&!v,$`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${H(!v&&r,$`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(y){case 0:case 1:e.outputs.add("fragColor","vec4",0),y===1&&e.outputs.add("fragEmission","vec4",1),m===1&&e.outputs.add("fragAlpha","float",y===1?2:1),g.main.add($`
        ${O}
        ${H(m===2,$`fragColor.rgb /= fragColor.a;`)}
        ${H(y===1,$`fragEmission = vec4(0.0);`)}
        ${H(m===1,$`fragAlpha = fragColor.a;`)}`);break;case 10:g.main.add($`
        ${O}
        outputObjectAndLayerIdColor();`);break;case 9:e.include(Fo,o),g.main.add($`
        ${O}
        outputHighlight(${H(x,$`voccluded == 1.0`,$`false`)});`)}return e}function mt(o){return o.outlineColor[3]>0&&o.outlineSize>0}function ve(o){return o.textureIsSignedDistanceField?Hi(o.anchorPosition,o.distanceFieldBoundingBox,Ce):to(Ce,o.anchorPosition),Ce}function Hi(o,e,i){We(i,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1])}const Ce=Qe(),ye=32e3,Ii=$.float(ye),Bi=Object.freeze(Object.defineProperty({__proto__:null,build:Et,calculateAnchorPosition:ve,fullUV:ye},Symbol.toStringTag,{value:"Module"}));class Gi extends Eo{constructor(e,i){super(e,i,new Uo(Bi,()=>si(()=>Promise.resolve().then(()=>Zi),void 0,import.meta.url)),fi([Ut,It()].map(ri))),this.primitiveType=i.occlusionPass?ct.POINTS:ct.TRIANGLE_STRIP}initializePipeline(e){const{oitPass:i,hasPolygonOffset:t,draped:a,output:s,depthTestEnabled:n,occlusionPass:r}=e,l=n&&!a&&i!==1&&!r&&s!==9;return li({blending:Dt(s)?Io(i,!0):null,depthTest:n&&!a?{func:515}:null,depthWrite:l?ui:null,drawBuffers:Ho(i,s),colorWrite:ci,polygonOffset:t?Li:null})}}const Li={factor:0,units:-4},Ut=Tt().vec2u8("uv0",{glNormalized:!0}),Ht=Tt().vec3f("position").vec3f("normal").vec4i16("uvi").vec4u8("color").vec2f("size").f32("rotation").vec4f("centerOffsetAndDistance").vec4f("featureAttribute"),qi=Ht.clone().vec4u8("olidColor");function It(){return Ro()?qi:Ht}class F extends Bo{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1}}E([U()],F.prototype,"screenCenterOffsetUnitsEnabled",void 0),E([U()],F.prototype,"occlusionTestEnabled",void 0),E([U()],F.prototype,"signedDistanceFieldEnabled",void 0),E([U()],F.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),E([U()],F.prototype,"hasVVSize",void 0),E([U()],F.prototype,"hasVVColor",void 0),E([U()],F.prototype,"hasVerticalOffset",void 0),E([U()],F.prototype,"hasScreenSizePerspective",void 0),E([U()],F.prototype,"hasRotation",void 0),E([U()],F.prototype,"debugDrawLabelBorder",void 0),E([U()],F.prototype,"hasPolygonOffset",void 0),E([U()],F.prototype,"depthTestEnabled",void 0),E([U()],F.prototype,"pixelSnappingEnabled",void 0),E([U()],F.prototype,"draped",void 0),E([U()],F.prototype,"terrainDepthTest",void 0),E([U()],F.prototype,"cullAboveTerrain",void 0),E([U()],F.prototype,"occlusionPass",void 0),E([U()],F.prototype,"occludedFragmentFade",void 0),E([U()],F.prototype,"horizonCullingEnabled",void 0),E([U()],F.prototype,"isFocused",void 0);class Na extends Go{constructor(e,i){super(e,Qi),this.produces=new Map([[13,t=>Fe(t)&&!this.parameters.drawAsLabel],[14,t=>Fe(t)&&this.parameters.drawAsLabel],[12,()=>this.parameters.occlusionTest],[18,t=>this.parameters.draped&&Fe(t)]]),this._visible=!0,this._configuration=new F(i)}getConfiguration(e,i){const t=this.parameters.draped;return super.getConfiguration(e,i,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=t,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=i.slot===12,this._configuration.occludedFragmentFade=!t&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||i.slot===12,Dt(e)&&(this._configuration.debugDrawLabelBorder=!!Lo.LABELS_SHOW_BORDER),this._configuration.oitPass=i.oitPass,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration}intersect(e,i,t,a,s,n){const{options:{selectionMode:r,hud:l,excludeLabels:c},point:u,camera:p}=t,{parameters:h}=this;if(!r||!l||c&&h.isLabel||!e.visible||!u||!p)return;const b=e.attributes.get("featureAttribute"),y=b==null?null:et(b.data,qe),{scaleX:m,scaleY:d}=ke(y,h,p.pixelRatio);Pt(Ae,i),e.attributes.has("featureAttribute")&&Wi(Ae);const g=e.attributes.get("position"),v=e.attributes.get("size"),x=e.attributes.get("normal"),C=e.attributes.get("rotation"),f=e.attributes.get("centerOffsetAndDistance");_t(g.size>=3);const z=ve(h),O=this.parameters.centerOffsetUnits==="screen";for(let P=0;P<g.data.length/g.size;P++){const B=P*g.size;oe(A,g.data[B],g.data[B+1],g.data[B+2]),re(A,A,i),re(A,A,p.viewMatrix);const w=P*f.size;if(oe(_,f.data[w],f.data[w+1],f.data[w+2]),!O&&(A[0]+=_[0],A[1]+=_[1],_[2]!==0)){const V=_[2];L(_,A),W(A,A,G(_,_,V))}const j=P*x.size;if(oe(se,x.data[j],x.data[j+1],x.data[j+2]),Ge(se,Ae,p,we),Ne(this.parameters,A,we,p,ge),p.applyProjection(A,D),D[0]>-1){O&&(_[0]||_[1])&&(D[0]+=_[0]*p.pixelRatio,_[1]!==0&&(D[1]+=ge.alignmentEvaluator.apply(_[1])*p.pixelRatio),p.unapplyProjection(D,A)),D[0]+=this.parameters.screenOffset[0]*p.pixelRatio,D[1]+=this.parameters.screenOffset[1]*p.pixelRatio,D[0]=Math.floor(D[0]),D[1]=Math.floor(D[1]);const V=P*v.size;R[0]=v.data[V],R[1]=v.data[V+1],ge.evaluator.applyVec2(R,R);const Q=Lt*p.pixelRatio;let le=0;h.textureIsSignedDistanceField&&(le=Math.min(h.outlineSize,.5*R[0])*p.pixelRatio/2),R[0]*=m,R[1]*=d;const J=P*C.size,N=h.rotation+C.data[J];if(Le(u,D[0],D[1],R,Q,le,N,h,z)){const ae=t.ray;if(re(De,A,St(Gt,p.viewMatrix)),D[0]=u[0],D[1]=u[1],p.unprojectFromRenderScreen(D,A)){const S=T();k(S,ae.direction);const me=1/be(S);G(S,S,me),n(zt(ae.origin,A)*me,S,-1,De)}}}}}intersectDraped(e,i,t,a,s){const n=e.attributes.get("position"),r=e.attributes.get("size"),l=e.attributes.get("rotation"),c=this.parameters,u=ve(c),p=e.attributes.get("featureAttribute"),h=p==null?null:et(p.data,qe),{scaleX:b,scaleY:y}=ke(h,c,e.screenToWorldRatio),m=Yi*e.screenToWorldRatio;for(let d=0;d<n.data.length/n.size;d++){const g=d*n.size,v=n.data[g],x=n.data[g+1],C=d*r.size;R[0]=r.data[C],R[1]=r.data[C+1];let f=0;c.textureIsSignedDistanceField&&(f=Math.min(c.outlineSize,.5*R[0])*e.screenToWorldRatio/2),R[0]*=b,R[1]*=y;const z=d*l.size,O=c.rotation+l.data[z];Le(t,v,x,R,m,f,O,c,u)&&a(s.distance,s.normal,-1)}}createBufferWriter(){return new Ji}applyShaderOffsetsView(e,i,t,a,s,n,r){const l=Ge(i,t,s,we);return this._applyVerticalGroundOffsetView(e,l,s,r),Ne(this.parameters,r,l,s,n),this._applyPolygonOffsetView(r,l,a[3],s,r),this._applyCenterOffsetView(r,a,r),r}applyShaderOffsetsNDC(e,i,t,a,s){return this._applyCenterOffsetNDC(e,i,t,a),s!=null&&k(s,a),this._applyPolygonOffsetNDC(a,i,t,a),a}_applyPolygonOffsetView(e,i,t,a,s){const n=a.aboveGround?1:-1;let r=Math.sign(t);r===0&&(r=n);const l=n*r;if(this.parameters.shaderPolygonOffset<=0)return k(s,e);const c=io(Math.abs(i.cosAngle),.01,1),u=1-Math.sqrt(1-c*c)/c/a.viewport[2];return G(s,e,l>0?u:1/u),s}_applyVerticalGroundOffsetView(e,i,t,a){const s=be(e),n=t.aboveGround?1:-1,r=t.computeRenderPixelSizeAtDist(s)*Rt,l=G(A,i.normal,n*r);return q(a,e,l),a}_applyCenterOffsetView(e,i,t){const a=this.parameters.centerOffsetUnits!=="screen";return t!==e&&k(t,e),a&&(t[0]+=i[0],t[1]+=i[1],i[2]&&(L(se,t),bo(t,t,G(se,se,i[2])))),t}_applyCenterOffsetNDC(e,i,t,a){const s=this.parameters.centerOffsetUnits!=="screen";return a!==e&&k(a,e),s||(a[0]+=i[0]/t.fullWidth*2,a[1]+=i[1]/t.fullHeight*2),a}_applyPolygonOffsetNDC(e,i,t,a){const s=this.parameters.shaderPolygonOffset;if(e!==a&&k(a,e),s){const n=t.aboveGround?1:-1,r=n*Math.sign(i[3]);a[2]-=(r||n)*s}return a}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:i,outlineColor:t}=this.parameters,a=e[3]>=te||i>=te&&t[3]>=te;return this._visible&&a}createGLMaterial(e){return new ki(e)}calculateRelativeScreenBounds(e,i,t=wt()){return Ni(this.parameters,e,i,t),t[2]=t[0]+e[0],t[3]=t[1]+e[1],t}}class ki extends Zo{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Gi,e)}}function Ni(o,e,i,t){t[0]=o.anchorPosition[0]*-e[0]+o.screenOffset[0]*i,t[1]=o.anchorPosition[1]*-e[1]+o.screenOffset[1]*i}function Ge(o,e,i,t){return Ti(e)&&(e=Pt(Xi,e)),yo(t.normal,o,e),re(t.normal,t.normal,i.viewInverseTransposeMatrix),t.cosAngle=Ye(Bt,Ki),t}function Wi(o){const e=o[0],i=o[1],t=o[2],a=o[3],s=o[4],n=o[5],r=o[6],l=o[7],c=o[8],u=1/Math.sqrt(e*e+i*i+t*t),p=1/Math.sqrt(a*a+s*s+n*n),h=1/Math.sqrt(r*r+l*l+c*c);return o[0]=e*u,o[1]=i*u,o[2]=t*u,o[3]=a*p,o[4]=s*p,o[5]=n*p,o[6]=r*h,o[7]=l*h,o[8]=c*h,o}function Le(o,e,i,t,a,s,n,r,l){let c=e-a-t[0]*l[0],u=c+t[0]+2*a,p=i-a-t[1]*l[1],h=p+t[1]+2*a;const b=r.distanceFieldBoundingBox;return r.textureIsSignedDistanceField&&b!=null&&(c+=t[0]*b[0],p+=t[1]*b[1],u-=t[0]*(1-b[2]),h-=t[1]*(1-b[3]),c-=s,u+=s,p-=s,h+=s),We(xt,e,i),ao(xe,o,xt,no(n)),xe[0]>c&&xe[0]<u&&xe[1]>p&&xe[1]<h}const ge=new qo,A=T(),se=T(),D=Ve(),Bt=T(),De=T(),xe=Qe(),xt=Qe(),Ae=$t(),Xi=$t(),Gt=bt(),Pe=Ve(),_=T(),Ie=T(),qe=Ve(),we={normal:Bt,cosAngle:0},Lt=1,Yi=2,R=jt(0,0),Ki=yt(0,0,1);class Qi extends ko{constructor(){super(...arguments),this.renderOccluded=1,this.isDecoration=!1,this.color=tt(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=jt(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=tt(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=Ve(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Ji{constructor(){this.layout=Ut,this.instanceLayout=It()}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,i,t,a,s,n){const{position:r,normal:l,color:c,size:u,rotation:p,centerOffsetAndDistance:h,featureAttribute:b,uvi:y}=s;Xo(t.get("position"),e,r,n),Yo(t.get("normal"),i,l,n);const m=t.get("position").indices.length;let d=0,g=0,v=ye,x=ye;const C=t.get("uvi")?.data;C&&C.length>=4&&(d=C[0],g=C[1],v=C[2],x=C[3]);for(let f=0;f<m;++f){const z=n+f;y.setValues(z,d,g,v,x)}if(Ko(t.get("color"),4,c,n),st(t.get("size"),u,n),Qo(t.get("rotation"),p,n),t.get("centerOffsetAndDistance")?rt(t.get("centerOffsetAndDistance"),h,n):lt(h,n,m),t.get("featureAttribute")?rt(t.get("featureAttribute"),b,n):lt(b,n,m),a!=null){const f=t.get("position")?.indices;if(f){const z=f.length,O=s.getField("olidColor",ni);Jo(a,O,z,n)}}return{numVerticesPerItem:1,numItems:m}}writeBaseInstance(e,i){const{uv0:t}=i;st(e.get("uv0"),t,0)}intersect(e,i,t,a,s,n,r){const{options:{selectionMode:l,hud:c,excludeLabels:u},point:p,camera:h}=a;if(!l||!c||u&&i.isLabel||!p)return;const b=this.instanceLayout.createView(e),{position:y,normal:m,rotation:d,size:g,featureAttribute:v,centerOffsetAndDistance:x}=b,C=i.centerOffsetUnits==="screen",f=ve(i);if(y==null||m==null||d==null||g==null||x==null||h==null)return;const z=v==null?null:v.getVec(0,qe),{scaleX:O,scaleY:P}=ke(z,i,h.pixelRatio),B=y.count;for(let w=0;w<B;w++){if(y.getVec(w,A),t!=null&&q(A,A,t),re(A,A,h.viewMatrix),x.getVec(w,Pe),oe(_,Pe[0],Pe[1],Pe[2]),!C&&(A[0]+=_[0],A[1]+=_[1],_[2]!==0)){const j=_[2];L(_,A),W(A,A,G(_,_,j))}if(m.getVec(w,se),Ge(se,Ae,h,we),Ne(i,A,we,h,ge),h.applyProjection(A,D),D[0]>-1){C&&(_[0]||_[1])&&(D[0]+=_[0]*h.pixelRatio,_[1]!==0&&(D[1]+=ge.alignmentEvaluator.apply(_[1])*h.pixelRatio),h.unapplyProjection(D,A)),D[0]+=i.screenOffset[0]*h.pixelRatio,D[1]+=i.screenOffset[1]*h.pixelRatio,D[0]=Math.floor(D[0]),D[1]=Math.floor(D[1]),g.getVec(w,R),ge.evaluator.applyVec2(R,R);const j=Lt*h.pixelRatio;let V=0;i.textureIsSignedDistanceField&&(V=Math.min(i.outlineSize,.5*R[0])*h.pixelRatio/2),R[0]*=O,R[1]*=P;const Q=d.get(w),le=i.rotation+Q;if(Le(p,D[0],D[1],R,j,V,le,i,f)){const J=a.ray;if(re(De,A,St(Gt,h.viewMatrix)),D[0]=p[0],D[1]=p[1],h.unprojectFromRenderScreen(D,A)){const N=T();k(N,J.direction);const ae=1/be(N);G(N,N,ae),r(zt(J.origin,A)*ae,N,w,De)}}}}}}function ke(o,e,i){return o==null||e.vvSize==null?{scaleX:i,scaleY:i}:(No(Ie,e,o),{scaleX:Ie[0]*i,scaleY:Ie[1]*i})}function Ne(o,e,i,t,a){if(!o.verticalOffset?.screenLength){const l=be(e);return a.update(i.cosAngle,l,o.screenSizePerspective,o.screenSizePerspectiveMinPixelReferenceSize,o.screenSizePerspectiveAlignment,null),e}const s=be(e),n=o.screenSizePerspectiveAlignment??o.screenSizePerspective,r=Wo(t,s,o.verticalOffset,i.cosAngle,n,o.screenSizePerspectiveMinPixelReferenceSize);return a.update(i.cosAngle,s,o.screenSizePerspective,o.screenSizePerspectiveMinPixelReferenceSize,o.screenSizePerspectiveAlignment,null),G(i.normal,i.normal,r),q(e,e,i.normal)}function Wa(o){return o.type==="point"}const Zi=Object.freeze(Object.defineProperty({__proto__:null,build:Et,calculateAnchorPosition:ve,fullUV:ye},Symbol.toStringTag,{value:"Module"}));export{Aa as A,Ma as D,_a as E,ja as G,Ga as M,Ta as Q,Ca as U,Da as Z,Ia as a,ka as b,Ua as c,Fi as d,Va as e,Ha as f,gt as g,Ea as h,Na as i,Ra as j,gi as k,Je as l,La as m,Ei as n,Ba as o,Di as p,Vi as q,Fa as r,Wa as t,Mi as u,Oa as w,qa as y};
