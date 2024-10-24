import { aW as e, aX as y, fB as d, aY as c, b2 as d$1, s, fC as r$1, ax as e$1, b5 as d$2 } from './main-BVpNLj1j.js';
import { n, X } from './FeatureLayerView2D-Cx1K7nRo.js';
import './preload-helper-dJJaZANz.js';
import './Container-N1UGHqiY.js';
import './highlightReasons-CBVmPcjl.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DwRYwIAV.js';
import './LayerView-CGDq05jx.js';
import './TechniqueInstance-Cn96Z8wd.js';
import './UpdateTracking2D-CdHXnmrw.js';
import './TurboLine-C-cBd6cu.js';
import './enums-DZmWLm_j.js';
import './earcut-Ces0sJlT.js';
import './GeometryUtils-rNnUWjgc.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-BNd1R4XD.js';
import './Program-BJsRkrt5.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-D_4kYWjS.js';
import './constants-C0QDwCF4.js';
import './TileContainer-C1fXRyTS.js';
import './WGLContainer-hPLtVICn.js';
import './ProgramTemplate-WEzlTSE1.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-B4BjYHV8.js';
import './floatRGBA-HvFShJLA.js';
import './FeatureCommandQueue-ODu-FrPJ.js';
import './HighlightCounter-CslPQbUe.js';
import './popupUtils-CfbEL59w.js';
import './RefreshableLayerView-B_KDNBDJ.js';

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
