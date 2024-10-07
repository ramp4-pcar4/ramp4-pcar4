import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-DNQGUVP9.js';
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
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
