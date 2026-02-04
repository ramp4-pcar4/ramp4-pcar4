import { bv as j$1, bW as l, r as r$1, bu as h$1, t, bp as l$1, e, y, k as a } from './main-5658cd6e.js';
import { b, h, O, g, f, a as h$2, D } from './Stop-2a3ab2e2.js';
import { f as f$1, u } from './LayerView-cbc55a02.js';
import { i } from './GraphicContainer-de440b5e.js';
import { a as ae } from './GraphicsView2D-d60c0d5b.js';
import './preload-helper-a4975f27.js';
import './Container-1d8ffe9c.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-aefe232f.js';
import './color-6132b2c2.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './BaseGraphicContainer-6190d2a2.js';
import './FeatureContainer-eea18812.js';
import './AttributeStoreView-2c6b7676.js';
import './TiledDisplayObject-4282c17d.js';
import './visualVariablesUtils-93e46889.js';
import './visualVariablesUtils-1950eea1.js';
import './VertexArrayObject-2ba4bad7.js';
import './TileContainer-76cc62ef.js';
import './WGLContainer-ac280853.js';
import './ProgramTemplate-cc07a7d7.js';
import './MaterialKey-99ff6359.js';
import './utils-6a1fc53c.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './earcut-336027d9.js';
import './vec3f32-b6e01a26.js';
import './ExpandedCIM-78770fa3.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-ec270d9a.js';
import './floatRGBA-0f682c7a.js';
import './normalizeUtilsSync-c3a052ce.js';
import './projectionSupport-90bb00b7.js';
import './json-ce6e5728.js';
import './Matcher-df890909.js';
import './tileUtils-f6baf24c.js';
import './TurboLine-b7a337a5.js';
import './devEnvironmentUtils-d73295e7.js';
import './schemaUtils-b103f304.js';
import './util-0ab7a9cb.js';
import './ComputedAttributeStorage-8c98a3c7.js';
import './arcadeTimeUtils-53abd942.js';
import './executionError-ed2c63c0.js';
import './centroid-c9063998.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const k=Object.freeze({remove(){},pause(){},resume(){}}),v=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],M={graphic:null,property:null,oldValue:null,newValue:null};function V(t){return t instanceof b||t instanceof h||t instanceof O||t instanceof g||t instanceof f||t instanceof h$2||t instanceof D}function j(t){return j$1.isCollection(t)&&t.length&&V(t.getItemAt(0))}function G(t){return Array.isArray(t)&&t.length>0&&V(t[0])}let I=class extends(f$1(u)){constructor(){super(...arguments),this._graphics=new j$1,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map;}get _routeItems(){return new l({getCollections:()=>r$1(this.layer)&&!this.destroyed?[r$1(this.layer.routeInfo)?new j$1([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]:[]})}initialize(){this.updatingHandles.addOnCollectionChange((()=>this._routeItems),(t=>this._routeItemsChanged(t)),h$1);}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy();}attach(){this._createGraphicsView();}detach(){this._destroyGraphicsView();}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter((t=>!!t.popupTemplate))}highlight(t){let e;e=V(t)?[this._getNetworkFeatureUid(t)]:G(t)?t.map((t=>this._getNetworkFeatureUid(t))):j(t)?t.map((t=>this._getNetworkFeatureUid(t))).toArray():[t.uid];const r=e.filter(r$1);return r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):k}async hitTest(t,e){if(this.suspended)return null;const r=this._graphicsView.hitTest(t).filter(r$1).map((t=>this._networkGraphicMap.get(t)));if(!r.length)return null;const{layer:s}=this;return r.reverse().map((e=>({type:"route",layer:s,mapPoint:t,networkFeature:e})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t);}viewChange(){this._graphicsView.viewChange();}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e);this._highlightIds.set(e,t+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),r=new i(t.featuresTilingScheme);this._graphicsView=new ae({container:r,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(r),this._updateHighlight();}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy();}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return v.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e)-1;0===t?this._highlightIds.delete(e):this._highlightIds.set(e,t);}this._updateHighlight();}_routeItemsChanged(t$1){if(t$1.removed.length){this._graphics.removeMany(t$1.removed.map((t=>{const e=this._networkFeatureMap.get(t);return this._networkFeatureMap.delete(t),this._networkGraphicMap.delete(e),e})));for(const e of t$1.removed)this.removeHandles(e);}if(t$1.added.length){this._graphics.addMany(t$1.added.map((t$1=>{const e=this._createGraphic(t$1);return t(e.symbol)?null:(this._networkFeatureMap.set(t$1,e),this._networkGraphicMap.set(e,t$1),e)})).filter(r$1));for(const e of t$1.added)this.addHandles([l$1((()=>e.geometry),((t,r)=>{this._updateGraphic(e,"geometry",t,r);})),l$1((()=>e.symbol),((t,r)=>{this._updateGraphic(e,"symbol",t,r);}))],e);this._graphics.sort(((t,e)=>this._getDrawOrder(t)-this._getDrawOrder(e)));}}_updateGraphic(t,e,r,i){if(!this._networkFeatureMap.has(t)){const e=this._createGraphic(t);return this._networkFeatureMap.set(t,e),this._networkGraphicMap.set(e,t),void this._graphics.add(e)}const s=this._networkFeatureMap.get(t);s[e]=r,M.graphic=s,M.property=e,M.oldValue=i,M.newValue=r,this._graphicsView.graphicUpdateHandler(M);}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t);}};e([y()],I.prototype,"_graphics",void 0),e([y()],I.prototype,"_routeItems",null),I=e([a("esri.views.2d.layers.RouteLayerView2D")],I);const F=I;

export { F as default };
