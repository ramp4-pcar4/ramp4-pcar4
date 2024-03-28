import { al as b$1, G as s$1, bH as e, bI as y, bJ as c } from './main-b4e8e5ba.js';
import { a } from './BitmapContainer-3a25ad8e.js';
import { m as m$1, u } from './LayerView-24a0b5a1.js';
import { v } from './ExportStrategy-2590322c.js';
import { i } from './RefreshableLayerView-82e0140b.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-395f9022.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-daa9c9e2.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-31112cda.js';
import './Program-6de50f5a.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-85c6bcd7.js';
import './Container-9f88537f.js';
import './highlightReasons-5c88b825.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-8748428b.js';
import './Bitmap-ca50346d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
