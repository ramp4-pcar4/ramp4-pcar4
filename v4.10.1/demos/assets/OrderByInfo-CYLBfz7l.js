import{az as n,q as s,u as i,C as a,A as d}from"./main-DVcB5zI_.js";var t;const r=new n({asc:"ascending",desc:"descending"});let e=t=class extends d{constructor(o){super(o),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new t({field:this.field,valueExpression:this.valueExpression,order:this.order})}};s([i({type:String,json:{write:!0}})],e.prototype,"field",void 0),s([i({type:String,json:{write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],e.prototype,"valueExpression",void 0),s([i({type:r.apiValues,json:{type:r.jsonValues,read:r.read,write:r.write}})],e.prototype,"order",void 0),e=t=s([a("esri.layers.support.OrderByInfo")],e);const l=e;export{l as a};
