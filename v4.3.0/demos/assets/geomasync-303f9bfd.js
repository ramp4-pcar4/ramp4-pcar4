import{ev as w,w as x,bj as b,bh as O,bi as N,bk as W,v as E,ew as en,bD as rn}from"./main-46bfe858.js";import{u as s,B as h,U as B,r as j,J as A,V as F,d as J,w as P,G as Z,x as S,y as d,S as q,E as y,H as k,I as L,l as R,K as an,M as un,O as ln,P as H,b as z,Q as T,W as cn,X as M}from"./arcadeUtils-b6093c1c.js";import{A as fn,h as on,S as sn,m as dn,x as wn,p as hn,O as mn,g as pn,R as yn,D as vn,b as gn,E as Pn,k as In,y as An,w as Fn,W as K,K as V,F as C,M as U,d as Rn,C as G,U as Q,B as bn,L as Nn,P as xn,v as Sn,H as X,N as Y,J as On,j as Jn}from"./geometryEngineAsync-24b47bcc.js";import{t as u,e as l}from"./executionError-c1d13a98.js";import{t as _,s as $}from"./portalUtils-9d722961.js";import"./preload-helper-388ac9d5.js";import"./arcadeTimeUtils-007efe86.js";import"./number-4f037298.js";function nn(r){return en.indexOf("4.")===0?N.fromExtent(r):new N({spatialReference:r.spatialReference,rings:[[[r.xmin,r.ymin],[r.xmin,r.ymax],[r.xmax,r.ymax],[r.xmax,r.ymin],[r.xmin,r.ymin]]]})}function I(r,t,e){if(h(r,2,2,t,e),!(r[0]instanceof w&&r[1]instanceof w)){if(!(r[0]instanceof w&&r[1]===null)){if(!(r[1]instanceof w&&r[0]===null)){if(r[0]!==null||r[1]!==null)throw new u(t,l.InvalidParameter,e)}}}}async function tn(r,t){if(r.type!=="polygon"&&r.type!=="polyline"&&r.type!=="extent")return 0;let e=1;(r.spatialReference.vcsWkid||r.spatialReference.latestVcsWkid)&&(e=cn(r.spatialReference)/rn(r.spatialReference));let c=0;if(r.type==="polyline")for(const n of r.paths)for(let i=1;i<n.length;i++)c+=M(n[i],n[i-1],e);else if(r.type==="polygon")for(const n of r.rings){for(let i=1;i<n.length;i++)c+=M(n[i],n[i-1],e);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=M(n[0],n[n.length-1],e))}else r.type==="extent"&&(c+=2*M([r.xmin,r.ymin,0],[r.xmax,r.ymin,0],e),c+=2*M([r.xmin,r.ymin,0],[r.xmin,r.ymax,0],e),c*=2,c+=4*Math.abs(d(r.zmax,0)*e-d(r.zmin,0)*e));const o=new b({hasZ:!1,hasM:!1,spatialReference:r.spatialReference,paths:[[0,0],[0,c]]});return C(o,t)}function Tn(r){r.mode==="async"&&(r.functions.disjoint=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]===null||n[1]===null||fn(n[0],n[1])))},r.functions.intersects=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]!==null&&on(n[0],n[1])))},r.functions.touches=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]!==null&&sn(n[0],n[1])))},r.functions.crosses=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]!==null&&dn(n[0],n[1])))},r.functions.within=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]!==null&&wn(n[0],n[1])))},r.functions.contains=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]!==null&&hn(n[0],n[1])))},r.functions.overlaps=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]!==null&&mn(n[0],n[1])))},r.functions.equals=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(h(n,2,2,t,e),n[0]===n[1]||(n[0]instanceof w&&n[1]instanceof w?pn(n[0],n[1]):!(!B(n[0])||!B(n[1]))&&n[0].equals(n[1]))))},r.functions.relate=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,3,3,t,e),n[0]instanceof w&&n[1]instanceof w)return yn(n[0],n[1],j(n[2]));if(n[0]instanceof w&&n[1]===null||n[1]instanceof w&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new u(t,l.InvalidParameter,e)})},r.functions.intersection=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]===null||n[1]===null?null:vn(n[0],n[1])))},r.functions.union=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{const i=[];if((n=s(n)).length===0)throw new u(t,l.WrongNumberOfParameters,e);if(n.length===1)if(A(n[0])){const a=s(n[0]);for(let f=0;f<a.length;f++)if(a[f]!==null){if(!(a[f]instanceof w))throw new u(t,l.InvalidParameter,e);i.push(a[f])}}else{if(!F(n[0])){if(n[0]instanceof w)return J(P(n[0]),t.spatialReference);if(n[0]===null)return null;throw new u(t,l.InvalidParameter,e)}{const a=s(n[0].toArray());for(let f=0;f<a.length;f++)if(a[f]!==null){if(!(a[f]instanceof w))throw new u(t,l.InvalidParameter,e);i.push(a[f])}}}else for(let a=0;a<n.length;a++)if(n[a]!==null){if(!(n[a]instanceof w))throw new u(t,l.InvalidParameter,e);i.push(n[a])}return i.length===0?null:gn(i)})},r.functions.difference=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]!==null&&n[1]===null?P(n[0]):n[0]===null?null:Pn(n[0],n[1])))},r.functions.symmetricdifference=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=s(n),t,e),n[0]===null&&n[1]===null?null:n[0]===null?P(n[1]):n[1]===null?P(n[0]):In(n[0],n[1])))},r.functions.clip=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,2,t,e),!(n[1]instanceof x)&&n[1]!==null)throw new u(t,l.InvalidParameter,e);if(n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return n[1]===null?null:An(n[0],n[1])})},r.functions.cut=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,2,t,e),!(n[1]instanceof b)&&n[1]!==null)throw new u(t,l.InvalidParameter,e);if(n[0]===null)return[];if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return n[1]===null?[P(n[0])]:Fn(n[0],n[1])})},r.functions.area=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=s(n))[0]===null)return 0;if(Z(n[0])){const i=await n[0].sumArea(S(d(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new u(t,l.Cancelled,e);return i}if(A(n[0])||F(n[0])){const i=q(n[0],t.spatialReference);return i===null?0:K(i,S(d(n[1],-1)))}if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return K(n[0],S(d(n[1],-1)))})},r.functions.areageodetic=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=s(n))[0]===null)return 0;if(Z(n[0])){const i=await n[0].sumArea(S(d(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new u(t,l.Cancelled,e);return i}if(A(n[0])||F(n[0])){const i=q(n[0],t.spatialReference);return i===null?0:V(i,S(d(n[1],-1)))}if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return V(n[0],S(d(n[1],-1)))})},r.functions.length=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=s(n))[0]===null)return 0;if(Z(n[0])){const i=await n[0].sumLength(y(d(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new u(t,l.Cancelled,e);return i}if(A(n[0])||F(n[0])){const i=k(n[0],t.spatialReference);return i===null?0:C(i,y(d(n[1],-1)))}if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return C(n[0],y(d(n[1],-1)))})},r.functions.length3d=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(h(n,1,2,t,e),(n=s(n))[0]===null)return 0;if(A(n[0])||F(n[0])){const i=k(n[0],t.spatialReference);return i===null?0:i.hasZ===!0?tn(i,y(d(n[1],-1))):C(i,y(d(n[1],-1)))}if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return n[0].hasZ===!0?tn(n[0],y(d(n[1],-1))):C(n[0],y(d(n[1],-1)))})},r.functions.lengthgeodetic=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=s(n))[0]===null)return 0;if(Z(n[0])){const i=await n[0].sumLength(y(d(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new u(t,l.Cancelled,e);return i}if(A(n[0])||F(n[0])){const i=k(n[0],t.spatialReference);return i===null?0:U(i,y(d(n[1],-1)))}if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return U(n[0],y(d(n[1],-1)))})},r.functions.distance=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{n=s(n),h(n,2,3,t,e);let i=n[0];(A(n[0])||F(n[0]))&&(i=L(n[0],t.spatialReference));let a=n[1];if((A(n[1])||F(n[1]))&&(a=L(n[1],t.spatialReference)),!(i instanceof w))throw new u(t,l.InvalidParameter,e);if(!(a instanceof w))throw new u(t,l.InvalidParameter,e);return Rn(i,a,y(d(n[2],-1)))})},r.functions.distancegeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{n=s(n),h(n,2,3,t,e);const i=n[0],a=n[1];if(!(i instanceof O))throw new u(t,l.InvalidParameter,e);if(!(a instanceof O))throw new u(t,l.InvalidParameter,e);const f=new b({paths:[],spatialReference:i.spatialReference});return f.addPath([i,a]),U(f,y(d(n[2],-1)))})},r.functions.densify=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);const i=R(n[1]);if(isNaN(i))throw new u(t,l.InvalidParameter,e);if(i<=0)throw new u(t,l.InvalidParameter,e);return n[0]instanceof N||n[0]instanceof b?G(n[0],i,y(d(n[2],-1))):n[0]instanceof x?G(nn(n[0]),i,y(d(n[2],-1))):n[0]})},r.functions.densifygeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);const i=R(n[1]);if(isNaN(i))throw new u(t,l.InvalidParameter,e);if(i<=0)throw new u(t,l.InvalidParameter,e);return n[0]instanceof N||n[0]instanceof b?Q(n[0],i,y(d(n[2],-1))):n[0]instanceof x?Q(nn(n[0]),i,y(d(n[2],-1))):n[0]})},r.functions.generalize=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,4,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);const i=R(n[1]);if(isNaN(i))throw new u(t,l.InvalidParameter,e);return bn(n[0],i,an(d(n[2],!0)),y(d(n[3],-1)))})},r.functions.buffer=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);const i=R(n[1]);if(isNaN(i))throw new u(t,l.InvalidParameter,e);return i===0?P(n[0]):Nn(n[0],i,y(d(n[2],-1)))})},r.functions.buffergeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);const i=R(n[1]);if(isNaN(i))throw new u(t,l.InvalidParameter,e);return i===0?P(n[0]):xn(n[0],i,y(d(n[2],-1)))})},r.functions.offset=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,2,6,t,e),n[0]===null)return null;if(!(n[0]instanceof N||n[0]instanceof b))throw new u(t,l.InvalidParameter,e);const i=R(n[1]);if(isNaN(i))throw new u(t,l.InvalidParameter,e);const a=R(d(n[4],10));if(isNaN(a))throw new u(t,l.InvalidParameter,e);const f=R(d(n[5],0));if(isNaN(f))throw new u(t,l.InvalidParameter,e);return Sn(n[0],i,y(d(n[2],-1)),j(d(n[3],"round")).toLowerCase(),a,f)})},r.functions.rotate=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{n=s(n),h(n,2,3,t,e);let i=n[0];if(i===null)return null;if(!(i instanceof w))throw new u(t,l.InvalidParameter,e);i instanceof x&&(i=N.fromExtent(i));const a=R(n[1]);if(isNaN(a))throw new u(t,l.InvalidParameter,e);const f=d(n[2],null);if(f===null)return X(i,a);if(f instanceof O)return X(i,a,f);throw new u(t,l.InvalidParameter,e)})},r.functions.centroid=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,1,1,t,e),n[0]===null)return null;let i=n[0];if((A(n[0])||F(n[0]))&&(i=L(n[0],t.spatialReference)),i===null)return null;if(!(i instanceof w))throw new u(t,l.InvalidParameter,e);return i instanceof O?J(P(n[0]),t.spatialReference):i instanceof N?i.centroid:i instanceof b?un(i):i instanceof W?ln(i):i instanceof x?i.center:null})},r.functions.multiparttosinglepart=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{n=s(n),h(n,1,1,t,e);const i=[];if(n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);if(n[0]instanceof O)return[J(P(n[0]),t.spatialReference)];if(n[0]instanceof x)return[J(P(n[0]),t.spatialReference)];const a=await Y(n[0]);if(a instanceof N){const f=[],p=[];for(let m=0;m<a.rings.length;m++)if(a.isClockwise(a.rings[m])){const v=E({rings:[a.rings[m]],hasZ:a.hasZ===!0,hazM:a.hasM===!0,spatialReference:a.spatialReference.toJSON()});f.push(v)}else p.push({ring:a.rings[m],pt:a.getPoint(m,0)});for(let m=0;m<p.length;m++)for(let v=0;v<f.length;v++)if(f[v].contains(p[m].pt)){f[v].addRing(p[m].ring);break}return f}if(a instanceof b){const f=[];for(let p=0;p<a.paths.length;p++){const m=E({paths:[a.paths[p]],hasZ:a.hasZ===!0,hazM:a.hasM===!0,spatialReference:a.spatialReference.toJSON()});f.push(m)}return f}if(n[0]instanceof W){const f=J(P(n[0]),t.spatialReference);for(let p=0;p<f.points.length;p++)i.push(f.getPoint(p));return i}return null})},r.functions.issimple=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,1,1,t,e),n[0]===null)return!0;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return On(n[0])})},r.functions.simplify=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return Y(n[0])})},r.functions.convexhull=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=s(n),h(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof w))throw new u(t,l.InvalidParameter,e);return Jn(n[0])})},r.functions.getuser=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{h(n,0,2,t,e);let i=d(n[1],""),a=i===!0;if(i=i===!0||i===!1?"":j(i),n.length===0||n[0]instanceof H){let p=null;t.services&&t.services.portal&&(p=t.services.portal),n.length>0&&(p=_(n[0],p));const m=await $(p,i,a);if(m){const v=JSON.parse(JSON.stringify(m));for(const g of["lastLogin","created","modified"])v[g]!==void 0&&v[g]!==null&&(v[g]=new Date(v[g]));return z.convertObjectToArcadeDictionary(v,T(t))}return null}let f=null;if(Z(n[0])&&(f=n[0]),f){if(a=!1,i)return null;await f.load();const p=await f.getOwningSystemUrl();if(!p){if(!i){const g=await f.getIdentityUser();return g?z.convertObjectToArcadeDictionary({username:g},T(t)):null}return null}let m=null;t.services&&t.services.portal&&(m=t.services.portal),m=_(new H(p),m);const v=await $(m,i,a);if(v){const g=JSON.parse(JSON.stringify(v));for(const D of["lastLogin","created","modified"])g[D]!==void 0&&g[D]!==null&&(g[D]=new Date(g[D]));return z.convertObjectToArcadeDictionary(g,T(t))}return null}throw new u(t,l.InvalidParameter,e)})})}export{Tn as registerFunctions};
