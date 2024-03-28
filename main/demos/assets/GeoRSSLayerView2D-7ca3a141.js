import { bP as d$1, bR as P$1, A as d, aa as V, bS as P, bT as t, bU as m, bH as e, bJ as c } from './main-b4e8e5ba.js';
import { m as m$1, u } from './LayerView-24a0b5a1.js';
import { t as t$1 } from './GraphicContainer-70ecdde7.js';
import { $ } from './GraphicsView2D-e16781a0.js';
import './preload-helper-a4975f27.js';
import './Container-9f88537f.js';
import './highlightReasons-5c88b825.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-31112cda.js';
import './AGraphicContainer-39ede2a1.js';
import './TechniqueInstance-b5149de6.js';
import './UpdateTracking2D-819a882c.js';
import './TurboLine-f816a660.js';
import './enums-d24bcbbf.js';
import './earcut-8748428b.js';
import './GeometryUtils-a41900b1.js';
import './Rect-09e0f861.js';
import './LabelMetric-daa9c9e2.js';
import './Program-6de50f5a.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './constants-412c3a33.js';
import './TileContainer-fe4f3567.js';
import './WGLContainer-395f9022.js';
import './ProgramTemplate-85c6bcd7.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-9ec160f7.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-8c8ac1c7.js';
import './TimeOnly-26cb06d7.js';
import './timeSupport-9b341202.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-c1386c0e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
