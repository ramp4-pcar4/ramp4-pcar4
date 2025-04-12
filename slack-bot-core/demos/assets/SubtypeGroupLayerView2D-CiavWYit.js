import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-B92PJIAd.js';
import { X } from './FeatureLayerView2D-B-Y1P4yp.js';
import './preload-helper-dJJaZANz.js';
import './Container-CsvGoIhv.js';
import './highlightReasons-DAl4YTur.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-ykeXEf6b.js';
import './LayerView-Bl5Lynf-.js';
import './TechniqueInstance-By5NoKFx.js';
import './UpdateTracking2D-DaO2ibfZ.js';
import './TurboLine-G8Rn-bf8.js';
import './enums-DZmWLm_j.js';
import './earcut-BG2O5cVW.js';
import './GeometryUtils-mGf0eLfe.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-DLN4bkU3.js';
import './Program-DvFotrMU.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-Buxq5VkP.js';
import './constants-C0QDwCF4.js';
import './TileContainer-B1h0Jkql.js';
import './WGLContainer-D3NJkh_7.js';
import './ProgramTemplate-D65jHmBl.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-CV4BPHwJ.js';
import './floatRGBA-CZ7RAaxL.js';
import './FeatureCommandQueue-CkeTINIm.js';
import './HighlightCounter-DP_W4dZv.js';
import './popupUtils-BBaIz9xA.js';
import './RefreshableLayerView-qDNUusOY.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
