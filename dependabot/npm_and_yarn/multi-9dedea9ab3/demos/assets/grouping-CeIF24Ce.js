import { aC as l } from './main-YSH8Qvd0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function e(e,o){let r;if("string"==typeof e)r=l(e+`-seed(${o})`);else {let t=12;r=e^o;do{r=107*(r>>8^r)+t|0;}while(0!=--t)}return (1+r/(1<<31))/2}function o(t){return Math.floor(e(t,r)*n)}const r=53290320,n=10;

export { e, o };
