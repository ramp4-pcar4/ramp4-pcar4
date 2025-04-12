import{dC as $,eq as y,e as t,y as i,gf as w,gv as v,j3 as S,k as g,j4 as R,bh as j,j5 as E,j6 as k,j7 as C,bv as N,bV as L,bp as O,j8 as q,t as h,r as s,bU as T,b as D,j9 as _,w as x,dI as A,dL as H,e1 as I,a4 as M}from"./main-8eb577c9.js";import{c as V}from"./Analysis-5288b9a1.js";import"./preload-helper-388ac9d5.js";let l=class extends $(R){constructor(e){super(e),this.type="simple",this.color=new y("black"),this.lineSize=2,this.fontSize=10,this.textColor=new y("black"),this.textBackgroundColor=new y([255,255,255,.6])}};t([i({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([i({type:y,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],l.prototype,"color",void 0),t([i({type:Number,cast:v,nonNullable:!0,range:{min:S(1)},json:{write:{isRequired:!0}}})],l.prototype,"lineSize",void 0),t([i({type:Number,cast:v,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"fontSize",void 0),t([i({type:y,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],l.prototype,"textColor",void 0),t([i({type:y,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],l.prototype,"textBackgroundColor",void 0),l=t([g("esri.analysis.DimensionSimpleStyle")],l);const b=l;var c;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(c||(c={}));const B=[c.Horizontal,c.Vertical,c.Direct];let a=class extends $(R){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=c.Direct,this.offset=0,this.orientation=0}};t([i({type:["length"],json:{write:{isRequired:!0}}})],a.prototype,"type",void 0),t([i({type:j,json:{write:!0}})],a.prototype,"startPoint",void 0),t([i({type:j,json:{write:!0}})],a.prototype,"endPoint",void 0),t([i({type:B,nonNullable:!0,json:{write:{isRequired:!0}}})],a.prototype,"measureType",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],a.prototype,"offset",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),E(e=>k.normalize(C(e),0,!0))],a.prototype,"orientation",void 0),a=t([g("esri.analysis.LengthDimension")],a);const z=a,f=N.ofType(z);let p=class extends V{constructor(e){super(e),this.type="dimension",this.style=new b,this.extent=null}initialize(){this.addHandles(O(()=>this._computeExtent(),e=>{(h(e)||h(e.pending))&&this._set("extent",s(e)?e.extent:null)},q))}get dimensions(){return this._get("dimensions")||new f}set dimensions(e){this._set("dimensions",T(e,this.dimensions,f))}get spatialReference(){for(const e of this.dimensions){if(s(e.startPoint))return e.startPoint.spatialReference;if(s(e.endPoint))return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,n)=>(e.push(n.startPoint,n.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return s(e)?D(e.pending):Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(h(e))return{pending:null,extent:null};const n=[];for(const r of this.dimensions)s(r.startPoint)&&n.push(r.startPoint),s(r.endPoint)&&n.push(r.endPoint);const u=_(n,e);if(s(u.pending))return{pending:u.pending,extent:null};let m=null;return s(u.geometries)&&(m=u.geometries.reduce((r,d)=>h(r)?s(d)?x.fromPoint(d):null:s(d)?r.union(x.fromPoint(d)):r,null)),{pending:null,extent:m}}clear(){this.dimensions.removeAll()}};t([i({type:["dimension"]})],p.prototype,"type",void 0),t([i({cast:L,type:f,nonNullable:!0})],p.prototype,"dimensions",null),t([i({readOnly:!0})],p.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:b}},nonNullable:!0})],p.prototype,"style",void 0),t([i({value:null,readOnly:!0})],p.prototype,"extent",void 0),t([i({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([g("esri.analysis.DimensionAnalysis")],p);const P=p;let o=class extends A(H(M)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new P,this.opacity=1,e){const{source:n,style:u}=e;n&&u&&(n.style=u)}}initialize(){this.addHandles([O(()=>this.source,(e,n)=>{s(n)&&n.parent===this&&(n.parent=null),s(e)&&(e.parent=this)},q)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return D(this.source.spatialReference)}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new P)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,n,u,m){n.dimensions=e.filter(({startPoint:r,endPoint:d})=>s(r)&&s(d)).map(r=>r.toJSON(m)).toJSON()}};t([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([i({type:["ArcGISDimensionLayer"]})],o.prototype,"operationalLayerType",void 0),t([i({nonNullable:!0})],o.prototype,"source",void 0),t([i({readOnly:!0})],o.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:b}},json:{write:{ignoreOrigin:!0}}})],o.prototype,"style",null),t([i({readOnly:!0})],o.prototype,"fullExtent",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),t([i({type:["show","hide"]})],o.prototype,"listMode",void 0),t([i({type:N.ofType(z),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],o.prototype,"dimensions",null),t([I("web-scene","dimensions")],o.prototype,"writeDimensions",null),o=t([g("esri.layers.DimensionLayer")],o);const U=o;export{U as default};
