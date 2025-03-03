import { aW as e, aX as y, aY as c } from './main-CKTSJvxW.js';
import { X } from './FeatureLayerView2D-B8okrkSe.js';
import './preload-helper-dJJaZANz.js';
import './Container--gKs-y7H.js';
import './highlightReasons-BPbJ1zCi.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-Bxngt7of.js';
import './LayerView-B22Bs3np.js';
import './TechniqueInstance-Din7crpZ.js';
import './UpdateTracking2D-BpgwiUxz.js';
import './TurboLine-CfQJ1QMT.js';
import './enums-DZmWLm_j.js';
import './earcut-PjNyhjRs.js';
import './GeometryUtils-DKSvDR_q.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-spRMVgGd.js';
import './Program-DnRvEUlv.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-CM8q1kw5.js';
import './constants-C0QDwCF4.js';
import './TileContainer-kDKTLPIf.js';
import './WGLContainer-j6GEL4j9.js';
import './ProgramTemplate-CtXNm3Du.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-D1Hw0FBv.js';
import './floatRGBA-DlLUaaWI.js';
import './FeatureCommandQueue-CXvC2Kzo.js';
import './HighlightCounter-DqLaoXTU.js';
import './popupUtils-B47riccF.js';
import './RefreshableLayerView-DL2XXH7g.js';

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
