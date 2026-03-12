import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-DbwmOBz5.js';
import { X } from './FeatureLayerView2D-DwwZC5ab.js';
import './preload-helper-dJJaZANz.js';
import './Container-DviF70OM.js';
import './highlightReasons-ChlmhZbe.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-Btu1vg0E.js';
import './LayerView-DRPsVoik.js';
import './TechniqueInstance-Ca7BFVL9.js';
import './UpdateTracking2D-C8_iInBH.js';
import './TurboLine-CqoJwi0j.js';
import './enums-DZmWLm_j.js';
import './earcut-C9lmUnMR.js';
import './GeometryUtils-DogKC5re.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-lIdhL9If.js';
import './Program-BQZhavrO.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DNz56t3G.js';
import './constants-C0QDwCF4.js';
import './TileContainer-CWfWqLjr.js';
import './WGLContainer-CYbfUedO.js';
import './ProgramTemplate-DmXCLrpq.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-GBQq8FfA.js';
import './floatRGBA-CP7R8Ctj.js';
import './FeatureCommandQueue-DlLU5VPn.js';
import './HighlightCounter-DTmE-jJ0.js';
import './popupUtils-0P4fsj-v.js';
import './RefreshableLayerView-CNldZT5A.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
