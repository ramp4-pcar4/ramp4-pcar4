import{ak as l,bn as h,F as g,j as f,fe as w,ff as u,fg as n,K as d,O as b}from"./main.efb50b2c.js";import{f as S,u as V}from"./LayerView.098e8f00.js";import{i as v}from"./GraphicContainer.c13e7f7c.js";import{a as _}from"./BaseGraphicContainer.ab876b54.js";import"./preload-helper.387dac8f.js";import"./utils.9619dae6.js";import"./Utils.f67560a4.js";import"./enums.6e42a319.js";import"./enums.de935fa5.js";import"./Texture.627d6838.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.c216087c.js";import"./CIMSymbolHelper.6248d0ad.js";import"./BidiEngine.ec67919b.js";import"./GeometryUtils.814cb798.js";import"./normalizeUtilsSync.38eabbc7.js";import"./projectionSupport.a2ec70ff.js";import"./json.d1a0fa35.js";import"./VertexArrayObject.e5cd7959.js";import"./FeatureContainer.423509ab.js";import"./TileContainer.bca8274f.js";import"./WGLContainer.83fa1e96.js";import"./ProgramTemplate.1056febf.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./visualVariablesUtils.42df48c6.js";import"./visualVariablesUtils.087ada97.js";import"./Matcher.41df3644.js";import"./tileUtils.0431f5e8.js";import"./TileClipper.68567d53.js";import"./Geometry.b68345ae.js";import"./ExpandedCIM.7b8d9605.js";import"./quantizationUtils.d09757e3.js";import"./devEnvironmentUtils.8c6e6b72.js";import"./schemaUtils.692e0e19.js";import"./createSymbolSchema.47a02593.js";import"./MD5.97b39efc.js";import"./util.5d5e59e8.js";import"./ComputedAttributeStorage.a7ff046c.js";import"./centroid.79915d1f.js";import"./vec3f32.8d37ecf5.js";let y=class extends S(V){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(t=>{const i=this._popupTemplates.get(t),p=t.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=i;return p}).flat().map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.handles.add([l(()=>this.layer?.featureCollections,e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),p=new f(i.features),s=t.drawingInfo,c=r?w.fromJSON(r):null,a=u(s.renderer),m=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new v(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>this.layer?.polygonSymbol,e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>this.layer?.lineSymbol,e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>this.layer?.pointSymbol,e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=d([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const ce=y;export{ce as default};
