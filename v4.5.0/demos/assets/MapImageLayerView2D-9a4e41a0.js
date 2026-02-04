import { e, y, fb as b, k as a, fc as c, bl as i$1, bq as j$1, p as s$1, bp as l$1 } from './main-5658cd6e.js';
import { a as a$1 } from './BitmapContainer-1c30d2c9.js';
import { f as f$1, u } from './LayerView-cbc55a02.js';
import { a as ae } from './GraphicsView2D-d60c0d5b.js';
import { n } from './HighlightGraphicContainer-ffe99ebe.js';
import { v } from './ExportStrategy-9c92598e.js';
import { i } from './RefreshableLayerView-bc0c3310.js';
import { S, a as a$2 } from './drapedUtils-4b0a324f.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-ac280853.js';
import './definitions-281daf3f.js';
import './VertexArrayObject-2ba4bad7.js';
import './Texture-aefe232f.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';
import './color-6132b2c2.js';
import './enums-9c1aeae9.js';
import './ProgramTemplate-cc07a7d7.js';
import './MaterialKey-99ff6359.js';
import './utils-6a1fc53c.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './Container-1d8ffe9c.js';
import './earcut-336027d9.js';
import './ExpandedCIM-78770fa3.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-ec270d9a.js';
import './floatRGBA-0f682c7a.js';
import './normalizeUtilsSync-c3a052ce.js';
import './projectionSupport-90bb00b7.js';
import './json-ce6e5728.js';
import './AttributeStoreView-2c6b7676.js';
import './TiledDisplayObject-4282c17d.js';
import './visualVariablesUtils-93e46889.js';
import './visualVariablesUtils-1950eea1.js';
import './Matcher-df890909.js';
import './tileUtils-f6baf24c.js';
import './TurboLine-b7a337a5.js';
import './devEnvironmentUtils-d73295e7.js';
import './schemaUtils-b103f304.js';
import './util-0ab7a9cb.js';
import './ComputedAttributeStorage-8c98a3c7.js';
import './arcadeTimeUtils-53abd942.js';
import './executionError-ed2c63c0.js';
import './centroid-c9063998.js';
import './BaseGraphicContainer-6190d2a2.js';
import './FeatureContainer-eea18812.js';
import './TileContainer-76cc62ef.js';
import './vec3f32-b6e01a26.js';
import './Bitmap-076fab0d.js';
import './popupUtils-678d5012.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const p=p=>{let a$1=class a extends p{initialize(){this.exportImageParameters=new c({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y()],a$1.prototype,"exportImageParameters",void 0),e([y({readOnly:!0})],a$1.prototype,"floors",null),e([y({readOnly:!0})],a$1.prototype,"exportImageVersion",null),e([y()],a$1.prototype,"layer",void 0),e([y()],a$1.prototype,"suspended",void 0),e([y(b)],a$1.prototype,"timeExtent",void 0),a$1=e([a("esri.views.layers.MapImageLayerView")],a$1),a$1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let f=class extends(p(i(f$1(u)))){constructor(){super(...arguments),this._highlightGraphics=new i$1,this._updateHash="";}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{j$1(t)||s$1.getLogger(this.declaredClass).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a=i>=10;this._bitmapContainer=new a$1,this.container.addChild(this._bitmapContainer),this._highlightView=new ae({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new S({createFetchPopupFeaturesQueryGeometry:(t,e)=>a$2(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a,hidpi:!0}),this.addAttachHandles(l$1((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};e([y()],f.prototype,"strategy",void 0),e([y()],f.prototype,"updating",void 0),f=e([a("esri.views.2d.layers.MapImageLayerView2D")],f);const w=f;

export { w as default };
