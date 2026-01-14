import { dW as i$2, aW as e, dR as o, aX as y, aY as c$1, c1 as f, cl as n$1 } from './main-CjrSZKDN.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let c=class extends(i$2(f)){constructor(r){super(r),this.type="georeferenced",this.origin=null;}};e([o({georeferenced:"georeferenced"},{readOnly:!0})],c.prototype,"type",void 0),e([y({type:[Number],nonNullable:!1,json:{write:!0}})],c.prototype,"origin",void 0),c=e([c$1("esri.geometry.support.MeshGeoreferencedVertexSpace")],c);const i$1=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let i=class extends(i$2(f)){constructor(o){super(o),this.type="local",this.origin=n$1();}};e([o({local:"local"},{readOnly:!0})],i.prototype,"type",void 0),e([y({type:[Number],nonNullable:!0,json:{write:!0}})],i.prototype,"origin",void 0),i=e([c$1("esri.geometry.support.MeshLocalVertexSpace")],i);const a=i;

export { a, i$1 as i };
