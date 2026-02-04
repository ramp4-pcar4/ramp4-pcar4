import { dB as u$1, ep as l$1, e, y, ge as T, gu as o, j2 as e$1, k as a$1, j3 as l$2, bh as w$1, j4 as s, j5 as s$1, j6 as a$2, bv as j$1, bV as t$1, bp as l$3, j7 as w, t as t$2, r as r$1, bU as n$1, b as e$2, j8 as on, w as w$2, dH as c$2, dK as O$1, e0 as r$2, a4 as b$1 } from './main-5658cd6e.js';
import { c as c$1 } from './Analysis-c592fc2c.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let c=class extends(u$1(l$2)){constructor(e){super(e),this.type="simple",this.color=new l$1("black"),this.lineSize=2,this.fontSize=10,this.textColor=new l$1("black"),this.textBackgroundColor=new l$1([255,255,255,.6]);}};e([y({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),e([y({type:l$1,nonNullable:!0,json:{type:[T],write:{isRequired:!0}}})],c.prototype,"color",void 0),e([y({type:Number,cast:o,nonNullable:!0,range:{min:e$1(1)},json:{write:{isRequired:!0}}})],c.prototype,"lineSize",void 0),e([y({type:Number,cast:o,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"fontSize",void 0),e([y({type:l$1,nonNullable:!0,json:{type:[T],write:{isRequired:!0}}})],c.prototype,"textColor",void 0),e([y({type:l$1,nonNullable:!0,json:{type:[T],write:{isRequired:!0}}})],c.prototype,"textBackgroundColor",void 0),c=e([a$1("esri.analysis.DimensionSimpleStyle")],c);const a=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
var t;!function(t){t.Horizontal="horizontal",t.Vertical="vertical",t.Direct="direct";}(t||(t={}));const r=[t.Horizontal,t.Vertical,t.Direct];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let l=class extends(u$1(l$2)){constructor(o){super(o),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=t.Direct,this.offset=0,this.orientation=0;}};e([y({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),e([y({type:w$1,json:{write:!0}})],l.prototype,"startPoint",void 0),e([y({type:w$1,json:{write:!0}})],l.prototype,"endPoint",void 0),e([y({type:r,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),e([y({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),e([y({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),s((o=>s$1.normalize(a$2(o),0,!0)))],l.prototype,"orientation",void 0),l=e([a$1("esri.analysis.LengthDimension")],l);const u=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const h$1=j$1.ofType(u);let g=class extends c$1{constructor(e){super(e),this.type="dimension",this.style=new a,this.extent=null;}initialize(){this.addHandles(l$3((()=>this._computeExtent()),(e=>{(t$2(e)||t$2(e.pending))&&this._set("extent",r$1(e)?e.extent:null);}),w));}get dimensions(){return this._get("dimensions")||new h$1}set dimensions(e){this._set("dimensions",n$1(e,this.dimensions,h$1));}get spatialReference(){for(const e of this.dimensions){if(r$1(e.startPoint))return e.startPoint.spatialReference;if(r$1(e.endPoint))return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce(((e,t)=>(e.push(t.startPoint,t.endPoint),e)),[])}async waitComputeExtent(){const e=this._computeExtent();return r$1(e)?e$2(e.pending):Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(t$2(e))return {pending:null,extent:null};const t=[];for(const s of this.dimensions)r$1(s.startPoint)&&t.push(s.startPoint),r$1(s.endPoint)&&t.push(s.endPoint);const n=on(t,e);if(r$1(n.pending))return {pending:n.pending,extent:null};let o=null;return r$1(n.geometries)&&(o=n.geometries.reduce(((e,t)=>t$2(e)?r$1(t)?w$2.fromPoint(t):null:r$1(t)?e.union(w$2.fromPoint(t)):e),null)),{pending:null,extent:o}}clear(){this.dimensions.removeAll();}};e([y({type:["dimension"]})],g.prototype,"type",void 0),e([y({cast:t$1,type:h$1,nonNullable:!0})],g.prototype,"dimensions",null),e([y({readOnly:!0})],g.prototype,"spatialReference",null),e([y({types:{key:"type",base:null,typeMap:{simple:a}},nonNullable:!0})],g.prototype,"style",void 0),e([y({value:null,readOnly:!0})],g.prototype,"extent",void 0),e([y({readOnly:!0})],g.prototype,"requiredPropertiesForEditing",null),g=e([a$1("esri.analysis.DimensionAnalysis")],g);const j=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let h=class extends(c$2(O$1(b$1))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new j,this.opacity=1,e){const{source:s,style:r}=e;s&&r&&(s.style=r);}}initialize(){this.addHandles([l$3((()=>this.source),((e,s)=>{r$1(s)&&s.parent===this&&(s.parent=null),r$1(e)&&(e.parent=this);}),w)]);}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return e$2(this.source.spatialReference)}get style(){return this.source.style}set style(e){this.source.style=e;}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new j);}get analysis(){return this.source}set analysis(e){this.source=e;}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e;}writeDimensions(e,s,r,t){s.dimensions=e.filter((({startPoint:e,endPoint:s})=>r$1(e)&&r$1(s))).map((e=>e.toJSON(t))).toJSON();}};e([y({json:{read:!1},readOnly:!0})],h.prototype,"type",void 0),e([y({type:["ArcGISDimensionLayer"]})],h.prototype,"operationalLayerType",void 0),e([y({nonNullable:!0})],h.prototype,"source",void 0),e([y({readOnly:!0})],h.prototype,"spatialReference",null),e([y({types:{key:"type",base:null,typeMap:{simple:a}},json:{write:{ignoreOrigin:!0}}})],h.prototype,"style",null),e([y({readOnly:!0})],h.prototype,"fullExtent",null),e([y({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],h.prototype,"opacity",void 0),e([y({type:["show","hide"]})],h.prototype,"listMode",void 0),e([y({type:j$1.ofType(u),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],h.prototype,"dimensions",null),e([r$2("web-scene","dimensions")],h.prototype,"writeDimensions",null),h=e([a$1("esri.layers.DimensionLayer")],h);const f=h;

export { f as default };
