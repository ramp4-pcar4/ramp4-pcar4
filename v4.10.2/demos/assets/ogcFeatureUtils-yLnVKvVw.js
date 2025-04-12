import{s as T,bz as O,cq as ee,U as $,an as ne,D as k,cr as J,cb as te,I as E,n as ie}from"./main-B5_XOOwi.js";import{l as ae,r as re,o as se}from"./featureConversionUtils-Cis_UHTR.js";import{e as oe}from"./OptimizedFeatureSet-Blu9Ckm7.js";import{E as le,I as ce,N as ue}from"./geojson-CTQapKz_.js";import{u as de}from"./clientSideDefaults-OCHsrsO-.js";import{p as fe}from"./sourceUtils-cmqJNlok.js";import{Z as U}from"./FieldsIndex-BNj5OlWf.js";import{i as me}from"./fieldType-DlCBsK54.js";const G=()=>ie.getLogger("esri.layers.ogc.ogcFeatureUtils"),z="startindex",pe=new Set([z,"offset"]),_="http://www.opengis.net/def/crs/",Pe=`${_}OGC/1.3/CRS84`;var l;async function qe(e,t,n={},i=5){const{links:a}=e,o=m(a,"items",l.geojson)||m(a,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(o==null)throw new T("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:d,customParameters:p,signal:g}=n,u=O(o.href,e.landingPage.url),I={limit:i,...p,token:d},x=ee(u,I),R={accept:l.geojson},{data:S}=await $(x,{signal:g,headers:R}),v=Fe(x,i,S.links)??z;le(S);const f=ce(S,{geometryType:t.geometryType}),h=t.fields||f.fields||[],D=t.hasZ!=null?t.hasZ:f.hasZ,y=f.geometryType,w=t.objectIdField||f.objectIdFieldName||"OBJECTID";let s=t.timeInfo;const N=h.find(({name:r})=>r===w);if(N)N.editable=!1,N.nullable=!1;else{if(!f.objectIdFieldType)throw new T("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");h.unshift({name:w,alias:w,type:f.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(w!==f.objectIdFieldName){const r=h.find(({name:c})=>c===f.objectIdFieldName);r&&(r.type="esriFieldTypeInteger")}h===f.fields&&f.unknownFields.length>0&&G().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:f.unknownFields}});for(const r of h){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),r.type!=="esriFieldTypeOID"&&r.type!=="esriFieldTypeGlobalID"&&(r.editable=r.editable==null||!!r.editable,r.nullable=r.nullable==null||!!r.nullable),!r.name)throw new T("ogc-feature-layer:invalid-field-name","field name is missing",{field:r});if(!me.jsonValues.includes(r.type))throw new T("ogc-feature-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r})}if(s){const r=new U(h);if(s.startTimeField){const c=r.get(s.startTimeField);c?(s.startTimeField=c.name,c.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const c=r.get(s.endTimeField);c?(s.endTimeField=c.name,c.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const c=r.get(s.trackIdField);c?s.trackIdField=c.name:(s.trackIdField=null,G().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.timeReference||={timeZoneIANA:ne},s.startTimeField||s.endTimeField||(G().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=void 0)}return{drawingInfo:y?de(y):null,extent:Ie(e),geometryType:y,fields:h,hasZ:!!D,objectIdField:w,paginationParameter:v,timeInfo:s}}async function Oe(e,t={}){const{links:n,url:i}=e,a=m(n,"data",l.json)||m(n,"http://www.opengis.net/def/rel/ogc/1.0/data",l.json);if(a==null)throw new T("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:d,signal:p}=t,g=O(a.href,i),{data:u}=await $(g,{signal:p,headers:{accept:l.json},query:{...d,token:o}});for(const I of u.collections)I.landingPage=e;return u}async function Ce(e,t={}){const{links:n,url:i}=e,a=m(n,"conformance",l.json)||m(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance",l.json);if(a==null)throw new T("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:d,signal:p}=t,g=O(a.href,i),{data:u}=await $(g,{signal:p,headers:{accept:l.json},query:{...d,token:o}});return u}async function Ge(e,t={}){const{apiKey:n,customParameters:i,signal:a}=t,{data:o}=await $(e,{signal:a,headers:{accept:l.json},query:{...i,token:n}});return o.url=e,o}async function Re(e,t={}){const{links:n,url:i}=e,a=m(n,"service-desc",l.openapi);if(a==null)return G().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:d,signal:p}=t,g=O(a.href,i),{data:u}=await $(g,{signal:p,headers:{accept:l.openapi},query:{...d,token:o}});return u}function De(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),n=t?.groups;if(!n)return null;const{authority:i,code:a}=n;switch(i.toLowerCase()){case"ogc":switch(a.toLowerCase()){case"crs27":return k.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return k.WGS84.wkid;default:return null}case"esri":case"epsg":{const o=Number.parseInt(a,10);return Number.isNaN(o)?null:o}default:return null}}async function We(e,t,n){const i=await ge(e,t,n);return ae(i)}async function ge(e,t,n){const{collection:{links:i,landingPage:{url:a}},layerDefinition:o,maxRecordCount:d,queryParameters:{apiKey:p,customParameters:g},spatialReference:u,supportedCrs:I}=e,x=m(i,"items",l.geojson)||m(i,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(x==null)throw new T("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:R,num:S,start:v,timeExtent:f,where:h}=t;if(t.objectIds)throw new T("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const D=k.fromJSON(u),y=t.outSpatialReference??D,w=y.isWGS84?null:B(y,I),s=he(R,I),N=we(f),r=be(h),c=S??(v==null?d:10),Q=v===0?void 0:v,{fields:K,geometryType:C,hasZ:W,objectIdField:P,paginationParameter:V}=o,H=O(x.href,a),{data:A}=await $(H,{...n,query:{...g,...s,crs:w,datetime:N,query:r,limit:c,[V]:Q,token:p},headers:{accept:l.geojson}}),q=ue(A,{geometryType:C,hasZ:W,objectIdField:P}),X=q.length===c&&!!m(A.links??[],"next",l.geojson),L=new U(K);for(const b of q){const j={};fe(L,j,b.attributes,!0);for(const Z of L.fields)Z.nullable&&!(Z.name in j)&&(j[Z.name]=null);j[P]=b.attributes[P],b.attributes=j}if(!w&&y.isWebMercator){for(const b of q)if(b.geometry!=null&&C!=null){const j=re(b.geometry,C,W,!1);j.spatialReference=k.WGS84,b.geometry=se(J(j,y))}}for(const b of q)b.objectId=b.attributes[P];const Y=w||!w&&y.isWebMercator?y.toJSON():te,F=new oe;return F.exceededTransferLimit=X,F.features=q,F.fields=K,F.geometryType=C,F.hasZ=W,F.objectIdFieldName=P,F.spatialReference=Y,F}function ye(e){return e!=null&&e.type==="extent"}function B(e,t){const{isWebMercator:n,wkid:i}=e;if(!i)return null;const a=n?t[3857]??t[102100]??t[102113]??t[900913]:t[e.wkid];return a?`${_}${a}`:null}function M(e){if(e==null)return"";const{xmin:t,ymin:n,xmax:i,ymax:a}=e;return`${t},${n},${i},${a}`}function we(e){if(e==null)return null;const{start:t,end:n}=e;return`${t!=null?t.toISOString():".."}/${n!=null?n.toISOString():".."}`}function be(e){return e!=null&&e&&e!=="1=1"?e:null}function he(e,t){if(!ye(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:M(e)};const i=B(n,t);return i!=null?{bbox:M(e),"bbox-crs":i}:n.isWebMercator?{bbox:M(J(e,k.WGS84))}:null}function Ie(e){const t=e.extent?.spatial;if(!t)return null;const n=t.bbox[0],i=n.length===4,[a,o]=n,d=i?void 0:n[2];return{xmin:a,ymin:o,xmax:i?n[2]:n[3],ymax:i?n[3]:n[4],zmin:d,zmax:i?void 0:n[5],spatialReference:k.WGS84.toJSON()}}function m(e,t,n){return e.find(({rel:i,type:a})=>i===t&&a===n)??e.find(({rel:i,type:a})=>i===t&&!a)}function Fe(e,t,n){if(!n)return;const i=m(n,"next",l.geojson),a=E(i?.href)?.query;if(!a)return;const o=E(e).query,d=Object.keys(o??{});return Object.entries(a).filter(([u])=>!d.includes(u)).find(([u,I])=>pe.has(u.toLowerCase())&&Number.parseInt(I,10)===t)?.[0]}(function(e){e.json="application/json",e.geojson="application/geo+json",e.openapi="application/vnd.oai.openapi+json;version=3.0"})(l||(l={}));export{ge as $,De as C,Oe as N,Ce as O,Ge as P,We as R,_ as k,Re as q,qe as v,Pe as x};
