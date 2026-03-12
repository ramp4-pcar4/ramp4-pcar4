import{E as m,o as p}from"./VertexArrayObject-DTkLCIKs.js";import{x as l,s as u}from"./FramebufferObject-DQw0QX3p.js";import{r as c}from"./ProgramTemplate-CBS0ERm4.js";import{e as d,a as $}from"./ProgramTemplate-CBS0ERm4.js";import"./main-DnzmeE4U.js";import{t as x}from"./NestedMap-Ddo7BfvO.js";import{w as b}from"./Texture-DXSFJsEu.js";class h{constructor(e){this._rctx=e,this._store=new x}dispose(){this._store.forAll(e=>e.dispose()),this._store.clear()}acquire(e,t,r,i){const s=this._store.get(e,t);if(s!=null)return s.ref(),s;const o=new c(this._rctx,e,t,r,i);return o.ref(),this._store.set(e,t,o),o}get test(){}}function _(n){const{options:e,value:t}=n;return typeof e[t]=="number"}function g(n){let e="";for(const t in n){const r=n[t];if(typeof r=="boolean")r&&(e+=`#define ${t}
`);else if(typeof r=="number")e+=`#define ${t} ${r.toFixed()}
`;else if(typeof r=="object")if(_(r)){const{value:i,options:s,namespace:o}=r,a=o?`${o}_`:"";for(const f in s)e+=`#define ${a}${f} ${s[f].toFixed()}
`;e+=`#define ${t} ${a}${i}
`}else{const i=r.options;let s=0;for(const o in i)e+=`#define ${i[o]} ${(s++).toFixed()}
`;e+=`#define ${t} ${i[r.value]}
`}}return e}export{m as BufferObject,l as FramebufferObject,c as Program,h as ProgramCache,u as Renderbuffer,d as ShaderCompiler,b as Texture,p as VertexArrayObject,$ as createProgram,g as glslifyDefineMap};
