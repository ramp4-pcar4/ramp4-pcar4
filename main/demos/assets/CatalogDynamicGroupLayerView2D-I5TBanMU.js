import{B as i,D as a,N as f,V,e7 as b,fx as F,a9 as U,eS as x,n as _,bC as w}from"./main-Bd_03BNf.js";import{S as H,y as I}from"./LayerView-AeUe-tlY.js";import"./preload-helper-ExcqyqRp.js";import"./Container-DXXfIc-o.js";import"./MapView-BL4XewVn.js";import"./Cyclical-ZQALc6t-.js";import"./CollectionFlattener-BrMWuv7n.js";import"./workers-D0YzKp_C.js";import"./Queue-1pevTxSO.js";import"./intl-BvarHTsY.js";import"./projection-B5J11HCw.js";import"./projectBuffer-0UYQHA4x.js";import"./TileInfo-AjGs-0Qa.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-DtlqXdR7.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-ChtQwLxX.js";import"./signal-jdSgAZN_.js";import"./Map-BHVhgIca.js";import"./Basemap-Q8WQL8wY.js";import"./loadAll-BRYIjEdV.js";import"./PortalItem-B9-2VYN_.js";import"./writeUtils-Dqrfq5SD.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BPDfjts0.js";import"./common-DQOJ18NT.js";import"./TablesMixin-D93Y-JEY.js";import"./Layer-B_8fSKRa.js";import"./TimeExtent-BP_n2IvP.js";import"./GraphicsCollection-BXyIcfwO.js";import"./HeightModelInfo-H7mlwIl9.js";import"./timeZoneUtils-uYx9Jdvq.js";import"./ReactiveMap-C61CaORP.js";import"./Query-DSV16ZVi.js";import"./Field-B-OaXgog.js";import"./fieldType-C08bO76G.js";import"./HighlightDefaults-Dj36e4Qp.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2-maR1OrZI.js";import"./vec2f64-DohEyf3f.js";import"./Tile-DMtwK6OJ.js";import"./TileKey-BV73iLMB.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-BrH2lV2K.js";import"./normalizeUtilsCommon-bxYUHDUv.js";import"./utils-D9KQFO7x.js";import"./utils-7GyXGrM0.js";import"./mat3-CruJiiUv.js";import"./vec2f32-BbH2jxlN.js";import"./Scheduler-D6SnOD_1.js";import"./vec32-DZGiaTNj.js";import"./unitBezier-B1N-tmtC.js";import"./definitions-CPtb4TQS.js";import"./enums-Dk3osxpS.js";import"./Texture-ArGatan0.js";import"./getDataTypeBytes-DflDeYgv.js";import"./imageUtils-Bc_jGd8y.js";import"./capabilities-Du2wdNlQ.js";import"./Version-F4yB_eqJ.js";import"./ColorBackground-BxQWOIlZ.js";import"./parser-C-4pkZvD.js";import"./layerViewUtils-uxpqMv-A.js";const y=Symbol(),O=n=>{let e=class extends n{constructor(){super(...arguments),this.layerViews=new V,this._debouncedUpdate=b(async()=>{const{layer:r,parent:s}=this,o=s?.footprintLayerView;let p=[];const m=this._createQuery();if(m&&o){const{features:u}=await o.queryFeatures(m);this.suspended||(p=u.map(h=>r.acquireLayer(h)))}this.removeHandles(y),this.addHandles(p,y)})}get creatingLayerViews(){return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer)??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(r=>r.updating)}enableLayerUpdates(){return F([this._updatingHandles.addWhen(()=>this.parent?.footprintLayerView?.dataUpdating===!1,()=>this.updateLayers()),this._updatingHandles.add(()=>[this.layer.maximumVisibleSublayers,this.layer.parent?.orderBy,this.parent?.footprintLayerView?.filter,this.parent?.footprintLayerView?.timeExtent,this.suspended],()=>this.updateLayers()),U(()=>this.removeHandles(y))])}updateLayers(){this.suspended?this.removeHandles(y):this._updatingHandles.addPromise(x(this._debouncedUpdate()).catch(r=>{_.getLogger(this).error(r)}))}_createQuery(){const r=this.parent?.footprintLayerView,s=this.layer?.parent;if(!r||!s||s.destroyed)return null;const{layer:{maximumVisibleSublayers:o},view:{scale:p}}=this;if(!o)return null;const{itemTypeField:m,itemSourceField:u,itemNameField:h,minScaleField:c,maxScaleField:L,objectIdField:v,orderBy:S}=s,$=w(`${c} IS NULL OR ${p} <= ${c} OR ${c} = 0`,`${L} IS NULL OR ${p} >= ${L}`),d=S?.find(l=>l.field&&!l.valueExpression),t=r.createQuery();if(t.returnGeometry=!1,t.num=o,t.outFields=[v,u,h],t.where=w(t.where,$),this.unsupportedItemTypes!=null){const l=`${m} NOT IN (${this.unsupportedItemTypes.map(C=>`'${C}'`)})`;t.where=w(t.where,l)}return d?.field&&(t.orderByFields=[`${d.field} ${d.order==="descending"?"DESC":"ASC"}`],t.outFields.push(d.field)),t}};return i([a({readOnly:!0})],e.prototype,"creatingLayerViews",null),i([a()],e.prototype,"layer",void 0),i([a()],e.prototype,"layerViews",void 0),i([a({readOnly:!0})],e.prototype,"unsupportedItemTypes",void 0),i([a()],e.prototype,"parent",void 0),i([a({readOnly:!0})],e.prototype,"isUpdating",null),e=i([f("esri.views.layers.CatalogDynamicGroupLayerView")],e),e};let g=class extends O(H(I)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new V}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(n){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((n,e)=>this.container.addChildAt(n.container,e))}};g=i([f("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],g);const Qe=g;export{Qe as default};
