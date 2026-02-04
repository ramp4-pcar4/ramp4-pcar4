import { dT as u$2, dU as i$1, jm as o, aX as e$1, aY as y$1, H as x$1, gz as h, aZ as c, dW as S$1, jh as l$3, a5 as V, bv as t$1, b3 as d$2, gs as A, bu as n$1, jn as a, er as K, jo as h$1, jp as e$2, dZ as u$3, e0 as m$1, ea as b } from './main-b03b5063.js';
import { c as c$1 } from './Analysis-97d92cf6.js';
import { j } from './persistable-3a5a378d.js';
import { i } from './elevationInfoUtils-744e5623.js';
import './preload-helper-a4975f27.js';
import './multiOriginJSONSupportUtils-3d5af7a5.js';
import './resourceExtension-9087e5ad.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e,l){return t(e)===t(l)}function t(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let l=null;return l=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==l?null:`o-${t}-${l}`}const l$2={json:{write:{writer:r,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:n}}}};function r(e,t){null!=e?.layer?.objectIdField&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]});}function n(e){if(null!=e.layerId&&null!=e.objectId)return {uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let l$1=class l extends(u$2(i$1(S$1))){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o$1){return o(this.position,o$1.position)&&o(this.elevationInfo,o$1.elevationInfo)&&e(this.feature,o$1.feature)}};e$1([y$1({type:x$1,json:{write:{isRequired:!0}}})],l$1.prototype,"position",void 0),e$1([y$1({type:h}),j()],l$1.prototype,"elevationInfo",void 0),e$1([y$1(l$2)],l$1.prototype,"feature",void 0),l$1=e$1([c("esri.analysis.LineOfSightAnalysisObserver")],l$1);const u$1=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let l=class extends(u$2(l$3)){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o$1){return o(this.position,o$1.position)&&o(this.elevationInfo,o$1.elevationInfo)&&e(this.feature,o$1.feature)}};e$1([y$1({type:x$1}),j()],l.prototype,"position",void 0),e$1([y$1({type:h}),j()],l.prototype,"elevationInfo",void 0),e$1([y$1(l$2)],l.prototype,"feature",void 0),l=e$1([c("esri.analysis.LineOfSightAnalysisTarget")],l);const f=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const y=V.ofType(f);let d$1=class d extends c$1{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null;}initialize(){this.addHandles(d$2((()=>this._computeExtent()),(t=>{null==t?.pending&&this._set("extent",null!=t?t.extent:null);}),A));}get targets(){return this._get("targets")||new y}set targets(t){this._set("targets",n$1(t,this.targets,y));}get spatialReference(){return null!=this.observer?.position?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return [this.observer?.position]}async waitComputeExtent(){const t=this._computeExtent();return null!=t?t.pending:Promise.resolve()}_computeExtent(){const t=this.spatialReference;if(null==this.observer?.position||null==t)return null;const e=t=>"absolute-height"===i(t.position,t.elevationInfo),o=this.observer.position,r=a(o.x,o.y,o.z,o.x,o.y,o.z);for(const i of this.targets)if(null!=i.position){const e=K(i.position,t);if(null!=e.pending)return {pending:e.pending,extent:null};if(null!=e.geometry){const{x:t,y:o,z:s}=e.geometry;h$1(r,[t,o,s]);}}const s=e$2(r,t);return e(this.observer)&&this.targets.every(e)||(s.zmin=void 0,s.zmax=void 0),{pending:null,extent:s}}clear(){this.observer=null,this.targets.removeAll();}};e$1([y$1({type:["line-of-sight"]})],d$1.prototype,"type",void 0),e$1([y$1({type:u$1,json:{read:!0,write:!0}})],d$1.prototype,"observer",void 0),e$1([y$1({cast:t$1,type:y,nonNullable:!0,json:{read:!0,write:!0}})],d$1.prototype,"targets",null),e$1([y$1({value:null,readOnly:!0})],d$1.prototype,"extent",void 0),e$1([y$1({readOnly:!0})],d$1.prototype,"spatialReference",null),e$1([y$1({readOnly:!0})],d$1.prototype,"requiredPropertiesForEditing",null),d$1=e$1([c("esri.analysis.LineOfSightAnalysis")],d$1);const v=d$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const m=V.ofType(f);let u=class extends(u$3(m$1(b))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new v,this.opacity=1;}initialize(){this.addHandles(d$2((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this);}),A));}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e);}get targets(){return null!=this.analysis?this.analysis.targets:new V}set targets(e){n$1(e,this.analysis?.targets);}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new v);}};e$1([y$1({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),e$1([y$1({type:["LineOfSightLayer"]})],u.prototype,"operationalLayerType",void 0),e$1([y$1({type:u$1,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],u.prototype,"observer",null),e$1([y$1({type:m,json:{read:!0,write:{ignoreOrigin:!0}}})],u.prototype,"targets",null),e$1([y$1({nonNullable:!0,json:{read:!1,write:!1}})],u.prototype,"analysis",void 0),e$1([y$1({readOnly:!0})],u.prototype,"fullExtent",null),e$1([y$1({readOnly:!0})],u.prototype,"spatialReference",null),e$1([y$1({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],u.prototype,"opacity",void 0),e$1([y$1({type:["show","hide"]})],u.prototype,"listMode",void 0),u=e$1([c("esri.layers.LineOfSightLayer")],u);const d=u;

export { d as default };
