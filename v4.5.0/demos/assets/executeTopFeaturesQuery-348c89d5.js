import { b9 as f, ba as v, bb as x } from './main-5658cd6e.js';
import { d } from './queryTopFeatures-02a01387.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function s(s,p,u,a){const m=f(s),i={...a},{data:f$1}=await d(m,v.from(p),u,i);return x.fromJSON(f$1)}

export { s as executeTopFeaturesQuery };
