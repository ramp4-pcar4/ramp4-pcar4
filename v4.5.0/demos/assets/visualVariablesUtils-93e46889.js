import { t as t$1, gu as o$1, eW as u$2 } from './main-5658cd6e.js';
import { L, t as t$2 } from './color-6132b2c2.js';
import { a as c$2 } from './definitions-281daf3f.js';
import { l as l$1 } from './visualVariablesUtils-1950eea1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const n$1=8388607,t=8388608,r$1=254,o=255,u$1=0,c$1=1,e=n=>(n&t)>>>23,f$1=t=>t&n$1,i=n=>e(n)===c$1?r$1:o;function p$1(n){return e(n)===c$1}function s(n,r){return ((r?t:0)|n)>>>0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const n=(n,l)=>n&&((...n)=>l.warn("DEBUG:",...n))||(()=>null),l=!1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function r(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function a(e){return {value:e.value,size:o$1(e.size)}}function u(e){return (e??[]).map((e=>a(e)))}function p(e){if("string"==typeof e||"number"==typeof e)return o$1(e);const s=e;return {type:"size",expression:s.expression,stops:u(s.stops)}}const c=e=>{const t=[],n=[],i=u(e),l=i.length;for(let r=0;r<6;r++){const e=i[Math.min(r,l-1)];t.push(e.value),n.push(null==e.size?c$2:u$2(e.size));}return {values:new Float32Array(t),sizes:new Float32Array(n)}};function f(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t||!s)return {vvFields:t,vvRanges:s};for(const n of e)if(n.field&&(t[n.type]=n.field),"size"===n.type){s.size||(s.size={});const e=n;switch(l$1(e)){case L.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:p(e.minSize),maxSize:p(e.maxSize)};break;case L.SIZE_SCALE_STOPS:s.size.scaleStops={stops:u(e.stops)};break;case L.SIZE_FIELD_STOPS:if(e.levels){const t={};for(const s in e.levels)t[s]=c(e.levels[s]);s.size.fieldStops={type:"level-dependent",levels:t};}else s.size.fieldStops={type:"static",...c(e.stops)};break;case L.SIZE_UNIT_VALUE:s.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation??void 0};}}else if("color"===n.type)s.color=g(n);else if("opacity"===n.type)s.opacity=m(n);else if("rotation"===n.type){const e=n;s.rotation={type:e.rotationType};}return {vvFields:t,vvRanges:s}}function m(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let e=0;e<8;++e){const n=s[Math.min(e,s.length-1)];t.values[e]=n.value,t.opacities[e]=n.opacity;}}}else {if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=s;}}return t}function v(e,t,s){e[4*t+0]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a;}function g(t){if(t$1(t))return null;if(t.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof t.field){if(!t.stops)return null;{if(t.stops.length>8)return null;s.field=t.field;const e=t.stops;for(let t=0;t<8;++t){const n=e[Math.min(t,e.length-1)];s.values[t]=n.value,v(s.colors,t,n.color);}}}else {if(!(t.stops&&t.stops.length>=0))return null;{const e=t.stops&&t.stops.length>=0&&t.stops[0].color;for(let t=0;t<8;t++)s.values[t]=1/0,v(s.colors,t,e);}}for(let e=0;e<32;e+=4)t$2(s.colors,e,!0);return s}

export { n$1 as a, f as b, c$1 as c, e, f$1 as f, i, l, n, p$1 as p, r, s, u$1 as u };
