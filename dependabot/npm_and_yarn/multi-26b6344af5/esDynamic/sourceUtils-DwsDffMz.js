import{n as f}from"./date-B2Zfy8vK.js";import{cl as d,cm as g,cn as c,co as h,ap as m,cp as y,ao as I}from"./main-0iYVBzEC.js";class E{constructor(){this.code=null,this.description=null}}class S{constructor(n){this.error=new E,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=n}}function a(t){return new S(t)}class T{constructor(n){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=n}}function w(t){return new T(t)}const u=new Set;function C(t,n,r,p=!1){u.clear();for(const o in r){const s=t.get(o);if(!s)continue;const i=N(s,r[o]);if(u.add(s.name),s&&(p||s.editable)){const l=d(s,i);if(l)return a(g(l,s,i));n[s.name]=i}}for(const o of t.requiredFields??[])if(!u.has(o.name))return a(`missing required field "${o.name}"`);return null}function N(t,n){let r=n;return m(t)&&typeof n=="string"?r=parseFloat(n):y(t)&&n!=null&&typeof n!="string"?r=String(n):I(t)&&typeof n=="string"&&(r=f(n)),h(r)}let e;function A(t,n){if(!t||!c(n))return t;if("rings"in t||"paths"in t){if(e==null)throw new TypeError("geometry engine not loaded");return e.simplify(n,t)}return t}async function B(){return e==null&&(e=await import("./geometryEngineJSON-DmrXn_MV.js").then(t=>t.g)),e}async function b(t,n){!c(t)||n!=="esriGeometryPolygon"&&n!=="esriGeometryPolyline"||await B()}const q={supportsAutoIntervalBin:!0,supportsFixedIntervalBin:!0,supportsFixedBoundariesBin:!0,supportsDateBin:!0,supportsStackBy:!0,supportsSplitBy:!0,supportsNormalization:!0,supportedStatisticTypes:["COUNT","SUM","AVG","VAR","STDDEV","MIN","MAX","PERCENTILE_CONT","PERCENTILE_DISC","CentroidAggregate","EnvelopeAggregate","ConvexHullAggregate"],supportedNormalizationTypes:["field","log","naturalLog","percentOfTotal","squareRoot"]};export{b as E,q as S,w as f,C as g,A as h,a as p};
