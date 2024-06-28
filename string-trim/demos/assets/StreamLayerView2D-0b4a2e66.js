import { aX as e, aY as y, fy as d, aZ as c, b3 as d$1, s, fz as r$1, az as e$1, b6 as d$2 } from './main-a7dddec6.js';
import { n, X } from './FeatureLayerView2D-88c2cde6.js';
import './preload-helper-a4975f27.js';
import './Container-217b1704.js';
import './highlightReasons-a3d2d3c3.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-5b90fc04.js';
import './LayerView-304d084f.js';
import './TechniqueInstance-31b1b597.js';
import './UpdateTracking2D-2171f1f0.js';
import './TurboLine-c4d37b6b.js';
import './enums-d24bcbbf.js';
import './earcut-85e1162f.js';
import './GeometryUtils-265b8927.js';
import './Rect-09e0f861.js';
import './LabelMetric-9509222c.js';
import './Program-868bb31c.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-c8aa4065.js';
import './constants-412c3a33.js';
import './TileContainer-0ce64ef4.js';
import './WGLContainer-50efbd79.js';
import './ProgramTemplate-36573304.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-3f6fc77b.js';
import './floatRGBA-4816416f.js';
import './FeatureCommandQueue-be221c85.js';
import './HighlightCounter-011ed14c.js';
import './popupUtils-2d3b1fd5.js';
import './RefreshableLayerView-0b0ab4f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const r=r=>{let i=class extends r{resume(){this._isUserPaused=!1,this.suspended||this._doResume();}pause(){this._isUserPaused=!0,this.suspended||this._doPause();}disconnect(){this._doDisconnect();}connect(){this._doConnect();}clear(){this._doClear();}constructor(...s){super(...s),this._isUserPaused=!1,this.filter=null;}get connectionStatus(){return (this._isUserPaused||this.suspended)&&"connected"===this._streamConnectionStatus?"paused":this._streamConnectionStatus}_onSuspendedChange(s){s?this._doPause():this._isUserPaused||this._doResume();}};return e([y()],i.prototype,"_isUserPaused",void 0),e([y({readOnly:!0})],i.prototype,"connectionStatus",null),e([y({type:d})],i.prototype,"filter",void 0),i=e([c("esri.layers.mixins.StreamLayerView")],i),i};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p=class extends(r(X)){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null;}initialize(){this.addHandles([d$1((()=>this.layer.customParameters),(e=>this._worker.streamMessenger.updateCustomParameters(e))),this.layer.on("send-message-to-socket",(e=>this._worker.streamMessenger.sendMessageToSocket(e))),this.layer.on("send-message-to-client",(e=>{this._worker.streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&"clear"===e.type&&this.incrementSourceRefreshVersion();})),d$1((()=>this.layer.purgeOptions),(()=>this._update())),d$1((()=>this.suspended),this._onSuspendedChange.bind(this))],"constructor"),this._doResume();}destroy(){this._doPause();}get connectionError(){return this.pipelineErrorString?new s("stream-controller",this.pipelineErrorString):null}on(e,r){if(Array.isArray(e))return r$1(e.map((e=>this.on(e,r))));const o=["data-received","message-received"].includes(e);o&&this._worker.streamMessenger.enableEvent(e,!0);const n=super.on(e,r),i=this;return e$1((()=>{n.remove(),o&&(i._worker.closed||i.hasEventListener(e)||i._worker.streamMessenger.enableEvent(e,!1));}))}queryLatestObservations(e,t){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return n(this._worker.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then((e=>{const r=d$2.fromJSON(e);return r.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),r})),new d$2({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected";}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){null!=this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null);}_doResume(){this._refreshInterval=setInterval((()=>this.incrementSourceRefreshVersion()),this.layer.updateInterval);}_doDisconnect(){this._worker.streamMessenger.disconnect(),this._doPause();}_doConnect(){this._worker.streamMessenger.connect(),this.resume();}_doClear(){this._worker.streamMessenger.clear(),null==this._refreshInterval&&this.incrementSourceRefreshVersion();}_createClientOptions(){const e=super._createClientOptions(),r=this;return {...e,get container(){return r.featureContainer},setProperty:e=>{this.set(e.propertyName,e.value);}}}};e([y()],p.prototype,"pipelineConnectionStatus",void 0),e([y()],p.prototype,"pipelineErrorString",void 0),e([y({readOnly:!0})],p.prototype,"connectionError",null),e([y({readOnly:!0})],p.prototype,"_streamConnectionStatus",null),p=e([c("esri.views.2d.layers.StreamLayerView2D")],p);const u=p;

export { u as default };
