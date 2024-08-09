import { aS as c$1, aT as h, aU as m, aV as r$1, ay as e, a8 as G, ag as b$1, aW as e$1, J as s$1, aX as e$2, aY as y, aZ as c } from './main-79b78ad8.js';
import './GeometryUtils-ffb7e82d.js';
import './UpdateTracking2D-95d53311.js';
import './enums-d24bcbbf.js';
import './definitions-1e43ef7c.js';
import './floatRGBA-163ca059.js';
import './Container-a0125629.js';
import './WGLContainer-4c2fd3d8.js';
import './Texture-87a0b340.js';
import './enums-af0bf3a9.js';
import './Program-ca8159be.js';
import './LabelMetric-c9cee0c4.js';
import './StyleDefinition-acf40298.js';
import './enums-affa582e.js';
import './MagnifierPrograms-7c8b9e43.js';
import './FeatureCommandQueue-a71baf78.js';
import './OrderIndependentTransparency-67a8dcc4.js';
import './testSVGPremultipliedAlpha-5a030642.js';
import { $ } from './GraphicsView2D-36cdac2d.js';
import './earcut-3a4dca53.js';
import './vec3f32-cca6bca6.js';
import { r, o, n } from './imageUtils-98479053.js';
import { m as m$1, u } from './LayerView-a2d5046d.js';
import { h as h$1 } from './HighlightGraphicContainer-a41dc238.js';
import { i } from './RefreshableLayerView-d9068069.js';
import { S, U, r as r$2 } from './drapedUtils-5aa0ef0c.js';
import './preload-helper-a4975f27.js';
import './TurboLine-709bc4b5.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './Util-91c24961.js';
import './highlightReasons-ddca569d.js';
import './constants-412c3a33.js';
import './ProgramTemplate-7b0ece69.js';
import './VertexElementDescriptor-ec2771ab.js';
import './config-71aad884.js';
import './CircularArray-a0930929.js';
import './AttributeStore-e2890840.js';
import './TimeOnly-1d1b56a1.js';
import './timeSupport-8c1ed512.js';
import './json-aab78c64.js';
import './basicInterfaces-f85cdac5.js';
import './normalizeUtilsSync-40c6e299.js';
import './Bitmap-7165580d.js';
import './TileContainer-114a0200.js';
import './AGraphicContainer-f810af65.js';
import './TechniqueInstance-c431e245.js';
import './popupUtils-91bdd82d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const v=[0,0];let T=class extends(i(r(m$1(u)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new c$1,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null;}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return "tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e);}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new m({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r$1({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),S(this,this.layer)){const e=this._highlightView=new $({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h$1(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(e,t)=>r$2(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i});},layerView:this,updatingHandles:this._updatingHandles});}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add((()=>this.resampling),(()=>{this.doRefresh();}))),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null;}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e$1){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e$1):e()}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return G(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))));}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(v,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:r,resamplingLevel:o$1=0}=t;if(!i)try{return await this._fetchImage(e,r)}catch(m){if(!b$1(m)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(o$1<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new e$1(i),r=await this.fetchTile(s,{...t,resamplingLevel:o$1+1});return n(this._tileInfoView,r,s,e)}}throw m}const l=new e$1(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:r}),l.level!==e.level&&!this.resampling)return o(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r);}catch(m){if(b$1(m))throw m;p=await this._fetchImage(e,r);}return this.resampling?n(this._tileInfoView,p,l,e):p}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(t){b$1(t)||s$1.getLogger(this).error(t);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};e$2([y()],T.prototype,"resampling",null),e$2([y()],T.prototype,"tilemapCache",null),T=e$2([c("esri.views.2d.layers.TileLayerView2D")],T);const I=T;

export { I as default };
