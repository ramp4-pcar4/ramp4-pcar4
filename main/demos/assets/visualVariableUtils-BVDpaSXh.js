import{b6 as q,eX as A,n as O,aM as C}from"./main-Bd_03BNf.js";import{m as P}from"./lengthUtils-Cym5f2xe.js";var S,v;function L(e){return e&&e.declaredClass==="esri.renderers.visualVariables.SizeVariable"}function y(e){return e!=null&&!isNaN(e)&&isFinite(e)}function Z(e){return e.valueExpression?S.Expression:e.field&&typeof e.field=="string"?S.Field:S.Unknown}function te(e,a){const t=a||Z(e),n=e.valueUnit||"unknown";return t===S.Unknown?v.Constant:e.stops?v.Stops:e.minSize!=null&&e.maxSize!=null&&e.minDataValue!=null&&e.maxDataValue!=null?v.ClampedLinear:n==="unknown"?e.minSize!=null&&e.minDataValue!=null?e.minSize&&e.minDataValue?v.Proportional:v.Additive:v.Identity:v.RealWorldSize}(function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"})(S||(S={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(v||(v={}));const R=()=>O.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),g=e=>R().warn(`The visualVariable should be an instance of esri.renderers.visualVariables.${e}`),w=()=>R().error("Use of arcade expressions requires an arcade context"),D=new q,z=Math.PI,_=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function M(e,a,t){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(c=>c.type==="color"):e;if(!n)return;if(n.declaredClass!=="esri.renderers.visualVariables.ColorVariable")return void g("ColorVariable");const r=typeof a=="number",i=r?null:a,s=i?.attributes;let o=r?a:null;const l=n.field,{ipData:d,hasExpression:m}=n.cache;let u=n.cache.compiledFunc;if(!l&&!m){const c=n.stops;return c&&c[0]&&c[0].color}if(typeof o!="number")if(m){if(t?.arcade==null)return void w();const c={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},p=t.arcade.arcadeUtils,V=p.getViewInfo(c),x=p.createExecContext(i,V,t.timeZone);if(!u){const k=p.createSyntaxTree(n.valueExpression);u=p.createFunction(k),n.cache.compiledFunc=u}o=p.executeFunction(u,x)}else s&&(o=s[l]);const f=n.normalizationField,b=s!=null&&f!=null?parseFloat(s[f]):void 0;if(o!=null&&(!f||r||!isNaN(b)&&b!==0)){isNaN(b)||r||(o/=b);const c=E(o,d);if(c){const p=c[0],V=c[1],x=p===V?n.stops[p].color:C.blendColors(n.stops[p].color,n.stops[V].color,c[2],t?.color);return new C(x)}}}function N(e,a,t){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(c=>c.type==="opacity"):e;if(!n)return;if(n.declaredClass!=="esri.renderers.visualVariables.OpacityVariable")return void g("OpacityVariable");const r=typeof a=="number",i=r?null:a,s=i?.attributes;let o=r?a:null;const l=n.field,{ipData:d,hasExpression:m}=n.cache;let u=n.cache.compiledFunc;if(!l&&!m){const c=n.stops;return c&&c[0]&&c[0].opacity}if(typeof o!="number")if(m){if(t?.arcade==null)return void w();const c={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},p=t.arcade.arcadeUtils,V=p.getViewInfo(c),x=p.createExecContext(i,V,t.timeZone);if(!u){const k=p.createSyntaxTree(n.valueExpression);u=p.createFunction(k),n.cache.compiledFunc=u}o=p.executeFunction(u,x)}else s&&(o=s[l]);const f=n.normalizationField,b=s!=null&&f!=null?parseFloat(s[f]):void 0;if(o!=null&&(!f||r||!isNaN(b)&&b!==0)){isNaN(b)||r||(o/=b);const c=E(o,d);if(c){const p=c[0],V=c[1];if(p===V)return n.stops[p].opacity;{const x=n.stops[p].opacity;return x+(n.stops[V].opacity-x)*c[2]}}}}function U(e,a,t){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(b=>b.type==="rotation"):e;if(!n)return;if(n.declaredClass!=="esri.renderers.visualVariables.RotationVariable")return void g("RotationVariable");const r=n.axis||"heading",i=r==="heading"&&n.rotationType==="arithmetic"?90:0,s=r==="heading"&&n.rotationType==="arithmetic"?-1:1,o=typeof a=="number"?null:a,l=o?.attributes,d=n.field,{hasExpression:m}=n.cache;let u=n.cache.compiledFunc,f=0;if(!d&&!m)return f;if(m){if(t?.arcade==null)return void w();const b={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},c=t.arcade.arcadeUtils,p=c.getViewInfo(b),V=c.createExecContext(o,p,t.timeZone);if(!u){const x=c.createSyntaxTree(n.valueExpression);u=c.createFunction(x),n.cache.compiledFunc=u}f=c.executeFunction(u,V)}else l&&(f=l[d]||0);return f=typeof f!="number"||isNaN(f)?null:i+s*f,f}function W(e,a,t){const n=typeof a=="number",r=n?null:a,i=r?.attributes;let s=n?a:null;const{isScaleDriven:o}=e.cache;let l=e.cache.compiledFunc;if(o){const m=t?.scale,u=t?.view;s=m==null||u==="3d"?j(e):m}else if(!n)switch(e.inputValueType){case S.Expression:{if(t?.arcade==null)return void w();const m={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},u=t.arcade.arcadeUtils,f=u.getViewInfo(m),b=u.createExecContext(r,f,t.timeZone);if(!l){const c=u.createSyntaxTree(e.valueExpression);l=u.createFunction(c),e.cache.compiledFunc=l}s=u.executeFunction(l,b);break}case S.Field:i&&(s=i[e.field]);break;case S.Unknown:s=null}if(!y(s))return null;if(n||!e.normalizationField)return s;const d=i?parseFloat(i[e.normalizationField]):null;return y(d)&&d!==0?s/d:null}function j(e){let a=null,t=null;const n=e.stops;return n?(a=n[0].value,t=n[n.length-1].value):(a=e.minDataValue||0,t=e.maxDataValue||0),(a+t)/2}function F(e,a,t){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find(i=>i.type==="size"):e;if(!n)return;if(n.declaredClass!=="esri.renderers.visualVariables.SizeVariable")return void g("SizeVariable");const r=I(W(n,a,t),n,a,t,n.cache.ipData);return r==null||isNaN(r)?0:r}function h(e,a,t){return e==null?null:L(e)?F(e,a,t):y(e)?e:null}function T(e,a,t){return y(t)&&e>t?t:y(a)&&e<a?a:e}function B(e,a,t,n){return e+((h(a.minSize,t,n)||a.minDataValue)??0)}function X(e,a,t){const n=e.stops;let r=n?.length&&n[0].size;return r==null&&(r=e.minSize),h(r,a,t)}function $(e,a,t,n){const r=(e-a.minDataValue)/(a.maxDataValue-a.minDataValue),i=h(a.minSize,t,n),s=h(a.maxSize,t,n),o=n?.shape;if(e<=a.minDataValue)return i;if(e>=a.maxDataValue)return s;if(i==null||s==null)return null;if(a.scaleBy==="area"&&o){const l=o==="circle",d=l?z*(i/2)**2:i*i,m=d+r*((l?z*(s/2)**2:s*s)-d);return l?2*Math.sqrt(m/z):Math.sqrt(m)}return i+r*(s-i)}function G(e,a,t,n){const r=n?.shape,i=e/a.minDataValue,s=h(a.minSize,t,n),o=h(a.maxSize,t,n);let l=null;return l=r==="circle"?2*Math.sqrt(i*(s/2)**2):r==="square"||r==="diamond"||r==="image"?Math.sqrt(i*s**2):i*s,T(l,s,o)}function H(e,a,t,n,r){const[i,s,o]=E(e,r);if(i===s)return h(a.stops?.[i].size,t,n);{const l=h(a.stops?.[i].size,t,n);return l+(h(a.stops?.[s].size,t,n)-l)*o}}function J(e,a,t,n){const r=(n?.resolution??1)*P[a.valueUnit],i=h(a.minSize,t,n),s=h(a.maxSize,t,n),{valueRepresentation:o}=a;let l=null;return l=o==="area"?2*Math.sqrt(e/z)/r:o==="radius"||o==="distance"?2*e/r:e/r,T(l,i,s)}function I(e,a,t,n,r){switch(a.transformationType){case v.Additive:return B(e,a,t,n);case v.Constant:return X(a,t,n);case v.ClampedLinear:return $(e,a,t,n);case v.Proportional:return G(e,a,t,n);case v.Stops:return H(e,a,t,n,r);case v.RealWorldSize:return J(e,a,t,n);case v.Identity:return e;case v.Unknown:return null}}function K(e,a,t){const{isScaleDriven:n}=e.cache;if(!(n&&t==="3d"||a))return null;const r={scale:a,view:t};let i=h(e.minSize,D,r),s=h(e.maxSize,D,r);if(i!=null||s!=null){if(i>s){const o=s;s=i,i=o}return{minSize:i,maxSize:s}}}function Q(e,a,t){if(!e.visualVariables)return;const n=[],r=[],i=[],s=[],o=[];for(const l of e.visualVariables)switch(l.type){case"color":r.push(l);break;case"opacity":i.push(l);break;case"rotation":o.push(l);break;case"size":s.push(l)}return r.forEach(l=>{const d=M(l,a,t);n.push({variable:l,value:d})}),i.forEach(l=>{const d=N(l,a,t);n.push({variable:l,value:d})}),o.forEach(l=>{const d=U(l,a,t);n.push({variable:l,value:d})}),s.forEach(l=>{const d=F(l,a,t);n.push({variable:l,value:d})}),n.filter(l=>l.value!=null)}function E(e,a){if(!a)return;let t=0,n=a.length-1;return a.some((r,i)=>e<r?(n=i,!0):(t=i,!1)),[t,n,(e-a[t])/(a[n]-a[t])]}function Y(e,a,t){const n=["proportional","proportional","proportional"];for(const r of e){const i=r.useSymbolValue?"symbol-value":F(r,a,t);switch(r.axis){case"width":n[0]=i;break;case"depth":n[1]=i;break;case"height":n[2]=i;break;case"width-and-depth":n[0]=i,n[1]=i;break;case"all":case void 0:case null:n[0]=i,n[1]=i,n[2]=i;break;default:A(r.axis)}}return n}const ae=Object.freeze(Object.defineProperty({__proto__:null,getAllSizes:Y,getColor:M,getOpacity:N,getRotationAngle:U,getSize:F,getSizeForValue:I,getSizeFromNumberOrVariable:h,getSizeRangeAtScale:K,getVisualVariableValues:Q,viewScaleRE:_},Symbol.toStringTag,{value:"Module"}));export{Q as R,Y as T,te as a,ae as b,L as e,U as h,v as i,Z as t,_ as v};
