import { bd as e, be as y$1, aX as j, eL as r, bf as a$1, b_ as f$1, bu as J, dO as s, iy as on, P as a$2, e4 as u, a0 as V, I, U, en as l$1, e9 as b, ea as j$2, eb as t, ec as S, eo as e$1, ep as i, bg as v, fA as C, p, A as a$3, s as s$1, G as n$1, ed as o, ev as d, em as f$2 } from './main-YSH8Qvd0.js';
import { j as j$1 } from './persistable-IMeyVEcA.js';
import { L, C as C$1 } from './SceneService-BqbUmtFj.js';
import { p as p$1, a as a$4, y as y$2, m as m$1 } from './I3SLayerDefinitions-4MABXf9B.js';
import { $, Z, w } from './elevationInfoUtils-C8wT4LOM.js';
import './preload-helper-dJJaZANz.js';
import './multiOriginJSONSupportUtils-C5oGZ9U0.js';
import './resourceExtension-Du7hEeWH.js';
import './originUtils-Do2K3Z97.js';
import './jsonContext-D7AK06jf.js';
import './resourceUtils-BKCX-BDf.js';
import './resourceUtils-BV8l-aHC.js';
import './saveAPIKeyUtils-Bad3cqZg.js';
import './saveUtils-D-zsyQTi.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var l;let y=l=class extends f$1{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s$1){if(s$1.layer?.spatialReference&&!s$1.layer.spatialReference.equals(this.geometry.spatialReference)){if(!J(e.spatialReference,s$1.layer.spatialReference))return void(s$1?.messages&&s$1.messages.push(new s("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s$1.layer.spatialReference,context:s$1})));const p=new j;on(e,p,s$1.layer.spatialReference),r[o]=p.toJSON(s$1);}else r[o]=e.toJSON(s$1);delete r[o].spatialReference;}clone(){return new l({geometry:a$2(this.geometry),type:this.type})}};e([y$1({type:j}),j$1()],y.prototype,"geometry",void 0),e([r(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),e([y$1({type:["clip","mask","replace"],nonNullable:!0}),j$1()],y.prototype,"type",void 0),y=l=e([a$1("esri.layers.support.SceneModification")],y);const f=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var m;let n=m=class extends(u(V.ofType(f))){constructor(r){super(r),this.url=null;}clone(){return new m({url:this.url,items:this.items.map((r=>r.clone()))})}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}static fromJSON(r,o){const t=new m;for(const e of r)t.add(f.fromJSON(e,o));return t}static async fromUrl(r,t,e){const i={url:I(r),origin:"service"},c=await U(r,{responseType:"json",signal:e?.signal}),n=t.toJSON(),a=[];for(const o of c.data)a.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},i));return new m({url:r,items:a})}};e([y$1({type:String})],n.prototype,"url",void 0),n=m=e([a$1("esri.layers.support.SceneModifications")],n);const a=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let A=class extends(L(l$1(b(j$2(t(S(e$1(i(f$2))))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null;}initialize(){this.addHandles(v((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),C));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:p(e,o),context:o};}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e);}catch(o){a$3(o);}if(await this._fetchService(t),null!=this._modificationsSource){const t=await a.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null;}await this._fetchIndexAndUpdateExtent(this.nodePages,t);}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(C$1.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(C$1.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s$1("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$1("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s$1("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return ["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";$(n$1.getLogger(this),Z(t,"absolute-height",e)),$(n$1.getLogger(this),w(t,e));}};e([y$1({type:String,readOnly:!0})],A.prototype,"geometryType",void 0),e([y$1({type:["show","hide"]})],A.prototype,"listMode",void 0),e([y$1({type:["IntegratedMeshLayer"]})],A.prototype,"operationalLayerType",void 0),e([y$1({json:{read:!1},readOnly:!0})],A.prototype,"type",void 0),e([y$1({type:p$1,readOnly:!0})],A.prototype,"nodePages",void 0),e([y$1({type:[a$4],readOnly:!0})],A.prototype,"materialDefinitions",void 0),e([y$1({type:[y$2],readOnly:!0})],A.prototype,"textureSetDefinitions",void 0),e([y$1({type:[m$1],readOnly:!0})],A.prototype,"geometryDefinitions",void 0),e([y$1({readOnly:!0})],A.prototype,"serviceUpdateTimeStamp",void 0),e([y$1({type:a}),j$1({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],A.prototype,"modifications",void 0),e([o(["web-scene","portal-item"],"modifications")],A.prototype,"readModifications",null),e([y$1(d)],A.prototype,"elevationInfo",null),e([y$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],A.prototype,"path",void 0),A=e([a$1("esri.layers.IntegratedMeshLayer")],A);const P=A;

export { P as default };
