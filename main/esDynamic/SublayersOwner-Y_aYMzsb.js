import{x as a,z as l,D as f,bz as J,M as $,K as R,T as K,bx as u,bJ as H,a2 as j,N as W,ax as ie,dF as se,j as ae,s as c,gh as oe,aY as le,fF as ne,e as pe,n as E,bI as ue,V as M,bD as ye,eV as T,o as D,bA as de,cR as V,bt as N,B as x,b7 as ce,bq as G,bG as he,bw as L,aM as z,aH as X,dW as fe}from"./main-C3PVbFgd.js";import{r as be}from"./Version-NqZA95Eh.js";import{u as me,l as ge}from"./commonProperties-BCz2XKpW.js";import{c as Y}from"./portalItemUtils-CLgHGSUp.js";import{n as Se}from"./CollectionFlattener-FiQU9BwP.js";import{S as Ie}from"./MultiOriginJSONSupport-DBm6Kwq0.js";import{F as we}from"./QueryTask-zfU2f70v.js";import{i as ve}from"./OrderedLayer-BQjANqJ2.js";import{o as Ee,a as xe,C as Le}from"./labelingInfo-BabUmGyO.js";import{c as Oe}from"./FeatureType-BlYfmS1V.js";import{y as Fe}from"./Field-BzBPNBHv.js";import{Z as Te}from"./FieldsIndex-vbyX-sdH.js";import{p as De}from"./LayerFloorInfo-CRBT5_1O.js";import{a as Pe}from"./OrderByInfo-CXJuYg3A.js";import{p as _e}from"./Relationship-elkDdFta.js";import{c as Ae}from"./serviceCapabilitiesUtils-BxUooXtr.js";import{c as B,b as qe,R as Z}from"./Query-jPNKmFBt.js";import{m as Ce,u as Re}from"./typeUtils-DOkFRtHp.js";import{f as je}from"./utils-ubCxq8oC.js";import{c as Me}from"./RelationshipQuery-D-gye8sT.js";import{p as Ve}from"./popupUtils-B_nUcaUc.js";import{o as Ne}from"./sublayerUtils-B0_aQr-v.js";const Be=e=>{let r=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(t,i){const s=i.capabilities&&i.capabilities.split(",").map(te=>te.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const n=this.type,p=n!=="tile"&&!!i.supportsDynamicLayers,y=s.includes("query"),h=s.includes("map"),b=!!i.exportTilesAllowed,g=s.includes("tilemap"),w=s.includes("data"),I=n!=="tile"&&(!i.tileInfo||p),O=n!=="tile"&&(!i.tileInfo||p),d=n!=="tile",m=n!=="tile"&&p&&i.currentVersion>=11.1,v=i.cimVersion?be.parse(i.cimVersion):null,F=v?.greaterEqual(1,4)??!1,re=v?.greaterEqual(2,0)??!1;return{operations:{supportsExportMap:h,supportsExportTiles:b,supportsIdentify:y,supportsQuery:w,supportsTileMap:g},exportMap:h?{supportsArcadeExpressionForLabeling:F,supportsCIMSymbols:re,supportsDynamicLayers:p,supportsSublayerOrderBy:m,supportsSublayerDefinitionExpression:O,supportsSublayerVisibility:I,supportsSublayersChanges:d}:null,exportTiles:b?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(t,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchRelatedService(t){const i=this.portalItem;if(!i||!Y(i))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=i.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},t).then(n=>n.find(p=>p.type==="Feature Service")??null,()=>null));const s=await this._relatedFeatureServicePromise;return K(t),s?{itemId:s.id,url:s.url}:null}async fetchSublayerInfo(t,i){const{source:s}=t;if(this?.portalItem&&this.type==="tile"&&s?.type==="map-layer"&&Y(this.portalItem)&&t.originIdOf("url")<u.SERVICE){const y=await this.fetchRelatedService(i);y&&(t.url=H(y.url,s.mapLayerId.toString()),t.layerItemId=y.itemId)}const{url:n}=t;let p;if(s.type==="data-layer")p=(await j(n,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...i})).data;else if(n&&t.originIdOf("url")>u.SERVICE)try{const y=await this._fetchAllLayersAndTablesFromService(n),h=W(n)?.sublayer??s.mapLayerId;p=y.get(h)}catch{}else{let y=t.id;s?.type==="map-layer"&&(y=s.mapLayerId);try{p=(await this.fetchAllLayersAndTables(i)).get(y)}catch{}}return p}async fetchAllLayersAndTables(t){return this._fetchAllLayersAndTablesFromService(this.parsedUrl?.path,t)}async _fetchAllLayersAndTablesFromService(t,i){await this.load(i),this._allLayersAndTablesMap||=new Map;const s=W(t),n=ie(this._allLayersAndTablesMap,s?.url.path,()=>j(H(s?.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(y=>{const h=new Map,{layers:b,tables:g}=y.data,w=[...b??[],...g??[]];for(const I of w)h.set(I.id,I);return{result:h}},y=>({error:y}))),p=await n;if(K(i),"result"in p)return p.result;throw p.error}};return a([l({readOnly:!0})],r.prototype,"capabilities",void 0),a([f("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),a([l({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),a([l({type:J})],r.prototype,"fullExtent",void 0),a([l(me)],r.prototype,"id",void 0),a([l({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),a([l(ge)],r.prototype,"popupEnabled",void 0),a([l({type:$})],r.prototype,"spatialReference",void 0),a([l({readOnly:!0})],r.prototype,"version",void 0),a([f("service","version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=a([R("esri.layers.mixins.ArcGISMapService")],r),r};var P;function k(e){return e?.type==="esriSMS"}function Q(e,r,t){const i=this.originIdOf(r)>=L(t.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!t&&t.layer?.type==="map-image"&&(t.writeSublayerStructure||i)}}function U(e,r,t){return{enabled:!!t&&t.layer?.type==="tile"&&(t.origin&&this.originIdOf(r)>=L(t.origin)||this._isOverridden(r))}}function S(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function _(e,r,t){return{ignoreOrigin:!0,enabled:!!t?.writeSublayerStructure&&this.originIdOf(r)>u.SERVICE}}function A(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=L(t.origin))}}let ke=0;const Qe=new Set(["layer","parent","loaded","loadStatus","loadError","loadWarnings"]);let o=P=class extends Ie(se.IdentifiableMixin(ae)){constructor(e){super(e),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.isTable=!1,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.relationships=null,this.sourceJSON=null,this.spatialReference=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(e){return this.addResolvingPromise((async()=>{const{layer:r,url:t}=this;if(!r&&!t)throw new c("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=r?await r.fetchSublayerInfo(this,e):(await j(t,{responseType:"json",query:{f:"json"},...e})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service",layer:r,url:je(t)}))})()),this}readCapabilities(e,r){r=r.layerDefinition||r;const{attachment:t,operations:{supportsQuery:i,supportsQueryAttachments:s},query:{supportsFormatPBF:n,supportsOrderBy:p,supportsPagination:y},data:{supportsAttachment:h},queryRelated:b}=Ae(r,this.url);return{attachment:{supportsOrderByFields:t?.supportsOrderByFields??!1,supportsResize:t?.supportsResize??!1},exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:i,supportsQueryAttachments:s},data:{supportsAttachment:h},query:{supportsFormatPBF:n,supportsOrderBy:p,supportsPagination:y},queryRelated:b}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}readMaxScaleRange(e,r){return{minScale:(r=r.layerDefinition||r).minScale??0,maxScale:r.maxScale??0}}get fieldsIndex(){return new Te(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields){for(const t of r.fields)if(t.type==="esriFieldTypeGlobalID")return t.name}}get id(){return this._get("id")??ke++}set id(e){this._get("id")!==e&&(this.layer?.capabilities?.exportMap?.supportsDynamicLayers!==!1?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}readIsTable(e,r){return r.type==="Table"}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map(s=>s.write({},i))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers?.forEach(r=>r.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition?.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition?.maxScale||0}readObjectIdFieldFromService(e,r){return(r=r.layerDefinition||r).objectIdField?r.objectIdField:r.fields?.find(t=>t.type==="esriFieldTypeOID")?.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){const{layerDefinition:t}=r;return 1-.01*(t?.transparency??t?.drawingInfo?.transparency??0)}writeOpacity(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}set orderBy(e){this._setAndNotifyLayer("orderBy",e)}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=oe(this.parent.id):r.parentLayerId=-1}get queryTask(){if(!this.layer)return null;const{capabilities:e,fieldsIndex:r,layer:t,url:i}=this,{spatialReference:s}=t,n="gdbVersion"in t?t.gdbVersion:void 0,p=le("featurelayer-pbf")&&e?.query.supportsFormatPBF;return new we({fieldsIndex:r,gdbVersion:n,pbfSupported:p,queryAttachmentsSupported:e?.operations?.supportsQueryAttachments??!1,sourceSpatialReference:s,url:i})}set renderer(e){if(ne(e,this.fieldsIndex),e){for(const r of e.symbols)if(pe(r)){E.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new B({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return ue(M.ofType(P),e)}writeSublayers(e,r,t){this.sublayers?.length&&(r[t]=this.sublayers.map(i=>i.id).toArray().reverse())}readTitle(e,r){return r.layerDefinition?.name??r.name}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const i=r.fields.find(s=>s.name.toLowerCase()===t);i&&(t=i.name)}return t}get url(){const e=this.layer?.parsedUrl??this._lastParsedUrl,r=this.source;if(!e)return null;if(this._lastParsedUrl=e,r?.type==="map-layer")return`${e.path}/${r.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${ye(t)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=T(this),r=new P;return T(r).store=e.clone(Qe),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return Ve(this,e)}createQuery(){return new qe({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){if(this.hasOwnProperty("sublayers"))return null;const e=(await import("./FeatureLayer-D7DQaaAP.js")).default,{layer:r,url:t}=this;let i;if(t&&this.originIdOf("url")>u.SERVICE)i=new e({url:t});else{if(!r?.parsedUrl)throw new c("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const s=r.parsedUrl;i=new e({url:s.path}),s&&this.source&&(this.source.type==="map-layer"?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source)}}return r?.refreshInterval!=null&&(i.refreshInterval=r.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=D(this.floorInfo)),this.originIdOf("labelingInfo")>u.SERVICE&&(i.labelingInfo=D(this.labelingInfo)),this.originIdOf("labelsVisible")>u.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>u.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>u.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>u.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>u.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>u.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>u.DEFAULTS&&(i.popupTemplate=D(this.popupTemplate)),this.originIdOf("renderer")>u.SERVICE&&(i.renderer=D(this.renderer)),this.source?.type==="data-layer"&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>u.DEFAULTS&&(i.title=this.title),r?.type==="map-image"&&r.originIdOf("customParameters")>u.DEFAULTS&&(i.customParameters=r.customParameters),r?.type==="tile"&&r.originIdOf("customParameters")>u.DEFAULTS&&(i.customParameters=r.customParameters),i}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){return Ee(this.types,this.typeIdField,e)}getFieldDomain(e,r){const t=r?.feature,i=this.getFeatureType(t);if(i){const s=i.domains&&i.domains[e];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(e)}async queryAttachments(e,r){await this.load(),e=Me.from(e);const t=this.capabilities;if(!t?.data?.supportsAttachment)throw new c("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:s,globalIds:n,num:p,size:y,start:h,where:b}=e;if(!t?.operations?.supportsQueryAttachments&&(i?.length>0||n?.length>0||y?.length>0||p||h||b))throw new c("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(s?.length||n?.length||b))throw new c("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return!t?.attachment?.supportsOrderByFields&&e.orderByFields?.length&&((e=e.clone()).orderByFields=null),this.queryTask.executeAttachmentQuery(e,r)}async queryFeatureCount(e=this.createQuery(),r){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryFeatureCount:not-supported","this layer doesn't support queries.");if(!this.url)throw new c("queryFeatureCount:not-supported","this layer has no url.");const t=this.layer?.apiKey;return await this.queryTask.executeForCount(e,{...r,query:{...this.layer?.customParameters,token:t}})}async queryFeatures(e=this.createQuery(),r){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new c("queryFeatures:not-supported","this layer has no url.");const t=await this.queryTask.execute(e,{...r,query:{...this.layer?.customParameters,token:this.layer?.apiKey}});if(t?.features)for(const i of t.features)i.sourceLayer=this;return t}async queryObjectIds(e=this.createQuery(),r){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryObjectIds:not-supported","this layer doesn't support queries.");if(!this.url)throw new c("queryObjectIds:not-supported","this layer has no url.");const t=this.layer?.apiKey;return await this.queryTask.executeForIds(e,{...r,query:{...this.layer?.customParameters,token:t}})}async queryRelatedFeatures(e,r){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryRelatedFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new c("queryRelatedFeatures:not-supported","this layer has no url.");const t=this.layer?.apiKey;return await this.queryTask.executeRelationshipQuery(e,{...r,query:{...this.layer?.customParameters,token:t}})}async queryRelatedFeaturesCount(e,r){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryRelatedFeaturesCount:not-supported","this layer doesn't support queries.");if(!this.capabilities.queryRelated.supportsCount)throw new c("queryRelatedFeaturesCount:not-supported","this layer doesn't support query related counts.");if(!this.url)throw new c("queryRelatedFeaturesCount:not-supported","this layer has no url.");const t=this.layer?.apiKey;return await this.queryTask.executeRelationshipQueryForCount(e,{...r,query:{...this.layer?.customParameters,token:t}})}toExportImageJSON(e){const r={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,type:"mapLayer"}},t=de(e,this.definitionExpression);t!=null&&(r.definitionExpression=t);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((s,n)=>(s[n]=this.originIdOf(n),s),{});if(Object.keys(i).some(s=>i[s]>u.SERVICE)){const s=r.drawingInfo={};if(i.renderer>u.SERVICE&&(s.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>u.SERVICE&&(s.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>u.SERVICE)if(this.labelingInfo){!this.loaded&&this.labelingInfo?.some(p=>!p.labelPlacement)&&E.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let n=this.labelingInfo;this.geometryType!=null&&(n=xe(this.labelingInfo,V.toJSON(this.geometryType))),s.showLabels=!0,s.labelingInfo=n.filter(p=>p.labelPlacement).map(p=>p.toJSON({origin:"service",layer:this.layer}))}else s.showLabels=!1;i.opacity>u.SERVICE&&(s.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(s.renderer)}return(this.layer?.capabilities?.exportMap?.supportsSublayerOrderBy??!1)&&this.originIdOf("orderBy")>u.SERVICE&&(r.orderBy=this.orderBy?.map(s=>s.toJSON())??null),r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,r=>{r.color||r.style!=="esriSMSX"&&r.style!=="esriSMSCross"||(r.outline?.color?r.color=r.outline.color:r.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,r){if(e){const t=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)??[];for(const i of t)k(i.symbol)&&r(i.symbol);"symbol"in e&&k(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&k(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const t=this.layer,i=this._get(e);let s,n;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",n="supportsModification";break;case"orderBy":s="supportsSublayerOrderBy",n="supportsModification"}const p=T(this).getDefaultOrigin();if(p!=="service"){if(s&&this.layer?.capabilities?.exportMap?.[s]===!1)return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(n&&this.capabilities?.exportMap[n]===!1)return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${n}'`)}e!=="source"||this.loadStatus==="not-loaded"?(this._set(e,r),p!=="service"&&i!==r&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach(t=>{t.parent=null,t.layer=null}),this.removeAllHandles()),e&&(e.forEach(t=>{t.parent=this,t.layer=this.layer}),this.addHandles([e.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),e.on("after-remove",({item:t})=>{t.parent=null,t.layer=null}),e.on("before-changes",t=>{(this.layer?.capabilities?.exportMap?.supportsSublayersChanges??1)||(E.getLogger(this).error(new c("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),t.preventDefault())})]))}_logLockedError(e,r){const{layer:t,declaredClass:i}=this;E.getLogger(i).error(new c("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${t?.id}'`,{reason:r,sublayer:this,layer:t}))}_getLayerDomain(e){return this.fieldsIndex.get(e)?.domain??null}};o.test={isMapImageLayerOverridePolicy:e=>e===_||e===S||e===Q,isTileImageLayerOverridePolicy:e=>e===U},a([l({readOnly:!0})],o.prototype,"capabilities",void 0),a([f("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],o.prototype,"readCapabilities",null),a([l()],o.prototype,"defaultPopupTemplate",null),a([l({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:Q}}})],o.prototype,"definitionExpression",null),a([l({readOnly:!0})],o.prototype,"effectiveScaleRange",null),a([f("service","maxScaleRange",["minScale","maxScale"])],o.prototype,"readMaxScaleRange",null),a([l({type:[Fe],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],o.prototype,"fields",void 0),a([l({readOnly:!0})],o.prototype,"fieldsIndex",null),a([l({type:De,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:Q},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"floorInfo",null),a([l({type:J,json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),a([l({type:V.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:V.read}}}}})],o.prototype,"geometryType",void 0),a([l({type:String})],o.prototype,"globalIdField",void 0),a([f("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdFieldFromService",null),a([l({type:N,json:{write:{ignoreOrigin:!0}}})],o.prototype,"id",null),a([l({readOnly:!0})],o.prototype,"isTable",void 0),a([f("service","isTable",["type"])],o.prototype,"readIsTable",null),a([l({value:null,type:[Le],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:_}}})],o.prototype,"labelingInfo",null),a([x("labelingInfo")],o.prototype,"writeLabelingInfo",null),a([l({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:S}}})],o.prototype,"labelsVisible",null),a([l({value:null})],o.prototype,"layer",null),a([l({type:String,json:{write:{overridePolicy:U}}})],o.prototype,"layerItemId",void 0),a([l({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:A}}})],o.prototype,"legendEnabled",void 0),a([l({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"listMode",null),a([l({type:Number,value:0,json:{write:{overridePolicy:S}}})],o.prototype,"minScale",null),a([f("minScale",["minScale","layerDefinition.minScale"])],o.prototype,"readMinScale",null),a([l({type:Number,value:0,json:{write:{overridePolicy:S}}})],o.prototype,"maxScale",null),a([f("maxScale",["maxScale","layerDefinition.maxScale"])],o.prototype,"readMaxScale",null),a([l()],o.prototype,"objectIdField",void 0),a([f("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdFieldFromService",null),a([l({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:S}}})],o.prototype,"opacity",null),a([f("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],o.prototype,"readOpacity",null),a([x("opacity")],o.prototype,"writeOpacity",null),a([l({value:null,type:[Pe],json:{name:"layerDefinition.orderBy",read:{reader:ve}}})],o.prototype,"orderBy",null),a([l({json:{type:N,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:S}}})],o.prototype,"parent",void 0),a([x("parent")],o.prototype,"writeParent",null),a([l({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:A,writer(e,r,t){r[t]=!e}}}})],o.prototype,"popupEnabled",void 0),a([l({type:ce,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:A}}})],o.prototype,"popupTemplate",void 0),a([l({readOnly:!0})],o.prototype,"queryTask",null),a([l({type:[_e],readOnly:!0,json:{origins:{service:{read:{source:"layerDefinition.relationships"}}}}})],o.prototype,"relationships",void 0),a([l({types:Ce,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:_},origins:{"web-scene":{types:Re,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:_}}}}})],o.prototype,"renderer",null),a([l({types:{key:"type",base:null,typeMap:{"data-layer":Z,"map-layer":B}},cast(e){if(e){if("mapLayerId"in e)return G(B,e);if("dataSource"in e)return G(Z,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:S}}})],o.prototype,"source",null),a([l()],o.prototype,"sourceJSON",void 0),a([l({type:$,json:{origins:{service:{read:{source:"layerDefinition.extent.spatialReference"}}}}})],o.prototype,"spatialReference",void 0),a([l({value:null,json:{type:[N],write:{target:"subLayerIds",allowNull:!0,overridePolicy:S}}})],o.prototype,"sublayers",null),a([he("sublayers")],o.prototype,"castSublayers",null),a([x("sublayers")],o.prototype,"writeSublayers",null),a([l({type:String,json:{name:"name",write:{overridePolicy:A}}})],o.prototype,"title",void 0),a([f("service","title",["name","layerDefinition.name"])],o.prototype,"readTitle",null),a([l({type:String})],o.prototype,"typeIdField",void 0),a([l({json:{read:!1},readOnly:!0,value:"sublayer"})],o.prototype,"type",void 0),a([f("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),a([l({type:[Oe],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],o.prototype,"types",void 0),a([l({type:String,json:{name:"layerUrl",write:{overridePolicy:U}}})],o.prototype,"url",null),a([l({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:S}}})],o.prototype,"visible",null),a([x("visible")],o.prototype,"writeVisible",null),o=P=a([R("esri.layers.support.Sublayer")],o);const q=o;function Ue(e,r){const t=[],i={};return e&&e.forEach(s=>{const n=new q;if(n.read(s,r),i[n.id]=n,s.parentLayerId!=null&&s.parentLayerId!==-1){const p=i[s.parentLayerId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(n)}else t.unshift(n)}),t}const C=M.ofType(q);function ee(e,r){e&&e.forEach(t=>{r(t),t.sublayers&&t.sublayers.length&&ee(t.sublayers,r)})}const Je=e=>{let r=class extends e{constructor(...t){super(...t),this.allSublayers=new Se({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[u.SERVICE]:{},[u.PORTAL_ITEM]:{},[u.WEB_SCENE]:{},[u.WEB_MAP]:{},[u.LINK_CHART]:{}},this.subtables=null,this.addHandles([z(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),X),z(()=>this.subtables,(i,s)=>this._handleSublayersChange(i,s),X)])}destroy(){this.allSublayers.destroy()}readSublayers(t,i){if(!i||!t)return;const{sublayersSourceJSON:s}=this,n=L(i.origin);if(n<u.SERVICE||(s[n]={context:i,visibleLayers:t.visibleLayers||s[n].visibleLayers,layers:t.layers||s[n].layers},n>u.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:p,origin:y}=this.createSublayersForOrigin("web-document"),h=T(this);h.setDefaultOrigin(y),this._set("sublayers",new C(p)),h.setDefaultOrigin("user")}findSublayerById(t){return this.allSublayers.find(i=>i.id===t)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(t){const i=L(t==="web-document"?"web-map":t);let s=u.SERVICE,n=this.sublayersSourceJSON[u.SERVICE].layers,p=this.sublayersSourceJSON[u.SERVICE].context,y=null;const h=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(d=>d<=i);for(const d of h){const m=this.sublayersSourceJSON[d];Ne(m.layers)&&(s=d,n=m.layers,p=m.context,m.visibleLayers&&(y={visibleLayers:m.visibleLayers,context:m.context}))}const b=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(d=>d>s&&d<=i);let g=null;for(const d of b){const{layers:m,visibleLayers:v,context:F}=this.sublayersSourceJSON[d];m&&(g={layers:m,context:F}),v&&(y={visibleLayers:v,context:F})}const w=Ue(n,p),I=new Map,O=new Set;if(g)for(const d of g.layers)I.set(d.id,d);if(y?.visibleLayers)for(const d of y.visibleLayers)O.add(d);return ee(w,d=>{g&&d.read(I.get(d.id),g.context),y&&d.read({defaultVisibility:O.has(d.id)},y.context)}),{origin:fe(s),sublayers:new C({items:w})}}read(t,i){super.read(t,i),this.readSublayers(t,i)}_handleSublayersChange(t,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.removeHandles("sublayers-owner")),t&&(t.forEach(s=>{s.parent=this,s.layer=this}),this.addHandles([t.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),t.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.addHandles(t.on("before-changes",s=>{E.getLogger("esri.layers.TileLayer").error(new c("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([l({readOnly:!0})],r.prototype,"allSublayers",void 0),a([l({readOnly:!0,type:M.ofType(q)})],r.prototype,"serviceSublayers",void 0),a([l({value:null,type:C,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),a([l({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),a([l({type:C,json:{read:{source:"tables"}}})],r.prototype,"subtables",void 0),r=a([R("esri.layers.mixins.SublayersOwner")],r),r};export{Be as f,Je as m,q as s};
