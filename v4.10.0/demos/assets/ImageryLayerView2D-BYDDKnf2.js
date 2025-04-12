import{bw as s,bx as o,by as w,ec as R,ca as b,G as _,a2 as P,m2 as F,aL as V,fb as I,bq as D,m3 as T,iL as z,cf as f,hJ as U,U as C,bW as L,s as O,J as j,fy as M,D as E,c5 as H,eO as S,a1 as $,bi as q,Q as N}from"./main-CzbArNue.js";import{d as G,f as J,a as W}from"./RasterVFDisplayObject-CCpElCRq.js";import{j as K,y as Q}from"./LayerView-Ck3mR3vt.js";import{F as X}from"./GraphicsView2D-D-uHr-64.js";import{h as Y}from"./HighlightGraphicContainer-D6ULYfwE.js";import{a as Z}from"./BitmapContainer-DXcwmg6z.js";import{n as ee}from"./Container-YB8BBMjE.js";import{l as te}from"./Bitmap-h8EKm8jv.js";import{_ as ie}from"./ExportStrategy-Bb4dR6V6.js";import{K as re}from"./rasterProjectionHelper-Bt_JRf3B.js";import{n as se}from"./WGLContainer-lo2WWuxf.js";import{i as ae}from"./timeSupport-Bj-pNdJN.js";import{p as ne}from"./popupUtils-CJBtuwUc.js";import{i as oe}from"./RefreshableLayerView-BD7EM3Zi.js";import"./preload-helper-ExcqyqRp.js";import"./BufferObject-COmOSznC.js";import"./VertexArrayObject-CH1EhbG6.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./LabelMetric-hP-xV4kN.js";import"./Program-DtvrcJVH.js";import"./layerViewUtils-CKW6QWO-.js";import"./UpdateTracking2D-BdYdrn9N.js";import"./BidiEngine-DNnuvc1i.js";import"./GeometryUtils-B5OGAATT.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-DC-hA0iR.js";import"./AttributeStore-B-lwGHaY.js";import"./TimeOnly-Dsr-JsNO.js";import"./timeSupport-B2vaQ9ve.js";import"./FeatureCommandQueue-DmpjJglh.js";import"./constants-F8oTIn7N.js";import"./normalizeUtilsSync-DB6gw0HN.js";import"./AGraphicContainer-CQIXTHKl.js";import"./TechniqueInstance-CfXcGkOf.js";import"./TileContainer-Da-C8_CP.js";import"./vec3f32-nZdmKIgz.js";import"./ProgramTemplate-D4pS209o.js";import"./StyleDefinition-DxIfDb1I.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";let h=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new ee,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Z}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(i=>{b(i)||_.getLogger(this).error(i)})}hitTest(t){return new P({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,i=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,n=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new ie({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:i,imageMaxWidth:n,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{const{source:i}=t;if(!i||i instanceof ImageBitmap)return;const n=await this.layer.applyRenderer({extent:i.extent,pixelBlock:i.originalPixelBlock??i.pixelBlock});i.filter=a=>this.layer.pixelFilter?this.layer.applyFilter(a):{...n,extent:i.extent}}).catch(t=>{b(t)||_.getLogger(this).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const i=this.view.extent,n=t.map(r=>r.source).filter(r=>r.extent&&r.extent.intersects(i)).map(r=>({extent:r.extent,pixelBlock:r.originalPixelBlock})),a=F(n,i);return a!=null?{extent:a.extent,pixelBlock:a.pixelBlock}:null}return null}async _fetchImage(t,i,n,a){(a=a||{}).timeExtent=this.timeExtent,a.requestAsImageElement=!0,a.returnImageBitmap=!0;const r=await this.layer.fetchImage(t,i,n,a);if(r.imageBitmap)return r.imageBitmap;const l=await this.layer.applyRenderer(r.pixelData,{signal:a.signal}),d=new te(l.pixelBlock,l.extent?.clone(),r.pixelData.pixelBlock);return d.filter=p=>this.layer.applyFilter(p),d}};s([o()],h.prototype,"attached",void 0),s([o()],h.prototype,"container",void 0),s([o()],h.prototype,"layer",void 0),s([o()],h.prototype,"strategy",void 0),s([o()],h.prototype,"timeExtent",void 0),s([o()],h.prototype,"view",void 0),s([o()],h.prototype,"updateRequested",void 0),s([o()],h.prototype,"updating",null),s([o()],h.prototype,"type",void 0),h=s([w("esri.views.2d.layers.imagery.ImageryView2D")],h);const le=h;class he extends se{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[G],target:()=>this.children,drawPhase:V.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===V.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends R{constructor(e){super(e),this._loading=null,this.update=I((t,i)=>this._update(t,i).catch(n=>{b(n)||_.getLogger(this).error(n)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:n,spatialReference:a}=e.state,r=new D({xmin:n.xmin,ymin:n.ymin,xmax:n.xmax,ymax:n.ymax,spatialReference:a}),[l,d]=e.state.size;this._loading=this.fetchPixels(r,l,d,i);const p=await this._loading;this._addToDisplay(p,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(e.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:n,pixelBlock:a}=e,r=new J(a);r.offset=[0,0],r.symbolizerParameters=t,r.rawPixelData=e,r.invalidateVAO(),r.x=n.xmin,r.y=n.ymax,r.pixelRatio=i.pixelRatio,r.rotation=i.rotation,r.resolution=i.resolution,r.width=a.width*t.symbolTileSize,r.height=a.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(r)}};s([o()],y.prototype,"fetchPixels",void 0),s([o()],y.prototype,"container",void 0),s([o()],y.prototype,"_loading",void 0),s([o()],y.prototype,"updating",null),y=s([w("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const pe=y;let c=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new he,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,n)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:r}=this.layer.renderer,{extent:l,width:d,height:p}=T(e,t,i,r,a);if(a!=null&&!a.intersects(e))return{extent:l,pixelBlock:null};const m={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:r,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(m)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===m.bbox)return u}const{pixelData:v}=await this.layer.fetchImage(l,d,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:n});this._dataParameters=m;const g=v?.pixelBlock;return g==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?z(g,"vector-uv"):g}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new pe({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),U),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){const e=this.container.children[0]?.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch(t=>{b(t)||_.getLogger(this).error(t)})}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,n=this._dataParameters.symbolTileSize===e.symbolTileSize,a=this._dataParameters.bbox===e.bbox;return t&&i&&n&&a}async _getProjectedFullExtent(e){try{return re(this.layer.fullExtent,e)}catch{try{const i=(await C(this.layer.url,{query:{option:"footprints",outSR:L(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?D.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([o()],c.prototype,"attached",void 0),s([o()],c.prototype,"container",void 0),s([o()],c.prototype,"layer",void 0),s([o()],c.prototype,"timeExtent",void 0),s([o()],c.prototype,"type",void 0),s([o()],c.prototype,"view",void 0),s([o()],c.prototype,"updating",null),c=s([w("esri.views.2d.layers.imagery.VectorFieldView2D")],c);const ce=c,de=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}get timeExtent(){return ae(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,n){const{layer:a}=this;if(!i)throw new O("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:r}=a,l=ne(a,n);if(!r||l==null)return[];const d=await l.getRequiredFields();j(n);const p=new M;p.timeExtent=this.timeExtent,p.geometry=i,p.outFields=d,p.outSpatialReference=i.spatialReference;const{resolution:m,spatialReference:v}=this.view,g=this.view.type==="2d"?new E(m,m,v):new E(.5*m,.5*m,v),{returnTopmostRaster:u,showNoDataRecords:B}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:g,showNoDataRecords:B,signal:n?.signal};return a.queryVisibleRasters(p,k).then(A=>A)}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return s([o()],t.prototype,"layer",void 0),s([o()],t.prototype,"suspended",void 0),s([o({readOnly:!0})],t.prototype,"timeExtent",null),s([o()],t.prototype,"view",void 0),t=s([w("esri.views.layers.ImageryLayerView")],t),t};let x=class extends de(oe(K(Q))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new H,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){this.subview?.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new X({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Y(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},S),f(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},S),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:$.isCollection(e)?e.at(0):e)instanceof P))return q();let i=[];return Array.isArray(e)||$.isCollection(e)?i=e.map(n=>n.clone()):e instanceof P&&(i=[e.clone()]),this._highlightGraphics.addMany(i),q(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){const e=!this.subview||this.subview.updating||!!this._highlightView?.updating;return N("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${this._highlightView?.updating}
`),e}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:i}=this.subview;if(i===t)return this._attachSubview(this.subview),void(i==="flow"?this.subview.redrawOrRefetch():i==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy()}this.subview=t==="imagery"?new le({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new ce({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new W({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};s([o()],x.prototype,"pixelData",null),s([o()],x.prototype,"subview",void 0),x=s([w("esri.views.2d.layers.ImageryLayerView2D")],x);const tt=x;export{tt as default};
