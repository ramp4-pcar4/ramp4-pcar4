import { ba as u$1, a5 as c, a4 as V, q, ay as e, aX as e$1, aY as y, aZ as c$1 } from './main-a5d6ba42.js';
import { t as t$2 } from './highlightReasons-b9c395c5.js';
import { m as m$1, u as u$2 } from './LayerView-515a101a.js';
import { t as t$1 } from './GraphicContainer-0a5f4726.js';
import { $ } from './GraphicsView2D-e2f047fc.js';
import { t } from './HighlightCounter-0240eb23.js';
import './preload-helper-a4975f27.js';
import './Container-25f20a81.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-48cadd05.js';
import './AGraphicContainer-e9d84fdb.js';
import './TechniqueInstance-ff6cc0f5.js';
import './UpdateTracking2D-61954630.js';
import './TurboLine-ca8ad412.js';
import './enums-d24bcbbf.js';
import './earcut-a49e31c6.js';
import './GeometryUtils-373fc28e.js';
import './Rect-09e0f861.js';
import './LabelMetric-d72a54bb.js';
import './Program-9df8661d.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-32e9aa94.js';
import './constants-412c3a33.js';
import './TileContainer-d5d58312.js';
import './WGLContainer-e390b61b.js';
import './ProgramTemplate-5fc32660.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-27fd9f0d.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-b1e8760a.js';
import './TimeOnly-03b305b0.js';
import './timeSupport-c7c5aa16.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-b95abf84.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
