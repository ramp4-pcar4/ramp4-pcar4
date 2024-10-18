import { dT as u, dU as i$1, dV as s, q, aX as e, aY as y, aZ as c$1, dW as S$1 } from './main-b03b5063.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let l=0,p=class extends(u(i$1(s(S$1)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${l++}`,this.title=null;}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this);}this._set("parent",e);}get isEditable(){return this.requiredPropertiesForEditing.every(q)}};e([y({type:String,constructOnly:!0,clonable:!1})],p.prototype,"id",void 0),e([y({type:String})],p.prototype,"title",void 0),e([y({clonable:!1,value:null})],p.prototype,"parent",null),e([y({readOnly:!0})],p.prototype,"isEditable",null),p=e([c$1("esri.analysis.Analysis")],p);const c=p;

export { c };
