import { gx as n, bp as l$1, bu as h$1, gy as f, r as r$2, gz as r, p as s$1, c as s, eN as h, bL as r$3, eL as c, t, fh as r$4, gA as c$1, eM as e$1, eO as U, eP as r$5, ax as i, eQ as M$1, eR as t$1, eS as f$2, eT as h$2, ab as R$1, gB as mt, bv as j$1, br as a$2, bn as y, bo as r$7, gC as s$2, bq as j$2, w as w$1, eo as r$8, e as e$2, y as y$1, k as a, aa as u$1, gD as x } from './main-5658cd6e.js';
import { j, u } from './perspectiveUtils-7a682c08.js';
import './MagnifierPrograms-8e8ca424.js';
import { r as r$1 } from './Container-1d8ffe9c.js';
import './BufferPool-a16c9fc1.js';
import { T as T$1 } from './color-6132b2c2.js';
import { a as a$1, w } from './WGLContainer-ac280853.js';
import { P as P$1, G as G$1, L as L$1, D, F } from './enums-1f7f0b0a.js';
import { E as E$1 } from './Texture-aefe232f.js';
import './ProgramTemplate-cc07a7d7.js';
import './MaterialKey-99ff6359.js';
import './utils-6a1fc53c.js';
import { E as E$2, f as f$1 } from './VertexArrayObject-2ba4bad7.js';
import './StyleDefinition-1998cf52.js';
import './enums-6436e7c1.js';
import './OrderIndependentTransparency-639df392.js';
import './floatRGBA-0f682c7a.js';
import './webgl-debug-e97fec6d.js';
import './GraphicsView2D-d60c0d5b.js';
import './AttributeStoreView-2c6b7676.js';
import './earcut-336027d9.js';
import { r as r$6 } from './vec3f32-b6e01a26.js';
import { e } from './mat3f64-f0e5b33e.js';
import { f as f$3, u as u$2 } from './LayerView-cbc55a02.js';
import './preload-helper-a4975f27.js';
import './normalizeUtilsSync-c3a052ce.js';
import './_commonjsHelpers-1f64d0d1.js';
import './ExpandedCIM-78770fa3.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './enums-9c1aeae9.js';
import './definitions-281daf3f.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-ec270d9a.js';
import './rasterizingUtils-96ef117a.js';
import './GeometryUtils-7c55c6d6.js';
import './imageutils-08b5855d.js';
import './Matcher-df890909.js';
import './visualVariablesUtils-93e46889.js';
import './visualVariablesUtils-1950eea1.js';
import './tileUtils-f6baf24c.js';
import './TurboLine-b7a337a5.js';
import './devEnvironmentUtils-d73295e7.js';
import './CircularArray-017fe5d1.js';
import './ComputedAttributeStorage-8c98a3c7.js';
import './arcadeTimeUtils-53abd942.js';
import './executionError-ed2c63c0.js';
import './centroid-c9063998.js';
import './VertexElementDescriptor-a439aa9a.js';
import './config-c354710d.js';
import './basicInterfaces-9de11baf.js';
import './projectionSupport-90bb00b7.js';
import './json-ce6e5728.js';
import './schemaUtils-b103f304.js';
import './util-0ab7a9cb.js';
import './TiledDisplayObject-4282c17d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const b=e();class A extends r$1{constructor(s$2){super(),this.elementView=s$2,this.isWrapAround=!1,this.perspectiveTransform=n(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(l$1((()=>this.elementView.element.opacity),(e=>this.opacity=e),h$1),l$1((()=>[this.elementView.coords]),(()=>{this.requestRender();}),h$1),f((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&r$2(e.content)&&this._handles.push(r(e.content,"play",(()=>this.requestRender())));}),h$1)),s$2.element.load().catch((t=>{s$1.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new s("element-load-error","Element cannot be displayed",{element:s$2,error:t}));}));}destroy(){this._handles.forEach((e=>e.remove())),this.texture=h(this.texture);}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(r$2(r)){const e=r instanceof HTMLImageElement,i=r instanceof HTMLVideoElement,o=e?r.naturalWidth:i?r.videoWidth:r.width,n=e?r.naturalHeight:i?r.videoHeight:r.height;this._updatePerspectiveTransform(o,n),this.texture?i&&!r.paused&&(this.texture.setData(r),this.requestRender(),(t.type===r$3.WEBGL2||c(o)&&c(n))&&this.texture.generateMipmap()):(this.texture=new E$1(t,{pixelFormat:P$1.RGBA,dataType:G$1.UNSIGNED_BYTE,samplingMode:L$1.LINEAR,wrapMode:D.CLAMP_TO_EDGE,width:o,height:n,preMultiplyAlpha:!0},r),(t.type===r$3.WEBGL2||c(o)&&c(n))&&this.texture.generateMipmap(),i&&!r.paused&&this.requestRender());}super.beforeRender(e);}_createTransforms(){return null}updateDrawCoords(e,t$1){const r=this.elementView.coords;if(t(r))return;const[s,i,o,a]=r.rings[0],m=this._vertices,{x:h,y:c}=e,p=0!==t$1;p?m.set([i[0]-h,i[1]-c,s[0]-h,s[1]-c,o[0]-h,o[1]-c,a[0]-h,a[1]-c,a[0]-h,a[1]-c,i[0]+t$1-h,i[1]-c,i[0]+t$1-h,i[1]-c,s[0]+t$1-h,s[1]-c,o[0]+t$1-h,o[1]-c,a[0]+t$1-h,a[1]-c]):m.set([i[0]-h,i[1]-c,s[0]-h,s[1]-c,o[0]-h,o[1]-c,a[0]-h,a[1]-c]),this.isWrapAround=p;}getVAO(e,t$1,r){if(t(this.elementView.coords))return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else {this._geometryVbo=E$2.createVertex(e,F.DYNAMIC_DRAW,s);const i=E$2.createVertex(e,F.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new f$1(e,r,t$1,{geometry:this._geometryVbo,tex:i});}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;j(b,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),r$4(this.perspectiveTransform,b[6]/b[8]*e,b[7]/b[8]*t);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class M extends a$1{constructor(){super(...arguments),this._localOrigin=c$1(0,0),this._viewStateId=-1,this._dvsMat3=e$1(),this.requiresDedicatedFBO=!1;}get dvsMat3(){return this._dvsMat3}beforeRender(t){this._updateMatrices(t),this._updateOverlays(t,this.children);for(const e of this.children)e.beforeRender(t);}prepareRenderPasses(t){const e=t.registerRenderPass({name:"overlay",brushes:[w.overlay],target:()=>this.children,drawPhase:T$1.MAP});return [...super.prepareRenderPasses(t),e]}_updateMatrices(t){const{state:e}=t,{id:n,size:h,pixelRatio:l,resolution:m,rotation:f,viewpoint:u,displayMat3:M}=e;if(this._viewStateId===n)return;const v=Math.PI/180*f,_=l*h[0],w=l*h[1],{x:y,y:g}=u.targetGeometry,j=U(y,e.spatialReference);this._localOrigin.x=j,this._localOrigin.y=g;const b=m*_,R=m*w,O=r$5(this._dvsMat3);i(O,O,M),M$1(O,O,t$1(_/2,w/2)),f$2(O,O,r$6(_/b,-w/R,1)),h$2(O,O,-v),this._viewStateId=n;}_updateOverlays(e,s){const{state:r}=e,{rotation:o,spatialReference:a,worldScreenWidth:i,size:n,viewpoint:c}=r,p=this._localOrigin;let d=0;const m=R$1(a);if(m&&a.isWrappable){const e=n[0],h=n[1],f=180/Math.PI*o,u=Math.abs(Math.cos(f)),M=Math.abs(Math.sin(f)),v=Math.round(e*u+h*M),[_,w]=m.valid,y=mt(a),{x:g,y:j}=c.targetGeometry,b=[g,j],R=[0,0];r.toScreen(R,b);const O=[0,0];let P;P=v>i?.5*i:.5*v;const x=Math.floor((g+.5*y)/y),C=_+x*y,D=w+x*y,I=[R[0]+P,0];r.toMap(O,I),O[0]>D&&(d=y),I[0]=R[0]-P,r.toMap(O,I),O[0]<C&&(d=-y);for(const r of s){const e=r.elementView.bounds;if(t(e))continue;const[s,,o]=e;s<_&&o>_?r.updateDrawCoords(p,y):o>w&&s<w?r.updateDrawCoords(p,-y):r.updateDrawCoords(p,d);}}else for(const t of s)t.updateDrawCoords(p,d);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let _=class extends(f$3(u$2)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new j$1;}attach(){this.addAttachHandles([a$2((()=>this.layer.effectiveSource),"refresh",(()=>{for(const e of this._tileStrategy.tiles)this._updateTile(e);this.requestUpdate();})),a$2((()=>this.layer.effectiveSource),"change",(({element:e})=>this._elementUpdateHandler(e)))]),this._overlayContainer=new M,this.container.addChild(this._overlayContainer),this._fetchQueue=new y({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new r$7({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate();}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy();}supportsSpatialReference(e){return !0}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e);}async hitTest(e,t){const r=[],s=e.normalize(),n=[s.x,s.y];for(const{projectedElement:{normalizedCoords:o,element:l}}of this._elementReferences.values())r$2(o)&&s$2(o.rings,n)&&r.push({type:"media",element:l,layer:this.layer,mapPoint:e});return r.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._updateTile(e)));}_acquireTile(e){const t=new E(e.clone());return this._updateTile(t),t}_updateTile(e){this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[r,s]=e.setElements(t);this._referenceElements(e,r),this._dereferenceElements(e,s),this.requestUpdate();}),(e=>{j$2(e)||s$1.getLogger(this.declaredClass).error(e);})));}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate();}async _queryElements(e,t$1){const r=this.layer.effectiveSource;if(t(r))return [];this.view.featuresTilingScheme.getTileBounds(v,e,!0);const s=new w$1({xmin:v[0],ymin:v[1],xmax:v[2],ymax:v[3],spatialReference:this.view.spatialReference});return r.queryElements(s,t$1)}_referenceElements(e,t$1){const r=this.layer.source;if(!t(r))for(const s of t$1)this._referenceElement(e,s);}_referenceElement(e,t){r$8(this._elementReferences,t.uid,(()=>{const e=new u({element:t,spatialReference:this.view.spatialReference}),r=new A(e);this._overlayContainer.addChild(r),this.elements.add(t);let s=null;return {tiles:new Set,projectedElement:e,overlay:r,debugGraphic:s}})).tiles.add(e);}_dereferenceElements(e,t){for(const r of t)this._dereferenceElement(e,r);}_dereferenceElement(e,t){const r=this._elementReferences.get(t.uid);r.tiles.delete(e),r.tiles.size||(this._overlayContainer.removeChild(r.overlay),r.overlay.destroy(),r.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(r.debugGraphic));}_elementUpdateHandler(e){let t$1=this._elementReferences.get(e.uid);if(t$1){const r=t$1.projectedElement.normalizedCoords;if(t(r))return this._overlayContainer.removeChild(t$1.overlay),t$1.overlay.destroy(),t$1.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t$1.debugGraphic);const s=[],i=[];for(const e of this._tileStrategy.tiles){const n=R(this.view.featuresTilingScheme,e,r);t$1.tiles.has(e)?n||i.push(e):n&&s.push(e);}for(const t of s)this._referenceElement(t,e);for(const t of i)this._dereferenceElement(t,e);return t$1=this._elementReferences.get(e.uid),void(t$1?.debugGraphic&&(t$1.debugGraphic.geometry=t$1.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t$1.debugGraphic,property:"geometry"})))}const r=new u({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(r$2(r))for(const s of this._tileStrategy.tiles){R(this.view.featuresTilingScheme,s,r)&&this._referenceElement(s,e);}}};e$2([y$1()],_.prototype,"_fetchQueue",void 0),e$2([y$1()],_.prototype,"layer",void 0),e$2([y$1({readOnly:!0})],_.prototype,"elements",void 0),_=e$2([a("esri.views.2d.layers.MediaLayerView2D")],_);const v=u$1(),T={xmin:0,ymin:0,xmax:0,ymax:0};function R(e,t,r){return e.getTileBounds(v,t.key,!0),T.xmin=v[0],T.ymin=v[1],T.xmax=v[2],T.ymax=v[3],x(T,r)}class E{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0;}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const s of e)r.has(s)?r.delete(s):t.push(s);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const S=_;

export { S as default };
