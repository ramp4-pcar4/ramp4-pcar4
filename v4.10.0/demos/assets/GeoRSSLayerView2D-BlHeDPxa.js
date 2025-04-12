import{cf as h,cg as m,bA as g,a1 as w,ch as f,ci as d,cj as n,bw as u,by as b}from"./main-CzbArNue.js";import{j as V,y as S}from"./LayerView-Ck3mR3vt.js";import{t as _}from"./GraphicContainer-D1tkPzFa.js";import{F as T}from"./GraphicsView2D-D-uHr-64.js";import"./preload-helper-ExcqyqRp.js";import"./Container-YB8BBMjE.js";import"./layerViewUtils-CKW6QWO-.js";import"./AGraphicContainer-CQIXTHKl.js";import"./TechniqueInstance-CfXcGkOf.js";import"./UpdateTracking2D-BdYdrn9N.js";import"./BidiEngine-DNnuvc1i.js";import"./GeometryUtils-B5OGAATT.js";import"./Rect-CUzevAry.js";import"./LabelMetric-hP-xV4kN.js";import"./Program-DtvrcJVH.js";import"./BufferObject-COmOSznC.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-DC-hA0iR.js";import"./TileContainer-Da-C8_CP.js";import"./WGLContainer-lo2WWuxf.js";import"./VertexArrayObject-CH1EhbG6.js";import"./ProgramTemplate-D4pS209o.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DxIfDb1I.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-DmpjJglh.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-B-lwGHaY.js";import"./TimeOnly-Dsr-JsNO.js";import"./timeSupport-B2vaQ9ve.js";import"./normalizeUtilsSync-DB6gw0HN.js";let y=class extends V(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap(t=>{const i=this._popupTemplates.get(t),p=t.hitTest(e);for(const o of p)o.layer=s,o.sourceLayer=s,o.popupTemplate=i;return p}).map(t=>({type:"graphic",graphic:t,layer:s,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([h(()=>this.layer?.featureCollections,e=>{this._clear();for(const{popupInfo:r,featureSet:s,layerDefinition:t}of e){const i=g.fromJSON(s),p=new w(i.features),o=t.drawingInfo,c=r?f.fromJSON(r):null,a=d(o.renderer),l=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=l,this._popupTemplates.set(l,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(l),this.container.addChild(l.container)}},m),h(()=>this.layer?.polygonSymbol,e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},m),h(()=>this.layer?.lineSymbol,e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},m),h(()=>this.layer?.pointSymbol,e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},m)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const re=y;export{re as default};
