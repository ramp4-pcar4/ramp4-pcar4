import { J as p, K as c$1, c as s, r as r$1, B as b, L, M as c, N as b$1, O as Ct, P as j, Q as d$1, R as y, S as x, W as p$1, X as a$1, Y as U$1 } from './main-5658cd6e.js';
import { c as c$2, a } from './devEnvironmentUtils-d73295e7.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function h(t,e,r,n){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?U(t,e,n):p(t,e,n).then((o=>d(c$1(o),t.name,e,r,n))):Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function d(l,f,g,h,d){const U=l.data,N=g&&r$1(g.portal)?g.portal:b.getDefault(),w={portal:N,url:L(l.baseUrl),origin:"portal-item"},S=U.items.find((t=>t.name===f));if(!S){const t=`The symbol name '${f}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:f}))}let D=c(b$1(S,h),w),O=S.thumbnail?.href??null;const P=S.thumbnail&&S.thumbnail.imageData;c$2()&&(D=a(D)??"",O=a(O));const E={portal:N,url:L(Ct(D)),origin:"portal-item"};return j(D,d).then((e=>{const r="cimRef"===h?d$1(e.data):e.data,o=y(r,E);if(o&&x(o)){if(O){const t=c(O,w);o.thumbnail=new p$1({url:t});}else P&&(o.thumbnail=new p$1({url:`data:image/png;base64,${P}`}));l.styleUrl?o.styleOrigin=new a$1({portal:g.portal,styleUrl:l.styleUrl,name:f}):l.styleName&&(o.styleOrigin=new a$1({portal:g.portal,styleName:l.styleName,name:f}));}return o}))}function U(t,e,r){const o=U$1.replace(/\{SymbolName\}/gi,t.name),l=r$1(e.portal)?e.portal:b.getDefault();return j(o,r).then((t=>{const e=d$1(t.data);return y(e,{portal:l,url:L(Ct(o)),origin:"portal-item"})}))}

export { d as fetchSymbolFromStyle, h as resolveWebStyleSymbol };
