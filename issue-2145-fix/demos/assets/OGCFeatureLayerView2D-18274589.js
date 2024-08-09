import { aX as e, aY as y, aZ as c } from './main-6cddcc3a.js';
import { X } from './FeatureLayerView2D-fd18d79d.js';
import './preload-helper-a4975f27.js';
import './Container-a75c811b.js';
import './highlightReasons-4f47b554.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-322c19dc.js';
import './LayerView-dcb1c5cb.js';
import './TechniqueInstance-9101426e.js';
import './UpdateTracking2D-b7b90d3c.js';
import './TurboLine-b6b21f29.js';
import './enums-d24bcbbf.js';
import './earcut-2991eefe.js';
import './GeometryUtils-cffa80a9.js';
import './Rect-09e0f861.js';
import './LabelMetric-583a74cf.js';
import './Program-b33eb74f.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-67b7ee0a.js';
import './constants-412c3a33.js';
import './TileContainer-f2010334.js';
import './WGLContainer-3cb041b1.js';
import './ProgramTemplate-e9caf7be.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-cbe1cf37.js';
import './floatRGBA-edf9bd1e.js';
import './FeatureCommandQueue-c505eb80.js';
import './HighlightCounter-25f040db.js';
import './popupUtils-17446a87.js';
import './RefreshableLayerView-c91d0949.js';

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
