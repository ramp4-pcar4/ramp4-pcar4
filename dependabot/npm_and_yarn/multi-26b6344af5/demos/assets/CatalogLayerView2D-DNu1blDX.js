import{H as r,J as o,N as a,V as m}from"./main-Cv8ITM2j.js";import{S as s,y as n}from"./LayerView-Db4tEWKD.js";import"./preload-helper-ExcqyqRp.js";import"./Container-DcnfKP8D.js";import"./MapView-DJYiaNSN.js";import"./Cyclical-BxPjl8eb.js";import"./CollectionFlattener-C24Vb2Tx.js";import"./workers-BXKSmjkC.js";import"./Queue-CEzF52XX.js";import"./intl-Dh2ocpt9.js";import"./projection-DALJEM5z.js";import"./projectBuffer-C3I4aBT7.js";import"./TileInfo-Cx0-ZIPC.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-0nC5BEdf.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-1YIVLwGt.js";import"./signal-B1irWiNX.js";import"./Map-Da4Ji3Et.js";import"./Basemap-dw02n_0u.js";import"./loadAll-JjfmhABF.js";import"./PortalItem-auRHFq7R.js";import"./writeUtils-CmJHem-D.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-B2F2AQse.js";import"./common-DQOJ18NT.js";import"./TablesMixin-AYgJ04X4.js";import"./Layer-CVn99KK7.js";import"./TimeExtent-CmJt7e8T.js";import"./GraphicsCollection-Di4jznR1.js";import"./HeightModelInfo-BYKt_3WI.js";import"./timeZoneUtils-DBnpKbsS.js";import"./ReactiveMap-CZlL85xT.js";import"./Query-CsgMbHO2.js";import"./Field-DCT5wy9q.js";import"./fieldType-DVp6Pqrh.js";import"./HighlightDefaults-BXnes3NX.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2-ChnYg_BJ.js";import"./vec2f64-DohEyf3f.js";import"./Tile-BB7XLQDh.js";import"./TileKey-MVyPksrw.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-BN5Ve0-A.js";import"./normalizeUtilsCommon-CCm4qTP6.js";import"./utils-DI5eYgHm.js";import"./utils-dx-55XQh.js";import"./mat3-CruJiiUv.js";import"./vec2f32-BbH2jxlN.js";import"./Scheduler-BnfdNYCE.js";import"./vec32-BVUDM8s2.js";import"./unitBezier-B1N-tmtC.js";import"./definitions-CvpHWbfn.js";import"./enums-Dk3osxpS.js";import"./Texture-DzjEWJjb.js";import"./getDataTypeBytes-DflDeYgv.js";import"./imageUtils-pPSAwsFG.js";import"./capabilities-Du2wdNlQ.js";import"./Version-Dt037r9d.js";import"./ColorBackground-C5gq9qdr.js";import"./parser-OujP_0wM.js";import"./layerViewUtils-JBZjtZyA.js";const l=e=>{let t=class extends e{constructor(...i){super(...i),this.layerViews=new m}get dynamicGroupLayerView(){return this.layerViews.find(i=>i.layer===this.layer?.dynamicGroupLayer)}get footprintLayerView(){return this.layerViews.find(i=>i.layer===this.layer?.footprintLayer)}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return r([o()],t.prototype,"layer",void 0),r([o()],t.prototype,"layerViews",void 0),r([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),r([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=r([a("esri.views.layers.CatalogLayerView")],t),t};let p=class extends l(s(n)){constructor(){super(...arguments),this.layerViews=new m}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};r([o()],p.prototype,"layerViews",void 0),p=r([a("esri.views.2d.layers.CatalogLayerView2D")],p);const Lt=p;export{Lt as default};
