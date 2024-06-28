import { aS as c$1, aT as h, aU as m, aV as r$1, az as e, a9 as G, ah as b$1, aW as e$1, K as s$1, aX as e$2, aY as y, aZ as c } from './main-81f3306c.js';
import './GeometryUtils-25b30a74.js';
import './UpdateTracking2D-9116c553.js';
import './enums-d24bcbbf.js';
import './definitions-1e43ef7c.js';
import './floatRGBA-4ca67943.js';
import './Container-6e8bfa00.js';
import './WGLContainer-c4fe7cd4.js';
import './Texture-6f6d52b5.js';
import './enums-af0bf3a9.js';
import './Program-e520abc8.js';
import './LabelMetric-b88a203c.js';
import './StyleDefinition-acf40298.js';
import './enums-affa582e.js';
import './MagnifierPrograms-38be3814.js';
import './FeatureCommandQueue-9add50e2.js';
import './OrderIndependentTransparency-67a8dcc4.js';
import './testSVGPremultipliedAlpha-4fcfa269.js';
import { $ } from './GraphicsView2D-d625d546.js';
import './earcut-af49cf80.js';
import './vec3f32-cca6bca6.js';
import { r, o, n } from './imageUtils-d719edc6.js';
import { m as m$1, u } from './LayerView-611d2b16.js';
import { h as h$1 } from './HighlightGraphicContainer-2d542d07.js';
import { i } from './RefreshableLayerView-4d6701d3.js';
import { S, U, r as r$2 } from './drapedUtils-575242a2.js';
import './preload-helper-a4975f27.js';
import './TurboLine-ad3051aa.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './Util-0a4bc4e8.js';
import './highlightReasons-1ad4e237.js';
import './constants-412c3a33.js';
import './ProgramTemplate-23408574.js';
import './VertexElementDescriptor-ec2771ab.js';
import './config-71aad884.js';
import './CircularArray-a0930929.js';
import './AttributeStore-5b5e6f2f.js';
import './TimeOnly-92610fed.js';
import './timeSupport-50eed5f2.js';
import './json-aab78c64.js';
import './basicInterfaces-f85cdac5.js';
import './normalizeUtilsSync-5f32171d.js';
import './Bitmap-8632349e.js';
import './TileContainer-2966f1c4.js';
import './AGraphicContainer-a618b2b4.js';
import './TechniqueInstance-ebabca52.js';
import './popupUtils-6d199c48.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const v=[0,0];let T=class extends(i(r(m$1(u)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new c$1,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null;}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return "tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e);}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new m({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r$1({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),S(this,this.layer)){const e=this._highlightView=new $({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h$1(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(e,t)=>r$2(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i});},layerView:this,updatingHandles:this._updatingHandles});}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add((()=>this.resampling),(()=>{this.doRefresh();}))),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null;}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e$1){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e$1):e()}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return G(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))));}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(v,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:r,resamplingLevel:o$1=0}=t;if(!i)try{return await this._fetchImage(e,r)}catch(m){if(!b$1(m)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(o$1<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new e$1(i),r=await this.fetchTile(s,{...t,resamplingLevel:o$1+1});return n(this._tileInfoView,r,s,e)}}throw m}const l=new e$1(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:r}),l.level!==e.level&&!this.resampling)return o(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r);}catch(m){if(b$1(m))throw m;p=await this._fetchImage(e,r);}return this.resampling?n(this._tileInfoView,p,l,e):p}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(t){b$1(t)||s$1.getLogger(this).error(t);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};e$2([y()],T.prototype,"resampling",null),e$2([y()],T.prototype,"tilemapCache",null),T=e$2([c("esri.views.2d.layers.TileLayerView2D")],T);const I=T;

export { I as default };
