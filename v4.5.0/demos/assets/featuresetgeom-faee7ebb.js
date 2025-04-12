import { t, e } from './executionError-ed2c63c0.js';
import { u as be, B, r as re, G, a4 as s } from './arcadeUtils-3774d10c.js';
import { u, f } from './SpatialFilter-1d01f0ad.js';
import { eu as p } from './main-5658cd6e.js';
import { R as R$1, m, S as S$1, x, O, p as p$1, h as h$1 } from './geometryEngineAsync-fc9d31c2.js';
import './preload-helper-a4975f27.js';
import './arcadeTimeUtils-53abd942.js';
import './number-88191db7.js';
import './WhereClause-2f1c02a5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function h(e){return e instanceof p}function S(i,a,c,S){return S(i,a,(async(S,R,v)=>{if(v.length<2)throw new t(i,e.WrongNumberOfParameters,a);if(null===(v=be(v))[0]&&null===v[1])return !1;if(G(v[0])){if(v[1]instanceof p)return new f({parentfeatureset:v[0],relation:c,relationGeom:v[1]});if(null===v[1])return new u({parentfeatureset:v[0]});throw new t(i,e.InvalidParameter,a)}if(h(v[0])){if(h(v[1])){switch(c){case"esriSpatialRelEnvelopeIntersects":return h$1(s(v[0]),s(v[1]));case"esriSpatialRelIntersects":return h$1(v[0],v[1]);case"esriSpatialRelContains":return p$1(v[0],v[1]);case"esriSpatialRelOverlaps":return O(v[0],v[1]);case"esriSpatialRelWithin":return x(v[0],v[1]);case"esriSpatialRelTouches":return S$1(v[0],v[1]);case"esriSpatialRelCrosses":return m(v[0],v[1])}throw new t(i,e.InvalidParameter,a)}if(G(v[1]))return new f({parentfeatureset:v[1],relation:c,relationGeom:v[0]});if(null===v[1])return !1;throw new t(i,e.InvalidParameter,a)}if(null!==v[0])throw new t(i,e.InvalidParameter,a);return G(v[1])?new u({parentfeatureset:v[1]}):!(v[1]instanceof p||null===v[1])&&void 0}))}function R(t$1){"async"===t$1.mode&&(t$1.functions.intersects=function(e,n){return S(e,n,"esriSpatialRelIntersects",t$1.standardFunctionAsync)},t$1.functions.envelopeintersects=function(e,n){return S(e,n,"esriSpatialRelEnvelopeIntersects",t$1.standardFunctionAsync)},t$1.signatures.push({name:"envelopeintersects",min:2,max:2}),t$1.functions.contains=function(e,n){return S(e,n,"esriSpatialRelContains",t$1.standardFunctionAsync)},t$1.functions.overlaps=function(e,n){return S(e,n,"esriSpatialRelOverlaps",t$1.standardFunctionAsync)},t$1.functions.within=function(e,n){return S(e,n,"esriSpatialRelWithin",t$1.standardFunctionAsync)},t$1.functions.touches=function(e,n){return S(e,n,"esriSpatialRelTouches",t$1.standardFunctionAsync)},t$1.functions.crosses=function(e,n){return S(e,n,"esriSpatialRelCrosses",t$1.standardFunctionAsync)},t$1.functions.relate=function(u$1,f){return t$1.standardFunctionAsync(u$1,f,((t$1,p$1,m)=>{if(m=be(m),B(m,3,3,u$1,f),h(m[0])&&h(m[1]))return R$1(m[0],m[1],re(m[2]));if(m[0]instanceof p&&null===m[1])return !1;if(m[1]instanceof p&&null===m[0])return !1;if(G(m[0])&&null===m[1])return new u({parentfeatureset:m[0]});if(G(m[1])&&null===m[0])return new u({parentfeatureset:m[1]});if(G(m[0])&&m[1]instanceof p)return m[0].relate(m[1],re(m[2]));if(G(m[1])&&m[0]instanceof p)return m[1].relate(m[0],re(m[2]));if(null===m[0]&&null===m[1])return !1;throw new t(u$1,e.InvalidParameter,f)}))});}

export { R as registerFunctions };
