import { ba as u$1, a5 as c, a4 as V, q, ay as e, aX as e$1, aY as y, aZ as c$1 } from './main-ba570a3b.js';
import { t as t$2 } from './highlightReasons-1a7a040f.js';
import { m as m$1, u as u$2 } from './LayerView-60b3b48c.js';
import { t as t$1 } from './GraphicContainer-373fc252.js';
import { $ } from './GraphicsView2D-2e1a2f64.js';
import { t } from './HighlightCounter-5389a0d1.js';
import './preload-helper-a4975f27.js';
import './Container-2fb61ab6.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-bc1db7c1.js';
import './AGraphicContainer-c3c13ee2.js';
import './TechniqueInstance-11b6fde5.js';
import './UpdateTracking2D-2201cc47.js';
import './TurboLine-b3571294.js';
import './enums-d24bcbbf.js';
import './earcut-5e747a2f.js';
import './GeometryUtils-5f2e9df6.js';
import './Rect-09e0f861.js';
import './LabelMetric-357b0502.js';
import './Program-e868790b.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-4b247651.js';
import './constants-412c3a33.js';
import './TileContainer-140aa9bc.js';
import './WGLContainer-6151f737.js';
import './ProgramTemplate-d5d4f11b.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-7ef59180.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-9c11d821.js';
import './TimeOnly-6bc84525.js';
import './timeSupport-a7be4534.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-f2a5e557.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
