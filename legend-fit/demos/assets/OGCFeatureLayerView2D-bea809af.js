import { aX as e, aY as y, aZ as c } from './main-91ff489c.js';
import { X } from './FeatureLayerView2D-ea0a4fb6.js';
import './preload-helper-a4975f27.js';
import './Container-3f7427f7.js';
import './highlightReasons-4c42ec8b.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-6b729e93.js';
import './LayerView-77f384fe.js';
import './TechniqueInstance-17624e4d.js';
import './UpdateTracking2D-628b2fab.js';
import './TurboLine-c38e9b8f.js';
import './enums-d24bcbbf.js';
import './earcut-c205a247.js';
import './GeometryUtils-cf11e042.js';
import './Rect-09e0f861.js';
import './LabelMetric-da0cf38d.js';
import './Program-e5a7f622.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-1d5fc3cd.js';
import './constants-412c3a33.js';
import './TileContainer-b718e0f9.js';
import './WGLContainer-8cf05d2e.js';
import './ProgramTemplate-b1d2e404.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-020b2963.js';
import './floatRGBA-ce34679e.js';
import './FeatureCommandQueue-208b35f1.js';
import './HighlightCounter-02e463d3.js';
import './popupUtils-15182ecd.js';
import './RefreshableLayerView-f64c2704.js';

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
