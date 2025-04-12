import{t as O,r as d,fA as x,f as A,fB as $,fC as k}from"./main-46bfe858.js";import{S as D}from"./quat-74ae2d39.js";import{w as F,l as R,c as B,I as U,e as z}from"./I3SBinaryReader-5dbb37f1.js";import{r as J,n as S}from"./vec3f32-ad1dc57f.js";import{a as N,b as V,d as T}from"./PointCloudUniqueValueRenderer-048c084b.js";import"./preload-helper-388ac9d5.js";import"./mat3f64-221ce671.js";import"./quatf64-3363c48e.js";import"./VertexAttribute-15d1866a.js";function _(i,t,l,o){const{rendererJSON:u,isRGBRenderer:p}=i;let n=null,a=null;if(t&&p)n=t;else if(t&&u?.type==="pointCloudUniqueValueRenderer"){a=N.fromJSON(u);const e=a.colorUniqueValueInfos;n=new Uint8Array(3*o);const s=v(a.fieldTransformType);for(let r=0;r<o;r++){const c=(s?s(t[r]):t[r])+"";for(let f=0;f<e.length;f++)if(e[f].values.includes(c)){n[3*r]=e[f].color.r,n[3*r+1]=e[f].color.g,n[3*r+2]=e[f].color.b;break}}}else if(t&&u?.type==="pointCloudStretchRenderer"){a=V.fromJSON(u);const e=a.stops;n=new Uint8Array(3*o);const s=v(a.fieldTransformType);for(let r=0;r<o;r++){const c=s?s(t[r]):t[r],f=e.length-1;if(c<e[0].value)n[3*r]=e[0].color.r,n[3*r+1]=e[0].color.g,n[3*r+2]=e[0].color.b;else if(c>=e[f].value)n[3*r]=e[f].color.r,n[3*r+1]=e[f].color.g,n[3*r+2]=e[f].color.b;else for(let b=1;b<e.length;b++)if(c<e[b].value){const m=(c-e[b-1].value)/(e[b].value-e[b-1].value);n[3*r]=e[b].color.r*m+e[b-1].color.r*(1-m),n[3*r+1]=e[b].color.g*m+e[b-1].color.g*(1-m),n[3*r+2]=e[b].color.b*m+e[b-1].color.b*(1-m);break}}}else if(t&&u?.type==="pointCloudClassBreaksRenderer"){a=T.fromJSON(u);const e=a.colorClassBreakInfos;n=new Uint8Array(3*o);const s=v(a.fieldTransformType);for(let r=0;r<o;r++){const c=s?s(t[r]):t[r];for(let f=0;f<e.length;f++)if(c>=e[f].minValue&&c<=e[f].maxValue){n[3*r]=e[f].color.r,n[3*r+1]=e[f].color.g,n[3*r+2]=e[f].color.b;break}}}else{n=new Uint8Array(3*o);for(let e=0;e<n.length;e++)n[e]=255}if(l&&a&&a.colorModulation){const e=a.colorModulation.minValue,s=a.colorModulation.maxValue,r=.3;for(let c=0;c<o;c++){const f=l[c],b=f>=s?1:f<=e?r:r+(1-r)*(f-e)/(s-e);n[3*c]=b*n[3*c],n[3*c+1]=b*n[3*c+1],n[3*c+2]=b*n[3*c+2]}}return n}function q(i,t){if(i.encoding==null||i.encoding===""){const l=F(t,i);if(O(l.vertexAttributes.position))return;const o=R(t,l.vertexAttributes.position),u=l.header.fields,p=[u.offsetX,u.offsetY,u.offsetZ],n=[u.scaleX,u.scaleY,u.scaleZ],a=o.length/3,e=new Float64Array(3*a);for(let s=0;s<a;s++)e[3*s]=o[3*s]*n[0]+p[0],e[3*s+1]=o[3*s+1]*n[1]+p[1],e[3*s+2]=o[3*s+2]*n[2]+p[2];return e}if(i.encoding==="lepcc-xyz")return B(t).result}function g(i,t,l){return d(i)&&i.attributeInfo.useElevation?t?E(t,l):null:d(i)&&i.attributeInfo.storageInfo?U(i.attributeInfo.storageInfo,i.buffer,l):null}function E(i,t){const l=new Float64Array(t);for(let o=0;o<t;o++)l[o]=i[3*o+2];return l}function P(i,t,l,o,u){const p=i.length/3;let n=0;for(let a=0;a<p;a++){let e=!0;for(let s=0;s<o.length&&e;s++){const{filterJSON:r}=o[s],c=u[s].values[a];switch(r.type){case"pointCloudValueFilter":{const f=r.mode==="exclude";r.values.includes(c)===f&&(e=!1);break}case"pointCloudBitfieldFilter":{const f=w(r.requiredSetBits),b=w(r.requiredClearBits);(c&f)===f&&!(c&b)||(e=!1);break}case"pointCloudReturnFilter":{const f=15&c,b=c>>>4&15,m=b>1,C=f===1,y=f===b;let I=!1;for(const h of r.includedReturns)if(h==="last"&&y||h==="firstOfMany"&&C&&m||h==="lastOfMany"&&y&&m||h==="single"&&!m){I=!0;break}I||(e=!1);break}}}e&&(l[n]=a,i[3*n]=i[3*a],i[3*n+1]=i[3*a+1],i[3*n+2]=i[3*a+2],t[3*n]=t[3*a],t[3*n+1]=t[3*a+1],t[3*n+2]=t[3*a+2],n++)}return n}function v(i){return i==null||i==="none"?null:i==="low-four-bit"?t=>15&t:i==="high-four-bit"?t=>(240&t)>>4:i==="absolute-value"?t=>Math.abs(t):i==="modulo-ten"?t=>t%10:null}function w(i){let t=0;for(const l of i||[])t|=1<<l;return t}class X{transform(t){const l=this._transform(t),o=[l.points.buffer,l.rgb.buffer];d(l.pointIdFilterMap)&&o.push(l.pointIdFilterMap.buffer);for(const u of l.attributes)"buffer"in u.values&&x(u.values.buffer)&&u.values.buffer!==l.rgb.buffer&&o.push(u.values.buffer);return Promise.resolve({result:l,transferList:o})}_transform(t){const l=q(t.schema,t.geometryBuffer);let o=l.length/3,u=null;const p=[],n=g(t.primaryAttributeData,l,o);d(t.primaryAttributeData)&&n&&p.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});const a=g(t.modulationAttributeData,l,o);d(t.modulationAttributeData)&&a&&p.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:a});let e=_(t.rendererInfo,n,a,o);if(t.filterInfo&&t.filterInfo.length>0&&d(t.filterAttributesData)){const r=t.filterAttributesData.filter(d).map(c=>{const f=g(c,l,o),b={attributeInfo:c.attributeInfo,values:f};return p.push(b),b});u=new Uint32Array(o),o=P(l,e,u,t.filterInfo,r)}for(const r of t.userAttributesData){const c=g(r,l,o);p.push({attributeInfo:r.attributeInfo,values:c})}3*o<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(l,o,t.elevationOffset);const s=this._transformCoordinates(l,o,t.obb,A.fromJSON(t.inSR),A.fromJSON(t.outSR));return{obb:t.obb,points:s,rgb:e,attributes:p,pointIdFilterMap:u}}_transformCoordinates(t,l,o,u,p){if(!$(t,u,0,t,p,0,l))throw new Error("Can't reproject");const n=J(o.center[0],o.center[1],o.center[2]),a=S(),e=S();D(M,o.quaternion);const s=new Float32Array(3*l);for(let r=0;r<l;r++)a[0]=t[3*r]-n[0],a[1]=t[3*r+1]-n[1],a[2]=t[3*r+2]-n[2],k(e,a,M),o.halfSize[0]=Math.max(o.halfSize[0],Math.abs(e[0])),o.halfSize[1]=Math.max(o.halfSize[1],Math.abs(e[1])),o.halfSize[2]=Math.max(o.halfSize[2],Math.abs(e[2])),s[3*r]=a[0],s[3*r+1]=a[1],s[3*r+2]=a[2];return s}_applyElevationOffsetInPlace(t,l,o){if(o!==0)for(let u=0;u<l;u++)t[3*u+2]+=o}}const M=z();function tt(){return new X}export{tt as default};
