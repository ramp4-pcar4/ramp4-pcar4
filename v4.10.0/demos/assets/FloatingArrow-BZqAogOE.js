import{cT as i}from"./main-CzbArNue.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const c={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"},w={width:12,height:6,strokeWidth:1},$=({floatingLayout:h,key:n,ref:l})=>{const{width:t,height:o,strokeWidth:r}=w,e=t/2,a=h==="vertical",s=`M0,0 H${t} L${t-e},${o} Q${e},${o} ${e},${o} Z`;return i("svg",{"aria-hidden":"true",class:c.arrow,height:t,key:n,ref:l,viewBox:`0 0 ${t} ${t+(a?0:r)}`,width:t+(a?r:0)},r>0&&i("path",{class:c.arrowStroke,d:s,fill:"none","stroke-width":r+1}),i("path",{d:s,stroke:"none"}))};export{$ as F};
