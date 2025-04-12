import { ba as E$1, bb as B$1, aH as M$1, bc as U$1, bd as W$1, q as q$1, aE as j$1, F as x$1, al as s, be as H$1, s as s$1, bf as E$2, bg as s$2, bh as P$1, bi as a, bj as S$1, bk as f$1, bl as V$1 } from './main-BpBTVFw9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var d;function M(e,t,n){return !H$1(e,t,n)}function w(e,n,i){const o=M(e,n,i);if(o&&!E$1())throw new s$1("rasterprojectionhelper-project","projection engine is not loaded");return o}!function(e){e[e.None=0]="None",e[e.North=1]="North",e[e.South=2]="South",e[e.Both=3]="Both";}(d||(d={}));const R=(e,t,n,i=0)=>{if(1===n[0])return [0,0];let o=1,r=-1,s=1,a=-1;for(let g=0;g<e.length;g+=2)isNaN(e[g])||(o=o>e[g]?e[g]:o,r=r>e[g]?r:e[g],s=s>e[g+1]?e[g+1]:s,a=a>e[g+1]?a:e[g+1]);const{cols:l,rows:c}=t,f=(r-o)/l/n[0],u=(a-s)/c/n[1],m=2*i;let x=0,h=!1,p=[0,0];for(let g=0;g<l-3;g++){for(let t=0;t<c-3;t++){const n=g*c*2+2*t,i=(e[n]+e[n+4]+e[n+4*c]+e[n+4*c+4])/4,o=(e[n+1]+e[n+5]+e[n+4*c+1]+e[n+4*c+5])/4,r=Math.abs((i-e[n+2*c+2])/f),s=Math.abs((o-e[n+2*c+3])/u);if(r+s>x&&(x=r+s,p=[r,s]),m&&x>m){h=!0;break}}if(h)break}return p},S={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},P=32,b=4,G=b,k=new Map,N=new Map,E=500;async function T(){E$1()||await B$1();}function v(e,t,n){w(e.spatialReference,t);return n?V$1(t,e.spatialReference,e):V$1(e.spatialReference,t,e)}function C(e,t,i,o=null){const r=e.spatialReference;if(r.equals(t))return e;w(r,t,o);const s=i.center,a=new M$1({xmin:s.x-e.x/2,xmax:s.x+e.x/2,ymin:s.y-e.y/2,ymax:s.y+e.y/2,spatialReference:r}),l=U$1(a,t,o),c=D(t);let f;if(null==l||null!=c&&l.width>=c){const i=W$1(r)/W$1(t);f={x:e.x*i,y:e.y*i};}else f={x:l.width,y:l.height};return f}function _(e,t=.01){return W$1(e)?t/W$1(e):0}function j(e,t,n=null,i=!0){const o=e.spatialReference;if(o.equals(t))return e;w(o,t,n);const r=U$1(e,t,n);return i&&r?(z([e],[r],o,t),r):r}function z(e,t,n,i){const o=H(n,!0),r=H(i,!0),s=_(n,E),a=_(i,E);if(s&&null!=o&&null!=r)for(let l=0;l<e.length;l++){const n=t[l];if(!n)continue;const{x:i}=e[l],{x:c}=n;c>=r[1]-a&&Math.abs(i-o[0])<s?n.x-=r[1]-r[0]:c<=r[0]+a&&Math.abs(i-o[1])<s&&(n.x+=r[1]-r[0]);}}function L(e){const{inSR:t,outSR:n,datumTransformation:i,preferPE:o}=e;if(t.equals(n)){const{points:t}=F(e,null);return t}if(t.isWebMercator&&n.isWGS84||t.isWGS84&&n.isWebMercator)return O(e);if(w(t,n,i)&&o){if(t.isGeographic)return W(e);if(null!=A(t))return W(e)}return I(e)}function I(e){const{points:t}=F(e,null),{inSR:n,outSR:i,datumTransformation:o}=e,r=t.map((e=>new x$1(e[0],e[1],n))),s=U$1(r,i,o);return o&&z(r,s,n,i),s.map((e=>e?[e.x,e.y]:[NaN,NaN]))}function W(e){const{inSR:t,outSR:n,datumTransformation:a$1}=e,l=A(t),{points:c,mask:f}=F(e,l);if(!t.isGeographic){const e=t.wkid?E$2.coordsys(t.wkid):E$2.fromString(t.isGeographic?s$2.PE_TYPE_GEOGCS:s$2.PE_TYPE_PROJCS,t.wkt2||t.wkt);P$1.projToGeog(e,c.length,c);}if(null!=a$1&&a$1.steps.length){let e;const t=179.9955;if(n.isGeographic&&(e=c.map((([e])=>e>t?1:e<-t?-1:0))),a$1.steps.forEach((e=>{const t=e.wkid?E$2.geogtran(e.wkid):E$2.fromString(s$2.PE_TYPE_GEOGTRAN,e.wkt);a.geogToGeog(t,c.length,c,null,e.isInverse?s$2.PE_TRANSFORM_2_TO_1:s$2.PE_TRANSFORM_1_TO_2);})),e)for(let n=0;n<c.length;n++){const i=e[n],o=c[n][0],r=o>t?1:o<-t?-1:0;i&&r&&i!==r&&(c[n][0]=i>0?o+360:o-360);}}if(!n.isGeographic){const e=A(n,!0),t=null!=e&&e.isEnvelope?[e.bbox[1],e.bbox[3]]:[-90,90];Y(c,t);const s=n.wkid?E$2.coordsys(n.wkid):E$2.fromString(n.isGeographic?s$2.PE_TYPE_GEOGCS:s$2.PE_TYPE_PROJCS,n.wkt2||n.wkt);P$1.geogToProj(s,c.length,c);}let u=c;if(f&&c.length!==f.length){u=[];for(let e=0,t=0;e<f.length;e++)f[e]?u.push(c[t++]):u.push([NaN,NaN]);}return u}function O(e){const{cols:t,rows:n,xres:i,yres:o,usePixelCenter:r,inSR:s,outSR:a}=e;let{xmin:l,ymax:c}=e;r&&(l+=i/2,c-=o/2);const f=[],u=[],x=Math.max(t,n);for(let g=0;g<x;g++){const e=l+i*Math.min(t,g),r=c-o*Math.min(n,g),x=U$1(new x$1({x:e,y:r,spatialReference:s}),a);g<=t&&f.push(x.x),g<=n&&u.push(x.y);}const h=[];for(let m=0;m<t;m++)for(let e=0;e<n;e++)h.push([f[m],u[e]]);return h}function A(e,t=!1){let n=e.wkid||e.wkt2||e.wkt;if(!n||e.isGeographic)return null;if(n=String(n),k.has(n)){const e=k.get(n);return t?e?.gcs:e?.pcs}const r=e.wkid?E$2.coordsys(e.wkid):E$2.fromString(e.isGeographic?s$2.PE_TYPE_GEOGCS:s$2.PE_TYPE_PROJCS,e.wkt2||e.wkt),s=B(r,_(e,1e-4)),a=B(r,0,!0);return k.set(n,{pcs:s,gcs:a}),t?a:s}function B(e,t=0,n=!1){const i=S$1.generate(e),o=n?e.horizonGcsGenerate():e.horizonPcsGenerate();if(!i||!o?.length)return null;let r=!1,s=o.find((e=>1===e.getInclusive()&&1===e.getKind()));if(!s){if(s=o.find((e=>1===e.getInclusive()&&0===e.getKind())),!s)return null;r=!0;}const l=n?0:(2===i.getNorthPoleLocation()?1:0)|(2===i.getSouthPoleLocation()?2:0),c=i.isPannableRectangle(),f=s.getCoord();if(r)return {isEnvelope:r,isPannable:c,vertices:f,coef:null,bbox:[f[0][0]-t,f[0][1]-t,f[1][0]+t,f[1][1]+t],poleLocation:l};let u=0;const m=[];let[x,h]=f[0],[p,g]=f[0];for(let a=0,y=f.length;a<y;a++){u++,u===y&&(u=0);const[e,t]=f[a],[n,i]=f[u];if(i===t)m.push([e,n,t,i,2]);else {const o=(n-e)/(i-t||1e-4),r=e-o*t;t<i?m.push([o,r,t,i,0]):m.push([o,r,i,t,1]);}x=x<e?x:e,h=h<t?h:t,p=p>e?p:e,g=g>t?g:t;}return {isEnvelope:!1,isPannable:c,vertices:f,coef:m,bbox:[x,h,p,g],poleLocation:l}}function F(e,t){const n=[],{cols:i,rows:o,xres:r,yres:s,usePixelCenter:a}=e;let{xmin:l,ymax:c}=e;if(a&&(l+=r/2,c-=s/2),null==t){for(let e=0;e<i;e++)for(let t=0;t<o;t++)n.push([l+r*e,c-s*t]);return {points:n}}const f=new Uint8Array(i*o);if(t.isEnvelope){const{bbox:[e,a,u,m]}=t;for(let x=0,h=0;x<i;x++){const i=l+r*x,p=t.isPannable||i>=e&&i<=u;for(let e=0;e<o;e++,h++){const t=c-s*e;p&&t>=a&&t<=m&&(n.push([i,t]),f[h]=1);}}return {points:n,mask:f}}const u=t.coef,m=[];for(let x=0;x<o;x++){const e=c-s*x,t=[],n=[];for(let o=0;o<u.length;o++){const[i,r,s,a,l]=u[o];if(e===s&&s===a)t.push(i),t.push(r),n.push(2),n.push(2);else if(e>=s&&e<=a){const o=i*e+r;t.push(o),n.push(l);}}let i=t;if(t.length>2){let e=2===n[0]?0:n[0],o=t[0];i=[];for(let r=1;r<n.length;r++)2===n[r]&&r!==n.length-1||(n[r]!==e&&(i.push(0===e?Math.min(o,t[r-1]):Math.max(o,t[r-1])),e=n[r],o=t[r]),r===n.length-1&&i.push(0===n[r]?Math.min(o,t[r]):Math.max(o,t[r])));i.sort(((e,t)=>e-t));}else t[0]>t[1]&&(i=[t[1],t[0]]);m.push(i);}for(let x=0,h=0;x<i;x++){const e=l+r*x;for(let t=0;t<o;t++,h++){const i=c-s*t,o=m[t];if(2===o.length)e>=o[0]&&e<=o[1]&&(n.push([e,i]),f[h]=1);else if(o.length>2){let t=!1;for(let n=0;n<o.length;n+=2)if(e>=o[n]&&e<=o[n+1]){t=!0;break}t&&(n.push([e,i]),f[h]=1);}}}return {points:n,mask:f}}function Y(e,t){const[n,i]=t;for(let o=0;o<e.length;o++){const t=e[o][1];(t<n||t>i)&&(e[o]=[NaN,NaN]);}}function q(e,t){const n=D(e[0].spatialReference);if(e.length<2||null==n)return e[0];if(t=t??_(e[0].spatialReference),1===(e=e.filter((e=>e.width>t))).length)return e[0];let{xmin:i,xmax:o,ymin:r,ymax:s}=e[0];for(let a=1;a<e.length;a++){const t=e[a];o=t.xmax+n*a,r=Math.min(r,t.ymin),s=Math.max(s,t.ymax);}return new M$1({xmin:i,xmax:o,ymin:r,ymax:s,spatialReference:e[0].spatialReference})}function J(t,n,i=null,o=!0){const r=t.spatialReference;if(r.equals(n))return t;const s=V(t),a=D(r,!0),l=D(n);if(0===s||null==a||null==l){const e=K(t,n,i,o);if(null==a&&null!=l&&Math.abs(e.width-l)<_(n)&&E$1()){const i=A(r);if(null!=i&&i.poleLocation===d.None&&t.width<(i.bbox[2]-i.bbox[0])/2)return X(t,n)||e}return e}const f=t.clone().normalize();if(1===f.length&&t.xmax<a&&t.xmax-a/2>_(r)){const{xmin:e,xmax:n}=t;for(let i=0;i<=s;i++){const o=0===i?e:-a/2,l=i===s?n-a*i:a/2;f[i]=new M$1({xmin:o,xmax:l,ymin:t.ymin,ymax:t.ymax,spatialReference:r});}}return q(f.map((e=>K(e,n,i,o))).filter(q$1))}function U(e,t,n){if("extent"===e.type){const{xmin:t,ymin:n,xmax:i,ymax:o,spatialReference:r}=e;e=new j$1({rings:[[[t,o],[i,o],[i,n],[t,n],[t,o]]],spatialReference:r});}return e.spatialReference.equals(t)?e:(w(e.spatialReference,t,n),U$1(e,t,n))}function X(e,t){const n=D(t);if(null==n)return null;let{xmin:i,ymin:o,xmax:r,ymax:s}=e;const a=e.spatialReference,l=new j$1({spatialReference:a,rings:[[[i,o],[r,o],[r,s],[i,s],[i,o]]]}),c=U$1(l,t);if(2!==c.rings.length||!c.rings[0].length||!c.rings[1].length)return null;const{rings:f}=c,u=_(a),x=new M$1({spatialReference:t});for(let m=0;m<2;m++){i=r=f[m][0][0],o=s=f[m][0][1];for(let e=0;e<f[m].length;e++)i=i>f[m][e][0]?f[m][e][0]:i,r=r<f[m][e][0]?f[m][e][0]:r,o=o>f[m][e][1]?f[m][e][1]:o,s=s<f[m][e][1]?f[m][e][1]:s;if(0===m)x.ymin=o,x.ymax=s,x.xmin=i,x.xmax=r;else if(x.ymin=Math.min(x.ymin,o),x.ymax=Math.max(x.ymax,s),Math.abs(r-n/2)<u)x.xmin=i,x.xmax=x.xmax+n;else {if(!(Math.abs(i+n/2)<u))return null;x.xmax=r+n;}}return x}function K(e,t,n=null,i=!0,o=!0){const r=e.spatialReference;if(r.equals(t)||!t)return e;w(r,t,n);const s=U$1(e,t,n);if(o&&t.isWebMercator&&s&&(s.ymax=Math.min(20037508.342787,s.ymax),s.ymin=Math.max(-20037508.342787,s.ymin),s.ymin>=s.ymax))return null;if(!i||!s)return s;const a=H(r,!0),l=H(t,!0);if(null==a||null==l)return s;const c=_(r,.001),f=_(r,E),u=_(t,.001);if(Math.abs(s.xmin-l[0])<u&&Math.abs(s.xmax-l[1])<u){const i=Math.abs(e.xmin-a[0]),o=Math.abs(a[1]-e.xmax);if(i<c&&o>f){s.xmin=l[0];const i=[];i.push(new x$1(e.xmax,e.ymin,r)),i.push(new x$1(e.xmax,(e.ymin+e.ymax)/2,r)),i.push(new x$1(e.xmax,e.ymax,r));const o=i.map((e=>j(e,t,n))).filter((e=>!isNaN(e?.x))).map((e=>e.x));s.xmax=Math.max.apply(null,o);}if(o<c&&i>f){s.xmax=l[1];const i=[];i.push(new x$1(e.xmin,e.ymin,r)),i.push(new x$1(e.xmin,(e.ymin+e.ymax)/2,r)),i.push(new x$1(e.xmin,e.ymax,r));const o=i.map((e=>j(e,t,n))).filter((e=>!isNaN(e?.x))).map((e=>e.x));s.xmin=Math.min.apply(null,o);}}else {const e=_(t,.001);Math.abs(s.xmin-l[0])<e&&(s.xmin=l[0]),Math.abs(s.xmax-l[1])<e&&(s.xmax=l[1]);}return s}function D(e,t=!1){if(!e)return null;const n=t?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*S[e.wkid]||null}function H(e,t=!1){if(e.isGeographic)return [-180,180];const n=D(e,t);return null!=n?[-n/2,n/2]:null}function Q(e,t,n,i){let o=(e-t)/n;return o-Math.floor(o)!=0?o=Math.floor(o):i&&(o-=1),o}function V(e,t=!1){const n=D(e.spatialReference);if(null==n)return 0;const i=t?0:-(n/2),o=_(e.spatialReference),r=!t&&Math.abs(e.xmax-n/2)<o?n/2:e.xmax,s=!t&&Math.abs(e.xmin+n/2)<o?-n/2:e.xmin;return Q(r,i,n,!0)-Q(s,i,n,!1)}function Z(e){const t=e.storageInfo.origin.x,n=D(e.spatialReference,!0);if(null==n)return {originX:t,halfWorldWidth:null,pyramidsInfo:null};const i=n/2,{nativePixelSize:o,storageInfo:r,extent:s}=e,{maximumPyramidLevel:a,blockWidth:l,pyramidScalingFactor:c}=r;let f=o.x;const u=[],m=null!=e.transform&&"gcs-shift"===e.transform.type,x=t+(m?0:i),h=m?n-t:i-t;for(let p=0;p<=a;p++){const e=(s.xmax-t)/f/l,n=e-Math.floor(e)==0?e:Math.ceil(e),i=h/f/l,o=i-Math.floor(i)==0?i:Math.ceil(i),r=Math.floor(x/f/l),a=Math.round(x/f)%l,m=(l-Math.round(h/f)%l)%l;u.push({resolutionX:f,blockWidth:l,datasetColumnCount:n,worldColumnCountFromOrigin:o,leftMargin:a,rightPadding:m,originColumnOffset:r}),f*=c;}return {originX:t,halfWorldWidth:i,pyramidsInfo:u,hasGCSSShiftTransform:m}}function $(e){if(!e||e.isGeographic)return e;const t=String(e.wkid||e.wkt2||e.wkt);let n;if(N.has(t))n=N.get(t);else {n=(e.wkid?E$2.coordsys(e.wkid):E$2.fromString(s$2.PE_TYPE_PROJCS,e.wkt2||e.wkt)).getGeogcs().getCode(),N.set(t,n);}return new f$1({wkid:n})}function ee(e){const t=e.isAdaptive&&null==e.spacing;let n=e.spacing||[P,P],i=te(e),o={cols:i.size[0]+1,rows:i.size[1]+1};const r=i.outofBoundPointCount>0&&i.outofBoundPointCount<i.offsets.length/2;let s=i.outofBoundPointCount===i.offsets.length/2||t&&r?[0,0]:R(i.offsets,o,n,G);const a=(s[0]+s[1])/2,l=e.projectedExtent.spatialReference,c=e.srcBufferExtent.spatialReference;if(t&&(r||a>G)){M(l,c,e.datumTransformation)&&(l.isGeographic||A(l)),n=[b,b],i=te({...e,spacing:n}),o={cols:i.size[0]+1,rows:i.size[1]+1},s=R(i.offsets,o,n,G);}if(i.error=s,n[0]>1&&(i.coefficients=ne(i.offsets,o,r)),e.includeGCSGrid&&!l.isGeographic&&!l.isWebMercator)if(c.isGeographic)i.gcsGrid={offsets:i.offsets,coefficients:i.coefficients,spacing:n};else {const t=A(l);if(null!=t&&!t.isEnvelope){const t=$(l),s=J(e.projectedExtent,t),{offsets:a}=te({...e,srcBufferExtent:s,spacing:n}),c=ne(a,o,r);i.gcsGrid={offsets:a,coefficients:c,spacing:n};}}return i}function te(e){const{projectedExtent:t,srcBufferExtent:n,pixelSize:i,datumTransformation:o,rasterTransform:r}=e,s=t.spatialReference,a=n.spatialReference,l=w(s,a),{xmin:c,ymin:f,xmax:u,ymax:m}=t,x=D(a),h=null!=x&&(e.hasWrapAround||"gcs-shift"===r?.type),g=e.spacing||[P,P],y=g[0]*i.x,d=g[1]*i.y,M=1===g[0],R=Math.ceil((u-c)/y-.1/g[0])+(M?0:1),S=Math.ceil((m-f)/d-.1/g[1])+(M?0:1),G=L({cols:R,rows:S,xmin:c,ymax:m,xres:y,yres:d,inSR:s,outSR:a,datumTransformation:o,preferPE:g[0]<=b,usePixelCenter:M}),k=[];let N,T=0;const v=M?-1:NaN,{xmin:C,xmax:j,ymax:z,width:I,height:W}=n,O=_(a,E),B=null!=x&&C>0&&j>x/2;let F=!1;if(l){const e=A(s);F=null!=e&&e.poleLocation>0;}for(let w=0;w<R;w++){const e=[];for(let t=0;t<S;t++){let n=G[w*S+t];if(h&&n[0]>j&&n[0]>x/2-O?n[0]-=x:h&&0===w&&n[0]<0&&B&&!r&&(n[0]+=x),!n||isNaN(n[0])||isNaN(n[1]))k.push(v),k.push(v),e.push(null),T++;else {if(r){const e=r.inverseTransform(new x$1({x:n[0],y:n[1],spatialReference:a}));n=[e.x,e.y];}e.push(n),w>0&&h&&N[t]&&n[0]<N[t][0]&&(n[0]+=x,F&&n[0]>j&&n[0]>x&&(n[0]-=x)),k.push((n[0]-C)/I),k.push((z-n[1])/W);}}N=e;}return {offsets:k,error:null,coefficients:null,outofBoundPointCount:T,spacing:g,size:M?[R,S]:[R-1,S-1]}}function ne(e,t,n){const{cols:i,rows:o}=t,r=new Float32Array((i-1)*(o-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),a=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let l=0;l<i-1;l++){for(let t=0;t<o-1;t++){let n=l*o*2+2*t;const c=e[n],f=e[n+1],u=e[n+2],m=e[n+3];n+=2*o;const x=e[n],h=e[n+1],p=e[n+2],g=e[n+3];let y=0,d=12*(t*(i-1)+l);for(let e=0;e<3;e++)r[d++]=s[y++]*c+s[y++]*u+s[y++]*p;y=0;for(let e=0;e<3;e++)r[d++]=s[y++]*f+s[y++]*m+s[y++]*g;y=0;for(let e=0;e<3;e++)r[d++]=a[y++]*c+a[y++]*x+a[y++]*p;y=0;for(let e=0;e<3;e++)r[d++]=a[y++]*f+a[y++]*h+a[y++]*g;}if(n)for(let e=0;e<r.length;e++)isNaN(r[e])&&(r[e]=-1);}return r}function ie(e,t){const n=e.clone().normalize();return 1===n.length?n[0]:q(n,t)}function oe(e){const{spatialReference:t}=e,n=s(t);if(!n)return e;const[i,o]=n.valid,r=o-i;let s$1=0;if(e.xmin<i){const t=i-e.xmin;s$1=Math.ceil(t/r);}else if(e.xmin>o){const t=e.xmin-o;s$1=-Math.ceil(t/r);}return new M$1({spatialReference:e.spatialReference,xmin:e.xmin+s$1*r,ymin:e.ymin,xmax:e.xmax+s$1*r,ymax:e.ymax})}function re(e,t,i){const{storageInfo:o,pixelSize:r}=t;let s=0,a=!1;const{pyramidResolutions:l}=o,c="mixed"===o.tileInfo.format?.toLowerCase()?Math.max(1,Math.min(3,o.tileInfo.dpi/96)):1,f=(e.x+e.y)/2/c;if(null!=l&&l.length){const e=l[l.length-1],o=(e.x+e.y)/2,c=(r.x+r.y)/2;if(f<=c)s=0;else if(f>=o)s=l.length,a=f/o>8;else {let e,t=c;for(let n=1;n<=l.length;n++){if(e=(l[n-1].x+l[n-1].y)/2,f<=e){f===e?s=n:"down"===i?(s=n-1,a=f/t>8):s="up"===i||f-t>e-f||f/t>2?n:n-1;break}t=e;}}const u=0===s?r:l[s-1];if(a){Math.min(u.x,u.y)*W$1(t.spatialReference)>19567&&(a=!1);}return {pyramidLevel:s,pyramidResolution:new x$1({x:u.x,y:u.y,spatialReference:t.spatialReference}),excessiveReading:a}}const u=Math.log(e.x/r.x)/Math.LN2,m=Math.log(e.y/r.y)/Math.LN2,x=t.storageInfo.maximumPyramidLevel||0;s="down"===i?Math.floor(Math.min(u,m)):"up"===i?Math.ceil(Math.max(u,m)):Math.round((u+m)/2),s<0?s=0:s>x&&(a=s>x+3,s=x);const h=2**s;return {pyramidLevel:s,pyramidResolution:new x$1({x:h*t.nativePixelSize.x,y:h*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:a}}function se(e,t){const{pixelSize:n,extent:i}=e,o=v(i,t,!1);return J(ie(i,(n.x+n.y)/16),t,o)}function ae(e,t,i){const o=i?.tileSize,r=i?.alignGlobalDatasetWithAGOL,{extent:a,spatialReference:l,pixelSize:c}=e,f=C(new x$1({x:c.x,y:c.y,spatialReference:l}),t,a);if(null==f)return {projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const u=(f.x+f.y)/2,m=W$1(t),x=u*m*96*39.37,h=t.isGeographic?256/o*295828763.7958547:256/o*591657527.591555;let g="vector-magdir"===e.dataType||"vector-uv"===e.dataType;const y=se(e,t),d=Math.min(Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),Math.ceil(Math.log(h/2/x)/Math.LN2));if(!g&&r&&(t.isGeographic||t.isWebMercator)){const n=D(t);if(g=V(y)>0||null!=n&&y.width>n/4,!g&&null!=n){let t=-1;if(d<3)t=2**d*u*o;else if(e.storageInfo){const{maximumPyramidLevel:n=0,pyramidScalingFactor:i=2}=e.storageInfo;t=i**n*u*o;}const i=Math.ceil(n/t);g=1===i||2===i&&n/2-y.xmax<t;}}let M,w=x;const R=1.001,S=Math.min(2,Math.max(1.414,e.storageInfo?.pyramidScalingFactor||2));if(g){w=h;const e=t.isGeographic?1341104507446289e-21:.29858214164761665,n=e*(96*m*39.37),i=t.isGeographic?4326:3857;M=C(new x$1({x:e,y:e,spatialReference:{wkid:i}}),l,y),M.x*=w/n,M.y*=w/n;}else {M={x:c.x,y:c.y};let e=0;for(;w<h*(R/2)&&e<d;)e++,w*=S,M.x*=S,M.y*=S;Math.max(w,h)/Math.min(w,h)<=R&&(w=h);}const P=[w],b=[{x:M.x,y:M.y}],G=70.5310735,k=Math.min(G,x)/R;for(;w>=k;)w/=S,M.x/=S,M.y/=S,P.push(w),b.push({x:M.x,y:M.y});return {projectedPixelSize:f,scales:P,srcResolutions:b,isCustomTilingScheme:!g}}

export { C, D, J, M, T, U, V, Z, ae as a, ee as e, j, oe as o, re as r, se as s, v };
