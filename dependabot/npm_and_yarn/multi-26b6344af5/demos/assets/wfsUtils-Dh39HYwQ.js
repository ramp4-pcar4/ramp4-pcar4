import{bG as I,a5 as b,s as c,O as P,cP as h,cQ as O,cR as M,cS as x,cT as C,bj as j,cU as D,bB as V,cl as L,cm as T}from"./main-Cv8ITM2j.js";import{Q as Y,O as W}from"./projection-DALJEM5z.js";import{u as X}from"./geojson-CPDCGj5r.js";import{o as F,n as g}from"./xmlUtils-CtUoQO7q.js";import{y as f}from"./Field-DCT5wy9q.js";const S="xlink:href",y="2.0.0",E="__esri_wfs_id__",q="wfs-layer:getWFSLayerTypeInfo-error",z="wfs-layer:empty-service",$="wfs-layer:feature-type-not-found",Q="wfs-layer:geojson-not-supported",_="wfs-layer:kvp-encoding-not-supported",J="wfs-layer:malformed-json",A="wfs-layer:unknown-geometry-type",B="wfs-layer:unknown-field-type",H="wfs-layer:unsupported-spatial-reference",K="wfs-layer:unsupported-wfs-version";async function Se(r,t){const e=Z((await b(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:y,...t?.customParameters},signal:t?.signal})).data);return re(r,e),e}function Z(r){const t=G(r);de(t),v(t);const e=t.firstElementChild,a=O(ae(e));return{operations:te(e),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const ee=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function R(r){for(const t of ee){const e=r.findIndex(a=>a.toLowerCase()===t);if(e>=0)return r[e]}return null}function te(r){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},a=[],s=[];if(F(r,{OperationsMetadata:{Parameter:n=>{if(n.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:o})=>{o&&a.push(o)}}}},Operation:n=>{switch(n.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:o=>{e.GetCapabilities.url=o.getAttribute(S)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:o=>{e.DescribeFeatureType.url=o.getAttribute(S)}}}};case"GetFeature":return{DCP:{HTTP:{Get:o=>{e.GetFeature.url=o.getAttribute(S)}}},Parameter:o=>{if(o.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:i})=>{i&&s.push(i)}}}}}}},Constraint:n=>{switch(n.getAttribute("name")){case"KVPEncoding":return{DefaultValue:o=>{t=o.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:o=>{e.GetFeature.supportsPagination=o.textContent.toLowerCase()==="true"}}}}}}),e.GetFeature.outputFormat=R(s)??R(a),!t)throw new c(_,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new c(Q,"WFS service doesn't support GeoJSON output format");return e}function re(r,t){M(r)&&(x(r,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=C(t.operations.DescribeFeatureType.url)),x(r,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=C(t.operations.GetFeature.url)))}function k(r){const t=parseInt(r.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function ae(r){return g(r,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},a=new Set;return F(t,{Name:s=>{const{name:n,prefix:o}=w(s.textContent);e.typeName=`${o}:${n}`,e.name=n,e.namespacePrefix=o,e.namespaceUri=s.lookupNamespaceURI(o)},Abstract:s=>{e.description=s.textContent},Title:s=>{e.title=s.textContent},WGS84BoundingBox:s=>{e.extent=V.fromJSON(ne(s))},DefaultCRS:s=>{const n=k(s);n&&(e.defaultSpatialReference=n,a.add(n))},OtherCRS:s=>{const n=k(s);n&&a.add(n)}}),e.title||(e.title=e.name),a.add(4326),e.supportedSpatialReferences.push(...a),e}}})}function ne(r){let t,e,a,s;for(const n of r.children)switch(n.localName){case"LowerCorner":[t,e]=n.textContent.split(" ").map(o=>Number.parseFloat(o));break;case"UpperCorner":[a,s]=n.textContent.split(" ").map(o=>Number.parseFloat(o))}return{xmin:t,ymin:e,xmax:a,ymax:s,spatialReference:L}}function se(r,t,e){return h(r,a=>e?a.name===t&&a.namespaceUri===e:a.typeName===t||a.name===t)}async function xe(r,t,e,a={}){const{featureType:s,extent:n}=await oe(r,t,e,a),{spatialReference:o}=ge(r.operations.GetFeature.url,s,a.spatialReference),{fields:i,geometryType:u,swapXY:p,objectIdField:l,geometryField:m}=await ie(r,s,o,a);return{url:r.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:i,geometryField:m,geometryType:u,objectIdField:l,spatialReference:a.spatialReference??new P({wkid:s.defaultSpatialReference}),extent:n,swapXY:p,wfsCapabilities:r,customParameters:a.customParameters}}async function oe(r,t,e,a={}){const s=r.readFeatureTypes(),n=t?se(s,t,e):s.next().value,{spatialReference:o=new P({wkid:n?.defaultSpatialReference})}=a;if(n==null)throw t?new c($,`The type '${t}' could not be found in the service`):new c(z,"The service is empty");let i=n.extent;if(i&&!j(i.spatialReference,o))try{await Y(i.spatialReference,o,void 0,a),i=W(i,o)}catch{throw new c(H,"Projection not supported")}return{extent:i,spatialReference:o,featureType:n}}async function ie(r,t,e,a={}){const{typeName:s}=t,[n,o]=await Promise.allSettled([le(r.operations.DescribeFeatureType.url,s,a),pe(r,s,e,a)]),i=d=>new c(q,`An error occurred while getting info about the feature type '${s}'`,{error:d});if(n.status==="rejected")throw i(n.reason);if(o.status==="rejected")throw i(o.reason);const{fields:u,errors:p}=n.value??{},l=n.value?.geometryType||o.value?.geometryType,m=o.value?.swapXY??!1;if(l==null)throw new c(A,`The geometry type could not be determined for type '${s}`,{typeName:s,geometryType:l,fields:u,errors:p});return{...ue(u??[]),geometryType:l,swapXY:m}}function ue(r){const t=r.find(a=>a.type==="geometry");let e=r.find(a=>a.type==="oid");return r=r.filter(a=>a.type!=="geometry"),e||(e=new f({name:E,type:"oid",alias:E}),r.unshift(e)),{geometryField:t?.name??null,objectIdField:e.name,fields:r}}async function pe(r,t,e,a={}){let s,n=!1;const[o,i]=await Promise.all([ye(r.operations.GetFeature.url,t,e,r.operations.GetFeature.outputFormat,{...a,count:1}),b(r.operations.GetFeature.url,{responseType:"text",query:N(t,e,void 0,{...a,count:1}),signal:a?.signal})]),u=o.type==="FeatureCollection"&&o.features[0]?.geometry;if(u){let p;switch(s=D.fromJSON(X(u.type)),u.type){case"Point":p=u.coordinates;break;case"LineString":case"MultiPoint":p=u.coordinates[0];break;case"MultiLineString":case"Polygon":p=u.coordinates[0][0];break;case"MultiPolygon":p=u.coordinates[0][0][0]}const l=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(l){const m=p[0].toFixed(3),d=p[1].toFixed(3),U=parseFloat(l[1]).toFixed(3);m===parseFloat(l[2]).toFixed(3)&&d===U&&(n=!0)}}return{geometryType:s,swapXY:n}}async function le(r,t,e){return ce(t,(await b(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:y,TYPENAME:t,TYPENAMES:t,...e?.customParameters},signal:e?.signal})).data)}function ce(r,t){const{name:e}=w(r),a=G(t);v(a);const s=h(g(a.firstElementChild,{element:n=>n}),n=>n.getAttribute("name")===e);if(s!=null){const n=s.getAttribute("type"),o=n?h(g(a.firstElementChild,{complexType:i=>i}),i=>i.getAttribute("name")===w(n).name):h(g(s,{complexType:i=>i}),()=>!0);if(o)return fe(o)}throw new c($,`Type '${r}' not found in document`,{document:new XMLSerializer().serializeToString(a)})}const me=new Set(["objectid","fid"]);function fe(r){const t=[],e=[];let a;const s=g(r,{complexContent:{extension:{sequence:{element:n=>n}}}});for(const n of s){const o=n.getAttribute("name");if(!o)continue;let i,u;if(n.hasAttribute("type")?i=w(n.getAttribute("type")).name:F(n,{simpleType:{restriction:m=>(i=w(m.getAttribute("base")).name,{maxLength:d=>{u=+d.getAttribute("value")}})}}),!i)continue;const p=n.getAttribute("nillable")==="true";let l=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new f({name:o,alias:o,type:"integer",nullable:p,length:T("integer")}));break;case"float":case"double":case"decimal":e.push(new f({name:o,alias:o,type:"double",nullable:p,length:T("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new f({name:o,alias:o,type:"string",nullable:p,length:u??T("string")}));break;case"datetime":case"date":e.push(new f({name:o,alias:o,type:"date",nullable:p,length:u??T("date")}));break;case"pointpropertytype":a="point",l=!0;break;case"multipointpropertytype":a="multipoint",l=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",l=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",l=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":l=!0,t.push(new c(A,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(r)}));break;default:t.push(new c(B,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(r)}))}l&&e.push(new f({name:o,alias:o,type:"geometry",nullable:p}))}for(const n of e)if(n.type==="integer"&&!n.nullable&&me.has(n.name.toLowerCase())){n.type="oid";break}return{geometryType:a,fields:e,errors:t}}async function ye(r,t,e,a,s){let{data:n}=await b(r,{responseType:"text",query:N(t,e,a,s),signal:s?.signal});n=n.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(n)}catch(o){throw new c(J,"Error while parsing the response",{response:n,error:o})}}function N(r,t,e,a){const s=typeof t=="number"?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:y,TYPENAMES:r,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+s,STARTINDEX:a?.startIndex,COUNT:a?.count,...a?.customParameters}}async function Ce(r,t,e){const a=await b(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:y,TYPENAMES:t,RESULTTYPE:"hits",...e?.customParameters},signal:e?.signal}),s=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(a.data);if(s?.groups)return+s.groups.numberMatched}function G(r){return new DOMParser().parseFromString(r.trim(),"text/xml")}function w(r){const[t,e]=r.split(":");return{prefix:e?t:"",name:e??t}}function de(r){const t=r.firstElementChild?.getAttribute("version");if(t&&t!==y)throw new c(K,`Unsupported WFS version ${t}. Supported version: ${y}`)}function v(r){let t="",e="";if(F(r.firstElementChild,{Exception:a=>(t=a.getAttribute("exceptionCode"),{ExceptionText:s=>{e=s.textContent}})}),t)throw new c(`wfs-layer:${t}`,e)}function ge(r,t,e){const a={wkid:t.defaultSpatialReference},s=e?.wkid!=null?{wkid:e.wkid}:a;return{spatialReference:s,getFeatureSpatialReference:I(r)||s.wkid&&t.supportedSpatialReferences.includes(s.wkid)?{wkid:s.wkid}:{wkid:t.defaultSpatialReference}}}export{ye as K,E as S,xe as W,se as Y,Ce as e,ge as o,Se as v,ue as z};
