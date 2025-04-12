import { aJ as ge, aK as Fe, aL as Ie, aM as g, aN as E, af as j, aO as x, aP as I, aQ as i, aR as k } from './main-b03b5063.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function Z(t){return ge(t)||Fe(t)||Ie(t)}function N(s,o){const{format:a,timeZoneOptions:c,fieldType:l}=o??{};let m,u;if(c&&({timeZone:m,timeZoneName:u}=g(c.layerTimeZone,c.datesInUnknownTimezone,c.viewTimeZone,E(a||"short-date-short-time"),l)),"string"==typeof s&&isNaN(Date.parse("time-only"===l?`1970-01-01T${s}Z`:s)))return s;switch(l){case"date-only":{const r=E(a||"short-date");return "string"==typeof s?k(s,{...r}):j(s,{...r,timeZone:i})}case"time-only":{const r=E(a||"short-time");return "string"==typeof s?I(s,r):j(s,{...r,timeZone:i})}case"timestamp-offset":{if(!m&&"string"==typeof s&&new Date(s).toISOString()!==s)return s;const i=a||c?E(a||"short-date-short-time"):void 0,n=i?{...i,timeZone:m,timeZoneName:u}:void 0;return "string"==typeof s?x(s,n):j(s,n)}default:{const r=a||c?E(a||"short-date-short-time"):void 0;return j("string"==typeof s?new Date(s):s,r?{...r,timeZone:m,timeZoneName:u}:void 0)}}}

export { N, Z };
