import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-CKTSJvxW.js';
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
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
