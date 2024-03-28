import { bV as u$1, C as c, aa as V, q, aD as e, bH as e$1, bI as y, bJ as c$1 } from './main-7bf96003.js';
import { t as t$2 } from './highlightReasons-be296056.js';
import { m as m$1, u as u$2 } from './LayerView-6f824516.js';
import { t as t$1 } from './GraphicContainer-980b8a91.js';
import { $ } from './GraphicsView2D-b5191ec4.js';
import { t } from './HighlightCounter-5113a062.js';
import './preload-helper-a4975f27.js';
import './Container-8191ca70.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-f4a79c26.js';
import './AGraphicContainer-19050938.js';
import './TechniqueInstance-2924aff7.js';
import './UpdateTracking2D-c11b4c32.js';
import './TurboLine-4a7f27ac.js';
import './enums-d24bcbbf.js';
import './earcut-a880ce24.js';
import './GeometryUtils-2c624062.js';
import './Rect-09e0f861.js';
import './LabelMetric-40672cc3.js';
import './Program-1cba9e3c.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './constants-412c3a33.js';
import './TileContainer-ebee0c60.js';
import './WGLContainer-d1353ae6.js';
import './ProgramTemplate-c63c359c.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-84adcc79.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-6dd3605a.js';
import './TimeOnly-9c63066e.js';
import './timeSupport-0493d1ad.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-9ad71b1f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
