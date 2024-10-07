import { aW as e, aX as y, aY as c } from './main-DNQGUVP9.js';
import { X } from './FeatureLayerView2D-Cez82Hcw.js';
import './preload-helper-dJJaZANz.js';
import './Container-DH5gQm8T.js';
import './highlightReasons-CfeB2yfc.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DeE1Qjxp.js';
import './LayerView-BvW0SS9D.js';
import './TechniqueInstance-D5dK-1K_.js';
import './UpdateTracking2D-BFexrlPZ.js';
import './TurboLine-B2pnzPDC.js';
import './enums-DZmWLm_j.js';
import './earcut-DlRWn62P.js';
import './GeometryUtils-B5TxQ2Cy.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-D4KCzLZL.js';
import './Program-Dn9oI5qC.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-D0F2qLMv.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DLBGbqqr.js';
import './WGLContainer-btNmvfuQ.js';
import './ProgramTemplate-8ousFFS6.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-nC1q72DZ.js';
import './floatRGBA-CC86hh0N.js';
import './FeatureCommandQueue-D9SbyukR.js';
import './HighlightCounter-C_1O5MmT.js';
import './popupUtils-DsX0lKSJ.js';
import './RefreshableLayerView-CojidKNk.js';

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
