import { t, e } from './executionError-ed2c63c0.js';
import { B, G, J, v, V, a3 as l$1, y as Z } from './arcadeUtils-3774d10c.js';
import { f as f$1 } from './WhereClause-2f1c02a5.js';
import './main-5658cd6e.js';
import './preload-helper-a4975f27.js';
import './arcadeTimeUtils-53abd942.js';
import './number-88191db7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function f(n,t,r,i,f,d){if(1===i.length){if(J(i[0]))return l$1(n,i[0],Z(i[1],-1));if(V(i[0]))return l$1(n,i[0].toArray(),Z(i[1],-1))}else if(2===i.length){if(J(i[0]))return l$1(n,i[0],Z(i[1],-1));if(V(i[0]))return l$1(n,i[0].toArray(),Z(i[1],-1));if(G(i[0])){const r=await i[0].load(),e=await l(f$1.create(i[1],r.getFieldsIndex()),d,f);return i[0].calculateStatistic(n,e,Z(i[2],1e3),t.abortSignal)}}else if(3===i.length&&G(i[0])){const r=await i[0].load(),e=await l(f$1.create(i[1],r.getFieldsIndex()),d,f);return i[0].calculateStatistic(n,e,Z(i[2],1e3),t.abortSignal)}return l$1(n,i,-1)}async function l(n,t,r){const e=n.getVariables();if(e.length>0){const a=[];for(let n=0;n<e.length;n++){const i={name:e[n]};a.push(await t.evaluateIdentifier(r,i));}const i={};for(let n=0;n<e.length;n++)i[e[n]]=a[n];return n.parameters=i,n}return n}function d(c){"async"===c.mode&&(c.functions.stdev=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("stdev",t,r,e,n,c)))},c.functions.variance=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("variance",t,r,e,n,c)))},c.functions.average=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("mean",t,r,e,n,c)))},c.functions.mean=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("mean",t,r,e,n,c)))},c.functions.sum=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("sum",t,r,e,n,c)))},c.functions.min=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("min",t,r,e,n,c)))},c.functions.max=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("max",t,r,e,n,c)))},c.functions.count=function(u,o){return c.standardFunctionAsync(u,o,((c,f,l)=>{if(B(l,1,1,u,o),G(l[0]))return l[0].count(c.abortSignal);if(J(l[0])||v(l[0]))return l[0].length;if(V(l[0]))return l[0].length();throw new t(u,e.InvalidParameter,o)}))});}

export { d as registerFunctions };
