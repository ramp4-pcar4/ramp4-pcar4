import { ah as b$1, K as s$1, aX as e, aY as y, aZ as c } from './main-2fb669dc.js';
import { a } from './BitmapContainer-535a2357.js';
import { m as m$1, u } from './LayerView-4eb1e3f9.js';
import { v } from './ExportStrategy-f22d8774.js';
import { i } from './RefreshableLayerView-14fc72e7.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-87788aca.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-72d31dfa.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-e41b9ea0.js';
import './Program-5aae8f43.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-1bc56bc7.js';
import './Container-0ebd7c07.js';
import './highlightReasons-fb6fdeed.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-9b1a220d.js';
import './Bitmap-ceb2fafb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
