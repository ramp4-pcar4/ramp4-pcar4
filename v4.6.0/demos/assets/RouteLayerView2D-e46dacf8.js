import { aa as V$1, ce as l, bR as P$1, q, aD as e, bP as d$1, bH as e$1, bI as y, bJ as c } from './main-8822140d.js';
import { m, c as c$1, O, f, j as j$1, g, a as O$1 } from './Stop-5208b4fd.js';
import { t as t$1 } from './highlightReasons-37946872.js';
import { m as m$1, u } from './LayerView-6e37772d.js';
import { t } from './GraphicContainer-3782627f.js';
import { $ } from './GraphicsView2D-3f3627fd.js';
import './preload-helper-a4975f27.js';
import './Container-827a1ce3.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-bb85fd56.js';
import './AGraphicContainer-fcd30532.js';
import './TechniqueInstance-c7b426cd.js';
import './UpdateTracking2D-93c63dfd.js';
import './TurboLine-6dc0308b.js';
import './enums-d24bcbbf.js';
import './earcut-ba1601b9.js';
import './GeometryUtils-919c0656.js';
import './Rect-09e0f861.js';
import './LabelMetric-0cdfa04c.js';
import './Program-c5762f5e.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './constants-412c3a33.js';
import './TileContainer-cfa23ffa.js';
import './WGLContainer-05217695.js';
import './ProgramTemplate-3fb0d1fd.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-52bfb91b.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-f33cda45.js';
import './TimeOnly-0d3b8280.js';
import './timeSupport-a9e7b11e.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-91a13cf2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const j=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],M={graphic:null,property:null,oldValue:null,newValue:null};function V(t){return t instanceof m||t instanceof c$1||t instanceof O||t instanceof f||t instanceof j$1||t instanceof g||t instanceof O$1}function v(t){return V$1.isCollection(t)&&t.length&&V(t.at(0))}function G(t){return Array.isArray(t)&&t.length>0&&V(t[0])}let I=class extends(m$1(u)){constructor(){super(...arguments),this._graphics=new V$1,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map;}get _routeItems(){return new l({getCollections:()=>null==this.layer||this.destroyed?[]:[null!=this.layer.routeInfo?new V$1([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange((()=>this._routeItems),(t=>this._routeItemsChanged(t)),P$1);}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy();}attach(){this._createGraphicsView();}detach(){this._destroyGraphicsView();}async fetchPopupFeaturesAtLocation(t,e){return this._graphicsView.hitTest(t).filter((({popupTemplate:t})=>!!t))}highlight(t){let r;r=V(t)?[this._getNetworkFeatureUid(t)]:G(t)?t.map((t=>this._getNetworkFeatureUid(t))):v(t)?t.map((t=>this._getNetworkFeatureUid(t))).toArray():[t.uid];const i=r.filter(q);return i.length?(this._addHighlight(i),e((()=>this._removeHighlight(i)))):e()}async hitTest(t,r){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(q).map((t=>this._networkGraphicMap.get(t)));if(!i.length)return null;const{layer:s}=this;return i.reverse().map((e=>({type:"route",layer:s,mapPoint:t,networkFeature:e})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t);}viewChange(){this._graphicsView.viewChange();}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e);this._highlightIds.set(e,t+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t$1=this.view,e=()=>this.requestUpdate(),r=new t(t$1.featuresTilingScheme);this._graphicsView=new $({container:r,graphics:this._graphics,requestUpdateCallback:e,view:t$1}),this.container.addChild(r),this._updateHighlight();}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy();}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return j.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e)-1;0===t?this._highlightIds.delete(e):this._highlightIds.set(e,t);}this._updateHighlight();}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map((t=>{const e=this._networkFeatureMap.get(t);return this._networkFeatureMap.delete(t),this._networkGraphicMap.delete(e),e})));for(const e of t.removed)this.removeHandles(e);}if(t.added.length){this._graphics.addMany(t.added.map((t=>{const e=this._createGraphic(t);return null==e.symbol?null:(this._networkFeatureMap.set(t,e),this._networkGraphicMap.set(e,t),e)})).filter(q));for(const e of t.added)this.addHandles([d$1((()=>e.geometry),((t,r)=>{this._updateGraphic(e,"geometry",t,r);})),d$1((()=>e.symbol),((t,r)=>{this._updateGraphic(e,"symbol",t,r);}))],e);this._graphics.sort(((t,e)=>this._getDrawOrder(t)-this._getDrawOrder(e)));}}_updateGraphic(t,e,r,i){if(!this._networkFeatureMap.has(t)){const e=this._createGraphic(t);return this._networkFeatureMap.set(t,e),this._networkGraphicMap.set(e,t),void this._graphics.add(e)}const s=this._networkFeatureMap.get(t);s[e]=r,M.graphic=s,M.property=e,M.oldValue=i,M.newValue=r,this._graphicsView.graphicUpdateHandler(M);}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),e=t$1("highlight");this._graphicsView.setHighlight(t.map((t=>({objectId:t,highlightFlags:e}))));}};e$1([y()],I.prototype,"_graphics",void 0),e$1([y()],I.prototype,"_routeItems",null),I=e$1([c("esri.views.2d.layers.RouteLayerView2D")],I);const F=I;

export { F as default };
