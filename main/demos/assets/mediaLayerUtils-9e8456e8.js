import { $, j } from './utils-e2460996.js';
import { o } from './jsonContext-a4547958.js';
import { l as l$1, b as a, f as f$1 } from './main-79b78ad8.js';
import { p as p$1 } from './resourceUtils-57190eba.js';
import './originUtils-f2cf510b.js';
import './multiOriginJSONSupportUtils-3d5af7a5.js';
import './saveAPIKeyUtils-1d8d05c0.js';
import './saveUtils-68d22863.js';
import './preload-helper-a4975f27.js';
import './resourceUtils-8e4024e0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const i="Media Layer",p="media-layer-save",u="media-layer-save-as",l=["media-layer:unsupported-source"];function m(e){return {isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function c(e){return o(e,"portal-item",!0)}function y(e){return e.layerJSON}async function f(e,r){const{title:t,fullExtent:n}=e;r.title||=t,r.extent=n?await l$1(n):null,a(r,f$1.METADATA);}async function d(r,t){return $({layer:r,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:p,supplementalUnsupportedErrors:l,saveResources:(e,t)=>p$1(r.resourceReferences,t)},t)}async function v(e,t,a){return j({layer:e,itemType:i,validateLayer:m,createJSONContext:e=>c(e),createItemData:y,errorNamePrefix:u,supplementalUnsupportedErrors:l,newItem:t,setItemProperties:f,saveResources:(r,t)=>p$1(e.resourceReferences,t)},a)}

export { d as save, v as saveAs };
