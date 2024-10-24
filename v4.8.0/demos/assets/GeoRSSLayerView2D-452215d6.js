import { b3 as d$1, b5 as P$1, b6 as d, a4 as V, b7 as P, b8 as t, b9 as m, aX as e, aZ as c } from './main-ba570a3b.js';
import { m as m$1, u } from './LayerView-60b3b48c.js';
import { t as t$1 } from './GraphicContainer-373fc252.js';
import { $ } from './GraphicsView2D-2e1a2f64.js';
import './preload-helper-a4975f27.js';
import './Container-2fb61ab6.js';
import './highlightReasons-1a7a040f.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-bc1db7c1.js';
import './AGraphicContainer-c3c13ee2.js';
import './TechniqueInstance-11b6fde5.js';
import './UpdateTracking2D-2201cc47.js';
import './TurboLine-b3571294.js';
import './enums-d24bcbbf.js';
import './earcut-5e747a2f.js';
import './GeometryUtils-5f2e9df6.js';
import './Rect-09e0f861.js';
import './LabelMetric-357b0502.js';
import './Program-e868790b.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-4b247651.js';
import './constants-412c3a33.js';
import './TileContainer-140aa9bc.js';
import './WGLContainer-6151f737.js';
import './ProgramTemplate-d5d4f11b.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-7ef59180.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-9c11d821.js';
import './TimeOnly-6bc84525.js';
import './timeSupport-a7be4534.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-f2a5e557.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
