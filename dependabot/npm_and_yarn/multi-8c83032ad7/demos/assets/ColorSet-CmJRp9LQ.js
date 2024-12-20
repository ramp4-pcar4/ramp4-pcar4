import { B as Be$1, a5 as Gt } from './Theme-BEgsBPoy.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class s extends Be$1{_afterNew(){super._afterNewApplyThemes(),this._dirty.colors=!1;}_beforeChanged(){this.isDirty("colors")&&this.reset();}generateColors(){this.setPrivate("currentPass",this.getPrivate("currentPass",0)+1);const e=this.getPrivate("currentPass"),s=this.get("colors",[this.get("baseColor",Gt.fromHex(16711680))]);this.getPrivate("numColors")||this.setPrivate("numColors",s.length);const r=this.getPrivate("numColors"),a=0,i=this.get("passOptions"),o=this.get("reuse");for(let n=a;n<r;n++)if(o)s.push(s[n]);else {const r=s[n].toHSL();let a=r.h+(i.hue||0)*e;for(;a>1;)a-=1;let o=r.s+(i.saturation||0)*e;o>1&&(o=1),o<0&&(o=0);let l=r.l+(i.lightness||0)*e;for(;l>1;)l-=1;s.push(Gt.fromHSL(a,o,l));}}getIndex(e){const s=this.get("colors",[]),r=this.get("saturation");return e>=s.length?(this.generateColors(),this.getIndex(e)):null!=r?Gt.saturate(s[e],r):s[e]}next(){let e=this.getPrivate("currentStep",this.get("startIndex",0));return this.setPrivate("currentStep",e+this.get("step",1)),this.getIndex(e)}reset(){this.setPrivate("currentStep",this.get("startIndex",0)),this.setPrivate("currentPass",0);}}Object.defineProperty(s,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ColorSet"}),Object.defineProperty(s,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Be$1.classNames.concat([s.className])});

export { s };
