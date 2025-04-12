import{U as b,cz as D,s as l,cA as I,cB as x,cC as C,cD as h,D as P,bj as M,cE as j,aw as V,cb as L,cc as T}from"./main-B5_XOOwi.js";import{N as O,K as Y}from"./projection-DwpqUf7U.js";import{u as W}from"./geojson-CTQapKz_.js";import{o as F,n as g}from"./xmlUtils-CtUoQO7q.js";import{p as X}from"./arcgisLayerUrl-ByaroTWn.js";import{y}from"./Field-q5OmBPu1.js";const S="xlink:href",f="2.0.0",E="__esri_wfs_id__",z="wfs-layer:getWFSLayerTypeInfo-error",q="wfs-layer:empty-service",$="wfs-layer:feature-type-not-found",_="wfs-layer:geojson-not-supported",K="wfs-layer:kvp-encoding-not-supported",J="wfs-layer:malformed-json",A="wfs-layer:unknown-geometry-type",Q="wfs-layer:unknown-field-type",B="wfs-layer:unsupported-spatial-reference",H="wfs-layer:unsupported-wfs-version";async function xe(n,t){const e=Z((await b(n,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:f,...t?.customParameters},signal:t?.signal})).data);return ne(n,e),e}function Z(n){const t=G(n);de(t),v(t);const e=t.firstElementChild,r=D(re(e));return{operations:te(e),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}const ee=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function R(n){for(const t of ee){const e=n.findIndex(r=>r.toLowerCase()===t);if(e>=0)return n[e]}return null}function te(n){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},r=[],o=[];if(F(n,{OperationsMetadata:{Parameter:a=>{if(a.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:s})=>{s&&r.push(s)}}}},Operation:a=>{switch(a.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:s=>{e.GetCapabilities.url=s.getAttribute(S)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:s=>{e.DescribeFeatureType.url=s.getAttribute(S)}}}};case"GetFeature":return{DCP:{HTTP:{Get:s=>{e.GetFeature.url=s.getAttribute(S)}}},Parameter:s=>{if(s.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:i})=>{i&&o.push(i)}}}}}}},Constraint:a=>{switch(a.getAttribute("name")){case"KVPEncoding":return{DefaultValue:s=>{t=s.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:s=>{e.GetFeature.supportsPagination=s.textContent.toLowerCase()==="true"}}}}}}),e.GetFeature.outputFormat=R(o)??R(r),!t)throw new l(K,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new l(_,"WFS service doesn't support GeoJSON output format");return e}function ne(n,t){I(n)&&(x(n,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=C(t.operations.DescribeFeatureType.url)),x(n,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=C(t.operations.GetFeature.url)))}function k(n){const t=parseInt(n.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function re(n){return g(n,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},r=new Set;return F(t,{Name:o=>{const{name:a,prefix:s}=w(o.textContent);e.typeName=`${s}:${a}`,e.name=a,e.namespacePrefix=s,e.namespaceUri=o.lookupNamespaceURI(s)},Abstract:o=>{e.description=o.textContent},Title:o=>{e.title=o.textContent},WGS84BoundingBox:o=>{e.extent=V.fromJSON(ae(o))},DefaultCRS:o=>{const a=k(o);a&&(e.defaultSpatialReference=a,r.add(a))},OtherCRS:o=>{const a=k(o);a&&r.add(a)}}),e.title||(e.title=e.name),r.add(4326),e.supportedSpatialReferences.push(...r),e}}})}function ae(n){let t,e,r,o;for(const a of n.children)switch(a.localName){case"LowerCorner":[t,e]=a.textContent.split(" ").map(s=>Number.parseFloat(s));break;case"UpperCorner":[r,o]=a.textContent.split(" ").map(s=>Number.parseFloat(s))}return{xmin:t,ymin:e,xmax:r,ymax:o,spatialReference:L}}function oe(n,t,e){return h(n,r=>e?r.name===t&&r.namespaceUri===e:r.typeName===t||r.name===t)}async function Ce(n,t,e,r={}){const{featureType:o,extent:a}=await se(n,t,e,r),{spatialReference:s}=ge(n.operations.GetFeature.url,o,r.spatialReference),{fields:i,geometryType:u,swapXY:p,objectIdField:c,geometryField:m}=await ie(n,o,s,r);return{url:n.operations.GetCapabilities.url,name:o.name,namespaceUri:o.namespaceUri,fields:i,geometryField:m,geometryType:u,objectIdField:c,spatialReference:r.spatialReference??new P({wkid:o.defaultSpatialReference}),extent:a,swapXY:p,wfsCapabilities:n,customParameters:r.customParameters}}async function se(n,t,e,r={}){const o=n.readFeatureTypes(),a=t?oe(o,t,e):o.next().value,{spatialReference:s=new P({wkid:a?.defaultSpatialReference})}=r;if(a==null)throw t?new l($,`The type '${t}' could not be found in the service`):new l(q,"The service is empty");let i=a.extent;if(i&&!M(i.spatialReference,s))try{await O(i.spatialReference,s,void 0,r),i=Y(i,s)}catch{throw new l(B,"Projection not supported")}return{extent:i,spatialReference:s,featureType:a}}async function ie(n,t,e,r={}){const{typeName:o}=t,[a,s]=await Promise.allSettled([ce(n.operations.DescribeFeatureType.url,o,r),pe(n,o,e,r)]),i=d=>new l(z,`An error occurred while getting info about the feature type '${o}'`,{error:d});if(a.status==="rejected")throw i(a.reason);if(s.status==="rejected")throw i(s.reason);const{fields:u,errors:p}=a.value??{},c=a.value?.geometryType||s.value?.geometryType,m=s.value?.swapXY??!1;if(c==null)throw new l(A,`The geometry type could not be determined for type '${o}`,{typeName:o,geometryType:c,fields:u,errors:p});return{...ue(u??[]),geometryType:c,swapXY:m}}function ue(n){const t=n.find(r=>r.type==="geometry");let e=n.find(r=>r.type==="oid");return n=n.filter(r=>r.type!=="geometry"),e||(e=new y({name:E,type:"oid",alias:E}),n.unshift(e)),{geometryField:t?.name??null,objectIdField:e.name,fields:n}}async function pe(n,t,e,r={}){let o,a=!1;const[s,i]=await Promise.all([fe(n.operations.GetFeature.url,t,e,n.operations.GetFeature.outputFormat,{...r,count:1}),b(n.operations.GetFeature.url,{responseType:"text",query:N(t,e,void 0,{...r,count:1}),signal:r?.signal})]),u=s.type==="FeatureCollection"&&s.features[0]?.geometry;if(u){let p;switch(o=j.fromJSON(W(u.type)),u.type){case"Point":p=u.coordinates;break;case"LineString":case"MultiPoint":p=u.coordinates[0];break;case"MultiLineString":case"Polygon":p=u.coordinates[0][0];break;case"MultiPolygon":p=u.coordinates[0][0][0]}const c=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(c){const m=p[0].toFixed(3),d=p[1].toFixed(3),U=parseFloat(c[1]).toFixed(3);m===parseFloat(c[2]).toFixed(3)&&d===U&&(a=!0)}}return{geometryType:o,swapXY:a}}async function ce(n,t,e){return le(t,(await b(n,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:f,TYPENAME:t,TYPENAMES:t,...e?.customParameters},signal:e?.signal})).data)}function le(n,t){const{name:e}=w(n),r=G(t);v(r);const o=h(g(r.firstElementChild,{element:a=>a}),a=>a.getAttribute("name")===e);if(o!=null){const a=o.getAttribute("type"),s=a?h(g(r.firstElementChild,{complexType:i=>i}),i=>i.getAttribute("name")===w(a).name):h(g(o,{complexType:i=>i}),()=>!0);if(s)return ye(s)}throw new l($,`Type '${n}' not found in document`,{document:new XMLSerializer().serializeToString(r)})}const me=new Set(["objectid","fid"]);function ye(n){const t=[],e=[];let r;const o=g(n,{complexContent:{extension:{sequence:{element:a=>a}}}});for(const a of o){const s=a.getAttribute("name");if(!s)continue;let i,u;if(a.hasAttribute("type")?i=w(a.getAttribute("type")).name:F(a,{simpleType:{restriction:m=>(i=w(m.getAttribute("base")).name,{maxLength:d=>{u=+d.getAttribute("value")}})}}),!i)continue;const p=a.getAttribute("nillable")==="true";let c=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new y({name:s,alias:s,type:"integer",nullable:p,length:T("integer")}));break;case"float":case"double":case"decimal":e.push(new y({name:s,alias:s,type:"double",nullable:p,length:T("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new y({name:s,alias:s,type:"string",nullable:p,length:u??T("string")}));break;case"datetime":case"date":e.push(new y({name:s,alias:s,type:"date",nullable:p,length:u??T("date")}));break;case"pointpropertytype":r="point",c=!0;break;case"multipointpropertytype":r="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,t.push(new l(A,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(n)}));break;default:t.push(new l(Q,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(n)}))}c&&e.push(new y({name:s,alias:s,type:"geometry",nullable:p}))}for(const a of e)if(a.type==="integer"&&!a.nullable&&me.has(a.name.toLowerCase())){a.type="oid";break}return{geometryType:r,fields:e,errors:t}}async function fe(n,t,e,r,o){let{data:a}=await b(n,{responseType:"text",query:N(t,e,r,o),signal:o?.signal});a=a.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(a)}catch(s){throw new l(J,"Error while parsing the response",{response:a,error:s})}}function N(n,t,e,r){const o=typeof t=="number"?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:f,TYPENAMES:n,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+o,STARTINDEX:r?.startIndex,COUNT:r?.count,...r?.customParameters}}async function Ee(n,t,e){const r=await b(n,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:f,TYPENAMES:t,RESULTTYPE:"hits",...e?.customParameters},signal:e?.signal}),o=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(r.data);if(o?.groups)return+o.groups.numberMatched}function G(n){return new DOMParser().parseFromString(n.trim(),"text/xml")}function w(n){const[t,e]=n.split(":");return{prefix:e?t:"",name:e??t}}function de(n){const t=n.firstElementChild?.getAttribute("version");if(t&&t!==f)throw new l(H,`Unsupported WFS version ${t}. Supported version: ${f}`)}function v(n){let t="",e="";if(F(n.firstElementChild,{Exception:r=>(t=r.getAttribute("exceptionCode"),{ExceptionText:o=>{e=o.textContent}})}),t)throw new l(`wfs-layer:${t}`,e)}function ge(n,t,e){const r={wkid:t.defaultSpatialReference},o=e?.wkid!=null?{wkid:e.wkid}:r;return{spatialReference:o,getFeatureSpatialReference:X(n)||o.wkid&&t.supportedSpatialReferences.includes(o.wkid)?{wkid:o.wkid}:{wkid:t.defaultSpatialReference}}}export{fe as K,E as S,Ce as W,oe as Y,Ee as e,ge as o,xe as v,ue as z};
