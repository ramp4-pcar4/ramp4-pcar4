import { b4 as y } from './main-5658cd6e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function n(n){if(Array.isArray(n)){if(n.length<y)return n;for(const r of n)if(r>=65536)return new Uint32Array(n);return new Uint16Array(n)}if(n.length<y)return Array.from(n);if(n.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return n;for(const r of n)if(r>=65536)return n;return new Uint16Array(n)}function t(n){const t=3*n;return t<=y?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}let e=(()=>{const r=new Uint32Array(131072);for(let n=0;n<r.length;++n)r[n]=n;return r})();const i=[0],f=(()=>{const r=new Uint16Array(65536);for(let n=0;n<r.length;++n)r[n]=n;return r})();function o(n){if(1===n)return i;if(n<y)return Array.from(new Uint16Array(f.buffer,0,n));if(n<f.length)return new Uint16Array(f.buffer,0,n);if(n>e.length){const r=Math.max(2*e.length,n);e=new Uint32Array(r);for(let n=0;n<e.length;n++)e[n]=n;}return new Uint32Array(e.buffer,0,n)}function u(n){if(1===n)return i;if(n<y)return Array.from(new Uint16Array(f.buffer,0,n));if(n<f.length)return new Uint16Array(f.slice(0,n));if(n>e.length){const r=new Uint32Array(n);for(let n=0;n<r.length;n++)r[n]=n;return r}return new Uint32Array(e.slice(0,n))}

export { n, o, t, u };
