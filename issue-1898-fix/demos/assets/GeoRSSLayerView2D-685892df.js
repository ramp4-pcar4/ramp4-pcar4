import { b3 as d$1, b5 as P$1, b6 as d, a5 as V, b7 as P, b8 as t, b9 as m, aX as e, aZ as c } from './main-85b30676.js';
import { m as m$1, u } from './LayerView-1797f0e3.js';
import { t as t$1 } from './GraphicContainer-65238b93.js';
import { $ } from './GraphicsView2D-807cb6da.js';
import './preload-helper-a4975f27.js';
import './Container-e72826d9.js';
import './highlightReasons-f97996ea.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-ea9fdac2.js';
import './AGraphicContainer-c9766899.js';
import './TechniqueInstance-280c7a3b.js';
import './UpdateTracking2D-c94279f2.js';
import './TurboLine-207ea227.js';
import './enums-d24bcbbf.js';
import './earcut-06df3cd5.js';
import './GeometryUtils-7756492b.js';
import './Rect-09e0f861.js';
import './LabelMetric-10e7b37a.js';
import './Program-c750810b.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-02f0865e.js';
import './constants-412c3a33.js';
import './TileContainer-26f40735.js';
import './WGLContainer-29571554.js';
import './ProgramTemplate-31e58fa5.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-77ddfe76.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-8bf920f9.js';
import './TimeOnly-f143fdcd.js';
import './timeSupport-74e255c0.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-1c114bfc.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
