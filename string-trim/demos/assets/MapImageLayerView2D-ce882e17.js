import { aX as e, aY as y$1, fp as j, aZ as c, fq as m, aS as c$1, ah as b$1, K as s$1, b3 as d$1 } from './main-a7dddec6.js';
import { a } from './BitmapContainer-0ac171df.js';
import { m as m$1, u } from './LayerView-304d084f.js';
import { $ } from './GraphicsView2D-ea5cc507.js';
import { h } from './HighlightGraphicContainer-9484ed54.js';
import { v } from './ExportStrategy-4b1bb24b.js';
import { i } from './RefreshableLayerView-0b0ab4f8.js';
import { U, r } from './drapedUtils-0dc99019.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-50efbd79.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-9509222c.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-5b90fc04.js';
import './Program-868bb31c.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-36573304.js';
import './Container-217b1704.js';
import './highlightReasons-a3d2d3c3.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-85e1162f.js';
import './UpdateTracking2D-2171f1f0.js';
import './TurboLine-c4d37b6b.js';
import './GeometryUtils-265b8927.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './Util-c8aa4065.js';
import './constants-412c3a33.js';
import './AttributeStore-21c5564d.js';
import './TimeOnly-d457dfa5.js';
import './timeSupport-0f053586.js';
import './json-aab78c64.js';
import './FeatureCommandQueue-be221c85.js';
import './normalizeUtilsSync-7fdaae23.js';
import './AGraphicContainer-7b545202.js';
import './TechniqueInstance-31b1b597.js';
import './TileContainer-0ce64ef4.js';
import './vec3f32-cca6bca6.js';
import './Bitmap-165221a0.js';
import './popupUtils-2d3b1fd5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const p=p=>{let a=class extends p{initialize(){this.exportImageParameters=new m({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y$1()],a.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],a.prototype,"floors",null),e([y$1({readOnly:!0})],a.prototype,"exportImageVersion",null),e([y$1()],a.prototype,"layer",void 0),e([y$1()],a.prototype,"suspended",void 0),e([y$1(j)],a.prototype,"timeExtent",void 0),a=e([c("esri.views.layers.MapImageLayerView")],a),a};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(p(i(m$1(u)))){constructor(){super(...arguments),this._highlightGraphics=new c$1,this._updateHash="";}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a$1=i>=10;this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._highlightView=new $({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(t,e)=>r(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a$1,hidpi:!0}),this.addAttachHandles(d$1((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};e([y$1()],y.prototype,"strategy",void 0),e([y$1()],y.prototype,"updating",void 0),y=e([c("esri.views.2d.layers.MapImageLayerView2D")],y);const w=y;

export { w as default };
