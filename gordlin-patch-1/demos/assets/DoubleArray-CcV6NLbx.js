import { co as U, cp as y$1 } from './main-BpBTVFw9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t(n,t=!1){return n<=U?t?new Array(n).fill(0):new Array(n):new Float64Array(n)}function e(t){return (y$1(t)?t.length:t.byteLength/8)<=U?Array.from(t):new Float64Array(t)}function a(r,n,t){return Array.isArray(r)?r.slice(n,n+t):r.subarray(n,n+t)}function o(r,n){for(let t=0;t<n.length;++t)r[t]=n[t];return r}function y(r){return Array.isArray(r)?new Float64Array(r):r}

export { a, e, o, t, y };
