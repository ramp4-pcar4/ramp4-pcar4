import { $, j } from './utils-d5ddc9b4.js';
import { l as l$1, b as a, f, i } from './main-b03b5063.js';
import './originUtils-f2cf510b.js';
import './multiOriginJSONSupportUtils-3d5af7a5.js';
import './jsonContext-8b9ca8a6.js';
import './saveAPIKeyUtils-a64fc206.js';
import './saveUtils-f4c00034.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const l="Image Service",y="imagery-layer-save",n="imagery-layer-save-as",o="imagery-tile-layer-save",m="imagery-tile-layer-save-as";function c(e){if("imagery"===e.type)return {isValid:!0};const{raster:t}=e,r="Function"===t?.datasetFormat?t.primaryRasters?.rasters[0]:t;return {isValid:"RasterTileServer"===r?.datasetFormat&&("Raster"===r.tileType||"Map"===r.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function p(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function u(e,t){const{parsedUrl:l,title:y,fullExtent:n}=e;t.url=l.path,t.title||=y;try{t.extent=await l$1(n);}catch{t.extent=void 0;}a(t,f.METADATA),"imagery-tile"===e.type&&i(t,f.TILED_IMAGERY);}async function g(t,r){const a="imagery"===t.type?y:o;return $({layer:t,itemType:l,validateLayer:c,createItemData:p,errorNamePrefix:a},r)}async function v(e,r,a){const i="imagery"===e.type?n:m;return j({layer:e,itemType:l,validateLayer:c,createItemData:p,errorNamePrefix:i,newItem:r,setItemProperties:u},a)}

export { g as save, v as saveAs };
