import { U as U$1 } from './main-5658cd6e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function t$1(t,o){const{data:r}=await U$1(t,{responseType:"json",query:{f:"json",...o?.customParameters,token:o?.apiKey}});return r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function r(r,s){const a=await t$1(r,s);a.layers=a.layers.filter(t);const n={serviceJSON:a};if((a.currentVersion??0)<10.5)return n;const i=await t$1(r+"/layers",s);return n.layersJSON={layers:i.layers.filter(t),tables:i.tables},n}function t(e){return !e.type||"Feature Layer"===e.type}

export { r, t$1 as t };
