import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { p as s$1, eB as x, eC as n, t, c as s, eD as L, cW as ie, eE as m$1, eF as _, eG as S } from './main-5658cd6e.js';

const c=s$1.getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:()=>null},p={getAttribute:(e,r)=>e.field(r)};async function m(r,a,n$1){if(!r||!r.symbol||!a)return f;const o=r.where,i=x(r),m=o?await __vitePreload(() => import('./WhereClause-2f1c02a5.js').then(n => n.W),true?["./WhereClause-2f1c02a5.js","./main-5658cd6e.js","./preload-helper-a4975f27.js","./main-2af48127.css","./executionError-ed2c63c0.js"]:void 0,import.meta.url):null;let g;if("arcade"===i.type){const r=await n(i.expression,n$1,a);if(t(r))return f;g={type:"arcade",evaluate(t){try{const e=r.evaluate({$feature:"attributes"in t?r.repurposeFeature(t):t});if(null!=e)return e.toString()}catch(a){c.error(new s("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:t,expression:i}));}return null},needsHydrationToEvaluate:()=>null==_(i.expression)};}else g={type:"simple",evaluate:e=>i.expression.replace(/{[^}]*}/g,(r=>{const t=r.slice(1,-1),n=a.get(t);if(!n)return r;let o=null;if("attributes"in e){e&&e.attributes&&(o=e.attributes[n.name]);}else o=e.field(n.name);return null==o?"":d(o,n)}))};if(o){let r;try{r=m.WhereClause.create(o,a);}catch(y){return c.error(new s("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:o,error:y})),f}const t=g.evaluate;g.evaluate=a=>{const n="attributes"in a?void 0:p;try{if(r.testFeature(a,n))return t(a)}catch(y){c.error(new s("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:o,feature:a,error:y}));}return null};}return g}function d(e,r){if(null==e)return "";const t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const r=e;for(const e of t.codedValues)if(e.code===r)return e.name}else if("range"===t.type){const r=+e,a="range"in t?t.range[0]:t.minValue,n="range"in t?t.range[1]:t.maxValue;if(a<=r&&r<=n)return t.name}let l=e;return "date"===r.type||"esriFieldTypeDate"===r.type?l=L(l,S("short-date")):ie(r)&&(l=m$1(+l)),l||""}

export { m as createLabelFunction, d as formatField };
