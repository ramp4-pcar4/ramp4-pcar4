import{dn as v,dp as w,dq as N,N as x}from"./main-C3PVbFgd.js";import{P as R,$ as g}from"./utils-BOZ7OXBr.js";import{a as J,i as _}from"./fetchService-C_1fODZT.js";import{o as D}from"./jsonContext-4ve3nIVl.js";import{l as G,u as c,E as u,a as Y}from"./portalItemUtils-CLgHGSUp.js";const d="Feature Service",p="feature-layer-utils",$=`${p}-save`,F=`${p}-save-as`;function m(e){return{isValid:v(e)&&(!("dynamicDataSource"in e)||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function b(e,a){const r=D(e,"portal-item");return a?.isTable&&(r.layerContainerType="tables"),r}function h(e){const a=[],r=[];for(const{layer:t,layerJSON:o}of e)t.isTable?r.push(o):a.push(o);return{layers:a,tables:r}}function T(e){return h([e])}async function M(e,a){return/\/\d+\/?$/.test(e.url)?T(a[0]):U(a,e)}async function U(e,a){if(e.reverse(),!a)return h(e);const r=await k(a,e);for(const t of e)L(t.layer,t.layerJSON,r);return K(r,e),r}async function k(e,a){let r=await e.fetchData("json");if(B(r))return r;r||={},C(r);const{layer:{url:t,customParameters:o,apiKey:s}}=a[0];return await j(r,{url:t??"",customParameters:o,apiKey:s},a.map(n=>n.layer.layerId)),r}function B(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}function C(e){e.layers||=[],e.tables||=[]}function K(e,a){const r=[],t=[];for(const{layer:o}of a){const{isTable:s,layerId:n}=o;s?t.push(n):r.push(n)}E(e.layers,r),E(e.tables,t)}function E(e,a){if(e.length<2)return;const r=[];for(const{id:t}of e)r.push(t);w(r.sort(I),a.slice().sort(I))&&e.sort((t,o)=>{const s=a.indexOf(t.id),n=a.indexOf(o.id);return s<n?-1:s>n?1:0})}function I(e,a){return e<a?-1:e>a?1:0}async function j(e,a,r){const{url:t,customParameters:o,apiKey:s}=a,{serviceJSON:n,layersJSON:i}=await J(t,{customParameters:o,apiKey:s}),l=S(e.layers,n.layers,r),y=S(e.tables,n.tables,r);e.layers=l.itemResources,e.tables=y.itemResources;const f=[...l.added,...y.added],O=i?[...i.layers,...i.tables]:[];await q(e,f,t,O)}function S(e,a,r){const t=N(e,a,(s,n)=>s.id===n.id);e=e.filter(s=>!t.removed.some(n=>n.id===s.id));const o=t.added;return o.forEach(({id:s})=>{e.push({id:s})}),{itemResources:e,added:o.filter(({id:s})=>!r.includes(s))}}async function q(e,a,r,t){const o=await V(a),s=a.map(({id:n,type:i})=>new(o.get(i))({url:r,layerId:n,sourceJSON:t.find(({id:l})=>l===n)}));await Promise.allSettled(s.map(n=>n.load())),s.forEach(n=>{const{layerId:i,loaded:l,defaultPopupTemplate:y}=n;if(!l||y==null)return;const f={id:i,popupInfo:y.toJSON()};n.operationalLayerType!=="ArcGISFeatureLayer"&&(f.layerType=n.operationalLayerType),L(n,f,e)})}async function V(e){const a=[];e.forEach(({type:o})=>{switch(_(o)){case"CatalogLayer":a.push(import("./CatalogLayer-M4fSkLnS.js").then(s=>s.default));break;case"FeatureLayer":a.push(import("./FeatureLayer-D7DQaaAP.js").then(s=>s.default));break;case"OrientedImageryLayer":a.push(import("./OrientedImageryLayer-Ckgql6iA.js").then(s=>s.default))}});const r=await Promise.all(a),t=new Map;return e.forEach(({type:o},s)=>{t.set(o,r[s])}),t}function L(e,a,r){e.isTable?P(r.tables,a):P(r.layers,a)}function P(e,a){const r=e.findIndex(({id:t})=>t===a.id);r===-1?e.push(a):e[r]=a}function A(e,a){let r=0,t=0,o=0;for(const{layerType:s}of[...a.layers,...a.tables])switch(s){case"OrientedImageryLayer":r++;break;case"SubtypeGroupLayer":t++;break;case"SubtypeGroupTable":o++}c(e,u.ORIENTED_IMAGERY_LAYER,r>0),c(e,u.SUBTYPE_GROUP_LAYER,t>0),c(e,u.SUBTYPE_GROUP_TABLE,o>0)}function z(e,a,r){Y(a,u.METADATA),c(a,u.MULTI_LAYER,e.length>1),c(a,u.SINGLE_LAYER,e.length===1),c(a,u.TABLE,r.tables.length>0&&r.layers.length===0),A(a,r)}async function X(e,a,r){A(a,r)}async function Z(e,a,r){const{url:t,layerId:o,title:s,fullExtent:n,isTable:i}=e,l=x(t);a.url=(l?.serverType==="FeatureServer"?t:`${t}/${o}`)??null,a.title||=s,a.extent=null,i||n==null||(a.extent=await G(n)),z([e],a,r)}async function H(e,a){return R({layer:e,itemType:d,validateLayer:m,createJSONContext:r=>b(r,e),createItemData:(r,t)=>M(t,[r]),errorNamePrefix:$,setItemProperties:X},a)}async function Q(e,a,r){return g({layer:e,itemType:d,validateLayer:m,createJSONContext:t=>b(t,e),createItemData:(t,o)=>Promise.resolve(T(t)),errorNamePrefix:F,newItem:a,setItemProperties:Z},r)}export{H as save,Q as saveAs};
