import { dF as n, dJ as t, dH as c, dI as _$1, dW as l, dX as d, dK as O$1, bW as l$1, dY as t$1, bp as l$2, dZ as y, r as r$1, d_ as l$3, d$ as e, e as e$1, y as y$1, e0 as r, e1 as U, k as a$1, a4 as b$1 } from './main-5658cd6e.js';
import { a } from './lazyLayerLoader-944c55cd.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let _=class extends(n(t(c(_$1(l(d(O$1(b$1)))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new l$1({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=t$1(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group";}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles(l$2((()=>this.visible),this._onVisibilityChange.bind(this),U));}_writeLayers(i,e,t,r){const o=[];if(!i)return o;i.forEach((i=>{const e=y(i,r.webmap?r.webmap.getLayerJSONFromResourceInfo(i):null,r);r$1(e)&&e.layerType&&o.push(e);})),e.layers=o;}set portalItem(i){this._set("portalItem",i);}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible);}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:a},i)),Promise.resolve(this)}async loadAll(){return l$3(this,(i=>{i(this.layers,this.tables);}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=l$2((()=>i.visible),(e=>this._onChildVisibilityChange(i,e)),U);}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1);}));}_enforceVisibility(i,e$1){if(!e(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e$1;}));}}_onVisibilityChange(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i;}));}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};e$1([y$1({readOnly:!0,dependsOn:[]})],_.prototype,"allLayers",void 0),e$1([y$1({readOnly:!0})],_.prototype,"allTables",void 0),e$1([y$1()],_.prototype,"fullExtent",void 0),e$1([y$1({json:{read:!0,write:!0}})],_.prototype,"blendMode",void 0),e$1([y$1({json:{read:!1,write:{ignoreOrigin:!0}}})],_.prototype,"layers",void 0),e$1([r("layers")],_.prototype,"_writeLayers",null),e$1([y$1({type:["GroupLayer"]})],_.prototype,"operationalLayerType",void 0),e$1([y$1({json:{origins:{"web-document":{read:!1,write:!1}}}})],_.prototype,"portalItem",null),e$1([y$1()],_.prototype,"spatialReference",void 0),e$1([y$1({json:{read:!1},readOnly:!0,value:"group"})],_.prototype,"type",void 0),e$1([y$1({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],_.prototype,"visibilityMode",null),_=e$1([a$1("esri.layers.GroupLayer")],_);const g=_;

export { g as default };
