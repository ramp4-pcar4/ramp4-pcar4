/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,l.some((a=>null!=c?.match(a)))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(s)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(o)||null!=a.match(i)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}const t=/^devext.arcgis.com$/,o=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,i=/^[\w-]*\.mapsqa.arcgis.com$/,l=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,o,/^jsapps.esri.com$/,s,i];

export { a, c };
