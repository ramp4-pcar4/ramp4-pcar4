import { e, y, k as a$1, H as He, c as s } from './main-5658cd6e.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let i=class extends He{constructor(e){super(e),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer";}_verifySource(){if(super._verifySource(),"point"!==this.geometryType)throw new s("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};e([y()],i.prototype,"cameraProperties",void 0),e([y()],i.prototype,"coverage",void 0),e([y()],i.prototype,"coveragePercent",void 0),e([y()],i.prototype,"defaultSearchLocation",void 0),e([y()],i.prototype,"depthImage",void 0),e([y()],i.prototype,"digitalElevationModel",void 0),e([y()],i.prototype,"geometryType",void 0),e([y()],i.prototype,"imageProperties",void 0),e([y()],i.prototype,"maximumDistance",void 0),e([y({json:{read:!1},value:"oriented-imagery",readOnly:!0})],i.prototype,"type",void 0),e([y({type:["OrientedImageryLayer"]})],i.prototype,"operationalLayerType",void 0),i=e([a$1("esri.layers.OrientedImageryLayer")],i);const a=i;

export { a as default };
