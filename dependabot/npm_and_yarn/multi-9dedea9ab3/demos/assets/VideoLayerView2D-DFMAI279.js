import { fU as r, fH as n, fJ as p, bk as P, fK as o, fI as r$1, bs as K, aX as j, fV as c$2, _ as _$1, aA as u, eT as h, a1 as d$1, el as S, ei as d, ek as y$1, bp as u$1, bj as d$2, bd as e$1, be as y$2, bf as a } from './main-YSH8Qvd0.js';
import { i } from './TelemetryDisplay-MiAD8E-g.js';
import { f as f$1 } from './OverlayContainer-BAvZ6Fab.js';
import { s } from './Container-Bjkx24f1.js';
import { a as a$1, f, y as y$3 } from './LayerView-CkazLMcs.js';
import { c as c$1 } from './Program-B_1Ck0yX.js';
import { D, F, E } from './enums-CwcDCDam.js';
import { e, c } from './Texture-B2fqbWGu.js';
import { o as o$1 } from './ProgramTemplate-0vuAPRyT.js';
import { t } from './GraphicContainer-Ct9qYvme.js';
import { V } from './GraphicsView2D-taKnaYk_.js';
import './preload-helper-dJJaZANz.js';
import './vec3f32-CmlAce5k.js';
import './WGLContainer-D6jupTuP.js';
import './definitions-BdwlvHBE.js';
import './LabelMetric-Bnf6Ud2A.js';
import './enums-CHdyfzUK.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-1p-jfyBa.js';
import './highlightReasons-C6YF5eGX.js';
import './layerViewUtils-CRtvGSrJ.js';
import './AGraphicContainer-DmoCcfAn.js';
import './TechniqueInstance-CS_tnRdI.js';
import './UpdateTracking2D-C4MnIKv0.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-lYpV3DRp.js';
import './Rect-zdvLIBQm.js';
import './BindType-DQnxDFt3.js';
import './Util-CC8AWGD5.js';
import './TileContainer-DZeC-9ns.js';
import './FeatureCommandQueue-DtOJUJHH.js';
import './constants-BNnV1ogR.js';
import './AttributeStore-l_K34xDr.js';
import './TimeOnly-W1Zp8skj.js';
import './timeSupport-C_3DlbE5.js';
import './json-DYk0G9qS.js';
import './normalizeUtilsSync-eOeax9mS.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const y=2;class w extends s{constructor(r$1){super(),this.element=r$1,this._handles=new r,this.isWrapAround=!1,this.perspectiveTransform=n(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add(p((()=>this.element),(()=>{const e=this.element;this.ready(),e&&this._handles.add(o(e,"play",(()=>this.requestRender())));}),P));}getMesh(t){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=r$1(this.texture),this._vao&&(this._vao.dispose(),this._vao=null),this._vbo&&(this._vbo.dispose(),this._vbo=null),this.texture&&(this.texture.dispose(),this.texture=null);}get textureSize(){if(!this.texture)return [1,1];const t=this.texture.descriptor;return [t.width,t.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(t){const e$1=this.element;if(null==e$1)return;const{context:r}=t,{videoWidth:o,videoHeight:i}=e$1;if(0!==o&&0!==i){if(this.texture)e$1.paused||this.texture.setData(e$1);else {const t=new e;t.wrapMode=D.CLAMP_TO_EDGE,t.preMultiplyAlpha=!0,t.width=o,t.height=i,this.texture=new c(r,t,e$1);}e$1.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(t);}}_createTransforms(){return null}updateDrawCoords(t,e,r,o){const i=this.element,s=this._getFrameInfo();if(!i||!s)return;this._initializeData(t,s,r);const{controlPoints:n,horizon:a}=s,u=Math.sqrt(n.length),m=u,{x:c,y:d}=t,p=this._vertices,f=n[0],x=n[u-1],g=n[(m-1)*u],w=n[(m-1)*u+u-1],P=K(a?a[0].mapPoint:f.mapPoint,r),v=K(a?a[1].mapPoint:x.mapPoint,r),j$1=K(g.mapPoint,r),b=K(w.mapPoint,r);this.clipGeometry=a?new a$1({geometry:j.fromJSON({rings:[[[j$1.x,j$1.y],[b.x,b.y],[v.x,v.y],[P.x,P.y],[j$1.x,j$1.y]]],spatialReference:r})}):null;for(let h=0;h<n.length;h++){const t=n[h],{sourcePoint:e,mapPoint:o}=t;if(null==e||null==o)continue;const i=K(o,r);p[h*y+0]=i.x-c,p[h*y+1]=i.y-d;}let A=e;if(o){const t=Math.min(P.x,v.x,j$1.x,b.x),e=Math.max(P.x,v.x,j$1.x,b.x),{worldWidth:r,xBounds:i}=o,[s,n]=i;t<s&&e>s?A=r:e>n&&t<n&&(A=-r);}this.wrapAroundShift=A,this.isWrapAround=0!==A;}getVAO(t,e,r){if(null==this._vertices)return null;const o=this._vertices;if(this._vao)this._vbo.setData(o);else {this._vbo=c$1.createVertex(t,F.DYNAMIC_DRAW,o);const i=c$1.createVertex(t,F.STATIC_DRAW,this._texCoords);this._ibo=c$1.createIndex(t,F.DYNAMIC_DRAW,this._indices),this._vao=new o$1(t,r,e,{geometry:this._vbo,tex:i},this._ibo);}return this._vao}draw(t){t.drawElements(E.TRIANGLE_STRIP,this._indices.length,t.gl.UNSIGNED_SHORT,0);}_initializeData(t,e,r){if(null!=this._vertices&&null!=this._indices)return;const{controlPoints:o}=e,i=Math.sqrt(o.length),s=i,n=new Float32Array(y*o.length),a=new Uint16Array(2*o.length);for(let m=0;m<o.length;m++){const e=o[m],{sourcePoint:i,mapPoint:s}=e;if(null==i||null==s)continue;const h=K(s,r);n[m*y+0]=h.x-t.x,n[m*y+1]=h.y-t.y,a[2*m+0]=i.x,a[2*m+1]=i.y;}const h=new Uint16Array(s*i+(s-2)*(i+2));let u=0;for(let l=0;l<s;l++){for(let t=0;t<i;t++)h[u++]=l*i+t,h[u++]=(l+1)*i+t;l<s-2&&(h[u++]=(l+1)*i+(i-1),h[u++]=(l+1)*i);}this._vertices=n,this._texCoords=a,this._indices=h;}_getFrameInfo(){if(!this.groundControlPoints)return null;const t=this._getFrameControlPoints(),e=this.frameHorizonPoints;let r=null;if(e){const t=e.startX,o=e.startY,i=e.endX,n=e.endY;r=[{sourcePoint:c$2(t,o),mapPoint:new _$1(e.startLongitude,e.startLatitude)},{sourcePoint:c$2(i,n),mapPoint:new _$1(e.endLongitude,e.endLatitude)}];}return {controlPoints:t,horizon:r}}_getFrameControlPoints(){const t=this.groundControlPoints,e=t?.length;if(!e)return [];const r=new Array(e);for(let o=0;o<e;o++){const{x:e,y:i,lat:n,lon:l}=t[o];r[o]={sourcePoint:c$2(e,-i),mapPoint:new _$1(l,n)};}return r}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const _=new u([255,127,0]);let C=class extends(f(y$3)){constructor(){super(...arguments),this._graphicsLayer=new h,this._frameOutlineGraphic=new d$1({symbol:new S({outline:{type:"simple-line",color:_}})}),this._sensorTrailGraphic=new d$1({symbol:new d({color:_})}),this._lineOfSightGraphic=new d$1({symbol:new d({color:_})}),this._sensorLocationGraphic=new d$1({symbol:new y$1({color:_})}),this._frameCenterGraphic=new d$1({symbol:new y$1({color:_})}),this._overlayContainer=null,this.layer=null,this.symbolColor=_,this.visibleTelemetryElements=null;}destroy(){this._graphicsLayer=u$1(this._graphicsLayer);}initialize(){this.addHandles(d$2((()=>this.symbolColor),(()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor;}),P)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new i({frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0});}attach(){this._overlayContainer=new f$1,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new V({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new t(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([d$2((()=>[this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight]),(()=>this._updateVisibleTelemetryElements()),P),d$2((()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight]),(()=>this._updateGraphicGeometries()),P)]);}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}supportsSpatialReference(e){return !0}moveEnd(){}viewChange(){this.graphicsView.viewChange();}update(e){this.graphicsView.processUpdate(e);}isUpdating(){return !this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail);}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:i}=this;e&&i&&(i.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,i.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,i.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,i.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,i.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null);}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const e=new w(this.layer.videoElement);this.addAttachHandles([d$2((()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints]),(()=>{e.frameHorizonPoints=this.layer.frameHorizonPoints,e.groundControlPoints=this.layer.groundControlPoints;}),P)]),this._overlayContainer.addChild(e),this.view.stage.requestRender();}};e$1([y$2()],C.prototype,"graphicsView",void 0),e$1([y$2()],C.prototype,"layer",void 0),e$1([y$2()],C.prototype,"symbolColor",void 0),e$1([y$2({type:i})],C.prototype,"visibleTelemetryElements",void 0),C=e$1([a("esri.views.2d.layers.VideoLayerView2D")],C);const v=C;

export { v as default };
