/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const t=256/360,r=1/Math.LN2;function u(n,t){return (n%=t)>=0?n:n+t}function c(n){return u(n*t,256)}function e(n){return Math.log(n)*r}

export { c, e };
