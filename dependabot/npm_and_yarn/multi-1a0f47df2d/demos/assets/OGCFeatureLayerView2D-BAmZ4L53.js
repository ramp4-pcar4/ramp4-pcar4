import { aW as e, aX as y, aY as c } from './main-DsxUm4BM.js';
import { X } from './FeatureLayerView2D-Bxsd61wQ.js';
import './preload-helper-dJJaZANz.js';
import './Container-C9BmQWE-.js';
import './highlightReasons-JToli7Ry.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-Dw_d0r_y.js';
import './LayerView-Bt460dFg.js';
import './TechniqueInstance-DTxS8ZOy.js';
import './UpdateTracking2D-BFE0IEz2.js';
import './TurboLine-5pENCWC9.js';
import './enums-DZmWLm_j.js';
import './earcut-DkxIEg29.js';
import './GeometryUtils-DggWfWum.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-6KBGMG2-.js';
import './Program-CMPD3EBv.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DE3jzaIg.js';
import './constants-C0QDwCF4.js';
import './TileContainer-p-Nl0iGH.js';
import './WGLContainer-BI8jYtRQ.js';
import './ProgramTemplate-G6d1sVwb.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-CWPvIjqV.js';
import './floatRGBA-CVuC-LgL.js';
import './FeatureCommandQueue-BAPHOPXW.js';
import './HighlightCounter-C8cW5iib.js';
import './popupUtils-BrADUKji.js';
import './RefreshableLayerView-CzzFlu9h.js';

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
