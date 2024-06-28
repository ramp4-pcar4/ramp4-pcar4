import { b3 as d$1, b5 as P$1, b6 as d, a5 as V, b7 as P, b8 as t, b9 as m, aX as e, aZ as c } from './main-2fb669dc.js';
import { m as m$1, u } from './LayerView-4eb1e3f9.js';
import { t as t$1 } from './GraphicContainer-1422f333.js';
import { $ } from './GraphicsView2D-6af7df72.js';
import './preload-helper-a4975f27.js';
import './Container-0ebd7c07.js';
import './highlightReasons-fb6fdeed.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-e41b9ea0.js';
import './AGraphicContainer-214a1303.js';
import './TechniqueInstance-2505125b.js';
import './UpdateTracking2D-489dda2e.js';
import './TurboLine-1408cf44.js';
import './enums-d24bcbbf.js';
import './earcut-9b1a220d.js';
import './GeometryUtils-563ba14d.js';
import './Rect-09e0f861.js';
import './LabelMetric-72d31dfa.js';
import './Program-5aae8f43.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-07974ae1.js';
import './constants-412c3a33.js';
import './TileContainer-387bbeec.js';
import './WGLContainer-87788aca.js';
import './ProgramTemplate-1bc56bc7.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-7ea0442f.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-0e39d498.js';
import './TimeOnly-eaa26f3a.js';
import './timeSupport-ef77b483.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-d2c7d9d5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
