const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./uploadAssets-CN0FboSF.js","./main-CzbArNue.js","./preload-helper-ExcqyqRp.js","./main-wZMPJMua.css","./External-B8rgyr5I.js","./meshSpatialReferenceScaleUtils-Da_pmWzM.js","./MeshTransform-BLMEpOmz.js","./mat4f64-CSKppSlJ.js","./quat-DOwnX5ja.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./meshFeatureAttributes-ONKV9ZFH.js","./convertMeshVertexSpace-CVPWNwfe.js","./MeshVertexAttributes-GcBoQb_L.js","./vertexSpaceConversion-CHUFrMuI.js","./spatialReferenceEllipsoidUtils-COR8TJia.js","./computeTranslationToOriginAndRotation-CqzkfP_a.js","./projectPointToVector-CNVT78_D.js","./meshVertexSpaceUtils-BIs9wX6x.js","./MeshLocalVertexSpace-Ccm9OD-k.js","./vec3-BeV4q9m0.js","./BufferView-xDE7i1_l.js","./vec4-CEpE2bgG.js"])))=>i.map(i=>d[i]);
import{_ as M}from"./preload-helper-ExcqyqRp.js";import{a6 as j,fg as $,bG as Q,fh as P,fi as N,fj as V,G as x,s as S,a2 as G,f4 as B,fk as L,bw as E,bx as O,fl as H,fb as z,cf as Y,Q as J,fm as Z,fn as A,U as m,F as v,fo as W,fp as X,fq as K,fr as ee,fs as te,bq as se,ft as ae,fu as re,aw as T,cF as D,fv as ne,fw as ie,eY as oe,B as ue,$ as le,aZ as de,fx as ce,fy as pe,fz as he,by as ye}from"./main-CzbArNue.js";import{b as fe}from"./MeshLocalVertexSpace-Ccm9OD-k.js";import{a as me}from"./meshVertexSpaceUtils-BIs9wX6x.js";import{A as ge}from"./External-B8rgyr5I.js";import{N as we}from"./MeshTransform-BLMEpOmz.js";import{isFeatureIdentifierArrayWithGlobalId as be,isFeatureIdentifierArrayWithObjectId as qe}from"./editingSupport-BS-in8Jo.js";import{u as Ie}from"./clientSideDefaults-3aZS_rIM.js";import"./mat4f64-CSKppSlJ.js";import"./quat-DOwnX5ja.js";import"./mat3f64-q3fE-ZOt.js";import"./quatf64-aQ5IuZRd.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-Y9lFlGVh.js";async function C(t,e,s){const{geometry:r}=e,a={...e.attributes};if(s!=null&&r?.type==="mesh"){const{transformFieldRoles:n}=s,{origin:i,spatialReference:o,vertexSpace:u}=r,d=r.transform??new we,l=u.type==="local",p=t.spatialReference,q=p.isGeographic,I=j(p,o),h=$(o,p)&&Q(o,p);if(!(l&&q&&h||!l&&!q&&I))return null;const c=P(i,o,p);if(c==null)return null;if(a[n.originX]=c.x,a[n.originY]=c.y,a[n.originZ]=c.z??0,d!=null){const{translation:R,scale:y,rotation:g}=d,f=l?1:N(o)/N(p);a[n.translationX]=R[0]*f,a[n.translationY]=R[2]*f,a[n.translationZ]=-R[1]*f,a[n.scaleX]=y[0],a[n.scaleY]=y[2],a[n.scaleZ]=y[1],a[n.rotationX]=g[0],a[n.rotationY]=g[2],a[n.rotationZ]=-g[1],a[n.rotationDeg]=g[3]}return{attributes:a}}return r==null?{attributes:a}:r.type==="mesh"||r.type==="extent"?null:{geometry:r.toJSON(),attributes:a}}async function Re(t,e){const s=await Promise.all((e.addAttachments??[]).map(n=>k(t,n))),r=await Promise.all((e.updateAttachments??[]).map(n=>k(t,n))),a=e.deleteAttachments??[];return s.length||r.length||a.length?{adds:s,updates:r,deletes:[...a]}:null}async function k(t,e){const{feature:s,attachment:r}=e,{globalId:a,name:n,contentType:i,data:o,uploadId:u}=r,d={globalId:a};if(s&&("attributes"in s?d.parentGlobalId=s.attributes?.[t.globalIdField]:s.globalId&&(d.parentGlobalId=s.globalId)),u)d.uploadId=u;else if(o){const l=await V(o);l&&(d.contentType=l.mediaType,d.data=l.data),o instanceof File&&(d.name=o.name)}return n&&(d.name=n),i&&(d.contentType=i),d}function Se(t,e,s){if(!e||e.length===0)return[];if(s&&be(e))return e.map(a=>a.globalId);if(qe(e))return e.map(a=>a.objectId);const r=s?t.globalIdField:t.objectIdField;return r?e.map(a=>a.getAttribute(r)):[]}function _e(t){const e=t?.assetMaps;if(e){for(const a of e.addResults)a.success||x.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${a.globalId}.`);for(const a of e.updateResults)a.success||x.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${a.globalId}.`)}const s=t?.attachments,r={addFeatureResults:t?.addResults?.map(b)??[],updateFeatureResults:t?.updateResults?.map(b)??[],deleteFeatureResults:t?.deleteResults?.map(b)??[],addAttachmentResults:s?.addResults?s.addResults.map(b):[],updateAttachmentResults:s?.updateResults?s.updateResults.map(b):[],deleteAttachmentResults:s?.deleteResults?s.deleteResults.map(b):[]};return t?.editMoment&&(r.editMoment=t.editMoment),r}function b(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new S("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}function F(t,e){return new G({attributes:t.attributes,geometry:B({...t.geometry,spatialReference:e})})}function Ee(t,e){return{adds:t?.adds?.map(s=>F(s,e))||[],updates:t?.updates?.map(s=>({original:F(s[0],e),current:F(s[1],e)}))||[],deletes:t?.deletes?.map(s=>F(s,e))||[],spatialReference:e}}function Oe(t){const e=t.details.raw,s=+e.code,r=+e.extendedCode;return s===500&&(r===-2147217144||r===-2147467261)}const Ae=new L({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),Fe=new L({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let _=class extends H{constructor(t){super(t),this.type="feature-layer",this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.refresh=z(async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(e==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const s=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:s,updates:s?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(t){const e=this.layer.sourceJSON,s=this._fetchService(e,{...t}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t)).then(()=>this._ensureLatestMetadata(t));return this.addResolvingPromise(s),Promise.resolve(this)}initialize(){this.addHandles([Y(()=>{const t=this.layer;return t&&"lastEditsEventDate"in t?t.lastEditsEventDate:null},t=>this._handleLastEditsEventChange(t))])}destroy(){this._removeEditInterceptor()}get queryTask(){const{capabilities:t,parsedUrl:e,gdbVersion:s,spatialReference:r,fieldsIndex:a}=this.layer,n="infoFor3D"in this.layer?this.layer.infoFor3D:null,i="dynamicDataSource"in this.layer?this.layer.dynamicDataSource:null,o=J("featurelayer-pbf")&&t?.query.supportsFormatPBF&&n==null,u=t?.operations?.supportsQueryAttachments??!1;return new Z({url:e.path,pbfSupported:o,fieldsIndex:a,infoFor3D:n,dynamicDataSource:i,gdbVersion:s,sourceSpatialReference:r,queryAttachmentsSupported:u})}async addAttachment(t,e){await this.load();const{layer:s}=this;await A(s,"editing");const r=t.attributes[s.objectIdField],a=s.parsedUrl.path+"/"+r+"/addAttachment",n=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(e,n.query);try{const o=await m(a,{body:i});return b(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(r,o)}}async updateAttachment(t,e,s){await this.load();const{layer:r}=this;await A(r,"editing");const a=t.attributes[r.objectIdField],n=r.parsedUrl.path+"/"+a+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:e}}),o=this._getFormDataForAttachment(s,i.query);try{const u=await m(n,{body:o});return b(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async applyEdits(t,e){await this.load();const{layer:s}=this;await A(s,"editing");const r="infoFor3D"in s?s.infoFor3D:null,a=r!=null,n=a||(e?.globalIdUsed??!1),i=a?await this._uploadMeshesAndGetAssetMapEditsJSON(t):null,o=t.addFeatures?.map(w=>C(this.layer,w,r))??[],u=(await Promise.all(o)).filter(v),d=t.updateFeatures?.map(w=>C(this.layer,w,r))??[],l=(await Promise.all(d)).filter(v),p=Se(this.layer,t.deleteFeatures,n);W(u,l,s.spatialReference);const q=await Re(this.layer,t),I=s.capabilities.editing.supportsAsyncApplyEdits&&a,h=e?.gdbVersion||s.gdbVersion,c={gdbVersion:h,rollbackOnFailure:e?.rollbackOnFailureEnabled,useGlobalIds:n,returnEditMoment:e?.returnEditMoment,usePreviousEditMoment:e?.usePreviousEditMoment,async:I};await X(this.layer.url,h,!0);const R=K(this.layer.url,h||null);if(await ee(s.url,h,s.historicMoment))throw new S("feature-layer-source:historic-version","Editing a historic version is not allowed");e?.returnServiceEditsOption?(c.edits=JSON.stringify([{id:s.layerId,adds:u.length?u:null,updates:l.length?l:null,deletes:p.length?p:null,attachments:q,assetMaps:i}]),c.returnServiceEditsOption=Ae.toJSON(e?.returnServiceEditsOption),c.returnServiceEditsInSourceSR=e?.returnServiceEditsInSourceSR):(c.adds=u.length?JSON.stringify(u):null,c.updates=l.length?JSON.stringify(l):null,c.deletes=p.length?n?JSON.stringify(p):p.join(","):null,c.attachments=q&&JSON.stringify(q),c.assetMaps=i!=null?JSON.stringify(i):void 0);const y=this._getLayerRequestOptions({method:"post",query:c});R&&(y.authMode="immediate",y.query.returnEditMoment=!0,y.query.sessionId=te);const g=e?.returnServiceEditsOption?s.url:s.parsedUrl.path;let f;try{f=I?await this._asyncApplyEdits(g+"/applyEdits",y):await m(g+"/applyEdits",y)}catch(w){if(!Oe(w))throw w;y.authMode="immediate",f=I?await this._asyncApplyEdits(g+"/applyEdits",y):await m(g+"/applyEdits",y)}return this._createEditsResult(f)}async deleteAttachments(t,e){await this.load();const{layer:s}=this;await A(s,"editing");const r=t.attributes[s.objectIdField],a=s.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await m(a,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(b)}catch(n){throw this._createAttachmentErrorResult(r,n)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const s=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:r,url:a}=this.layer,{data:n}=await m(`${a}/${r}`,s),{id:i,extent:o,fullExtent:u,timeExtent:d}=n,l=o||u;return{id:i,fullExtent:l&&se.fromJSON(l),timeExtent:d&&ae.fromJSON({start:d[0],end:d[1]})}})}async queryAttachments(t,e={}){await this.load();const s=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,s)}async queryFeatures(t,e){await this.load();const s=await this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)});return t.outStatistics?.length&&s.features.length&&s.features.forEach(r=>{const a=r.attributes;t.outStatistics?.forEach(({outStatisticFieldName:n})=>{if(n){const i=n.toLowerCase();i&&i in a&&n!==i&&(a[n]=a[i],delete a[i])}})}),s}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryBins(t,e){return await this.load(),this.queryTask.executeBinsQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!re(this.layer.url))return"unavailable";const t=T(this.layer.url,"status"),e=await m(t,{query:{f:"json"}});return Fe.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:s}=await M(()=>import("./uploadAssets-CN0FboSF.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);return s(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}_handleLastEditsEventChange(t){const e=this.layer;if(t==null||!("capabilities"in e)||!("effectiveCapabilities"in e)||!(!e.capabilities?.operations?.supportsEditing&&e.effectiveCapabilities?.operations?.supportsEditing))return;const s=e.url;s!=null&&("layerId"in e&&T(s,e.layerId.toString()),this._getOrCreateEditInterceptor(s).before=r=>{const a=r.requestOptions.method??"auto";if(a==="auto"||a==="head"){const n=r.requestOptions.query??{};n._ts=t.getTime(),r.requestOptions.query=n}})}_getOrCreateEditInterceptor(t){return this._editInterceptor==null&&(this._editInterceptor={urls:t},D.request.internalInterceptors.push(this._editInterceptor)),this._editInterceptor}_removeEditInterceptor(){this._editInterceptor!=null&&(ne(D.request.internalInterceptors,this._editInterceptor),this._editInterceptor=null)}async _asyncApplyEdits(t,e){const s=(await m(t,e)).data.statusUrl;for(;;){const r=(await m(s,{query:{f:"json"},responseType:"json"})).data;switch(r.status){case"Completed":return m(r.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new S("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new S("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await ie(xe)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t?.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const r={};J("featurelayer-advanced-symbols")&&(r.returnAdvancedSymbols=!0),e?.cacheBust&&(r._ts=Date.now());const{data:a}=await m(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:r,signal:e?.signal}));t=a}this.sourceJSON=await this._patchServiceJSON(t,e?.signal);const s=t.type;if(!this.supportedSourceTypes.has(s))throw new S("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}async _patchServiceJSON(t,e){if(t.type!=="Table"&&t.geometryType&&!t?.drawingInfo?.renderer&&!t.defaultSymbol){const s=Ie(t.geometryType).renderer;oe("drawingInfo.renderer",s,t)}if(t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t.extent==null)try{const{data:s}=await m(this.layer.url,this._getLayerRequestOptions({signal:e}));s.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(s){ue(s)}return t}async _ensureLatestMetadata(t){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...t,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(t){const{addAssetFeatures:e}=t;if(!e?.length||await this._areAllAssetsAlreadyMapped(e))return null;const s=t.addFeatures.filter(n=>n.geometry);if(e.length!==s.length+t.updateFeatures.length)throw new S("feature-layer-source:unsupported-mesh-edits","Mixing attribute only edits with mesh geometry edits is not currently supported");const r=new Array,a=new Map;for(const n of e){const{geometry:i}=n,{vertexSpace:o}=i;if(me(o))r.push(i);else{const u=i.origin,{convertMeshVertexSpace:d}=await M(async()=>{const{convertMeshVertexSpace:p}=await import("./convertMeshVertexSpace-CVPWNwfe.js");return{convertMeshVertexSpace:p}},__vite__mapDeps([12,1,2,3,13,14,9,7,15,16,17,18,19,20,21,22]),import.meta.url),l=await d(i,new fe({origin:[u.x,u.y,u.z??0]}));a.set(l,i),n.geometry=l,r.push(l)}}await this.uploadAssets(r);for(const[n,i]of a)i.addExternalSources(n.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(e),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,s=this.layer.globalIdField,r=this.layer.parsedUrl;for(const a of t){const n=a.geometry,{metadata:i}=n,o=i.getExternalSourcesOnService(r),u=a.getAttribute(s);if(o.length===0){x.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:d}=o.find(ge)??o[0];for(const l of d)l.parts.length===1?e.push({globalId:le(),parentGlobalId:u,assetName:l.assetName,assetHash:l.parts[0].partHash,flags:[]}):x.getLogger(this).error(`Skipping asset ${l.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_createEditsResult(t){const e=t.data,{layerId:s}=this.layer,r=[];let a=null;if(Array.isArray(e))for(const i of e)r.push({id:i.id,editedFeatures:i.editedFeatures}),i.id===s&&(a={addResults:i.addResults??[],updateResults:i.updateResults??[],deleteResults:i.deleteResults??[],attachments:i.attachments,editMoment:i.editMoment});else a=e;const n=_e(a);if(r.length>0){n.editedFeatureResults=[];for(const i of r){const{editedFeatures:o}=i,u=o?.spatialReference?new de(o.spatialReference):null;n.editedFeatureResults.push({layerId:i.id,editedFeatures:Ee(o,u)})}}return n}_createAttachmentErrorResult(t,e){const s=e.details.messages?.[0]||e.message,r=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new S("feature-layer-source:attachment-failure",s,{code:r})}}_getFormDataForAttachment(t,e){const s=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(s)for(const r in e){const a=e[r];a!=null&&(s.set?s.set(r,a):s.append(r,a))}return s}_getLayerRequestOptions(t={}){const{layer:e,layer:{parsedUrl:s,gdbVersion:r}}=this;return{...t,query:{gdbVersion:r,layer:"dynamicDataSource"in e&&e.dynamicDataSource?JSON.stringify({source:e.dynamicDataSource}):void 0,...s.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _areAllAssetsAlreadyMapped(t){const{layer:e}=this,{globalIdField:s,parsedUrl:r}=e,a="infoFor3D"in e?e.infoFor3D:null;if(a==null||s==null)return!1;const n=ce(a);if(n==null)return!1;const i=T(r.path,`../${n.id}`),o=new Array;for(const h of t){if(!(h.geometry.metadata.getExternalSourcesOnService(r).length>0))return!1;o.push(h)}const u=o.map(h=>h.getAttribute(s)).filter(v);if(u.length===0)return!1;const{assetMapFieldRoles:{parentGlobalId:d,assetHash:l}}=a,p=new pe({where:`${d} IN (${u.map(h=>`'${h}'`)})`,outFields:[l,d],returnGeometry:!1}),q=await he(i,p),{features:I}=q;return I.length!==0&&!o.some(h=>{const c=h.getAttribute(s);if(!c)return!0;const{metadata:R}=h.geometry,y=I.filter(f=>f.getAttribute(d)===c);if(y.length===0)return!0;const g=y.map(f=>f.getAttribute(l));return R.getExternalSourcesOnService(r).flatMap(({source:f})=>f.flatMap(w=>w.parts.map(U=>U.partHash))).some(f=>g.every(w=>f!==w))})}};E([O()],_.prototype,"type",void 0),E([O({constructOnly:!0})],_.prototype,"layer",void 0),E([O({constructOnly:!0})],_.prototype,"supportedSourceTypes",void 0),E([O({readOnly:!0})],_.prototype,"queryTask",null),_=E([ye("esri.layers.graphics.sources.FeatureLayerSource")],_);const xe=1e3,Ve=_;export{Ve as default};
