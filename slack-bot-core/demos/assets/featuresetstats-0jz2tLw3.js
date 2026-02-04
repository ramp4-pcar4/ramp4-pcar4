import { m as m$1 } from './TimeOnly-C2mPYK6f.js';
import { a as ae, B, U, G, Q, b as a, r, P as l, v as Y, q as Be } from './arcadeUtils-N1JQn35k.js';
import { x as x$1, r as r$1 } from './WhereClause-DDkJJSAA.js';
import './main-B92PJIAd.js';
import './preload-helper-dJJaZANz.js';
import './ImmutableArray-DC4Q0AOY.js';
import './number-CEqwDYiQ.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function m(n,t,e,a,o,u){if(1===a.length){if(U(a[0]))return l(n,a[0],Y(a[1],-1));if(Q(a[0]))return l(n,a[0].toArray(),Y(a[1],-1))}else if(2===a.length){if(U(a[0]))return l(n,a[0],Y(a[1],-1));if(Q(a[0]))return l(n,a[0].toArray(),Y(a[1],-1));if(B(a[0])){const e=await a[0].load(),r=await A(x$1.create(a[1],e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC),u,o);return g(o,await a[0].calculateStatistic(n,r,Y(a[2],1e3),t.abortSignal))}}else if(3===a.length&&B(a[0])){const e=await a[0].load(),r=await A(x$1.create(a[1],e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC),u,o);return g(o,await a[0].calculateStatistic(n,r,Y(a[2],1e3),t.abortSignal))}return l(n,a,-1)}function g(t,e){return e instanceof r$1?m$1.fromReaderAsTimeStampOffset(e.toStorageFormat()):e instanceof Date?m$1.dateJSAndZoneToArcadeDate(e,Be(t)):e}async function A(n,t,e){const a=n.getVariables();if(a.length>0){const r=[];for(let n=0;n<a.length;n++){const i={name:a[n]};r.push(await t.evaluateIdentifier(e,i));}const i={};for(let n=0;n<a.length;n++)i[a[n]]=r[n];return n.parameters=i,n}return n}function y(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("stdev",e,a,r,t,n)))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("variance",e,a,r,t,n)))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("mean",e,a,r,t,n)))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("mean",e,a,r,t,n)))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("sum",e,a,r,t,n)))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("min",e,a,r,t,n)))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("max",e,a,r,t,n)))},n.functions.count=function(c,u){return n.standardFunctionAsync(c,u,((n,f,d)=>{if(ae(d,1,1,c,u),B(d[0]))return d[0].count(n.abortSignal);if(U(d[0])||G(d[0]))return d[0].length;if(Q(d[0]))return d[0].length();throw new a(c,r.InvalidParameter,u)}))});}

export { y as registerFunctions };
