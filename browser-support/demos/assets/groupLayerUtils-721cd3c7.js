import { $, j } from './utils-8d12c7dd.js';
import { o } from './jsonContext-47969583.js';
import { z as s, b as a, f as f$1, i } from './main-74a89b3f.js';
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
const u="Group Layer",c="group-layer-save",l="group-layer-save-as",p=f$1.GROUP_LAYER_MAP;function m(e){return {isValid:"group"===e.type,errorMessage:"Layer.type should be 'group'"}}function y(e){return {isValid:s(e,p),errorMessage:`Layer.portalItem.typeKeywords should have '${p}'`}}function f(e,r){return {...o(e,"web-map",!0),initiator:r}}function v(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function d(e,r){r.title||=e.title,a(r,f$1.METADATA),i(r,p);}async function I(r,t){return $({layer:r,itemType:u,validateLayer:m,validateItem:y,createJSONContext:e=>f(e,r),createItemData:v,errorNamePrefix:c,saveResources:async(e,t)=>(r.sourceIsPortalItem||await e.removeAllResources().catch((()=>{})),p$1(r.resourceReferences,t))},t)}async function g(e,t,o){return j({layer:e,itemType:u,validateLayer:m,createJSONContext:r=>f(r,e),createItemData:v,errorNamePrefix:l,newItem:t,setItemProperties:d,saveResources:(r,t)=>p$1(e.resourceReferences,t)},o)}

export { I as save, g as saveAs };
