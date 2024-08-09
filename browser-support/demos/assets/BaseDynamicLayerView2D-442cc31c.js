import { ah as b$1, K as s$1, aX as e, aY as y, aZ as c } from './main-74a89b3f.js';
import { a } from './BitmapContainer-73ddc2c8.js';
import { m as m$1, u } from './LayerView-f12d5581.js';
import { v } from './ExportStrategy-e9ead207.js';
import { i } from './RefreshableLayerView-4338278c.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-44133452.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-5519185e.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-1ed855cd.js';
import './Program-20de81ae.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-03ba2362.js';
import './Container-b54823be.js';
import './highlightReasons-5438f7f5.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-c82e2be9.js';
import './Bitmap-d470abca.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
