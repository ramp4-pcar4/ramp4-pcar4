import { h7 as n, b2 as d$1, b4 as P$1, h4 as r$1, b1 as p$1, h8 as o, H as s$1, s, fy as o$2, h9 as c, fk as e$2, h5 as L, fd as o$3, fi as i$1, fe as M, ff as t, h6 as f$1, fg as h$2, al as s$2, ha as mt, a3 as V$1, aZ as v$2, aT as m, aU as r$2, hb as s$3, af as b$1, aH as M$1, c4 as r$3, aW as e$3, aX as y, aY as c$1, ak as u$1, hc as x } from './main-48Jy8Lgr.js';
import { j as j$1, m as m$3 } from './perspectiveUtils-DO3eHZ8C.js';
import './GeometryUtils-DX9aSgOT.js';
import './UpdateTracking2D-Bc0e6iul.js';
import { d } from './enums-DZmWLm_j.js';
import './definitions-slUvtMCM.js';
import './floatRGBA-CVic9aBF.js';
import { i, E as E$1 } from './Container-CsB863Zr.js';
import { n as n$1, h } from './WGLContainer-Bhhfjd3N.js';
import { e, m as m$1 } from './Texture-CJSk3waQ.js';
import { D as D$1, F } from './enums-CgzwTbC2.js';
import { h as h$1 } from './Program-BOtrLCCL.js';
import './LabelMetric-B0d1A5uG.js';
import './StyleDefinition-CR2vYxyv.js';
import './enums-wz4-wi7m.js';
import './MagnifierPrograms-BF_X4Xor.js';
import './FeatureCommandQueue-n1L1FFpq.js';
import './OrderIndependentTransparency-NzZWznOo.js';
import './testSVGPremultipliedAlpha-CN1Kn9iJ.js';
import './GraphicsView2D-B8DJexiS.js';
import './earcut-B9Bfurzd.js';
import { r } from './vec3f32-CLbqcArJ.js';
import { e as e$1 } from './mat3f64-DiVtVT5k.js';
import { f } from './utils-JwTW6hYZ.js';
import { o as o$1 } from './ProgramTemplate-D8nYspAl.js';
import { m as m$2, u as u$2 } from './LayerView-ctSANoy-.js';
import './preload-helper-dJJaZANz.js';
import './normalizeUtilsSync-B-7wsrI6.js';
import './TurboLine-C5YrZooe.js';
import './Rect-9uT7dZO1.js';
import './BindType-KnpK3yZX.js';
import './Util-CcpJDLeq.js';
import './highlightReasons-Bw6E7Nh2.js';
import './constants-C0QDwCF4.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './config-Di5U9yzL.js';
import './CircularArray-Bo8gDF9W.js';
import './AttributeStore-CgBZ191C.js';
import './TimeOnly-D8cMS1Ew.js';
import './timeSupport-D79-Gf6Y.js';
import './json-Beimr7gP.js';
import './basicInterfaces-WNnrzIVI.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const v$1=e$1(),_$1={none:d.None,loop:d.Loop,oscillate:d.Oscillate};function V(e){return e?{...e,playAnimation:e.playing,repeatType:e.repeatType?_$1[e.repeatType]:void 0}:{}}class j extends i{constructor(i){super(),this.elementView=i,this.isWrapAround=!1,this.perspectiveTransform=n(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(d$1((()=>this.elementView.element.opacity),(e=>this.opacity=e),P$1),d$1((()=>[this.elementView.coords]),(()=>{this.requestRender();}),P$1),d$1((()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions]),(()=>{this._playHandle?.remove(),this.texture=r$1(this.texture),this.requestRender();}),P$1),p$1((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&null!=e.content&&this._handles.push(o(e.content,"play",(()=>this.requestRender())));}),P$1)),i.element.load().catch((t=>{s$1.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new s("element-load-error","Element cannot be displayed",{element:i,error:t}));}));}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._playHandle?.remove(),this._handles.forEach((e=>e.remove())),this.texture=r$1(this.texture);}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e$1){const{context:t}=e$1,r=this.elementView.element.content;if(null!=r){const e$1=r instanceof HTMLImageElement,s=r instanceof HTMLVideoElement,i=e$1?r.naturalWidth:s?r.videoWidth:r.width,o=e$1?r.naturalHeight:s?r.videoHeight:r.height;if(this._updatePerspectiveTransform(i,o),this.texture)s&&!r.paused&&(this.texture.setData(r),this.requestRender(),this.texture.generateMipmap());else {const e$1=new e;if(e$1.wrapMode=D$1.CLAMP_TO_EDGE,e$1.preMultiplyAlpha=!0,e$1.width=i,e$1.height=o,"getFrame"in r){const s=r=>{this.texture?this.texture.setData(r):this.texture=new m$1(t,e$1,r),this.requestRender();};"animationOptions"in this.elementView.element&&(this._playHandle=f(r,V(this.elementView.element.animationOptions),null,s));}else this.texture=new m$1(t,e$1,r);this.texture.generateMipmap(),s&&!r.paused&&this.requestRender();}}super.beforeRender(e$1);}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(null==r)return;const[s,i,o,n]=r.rings[0],a=this._vertices,{x:l,y:m}=e,h=0!==t;h?a.set([i[0]-l,i[1]-m,s[0]-l,s[1]-m,o[0]-l,o[1]-m,n[0]-l,n[1]-m,n[0]-l,n[1]-m,i[0]+t-l,i[1]-m,i[0]+t-l,i[1]-m,s[0]+t-l,s[1]-m,o[0]+t-l,o[1]-m,n[0]+t-l,n[1]-m]):a.set([i[0]-l,i[1]-m,s[0]-l,s[1]-m,o[0]-l,o[1]-m,n[0]-l,n[1]-m]),this.isWrapAround=h;}getVAO(e,t,r){if(null==this.elementView.coords)return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else {this._geometryVbo=h$1.createVertex(e,F.DYNAMIC_DRAW,s);const i=h$1.createVertex(e,F.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new o$1(e,r,t,{geometry:this._geometryVbo,tex:i});}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;j$1(v$1,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),o$2(this.perspectiveTransform,v$1[6]/v$1[8]*e,v$1[7]/v$1[8]*t);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class u extends n$1{constructor(){super(...arguments),this._localOrigin=c(0,0),this._viewStateId=-1,this._dvsMat3=e$2();}get dvsMat3(){return this._dvsMat3}beforeRender(t){this._updateMatrices(t),this._updateOverlays(t,this.children);for(const e of this.children)e.beforeRender(t);}prepareRenderPasses(t){const e=t.registerRenderPass({name:"overlay",brushes:[h.overlay],target:()=>this.children,drawPhase:E$1.MAP});return [...super.prepareRenderPasses(t),e]}_updateMatrices(t$1){const{state:a}=t$1,{id:p,size:m,pixelRatio:d,resolution:f,rotation:h,viewpoint:u,displayMat3:M$1}=a;if(this._viewStateId===p)return;const v=Math.PI/180*h,g=d*m[0],_=d*m[1],{x:w,y:b}=u.targetGeometry,y=L(w,a.spatialReference);this._localOrigin.x=y,this._localOrigin.y=b;const j=f*g,x=f*_,R=o$3(this._dvsMat3);i$1(R,R,M$1),M(R,R,t(g/2,_/2)),f$1(R,R,r(g/j,-_/x,1)),h$2(R,R,-v),this._viewStateId=p;}_updateOverlays(t,e){const{state:r}=t,{rotation:s,spatialReference:o,worldScreenWidth:i,size:a,viewpoint:n}=r,l=this._localOrigin;let c=0;const d=s$2(o);if(d&&o.isWrappable){const t=a[0],p=a[1],f=180/Math.PI*s,h=Math.abs(Math.cos(f)),u=Math.abs(Math.sin(f)),M=Math.round(t*h+p*u),[v,g]=d.valid,_=mt(o),{x:w,y:b}=n.targetGeometry,y=[w,b],j=[0,0];r.toScreen(j,y);const x=[0,0];let R;R=M>i?.5*i:.5*M;const P=Math.floor((w+.5*_)/_),O=v+P*_,C=g+P*_,I=[j[0]+R,0];r.toMap(x,I),x[0]>C&&(c=_),I[0]=j[0]-R,r.toMap(x,I),x[0]<O&&(c=-_);for(const r of e){const t=r.elementView.bounds;if(null==t)continue;const[e,,s]=t;e<v&&s>v?r.updateDrawCoords(l,_):s>g&&e<g?r.updateDrawCoords(l,-_):r.updateDrawCoords(l,c);}}else for(const p of e)p.updateDrawCoords(l,c);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let b=class extends(m$2(u$2)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new V$1;}attach(){this.addAttachHandles([v$2((()=>this.layer.effectiveSource),"refresh",(()=>{this._tileStrategy.refresh((e=>this._updateTile(e))),this.requestUpdate();})),v$2((()=>this.layer.effectiveSource),"change",(({element:e})=>this._elementUpdateHandler(e)))]),this._overlayContainer=new u,this.container.addChild(this._overlayContainer),this._fetchQueue=new m({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new r$2({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate();}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy();}supportsSpatialReference(e){return !0}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e);}async hitTest(e,t){const r=[],s=e.normalize(),i=[s.x,s.y];for(const{projectedElement:{normalizedCoords:o,element:n}}of this._elementReferences.values())null!=o&&s$3(o.rings,i)&&r.push({type:"media",element:n,layer:this.layer,mapPoint:e,sourcePoint:n.toSource(e)});return r.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updateTile(e)));}_acquireTile(e){const t=new E(e.clone());return this._updateTile(t),t}_updateTile(e){this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[r,s]=e.setElements(t);this._referenceElements(e,r),this._dereferenceElements(e,s),this.requestUpdate();}),(e=>{b$1(e)||s$1.getLogger(this).error(e);})));}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate();}async _queryElements(e,t){const r=this.layer.effectiveSource;if(null==r)return [];this.view.featuresTilingScheme.getTileBounds(w,e,!0);const s=new M$1({xmin:w[0],ymin:w[1],xmax:w[2],ymax:w[3],spatialReference:this.view.spatialReference});return r.queryElements(s,t)}_referenceElements(e,t){if(null!=this.layer.source)for(const r of t)this._referenceElement(e,r);}_referenceElement(e,t){r$3(this._elementReferences,t.uid,(()=>{const e=new m$3({element:t,spatialReference:this.view.spatialReference}),r=new j(e);this._overlayContainer.addChild(r),this.elements.add(t);let s=null;return {tiles:new Set,projectedElement:e,overlay:r,debugGraphic:s}})).tiles.add(e);}_dereferenceElements(e,t){for(const r of t)this._dereferenceElement(e,r);}_dereferenceElement(e,t){const r=this._elementReferences.get(t.uid);r.tiles.delete(e),r.tiles.size||(this._overlayContainer.removeChild(r.overlay),r.overlay.destroy(),r.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(r.debugGraphic));}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){const r=t.projectedElement.normalizedCoords;if(null==r)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t.debugGraphic);const s=[],i=[];for(const e of this._tileStrategy.tiles){const o=v(this.view.featuresTilingScheme,e,r);t.tiles.has(e)?o||i.push(e):o&&s.push(e);}for(const t of s)this._referenceElement(t,e);for(const t of i)this._dereferenceElement(t,e);return t=this._elementReferences.get(e.uid),void(t?.debugGraphic&&(t.debugGraphic.geometry=t.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const r=new m$3({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(null!=r)for(const s of this._tileStrategy.tiles){v(this.view.featuresTilingScheme,s,r)&&this._referenceElement(s,e);}}};e$3([y()],b.prototype,"layer",void 0),e$3([y({readOnly:!0})],b.prototype,"elements",void 0),b=e$3([c$1("esri.views.2d.layers.MediaLayerView2D")],b);const w=u$1(),_={xmin:0,ymin:0,xmax:0,ymax:0};function v(e,t,r){return e.getTileBounds(w,t.key,!0),_.xmin=w[0],_.ymin=w[1],_.xmax=w[2],_.ymax=w[3],x(_,r)}class E{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0;}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const s of e)r.has(s)?r.delete(s):t.push(s);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const R=b;

export { R as default };
