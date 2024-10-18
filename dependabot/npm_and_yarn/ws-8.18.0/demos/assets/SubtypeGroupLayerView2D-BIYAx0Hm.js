import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-BVpNLj1j.js';
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
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
