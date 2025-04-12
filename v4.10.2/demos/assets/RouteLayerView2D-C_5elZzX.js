import{V as m,cU as u,bT as h,aJ as g,aG as c,q as n,u as d,C as _}from"./main-B5_XOOwi.js";import{n as w}from"./CollectionFlattener-B3O4Qmeo.js";import{c as y,y as f,C as k,T as M,j as V,S as F,w as G}from"./Stop-C75vW5xb.js";import{j as I,y as v}from"./LayerView-D5ric1Fk.js";import{t as H}from"./GraphicContainer-DwUAC0J-.js";import{F as C}from"./GraphicsView2D-Bp4yBR-0.js";import"./preload-helper-ExcqyqRp.js";import"./Container-BkgZTubD.js";import"./MapView-D3j_x9y3.js";import"./Cyclical-Q67pgA4o.js";import"./workers-CLEUx-4i.js";import"./projection-DwpqUf7U.js";import"./projectBuffer-D86redIv.js";import"./TileInfo-StdZn4ln.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-DFZ_kfB7.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-BdIrwhdI.js";import"./signal-BmShen8Z.js";import"./Map-Dzxs0_tk.js";import"./Basemap-cLJEzEdH.js";import"./loadAll-BQJvdbTr.js";import"./PortalItem-CktkXSu9.js";import"./writeUtils-CxoVKn6O.js";import"./compilerUtils-B8Oqdvs0.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CUdVSMyt.js";import"./common-DQOJ18NT.js";import"./TablesMixin--edRJQOH.js";import"./Layer-nl2KuhhW.js";import"./TimeExtent-ClRYiBYy.js";import"./GraphicsCollection-C_v3VqdJ.js";import"./HeightModelInfo-Dpjf8T_K.js";import"./ReactiveMap-BpK7xt0I.js";import"./Query-De_HsvnG.js";import"./Field-q5OmBPu1.js";import"./fieldType-DlCBsK54.js";import"./arcgisLayerUrl-ByaroTWn.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-Jg2vjQ2s.js";import"./TileKey-CenpbqtG.js";import"./QueueProcessor-P1Cs6Xv8.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-CPO1YcIx.js";import"./normalizeUtilsCommon-HtTsMmEj.js";import"./utils-DSGzLx6N.js";import"./utils-WXIwzruR.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-BjkYeJa9.js";import"./vec32-DACfXE6P.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-BcRrejO3.js";import"./imageUtils-D9b4JOJn.js";import"./capabilities-A2uoe7dc.js";import"./Version-CcbNCCmU.js";import"./ColorBackground-CA8v27Dq.js";import"./parser-CAHBIv-f.js";import"./layerViewUtils-BkodGkFg.js";import"./AGraphicContainer-CQJidBZa.js";import"./TechniqueInstance-C9u5_Xl7.js";import"./UpdateTracking2D-BiTSjEFK.js";import"./BidiEngine-DNnuvc1i.js";import"./OptimizedFeature-CIptWNVu.js";import"./GeometryUtils-BShtGQBl.js";import"./enums-CmIX1y88.js";import"./utils-QWndGYJy.js";import"./Rect-CUzevAry.js";import"./LabelMetric-DczyNyKP.js";import"./Program-C7FtASgE.js";import"./BufferObject-C-QZP8jq.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./TileContainer-OacCTZwO.js";import"./WGLContainer-C0tqf-x_.js";import"./VertexArrayObject-BeiW32tk.js";import"./ProgramTemplate-Crp_ALi5.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-Cis_UHTR.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-Dhi1HmKa.js";import"./constants-F8oTIn7N.js";import"./lengthUtils-DlDHnfM5.js";import"./FieldsIndex-BNj5OlWf.js";import"./UnknownTimeZone-D-YXmXYN.js";import"./OverrideHelper-ofq62wpQ.js";import"./colorUtils-C4LAP-uj.js";import"./quantizationUtils-ehEELOvw.js";import"./AttributeStore-B71bDnPh.js";import"./TimeOnly-sZc6VCBg.js";import"./timeSupport-BGRVL44S.js";import"./queryUtils-BtDLuTtI.js";import"./json-Wa8cmqdu.js";import"./labelUtils-ybkpe3rr.js";import"./diffUtils-3ep_FgLd.js";import"./normalizeUtilsSync-BBx5ii43.js";const U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],s={graphic:null,property:null,oldValue:null,newValue:null};function l(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof V||t instanceof F||t instanceof G}function b(t){return m.isCollection(t)&&t.length&&l(t.at(0))}function $(t){return Array.isArray(t)&&t.length>0&&l(t[0])}const T=new Set(["default"]);let p=class extends I(v){constructor(){super(...arguments),this._graphics=new m,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new w({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new m([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(t,i){return this._graphicsView.hitTest(t).filter(({popupTemplate:r})=>!!r)}highlight(t){let i;i=l(t)?[this._getNetworkFeatureUid(t)]:$(t)?t.map(e=>this._getNetworkFeatureUid(e)):b(t)?t.map(e=>this._getNetworkFeatureUid(e)).toArray():[t.uid];const r=i.filter(h);return r.length?(this._addHighlight(r),g(()=>this._removeHighlight(r))):g()}async hitTest(t,i){if(this.suspended)return null;const r=this._graphicsView.hitTest(t).filter(h).map(o=>this._networkGraphicMap.get(o));if(!r.length)return null;const{layer:e}=this;return r.reverse().map(o=>({type:"route",layer:e,mapPoint:t,networkFeature:o}))}isUpdating(){return this._graphicsView.updating}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i);this._highlightIds.set(i,r+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_createGraphic(t){const i=t.toGraphic();return i.layer=this.layer,i.sourceLayer=this.layer,i}_createGraphicsView(){const t=this.view,i=()=>this.requestUpdate(),r=new H(t.featuresTilingScheme);this._graphicsView=new C({container:r,graphics:this._graphics,requestUpdateCallback:i,view:t}),this.container.addChild(r),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const i=this._networkGraphicMap.get(t);return U.indexOf(i.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i)-1;r===0?this._highlightIds.delete(i):this._highlightIds.set(i,r)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(i=>{const r=this._networkFeatureMap.get(i);return this._networkFeatureMap.delete(i),this._networkGraphicMap.delete(r),r}));for(const i of t.removed)this.removeHandles(i)}if(t.added.length){this._graphics.addMany(t.added.map(i=>{const r=this._createGraphic(i);return r.symbol==null?null:(this._networkFeatureMap.set(i,r),this._networkGraphicMap.set(r,i),r)}).filter(h));for(const i of t.added)this.addHandles([c(()=>i.geometry,(r,e)=>{this._updateGraphic(i,"geometry",r,e)}),c(()=>i.symbol,(r,e)=>{this._updateGraphic(i,"symbol",r,e)})],i);this._graphics.sort((i,r)=>this._getDrawOrder(i)-this._getDrawOrder(r))}}_updateGraphic(t,i,r,e){if(!this._networkFeatureMap.has(t)){const a=this._createGraphic(t);return this._networkFeatureMap.set(t,a),this._networkGraphicMap.set(a,t),void this._graphics.add(a)}const o=this._networkFeatureMap.get(t);o[i]=r,s.graphic=o,s.property=i,s.oldValue=e,s.newValue=r,this._graphicsView.graphicUpdateHandler(s)}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),i=this._getHighlightBits(T);this._graphicsView.setHighlight(t.map(r=>({objectId:r,highlightFlags:i})))}};n([d()],p.prototype,"_graphics",void 0),n([d()],p.prototype,"_routeItems",null),p=n([_("esri.views.2d.layers.RouteLayerView2D")],p);const $i=p;export{$i as default};
