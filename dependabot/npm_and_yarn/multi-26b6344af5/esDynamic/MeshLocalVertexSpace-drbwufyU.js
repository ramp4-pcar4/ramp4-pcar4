import{aX as n,q as a,D as e,bi as i,G as l,K as p,aI as c}from"./main-0iYVBzEC.js";var s;let o=s=class extends n.ClonableMixin(a){constructor(t){super(t),this.type="georeferenced",this.origin=null}};o.absolute=new s,e([i({georeferenced:"georeferenced"},{readOnly:!0})],o.prototype,"type",void 0),e([l({type:[Number],nonNullable:!1,json:{write:!0}})],o.prototype,"origin",void 0),o=s=e([p("esri.geometry.support.MeshGeoreferencedVertexSpace")],o);const y=o;let r=class extends n.ClonableMixin(a){constructor(t){super(t),this.type="local",this.origin=c()}};e([i({local:"local"},{readOnly:!0})],r.prototype,"type",void 0),e([l({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"origin",void 0),r=e([p("esri.geometry.support.MeshLocalVertexSpace")],r);const d=r;export{d as a,y as n};
