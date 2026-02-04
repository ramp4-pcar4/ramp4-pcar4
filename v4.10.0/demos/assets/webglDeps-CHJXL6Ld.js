import{E as _}from"./BufferObject-COmOSznC.js";import{r as c}from"./Program-DtvrcJVH.js";import{x as y,s as j}from"./Program-DtvrcJVH.js";import{cA as v}from"./main-CzbArNue.js";import{t as p}from"./NestedMap-CImDozOA.js";import{e as O,a as P}from"./ProgramTemplate-D4pS209o.js";import{o as C}from"./VertexArrayObject-CH1EhbG6.js";import"./preload-helper-ExcqyqRp.js";class ${constructor(e){this._rctx=e,this._store=new p}dispose(){this._store.forAll(e=>e.dispose()),this._store.clear()}acquire(e,t,o,n){const r=this._store.get(e,t);if(r!=null)return r.ref(),r;const s=new c(this._rctx,e,t,o,n);return s.ref(),this._store.set(e,t,s),s}get test(){}}function l(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function d(i){let e="";for(const t in i){const o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(l(o)){const{value:n,options:r,namespace:s}=o,f=s?`${s}_`:"";for(const a in r)e+=`#define ${f}${a} ${r[a].toFixed()}
`;e+=`#define ${t} ${f}${n}
`}else{const n=o.options;let r=0;for(const s in n)e+=`#define ${n[s]} ${(r++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{_ as BufferObject,y as FramebufferObject,c as Program,$ as ProgramCache,j as Renderbuffer,O as ShaderCompiler,v as Texture,C as VertexArrayObject,P as createProgram,d as glslifyDefineMap};
