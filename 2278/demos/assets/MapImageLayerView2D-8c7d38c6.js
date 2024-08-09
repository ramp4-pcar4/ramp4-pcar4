import { aX as e, aY as y$1, fs as j, aZ as c, ft as m, aS as c$1, ag as b$1, J as s$1, b3 as d$1 } from './main-e59ca501.js';
import { a } from './BitmapContainer-8de112cd.js';
import { m as m$1, u } from './LayerView-e7060a91.js';
import { $ } from './GraphicsView2D-cef5c151.js';
import { h } from './HighlightGraphicContainer-e1900efe.js';
import { v } from './ExportStrategy-8b01f291.js';
import { i } from './RefreshableLayerView-e37e8ba1.js';
import { U, r } from './drapedUtils-f6bd891c.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-43df48a1.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-92b6cc5f.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-982364b2.js';
import './Program-b3e4c384.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-fa9ffc66.js';
import './Container-4363ce99.js';
import './highlightReasons-4f8752c8.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-53600461.js';
import './UpdateTracking2D-fc8d78db.js';
import './TurboLine-bc81f071.js';
import './GeometryUtils-4a87f9f7.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './Util-1acb9ed4.js';
import './constants-412c3a33.js';
import './AttributeStore-40151264.js';
import './TimeOnly-785ca0fc.js';
import './timeSupport-3e6f4d01.js';
import './json-aab78c64.js';
import './FeatureCommandQueue-318803fc.js';
import './normalizeUtilsSync-07a0d594.js';
import './AGraphicContainer-8318b2c6.js';
import './TechniqueInstance-8727be57.js';
import './TileContainer-d1770f32.js';
import './vec3f32-cca6bca6.js';
import './Bitmap-1936fa59.js';
import './popupUtils-7531b4d7.js';

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
