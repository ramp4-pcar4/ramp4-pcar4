import{g5 as Jt,cX as Kt,ak as et,oo as Zt,ny as eo,kz as to,cY as tt,c3 as oo,op as io,oq as no,or as so,gU as ao,az as R,aI as ot,cS as it,j7 as ro,hW as _e,ap as lo,_ as $,gp as nt,cR as st,aJ as co,eq as uo,ci as po}from"./main-CSjwO60s.js";import{x as fo,l as ho,m as go,h as at}from"./mat4-R0VY9B_E.js";import{m as vo,s as mo}from"./vec42-DHp-FUwt.js";import{t as xo,s as wo,a as bo,r as yo,u as rt,n as Pe,e as lt}from"./vec4f64-DD-nkcCV.js";import{$ as Po}from"./projectionUtils-CsX1UTBu.js";import{u as zo}from"./meshVertexSpaceUtils-EbHpWZGf.js";import{t as Ee}from"./projectVectorToVector-OCoJKalB.js";import{o as So,x as Oo}from"./hydratedFeatures-82j52esm.js";import{c as W,_ as ee,A as L,o as te,s as N,g as G,u as q,E as se,P as $e,r as xe,p as ct,R as Co,N as Ao}from"./vec32-CI1xtKog.js";import{r as U,n as Y,t as ut}from"./vec3f32-GX_cKsFD.js";import{aE as Do,aF as pt,n as X,m as Q,aG as ft,D as Vo,ax as Mo,aq as Ue,r as Be,a6 as ze,aH as jo,af as To,aI as dt,aJ as ht,as as Fo,K as Ro,ap as gt,i as _o,aK as Eo,G as $o,H as Uo,M as Bo,al as vt,L as He,b as mt,aL as Ho,a2 as oe,ai as Io,a as Go,j as Lo,k as qo,W as No,V as ko,X as xt,Y as Wo,x as B,A as Yo,aM as Ie,t as Xo,aN as Qo,aO as Jo,aP as Ko,aB as Zo,aQ as ei,aR as ti,aS as oi,aT as wt,aU as ii,aV as bt,aW as yt,aX as ni,aD as si}from"./OutputColorHighlightOID.glsl-fUhBGshN.js";import{A as ai,U as Pt}from"./Indices-CAn-HCVv.js";import{j as ri,U as li,K as ci}from"./plane-wUwHaY3K.js";import{k as ui}from"./sphere-CIGsF4vz.js";import{n as Ge,r as zt}from"./vec2f64-CkowXrDb.js";import"./projectBuffer-CMNsPBq1.js";import{t as D}from"./orientedBoundingBox-DAJ-bKlA.js";import{s as St,g as pi}from"./BufferView-B6RYETl3.js";import{Q as Ot,t as fi}from"./InterleavedLayout-CuMGnz6O.js";import{_ as Ct}from"./enums-DDJfd4_p.js";import{T as di,d as hi,c as gi}from"./renderState-CsafAKLy.js";import{t as vi}from"./VertexAttributeLocations-DBgVVQz-.js";import{t as z,n as H}from"./glsl-CfY1Aoj6.js";import"./lengthUtils-CopeXEyE.js";import{s as mi}from"./ShaderBuilder-ufvKEDd5.js";function xi(o,e){if(o.type==="point")return ie(o,e,!1);if(So(o))switch(o.type){case"extent":return ie(o.center,e,!1);case"polygon":return ie(Dt(o),e,!1);case"polyline":return ie(At(o),e,!0);case"mesh":return ie(zo(o.vertexSpace,o.spatialReference)??o.extent.center,e,!1);case"multipoint":return}else switch(o.type){case"extent":return ie(wi(o),e,!0);case"polygon":return ie(Dt(o),e,!0);case"polyline":return ie(At(o),e,!0);case"multipoint":return}}function At(o){const e=o.paths[0];if(!e||e.length===0)return null;const i=Zt(e,eo(e)/2);return Ee(i[0],i[1],i[2],o.spatialReference)}function wi(o){return Ee(.5*(o.xmax+o.xmin),.5*(o.ymax+o.ymin),o.zmin!=null&&o.zmax!=null&&isFinite(o.zmin)&&isFinite(o.zmax)?.5*(o.zmax+o.zmin):void 0,o.spatialReference)}function Dt(o){const e=o.rings[0];if(!e||e.length===0)return null;const i=to(o.rings,!!o.hasZ);return Ee(i[0],i[1],i[2],o.spatialReference)}function ie(o,e,i){const t=i?o:Oo(o);return e&&o?Po(o,t,e)?t:null:t}function bi(o,e,i,t=0){if(o){e||(e=et());const n=o;let a=.5*n.width*(i-1),s=.5*n.height*(i-1);return n.width<1e-7*n.height?a+=s/20:n.height<1e-7*n.width&&(s+=a/20),mo(e,n.xmin-a-t,n.ymin-s-t,n.xmax+a+t,n.ymax+s+t),e}return null}function yi(o,e,i=null){const t=xo(wo);return o!=null&&(t[0]=o[0],t[1]=o[1],t[2]=o[2],o.length>3&&(t[3]=o[3])),e!=null&&(t[3]=e),i&&vo(t,t,i),t}function Pi(o=Jt,e,i,t=1){const n=new Array(3);if(e==null||i==null)n[0]=1,n[1]=1,n[2]=1;else{let a,s=0;for(let r=2;r>=0;r--){const l=o[r],c=l!=null,u=r===0&&!a&&!c,f=i[r];let h;l==="symbol-value"||u?h=f!==0?e[r]/f:1:c&&l!=="proportional"&&isFinite(l)&&(h=f!==0?l/f:1),h!=null&&(n[r]=h,a=h,s=Math.max(s,Math.abs(h)))}for(let r=2;r>=0;r--)n[r]==null?n[r]=a:n[r]===0&&(n[r]=.001*s)}for(let a=2;a>=0;a--)n[a]/=t;return Kt(n)}function zi(o){return o.isPrimitive!=null}function Si(o){return Vt(zi(o)?[o.width,o.depth,o.height]:o)?null:"Symbol sizes may not be negative values"}function Vt(o){const e=i=>i==null||i>=0;return Array.isArray(o)?o.every(e):e(o)}function Oi(o,e,i,t=tt()){return o&&fo(t,t,-o/180*Math.PI),e&&ho(t,t,e/180*Math.PI),i&&go(t,t,i/180*Math.PI),t}function Ci(o,e,i){if(i.minDemResolution!=null)return i.minDemResolution;const t=oo(e),n=io(o)*t,a=no(o)*t,s=so(o)*(e.isGeographic?1:t);return n===0&&a===0&&s===0?i.minDemResolutionForPoints:.01*Math.max(n,a,s)}function Mt(o,e){const i=o[e],t=o[e+1],n=o[e+2];return Math.sqrt(i*i+t*t+n*n)}function Ai(o,e){const i=o[e],t=o[e+1],n=o[e+2],a=1/Math.sqrt(i*i+t*t+n*n);o[e]*=a,o[e+1]*=a,o[e+2]*=a}function jt(o,e,i){o[e]*=i,o[e+1]*=i,o[e+2]*=i}function Di(o,e,i,t,n,a=e){(n=n||o)[a]=o[e]+i[t],n[a+1]=o[e+1]+i[t+1],n[a+2]=o[e+2]+i[t+2]}function Vi(){return Tt??=Mi(),Tt}function Mi(){const o=new D([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new Do([["uv0",o]])}let Tt=null;const Le=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],ji=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Ti=[0,0,1,0,1,1,0,1],Fi=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ft=new Array(36);for(let o=0;o<6;o++)for(let e=0;e<6;e++)Ft[6*o+e]=o;const ae=new Array(36);for(let o=0;o<6;o++)ae[6*o]=0,ae[6*o+1]=1,ae[6*o+2]=2,ae[6*o+3]=2,ae[6*o+4]=3,ae[6*o+5]=0;function Ri(o,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(24);for(let t=0;t<8;t++)i[3*t]=Le[t][0]*e[0],i[3*t+1]=Le[t][1]*e[1],i[3*t+2]=Le[t][2]*e[2];return new Q(o,[["position",new D(i,Fi,3,!0)],["normal",new D(ji,Ft,3)],["uv0",new D(Ti,ae,2)]])}const qe=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],_i=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Ei=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],$i=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Ui(o,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(18);for(let t=0;t<6;t++)i[3*t]=qe[t][0]*e[0],i[3*t+1]=qe[t][1]*e[1],i[3*t+2]=qe[t][2]*e[2];return new Q(o,[["position",new D(i,Ei,3,!0)],["normal",new D(_i,$i,3)]])}const Se=U(-.5,0,-.5),Oe=U(.5,0,-.5),Ce=U(0,0,.5),Ae=U(0,.5,0),ce=Y(),ue=Y(),pe=Y(),fe=Y(),de=Y();W(ce,Se,Ae),W(ue,Se,Oe),ee(pe,ce,ue),L(pe,pe),W(ce,Oe,Ae),W(ue,Oe,Ce),ee(fe,ce,ue),L(fe,fe),W(ce,Ce,Ae),W(ue,Ce,Se),ee(de,ce,ue),L(de,de);const Ne=[Se,Oe,Ce,Ae],Bi=[0,-1,0,pe[0],pe[1],pe[2],fe[0],fe[1],fe[2],de[0],de[1],de[2]],Hi=[0,1,2,3,1,0,3,2,1,3,0,2],Ii=[0,0,0,1,1,1,2,2,2,3,3,3];function Gi(o,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(12);for(let t=0;t<4;t++)i[3*t]=Ne[t][0]*e[0],i[3*t+1]=Ne[t][1]*e[1],i[3*t+2]=Ne[t][2]*e[2];return new Q(o,[["position",new D(i,Hi,3,!0)],["normal",new D(Bi,Ii,3)]])}function Li(o,e,i,t,n={uv:!0}){const a=-Math.PI,s=2*Math.PI,r=-Math.PI/2,l=Math.PI,c=Math.max(3,Math.floor(i)),u=Math.max(2,Math.floor(t)),f=(c+1)*(u+1),h=X(3*f),b=X(3*f),y=X(2*f),m=[];let d=0;for(let x=0;x<=u;x++){const A=[],p=x/u,O=r+p*l,C=Math.cos(O);for(let P=0;P<=c;P++){const I=P/c,w=a+I*s,T=Math.cos(w)*C,j=Math.sin(O),J=-Math.sin(w)*C;h[3*d]=T*e,h[3*d+1]=j*e,h[3*d+2]=J*e,b[3*d]=T,b[3*d+1]=j,b[3*d+2]=J,y[2*d]=I,y[2*d+1]=p,A.push(d),++d}m.push(A)}const g=new Array;for(let x=0;x<u;x++)for(let A=0;A<c;A++){const p=m[x][A],O=m[x][A+1],C=m[x+1][A+1],P=m[x+1][A];x===0?(g.push(p),g.push(C),g.push(P)):x===u-1?(g.push(p),g.push(O),g.push(C)):(g.push(p),g.push(O),g.push(C),g.push(C),g.push(P),g.push(p))}const v=[["position",new D(h,g,3,!0)],["normal",new D(b,g,3,!0)]];return n.uv&&v.push(["uv0",new D(y,g,2,!0)]),n.offset&&(v[0][0]="offset",v.push(["position",new D(Float64Array.from(n.offset),Pt(g.length),3,!0)])),new Q(o,v)}function qi(o,e,i,t){const n=Rt(e,i);return new Q(o,n)}function Rt(o,e,i){let t,n;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],n=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let l=0;l<t.length;l+=3)jt(t,l,o/Mt(t,l));let a={};function s(l,c){l>c&&([l,c]=[c,l]);const u=l.toString()+"."+c.toString();if(a[u])return a[u];let f=t.length;return t.length+=3,Di(t,3*l,t,3*c,t,f),jt(t,f,o/Mt(t,f)),f/=3,a[u]=f,f}for(let l=0;l<e;l++){const c=n.length,u=new Array(4*c);for(let f=0;f<c;f+=3){const h=n[f],b=n[f+1],y=n[f+2],m=s(h,b),d=s(b,y),g=s(y,h),v=4*f;u[v]=h,u[v+1]=m,u[v+2]=g,u[v+3]=b,u[v+4]=d,u[v+5]=m,u[v+6]=y,u[v+7]=g,u[v+8]=d,u[v+9]=m,u[v+10]=d,u[v+11]=g}n=u,a={}}const r=pt(t);for(let l=0;l<r.length;l+=3)Ai(r,l);return[["position",new D(pt(t),n,3,!0)],["normal",new D(r,n,3,!0)]]}function Ni(o,{normal:e,position:i,color:t,rotation:n,size:a,centerOffsetAndDistance:s,uvi:r,featureAttribute:l,olidColor:c=null}={}){const u=i?ot(i):R(),f=e?ot(e):it(0,0,1),h=t?[t[0],t[1],t[2],t.length>3?t[3]:255]:[255,255,255,255],b=a!=null&&a.length===2?a:[1,1],y=n!=null?[n]:[0],m=Pt(1),d=[["position",new D(u,m,3,!0)],["normal",new D(f,m,3,!0)],["color",new D(h,m,4,!0)],["size",new D(b,m,2)],["rotation",new D(y,m,1,!0)]];if(r&&d.push(["uvi",new D(r,m,r.length)]),s!=null){const g=[s[0],s[1],s[2],s[3]];d.push(["centerOffsetAndDistance",new D(g,m,4)])}if(l){const g=[l[0],l[1],l[2],l[3]];d.push(["featureAttribute",new D(g,m,4)])}return new Q(o,d,null,1,c,void 0,Vi())}function _t(o,e,i,t,n=!0,a=!0){let s=0;const r=e,l=o;let c=U(0,s,0),u=U(0,s+l,0),f=U(0,-1,0),h=U(0,1,0);t&&(s=l,u=U(0,0,0),c=U(0,s,0),f=U(0,1,0),h=U(0,-1,0));const b=[u,c],y=[f,h],m=i+2,d=Math.sqrt(l*l+r*r);if(t)for(let p=i-1;p>=0;p--){const O=p*(2*Math.PI/i),C=U(Math.cos(O)*r,s,Math.sin(O)*r);b.push(C);const P=U(l*Math.cos(O)/d,-r/d,l*Math.sin(O)/d);y.push(P)}else for(let p=0;p<i;p++){const O=p*(2*Math.PI/i),C=U(Math.cos(O)*r,s,Math.sin(O)*r);b.push(C);const P=U(l*Math.cos(O)/d,r/d,l*Math.sin(O)/d);y.push(P)}const g=new Array,v=new Array;if(n){for(let p=3;p<b.length;p++)g.push(1),g.push(p-1),g.push(p),v.push(0),v.push(0),v.push(0);g.push(b.length-1),g.push(2),g.push(1),v.push(0),v.push(0),v.push(0)}if(a){for(let p=3;p<b.length;p++)g.push(p),g.push(p-1),g.push(0),v.push(p),v.push(p-1),v.push(1);g.push(0),g.push(2),g.push(b.length-1),v.push(1),v.push(2),v.push(y.length-1)}const x=X(3*m);for(let p=0;p<m;p++)x[3*p]=b[p][0],x[3*p+1]=b[p][1],x[3*p+2]=b[p][2];const A=X(3*m);for(let p=0;p<m;p++)A[3*p]=y[p][0],A[3*p+1]=y[p][1],A[3*p+2]=y[p][2];return[["position",new D(x,g,3,!0)],["normal",new D(A,v,3,!0)]]}function ki(o,e,i,t,n,a=!0,s=!0){return new Q(o,_t(e,i,t,n,a,s))}function Wi(o,e,i,t,n,a,s){const r=n?ut(n):U(1,0,0),l=a?ut(a):U(0,0,0);s??=!0;const c=Y();L(c,r);const u=Y();G(u,c,Math.abs(e));const f=Y();G(f,u,-.5),q(f,f,l);const h=U(0,1,0);Math.abs(1-$e(c,h))<.2&&te(h,0,0,1);const b=Y();ee(b,c,h),L(b,b),ee(h,b,c);const y=2*t+(s?2:0),m=t+(s?2:0),d=X(3*y),g=X(3*m),v=X(2*y),x=new Array(3*t*(s?4:2)),A=new Array(3*t*(s?4:2));s&&(d[3*(y-2)]=f[0],d[3*(y-2)+1]=f[1],d[3*(y-2)+2]=f[2],v[2*(y-2)]=0,v[2*(y-2)+1]=0,d[3*(y-1)]=d[3*(y-2)]+u[0],d[3*(y-1)+1]=d[3*(y-2)+1]+u[1],d[3*(y-1)+2]=d[3*(y-2)+2]+u[2],v[2*(y-1)]=1,v[2*(y-1)+1]=1,g[3*(m-2)]=-c[0],g[3*(m-2)+1]=-c[1],g[3*(m-2)+2]=-c[2],g[3*(m-1)]=c[0],g[3*(m-1)+1]=c[1],g[3*(m-1)+2]=c[2]);const p=(w,T,j)=>{x[w]=T,A[w]=j};let O=0;const C=Y(),P=Y();for(let w=0;w<t;w++){const T=w*(2*Math.PI/t);G(C,h,Math.sin(T)),G(P,b,Math.cos(T)),q(C,C,P),g[3*w]=C[0],g[3*w+1]=C[1],g[3*w+2]=C[2],G(C,C,i),q(C,C,f),d[3*w]=C[0],d[3*w+1]=C[1],d[3*w+2]=C[2],v[2*w]=w/t,v[2*w+1]=0,d[3*(w+t)]=d[3*w]+u[0],d[3*(w+t)+1]=d[3*w+1]+u[1],d[3*(w+t)+2]=d[3*w+2]+u[2],v[2*(w+t)]=w/t,v[2*w+1]=1;const j=(w+1)%t;p(O++,w,w),p(O++,w+t,w),p(O++,j,j),p(O++,j,j),p(O++,w+t,w),p(O++,j+t,j)}if(s){for(let w=0;w<t;w++){const T=(w+1)%t;p(O++,y-2,m-2),p(O++,w,m-2),p(O++,T,m-2)}for(let w=0;w<t;w++){const T=(w+1)%t;p(O++,w+t,m-1),p(O++,y-1,m-1),p(O++,T+t,m-1)}}const I=[["position",new D(d,x,3,!0)],["normal",new D(g,A,3,!0)],["uv0",new D(v,x,2,!0)]];return new Q(o,I)}function Yi(o,e,i,t,n,a){t=t||10,n=n==null||n,St(e.length>1);const s=[[0,0,0]],r=[],l=[];for(let c=0;c<t;c++){r.push([0,-c-1,-(c+1)%t-1]);const u=c/t*2*Math.PI;l.push([Math.cos(u)*i,Math.sin(u)*i])}return Et(o,l,e,s,r,n,a)}function Et(o,e,i,t,n,a,s=U(0,0,0)){const r=e.length,l=X(i.length*r*3+(6*t.length||0)),c=X(i.length*r*3+(t?6:0)),u=new Array,f=new Array;let h=0,b=0;const y=R(),m=R(),d=R(),g=R(),v=R(),x=R(),A=R(),p=R(),O=R(),C=R(),P=R(),I=R(),w=R(),T=ri();te(O,0,1,0),W(m,i[1],i[0]),L(m,m),a?(q(p,i[0],s),L(d,p)):te(d,0,0,1),We(m,d,O,O,v,d,$t),N(g,d),N(I,v);for(let S=0;S<t.length;S++)G(x,v,t[S][0]),G(p,d,t[S][2]),q(x,x,p),q(x,x,i[0]),l[h++]=x[0],l[h++]=x[1],l[h++]=x[2];c[b++]=-m[0],c[b++]=-m[1],c[b++]=-m[2];for(let S=0;S<n.length;S++)u.push(n[S][0]>0?n[S][0]:-n[S][0]-1+t.length),u.push(n[S][1]>0?n[S][1]:-n[S][1]-1+t.length),u.push(n[S][2]>0?n[S][2]:-n[S][2]-1+t.length),f.push(0),f.push(0),f.push(0);let j=t.length;const J=t.length-1;for(let S=0;S<i.length;S++){let me=!1;S>0&&(N(y,m),S<i.length-1?(W(m,i[S+1],i[S]),L(m,m)):me=!0,q(C,y,m),L(C,C),q(P,i[S-1],g),li(i[S],C,T),ci(T,ui(P,y),p)?(W(p,p,i[S]),L(d,p),ee(v,C,d),L(v,v)):We(C,g,I,O,v,d,$t),N(g,d),N(I,v)),a&&(q(p,i[S],s),L(w,p));for(let Z=0;Z<r;Z++)if(G(x,v,e[Z][0]),G(p,d,e[Z][1]),q(x,x,p),L(A,x),c[b++]=A[0],c[b++]=A[1],c[b++]=A[2],q(x,x,i[S]),l[h++]=x[0],l[h++]=x[1],l[h++]=x[2],!me){const Fe=(Z+1)%r;u.push(j+Z),u.push(j+r+Z),u.push(j+Fe),u.push(j+Fe),u.push(j+r+Z),u.push(j+r+Fe);for(let Re=0;Re<6;Re++){const Qt=u.length-6;f.push(u[Qt+Re]-J)}}j+=r}const le=i[i.length-1];for(let S=0;S<t.length;S++)G(x,v,t[S][0]),G(p,d,t[S][1]),q(x,x,p),q(x,x,le),l[h++]=x[0],l[h++]=x[1],l[h++]=x[2];const K=b/3;c[b++]=m[0],c[b++]=m[1],c[b++]=m[2];const k=j-r;for(let S=0;S<n.length;S++)u.push(n[S][0]>=0?j+n[S][0]:-n[S][0]-1+k),u.push(n[S][2]>=0?j+n[S][2]:-n[S][2]-1+k),u.push(n[S][1]>=0?j+n[S][1]:-n[S][1]-1+k),f.push(K),f.push(K),f.push(K);const ne=[["position",new D(l,u,3,!0)],["normal",new D(c,f,3,!0)]];return new Q(o,ne)}function Xi(o,e,i,t,n){const a=ao(3*e.length),s=new Array(2*(e.length-1));let r=0,l=0;for(let u=0;u<e.length;u++){for(let f=0;f<3;f++)a[r++]=e[u][f];u>0&&(s[l++]=u-1,s[l++]=u)}const c=[["position",new D(a,s,3,!0)]];if(i&&i.length===e.length&&i[0].length===3){const u=X(3*i.length);let f=0;for(let h=0;h<e.length;h++)for(let b=0;b<3;b++)u[f++]=i[h][b];c.push(["normal",new D(u,s,3,!0)])}return t&&c.push(["color",new D(t,ai(t.length/4),4)]),new Q(o,c,null,2)}function Qi(o,e,i,t,n,a=0){const s=new Array(18),r=[[-i,a,n/2],[t,a,n/2],[0,e+a,n/2],[-i,a,-n/2],[t,a,-n/2],[0,e+a,-n/2]],l=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let c=0;c<6;c++)s[3*c]=r[c][0],s[3*c+1]=r[c][1],s[3*c+2]=r[c][2];return new Q(o,[["position",new D(s,l,3,!0)]])}function Ji(o,e){const i=o.getMutableAttribute("position").data;for(let t=0;t<i.length;t+=3){const n=i[t],a=i[t+1],s=i[t+2];te(he,n,a,s),se(he,he,e),i[t]=he[0],i[t+1]=he[1],i[t+2]=he[2]}}function Ki(o,e=o){const i=o.attributes,t=i.get("position").data,n=i.get("normal").data;if(n){const a=e.getMutableAttribute("normal").data;for(let s=0;s<n.length;s+=3){const r=n[s+1];a[s+1]=-n[s+2],a[s+2]=r}}if(t){const a=e.getMutableAttribute("position").data;for(let s=0;s<t.length;s+=3){const r=t[s+1];a[s+1]=-t[s+2],a[s+2]=r}}}function ke(o,e,i,t,n){return!(Math.abs($e(e,o))>n)&&(ee(i,o,e),L(i,i),ee(t,i,o),L(t,t),!0)}function We(o,e,i,t,n,a,s){return ke(o,e,n,a,s)||ke(o,i,n,a,s)||ke(o,t,n,a,s)}const $t=.99619469809,he=R();function Zi(o){return o instanceof Float32Array&&o.length>=16}function en(o){return Array.isArray(o)&&o.length>=16}function tn(o){return Zi(o)||en(o)}const Ut=.5;function Bt(o,e){o.include(ft),o.attributes.add("position","vec3"),o.attributes.add("normal","vec3"),o.attributes.add("centerOffsetAndDistance","vec4");const i=o.vertex;Vo(i,e),Mo(i,e),i.uniforms.add(new Ue("viewport",t=>t.camera.fullViewport),new Be("polygonOffset",t=>t.shaderPolygonOffset),new ze("cameraGroundRelative",t=>t.camera.aboveGround?1:-1)),e.hasVerticalOffset&&jo(i),i.code.add(z`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),i.code.add(z`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?z.float(0):z`sign(pointGroundDistance)`};
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
  `),e.draped&&!e.hasVerticalOffset||To(i),e.draped||(i.uniforms.add(new ze("perDistancePixelRatio",t=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2))),i.code.add(z`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${z.float(Ut)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&dt(i),e.hasScreenSizePerspective&&ht(i),i.code.add(z`
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

      ${e.hasVerticalOffset?z`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":z`
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
  `)}function De(o){o.uniforms.add(new Fo("alignPixelEnabled",e=>e.alignPixelEnabled)),o.code.add(z`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),o.code.add(z`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function on(o,e){const{vertex:i,fragment:t}=o;o.include(Ro,e),i.include(De),i.main.add(z`vec4 posProjCenter;
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
gl_PointSize = 1.0;`),t.main.add(z`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function Ht(o){o.vertex.uniforms.add(new ze("renderTransparentlyOccludedHUD",e=>e.hudRenderStyle===0?1:e.hudRenderStyle===1?0:.75),new Ue("viewport",e=>e.camera.fullViewport),new gt("hudVisibilityTexture",e=>e.hudVisibility?.getTexture())),o.vertex.include(De),o.vertex.code.add(z`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}class nn extends _o{constructor(e,i,t){super(e,"vec4",2,(n,a,s)=>n.setUniform4fv(e,i(a,s),t))}}function It(o){const e=new mi,{signedDistanceFieldEnabled:i,occlusionTestEnabled:t,horizonCullingEnabled:n,pixelSnappingEnabled:a,hasScreenSizePerspective:s,debugDrawLabelBorder:r,hasVVSize:l,hasVVColor:c,hasRotation:u,occludedFragmentFade:f,sampleSignedDistanceFieldTexelCenter:h}=o;e.include(Bt,o),e.vertex.include(Eo,o);const{occlusionPass:b,output:y,oitPass:m}=o;if(b)return e.include(on,o),e;const{vertex:d,fragment:g}=e;e.include(ft),e.include($o,o),e.include(Uo,o),t&&e.include(Ht),g.include(Bo),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const v=y===9,x=v&&t;x&&e.varyings.add("voccluded","float"),d.uniforms.add(new Ue("viewport",P=>P.camera.fullViewport),new vt("screenOffset",(P,I)=>_e(Ve,2*P.screenOffset[0]*I.camera.pixelRatio,2*P.screenOffset[1]*I.camera.pixelRatio)),new vt("anchorPosition",P=>ge(P)),new He("materialColor",P=>P.color),new Be("materialRotation",P=>P.rotation),new mt("tex",P=>P.texture)),dt(d),i&&(d.uniforms.add(new He("outlineColor",P=>P.outlineColor)),g.uniforms.add(new He("outlineColor",P=>Gt(P)?P.outlineColor:bo),new Be("outlineSize",P=>Gt(P)?P.outlineSize:0))),n&&d.uniforms.add(new nn("pointDistanceSphere",(P,I)=>{const w=I.camera.eye,T=P.origin;return yo(T[0]-w[0],T[1]-w[1],T[2]-w[2],lo.radius)})),a&&d.include(De),s&&(Ho(d),ht(d)),r&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),e.attributes.add("uvi","vec4"),e.attributes.add("color","vec4"),e.attributes.add("size","vec2"),e.attributes.add("rotation","float"),(l||c)&&e.attributes.add("featureAttribute","vec4"),d.code.add(n?z`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:z`bool behindHorizon(vec3 posModel) { return false; }`),d.main.add(z`
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
    ${H(s,z`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,z`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${H(l,z`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${H(t,z`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${H(r,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${H(x,z`voccluded = visible ? 0.0 : 1.0;`)}
  `);const A=z`
      vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
      vec2 texSize = vec2(textureSize(tex, 0));
      uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${an})));
      quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

      ${H(u,z`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,p=a?i?z`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:z`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:z`posProj += quadOffset;`;d.main.add(z`
    ${A}
    ${c?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${H(y===10,z`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${z.float(oe)};
    ${H(i,`alphaDiscard = alphaDiscard && outlineColor.a < ${z.float(oe)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${p}
      gl_Position = posProj;
    }

    vtc = uv;

    ${H(r,z`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),g.uniforms.add(new mt("tex",P=>P.texture)),f&&!v&&g.uniforms.add(new gt("depthMap",P=>P.mainDepth),new ze("occludedOpacity",P=>P.hudOccludedFragmentOpacity));const O=r?z`(isBorder > 0.0 ? 0.0 : ${z.float(oe)})`:z.float(oe),C=z`
    ${H(r,z`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${H(h,z`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${i?z`
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
          outlineAlphaFactor + fillAlphaFactor < ${O} ||
          fillPixelColor.a + outlinePixelColor.a < ${z.float(oe)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${H(!v,z`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${O}) {
          discard;
        }

        ${H(!v,z`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:z`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${O}) {
            discard;
          }
          ${H(!v,z`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${H(f&&!v,z`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${H(!v&&r,z`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(y){case 0:case 1:e.outputs.add("fragColor","vec4",0),y===1&&e.outputs.add("fragEmission","vec4",1),m===1&&e.outputs.add("fragAlpha","float",y===1?2:1),g.main.add(z`
        ${C}
        ${H(m===2,z`fragColor.rgb /= fragColor.a;`)}
        ${H(y===1,z`fragEmission = vec4(0.0);`)}
        ${H(m===1,z`fragAlpha = fragColor.a;`)}`);break;case 10:g.main.add(z`
        ${C}
        outputObjectAndLayerIdColor();`);break;case 9:e.include(Io,o),g.main.add(z`
        ${C}
        outputHighlight(${H(x,z`voccluded == 1.0`,z`false`)});`)}return e}function Gt(o){return o.outlineColor[3]>0&&o.outlineSize>0}function ge(o){return o.textureIsSignedDistanceField?sn(o.anchorPosition,o.distanceFieldBoundingBox,Ve):ro(Ve,o.anchorPosition),Ve}function sn(o,e,i){_e(i,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1])}const Ve=Ge(),we=32e3,an=z.float(we),rn=Object.freeze(Object.defineProperty({__proto__:null,build:It,calculateAnchorPosition:ge,fullUV:we},Symbol.toStringTag,{value:"Module"}));class ln extends Lo{constructor(e,i){super(e,i,new qo(rn,()=>Promise.resolve().then(()=>yn)),vi([Lt,Nt()].map(fi))),this.primitiveType=i.occlusionPass?Ct.POINTS:Ct.TRIANGLE_STRIP}initializePipeline(e){const{oitPass:i,hasPolygonOffset:t,draped:n,output:a,depthTestEnabled:s,occlusionPass:r}=e,l=s&&!n&&i!==1&&!r&&a!==9;return di({blending:xt(a)?ko(i,!0):null,depthTest:s&&!n?{func:515}:null,depthWrite:l?gi:null,drawBuffers:No(i,a),colorWrite:hi,polygonOffset:t?cn:null})}}const cn={factor:0,units:-4},Lt=Ot().vec2u8("uv0",{glNormalized:!0}),qt=Ot().vec3f("position").vec3f("normal").vec4i16("uvi").vec4u8("color").vec2f("size").f32("rotation").vec4f("centerOffsetAndDistance").vec4f("featureAttribute"),un=qt.clone().vec4u8("olidColor");function Nt(){return Go()?un:qt}class _ extends Wo{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1}}$([B()],_.prototype,"screenCenterOffsetUnitsEnabled",void 0),$([B()],_.prototype,"occlusionTestEnabled",void 0),$([B()],_.prototype,"signedDistanceFieldEnabled",void 0),$([B()],_.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),$([B()],_.prototype,"hasVVSize",void 0),$([B()],_.prototype,"hasVVColor",void 0),$([B()],_.prototype,"hasVerticalOffset",void 0),$([B()],_.prototype,"hasScreenSizePerspective",void 0),$([B()],_.prototype,"hasRotation",void 0),$([B()],_.prototype,"debugDrawLabelBorder",void 0),$([B()],_.prototype,"hasPolygonOffset",void 0),$([B()],_.prototype,"depthTestEnabled",void 0),$([B()],_.prototype,"pixelSnappingEnabled",void 0),$([B()],_.prototype,"draped",void 0),$([B()],_.prototype,"terrainDepthTest",void 0),$([B()],_.prototype,"cullAboveTerrain",void 0),$([B()],_.prototype,"occlusionPass",void 0),$([B()],_.prototype,"occludedFragmentFade",void 0),$([B()],_.prototype,"horizonCullingEnabled",void 0),$([B()],_.prototype,"isFocused",void 0);class pn extends Yo{constructor(e,i){super(e,xn),this.produces=new Map([[13,t=>Ie(t)&&!this.parameters.drawAsLabel],[14,t=>Ie(t)&&this.parameters.drawAsLabel],[12,()=>this.parameters.occlusionTest],[18,t=>this.parameters.draped&&Ie(t)]]),this._visible=!0,this._configuration=new _(i)}getConfiguration(e,i){const t=this.parameters.draped;return super.getConfiguration(e,i,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=t,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=i.slot===12,this._configuration.occludedFragmentFade=!t&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||i.slot===12,xt(e)&&(this._configuration.debugDrawLabelBorder=!!Xo.LABELS_SHOW_BORDER),this._configuration.oitPass=i.oitPass,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration}intersect(e,i,t,n,a,s){const{options:{selectionMode:r,hud:l,excludeLabels:c},point:u,camera:f}=t,{parameters:h}=this;if(!r||!l||c&&h.isLabel||!e.visible||!u||!f)return;const b=e.attributes.get("featureAttribute"),y=b==null?null:rt(b.data,Je),{scaleX:m,scaleY:d}=Ke(y,h,f.pixelRatio);nt(je,i),e.attributes.has("featureAttribute")&&hn(je);const g=e.attributes.get("position"),v=e.attributes.get("size"),x=e.attributes.get("normal"),A=e.attributes.get("rotation"),p=e.attributes.get("centerOffsetAndDistance");St(g.size>=3);const O=ge(h),C=this.parameters.centerOffsetUnits==="screen";for(let P=0;P<g.data.length/g.size;P++){const I=P*g.size;te(V,g.data[I],g.data[I+1],g.data[I+2]),se(V,V,i),se(V,V,f.viewMatrix);const w=P*p.size;if(te(F,p.data[w],p.data[w+1],p.data[w+2]),!C&&(V[0]+=F[0],V[1]+=F[1],F[2]!==0)){const j=F[2];L(F,V),W(V,V,G(F,F,j))}const T=P*x.size;if(te(re,x.data[T],x.data[T+1],x.data[T+2]),Ye(re,je,f,ye),Ze(this.parameters,V,ye,f,ve),f.applyProjection(V,M),M[0]>-1){C&&(F[0]||F[1])&&(M[0]+=F[0]*f.pixelRatio,F[1]!==0&&(M[1]+=ve.alignmentEvaluator.apply(F[1])*f.pixelRatio),f.unapplyProjection(M,V)),M[0]+=this.parameters.screenOffset[0]*f.pixelRatio,M[1]+=this.parameters.screenOffset[1]*f.pixelRatio,M[0]=Math.floor(M[0]),M[1]=Math.floor(M[1]);const j=P*v.size;E[0]=v.data[j],E[1]=v.data[j+1],ve.evaluator.applyVec2(E,E);const J=Xt*f.pixelRatio;let le=0;h.textureIsSignedDistanceField&&(le=Math.min(h.outlineSize,.5*E[0])*f.pixelRatio/2),E[0]*=m,E[1]*=d;const K=P*A.size,k=h.rotation+A.data[K];if(Xe(u,M[0],M[1],E,J,le,k,h,O)){const ne=t.ray;if(se(Me,V,at(Yt,f.viewMatrix)),M[0]=u[0],M[1]=u[1],f.unprojectFromRenderScreen(M,V)){const S=R();N(S,ne.direction);const me=1/xe(S);G(S,S,me),s(ct(ne.origin,V)*me,S,-1,Me)}}}}}intersectDraped(e,i,t,n,a){const s=e.attributes.get("position"),r=e.attributes.get("size"),l=e.attributes.get("rotation"),c=this.parameters,u=ge(c),f=e.attributes.get("featureAttribute"),h=f==null?null:rt(f.data,Je),{scaleX:b,scaleY:y}=Ke(h,c,e.screenToWorldRatio),m=vn*e.screenToWorldRatio;for(let d=0;d<s.data.length/s.size;d++){const g=d*s.size,v=s.data[g],x=s.data[g+1],A=d*r.size;E[0]=r.data[A],E[1]=r.data[A+1];let p=0;c.textureIsSignedDistanceField&&(p=Math.min(c.outlineSize,.5*E[0])*e.screenToWorldRatio/2),E[0]*=b,E[1]*=y;const O=d*l.size,C=c.rotation+l.data[O];Xe(t,v,x,E,m,p,C,c,u)&&n(a.distance,a.normal,-1)}}createBufferWriter(){return new wn}applyShaderOffsetsView(e,i,t,n,a,s,r){const l=Ye(i,t,a,ye);return this._applyVerticalGroundOffsetView(e,l,a,r),Ze(this.parameters,r,l,a,s),this._applyPolygonOffsetView(r,l,n[3],a,r),this._applyCenterOffsetView(r,n,r),r}applyShaderOffsetsNDC(e,i,t,n,a){return this._applyCenterOffsetNDC(e,i,t,n),a!=null&&N(a,n),this._applyPolygonOffsetNDC(n,i,t,n),n}_applyPolygonOffsetView(e,i,t,n,a){const s=n.aboveGround?1:-1;let r=Math.sign(t);r===0&&(r=s);const l=s*r;if(this.parameters.shaderPolygonOffset<=0)return N(a,e);const c=co(Math.abs(i.cosAngle),.01,1),u=1-Math.sqrt(1-c*c)/c/n.viewport[2];return G(a,e,l>0?u:1/u),a}_applyVerticalGroundOffsetView(e,i,t,n){const a=xe(e),s=t.aboveGround?1:-1,r=t.computeRenderPixelSizeAtDist(a)*Ut,l=G(V,i.normal,s*r);return q(n,e,l),n}_applyCenterOffsetView(e,i,t){const n=this.parameters.centerOffsetUnits!=="screen";return t!==e&&N(t,e),n&&(t[0]+=i[0],t[1]+=i[1],i[2]&&(L(re,t),Co(t,t,G(re,re,i[2])))),t}_applyCenterOffsetNDC(e,i,t,n){const a=this.parameters.centerOffsetUnits!=="screen";return n!==e&&N(n,e),a||(n[0]+=i[0]/t.fullWidth*2,n[1]+=i[1]/t.fullHeight*2),n}_applyPolygonOffsetNDC(e,i,t,n){const a=this.parameters.shaderPolygonOffset;if(e!==n&&N(n,e),a){const s=t.aboveGround?1:-1,r=s*Math.sign(i[3]);n[2]-=(r||s)*a}return n}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:i,outlineColor:t}=this.parameters,n=e[3]>=oe||i>=oe&&t[3]>=oe;return this._visible&&n}createGLMaterial(e){return new fn(e)}calculateRelativeScreenBounds(e,i,t=et()){return dn(this.parameters,e,i,t),t[2]=t[0]+e[0],t[3]=t[1]+e[1],t}}class fn extends si{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(ln,e)}}function dn(o,e,i,t){t[0]=o.anchorPosition[0]*-e[0]+o.screenOffset[0]*i,t[1]=o.anchorPosition[1]*-e[1]+o.screenOffset[1]*i}function Ye(o,e,i,t){return tn(e)&&(e=nt(gn,e)),Ao(t.normal,o,e),se(t.normal,t.normal,i.viewInverseTransposeMatrix),t.cosAngle=$e(kt,mn),t}function hn(o){const e=o[0],i=o[1],t=o[2],n=o[3],a=o[4],s=o[5],r=o[6],l=o[7],c=o[8],u=1/Math.sqrt(e*e+i*i+t*t),f=1/Math.sqrt(n*n+a*a+s*s),h=1/Math.sqrt(r*r+l*l+c*c);return o[0]=e*u,o[1]=i*u,o[2]=t*u,o[3]=n*f,o[4]=a*f,o[5]=s*f,o[6]=r*h,o[7]=l*h,o[8]=c*h,o}function Xe(o,e,i,t,n,a,s,r,l){let c=e-n-t[0]*l[0],u=c+t[0]+2*n,f=i-n-t[1]*l[1],h=f+t[1]+2*n;const b=r.distanceFieldBoundingBox;return r.textureIsSignedDistanceField&&b!=null&&(c+=t[0]*b[0],f+=t[1]*b[1],u-=t[0]*(1-b[2]),h-=t[1]*(1-b[3]),c-=a,u+=a,f-=a,h+=a),_e(Wt,e,i),uo(be,o,Wt,po(s)),be[0]>c&&be[0]<u&&be[1]>f&&be[1]<h}const ve=new Qo,V=R(),re=R(),M=Pe(),kt=R(),Me=R(),be=Ge(),Wt=Ge(),je=st(),gn=st(),Yt=tt(),Te=Pe(),F=R(),Qe=R(),Je=Pe(),ye={normal:kt,cosAngle:0},Xt=1,vn=2,E=zt(0,0),mn=it(0,0,1);class xn extends Jo{constructor(){super(...arguments),this.renderOccluded=1,this.isDecoration=!1,this.color=lt(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=zt(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=lt(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=Pe(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class wn{constructor(){this.layout=Lt,this.instanceLayout=Nt()}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,i,t,n,a,s){const{position:r,normal:l,color:c,size:u,rotation:f,centerOffsetAndDistance:h,featureAttribute:b,uvi:y}=a;ei(t.get("position"),e,r,s),ti(t.get("normal"),i,l,s);const m=t.get("position").indices.length;let d=0,g=0,v=we,x=we;const A=t.get("uvi")?.data;A&&A.length>=4&&(d=A[0],g=A[1],v=A[2],x=A[3]);for(let p=0;p<m;++p){const O=s+p;y.setValues(O,d,g,v,x)}if(oi(t.get("color"),4,c,s),wt(t.get("size"),u,s),ii(t.get("rotation"),f,s),t.get("centerOffsetAndDistance")?bt(t.get("centerOffsetAndDistance"),h,s):yt(h,s,m),t.get("featureAttribute")?bt(t.get("featureAttribute"),b,s):yt(b,s,m),n!=null){const p=t.get("position")?.indices;if(p){const O=p.length,C=a.getField("olidColor",pi);ni(n,C,O,s)}}return{numVerticesPerItem:1,numItems:m}}writeBaseInstance(e,i){const{uv0:t}=i;wt(e.get("uv0"),t,0)}intersect(e,i,t,n,a,s,r){const{options:{selectionMode:l,hud:c,excludeLabels:u},point:f,camera:h}=n;if(!l||!c||u&&i.isLabel||!f)return;const b=this.instanceLayout.createView(e),{position:y,normal:m,rotation:d,size:g,featureAttribute:v,centerOffsetAndDistance:x}=b,A=i.centerOffsetUnits==="screen",p=ge(i);if(y==null||m==null||d==null||g==null||x==null||h==null)return;const O=v==null?null:v.getVec(0,Je),{scaleX:C,scaleY:P}=Ke(O,i,h.pixelRatio),I=y.count;for(let w=0;w<I;w++){if(y.getVec(w,V),t!=null&&q(V,V,t),se(V,V,h.viewMatrix),x.getVec(w,Te),te(F,Te[0],Te[1],Te[2]),!A&&(V[0]+=F[0],V[1]+=F[1],F[2]!==0)){const T=F[2];L(F,V),W(V,V,G(F,F,T))}if(m.getVec(w,re),Ye(re,je,h,ye),Ze(i,V,ye,h,ve),h.applyProjection(V,M),M[0]>-1){A&&(F[0]||F[1])&&(M[0]+=F[0]*h.pixelRatio,F[1]!==0&&(M[1]+=ve.alignmentEvaluator.apply(F[1])*h.pixelRatio),h.unapplyProjection(M,V)),M[0]+=i.screenOffset[0]*h.pixelRatio,M[1]+=i.screenOffset[1]*h.pixelRatio,M[0]=Math.floor(M[0]),M[1]=Math.floor(M[1]),g.getVec(w,E),ve.evaluator.applyVec2(E,E);const T=Xt*h.pixelRatio;let j=0;i.textureIsSignedDistanceField&&(j=Math.min(i.outlineSize,.5*E[0])*h.pixelRatio/2),E[0]*=C,E[1]*=P;const J=d.get(w),le=i.rotation+J;if(Xe(f,M[0],M[1],E,T,j,le,i,p)){const K=n.ray;if(se(Me,V,at(Yt,h.viewMatrix)),M[0]=f[0],M[1]=f[1],h.unprojectFromRenderScreen(M,V)){const k=R();N(k,K.direction);const ne=1/xe(k);G(k,k,ne),r(ct(K.origin,V)*ne,k,w,Me)}}}}}}function Ke(o,e,i){return o==null||e.vvSize==null?{scaleX:i,scaleY:i}:(Ko(Qe,e,o),{scaleX:Qe[0]*i,scaleY:Qe[1]*i})}function Ze(o,e,i,t,n){if(!o.verticalOffset?.screenLength){const l=xe(e);return n.update(i.cosAngle,l,o.screenSizePerspective,o.screenSizePerspectiveMinPixelReferenceSize,o.screenSizePerspectiveAlignment,null),e}const a=xe(e),s=o.screenSizePerspectiveAlignment??o.screenSizePerspective,r=Zo(t,a,o.verticalOffset,i.cosAngle,s,o.screenSizePerspectiveMinPixelReferenceSize);return n.update(i.cosAngle,a,o.screenSizePerspective,o.screenSizePerspectiveMinPixelReferenceSize,o.screenSizePerspectiveAlignment,null),G(i.normal,i.normal,r),q(e,e,i.normal)}function bn(o){return o.type==="point"}const yn=Object.freeze(Object.defineProperty({__proto__:null,build:It,calculateAnchorPosition:ge,fullUV:we},Symbol.toStringTag,{value:"Module"}));export{yi as A,Pi as D,Ri as E,Ci as G,Xi as M,Ui as Q,bi as U,Si as Z,Wi as a,Ki as b,Ni as c,Bt as d,Oi as e,ki as f,We as g,qi as h,pn as i,Li as j,Vt as k,De as l,Qi as m,Ht as n,Yi as o,_t as p,Et as q,Gi as r,bn as t,Rt as u,xi as w,Ji as y};
