import { aW as e, aX as y, aY as c } from './main-h0RsJOaN.js';
import { X } from './FeatureLayerView2D-6qoNr7wW.js';
import './preload-helper-dJJaZANz.js';
import './Container-no8pnXne.js';
import './highlightReasons-CUVpjbtW.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CXctlOns.js';
import './LayerView-CGj4P35k.js';
import './TechniqueInstance-JhMqyqyp.js';
import './UpdateTracking2D-utGfkdXU.js';
import './TurboLine-CauNSHyg.js';
import './enums-DZmWLm_j.js';
import './earcut-BhACpGeL.js';
import './GeometryUtils-DDcVwDXK.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-rb3LnDrz.js';
import './Program-CePK5X5d.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-D9PD0FRl.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DeW8uKaN.js';
import './WGLContainer-BN3KNhkx.js';
import './ProgramTemplate-D4tcPS59.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper--vBGpgMV.js';
import './floatRGBA-Bzp1Hs50.js';
import './FeatureCommandQueue-B13GM6Dp.js';
import './HighlightCounter-yAANtBkd.js';
import './popupUtils-DlJdX16-.js';
import './RefreshableLayerView-DVFm8I_K.js';

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
