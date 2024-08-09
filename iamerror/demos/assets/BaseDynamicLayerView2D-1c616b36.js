import { ah as b$1, K as s$1, aX as e, aY as y, aZ as c } from './main-9e89a8e1.js';
import { a } from './BitmapContainer-5b5be73b.js';
import { m as m$1, u } from './LayerView-0078c07e.js';
import { v } from './ExportStrategy-0ce7d2b3.js';
import { i } from './RefreshableLayerView-0c0be56b.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-8108d9e0.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-27b8456c.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-7ed59734.js';
import './Program-f839b0de.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-f326445f.js';
import './Container-826f2649.js';
import './highlightReasons-fd22591c.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-f48473a7.js';
import './Bitmap-e38706be.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
