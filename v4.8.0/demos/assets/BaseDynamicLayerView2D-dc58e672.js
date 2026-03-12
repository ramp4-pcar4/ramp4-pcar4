import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-ba570a3b.js';
import { a } from './BitmapContainer-b68525cb.js';
import { m as m$1, u } from './LayerView-60b3b48c.js';
import { v } from './ExportStrategy-bd8cafb9.js';
import { i } from './RefreshableLayerView-8ed8bb2f.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-6151f737.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-357b0502.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-bc1db7c1.js';
import './Program-e868790b.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-d5d4f11b.js';
import './Container-2fb61ab6.js';
import './highlightReasons-1a7a040f.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-5e747a2f.js';
import './Bitmap-3bf8efd2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
