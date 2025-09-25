import { aW as e$1, aX as y, aY as c$1, c1 as f, F as x$1, aF as m$1, dY as S$1 } from './main-48Jy8Lgr.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$2=class t extends f{constructor(r){super(r),this.properties=null;}};e$1([y({json:{write:!0}})],t$2.prototype,"properties",void 0),t$2=e$1([c$1("esri.rest.knowledgeGraph.GraphObject")],t$2);const p$5=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s$1=class s extends p$5{constructor(r){super(r),this.typeName=null,this.id=null;}};e$1([y({type:String,json:{write:!0}})],s$1.prototype,"typeName",void 0),e$1([y({type:String,json:{write:!0}})],s$1.prototype,"id",void 0),s$1=e$1([c$1("esri.rest.knowledgeGraph.GraphNamedObject")],s$1);const p$4=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p$3=class p extends p$4{constructor(o){super(o),this.layoutGeometry=null;}};e$1([y({type:x$1,json:{write:!0}})],p$3.prototype,"layoutGeometry",void 0),p$3=e$1([c$1("esri.rest.knowledgeGraph.Entity")],p$3);const m=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let i=class extends p$4{constructor(o){super(o),this.originId=null,this.destinationId=null,this.layoutGeometry=null;}};e$1([y({type:String,json:{write:!0}})],i.prototype,"originId",void 0),e$1([y({type:String,json:{write:!0}})],i.prototype,"destinationId",void 0),e$1([y({type:m$1,json:{write:!0}})],i.prototype,"layoutGeometry",void 0),i=e$1([c$1("esri.rest.Relationship.Relationship")],i);const p$2=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e=class extends p$5{constructor(r){super(r);}};e=e$1([c$1("esri.rest.knowledgeGraph.ObjectValue")],e);const t$1=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p$1=class p extends f{constructor(r){super(r),this.path=null;}};e$1([y({type:[p$5],json:{write:!0}})],p$1.prototype,"path",void 0),p$1=e$1([c$1("esri.rest.knowledgeGraph.Path")],p$1);const c=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t=class extends S$1{constructor(r){super(r),this.openCypherQuery="";}};e$1([y()],t.prototype,"openCypherQuery",void 0),t=e$1([c$1("esri.rest.knowledgeGraph.GraphQuery")],t);const p=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s=class extends p{constructor(t){super(t),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null;}};e$1([y()],s.prototype,"bindParameters",void 0),e$1([y()],s.prototype,"bindGeometryQuantizationParameters",void 0),e$1([y()],s.prototype,"outputQuantizationParameters",void 0),e$1([y()],s.prototype,"outputSpatialReference",void 0),s=e$1([c$1("esri.rest.knowledgeGraph.GraphQueryStreaming")],s);const a=s;

export { a, c, m, p$2 as p, t$1 as t };
