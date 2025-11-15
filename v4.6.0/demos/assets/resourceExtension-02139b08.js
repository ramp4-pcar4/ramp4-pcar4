import { aN as Ht } from './main-8822140d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function p(i){return o[t(i)]||e}function t(i){return "json"===i.type?"application/json":"blob"===i.type?i.blob.type:n(i.url)}function n(p){const t=Ht(p);return g[t]||a}const o={},a="text/plain",e=o[a],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in g)o[g[l]]=l;

export { p };
