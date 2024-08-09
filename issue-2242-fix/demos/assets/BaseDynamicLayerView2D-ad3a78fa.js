import { ah as b$1, K as s$1, aX as e, aY as y, aZ as c } from './main-531e2c38.js';
import { a } from './BitmapContainer-753392e2.js';
import { m as m$1, u } from './LayerView-bf33f7c7.js';
import { v } from './ExportStrategy-a50997ed.js';
import { i } from './RefreshableLayerView-d8a1f1c9.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-e8086d8d.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-82163c88.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-5141d14b.js';
import './Program-f70659d3.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-24045991.js';
import './Container-f917ce80.js';
import './highlightReasons-04263050.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-91ce8cb1.js';
import './Bitmap-b3d6c309.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
