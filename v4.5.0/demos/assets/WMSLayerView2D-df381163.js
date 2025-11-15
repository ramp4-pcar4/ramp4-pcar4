import { e, y as y$1, fb as b, k as a, fj as l$1, bz as a$1, c as s, bq as j$1, p as s$1, bp as l$2, w } from './main-5658cd6e.js';
import { a as a$2 } from './BitmapContainer-1c30d2c9.js';
import { f as f$1, u } from './LayerView-cbc55a02.js';
import { v } from './ExportStrategy-9c92598e.js';
import { i as i$1 } from './RefreshableLayerView-bc0c3310.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-ac280853.js';
import './definitions-281daf3f.js';
import './VertexArrayObject-2ba4bad7.js';
import './Texture-aefe232f.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';
import './color-6132b2c2.js';
import './enums-9c1aeae9.js';
import './ProgramTemplate-cc07a7d7.js';
import './MaterialKey-99ff6359.js';
import './utils-6a1fc53c.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './Container-1d8ffe9c.js';
import './earcut-336027d9.js';
import './Bitmap-076fab0d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const i=i=>{let m=class extends i{initialize(){this.exportImageParameters=new l$1({layer:this.layer});}destroy(){this.exportImageParameters=a$1(this.exportImageParameters);}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s$1=this.createFetchPopupFeaturesQuery(e);if(!s$1)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s$1;if(!(p&&a&&i))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});return t.fetchFeatureInfo(p,a,i,m,n)}};return e([y$1()],m.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],m.prototype,"exportImageVersion",null),e([y$1()],m.prototype,"layer",void 0),e([y$1(b)],m.prototype,"timeExtent",void 0),m=e([a("esri.layers.mixins.WMSLayerView")],m),m};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let y=class extends(i(i$1(f$1(u)))){constructor(){super(...arguments),this.bitmapContainer=new a$2;}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{j$1(e)||s$1.getLogger(this.declaredClass).error(e);}));}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new a$2,this.container.addChild(this.bitmapContainer),this.strategy=new v({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(l$2((()=>this.exportImageVersion),(()=>this.requestUpdate())));}detach(){this.strategy=a$1(this.strategy),this.container.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:i,y:s}=e,{spatialReference:a}=t;let o,n=0,m=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:c,y:d}=e,u=c+h*t,y=d-h*r;return i>=c&&i<=u&&s<=d&&s>=y&&(o=new w({xmin:c,ymin:y,xmax:u,ymax:d,spatialReference:a}),n=t,m=r,!0)})),!o)return null;const h=o.width/n,c=Math.round((i-o.xmin)/h),d=Math.round((o.ymax-s)/h);return {extent:o,width:n,height:m,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...i})}};e([y$1()],y.prototype,"strategy",void 0),e([y$1()],y.prototype,"updating",void 0),y=e([a("esri.views.2d.layers.WMSLayerView2D")],y);const l=y;

export { l as default };
