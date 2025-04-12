import{a3 as g,h as w,Z as b,c as o,H as S,w as F,a4 as T,a5 as A,a6 as _,D as c,a7 as C,n as I,a8 as P,a9 as h,aa as $,ab as E,ac as D,ad as m,ae as L,af as V}from"./arcade-DE1hnYcB.js";import{ag as O}from"./arcade-DE1hnYcB.js";import{c$ as J,aC as l,cY as R,cX as Z,cW as z,cL as M,bC as k,bO as G,aQ as N,bP as j,bz as W,o as q}from"./main-C3PVbFgd.js";import{a as f,r as p}from"./unitConversion-BR9nIwpo.js";import{t as H}from"./ImmutableArray-CiJxhY8_.js";import{i as Q,r as U}from"./TimeOnly-TJSzFmFd.js";const y="Voxel.Position",d="Voxel.LocalTime";function X(e){const n=e.getAttribute(y);if(typeof n!="string")throw new f(null,p.InvalidParameter,null);const t=JSON.parse(n);if(!Array.isArray(t)||typeof t[0]!="number"||typeof t[1]!="number"||typeof t[2]!="number")throw new f(null,p.InvalidParameter,null);return new H(t)}function Y(e,n){const t=e.getAttribute(d);if(t==null)return null;if(!J(t))throw new f(null,p.InvalidParameter,null);return l.dateJSAndZoneToArcadeDate(t,n)}class B{constructor(n,t){this._graphic=n,this._timeZone=t,this.arcadeDeclaredClass="esri.arcade.Voxel",this._layer=n.layer}getPosition(){return this._position!==void 0?this._position:this._position=X(this._graphic)}getLocalTime(){return this._localTime!==void 0?this._localTime:this._localTime=Y(this._graphic,this._timeZone??"system")}keys(){return this._layer.fields.map(n=>n.name).sort()}hasField(n){return this._layer.fieldsIndex.has(n)}field(n){const t=this._layer.fieldsIndex?.get(n)?.name;if(t==null)throw new f(null,p.FieldNotFound,null,{key:n});switch(t){case y:return this.getPosition();case d:return this.getLocalTime()}return this._graphic.attributes[t]??null}castToText(n=!1){const t={...this._graphic.attributes};t[y]=this.getPosition(),d in t&&(t[d]=this.getLocalTime());for(const r of Object.keys(t))this._layer.fieldsIndex?.has(r)||delete t[r];return g(t,{useNumbersForDates:n})}}const K={vars:{$feature:"any",$view:"any"},spatialReference:null};function ee(e){return e.replaceAll(/[|\\{}()[\]^$+*?.]/g,"\\$&")}function ne(e){return e==null?null:R(e)||w(e)?"array":b(e)?"date":Z(e)?"text":z(e)?"boolean":M(e)?"number":e instanceof o?"dictionary":S(e)?"feature":e instanceof k?"point":e instanceof G?"polygon":e instanceof N?"polyline":e instanceof j?"multipoint":e instanceof W?"extent":e instanceof Q?"dateOnly":e instanceof U?"time":F(e)?"featureSet":T(e)?"featureSetCollection":null}function u(e){if(!e)return null;try{return A(e)}catch{}return null}function te(e,n){const t=typeof e=="string"?u(e):e;if(!t)return null;try{return n=n||q(K),_(t,n)}catch{}return null}function re(e,n,t){return{vars:{$feature:e==null?new c:c.createFromGraphic(e,t),$view:n?.view},spatialReference:n?.sr,timeZone:t??null}}function ae(e,n,t){return c.createFromGraphicLikeObject(n,e,t,null)}function se(e,n){e.vars!=null&&(e.vars.$feature=n)}function ie(e,n){let t;try{t=C(e,n)}catch{t=null}return t}function oe(e,n){let t;try{t=e?e(n):null}catch{t=null}return t}function le(e,n){try{return e?e(n):Promise.resolve(null)}catch{return Promise.resolve(null)}}const ue=new Set(["$feature","$aggregatedFeatures","$voxel"].map(e=>I(e)));function ce(e,n){if(!e)return[];const t=typeof e=="string"?u(e):e;if(!t)return[];const r=P(t).filter(({varId:a})=>ue.has(a)).map(({memberNamePattern:a})=>a).flatMap(a=>{if(a.includes("*")){if(n==null)return[];const s=new RegExp(`^${a.split(/\*+/).map(ee).join(".*")}$`,"i");return n.filter(i=>s.test(i))}return a.toLowerCase()});return[...new Set(r.sort())]}function fe(e){return h(e,"$view")}function pe(e,n){return!!e&&h(e,n)}function de(e){if(!e||e.spatialReference==null&&(e.scale==null||e.viewingMode==null))return;let n,t;const{timeProperties:r,timeZone:a}=e;if(r!=null){const{currentStart:s,currentEnd:i}=r;a!=null?(n=s!=null?l.dateJSAndZoneToArcadeDate(s,a):null,t=i!=null?l.dateJSAndZoneToArcadeDate(i,a):null):(n=s!=null?l.dateJSToArcadeDate(s):null,t=i!=null?l.dateJSToArcadeDate(i):null)}return{view:e.viewingMode&&e.scale!=null?new o({viewingMode:e.viewingMode,scale:e.scale,timeProperties:n!=null||t!=null?new o({currentStart:n,currentEnd:t,startIncluded:!0,endIncluded:!0}):null}):null,sr:e.spatialReference}}function me({url:e,spatialReference:n,lrucache:t,interceptor:r}){const a=m();return a?a.createFeatureSetCollectionFromService(e,n,t,r):null}function ye({layer:e,spatialReference:n,outFields:t,returnGeometry:r,lrucache:a,interceptor:s}){if(e===null)return null;const i=m();return i?i.constructFeatureSet(e,n,t,r??!0,a,s):null}function he(e){if(e?.map===null)return null;const n=m();return n?n.createFeatureSetCollectionFromMap(e.map,e.spatialReference,e.lrucache,e.interceptor):null}function ve(e,n){return o.convertJsonToArcade(e,n)}function xe(e,n,t=[]){return $(e,n,t)}function ge(){return E()}function we(){return D()}function be(e){return"type"in e&&(e.type==="class-breaks"||e.type==="dictionary"||e.type==="dot-density"||e.type==="pie-chart"||e.type==="simple"||e.type==="unique-value")}function Se(e){return e.declaredClass==="esri.layers.support.LabelClass"}function Fe(e){return e.declaredClass==="esri.PopupTemplate"}function v(e,n){if(!e)return!1;if(typeof e=="string")return n(e);const t=e;if(be(t)){if(t.type==="dot-density"){const s=t.attributes?.some(i=>n(i.valueExpression));if(s)return s}const r=t.visualVariables,a=!!r&&r.some(s=>{let i=n(s.valueExpression);return s.type==="size"&&(x(s.minSize)&&(i=i||n(s.minSize.valueExpression)),x(s.maxSize)&&(i=i||n(s.maxSize.valueExpression))),i});return!(!("valueExpression"in t)||!n(t.valueExpression))||a}if(Se(t)){const r=t.labelExpressionInfo?.expression;return!(!r||!n(r))||!1}return!!Fe(t)&&(!!t.expressionInfos&&t.expressionInfos.some(r=>n(r.expression))||Array.isArray(t.content)&&t.content.some(r=>r.type==="expression"&&n(r.expressionInfo?.expression)))}function Te(e){const n=u(e);return!!n&&L(n)}function Ae(e){return v(e,Te)}function _e(e){const n=u(e);return!!n&&V(n)}function Ce(e){return v(e,_e)}function x(e){return e&&e.declaredClass==="esri.renderers.visualVariables.SizeVariable"}export{o as Dictionary,B as Voxel,O as arcade,c as arcadeFeature,ye as convertFeatureLayerToFeatureSet,ve as convertJsonToArcade,he as convertMapToFeatureSetCollection,me as convertServiceUrlToWorkspace,re as createExecContext,ae as createFeature,te as createFunction,u as createSyntaxTree,fe as dependsOnView,we as enableFeatureSetOperations,ge as enableGeometryOperations,ie as evalSyntaxTree,le as executeAsyncFunction,oe as executeFunction,ce as extractFieldNames,ne as getArcadeType,de as getViewInfo,Ae as hasGeometryFunctions,Ce as hasGeometryOperations,pe as hasVariable,xe as loadScriptDependencies,se as updateExecContext};
