import{o as q}from"./floatRGBA-CNeCgBBY.js";import{aN as G,aO as D,aP as L}from"./main-DCIX61zy.js";import{t as N}from"./UpdateTracking2D-swFQJIjy.js";const O=.45;function V(o,t=.5){switch(o.type){case"CIMPointSymbol":{const r=o.symbolLayers;if(!r||r.length!==1)return null;const n=r[0];return n.type!=="CIMVectorMarker"?null:V(n)}case"CIMVectorMarker":{const r=o.markerGraphics;if(!r||r.length!==1)return null;const n=r[0];if(!n)return null;const l=n.geometry;if(!l)return null;const a=n.symbol;return!a||a.type!=="CIMPolygonSymbol"&&a.type!=="CIMLineSymbol"||a.symbolLayers?.some(e=>!!e.effects)?null:{type:"sdf",geom:l,sdfPaddingRatio:t,asFill:a.type==="CIMPolygonSymbol"}}}}function U(o){return o?o.rings?o.rings:o.paths?o.paths:o.xmin!==void 0&&o.ymin!==void 0&&o.xmax!==void 0&&o.ymax!==void 0?[[[o.xmin,o.ymin],[o.xmin,o.ymax],[o.xmax,o.ymax],[o.xmax,o.ymin],[o.xmin,o.ymin]]]:null:null}function j(o){let t=1/0,r=-1/0,n=1/0,l=-1/0;for(const a of o)for(const e of a)e[0]<t&&(t=e[0]),e[0]>r&&(r=e[0]),e[1]<n&&(n=e[1]),e[1]>l&&(l=e[1]);return new N(t,n,r-t,l-n)}function X(o){let t=1/0,r=-1/0,n=1/0,l=-1/0;for(const a of o)for(const e of a)e[0]<t&&(t=e[0]),e[0]>r&&(r=e[0]),e[1]<n&&(n=e[1]),e[1]>l&&(l=e[1]);return[t,n,r,l]}function Y(o){return o?o.rings?X(o.rings):o.paths?X(o.paths):G(o)?[o.xmin,o.ymin,o.xmax,o.ymax]:null:null}function B(o,t){const[r,n,l,a]=Y(o),e=l-r,s=a-n,m=D,c=L,i=Math.floor(.5*(m*t-c)),f=(m-2*(i+c))/Math.max(e,s),d=Math.round(e*f),h=Math.round(s*f);return{pixelDimensions:[e,s],texelDimensions:[Math.round((d+2*i)/f),Math.round((h+2*i)/f)]}}function E(o,t,r,n,l,a,e){const[s,m,c,i]=o;if(c<s||i<m)return{frameSizeRatio:0,anchorX:0,anchorY:0,widthRatio:1,sdfPaddingRatio:.5};const f=c-s,d=i-m,h=Math.max(f,d);let u=.5;if(a!=null&&r!=null){!e&&t!=null&&(a*=(t.ymax-t.ymin)/r);const C=a/(a+h);C>O&&C<1&&(u=Math.min(C+.1,.99))}const x=D,M=L,p=Math.floor(.5*(x*u-M)),g=(x-2*(p+M))/h,I=Math.round(f*g)+2*p,P=Math.round(d*g)+2*p;let y=1;t&&(y=P*(1-u)/((t.ymax-t.ymin)*g));let w=0,R=0,b=1;n&&(l?t&&r&&t.ymax-t.ymin>0&&(b=(t.xmax-t.xmin)/(t.ymax-t.ymin),w=n.x/(r*b),R=n.y/r):(w=n.x,R=n.y)),t&&(w=.5*(t.xmax+t.xmin)+w*(t.xmax-t.xmin),R=.5*(t.ymax+t.ymin)+R*(t.ymax-t.ymin)),w-=s,R-=m,w*=g,R*=g,w+=p,R+=p;let S=w/I-.5,v=R/P-.5;return l&&r&&(S*=r*b,v*=r),{frameSizeRatio:y,anchorX:S,anchorY:v,widthRatio:b,sdfPaddingRatio:u}}function H(o){const t=U(o.geom),r=j(t),n=D,l=L,a=Math.floor(.5*(n*o.sdfPaddingRatio-l)),e=n-2*(a+l),s=e/Math.max(r.width,r.height),m=Math.round(r.width*s)+2*a,c=Math.round(r.height*s)+2*a,i=[];for(const d of t)if(d&&d.length>1){const h=[];for(const u of d){let[x,M]=u;x-=r.x,M-=r.y,x*=s,M*=s,x+=a-.5,M+=a-.5,o.asFill?h.push([x,M]):h.push([Math.round(x),Math.round(M)])}if(o.asFill){const u=h.length-1;h[0][0]===h[u][0]&&h[0][1]===h[u][1]||h.push(h[0])}i.push(h)}const f=T(i,m,c,a);return o.asFill&&W(i,m,c,a,f),{data:Z(f,a),width:m,height:c,sdfPaddingRatio:o.sdfPaddingRatio,sdfDecodeCoeff:2*a/e}}function T(o,t,r,n){const l=t*r,a=new Array(l),e=n*n+1;for(let s=0;s<l;++s)a[s]=e;for(const s of o){const m=s.length;for(let c=1;c<m;++c){const i=s[c-1],f=s[c];let d,h,u,x;i[0]<f[0]?(d=i[0],h=f[0]):(d=f[0],h=i[0]),i[1]<f[1]?(u=i[1],x=f[1]):(u=f[1],x=i[1]);let M=Math.floor(d)-n,p=Math.floor(h)+n,g=Math.floor(u)-n,I=Math.floor(x)+n;M<0&&(M=0),p>t&&(p=t),g<0&&(g=0),I>r&&(I=r);const P=f[0]-i[0],y=f[1]-i[1],w=P*P+y*y;for(let R=M;R<p;R++)for(let b=g;b<I;b++){const S=R+.5,v=b+.5;let C,F,k=(S-i[0])*P+(v-i[1])*y;k<0?(C=i[0],F=i[1]):k>w?(C=f[0],F=f[1]):(k/=w,C=i[0]+k*P,F=i[1]+k*y);const z=(S-C)*(S-C)+(v-F)*(v-F),A=(r-b-1)*t+R;z<a[A]&&(a[A]=z)}}}for(let s=0;s<l;++s)a[s]=Math.sqrt(a[s]);return a}function W(o,t,r,n,l){for(const a of o){const e=a.length;for(let s=1;s<e;++s){const m=a[s-1],c=a[s];let i,f,d,h;m[0]<c[0]?(i=m[0],f=c[0]):(i=c[0],f=m[0]),m[1]<c[1]?(d=m[1],h=c[1]):(d=c[1],h=m[1]);let u=Math.floor(i),x=Math.floor(f)+1,M=Math.floor(d),p=Math.floor(h)+1;u<n&&(u=n),x>t-n&&(x=t-n),M<n&&(M=n),p>r-n&&(p=r-n);for(let g=M;g<p;++g){if(m[1]>g==c[1]>g)continue;const I=g+.5,P=(r-g-1)*t;for(let y=u;y<x;++y)y+.5<(c[0]-m[0])*(I-m[1])/(c[1]-m[1])+m[0]&&(l[P+y]=-l[P+y]);for(let y=n;y<u;++y)l[P+y]=-l[P+y]}}}}function Z(o,t){const r=2*t,n=o.length,l=new Uint8Array(4*n);for(let a=0;a<n;++a){const e=.5-o[a]/r;q(e,l,4*a)}return l}export{V as a,B as c,E as h,Y as m,H as u};
