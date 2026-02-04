import { e, y as y$1, k as a, bp as l$1, c as s, bX as r, bb as x, t, r as r$1 } from './main-5658cd6e.js';
import D from './FeatureLayerView2D-f528f40a.js';
import { e as e$1 } from './util-0ab7a9cb.js';
import './preload-helper-a4975f27.js';
import './Container-1d8ffe9c.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-aefe232f.js';
import './LayerView-cbc55a02.js';
import './schemaUtils-b103f304.js';
import './color-6132b2c2.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './utils-6a1fc53c.js';
import './MaterialKey-99ff6359.js';
import './visualVariablesUtils-1950eea1.js';
import './ExpandedCIM-78770fa3.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-ec270d9a.js';
import './floatRGBA-0f682c7a.js';
import './popupUtils-678d5012.js';
import './RefreshableLayerView-bc0c3310.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function u(e,t$1){if(t(e)&&t(t$1))return null;const r={};return r$1(t$1)&&(r.geometry=t$1.toJSON()),r$1(e)&&(r.where=e),r}let m=class extends D{constructor(){super(...arguments),this._enabledEventTypes=new Set,this._isUserPaused=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.addHandles([l$1((()=>this.layer.customParameters),(e=>this._proxy.updateCustomParameters(e))),this.layer.on("send-message-to-socket",(e=>this._proxy.sendMessageToSocket(e))),this.layer.on("send-message-to-client",(e=>this._proxy.sendMessageToClient(e))),l$1((()=>this.layer.purgeOptions),(()=>this._update())),l$1((()=>this.suspended),(e=>{e?this._proxy.pauseStream():this._isUserPaused||this._proxy.resumeStream();}))],"constructor");}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}pause(){this._isUserPaused=!0,this._proxy.pauseStream();}resume(){this._isUserPaused=!1,this._proxy.resumeStream();}on(e,t){if(Array.isArray(e))return r(e.map((e=>this.on(e,t))));const s=["data-received","message-received"].includes(e);s&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const o=super.on(e,t),i=this;return {remove(){o.remove(),s&&(i._proxy.closed||i.hasEventListener(e)||i._proxy.enableEvent(e,!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=x.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}detach(){super.detach(),this.connectionStatus="disconnected";}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(u(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),s=e$1(e.geometryType),o=e.timeInfo&&e.timeInfo.toJSON()||null,i=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:s,objectIdField:t,timeInfo:o,source:this.layer.parsedUrl,serviceFilter:u(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:i,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([y$1()],m.prototype,"errorString",void 0),e([y$1({readOnly:!0})],m.prototype,"connectionError",null),e([y$1()],m.prototype,"connectionStatus",void 0),m=e([a("esri.views.2d.layers.StreamLayerView2D")],m);const y=m;

export { y as default };
