import { ba as u$1, a6 as c, a5 as V, q, az as e, aX as e$1, aY as y, aZ as c$1 } from './main-b03b5063.js';
import { t as t$2 } from './highlightReasons-6c0a22e8.js';
import { m as m$1, u as u$2 } from './LayerView-6c0e0f20.js';
import { t as t$1 } from './GraphicContainer-0b03b96f.js';
import { $ } from './GraphicsView2D-97168f86.js';
import { t } from './HighlightCounter-72b1ae15.js';
import './preload-helper-a4975f27.js';
import './Container-bf3f4a13.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-a56ecf7a.js';
import './AGraphicContainer-aa782f22.js';
import './TechniqueInstance-1be19484.js';
import './UpdateTracking2D-1a150aea.js';
import './TurboLine-db7a7ea8.js';
import './enums-d24bcbbf.js';
import './earcut-00b34c4e.js';
import './GeometryUtils-f4aea631.js';
import './Rect-09e0f861.js';
import './LabelMetric-15d3c2d4.js';
import './Program-b0a40859.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-bd1e8edc.js';
import './constants-412c3a33.js';
import './TileContainer-1222339a.js';
import './WGLContainer-ed98186c.js';
import './ProgramTemplate-127684de.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-f7275d24.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-df3457d2.js';
import './TimeOnly-9def0517.js';
import './timeSupport-2a1390ee.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-60b6071f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
