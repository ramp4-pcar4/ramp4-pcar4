import { bp as l$1, bu as h$1, bb as x, bv as j$1, bw as k, bx as t, by as p, e, k as a } from './main-5658cd6e.js';
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
let y=class extends(f$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([l$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:t$1,layerDefinition:o}of e){const e=x.fromJSON(t$1),p=new j$1(e.features),n=o.drawingInfo,m=i$1?k.fromJSON(i$1):null,y=t(n.renderer),g=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h$1),l$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h$1),l$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h$1),l$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([a("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
