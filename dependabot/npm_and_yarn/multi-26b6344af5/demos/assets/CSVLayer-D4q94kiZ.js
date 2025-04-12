import{o as v,e7 as w,bB as S,a$ as O,H as i,J as r,N as d,O as b,Z as F,I,s as m,M as q,fL as N,dW as _}from"./main-Cv8ITM2j.js";import J from"./FeatureLayer-BOjxSObZ.js";import{p as C}from"./workers-BXKSmjkC.js";import{d as P}from"./FeatureSet-BL4IzOhW.js";import{y as j}from"./clientSideDefaults-BkT99ofo.js";import{b as l}from"./Query-CsgMbHO2.js";import"./preload-helper-ExcqyqRp.js";import"./MultiOriginJSONSupport-CtsATS64.js";import"./layerContainerType-C5CzMsLd.js";import"./FeatureLayerBase-gVJpgiZP.js";import"./Field-DCT5wy9q.js";import"./fieldType-DVp6Pqrh.js";import"./HeightModelInfo-BYKt_3WI.js";import"./commonProperties-BKS4jiR6.js";import"./ElevationInfo-CFzKWoUt.js";import"./lengthUtils-BjSb-BVP.js";import"./timeZoneUtils-DBnpKbsS.js";import"./labelingInfo-B30Q-eKj.js";import"./uuid-Cl5lrJ4c.js";import"./SimpleRenderer-CvaQ_K89.js";import"./commonProperties-Cg3MWk_D.js";import"./colorRamps-CNh9vbSE.js";import"./ColorStop-CMaiiwnX.js";import"./visualVariableUtils-Wo4FvR6P.js";import"./UniqueValueRenderer-DMs4b4oP.js";import"./defaultCIMValues-DVvrNSWP.js";import"./enums-BQDXKJnw.js";import"./RendererLegendOptions-CP1sF6uT.js";import"./styleUtils-C7y5-Al8.js";import"./RelationshipQuery-C90Rioio.js";import"./NormalizationBinParametersMixin-CqIPPGlD.js";import"./labelUtils-kgbpELdv.js";import"./LayerFloorInfo-CcNTYJXy.js";import"./Relationship-DGPgLoIT.js";import"./serviceCapabilitiesUtils-DSC70TRX.js";import"./infoFor3D-DhzudQro.js";import"./Layer-CVn99KK7.js";import"./TimeExtent-CmJt7e8T.js";import"./editsZScale-D6vkMPa7.js";import"./queryZScale-BitnRVfM.js";import"./projection-DALJEM5z.js";import"./projectBuffer-C3I4aBT7.js";import"./APIKeyMixin-CNAZIO5T.js";import"./ArcGISService-Oha5-jX9.js";import"./BlendLayer-BlUOZnIK.js";import"./jsonUtils-CX527-Zb.js";import"./parser-OujP_0wM.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-B2F2AQse.js";import"./common-DQOJ18NT.js";import"./CustomParametersMixin-Cg-AR1gR.js";import"./DisplayFilteredLayer-DcK08gNE.js";import"./scaleUtils-DO2I8oTt.js";import"./displayFilterUtils-DV6oSa_l.js";import"./EditBusLayer-Cr6GT36L.js";import"./FeatureEffectLayer-Clt2cCAw.js";import"./FeatureEffect-BETs4I3U.js";import"./FeatureFilter-CUuUx3CR.js";import"./FeatureReductionLayer-v8T_k49s.js";import"./FeatureReductionSelection-BmXh0F6M.js";import"./jsonUtils-BH3qX-2M.js";import"./typeUtils-BMBzr8CO.js";import"./ClassBreaksRenderer-2W1Kh8Y9.js";import"./LRUCache-vJ6pZFyB.js";import"./MemCache-BwHUdS30.js";import"./Version-Dt037r9d.js";import"./FieldsIndex-CS8aaAev.js";import"./utils-C4BJKUbo.js";import"./heatmapUtils-Bj-8Lsyb.js";import"./vec42-CKs01hkn.js";import"./vec4f64-o2zAXfmz.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-D1cLfmBd.js";import"./OrderedLayer-DkCLqhXA.js";import"./OrderByInfo-BoXa7N8S.js";import"./PortalLayer-DYpNTE1E.js";import"./PortalItem-auRHFq7R.js";import"./portalItemUtils-B5PDao5z.js";import"./RefreshableLayer-9GjajGR6.js";import"./ScaleRangeLayer-DD2_yhdp.js";import"./TemporalLayer-BgA-pMFb.js";import"./TimeInfo-C3kYwiZZ.js";import"./TrackableLayer-BmRh6yGy.js";import"./FeatureTemplate-Bo_PaM3R.js";import"./FeatureType-DDIvpJ-i.js";import"./fieldProperties-1nt-Chxy.js";import"./TitleCreator-DzjjgBtx.js";import"./versionUtils-DwLzuYH5.js";import"./styleUtils-DvNugFRD.js";import"./popupUtils-DhnWfJwL.js";import"./interfaces-CL2NbQte.js";import"./Queue-CEzF52XX.js";import"./intl-Dh2ocpt9.js";import"./QueryEngineCapabilities-B_pTbIiR.js";let a=class extends v{constructor(t){super(t),this.type="csv",this.refresh=w(async e=>{await this.load();const{extent:s,timeExtent:n}=await this._connection.invoke("refresh",e);return s&&(this.sourceJSON.extent=s),n&&(this.sourceJSON.timeInfo.timeExtent=[n.start,n.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const s=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return P.fromJSON(s)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const s=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:s.count,extent:S.fromJSON(s.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async queryAttributeBins(t,e={}){return await this.load(),this._connection.invoke("queryAttributeBins",t?t.toJSON():null,e)}async _startWorker(t){this._connection=await C("CSVSourceWorker",{strategy:O("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:s,fields:n,latitudeField:c,longitudeField:h,spatialReference:y,timeInfo:f}=this.loadOptions,p=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:s,fields:n?.map(g=>g.toJSON()),latitudeField:c,longitudeField:h,spatialReference:y?.toJSON(),timeInfo:f?.toJSON()}},{signal:t});this.locationInfo=p.locationInfo,this.sourceJSON=p.layerDefinition,this.delimiter=p.delimiter}};i([r()],a.prototype,"type",void 0),i([r()],a.prototype,"loadOptions",void 0),i([r()],a.prototype,"customParameters",void 0),i([r()],a.prototype,"locationInfo",void 0),i([r()],a.prototype,"sourceJSON",void 0),i([r()],a.prototype,"delimiter",void 0),a=i([d("esri.layers.graphics.sources.CSVSource")],a);function u(t,e){throw new m(e,`CSVLayer (title: ${t.title}, id: ${t.id}) cannot be saved to a portal item`)}let o=class extends J{constructor(...t){super(...t),this.geometryType="point",this.capabilities=j(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=b.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}load(t){const e=t!=null?t.signal:null,s=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(F).then(async()=>this.initLayerProperties(await this.createGraphicsSource(e)));return this.addResolvingPromise(s),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(t,e){return e.showLabels!=null?e.showLabels:!!e.layerDefinition?.drawingInfo?.labelingInfo}set url(t){if(!t)return void this._set("url",t);const e=I(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new a({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(l.from(t)||this.createQuery())).then(s=>{if(s?.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}async queryObjectIds(t,e){return await this.load(),this.source.queryObjectIds(l.from(t)||this.createQuery())}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(l.from(t)||this.createQuery()))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(l.from(t)||this.createQuery()))}read(t,e){super.read(t,e),e&&e.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new m("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(t){return u(this,"csv-layer:save")}async saveAs(t,e){return u(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return e!=null&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};i([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",void 0),i([r({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],o.prototype,"delimiter",void 0),i([r({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0),i([r({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],o.prototype,"fields",void 0),i([r({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),i([q("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],o.prototype,"readWebMapLabelsVisible",null),i([r({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"latitudeField",void 0),i([r({type:["show","hide"]})],o.prototype,"listMode",void 0),i([r({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"locationType",void 0),i([r({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"longitudeField",void 0),i([r({type:["CSV"]})],o.prototype,"operationalLayerType",void 0),i([r()],o.prototype,"outFields",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],o.prototype,"path",void 0),i([r({json:{read:!1},cast:null,type:a,readOnly:!0})],o.prototype,"source",void 0),i([r({json:{read:!1},value:"csv",readOnly:!0})],o.prototype,"type",void 0),i([r({json:{read:_,write:{isRequired:!0,ignoreOrigin:!0,writer:N}}})],o.prototype,"url",null),o=i([d("esri.layers.CSVLayer")],o);const ve=o;export{ve as default};
