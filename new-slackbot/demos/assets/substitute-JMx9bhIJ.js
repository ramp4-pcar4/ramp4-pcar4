import { aa as r, ab as t, ac as u$1, ad as j, H as s$1 } from './main-CjrSZKDN.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const i=()=>s$1.getLogger("esri.intl.substitute");function s(t,r$1,n={}){const{format:o={}}=n;return r(t,(t=>u(t,r$1,o)))}function u(t$1,e,n){let o,i;const s=t$1.indexOf(":");if(-1===s?o=t$1.trim():(o=t$1.slice(0,s).trim(),i=t$1.slice(s+1).trim()),!o)return "";const u=t(o,e);if(null==u)return "";const m=(i?n?.[i]:null)??n?.[o];return m?c(u,m):i?a(u,i):f(u)}function c(t,r){switch(r.type){case"date":return j(t,r.intlOptions);case"number":return u$1(t,r.intlOptions);default:return i().warn("missing format descriptor for key {key}"),f(t)}}function a(t,r){switch(r.toLowerCase()){case"dateformat":return j(t);case"numberformat":return u$1(t);default:return i().warn(`inline format is unsupported since 4.12: ${r}`),/^(dateformat|datestring)/i.test(r)?j(t):/^numberformat/i.test(r)?u$1(t):f(t)}}function f(t){switch(typeof t){case"string":return t;case"number":return u$1(t);case"boolean":return ""+t;default:return t instanceof Date?j(t):""}}

export { s };
