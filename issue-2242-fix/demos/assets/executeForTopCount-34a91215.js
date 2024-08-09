import { b$ as f, cD as S } from './main-531e2c38.js';
import { a } from './queryTopFeatures-62c19cfe.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function s(s,e,p){const u=f(s);return (await a(u,S.from(e),{...p})).data.count}

export { s as executeForTopCount };
