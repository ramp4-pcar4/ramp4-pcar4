import{cU as t,cV as s}from"./main-CzbArNue.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const o=new WeakMap,a=new WeakMap;function c(e){a.set(e,new Promise(n=>o.set(e,n)))}function p(e){o.get(e)()}function r(e){return a.get(e)}async function m(e){if(await r(e),!!t())return s(e),new Promise(n=>requestAnimationFrame(()=>n()))}export{p as a,m as c,c as s};
