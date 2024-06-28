import { aX as e, aY as y$1, fp as j, aZ as c, fq as m, aS as c$1, ah as b$1, K as s$1, b3 as d$1 } from './main-94362e0c.js';
import { a } from './BitmapContainer-c22c7a17.js';
import { m as m$1, u } from './LayerView-3378a41b.js';
import { $ } from './GraphicsView2D-8f23435f.js';
import { h } from './HighlightGraphicContainer-730e92a2.js';
import { v } from './ExportStrategy-a1e6e4a7.js';
import { i } from './RefreshableLayerView-7ff0f0ed.js';
import { U, r } from './drapedUtils-f02b010a.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-206bc867.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-7635de25.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-7273ab1a.js';
import './Program-da4c27a4.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-86b5eea5.js';
import './Container-a73c9c87.js';
import './highlightReasons-b35f66f2.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-1e14bf20.js';
import './UpdateTracking2D-434d8c34.js';
import './TurboLine-a31d277b.js';
import './GeometryUtils-be4b8840.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './Util-6f67b5e7.js';
import './constants-412c3a33.js';
import './AttributeStore-9144eed5.js';
import './TimeOnly-94a3c2fd.js';
import './timeSupport-4c9b8bb2.js';
import './json-aab78c64.js';
import './FeatureCommandQueue-ab58c794.js';
import './normalizeUtilsSync-f3b67415.js';
import './AGraphicContainer-3bdc3105.js';
import './TechniqueInstance-e2c78e5a.js';
import './TileContainer-d8261971.js';
import './vec3f32-cca6bca6.js';
import './Bitmap-a97f4121.js';
import './popupUtils-64b9b271.js';

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
