import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-b765c22f.js';
import { X } from './FeatureLayerView2D-69bb2d90.js';
import './preload-helper-a4975f27.js';
import './Container-6aa5e088.js';
import './highlightReasons-22cda4fb.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-bf4bf0d0.js';
import './LayerView-182471b0.js';
import './TechniqueInstance-2f193b2d.js';
import './UpdateTracking2D-0eba3fd3.js';
import './TurboLine-f2824117.js';
import './enums-d24bcbbf.js';
import './earcut-f624721b.js';
import './GeometryUtils-8be09db1.js';
import './Rect-09e0f861.js';
import './LabelMetric-ea3d5cac.js';
import './Program-e3be4f57.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-affbd196.js';
import './constants-412c3a33.js';
import './TileContainer-b412c2fd.js';
import './WGLContainer-5bbd6408.js';
import './ProgramTemplate-33abb5cd.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-db96e925.js';
import './floatRGBA-242b89a4.js';
import './FeatureCommandQueue-70eec926.js';
import './HighlightCounter-e32ab2ee.js';
import './popupUtils-1e860c25.js';
import './RefreshableLayerView-e8f05c4d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
