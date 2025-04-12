import{bj as p,Y as c,n as y,H as u,J as w,N as g}from"./main-Cv8ITM2j.js";import{r as I,n as f}from"./imageUtils-BOzkMhZ2.js";import{S,y as T}from"./LayerView-Db4tEWKD.js";import{h as V,p as v,r as x}from"./Tile-BB7XLQDh.js";import{e as d}from"./TileKey-MVyPksrw.js";import{i as M}from"./RefreshableLayerView-B3aLyNvQ.js";import{g as q}from"./Scheduler-BnfdNYCE.js";import"./preload-helper-ExcqyqRp.js";import"./MapView-DJYiaNSN.js";import"./Cyclical-BxPjl8eb.js";import"./CollectionFlattener-C24Vb2Tx.js";import"./workers-BXKSmjkC.js";import"./Queue-CEzF52XX.js";import"./intl-Dh2ocpt9.js";import"./projection-DALJEM5z.js";import"./projectBuffer-C3I4aBT7.js";import"./TileInfo-Cx0-ZIPC.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-0nC5BEdf.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-1YIVLwGt.js";import"./signal-B1irWiNX.js";import"./Map-Da4Ji3Et.js";import"./Basemap-dw02n_0u.js";import"./loadAll-JjfmhABF.js";import"./PortalItem-auRHFq7R.js";import"./writeUtils-CmJHem-D.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-B2F2AQse.js";import"./common-DQOJ18NT.js";import"./TablesMixin-AYgJ04X4.js";import"./Layer-CVn99KK7.js";import"./TimeExtent-CmJt7e8T.js";import"./GraphicsCollection-Di4jznR1.js";import"./HeightModelInfo-BYKt_3WI.js";import"./timeZoneUtils-DBnpKbsS.js";import"./ReactiveMap-CZlL85xT.js";import"./Query-CsgMbHO2.js";import"./Field-DCT5wy9q.js";import"./fieldType-DVp6Pqrh.js";import"./HighlightDefaults-BXnes3NX.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2-ChnYg_BJ.js";import"./vec2f64-DohEyf3f.js";import"./normalizeUtils-BN5Ve0-A.js";import"./normalizeUtilsCommon-CCm4qTP6.js";import"./utils-DI5eYgHm.js";import"./utils-dx-55XQh.js";import"./mat3-CruJiiUv.js";import"./vec2f32-BbH2jxlN.js";import"./vec32-BVUDM8s2.js";import"./unitBezier-B1N-tmtC.js";import"./definitions-CvpHWbfn.js";import"./enums-Dk3osxpS.js";import"./Texture-DzjEWJjb.js";import"./getDataTypeBytes-DflDeYgv.js";import"./imageUtils-pPSAwsFG.js";import"./capabilities-Du2wdNlQ.js";import"./Version-Dt037r9d.js";import"./ColorBackground-C5gq9qdr.js";import"./BitmapTechnique-DWpkdXRa.js";import"./Container-DcnfKP8D.js";import"./parser-OujP_0wM.js";import"./GraphShaderModule-CLyeODJd.js";import"./FramebufferObject-BRD76oIT.js";import"./VertexArrayObject-DukdE5dJ.js";import"./memoryEstimations-mpuvLg4e.js";import"./ProgramTemplate-D-yxXdeJ.js";import"./ShaderBuilder-BzIVxO5e.js";import"./BindType-BBwFZqyN.js";import"./TechniqueType-uMFRS8dR.js";import"./WGLContainer-BViJ-1BA.js";import"./Utils-CVviXfTM.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DBsc2ck4.js";import"./enums-BQDXKJnw.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-BEZQ4um-.js";import"./OptimizedFeature-CzoD-uoX.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./TileContainer-IBRVESdr.js";import"./layerViewUtils-JBZjtZyA.js";import"./quickselect-QQC62dOK.js";const R=[0,0];let r=class extends M(I(S(T))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const{activeLayer:t}=this.layer,{tileMatrixSet:e}=t;if(e&&p(e.tileInfo?.spatialReference,this.view.spatialReference))return e;const i=this._getTileMatrixSetBySpatialReference(t);return i&&i.id!==t.tileMatrixSetId?(t.tileMatrixSetId=i.id,i):null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){const t=this.tileMatrixSet?.tileInfo;t&&(this._tileInfoView=new V(t),this._fetchQueue=new v({tileInfoView:this._tileInfoView,concurrency:16,process:(e,i)=>this.fetchTile(e,i),scheduler:this.scheduler,priority:q.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new x({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet],()=>this.doRefresh())),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.activeLayer.tileMatrixSets?.some(e=>p(e.tileInfo?.spatialReference,t))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:l=0}=e;if(!i)return this._fetchImage(t,s);const o=new d(0,0,0,0);let h;try{await i.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:s}),h=await this._fetchImage(o,s)}catch(a){if(c(a))throw a;if(l<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const n=new d(m),_=await this.fetchTile(n,{...e,resamplingLevel:l+1});return f(this._tileInfoView,_,n,t)}}throw a}return f(this._tileInfoView,h,o,t)}canResume(){const t=super.canResume();return t&&this.tileMatrixSet!==null}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){c(e)||y.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}_getTileMatrixSetBySpatialReference(t){return t.tileMatrixSets?.find(e=>p(e.tileInfo?.spatialReference,this.view.spatialReference))}};u([w({readOnly:!0})],r.prototype,"tileMatrixSet",null),r=u([g("esri.views.2d.layers.WMTSLayerView2D")],r);const ae=r;export{ae as default};
