import { s, y, C, I, p, R as Rt, b, c as p$1, e as b$1, x, j as c$1, k as i, w, m as d$1 } from './main-CaWYn_3L.js';
import { c, a } from './devEnvironmentUtils-Bs2b3M70.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function g(t,e,r,o){const n=t.name;return null==n?Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?d(n,e,o):y(t,e,o).then((t=>h(t,n,e,r,d$1,o)))}function j(t,e){return e.items.find((e=>e.name===t))}function h(u,y,c$2,g,h,d){const U=null!=c$2?.portal?c$2.portal:C.getDefault(),N={portal:U,url:I(u.baseUrl),origin:"portal-item"},w=j(y,u.data);if(!w){const t=`The symbol name '${y}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:y}))}let S=p(h(w,g),N),D=w.thumbnail?.href??null;const O=w.thumbnail?.imageData;c()&&(S=a(S)??"",D=a(D));const P={portal:U,url:I(Rt(S)),origin:"portal-item"};return b(S,d).then((e=>{const r="cimRef"===g?p$1(e.data):e.data,l=b$1(r,P);if(l&&x(l)){if(D){const t=p(D,N);l.thumbnail=new c$1({url:t});}else O&&(l.thumbnail=new c$1({url:`data:image/png;base64,${O}`}));u.styleUrl?l.styleOrigin=new i({portal:c$2.portal,styleUrl:u.styleUrl,name:y}):u.styleName&&(l.styleOrigin=new i({portal:c$2.portal,styleName:u.styleName,name:y}));}return l}))}function d(t,e,r){const l=w.replaceAll(/\{SymbolName\}/gi,t),m=null!=e.portal?e.portal:C.getDefault();return b(l,r).then((t=>{const e=p$1(t.data);return b$1(e,{portal:m,url:I(Rt(l)),origin:"portal-item"})}))}

export { h as fetchSymbolFromStyle, j as getStyleItemFromStyle, g as resolveWebStyleSymbol };
