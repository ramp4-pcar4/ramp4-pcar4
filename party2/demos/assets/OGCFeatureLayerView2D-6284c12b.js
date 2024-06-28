import { aX as e, aY as y, aZ as c } from './main-2fb669dc.js';
import { X } from './FeatureLayerView2D-63fd1535.js';
import './preload-helper-a4975f27.js';
import './Container-0ebd7c07.js';
import './highlightReasons-fb6fdeed.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-e41b9ea0.js';
import './LayerView-4eb1e3f9.js';
import './TechniqueInstance-2505125b.js';
import './UpdateTracking2D-489dda2e.js';
import './TurboLine-1408cf44.js';
import './enums-d24bcbbf.js';
import './earcut-9b1a220d.js';
import './GeometryUtils-563ba14d.js';
import './Rect-09e0f861.js';
import './LabelMetric-72d31dfa.js';
import './Program-5aae8f43.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-07974ae1.js';
import './constants-412c3a33.js';
import './TileContainer-387bbeec.js';
import './WGLContainer-87788aca.js';
import './ProgramTemplate-1bc56bc7.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-d63f7c1e.js';
import './floatRGBA-bbd9c78a.js';
import './FeatureCommandQueue-7ea0442f.js';
import './HighlightCounter-c0c729d1.js';
import './popupUtils-080d8e00.js';
import './RefreshableLayerView-14fc72e7.js';

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
