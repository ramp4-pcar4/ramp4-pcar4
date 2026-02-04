import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-CjrSZKDN.js';
import { X } from './FeatureLayerView2D-BH5n4mBr.js';
import './preload-helper-dJJaZANz.js';
import './Container-Dzffad4h.js';
import './highlightReasons-jOHx54Tz.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-Bh301Rmh.js';
import './LayerView-D97IYBWk.js';
import './TechniqueInstance--djGm-x2.js';
import './UpdateTracking2D-CnxgIebw.js';
import './TurboLine-Ds5EZLEg.js';
import './enums-DZmWLm_j.js';
import './earcut-C30k8Kn0.js';
import './GeometryUtils-Blz77jLx.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-DiS61eAS.js';
import './Program-ewFdQM5W.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BSy55QTp.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BSu9O9km.js';
import './WGLContainer-Cb25DKOu.js';
import './ProgramTemplate-BtxR9kcQ.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-DzIlXwUt.js';
import './floatRGBA-Dt1rrt4X.js';
import './FeatureCommandQueue-Dj7sLn4V.js';
import './HighlightCounter-Bt01AHTu.js';
import './popupUtils-CuMUJRtu.js';
import './RefreshableLayerView-sWk3Hdvx.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
