import { aX as e$1, aY as y, aZ as c$1, b$ as f, gA as T, dP as o, Y as a, ey as l$2, dZ as u$3, d_ as j, d$ as t$1, e0 as m, ez as e$2, eA as i$1, dI as y$1, eu as o$1, D as a$4, g8 as p$4, kO as i$2, s, aB as V$1, U as U$1, K as s$1, ge as y$2, b7 as P$1, e1 as o$2, eH as f$1, e3 as c$2, ev as r, gj as s$2, ea as b } from './main-b03b5063.js';
import { L, P } from './SceneService-0b873ba5.js';
import { c as a$1, d as d$1, b as a$2, a as a$3 } from './PointCloudUniqueValueRenderer-e940d2ee.js';
import { I, x, Z } from './elevationInfoUtils-744e5623.js';
import './preload-helper-a4975f27.js';
import './originUtils-f2cf510b.js';
import './multiOriginJSONSupportUtils-3d5af7a5.js';
import './jsonContext-8b9ca8a6.js';
import './resourceUtils-eda012cf.js';
import './resourceUtils-90f1799d.js';
import './saveAPIKeyUtils-a64fc206.js';
import './saveUtils-f4c00034.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t=class extends f{constructor(o){super(o),this.field=null,this.type=null;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};e$1([y({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),e$1([y({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=e$1([c$1("esri.layers.pointCloudFilters.PointCloudFilter")],t);const l$1=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var d;let p$3=d=class extends l$1{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield";}clone(){return new d({field:this.field,requiredClearBits:a(this.requiredClearBits),requiredSetBits:a(this.requiredSetBits)})}};e$1([y({type:[T],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredSetBits}}}}})],p$3.prototype,"requiredClearBits",void 0),e$1([y({type:[T],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredClearBits}}}}})],p$3.prototype,"requiredSetBits",void 0),e$1([o({pointCloudBitfieldFilter:"bitfield"})],p$3.prototype,"type",void 0),p$3=d=e$1([c$1("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p$3);const u$2=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var n$1;let p$2=n$1=class extends l$1{constructor(r){super(r),this.includedReturns=[],this.type="return";}clone(){return new n$1({field:this.field,includedReturns:a(this.includedReturns)})}};e$1([y({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],p$2.prototype,"includedReturns",void 0),e$1([o({pointCloudReturnFilter:"return"})],p$2.prototype,"type",void 0),p$2=n$1=e$1([c$1("esri.layers.pointCloudFilters.PointCloudReturnFilter")],p$2);const u$1=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var l;let p$1=l=class extends l$1{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[];}clone(){return new l({field:this.field,mode:this.mode,values:a(this.values)})}};e$1([y({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p$1.prototype,"mode",void 0),e$1([o({pointCloudValueFilter:"value"})],p$1.prototype,"type",void 0),e$1([y({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p$1.prototype,"values",void 0),p$1=l=e$1([c$1("esri.layers.pointCloudFilters.PointCloudValueFilter")],p$1);const u=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const e={key:"type",base:l$1,typeMap:{value:u,bitfield:u$2,return:u$1}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var p;let c=p=class extends a$1{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null;}clone(){return new p({...this.cloneProperties(),field:a(this.field)})}};e$1([o({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),e$1([y({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=p=e$1([c$1("esri.renderers.PointCloudRGBRenderer")],c);const n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const i={key:"type",base:a$1,typeMap:{"point-cloud-class-breaks":d$1,"point-cloud-rgb":n,"point-cloud-stretch":a$2,"point-cloud-unique-value":a$3},errorContext:"renderer"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const O=s$2();let V=class extends(L(l$2(u$3(j(t$1(m(e$2(i$1(b))))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r?.domain?r.domain:null}readServiceFields(e,r,t){return Array.isArray(e)?e.map((e=>{const r=new y$1;return "FieldTypeInteger"===e.type&&((e=a(e)).type="esriFieldTypeInteger"),r.read(e,t),r})):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map((e=>new y$1({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}writeRenderer(e,r,t,o){o$1("layerDefinition.drawingInfo.renderer",e.write({},o),r);}load(e){const r=null!=e?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(a$4).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){const r=p$4(this,e);return r&&(this._formatPopupTemplateReturnsField(r),this._formatPopupTemplateRGBField(r)),r}_formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos?.find((e=>e.fieldName===r.name));if(!t)return;const o=new i$2({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded";}_formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos?.find((e=>e.fieldName===r.name));if(!t)return;const o=new i$2({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded";}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new s("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=this.fieldsIndex.get(e);if(!i)throw new s("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===i.name){const e=V$1(this.parsedUrl.path,`./statistics/${o.key}`);return U$1(e,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new s("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(P.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(P.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return ["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;I(s$1.getLogger(this),x("Point cloud layers","absolute-height",e)),I(s$1.getLogger(this),Z("Point cloud layers",e));}};e$1([y({type:["PointCloudLayer"]})],V.prototype,"operationalLayerType",void 0),e$1([y(y$2)],V.prototype,"popupEnabled",void 0),e$1([y({type:P$1,json:{name:"popupInfo",write:!0}})],V.prototype,"popupTemplate",void 0),e$1([y({readOnly:!0,json:{read:!1}})],V.prototype,"defaultPopupTemplate",null),e$1([y({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],V.prototype,"opacity",void 0),e$1([y({type:["show","hide"]})],V.prototype,"listMode",void 0),e$1([y({types:[e],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],V.prototype,"filters",void 0),e$1([y({type:[y$1]})],V.prototype,"fields",void 0),e$1([y(O.fieldsIndex)],V.prototype,"fieldsIndex",void 0),e$1([o$2("service","fields",["fields","attributeStorageInfo"])],V.prototype,"readServiceFields",null),e$1([y(O.outFields)],V.prototype,"outFields",void 0),e$1([y({readOnly:!0})],V.prototype,"attributeStorageInfo",void 0),e$1([y(f$1)],V.prototype,"elevationInfo",null),e$1([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],V.prototype,"path",void 0),e$1([y(c$2)],V.prototype,"legendEnabled",void 0),e$1([y({types:i,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:i},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],V.prototype,"renderer",void 0),e$1([r("renderer")],V.prototype,"writeRenderer",null),e$1([y({json:{read:!1},readOnly:!0})],V.prototype,"type",void 0),V=e$1([c$1("esri.layers.PointCloudLayer")],V);const U=V;

export { U as default };
