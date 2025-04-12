import { s, e, y, m, x, r as r$1, h as has, t, a as x$1, U as U$1, i, b as e$1, w, T as T$1, g, V, c as s$1, d as o$1, f as f$1, j as g$1, v, k as a, l as ot, n as r } from './main-5658cd6e.js';
import { E as E$1 } from './assetEditingSupport-41b170a4.js';
import { o } from './clientSideDefaults-1d7b4fea.js';
import './preload-helper-a4975f27.js';
import './QueryEngineCapabilities-014f3e07.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const E=new s({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function S(e){if("string"==typeof e){const t=ot(e);return t||{data:e}}return new Promise(((t,s)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=()=>t(ot(a.result)),a.onerror=e=>s(e);}))}const O=new Set(["Feature Layer","Table"]),j=new s({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let T=class extends m{constructor(){super(...arguments),this.type="feature-layer",this.refresh=x((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return {dataChanged:!0,updates:{}};try{await this._fetchService(null);}catch{return {dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return {dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}));}load(e){const t=r$1(e)?e.signal:null,s=this.layer.sourceJSON;return this.addResolvingPromise(this._fetchService(s,t)),Promise.resolve(this)}get queryTask(){const{capabilities:e,parsedUrl:t$1,dynamicDataSource:s,infoFor3D:a,gdbVersion:r,spatialReference:o,fieldsIndex:i}=this.layer,n=has("featurelayer-pbf")&&e?.query.supportsFormatPBF&&t(a),u=e?.operations?.supportsQueryAttachments??!1;return new x$1({url:t$1.path,pbfSupported:n,fieldsIndex:i,infoFor3D:a,dynamicDataSource:s,gdbVersion:r,sourceSpatialReference:o,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/addAttachment",o=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(t,o.query);try{const e=await U$1(r,{body:i});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(n){throw this._createAttachmentErrorResult(s,n)}}async updateAttachment(e,t,s){await this.load();const r=e.attributes[this.layer.objectIdField],o=this.layer.parsedUrl.path+"/"+r+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:t}}),n=this._getFormDataForAttachment(s,i.query);try{const e=await U$1(o,{body:n});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(r,u)}}async applyEdits(e,t){await this.load();const r$2=this.layer.infoFor3D,o=r$1(r$2),i$1=o||(t?.globalIdUsed??!1),n=e.addFeatures?.map((e=>this._serializeFeature(e,r$2))).filter(r$1)??[],l=e.updateFeatures?.map((e=>this._serializeFeature(e,r$2))).filter(r$1)??[],c=this._getFeatureIds(e.deleteFeatures,i$1);i(n,l,this.layer.spatialReference);const p=[],h=[],y=[...e.deleteAttachments??[]];for(const s of e.addAttachments??[])p.push(await this._serializeAttachment(s));for(const s of e.updateAttachments??[])h.push(await this._serializeAttachment(s));const m=p.length||h.length||y.length?{adds:p,updates:h,deletes:y}:null;let f,g=null;if(o){g=new Map;const t=[];for(const a of e.addAssets??[])t.push(this._serializeAssetMapEditAndUploadAssets(a,g));const s=await Promise.all(t);f=s.length?{adds:s,updates:[],deletes:[]}:void 0;}const R={gdbVersion:t?.gdbVersion||this.layer.gdbVersion,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:i$1,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,sessionId:t?.sessionId};t?.returnServiceEditsOption?(R.edits=JSON.stringify([{id:this.layer.layerId,adds:n,updates:l,deletes:c,attachments:m,assetMaps:e$1(f)}]),R.returnServiceEditsOption=E.toJSON(t?.returnServiceEditsOption),R.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(R.adds=n.length?JSON.stringify(n):null,R.updates=l.length?JSON.stringify(l):null,R.deletes=c.length?i$1?JSON.stringify(c):c.join(","):null,R.attachments=m&&JSON.stringify(m),R.assetMaps=r$1(f)?JSON.stringify(f):void 0);const F=this._getLayerRequestOptions({method:"post",query:R}),b=t?.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,q=await U$1(b+"/applyEdits",F);if(!this.layer.capabilities.operations?.supportsEditing&&this.layer.effectiveCapabilities?.operations?.supportsEditing){const e=r?.findCredential(this.layer.url);await(e?.refreshToken());}if(o&&null!=q.data&&null!=q.data.assetMaps){const e=q.data,t=this.layer.objectIdField,s=[];for(const a of e.addResults)a.success&&s.push(a.objectId);for(const a of e.updateResults)a.success&&s.push(a.objectId);const r=this._createRequestQueryOptions(),o=await U$1(b+"/query",{...r,query:{f:"json",formatOf3DObjects:"3D_glb",where:`OBJECTID IN (${s.join(",")})`,outFields:`${t}`}});if(o&&o.data&&o.data.assetMaps&&r$1(g)){const e=o.data.assetMaps;for(const t of e){const e=g.get(t.parentGlobalId).geometry;r$1(e)&&"mesh"===e.type&&e.updateExternalSource({source:[{name:t.assetName,source:t.assetName}],extent:e.extent});}}}return this._createEditsResult(q)}async deleteAttachments(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return (await U$1(r,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(o){throw this._createAttachmentErrorResult(s,o)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:s,url:o}=this.layer,{data:i}=await U$1(`${o}/${s}`,t),{id:n,extent:u,fullExtent:l,timeExtent:d}=i,c=u||l;return {id:n,fullExtent:c&&w.fromJSON(c),timeExtent:d&&T$1.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(e,t={}){await this.load();const s=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!g(this.layer.url))return "unavailable";const e=V(this.layer.url,"status"),t=await U$1(e,{query:{f:"json"}});return j.fromJSON(t.data.status)}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:s}=await U$1(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:has("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=s;}this.sourceJSON=this._patchServiceJSON(e);const s=e.type;if(!O.has(s))throw new s$1("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}_patchServiceJSON(e){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=o(e.geometryType).renderer;o$1("drawingInfo.renderer",t,e);}return "esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e,t$1){const{geometry:s,attributes:a}=e;if(r$1(t$1)&&r$1(e.geometry)&&"mesh"===e.geometry.type){const s={...a},r=e.geometry,o=r.origin,i=r.transform;if(s[t$1.transformFieldRoles.originX]=o.x,s[t$1.transformFieldRoles.originY]=o.y,s[t$1.transformFieldRoles.originZ]=o.z,r$1(i)){const e=i.translation,a=i.scale,r=i.rotation;s[t$1.transformFieldRoles.translationX]=e[0],s[t$1.transformFieldRoles.translationY]=-e[2],s[t$1.transformFieldRoles.translationZ]=e[1],s[t$1.transformFieldRoles.scaleX]=a[0],s[t$1.transformFieldRoles.scaleY]=a[1],s[t$1.transformFieldRoles.scaleZ]=a[2],s[t$1.transformFieldRoles.rotationX]=r[0],s[t$1.transformFieldRoles.rotationY]=r[2],s[t$1.transformFieldRoles.rotationZ]=r[1],s[t$1.transformFieldRoles.rotationDeg]=r[3];}return {geometry:null,attributes:s}}return t(s)?{attributes:a}:"mesh"===s.type||"extent"===s.type?null:{geometry:s.toJSON(),attributes:a}}async _serializeAttachment(e){const{feature:t,attachment:s}=e,{globalId:a,name:r,contentType:o,data:i,uploadId:n}=s,u={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),n)u.uploadId=n;else if(i){const e=await S(i);e&&(u.contentType=e.mediaType,u.data=e.data),i instanceof File&&(u.name=i.name);}return r&&(u.name=r),o&&(u.contentType=o),u}async _serializeAssetMapEditAndUploadAssets(e,t$1){const s=this.layer.url;let r=null;try{const t=new Blob([e.data],{type:e.mimeType}),i=new FormData;i.append("f","json"),i.append("file",t,`${e.assetName}`);const n={body:i,method:"post",responseType:"json"},{data:u}=await U$1(`${s}/uploads/upload`,n);if(!u.success)throw new s$1("feature-layer-source:upload-failure","Expected upload to be successfull.");r={assetType:e.assetType,assetUploadId:u.item.itemID};}catch(p){r=null;}if(t(r)){const t=await S(new Blob([e.data]));if(!t.isBase64)throw new s$1("feature-layer-source:uploadAssets-failure","Expected gltf data in base64 format after conversion.");r={assetType:e.assetType,assetData:t.data};}if(t(r))throw new s$1("feature-layer-source:uploadAssets-failure","Unable to prepare uploadAsset request options.");const i={method:"post",query:{f:"json",assets:JSON.stringify([r])},responseType:"json"},n=await U$1(V(this.layer.parsedUrl.path,"uploadAssets"),i);if(1!==n.data.uploadResults.length||!n.data.uploadResults[0].success)throw new s$1("feature-layer-source:uploadAssets-failure","Bad response.");const u=n.data.uploadResults[0].assetHash,d=[];e.flags&E$1.PROJECT_VERTICES&&d.push("PROJECT_VERTICES");const c={globalId:e.assetMapGlobalId,parentGlobalId:e.featureGlobalId,assetName:e.assetName,assetHash:u,flags:d};return t$1.set(e.featureGlobalId,e.feature),c}_getFeatureIds(e,t){const s=e?.[0];return s?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in s?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){const t=e.data,{layerId:s}=this.layer,a=[];let r=null;if(Array.isArray(t))for(const n of t)a.push({id:n.id,editedFeatures:n.editedFeatures}),n.id===s&&(r={addResults:n.addResults??[],updateResults:n.updateResults??[],deleteResults:n.deleteResults??[],attachments:n.attachments,editMoment:n.editMoment});else r=t;const o=r?.attachments,i={addFeatureResults:r?.addResults?.map(this._createFeatureEditResult,this)??[],updateFeatureResults:r?.updateResults?.map(this._createFeatureEditResult,this)??[],deleteFeatureResults:r?.deleteResults?.map(this._createFeatureEditResult,this)??[],addAttachmentResults:o&&o.addResults?o.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:o&&o.updateResults?o.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:o&&o.deleteResults?o.deleteResults.map(this._createFeatureEditResult,this):[]};if(r?.editMoment&&(i.editMoment=r.editMoment),a.length>0){i.editedFeatureResults=[];for(const e of a){const{editedFeatures:t}=e,s=t?.spatialReference?new f$1(t.spatialReference):null;i.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:t?.adds?.map((e=>this._createEditedFeature(e,s)))||[],updates:t?.updates?.map((e=>({original:this._createEditedFeature(e[0],s),current:this._createEditedFeature(e[1],s)})))||[],deletes:t?.deletes?.map((e=>this._createEditedFeature(e,s)))||[],spatialReference:s}});}}return i}_createEditedFeature(e,s){return new g$1({attributes:e.attributes,geometry:v({...e.geometry,spatialReference:s})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:t?new s$1("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const s=t.details.messages&&t.details.messages[0]||t.message,a=t.details.httpStatus||t.details.messageCode;return {objectId:e,globalId:null,error:new s$1("feature-layer-source:attachment-failure",s,{code:a})}}_getFormDataForAttachment(e,t){const s=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(s)for(const a in t){const e=t[a];null!=e&&(s.set?s.set(a,e):s.append(a,e));}return s}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:s,dynamicDataSource:a}=this.layer;return {...e,query:{gdbVersion:s,layer:a?JSON.stringify({source:a}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};e([y()],T.prototype,"type",void 0),e([y({constructOnly:!0})],T.prototype,"layer",void 0),e([y({readOnly:!0})],T.prototype,"queryTask",null),T=e([a("esri.layers.graphics.sources.FeatureLayerSource")],T);const A=T;

export { A as default };
