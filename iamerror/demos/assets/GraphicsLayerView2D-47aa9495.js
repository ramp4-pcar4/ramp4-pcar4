import { ba as u$1, a6 as c, a5 as V, q, az as e, aX as e$1, aY as y, aZ as c$1 } from './main-9e89a8e1.js';
import { t as t$2 } from './highlightReasons-fd22591c.js';
import { m as m$1, u as u$2 } from './LayerView-0078c07e.js';
import { t as t$1 } from './GraphicContainer-ee16203b.js';
import { $ } from './GraphicsView2D-996eae57.js';
import { t } from './HighlightCounter-a130138d.js';
import './preload-helper-a4975f27.js';
import './Container-826f2649.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-7ed59734.js';
import './AGraphicContainer-5ab09ef4.js';
import './TechniqueInstance-b4852aa3.js';
import './UpdateTracking2D-a4644425.js';
import './TurboLine-9afb3fed.js';
import './enums-d24bcbbf.js';
import './earcut-f48473a7.js';
import './GeometryUtils-f7982c6b.js';
import './Rect-09e0f861.js';
import './LabelMetric-27b8456c.js';
import './Program-f839b0de.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-f4c33fa2.js';
import './constants-412c3a33.js';
import './TileContainer-cf478a09.js';
import './WGLContainer-8108d9e0.js';
import './ProgramTemplate-f326445f.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-b5bb812d.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-1506ef60.js';
import './TimeOnly-06bb1709.js';
import './timeSupport-14de4427.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-fc98a01e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
