import{jZ as l,ad as n,bl as c}from"./main-Cv8ITM2j.js";import"./Transformation2D---fVTkp5.js";import"./ProjectionTransformation-O8aN6-Ef.js";import"./jsonConverter-BUTq-DII.js";import{fromGeometry as p,getSpatialReference as m}from"./apiConverter-tk90BA9t.js";function s(a,i={}){const{unit:t}=i;let e=p(a).calculateArea2D();if(e&&t){const r=m(a);if(r.isGeographic)throw new Error("Unable to convert from an angular area unit to a linear area unit.");const o=l(r);o!==t&&(o?e=n(e,o,t):(e=Math.sqrt(e),e*=c(r),e**=2,e=n(e,"square-meters",t)))}return e}const u=!0,j=Object.freeze(Object.defineProperty({__proto__:null,execute:s,supportsCurves:u},Symbol.toStringTag,{value:"Module"})),v=Object.freeze(Object.defineProperty({__proto__:null,execute:s,supportsCurves:u},Symbol.toStringTag,{value:"Module"}));export{v as a,j as i};
