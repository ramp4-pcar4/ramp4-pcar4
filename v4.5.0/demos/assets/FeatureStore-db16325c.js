import { cX as s, t, cG as t$1, bP as a, fw as n, r as r$1, fx as d, p as s$1, c as s$2, fy as It, aa as u } from './main-5658cd6e.js';
import { o } from './BoundsStore-1cad0f07.js';
import { e } from './centroid-c9063998.js';
import { E } from './utils-0bd9643b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const i={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new s(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(r,i)=>(t(r.centroid)&&(r.centroid=e(new t$1,r.geometry,i.hasZ,i.hasM)),r.centroid)};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const f=a();class g{constructor(e){this.geometryInfo=e,this._boundsStore=new o,this._featuresById=new Map,this._markedIds=new Set,this.events=new n,this.featureAdapter=i;}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{r$1(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length);})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(t(this.fullBounds))return null;const[t$1,s,r,i]=this.fullBounds;return {xmin:t$1,ymin:s,xmax:r,ymax:i,spatialReference:E(e)}}add(e){this._add(e),this._emitChanged();}addMany(e){for(const t of e)this._add(t);this._emitChanged();}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged();}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e);}this._emitChanged();}forEachBounds(e,t){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t(d(f,e));}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)));}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e));}));}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear();}sweep(){let e=!1;this._featuresById.forEach(((t,s)=>{this._markedIds.has(s)||(e=!0,this._remove(t));})),this._markedIds.clear(),e&&this._emitChanged();}_emitChanged(){this.events.emit("changed",void 0);}_add(t$1){if(!t$1)return;const i=t$1.objectId;if(null==i)return void s$1.getLogger("esri.layers.graphics.data.FeatureStore").error(new s$2("featurestore:invalid-feature","feature id is missing",{feature:t$1}));const a=this._featuresById.get(i);let h;if(this._markedIds.add(i),a?(t$1.displayId=a.displayId,h=this._boundsStore.get(i),this._boundsStore.delete(i)):r$1(this.onFeatureAdd)&&this.onFeatureAdd(t$1),t(t$1.geometry)||!t$1.geometry.coords||!t$1.geometry.coords.length)return this._boundsStore.set(i,null),void this._featuresById.set(i,t$1);h=It(r$1(h)?h:u(),t$1.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),r$1(h)&&this._boundsStore.set(i,h),this._featuresById.set(i,t$1);}_remove(e){r$1(this.onFeatureRemove)&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}

export { g };
