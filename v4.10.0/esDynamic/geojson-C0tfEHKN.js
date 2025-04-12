import{t as I}from"./date-Cqvy-TgA.js";import{s as w,a6 as N,dn as F,dp as O,d8 as E,d9 as x}from"./main-DCIX61zy.js";const C={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function h(e){return C[e]}function*j(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const n of e.features)n&&(yield n)}}function*D(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const n of e.coordinates)yield*n;break;case"MultiPolygon":for(const n of e.coordinates)for(const o of n)yield*o}}function*J(e,n={}){const{geometryType:o,objectIdField:t}=n;for(const r of e){const{geometry:c,properties:y,id:i}=r;if(c&&h(c.type)!==o)continue;const f=y||{};let u;t&&(u=f[t],i==null||u||(f[t]=u=i)),yield new E(c?A(new x,c,n):null,f,null,u??void 0)}}function R(e){for(const n of e)if(n.length>2)return!0;return!1}function $(e){return!k(e)}function v(e){return k(e)}function k(e){let n=0;for(let o=0;o<e.length;o++){const t=e[o],r=e[(o+1)%e.length];n+=t[0]*r[1]-r[0]*t[1]}return n<=0}function G(e){const n=e[0],o=e[e.length-1];return n[0]===o[0]&&n[1]===o[1]&&n[2]===o[2]||e.push(n),e}function A(e,n,o){switch(n.type){case"LineString":return Z(e,n,o);case"MultiLineString":return H(e,n,o);case"MultiPoint":return q(e,n,o);case"MultiPolygon":return z(e,n,o);case"Point":return B(e,n,o);case"Polygon":return K(e,n,o)}}function Z(e,n,o){return d(e,n.coordinates,o),e}function H(e,n,o){for(const t of n.coordinates)d(e,t,o);return e}function q(e,n,o){return d(e,n.coordinates,o),e}function z(e,n,o){for(const t of n.coordinates){M(e,t[0],o);for(let r=1;r<t.length;r++)T(e,t[r],o)}return e}function B(e,n,o){return P(e,n.coordinates,o),e}function K(e,n,o){const t=n.coordinates;M(e,t[0],o);for(let r=1;r<t.length;r++)T(e,t[r],o);return e}function M(e,n,o){const t=G(n);$(t)?L(e,t,o):d(e,t,o)}function T(e,n,o){const t=G(n);v(t)?L(e,t,o):d(e,t,o)}function d(e,n,o){for(const t of n)P(e,t,o);e.lengths.push(n.length)}function L(e,n,o){for(let t=n.length-1;t>=0;t--)P(e,n[t],o);e.lengths.push(n.length)}function P(e,n,o){const[t,r,c]=n;e.coords.push(t,r),o.hasZ&&e.coords.push(c||0)}function Q(e){switch(typeof e){case"string":return I(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function W(e,n=4326){if(!e)throw new w("geojson-layer:empty","GeoJSON data is empty");if(e.type!=="Feature"&&e.type!=="FeatureCollection")throw new w("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:o}=e;if(!o)return;const t=typeof o=="string"?o:o.type==="name"?o.properties.name:o.type==="EPSG"?o.properties.code:null,r=N({wkid:n})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${n})$`,"i");if(!t||!r.test(t))throw new w("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:o})}function X(e,n={}){const o=[],t=new Set,r=new Set;let c,y=!1,i=null,f=!1,{geometryType:u=null}=n;for(const p of j(e)){const{geometry:g,properties:l,id:a}=p;if((!g||(u||(u=h(g.type)),h(g.type)===u))&&(y||(y=R(D(g))),f||(f=a!=null,f&&(c=typeof a,l&&(i=Object.keys(l).filter(s=>l[s]===a)))),l&&i&&f&&a!=null&&(i.length>1?i=i.filter(s=>l[s]===a):i.length===1&&(i=l[i[0]]===a?i:[])),l))for(const s in l){if(t.has(s))continue;const b=Q(l[s]);if(b==="unknown"){r.add(s);continue}r.delete(s),t.add(s);const S=F(s);S&&o.push({name:S,alias:s,type:b})}}const m=F(i?.length===1&&i[0]||null)??void 0;if(m){for(const p of o)if(p.name===m&&O(p)){p.type="esriFieldTypeOID";break}}return{fields:o,geometryType:u,hasZ:y,objectIdFieldName:m,objectIdFieldType:c,unknownFields:Array.from(r)}}function Y(e,n){return Array.from(J(j(e),n))}export{W as E,X as I,Y as N,h as u};
