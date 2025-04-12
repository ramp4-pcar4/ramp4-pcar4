import{bh as h,E as f,n as m,k as d,o as w,A as g}from"./main-kpG51UWM.js";import{r as I,n as p}from"./imageUtils-Co-ELErj.js";import{j as S,y as T}from"./LayerView-Bish-E63.js";import{h as V,p as v,r as x}from"./Tile-D75RMC64.js";import{e as _}from"./TileKey-C5IL-JBr.js";import{i as M}from"./RefreshableLayerView-BdQpGYly.js";import{g as q}from"./Scheduler-B7UX7Wr5.js";const R=[0,0];let s=class extends M(I(S(T))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const{activeLayer:e}=this.layer,{tileMatrixSet:t}=e;if(t&&h(t.tileInfo?.spatialReference,this.view.spatialReference))return t;const i=this._getTileMatrixSetBySpatialReference(e);return i&&i.id!==e.tileMatrixSetId?(e.tileMatrixSetId=i.id,i):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new V(e),this._fetchQueue=new v({tileInfoView:this._tileInfoView,concurrency:16,process:(t,i)=>this.fetchTile(t,i),scheduler:this.scheduler,priority:q.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new x({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet],()=>this.doRefresh())),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some(t=>h(t.tileInfo?.spatialReference,e))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:a,resamplingLevel:n=0}=t;if(!i)return this._fetchImage(e,a);const r=new _(0,0,0,0);let c;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,r,{signal:a}),c=await this._fetchImage(r,a)}catch(l){if(f(l))throw l;if(n<3){const o=this._tileInfoView.getTileParentId(e.id);if(o){const u=new _(o),y=await this.fetchTile(u,{...t,resamplingLevel:n+1});return p(this._tileInfoView,y,u,e)}}throw l}return p(this._tileInfoView,c,r,e)}canResume(){return super.canResume()&&this.tileMatrixSet!==null}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){f(t)||m.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_getTileMatrixSetBySpatialReference(e){return e.tileMatrixSets?.find(t=>h(t.tileInfo?.spatialReference,this.view.spatialReference))}};d([w({readOnly:!0})],s.prototype,"tileMatrixSet",null),s=d([g("esri.views.2d.layers.WMTSLayerView2D")],s);const Q=s;export{Q as default};
