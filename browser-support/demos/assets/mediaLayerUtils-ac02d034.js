import { $, j } from './utils-8d12c7dd.js';
import { o } from './jsonContext-47969583.js';
import { l as l$1, b as a, f as f$1 } from './main-74a89b3f.js';
import { p as p$1 } from './resourceUtils-42b1bf3d.js';
import './originUtils-f2cf510b.js';
import './multiOriginJSONSupportUtils-3d5af7a5.js';
import './saveAPIKeyUtils-ba07e641.js';
import './saveUtils-6b03497e.js';
import './preload-helper-a4975f27.js';
import './resourceUtils-0cda3d83.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const i="Media Layer",p="media-layer-save",u="media-layer-save-as",l=["media-layer:unsupported-source"];function m(e){return {isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function c(e){return o(e,"portal-item",!0)}function y(e){return e.layerJSON}async function f(e,r){const{title:t,fullExtent:n}=e;r.title||=t,r.extent=n?await l$1(n):null,a(r,f$1.METADATA);}async function d(r,t){return $({layer:r,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:p,supplementalUnsupportedErrors:l,saveResources:(e,t)=>p$1(r.resourceReferences,t)},t)}async function v(e,t,a){return j({layer:e,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:u,supplementalUnsupportedErrors:l,newItem:t,setItemProperties:f,saveResources:(r,t)=>p$1(e.resourceReferences,t)},a)}

export { d as save, v as saveAs };
