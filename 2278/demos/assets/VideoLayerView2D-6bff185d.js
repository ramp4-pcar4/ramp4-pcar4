import { dX as i$1, c2 as f$1, aX as e, aY as y, aZ as c, aj as u$1, ez as h, a5 as c$1, ba as u$2, b3 as d$1, b5 as P$1 } from './main-e59ca501.js';
import { m as m$1, u as u$3 } from './LayerView-e7060a91.js';
import { t } from './GraphicContainer-4e760571.js';
import { $ } from './GraphicsView2D-cef5c151.js';
import './preload-helper-a4975f27.js';
import './Container-4363ce99.js';
import './highlightReasons-4f8752c8.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-982364b2.js';
import './AGraphicContainer-8318b2c6.js';
import './TechniqueInstance-8727be57.js';
import './UpdateTracking2D-fc8d78db.js';
import './TurboLine-bc81f071.js';
import './enums-d24bcbbf.js';
import './earcut-53600461.js';
import './GeometryUtils-4a87f9f7.js';
import './Rect-09e0f861.js';
import './LabelMetric-92b6cc5f.js';
import './Program-b3e4c384.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-1acb9ed4.js';
import './constants-412c3a33.js';
import './TileContainer-d1770f32.js';
import './WGLContainer-43df48a1.js';
import './ProgramTemplate-fa9ffc66.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-318803fc.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-40151264.js';
import './TimeOnly-785ca0fc.js';
import './timeSupport-3e6f4d01.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-07a0d594.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p=class extends(i$1(f$1)){constructor(o){super(o),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null;}};e([y({type:Boolean})],p.prototype,"frameCenter",void 0),e([y({type:Boolean})],p.prototype,"frameOutline",void 0),e([y({type:Boolean})],p.prototype,"lineOfSight",void 0),e([y({type:Boolean})],p.prototype,"sensorLocation",void 0),e([y({type:Boolean})],p.prototype,"sensorTrail",void 0),p=e([c("esri.layers.support.TelemetryDisplay")],p);const i=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const f=new u$1([255,127,0]);let g=class extends(m$1(u$3)){constructor(){super(...arguments),this._graphicsLayer=new h,this._frameOutlineGraphic=new c$1({symbol:{type:"simple-fill",outline:{type:"simple-line",color:f}}}),this._sensorTrailGraphic=new c$1({symbol:{type:"simple-line",color:f}}),this._lineOfSightGraphic=new c$1({symbol:{type:"simple-line",color:f}}),this._sensorLocationGraphic=new c$1({symbol:{type:"simple-marker",color:f}}),this._frameCenterGraphic=new c$1({symbol:{type:"simple-marker",color:f}}),this.layer=null,this.symbolColor=f,this.visibleTelemetryElements=null;}destroy(){this._graphicsLayer=u$2(this._graphicsLayer);}initialize(){this.addHandles(d$1((()=>this.symbolColor),(()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor;}),P$1)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new i({frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0});}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new t(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([d$1((()=>[this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight]),(()=>this._updateVisibleTelemetryElements()),P$1),d$1((()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight]),(()=>this._updateGraphicGeometries()),P$1)]);}detach(){this.container.removeAllChildren(),this.graphicsView=u$2(this.graphicsView);}supportsSpatialReference(e){return !0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange();}update(e){this.graphicsView.processUpdate(e);}isUpdating(){return !this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail);}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:i}=this;e&&i&&(i.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,i.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,i.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,i.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,i.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null);}};e([y()],g.prototype,"graphicsView",void 0),e([y()],g.prototype,"layer",void 0),e([y()],g.prototype,"symbolColor",void 0),e([y({type:i})],g.prototype,"visibleTelemetryElements",void 0),g=e([c("esri.views.2d.layers.VideoLayerView2D")],g);const u=g;

export { u as default };
