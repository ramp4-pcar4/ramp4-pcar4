import{q as i,u as r,C as d,f as v,dD as w,aw as S,b1 as O,z as F,dm as b,a0 as I,D as q,J as N,I as _,s as c}from"./main-DVcB5zI_.js";import J from"./FeatureLayer-mDzsZGKG.js";import{p as C}from"./workers-CY8xHZs2.js";import{d as P}from"./FeatureSet-kItFYqY4.js";import{y as j}from"./clientSideDefaults-B0aLP15N.js";import{b as l}from"./Query-5sYd3NzA.js";import"./preload-helper-ExcqyqRp.js";import"./UniqueValueRenderer-erKJvNm9.js";import"./RendererLegendOptions-DosgVXrF.js";import"./diffUtils-DtX_28hR.js";import"./colorRamps-iaXTnS71.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-YxojuFr9.js";import"./compilerUtils-rS1KC4Oo.js";import"./lengthUtils-DIjFTxPc.js";import"./styleUtils-d60Lub9w.js";import"./jsonUtils-B-0OvQZC.js";import"./LRUCache-BWNn7yXO.js";import"./Version-DmQ6ASes.js";import"./FieldsIndex-BqGmfyQl.js";import"./UnknownTimeZone-B5Y7Jezq.js";import"./OverrideHelper-DWBoxH_i.js";import"./colorUtils-ChXtBi7-.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-HkuvLbsQ.js";import"./heatmapUtils-D-_zNk3H.js";import"./MultiOriginJSONSupport-BD1AQJoB.js";import"./commonProperties-CH-xlvIp.js";import"./ElevationInfo-DC7gItuo.js";import"./FeatureLayerBase-3pv7RnWh.js";import"./Field-BdhLPXiD.js";import"./fieldType-CvjC4q_e.js";import"./HeightModelInfo-Dd2gdcVw.js";import"./arcgisLayerUrl-euAJ5jxV.js";import"./featureLayerUtils-lAty8YQv.js";import"./uuid-Cl5lrJ4c.js";import"./RelationshipQuery-CQ2tToiu.js";import"./LayerFloorInfo-CIcOpdXF.js";import"./Relationship-Dzcs2kUm.js";import"./serviceCapabilitiesUtils-BAC3VZ8C.js";import"./Layer-cAwBsVeK.js";import"./TimeExtent-BMnBstjf.js";import"./editsZScale-DtNR_kn9.js";import"./queryZScale-5NWWGPkz.js";import"./projection-DjziTCz4.js";import"./projectBuffer-B7AMRl4P.js";import"./APIKeyMixin-BORp1zaL.js";import"./ArcGISService-CELu0GWQ.js";import"./BlendLayer-C_WbNhWy.js";import"./jsonUtils-YucLMR5u.js";import"./parser-ECfG-EPz.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CP7NBZcJ.js";import"./CustomParametersMixin-Nb9zgxH1.js";import"./EditBusLayer-CC3SCrAT.js";import"./FeatureEffectLayer-BnUEpWq3.js";import"./FeatureEffect-ByhaQbcP.js";import"./FeatureFilter-DsnQ8TrA.js";import"./FeatureReductionLayer-B-3hDyVz.js";import"./FeatureReductionSelection-Bgaw-LjE.js";import"./labelingInfo-DdXrMeoI.js";import"./labelUtils-CPaUXkM9.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-CdwvZPSg.js";import"./OrderedLayer-YnJ4wlj4.js";import"./OrderByInfo-CYLBfz7l.js";import"./PortalLayer-60r_oabj.js";import"./PortalItem-CptTE56-.js";import"./portalItemUtils-DIbhp7Hv.js";import"./RefreshableLayer-Caaf6VZs.js";import"./ScaleRangeLayer-C00QmDu0.js";import"./TemporalLayer-BSSB--rh.js";import"./TimeInfo-uLaCwFtB.js";import"./FeatureTemplate-BjlUbPbN.js";import"./FeatureType-D2SKIlqJ.js";import"./fieldProperties-BdGbJT4k.js";import"./versionUtils-B8ibocrf.js";import"./styleUtils-B2tKF_u5.js";import"./popupUtils-CT6o82CV.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-Y9lFlGVh.js";let n=class extends v{constructor(t){super(t),this.type="csv",this.refresh=w(async e=>{await this.load();const{extent:s,timeExtent:a}=await this._connection.invoke("refresh",e);return s&&(this.sourceJSON.extent=s),a&&(this.sourceJSON.timeInfo.timeExtent=[a.start,a.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const s=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return P.fromJSON(s)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const s=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:s.count,extent:S.fromJSON(s.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await C("CSVSourceWorker",{strategy:O("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:s,fields:a,latitudeField:m,longitudeField:h,spatialReference:y,timeInfo:f}=this.loadOptions,p=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:s,fields:a?.map(g=>g.toJSON()),latitudeField:m,longitudeField:h,spatialReference:y?.toJSON(),timeInfo:f?.toJSON()}},{signal:t});this.locationInfo=p.locationInfo,this.sourceJSON=p.layerDefinition,this.delimiter=p.delimiter}};i([r()],n.prototype,"type",void 0),i([r()],n.prototype,"loadOptions",void 0),i([r()],n.prototype,"customParameters",void 0),i([r()],n.prototype,"locationInfo",void 0),i([r()],n.prototype,"sourceJSON",void 0),i([r()],n.prototype,"delimiter",void 0),n=i([d("esri.layers.graphics.sources.CSVSource")],n);function u(t,e){throw new c(e,`CSVLayer (title: ${t.title}, id: ${t.id}) cannot be saved to a portal item`)}let o=class extends J{constructor(...t){super(...t),this.geometryType="point",this.capabilities=j(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=q.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}load(t){const e=t!=null?t.signal:null,s=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(N).then(async()=>this.initLayerProperties(await this.createGraphicsSource(e)));return this.addResolvingPromise(s),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(t,e){return e.showLabels!=null?e.showLabels:!!e.layerDefinition?.drawingInfo?.labelingInfo}set url(t){if(!t)return void this._set("url",t);const e=_(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new n({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(l.from(t)||this.createQuery())).then(s=>{if(s?.features)for(const a of s.features)a.layer=a.sourceLayer=this;return s})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(l.from(t)||this.createQuery()))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(l.from(t)||this.createQuery()))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(l.from(t)||this.createQuery()))}read(t,e){super.read(t,e),e&&e.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new c("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(t){return u(this,"csv-layer:save")}async saveAs(t,e){return u(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return e!=null&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};i([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",void 0),i([r({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],o.prototype,"delimiter",void 0),i([r({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0),i([r({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],o.prototype,"fields",void 0),i([r({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),i([F("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],o.prototype,"readWebMapLabelsVisible",null),i([r({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"latitudeField",void 0),i([r({type:["show","hide"]})],o.prototype,"listMode",void 0),i([r({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"locationType",void 0),i([r({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"longitudeField",void 0),i([r({type:["CSV"]})],o.prototype,"operationalLayerType",void 0),i([r()],o.prototype,"outFields",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],o.prototype,"path",void 0),i([r({json:{read:!1},cast:null,type:n,readOnly:!0})],o.prototype,"source",void 0),i([r({json:{read:!1},value:"csv",readOnly:!0})],o.prototype,"type",void 0),i([r({json:{read:b,write:{isRequired:!0,ignoreOrigin:!0,writer:I}}})],o.prototype,"url",null),o=i([d("esri.layers.CSVLayer")],o);const de=o;export{de as default};
