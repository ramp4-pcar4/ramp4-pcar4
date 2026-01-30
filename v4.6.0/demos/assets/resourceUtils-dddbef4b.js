import { a0 as has } from './main-8822140d.js';
import { u } from './basicInterfaces-f85cdac5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class t{constructor(t){this.data=t,this.type="encoded-mesh-texture",this.encoding=u.KTX2_ENCODING;}}function r(e){return "encoded-mesh-texture"===e?.type}async function n(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function o(r,n){if(n===u.KTX2_ENCODING)return new t(r);const o=new Blob([r],{type:n}),c=URL.createObjectURL(o),s=new Image;if(has("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{o(),e(s);},n=e=>{o(),t(e);},o=()=>{URL.revokeObjectURL(c),s.removeEventListener("load",r),s.removeEventListener("error",n);};s.addEventListener("load",r),s.addEventListener("error",n),s.src=c;}));try{s.src=c,await s.decode();}catch(i){console.warn("Failed decoding HTMLImageElement");}return URL.revokeObjectURL(c),s}

export { n, o, r, t };
