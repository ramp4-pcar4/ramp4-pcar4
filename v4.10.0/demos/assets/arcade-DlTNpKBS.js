import{s as g,T as G,d3 as L,e as P,a2 as I,bA as J,eT as M}from"./main-CzbArNue.js";import{a as k,n as F,m as S}from"./TimeOnly-Dsr-JsNO.js";import{t as z}from"./ImmutableArray-BPVd6ESQ.js";import"./preload-helper-ExcqyqRp.js";let b=null;function E(e,o,a,n={}){const r=o.elementType,s="value",l=r.type==="array"?[{name:s,type:r.type,elementType:r.elementType}]:r.type==="dictionary"?[{name:s,type:r.type,properties:r.properties}]:[{name:s,type:r.type}];return new z(e.map(c=>{const t={};return w(t,l,{[s]:c},a,n),t[s]}))}function N(e,o,a={}){const n=e instanceof J?new M({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return o.constructFeatureSet(n,a.spatialReference,null,!0,a.lruCache,a.interceptor)}function X(e,o,a={}){const{spatialReference:n,interceptor:r,lruCache:s}=a;return typeof e=="string"?o.createFeatureSetCollectionFromService(e,n,s,r):o.createFeatureSetCollectionFromMap(e,n,s,r)}function Y(e,o,a,n={}){const r={};return w(r,o.properties,e,a,n),new b.Dictionary(r)}function w(e,o,a,n,r={}){const s={};for(const l of Object.keys(a))s[l.toLowerCase()]=a[l];for(const l of o){const c=l.name.toLowerCase();if(r.variablesPreProcessed)e[c]=s[c];else switch(l.type){case"array":{const t=s[c];e[c]=t==null?null:E(t,l,n,r);break}case"feature":{const t=s[c];e[c]=t==null?null:b.Feature.createFromGraphic(t,r?.timeZone);break}case"featureSet":{const t=s[c];e[c]=t==null?null:n?N(t,n,r):null;break}case"featureSetCollection":{const t=s[c];e[c]=t==null?null:n?X(t,n,r):null;break}case"dictionary":{const t=s[c];e[c]=t==null?null:Y(t,l,n,r);break}case"date":{const t=s[c];e[c]=t?t instanceof S?t:r?.timeZone?S.dateJSAndZoneToArcadeDate(t,r?.timeZone):S.dateJSToArcadeDate(t):null;break}case"dateOnly":{const t=s[c];e[c]=t?t instanceof F?t:F.fromReader(t):null;break}case"time":{const t=s[c];e[c]=t?t instanceof k?t:k.fromReader(t):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[c]=s[c]}}}function Z(e,o){for(const a of e)o.push(a),a.type==="dictionary"&&Z(a.properties,o);return o}function R(e,o,a,n,r){const{spatialReference:s,interceptor:l,lruCache:c,console:t,abortSignal:f,timeZone:u,services:$={portal:P.getDefault()}}=a,m={vars:{},spatialReference:s,interceptor:l,timeZone:u,lrucache:c,useAsync:r,services:$,console:t,abortSignal:f};return o&&w(m.vars,e.variables,o,n,a),m}function v(e,o){switch(o.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const a=(e.type,e),n="geometry"in a?a.geometry():null,r="readAttributes"in a?a.readAttributes():a.attributes;return new I({geometry:n,attributes:r})}case"dictionary":{const a=e,n=a.attributes,r={};for(const s of Object.keys(n))r[s]=v(a.field(s),o);return r}case"array":return("toArray"in e?e.toArray():e).map(a=>v(a,o))}return e}const D={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},O={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},U=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",D],["popup-element",D],["feature-reduction-popup",O],["feature-reduction-popup-element",O],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function Q(e){const o=U.get(e);if(!o){const a=Array.from(U.keys()).map(n=>`'${n}'`).join(", ");throw new g("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${a}`)}return G(o)}async function V(e,o,a={}){b||(b=await L());const{arcade:n,arcadeUtils:r}=b,{loadScriptDependencies:s,referencesMember:l,scriptIsAsync:c}=n,t=Z(o.variables,[]),f=t.filter(i=>i.type==="featureSet"||i.type==="featureSetCollection").map(i=>i.name.toLowerCase()),u=n.parseScript(e,f);if(!u)throw new g("arcade:invalid-script","Unable to create SyntaxTree");const $=r.extractFieldNames(u),m=n.scriptTouchesGeometry(u),h=t.map(i=>i.name.toLowerCase()).filter(i=>l(u,i)),p=c(u,f);await s(u,p,f);const C={vars:{},spatialReference:null,useAsync:p};for(const i of h)C.vars[i]="any";const{lruCache:A}=a,x=n.compileScript(u,C),T=n.featureSetUtils(),{services:j}=a;return{execute:(i,y={})=>{if(p)throw new g("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const d=x(R(o,i,{lruCache:A,...y},T,p));return y.rawOutput?d:v(d,r)},executeAsync:async(i,y={})=>{const d=await x(R(o,i,{lruCache:A,services:j,...y},T,p));return y.rawOutput?d:v(d,r)},isAsync:p,variablesUsed:h,fieldsUsed:$,geometryUsed:m,syntaxTree:u}}export{V as createArcadeExecutor,Q as createArcadeProfile};
