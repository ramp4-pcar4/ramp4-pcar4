import{e as k,cD as j,cj as J,ck as M,cl as Q,aY as I,S as z,f0 as T,f4 as B,f5 as C}from"./main-DCIX61zy.js";import{t as E,N as W}from"./arcadeUtils-BUv04XWE.js";import{i as b,a as l,r as p,d as P,P as w,$ as K,Y as U,E as S,B as V,z as G,k as D,t as Y,g as Z,T as _,Z as N,_ as $}from"./languageUtils-Bxl5LDSi.js";import{l as H}from"./portalUtils-BNrT8D9R.js";import{p as L,n as O}from"./project-NnYH-8_O.js";import{s as X,m as ee,t as re,p as ae,c as te}from"./GraphQueryStreaming-U8ctbyJL.js";let f=null;async function ie(e){const r=j.geometryServiceUrl??"";if(!r){J()||await M();for(const a of e)a.container[a.indexer]=Q(a.container[a.indexer],I.WGS84);return}const t=e.map(a=>a.container[a.indexer]),n=new L({geometries:t,outSpatialReference:I.WGS84}),s=await O(r,n);for(let a=0;a<s.length;a++){const i=e[a];i.container[i.indexer]=s[a]}}async function q(e,r){const t=new z({portal:e,id:r});return await t.load(),f===null&&(f=await import("./knowledgeGraphService-BTB1M7Gx.js").then(n=>n.k)),await f.fetchKnowledgeGraph(t.url)}function R(e,r,t,n,s){if(e===null)return null;if(w(e)||G(e))return e;if(D(e)||D(e))return e.toJSDate();if(Y(e))return e.toStorageFormat();if(Z(e))return e.toStorageString();if(_(e)){const a={};for(const i of e.keys())a[i]=R(e.field(i),r,t,n,s),a[i]instanceof T&&s.push({container:a,indexer:i});return a}if(S(e)){const a=e.map(i=>R(i,r,t,n,s));for(let i=0;i<a.length;i++)a[i]instanceof T&&s.push({container:a,indexer:i});return a}return N(e)?e.spatialReference.isWGS84?e:e.spatialReference.isWebMercator&&r?B(e):e:void 0}function ne(e,r){if(!e)return e;if(e.spatialReference.isWGS84&&r.spatialReference.isWebMercator)return C(e);if(e.spatialReference.equals(r.spatialReference))return e;throw new l(r,p.WrongSpatialReference,null)}function v(e,r){if(!e)return null;const t={};for(const n in e)t[n]=m(e[n],r);return t}function m(e,r){return e===null?null:S(e)?e.map(t=>m(t,r)):e instanceof ee?{graphTypeName:e.typeName,id:e.id,graphType:"entity",properties:v(e.properties,r)}:e instanceof re?{graphType:"object",properties:v(e.properties,r)}:e instanceof ae?{graphTypeName:e.typeName,id:e.id,graphType:"relationship",originId:e.originId??null,destinationId:e.destinationId??null,properties:v(e.properties,r)}:e instanceof te?{graphType:"path",path:e.path?e.path.map(t=>m(t,r)):null}:N(e)?ne(e,r):w(e)||G(e)||$(e)?e:null}function oe(e){e.mode==="async"&&(e.functions.knowledgegraphbyportalitem=function(r,t){return e.standardFunctionAsync(r,t,(n,s,a)=>{if(b(a,2,2,r,t),a[0]===null)throw new l(r,p.PortalRequired,t);if(a[0]instanceof E){const d=P(a[1]);let u;return u=r.services?.portal?r.services.portal:k.getDefault(),q(H(a[0],u),d)}if(w(a[0])===!1)throw new l(r,p.InvalidParameter,t);const i=P(a[0]);return q(r.services?.portal??k.getDefault(),i)})},e.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),e.functions.querygraph=function(r,t){return e.standardFunctionAsync(r,t,async(n,s,a)=>{b(a,2,4,r,t);const i=a[0];if(!K(i))throw new l(r,p.InvalidParameter,t);const d=a[1];if(!w(d))throw new l(r,p.InvalidParameter,t);f===null&&(f=await import("./knowledgeGraphService-BTB1M7Gx.js").then(o=>o.k));let u=null;const h=U(a[2],null);if(!(h instanceof W||h===null))throw new l(r,p.InvalidParameter,t);if(h){let o=[];u=R(h,!0,!1,r,o),o=o.filter(c=>!c.container[c.indexer].spatialReference.isWGS84),o.length>0&&await ie(o)}const x=new X({openCypherQuery:d,bindParameters:u});(i?.serviceDefinition?.currentVersion??11.3)>11.2&&(x.outputSpatialReference=r.spatialReference);const F=(await f.executeQueryStreaming(i,x)).resultRowsStream.getReader(),y=[];try{for(;;){const{done:o,value:c}=await F.read();if(o)break;if(S(c))for(const g of c)y.push(m(g,r));else{const g=[];for(const A of c)g.push(m(c[A],r));y.push(g)}}}catch(o){throw o}return W.convertJsonToArcade(y,V(r),!1,!0)})},e.signatures.push({name:"querygraph",min:2,max:4}))}export{oe as registerFunctions};
