import{B as t,D as i,N as I,o as N,e7 as U,bB as R,s as E,cU as h,dH as J,a_ as k,n as W,av as Y,O as C,fI as O,aY as X,aX as D,I as H,G as L,bv as f,b9 as Q}from"./main-Bd_03BNf.js";import{S as z}from"./MultiOriginJSONSupport-DOEjhxQE.js";import{f as B}from"./Layer-B_8fSKRa.js";import{p as G}from"./workers-D0YzKp_C.js";import{y as V,u as A}from"./clientSideDefaults-O7xS58Ds.js";import{v as Z,W as M,z as K,Y as ee,S as te}from"./wfsUtils-CqH_6S4p.js";import{c as re}from"./AttributeBinsFeatureSet-mvTXMq_k.js";import{d as ie}from"./FeatureSet-B1jt7t9c.js";import{p as oe}from"./BlendLayer-DNBmjvVl.js";import{e as se}from"./CustomParametersMixin-UMZfuOkm.js";import{a as ae}from"./DisplayFilteredLayer-MjiLi9nk.js";import{c as ne}from"./FeatureEffectLayer-BxIhj6V6.js";import{d as pe}from"./FeatureReductionLayer-BnUrrLnh.js";import{b as le}from"./OperationalLayer-B2LTVkje.js";import{p as me}from"./OrderedLayer-BmfRfMMl.js";import{j as de}from"./PortalLayer-C-3Zw6U3.js";import{f as ue}from"./RefreshableLayer-CBCa2vxd.js";import{t as ye}from"./ScaleRangeLayer-DAbO2VId.js";import{l as ce}from"./TemporalLayer-DskAELqV.js";import{e as fe}from"./TrackableLayer-Do-GSGME.js";import{c as he,p as ge,d as we,b as ve,l as Fe,s as be,y as xe}from"./commonProperties-CEs0Ky5d.js";import{y as T}from"./Field-B-OaXgog.js";import{s as Oe}from"./fieldProperties-aDT-silQ.js";import{C as Se,n as Ie}from"./labelingInfo-GHjRB16i.js";import{m as Re,u as Ce}from"./typeUtils-iA9c0A8r.js";import{b as y}from"./Query-DSV16ZVi.js";import{p as Te}from"./popupUtils-DxkBDtEv.js";import{a as $e}from"./timeZoneUtils-uYx9Jdvq.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-BP_n2IvP.js";import"./Queue-1pevTxSO.js";import"./intl-BvarHTsY.js";import"./QueryEngineCapabilities-DZTubngj.js";import"./projection-B5J11HCw.js";import"./projectBuffer-0UYQHA4x.js";import"./geojson-BxIAVqpU.js";import"./date-Dw3OHnFv.js";import"./OptimizedFeature-hEosLSoO.js";import"./memoryEstimations-C-4wPzbe.js";import"./xmlUtils-CtUoQO7q.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-DLufH0sT.js";import"./parser-C-4pkZvD.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BPDfjts0.js";import"./common-DQOJ18NT.js";import"./scaleUtils-CqCO3s8f.js";import"./uuid-Cl5lrJ4c.js";import"./displayFilterUtils-BGbU5U7W.js";import"./FeatureEffect-C55G72iL.js";import"./FeatureFilter-CM9S8DkM.js";import"./fieldType-C08bO76G.js";import"./FeatureReductionSelection-C0oxqhiC.js";import"./jsonUtils-D32xXNDj.js";import"./ClassBreaksRenderer-CMiIT6h0.js";import"./commonProperties-CECHKmuC.js";import"./colorRamps-BpFFyVXK.js";import"./ColorStop-CN-R_Zb9.js";import"./visualVariableUtils-BVDpaSXh.js";import"./lengthUtils-Cym5f2xe.js";import"./RendererLegendOptions-BuqY8-Xh.js";import"./LRUCache-k4-1Y9qe.js";import"./MemCache-Cs6lXDo9.js";import"./Version-F4yB_eqJ.js";import"./FieldsIndex-BXXEK-VJ.js";import"./utils-CpVI5HFh.js";import"./defaultCIMValues--PXB5pEO.js";import"./enums-CD-fX3vU.js";import"./heatmapUtils-C7zJgPjG.js";import"./vec42-CKs01hkn.js";import"./vec4f64-o2zAXfmz.js";import"./SimpleRenderer-BVRjLh5u.js";import"./UniqueValueRenderer-Qisk8KVs.js";import"./styleUtils-DTK14api.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-UKY-U636.js";import"./PortalItem-B9-2VYN_.js";import"./portalItemUtils-0y-D9XpA.js";import"./TimeInfo-yr9Unxbt.js";import"./ElevationInfo-DnuPtDzp.js";import"./RelationshipQuery-CbxohgaV.js";import"./NormalizationBinParametersMixin-BqDXhOsQ.js";import"./labelUtils-Csa7b8E6.js";let m=class extends N{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=V(!1,!1),this.type="wfs",this.refresh=U(async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:r}=await this._workerHandler.refresh(e);return r&&(this.sourceJSON.extent=r),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,r={}){const s=await this.queryFeaturesJSON(e,r);return ie.fromJSON(s)}async queryFeaturesJSON(e,r={}){return await this.load(r),this._workerHandler.queryFeatures(e?e.toJSON():void 0,r)}async queryFeatureCount(e,r={}){return await this.load(r),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,r)}async queryObjectIds(e,r={}){return await this.load(r),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,r)}async queryExtent(e,r={}){await this.load(r);const s=await this._workerHandler.queryExtent(e?e.toJSON():void 0,r);return{count:s.count,extent:R.fromJSON(s.extent)}}async querySnapping(e,r={}){return await this.load(r),this._workerHandler.querySnapping(e,r)}async queryAttributeBins(e,r={}){await this.load(r);const s=await this._workerHandler.queryAttributeBins(e?.toJSON(),r);return re.fromJSON(s)}async _createLoadOptions(e){const{url:r,customParameters:s,name:n,namespaceUri:p,fields:a,geometryType:d,maxRecordCount:u,maxPageCount:g,maxTotalRecordCount:w,swapXY:v}=this.layer,c=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!r)throw new E("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await Z(r,{customParameters:s,...e}));const $=["fields","geometryType","name","namespaceUri","swapXY"].some(F=>this.layer[F]==null),l=$?await M(this.wfsCapabilities,n,p,{spatialReference:c,customParameters:s,signal:e?.signal}):{...K(a??[]),geometryType:d,name:n,namespaceUri:p,spatialReference:c,swapXY:v},P=ee(this.wfsCapabilities.readFeatureTypes(),l.name,l.namespaceUri),j=h.toJSON(l.geometryType),{operations:x}=this.wfsCapabilities,q=x.GetFeature.url,_=x.GetFeature.outputFormat;return{customParameters:s,featureType:P,fields:l.fields?.map(F=>F.toJSON())??[],geometryField:l.geometryField,geometryType:j,getFeatureUrl:q,getFeatureOutputFormat:_,maxRecordCount:u,maxPageCount:g,maxTotalRecordCount:w,objectIdField:l.objectIdField,spatialReference:l.spatialReference?.toJSON(),swapXY:!!l.swapXY}}async _startWorker(e){const[r,s]=await J([this._createLoadOptions(e),G("WFSSourceWorker",{...e,strategy:k("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=r.error||s.error||null,p=s.value||null;if(n)throw p&&p.close(),n;const a=r.value;this._connection=s.value,this._workerHandler=this._connection.createInvokeProxy();const d=await this._workerHandler.load(a,e);for(const u of d.warnings)W.getLogger(this.layer).warn("#load()",`${u.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:u});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:Y},extent:d.extent,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:A(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:a.maxRecordCount,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([i()],m.prototype,"capabilities",void 0),t([i({constructOnly:!0})],m.prototype,"layer",void 0),t([i()],m.prototype,"sourceJSON",void 0),t([i()],m.prototype,"type",void 0),t([i()],m.prototype,"wfsCapabilities",void 0),m=t([I("esri.layers.graphics.sources.WFSSource")],m);var b;const S=Oe();let o=b=class extends me(ae(se(pe(ne(oe(ce(fe(ue(ye(le(de(z(B))))))))))))){static fromWFSLayerInfo(e){const{customParameters:r,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:d,objectIdField:u,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c}=e;return new b({customParameters:r,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:d,objectIdField:u,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new m({layer:this}),this.spatialReference=C.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),O(this.renderer,this.fieldsIndex),X(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,s){const n=e.filter(p=>p.name!==te);this.geometryField&&n.unshift(new T({name:this.geometryField,alias:this.geometryField,type:"geometry"})),D(s,n.map(p=>p.toJSON()),r)}get parsedUrl(){return H(this.url)}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){return this.source?.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return Te(this,e)}createQuery(){const e=new y({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:r,timeExtent:s}=this;return e.timeExtent=r!=null&&s!=null?s.offset(-r.value,r.unit):s||null,e}getFieldDomain(e,r){return this.getField(e)?.domain}getField(e){return this.fieldsIndex?.get(e)}queryFeatures(e,r){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),r)).then(s=>{if(s?.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,r){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),r))}queryFeatureCount(e,r){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),r))}queryExtent(e,r){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),r))}async hasDataChanged(){try{const{dataChanged:e,updates:r}=await this.source.refresh();return r!=null&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([i({readOnly:!0})],o.prototype,"capabilities",null),t([i({type:String})],o.prototype,"copyright",void 0),t([i({readOnly:!0})],o.prototype,"createQueryVersion",null),t([i({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],o.prototype,"customParameters",void 0),t([i($e("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),t([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([i({type:String})],o.prototype,"displayField",void 0),t([i(he)],o.prototype,"elevationInfo",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"featureUrl",void 0),t([i({type:[T],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),t([L("fields")],o.prototype,"writeFields",null),t([i(S.fieldsIndex)],o.prototype,"fieldsIndex",void 0),t([i({type:R,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),t([i()],o.prototype,"geometryField",void 0),t([i({type:String,json:{read:{source:"layerDefinition.geometryType",reader:h.read},write:{target:"layerDefinition.geometryType",writer:h.write,ignoreOrigin:!0},origins:{service:{read:h.read}}}})],o.prototype,"geometryType",void 0),t([i({type:String})],o.prototype,"id",void 0),t([i(ge)],o.prototype,"labelsVisible",void 0),t([i({type:[Se],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ie},write:!0}})],o.prototype,"labelingInfo",void 0),t([i(we)],o.prototype,"legendEnabled",void 0),t([i({type:["show","hide"]})],o.prototype,"listMode",void 0),t([i({type:String})],o.prototype,"objectIdField",void 0),t([i({type:["WFS"]})],o.prototype,"operationalLayerType",void 0),t([i({type:f,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"maxRecordCount",void 0),t([i({type:f})],o.prototype,"maxPageCount",void 0),t([i({type:f})],o.prototype,"maxTotalRecordCount",void 0),t([i({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],o.prototype,"mode",void 0),t([i({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"name",void 0),t([i({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"namespaceUri",void 0),t([i(ve)],o.prototype,"opacity",void 0),t([i(S.outFields)],o.prototype,"outFields",void 0),t([i({readOnly:!0})],o.prototype,"parsedUrl",null),t([i(Fe)],o.prototype,"popupEnabled",void 0),t([i({type:Q,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),t([i({types:Re,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:Ce,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],o.prototype,"renderer",null),t([i(be)],o.prototype,"screenSizePerspectiveEnabled",void 0),t([i({readOnly:!0})],o.prototype,"source",void 0),t([i({type:C,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],o.prototype,"spatialReference",void 0),t([i({readOnly:!0,type:[f],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"spatialReferences",void 0),t([i({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"swapXY",void 0),t([i({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],o.prototype,"title",void 0),t([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([i(xe)],o.prototype,"url",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"version",void 0),t([i()],o.prototype,"wfsCapabilities",null),o=b=t([I("esri.layers.WFSLayer")],o);const sr=o;export{sr as default};
