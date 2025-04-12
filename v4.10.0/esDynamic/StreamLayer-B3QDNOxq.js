import{bt as t,bu as i,bv as f,bw as P,hh as O,hi as E,ea as k,hj as A,ee as _,eb as D,eq as N,ec as U,ed as C,ef as L,er as V,cQ as G,aY as v,f8 as J,s as p,B as M,hk as g,hL as q,G as z,hM as $,dN as y,gK as Q,hm as W,fv as B,hE as c,U as K,bl as Y,hl as H,v as X,hN as Z,bn as ee,hp as te,hq as ie,hr as se,ei as re,hO as w,hP as oe,hQ as ne,ht as ae,ce as le,hu as pe,hv as de,eg as b,T as ce,hw as he,ej as ue,hy as ye,ep as me}from"./main-DCIX61zy.js";var m;let a=m=class extends P{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new m({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([i({type:Number,json:{write:!0}})],a.prototype,"age",void 0),t([i({type:Number,json:{write:!0}})],a.prototype,"ageReceived",void 0),t([i({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0),t([i({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0),a=m=t([f("esri.layers.support.PurgeOptions")],a);const S=a,I=ye();function x(e,r){return new p("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}let s=class extends O(E(k(A(_(D(N(U(C(L(V(G(me)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new S,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=v.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=J(async(r,o,n)=>{const{save:l,saveAs:h}=await import("./streamLayerUtils-DZZqjxAv.js");switch(r){case c.SAVE:return l(this,o);case c.SAVE_AS:return h(this,n,o)}})}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(M).then(()=>this._fetchService(r))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const r=this._normalizeFeatureReduction(e);this._set("featureReduction",r)}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,r,o){r=r.layerDefinition||r;const n=r.drawingInfo?.renderer;if(n){const l=q(n,r,o)||void 0;return l||z.getLogger(this).error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:o}),l}return $(r,o)}async connect(e){const[{createConnection:r}]=await Promise.all([import("./createConnection-DV-PsVt_.js"),this.load()]),o=this.geometryType?y.toJSON(this.geometryType):null,{customParameters:n=null,definitionExpression:l=null,geometryDefinition:h=null,maxReconnectionAttempts:j=0,maxReconnectionInterval:R=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),d=r(this.parsedUrl,this.spatialReference,T,o,l,h,j,R,n??void 0),F=Q([this.on("send-message-to-socket",u=>d.sendMessageToSocket(u)),this.on("send-message-to-client",u=>d.sendMessageToClient(u))]);return d.once("destroy",F.remove),d}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return W(this,e)}createQuery(){const e=new B;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let o=null;return this.fields.some(n=>(n.name===e&&(o=n.domain),!!o)),o}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(c.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(c.SAVE_AS,r,e)}write(e,r){const o=r?.messages;return this.webSocketUrl?(o?.push(x(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,r):(o?.push(x(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:r}=await K(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r}}else{if(!this.timeInfo?.trackIdField)throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const r=this.fields.find(o=>o.type==="oid")?.name;if(!r)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=r}if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(r=>r.name===this.objectIdField)||this.fields.push(new Y({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),g(this.renderer,this.fieldsIndex),H(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),X(this,{origin:"service"})}};t([i({type:String})],s.prototype,"copyright",void 0),t([i({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),t([i({type:String})],s.prototype,"displayField",void 0),t([i({type:Z})],s.prototype,"elevationInfo",void 0),t([i({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],s.prototype,"featureReduction",null),t([i(I.fields)],s.prototype,"fields",void 0),t([i(I.fieldsIndex)],s.prototype,"fieldsIndex",void 0),t([i({type:ee,json:{name:"layerDefinition.definitionGeometry",write:!0}})],s.prototype,"geometryDefinition",void 0),t([i({type:y.apiValues,json:{read:{reader:y.read}}})],s.prototype,"geometryType",void 0),t([i(te)],s.prototype,"labelsVisible",void 0),t([i({type:[ie],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:se},write:!0}})],s.prototype,"labelingInfo",void 0),t([i(re)],s.prototype,"legendEnabled",void 0),t([i({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],s.prototype,"listMode",void 0),t([i({type:w})],s.prototype,"maxReconnectionAttempts",void 0),t([i({type:w})],s.prototype,"maxReconnectionInterval",void 0),t([i(oe)],s.prototype,"maxScale",void 0),t([i(ne)],s.prototype,"minScale",void 0),t([i({type:String})],s.prototype,"objectIdField",void 0),t([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],s.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],s.prototype,"outFields",void 0),t([i(ae)],s.prototype,"popupEnabled",void 0),t([i({type:le,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),t([i({type:S})],s.prototype,"purgeOptions",void 0),t([i({json:{read:!1,write:!1}})],s.prototype,"refreshInterval",void 0),t([i({types:pe,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:de,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],s.prototype,"renderer",null),t([b("service","renderer",["drawingInfo.renderer","defaultSymbol"]),b("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],s.prototype,"readRenderer",null),t([i((()=>{const e=ce(he);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],s.prototype,"screenSizePerspectiveEnabled",void 0),t([i()],s.prototype,"sourceJSON",void 0),t([i({type:v,json:{origins:{service:{read:{source:"spatialReference"}}}}})],s.prototype,"spatialReference",void 0),t([i({json:{read:!1}})],s.prototype,"type",void 0),t([i(ue)],s.prototype,"url",void 0),t([i({type:Number})],s.prototype,"updateInterval",void 0),t([i({json:{read:!1,write:!1}})],s.prototype,"useViewTime",void 0),t([i({type:String})],s.prototype,"webSocketUrl",void 0),s=t([f("esri.layers.StreamLayer")],s);const fe=s;export{fe as default};
