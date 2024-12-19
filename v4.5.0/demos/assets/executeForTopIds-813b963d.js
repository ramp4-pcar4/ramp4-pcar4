import { b9 as f, ba as v } from './main-5658cd6e.js';
import { m } from './queryTopFeatures-02a01387.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function s(s,e,p){const a=f(s);return (await m(a,v.from(e),{...p})).data.objectIds}

export { s as executeForTopIds };
