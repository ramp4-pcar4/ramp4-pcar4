import { aW as e, aX as y$1, aY as c$1, dY as S$1, af as b$1, H as s$1, a4 as c$2, jV as M, b0 as k, aH as M$1, jW as m$1, dq as f$2, b2 as d$2, gs as A, U as U$1, cF as d$3, fs as j, s, J as s$2, f9 as b$2, F as x$1, aR as c$3, fm as C, a3 as V, ax as e$1, V as has } from './main-B92PJIAd.js';
import { d as d$1, f as f$1, a as d$4 } from './RasterVFDisplayObject-D4onHshN.js';
import { m as m$2, u as u$1 } from './LayerView-Bl5Lynf-.js';
import { $ } from './GraphicsView2D-dSK7r6Z0.js';
import { h as h$1 } from './HighlightGraphicContainer-RRKYeZrY.js';
import { a } from './BitmapContainer-SVq0qIgi.js';
import { h, E } from './Container-CsvGoIhv.js';
import { l } from './Bitmap-ClNJHcP8.js';
import { v } from './ExportStrategy-BcOBVV9N.js';
import { J } from './rasterProjectionHelper-BL_Ee-6l.js';
import { n } from './WGLContainer-D3NJkh_7.js';
import { p as p$1 } from './popupUtils-BBaIz9xA.js';
import { i } from './RefreshableLayerView-qDNUusOY.js';
import './preload-helper-dJJaZANz.js';
import './Program-DvFotrMU.js';
import './Texture-ykeXEf6b.js';
import './enums-CgzwTbC2.js';
import './ProgramTemplate-D65jHmBl.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './LabelMetric-DLN4bkU3.js';
import './enums-DZmWLm_j.js';
import './UpdateTracking2D-DaO2ibfZ.js';
import './TurboLine-G8Rn-bf8.js';
import './definitions-slUvtMCM.js';
import './earcut-BG2O5cVW.js';
import './GeometryUtils-mGf0eLfe.js';
import './Rect-9uT7dZO1.js';
import './BindType-KnpK3yZX.js';
import './Util-Buxq5VkP.js';
import './highlightReasons-DAl4YTur.js';
import './constants-C0QDwCF4.js';
import './AttributeStore-L35pfLtb.js';
import './TimeOnly-C2mPYK6f.js';
import './timeSupport-BAaiX9uD.js';
import './json-Beimr7gP.js';
import './FeatureCommandQueue-CkeTINIm.js';
import './normalizeUtilsSync-DVOr82oR.js';
import './AGraphicContainer-DOW0L5JG.js';
import './TechniqueInstance-By5NoKFx.js';
import './TileContainer-B1h0Jkql.js';
import './vec3f32-CLbqcArJ.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let m=class extends S$1{constructor(){super(...arguments),this.attached=!1,this.container=new h,this.updateRequested=!1,this.type="imagery",this._bitmapView=new a;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);}));}hitTest(t){return new c$2({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new v({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1;}redraw(){this.strategy.updateExports((async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=t=>this.layer.pixelFilter?this.layer.applyFilter(t):{...i,extent:e.extent};})).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(1===t.length&&t[0].source)return {extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map((t=>t.source)).filter((t=>t.extent&&t.extent.intersects(e))).map((t=>({extent:t.extent,pixelBlock:t.originalPixelBlock}))),r=M(i,e);return null!=r?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(t,e,i,r);if(s.imageBitmap)return s.imageBitmap;const a=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),o=new l(a.pixelBlock,a.extent?.clone(),s.pixelData.pixelBlock);return o.filter=t=>this.layer.applyFilter(t),o}};e([y$1()],m.prototype,"attached",void 0),e([y$1()],m.prototype,"container",void 0),e([y$1()],m.prototype,"layer",void 0),e([y$1()],m.prototype,"strategy",void 0),e([y$1()],m.prototype,"timeExtent",void 0),e([y$1()],m.prototype,"view",void 0),e([y$1()],m.prototype,"updateRequested",void 0),e([y$1()],m.prototype,"updating",null),e([y$1()],m.prototype,"type",void 0),m=e([c$1("esri.views.2d.layers.imagery.ImageryView2D")],m);const d=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class t extends n{constructor(){super(...arguments),this.symbolTypes=["triangle"];}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[d$1],target:()=>this.children,drawPhase:E.MAP});return [...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===E.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let c=class extends S$1{constructor(e){super(e),this._loading=null,this.update=k(((e,t)=>this._update(e,t).catch((e=>{b$1(e)||s$1.getLogger(this).error(e);}))));}get updating(){return !!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender();}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:o}=e.state,s=new M$1({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:o}),[a,l]=e.state.size;this._loading=this.fetchPixels(s,a,l,i);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null;}_addToDisplay(e,t,i){if(null==e.pixelBlock)return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:r,pixelBlock:o}=e,s=new f$1(o);s.offset=[0,0],s.symbolizerParameters=t,s.rawPixelData=e,s.invalidateVAO(),s.x=r.xmin,s.y=r.ymax,s.pixelRatio=i.pixelRatio,s.rotation=i.rotation,s.resolution=i.resolution,s.width=o.width*t.symbolTileSize,s.height=o.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(s);}};e([y$1()],c.prototype,"fetchPixels",void 0),e([y$1()],c.prototype,"container",void 0),e([y$1()],c.prototype,"_loading",void 0),e([y$1()],c.prototype,"updating",null),c=e([c$1("esri.views.2d.layers.imagery.ImageryVFStrategy")],c);const p=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let f=class extends S$1{constructor(){super(...arguments),this.attached=!1,this.container=new t,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,r,i)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:o,width:n,height:l}=m$1(t,e,r,a,s);if(null!=s&&!s.intersects(t))return {extent:o,pixelBlock:null};const m={bbox:`${o.xmin}, ${o.ymin}, ${o.xmax}, ${o.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(m)){const t=this.getPixelData();if(null!=t){if(`${t.extent.xmin}, ${t.extent.ymin}, ${t.extent.xmax}, ${t.extent.ymax}`===m.bbox)return t}}const{pixelData:c}=await this.layer.fetchImage(o,n,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:i});this._dataParameters=m;const p=c?.pixelBlock;if(null==p)return {extent:o,pixelBlock:null};return {extent:o,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?f$2(p,"vector-uv"):p}};}get updating(){return !this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new p({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(d$2((()=>this.layer.renderer),(t=>this._updateSymbolizerParams(t)),A),"attach");}detach(){this._strategy.destroy(),this.container.children.forEach((t=>t.destroy())),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null;}getPixelData(){const t=this.container.children[0]?.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:r}=t;return {extent:e,pixelBlock:r}}hitTest(t){return new c$2({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);}));}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams));}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,r=this._dataParameters.time===t.time,i=this._dataParameters.symbolTileSize===t.symbolTileSize,s=this._dataParameters.bbox===t.bbox;return e&&r&&i&&s}async _getProjectedFullExtent(t){try{return J(this.layer.fullExtent,t)}catch(e){try{const e=(await U$1(this.layer.url,{query:{option:"footprints",outSR:d$3(t),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return e?M$1.fromJSON(e):null}catch{return null}}}_updateSymbolizerParams(t){"vector-field"===t.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}));}};e([y$1()],f.prototype,"attached",void 0),e([y$1()],f.prototype,"container",void 0),e([y$1()],f.prototype,"layer",void 0),e([y$1()],f.prototype,"timeExtent",void 0),e([y$1()],f.prototype,"type",void 0),e([y$1()],f.prototype,"view",void 0),e([y$1()],f.prototype,"updating",null),f=e([c$1("esri.views.2d.layers.imagery.VectorFieldView2D")],f);const g=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.view=null;}async fetchPopupFeaturesAtLocation(e,o){const{layer:s$1}=this;if(!e)throw new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s$1});const{popupEnabled:i}=s$1,u=p$1(s$1,o);if(!i||null==u)throw new s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:u});const m=await u.getRequiredFields();s$2(o);const c=new b$2;c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=m,c.outSpatialReference=e.spatialReference;const{resolution:l,spatialReference:y}=this.view,d="2d"===this.view.type?new x$1(l,l,y):new x$1(.5*l,.5*l,y),{returnTopmostRaster:h,showNoDataRecords:w}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:d,showNoDataRecords:w,signal:o?.signal};return s$1.queryVisibleRasters(c,f).then((e=>e))}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y$1()],m.prototype,"layer",void 0),e([y$1()],m.prototype,"suspended",void 0),e([y$1(j)],m.prototype,"timeExtent",void 0),e([y$1()],m.prototype,"view",void 0),m=e([c$1("esri.views.layers.ImageryLayerView")],m),m};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(u(i(m$2(u$1)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new c$3,this._highlightView=void 0,this.layer=null,this.subview=null;}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){this.subview?.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new $({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h$1(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([d$2((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());}),C),d$2((()=>this.timeExtent),(e=>{const{subview:i}=this;i&&(i.timeExtent=e,"redraw"in i?this.requestUpdate():i.redrawOrRefetch());}),C),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch());})),d$2((()=>this.layer.renderer),(()=>this._setSubView()))]);}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,s){if(!((Array.isArray(e)?e[0]:V.isCollection(e)?e.at(0):e)instanceof c$2))return e$1();let a=[];return Array.isArray(e)||V.isCollection(e)?a=e.map((e=>e.clone())):e instanceof c$2&&(a=[e.clone()]),this._highlightGraphics.addMany(a),e$1((()=>this._highlightGraphics.removeMany(a)))}async doRefresh(){this.requestUpdate();}isUpdating(){const e=!this.subview||this.subview.updating||!!this._highlightView?.updating;return has("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}\n-> subview ${!this.subview||this.subview.updating}\n-> higlightView ${this._highlightView?.updating}\n`),e}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let i="imagery";if("vector-field"===e?i="imageryVF":"flow"===e&&(i="flow"),this.subview){const{type:e}=this.subview;if(e===i)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy();}this.subview="imagery"===i?new d({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===i?new g({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new d$4({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate();}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0));}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1);}};e([y$1()],y.prototype,"pixelData",null),e([y$1()],y.prototype,"subview",void 0),y=e([c$1("esri.views.2d.layers.ImageryLayerView2D")],y);const b=y;

export { b as default };
