import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { d_ as n, e2 as t, e0 as u$1, e1 as j, gk as n$1, gl as d, e3 as m, bw as l, gm as t$1, b1 as k, b3 as d$1, gn as e$1, go as f, S, C as a$1, gp as t$2, gq as A, gr as t$3, aX as e$2, aY as y, ey as r$1, e4 as o, gs as A$1, a_ as v, fn as C$1, aZ as c, ed as b, J as s$1 } from './main-ba570a3b.js';
import { a } from './lazyLayerLoader-116d87f7.js';
import { r } from './saveUtils-9687676f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const e=Symbol("WebScene");

let V=class extends(n(t(u$1(j(n$1(d(m(b)))))))){constructor(e){super(e),this.allLayers=new l({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=t$1(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=k((async(e,i,t)=>{const{save:r,saveAs:s}=await __vitePreload(() => import('./groupLayerUtils-81fa283d.js'),true?["./groupLayerUtils-81fa283d.js","./utils-0501c3ec.js","./main-ba570a3b.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./originUtils-f2cf510b.js","./multiOriginJSONSupportUtils-3d5af7a5.js","./jsonContext-7d73db75.js","./saveAPIKeyUtils-d3b865dc.js","./saveUtils-9687676f.js","./resourceUtils-a7476107.js","./resourceUtils-922a97a6.js"]:void 0,import.meta.url);switch(e){case A.SAVE:return r(this,i);case A.SAVE_AS:return s(this,t,i)}}));}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([d$1((()=>{let e$1=this.parent;for(;e$1&&"parent"in e$1&&e$1.parent;)e$1=e$1.parent;return e$1&&e in e$1}),(e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(v((()=>this.tables),"before-add",(e=>{e.preventDefault(),s$1.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.");})),i));}),A$1),d$1((()=>this.visible),this._onVisibilityChange.bind(this),C$1)]);}destroy(){this.allLayers.destroy(),this.allTables.destroy();}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===e$1.USER}_writeLayers(e,i,t,r){const s=[];if(!e)return s;e.forEach((e=>{const i=f(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);i?.layerType&&s.push(i);})),i.layers=s;}set portalItem(e){this._set("portalItem",e);}readPortalItem(e,i,t){const{itemId:r,layerType:s}=i;if("GroupLayer"===s&&r)return new S({id:r,portal:t?.portal})}writePortalItem(e,i){e?.id&&(i.itemId=e.id);}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible);}async beforeSave(){return r(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:a},e).catch((e=>{if(a$1(e),this.sourceIsPortalItem)throw e}));return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return t$2(this,(e=>{e(this.layers,this.tables);}))}async save(e){return this._debouncedSaveOperations(A.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(A.SAVE_AS,i,e)}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles(d$1((()=>e.visible),(i=>this._onChildVisibilityChange(e,i)),C$1),e.uid);}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(e){this.layers.forEach((i=>{i!==e&&(i.visible=!1);}));}_enforceVisibility(e,i){if(!t$3(this).initialized)return;const t=this.layers;let r=t.find((e=>e.visible));switch(e){case"exclusive":t.length&&!r&&(r=t.at(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach((e=>{e.visible=i;}));}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach((i=>{i.visible=e;}));}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};e$2([y({readOnly:!0,dependsOn:[]})],V.prototype,"allLayers",void 0),e$2([y({readOnly:!0})],V.prototype,"allTables",void 0),e$2([y({json:{read:!0,write:!0}})],V.prototype,"blendMode",void 0),e$2([y()],V.prototype,"fullExtent",void 0),e$2([y({readOnly:!0})],V.prototype,"sourceIsPortalItem",null),e$2([y({json:{read:!1,write:{ignoreOrigin:!0}}})],V.prototype,"layers",void 0),e$2([r$1("layers")],V.prototype,"_writeLayers",null),e$2([y({type:["GroupLayer"]})],V.prototype,"operationalLayerType",void 0),e$2([y({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return {enabled:"Group Layer"===e?.type&&t?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],V.prototype,"portalItem",null),e$2([o("web-map","portalItem",["itemId"])],V.prototype,"readPortalItem",null),e$2([r$1("web-map","portalItem",{itemId:{type:String}})],V.prototype,"writePortalItem",null),e$2([y()],V.prototype,"spatialReference",void 0),e$2([y({json:{read:!1},readOnly:!0,value:"group"})],V.prototype,"type",void 0),e$2([y({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{"inherited"!==e&&(i[t]=e);}}}}})],V.prototype,"visibilityMode",null),V=e$2([c("esri.layers.GroupLayer")],V);const C=V;

export { C as default };
