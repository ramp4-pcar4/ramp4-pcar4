import { dV as u$2, ai as u$3, aW as e, aX as y$1, gA as T, jd as o, je as e$1, aY as c$1, jf as l$1, F as x$1, jg as s, jh as s$1, ji as a$1, a3 as V, bu as t$1, b2 as d$2, gs as A, bt as n$1, jj as O, aH as M, d$ as u$4, e2 as m, ex as r$1, ec as b } from './main-CjrSZKDN.js';
import { c as c$2 } from './Analysis-CT7iZgfm.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let c=class extends(u$2(l$1)){constructor(o){super(o),this.type="simple",this.color=new u$3("black"),this.lineSize=2,this.fontSize=10,this.textColor=new u$3("black"),this.textBackgroundColor=new u$3([255,255,255,.6]);}};e([y$1({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),e([y$1({type:u$3,nonNullable:!0,json:{type:[T],write:{isRequired:!0}}})],c.prototype,"color",void 0),e([y$1({type:Number,cast:o,nonNullable:!0,range:{min:e$1(1)},json:{write:{isRequired:!0}}})],c.prototype,"lineSize",void 0),e([y$1({type:Number,cast:o,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"fontSize",void 0),e([y$1({type:u$3,nonNullable:!0,json:{type:[T],write:{isRequired:!0}}})],c.prototype,"textColor",void 0),e([y$1({type:u$3,nonNullable:!0,json:{type:[T],write:{isRequired:!0}}})],c.prototype,"textBackgroundColor",void 0),c=e([c$1("esri.analysis.DimensionSimpleStyle")],c);const a=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var t;!function(t){t.Horizontal="horizontal",t.Vertical="vertical",t.Direct="direct";}(t||(t={}));const r=[t.Horizontal,t.Vertical,t.Direct];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let l=class extends(u$2(l$1)){constructor(o){super(o),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=t.Direct,this.offset=0,this.orientation=0;}};e([y$1({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),e([y$1({type:x$1,json:{write:!0}})],l.prototype,"startPoint",void 0),e([y$1({type:x$1,json:{write:!0}})],l.prototype,"endPoint",void 0),e([y$1({type:r,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),e([y$1({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),e([y$1({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),s((o=>s$1.normalize(a$1(o),0,!0)))],l.prototype,"orientation",void 0),l=e([c$1("esri.analysis.LengthDimension")],l);const u$1=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const d$1=V.ofType(u$1);let f=class extends c$2{constructor(e){super(e),this.type="dimension",this.style=new a,this.extent=null;}initialize(){this.addHandles(d$2((()=>this._computeExtent()),(e=>{null==e?.pending&&this._set("extent",null!=e?e.extent:null);}),A));}get dimensions(){return this._get("dimensions")||new d$1}set dimensions(e){this._set("dimensions",n$1(e,this.dimensions,d$1));}get spatialReference(){for(const e of this.dimensions){if(null!=e.startPoint)return e.startPoint.spatialReference;if(null!=e.endPoint)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce(((e,t)=>(e.push(t.startPoint,t.endPoint),e)),[])}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==e)return {pending:null,extent:null};const t=[];for(const s of this.dimensions)null!=s.startPoint&&t.push(s.startPoint),null!=s.endPoint&&t.push(s.endPoint);const n=O(t,e);if(null!=n.pending)return {pending:n.pending,extent:null};let o=null;return null!=n.geometries&&(o=n.geometries.reduce(((e,t)=>null==e?null!=t?M.fromPoint(t):null:null!=t?e.union(M.fromPoint(t)):e),null)),{pending:null,extent:o}}clear(){this.dimensions.removeAll();}};e([y$1({type:["dimension"]})],f.prototype,"type",void 0),e([y$1({cast:t$1,type:d$1,nonNullable:!0})],f.prototype,"dimensions",null),e([y$1({readOnly:!0})],f.prototype,"spatialReference",null),e([y$1({types:{key:"type",base:null,typeMap:{simple:a}},nonNullable:!0})],f.prototype,"style",void 0),e([y$1({value:null,readOnly:!0})],f.prototype,"extent",void 0),e([y$1({readOnly:!0})],f.prototype,"requiredPropertiesForEditing",null),f=e([c$1("esri.analysis.DimensionAnalysis")],f);const y=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let u=class extends(u$4(m(b))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new y,this.opacity=1,e){const{source:s,style:t}=e;s&&t&&(s.style=t);}}initialize(){this.addHandles([d$2((()=>this.source),((e,s)=>{null!=s&&s.parent===this&&(s.parent=null),null!=e&&(e.parent=this);}),A)]);}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e;}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new y);}get analysis(){return this.source}set analysis(e){this.source=e;}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e;}writeDimensions(e,s,t,r){s.dimensions=e.filter((({startPoint:e,endPoint:s})=>null!=e&&null!=s)).map((e=>e.toJSON(r))).toJSON();}};e([y$1({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),e([y$1({type:["ArcGISDimensionLayer"]})],u.prototype,"operationalLayerType",void 0),e([y$1({nonNullable:!0})],u.prototype,"source",void 0),e([y$1({readOnly:!0})],u.prototype,"spatialReference",null),e([y$1({types:{key:"type",base:null,typeMap:{simple:a}},json:{write:{ignoreOrigin:!0}}})],u.prototype,"style",null),e([y$1({readOnly:!0})],u.prototype,"fullExtent",null),e([y$1({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],u.prototype,"opacity",void 0),e([y$1({type:["show","hide"]})],u.prototype,"listMode",void 0),e([y$1({type:V.ofType(u$1),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],u.prototype,"dimensions",null),e([r$1("web-scene","dimensions")],u.prototype,"writeDimensions",null),u=e([c$1("esri.layers.DimensionLayer")],u);const d=u;

export { d as default };
