import{bA as V,bB as bt,w as q,bC as I,t as k,r as G,bD as W,bi as Pt,bh as N,bE as St,c as Gt,bF as C,bG as v,bH as it,bI as Nt,bJ as Et,f as kt,bK as ot}from"./main-8eb577c9.js";var Q;function xt(t,n,i){return!St(t,n,i)}function j(t,n,i){const r=xt(t,n,i);if(r&&!V())throw new Gt("rasterprojectionhelper-project","projection engine is not loaded");return r}(function(t){t[t.None=0]="None",t[t.North=1]="North",t[t.South=2]="South",t[t.Both=3]="Both"})(Q||(Q={}));const st=(t,n,i,r=0)=>{if(i[0]===1)return[0,0];let s=1,e=-1,o=1,u=-1;for(let l=0;l<t.length;l+=2)isNaN(t[l])||(s=s>t[l]?t[l]:s,e=e>t[l]?e:t[l],o=o>t[l+1]?t[l+1]:o,u=u>t[l+1]?u:t[l+1]);const{cols:f,rows:c}=n,a=(e-s)/f/i[0],d=(u-o)/c/i[1],p=2*r;let h=0,x=!1,m=[0,0];for(let l=0;l<f-3;l++){for(let w=0;w<c-3;w++){const y=l*c*2+2*w,g=(t[y]+t[y+4]+t[y+4*c]+t[y+4*c+4])/4,M=(t[y+1]+t[y+5]+t[y+4*c+1]+t[y+4*c+5])/4,R=Math.abs((g-t[y+2*c+2])/a),b=Math.abs((M-t[y+2*c+3])/d);if(R+b>h&&(h=R+b,m=[R,b]),p&&h>p){x=!0;break}}if(x)break}return m},Tt={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},B=32,$=4,X=$,D=new Map,H=new Map,F=500;async function jt(){V()||await bt()}function At(t,n,i){return j(t.spatialReference,n)?i?ot(n,t.spatialReference,t):ot(t.spatialReference,n,t):null}function rt(t,n,i,r=null){const s=t.spatialReference;if(s.equals(n))return t;j(s,n,r);const e=i.center,o=new q({xmin:e.x-t.x/2,xmax:e.x+t.x/2,ymin:e.y-t.y/2,ymax:e.y+t.y/2,spatialReference:s}),u=I(o,n,r),f=_(n);let c;if(k(u)||G(f)&&u.width>=f){const a=W(s)/W(n);c={x:t.x*a,y:t.y*a}}else c={x:u.width,y:u.height};return c}function E(t,n=.01){return W(t)?n/W(t):0}function at(t,n,i=null,r=!0){const s=t.spatialReference;if(s.equals(n))return t;j(s,n,i);const e=I(t,n,i);return r&&e&&mt([t],[e],s,n),e}function mt(t,n,i,r){const s=Y(i,!0),e=Y(r,!0),o=E(i,F),u=E(r,F);if(o&&G(s)&&G(e))for(let f=0;f<t.length;f++){const c=n[f];if(!c)continue;const{x:a}=t[f],{x:d}=c;d>=e[1]-u&&Math.abs(a-s[0])<o?c.x-=e[1]-e[0]:d<=e[0]+u&&Math.abs(a-s[1])<o&&(c.x+=e[1]-e[0])}}function vt(t){const{inSR:n,outSR:i,datumTransformation:r,preferPE:s}=t;if(n.equals(i)){const{points:e}=Z(t,null);return e}if(n.isWebMercator&&i.isWGS84||n.isWGS84&&i.isWebMercator)return _t(t);if(j(n,i,r)&&s){if(n.isGeographic)return lt(t);const e=L(n);if(G(e))return lt(t)}return Ct(t)}function Ct(t){const{points:n}=Z(t,null),{inSR:i,outSR:r,datumTransformation:s}=t,e=n.map(u=>new N(u[0],u[1],i)),o=I(e,r,s);return s&&mt(e,o,i,r),o.map(u=>u?[u.x,u.y]:[NaN,NaN])}function lt(t){const{inSR:n,outSR:i,datumTransformation:r}=t,s=L(n),{points:e,mask:o}=Z(t,s);if(!n.isGeographic){const f=n.wkid?C.coordsys(n.wkid):C.fromString(n.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,n.wkt);it.projToGeog(f,e.length,e)}if(G(r)&&r.steps.length){let f;if(i.isGeographic&&(f=e.map(([a])=>a>179.9955?1:a<-179.9955?-1:0)),r.steps.forEach(a=>{const d=a.wkid?C.geogtran(a.wkid):C.fromString(v.PE_TYPE_GEOGTRAN,a.wkt);Nt.geogToGeog(d,e.length,e,null,a.isInverse?v.PE_TRANSFORM_2_TO_1:v.PE_TRANSFORM_1_TO_2)}),f)for(let a=0;a<e.length;a++){const d=f[a],p=e[a][0],h=p>179.9955?1:p<-179.9955?-1:0;d&&h&&d!==h&&(e[a][0]=d>0?p+360:p-360)}}if(!i.isGeographic){const f=L(i,!0),c=G(f)&&f.isEnvelope?[f.bbox[1],f.bbox[3]]:[-90,90];zt(e,c);const a=i.wkid?C.coordsys(i.wkid):C.fromString(i.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,i.wkt);it.geogToProj(a,e.length,e)}let u=e;if(o&&e.length!==o.length){u=[];for(let f=0,c=0;f<o.length;f++)o[f]?u.push(e[c++]):u.push([NaN,NaN])}return u}function _t(t){const{cols:n,rows:i,xres:r,yres:s,usePixelCenter:e,inSR:o,outSR:u}=t;let{xmin:f,ymax:c}=t;e&&(f+=r/2,c-=s/2);const a=[],d=[],p=Math.max(n,i);for(let x=0;x<p;x++){const m=f+r*Math.min(n,x),l=c-s*Math.min(i,x),w=I(new N({x:m,y:l,spatialReference:o}),u);x<=n&&a.push(w.x),x<=i&&d.push(w.y)}const h=[];for(let x=0;x<n;x++)for(let m=0;m<i;m++)h.push([a[x],d[m]]);return h}function L(t,n=!1){let i=t.wkid||t.wkt;if(!i||t.isGeographic)return null;if(i=String(i),D.has(i)){const o=D.get(i);return n?o?.gcs:o?.pcs}const r=t.wkid?C.coordsys(t.wkid):C.fromString(t.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,t.wkt),s=ct(r,E(t,1e-4)),e=ct(r,0,!0);return D.set(i,{pcs:s,gcs:e}),n?e:s}function ct(t,n=0,i=!1){const r=Et.generate(t),s=i?t.horizonGcsGenerate():t.horizonPcsGenerate();if(!r||!s?.length)return null;let e=!1,o=s.find(l=>l.getInclusive()===1&&l.getKind()===1);if(!o){if(o=s.find(l=>l.getInclusive()===1&&l.getKind()===0),!o)return null;e=!0}const u=i?0:(r.getNorthPoleLocation()===2?1:0)|(r.getSouthPoleLocation()===2?2:0),f=r.isPannableRectangle(),c=o.getCoord();if(e)return{isEnvelope:e,isPannable:f,vertices:c,coef:null,bbox:[c[0][0]-n,c[0][1]-n,c[1][0]+n,c[1][1]+n],poleLocation:u};let a=0;const d=[];let[p,h]=c[0],[x,m]=c[0];for(let l=0,w=c.length;l<w;l++){a++,a===w&&(a=0);const[y,g]=c[l],[M,R]=c[a];if(R===g)d.push([y,M,g,R,2]);else{const b=(M-y)/(R-g||1e-4),P=y-b*g;g<R?d.push([b,P,g,R,0]):d.push([b,P,R,g,1])}p=p<y?p:y,h=h<g?h:g,x=x>y?x:y,m=m>g?m:g}return{isEnvelope:!1,isPannable:f,vertices:c,coef:d,bbox:[p,h,x,m],poleLocation:u}}function Z(t,n){const i=[],{cols:r,rows:s,xres:e,yres:o,usePixelCenter:u}=t;let{xmin:f,ymax:c}=t;if(u&&(f+=e/2,c-=o/2),k(n)){for(let h=0;h<r;h++)for(let x=0;x<s;x++)i.push([f+e*h,c-o*x]);return{points:i}}const a=new Uint8Array(r*s);if(n.isEnvelope){const{bbox:[h,x,m,l]}=n;for(let w=0,y=0;w<r;w++){const g=f+e*w,M=n.isPannable||g>=h&&g<=m;for(let R=0;R<s;R++,y++){const b=c-o*R;M&&b>=x&&b<=l&&(i.push([g,b]),a[y]=1)}}return{points:i,mask:a}}const d=n.coef,p=[];for(let h=0;h<s;h++){const x=c-o*h,m=[],l=[];for(let y=0;y<d.length;y++){const[g,M,R,b,P]=d[y];if(x===R&&R===b)m.push(g),m.push(M),l.push(2),l.push(2);else if(x>=R&&x<=b){const T=g*x+M;m.push(T),l.push(P)}}let w=m;if(m.length>2){let y=l[0]===2?0:l[0],g=m[0];w=[];for(let M=1;M<l.length;M++)l[M]===2&&M!==l.length-1||(l[M]!==y&&(w.push(y===0?Math.min(g,m[M-1]):Math.max(g,m[M-1])),y=l[M],g=m[M]),M===l.length-1&&w.push(l[M]===0?Math.min(g,m[M]):Math.max(g,m[M])));w.sort((M,R)=>M-R)}else m[0]>m[1]&&(w=[m[1],m[0]]);p.push(w)}for(let h=0,x=0;h<r;h++){const m=f+e*h;for(let l=0;l<s;l++,x++){const w=c-o*l,y=p[l];if(y.length===2)m>=y[0]&&m<=y[1]&&(i.push([m,w]),a[x]=1);else if(y.length>2){let g=!1;for(let M=0;M<y.length;M+=2)if(m>=y[M]&&m<=y[M+1]){g=!0;break}g&&(i.push([m,w]),a[x]=1)}}}return{points:i,mask:a}}function zt(t,n){const[i,r]=n;for(let s=0;s<t.length;s++){const e=t[s][1];(e<i||e>r)&&(t[s]=[NaN,NaN])}}function pt(t){const n=_(t[0].spatialReference);if(t.length<2||k(n))return t[0];let{xmin:i,xmax:r,ymin:s,ymax:e}=t[0];for(let o=1;o<t.length;o++){const u=t[o];r=u.xmax+n*o,s=Math.min(s,u.ymin),e=Math.max(e,u.ymax)}return new q({xmin:i,xmax:r,ymin:s,ymax:e,spatialReference:t[0].spatialReference})}function gt(t,n,i=null,r=!0){const s=t.spatialReference;if(s.equals(n))return t;const e=Lt(t),o=_(s,!0),u=_(n);if(e===0||k(o)||k(u)){const c=ft(t,n,i,r);if(k(o)&&G(u)&&Math.abs(c.width-u)<E(n)&&V()){const a=L(s);if(G(a)&&a.poleLocation===Q.None&&t.width<(a.bbox[2]-a.bbox[0])/2)return Ot(t,n)||c}return c}const f=t.clone().normalize();if(f.length===1&&t.xmax<o&&t.xmax-o/2>E(s)){const{xmin:c,xmax:a}=t;for(let d=0;d<=e;d++){const p=d===0?c:-o/2,h=d===e?a-o*d:o/2;f[d]=new q({xmin:p,xmax:h,ymin:t.ymin,ymax:t.ymax,spatialReference:s})}}return pt(f.map(c=>ft(c,n,i,r)).filter(G))}function Ot(t,n){const i=_(n);if(k(i))return null;let{xmin:r,ymin:s,xmax:e,ymax:o}=t;const u=t.spatialReference,f=new Pt({spatialReference:u,rings:[[[r,s],[e,s],[e,o],[r,o],[r,s]]]}),c=I(f,n);if(c.rings.length!==2||!c.rings[0].length||!c.rings[1].length)return null;const{rings:a}=c,d=E(u),p=new q({spatialReference:n});for(let h=0;h<2;h++){r=e=a[h][0][0],s=o=a[h][0][1];for(let x=0;x<a[h].length;x++)r=r>a[h][x][0]?a[h][x][0]:r,e=e<a[h][x][0]?a[h][x][0]:e,s=s>a[h][x][1]?a[h][x][1]:s,o=o<a[h][x][1]?a[h][x][1]:o;if(h===0)p.ymin=s,p.ymax=o,p.xmin=r,p.xmax=e;else if(p.ymin=Math.min(p.ymin,s),p.ymax=Math.max(p.ymax,o),Math.abs(e-i/2)<d)p.xmin=r,p.xmax=p.xmax+i;else{if(!(Math.abs(r+i/2)<d))return null;p.xmax=e+i}}return p}function ft(t,n,i=null,r=!0,s=!0){const e=t.spatialReference;if(e.equals(n)||!n)return t;j(e,n,i);const o=I(t,n,i);if(s&&n.isWebMercator&&o&&(o.ymax=Math.min(20037508342787e-6,o.ymax),o.ymin=Math.max(-20037508342787e-6,o.ymin),o.ymin>=o.ymax))return null;if(!r||!o)return o;const u=Y(e,!0),f=Y(n,!0);if(k(u)||k(f))return o;const c=E(e,.001),a=E(e,F),d=E(n,.001);if(Math.abs(o.xmin-f[0])<d&&Math.abs(o.xmax-f[1])<d){const p=Math.abs(t.xmin-u[0]),h=Math.abs(u[1]-t.xmax);if(p<c&&h>a){o.xmin=f[0];const x=[];x.push(new N(t.xmax,t.ymin,e)),x.push(new N(t.xmax,(t.ymin+t.ymax)/2,e)),x.push(new N(t.xmax,t.ymax,e));const m=x.map(l=>at(l,n,i)).filter(l=>!isNaN(l?.x)).map(l=>l.x);o.xmax=Math.max.apply(null,m)}if(h<c&&p>a){o.xmax=f[1];const x=[];x.push(new N(t.xmin,t.ymin,e)),x.push(new N(t.xmin,(t.ymin+t.ymax)/2,e)),x.push(new N(t.xmin,t.ymax,e));const m=x.map(l=>at(l,n,i)).filter(l=>!isNaN(l?.x)).map(l=>l.x);o.xmin=Math.min.apply(null,m)}}else{const p=E(n,.001);Math.abs(o.xmin-f[0])<p&&(o.xmin=f[0]),Math.abs(o.xmax-f[1])<p&&(o.xmax=f[1])}return o}function _(t,n=!1){if(!t)return null;const i=n?20037508342787e-6:20037508342788905e-9;return t.isWebMercator?2*i:t.wkid&&t.isGeographic?360:2*Tt[t.wkid]||null}function Y(t,n=!1){if(t.isGeographic)return[-180,180];const i=_(t,n);return G(i)?[-i/2,i/2]:null}function ut(t,n,i,r){let s=(t-n)/i;return s-Math.floor(s)!=0?s=Math.floor(s):r&&(s-=1),s}function Lt(t,n=!1){const i=_(t.spatialReference);if(k(i))return 0;const r=n?0:-(i/2),s=E(t.spatialReference),e=!n&&Math.abs(t.xmax-i/2)<s?i/2:t.xmax,o=!n&&Math.abs(t.xmin+i/2)<s?-i/2:t.xmin;return ut(e,r,i,!0)-ut(o,r,i,!1)}function Bt(t){const n=t.storageInfo.origin.x,i=_(t.spatialReference,!0);if(k(i))return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const r=i/2,{nativePixelSize:s,storageInfo:e,extent:o}=t,{maximumPyramidLevel:u,blockWidth:f,pyramidScalingFactor:c}=e;let a=s.x;const d=[],p=G(t.transform)&&t.transform.type==="gcs-shift",h=n+(p?0:r),x=p?i-n:r-n;for(let m=0;m<=u;m++){const l=(o.xmax-n)/a/f,w=l-Math.floor(l)==0?l:Math.ceil(l),y=x/a/f,g=y-Math.floor(y)==0?y:Math.ceil(y),M=Math.floor(h/a/f),R=Math.round(h/a)%f,b=(f-Math.round(x/a)%f)%f;d.push({resolutionX:a,blockWidth:f,datsetColumnCount:w,worldColumnCountFromOrigin:g,leftMargin:R,rightPadding:b,originColumnOffset:M}),a*=c}return{originX:n,halfWorldWidth:r,pyramidsInfo:d,hasGCSSShiftTransform:p}}function Wt(t){if(!t||t.isGeographic)return t;const n=String(t.wkid||t.wkt);let i;return H.has(n)?i=H.get(n):(i=(t.wkid?C.coordsys(t.wkid):C.fromString(v.PE_TYPE_PROJCS,t.wkt)).getGeogcs().getCode(),H.set(n,i)),new kt({wkid:i})}function $t(t){const n=t.isAdaptive&&t.spacing==null;let i=t.spacing||[B,B],r=U(t),s={cols:r.size[0]+1,rows:r.size[1]+1};const e=r.outofBoundPointCount>0&&r.outofBoundPointCount<r.offsets.length/2;let o=r.outofBoundPointCount===r.offsets.length/2||n&&e?[0,0]:st(r.offsets,s,i,X);const u=(o[0]+o[1])/2,f=t.projectedExtent.spatialReference,c=t.srcBufferExtent.spatialReference;if(n&&(e||u>X)&&(xt(f,c,t.datumTransformation)&&(f.isGeographic||G(L(f))),i=[$,$],r=U({...t,spacing:i}),s={cols:r.size[0]+1,rows:r.size[1]+1},o=st(r.offsets,s,i,X)),r.error=o,i[0]>1&&(r.coefficients=ht(r.offsets,s,e)),t.includeGCSGrid&&!f.isGeographic&&!f.isWebMercator)if(c.isGeographic)r.gcsGrid={offsets:r.offsets,coefficients:r.coefficients,spacing:i};else{const a=L(f);if(G(a)&&!a.isEnvelope){const d=Wt(f),p=gt(t.projectedExtent,d),{offsets:h}=U({...t,srcBufferExtent:p,spacing:i}),x=ht(h,s,e);r.gcsGrid={offsets:h,coefficients:x,spacing:i}}}return r}function U(t){const{projectedExtent:n,srcBufferExtent:i,pixelSize:r,datumTransformation:s,rasterTransform:e}=t,o=n.spatialReference,u=i.spatialReference,f=j(o,u),{xmin:c,ymin:a,xmax:d,ymax:p}=n,h=_(u),x=G(h)&&(t.hasWrapAround||e?.type==="gcs-shift"),m=t.spacing||[B,B],l=m[0]*r.x,w=m[1]*r.y,y=m[0]===1,g=Math.ceil((d-c)/l-.1/m[0])+(y?0:1),M=Math.ceil((p-a)/w-.1/m[1])+(y?0:1),R=vt({cols:g,rows:M,xmin:c,ymax:p,xres:l,yres:w,inSR:o,outSR:u,datumTransformation:s,preferPE:m[0]<=$,usePixelCenter:y}),b=[];let P,T=0;const O=y?-1:NaN,{xmin:tt,xmax:J,ymax:yt,width:dt,height:Mt}=i,wt=E(u,F),Rt=G(h)&&tt>0&&J>h/2;let nt=!1;if(f){const z=L(o);nt=G(z)&&z.poleLocation>0}for(let z=0;z<g;z++){const K=[];for(let A=0;A<M;A++){let S=R[z*M+A];if(x&&S[0]>J&&S[0]>h/2-wt?S[0]-=h:x&&z===0&&S[0]<0&&Rt&&!e&&(S[0]+=h),!S||isNaN(S[0])||isNaN(S[1]))b.push(O),b.push(O),K.push(null),T++;else{if(e){const et=e.inverseTransform(new N({x:S[0],y:S[1],spatialReference:u}));S=[et.x,et.y]}K.push(S),z>0&&x&&P[A]&&S[0]<P[A][0]&&(S[0]+=h,nt&&S[0]>J&&S[0]>h&&(S[0]-=h)),b.push((S[0]-tt)/dt),b.push((yt-S[1])/Mt)}}P=K}return{offsets:b,error:null,coefficients:null,outofBoundPointCount:T,spacing:m,size:y?[g,M]:[g-1,M-1]}}function ht(t,n,i){const{cols:r,rows:s}=n,e=new Float32Array((r-1)*(s-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),u=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let f=0;f<r-1;f++){for(let c=0;c<s-1;c++){let a=f*s*2+2*c;const d=t[a],p=t[a+1],h=t[a+2],x=t[a+3];a+=2*s;const m=t[a],l=t[a+1],w=t[a+2],y=t[a+3];let g=0,M=12*(c*(r-1)+f);for(let R=0;R<3;R++)e[M++]=o[g++]*d+o[g++]*h+o[g++]*w;g=0;for(let R=0;R<3;R++)e[M++]=o[g++]*p+o[g++]*x+o[g++]*y;g=0;for(let R=0;R<3;R++)e[M++]=u[g++]*d+u[g++]*m+u[g++]*w;g=0;for(let R=0;R<3;R++)e[M++]=u[g++]*p+u[g++]*l+u[g++]*y}if(i)for(let c=0;c<e.length;c++)isNaN(e[c])&&(e[c]=-1)}return e}function Ft(t){const n=t.clone().normalize();return n.length===1?n[0]:pt(n)}function Yt(t,n,i){const{storageInfo:r,pixelSize:s}=n;let e=0,o=!1;const{pyramidResolutions:u}=r;if(G(u)&&u.length){const p=(t.x+t.y)/2,h=u[u.length-1],x=(h.x+h.y)/2,m=(s.x+s.y)/2;if(p<=m)e=0;else if(p>=x)e=u.length,o=p/x>8;else{let w,y=m;for(let g=1;g<=u.length;g++){if(w=(u[g-1].x+u[g-1].y)/2,p<=w){p===w?e=g:i==="down"?(e=g-1,o=p/y>8):e=i==="up"||p-y>w-p||p/y>2?g:g-1;break}y=w}}const l=e===0?s:u[e-1];return o&&Math.min(l.x,l.y)*W(n.spatialReference)>19567&&(o=!1),{pyramidLevel:e,pyramidResolution:new N({x:l.x,y:l.y,spatialReference:n.spatialReference}),excessiveReading:o}}const f=Math.log(t.x/s.x)/Math.LN2,c=Math.log(t.y/s.y)/Math.LN2,a=n.storageInfo.maximumPyramidLevel||0;e=i==="down"?Math.floor(Math.min(f,c)):i==="up"?Math.ceil(Math.max(f,c)):Math.round((f+c)/2),e<0?e=0:e>a&&(o=e>a+3,e=a);const d=2**e;return{pyramidLevel:e,pyramidResolution:new N({x:d*n.nativePixelSize.x,y:d*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:o}}function qt(t,n,i=512,r=!0){const{extent:s,spatialReference:e,pixelSize:o}=t,u=rt(new N({x:o.x,y:o.y,spatialReference:e}),n,s);if(u==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const f=(u.x+u.y)/2,c=W(n),a=f*c*96*39.37,d=n.isGeographic?256/i*2958287637958547e-7:256/i*591657527591555e-6;let p=t.dataType==="vector-magdir"||t.dataType==="vector-uv";const h=gt(s,n),x=Math.min(Math.ceil(Math.log(Math.min(t.width,t.height)/32)/Math.LN2),Math.ceil(Math.log(d/2/a)/Math.LN2));if(!p&&r&&(n.isGeographic||n.isWebMercator)&&(p=h.xmin*h.xmax<0,!p&&x<3)){const P=_(n);if(G(P)){const T=2**x*f*i,O=Math.ceil(P/T);p=O===1||O===2&&P/2-h.xmax<T}}let m,l=a;const w=1.001,y=Math.min(2,Math.max(1.414,t.storageInfo?.pyramidScalingFactor||2));if(p){l=d;const P=n.isGeographic?1341104507446289e-21:.29858214164761665,T=P*(96*c*39.37),O=n.isGeographic?4326:3857;m=rt(new N({x:P,y:P,spatialReference:{wkid:O}}),e,h),m.x*=l/T,m.y*=l/T}else{m={x:o.x,y:o.y};let P=0;for(;l<d*(w/2)&&P<x;)P++,l*=y,m.x*=y,m.y*=y;Math.max(l,d)/Math.min(l,d)<=w&&(l=d)}const g=[l],M=[{x:m.x,y:m.y}],R=70.5310735,b=Math.min(R,a)/w;for(;l>=b;)l/=y,m.x/=y,m.y/=y,g.push(l),M.push({x:m.x,y:m.y});return{projectedPixelSize:u,scales:g,srcResolutions:M,isCustomTilingScheme:!p}}export{$t as $,rt as C,gt as J,xt as M,Lt as Q,jt as T,_ as U,Bt as V,qt as i,at as j,Ft as n,Yt as o,At as v};
