import{U as i}from"./main-8eb577c9.js";async function s(e,r){const{data:t}=await i(e,{responseType:"json",query:{f:"json",...r?.customParameters,token:r?.apiKey}});return t}async function c(e,r){const t=await s(e,r);t.layers=t.layers.filter(o);const a={serviceJSON:t};if((t.currentVersion??0)<10.5)return a;const n=await s(e+"/layers",r);return a.layersJSON={layers:n.layers.filter(o),tables:n.tables},a}function o(e){return!e.type||e.type==="Feature Layer"}export{c as r,s as t};
