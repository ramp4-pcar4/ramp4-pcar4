import { b_ as f, cC as S, b5 as d } from './main-h0RsJOaN.js';
import { p } from './queryTopFeatures-SDKcD7wS.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function s(s,p$1,u,a){const m=f(s),i={...a},{data:f$1}=await p(m,S.from(p$1),u,i);return d.fromJSON(f$1)}

export { s as executeTopFeaturesQuery };
