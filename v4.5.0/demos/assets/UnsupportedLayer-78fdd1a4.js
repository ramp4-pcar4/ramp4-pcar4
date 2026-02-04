import { dI as _$1, dK as O$1, en as v, e, y, k as a, a4 as b$1, c as s } from './main-5658cd6e.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let u=class extends(_$1(O$1(b$1))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{v((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unsupported layer type";r&&(s$1+=" "+r),o(new s("layer:unsupported-layer-type",s$1,{layerType:r}));}));})));}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e);}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};e([y({readOnly:!0})],u.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],u.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unsupported"})],u.prototype,"type",void 0),u=e([a("esri.layers.UnsupportedLayer")],u);const c=u;

export { c as default };
