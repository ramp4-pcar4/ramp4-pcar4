import{r as b,bc as F,E as T,d9 as M,b2 as U,n as D,bV as S,aB as O,b1 as z,a_ as G}from"./main-Bd_03BNf.js";import{l as I,i as y}from"./intl-BvarHTsY.js";import{N as E,$ as Q}from"./utils-B_-0QJqE.js";import{h as H}from"./timeZoneUtils-uYx9Jdvq.js";import"./preload-helper-ExcqyqRp.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BPDfjts0.js";import"./common-DQOJ18NT.js";const P="esri.widgets.Feature.support.featureUtils",g=()=>D.getLogger(P),_=/href=(""|'')/gi,V=/(\{([^{\r\n]+)\})/g,B=/'/g,Z=/^\s*expression\//i,K=/(\n)/gi,J=/[\u00A0-\u9999<>&]/gim,W=/href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi,X=/^(?:mailto:|tel:)/,A="relationships/",w=S("short-date-short-time");function $e(e){if(e!=null)return(e.sourceLayer||e.layer)??void 0}async function qe({type:e,value:t,event:r}){try{return typeof t=="function"?t(r):await t}catch(n){return void g().error("error",`An error occurred when calling the "${e}" function`,{error:n,graphic:r.graphic,value:t})}}function Ce(e=""){if(e)return!X.test(e.trim().toLowerCase())}function Y(e){return!!e&&Z.test(e)}function ee(e,t){if(!t||!Y(t)||!e)return;const r=t.replace(Z,"").toLowerCase();return e.find(({name:n})=>n.toLowerCase()===r)}function je(e,t){const r=ee(t,e?.fieldName);return r?r.title||null:e?e.label||e.fieldName:null}function te(e,t){return`{${t.get(e.toLowerCase())?.fieldName||e}}`}function re(e){return e.replaceAll(_,"")}function $(e,t){const r=h(t,e);return r?r.name:e}function Re(e,t){return e&&e.map(r=>$(r,t))}function h(e,t){return e&&typeof e.getField=="function"&&t?e.getField(t)??null:null}function q(e){return`${e}`.trim()}function ke({attributes:e,globalAttributes:t,layer:r,text:n,expressionAttributes:a,fieldInfoMap:i}){return n?ne({formattedAttributes:t,template:se(n,{...t,...a,...e},r),fieldInfoMap:i}):""}function ne({formattedAttributes:e,template:t,fieldInfoMap:r}){return q(re(b(b(t,n=>te(n,r)),e)))}function ie(e,t,r=!1){const n=t[e];if(typeof n=="string"){const a="%27",i=(r?encodeURIComponent(n):n).replaceAll(B,a);t[e]=i}}function ae(e,t=!1){const r={...e};return Object.keys(r).forEach(n=>ie(n,r,t)),r}function oe(e,t,r){const n=(t=q(t))&&t[0]!=="{";return b(e,ae(r,n||!1))}function le(e,t){return e.replaceAll(V,(r,n,a)=>{const i=h(t,a);return i?`{${i.name}}`:n})}function se(e,t,r){const n=le(e,r);return n&&n.replaceAll(W,(a,i,o)=>oe(a,i||o,t))}function ue(e,t){if(typeof e=="string"&&t&&t.dateFormat==null&&(t.places!=null||t.digitSeparator!=null)){const r=Number(e);if(!isNaN(r))return r}return e}function fe(e){return e!=null&&typeof e=="object"&&"fieldsIndex"in e&&"geometryType"in e&&"getField"in e&&"load"in e&&"loaded"in e&&"objectIdField"in e&&"spatialReference"in e&&"type"in e&&(e.type==="feature"||e.type==="scene"||e.type==="subtype-group"||e.type==="subtype-sublayer"||e.type==="sublayer")&&"when"in e}function de(e){return e!=null&&typeof e=="object"&&"createQuery"in e&&"queryFeatureCount"in e&&"queryObjectIds"in e&&"queryRelatedFeatures"in e&&"queryRelatedFeaturesCount"in e&&"relationships"in e}function C(e){return fe(e)&&de(e)}function ve(e){return!(!(e&&typeof e=="object"&&"createQuery"in e&&"getField"in e&&"queryFeatureCount"in e&&"queryFeatures"in e&&"queryObjectIds"in e&&"capabilities"in e&&"fields"in e&&"fieldsIndex"in e&&"type"in e)||e.type!=="feature"&&e.type!=="subtype-group"&&e.type!=="subtype-sublayer"&&e.type!=="sublayer"||!("when"in e))&&(e.type==="subtype-sublayer"&&"parent"in e&&e.parent&&typeof e.parent=="object"?"globalIdField"in e.parent:"globalIdField"in e)}function Me(e){return!!e&&typeof e=="object"&&"sourceLayer"in e&&C(e.sourceLayer)}function ce(e,t){const{fieldInfos:r,fieldName:n,preventPlacesFormatting:a,layer:i,timeZone:o}=t,u=ye(r,n),s=h(i,n);if(u&&!F(n)){const f=s?.type,d=u.format?.dateFormat;if(f==="date"||f==="date-only"||f==="time-only"||f==="timestamp-offset"||d)return E(e,{format:d,fieldType:f,timeZoneOptions:{layerTimeZone:i&&"preferredTimeZone"in i?i.preferredTimeZone:null,viewTimeZone:o,datesInUnknownTimezone:!(!i||!("datesInUnknownTimezone"in i))&&!!i.datesInUnknownTimezone}})}const l=u?.format;return typeof e=="string"&&F(n)&&l?pe(e,l):typeof(e=ue(e,l))=="string"||e==null||l==null?j(e):I(e,a?{...y(l),minimumFractionDigits:0,maximumFractionDigits:20}:y(l))}function pe(e,t){return e=e.trim(),/\d{2}-\d{2}/.test(e)?e:e.includes(",")?m(e,",",", ",t):e.includes(";")?m(e,";","; ",t):e.includes(" ")?m(e," "," ",t):I(Number(e),y(t))}function m(e,t,r,n){return e.trim().split(t).map(a=>I(Number(a),y(n))).join(r)}function ye(e,t){if(e?.length&&t)return e.find(r=>r.fieldName?.toLowerCase()===t.toLowerCase())}function me({fieldName:e,graphic:t,layer:r}){if(k(e)||!r||typeof r.getFeatureType!="function")return null;const{typeIdField:n}=r;if(!n||e!==n)return null;const a=r.getFeatureType(t);return a?a.name:null}function be({fieldName:e,value:t,graphic:r,layer:n}){if(k(e)||!n||typeof n.getFieldDomain!="function")return null;const a=r&&n.getFieldDomain(e,{feature:r,excludeImpliedDomains:G("esri-widget-legacy-field-domain-calculation")});return a&&a.type==="coded-value"?a.getName(t):null}function Ue(e,t,r,n){const{creatorField:a,creationDateField:i,editorField:o,editDateField:u}=e;if(!t)return;const s=H(n&&"preferredTimeZone"in n?n.preferredTimeZone:null,!(!n||!("datesInUnknownTimezone"in n))&&!!n.datesInUnknownTimezone,r,w,"date"),l={...w,...s},f=t[u];if(typeof f=="number"){const c=t[o];return{type:"edit",date:T(f,l),user:c}}const d=t[i];if(typeof d=="number"){const c=t[a];return{type:"create",date:T(d,l),user:c}}return null}function De(e,t){const r=new Map;if(!e)return r;for(const n of e){if(!n.fieldName)continue;const a=$(n.fieldName,t);n.fieldName=a,r.set(a.toLowerCase(),n)}return r}function Se(e){const t=[];if(!e)return t;const{fieldInfos:r,content:n}=e;return r&&t.push(...r),n&&Array.isArray(n)&&n.forEach(a=>{if(a.type==="fields"){const i=a?.fieldInfos;i&&t.push(...i)}}),t}function Oe(e){return e.replaceAll(J,t=>`&#${t.charCodeAt(0)};`)}function j(e){return typeof e=="string"?e.replaceAll(K,'<br class="esri-text-new-line" />'):e}function R(e){const{value:t,fieldName:r,fieldInfos:n,fieldInfoMap:a,layer:i,graphic:o,timeZone:u}=e;if(t==null)return"";const s=be({fieldName:r,value:t,graphic:o,layer:i});if(s)return s;const l=me({fieldName:r,graphic:o,layer:i});if(l)return l;if(a.get(r.toLowerCase()))return ce(t,{fieldInfos:n||Array.from(a.values()),fieldName:r,layer:i,timeZone:u});const f=i?.fieldsIndex?.get(r);return f&&(Q(f)||O(f))?E(t,{fieldType:f.type,timeZoneOptions:{layerTimeZone:i&&"preferredTimeZone"in i?i.preferredTimeZone:null,viewTimeZone:u,datesInUnknownTimezone:!(!i||!("datesInUnknownTimezone"in i))&&!!i.datesInUnknownTimezone}}):j(t)}function ze({fieldInfos:e,attributes:t,layer:r,graphic:n,fieldInfoMap:a,relatedInfos:i,timeZone:o}){const u={};return i?.forEach(s=>Fe({attributes:u,relatedInfo:s,fieldInfoMap:a,fieldInfos:e,layer:r,timeZone:o})),t&&Object.keys(t).forEach(s=>{const l=t[s];u[s]=R({fieldName:s,fieldInfos:e,fieldInfoMap:a,layer:r,value:l,graphic:n,timeZone:o})}),u}async function ge(e,t){const{layer:r,graphic:n,outFields:a,objectIds:i,returnGeometry:o,spatialReference:u}=e,s=i[0];if(typeof s!="number"&&typeof s!="string"){const f="Could not query required fields for the specified feature. The feature's ID is invalid.",d={layer:r,graphic:n,objectId:s,requiredFields:a};return g().warn(f,d),null}if(!M(r)?.operations?.supportsQuery){const f="The specified layer cannot be queried. The following fields will not be available.",d={layer:r,graphic:n,requiredFields:a,returnGeometry:o};return g().warn(f,d),null}const l=r.createQuery();return l.objectIds=i,l.outFields=a?.length?a:[r.objectIdField],l.returnGeometry=!!o,l.returnZ=!!o,l.returnM=!!o,l.outSpatialReference=u,(await r.queryFeatures(l,t)).features[0]}async function Ie(e){if(!e.expressionInfos?.length)return!1;const t=await z(),{arcadeUtils:{hasGeometryFunctions:r}}=t;return r(e)}async function Ge({graphic:e,popupTemplate:t,layer:r,spatialReference:n},a){if(!r||!t||(typeof r.load=="function"&&await r.load(a),!e.attributes))return;const i=r.objectIdField,o=e.attributes[i];if(o==null)return;const u=[o],s=await t.getRequiredFields(r.fieldsIndex),l=U(s,e),f=l?[]:s.includes(i)?s:[...s,i],d=t.returnGeometry||await Ie(t);if(l&&!d)return;const c=await ge({layer:r,graphic:e,outFields:f,objectIds:u,returnGeometry:d,spatialReference:n},a);c&&(c.geometry&&(e.geometry=c.geometry),c.attributes&&(e.attributes={...e.attributes,...c.attributes}))}function k(e=""){return!!e&&e.includes(A)}function he(e){return`${A}${e.layerId}/${e.fieldName}`}function N({attributes:e,graphic:t,relatedInfo:r,fieldInfos:n,fieldInfoMap:a,layer:i,timeZone:o}){e&&t&&r&&Object.keys(t.attributes).forEach(u=>{const s=he({layerId:r.relation.id.toString(),fieldName:u}),l=t.attributes[u];e[s]=R({fieldName:s,fieldInfos:n,fieldInfoMap:a,layer:i,value:l,graphic:t,timeZone:o})})}function Fe({attributes:e,relatedInfo:t,fieldInfoMap:r,fieldInfos:n,layer:a,timeZone:i}){e&&t&&(t.relatedFeatures?.forEach(o=>N({attributes:e,graphic:o,relatedInfo:t,fieldInfoMap:r,fieldInfos:n,layer:a,timeZone:i})),t.relatedStatsFeatures?.forEach(o=>N({attributes:e,graphic:o,relatedInfo:t,fieldInfoMap:r,fieldInfos:n,layer:a,timeZone:i})))}const L=e=>{if(!e)return!1;const t=e.toUpperCase();return t.includes("CURRENT_TIMESTAMP")||t.includes("CURRENT_DATE")||t.includes("CURRENT_TIME")},v=({layer:e,method:t,query:r,definitionExpression:n})=>{if(!e.capabilities?.query?.supportsCacheHint||t==="attachments")return;const a=r.where!=null?r.where:null,i=r.geometry!=null?r.geometry:null;L(n)||L(a)||i?.type==="extent"||r.resultType==="tile"||(r.cacheHint=!0)},Qe=({query:e,layer:t,method:r})=>{v({layer:t,method:r,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression??""}`})},He=({queryPayload:e,layer:t,method:r})=>{v({layer:t,method:r,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression??""}`})};function Pe(e,t,r){return e&&t&&r?t.type==="sublayer"?p({layers:t.layer?.sublayers,map:e,relatedLayer:t,relationship:r})||p({layers:t.layer?.subtables,map:e,relatedLayer:t,relationship:r}):p({layers:e.allLayers,map:e,relatedLayer:t,relationship:r})||p({layers:e.allTables,map:e,relatedLayer:t,relationship:r}):null}function _e(e,t){return e&&"utilityNetworks"in e&&t?e.utilityNetworks?.find(r=>r.isUtilityLayer(t)):null}function x(e,t){return e?.allTables.find(r=>r.type==="feature"&&r.layerId===t.id&&r.url===t.layer?.url)}function p({map:e,relationship:t,relationship:{relatedTableId:r},relatedLayer:n,layers:a}){if(!a)return null;for(const i of a){if(i.type==="map-image"){const u=p({layers:i.sublayers,map:e,relatedLayer:n,relationship:t})||p({layers:i.subtables,map:e,relatedLayer:n,relationship:t});if(u)return u;continue}if(!C(i))continue;if(n.type==="sublayer"){if(i!==n&&i.id===r)return i.isTable?x(e,i):i;continue}const o=n.type==="scene"&&n.associatedLayer?n.associatedLayer.url:n.url;if(!o)return null;if(i.type!=="sublayer"){if(i!==n&&i.url===o&&i.layerId===r)return i}else if(i!==n&&i.layer?.url===o&&i.id===r)return i.isTable?x(e,i):i}return null}function Ve(e){const t=e.getObjectId();return t!=null?`oid:${t}`:`uid:${e.uid}`}export{j as applyTextFormattingHTML,De as createFieldInfoMap,Pe as findRelatedLayer,_e as findUtilityNetwork,le as fixTokens,ze as formatAttributes,Ue as formatEditInfo,ce as formatValueToFieldInfo,Se as getAllFieldInfos,ye as getFieldInfo,je as getFieldInfoLabel,$ as getFixedFieldName,Re as getFixedFieldNames,Ve as getHighlightKeyForFeature,$e as getSourceLayer,qe as graphicCallback,Oe as htmlEntities,ve as isAssociatedFeatureSupportedLayer,Y as isExpressionField,fe as isFeatureSupportedLayer,Me as isGraphicForRelatableFeatureSupportedLayer,C as isRelatableFeatureSupportedLayer,de as isRelatableLayer,k as isRelatedField,Qe as preLayerQueryCallback,He as preRequestCallback,ge as querySourceLayer,Ge as queryUpdatedFeature,Ce as shouldOpenInNewTab,ne as substituteAttributes,ke as substituteFieldsInLinksAndAttributes};
