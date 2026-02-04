import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-h0RsJOaN.js';
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
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
