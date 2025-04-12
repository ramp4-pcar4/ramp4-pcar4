import{bS as H,E as N,bf as x,n as P,d6 as _,a$ as K,r as m,az as V,b1 as B,aZ as J}from"./main-0iYVBzEC.js";import{l as b,i as y}from"./intl-CcWkuE_S.js";import{N as Z,$ as W}from"./utils-COsTGegm.js";import{h as X}from"./timeZoneUtils-Cjajgsh_.js";const Y="esri.widgets.Feature.support.featureUtils",g=()=>P.getLogger(Y),ee=/href=(""|'')/gi,te=/(\{([^{\r\n]+)\})/g,ne=/'/g,A=/^\s*expression\//i,re=/(\n)/gi,ie=/[\u00A0-\u9999<>&]/gim,ae=/href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi,oe=/^(?:mailto:|tel:)/,E="relationships/",q=H("short-date-short-time");function le(e){if(e!=null)return(e.sourceLayer||e.layer)??void 0}async function se({type:e,value:t,event:n}){try{return typeof t=="function"?t(n):await t}catch(r){return void g().error("error",`An error occurred when calling the "${e}" function`,{error:r,graphic:n.graphic,value:t})}}function ue(e=""){if(e)return!oe.test(e.trim().toLowerCase())}function C(e){return!!e&&A.test(e)}function fe(e,t){if(!t||!C(t)||!e)return;const n=t.replace(A,"").toLowerCase();return e.find(({name:r})=>r.toLowerCase()===n)}function de(e,t){const n=fe(t,e?.fieldName);return n?n.title||null:e?e.label||e.fieldName:null}function ce(e,t){return`{${t.get(e.toLowerCase())?.fieldName||e}}`}function pe(e){return e.replaceAll(ee,"")}function I(e,t){const n=h(t,e);return n?n.name:e}function ye(e,t){return e&&e.map(n=>I(n,t))}function h(e,t){return e&&typeof e.getField=="function"&&t?e.getField(t)??null:null}function R(e){return`${e}`.trim()}function me({attributes:e,globalAttributes:t,layer:n,text:r,expressionAttributes:a,fieldInfoMap:i}){return r?j({formattedAttributes:t,template:he(r,{...t,...a,...e},n),fieldInfoMap:i}):""}function j({formattedAttributes:e,template:t,fieldInfoMap:n}){return R(pe(m(m(t,r=>ce(r,n)),e)))}function be(e,t,n=!1){const r=t[e];if(typeof r=="string"){const a="%27",i=(n?encodeURIComponent(r):r).replaceAll(ne,a);t[e]=i}}function ge(e,t=!1){const n={...e};return Object.keys(n).forEach(r=>be(r,n,t)),n}function Ie(e,t,n){const r=(t=R(t))&&t[0]!=="{";return m(e,ge(n,r||!1))}function k(e,t){return e.replaceAll(te,(n,r,a)=>{const i=h(t,a);return i?`{${i.name}}`:r})}function he(e,t,n){const r=k(e,n);return r&&r.replaceAll(ae,(a,i,o)=>Ie(a,i||o,t))}function Fe(e,t){if(typeof e=="string"&&t&&t.dateFormat==null&&(t.places!=null||t.digitSeparator!=null)){const n=Number(e);if(!isNaN(n))return n}return e}function v(e){return e!=null&&typeof e=="object"&&"fieldsIndex"in e&&"geometryType"in e&&"getField"in e&&"load"in e&&"loaded"in e&&"objectIdField"in e&&"spatialReference"in e&&"type"in e&&(e.type==="feature"||e.type==="scene"||e.type==="subtype-group"||e.type==="subtype-sublayer"||e.type==="sublayer")&&"when"in e}function M(e){return e!=null&&typeof e=="object"&&"createQuery"in e&&"queryFeatureCount"in e&&"queryObjectIds"in e&&"queryRelatedFeatures"in e&&"queryRelatedFeaturesCount"in e&&"relationships"in e}function F(e){return v(e)&&M(e)}function Te(e){return!(!(e&&typeof e=="object"&&"createQuery"in e&&"getField"in e&&"queryFeatureCount"in e&&"queryFeatures"in e&&"queryObjectIds"in e&&"capabilities"in e&&"fields"in e&&"fieldsIndex"in e&&"type"in e)||e.type!=="feature"&&e.type!=="subtype-group"&&e.type!=="subtype-sublayer"&&e.type!=="sublayer"||!("when"in e))&&(e.type==="subtype-sublayer"&&"parent"in e&&e.parent&&typeof e.parent=="object"?"globalIdField"in e.parent:"globalIdField"in e)}function we(e){return!!e&&typeof e=="object"&&"sourceLayer"in e&&F(e.sourceLayer)}function U(e,t){const{fieldInfos:n,fieldName:r,preventPlacesFormatting:a,layer:i,timeZone:o}=t,u=$(n,r),s=h(i,r);if(u&&!x(r)){const f=s?.type,d=u.format?.dateFormat;if(f==="date"||f==="date-only"||f==="time-only"||f==="timestamp-offset"||d)return Z(e,{format:d,fieldType:f,timeZoneOptions:{layerTimeZone:i&&"preferredTimeZone"in i?i.preferredTimeZone:null,viewTimeZone:o,datesInUnknownTimezone:!(!i||!("datesInUnknownTimezone"in i))&&!!i.datesInUnknownTimezone}})}const l=u?.format;return typeof e=="string"&&x(r)&&l?Le(e,l):typeof(e=Fe(e,l))=="string"||e==null||l==null?w(e):b(e,a?{...y(l),minimumFractionDigits:0,maximumFractionDigits:20}:y(l))}function Le(e,t){return e=e.trim(),/\d{2}-\d{2}/.test(e)?e:e.includes(",")?T(e,",",", ",t):e.includes(";")?T(e,";","; ",t):e.includes(" ")?T(e," "," ",t):b(Number(e),y(t))}function T(e,t,n,r){return e.trim().split(t).map(a=>b(Number(a),y(r))).join(n)}function $(e,t){if(e?.length&&t)return e.find(n=>n.fieldName?.toLowerCase()===t.toLowerCase())}function Ne({fieldName:e,graphic:t,layer:n}){if(L(e)||!n||typeof n.getFeatureType!="function")return null;const{typeIdField:r}=n;if(!r||e!==r)return null;const a=n.getFeatureType(t);return a?a.name:null}function xe({fieldName:e,value:t,graphic:n,layer:r}){if(L(e)||!r||typeof r.getFieldDomain!="function")return null;const a=n&&r.getFieldDomain(e,{feature:n,excludeImpliedDomains:J("esri-widget-legacy-field-domain-calculation")});return a&&a.type==="coded-value"?a.getName(t):null}function Ze(e,t,n,r){const{creatorField:a,creationDateField:i,editorField:o,editDateField:u}=e;if(!t)return;const s=X(r&&"preferredTimeZone"in r?r.preferredTimeZone:null,!(!r||!("datesInUnknownTimezone"in r))&&!!r.datesInUnknownTimezone,n,q,"date"),l={...q,...s},f=t[u];if(typeof f=="number"){const c=t[o];return{type:"edit",date:N(f,l),user:c}}const d=t[i];if(typeof d=="number"){const c=t[a];return{type:"create",date:N(d,l),user:c}}return null}function Ae(e,t){const n=new Map;if(!e)return n;for(const r of e){if(!r.fieldName)continue;const a=I(r.fieldName,t);r.fieldName=a,n.set(a.toLowerCase(),r)}return n}function Ee(e){const t=[];if(!e)return t;const{fieldInfos:n,content:r}=e;return n&&t.push(...n),r&&Array.isArray(r)&&r.forEach(a=>{if(a.type==="fields"){const i=a?.fieldInfos;i&&t.push(...i)}}),t}function qe(e){return e.replaceAll(ie,t=>`&#${t.charCodeAt(0)};`)}function w(e){return typeof e=="string"?e.replaceAll(re,'<br class="esri-text-new-line" />'):e}function S(e){const{value:t,fieldName:n,fieldInfos:r,fieldInfoMap:a,layer:i,graphic:o,timeZone:u}=e;if(t==null)return"";const s=xe({fieldName:n,value:t,graphic:o,layer:i});if(s)return s;const l=Ne({fieldName:n,graphic:o,layer:i});if(l)return l;if(a.get(n.toLowerCase()))return U(t,{fieldInfos:r||Array.from(a.values()),fieldName:n,layer:i,timeZone:u});const f=i?.fieldsIndex?.get(n);return f&&(W(f)||V(f))?Z(t,{fieldType:f.type,timeZoneOptions:{layerTimeZone:i&&"preferredTimeZone"in i?i.preferredTimeZone:null,viewTimeZone:u,datesInUnknownTimezone:!(!i||!("datesInUnknownTimezone"in i))&&!!i.datesInUnknownTimezone}}):w(t)}function Ce({fieldInfos:e,attributes:t,layer:n,graphic:r,fieldInfoMap:a,relatedInfos:i,timeZone:o}){const u={};return i?.forEach(s=>ve({attributes:u,relatedInfo:s,fieldInfoMap:a,fieldInfos:e,layer:n,timeZone:o})),t&&Object.keys(t).forEach(s=>{const l=t[s];u[s]=S({fieldName:s,fieldInfos:e,fieldInfoMap:a,layer:n,value:l,graphic:r,timeZone:o})}),u}async function D(e,t){const{layer:n,graphic:r,outFields:a,objectIds:i,returnGeometry:o,spatialReference:u}=e,s=i[0];if(typeof s!="number"&&typeof s!="string"){const f="Could not query required fields for the specified feature. The feature's ID is invalid.",d={layer:n,graphic:r,objectId:s,requiredFields:a};return g().warn(f,d),null}if(!_(n)?.operations?.supportsQuery){const f="The specified layer cannot be queried. The following fields will not be available.",d={layer:n,graphic:r,requiredFields:a,returnGeometry:o};return g().warn(f,d),null}const l=n.createQuery();return l.objectIds=i,l.outFields=a?.length?a:[n.objectIdField],l.returnGeometry=!!o,l.returnZ=!!o,l.returnM=!!o,l.outSpatialReference=u,(await n.queryFeatures(l,t)).features[0]}async function Re(e){if(!e.expressionInfos?.length)return!1;const t=await B(),{arcadeUtils:{hasGeometryFunctions:n}}=t;return n(e)}async function je({graphic:e,popupTemplate:t,layer:n,spatialReference:r},a){if(!n||!t||(typeof n.load=="function"&&await n.load(a),!e.attributes))return;const i=n.objectIdField,o=e.attributes[i];if(o==null)return;const u=[o],s=await t.getRequiredFields(n.fieldsIndex),l=K(s,e),f=l?[]:s.includes(i)?s:[...s,i],d=t.returnGeometry||await Re(t);if(l&&!d)return;const c=await D({layer:n,graphic:e,outFields:f,objectIds:u,returnGeometry:d,spatialReference:r},a);c&&(c.geometry&&(e.geometry=c.geometry),c.attributes&&(e.attributes={...e.attributes,...c.attributes}))}function L(e=""){return!!e&&e.includes(E)}function ke(e){return`${E}${e.layerId}/${e.fieldName}`}function z({attributes:e,graphic:t,relatedInfo:n,fieldInfos:r,fieldInfoMap:a,layer:i,timeZone:o}){e&&t&&n&&Object.keys(t.attributes).forEach(u=>{const s=ke({layerId:n.relation.id.toString(),fieldName:u}),l=t.attributes[u];e[s]=S({fieldName:s,fieldInfos:r,fieldInfoMap:a,layer:i,value:l,graphic:t,timeZone:o})})}function ve({attributes:e,relatedInfo:t,fieldInfoMap:n,fieldInfos:r,layer:a,timeZone:i}){e&&t&&(t.relatedFeatures?.forEach(o=>z({attributes:e,graphic:o,relatedInfo:t,fieldInfoMap:n,fieldInfos:r,layer:a,timeZone:i})),t.relatedStatsFeatures?.forEach(o=>z({attributes:e,graphic:o,relatedInfo:t,fieldInfoMap:n,fieldInfos:r,layer:a,timeZone:i})))}const O=e=>{if(!e)return!1;const t=e.toUpperCase();return t.includes("CURRENT_TIMESTAMP")||t.includes("CURRENT_DATE")||t.includes("CURRENT_TIME")},G=({layer:e,method:t,query:n,definitionExpression:r})=>{if(!e.capabilities?.query?.supportsCacheHint||t==="attachments")return;const a=n.where!=null?n.where:null,i=n.geometry!=null?n.geometry:null;O(r)||O(a)||i?.type==="extent"||n.resultType==="tile"||(n.cacheHint=!0)},Me=({query:e,layer:t,method:n})=>{G({layer:t,method:n,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression??""}`})},Ue=({queryPayload:e,layer:t,method:n})=>{G({layer:t,method:n,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression??""}`})};function $e(e,t,n){return e&&t&&n?t.type==="sublayer"?p({layers:t.layer?.sublayers,map:e,relatedLayer:t,relationship:n})||p({layers:t.layer?.subtables,map:e,relatedLayer:t,relationship:n}):p({layers:e.allLayers,map:e,relatedLayer:t,relationship:n})||p({layers:e.allTables,map:e,relatedLayer:t,relationship:n}):null}function Se(e,t){return e&&"utilityNetworks"in e&&t?e.utilityNetworks?.find(n=>n.isUtilityLayer(t)):null}function Q(e,t){return e?.allTables.find(n=>n.type==="feature"&&n.layerId===t.id&&n.url===t.layer?.url)}function p({map:e,relationship:t,relationship:{relatedTableId:n},relatedLayer:r,layers:a}){if(!a)return null;for(const i of a){if(i.type==="map-image"){const u=p({layers:i.sublayers,map:e,relatedLayer:r,relationship:t})||p({layers:i.subtables,map:e,relatedLayer:r,relationship:t});if(u)return u;continue}if(!F(i))continue;if(r.type==="sublayer"){if(i!==r&&i.id===n)return i.isTable?Q(e,i):i;continue}const o=r.type==="scene"&&r.associatedLayer?r.associatedLayer.url:r.url;if(!o)return null;if(i.type!=="sublayer"){if(i!==r&&i.url===o&&i.layerId===n)return i}else if(i!==r&&i.layer?.url===o&&i.id===n)return i.isTable?Q(e,i):i}return null}function De(e){const t=e.getObjectId();return t!=null?`oid:${t}`:`uid:${e.uid}`}export{w as applyTextFormattingHTML,Ae as createFieldInfoMap,$e as findRelatedLayer,Se as findUtilityNetwork,k as fixTokens,Ce as formatAttributes,Ze as formatEditInfo,U as formatValueToFieldInfo,Ee as getAllFieldInfos,$ as getFieldInfo,de as getFieldInfoLabel,I as getFixedFieldName,ye as getFixedFieldNames,De as getHighlightKeyForFeature,le as getSourceLayer,se as graphicCallback,qe as htmlEntities,Te as isAssociatedFeatureSupportedLayer,C as isExpressionField,v as isFeatureSupportedLayer,we as isGraphicForRelatableFeatureSupportedLayer,F as isRelatableFeatureSupportedLayer,M as isRelatableLayer,L as isRelatedField,Me as preLayerQueryCallback,Ue as preRequestCallback,D as querySourceLayer,je as queryUpdatedFeature,ue as shouldOpenInNewTab,j as substituteAttributes,me as substituteFieldsInLinksAndAttributes};
