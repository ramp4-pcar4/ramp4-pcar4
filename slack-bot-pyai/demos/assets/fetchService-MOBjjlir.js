import { t as t$1 } from './lazyLayerLoader-Bh2CwD7h.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function t(t,a){const{loadContext:r,...s}=a||{},i=r?await r.fetchServiceMetadata(t,s):await t$1(t,s);c(i),n(i);const o={serviceJSON:i};if((i.currentVersion??0)<10.5)return o;const l=`${t}/layers`,y=r?await r.fetchServiceMetadata(l,s):await t$1(l,s);return c(y),n(y),o.layersJSON={layers:y.layers,tables:y.tables},o}function a(e){return "Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function r(e){return "Table"===e.type}function n(e){e.layers=e.layers?.filter(a),e.tables=e.tables?.filter(r);}function s(e){e.type||="Feature Layer";}function i(e){e.type||="Table";}function c(e){e.layers?.forEach(s),e.tables?.forEach(i);}

export { t };
