import { ah as b$1, K as s$1, aX as e, aY as y, aZ as c } from './main-73be8b09.js';
import { a } from './BitmapContainer-59857195.js';
import { m as m$1, u } from './LayerView-006ddf70.js';
import { v } from './ExportStrategy-52822aa9.js';
import { i } from './RefreshableLayerView-a9ba9824.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-55313a47.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-a665d9b8.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-baa6fe37.js';
import './Program-5322f5c6.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-cacba1b0.js';
import './Container-f0bd0539.js';
import './highlightReasons-16f4e1a4.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-4ed90869.js';
import './Bitmap-9e2ffc4b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
