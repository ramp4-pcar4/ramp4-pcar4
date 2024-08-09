import { aX as e, aY as y$1, fs as j, aZ as c, ft as m, aS as c$1, ag as b$1, J as s$1, b3 as d$1 } from './main-23ddedaa.js';
import { a } from './BitmapContainer-67006622.js';
import { m as m$1, u } from './LayerView-ece9b0f8.js';
import { $ } from './GraphicsView2D-92ccd19b.js';
import { h } from './HighlightGraphicContainer-31f03e73.js';
import { v } from './ExportStrategy-32aa2ca5.js';
import { i } from './RefreshableLayerView-3487cdff.js';
import { U, r } from './drapedUtils-eee20066.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-a1febf26.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-512f9254.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-549929c3.js';
import './Program-3228e64a.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-17449cf2.js';
import './Container-5226d691.js';
import './highlightReasons-cfe0c5c9.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-62f1f400.js';
import './UpdateTracking2D-5984d619.js';
import './TurboLine-a2bd5501.js';
import './GeometryUtils-9a5d41df.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './Util-4ff81b33.js';
import './constants-412c3a33.js';
import './AttributeStore-1fed0831.js';
import './TimeOnly-017a62bf.js';
import './timeSupport-16b69fd5.js';
import './json-aab78c64.js';
import './FeatureCommandQueue-5ea75ca6.js';
import './normalizeUtilsSync-27e7447d.js';
import './AGraphicContainer-7b068371.js';
import './TechniqueInstance-a73a683d.js';
import './TileContainer-367cb322.js';
import './vec3f32-cca6bca6.js';
import './Bitmap-2fd54174.js';
import './popupUtils-f05ee114.js';

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
