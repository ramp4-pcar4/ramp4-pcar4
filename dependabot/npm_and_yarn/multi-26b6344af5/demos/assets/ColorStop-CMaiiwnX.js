import{H as r,J as l,bv as i,aM as u,K as n,N as p,x as c}from"./main-Cv8ITM2j.js";var o;let e=o=class extends c{constructor(t){super(t),this.color=null,this.label=null,this.value=null}writeValue(t,s,a){s[a]=t??0}clone(){return new o({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};r([l({type:u,json:{type:[i],write:{isRequired:!0}}})],e.prototype,"color",void 0),r([l({type:String,json:{write:!0}})],e.prototype,"label",void 0),r([l({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],e.prototype,"value",void 0),r([n("value")],e.prototype,"writeValue",null),e=o=r([p("esri.renderers.visualVariables.support.ColorStop")],e);const h=e;export{h as a};
