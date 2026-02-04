import { t as t$1, dB as u$3, dC as i$1, ju as d, e, y, bh as w$1, gd as x$1, k as a, dE as v$1, j3 as l$1, r as r$2, bv as j$1, bV as t$2, bp as l$2, j7 as w, bU as n$1, eq as o, b as e$1, jv as u$4, eh as un, jw as c$1, jx as m$1, dH as c$2, dK as O$1, a4 as b$1 } from './main-5658cd6e.js';
import { c } from './Analysis-c592fc2c.js';
import { g as g$1 } from './persistable-c17d593b.js';
import './preload-helper-a4975f27.js';
import './multiOriginJSONSupportUtils-c87c995a.js';
import './resourceExtension-23790ddb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function t(e,t){return l(e)===l(t)}function l(t){if(t$1(t))return null;const l=null!=t.layer?t.layer.id:"";let r=null;return r=null!=t.objectId?t.objectId:null!=t.layer&&"objectIdField"in t.layer&&null!=t.layer.objectIdField&&null!=t.attributes?t.attributes[t.layer.objectIdField]:t.uid,null==r?null:`o-${l}-${r}`}const r$1={json:{write:{writer:n,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:u$2}}}};function n(t,l){t$1(t)||null==t.layer?.objectIdField||null==t.attributes||(l.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]});}function u$2(e){if(null!=e.layerId&&null!=e.objectId)return {uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let f$2=class f extends(u$3(i$1(v$1))){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o){return d(this.position,o.position)&&d(this.elevationInfo,o.elevationInfo)&&t(this.feature,o.feature)}};e([y({type:w$1}),g$1()],f$2.prototype,"position",void 0),e([y({type:x$1}),g$1()],f$2.prototype,"elevationInfo",void 0),e([y(r$1)],f$2.prototype,"feature",void 0),f$2=e([a("esri.analysis.LineOfSightAnalysisObserver")],f$2);const u$1=f$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let m=class extends(u$3(l$1)){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o){return d(this.position,o.position)&&d(this.elevationInfo,o.elevationInfo)&&t(this.feature,o.feature)}};e([y({type:w$1}),g$1()],m.prototype,"position",void 0),e([y({type:x$1}),g$1()],m.prototype,"elevationInfo",void 0),e([y(r$1)],m.prototype,"feature",void 0),m=e([a("esri.analysis.LineOfSightAnalysisTarget")],m);const f$1=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function r(e){return e?E:Z}function u(t,n){return t$1(n)||!n.mode?r(t).mode:n.mode}function i(e,n){return u(!!r$2(e)&&e.hasZ,n)}const E={mode:"absolute-height",offset:0},Z={mode:"on-the-ground",offset:null};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const b=j$1.ofType(f$1);let x=class extends c{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null;}initialize(){this.addHandles(l$2((()=>this._computeExtent()),(e=>{(t$1(e)||t$1(e.pending))&&this._set("extent",r$2(e)?e.extent:null);}),w));}get targets(){return this._get("targets")||new b}set targets(e){this._set("targets",n$1(e,this.targets,b));}get spatialReference(){return r$2(this.observer)&&r$2(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return [o(this.observer,(e=>e.position))]}async waitComputeExtent(){const e=this._computeExtent();return r$2(e)?e$1(e.pending):Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(t$1(this.observer)||t$1(this.observer.position)||t$1(e))return null;const t=e=>"absolute-height"===i(e.position,e.elevationInfo),r=this.observer.position,o=u$4(r.x,r.y,r.z,r.x,r.y,r.z);for(const i of this.targets)if(r$2(i.position)){const t=un(i.position,e);if(r$2(t.pending))return {pending:t.pending,extent:null};if(r$2(t.geometry)){const{x:e,y:r,z:s}=t.geometry;c$1(o,[e,r,s]);}}const s=m$1(o,e);return t(this.observer)&&this.targets.every(t)||(s.zmin=void 0,s.zmax=void 0),{pending:null,extent:s}}clear(){this.observer=null,this.targets.removeAll();}};e([y({type:["line-of-sight"]})],x.prototype,"type",void 0),e([y({type:u$1,json:{read:!0,write:!0}})],x.prototype,"observer",void 0),e([y({cast:t$2,type:b,nonNullable:!0,json:{read:!0,write:!0}})],x.prototype,"targets",null),e([y({value:null,readOnly:!0})],x.prototype,"extent",void 0),e([y({readOnly:!0})],x.prototype,"spatialReference",null),e([y({readOnly:!0})],x.prototype,"requiredPropertiesForEditing",null),x=e([a("esri.analysis.LineOfSightAnalysis")],x);const O=x;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const f=j$1.ofType(f$1);let g=class extends(c$2(O$1(b$1))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new O,this.opacity=1;}initialize(){this.addHandles(l$2((()=>this.analysis),((e,t)=>{r$2(t)&&t.parent===this&&(t.parent=null),r$2(e)&&(e.parent=this);}),w));}async load(){return r$2(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return o(this.analysis,(e=>e.observer))}set observer(e){o(this.analysis,(t=>t.observer=e));}get targets(){return r$2(this.analysis)?this.analysis.targets:new j$1}set targets(e){n$1(e,this.analysis?.targets);}get fullExtent(){return r$2(this.analysis)?this.analysis.extent:null}get spatialReference(){return r$2(this.analysis)?e$1(this.analysis.spatialReference):null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new O);}};e([y({json:{read:!1},readOnly:!0})],g.prototype,"type",void 0),e([y({type:["LineOfSightLayer"]})],g.prototype,"operationalLayerType",void 0),e([y({type:u$1,json:{read:!0,write:{ignoreOrigin:!0}}})],g.prototype,"observer",null),e([y({type:f,json:{read:!0,write:{ignoreOrigin:!0}}})],g.prototype,"targets",null),e([y({nonNullable:!0,json:{read:!1,write:!1}})],g.prototype,"analysis",void 0),e([y({readOnly:!0})],g.prototype,"fullExtent",null),e([y({readOnly:!0})],g.prototype,"spatialReference",null),e([y({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],g.prototype,"opacity",void 0),e([y({type:["show","hide"]})],g.prototype,"listMode",void 0),g=e([a("esri.layers.LineOfSightLayer")],g);const j=g;

export { j as default };
