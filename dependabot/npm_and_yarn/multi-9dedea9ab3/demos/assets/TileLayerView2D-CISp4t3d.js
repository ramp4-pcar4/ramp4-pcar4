import { b8 as c$1, b9 as h, ba as m, bb as r$1, aQ as e, a6 as G, ax as b$1, bc as e$1, G as n$1, bd as e$2, be as y, bf as a } from './main-YSH8Qvd0.js';
import './GeometryUtils-lYpV3DRp.js';
import './UpdateTracking2D-C4MnIKv0.js';
import './enums-CHdyfzUK.js';
import './definitions-BdwlvHBE.js';
import './floatRGBA-DRhvO60m.js';
import './Container-Bjkx24f1.js';
import './WGLContainer-D6jupTuP.js';
import './Texture-B2fqbWGu.js';
import './enums-CwcDCDam.js';
import './Program-B_1Ck0yX.js';
import './LabelMetric-Bnf6Ud2A.js';
import './StyleDefinition-DkEWNPyD.js';
import './enums-DrckJvHx.js';
import './MagnifierPrograms-3UJoaGne.js';
import './FeatureCommandQueue-DtOJUJHH.js';
import './PieChartMeshWriter-BAJV8lGv.js';
import './renderState-Cae0JNUz.js';
import './interfaces-MbpZrcgP.js';
import './testSVGPremultipliedAlpha-C5j13fZz.js';
import { V as V$1 } from './GraphicsView2D-taKnaYk_.js';
import './earcut-1p-jfyBa.js';
import './vec3f32-CmlAce5k.js';
import { r, o, n } from './imageUtils-CBYf_tO8.js';
import { f, y as y$1 } from './LayerView-CkazLMcs.js';
import { h as h$1 } from './HighlightGraphicContainer-qyWKG8X_.js';
import { i } from './RefreshableLayerView-qbhaRSDv.js';
import { U, _, r as r$2 } from './drapedUtils-CfndCFvb.js';
import './preload-helper-dJJaZANz.js';
import './BidiEngine-Z2aMxkhF.js';
import './Rect-zdvLIBQm.js';
import './BindType-DQnxDFt3.js';
import './Util-CC8AWGD5.js';
import './highlightReasons-C6YF5eGX.js';
import './ProgramTemplate-0vuAPRyT.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './config-C86_VOH4.js';
import './CircularArray-BCXLb8ry.js';
import './AttributeStore-l_K34xDr.js';
import './TimeOnly-W1Zp8skj.js';
import './timeSupport-C_3DlbE5.js';
import './json-DYk0G9qS.js';
import './constants-BNnV1ogR.js';
import './TurboLine-MtTQYj1x.js';
import './basicInterfaces-CK7IW-0v.js';
import './normalizeUtilsSync-eOeax9mS.js';
import './Bitmap-DNVVr82l.js';
import './TileContainer-DZeC-9ns.js';
import './layerViewUtils-CRtvGSrJ.js';
import './AGraphicContainer-DmoCcfAn.js';
import './TechniqueInstance-CS_tnRdI.js';
import './popupUtils-DFAAp86T.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const V=[0,0];let q=class extends(i(r(f(y$1)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new c$1,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null;}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return "tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e);}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new m({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r$1({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),U(this,this.layer)){const e=this._highlightView=new V$1({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h$1(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new _({createFetchPopupFeaturesQueryGeometry:(e,t)=>r$2(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i});},layerView:this,updatingHandles:this._updatingHandles});}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add((()=>this.resampling),(()=>{this.doRefresh();}))),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null;}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e$1){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e$1):e()}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return G(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))));}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(V,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:r,resamplingLevel:o$1=0}=t;if(!i)try{return await this._fetchImage(e,r)}catch(a){if(!b$1(a)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(o$1<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new e$1(i),r=await this.fetchTile(s,{...t,resamplingLevel:o$1+1});return n(this._tileInfoView,r,s,e)}}throw a}const l=new e$1(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:r}),l.level!==e.level&&!this.resampling)return o(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r);}catch(a){if(b$1(a))throw a;p=await this._fetchImage(e,r);}return this.resampling?n(this._tileInfoView,p,l,e):p}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(t){b$1(t)||n$1.getLogger(this).error(t);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};e$2([y()],q.prototype,"resampling",null),e$2([y()],q.prototype,"tilemapCache",null),q=e$2([a("esri.views.2d.layers.TileLayerView2D")],q);const P=q;

export { P as default };
