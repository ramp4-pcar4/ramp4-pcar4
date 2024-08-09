import { ba as u$1, a6 as c, a5 as V, q, az as e, aX as e$1, aY as y, aZ as c$1 } from './main-47e700d3.js';
import { t as t$2 } from './highlightReasons-5d9e6538.js';
import { m as m$1, u as u$2 } from './LayerView-1ac42d86.js';
import { t as t$1 } from './GraphicContainer-0fda5964.js';
import { $ } from './GraphicsView2D-0a92413c.js';
import { t } from './HighlightCounter-0d0caf53.js';
import './preload-helper-a4975f27.js';
import './Container-89e438e7.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-aa5874a6.js';
import './AGraphicContainer-71ac6f7a.js';
import './TechniqueInstance-c87b7c1b.js';
import './UpdateTracking2D-6bb6d087.js';
import './TurboLine-c8353506.js';
import './enums-d24bcbbf.js';
import './earcut-43670e3a.js';
import './GeometryUtils-5838bd0a.js';
import './Rect-09e0f861.js';
import './LabelMetric-9a64c2c0.js';
import './Program-f491c053.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-7379b68e.js';
import './constants-412c3a33.js';
import './TileContainer-088dcbe5.js';
import './WGLContainer-f927868e.js';
import './ProgramTemplate-febd61d1.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-6d8764db.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-b9494af1.js';
import './TimeOnly-9824e2a9.js';
import './timeSupport-d9eca568.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-04e20bc9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
