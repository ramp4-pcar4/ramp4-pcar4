import{ac as s}from"./main-Cv8ITM2j.js";function a(t){return 32+t.length}const f=16;function g(t){if(!t)return 0;let n=o;for(const e in t)t.hasOwnProperty(e)&&(n+=u(t[e],!1));return n}function y(t){if(!t)return 0;if(typeof t[0]=="number")return h(t);if(Array.isArray(t))return l(t);let n=o;for(const e in t)t.hasOwnProperty(e)&&(n+=u(t[e]));return n}function l(t){const n=t.length;if(n===0||typeof t[0]=="number")return c(t,8);let e=i;for(let r=0;r<n;r++)e+=u(t[r]);return e}function u(t,n=!0){switch(typeof t){case"object":return n?y(t):o;case"string":return a(t);case"number":return f;case"boolean":return 4;default:return 8}}function h(...t){return t.reduce((n,e)=>n+(e?s(e)?e.byteLength+p:Array.isArray(e)?c(e,f):0:0),0)}function c(t,n){return i+t.length*n}const o=32,i=16,p=145;export{i as a,g as e,h as i,f as n,o as s,y as u,p as y};
