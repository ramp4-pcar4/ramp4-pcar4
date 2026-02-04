import { ai as p, aj as u } from './main-ba570a3b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const c={selection:c=>new p({color:new u([c.color.r/2,c.color.g/2,c.color.b/2,c.color.a])}),highlight:o=>o,popup:c=>new p({color:new u([c.color.g,c.color.b,c.color.r,c.color.a])})};function t(o){if(!o)return 0;let r=1;for(const t in c){if(t===o)break;r<<=1;}return r}const l=Object.keys(c);

export { c, l, t };
