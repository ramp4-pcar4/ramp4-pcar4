import{dJ as i,dL as y,eo as l,e as o,y as t,k as p,a4 as u,c as d}from"./main-8eb577c9.js";import"./preload-helper-388ac9d5.js";let e=class extends i(y(u)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,s)=>{l(()=>{const n=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";n&&(a+=" "+n),s(new d("layer:unknown-layer-type",a,{layerType:n}))})}))}read(r,s){super.read({resourceInfo:r},s)}write(){return null}};o([t({readOnly:!0})],e.prototype,"resourceInfo",void 0),o([t({type:["show","hide"]})],e.prototype,"listMode",void 0),o([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=o([p("esri.layers.UnknownLayer")],e);const f=e;export{f as default};
