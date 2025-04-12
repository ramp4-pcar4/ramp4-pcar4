import { c as s$1, cV as p$1, cW as ie, cX as s$2, cG as t } from './main-5658cd6e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const i={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function s(e){return i[e]}function*c(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t);}}function*u(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e;}}function*l(e,o={}){const{geometryType:r,objectIdField:i}=o;for(const c of e){const{geometry:e,properties:u,id:l}=c;if(e&&s(e.type)!==r)continue;const f=u||{};let a;i&&(a=f[i],null==l||a||(f[i]=a=l));const y=new s$2(e?g(new t,e,o):null,f,null,a??void 0);yield y;}}function f(e){for(const t of e)if(t.length>2)return !0;return !1}function a(e){return !p(e)}function y(e){return p(e)}function p(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1];}return t<=0}function d(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":return m(e,t,n);case"MultiLineString":return h(e,t,n);case"MultiPoint":return w(e,t,n);case"MultiPolygon":return P(e,t,n);case"Point":return b(e,t,n);case"Polygon":return j(e,t,n)}}function m(e,t,n){return G(e,t.coordinates,n),e}function h(e,t,n){for(const o of t.coordinates)G(e,o,n);return e}function w(e,t,n){return G(e,t.coordinates,n),e}function P(e,t,n){for(const o of t.coordinates){S(e,o[0],n);for(let t=1;t<o.length;t++)F(e,o[t],n);}return e}function b(e,t,n){return k(e,t.coordinates,n),e}function j(e,t,n){const o=t.coordinates;S(e,o[0],n);for(let r=1;r<o.length;r++)F(e,o[r],n);return e}function S(e,t,n){const o=d(t);a(o)?M(e,o,n):G(e,o,n);}function F(e,t,n){const o=d(t);y(o)?M(e,o,n):G(e,o,n);}function G(e,t,n){for(const o of t)k(e,o,n);e.lengths.push(t.length);}function M(e,t,n){for(let o=t.length-1;o>=0;o--)k(e,t[o],n);e.lengths.push(t.length);}function k(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0);}function O(e){switch(typeof e){case"string":return "esriFieldTypeString";case"number":return "esriFieldTypeDouble";default:return "unknown"}}function T(t){if(!t)throw new s$1("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==t.type&&"FeatureCollection"!==t.type)throw new s$1("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:n}=t;if(!n)return;const o="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!r.test(o))throw new s$1("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function L(e,t={}){const n=[],i=new Set,l=new Set;let a,y=!1,p=null,d=!1,{geometryType:g=null}=t,m=!1;for(const r of c(e)){const{geometry:e,properties:t,id:c}=r;if(!e||(g||(g=s(e.type)),s(e.type)===g)){if(!y){y=f(u(e));}if(d||(d=null!=c,d&&(a=typeof c,t&&(p=Object.keys(t).filter((e=>t[e]===c))))),t&&p&&d&&null!=c&&(p.length>1?p=p.filter((e=>t[e]===c)):1===p.length&&(p=t[p[0]]===c?p:[])),!m&&t){let e=!0;for(const r in t){if(i.has(r))continue;const s=t[r];if(null==s){e=!1,l.add(r);continue}const c=O(s);if("unknown"===c){l.add(r);continue}l.delete(r),i.add(r);const u=p$1(r);u&&n.push({name:u,alias:r,type:c});}m=e;}}}const h=p$1(1===p?.length&&p[0]||null)??void 0;if(h)for(const o of n)if(o.name===h&&ie(o)){o.type="esriFieldTypeOID";break}return {fields:n,geometryType:g,hasZ:y,objectIdFieldName:h,objectIdFieldType:a,unknownFields:Array.from(l)}}function I(e,t){return Array.from(l(c(e),t))}

export { I, L, T, s };
