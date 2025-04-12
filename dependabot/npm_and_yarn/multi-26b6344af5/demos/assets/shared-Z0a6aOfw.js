import{aD as f,aE as m}from"./main-Cv8ITM2j.js";import{r as g,i as S}from"./TimeOnly-DT6CHLK3.js";import{y as G}from"./Field-DCT5wy9q.js";var u,c;function v(e){return G.fromJSON(e.toJSON())}function N(e){return e.toJSON?e.toJSON():e}function P(e){return e instanceof Date}function J(e){return e instanceof f}function E(e){return e instanceof m}function B(e){return e instanceof S}function w(e){return e instanceof g}(function(e){e[e.Standardised=0]="Standardised",e[e.StandardisedNoInterval=1]="StandardisedNoInterval",e[e.SqlServer=2]="SqlServer",e[e.Oracle=3]="Oracle",e[e.Postgres=4]="Postgres",e[e.PGDB=5]="PGDB",e[e.FILEGDB=6]="FILEGDB",e[e.NotEvaluated=7]="NotEvaluated"})(u||(u={})),function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown"}(c||(c={}));const L=1e3,M={point:"point"},h={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},k={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate","date-only":"esriFieldTypeDateOnly","time-only":"esriFieldTypeTimeOnly","timestamp-offset":"esriFieldTypeTimestampOffset",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"esriFieldTypeXML","big-integer":"esriFieldTypeBigInteger",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeDateOnly:"esriFieldTypeDateOnly",esriFieldTypeTimeOnly:"esriFieldTypeTimeOnly",esriFieldTypeTimestampOffset:"esriFieldTypeTimestampOffset",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"esriFieldTypeXML",esriFieldTypeBigInteger:"esriFieldTypeBigInteger"};function U(e){return e===void 0?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]}function x(e,n){n||(n={}),typeof n=="function"&&(n={cmp:n});const T=typeof n.cycles=="boolean"&&n.cycles,F=n.cmp&&(y=n.cmp,function(l){return function(r,i){const t={key:r,value:l[r]},s={key:i,value:l[i]};return y(t,s)}});var y;const o=[];return function l(r){if(r?.toJSON&&typeof r.toJSON=="function"&&(r=r.toJSON()),r===void 0)return;if(typeof r=="number")return isFinite(r)?""+r:"null";if(typeof r!="object")return JSON.stringify(r);let i,t;if(Array.isArray(r)){for(t="[",i=0;i<r.length;i++)i&&(t+=","),t+=l(r[i])||"null";return t+"]"}if(r===null)return"null";if(o.includes(r)){if(T)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const s=o.push(r)-1,p=Object.keys(r).sort(F?.(r));for(t="",i=0;i<p.length;i++){const a=p[i],d=l(r[a]);d&&(t&&(t+=","),t+=JSON.stringify(a)+":"+d)}return o.splice(s,1),"{"+t+"}"}(e)}function O(e){switch(e.type){case"catalog":case"csv":case"feature":case"geojson":case"knowledge-graph-sublayer":case"oriented-imagery":case"subtype-group":case"wfs":return!0;default:return!1}}function _(e){switch(e.type){case"catalog-footprint":case"subtype-sublayer":return!0;default:return O(e)}}export{M as D,U as E,x as J,O as M,L as O,h as P,w as T,k as b,P as d,E as f,B as g,c as l,J as m,u as o,v as s,_ as x,N as y};
