import{s as m,R as b,Z as d,C as w,a5 as p,a4 as h,ee as g,a$ as R}from"./main-Cv8ITM2j.js";const c=new Map;async function $(e,s){try{return{data:(await k(e,s)).data,baseUrl:b(e),styleUrl:e}}catch(t){return d(t),null}}function U(e,s,t){const r=s.portal!=null?s.portal:w.getDefault();let o;const l=`${r.url} - ${r.user?.username} - ${e}`,n=c.get(l);if(n)return n;const u=N(e,r,t).then(a=>(o=a,a.fetchData())).then(a=>({data:a,baseUrl:o.itemUrl??"",styleName:e}));return c.set(l,u),u}function N(e,s,t){return s.load(t).then(()=>{const r=new g({disableExtraQuery:!0,query:`owner:${i} AND type:${y} AND typekeywords:"${e}"`});return s.queryItems(r,t)}).then(({results:r})=>{let o=null;const l=e.toLowerCase();if(r&&Array.isArray(r)){for(const n of r)if(n.typeKeywords?.some(a=>a.toLowerCase()===l)&&n.type===y&&n.owner===i){o=n;break}}if(!o)throw new m("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return o.load(t)})}function I(e,s,t){return e?.styleUrl!=null?$(e.styleUrl,t):e?.styleName!=null?U(e.styleName,s,t):Promise.reject(new m("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function j(e){return e===null||e.type==="CIMSymbolReference"?e:{type:"CIMSymbolReference",symbol:e}}function q(e,s){for(const t of s)switch(t){case"cim":if(e.cimRef)return{format:t,url:encodeURI(e.cimRef)};break;case"web-gltf-basisu":{const r=f(e,"gltf_basisu");if(r)return{format:t,url:r};break}case"web-gltf":{const r=f(e,"gltf");if(r)return{format:t,url:r};break}case"web":{const r=f(e,"gltf");if(r)return{format:"web-gltf",url:r};if(e.webRef)return{format:t,url:encodeURI(e.webRef)};break}}}function f(e,s){if(!R("enable-feature:force-wosr"))return e.formatInfos?.find(t=>t.type===s)?.href}function k(e,s){const t={responseType:"json",query:{f:"json"},...s};return p(h(e),t)}const i="esri_en",y="Style",A="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";export{A as h,I as i,j as m,k as p,q as y};
