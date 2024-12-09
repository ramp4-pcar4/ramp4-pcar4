import { ax as b$1, G as n$1, bd as e, be as y, bf as a$1 } from './main-YSH8Qvd0.js';
import { a } from './BitmapContainer-C8deJCgY.js';
import { f, y as y$1 } from './LayerView-CkazLMcs.js';
import { _ } from './ExportStrategy-CQPv8AOP.js';
import { i } from './RefreshableLayerView-qbhaRSDv.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-D6jupTuP.js';
import './definitions-BdwlvHBE.js';
import './LabelMetric-Bnf6Ud2A.js';
import './enums-CHdyfzUK.js';
import './Texture-B2fqbWGu.js';
import './enums-CwcDCDam.js';
import './Program-B_1Ck0yX.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './ProgramTemplate-0vuAPRyT.js';
import './vec3f32-CmlAce5k.js';
import './Container-Bjkx24f1.js';
import './highlightReasons-C6YF5eGX.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-1p-jfyBa.js';
import './layerViewUtils-CRtvGSrJ.js';
import './Bitmap-DNVVr82l.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let m=class extends(i(f(y$1))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||n$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],m.prototype,"_strategy",void 0),e([y()],m.prototype,"updating",void 0),m=e([a$1("esri.views.2d.layers.BaseDynamicLayerView2D")],m);const d=m;

export { d as default };
