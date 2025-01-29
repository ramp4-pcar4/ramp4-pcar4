import { ea as j, ec as S, eV as v, bd as e, be as y, bf as a$1, em as f, s } from './main-CaWYn_3L.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let a=class extends(j(S(f))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{v((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unknown layer type";r&&(s$1+=" "+r),e(new s("layer:unknown-layer-type",s$1,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(r,o){return null}};e([y({readOnly:!0})],a.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],a.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=e([a$1("esri.layers.UnknownLayer")],a);const c=a;

export { c as default };
