import{_ as P}from"./preload-helper-388ac9d5.js";import{e as t,y as r,k as w,dB as F,fQ as k,fR as _,dG as D,fS as O,dK as E,dH as U,gb as C,dI as N,dJ as L,dL as A,fP as J,f as I,c as p,r as M,dM as G,fT as h,gc as V,p as q,gd as z,by as Q,fI as m,bX as W,fV as X,fN as Y,U as Z,ef as B,fU as H,a3 as K,ge as ee,w as te,fX as ie,fY as se,fZ as re,dQ as oe,gf as f,gg as ne,gh as ae,f$ as le,bw as pe,g0 as de,g1 as ce,dO as g,g2 as ye,dR as me,gi as ue,gj as he,g5 as fe,a4 as ge}from"./main-8eb577c9.js";var u;let l=u=class extends F{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new u({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([r({type:Number,json:{write:!0}})],l.prototype,"age",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"ageReceived",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"displayCount",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"maxObservations",void 0),l=u=t([w("esri.layers.support.PurgeOptions")],l);const S=l,v=fe();function b(e,i){return new p("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${i}`,{layer:e})}let s=class extends k(_(D(O(E(U(C(N(L(A(J(ge))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new S,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=I.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const i=M(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(G).then(()=>this._fetchService(i))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){h(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,i,o){const a=(i=i.layerDefinition||i).drawingInfo&&i.drawingInfo.renderer||void 0;if(a){const n=V(a,i,o)||void 0;return n||q.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:i.drawingInfo.renderer,layer:this,context:o}),n}if(i.defaultSymbol)return i.types&&i.types.length?new z({defaultSymbol:y(i.defaultSymbol,i,o),field:i.typeIdField,uniqueValueInfos:i.types.map(n=>({id:n.id,symbol:y(n.symbol,n,o)}))}):new Q({symbol:y(i.defaultSymbol,i,o)})}async connect(e){const[{createConnection:i}]=await Promise.all([P(()=>import("./createConnection-7da4a0b5.js"),["./createConnection-7da4a0b5.js","./preload-helper-388ac9d5.js","./main-8eb577c9.js","./main-7e4e971a.css"],import.meta.url),this.load()]),o=this.geometryType?m.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:x=null,maxReconnectionAttempts:$=0,maxReconnectionInterval:R=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),d=i(this.parsedUrl,this.spatialReference,T,o,{geometry:x,where:n},$,R,a??void 0),j=W([this.on("send-message-to-socket",c=>d.sendMessageToSocket(c)),this.on("send-message-to-client",c=>d.sendMessageToClient(c))]);return d.once("destroy",j.remove),d}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return X(this,e)}createQuery(){const e=new Y;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,i){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===e&&(o=a.domain),!!o)),o}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}write(e,i){const o=i?.messages;return this.webSocketUrl?(o?.push(b(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,i):(o?.push(b(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:i}=await Z(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=i}}else{if(!this.timeInfo?.trackIdField)throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const i=this.fields.find(o=>o.type==="oid")?.name;if(!i)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=i}if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(i=>i.name===this.objectIdField)||this.fields.push(new B({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),h(this.renderer,this.fieldsIndex),H(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),K(this,{origin:"service"})}};t([r({type:String})],s.prototype,"copyright",void 0),t([r({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),t([r({type:String})],s.prototype,"displayField",void 0),t([r({type:ee})],s.prototype,"elevationInfo",void 0),t([r(v.fields)],s.prototype,"fields",void 0),t([r(v.fieldsIndex)],s.prototype,"fieldsIndex",void 0),t([r({type:te})],s.prototype,"geometryDefinition",void 0),t([r({type:m.apiValues,json:{read:{reader:m.read}}})],s.prototype,"geometryType",void 0),t([r(ie)],s.prototype,"labelsVisible",void 0),t([r({type:[se],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:re},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],s.prototype,"labelingInfo",void 0),t([r(oe)],s.prototype,"legendEnabled",void 0),t([r({type:["show","hide"]})],s.prototype,"listMode",void 0),t([r({type:f})],s.prototype,"maxReconnectionAttempts",void 0),t([r({type:f})],s.prototype,"maxReconnectionInterval",void 0),t([r(ne)],s.prototype,"maxScale",void 0),t([r(ae)],s.prototype,"minScale",void 0),t([r({type:String})],s.prototype,"objectIdField",void 0),t([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],s.prototype,"operationalLayerType",void 0),t([r(le)],s.prototype,"popupEnabled",void 0),t([r({type:pe,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],s.prototype,"popupTemplate",void 0),t([r({type:S})],s.prototype,"purgeOptions",void 0),t([r({types:de,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:ce,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],s.prototype,"renderer",null),t([g("service","renderer",["drawingInfo.renderer","defaultSymbol"]),g("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],s.prototype,"readRenderer",null),t([r(ye)],s.prototype,"screenSizePerspectiveEnabled",void 0),t([r()],s.prototype,"sourceJSON",void 0),t([r({type:I,json:{origins:{service:{read:{source:"spatialReference"}}}}})],s.prototype,"spatialReference",void 0),t([r({json:{read:!1}})],s.prototype,"type",void 0),t([r(me)],s.prototype,"url",void 0),t([r({type:Number})],s.prototype,"updateInterval",void 0),t([r({type:String})],s.prototype,"webSocketUrl",void 0),s=t([w("esri.layers.StreamLayer")],s);const y=ue({types:he}),we=s;export{we as default};
