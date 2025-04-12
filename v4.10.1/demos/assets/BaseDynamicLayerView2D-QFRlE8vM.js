import{H as e,n as a,q as o,u as p,C as s}from"./main-DVcB5zI_.js";import{a as n}from"./BitmapContainer-BQfvU26W.js";import{j as h,y as d}from"./LayerView-Cb-mJ3es.js";import{_ as u}from"./ExportStrategy-BNZsgJma.js";import{i as y}from"./RefreshableLayerView-CjzrHVPG.js";import"./preload-helper-ExcqyqRp.js";import"./WGLContainer-BePauJvS.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-C0VauK1H.js";import"./enums-CmIX1y88.js";import"./Texture-DbH8YzE1.js";import"./enums-Dk3osxpS.js";import"./Program-D_qKh8JQ.js";import"./BufferObject-B3tUf6Mp.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-DbuVowb_.js";import"./ProgramTemplate-3OIt2-Ks.js";import"./Tile-CAWO6zY7.js";import"./common-DQOJ18NT.js";import"./TileKey-Bz77V7QA.js";import"./vec2-DGVIkCvT.js";import"./QueueProcessor-C6GPWQzh.js";import"./workers-CY8xHZs2.js";import"./ReactiveMap-_K9BMkOn.js";import"./signal-B7JiYuXd.js";import"./quickselect-QQC62dOK.js";import"./Query-5sYd3NzA.js";import"./Field-BdhLPXiD.js";import"./fieldType-CvjC4q_e.js";import"./TimeExtent-BMnBstjf.js";import"./mat3-XZDRtl20.js";import"./MapView-Ougaz02y.js";import"./Cyclical-BcA_4fo8.js";import"./CollectionFlattener-BAsMBd7E.js";import"./projection-DjziTCz4.js";import"./projectBuffer-B7AMRl4P.js";import"./TileInfo-DhYUgyXn.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-Ba4XM4Ut.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DAC2m1vS.js";import"./Map-XsWsCXx8.js";import"./Basemap-CMw_k2_s.js";import"./loadAll-CJCy9vk7.js";import"./PortalItem-CptTE56-.js";import"./writeUtils-vFOV-ALC.js";import"./compilerUtils-rS1KC4Oo.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CP7NBZcJ.js";import"./TablesMixin-CIxMVeFQ.js";import"./Layer-cAwBsVeK.js";import"./GraphicsCollection-Cj8wkAKF.js";import"./HeightModelInfo-Dd2gdcVw.js";import"./arcgisLayerUrl-euAJ5jxV.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./normalizeUtils-BpU5i4_g.js";import"./normalizeUtilsCommon-D8VYrgzx.js";import"./utils-DrUkmw0x.js";import"./utils-BRf9xhkT.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CWFw9Bw5.js";import"./vec32-Wf-7vQga.js";import"./imageUtils-BeT7jt9L.js";import"./capabilities-A2uoe7dc.js";import"./Version-DmQ6ASes.js";import"./ColorBackground-BnXhsrP_.js";import"./vec3f32-nZdmKIgz.js";import"./Container-BOwrAcpT.js";import"./parser-ECfG-EPz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-Y0Xsf7-x.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./layerViewUtils-DqfkSRZG.js";import"./Bitmap-CRXjsDeh.js";let t=class extends y(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new u({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const zt=t;export{zt as default};
