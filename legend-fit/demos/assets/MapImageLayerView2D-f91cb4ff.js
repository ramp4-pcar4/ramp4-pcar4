import { aX as e, aY as y$1, fp as j, aZ as c, fq as m, aS as c$1, ah as b$1, K as s$1, b3 as d$1 } from './main-91ff489c.js';
import { a } from './BitmapContainer-3a1666c1.js';
import { m as m$1, u } from './LayerView-77f384fe.js';
import { $ } from './GraphicsView2D-4dbcf1af.js';
import { h } from './HighlightGraphicContainer-b81428f2.js';
import { v } from './ExportStrategy-d6c3b088.js';
import { i } from './RefreshableLayerView-f64c2704.js';
import { U, r } from './drapedUtils-58874ad6.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-8cf05d2e.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-da0cf38d.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-6b729e93.js';
import './Program-e5a7f622.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-b1d2e404.js';
import './Container-3f7427f7.js';
import './highlightReasons-4c42ec8b.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-c205a247.js';
import './UpdateTracking2D-628b2fab.js';
import './TurboLine-c38e9b8f.js';
import './GeometryUtils-cf11e042.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './Util-1d5fc3cd.js';
import './constants-412c3a33.js';
import './AttributeStore-d5c9a60d.js';
import './TimeOnly-f41d896a.js';
import './timeSupport-1a4cb1f7.js';
import './json-aab78c64.js';
import './FeatureCommandQueue-208b35f1.js';
import './normalizeUtilsSync-4d6860f7.js';
import './AGraphicContainer-db65826d.js';
import './TechniqueInstance-17624e4d.js';
import './TileContainer-b718e0f9.js';
import './vec3f32-cca6bca6.js';
import './Bitmap-de04940e.js';
import './popupUtils-15182ecd.js';

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
