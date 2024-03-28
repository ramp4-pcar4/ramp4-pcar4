import { bH as e, bI as y, bJ as c } from './main-b4e8e5ba.js';
import { X } from './FeatureLayerView2D-4b440fab.js';
import './preload-helper-a4975f27.js';
import './Container-9f88537f.js';
import './highlightReasons-5c88b825.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-31112cda.js';
import './LayerView-24a0b5a1.js';
import './TechniqueInstance-b5149de6.js';
import './UpdateTracking2D-819a882c.js';
import './TurboLine-f816a660.js';
import './enums-d24bcbbf.js';
import './earcut-8748428b.js';
import './GeometryUtils-a41900b1.js';
import './Rect-09e0f861.js';
import './LabelMetric-daa9c9e2.js';
import './Program-6de50f5a.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './constants-412c3a33.js';
import './TileContainer-fe4f3567.js';
import './WGLContainer-395f9022.js';
import './ProgramTemplate-85c6bcd7.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-716443cf.js';
import './floatRGBA-71e5f6f9.js';
import './FeatureCommandQueue-9ec160f7.js';
import './HighlightCounter-89e22e96.js';
import './popupUtils-209e4bc0.js';
import './RefreshableLayerView-82e0140b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([c("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t=class extends(o(X)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([c("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
