import { b9 as t, b2 as n$1, ba as r, bb as e, a_ as P, bc as v$1, bd as g, ap as e$1, be as u } from './main-8822140d.js';
import { s } from './ObjectStack-73c6de31.js';
import { c } from './plane-56e02ad5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function v(t$1){return t$1?{origin:t(t$1.origin),vector:t(t$1.vector)}:{origin:n$1(),vector:n$1()}}function b(t,r$1,e$1=v()){return r(e$1.origin,t),e(e$1.vector,r$1,t),e$1}function j(t,r,n){return A(t,r,0,1,n)}function A(r,n,a,u$1,g$1){const{vector:v,origin:p}=r,m=e(c.get(),n,p),h=P(v,m)/v$1(v);return g(g$1,v,e$1(h,a,u$1)),u(g$1,g$1,r.origin)}new s((()=>v()));

export { b, j, v };
