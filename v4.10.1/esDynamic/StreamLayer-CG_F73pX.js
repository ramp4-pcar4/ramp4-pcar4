import{k as t,o as i,A as f,v as A,a_ as P,B as v,dA as O,s as p,G as k,f0 as g,n as E,cB as h,eN as _,U as D,aZ as N,au as U,bp as w,b4 as C,u as b,f as L}from"./main-Dv0FawL-.js";import"./UniqueValueRenderer-o5dSbZIm.js";import{o as V,m as G,u as J}from"./jsonUtils-CMC8W4_W.js";import{S as z}from"./MultiOriginJSONSupport-D-QAgjCU.js";import{f as M}from"./Layer-CYWu_N6k.js";import{l as $}from"./ArcGISService-vgq9GDGC.js";import{l as W}from"./BlendLayer-xfVThUVL.js";import{e as q}from"./CustomParametersMixin-CY86KSX3.js";import{c as B}from"./FeatureEffectLayer-DUHAUyTn.js";import{c as Q}from"./FeatureReductionLayer-Jx7VHDDa.js";import{b as Z}from"./OperationalLayer-DHmMTEXL.js";import{j as H}from"./PortalLayer-BG-KBgpX.js";import{f as K}from"./RefreshableLayer-bTjacb6I.js";import{t as X}from"./ScaleRangeLayer-SjqvBzuX.js";import{l as Y}from"./TemporalLayer-YAPVBuuG.js";import{p as ee,d as te,v as ie,j as re,l as se,s as oe,y as ne}from"./commonProperties-DTbWL1go.js";import{z as ae}from"./featureLayerUtils-M5wt0hcD.js";import{y as le}from"./Field-D6py_XvO.js";import{s as pe}from"./fieldProperties-DHkye6Ft.js";import{C as de,n as me}from"./labelingInfo-C-keTA2Q.js";import{t as ce}from"./styleUtils-DcCdJZA1.js";import{b as ue}from"./Query-LHTbNS2H.js";import{p as he}from"./popupUtils-BYnhptyt.js";import{h as ye}from"./ElevationInfo-NUIDpku8.js";import{A as m}from"./interfaces-Cwm0pihk.js";var y;let a=y=class extends A{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([i({type:Number,json:{write:!0}})],a.prototype,"age",void 0),t([i({type:Number,json:{write:!0}})],a.prototype,"ageReceived",void 0),t([i({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0),t([i({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0),a=y=t([f("esri.layers.support.PurgeOptions")],a);const S=a,I=pe();function x(e,s){return new p("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${s}`,{layer:e})}let r=class extends Q(B(W(Y(X(K($(Z(H(z(q(P(M)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new S,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=v.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=O(async(s,o,n)=>{const{save:l,saveAs:c}=await import("./streamLayerUtils-CBIQX1kX.js");switch(s){case m.SAVE:return l(this,o);case m.SAVE_AS:return c(this,n,o)}})}normalizeCtorArgs(e,s){return typeof e=="string"?{url:e,...s}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const s=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(k).then(()=>this._fetchService(s))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const s=this._normalizeFeatureReduction(e);this._set("featureReduction",s)}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,s,o){s=s.layerDefinition||s;const n=s.drawingInfo?.renderer;if(n){const l=V(n,s,o)||void 0;return l||E.getLogger(this).error("Failed to create renderer",{rendererDefinition:s.drawingInfo.renderer,layer:this,context:o}),l}return ae(s,o)}async connect(e){const[{createConnection:s}]=await Promise.all([import("./createConnection-Bf9mvOxR.js"),this.load()]),o=this.geometryType?h.toJSON(this.geometryType):null,{customParameters:n=null,definitionExpression:l=null,geometryDefinition:c=null,maxReconnectionAttempts:j=0,maxReconnectionInterval:R=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),d=s(this.parsedUrl,this.spatialReference,T,o,l,c,j,R,n??void 0),F=_([this.on("send-message-to-socket",u=>d.sendMessageToSocket(u)),this.on("send-message-to-client",u=>d.sendMessageToClient(u))]);return d.once("destroy",F.remove),d}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return he(this,e)}createQuery(){const e=new ue;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,s){if(!this.fields)return null;let o=null;return this.fields.some(n=>(n.name===e&&(o=n.domain),!!o)),o}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(m.SAVE,e)}async saveAs(e,s){return this._debouncedSaveOperations(m.SAVE_AS,s,e)}write(e,s){const o=s?.messages;return this.webSocketUrl?(o?.push(x(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,s):(o?.push(x(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:s}=await D(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=s}}else{if(!this.timeInfo?.trackIdField)throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const s=this.fields.find(o=>o.type==="oid")?.name;if(!s)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=s}if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(s=>s.name===this.objectIdField)||this.fields.push(new le({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),g(this.renderer,this.fieldsIndex),N(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),ce(this,{origin:"service"})}};t([i({type:String})],r.prototype,"copyright",void 0),t([i({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],r.prototype,"definitionExpression",void 0),t([i({type:String})],r.prototype,"displayField",void 0),t([i({type:ye})],r.prototype,"elevationInfo",void 0),t([i({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],r.prototype,"featureReduction",null),t([i(I.fields)],r.prototype,"fields",void 0),t([i(I.fieldsIndex)],r.prototype,"fieldsIndex",void 0),t([i({type:U,json:{name:"layerDefinition.definitionGeometry",write:!0}})],r.prototype,"geometryDefinition",void 0),t([i({type:h.apiValues,json:{read:{reader:h.read}}})],r.prototype,"geometryType",void 0),t([i(ee)],r.prototype,"labelsVisible",void 0),t([i({type:[de],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:me},write:!0}})],r.prototype,"labelingInfo",void 0),t([i(te)],r.prototype,"legendEnabled",void 0),t([i({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],r.prototype,"listMode",void 0),t([i({type:w})],r.prototype,"maxReconnectionAttempts",void 0),t([i({type:w})],r.prototype,"maxReconnectionInterval",void 0),t([i(ie)],r.prototype,"maxScale",void 0),t([i(re)],r.prototype,"minScale",void 0),t([i({type:String})],r.prototype,"objectIdField",void 0),t([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],r.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],r.prototype,"outFields",void 0),t([i(se)],r.prototype,"popupEnabled",void 0),t([i({type:C,json:{name:"popupInfo",write:!0}})],r.prototype,"popupTemplate",void 0),t([i({type:S})],r.prototype,"purgeOptions",void 0),t([i({json:{read:!1,write:!1}})],r.prototype,"refreshInterval",void 0),t([i({types:G,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:J,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],r.prototype,"renderer",null),t([b("service","renderer",["drawingInfo.renderer","defaultSymbol"]),b("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],r.prototype,"readRenderer",null),t([i((()=>{const e=L(oe);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],r.prototype,"screenSizePerspectiveEnabled",void 0),t([i()],r.prototype,"sourceJSON",void 0),t([i({type:v,json:{origins:{service:{read:{source:"spatialReference"}}}}})],r.prototype,"spatialReference",void 0),t([i({json:{read:!1}})],r.prototype,"type",void 0),t([i(ne)],r.prototype,"url",void 0),t([i({type:Number})],r.prototype,"updateInterval",void 0),t([i({json:{read:!1,write:!1}})],r.prototype,"useViewTime",void 0),t([i({type:String})],r.prototype,"webSocketUrl",void 0),r=t([f("esri.layers.StreamLayer")],r);const fe=r;export{fe as default};
