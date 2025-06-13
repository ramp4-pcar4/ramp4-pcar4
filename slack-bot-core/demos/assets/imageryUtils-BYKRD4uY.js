import { $, j } from './utils-CFClo0mQ.js';
import { l as l$1, b as a, f, i } from './main-B92PJIAd.js';
import './originUtils-CRfESh92.js';
import './multiOriginJSONSupportUtils-Dlz6FGm5.js';
import './jsonContext-BuY_yLVZ.js';
import './saveAPIKeyUtils-DkHYEHck.js';
import './saveUtils-DApQXVMS.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const l="Image Service",y="imagery-layer-save",n="imagery-layer-save-as",o="imagery-tile-layer-save",m="imagery-tile-layer-save-as";function c(e){if("imagery"===e.type)return {isValid:!0};const{raster:t}=e,r="Function"===t?.datasetFormat?t.primaryRasters?.rasters[0]:t;return {isValid:"RasterTileServer"===r?.datasetFormat&&("Raster"===r.tileType||"Map"===r.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function p(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function u(e,t){const{parsedUrl:l,title:y,fullExtent:n}=e;t.url=l.path,t.title||=y;try{t.extent=await l$1(n);}catch{t.extent=void 0;}a(t,f.METADATA),"imagery-tile"===e.type&&i(t,f.TILED_IMAGERY);}async function g(t,r){const a="imagery"===t.type?y:o;return $({layer:t,itemType:l,validateLayer:c,createItemData:p,errorNamePrefix:a},r)}async function v(e,r,a){const i="imagery"===e.type?n:m;return j({layer:e,itemType:l,validateLayer:c,createItemData:p,errorNamePrefix:i,newItem:r,setItemProperties:u},a)}

export { g as save, v as saveAs };
