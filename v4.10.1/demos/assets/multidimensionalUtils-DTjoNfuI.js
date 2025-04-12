import{q as d,u as v,eq as h,C as x,A as U,h as k,bT as F}from"./main-DVcB5zI_.js";var y;let c=y=class extends U{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new y({variableName:this.variableName,dimensionName:this.dimensionName,values:k(this.values),isSlice:this.isSlice})}};d([v({type:String,json:{write:!0}})],c.prototype,"variableName",void 0),d([v({type:String,json:{write:!0}})],c.prototype,"dimensionName",void 0),d([v({type:h.array(h.oneOf([h.native(Number),h.array(h.native(Number))])),json:{write:!0}})],c.prototype,"values",void 0),d([v({type:Boolean,json:{write:!0}})],c.prototype,"isSlice",void 0),c=y=d([x("esri.layers.support.DimensionalDefinition")],c);const p=c;function D(e,n,i){const s=n.shift();if(i.length===0){const t=[];i.push({sliceId:-1,multidimensionalDefinition:t})}const a=i.length;for(let t=0;t<a;t++){const l=i.shift().multidimensionalDefinition;s.values?.forEach(r=>{i.push({sliceId:-1,multidimensionalDefinition:[...l,{variableName:e,dimensionName:s.name,values:[r]}]})})}n.length&&D(e,n,i)}function $(e,n){const i=[];let s=0;return(n?e.variables.filter(a=>a.name.toLowerCase()===n.toLowerCase()):[...e.variables].sort((a,t)=>a.name>t.name?1:-1)).forEach(a=>{const t=[],l=[...a.dimensions].sort((r,m)=>r.name>m.name?-1:1);D(a.name,l,t),t.forEach(r=>{i.push({...r,sliceId:s++})})}),i}function L(e,n,i){let s=e;if(n&&(n=[...n].sort((a,t)=>a.dimensionName<t.dimensionName?-1:1)).forEach(({dimensionName:a,values:t,isSlice:l})=>{t.length&&(s=s.filter(r=>{const m=r.multidimensionalDefinition.find(o=>o.dimensionName===a);if(m==null)return!1;const u=m.values[0];return typeof u=="number"?typeof t[0]=="number"?t.includes(u):t.some(o=>o[0]<=u&&o[1]>=u):typeof t[0]=="number"?t.some(o=>u[0]<=o&&u[1]>=o):l?t.some(o=>o[0]===u[0]&&o[0]===u[1]):t.some(o=>o[0]>=u[0]&&o[0]<=u[1]||o[1]>=u[0]&&o[1]<=u[1]||o[0]<u[0]&&o[1]>u[1])}))}),s.length&&i?.start!=null&&i.end!=null){const a=i.start.getTime(),t=i.end.getTime(),l=s[0].multidimensionalDefinition.findIndex(r=>r.dimensionName==="StdTime");l>-1&&(s=s.filter(r=>{const m=r.multidimensionalDefinition[l].values[0];return a<=m&&t>=m}))}return s.map(a=>a.sliceId)}function w(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function A(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function C(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function M(e,n,i){if(!n?.subsetDefinitions?.length)return e;let s;if(i){const{variables:l}=n;if(l.length&&!l.includes(i))return null;const r=n.subsetDefinitions.find(m=>m.dimensionName===e.name&&m.variableName===i);if(!r?.values?.length)return e;s=C(r.values)}else s=n.dimensions.find(({name:r})=>r===e.name)?.extent;const a=s;if(!a?.length)return e;const t=e.values.filter(l=>w(l,a));return{...e,extent:[...a],values:t}}function T(e,n,i){if(!n?.subsetDefinitions?.length)return!1;const{variables:s}=n;if(s.length&&e.some(({variableName:a})=>a&&!s.includes(a)))return!0;for(let a=0;a<e.length;a++){const t=e[a],l=n.subsetDefinitions.find(r=>(t.variableName===""||r.variableName===t.variableName)&&r.dimensionName===t.dimensionName);if(l?.values.length){const r=C(l.values);if(!t.isSlice&&t.values.length===2&&!Array.isArray(t.values[0])&&t.values[0]!==t.values[1]&&i){if(!A(t.values,r))return!0}else if(t.values.some(m=>!w(m,r)))return!0}}return!1}function j(e,n){if(e==null)return{isOutside:!1};const{geometry:i,timeExtent:s,multidimensionalDefinition:a}=n;let t=null;if(s!=null&&(t=Y(e,s),t==null))return{isOutside:!0};const{areaOfInterest:l}=e;if(l&&i){const r=i.type==="point"?i:i.type==="extent"?i.center:i.type==="polygon"?i.centroid:null;if(r&&!l.contains(r))return{isOutside:!0}}return a!=null&&a.length&&T(a,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:i,timeExtent:t,multidimensionalDefinition:a}}}function Y(e,n){const i=e.dimensions.find(({name:l})=>l==="StdTime");if(i==null||n.start==null&&n.end==null)return n;n=n.clone();const{start:s,end:a}=n.toJSON(),t=s===a?[s]:s!=null&&a!=null?[s,a]:[s??a];return t.length===2&&i?.extent.length&&(t[0]=Math.max(t[0],i.extent[0]),t[1]=Math.min(t[1],i.extent[1]??i.extent[0]),t[1]<t[0])||T([new p({variableName:"",dimensionName:"StdTime",isSlice:t.length===1,values:t})],e,!0)?null:(n.start=new Date(t[0]),n.end=new Date(t[1]??t[0]),n)}function I(e,n={}){const{multidimensionalInfo:i,keyProperties:s}=e;if(i==null)return null;const{variableName:a,multidimensionalSubset:t,multidimensionalDefinition:l}=n,r=l!=null?l[0]?.variableName:null,m=a||r||s?.DefaultVariable;let{variables:u}=i;return t?.variables?.length&&(u=u.filter(({name:o})=>t.variables.includes(o))),m?u.find(({name:o})=>o===m)??u[0]:u[0]}function R(e,n={}){const i=I(e,n);if(!i)return null;const s=[],{dimensions:a,name:t}=i;if(a.length===0)return[new p({variableName:t,dimensionName:"",values:[],isSlice:!0})];for(let l=0;l<a.length;l++){const r=M(a[l],n.multidimensionalSubset,t);if(!r)return null;const{values:m,extent:u}=r;let o=m?.[0]??u?.[0];r.name.toLowerCase()==="stdz"&&!r.hasRanges&&u&&Math.abs(u[1])<=Math.abs(u[0])&&(o=m?.length?m[m.length-1]:u[1]),s.push(new p({variableName:t,dimensionName:r.name,values:[o],isSlice:!n.useRangeForRangedDimensionInfo||!!r.hasRanges}))}return s}function q(e){return!!e?.length&&e.some(n=>{if(n.values==null)return!0;const i=n.values.length;return i===0||i>1||!n.isSlice&&Array.isArray(n.values[0])})}function B(e,n){if(n==null||e==null)return null;let i=n.variables.map(s=>({...s}));return e?.variables?.length&&(i=i.filter(({name:s})=>e.variables.includes(s)),i.forEach(s=>{s.dimensions=s.dimensions.map(a=>M(a,e,s.name)).filter(F)})),i}function O(e,n){const{values:i}=n;if(i?.length){const r=Array.isArray(i[0]),m=Array.isArray(e);return r!==m?-1:r&&m?i.findIndex(u=>u[0]===e[0]&&u[1]===e[1]):i.indexOf(e)}const{extent:s}=n;if(Array.isArray(e)||!s||e<s[0]||e>s[1])return-1;const a=n.interval||1;if(n.unit!=="ISO8601")return Math.round((e-s[0])/a);const t=s[0];let l=-1;switch(n.intervalUnit?.toLowerCase()||"days"){case"seconds":l=Math.round((e-t)/1e3/a);break;case"minutes":l=Math.round((e-t)/6e4/a);break;case"hours":l=Math.round((e-t)/36e5/a);break;case"days":l=Math.round((e-t)/864e5/a);break;case"months":{const r=new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear(),m=new Date(t).getUTCMonth(),u=new Date(e).getUTCMonth();l=r===0?u-m:u+11-m+12*(r-1)}break;case"years":l=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/a);break;case"decades":l=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/10/a)}return l}function N(e){let n=e.values?.length;if(n)return n;const{extent:i,unit:s}=e,a=e.interval||1,t=i?i[1]-i[0]:0;if(s!=="ISO8601")return Math.round(t/a);switch(e.intervalUnit?.toLowerCase()??"seconds"){case"seconds":n=Math.round(t/1e3/a);break;case"minutes":n=Math.round(t/6e4/a);break;case"hours":n=Math.round(t/36e5/a);break;case"days":n=Math.round(t/864e5/a);break;case"months":if(i){const l=new Date(i[1]).getUTCFullYear()-new Date(i[0]).getUTCFullYear(),r=new Date(i[0]).getUTCMonth(),m=new Date(i[1]).getUTCMonth();n=l===0?m-r+1:m+11-r+12*(l-1)+1}else n=0;break;case"years":n=i?Math.round((new Date(i[1]).getUTCFullYear()-new Date(i[0]).getUTCFullYear())/a):0;break;case"decades":n=i?Math.round((new Date(i[1]).getUTCFullYear()-new Date(i[0]).getUTCFullYear())/10/a):0;break;default:n=0}return n}function z(e,n){let i=0;const s=e[0].variableName,a=[...n.variables].sort((t,l)=>t.name>l.name?1:-1);for(let t=0;t<a.length;t++){const l=a[t],r=[...l.dimensions].sort((o,f)=>o.name>f.name?-1:1);if(l.name!==s){i+=r.map(o=>N(o)).reduce((o,f)=>o*f);continue}const m=r.map(o=>N(o)),u=r.length;for(let o=0;o<u;o++){const f=e.find(b=>b.dimensionName===r[o].name);if(f==null)return null;const g=O(f.values[0],r[o]);if(g===-1)return null;m.shift(),i+=o===u-1?g:g*m.reduce((b,S)=>b*S)}break}return i}export{$ as a,R as d,I as f,B as g,q as h,L as i,j as m,T as o,p,z as w};
