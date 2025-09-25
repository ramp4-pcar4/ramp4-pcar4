import { s, c, Q, I, e as u, R as Rt, g as b, h as p, j as b$1, x, k as c$2, m as i, w, n as d$1 } from './main-BpBTVFw9.js';
import { c as c$1, a } from './devEnvironmentUtils-CAuYLvCt.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function g(t,e,r,o){const n=t.name;return null==n?Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?d(n,e,o):c(t,e,o).then((t=>h(t,n,e,r,d$1,o)))}function j(t,e){return e.items.find((e=>e.name===t))}function h(u$1,y,c,g,h,d){const U=null!=c?.portal?c.portal:Q.getDefault(),N={portal:U,url:I(u$1.baseUrl),origin:"portal-item"},w=j(y,u$1.data);if(!w){const t=`The symbol name '${y}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:y}))}let S=u(h(w,g),N),D=w.thumbnail?.href??null;const O=w.thumbnail?.imageData;c$1()&&(S=a(S)??"",D=a(D));const P={portal:U,url:I(Rt(S)),origin:"portal-item"};return b(S,d).then((e=>{const r="cimRef"===g?p(e.data):e.data,l=b$1(r,P);if(l&&x(l)){if(D){const t=u(D,N);l.thumbnail=new c$2({url:t});}else O&&(l.thumbnail=new c$2({url:`data:image/png;base64,${O}`}));u$1.styleUrl?l.styleOrigin=new i({portal:c.portal,styleUrl:u$1.styleUrl,name:y}):u$1.styleName&&(l.styleOrigin=new i({portal:c.portal,styleName:u$1.styleName,name:y}));}return l}))}function d(t,e,r){const l=w.replaceAll(/\{SymbolName\}/gi,t),m=null!=e.portal?e.portal:Q.getDefault();return b(l,r).then((t=>{const e=p(t.data);return b$1(e,{portal:m,url:I(Rt(l)),origin:"portal-item"})}))}

export { h as fetchSymbolFromStyle, j as getStyleItemFromStyle, g as resolveWebStyleSymbol };
