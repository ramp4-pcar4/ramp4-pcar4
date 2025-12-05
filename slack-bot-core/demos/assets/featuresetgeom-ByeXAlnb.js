import { T as Me, a as ae, d as de, B, b as a, r } from './arcadeUtils-N1JQn35k.js';
import { s } from './TimeOnly-C2mPYK6f.js';
import { u, f } from './SpatialFilter-DDqQb3hD.js';
import { eN as n } from './main-B92PJIAd.js';
import { relate as R$1, crosses as m, touches as S$1, within as x, overlaps as O, contains as p, intersects as h } from './geometryEngineAsync-CgO237lg.js';
import './preload-helper-dJJaZANz.js';
import './ImmutableArray-DC4Q0AOY.js';
import './number-CEqwDYiQ.js';
import './WhereClause-DDkJJSAA.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function y(e){return e instanceof n}function S(i,a$1,c,S){return S(i,a$1,(async(S,R,v)=>{if(v.length<2)throw new a(i,r.WrongNumberOfParameters,a$1);if(null===(v=Me(v))[0]&&null===v[1])return !1;if(B(v[0])){if(v[1]instanceof n)return new f({parentfeatureset:v[0],relation:c,relationGeom:v[1]});if(null===v[1])return new u({parentfeatureset:v[0]});throw new a(i,r.InvalidParameter,a$1)}if(y(v[0])){if(y(v[1])){switch(c){case"esriSpatialRelEnvelopeIntersects":return h(s(v[0]),s(v[1]));case"esriSpatialRelIntersects":return h(v[0],v[1]);case"esriSpatialRelContains":return p(v[0],v[1]);case"esriSpatialRelOverlaps":return O(v[0],v[1]);case"esriSpatialRelWithin":return x(v[0],v[1]);case"esriSpatialRelTouches":return S$1(v[0],v[1]);case"esriSpatialRelCrosses":return m(v[0],v[1])}throw new a(i,r.InvalidParameter,a$1)}if(B(v[1]))return new f({parentfeatureset:v[1],relation:c,relationGeom:v[0]});if(null===v[1])return !1;throw new a(i,r.InvalidParameter,a$1)}if(null!==v[0])throw new a(i,r.InvalidParameter,a$1);return B(v[1])?new u({parentfeatureset:v[1]}):!(v[1]instanceof n||null===v[1])&&void 0}))}function R(t){"async"===t.mode&&(t.functions.intersects=function(e,n){return S(e,n,"esriSpatialRelIntersects",t.standardFunctionAsync)},t.functions.envelopeintersects=function(e,n){return S(e,n,"esriSpatialRelEnvelopeIntersects",t.standardFunctionAsync)},t.signatures.push({name:"envelopeintersects",min:2,max:2}),t.functions.contains=function(e,n){return S(e,n,"esriSpatialRelContains",t.standardFunctionAsync)},t.functions.overlaps=function(e,n){return S(e,n,"esriSpatialRelOverlaps",t.standardFunctionAsync)},t.functions.within=function(e,n){return S(e,n,"esriSpatialRelWithin",t.standardFunctionAsync)},t.functions.touches=function(e,n){return S(e,n,"esriSpatialRelTouches",t.standardFunctionAsync)},t.functions.crosses=function(e,n){return S(e,n,"esriSpatialRelCrosses",t.standardFunctionAsync)},t.functions.relate=function(u$1,f){return t.standardFunctionAsync(u$1,f,((t,p,m)=>{if(m=Me(m),ae(m,3,3,u$1,f),y(m[0])&&y(m[1]))return R$1(m[0],m[1],de(m[2]));if(m[0]instanceof n&&null===m[1])return !1;if(m[1]instanceof n&&null===m[0])return !1;if(B(m[0])&&null===m[1])return new u({parentfeatureset:m[0]});if(B(m[1])&&null===m[0])return new u({parentfeatureset:m[1]});if(B(m[0])&&m[1]instanceof n)return m[0].relate(m[1],de(m[2]));if(B(m[1])&&m[0]instanceof n)return m[1].relate(m[0],de(m[2]));if(null===m[0]&&null===m[1])return !1;throw new a(u$1,r.InvalidParameter,f)}))});}

export { R as registerFunctions };
