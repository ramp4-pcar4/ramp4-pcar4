import { cY as g, cZ as Z, s, c_ as i, c$ as H, d0 as K, aP as i$1, d1 as d$1, af as b$1, H as s$1, a7 as G, d2 as ot, d3 as rt, U as U$1, cE as p$1, d4 as et, d5 as nt, d6 as tt } from './main-h0RsJOaN.js';
import { m } from './FeatureStore-Dr5DNk-_.js';
import { x, j as j$1 } from './timeSupport-C_4Ug4Ou.js';
import { $ } from './QueryEngine-84cOSFS8.js';
import { I, N, E } from './geojson-DZlKdNnt.js';
import { a, i as i$2, o } from './clientSideDefaults-DDjSdUf5.js';
import { j, p, d, f, y } from './sourceUtils-CrKxQeVk.js';
import './preload-helper-dJJaZANz.js';
import './BoundsStore-ByyGscn3.js';
import './PooledRBush-BUJQPvAf.js';
import './json-Beimr7gP.js';
import './WhereClause-D9fMYbj6.js';
import './TimeOnly-DDH3PCq9.js';
import './QueryEngineCapabilities-CCudnOfH.js';
import './utils-CsPcWUxg.js';
import './utils-DTubsAsH.js';
import './utils-DMTMOHeI.js';
import './RenderState-Bf2oUuZv.js';
import './date-BI_YP58O.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const D={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class Q{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)};}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null;}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const i$3=[],[r]=await Promise.all([e.url?this._fetch(t?.signal):null,this._checkProjection(e.spatialReference)]),n=I(r,{geometryType:e.geometryType}),o$1=e.fields||n.fields||[],l=null!=e.hasZ?e.hasZ:n.hasZ,u=n.geometryType;let d=e.objectIdField||n.objectIdFieldName||"__OBJECTID";const p=e.spatialReference||g;let c=e.timeInfo;o$1===n.fields&&n.unknownFields.length>0&&i$3.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n.unknownFields}});const y=new Z(o$1);let h=y.get(d);h?("esriFieldTypeString"!==h.type&&(h.type="esriFieldTypeOID"),h.editable=!1,h.nullable=!1,d=h.name):(h={alias:d,name:d,type:"string"===n.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o$1.unshift(h));const _={};for(const a of o$1){if(null==a.name&&(a.name=a.alias),null==a.alias&&(a.alias=a.name),!a.name)throw new s("geojson-layer:invalid-field-name","field name is missing",{field:a});if(!i.jsonValues.includes(a.type))throw new s("geojson-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});if(a.name!==h.name){const e=H(a);void 0!==e&&(_[a.name]=e);}null==a.length&&(a.length=K(a));}if(c){if(c.startTimeField){const e=y.get(c.startTimeField);e?(c.startTimeField=e.name,e.type="esriFieldTypeDate"):c.startTimeField=null;}if(c.endTimeField){const e=y.get(c.endTimeField);e?(c.endTimeField=e.name,e.type="esriFieldTypeDate"):c.endTimeField=null;}if(c.trackIdField){const e=y.get(c.trackIdField);e?c.trackIdField=e.name:(c.trackIdField=null,i$3.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:c}}));}c.startTimeField||c.endTimeField||(i$3.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:c}}),c=null);}const F=u?o(u):void 0,b=y.dateFields.length?{timeZoneIANA:i$1}:null,T={warnings:i$3,featureErrors:[],layerDefinition:{...D,drawingInfo:F??void 0,templates:a(_),extent:void 0,geometryType:u,objectIdField:d,fields:o$1,hasZ:!!l,timeInfo:c,dateFieldsTimeReference:b}};this._queryEngine=new $({fieldsIndex:Z.fromLayerJSON({fields:o$1,timeInfo:c,dateFieldsTimeReference:b}),geometryType:u,hasM:!1,hasZ:l,objectIdField:d,spatialReference:p,timeInfo:c,featureStore:new m({geometryType:u,hasM:!1,hasZ:l}),cacheSpatialQueries:!0});const w=this._queryEngine.fieldsIndex.requiredFields.indexOf(h);w>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(w,1),this._createDefaultAttributes=i$2(_,d);const q=await this._createFeatures(r);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,q);const x=this._normalizeFeatures(q,T.featureErrors);this._queryEngine.featureStore.addMany(x);const{fullExtent:Q,timeExtent:v}=await this._queryEngine.fetchRecomputedExtents();if(T.layerDefinition.extent=Q,v){const{start:e,end:t}=v;T.layerDefinition.timeInfo.timeExtent=[e,t];}return T}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([j(t,s),x(e.adds,t),x(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=d$1(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t);}),(e=>{this._queryEngine.featureStore.clear(),b$1(e)||s$1.getLogger("esri.layers.GeoJSONLayer").error(new s("geojson-layer:refresh","An error occurred during refresh",{error:e}));})),await this._waitSnapshotComplete();const{fullExtent:n,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();return {extent:n,timeExtent:a}}async _createFeatures(e){if(null==e)return [];const{geometryType:t,hasZ:s,objectIdField:i}=this._queryEngine,r=N(e,{geometryType:t,hasZ:s,objectIdField:i});if(!G(this._queryEngine.spatialReference,g))for(const n of r)null!=n.geometry&&(n.geometry=ot(j$1(rt(n.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),g,this._queryEngine.spatialReference)));return r}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:s,customParameters:i}=this._loadOptions,r=(await U$1(s,{responseType:"json",query:{...i},signal:t})).data;return E(r),r}_normalizeFeatures(e,t){const{objectIdField:s,fieldsIndex:i}=this._queryEngine,r=[];for(const n of e){const e=this._createDefaultAttributes(),a=p(i,e,n.attributes,!0);a?t?.push(a):(this._assignObjectId(e,n.attributes,!0),n.attributes=e,n.objectId=e[s],r.push(n));}return r}async _applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(r,t),s?.length&&this._applyUpdateEdits(r,s),i?.length){for(const e of i)r.deleteResults.push(d(e));this._queryEngine.featureStore.removeManyById(i);}const{fullExtent:n,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();return {extent:n,timeExtent:a,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:r,hasZ:a,objectIdField:o,spatialReference:l,featureStore:u,fieldsIndex:p$2}=this._queryEngine,c=[];for(const d$1 of t){if(d$1.geometry&&i!==p$1(d$1.geometry)){s.push(f("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=p(p$2,t,d$1.attributes);if(r)s.push(r);else {if(this._assignObjectId(t,d$1.attributes),d$1.attributes=t,null!=d$1.uid){const t=d$1.attributes[o];e.uidToObjectId[d$1.uid]=t;}if(null!=d$1.geometry){const e=d$1.geometry.spatialReference??l;d$1.geometry=j$1(y(d$1.geometry,e),e,l);}c.push(d$1),s.push(d(d$1.attributes[o]));}}u.addMany(et([],c,i,a,r,o));}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:r,objectIdField:a,spatialReference:o,featureStore:l,fieldsIndex:u}=this._queryEngine;for(const d$1 of t){const{attributes:t,geometry:m}=d$1,y$1=t?.[a];if(null==y$1){e.push(f(`Identifier field ${a} missing`));continue}if(!l.has(y$1)){e.push(f(`Feature with object id ${y$1} missing`));continue}const f$1=nt(l.getFeature(y$1),s,r,i);if(null!=m){if(s!==p$1(m)){e.push(f("Incorrect geometry type."));continue}const t=m.spatialReference??o;f$1.geometry=j$1(y(m,t),t,o);}if(t){const s=p(u,f$1.attributes,t);if(s){e.push(s);continue}}l.add(tt(f$1,s,r,i,a)),e.push(d(y$1));}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===s.type)return ()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator();}async _checkProjection(e){try{await x(g,e);}catch{throw new s("geojson-layer","Projection not supported")}}}

export { Q as default };
