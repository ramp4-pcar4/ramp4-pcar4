import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-BpBTVFw9.js';
import { X } from './FeatureLayerView2D-B3aBcV22.js';
import './preload-helper-dJJaZANz.js';
import './Container-DGaMSjdU.js';
import './highlightReasons-DQdtVmRL.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-Dhn4xmA2.js';
import './LayerView-DRGbIq9j.js';
import './TechniqueInstance-CQBRspzL.js';
import './UpdateTracking2D-CbIdWQzy.js';
import './TurboLine-Cv1qtN4B.js';
import './enums-DZmWLm_j.js';
import './earcut-D3cFMfic.js';
import './GeometryUtils-D0StvwNK.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-Dj2qPwfJ.js';
import './Program-DZgjqPht.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-C5TcFBsN.js';
import './constants-C0QDwCF4.js';
import './TileContainer-eQPNd5yO.js';
import './WGLContainer-DsAUXd2R.js';
import './ProgramTemplate-jUIAzuk8.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-DPx5ARoK.js';
import './floatRGBA-CPBREnzC.js';
import './FeatureCommandQueue-CkIqPqQW.js';
import './HighlightCounter-CeTiVyUT.js';
import './popupUtils-BxyZm7t4.js';
import './RefreshableLayerView-DOFfVP8s.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
