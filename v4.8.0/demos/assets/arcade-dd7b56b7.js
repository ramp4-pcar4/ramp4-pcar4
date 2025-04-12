import { s, X as a, cS as i, Q, a5 as c, b6 as d$1, es as We } from './main-ba570a3b.js';
import { n, a as n$1, m as m$1 } from './TimeOnly-6bc84525.js';
import { t } from './ImmutableArray-da974cd4.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p=null;function f(e,t$1,a,n={}){const o=t$1.elementType,s="value",c="array"===o.type?[{name:s,type:o.type,elementType:o.elementType}]:"dictionary"===o.type?[{name:s,type:o.type,properties:o.properties}]:[{name:s,type:o.type}];return new t(e.map((e=>{const t={};return b(t,c,{[s]:e},a,n),t[s]})))}function m(e,t,r={}){const a=e instanceof d$1?new We({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return t.constructFeatureSet(a,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function y(e,t,r={}){const{spatialReference:a,interceptor:n,lruCache:o}=r;return "string"==typeof e?t.createFeatureSetCollectionFromService(e,a,o,n):t.createFeatureSetCollectionFromMap(e,a,o,n)}function d(e,t,r,a={}){const n={};return b(n,t.properties,e,r,a),new p.Dictionary(n)}function b(e,r,a,n$2,c={}){const i={};for(const t of Object.keys(a))i[t.toLowerCase()]=a[t];for(const l of r){const r=l.name.toLowerCase();if(c.variablesPreProcessed)e[r]=i[r];else switch(l.type){case"array":{const t=i[r];e[r]=null==t?null:f(t,l,n$2,c);break}case"feature":{const t=i[r];e[r]=null==t?null:p.Feature.createFromGraphic(t,c?.timeZone);break}case"featureSet":{const t=i[r];e[r]=null==t?null:n$2?m(t,n$2,c):null;break}case"featureSetCollection":{const t=i[r];e[r]=null==t?null:n$2?y(t,n$2,c):null;break}case"dictionary":{const t=i[r];e[r]=null==t?null:d(t,l,n$2,c);break}case"date":{const a=i[r];e[r]=a?a instanceof m$1?a:c?.timeZone?m$1.dateJSAndZoneToArcadeDate(a,c?.timeZone):m$1.dateJSToArcadeDate(a):null;break}case"dateOnly":{const t=i[r];e[r]=t?t instanceof n$1?t:n$1.fromReader(t):null;break}case"time":{const t=i[r];e[r]=t?t instanceof n?t:n.fromReader(t):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[r]=i[r];}}}function S(e,t){for(const r of e)t.push(r),"dictionary"===r.type&&S(r.properties,t);return t}function v(e,t,r,a,n){const{spatialReference:o,interceptor:s,lruCache:c,console:l,abortSignal:u,timeZone:p,services:f={portal:Q.getDefault()}}=r,m={vars:{},spatialReference:o,interceptor:s,timeZone:p,lrucache:c,useAsync:n,services:f,console:l,abortSignal:u};return t?(b(m.vars,e.variables,t,a,r),m):m}function g(t,r){switch(r.getArcadeType(t)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return t;case"date":return t.toJSDate();case"time":case"dateOnly":return t.toString();case"feature":{const r=(t.type,t),a="geometry"in r?r.geometry():null,n="readAttributes"in r?r.readAttributes():r.attributes;return new c({geometry:a,attributes:n})}case"dictionary":{const e=t,a=e.attributes,n={};for(const t of Object.keys(a))n[t]=g(e.field(t),r);return n}case"array":return ("toArray"in t?t.toArray():t).map((e=>g(e,r)))}return t}const w={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},$={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},h=new Map([["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",w],["popup-element",w],["feature-reduction-popup",$],["feature-reduction-popup-element",$],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function C(e){const t=h.get(e);if(!t){const t=Array.from(h.keys()).map((e=>`'${e}'`)).join(", ");throw new s("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${t}`)}return a(t)}async function A(e,t,r={}){p||(p=await i());const{arcade:n,arcadeUtils:o}=p,{loadScriptDependencies:s$1,referencesMember:c,scriptIsAsync:i$1}=n,l=S(t.variables,[]),f=l.filter((e=>"featureSet"===e.type||"featureSetCollection"===e.type)).map((e=>e.name.toLowerCase())),m=n.parseScript(e,f);if(!m)throw new s("arcade:invalid-script","Unable to create SyntaxTree");const y=o.extractFieldNames(m),d=n.scriptTouchesGeometry(m),b=l.map((e=>e.name.toLowerCase())).filter((e=>c(m,e))),w=i$1(m,f);await s$1(m,w,f);const $={vars:{},spatialReference:null,useAsync:w};for(const a of b)$.vars[a]="any";const{lruCache:h}=r,C=n.compileScript(m,$),A=n.featureSetUtils(),{services:j}=r;return {execute:(e,r={})=>{if(w)throw new s("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const n=C(v(t,e,{lruCache:h,...r},A,w));return r.rawOutput?n:g(n,o)},executeAsync:async(e,r={})=>{const a=await C(v(t,e,{lruCache:h,services:j,...r},A,w));return r.rawOutput?a:g(a,o)},isAsync:w,variablesUsed:b,fieldsUsed:y,geometryUsed:d,syntaxTree:m}}

export { A as createArcadeExecutor, C as createArcadeProfile };
