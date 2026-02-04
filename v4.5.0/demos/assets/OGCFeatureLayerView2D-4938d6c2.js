import { e, y, k as a$1 } from './main-5658cd6e.js';
import D from './FeatureLayerView2D-f528f40a.js';
import './preload-helper-a4975f27.js';
import './Container-1d8ffe9c.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-aefe232f.js';
import './LayerView-cbc55a02.js';
import './schemaUtils-b103f304.js';
import './color-6132b2c2.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './utils-6a1fc53c.js';
import './MaterialKey-99ff6359.js';
import './visualVariablesUtils-1950eea1.js';
import './ExpandedCIM-78770fa3.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-ec270d9a.js';
import './floatRGBA-0f682c7a.js';
import './util-0ab7a9cb.js';
import './popupUtils-678d5012.js';
import './RefreshableLayerView-bc0c3310.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([a$1("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let t=class extends(o(D)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([a$1("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
