import { c } from './basicInterfaces-9de11baf.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class n{constructor(n){this.data=n,this.type="encoded-mesh-texture",this.encoding=c.KTX2_ENCODING;}}function t(e){return "encoded-mesh-texture"===e?.type}async function r(e){return new Promise(((n,t)=>{const r=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;n(JSON.parse(e));},o.onerror=e=>{t(e);},o.readAsText(r);}))}async function o(t,r){return r===c.KTX2_ENCODING?new n(t):new Promise(((e,n)=>{const o=new Blob([t],{type:r}),s=URL.createObjectURL(o),c=new Image,d=()=>{URL.revokeObjectURL(s),"decode"in c?c.decode().then((()=>e(c)),(()=>e(c))).then(a):(e(c),a());},i=e=>{URL.revokeObjectURL(s),n(e),a();},a=()=>{c.removeEventListener("load",d),c.removeEventListener("error",i);};c.addEventListener("load",d),c.addEventListener("error",i),c.src=s;}))}

export { n, o, r, t };
