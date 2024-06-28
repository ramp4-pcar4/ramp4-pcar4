import { ah as b$1, K as s$1, aX as e, aY as y, aZ as c } from './main-11560473.js';
import { a } from './BitmapContainer-ef12dafe.js';
import { m as m$1, u } from './LayerView-bfd478a1.js';
import { v } from './ExportStrategy-512f9023.js';
import { i } from './RefreshableLayerView-b0bda0c1.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-974b3fd0.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-bb3ed296.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-e6d7d511.js';
import './Program-151af727.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-27ae976b.js';
import './Container-2b3b720d.js';
import './highlightReasons-26b94219.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-e36c2950.js';
import './Bitmap-e8ddcc5a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
