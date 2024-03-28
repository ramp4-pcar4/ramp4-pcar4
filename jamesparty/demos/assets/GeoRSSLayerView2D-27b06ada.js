import { bP as d$1, bR as P$1, A as d, aa as V, bS as P, bT as t, bU as m, bH as e, bJ as c } from './main-7bf96003.js';
import { m as m$1, u } from './LayerView-6f824516.js';
import { t as t$1 } from './GraphicContainer-980b8a91.js';
import { $ } from './GraphicsView2D-b5191ec4.js';
import './preload-helper-a4975f27.js';
import './Container-8191ca70.js';
import './highlightReasons-be296056.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-f4a79c26.js';
import './AGraphicContainer-19050938.js';
import './TechniqueInstance-2924aff7.js';
import './UpdateTracking2D-c11b4c32.js';
import './TurboLine-4a7f27ac.js';
import './enums-d24bcbbf.js';
import './earcut-a880ce24.js';
import './GeometryUtils-2c624062.js';
import './Rect-09e0f861.js';
import './LabelMetric-40672cc3.js';
import './Program-1cba9e3c.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './constants-412c3a33.js';
import './TileContainer-ebee0c60.js';
import './WGLContainer-d1353ae6.js';
import './ProgramTemplate-c63c359c.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-84adcc79.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-6dd3605a.js';
import './TimeOnly-9c63066e.js';
import './timeSupport-0493d1ad.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-9ad71b1f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
