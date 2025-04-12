import { A as x, c as s, a2 as s$1, $ as a$1 } from './main-5658cd6e.js';
import { a } from './lazyLayerLoader-944c55cd.js';
import { getNumLayersAndTables as v$1, preprocessFSItemData as w$1, getSubtypeGroupLayerIds as j$1, getFirstLayerOrTableId as I$1 } from './layersLoader-46b93c0e.js';
import { t } from './fetchService-6c0072b8.js';
import './preload-helper-a4975f27.js';
import './jsonContext-aa5b3c08.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function l(e){!e.portalItem||e.portalItem instanceof x||(e={...e,portalItem:new x(e.portalItem)});const r=await y(e.portalItem);return new(r.constructor)({portalItem:e.portalItem,...r.properties})}async function y(e){await e.load();return p(await m(e))}async function m(r){switch(r.type){case"Map Service":return f(r);case"Feature Service":return L(r);case"Feature Collection":return w(r);case"Scene Service":return N(r);case"Image Service":return d(r);case"Stream Service":return S();case"Vector Tile Service":return I();case"GeoJson":return g();case"CSV":return T();case"KML":return v();case"WFS":return j();case"WMTS":return G();case"WMS":return M();case"Feed":return h();default:throw new s("portal:unknown-item-type","Unknown item type '${type}'",{type:r.type})}}async function p(e){const r=a[e.className];return {constructor:await r(),properties:e.properties}}async function f(e){return await b(e)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function L(e){if(s$1(e,"Oriented Imagery Layer"))return F(e);const r=await C(e);if("object"==typeof r){const e={};return null!=r.id&&(e.layerId=r.id),{className:r.className||"FeatureLayer",properties:e}}return {className:"GroupLayer"}}async function N(e){const a=await C(e);if("object"==typeof a){const t$1={};let s;if(null!=a.id?(t$1.layerId=a.id,s=`${e.url}/layers/${a.id}`):s=e.url,e.typeKeywords?.length)for(const a of Object.keys(a$1))if(e.typeKeywords.includes(a))return {className:a$1[a]};const n=await t(s);return {className:a$1[n?.layerType]||"SceneLayer",properties:t$1}}if(!1===a){return "Voxel"===(await t(e.url))?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"}}return {className:"GroupLayer"}}async function w(e){await e.load();const r=s$1(e,"Map Notes"),a=s$1(e,"Markup");if(r||a)return {className:"MapNotesLayer"};if(s$1(e,"Route Layer"))return {className:"RouteLayer"};const t=await e.fetchData();return 1===v$1(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function d(e){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return {className:"ElevationLayer"};if(r.includes("tiled imagery"))return {className:"ImageryTileLayer"};const a=(await e.fetchData())?.layerType;if("ArcGISTiledImageServiceLayer"===a)return {className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===a)return {className:"ImageryLayer"};const t$1=await t(e.url),s=t$1.cacheType?.toLowerCase(),n=t$1.capabilities?.toLowerCase().includes("tilesonly");return "map"===s||n?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function S(){return {className:"StreamLayer"}}function I(){return {className:"VectorTileLayer"}}function g(){return {className:"GeoJSONLayer"}}function T(){return {className:"CSVLayer"}}function v(){return {className:"KMLLayer"}}function j(){return {className:"WFSLayer"}}function M(){return {className:"WMSLayer"}}function G(){return {className:"WMTSLayer"}}function h(){return {className:"StreamLayer"}}async function F(e){await e.load();const r=await e.fetchData();return r.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:r}}async function b(e){return (await t(e.url)).tileInfo}async function C(e){const r=e.url;if(!r||r.match(/\/\d+$/))return {};await e.load();const a=await e.fetchData();if("Feature Service"===e.type){const e=V(await w$1(a,r));if("object"==typeof e){const r=j$1(a);e.className=null!=e.id&&r.includes(e.id)?"SubtypeGroupLayer":"FeatureLayer";}return e}if(v$1(a)>0)return V(a);return V(await t(r))}function V(e){return 1===v$1(e)&&{id:I$1(e)}}

export { l as fromItem, m as selectLayerClassPath };
