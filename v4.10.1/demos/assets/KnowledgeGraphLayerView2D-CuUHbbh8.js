import{V as p,cZ as m,q as o,u as e,c_ as s,C as a}from"./main-DVcB5zI_.js";import{j as n,y as l}from"./LayerView-Cb-mJ3es.js";import"./preload-helper-ExcqyqRp.js";import"./Container-BOwrAcpT.js";import"./MapView-Ougaz02y.js";import"./Cyclical-BcA_4fo8.js";import"./CollectionFlattener-BAsMBd7E.js";import"./workers-CY8xHZs2.js";import"./projection-DjziTCz4.js";import"./projectBuffer-B7AMRl4P.js";import"./TileInfo-DhYUgyXn.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-Ba4XM4Ut.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DAC2m1vS.js";import"./signal-B7JiYuXd.js";import"./Map-XsWsCXx8.js";import"./Basemap-CMw_k2_s.js";import"./loadAll-CJCy9vk7.js";import"./PortalItem-CptTE56-.js";import"./writeUtils-vFOV-ALC.js";import"./compilerUtils-rS1KC4Oo.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CP7NBZcJ.js";import"./common-DQOJ18NT.js";import"./TablesMixin-CIxMVeFQ.js";import"./Layer-cAwBsVeK.js";import"./TimeExtent-BMnBstjf.js";import"./GraphicsCollection-Cj8wkAKF.js";import"./HeightModelInfo-Dd2gdcVw.js";import"./ReactiveMap-_K9BMkOn.js";import"./Query-5sYd3NzA.js";import"./Field-BdhLPXiD.js";import"./fieldType-CvjC4q_e.js";import"./arcgisLayerUrl-euAJ5jxV.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-CAWO6zY7.js";import"./TileKey-Bz77V7QA.js";import"./QueueProcessor-C6GPWQzh.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-BpU5i4_g.js";import"./normalizeUtilsCommon-D8VYrgzx.js";import"./utils-DrUkmw0x.js";import"./utils-BRf9xhkT.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CWFw9Bw5.js";import"./vec32-Wf-7vQga.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DbH8YzE1.js";import"./imageUtils-BeT7jt9L.js";import"./capabilities-A2uoe7dc.js";import"./Version-DmQ6ASes.js";import"./ColorBackground-BnXhsrP_.js";import"./parser-ECfG-EPz.js";import"./layerViewUtils-DqfkSRZG.js";let r=class extends n(l){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",m(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};o([e({cast:s})],r.prototype,"layerViews",null),o([e({readOnly:!0})],r.prototype,"updatingProgress",null),r=o([a("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const wt=r;export{wt as default};
