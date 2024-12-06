import{r as c}from"./Program-CQEEsZeh.js";import{c as m,E as p,s as u}from"./Program-CQEEsZeh.js";import{fa as l}from"./main-C0SGMMlt.js";import{t as $}from"./NestedMap-CJlcHrNH.js";import{a as d,o as h,e as b}from"./ProgramTemplate-BSJ8asU3.js";import{c as x}from"./Texture-CAXTLpVt.js";class _{constructor(e){this._rctx=e,this._store=new $}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,r,a){const s=this._store.get(e,t);if(s!=null)return s.ref(),s;const o=new c(this._rctx,e,t,r,a);return o.ref(),this._store.set(e,t,o),o}get test(){}}function g(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function y(i){let e="";for(const t in i){const r=i[t];if(typeof r=="boolean")r&&(e+=`#define ${t}
`);else if(typeof r=="number")e+=`#define ${t} ${r.toFixed()}
`;else if(typeof r=="object")if(g(r)){const{value:a,options:s,namespace:o}=r,n=o?`${o}_`:"";for(const f in s)e+=`#define ${n}${f} ${s[f].toFixed()}
`;e+=`#define ${t} ${n}${a}
`}else{const a=r.options;let s=0;for(const o in a)e+=`#define ${a[o]} ${(s++).toFixed()}
`;e+=`#define ${t} ${a[r.value]}
`}}return e}export{m as BufferObject,p as FramebufferObject,c as Program,_ as ProgramCache,u as Renderbuffer,d as ShaderCompiler,x as Texture,h as VertexArrayObject,l as createContext,b as createProgram,y as glslifyDefineMap};
