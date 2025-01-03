import { ea as j, ec as S, eV as v, bd as e, be as y, bf as a$1, em as f, s } from './main-CaWYn_3L.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let a=class extends(j(S(f))){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((e,o)=>{v((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unsupported layer type";e&&(s$1+=" "+e),o(new s("layer:unsupported-layer-type",s$1,{layerType:e}));}));})));}read(e,r){const o={resourceInfo:e};null!=e.id&&(o.id=e.id),null!=e.title&&(o.title=e.title),super.read(o,r);}write(e,r){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};e([y({readOnly:!0})],a.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],a.prototype,"listMode",void 0),e([y({type:Boolean,readOnly:!1})],a.prototype,"persistenceEnabled",void 0),e([y({json:{read:!1},readOnly:!0,value:"unsupported"})],a.prototype,"type",void 0),a=e([a$1("esri.layers.UnsupportedLayer")],a);const l=a;

export { l as default };
