import{N as v,s as c,C as j,X as u,a2 as y,Z as D}from"./main-C3PVbFgd.js";import p from"./PortalItem-heWSwjtK.js";async function A(r,n){const t=v(r);if(!t)throw new c("invalid-url","Invalid scene service url");const e={...n,sceneServerUrl:t.url.path,layerId:t.sublayer??void 0};if(e.sceneLayerItem??=await q(e),e.sceneLayerItem==null)return h(e.sceneServerUrl.replace("/SceneServer","/FeatureServer"),e);const a=await T(e);if(!a?.url)throw new c("related-service-not-found","Could not find feature service through portal item relationship");e.featureServiceItem=a;const o=await h(a.url,e);return o.portalItem=a,o}async function q(r){const n=(await w(r)).serviceItemId;if(!n)return null;const t=new p({id:n,apiKey:r.apiKey}),e=await P(r);e!=null&&(t.portal=new j({url:e}));try{return await t.load({signal:r.signal})}catch(a){return u(a),null}}async function w(r){if(r.rootDocument)return r.rootDocument;const n={query:{f:"json",...r.customParameters,token:r.apiKey},responseType:"json",signal:r.signal};try{const t=await y(r.sceneServerUrl,n);r.rootDocument=t.data}catch{r.rootDocument={}}return r.rootDocument}async function P(r){const n=D?.findServerInfo(r.sceneServerUrl);if(n?.owningSystemUrl)return n.owningSystemUrl;const t=r.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await y(t,{query:{f:"json"},responseType:"json",signal:r.signal})).data.owningSystemUrl;if(e)return e}catch(e){u(e)}return null}async function h(r,n){const t=v(r);if(!t)throw new c("invalid-feature-service-url","Invalid feature service url");const e=t.url.path,a=n.layerId;if(a==null)return{serverUrl:e};const o=w(n),f=n.featureServiceItem?await n.featureServiceItem.fetchData("json"):null,g=(f?.layers?.[0]||f?.tables?.[0])?.customParameters,d=s=>{const U={query:{f:"json",...g},responseType:"json",authMode:s,signal:n.signal};return y(e,U)},S=d("anonymous").catch(()=>d("no-prompt")),[m,I]=await Promise.all([S,o]),l=I?.layers,i=m.data&&m.data.layers;if(!Array.isArray(i))throw new Error("expected layers array");if(Array.isArray(l)){for(let s=0;s<Math.min(l.length,i.length);s++)if(l[s].id===a)return{serverUrl:e,layerId:i[s].id}}else if(a!=null&&a<i.length)return{serverUrl:e,layerId:i[a].id};throw new Error("could not find matching associated sublayer")}async function T({sceneLayerItem:r,signal:n}){if(!r)return null;try{const t=(await r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:n})).find(a=>a.type==="Feature Service")||null;if(!t)return null;const e=new p({portal:t.portal,id:t.id});return await e.load(),e}catch(t){return u(t),null}}export{A as s};
