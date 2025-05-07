import { b9 as u$1, a4 as c, a3 as V, q, ax as e, aW as e$1, aX as y, aY as c$1 } from './main-DbwmOBz5.js';
import { t as t$2 } from './highlightReasons-ChlmhZbe.js';
import { m as m$1, u as u$2 } from './LayerView-DRPsVoik.js';
import { t as t$1 } from './GraphicContainer-Bxt9lSmW.js';
import { $ } from './GraphicsView2D-C7VEBmMz.js';
import { t } from './HighlightCounter-DTmE-jJ0.js';
import './preload-helper-dJJaZANz.js';
import './Container-DviF70OM.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-Btu1vg0E.js';
import './AGraphicContainer-Bf9SgtZM.js';
import './TechniqueInstance-Ca7BFVL9.js';
import './UpdateTracking2D-C8_iInBH.js';
import './TurboLine-CqoJwi0j.js';
import './enums-DZmWLm_j.js';
import './earcut-C9lmUnMR.js';
import './GeometryUtils-DogKC5re.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-lIdhL9If.js';
import './Program-BQZhavrO.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DNz56t3G.js';
import './constants-C0QDwCF4.js';
import './TileContainer-CWfWqLjr.js';
import './WGLContainer-CYbfUedO.js';
import './ProgramTemplate-DmXCLrpq.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './FeatureCommandQueue-DlLU5VPn.js';
import './vec3f32-CLbqcArJ.js';
import './AttributeStore-D0aeY6aE.js';
import './TimeOnly-BuMAmOmw.js';
import './timeSupport-BMTj-o_r.js';
import './json-Beimr7gP.js';
import './normalizeUtilsSync-DSJ8eaeu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
