import{r as a}from"./main-e6c796d9.js";import{t as h}from"./NestedMap-7c434b47.js";import{h as $}from"./ProgramTemplate-cc0d5dc0.js";class m{constructor(e){this._rctx=e,this._store=new h}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,o,s){const n=this._store.get(e,t);if(a(n))return n.ref(),n;const r=new $(this._rctx,e,t,o,s);return r.ref(),this._store.set(e,t,r),r}get test(){let e=0;return this._store.forEach(t=>t.forEach(o=>e+=o.hasGLName?2:1)),{cachedWebGLObjects:e}}}function p(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function _(i){let e="";for(const t in i){const o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(p(o)){const{value:s,options:n,namespace:r}=o,f=r?`${r}_`:"";for(const c in n)e+=`#define ${f}${c} ${n[c].toFixed()}
`;e+=`#define ${t} ${f}${s}
`}else{const s=o.options;let n=0;for(const r in s)e+=`#define ${s[r]} ${(n++).toFixed()}
`;e+=`#define ${t} ${s[o.value]}
`}}return e}export{_ as n,m as s};
