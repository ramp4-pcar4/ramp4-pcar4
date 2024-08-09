import { ba as u$1, a5 as c, a4 as V, q, ay as e, aX as e$1, aY as y, aZ as c$1 } from './main-d907decb.js';
import { t as t$2 } from './highlightReasons-ecdd3940.js';
import { m as m$1, u as u$2 } from './LayerView-352fd40b.js';
import { t as t$1 } from './GraphicContainer-42bbfaa5.js';
import { $ } from './GraphicsView2D-098c48e5.js';
import { t } from './HighlightCounter-0872da6f.js';
import './preload-helper-a4975f27.js';
import './Container-3a9d8b65.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-6c4d1254.js';
import './AGraphicContainer-2bd9084d.js';
import './TechniqueInstance-a52cc378.js';
import './UpdateTracking2D-12d8e2fb.js';
import './TurboLine-a5007592.js';
import './enums-d24bcbbf.js';
import './earcut-35d48295.js';
import './GeometryUtils-d1e3eed8.js';
import './Rect-09e0f861.js';
import './LabelMetric-487a78fb.js';
import './Program-94d53150.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-349e5799.js';
import './constants-412c3a33.js';
import './TileContainer-d5765d19.js';
import './WGLContainer-40f41cbf.js';
import './ProgramTemplate-f8c8ff42.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-c7b04ac7.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-6931a8c3.js';
import './TimeOnly-93b18086.js';
import './timeSupport-3d4f3d0f.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-56f3f1fe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
