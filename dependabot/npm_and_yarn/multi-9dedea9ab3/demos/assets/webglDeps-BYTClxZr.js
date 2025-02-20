import { r } from './Program-B_1Ck0yX.js';
export { c as BufferObject, E as FramebufferObject, s as Renderbuffer } from './Program-B_1Ck0yX.js';
export { fB as createContext } from './main-YSH8Qvd0.js';
import { t } from './NestedMap-D_excvDj.js';
export { a as ShaderCompiler, o as VertexArrayObject, e as createProgram } from './ProgramTemplate-0vuAPRyT.js';
export { c as Texture } from './Texture-B2fqbWGu.js';
import './enums-CwcDCDam.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class s{constructor(r){this._rctx=r,this._store=new t;}dispose(){this._store.forEach((t=>t.forEach((t=>t.dispose())))),this._store.clear();}acquire(t,s,e,o){const i=this._store.get(t,s);if(null!=i)return i.ref(),i;const c=new r(this._rctx,t,s,e,o);return c.ref(),this._store.set(t,s,c),c}get test(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function e(e){const{options:n,value:o}=e;return "number"==typeof n[o]}function n(n){let o="";for(const t in n){const i=n[t];if("boolean"==typeof i)i&&(o+=`#define ${t}\n`);else if("number"==typeof i)o+=`#define ${t} ${i.toFixed()}\n`;else if("object"==typeof i)if(e(i)){const{value:e,options:n,namespace:f}=i,s=f?`${f}_`:"";for(const t in n)o+=`#define ${s}${t} ${n[t].toFixed()}\n`;o+=`#define ${t} ${s}${e}\n`;}else {const e=i.options;let n=0;for(const t in e)o+=`#define ${e[t]} ${(n++).toFixed()}\n`;o+=`#define ${t} ${e[i.value]}\n`;}}return o}

export { r as Program, s as ProgramCache, n as glslifyDefineMap };
