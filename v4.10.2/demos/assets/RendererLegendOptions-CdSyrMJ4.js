import{q as e,u as o,aE as p,br as c,v as d,C as i,A as n,k as v,b0 as y,bm as b}from"./main-B5_XOOwi.js";var l;let r=l=class extends n{constructor(t){super(t),this.color=null,this.label=null,this.value=null}writeValue(t,a,u){a[u]=t??0}clone(){return new l({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};e([o({type:p,json:{type:[c],write:!0}})],r.prototype,"color",void 0),e([o({type:String,json:{write:!0}})],r.prototype,"label",void 0),e([o({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],r.prototype,"value",void 0),e([d("value")],r.prototype,"writeValue",null),r=l=e([i("esri.renderers.visualVariables.support.ColorStop")],r);const w=r,h=v()({ascendingValues:"ascending-values",descendingValues:"descending-values"});let s=class extends y(n){constructor(t){super(t),this.title=null,this.order=null}};e([o({type:String,json:{write:!0}})],s.prototype,"title",void 0),e([b(h)],s.prototype,"order",void 0),s=e([i("esri.renderers.support.RendererLegendOptions")],s);const g=s;export{g as a,w as b};
