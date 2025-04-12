import { aa as V, bH as e, bI as y, bJ as c } from './main-8822140d.js';
import { m as m$1, u } from './LayerView-6e37772d.js';
import './preload-helper-a4975f27.js';
import './Container-827a1ce3.js';
import './highlightReasons-37946872.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-bb85fd56.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s=class extends(m$1(u)){constructor(){super(...arguments),this.layerViews=new V;}get dynamicGroupLayerView(){return this.layerViews.find((e=>e.layer===this.layer?.dynamicGroupLayer))}get footprintLayerView(){return this.layerViews.find((e=>e.layer===this.layer?.footprintLayer))}update(e){}moveStart(){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange((()=>this.layerViews),(()=>this._updateStageChildren()),{initial:!0})]);}detach(){this.container.removeAllChildren();}isUpdating(){return this.layerViews.some((e=>e.updating))}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};e([y()],s.prototype,"dynamicGroupLayerView",null),e([y()],s.prototype,"footprintLayerView",null),e([y()],s.prototype,"layerViews",void 0),s=e([c("esri.views.2d.layers.CatalogLayerView2D")],s);const n=s;

export { n as default };
