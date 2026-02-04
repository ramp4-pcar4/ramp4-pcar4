import { d_ as j, e0 as m, eI as v, aX as e, aY as y, aZ as c, ea as b, s } from './main-b03b5063.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let a=class extends(j(m(b))){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((e,o)=>{v((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unsupported layer type";e&&(s$1+=" "+e),o(new s("layer:unsupported-layer-type",s$1,{layerType:e}));}));})));}read(e,r){const o={resourceInfo:e};null!=e.id&&(o.id=e.id),null!=e.title&&(o.title=e.title),super.read(o,r);}write(e,r){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};e([y({readOnly:!0})],a.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],a.prototype,"listMode",void 0),e([y({type:Boolean,readOnly:!1})],a.prototype,"persistenceEnabled",void 0),e([y({json:{read:!1},readOnly:!0,value:"unsupported"})],a.prototype,"type",void 0),a=e([c("esri.layers.UnsupportedLayer")],a);const l=a;

export { l as default };
