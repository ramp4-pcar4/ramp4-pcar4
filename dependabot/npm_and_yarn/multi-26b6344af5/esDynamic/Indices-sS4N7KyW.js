import{ca as r,aa as u}from"./main-0iYVBzEC.js";function U(n){if(Array.isArray(n)){if(n.length<r)return n}else if(n.length<r)return Array.from(n);let t=!0,e=!0;return n.some((o,s)=>(t=t&&o===0,e=e&&o===s,!t&&!e)),t?w(n.length):e?A(n.length):u(n)&&n.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT?n:c(n)}function c(n){let t=!0;for(const e of n){if(e>=65536)return u(n)?n:new Uint32Array(n);e>=256&&(t=!1)}return t?new Uint8Array(n):new Uint16Array(n)}function h(n){return n<=r?new Array(n):n<=65536?new Uint16Array(n):new Uint32Array(n)}function g(n){return n<=r?new Array(n):new Uint32Array(n)}let a=l(131072);const y=[0],f=(()=>{const n=new Uint16Array(65536);for(let t=0;t<n.length;++t)n[t]=t;return n})();function A(n){return n===1?y:n<r?Array.from(new Uint16Array(f.buffer,0,n)):n<f.length?new Uint16Array(f.buffer,0,n):(n>a.length&&(a=l(Math.max(2*a.length,n))),new Uint32Array(a.buffer,0,n))}function l(n){const t=new Uint32Array(n);for(let e=0;e<t.length;e++)t[e]=e;return t}let i=new Uint8Array(65536);function w(n){if(n===1)return y;if(n<r)return new Array(n).fill(0);if(n>i.length){const t=Math.max(2*i.length,n);i=new Uint8Array(t)}return new Uint8Array(i.buffer,0,n)}export{g as f,h as i,A as o,U as t,w};
