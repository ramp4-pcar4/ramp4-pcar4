import{k as r,o as i,A as m,e as _,dA as j,au as f,s as g,bC as J,a$ as N,cB as v,n as b,B as F,G as R,f0 as O,aZ as T,I,bo as q,b4 as P}from"./main-kpG51UWM.js";import"./UniqueValueRenderer-fS5V0Ej1.js";import{m as k,u as D}from"./jsonUtils-C64Zfu7c.js";import{S as G}from"./MultiOriginJSONSupport-DKRh9P6w.js";import{f as Z}from"./Layer-ChoECxvZ.js";import{p as C}from"./workers-PiCjreoO.js";import{y as Q}from"./clientSideDefaults-BqqayPct.js";import{d as z}from"./FeatureSet-BkVNthuN.js";import{l as $}from"./BlendLayer-D1WkSmwP.js";import{e as L}from"./CustomParametersMixin-vdKsTHer.js";import{c as A}from"./FeatureEffectLayer-Cro89IEC.js";import{c as B}from"./FeatureReductionLayer-BTZjL0_Z.js";import{b as V}from"./OperationalLayer-B5IXiMa2.js";import{p as U}from"./OrderedLayer-6Qsmrd_l.js";import{j as W}from"./PortalLayer-CElnYuSQ.js";import{f as M}from"./RefreshableLayer-a8BQ58Xh.js";import{t as H}from"./ScaleRangeLayer-Bz0DcnvM.js";import{l as K}from"./TemporalLayer-CpOrN_w9.js";import{T as X,c as Y,u as ee,p as te,d as re,f as ie,l as oe,s as se,y as ne}from"./commonProperties-BtIqvFU_.js";import{p as ae}from"./FeatureTemplate-SPHPD45f.js";import{y as le}from"./Field-C6hA1tZj.js";import{s as ue}from"./fieldProperties-Bq26w7gt.js";import{C as de,n as pe}from"./labelingInfo-DGVNul26.js";import{b as p}from"./Query-BrwMGK8U.js";import{p as he}from"./popupUtils-B0uZcXX0.js";let l=class extends _{constructor(){super(...arguments),this.type="geojson",this.refresh=j(async e=>{await this.load();const{extent:t,timeExtent:s}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(s=>z.fromJSON(s))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(s=>({count:s.count,extent:f.fromJSON(s.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new g("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,s=[],n=[],h=[];if(e.addFeatures)for(const a of e.addFeatures)s.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)h.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:s,updates:h,deletes:n}).then(({extent:a,timeExtent:u,featureEditResults:c})=>(this.sourceJSON.extent=a,u&&(this.sourceJSON.timeInfo.timeExtent=[u.start,u.end]),this._createEditsResult(c)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new g("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,s=this._geometryForSerialization(e);return s?{geometry:s.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?J.fromExtent(t.extent):t}async _startWorker(e){this._connection=await C("GeoJSONSourceWorker",{strategy:N("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:s,hasZ:n,geometryType:h,objectIdField:a,url:u,timeInfo:c,customParameters:E}=this.layer,x=this.layer.originOf("spatialReference")==="defaults",w={url:u,customParameters:E,fields:t&&t.map(y=>y.toJSON()),geometryType:v.toJSON(h),hasZ:n,objectIdField:a,timeInfo:c?c.toJSON():null,spatialReference:x?null:s&&s.toJSON()},d=await this._connection.invoke("load",w,{signal:e});for(const y of d.warnings)b.getLogger(this.layer).warn("#load()",`${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});d.featureErrors.length&&b.getLogger(this.layer).warn("#load()",`Encountered ${d.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:d.featureErrors}),this.sourceJSON=d.layerDefinition,this.capabilities=Q(this.sourceJSON.hasZ,!0)}};r([i()],l.prototype,"capabilities",void 0),r([i()],l.prototype,"type",void 0),r([i({constructOnly:!0})],l.prototype,"layer",void 0),r([i()],l.prototype,"sourceJSON",void 0),l=r([m("esri.layers.graphics.sources.GeoJSONSource")],l);const S=ue();let o=class extends U(L(B(A($(K(H(M(V(W(G(Z))))))))))){constructor(e){super(e),this.attributeTableTemplate=null,this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new l({layer:this}),this.spatialReference=F.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){this.source?.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(R).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),O(this.renderer,this.fieldsIndex),T(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?I(this.url):null}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=I(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:s}=await import("./editingSupport-gUqP9iyf.js");await this.load();const n=await s(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return he(this,e)}createQuery(){const e=new p,t=this.capabilities?.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:n}=this;return e.timeExtent=s!=null&&n!=null?n.offset(-s.value,s.unit):n||null,e}getFieldDomain(e,t){return this.getField(e)?.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(p.from(e)||this.createQuery(),t)).then(s=>{if(s?.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(p.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(p.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(p.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([i(X)],o.prototype,"attributeTableTemplate",void 0),r([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"createQueryVersion",null),r([i(q("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Boolean})],o.prototype,"editingEnabled",void 0),r([i(Y)],o.prototype,"elevationInfo",void 0),r([i({type:[le],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),r([i(S.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({type:f,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:v.read}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean})],o.prototype,"hasZ",void 0),r([i(ee)],o.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i(te)],o.prototype,"labelsVisible",void 0),r([i({type:[de],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:pe},write:!0}})],o.prototype,"labelingInfo",void 0),r([i(re)],o.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i(ie)],o.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),r([i(S.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"parsedUrl",null),r([i(oe)],o.prototype,"popupEnabled",void 0),r([i({type:P,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:k,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:D}}}})],o.prototype,"renderer",null),r([i(se)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({type:F})],o.prototype,"spatialReference",void 0),r([i({type:[ae]})],o.prototype,"templates",void 0),r([i()],o.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),r([i(ne)],o.prototype,"url",null),o=r([m("esri.layers.GeoJSONLayer")],o);const ce=o;export{ce as default};
