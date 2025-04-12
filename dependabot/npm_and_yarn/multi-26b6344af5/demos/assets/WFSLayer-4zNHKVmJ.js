import{o as _,e7 as U,bB as I,s as E,cU as h,dH as J,a$ as k,n as W,av as Y,H as t,J as i,N as R,O as C,fM as O,aY as H,aX as X,I as D,K as L,bv as f,b9 as Q}from"./main-Cv8ITM2j.js";import{S as z}from"./MultiOriginJSONSupport-CtsATS64.js";import{f as V}from"./Layer-CVn99KK7.js";import{p as A}from"./workers-BXKSmjkC.js";import{y as B,u as G}from"./clientSideDefaults-BkT99ofo.js";import{v as Z,W as M,z as K,Y as ee,S as te}from"./wfsUtils-Dh39HYwQ.js";import{c as re}from"./AttributeBinsFeatureSet-CkkDcjjt.js";import{d as ie}from"./FeatureSet-BL4IzOhW.js";import{p as oe}from"./BlendLayer-BlUOZnIK.js";import{e as se}from"./CustomParametersMixin-Cg-AR1gR.js";import{a as ae}from"./DisplayFilteredLayer-DcK08gNE.js";import{c as ne}from"./FeatureEffectLayer-Clt2cCAw.js";import{d as pe}from"./FeatureReductionLayer-v8T_k49s.js";import{b as le}from"./OperationalLayer-D1cLfmBd.js";import{p as ue}from"./OrderedLayer-DkCLqhXA.js";import{j as me}from"./PortalLayer-DYpNTE1E.js";import{f as de}from"./RefreshableLayer-9GjajGR6.js";import{t as ye}from"./ScaleRangeLayer-DD2_yhdp.js";import{l as ce}from"./TemporalLayer-BgA-pMFb.js";import{e as fe}from"./TrackableLayer-BmRh6yGy.js";import{c as he,p as ge,d as we,b as ve,l as Fe,s as be,y as xe}from"./commonProperties-BKS4jiR6.js";import{y as T}from"./Field-DCT5wy9q.js";import{s as Oe}from"./fieldProperties-1nt-Chxy.js";import{n as Se,C as Ie}from"./labelingInfo-B30Q-eKj.js";import{u as Re,m as Ce}from"./typeUtils-BMBzr8CO.js";import{b as y}from"./Query-CsgMbHO2.js";import{p as Te}from"./popupUtils-DhnWfJwL.js";import{a as $e}from"./timeZoneUtils-DBnpKbsS.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-CmJt7e8T.js";import"./Queue-CEzF52XX.js";import"./intl-Dh2ocpt9.js";import"./QueryEngineCapabilities-B_pTbIiR.js";import"./projection-DALJEM5z.js";import"./projectBuffer-C3I4aBT7.js";import"./geojson-CPDCGj5r.js";import"./date-DCujAECq.js";import"./OptimizedFeature-CzoD-uoX.js";import"./memoryEstimations-mpuvLg4e.js";import"./xmlUtils-CtUoQO7q.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-CX527-Zb.js";import"./parser-OujP_0wM.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-B2F2AQse.js";import"./common-DQOJ18NT.js";import"./scaleUtils-DO2I8oTt.js";import"./uuid-Cl5lrJ4c.js";import"./displayFilterUtils-DV6oSa_l.js";import"./FeatureEffect-BETs4I3U.js";import"./FeatureFilter-CUuUx3CR.js";import"./fieldType-DVp6Pqrh.js";import"./FeatureReductionSelection-BmXh0F6M.js";import"./jsonUtils-BH3qX-2M.js";import"./ClassBreaksRenderer-2W1Kh8Y9.js";import"./commonProperties-Cg3MWk_D.js";import"./colorRamps-CNh9vbSE.js";import"./ColorStop-CMaiiwnX.js";import"./visualVariableUtils-Wo4FvR6P.js";import"./lengthUtils-BjSb-BVP.js";import"./RendererLegendOptions-CP1sF6uT.js";import"./LRUCache-vJ6pZFyB.js";import"./MemCache-BwHUdS30.js";import"./Version-Dt037r9d.js";import"./FieldsIndex-CS8aaAev.js";import"./utils-C4BJKUbo.js";import"./defaultCIMValues-DVvrNSWP.js";import"./enums-BQDXKJnw.js";import"./heatmapUtils-Bj-8Lsyb.js";import"./vec42-CKs01hkn.js";import"./vec4f64-o2zAXfmz.js";import"./SimpleRenderer-CvaQ_K89.js";import"./UniqueValueRenderer-DMs4b4oP.js";import"./styleUtils-C7y5-Al8.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-BoXa7N8S.js";import"./PortalItem-auRHFq7R.js";import"./portalItemUtils-B5PDao5z.js";import"./TimeInfo-C3kYwiZZ.js";import"./ElevationInfo-CFzKWoUt.js";import"./RelationshipQuery-C90Rioio.js";import"./NormalizationBinParametersMixin-CqIPPGlD.js";import"./labelUtils-kgbpELdv.js";let u=class extends _{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=B(!1,!1),this.type="wfs",this.refresh=U(async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:r}=await this._workerHandler.refresh(e);return r&&(this.sourceJSON.extent=r),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,r={}){const s=await this.queryFeaturesJSON(e,r);return ie.fromJSON(s)}async queryFeaturesJSON(e,r={}){return await this.load(r),this._workerHandler.queryFeatures(e?e.toJSON():void 0,r)}async queryFeatureCount(e,r={}){return await this.load(r),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,r)}async queryObjectIds(e,r={}){return await this.load(r),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,r)}async queryExtent(e,r={}){await this.load(r);const s=await this._workerHandler.queryExtent(e?e.toJSON():void 0,r);return{count:s.count,extent:I.fromJSON(s.extent)}}async querySnapping(e,r={}){return await this.load(r),this._workerHandler.querySnapping(e,r)}async queryAttributeBins(e,r={}){await this.load(r);const s=await this._workerHandler.queryAttributeBins(e?.toJSON(),r);return re.fromJSON(s)}async _createLoadOptions(e){const{url:r,customParameters:s,name:n,namespaceUri:p,fields:a,geometryType:m,maxRecordCount:d,maxPageCount:g,maxTotalRecordCount:w,swapXY:v}=this.layer,c=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!r)throw new E("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await Z(r,{customParameters:s,...e}));const $=["fields","geometryType","name","namespaceUri","swapXY"].some(F=>this.layer[F]==null),l=$?await M(this.wfsCapabilities,n,p,{spatialReference:c,customParameters:s,signal:e?.signal}):{...K(a??[]),geometryType:m,name:n,namespaceUri:p,spatialReference:c,swapXY:v},P=ee(this.wfsCapabilities.readFeatureTypes(),l.name,l.namespaceUri),j=h.toJSON(l.geometryType),{operations:x}=this.wfsCapabilities,q=x.GetFeature.url,N=x.GetFeature.outputFormat;return{customParameters:s,featureType:P,fields:l.fields?.map(F=>F.toJSON())??[],geometryField:l.geometryField,geometryType:j,getFeatureUrl:q,getFeatureOutputFormat:N,maxRecordCount:d,maxPageCount:g,maxTotalRecordCount:w,objectIdField:l.objectIdField,spatialReference:l.spatialReference?.toJSON(),swapXY:!!l.swapXY}}async _startWorker(e){const[r,s]=await J([this._createLoadOptions(e),A("WFSSourceWorker",{...e,strategy:k("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=r.error||s.error||null,p=s.value||null;if(n)throw p&&p.close(),n;const a=r.value;this._connection=s.value,this._workerHandler=this._connection.createInvokeProxy();const m=await this._workerHandler.load(a,e);for(const d of m.warnings)W.getLogger(this.layer).warn("#load()",`${d.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:d});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:Y},extent:m.extent,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:G(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:a.maxRecordCount,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([i()],u.prototype,"capabilities",void 0),t([i({constructOnly:!0})],u.prototype,"layer",void 0),t([i()],u.prototype,"sourceJSON",void 0),t([i()],u.prototype,"type",void 0),t([i()],u.prototype,"wfsCapabilities",void 0),u=t([R("esri.layers.graphics.sources.WFSSource")],u);var b;const S=Oe();let o=b=class extends ue(ae(se(pe(ne(oe(ce(fe(de(ye(le(me(z(V))))))))))))){static fromWFSLayerInfo(e){const{customParameters:r,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:m,objectIdField:d,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c}=e;return new b({customParameters:r,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:m,objectIdField:d,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new u({layer:this}),this.spatialReference=C.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),O(this.renderer,this.fieldsIndex),H(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,s){const n=e.filter(p=>p.name!==te);this.geometryField&&n.unshift(new T({name:this.geometryField,alias:this.geometryField,type:"geometry"})),X(s,n.map(p=>p.toJSON()),r)}get parsedUrl(){return D(this.url)}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){return this.source?.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return Te(this,e)}createQuery(){const e=new y({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:r,timeExtent:s}=this;return e.timeExtent=r!=null&&s!=null?s.offset(-r.value,r.unit):s||null,e}getFieldDomain(e,r){return this.getField(e)?.domain}getField(e){return this.fieldsIndex?.get(e)}queryFeatures(e,r){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),r)).then(s=>{if(s?.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,r){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),r))}queryFeatureCount(e,r){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),r))}queryExtent(e,r){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),r))}async hasDataChanged(){try{const{dataChanged:e,updates:r}=await this.source.refresh();return r!=null&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([i({readOnly:!0})],o.prototype,"capabilities",null),t([i({type:String})],o.prototype,"copyright",void 0),t([i({readOnly:!0})],o.prototype,"createQueryVersion",null),t([i({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],o.prototype,"customParameters",void 0),t([i($e("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),t([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([i({type:String})],o.prototype,"displayField",void 0),t([i(he)],o.prototype,"elevationInfo",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"featureUrl",void 0),t([i({type:[T],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),t([L("fields")],o.prototype,"writeFields",null),t([i(S.fieldsIndex)],o.prototype,"fieldsIndex",void 0),t([i({type:I,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),t([i()],o.prototype,"geometryField",void 0),t([i({type:String,json:{read:{source:"layerDefinition.geometryType",reader:h.read},write:{target:"layerDefinition.geometryType",writer:h.write,ignoreOrigin:!0},origins:{service:{read:h.read}}}})],o.prototype,"geometryType",void 0),t([i({type:String})],o.prototype,"id",void 0),t([i(ge)],o.prototype,"labelsVisible",void 0),t([i({type:[Ie],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Se},write:!0}})],o.prototype,"labelingInfo",void 0),t([i(we)],o.prototype,"legendEnabled",void 0),t([i({type:["show","hide"]})],o.prototype,"listMode",void 0),t([i({type:String})],o.prototype,"objectIdField",void 0),t([i({type:["WFS"]})],o.prototype,"operationalLayerType",void 0),t([i({type:f,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"maxRecordCount",void 0),t([i({type:f})],o.prototype,"maxPageCount",void 0),t([i({type:f})],o.prototype,"maxTotalRecordCount",void 0),t([i({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],o.prototype,"mode",void 0),t([i({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"name",void 0),t([i({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"namespaceUri",void 0),t([i(ve)],o.prototype,"opacity",void 0),t([i(S.outFields)],o.prototype,"outFields",void 0),t([i({readOnly:!0})],o.prototype,"parsedUrl",null),t([i(Fe)],o.prototype,"popupEnabled",void 0),t([i({type:Q,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),t([i({types:Ce,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:Re,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],o.prototype,"renderer",null),t([i(be)],o.prototype,"screenSizePerspectiveEnabled",void 0),t([i({readOnly:!0})],o.prototype,"source",void 0),t([i({type:C,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],o.prototype,"spatialReference",void 0),t([i({readOnly:!0,type:[f],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"spatialReferences",void 0),t([i({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"swapXY",void 0),t([i({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],o.prototype,"title",void 0),t([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([i(xe)],o.prototype,"url",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"version",void 0),t([i()],o.prototype,"wfsCapabilities",null),o=b=t([R("esri.layers.WFSLayer")],o);const sr=o;export{sr as default};
