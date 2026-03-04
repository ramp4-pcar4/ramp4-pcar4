import { al as b$1, G as s$1, bH as e, bI as y, bJ as c } from './main-8822140d.js';
import { a } from './BitmapContainer-b347f934.js';
import { m as m$1, u } from './LayerView-6e37772d.js';
import { v } from './ExportStrategy-cb3eea3f.js';
import { i } from './RefreshableLayerView-fb8d1990.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-05217695.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-0cdfa04c.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-bb85fd56.js';
import './Program-c5762f5e.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-3fb0d1fd.js';
import './Container-827a1ce3.js';
import './highlightReasons-37946872.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-ba1601b9.js';
import './Bitmap-572f7a93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
