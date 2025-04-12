import{q as i,u as a,C as f,V,dD as b,eQ as F,aJ as U,ej as _,n as x,bv as w}from"./main-7nqzKo04.js";import{j as H,y as I}from"./LayerView-Bbeu953L.js";import"./preload-helper-ExcqyqRp.js";import"./Container-gsuEA0YN.js";import"./MapView-CdjwNzsS.js";import"./Cyclical-D0JMPWrU.js";import"./CollectionFlattener-DWiW_AsH.js";import"./workers-yoQEo-M6.js";import"./projection-uWASLutg.js";import"./projectBuffer-DohnbaJT.js";import"./TileInfo-DQRGzhYz.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-aGG8mCu-.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-D_EiszAW.js";import"./signal-zY6W4EHa.js";import"./Map-DCaZ_vUZ.js";import"./Basemap-CKvCwA3Y.js";import"./loadAll-DWz3Z_IT.js";import"./PortalItem-CUJ-aEPg.js";import"./writeUtils-CZ7Hqggo.js";import"./compilerUtils-DO1ngQxB.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-gnzTYV35.js";import"./common-DQOJ18NT.js";import"./TablesMixin-riTapQBG.js";import"./Layer-Bmiqc_vS.js";import"./TimeExtent-LauUhoJg.js";import"./GraphicsCollection-CYDNLo0g.js";import"./HeightModelInfo-D_2KbXxu.js";import"./ReactiveMap-Ca83jZgf.js";import"./Query-BotaYlLX.js";import"./Field-DlKE1Mj8.js";import"./fieldType-CmjutMKi.js";import"./arcgisLayerUrl-Bgq-0hIo.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-M056j5jm.js";import"./TileKey-CSuPgwP2.js";import"./QueueProcessor-Bh2G5ga1.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-Bz4pPiym.js";import"./normalizeUtilsCommon-BDljxOu-.js";import"./utils-BZ-awri-.js";import"./utils-RBj55bRD.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-G3vNetIw.js";import"./vec32-CjC8RzUk.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-B26cOnGq.js";import"./imageUtils-DlC2iV_P.js";import"./capabilities-A2uoe7dc.js";import"./Version-DnrwVW-G.js";import"./ColorBackground-DJxFZezX.js";import"./parser-CHHf2xzw.js";import"./layerViewUtils-Dp_bQAUb.js";const y=Symbol(),O=n=>{let e=class extends n{constructor(){super(...arguments),this.layerViews=new V,this._debouncedUpdate=b(async()=>{const{layer:r,parent:s}=this,o=s?.footprintLayerView;let p=[];const d=this._createQuery();if(d&&o){const{features:u}=await o.queryFeatures(d);this.suspended||(p=u.map(h=>r.acquireLayer(h)))}this.removeHandles(y),this.addHandles(p,y)})}get creatingLayerViews(){return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer)??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(r=>r.updating)}enableLayerUpdates(){return F([this._updatingHandles.addWhen(()=>this.parent?.footprintLayerView?.dataUpdating===!1,()=>this.updateLayers()),this._updatingHandles.add(()=>[this.layer.maximumVisibleSublayers,this.layer.parent?.orderBy,this.parent?.footprintLayerView?.filter,this.parent?.footprintLayerView?.timeExtent,this.suspended],()=>this.updateLayers()),U(()=>this.removeHandles(y))])}updateLayers(){this.suspended?this.removeHandles(y):this._updatingHandles.addPromise(_(this._debouncedUpdate()).catch(r=>{x.getLogger(this).error(r)}))}_createQuery(){const r=this.parent?.footprintLayerView,s=this.layer?.parent;if(!r||!s||s.destroyed)return null;const{layer:{maximumVisibleSublayers:o},view:{scale:p}}=this;if(!o)return null;const{itemTypeField:d,itemSourceField:u,itemNameField:h,minScaleField:c,maxScaleField:L,objectIdField:v,orderBy:$}=s,S=w(`${c} IS NULL OR ${p} <= ${c} OR ${c} = 0`,`${L} IS NULL OR ${p} >= ${L}`),m=$?.find(l=>l.field&&!l.valueExpression),t=r.createQuery();if(t.returnGeometry=!1,t.num=o,t.outFields=[v,u,h],t.where=w(t.where,S),this.unsupportedItemTypes!=null){const l=`${d} NOT IN (${this.unsupportedItemTypes.map(C=>`'${C}'`)})`;t.where=w(t.where,l)}return m?.field&&(t.orderByFields=[`${m.field} ${m.order==="descending"?"DESC":"ASC"}`],t.outFields.push(m.field)),t}};return i([a({readOnly:!0})],e.prototype,"creatingLayerViews",null),i([a()],e.prototype,"layer",void 0),i([a()],e.prototype,"layerViews",void 0),i([a({readOnly:!0})],e.prototype,"unsupportedItemTypes",void 0),i([a()],e.prototype,"parent",void 0),i([a({readOnly:!0})],e.prototype,"isUpdating",null),e=i([f("esri.views.layers.CatalogDynamicGroupLayerView")],e),e};let g=class extends O(H(I)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new V}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(n){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((n,e)=>this.container.addChildAt(n.container,e))}};g=i([f("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],g);const qe=g;export{qe as default};
