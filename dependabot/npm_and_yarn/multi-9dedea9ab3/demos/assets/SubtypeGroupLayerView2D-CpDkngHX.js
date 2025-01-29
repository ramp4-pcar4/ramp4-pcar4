import { bd as e, bf as a$1, bj as d$1, bk as P, N as has } from './main-YSH8Qvd0.js';
import { r as re } from './FeatureLayerView2D-BQdl7CRe.js';
import './preload-helper-dJJaZANz.js';
import './Container-Bjkx24f1.js';
import './highlightReasons-C6YF5eGX.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-B2fqbWGu.js';
import './timeSupport-DMhNfgYx.js';
import './LayerView-CkazLMcs.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-CS_tnRdI.js';
import './UpdateTracking2D-C4MnIKv0.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-lYpV3DRp.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-Bnf6Ud2A.js';
import './Program-B_1Ck0yX.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-CC8AWGD5.js';
import './TileContainer-DZeC-9ns.js';
import './WGLContainer-D6jupTuP.js';
import './ProgramTemplate-0vuAPRyT.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-1p-jfyBa.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-BpJ21tz6.js';
import './floatRGBA-DRhvO60m.js';
import './FeatureCommandQueue-DtOJUJHH.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-D432ls_Q.js';
import './popupUtils-DFAAp86T.js';
import './RefreshableLayerView-qbhaRSDv.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let o=class extends re{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._workerProxy,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([a$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
