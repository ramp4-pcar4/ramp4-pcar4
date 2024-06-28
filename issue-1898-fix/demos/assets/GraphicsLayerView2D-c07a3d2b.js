import { ba as u$1, a6 as c, a5 as V, q, az as e, aX as e$1, aY as y, aZ as c$1 } from './main-85b30676.js';
import { t as t$2 } from './highlightReasons-f97996ea.js';
import { m as m$1, u as u$2 } from './LayerView-1797f0e3.js';
import { t as t$1 } from './GraphicContainer-65238b93.js';
import { $ } from './GraphicsView2D-807cb6da.js';
import { t } from './HighlightCounter-78c124b9.js';
import './preload-helper-a4975f27.js';
import './Container-e72826d9.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-ea9fdac2.js';
import './AGraphicContainer-c9766899.js';
import './TechniqueInstance-280c7a3b.js';
import './UpdateTracking2D-c94279f2.js';
import './TurboLine-207ea227.js';
import './enums-d24bcbbf.js';
import './earcut-06df3cd5.js';
import './GeometryUtils-7756492b.js';
import './Rect-09e0f861.js';
import './LabelMetric-10e7b37a.js';
import './Program-c750810b.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-02f0865e.js';
import './constants-412c3a33.js';
import './TileContainer-26f40735.js';
import './WGLContainer-29571554.js';
import './ProgramTemplate-31e58fa5.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-77ddfe76.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-8bf920f9.js';
import './TimeOnly-f143fdcd.js';
import './timeSupport-74e255c0.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-1c114bfc.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
