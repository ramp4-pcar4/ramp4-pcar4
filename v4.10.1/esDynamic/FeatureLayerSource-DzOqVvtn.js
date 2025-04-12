import{bh as U,eG as M,eV as Q,n as A,s as S,b1 as j,b3 as P,ax as N,k as O,o as F,A as G,e as $,dA as V,aE as B,a$ as J,U as f,bQ as v,au as H,Z as T,H as D,eW as X,eX as Y,aY as Z,G as z,B as W}from"./main-Dv0FawL-.js";import{r as K}from"./uuid-Dj9mdEVg.js";import{a as ee}from"./MeshLocalVertexSpace-D8Jbm-C-.js";import{a as te}from"./meshVertexSpaceUtils-DuD29fe0.js";import{A as se}from"./External-kBOWWsTy.js";import{L as ae,J as re,Q as ne}from"./projection-DmpruZ6B.js";import{N as ie}from"./MeshTransform-tgMVchtl.js";import{isFeatureIdentifierArrayWithGlobalId as oe,isFeatureIdentifierArrayWithObjectId as ue}from"./editingSupport-CrK9rZhL.js";import{u as le}from"./clientSideDefaults-BQGk8ALn.js";import{j as de}from"./QueryTask-C50tXur9.js";import{g as ce}from"./arcgisLayerUrl-DJXSTOQU.js";import{J as _}from"./featureLayerUtils-M5wt0hcD.js";import{M as pe}from"./infoFor3D-DIuYZyyK.js";import{s as he}from"./executeQueryJSON-Car9Sj9x.js";import{i as ye}from"./editsZScale-xkJH7yUe.js";import{b as me}from"./Query-LHTbNS2H.js";import{p as fe}from"./TimeExtent-iewPh8zw.js";import{i as ge,a as we,o as be,t as qe}from"./EditBusLayer-Dh6lYUqK.js";async function C(t,e,s){const{geometry:r}=e,a={...e.attributes};if(s!=null&&r?.type==="mesh"){const{transformFieldRoles:n}=s,{origin:i,spatialReference:o,vertexSpace:u}=r,d=r.transform??new ie,l=u.type==="local",m=t.spatialReference,q=m.isGeographic,I=U(m,o),p=ae(o,m)&&re(o,m);if(!(l&&q&&p||!l&&!q&&I))return null;const c=ne(i,o,m);if(c==null)return null;if(a[n.originX]=c.x,a[n.originY]=c.y,a[n.originZ]=c.z??0,d!=null){const{translation:R,scale:h,rotation:g}=d,y=l?1:M(o)/M(m);a[n.translationX]=R[0]*y,a[n.translationY]=R[2]*y,a[n.translationZ]=-R[1]*y,a[n.scaleX]=h[0],a[n.scaleY]=h[2],a[n.scaleZ]=h[1],a[n.rotationX]=g[0],a[n.rotationY]=g[2],a[n.rotationZ]=-g[1],a[n.rotationDeg]=g[3]}return{attributes:a}}return r==null?{attributes:a}:r.type==="mesh"||r.type==="extent"?null:{geometry:r.toJSON(),attributes:a}}async function Ie(t,e){const s=await Promise.all((e.addAttachments??[]).map(n=>k(t,n))),r=await Promise.all((e.updateAttachments??[]).map(n=>k(t,n))),a=e.deleteAttachments??[];return s.length||r.length||a.length?{adds:s,updates:r,deletes:[...a]}:null}async function k(t,e){const{feature:s,attachment:r}=e,{globalId:a,name:n,contentType:i,data:o,uploadId:u}=r,d={globalId:a};if(s&&("attributes"in s?d.parentGlobalId=s.attributes?.[t.globalIdField]:s.globalId&&(d.parentGlobalId=s.globalId)),u)d.uploadId=u;else if(o){const l=await Q(o);l&&(d.contentType=l.mediaType,d.data=l.data),o instanceof File&&(d.name=o.name)}return n&&(d.name=n),i&&(d.contentType=i),d}function Re(t,e,s){if(!e||e.length===0)return[];if(s&&oe(e))return e.map(a=>a.globalId);if(ue(e))return e.map(a=>a.objectId);const r=s?t.globalIdField:t.objectIdField;return r?e.map(a=>a.getAttribute(r)):[]}function Se(t){const e=t?.assetMaps;if(e){for(const a of e.addResults)a.success||A.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${a.globalId}.`);for(const a of e.updateResults)a.success||A.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${a.globalId}.`)}const s=t?.attachments,r={addFeatureResults:t?.addResults?.map(b)??[],updateFeatureResults:t?.updateResults?.map(b)??[],deleteFeatureResults:t?.deleteResults?.map(b)??[],addAttachmentResults:s?.addResults?s.addResults.map(b):[],updateAttachmentResults:s?.updateResults?s.updateResults.map(b):[],deleteAttachmentResults:s?.deleteResults?s.deleteResults.map(b):[]};return t?.editMoment&&(r.editMoment=t.editMoment),r}function b(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new S("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}function x(t,e){return new j({attributes:t.attributes,geometry:P({...t.geometry,spatialReference:e})})}function Ee(t,e){return{adds:t?.adds?.map(s=>x(s,e))||[],updates:t?.updates?.map(s=>({original:x(s[0],e),current:x(s[1],e)}))||[],deletes:t?.deletes?.map(s=>x(s,e))||[],spatialReference:e}}function Oe(t){const e=t.details.raw,s=+e.code,r=+e.extendedCode;return s===500&&(r===-2147217144||r===-2147467261)}const Ae=new N({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),Fe=new N({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let E=class extends ${constructor(t){super(t),this.type="feature-layer",this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.refresh=V(async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(e==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const s=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:s,updates:s?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(t){const e=this.layer.sourceJSON,s=this._fetchService(e,{...t}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t)).then(()=>this._ensureLatestMetadata(t));return this.addResolvingPromise(s),Promise.resolve(this)}initialize(){this.addHandles([B(()=>{const t=this.layer;return t&&"lastEditsEventDate"in t?t.lastEditsEventDate:null},t=>this._handleLastEditsEventChange(t))])}destroy(){this._removeEditInterceptor()}get queryTask(){const{capabilities:t,parsedUrl:e,gdbVersion:s,spatialReference:r,fieldsIndex:a}=this.layer,n="infoFor3D"in this.layer?this.layer.infoFor3D:null,i="dynamicDataSource"in this.layer?this.layer.dynamicDataSource:null,o=J("featurelayer-pbf")&&t?.query.supportsFormatPBF&&n==null,u=t?.operations?.supportsQueryAttachments??!1;return new de({url:e.path,pbfSupported:o,fieldsIndex:a,infoFor3D:n,dynamicDataSource:i,gdbVersion:s,sourceSpatialReference:r,queryAttachmentsSupported:u})}async addAttachment(t,e){await this.load();const{layer:s}=this;await _(s,"editing");const r=t.attributes[s.objectIdField],a=s.parsedUrl.path+"/"+r+"/addAttachment",n=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(e,n.query);try{const o=await f(a,{body:i});return b(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(r,o)}}async updateAttachment(t,e,s){await this.load();const{layer:r}=this;await _(r,"editing");const a=t.attributes[r.objectIdField],n=r.parsedUrl.path+"/"+a+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:e}}),o=this._getFormDataForAttachment(s,i.query);try{const u=await f(n,{body:o});return b(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async applyEdits(t,e){await this.load();const{layer:s}=this;await _(s,"editing");const r="infoFor3D"in s?s.infoFor3D:null,a=r!=null,n=a||(e?.globalIdUsed??!1),i=a?await this._uploadMeshesAndGetAssetMapEditsJSON(t):null,o=t.addFeatures?.map(w=>C(this.layer,w,r))??[],u=(await Promise.all(o)).filter(v),d=t.updateFeatures?.map(w=>C(this.layer,w,r))??[],l=(await Promise.all(d)).filter(v),m=Re(this.layer,t.deleteFeatures,n);ye(u,l,s.spatialReference);const q=await Ie(this.layer,t),I=s.capabilities.editing.supportsAsyncApplyEdits&&a,p=e?.gdbVersion||s.gdbVersion,c={gdbVersion:p,rollbackOnFailure:e?.rollbackOnFailureEnabled,useGlobalIds:n,returnEditMoment:e?.returnEditMoment,usePreviousEditMoment:e?.usePreviousEditMoment,async:I};await ge(this.layer.url,p,!0);const R=we(this.layer.url,p||null);if(await be(s.url,p,s.historicMoment))throw new S("feature-layer-source:historic-version","Editing a historic version is not allowed");e?.returnServiceEditsOption?(c.edits=JSON.stringify([{id:s.layerId,adds:u.length?u:null,updates:l.length?l:null,deletes:m.length?m:null,attachments:q,assetMaps:i}]),c.returnServiceEditsOption=Ae.toJSON(e?.returnServiceEditsOption),c.returnServiceEditsInSourceSR=e?.returnServiceEditsInSourceSR):(c.adds=u.length?JSON.stringify(u):null,c.updates=l.length?JSON.stringify(l):null,c.deletes=m.length?n?JSON.stringify(m):m.join(","):null,c.attachments=q&&JSON.stringify(q),c.assetMaps=i!=null?JSON.stringify(i):void 0);const h=this._getLayerRequestOptions({method:"post",query:c});R&&(h.authMode="immediate",h.query.returnEditMoment=!0,h.query.sessionId=qe);const g=e?.returnServiceEditsOption?s.url:s.parsedUrl.path;let y;try{y=I?await this._asyncApplyEdits(g+"/applyEdits",h):await f(g+"/applyEdits",h)}catch(w){if(!Oe(w))throw w;h.authMode="immediate",y=I?await this._asyncApplyEdits(g+"/applyEdits",h):await f(g+"/applyEdits",h)}return this._createEditsResult(y)}async deleteAttachments(t,e){await this.load();const{layer:s}=this;await _(s,"editing");const r=t.attributes[s.objectIdField],a=s.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await f(a,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(b)}catch(n){throw this._createAttachmentErrorResult(r,n)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const s=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:r,url:a}=this.layer,{data:n}=await f(`${a}/${r}`,s),{id:i,extent:o,fullExtent:u,timeExtent:d}=n,l=o||u;return{id:i,fullExtent:l&&H.fromJSON(l),timeExtent:d&&fe.fromJSON({start:d[0],end:d[1]})}})}async queryAttachments(t,e={}){await this.load();const s=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,s)}async queryFeatures(t,e){await this.load();const s=await this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)});return t.outStatistics?.length&&s.features.length&&s.features.forEach(r=>{const a=r.attributes;t.outStatistics?.forEach(({outStatisticFieldName:n})=>{if(n){const i=n.toLowerCase();i&&i in a&&n!==i&&(a[n]=a[i],delete a[i])}})}),s}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryBins(t,e){return await this.load(),this.queryTask.executeBinsQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!ce(this.layer.url))return"unavailable";const t=T(this.layer.url,"status"),e=await f(t,{query:{f:"json"}});return Fe.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:s}=await import("./uploadAssets-Dvoz7Qm4.js");return s(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}_handleLastEditsEventChange(t){const e=this.layer;if(t==null||!("capabilities"in e)||!("effectiveCapabilities"in e)||!(!e.capabilities?.operations?.supportsEditing&&e.effectiveCapabilities?.operations?.supportsEditing))return;const s=e.url;s!=null&&("layerId"in e&&T(s,e.layerId.toString()),this._getOrCreateEditInterceptor(s).before=r=>{const a=r.requestOptions.method??"auto";if(a==="auto"||a==="head"){const n=r.requestOptions.query??{};n._ts=t.getTime(),r.requestOptions.query=n}})}_getOrCreateEditInterceptor(t){return this._editInterceptor==null&&(this._editInterceptor={urls:t},D.request.internalInterceptors.push(this._editInterceptor)),this._editInterceptor}_removeEditInterceptor(){this._editInterceptor!=null&&(X(D.request.internalInterceptors,this._editInterceptor),this._editInterceptor=null)}async _asyncApplyEdits(t,e){const s=(await f(t,e)).data.statusUrl;for(;;){const r=(await f(s,{query:{f:"json"},responseType:"json"})).data;switch(r.status){case"Completed":return f(r.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new S("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new S("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await Y(_e)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t?.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const r={};J("featurelayer-advanced-symbols")&&(r.returnAdvancedSymbols=!0),e?.cacheBust&&(r._ts=Date.now());const{data:a}=await f(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:r,signal:e?.signal}));t=a}this.sourceJSON=await this._patchServiceJSON(t,e?.signal);const s=t.type;if(!this.supportedSourceTypes.has(s))throw new S("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}async _patchServiceJSON(t,e){if(t.type!=="Table"&&t.geometryType&&!t?.drawingInfo?.renderer&&!t.defaultSymbol){const s=le(t.geometryType).renderer;Z("drawingInfo.renderer",s,t)}if(t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t.extent==null)try{const{data:s}=await f(this.layer.url,this._getLayerRequestOptions({signal:e}));s.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(s){z(s)}return t}async _ensureLatestMetadata(t){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...t,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(t){const{addAssetFeatures:e}=t;if(!e?.length||await this._areAllAssetsAlreadyMapped(e))return null;const s=t.addFeatures.filter(n=>n.geometry);if(e.length!==s.length+t.updateFeatures.length)throw new S("feature-layer-source:unsupported-mesh-edits","Mixing attribute only edits with mesh geometry edits is not currently supported");const r=new Array,a=new Map;for(const n of e){const{geometry:i}=n,{vertexSpace:o}=i;if(te(o))r.push(i);else{const u=i.origin,{convertMeshVertexSpace:d}=await import("./convertMeshVertexSpace-B6hSTTm_.js"),l=await d(i,new ee({origin:[u.x,u.y,u.z??0]}));a.set(l,i),n.geometry=l,r.push(l)}}await this.uploadAssets(r);for(const[n,i]of a)i.addExternalSources(n.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(e),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,s=this.layer.globalIdField,r=this.layer.parsedUrl;for(const a of t){const n=a.geometry,{metadata:i}=n,o=i.getExternalSourcesOnService(r),u=a.getAttribute(s);if(o.length===0){A.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:d}=o.find(se)??o[0];for(const l of d)l.parts.length===1?e.push({globalId:K(),parentGlobalId:u,assetName:l.assetName,assetHash:l.parts[0].partHash,flags:[]}):A.getLogger(this).error(`Skipping asset ${l.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_createEditsResult(t){const e=t.data,{layerId:s}=this.layer,r=[];let a=null;if(Array.isArray(e))for(const i of e)r.push({id:i.id,editedFeatures:i.editedFeatures}),i.id===s&&(a={addResults:i.addResults??[],updateResults:i.updateResults??[],deleteResults:i.deleteResults??[],attachments:i.attachments,editMoment:i.editMoment});else a=e;const n=Se(a);if(r.length>0){n.editedFeatureResults=[];for(const i of r){const{editedFeatures:o}=i,u=o?.spatialReference?new W(o.spatialReference):null;n.editedFeatureResults.push({layerId:i.id,editedFeatures:Ee(o,u)})}}return n}_createAttachmentErrorResult(t,e){const s=e.details.messages?.[0]||e.message,r=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new S("feature-layer-source:attachment-failure",s,{code:r})}}_getFormDataForAttachment(t,e){const s=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(s)for(const r in e){const a=e[r];a!=null&&(s.set?s.set(r,a):s.append(r,a))}return s}_getLayerRequestOptions(t={}){const{layer:e,layer:{parsedUrl:s,gdbVersion:r}}=this;return{...t,query:{gdbVersion:r,layer:"dynamicDataSource"in e&&e.dynamicDataSource?JSON.stringify({source:e.dynamicDataSource}):void 0,...s.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _areAllAssetsAlreadyMapped(t){const{layer:e}=this,{globalIdField:s,parsedUrl:r}=e,a="infoFor3D"in e?e.infoFor3D:null;if(a==null||s==null)return!1;const n=pe(a);if(n==null)return!1;const i=T(r.path,`../${n.id}`),o=new Array;for(const p of t){if(!(p.geometry.metadata.getExternalSourcesOnService(r).length>0))return!1;o.push(p)}const u=o.map(p=>p.getAttribute(s)).filter(v);if(u.length===0)return!1;const{assetMapFieldRoles:{parentGlobalId:d,assetHash:l}}=a,m=new me({where:`${d} IN (${u.map(p=>`'${p}'`)})`,outFields:[l,d],returnGeometry:!1}),q=await he(i,m),{features:I}=q;return I.length!==0&&!o.some(p=>{const c=p.getAttribute(s);if(!c)return!0;const{metadata:R}=p.geometry,h=I.filter(y=>y.getAttribute(d)===c);if(h.length===0)return!0;const g=h.map(y=>y.getAttribute(l));return R.getExternalSourcesOnService(r).flatMap(({source:y})=>y.flatMap(w=>w.parts.map(L=>L.partHash))).some(y=>g.every(w=>y!==w))})}};O([F()],E.prototype,"type",void 0),O([F({constructOnly:!0})],E.prototype,"layer",void 0),O([F({constructOnly:!0})],E.prototype,"supportedSourceTypes",void 0),O([F({readOnly:!0})],E.prototype,"queryTask",null),E=O([G("esri.layers.graphics.sources.FeatureLayerSource")],E);const _e=1e3,xe=E;export{xe as default};
