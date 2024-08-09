import { ba as u$1, a6 as c, a5 as V, q, az as e, aX as e$1, aY as y, aZ as c$1 } from './main-ea2ac364.js';
import { t as t$2 } from './highlightReasons-dacedcbb.js';
import { m as m$1, u as u$2 } from './LayerView-7254ee35.js';
import { t as t$1 } from './GraphicContainer-b2592116.js';
import { $ } from './GraphicsView2D-ce3926fd.js';
import { t } from './HighlightCounter-a4576e6b.js';
import './preload-helper-a4975f27.js';
import './Container-638d0fae.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-813594b1.js';
import './AGraphicContainer-e7e84e10.js';
import './TechniqueInstance-2c5c10fd.js';
import './UpdateTracking2D-b9fad5e0.js';
import './TurboLine-49ca70eb.js';
import './enums-d24bcbbf.js';
import './earcut-6175cae4.js';
import './GeometryUtils-d8fd9f30.js';
import './Rect-09e0f861.js';
import './LabelMetric-3a80a80c.js';
import './Program-3681201a.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-fbd2e71b.js';
import './constants-412c3a33.js';
import './TileContainer-8b175705.js';
import './WGLContainer-0982da6a.js';
import './ProgramTemplate-90842f8d.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-6683a538.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-589fe0cf.js';
import './TimeOnly-4e6297a8.js';
import './timeSupport-67665d4d.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-4e1459d3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
