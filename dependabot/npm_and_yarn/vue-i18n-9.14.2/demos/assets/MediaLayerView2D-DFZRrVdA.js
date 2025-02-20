import { fH as n, bj as d$1, bk as P, fI as r$1, fJ as p, fK as o, G as n$1, s as s$1, fL as o$2, a0 as V$1, bg as v$1, ba as m, bb as r, fM as s$2, ax as b$2, a_ as w$1, cu as r$2, bd as e$2, be as y, bf as a, aD as u$1, fN as x } from './main-C4Zge2Yj.js';
import { j as j$1, m as m$1 } from './perspectiveUtils-DDEdnU4S.js';
import './GeometryUtils-CEiQRDGb.js';
import './UpdateTracking2D-wzUiT6rH.js';
import { d } from './enums-CHdyfzUK.js';
import './definitions-BdwlvHBE.js';
import './floatRGBA-B6OXKXTb.js';
import { s } from './Container-BRZw5EQp.js';
import './WGLContainer-F_pfnvV9.js';
import { e, c } from './Texture-BghNYWXB.js';
import { D, E as E$1, F } from './enums-CwcDCDam.js';
import { c as c$1 } from './Program-BvYEs7q3.js';
import './LabelMetric-BexxQf0w.js';
import './StyleDefinition-DkEWNPyD.js';
import './enums-DrckJvHx.js';
import './MagnifierPrograms-jWQTZ2-H.js';
import './FeatureCommandQueue-BZh52aGy.js';
import './PieChartMeshWriter-2_HZUzlq.js';
import './renderState-Cae0JNUz.js';
import './interfaces-MbpZrcgP.js';
import './testSVGPremultipliedAlpha-ft8svTMp.js';
import './GraphicsView2D-DJmkMDSq.js';
import './earcut-Dk31jkT2.js';
import './vec3f32-CmlAce5k.js';
import { e as e$1 } from './mat3f64-BNcPSU_3.js';
import { f } from './utils-CIbMDGhs.js';
import { o as o$1 } from './ProgramTemplate-x-eDnpWW.js';
import { f as f$2 } from './OverlayContainer-CzX6-f8E.js';
import { f as f$1, y as y$1 } from './LayerView-CLnau-rv.js';
import './preload-helper-dJJaZANz.js';
import './normalizeUtilsSync-a1mvYUyC.js';
import './BidiEngine-Z2aMxkhF.js';
import './Rect-zdvLIBQm.js';
import './BindType-DQnxDFt3.js';
import './Util-DK31hApB.js';
import './highlightReasons-CvAQeGxW.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './config-C86_VOH4.js';
import './CircularArray-BCXLb8ry.js';
import './AttributeStore-B7TKqkjC.js';
import './TimeOnly-DperYbM1.js';
import './timeSupport-bUiMegUS.js';
import './json-DYk0G9qS.js';
import './constants-BNnV1ogR.js';
import './TurboLine-eTdhcveF.js';
import './basicInterfaces-CK7IW-0v.js';
import './grouping-DR9C5HFP.js';
import './layerViewUtils-CRtvGSrJ.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const _$1=[1,1],V=4,b$1=e$1(),j={none:d.None,loop:d.Loop,oscillate:d.Oscillate};function A(e){return e?{...e,playAnimation:e.playing,repeatType:e.repeatType?j[e.repeatType]:void 0}:{}}class T extends s{constructor(i){super(),this.elementView=i,this.isWrapAround=!1,this.wrapAroundShift=0,this.perspectiveTransform=n(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(d$1((()=>this.elementView.element.opacity),(e=>this.opacity=e),P),d$1((()=>[this.elementView.coords]),(()=>{this.requestRender();}),P),d$1((()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions]),(()=>{this._playHandle?.remove(),this.texture=r$1(this.texture),this.requestRender();}),P),p((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&null!=e.content&&this._handles.push(o(e.content,"play",(()=>this.requestRender())));}),P)),i.element.load().catch((t=>{n$1.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new s$1("element-load-error","Element cannot be displayed",{element:i,error:t}));}));}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._playHandle?.remove(),this._handles.forEach((e=>e.remove())),this.texture=r$1(this.texture);}get textureSize(){return _$1}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e$1){const{context:t}=e$1,r=this.elementView.element.content;if(null!=r){const e$1=r instanceof HTMLImageElement,s=r instanceof HTMLVideoElement,i=e$1?r.naturalWidth:s?r.videoWidth:r.width,o=e$1?r.naturalHeight:s?r.videoHeight:r.height;if(this._updatePerspectiveTransform(i,o),this.texture)s&&!r.paused&&(this.texture.setData(r),this.requestRender(),this.texture.generateMipmap());else {const e$1=new e;if(e$1.wrapMode=D.CLAMP_TO_EDGE,e$1.preMultiplyAlpha=!0,e$1.width=i,e$1.height=o,"getFrame"in r){const s=r=>{this.texture?this.texture.setData(r):this.texture=new c(t,e$1,r),this.requestRender();};"animationOptions"in this.elementView.element&&(this._playHandle=f(r,A(this.elementView.element.animationOptions),null,s));}else this.texture=new c(t,e$1,r);this.texture.generateMipmap(),s&&!r.paused&&this.requestRender();}}super.beforeRender(e$1);}_createTransforms(){return null}draw(e){e.drawArrays(E$1.TRIANGLE_STRIP,0,V);}updateDrawCoords(e,t,r,s){const{coords:i,bounds:o}=this.elementView;if(null==i||null==o)return;const[n,a,l,m]=i.rings[0],h=this._vertices,{x:p,y:c}=e;h.set([a[0]-p,a[1]-c,n[0]-p,n[1]-c,l[0]-p,l[1]-c,m[0]-p,m[1]-c]);let u=t;if(s){const[e,,t]=o,{worldWidth:r,xBounds:i}=s,[n,a]=i;e<n&&t>n?u=r:t>a&&e<a&&(u=-r);}this.wrapAroundShift=u,this.isWrapAround=0!==u;}getVAO(e,t,r){if(null==this.elementView.coords)return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else {this._geometryVbo=c$1.createVertex(e,F.DYNAMIC_DRAW,s);const i=c$1.createVertex(e,F.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new o$1(e,r,t,{geometry:this._geometryVbo,tex:i});}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;j$1(b$1,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),o$2(this.perspectiveTransform,b$1[6]/b$1[8]*e,b$1[7]/b$1[8]*t);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let b=class extends(f$1(y$1)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new V$1;}attach(){this.addAttachHandles([v$1((()=>this.layer.effectiveSource),"refresh",(()=>{this._tileStrategy.refresh((e=>this._updateTile(e))),this.requestUpdate();})),v$1((()=>this.layer.effectiveSource),"change",(({element:e})=>this._elementUpdateHandler(e)))]),this._overlayContainer=new f$2,this.container.addChild(this._overlayContainer),this._fetchQueue=new m({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new r({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate();}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy();}supportsSpatialReference(e){return !0}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e);}async hitTest(e,t){const r=[],s=e.normalize(),i=[s.x,s.y];for(const{projectedElement:{normalizedCoords:o,element:n}}of this._elementReferences.values())null!=o&&s$2(o.rings,i)&&r.push({type:"media",element:n,layer:this.layer,mapPoint:e,sourcePoint:n.toSource(e)});return r.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updateTile(e)));}_acquireTile(e){const t=new E(e.clone());return this._updateTile(t),t}_updateTile(e){this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[r,s]=e.setElements(t);this._referenceElements(e,r),this._dereferenceElements(e,s),this.requestUpdate();}),(e=>{b$2(e)||n$1.getLogger(this).error(e);})));}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate();}async _queryElements(e,t){const r=this.layer.effectiveSource;if(null==r)return [];this.view.featuresTilingScheme.getTileBounds(w,e,!0);const s=new w$1({xmin:w[0],ymin:w[1],xmax:w[2],ymax:w[3],spatialReference:this.view.spatialReference});return r.queryElements(s,t)}_referenceElements(e,t){if(null!=this.layer.source)for(const r of t)this._referenceElement(e,r);}_referenceElement(e,t){r$2(this._elementReferences,t.uid,(()=>{const e=new m$1({element:t,spatialReference:this.view.spatialReference}),r=new T(e);this._overlayContainer.addChild(r),this.elements.add(t);let s=null;return {tiles:new Set,projectedElement:e,overlay:r,debugGraphic:s}})).tiles.add(e);}_dereferenceElements(e,t){for(const r of t)this._dereferenceElement(e,r);}_dereferenceElement(e,t){const r=this._elementReferences.get(t.uid);r.tiles.delete(e),r.tiles.size||(this._overlayContainer.removeChild(r.overlay),r.overlay.destroy(),r.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(r.debugGraphic));}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){const r=t.projectedElement.normalizedCoords;if(null==r)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t.debugGraphic);const s=[],i=[];for(const e of this._tileStrategy.tiles){const o=v(this.view.featuresTilingScheme,e,r);t.tiles.has(e)?o||i.push(e):o&&s.push(e);}for(const t of s)this._referenceElement(t,e);for(const t of i)this._dereferenceElement(t,e);return t=this._elementReferences.get(e.uid),void(t?.debugGraphic&&(t.debugGraphic.geometry=t.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const r=new m$1({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(null!=r)for(const s of this._tileStrategy.tiles){v(this.view.featuresTilingScheme,s,r)&&this._referenceElement(s,e);}}};e$2([y()],b.prototype,"layer",void 0),e$2([y({readOnly:!0})],b.prototype,"elements",void 0),b=e$2([a("esri.views.2d.layers.MediaLayerView2D")],b);const w=u$1(),_={xmin:0,ymin:0,xmax:0,ymax:0};function v(e,t,r){return e.getTileBounds(w,t.key,!0),_.xmin=w[0],_.ymin=w[1],_.xmax=w[2],_.ymax=w[3],x(_,r)}class E{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0;}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const s of e)r.has(s)?r.delete(s):t.push(s);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const R=b;

export { R as default };
