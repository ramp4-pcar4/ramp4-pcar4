import{j as B,hb as W,V as E,s as m,bz as z,bO as Z,aY as H,n as T,fI as x,x as s,eO as U,b4 as R,bI as K,z as o,K as F,aL as X,aX as Y,M as ee,e4 as te,X as re,Q as ie,aV as S,I as se,bJ as P,fF as G,gw as ae,N as oe,gx as ne,bB as le,bA as ue,cL as A,a2 as pe,aW as de,D as d,hc as ye,B as D,o as O,hd as ce,b7 as he,bG as me}from"./main-C3PVbFgd.js";import{S as fe}from"./MultiOriginJSONSupport-DBm6Kwq0.js";import{a as C}from"./layerContainerType-ChWdCT09.js";import{R as be,V as ge}from"./FeatureLayerBase-DksdNQmL.js";import{f as we}from"./Layer-B1UUjGAB.js";import{p as ve}from"./workers-BJjqQR76.js";import{i as Te}from"./editsZScale-DNp5GxH_.js";import{t as N}from"./queryZScale-DvrL4rSW.js";import{d as J}from"./FeatureSet-BCz8r4S5.js";import{i as Fe}from"./APIKeyMixin-DFMle5p6.js";import{l as Se}from"./ArcGISService-D2PHbJ1A.js";import{p as _e}from"./BlendLayer-D-N5kUgV.js";import{e as Ie}from"./CustomParametersMixin-fd6awyxj.js";import{a as Ee}from"./DisplayFilteredLayer-BhnwkUZX.js";import{F as De}from"./EditBusLayer-CiCv3MyL.js";import{c as Oe}from"./FeatureEffectLayer-CDd2u_sA.js";import{d as Ce}from"./FeatureReductionLayer-CRHbsaqM.js";import{b as qe}from"./OperationalLayer-D5jBFa-a.js";import{p as je}from"./OrderedLayer-BQjANqJ2.js";import{j as Me}from"./PortalLayer-CaXkoSTL.js";import{f as Le}from"./RefreshableLayer-BT4Zb9ZM.js";import{t as xe}from"./ScaleRangeLayer-DWnJS1IV.js";import{l as Re}from"./TemporalLayer-DXHW7eHv.js";import{e as Pe}from"./TrackableLayer-C0gjflau.js";import{I as Ge,u as Ae,p as Ne,b as Je,d as Ve,T as ke,l as $e,s as Qe}from"./commonProperties-BCz2XKpW.js";import{H as Be,Y as We,M as ze,k as Ze,t as He,F as Ue,P as Ke,q as Xe,S as Ye,R as et,v as tt,O as rt,o as it,N as st,A as at,L as ot,E as nt,D as lt,T as ut,b as pt,c as dt,B as yt,j as V,C as ct,n as q}from"./labelingInfo-BabUmGyO.js";import{n as k}from"./FeatureTemplate-DT8SWea-.js";import{c as $}from"./FeatureType-BlYfmS1V.js";import{s as ht}from"./fieldProperties-D7rHvSUN.js";import{c as mt}from"./serviceCapabilitiesUtils-BxUooXtr.js";import{d as ft}from"./TimeInfo-CMhhkVhG.js";import{u as bt}from"./TitleCreator-DciO6G9c.js";import{t as gt}from"./versionUtils-Hw1JMpUi.js";import{b as wt,R as vt}from"./Query-jPNKmFBt.js";import{read as Tt}from"./jsonUtils-BeJxOPx0.js";import{t as Ft}from"./styleUtils-Dau41AoM.js";import{m as St,u as _t}from"./typeUtils-DOkFRtHp.js";import{p as It}from"./popupUtils-B_nUcaUc.js";import{A as _}from"./interfaces-Cwm0pihk.js";let Et=0,f=class extends B.LoadableMixin(W.EsriPromiseMixin(E)){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}get _workerGeometryType(){const e=this.layer?.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);N(e,this.layer.spatialReference,r);const i=J.fromJSON(r);if(!this._requiresClientGraphicMapping())return i;const n=this.layer.objectIdField;for(const l of i.features){const u=l.attributes[n],c=this._idToClientGraphic.get(u);c&&(l.geometry=c.geometry)}return i.geometryType=this.layer.geometryType,i}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new m("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return N(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(r=>({count:r.count,extent:z.fromJSON(r.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}async queryAttributeBins(e,t={}){return await this.load(),this._connection.invoke("queryAttributeBins",e?.toJSON(),t)}async _applyEdits(e){if(!this._connection)throw new m("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const i=[],n=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const l=p=>"objectId"in p&&p.objectId!=null?p.objectId:"attributes"in p&&p.attributes[t]!=null?p.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const p of e.deleteFeatures){const b=l(p);b!=null&&i.push(b)}const u=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures){for(const p of e.updateFeatures)if(n.push(this._serializeFeature(p)),u){const b=l(p);b!=null&&u.set(b,p)}}Te(r?r.features:null,n,this.layer.spatialReference);const{fullExtent:c,featureEditResults:h}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:n,deletes:i});return this.fullExtent=c,r&&r.finish(h.uidToObjectId),this._updateClientGraphicIds(u,h),this._createEditsResult(h)}async _prepareClientMapping(e,t){if(this._layerOrSourceGeometryType!=="mesh"||e==null)return;const r=[];for(const{geometry:i}of e)i==null||i.type!=="mesh"||i.hasExtent||i.loaded||r.push(i.load({signal:t}));r.length&&await Promise.all(r)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const r of t.updateResults){if(!r.success)continue;const i=e.get(r.objectId);i!=null&&this._addIdToClientGraphic(i)}for(const r of t.deleteResults)r.success&&this._idToClientGraphic.delete(r.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let i=null;for(let l=0;l<e.length;l++){const u=e[l],c=this._serializeFeature(u);i||u.geometry==null||(i=u.geometry.type),r[l]=c,t.set(`${c.uid}`,u)}const n=this;return{features:r,inferredGeometryType:i,finish(l){const u=n.sourceJSON.objectIdField;for(const c in l){const h=l[c],p=t.get(c);p&&(p.attributes||(p.attributes={}),h===-1?delete p.attributes[u]:p.attributes[u]=h,n._addIdToClientGraphic(p))}}}}_addIdToClientGraphic(e){if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,r=e.attributes?.[t];r!=null&&this._idToClientGraphic.set(r,e)}get _layerOrSourceGeometryType(){return this.layer?.geometryType??this.sourceJSON?.geometryType}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return e==="mesh"||e==="multipatch"||e==="extent"}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),i=(Et++).toString();return r?{uid:i,geometry:r.toJSON(),attributes:t}:{uid:i,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:this._geometryRequiresClientGraphicMapping(t)?t.extent?Z.fromExtent(t.extent):null:t}async _startWorker(e){this._connection=await ve("MemorySourceWorker",{strategy:H("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:r,objectIdField:i,hasM:n,hasZ:l,timeInfo:u,dateFieldsTimeZone:c}=this.layer,h=this.layer.originOf("spatialReference")==="defaults";await this._prepareClientMapping(this.items,e);const p=this._prepareAddFeatures(this.items);this.addHandles(this.on("before-changes",w=>{T.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),w.preventDefault()}));const b={features:p.features,fields:t?.map(w=>w.toJSON()),geometryType:x.toJSON(this._workerGeometryType),hasM:this._layerOrSourceGeometryType!=="mesh"&&n,hasZ:this._layerOrSourceGeometryType==="mesh"||l,objectIdField:i,spatialReference:h?null:r&&r.toJSON(),timeInfo:u?.toJSON()??null,dateFieldsTimeZone:c},g=await this._connection.invoke("load",b,{signal:e});for(const w of g.warnings)T.getLogger(this.layer).warn("#load()",`${w.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:w});g.featureErrors.length&&T.getLogger(this.layer).warn("#load()",`Encountered ${g.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:g.featureErrors});const L=g.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(p.inferredGeometryType)&&(L.geometryType=x.toJSON(p.inferredGeometryType)),this.sourceJSON=L,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),p.finish(g.assignedObjectIds)}};s([U({Type:R,ensureType:K(R)})],f.prototype,"itemType",void 0),s([o()],f.prototype,"type",void 0),s([o({constructOnly:!0})],f.prototype,"layer",void 0),s([o({readOnly:!0})],f.prototype,"_workerGeometryType",null),s([o()],f.prototype,"sourceJSON",void 0),f=s([F("esri.layers.graphics.sources.MemorySource")],f);let v=class extends X{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};s([o()],v.prototype,"updating",void 0),s([o()],v.prototype,"status",void 0),v=s([F("esri.layers.support.PublishingInfo")],v);const Dt=v,Ot=Symbol(),Ct=e=>{var t;let r=class extends e{constructor(){super(...arguments),this[t]=!0}get publishingInfo(){if(this.destroyed)return null;const i=this._get("publishingInfo");if(i)return i;const n=new Dt;return this._checkPublishingStatus(n),n}_checkPublishingStatus(i){let n=0;const l=async c=>{let h;i.updating=!0;try{h=await this.fetchPublishingStatus()}catch{h="unavailable"}h!=="published"&&h!=="unavailable"||(i.status==="publishing"&&this.refresh(),u.remove()),i.status=h,i.updating=!1,u.removed||(n=setTimeout(l,c,c+125))},u={removed:!1,remove(){this.removed=!0,clearTimeout(n)}};this.when().catch(()=>u.remove()),l(250),this.addHandles(u)}};return t=Ot,s([o({readOnly:!0,clonable:!1})],r.prototype,"publishingInfo",null),r=s([F("esri.layers.mixins.PublishableLayer")],r),r},y="FeatureLayer";function I(e,t){return new m("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function Q(e){return e&&e instanceof E}const j=ht();function M(e,t,r){const i=!!r?.writeLayerSchema;return{enabled:i,ignoreOrigin:i}}let a=class extends be(Ce(Oe(Ct(De(Ee(_e(je(Re(Pe(xe(Le(Se(qe(Me(fe(Ie(Fe(Y.ClonableMixin(we))))))))))))))))))){constructor(...e){super(...e),this.attributeTableTemplate=null,this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="ArcGISFeatureLayer",this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.resourceInfo=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=ee.WGS84,this.subtypeCode=null,this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0,this._debouncedSaveOperations=te(async(t,r,i)=>{const{save:n,saveAs:l}=await import("./featureLayerUtils-DLrJeALG.js");switch(t){case _.SAVE:return n(this,r);case _.SAVE_AS:return l(this,i,r)}})}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null;if(this.portalItem?.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(t).then(i=>this.initLayerProperties(i))),Promise.resolve(this);const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e).catch(re).then(async()=>{if(this.url&&this.layerId==null&&/FeatureServer|MapServer\/*$/i.test(this.url)){const i=await this._fetchFirstValidLayerId(t);i!=null&&(this.layerId=i)}if(!this.url&&!this._hasMemorySource())throw new m("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Be(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get _titleCreator(){const e=this._get("_titleCreator");return ie(e),new bt({fieldsIndex:this.fieldsIndex,objectIdField:this.objectIdField,fields:this.fields,displayField:this.displayField,effectivePopupTemplate:this.popupTemplate??this.defaultPopupTemplate})}readCapabilities(e,t){return t=t.layerDefinition||t,mt(t,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return!(this.loaded&&!this.capabilities?.operations.supportsEditing)&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,r){return this._readEditingEnabled(t,!0,r)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,r,i){this._writeEditingEnabled(e,t,!0,i)}get effectiveEditingEnabled(){return We(this)}get featureTitleFields(){return[...this._titleCreator.requiredFields]}readIsTable(e,t){return(t=t?.layerDefinition??t).type==="Table"||!t.geometryType}writeIsTable(e,t,r,i){i?.writeLayerSchema&&S(r,e?"Table":"Feature Layer",t)}readGlobalIdField(e,t){return ze(t.layerDefinition||t)}readObjectIdField(e,t){return Ze(t.layerDefinition||t)}get parsedUrl(){const e=se(this.url);return e!=null&&(this.dynamicDataSource!=null?e.path=P(e.path,"dynamicLayer"):this.layerId!=null&&(e.path=P(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){G(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){t=t.layerDefinition||t;const i=t.drawingInfo?.renderer;if(i){const n=Tt(i,t,r)??void 0;return n||T.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),n}return He(t,r)}set source(e){const t=this._get("source");t!==e&&(Q(t)&&this._resetMemorySource(t),Q(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof E?new f({layer:this,items:e}):e:null}readSource(e,t){const r=J.fromJSON(t.featureSet);return new f({layer:this,items:r?.features??[]})}readTemplates(e,t){const r=t.editFieldsInfo,i=r?.creatorField,n=r?.editorField;return e=e?.map(l=>k.fromJSON(l)),this._fixTemplates(e,i),this._fixTemplates(e,n),e}readTitle(e,t){const r=t.layerDefinition?.name??t.name,i=t.title||t.layerDefinition?.title;if(r){const n=this.portalItem?.title;if(this.sublayerTitleMode==="item-title")return this.url?ae(this.url,r):r;let l=r;if(!l&&this.url){const u=oe(this.url);u!=null&&(l=u.title)}return l?(this.sublayerTitleMode==="item-title-and-service-name"&&n&&n!==l&&(l=n+" - "+l),ne(l)):void 0}if(this.sublayerTitleMode==="item-title"&&i)return i}readTitleFromWebMap(e,t){return t.title||t.layerDefinition?.name}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const i=t.fields.find(n=>n.name.toLowerCase()===r);i&&(r=i.name)}return r}readTypes(e,t){e=(t=t.layerDefinition||t).types;const r=t.editFieldsInfo,i=r?.creatorField,n=r?.editorField;return e?.map(l=>(l=$.fromJSON(l),this._fixTemplates(l.templates,i),this._fixTemplates(l.templates,n),l))}readVisible(e,t){return t.layerDefinition?.defaultVisibility!=null?!!t.layerDefinition.defaultVisibility:t.visibility!=null?!!t.visibility:void 0}async addAttachment(e,t){const r=await Ue(this,e,t,y);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const i=await Ke(this,e,t,r,y);return this.lastEditsEventDate=new Date,i}async applyEdits(e,t){return Xe(this,e,t)}async uploadAssets(e,t){return Ye(this,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return It(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:t}=await le(import("./FeatureLayerSource-C3pHhoGh.js"),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=et(this);e.dynamicDataSource=this.dynamicDataSource;const t=this.subtypeCode!=null?`${this.subtypeField} = ${this.subtypeCode}`:null,r=ue(this.definitionExpression,t);return e.where=r||"1=1",e}async deleteAttachments(e,t){const r=await tt(this,e,t,y);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return rt(this,e,y)}getFeatureTitle(e,t={timeZone:"system",fetchMissingFields:!1}){return this._titleCreator.getTitle(this,e,t)}getFeatureType(e){return it(this.types,this.typeIdField,e)}getFieldDomain(e,t){return st(this,e,t,this.getField(e)?.domain??null)}async queryAttachments(e,t){return at(this,e,t,y)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(wt.from(e)??r.createQuery(),t);if(i?.features)for(const n of i.features)n.layer=n.sourceLayer=r;return i}async queryObjectIds(e,t){return(await ot(this,e,t,y)).filter(A)}async queryFeatureCount(e,t){return nt(this,e,t,y)}async queryExtent(e,t){return lt(this,e,t,y)}async queryRelatedFeatures(e,t){return ut(this,e,t,y)}async queryRelatedFeaturesCount(e,t){return pt(this,e,t,y)}async queryTopFeatures(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopFeatures||!i?.query?.supportsTopFeaturesQuery)throw new m(y,"Layer source does not support queryTopFeatures capability");const n=await import("./TopFeaturesQuery-ah1xL0yk.js"),l=await r.queryTopFeatures(n.default.from(e),t);if(l?.features)for(const u of l.features)u.layer=u.sourceLayer=this;return l}async queryAttributeBins(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryAttributeBins||!i?.operations?.supportsQueryBins)throw new m(y,"Layer source does not support queryAttributeBins capability");dt(e,i,y);const n=await import("./AttributeBinsQuery-BWOfk4XR.js"),l=await r.queryAttributeBins(n.default.from(e),t);if(l.features)for(const u of l.features)u.layer=u.sourceLayer=this;return l}async queryTopObjectIds(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopObjectIds||!i?.query.supportsTopFeaturesQuery)throw new m(y,"Layer source does not support queryTopObjectIds capability");const n=await import("./TopFeaturesQuery-ah1xL0yk.js");return(await r.queryTopObjectIds(n.default.from(e),t)).filter(A)}async queryTopFeaturesExtent(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopExtents||!i?.query?.supportsTopFeaturesQuery)throw new m(y,"Layer source does not support queryTopExtents capability");const n=await import("./TopFeaturesQuery-ah1xL0yk.js");return r.queryTopExtents(n.default.from(e),t)}async queryTopFeatureCount(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopCount||!i?.query?.supportsTopFeaturesQuery)throw new m(y,"Layer source does not support queryFeatureCount capability");const n=await import("./TopFeaturesQuery-ah1xL0yk.js");return r.queryTopCount(n.default.from(e),t)}read(e,t){const r=e.featureCollection;if((r||e.type==="Feature Collection")&&(this.resourceInfo=e),r){const i=r.layers;i&&i.length===1&&(super.read(i[0],t),r.showLegend!=null&&super.read({showLegend:r.showLegend},t))}super.read(e,t),t&&t.origin==="service"&&(this.revert(["objectIdField","fields","timeInfo","dateFieldsTimeZone"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,t){t={...t,origin:t?.origin??void 0,writeLayerSchema:t?.writeLayerSchema??this._hasMemorySource()};const{origin:r,layerContainerType:i,messages:n}=t;if(this.dynamicDataSource)return n?.push(I(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if((r==="web-map"||r==="web-scene")&&i!=="tables")return n?.push(I(this,`a table source can only be written to tables, not ${i}`)),null;if(this._hasMemorySource())return n?.push(I(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&(r==="web-map"||r==="web-scene")&&i==="tables")return n?.push(I(this,"using a non-table source cannot be written to tables in web maps or web scenes")),null;return super.write(e,t)}clone(){if(this._hasMemorySource())throw new m(y,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){return!!this.loaded&&(this.source?.type==="memory"||gt(this,e))}async save(e){return this._debouncedSaveOperations(_.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(_.SAVE_AS,t,e)}_readEditingEnabled(e,t,r){let i=e.layerDefinition?.capabilities;return i?this._hasEditingCapability(i):(i=e.capabilities,t&&r?.origin==="web-map"&&!this._hasMemorySource()&&i?this._hasEditingCapability(i):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map(t=>t.trim()).includes("editing")}_writeEditingEnabled(e,t,r,i){if(!e){const n=this.capabilities?.operations?.supportsSync?"Query,Sync":"Query";S("layerDefinition.capabilities",n,t),r&&!i?.writeLayerSchema&&(t.capabilities=n)}}_fetchFirstValidLayerId(e){return pe(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t=>{const r=t.data;if(r)return this.findFirstValidLayerId(r)})}async initLayerProperties(e){return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),G(this.renderer,this.fieldsIndex),de(this.timeInfo,this.fieldsIndex),this._hasMemorySource()&&this.geometryType==="mesh"&&(this.capabilities.query.supportsReturnMesh=!0),Ft(this,{origin:"service"})}async hasDataChanged(){return yt(this)}async fetchPublishingStatus(){const e=this.source;return e?.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||e.search(/\/FeatureServer\//i)!==-1||this.fields?.some(t=>t.type==="geometry")||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,t){e&&e.forEach(r=>{const i=r.prototype?.attributes;i&&t&&delete i[t]})}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new m("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new m("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach(t=>{t.layer=this,t.sourceLayer=this}),this.addHandles([e.on("after-add",t=>{t.item.layer=this,t.item.sourceLayer=this}),e.on("after-remove",t=>{t.item.layer=null,t.item.sourceLayer=null})],"fl-source")}_resetMemorySource(e){e.forEach(t=>{t.layer=null,t.sourceLayer=null}),this.removeHandles("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}findFirstValidLayerId(e){return Array.isArray(e.layers)&&e.layers.length>0?e.layers[0].id:Array.isArray(e.tables)&&e.tables.length>0?e.tables[0].id:void 0}};s([o({clonable:!1,readOnly:!0})],a.prototype,"_titleCreator",null),s([o(Ge)],a.prototype,"attributeTableTemplate",void 0),s([d("service","capabilities")],a.prototype,"readCapabilities",null),s([o({json:{origins:{"web-scene":{write:!1}},write:!0}})],a.prototype,"charts",void 0),s([o({readOnly:!0})],a.prototype,"createQueryVersion",null),s([o({json:{read:{source:"layerDefinition.copyrightText"}}})],a.prototype,"copyright",void 0),s([o({json:{read:{source:"layerDefinition.displayField"}}})],a.prototype,"displayField",void 0),s([o({types:ye,readOnly:!0})],a.prototype,"defaultSymbol",void 0),s([o({type:vt})],a.prototype,"dynamicDataSource",void 0),s([o({type:Boolean})],a.prototype,"editingEnabled",null),s([d(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],a.prototype,"readEditingEnabled",null),s([d("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],a.prototype,"readEditingEnabledFromWebMap",null),s([D(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],a.prototype,"writeEditingEnabled",null),s([D("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],a.prototype,"writeEditingEnabledToWebMap",null),s([o({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),s([o({clonable:!1,readOnly:!0})],a.prototype,"featureTitleFields",null),s([o({...j.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:M}}}}})],a.prototype,"fields",void 0),s([o(j.fieldsIndex)],a.prototype,"fieldsIndex",void 0),s([o({type:ge,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"formTemplate",void 0),s([o({json:{read:{source:"layerDefinition.extent"}}})],a.prototype,"fullExtent",void 0),s([o({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:M,writer(e,t,r){const i=e?V.toJSON(e):null;i&&S(r,i,t)}}}},read:{source:"layerDefinition.geometryType",reader:V.read}}})],a.prototype,"geometryType",void 0),s([o({json:{read:{source:"layerDefinition.hasM"}}})],a.prototype,"hasM",void 0),s([o({json:{read:{source:"layerDefinition.hasZ"}}})],a.prototype,"hasZ",void 0),s([o(Ae)],a.prototype,"id",void 0),s([o({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],a.prototype,"infoFor3D",void 0),s([o({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],a.prototype,"isTable",void 0),s([d("service","isTable",["type","geometryType"]),d("isTable",["layerDefinition.type","layerDefinition.geometryType"])],a.prototype,"readIsTable",null),s([D("web-map","isTable")],a.prototype,"writeIsTable",null),s([o(Ne)],a.prototype,"labelsVisible",void 0),s([o({type:[ct],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:q,write:!1},"web-scene":{name:"layerDefinition.drawingInfo.labelingInfo",read:q,write:{enabled:!0,layerContainerTypes:C}}},name:"layerDefinition.drawingInfo.labelingInfo",read:q,write:!0}})],a.prototype,"labelingInfo",void 0),s([o((()=>{const e=O(Je);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(t,r,i){S(i,ce(t),r)}}},e})())],a.prototype,"opacity",void 0),s([o(Ve)],a.prototype,"legendEnabled",void 0),s([o({type:["show","hide"],json:(()=>{const e=O(ke.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],a.prototype,"listMode",void 0),s([d("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],a.prototype,"readGlobalIdField",null),s([o({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:M}}}}})],a.prototype,"objectIdField",void 0),s([d("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],a.prototype,"readObjectIdField",null),s([o({type:["ArcGISFeatureLayer"],json:{write:{target:"layerType",ignoreOrigin:!0,layerContainerTypes:C}}})],a.prototype,"operationalLayerType",void 0),s([o(j.outFields)],a.prototype,"outFields",void 0),s([o({readOnly:!0})],a.prototype,"parsedUrl",null),s([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),s([o($e)],a.prototype,"popupEnabled",void 0),s([o({type:he,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),s([o({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),s([o({types:St,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:_t,name:"layerDefinition.drawingInfo.renderer",write:{layerContainerTypes:C,overridePolicy:(e,t,r)=>({ignoreOrigin:r?.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,r)=>({ignoreOrigin:r?.writeLayerSchema})}}})],a.prototype,"renderer",null),s([d("service","renderer",["drawingInfo.renderer","defaultSymbol"]),d("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],a.prototype,"readRenderer",null),s([o()],a.prototype,"resourceInfo",void 0),s([o((()=>{const e=O(Qe);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],a.prototype,"screenSizePerspectiveEnabled",void 0),s([o({clonable:!1})],a.prototype,"source",null),s([me("source")],a.prototype,"castSource",null),s([d("portal-item","source",["featureSet"]),d("web-map","source",["featureSet"])],a.prototype,"readSource",null),s([o({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],a.prototype,"spatialReference",void 0),s([o({type:Number})],a.prototype,"subtypeCode",void 0),s([o({type:[k]})],a.prototype,"templates",void 0),s([d("templates",["editFieldsInfo","creatorField","editorField","templates"])],a.prototype,"readTemplates",null),s([o({type:ft})],a.prototype,"timeInfo",void 0),s([o()],a.prototype,"title",void 0),s([d("service","title",["name"]),d("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],a.prototype,"readTitle",null),s([d("web-map","title",["layerDefinition.name","title"])],a.prototype,"readTitleFromWebMap",null),s([o({type:String})],a.prototype,"sublayerTitleMode",void 0),s([o({json:{read:!1}})],a.prototype,"type",void 0),s([o({type:String})],a.prototype,"typeIdField",void 0),s([d("service","typeIdField"),d("typeIdField",["layerDefinition.typeIdField"])],a.prototype,"readTypeIdField",null),s([o({type:[$]})],a.prototype,"types",void 0),s([d("service","types",["types"]),d("types",["layerDefinition.types"])],a.prototype,"readTypes",null),s([o({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],a.prototype,"visible",void 0),s([d("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],a.prototype,"readVisible",null),a=s([F("esri.layers.FeatureLayer")],a);const qt=a;export{qt as default};
