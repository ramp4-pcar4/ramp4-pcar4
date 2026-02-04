import{E as m}from"./BufferObject-BqjZYFlH.js";import{r as c}from"./Program-CrCbEtB8.js";import{x as p,s as l}from"./Program-CrCbEtB8.js";import"./main-Dv0FawL-.js";import{t as u}from"./NestedMap-Ddo7BfvO.js";import{e as $,a as d}from"./ProgramTemplate-DwF55I5K.js";import{m as b}from"./Texture-Bga4WBjE.js";import{o as h}from"./VertexArrayObject-BI86K10r.js";class x{constructor(e){this._rctx=e,this._store=new u}dispose(){this._store.forAll(e=>e.dispose()),this._store.clear()}acquire(e,r,t,i){const o=this._store.get(e,r);if(o!=null)return o.ref(),o;const s=new c(this._rctx,e,r,t,i);return s.ref(),this._store.set(e,r,s),s}get test(){}}function _(n){const{options:e,value:r}=n;return typeof e[r]=="number"}function y(n){let e="";for(const r in n){const t=n[r];if(typeof t=="boolean")t&&(e+=`#define ${r}
`);else if(typeof t=="number")e+=`#define ${r} ${t.toFixed()}
`;else if(typeof t=="object")if(_(t)){const{value:i,options:o,namespace:s}=t,a=s?`${s}_`:"";for(const f in o)e+=`#define ${a}${f} ${o[f].toFixed()}
`;e+=`#define ${r} ${a}${i}
`}else{const i=t.options;let o=0;for(const s in i)e+=`#define ${i[s]} ${(o++).toFixed()}
`;e+=`#define ${r} ${i[t.value]}
`}}return e}export{m as BufferObject,p as FramebufferObject,c as Program,x as ProgramCache,l as Renderbuffer,$ as ShaderCompiler,b as Texture,h as VertexArrayObject,d as createProgram,y as glslifyDefineMap};
