import{fk as O,b_ as k,M as v}from"./main-0iYVBzEC.js";import{O as x}from"./quat-DE9z8Iog.js";import{e as C}from"./quatf64-C16JxGFv.js";import{Q as F}from"./vec32-JpmRWeeI.js";import{t as A,n as w}from"./vec3f32-BS0cezmI.js";import{o as R}from"./projectBuffer-B9YCeKCd.js";import{d as U,a as B,b as J}from"./PointCloudUniqueValueRenderer-DVwVN9HQ.js";import{w as N,l as V,c as T,I as q}from"./I3SBinaryReader-zB2klf18.js";import{I as z}from"./orientedBoundingBox-BHn5KtHB.js";function _(u,e,a,n){const{rendererJSON:c,isRGBRenderer:m}=u;let t=null,s=null;if(e&&m)t=e;else if(e&&c?.type==="pointCloudUniqueValueRenderer"){s=U.fromJSON(c);const r=s.colorUniqueValueInfos;t=new Uint8Array(3*n);const i=g(s.fieldTransformType);for(let o=0;o<n;o++){const l=(i?i(e[o]):e[o])+"";for(let f=0;f<r.length;f++)if(r[f].values.includes(l)){t[3*o]=r[f].color.r,t[3*o+1]=r[f].color.g,t[3*o+2]=r[f].color.b;break}}}else if(e&&c?.type==="pointCloudStretchRenderer"){s=B.fromJSON(c);const r=s.stops;t=new Uint8Array(3*n);const i=g(s.fieldTransformType);for(let o=0;o<n;o++){const l=i?i(e[o]):e[o],f=r.length-1;if(l<r[0].value)t[3*o]=r[0].color.r,t[3*o+1]=r[0].color.g,t[3*o+2]=r[0].color.b;else if(l>=r[f].value)t[3*o]=r[f].color.r,t[3*o+1]=r[f].color.g,t[3*o+2]=r[f].color.b;else for(let b=1;b<r.length;b++)if(l<r[b].value){const p=(l-r[b-1].value)/(r[b].value-r[b-1].value);t[3*o]=r[b].color.r*p+r[b-1].color.r*(1-p),t[3*o+1]=r[b].color.g*p+r[b-1].color.g*(1-p),t[3*o+2]=r[b].color.b*p+r[b-1].color.b*(1-p);break}}}else if(e&&c?.type==="pointCloudClassBreaksRenderer"){s=J.fromJSON(c);const r=s.colorClassBreakInfos;t=new Uint8Array(3*n);const i=g(s.fieldTransformType);for(let o=0;o<n;o++){const l=i?i(e[o]):e[o];for(let f=0;f<r.length;f++)if(l>=r[f].minValue&&l<=r[f].maxValue){t[3*o]=r[f].color.r,t[3*o+1]=r[f].color.g,t[3*o+2]=r[f].color.b;break}}}else t=new Uint8Array(3*n).fill(255);if(a&&s?.colorModulation){const r=s.colorModulation.minValue,i=s.colorModulation.maxValue,o=.3;for(let l=0;l<n;l++){const f=a[l],b=f>=i?1:f<=r?o:o+(1-o)*(f-r)/(i-r);t[3*l]=b*t[3*l],t[3*l+1]=b*t[3*l+1],t[3*l+2]=b*t[3*l+2]}}return t}function E(u,e){if(u.encoding==null||u.encoding===""){const a=N(e,u);if(a.vertexAttributes.position==null)return;const n=V(e,a.vertexAttributes.position),c=a.header.fields,m=[c.offsetX,c.offsetY,c.offsetZ],t=[c.scaleX,c.scaleY,c.scaleZ],s=n.length/3,r=new Float64Array(3*s);for(let i=0;i<s;i++)r[3*i]=n[3*i]*t[0]+m[0],r[3*i+1]=n[3*i+1]*t[1]+m[1],r[3*i+2]=n[3*i+2]*t[2]+m[2];return r}if(u.encoding==="lepcc-xyz")return T(e).result}function h(u,e,a){return u?.attributeInfo.useElevation?e?X(e,a):null:u?.attributeInfo.storageInfo?q(u.attributeInfo.storageInfo,u.buffer,a):null}function X(u,e){const a=new Float64Array(e);for(let n=0;n<e;n++)a[n]=u[3*n+2];return a}function Y(u,e,a,n,c){const m=u.length/3;let t=0;for(let s=0;s<m;s++){let r=!0;for(let i=0;i<n.length&&r;i++){const{filterJSON:o}=n[i],l=c[i].values[s];switch(o.type){case"pointCloudValueFilter":{const f=o.mode==="exclude";o.values.includes(l)===f&&(r=!1);break}case"pointCloudBitfieldFilter":{const f=M(o.requiredSetBits),b=M(o.requiredClearBits);((l&f)!==f||l&b)&&(r=!1);break}case"pointCloudReturnFilter":{const f=15&l,b=l>>>4&15,p=b>1,S=f===1,y=f===b;let I=!1;for(const d of o.includedReturns)if(d==="last"&&y||d==="firstOfMany"&&S&&p||d==="lastOfMany"&&y&&p||d==="single"&&!p){I=!0;break}I||(r=!1);break}}}r&&(a[t]=s,u[3*t]=u[3*s],u[3*t+1]=u[3*s+1],u[3*t+2]=u[3*s+2],e[3*t]=e[3*s],e[3*t+1]=e[3*s+1],e[3*t+2]=e[3*s+2],t++)}return t}function g(u){switch(u){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function M(u){let e=0;for(const a of u||[])e|=1<<a;return e}class Z{transform(e){const a=this._transform(e),n=[a.points.buffer,a.rgb.buffer];a.pointIdFilterMap!=null&&n.push(a.pointIdFilterMap.buffer);for(const c of a.attributes)"buffer"in c.values&&O(c.values.buffer)&&c.values.buffer!==a.rgb.buffer&&n.push(c.values.buffer);return Promise.resolve({result:a,transferList:n})}_transform(e){const a=E(e.schema,e.geometryBuffer);let n=a.length/3,c=null;const m=new Array,t=h(e.primaryAttributeData,a,n);e.primaryAttributeData!=null&&t&&m.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:t});const s=h(e.modulationAttributeData,a,n);e.modulationAttributeData!=null&&s&&m.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:s});let r=_(e.rendererInfo,t,s,n);if(e.filterInfo&&e.filterInfo.length>0&&e.filterAttributesData!=null){const o=e.filterAttributesData.filter(k).map(l=>{const f=h(l,a,n),b={attributeInfo:l.attributeInfo,values:f};return m.push(b),b});c=new Uint32Array(n),n=Y(a,r,c,e.filterInfo,o)}for(const o of e.userAttributesData){const l=h(o,a,n);m.push({attributeInfo:o.attributeInfo,values:l})}3*n<r.length&&(r=new Uint8Array(r.buffer.slice(0,3*n))),j(a,n,e.elevationOffset);const i=G(a,n,z.fromData(e.obbData),v.fromJSON(e.inSR),v.fromJSON(e.outSR));return{obbData:e.obbData,points:i,rgb:r,attributes:m,pointIdFilterMap:c}}}function G(u,e,a,n,c){if(!R(u,n,0,u,c,0,e))throw new Error("Can't reproject");const m=A(a.center),t=w(),s=w(),r=A(a.halfSize);x(D,a.quaternion);const i=new Float32Array(3*e);for(let o=0;o<e;o++){let l=3*o;t[0]=u[l]-m[0],t[1]=u[l+1]-m[1],t[2]=u[l+2]-m[2],F(s,t,D),r[0]=Math.max(r[0],Math.abs(s[0])),r[1]=Math.max(r[1],Math.abs(s[1])),r[2]=Math.max(r[2],Math.abs(s[2])),i[l++]=t[0],i[l++]=t[1],i[l]=t[2]}return a.halfSize=r,i}function j(u,e,a){if(a!==0)for(let n=0;n<e;n++)u[3*n+2]+=a}const D=C();function L(){return new Z}export{L as default};
