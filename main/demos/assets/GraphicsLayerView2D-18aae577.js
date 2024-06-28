import { ba as u$1, a6 as c, a5 as V, q, az as e, aX as e$1, aY as y, aZ as c$1 } from './main-94362e0c.js';
import { t as t$2 } from './highlightReasons-b35f66f2.js';
import { m as m$1, u as u$2 } from './LayerView-3378a41b.js';
import { t as t$1 } from './GraphicContainer-a9eec6f3.js';
import { $ } from './GraphicsView2D-8f23435f.js';
import { t } from './HighlightCounter-fe4f51b1.js';
import './preload-helper-a4975f27.js';
import './Container-a73c9c87.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-7273ab1a.js';
import './AGraphicContainer-3bdc3105.js';
import './TechniqueInstance-e2c78e5a.js';
import './UpdateTracking2D-434d8c34.js';
import './TurboLine-a31d277b.js';
import './enums-d24bcbbf.js';
import './earcut-1e14bf20.js';
import './GeometryUtils-be4b8840.js';
import './Rect-09e0f861.js';
import './LabelMetric-7635de25.js';
import './Program-da4c27a4.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-6f67b5e7.js';
import './constants-412c3a33.js';
import './TileContainer-d8261971.js';
import './WGLContainer-206bc867.js';
import './ProgramTemplate-86b5eea5.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-ab58c794.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-9144eed5.js';
import './TimeOnly-94a3c2fd.js';
import './timeSupport-4c9b8bb2.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-f3b67415.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
