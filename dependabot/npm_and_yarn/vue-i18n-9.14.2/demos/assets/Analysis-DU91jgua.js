import { e4 as u, bZ as i$1, e5 as s, O, bd as e, be as y, bf as a, e6 as S } from './main-C4Zge2Yj.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let l=0,p=class extends(u(i$1(s(S)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${l++}`,this.title=null;}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this);}this._set("parent",e);}get isEditable(){return this.requiredPropertiesForEditing.every(O)}};e([y({type:String,constructOnly:!0,clonable:!1})],p.prototype,"id",void 0),e([y({type:String})],p.prototype,"title",void 0),e([y({clonable:!1,value:null})],p.prototype,"parent",null),e([y({readOnly:!0})],p.prototype,"isEditable",null),p=e([a("esri.analysis.Analysis")],p);const c=p;

export { c };
