import { bd as e, be as y, bf as a$1 } from './main-C4Zge2Yj.js';
import { r as re } from './FeatureLayerView2D-C1W2duaE.js';
import './preload-helper-dJJaZANz.js';
import './Container-BRZw5EQp.js';
import './highlightReasons-CvAQeGxW.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-BghNYWXB.js';
import './timeSupport-C_oYRIWg.js';
import './LayerView-CLnau-rv.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-sWqIDujE.js';
import './UpdateTracking2D-wzUiT6rH.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-CEiQRDGb.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-BexxQf0w.js';
import './Program-BvYEs7q3.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-DK31hApB.js';
import './TileContainer-DfSQBEsU.js';
import './WGLContainer-F_pfnvV9.js';
import './ProgramTemplate-x-eDnpWW.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-Dk31jkT2.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-PhTMO4kC.js';
import './floatRGBA-B6OXKXTb.js';
import './FeatureCommandQueue-BZh52aGy.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-DbJazN4Z.js';
import './popupUtils-D5fhSr9Z.js';
import './RefreshableLayerView-BRLGk7d3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([a$1("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let t=class extends(o(re)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([a$1("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
