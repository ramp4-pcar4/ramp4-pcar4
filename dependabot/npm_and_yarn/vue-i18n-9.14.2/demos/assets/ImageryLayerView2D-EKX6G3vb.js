import { bd as e, be as y, bf as a, e6 as S, ax as b$1, G as n$1, a1 as d$1, ke as M, fb as k, a_ as w$1, kf as m$2, i8 as f$2, bj as d$3, gX as A, U, cZ as d$4, s, dN as s$1, fo as b$2, _ as _$1, b8 as c$1, fA as C, a0 as V$1, aQ as e$1, N as has } from './main-C4Zge2Yj.js';
import { d as d$2, f as f$1, a as d$5 } from './RasterVFDisplayObject-B8uSVx21.js';
import { f as f$3, y as y$1 } from './LayerView-CLnau-rv.js';
import { V } from './GraphicsView2D-DJmkMDSq.js';
import { h as h$1 } from './HighlightGraphicContainer-DZpq5lWu.js';
import { a as a$1 } from './BitmapContainer-CGlpDdEd.js';
import { h, E } from './Container-BRZw5EQp.js';
import { l } from './Bitmap-7_COT5Xt.js';
import { _ } from './ExportStrategy-C_m76hpb.js';
import { J } from './rasterProjectionHelper-CKPBrrjE.js';
import { n } from './WGLContainer-F_pfnvV9.js';
import { i } from './timeSupport-C_oYRIWg.js';
import { p as p$1 } from './popupUtils-D5fhSr9Z.js';
import { i as i$1 } from './RefreshableLayerView-BRLGk7d3.js';
import './preload-helper-dJJaZANz.js';
import './Program-BvYEs7q3.js';
import './Texture-BghNYWXB.js';
import './enums-CwcDCDam.js';
import './ProgramTemplate-x-eDnpWW.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './LabelMetric-BexxQf0w.js';
import './enums-CHdyfzUK.js';
import './layerViewUtils-CRtvGSrJ.js';
import './UpdateTracking2D-wzUiT6rH.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-CEiQRDGb.js';
import './definitions-BdwlvHBE.js';
import './Rect-zdvLIBQm.js';
import './BindType-DQnxDFt3.js';
import './Util-DK31hApB.js';
import './highlightReasons-CvAQeGxW.js';
import './AttributeStore-B7TKqkjC.js';
import './TimeOnly-DperYbM1.js';
import './timeSupport-bUiMegUS.js';
import './json-DYk0G9qS.js';
import './FeatureCommandQueue-BZh52aGy.js';
import './constants-BNnV1ogR.js';
import './normalizeUtilsSync-a1mvYUyC.js';
import './AGraphicContainer-nESw6VEI.js';
import './TechniqueInstance-sWqIDujE.js';
import './TileContainer-DfSQBEsU.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-Dk31jkT2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let m$1=class m extends S{constructor(){super(...arguments),this.attached=!1,this.container=new h,this.updateRequested=!1,this.type="imagery",this._bitmapView=new a$1;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch((t=>{b$1(t)||n$1.getLogger(this).error(t);}));}hitTest(t){return new d$1({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new _({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1;}redraw(){this.strategy.updateExports((async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=t=>this.layer.pixelFilter?this.layer.applyFilter(t):{...i,extent:e.extent};})).catch((t=>{b$1(t)||n$1.getLogger(this).error(t);}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(1===t.length&&t[0].source)return {extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map((t=>t.source)).filter((t=>t.extent&&t.extent.intersects(e))).map((t=>({extent:t.extent,pixelBlock:t.originalPixelBlock}))),r=M(i,e);return null!=r?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(t,e,i,r);if(s.imageBitmap)return s.imageBitmap;const a=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),o=new l(a.pixelBlock,a.extent?.clone(),s.pixelData.pixelBlock);return o.filter=t=>this.layer.applyFilter(t),o}};e([y()],m$1.prototype,"attached",void 0),e([y()],m$1.prototype,"container",void 0),e([y()],m$1.prototype,"layer",void 0),e([y()],m$1.prototype,"strategy",void 0),e([y()],m$1.prototype,"timeExtent",void 0),e([y()],m$1.prototype,"view",void 0),e([y()],m$1.prototype,"updateRequested",void 0),e([y()],m$1.prototype,"updating",null),e([y()],m$1.prototype,"type",void 0),m$1=e([a("esri.views.2d.layers.imagery.ImageryView2D")],m$1);const d=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class t extends n{constructor(){super(...arguments),this.symbolTypes=["triangle"];}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[d$2],target:()=>this.children,drawPhase:E.MAP});return [...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===E.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let c=class extends S{constructor(e){super(e),this._loading=null,this.update=k(((e,t)=>this._update(e,t).catch((e=>{b$1(e)||n$1.getLogger(this).error(e);}))));}get updating(){return !!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender();}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:o}=e.state,s=new w$1({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:o}),[a,l]=e.state.size;this._loading=this.fetchPixels(s,a,l,i);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null;}_addToDisplay(e,t,i){if(null==e.pixelBlock)return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:r,pixelBlock:o}=e,s=new f$1(o);s.offset=[0,0],s.symbolizerParameters=t,s.rawPixelData=e,s.invalidateVAO(),s.x=r.xmin,s.y=r.ymax,s.pixelRatio=i.pixelRatio,s.rotation=i.rotation,s.resolution=i.resolution,s.width=o.width*t.symbolTileSize,s.height=o.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(s);}};e([y()],c.prototype,"fetchPixels",void 0),e([y()],c.prototype,"container",void 0),e([y()],c.prototype,"_loading",void 0),e([y()],c.prototype,"updating",null),c=e([a("esri.views.2d.layers.imagery.ImageryVFStrategy")],c);const p=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let f=class extends S{constructor(){super(...arguments),this.attached=!1,this.container=new t,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,r,i)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:o,width:n,height:l}=m$2(t,e,r,a,s);if(null!=s&&!s.intersects(t))return {extent:o,pixelBlock:null};const m={bbox:`${o.xmin}, ${o.ymin}, ${o.xmax}, ${o.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(m)){const t=this.getPixelData();if(null!=t){if(`${t.extent.xmin}, ${t.extent.ymin}, ${t.extent.xmax}, ${t.extent.ymax}`===m.bbox)return t}}const{pixelData:c}=await this.layer.fetchImage(o,n,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:i});this._dataParameters=m;const p=c?.pixelBlock;if(null==p)return {extent:o,pixelBlock:null};return {extent:o,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?f$2(p,"vector-uv"):p}};}get updating(){return !this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new p({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(d$3((()=>this.layer.renderer),(t=>this._updateSymbolizerParams(t)),A),"attach");}detach(){this._strategy.destroy(),this.container.children.forEach((t=>t.destroy())),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null;}getPixelData(){const t=this.container.children[0]?.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:r}=t;return {extent:e,pixelBlock:r}}hitTest(t){return new d$1({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams).catch((t=>{b$1(t)||n$1.getLogger(this).error(t);}));}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams));}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,r=this._dataParameters.time===t.time,i=this._dataParameters.symbolTileSize===t.symbolTileSize,s=this._dataParameters.bbox===t.bbox;return e&&r&&i&&s}async _getProjectedFullExtent(t){try{return J(this.layer.fullExtent,t)}catch(e){try{const e=(await U(this.layer.url,{query:{option:"footprints",outSR:d$4(t),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return e?w$1.fromJSON(e):null}catch{return null}}}_updateSymbolizerParams(t){"vector-field"===t.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}));}};e([y()],f.prototype,"attached",void 0),e([y()],f.prototype,"container",void 0),e([y()],f.prototype,"layer",void 0),e([y()],f.prototype,"timeExtent",void 0),e([y()],f.prototype,"type",void 0),e([y()],f.prototype,"view",void 0),e([y()],f.prototype,"updating",null),f=e([a("esri.views.2d.layers.imagery.VectorFieldView2D")],f);const g=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const m=m=>{let u=class extends m{constructor(){super(...arguments),this.view=null;}get timeExtent(){return i(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,o){const{layer:s$2}=this;if(!e)throw new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s$2});const{popupEnabled:p}=s$2,m=p$1(s$2,o);if(!p||null==m)return [];const u=await m.getRequiredFields();s$1(o);const c=new b$2;c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=u,c.outSpatialReference=e.spatialReference;const{resolution:l,spatialReference:y}=this.view,h="2d"===this.view.type?new _$1(l,l,y):new _$1(.5*l,.5*l,y),{returnTopmostRaster:d,showNoDataRecords:f}=m.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},w={returnDomainValues:!0,returnTopmostRaster:d,pixelSize:h,showNoDataRecords:f,signal:o?.signal};return s$2.queryVisibleRasters(c,w).then((e=>e))}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y()],u.prototype,"layer",void 0),e([y()],u.prototype,"suspended",void 0),e([y({readOnly:!0})],u.prototype,"timeExtent",null),e([y()],u.prototype,"view",void 0),u=e([a("esri.views.layers.ImageryLayerView")],u),u};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let v=class extends(m(i$1(f$3(y$1)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new c$1,this._highlightView=void 0,this.layer=null,this.subview=null;}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){this.subview?.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new V({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h$1(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([d$3((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());}),C),d$3((()=>this.timeExtent),(e=>{const{subview:i}=this;i&&(i.timeExtent=e,"redraw"in i?this.requestUpdate():i.redrawOrRefetch());}),C),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch());})),d$3((()=>this.layer.renderer),(()=>this._setSubView()))]);}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1;}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,s){if(!((Array.isArray(e)?e[0]:V$1.isCollection(e)?e.at(0):e)instanceof d$1))return e$1();let a=[];return Array.isArray(e)||V$1.isCollection(e)?a=e.map((e=>e.clone())):e instanceof d$1&&(a=[e.clone()]),this._highlightGraphics.addMany(a),e$1((()=>this._highlightGraphics.removeMany(a)))}async doRefresh(){this.requestUpdate();}isUpdating(){const e=!this.subview||this.subview.updating||!!this._highlightView?.updating;return has("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}\n-> subview ${!this.subview||this.subview.updating}\n-> higlightView ${this._highlightView?.updating}\n`),e}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let i="imagery";if("vector-field"===e?i="imageryVF":"flow"===e&&(i="flow"),this.subview){const{type:e}=this.subview;if(e===i)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy();}this.subview="imagery"===i?new d({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===i?new g({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new d$5({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate();}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0));}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1);}};e([y()],v.prototype,"pixelData",null),e([y()],v.prototype,"subview",void 0),v=e([a("esri.views.2d.layers.ImageryLayerView2D")],v);const b=v;

export { b as default };
