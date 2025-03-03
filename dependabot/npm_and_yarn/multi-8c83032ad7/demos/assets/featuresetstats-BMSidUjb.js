import { m as m$1 } from './TimeOnly-Bh5cDEFP.js';
import { a as ae, B, U, G, Q, b as a, r, $ as l, P, A as He } from './arcadeUtils-DJbo6W3H.js';
import { O as O$1, r as r$1 } from './WhereClause-BFRDKeA-.js';
import './main-CaWYn_3L.js';
import './preload-helper-dJJaZANz.js';
import './ImmutableArray-B20xHd08.js';
import './number-9weR2Gi2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function m(n,t,e,a){if(1===e.length){if(U(e[0]))return l(n,e[0],P(e[1],-1));if(Q(e[0]))return l(n,e[0].toArray(),P(e[1],-1))}else if(2===e.length){if(U(e[0]))return l(n,e[0],P(e[1],-1));if(Q(e[0]))return l(n,e[0].toArray(),P(e[1],-1));if(B(e[0])){const r=await e[0].load(),i=await y(O$1.create(e[1],r.getFieldsIndex(),r.dateFieldsTimeZoneDefaultUTC),a,t);return g(t,await e[0].calculateStatistic(n,i,P(e[2],1e3),t.abortSignal))}}else if(3===e.length&&B(e[0])){const r=await e[0].load(),i=await y(O$1.create(e[1],r.getFieldsIndex(),r.dateFieldsTimeZoneDefaultUTC),a,t);return g(t,await e[0].calculateStatistic(n,i,P(e[2],1e3),t.abortSignal))}return l(n,e,-1)}function g(t,e){return e instanceof r$1?m$1.fromReaderAsTimeStampOffset(e.toStorageFormat()):e instanceof Date?m$1.dateJSAndZoneToArcadeDate(e,He(t)):e}async function y(n,t,e){const a=n.getVariables();if(a.length>0){const r=[];for(let n=0;n<a.length;n++){const i={name:a[n]};r.push(await t.evaluateIdentifier(e,i));}const i={};for(let n=0;n<a.length;n++)i[a[n]]=r[n];return n.parameters=i,n}return n}function A(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("stdev",t,r,n)))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("variance",t,r,n)))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("mean",t,r,n)))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("mean",t,r,n)))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("sum",t,r,n)))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("min",t,r,n)))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>m("max",t,r,n)))},n.functions.count=function(c,u){return n.standardFunctionAsync(c,u,(async(n,f,d)=>{if(ae(d,1,1,c,u),B(d[0]))return d[0].count(n.abortSignal);if(U(d[0])||G(d[0]))return d[0].length;if(Q(d[0]))return d[0].length();throw new a(c,r.InvalidParameter,u)}))});}

export { A as registerFunctions };
