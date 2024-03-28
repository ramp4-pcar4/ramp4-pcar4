import { bV as u$1, C as c, aa as V, q, aD as e, bH as e$1, bI as y, bJ as c$1 } from './main-b4e8e5ba.js';
import { t as t$2 } from './highlightReasons-5c88b825.js';
import { m as m$1, u as u$2 } from './LayerView-24a0b5a1.js';
import { t as t$1 } from './GraphicContainer-70ecdde7.js';
import { $ } from './GraphicsView2D-e16781a0.js';
import { t } from './HighlightCounter-89e22e96.js';
import './preload-helper-a4975f27.js';
import './Container-9f88537f.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-31112cda.js';
import './AGraphicContainer-39ede2a1.js';
import './TechniqueInstance-b5149de6.js';
import './UpdateTracking2D-819a882c.js';
import './TurboLine-f816a660.js';
import './enums-d24bcbbf.js';
import './earcut-8748428b.js';
import './GeometryUtils-a41900b1.js';
import './Rect-09e0f861.js';
import './LabelMetric-daa9c9e2.js';
import './Program-6de50f5a.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './constants-412c3a33.js';
import './TileContainer-fe4f3567.js';
import './WGLContainer-395f9022.js';
import './ProgramTemplate-85c6bcd7.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-9ec160f7.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-8c8ac1c7.js';
import './TimeOnly-26cb06d7.js';
import './timeSupport-9b341202.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-c1386c0e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
