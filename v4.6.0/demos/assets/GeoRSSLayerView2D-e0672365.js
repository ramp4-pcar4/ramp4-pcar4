import { bP as d$1, bR as P$1, A as d, aa as V, bS as P, bT as t, bU as m, bH as e, bJ as c } from './main-8822140d.js';
import { m as m$1, u } from './LayerView-6e37772d.js';
import { t as t$1 } from './GraphicContainer-3782627f.js';
import { $ } from './GraphicsView2D-3f3627fd.js';
import './preload-helper-a4975f27.js';
import './Container-827a1ce3.js';
import './highlightReasons-37946872.js';
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
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
