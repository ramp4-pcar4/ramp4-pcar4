import { $, j } from './utils-45cc960e.js';
import { l, b as a, f as f$1, i as i$1 } from './main-8822140d.js';
import './originUtils-f2cf510b.js';
import './multiOriginJSONSupportUtils-3d5af7a5.js';
import './jsonContext-ab211228.js';
import './saveAPIKeyUtils-c56d14e4.js';
import './saveUtils-3f9c0803.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const n="Stream Service",i="Feed",o="stream-layer-save",m="stream-layer-save-as";function u(e){return {isValid:"stream"===e.type&&!!e.url&&!e.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function c(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function y(e,t){const{parsedUrl:n,title:i,fullExtent:o}=e;t.url=n.path,t.title||=i,t.extent=null,null!=o&&(t.extent=await l(o)),a(t,f$1.METADATA),i$1(t,f$1.SINGLE_LAYER);}async function p(t,r){return $({layer:t,itemType:n,additionalItemType:i,validateLayer:u,createItemData:c,errorNamePrefix:o},r)}async function f(e,r,a){return j({layer:e,itemType:n,validateLayer:u,createItemData:c,errorNamePrefix:m,newItem:r,setItemProperties:y},a)}

export { p as save, f as saveAs };
