import { aW as e, aX as y, aY as c } from './main-8tw5u9cl.js';
import { X } from './FeatureLayerView2D-JwIyc3fY.js';
import './preload-helper-dJJaZANz.js';
import './Container-DWj2A2rf.js';
import './highlightReasons-Bsv19mfd.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-XmEEZS7C.js';
import './LayerView-DPVOQc9d.js';
import './TechniqueInstance-Bhwjg1j5.js';
import './UpdateTracking2D-DmT8ptoW.js';
import './TurboLine-DknBqTTO.js';
import './enums-DZmWLm_j.js';
import './earcut-ltgf9gam.js';
import './GeometryUtils-B2qzr6wy.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-Dn-LVuTZ.js';
import './Program-DV7M0gTA.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-C8STSCpU.js';
import './constants-C0QDwCF4.js';
import './TileContainer-B48w71cS.js';
import './WGLContainer-DtIs0F3t.js';
import './ProgramTemplate-C-6BgJUd.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-Ctkd6_gr.js';
import './floatRGBA-Cc0EEDel.js';
import './FeatureCommandQueue-C7xMpgd_.js';
import './HighlightCounter-d5T9XmMC.js';
import './popupUtils-B8m_gfAy.js';
import './RefreshableLayerView-j5rlPuC_.js';

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
