import{aX as f,s as o}from"./main-Cv8ITM2j.js";import{d as u,l as i}from"./parser-OujP_0wM.js";function b(t,s,e){try{return p(t)}catch(n){e?.messages?.push(n)}return null}function y(t,s,e,n){try{const r=l(t);f(e,r,s)}catch(r){n.messages&&n.messages.push(r)}}function l(t){const s=u(t);return s?i(s)?s.map(e=>e.toJSON()):s.map(({scale:e,effects:n})=>({scale:e,value:n.map(r=>r.toJSON())})):null}function p(t){if(!t||t.length===0)return null;if(m(t)){const s=[];for(const e of t)s.push({scale:e.scale,value:c(e.value)});return s}return c(t)}function m(t){const s=t[0];return!!s&&"scale"in s}function c(t){if(!t?.length)return"";const s=[];for(const e of t){let n=[];switch(e.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":n=[a(e,"amount")];break;case"blur":n=[a(e,"radius","pt")];break;case"hue-rotate":n=[a(e,"angle","deg")];break;case"drop-shadow":n=[a(e,"xoffset","pt"),a(e,"yoffset","pt"),a(e,"blurRadius","pt"),h(e,"color")];break;case"bloom":n=[a(e,"strength"),a(e,"radius","pt"),a(e,"threshold")]}const r=`${e.type}(${n.filter(Boolean).join(" ")})`;u(r),s.push(r)}return s.join(" ")}function a(t,s,e){if(t[s]==null)throw new o("effect:missing-parameter",`Missing parameter '${s}' in ${t.type} effect`,{effect:t});return e?t[s]+e:""+t[s]}function h(t,s){if(t[s]==null)throw new o("effect:missing-parameter",`Missing parameter '${s}' in ${t.type} effect`,{effect:t});const e=t[s];return`rgba(${e[0]||0}, ${e[1]||0}, ${e[2]||0}, ${e[3]/255||0})`}export{y as a,b as n};
