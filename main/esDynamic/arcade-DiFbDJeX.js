import{a$ as G,s as S,C as j,b4 as J,aC as w,bH as T,n as I,o as M}from"./main-C3PVbFgd.js";import{t as z}from"./ImmutableArray-CiJxhY8_.js";import{r as F,i as R}from"./TimeOnly-TJSzFmFd.js";import H from"./FeatureLayer-D7DQaaAP.js";import{d as N}from"./FeatureSet-BCz8r4S5.js";let m=null;function V(e,o,a,n={}){const r=o.elementType,c="value",p=r.type==="array"?[{name:c,type:r.type,elementType:r.elementType}]:r.type==="dictionary"?[{name:c,type:r.type,properties:r.properties}]:[{name:c,type:r.type}];return new z(e.map(i=>{const t={};return $(t,p,{[c]:i},a,n),t[c]}))}function Y(e,o,a={}){const n=e instanceof N?new H({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return o.constructFeatureSet(n,a.spatialReference,null,!0,a.lruCache,a.interceptor)}function q(e,o,a={}){const{spatialReference:n,interceptor:r,lruCache:c}=a;return typeof e=="string"?o.createFeatureSetCollectionFromService(e,n,c,r):o.createFeatureSetCollectionFromMap(e,n,c,r)}function B(e,o,a,n={}){const r={};return $(r,o.properties,e,a,n),new m.Dictionary(r)}function $(e,o,a,n,r={}){const c={};for(const p of Object.keys(a))c[p.toLowerCase()]=a[p];for(const p of o){const i=p.name.toLowerCase();if(r.variablesPreProcessed)e[i]=c[i];else switch(p.type){case"array":{const t=c[i];e[i]=t==null?null:V(t,p,n,r);break}case"feature":{const t=c[i];e[i]=t==null?null:m.Feature.createFromGraphic(t,r?.timeZone);break}case"featureSet":{const t=c[i];e[i]=t==null?null:n?Y(t,n,r):null;break}case"featureSetCollection":{const t=c[i];e[i]=t==null?null:n?q(t,n,r):null;break}case"dictionary":{const t=c[i];e[i]=t==null?null:B(t,p,n,r);break}case"date":{const t=c[i];e[i]=t?t instanceof w?t:r?.timeZone?w.dateJSAndZoneToArcadeDate(t,r?.timeZone):w.dateJSToArcadeDate(t):null;break}case"dateOnly":{const t=c[i];e[i]=t?t instanceof R?t:R.fromReader(t):null;break}case"time":{const t=c[i];e[i]=t?t instanceof F?t:F.fromReader(t):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[i]=c[i];break;case"voxel":{const t=c[i];e[i]=t==null?null:new m.Voxel(t,r?.timeZone);break}}}}function O(e,o){for(const a of e)o.push(a),a.type==="dictionary"&&O(a.properties,o);return o}function P(e,o,a,n,r){const{spatialReference:c,interceptor:p,lruCache:i,console:t,abortSignal:y,timeZone:u,services:g={portal:j.getDefault()}}=a,b={vars:{},spatialReference:c,interceptor:p,timeZone:u,lrucache:i,useAsync:r,services:g,console:t,abortSignal:y};return o&&$(b.vars,e.variables,o,n,a),b}function v(e,o){switch(o.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const a=(e.type,e),n="geometry"in a?a.geometry():null,r="readAttributes"in a?a.readAttributes():a.attributes;return new J({geometry:n,attributes:r})}case"dictionary":{const a=e,n=a.attributes,r={};for(const c of Object.keys(n))r[c]=v(a.field(c),o);return r}case"array":return("toArray"in e?e.toArray():e).map(a=>v(a,o))}return e}const Z={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]},D={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]},L={variables:[{name:"$voxel",type:"voxel"}]},U=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]}],["popup",Z],["popup-element",Z],["popup-feature-reduction",D],["popup-element-feature-reduction",D],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]}],["popup-voxel",L],["popup-element-voxel",L]]);function K(e){e==="feature-reduction-popup"?(T(I.getLogger("esri.arcade"),'profile name: "feature-reduction-popup"',{replacement:'"popup-feature-reduction"',version:"4.32",warnOnce:!0}),e="popup-feature-reduction"):e==="feature-reduction-popup-element"&&(T(I.getLogger("esri.arcade"),'profile name: "feature-reduction-popup-element"',{replacement:'"popup-element-feature-reduction"',version:"4.32",warnOnce:!0}),e="popup-element-feature-reduction");const o=U.get(e);if(!o){const a=Array.from(U.keys()).map(n=>`'${n}'`).join(", ");throw new S("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${a}`)}return M(o)}async function Q(e,o,a={}){m||(m=await G());const{arcade:n,arcadeUtils:r}=m,{loadScriptDependencies:c,referencesMember:p,scriptIsAsync:i}=n,t=O(o.variables,[]),y=t.filter(s=>s.type==="featureSet"||s.type==="featureSetCollection").map(s=>s.name.toLowerCase()),u=n.parseScript(e,y);if(!u)throw new S("arcade:invalid-script","Unable to create SyntaxTree");const g=r.extractFieldNames(u),b=n.scriptTouchesGeometry(u),C=t.map(s=>s.name.toLowerCase()).filter(s=>p(u,s)),l=i(u,y);await c(u,l,y);const h={vars:{},spatialReference:null,useAsync:l};for(const s of C)h.vars[s]="any";const{lruCache:x}=a,A=n.compileScript(u,h),k=n.featureSetUtils(),{services:E}=a;return{execute:(s,f={})=>{if(l)throw new S("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const d=A(P(o,s,{lruCache:x,...f},k,l));return f.rawOutput?d:v(d,r)},executeAsync:async(s,f={})=>{const d=await A(P(o,s,{lruCache:x,services:E,...f},k,l));return f.rawOutput?d:v(d,r)},isAsync:l,variablesUsed:C,fieldsUsed:g,geometryUsed:b,syntaxTree:u}}export{Q as createArcadeExecutor,K as createArcadeProfile};
