import { dI as _$1, dK as O$1, en as v, e, y, k as a$1, a4 as b$1, c as s } from './main-5658cd6e.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let a=class extends(_$1(O$1(b$1))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{v((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unknown layer type";r&&(s$1+=" "+r),e(new s("layer:unknown-layer-type",s$1,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(){return null}};e([y({readOnly:!0})],a.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],a.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=e([a$1("esri.layers.UnknownLayer")],a);const c=a;

export { c as default };
