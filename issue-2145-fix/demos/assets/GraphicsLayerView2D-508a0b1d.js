import { ba as u$1, a6 as c, a5 as V, q, az as e, aX as e$1, aY as y, aZ as c$1 } from './main-6cddcc3a.js';
import { t as t$2 } from './highlightReasons-4f47b554.js';
import { m as m$1, u as u$2 } from './LayerView-dcb1c5cb.js';
import { t as t$1 } from './GraphicContainer-ac2082b5.js';
import { $ } from './GraphicsView2D-7ac20019.js';
import { t } from './HighlightCounter-25f040db.js';
import './preload-helper-a4975f27.js';
import './Container-a75c811b.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-322c19dc.js';
import './AGraphicContainer-5d64531d.js';
import './TechniqueInstance-9101426e.js';
import './UpdateTracking2D-b7b90d3c.js';
import './TurboLine-b6b21f29.js';
import './enums-d24bcbbf.js';
import './earcut-2991eefe.js';
import './GeometryUtils-cffa80a9.js';
import './Rect-09e0f861.js';
import './LabelMetric-583a74cf.js';
import './Program-b33eb74f.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-67b7ee0a.js';
import './constants-412c3a33.js';
import './TileContainer-f2010334.js';
import './WGLContainer-3cb041b1.js';
import './ProgramTemplate-e9caf7be.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-c505eb80.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-3f6c18af.js';
import './TimeOnly-81ab0207.js';
import './timeSupport-ce1c007c.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-599edbcd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
