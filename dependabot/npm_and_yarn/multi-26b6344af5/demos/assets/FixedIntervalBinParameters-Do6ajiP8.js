import{aH as w,aZ as B,x as g,H as t,J as n,bk as u,N as m,bK as v,aX as f,z as D}from"./main-Cv8ITM2j.js";import{m as S}from"./NormalizationBinParametersMixin-CqIPPGlD.js";const k=new w({esriFieldTypeInteger:"integer",esriFieldTypeString:"string"});let a=class extends B.ClonableMixin(g){constructor(r){super(r),this.alias=null,this.responseType=null,this.type=null,this.value=null,this.valueType=null}};t([n({type:String,json:{name:"outAlias",write:!0}})],a.prototype,"alias",void 0),t([n({type:String})],a.prototype,"responseType",void 0),t([n({type:String,json:{write:!0}})],a.prototype,"type",void 0),t([n({type:String,json:{write:!0}})],a.prototype,"value",void 0),t([u(k)],a.prototype,"valueType",void 0),a=t([m("esri.rest.support.AttributeBinsGrouping")],a);const c=a;a.from=v(a);const O=new w({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeDate:"date",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"}),I=new w({naturalLog:"natural-log",squareRoot:"square-root"});let o=class extends B.ClonableMixin(g){constructor(e){super(e),this.expression=null,this.expressionValueType=null,this.field=null,this.firstDayOfWeek=null,this.hideUpperBound=null,this.splitBy=null,this.stackBy=null,this.transformation=null}};t([n({type:String,json:{name:"onExpression.value",write:!0}})],o.prototype,"expression",void 0),t([u(O,{name:"onExpression.valueType"})],o.prototype,"expressionValueType",void 0),t([n({type:String,json:{name:"onField",write:!0}})],o.prototype,"field",void 0),t([n({type:String,json:{write:!0}})],o.prototype,"firstDayOfWeek",void 0),t([n({type:String,json:{write:!0}})],o.prototype,"hideUpperBound",void 0),t([n({type:c,json:{write:{overridePolicy(){return{enabled:this.splitBy?.value!=null||this.splitBy?.type!=null}}}}})],o.prototype,"splitBy",void 0),t([n({type:c,json:{write:{target:{stackBy:{type:c},jsonStyle:{type:String}},writer:(e,r)=>{e&&(r.stackBy=e.toJSON(),e.responseType!=null&&(r.jsonStyle=e.responseType))},overridePolicy(){return{enabled:this.stackBy?.value!=null||this.stackBy?.type!=null}}},read:{source:["stackBy","jsonStyle"],reader:(e,r)=>c.fromJSON({...r.stackBy,responseType:r.jsonStyle})}}})],o.prototype,"stackBy",void 0),t([u(I)],o.prototype,"transformation",void 0),o=t([m("esri.rest.support.BinParametersBase")],o);const h=o;function T(e,r,s){f(s,e instanceof Date?e.getTime():e,r)}let p=class extends S(h){constructor(r){super(r),this.numBins=null,this.end=null,this.start=null,this.type="auto-interval"}};t([n({type:Number,json:{name:"parameters.numberOfBins",write:!0}})],p.prototype,"numBins",void 0),t([n({json:{name:"parameters.end",write:{writer:T}}})],p.prototype,"end",void 0),t([n({json:{name:"parameters.start",write:{writer:T}}})],p.prototype,"start",void 0),t([u({autoIntervalBin:"auto-interval"},{readOnly:!0})],p.prototype,"type",void 0),p=t([m("esri.rest.support.AutoIntervalBinParameters")],p);const E=p;p.from=v(p);const P=D()({year:"years",quarter:"quarters",month:"months",week:"weeks",day:"days",hour:"hours",minute:"minutes",second:"seconds"});let y=class extends B.ClonableMixin(g){constructor(r){super(r),this.value=null,this.unit=null}};t([n({type:Number,json:{name:"number",write:!0}})],y.prototype,"value",void 0),t([u(P)],y.prototype,"unit",void 0),y=t([m("esri.rest.support.DateBinTimeInterval")],y);const j=y;y.from=v(y);function x(e,r,s){f(s,typeof e=="string"?e:e?.getTime(),r)}function b(e,r){const s=e.parameters[r];return s?typeof s=="string"?s:new Date(s):null}let i=class extends h{constructor(r){super(r),this.end=null,this.interval=null,this.offset=null,this.returnFullIntervalBin=null,this.start=null,this.snapToData=null,this.type="date"}};t([n({cast:e=>e!=null?typeof e=="string"?e:new Date(e):null,json:{name:"parameters.end",read:{reader:(e,r)=>b(r,"end")},write:{writer:x}}})],i.prototype,"end",void 0),t([n({type:j,json:{name:"parameters",write:!0}})],i.prototype,"interval",void 0),t([n({type:j,json:{name:"parameters.offset",write:!0}})],i.prototype,"offset",void 0),t([n({type:Boolean,json:{name:"parameters.returnFullIntervalBin",write:!0}})],i.prototype,"returnFullIntervalBin",void 0),t([n({cast:e=>e!=null?typeof e=="string"?e:new Date(e):null,json:{name:"parameters.start",read:{reader:(e,r)=>b(r,"start")},write:{writer:x}}})],i.prototype,"start",void 0),t([n({type:String,json:{name:"parameters.snapToData",write:!0}})],i.prototype,"snapToData",void 0),t([u({dateBin:"date"},{readOnly:!0})],i.prototype,"type",void 0),i=t([m("esri.rest.support.DateBinParameters")],i);const U=i;i.from=v(i);function N(e){return e[0]instanceof Date}function q(e,r,s){f(s,e&&N(e)?e.map(F=>F.getTime()):e,r)}let d=class extends h{constructor(r){super(r),this.boundaries=[],this.type="fixed-boundaries"}};t([n({json:{name:"parameters.boundaries",write:{writer:q}}})],d.prototype,"boundaries",void 0),t([u({fixedBoundariesBin:"fixed-boundaries"},{readOnly:!0})],d.prototype,"type",void 0),d=t([m("esri.rest.support.FixedBoundariesBinParameters")],d);const W=d;d.from=v(d);function $(e,r,s){f(s,e instanceof Date?e.getTime():e,r)}let l=class extends S(h){constructor(e){super(e),this.end=null,this.interval=null,this.start=null,this.type="fixed-interval"}};t([n({json:{name:"parameters.end",write:{writer:$}}})],l.prototype,"end",void 0),t([n({type:Number,json:{name:"parameters.interval",write:!0}})],l.prototype,"interval",void 0),t([n({json:{name:"parameters.start",write:{writer:$}}})],l.prototype,"start",void 0),t([u({fixedIntervalBin:"fixed-interval"},{readOnly:!0})],l.prototype,"type",void 0),l=t([m("esri.rest.support.FixedIntervalBinParameters")],l);const z=l;l.from=v(l);export{E as a,h as b,z as c,W as m,U as u};
