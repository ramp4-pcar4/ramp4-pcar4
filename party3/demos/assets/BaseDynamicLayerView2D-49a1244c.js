import { ah as b$1, K as s$1, aX as e, aY as y, aZ as c } from './main-8be6dd14.js';
import { a } from './BitmapContainer-1937158a.js';
import { m as m$1, u } from './LayerView-f51651aa.js';
import { v } from './ExportStrategy-7b2c28b6.js';
import { i } from './RefreshableLayerView-c2e9885b.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-7630074c.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-41a59d20.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-36d78877.js';
import './Program-bf1584a8.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-b6568f10.js';
import './Container-91519481.js';
import './highlightReasons-50d585d5.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-dec6dbac.js';
import './Bitmap-9a4da07d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
