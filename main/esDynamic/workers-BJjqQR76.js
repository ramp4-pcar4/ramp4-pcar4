import{aY as a,U as L,s as E,g5 as ae,u as P,a as le,l as m,a7 as ce,S as A,fw as he,jj as D,L as ue,fu as de,T as C,jk as pe,a2 as ge,hl as T,Y as O,bF as b,aD as U,cy as fe,n as x,w as me}from"./main-C3PVbFgd.js";import{s as be}from"./Queue-CSSpAFrX.js";import"./intl-CrhPUENC.js";const F="20250318",q="878eb8750809e56d2a9ea9f1475c9e4e58226dad",B=new FinalizationRegistry(t=>{t.close()});function _e(t,e){B.register(t,e,e)}function ye(t){B.unregister(t)}function K(t,e){return new Proxy({},{get:(r,s,o)=>(...n)=>{let i,l;const c=n[n.length-1];return ke(c)&&(i=c.signal,l=c.transferList,n.pop()),t.apply(e?`${e}.${s.toString()}`:s.toString(),n,{transferList:l,signal:i})}})}function ke(t){return typeof t=="object"&&!Array.isArray(t)&&t!=null&&("signal"in t||"transferList"in t||Object.keys(t).length===0)}const we={statsWorker:()=>import("./statsWorker-CEaa3_uq.js"),geometryEngineWorker:()=>import("./geometryEngineWorker-DR57qxa2.js"),arcadeGeometryOperatorsWorker:()=>import("./operatorsWorker-Bm6XqhFj.js"),CSVSourceWorker:()=>import("./CSVSourceWorker-D0kUaQpw.js"),EdgeProcessingWorker:()=>import("./EdgeProcessingWorker-Cglycnwi.js"),ElevationSamplerWorker:()=>import("./ElevationSamplerWorker-zm0svKbr.js"),FeatureServiceSnappingSourceWorker:()=>import("./FeatureServiceSnappingSourceWorker-ziWz8Yy7.js"),GeoJSONSourceWorker:()=>import("./GeoJSONSourceWorker-BkOmUXZz.js"),LercWorker:()=>import("./LercWorker-kCiSf9ah.js"),MemorySourceWorker:()=>import("./MemorySourceWorker-CiCeemDR.js"),PBFDecoderWorker:()=>import("./PBFDecoderWorker-COM5-i3I.js"),FeaturePipelineWorker:()=>import("./FeaturePipelineWorker-DcCfeeq4.js"),PointCloudWorker:()=>import("./PointCloudWorker-Btoz83mv.js"),RasterWorker:()=>import("./RasterWorker-OYZZ5VeG.js"),SceneLayerSnappingSourceWorker:()=>import("./SceneLayerSnappingSourceWorker-CtYGjy4V.js"),SceneLayerWorker:()=>import("./SceneLayerWorker-DhbC-tM2.js"),WFSSourceWorker:()=>import("./WFSSourceWorker-CloWFguw.js"),WorkerTileHandler:()=>import("./WorkerTileHandler-C_Rtl3bl.js"),Lyr3DWorker:()=>import("./Lyr3DWorker-_sPlb28V.js"),Feature3DPipelineWorker:()=>import("./Feature3DPipelineWorker-1AsT5S0r.js"),TextureCompressionWorker:()=>import("./TextureCompressionWorker-DWiP7oPN.js")},V="worker:port-closed";var h;(function(t){t[t.HANDSHAKE=0]="HANDSHAKE",t[t.OPEN=1]="OPEN",t[t.OPENED=2]="OPENED",t[t.RESPONSE=3]="RESPONSE",t[t.INVOKE=4]="INVOKE",t[t.ABORT=5]="ABORT",t[t.CLOSE=6]="CLOSE",t[t.OPEN_PORT=7]="OPEN_PORT",t[t.ON=8]="ON"})(h||(h={}));let ve=0;function $(){return ve++}function Ee(t){return t&&typeof t=="object"&&("result"in t||"transferList"in t)}function _(t){return t?typeof t=="string"?JSON.stringify({name:"message",message:t}):t.toJSON?JSON.stringify(t):JSON.stringify({name:t.name,message:t.message,details:t.details||{stack:t.stack}}):null}function W(t,e,r,s){if(e.type===h.OPEN_PORT)return void t.postMessage(e,[e.port]);if(e.type!==h.INVOKE&&e.type!==h.RESPONSE)return void t.postMessage(e);let o;if(Ee(r)?(o=Q(r.transferList),e.data=r.result):(o=Q(s),e.data=r),o){if(a("ff")){for(const n of o)if("byteLength"in n&&n.byteLength>267386880){const i="Worker call with large ArrayBuffer would crash Firefox";switch(e.type){case h.INVOKE:throw i;case h.RESPONSE:return void W(t,{type:h.RESPONSE,jobId:e.jobId,error:_(i)})}}}t.postMessage(e,o)}else t.postMessage(e)}function y(t){if(!t)return null;const e=t.data;return e?typeof e=="string"?JSON.parse(e):e:null}function Q(t){if(!t?.length)return null;if(a("esri-workers-arraybuffer-transfer"))return t;const e=t.filter(r=>!Pe(r));return e.length?e:null}function Pe(t){return t instanceof ArrayBuffer||t?.constructor?.name==="ArrayBuffer"}async function Oe(t){try{return await t}catch(e){const r=e?.name===V;if(!(L(e)||r))throw e;return}}const{CLOSE:z,ABORT:G,INVOKE:Y,RESPONSE:k,OPEN_PORT:X,ON:Se}=h,Me=2;class Ne{constructor(e){this._invoke=e,this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._timer=null,this._process=this._process.bind(this)}push(e){e.type===h.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),this._timer===null&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(const e of this._invokeMessages)this._cancelledJobIds.has(e.jobId)||this._invoke(e);this._cancelledJobIds.clear(),this._invokeMessages.length=0}}class d{static connect(e,r){const s=new MessageChannel;let o;o=typeof e=="function"?new e:"default"in e&&typeof e.default=="function"?new e.default:e;const n=new d(s.port1,{channel:s,client:o,schedule:r});return typeof o=="object"&&"remoteClient"in o&&(o.remoteClient=n),d.clients.set(n,o),s.port2}static loadWorker(e){const r=we[e];return r?r():Promise.resolve(null)}constructor(e,r,s){this._port=e,this._jobQueue=s,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new Ne(o=>this._onInvokeMessage(o)),this._client=r.client,this._onMessage=this._onMessage.bind(this),this._channel=r.channel,this._schedule=r.schedule,this._port.addEventListener("message",this._onMessage),this._port.start()}close(){this._post({type:z}),this._close()}isBusy(){return this._outJobs.size>0}invoke(e,r,s){return this.apply(e,[r],s)}apply(e,r,s){const o=s?.signal,n=s?.transferList;if(!this._port)return Promise.reject(new E(V,`Cannot call invoke('${e}'), port is closed`,{methodName:e,data:r}));const i=$();return new Promise((l,c)=>{if(ae(o))return this._processWork(),void c(P());const p=le(o,()=>{const g=this._outJobs.get(i);g&&(this._outJobs.delete(i),this._processWork(),m(g.abortHandle),this._post({type:G,jobId:i}),c(P()))}),u={resolve:l,reject:c,abortHandle:p,debugInfo:e};this._outJobs.set(i,u),this._post({type:Y,jobId:i,methodName:e,abortable:o!=null},r,n)})}createInvokeProxy(e){return K(this,e)}on(e,r){const s=new MessageChannel;function o(n){r(n.data)}return this._port.postMessage({type:h.ON,eventType:e,port:s.port2},[s.port2]),s.port1.addEventListener("message",o),s.port1.start(),ce(()=>{s.port1.postMessage({type:h.CLOSE}),s.port1.close(),s.port1.removeEventListener("message",o)})}jobAdded(){this._processWork()}openPort(){const e=new MessageChannel;return this._post({type:X,port:e.port2}),e.port1}_processWork(){if(this._outJobs.size>=Me)return;const e=this._jobQueue?.pop();if(!e)return;const{methodName:r,data:s,invokeOptions:o,resolver:n}=e;this.apply(r,s,o).then(i=>n.resolve(i)).catch(i=>n.reject(i))}_close(){this._channel&&(this._channel=void 0),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach(e=>{m(e.abortHandle),e.reject(P(`Worker closing, aborting job calling '${e.debugInfo}'`))}),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=null,this._client=null,this._schedule=null}_onMessage(e){this._schedule!=null?this._schedule(()=>this._processMessage(e,!0)):this._processMessage(e,!1)}_processMessage(e,r){const s=y(e);if(s)switch(s.type){case k:this._onResponseMessage(s);break;case Y:r?this._onInvokeMessage(s):this._invokeQueue.push(s);break;case G:this._onAbortMessage(s);break;case z:this._onCloseMessage();break;case X:this._onOpenPortMessage(s);break;case Se:this._onOnMessage(s)}}_onAbortMessage(e){const r=this._inJobs,s=e.jobId,o=r.get(s);this._invokeQueue.push(e),o&&(o.controller&&o.controller.abort(),r.delete(s))}_onCloseMessage(){const e=this._client;this._close(),e&&"destroy"in e&&d.clients.get(this)===e&&e.destroy(),d.clients.delete(this),e?.remoteClient&&(e.remoteClient=null)}_onInvokeMessage(e){const{methodName:r,jobId:s,data:o=[],abortable:n}=e,i=n?new AbortController:null,l=this._inJobs;let c,p=this._client,u=p[r];try{if(!u&&r&&r.includes(".")){const g=r.split(".");for(let v=0;v<g.length-1;v++)p=p[g[v]],u=p[g[v+1]]}if(typeof u!="function")throw new TypeError(`${r} is not a function`);o.push({client:this,signal:i?i.signal:null}),c=u.apply(p,o)}catch(g){return void this._post({type:k,jobId:s,error:_(g)})}A(c)?(l.set(s,{controller:i,promise:c}),c.then(g=>{l.has(s)&&(l.delete(s),this._post({type:k,jobId:s},g))},g=>{l.has(s)&&(l.delete(s),L(g)||this._post({type:k,jobId:s,error:_(g||{message:`Error encountered at method ${r}`})}))})):this._post({type:k,jobId:s},c)}_onOpenPortMessage(e){new d(e.port,{client:this._client})}_onOnMessage(e){const{port:r}=e,s=this._client.on(e.eventType,n=>{r.postMessage(n)}),o=he(e.port,"message",n=>{y(n)?.type===h.CLOSE&&(o.remove(),s.remove(),r.close())})}_onResponseMessage(e){const{jobId:r,error:s,data:o}=e,n=this._outJobs;if(!n.has(r))return;const i=n.get(r);n.delete(r),this._processWork(),m(i.abortHandle),s?i.reject(E.fromJSON(JSON.parse(s))):i.resolve(o)}_post(e,r,s){return W(this._port,e,r,s)}}d.kernelInfo={buildDate:F,fullVersion:D,revision:q},d.clients=new Map;let Z=class{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new be}destroy(){this.close()}get closed(){return!this._clients?.length}open(t,e){return new Promise((r,s)=>{let o=!0;const n=i=>{C(e.signal),o&&(o=!1,i())};this._clients.length=t.length,this._clientPromises.length=t.length,this._inUseClients.length=t.length;for(let i=0;i<t.length;++i){const l=t[i];A(l)?this._clientPromises[i]=l.then(c=>(this._clients[i]=new d(c,e,this._ongoingJobsQueue),n(r),this._clients[i]),()=>(n(s),null)):(this._clients[i]=new d(l,e,this._ongoingJobsQueue),this._clientPromises[i]=Promise.resolve(this._clients[i]),n(r))}})}broadcast(t,e,r){const s=new Array(this._clientPromises.length);for(let o=0;o<this._clientPromises.length;++o){const n=this._clientPromises[o];s[o]=n.then(i=>i?.invoke(t,e,r))}return s}close(){let t;for(;t=this._ongoingJobsQueue.pop();)t.resolver.reject(P(`Worker closing, aborting job calling '${t.methodName}'`));for(const e of this._clientPromises)e.then(r=>r?.close());this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,ye(this)}invoke(t,e,r){return this.apply(t,[e],r)}apply(t,e,r){const s=ue();this._ongoingJobsQueue.push({methodName:t,data:e,invokeOptions:r,resolver:s});for(let o=0;o<this._clientPromises.length;o++){const n=this._clients[o];n?n.jobAdded():this._clientPromises[o].then(i=>i?.jobAdded())}return s.promise}createInvokeProxy(t){return K(this,t)}on(t,e){return Promise.all(this._clientPromises).then(()=>de(this._clients.map(r=>r.on(t,e))))}openPorts(){return new Promise(t=>{const e=new Array(this._clientPromises.length);let r=e.length;for(let s=0;s<this._clientPromises.length;++s)this._clientPromises[s].then(o=>{o&&(e[s]=o.openPort()),--r==0&&t(e)})})}get test(){}};const Ie={async request(t,e){const r=t.options,s=r.responseType;r.signal=e?.signal,r.responseType=s==="native"||s==="native-request-init"?"native-request-init":s&&["blob","json","text"].includes(s)&&pe(t.url)?.after?s:"array-buffer";const o=await ge(t.url,r),n={data:o.data,httpStatus:o.httpStatus,ssl:o.ssl};switch(o.requestOptions?.responseType){case"native-request-init":return delete n.data.signal,n;case"blob":n.data=await n.data.arrayBuffer();break;case"json":n.data=new TextEncoder().encode(JSON.stringify(n.data)).buffer;break;case"text":n.data=new TextEncoder().encode(n.data).buffer}return{result:n,transferList:[n.data]}}},ee={};function je(t){const e={async:t.async,isDebug:t.isDebug,locale:t.locale,baseUrl:t.baseUrl,has:{...t.has},map:{...t.map},packages:t.packages?.slice()||[],paths:{...ee.paths,...t.paths}};return t.hasOwnProperty("async")||(e.async=!0),t.hasOwnProperty("isDebug")||(e.isDebug=!1),t.baseUrl||(e.baseUrl=ee.baseUrl),e}class Je{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(r=>{this[r]=(...s)=>e[r](...s)})}}let S=class{constructor(){this._dispatcher=new Je,this._workerPostMessage({type:h.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(t){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=t,t&&this.addEventListener("message",t)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(t){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=t,t&&this.addEventListener("messageerror",t)}get onerror(){return this._onerrorHandler}set onerror(t){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=t,t&&this.addEventListener("error",t)}postMessage(t){T(()=>{this._workerMessageHandler(new MessageEvent("message",{data:t}))})}dispatchEvent(t){return this._dispatcher.dispatchEvent(t)}addEventListener(t,e,r){this._dispatcher.addEventListener(t,e,r)}removeEventListener(t,e,r){this._dispatcher.removeEventListener(t,e,r)}_workerPostMessage(t){T(()=>{this.dispatchEvent(new MessageEvent("message",{data:t}))})}async _workerMessageHandler(t){const e=y(t);if(e&&e.type===h.OPEN){const{modulePath:r,jobId:s}=e;let o=await d.loadWorker(r);o||(o=await import(r));const n=d.connect(o);this._workerPostMessage({type:h.OPENED,jobId:s,data:n})}}};const R=()=>x.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:Le}=h,Ae='let globalId=0;const outgoing=new Map,configuration={CONFIGURATION};self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;let s=null;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());s=()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))},t.addEventListener("abort",s)}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})})).finally((()=>{t&&t.removeEventListener("abort",s)}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\nModules version: ${r}\nAssets version: ${n??s}\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let n;function t(e){const o=n.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});';let M,N;const te="Failed to create Worker. Fallback to execute module in main thread";async function Ce(){if(!a("esri-workers"))return se(new S);if(!M&&!N)try{const e=Ae.split("{CONFIGURATION}").join(We());M=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){N=e||{}}let t;if(M)try{t=new Worker(M,{name:"esri-worker-"+Re++})}catch{R().warn(te,N),t=new S}else R().warn(te,N),t=new S;return se(t)}async function se(t){return new Promise(e=>{function r(o){const n=y(o);n&&n.type===Le&&(t.removeEventListener("message",r),t.removeEventListener("error",s),e(t))}function s(o){o.preventDefault(),t.removeEventListener("message",r),t.removeEventListener("error",s),R().warn("Failed to create Worker. Fallback to execute module in main thread",o),(t=new S).addEventListener("message",r),t.addEventListener("error",s)}t.addEventListener("message",r),t.addEventListener("error",s)})}function We(){let t;if(O.default!=null){const s={...O};delete s.default,t=JSON.parse(JSON.stringify(s))}else t=JSON.parse(JSON.stringify(O));t.assetsPath=b(t.assetsPath),t.defaultAssetsPath=t.defaultAssetsPath?b(t.defaultAssetsPath):void 0,t.request.interceptors=[],t.log.interceptors=[],t.locale=U(),t.has={"esri-csp-restrictions":a("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":a("esri-2d-update-debug"),"esri-2d-log-updating":a("esri-2d-log-updating"),"featurelayer-pbf":a("featurelayer-pbf"),"featurelayer-fast-triangulation-enabled":a("featurelayer-fast-triangulation-enabled"),"featurelayer-simplify-thresholds":a("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":a("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":a("featurelayer-simplify-mobile-factor"),"featurelayer-query-max-depth":a("featurelayer-query-max-depth"),"featurelayer-query-pausing-enabled":a("featurelayer-query-pausing-enabled"),"featurelayer-snapshot-enabled":a("featurelayer-snapshot-enabled"),"esri-atomics":a("esri-atomics"),"esri-shared-array-buffer":a("esri-shared-array-buffer"),"esri-tiles-debug":a("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":a("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":a("feature-polyline-generalization-factor"),"host-webworker":1},t.workers.loaderUrl&&(t.workers.loaderUrl=b(t.workers.loaderUrl)),t.workers.workerPath?t.workers.workerPath=b(t.workers.workerPath):t.workers.workerPath=b(fe("esri/core/workers/RemoteClient.js")),t.workers.useDynamicImport=!1;const e=O.workers.loaderConfig,r=je({baseUrl:e?.baseUrl,locale:U(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...e?.has},map:{...e?.map},paths:{...e?.paths},packages:e?.packages||[]});return JSON.stringify({esriConfig:t,loaderConfig:r,kernelInfo:{buildDate:F,fullVersion:D,revision:q}})}let Re=0;const{ABORT:re,INVOKE:He,OPEN:De,OPENED:Te,RESPONSE:w}=h;class H{static async create(e){const r=await Ce();return new H(r,e)}constructor(e,r){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=r,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",s=>{s.preventDefault(),x.getLogger("esri.core.workers.WorkerOwner").error(s)})}terminate(){this.worker.terminate()}async open(e,r={}){const{signal:s}=r,o=$();return new Promise((n,i)=>{const l={resolve:n,reject:i,abortHandle:me(s,()=>{this._outJobs.delete(o),this._post({type:re,jobId:o})})};this._outJobs.set(o,l),this._post({type:De,jobId:o,modulePath:e})})}_onMessage(e){const r=y(e);if(r)switch(r.type){case Te:this._onOpenedMessage(r);break;case w:this._onResponseMessage(r);break;case re:this._onAbortMessage(r);break;case He:this._onInvokeMessage(r)}}_onAbortMessage(e){const r=this._inJobs,s=e.jobId,o=r.get(s);o&&(o.controller&&o.controller.abort(),r.delete(s))}_onInvokeMessage(e){const{methodName:r,jobId:s,data:o,abortable:n}=e,i=n?new AbortController:null,l=this._inJobs,c=Ie[r];let p;try{if(typeof c!="function")throw new TypeError(`${r} is not a function`);p=c.call(null,o,{signal:i?i.signal:null})}catch(u){return void this._post({type:w,jobId:s,error:_(u)})}A(p)?(l.set(s,{controller:i,promise:p}),p.then(u=>{l.has(s)&&(l.delete(s),this._post({type:w,jobId:s},u))},u=>{l.has(s)&&(l.delete(s),u||(u={message:"Error encountered at method"+r}),L(u)||this._post({type:w,jobId:s,error:_(u||{message:`Error encountered at method ${r}`})}))})):this._post({type:w,jobId:s},p)}_onOpenedMessage(e){const{jobId:r,data:s}=e,o=this._outJobs.get(r);o&&(this._outJobs.delete(r),m(o.abortHandle),o.resolve(s))}_onResponseMessage(e){const{jobId:r,error:s,data:o}=e,n=this._outJobs.get(r);n&&(this._outJobs.delete(r),m(n.abortHandle),s?n.reject(E.fromJSON(JSON.parse(s))):n.resolve(o))}_post(e,r,s){return W(this.worker,e,r,s)}}const oe=a("host-browser")?Math.min(navigator.hardwareConcurrency-1,a("workers-pool-size")??8):0;let f=a("esri-mobile")?Math.min(oe,3):oe;f||(f=a("safari")&&a("mac")?7:2);let ne=0;const I=[];function Ue(){ie()}async function j(t,e){const r=new Z,{registryTarget:s,...o}=e;return await r.open(t,o),s&&_e(s,r),r}async function xe(t,e={}){if(typeof t!="string")throw new E("workers:undefined-module","modulePath is missing");let r=e.strategy||"distributed";if(a("host-webworker")&&!a("esri-workers")&&(r="local"),r==="local"){let s=await d.loadWorker(t);s||(s=await import(t)),C(e.signal);const o=e.client||s;return j([d.connect(s,e.schedule)],{...e,client:o})}if(await ie(),C(e.signal),r==="dedicated"){const s=ne++%f;return j([await I[s].open(t,e)],e)}if(e.maxNumWorkers&&e.maxNumWorkers>0){const s=Math.min(e.maxNumWorkers,f);if(s<f){const o=new Array(s);for(let n=0;n<s;++n){const i=ne++%f;o[n]=I[i].open(t,e)}return j(o,e)}}return j(I.map(s=>s.open(t,e)),e)}let J=null;async function ie(){if(J)return J;new AbortController;const t=[];for(let e=0;e<f;e++){const r=H.create(e).then(s=>(I[e]=s,s));t.push(r)}return J=Promise.all(t),J}export{d as E,Oe as O,Z as c,Ue as m,xe as p};
