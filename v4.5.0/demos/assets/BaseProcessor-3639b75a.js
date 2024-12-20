import { e, y, k as a, ey as d$1 } from './main-5658cd6e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let s=class extends d$1{initialize(){}destroy(){}get supportsTileUpdates(){return !1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};e([y({readOnly:!0})],s.prototype,"supportsTileUpdates",null),e([y({constructOnly:!0})],s.prototype,"remoteClient",void 0),e([y({constructOnly:!0})],s.prototype,"service",void 0),e([y()],s.prototype,"spatialReference",null),e([y({constructOnly:!0})],s.prototype,"tileInfo",void 0),e([y({constructOnly:!0})],s.prototype,"tileStore",void 0),s=e([a("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;

export { p };
