import { dH as t, ap as n$1, dI as r, dJ as e, al as P, dK as v$1, dL as g, aB as e$1, dM as u } from './main-CaWYn_3L.js';
import { s } from './sphere-Zhur3rsZ.js';
import { c } from './plane-BeVdBtAe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function v(t$1){return t$1?{origin:t(t$1.origin),vector:t(t$1.vector)}:{origin:n$1(),vector:n$1()}}function h(t,r$1,e$1=v()){return r(e$1.origin,t),e(e$1.vector,r$1,t),e$1}function M(t,r,n){return A(t,r,0,1,n)}function A(r,n,a,u$1,g$1){const{vector:v,origin:m}=r,p=e(c.get(),n,m),b=P(v,p)/v$1(v);return g(g$1,v,e$1(b,a,u$1)),u(g$1,g$1,r.origin)}new s((()=>v()));

export { M, h, v };
