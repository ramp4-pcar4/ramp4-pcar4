import{bE as z,bF as O,bv as V,ap as A,bG as B,B as D,be as L}from"./main-I34c1W55.js";import{r as E}from"./TimeExtent-DBKEQvmS.js";import{j as P}from"./quantizationUtils-D7EiPGyU.js";import{l as R,u as Y}from"./heatmapUtils-BuUsxHG5.js";import{$ as _}from"./utils-KknWUtIe.js";import{m as T,B as j}from"./utils-B8nnYR3C.js";let c=null;const S=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function U(n,e,s){return n.x<0?n.x+=e:n.x>s&&(n.x-=e),n}function Q(n,e,s,r){const a=z(s)?O(s):null,m=a?Math.round((a.valid[1]-a.valid[0])/e.scale[0]):null;return n.map(o=>{const i=new V(o.geometry);return P(e,i,i),o.geometry=a?U(i,m??0,r[0]):i,o})}function W(n,e=18,s,r,a){const m=new Float64Array(r*a);e=Math.round(L(e));let o=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;const M=Y(s);for(const{geometry:p,attributes:g}of n){const{x:b,y:u}=p,I=Math.max(0,b-e),F=Math.max(0,u-e),$=Math.min(a,u+e),w=Math.min(r,b+e),h=+M(g);for(let f=F;f<$;f++)for(let d=I;d<w;d++){const y=f*r+d,N=R(d-b,f-u,e)*h,l=m[y]+=N;o=Math.min(o,l),i=Math.max(i,l)}}return{min:o,max:i}}function C(n){const e=S.exec(n);if(!e)return null;const{hh:s,mm:r,ss:a,ms:m}=e.groups;return Number(s)*E.hours+Number(r)*E.minutes+Number(a)*E.seconds+Number(m||0)}async function X(n,e,s=!0){if(!e)return[];const{field:r,field2:a,field3:m,fieldDelimiter:o,fieldInfos:i,timeZone:M}=n,p=r&&i?.find(l=>l.name.toLowerCase()===r.toLowerCase()),g=!!p&&A(p),b=!!p&&_(p),u=n.valueExpression,I=n.normalizationType,F=n.normalizationField,$=n.normalizationTotal,w=[],h=n.viewInfoParams;let f=null,d=null;if(u){if(!c){const{arcadeUtils:l}=await B();c=l}c.hasGeometryOperations(u)&&await c.enableGeometryOperations(),f=c.createFunction(u),d=h?c.getViewInfo({viewingMode:h.viewingMode,scale:h.scale,spatialReference:new D(h.spatialReference)}):null}const y=n.fieldInfos,N=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&y?{fields:y}:null;return e.forEach(l=>{const x=l.attributes;let t;if(u){const v=N?{...l,layer:N}:l,G=c.createExecContext(v,d,M);t=c.executeFunction(f,G)}else x&&(t=x[r],a?(t=`${T(t)}${o}${T(x[a])}`,m&&(t=`${t}${o}${T(x[m])}`)):typeof t=="string"&&s&&(b?t=t?new Date(t).getTime():null:g&&(t=t?C(t):null)));if(I&&typeof t=="number"&&isFinite(t)){const v=x&&parseFloat(x[F]);t=j(t,I,v,$)}w.push(t)}),w}export{C as I,X as b,W as w,Q as x};
