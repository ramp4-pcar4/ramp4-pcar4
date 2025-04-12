import{ax as v,s,eh as j,ce as P,ei as L,ej as S,ek as C,el as R,K as m,J as E}from"./main-I34c1W55.js";import{e as M}from"./uuid-Dj9mdEVg.js";import{p as g,a as I}from"./Field-CdGuTguQ.js";import{b as f}from"./Query-CJScdlzS.js";import{p as T}from"./jsonUtils-AwBZcrUo.js";import{A as D}from"./UniqueValueRenderer-Dbts2C6R.js";import{c as G,d as F}from"./RelationshipQuery-v3ocBGsC.js";async function V(e,t,r){t=t.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(t.maxRecordCountFactor=x(e));const n=J(e),a=e.capabilities.query.supportsPagination;t.start=0,t.num=n;let o=null;for(;;){const i=await e.source.queryFeaturesJSON(t,r);if(o==null?o=i:o.features=o.features.concat(i.features),o.exceededTransferLimit=i.exceededTransferLimit,!a||!i.exceededTransferLimit)break;t.start+=n}return o}function J(e){return x(e)*N(e)}function N(e){return e.capabilities.query.maxRecordCount||2e3}function x(e){return e.capabilities.query.supportsMaxRecordCountFactor?f.MAX_MAX_RECORD_COUNT_FACTOR:1}const k=new v({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function Q(e,t,r,n){const a=await d(e);if(await h(e,t,n),!a.addAttachment)throw new s(n,"Layer source does not support addAttachment capability");return a.addAttachment(t,r)}function h(e,t,r){const{attributes:n}=t,{objectIdField:a}=e;return e.capabilities?.data?.supportsAttachment?t?n?a&&n[a]?Promise.resolve():Promise.reject(new s(r,`feature is missing the identifying attribute ${a}`)):Promise.reject(new s(r,"'attributes' are required on a feature to query attachments")):Promise.reject(new s(r,"A feature is required to add/delete/update attachments")):Promise.reject(new s(r,"this layer doesn't support attachments"))}async function $(e,t,r,n,a){const o=await d(e);if(await h(e,t,a),!o.updateAttachment)throw new s(a,"Layer source does not support updateAttachment capability");return o.updateAttachment(t,r,n)}async function U(e,t,r){const{applyEdits:n}=await import("./editingSupport-1zrzr089.js"),a=await e.load();let o=r;return a.type==="feature"&&a.infoFor3D&&t.deleteFeatures!=null&&a.globalIdField!=null&&(o={...o,globalIdToObjectId:await A(a,t.deleteFeatures,a.globalIdField)}),n(a,a.source,t,r)}async function Z(e,t,r){const{uploadAssets:n}=await import("./editingSupport-1zrzr089.js"),a=await e.load();return n(a,a.source,t,r)}async function _(e,t,r,n){const a=await d(e);if(await h(e,t,n),!a.deleteAttachments)throw new s(n,"Layer source does not support deleteAttachments capability");return a.deleteAttachments(t,r)}async function z(e,t,r){const n=(await e.load({signal:t?.signal})).source;if(!n.fetchRecomputedExtents)throw new s(r,"Layer source does not support fetchUpdates capability");return n.fetchRecomputedExtents(t)}async function B(e,t,r,n){t=G.from(t),await e.load();const a=e.source,o=e.capabilities;if(!o?.data?.supportsAttachment)throw new s(n,"this layer doesn't support attachments");const{attachmentTypes:i,objectIds:l,globalIds:y,num:u,size:c,start:p,where:b}=t;if(!o?.operations?.supportsQueryAttachments&&(i?.length>0||y?.length>0||c?.length>0||u||p||b))throw new s(n,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(l?.length||y?.length||b))throw new s(n,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);if(!a.queryAttachments)throw new s(n,"Layer source does not support queryAttachments capability",t);return a.queryAttachments(t)}async function H(e,t,r,n){const a=await d(e);if(!a.queryObjectIds)throw new s(n,"Layer source does not support queryObjectIds capability");return a.queryObjectIds(f.from(t)??e.createQuery(),r)}async function K(e,t,r,n){const a=await d(e);if(!a.queryFeatureCount)throw new s(n,"Layer source does not support queryFeatureCount capability");return a.queryFeatureCount(f.from(t)??e.createQuery(),r)}async function X(e,t,r,n){const a=await d(e);if(!a.queryExtent)throw new s(n,"Layer source does not support queryExtent capability");return a.queryExtent(f.from(t)??e.createQuery(),r)}async function W(e,t,r,n){const a=await d(e);if(!a.queryRelatedFeatures)throw new s(n,"Layer source does not support queryRelatedFeatures capability");return a.queryRelatedFeatures(F.from(t),r)}async function Y(e,t,r,n){const a=await d(e);if(!a.queryRelatedFeaturesCount)throw new s(n,"Layer source does not support queryRelatedFeaturesCount capability");return a.queryRelatedFeaturesCount(F.from(t),r)}async function ee(e){const t=e.source;if(t?.refresh)try{const{dataChanged:r,updates:n}=await t.refresh();if(n!=null&&(e.sourceJSON={...e.sourceJSON,...n},e.read(n,{origin:"service",url:e.parsedUrl})),r)return!0}catch{}if(e.definitionExpression)try{return(await j(e.definitionExpression,e.fieldsIndex)).hasDateFunctions}catch{}return!1}function te(e){const t=new f,r=e.capabilities?.data,n=e.capabilities?.query;t.historicMoment=e.historicMoment,t.gdbVersion=e.gdbVersion,t.returnGeometry=!0,n&&(t.compactGeometryEnabled=n.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=n.supportsDefaultSpatialReference),r&&(r.supportsZ&&e.returnZ!=null&&(t.returnZ=e.returnZ),r.supportsM&&e.returnM!=null&&(t.returnM=e.returnM)),t.outFields=["*"];const{timeOffset:a,timeExtent:o}=e;return t.timeExtent=a!=null&&o!=null?o.offset(-a.value,a.unit):o||null,t.multipatchOption=e.geometryType==="multipatch"?"xyFootprint":null,t}function ne(e){const{globalIdField:t,fields:r}=e;if(t)return t;if(r){for(const n of r)if(n.type==="esriFieldTypeGlobalID")return n.name}}function re(e){const{objectIdField:t,fields:r}=e;if(t)return t;if(r){for(const n of r)if(n.type==="esriFieldTypeOID")return n.name}}function ae(e){return e.currentVersion?e.currentVersion:e.hasOwnProperty("capabilities")||e.hasOwnProperty("drawingInfo")||e.hasOwnProperty("hasAttachments")||e.hasOwnProperty("htmlPopupType")||e.hasOwnProperty("relationships")||e.hasOwnProperty("timeInfo")||e.hasOwnProperty("typeIdField")||e.hasOwnProperty("types")?10:9.3}function oe(e,t){const{subtypes:r,subtypeField:n}=e;if(!t?.attributes||!r?.length||!n)return null;const a=t.attributes[n];return a==null?null:r.find(o=>o.code===a)}function se(e,t){const{fieldsIndex:r,subtypeField:n}=e,{name:a,type:o}=r.get(t)??{};if(!a)return null;if((n&&r.get(n)?.name)===a&&e.subtypes?.length){const i=e.subtypes.map(l=>new g({code:q(l.code,o),name:l.name}));if(i?.length)return new I({codedValues:i})}return null}function ie(e,t){const{fieldsIndex:r}=e,{name:n,type:a}=r.get(t)??{};if(!n)return null;if(("typeIdField"in e?r.get(e.typeIdField)?.name:null)===n&&"types"in e&&e.types?.length){const o=e.types.map(i=>new g({code:q(i.id,a),name:i.name}));return new I({codedValues:o})}return null}function q(e,t){return t?P({type:t})&&typeof e=="number"?`${e}`:L({type:t})&&typeof e=="string"?Number.parseInt(e,10):e:e}async function d(e){return(await e.load()).source}async function ue(e,t){if(!m||m.findCredential(e))return;let r;try{const n=await E(e,t);n&&(r=await m.checkSignInStatus(`${n}/sharing`))}catch{}if(r)try{const n=t!=null?t.signal:null;await m.getCredential(e,{signal:n})}catch{}}async function ce(e,t,r){const n=e.parsedUrl?.path;n&&e.authenticationTriggerEvent===t&&await ue(n,r)}function le(e){return!O(e)&&(e.userHasUpdateItemPrivileges||e.editingEnabled)}const w=S({types:C});function pe(e,t){if(e.defaultSymbol)return e.types?.length?new D({defaultSymbol:w(e.defaultSymbol,e,t),field:e.typeIdField,uniqueValueInfos:e.types.map(r=>({id:r.id,symbol:w(r.symbol,r,t)}))}):new T({symbol:w(e.defaultSymbol,e,t)})}function de(e){let t=e.sourceJSON?.cacheMaxAge;if(!t)return!1;const r=e.editingInfo?.lastEditDate?.getTime();return r==null||(t*=1e3,Date.now()-r<t)}async function A(e,t,r){if(t==null)return null;const n=[],{objectIdField:a}=e;if(t.forEach(u=>{let c=null;if("attributes"in u){const{attributes:p}=u;c={globalId:p[r],objectId:p[a]!=null&&p[a]!==-1?p[a]:null}}else c={globalId:u.globalId,objectId:u.objectId!=null&&u.objectId!==-1?u.objectId:null};c.globalId!=null&&(c.objectId!=null&&c.objectId!==-1||n.push(c.globalId))}),n.length===0)return null;const o=e.createQuery();o.where=n.map(u=>`${r}='${u}'`).join(" OR "),o.returnGeometry=!1,o.outFields=[a,r],o.cacheHint=!1;const i=await R(V(e,o));if(!i.ok)return null;const l=new Map,y=i.value.features;for(const u of y){const c=u.attributes[r],p=u.attributes[a];c!=null&&p!=null&&p!==-1&&l.set(M(c),p)}return l}function fe(e,t,r){if(!t||!r||!e)return null;const n=r.getAttribute(t);return n==null?null:e.find(a=>{const{id:o}=a;return o!=null&&o.toString()===n.toString()})??null}function O(e){return e.sourceJSON?.isMultiServicesView||ye(e)}function ye(e){return!!e.sourceJSON?.capabilities?.toLowerCase().split(",").map(t=>t.trim()).includes("map")}function me(e,t,r){const n=t?.queryBins;if(!n)throw new s(r,"Layer source does not support binning");switch(e.binParameters.type){case"auto-interval":if(!n.supportsAutoInterval)throw new s(r,"Layer source does not support auto-interval binning");break;case"date":if(!n.supportsDate)throw new s(r,"Layer source does not support date binning");break;case"fixed-boundaries":if(!n.supportsFixedBoundaries)throw new s(r,"Layer source does not support fixed-boundaries binning");break;case"fixed-interval":if(!n.supportsFixedInterval)throw new s(r,"Layer source does not support fixed-interval binning")}const a=n?.supportedStatistics;if(e.outStatistics&&a){const o=new Map([["count","count"],["sum","sum"],["min","min"],["max","max"],["avg","avg"],["stddev","stddev"],["var","var"],["percentile-continuous","percentileContinuous"],["percentile-discrete","percentileDiscrete"],["centroid-aggregate","centroid"],["convex-hull-aggregate","convexHull"],["envelope-aggregate","envelope"]]);for(const{statisticType:i}of e.outStatistics){const l=o.get(i);if(l&&!a[l])throw new s(r,`Layer source does not support ${i} statistic type`)}}}export{_ as A,de as B,Y as C,re as D,X as E,$ as F,ae as G,Q as I,ce as J,A as K,W as L,te as M,H as O,K as P,oe as Q,ee as R,B as S,se as T,ie as U,ne as V,fe as W,O as X,le as Z,me as _,k as g,U as q,z as v,Z as x,pe as z};
