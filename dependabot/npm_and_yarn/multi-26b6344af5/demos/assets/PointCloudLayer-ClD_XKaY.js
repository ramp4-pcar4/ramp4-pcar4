import{H as r,J as i,N as y,x as B,bv as S,bk as h,v as u,aX as V,Z as N,iH as x,s as l,bL as _,a5 as L,n as C,b9 as E,M as O,K as A}from"./main-Cv8ITM2j.js";import{S as K}from"./MultiOriginJSONSupport-CtsATS64.js";import{f as k}from"./Layer-CVn99KK7.js";import{i as D}from"./APIKeyMixin-CNAZIO5T.js";import{l as M}from"./ArcGISService-Oha5-jX9.js";import{e as G}from"./CustomParametersMixin-Cg-AR1gR.js";import{b as U}from"./OperationalLayer-D1cLfmBd.js";import{j as H}from"./PortalLayer-DYpNTE1E.js";import{t as Z}from"./ScaleRangeLayer-DD2_yhdp.js";import{R as z,V as P}from"./SceneService-Bh1mlgjn.js";import{l as J,c as X,d as Q}from"./commonProperties-BKS4jiR6.js";import{y as g}from"./Field-DCT5wy9q.js";import{s as W}from"./fieldProperties-1nt-Chxy.js";import{c as q,d as Y,a as ee,b as te}from"./PointCloudUniqueValueRenderer-Cw8-_Y-V.js";import{$ as R,Z as re,w as ie}from"./elevationInfoUtils-B5KhJwhK.js";import{p as oe}from"./popupUtils-DhnWfJwL.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-CmJt7e8T.js";import"./layerContainerType-C5CzMsLd.js";import"./PortalItem-auRHFq7R.js";import"./portalItemUtils-B5PDao5z.js";import"./projection-DALJEM5z.js";import"./projectBuffer-C3I4aBT7.js";import"./originUtils-CPX8CCAY.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./HeightModelInfo-BYKt_3WI.js";import"./jsonContext-B5-JgRxA.js";import"./resourceUtils-CdB6wB9a.js";import"./uuid-Cl5lrJ4c.js";import"./resourceUtils-D7tFe33z.js";import"./saveUtils-DZcWbzA_.js";import"./ElevationInfo-CFzKWoUt.js";import"./lengthUtils-BjSb-BVP.js";import"./fieldType-DVp6Pqrh.js";import"./FieldsIndex-CS8aaAev.js";import"./timeZoneUtils-DBnpKbsS.js";import"./RendererLegendOptions-CP1sF6uT.js";import"./ColorStop-CMaiiwnX.js";let c=class extends B{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"field",void 0),r([i({readOnly:!0,nonNullable:!0,json:{read:!1,write:{isRequired:!0}}})],c.prototype,"type",void 0),c=r([y("esri.layers.pointCloudFilters.PointCloudFilter")],c);const v=c;var b;let d=b=class extends v{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new b({field:this.field,requiredClearBits:u(this.requiredClearBits),requiredSetBits:u(this.requiredSetBits)})}};r([i({type:[S],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],d.prototype,"requiredClearBits",void 0),r([i({type:[S],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],d.prototype,"requiredSetBits",void 0),r([h({pointCloudBitfieldFilter:"bitfield"})],d.prototype,"type",void 0),d=b=r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],d);const se=d;var w;let f=w=class extends v{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new w({field:this.field,includedReturns:u(this.includedReturns)})}};r([i({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"includedReturns",void 0),r([h({pointCloudReturnFilter:"return"})],f.prototype,"type",void 0),f=w=r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")],f);const ne=f;var $;let p=$=class extends v{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new $({field:this.field,mode:this.mode,values:u(this.values)})}};r([i({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"mode",void 0),r([h({pointCloudValueFilter:"value"})],p.prototype,"type",void 0),r([i({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"values",void 0),p=$=r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")],p);const ae=p,le={key:"type",base:v,typeMap:{value:ae,bitfield:se,return:ne}};var I;let m=I=class extends q{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new I({...this.cloneProperties(),field:u(this.field)})}};r([h({pointCloudRGBRenderer:"point-cloud-rgb"})],m.prototype,"type",void 0),r([i({type:String,json:{write:{isRequired:!0}}})],m.prototype,"field",void 0),m=I=r([y("esri.renderers.PointCloudRGBRenderer")],m);const de=m,T={key:"type",base:q,typeMap:{"point-cloud-class-breaks":te,"point-cloud-rgb":de,"point-cloud-stretch":ee,"point-cloud-unique-value":Y},errorContext:"renderer"},F=W();let o=class extends z(M(U(H(Z(K(G(D(k)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t?.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new g;return s.type==="FieldTypeInteger"&&((s=u(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new g({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){e!=null&&e.mode!=="absolute-height"||this._set("elevationInfo",e),this._validateElevationInfo(e)}writeRenderer(e,t,n,s){V("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=e!=null?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(N).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=oe(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=e.fieldInfos?.find(a=>a.fieldName===t.name);if(!n)return;const s=new x({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const n=e.fieldInfos?.find(a=>a.fieldName===t.name);if(!n)return;const s=new x({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new l("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new l("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.attributeStorageInfo)if(s.name===n.name){const a=_(this.parsedUrl?.path??"",`./statistics/${s.key}`);return L(a,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(j=>j.data)}throw new l("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(P.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(P.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(e){R(C.getLogger(this),re("Point cloud layers","absolute-height",e)),R(C.getLogger(this),ie("Point cloud layers",e))}};r([i({type:["PointCloudLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(J)],o.prototype,"popupEnabled",void 0),r([i({type:E,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),r([i({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],o.prototype,"opacity",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({types:[le],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],o.prototype,"filters",void 0),r([i({type:[g]})],o.prototype,"fields",void 0),r([i(F.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([O("service","fields",["fields","attributeStorageInfo"])],o.prototype,"readServiceFields",null),r([i(F.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),r([i(X)],o.prototype,"elevationInfo",null),r([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),r([i(Q)],o.prototype,"legendEnabled",void 0),r([i({types:T,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:T},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],o.prototype,"renderer",void 0),r([A("renderer")],o.prototype,"writeRenderer",null),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),o=r([y("esri.layers.PointCloudLayer")],o);const ze=o;export{ze as default};
