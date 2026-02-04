import{E as m}from"./BufferObject-DqJSjWFs.js";import{r as c}from"./Program-1XjJitsM.js";import{x as p,s as l}from"./Program-1XjJitsM.js";import{cy as u}from"./main-DCIX61zy.js";import{t as $}from"./NestedMap-Ddo7BfvO.js";import{e as d,a as h}from"./ProgramTemplate-B_NcbdFz.js";import{o as x}from"./VertexArrayObject-C4kjI814.js";class b{constructor(e){this._rctx=e,this._store=new $}dispose(){this._store.forAll(e=>e.dispose()),this._store.clear()}acquire(e,r,t,i){const o=this._store.get(e,r);if(o!=null)return o.ref(),o;const s=new c(this._rctx,e,r,t,i);return s.ref(),this._store.set(e,r,s),s}get test(){}}function y(n){const{options:e,value:r}=n;return typeof e[r]=="number"}function _(n){let e="";for(const r in n){const t=n[r];if(typeof t=="boolean")t&&(e+=`#define ${r}
`);else if(typeof t=="number")e+=`#define ${r} ${t.toFixed()}
`;else if(typeof t=="object")if(y(t)){const{value:i,options:o,namespace:s}=t,a=s?`${s}_`:"";for(const f in o)e+=`#define ${a}${f} ${o[f].toFixed()}
`;e+=`#define ${r} ${a}${i}
`}else{const i=t.options;let o=0;for(const s in i)e+=`#define ${i[s]} ${(o++).toFixed()}
`;e+=`#define ${r} ${i[t.value]}
`}}return e}export{m as BufferObject,p as FramebufferObject,c as Program,b as ProgramCache,l as Renderbuffer,d as ShaderCompiler,u as Texture,x as VertexArrayObject,h as createProgram,_ as glslifyDefineMap};
