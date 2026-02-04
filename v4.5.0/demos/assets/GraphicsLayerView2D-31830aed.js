import { bz as a$1, j as g$1, bv as j$1, r as r$1, e, y, k as a } from './main-5658cd6e.js';
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
const l={remove(){},pause(){},resume(){}};let n=class extends(f$1(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler));}detach(){this.container.removeAllChildren(),this.graphicsView=a$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate)):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;"number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j$1.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray());const r=s?.filter(r$1);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):l}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;0===i?this._highlightIds.delete(t):this._highlightIds.set(t,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([y()],n.prototype,"graphicsView",void 0),n=e([a("esri.views.2d.layers.GraphicsLayerView2D")],n);const d=n;

export { d as default };
