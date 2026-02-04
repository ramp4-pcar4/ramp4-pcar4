import { aR as c$1, aS as h, aT as m, aU as r$1, ax as e, a7 as G, af as b$1, aV as e$1, H as s$1, aW as e$2, aX as y, aY as c } from './main-48Jy8Lgr.js';
import './GeometryUtils-DX9aSgOT.js';
import './UpdateTracking2D-Bc0e6iul.js';
import './enums-DZmWLm_j.js';
import './definitions-slUvtMCM.js';
import './floatRGBA-CVic9aBF.js';
import './Container-CsB863Zr.js';
import './WGLContainer-Bhhfjd3N.js';
import './Texture-CJSk3waQ.js';
import './enums-CgzwTbC2.js';
import './Program-BOtrLCCL.js';
import './LabelMetric-B0d1A5uG.js';
import './StyleDefinition-CR2vYxyv.js';
import './enums-wz4-wi7m.js';
import './MagnifierPrograms-BF_X4Xor.js';
import './FeatureCommandQueue-n1L1FFpq.js';
import './OrderIndependentTransparency-NzZWznOo.js';
import './testSVGPremultipliedAlpha-CN1Kn9iJ.js';
import { $ } from './GraphicsView2D-B8DJexiS.js';
import './earcut-B9Bfurzd.js';
import './vec3f32-CLbqcArJ.js';
import { r, o, n } from './imageUtils-CNw_3f7y.js';
import { m as m$1, u } from './LayerView-ctSANoy-.js';
import { h as h$1 } from './HighlightGraphicContainer-DKU4Asm0.js';
import { i } from './RefreshableLayerView-DW8RYwOY.js';
import { S, U, r as r$2 } from './drapedUtils-gzi55vVI.js';
import './preload-helper-dJJaZANz.js';
import './TurboLine-C5YrZooe.js';
import './Rect-9uT7dZO1.js';
import './BindType-KnpK3yZX.js';
import './Util-CcpJDLeq.js';
import './highlightReasons-Bw6E7Nh2.js';
import './constants-C0QDwCF4.js';
import './ProgramTemplate-D8nYspAl.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './config-Di5U9yzL.js';
import './CircularArray-Bo8gDF9W.js';
import './AttributeStore-CgBZ191C.js';
import './TimeOnly-D8cMS1Ew.js';
import './timeSupport-D79-Gf6Y.js';
import './json-Beimr7gP.js';
import './basicInterfaces-WNnrzIVI.js';
import './normalizeUtilsSync-B-7wsrI6.js';
import './Bitmap-dLp8aocB.js';
import './TileContainer-Cm1jU1n2.js';
import './AGraphicContainer-GTSvIDCz.js';
import './TechniqueInstance-Yt3TXzaY.js';
import './popupUtils-B3PhRwE5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const v=[0,0];let T=class extends(i(r(m$1(u)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new c$1,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null;}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return "tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e);}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new m({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r$1({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),S(this,this.layer)){const e=this._highlightView=new $({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h$1(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(e,t)=>r$2(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i});},layerView:this,updatingHandles:this._updatingHandles});}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add((()=>this.resampling),(()=>{this.doRefresh();}))),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null;}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e$1){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e$1):e()}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return G(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))));}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(v,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:r,resamplingLevel:o$1=0}=t;if(!i)try{return await this._fetchImage(e,r)}catch(m){if(!b$1(m)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(o$1<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new e$1(i),r=await this.fetchTile(s,{...t,resamplingLevel:o$1+1});return n(this._tileInfoView,r,s,e)}}throw m}const l=new e$1(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:r}),l.level!==e.level&&!this.resampling)return o(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r);}catch(m){if(b$1(m))throw m;p=await this._fetchImage(e,r);}return this.resampling?n(this._tileInfoView,p,l,e):p}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(t){b$1(t)||s$1.getLogger(this).error(t);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};e$2([y()],T.prototype,"resampling",null),e$2([y()],T.prototype,"tilemapCache",null),T=e$2([c("esri.views.2d.layers.TileLayerView2D")],T);const I=T;

export { I as default };
