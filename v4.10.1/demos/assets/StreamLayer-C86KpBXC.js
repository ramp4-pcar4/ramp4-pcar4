const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./streamLayerUtils-CSdYCZny.js","./utils-CwrsZcQV.js","./main-DVcB5zI_.js","./preload-helper-ExcqyqRp.js","./main-wZMPJMua.css","./originUtils-CPX8CCAY.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./PortalItem-CptTE56-.js","./jsonContext-DLya5qQM.js","./portalItemUtils-DIbhp7Hv.js","./projection-DjziTCz4.js","./projectBuffer-B7AMRl4P.js","./saveUtils-D_0kE_mM.js","./createConnection-DnPvpMKL.js","./query-VKD_R4TO.js","./normalizeUtils-BpU5i4_g.js","./normalizeUtilsCommon-D8VYrgzx.js","./utils-DrUkmw0x.js","./utils-BRf9xhkT.js","./pbfQueryUtils-I7mt3-_E.js","./pbf-B3kRTLB9.js","./OptimizedFeature-CIptWNVu.js","./OptimizedFeatureSet-Blu9Ckm7.js","./queryZScale-5NWWGPkz.js","./Query-5sYd3NzA.js","./Field-BdhLPXiD.js","./fieldType-CvjC4q_e.js","./TimeExtent-BMnBstjf.js"])))=>i.map(i=>d[i]);
import{_ as f}from"./preload-helper-ExcqyqRp.js";import{q as t,u as r,C as I,A as F,b0 as P,D as x,dD as E,s as l,J as A,f3 as v,n as O,cE as h,eQ as D,U as k,a$ as C,aw as U,br as g,b6 as N,z as w,h as L}from"./main-DVcB5zI_.js";import"./UniqueValueRenderer-erKJvNm9.js";import{o as V,m as J,u as z}from"./jsonUtils-B-0OvQZC.js";import{S as G}from"./MultiOriginJSONSupport-BD1AQJoB.js";import{f as M}from"./Layer-cAwBsVeK.js";import{l as q}from"./ArcGISService-CELu0GWQ.js";import{l as W}from"./BlendLayer-C_WbNhWy.js";import{e as Q}from"./CustomParametersMixin-Nb9zgxH1.js";import{c as Y}from"./FeatureEffectLayer-BnUEpWq3.js";import{c as Z}from"./FeatureReductionLayer-B-3hDyVz.js";import{b as B}from"./OperationalLayer-CdwvZPSg.js";import{j as H}from"./PortalLayer-60r_oabj.js";import{f as K}from"./RefreshableLayer-Caaf6VZs.js";import{t as X}from"./ScaleRangeLayer-C00QmDu0.js";import{l as ee}from"./TemporalLayer-BSSB--rh.js";import{p as te,d as ie,v as re,j as oe,l as se,s as ne,y as ae}from"./commonProperties-CH-xlvIp.js";import{z as pe}from"./featureLayerUtils-lAty8YQv.js";import{y as le}from"./Field-BdhLPXiD.js";import{s as de}from"./fieldProperties-BdGbJT4k.js";import{C as me,n as ce}from"./labelingInfo-DdXrMeoI.js";import{t as ue}from"./styleUtils-B2tKF_u5.js";import{b as he}from"./Query-5sYd3NzA.js";import{p as ye}from"./popupUtils-CT6o82CV.js";import{h as fe}from"./ElevationInfo-DC7gItuo.js";import{A as m}from"./interfaces-CL2NbQte.js";import"./RendererLegendOptions-DosgVXrF.js";import"./diffUtils-DtX_28hR.js";import"./colorRamps-iaXTnS71.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-YxojuFr9.js";import"./compilerUtils-rS1KC4Oo.js";import"./lengthUtils-DIjFTxPc.js";import"./styleUtils-d60Lub9w.js";import"./LRUCache-BWNn7yXO.js";import"./Version-DmQ6ASes.js";import"./FieldsIndex-BqGmfyQl.js";import"./UnknownTimeZone-B5Y7Jezq.js";import"./OverrideHelper-DWBoxH_i.js";import"./colorUtils-ChXtBi7-.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-HkuvLbsQ.js";import"./heatmapUtils-D-_zNk3H.js";import"./TimeExtent-BMnBstjf.js";import"./arcgisLayerUrl-euAJ5jxV.js";import"./jsonUtils-YucLMR5u.js";import"./parser-ECfG-EPz.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CP7NBZcJ.js";import"./FeatureEffect-ByhaQbcP.js";import"./FeatureFilter-DsnQ8TrA.js";import"./fieldType-CvjC4q_e.js";import"./FeatureReductionSelection-Bgaw-LjE.js";import"./MD5-C9MwAd2G.js";import"./PortalItem-CptTE56-.js";import"./portalItemUtils-DIbhp7Hv.js";import"./projection-DjziTCz4.js";import"./projectBuffer-B7AMRl4P.js";import"./TimeInfo-uLaCwFtB.js";import"./uuid-Cl5lrJ4c.js";import"./RelationshipQuery-CQ2tToiu.js";import"./labelUtils-CPaUXkM9.js";var y;let a=y=class extends F{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([r({type:Number,json:{write:!0}})],a.prototype,"age",void 0),t([r({type:Number,json:{write:!0}})],a.prototype,"ageReceived",void 0),t([r({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0),t([r({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0),a=y=t([I("esri.layers.support.PurgeOptions")],a);const j=a,b=de();function S(e,o){return new l("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${o}`,{layer:e})}let i=class extends Z(Y(W(ee(X(K(q(B(H(G(Q(P(M)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new j,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=x.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=E(async(o,s,n)=>{const{save:p,saveAs:c}=await f(()=>import("./streamLayerUtils-CSdYCZny.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);switch(o){case m.SAVE:return p(this,s);case m.SAVE_AS:return c(this,n,s)}})}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new l("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const o=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(A).then(()=>this._fetchService(o))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const o=this._normalizeFeatureReduction(e);this._set("featureReduction",o)}set renderer(e){v(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,o,s){o=o.layerDefinition||o;const n=o.drawingInfo?.renderer;if(n){const p=V(n,o,s)||void 0;return p||O.getLogger(this).error("Failed to create renderer",{rendererDefinition:o.drawingInfo.renderer,layer:this,context:s}),p}return pe(o,s)}async connect(e){const[{createConnection:o}]=await Promise.all([f(()=>import("./createConnection-DnPvpMKL.js"),__vite__mapDeps([13,3,2,4,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url),this.load()]),s=this.geometryType?h.toJSON(this.geometryType):null,{customParameters:n=null,definitionExpression:p=null,geometryDefinition:c=null,maxReconnectionAttempts:R=0,maxReconnectionInterval:$=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),d=o(this.parsedUrl,this.spatialReference,T,s,p,c,R,$,n??void 0),_=D([this.on("send-message-to-socket",u=>d.sendMessageToSocket(u)),this.on("send-message-to-client",u=>d.sendMessageToClient(u))]);return d.once("destroy",_.remove),d}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return ye(this,e)}createQuery(){const e=new he;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,o){if(!this.fields)return null;let s=null;return this.fields.some(n=>(n.name===e&&(s=n.domain),!!s)),s}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(m.SAVE,e)}async saveAs(e,o){return this._debouncedSaveOperations(m.SAVE_AS,o,e)}write(e,o){const s=o?.messages;return this.webSocketUrl?(s?.push(S(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,o):(s?.push(S(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:o}=await k(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=o}}else{if(!this.timeInfo?.trackIdField)throw new l("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const o=this.fields.find(s=>s.type==="oid")?.name;if(!o)throw new l("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=o}if(!this.fields)throw new l("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(o=>o.name===this.objectIdField)||this.fields.push(new le({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new l("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),v(this.renderer,this.fieldsIndex),C(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),ue(this,{origin:"service"})}};t([r({type:String})],i.prototype,"copyright",void 0),t([r({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r({type:String})],i.prototype,"displayField",void 0),t([r({type:fe})],i.prototype,"elevationInfo",void 0),t([r({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],i.prototype,"featureReduction",null),t([r(b.fields)],i.prototype,"fields",void 0),t([r(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([r({type:U,json:{name:"layerDefinition.definitionGeometry",write:!0}})],i.prototype,"geometryDefinition",void 0),t([r({type:h.apiValues,json:{read:{reader:h.read}}})],i.prototype,"geometryType",void 0),t([r(te)],i.prototype,"labelsVisible",void 0),t([r({type:[me],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ce},write:!0}})],i.prototype,"labelingInfo",void 0),t([r(ie)],i.prototype,"legendEnabled",void 0),t([r({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],i.prototype,"listMode",void 0),t([r({type:g})],i.prototype,"maxReconnectionAttempts",void 0),t([r({type:g})],i.prototype,"maxReconnectionInterval",void 0),t([r(re)],i.prototype,"maxScale",void 0),t([r(oe)],i.prototype,"minScale",void 0),t([r({type:String})],i.prototype,"objectIdField",void 0),t([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([r({readOnly:!0})],i.prototype,"outFields",void 0),t([r(se)],i.prototype,"popupEnabled",void 0),t([r({type:N,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([r({type:j})],i.prototype,"purgeOptions",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"refreshInterval",void 0),t([r({types:J,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:z,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([w("service","renderer",["drawingInfo.renderer","defaultSymbol"]),w("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([r((()=>{const e=L(ne);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],i.prototype,"screenSizePerspectiveEnabled",void 0),t([r()],i.prototype,"sourceJSON",void 0),t([r({type:x,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([r({json:{read:!1}})],i.prototype,"type",void 0),t([r(ae)],i.prototype,"url",void 0),t([r({type:Number})],i.prototype,"updateInterval",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"useViewTime",void 0),t([r({type:String})],i.prototype,"webSocketUrl",void 0),i=t([I("esri.layers.StreamLayer")],i);const Ft=i;export{Ft as default};
