import { bD as h, bE as m$2, bF as r$1, ad as G, bG as e, al as b$1, G as s$1, bH as e$1, bI as y$1, bJ as c } from './main-b4e8e5ba.js';
import { r, n } from './imageUtils-a70a0b31.js';
import { m as m$1, u } from './LayerView-24a0b5a1.js';
import { i } from './RefreshableLayerView-82e0140b.js';
import './preload-helper-a4975f27.js';
import './Bitmap-ca50346d.js';
import './Container-9f88537f.js';
import './highlightReasons-5c88b825.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-31112cda.js';
import './WGLContainer-395f9022.js';
import './LabelMetric-daa9c9e2.js';
import './enums-d24bcbbf.js';
import './Program-6de50f5a.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-85c6bcd7.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-8748428b.js';
import './TileContainer-fe4f3567.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const m=new Set([102113,102100,3857,3785,900913]),y=[0,0];let _=class extends(i(r(m$1(u)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null;}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();}attach(){const e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new h(e),this._fetchQueue=new m$2({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r$1({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add((()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet]),(()=>this.doRefresh()))),super.attach());}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some((t=>G(t.tileInfo?.spatialReference,e)))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))));}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(y,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e$1,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:a=0}=t;if(!s)return this._fetchImage(e$1,r);const l=new e(0,0,0,0);let o;try{await s.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,l,{signal:r}),o=await this._fetchImage(l,r);}catch(n$1){if(b$1(n$1))throw n$1;if(a<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const s=new e(i),r=await this.fetchTile(s,{...t,resamplingLevel:a+1});return n(this._tileInfoView,r,s,e$1)}}throw n$1}return n(this._tileInfoView,o,l,e$1)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(s){b$1(s)||s$1.getLogger(this).error(s);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>G(e.tileInfo?.spatialReference,t)));return !i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>m.has(e.tileInfo?.spatialReference.wkid??-1)))),i}};e$1([y$1({readOnly:!0})],_.prototype,"tileMatrixSet",null),_=e$1([c("esri.views.2d.layers.WMTSLayerView2D")],_);const w=_;

export { w as default };
