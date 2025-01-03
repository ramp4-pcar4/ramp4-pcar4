import { $, j } from './utils-BQgYGeIB.js';
import { l, a, f as f$1, i as i$1 } from './main-C4Zge2Yj.js';
import './originUtils-Do2K3Z97.js';
import './multiOriginJSONSupportUtils-C5oGZ9U0.js';
import './jsonContext-DO-YVe7a.js';
import './saveAPIKeyUtils-BetFGCEM.js';
import './saveUtils-DDZ1XABG.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const n="Stream Service",i="Feed",o="stream-layer-save",m="stream-layer-save-as";function u(e){return {isValid:"stream"===e.type&&!!e.url&&!e.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function c(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function y(e,t){const{parsedUrl:n,title:i,fullExtent:o}=e;t.url=n.path,t.title||=i,t.extent=null,null!=o&&(t.extent=await l(o)),a(t,f$1.METADATA),i$1(t,f$1.SINGLE_LAYER);}async function p(t,r){return $({layer:t,itemType:n,additionalItemType:i,validateLayer:u,createItemData:c,errorNamePrefix:o},r)}async function f(e,r,a){return j({layer:e,itemType:n,validateLayer:u,createItemData:c,errorNamePrefix:m,newItem:r,setItemProperties:y},a)}

export { p as save, f as saveAs };
