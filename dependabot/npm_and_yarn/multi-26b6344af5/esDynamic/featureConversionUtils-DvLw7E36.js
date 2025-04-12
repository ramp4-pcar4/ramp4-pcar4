import{n as lt,s as j,ag as ct,ah as it,ai as at,aj as ft,ak as ht,al as dt,am as mt,an as gt}from"./main-0iYVBzEC.js";import{e as I,s as x}from"./OptimizedFeature-UwBjIU5n.js";import{e as yt}from"./OptimizedFeatureSet-DfZGBuxJ.js";function w(t,e){return t?e?4:3:e?3:2}const k=()=>lt.getLogger("esri.layers.graphics.featureConversionUtils"),q={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},pt=(t,e,o,n,s,r)=>{t[o]=s,t[o+1]=r},Q=(t,e,o,n,s,r)=>{t[o]=s,t[o+1]=r,t[o+2]=e[n+2]},wt=(t,e,o,n,s,r)=>{t[o]=s,t[o+1]=r,t[o+2]=e[n+3]},Mt=(t,e,o,n,s,r)=>{t[o]=s,t[o+1]=r,t[o+2]=e[n+2],t[o+3]=e[n+3]};function R(t,e,o,n){if(t){if(o)return e&&n?Mt:Q;if(e&&n)return wt}else if(e&&n)return Q;return pt}function E({scale:t,translate:e},o){return Math.round((o-e[0])/t[0])}function L({scale:t,translate:e},o){return Math.round((e[1]-o)/t[1])}function Y({scale:t,translate:e},o){return Math.round((o-e[0])/t[0])}function _({scale:t,translate:e},o){return Math.round((o-e[1])/t[1])}function C({scale:t,translate:e},o,n){return o*t[n]+e[n]}function bt(t,e,o){return t?e?o?$(t):S(t):o?V(t):U(t):null}function U(t){const e=t.coords;return{x:e[0],y:e[1]}}function tt(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t}function S(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2]}}function Gt(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t}function V(t){const e=t.coords;return{x:e[0],y:e[1],m:e[2]}}function It(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.m,t}function $(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2],m:e[3]}}function Nt(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t.coords[3]=e.m,t}function Pt(t,e,o,n){let s=U;o&&n?s=$:o?s=S:n&&(s=V);for(const r of e){const{geometry:u,attributes:l}=r,i=u!=null?s(u):null;t.push({attributes:l,geometry:i})}return t}function A(t,e){return t&&e?Nt:t?Gt:e?It:tt}function Tt(t,e,o,n,s){const r=A(o,n);for(const{geometry:u,attributes:l}of e){const i=u!=null?r(new I,u):null;t.push(new x(i,l,null,s?l[s]:void 0))}return t}function et(t,e,o=A(e.z!=null,e.m!=null)){return o(t,e)}function Ft(t,e,o,n){for(const{geometry:s,attributes:r}of e)t.push({attributes:r,geometry:s!=null?O(s,o,n):null});return t}function O(t,e,o){if(t==null)return null;const n=w(e,o),s=[];for(let r=0;r<t.coords.length;r+=n){const u=[];for(let l=0;l<n;l++)u.push(t.coords[r+l]);s.push(u)}return e?o?{points:s,hasZ:e,hasM:o}:{points:s,hasZ:e}:o?{points:s,hasM:o}:{points:s}}function Zt(t,e,o,n,s){const r=w(o,n);for(const{geometry:u,attributes:l}of e){const i=u!=null?ot(new I,u,r):null;t.push(new x(i,l,null,s?l[s]:void 0))}return t}function ot(t,e,o=w(e.hasZ,e.hasM)){t.lengths[0]=e.points.length;const n=t.coords;let s=0;for(const r of e.points)for(let u=0;u<o;u++)n[s++]=r[u];return t}function xt(t,e,o,n){for(const{geometry:s,attributes:r}of e)t.push({attributes:r,geometry:s!=null?K(s,o,n):null});return t}function K(t,e,o){if(!t)return null;const n=w(e,o),{coords:s,lengths:r}=t,u=[];let l=0;for(const i of r){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<n;h++)f.push(s[l++]);c.push(f)}u.push(c)}return e?o?{paths:u,hasZ:e,hasM:o}:{paths:u,hasZ:e}:o?{paths:u,hasM:o}:{paths:u}}function vt(t,e,o,n,s){const r=w(o,n);for(const{geometry:u,attributes:l,centroid:i}of e){const c=u!=null?nt(new I,u,r):null,a=i!=null?et(new I,i):null;t.push(new x(c,l,a,s?l[s]:void 0))}return t}function nt(t,e,o=w(e.hasZ,e.hasM)){const{lengths:n,coords:s}=t;let r=0;for(const u of e.paths){for(const l of u)for(let i=0;i<o;i++)s[r++]=l[i];n.push(u.length)}return t}function jt(t,e,o,n){for(const{geometry:s,attributes:r,centroid:u}of e){const l=s!=null?W(s,o,n):null;if(u!=null){const i=U(u);t.push({attributes:r,centroid:i,geometry:l})}else t.push({attributes:r,geometry:l})}return t}function W(t,e,o){if(!t)return null;const n=w(e,o),{coords:s,lengths:r}=t,u=[];let l=0;for(const i of r){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<n;h++)f.push(s[l++]);c.push(f)}u.push(c)}return e?o?{rings:u,hasZ:e,hasM:o}:{rings:u,hasZ:e}:o?{rings:u,hasM:o}:{rings:u}}function kt(t,e,o,n,s){for(const{geometry:r,centroid:u,attributes:l}of e){const i=r!=null?X(new I,r,o,n):null,c=s?l[s]:void 0;u!=null?t.push(new x(i,l,tt(new I,u),c)):t.push(new x(i,l,null,c))}return t}function X(t,e,o=e.hasZ,n=e.hasM){return rt(t,e.rings,o,n)}function rt(t,e,o,n){const s=w(o,n),{lengths:r,coords:u}=t;let l=0;T(t);for(const i of e){for(const c of i)for(let a=0;a<s;a++)u[l++]=c[a];r.push(i.length)}return t}const v=[],z=[];function zt(t,e,o,n,s){v[0]=t;const[r]=B(z,v,e,o,n,s);return N(v),N(z),r}function B(t,e,o,n,s,r){if(N(t),!o){for(const u of e){const l=r?u.attributes[r]:void 0;t.push(new x(null,u.attributes,null,l))}return t}switch(o){case"esriGeometryPoint":return Tt(t,e,n,s,r);case"esriGeometryMultipoint":return Zt(t,e,n,s,r);case"esriGeometryPolyline":return vt(t,e,n,s,r);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return kt(t,e,n,s,r);default:k().error("convertToFeatureSet:unknown-geometry",new j(`Unable to parse unknown geometry type '${o}'`)),N(t)}return t}function Et(t,e,o,n){z[0]=t,ut(v,z,e,o,n);const s=v[0];return N(v),N(z),s}function Lt(t,e,o){if(t==null)return null;const n=new I;return"hasZ"in t&&e==null&&(e=t.hasZ),"hasM"in t&&o==null&&(o=t.hasM),ct(t)?A(e??t.z!=null,o??t.m!=null)(n,t):it(t)?X(n,t,e,o):at(t)?nt(n,t,w(e,o)):ft(t)?ot(n,t,w(e,o)):void k().error("convertFromGeometry:unknown-geometry",new j(`Unable to parse unknown geometry type '${t}'`))}function st(t,e,o,n){const s=t&&("coords"in t?t:t.geometry);if(s==null)return null;switch(e){case"esriGeometryPoint":{let r=U;return o&&n?r=$:o?r=S:n&&(r=V),r(s)}case"esriGeometryMultipoint":return O(s,o,n);case"esriGeometryPolyline":return K(s,o,n);case"esriGeometryPolygon":return W(s,o,n);default:return k().error("convertToGeometry:unknown-geometry",new j(`Unable to parse unknown geometry type '${e}'`)),null}}function Ut(t,e){for(const o of e)t.push({attributes:o.attributes});return t}function ut(t,e,o,n,s){if(N(t),o==null)return Ut(t,e);switch(o){case"esriGeometryPoint":return Pt(t,e,n,s);case"esriGeometryMultipoint":return Ft(t,e,n,s);case"esriGeometryPolyline":return xt(t,e,n,s);case"esriGeometryPolygon":return jt(t,e,n,s);default:k().error("convertToFeatureSet:unknown-geometry",new j(`Unable to parse unknown geometry type '${o}'`))}return t}function qt(t){const{objectIdFieldName:e,spatialReference:o,transform:n,fields:s,hasM:r,hasZ:u,features:l,geometryType:i,exceededTransferLimit:c,uniqueIdField:a,queryGeometry:f,queryGeometryType:h}=t,m={features:ut([],l,i,u,r),fields:s,geometryType:i,objectIdFieldName:e,spatialReference:o,uniqueIdField:a,queryGeometry:st(f,h,!1,!1)};return n&&(m.transform=n),c&&(m.exceededTransferLimit=c),r&&(m.hasM=r),u&&(m.hasZ=u),m}function Rt(t,e){const o=new yt,{hasM:n,hasZ:s,features:r,objectIdFieldName:u,spatialReference:l,geometryType:i,exceededTransferLimit:c,transform:a,fields:f}=t;return f&&(o.fields=f),o.geometryType=i??null,o.objectIdFieldName=u??e??null,o.spatialReference=l??null,o.objectIdFieldName?(r&&B(o.features,r,i,s,n,o.objectIdFieldName),c&&(o.exceededTransferLimit=c),n&&(o.hasM=n),s&&(o.hasZ=s),a&&(o.transform=a),o):(k().error(new j("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),o)}function Yt(t){const{transform:e,features:o,hasM:n,hasZ:s}=t;if(!e)return t;for(const r of o)r.geometry!=null&&J(r.geometry,r.geometry,n,s,e),r.centroid!=null&&J(r.centroid,r.centroid,n,s,e);return t.transform=null,t}function _t(t,e){const{geometryType:o,features:n,hasM:s,hasZ:r}=e;if(!t)return e;for(let u=0;u<n.length;u++){const l=n[u],i=l.weakClone();i.geometry=new I,D(i.geometry,l.geometry,s,r,o,t),l.centroid&&(i.centroid=new I,D(i.centroid,l.centroid,s,r,"esriGeometryPoint",t)),n[u]=i}return e.transform=t,e}function D(t,e,o,n,s,r,u=o,l=n){if(T(t),!e?.coords.length)return null;const i=q[s],{coords:c,lengths:a}=e,f=w(o,n),h=w(o&&u,n&&l),m=R(o,n,u,l);if(!a.length)return m(t.coords,c,0,0,E(r,c[0]),L(r,c[1])),T(t,f,0),t;let d,y,M,G,p=0,g=0,b=g;for(const F of a){if(F<i)continue;let P=0;g=b,M=d=E(r,c[p]),G=y=L(r,c[p+1]),m(t.coords,c,g,p,M,G),P++,p+=f,g+=h;for(let Z=1;Z<F;Z++,p+=f)M=E(r,c[p]),G=L(r,c[p+1]),M===d&&G===y||(m(t.coords,c,g,p,M-d,G-y),g+=h,P++,d=M,y=G);P>=i&&(t.lengths.push(P),b=g)}return N(t.coords,b),t.coords.length?t:null}function Ct(t,e,o,n,s,r,u=o,l=n){if(T(t),!e?.coords.length)return null;const i=q[s],{coords:c,lengths:a}=e,f=w(o,n),h=w(o&&u,n&&l),m=R(o,n,u,l);if(!a.length)return m(t.coords,c,0,0,c[0],c[1]),T(t,f,0),t;let d=0;const y=r*r;for(const M of a){if(M<i){d+=M*f;continue}const G=t.coords.length/h,p=d,g=d+(M-1)*f;m(t.coords,c,t.coords.length,p,c[p],c[p+1]),H(t.coords,c,f,y,m,p,g),m(t.coords,c,t.coords.length,g,c[g],c[g+1]);const b=t.coords.length/h-G;b>=i?t.lengths.push(b):N(t.coords,G*h),d+=M*f}return t.coords.length?t:null}function St(t,e,o,n){const s=t[e],r=t[e+1],u=t[o],l=t[o+1],i=t[n],c=t[n+1];let a=u,f=l,h=i-a,m=c-f;if(h!==0||m!==0){const d=((s-a)*h+(r-f)*m)/(h*h+m*m);d>1?(a=i,f=c):d>0&&(a+=h*d,f+=m*d)}return h=s-a,m=r-f,h*h+m*m}function H(t,e,o,n,s,r,u){let l,i=n,c=0;for(let a=r+o;a<u;a+=o)l=St(e,a,r,u),l>i&&(c=a,i=l);i>n&&(c-r>o&&H(t,e,o,n,s,r,c),s(t,e,t.length,c,e[c],e[c+1]),u-c>o&&H(t,e,o,n,s,c,u))}function Vt(t,e,o,n){if(!e?.coords?.length)return null;const s=w(o,n);let r=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(e&&e.coords){const c=e.coords;for(let a=0;a<c.length;a+=s){const f=c[a],h=c[a+1];r=Math.min(r,f),l=Math.max(l,f),u=Math.min(u,h),i=Math.max(i,h)}}return dt(t)?mt(t,r,u,l,i):gt(r,u,l,i,t),t}function J(t,e,o,n,s){const{coords:r,lengths:u}=e,l=w(o,n);if(!r.length)return t!==e&&T(t),t;ht(s);const{originPosition:i,scale:c,translate:a}=s,f=Xt;f.originPosition=i;const h=f.scale;h[0]=c[0]??1,h[1]=-(c[1]??1),h[2]=c[2]??1,h[3]=c[3]??1;const m=f.translate;if(m[0]=a[0]??0,m[1]=a[1]??0,m[2]=a[2]??0,m[3]=a[3]??0,!u.length){for(let y=0;y<l;++y)t.coords[y]=C(f,r[y],y);return t!==e&&T(t,l,0),t}let d=0;for(let y=0;y<u.length;y++){const M=u[y];t.lengths[y]=M;for(let g=0;g<l;++g)t.coords[d+g]=C(f,r[d+g],g);let G=t.coords[d],p=t.coords[d+1];d+=l;for(let g=1;g<M;g++,d+=l){G+=r[d]*h[0],p+=r[d+1]*h[1],t.coords[d]=G,t.coords[d+1]=p;for(let b=2;b<l;++b)t.coords[d+b]=C(f,r[d+b],b)}}return t!==e&&T(t,r.length,u.length),t}function $t(t,e,o,n,s,r){if(T(t),t.lengths.push(...e.lengths),o===s&&n===r)for(let u=0;u<e.coords.length;u++)t.coords.push(e.coords[u]);else{const u=w(o,n),l=R(o,n,s,r),i=e.coords;for(let c=0;c<i.length;c+=u)l(t.coords,i,t.coords.length,c,i[c],i[c+1])}return t}function At(t,e,o,n){let s=0,r=t[n*e],u=t[n*(e+1)];for(let l=1;l<o;l++){const i=r+t[n*(e+l)],c=u+t[n*(e+l)+1],a=(i-r)*(c+u);r=i,u=c,s+=a}return .5*s}function Ot(t,e){const{coords:o,lengths:n}=t;let s=0,r=0;for(let u=0;u<n.length;u++){const l=n[u];r+=At(o,s,l,e),s+=l}return Math.abs(r)}function Kt(t,e,o,n){return t*n-o*e===0&&t*o+e*n>0}function Wt(t,e,o,n,s){const r=w(n,s);if(!t.lengths.length){if(t.coords.length<2)return null;const[f,h]=t.coords,m=Y(e,f),d=_(e,h);return new I([],[m,d])}const u=new I([],[0,0]),l=q[o],i=o==="esriGeometryPolygon"||o==="esriGeometryPolyline";let c=0,a=0;for(let f=0;f<t.lengths.length;f++){const h=t.lengths[f],m=a;let d=Y(e,t.coords[r*c]),y=_(e,t.coords[r*c+1]);u.coords[a++]=d,u.coords[a++]=y;let M=0,G=0,p=1;for(let g=1;g<h;g++){const b=Y(e,t.coords[r*(g+c)]),F=_(e,t.coords[r*(g+c)+1]);if(b!==d||F!==y){const P=b-d,Z=F-y;i&&Kt(M,G,P,Z)?(u.coords[a-2]+=P,u.coords[a-1]+=Z,d+=P,y+=Z):(u.coords[a++]=b,u.coords[a++]=F,d=b,y=F,M=P,G=Z,p+=1)}}p<l?a=m:u.lengths.push(p),c+=h}return u.lengths.length===0?null:u}function T(t,e=0,o=0){N(t.lengths,o),N(t.coords,e)}function N(t,e=0){t.length!==e&&(t.length=e)}const Xt={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{K as C,Wt as F,Ot as G,W as K,J as M,L as N,O as R,et as U,X as W,rt as X,Yt as a,$t as b,D as d,Rt as f,_t as h,qt as i,bt as j,Ct as m,B as n,zt as o,Vt as p,Et as r,Lt as s,st as u,E as w};
