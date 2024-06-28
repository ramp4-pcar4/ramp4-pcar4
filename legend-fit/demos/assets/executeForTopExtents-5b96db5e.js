import { bY as f, cA as S, aI as M } from './main-11560473.js';
import { d } from './queryTopFeatures-0336ad38.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function a(a,m,n){const s=f(a),i=await d(s,S.from(m),{...n}),u=i.data.extent;return !u||isNaN(u.xmin)||isNaN(u.ymin)||isNaN(u.xmax)||isNaN(u.ymax)?{count:i.data.count,extent:null}:{count:i.data.count,extent:M.fromJSON(u)}}

export { a as executeForTopExtents };
