import{bi as V,g_ as F,gZ as W,cc as c,cd as g,aI as G,g$ as D,h0 as x,G as E,s as k,ct as Q,cx as B,cy as L,gV as j,bt as l,bu as d,bv as b,e9 as N,a8 as Z,hG as q,c9 as O,c4 as $,c5 as J,c6 as K,kv as X,c7 as Y,bn as ee,bz as te,b2 as ie,kw as se}from"./main-DCIX61zy.js";import{j as re,m as H}from"./perspectiveUtils-CAHA4mHB.js";import"./floatRGBA-CNeCgBBY.js";import"./UpdateTracking2D-swFQJIjy.js";import"./GeometryUtils-v59R1Z6F.js";import{e as ne}from"./Container-C-rqKhNk.js";import"./WGLContainer-whJgsi2t.js";import"./Program-1XjJitsM.js";import"./LabelMetric-DpMX58iW.js";import"./StyleDefinition-CovmM7Ch.js";import"./enums-qHpGJ28Q.js";import"./GridShader--au302uP.js";import"./FeatureCommandQueue-F8dH-mVd.js";import"./PieChartMeshWriter-DYJnKx_X.js";import"./renderState-CRtOsw3X.js";import"./interfaces-DN2-jsJC.js";import"./testSVGPremultipliedAlpha-DmWsO1ZL.js";import"./GraphicsView2D-DGP_h330.js";import"./earcut-XDcq3zAf.js";import"./vec3f32-BS0cezmI.js";import{e as ae}from"./mat3f64-Dh9_zhFu.js";import{f as oe}from"./utils-CsPw9DoV.js";import{u as le}from"./OverlayContainer-8YXsjMqg.js";import{j as he,y as de}from"./LayerView-DONYuvqR.js";const U=[1,1],m=ae(),ce={none:V.None,loop:V.Loop,oscillate:V.Oscillate};function ue(e){return e?{type:"CIMAnimatedSymbolProperties",...e,playAnimation:e.playing,repeatType:e.repeatType?ce[e.repeatType]:void 0}:{type:"CIMAnimatedSymbolProperties"}}let me=class extends ne{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.wrapAroundShift=0,this.perspectiveTransform=F(),this._handles=new W,this._vertices=new Float32Array(8),this._indices=new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]),this._handles.add([c(()=>this.elementView.element.opacity,t=>this.opacity=t,g),c(()=>[this.elementView.coords],()=>{this.requestRender()},g),c(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{this._handles.remove("play"),this.texture=G(this.texture),this.requestRender()},g),D(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&(this._handles.add([x(t.content,"play",()=>this.requestRender()),x(t.content,"loadeddata",()=>this.requestRender()),x(t.content,"loaded",()=>this.requestRender())]),"requestVideoFrameCallback"in t.content?t.content.requestVideoFrameCallback(()=>this.requestRender()):this._handles.add([x(t.content,"seeked",()=>this.requestRender())]),this.requestRender())},g)]),e.element.load().catch(t=>{E.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new k("element-load-error","Element cannot be displayed",{element:e,error:t}))})}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=G(this.texture)}get textureSize(){return U}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,i=this.elementView.element.content;if(i!=null){const s=i instanceof HTMLImageElement,r=i instanceof HTMLVideoElement,o=s?i.naturalWidth:r?i.videoWidth:i.width,n=s?i.naturalHeight:r?i.videoHeight:i.height;if(this._updatePerspectiveTransform(o,n),this.texture)r&&(this.texture.setData(i),this.texture.generateMipmap(),"requestVideoFrameCallback"in i?i.requestVideoFrameCallback(()=>this.requestRender()):i.paused||this.requestRender());else{const a=new Q;if(a.wrapMode=B.CLAMP_TO_EDGE,a.preMultiplyAlpha=!0,a.width=o,a.height=n,"getFrame"in i){const f=u=>{this.texture?this.texture.setData(u):this.texture=new L(t,a,u),this.requestRender()};"animationOptions"in this.elementView.element&&this._handles.add(oe(i,ue(this.elementView.element.animationOptions),null,f),"play")}else this.texture=new L(t,a,i);this.texture.generateMipmap(),r&&("requestVideoFrameCallback"in i?i.requestVideoFrameCallback(()=>this.requestRender()):i.paused||this.requestRender())}}super.beforeRender(e)}_createTransforms(){return null}draw(e,t){this.isReady&&this.texture!=null?t.render(e,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:U,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._indices}):this.requestRender()}updateDrawCoords(e,t,i,s){const{coords:r,bounds:o}=this.elementView;if(r==null||o==null)return;const[n,a,f,u]=r.rings[0],z=this._vertices,{x:_,y:w}=e;z.set([a[0]-_,a[1]-w,n[0]-_,n[1]-w,f[0]-_,f[1]-w,u[0]-_,u[1]-w]);let v=t;if(s){const[T,,C]=o,{worldWidth:S,xBounds:I}=s,[M,A]=I;T<M&&C>M?v=S:C>A&&T<A&&(v=-S)}this.wrapAroundShift=v,this.isWrapAround=v!==0}_updatePerspectiveTransform(e,t){const i=this._vertices;re(m,[0,0,e,0,0,t,e,t],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),j(this.perspectiveTransform,m[6]/m[8]*e,m[7]/m[8]*t)}},R=class extends N{constructor(){super(...arguments),this.tool="transform"}};l([d()],R.prototype,"tool",void 0),R=l([b("esri.views.3d.layers.support.MediaLayerInteractionOptions")],R);const pe=e=>{let t=class extends e{constructor(...i){super(...i),this.layer=null,this.interactive=!1,this.interactionOptions=new R,this.selectedElement=null}};return l([d()],t.prototype,"layer",void 0),l([d()],t.prototype,"interactive",void 0),l([d()],t.prototype,"interactionOptions",void 0),l([d()],t.prototype,"selectedElement",void 0),t=l([b("esri.views.layers.MediaLayerView")],t),t};let p=class extends he(pe(de)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this._interaction=null,this.layer=null,this.elements=new Z}initialize(){this.addHandles([c(()=>[this.interactive,this.suspended],async()=>{if(this.interactive&&!this._interaction){const{MediaLayerInteraction:e}=await import("./MediaLayerInteraction-CX2jXduH.js");this._interaction=new e({view:this.view,layer:this.layer}),this.selectedElement!==this._interaction.selectedElement&&(this._interaction.selectedElement=this.selectedElement),this.interactionOptions!==this._interaction.options&&(this._interaction.options=this.interactionOptions)}this._interaction&&(this._interaction.enabled=!this.suspended&&this.interactive)},q),c(()=>this.interactionOptions,e=>{this._interaction&&(this._interaction.options=e)},q),c(()=>this.selectedElement,e=>{this._interaction&&(this._interaction.selectedElement=e)},q)])}attach(){this.addAttachHandles([O(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(e=>this._updateTile(e)),this.requestUpdate()}),O(()=>this.layer.effectiveSource,"change",({element:e})=>this._elementUpdateHandler(e))]),this._overlayContainer=new le,this.container.addChild(this._overlayContainer),this._fetchQueue=new $({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t),scheduler:this.scheduler,priority:J.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new K({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(e){return!0}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e)}async hitTest(e,t){const i=[],s=e.normalize(),r=[s.x,s.y];for(const{elementView:{normalizedCoords:o,element:n}}of this._elementReferences.values())o!=null&&X(o.rings,r)&&i.push({type:"media",element:n,layer:this.layer,mapPoint:e,sourcePoint:n.toSource(e)});return i.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updateTile(e))}_acquireTile(e){const t=new ye(e.clone());return this._updateTile(t),t}_updateTile(e){this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then(t=>{const[i,s]=e.setElements(t);this._referenceElements(e,i),this._dereferenceElements(e,s),this.requestUpdate()},t=>{Y(t)||E.getLogger(this).error(t)}))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const i=this.layer.effectiveSource;if(i==null)return[];this.view.featuresTilingScheme.getTileBounds(h,e,!0);const s=new ee({xmin:h[0],ymin:h[1],xmax:h[2],ymax:h[3],spatialReference:this.view.spatialReference});return i.queryElements(s,t)}_referenceElements(e,t){if(this.layer.source!=null)for(const i of t)this._referenceElement(e,i)}_referenceElement(e,t){te(this._elementReferences,t.uid,()=>{const i=new H({element:t,spatialReference:this.view.spatialReference}),s=new me(i);return this._overlayContainer.addChild(s),this.elements.add(t),this._updatingHandles.addPromise(t.load().catch(r=>{E.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new k("element-load-error","Element cannot be displayed",{element:t,error:r}))})),{debugGraphic:null,elementView:i,overlay:s,tiles:new Set}}).tiles.add(e)}_dereferenceElements(e,t){for(const i of t)this._dereferenceElement(e,i)}_dereferenceElement(e,t){const i=this._elementReferences.get(t.uid);i.tiles.delete(e),i.tiles.size||(this._overlayContainer.removeChild(i.overlay),i.overlay.destroy(),i.elementView.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(i.debugGraphic))}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){const s=t.elementView.normalizedCoords;if(s==null)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.elementView.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t.debugGraphic);const r=[],o=[];for(const n of this._tileStrategy.tiles){const a=P(this.view.featuresTilingScheme,n,s);t.tiles.has(n)?a||o.push(n):a&&r.push(n)}for(const n of r)this._referenceElement(n,e);for(const n of o)this._dereferenceElement(n,e);return t=this._elementReferences.get(e.uid),void(t?.debugGraphic&&(t.debugGraphic.geometry=t.elementView.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const i=new H({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(i!=null)for(const s of this._tileStrategy.tiles)P(this.view.featuresTilingScheme,s,i)&&this._referenceElement(s,e)}};l([d()],p.prototype,"layer",void 0),l([d({readOnly:!0})],p.prototype,"elements",void 0),p=l([b("esri.views.2d.layers.MediaLayerView2D")],p);const h=ie(),y={xmin:0,ymin:0,xmax:0,ymax:0};function P(e,t,i){return e.getTileBounds(h,t.key,!0),y.xmin=h[0],y.ymin=h[1],y.xmax=h[2],y.ymax=h[3],se(y,i)}class ye{constructor(t){this.key=t,this.elements=null,this.isReady=!1,this.visible=!0}setElements(t){const i=[],s=new Set(this.elements);this.elements=t;for(const r of t)s.has(r)?s.delete(r):i.push(r);return this.isReady=!0,[i,Array.from(s)]}destroy(){}}const fe=p;export{fe as default};
