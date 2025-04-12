import{b4 as L,eU as Z,n as _,aK as D}from"./main-C3PVbFgd.js";import{m as W}from"./lengthUtils-B5yY5wgi.js";var y,b;function R(e){return e&&e.declaredClass==="esri.renderers.visualVariables.SizeVariable"}function g(e){return e!=null&&!isNaN(e)&&isFinite(e)}function M(e){return e.valueExpression?y.Expression:e.field&&typeof e.field=="string"?y.Field:y.Unknown}function $(e,t){const a=t||M(e),i=e.valueUnit||"unknown";return a===y.Unknown?b.Constant:e.stops?b.Stops:e.minSize!=null&&e.maxSize!=null&&e.minDataValue!=null&&e.maxDataValue!=null?b.ClampedLinear:i==="unknown"?e.minSize!=null&&e.minDataValue!=null?e.minSize&&e.minDataValue?b.Proportional:b.Additive:b.Identity:b.RealWorldSize}(function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"})(y||(y={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(b||(b={}));const N=()=>_.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),w=e=>N().warn(`The visualVariable should be an instance of esri.renderers.visualVariables.${e}`),z=()=>N().error("Use of arcade expressions requires an arcade context");new L;const S=Math.PI,U=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function T(e,t,a){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.find(o=>o.type==="color"):e;if(!i)return;if(i.declaredClass!=="esri.renderers.visualVariables.ColorVariable")return void w("ColorVariable");const n=typeof t=="number",r=n?null:t,l=r?.attributes;let c=n?t:null;const s=i.field,{ipData:d,hasExpression:v}=i.cache;let u=i.cache.compiledFunc;if(!s&&!v){const o=i.stops;return o&&o[0]&&o[0].color}if(typeof c!="number")if(v){if(a?.arcade==null)return void z();const o={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},p=a.arcade.arcadeUtils,h=p.getViewInfo(o),x=p.createExecContext(r,h,a.timeZone);if(!u){const k=p.createSyntaxTree(i.valueExpression);u=p.createFunction(k),i.cache.compiledFunc=u}c=p.executeFunction(u,x)}else l&&(c=l[s]);const f=i.normalizationField,m=l!=null&&f!=null?parseFloat(l[f]):void 0;if(c!=null&&(!f||n||!isNaN(m)&&m!==0)){isNaN(m)||n||(c/=m);const o=C(c,d);if(o){const p=o[0],h=o[1],x=p===h?i.stops[p].color:D.blendColors(i.stops[p].color,i.stops[h].color,o[2],a?.color);return new D(x)}}}function I(e,t,a){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.find(o=>o.type==="opacity"):e;if(!i)return;if(i.declaredClass!=="esri.renderers.visualVariables.OpacityVariable")return void w("OpacityVariable");const n=typeof t=="number",r=n?null:t,l=r?.attributes;let c=n?t:null;const s=i.field,{ipData:d,hasExpression:v}=i.cache;let u=i.cache.compiledFunc;if(!s&&!v){const o=i.stops;return o&&o[0]&&o[0].opacity}if(typeof c!="number")if(v){if(a?.arcade==null)return void z();const o={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},p=a.arcade.arcadeUtils,h=p.getViewInfo(o),x=p.createExecContext(r,h,a.timeZone);if(!u){const k=p.createSyntaxTree(i.valueExpression);u=p.createFunction(k),i.cache.compiledFunc=u}c=p.executeFunction(u,x)}else l&&(c=l[s]);const f=i.normalizationField,m=l!=null&&f!=null?parseFloat(l[f]):void 0;if(c!=null&&(!f||n||!isNaN(m)&&m!==0)){isNaN(m)||n||(c/=m);const o=C(c,d);if(o){const p=o[0],h=o[1];if(p===h)return i.stops[p].opacity;{const x=i.stops[p].opacity;return x+(i.stops[h].opacity-x)*o[2]}}}}function E(e,t,a){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.find(m=>m.type==="rotation"):e;if(!i)return;if(i.declaredClass!=="esri.renderers.visualVariables.RotationVariable")return void w("RotationVariable");const n=i.axis||"heading",r=n==="heading"&&i.rotationType==="arithmetic"?90:0,l=n==="heading"&&i.rotationType==="arithmetic"?-1:1,c=typeof t=="number"?null:t,s=c?.attributes,d=i.field,{hasExpression:v}=i.cache;let u=i.cache.compiledFunc,f=0;if(!d&&!v)return f;if(v){if(a?.arcade==null)return void z();const m={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},o=a.arcade.arcadeUtils,p=o.getViewInfo(m),h=o.createExecContext(c,p,a.timeZone);if(!u){const x=o.createSyntaxTree(i.valueExpression);u=o.createFunction(x),i.cache.compiledFunc=u}f=o.executeFunction(u,h)}else s&&(f=s[d]||0);return f=typeof f!="number"||isNaN(f)?null:r+l*f,f}function j(e,t,a){const i=typeof t=="number",n=i?null:t,r=n?.attributes;let l=i?t:null;const{isScaleDriven:c}=e.cache;let s=e.cache.compiledFunc;if(c){const v=a?.scale,u=a?.view;l=v==null||u==="3d"?B(e):v}else if(!i)switch(e.inputValueType){case y.Expression:{if(a?.arcade==null)return void z();const v={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},u=a.arcade.arcadeUtils,f=u.getViewInfo(v),m=u.createExecContext(n,f,a.timeZone);if(!s){const o=u.createSyntaxTree(e.valueExpression);s=u.createFunction(o),e.cache.compiledFunc=s}l=u.executeFunction(s,m);break}case y.Field:r&&(l=r[e.field]);break;case y.Unknown:l=null}if(!g(l))return null;if(i||!e.normalizationField)return l;const d=r?parseFloat(r[e.normalizationField]):null;return g(d)&&d!==0?l/d:null}function B(e){let t=null,a=null;const i=e.stops;return i?(t=i[0].value,a=i[i.length-1].value):(t=e.minDataValue||0,a=e.maxDataValue||0),(t+a)/2}function F(e,t,a){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.find(r=>r.type==="size"):e;if(!i)return;if(i.declaredClass!=="esri.renderers.visualVariables.SizeVariable")return void w("SizeVariable");const n=O(j(i,t,a),i,t,a,i.cache.ipData);return n==null||isNaN(n)?0:n}function V(e,t,a){return e==null?null:R(e)?F(e,t,a):g(e)?e:null}function q(e,t,a){return g(a)&&e>a?a:g(t)&&e<t?t:e}function K(e,t,a,i){return e+((V(t.minSize,a,i)||t.minDataValue)??0)}function G(e,t,a){const i=e.stops;let n=i?.length&&i[0].size;return n==null&&(n=e.minSize),V(n,t,a)}function H(e,t,a,i){const n=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),r=V(t.minSize,a,i),l=V(t.maxSize,a,i),c=i?.shape;if(e<=t.minDataValue)return r;if(e>=t.maxDataValue)return l;if(r==null||l==null)return null;if(t.scaleBy==="area"&&c){const s=c==="circle",d=s?S*(r/2)**2:r*r,v=d+n*((s?S*(l/2)**2:l*l)-d);return s?2*Math.sqrt(v/S):Math.sqrt(v)}return r+n*(l-r)}function J(e,t,a,i){const n=i?.shape,r=e/t.minDataValue,l=V(t.minSize,a,i),c=V(t.maxSize,a,i);let s=null;return s=n==="circle"?2*Math.sqrt(r*(l/2)**2):n==="square"||n==="diamond"||n==="image"?Math.sqrt(r*l**2):r*l,q(s,l,c)}function Q(e,t,a,i,n){const[r,l,c]=C(e,n);if(r===l)return V(t.stops?.[r].size,a,i);{const s=V(t.stops?.[r].size,a,i);return s+(V(t.stops?.[l].size,a,i)-s)*c}}function X(e,t,a,i){const n=(i?.resolution??1)*W[t.valueUnit],r=V(t.minSize,a,i),l=V(t.maxSize,a,i),{valueRepresentation:c}=t;let s=null;return s=c==="area"?2*Math.sqrt(e/S)/n:c==="radius"||c==="distance"?2*e/n:e/n,q(s,r,l)}function O(e,t,a,i,n){switch(t.transformationType){case b.Additive:return K(e,t,a,i);case b.Constant:return G(t,a,i);case b.ClampedLinear:return H(e,t,a,i);case b.Proportional:return J(e,t,a,i);case b.Stops:return Q(e,t,a,i,n);case b.RealWorldSize:return X(e,t,a,i);case b.Identity:return e;case b.Unknown:return null}}function A(e,t,a){if(!e.visualVariables)return;const i=[],n=[],r=[],l=[],c=[];for(const s of e.visualVariables)switch(s.type){case"color":n.push(s);break;case"opacity":r.push(s);break;case"rotation":c.push(s);break;case"size":l.push(s)}return n.forEach(s=>{const d=T(s,t,a);i.push({variable:s,value:d})}),r.forEach(s=>{const d=I(s,t,a);i.push({variable:s,value:d})}),c.forEach(s=>{const d=E(s,t,a);i.push({variable:s,value:d})}),l.forEach(s=>{const d=F(s,t,a);i.push({variable:s,value:d})}),i.filter(s=>s.value!=null)}function C(e,t){if(!t)return;let a=0,i=t.length-1;return t.some((n,r)=>e<n?(i=r,!0):(a=r,!1)),[a,i,(e-t[a])/(t[i]-t[a])]}function P(e,t,a){const i=["proportional","proportional","proportional"];for(const n of e){const r=n.useSymbolValue?"symbol-value":F(n,t,a);switch(n.axis){case"width":i[0]=r;break;case"depth":i[1]=r;break;case"height":i[2]=r;break;case"width-and-depth":i[0]=r,i[1]=r;break;case"all":case void 0:case null:i[0]=r,i[1]=r,i[2]=r;break;default:Z(n.axis)}}return i}const Y=Object.freeze(Object.defineProperty({__proto__:null,getAllSizes:P,getColor:T,getOpacity:I,getRotationAngle:E,getSize:F,getSizeForValue:O,getSizeFromNumberOrVariable:V,getVisualVariableValues:A,viewScaleRE:U},Symbol.toStringTag,{value:"Module"}));export{A as R,P as T,$ as a,Y as b,R as e,E as h,b as i,M as t,U as v};
