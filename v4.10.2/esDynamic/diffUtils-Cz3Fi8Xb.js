import{V as b,bf as w,aD as A}from"./main-kpG51UWM.js";const k=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function y(t){return t instanceof A}function h(t){return t instanceof b?Object.keys(t.items):y(t)?w(t).keys():t?Object.keys(t):[]}function p(t,e){return t instanceof b?t.items[e]:t[e]}function O(t,e){return!(!Array.isArray(t)||!Array.isArray(e))&&t.length!==e.length}function s(t){return t?t.declaredClass:null}function V(t,e){const o=t.diff;if(o&&typeof o=="function")return o(t,e);const i=h(t),f=h(e);if(i.length===0&&f.length===0)return;if(!i.length||!f.length||O(t,e))return{type:"complete",oldValue:t,newValue:e};const c=f.filter(n=>!i.includes(n)),j=i.filter(n=>!f.includes(n)),d=i.filter(n=>f.includes(n)&&p(t,n)!==p(e,n)).concat(c,j).sort(),m=s(t);if(m&&k.has(m)&&d.length)return{type:"complete",oldValue:t,newValue:e};let a;const D=y(t)&&y(e);for(const n of d){const l=p(t,n),r=p(e,n);let u;if((D||typeof l!="function"&&typeof r!="function")&&l!==r&&(l!=null||r!=null)){if(o&&o[n]&&typeof o[n]=="function")u=o[n]?.(l,r);else if(l instanceof Date&&r instanceof Date){if(l.getTime()===r.getTime())continue;u={type:"complete",oldValue:l,newValue:r}}else u=typeof l=="object"&&typeof r=="object"&&s(l)===s(r)?V(l,r):{type:"complete",oldValue:l,newValue:r};u!=null&&(a!=null?a.diff[n]=u:a={type:"partial",diff:{[n]:u}})}}return a}function S(t,e){return g(t,e)}function g(t,e){if(t==null)return!1;const o=e.split(".");let i=t;for(const f of o){if(i.type==="complete")return!0;if(i.type!=="partial")return!1;{const c=i.diff[f];if(!c)return!1;i=c}}return!0}function C(t,e){if(!t)return!1;if(t.type==="partial"){const o=Object.keys(t.diff);return o.length===1&&o[0]===e}return!1}function P(t,e){if(typeof t!="function"&&typeof e!="function"&&(t!=null||e!=null))return t==null||e==null||typeof t=="object"&&typeof e=="object"&&s(t)!==s(e)?{type:"complete",oldValue:t,newValue:e}:V(t,e)}export{P as d,g as p,S as s,C as y};
