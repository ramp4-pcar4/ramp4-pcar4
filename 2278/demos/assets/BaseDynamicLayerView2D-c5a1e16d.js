import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-e59ca501.js';
import { a } from './BitmapContainer-8de112cd.js';
import { m as m$1, u } from './LayerView-e7060a91.js';
import { v } from './ExportStrategy-8b01f291.js';
import { i } from './RefreshableLayerView-e37e8ba1.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-43df48a1.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-92b6cc5f.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-982364b2.js';
import './Program-b3e4c384.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-fa9ffc66.js';
import './Container-4363ce99.js';
import './highlightReasons-4f8752c8.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-53600461.js';
import './Bitmap-1936fa59.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
