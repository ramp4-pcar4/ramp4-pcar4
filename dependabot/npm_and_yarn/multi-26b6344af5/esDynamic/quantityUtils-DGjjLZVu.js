import{dd as e,ab as r}from"./main-0iYVBzEC.js";function c(n,u){return{type:e(u),value:n,unit:u}}function l(n){return{value:n}}function i(n,u){return{type:e(u),value:n,unit:u}}function s(n,u){return{type:e(u),value:n,unit:u}}function a(n,u,t="arithmetic"){return{type:e(u),value:n,unit:u,rotationType:t}}function f(n,u){const t=o(n,u);return n.type==="angle"?a(t,u,n.rotationType):c(t,u)}function o(n,u){return r(n.value,n.unit,u)}function p(n,u){return n==null?u:u==null||n.value>r(u.value,u.unit,n.unit)?n:u}function v(n,u){return n==null?null:{...n,value:n.value*u}}function g(n,u,t){if(u===t)return n;switch(t){case"arithmetic":case"geographic":return 90-n}}const m=i(0,"meters"),y=s(0,"square-meters");a(0,"radians");const h=a(0,"degrees"),d=a(0,"degrees","geographic");export{h as U,i as a,y as d,o as f,m as h,l as i,d as j,s as l,g as m,a as o,p,f as s,v as y};
