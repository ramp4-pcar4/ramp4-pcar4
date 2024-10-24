import { af as b$1, H as s$1, aW as e, aX as y, aY as c } from './main-8tw5u9cl.js';
import { a } from './BitmapContainer-Bd1fpcwp.js';
import { m as m$1, u } from './LayerView-DPVOQc9d.js';
import { v } from './ExportStrategy-B-CMXMuz.js';
import { i } from './RefreshableLayerView-j5rlPuC_.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-DtIs0F3t.js';
import './definitions-slUvtMCM.js';
import './LabelMetric-Dn-LVuTZ.js';
import './enums-CgzwTbC2.js';
import './enums-DZmWLm_j.js';
import './Texture-XmEEZS7C.js';
import './Program-DV7M0gTA.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './ProgramTemplate-C-6BgJUd.js';
import './Container-DWj2A2rf.js';
import './highlightReasons-Bsv19mfd.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './earcut-ltgf9gam.js';
import './Bitmap-BdbNhwEs.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
