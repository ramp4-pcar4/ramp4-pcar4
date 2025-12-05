/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function t(n){const t=new Float32Array(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function r(n,t,r){const e=new Float32Array(3);return e[0]=n,e[1]=t,e[2]=r,e}function e(n,t){return new Float32Array(n,t,3)}function o(){return n()}function u(){return r(1,1,1)}function c(){return r(1,0,0)}function i(){return r(0,1,0)}function a(){return r(0,0,1)}const f=o(),l=u(),s=c(),_=i(),y=a();Object.freeze(Object.defineProperty({__proto__:null,ONES:l,UNIT_X:s,UNIT_Y:_,UNIT_Z:y,ZEROS:f,clone:t,create:n,createView:e,fromValues:r,ones:u,unitX:c,unitY:i,unitZ:a,zeros:o},Symbol.toStringTag,{value:"Module"}));

export { n, r, t };
