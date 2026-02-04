import { bC as rn, bh as w$1, U as U$1, bl as i, bv as j$1, bp as l$1, f8 as w, bz as a$1, w as w$2, r as r$1, t, bB as tn, f as f$2, ev as a$2, f9 as v, b9 as f$3, fa as A, e, y, k as a$3 } from './main-5658cd6e.js';
import { b as b$1, g, d } from './kmlUtils-c93aec2b.js';
import { T, S, R } from './Bitmap-076fab0d.js';
import { a } from './BitmapContainer-1c30d2c9.js';
import { f as f$1, u } from './LayerView-cbc55a02.js';
import { i as i$1 } from './GraphicContainer-de440b5e.js';
import { a as ae } from './GraphicsView2D-d60c0d5b.js';
import { C, $ } from './rasterProjectionHelper-37018e9e.js';
import { n } from './WGLContainer-ac280853.js';
import { I, o } from './RenderingContext-e07e9e35.js';
import { P as P$1, G as G$1, D, L as L$1, Y, V, f } from './enums-1f7f0b0a.js';
import { x as x$1 } from './VertexArrayObject-2ba4bad7.js';
import { l } from './rasterUtils-3c62a6a1.js';
import { E } from './Texture-aefe232f.js';
import './preload-helper-a4975f27.js';
import './Container-1d8ffe9c.js';
import './definitions-281daf3f.js';
import './color-6132b2c2.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './BaseGraphicContainer-6190d2a2.js';
import './FeatureContainer-eea18812.js';
import './AttributeStoreView-2c6b7676.js';
import './TiledDisplayObject-4282c17d.js';
import './visualVariablesUtils-93e46889.js';
import './visualVariablesUtils-1950eea1.js';
import './TileContainer-76cc62ef.js';
import './utils-6a1fc53c.js';
import './MaterialKey-99ff6359.js';
import './vec3f32-b6e01a26.js';
import './ExpandedCIM-78770fa3.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-ec270d9a.js';
import './floatRGBA-0f682c7a.js';
import './normalizeUtilsSync-c3a052ce.js';
import './projectionSupport-90bb00b7.js';
import './json-ce6e5728.js';
import './Matcher-df890909.js';
import './tileUtils-f6baf24c.js';
import './TurboLine-b7a337a5.js';
import './GeometryUtils-7c55c6d6.js';
import './earcut-336027d9.js';
import './devEnvironmentUtils-d73295e7.js';
import './schemaUtils-b103f304.js';
import './util-0ab7a9cb.js';
import './ComputedAttributeStorage-8c98a3c7.js';
import './arcadeTimeUtils-53abd942.js';
import './executionError-ed2c63c0.js';
import './centroid-c9063998.js';
import './ProgramTemplate-cc07a7d7.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './programUtils-a98bc428.js';
import './NestedMap-5d3a039b.js';
import './OrderIndependentTransparency-639df392.js';
import './basicInterfaces-9de11baf.js';
import './doublePrecisionUtils-fe2da5f2.js';
import './webgl-debug-e97fec6d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class b{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else {if(b._instance)return b._instanceRefCount++,b._instance;b._instanceRefCount=1,b._instance=this,this._ownsRctx=!0;const t=document.createElement("canvas").getContext("webgl");t.getExtension("OES_texture_float"),this._rctx=new I(t,{});}const e={applyProjection:!0,bilinear:!1,bicubic:!1},r=o("raster/reproject","raster/reproject",new Map([["a_position",0]]),e);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new n(this._rctx,[0,0,1,0,0,1,1,1]);}reprojectTexture(t,s,n=!1){const o=rn(t.extent,s),m=new w$1({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:l$1,y:b}=C(m,s,t.extent);let T=(l$1+b)/2;const R=Math.round((o.xmax-o.xmin)/T),j=Math.round((o.ymax-o.ymin)/T);T=(o.width/R+o.height/j)/2;const E$1=new w$1({x:T,y:T,spatialReference:o.spatialReference}),D$1=$({projectedExtent:o,srcBufferExtent:t.extent,pixelSize:E$1,hasWrapAround:!0,spacing:[16,16]}),C$1=l(this._rctx,D$1),y=new E(this._rctx,{width:R,height:j,pixelFormat:P$1.RGBA,dataType:G$1.UNSIGNED_BYTE,wrapMode:D.CLAMP_TO_EDGE,samplingMode:L$1.LINEAR,hasMipmap:!1}),M=new x$1(this._rctx,{colorTarget:Y.TEXTURE,depthStencilTarget:V.NONE,width:R,height:j},y);this._rctx.bindFramebuffer(M),this._rctx.setViewport(0,0,R,j),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(C$1,1),this._quad.bind();const{width:A=0,height:S=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",A,S),this._program.setUniform2fv("u_transformSpacing",D$1.spacing),this._program.setUniform2fv("u_transformGridSize",D$1.size),this._program.setUniform2f("u_targetImageSize",R,j),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),C$1.dispose(),n){const{width:t=0,height:e=0}=M.descriptor,r=new ImageData(t,e);return M.readPixels(0,0,t,e,P$1.RGBA,G$1.UNSIGNED_BYTE,r.data),M.detachColorTexture(f.COLOR_ATTACHMENT0),M.dispose(),{texture:y,extent:o,imageData:r}}return M.detachColorTexture(f.COLOR_ATTACHMENT0),M.dispose(),{texture:y,extent:o}}reprojectBitmapData(t,e){const r=T(t.bitmapData)?S(t.bitmapData):t.bitmapData,i=new E(this._rctx,{width:t.bitmapData.width,height:t.bitmapData.height,pixelFormat:P$1.RGBA,dataType:G$1.UNSIGNED_BYTE,wrapMode:D.CLAMP_TO_EDGE,samplingMode:L$1.LINEAR,hasMipmap:!1},r),a=this.reprojectTexture({texture:i,extent:t.extent},e,!0);a.texture.dispose();const o=document.createElement("canvas"),m=a.imageData;o.width=m.width,o.height=m.height;return o.getContext("2d").putImageData(m,0,0),{bitmapData:o,extent:a.extent}}async loadAndReprojectBitmapData(e,r,i){const a=(await U$1(e,{responseType:"image"})).data,s=document.createElement("canvas");s.width=a.width,s.height=a.height;const n=s.getContext("2d");n.drawImage(a,0,0);const o=n.getImageData(0,0,s.width,s.height);if(r.spatialReference.equals(i))return {bitmapData:o,extent:r};const m=this.reprojectBitmapData({bitmapData:o,extent:r},i);return {bitmapData:m.bitmapData,extent:m.extent}}destroy(){this._ownsRctx?(b._instanceRefCount--,0===b._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),b._instance=null)):(this._quad.dispose(),this._program.dispose());}}b._instanceRefCount=0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class k{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let P=class extends(f$1(u)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new a,this._kmlVisualData=new k,this._fetchController=null,this.allVisiblePoints=new i,this.allVisiblePolylines=new i,this.allVisiblePolygons=new i,this.allVisibleMapImages=new j$1;}async hitTest(e,i){const t=this.layer;return [this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map((i=>(i.layer=t,i.sourceLayer=t,{type:"graphic",graphic:i,layer:t,mapPoint:e})))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new ae({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new ae({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new ae({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));})),l$1((()=>this.layer.visibleSublayers),(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new b;}detach(){this._fetchController=w(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=a$1(this._polygonsView),this._polylinesView=a$1(this._polylinesView),this._pointsView=a$1(this._pointsView),this._imageReprojector=a$1(this._imageReprojector);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,w$2.fromJSON(e.extent),this.view.spatialReference).then((i=>{const t=new R(i.bitmapData,{immutable:!1,requestRenderOnSourceChangedEnabled:!0});t.x=i.extent.xmin,t.y=i.extent.ymax,t.resolution=i.extent.width/i.bitmapData.width,t.rotation=e.rotation,this._mapImageContainer.addChild(t),this._bitmapIndex.set(e,t);}));}async _getViewDependentUrl(e,t$1){const{viewFormat:s,viewBoundScale:a,httpQuery:l}=e;if(r$1(s)){if(t(t$1))throw new Error("Loading this network link requires a view state.");let p;if(await tn(),r$1(a)&&1!==a){const e=new w$2(t$1.extent);e.expand(a),p=e;}else p=t$1.extent;p=rn(p,f$2.WGS84);const m=rn(p,f$2.WebMercator),w=p.xmin,u=p.xmax,_=p.ymin,V=p.ymax,f=t$1.size[0]*t$1.pixelRatio,v$1=t$1.size[1]*t$1.pixelRatio,S=Math.max(m.width,m.height),I={"[bboxWest]":w.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":V.toString(),"[lookatLon]":p.center.x.toString(),"[lookatLat]":p.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":t$1.rotation.toString(),"[lookatTerrainLon]":p.center.x.toString(),"[lookatTerrainLat]":p.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":p.center.x.toString(),"[cameraLat]":p.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":f.toString(),"[vertPixels]":v$1.toString(),"[terrainEnabled]":"0","[clientVersion]":a$2,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},x=e=>{for(const i in e)for(const t in I)e[i]=e[i].replace(t,I[t]);},C=v(s);x(C);let j={};r$1(l)&&(j=v(l),x(j));const k=f$3(e.href);k.query={...k.query,...C,...j};return `${k.path}?${A(C)}`}return e.href}async _fetchService(e){const i=new k;await this._loadVisualData(this.layer.url,i,e),this._kmlVisualData=i,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i?.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i,t){return this._fetchParsedKML(e,t).then((async e=>{for(const s of e.sublayers){i.allSublayers.set(s.id,s);const e=s.points?await b$1(s.points):[],a=s.polylines?await b$1(s.polylines):[],o=s.polygons?await b$1(s.polygons):[],r=s.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:s.id})))),i.allPolylines.push(...a.map((e=>({item:e,sublayerId:s.id})))),i.allPolygons.push(...o.map((e=>({item:e,sublayerId:s.id})))),i.allMapImages.push(...r.map((e=>({item:e,sublayerId:s.id})))),s.networkLink){const e=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(e,i,t);}}}))}_fetchParsedKML(e,i){return g(e,this.layer.spatialReference,this.layer.refreshInterval,i).then((e=>d(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};e([y()],P.prototype,"_pointsView",void 0),e([y()],P.prototype,"_polylinesView",void 0),e([y()],P.prototype,"_polygonsView",void 0),e([y()],P.prototype,"updating",void 0),P=e([a$3("esri.views.2d.layers.KMLLayerView2D")],P);const M=P;

export { M as default };
