import{cS as s,cT as o}from"./main-DCIX61zy.js";const a=new WeakMap,e=new WeakMap;function r(n){e.set(n,new Promise(t=>a.set(n,t)))}function i(n){a.get(n)()}function c(n){return e.get(n)}async function m(n){if(await c(n),!!s())return o(n),new Promise(t=>requestAnimationFrame(()=>t()))}export{i as a,m as c,r as s};
