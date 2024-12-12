import { bd as e, be as y$1, bf as a, fG as y$2, b8 as c$1, ax as b$1, G as n$1, bj as d$1 } from './main-YSH8Qvd0.js';
import { a as a$1 } from './BitmapContainer-C8deJCgY.js';
import { f, y as y$3 } from './LayerView-CkazLMcs.js';
import { V } from './GraphicsView2D-taKnaYk_.js';
import { h } from './HighlightGraphicContainer-qyWKG8X_.js';
import { _ as _$1 } from './ExportStrategy-CQPv8AOP.js';
import { i as i$1 } from './timeSupport-DMhNfgYx.js';
import { i as i$2 } from './RefreshableLayerView-qbhaRSDv.js';
import { _, r } from './drapedUtils-CfndCFvb.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-D6jupTuP.js';
import './definitions-BdwlvHBE.js';
import './LabelMetric-Bnf6Ud2A.js';
import './enums-CHdyfzUK.js';
import './Texture-B2fqbWGu.js';
import './enums-CwcDCDam.js';
import './Program-B_1Ck0yX.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './ProgramTemplate-0vuAPRyT.js';
import './vec3f32-CmlAce5k.js';
import './Container-Bjkx24f1.js';
import './highlightReasons-C6YF5eGX.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-1p-jfyBa.js';
import './layerViewUtils-CRtvGSrJ.js';
import './UpdateTracking2D-C4MnIKv0.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-lYpV3DRp.js';
import './Rect-zdvLIBQm.js';
import './BindType-DQnxDFt3.js';
import './Util-CC8AWGD5.js';
import './AttributeStore-l_K34xDr.js';
import './TimeOnly-W1Zp8skj.js';
import './timeSupport-C_3DlbE5.js';
import './json-DYk0G9qS.js';
import './FeatureCommandQueue-DtOJUJHH.js';
import './constants-BNnV1ogR.js';
import './normalizeUtilsSync-eOeax9mS.js';
import './AGraphicContainer-DmoCcfAn.js';
import './TechniqueInstance-CS_tnRdI.js';
import './TileContainer-DZeC-9ns.js';
import './Bitmap-DNVVr82l.js';
import './popupUtils-DFAAp86T.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const i=i=>{let p=class extends i{initialize(){this.exportImageParameters=new y$2({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return i$1(this.layer,this.view?.timeExtent,this._get("timeExtent"))}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y$1()],p.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],p.prototype,"floors",null),e([y$1({readOnly:!0})],p.prototype,"exportImageVersion",null),e([y$1()],p.prototype,"layer",void 0),e([y$1()],p.prototype,"suspended",void 0),e([y$1({readOnly:!0})],p.prototype,"timeExtent",null),p=e([a("esri.views.layers.MapImageLayerView")],p),p};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let y=class extends(i(i$2(f(y$3)))){constructor(){super(...arguments),this._highlightGraphics=new c$1,this._updateHash="";}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{b$1(t)||n$1.getLogger(this).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a=i>=10;this._bitmapContainer=new a$1,this.container.addChild(this._bitmapContainer),this._highlightView=new V({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new _({createFetchPopupFeaturesQueryGeometry:(t,e)=>r(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new _$1({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a,hidpi:!0}),this.addAttachHandles(d$1((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};e([y$1()],y.prototype,"strategy",void 0),e([y$1()],y.prototype,"updating",void 0),y=e([a("esri.views.2d.layers.MapImageLayerView2D")],y);const w=y;

export { w as default };
