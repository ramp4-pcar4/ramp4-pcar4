import{d as k}from"./ClassBreaksDefinition-KnS6uP00.js";import{n as q}from"./main-DVcB5zI_.js";const C=()=>q.getLogger("esri.rest.support.generateRendererUtils");function g(n,t){return Number(n.toFixed(t))}function w(n){const{normalizationTotal:t}=n;return{classBreaks:E(n),normalizationTotal:t}}function E(n){const t=n.definition,{classificationMethod:e,normalizationType:l,definedInterval:i}=t,o=t.breakCount??1,s=[];let a=n.values;if(a.length===0)return[];a=a.sort((c,d)=>c-d);const m=a[0],p=a[a.length-1];if(e==="equal-interval")if(a.length>=o){const c=(p-m)/o;let d=m;for(let r=1;r<o;r++){const u=g(m+r*c,6);s.push({minValue:d,maxValue:u,label:V(d,u,l)}),d=u}s.push({minValue:d,maxValue:p,label:V(d,p,l)})}else a.forEach(c=>{s.push({minValue:c,maxValue:c,label:V(c,c,l)})});else if(e==="natural-breaks"){const c=B(a),d=n.valueFrequency||c.valueFrequency,r=O(c.uniqueValues,d,o);let u=m;for(let f=1;f<o;f++)if(c.uniqueValues.length>f){const h=g(c.uniqueValues[r[f]],6);s.push({minValue:u,maxValue:h,label:V(u,h,l)}),u=h}s.push({minValue:u,maxValue:p,label:V(u,p,l)})}else if(e==="quantile")if(a.length>=o&&m!==p){let c=m,d=Math.ceil(a.length/o),r=0;for(let u=1;u<o;u++){let f=d+r-1;f>a.length&&(f=a.length-1),f<0&&(f=0),s.push({minValue:c,maxValue:a[f],label:V(c,a[f],l)}),c=a[f],r+=d,d=Math.ceil((a.length-r)/(o-u))}s.push({minValue:c,maxValue:p,label:V(c,p,l)})}else{let c=-1;for(let d=0;d<a.length;d++){const r=a[d];r!==c&&(c=r,s.push({minValue:c,maxValue:r,label:V(c,r,l)}),c=r)}}else if(e==="standard-deviation"){const c=L(a),d=G(a,c);if(d===0)s.push({minValue:a[0],maxValue:a[0],label:V(a[0],a[0],l)});else{const r=P(m,p,o,c,d)*d;let u=0,f=m;for(let b=o;b>=1;b--){const F=g(c-(b-.5)*r,6);s.push({minValue:f,maxValue:F,label:V(f,F,l)}),f=F,u++}let h=g(c+.5*r,6);s.push({minValue:f,maxValue:h,label:V(f,h,l)}),f=h,u++;for(let b=1;b<=o;b++)h=u===2*o?p:g(c+(b+.5)*r,6),s.push({minValue:f,maxValue:h,label:V(f,h,l)}),f=h,u++}}else if(e==="defined-interval"){if(!i)return s;const c=a[0],d=a[a.length-1],r=Math.ceil((d-c)/i);let u=c;for(let f=1;f<r;f++){const h=g(c+f*i,6);s.push({minValue:u,maxValue:h,label:V(u,h,l)}),u=h}s.push({minValue:u,maxValue:d,label:V(u,d,l)})}return s}function V(n,t,e){let l=null;return l=n===t?e&&e==="percent-of-total"?n+"%":n.toString():e&&e==="percent-of-total"?n+"% - "+t+"%":n+" - "+t,l}function B(n){const t=[],e=[];let l=Number.MIN_VALUE,i=1,o=-1;for(let s=0;s<n.length;s++){const a=n[s];a===l?(i++,e[o]=i):a!==null&&(t.push(a),l=a,i=1,e.push(i),o++)}return{uniqueValues:t,valueFrequency:e}}function O(n,t,e){const l=n.length,i=[];e>l&&(e=l);for(let s=0;s<e;s++)i.push(Math.round(s*l/e-1));i.push(l-1);let o=S(i,n,t,e);return U(o.mean,o.sdcm,i,n,t,e)&&(o=S(i,n,t,e)),i}function S(n,t,e,l){let i=[],o=[],s=[],a=0;const m=[],p=[];for(let u=0;u<l;u++){const f=v(u,n,t,e);m.push(f.sbMean),p.push(f.sbSdcm),a+=p[u]}let c,d=a,r=!0;for(;r||a<d;){r=!1,i=[];for(let u=0;u<l;u++)i.push(n[u]);for(let u=0;u<l;u++)for(let f=n[u]+1;f<=n[u+1];f++)if(c=t[f],u>0&&f!==n[u+1]&&Math.abs(c-m[u])>Math.abs(c-m[u-1]))n[u]=f;else if(u<l-1&&n[u]!==f-1&&Math.abs(c-m[u])>Math.abs(c-m[u+1])){n[u+1]=f-1;break}d=a,a=0,o=[],s=[];for(let u=0;u<l;u++){o.push(m[u]),s.push(p[u]);const f=v(u,n,t,e);m[u]=f.sbMean,p[u]=f.sbSdcm,a+=p[u]}}if(a>d){for(let u=0;u<l;u++)n[u]=i[u],m[u]=o[u],p[u]=s[u];a=d}return{mean:m,sdcm:p}}function U(n,t,e,l,i,o){let s=0,a=0,m=0,p=0,c=!0;for(let d=0;d<2&&c;d++){d===0&&(c=!1);for(let r=0;r<o-1;r++)for(;e[r+1]+1!==e[r+2];){e[r+1]=e[r+1]+1;const u=v(r,e,l,i);m=u.sbMean,s=u.sbSdcm;const f=v(r+1,e,l,i);if(p=f.sbMean,a=f.sbSdcm,!(s+a<t[r]+t[r+1])){e[r+1]=e[r+1]-1;break}t[r]=s,t[r+1]=a,n[r]=m,n[r+1]=p,c=!0}for(let r=o-1;r>0;r--)for(;e[r]!==e[r-1]+1;){e[r]=e[r]-1;const u=v(r-1,e,l,i);m=u.sbMean,s=u.sbSdcm;const f=v(r,e,l,i);if(p=f.sbMean,a=f.sbSdcm,!(s+a<t[r-1]+t[r])){e[r]=e[r]+1;break}t[r-1]=s,t[r]=a,n[r-1]=m,n[r]=p,c=!0}}return c}function P(n,t,e,l,i){let o=Math.max(l-n,t-l)/i/e;return o=o>=1?1:o>=.5?.5:.25,o}function L(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t/=n.length,t}function G(n,t){let e=0;for(let l=0;l<n.length;l++){const i=n[l];e+=(i-t)*(i-t)}return e/=n.length,Math.sqrt(e)}function v(n,t,e,l){let i=0,o=0;for(let m=t[n]+1;m<=t[n+1];m++){const p=l[m];i+=e[m]*p,o+=p}o<=0&&C().warn("Exception in Natural Breaks calculation");const s=i/o;let a=0;for(let m=t[n]+1;m<=t[n+1];m++)a+=l[m]*(e[m]-s)**2;return{sbMean:s,sbSdcm:a}}const A="<Null>",_="equal-interval",Y=1,j=5,Q=10,R=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,H=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),J=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),K=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function x(n){return n==null||typeof n=="string"&&!n?A:n}function W(n){const t=n.normalizationField!=null||n.normalizationType!=null,e=n.minValue!=null||n.maxValue!=null,l=!!n.sqlExpression&&n.supportsSQLExpression;return!t&&!e&&!l}function Vn(n){const{outStatisticTypes:t}=n,e=n.returnDistinct?[...new Set(n.values)]:n.values,l=e.filter(s=>s!=null).sort(),i=l.length,o={count:i,min:l[0],max:l[i-1]};return n.supportsNullCount&&(o.nullcount=e.length-i),!n.percentileParams||t?.include?.length&&!t.include.includes("median")||t?.exclude?.length&&t.exclude.includes("median")||(o.median=$(e,n.percentileParams)),o}function X(n){const{values:t,useSampleStdDev:e,supportsNullCount:l,outStatisticTypes:i}=n;let o=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,a=null,m=null,p=null,c=null,d=0;const r=n.minValue==null?-1/0:n.minValue,u=n.maxValue==null?1/0:n.maxValue;for(const h of t)Number.isFinite(h)?h>=r&&h<=u&&(a=a===null?h:a+h,o=Math.min(o,h),s=Math.max(s,h),d++):typeof h=="string"&&d++;if(d&&a!=null){m=a/d;let h=0;for(const b of t)Number.isFinite(b)&&b>=r&&b<=u&&(h+=(b-m)**2);c=e?d>1?h/(d-1):0:d>0?h/d:0,p=Math.sqrt(c)}else o=null,s=null;const f={avg:m,count:d,max:s,min:o,stddev:p,sum:a,variance:c};return l&&(f.nullcount=t.length-d),!n.percentileParams||i?.include?.length&&!i.include.includes("median")||i?.exclude?.length&&i.exclude.includes("median")||(f.median=$(t,n.percentileParams)),f}function $(n,t){const{fieldType:e,value:l,orderBy:i,isDiscrete:o}=t,s=Z(e,i==="desc");if((n=[...n].filter(u=>u!=null).sort((u,f)=>s(u,f))).length===0)return null;if(l<=0)return n[0];if(l>=1)return n[n.length-1];const a=(n.length-1)*l,m=Math.floor(a),p=m+1,c=a%1,d=n[m],r=n[p];return p>=n.length||o||typeof d=="string"||typeof r=="string"?d:d*(1-c)+r*c}function Z(n,t){if(n){if(H.has(n))return I(t);if(J.has(n))return M(t,!1);if(n==="esriFieldTypeTimestampOffset")return en(t);const s=M(t,!0);if(n==="esriFieldTypeString")return s;if(n==="esriFieldTypeGUID"||n==="esriFieldTypeGlobalID")return(a,m)=>s(D(a),D(m))}const e=t?1:-1,l=I(t),i=M(t,!0),o=N(t);return(s,a)=>typeof s=="number"&&typeof a=="number"?l(s,a):typeof s=="string"&&typeof a=="string"?i(s,a):o(s,a)??e}const T=(n,t)=>n==null?t==null?0:1:t==null?-1:null,y=(n,t)=>n==null?t==null?0:-1:t==null?1:null;function N(n){return n?T:y}const nn=(n,t)=>y(n,t)??(n===t?0:new Date(n).getTime()-new Date(t).getTime()),tn=(n,t)=>T(n,t)??(n===t?0:new Date(t).getTime()-new Date(n).getTime());function en(n){return n?tn:nn}const ln=(n,t)=>y(n,t)??(n===t?0:n<t?-1:1),an=(n,t)=>T(n,t)??(n===t?0:n<t?1:-1);function M(n,t){if(!t)return n?an:ln;const e=N(n);return n?(l,i)=>{const o=e(l,i);return o??((l=l.toUpperCase())>(i=i.toUpperCase())?-1:l<i?1:0)}:(l,i)=>{const o=e(l,i);return o??((l=l.toUpperCase())<(i=i.toUpperCase())?-1:l>i?1:0)}}const un=(n,t)=>T(n,t)??t-n,on=(n,t)=>y(n,t)??n-t;function I(n){return n?un:on}function D(n){return n.slice(24,36)+n.slice(19,23)+n.slice(16,18)+n.slice(14,16)+n.slice(11,13)+n.slice(9,11)+n.slice(6,8)+n.slice(4,6)+n.slice(2,4)+n.slice(0,2)}function bn(n,t,e){let l;for(l in n)t?.include?.length&&!t.include.includes(l)||t?.exclude?.length&&t.exclude.includes(l)?delete n[l]:K.includes(l)&&(Number.isFinite(n[l])||(n[l]=null));return e&&["avg","stddev","variance"].forEach(i=>{n[i]!=null&&(n[i]=Math.ceil(n[i]??0))}),n}function gn(n){const t={};for(let e of n)(e==null||typeof e=="string"&&e.trim()==="")&&(e=null),t[e]==null?t[e]={count:1,data:e}:t[e].count++;return{count:t}}function z(n){return n?.type!=="coded-value"?[]:n.codedValues.map(t=>t.code)}function vn(n,t,e,l){const i=n.count,o=[];if(e&&t){const s=[],a=z(t[0]);for(const m of a)if(t[1]){const p=z(t[1]);for(const c of p)if(t[2]){const d=z(t[2]);for(const r of d)s.push(`${x(m)}${l}${x(c)}${l}${x(r)}`)}else s.push(`${x(m)}${l}${x(c)}`)}else s.push(m);for(const m of s)i.hasOwnProperty(m)||(i[m]={data:m,count:0})}for(const s in i){const a=i[s];o.push({value:a.data,count:a.count,label:a.label})}return{uniqueValueInfos:o}}function xn(n,t,e,l){let i=null;switch(t){case"log":n!==0&&(i=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&l!==0&&(i=n/l*100);break;case"field":Number.isFinite(e)&&e!==0&&(i=n/e);break;case"natural-log":n>0&&(i=Math.log(n));break;case"square-root":n>0&&(i=n**.5)}return i}function rn(n,t){const e=cn({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||j});return n=sn(n,t.minValue,t.maxValue),w({definition:e,values:n,normalizationTotal:t.normalizationTotal})}function sn(n,t,e){const l=t??-1/0,i=e??1/0;return n.filter(o=>Number.isFinite(o)&&o>=l&&o<=i)}function cn(n){const{breakCount:t,field:e,normalizationField:l,normalizationType:i}=n,o=n.classificationMethod||_,s=o==="standard-deviation"?n.standardDeviationInterval||Y:void 0,a=o==="defined-interval"?n.definedInterval:void 0;return new k({breakCount:t,classificationField:e,classificationMethod:o,normalizationField:i==="field"?l:void 0,normalizationType:i,standardDeviationInterval:s,definedInterval:a})}function Tn(n,t){let e=n.classBreaks;const l=e.length,i=e[0]?.minValue,o=e[l-1]?.maxValue,s=t==="standard-deviation",a=R;return e=e.map(m=>{const p=m.label,c={minValue:m.minValue,maxValue:m.maxValue,label:p};if(s&&p){const d=p.match(a),r=d?.map(u=>+u.trim())??[];r.length===2?(c.minStdDev=r[0],c.maxStdDev=r[1],r[0]<0&&r[1]>0&&(c.hasAvg=!0)):r.length===1&&(p.includes("<")?(c.minStdDev=null,c.maxStdDev=r[0]):p.includes(">")&&(c.minStdDev=r[0],c.maxStdDev=null))}return c}),{minValue:i,maxValue:o,classBreakInfos:e,normalizationTotal:n.normalizationTotal}}function yn(n,t){const e=mn(n,t);if(e.min==null&&e.max==null)return{bins:[],minValue:e.min,maxValue:e.max,normalizationTotal:t.normalizationTotal};const l=e.intervals,i=e.min??0,o=e.max??0,s=l.map((a,m)=>({minValue:l[m][0],maxValue:l[m][1],count:0}));for(const a of n)if(a!=null&&a>=i&&a<=o){const m=fn(l,a);m>-1&&s[m].count++}return{bins:s,minValue:i,maxValue:o,normalizationTotal:t.normalizationTotal}}function mn(n,t){const{field:e,classificationMethod:l,standardDeviationInterval:i,normalizationType:o,normalizationField:s,normalizationTotal:a,minValue:m,maxValue:p}=t,c=t.numBins||Q;let d=null,r=null,u=null;if((!l||l==="equal-interval")&&!o){if(m!=null&&p!=null)d=m,r=p;else{const f=X({values:n,minValue:m,maxValue:p,useSampleStdDev:!o,supportsNullCount:W({normalizationType:o,normalizationField:s,minValue:m,maxValue:p})});d=f.min??null,r=f.max??null}u=dn(d??0,r??0,c)}else{const{classBreaks:f}=rn(n,{field:e,normalizationType:o,normalizationField:s,normalizationTotal:a,classificationMethod:l,standardDeviationInterval:i,minValue:m,maxValue:p,numClasses:c});d=f[0].minValue,r=f[f.length-1].maxValue,u=f.map(h=>[h.minValue,h.maxValue])}return{min:d,max:r,intervals:u}}function fn(n,t){let e=-1;for(let l=n.length-1;l>=0;l--)if(t>=n[l][0]){e=l;break}return e}function dn(n,t,e){const l=(t-n)/e,i=[];let o,s=n;for(let a=1;a<=e;a++)o=s+l,o=Number(o.toFixed(16)),i.push([s,a===e?t:o]),s=o;return i}export{vn as $,xn as B,bn as C,rn as E,Tn as P,yn as U,W as d,Vn as f,Z as g,gn as k,x as m,X as p,$ as v};
