import { e, y, bV as t, k as a$1, bv as j$1, bp as l$1, e1 as U, bU as n$1, t as t$1 } from './main-5658cd6e.js';
import { r } from './GroupContainer-ed4eed09.js';
import { u, f as f$1 } from './LayerView-cbc55a02.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-ac280853.js';
import './definitions-281daf3f.js';
import './VertexArrayObject-2ba4bad7.js';
import './Texture-aefe232f.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';
import './color-6132b2c2.js';
import './enums-9c1aeae9.js';
import './ProgramTemplate-cc07a7d7.js';
import './MaterialKey-99ff6359.js';
import './utils-6a1fc53c.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './Container-1d8ffe9c.js';
import './earcut-336027d9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let p=class extends u{constructor(i){super(i),this.type="group",this.layerViews=new j$1;}_allLayerViewVisibility(i){this.layerViews.forEach((e=>{e.visible=i;}));}initialize(){this.handles.add([this.layerViews.on("change",(i=>this._layerViewsChangeHandler(i))),l$1((()=>this.layer.visibilityMode),(()=>this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)))),U),l$1((()=>this.visible),(i=>{this._applyVisibility((()=>this._allLayerViewVisibility(i)),(()=>{}));}),U)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]});}set layerViews(i){this._set("layerViews",n$1(i,this._get("layerViews")));}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((i,e)=>i+e.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.layerViews.some((i=>i.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((i=>i._isOverridden("visible")))}_findLayerViewForLayer(i){return i&&this.layerViews.find((e=>e.layer===i))}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find((i=>!!this._findLayerViewForLayer(i)?.visible));return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){t$1(i)&&(i=this._firstVisibleOnLayerOrder(),t$1(i)&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach((e=>{e.visible=e===i;}));}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((i=>l$1((()=>i.visible),(e=>this._applyVisibility((()=>{e!==this.visible&&(i.visible=this.visible);}),(()=>this._applyExclusiveVisibility(e?i:null)))),U))).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(e?.visible?e:null)));}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?i():"exclusive"===this.layer?.visibilityMode&&e());}};e([y({cast:t})],p.prototype,"layerViews",null),e([y({readOnly:!0})],p.prototype,"updatingProgress",null),e([y()],p.prototype,"view",void 0),p=e([a$1("esri.views.layers.GroupLayerView")],p);const n=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let a=class extends(f$1(n)){constructor(){super(...arguments),this.container=new r;}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())));}detach(){this.container.removeAllChildren();}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};a=e([a$1("esri.views.2d.layers.GroupLayerView2D")],a);const i=a;

export { i as default };
