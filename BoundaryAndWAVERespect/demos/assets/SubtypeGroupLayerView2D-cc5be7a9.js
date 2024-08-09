import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-23ddedaa.js';
import { X } from './FeatureLayerView2D-c26698ae.js';
import './preload-helper-a4975f27.js';
import './Container-5226d691.js';
import './highlightReasons-cfe0c5c9.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-549929c3.js';
import './LayerView-ece9b0f8.js';
import './TechniqueInstance-a73a683d.js';
import './UpdateTracking2D-5984d619.js';
import './TurboLine-a2bd5501.js';
import './enums-d24bcbbf.js';
import './earcut-62f1f400.js';
import './GeometryUtils-9a5d41df.js';
import './Rect-09e0f861.js';
import './LabelMetric-512f9254.js';
import './Program-3228e64a.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-4ff81b33.js';
import './constants-412c3a33.js';
import './TileContainer-367cb322.js';
import './WGLContainer-a1febf26.js';
import './ProgramTemplate-17449cf2.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-f9a687ed.js';
import './floatRGBA-22389ab9.js';
import './FeatureCommandQueue-5ea75ca6.js';
import './HighlightCounter-8927fd80.js';
import './popupUtils-f05ee114.js';
import './RefreshableLayerView-3487cdff.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
