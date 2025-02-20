import { bd as e, bf as a$1, bj as d$1, bk as P, N as has } from './main-CaWYn_3L.js';
import { r as re } from './FeatureLayerView2D-CO9HKBRn.js';
import './preload-helper-dJJaZANz.js';
import './Container-CbEAunjn.js';
import './highlightReasons-D9CXlhgN.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-vlYvnA-k.js';
import './timeSupport-BX1kcUJ7.js';
import './LayerView-_4h13NzX.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-n5H-qSD3.js';
import './UpdateTracking2D-DA_g5AxB.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-Bhtn_K0-.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-Z0h134P1.js';
import './Program-DYU3Fazx.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-B8yJfkv0.js';
import './TileContainer-BcN42p2N.js';
import './WGLContainer-BQatdvvZ.js';
import './ProgramTemplate-Ds1ErDDd.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-B6zEfVLC.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-Dqgg7m3U.js';
import './floatRGBA-B2oE2aq-.js';
import './FeatureCommandQueue-5I1hZRGQ.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-B3vXaDB8.js';
import './popupUtils-f5cKcNR8.js';
import './RefreshableLayerView-BeZQFADl.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let o=class extends re{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._workerProxy,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([a$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
