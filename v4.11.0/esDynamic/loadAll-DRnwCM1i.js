import{d as f,V as u,e,_ as d}from"./main-I34c1W55.js";async function y(o,t){return await o.load(),s(o,t)}async function s(o,t){const i=[],n=(...l)=>{for(const a of l)a!=null&&(Array.isArray(a)?n(...a):u.isCollection(a)?a.forEach(c=>n(c)):e.isLoadable(a)&&i.push(a))};t(n);let r=null;if(await f(i,async l=>{const a=await d(A(l)?l.loadAll():l.load());a.ok!==!1||r||(r=a)}),r)throw r.error;return o}function A(o){return"loadAll"in o&&typeof o.loadAll=="function"}export{s as a,y as t};
