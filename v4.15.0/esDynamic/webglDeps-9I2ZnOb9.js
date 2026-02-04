import{o as m}from"./BufferObject-8WrVGiNx.js";import{m as p,s as u}from"./FramebufferObject-CVFiq-un.js";import{s as c}from"./ProgramTemplate-A0nrytMh.js";import{e as l,a as d}from"./ProgramTemplate-A0nrytMh.js";import"./main-pOgmbpmS.js";import{A as $}from"./Texture-DxZPAhdk.js";import{h}from"./VertexArrayObject-CsH_48ab.js";class b{constructor(e){this._rctx=e,this._store=new Map}dispose(){this._store.forEach(e=>e.dispose()),this._store.clear()}acquire(e,t,r,s){const i=e+t+JSON.stringify(Array.from(r.entries())),o=this._store.get(i);if(o!=null)return o.ref(),o;const n=new c(this._rctx,e,t,r,s);return n.ref(),this._store.set(i,n),n}get test(){}}function y(a){const{options:e,value:t}=a;return typeof e[t]=="number"}function _(a){let e="";for(const t in a){const r=a[t];if(typeof r=="boolean")r&&(e+=`#define ${t}
`);else if(typeof r=="number")e+=`#define ${t} ${r.toFixed()}
`;else if(typeof r=="object")if(y(r)){const{value:s,options:i,namespace:o}=r,n=o?`${o}_`:"";for(const f in i)e+=`#define ${n}${f} ${i[f].toFixed()}
`;e+=`#define ${t} ${n}${s}
`}else{const s=r.options;let i=0;for(const o in s)e+=`#define ${s[o]} ${(i++).toFixed()}
`;e+=`#define ${t} ${s[r.value]}
`}}return e}export{m as BufferObject,p as FramebufferObject,c as Program,b as ProgramCache,u as Renderbuffer,l as ShaderCompiler,$ as Texture,h as VertexArrayObject,d as createProgram,_ as glslifyDefineMap};
