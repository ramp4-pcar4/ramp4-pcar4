import { b3 as d$1, b5 as P$1, b6 as d, a5 as V, b7 as P, b8 as t, b9 as m, aX as e, aZ as c } from './main-11560473.js';
import { m as m$1, u } from './LayerView-bfd478a1.js';
import { t as t$1 } from './GraphicContainer-d72bf738.js';
import { $ } from './GraphicsView2D-edf5d43b.js';
import './preload-helper-a4975f27.js';
import './Container-2b3b720d.js';
import './highlightReasons-26b94219.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-e6d7d511.js';
import './AGraphicContainer-cd9c1730.js';
import './TechniqueInstance-a4514021.js';
import './UpdateTracking2D-b6cb1547.js';
import './TurboLine-d74002eb.js';
import './enums-d24bcbbf.js';
import './earcut-e36c2950.js';
import './GeometryUtils-1880e7d6.js';
import './Rect-09e0f861.js';
import './LabelMetric-bb3ed296.js';
import './Program-151af727.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-2ea80bcc.js';
import './constants-412c3a33.js';
import './TileContainer-d0be874d.js';
import './WGLContainer-974b3fd0.js';
import './ProgramTemplate-27ae976b.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-8d4f0417.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-ebf81d5b.js';
import './TimeOnly-7e5f2258.js';
import './timeSupport-71f1bbae.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-a1e9a61e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
