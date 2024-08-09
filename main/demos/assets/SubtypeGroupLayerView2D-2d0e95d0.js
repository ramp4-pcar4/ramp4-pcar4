import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-79b78ad8.js';
import { X } from './FeatureLayerView2D-2dd536f6.js';
import './preload-helper-a4975f27.js';
import './Container-a0125629.js';
import './highlightReasons-ddca569d.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-87a0b340.js';
import './LayerView-a2d5046d.js';
import './TechniqueInstance-c431e245.js';
import './UpdateTracking2D-95d53311.js';
import './TurboLine-709bc4b5.js';
import './enums-d24bcbbf.js';
import './earcut-3a4dca53.js';
import './GeometryUtils-ffb7e82d.js';
import './Rect-09e0f861.js';
import './LabelMetric-c9cee0c4.js';
import './Program-ca8159be.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-91c24961.js';
import './constants-412c3a33.js';
import './TileContainer-114a0200.js';
import './WGLContainer-4c2fd3d8.js';
import './ProgramTemplate-7b0ece69.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-645ede73.js';
import './floatRGBA-163ca059.js';
import './FeatureCommandQueue-a71baf78.js';
import './HighlightCounter-fa6dfd18.js';
import './popupUtils-91bdd82d.js';
import './RefreshableLayerView-d9068069.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
