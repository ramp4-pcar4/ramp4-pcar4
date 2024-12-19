import { a0 as V$1, bU as l, bk as P, O, aQ as e, bj as d$1, bd as e$1, be as y, bf as a } from './main-CaWYn_3L.js';
import { c, y as y$1, C, T, j as j$1, S, w } from './Stop-BeiOkFEj.js';
import { t as t$1 } from './highlightReasons-D9CXlhgN.js';
import { f, y as y$2 } from './LayerView-_4h13NzX.js';
import { t } from './GraphicContainer-CWle__cG.js';
import { V as V$2 } from './GraphicsView2D-Bre4tJQe.js';
import './preload-helper-dJJaZANz.js';
import './Container-CbEAunjn.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-vlYvnA-k.js';
import './layerViewUtils-CRtvGSrJ.js';
import './AGraphicContainer-6gsFMSu5.js';
import './TechniqueInstance-n5H-qSD3.js';
import './UpdateTracking2D-DA_g5AxB.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-Bhtn_K0-.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-Z0h134P1.js';
import './Program-DYU3Fazx.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-B8yJfkv0.js';
import './TileContainer-BcN42p2N.js';
import './WGLContainer-BQatdvvZ.js';
import './ProgramTemplate-Ds1ErDDd.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-B6zEfVLC.js';
import './FeatureCommandQueue-5I1hZRGQ.js';
import './constants-BNnV1ogR.js';
import './AttributeStore-Cy0m6hLQ.js';
import './TimeOnly-Bh5cDEFP.js';
import './timeSupport-C_-5hWu2.js';
import './json-DYk0G9qS.js';
import './normalizeUtilsSync-ntGy9ch-.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const j=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],M={graphic:null,property:null,oldValue:null,newValue:null};function V(t){return t instanceof c||t instanceof y$1||t instanceof C||t instanceof T||t instanceof j$1||t instanceof S||t instanceof w}function G(t){return V$1.isCollection(t)&&t.length&&V(t.at(0))}function I(t){return Array.isArray(t)&&t.length>0&&V(t[0])}let v=class extends(f(y$2)){constructor(){super(...arguments),this._graphics=new V$1,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map;}get _routeItems(){return new l({getCollections:()=>null==this.layer||this.destroyed?[]:[null!=this.layer.routeInfo?new V$1([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange((()=>this._routeItems),(t=>this._routeItemsChanged(t)),P);}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy();}attach(){this._createGraphicsView();}detach(){this._destroyGraphicsView();}async fetchPopupFeaturesAtLocation(t,e){return this._graphicsView.hitTest(t).filter((({popupTemplate:t})=>!!t))}highlight(t){let r;r=V(t)?[this._getNetworkFeatureUid(t)]:I(t)?t.map((t=>this._getNetworkFeatureUid(t))):G(t)?t.map((t=>this._getNetworkFeatureUid(t))).toArray():[t.uid];const i=r.filter(O);return i.length?(this._addHighlight(i),e((()=>this._removeHighlight(i)))):e()}async hitTest(t,r){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(O).map((t=>this._networkGraphicMap.get(t)));if(!i.length)return null;const{layer:s}=this;return i.reverse().map((e=>({type:"route",layer:s,mapPoint:t,networkFeature:e})))}isUpdating(){return this._graphicsView.updating}moveEnd(){}update(t){this._graphicsView.processUpdate(t);}viewChange(){this._graphicsView.viewChange();}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e);this._highlightIds.set(e,t+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t$1=this.view,e=()=>this.requestUpdate(),r=new t(t$1.featuresTilingScheme);this._graphicsView=new V$2({container:r,graphics:this._graphics,requestUpdateCallback:e,view:t$1}),this.container.addChild(r),this._updateHighlight();}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy();}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return j.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e)-1;0===t?this._highlightIds.delete(e):this._highlightIds.set(e,t);}this._updateHighlight();}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map((t=>{const e=this._networkFeatureMap.get(t);return this._networkFeatureMap.delete(t),this._networkGraphicMap.delete(e),e})));for(const e of t.removed)this.removeHandles(e);}if(t.added.length){this._graphics.addMany(t.added.map((t=>{const e=this._createGraphic(t);return null==e.symbol?null:(this._networkFeatureMap.set(t,e),this._networkGraphicMap.set(e,t),e)})).filter(O));for(const e of t.added)this.addHandles([d$1((()=>e.geometry),((t,r)=>{this._updateGraphic(e,"geometry",t,r);})),d$1((()=>e.symbol),((t,r)=>{this._updateGraphic(e,"symbol",t,r);}))],e);this._graphics.sort(((t,e)=>this._getDrawOrder(t)-this._getDrawOrder(e)));}}_updateGraphic(t,e,r,i){if(!this._networkFeatureMap.has(t)){const e=this._createGraphic(t);return this._networkFeatureMap.set(t,e),this._networkGraphicMap.set(e,t),void this._graphics.add(e)}const s=this._networkFeatureMap.get(t);s[e]=r,M.graphic=s,M.property=e,M.oldValue=i,M.newValue=r,this._graphicsView.graphicUpdateHandler(M);}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),e=t$1("highlight");this._graphicsView.setHighlight(t.map((t=>({objectId:t,highlightFlags:e}))));}};e$1([y()],v.prototype,"_graphics",void 0),e$1([y()],v.prototype,"_routeItems",null),v=e$1([a("esri.views.2d.layers.RouteLayerView2D")],v);const F=v;

export { F as default };
