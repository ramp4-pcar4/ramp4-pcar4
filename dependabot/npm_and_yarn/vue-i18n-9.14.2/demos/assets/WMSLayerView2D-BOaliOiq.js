import { bd as e, be as y$1, bf as a, fW as a$1, bp as u$1, s, dN as s$1, ax as b$1, G as n$1, bj as d$1, a_ as w$1 } from './main-C4Zge2Yj.js';
import { a as a$2 } from './BitmapContainer-CGlpDdEd.js';
import { f, y as y$2 } from './LayerView-CLnau-rv.js';
import { _ } from './ExportStrategy-C_m76hpb.js';
import { i as i$1 } from './RefreshableLayerView-BRLGk7d3.js';
import { i } from './timeSupport-C_oYRIWg.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-F_pfnvV9.js';
import './definitions-BdwlvHBE.js';
import './LabelMetric-BexxQf0w.js';
import './enums-CHdyfzUK.js';
import './Texture-BghNYWXB.js';
import './enums-CwcDCDam.js';
import './Program-BvYEs7q3.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './ProgramTemplate-x-eDnpWW.js';
import './vec3f32-CmlAce5k.js';
import './Container-BRZw5EQp.js';
import './highlightReasons-CvAQeGxW.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-Dk31jkT2.js';
import './layerViewUtils-CRtvGSrJ.js';
import './Bitmap-7_COT5Xt.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const m=m=>{let n=class extends m{initialize(){this.exportImageParameters=new a$1({layer:this.layer});}destroy(){this.exportImageParameters=u$1(this.exportImageParameters);}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return i(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,r){const{layer:s$2}=this;if(!e)throw new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s$2});const{popupEnabled:a}=s$2;if(!a)throw new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:a});const p=this.createFetchPopupFeaturesQuery(e);if(!p)return [];const{extent:i,width:m,height:n,x:c,y:u}=p;if(!(i&&m&&n))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:m,height:n});const h=await s$2.fetchFeatureInfo(i,m,n,c,u);return s$1(r),h}};return e([y$1()],n.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],n.prototype,"exportImageVersion",null),e([y$1()],n.prototype,"layer",void 0),e([y$1({readOnly:!0})],n.prototype,"timeExtent",null),n=e([a("esri.views.layers.WMSLayerView")],n),n};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let g=class extends(m(i$1(f(y$2)))){constructor(){super(...arguments),this.bitmapContainer=new a$2;}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{b$1(e)||n$1.getLogger(this).error(e);}));}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new a$2,this.container.addChild(this.bitmapContainer),this.strategy=new _({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(d$1((()=>this.exportImageVersion),(()=>this.requestUpdate())));}detach(){this.strategy=u$1(this.strategy),this.container.removeAllChildren();}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:i,y:s}=e,{spatialReference:a}=t;let o,p=0,m=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:c,y:d}=e,u=c+h*t,g=d-h*r;return i>=c&&i<=u&&s<=d&&s>=g&&(o=new w$1({xmin:c,ymin:g,xmax:u,ymax:d,spatialReference:a}),p=t,m=r,!0)})),!o)return null;const h=o.width/p,c=Math.round((i-o.xmin)/h),d=Math.round((o.ymax-s)/h);return {extent:o,width:p,height:m,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...i})}};e([y$1()],g.prototype,"strategy",void 0),e([y$1()],g.prototype,"updating",void 0),g=e([a("esri.views.2d.layers.WMSLayerView2D")],g);const y=g;

export { y as default };
