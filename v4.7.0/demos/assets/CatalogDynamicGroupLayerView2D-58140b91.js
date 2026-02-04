import { a5 as V, b1 as k, b2 as p$1, b3 as d$1, K as s$1, b4 as n, aX as e, aZ as c$1 } from './main-b03b5063.js';
import { m as m$1, u } from './LayerView-6c0e0f20.js';
import './preload-helper-a4975f27.js';
import './Container-bf3f4a13.js';
import './highlightReasons-6c0a22e8.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-a56ecf7a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const c=Symbol();let p=class extends(m$1(u)){constructor(){super(...arguments),this.layerViews=new V,this._debouncedUpdate=k((async()=>{const{layer:e,parent:{footprintLayerView:r}}=this;let t=[];if(r){const i=this._createQuery(),{features:s}=await r.queryFeatures(i);this.suspended||(t=s.map((r=>e.acquireLayer(r))));}this.removeHandles(c),this.addHandles(t,c);}));}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange((()=>this.layerViews),(()=>this._updateStageChildren()),{initial:!0}),p$1((()=>!1===this.parent.footprintLayerView?.dataUpdating),(()=>this._updateLayers())),d$1((()=>[this.layer.maximumVisibleSublayers,this.suspended,this.parent.footprintLayerView?.filter]),(()=>this._updateLayers()))]);}detach(){this.container.removeAllChildren(),this.removeHandles(c);}update(e){}moveStart(){}viewChange(){}moveEnd(){}isUpdating(){return this.layerViews.some((e=>e.updating))}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}_updateLayers(){this.suspended?this.removeHandles(c):this._updatingHandles.addPromise(this._debouncedUpdate().catch((e=>{s$1.getLogger(this).error(e);})));}_createQuery(){const{parent:{footprintLayerView:e},layer:{maximumVisibleSublayers:r,parent:{itemTypeField:t,itemSourceField:i,objectIdField:s,orderBy:a}}}=this,d=`${t} <> 'Scene Service'`,n$1=e.createQuery();n$1.returnGeometry=!1,n$1.num=r,n$1.outFields=[s,i],n$1.where=n(n$1.where,d);const l=a?.find((e=>e.field&&!e.valueExpression));return l?.field&&(n$1.orderByFields=[`${l.field} ${"descending"===l.order?"DESC":"ASC"}`]),n$1}};p=e([c$1("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],p);const h=p;

export { h as default };
