import{n as d,s as C,o as v,ft as I,aK as O}from"./main-0iYVBzEC.js";import{i as x}from"./colorUtils-B5kcDVgK.js";import{B as S,W as b,U as h,v as k,a as g,c as N,z as P}from"./utils-CVqh4UTd.js";import{B as T,H as w,D as G,C as E}from"./quantizationUtils-Cbtx38oO.js";function M(l,e,r,i,t){if(l==null)return null;const s=l.references("geometry")&&t?A(e,i,t):e,o=l.repurposeFeature(s);try{return l.evaluate({...r,$feature:o},l.services)}catch(a){return d.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",a),null}}const m=new Map;function A(l,e,r){const{transform:i,hasZ:t,hasM:s}=r;m.has(e)||m.set(e,L(e));const o=m.get(e)(l.geometry,i,t,s);return{...l,geometry:o}}function L(l){const e={};switch(l){case"esriGeometryPoint":return(r,i,t,s)=>E(i,e,r,t,s);case"esriGeometryPolygon":return(r,i,t,s)=>G(i,e,r,t,s);case"esriGeometryPolyline":return(r,i,t,s)=>w(i,e,r,t,s);case"esriGeometryMultipoint":return(r,i,t,s)=>T(i,e,r,t,s);default:return d.getLogger("esri.views.2d.support.arcadeOnDemand").error(new C("mapview-arcade",`Unable to handle geometryType: ${l}`)),r=>r}}const D=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),R=l=>{if(!l)return[0,0,0,0];const{r:e,g:r,b:i,a:t}=l;return[e,r,i,255*t]};class c{static findApplicableOverrides(e,r,i){if(e&&r){if(e.primitiveName){let t=!1;for(const s of i)if(s.primitiveName===e.primitiveName){t=!0;break}if(!t)for(const s of r)s.primitiveName===e.primitiveName&&i.push(s)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const t of e.effects)c.findApplicableOverrides(t,r,i);if(e.symbolLayers)for(const t of e.symbolLayers)c.findApplicableOverrides(t,r,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const t of e.effects)c.findApplicableOverrides(t,r,i);if(e.markerPlacement&&c.findApplicableOverrides(e.markerPlacement,r,i),e.type==="CIMVectorMarker"){if(e.markerGraphics)for(const t of e.markerGraphics)c.findApplicableOverrides(t,r,i),c.findApplicableOverrides(t.symbol,r,i)}else e.type==="CIMCharacterMarker"?c.findApplicableOverrides(e.symbol,r,i):e.type==="CIMHatchFill"?c.findApplicableOverrides(e.lineSymbol,r,i):e.type==="CIMPictureMarker"&&c.findApplicableOverrides(e.animatedSymbolProperties,r,i)}}}static findEffectOverrides(e,r){if(!e)return null;if(e.type==="CIMGeometricEffectDashes"&&S(e),!r||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const i=b(e),t=e.primitiveName,s=[];for(const o of r)o.primitiveName===t&&s.push(b(o));return{type:"cim-effect-param",effect:i,overrides:h(s)}}static async resolveSymbolOverrides(e,r,i,t,s,o,a){if(!e?.symbol)return null;let{symbol:p,primitiveOverrides:n}=e;const y=!!n;if(!y&&!t)return p;p=v(p),n=v(n);let u=!0;if(r||(r={attributes:{}},u=!1),y){if(u||(n=n.filter(f=>!f.valueExpressionInfo?.expression.includes("$feature"))),a||(n=n.filter(f=>!f.valueExpressionInfo?.expression.includes("$view"))),n.length>0){const f={spatialReference:i,fields:k(r.attributes),geometryType:s};await c.createRenderExpressions(n,f),c.evaluateOverrides(n,r,s??"esriGeometryPoint",o,a)}c.applyOverrides(p,n)}return t&&c.applyDictionaryTextOverrides(p,r,t,null),p}static async createRenderExpressions(e,r){const i=[];for(const t of e){const s=t.valueExpressionInfo;if(!s||c._expressionToRenderExpression.has(s.expression))continue;const o=I(s.expression,r.spatialReference,r.fields);i.push(o),o.then(a=>c._expressionToRenderExpression.set(s.expression,a))}i.length>0&&await Promise.all(i)}static evaluateOverrides(e,r,i,t,s){const o={$view:{scale:s?.scale}};for(const a of e){a.value&&typeof a.value=="object"&&x(a.value)&&(a.propertyName==="Color"||a.propertyName==="StrokeColor")&&(a.value=R(a.value));const p=a.valueExpressionInfo;if(!p)continue;const n=c._expressionToRenderExpression.get(p.expression);n&&(a.value=M(n,r,o,i,t))}}static applyDictionaryTextOverrides(e,r,i,t,s="Normal"){if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const o=e.symbolLayers;if(!o)return;for(const a of o)a&&a.type==="CIMVectorMarker"&&c.applyDictionaryTextOverrides(a,r,i,t,e.type==="CIMTextSymbol"?e.textCase:s)}break;case"CIMVectorMarker":{const o=e.markerGraphics;if(!o)return;for(const a of o)a&&c.applyDictionaryTextOverrides(a,r,i,t)}break;case"CIMMarkerGraphic":{const o=e.textString;if(o&&o.includes("[")){const a=g(o,i);e.textString=N(r,a,t,s)}}}}static applyOverrides(e,r,i,t){if(e.primitiveName){for(const s of r)if(s.primitiveName===e.primitiveName){const o=P(s.propertyName);if(t&&t.push({cim:e,nocapPropertyName:o,value:e[o]}),i){let a=!1;for(const p of i)p.primitiveName===e.primitiveName&&(a=!0);a||i.push(s)}s.value!=null&&(e[o]=s.value)}}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)c.applyOverrides(s,r,i,t);if(e.symbolLayers)for(const s of e.symbolLayers)c.applyOverrides(s,r,i,t);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const s of e.effects)c.applyOverrides(s,r,i,t);if(e.type==="CIMVectorMarker"&&e.markerGraphics)for(const s of e.markerGraphics)c.applyOverrides(s,r,i,t),c.applyOverrides(s.symbol,r,i,t)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const i of e)i.value!==void 0&&(r+=`${i.primitiveName}${i.propertyName}${JSON.stringify(i.value)}`);return r}static toValue(e,r){if(e==="DashTemplate")return r.split(" ").map(i=>Number(i));if(e==="Color"){const i=new O(r).toRgba();return i[3]*=255,i}return r}}c._expressionToRenderExpression=new Map;const $=Object.freeze(Object.defineProperty({__proto__:null,OverrideHelper:c},Symbol.toStringTag,{value:"Module"}));export{$ as O,D as c,c as y};
