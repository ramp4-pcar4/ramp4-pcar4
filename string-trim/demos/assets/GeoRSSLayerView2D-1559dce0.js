import { b3 as d$1, b5 as P$1, b6 as d, a5 as V, b7 as P, b8 as t, b9 as m, aX as e, aZ as c } from './main-a7dddec6.js';
import { m as m$1, u } from './LayerView-304d084f.js';
import { t as t$1 } from './GraphicContainer-d3ef5d08.js';
import { $ } from './GraphicsView2D-ea5cc507.js';
import './preload-helper-a4975f27.js';
import './Container-217b1704.js';
import './highlightReasons-a3d2d3c3.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-5b90fc04.js';
import './AGraphicContainer-7b545202.js';
import './TechniqueInstance-31b1b597.js';
import './UpdateTracking2D-2171f1f0.js';
import './TurboLine-c4d37b6b.js';
import './enums-d24bcbbf.js';
import './earcut-85e1162f.js';
import './GeometryUtils-265b8927.js';
import './Rect-09e0f861.js';
import './LabelMetric-9509222c.js';
import './Program-868bb31c.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-c8aa4065.js';
import './constants-412c3a33.js';
import './TileContainer-0ce64ef4.js';
import './WGLContainer-50efbd79.js';
import './ProgramTemplate-36573304.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-be221c85.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-21c5564d.js';
import './TimeOnly-d457dfa5.js';
import './timeSupport-0f053586.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-7fdaae23.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
