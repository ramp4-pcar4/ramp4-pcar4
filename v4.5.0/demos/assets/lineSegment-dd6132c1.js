import { dh as t, aW as n$1, di as r, dj as e, aS as P, dk as v$1, dl as g$1, az as a, dm as u } from './main-5658cd6e.js';
import { s, c } from './sphere-de757ffd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function v(t$1){return t$1?{origin:t(t$1.origin),vector:t(t$1.vector)}:{origin:n$1(),vector:n$1()}}function b(t,r$1,e$1=v()){return r(e$1.origin,t),e(e$1.vector,r$1,t),e$1}function j$1(t,r,n){return A(t,r,0,1,n)}function A(r,n,u$1,a$1,g){const{vector:v,origin:p}=r,h=e(c.get(),n,p),m=P(v,h)/v$1(v);return g$1(g,v,a(m,u$1,a$1)),u(g,g,r.origin)}new s((()=>v()));

export { b, j$1 as j, v };
