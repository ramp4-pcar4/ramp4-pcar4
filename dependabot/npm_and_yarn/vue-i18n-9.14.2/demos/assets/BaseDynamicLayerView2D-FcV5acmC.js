import { ax as b$1, G as n$1, bd as e, be as y, bf as a$1 } from './main-C4Zge2Yj.js';
import { a } from './BitmapContainer-CGlpDdEd.js';
import { f, y as y$1 } from './LayerView-CLnau-rv.js';
import { _ } from './ExportStrategy-C_m76hpb.js';
import { i } from './RefreshableLayerView-BRLGk7d3.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-F_pfnvV9.js';
import './definitions-BdwlvHBE.js';
import './LabelMetric-BexxQf0w.js';
import './enums-CHdyfzUK.js';
import './Texture-BghNYWXB.js';
import './enums-CwcDCDam.js';
import './Program-BvYEs7q3.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './ProgramTemplate-x-eDnpWW.js';
import './vec3f32-CmlAce5k.js';
import './Container-BRZw5EQp.js';
import './highlightReasons-CvAQeGxW.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-Dk31jkT2.js';
import './layerViewUtils-CRtvGSrJ.js';
import './Bitmap-7_COT5Xt.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let m=class extends(i(f(y$1))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||n$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],m.prototype,"_strategy",void 0),e([y()],m.prototype,"updating",void 0),m=e([a$1("esri.views.2d.layers.BaseDynamicLayerView2D")],m);const d=m;

export { d as default };
