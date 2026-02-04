import { r as r$1, j as g$1, bv as j$1, bp as l$1, bu as h$1, br as a$1, t, e, k as a } from './main-5658cd6e.js';
import { h } from './Container-1d8ffe9c.js';
import { r } from './GroupContainer-ed4eed09.js';
import { f as f$1, u } from './LayerView-cbc55a02.js';
import { i } from './GraphicContainer-de440b5e.js';
import { a as ae } from './GraphicsView2D-d60c0d5b.js';
import './preload-helper-a4975f27.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-aefe232f.js';
import './WGLContainer-ac280853.js';
import './VertexArrayObject-2ba4bad7.js';
import './VertexElementDescriptor-a439aa9a.js';
import './color-6132b2c2.js';
import './enums-9c1aeae9.js';
import './ProgramTemplate-cc07a7d7.js';
import './MaterialKey-99ff6359.js';
import './utils-6a1fc53c.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './earcut-336027d9.js';
import './BaseGraphicContainer-6190d2a2.js';
import './FeatureContainer-eea18812.js';
import './AttributeStoreView-2c6b7676.js';
import './TiledDisplayObject-4282c17d.js';
import './visualVariablesUtils-93e46889.js';
import './visualVariablesUtils-1950eea1.js';
import './TileContainer-76cc62ef.js';
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
const f="sublayers",m="layerView",w=Object.freeze({remove(){},pause(){},resume(){}});let y=class extends(f$1(u)){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new r;}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(i=>i.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){r$1(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():r$1(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,i){return Array.from(this.graphicsViews(),(i=>{const s=i.hitTest(e);if(r$1(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);for(const i of s)!i.popupTemplate&&e.popupTemplate&&(i.popupTemplate=e.popupTemplate),i.sourceLayer=i.layer=this.layer;}return s})).flat().map((i=>({type:"graphic",graphic:i,layer:this.layer,mapPoint:e})))}highlight(e){let r;"number"==typeof e?r=[e]:e instanceof g$1?r=[e.uid]:Array.isArray(e)&&e.length>0?r="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):j$1.isCollection(e)&&(r=e.map((e=>e&&e.uid)).toArray());const a=r?.filter(r$1);return a?.length?(this._addHighlight(a),{remove:()=>{this._removeHighlight(a);}}):w}update(e){for(const i of this.graphicsViews())i.processUpdate(e);}attach(){const e=this.view,i$1=()=>this.requestUpdate(),s=this.layer.featureCollections;if(r$1(s)&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of s){const s=new i(this.view.featuresTilingScheme),r=new ae({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i$1,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.addHandles([l$1((()=>t.visible),(e=>r.container.visible=e),h$1),l$1((()=>r.updating),(()=>this.notifyChange("updating")),h$1)],m);}this._updateHighlight();}else r$1(this.layer.sublayers)&&this.addHandles(a$1((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),f);}detach(){this._destroyGraphicsViews(),this.removeHandles(f);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(m);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),t(this.layer.sublayers))return;const e=[],i$1=this.view,s=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new h,h$2=new i(this.view.featuresTilingScheme);h$2.fadeTransitionEnabled=!0;const n=new ae({view:i$1,graphics:t.graphics,requestUpdateCallback:s,container:h$2});this.addHandles([t.on("graphic-update",n.graphicUpdateHandler),l$1((()=>t.visible),(e=>n.container.visible=e),h$1),l$1((()=>n.updating),(()=>this.notifyChange("updating")),h$1)],m),r.addChild(n.container),this.container.addChild(r),e.push(n);}this._graphicsViews=e,this._updateHighlight();}_addHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1);}else this._highlightIds.set(i,1);this._updateHighlight();}_removeHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;0===e?this._highlightIds.delete(i):this._highlightIds.set(i,e);}this._updateHighlight();}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(e);}};y=e([a("esri.views.2d.layers.MapNotesLayerView2D")],y);const _=y;

export { _ as default };
