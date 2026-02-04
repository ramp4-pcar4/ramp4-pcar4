import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-48Jy8Lgr.js';
import { X } from './FeatureLayerView2D-C6lbjvXK.js';
import './preload-helper-dJJaZANz.js';
import './Container-CsB863Zr.js';
import './highlightReasons-Bw6E7Nh2.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CJSk3waQ.js';
import './LayerView-ctSANoy-.js';
import './TechniqueInstance-Yt3TXzaY.js';
import './UpdateTracking2D-Bc0e6iul.js';
import './TurboLine-C5YrZooe.js';
import './enums-DZmWLm_j.js';
import './earcut-B9Bfurzd.js';
import './GeometryUtils-DX9aSgOT.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-B0d1A5uG.js';
import './Program-BOtrLCCL.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-CcpJDLeq.js';
import './constants-C0QDwCF4.js';
import './TileContainer-Cm1jU1n2.js';
import './WGLContainer-Bhhfjd3N.js';
import './ProgramTemplate-D8nYspAl.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-D4sV0-G_.js';
import './floatRGBA-CVic9aBF.js';
import './FeatureCommandQueue-n1L1FFpq.js';
import './HighlightCounter-TKiyRi0I.js';
import './popupUtils-B3PhRwE5.js';
import './RefreshableLayerView-DW8RYwOY.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
