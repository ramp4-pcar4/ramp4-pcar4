import { d_ as j, e0 as m, eI as v, aX as e, aY as y, aZ as c$1, ea as b, s } from './main-b03b5063.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let a=class extends(j(m(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{v((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unknown layer type";r&&(s$1+=" "+r),e(new s("layer:unknown-layer-type",s$1,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(r,o){return null}};e([y({readOnly:!0})],a.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],a.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=e([c$1("esri.layers.UnknownLayer")],a);const c=a;

export { c as default };
