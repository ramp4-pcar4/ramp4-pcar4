import{e as r,y as a,fc as l,k as m,fd as g,bl as d,bq as u,p as c,bp as y}from"./main-8009ebf4.js";import{a as f}from"./BitmapContainer-58f50df4.js";import{f as x,u as w}from"./LayerView-4cbc94e3.js";import{a as v}from"./GraphicsView2D-0752e7a2.js";import{n as _}from"./HighlightGraphicContainer-13c896ed.js";import{v as H}from"./ExportStrategy-103b54cb.js";import{i as I}from"./RefreshableLayerView-bcc6a8c5.js";import{S as b,a as V}from"./drapedUtils-2453c0fd.js";import"./preload-helper-388ac9d5.js";import"./WGLContainer-89ed5ced.js";import"./definitions-cc1dbf1d.js";import"./VertexArrayObject-e9cbf53c.js";import"./Texture-54c1cd22.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-db1e2af1.js";import"./enums-f1a6a48a.js";import"./ProgramTemplate-edacfcc0.js";import"./MaterialKey-b40e2f2f.js";import"./utils-8928f1dc.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-9107641e.js";import"./earcut-61f7b102.js";import"./ExpandedCIM-9c7118f8.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-3cda2a0c.js";import"./floatRGBA-a019290c.js";import"./normalizeUtilsSync-96066691.js";import"./projectionSupport-3f6ca955.js";import"./json-48e3ea08.js";import"./AttributeStoreView-a03da5ff.js";import"./TiledDisplayObject-34f8c26b.js";import"./visualVariablesUtils-19bb0f88.js";import"./visualVariablesUtils-0c1b8204.js";import"./Matcher-7e90ee77.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-3fb14243.js";import"./devEnvironmentUtils-f2a1f21e.js";import"./schemaUtils-4ce7eb31.js";import"./util-bcfd34c1.js";import"./ComputedAttributeStorage-119e2cd6.js";import"./arcadeTimeUtils-b303a482.js";import"./executionError-c1d13a98.js";import"./centroid-ad024a23.js";import"./BaseGraphicContainer-5ddab985.js";import"./FeatureContainer-e59f9073.js";import"./TileContainer-daa0ec0d.js";import"./vec3f32-ad1dc57f.js";import"./Bitmap-d75cb323.js";import"./popupUtils-4c7b9c4d.js";const P=t=>{let e=class extends t{initialize(){this.exportImageParameters=new g({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return r([a()],e.prototype,"exportImageParameters",void 0),r([a({readOnly:!0})],e.prototype,"floors",null),r([a({readOnly:!0})],e.prototype,"exportImageVersion",null),r([a()],e.prototype,"layer",void 0),r([a()],e.prototype,"suspended",void 0),r([a(l)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends P(I(x(w))){constructor(){super(...arguments),this._highlightGraphics=new d,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{u(i)||c.getLogger(this.declaredClass).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,o=i>=10.3,n=i>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new v({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new b({createFetchPopupFeaturesQueryGeometry:(p,h)=>V(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new H({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:o,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(y(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,o){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...o})}fetchImageBitmap(t,e,i,o){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...o})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([a()],s.prototype,"strategy",void 0),r([a()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const $t=s;export{$t as default};
