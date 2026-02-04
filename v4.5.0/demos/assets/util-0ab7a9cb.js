import { s } from './main-5658cd6e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const o=new s({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function e(t){return o.toJSON(t)}function r(t){const{bandCount:o,attributeTable:e,colormap:n,pixelType:r}=t.raster.rasterInfo;return 1===o&&(null!=e||null!=n||"u8"===r||"s8"===r)}

export { e, r };
