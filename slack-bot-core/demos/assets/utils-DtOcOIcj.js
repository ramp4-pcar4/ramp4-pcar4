import { cM as W, al as s, F as x$1, cN as L, cO as l, cP as r, cQ as be, cR as i, bk as f$1, cS as u, cT as u$1 } from './main-B92PJIAd.js';
import { Z } from './utils-dgBEiuLF.js';
import { c as c$1, B } from './utils-Bu8OSVEY.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let $=null;const g=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function I(e,t,n){return e.x<0?e.x+=t:e.x>n&&(e.x-=t),e}function j(e,t,n,r){const l=W(n)?s(n):null,u=l?Math.round((l.valid[1]-l.valid[0])/t.scale[0]):null;return e.map((e=>{const n=new x$1(e.geometry);return L(t,n,n,n.hasZ,n.hasM),e.geometry=l?I(n,u??0,r[0]):n,e}))}function x(e,n=18,r,o,i){const s=new Float64Array(o*i);n=Math.round(u(n));let l$1=Number.POSITIVE_INFINITY,u$2=Number.NEGATIVE_INFINITY;const a=u$1(r);for(const{geometry:t,attributes:m}of e){const{x:e,y:r}=t,c=Math.max(0,e-n),p=Math.max(0,r-n),d=Math.min(i,r+n),h=Math.min(o,e+n),y=+a(m);for(let t=p;t<d;t++)for(let i=c;i<h;i++){const a=t*o+i,m=l(i-e,t-r,n)*y,c=s[a]+=m;l$1=Math.min(l$1,c),u$2=Math.max(u$2,c);}}return {min:l$1,max:u$2}}function w(e){const t=g.exec(e);if(!t)return null;const{hh:r$1,mm:o,ss:i,ms:s}=t.groups;return Number(r$1)*r.hours+Number(o)*r.minutes+Number(i)*r.seconds+Number(s||0)}async function b(e,t,n=!0){if(!t)return [];const{field:o,field2:i$1,field3:s,fieldDelimiter:u,fieldInfos:a,timeZone:f}=e,m=o&&a?.find((e=>e.name.toLowerCase()===o.toLowerCase())),y=!!m&&be(m),g=!!m&&Z(m),I=e.valueExpression,j=e.normalizationType,x=e.normalizationField,b=e.normalizationTotal,F=[],N=e.viewInfoParams;let E=null,v=null;if(I){if(!$){const{arcadeUtils:e}=await i();$=e;}$.hasGeometryOperations(I)&&await $.enableGeometryOperations(),E=$.createFunction(I),v=N?$.getViewInfo({viewingMode:N.viewingMode,scale:N.scale,spatialReference:new f$1(N.spatialReference)}):null;}const M=e.fieldInfos,U=!(t[0]&&"declaredClass"in t[0]&&"esri.Graphic"===t[0].declaredClass)&&M?{fields:M}:null;return t.forEach((e=>{const t=e.attributes;let r;if(I){const t=U?{...e,layer:U}:e,n=$.createExecContext(t,v,f);r=$.executeFunction(E,n);}else t&&(r=t[o],i$1?(r=`${c$1(r)}${u}${c$1(t[i$1])}`,s&&(r=`${r}${u}${c$1(t[s])}`)):"string"==typeof r&&n&&(g?r=r?new Date(r).getTime():null:y&&(r=r?w(r):null)));if(j&&"number"==typeof r&&isFinite(r)){const e=t&&parseFloat(t[x]);r=B(r,j,e,b);}F.push(r);})),F}

export { b, j, w, x };
