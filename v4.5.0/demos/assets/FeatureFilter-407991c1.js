import { p as s$1, c as s$2, aa as u, fM as x, aj as c$1, t as t$1 } from './main-5658cd6e.js';
import { v, n } from './timeSupport-6b86616d.js';
import { J } from './utils-0bd9643b.js';
import { p as p$1 } from './FeatureStore2D-8cf00d4c.js';
import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import './projectionSupport-90bb00b7.js';
import './json-ce6e5728.js';
import './CircularArray-017fe5d1.js';
import './ComputedAttributeStorage-8c98a3c7.js';
import './arcadeTimeUtils-53abd942.js';
import './executionError-ed2c63c0.js';
import './centroid-c9063998.js';
import './definitions-281daf3f.js';
import './visualVariablesUtils-93e46889.js';
import './color-6132b2c2.js';
import './enums-9c1aeae9.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';
import './visualVariablesUtils-1950eea1.js';

const t=s$1.getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(r,s){const n=await __vitePreload(() => import('./WhereClause-2f1c02a5.js').then(n => n.W),true?["./WhereClause-2f1c02a5.js","./main-5658cd6e.js","./preload-helper-a4975f27.js","./main-2af48127.css","./executionError-ed2c63c0.js"]:void 0,import.meta.url);try{const o=n.WhereClause.create(r,s);if(!o.isStandardized){const r=new s$2("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(r);}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(o){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const m=1,_=2;class p{constructor(t){this._geometryBounds=u(),this._idToVisibility=new Map,this._serviceInfo=t;}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0);}));}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,m);}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(this._idToVisibility.get(r)&m),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?m|_:0);})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return x.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await J(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)]);}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await s(t.where,this._serviceInfo.fieldsIndex),this.where=t.where;}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds;}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await v(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c$1(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i;}_setTimeFilter(i){if(this.timeExtent=this._timeOperator=null,i&&i.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=i.timeExtent,this._timeOperator=n(this._serviceInfo.timeInfo,i.timeExtent,p$1);else {const s=new s$2("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",i.timeExtent);s$1.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(s);}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return !this.where||this._clause(t)}_filterById(t){return (!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return !0;const e=t.readHydratedGeometry();return !!e&&this._spatialQueryOperator(e)}_filterByTime(t){return !!t$1(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{e&m||(this._idToVisibility.set(i,m),t.push(i));})),t}}

export { p as default };
