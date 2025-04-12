import{aK as s,e as y,eW as p,eX as w,eY as d,eZ as g}from"./main-C3PVbFgd.js";import"./parser-CBs_AFdd.js";import"./mat4f32-CiZjBg9k.js";import"./mat4-Ce4sLrv7.js";import{C as k}from"./cimSymbolUtils-BO-Vy4ts.js";import{e as L}from"./LRUCache-BrXUUXuN.js";import"./defaultCIMValues-D0Or-nCI.js";new L(1e3),new s([128,128,128]);const z=new s("white");function j(e){if(e==null||!("symbolLayers"in e)||e.symbolLayers==null)return!1;switch(e.type){case"point-3d":return e.symbolLayers.some(t=>t.type==="object");case"line-3d":return e.symbolLayers.some(t=>t.type==="path");case"polygon-3d":return e.symbolLayers.some(t=>t.type==="object"||t.type==="extrude");default:return!1}}function x(e){return e.resource?.href??""}function S(e,t){if(!e)return null;let o=null;return y(e)?o=v(e):p(e)&&(o=e.type==="cim"?k(e):e.color?new s(e.color):null),o?n(o,t):null}function v(e){const t=e.symbolLayers;if(!t)return null;let o=null;return t.forEach(l=>{l.type==="object"&&l.resource?.href||(o=l.type==="water"?l.color:l.material?l.material.color:null)}),o?new s(o):null}function n(e,t){if(t==null||e==null)return e;const o=e.toRgba();return o[3]=o[3]*t,new s(o)}function E(e,t,o){const l=e.symbolLayers;if(!l)return;const i=r=>n(t=t??r??(o!=null?z:null),o);l.forEach(r=>{if(r.type!=="object"||!r.resource?.href||t)if(r.type==="water")r.color=i(r.color);else{const a=r.material!=null?r.material.color:null,u=i(a);r.material==null?r.material=new w({color:u}):r.material.color=u,o!=null&&"outline"in r&&r.outline?.color!=null&&(r.outline.color=n(r.outline.color,o))}})}function R(e,t,o){(t=t??e.color)&&(e.color=n(t,o)),o!=null&&"outline"in e&&e.outline?.color&&(e.outline.color=n(e.outline.color,o))}function C(e,t,o){e&&(t||o!=null)&&(t&&(t=new s(t)),y(e)?E(e,t,o):p(e)&&R(e,t,o))}async function D(e,t){const o=e.symbolLayers;o&&await d(o,async l=>J(l,t))}async function J(e,t){switch(e.type){case"extrude":q(e,t);break;case"icon":case"line":case"text":O(e,t);break;case"path":B(e,t);break;case"object":await A(e,t)}}function O(e,t){const o=h(t);o!=null&&(e.size=o)}function h(e){for(const t of e)if(typeof t=="number")return t;return null}function q(e,t){e.size=typeof t[2]=="number"?t[2]:0}async function A(e,t){const{resourceSize:o,symbolSize:l}=await F(e),i=b(t,o,l);e.width=f(t[0],l[0],o[0],i),e.depth=f(t[1],l[1],o[1],i),e.height=f(t[2],l[2],o[2],i)}function B(e,t){const o=b(t,g,[e.width,void 0,e.height]);e.width=f(t[0],e.width,1,o),e.height=f(t[2],e.height,1,o)}function b(e,t,o){for(let l=0;l<3;l++){const i=e[l];switch(i){case"symbol-value":{const r=o[l];return r!=null?r/t[l]:1}case"proportional":break;default:if(i&&t[l])return i/t[l]}}return 1}async function F(e){const{computeObjectLayerResourceSize:t}=await import("./symbolLayerUtils-BDcS9zHj.js"),o=await t(e,10),{width:l,height:i,depth:r}=e,a=[l,r,i];let u=1;for(let c=0;c<3;c++){const m=a[c];if(m!=null){u=m/o[c];break}}for(let c=0;c<3;c++)a[c]==null&&(a[c]=o[c]*u);return{resourceSize:o,symbolSize:a}}function f(e,t,o,l){switch(e){case"proportional":return o*l;case"symbol-value":return t??o;default:return e}}function G(e,t){const o=h(t);if(o!=null)switch(e.type){case"simple-marker":e.size=o;break;case"picture-marker":{const l=e.width/e.height;l>1?(e.width=o,e.height=o*l):(e.width=o*l,e.height=o);break}case"simple-line":e.width=o;break;case"text":e.font.size=o}}async function H(e,t){if(e&&t)return y(e)?D(e,t):void(p(e)&&G(e,t))}function I(e,t,o){if(e&&t!=null)if(y(e)){const l=e.symbolLayers;l&&l.forEach(i=>{if(i.type==="object")switch(o){case"tilt":i.tilt=(i.tilt??0)+t;break;case"roll":i.roll=(i.roll??0)+t;break;default:i.heading=(i.heading??0)+t}i.type==="icon"&&(i.angle+=t)})}else p(e)&&(e.type!=="simple-marker"&&e.type!=="picture-marker"&&e.type!=="text"||(e.angle+=t))}function K(e){return e!=null&&e.type==="polygon-3d"&&e.symbolLayers.some(t=>t.type==="extrude")}export{H as D,I as J,K as N,C as g,S as h,x as p,j as y};
