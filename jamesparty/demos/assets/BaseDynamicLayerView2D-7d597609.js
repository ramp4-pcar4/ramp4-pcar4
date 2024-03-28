import { al as b$1, G as s$1, bH as e, bI as y, bJ as c } from './main-7bf96003.js';
import { a } from './BitmapContainer-28e357bc.js';
import { m as m$1, u } from './LayerView-6f824516.js';
import { v } from './ExportStrategy-88eab84e.js';
import { i } from './RefreshableLayerView-8b243eec.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-d1353ae6.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-40672cc3.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-f4a79c26.js';
import './Program-1cba9e3c.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-c63c359c.js';
import './Container-8191ca70.js';
import './highlightReasons-be296056.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-a880ce24.js';
import './Bitmap-d465b784.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
