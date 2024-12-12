import { aW as e, aX as y, aY as c } from './main-BVpNLj1j.js';
import { X } from './FeatureLayerView2D-Cx1K7nRo.js';
import './preload-helper-dJJaZANz.js';
import './Container-N1UGHqiY.js';
import './highlightReasons-CBVmPcjl.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DwRYwIAV.js';
import './LayerView-CGDq05jx.js';
import './TechniqueInstance-Cn96Z8wd.js';
import './UpdateTracking2D-CdHXnmrw.js';
import './TurboLine-C-cBd6cu.js';
import './enums-DZmWLm_j.js';
import './earcut-Ces0sJlT.js';
import './GeometryUtils-rNnUWjgc.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-BNd1R4XD.js';
import './Program-BJsRkrt5.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-D_4kYWjS.js';
import './constants-C0QDwCF4.js';
import './TileContainer-C1fXRyTS.js';
import './WGLContainer-hPLtVICn.js';
import './ProgramTemplate-WEzlTSE1.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-B4BjYHV8.js';
import './floatRGBA-HvFShJLA.js';
import './FeatureCommandQueue-ODu-FrPJ.js';
import './HighlightCounter-CslPQbUe.js';
import './popupUtils-CfbEL59w.js';
import './RefreshableLayerView-B_KDNBDJ.js';

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
