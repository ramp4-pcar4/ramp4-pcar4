import { gj as a, x, r as r$1, bb as x$1, w, c as s, b as e$1, fH as o, E, ew as u$1, h as has, e, y, k as a$1, m, fN as c, fO as o$2, fP as n, fQ as p, dF as n$1, fR as a$2, dG as p$1, dJ as t, dH as c$1, dI as _$1, dK as O$1, f as f$1, fS as F$1, fT as x$2, ee as y$1, d as o$3, L, fU as p$2, fM as x$3, fV as d, e0 as r, fW as m$1, fX as C$1, fY as i, dP as c$2, ge as T, gk as g, f_ as p$3, bw as k, f$ as p$4, g0 as n$2, g1 as l$1, dQ as f, g4 as s$1, a4 as b$1 } from './main-5658cd6e.js';
import { l, o as o$1 } from './clientSideDefaults-1d7b4fea.js';
import { D, X, z, W, C } from './wfsUtils-aafd3a97.js';
import './preload-helper-a4975f27.js';
import './QueryEngineCapabilities-014f3e07.js';
import './geojson-211ae12e.js';
import './xmlUtils-78579c54.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let F=class extends(a(m)){constructor(){super(...arguments),this._connection=null,this.capabilities=l(!1,!1),this.type="wfs",this.refresh=x((async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}));}load(e){const t=r$1(e)?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null;}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return x$1.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return {count:r.count,extent:w.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){const{url:r,customParameters:o$1,name:s$1,namespaceUri:i,spatialReference:n,fields:c,geometryType:p,swapXY:l}=this.layer;if(!r)throw new s("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await D(r,{customParameters:o$1,...e}));const m=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e])),y=m?await X(this.wfsCapabilities,s$1,i,{spatialReference:n,customParameters:o$1,signal:e?.signal}):{...z(c??[]),geometryType:p,name:s$1,namespaceUri:i,spatialReference:n,swapXY:l},g=e$1(W(this.wfsCapabilities.readFeatureTypes(),y.name,y.namespaceUri)),S=o.toJSON(y.geometryType);return {customParameters:o$1,featureType:g,fields:y.fields?.map((e=>e.toJSON()))??[],geometryField:y.geometryField,geometryType:S,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:y.objectIdField,spatialReference:y.spatialReference.toJSON(),swapXY:!!y.swapXY}}async _startWorker(e){const[t,r]=await E([this._createLoadOptions(e),u$1("WFSSourceWorker",{...e,strategy:has("feature-layers-workers")?"dedicated":"local"})]),o=t.error||r.error||null,s=r.value||null;if(o)throw s&&s.close(),o;const a=t.value;this._connection=r.value;const i=(await this._connection.invoke("load",a,e)).extent;this.sourceJSON={extent:i,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:o$1(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}};}};e([y()],F.prototype,"capabilities",void 0),e([y({constructOnly:!0})],F.prototype,"layer",void 0),e([y()],F.prototype,"sourceJSON",void 0),e([y()],F.prototype,"type",void 0),e([y()],F.prototype,"wfsCapabilities",void 0),F=e([a$1("esri.layers.graphics.sources.WFSSource")],F);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
var B;const J=s$1();let M=B=class extends(c(o$2(n(p(n$1(a$2(p$1(t(c$1(_$1(O$1(b$1)))))))))))){static fromWFSLayerInfo(e){const{customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m}=e;return new B({customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new F({layer:this}),this.spatialReference=f$1.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0;}destroy(){this.source?.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),F$1(this.renderer,this.fieldsIndex),x$2(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get capabilities(){return this.source?.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,t){const i=e.filter((e=>e.name!==C));this.geometryField&&i.unshift(new y$1({name:this.geometryField,alias:this.geometryField,type:"geometry"})),o$3(t,i.map((e=>e.toJSON())),r);}get parsedUrl(){return L(this.url)}set renderer(e){F$1(e,this.fieldsIndex),this._set("renderer",e);}get wfsCapabilities(){return this.source?.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e);}createPopupTemplate(e){return p$2(this,e)}createQuery(){const e=new x$3;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:t}=this;return e.timeExtent=null!=r&&null!=t?t.offset(-r.value,r.unit):t||null,e}getFieldDomain(e,r){return this.getField(e)?.domain}getField(e){return this.fieldsIndex?.get(e)}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(x$3.from(e)||this.createQuery(),r))).then((e=>{if(e?.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(x$3.from(e)||this.createQuery(),r)))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(x$3.from(e)||this.createQuery(),r)))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(x$3.from(e)||this.createQuery(),r)))}async hasDataChanged(){try{const{dataChanged:e,updates:r}=await this.source.refresh(this.customParameters);return r$1(r)&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}};e([y({readOnly:!0})],M.prototype,"capabilities",null),e([y({type:String})],M.prototype,"copyright",void 0),e([y({readOnly:!0})],M.prototype,"createQueryVersion",null),e([y({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],M.prototype,"customParameters",void 0),e([y({readOnly:!0})],M.prototype,"defaultPopupTemplate",null),e([y({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],M.prototype,"definitionExpression",void 0),e([y({type:String})],M.prototype,"displayField",void 0),e([y(d)],M.prototype,"elevationInfo",void 0),e([y({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],M.prototype,"featureUrl",void 0),e([y({type:[y$1],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],M.prototype,"fields",void 0),e([r("fields")],M.prototype,"writeFields",null),e([y(J.fieldsIndex)],M.prototype,"fieldsIndex",void 0),e([y({type:w,json:{name:"extent"}})],M.prototype,"fullExtent",void 0),e([y()],M.prototype,"geometryField",void 0),e([y({type:String,json:{read:{source:"layerDefinition.geometryType",reader:o.read},write:{target:"layerDefinition.geometryType",writer:o.write,ignoreOrigin:!0},origins:{service:{read:o.read}}}})],M.prototype,"geometryType",void 0),e([y({type:String})],M.prototype,"id",void 0),e([y(m$1)],M.prototype,"labelsVisible",void 0),e([y({type:[C$1],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:i},write:!0}})],M.prototype,"labelingInfo",void 0),e([y(c$2)],M.prototype,"legendEnabled",void 0),e([y({type:["show","hide"]})],M.prototype,"listMode",void 0),e([y({type:String})],M.prototype,"objectIdField",void 0),e([y({type:["WFS"]})],M.prototype,"operationalLayerType",void 0),e([y({type:T,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],M.prototype,"maxFeatures",void 0),e([y({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],M.prototype,"mode",void 0),e([y({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],M.prototype,"name",void 0),e([y({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],M.prototype,"namespaceUri",void 0),e([y(g)],M.prototype,"opacity",void 0),e([y(J.outFields)],M.prototype,"outFields",void 0),e([y({readOnly:!0})],M.prototype,"parsedUrl",null),e([y(p$3)],M.prototype,"popupEnabled",void 0),e([y({type:k,json:{name:"popupInfo",write:!0}})],M.prototype,"popupTemplate",void 0),e([y({types:p$4,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:n$2,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],M.prototype,"renderer",null),e([y(l$1)],M.prototype,"screenSizePerspectiveEnabled",void 0),e([y({readOnly:!0})],M.prototype,"source",void 0),e([y({type:f$1,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],M.prototype,"spatialReference",void 0),e([y({readOnly:!0,type:[T],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],M.prototype,"spatialReferences",void 0),e([y({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],M.prototype,"swapXY",void 0),e([y({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],M.prototype,"title",void 0),e([y({json:{read:!1},readOnly:!0})],M.prototype,"type",void 0),e([y(f)],M.prototype,"url",void 0),e([y({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],M.prototype,"version",void 0),e([y()],M.prototype,"wfsCapabilities",null),M=B=e([a$1("esri.layers.WFSLayer")],M);const _=M;

export { _ as default };
