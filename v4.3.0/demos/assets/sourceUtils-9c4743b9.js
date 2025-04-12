import{_ as p}from"./preload-helper-388ac9d5.js";import{cZ as g,c_ as y,cX as w,c$ as I,d0 as _,aq as f,t as h}from"./main-46bfe858.js";class b{constructor(){this.code=null,this.description=null}}class v{constructor(t){this.error=new b,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function d(e){return new v(e)}class q{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function F(e){return new q(e)}const l=new Set;function G(e,t,i,m=!1,u){l.clear();for(const r in i){const n=e.get(r);if(!n)continue;const a=i[r],s=P(n,a);if(s!==a&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:n,originalValue:a,sanitizedValue:s}}),l.add(n.name),n&&(m||n.editable)){const c=g(n,s);if(c)return d(y(c,n,s));t[n.name]=s}}for(const r of e?.requiredFields??[])if(!l.has(r.name))return d(`missing required field "${r.name}"`);return null}function P(e,t){let i=t;return typeof t=="string"&&w(e)?i=parseFloat(t):t!=null&&I(e)&&typeof t!="string"&&(i=String(t)),_(i)}let o;function S(e,t){if(!e||!f(t))return e;if("rings"in e||"paths"in e){if(h(o))throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function E(){return h(o)&&(o=await p(()=>import("./geometryEngineJSON-e42ff21a.js").then(e=>e.g),["./geometryEngineJSON-e42ff21a.js","./geometryEngineBase-807394fe.js","./json-48e3ea08.js"],import.meta.url)),o}async function T(e,t){!f(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await E()}export{d as a,F as f,S as g,G as m,T as w};
