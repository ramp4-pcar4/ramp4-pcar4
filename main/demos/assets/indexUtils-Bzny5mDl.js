import{ac as c,gH as y,gI as d,gJ as m,fZ as p,X as g,gK as _,a4 as h,_ as b,Z as w,s as A,fo as B}from"./main-Bd_03BNf.js";import{o as I,i as R}from"./Indices-3uFkMfk1.js";import{E as u}from"./enums-Dk3osxpS.js";function S(e,t){l(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function l(e,t,o=2,n=o){const a=t.length/2;let r=0,i=0;if(!c(t)||y(t)){for(let s=0;s<a;++s)e[r]=t[i],e[r+1]=t[i+1],r+=o,i+=n;return}const f=d(t);if(m(t))for(let s=0;s<a;++s)e[r]=Math.max(t[i]/f,-1),e[r+1]=Math.max(t[i+1]/f,-1),r+=o,i+=n;else for(let s=0;s<a;++s)e[r]=t[i]/f,e[r+1]=t[i+1]/f,r+=o,i+=n}function $(e,t,o,n){const a=e.typedBuffer,r=e.typedBufferStride,i=n?.count??e.count;let f=(n?.dstIndex??0)*r;for(let s=0;s<i;++s)a[f]=t,a[f+1]=o,f+=r}Object.freeze(Object.defineProperty({__proto__:null,fill:$,normalizeIntegerBuffer:l,normalizeIntegerBufferView:S},Symbol.toStringTag,{value:"Module"}));class v{constructor(t){this._streamDataRequester=t}async loadJSON(t,o){return this._load("json",t,o)}async loadBinary(t,o){return p(t)?(g(o),_(t)):this._load("binary",t,o)}async loadImage(t,o){return this._load("image",t,o)}async _load(t,o,n){if(this._streamDataRequester==null)return(await h(o,{responseType:q[t]})).data;const a=await b(this._streamDataRequester.request(o,t,n));if(a.ok===!0)return a.value;throw w(a.error),new A("glt-loader-request-error",`Request for resource failed: ${a.error}`)}}const q={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function z(e,t){switch(t){case u.TRIANGLES:return T(e);case u.TRIANGLE_STRIP:return j(e);case u.TRIANGLE_FAN:return N(e)}}function T(e){return typeof e=="number"?I(e):B(e)?new Uint16Array(e):e}function j(e){const t=typeof e=="number"?e:e.length;if(t<3)return[];const o=t-2,n=R(3*o);if(typeof e=="number"){let a=0;for(let r=0;r<o;r+=1)r%2==0?(n[a++]=r,n[a++]=r+1,n[a++]=r+2):(n[a++]=r+1,n[a++]=r,n[a++]=r+2)}else{let a=0;for(let r=0;r<o;r+=1)r%2==0?(n[a++]=e[r],n[a++]=e[r+1],n[a++]=e[r+2]):(n[a++]=e[r+1],n[a++]=e[r],n[a++]=e[r+2])}return n}function N(e){const t=typeof e=="number"?e:e.length;if(t<3)return new Uint16Array(0);const o=t-2,n=o<=65536?new Uint16Array(3*o):new Uint32Array(3*o);if(typeof e=="number"){let f=0;for(let s=0;s<o;++s)n[f++]=0,n[f++]=s+1,n[f++]=s+2;return n}const a=e[0];let r=e[1],i=0;for(let f=0;f<o;++f){const s=e[f+2];n[i++]=a,n[i++]=r,n[i++]=s,r=s}return n}export{l as a,S as b,$ as l,v as n,z as o};
