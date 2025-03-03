import{i as t,f as s}from"./themeUtils-6Fo0adHJ.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const o=new WeakMap,a=new WeakMap;function p(e){a.set(e,new Promise(n=>o.set(e,n)))}function c(e){o.get(e)()}function r(e){return a.get(e)}async function m(e){if(await r(e),!!t())return s(e),new Promise(n=>requestAnimationFrame(()=>n()))}export{c as a,m as c,p as s};
