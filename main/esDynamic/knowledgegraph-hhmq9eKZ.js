import{C as b,cX as w,cY as S,Y as J,M as I,cL as W,cZ as k,a6 as K,c$ as M,d0 as j}from"./main-C3PVbFgd.js";import{o as T,V as C,j as G,X as Q,J as U,c as P,K as V,Z as q,a0 as X,a1 as Y,a2 as Z,U as D}from"./arcade-DE1hnYcB.js";import{a as l,r as p}from"./unitConversion-BR9nIwpo.js";import{l as L}from"./portalUtils--hGh76-w.js";import{k as $,K as z,O as B}from"./projection-q5gROb6j.js";import E from"./PortalItem-heWSwjtK.js";import{m as H,n as O}from"./project-CWy3BXfz.js";import{p as _,c as ee,t as re,a as ae,b as te}from"./Relationship-DGI13NYi.js";let f=null;async function ie(e){const r=J.geometryServiceUrl??"";if(!r){$()||await z();for(const a of e)a.container[a.indexer]=B(a.container[a.indexer],I.WGS84);return}const t=e.map(a=>a.container[a.indexer]),n=new H({geometries:t,outSpatialReference:I.WGS84}),s=await O(r,n);for(let a=0;a<s.length;a++){const i=e[a];i.container[i.indexer]=s[a]}}async function F(e,r){const t=new E({portal:e,id:r});return await t.load(),f===null&&(f=await import("./knowledgeGraphService-CRJUbNVG.js").then(n=>n.k)),await f.fetchKnowledgeGraph(t.url)}function R(e,r,t,n,s){if(e===null)return null;if(w(e)||W(e))return e;if(q(e)||q(e))return e.toJSDate();if(X(e))return e.toStorageFormat();if(Y(e))return e.toStorageString();if(Z(e)){const a={};for(const i of e.keys())a[i]=R(e.field(i),r,t,n,s),a[i]instanceof k&&s.push({container:a,indexer:i});return a}if(S(e)){const a=e.map(i=>R(i,r,t,n,s));for(let i=0;i<a.length;i++)a[i]instanceof k&&s.push({container:a,indexer:i});return a}return D(e)?e.spatialReference.isWGS84?e:e.spatialReference.isWebMercator&&r?K(e):e:void 0}function ne(e,r){if(!e)return e;if(e.spatialReference.isWGS84&&r.spatialReference.isWebMercator)return j(e);if(e.spatialReference.equals(r.spatialReference))return e;throw new l(r,p.WrongSpatialReference,null)}function v(e,r){if(!e)return null;const t={};for(const n in e)t[n]=m(e[n],r);return t}function m(e,r){return e===null?null:S(e)?e.map(t=>m(t,r)):e instanceof ee?{graphTypeName:e.typeName,id:e.id,graphType:"entity",properties:v(e.properties,r)}:e instanceof re?{graphType:"object",properties:v(e.properties,r)}:e instanceof ae?{graphTypeName:e.typeName,id:e.id,graphType:"relationship",originId:e.originId??null,destinationId:e.destinationId??null,properties:v(e.properties,r)}:e instanceof te?{graphType:"path",path:e.path?e.path.map(t=>m(t,r)):null}:D(e)?ne(e,r):w(e)||W(e)||M(e)?e:null}function oe(e){e.mode==="async"&&(e.functions.knowledgegraphbyportalitem=function(r,t){return e.standardFunctionAsync(r,t,(n,s,a)=>{if(T(a,2,2,r,t),a[0]===null)throw new l(r,p.PortalRequired,t);if(a[0]instanceof C){const d=G(a[1]);let u;return u=r.services?.portal?r.services.portal:b.getDefault(),F(L(a[0],u),d)}if(w(a[0])===!1)throw new l(r,p.InvalidParameter,t);const i=G(a[0]);return F(r.services?.portal??b.getDefault(),i)})},e.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),e.functions.querygraph=function(r,t){return e.standardFunctionAsync(r,t,async(n,s,a)=>{T(a,2,4,r,t);const i=a[0];if(!Q(i))throw new l(r,p.InvalidParameter,t);const d=a[1];if(!w(d))throw new l(r,p.InvalidParameter,t);f===null&&(f=await import("./knowledgeGraphService-CRJUbNVG.js").then(o=>o.k));let u=null;const h=U(a[2],null);if(!(h instanceof P||h===null))throw new l(r,p.InvalidParameter,t);if(h){let o=[];u=R(h,!0,!1,r,o),o=o.filter(c=>!c.container[c.indexer].spatialReference.isWGS84),o.length>0&&await ie(o)}const x=new _({openCypherQuery:d,bindParameters:u});(i?.serviceDefinition?.currentVersion??11.3)>11.2&&(x.outputSpatialReference=r.spatialReference);const N=(await f.executeQueryStreaming(i,x)).resultRowsStream.getReader(),y=[];try{for(;;){const{done:o,value:c}=await N.read();if(o)break;if(S(c))for(const g of c)y.push(m(g,r));else{const g=[];for(const A of c)g.push(m(c[A],r));y.push(g)}}}catch(o){throw o}return P.convertJsonToArcade(y,V(r),!1,!0)})},e.signatures.push({name:"querygraph",min:2,max:4}))}export{oe as registerFunctions};
