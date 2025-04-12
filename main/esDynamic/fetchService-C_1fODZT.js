import{a2 as l}from"./main-C3PVbFgd.js";async function o(e,a){const{data:t}=await l(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return t}const f=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function L(e,a){const{loadContext:t,...r}=a||{},n=t?await t.fetchServiceMetadata(e,r):await o(e,r);u(n),i(n);const c={serviceJSON:n};if((n.currentVersion??0)<10.5)return c;const y=`${e}/layers`,s=t?await t.fetchServiceMetadata(y,r):await o(y,r);return u(s),i(s),c.layersJSON={layers:s.layers,tables:s.tables},c}function p(e){const{type:a}=e;return!!a&&f.has(a)}function b(e){return e.type==="Table"}function i(e){e.layers=e.layers?.filter(p),e.tables=e.tables?.filter(b)}function d(e){e.type||="Feature Layer"}function w(e){e.type||="Table"}function u(e){e.layers?.forEach(d),e.tables?.forEach(w)}function g(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}export{L as a,g as i,o as t};
