import { dU as i$2, aX as e, dP as o, aY as y, aZ as c$1, b$ as f, cj as n$1 } from './main-b03b5063.js';

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
