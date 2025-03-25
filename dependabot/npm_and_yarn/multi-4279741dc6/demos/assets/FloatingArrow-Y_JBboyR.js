import{h as i}from"./themeUtils-C9SXXy11.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const h={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"},w={width:12,height:6,strokeWidth:1},$=({floatingLayout:n,key:c,ref:l})=>{const{width:t,height:r,strokeWidth:o}=w,e=t/2,a=n==="vertical",s=`M0,0 H${t} L${t-e},${r} Q${e},${r} ${e},${r} Z`;return i("svg",{"aria-hidden":"true",class:h.arrow,height:t,key:c,ref:l,viewBox:`0 0 ${t} ${t+(a?0:o)}`,width:t+(a?o:0)},i("path",{class:h.arrowStroke,d:s,fill:"none","stroke-width":o+1}),i("path",{d:s,stroke:"none"}))};export{$ as F};
