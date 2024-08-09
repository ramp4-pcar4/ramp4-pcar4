import { b$ as f, cD as S, b6 as d } from './main-d907decb.js';
import { p } from './queryTopFeatures-aa8301a7.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function s(s,p$1,u,a){const m=f(s),i={...a},{data:f$1}=await p(m,S.from(p$1),u,i);return d.fromJSON(f$1)}

export { s as executeTopFeaturesQuery };
